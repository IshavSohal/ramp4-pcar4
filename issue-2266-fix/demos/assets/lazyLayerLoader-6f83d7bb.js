import { U as U$1 } from './main-8b7fd68e.js';
import { _ as __vitePreload } from './preload-helper-a4975f27.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
async function t(t,o){const{data:r}=await U$1(t,{responseType:"json",query:{f:"json",...o?.customParameters,token:o?.apiKey}});return r}

const a={BingMapsLayer:async()=>(await __vitePreload(() => import('./BingMapsLayer-524db903.js'),true?["./BingMapsLayer-524db903.js","./main-8b7fd68e.js","./preload-helper-a4975f27.js","./main-5c005d17.css"]:void 0,import.meta.url)).default,BuildingSceneLayer:async()=>(await __vitePreload(() => import('./BuildingSceneLayer-8fc1b3e6.js'),true?["./BuildingSceneLayer-8fc1b3e6.js","./main-8b7fd68e.js","./preload-helper-a4975f27.js","./main-5c005d17.css","./capabilities-eb6dd6cd.js","./SceneService-3f740ab7.js","./originUtils-f2cf510b.js","./multiOriginJSONSupportUtils-3d5af7a5.js","./jsonContext-1eb7029c.js","./resourceUtils-c752a6cb.js","./resourceUtils-7e32e4f2.js","./saveAPIKeyUtils-1b1bebdb.js","./saveUtils-a2ed683a.js","./I3SLayerDefinitions-79de16b8.js","./I3SUtil-ec4f7638.js","./mat4f64-b32e2490.js","./computeTranslationToOriginAndRotation-b95df287.js","./sphere-50f0ec2e.js","./ObjectStack-d425fc96.js","./plane-4ae04cee.js","./mat3f64-3fe11525.js","./quatf64-137a8dbb.js","./I3SBinaryReader-77b9bb55.js","./VertexAttribute-66b2103c.js","./symbolColorUtils-0abf61b4.js","./orientedBoundingBox-63f5327b.js","./quat-83c89cc8.js","./popupUtils-412a0626.js","./associatedFeatureServiceUtils-f1249697.js","./elevationInfoUtils-1314b92a.js"]:void 0,import.meta.url)).default,CatalogLayer:async()=>(await __vitePreload(() => import('./CatalogLayer-0d00ec11.js'),true?["./CatalogLayer-0d00ec11.js","./main-8b7fd68e.js","./preload-helper-a4975f27.js","./main-5c005d17.css","./utils-632ea482.js","./FeatureLayerSource-5541a3a9.js","./meshVertexSpaceUtils-1d26cedd.js","./MeshLocalVertexSpace-dcde7887.js","./vec3-4912e807.js","./External-7ffde452.js","./editingSupport-310fd099.js","./clientSideDefaults-d36895f8.js","./QueryEngineCapabilities-5bb5f351.js"]:void 0,import.meta.url)).default,CSVLayer:async()=>(await __vitePreload(() => import('./CSVLayer-e02981fd.js'),true?["./CSVLayer-e02981fd.js","./main-8b7fd68e.js","./preload-helper-a4975f27.js","./main-5c005d17.css","./clientSideDefaults-d36895f8.js","./QueryEngineCapabilities-5bb5f351.js"]:void 0,import.meta.url)).default,DimensionLayer:async()=>(await __vitePreload(() => import('./DimensionLayer-676997f3.js'),true?["./DimensionLayer-676997f3.js","./main-8b7fd68e.js","./preload-helper-a4975f27.js","./main-5c005d17.css","./Analysis-16b06ea0.js"]:void 0,import.meta.url)).default,ElevationLayer:async()=>(await __vitePreload(() => import('./ElevationLayer-4f510f48.js'),true?["./ElevationLayer-4f510f48.js","./preload-helper-a4975f27.js","./main-8b7fd68e.js","./main-5c005d17.css"]:void 0,import.meta.url)).default,FeatureLayer:async()=>(await __vitePreload(() => import('./main-8b7fd68e.js').then(n => n.qM),true?["./main-8b7fd68e.js","./preload-helper-a4975f27.js","./main-5c005d17.css"]:void 0,import.meta.url)).default,GeoJSONLayer:async()=>(await __vitePreload(() => import('./GeoJSONLayer-ebd3ac05.js'),true?["./GeoJSONLayer-ebd3ac05.js","./preload-helper-a4975f27.js","./main-8b7fd68e.js","./main-5c005d17.css","./clientSideDefaults-d36895f8.js","./QueryEngineCapabilities-5bb5f351.js"]:void 0,import.meta.url)).default,GeoRSSLayer:async()=>(await __vitePreload(() => import('./GeoRSSLayer-16f44080.js'),true?["./GeoRSSLayer-16f44080.js","./main-8b7fd68e.js","./preload-helper-a4975f27.js","./main-5c005d17.css"]:void 0,import.meta.url)).default,GroupLayer:async()=>(await __vitePreload(() => import('./GroupLayer-45c9ed1f.js'),true?["./GroupLayer-45c9ed1f.js","./preload-helper-a4975f27.js","./main-8b7fd68e.js","./main-5c005d17.css","./saveUtils-a2ed683a.js"]:void 0,import.meta.url)).default,ImageryLayer:async()=>(await __vitePreload(() => import('./main-8b7fd68e.js').then(n => n.qN),true?["./main-8b7fd68e.js","./preload-helper-a4975f27.js","./main-5c005d17.css"]:void 0,import.meta.url)).default,ImageryTileLayer:async()=>(await __vitePreload(() => import('./ImageryTileLayer-3fba5c95.js'),true?["./ImageryTileLayer-3fba5c95.js","./preload-helper-a4975f27.js","./main-8b7fd68e.js","./main-5c005d17.css","./RawBlockCache-385474a7.js","./rasterProjectionHelper-e24e1ca7.js","./utils-c05573dd.js"]:void 0,import.meta.url)).default,IntegratedMeshLayer:async()=>(await __vitePreload(() => import('./IntegratedMeshLayer-09f33b7b.js'),true?["./IntegratedMeshLayer-09f33b7b.js","./main-8b7fd68e.js","./preload-helper-a4975f27.js","./main-5c005d17.css","./persistable-a34b723f.js","./multiOriginJSONSupportUtils-3d5af7a5.js","./resourceExtension-8487d174.js","./SceneService-3f740ab7.js","./originUtils-f2cf510b.js","./jsonContext-1eb7029c.js","./resourceUtils-c752a6cb.js","./resourceUtils-7e32e4f2.js","./saveAPIKeyUtils-1b1bebdb.js","./saveUtils-a2ed683a.js","./I3SLayerDefinitions-79de16b8.js","./elevationInfoUtils-1314b92a.js"]:void 0,import.meta.url)).default,KMLLayer:async()=>(await __vitePreload(() => import('./KMLLayer-660aab9a.js'),true?["./KMLLayer-660aab9a.js","./main-8b7fd68e.js","./preload-helper-a4975f27.js","./main-5c005d17.css","./kmlUtils-63566224.js"]:void 0,import.meta.url)).default,LineOfSightLayer:async()=>(await __vitePreload(() => import('./LineOfSightLayer-30d84253.js'),true?["./LineOfSightLayer-30d84253.js","./main-8b7fd68e.js","./preload-helper-a4975f27.js","./main-5c005d17.css","./Analysis-16b06ea0.js","./persistable-a34b723f.js","./multiOriginJSONSupportUtils-3d5af7a5.js","./resourceExtension-8487d174.js","./elevationInfoUtils-1314b92a.js"]:void 0,import.meta.url)).default,LinkChartLayer:async()=>(await __vitePreload(() => import('./LinkChartLayer-1d898ff7.js'),true?["./LinkChartLayer-1d898ff7.js","./main-8b7fd68e.js","./preload-helper-a4975f27.js","./main-5c005d17.css","./geohashUtils-2bd19827.js","./timeSupport-99a95732.js","./json-aab78c64.js","./knowledgeGraphService-a0b4f879.js","./GraphQueryStreaming-7b8fbfb2.js","./FeatureStore-edb79448.js","./BoundsStore-0240bdcc.js","./PooledRBush-652d01f4.js","./QueryEngine-0114acc0.js","./WhereClause-fb9f200c.js","./TimeOnly-f19fc858.js","./QueryEngineCapabilities-5bb5f351.js","./utils-7a0a8558.js","./utils-d9639751.js","./utils-632ea482.js","./RenderState-dde7519e.js","./clientSideDefaults-d36895f8.js"]:void 0,import.meta.url)).default,MapImageLayer:async()=>(await __vitePreload(() => import('./main-8b7fd68e.js').then(n => n.qO),true?["./main-8b7fd68e.js","./preload-helper-a4975f27.js","./main-5c005d17.css"]:void 0,import.meta.url)).default,MapNotesLayer:async()=>(await __vitePreload(() => import('./MapNotesLayer-b4c4da7f.js'),true?["./MapNotesLayer-b4c4da7f.js","./main-8b7fd68e.js","./preload-helper-a4975f27.js","./main-5c005d17.css","./objectIdUtils-983088f7.js"]:void 0,import.meta.url)).default,MediaLayer:async()=>(await __vitePreload(() => import('./MediaLayer-565fff2d.js'),true?["./MediaLayer-565fff2d.js","./preload-helper-a4975f27.js","./main-8b7fd68e.js","./main-5c005d17.css","./imageUtils-658cdd25.js","./perspectiveUtils-d04a258f.js","./normalizeUtilsSync-3f48f3fd.js","./mat3f64-3fe11525.js","./resourceExtension-8487d174.js","./BoundsStore-0240bdcc.js","./PooledRBush-652d01f4.js"]:void 0,import.meta.url)).default,OGCFeatureLayer:async()=>(await __vitePreload(() => import('./OGCFeatureLayer-ad4ccff2.js'),true?["./OGCFeatureLayer-ad4ccff2.js","./main-8b7fd68e.js","./preload-helper-a4975f27.js","./main-5c005d17.css","./ogcFeatureUtils-6858037c.js","./geojson-ca0b8a79.js","./date-305484fc.js","./clientSideDefaults-d36895f8.js","./QueryEngineCapabilities-5bb5f351.js","./sourceUtils-32fd059c.js"]:void 0,import.meta.url)).default,OpenStreetMapLayer:async()=>(await __vitePreload(() => import('./main-8b7fd68e.js').then(n => n.qQ),true?["./main-8b7fd68e.js","./preload-helper-a4975f27.js","./main-5c005d17.css"]:void 0,import.meta.url)).default,OrientedImageryLayer:async()=>(await __vitePreload(() => import('./OrientedImageryLayer-09670680.js'),true?["./OrientedImageryLayer-09670680.js","./main-8b7fd68e.js","./preload-helper-a4975f27.js","./main-5c005d17.css"]:void 0,import.meta.url)).default,PointCloudLayer:async()=>(await __vitePreload(() => import('./PointCloudLayer-567619b8.js'),true?["./PointCloudLayer-567619b8.js","./main-8b7fd68e.js","./preload-helper-a4975f27.js","./main-5c005d17.css","./SceneService-3f740ab7.js","./originUtils-f2cf510b.js","./multiOriginJSONSupportUtils-3d5af7a5.js","./jsonContext-1eb7029c.js","./resourceUtils-c752a6cb.js","./resourceUtils-7e32e4f2.js","./saveAPIKeyUtils-1b1bebdb.js","./saveUtils-a2ed683a.js","./PointCloudUniqueValueRenderer-8d36705f.js","./elevationInfoUtils-1314b92a.js"]:void 0,import.meta.url)).default,RouteLayer:async()=>(await __vitePreload(() => import('./RouteLayer-96c3ac8f.js'),true?["./RouteLayer-96c3ac8f.js","./main-8b7fd68e.js","./preload-helper-a4975f27.js","./main-5c005d17.css","./originUtils-f2cf510b.js","./multiOriginJSONSupportUtils-3d5af7a5.js","./Stop-5518aa85.js"]:void 0,import.meta.url)).default,SceneLayer:async()=>(await __vitePreload(() => import('./SceneLayer-52fbc141.js'),true?["./SceneLayer-52fbc141.js","./preload-helper-a4975f27.js","./main-8b7fd68e.js","./main-5c005d17.css","./Mesh-07f7644a.js","./georeference-84d35a8b.js","./mat3f64-3fe11525.js","./mat4f64-b32e2490.js","./computeTranslationToOriginAndRotation-b95df287.js","./DoubleArray-e59cd9fd.js","./quat-83c89cc8.js","./quatf64-137a8dbb.js","./meshVertexSpaceUtils-1d26cedd.js","./MeshLocalVertexSpace-dcde7887.js","./vec3-4912e807.js","./BufferView-5181b87a.js","./imageUtils-658cdd25.js","./earcut-394bf117.js","./Indices-ca280185.js","./deduplicate-5347829e.js","./plane-4ae04cee.js","./triangle-496891c0.js","./Util-b80f1fb2.js","./ObjectStack-d425fc96.js","./lineSegment-aa092948.js","./basicInterfaces-f85cdac5.js","./VertexAttribute-66b2103c.js","./External-7ffde452.js","./uploadAssetErrors-8b9ae396.js","./SceneService-3f740ab7.js","./originUtils-f2cf510b.js","./multiOriginJSONSupportUtils-3d5af7a5.js","./jsonContext-1eb7029c.js","./resourceUtils-c752a6cb.js","./resourceUtils-7e32e4f2.js","./saveAPIKeyUtils-1b1bebdb.js","./saveUtils-a2ed683a.js","./capabilities-eb6dd6cd.js","./associatedFeatureServiceUtils-f1249697.js","./I3SLayerDefinitions-79de16b8.js","./persistable-a34b723f.js","./resourceExtension-8487d174.js","./elevationInfoUtils-1314b92a.js","./I3SUtil-ec4f7638.js","./sphere-50f0ec2e.js","./I3SBinaryReader-77b9bb55.js","./symbolColorUtils-0abf61b4.js","./orientedBoundingBox-63f5327b.js","./popupUtils-412a0626.js"]:void 0,import.meta.url)).default,StreamLayer:async()=>(await __vitePreload(() => import('./StreamLayer-30bb73f2.js'),true?["./StreamLayer-30bb73f2.js","./preload-helper-a4975f27.js","./main-8b7fd68e.js","./main-5c005d17.css"]:void 0,import.meta.url)).default,SubtypeGroupLayer:async()=>(await __vitePreload(() => import('./SubtypeGroupLayer-5b53fe2c.js'),true?["./SubtypeGroupLayer-5b53fe2c.js","./preload-helper-a4975f27.js","./main-8b7fd68e.js","./main-5c005d17.css"]:void 0,import.meta.url)).default,TileLayer:async()=>(await __vitePreload(() => import('./main-8b7fd68e.js').then(n => n.qR),true?["./main-8b7fd68e.js","./preload-helper-a4975f27.js","./main-5c005d17.css"]:void 0,import.meta.url)).default,IntegratedMesh3DTilesLayer:async()=>(await __vitePreload(() => import('./IntegratedMesh3DTilesLayer-36c6fff0.js'),true?["./IntegratedMesh3DTilesLayer-36c6fff0.js","./main-8b7fd68e.js","./preload-helper-a4975f27.js","./main-5c005d17.css","./elevationInfoUtils-1314b92a.js"]:void 0,import.meta.url)).default,UnknownLayer:async()=>(await __vitePreload(() => import('./UnknownLayer-e4e83484.js'),true?["./UnknownLayer-e4e83484.js","./main-8b7fd68e.js","./preload-helper-a4975f27.js","./main-5c005d17.css"]:void 0,import.meta.url)).default,UnsupportedLayer:async()=>(await __vitePreload(() => import('./UnsupportedLayer-b8d6cc1a.js'),true?["./UnsupportedLayer-b8d6cc1a.js","./main-8b7fd68e.js","./preload-helper-a4975f27.js","./main-5c005d17.css"]:void 0,import.meta.url)).default,VectorTileLayer:async()=>(await __vitePreload(() => import('./VectorTileLayer-d94fad74.js'),true?["./VectorTileLayer-d94fad74.js","./main-8b7fd68e.js","./preload-helper-a4975f27.js","./main-5c005d17.css","./jsonContext-1eb7029c.js","./StyleRepository-ab9b026c.js","./StyleDefinition-acf40298.js","./enums-d24bcbbf.js","./enums-affa582e.js","./GeometryUtils-c4cd248f.js","./enums-af0bf3a9.js","./VertexElementDescriptor-ec2771ab.js","./definitions-1e43ef7c.js"]:void 0,import.meta.url)).default,VoxelLayer:async()=>(await __vitePreload(() => import('./VoxelLayer-8d58498b.js'),true?["./VoxelLayer-8d58498b.js","./main-8b7fd68e.js","./preload-helper-a4975f27.js","./main-5c005d17.css","./SceneService-3f740ab7.js","./originUtils-f2cf510b.js","./multiOriginJSONSupportUtils-3d5af7a5.js","./jsonContext-1eb7029c.js","./resourceUtils-c752a6cb.js","./resourceUtils-7e32e4f2.js","./saveAPIKeyUtils-1b1bebdb.js","./saveUtils-a2ed683a.js","./persistable-a34b723f.js","./resourceExtension-8487d174.js","./quat-83c89cc8.js","./mat3f64-3fe11525.js","./quatf64-137a8dbb.js"]:void 0,import.meta.url)).default,WFSLayer:async()=>(await __vitePreload(() => import('./WFSLayer-a03eedbf.js'),true?["./WFSLayer-a03eedbf.js","./main-8b7fd68e.js","./preload-helper-a4975f27.js","./main-5c005d17.css","./clientSideDefaults-d36895f8.js","./QueryEngineCapabilities-5bb5f351.js","./wfsUtils-818d2118.js","./geojson-ca0b8a79.js","./date-305484fc.js","./xmlUtils-8a76dfc0.js"]:void 0,import.meta.url)).default,WMSLayer:async()=>(await __vitePreload(() => import('./main-8b7fd68e.js').then(n => n.qS),true?["./main-8b7fd68e.js","./preload-helper-a4975f27.js","./main-5c005d17.css"]:void 0,import.meta.url)).default,WMTSLayer:async()=>(await __vitePreload(() => import('./WMTSLayer-2bf4697a.js'),true?["./WMTSLayer-2bf4697a.js","./main-8b7fd68e.js","./preload-helper-a4975f27.js","./main-5c005d17.css","./xmlUtils-8a76dfc0.js"]:void 0,import.meta.url)).default,WebTileLayer:async()=>(await __vitePreload(() => import('./main-8b7fd68e.js').then(n => n.qP),true?["./main-8b7fd68e.js","./preload-helper-a4975f27.js","./main-5c005d17.css"]:void 0,import.meta.url)).default};

export { a, t };