import { N as s, O as a, P as p } from "./main-BBM-S1He.js";
import { X as r } from "./FeatureLayerView2D-Sf6Qb2wW.js";
let e = class extends r {
  get updateSuspended() {
    const t = this.parent?.dynamicGroupLayerView;
    return this.suspended && (!t || t.suspended === !0);
  }
};
s([a()], e.prototype, "updateSuspended", null), e = s([p("esri.views.2d.layers.CatalogFootprintLayerView2D")], e);
const n = e;
export {
  n as default
};
//# sourceMappingURL=CatalogFootprintLayerView2D-D-3iZ7Xe.js.map
