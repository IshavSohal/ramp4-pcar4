import { aW as e, aX as y, a3 as V, aY as c$2, dY as S$1, b2 as d$1, b4 as P$1, aZ as v$1, i0 as e$1, i1 as O, i2 as n$1, i3 as e$2, i4 as i, z as geo, A as createInstance } from './main-6KLKyala.js';
import { p as p$2 } from './ClipRect-DLiUAi3L.js';
import './preload-helper-dJJaZANz.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
function p$1(i,t){const e=10**t;return Math.round(i*e)/e}const c$1={left:0,right:0,top:0,bottom:0};let h$1=class h extends S$1{constructor(i){super(i),this._leadingClips=new Map,this._trailingClips=new Map,this.direction="horizontal",this.leadingLayers=new V,this.max=100,this.min=0,this.precision=4,this.step=.5,this.stepMultiplier=10,this.trailingLayers=new V,this.view=null;}initialize(){this.addHandles([d$1((()=>[this.view,this.view?.ready,this.position,this.direction]),(()=>this._clipLayers()),P$1),v$1((()=>this.leadingLayers),"change",(()=>this._clipLeadingLayers())),v$1((()=>this.trailingLayers),"change",(()=>this._clipTrailingLayers()))]);}destroy(){this._removeExistingClips();}get position(){return 25}set position(i){const{precision:t,min:e,max:s}=this;this._set("position",p$1(Math.max(Math.min(i,s),e),t));}get state(){const{view:i}=this;return i&&i.ready?"ready":"disabled"}_clipLayers(){this._clipLeadingLayers(),this._clipTrailingLayers();}_clipLeadingLayers(){this._removeClips("leading");const{leadingLayers:i}=this;i.forEach((i=>this._clipLayer({layer:i,type:"leading"})));}_clipTrailingLayers(){this._removeClips("trailing");const{trailingLayers:i}=this;i.forEach((i=>this._clipLayer({layer:i,type:"trailing"})));}async _getLayerView(i){const{view:t}=this;if(!i||!t)return null;const e=await t.whenLayerView(i);return "clips"in e?e:null}_getVerticalClipRect(i){const{position:t}=this;return "leading"===i?new p$2({...c$1,bottom:100-t+"%"}):"trailing"===i?new p$2({...c$1,top:`${t}%`}):null}_getHorizontalClipRect(i){const{position:t}=this;return "leading"===i?new p$2({...c$1,right:100-t+"%"}):"trailing"===i?new p$2({...c$1,left:`${t}%`}):null}_getClipRect(i){const{direction:t}=this;return "vertical"===t?this._getVerticalClipRect(i):"horizontal"===t?this._getHorizontalClipRect(i):null}async _clipLayer(i){const{_leadingClips:t,_trailingClips:e}=this,{layer:s,type:r}=i,o="trailing"===r?e:"leading"===r?t:null,l=await this._getLayerView(s);if(!(l&&"clips"in l&&o&&l.hasOwnProperty("clips")))return;const n=o.get(l);n&&l.clips.remove(n);const a=this._getClipRect(r);a&&(o.set(l,a),l.clips.add(a));}_removeClips(i){const{_leadingClips:t,_trailingClips:e}=this,s="trailing"===i?e:"leading"===i?t:null;s&&(s.forEach(((i,t)=>{t&&t.hasOwnProperty("clips")&&t.clips.remove(i);})),s.clear());}_removeExistingClips(){this._removeClips("leading"),this._removeClips("trailing");}};e([y()],h$1.prototype,"direction",void 0),e([y({type:V,nonNullable:!0})],h$1.prototype,"leadingLayers",void 0),e([y({readOnly:!0})],h$1.prototype,"max",void 0),e([y({readOnly:!0})],h$1.prototype,"min",void 0),e([y()],h$1.prototype,"position",null),e([y()],h$1.prototype,"precision",void 0),e([y({readOnly:!0})],h$1.prototype,"state",null),e([y()],h$1.prototype,"step",void 0),e([y()],h$1.prototype,"stepMultiplier",void 0),e([y({type:V,nonNullable:!0})],h$1.prototype,"trailingLayers",void 0),e([y()],h$1.prototype,"view",void 0),h$1=e([c$2("esri.widgets.Swipe.SwipeViewModel")],h$1);const g=h$1;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
const d="esri-swipe",p={base:d,widgetIcon:i.upDownArrows,baseDisabled:`${d}--disabled`,vertical:`${d}--vertical`,horizontal:`${d}--horizontal`,container:`${d}__container`,divider:`${d}__divider`,handle:`${d}__handle`,handleHidden:`${d}__handle--hidden`,handleIcon:`${d}__handle-icon`},c={handle:!0,divider:!0};let h=class extends O{constructor(e,t){super(e,t),this.disabled=!1,this.iconClass=p.widgetIcon,this.icon=null,this.messages=null,this.viewModel=new g,this._pointerOffset=0,this._container=null,this._onContainerPointerDown=this._onContainerPointerDown.bind(this),this._onContainerPointerMove=this._onContainerPointerMove.bind(this),this._onContainerPointerUp=this._onContainerPointerUp.bind(this);}get direction(){return this.viewModel.direction}set direction(e){this.viewModel.direction=e;}get dragLabel(){return this.messages?.dragLabel??""}set dragLabel(e){this._overrideIfSome("dragLabel",e);}get label(){return this.messages?.widgetLabel??""}set label(e){this._overrideIfSome("label",e);}get leadingLayers(){return this.viewModel.leadingLayers}set leadingLayers(e){this.viewModel.leadingLayers=e;}get position(){return this.viewModel.position}set position(e){this.viewModel.position=e;}get trailingLayers(){return this.viewModel.trailingLayers}set trailingLayers(e){this.viewModel.trailingLayers=e;}get view(){return this.viewModel.view}set view(e){this.viewModel.view=e;}set visibleElements(e){this._set("visibleElements",{...c,...e});}get visibleElements(){return this._get("visibleElements")||c}render(){const{state:e,direction:t}=this.viewModel,i="disabled"===e||this.disabled,n={[e$2.disabled]:i,[p.baseDisabled]:i,[p.vertical]:"vertical"===t,[p.horizontal]:"horizontal"===t};return n$1("div",{class:this.classes(p.base,e$2.widget,n)},"disabled"===e?null:this._renderContainer())}_renderHandle(){const{direction:e}=this.viewModel,{visibleElements:t}=this,i$1={[i.dragHorizontal]:"vertical"===e,[i.dragVertical]:"horizontal"===e},n=this.classes(p.handle,!t.handle&&p.handleHidden);return n$1("div",{class:n,key:"handle",role:"presentation"},n$1("span",{"aria-hidden":"true",class:this.classes(p.handleIcon,i$1)}))}_renderDivider(){const{visibleElements:e}=this;return e&&e.divider?n$1("div",{class:p.divider,key:"divider",role:"presentation"}):null}_renderContent(){return [this._renderDivider(),this._renderHandle()]}_renderContainer(){const{disabled:e,dragLabel:t,viewModel:i}=this,{max:n,min:o,direction:r,position:s}=i,l=`${s}%`,d={top:"vertical"===r?l:void 0,left:"vertical"===r?void 0:l},c=this._renderContent();return n$1("div",e?{class:p.container,key:"container",role:"presentation",styles:d}:{afterCreate:this._afterContainerCreate,"aria-label":t,"aria-orientation":r,"aria-valuemax":`${n}`,"aria-valuemin":`${o}`,"aria-valuenow":`${s}`,"aria-valuetext":l,bind:this,class:p.container,key:"container",onkeydown:this._onContainerKeyDown,role:"slider",styles:d,tabIndex:0,title:t,"touch-action":"none"},c)}_afterContainerCreate(e){this._container=e,e.addEventListener("pointerdown",this._onContainerPointerDown);}_calculatePointerOffset(e){const{direction:t}=this,i=e.target,n=("vertical"===t?i.clientHeight:i.clientWidth)/2,o=i.getBoundingClientRect(),r=e.clientX-o.left,s=e.clientY-o.top;this._pointerOffset="vertical"===t?s-n:r-n;}_onContainerPointerDown(e){e.preventDefault(),this._container&&document.activeElement!==this.container&&this._container.focus(),this._calculatePointerOffset(e),document.addEventListener("pointerup",this._onContainerPointerUp),document.addEventListener("pointermove",this._onContainerPointerMove);}_onContainerPointerUp(e){e.preventDefault(),document.removeEventListener("pointerup",this._onContainerPointerUp),document.removeEventListener("pointermove",this._onContainerPointerMove);}_onContainerPointerMove(e){e.preventDefault();const{_pointerOffset:t,container:i,direction:n}=this,{clientX:o,clientY:r}=e,{top:s,left:a,width:l,height:d}=i.getBoundingClientRect(),p=("vertical"===n?r-s-t:o-a-t)/("vertical"===n?d:l)*100;this.position=p;}_getKeyPosition(e){const{key:t}=e,{position:i}=this,{max:n,min:o,step:r,stepMultiplier:s,direction:a}=this.viewModel,l=r*s;["ArrowUp","ArrowDown","ArrowLeft","ArrowRight","Home","End","PageUp","PageDown"].includes(t)&&(e.preventDefault(),e.stopPropagation());if("vertical"===a?"ArrowDown"===t||"ArrowRight"===t:"ArrowUp"===t||"ArrowRight"===t){return i+(e.shiftKey?l:r)}if("vertical"===a?"ArrowUp"===t||"ArrowLeft"===t:"ArrowDown"===t||"ArrowLeft"===t){return i-(e.shiftKey?l:r)}if("Home"===t)return o;if("End"===t)return n;if("vertical"===a?"PageDown"===t:"PageUp"===t)return i+l;return ("vertical"===a?"PageUp"===t:"PageDown"===t)?i-l:null}_onContainerKeyDown(e){const t=this._getKeyPosition(e);"number"==typeof t&&(this.position=t);}};e([y()],h.prototype,"direction",null),e([y()],h.prototype,"disabled",void 0),e([y()],h.prototype,"dragLabel",null),e([y()],h.prototype,"iconClass",void 0),e([y()],h.prototype,"icon",void 0),e([y()],h.prototype,"label",null),e([y()],h.prototype,"leadingLayers",null),e([y(),e$1("esri/widgets/Swipe/t9n/Swipe")],h.prototype,"messages",void 0),e([y()],h.prototype,"position",null),e([y()],h.prototype,"trailingLayers",null),e([y()],h.prototype,"view",null),e([y({type:g})],h.prototype,"viewModel",void 0),e([y()],h.prototype,"visibleElements",null),h=e([c$2("esri.widgets.Swipe")],h);const v=h;

