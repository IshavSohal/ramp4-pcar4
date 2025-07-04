import { bX as s, cz as c } from "./main-BBM-S1He.js";
import { m as e } from "./queryTopFeatures-DMP4QCHs.js";
async function n(o, t, a) {
  const r = s(o);
  return (await e(r, c.from(t), { ...a })).data.objectIds;
}
export {
  n as executeForTopIds
};
//# sourceMappingURL=executeForTopIds-DtUtVEyn.js.map
