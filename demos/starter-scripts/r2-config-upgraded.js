import { createInstance, configUpgrade } from '@/main';

window.debugInstance = null;

const r2config = {
    ui: {
        title: 'Custom Title',
        navBar: {
            zoom: 'buttons',
            extra: ['fullscreen', 'geoLocator', 'home', 'help']
        },
        sideMenu: {
            logo: true
        },
        help: {
            folderName: 'default'
        },
        legend: {
            isOpen: {
                large: true,
                medium: true,
                small: false
            }
        }
    },
    version: '2.0',
    language: 'en',
    services: {
        proxyUrl: 'https://maps.canada.ca/wmsproxy/ws/wmsproxy/executeFromProxy',
        exportMapUrl:
            'https://maps-cartes.qa.ec.gc.ca/arcgis/rest/services/Utilities/PrintingTools/GPServer/Export%20Web%20Map%20Task',
        export: {
            title: {
                value: 'Title'
            },
            map: {},
            mapElements: {},
            legend: {},
            timeout: 5000,
            footnote: {
                value: 'This is a footnote added from the configuration file. The note is very long so it should wrap on multiple lines when it reaches a certain limit in size. Maybe some user will want to use this as aplace holder to put a lot of information so we need to be able to wrap this content. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Fusce aliquet ante quis aliquet feugiat. Cras eget semper nunc, eu placerat purus. Nunc sed lacinia enim, ut sollicitudin quam. Nunc quis finibus massa, eget maximus enim. Donec ac nisl libero. Nunc eu pharetra arcu. Fusce luctus, magna cursus gravida tristique, risus nisi porttitor magna, ac dictum ipsum dui vel nulla. Integer id ornare augue. Quisque condimentum velit quis elementum porta. Sed dui enim, iaculis cursus diam volutpat, laoreet porta quam. Sed nec aliquet magna. Curabitur commodo fringilla metus, eu posuere sapien mollis nec.'
            }
        },
        search: {
            serviceUrls: {
                geoNames: 'https://geogratis.gc.ca/services/geoname/en/geonames.json',
                geoLocation: 'https://geogratis.gc.ca/services/geolocation/en/locate?q=',
                geoSuggest: 'https://geogratis.gc.ca/services/geolocation/en/suggest?q=',
                provinces: 'https://geogratis.gc.ca/services/geoname/en/codes/province.json',
                types: 'https://geogratis.gc.ca/services/geoname/en/codes/concise.json'
            }
        }
    },
    map: {
        initialBasemapId: 'baseNrCan',
        components: {
            geoSearch: {
                enabled: true,
                showGraphic: true,
                showInfo: true
            },
            mouseInfo: {
                enabled: true,
                spatialReference: {
                    wkid: 102100
                }
            },
            northArrow: {
                enabled: true
            },
            basemap: {
                enabled: true
            },
            overviewMap: {
                enabled: true,
                layerType: 'imagery',
                initiallyExpanded: false
            },
            scaleBar: {
                enabled: true
            }
        },
        legend: {
            type: 'structured',
            root: {
                name: 'root',
                children: [
                    {
                        layerId: 'CESI',
                        entryIndex: 36
                    },
                    {
                        name: 'A Group with a Visibility Set',
                        expanded: true,
                        children: [
                            {
                                exclusiveVisibility: [
                                    {
                                        layerId: 'MercuryReleases'
                                    },
                                    {
                                        layerId: 'LeadReleases'
                                    },
                                    {
                                        layerId: 'wms'
                                    }
                                ]
                            }
                        ]
                    }
                ]
            }
        },
        layers: [
            {
                id: 'MercuryReleases',
                layerType: 'esriFeature',
                controls: ['remove'],
                state: {
                    visibility: false,
                    boundingBox: false
                },
                url: 'https://maps-cartes.qa.ec.gc.ca/arcgis/rest/services/CESI/MapServer/37'
            },
            {
                id: 'LeadReleases',
                layerType: 'esriFeature',
                table: {
                    lazyFilter: true
                },
                url: 'https://maps-cartes.qa.ec.gc.ca/arcgis/rest/services/CESI/MapServer/38'
            },
            {
                id: 'CESI',
                name: 'CESI',
                layerType: 'esriDynamic',
                layerEntries: [
                    {
                        index: 36
                    }
                ],
                state: {
                    visibility: true
                },
                url: 'https://maps-cartes.qa.ec.gc.ca/arcgis/rest/services/CESI/MapServer'
            },
            {
                id: 'wms',
                name: 'WMS Layer with a really long name',
                layerType: 'ogcWms',
                disabledControls: ['styles'],
                suppressGetCapabilities: true,
                layerEntries: [
                    {
                        id: 'GDPS.ETA_UU',
                        allStyles: ['WINDARROW', 'WINDARROWKMH'],
                        currentStyle: 'WINDARROWKMH'
                    }
                ],
                url: 'https://geo.weather.gc.ca/geomet/?lang=E&service=WMS&request=GetCapabilities'
            }
        ],
        extentSets: [
            {
                id: 'EXT_NRCAN_Lambert_3978',
                default: {
                    xmax: 3549492,
                    xmin: -2681457,
                    ymax: 3482193,
                    ymin: -883440
                },
                spatialReference: {
                    wkid: 3978
                }
            },
            {
                id: 'EXT_ESRI_World_AuxMerc_3857',
                default: {
                    xmax: -5007771.626060756,
                    xmin: -16632697.354854,
                    ymax: 10015875.184845109,
                    ymin: 5022907.964742964
                },
                spatialReference: {
                    wkid: 102100,
                    latestWkid: 3857
                }
            }
        ],
        lodSets: [
            {
                id: 'LOD_NRCAN_Lambert_3978',
                lods: [
                    {
                        level: 0,
                        resolution: 38364.660062653464,
                        scale: 145000000
                    },
                    {
                        level: 1,
                        resolution: 22489.62831258996,
                        scale: 85000000
                    },
                    {
                        level: 2,
                        resolution: 13229.193125052918,
                        scale: 50000000
                    },
                    {
                        level: 3,
                        resolution: 7937.5158750317505,
                        scale: 30000000
                    },
                    {
                        level: 4,
                        resolution: 4630.2175937685215,
                        scale: 17500000
                    },
                    {
                        level: 5,
                        resolution: 2645.8386250105837,
                        scale: 10000000
                    },
                    {
                        level: 6,
                        resolution: 1587.5031750063501,
                        scale: 6000000
                    },
                    {
                        level: 7,
                        resolution: 926.0435187537042,
                        scale: 3500000
                    },
                    {
                        level: 8,
                        resolution: 529.1677250021168,
                        scale: 2000000
                    },
                    {
                        level: 9,
                        resolution: 317.50063500127004,
                        scale: 1200000
                    },
                    {
                        level: 10,
                        resolution: 185.20870375074085,
                        scale: 700000
                    },
                    {
                        level: 11,
                        resolution: 111.12522225044451,
                        scale: 420000
                    },
                    {
                        level: 12,
                        resolution: 66.1459656252646,
                        scale: 250000
                    },
                    {
                        level: 13,
                        resolution: 38.36466006265346,
                        scale: 145000
                    },
                    {
                        level: 14,
                        resolution: 22.48962831258996,
                        scale: 85000
                    },
                    {
                        level: 15,
                        resolution: 13.229193125052918,
                        scale: 50000
                    },
                    {
                        level: 16,
                        resolution: 7.9375158750317505,
                        scale: 30000
                    },
                    {
                        level: 17,
                        resolution: 4.6302175937685215,
                        scale: 17500
                    }
                ]
            },
            {
                id: 'LOD_ESRI_World_AuxMerc_3857',
                lods: [
                    {
                        level: 0,
                        resolution: 19567.87924099992,
                        scale: 73957190.948944
                    },
                    {
                        level: 1,
                        resolution: 9783.93962049996,
                        scale: 36978595.474472
                    },
                    {
                        level: 2,
                        resolution: 4891.96981024998,
                        scale: 18489297.737236
                    },
                    {
                        level: 3,
                        resolution: 2445.98490512499,
                        scale: 9244648.868618
                    },
                    {
                        level: 4,
                        resolution: 1222.992452562495,
                        scale: 4622324.434309
                    },
                    {
                        level: 5,
                        resolution: 611.4962262813797,
                        scale: 2311162.217155
                    },
                    {
                        level: 6,
                        resolution: 305.74811314055756,
                        scale: 1155581.108577
                    },
                    {
                        level: 7,
                        resolution: 152.87405657041106,
                        scale: 577790.554289
                    },
                    {
                        level: 8,
                        resolution: 76.43702828507324,
                        scale: 288895.277144
                    },
                    {
                        level: 9,
                        resolution: 38.21851414253662,
                        scale: 144447.638572
                    },
                    {
                        level: 10,
                        resolution: 19.10925707126831,
                        scale: 72223.819286
                    },
                    {
                        level: 11,
                        resolution: 9.554628535634155,
                        scale: 36111.909643
                    },
                    {
                        level: 12,
                        resolution: 4.77731426794937,
                        scale: 18055.954822
                    },
                    {
                        level: 13,
                        resolution: 2.388657133974685,
                        scale: 9027.977411
                    },
                    {
                        level: 14,
                        resolution: 1.1943285668550503,
                        scale: 4513.988705
                    },
                    {
                        level: 15,
                        resolution: 0.5971642835598172,
                        scale: 2256.994353
                    },
                    {
                        level: 16,
                        resolution: 0.29858214164761665,
                        scale: 1128.497176
                    },
                    {
                        level: 17,
                        resolution: 0.14929107082380833,
                        scale: 564.248588
                    },
                    {
                        level: 18,
                        resolution: 0.07464553541190416,
                        scale: 282.124294
                    },
                    {
                        level: 19,
                        resolution: 0.03732276770595208,
                        scale: 141.062147
                    },
                    {
                        level: 20,
                        resolution: 0.01866138385297604,
                        scale: 70.5310735
                    }
                ]
            }
        ],
        tileSchemas: [
            {
                id: 'EXT_NRCAN_Lambert_3978#LOD_NRCAN_Lambert_3978',
                name: 'Lambert Maps',
                extentSetId: 'EXT_NRCAN_Lambert_3978',
                lodSetId: 'LOD_NRCAN_Lambert_3978',
                hasNorthPole: true
            },
            {
                id: 'EXT_ESRI_World_AuxMerc_3857#LOD_ESRI_World_AuxMerc_3857',
                name: 'Web Mercator Maps',
                extentSetId: 'EXT_ESRI_World_AuxMerc_3857',
                lodSetId: 'LOD_ESRI_World_AuxMerc_3857'
            }
        ],
        baseMaps: [
            {
                id: 'baseNrCan',
                name: 'Canada Base Map - Transportation (CBMT)',
                description:
                    'The Canada Base Map - Transportation (CBMT) web mapping services of the Earth Sciences Sector at Natural Resources Canada, are intended primarily for online mapping application users and developers.',
                altText: 'altText - The Canada Base Map - Transportation (CBMT)',
                layers: [
                    {
                        id: 'CBMT',
                        layerType: 'esriFeature',
                        url: 'https://maps-cartes.services.geo.ca/server2_serveur2/rest/services/BaseMaps/CBMT3978/MapServer'
                    }
                ],
                tileSchemaId: 'EXT_NRCAN_Lambert_3978#LOD_NRCAN_Lambert_3978',
                attribution: {
                    text: {
                        enabled: true,
                        value: 'Custom Attribution'
                    },
                    logo: {
                        enabled: true
                    }
                }
            },
            {
                id: 'baseSimple',
                name: 'Canada Base Map - Simple',
                description: 'Canada Base Map - Simple',
                altText: 'altText - Canada base map - Simple',
                layers: [
                    {
                        id: 'SMR',
                        layerType: 'esriFeature',
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
                altText: 'altText - Canada Base Map - Elevation (CBME)',
                layers: [
                    {
                        id: 'CBME_CBCE_HS_RO_3978',
                        layerType: 'esriFeature',
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
                altText: 'altText - Canada Base Map - Transportation (CBMT)',
                layers: [
                    {
                        id: 'CBMT_CBCT_GEOM_3978',
                        layerType: 'esriFeature',
                        url: 'https://maps-cartes.services.geo.ca/server2_serveur2/rest/services/BaseMaps/CBMT_CBCT_GEOM_3978/MapServer'
                    }
                ],
                tileSchemaId: 'EXT_NRCAN_Lambert_3978#LOD_NRCAN_Lambert_3978'
            },
            {
                id: 'baseEsriWorld',
                name: 'World Imagery',
                description:
                    'World Imagery provides one meter or better satellite and aerial imagery in many parts of the world and lower resolution satellite imagery worldwide.',
                altText: 'altText - World Imagery',
                layers: [
                    {
                        id: 'World_Imagery',
                        layerType: 'esriFeature',
                        url: 'https://services.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer'
                    }
                ],
                tileSchemaId: 'EXT_ESRI_World_AuxMerc_3857#LOD_ESRI_World_AuxMerc_3857'
            },
            {
                id: 'baseEsriPhysical',
                name: 'World Physical Map',
                description:
                    'This map presents the Natural Earth physical map at 1.24km per pixel for the world and 500m for the coterminous United States.',
                altText: 'altText - World Physical Map',
                layers: [
                    {
                        id: 'World_Physical_Map',
                        layerType: 'esriFeature',
                        url: 'https://services.arcgisonline.com/ArcGIS/rest/services/World_Physical_Map/MapServer'
                    }
                ],
                tileSchemaId: 'EXT_ESRI_World_AuxMerc_3857#LOD_ESRI_World_AuxMerc_3857'
            },
            {
                id: 'baseEsriRelief',
                name: 'World Shaded Relief',
                description:
                    'This map portrays surface elevation as shaded relief. This map is used as a basemap layer to add shaded relief to other GIS maps, such as the ArcGIS Online World Street Map.',
                altText: 'altText - World Shaded Relief',
                layers: [
                    {
                        id: 'World_Shaded_Relief',
                        layerType: 'esriFeature',
                        url: 'https://services.arcgisonline.com/ArcGIS/rest/services/World_Shaded_Relief/MapServer'
                    }
                ],
                tileSchemaId: 'EXT_ESRI_World_AuxMerc_3857#LOD_ESRI_World_AuxMerc_3857'
            },
            {
                id: 'baseEsriStreet',
                name: 'World Street Map',
                description: 'This worldwide street map presents highway-level data for the world.',
                altText: 'altText - ESWorld Street Map',
                layers: [
                    {
                        id: 'World_Street_Map',
                        layerType: 'esriFeature',
                        url: 'https://services.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer'
                    }
                ],
                tileSchemaId: 'EXT_ESRI_World_AuxMerc_3857#LOD_ESRI_World_AuxMerc_3857'
            },
            {
                id: 'baseEsriTerrain',
                name: 'World Terrain Base',
                description:
                    'This map is designed to be used as a base map by GIS professionals to overlay other thematic layers such as demographics or land cover.',
                altText: 'altText - World Terrain Base',
                layers: [
                    {
                        id: 'World_Terrain_Base',
                        layerType: 'esriFeature',
                        url: 'https://services.arcgisonline.com/ArcGIS/rest/services/World_Terrain_Base/MapServer'
                    }
                ],
                tileSchemaId: 'EXT_ESRI_World_AuxMerc_3857#LOD_ESRI_World_AuxMerc_3857'
            },
            {
                id: 'baseEsriTopo',
                name: 'World Topographic Map',
                description:
                    'This map is designed to be used as a basemap by GIS professionals and as a reference map by anyone.',
                altText: 'altText - World Topographic Map',
                layers: [
                    {
                        id: 'World_Topo_Map',
                        layerType: 'esriFeature',
                        url: 'https://services.arcgisonline.com/ArcGIS/rest/services/World_Topo_Map/MapServer'
                    }
                ],
                tileSchemaId: 'EXT_ESRI_World_AuxMerc_3857#LOD_ESRI_World_AuxMerc_3857'
            }
        ]
    }
};

const r4config = configUpgrade(r2config);

let options = {
    loadDefaultFixtures: false,
    loadDefaultEvents: true,
    startRequired: false
};

const rInstance = createInstance(document.getElementById('app'), r4config, options);

window.debugInstance = rInstance;
console.log(r4config);
