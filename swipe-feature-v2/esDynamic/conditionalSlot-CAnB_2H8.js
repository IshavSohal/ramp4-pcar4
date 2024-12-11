import { cZ as n } from "./main-BinSYbpH.js";
import { c as r } from "./observers-BhSzK-af.js";
let t;
const i = { childList: !0 };
function f(o) {
  t || (t = r("mutation", c)), t.observe(o.el, i);
}
function l(o) {
  t.unobserve(o.el);
}
function c(o) {
  o.forEach(({ target: e }) => {
    n(e);
  });
}
export {
  f as c,
  l as d
};
//# sourceMappingURL=conditionalSlot-CAnB_2H8.js.map
