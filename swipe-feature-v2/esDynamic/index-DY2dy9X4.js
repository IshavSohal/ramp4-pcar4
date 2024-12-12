import { c1 as _, bY as u, fT as S, fX as l, c4 as a, c7 as r, fZ as x, c5 as g, c6 as w, c9 as E, ci as L, fV as c, j4 as O, ch as $, iU as B, cc as H, ix as T } from "./main-BinSYbpH.js";
const b = { class: "swipe-container" }, k = /* @__PURE__ */ _({
  __name: "swipe",
  props: {
    fixture: {
      type: u,
      required: !0
    },
    message: String
  },
  setup(v) {
    const e = S(), t = l("slider"), i = a(50), n = a(0), d = l("line"), p = r(() => `${50 + 0.99 * (+i.value - 50)}%`), m = r(() => `${n.value}px`), f = r(() => `${-n.value * 0.91}px`);
    return x(() => {
      const s = document.querySelector(".inner-shell");
      n.value = s?.clientHeight ?? 1e3;
    }), g(() => {
      window.addEventListener("resize", () => {
        const s = document.querySelector(".inner-shell");
        n.value = s?.clientHeight ?? n.value;
      }), t.value?.addEventListener("focus", () => e.setOpacity(0.1)), t.value?.addEventListener("blur", () => e.setOpacity(1)), t.value?.addEventListener("mouseover", () => e.setOpacity(0.1)), t.value?.addEventListener("mouseleave", () => e.setOpacity(1));
    }), w(() => {
      window.removeEventListener("resize", () => {
        const s = document.querySelector(".inner-shell");
        n.value = s?.clientHeight ?? n.value;
      }), t.value?.removeEventListener("focus", () => e.setOpacity(0.1)), t.value?.removeEventListener("blur", () => e.setOpacity(1)), t.value?.removeEventListener("mouseover", () => e.setOpacity(0.1)), t.value?.removeEventListener("mouseleave", () => e.setOpacity(1));
    }), (s, o) => {
      const h = E("tippy");
      return H(), L("div", b, [
        c("div", {
          id: "verticalLine",
          style: O({ left: p.value, height: m.value, top: f.value }),
          ref_key: "line",
          ref: d
        }, null, 4),
        $(c("input", {
          "onUpdate:modelValue": o[0] || (o[0] = (y) => i.value = y),
          id: "layerSlider",
          type: "range",
          ref_key: "slider",
          ref: t,
          min: "5",
          max: "95",
          step: "0.5"
        }, null, 512), [
          [B, i.value],
          [h, { content: "Drag and slide to move", followCursor: !0 }]
        ])
      ]);
    };
  }
}), q = /* @__PURE__ */ T(k, [["__scopeId", "data-v-06fb2e8a"]]);
class z extends u {
  added() {
    const { el: e } = this.mount(q, {
      app: this.$element,
      props: { message: "This is a swipe.", fixture: this }
    });
    this.$vApp.$el.appendChild(e.childNodes[0]);
  }
  removed() {
  }
}
export {
  z as default
};
//# sourceMappingURL=index-DY2dy9X4.js.map
