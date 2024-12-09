import { cm as i, cT as m, b8 as c } from "./main-BinSYbpH.js";
import { d as r } from "./queryTopFeatures-uRR1xSOe.js";
async function N(n, o, e) {
  const s = i(n), a = await r(s, m.from(o), { ...e }), t = a.data.extent;
  return !t || isNaN(t.xmin) || isNaN(t.ymin) || isNaN(t.xmax) || isNaN(t.ymax) ? { count: a.data.count, extent: null } : { count: a.data.count, extent: c.fromJSON(t) };
}
export {
  N as executeForTopExtents
};
//# sourceMappingURL=executeForTopExtents-Ce58_CMe.js.map
