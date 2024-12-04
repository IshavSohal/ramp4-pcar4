import { c1 as k, c2 as C, fT as O, fU as z, c7 as h, c8 as L, c9 as R, ch as j, cc as i, ca as y, cb as v, fV as e, ci as S, ck as V, fW as $, ce as _, cf as n, cj as q, c3 as A, c4 as b, fX as D, fY as N, fZ as P, f_ as T, c5 as F, c6 as U, cd as W, f$ as H } from "./main-CPC-ab0b.js";
const I = ["onClick", "aria-label"], X = { class: "md-icon-small inline" }, Y = /* @__PURE__ */ k({
  __name: "settings-button",
  props: {
    componentSelectedState: {
      type: Object,
      required: !0
    }
  },
  setup(m) {
    const { t: f } = C(), a = O(), u = z(), w = h(() => a.mobileView ? "top-end" : "left-end"), o = (r) => {
      r.selectable && u.toggleSelected({
        name: r.name
      });
    };
    return (r, l) => {
      const x = L("dropdown-menu"), p = R("focus-item");
      return j((i(), y(x, {
        position: w.value,
        tooltip: n(f)("export.menu"),
        tooltipPlacement: "top"
      }, {
        header: v(() => l[0] || (l[0] = [
          e("div", { class: "flex items-center text-gray-400 w-full h-full hover:text-black p-4 sm:p-8" }, [
            e("svg", {
              class: "fill-current w-24 h-24 m-auto",
              xmlns: "http://www.w3.org/2000/svg",
              viewBox: "0 0 24 24"
            }, [
              e("g", null, [
                e("path", {
                  d: "M0,0h24v24H0V0z",
                  fill: "none"
                }),
                e("path", { d: "M19.14,12.94c0.04-0.3,0.06-0.61,0.06-0.94c0-0.32-0.02-0.64-0.07-0.94l2.03-1.58c0.18-0.14,0.23-0.41,0.12-0.61 l-1.92-3.32c-0.12-0.22-0.37-0.29-0.59-0.22l-2.39,0.96c-0.5-0.38-1.03-0.7-1.62-0.94L14.4,2.81c-0.04-0.24-0.24-0.41-0.48-0.41 h-3.84c-0.24,0-0.43,0.17-0.47,0.41L9.25,5.35C8.66,5.59,8.12,5.92,7.63,6.29L5.24,5.33c-0.22-0.08-0.47,0-0.59,0.22L2.74,8.87 C2.62,9.08,2.66,9.34,2.86,9.48l2.03,1.58C4.84,11.36,4.8,11.69,4.8,12s0.02,0.64,0.07,0.94l-2.03,1.58 c-0.18,0.14-0.23,0.41-0.12,0.61l1.92,3.32c0.12,0.22,0.37,0.29,0.59,0.22l2.39-0.96c0.5,0.38,1.03,0.7,1.62,0.94l0.36,2.54 c0.05,0.24,0.24,0.41,0.48,0.41h3.84c0.24,0,0.44-0.17,0.47-0.41l0.36-2.54c0.59-0.24,1.13-0.56,1.62-0.94l2.39,0.96 c0.22,0.08,0.47,0,0.59-0.22l1.92-3.32c0.12-0.22,0.07-0.47-0.12-0.61L19.14,12.94z M12,15.6c-1.98,0-3.6-1.62-3.6-3.6 s1.62-3.6,3.6-3.6s3.6,1.62,3.6,3.6S13.98,15.6,12,15.6z" })
              ])
            ])
          ], -1)
        ])),
        default: v(() => [
          (i(!0), S(q, null, V(m.componentSelectedState, (s) => (i(), S("a", {
            key: s.name,
            onClick: (g) => o(s),
            href: "javascript:;",
            class: $(`text-left text-sm sm:text-base ${s.selectable ? "cursor-pointer" : "cursor-default"}`),
            "aria-label": s.name
          }, [
            e("div", X, [
              (i(), S("svg", {
                height: "20",
                width: "20",
                viewBox: "0 0 24 24",
                class: $(`inline mx-8 ${s.selected ? "" : "invisible"}`)
              }, l[1] || (l[1] = [
                e("g", null, [
                  e("path", { d: "M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z" })
                ], -1)
              ]), 2)),
              e("span", {
                class: $(`inline ${s.selectable ? "" : "text-gray-300"}
                    `)
              }, _(n(f)(`export.menu.component.${s.name}`)), 3)
            ])
          ], 10, I))), 128))
        ]),
        _: 1
      }, 8, ["position", "tooltip"])), [
        [p]
      ]);
    };
  }
}), Z = {
  class: "overflow-hidden border border-gray-200",
  ref: "componentEl"
}, G = { class: "flex" }, J = ["aria-label"], K = ["aria-label"], ee = /* @__PURE__ */ k({
  __name: "screen",
  props: {
    panel: {
      type: Object,
      required: !0
    }
  },
  setup(m) {
    const f = m, { t: a } = C(), u = A("iApi"), w = z(), o = b(), r = b(void 0), l = b(void 0), x = b([]), p = D("componentEl"), s = h(() => w.componentSelectedState), g = h(() => {
      let c = {};
      return o.value && Object.keys(s.value).forEach((t) => {
        c[t] = {
          name: t,
          selected: s.value[t] ?? !1,
          selectable: (o.value?.config)[t]?.selectable ?? !0
        };
      }), c;
    }), B = h(() => !!o.value?.customRendererFunc), d = N(300, () => {
      if (!o.value || !p.value)
        return;
      const c = p.value.querySelector(".export-canvas");
      o.value.make(c, p.value.clientWidth);
    });
    return P(() => {
      f.panel.exportMake = d, x.value.push(
        // Listen for any changes to the settings, and refresh the image when they do change
        T(g, () => {
          d();
        })
      );
    }), F(() => {
      o.value = u.fixture.get("export"), r.value = new ResizeObserver(d), l.value = new ResizeObserver(d), r.value.observe(u?.$vApp.$root?.$el), l.value.observe(u?.$vApp.$root?.$el.querySelector('[data-cy="export"]'));
    }), U(() => {
      r.value.disconnect(), l.value.disconnect(), x.value.forEach((c) => c());
    }), (c, t) => {
      const E = L("panel-screen");
      return i(), y(E, {
        panel: m.panel,
        footer: !0
      }, {
        header: v(() => [
          W(_(n(a)("export.title")), 1)
        ]),
        content: v(() => [
          e("div", Z, t[2] || (t[2] = [
            e("canvas", { class: "export-canvas !w-[100%]" }, null, -1)
          ]), 512)
        ]),
        footer: v(() => [
          e("div", G, [
            e("button", {
              type: "button",
              onClick: t[0] || (t[0] = (M) => o.value?.export()),
              class: "bg-green-700 hover:bg-green-800 text-white font-bold py-8 px-4 sm:px-16 mr-8 sm:mr-16",
              "aria-label": n(a)("export.download")
            }, _(n(a)("export.download")), 9, J),
            e("button", {
              type: "button",
              onClick: t[1] || (t[1] = (M) => n(d)()),
              class: "py-8 px-4 sm:px-16",
              "aria-label": n(a)("export.refresh")
            }, _(n(a)("export.refresh")), 9, K),
            B.value ? H("", !0) : (i(), y(Y, {
              key: 0,
              componentSelectedState: g.value,
              class: "ml-auto flex px-4 sm:px-8"
            }, null, 8, ["componentSelectedState"]))
          ])
        ]),
        _: 1
      }, 8, ["panel"]);
    };
  }
});
export {
  ee as _
};
//# sourceMappingURL=screen.vue_vue_type_script_setup_true_lang-YET3QXUc.js.map
