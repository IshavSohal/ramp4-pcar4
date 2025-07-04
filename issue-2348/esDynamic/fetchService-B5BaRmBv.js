import { $ as l } from "./main-Dm62uCOY.js";
async function s(a, t) {
  const { data: e } = await l(a, { responseType: "json", query: { f: "json", ...t?.customParameters, token: t?.apiKey } });
  return e;
}
const h = { BingMapsLayer: async () => (await import("./BingMapsLayer-neXQWq05.js")).default, BuildingSceneLayer: async () => (await import("./BuildingSceneLayer-OVQKLMbR.js")).default, CSVLayer: async () => (await import("./CSVLayer-IjEqbzvE.js")).default, CatalogLayer: async () => (await import("./CatalogLayer-DlAiMQOx.js")).default, DimensionLayer: async () => (await import("./DimensionLayer-vWkvkZra.js")).default, ElevationLayer: async () => (await import("./ElevationLayer-C4Sv0JEr.js")).default, FeatureLayer: async () => (await import("./main-Dm62uCOY.js").then((a) => a.rb)).default, GeoJSONLayer: async () => (await import("./GeoJSONLayer-C_tnvoIM.js")).default, GeoRSSLayer: async () => (await import("./GeoRSSLayer-DqA1w_FP.js")).default, GroupLayer: async () => (await import("./GroupLayer-pwcJGj6W.js")).default, ImageryLayer: async () => (await import("./main-Dm62uCOY.js").then((a) => a.rc)).default, ImageryTileLayer: async () => (await import("./ImageryTileLayer-CWkd6iYi.js")).default, IntegratedMesh3DTilesLayer: async () => (await import("./IntegratedMesh3DTilesLayer-B_le9zaL.js")).default, IntegratedMeshLayer: async () => (await import("./IntegratedMeshLayer-BTOBBe5c.js")).default, KMLLayer: async () => (await import("./KMLLayer-j-BNQTtr.js")).default, KnowledgeGraphLayer: async () => (await import("./KnowledgeGraphLayer-D0tMgyWF.js")).default, LineOfSightLayer: async () => (await import("./LineOfSightLayer-Dt4uXIBx.js")).default, LinkChartLayer: async () => (await import("./LinkChartLayer--g0UiNkk.js")).default, MapImageLayer: async () => (await import("./main-Dm62uCOY.js").then((a) => a.rd)).default, MapNotesLayer: async () => (await import("./MapNotesLayer-DtBmsYDh.js")).default, MediaLayer: async () => (await import("./MediaLayer-BfbBGQZm.js")).default, OGCFeatureLayer: async () => (await import("./OGCFeatureLayer-Cm2CKlEg.js")).default, OpenStreetMapLayer: async () => (await import("./main-Dm62uCOY.js").then((a) => a.rf)).default, OrientedImageryLayer: async () => (await import("./OrientedImageryLayer-CHUoFX6z.js")).default, PointCloudLayer: async () => (await import("./PointCloudLayer-C7sqAcwU.js")).default, RouteLayer: async () => (await import("./RouteLayer-wTaHpJ9-.js")).default, SceneLayer: async () => (await import("./SceneLayer-BsHu3r3e.js")).default, StreamLayer: async () => (await import("./StreamLayer-BFu9L6vp.js")).default, SubtypeGroupLayer: async () => (await import("./SubtypeGroupLayer-CLxlZ1eb.js")).default, TileLayer: async () => (await import("./main-Dm62uCOY.js").then((a) => a.rg)).default, UnknownLayer: async () => (await import("./UnknownLayer-Crh_fLRU.js")).default, UnsupportedLayer: async () => (await import("./UnsupportedLayer-BRMs1zAJ.js")).default, VectorTileLayer: async () => (await import("./VectorTileLayer-DUskRqqM.js")).default, VideoLayer: async () => (await import("./VideoLayer-jxLsFsic.js")).default, VoxelLayer: async () => (await import("./VoxelLayer-DbsFS4BV.js")).default, WFSLayer: async () => (await import("./WFSLayer-DQZEctsK.js")).default, WMSLayer: async () => (await import("./main-Dm62uCOY.js").then((a) => a.rh)).default, WMTSLayer: async () => (await import("./WMTSLayer-12k0jx2E.js")).default, WebTileLayer: async () => (await import("./main-Dm62uCOY.js").then((a) => a.re)).default }, f = /* @__PURE__ */ new Set(["Catalog Layer", "Feature Layer", "Oriented Imagery Layer"]);
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
//# sourceMappingURL=fetchService-B5BaRmBv.js.map
