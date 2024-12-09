import { $ as l } from "./main-BinSYbpH.js";
async function s(a, t) {
  const { data: e } = await l(a, { responseType: "json", query: { f: "json", ...t?.customParameters, token: t?.apiKey } });
  return e;
}
const h = { BingMapsLayer: async () => (await import("./BingMapsLayer-DSCYR7v4.js")).default, BuildingSceneLayer: async () => (await import("./BuildingSceneLayer-B7rDKiVM.js")).default, CSVLayer: async () => (await import("./CSVLayer-BDudYKpN.js")).default, CatalogLayer: async () => (await import("./CatalogLayer-mFcZy5Qj.js")).default, DimensionLayer: async () => (await import("./DimensionLayer-Gq2f_rBM.js")).default, ElevationLayer: async () => (await import("./ElevationLayer-BTMq3Bk7.js")).default, FeatureLayer: async () => (await import("./main-BinSYbpH.js").then((a) => a.rb)).default, GeoJSONLayer: async () => (await import("./GeoJSONLayer-DvNdZn4x.js")).default, GeoRSSLayer: async () => (await import("./GeoRSSLayer-ClWq4Khc.js")).default, GroupLayer: async () => (await import("./GroupLayer-D2nPyu16.js")).default, ImageryLayer: async () => (await import("./main-BinSYbpH.js").then((a) => a.rc)).default, ImageryTileLayer: async () => (await import("./ImageryTileLayer-wG6iQpP8.js")).default, IntegratedMesh3DTilesLayer: async () => (await import("./IntegratedMesh3DTilesLayer-EgZxali-.js")).default, IntegratedMeshLayer: async () => (await import("./IntegratedMeshLayer-DP3eabiU.js")).default, KMLLayer: async () => (await import("./KMLLayer-D7PuVIf5.js")).default, KnowledgeGraphLayer: async () => (await import("./KnowledgeGraphLayer-BcxYGwns.js")).default, LineOfSightLayer: async () => (await import("./LineOfSightLayer-DEfE-HwC.js")).default, LinkChartLayer: async () => (await import("./LinkChartLayer-BNQoT461.js")).default, MapImageLayer: async () => (await import("./main-BinSYbpH.js").then((a) => a.rd)).default, MapNotesLayer: async () => (await import("./MapNotesLayer-41-MF49J.js")).default, MediaLayer: async () => (await import("./MediaLayer-DNFYUl99.js")).default, OGCFeatureLayer: async () => (await import("./OGCFeatureLayer-DddVCb-o.js")).default, OpenStreetMapLayer: async () => (await import("./main-BinSYbpH.js").then((a) => a.rf)).default, OrientedImageryLayer: async () => (await import("./OrientedImageryLayer-oiQAve3Y.js")).default, PointCloudLayer: async () => (await import("./PointCloudLayer-nnMHZjdr.js")).default, RouteLayer: async () => (await import("./RouteLayer-4nQmtOki.js")).default, SceneLayer: async () => (await import("./SceneLayer-Cje7Hi1m.js")).default, StreamLayer: async () => (await import("./StreamLayer-4Wc_u9R_.js")).default, SubtypeGroupLayer: async () => (await import("./SubtypeGroupLayer-BHKPNwbR.js")).default, TileLayer: async () => (await import("./main-BinSYbpH.js").then((a) => a.rg)).default, UnknownLayer: async () => (await import("./UnknownLayer-B9XGNQQO.js")).default, UnsupportedLayer: async () => (await import("./UnsupportedLayer-VLtnhXdr.js")).default, VectorTileLayer: async () => (await import("./VectorTileLayer-B4GTYgvM.js")).default, VideoLayer: async () => (await import("./VideoLayer-CwoponVk.js")).default, VoxelLayer: async () => (await import("./VoxelLayer-pJe1qv4Q.js")).default, WFSLayer: async () => (await import("./WFSLayer-cp3_Dms0.js")).default, WMSLayer: async () => (await import("./main-BinSYbpH.js").then((a) => a.rh)).default, WMTSLayer: async () => (await import("./WMTSLayer-CaBRWvjK.js")).default, WebTileLayer: async () => (await import("./main-BinSYbpH.js").then((a) => a.re)).default }, f = /* @__PURE__ */ new Set(["Catalog Layer", "Feature Layer", "Oriented Imagery Layer"]);
async function g(a, t) {
  const { loadContext: e, ...r } = t || {}, i = e ? await e.fetchServiceMetadata(a, r) : await s(a, r);
  u(i), c(i);
  const y = { serviceJSON: i };
  if ((i.currentVersion ?? 0) < 10.5) return y;
  const o = `${a}/layers`, n = e ? await e.fetchServiceMetadata(o, r) : await s(o, r);
  return u(n), c(n), y.layersJSON = { layers: n.layers, tables: n.tables }, y;
}
function p(a) {
  const { type: t } = a;
  return !!t && f.has(t);
}
function d(a) {
  return a.type === "Table";
}
function c(a) {
  a.layers = a.layers?.filter(p), a.tables = a.tables?.filter(d);
}
function L(a) {
  a.type ||= "Feature Layer";
}
function m(a) {
  a.type ||= "Table";
}
function u(a) {
  a.layers?.forEach(L), a.tables?.forEach(m);
}
function S(a) {
  switch (a) {
    case "Feature Layer":
    case "Table":
      return "FeatureLayer";
    case "Oriented Imagery Layer":
      return "OrientedImageryLayer";
    case "Catalog Layer":
      return "CatalogLayer";
  }
  return "FeatureLayer";
}
export {
  h as a,
  s as b,
  S as i,
  g as t
};
//# sourceMappingURL=fetchService-DlCJAKKL.js.map
