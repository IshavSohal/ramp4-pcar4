import { bC as k, i2 as E, bD as _, bE as I, bI as M, bJ as R, bK as A, bN as h, bT as u, fC as e, bS as i, i3 as d, bQ as l, bR as m, bM as p, bP as c, fK as b, i4 as B } from "./main-BBM-S1He.js";
const j = { class: "relative legend-header flex align-middle" }, D = ["content", "aria-label"], L = ["content", "aria-label"], S = /* @__PURE__ */ k({
  __name: "header",
  setup(G) {
    const w = E(), { t: s } = _(), a = I("iApi"), r = M(() => a.fixture.get("legend")), x = () => {
      a.event.emit(b.WIZARD_TOGGLE);
    }, y = () => {
      try {
        return a.fixture.exists("wizard");
      } catch {
        return !1;
      }
    }, C = () => {
      a.event.emit(b.REORDER_TOGGLE);
    }, z = () => {
      try {
        return a.fixture.exists("layer-reorder");
      } catch {
        return !1;
      }
    }, n = (o) => w.headerControls.includes(o);
    return (o, t) => {
      const g = R("dropdown-menu"), f = A("tippy");
      return h(), u("div", j, [
        e("div", null, [
          i((h(), u("button", {
            type: "button",
            onClick: x,
            class: "relative mr-auto text-gray-500 hover:text-black",
            content: l(s)("legend.header.addlayer"),
            "aria-label": l(s)("legend.header.addlayer")
          }, t[4] || (t[4] = [
            e("div", { class: "p-8" }, [
              e("svg", {
                class: "fill-current w-18 h-18 flip",
                viewBox: "0 0 24 24"
              }, [
                e("path", { d: "M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z" })
              ])
            ], -1)
          ]), 8, D)), [
            [d, y() && n("wizard")],
            [f, { placement: "right" }]
          ])
        ]),
        e("div", null, [
          i((h(), u("button", {
            type: "button",
            onClick: C,
            class: "relative mr-auto text-gray-500 hover:text-black flex justify-center items-center",
            content: l(s)("legend.header.reorderlayers"),
            "aria-label": l(s)("legend.header.reorderlayers")
          }, t[5] || (t[5] = [
            e("div", { class: "p-8" }, [
              e("svg", {
                class: "fill-current w-18 h-18 flip",
                viewBox: "0 0 24 24"
              }, [
                e("path", {
                  d: "M0 0h24v24H0z",
                  fill: "none"
                }),
                e("path", { d: "M14 5h8v2h-8zm0 5.5h8v2h-8zm0 5.5h8v2h-8zM2 11.5C2 15.08 4.92 18 8.5 18H9v2l3-3-3-3v2h-.5C6.02 16 4 13.98 4 11.5S6.02 7 8.5 7H12V5H8.5C4.92 5 2 7.92 2 11.5z" })
              ])
            ], -1)
          ]), 8, L)), [
            [d, z() && n("layerReorder")],
            [f, { placement: "right" }]
          ])
        ]),
        t[8] || (t[8] = e("span", { class: "flex-1" }, null, -1)),
        i(m(g, {
          class: "relative",
          position: "left-start",
          tooltip: l(s)("legend.header.groups"),
          tooltipPlacement: "left-start",
          tooltipPlacementAlt: "bottom-end"
        }, {
          header: p(() => t[6] || (t[6] = [
            e("div", { class: "p-8" }, [
              e("svg", {
                class: "fill-current w-18 h-18",
                viewBox: "0 0 24 24"
              }, [
                e("path", { d: "M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z" })
              ])
            ], -1)
          ])),
          default: p(() => [
            e("a", {
              href: "javascript:;",
              class: "flex leading-snug items-center overflow-hidden whitespace-nowrap",
              onClick: t[0] || (t[0] = (v) => r.value.expandItems(!0))
            }, c(l(s)("legend.header.groups.expand")), 1),
            e("a", {
              href: "javascript:;",
              class: "flex leading-snug items-center overflow-hidden whitespace-nowrap",
              onClick: t[1] || (t[1] = (v) => r.value.expandItems(!1))
            }, c(l(s)("legend.header.groups.collapse")), 1)
          ]),
          _: 1
        }, 8, ["tooltip"]), [
          [d, n("groupToggle")]
        ]),
        i(m(g, {
          class: "relative",
          position: "left-start",
          tooltip: l(s)("legend.header.visible"),
          tooltipPlacement: "left-start",
          tooltipPlacementAlt: "bottom-end"
        }, {
          header: p(() => t[7] || (t[7] = [
            e("div", { class: "flex p-8" }, [
              e("svg", {
                class: "fill-current w-18 h-18",
                viewBox: "0 0 24 24"
              }, [
                e("path", { d: "M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z" })
              ])
            ], -1)
          ])),
          default: p(() => [
            e("a", {
              href: "javascript:;",
              class: "flex leading-snug items-center overflow-hidden whitespace-nowrap",
              onClick: t[2] || (t[2] = (v) => r.value.showItems(!0))
            }, c(l(s)("legend.header.visible.show")), 1),
            e("a", {
              href: "javascript:;",
              class: "flex leading-snug items-center overflow-hidden whitespace-nowrap",
              onClick: t[3] || (t[3] = (v) => r.value.showItems(!1))
            }, c(l(s)("legend.header.visible.hide")), 1)
          ]),
          _: 1
        }, 8, ["tooltip"]), [
          [d, n("visibilityToggle")]
        ])
      ]);
    };
  }
}), P = /* @__PURE__ */ B(S, [["__scopeId", "data-v-e8031c30"]]);
export {
  P as default
};
//# sourceMappingURL=header-BG0uTJr1.js.map