window.debugInstance = null;

let config = {
    configs: {
        en: {
            map: {
                extentSets: [
                    {
                        id: 'EXT_ESRI_World_AuxMerc_3857',
                        default: {
                            xmax: -5007771.626060756,
                            xmin: -16632697.354854,
                            ymax: 10015875.184845109,
                            ymin: 5022907.964742964,
                            spatialReference: {
                                wkid: 102100,
                                latestWkid: 3857
                            }
                        }
                    },
                    {
                        id: 'EXT_NRCAN_Lambert_3978',
                        default: {
                            xmax: 3549492,
                            xmin: -2681457,
                            ymax: 3482193,
                            ymin: -883440,
                            spatialReference: {
                                wkid: 3978
                            }
                        }
                    }
                ],
                caption: {
                    mapCoords: {
                        formatter: 'WEB_MERCATOR'
                    },
                    scaleBar: {
                        imperialScale: true
                    }
                },
                mapMouseThrottle: 200,
                lodSets: [
                    {
                        id: 'LOD_NRCAN_Lambert_3978',
                        lods: geo.defaultLODs(geo.defaultTileSchemas()[0])
                    },
                    {
                        id: 'LOD_ESRI_World_AuxMerc_3857',
                        lods: geo.defaultLODs(geo.defaultTileSchemas()[1])
                    }
                ],
                tileSchemas: [
                    {
                        id: 'EXT_NRCAN_Lambert_3978#LOD_NRCAN_Lambert_3978',
                        name: 'Lambert Maps',
                        extentSetId: 'EXT_NRCAN_Lambert_3978',
                        lodSetId: 'LOD_NRCAN_Lambert_3978',
                        thumbnailTileUrls: ['/tile/8/285/268', '/tile/8/285/269'],
                        hasNorthPole: true
                    },
                    {
                        id: 'EXT_ESRI_World_AuxMerc_3857#LOD_ESRI_World_AuxMerc_3857',
                        name: 'Web Mercator Maps',
                        extentSetId: 'EXT_ESRI_World_AuxMerc_3857',
                        lodSetId: 'LOD_ESRI_World_AuxMerc_3857',
                        thumbnailTileUrls: ['/tile/8/91/74', '/tile/8/91/75']
                    }
                ],
                basemaps: [
                    {
                        id: 'baseNrCan',
                        name: 'Canada Base Map - Transportation (CBMT)',
                        description:
                            'The Canada Base Map - Transportation (CBMT) web mapping services of the Earth Sciences Sector at Natural Resources Canada, are intended primarily for online mapping application users and developers.',
                        altText: 'The Canada Base Map - Transportation (CBMT)',
                        layers: [
                            {
                                id: 'CBMT',
                                layerType: 'esri-tile',
                                url: 'https://maps-cartes.services.geo.ca/server2_serveur2/rest/services/BaseMaps/CBMT3978/MapServer'
                            }
                        ],
                        tileSchemaId: 'EXT_NRCAN_Lambert_3978#LOD_NRCAN_Lambert_3978'
                    },
                    {
                        id: 'baseSimple',
                        name: 'Canada Base Map - Simple',
                        description: 'Canada Base Map - Simple',
                        altText: 'Canada base map - Simple',
                        layers: [
                            {
                                id: 'SMR',
                                layerType: 'esri-tile',
                                url: 'https://maps-cartes.services.geo.ca/server2_serveur2/rest/services/BaseMaps/Simple/MapServer'
                            }
                        ],
                        tileSchemaId: 'EXT_NRCAN_Lambert_3978#LOD_NRCAN_Lambert_3978'
                    },
                    {
                        id: 'baseCBME_CBCE_HS_RO_3978',
                        name: 'Canada Base Map - Elevation (CBME)',
                        description:
                            'The Canada Base Map - Elevation (CBME) web mapping services of the Earth Sciences Sector at Natural Resources Canada, is intended primarily for online mapping application users and developers.',
                        altText: 'Canada Base Map - Elevation (CBME)',
                        layers: [
                            {
                                id: 'CBME_CBCE_HS_RO_3978',
                                layerType: 'esri-tile',
                                url: 'https://maps-cartes.services.geo.ca/server2_serveur2/rest/services/BaseMaps/CBME_CBCE_HS_RO_3978/MapServer'
                            }
                        ],
                        tileSchemaId: 'EXT_NRCAN_Lambert_3978#LOD_NRCAN_Lambert_3978'
                    },
                    {
                        id: 'baseCBMT_CBCT_GEOM_3978',
                        name: 'Canada Base Map - Transportation (CBMT)',
                        description:
                            ' The Canada Base Map - Transportation (CBMT) web mapping services of the Earth Sciences Sector at Natural Resources Canada, are intended primarily for online mapping application users and developers.',
                        altText: 'Canada Base Map - Transportation (CBMT)',
                        layers: [
                            {
                                id: 'CBMT_CBCT_GEOM_3978',
                                layerType: 'esri-tile',
                                url: 'https://maps-cartes.services.geo.ca/server2_serveur2/rest/services/BaseMaps/CBMT_CBCT_GEOM_3978/MapServer'
                            }
                        ],
                        backgroundColour: '#BFE8FE',
                        tileSchemaId: 'EXT_NRCAN_Lambert_3978#LOD_NRCAN_Lambert_3978'
                    },
                    {
                        id: 'baseEsriWorld',
                        name: 'World Imagery',
                        description:
                            'World Imagery provides one meter or better satellite and aerial imagery in many parts of the world and lower resolution satellite imagery worldwide.',
                        altText: 'World Imagery',
                        layers: [
                            {
                                id: 'World_Imagery',
                                layerType: 'esri-tile',
                                url: 'https://services.arcgisonline.com/arcgis/rest/services/World_Imagery/MapServer'
                            }
                        ],
                        tileSchemaId: 'EXT_ESRI_World_AuxMerc_3857#LOD_ESRI_World_AuxMerc_3857',
                        attribution: {
                            text: {
                                disabled: true
                            },
                            logo: {
                                disabled: true
                            }
                        }
                    },
                    {
                        id: 'baseEsriPhysical',
                        name: 'World Physical Map',
                        description:
                            'This map presents the Natural Earth physical map at 1.24km per pixel for the world and 500m for the coterminous United States.',
                        altText: 'World Physical Map',
                        layers: [
                            {
                                id: 'World_Physical_Map',
                                layerType: 'esri-tile',
                                url: 'https://services.arcgisonline.com/arcgis/rest/services/World_Physical_Map/MapServer'
                            }
                        ],
                        tileSchemaId: 'EXT_ESRI_World_AuxMerc_3857#LOD_ESRI_World_AuxMerc_3857'
                    },
                    {
                        id: 'baseEsriRelief',
                        name: 'World Shaded Relief',
                        description:
                            'This map portrays surface elevation as shaded relief. This map is used as a basemap layer to add shaded relief to other GIS maps, such as the ArcGIS Online World Street Map.',
                        altText: 'World Shaded Relief',
                        layers: [
                            {
                                id: 'World_Shaded_Relief',
                                layerType: 'esri-tile',
                                url: 'https://services.arcgisonline.com/arcgis/rest/services/World_Shaded_Relief/MapServer'
                            }
                        ],
                        tileSchemaId: 'EXT_ESRI_World_AuxMerc_3857#LOD_ESRI_World_AuxMerc_3857'
                    },
                    {
                        id: 'baseEsriStreet',
                        name: 'World Street Map',
                        description: 'This worldwide street map presents highway-level data for the world.',
                        altText: 'ESWorld Street Map',
                        layers: [
                            {
                                id: 'World_Street_Map',
                                layerType: 'esri-tile',
                                url: 'https://services.arcgisonline.com/arcgis/rest/services/World_Street_Map/MapServer'
                            }
                        ],
                        tileSchemaId: 'EXT_ESRI_World_AuxMerc_3857#LOD_ESRI_World_AuxMerc_3857'
                    },
                    {
                        id: 'baseEsriTerrain',
                        name: 'World Terrain Base',
                        description:
                            'This map is designed to be used as a base map by GIS professionals to overlay other thematic layers such as demographics or land cover.',
                        altText: 'World Terrain Base',
                        layers: [
                            {
                                id: 'World_Terrain_Base',
                                layerType: 'esri-tile',
                                url: 'https://services.arcgisonline.com/arcgis/rest/services/World_Terrain_Base/MapServer'
                            }
                        ],
                        tileSchemaId: 'EXT_ESRI_World_AuxMerc_3857#LOD_ESRI_World_AuxMerc_3857'
                    },
                    {
                        id: 'baseEsriTopo',
                        name: 'World Topographic Map',
                        description:
                            'This map is designed to be used as a basemap by GIS professionals and as a reference map by anyone.',
                        altText: 'World Topographic Map',
                        layers: [
                            {
                                id: 'World_Topo_Map',
                                layerType: 'esri-tile',
                                url: 'https://services.arcgisonline.com/arcgis/rest/services/World_Topo_Map/MapServer'
                            }
                        ],
                        tileSchemaId: 'EXT_ESRI_World_AuxMerc_3857#LOD_ESRI_World_AuxMerc_3857'
                    },
                    {
                        id: 'baseOpenStreetMap',
                        name: 'OpenStreetMap',
                        description: 'Open sourced topographical map.',
                        altText: 'OpenStreetMap',
                        layers: [
                            {
                                id: 'Open_Street_Map',
                                layerType: 'osm-tile'
                            }
                        ],
                        thumbnailUrl:
                            'https://www.openstreetmap.org/assets/about/osm-a74d2c94082260032c133b9d206ee2fdd911e5c82bf03daae10393a02d7b4809.png',
                        tileSchemaId: 'EXT_ESRI_World_AuxMerc_3857#LOD_ESRI_World_AuxMerc_3857'
                    }
                ],
                initialBasemapId: 'baseEsriWorld'
            },
            layers: [
                {
                    id: 'Nature',
                    layerType: 'esri-feature',
                    url: 'https://section917.canadacentral.cloudapp.azure.com/arcgis/rest/services/TestData/EcoAction/MapServer/6'
                },
                {
                    id: 'Water',
                    layerType: 'esri-feature',
                    url: 'https://section917.canadacentral.cloudapp.azure.com/arcgis/rest/services/TestData/EcoAction/MapServer/8'
                }
            ],
            fixtures: {
                legend: {
                    root: {
                        children: [
                            {
                                layerId: 'Nature'
                            },
                            {
                                layerId: 'Water'
                            }
                        ]
                    }
                },
                appbar: {
                    items: ['legend', 'geosearch', 'basemap', 'export', 'layer-reorder']
                },
                mapnav: {
                    items: ['fullscreen', 'geolocator', 'help', 'home', 'basemap', 'legend', 'geosearch']
                },
                export: {
                    title: {
                        value: 'Enjoy this Export',
                        selectable: false
                    },
                    legend: {
                        selected: false
                    },
                    fileName: 'ramp-pcar-4-map-carte'
                },
                help: {
                    location: '../help'
                }
            },
            panels: {
                open: [{ id: 'legend', pin: true }]
            },
            system: { animate: true }
        }
    }
};

