import { $ as l } from "./main-CPC-ab0b.js";
async function s(a, t) {
  const { data: e } = await l(a, { responseType: "json", query: { f: "json", ...t?.customParameters, token: t?.apiKey } });
  return e;
}
const h = { BingMapsLayer: async () => (await import("./BingMapsLayer-DJfvizLV.js")).default, BuildingSceneLayer: async () => (await import("./BuildingSceneLayer-BbxBqIST.js")).default, CSVLayer: async () => (await import("./CSVLayer-DQe6Flkl.js")).default, CatalogLayer: async () => (await import("./CatalogLayer-BLzjIPgh.js")).default, DimensionLayer: async () => (await import("./DimensionLayer-BNcnZj5k.js")).default, ElevationLayer: async () => (await import("./ElevationLayer-CNDqV3ku.js")).default, FeatureLayer: async () => (await import("./main-CPC-ab0b.js").then((a) => a.rb)).default, GeoJSONLayer: async () => (await import("./GeoJSONLayer-D6q-wv4O.js")).default, GeoRSSLayer: async () => (await import("./GeoRSSLayer-DCMUqnC_.js")).default, GroupLayer: async () => (await import("./GroupLayer-BANeHi10.js")).default, ImageryLayer: async () => (await import("./main-CPC-ab0b.js").then((a) => a.rc)).default, ImageryTileLayer: async () => (await import("./ImageryTileLayer-DI19qEdZ.js")).default, IntegratedMesh3DTilesLayer: async () => (await import("./IntegratedMesh3DTilesLayer-CbeHG0r3.js")).default, IntegratedMeshLayer: async () => (await import("./IntegratedMeshLayer-BkSZvKl8.js")).default, KMLLayer: async () => (await import("./KMLLayer-kshA8dnp.js")).default, KnowledgeGraphLayer: async () => (await import("./KnowledgeGraphLayer-Bh8gjjxJ.js")).default, LineOfSightLayer: async () => (await import("./LineOfSightLayer-ChdQkOUT.js")).default, LinkChartLayer: async () => (await import("./LinkChartLayer-BGTaX-Rc.js")).default, MapImageLayer: async () => (await import("./main-CPC-ab0b.js").then((a) => a.rd)).default, MapNotesLayer: async () => (await import("./MapNotesLayer-NWJsSC4G.js")).default, MediaLayer: async () => (await import("./MediaLayer-CLUv0Oot.js")).default, OGCFeatureLayer: async () => (await import("./OGCFeatureLayer-C3XFVg-x.js")).default, OpenStreetMapLayer: async () => (await import("./main-CPC-ab0b.js").then((a) => a.rf)).default, OrientedImageryLayer: async () => (await import("./OrientedImageryLayer-D-CLpPRA.js")).default, PointCloudLayer: async () => (await import("./PointCloudLayer-BxToAUfY.js")).default, RouteLayer: async () => (await import("./RouteLayer-DORaylbW.js")).default, SceneLayer: async () => (await import("./SceneLayer-YivAhLPd.js")).default, StreamLayer: async () => (await import("./StreamLayer-DI2WNaUa.js")).default, SubtypeGroupLayer: async () => (await import("./SubtypeGroupLayer-B7y4HF5k.js")).default, TileLayer: async () => (await import("./main-CPC-ab0b.js").then((a) => a.rg)).default, UnknownLayer: async () => (await import("./UnknownLayer-DKx6nO4V.js")).default, UnsupportedLayer: async () => (await import("./UnsupportedLayer-JrrVqiSn.js")).default, VectorTileLayer: async () => (await import("./VectorTileLayer-D2dRqAqP.js")).default, VideoLayer: async () => (await import("./VideoLayer-CuOgfmiD.js")).default, VoxelLayer: async () => (await import("./VoxelLayer-l7lhQ6E4.js")).default, WFSLayer: async () => (await import("./WFSLayer-lS7JJZfT.js")).default, WMSLayer: async () => (await import("./main-CPC-ab0b.js").then((a) => a.rh)).default, WMTSLayer: async () => (await import("./WMTSLayer-AfM52E3m.js")).default, WebTileLayer: async () => (await import("./main-CPC-ab0b.js").then((a) => a.re)).default }, f = /* @__PURE__ */ new Set(["Catalog Layer", "Feature Layer", "Oriented Imagery Layer"]);
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
//# sourceMappingURL=fetchService-DhPtB9we.js.map
