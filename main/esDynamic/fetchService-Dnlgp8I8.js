import{U as l}from"./main-BfJ-fbpL.js";async function o(a,e){const{data:t}=await l(a,{responseType:"json",query:{f:"json",...e?.customParameters,token:e?.apiKey}});return t}const p={BingMapsLayer:async()=>(await import("./BingMapsLayer-NWqcTqSK.js")).default,BuildingSceneLayer:async()=>(await import("./BuildingSceneLayer-BeIVE90c.js")).default,CSVLayer:async()=>(await import("./CSVLayer-BxJMbpfm.js")).default,CatalogLayer:async()=>(await import("./CatalogLayer-BdRRBTuj.js")).default,DimensionLayer:async()=>(await import("./DimensionLayer-heLXQuDJ.js")).default,ElevationLayer:async()=>(await import("./ElevationLayer-CUwyNZeN.js")).default,FeatureLayer:async()=>(await import("./main-BfJ-fbpL.js").then(a=>a.vF)).default,GeoJSONLayer:async()=>(await import("./GeoJSONLayer-D2u9N9dX.js")).default,GeoRSSLayer:async()=>(await import("./GeoRSSLayer-DPQX5jhG.js")).default,GroupLayer:async()=>(await import("./GroupLayer-DfgVpVfI.js")).default,ImageryLayer:async()=>(await import("./main-BfJ-fbpL.js").then(a=>a.vG)).default,ImageryTileLayer:async()=>(await import("./ImageryTileLayer-CfDNJkaA.js")).default,IntegratedMesh3DTilesLayer:async()=>(await import("./IntegratedMesh3DTilesLayer-B5QvM6a_.js")).default,IntegratedMeshLayer:async()=>(await import("./IntegratedMeshLayer-Cmmfxc0Y.js")).default,KMLLayer:async()=>(await import("./KMLLayer-BqjgIJMz.js")).default,KnowledgeGraphLayer:async()=>(await import("./KnowledgeGraphLayer-Dsuro-mr.js")).default,LineOfSightLayer:async()=>(await import("./LineOfSightLayer-CArJPL6A.js")).default,LinkChartLayer:async()=>(await import("./LinkChartLayer-C5ehSFYt.js")).default,MapImageLayer:async()=>(await import("./main-BfJ-fbpL.js").then(a=>a.vH)).default,MapNotesLayer:async()=>(await import("./MapNotesLayer-DA7F-kmf.js")).default,MediaLayer:async()=>(await import("./MediaLayer-CGuytRQq.js")).default,OGCFeatureLayer:async()=>(await import("./OGCFeatureLayer-C7KOHn4Z.js")).default,OpenStreetMapLayer:async()=>(await import("./main-BfJ-fbpL.js").then(a=>a.vJ)).default,OrientedImageryLayer:async()=>(await import("./OrientedImageryLayer-bcKHse8b.js")).default,PointCloudLayer:async()=>(await import("./PointCloudLayer-C5rmEPTy.js")).default,RouteLayer:async()=>(await import("./RouteLayer-CPfWmkF6.js")).default,SceneLayer:async()=>(await import("./SceneLayer-DP_tepVh.js")).default,StreamLayer:async()=>(await import("./StreamLayer-DGF3Nl0K.js")).default,SubtypeGroupLayer:async()=>(await import("./SubtypeGroupLayer-BvMjeh3s.js")).default,TileLayer:async()=>(await import("./main-BfJ-fbpL.js").then(a=>a.vK)).default,UnknownLayer:async()=>(await import("./UnknownLayer-Cf6dSzw8.js")).default,UnsupportedLayer:async()=>(await import("./UnsupportedLayer-HAnxY_rp.js")).default,VectorTileLayer:async()=>(await import("./VectorTileLayer-BEpNHTMT.js")).default,VideoLayer:async()=>(await import("./VideoLayer-BxY6uxOZ.js")).default,ViewshedLayer:async()=>(await import("./ViewshedLayer-BDtPCOHG.js")).default,VoxelLayer:async()=>(await import("./VoxelLayer-BiFjDMzb.js")).default,WFSLayer:async()=>(await import("./WFSLayer-BISC2mwc.js")).default,WMSLayer:async()=>(await import("./main-BfJ-fbpL.js").then(a=>a.vL)).default,WMTSLayer:async()=>(await import("./WMTSLayer-BoHNnpOe.js")).default,WebTileLayer:async()=>(await import("./main-BfJ-fbpL.js").then(a=>a.vI)).default},f=new Set(["Catalog Layer","Feature Layer","Oriented Imagery Layer"]);async function d(a,e){const{loadContext:t,...r}=e||{},i=t?await t.fetchServiceMetadata(a,r):await o(a,r);c(i),u(i);const n={serviceJSON:i};if((i.currentVersion??0)<10.5)return n;const s=`${a}/layers`,y=t?await t.fetchServiceMetadata(s,r):await o(s,r);return c(y),u(y),n.layersJSON={layers:y.layers,tables:y.tables},n}function L(a){const{type:e}=a;return!!e&&f.has(e)}function m(a){return a.type==="Table"}function u(a){a.layers=a.layers?.filter(L),a.tables=a.tables?.filter(m)}function w(a){a.type||="Feature Layer"}function h(a){a.type||="Table"}function c(a){a.layers?.forEach(w),a.tables?.forEach(h)}function S(a){switch(a){case"Feature Layer":case"Table":return"FeatureLayer";case"Oriented Imagery Layer":return"OrientedImageryLayer";case"Catalog Layer":return"CatalogLayer"}return"FeatureLayer"}export{p as a,o as b,S as i,d as t};