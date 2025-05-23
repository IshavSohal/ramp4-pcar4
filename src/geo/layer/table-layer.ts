import {
    ArcServerAttributeLoader,
    type AttributeLoaderDetails,
    DataLayer,
    GlobalEvents,
    InstanceAPI,
    QuickCache
} from '@/api/internal';
import { CoreFilter, Filter, Graphic, LayerType, NoGeometry } from '@/geo/api';
import type {
    Attributes,
    DiscreteGraphicResult,
    QueryFeaturesArcServerParams,
    QueryFeaturesParams,
    RampLayerConfig
} from '@/geo/api';

/**
 * A layer class which implements a Data Layer with data from a ESRI Table service.
 */
export class TableLayer extends DataLayer {
    // TODO if we add AQL filtering to the file based data layers, this prop and the appropriate initializers/methods should migrate to DataLayer
    protected filter: Filter;
    serviceUrl: string;

    constructor(rampConfig: RampLayerConfig, $iApi: InstanceAPI) {
        super(rampConfig, $iApi);
        this.layerType = LayerType.DATATABLE;
        this.serviceUrl = rampConfig.url;
        this.filter = new Filter(rampConfig.permanentFilteredQuery || '', rampConfig.initialFilteredQuery || '');
    }

    protected async onInitiate(): Promise<void> {
        // we do not call super. super has processing code for CompactJson.
        // there is really no initiate work here since there is no esri layer to construct,
        // and the server interrogation will happen in onLoadActions.
        //
        // this function exists just to stop super.
        // common layer stuff is done in .initiate()
    }

    protected onLoadActions(): Array<Promise<void>> {
        // super call currently does nothing.
        // once data layers mature, we can decide to remove this, or
        // move it to the end of this method if super starts doing something.
        // whatever works best.
        const loadPromises: Array<Promise<void>> = super.onLoadActions();
        const startTime = Date.now();

        const urlData = this.$iApi.geo.shared.parseUrlIndex(this.serviceUrl);
        const featIdx: number = urlData.index || 0;

        // update asynch data
        const pLD: Promise<void> = this.$iApi.geo.layer.loadLayerMetadata(this.serviceUrl).then(sData => {
            if (startTime < this.lastCancel) {
                return;
            }
            if (!this.name) {
                this.name = sData.name;
            }
            this.layerTree.name = this.name;

            this.oidField = sData.objectIdField;

            // apply any config based overrides to the data we just downloaded

            // process fields and any overrides
            this.fields = sData.fields;

            this.$iApi.geo.attributes.applyFieldMetadata(this, this.origRampConfig.fieldMetadata);

            // NOTE this must be called after the fields are set
            this.nameInitializer(this.origRampConfig, sData.displayField);

            // set up attribute loader.
            // will add a cache even though it will be rarely used (would require an API call to show details prior to grid load)
            const loadData: AttributeLoaderDetails = {
                // version number is only provided on 10.0 SP1 servers and up.
                // servers 10.1 and higher support the query limit flag
                supportsLimit: (sData.currentVersion || 1) >= 10.1,
                serviceUrl: this.serviceUrl,
                oidField: this.oidField,
                batchSize: -1,
                attribs: this.fieldList,
                permanentFilter: this.getSqlFilter(CoreFilter.PERMANENT),
                fieldsToTrim: this.getFieldsToTrim()
            };
            this.attribs.attLoader = new ArcServerAttributeLoader(this.$iApi, loadData);
            this.attribs.quickCache = new QuickCache(this.geomType);
        });

        // feature count
        const pFC = this.$iApi.geo.layer
            .loadFeatureCount(this.serviceUrl, this.getSqlFilter(CoreFilter.PERMANENT))
            .then(count => {
                if (startTime > this.lastCancel) {
                    this.featureCount = count;
                }
            });

        this.layerTree.layerIdx = featIdx;

        loadPromises.push(pLD, pFC);

        return loadPromises;
    }

    async getGraphic(objectId: number): Promise<Graphic> {
        // overridden from DataLayer just to take advantage of caching. If we decide to drop caching, this can almost be deleted;
        // would just need to ensure the attribute downloader runs first if not already started.

        let resultAttribs: Attributes = {};

        // attempt to get attributes from fastest source.
        const aCache = this.attribs.quickCache.getAttribs(objectId);
        if (aCache) {
            // value is already cached. use it
            resultAttribs = aCache;
        } else if (this.attribs.attLoader.isLoaded()) {
            // all attributes have been loaded (or is a file and are local). use that store.
            // since attributes come from a promise, reset the wait promise to the attribute promise
            const atSet = await this.attribs.attLoader.getAttribs();
            resultAttribs = atSet.features[atSet.oidIndex[objectId]];
        } else {
            // we will need to download data from the service

            const serviceParams = {
                oid: objectId,
                serviceUrl: this.serviceUrl,
                includeGeometry: false,
                attribs: this.fieldList
            };

            const webFeat = await this.$iApi.geo.attributes.loadSingleFeature(serviceParams);

            this.attribs.quickCache.setAttribs(objectId, webFeat.attributes);

            resultAttribs = webFeat.attributes;
        }

        // logic in attribute param - we need attributes if style was requested. So it's possible our
        // resultAttribs has values due to a style request, but caller does not want attributes on the result.
        const resGraphic = new Graphic(new NoGeometry(), '', resultAttribs);

        return resGraphic;
    }

