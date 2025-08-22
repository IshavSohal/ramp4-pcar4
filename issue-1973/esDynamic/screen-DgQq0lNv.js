import { fV as H, c4 as ee, iP as Ye, c7 as Ne, f_ as St, c5 as Ot, c6 as tt, cc as k, ci as ne, iN as Xe, cd as et, f$ as ue, cj as On, ck as xn, ce as oe, c1 as nt, c2 as kt, iQ as Sr, cf as K, ix as xt, js as Or, c3 as Yt, fX as ke, c9 as Xt, cg as ge, cb as ye, ch as bt, fW as _e, iw as pn, iT as xr, nH as Er, j7 as Nr, i$ as ie, nI as Tr, g1 as gn, ld as Ft, nJ as Be, c8 as Cr, ca as we, iJ as mn, mR as Ir } from "./main-CSZcX0az.js";
import { r as Lr } from "./vue.esm-bundler-NdLi8Bsa.js";
function $e(d, o, l) {
  return Math.max(o, Math.min(d, l));
}
function fe(d, o = 2) {
  return d.toFixed(o).replace(/\.?0+$/, "");
}
function yn(d) {
  return d.endsWith(".") ? NaN : (parseFloat(d) % 360 + 360) % 360 / 360;
}
function bn(d) {
  return fe(360 * d);
}
function Qe(d) {
  if (!d.endsWith("%")) return NaN;
  const o = d.substring(0, d.length - 1);
  if (o.endsWith(".")) return NaN;
  const l = parseFloat(o);
  return Number.isNaN(l) ? NaN : $e(l, 0, 100) / 100;
}
function pt(d) {
  return fe(100 * d) + "%";
}
function Dt(d) {
  if (d.endsWith("%")) return Qe(d);
  if (d.endsWith(".")) return NaN;
  const o = parseFloat(d);
  return Number.isNaN(o) ? NaN : $e(o, 0, 255) / 255;
}
function Pt(d) {
  return fe(255 * d);
}
function Vt(d) {
  return d.endsWith("%") ? Qe(d) : $e(parseFloat(d), 0, 1);
}
function zt(d) {
  return String(d);
}
const Qt = { hsl: { h: { to: bn, from: yn }, s: { to: pt, from: Qe }, l: { to: pt, from: Qe }, a: { to: zt, from: Vt } }, hwb: { h: { to: bn, from: yn }, w: { to: pt, from: Qe }, b: { to: pt, from: Qe }, a: { to: zt, from: Vt } }, rgb: { r: { to: Pt, from: Dt }, g: { to: Pt, from: Dt }, b: { to: Pt, from: Dt }, a: { to: zt, from: Vt } } };
function gt(d) {
  const o = d.replace(/^#/, ""), l = [], e = o.length > 4 ? 2 : 1;
  for (let i = 0; i < o.length; i += e) {
    const r = o.slice(i, i + e);
    l.push(r.repeat(e % 2 + 1));
  }
  l.length === 3 && l.push("ff");
  const a = l.map((i) => parseInt(i, 16) / 255);
  return { r: a[0], g: a[1], b: a[2], a: a[3] };
}
function Bt(d) {
  const o = d.l < 0.5 ? d.l * (1 + d.s) : d.l + d.s - d.l * d.s, l = 2 * d.l - o;
  return { r: $t(l, o, d.h + 1 / 3), g: $t(l, o, d.h), b: $t(l, o, d.h - 1 / 3), a: d.a };
}
function $t(d, o, l) {
  return l < 0 ? l += 1 : l > 1 && (l -= 1), l < 1 / 6 ? d + 6 * (o - d) * l : l < 0.5 ? o : l < 2 / 3 ? d + (o - d) * (2 / 3 - l) * 6 : d;
}
function qe(d) {
  return { r: Ht(5, d), g: Ht(3, d), b: Ht(1, d), a: d.a };
}
function Ht(d, o) {
  const l = (d + 6 * o.h) % 6;
  return o.v - o.v * o.s * Math.max(0, Math.min(l, 4 - l, 1));
}
function Ge(d) {
  return { h: d.h, s: d.b === 1 ? 0 : 1 - d.w / (1 - d.b), v: 1 - d.b, a: d.a };
}
function Ke(d) {
  const o = Math.min(d.r, d.g, d.b), l = Math.max(d.r, d.g, d.b);
  let e;
  return e = l === o ? 0 : l === d.r ? (0 + (d.g - d.b) / (l - o)) / 6 : l === d.g ? (2 + (d.b - d.r) / (l - o)) / 6 : (4 + (d.r - d.g) / (l - o)) / 6, e < 0 && (e += 1), { h: e, w: o, b: 1 - l, a: d.a };
}
function Ut(d) {
  const o = Ke(d), l = o.w, e = 1 - o.b, a = (e + l) / 2;
  let i;
  return i = e === 0 || l === 1 ? 0 : (e - a) / Math.min(a, 1 - a), { h: o.h, s: i, l: a, a: d.a };
}
function mt(d) {
  return "#" + Object.values(d).map((o) => {
    const l = 255 * o, e = Math.round(l).toString(16);
    return e.length === 1 ? "0" + e : e;
  }).join("");
}
const Ar = { hex: [["hsl", (d) => xe(d, [gt, Ut])], ["hsv", (d) => xe(d, [gt, Ke, Ge])], ["hwb", (d) => xe(d, [gt, Ke])], ["rgb", gt]], hsl: [["hex", (d) => xe(d, [Bt, mt])], ["hsv", function(d) {
  const o = d.l + d.s * Math.min(d.l, 1 - d.l), l = o === 0 ? 0 : 2 - 2 * d.l / o;
  return { h: d.h, s: l, v: o, a: d.a };
}], ["hwb", (d) => xe(d, [Bt, Ke])], ["rgb", Bt]], hsv: [["hex", (d) => xe(d, [qe, mt])], ["hsl", function(d) {
  const o = d.v - d.v * d.s / 2, l = Math.min(o, 1 - o), e = l === 0 ? 0 : (d.v - o) / l;
  return { h: d.h, s: e, l: o, a: d.a };
}], ["hwb", function(d) {
  return { h: d.h, w: (1 - d.s) * d.v, b: 1 - d.v, a: d.a };
}], ["rgb", qe]], hwb: [["hex", (d) => xe(d, [Ge, qe, mt])], ["hsl", (d) => xe(d, [Ge, qe, Ut])], ["hsv", Ge], ["rgb", (d) => xe(d, [Ge, qe])]], rgb: [["hex", mt], ["hsl", Ut], ["hsv", (d) => xe(d, [Ke, Ge])], ["hwb", Ke]] };
function xe(d, o) {
  return o.reduce((l, e) => e(l), d);
}
function yt(d) {
  const o = {};
  for (const l in d) o[l] = d[l];
  return o;
}
const Mr = { hex: (d, o) => o && [5, 9].includes(d.length) ? d.substring(0, d.length - (d.length - 1) / 4) : d, hsl: (d, o) => `hsl(${fe(360 * d.h)} ${fe(100 * d.s)}% ${fe(100 * d.l)}%` + (o ? ")" : ` / ${fe(d.a)})`), hwb: (d, o) => `hwb(${fe(360 * d.h)} ${fe(100 * d.w)}% ${fe(100 * d.b)}%` + (o ? ")" : ` / ${fe(d.a)})`), rgb: (d, o) => `rgb(${fe(255 * d.r)} ${fe(255 * d.g)} ${fe(255 * d.b)}` + (o ? ")" : ` / ${fe(d.a)})`) };
function Sn(d, o, l) {
  return Mr[o](d, l);
}
function En(d) {
  return /^#(?:(?:[A-F0-9]{2}){3,4}|[A-F0-9]{3,4})$/i.test(d);
}
function Rr(d) {
  if (typeof d != "string")
    return { format: function(u) {
      return Object.prototype.hasOwnProperty.call(u, "r") ? "rgb" : Object.prototype.hasOwnProperty.call(u, "w") ? "hwb" : Object.prototype.hasOwnProperty.call(u, "v") ? "hsv" : "hsl";
    }(d), color: d };
  if (En(d)) return { format: "hex", color: d };
  if (!d.includes("(")) {
    const c = document.createElement("canvas").getContext("2d");
    c.fillStyle = d;
    const u = c.fillStyle;
    return u === "#000000" && d !== "black" ? null : { format: "hex", color: u };
  }
  const [o, l] = d.split("("), e = o.substring(0, 3), a = l.replace(/[,/)]/g, " ").replace(/\s+/g, " ").trim().split(" ");
  a.length === 3 && a.push("1");
  const i = (e + "a").split(""), r = Object.fromEntries(i.map((c, u) => [c, Qt[e][c].from(a[u])]));
  return { format: e, color: r };
}
const Wt = ["hex", "hsl", "hwb", "rgb"], wr = ["show", "hide"], jr = { class: "vacp-range-input-group" }, Fr = ["for"], Dr = { class: "vacp-range-input-label-text vacp-range-input-label-text--hue" }, Pr = ["id", "value"], Vr = ["for"], zr = { class: "vacp-range-input-label-text vacp-range-input-label-text--alpha" }, Br = ["id", "value"], $r = H("span", { class: "vacp-visually-hidden" }, "Copy color", -1), Hr = H("svg", { class: "vacp-icon", xmlns: "http://www.w3.org/2000/svg", "aria-hidden": "true", width: "24", height: "24", viewBox: "0 0 32 32" }, [H("path", { d: "M25.313 28v-18.688h-14.625v18.688h14.625zM25.313 6.688c1.438 0 2.688 1.188 2.688 2.625v18.688c0 1.438-1.25 2.688-2.688 2.688h-14.625c-1.438 0-2.688-1.25-2.688-2.688v-18.688c0-1.438 1.25-2.625 2.688-2.625h14.625zM21.313 1.313v2.688h-16v18.688h-2.625v-18.688c0-1.438 1.188-2.688 2.625-2.688h16z", fill: "currentColor" })], -1), Ur = { class: "vacp-color-inputs" }, Wr = { class: "vacp-color-input-group" }, Gr = ["for"], Kr = H("span", { class: "vacp-color-input-label-text" }, " Hex ", -1), Xr = ["id", "value"], Qr = ["id", "for", "onInput"], kr = { class: "vacp-color-input-label-text" }, Yr = ["id", "value", "onInput"], Jr = H("span", { class: "vacp-visually-hidden" }, "Switch format", -1), Zr = H("svg", { class: "vacp-icon", "aria-hidden": "true", xmlns: "http://www.w3.org/2000/svg", width: "16", height: "15" }, [H("path", { d: "M8 15l5-5-1-1-4 2-4-2-1 1zm4-9l1-1-5-5-5 5 1 1 4-2z", fill: "currentColor" })], -1);
var Nn = { __name: "ColorPicker", props: { color: { type: [String, Object], default: "#ffffffff" }, id: { type: String, default: "color-picker" }, visibleFormats: { type: Array, default: () => Wt, validator: (d) => d.length > 0 && d.every((o) => Wt.includes(o)) }, defaultFormat: { type: String, default: "hsl", validator: (d) => Wt.includes(d) }, alphaChannel: { type: String, default: "show", validator: (d) => wr.includes(d) } }, emits: ["color-change"], setup(d, { emit: o }) {
  const l = d, e = ee(null), a = ee(null), i = ee(null);
  let r = !1;
  const c = ee(l.visibleFormats.includes(l.defaultFormat) ? l.defaultFormat : l.visibleFormats[0]), u = Ye({ hex: "#ffffffff", hsl: { h: 0, s: 0, l: 1, a: 1 }, hsv: { h: 0, s: 0, v: 1, a: 1 }, hwb: { h: 0, w: 1, b: 0, a: 1 }, rgb: { r: 1, g: 1, b: 1, a: 1 } }), h = Ne(function() {
    const S = Object.keys(u[c.value]);
    return c.value !== "hex" && l.alphaChannel === "hide" ? S.slice(0, 3) : S;
  }), v = Ne(function() {
    return l.alphaChannel === "hide" && [5, 9].includes(u.hex.length) ? u.hex.substring(0, u.hex.length - (u.hex.length - 1) / 4) : u.hex;
  });
  function p() {
    const S = (l.visibleFormats.findIndex((N) => N === c.value) + 1) % l.visibleFormats.length;
    c.value = l.visibleFormats[S];
  }
  function y(S) {
    r = !0, E(S);
  }
  function g(S) {
    r = !0, D(S);
  }
  function m() {
    r = !1;
  }
  function E(S) {
    S.buttons === 1 && r !== !1 && a.value instanceof HTMLElement && F(a.value, S.clientX, S.clientY);
  }
  function D(S) {
    if (r === !1 || !(a.value instanceof HTMLElement)) return;
    S.preventDefault();
    const N = S.touches[0];
    F(a.value, N.clientX, N.clientY);
  }
  function F(S, N, C) {
    const M = function(q, G, J) {
      const z = q.getBoundingClientRect(), W = G - z.left, se = J - z.top;
      return { x: z.width === 0 ? 0 : $e(W / z.width, 0, 1), y: z.height === 0 ? 0 : $e(1 - se / z.height, 0, 1) };
    }(S, N, C), O = yt(u.hsv);
    O.s = M.x, O.v = M.y, T("hsv", O);
  }
  function A(S) {
    if (!["ArrowUp", "ArrowRight", "ArrowDown", "ArrowLeft"].includes(S.key)) return;
    S.preventDefault();
    const N = ["ArrowLeft", "ArrowDown"].includes(S.key) ? -1 : 1, C = ["ArrowLeft", "ArrowRight"].includes(S.key) ? "s" : "v", M = S.shiftKey ? 10 : 1, O = u.hsv[C] + N * M * 0.01, q = yt(u.hsv);
    q[C] = $e(O, 0, 1), T("hsv", q);
  }
  function R(S) {
    const N = Rr(S);
    N !== null && T(N.format, N.color);
  }
  function B(S, N) {
    const C = S.currentTarget, M = yt(u.hsv);
    M[N] = parseInt(C.value) / parseInt(C.max), T("hsv", M);
  }
  function U(S) {
    const N = S.target;
    En(N.value) && T("hex", N.value);
  }
  function I(S, N) {
    const C = S.target, M = yt(u[c.value]), O = Qt[c.value][N].from(C.value);
    Number.isNaN(O) || O === void 0 || (M[N] = O, T(c.value, M));
  }
  function T(S, N) {
    let C = N;
    if (l.alphaChannel === "hide") if (typeof N != "string") N.a = 1, C = N;
    else if ([5, 9].includes(N.length)) {
      const M = (N.length - 1) / 4;
      C = N.substring(0, N.length - M) + "f".repeat(M);
    } else [4, 7].includes(N.length) && (C = N + "f".repeat((N.length - 1) / 3));
    if (!function(M, O) {
      if (typeof M == "string" || typeof O == "string") return M === O;
      for (const q in M) if (M[q] !== O[q]) return !1;
      return !0;
    }(u[S], C)) {
      (function(O, q) {
        u[O] = q;
        for (const [G, J] of Ar[O]) u[G] = J(u[O]);
      })(S, C);
      const M = function() {
        const O = l.alphaChannel === "hide", q = Sn(u[c.value], c.value, O);
        return { colors: u, cssColor: q };
      }();
      o("color-change", M);
    }
    (function() {
      e.value instanceof HTMLElement && a.value instanceof HTMLElement && i.value instanceof HTMLElement && (e.value.style.setProperty("--vacp-hsl-h", String(u.hsl.h)), e.value.style.setProperty("--vacp-hsl-s", String(u.hsl.s)), e.value.style.setProperty("--vacp-hsl-l", String(u.hsl.l)), e.value.style.setProperty("--vacp-hsl-a", String(u.hsl.a)), a.value.style.position = "relative", a.value.style.backgroundColor = "hsl(calc(var(--vacp-hsl-h) * 360) 100% 50%)", a.value.style.backgroundImage = "linear-gradient(to top, #000, transparent), linear-gradient(to right, #fff, transparent)", i.value.style.boxSizing = "border-box", i.value.style.position = "absolute", i.value.style.left = 100 * u.hsv.s + "%", i.value.style.bottom = 100 * u.hsv.v + "%");
    })();
  }
  async function w() {
    const S = u[c.value], N = l.alphaChannel === "hide", C = Sn(S, c.value, N);
    await window.navigator.clipboard.writeText(C);
  }
  function P(S, N) {
    return Qt[S][N].to(u[S][N]);
  }
  function L(S) {
    if (!["ArrowUp", "ArrowRight", "ArrowDown", "ArrowLeft"].includes(S.key) || !S.shiftKey) return;
    const N = S.currentTarget, C = parseFloat(N.step), M = ["ArrowLeft", "ArrowDown"].includes(S.key) ? -1 : 1, O = $e(parseFloat(N.value) + M * C * 10, parseInt(N.min), parseInt(N.max));
    N.value = String(O - M * C);
  }
  return St(() => l.color, R), Ot(function() {
    document.addEventListener("mousemove", E, { passive: !1 }), document.addEventListener("touchmove", D, { passive: !1 }), document.addEventListener("mouseup", m), document.addEventListener("touchend", m), R(l.color);
  }), tt(function() {
    document.removeEventListener("mousemove", E), document.removeEventListener("touchmove", D), document.removeEventListener("mouseup", m), document.removeEventListener("touchend", m);
  }), (S, N) => (k(), ne("div", { ref_key: "colorPicker", ref: e, class: "vacp-color-picker" }, [H("div", { ref_key: "colorSpace", ref: a, class: "vacp-color-space", onMousedown: y, onTouchstart: g }, [H("div", { ref_key: "thumb", ref: i, class: "vacp-color-space-thumb", tabindex: "0", "aria-label": "Color space thumb", onKeydown: A }, null, 544)], 544), H("div", jr, [H("label", { class: "vacp-range-input-label vacp-range-input-label--hue", for: `${d.id}-hue-slider` }, [H("span", Dr, [Xe(S.$slots, "hue-range-input-label", {}, () => [et("Hue")])]), H("input", { id: `${d.id}-hue-slider`, class: "vacp-range-input vacp-range-input--hue", value: 360 * u.hsv.h, type: "range", min: "0", max: "360", step: "1", onKeydownPassive: L, onInput: N[0] || (N[0] = (C) => B(C, "h")) }, null, 40, Pr)], 8, Fr), d.alphaChannel === "show" ? (k(), ne("label", { key: 0, class: "vacp-range-input-label vacp-range-input-label--alpha", for: `${d.id}-alpha-slider` }, [H("span", zr, [Xe(S.$slots, "alpha-range-input-label", {}, () => [et("Alpha")])]), H("input", { id: `${d.id}-alpha-slider`, class: "vacp-range-input vacp-range-input--alpha", value: 100 * u.hsv.a, type: "range", min: "0", max: "100", step: "1", onKeydownPassive: L, onInput: N[1] || (N[1] = (C) => B(C, "a")) }, null, 40, Br)], 8, Vr)) : ue("v-if", !0)]), H("button", { class: "vacp-copy-button", type: "button", onClick: w }, [Xe(S.$slots, "copy-button", {}, () => [$r, Hr])]), H("div", Ur, [H("div", Wr, [c.value === "hex" ? (k(), ne("label", { key: 0, class: "vacp-color-input-label", for: `${d.id}-color-hex` }, [Kr, H("input", { id: `${d.id}-color-hex`, class: "vacp-color-input", type: "text", value: v.value, onInput: U }, null, 40, Xr)], 8, Gr)) : (k(!0), ne(On, { key: 1 }, xn(h.value, (C) => (k(), ne("label", { id: `${d.id}-color-${c.value}-${C}-label`, key: `${d.id}-color-${c.value}-${C}-label`, class: "vacp-color-input-label", for: `${d.id}-color-${c.value}-${C}`, onInput: (M) => I(M, C) }, [H("span", kr, oe(C.toUpperCase()), 1), H("input", { id: `${d.id}-color-${c.value}-${C}`, class: "vacp-color-input", type: "text", value: P(c.value, C), onInput: (M) => I(M, C) }, null, 40, Yr)], 40, Qr))), 128))]), d.visibleFormats.length > 1 ? (k(), ne("button", { key: 0, class: "vacp-format-switch-button", type: "button", onClick: p }, [Xe(S.$slots, "format-switch-button", {}, () => [Jr, Zr])])) : ue("v-if", !0)])], 512));
} };
(function(d, o) {
  o === void 0 && (o = {});
  var l = o.insertAt;
  if (typeof document < "u") {
    var e = document.head || document.getElementsByTagName("head")[0], a = document.createElement("style");
    a.type = "text/css", l === "top" && e.firstChild ? e.insertBefore(a, e.firstChild) : e.appendChild(a), a.styleSheet ? a.styleSheet.cssText = d : a.appendChild(document.createTextNode(d));
  }
})(".vacp-color-picker{--vacp-color:hsl(calc(var(--vacp-hsl-h)*360) calc(var(--vacp-hsl-s)*100%) calc(var(--vacp-hsl-l)*100%)/var(--vacp-hsl-a));--vacp-focus-color:#19f;--vacp-focus-outline:2px solid var(--vacp-focus-color);--vacp-border-width:1px;--vacp-border-color:#000;--vacp-border:var(--vacp-border-width) solid var(--vacp-border-color);--vacp-color-space-width:300px;--vacp-spacing:6px;grid-gap:var(--vacp-spacing);background-color:#fff;display:grid;font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol;font-size:.8em;grid-template-columns:1fr min-content;max-width:var(--vacp-color-space-width);padding:var(--vacp-spacing)}.vacp-color-picker,.vacp-color-picker *,.vacp-color-picker :after,.vacp-color-picker :before{box-sizing:border-box}.vacp-color-picker button::-moz-focus-inner{border:none;padding:0}.vacp-color-picker :focus{outline:var(--vacp-focus-outline)}.vacp-color-space{grid-column:1/-1;height:calc(var(--vacp-color-space-width)*.6);overflow:hidden}.vacp-color-space-thumb{--vacp-thumb-size:calc(var(--vacp-spacing)*4);border:3px solid #fff;border-radius:50%;box-shadow:0 0 0 var(--vacp-border-width) var(--vacp-border-color);height:var(--vacp-thumb-size);margin-bottom:calc(var(--vacp-thumb-size)*-1/2);margin-left:calc(var(--vacp-thumb-size)*-1/2);transform:rotate(0);width:var(--vacp-thumb-size)}.vacp-color-space-thumb:focus{box-shadow:0 0 0 var(--vacp-border-width) var(--vacp-border-color),0 0 0 3px var(--vacp-focus-color);outline-color:transparent}.vacp-range-input-label{--vacp-slider-track-width:100%;--vacp-slider-track-height:calc(var(--vacp-spacing)*3);display:block}.vacp-range-input-group{display:flex;flex-direction:column;justify-content:center}.vacp-range-input-group>:not(:first-child){margin-top:var(--vacp-spacing)}.vacp-range-input,.vacp-range-input::-webkit-slider-thumb{-webkit-appearance:none}.vacp-range-input{background:none;border:none;display:block;height:var(--vacp-slider-track-height);margin-bottom:calc(var(--vacp-spacing)/2 + 1px);margin-left:0;margin-right:0;margin-top:calc(var(--vacp-spacing)/2 + 1px);padding:0;width:var(--vacp-slider-track-width)}.vacp-range-input:focus{outline:none}.vacp-range-input::-moz-focus-outer{border:none}.vacp-range-input--alpha{background-color:#fff;background-image:linear-gradient(45deg,#eee 25%,transparent 0,transparent 75%,#eee 0,#eee),linear-gradient(45deg,#eee 25%,transparent 0,transparent 75%,#eee 0,#eee);background-position:0 0,var(--vacp-spacing) var(--vacp-spacing);background-size:calc(var(--vacp-spacing)*2) calc(var(--vacp-spacing)*2)}.vacp-range-input::-moz-range-track{border:var(--vacp-border);box-sizing:content-box;height:var(--vacp-slider-track-height);width:var(--vacp-slider-track-width)}.vacp-range-input::-webkit-slider-runnable-track{border:var(--vacp-border);box-sizing:content-box;height:var(--vacp-slider-track-height);width:var(--vacp-slider-track-width)}.vacp-range-input::-ms-track{border:var(--vacp-border);box-sizing:content-box;height:var(--vacp-slider-track-height);width:var(--vacp-slider-track-width)}.vacp-range-input:focus::-moz-range-track{outline:var(--vacp-focus-outline)}.vacp-range-input:focus::-webkit-slider-runnable-track{outline:var(--vacp-focus-outline)}.vacp-range-input:focus::-ms-track{outline:var(--vacp-focus-outline)}.vacp-range-input--alpha::-moz-range-track{background-image:linear-gradient(to right,transparent,var(--vacp-color))}.vacp-range-input--alpha::-webkit-slider-runnable-track{background-image:linear-gradient(to right,transparent,var(--vacp-color))}.vacp-range-input--alpha::-ms-track{background-image:linear-gradient(to right,transparent,var(--vacp-color))}.vacp-range-input--hue::-moz-range-track{background-image:linear-gradient(90deg,red 0,#ff0 16.66667%,#0f0 33.33333%,#0ff 50%,#00f 66.66667%,#f0f 83.33333%,red 100%)}.vacp-range-input--hue::-webkit-slider-runnable-track{background-image:linear-gradient(90deg,red 0,#ff0 16.66667%,#0f0 33.33333%,#0ff 50%,#00f 66.66667%,#f0f 83.33333%,red 100%)}.vacp-range-input--hue::-ms-track{background-image:linear-gradient(90deg,red 0,#ff0 16.66667%,#0f0 33.33333%,#0ff 50%,#00f 66.66667%,#f0f 83.33333%,red 100%)}.vacp-range-input::-moz-range-thumb{background-color:transparent;border:3px solid #fff;border-radius:50%;box-shadow:0 0 0 var(--vacp-border-width) var(--vacp-border-color);box-sizing:content-box;height:var(--vacp-slider-track-height);isolation:isolate;width:var(--vacp-slider-track-height)}.vacp-range-input::-webkit-slider-thumb{background-color:transparent;border:3px solid #fff;border-radius:50%;box-shadow:0 0 0 var(--vacp-border-width) var(--vacp-border-color);box-sizing:content-box;height:var(--vacp-slider-track-height);isolation:isolate;margin-top:calc((var(--vacp-spacing)/2)*-1);width:var(--vacp-slider-track-height)}.vacp-range-input::-ms-thumb{background-color:transparent;border:3px solid #fff;border-radius:50%;box-shadow:0 0 0 var(--vacp-border-width) var(--vacp-border-color);box-sizing:content-box;height:var(--vacp-slider-track-height);isolation:isolate;margin-top:calc((var(--vacp-spacing)/2)*-1);width:var(--vacp-slider-track-height)}.vacp-copy-button{align-items:center;align-self:center;background-color:#fff;border:var(--vacp-border-width) solid transparent;border-radius:50%;display:flex;height:calc(var(--vacp-spacing)*6);justify-content:center;justify-self:center;overflow:hidden;position:relative;width:calc(var(--vacp-spacing)*6)}.vacp-copy-button:enabled:focus{border-color:var(--vacp-border-color);box-shadow:0 0 0 2px var(--vacp-focus-color);outline:none}.vacp-copy-button:enabled:hover{background-color:#0002}.vacp-color-inputs{align-items:center;display:flex;grid-column:1/-1}.vacp-color-inputs>:not(:first-child){margin-left:var(--vacp-spacing)}.vacp-color-input-group{column-gap:var(--vacp-spacing);display:grid;flex-grow:1;grid-auto-flow:column}.vacp-color-input-label{text-align:center}.vacp-color-input{border:var(--vacp-border);margin:0;margin-top:calc(var(--vacp-spacing)/2);text-align:center;width:100%}.vacp-color-input,.vacp-format-switch-button{background-color:#fff;color:inherit;font:inherit;padding:var(--vacp-spacing)}.vacp-format-switch-button{align-items:center;border:var(--vacp-border-width) solid transparent;border-radius:50%;display:flex;justify-content:center;margin:0}.vacp-format-switch-button:enabled:focus{border-color:var(--vacp-border-color)}.vacp-format-switch-button:enabled:hover{background-color:#0002}.vacp-visually-hidden{clip:rect(0 0 0 0);border:0;height:1px;margin:-1px;overflow:hidden;padding:0;position:absolute;white-space:nowrap;width:1px}"), Nn.__file = "src/ColorPicker.vue";
const qr = { class: "flex justify-end mb-20" }, _r = ["disabled", "animation"], ea = { class: "button-text" }, ta = /* @__PURE__ */ nt({
  __name: "form-footer",
  props: {
    animation: {
      type: Boolean,
      default: !1
    },
    disabled: {
      type: Boolean,
      default: !0
    }
  },
  setup(d) {
    const { t: o } = kt(), l = d, e = ee();
    St(Sr(l, "disabled"), (i) => {
      !i && e.value.classList.contains("button--loading") && e.value.classList.remove("button--loading");
    });
    const a = () => {
      l.animation && e.value.classList.toggle("button--loading");
    };
    return (i, r) => (k(), ne("div", qr, [
      H("button", {
        class: "hover:bg-gray-200 text-gray-600 font-bold py-8 px-16 m-2",
        type: "button",
        onClick: r[0] || (r[0] = (c) => i.$emit("cancel"))
      }, oe(K(o)("wizard.step.cancel")), 1),
      H("button", {
        class: "button bg-blue-700 hover:bg-blue-700 text-white font-bold py-8 px-16 m-2 disabled:bg-gray-200 disabled:cursor-default disabled:text-gray-400",
        ref_key: "submitButton",
        ref: e,
        type: "button",
        disabled: d.disabled,
        animation: d.animation,
        onClick: r[1] || (r[1] = (c) => {
          i.$emit("submit"), a();
        })
      }, [
        H("span", ea, oe(K(o)("wizard.step.continue")), 1)
      ], 8, _r)
    ]));
  }
}), Gt = /* @__PURE__ */ xt(ta, [["__scopeId", "data-v-5e77d8d6"]]);
var Tn = { exports: {} };
(function(d) {
  d.exports = /******/
  function(o) {
    var l = {};
    function e(a) {
      if (l[a])
        return l[a].exports;
      var i = l[a] = {
        /******/
        i: a,
        /******/
        l: !1,
        /******/
        exports: {}
        /******/
      };
      return o[a].call(i.exports, i, i.exports, e), i.l = !0, i.exports;
    }
    return e.m = o, e.c = l, e.d = function(a, i, r) {
      e.o(a, i) || Object.defineProperty(a, i, { enumerable: !0, get: r });
    }, e.r = function(a) {
      typeof Symbol < "u" && Symbol.toStringTag && Object.defineProperty(a, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(a, "__esModule", { value: !0 });
    }, e.t = function(a, i) {
      if (i & 1 && (a = e(a)), i & 8 || i & 4 && typeof a == "object" && a && a.__esModule) return a;
      var r = /* @__PURE__ */ Object.create(null);
      if (e.r(r), Object.defineProperty(r, "default", { enumerable: !0, value: a }), i & 2 && typeof a != "string") for (var c in a) e.d(r, c, function(u) {
        return a[u];
      }.bind(null, c));
      return r;
    }, e.n = function(a) {
      var i = a && a.__esModule ? (
        /******/
        function() {
          return a.default;
        }
      ) : (
        /******/
        function() {
          return a;
        }
      );
      return e.d(i, "a", i), i;
    }, e.o = function(a, i) {
      return Object.prototype.hasOwnProperty.call(a, i);
    }, e.p = "", e(e.s = "fb15");
  }({
    /***/
    "00ee": (
      /***/
      function(o, l, e) {
        var a = e("b622"), i = a("toStringTag"), r = {};
        r[i] = "z", o.exports = String(r) === "[object z]";
      }
    ),
    /***/
    "00fd": (
      /***/
      function(o, l, e) {
        var a = e("9e69"), i = Object.prototype, r = i.hasOwnProperty, c = i.toString, u = a ? a.toStringTag : void 0;
        function h(v) {
          var p = r.call(v, u), y = v[u];
          try {
            v[u] = void 0;
            var g = !0;
          } catch {
          }
          var m = c.call(v);
          return g && (p ? v[u] = y : delete v[u]), m;
        }
        o.exports = h;
      }
    ),
    /***/
    "0366": (
      /***/
      function(o, l, e) {
        var a = e("1c0b");
        o.exports = function(i, r, c) {
          if (a(i), r === void 0) return i;
          switch (c) {
            case 0:
              return function() {
                return i.call(r);
              };
            case 1:
              return function(u) {
                return i.call(r, u);
              };
            case 2:
              return function(u, h) {
                return i.call(r, u, h);
              };
            case 3:
              return function(u, h, v) {
                return i.call(r, u, h, v);
              };
          }
          return function() {
            return i.apply(r, arguments);
          };
        };
      }
    ),
    /***/
    "0481": (
      /***/
      function(o, l, e) {
        var a = e("23e7"), i = e("a2bf"), r = e("7b0b"), c = e("50c4"), u = e("a691"), h = e("65f0");
        a({ target: "Array", proto: !0 }, {
          flat: function() {
            var p = arguments.length ? arguments[0] : void 0, y = r(this), g = c(y.length), m = h(y, 0);
            return m.length = i(m, y, y, g, 0, p === void 0 ? 1 : u(p)), m;
          }
        });
      }
    ),
    /***/
    "06cf": (
      /***/
      function(o, l, e) {
        var a = e("83ab"), i = e("d1e7"), r = e("5c6c"), c = e("fc6a"), u = e("c04e"), h = e("5135"), v = e("0cfb"), p = Object.getOwnPropertyDescriptor;
        l.f = a ? p : function(g, m) {
          if (g = c(g), m = u(m, !0), v) try {
            return p(g, m);
          } catch {
          }
          if (h(g, m)) return r(!i.f.call(g, m), g[m]);
        };
      }
    ),
    /***/
    "0cb2": (
      /***/
      function(o, l, e) {
        var a = e("7b0b"), i = Math.floor, r = "".replace, c = /\$([$&'`]|\d\d?|<[^>]*>)/g, u = /\$([$&'`]|\d\d?)/g;
        o.exports = function(h, v, p, y, g, m) {
          var E = p + h.length, D = y.length, F = u;
          return g !== void 0 && (g = a(g), F = c), r.call(m, F, function(A, R) {
            var B;
            switch (R.charAt(0)) {
              case "$":
                return "$";
              case "&":
                return h;
              case "`":
                return v.slice(0, p);
              case "'":
                return v.slice(E);
              case "<":
                B = g[R.slice(1, -1)];
                break;
              default:
                var U = +R;
                if (U === 0) return A;
                if (U > D) {
                  var I = i(U / 10);
                  return I === 0 ? A : I <= D ? y[I - 1] === void 0 ? R.charAt(1) : y[I - 1] + R.charAt(1) : A;
                }
                B = y[U - 1];
            }
            return B === void 0 ? "" : B;
          });
        };
      }
    ),
    /***/
    "0cfb": (
      /***/
      function(o, l, e) {
        var a = e("83ab"), i = e("d039"), r = e("cc12");
        o.exports = !a && !i(function() {
          return Object.defineProperty(r("div"), "a", {
            get: function() {
              return 7;
            }
          }).a != 7;
        });
      }
    ),
    /***/
    1276: (
      /***/
      function(o, l, e) {
        var a = e("d784"), i = e("44e7"), r = e("825a"), c = e("1d80"), u = e("4840"), h = e("8aa5"), v = e("50c4"), p = e("14c3"), y = e("9263"), g = e("d039"), m = [].push, E = Math.min, D = 4294967295, F = !g(function() {
          return !RegExp(D, "y");
        });
        a("split", 2, function(A, R, B) {
          var U;
          return "abbc".split(/(b)*/)[1] == "c" || "test".split(/(?:)/, -1).length != 4 || "ab".split(/(?:ab)*/).length != 2 || ".".split(/(.?)(.?)/).length != 4 || ".".split(/()()/).length > 1 || "".split(/.?/).length ? U = function(I, T) {
            var w = String(c(this)), P = T === void 0 ? D : T >>> 0;
            if (P === 0) return [];
            if (I === void 0) return [w];
            if (!i(I))
              return R.call(w, I, P);
            for (var L = [], S = (I.ignoreCase ? "i" : "") + (I.multiline ? "m" : "") + (I.unicode ? "u" : "") + (I.sticky ? "y" : ""), N = 0, C = new RegExp(I.source, S + "g"), M, O, q; (M = y.call(C, w)) && (O = C.lastIndex, !(O > N && (L.push(w.slice(N, M.index)), M.length > 1 && M.index < w.length && m.apply(L, M.slice(1)), q = M[0].length, N = O, L.length >= P))); )
              C.lastIndex === M.index && C.lastIndex++;
            return N === w.length ? (q || !C.test("")) && L.push("") : L.push(w.slice(N)), L.length > P ? L.slice(0, P) : L;
          } : "0".split(void 0, 0).length ? U = function(I, T) {
            return I === void 0 && T === 0 ? [] : R.call(this, I, T);
          } : U = R, [
            // `String.prototype.split` method
            // https://tc39.es/ecma262/#sec-string.prototype.split
            function(T, w) {
              var P = c(this), L = T?.[A];
              return L !== void 0 ? L.call(T, P, w) : U.call(String(P), T, w);
            },
            // `RegExp.prototype[@@split]` method
            // https://tc39.es/ecma262/#sec-regexp.prototype-@@split
            //
            // NOTE: This cannot be properly polyfilled in engines that don't support
            // the 'y' flag.
            function(I, T) {
              var w = B(U, I, this, T, U !== R);
              if (w.done) return w.value;
              var P = r(I), L = String(this), S = u(P, RegExp), N = P.unicode, C = (P.ignoreCase ? "i" : "") + (P.multiline ? "m" : "") + (P.unicode ? "u" : "") + (F ? "y" : "g"), M = new S(F ? P : "^(?:" + P.source + ")", C), O = T === void 0 ? D : T >>> 0;
              if (O === 0) return [];
              if (L.length === 0) return p(M, L) === null ? [L] : [];
              for (var q = 0, G = 0, J = []; G < L.length; ) {
                M.lastIndex = F ? G : 0;
                var z = p(M, F ? L : L.slice(G)), W;
                if (z === null || (W = E(v(M.lastIndex + (F ? 0 : G)), L.length)) === q)
                  G = h(L, G, N);
                else {
                  if (J.push(L.slice(q, G)), J.length === O) return J;
                  for (var se = 1; se <= z.length - 1; se++)
                    if (J.push(z[se]), J.length === O) return J;
                  G = q = W;
                }
              }
              return J.push(L.slice(q)), J;
            }
          ];
        }, !F);
      }
    ),
    /***/
    1310: (
      /***/
      function(o, l) {
        function e(a) {
          return a != null && typeof a == "object";
        }
        o.exports = e;
      }
    ),
    /***/
    "13d5": (
      /***/
      function(o, l, e) {
        var a = e("23e7"), i = e("d58f").left, r = e("a640"), c = e("ae40"), u = e("2d00"), h = e("605d"), v = r("reduce"), p = c("reduce", { 1: 0 }), y = !h && u > 79 && u < 83;
        a({ target: "Array", proto: !0, forced: !v || !p || y }, {
          reduce: function(m) {
            return i(this, m, arguments.length, arguments.length > 1 ? arguments[1] : void 0);
          }
        });
      }
    ),
    /***/
    "14c3": (
      /***/
      function(o, l, e) {
        var a = e("c6b6"), i = e("9263");
        o.exports = function(r, c) {
          var u = r.exec;
          if (typeof u == "function") {
            var h = u.call(r, c);
            if (typeof h != "object")
              throw TypeError("RegExp exec method returned something other than an Object or null");
            return h;
          }
          if (a(r) !== "RegExp")
            throw TypeError("RegExp#exec called on incompatible receiver");
          return i.call(r, c);
        };
      }
    ),
    /***/
    "159b": (
      /***/
      function(o, l, e) {
        var a = e("da84"), i = e("fdbc"), r = e("17c2"), c = e("9112");
        for (var u in i) {
          var h = a[u], v = h && h.prototype;
          if (v && v.forEach !== r) try {
            c(v, "forEach", r);
          } catch {
            v.forEach = r;
          }
        }
      }
    ),
    /***/
    "17c2": (
      /***/
      function(o, l, e) {
        var a = e("b727").forEach, i = e("a640"), r = e("ae40"), c = i("forEach"), u = r("forEach");
        o.exports = !c || !u ? function(v) {
          return a(this, v, arguments.length > 1 ? arguments[1] : void 0);
        } : [].forEach;
      }
    ),
    /***/
    "1a8c": (
      /***/
      function(o, l) {
        function e(a) {
          var i = typeof a;
          return a != null && (i == "object" || i == "function");
        }
        o.exports = e;
      }
    ),
    /***/
    "1be4": (
      /***/
      function(o, l, e) {
        var a = e("d066");
        o.exports = a("document", "documentElement");
      }
    ),
    /***/
    "1c0b": (
      /***/
      function(o, l) {
        o.exports = function(e) {
          if (typeof e != "function")
            throw TypeError(String(e) + " is not a function");
          return e;
        };
      }
    ),
    /***/
    "1d80": (
      /***/
      function(o, l) {
        o.exports = function(e) {
          if (e == null) throw TypeError("Can't call method on " + e);
          return e;
        };
      }
    ),
    /***/
    "1d92": (
      /***/
      function(o, l, e) {
        var a = e("e0ef");
        function i(r) {
          return a(2, r);
        }
        o.exports = i;
      }
    ),
    /***/
    "1dde": (
      /***/
      function(o, l, e) {
        var a = e("d039"), i = e("b622"), r = e("2d00"), c = i("species");
        o.exports = function(u) {
          return r >= 51 || !a(function() {
            var h = [], v = h.constructor = {};
            return v[c] = function() {
              return { foo: 1 };
            }, h[u](Boolean).foo !== 1;
          });
        };
      }
    ),
    /***/
    "23cb": (
      /***/
      function(o, l, e) {
        var a = e("a691"), i = Math.max, r = Math.min;
        o.exports = function(c, u) {
          var h = a(c);
          return h < 0 ? i(h + u, 0) : r(h, u);
        };
      }
    ),
    /***/
    "23e7": (
      /***/
      function(o, l, e) {
        var a = e("da84"), i = e("06cf").f, r = e("9112"), c = e("6eeb"), u = e("ce4e"), h = e("e893"), v = e("94ca");
        o.exports = function(p, y) {
          var g = p.target, m = p.global, E = p.stat, D, F, A, R, B, U;
          if (m ? F = a : E ? F = a[g] || u(g, {}) : F = (a[g] || {}).prototype, F) for (A in y) {
            if (B = y[A], p.noTargetGet ? (U = i(F, A), R = U && U.value) : R = F[A], D = v(m ? A : g + (E ? "." : "#") + A, p.forced), !D && R !== void 0) {
              if (typeof B == typeof R) continue;
              h(B, R);
            }
            (p.sham || R && R.sham) && r(B, "sham", !0), c(F, A, B, p);
          }
        };
      }
    ),
    /***/
    "241c": (
      /***/
      function(o, l, e) {
        var a = e("ca84"), i = e("7839"), r = i.concat("length", "prototype");
        l.f = Object.getOwnPropertyNames || function(u) {
          return a(u, r);
        };
      }
    ),
    /***/
    "25f0": (
      /***/
      function(o, l, e) {
        var a = e("6eeb"), i = e("825a"), r = e("d039"), c = e("ad6d"), u = "toString", h = RegExp.prototype, v = h[u], p = r(function() {
          return v.call({ source: "a", flags: "b" }) != "/a/b";
        }), y = v.name != u;
        (p || y) && a(RegExp.prototype, u, function() {
          var m = i(this), E = String(m.source), D = m.flags, F = String(D === void 0 && m instanceof RegExp && !("flags" in h) ? c.call(m) : D);
          return "/" + E + "/" + F;
        }, { unsafe: !0 });
      }
    ),
    /***/
    2655: (
      /***/
      function(o, l) {
        o.exports = e, o.exports.default = e;
        function e(a) {
          return !!a && (typeof a == "object" || typeof a == "function") && typeof a.then == "function";
        }
      }
    ),
    /***/
    "29f3": (
      /***/
      function(o, l) {
        var e = Object.prototype, a = e.toString;
        function i(r) {
          return a.call(r);
        }
        o.exports = i;
      }
    ),
    /***/
    "2b3e": (
      /***/
      function(o, l, e) {
        var a = e("585a"), i = typeof self == "object" && self && self.Object === Object && self, r = a || i || Function("return this")();
        o.exports = r;
      }
    ),
    /***/
    "2d00": (
      /***/
      function(o, l, e) {
        var a = e("da84"), i = e("342f"), r = a.process, c = r && r.versions, u = c && c.v8, h, v;
        u ? (h = u.split("."), v = h[0] + h[1]) : i && (h = i.match(/Edge\/(\d+)/), (!h || h[1] >= 74) && (h = i.match(/Chrome\/(\d+)/), h && (v = h[1]))), o.exports = v && +v;
      }
    ),
    /***/
    "2e39": (
      /***/
      function(o, l, e) {
        function a(i, r) {
          var c = r.length, u = i.length;
          if (u > c)
            return !1;
          if (u === c)
            return i === r;
          e: for (var h = 0, v = 0; h < u; h++) {
            for (var p = i.charCodeAt(h); v < c; )
              if (r.charCodeAt(v++) === p)
                continue e;
            return !1;
          }
          return !0;
        }
        o.exports = a;
      }
    ),
    /***/
    3410: (
      /***/
      function(o, l, e) {
        var a = e("23e7"), i = e("d039"), r = e("7b0b"), c = e("e163"), u = e("e177"), h = i(function() {
          c(1);
        });
        a({ target: "Object", stat: !0, forced: h, sham: !u }, {
          getPrototypeOf: function(p) {
            return c(r(p));
          }
        });
      }
    ),
    /***/
    "342f": (
      /***/
      function(o, l, e) {
        var a = e("d066");
        o.exports = a("navigator", "userAgent") || "";
      }
    ),
    /***/
    3729: (
      /***/
      function(o, l, e) {
        var a = e("9e69"), i = e("00fd"), r = e("29f3"), c = "[object Null]", u = "[object Undefined]", h = a ? a.toStringTag : void 0;
        function v(p) {
          return p == null ? p === void 0 ? u : c : h && h in Object(p) ? i(p) : r(p);
        }
        o.exports = v;
      }
    ),
    /***/
    "37e8": (
      /***/
      function(o, l, e) {
        var a = e("83ab"), i = e("9bf2"), r = e("825a"), c = e("df75");
        o.exports = a ? Object.defineProperties : function(h, v) {
          r(h);
          for (var p = c(v), y = p.length, g = 0, m; y > g; ) i.f(h, m = p[g++], v[m]);
          return h;
        };
      }
    ),
    /***/
    "3bbe": (
      /***/
      function(o, l, e) {
        var a = e("861d");
        o.exports = function(i) {
          if (!a(i) && i !== null)
            throw TypeError("Can't set " + String(i) + " as a prototype");
          return i;
        };
      }
    ),
    /***/
    4069: (
      /***/
      function(o, l, e) {
        var a = e("44d2");
        a("flat");
      }
    ),
    /***/
    "408c": (
      /***/
      function(o, l, e) {
        var a = e("2b3e"), i = function() {
          return a.Date.now();
        };
        o.exports = i;
      }
    ),
    /***/
    4160: (
      /***/
      function(o, l, e) {
        var a = e("23e7"), i = e("17c2");
        a({ target: "Array", proto: !0, forced: [].forEach != i }, {
          forEach: i
        });
      }
    ),
    /***/
    "428f": (
      /***/
      function(o, l, e) {
        var a = e("da84");
        o.exports = a;
      }
    ),
    /***/
    4416: (
      /***/
      function(o, l) {
        function e(a) {
          var i = a == null ? 0 : a.length;
          return i ? a[i - 1] : void 0;
        }
        o.exports = e;
      }
    ),
    /***/
    "44ad": (
      /***/
      function(o, l, e) {
        var a = e("d039"), i = e("c6b6"), r = "".split;
        o.exports = a(function() {
          return !Object("z").propertyIsEnumerable(0);
        }) ? function(c) {
          return i(c) == "String" ? r.call(c, "") : Object(c);
        } : Object;
      }
    ),
    /***/
    "44d2": (
      /***/
      function(o, l, e) {
        var a = e("b622"), i = e("7c73"), r = e("9bf2"), c = a("unscopables"), u = Array.prototype;
        u[c] == null && r.f(u, c, {
          configurable: !0,
          value: i(null)
        }), o.exports = function(h) {
          u[c][h] = !0;
        };
      }
    ),
    /***/
    "44e7": (
      /***/
      function(o, l, e) {
        var a = e("861d"), i = e("c6b6"), r = e("b622"), c = r("match");
        o.exports = function(u) {
          var h;
          return a(u) && ((h = u[c]) !== void 0 ? !!h : i(u) == "RegExp");
        };
      }
    ),
    /***/
    "45fc": (
      /***/
      function(o, l, e) {
        var a = e("23e7"), i = e("b727").some, r = e("a640"), c = e("ae40"), u = r("some"), h = c("some");
        a({ target: "Array", proto: !0, forced: !u || !h }, {
          some: function(p) {
            return i(this, p, arguments.length > 1 ? arguments[1] : void 0);
          }
        });
      }
    ),
    /***/
    4840: (
      /***/
      function(o, l, e) {
        var a = e("825a"), i = e("1c0b"), r = e("b622"), c = r("species");
        o.exports = function(u, h) {
          var v = a(u).constructor, p;
          return v === void 0 || (p = a(v)[c]) == null ? h : i(p);
        };
      }
    ),
    /***/
    4930: (
      /***/
      function(o, l, e) {
        var a = e("d039");
        o.exports = !!Object.getOwnPropertySymbols && !a(function() {
          return !String(Symbol());
        });
      }
    ),
    /***/
    "498a": (
      /***/
      function(o, l, e) {
        var a = e("23e7"), i = e("58a8").trim, r = e("c8d2");
        a({ target: "String", proto: !0, forced: r("trim") }, {
          trim: function() {
            return i(this);
          }
        });
      }
    ),
    /***/
    "4b17": (
      /***/
      function(o, l, e) {
        var a = e("6428");
        function i(r) {
          var c = a(r), u = c % 1;
          return c === c ? u ? c - u : c : 0;
        }
        o.exports = i;
      }
    ),
    /***/
    "4d64": (
      /***/
      function(o, l, e) {
        var a = e("fc6a"), i = e("50c4"), r = e("23cb"), c = function(u) {
          return function(h, v, p) {
            var y = a(h), g = i(y.length), m = r(p, g), E;
            if (u && v != v) {
              for (; g > m; )
                if (E = y[m++], E != E) return !0;
            } else for (; g > m; m++)
              if ((u || m in y) && y[m] === v) return u || m || 0;
            return !u && -1;
          };
        };
        o.exports = {
          // `Array.prototype.includes` method
          // https://tc39.es/ecma262/#sec-array.prototype.includes
          includes: c(!0),
          // `Array.prototype.indexOf` method
          // https://tc39.es/ecma262/#sec-array.prototype.indexof
          indexOf: c(!1)
        };
      }
    ),
    /***/
    "4de4": (
      /***/
      function(o, l, e) {
        var a = e("23e7"), i = e("b727").filter, r = e("1dde"), c = e("ae40"), u = r("filter"), h = c("filter");
        a({ target: "Array", proto: !0, forced: !u || !h }, {
          filter: function(p) {
            return i(this, p, arguments.length > 1 ? arguments[1] : void 0);
          }
        });
      }
    ),
    /***/
    "4e82": (
      /***/
      function(o, l, e) {
        var a = e("23e7"), i = e("1c0b"), r = e("7b0b"), c = e("d039"), u = e("a640"), h = [], v = h.sort, p = c(function() {
          h.sort(void 0);
        }), y = c(function() {
          h.sort(null);
        }), g = u("sort"), m = p || !y || !g;
        a({ target: "Array", proto: !0, forced: m }, {
          sort: function(D) {
            return D === void 0 ? v.call(r(this)) : v.call(r(this), i(D));
          }
        });
      }
    ),
    /***/
    "50c4": (
      /***/
      function(o, l, e) {
        var a = e("a691"), i = Math.min;
        o.exports = function(r) {
          return r > 0 ? i(a(r), 9007199254740991) : 0;
        };
      }
    ),
    /***/
    5135: (
      /***/
      function(o, l) {
        var e = {}.hasOwnProperty;
        o.exports = function(a, i) {
          return e.call(a, i);
        };
      }
    ),
    /***/
    5319: (
      /***/
      function(o, l, e) {
        var a = e("d784"), i = e("825a"), r = e("50c4"), c = e("a691"), u = e("1d80"), h = e("8aa5"), v = e("0cb2"), p = e("14c3"), y = Math.max, g = Math.min, m = function(E) {
          return E === void 0 ? E : String(E);
        };
        a("replace", 2, function(E, D, F, A) {
          var R = A.REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE, B = A.REPLACE_KEEPS_$0, U = R ? "$" : "$0";
          return [
            // `String.prototype.replace` method
            // https://tc39.es/ecma262/#sec-string.prototype.replace
            function(T, w) {
              var P = u(this), L = T?.[E];
              return L !== void 0 ? L.call(T, P, w) : D.call(String(P), T, w);
            },
            // `RegExp.prototype[@@replace]` method
            // https://tc39.es/ecma262/#sec-regexp.prototype-@@replace
            function(I, T) {
              if (!R && B || typeof T == "string" && T.indexOf(U) === -1) {
                var w = F(D, I, this, T);
                if (w.done) return w.value;
              }
              var P = i(I), L = String(this), S = typeof T == "function";
              S || (T = String(T));
              var N = P.global;
              if (N) {
                var C = P.unicode;
                P.lastIndex = 0;
              }
              for (var M = []; ; ) {
                var O = p(P, L);
                if (O === null || (M.push(O), !N)) break;
                var q = String(O[0]);
                q === "" && (P.lastIndex = h(L, r(P.lastIndex), C));
              }
              for (var G = "", J = 0, z = 0; z < M.length; z++) {
                O = M[z];
                for (var W = String(O[0]), se = y(g(c(O.index), L.length), 0), ve = [], _ = 1; _ < O.length; _++) ve.push(m(O[_]));
                var be = O.groups;
                if (S) {
                  var Ce = [W].concat(ve, se, L);
                  be !== void 0 && Ce.push(be);
                  var Ie = String(T.apply(void 0, Ce));
                } else
                  Ie = v(W, L, se, ve, be, T);
                se >= J && (G += L.slice(J, se) + Ie, J = se + W.length);
              }
              return G + L.slice(J);
            }
          ];
        });
      }
    ),
    /***/
    5692: (
      /***/
      function(o, l, e) {
        var a = e("c430"), i = e("c6cd");
        (o.exports = function(r, c) {
          return i[r] || (i[r] = c !== void 0 ? c : {});
        })("versions", []).push({
          version: "3.8.2",
          mode: a ? "pure" : "global",
          copyright: "© 2021 Denis Pushkarev (zloirock.ru)"
        });
      }
    ),
    /***/
    "56ef": (
      /***/
      function(o, l, e) {
        var a = e("d066"), i = e("241c"), r = e("7418"), c = e("825a");
        o.exports = a("Reflect", "ownKeys") || function(h) {
          var v = i.f(c(h)), p = r.f;
          return p ? v.concat(p(h)) : v;
        };
      }
    ),
    /***/
    "585a": (
      /***/
      function(o, l, e) {
        (function(a) {
          var i = typeof a == "object" && a && a.Object === Object && a;
          o.exports = i;
        }).call(this, e("c8ba"));
      }
    ),
    /***/
    5899: (
      /***/
      function(o, l) {
        o.exports = `	
\v\f\r                　\u2028\u2029\uFEFF`;
      }
    ),
    /***/
    "58a8": (
      /***/
      function(o, l, e) {
        var a = e("1d80"), i = e("5899"), r = "[" + i + "]", c = RegExp("^" + r + r + "*"), u = RegExp(r + r + "*$"), h = function(v) {
          return function(p) {
            var y = String(a(p));
            return v & 1 && (y = y.replace(c, "")), v & 2 && (y = y.replace(u, "")), y;
          };
        };
        o.exports = {
          // `String.prototype.{ trimLeft, trimStart }` methods
          // https://tc39.es/ecma262/#sec-string.prototype.trimstart
          start: h(1),
          // `String.prototype.{ trimRight, trimEnd }` methods
          // https://tc39.es/ecma262/#sec-string.prototype.trimend
          end: h(2),
          // `String.prototype.trim` method
          // https://tc39.es/ecma262/#sec-string.prototype.trim
          trim: h(3)
        };
      }
    ),
    /***/
    "5c6c": (
      /***/
      function(o, l) {
        o.exports = function(e, a) {
          return {
            enumerable: !(e & 1),
            configurable: !(e & 2),
            writable: !(e & 4),
            value: a
          };
        };
      }
    ),
    /***/
    "605d": (
      /***/
      function(o, l, e) {
        var a = e("c6b6"), i = e("da84");
        o.exports = a(i.process) == "process";
      }
    ),
    /***/
    6428: (
      /***/
      function(o, l, e) {
        var a = e("b4b0"), i = 1 / 0, r = 17976931348623157e292;
        function c(u) {
          if (!u)
            return u === 0 ? u : 0;
          if (u = a(u), u === i || u === -i) {
            var h = u < 0 ? -1 : 1;
            return h * r;
          }
          return u === u ? u : 0;
        }
        o.exports = c;
      }
    ),
    /***/
    6547: (
      /***/
      function(o, l, e) {
        var a = e("a691"), i = e("1d80"), r = function(c) {
          return function(u, h) {
            var v = String(i(u)), p = a(h), y = v.length, g, m;
            return p < 0 || p >= y ? c ? "" : void 0 : (g = v.charCodeAt(p), g < 55296 || g > 56319 || p + 1 === y || (m = v.charCodeAt(p + 1)) < 56320 || m > 57343 ? c ? v.charAt(p) : g : c ? v.slice(p, p + 2) : (g - 55296 << 10) + (m - 56320) + 65536);
          };
        };
        o.exports = {
          // `String.prototype.codePointAt` method
          // https://tc39.es/ecma262/#sec-string.prototype.codepointat
          codeAt: r(!1),
          // `String.prototype.at` method
          // https://github.com/mathiasbynens/String.prototype.at
          charAt: r(!0)
        };
      }
    ),
    /***/
    "65f0": (
      /***/
      function(o, l, e) {
        var a = e("861d"), i = e("e8b5"), r = e("b622"), c = r("species");
        o.exports = function(u, h) {
          var v;
          return i(u) && (v = u.constructor, typeof v == "function" && (v === Array || i(v.prototype)) ? v = void 0 : a(v) && (v = v[c], v === null && (v = void 0))), new (v === void 0 ? Array : v)(h === 0 ? 0 : h);
        };
      }
    ),
    /***/
    "69f3": (
      /***/
      function(o, l, e) {
        var a = e("7f9a"), i = e("da84"), r = e("861d"), c = e("9112"), u = e("5135"), h = e("c6cd"), v = e("f772"), p = e("d012"), y = i.WeakMap, g, m, E, D = function(T) {
          return E(T) ? m(T) : g(T, {});
        }, F = function(T) {
          return function(w) {
            var P;
            if (!r(w) || (P = m(w)).type !== T)
              throw TypeError("Incompatible receiver, " + T + " required");
            return P;
          };
        };
        if (a) {
          var A = h.state || (h.state = new y()), R = A.get, B = A.has, U = A.set;
          g = function(T, w) {
            return w.facade = T, U.call(A, T, w), w;
          }, m = function(T) {
            return R.call(A, T) || {};
          }, E = function(T) {
            return B.call(A, T);
          };
        } else {
          var I = v("state");
          p[I] = !0, g = function(T, w) {
            return w.facade = T, c(T, I, w), w;
          }, m = function(T) {
            return u(T, I) ? T[I] : {};
          }, E = function(T) {
            return u(T, I);
          };
        }
        o.exports = {
          set: g,
          get: m,
          has: E,
          enforce: D,
          getterFor: F
        };
      }
    ),
    /***/
    "6eeb": (
      /***/
      function(o, l, e) {
        var a = e("da84"), i = e("9112"), r = e("5135"), c = e("ce4e"), u = e("8925"), h = e("69f3"), v = h.get, p = h.enforce, y = String(String).split("String");
        (o.exports = function(g, m, E, D) {
          var F = D ? !!D.unsafe : !1, A = D ? !!D.enumerable : !1, R = D ? !!D.noTargetGet : !1, B;
          if (typeof E == "function" && (typeof m == "string" && !r(E, "name") && i(E, "name", m), B = p(E), B.source || (B.source = y.join(typeof m == "string" ? m : ""))), g === a) {
            A ? g[m] = E : c(m, E);
            return;
          } else F ? !R && g[m] && (A = !0) : delete g[m];
          A ? g[m] = E : i(g, m, E);
        })(Function.prototype, "toString", function() {
          return typeof this == "function" && v(this).source || u(this);
        });
      }
    ),
    /***/
    7156: (
      /***/
      function(o, l, e) {
        var a = e("861d"), i = e("d2bb");
        o.exports = function(r, c, u) {
          var h, v;
          return (
            // it can work only with native `setPrototypeOf`
            i && // we haven't completely correct pre-ES6 way for getting `new.target`, so use this
            typeof (h = c.constructor) == "function" && h !== u && a(v = h.prototype) && v !== u.prototype && i(r, v), r
          );
        };
      }
    ),
    /***/
    "72f0": (
      /***/
      function(o, l) {
        function e(a) {
          return function() {
            return a;
          };
        }
        o.exports = e;
      }
    ),
    /***/
    7418: (
      /***/
      function(o, l) {
        l.f = Object.getOwnPropertySymbols;
      }
    ),
    /***/
    7839: (
      /***/
      function(o, l) {
        o.exports = [
          "constructor",
          "hasOwnProperty",
          "isPrototypeOf",
          "propertyIsEnumerable",
          "toLocaleString",
          "toString",
          "valueOf"
        ];
      }
    ),
    /***/
    "7b0b": (
      /***/
      function(o, l, e) {
        var a = e("1d80");
        o.exports = function(i) {
          return Object(a(i));
        };
      }
    ),
    /***/
    "7c73": (
      /***/
      function(o, l, e) {
        var a = e("825a"), i = e("37e8"), r = e("7839"), c = e("d012"), u = e("1be4"), h = e("cc12"), v = e("f772"), p = ">", y = "<", g = "prototype", m = "script", E = v("IE_PROTO"), D = function() {
        }, F = function(I) {
          return y + m + p + I + y + "/" + m + p;
        }, A = function(I) {
          I.write(F("")), I.close();
          var T = I.parentWindow.Object;
          return I = null, T;
        }, R = function() {
          var I = h("iframe"), T = "java" + m + ":", w;
          return I.style.display = "none", u.appendChild(I), I.src = String(T), w = I.contentWindow.document, w.open(), w.write(F("document.F=Object")), w.close(), w.F;
        }, B, U = function() {
          try {
            B = document.domain && new ActiveXObject("htmlfile");
          } catch {
          }
          U = B ? A(B) : R();
          for (var I = r.length; I--; ) delete U[g][r[I]];
          return U();
        };
        c[E] = !0, o.exports = Object.create || function(T, w) {
          var P;
          return T !== null ? (D[g] = a(T), P = new D(), D[g] = null, P[E] = T) : P = U(), w === void 0 ? P : i(P, w);
        };
      }
    ),
    /***/
    "7f9a": (
      /***/
      function(o, l, e) {
        var a = e("da84"), i = e("8925"), r = a.WeakMap;
        o.exports = typeof r == "function" && /native code/.test(i(r));
      }
    ),
    /***/
    "825a": (
      /***/
      function(o, l, e) {
        var a = e("861d");
        o.exports = function(i) {
          if (!a(i))
            throw TypeError(String(i) + " is not an object");
          return i;
        };
      }
    ),
    /***/
    "83ab": (
      /***/
      function(o, l, e) {
        var a = e("d039");
        o.exports = !a(function() {
          return Object.defineProperty({}, 1, { get: function() {
            return 7;
          } })[1] != 7;
        });
      }
    ),
    /***/
    8418: (
      /***/
      function(o, l, e) {
        var a = e("c04e"), i = e("9bf2"), r = e("5c6c");
        o.exports = function(c, u, h) {
          var v = a(u);
          v in c ? i.f(c, v, r(0, h)) : c[v] = h;
        };
      }
    ),
    /***/
    "861d": (
      /***/
      function(o, l) {
        o.exports = function(e) {
          return typeof e == "object" ? e !== null : typeof e == "function";
        };
      }
    ),
    /***/
    8925: (
      /***/
      function(o, l, e) {
        var a = e("c6cd"), i = Function.toString;
        typeof a.inspectSource != "function" && (a.inspectSource = function(r) {
          return i.call(r);
        }), o.exports = a.inspectSource;
      }
    ),
    /***/
    "8aa5": (
      /***/
      function(o, l, e) {
        var a = e("6547").charAt;
        o.exports = function(i, r, c) {
          return r + (c ? a(i, r).length : 1);
        };
      }
    ),
    /***/
    "8bbf": (
      /***/
      function(o, l) {
        o.exports = Lr;
      }
    ),
    /***/
    "90e3": (
      /***/
      function(o, l) {
        var e = 0, a = Math.random();
        o.exports = function(i) {
          return "Symbol(" + String(i === void 0 ? "" : i) + ")_" + (++e + a).toString(36);
        };
      }
    ),
    /***/
    9112: (
      /***/
      function(o, l, e) {
        var a = e("83ab"), i = e("9bf2"), r = e("5c6c");
        o.exports = a ? function(c, u, h) {
          return i.f(c, u, r(1, h));
        } : function(c, u, h) {
          return c[u] = h, c;
        };
      }
    ),
    /***/
    9263: (
      /***/
      function(o, l, e) {
        var a = e("ad6d"), i = e("9f7f"), r = RegExp.prototype.exec, c = String.prototype.replace, u = r, h = function() {
          var g = /a/, m = /b*/g;
          return r.call(g, "a"), r.call(m, "a"), g.lastIndex !== 0 || m.lastIndex !== 0;
        }(), v = i.UNSUPPORTED_Y || i.BROKEN_CARET, p = /()??/.exec("")[1] !== void 0, y = h || p || v;
        y && (u = function(m) {
          var E = this, D, F, A, R, B = v && E.sticky, U = a.call(E), I = E.source, T = 0, w = m;
          return B && (U = U.replace("y", ""), U.indexOf("g") === -1 && (U += "g"), w = String(m).slice(E.lastIndex), E.lastIndex > 0 && (!E.multiline || E.multiline && m[E.lastIndex - 1] !== `
`) && (I = "(?: " + I + ")", w = " " + w, T++), F = new RegExp("^(?:" + I + ")", U)), p && (F = new RegExp("^" + I + "$(?!\\s)", U)), h && (D = E.lastIndex), A = r.call(B ? F : E, w), B ? A ? (A.input = A.input.slice(T), A[0] = A[0].slice(T), A.index = E.lastIndex, E.lastIndex += A[0].length) : E.lastIndex = 0 : h && A && (E.lastIndex = E.global ? A.index + A[0].length : D), p && A && A.length > 1 && c.call(A[0], F, function() {
            for (R = 1; R < arguments.length - 2; R++)
              arguments[R] === void 0 && (A[R] = void 0);
          }), A;
        }), o.exports = u;
      }
    ),
    /***/
    "94ca": (
      /***/
      function(o, l, e) {
        var a = e("d039"), i = /#|\.prototype\./, r = function(p, y) {
          var g = u[c(p)];
          return g == v ? !0 : g == h ? !1 : typeof y == "function" ? a(y) : !!y;
        }, c = r.normalize = function(p) {
          return String(p).replace(i, ".").toLowerCase();
        }, u = r.data = {}, h = r.NATIVE = "N", v = r.POLYFILL = "P";
        o.exports = r;
      }
    ),
    /***/
    "99af": (
      /***/
      function(o, l, e) {
        var a = e("23e7"), i = e("d039"), r = e("e8b5"), c = e("861d"), u = e("7b0b"), h = e("50c4"), v = e("8418"), p = e("65f0"), y = e("1dde"), g = e("b622"), m = e("2d00"), E = g("isConcatSpreadable"), D = 9007199254740991, F = "Maximum allowed index exceeded", A = m >= 51 || !i(function() {
          var I = [];
          return I[E] = !1, I.concat()[0] !== I;
        }), R = y("concat"), B = function(I) {
          if (!c(I)) return !1;
          var T = I[E];
          return T !== void 0 ? !!T : r(I);
        }, U = !A || !R;
        a({ target: "Array", proto: !0, forced: U }, {
          concat: function(T) {
            var w = u(this), P = p(w, 0), L = 0, S, N, C, M, O;
            for (S = -1, C = arguments.length; S < C; S++)
              if (O = S === -1 ? w : arguments[S], B(O)) {
                if (M = h(O.length), L + M > D) throw TypeError(F);
                for (N = 0; N < M; N++, L++) N in O && v(P, L, O[N]);
              } else {
                if (L >= D) throw TypeError(F);
                v(P, L++, O);
              }
            return P.length = L, P;
          }
        });
      }
    ),
    /***/
    "9bf2": (
      /***/
      function(o, l, e) {
        var a = e("83ab"), i = e("0cfb"), r = e("825a"), c = e("c04e"), u = Object.defineProperty;
        l.f = a ? u : function(v, p, y) {
          if (r(v), p = c(p, !0), r(y), i) try {
            return u(v, p, y);
          } catch {
          }
          if ("get" in y || "set" in y) throw TypeError("Accessors not supported");
          return "value" in y && (v[p] = y.value), v;
        };
      }
    ),
    /***/
    "9e69": (
      /***/
      function(o, l, e) {
        var a = e("2b3e"), i = a.Symbol;
        o.exports = i;
      }
    ),
    /***/
    "9f7f": (
      /***/
      function(o, l, e) {
        var a = e("d039");
        function i(r, c) {
          return RegExp(r, c);
        }
        l.UNSUPPORTED_Y = a(function() {
          var r = i("a", "y");
          return r.lastIndex = 2, r.exec("abcd") != null;
        }), l.BROKEN_CARET = a(function() {
          var r = i("^r", "gy");
          return r.lastIndex = 2, r.exec("str") != null;
        });
      }
    ),
    /***/
    a15b: (
      /***/
      function(o, l, e) {
        var a = e("23e7"), i = e("44ad"), r = e("fc6a"), c = e("a640"), u = [].join, h = i != Object, v = c("join", ",");
        a({ target: "Array", proto: !0, forced: h || !v }, {
          join: function(y) {
            return u.call(r(this), y === void 0 ? "," : y);
          }
        });
      }
    ),
    /***/
    a2bf: (
      /***/
      function(o, l, e) {
        var a = e("e8b5"), i = e("50c4"), r = e("0366"), c = function(u, h, v, p, y, g, m, E) {
          for (var D = y, F = 0, A = m ? r(m, E, 3) : !1, R; F < p; ) {
            if (F in v) {
              if (R = A ? A(v[F], F, h) : v[F], g > 0 && a(R))
                D = c(u, h, R, i(R.length), D, g - 1) - 1;
              else {
                if (D >= 9007199254740991) throw TypeError("Exceed the acceptable array length");
                u[D] = R;
              }
              D++;
            }
            F++;
          }
          return D;
        };
        o.exports = c;
      }
    ),
    /***/
    a434: (
      /***/
      function(o, l, e) {
        var a = e("23e7"), i = e("23cb"), r = e("a691"), c = e("50c4"), u = e("7b0b"), h = e("65f0"), v = e("8418"), p = e("1dde"), y = e("ae40"), g = p("splice"), m = y("splice", { ACCESSORS: !0, 0: 0, 1: 2 }), E = Math.max, D = Math.min, F = 9007199254740991, A = "Maximum allowed length exceeded";
        a({ target: "Array", proto: !0, forced: !g || !m }, {
          splice: function(B, U) {
            var I = u(this), T = c(I.length), w = i(B, T), P = arguments.length, L, S, N, C, M, O;
            if (P === 0 ? L = S = 0 : P === 1 ? (L = 0, S = T - w) : (L = P - 2, S = D(E(r(U), 0), T - w)), T + L - S > F)
              throw TypeError(A);
            for (N = h(I, S), C = 0; C < S; C++)
              M = w + C, M in I && v(N, C, I[M]);
            if (N.length = S, L < S) {
              for (C = w; C < T - S; C++)
                M = C + S, O = C + L, M in I ? I[O] = I[M] : delete I[O];
              for (C = T; C > T - S + L; C--) delete I[C - 1];
            } else if (L > S)
              for (C = T - S; C > w; C--)
                M = C + S - 1, O = C + L - 1, M in I ? I[O] = I[M] : delete I[O];
            for (C = 0; C < L; C++)
              I[C + w] = arguments[C + 2];
            return I.length = T - S + L, N;
          }
        });
      }
    ),
    /***/
    a623: (
      /***/
      function(o, l, e) {
        var a = e("23e7"), i = e("b727").every, r = e("a640"), c = e("ae40"), u = r("every"), h = c("every");
        a({ target: "Array", proto: !0, forced: !u || !h }, {
          every: function(p) {
            return i(this, p, arguments.length > 1 ? arguments[1] : void 0);
          }
        });
      }
    ),
    /***/
    a640: (
      /***/
      function(o, l, e) {
        var a = e("d039");
        o.exports = function(i, r) {
          var c = [][i];
          return !!c && a(function() {
            c.call(null, r || function() {
              throw 1;
            }, 1);
          });
        };
      }
    ),
    /***/
    a691: (
      /***/
      function(o, l) {
        var e = Math.ceil, a = Math.floor;
        o.exports = function(i) {
          return isNaN(i = +i) ? 0 : (i > 0 ? a : e)(i);
        };
      }
    ),
    /***/
    a9e3: (
      /***/
      function(o, l, e) {
        var a = e("83ab"), i = e("da84"), r = e("94ca"), c = e("6eeb"), u = e("5135"), h = e("c6b6"), v = e("7156"), p = e("c04e"), y = e("d039"), g = e("7c73"), m = e("241c").f, E = e("06cf").f, D = e("9bf2").f, F = e("58a8").trim, A = "Number", R = i[A], B = R.prototype, U = h(g(B)) == A, I = function(S) {
          var N = p(S, !1), C, M, O, q, G, J, z, W;
          if (typeof N == "string" && N.length > 2) {
            if (N = F(N), C = N.charCodeAt(0), C === 43 || C === 45) {
              if (M = N.charCodeAt(2), M === 88 || M === 120) return NaN;
            } else if (C === 48) {
              switch (N.charCodeAt(1)) {
                case 66:
                case 98:
                  O = 2, q = 49;
                  break;
                case 79:
                case 111:
                  O = 8, q = 55;
                  break;
                default:
                  return +N;
              }
              for (G = N.slice(2), J = G.length, z = 0; z < J; z++)
                if (W = G.charCodeAt(z), W < 48 || W > q) return NaN;
              return parseInt(G, O);
            }
          }
          return +N;
        };
        if (r(A, !R(" 0o1") || !R("0b1") || R("+0x1"))) {
          for (var T = function(N) {
            var C = arguments.length < 1 ? 0 : N, M = this;
            return M instanceof T && (U ? y(function() {
              B.valueOf.call(M);
            }) : h(M) != A) ? v(new R(I(C)), M, T) : I(C);
          }, w = a ? m(R) : (
            // ES3:
            "MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger,fromString,range".split(",")
          ), P = 0, L; w.length > P; P++)
            u(R, L = w[P]) && !u(T, L) && D(T, L, E(R, L));
          T.prototype = B, B.constructor = T, c(i, A, T);
        }
      }
    ),
    /***/
    ac1f: (
      /***/
      function(o, l, e) {
        var a = e("23e7"), i = e("9263");
        a({ target: "RegExp", proto: !0, forced: /./.exec !== i }, {
          exec: i
        });
      }
    ),
    /***/
    ad6d: (
      /***/
      function(o, l, e) {
        var a = e("825a");
        o.exports = function() {
          var i = a(this), r = "";
          return i.global && (r += "g"), i.ignoreCase && (r += "i"), i.multiline && (r += "m"), i.dotAll && (r += "s"), i.unicode && (r += "u"), i.sticky && (r += "y"), r;
        };
      }
    ),
    /***/
    ae40: (
      /***/
      function(o, l, e) {
        var a = e("83ab"), i = e("d039"), r = e("5135"), c = Object.defineProperty, u = {}, h = function(v) {
          throw v;
        };
        o.exports = function(v, p) {
          if (r(u, v)) return u[v];
          p || (p = {});
          var y = [][v], g = r(p, "ACCESSORS") ? p.ACCESSORS : !1, m = r(p, 0) ? p[0] : h, E = r(p, 1) ? p[1] : void 0;
          return u[v] = !!y && !i(function() {
            if (g && !a) return !0;
            var D = { length: -1 };
            g ? c(D, 1, { enumerable: !0, get: h }) : D[1] = 1, y.call(D, m, E);
          });
        };
      }
    ),
    /***/
    b041: (
      /***/
      function(o, l, e) {
        var a = e("00ee"), i = e("f5df");
        o.exports = a ? {}.toString : function() {
          return "[object " + i(this) + "]";
        };
      }
    ),
    /***/
    b047: (
      /***/
      function(o, l, e) {
        var a = e("1a8c"), i = e("408c"), r = e("b4b0"), c = "Expected a function", u = Math.max, h = Math.min;
        function v(p, y, g) {
          var m, E, D, F, A, R, B = 0, U = !1, I = !1, T = !0;
          if (typeof p != "function")
            throw new TypeError(c);
          y = r(y) || 0, a(g) && (U = !!g.leading, I = "maxWait" in g, D = I ? u(r(g.maxWait) || 0, y) : D, T = "trailing" in g ? !!g.trailing : T);
          function w(G) {
            var J = m, z = E;
            return m = E = void 0, B = G, F = p.apply(z, J), F;
          }
          function P(G) {
            return B = G, A = setTimeout(N, y), U ? w(G) : F;
          }
          function L(G) {
            var J = G - R, z = G - B, W = y - J;
            return I ? h(W, D - z) : W;
          }
          function S(G) {
            var J = G - R, z = G - B;
            return R === void 0 || J >= y || J < 0 || I && z >= D;
          }
          function N() {
            var G = i();
            if (S(G))
              return C(G);
            A = setTimeout(N, L(G));
          }
          function C(G) {
            return A = void 0, T && m ? w(G) : (m = E = void 0, F);
          }
          function M() {
            A !== void 0 && clearTimeout(A), B = 0, m = R = E = A = void 0;
          }
          function O() {
            return A === void 0 ? F : C(i());
          }
          function q() {
            var G = i(), J = S(G);
            if (m = arguments, E = this, R = G, J) {
              if (A === void 0)
                return P(R);
              if (I)
                return clearTimeout(A), A = setTimeout(N, y), w(R);
            }
            return A === void 0 && (A = setTimeout(N, y)), F;
          }
          return q.cancel = M, q.flush = O, q;
        }
        o.exports = v;
      }
    ),
    /***/
    b4b0: (
      /***/
      function(o, l, e) {
        var a = e("1a8c"), i = e("ffd6"), r = NaN, c = /^\s+|\s+$/g, u = /^[-+]0x[0-9a-f]+$/i, h = /^0b[01]+$/i, v = /^0o[0-7]+$/i, p = parseInt;
        function y(g) {
          if (typeof g == "number")
            return g;
          if (i(g))
            return r;
          if (a(g)) {
            var m = typeof g.valueOf == "function" ? g.valueOf() : g;
            g = a(m) ? m + "" : m;
          }
          if (typeof g != "string")
            return g === 0 ? g : +g;
          g = g.replace(c, "");
          var E = h.test(g);
          return E || v.test(g) ? p(g.slice(2), E ? 2 : 8) : u.test(g) ? r : +g;
        }
        o.exports = y;
      }
    ),
    /***/
    b622: (
      /***/
      function(o, l, e) {
        var a = e("da84"), i = e("5692"), r = e("5135"), c = e("90e3"), u = e("4930"), h = e("fdbf"), v = i("wks"), p = a.Symbol, y = h ? p : p && p.withoutSetter || c;
        o.exports = function(g) {
          return r(v, g) || (u && r(p, g) ? v[g] = p[g] : v[g] = y("Symbol." + g)), v[g];
        };
      }
    ),
    /***/
    b64b: (
      /***/
      function(o, l, e) {
        var a = e("23e7"), i = e("7b0b"), r = e("df75"), c = e("d039"), u = c(function() {
          r(1);
        });
        a({ target: "Object", stat: !0, forced: u }, {
          keys: function(v) {
            return r(i(v));
          }
        });
      }
    ),
    /***/
    b727: (
      /***/
      function(o, l, e) {
        var a = e("0366"), i = e("44ad"), r = e("7b0b"), c = e("50c4"), u = e("65f0"), h = [].push, v = function(p) {
          var y = p == 1, g = p == 2, m = p == 3, E = p == 4, D = p == 6, F = p == 7, A = p == 5 || D;
          return function(R, B, U, I) {
            for (var T = r(R), w = i(T), P = a(B, U, 3), L = c(w.length), S = 0, N = I || u, C = y ? N(R, L) : g || F ? N(R, 0) : void 0, M, O; L > S; S++) if ((A || S in w) && (M = w[S], O = P(M, S, T), p))
              if (y) C[S] = O;
              else if (O) switch (p) {
                case 3:
                  return !0;
                case 5:
                  return M;
                case 6:
                  return S;
                case 2:
                  h.call(C, M);
              }
              else switch (p) {
                case 4:
                  return !1;
                case 7:
                  h.call(C, M);
              }
            return D ? -1 : m || E ? E : C;
          };
        };
        o.exports = {
          // `Array.prototype.forEach` method
          // https://tc39.es/ecma262/#sec-array.prototype.foreach
          forEach: v(0),
          // `Array.prototype.map` method
          // https://tc39.es/ecma262/#sec-array.prototype.map
          map: v(1),
          // `Array.prototype.filter` method
          // https://tc39.es/ecma262/#sec-array.prototype.filter
          filter: v(2),
          // `Array.prototype.some` method
          // https://tc39.es/ecma262/#sec-array.prototype.some
          some: v(3),
          // `Array.prototype.every` method
          // https://tc39.es/ecma262/#sec-array.prototype.every
          every: v(4),
          // `Array.prototype.find` method
          // https://tc39.es/ecma262/#sec-array.prototype.find
          find: v(5),
          // `Array.prototype.findIndex` method
          // https://tc39.es/ecma262/#sec-array.prototype.findIndex
          findIndex: v(6),
          // `Array.prototype.filterOut` method
          // https://github.com/tc39/proposal-array-filtering
          filterOut: v(7)
        };
      }
    ),
    /***/
    bcdf: (
      /***/
      function(o, l) {
        function e() {
        }
        o.exports = e;
      }
    ),
    /***/
    c04e: (
      /***/
      function(o, l, e) {
        var a = e("861d");
        o.exports = function(i, r) {
          if (!a(i)) return i;
          var c, u;
          if (r && typeof (c = i.toString) == "function" && !a(u = c.call(i)) || typeof (c = i.valueOf) == "function" && !a(u = c.call(i)) || !r && typeof (c = i.toString) == "function" && !a(u = c.call(i))) return u;
          throw TypeError("Can't convert object to primitive value");
        };
      }
    ),
    /***/
    c430: (
      /***/
      function(o, l) {
        o.exports = !1;
      }
    ),
    /***/
    c6b6: (
      /***/
      function(o, l) {
        var e = {}.toString;
        o.exports = function(a) {
          return e.call(a).slice(8, -1);
        };
      }
    ),
    /***/
    c6cd: (
      /***/
      function(o, l, e) {
        var a = e("da84"), i = e("ce4e"), r = "__core-js_shared__", c = a[r] || i(r, {});
        o.exports = c;
      }
    ),
    /***/
    c8ba: (
      /***/
      function(o, l) {
        var e;
        e = /* @__PURE__ */ function() {
          return this;
        }();
        try {
          e = e || new Function("return this")();
        } catch {
          typeof window == "object" && (e = window);
        }
        o.exports = e;
      }
    ),
    /***/
    c8d2: (
      /***/
      function(o, l, e) {
        var a = e("d039"), i = e("5899"), r = "​᠎";
        o.exports = function(c) {
          return a(function() {
            return !!i[c]() || r[c]() != r || i[c].name !== c;
          });
        };
      }
    ),
    /***/
    c975: (
      /***/
      function(o, l, e) {
        var a = e("23e7"), i = e("4d64").indexOf, r = e("a640"), c = e("ae40"), u = [].indexOf, h = !!u && 1 / [1].indexOf(1, -0) < 0, v = r("indexOf"), p = c("indexOf", { ACCESSORS: !0, 1: 0 });
        a({ target: "Array", proto: !0, forced: h || !v || !p }, {
          indexOf: function(g) {
            return h ? u.apply(this, arguments) || 0 : i(this, g, arguments.length > 1 ? arguments[1] : void 0);
          }
        });
      }
    ),
    /***/
    ca84: (
      /***/
      function(o, l, e) {
        var a = e("5135"), i = e("fc6a"), r = e("4d64").indexOf, c = e("d012");
        o.exports = function(u, h) {
          var v = i(u), p = 0, y = [], g;
          for (g in v) !a(c, g) && a(v, g) && y.push(g);
          for (; h.length > p; ) a(v, g = h[p++]) && (~r(y, g) || y.push(g));
          return y;
        };
      }
    ),
    /***/
    cc12: (
      /***/
      function(o, l, e) {
        var a = e("da84"), i = e("861d"), r = a.document, c = i(r) && i(r.createElement);
        o.exports = function(u) {
          return c ? r.createElement(u) : {};
        };
      }
    ),
    /***/
    cd9d: (
      /***/
      function(o, l) {
        function e(a) {
          return a;
        }
        o.exports = e;
      }
    ),
    /***/
    ce4e: (
      /***/
      function(o, l, e) {
        var a = e("da84"), i = e("9112");
        o.exports = function(r, c) {
          try {
            i(a, r, c);
          } catch {
            a[r] = c;
          }
          return c;
        };
      }
    ),
    /***/
    d012: (
      /***/
      function(o, l) {
        o.exports = {};
      }
    ),
    /***/
    d039: (
      /***/
      function(o, l) {
        o.exports = function(e) {
          try {
            return !!e();
          } catch {
            return !0;
          }
        };
      }
    ),
    /***/
    d066: (
      /***/
      function(o, l, e) {
        var a = e("428f"), i = e("da84"), r = function(c) {
          return typeof c == "function" ? c : void 0;
        };
        o.exports = function(c, u) {
          return arguments.length < 2 ? r(a[c]) || r(i[c]) : a[c] && a[c][u] || i[c] && i[c][u];
        };
      }
    ),
    /***/
    d15f: (
      /***/
      function(o, l, e) {
      }
    ),
    /***/
    d1e7: (
      /***/
      function(o, l, e) {
        var a = {}.propertyIsEnumerable, i = Object.getOwnPropertyDescriptor, r = i && !a.call({ 1: 2 }, 1);
        l.f = r ? function(u) {
          var h = i(this, u);
          return !!h && h.enumerable;
        } : a;
      }
    ),
    /***/
    d2bb: (
      /***/
      function(o, l, e) {
        var a = e("825a"), i = e("3bbe");
        o.exports = Object.setPrototypeOf || ("__proto__" in {} ? function() {
          var r = !1, c = {}, u;
          try {
            u = Object.getOwnPropertyDescriptor(Object.prototype, "__proto__").set, u.call(c, []), r = c instanceof Array;
          } catch {
          }
          return function(v, p) {
            return a(v), i(p), r ? u.call(v, p) : v.__proto__ = p, v;
          };
        }() : void 0);
      }
    ),
    /***/
    d3b7: (
      /***/
      function(o, l, e) {
        var a = e("00ee"), i = e("6eeb"), r = e("b041");
        a || i(Object.prototype, "toString", r, { unsafe: !0 });
      }
    ),
    /***/
    d58f: (
      /***/
      function(o, l, e) {
        var a = e("1c0b"), i = e("7b0b"), r = e("44ad"), c = e("50c4"), u = function(h) {
          return function(v, p, y, g) {
            a(p);
            var m = i(v), E = r(m), D = c(m.length), F = h ? D - 1 : 0, A = h ? -1 : 1;
            if (y < 2) for (; ; ) {
              if (F in E) {
                g = E[F], F += A;
                break;
              }
              if (F += A, h ? F < 0 : D <= F)
                throw TypeError("Reduce of empty array with no initial value");
            }
            for (; h ? F >= 0 : D > F; F += A) F in E && (g = p(g, E[F], F, m));
            return g;
          };
        };
        o.exports = {
          // `Array.prototype.reduce` method
          // https://tc39.es/ecma262/#sec-array.prototype.reduce
          left: u(!1),
          // `Array.prototype.reduceRight` method
          // https://tc39.es/ecma262/#sec-array.prototype.reduceright
          right: u(!0)
        };
      }
    ),
    /***/
    d784: (
      /***/
      function(o, l, e) {
        e("ac1f");
        var a = e("6eeb"), i = e("d039"), r = e("b622"), c = e("9263"), u = e("9112"), h = r("species"), v = !i(function() {
          var E = /./;
          return E.exec = function() {
            var D = [];
            return D.groups = { a: "7" }, D;
          }, "".replace(E, "$<a>") !== "7";
        }), p = function() {
          return "a".replace(/./, "$0") === "$0";
        }(), y = r("replace"), g = function() {
          return /./[y] ? /./[y]("a", "$0") === "" : !1;
        }(), m = !i(function() {
          var E = /(?:)/, D = E.exec;
          E.exec = function() {
            return D.apply(this, arguments);
          };
          var F = "ab".split(E);
          return F.length !== 2 || F[0] !== "a" || F[1] !== "b";
        });
        o.exports = function(E, D, F, A) {
          var R = r(E), B = !i(function() {
            var L = {};
            return L[R] = function() {
              return 7;
            }, ""[E](L) != 7;
          }), U = B && !i(function() {
            var L = !1, S = /a/;
            return E === "split" && (S = {}, S.constructor = {}, S.constructor[h] = function() {
              return S;
            }, S.flags = "", S[R] = /./[R]), S.exec = function() {
              return L = !0, null;
            }, S[R](""), !L;
          });
          if (!B || !U || E === "replace" && !(v && p && !g) || E === "split" && !m) {
            var I = /./[R], T = F(R, ""[E], function(L, S, N, C, M) {
              return S.exec === c ? B && !M ? { done: !0, value: I.call(S, N, C) } : { done: !0, value: L.call(N, S, C) } : { done: !1 };
            }, {
              REPLACE_KEEPS_$0: p,
              REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE: g
            }), w = T[0], P = T[1];
            a(String.prototype, E, w), a(
              RegExp.prototype,
              R,
              D == 2 ? function(L, S) {
                return P.call(L, this, S);
              } : function(L) {
                return P.call(L, this);
              }
            );
          }
          A && u(RegExp.prototype[R], "sham", !0);
        };
      }
    ),
    /***/
    d81d: (
      /***/
      function(o, l, e) {
        var a = e("23e7"), i = e("b727").map, r = e("1dde"), c = e("ae40"), u = r("map"), h = c("map");
        a({ target: "Array", proto: !0, forced: !u || !h }, {
          map: function(p) {
            return i(this, p, arguments.length > 1 ? arguments[1] : void 0);
          }
        });
      }
    ),
    /***/
    da84: (
      /***/
      function(o, l, e) {
        (function(a) {
          var i = function(r) {
            return r && r.Math == Math && r;
          };
          o.exports = // eslint-disable-next-line no-undef
          i(typeof globalThis == "object" && globalThis) || i(typeof window == "object" && window) || i(typeof self == "object" && self) || i(typeof a == "object" && a) || // eslint-disable-next-line no-new-func
          /* @__PURE__ */ function() {
            return this;
          }() || Function("return this")();
        }).call(this, e("c8ba"));
      }
    ),
    /***/
    df75: (
      /***/
      function(o, l, e) {
        var a = e("ca84"), i = e("7839");
        o.exports = Object.keys || function(c) {
          return a(c, i);
        };
      }
    ),
    /***/
    e0ef: (
      /***/
      function(o, l, e) {
        var a = e("4b17"), i = "Expected a function";
        function r(c, u) {
          var h;
          if (typeof u != "function")
            throw new TypeError(i);
          return c = a(c), function() {
            return --c > 0 && (h = u.apply(this, arguments)), c <= 1 && (u = void 0), h;
          };
        }
        o.exports = r;
      }
    ),
    /***/
    e163: (
      /***/
      function(o, l, e) {
        var a = e("5135"), i = e("7b0b"), r = e("f772"), c = e("e177"), u = r("IE_PROTO"), h = Object.prototype;
        o.exports = c ? Object.getPrototypeOf : function(v) {
          return v = i(v), a(v, u) ? v[u] : typeof v.constructor == "function" && v instanceof v.constructor ? v.constructor.prototype : v instanceof Object ? h : null;
        };
      }
    ),
    /***/
    e177: (
      /***/
      function(o, l, e) {
        var a = e("d039");
        o.exports = !a(function() {
          function i() {
          }
          return i.prototype.constructor = null, Object.getPrototypeOf(new i()) !== i.prototype;
        });
      }
    ),
    /***/
    e893: (
      /***/
      function(o, l, e) {
        var a = e("5135"), i = e("56ef"), r = e("06cf"), c = e("9bf2");
        o.exports = function(u, h) {
          for (var v = i(h), p = c.f, y = r.f, g = 0; g < v.length; g++) {
            var m = v[g];
            a(u, m) || p(u, m, y(h, m));
          }
        };
      }
    ),
    /***/
    e8b5: (
      /***/
      function(o, l, e) {
        var a = e("c6b6");
        o.exports = Array.isArray || function(r) {
          return a(r) == "Array";
        };
      }
    ),
    /***/
    f5df: (
      /***/
      function(o, l, e) {
        var a = e("00ee"), i = e("c6b6"), r = e("b622"), c = r("toStringTag"), u = i(/* @__PURE__ */ function() {
          return arguments;
        }()) == "Arguments", h = function(v, p) {
          try {
            return v[p];
          } catch {
          }
        };
        o.exports = a ? i : function(v) {
          var p, y, g;
          return v === void 0 ? "Undefined" : v === null ? "Null" : typeof (y = h(p = Object(v), c)) == "string" ? y : u ? i(p) : (g = i(p)) == "Object" && typeof p.callee == "function" ? "Arguments" : g;
        };
      }
    ),
    /***/
    f772: (
      /***/
      function(o, l, e) {
        var a = e("5692"), i = e("90e3"), r = a("keys");
        o.exports = function(c) {
          return r[c] || (r[c] = i(c));
        };
      }
    ),
    /***/
    fb15: (
      /***/
      function(o, l, e) {
        if (e.r(l), e.d(l, "Treeselect", function() {
          return (
            /* reexport */
            dn
          );
        }), e.d(l, "treeselectMixin", function() {
          return (
            /* reexport */
            Zt
          );
        }), e.d(l, "LOAD_ROOT_OPTIONS", function() {
          return (
            /* reexport */
            ot
          );
        }), e.d(l, "LOAD_CHILDREN_OPTIONS", function() {
          return (
            /* reexport */
            it
          );
        }), e.d(l, "ASYNC_SEARCH", function() {
          return (
            /* reexport */
            st
          );
        }), typeof window < "u") {
          var a = window.document.currentScript, i = a && a.src.match(/(.+\/)[^/]+\.js(\?.*)?$/);
          i && (e.p = i[1]);
        }
        var r = e("8bbf");
        function c(s, t, n, f, b, x) {
          var V = Object(r.resolveComponent)("HiddenFields"), Q = Object(r.resolveComponent)("Control"), ae = Object(r.resolveComponent)("MenuPortal"), ce = Object(r.resolveComponent)("Menu");
          return Object(r.openBlock)(), Object(r.createBlock)("div", {
            ref: "wrapper",
            class: s.wrapperClass
          }, [Object(r.createVNode)(V), Object(r.createVNode)(Q, {
            ref: "control"
          }, null, 512), s.appendToBody ? (Object(r.openBlock)(), Object(r.createBlock)(ae, {
            key: 0,
            ref: "portal"
          }, null, 512)) : (Object(r.openBlock)(), Object(r.createBlock)(ce, {
            key: 1,
            ref: "menu"
          }, null, 512))], 2);
        }
        e("99af"), e("a623"), e("4de4"), e("0481"), e("4160"), e("c975"), e("d81d"), e("13d5"), e("fb6a"), e("45fc"), e("4e82"), e("4069"), e("a9e3"), e("ac1f"), e("5319"), e("1276"), e("498a"), e("159b");
        function u(s) {
          if (Array.isArray(s)) return s;
        }
        function h(s, t) {
          if (!(typeof Symbol > "u" || !(Symbol.iterator in Object(s)))) {
            var n = [], f = !0, b = !1, x = void 0;
            try {
              for (var V = s[Symbol.iterator](), Q; !(f = (Q = V.next()).done) && (n.push(Q.value), !(t && n.length === t)); f = !0)
                ;
            } catch (ae) {
              b = !0, x = ae;
            } finally {
              try {
                !f && V.return != null && V.return();
              } finally {
                if (b) throw x;
              }
            }
            return n;
          }
        }
        function v(s, t) {
          (t == null || t > s.length) && (t = s.length);
          for (var n = 0, f = new Array(t); n < t; n++)
            f[n] = s[n];
          return f;
        }
        function p(s, t) {
          if (s) {
            if (typeof s == "string") return v(s, t);
            var n = Object.prototype.toString.call(s).slice(8, -1);
            if (n === "Object" && s.constructor && (n = s.constructor.name), n === "Map" || n === "Set") return Array.from(s);
            if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return v(s, t);
          }
        }
        function y() {
          throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
        }
        function g(s, t) {
          return u(s) || h(s, t) || p(s, t) || y();
        }
        function m(s, t, n) {
          return t in s ? Object.defineProperty(s, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
          }) : s[t] = n, s;
        }
        function E(s) {
          if (Array.isArray(s)) return v(s);
        }
        function D(s) {
          if (typeof Symbol < "u" && Symbol.iterator in Object(s)) return Array.from(s);
        }
        function F() {
          throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
        }
        function A(s) {
          return E(s) || D(s) || p(s) || F();
        }
        function R(s, t) {
          var n = Object.keys(s);
          if (Object.getOwnPropertySymbols) {
            var f = Object.getOwnPropertySymbols(s);
            t && (f = f.filter(function(b) {
              return Object.getOwnPropertyDescriptor(s, b).enumerable;
            })), n.push.apply(n, f);
          }
          return n;
        }
        function B(s) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t] != null ? arguments[t] : {};
            t % 2 ? R(Object(n), !0).forEach(function(f) {
              m(s, f, n[f]);
            }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(s, Object.getOwnPropertyDescriptors(n)) : R(Object(n)).forEach(function(f) {
              Object.defineProperty(s, f, Object.getOwnPropertyDescriptor(n, f));
            });
          }
          return s;
        }
        var U = e("2e39"), I = /* @__PURE__ */ e.n(U);
        function T(s) {
          return s !== s;
        }
        function w(s, t) {
          return s.indexOf(t) !== -1;
        }
        var P = e("72f0"), L = /* @__PURE__ */ e.n(P), S = e("cd9d"), N = /* @__PURE__ */ e.n(S), C = function() {
          return /* @__PURE__ */ Object.create(null);
        };
        function M(s, t) {
          if (s.length !== t.length) return !0;
          for (var n = 0; n < s.length; n++)
            if (s[n] !== t[n]) return !0;
          return !1;
        }
        var O = e("bcdf"), q = /* @__PURE__ */ e.n(O), G = (
          /* istanbul ignore next */
          q.a
        );
        function J(s, t, n) {
          for (var f = 0, b = s.length; f < b; f++)
            if (t.call(n, s[f], f, s)) return s[f];
        }
        function z(s) {
          return function(n) {
            if (n.type === "mousedown" && n.button === 0) {
              for (var f = arguments.length, b = new Array(f > 1 ? f - 1 : 0), x = 1; x < f; x++)
                b[x - 1] = arguments[x];
              s.call.apply(s, [this, n].concat(b));
            }
          };
        }
        var W = e("4416"), se = /* @__PURE__ */ e.n(W), ve = e("1d92"), _ = /* @__PURE__ */ e.n(ve), be = e("2655"), Ce = /* @__PURE__ */ e.n(be);
        e("a434");
        function Ie(s, t) {
          var n = s.indexOf(t);
          n !== -1 && s.splice(n, 1);
        }
        var Se = null, me = 0, rt = 1, at = 2, Le = "ALL_CHILDREN", je = "ALL_DESCENDANTS", Ae = "LEAF_CHILDREN", Fe = "LEAF_DESCENDANTS", ot = "LOAD_ROOT_OPTIONS", it = "LOAD_CHILDREN_OPTIONS", st = "ASYNC_SEARCH", Je = "ALL", De = "BRANCH_PRIORITY", He = "LEAF_PRIORITY", Ze = "ALL_WITH_INDETERMINATE", lt = "ORDER_SELECTED", ct = "LEVEL", ut = "INDEX", j = {
          BACKSPACE: 8,
          ENTER: 13,
          ESCAPE: 27,
          END: 35,
          HOME: 36,
          ARROW_LEFT: 37,
          ARROW_UP: 38,
          ARROW_RIGHT: 39,
          ARROW_DOWN: 40,
          DELETE: 46
        }, $ = (
          /* istanbul ignore next */
          200
        ), Z = 5, te = 40;
        function le(s, t) {
          var n = 0;
          do {
            if (s.level < n) return -1;
            if (t.level < n) return 1;
            if (s.index[n] !== t.index[n]) return s.index[n] - t.index[n];
            n++;
          } while (!0);
        }
        function X(s, t) {
          return s.level === t.level ? le(s, t) : s.level - t.level;
        }
        function de() {
          return {
            isLoaded: !1,
            isLoading: !1,
            loadingError: ""
          };
        }
        function Me(s) {
          return typeof s == "string" ? s : typeof s == "number" && !T(s) ? s + "" : "";
        }
        function Jt(s, t, n) {
          return s ? I()(t, n) : w(n, t);
        }
        function Et(s) {
          return s.message || /* istanbul ignore next */
          String(s);
        }
        var Cn = 0, Zt = {
          provide: function() {
            return {
              // Enable access to the instance of root component of vue-treeselect
              // across hierarchy.
              instance: this
            };
          },
          props: {
            /**
             * Whether to allow resetting value even if there are disabled selected nodes.
             */
            allowClearingDisabled: {
              type: Boolean,
              default: !1
            },
            /**
             * When an ancestor node is selected/deselected, whether its disabled descendants should be selected/deselected.
             * You may want to use this in conjunction with `allowClearingDisabled` prop.
             */
            allowSelectingDisabledDescendants: {
              type: Boolean,
              default: !1
            },
            /**
             * Whether the menu should be always open.
             */
            alwaysOpen: {
              type: Boolean,
              default: !1
            },
            /**
             * Append the menu to <body />?
             */
            appendToBody: {
              type: Boolean,
              default: !1
            },
            /**
             * Whether to enable async search mode.
             */
            async: {
              type: Boolean,
              default: !1
            },
            /**
             * Automatically focus the component on mount?
             */
            autoFocus: {
              type: Boolean,
              default: !1
            },
            /**
             * Automatically load root options on mount. When set to `false`, root options will be loaded when the menu is opened.
             */
            autoLoadRootOptions: {
              type: Boolean,
              default: !0
            },
            /**
             * When user deselects a node, automatically deselect its ancestors. Applies to flat mode only.
             */
            autoDeselectAncestors: {
              type: Boolean,
              default: !1
            },
            /**
             * When user deselects a node, automatically deselect its descendants. Applies to flat mode only.
             */
            autoDeselectDescendants: {
              type: Boolean,
              default: !1
            },
            /**
             * When user selects a node, automatically select its ancestors. Applies to flat mode only.
             */
            autoSelectAncestors: {
              type: Boolean,
              default: !1
            },
            /**
             * When user selects a node, automatically select its descendants. Applies to flat mode only.
             */
            autoSelectDescendants: {
              type: Boolean,
              default: !1
            },
            /**
             * Whether pressing backspace key removes the last item if there is no text input.
             */
            backspaceRemoves: {
              type: Boolean,
              default: !0
            },
            /**
             * Function that processes before clearing all input fields.
             * Return `false` to prevent value from being cleared.
             * @type {function(): (boolean|Promise<boolean>)}
             */
            beforeClearAll: {
              type: Function,
              default: L()(!0)
            },
            /**
             * Show branch nodes before leaf nodes?
             */
            branchNodesFirst: {
              type: Boolean,
              default: !1
            },
            /**
             * Should cache results of every search request?
             */
            cacheOptions: {
              type: Boolean,
              default: !0
            },
            /**
             * Show an "×" button that resets value?
             */
            clearable: {
              type: Boolean,
              default: !0
            },
            /**
             * Title for the "×" button when `multiple: true`.
             */
            clearAllText: {
              type: String,
              default: "Clear all"
            },
            /**
             * Whether to clear the search input after selecting.
             * Use only when `multiple` is `true`.
             * For single-select mode, it **always** clears the input after selecting an option regardless of the prop value.
             */
            clearOnSelect: {
              type: Boolean,
              default: !1
            },
            /**
             * Title for the "×" button.
             */
            clearValueText: {
              type: String,
              default: "Clear value"
            },
            /**
             * Whether to close the menu after selecting an option?
             * Use only when `multiple` is `true`.
             */
            closeOnSelect: {
              type: Boolean,
              default: !0
            },
            /**
             * How many levels of branch nodes should be automatically expanded when loaded.
             * Set `Infinity` to make all branch nodes expanded by default.
             */
            defaultExpandLevel: {
              type: Number,
              default: 0
            },
            /**
             * The default set of options to show before the user starts searching. Used for async search mode.
             * When set to `true`, the results for search query as a empty string will be autoloaded.
             * @type {boolean|node[]}
             */
            defaultOptions: {
              default: !1
            },
            /**
             * Whether pressing delete key removes the last item if there is no text input.
             */
            deleteRemoves: {
              type: Boolean,
              default: !0
            },
            /**
             * Delimiter to use to join multiple values for the hidden field value.
             */
            delimiter: {
              type: String,
              default: ","
            },
            /**
             * Only show the nodes that match the search value directly, excluding its ancestors.
             *
             * @type {Object}
             */
            flattenSearchResults: {
              type: Boolean,
              default: !1
            },
            /**
             * Prevent branch nodes from being selected?
             */
            disableBranchNodes: {
              type: Boolean,
              default: !1
            },
            /**
             * Disable the control?
             */
            disabled: {
              type: Boolean,
              default: !1
            },
            /**
             * Disable the fuzzy matching functionality?
             */
            disableFuzzyMatching: {
              type: Boolean,
              default: !1
            },
            /**
             * Whether to enable flat mode or not. Non-flat mode (default) means:
             *   - Whenever a branch node gets checked, all its children will be checked too
             *   - Whenever a branch node has all children checked, the branch node itself will be checked too
             * Set `true` to disable this mechanism
             */
            flat: {
              type: Boolean,
              default: !1
            },
            /**
             * Will be passed with all events as the last param.
             * Useful for identifying events origin.
            */
            instanceId: {
              // Add two trailing "$" to distinguish from explictly specified ids.
              default: function() {
                return "".concat(Cn++, "$$");
              },
              type: [String, Number]
            },
            /**
             * Joins multiple values into a single form field with the `delimiter` (legacy mode).
            */
            joinValues: {
              type: Boolean,
              default: !1
            },
            /**
             * Limit the display of selected options.
             * The rest will be hidden within the limitText string.
             */
            limit: {
              type: Number,
              default: 1 / 0
            },
            /**
             * Function that processes the message shown when selected elements pass the defined limit.
             * @type {function(number): string}
             */
            limitText: {
              type: Function,
              default: function(t) {
                return "and ".concat(t, " more");
              }
            },
            /**
             * Text displayed when loading options.
             */
            loadingText: {
              type: String,
              default: "Loading..."
            },
            /**
             * Used for dynamically loading options.
             * @type {function({action: string, callback: (function((Error|string)=): void), parentNode: node=, instanceId}): void}
             */
            loadOptions: {
              type: Function
            },
            /**
             * Which node properties to filter on.
             */
            matchKeys: {
              type: Array,
              default: L()(["label"])
            },
            /**
             * Sets `maxHeight` style value of the menu.
             */
            maxHeight: {
              type: Number,
              default: 300
            },
            /**
             * Set `true` to allow selecting multiple options (a.k.a., multi-select mode).
             */
            multiple: {
              type: Boolean,
              default: !1
            },
            /**
             * Generates a hidden <input /> tag with this field name for html forms.
             */
            name: {
              type: String
            },
            /**
             * Text displayed when a branch node has no children.
             */
            noChildrenText: {
              type: String,
              default: "No sub-options."
            },
            /**
             * Text displayed when there are no available options.
             */
            noOptionsText: {
              type: String,
              default: "No options available."
            },
            /**
             * Text displayed when there are no matching search results.
             */
            noResultsText: {
              type: String,
              default: "No results found..."
            },
            /**
             * Used for normalizing source data.
             * @type {function(node, instanceId): node}
             */
            normalizer: {
              type: Function,
              default: N.a
            },
            /**
             * By default (`auto`), the menu will open below the control. If there is not
             * enough space, vue-treeselect will automatically flip the menu.
             * You can use one of other four options to force the menu to be always opened
             * to specified direction.
             * Acceptable values:
             *   - `"auto"`
             *   - `"below"`
             *   - `"bottom"`
             *   - `"above"`
             *   - `"top"`
             */
            openDirection: {
              type: String,
              default: "auto",
              validator: function(t) {
                var n = ["auto", "top", "bottom", "above", "below"];
                return w(n, t);
              }
            },
            /**
             * Whether to automatically open the menu when the control is clicked.
             */
            openOnClick: {
              type: Boolean,
              default: !0
            },
            /**
             * Whether to automatically open the menu when the control is focused.
             */
            openOnFocus: {
              type: Boolean,
              default: !1
            },
            /**
             * Array of available options.
             * @type {node[]}
             */
            options: {
              type: Array
            },
            /**
             * Field placeholder, displayed when there's no value.
             */
            placeholder: {
              type: String,
              default: "Select..."
            },
            /**
             * Applies HTML5 required attribute when needed.
             */
            required: {
              type: Boolean,
              default: !1
            },
            /**
             * Text displayed asking user whether to retry loading children options.
             */
            retryText: {
              type: String,
              default: "Retry?"
            },
            /**
             * Title for the retry button.
             */
            retryTitle: {
              type: String,
              default: "Click to retry"
            },
            /**
             * Enable searching feature?
             */
            searchable: {
              type: Boolean,
              default: !0
            },
            /**
             * Search in ancestor nodes too.
             */
            searchNested: {
              type: Boolean,
              default: !1
            },
            /**
             * Text tip to prompt for async search.
             */
            searchPromptText: {
              type: String,
              default: "Type to search..."
            },
            /**
             * Whether to show a children count next to the label of each branch node.
             */
            showCount: {
              type: Boolean,
              default: !1
            },
            /**
             * Used in conjunction with `showCount` to specify which type of count number should be displayed.
             * Acceptable values:
             *   - "ALL_CHILDREN"
             *   - "ALL_DESCENDANTS"
             *   - "LEAF_CHILDREN"
             *   - "LEAF_DESCENDANTS"
             */
            showCountOf: {
              type: String,
              default: Le,
              validator: function(t) {
                var n = [Le, je, Ae, Fe];
                return w(n, t);
              }
            },
            /**
             * Whether to show children count when searching.
             * Fallbacks to the value of `showCount` when not specified.
             * @type {boolean}
             */
            showCountOnSearch: null,
            /**
             * In which order the selected options should be displayed in trigger & sorted in `value` array.
             * Used for multi-select mode only.
             * Acceptable values:
             *   - "ORDER_SELECTED"
             *   - "LEVEL"
             *   - "INDEX"
             */
            sortValueBy: {
              type: String,
              default: lt,
              validator: function(t) {
                var n = [lt, ct, ut];
                return w(n, t);
              }
            },
            /**
             * Tab index of the control.
             */
            tabIndex: {
              type: Number,
              default: 0
            },
            /**
             * The value of the control.
             * Should be `id` or `node` object for single-select mode, or an array of `id` or `node` object for multi-select mode.
             * Its format depends on the `valueFormat` prop.
             * For most cases, just use `v-model` instead.
             * @type {?Array}
             */
            modelValue: null,
            /**
             * Which kind of nodes should be included in the `value` array in multi-select mode.
             * Acceptable values:
             *   - "ALL" - Any node that is checked will be included in the `value` array
             *   - "BRANCH_PRIORITY" (default) - If a branch node is checked, all its descendants will be excluded in the `value` array
             *   - "LEAF_PRIORITY" - If a branch node is checked, this node itself and its branch descendants will be excluded from the `value` array but its leaf descendants will be included
             *   - "ALL_WITH_INDETERMINATE" - Any node that is checked will be included in the `value` array, plus indeterminate nodes
             */
            valueConsistsOf: {
              type: String,
              default: De,
              validator: function(t) {
                var n = [Je, De, He, Ze];
                return w(n, t);
              }
            },
            /**
             * Format of `value` prop.
             * Note that, when set to `"object"`, only `id` & `label` properties are required in each `node` object in `value` prop.
             * Acceptable values:
             *   - "id"
             *   - "object"
             */
            valueFormat: {
              type: String,
              default: "id"
            },
            /**
             * z-index of the menu.
             */
            zIndex: {
              type: [Number, String],
              default: 999
            }
          },
          data: function() {
            return {
              trigger: {
                // Is the control focused?
                isFocused: !1,
                // User entered search query - value of the input.
                searchQuery: ""
              },
              menu: {
                // Is the menu opened?
                isOpen: !1,
                // Id of current highlighted option.
                current: null,
                // The scroll position before last menu closing.
                lastScrollPosition: 0,
                // Which direction to open the menu.
                placement: "bottom"
              },
              forest: {
                // Normalized options.
                normalizedOptions: [],
                // <id, node> map for quick look-up.
                nodeMap: C(),
                // <id, checkedState> map, used for multi-select mode.
                checkedStateMap: C(),
                // Id list of all selected options.
                selectedNodeIds: this.extractCheckedNodeIdsFromValue(),
                // <id, true> map for fast checking:
                //   if (forest.selectedNodeIds.indexOf(id) !== -1) forest.selectedNodeMap[id] === true
                selectedNodeMap: C()
              },
              // States of root options.
              rootOptionsStates: de(),
              localSearch: {
                // Has user entered any query to search local options?
                active: !1,
                // Has any options matched the search query?
                noResults: !0,
                // <id, countObject> map for counting matched children/descendants.
                countMap: C()
              },
              // <searchQuery, remoteSearchEntry> map.
              remoteSearch: C()
            };
          },
          computed: {
            /* eslint-disable valid-jsdoc */
            /**
             * Normalized nodes that have been selected.
             * @type {node[]}
             */
            selectedNodes: function() {
              return this.forest.selectedNodeIds.map(this.getNode);
            },
            /**
             * Id list of selected nodes with `sortValueBy` prop applied.
             * @type {nodeId[]}
             */
            internalValue: function() {
              var t = this, n;
              if (this.single || this.flat || this.disableBranchNodes || this.valueConsistsOf === Je)
                n = this.forest.selectedNodeIds.slice();
              else if (this.valueConsistsOf === De)
                n = this.forest.selectedNodeIds.filter(function(x) {
                  var V = t.getNode(x);
                  return V.isRootNode ? !0 : !t.isSelected(V.parentNode);
                });
              else if (this.valueConsistsOf === He)
                n = this.forest.selectedNodeIds.filter(function(x) {
                  var V = t.getNode(x);
                  return V.isLeaf ? !0 : V.children.length === 0;
                });
              else if (this.valueConsistsOf === Ze) {
                var f, b = [];
                n = this.forest.selectedNodeIds.slice(), this.selectedNodes.forEach(function(x) {
                  x.ancestors.forEach(function(V) {
                    w(b, V.id) || w(n, V.id) || b.push(V.id);
                  });
                }), (f = n).push.apply(f, b);
              }
              return this.sortValueBy === ct ? n.sort(function(x, V) {
                return X(t.getNode(x), t.getNode(V));
              }) : this.sortValueBy === ut && n.sort(function(x, V) {
                return le(t.getNode(x), t.getNode(V));
              }), n;
            },
            /**
             * Has any option been selected?
             * @type {boolean}
             */
            hasValue: function() {
              return this.internalValue.length > 0;
            },
            /**
             * Single-select mode?
             * @type {boolean}
             */
            single: function() {
              return !this.multiple;
            },
            /**
             * Id list of nodes displayed in the menu. Nodes that are considered NOT visible:
             *   - descendants of a collapsed branch node
             *   - in local search mode, nodes that are not matched, unless
             *       - it's a branch node and has matched descendants
             *       - it's a leaf node and its parent node is explicitly set to show all children
             * @type {id[]}
             */
            visibleOptionIds: function() {
              var t = this, n = [];
              return this.traverseAllNodesByIndex(function(f) {
                if ((!t.localSearch.active || t.shouldOptionBeIncludedInSearchResult(f)) && n.push(f.id), f.isBranch && !t.shouldExpand(f))
                  return !1;
              }), n;
            },
            /**
             * Has any option should be displayed in the menu?
             * @type {boolean}
             */
            hasVisibleOptions: function() {
              return this.visibleOptionIds.length !== 0;
            },
            /**
             * Should show children count when searching?
             * @type {boolean}
             */
            showCountOnSearchComputed: function() {
              return typeof this.showCountOnSearch == "boolean" ? this.showCountOnSearch : this.showCount;
            },
            /**
             * Is there any branch node?
             * @type {boolean}
             */
            hasBranchNodes: function() {
              return this.forest.normalizedOptions.some(function(t) {
                return t.isBranch;
              });
            },
            shouldFlattenOptions: function() {
              return this.localSearch.active && this.flattenSearchResults;
            }
            /* eslint-enable valid-jsdoc */
          },
          watch: {
            alwaysOpen: function(t) {
              t ? this.openMenu() : this.closeMenu();
            },
            branchNodesFirst: function() {
              this.initialize();
            },
            disabled: function(t) {
              t && this.menu.isOpen ? this.closeMenu() : !t && !this.menu.isOpen && this.alwaysOpen && this.openMenu();
            },
            flat: function() {
              this.initialize();
            },
            internalValue: function(t, n) {
              var f = M(t, n);
              f && this.$emit("update:modelValue", this.getValue(), this.getInstanceId());
            },
            matchKeys: function() {
              this.initialize();
            },
            multiple: function(t) {
              t && this.buildForestState();
            },
            options: {
              handler: function() {
                this.async || (this.initialize(), this.rootOptionsStates.isLoaded = Array.isArray(this.options));
              },
              deep: !0,
              immediate: !0
            },
            "trigger.searchQuery": function() {
              this.async ? this.handleRemoteSearch() : this.handleLocalSearch(), this.$emit("search-change", this.trigger.searchQuery, this.getInstanceId());
            },
            value: function() {
              var t = this.extractCheckedNodeIdsFromValue(), n = M(t, this.internalValue);
              n && this.fixSelectedNodeIds(t);
            }
          },
          methods: {
            verifyProps: function() {
              var t = this;
              if (G(function() {
                return t.async ? t.searchable : !0;
              }, function() {
                return 'For async search mode, the value of "searchable" prop must be true.';
              }), this.options == null && !this.loadOptions && G(function() {
                return !1;
              }, function() {
                return 'Are you meant to dynamically load options? You need to use "loadOptions" prop.';
              }), this.flat && G(function() {
                return t.multiple;
              }, function() {
                return 'You are using flat mode. But you forgot to add "multiple=true"?';
              }), !this.flat) {
                var n = ["autoSelectAncestors", "autoSelectDescendants", "autoDeselectAncestors", "autoDeselectDescendants"];
                n.forEach(function(f) {
                  G(function() {
                    return !t[f];
                  }, function() {
                    return '"'.concat(f, '" only applies to flat mode.');
                  });
                });
              }
            },
            resetFlags: function() {
              this._blurOnSelect = !1;
            },
            initialize: function() {
              var t = this.async ? this.getRemoteSearchEntry().options : this.options;
              if (Array.isArray(t)) {
                var n = this.forest.nodeMap;
                this.forest.nodeMap = C(), this.keepDataOfSelectedNodes(n), this.forest.normalizedOptions = this.normalize(Se, t, n), this.fixSelectedNodeIds(this.internalValue);
              } else
                this.forest.normalizedOptions = [];
            },
            getInstanceId: function() {
              return this.instanceId == null ? this.id : this.instanceId;
            },
            getValue: function() {
              var t = this;
              if (this.valueFormat === "id")
                return this.multiple ? this.internalValue.slice() : this.internalValue[0];
              var n = this.internalValue.map(function(f) {
                return t.getNode(f).raw;
              });
              return this.multiple ? n : n[0];
            },
            getNode: function(t) {
              return G(function() {
                return t != null;
              }, function() {
                return "Invalid node id: ".concat(t);
              }), t == null ? null : t in this.forest.nodeMap ? this.forest.nodeMap[t] : this.createFallbackNode(t);
            },
            createFallbackNode: function(t) {
              var n = this.extractNodeFromValue(t), f = this.enhancedNormalizer(n).label || "".concat(t, " (unknown)"), b = {
                id: t,
                label: f,
                ancestors: [],
                parentNode: Se,
                isFallbackNode: !0,
                isRootNode: !0,
                isLeaf: !0,
                isBranch: !1,
                isDisabled: !1,
                isNew: !1,
                index: [-1],
                level: 0,
                raw: n
              };
              return this.forest.nodeMap[t] = b;
            },
            extractCheckedNodeIdsFromValue: function() {
              var t = this;
              return this.modelValue == null ? [] : this.valueFormat === "id" ? this.multiple ? this.modelValue.slice() : [this.modelValue] : (this.multiple ? this.modelValue : [this.modelValue]).map(function(n) {
                return t.enhancedNormalizer(n);
              }).map(function(n) {
                return n.id;
              });
            },
            extractNodeFromValue: function(t) {
              var n = this, f = {
                id: t
              };
              if (this.valueFormat === "id")
                return f;
              var b = this.multiple ? Array.isArray(this.modelValue) ? this.modelValue : [] : this.modelValue ? [this.modelValue] : [], x = J(b, function(V) {
                return V && n.enhancedNormalizer(V).id === t;
              });
              return x || f;
            },
            fixSelectedNodeIds: function(t) {
              var n = this, f = [];
              if (this.single || this.flat || this.disableBranchNodes || this.valueConsistsOf === Je)
                f = t;
              else if (this.valueConsistsOf === De)
                t.forEach(function(Oe) {
                  f.push(Oe);
                  var Pe = n.getNode(Oe);
                  Pe.isBranch && n.traverseDescendantsBFS(Pe, function(Ue) {
                    f.push(Ue.id);
                  });
                });
              else if (this.valueConsistsOf === He)
                for (var b = C(), x = t.slice(); x.length; ) {
                  var V = x.shift(), Q = this.getNode(V);
                  f.push(V), !Q.isRootNode && (Q.parentNode.id in b || (b[Q.parentNode.id] = Q.parentNode.children.length), --b[Q.parentNode.id] === 0 && x.push(Q.parentNode.id));
                }
              else if (this.valueConsistsOf === Ze)
                for (var ae = C(), ce = t.filter(function(Oe) {
                  var Pe = n.getNode(Oe);
                  return Pe.isLeaf || Pe.children.length === 0;
                }); ce.length; ) {
                  var he = ce.shift(), re = this.getNode(he);
                  f.push(he), !re.isRootNode && (re.parentNode.id in ae || (ae[re.parentNode.id] = re.parentNode.children.length), --ae[re.parentNode.id] === 0 && ce.push(re.parentNode.id));
                }
              var pe = M(this.forest.selectedNodeIds, f);
              pe && (this.forest.selectedNodeIds = f), this.buildForestState();
            },
            keepDataOfSelectedNodes: function(t) {
              var n = this;
              this.forest.selectedNodeIds.forEach(function(f) {
                if (t[f]) {
                  var b = B(B({}, t[f]), {}, {
                    isFallbackNode: !0
                  });
                  n.forest.nodeMap[f] = b;
                }
              });
            },
            isSelected: function(t) {
              return this.forest.selectedNodeMap[t.id] === !0;
            },
            traverseDescendantsBFS: function(t, n) {
              if (t.isBranch)
                for (var f = t.children.slice(); f.length; ) {
                  var b = f[0];
                  b.isBranch && f.push.apply(f, A(b.children)), n(b), f.shift();
                }
            },
            traverseDescendantsDFS: function(t, n) {
              var f = this;
              t.isBranch && t.children.forEach(function(b) {
                f.traverseDescendantsDFS(b, n), n(b);
              });
            },
            traverseAllNodesDFS: function(t) {
              var n = this;
              this.forest.normalizedOptions.forEach(function(f) {
                n.traverseDescendantsDFS(f, t), t(f);
              });
            },
            traverseAllNodesByIndex: function(t) {
              var n = function f(b) {
                b.children.forEach(function(x) {
                  t(x) !== !1 && x.isBranch && f(x);
                });
              };
              n({
                children: this.forest.normalizedOptions
              });
            },
            toggleClickOutsideEvent: function(t) {
              t ? document.addEventListener("mousedown", this.handleClickOutside, !1) : document.removeEventListener("mousedown", this.handleClickOutside, !1);
            },
            getValueContainer: function() {
              return this.$refs.control.$refs["value-container"];
            },
            getInput: function() {
              return this.getValueContainer().$refs.input;
            },
            focusInput: function() {
              this.getInput().focus();
            },
            blurInput: function() {
              this.getInput().blur();
            },
            handleMouseDown: z(function(t) {
              if (t.preventDefault(), t.stopPropagation(), !this.disabled) {
                var n = this.getValueContainer().$el.contains(t.target);
                n && !this.menu.isOpen && (this.openOnClick || this.trigger.isFocused) && this.openMenu(), this._blurOnSelect ? this.blurInput() : this.focusInput(), this.resetFlags();
              }
            }),
            handleClickOutside: function(t) {
              this.$refs.wrapper && !this.$refs.wrapper.contains(t.target) && (this.blurInput(), this.closeMenu());
            },
            handleLocalSearch: function() {
              var t = this, n = this.trigger.searchQuery, f = function() {
                return t.resetHighlightedOptionWhenNecessary(!0);
              };
              if (!n)
                return this.localSearch.active = !1, f();
              this.localSearch.active = !0, this.localSearch.noResults = !0, this.traverseAllNodesDFS(function(V) {
                if (V.isBranch) {
                  var Q;
                  V.isExpandedOnSearch = !1, V.showAllChildrenOnSearch = !1, V.isMatched = !1, V.hasMatchedDescendants = !1, t.localSearch.countMap[V.id] = (Q = {}, m(Q, Le, 0), m(Q, je, 0), m(Q, Ae, 0), m(Q, Fe, 0), Q);
                }
              });
              var b = n.trim().toLocaleLowerCase(), x = b.replace(/\s+/g, " ").split(" ");
              this.traverseAllNodesDFS(function(V) {
                t.searchNested && x.length > 1 ? V.isMatched = x.every(function(Q) {
                  return Jt(!1, Q, V.nestedSearchLabel);
                }) : V.isMatched = t.matchKeys.some(function(Q) {
                  return Jt(!t.disableFuzzyMatching, b, V.lowerCased[Q]);
                }), V.isMatched && (t.localSearch.noResults = !1, V.ancestors.forEach(function(Q) {
                  return t.localSearch.countMap[Q.id][je]++;
                }), V.isLeaf && V.ancestors.forEach(function(Q) {
                  return t.localSearch.countMap[Q.id][Fe]++;
                }), V.parentNode !== Se && (t.localSearch.countMap[V.parentNode.id][Le] += 1, V.isLeaf && (t.localSearch.countMap[V.parentNode.id][Ae] += 1))), (V.isMatched || V.isBranch && V.isExpandedOnSearch) && V.parentNode !== Se && (V.parentNode.isExpandedOnSearch = !0, V.parentNode.hasMatchedDescendants = !0);
              }), f();
            },
            handleRemoteSearch: function() {
              var t = this, n = this.trigger.searchQuery, f = this.getRemoteSearchEntry(), b = function() {
                t.initialize(), t.resetHighlightedOptionWhenNecessary(!0);
              };
              if ((n === "" || this.cacheOptions) && f.isLoaded)
                return b();
              this.callLoadOptionsProp({
                action: st,
                args: {
                  searchQuery: n
                },
                isPending: function() {
                  return f.isLoading;
                },
                start: function() {
                  f.isLoading = !0, f.isLoaded = !1, f.loadingError = "";
                },
                succeed: function(V) {
                  f.isLoaded = !0, f.options = V, t.trigger.searchQuery === n && b();
                },
                fail: function(V) {
                  f.loadingError = Et(V);
                },
                end: function() {
                  f.isLoading = !1;
                }
              });
            },
            getRemoteSearchEntry: function() {
              var t = this, n = this.trigger.searchQuery, f = this.remoteSearch[n] || B(B({}, de()), {}, {
                options: []
              });
              if (this.$watch(function() {
                return f.options;
              }, function() {
                t.trigger.searchQuery === n && t.initialize();
              }, {
                deep: !0
              }), n === "") {
                if (Array.isArray(this.defaultOptions))
                  return f.options = this.defaultOptions, f.isLoaded = !0, f;
                if (this.defaultOptions !== !0)
                  return f.isLoaded = !0, f;
              }
              return this.remoteSearch[n] || (this.remoteSearch[n] = f), f;
            },
            shouldExpand: function(t) {
              return this.localSearch.active ? t.isExpandedOnSearch : t.isExpanded;
            },
            shouldOptionBeIncludedInSearchResult: function(t) {
              return !!(t.isMatched || t.isBranch && t.hasMatchedDescendants && !this.flattenSearchResults || !t.isRootNode && t.parentNode.showAllChildrenOnSearch);
            },
            shouldShowOptionInMenu: function(t) {
              return !(this.localSearch.active && !this.shouldOptionBeIncludedInSearchResult(t));
            },
            getControl: function() {
              return this.$refs.control.$el;
            },
            getMenu: function() {
              var t = this.appendToBody ? this.$refs.portal.portalTarget : this, n = t.$refs.menu.$refs.menu;
              return n && n.nodeName !== "#comment" ? n : null;
            },
            setCurrentHighlightedOption: function(t) {
              var n = this.menu.current;
              n != null && n in this.forest.nodeMap && (this.forest.nodeMap[n].isHighlighted = !1), this.menu.current = t?.id;
            },
            resetHighlightedOptionWhenNecessary: function() {
              var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !1, n = this.menu.current;
              (t || n == null || !(n in this.forest.nodeMap) || !this.shouldShowOptionInMenu(this.getNode(n))) && this.highlightFirstOption();
            },
            highlightFirstOption: function() {
              if (this.hasVisibleOptions) {
                var t = this.visibleOptionIds[0];
                this.setCurrentHighlightedOption(this.getNode(t));
              }
            },
            highlightPrevOption: function() {
              if (this.hasVisibleOptions) {
                var t = this.visibleOptionIds.indexOf(this.menu.current) - 1;
                if (t === -1) return this.highlightLastOption();
                this.setCurrentHighlightedOption(this.getNode(this.visibleOptionIds[t]));
              }
            },
            highlightNextOption: function() {
              if (this.hasVisibleOptions) {
                var t = this.visibleOptionIds.indexOf(this.menu.current) + 1;
                if (t === this.visibleOptionIds.length) return this.highlightFirstOption();
                this.setCurrentHighlightedOption(this.getNode(this.visibleOptionIds[t]));
              }
            },
            highlightLastOption: function() {
              if (this.hasVisibleOptions) {
                var t = se()(this.visibleOptionIds);
                this.setCurrentHighlightedOption(this.getNode(t));
              }
            },
            resetSearchQuery: function() {
              this.trigger.searchQuery = "";
            },
            closeMenu: function() {
              !this.menu.isOpen || !this.disabled && this.alwaysOpen || (this.saveMenuScrollPosition(), this.menu.isOpen = !1, this.toggleClickOutsideEvent(!1), this.resetSearchQuery(), this.$emit("close", this.getValue(), this.getInstanceId()));
            },
            openMenu: function() {
              this.disabled || this.menu.isOpen || (this.menu.isOpen = !0, this.$nextTick(this.resetHighlightedOptionWhenNecessary), this.$nextTick(this.restoreMenuScrollPosition), !this.options && !this.async && this.loadRootOptions(), this.toggleClickOutsideEvent(!0), this.$emit("open", this.getInstanceId()));
            },
            toggleMenu: function() {
              this.menu.isOpen ? this.closeMenu() : this.openMenu();
            },
            toggleExpanded: function(t) {
              var n;
              this.localSearch.active ? (n = t.isExpandedOnSearch = !t.isExpandedOnSearch, n && (t.showAllChildrenOnSearch = !0)) : n = t.isExpanded = !t.isExpanded, n && !t.childrenStates.isLoaded && this.loadChildrenOptions(t);
            },
            buildForestState: function() {
              var t = this, n = C();
              this.forest.selectedNodeIds.forEach(function(b) {
                n[b] = !0;
              }), this.forest.selectedNodeMap = n;
              var f = C();
              this.multiple && (this.traverseAllNodesByIndex(function(b) {
                f[b.id] = me;
              }), this.selectedNodes.forEach(function(b) {
                f[b.id] = at, !t.flat && !t.disableBranchNodes && b.ancestors.forEach(function(x) {
                  t.isSelected(x) || (f[x.id] = rt);
                });
              })), this.forest.checkedStateMap = f;
            },
            enhancedNormalizer: function(t) {
              return B(B({}, t), this.normalizer(t, this.getInstanceId()));
            },
            normalize: function(t, n, f) {
              var b = this, x = n.map(function(ae) {
                return [b.enhancedNormalizer(ae), ae];
              }).map(function(ae, ce) {
                var he = g(ae, 2), re = he[0], pe = he[1];
                b.checkDuplication(re), b.verifyNodeShape(re);
                var Oe = re.id, Pe = re.label, Ue = re.children, Mt = re.isDefaultExpanded, Ve = t === Se, fn = Ve ? 0 : t.level + 1, Rt = Array.isArray(Ue) || Ue === null, wt = !Rt, vn = !!re.isDisabled || !b.flat && !Ve && t.isDisabled, yr = !!re.isNew, jt = b.matchKeys.reduce(function(ze, hn) {
                  return B(B({}, ze), {}, m({}, hn, Me(re[hn]).toLocaleLowerCase()));
                }, {}), br = Ve ? jt.label : t.nestedSearchLabel + " " + jt.label;
                b.forest.nodeMap[Oe] = C();
                var Y = b.forest.nodeMap[Oe];
                if (Y.id = Oe, Y.label = Pe, Y.level = fn, Y.ancestors = Ve ? [] : [t].concat(t.ancestors), Y.index = (Ve ? [] : t.index).concat(ce), Y.parentNode = t, Y.lowerCased = jt, Y.nestedSearchLabel = br, Y.isDisabled = vn, Y.isNew = yr, Y.isMatched = !1, Y.isHighlighted = !1, Y.isBranch = Rt, Y.isLeaf = wt, Y.isRootNode = Ve, Y.raw = pe, Rt) {
                  var We, ht = Array.isArray(Ue);
                  Y.childrenStates = B(B({}, de()), {}, {
                    isLoaded: ht
                  }), Y.isExpanded = typeof Mt == "boolean" ? Mt : fn < b.defaultExpandLevel, Y.hasMatchedDescendants = !1, Y.hasDisabledDescendants = !1, Y.isExpandedOnSearch = !1, Y.showAllChildrenOnSearch = !1, Y.count = (We = {}, m(We, Le, 0), m(We, je, 0), m(We, Ae, 0), m(We, Fe, 0), We), Y.children = ht ? b.normalize(Y, Ue, f) : [], Mt === !0 && Y.ancestors.forEach(function(ze) {
                    ze.isExpanded = !0;
                  }), !ht && typeof b.loadOptions != "function" ? G(function() {
                    return !1;
                  }, function() {
                    return 'Unloaded branch node detected. "loadOptions" prop is required to load its children.';
                  }) : !ht && Y.isExpanded && b.loadChildrenOptions(Y);
                }
                if (Y.ancestors.forEach(function(ze) {
                  return ze.count[je]++;
                }), wt && Y.ancestors.forEach(function(ze) {
                  return ze.count[Fe]++;
                }), Ve || (t.count[Le] += 1, wt && (t.count[Ae] += 1), vn && (t.hasDisabledDescendants = !0)), f && f[Oe]) {
                  var Re = f[Oe];
                  Y.isMatched = Re.isMatched, Y.showAllChildrenOnSearch = Re.showAllChildrenOnSearch, Y.isHighlighted = Re.isHighlighted, Re.isBranch && Y.isBranch && (Y.isExpanded = Re.isExpanded, Y.isExpandedOnSearch = Re.isExpandedOnSearch, Re.childrenStates.isLoaded && !Y.childrenStates.isLoaded ? Y.isExpanded = !1 : Y.childrenStates = B({}, Re.childrenStates));
                }
                return Y;
              });
              if (this.branchNodesFirst) {
                var V = x.filter(function(ae) {
                  return ae.isBranch;
                }), Q = x.filter(function(ae) {
                  return ae.isLeaf;
                });
                x = V.concat(Q);
              }
              return x;
            },
            loadRootOptions: function() {
              var t = this;
              this.callLoadOptionsProp({
                action: ot,
                isPending: function() {
                  return t.rootOptionsStates.isLoading;
                },
                start: function() {
                  t.rootOptionsStates.isLoading = !0, t.rootOptionsStates.loadingError = "";
                },
                succeed: function() {
                  t.rootOptionsStates.isLoaded = !0, t.$nextTick(function() {
                    t.resetHighlightedOptionWhenNecessary(!0);
                  });
                },
                fail: function(f) {
                  t.rootOptionsStates.loadingError = Et(f);
                },
                end: function() {
                  t.rootOptionsStates.isLoading = !1;
                }
              });
            },
            loadChildrenOptions: function(t) {
              var n = this, f = t.id, b = t.raw;
              this.callLoadOptionsProp({
                action: it,
                args: {
                  // We always pass the raw node instead of the normalized node to any
                  // callback provided by the user of this component.
                  // Because the shape of the raw node is more likely to be closing to
                  // what the back-end API service of the application needs.
                  parentNode: b
                },
                isPending: function() {
                  return n.getNode(f).childrenStates.isLoading;
                },
                start: function() {
                  n.getNode(f).childrenStates.isLoading = !0, n.getNode(f).childrenStates.loadingError = "";
                },
                succeed: function() {
                  n.getNode(f).childrenStates.isLoaded = !0;
                },
                fail: function(V) {
                  n.getNode(f).childrenStates.loadingError = Et(V);
                },
                end: function() {
                  n.getNode(f).childrenStates.isLoading = !1;
                }
              });
            },
            callLoadOptionsProp: function(t) {
              var n = t.action, f = t.args, b = t.isPending, x = t.start, V = t.succeed, Q = t.fail, ae = t.end;
              if (!(!this.loadOptions || b())) {
                x();
                var ce = _()(function(re, pe) {
                  re ? Q(re) : V(pe), ae();
                }), he = this.loadOptions(B(B({
                  id: this.getInstanceId(),
                  instanceId: this.getInstanceId(),
                  action: n
                }, f), {}, {
                  callback: ce
                }));
                Ce()(he) && he.then(function() {
                  ce();
                }, function(re) {
                  ce(re);
                }).catch(function(re) {
                  console.error(re);
                });
              }
            },
            checkDuplication: function(t) {
              var n = this;
              G(function() {
                return !(t.id in n.forest.nodeMap && !n.forest.nodeMap[t.id].isFallbackNode);
              }, function() {
                return "Detected duplicate presence of node id ".concat(JSON.stringify(t.id), ". ") + 'Their labels are "'.concat(n.forest.nodeMap[t.id].label, '" and "').concat(t.label, '" respectively.');
              });
            },
            verifyNodeShape: function(t) {
              G(function() {
                return !(t.children === void 0 && t.isBranch === !0);
              }, function() {
                return "Are you meant to declare an unloaded branch node? `isBranch: true` is no longer supported, please use `children: null` instead.";
              });
            },
            select: function(t) {
              if (!(this.disabled || t.isDisabled)) {
                this.single && this.clear();
                var n = this.multiple && !this.flat ? this.forest.checkedStateMap[t.id] === me : !this.isSelected(t);
                n ? this._selectNode(t) : this._deselectNode(t), this.buildForestState(), n ? this.$emit("select", t.raw, this.getInstanceId()) : this.$emit("deselect", t.raw, this.getInstanceId()), this.localSearch.active && n && (this.single || this.clearOnSelect) && this.resetSearchQuery(), this.single && this.closeOnSelect && (this.closeMenu(), this.searchable && (this._blurOnSelect = !0));
              }
            },
            clear: function() {
              var t = this;
              this.hasValue && (this.single || this.allowClearingDisabled ? this.forest.selectedNodeIds = [] : this.forest.selectedNodeIds = this.forest.selectedNodeIds.filter(function(n) {
                return t.getNode(n).isDisabled;
              }), this.buildForestState());
            },
            // This is meant to be called only by `select()`.
            _selectNode: function(t) {
              var n = this;
              if (this.single || this.disableBranchNodes)
                return this.addValue(t);
              if (this.flat) {
                this.addValue(t), this.autoSelectAncestors ? t.ancestors.forEach(function(x) {
                  !n.isSelected(x) && !x.isDisabled && n.addValue(x);
                }) : this.autoSelectDescendants && this.traverseDescendantsBFS(t, function(x) {
                  !n.isSelected(x) && !x.isDisabled && n.addValue(x);
                });
                return;
              }
              var f = t.isLeaf || /* node.isBranch && */
              !t.hasDisabledDescendants || /* node.isBranch && */
              this.allowSelectingDisabledDescendants;
              if (f && this.addValue(t), t.isBranch && this.traverseDescendantsBFS(t, function(x) {
                (!x.isDisabled || n.allowSelectingDisabledDescendants) && n.addValue(x);
              }), f)
                for (var b = t; (b = b.parentNode) !== Se && b.children.every(this.isSelected); )
                  this.addValue(b);
            },
            // This is meant to be called only by `select()`.
            _deselectNode: function(t) {
              var n = this;
              if (this.disableBranchNodes)
                return this.removeValue(t);
              if (this.flat) {
                this.removeValue(t), this.autoDeselectAncestors ? t.ancestors.forEach(function(x) {
                  n.isSelected(x) && !x.isDisabled && n.removeValue(x);
                }) : this.autoDeselectDescendants && this.traverseDescendantsBFS(t, function(x) {
                  n.isSelected(x) && !x.isDisabled && n.removeValue(x);
                });
                return;
              }
              var f = !1;
              if (t.isBranch && this.traverseDescendantsDFS(t, function(x) {
                (!x.isDisabled || n.allowSelectingDisabledDescendants) && (n.removeValue(x), f = !0);
              }), t.isLeaf || /* node.isBranch && */
              f || /* node.isBranch && */
              t.children.length === 0) {
                this.removeValue(t);
                for (var b = t; (b = b.parentNode) !== Se && this.isSelected(b); )
                  this.removeValue(b);
              }
            },
            addValue: function(t) {
              this.forest.selectedNodeIds.push(t.id), this.forest.selectedNodeMap[t.id] = !0;
            },
            removeValue: function(t) {
              Ie(this.forest.selectedNodeIds, t.id), delete this.forest.selectedNodeMap[t.id];
            },
            removeLastValue: function() {
              if (this.hasValue) {
                if (this.single) return this.clear();
                var t = se()(this.internalValue), n = this.getNode(t);
                this.select(n);
              }
            },
            saveMenuScrollPosition: function() {
              var t = this.getMenu();
              t && (this.menu.lastScrollPosition = t.scrollTop);
            },
            restoreMenuScrollPosition: function() {
              var t = this.getMenu();
              t && (t.scrollTop = this.menu.lastScrollPosition);
            }
          },
          created: function() {
            this.verifyProps(), this.resetFlags();
          },
          mounted: function() {
            this.autoFocus && this.focusInput(), !this.options && !this.async && this.autoLoadRootOptions && this.loadRootOptions(), this.alwaysOpen && this.openMenu(), this.async && this.defaultOptions && this.handleRemoteSearch();
          },
          unmounted: function() {
            this.toggleClickOutsideEvent(!1);
          }
        };
        e("a15b");
        function In(s) {
          return typeof s == "string" ? s : s != null && !T(s) ? JSON.stringify(s) : "";
        }
        var Ln = Object(r.defineComponent)({
          name: "vue-treeselect--hidden-fields",
          inject: ["instance"],
          functional: !0,
          render: function(t) {
            var n = t.instance;
            if (!n.name || n.disabled || !n.hasValue) return null;
            var f = n.internalValue.map(In);
            return n.multiple && n.joinValues && (f = [f.join(n.delimiter)]), f.map(function(b, x) {
              return Object(r.createVNode)("input", {
                type: "hidden",
                name: n.name,
                value: b,
                key: "hidden-field-" + x
              }, null);
            });
          }
        }), An = Ln;
        e("d3b7"), e("25f0");
        var Mn = e("b047"), Rn = /* @__PURE__ */ e.n(Mn);
        e("3410"), e("b64b");
        function dt(s) {
          "@babel/helpers - typeof";
          return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? dt = function(n) {
            return typeof n;
          } : dt = function(n) {
            return n && typeof Symbol == "function" && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n;
          }, dt(s);
        }
        function qt(s) {
          return s == null || dt(s) !== "object" ? !1 : Object.getPrototypeOf(s) === Object.prototype;
        }
        function wn(s, t, n) {
          qt(n) ? (s[t] || (s[t] = {}), Nt(s[t], n)) : s[t] = n;
        }
        function Nt(s, t) {
          if (qt(t))
            for (var n = Object.keys(t), f = 0, b = n.length; f < b; f++)
              wn(s, n[f], t[n[f]]);
          return s;
        }
        function jn(s) {
          return typeof s == "function" || Object.prototype.toString.call(s) === "[object Object]" && !Object(r.isVNode)(s);
        }
        var Fn = [j.ENTER, j.END, j.HOME, j.ARROW_LEFT, j.ARROW_UP, j.ARROW_RIGHT, j.ARROW_DOWN], Dn = {
          name: "vue-treeselect--input",
          inject: ["instance"],
          data: function() {
            return {
              inputWidth: Z,
              value: ""
            };
          },
          computed: {
            needAutoSize: function() {
              var t = this.instance;
              return t.searchable && !t.disabled && t.multiple;
            },
            inputStyle: function() {
              return {
                width: this.needAutoSize ? "".concat(this.inputWidth, "px") : null
              };
            }
          },
          watch: {
            "instance.trigger.searchQuery": function(t) {
              this.value = t;
            },
            value: function() {
              this.needAutoSize && this.$nextTick(this.updateInputWidth);
            }
          },
          created: function() {
            this.debouncedCallback = Rn()(this.updateSearchQuery, $, {
              leading: !0,
              trailing: !0
            });
          },
          methods: {
            clear: function() {
              this.onInput({
                target: {
                  value: ""
                }
              });
            },
            focus: function() {
              var t = this.instance;
              t.disabled || this.$refs.input && this.$refs.input.focus();
            },
            blur: function() {
              this.$refs.input && this.$refs.input.blur();
            },
            onFocus: function() {
              var t = this.instance;
              t.trigger.isFocused = !0, t.openOnFocus && t.openMenu();
            },
            onBlur: function() {
              var t = this.instance, n = t.getMenu();
              if (n && document.activeElement === n)
                return this.focus();
              t.trigger.isFocused = !1, t.closeMenu();
            },
            onInput: function(t) {
              var n = t.target.value;
              this.value = n, n ? this.debouncedCallback() : (this.debouncedCallback.cancel(), this.updateSearchQuery());
            },
            // 用 keyUp 事件存在一个问题，删除输入框最后一个字符也会导致取消选中最后一项
            onKeyDown: function(t) {
              var n = this.instance, f = "which" in t ? t.which : (
                /* istanbul ignore next */
                t.keyCode
              );
              if (!(t.ctrlKey || t.shiftKey || t.altKey || t.metaKey)) {
                if (!n.menu.isOpen && w(Fn, f))
                  return t.preventDefault(), n.openMenu();
                switch (f) {
                  case j.BACKSPACE: {
                    n.backspaceRemoves && !this.value.length && n.removeLastValue();
                    break;
                  }
                  case j.ENTER: {
                    if (t.preventDefault(), n.menu.current === null) return;
                    var b = n.getNode(n.menu.current);
                    if (b.isBranch && n.disableBranchNodes) return;
                    n.select(b);
                    break;
                  }
                  case j.ESCAPE: {
                    this.value.length ? this.clear() : n.menu.isOpen && n.closeMenu();
                    break;
                  }
                  case j.END: {
                    t.preventDefault(), n.highlightLastOption();
                    break;
                  }
                  case j.HOME: {
                    t.preventDefault(), n.highlightFirstOption();
                    break;
                  }
                  case j.ARROW_LEFT: {
                    var x = n.getNode(n.menu.current);
                    x.isBranch && n.shouldExpand(x) ? (t.preventDefault(), n.toggleExpanded(x)) : !x.isRootNode && (x.isLeaf || x.isBranch && !n.shouldExpand(x)) && (t.preventDefault(), n.setCurrentHighlightedOption(x.parentNode));
                    break;
                  }
                  case j.ARROW_UP: {
                    t.preventDefault(), n.highlightPrevOption();
                    break;
                  }
                  case j.ARROW_RIGHT: {
                    var V = n.getNode(n.menu.current);
                    V.isBranch && !n.shouldExpand(V) && (t.preventDefault(), n.toggleExpanded(V));
                    break;
                  }
                  case j.ARROW_DOWN: {
                    t.preventDefault(), n.highlightNextOption();
                    break;
                  }
                  case j.DELETE: {
                    n.deleteRemoves && !this.value.length && n.removeLastValue();
                    break;
                  }
                  default:
                    n.openMenu();
                }
              }
            },
            onMouseDown: function(t) {
              this.value.length && t.stopPropagation();
            },
            renderInputContainer: function() {
              var t = this.instance, n = {}, f = [];
              return t.searchable && !t.disabled && (f.push(this.renderInput()), this.needAutoSize && f.push(this.renderSizer())), t.searchable || Nt(n, {
                on: {
                  focus: this.onFocus,
                  blur: this.onBlur,
                  keydown: this.onKeyDown
                },
                ref: "input"
              }), !t.searchable && !t.disabled && Nt(n, {
                attrs: {
                  tabIndex: t.tabIndex
                }
              }), Object(r.createVNode)("div", Object(r.mergeProps)({
                class: "vue-treeselect__input-container"
              }, n), jn(f) ? f : {
                default: function() {
                  return [f];
                }
              });
            },
            renderInput: function() {
              var t = this.instance;
              return Object(r.createVNode)("input", {
                ref: "input",
                class: "vue-treeselect__input",
                type: "text",
                autocomplete: "off",
                tabIndex: t.tabIndex,
                required: t.required && !t.hasValue,
                value: this.value,
                style: this.inputStyle,
                onFocus: this.onFocus,
                onInput: this.onInput,
                onBlur: this.onBlur,
                onKeydown: this.onKeyDown,
                onMousedown: this.onMouseDown
              }, null);
            },
            renderSizer: function() {
              return Object(r.createVNode)("div", {
                ref: "sizer",
                class: "vue-treeselect__sizer"
              }, [this.value]);
            },
            updateInputWidth: function() {
              this.inputWidth = Math.max(Z, this.$refs.sizer.scrollWidth + 15);
            },
            updateSearchQuery: function() {
              var t = this.instance;
              t.trigger.searchQuery = this.value;
            }
          },
          render: function() {
            return this.renderInputContainer();
          }
        }, _t = Dn, Pn = {
          name: "vue-treeselect--placeholder",
          inject: ["instance"],
          render: function() {
            var t = this.instance, n = {
              "vue-treeselect__placeholder": !0,
              "vue-treeselect-helper-zoom-effect-off": !0,
              "vue-treeselect-helper-hide": t.hasValue || t.trigger.searchQuery
            };
            return Object(r.createVNode)("div", {
              class: n
            }, [t.placeholder]);
          }
        }, en = Pn, Vn = {
          name: "vue-treeselect--single-value",
          inject: ["instance"],
          methods: {
            renderSingleValueLabel: function() {
              var t = this.instance, n = t.selectedNodes[0], f = t.$slots["value-label"];
              return f ? f({
                node: n
              }) : n.label;
            }
          },
          render: function() {
            var t = this.instance, n = this.$parent.renderValueContainer, f = t.hasValue && !t.trigger.searchQuery;
            return n([f && Object(r.createVNode)("div", {
              class: "vue-treeselect__single-value"
            }, [this.renderSingleValueLabel()]), Object(r.createVNode)(en, null, null), Object(r.createVNode)(_t, {
              ref: "input"
            }, null)]);
          }
        }, zn = Vn, Bn = {
          xmlns: "http://www.w3.org/2000/svg",
          viewBox: "0 0 348.333 348.333"
        }, $n = /* @__PURE__ */ Object(r.createVNode)("path", {
          d: "M336.559 68.611L231.016 174.165l105.543 105.549c15.699 15.705 15.699 41.145 0 56.85-7.844 7.844-18.128 11.769-28.407 11.769-10.296 0-20.581-3.919-28.419-11.769L174.167 231.003 68.609 336.563c-7.843 7.844-18.128 11.769-28.416 11.769-10.285 0-20.563-3.919-28.413-11.769-15.699-15.698-15.699-41.139 0-56.85l105.54-105.549L11.774 68.611c-15.699-15.699-15.699-41.145 0-56.844 15.696-15.687 41.127-15.687 56.829 0l105.563 105.554L279.721 11.767c15.705-15.687 41.139-15.687 56.832 0 15.705 15.699 15.705 41.145.006 56.844z"
        }, null, -1);
        function Hn(s, t, n, f, b, x) {
          return Object(r.openBlock)(), Object(r.createBlock)("svg", Bn, [$n]);
        }
        var tn = {
          name: "vue-treeselect--x"
        };
        tn.render = Hn;
        var nn = tn;
        function Un(s) {
          return typeof s == "function" || Object.prototype.toString.call(s) === "[object Object]" && !Object(r.isVNode)(s);
        }
        var Wn = {
          name: "vue-treeselect--multi-value-item",
          inject: ["instance"],
          props: {
            node: {
              type: Object,
              required: !0
            }
          },
          methods: {
            handleMouseDown: z(function() {
              var t = this.instance, n = this.node;
              t.select(n);
            })
          },
          render: function() {
            var t = this.instance, n = this.node, f = {
              "vue-treeselect__multi-value-item": !0,
              "vue-treeselect__multi-value-item-disabled": n.isDisabled,
              "vue-treeselect__multi-value-item-new": n.isNew
            }, b = t.$slots["value-label"], x = b ? b({
              node: n
            }) : n.label;
            return Object(r.createVNode)("div", {
              class: "vue-treeselect__multi-value-item-container"
            }, [Object(r.createVNode)("div", {
              class: f,
              onMousedown: this.handleMouseDown
            }, [Object(r.createVNode)("span", {
              class: "vue-treeselect__multi-value-label"
            }, Un(x) ? x : {
              default: function() {
                return [x];
              }
            }), Object(r.createVNode)("span", {
              class: "vue-treeselect__icon vue-treeselect__value-remove"
            }, [Object(r.createVNode)(nn, null, null)])])]);
          }
        }, Gn = Wn, Kn = {
          name: "vue-treeselect--multi-value",
          inject: ["instance"],
          methods: {
            renderMultiValueItems: function() {
              var t = this.instance;
              return t.internalValue.slice(0, t.limit).map(t.getNode).map(function(n) {
                return Object(r.createVNode)(Gn, {
                  key: "multi-value-item-".concat(n.id),
                  node: n
                }, null);
              });
            },
            renderExceedLimitTip: function() {
              var t = this.instance, n = t.internalValue.length - t.limit;
              return n <= 0 ? null : Object(r.createVNode)("div", {
                class: "vue-treeselect__limit-tip vue-treeselect-helper-zoom-effect-off",
                key: "exceed-limit-tip"
              }, [Object(r.createVNode)("span", {
                class: "vue-treeselect__limit-tip-text"
              }, [t.limitText(n)])]);
            }
          },
          render: function() {
            var t = this, n = this.$parent.renderValueContainer;
            return n(Object(r.createVNode)(Object(r.resolveComponent)("transition-group"), {
              class: "vue-treeselect__multi-value",
              tag: "div",
              name: "vue-treeselect__multi-value-item--transition",
              appear: !0
            }, {
              default: function() {
                return [t.renderMultiValueItems(), t.renderExceedLimitTip(), Object(r.createVNode)(en, {
                  key: "placeholder"
                }, null), Object(r.createVNode)(_t, {
                  ref: "input",
                  key: "input"
                }, null)];
              }
            }));
          }
        }, Xn = Kn, Qn = {
          xmlns: "http://www.w3.org/2000/svg",
          viewBox: "0 0 292.362 292.362"
        }, kn = /* @__PURE__ */ Object(r.createVNode)("path", {
          d: "M286.935 69.377c-3.614-3.617-7.898-5.424-12.848-5.424H18.274c-4.952 0-9.233 1.807-12.85 5.424C1.807 72.998 0 77.279 0 82.228c0 4.948 1.807 9.229 5.424 12.847l127.907 127.907c3.621 3.617 7.902 5.428 12.85 5.428s9.233-1.811 12.847-5.428L286.935 95.074c3.613-3.617 5.427-7.898 5.427-12.847 0-4.948-1.814-9.229-5.427-12.85z"
        }, null, -1);
        function Yn(s, t, n, f, b, x) {
          return Object(r.openBlock)(), Object(r.createBlock)("svg", Qn, [kn]);
        }
        var rn = {
          name: "vue-treeselect--arrow"
        };
        rn.render = Yn;
        var an = rn;
        function Jn(s) {
          return typeof s == "function" || Object.prototype.toString.call(s) === "[object Object]" && !Object(r.isVNode)(s);
        }
        var Zn = {
          name: "vue-treeselect--control",
          inject: ["instance"],
          computed: {
            /* eslint-disable valid-jsdoc */
            /**
             * Should show the "×" button that resets value?
             * @return {boolean}
             */
            shouldShowX: function() {
              var t = this.instance;
              return t.clearable && !t.disabled && t.hasValue && (this.hasUndisabledValue || t.allowClearingDisabled);
            },
            /**
             * Should show the arrow button that toggles menu?
             * @return {boolean}
             */
            shouldShowArrow: function() {
              var t = this.instance;
              return t.alwaysOpen ? !t.menu.isOpen : !0;
            },
            /**
             * Has any undisabled option been selected?
             * @type {boolean}
             */
            hasUndisabledValue: function() {
              var t = this.instance;
              return t.hasValue && t.internalValue.some(function(n) {
                return !t.getNode(n).isDisabled;
              });
            }
            /* eslint-enable valid-jsdoc */
          },
          methods: {
            renderX: function() {
              var t = this.instance, n = t.multiple ? t.clearAllText : t.clearValueText;
              return this.shouldShowX ? Object(r.createVNode)("div", {
                class: "vue-treeselect__x-container",
                title: n,
                onMousedown: this.handleMouseDownOnX
              }, [Object(r.createVNode)(nn, {
                class: "vue-treeselect__x"
              }, null)]) : null;
            },
            renderArrow: function() {
              var t = this.instance, n = {
                "vue-treeselect__control-arrow": !0,
                "vue-treeselect__control-arrow--rotated": t.menu.isOpen
              };
              return this.shouldShowArrow ? Object(r.createVNode)("div", {
                class: "vue-treeselect__control-arrow-container",
                onMousedown: this.handleMouseDownOnArrow
              }, [Object(r.createVNode)(an, {
                class: n
              }, null)]) : null;
            },
            handleMouseDownOnX: z(function(t) {
              t.stopPropagation(), t.preventDefault();
              var n = this.instance, f = n.beforeClearAll(), b = function(V) {
                V && n.clear();
              };
              Ce()(f) ? f.then(b) : setTimeout(function() {
                return b(f);
              }, 0);
            }),
            handleMouseDownOnArrow: z(function(t) {
              t.preventDefault(), t.stopPropagation();
              var n = this.instance;
              n.focusInput(), n.toggleMenu();
            }),
            // This is meant to be called by child `<Value />` component.
            renderValueContainer: function(t) {
              return Object(r.createVNode)("div", {
                class: "vue-treeselect__value-container"
              }, Jn(t) ? t : {
                default: function() {
                  return [t];
                }
              });
            }
          },
          render: function() {
            var t = this.instance, n = t.single ? zn : Xn;
            return Object(r.createVNode)("div", {
              class: "vue-treeselect__control",
              onMousedown: t.handleMouseDown
            }, [Object(r.createVNode)(n, {
              ref: "value-container"
            }, null), this.renderX(), this.renderArrow()]);
          }
        }, qn = Zn, _n = function(s, t) {
          var n = document.createElement("_"), f = n.appendChild(document.createElement("_")), b = n.appendChild(document.createElement("_")), x = f.appendChild(document.createElement("_")), V = void 0, Q = void 0;
          return f.style.cssText = n.style.cssText = "height:100%;left:0;opacity:0;overflow:hidden;pointer-events:none;position:absolute;top:0;transition:0s;width:100%;z-index:-1", x.style.cssText = b.style.cssText = "display:block;height:100%;transition:0s;width:100%", x.style.width = x.style.height = "200%", s.appendChild(n), ae(), he;
          function ae() {
            ce();
            var re = s.offsetWidth, pe = s.offsetHeight;
            (re !== V || pe !== Q) && (V = re, Q = pe, b.style.width = re * 2 + "px", b.style.height = pe * 2 + "px", n.scrollLeft = n.scrollWidth, n.scrollTop = n.scrollHeight, f.scrollLeft = f.scrollWidth, f.scrollTop = f.scrollHeight, t({ width: re, height: pe })), f.addEventListener("scroll", ae), n.addEventListener("scroll", ae);
          }
          function ce() {
            f.removeEventListener("scroll", ae), n.removeEventListener("scroll", ae);
          }
          function he() {
            ce(), s.removeChild(n);
          }
        }, er = _n, Tt, ft = [], tr = 100;
        function nr() {
          Tt = setInterval(function() {
            ft.forEach(on);
          }, tr);
        }
        function rr() {
          clearInterval(Tt), Tt = null;
        }
        function on(s) {
          var t = s.$el, n = s.listener, f = s.lastWidth, b = s.lastHeight, x = t.offsetWidth, V = t.offsetHeight;
          (f !== x || b !== V) && (s.lastWidth = x, s.lastHeight = V, n({
            width: x,
            height: V
          }));
        }
        function ar(s, t) {
          var n = {
            $el: s,
            listener: t,
            lastWidth: null,
            lastHeight: null
          }, f = function() {
            Ie(ft, n), ft.length || rr();
          };
          return ft.push(n), on(n), nr(), f;
        }
        function sn(s, t) {
          var n = document.documentMode === 9, f = !0, b = function() {
            return f || t.apply(void 0, arguments);
          }, x = n ? ar : er, V = x(s, b);
          return f = !1, V;
        }
        function or(s) {
          for (var t = [], n = s.parentNode; n && n.nodeName !== "BODY" && n.nodeType === document.ELEMENT_NODE; )
            ir(n) && t.push(n), n = n.parentNode;
          return t.push(window), t;
        }
        function ir(s) {
          var t = getComputedStyle(s), n = t.overflow, f = t.overflowX, b = t.overflowY;
          return /(auto|scroll|overlay)/.test(n + b + f);
        }
        function ln(s, t) {
          var n = or(s);
          return window.addEventListener("resize", t, {
            passive: !0
          }), n.forEach(function(f) {
            f.addEventListener("scroll", t, {
              passive: !0
            });
          }), function() {
            window.removeEventListener("resize", t, {
              passive: !0
            }), n.forEach(function(b) {
              b.removeEventListener("scroll", t, {
                passive: !0
              });
            });
          };
        }
        var sr = Object(r.defineComponent)({
          name: "vue-treeselect--tip",
          functional: !0,
          props: {
            type: {
              type: String,
              required: !0
            },
            icon: {
              type: String,
              required: !0
            }
          },
          render: function(t) {
            var n = this.type, f = this.icon;
            return Object(r.createVNode)("div", {
              class: "vue-treeselect__tip vue-treeselect__".concat(n, "-tip")
            }, [Object(r.createVNode)("div", {
              class: "vue-treeselect__icon-container"
            }, [Object(r.createVNode)("span", {
              class: "vue-treeselect__icon-".concat(f)
            }, null)]), Object(r.createVNode)("span", {
              class: "vue-treeselect__tip-text vue-treeselect__".concat(n, "-tip-text")
            }, [this.$slots.default()])]);
          }
        }), Te = sr;
        function vt(s) {
          return typeof s == "function" || Object.prototype.toString.call(s) === "[object Object]" && !Object(r.isVNode)(s);
        }
        var Ct, It, Lt, lr = {
          name: "vue-treeselect--option",
          inject: ["instance"],
          props: {
            node: {
              type: Object,
              required: !0
            }
          },
          computed: {
            shouldExpand: function() {
              var t = this.instance, n = this.node;
              return n.isBranch && t.shouldExpand(n);
            },
            shouldShow: function() {
              var t = this.instance, n = this.node;
              return t.shouldShowOptionInMenu(n);
            }
          },
          methods: {
            renderOption: function() {
              var t = this.instance, n = this.node, f = {
                "vue-treeselect__option": !0,
                "vue-treeselect__option--disabled": n.isDisabled,
                "vue-treeselect__option--selected": t.isSelected(n),
                "vue-treeselect__option--highlight": n.isHighlighted,
                "vue-treeselect__option--matched": t.localSearch.active && n.isMatched,
                "vue-treeselect__option--hide": !this.shouldShow
              };
              return Object(r.createVNode)("div", {
                class: f,
                onMouseenter: this.handleMouseEnterOption,
                "data-id": n.id
              }, [this.renderArrow(), this.renderLabelContainer([this.renderCheckboxContainer([this.renderCheckbox()]), this.renderLabel()])]);
            },
            renderSubOptionsList: function() {
              return this.shouldExpand ? Object(r.createVNode)("div", {
                class: "vue-treeselect__list"
              }, [this.renderSubOptions(), this.renderNoChildrenTip(), this.renderLoadingChildrenTip(), this.renderLoadingChildrenErrorTip()]) : null;
            },
            renderArrow: function() {
              var t = this.instance, n = this.node;
              if (t.shouldFlattenOptions && this.shouldShow) return null;
              if (n.isBranch) {
                var f, b = {
                  "vue-treeselect__option-arrow": !0,
                  "vue-treeselect__option-arrow--rotated": this.shouldExpand
                };
                return Object(r.createVNode)("div", {
                  class: "vue-treeselect__option-arrow-container",
                  onMousedown: this.handleMouseDownOnArrow
                }, [Object(r.createVNode)(Object(r.resolveComponent)("transition"), {
                  name: "vue-treeselect__option-arrow--prepare",
                  appear: !0
                }, vt(f = Object(r.createVNode)(an, {
                  class: b
                }, null)) ? f : {
                  default: function() {
                    return [f];
                  }
                })]);
              }
              return (
                /*node.isLeaf && */
                t.hasBranchNodes ? (Ct || (Ct = Object(r.createVNode)("div", {
                  class: "vue-treeselect__option-arrow-placeholder"
                }, [Object(r.createTextVNode)(" ")])), Ct) : null
              );
            },
            renderLabelContainer: function(t) {
              return Object(r.createVNode)("div", {
                class: "vue-treeselect__label-container",
                onMousedown: this.handleMouseDownOnLabelContainer
              }, vt(t) ? t : {
                default: function() {
                  return [t];
                }
              });
            },
            renderCheckboxContainer: function(t) {
              var n = this.instance, f = this.node;
              return n.single || n.disableBranchNodes && f.isBranch ? null : Object(r.createVNode)("div", {
                class: "vue-treeselect__checkbox-container"
              }, vt(t) ? t : {
                default: function() {
                  return [t];
                }
              });
            },
            renderCheckbox: function() {
              var t = this.instance, n = this.node, f = t.forest.checkedStateMap[n.id], b = {
                "vue-treeselect__checkbox": !0,
                "vue-treeselect__checkbox--checked": f === at,
                "vue-treeselect__checkbox--indeterminate": f === rt,
                "vue-treeselect__checkbox--unchecked": f === me,
                "vue-treeselect__checkbox--disabled": n.isDisabled
              };
              return It || (It = Object(r.createVNode)("span", {
                class: "vue-treeselect__check-mark"
              }, null)), Lt || (Lt = Object(r.createVNode)("span", {
                class: "vue-treeselect__minus-mark"
              }, null)), Object(r.createVNode)("span", {
                class: b
              }, [It, Lt]);
            },
            renderLabel: function() {
              var t = this.instance, n = this.node, f = n.isBranch && (t.localSearch.active ? t.showCountOnSearchComputed : t.showCount), b = f ? t.localSearch.active ? t.localSearch.countMap[n.id][t.showCountOf] : n.count[t.showCountOf] : NaN, x = "vue-treeselect__label", V = "vue-treeselect__count", Q = t.$slots["option-label"];
              return Q ? Q({
                node: n,
                shouldShowCount: f,
                count: b,
                labelClassName: x,
                countClassName: V
              }) : Object(r.createVNode)("label", {
                class: x
              }, [n.label, f && Object(r.createVNode)("span", {
                class: V
              }, [Object(r.createTextVNode)("("), b, Object(r.createTextVNode)(")")])]);
            },
            renderSubOptions: function() {
              var t = this.node;
              return t.childrenStates.isLoaded ? t.children.map(function(n) {
                return Object(r.createVNode)(Object(r.resolveComponent)("vue-treeselect--option"), {
                  node: n,
                  key: n.id
                }, null);
              }) : null;
            },
            renderNoChildrenTip: function() {
              var t = this.instance, n = this.node;
              return !n.childrenStates.isLoaded || n.children.length ? null : Object(r.createVNode)(Te, {
                type: "no-children",
                icon: "warning"
              }, {
                default: function() {
                  return [t.noChildrenText];
                }
              });
            },
            renderLoadingChildrenTip: function() {
              var t = this.instance, n = this.node;
              return n.childrenStates.isLoading ? Object(r.createVNode)(Te, {
                type: "loading",
                icon: "loader"
              }, {
                default: function() {
                  return [t.loadingText];
                }
              }) : null;
            },
            renderLoadingChildrenErrorTip: function() {
              var t = this, n = this.instance, f = this.node;
              return f.childrenStates.loadingError ? Object(r.createVNode)(Te, {
                type: "error",
                icon: "error"
              }, {
                default: function() {
                  return [f.childrenStates.loadingError, Object(r.createVNode)("a", {
                    class: "vue-treeselect__retry",
                    title: n.retryTitle,
                    onMousedown: t.handleMouseDownOnRetry
                  }, [n.retryText])];
                }
              }) : null;
            },
            handleMouseEnterOption: function(t) {
              var n = this.instance, f = this.node;
              t.target === t.currentTarget && n.setCurrentHighlightedOption(f, !1);
            },
            handleMouseDownOnArrow: z(function() {
              var t = this.instance, n = this.node;
              t.toggleExpanded(n);
            }),
            handleMouseDownOnLabelContainer: z(function() {
              var t = this.instance, n = this.node;
              n.isBranch && t.disableBranchNodes ? t.toggleExpanded(n) : t.select(n);
            }),
            handleMouseDownOnRetry: z(function() {
              var t = this.instance, n = this.node;
              t.loadChildrenOptions(n);
            })
          },
          render: function() {
            var t, n = this.node, f = this.instance.shouldFlattenOptions ? 0 : n.level, b = m({
              "vue-treeselect__list-item": !0
            }, "vue-treeselect__indent-level-".concat(f), !0);
            return Object(r.createVNode)("div", {
              class: b
            }, [this.renderOption(), n.isBranch ? Object(r.createVNode)(Object(r.resolveComponent)("transition"), {
              name: "vue-treeselect__list--transition"
            }, vt(t = this.renderSubOptionsList()) ? t : {
              default: function() {
                return [t];
              }
            }) : ""]);
          }
        }, cr = lr, ur = cr;
        function dr(s) {
          return typeof s == "function" || Object.prototype.toString.call(s) === "[object Object]" && !Object(r.isVNode)(s);
        }
        var fr = {
          top: "top",
          bottom: "bottom",
          above: "top",
          below: "bottom"
        }, vr = {
          name: "vue-treeselect--menu",
          inject: ["instance"],
          computed: {
            menuStyle: function() {
              var t = this.instance;
              return {
                maxHeight: t.maxHeight + "px"
              };
            },
            menuContainerStyle: function() {
              var t = this.instance;
              return {
                zIndex: t.appendToBody ? null : t.zIndex
              };
            }
          },
          watch: {
            "instance.menu.isOpen": function(t) {
              t ? this.$nextTick(this.onMenuOpen) : this.onMenuClose();
            }
          },
          created: function() {
            this.menuSizeWatcher = null, this.menuResizeAndScrollEventListeners = null;
          },
          mounted: function() {
            var t = this.instance;
            t.menu.isOpen && this.$nextTick(this.onMenuOpen);
          },
          unmounted: function() {
            this.onMenuClose();
          },
          methods: {
            renderMenu: function() {
              var t = this.instance;
              return t.menu.isOpen ? Object(r.createVNode)("div", {
                ref: "menu",
                class: "vue-treeselect__menu",
                onMousedown: t.handleMouseDown,
                style: this.menuStyle
              }, [this.renderBeforeList(), t.async ? this.renderAsyncSearchMenuInner() : t.localSearch.active ? this.renderLocalSearchMenuInner() : this.renderNormalMenuInner(), this.renderAfterList()]) : null;
            },
            renderBeforeList: function() {
              var t = this.instance, n = t.$slots["before-list"];
              return n ? n() : null;
            },
            renderAfterList: function() {
              var t = this.instance, n = t.$slots["after-list"];
              return n ? n() : null;
            },
            renderNormalMenuInner: function() {
              var t = this.instance;
              return t.rootOptionsStates.isLoading ? this.renderLoadingOptionsTip() : t.rootOptionsStates.loadingError ? this.renderLoadingRootOptionsErrorTip() : t.rootOptionsStates.isLoaded && t.forest.normalizedOptions.length === 0 ? this.renderNoAvailableOptionsTip() : this.renderOptionList();
            },
            renderLocalSearchMenuInner: function() {
              var t = this.instance;
              return t.rootOptionsStates.isLoading ? this.renderLoadingOptionsTip() : t.rootOptionsStates.loadingError ? this.renderLoadingRootOptionsErrorTip() : t.rootOptionsStates.isLoaded && t.forest.normalizedOptions.length === 0 ? this.renderNoAvailableOptionsTip() : t.localSearch.noResults ? this.renderNoResultsTip() : this.renderOptionList();
            },
            renderAsyncSearchMenuInner: function() {
              var t = this.instance, n = t.getRemoteSearchEntry(), f = t.trigger.searchQuery === "" && !t.defaultOptions, b = f ? !1 : n.isLoaded && n.options.length === 0;
              return f ? this.renderSearchPromptTip() : n.isLoading ? this.renderLoadingOptionsTip() : n.loadingError ? this.renderAsyncSearchLoadingErrorTip() : b ? this.renderNoResultsTip() : this.renderOptionList();
            },
            renderOptionList: function() {
              var t = this.instance;
              return Object(r.createVNode)("div", {
                class: "vue-treeselect__list"
              }, [t.forest.normalizedOptions.map(function(n) {
                return Object(r.createVNode)(ur, {
                  node: n,
                  key: n.id
                }, null);
              })]);
            },
            renderSearchPromptTip: function() {
              var t = this.instance;
              return Object(r.createVNode)(Te, {
                type: "search-prompt",
                icon: "warning"
              }, {
                default: function() {
                  return [t.searchPromptText];
                }
              });
            },
            renderLoadingOptionsTip: function() {
              var t = this.instance;
              return Object(r.createVNode)(Te, {
                type: "loading",
                icon: "loader"
              }, {
                default: function() {
                  return [t.loadingText];
                }
              });
            },
            renderLoadingRootOptionsErrorTip: function() {
              var t = this.instance;
              return Object(r.createVNode)(Te, {
                type: "error",
                icon: "error"
              }, {
                default: function() {
                  return [t.rootOptionsStates.loadingError, Object(r.createVNode)("a", {
                    class: "vue-treeselect__retry",
                    onClick: t.loadRootOptions,
                    title: t.retryTitle
                  }, [t.retryText])];
                }
              });
            },
            renderAsyncSearchLoadingErrorTip: function() {
              var t = this.instance, n = t.getRemoteSearchEntry();
              return Object(r.createVNode)(Te, {
                type: "error",
                icon: "error"
              }, {
                default: function() {
                  return [n.loadingError, Object(r.createVNode)("a", {
                    class: "vue-treeselect__retry",
                    onClick: t.handleRemoteSearch,
                    title: t.retryTitle
                  }, [t.retryText])];
                }
              });
            },
            renderNoAvailableOptionsTip: function() {
              var t = this.instance;
              return Object(r.createVNode)(Te, {
                type: "no-options",
                icon: "warning"
              }, {
                default: function() {
                  return [t.noOptionsText];
                }
              });
            },
            renderNoResultsTip: function() {
              var t = this.instance;
              return Object(r.createVNode)(Te, {
                type: "no-results",
                icon: "warning"
              }, {
                default: function() {
                  return [t.noResultsText];
                }
              });
            },
            onMenuOpen: function() {
              this.adjustMenuOpenDirection(), this.setupMenuSizeWatcher(), this.setupMenuResizeAndScrollEventListeners();
            },
            onMenuClose: function() {
              this.removeMenuSizeWatcher(), this.removeMenuResizeAndScrollEventListeners();
            },
            adjustMenuOpenDirection: function() {
              var t = this.instance;
              if (t.menu.isOpen) {
                var n = t.getMenu(), f = t.getControl(), b = n.getBoundingClientRect(), x = f.getBoundingClientRect(), V = b.height, Q = window.innerHeight, ae = x.top, ce = window.innerHeight - x.bottom, he = x.top >= 0 && x.top <= Q || x.top < 0 && x.bottom > 0, re = ce > V + te, pe = ae > V + te;
                he ? t.openDirection !== "auto" ? t.menu.placement = fr[t.openDirection] : re || !pe ? t.menu.placement = "bottom" : t.menu.placement = "top" : t.closeMenu();
              }
            },
            setupMenuSizeWatcher: function() {
              var t = this.instance, n = t.getMenu();
              this.menuSizeWatcher || (this.menuSizeWatcher = {
                remove: sn(n, this.adjustMenuOpenDirection)
              });
            },
            setupMenuResizeAndScrollEventListeners: function() {
              var t = this.instance, n = t.getControl();
              this.menuResizeAndScrollEventListeners || (this.menuResizeAndScrollEventListeners = {
                remove: ln(n, this.adjustMenuOpenDirection)
              });
            },
            removeMenuSizeWatcher: function() {
              this.menuSizeWatcher && (this.menuSizeWatcher.remove(), this.menuSizeWatcher = null);
            },
            removeMenuResizeAndScrollEventListeners: function() {
              this.menuResizeAndScrollEventListeners && (this.menuResizeAndScrollEventListeners.remove(), this.menuResizeAndScrollEventListeners = null);
            }
          },
          render: function() {
            var t;
            return Object(r.createVNode)("div", {
              ref: "menu-container",
              class: "vue-treeselect__menu-container",
              style: this.menuContainerStyle
            }, [Object(r.createVNode)(Object(r.resolveComponent)("transition"), {
              name: "vue-treeselect__menu--transition"
            }, dr(t = this.renderMenu()) ? t : {
              default: function() {
                return [t];
              }
            })]);
          }
        }, cn = vr, hr = {
          name: "vue-treeselect--portal-target",
          inject: ["instance"],
          watch: {
            "instance.menu.isOpen": function(t) {
              t ? this.setupHandlers() : this.removeHandlers();
            },
            "instance.menu.placement": function() {
              this.updateMenuContainerOffset();
            }
          },
          created: function() {
            this.controlResizeAndScrollEventListeners = null, this.controlSizeWatcher = null;
          },
          mounted: function() {
            var t = this.instance;
            t.menu.isOpen && this.setupHandlers();
          },
          methods: {
            setupHandlers: function() {
              this.updateWidth(), this.updateMenuContainerOffset(), this.setupControlResizeAndScrollEventListeners(), this.setupControlSizeWatcher();
            },
            removeHandlers: function() {
              this.removeControlResizeAndScrollEventListeners(), this.removeControlSizeWatcher();
            },
            setupControlResizeAndScrollEventListeners: function() {
              var t = this.instance, n = t.getControl();
              this.controlResizeAndScrollEventListeners || (this.controlResizeAndScrollEventListeners = {
                remove: ln(n, this.updateMenuContainerOffset)
              });
            },
            setupControlSizeWatcher: function() {
              var t = this, n = this.instance, f = n.getControl();
              this.controlSizeWatcher || (this.controlSizeWatcher = {
                remove: sn(f, function() {
                  t.updateWidth(), t.updateMenuContainerOffset();
                })
              });
            },
            removeControlResizeAndScrollEventListeners: function() {
              this.controlResizeAndScrollEventListeners && (this.controlResizeAndScrollEventListeners.remove(), this.controlResizeAndScrollEventListeners = null);
            },
            removeControlSizeWatcher: function() {
              this.controlSizeWatcher && (this.controlSizeWatcher.remove(), this.controlSizeWatcher = null);
            },
            updateWidth: function() {
              var t = this.instance, n = this.$el, f = t.getControl(), b = f.getBoundingClientRect();
              n.style.width = b.width + "px";
            },
            updateMenuContainerOffset: function() {
              var t = this.instance, n = t.getControl(), f = this.$el, b = n.getBoundingClientRect(), x = f.getBoundingClientRect(), V = t.menu.placement === "bottom" ? b.height : 0, Q = Math.round(b.left - x.left) + "px", ae = Math.round(b.top - x.top + V) + "px", ce = this.$refs.menu.$refs["menu-container"].style, he = ["transform", "webkitTransform", "MozTransform", "msTransform"], re = J(he, function(pe) {
                return pe in document.body.style;
              });
              ce[re] = "translate(".concat(Q, ", ").concat(ae, ")");
            }
          },
          render: function() {
            var t = this.instance, n = ["vue-treeselect__portal-target", t.wrapperClass], f = {
              zIndex: t.zIndex
            };
            return Object(r.createVNode)("div", {
              class: n,
              style: f,
              "data-instance-id": t.getInstanceId()
            }, [Object(r.createVNode)(cn, {
              ref: "menu"
            }, null)]);
          },
          unmounted: function() {
            this.removeHandlers();
          }
        }, At, pr = {
          name: "vue-treeselect--menu-portal",
          created: function() {
            this.portalTarget = null;
          },
          mounted: function() {
            this.setup();
          },
          unmounted: function() {
            this.teardown();
          },
          methods: {
            setup: function() {
              var t = document.createElement("div");
              document.body.appendChild(t), this.portalTarget = Object(r.createApp)(B({
                parent: this
              }, hr)), this.portalTarget.mount(t);
            },
            teardown: function() {
              document.body.removeChild(this.portalTarget.$el), this.portalTarget.$el.innerHTML = "", this.portalTarget.$destroy(), this.portalTarget = null;
            }
          },
          render: function() {
            return At || (At = Object(r.createVNode)("div", {
              class: "vue-treeselect__menu-placeholder"
            }, null)), At;
          }
        }, gr = pr, un = Object(r.defineComponent)({
          name: "vue-treeselect",
          mixins: [Zt],
          components: {
            HiddenFields: An,
            Control: qn,
            Menu: cn,
            MenuPortal: gr
          },
          computed: {
            wrapperClass: function() {
              return {
                "vue-treeselect": !0,
                "vue-treeselect--single": this.single,
                "vue-treeselect--multi": this.multiple,
                "vue-treeselect--searchable": this.searchable,
                "vue-treeselect--disabled": this.disabled,
                "vue-treeselect--focused": this.trigger.isFocused,
                "vue-treeselect--has-value": this.hasValue,
                "vue-treeselect--open": this.menu.isOpen,
                "vue-treeselect--open-above": this.menu.placement === "top",
                "vue-treeselect--open-below": this.menu.placement === "bottom",
                "vue-treeselect--branch-nodes-disabled": this.disableBranchNodes,
                "vue-treeselect--append-to-body": this.appendToBody
              };
            }
          }
          // render() {
          //   return (
          //     <div ref="wrapper" class={this.wrapperClass}>
          //       <HiddenFields />
          //       <Control ref="control" />
          //       {this.appendToBody ? <MenuPortal ref="portal" /> : <Menu ref="menu" />}
          //     </div>
          //   )
          // },
        });
        un.render = c;
        var dn = un;
        e("d15f");
        var mr = dn;
        l.default = mr;
      }
    ),
    /***/
    fb6a: (
      /***/
      function(o, l, e) {
        var a = e("23e7"), i = e("861d"), r = e("e8b5"), c = e("23cb"), u = e("50c4"), h = e("fc6a"), v = e("8418"), p = e("b622"), y = e("1dde"), g = e("ae40"), m = y("slice"), E = g("slice", { ACCESSORS: !0, 0: 0, 1: 2 }), D = p("species"), F = [].slice, A = Math.max;
        a({ target: "Array", proto: !0, forced: !m || !E }, {
          slice: function(B, U) {
            var I = h(this), T = u(I.length), w = c(B, T), P = c(U === void 0 ? T : U, T), L, S, N;
            if (r(I) && (L = I.constructor, typeof L == "function" && (L === Array || r(L.prototype)) ? L = void 0 : i(L) && (L = L[D], L === null && (L = void 0)), L === Array || L === void 0))
              return F.call(I, w, P);
            for (S = new (L === void 0 ? Array : L)(A(P - w, 0)), N = 0; w < P; w++, N++) w in I && v(S, N, I[w]);
            return S.length = N, S;
          }
        });
      }
    ),
    /***/
    fc6a: (
      /***/
      function(o, l, e) {
        var a = e("44ad"), i = e("1d80");
        o.exports = function(r) {
          return a(i(r));
        };
      }
    ),
    /***/
    fdbc: (
      /***/
      function(o, l) {
        o.exports = {
          CSSRuleList: 0,
          CSSStyleDeclaration: 0,
          CSSValueList: 0,
          ClientRectList: 0,
          DOMRectList: 0,
          DOMStringList: 0,
          DOMTokenList: 1,
          DataTransferItemList: 0,
          FileList: 0,
          HTMLAllCollection: 0,
          HTMLCollection: 0,
          HTMLFormElement: 0,
          HTMLSelectElement: 0,
          MediaList: 0,
          MimeTypeArray: 0,
          NamedNodeMap: 0,
          NodeList: 1,
          PaintRequestList: 0,
          Plugin: 0,
          PluginArray: 0,
          SVGLengthList: 0,
          SVGNumberList: 0,
          SVGPathSegList: 0,
          SVGPointList: 0,
          SVGStringList: 0,
          SVGTransformList: 0,
          SourceBufferList: 0,
          StyleSheetList: 0,
          TextTrackCueList: 0,
          TextTrackList: 0,
          TouchList: 0
        };
      }
    ),
    /***/
    fdbf: (
      /***/
      function(o, l, e) {
        var a = e("4930");
        o.exports = a && !Symbol.sham && typeof Symbol.iterator == "symbol";
      }
    ),
    /***/
    ffd6: (
      /***/
      function(o, l, e) {
        var a = e("3729"), i = e("1310"), r = "[object Symbol]";
        function c(u) {
          return typeof u == "symbol" || i(u) && a(u) == r;
        }
        o.exports = c;
      }
    )
    /******/
  });
})(Tn);
var na = Tn.exports;
const ra = /* @__PURE__ */ Or(na), aa = { key: 0 }, oa = { class: "text-base font-bold" }, ia = {
  class: "relative py-8 mb-0.5 h-75 hover:bg-gray-200 focus-within:bg-gray-200",
  "data-type": "file"
}, sa = ["aria-label"], la = { class: "text-gray-500 text-xs mb-1" }, ca = { key: 1 }, ua = { class: "text-base font-bold" }, da = {
  class: "mb-0.5",
  "data-type": "url"
}, fa = ["value", "aria-label"], va = {
  key: 0,
  class: "text-red-900 text-xs"
}, ha = { key: 2 }, pa = { class: "text-base font-bold" }, ga = {
  class: "relative mb-0.5",
  "data-type": "select"
}, ma = { key: 0 }, ya = {
  key: 0,
  class: "text-red-900 text-xs"
}, ba = { key: 1 }, Sa = ["size", "value", "aria-label"], Oa = ["value"], xa = {
  key: 0,
  class: "text-red-900 text-xs"
}, Ea = {
  key: 1,
  class: "text-red-900 text-xs"
}, Na = { key: 3 }, Ta = ["aria-label"], Ca = { class: "text-base font-bold" }, Ia = { key: 4 }, La = { class: "text-base font-bold" }, Aa = { class: "relative mb-0.5" }, Ma = ["value", "aria-label"], Ra = {
  key: 0,
  class: "text-red-900 text-xs"
}, wa = /* @__PURE__ */ nt({
  __name: "form-input",
  props: {
    activeStep: {
      type: Number,
      default: 0
    },
    defaultOption: {
      type: Boolean,
      default: !1
    },
    formatError: {
      type: Boolean,
      default: !1
    },
    failureError: {
      type: Boolean,
      default: !1
    },
    help: {
      type: [String, Boolean],
      default: !1
    },
    label: {
      type: [String, Boolean],
      default: !1
    },
    modelValue: {
      type: [String, Array],
      default: ""
    },
    name: {
      type: [String, Boolean],
      default: !1
    },
    options: {
      type: Array,
      default() {
        return [];
      }
    },
    selectedValues: {
      type: Array,
      default: () => []
    },
    size: {
      type: [Number, String],
      default: 0
    },
    sublayerOptions: {
      type: Function,
      default() {
        return [];
      }
    },
    multiple: {
      type: Boolean,
      default: !1
    },
    searchable: {
      type: Boolean,
      default: !1
    },
    step: {
      type: Number,
      default: 0
    },
    type: {
      type: String,
      default: "text"
    },
    url: {
      type: [String, Boolean],
      default: !1
    },
    validation: {
      type: Boolean,
      default: !1
    },
    validationMessages: {
      type: Object
    },
    ariaLabel: {
      type: String,
      default: !1
    }
  },
  emits: ["update:modelValue", "link", "select", "upload", "text", "nested", "focusElement"],
  setup(d, { expose: o, emit: l }) {
    const e = Yt("iApi"), { t: a } = kt(), i = l, r = d, c = ee(), u = ke("textInput"), h = ke("selectInput"), v = ke("urlInput");
    o({ selectInput: h, textInput: u, urlInput: v });
    const p = ee(!1), y = ee(!1), g = ee(!1), m = ee(!1), E = ee([...r.selectedValues]), D = ee("value-label"), F = ee("option-label"), A = ee(void 0), R = ee(null), B = Ye([]);
    if (r.defaultOption && r.modelValue === "" && r.options.length) {
      let z = r.options[0].value;
      if (r.name === "latField") {
        const W = new RegExp(/^(y|lat.*)$/i);
        z = r.options.find((ve) => W.test(ve.label))?.value || z;
      } else if (r.name === "longField") {
        const W = new RegExp(/^(x|long.*)$/i);
        z = r.options.find((ve) => W.test(ve.label))?.value || z;
      }
      i("update:modelValue", z);
    }
    const U = (z) => {
      z.trim() !== "" ? p.value = !0 : (p.value = !1, e.updateAlert(a("wizard.configure.name.error.required")));
    }, I = (z) => {
      let W;
      try {
        W = new URL(z);
      } catch {
        return p.value = !1, !1;
      }
      W.protocol === "http:" || W.protocol === "https:" ? p.value = !0 : p.value = !1;
    }, T = (z) => {
      i("upload", z.target.files[0]), z.target.value = "";
    }, w = (z) => {
      I(z.target.value), i("link", z.target.value, p), y.value = !1;
    }, P = (z, W) => {
      i(z ? "select" : "update:modelValue", W.target.value);
    }, L = (z) => {
      i("nested", z.target.checked);
    }, S = (z) => {
      U(z.target.value), i("link", z.target.value, p), g.value = !1;
    }, N = () => {
      i("select", r.sublayerOptions(E.value)), E.value && E.value.length > 0 ? m.value = !1 : m.value = !0;
    }, C = (z) => z.length > 5 ? `${z.slice(0, 5)}...` : z;
    function M() {
      A.value = new ResizeObserver(function() {
        O();
      }), A.value.observe(e.$vApp.$el.querySelector(".vue-treeselect__control")), A.value.observe(e.$vApp.$el.querySelector(".vue-treeselect__menu"));
    }
    const O = () => {
      const z = e.$vApp.$el.querySelector(".vue-treeselect__menu")?.clientHeight, W = e.$vApp.$el.querySelector(".vue-treeselect__control")?.clientHeight;
      c.value.style.height = `${z + W + 30}px`;
    };
    B.push(
      St(R, (z) => {
        z && q();
      })
    );
    const q = () => {
      if (R.value) {
        const z = R.value.querySelector('input[type="text"]');
        z && z.setAttribute("aria-label", a("wizard.configure.sublayers.select"));
      }
    }, G = () => {
      h.value._tippy.hide();
    }, J = (z) => {
      z.key === "Tab" && h.value?.matches(":focus") && navigator.userAgent.includes("Firefox") ? h.value._tippy.show() : h.value._tippy.hide();
    };
    return Ot(() => {
      h.value?.addEventListener("blur", G), h.value?.addEventListener("keyup", J), r.step === 2 && r.step === r.activeStep && i("focusElement");
    }), tt(() => {
      A.value.disconnect(), B.forEach((z) => z()), h.value?.removeEventListener("blur", G), h.value?.removeEventListener("keyup", J);
    }), (z, W) => {
      const se = Xt("truncate"), ve = Xt("tippy");
      return k(), ne("div", {
        class: "input-wrapper mb-12",
        ref_key: "el",
        ref: c
      }, [
        d.type === "file" ? (k(), ne("div", aa, [
          H("label", oa, oe(d.label), 1),
          H("div", ia, [
            H("input", {
              class: "absolute w-full opacity-0 inset-0 cursor-pointer",
              type: "file",
              name: "file",
              accept: ".geojson,.json,.csv,.zip",
              "aria-label": r.ariaLabel,
              onInput: W[0] || (W[0] = (_) => {
                T(_);
              })
            }, null, 40, sa),
            W[11] || (W[11] = H("div", { class: "upload-mask absolute inset-0 flex border-dashed border-2 border-gray-400 pointer-events-none justify-center" }, [
              H("svg", {
                class: "w-30 h-30 m-auto",
                fill: "#a8a8a8",
                xmlns: "http://www.w3.org/2000/svg",
                viewBox: "0 0 58 58"
              }, [
                H("path", { d: "M29,58A29,29,0,1,0,0,29,29,29,0,0,0,29,58ZM29,4A25,25,0,1,1,4,29,25,25,0,0,1,29,4Z" }),
                H("polygon", { points: "27 22 27 44.4 31 44.4 31 22 41.7 31.1 44.3 28.1 29 15 13.7 28.1 16.3 31.1 27 22" })
              ])
            ], -1))
          ]),
          H("div", la, oe(d.help), 1)
        ])) : d.type === "url" ? (k(), ne("div", ca, [
          H("label", ua, oe(d.label), 1),
          H("div", da, [
            H("input", {
              class: "text-sm w-full border-solid border-gray-300 mb-5 focus:border-green-500",
              type: "url",
              name: "url",
              value: d.modelValue,
              "aria-label": r.ariaLabel,
              onChange: W[1] || (W[1] = (_) => p.value ? y.value = !1 : y.value = !0),
              onInput: W[2] || (W[2] = (_) => {
                w(_);
              }),
              ref_key: "urlInput",
              ref: v
            }, null, 40, fa)
          ]),
          y.value ? (k(), ne("div", va, oe(d.modelValue ? d.validationMessages?.invalid : d.validationMessages?.required), 1)) : ue("", !0)
        ])) : d.type === "select" ? (k(), ne("div", ha, [
          H("label", pa, oe(d.label), 1),
          H("div", ga, [
            d.multiple ? (k(), ne("div", ma, [
              H("div", {
                ref_key: "treeWrapper",
                ref: R
              }, [
                ge(K(ra), {
                  modelValue: E.value,
                  "onUpdate:modelValue": W[3] || (W[3] = (_) => E.value = _),
                  multiple: !0,
                  options: d.options,
                  "default-expand-level": 1,
                  "always-open": !0,
                  "open-direction": "bottom",
                  "max-height": 300,
                  limit: 4,
                  disableFuzzyMatching: !0,
                  searchable: d.searchable,
                  childrenIgnoreDisabled: !0,
                  placeholder: K(a)("wizard.configure.sublayers.select"),
                  noResultsText: K(a)("wizard.configure.sublayers.results"),
                  clearAllText: K(a)("wizard.configure.sublayers.clearAll"),
                  onSelect: W[4] || (W[4] = (_) => {
                    z.$nextTick(() => {
                      N();
                    });
                  }),
                  onDeselect: W[5] || (W[5] = (_) => {
                    z.$nextTick(() => {
                      N();
                    });
                  }),
                  onOpen: W[6] || (W[6] = (_) => {
                    z.$nextTick(() => {
                      M();
                    });
                  })
                }, {
                  [D.value]: ye(({ node: _ }) => [
                    H("label", null, oe(C(_.label)), 1)
                  ]),
                  [F.value]: ye(({ node: _, labelClassName: be }) => [
                    bt((k(), ne("label", {
                      class: _e(be)
                    }, [
                      et(oe(_.label), 1)
                    ], 2)), [
                      [se, {
                        options: {
                          placement: "top",
                          hideOnClick: !1,
                          theme: "ramp4",
                          animation: "scale"
                        }
                      }]
                    ])
                  ]),
                  _: 2
                }, 1032, ["modelValue", "options", "searchable", "placeholder", "noResultsText", "clearAllText"])
              ], 512),
              d.validation && m.value ? (k(), ne("div", ya, oe(d.validationMessages?.required), 1)) : ue("", !0)
            ])) : (k(), ne("div", ba, [
              bt((k(), ne("select", {
                class: _e(["block border-solid border-gray-300 w-full p-3 overflow-y-auto", d.size && "configure-select"]),
                size: d.size,
                value: d.modelValue,
                onInput: W[7] || (W[7] = (_) => P(d.size, _)),
                "aria-label": r.ariaLabel,
                ref_key: "selectInput",
                ref: h
              }, [
                (k(!0), ne(On, null, xn(d.options, (_) => (k(), ne("option", {
                  class: "p-6",
                  key: _.label,
                  value: _.value
                }, oe(_.label), 9, Oa))), 128))
              ], 42, Sa)), [
                [ve, {
                  content: K(a)("select.items"),
                  trigger: "manual",
                  placement: "top-start"
                }]
              ]),
              d.validation && d.formatError ? (k(), ne("div", xa, oe(d.validationMessages?.invalid), 1)) : ue("", !0),
              d.validation && d.failureError ? (k(), ne("div", Ea, oe(d.validationMessages?.failure), 1)) : ue("", !0)
            ]))
          ])
        ])) : d.type === "checkbox" ? (k(), ne("div", Na, [
          H("input", {
            class: "text-sm border-solid border-gray-300 mb-5 focus:border-green-500 mr-10",
            type: "checkbox",
            name: "nested",
            checked: !0,
            "aria-label": r.ariaLabel,
            onChange: W[8] || (W[8] = (_) => {
              L(_);
            })
          }, null, 40, Ta),
          H("label", Ca, oe(d.label), 1)
        ])) : (k(), ne("div", Ia, [
          H("label", La, oe(d.label), 1),
          H("div", Aa, [
            H("input", {
              class: _e(["border-solid border-gray-300 p-3 w-full", { "error-border": !p.value && !d.modelValue }]),
              type: "text",
              value: d.modelValue,
              "aria-label": r.ariaLabel,
              onChange: W[9] || (W[9] = (_) => p.value ? g.value = !1 : g.value = !0),
              onInput: W[10] || (W[10] = (_) => {
                S(_);
              }),
              ref_key: "textInput",
              ref: u
            }, null, 42, Ma)
          ]),
          d.validation && !d.modelValue ? (k(), ne("div", Ra, oe(d.validationMessages?.required), 1)) : ue("", !0)
        ]))
      ], 512);
    };
  }
}), Ee = /* @__PURE__ */ xt(wa, [["__scopeId", "data-v-8b14a81f"]]), ja = { class: "step relative flex flex-col px-12" }, Fa = { class: "stepper-header flex pb-24" }, Da = {
  key: 1,
  class: "flex-none stepper-check w-24 h-24 text-gray-400"
}, Pa = { class: "flex flex-col overflow-hidden" }, Va = { class: "pl-12 flex items-center text-md" }, za = { class: "pl-12 text-xs transition-opacity duration-1000 ease-out" }, Ba = /* @__PURE__ */ nt({
  __name: "stepper-item",
  props: {
    title: {
      type: String,
      required: !0
    },
    summary: {
      type: String
    }
  },
  emits: ["focusPanel", "focusFirstElement"],
  setup(d, { emit: o }) {
    const l = Yt("stepper"), e = ee(), a = o, i = ee(-1), r = (h) => {
      u() || (h.stopPropagation(), a("focusPanel"), a("focusFirstElement"));
    };
    Ot(() => {
      i.value = l.numSteps++, e.value?.addEventListener("focusout", r);
    }), tt(() => {
      e.value?.removeEventListener("focusout", r);
    });
    const c = () => l.activeIndex > i.value, u = () => l.activeIndex === i.value;
    return (h, v) => {
      const p = Xt("truncate");
      return k(), ne("div", ja, [
        H("div", Fa, [
          c() ? (k(), ne("div", Da, v[0] || (v[0] = [
            H("svg", {
              xmlns: "http://www.w3.org/2000/svg",
              height: "100%",
              width: "100%",
              preserveAspectRatio: "xMidYMid meet",
              viewBox: "0 0 24 24",
              focusable: "false"
            }, [
              H("g", { id: "check_circle" }, [
                H("path", { d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" })
              ])
            ], -1)
          ]))) : (k(), ne("div", {
            key: 0,
            class: _e(["w-24 h-24 bg-gray-500 rounded-full flex justify-center items-center text-white text-xs font-semibold", { "bg-blue-500": u }])
          }, oe(i.value + 1), 3)),
          H("div", Pa, [
            H("div", Va, oe(d.title), 1),
            bt((k(), ne("div", za, [
              et(oe(d.summary), 1)
            ])), [
              [pn, !u()],
              [p]
            ])
          ])
        ]),
        ge(xr, {
          name: "step",
          mode: "out-in"
        }, {
          default: ye(() => [
            bt(H("div", {
              class: "pl-36",
              ref_key: "stepItem",
              ref: e
            }, [
              Xe(h.$slots, "default", {}, void 0, !0)
            ], 512), [
              [pn, u()]
            ])
          ]),
          _: 3
        })
      ]);
    };
  }
}), Kt = /* @__PURE__ */ xt(Ba, [["__scopeId", "data-v-4ef77456"]]), $a = { class: "py-12 h-auto stepper" }, Ha = /* @__PURE__ */ nt({
  __name: "stepper",
  props: {
    activeStep: {
      type: Number,
      default: 0
    }
  },
  setup(d) {
    const o = d, l = Ne(() => o.activeStep), e = Ye([]), a = Ye({
      activeIndex: o.activeStep,
      numSteps: 0
    });
    return Er("stepper", a), e.push(
      St(l, () => {
        a.activeIndex = o.activeStep;
      })
    ), tt(() => {
      e.forEach((i) => i());
    }), (i, r) => (k(), ne("div", $a, [
      Xe(i.$slots, "default")
    ]));
  }
}), Ua = {
  key: 0,
  class: "inline-flex items-center mb-10"
}, Wa = { class: "px-5 text-xs" }, Ga = { key: 5 }, Ka = ["for"], Xa = {
  key: 6,
  class: "text-base font-bold"
}, Qa = { class: "sr-only" }, ka = { class: "sr-only" }, Ya = /* @__PURE__ */ nt({
  __name: "screen",
  props: {
    panel: {
      type: Object,
      required: !0
    }
  },
  setup(d) {
    const o = Nr(), { t: l } = kt(), e = Yt("iApi"), a = ee(), i = ee([]), r = Ne(() => o.layerSource), c = Ne(() => o.currStep), u = ee(), h = ee(), v = ee(0), p = ee(!1), y = ee(), g = ke("stepOneStart"), m = ke("stepTwoStart"), E = ke("stepThreeStart"), D = ee(!1), F = ee(!1), A = ee(!1), R = ee(!1), B = ee(!1), U = ee(!1), I = ee(!0), T = ee(""), w = ee(""), P = ee([]), L = Ye([
      {
        value: ie.FEATURE,
        label: l("wizard.layerType.esriFeature")
      },
      {
        value: ie.MAPIMAGE,
        label: l("wizard.layerType.esriMapImage")
      },
      {
        value: ie.TILE,
        label: l("wizard.layerType.esriTile")
      },
      {
        value: ie.IMAGERY,
        label: l("wizard.layerType.esriImagery")
      },
      {
        value: ie.WMS,
        label: l("wizard.layerType.ogcWms")
      },
      {
        value: ie.WFS,
        label: l("wizard.layerType.ogcWfs")
      }
    ]), S = Ye([
      {
        value: ie.GEOJSON,
        label: l("wizard.fileType.geojson")
      },
      {
        value: ie.SHAPEFILE,
        label: l("wizard.fileType.shapefile")
      },
      { value: ie.CSV, label: l("wizard.fileType.csv") }
    ]), N = Ne({
      get() {
        return o.url;
      },
      set(j) {
        o.url = j;
      }
    }), C = Ne({
      get() {
        return o.fileData;
      },
      set(j) {
        o.fileData = j;
      }
    }), M = Ne({
      get() {
        return o.typeSelection;
      },
      set(j) {
        o.typeSelection = j;
      }
    }), O = Ne({
      get() {
        return o.layerInfo;
      },
      set(j) {
        o.layerInfo = j;
      }
    }), q = Ne(() => {
      let j = e.geo.proxy !== "";
      switch (M.value) {
        case ie.FEATURE:
        case ie.MAPIMAGE:
        case ie.TILE:
        case ie.IMAGERY:
          return !j;
        case ie.WFS:
          return !0;
        case ie.WMS:
          return !j;
        case ie.GEOJSON:
        case ie.SHAPEFILE:
        case ie.CSV:
          return !!(me() && !C.value);
        default:
          return !1;
      }
    });
    Tr(() => ((c.value === Be.FORMAT || c.value === Be.CONFIGURE) && (D.value = !0, o.goToStep(Be.FORMAT)), !1)), Ot(() => {
      i.value.push(
        e.event.on(gn.LAYER_LAYERSTATECHANGE, (j) => {
          j.layer.userAdded && (T.value = j.layer.name, U.value = j.state !== Ft.LOADING && j.state !== Ft.NEW, I.value = U.value && j.state === Ft.LOADED);
        })
      ), c.value === Be.CONFIGURE && (O.value?.configOptions.includes("colour") && He(), R.value = !O.value?.configOptions.includes("sublayers") && !!O.value?.config.name);
    }), tt(() => {
      i.value.forEach((j) => e.event.off(j));
    });
    const G = () => {
      y.value.el.dispatchEvent(new MouseEvent("click"));
    }, J = () => {
      switch (c.value) {
        case 0:
          z();
          break;
        case 1:
          W();
          break;
        case 2:
          se();
          break;
      }
    }, z = () => {
      for (let j in g.value)
        if (g.value[j]) {
          g.value[j].focus();
          break;
        }
    }, W = () => {
      for (let j in m.value)
        if (m.value[j]) {
          m.value[j].focus();
          break;
        }
    }, se = () => {
      for (let j in E.value)
        if (E.value[j]) {
          E.value[j].focus();
          break;
        }
    }, ve = async (j) => {
      const $ = new FileReader();
      $.onload = (Z) => {
        C.value = $.result, N.value = j.name, _(Z);
      }, $.readAsArrayBuffer(j);
    }, _ = (j) => {
      j?.preventDefault(), M.value = r.value.guessFormatFromURL(N.value), o.goToStep(Be.FORMAT);
    }, be = async (j) => {
      j?.preventDefault(), p.value = !0, F.value = !1, B.value = !0, o.goToStep(Be.CONFIGURE), w.value = me() ? S.find((Z) => Z.value === M.value)?.label : L.find((Z) => Z.value === M.value)?.label;
      try {
        O.value = me() ? await r.value.fetchFileInfo(N.value, M.value, C.value) : await r.value.fetchServiceInfo(
          N.value,
          M.value,
          o.nested
        ), me() && C.value && (O.value.config.url = "");
      } catch {
        p.value = !1, F.value = !0;
        return;
      }
      const $ = M.value === ie.FEATURE && !(O.value && O.value.fields);
      if (!O.value || $) {
        D.value = !0, O.value = {
          config: {
            id: "Placeholder",
            layerType: ie.UNKNOWN,
            url: ""
          },
          configOptions: []
        }, p.value = !1;
        return;
      }
      He(), R.value = !(O.value.configOptions.includes("sublayers") || !O.value.config.name), p.value = !1, B.value = !1;
    }, Ce = async (j) => {
      j?.preventDefault();
      const $ = Object.assign(O.value.config, j);
      P.value = [], w.value = "";
      const Z = e.geo.layer.createLayer($);
      e.geo.map.addLayer(Z).catch(() => {
      }), Z.userAdded = !0, e.event.emit(gn.USER_LAYER_ADDED, Z), A.value = !1, o.goToStep(Be.UPLOAD);
    }, Ie = () => O.value?.fields.map((j) => ({
      value: j.name,
      label: j.alias || j.name
    })), Se = (j) => O.value?.latLonFields[j].map(($) => ({
      value: $,
      label: $
    })), me = () => C.value || N.value.match(/\.(zip|csv|json|geojson)$/), rt = (j) => {
      ve(j), N.value = "";
    }, at = (j, $) => {
      N.value = j.trim(), $ ? A.value = !0 : A.value = !1;
    }, Le = (j) => {
      M.value = j, D.value = !1;
    }, je = (j) => {
      O.value.config.name = j.trim();
      const $ = O.value?.config.sublayers;
      ($ ? j && $.length > 0 : j.trim()) ? R.value = !0 : R.value = !1;
    }, Ae = (j) => {
      O.value.config.sublayers = j, j.length > 0 && O.value?.config.name ? R.value = !0 : R.value = !1;
    }, Fe = (j) => {
      if (o.nested = j, P.value = [], v.value += 1, M.value === ie.MAPIMAGE) {
        O.value.layers = r.value.createLayerHierarchy(
          O.value.layersRaw,
          o.nested
        );
        const $ = new Set(
          (O.value?.config?.sublayers ?? []).map((Z) => Z.index)
        );
        o.nested ? ot(O, $) : st(O, $);
      } else if (M.value === ie.WMS) {
        O.value.layers = r.value.mapWmsLayerList(
          O.value.layersRaw,
          o.nested
        );
        const $ = new Set((O.value?.config?.sublayers ?? []).map((Z) => Z.id));
        o.nested ? it(O, $) : Je(O, $);
      }
      Ae(De(P.value));
    }, ot = (j, $) => {
      const Z = /* @__PURE__ */ new Map();
      for (const X of j.value.layersRaw)
        if (X.parentLayerId !== -1) {
          const de = Z.get(X.parentLayerId) || [];
          de.push(X.id), Z.set(X.parentLayerId, de);
        }
      const te = (X) => {
        const de = Z.get(X);
        return de ? de.every((Me) => Z.has(Me) ? te(Me) : $.has(Me)) : !1;
      }, le = (X) => {
        if (te(X))
          P.value.push(X);
        else {
          const de = Z.get(X);
          if (de)
            for (const Me of de)
              $.has(Me) && P.value.push(Me);
        }
      };
      for (const X of Z.keys()) le(X);
      for (const X of j.value.layersRaw)
        X.parentLayerId === -1 && !Z.has(X.id) && $.has(X.id) && P.value.push(X.id);
      P.value = Array.from(new Set(P.value));
    }, it = (j, $) => {
      const Z = (X) => !X.layers || X.layers.length === 0 ? $.has(X.name) : X.layers.every((de) => Z(de)), te = (X) => {
        Z(X) ? P.value.push(X.name) : X.layers && X.layers.forEach(te);
      }, le = j.value.layersRaw[0];
      le && le.layers && le.layers.forEach((X) => te(X)), P.value = Array.from(new Set(P.value));
    }, st = (j, $) => {
      const Z = (te) => {
        const le = j.value.layersRaw.filter((X) => X.parentLayerId === te);
        if (le.length > 0)
          for (const X of le)
            $.has(X.id) ? P.value.push(X.id) : Z(X.id);
        else P.value.push(te);
      };
      for (const te of j.value.layersRaw)
        $.has(te.id) && Z(te.id);
      P.value = Array.from(new Set(P.value));
    }, Je = (j, $) => {
      const Z = (le) => {
        le.layers && le.layers.length > 0 ? le.layers.forEach(Z) : P.value.push(le.name);
      }, te = j.value.layersRaw[0];
      for (const le of $) {
        const X = te.layers.find((de) => de.name === le);
        X && X.layers && X.layers.length > 0 ? Z(X) : X && P.value.push(X.name);
      }
      P.value = Array.from(new Set(P.value));
    }, De = (j) => j.map(($) => {
      switch (M.value) {
        case ie.MAPIMAGE:
          return {
            index: $,
            state: { opacity: 1, visibility: !0 }
          };
        case ie.WMS: {
          const Z = $.lastIndexOf("#");
          return { id: $.substring(0, Z) };
        }
        default:
          return {
            id: $
          };
      }
    }), He = () => {
      u.value = O.value?.config.colour ?? "#" + Math.floor(Math.random() * 16777215).toString(16).padStart(6, "0");
      do
        h.value = Math.random().toString(36).substring(2, 9);
      while (document.getElementById(h.value + "-hue-slider") !== null);
    }, Ze = (j) => {
      O.value.config.colour = j.colors.hex.substring(0, 7), Ir(() => {
        a.value.querySelector(".vacp-copy-button").style.backgroundColor = O.value?.config.colour;
      });
    }, lt = () => {
      A.value = !1, o.goToStep(0), z();
    }, ct = () => {
      p.value = !1, D.value = !1, F.value = !1, A.value = !!N.value, B.value = !1, o.goToStep(0), w.value = "";
    }, ut = () => {
      P.value = [], R.value = !1, o.goToStep(1);
    };
    return (j, $) => {
      const Z = Cr("panel-screen");
      return k(), we(Z, {
        panel: d.panel,
        ref_key: "thePanel",
        ref: y
      }, {
        header: ye(() => [
          et(oe(K(l)("wizard.title")), 1)
        ]),
        content: ye(() => [
          ge(Ha, { activeStep: c.value }, {
            default: ye(() => [
              ge(Kt, {
                title: K(l)("wizard.upload.title"),
                summary: N.value,
                onFocusPanel: G,
                onFocusFirstElement: J
              }, {
                default: ye(() => [
                  H("form", {
                    name: "upload",
                    onSubmit: _,
                    onClick: $[1] || ($[1] = (te) => U.value = !1)
                  }, [
                    ge(Ee, {
                      type: "file",
                      name: "file",
                      label: K(l)("wizard.upload.file.label"),
                      help: K(l)("wizard.upload.file.help"),
                      onUpload: rt,
                      "aria-label": K(l)("wizard.upload.file.label")
                    }, null, 8, ["label", "help", "aria-label"]),
                    $[11] || ($[11] = H("span", { class: "block text-center mb-10" }, "or", -1)),
                    ge(Ee, {
                      type: "url",
                      name: "url",
                      modelValue: N.value,
                      "onUpdate:modelValue": $[0] || ($[0] = (te) => N.value = te),
                      label: K(l)("wizard.upload.url.label"),
                      onLink: at,
                      validation: !0,
                      "validation-messages": {
                        required: K(l)("wizard.upload.url.error.required"),
                        invalid: K(l)("wizard.upload.url.error.url")
                      },
                      "aria-label": K(l)("wizard.upload.url.label"),
                      ref_key: "stepOneStart",
                      ref: g
                    }, null, 8, ["modelValue", "label", "validation-messages", "aria-label"]),
                    ge(Gt, {
                      onSubmit: _,
                      onCancel: lt,
                      disabled: !A.value
                    }, null, 8, ["disabled"])
                  ], 32)
                ]),
                _: 1
              }, 8, ["title", "summary"]),
              ge(Kt, {
                title: K(l)("wizard.format.title"),
                summary: w.value,
                onFocusFirstElement: J
              }, {
                default: ye(() => [
                  H("form", {
                    name: "format",
                    onSubmit: be
                  }, [
                    q.value ? (k(), ne("div", Ua, [
                      $[12] || ($[12] = H("svg", {
                        class: "inline-block fill-current w-16 h-16",
                        xmlns: "http://www.w3.org/2000/svg",
                        viewBox: "0 0 24 24"
                      }, [
                        H("path", {
                          d: "M0 0h24v24H0z",
                          fill: "none"
                        }),
                        H("path", { d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z" })
                      ], -1)),
                      H("span", Wa, oe(K(l)("wizard.format.info.cors")), 1)
                    ])) : ue("", !0),
                    ge(Ee, {
                      type: "select",
                      name: "type",
                      modelValue: M.value,
                      "onUpdate:modelValue": $[2] || ($[2] = (te) => M.value = te),
                      onSelect: Le,
                      size: me() ? S.length : L.length,
                      label: me() ? K(l)("wizard.format.type.file") : K(l)("wizard.format.type.service"),
                      options: me() ? S : L,
                      formatError: D.value,
                      failureError: F.value,
                      validation: B.value,
                      "validation-messages": {
                        required: K(l)("wizard.format.type.error.required"),
                        invalid: K(l)("wizard.format.type.error.invalid"),
                        failure: `${K(l)("wizard.format.type.error.failure")}.${q.value ? " " + K(l)("wizard.format.warn.cors") + "." : ""}${" " + K(l)("wizard.format.warn.vpn") + "."}`
                      },
                      onKeydown: $[3] || ($[3] = mn(() => {
                      }, ["stop"])),
                      "aria-label": K(l)("wizard.format.type.service"),
                      ref_key: "stepTwoStart",
                      ref: m
                    }, null, 8, ["modelValue", "size", "label", "options", "formatError", "failureError", "validation", "validation-messages", "aria-label"]),
                    ge(Gt, {
                      onSubmit: be,
                      onCancel: ct,
                      animation: !0,
                      disabled: p.value
                    }, null, 8, ["disabled"])
                  ], 32)
                ]),
                _: 1
              }, 8, ["title", "summary"]),
              ge(Kt, {
                title: K(l)("wizard.configure.title"),
                onFocusFirstElement: J
              }, {
                default: ye(() => [
                  H("form", {
                    name: "configure",
                    onSubmit: Ce,
                    ref_key: "formElement",
                    ref: a
                  }, [
                    O.value?.configOptions.includes("name") ? (k(), we(Ee, {
                      key: 0,
                      type: "text",
                      name: "name",
                      modelValue: O.value.config.name,
                      "onUpdate:modelValue": $[4] || ($[4] = (te) => O.value.config.name = te),
                      onLink: je,
                      label: K(l)("wizard.configure.name.label"),
                      "aria-label": K(l)("wizard.configure.name.label"),
                      validation: !0,
                      "validation-messages": {
                        required: K(l)("wizard.configure.name.error.required")
                      },
                      ref_key: "stepThreeStart",
                      ref: E,
                      onFocusElement: se,
                      activeStep: c.value,
                      step: 2
                    }, null, 8, ["modelValue", "label", "aria-label", "validation-messages", "activeStep"])) : ue("", !0),
                    O.value?.configOptions.includes("nameField") ? (k(), we(Ee, {
                      key: 1,
                      type: "select",
                      name: "nameField",
                      modelValue: O.value.config.nameField,
                      "onUpdate:modelValue": $[5] || ($[5] = (te) => O.value.config.nameField = te),
                      label: K(l)("wizard.configure.nameField.label"),
                      "aria-label": K(l)("wizard.configure.nameField.label"),
                      defaultOption: !0,
                      options: Ie()
                    }, null, 8, ["modelValue", "label", "aria-label", "options"])) : ue("", !0),
                    O.value?.configOptions.includes("tooltipField") ? (k(), we(Ee, {
                      key: 2,
                      type: "select",
                      name: "tooltipField",
                      modelValue: O.value.config.tooltipField,
                      "onUpdate:modelValue": $[6] || ($[6] = (te) => O.value.config.tooltipField = te),
                      label: K(l)("wizard.configure.tooltipField.label"),
                      "aria-label": K(l)("wizard.configure.tooltipField.label"),
                      options: Ie()
                    }, null, 8, ["modelValue", "label", "aria-label", "options"])) : ue("", !0),
                    O.value?.configOptions.includes("latField") ? (k(), we(Ee, {
                      key: 3,
                      type: "select",
                      name: "latField",
                      modelValue: O.value.config.latField,
                      "onUpdate:modelValue": $[7] || ($[7] = (te) => O.value.config.latField = te),
                      defaultOption: !0,
                      label: K(l)("wizard.configure.latField.label"),
                      "aria-label": K(l)("wizard.configure.latField.label"),
                      options: Se("lat")
                    }, null, 8, ["modelValue", "label", "aria-label", "options"])) : ue("", !0),
                    O.value?.configOptions.includes("longField") ? (k(), we(Ee, {
                      key: 4,
                      type: "select",
                      name: "longField",
                      modelValue: O.value.config.longField,
                      "onUpdate:modelValue": $[8] || ($[8] = (te) => O.value.config.longField = te),
                      defaultOption: !0,
                      label: K(l)("wizard.configure.longField.label"),
                      "aria-label": K(l)("wizard.configure.longField.label"),
                      options: Se("lon")
                    }, null, 8, ["modelValue", "label", "aria-label", "options"])) : ue("", !0),
                    O.value?.configOptions.includes("sublayers") ? (k(), ne("div", Ga, [
                      ge(Ee, {
                        type: "checkbox",
                        name: "nested",
                        onNested: Fe,
                        label: K(l)("wizard.configure.sublayers.nested"),
                        "aria-label": K(l)("wizard.configure.sublayers.nested")
                      }, null, 8, ["label", "aria-label"]),
                      (k(), we(Ee, {
                        type: "select",
                        key: v.value,
                        name: "sublayers",
                        modelValue: O.value.config.sublayers,
                        "onUpdate:modelValue": $[9] || ($[9] = (te) => O.value.config.sublayers = te),
                        onSelect: Ae,
                        label: K(l)("wizard.configure.sublayers.label"),
                        "aria-label": K(l)("wizard.configure.sublayers.label"),
                        options: O.value.layers,
                        selectedValues: P.value,
                        sublayerOptions: De,
                        multiple: !0,
                        searchable: !0,
                        validation: !0,
                        "validation-messages": {
                          required: K(l)("wizard.configure.sublayers.error.required")
                        },
                        onKeydown: $[10] || ($[10] = mn(() => {
                        }, ["stop"]))
                      }, null, 8, ["modelValue", "label", "aria-label", "options", "selectedValues", "validation-messages"]))
                    ])) : ue("", !0),
                    H("label", {
                      class: "sr-only",
                      for: `${h.value}-color-hex`
                    }, oe(K(l)("wizard.configure.colour.hex")), 9, Ka),
                    O.value?.configOptions.includes("colour") ? (k(), ne("label", Xa, oe(K(l)("wizard.configure.colour.label")), 1)) : ue("", !0),
                    O.value?.configOptions.includes("colour") ? (k(), we(K(Nn), {
                      key: 7,
                      "alpha-channel": "hide",
                      "visible-formats": ["hex"],
                      "default-format": "hex",
                      id: h.value,
                      color: u.value,
                      onColorChange: Ze
                    }, {
                      "hue-range-input-label": ye(() => [
                        H("span", Qa, oe(K(l)("wizard.configure.colour.hue")), 1)
                      ]),
                      "copy-button": ye(() => [
                        H("span", ka, oe(K(l)("wizard.configure.colour.copy")), 1),
                        $[13] || ($[13] = H("svg", {
                          "aria-hidden": "true",
                          xmlns: "http://www.w3.org/2000/svg",
                          width: "15",
                          height: "15",
                          viewBox: "0 0 15 15"
                        }, [
                          H("path", {
                            d: "M5 0v2H1v13h12v-3h-1v2H2V5h10v3h1V2H9V0zm1 1h2v2h3v1H3V3h3z",
                            fill: "currentColor"
                          }),
                          H("path", {
                            d: "M10 7v2h5v2h-5v2l-3-3zM3 6h5v1H3zm0 2h3v1H3zm0 2h3v1H3zm0 2h5v1H3z",
                            fill: "currentColor"
                          })
                        ], -1))
                      ]),
                      _: 1
                    }, 8, ["id", "color"])) : ue("", !0),
                    ge(Gt, {
                      onSubmit: Ce,
                      onCancel: ut,
                      disabled: !R.value
                    }, null, 8, ["disabled"])
                  ], 544)
                ]),
                _: 1
              }, 8, ["title"])
            ]),
            _: 1
          }, 8, ["activeStep"]),
          U.value ? (k(), ne("div", {
            key: 0,
            class: _e(["p-3 border-solid border-2", I.value ? "bg-green-100 !border-green-900" : "bg-red-100 !border-red-900"])
          }, oe(T.value) + " " + oe(K(l)(`wizard.upload.${I.value ? "success" : "fail"}`)), 3)) : ue("", !0)
        ]),
        _: 1
      }, 8, ["panel"]);
    };
  }
}), qa = /* @__PURE__ */ xt(Ya, [["__scopeId", "data-v-1351a391"]]);
export {
  qa as default
};
//# sourceMappingURL=screen-DgQq0lNv.js.map
