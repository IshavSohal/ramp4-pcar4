import { bX as m, cz as c, Y as i } from "./main-BBM-S1He.js";
import { p as n } from "./queryTopFeatures-DMP4QCHs.js";
async function d(r, a, o, t) {
  const e = m(r), s = { ...t }, { data: f } = await n(e, c.from(a), o, s);
  return i.fromJSON(f);
}
export {
  d as executeTopFeaturesQuery
};
//# sourceMappingURL=executeTopFeaturesQuery-Bc5DGKNn.js.map