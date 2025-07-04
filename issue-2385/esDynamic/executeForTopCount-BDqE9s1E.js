import { bX as n, cz as c } from "./main-BBM-S1He.js";
import { a as s } from "./queryTopFeatures-DMP4QCHs.js";
async function f(o, t, a) {
  const r = n(o);
  return (await s(r, c.from(t), { ...a })).data.count;
}
export {
  f as executeForTopCount
};
//# sourceMappingURL=executeForTopCount-BDqE9s1E.js.map
