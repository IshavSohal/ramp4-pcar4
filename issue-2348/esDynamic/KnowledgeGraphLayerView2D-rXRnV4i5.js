import { V as i, bG as n, O as a, P as r, bH as l, Q as h } from "./main-Dm62uCOY.js";
import { f as d, y as o } from "./LayerView-ZDKd4Fn5.js";
let t = class extends d(o) {
  constructor(e) {
    super(e), this.layerViews = new i();
  }
  set layerViews(e) {
    this._set("layerViews", n(e, this._get("layerViews")));
  }
  get updatingProgress() {
    return this.layerViews.length === 0 ? 1 : this.layerViews.reduce((e, s) => e + s.updatingProgress, 0) / this.layerViews.length;
  }
  attach() {
    this._updateStageChildren(), this.addAttachHandles(this.layerViews.on("after-changes", () => this._updateStageChildren()));
  }
  detach() {
    this.container.removeAllChildren();
  }
  update(e) {
  }
  viewChange() {
  }
  moveEnd() {
  }
  _updateStageChildren() {
    this.container.removeAllChildren(), this.layerViews.forEach((e, s) => this.container.addChildAt(e.container, s));
  }
};
a([r({ cast: l })], t.prototype, "layerViews", null), a([r({ readOnly: !0 })], t.prototype, "updatingProgress", null), t = a([h("esri.views.2d.layers.KnowledgeGraphLayerView2D")], t);
const g = t;
export {
  g as default
};
//# sourceMappingURL=KnowledgeGraphLayerView2D-rXRnV4i5.js.map