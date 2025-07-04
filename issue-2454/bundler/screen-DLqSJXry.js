import { defineComponent as x, defineAsyncComponent as s, inject as L, ref as b, onMounted as A, onBeforeUnmount as B, computed as C, resolveComponent as I, resolveDirective as p, openBlock as n, createBlock as u, withCtx as a, createTextVNode as w, toDisplayString as D, unref as r, createVNode as j, withDirectives as N, createElementBlock as d, Fragment as T, renderList as V } from "vue";
import { useI18n as q } from "vue-i18n";
const F = ["content"], O = /* @__PURE__ */ x({
  __name: "screen",
  props: {
    panel: {
      type: Object,
      required: !0
    }
  },
  setup(m) {
    const v = s(() => import("./header-C_A8h_sr.js")), _ = s(() => import("./item-CYXb0TST.js")), { t: o } = q(), f = L("iApi"), e = b(), i = () => {
      e.value._tippy.hide();
    }, c = (t) => {
      t.key === "Tab" && e.value?.matches(":focus") && e.value._tippy.show();
    };
    A(() => {
      e.value?.addEventListener("blur", i), e.value?.addEventListener("keyup", c);
    }), B(() => {
      e.value?.removeEventListener("blur", i), e.value?.removeEventListener("keyup", c);
    });
    const g = C(() => {
      let t = f.fixture.get("legend");
      return t ? [...t.getLegend()] : [];
    });
    return (t, y) => {
      const h = I("panel-screen"), k = p("focus-list"), E = p("tippy");
      return n(), u(h, { panel: m.panel }, {
        header: a(() => [
          w(D(r(o)("legend.title")), 1)
        ]),
        content: a(() => [
          j(r(v)),
          N((n(), d("div", {
            content: r(o)("panels.controls.items"),
            ref_key: "el",
            ref: e
          }, [
            (n(!0), d(T, null, V(g.value, (l) => (n(), u(r(_), {
              legendItem: l,
              key: l.uid
            }, null, 8, ["legendItem"]))), 128))
          ], 8, F)), [
            [k],
            [E, {
              trigger: "manual",
              placement: "top-end",
              maxWidth: 190
            }]
          ])
        ]),
        _: 1
      }, 8, ["panel"]);
    };
  }
});
export {
  O as default
};
