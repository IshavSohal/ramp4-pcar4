import { cm as f, cT as c, U as i } from "./main-CPC-ab0b.js";
import { p as n } from "./queryTopFeatures-rZFkAIwB.js";
async function d(r, a, o, t) {
  const e = f(r), m = { ...t }, { data: s } = await n(e, c.from(a), o, m);
  return i.fromJSON(s);
}
export {
  d as executeTopFeaturesQuery
};
//# sourceMappingURL=executeTopFeaturesQuery-Bd_E32GC.js.map
