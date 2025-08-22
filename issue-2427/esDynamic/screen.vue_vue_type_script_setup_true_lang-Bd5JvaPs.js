import { bC as y, bD as $, fA as E, fB as L, bI as x, bJ as B, bK as O, bS as V, bN as i, bL as C, bM as p, fC as e, bT as w, bV as j, fD as _, bP as h, bQ as l, bU as D, bE as A, bF as S, fE as F, fF as N, fG as P, fH as R, bG as q, bH as H, bO as I, fI as T } from "./main-CAZsdGtE.js";
const G = ["onClick", "aria-label"], U = { class: "md-icon-small inline" }, J = /* @__PURE__ */ y({
  __name: "settings-button",
  props: {
    componentSelectedState: {
      type: Object,
      required: !0
    }
  },
  setup(d) {
    const { t: m } = $(), a = E(), b = L(), g = x(() => a.mobileView ? "top-end" : "left-end"), o = (n) => {
      n.selectable && b.toggleSelected({
        name: n.name
      });
    };
    return (n, r) => {
      const u = B("dropdown-menu"), v = O("focus-item");
      return V((i(), C(u, {
        position: g.value,
        tooltip: l(m)("export.menu"),
        tooltipPlacement: "top"
      }, {
        header: p(() => r[0] || (r[0] = [
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
        default: p(() => [
          (i(!0), w(D, null, j(d.componentSelectedState, (s) => (i(), w("a", {
            key: s.name,
            onClick: (k) => o(s),
            href: "javascript:;",
            class: _(`text-left text-sm sm:text-base ${s.selectable ? "cursor-pointer" : "cursor-default"}`),
            "aria-label": s.name
          }, [
            e("div", U, [
              (i(), w("svg", {
                height: "20",
                width: "20",
                viewBox: "0 0 24 24",
                class: _(`inline mx-8 ${s.selected ? "" : "invisible"}`)
              }, r[1] || (r[1] = [
                e("g", null, [
                  e("path", { d: "M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z" })
                ], -1)
              ]), 2)),
              e("span", {
                class: _(`inline ${s.selectable ? "" : "text-gray-300"}
                    `)
              }, h(l(m)(`export.menu.component.${s.name}`)), 3)
            ])
          ], 10, G))), 128))
        ]),
        _: 1
      }, 8, ["position", "tooltip"])), [
        [v]
      ]);
    };
  }
}), K = { class: "flex" }, Q = ["aria-label"], W = ["aria-label"], Y = /* @__PURE__ */ y({
  __name: "screen",
  props: {
    panel: {
      type: Object,
      required: !0
    }
  },
  setup(d) {
    const m = d, { t: a } = $(), b = A("iApi"), g = L(), o = S(), n = S(void 0), r = S([]), u = F("el"), v = x(() => g.componentSelectedState), s = x(() => {
      let c = {};
      return o.value && Object.keys(v.value).forEach((t) => {
        c[t] = {
          name: t,
          selected: v.value[t] ?? !1,
          selectable: (o.value?.config)[t]?.selectable ?? !0
        };
      }), c;
    }), k = x(() => !!o.value?.customRendererFunc), f = N(300, () => {
      if (!o.value)
        return;
      const c = u.value.querySelector(".export-canvas");
      o.value.make(c, u.value.clientWidth);
    });
    return P(() => {
      m.panel.exportMake = f, r.value.push(
        // Listen for any changes to the settings, and refresh the image when they do change
        R(s, () => {
          f();
        })
      );
    }), q(() => {
      o.value = b.fixture.get("export"), n.value = new ResizeObserver(() => {
        f();
      }), n.value.observe(b?.$vApp.$root?.$el);
    }), H(() => {
      n.value.disconnect(), r.value.forEach((c) => c());
    }), (c, t) => {
      const M = B("panel-screen");
      return i(), C(M, {
        panel: d.panel,
        footer: !0
      }, {
        header: p(() => [
          I(h(l(a)("export.title")), 1)
        ]),
        content: p(() => [
          e("div", {
            class: "overflow-hidden border border-gray-200",
            ref_key: "el",
            ref: u
          }, t[2] || (t[2] = [
            e("canvas", { class: "export-canvas !w-[100%]" }, null, -1)
          ]), 512)
        ]),
        footer: p(() => [
          e("div", K, [
            e("button", {
              type: "button",
              onClick: t[0] || (t[0] = (z) => o.value?.export()),
              class: "bg-green-500 hover:bg-green-700 text-white font-bold py-8 px-4 sm:px-16 mr-8 sm:mr-16",
              "aria-label": l(a)("export.download")
            }, h(l(a)("export.download")), 9, Q),
            e("button", {
              type: "button",
              onClick: t[1] || (t[1] = (z) => l(f)()),
              class: "py-8 px-4 sm:px-16",
              "aria-label": l(a)("export.refresh")
            }, h(l(a)("export.refresh")), 9, W),
            k.value ? T("", !0) : (i(), C(J, {
              key: 0,
              componentSelectedState: s.value,
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
  Y as _
};
//# sourceMappingURL=screen.vue_vue_type_script_setup_true_lang-Bd5JvaPs.js.map
