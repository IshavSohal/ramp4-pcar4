import { eT as r } from "./main-Dm62uCOY.js";
import { w as s } from "./dom-BHTTQ4_z.js";
const n = r;
function i(e) {
  return "opened" in e ? e.opened : e.open;
}
function f(e) {
  n(() => {
    e.transitionEl && s(e.transitionEl, e.openTransitionProp, () => {
      i(e) ? e.onBeforeOpen() : e.onBeforeClose();
    }, () => {
      i(e) ? e.onOpen() : e.onClose();
    });
  });
}
export {
  f as o
};
//# sourceMappingURL=openCloseComponent-Do6pPBbK.js.map
