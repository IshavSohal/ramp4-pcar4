import { a2 as r } from "./main-CogLml66.js";
async function y(a, t) {
  const { data: e } = await r(a, { responseType: "json", query: { f: "json", ...t?.customParameters, token: t?.apiKey } });
  return e;
}
const n = { BingMapsLayer: async () => (await import("./BingMapsLayer-jm0jn1Cv.js")).default, BuildingSceneLayer: async () => (await import("./BuildingSceneLayer-BKoPLozX.js")).default, CatalogLayer: async () => (await import("./CatalogLayer-BImwSbOA.js")).default, CSVLayer: async () => (await import("./CSVLayer-BVvWs8ky.js")).default, DimensionLayer: async () => (await import("./DimensionLayer-LDN414Ej.js")).default, ElevationLayer: async () => (await import("./ElevationLayer-CubHhn1w.js")).default, FeatureLayer: async () => (await import("./main-CogLml66.js").then((a) => a.qM)).default, GeoJSONLayer: async () => (await import("./GeoJSONLayer-3AU0iKxM.js")).default, GeoRSSLayer: async () => (await import("./GeoRSSLayer-CpFAOG65.js")).default, GroupLayer: async () => (await import("./GroupLayer-Bimg6Nnk.js")).default, ImageryLayer: async () => (await import("./main-CogLml66.js").then((a) => a.qN)).default, ImageryTileLayer: async () => (await import("./ImageryTileLayer-BmO8G0-A.js")).default, IntegratedMeshLayer: async () => (await import("./IntegratedMeshLayer-7OSnNyvD.js")).default, KMLLayer: async () => (await import("./KMLLayer-DK9N-iW7.js")).default, LineOfSightLayer: async () => (await import("./LineOfSightLayer-Bn-CRAMn.js")).default, LinkChartLayer: async () => (await import("./LinkChartLayer-ClWhTNp3.js")).default, MapImageLayer: async () => (await import("./main-CogLml66.js").then((a) => a.qO)).default, MapNotesLayer: async () => (await import("./MapNotesLayer-BGSssmCP.js")).default, MediaLayer: async () => (await import("./MediaLayer-BCt-4lZ4.js")).default, OGCFeatureLayer: async () => (await import("./OGCFeatureLayer-DiXNZyBc.js")).default, OpenStreetMapLayer: async () => (await import("./main-CogLml66.js").then((a) => a.qQ)).default, OrientedImageryLayer: async () => (await import("./OrientedImageryLayer-DOKPHh5m.js")).default, PointCloudLayer: async () => (await import("./PointCloudLayer-CUBMrMuo.js")).default, RouteLayer: async () => (await import("./RouteLayer-D45skN6B.js")).default, SceneLayer: async () => (await import("./SceneLayer-jK5BELiE.js")).default, StreamLayer: async () => (await import("./StreamLayer-fu_zoA-B.js")).default, SubtypeGroupLayer: async () => (await import("./SubtypeGroupLayer-ZLDTzaRJ.js")).default, TileLayer: async () => (await import("./main-CogLml66.js").then((a) => a.qR)).default, IntegratedMesh3DTilesLayer: async () => (await import("./IntegratedMesh3DTilesLayer-37Mu13-B.js")).default, UnknownLayer: async () => (await import("./UnknownLayer-Un8sE4JW.js")).default, UnsupportedLayer: async () => (await import("./UnsupportedLayer-C19ndAza.js")).default, VectorTileLayer: async () => (await import("./VectorTileLayer-BO27lT_V.js")).default, VoxelLayer: async () => (await import("./VoxelLayer-BtXpR0h6.js")).default, WFSLayer: async () => (await import("./WFSLayer-BH4_9Dud.js")).default, WMSLayer: async () => (await import("./main-CogLml66.js").then((a) => a.qS)).default, WMTSLayer: async () => (await import("./WMTSLayer-D0zV0ok2.js")).default, WebTileLayer: async () => (await import("./main-CogLml66.js").then((a) => a.qP)).default };
export {
  n as a,
  y as t
};
//# sourceMappingURL=lazyLayerLoader-CDgtC3Y8.js.map