    abortAttributeLoad(): void {
        this.attribs.attLoader.abortAttribLoad();
    }

    clearFeatureCache(): void {
        this.attribs.clearAll();
    }

    downloadedAttributes(): number {
        if (this.isLoaded) {
            return this.attribs.attLoader.loadCount();
        } else {
            return 0;
        }
    }

    attribLoadAborted(): boolean {
        if (this.isLoaded) {
            return this.attribs.attLoader.isLoadAborted();
        } else {
            return false;
        }
    }

    // -- filter stuff --

    // A lot of overlap & duplication with AttribLayer. Currently don't have a good sharing mechansim.
    // Most of these methods are small so abstracting to geo.attribs seems equally pointless.
    // Making a common class between data and attribute layers adds in other duplications for the non-attribute-layer stuff.
    // This set of methods is more streamlined since there are no layer/extent stuff to deal with.

    setSqlFilter(filterKey: string, whereClause: string): void {
        // dirty test
        const currentFilter = this.filter.getSql(filterKey);
        if (whereClause === currentFilter) {
            return;
        }

        this.filter.setSql(filterKey, whereClause);

        this.$iApi.event.emit(GlobalEvents.FILTER_CHANGE, {
            uid: this.uid,
            filterKey
        });

        // no debounce stuff required since no layer
    }

    getSqlFilter(filterKey: string): string {
        return this.filter.getSql(filterKey);
    }

    /**
     * Returns a SQL WHERE condition that is combination of active filters.
     *
     * @method getCombinedSqlFilter
     * @param {Array} [exclusions] list of any filter keys to exclude from the result. omission includes all filters
     * @returns {String} all non-excluded sql statements connected with AND operators.
     */
    getCombinedSqlFilter(exclusions?: string[]): string {
        return this.filter.getCombinedSql(exclusions);
    }

    async getFilterOIDs(exclusions: Array<string> = []): Promise<Array<number> | undefined> {
        const sql = this.filter.getCombinedSql(exclusions);

        if (!sql) {
            // no filters active. return undefined so caller can not worry about applying filters
            return undefined;
        }

        // this must be done after the setExtent() call, as that call can potentially invalidate caches
        const impactedFilters = this.filter.sqlActiveFilters(exclusions);
        let cache = this.filter.getCache(impactedFilters, false);

        // if not cached, execute a query and store the result as the cache
        if (!cache) {
            const qOpts: QueryFeaturesParams = {
                filterSql: sql,
                includeGeometry: false
            };
            cache = this.queryOIDs(qOpts);
            this.filter.setCache(cache, impactedFilters, false);
        }
        return cache;
    }

    /**
     * Will return an array of object ids for features in the layer that satisfy the conditions of the query options parameter.
     * @param options {Object} options to provide filters and helpful information.
     * @returns {Promise} resolves with an array of numbers (object ids)
     */
    queryOIDs(options: QueryFeaturesParams): Promise<Array<number>> {
        // execute the query ids
        const agsOpt: QueryFeaturesArcServerParams = {
            url: this.serviceUrl,
            ...options
        };

        return this.$iApi.geo.query.arcGisServerQueryIds(agsOpt);
    }

    /**
     * Requests a set of features for this layer that match the criteria of the options
     * - filterGeometry : a RAMP API geometry to restrict results to
     * - filterSql : a where clause to apply against feature attributes
     * - includeGeometry : a boolean to indicate if result features should include the geometry
     * - sourceSR : a spatial reference indicating what the source layer is encoded in. providing can assist in result geometry being of a proper resolution
     *
     * @param options {Object} options to provide filters and helpful information.
     * @returns {Promise} resolves in an array of object ids and promises resolving in each feature
     */
    async queryFeaturesDiscrete(options: QueryFeaturesParams): Promise<Array<DiscreteGraphicResult>> {
        // TODO potential optimization.
        //      see notes in same method inside AttribLayer

        const oids = await this.queryOIDs(options);

        return oids.map(oid => ({
            oid: oid,
            graphic: this.getGraphic(oid)
        }));
    }

    /**
     * Requests a set of features for this layer that match the criteria of the options
     * - filterSql : a where clause to apply against feature attributes
     * - outFields : a string of comma separated field names. will restrict fields included in the output
     *
     * @param options {Object} options to provide filters and helpful information.
     * @returns {Promise} resolves with an array of features that satisfy the criteria
     */
    async queryFeatures(options: QueryFeaturesParams): Promise<Array<Graphic>> {
        // runs discrete version, waits for everything to download,
        // returns entire set in a cleaner array
        const discreteResult = await this.queryFeaturesDiscrete(options);
        return Promise.all(discreteResult.map(dr => dr.graphic));
    }
}