let options = {
    loadDefaultFixtures: true,
    loadDefaultEvents: true,
    startRequired: false
};

const rInstance = createInstance(document.getElementById('app'), config, options);

// add export fixtures
rInstance.fixture.add('export');

// create a fixture for the slider
rInstance.fixture.add('swipe');
setTimeout(() => {
    const view = rInstance.geo.map.esriView;
    const natureLayer = rInstance.geo.layer.getLayer('Nature').esriLayer;
    const waterLayer = rInstance.geo.layer.getLayer('Water').esriLayer;
    const leading = new V();
    leading.add(natureLayer);
    const trailing = new V();
    trailing.add(waterLayer);
    const swipe = new v({
        view: view,
        leadingLayers: leading,
        trailingLayers: trailing,
        position: 50,
        visibleElements: { divider: true, handle: true },
        dragLabel: 'drag the thing',
        disabled: false,
        visible: true
    });
    view.ui.add(swipe);

    console.log('current zoom level of map');
    console.log(view.zoom);

    const slider = document.getElementById('layerSlider');

    slider?.addEventListener('input', () => {
        const diff = +slider.value - 50;
        swipe.position = 50 + 0.99 * diff;
    });
}, 5000);

// load map if startRequired is true
if (rInstance.startRequired) {
    rInstance.start();
}

window.debugInstance = rInstance;
