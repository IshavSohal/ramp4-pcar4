import { $ as l } from "./main-CSZcX0az.js";
async function s(a, t) {
  const { data: e } = await l(a, { responseType: "json", query: { f: "json", ...t?.customParameters, token: t?.apiKey } });
  return e;
}
const h = { BingMapsLayer: async () => (await import("./BingMapsLayer-DWKIOq5L.js")).default, BuildingSceneLayer: async () => (await import("./BuildingSceneLayer-CupiSxvW.js")).default, CSVLayer: async () => (await import("./CSVLayer-B1c59rX-.js")).default, CatalogLayer: async () => (await import("./CatalogLayer-gg_nAHkI.js")).default, DimensionLayer: async () => (await import("./DimensionLayer-Dxjq2ram.js")).default, ElevationLayer: async () => (await import("./ElevationLayer-CyQOTjmc.js")).default, FeatureLayer: async () => (await import("./main-CSZcX0az.js").then((a) => a.rb)).default, GeoJSONLayer: async () => (await import("./GeoJSONLayer-DSCiV1o1.js")).default, GeoRSSLayer: async () => (await import("./GeoRSSLayer-BHPYFtne.js")).default, GroupLayer: async () => (await import("./GroupLayer-Dos4Nnc-.js")).default, ImageryLayer: async () => (await import("./main-CSZcX0az.js").then((a) => a.rc)).default, ImageryTileLayer: async () => (await import("./ImageryTileLayer-DQdwtVwk.js")).default, IntegratedMesh3DTilesLayer: async () => (await import("./IntegratedMesh3DTilesLayer-Cm2cmnh9.js")).default, IntegratedMeshLayer: async () => (await import("./IntegratedMeshLayer-HYXSZ2YF.js")).default, KMLLayer: async () => (await import("./KMLLayer-DBgfUb4U.js")).default, KnowledgeGraphLayer: async () => (await import("./KnowledgeGraphLayer-kHHFBw8y.js")).default, LineOfSightLayer: async () => (await import("./LineOfSightLayer-DXEjJrpx.js")).default, LinkChartLayer: async () => (await import("./LinkChartLayer-DWwgy3-R.js")).default, MapImageLayer: async () => (await import("./main-CSZcX0az.js").then((a) => a.rd)).default, MapNotesLayer: async () => (await import("./MapNotesLayer-b7H8GXRm.js")).default, MediaLayer: async () => (await import("./MediaLayer-D3HqUpXi.js")).default, OGCFeatureLayer: async () => (await import("./OGCFeatureLayer-B61iKX7Q.js")).default, OpenStreetMapLayer: async () => (await import("./main-CSZcX0az.js").then((a) => a.rf)).default, OrientedImageryLayer: async () => (await import("./OrientedImageryLayer-D1nN2htY.js")).default, PointCloudLayer: async () => (await import("./PointCloudLayer-DoVZXAyT.js")).default, RouteLayer: async () => (await import("./RouteLayer-IiiQV3IY.js")).default, SceneLayer: async () => (await import("./SceneLayer-C2EbNUmL.js")).default, StreamLayer: async () => (await import("./StreamLayer-gOUk0fox.js")).default, SubtypeGroupLayer: async () => (await import("./SubtypeGroupLayer-BsQXOtA7.js")).default, TileLayer: async () => (await import("./main-CSZcX0az.js").then((a) => a.rg)).default, UnknownLayer: async () => (await import("./UnknownLayer-C2KPBpW6.js")).default, UnsupportedLayer: async () => (await import("./UnsupportedLayer-BsfGnjPD.js")).default, VectorTileLayer: async () => (await import("./VectorTileLayer-BepB_yNT.js")).default, VideoLayer: async () => (await import("./VideoLayer-D3dSK4W9.js")).default, VoxelLayer: async () => (await import("./VoxelLayer-DjMHfwQA.js")).default, WFSLayer: async () => (await import("./WFSLayer-BZO09otg.js")).default, WMSLayer: async () => (await import("./main-CSZcX0az.js").then((a) => a.rh)).default, WMTSLayer: async () => (await import("./WMTSLayer-bhPV7neO.js")).default, WebTileLayer: async () => (await import("./main-CSZcX0az.js").then((a) => a.re)).default }, f = /* @__PURE__ */ new Set(["Catalog Layer", "Feature Layer", "Oriented Imagery Layer"]);
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
//# sourceMappingURL=fetchService-xWZekokl.js.map
