import { bC as w, bx as m, fA as g, fE as c, bF as r, bI as u, fG as _, bG as S, bH as b, bK as x, bT as H, bS as d, fC as p, iG as T, iu as $, bN as B, i4 as k } from "./main-guk43f7a.js";
const q = { class: "swipe-container" }, C = /* @__PURE__ */ w({
  __name: "swipe",
  props: {
    fixture: {
      type: m,
      required: !0
    },
    message: String
  },
  setup(f) {
    const e = g(), s = c("slider"), o = r(50), a = r(0), t = c("line"), i = r(!1), y = u(() => `${50 + 0.99 * (+o.value - 50) - 1}%`), E = u(() => `${a.value}px`), h = u(() => `${(-a.value + 45) / 2}px`), v = (n) => {
      console.log("mosuemove event"), console.log(n), i.value && (o.value = +o.value + n.movementX / 4, setTimeout(() => {
        const l = new Event("input");
        s.value?.dispatchEvent(l);
      }));
    };
    return _(() => {
      const n = document.querySelector(".inner-shell");
      a.value = n?.clientHeight ?? 1e3;
    }), S(() => {
      window.addEventListener("resize", () => {
        const n = document.querySelector(".inner-shell");
        a.value = n?.clientHeight ?? a.value;
      }), t.value?.addEventListener("mousedown", (n) => {
        i.value = !0, e.setOpacity(0.1);
      }), t.value?.addEventListener("mouseup", () => {
        i.value = !1, e.setOpacity(1);
      }), window.addEventListener("mouseup", () => {
        i.value = !1, e.setOpacity(1);
      }), t.value?.addEventListener("mouseover", () => {
        e.setOpacity(0.1);
      }), t.value?.addEventListener("mouseleave", () => !i.value && e.setOpacity(1)), s.value?.addEventListener("focus", () => e.setOpacity(0.1)), s.value?.addEventListener("blur", () => e.setOpacity(1)), s.value?.addEventListener("mouseover", () => e.setOpacity(0.1)), s.value?.addEventListener("mouseleave", () => e.setOpacity(1)), t.value?.addEventListener("mousemove", v);
    }), b(() => {
      window.removeEventListener("resize", () => {
        const n = document.querySelector(".inner-shell");
        a.value = n?.clientHeight ?? a.value;
      }), t.value?.removeEventListener("mousedown", () => {
        i.value = !0, e.setOpacity(0.1);
      }), t.value?.removeEventListener("mouseup", () => {
        i.value = !1, e.setOpacity(1);
      }), window.removeEventListener("mouseup", () => {
        i.value = !1, e.setOpacity(1);
      }), t.value?.removeEventListener("mouseover", () => e.setOpacity(0.1)), t.value?.removeEventListener("mouseleave", () => !i.value && e.setOpacity(1)), s.value?.removeEventListener("focus", () => e.setOpacity(0.1)), s.value?.removeEventListener("blur", () => e.setOpacity(1)), s.value?.removeEventListener("mouseover", () => e.setOpacity(0.1)), s.value?.removeEventListener("mouseleave", () => e.setOpacity(1)), t.value?.removeEventListener("mousemove", v);
    }), (n, l) => {
      const L = x("tippy");
      return B(), H("div", q, [
        d(p("div", {
          id: "verticalLine",
          style: T({ left: y.value, height: E.value, top: h.value }),
          ref_key: "line",
          ref: t,
          tabIndex: "0"
        }, null, 4), [
          [L, { content: "Drag and slide to move", placement: "left" }]
        ]),
        d(p("input", {
          "onUpdate:modelValue": l[0] || (l[0] = (O) => o.value = O),
          id: "layerSlider",
          type: "range",
          ref_key: "slider",
          ref: s,
          min: "5",
          max: "95",
          step: "0.5"
        }, null, 512), [
          [$, o.value]
        ])
      ]);
    };
  }
}), D = /* @__PURE__ */ k(C, [["__scopeId", "data-v-6f5eec8b"]]);
class M extends m {
  added() {
    const { el: e } = this.mount(D, {
      app: this.$element,
      props: { message: "This is a swipe.", fixture: this }
    });
    this.$vApp.$el.appendChild(e.childNodes[0]);
  }
  removed() {
  }
}
export {
  M as default
};
//# sourceMappingURL=index-D_U-cLot.js.map
