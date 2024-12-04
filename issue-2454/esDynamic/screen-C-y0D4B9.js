import { fV as W, c4 as te, iP as Xe, c7 as Se, f_ as ct, c5 as ut, c6 as dt, cc as k, ci as ee, iN as Ge, cd as Ze, f$ as ue, cj as mn, ck as yn, ce as ae, c1 as qe, c2 as $t, iQ as br, cf as G, ix as ft, js as Sr, c3 as Bt, c9 as Pt, cg as pe, cb as ge, ch as lt, fW as Je, iw as dn, iT as Or, nH as xr, j7 as Er, i$ as oe, nI as Nr, g1 as fn, ld as Tt, nJ as ze, c8 as Tr, ca as Ie, iJ as vn, mR as Cr } from "./main-CPC-ab0b.js";
import { r as Ir } from "./vue.esm-bundler-UGAwJ6gd.js";
function $e(d, o, l) {
  return Math.max(o, Math.min(d, l));
}
function fe(d, o = 2) {
  return d.toFixed(o).replace(/\.?0+$/, "");
}
function hn(d) {
  return d.endsWith(".") ? NaN : (parseFloat(d) % 360 + 360) % 360 / 360;
}
function pn(d) {
  return fe(360 * d);
}
function Ke(d) {
  if (!d.endsWith("%")) return NaN;
  const o = d.substring(0, d.length - 1);
  if (o.endsWith(".")) return NaN;
  const l = parseFloat(o);
  return Number.isNaN(l) ? NaN : $e(l, 0, 100) / 100;
}
function at(d) {
  return fe(100 * d) + "%";
}
function Ct(d) {
  if (d.endsWith("%")) return Ke(d);
  if (d.endsWith(".")) return NaN;
  const o = parseFloat(d);
  return Number.isNaN(o) ? NaN : $e(o, 0, 255) / 255;
}
function It(d) {
  return fe(255 * d);
}
function Lt(d) {
  return d.endsWith("%") ? Ke(d) : $e(parseFloat(d), 0, 1);
}
function At(d) {
  return String(d);
}
const zt = { hsl: { h: { to: pn, from: hn }, s: { to: at, from: Ke }, l: { to: at, from: Ke }, a: { to: At, from: Lt } }, hwb: { h: { to: pn, from: hn }, w: { to: at, from: Ke }, b: { to: at, from: Ke }, a: { to: At, from: Lt } }, rgb: { r: { to: It, from: Ct }, g: { to: It, from: Ct }, b: { to: It, from: Ct }, a: { to: At, from: Lt } } };
function ot(d) {
  const o = d.replace(/^#/, ""), l = [], e = o.length > 4 ? 2 : 1;
  for (let i = 0; i < o.length; i += e) {
    const r = o.slice(i, i + e);
    l.push(r.repeat(e % 2 + 1));
  }
  l.length === 3 && l.push("ff");
  const a = l.map((i) => parseInt(i, 16) / 255);
  return { r: a[0], g: a[1], b: a[2], a: a[3] };
}
function Mt(d) {
  const o = d.l < 0.5 ? d.l * (1 + d.s) : d.l + d.s - d.l * d.s, l = 2 * d.l - o;
  return { r: Rt(l, o, d.h + 1 / 3), g: Rt(l, o, d.h), b: Rt(l, o, d.h - 1 / 3), a: d.a };
}
function Rt(d, o, l) {
  return l < 0 ? l += 1 : l > 1 && (l -= 1), l < 1 / 6 ? d + 6 * (o - d) * l : l < 0.5 ? o : l < 2 / 3 ? d + (o - d) * (2 / 3 - l) * 6 : d;
}
function ke(d) {
  return { r: wt(5, d), g: wt(3, d), b: wt(1, d), a: d.a };
}
function wt(d, o) {
  const l = (d + 6 * o.h) % 6;
  return o.v - o.v * o.s * Math.max(0, Math.min(l, 4 - l, 1));
}
function Ue(d) {
  return { h: d.h, s: d.b === 1 ? 0 : 1 - d.w / (1 - d.b), v: 1 - d.b, a: d.a };
}
function We(d) {
  const o = Math.min(d.r, d.g, d.b), l = Math.max(d.r, d.g, d.b);
  let e;
  return e = l === o ? 0 : l === d.r ? (0 + (d.g - d.b) / (l - o)) / 6 : l === d.g ? (2 + (d.b - d.r) / (l - o)) / 6 : (4 + (d.r - d.g) / (l - o)) / 6, e < 0 && (e += 1), { h: e, w: o, b: 1 - l, a: d.a };
}
function jt(d) {
  const o = We(d), l = o.w, e = 1 - o.b, a = (e + l) / 2;
  let i;
  return i = e === 0 || l === 1 ? 0 : (e - a) / Math.min(a, 1 - a), { h: o.h, s: i, l: a, a: d.a };
}
function it(d) {
  return "#" + Object.values(d).map((o) => {
    const l = 255 * o, e = Math.round(l).toString(16);
    return e.length === 1 ? "0" + e : e;
  }).join("");
}
const Lr = { hex: [["hsl", (d) => ye(d, [ot, jt])], ["hsv", (d) => ye(d, [ot, We, Ue])], ["hwb", (d) => ye(d, [ot, We])], ["rgb", ot]], hsl: [["hex", (d) => ye(d, [Mt, it])], ["hsv", function(d) {
  const o = d.l + d.s * Math.min(d.l, 1 - d.l), l = o === 0 ? 0 : 2 - 2 * d.l / o;
  return { h: d.h, s: l, v: o, a: d.a };
}], ["hwb", (d) => ye(d, [Mt, We])], ["rgb", Mt]], hsv: [["hex", (d) => ye(d, [ke, it])], ["hsl", function(d) {
  const o = d.v - d.v * d.s / 2, l = Math.min(o, 1 - o), e = l === 0 ? 0 : (d.v - o) / l;
  return { h: d.h, s: e, l: o, a: d.a };
}], ["hwb", function(d) {
  return { h: d.h, w: (1 - d.s) * d.v, b: 1 - d.v, a: d.a };
}], ["rgb", ke]], hwb: [["hex", (d) => ye(d, [Ue, ke, it])], ["hsl", (d) => ye(d, [Ue, ke, jt])], ["hsv", Ue], ["rgb", (d) => ye(d, [Ue, ke])]], rgb: [["hex", it], ["hsl", jt], ["hsv", (d) => ye(d, [We, Ue])], ["hwb", We]] };
function ye(d, o) {
  return o.reduce((l, e) => e(l), d);
}
function st(d) {
  const o = {};
  for (const l in d) o[l] = d[l];
  return o;
}
const Ar = { hex: (d, o) => o && [5, 9].includes(d.length) ? d.substring(0, d.length - (d.length - 1) / 4) : d, hsl: (d, o) => `hsl(${fe(360 * d.h)} ${fe(100 * d.s)}% ${fe(100 * d.l)}%` + (o ? ")" : ` / ${fe(d.a)})`), hwb: (d, o) => `hwb(${fe(360 * d.h)} ${fe(100 * d.w)}% ${fe(100 * d.b)}%` + (o ? ")" : ` / ${fe(d.a)})`), rgb: (d, o) => `rgb(${fe(255 * d.r)} ${fe(255 * d.g)} ${fe(255 * d.b)}` + (o ? ")" : ` / ${fe(d.a)})`) };
function gn(d, o, l) {
  return Ar[o](d, l);
}
function bn(d) {
  return /^#(?:(?:[A-F0-9]{2}){3,4}|[A-F0-9]{3,4})$/i.test(d);
}
function Mr(d) {
  if (typeof d != "string")
    return { format: function(u) {
      return Object.prototype.hasOwnProperty.call(u, "r") ? "rgb" : Object.prototype.hasOwnProperty.call(u, "w") ? "hwb" : Object.prototype.hasOwnProperty.call(u, "v") ? "hsv" : "hsl";
    }(d), color: d };
  if (bn(d)) return { format: "hex", color: d };
  if (!d.includes("(")) {
    const c = document.createElement("canvas").getContext("2d");
    c.fillStyle = d;
    const u = c.fillStyle;
    return u === "#000000" && d !== "black" ? null : { format: "hex", color: u };
  }
  const [o, l] = d.split("("), e = o.substring(0, 3), a = l.replace(/[,/)]/g, " ").replace(/\s+/g, " ").trim().split(" ");
  a.length === 3 && a.push("1");
  const i = (e + "a").split(""), r = Object.fromEntries(i.map((c, u) => [c, zt[e][c].from(a[u])]));
  return { format: e, color: r };
}
const Ft = ["hex", "hsl", "hwb", "rgb"], Rr = ["show", "hide"], wr = { class: "vacp-range-input-group" }, jr = ["for"], Fr = { class: "vacp-range-input-label-text vacp-range-input-label-text--hue" }, Dr = ["id", "value"], Vr = ["for"], Pr = { class: "vacp-range-input-label-text vacp-range-input-label-text--alpha" }, zr = ["id", "value"], $r = W("span", { class: "vacp-visually-hidden" }, "Copy color", -1), Br = W("svg", { class: "vacp-icon", xmlns: "http://www.w3.org/2000/svg", "aria-hidden": "true", width: "24", height: "24", viewBox: "0 0 32 32" }, [W("path", { d: "M25.313 28v-18.688h-14.625v18.688h14.625zM25.313 6.688c1.438 0 2.688 1.188 2.688 2.625v18.688c0 1.438-1.25 2.688-2.688 2.688h-14.625c-1.438 0-2.688-1.25-2.688-2.688v-18.688c0-1.438 1.25-2.625 2.688-2.625h14.625zM21.313 1.313v2.688h-16v18.688h-2.625v-18.688c0-1.438 1.188-2.688 2.625-2.688h16z", fill: "currentColor" })], -1), Hr = { class: "vacp-color-inputs" }, Ur = { class: "vacp-color-input-group" }, Wr = ["for"], Gr = W("span", { class: "vacp-color-input-label-text" }, " Hex ", -1), Kr = ["id", "value"], Xr = ["id", "for", "onInput"], Qr = { class: "vacp-color-input-label-text" }, Yr = ["id", "value", "onInput"], kr = W("span", { class: "vacp-visually-hidden" }, "Switch format", -1), Jr = W("svg", { class: "vacp-icon", "aria-hidden": "true", xmlns: "http://www.w3.org/2000/svg", width: "16", height: "15" }, [W("path", { d: "M8 15l5-5-1-1-4 2-4-2-1 1zm4-9l1-1-5-5-5 5 1 1 4-2z", fill: "currentColor" })], -1);
var Sn = { __name: "ColorPicker", props: { color: { type: [String, Object], default: "#ffffffff" }, id: { type: String, default: "color-picker" }, visibleFormats: { type: Array, default: () => Ft, validator: (d) => d.length > 0 && d.every((o) => Ft.includes(o)) }, defaultFormat: { type: String, default: "hsl", validator: (d) => Ft.includes(d) }, alphaChannel: { type: String, default: "show", validator: (d) => Rr.includes(d) } }, emits: ["color-change"], setup(d, { emit: o }) {
  const l = d, e = te(null), a = te(null), i = te(null);
  let r = !1;
  const c = te(l.visibleFormats.includes(l.defaultFormat) ? l.defaultFormat : l.visibleFormats[0]), u = Xe({ hex: "#ffffffff", hsl: { h: 0, s: 0, l: 1, a: 1 }, hsv: { h: 0, s: 0, v: 1, a: 1 }, hwb: { h: 0, w: 1, b: 0, a: 1 }, rgb: { r: 1, g: 1, b: 1, a: 1 } }), h = Se(function() {
    const g = Object.keys(u[c.value]);
    return c.value !== "hex" && l.alphaChannel === "hide" ? g.slice(0, 3) : g;
  }), v = Se(function() {
    return l.alphaChannel === "hide" && [5, 9].includes(u.hex.length) ? u.hex.substring(0, u.hex.length - (u.hex.length - 1) / 4) : u.hex;
  });
  function p() {
    const g = (l.visibleFormats.findIndex((C) => C === c.value) + 1) % l.visibleFormats.length;
    c.value = l.visibleFormats[g];
  }
  function b(g) {
    r = !0, O(g);
  }
  function m(g) {
    r = !0, j(g);
  }
  function y() {
    r = !1;
  }
  function O(g) {
    g.buttons === 1 && r !== !1 && a.value instanceof HTMLElement && A(a.value, g.clientX, g.clientY);
  }
  function j(g) {
    if (r === !1 || !(a.value instanceof HTMLElement)) return;
    g.preventDefault();
    const C = g.touches[0];
    A(a.value, C.clientX, C.clientY);
  }
  function A(g, C, I) {
    const w = function(P, R, J) {
      const K = P.getBoundingClientRect(), Q = R - K.left, se = J - K.top;
      return { x: K.width === 0 ? 0 : $e(Q / K.width, 0, 1), y: K.height === 0 ? 0 : $e(1 - se / K.height, 0, 1) };
    }(g, C, I), B = st(u.hsv);
    B.s = w.x, B.v = w.y, E("hsv", B);
  }
  function M(g) {
    if (!["ArrowUp", "ArrowRight", "ArrowDown", "ArrowLeft"].includes(g.key)) return;
    g.preventDefault();
    const C = ["ArrowLeft", "ArrowDown"].includes(g.key) ? -1 : 1, I = ["ArrowLeft", "ArrowRight"].includes(g.key) ? "s" : "v", w = g.shiftKey ? 10 : 1, B = u.hsv[I] + C * w * 0.01, P = st(u.hsv);
    P[I] = $e(B, 0, 1), E("hsv", P);
  }
  function D(g) {
    const C = Mr(g);
    C !== null && E(C.format, C.color);
  }
  function V(g, C) {
    const I = g.currentTarget, w = st(u.hsv);
    w[C] = parseInt(I.value) / parseInt(I.max), E("hsv", w);
  }
  function z(g) {
    const C = g.target;
    bn(C.value) && E("hex", C.value);
  }
  function T(g, C) {
    const I = g.target, w = st(u[c.value]), B = zt[c.value][C].from(I.value);
    Number.isNaN(B) || B === void 0 || (w[C] = B, E(c.value, w));
  }
  function E(g, C) {
    let I = C;
    if (l.alphaChannel === "hide") if (typeof C != "string") C.a = 1, I = C;
    else if ([5, 9].includes(C.length)) {
      const w = (C.length - 1) / 4;
      I = C.substring(0, C.length - w) + "f".repeat(w);
    } else [4, 7].includes(C.length) && (I = C + "f".repeat((C.length - 1) / 3));
    if (!function(w, B) {
      if (typeof w == "string" || typeof B == "string") return w === B;
      for (const P in w) if (w[P] !== B[P]) return !1;
      return !0;
    }(u[g], I)) {
      (function(B, P) {
        u[B] = P;
        for (const [R, J] of Lr[B]) u[R] = J(u[B]);
      })(g, I);
      const w = function() {
        const B = l.alphaChannel === "hide", P = gn(u[c.value], c.value, B);
        return { colors: u, cssColor: P };
      }();
      o("color-change", w);
    }
    (function() {
      e.value instanceof HTMLElement && a.value instanceof HTMLElement && i.value instanceof HTMLElement && (e.value.style.setProperty("--vacp-hsl-h", String(u.hsl.h)), e.value.style.setProperty("--vacp-hsl-s", String(u.hsl.s)), e.value.style.setProperty("--vacp-hsl-l", String(u.hsl.l)), e.value.style.setProperty("--vacp-hsl-a", String(u.hsl.a)), a.value.style.position = "relative", a.value.style.backgroundColor = "hsl(calc(var(--vacp-hsl-h) * 360) 100% 50%)", a.value.style.backgroundImage = "linear-gradient(to top, #000, transparent), linear-gradient(to right, #fff, transparent)", i.value.style.boxSizing = "border-box", i.value.style.position = "absolute", i.value.style.left = 100 * u.hsv.s + "%", i.value.style.bottom = 100 * u.hsv.v + "%");
    })();
  }
  async function L() {
    const g = u[c.value], C = l.alphaChannel === "hide", I = gn(g, c.value, C);
    await window.navigator.clipboard.writeText(I);
  }
  function $(g, C) {
    return zt[g][C].to(u[g][C]);
  }
  function N(g) {
    if (!["ArrowUp", "ArrowRight", "ArrowDown", "ArrowLeft"].includes(g.key) || !g.shiftKey) return;
    const C = g.currentTarget, I = parseFloat(C.step), w = ["ArrowLeft", "ArrowDown"].includes(g.key) ? -1 : 1, B = $e(parseFloat(C.value) + w * I * 10, parseInt(C.min), parseInt(C.max));
    C.value = String(B - w * I);
  }
  return ct(() => l.color, D), ut(function() {
    document.addEventListener("mousemove", O, { passive: !1 }), document.addEventListener("touchmove", j, { passive: !1 }), document.addEventListener("mouseup", y), document.addEventListener("touchend", y), D(l.color);
  }), dt(function() {
    document.removeEventListener("mousemove", O), document.removeEventListener("touchmove", j), document.removeEventListener("mouseup", y), document.removeEventListener("touchend", y);
  }), (g, C) => (k(), ee("div", { ref_key: "colorPicker", ref: e, class: "vacp-color-picker" }, [W("div", { ref_key: "colorSpace", ref: a, class: "vacp-color-space", onMousedown: b, onTouchstart: m }, [W("div", { ref_key: "thumb", ref: i, class: "vacp-color-space-thumb", tabindex: "0", "aria-label": "Color space thumb", onKeydown: M }, null, 544)], 544), W("div", wr, [W("label", { class: "vacp-range-input-label vacp-range-input-label--hue", for: `${d.id}-hue-slider` }, [W("span", Fr, [Ge(g.$slots, "hue-range-input-label", {}, () => [Ze("Hue")])]), W("input", { id: `${d.id}-hue-slider`, class: "vacp-range-input vacp-range-input--hue", value: 360 * u.hsv.h, type: "range", min: "0", max: "360", step: "1", onKeydownPassive: N, onInput: C[0] || (C[0] = (I) => V(I, "h")) }, null, 40, Dr)], 8, jr), d.alphaChannel === "show" ? (k(), ee("label", { key: 0, class: "vacp-range-input-label vacp-range-input-label--alpha", for: `${d.id}-alpha-slider` }, [W("span", Pr, [Ge(g.$slots, "alpha-range-input-label", {}, () => [Ze("Alpha")])]), W("input", { id: `${d.id}-alpha-slider`, class: "vacp-range-input vacp-range-input--alpha", value: 100 * u.hsv.a, type: "range", min: "0", max: "100", step: "1", onKeydownPassive: N, onInput: C[1] || (C[1] = (I) => V(I, "a")) }, null, 40, zr)], 8, Vr)) : ue("v-if", !0)]), W("button", { class: "vacp-copy-button", type: "button", onClick: L }, [Ge(g.$slots, "copy-button", {}, () => [$r, Br])]), W("div", Hr, [W("div", Ur, [c.value === "hex" ? (k(), ee("label", { key: 0, class: "vacp-color-input-label", for: `${d.id}-color-hex` }, [Gr, W("input", { id: `${d.id}-color-hex`, class: "vacp-color-input", type: "text", value: v.value, onInput: z }, null, 40, Kr)], 8, Wr)) : (k(!0), ee(mn, { key: 1 }, yn(h.value, (I) => (k(), ee("label", { id: `${d.id}-color-${c.value}-${I}-label`, key: `${d.id}-color-${c.value}-${I}-label`, class: "vacp-color-input-label", for: `${d.id}-color-${c.value}-${I}`, onInput: (w) => T(w, I) }, [W("span", Qr, ae(I.toUpperCase()), 1), W("input", { id: `${d.id}-color-${c.value}-${I}`, class: "vacp-color-input", type: "text", value: $(c.value, I), onInput: (w) => T(w, I) }, null, 40, Yr)], 40, Xr))), 128))]), d.visibleFormats.length > 1 ? (k(), ee("button", { key: 0, class: "vacp-format-switch-button", type: "button", onClick: p }, [Ge(g.$slots, "format-switch-button", {}, () => [kr, Jr])])) : ue("v-if", !0)])], 512));
} };
(function(d, o) {
  o === void 0 && (o = {});
  var l = o.insertAt;
  if (typeof document < "u") {
    var e = document.head || document.getElementsByTagName("head")[0], a = document.createElement("style");
    a.type = "text/css", l === "top" && e.firstChild ? e.insertBefore(a, e.firstChild) : e.appendChild(a), a.styleSheet ? a.styleSheet.cssText = d : a.appendChild(document.createTextNode(d));
  }
})(".vacp-color-picker{--vacp-color:hsl(calc(var(--vacp-hsl-h)*360) calc(var(--vacp-hsl-s)*100%) calc(var(--vacp-hsl-l)*100%)/var(--vacp-hsl-a));--vacp-focus-color:#19f;--vacp-focus-outline:2px solid var(--vacp-focus-color);--vacp-border-width:1px;--vacp-border-color:#000;--vacp-border:var(--vacp-border-width) solid var(--vacp-border-color);--vacp-color-space-width:300px;--vacp-spacing:6px;grid-gap:var(--vacp-spacing);background-color:#fff;display:grid;font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol;font-size:.8em;grid-template-columns:1fr min-content;max-width:var(--vacp-color-space-width);padding:var(--vacp-spacing)}.vacp-color-picker,.vacp-color-picker *,.vacp-color-picker :after,.vacp-color-picker :before{box-sizing:border-box}.vacp-color-picker button::-moz-focus-inner{border:none;padding:0}.vacp-color-picker :focus{outline:var(--vacp-focus-outline)}.vacp-color-space{grid-column:1/-1;height:calc(var(--vacp-color-space-width)*.6);overflow:hidden}.vacp-color-space-thumb{--vacp-thumb-size:calc(var(--vacp-spacing)*4);border:3px solid #fff;border-radius:50%;box-shadow:0 0 0 var(--vacp-border-width) var(--vacp-border-color);height:var(--vacp-thumb-size);margin-bottom:calc(var(--vacp-thumb-size)*-1/2);margin-left:calc(var(--vacp-thumb-size)*-1/2);transform:rotate(0);width:var(--vacp-thumb-size)}.vacp-color-space-thumb:focus{box-shadow:0 0 0 var(--vacp-border-width) var(--vacp-border-color),0 0 0 3px var(--vacp-focus-color);outline-color:transparent}.vacp-range-input-label{--vacp-slider-track-width:100%;--vacp-slider-track-height:calc(var(--vacp-spacing)*3);display:block}.vacp-range-input-group{display:flex;flex-direction:column;justify-content:center}.vacp-range-input-group>:not(:first-child){margin-top:var(--vacp-spacing)}.vacp-range-input,.vacp-range-input::-webkit-slider-thumb{-webkit-appearance:none}.vacp-range-input{background:none;border:none;display:block;height:var(--vacp-slider-track-height);margin-bottom:calc(var(--vacp-spacing)/2 + 1px);margin-left:0;margin-right:0;margin-top:calc(var(--vacp-spacing)/2 + 1px);padding:0;width:var(--vacp-slider-track-width)}.vacp-range-input:focus{outline:none}.vacp-range-input::-moz-focus-outer{border:none}.vacp-range-input--alpha{background-color:#fff;background-image:linear-gradient(45deg,#eee 25%,transparent 0,transparent 75%,#eee 0,#eee),linear-gradient(45deg,#eee 25%,transparent 0,transparent 75%,#eee 0,#eee);background-position:0 0,var(--vacp-spacing) var(--vacp-spacing);background-size:calc(var(--vacp-spacing)*2) calc(var(--vacp-spacing)*2)}.vacp-range-input::-moz-range-track{border:var(--vacp-border);box-sizing:content-box;height:var(--vacp-slider-track-height);width:var(--vacp-slider-track-width)}.vacp-range-input::-webkit-slider-runnable-track{border:var(--vacp-border);box-sizing:content-box;height:var(--vacp-slider-track-height);width:var(--vacp-slider-track-width)}.vacp-range-input::-ms-track{border:var(--vacp-border);box-sizing:content-box;height:var(--vacp-slider-track-height);width:var(--vacp-slider-track-width)}.vacp-range-input:focus::-moz-range-track{outline:var(--vacp-focus-outline)}.vacp-range-input:focus::-webkit-slider-runnable-track{outline:var(--vacp-focus-outline)}.vacp-range-input:focus::-ms-track{outline:var(--vacp-focus-outline)}.vacp-range-input--alpha::-moz-range-track{background-image:linear-gradient(to right,transparent,var(--vacp-color))}.vacp-range-input--alpha::-webkit-slider-runnable-track{background-image:linear-gradient(to right,transparent,var(--vacp-color))}.vacp-range-input--alpha::-ms-track{background-image:linear-gradient(to right,transparent,var(--vacp-color))}.vacp-range-input--hue::-moz-range-track{background-image:linear-gradient(90deg,red 0,#ff0 16.66667%,#0f0 33.33333%,#0ff 50%,#00f 66.66667%,#f0f 83.33333%,red 100%)}.vacp-range-input--hue::-webkit-slider-runnable-track{background-image:linear-gradient(90deg,red 0,#ff0 16.66667%,#0f0 33.33333%,#0ff 50%,#00f 66.66667%,#f0f 83.33333%,red 100%)}.vacp-range-input--hue::-ms-track{background-image:linear-gradient(90deg,red 0,#ff0 16.66667%,#0f0 33.33333%,#0ff 50%,#00f 66.66667%,#f0f 83.33333%,red 100%)}.vacp-range-input::-moz-range-thumb{background-color:transparent;border:3px solid #fff;border-radius:50%;box-shadow:0 0 0 var(--vacp-border-width) var(--vacp-border-color);box-sizing:content-box;height:var(--vacp-slider-track-height);isolation:isolate;width:var(--vacp-slider-track-height)}.vacp-range-input::-webkit-slider-thumb{background-color:transparent;border:3px solid #fff;border-radius:50%;box-shadow:0 0 0 var(--vacp-border-width) var(--vacp-border-color);box-sizing:content-box;height:var(--vacp-slider-track-height);isolation:isolate;margin-top:calc((var(--vacp-spacing)/2)*-1);width:var(--vacp-slider-track-height)}.vacp-range-input::-ms-thumb{background-color:transparent;border:3px solid #fff;border-radius:50%;box-shadow:0 0 0 var(--vacp-border-width) var(--vacp-border-color);box-sizing:content-box;height:var(--vacp-slider-track-height);isolation:isolate;margin-top:calc((var(--vacp-spacing)/2)*-1);width:var(--vacp-slider-track-height)}.vacp-copy-button{align-items:center;align-self:center;background-color:#fff;border:var(--vacp-border-width) solid transparent;border-radius:50%;display:flex;height:calc(var(--vacp-spacing)*6);justify-content:center;justify-self:center;overflow:hidden;position:relative;width:calc(var(--vacp-spacing)*6)}.vacp-copy-button:enabled:focus{border-color:var(--vacp-border-color);box-shadow:0 0 0 2px var(--vacp-focus-color);outline:none}.vacp-copy-button:enabled:hover{background-color:#0002}.vacp-color-inputs{align-items:center;display:flex;grid-column:1/-1}.vacp-color-inputs>:not(:first-child){margin-left:var(--vacp-spacing)}.vacp-color-input-group{column-gap:var(--vacp-spacing);display:grid;flex-grow:1;grid-auto-flow:column}.vacp-color-input-label{text-align:center}.vacp-color-input{border:var(--vacp-border);margin:0;margin-top:calc(var(--vacp-spacing)/2);text-align:center;width:100%}.vacp-color-input,.vacp-format-switch-button{background-color:#fff;color:inherit;font:inherit;padding:var(--vacp-spacing)}.vacp-format-switch-button{align-items:center;border:var(--vacp-border-width) solid transparent;border-radius:50%;display:flex;justify-content:center;margin:0}.vacp-format-switch-button:enabled:focus{border-color:var(--vacp-border-color)}.vacp-format-switch-button:enabled:hover{background-color:#0002}.vacp-visually-hidden{clip:rect(0 0 0 0);border:0;height:1px;margin:-1px;overflow:hidden;padding:0;position:absolute;white-space:nowrap;width:1px}"), Sn.__file = "src/ColorPicker.vue";
const Zr = { class: "flex justify-end mb-20" }, qr = ["disabled", "animation"], _r = { class: "button-text" }, ea = /* @__PURE__ */ qe({
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
    const { t: o } = $t(), l = d, e = te();
    ct(br(l, "disabled"), (i) => {
      !i && e.value.classList.contains("button--loading") && e.value.classList.remove("button--loading");
    });
    const a = () => {
      l.animation && e.value.classList.toggle("button--loading");
    };
    return (i, r) => (k(), ee("div", Zr, [
      W("button", {
        class: "hover:bg-gray-200 text-gray-600 font-bold py-8 px-16 m-2",
        type: "button",
        onClick: r[0] || (r[0] = (c) => i.$emit("cancel"))
      }, ae(G(o)("wizard.step.cancel")), 1),
      W("button", {
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
        W("span", _r, ae(G(o)("wizard.step.continue")), 1)
      ], 8, qr)
    ]));
  }
}), Dt = /* @__PURE__ */ ft(ea, [["__scopeId", "data-v-5e77d8d6"]]);
var On = { exports: {} };
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
          var p = r.call(v, u), b = v[u];
          try {
            v[u] = void 0;
            var m = !0;
          } catch {
          }
          var y = c.call(v);
          return m && (p ? v[u] = b : delete v[u]), y;
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
            var p = arguments.length ? arguments[0] : void 0, b = r(this), m = c(b.length), y = h(b, 0);
            return y.length = i(y, b, b, m, 0, p === void 0 ? 1 : u(p)), y;
          }
        });
      }
    ),
    /***/
    "06cf": (
      /***/
      function(o, l, e) {
        var a = e("83ab"), i = e("d1e7"), r = e("5c6c"), c = e("fc6a"), u = e("c04e"), h = e("5135"), v = e("0cfb"), p = Object.getOwnPropertyDescriptor;
        l.f = a ? p : function(m, y) {
          if (m = c(m), y = u(y, !0), v) try {
            return p(m, y);
          } catch {
          }
          if (h(m, y)) return r(!i.f.call(m, y), m[y]);
        };
      }
    ),
    /***/
    "0cb2": (
      /***/
      function(o, l, e) {
        var a = e("7b0b"), i = Math.floor, r = "".replace, c = /\$([$&'`]|\d\d?|<[^>]*>)/g, u = /\$([$&'`]|\d\d?)/g;
        o.exports = function(h, v, p, b, m, y) {
          var O = p + h.length, j = b.length, A = u;
          return m !== void 0 && (m = a(m), A = c), r.call(y, A, function(M, D) {
            var V;
            switch (D.charAt(0)) {
              case "$":
                return "$";
              case "&":
                return h;
              case "`":
                return v.slice(0, p);
              case "'":
                return v.slice(O);
              case "<":
                V = m[D.slice(1, -1)];
                break;
              default:
                var z = +D;
                if (z === 0) return M;
                if (z > j) {
                  var T = i(z / 10);
                  return T === 0 ? M : T <= j ? b[T - 1] === void 0 ? D.charAt(1) : b[T - 1] + D.charAt(1) : M;
                }
                V = b[z - 1];
            }
            return V === void 0 ? "" : V;
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
        var a = e("d784"), i = e("44e7"), r = e("825a"), c = e("1d80"), u = e("4840"), h = e("8aa5"), v = e("50c4"), p = e("14c3"), b = e("9263"), m = e("d039"), y = [].push, O = Math.min, j = 4294967295, A = !m(function() {
          return !RegExp(j, "y");
        });
        a("split", 2, function(M, D, V) {
          var z;
          return "abbc".split(/(b)*/)[1] == "c" || "test".split(/(?:)/, -1).length != 4 || "ab".split(/(?:ab)*/).length != 2 || ".".split(/(.?)(.?)/).length != 4 || ".".split(/()()/).length > 1 || "".split(/.?/).length ? z = function(T, E) {
            var L = String(c(this)), $ = E === void 0 ? j : E >>> 0;
            if ($ === 0) return [];
            if (T === void 0) return [L];
            if (!i(T))
              return D.call(L, T, $);
            for (var N = [], g = (T.ignoreCase ? "i" : "") + (T.multiline ? "m" : "") + (T.unicode ? "u" : "") + (T.sticky ? "y" : ""), C = 0, I = new RegExp(T.source, g + "g"), w, B, P; (w = b.call(I, L)) && (B = I.lastIndex, !(B > C && (N.push(L.slice(C, w.index)), w.length > 1 && w.index < L.length && y.apply(N, w.slice(1)), P = w[0].length, C = B, N.length >= $))); )
              I.lastIndex === w.index && I.lastIndex++;
            return C === L.length ? (P || !I.test("")) && N.push("") : N.push(L.slice(C)), N.length > $ ? N.slice(0, $) : N;
          } : "0".split(void 0, 0).length ? z = function(T, E) {
            return T === void 0 && E === 0 ? [] : D.call(this, T, E);
          } : z = D, [
            // `String.prototype.split` method
            // https://tc39.es/ecma262/#sec-string.prototype.split
            function(E, L) {
              var $ = c(this), N = E?.[M];
              return N !== void 0 ? N.call(E, $, L) : z.call(String($), E, L);
            },
            // `RegExp.prototype[@@split]` method
            // https://tc39.es/ecma262/#sec-regexp.prototype-@@split
            //
            // NOTE: This cannot be properly polyfilled in engines that don't support
            // the 'y' flag.
            function(T, E) {
              var L = V(z, T, this, E, z !== D);
              if (L.done) return L.value;
              var $ = r(T), N = String(this), g = u($, RegExp), C = $.unicode, I = ($.ignoreCase ? "i" : "") + ($.multiline ? "m" : "") + ($.unicode ? "u" : "") + (A ? "y" : "g"), w = new g(A ? $ : "^(?:" + $.source + ")", I), B = E === void 0 ? j : E >>> 0;
              if (B === 0) return [];
              if (N.length === 0) return p(w, N) === null ? [N] : [];
              for (var P = 0, R = 0, J = []; R < N.length; ) {
                w.lastIndex = A ? R : 0;
                var K = p(w, A ? N : N.slice(R)), Q;
                if (K === null || (Q = O(v(w.lastIndex + (A ? 0 : R)), N.length)) === P)
                  R = h(N, R, C);
                else {
                  if (J.push(N.slice(P, R)), J.length === B) return J;
                  for (var se = 1; se <= K.length - 1; se++)
                    if (J.push(K[se]), J.length === B) return J;
                  R = P = Q;
                }
              }
              return J.push(N.slice(P)), J;
            }
          ];
        }, !A);
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
        var a = e("23e7"), i = e("d58f").left, r = e("a640"), c = e("ae40"), u = e("2d00"), h = e("605d"), v = r("reduce"), p = c("reduce", { 1: 0 }), b = !h && u > 79 && u < 83;
        a({ target: "Array", proto: !0, forced: !v || !p || b }, {
          reduce: function(y) {
            return i(this, y, arguments.length, arguments.length > 1 ? arguments[1] : void 0);
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
        o.exports = function(p, b) {
          var m = p.target, y = p.global, O = p.stat, j, A, M, D, V, z;
          if (y ? A = a : O ? A = a[m] || u(m, {}) : A = (a[m] || {}).prototype, A) for (M in b) {
            if (V = b[M], p.noTargetGet ? (z = i(A, M), D = z && z.value) : D = A[M], j = v(y ? M : m + (O ? "." : "#") + M, p.forced), !j && D !== void 0) {
              if (typeof V == typeof D) continue;
              h(V, D);
            }
            (p.sham || D && D.sham) && r(V, "sham", !0), c(A, M, V, p);
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
        }), b = v.name != u;
        (p || b) && a(RegExp.prototype, u, function() {
          var y = i(this), O = String(y.source), j = y.flags, A = String(j === void 0 && y instanceof RegExp && !("flags" in h) ? c.call(y) : j);
          return "/" + O + "/" + A;
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
          for (var p = c(v), b = p.length, m = 0, y; b > m; ) i.f(h, y = p[m++], v[y]);
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
            var b = a(h), m = i(b.length), y = r(p, m), O;
            if (u && v != v) {
              for (; m > y; )
                if (O = b[y++], O != O) return !0;
            } else for (; m > y; y++)
              if ((u || y in b) && b[y] === v) return u || y || 0;
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
        }), b = c(function() {
          h.sort(null);
        }), m = u("sort"), y = p || !b || !m;
        a({ target: "Array", proto: !0, forced: y }, {
          sort: function(j) {
            return j === void 0 ? v.call(r(this)) : v.call(r(this), i(j));
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
        var a = e("d784"), i = e("825a"), r = e("50c4"), c = e("a691"), u = e("1d80"), h = e("8aa5"), v = e("0cb2"), p = e("14c3"), b = Math.max, m = Math.min, y = function(O) {
          return O === void 0 ? O : String(O);
        };
        a("replace", 2, function(O, j, A, M) {
          var D = M.REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE, V = M.REPLACE_KEEPS_$0, z = D ? "$" : "$0";
          return [
            // `String.prototype.replace` method
            // https://tc39.es/ecma262/#sec-string.prototype.replace
            function(E, L) {
              var $ = u(this), N = E?.[O];
              return N !== void 0 ? N.call(E, $, L) : j.call(String($), E, L);
            },
            // `RegExp.prototype[@@replace]` method
            // https://tc39.es/ecma262/#sec-regexp.prototype-@@replace
            function(T, E) {
              if (!D && V || typeof E == "string" && E.indexOf(z) === -1) {
                var L = A(j, T, this, E);
                if (L.done) return L.value;
              }
              var $ = i(T), N = String(this), g = typeof E == "function";
              g || (E = String(E));
              var C = $.global;
              if (C) {
                var I = $.unicode;
                $.lastIndex = 0;
              }
              for (var w = []; ; ) {
                var B = p($, N);
                if (B === null || (w.push(B), !C)) break;
                var P = String(B[0]);
                P === "" && ($.lastIndex = h(N, r($.lastIndex), I));
              }
              for (var R = "", J = 0, K = 0; K < w.length; K++) {
                B = w[K];
                for (var Q = String(B[0]), se = b(m(c(B.index), N.length), 0), Le = [], Ae = 1; Ae < B.length; Ae++) Le.push(y(B[Ae]));
                var Te = B.groups;
                if (g) {
                  var Me = [Q].concat(Le, se, N);
                  Te !== void 0 && Me.push(Te);
                  var Re = String(E.apply(void 0, Me));
                } else
                  Re = v(Q, N, se, Le, Te, E);
                se >= J && (R += N.slice(J, se) + Re, J = se + Q.length);
              }
              return R + N.slice(J);
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
            var b = String(a(p));
            return v & 1 && (b = b.replace(c, "")), v & 2 && (b = b.replace(u, "")), b;
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
            var v = String(i(u)), p = a(h), b = v.length, m, y;
            return p < 0 || p >= b ? c ? "" : void 0 : (m = v.charCodeAt(p), m < 55296 || m > 56319 || p + 1 === b || (y = v.charCodeAt(p + 1)) < 56320 || y > 57343 ? c ? v.charAt(p) : m : c ? v.slice(p, p + 2) : (m - 55296 << 10) + (y - 56320) + 65536);
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
        var a = e("7f9a"), i = e("da84"), r = e("861d"), c = e("9112"), u = e("5135"), h = e("c6cd"), v = e("f772"), p = e("d012"), b = i.WeakMap, m, y, O, j = function(E) {
          return O(E) ? y(E) : m(E, {});
        }, A = function(E) {
          return function(L) {
            var $;
            if (!r(L) || ($ = y(L)).type !== E)
              throw TypeError("Incompatible receiver, " + E + " required");
            return $;
          };
        };
        if (a) {
          var M = h.state || (h.state = new b()), D = M.get, V = M.has, z = M.set;
          m = function(E, L) {
            return L.facade = E, z.call(M, E, L), L;
          }, y = function(E) {
            return D.call(M, E) || {};
          }, O = function(E) {
            return V.call(M, E);
          };
        } else {
          var T = v("state");
          p[T] = !0, m = function(E, L) {
            return L.facade = E, c(E, T, L), L;
          }, y = function(E) {
            return u(E, T) ? E[T] : {};
          }, O = function(E) {
            return u(E, T);
          };
        }
        o.exports = {
          set: m,
          get: y,
          has: O,
          enforce: j,
          getterFor: A
        };
      }
    ),
    /***/
    "6eeb": (
      /***/
      function(o, l, e) {
        var a = e("da84"), i = e("9112"), r = e("5135"), c = e("ce4e"), u = e("8925"), h = e("69f3"), v = h.get, p = h.enforce, b = String(String).split("String");
        (o.exports = function(m, y, O, j) {
          var A = j ? !!j.unsafe : !1, M = j ? !!j.enumerable : !1, D = j ? !!j.noTargetGet : !1, V;
          if (typeof O == "function" && (typeof y == "string" && !r(O, "name") && i(O, "name", y), V = p(O), V.source || (V.source = b.join(typeof y == "string" ? y : ""))), m === a) {
            M ? m[y] = O : c(y, O);
            return;
          } else A ? !D && m[y] && (M = !0) : delete m[y];
          M ? m[y] = O : i(m, y, O);
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
        var a = e("825a"), i = e("37e8"), r = e("7839"), c = e("d012"), u = e("1be4"), h = e("cc12"), v = e("f772"), p = ">", b = "<", m = "prototype", y = "script", O = v("IE_PROTO"), j = function() {
        }, A = function(T) {
          return b + y + p + T + b + "/" + y + p;
        }, M = function(T) {
          T.write(A("")), T.close();
          var E = T.parentWindow.Object;
          return T = null, E;
        }, D = function() {
          var T = h("iframe"), E = "java" + y + ":", L;
          return T.style.display = "none", u.appendChild(T), T.src = String(E), L = T.contentWindow.document, L.open(), L.write(A("document.F=Object")), L.close(), L.F;
        }, V, z = function() {
          try {
            V = document.domain && new ActiveXObject("htmlfile");
          } catch {
          }
          z = V ? M(V) : D();
          for (var T = r.length; T--; ) delete z[m][r[T]];
          return z();
        };
        c[O] = !0, o.exports = Object.create || function(E, L) {
          var $;
          return E !== null ? (j[m] = a(E), $ = new j(), j[m] = null, $[O] = E) : $ = z(), L === void 0 ? $ : i($, L);
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
        o.exports = Ir;
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
          var m = /a/, y = /b*/g;
          return r.call(m, "a"), r.call(y, "a"), m.lastIndex !== 0 || y.lastIndex !== 0;
        }(), v = i.UNSUPPORTED_Y || i.BROKEN_CARET, p = /()??/.exec("")[1] !== void 0, b = h || p || v;
        b && (u = function(y) {
          var O = this, j, A, M, D, V = v && O.sticky, z = a.call(O), T = O.source, E = 0, L = y;
          return V && (z = z.replace("y", ""), z.indexOf("g") === -1 && (z += "g"), L = String(y).slice(O.lastIndex), O.lastIndex > 0 && (!O.multiline || O.multiline && y[O.lastIndex - 1] !== `
`) && (T = "(?: " + T + ")", L = " " + L, E++), A = new RegExp("^(?:" + T + ")", z)), p && (A = new RegExp("^" + T + "$(?!\\s)", z)), h && (j = O.lastIndex), M = r.call(V ? A : O, L), V ? M ? (M.input = M.input.slice(E), M[0] = M[0].slice(E), M.index = O.lastIndex, O.lastIndex += M[0].length) : O.lastIndex = 0 : h && M && (O.lastIndex = O.global ? M.index + M[0].length : j), p && M && M.length > 1 && c.call(M[0], A, function() {
            for (D = 1; D < arguments.length - 2; D++)
              arguments[D] === void 0 && (M[D] = void 0);
          }), M;
        }), o.exports = u;
      }
    ),
    /***/
    "94ca": (
      /***/
      function(o, l, e) {
        var a = e("d039"), i = /#|\.prototype\./, r = function(p, b) {
          var m = u[c(p)];
          return m == v ? !0 : m == h ? !1 : typeof b == "function" ? a(b) : !!b;
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
        var a = e("23e7"), i = e("d039"), r = e("e8b5"), c = e("861d"), u = e("7b0b"), h = e("50c4"), v = e("8418"), p = e("65f0"), b = e("1dde"), m = e("b622"), y = e("2d00"), O = m("isConcatSpreadable"), j = 9007199254740991, A = "Maximum allowed index exceeded", M = y >= 51 || !i(function() {
          var T = [];
          return T[O] = !1, T.concat()[0] !== T;
        }), D = b("concat"), V = function(T) {
          if (!c(T)) return !1;
          var E = T[O];
          return E !== void 0 ? !!E : r(T);
        }, z = !M || !D;
        a({ target: "Array", proto: !0, forced: z }, {
          concat: function(E) {
            var L = u(this), $ = p(L, 0), N = 0, g, C, I, w, B;
            for (g = -1, I = arguments.length; g < I; g++)
              if (B = g === -1 ? L : arguments[g], V(B)) {
                if (w = h(B.length), N + w > j) throw TypeError(A);
                for (C = 0; C < w; C++, N++) C in B && v($, N, B[C]);
              } else {
                if (N >= j) throw TypeError(A);
                v($, N++, B);
              }
            return $.length = N, $;
          }
        });
      }
    ),
    /***/
    "9bf2": (
      /***/
      function(o, l, e) {
        var a = e("83ab"), i = e("0cfb"), r = e("825a"), c = e("c04e"), u = Object.defineProperty;
        l.f = a ? u : function(v, p, b) {
          if (r(v), p = c(p, !0), r(b), i) try {
            return u(v, p, b);
          } catch {
          }
          if ("get" in b || "set" in b) throw TypeError("Accessors not supported");
          return "value" in b && (v[p] = b.value), v;
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
          join: function(b) {
            return u.call(r(this), b === void 0 ? "," : b);
          }
        });
      }
    ),
    /***/
    a2bf: (
      /***/
      function(o, l, e) {
        var a = e("e8b5"), i = e("50c4"), r = e("0366"), c = function(u, h, v, p, b, m, y, O) {
          for (var j = b, A = 0, M = y ? r(y, O, 3) : !1, D; A < p; ) {
            if (A in v) {
              if (D = M ? M(v[A], A, h) : v[A], m > 0 && a(D))
                j = c(u, h, D, i(D.length), j, m - 1) - 1;
              else {
                if (j >= 9007199254740991) throw TypeError("Exceed the acceptable array length");
                u[j] = D;
              }
              j++;
            }
            A++;
          }
          return j;
        };
        o.exports = c;
      }
    ),
    /***/
    a434: (
      /***/
      function(o, l, e) {
        var a = e("23e7"), i = e("23cb"), r = e("a691"), c = e("50c4"), u = e("7b0b"), h = e("65f0"), v = e("8418"), p = e("1dde"), b = e("ae40"), m = p("splice"), y = b("splice", { ACCESSORS: !0, 0: 0, 1: 2 }), O = Math.max, j = Math.min, A = 9007199254740991, M = "Maximum allowed length exceeded";
        a({ target: "Array", proto: !0, forced: !m || !y }, {
          splice: function(V, z) {
            var T = u(this), E = c(T.length), L = i(V, E), $ = arguments.length, N, g, C, I, w, B;
            if ($ === 0 ? N = g = 0 : $ === 1 ? (N = 0, g = E - L) : (N = $ - 2, g = j(O(r(z), 0), E - L)), E + N - g > A)
              throw TypeError(M);
            for (C = h(T, g), I = 0; I < g; I++)
              w = L + I, w in T && v(C, I, T[w]);
            if (C.length = g, N < g) {
              for (I = L; I < E - g; I++)
                w = I + g, B = I + N, w in T ? T[B] = T[w] : delete T[B];
              for (I = E; I > E - g + N; I--) delete T[I - 1];
            } else if (N > g)
              for (I = E - g; I > L; I--)
                w = I + g - 1, B = I + N - 1, w in T ? T[B] = T[w] : delete T[B];
            for (I = 0; I < N; I++)
              T[I + L] = arguments[I + 2];
            return T.length = E - g + N, C;
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
        var a = e("83ab"), i = e("da84"), r = e("94ca"), c = e("6eeb"), u = e("5135"), h = e("c6b6"), v = e("7156"), p = e("c04e"), b = e("d039"), m = e("7c73"), y = e("241c").f, O = e("06cf").f, j = e("9bf2").f, A = e("58a8").trim, M = "Number", D = i[M], V = D.prototype, z = h(m(V)) == M, T = function(g) {
          var C = p(g, !1), I, w, B, P, R, J, K, Q;
          if (typeof C == "string" && C.length > 2) {
            if (C = A(C), I = C.charCodeAt(0), I === 43 || I === 45) {
              if (w = C.charCodeAt(2), w === 88 || w === 120) return NaN;
            } else if (I === 48) {
              switch (C.charCodeAt(1)) {
                case 66:
                case 98:
                  B = 2, P = 49;
                  break;
                case 79:
                case 111:
                  B = 8, P = 55;
                  break;
                default:
                  return +C;
              }
              for (R = C.slice(2), J = R.length, K = 0; K < J; K++)
                if (Q = R.charCodeAt(K), Q < 48 || Q > P) return NaN;
              return parseInt(R, B);
            }
          }
          return +C;
        };
        if (r(M, !D(" 0o1") || !D("0b1") || D("+0x1"))) {
          for (var E = function(C) {
            var I = arguments.length < 1 ? 0 : C, w = this;
            return w instanceof E && (z ? b(function() {
              V.valueOf.call(w);
            }) : h(w) != M) ? v(new D(T(I)), w, E) : T(I);
          }, L = a ? y(D) : (
            // ES3:
            "MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger,fromString,range".split(",")
          ), $ = 0, N; L.length > $; $++)
            u(D, N = L[$]) && !u(E, N) && j(E, N, O(D, N));
          E.prototype = V, V.constructor = E, c(i, M, E);
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
          var b = [][v], m = r(p, "ACCESSORS") ? p.ACCESSORS : !1, y = r(p, 0) ? p[0] : h, O = r(p, 1) ? p[1] : void 0;
          return u[v] = !!b && !i(function() {
            if (m && !a) return !0;
            var j = { length: -1 };
            m ? c(j, 1, { enumerable: !0, get: h }) : j[1] = 1, b.call(j, y, O);
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
        function v(p, b, m) {
          var y, O, j, A, M, D, V = 0, z = !1, T = !1, E = !0;
          if (typeof p != "function")
            throw new TypeError(c);
          b = r(b) || 0, a(m) && (z = !!m.leading, T = "maxWait" in m, j = T ? u(r(m.maxWait) || 0, b) : j, E = "trailing" in m ? !!m.trailing : E);
          function L(R) {
            var J = y, K = O;
            return y = O = void 0, V = R, A = p.apply(K, J), A;
          }
          function $(R) {
            return V = R, M = setTimeout(C, b), z ? L(R) : A;
          }
          function N(R) {
            var J = R - D, K = R - V, Q = b - J;
            return T ? h(Q, j - K) : Q;
          }
          function g(R) {
            var J = R - D, K = R - V;
            return D === void 0 || J >= b || J < 0 || T && K >= j;
          }
          function C() {
            var R = i();
            if (g(R))
              return I(R);
            M = setTimeout(C, N(R));
          }
          function I(R) {
            return M = void 0, E && y ? L(R) : (y = O = void 0, A);
          }
          function w() {
            M !== void 0 && clearTimeout(M), V = 0, y = D = O = M = void 0;
          }
          function B() {
            return M === void 0 ? A : I(i());
          }
          function P() {
            var R = i(), J = g(R);
            if (y = arguments, O = this, D = R, J) {
              if (M === void 0)
                return $(D);
              if (T)
                return clearTimeout(M), M = setTimeout(C, b), L(D);
            }
            return M === void 0 && (M = setTimeout(C, b)), A;
          }
          return P.cancel = w, P.flush = B, P;
        }
        o.exports = v;
      }
    ),
    /***/
    b4b0: (
      /***/
      function(o, l, e) {
        var a = e("1a8c"), i = e("ffd6"), r = NaN, c = /^\s+|\s+$/g, u = /^[-+]0x[0-9a-f]+$/i, h = /^0b[01]+$/i, v = /^0o[0-7]+$/i, p = parseInt;
        function b(m) {
          if (typeof m == "number")
            return m;
          if (i(m))
            return r;
          if (a(m)) {
            var y = typeof m.valueOf == "function" ? m.valueOf() : m;
            m = a(y) ? y + "" : y;
          }
          if (typeof m != "string")
            return m === 0 ? m : +m;
          m = m.replace(c, "");
          var O = h.test(m);
          return O || v.test(m) ? p(m.slice(2), O ? 2 : 8) : u.test(m) ? r : +m;
        }
        o.exports = b;
      }
    ),
    /***/
    b622: (
      /***/
      function(o, l, e) {
        var a = e("da84"), i = e("5692"), r = e("5135"), c = e("90e3"), u = e("4930"), h = e("fdbf"), v = i("wks"), p = a.Symbol, b = h ? p : p && p.withoutSetter || c;
        o.exports = function(m) {
          return r(v, m) || (u && r(p, m) ? v[m] = p[m] : v[m] = b("Symbol." + m)), v[m];
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
          var b = p == 1, m = p == 2, y = p == 3, O = p == 4, j = p == 6, A = p == 7, M = p == 5 || j;
          return function(D, V, z, T) {
            for (var E = r(D), L = i(E), $ = a(V, z, 3), N = c(L.length), g = 0, C = T || u, I = b ? C(D, N) : m || A ? C(D, 0) : void 0, w, B; N > g; g++) if ((M || g in L) && (w = L[g], B = $(w, g, E), p))
              if (b) I[g] = B;
              else if (B) switch (p) {
                case 3:
                  return !0;
                case 5:
                  return w;
                case 6:
                  return g;
                case 2:
                  h.call(I, w);
              }
              else switch (p) {
                case 4:
                  return !1;
                case 7:
                  h.call(I, w);
              }
            return j ? -1 : y || O ? O : I;
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
          indexOf: function(m) {
            return h ? u.apply(this, arguments) || 0 : i(this, m, arguments.length > 1 ? arguments[1] : void 0);
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
          var v = i(u), p = 0, b = [], m;
          for (m in v) !a(c, m) && a(v, m) && b.push(m);
          for (; h.length > p; ) a(v, m = h[p++]) && (~r(b, m) || b.push(m));
          return b;
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
          return function(v, p, b, m) {
            a(p);
            var y = i(v), O = r(y), j = c(y.length), A = h ? j - 1 : 0, M = h ? -1 : 1;
            if (b < 2) for (; ; ) {
              if (A in O) {
                m = O[A], A += M;
                break;
              }
              if (A += M, h ? A < 0 : j <= A)
                throw TypeError("Reduce of empty array with no initial value");
            }
            for (; h ? A >= 0 : j > A; A += M) A in O && (m = p(m, O[A], A, y));
            return m;
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
          var O = /./;
          return O.exec = function() {
            var j = [];
            return j.groups = { a: "7" }, j;
          }, "".replace(O, "$<a>") !== "7";
        }), p = function() {
          return "a".replace(/./, "$0") === "$0";
        }(), b = r("replace"), m = function() {
          return /./[b] ? /./[b]("a", "$0") === "" : !1;
        }(), y = !i(function() {
          var O = /(?:)/, j = O.exec;
          O.exec = function() {
            return j.apply(this, arguments);
          };
          var A = "ab".split(O);
          return A.length !== 2 || A[0] !== "a" || A[1] !== "b";
        });
        o.exports = function(O, j, A, M) {
          var D = r(O), V = !i(function() {
            var N = {};
            return N[D] = function() {
              return 7;
            }, ""[O](N) != 7;
          }), z = V && !i(function() {
            var N = !1, g = /a/;
            return O === "split" && (g = {}, g.constructor = {}, g.constructor[h] = function() {
              return g;
            }, g.flags = "", g[D] = /./[D]), g.exec = function() {
              return N = !0, null;
            }, g[D](""), !N;
          });
          if (!V || !z || O === "replace" && !(v && p && !m) || O === "split" && !y) {
            var T = /./[D], E = A(D, ""[O], function(N, g, C, I, w) {
              return g.exec === c ? V && !w ? { done: !0, value: T.call(g, C, I) } : { done: !0, value: N.call(C, g, I) } : { done: !1 };
            }, {
              REPLACE_KEEPS_$0: p,
              REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE: m
            }), L = E[0], $ = E[1];
            a(String.prototype, O, L), a(
              RegExp.prototype,
              D,
              j == 2 ? function(N, g) {
                return $.call(N, this, g);
              } : function(N) {
                return $.call(N, this);
              }
            );
          }
          M && u(RegExp.prototype[D], "sham", !0);
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
          for (var v = i(h), p = c.f, b = r.f, m = 0; m < v.length; m++) {
            var y = v[m];
            a(u, y) || p(u, y, b(h, y));
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
          var p, b, m;
          return v === void 0 ? "Undefined" : v === null ? "Null" : typeof (b = h(p = Object(v), c)) == "string" ? b : u ? i(p) : (m = i(p)) == "Object" && typeof p.callee == "function" ? "Arguments" : m;
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
            sn
          );
        }), e.d(l, "treeselectMixin", function() {
          return (
            /* reexport */
            Qt
          );
        }), e.d(l, "LOAD_ROOT_OPTIONS", function() {
          return (
            /* reexport */
            U
          );
        }), e.d(l, "LOAD_CHILDREN_OPTIONS", function() {
          return (
            /* reexport */
            H
          );
        }), e.d(l, "ASYNC_SEARCH", function() {
          return (
            /* reexport */
            q
          );
        }), typeof window < "u") {
          var a = window.document.currentScript, i = a && a.src.match(/(.+\/)[^/]+\.js(\?.*)?$/);
          i && (e.p = i[1]);
        }
        var r = e("8bbf");
        function c(s, t, n, f, S, x) {
          var F = Object(r.resolveComponent)("HiddenFields"), Y = Object(r.resolveComponent)("Control"), re = Object(r.resolveComponent)("MenuPortal"), le = Object(r.resolveComponent)("Menu");
          return Object(r.openBlock)(), Object(r.createBlock)("div", {
            ref: "wrapper",
            class: s.wrapperClass
          }, [Object(r.createVNode)(F), Object(r.createVNode)(Y, {
            ref: "control"
          }, null, 512), s.appendToBody ? (Object(r.openBlock)(), Object(r.createBlock)(re, {
            key: 0,
            ref: "portal"
          }, null, 512)) : (Object(r.openBlock)(), Object(r.createBlock)(le, {
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
            var n = [], f = !0, S = !1, x = void 0;
            try {
              for (var F = s[Symbol.iterator](), Y; !(f = (Y = F.next()).done) && (n.push(Y.value), !(t && n.length === t)); f = !0)
                ;
            } catch (re) {
              S = !0, x = re;
            } finally {
              try {
                !f && F.return != null && F.return();
              } finally {
                if (S) throw x;
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
        function b() {
          throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
        }
        function m(s, t) {
          return u(s) || h(s, t) || p(s, t) || b();
        }
        function y(s, t, n) {
          return t in s ? Object.defineProperty(s, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
          }) : s[t] = n, s;
        }
        function O(s) {
          if (Array.isArray(s)) return v(s);
        }
        function j(s) {
          if (typeof Symbol < "u" && Symbol.iterator in Object(s)) return Array.from(s);
        }
        function A() {
          throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
        }
        function M(s) {
          return O(s) || j(s) || p(s) || A();
        }
        function D(s, t) {
          var n = Object.keys(s);
          if (Object.getOwnPropertySymbols) {
            var f = Object.getOwnPropertySymbols(s);
            t && (f = f.filter(function(S) {
              return Object.getOwnPropertyDescriptor(s, S).enumerable;
            })), n.push.apply(n, f);
          }
          return n;
        }
        function V(s) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t] != null ? arguments[t] : {};
            t % 2 ? D(Object(n), !0).forEach(function(f) {
              y(s, f, n[f]);
            }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(s, Object.getOwnPropertyDescriptors(n)) : D(Object(n)).forEach(function(f) {
              Object.defineProperty(s, f, Object.getOwnPropertyDescriptor(n, f));
            });
          }
          return s;
        }
        var z = e("2e39"), T = /* @__PURE__ */ e.n(z);
        function E(s) {
          return s !== s;
        }
        function L(s, t) {
          return s.indexOf(t) !== -1;
        }
        var $ = e("72f0"), N = /* @__PURE__ */ e.n($), g = e("cd9d"), C = /* @__PURE__ */ e.n(g), I = function() {
          return /* @__PURE__ */ Object.create(null);
        };
        function w(s, t) {
          if (s.length !== t.length) return !0;
          for (var n = 0; n < s.length; n++)
            if (s[n] !== t[n]) return !0;
          return !1;
        }
        var B = e("bcdf"), P = /* @__PURE__ */ e.n(B), R = (
          /* istanbul ignore next */
          P.a
        );
        function J(s, t, n) {
          for (var f = 0, S = s.length; f < S; f++)
            if (t.call(n, s[f], f, s)) return s[f];
        }
        function K(s) {
          return function(n) {
            if (n.type === "mousedown" && n.button === 0) {
              for (var f = arguments.length, S = new Array(f > 1 ? f - 1 : 0), x = 1; x < f; x++)
                S[x - 1] = arguments[x];
              s.call.apply(s, [this, n].concat(S));
            }
          };
        }
        var Q = e("4416"), se = /* @__PURE__ */ e.n(Q), Le = e("1d92"), Ae = /* @__PURE__ */ e.n(Le), Te = e("2655"), Me = /* @__PURE__ */ e.n(Te);
        e("a434");
        function Re(s, t) {
          var n = s.indexOf(t);
          n !== -1 && s.splice(n, 1);
        }
        var Oe = null, Qe = 0, _e = 1, Ye = 2, xe = "ALL_CHILDREN", we = "ALL_DESCENDANTS", je = "LEAF_CHILDREN", Fe = "LEAF_DESCENDANTS", U = "LOAD_ROOT_OPTIONS", H = "LOAD_CHILDREN_OPTIONS", q = "ASYNC_SEARCH", _ = "ALL", ie = "BRANCH_PRIORITY", X = "LEAF_PRIORITY", de = "ALL_WITH_INDETERMINATE", Ee = "ORDER_SELECTED", Ht = "LEVEL", Ut = "INDEX", ce = {
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
        }, xn = (
          /* istanbul ignore next */
          200
        ), Wt = 5, Gt = 40;
        function Kt(s, t) {
          var n = 0;
          do {
            if (s.level < n) return -1;
            if (t.level < n) return 1;
            if (s.index[n] !== t.index[n]) return s.index[n] - t.index[n];
            n++;
          } while (!0);
        }
        function En(s, t) {
          return s.level === t.level ? Kt(s, t) : s.level - t.level;
        }
        function vt() {
          return {
            isLoaded: !1,
            isLoading: !1,
            loadingError: ""
          };
        }
        function Nn(s) {
          return typeof s == "string" ? s : typeof s == "number" && !E(s) ? s + "" : "";
        }
        function Xt(s, t, n) {
          return s ? T()(t, n) : L(n, t);
        }
        function ht(s) {
          return s.message || /* istanbul ignore next */
          String(s);
        }
        var Tn = 0, Qt = {
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
              default: N()(!0)
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
                return "".concat(Tn++, "$$");
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
              default: N()(["label"])
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
              default: C.a
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
                return L(n, t);
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
              default: xe,
              validator: function(t) {
                var n = [xe, we, je, Fe];
                return L(n, t);
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
              default: Ee,
              validator: function(t) {
                var n = [Ee, Ht, Ut];
                return L(n, t);
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
              default: ie,
              validator: function(t) {
                var n = [_, ie, X, de];
                return L(n, t);
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
                nodeMap: I(),
                // <id, checkedState> map, used for multi-select mode.
                checkedStateMap: I(),
                // Id list of all selected options.
                selectedNodeIds: this.extractCheckedNodeIdsFromValue(),
                // <id, true> map for fast checking:
                //   if (forest.selectedNodeIds.indexOf(id) !== -1) forest.selectedNodeMap[id] === true
                selectedNodeMap: I()
              },
              // States of root options.
              rootOptionsStates: vt(),
              localSearch: {
                // Has user entered any query to search local options?
                active: !1,
                // Has any options matched the search query?
                noResults: !0,
                // <id, countObject> map for counting matched children/descendants.
                countMap: I()
              },
              // <searchQuery, remoteSearchEntry> map.
              remoteSearch: I()
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
              if (this.single || this.flat || this.disableBranchNodes || this.valueConsistsOf === _)
                n = this.forest.selectedNodeIds.slice();
              else if (this.valueConsistsOf === ie)
                n = this.forest.selectedNodeIds.filter(function(x) {
                  var F = t.getNode(x);
                  return F.isRootNode ? !0 : !t.isSelected(F.parentNode);
                });
              else if (this.valueConsistsOf === X)
                n = this.forest.selectedNodeIds.filter(function(x) {
                  var F = t.getNode(x);
                  return F.isLeaf ? !0 : F.children.length === 0;
                });
              else if (this.valueConsistsOf === de) {
                var f, S = [];
                n = this.forest.selectedNodeIds.slice(), this.selectedNodes.forEach(function(x) {
                  x.ancestors.forEach(function(F) {
                    L(S, F.id) || L(n, F.id) || S.push(F.id);
                  });
                }), (f = n).push.apply(f, S);
              }
              return this.sortValueBy === Ht ? n.sort(function(x, F) {
                return En(t.getNode(x), t.getNode(F));
              }) : this.sortValueBy === Ut && n.sort(function(x, F) {
                return Kt(t.getNode(x), t.getNode(F));
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
              var f = w(t, n);
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
              var t = this.extractCheckedNodeIdsFromValue(), n = w(t, this.internalValue);
              n && this.fixSelectedNodeIds(t);
            }
          },
          methods: {
            verifyProps: function() {
              var t = this;
              if (R(function() {
                return t.async ? t.searchable : !0;
              }, function() {
                return 'For async search mode, the value of "searchable" prop must be true.';
              }), this.options == null && !this.loadOptions && R(function() {
                return !1;
              }, function() {
                return 'Are you meant to dynamically load options? You need to use "loadOptions" prop.';
              }), this.flat && R(function() {
                return t.multiple;
              }, function() {
                return 'You are using flat mode. But you forgot to add "multiple=true"?';
              }), !this.flat) {
                var n = ["autoSelectAncestors", "autoSelectDescendants", "autoDeselectAncestors", "autoDeselectDescendants"];
                n.forEach(function(f) {
                  R(function() {
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
                this.forest.nodeMap = I(), this.keepDataOfSelectedNodes(n), this.forest.normalizedOptions = this.normalize(Oe, t, n), this.fixSelectedNodeIds(this.internalValue);
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
              return R(function() {
                return t != null;
              }, function() {
                return "Invalid node id: ".concat(t);
              }), t == null ? null : t in this.forest.nodeMap ? this.forest.nodeMap[t] : this.createFallbackNode(t);
            },
            createFallbackNode: function(t) {
              var n = this.extractNodeFromValue(t), f = this.enhancedNormalizer(n).label || "".concat(t, " (unknown)"), S = {
                id: t,
                label: f,
                ancestors: [],
                parentNode: Oe,
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
              return this.forest.nodeMap[t] = S;
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
              var S = this.multiple ? Array.isArray(this.modelValue) ? this.modelValue : [] : this.modelValue ? [this.modelValue] : [], x = J(S, function(F) {
                return F && n.enhancedNormalizer(F).id === t;
              });
              return x || f;
            },
            fixSelectedNodeIds: function(t) {
              var n = this, f = [];
              if (this.single || this.flat || this.disableBranchNodes || this.valueConsistsOf === _)
                f = t;
              else if (this.valueConsistsOf === ie)
                t.forEach(function(me) {
                  f.push(me);
                  var De = n.getNode(me);
                  De.isBranch && n.traverseDescendantsBFS(De, function(Be) {
                    f.push(Be.id);
                  });
                });
              else if (this.valueConsistsOf === X)
                for (var S = I(), x = t.slice(); x.length; ) {
                  var F = x.shift(), Y = this.getNode(F);
                  f.push(F), !Y.isRootNode && (Y.parentNode.id in S || (S[Y.parentNode.id] = Y.parentNode.children.length), --S[Y.parentNode.id] === 0 && x.push(Y.parentNode.id));
                }
              else if (this.valueConsistsOf === de)
                for (var re = I(), le = t.filter(function(me) {
                  var De = n.getNode(me);
                  return De.isLeaf || De.children.length === 0;
                }); le.length; ) {
                  var ve = le.shift(), ne = this.getNode(ve);
                  f.push(ve), !ne.isRootNode && (ne.parentNode.id in re || (re[ne.parentNode.id] = ne.parentNode.children.length), --re[ne.parentNode.id] === 0 && le.push(ne.parentNode.id));
                }
              var he = w(this.forest.selectedNodeIds, f);
              he && (this.forest.selectedNodeIds = f), this.buildForestState();
            },
            keepDataOfSelectedNodes: function(t) {
              var n = this;
              this.forest.selectedNodeIds.forEach(function(f) {
                if (t[f]) {
                  var S = V(V({}, t[f]), {}, {
                    isFallbackNode: !0
                  });
                  n.forest.nodeMap[f] = S;
                }
              });
            },
            isSelected: function(t) {
              return this.forest.selectedNodeMap[t.id] === !0;
            },
            traverseDescendantsBFS: function(t, n) {
              if (t.isBranch)
                for (var f = t.children.slice(); f.length; ) {
                  var S = f[0];
                  S.isBranch && f.push.apply(f, M(S.children)), n(S), f.shift();
                }
            },
            traverseDescendantsDFS: function(t, n) {
              var f = this;
              t.isBranch && t.children.forEach(function(S) {
                f.traverseDescendantsDFS(S, n), n(S);
              });
            },
            traverseAllNodesDFS: function(t) {
              var n = this;
              this.forest.normalizedOptions.forEach(function(f) {
                n.traverseDescendantsDFS(f, t), t(f);
              });
            },
            traverseAllNodesByIndex: function(t) {
              var n = function f(S) {
                S.children.forEach(function(x) {
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
            handleMouseDown: K(function(t) {
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
              this.localSearch.active = !0, this.localSearch.noResults = !0, this.traverseAllNodesDFS(function(F) {
                if (F.isBranch) {
                  var Y;
                  F.isExpandedOnSearch = !1, F.showAllChildrenOnSearch = !1, F.isMatched = !1, F.hasMatchedDescendants = !1, t.localSearch.countMap[F.id] = (Y = {}, y(Y, xe, 0), y(Y, we, 0), y(Y, je, 0), y(Y, Fe, 0), Y);
                }
              });
              var S = n.trim().toLocaleLowerCase(), x = S.replace(/\s+/g, " ").split(" ");
              this.traverseAllNodesDFS(function(F) {
                t.searchNested && x.length > 1 ? F.isMatched = x.every(function(Y) {
                  return Xt(!1, Y, F.nestedSearchLabel);
                }) : F.isMatched = t.matchKeys.some(function(Y) {
                  return Xt(!t.disableFuzzyMatching, S, F.lowerCased[Y]);
                }), F.isMatched && (t.localSearch.noResults = !1, F.ancestors.forEach(function(Y) {
                  return t.localSearch.countMap[Y.id][we]++;
                }), F.isLeaf && F.ancestors.forEach(function(Y) {
                  return t.localSearch.countMap[Y.id][Fe]++;
                }), F.parentNode !== Oe && (t.localSearch.countMap[F.parentNode.id][xe] += 1, F.isLeaf && (t.localSearch.countMap[F.parentNode.id][je] += 1))), (F.isMatched || F.isBranch && F.isExpandedOnSearch) && F.parentNode !== Oe && (F.parentNode.isExpandedOnSearch = !0, F.parentNode.hasMatchedDescendants = !0);
              }), f();
            },
            handleRemoteSearch: function() {
              var t = this, n = this.trigger.searchQuery, f = this.getRemoteSearchEntry(), S = function() {
                t.initialize(), t.resetHighlightedOptionWhenNecessary(!0);
              };
              if ((n === "" || this.cacheOptions) && f.isLoaded)
                return S();
              this.callLoadOptionsProp({
                action: q,
                args: {
                  searchQuery: n
                },
                isPending: function() {
                  return f.isLoading;
                },
                start: function() {
                  f.isLoading = !0, f.isLoaded = !1, f.loadingError = "";
                },
                succeed: function(F) {
                  f.isLoaded = !0, f.options = F, t.trigger.searchQuery === n && S();
                },
                fail: function(F) {
                  f.loadingError = ht(F);
                },
                end: function() {
                  f.isLoading = !1;
                }
              });
            },
            getRemoteSearchEntry: function() {
              var t = this, n = this.trigger.searchQuery, f = this.remoteSearch[n] || V(V({}, vt()), {}, {
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
              var t = this, n = I();
              this.forest.selectedNodeIds.forEach(function(S) {
                n[S] = !0;
              }), this.forest.selectedNodeMap = n;
              var f = I();
              this.multiple && (this.traverseAllNodesByIndex(function(S) {
                f[S.id] = Qe;
              }), this.selectedNodes.forEach(function(S) {
                f[S.id] = Ye, !t.flat && !t.disableBranchNodes && S.ancestors.forEach(function(x) {
                  t.isSelected(x) || (f[x.id] = _e);
                });
              })), this.forest.checkedStateMap = f;
            },
            enhancedNormalizer: function(t) {
              return V(V({}, t), this.normalizer(t, this.getInstanceId()));
            },
            normalize: function(t, n, f) {
              var S = this, x = n.map(function(re) {
                return [S.enhancedNormalizer(re), re];
              }).map(function(re, le) {
                var ve = m(re, 2), ne = ve[0], he = ve[1];
                S.checkDuplication(ne), S.verifyNodeShape(ne);
                var me = ne.id, De = ne.label, Be = ne.children, Ot = ne.isDefaultExpanded, Ve = t === Oe, ln = Ve ? 0 : t.level + 1, xt = Array.isArray(Be) || Be === null, Et = !xt, cn = !!ne.isDisabled || !S.flat && !Ve && t.isDisabled, mr = !!ne.isNew, Nt = S.matchKeys.reduce(function(Pe, un) {
                  return V(V({}, Pe), {}, y({}, un, Nn(ne[un]).toLocaleLowerCase()));
                }, {}), yr = Ve ? Nt.label : t.nestedSearchLabel + " " + Nt.label;
                S.forest.nodeMap[me] = I();
                var Z = S.forest.nodeMap[me];
                if (Z.id = me, Z.label = De, Z.level = ln, Z.ancestors = Ve ? [] : [t].concat(t.ancestors), Z.index = (Ve ? [] : t.index).concat(le), Z.parentNode = t, Z.lowerCased = Nt, Z.nestedSearchLabel = yr, Z.isDisabled = cn, Z.isNew = mr, Z.isMatched = !1, Z.isHighlighted = !1, Z.isBranch = xt, Z.isLeaf = Et, Z.isRootNode = Ve, Z.raw = he, xt) {
                  var He, rt = Array.isArray(Be);
                  Z.childrenStates = V(V({}, vt()), {}, {
                    isLoaded: rt
                  }), Z.isExpanded = typeof Ot == "boolean" ? Ot : ln < S.defaultExpandLevel, Z.hasMatchedDescendants = !1, Z.hasDisabledDescendants = !1, Z.isExpandedOnSearch = !1, Z.showAllChildrenOnSearch = !1, Z.count = (He = {}, y(He, xe, 0), y(He, we, 0), y(He, je, 0), y(He, Fe, 0), He), Z.children = rt ? S.normalize(Z, Be, f) : [], Ot === !0 && Z.ancestors.forEach(function(Pe) {
                    Pe.isExpanded = !0;
                  }), !rt && typeof S.loadOptions != "function" ? R(function() {
                    return !1;
                  }, function() {
                    return 'Unloaded branch node detected. "loadOptions" prop is required to load its children.';
                  }) : !rt && Z.isExpanded && S.loadChildrenOptions(Z);
                }
                if (Z.ancestors.forEach(function(Pe) {
                  return Pe.count[we]++;
                }), Et && Z.ancestors.forEach(function(Pe) {
                  return Pe.count[Fe]++;
                }), Ve || (t.count[xe] += 1, Et && (t.count[je] += 1), cn && (t.hasDisabledDescendants = !0)), f && f[me]) {
                  var Ce = f[me];
                  Z.isMatched = Ce.isMatched, Z.showAllChildrenOnSearch = Ce.showAllChildrenOnSearch, Z.isHighlighted = Ce.isHighlighted, Ce.isBranch && Z.isBranch && (Z.isExpanded = Ce.isExpanded, Z.isExpandedOnSearch = Ce.isExpandedOnSearch, Ce.childrenStates.isLoaded && !Z.childrenStates.isLoaded ? Z.isExpanded = !1 : Z.childrenStates = V({}, Ce.childrenStates));
                }
                return Z;
              });
              if (this.branchNodesFirst) {
                var F = x.filter(function(re) {
                  return re.isBranch;
                }), Y = x.filter(function(re) {
                  return re.isLeaf;
                });
                x = F.concat(Y);
              }
              return x;
            },
            loadRootOptions: function() {
              var t = this;
              this.callLoadOptionsProp({
                action: U,
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
                  t.rootOptionsStates.loadingError = ht(f);
                },
                end: function() {
                  t.rootOptionsStates.isLoading = !1;
                }
              });
            },
            loadChildrenOptions: function(t) {
              var n = this, f = t.id, S = t.raw;
              this.callLoadOptionsProp({
                action: H,
                args: {
                  // We always pass the raw node instead of the normalized node to any
                  // callback provided by the user of this component.
                  // Because the shape of the raw node is more likely to be closing to
                  // what the back-end API service of the application needs.
                  parentNode: S
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
                fail: function(F) {
                  n.getNode(f).childrenStates.loadingError = ht(F);
                },
                end: function() {
                  n.getNode(f).childrenStates.isLoading = !1;
                }
              });
            },
            callLoadOptionsProp: function(t) {
              var n = t.action, f = t.args, S = t.isPending, x = t.start, F = t.succeed, Y = t.fail, re = t.end;
              if (!(!this.loadOptions || S())) {
                x();
                var le = Ae()(function(ne, he) {
                  ne ? Y(ne) : F(he), re();
                }), ve = this.loadOptions(V(V({
                  id: this.getInstanceId(),
                  instanceId: this.getInstanceId(),
                  action: n
                }, f), {}, {
                  callback: le
                }));
                Me()(ve) && ve.then(function() {
                  le();
                }, function(ne) {
                  le(ne);
                }).catch(function(ne) {
                  console.error(ne);
                });
              }
            },
            checkDuplication: function(t) {
              var n = this;
              R(function() {
                return !(t.id in n.forest.nodeMap && !n.forest.nodeMap[t.id].isFallbackNode);
              }, function() {
                return "Detected duplicate presence of node id ".concat(JSON.stringify(t.id), ". ") + 'Their labels are "'.concat(n.forest.nodeMap[t.id].label, '" and "').concat(t.label, '" respectively.');
              });
            },
            verifyNodeShape: function(t) {
              R(function() {
                return !(t.children === void 0 && t.isBranch === !0);
              }, function() {
                return "Are you meant to declare an unloaded branch node? `isBranch: true` is no longer supported, please use `children: null` instead.";
              });
            },
            select: function(t) {
              if (!(this.disabled || t.isDisabled)) {
                this.single && this.clear();
                var n = this.multiple && !this.flat ? this.forest.checkedStateMap[t.id] === Qe : !this.isSelected(t);
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
                for (var S = t; (S = S.parentNode) !== Oe && S.children.every(this.isSelected); )
                  this.addValue(S);
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
                for (var S = t; (S = S.parentNode) !== Oe && this.isSelected(S); )
                  this.removeValue(S);
              }
            },
            addValue: function(t) {
              this.forest.selectedNodeIds.push(t.id), this.forest.selectedNodeMap[t.id] = !0;
            },
            removeValue: function(t) {
              Re(this.forest.selectedNodeIds, t.id), delete this.forest.selectedNodeMap[t.id];
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
        function Cn(s) {
          return typeof s == "string" ? s : s != null && !E(s) ? JSON.stringify(s) : "";
        }
        var In = Object(r.defineComponent)({
          name: "vue-treeselect--hidden-fields",
          inject: ["instance"],
          functional: !0,
          render: function(t) {
            var n = t.instance;
            if (!n.name || n.disabled || !n.hasValue) return null;
            var f = n.internalValue.map(Cn);
            return n.multiple && n.joinValues && (f = [f.join(n.delimiter)]), f.map(function(S, x) {
              return Object(r.createVNode)("input", {
                type: "hidden",
                name: n.name,
                value: S,
                key: "hidden-field-" + x
              }, null);
            });
          }
        }), Ln = In;
        e("d3b7"), e("25f0");
        var An = e("b047"), Mn = /* @__PURE__ */ e.n(An);
        e("3410"), e("b64b");
        function et(s) {
          "@babel/helpers - typeof";
          return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? et = function(n) {
            return typeof n;
          } : et = function(n) {
            return n && typeof Symbol == "function" && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n;
          }, et(s);
        }
        function Yt(s) {
          return s == null || et(s) !== "object" ? !1 : Object.getPrototypeOf(s) === Object.prototype;
        }
        function Rn(s, t, n) {
          Yt(n) ? (s[t] || (s[t] = {}), pt(s[t], n)) : s[t] = n;
        }
        function pt(s, t) {
          if (Yt(t))
            for (var n = Object.keys(t), f = 0, S = n.length; f < S; f++)
              Rn(s, n[f], t[n[f]]);
          return s;
        }
        function wn(s) {
          return typeof s == "function" || Object.prototype.toString.call(s) === "[object Object]" && !Object(r.isVNode)(s);
        }
        var jn = [ce.ENTER, ce.END, ce.HOME, ce.ARROW_LEFT, ce.ARROW_UP, ce.ARROW_RIGHT, ce.ARROW_DOWN], Fn = {
          name: "vue-treeselect--input",
          inject: ["instance"],
          data: function() {
            return {
              inputWidth: Wt,
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
            this.debouncedCallback = Mn()(this.updateSearchQuery, xn, {
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
                if (!n.menu.isOpen && L(jn, f))
                  return t.preventDefault(), n.openMenu();
                switch (f) {
                  case ce.BACKSPACE: {
                    n.backspaceRemoves && !this.value.length && n.removeLastValue();
                    break;
                  }
                  case ce.ENTER: {
                    if (t.preventDefault(), n.menu.current === null) return;
                    var S = n.getNode(n.menu.current);
                    if (S.isBranch && n.disableBranchNodes) return;
                    n.select(S);
                    break;
                  }
                  case ce.ESCAPE: {
                    this.value.length ? this.clear() : n.menu.isOpen && n.closeMenu();
                    break;
                  }
                  case ce.END: {
                    t.preventDefault(), n.highlightLastOption();
                    break;
                  }
                  case ce.HOME: {
                    t.preventDefault(), n.highlightFirstOption();
                    break;
                  }
                  case ce.ARROW_LEFT: {
                    var x = n.getNode(n.menu.current);
                    x.isBranch && n.shouldExpand(x) ? (t.preventDefault(), n.toggleExpanded(x)) : !x.isRootNode && (x.isLeaf || x.isBranch && !n.shouldExpand(x)) && (t.preventDefault(), n.setCurrentHighlightedOption(x.parentNode));
                    break;
                  }
                  case ce.ARROW_UP: {
                    t.preventDefault(), n.highlightPrevOption();
                    break;
                  }
                  case ce.ARROW_RIGHT: {
                    var F = n.getNode(n.menu.current);
                    F.isBranch && !n.shouldExpand(F) && (t.preventDefault(), n.toggleExpanded(F));
                    break;
                  }
                  case ce.ARROW_DOWN: {
                    t.preventDefault(), n.highlightNextOption();
                    break;
                  }
                  case ce.DELETE: {
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
              return t.searchable && !t.disabled && (f.push(this.renderInput()), this.needAutoSize && f.push(this.renderSizer())), t.searchable || pt(n, {
                on: {
                  focus: this.onFocus,
                  blur: this.onBlur,
                  keydown: this.onKeyDown
                },
                ref: "input"
              }), !t.searchable && !t.disabled && pt(n, {
                attrs: {
                  tabIndex: t.tabIndex
                }
              }), Object(r.createVNode)("div", Object(r.mergeProps)({
                class: "vue-treeselect__input-container"
              }, n), wn(f) ? f : {
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
              this.inputWidth = Math.max(Wt, this.$refs.sizer.scrollWidth + 15);
            },
            updateSearchQuery: function() {
              var t = this.instance;
              t.trigger.searchQuery = this.value;
            }
          },
          render: function() {
            return this.renderInputContainer();
          }
        }, kt = Fn, Dn = {
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
        }, Jt = Dn, Vn = {
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
            }, [this.renderSingleValueLabel()]), Object(r.createVNode)(Jt, null, null), Object(r.createVNode)(kt, {
              ref: "input"
            }, null)]);
          }
        }, Pn = Vn, zn = {
          xmlns: "http://www.w3.org/2000/svg",
          viewBox: "0 0 348.333 348.333"
        }, $n = /* @__PURE__ */ Object(r.createVNode)("path", {
          d: "M336.559 68.611L231.016 174.165l105.543 105.549c15.699 15.705 15.699 41.145 0 56.85-7.844 7.844-18.128 11.769-28.407 11.769-10.296 0-20.581-3.919-28.419-11.769L174.167 231.003 68.609 336.563c-7.843 7.844-18.128 11.769-28.416 11.769-10.285 0-20.563-3.919-28.413-11.769-15.699-15.698-15.699-41.139 0-56.85l105.54-105.549L11.774 68.611c-15.699-15.699-15.699-41.145 0-56.844 15.696-15.687 41.127-15.687 56.829 0l105.563 105.554L279.721 11.767c15.705-15.687 41.139-15.687 56.832 0 15.705 15.699 15.705 41.145.006 56.844z"
        }, null, -1);
        function Bn(s, t, n, f, S, x) {
          return Object(r.openBlock)(), Object(r.createBlock)("svg", zn, [$n]);
        }
        var Zt = {
          name: "vue-treeselect--x"
        };
        Zt.render = Bn;
        var qt = Zt;
        function Hn(s) {
          return typeof s == "function" || Object.prototype.toString.call(s) === "[object Object]" && !Object(r.isVNode)(s);
        }
        var Un = {
          name: "vue-treeselect--multi-value-item",
          inject: ["instance"],
          props: {
            node: {
              type: Object,
              required: !0
            }
          },
          methods: {
            handleMouseDown: K(function() {
              var t = this.instance, n = this.node;
              t.select(n);
            })
          },
          render: function() {
            var t = this.instance, n = this.node, f = {
              "vue-treeselect__multi-value-item": !0,
              "vue-treeselect__multi-value-item-disabled": n.isDisabled,
              "vue-treeselect__multi-value-item-new": n.isNew
            }, S = t.$slots["value-label"], x = S ? S({
              node: n
            }) : n.label;
            return Object(r.createVNode)("div", {
              class: "vue-treeselect__multi-value-item-container"
            }, [Object(r.createVNode)("div", {
              class: f,
              onMousedown: this.handleMouseDown
            }, [Object(r.createVNode)("span", {
              class: "vue-treeselect__multi-value-label"
            }, Hn(x) ? x : {
              default: function() {
                return [x];
              }
            }), Object(r.createVNode)("span", {
              class: "vue-treeselect__icon vue-treeselect__value-remove"
            }, [Object(r.createVNode)(qt, null, null)])])]);
          }
        }, Wn = Un, Gn = {
          name: "vue-treeselect--multi-value",
          inject: ["instance"],
          methods: {
            renderMultiValueItems: function() {
              var t = this.instance;
              return t.internalValue.slice(0, t.limit).map(t.getNode).map(function(n) {
                return Object(r.createVNode)(Wn, {
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
                return [t.renderMultiValueItems(), t.renderExceedLimitTip(), Object(r.createVNode)(Jt, {
                  key: "placeholder"
                }, null), Object(r.createVNode)(kt, {
                  ref: "input",
                  key: "input"
                }, null)];
              }
            }));
          }
        }, Kn = Gn, Xn = {
          xmlns: "http://www.w3.org/2000/svg",
          viewBox: "0 0 292.362 292.362"
        }, Qn = /* @__PURE__ */ Object(r.createVNode)("path", {
          d: "M286.935 69.377c-3.614-3.617-7.898-5.424-12.848-5.424H18.274c-4.952 0-9.233 1.807-12.85 5.424C1.807 72.998 0 77.279 0 82.228c0 4.948 1.807 9.229 5.424 12.847l127.907 127.907c3.621 3.617 7.902 5.428 12.85 5.428s9.233-1.811 12.847-5.428L286.935 95.074c3.613-3.617 5.427-7.898 5.427-12.847 0-4.948-1.814-9.229-5.427-12.85z"
        }, null, -1);
        function Yn(s, t, n, f, S, x) {
          return Object(r.openBlock)(), Object(r.createBlock)("svg", Xn, [Qn]);
        }
        var _t = {
          name: "vue-treeselect--arrow"
        };
        _t.render = Yn;
        var en = _t;
        function kn(s) {
          return typeof s == "function" || Object.prototype.toString.call(s) === "[object Object]" && !Object(r.isVNode)(s);
        }
        var Jn = {
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
              }, [Object(r.createVNode)(qt, {
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
              }, [Object(r.createVNode)(en, {
                class: n
              }, null)]) : null;
            },
            handleMouseDownOnX: K(function(t) {
              t.stopPropagation(), t.preventDefault();
              var n = this.instance, f = n.beforeClearAll(), S = function(F) {
                F && n.clear();
              };
              Me()(f) ? f.then(S) : setTimeout(function() {
                return S(f);
              }, 0);
            }),
            handleMouseDownOnArrow: K(function(t) {
              t.preventDefault(), t.stopPropagation();
              var n = this.instance;
              n.focusInput(), n.toggleMenu();
            }),
            // This is meant to be called by child `<Value />` component.
            renderValueContainer: function(t) {
              return Object(r.createVNode)("div", {
                class: "vue-treeselect__value-container"
              }, kn(t) ? t : {
                default: function() {
                  return [t];
                }
              });
            }
          },
          render: function() {
            var t = this.instance, n = t.single ? Pn : Kn;
            return Object(r.createVNode)("div", {
              class: "vue-treeselect__control",
              onMousedown: t.handleMouseDown
            }, [Object(r.createVNode)(n, {
              ref: "value-container"
            }, null), this.renderX(), this.renderArrow()]);
          }
        }, Zn = Jn, qn = function(s, t) {
          var n = document.createElement("_"), f = n.appendChild(document.createElement("_")), S = n.appendChild(document.createElement("_")), x = f.appendChild(document.createElement("_")), F = void 0, Y = void 0;
          return f.style.cssText = n.style.cssText = "height:100%;left:0;opacity:0;overflow:hidden;pointer-events:none;position:absolute;top:0;transition:0s;width:100%;z-index:-1", x.style.cssText = S.style.cssText = "display:block;height:100%;transition:0s;width:100%", x.style.width = x.style.height = "200%", s.appendChild(n), re(), ve;
          function re() {
            le();
            var ne = s.offsetWidth, he = s.offsetHeight;
            (ne !== F || he !== Y) && (F = ne, Y = he, S.style.width = ne * 2 + "px", S.style.height = he * 2 + "px", n.scrollLeft = n.scrollWidth, n.scrollTop = n.scrollHeight, f.scrollLeft = f.scrollWidth, f.scrollTop = f.scrollHeight, t({ width: ne, height: he })), f.addEventListener("scroll", re), n.addEventListener("scroll", re);
          }
          function le() {
            f.removeEventListener("scroll", re), n.removeEventListener("scroll", re);
          }
          function ve() {
            le(), s.removeChild(n);
          }
        }, _n = qn, gt, tt = [], er = 100;
        function tr() {
          gt = setInterval(function() {
            tt.forEach(tn);
          }, er);
        }
        function nr() {
          clearInterval(gt), gt = null;
        }
        function tn(s) {
          var t = s.$el, n = s.listener, f = s.lastWidth, S = s.lastHeight, x = t.offsetWidth, F = t.offsetHeight;
          (f !== x || S !== F) && (s.lastWidth = x, s.lastHeight = F, n({
            width: x,
            height: F
          }));
        }
        function rr(s, t) {
          var n = {
            $el: s,
            listener: t,
            lastWidth: null,
            lastHeight: null
          }, f = function() {
            Re(tt, n), tt.length || nr();
          };
          return tt.push(n), tn(n), tr(), f;
        }
        function nn(s, t) {
          var n = document.documentMode === 9, f = !0, S = function() {
            return f || t.apply(void 0, arguments);
          }, x = n ? rr : _n, F = x(s, S);
          return f = !1, F;
        }
        function ar(s) {
          for (var t = [], n = s.parentNode; n && n.nodeName !== "BODY" && n.nodeType === document.ELEMENT_NODE; )
            or(n) && t.push(n), n = n.parentNode;
          return t.push(window), t;
        }
        function or(s) {
          var t = getComputedStyle(s), n = t.overflow, f = t.overflowX, S = t.overflowY;
          return /(auto|scroll|overlay)/.test(n + S + f);
        }
        function rn(s, t) {
          var n = ar(s);
          return window.addEventListener("resize", t, {
            passive: !0
          }), n.forEach(function(f) {
            f.addEventListener("scroll", t, {
              passive: !0
            });
          }), function() {
            window.removeEventListener("resize", t, {
              passive: !0
            }), n.forEach(function(S) {
              S.removeEventListener("scroll", t, {
                passive: !0
              });
            });
          };
        }
        var ir = Object(r.defineComponent)({
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
        }), Ne = ir;
        function nt(s) {
          return typeof s == "function" || Object.prototype.toString.call(s) === "[object Object]" && !Object(r.isVNode)(s);
        }
        var mt, yt, bt, sr = {
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
                var f, S = {
                  "vue-treeselect__option-arrow": !0,
                  "vue-treeselect__option-arrow--rotated": this.shouldExpand
                };
                return Object(r.createVNode)("div", {
                  class: "vue-treeselect__option-arrow-container",
                  onMousedown: this.handleMouseDownOnArrow
                }, [Object(r.createVNode)(Object(r.resolveComponent)("transition"), {
                  name: "vue-treeselect__option-arrow--prepare",
                  appear: !0
                }, nt(f = Object(r.createVNode)(en, {
                  class: S
                }, null)) ? f : {
                  default: function() {
                    return [f];
                  }
                })]);
              }
              return (
                /*node.isLeaf && */
                t.hasBranchNodes ? (mt || (mt = Object(r.createVNode)("div", {
                  class: "vue-treeselect__option-arrow-placeholder"
                }, [Object(r.createTextVNode)(" ")])), mt) : null
              );
            },
            renderLabelContainer: function(t) {
              return Object(r.createVNode)("div", {
                class: "vue-treeselect__label-container",
                onMousedown: this.handleMouseDownOnLabelContainer
              }, nt(t) ? t : {
                default: function() {
                  return [t];
                }
              });
            },
            renderCheckboxContainer: function(t) {
              var n = this.instance, f = this.node;
              return n.single || n.disableBranchNodes && f.isBranch ? null : Object(r.createVNode)("div", {
                class: "vue-treeselect__checkbox-container"
              }, nt(t) ? t : {
                default: function() {
                  return [t];
                }
              });
            },
            renderCheckbox: function() {
              var t = this.instance, n = this.node, f = t.forest.checkedStateMap[n.id], S = {
                "vue-treeselect__checkbox": !0,
                "vue-treeselect__checkbox--checked": f === Ye,
                "vue-treeselect__checkbox--indeterminate": f === _e,
                "vue-treeselect__checkbox--unchecked": f === Qe,
                "vue-treeselect__checkbox--disabled": n.isDisabled
              };
              return yt || (yt = Object(r.createVNode)("span", {
                class: "vue-treeselect__check-mark"
              }, null)), bt || (bt = Object(r.createVNode)("span", {
                class: "vue-treeselect__minus-mark"
              }, null)), Object(r.createVNode)("span", {
                class: S
              }, [yt, bt]);
            },
            renderLabel: function() {
              var t = this.instance, n = this.node, f = n.isBranch && (t.localSearch.active ? t.showCountOnSearchComputed : t.showCount), S = f ? t.localSearch.active ? t.localSearch.countMap[n.id][t.showCountOf] : n.count[t.showCountOf] : NaN, x = "vue-treeselect__label", F = "vue-treeselect__count", Y = t.$slots["option-label"];
              return Y ? Y({
                node: n,
                shouldShowCount: f,
                count: S,
                labelClassName: x,
                countClassName: F
              }) : Object(r.createVNode)("label", {
                class: x
              }, [n.label, f && Object(r.createVNode)("span", {
                class: F
              }, [Object(r.createTextVNode)("("), S, Object(r.createTextVNode)(")")])]);
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
              return !n.childrenStates.isLoaded || n.children.length ? null : Object(r.createVNode)(Ne, {
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
              return n.childrenStates.isLoading ? Object(r.createVNode)(Ne, {
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
              return f.childrenStates.loadingError ? Object(r.createVNode)(Ne, {
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
            handleMouseDownOnArrow: K(function() {
              var t = this.instance, n = this.node;
              t.toggleExpanded(n);
            }),
            handleMouseDownOnLabelContainer: K(function() {
              var t = this.instance, n = this.node;
              n.isBranch && t.disableBranchNodes ? t.toggleExpanded(n) : t.select(n);
            }),
            handleMouseDownOnRetry: K(function() {
              var t = this.instance, n = this.node;
              t.loadChildrenOptions(n);
            })
          },
          render: function() {
            var t, n = this.node, f = this.instance.shouldFlattenOptions ? 0 : n.level, S = y({
              "vue-treeselect__list-item": !0
            }, "vue-treeselect__indent-level-".concat(f), !0);
            return Object(r.createVNode)("div", {
              class: S
            }, [this.renderOption(), n.isBranch ? Object(r.createVNode)(Object(r.resolveComponent)("transition"), {
              name: "vue-treeselect__list--transition"
            }, nt(t = this.renderSubOptionsList()) ? t : {
              default: function() {
                return [t];
              }
            }) : ""]);
          }
        }, lr = sr, cr = lr;
        function ur(s) {
          return typeof s == "function" || Object.prototype.toString.call(s) === "[object Object]" && !Object(r.isVNode)(s);
        }
        var dr = {
          top: "top",
          bottom: "bottom",
          above: "top",
          below: "bottom"
        }, fr = {
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
              var t = this.instance, n = t.getRemoteSearchEntry(), f = t.trigger.searchQuery === "" && !t.defaultOptions, S = f ? !1 : n.isLoaded && n.options.length === 0;
              return f ? this.renderSearchPromptTip() : n.isLoading ? this.renderLoadingOptionsTip() : n.loadingError ? this.renderAsyncSearchLoadingErrorTip() : S ? this.renderNoResultsTip() : this.renderOptionList();
            },
            renderOptionList: function() {
              var t = this.instance;
              return Object(r.createVNode)("div", {
                class: "vue-treeselect__list"
              }, [t.forest.normalizedOptions.map(function(n) {
                return Object(r.createVNode)(cr, {
                  node: n,
                  key: n.id
                }, null);
              })]);
            },
            renderSearchPromptTip: function() {
              var t = this.instance;
              return Object(r.createVNode)(Ne, {
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
              return Object(r.createVNode)(Ne, {
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
              return Object(r.createVNode)(Ne, {
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
              return Object(r.createVNode)(Ne, {
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
              return Object(r.createVNode)(Ne, {
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
              return Object(r.createVNode)(Ne, {
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
                var n = t.getMenu(), f = t.getControl(), S = n.getBoundingClientRect(), x = f.getBoundingClientRect(), F = S.height, Y = window.innerHeight, re = x.top, le = window.innerHeight - x.bottom, ve = x.top >= 0 && x.top <= Y || x.top < 0 && x.bottom > 0, ne = le > F + Gt, he = re > F + Gt;
                ve ? t.openDirection !== "auto" ? t.menu.placement = dr[t.openDirection] : ne || !he ? t.menu.placement = "bottom" : t.menu.placement = "top" : t.closeMenu();
              }
            },
            setupMenuSizeWatcher: function() {
              var t = this.instance, n = t.getMenu();
              this.menuSizeWatcher || (this.menuSizeWatcher = {
                remove: nn(n, this.adjustMenuOpenDirection)
              });
            },
            setupMenuResizeAndScrollEventListeners: function() {
              var t = this.instance, n = t.getControl();
              this.menuResizeAndScrollEventListeners || (this.menuResizeAndScrollEventListeners = {
                remove: rn(n, this.adjustMenuOpenDirection)
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
            }, ur(t = this.renderMenu()) ? t : {
              default: function() {
                return [t];
              }
            })]);
          }
        }, an = fr, vr = {
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
                remove: rn(n, this.updateMenuContainerOffset)
              });
            },
            setupControlSizeWatcher: function() {
              var t = this, n = this.instance, f = n.getControl();
              this.controlSizeWatcher || (this.controlSizeWatcher = {
                remove: nn(f, function() {
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
              var t = this.instance, n = this.$el, f = t.getControl(), S = f.getBoundingClientRect();
              n.style.width = S.width + "px";
            },
            updateMenuContainerOffset: function() {
              var t = this.instance, n = t.getControl(), f = this.$el, S = n.getBoundingClientRect(), x = f.getBoundingClientRect(), F = t.menu.placement === "bottom" ? S.height : 0, Y = Math.round(S.left - x.left) + "px", re = Math.round(S.top - x.top + F) + "px", le = this.$refs.menu.$refs["menu-container"].style, ve = ["transform", "webkitTransform", "MozTransform", "msTransform"], ne = J(ve, function(he) {
                return he in document.body.style;
              });
              le[ne] = "translate(".concat(Y, ", ").concat(re, ")");
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
            }, [Object(r.createVNode)(an, {
              ref: "menu"
            }, null)]);
          },
          unmounted: function() {
            this.removeHandlers();
          }
        }, St, hr = {
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
              document.body.appendChild(t), this.portalTarget = Object(r.createApp)(V({
                parent: this
              }, vr)), this.portalTarget.mount(t);
            },
            teardown: function() {
              document.body.removeChild(this.portalTarget.$el), this.portalTarget.$el.innerHTML = "", this.portalTarget.$destroy(), this.portalTarget = null;
            }
          },
          render: function() {
            return St || (St = Object(r.createVNode)("div", {
              class: "vue-treeselect__menu-placeholder"
            }, null)), St;
          }
        }, pr = hr, on = Object(r.defineComponent)({
          name: "vue-treeselect",
          mixins: [Qt],
          components: {
            HiddenFields: Ln,
            Control: Zn,
            Menu: an,
            MenuPortal: pr
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
        on.render = c;
        var sn = on;
        e("d15f");
        var gr = sn;
        l.default = gr;
      }
    ),
    /***/
    fb6a: (
      /***/
      function(o, l, e) {
        var a = e("23e7"), i = e("861d"), r = e("e8b5"), c = e("23cb"), u = e("50c4"), h = e("fc6a"), v = e("8418"), p = e("b622"), b = e("1dde"), m = e("ae40"), y = b("slice"), O = m("slice", { ACCESSORS: !0, 0: 0, 1: 2 }), j = p("species"), A = [].slice, M = Math.max;
        a({ target: "Array", proto: !0, forced: !y || !O }, {
          slice: function(V, z) {
            var T = h(this), E = u(T.length), L = c(V, E), $ = c(z === void 0 ? E : z, E), N, g, C;
            if (r(T) && (N = T.constructor, typeof N == "function" && (N === Array || r(N.prototype)) ? N = void 0 : i(N) && (N = N[j], N === null && (N = void 0)), N === Array || N === void 0))
              return A.call(T, L, $);
            for (g = new (N === void 0 ? Array : N)(M($ - L, 0)), C = 0; L < $; L++, C++) L in T && v(g, C, T[L]);
            return g.length = C, g;
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
})(On);
var ta = On.exports;
const na = /* @__PURE__ */ Sr(ta), ra = { key: 0 }, aa = { class: "text-base font-bold" }, oa = {
  class: "relative py-8 mb-0.5 h-75",
  "data-type": "file"
}, ia = ["aria-label"], sa = { class: "text-gray-500 text-xs mb-1" }, la = { key: 1 }, ca = { class: "text-base font-bold" }, ua = {
  class: "mb-0.5",
  "data-type": "url"
}, da = ["value", "aria-label"], fa = {
  key: 0,
  class: "text-red-900 text-xs"
}, va = { key: 2 }, ha = { class: "text-base font-bold" }, pa = {
  class: "relative mb-0.5",
  "data-type": "select"
}, ga = { key: 0 }, ma = {
  key: 0,
  class: "text-red-900 text-xs"
}, ya = { key: 1 }, ba = ["size", "value", "aria-label"], Sa = ["value"], Oa = {
  key: 0,
  class: "text-red-900 text-xs"
}, xa = {
  key: 1,
  class: "text-red-900 text-xs"
}, Ea = { key: 3 }, Na = ["aria-label"], Ta = { class: "text-base font-bold" }, Ca = { key: 4 }, Ia = { class: "text-base font-bold" }, La = { class: "relative mb-0.5" }, Aa = ["value", "aria-label"], Ma = {
  key: 0,
  class: "text-red-900 text-xs"
}, Ra = /* @__PURE__ */ qe({
  __name: "form-input",
  props: {
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
  emits: ["update:modelValue", "link", "select", "upload", "text", "nested"],
  setup(d, { emit: o }) {
    const l = Bt("iApi"), { t: e } = $t(), a = o, i = d, r = te(), c = te(!1), u = te(!1), h = te(!1), v = te(!1), p = te([...i.selectedValues]), b = te("value-label"), m = te("option-label"), y = te(void 0), O = te(null), j = Xe([]), A = te();
    if (i.defaultOption && i.modelValue === "" && i.options.length) {
      let P = i.options[0].value;
      if (i.name === "latField") {
        const R = new RegExp(/^(y|lat.*)$/i);
        P = i.options.find((K) => R.test(K.label))?.value || P;
      } else if (i.name === "longField") {
        const R = new RegExp(/^(x|long.*)$/i);
        P = i.options.find((K) => R.test(K.label))?.value || P;
      }
      a("update:modelValue", P);
    }
    const M = (P) => {
      P.trim() !== "" ? c.value = !0 : (c.value = !1, l.updateAlert(e("wizard.configure.name.error.required")));
    }, D = (P) => {
      let R;
      try {
        R = new URL(P);
      } catch {
        return c.value = !1, !1;
      }
      R.protocol === "http:" || R.protocol === "https:" ? c.value = !0 : c.value = !1;
    }, V = (P) => {
      a("upload", P.target.files[0]), P.target.value = "";
    }, z = (P) => {
      D(P.target.value), a("link", P.target.value, c), u.value = !1;
    }, T = (P, R) => {
      a(P ? "select" : "update:modelValue", R.target.value);
    }, E = (P) => {
      a("nested", P.target.checked);
    }, L = (P) => {
      M(P.target.value), a("link", P.target.value, c), h.value = !1;
    }, $ = () => {
      a("select", i.sublayerOptions(p.value)), p.value && p.value.length > 0 ? v.value = !1 : v.value = !0;
    }, N = (P) => P.length > 5 ? `${P.slice(0, 5)}...` : P;
    function g() {
      y.value = new ResizeObserver(function() {
        C();
      }), y.value.observe(l.$vApp.$el.querySelector(".vue-treeselect__control")), y.value.observe(l.$vApp.$el.querySelector(".vue-treeselect__menu"));
    }
    const C = () => {
      const P = l.$vApp.$el.querySelector(".vue-treeselect__menu")?.clientHeight, R = l.$vApp.$el.querySelector(".vue-treeselect__control")?.clientHeight;
      r.value.style.height = `${P + R + 30}px`;
    };
    j.push(
      ct(O, (P) => {
        P && I();
      })
    );
    const I = () => {
      if (O.value) {
        const P = O.value.querySelector('input[type="text"]');
        P && P.setAttribute("aria-label", e("wizard.configure.sublayers.select"));
      }
    }, w = () => {
      A.value._tippy.hide();
    }, B = (P) => {
      P.key === "Tab" && A.value?.matches(":focus") && navigator.userAgent.includes("Firefox") ? A.value._tippy.show() : A.value._tippy.hide();
    };
    return ut(() => {
      A.value?.addEventListener("blur", w), A.value?.addEventListener("keyup", B);
    }), dt(() => {
      y.value.disconnect(), j.forEach((P) => P()), A.value?.removeEventListener("blur", w), A.value?.removeEventListener("keyup", B);
    }), (P, R) => {
      const J = Pt("truncate"), K = Pt("tippy");
      return k(), ee("div", {
        class: "input-wrapper mb-12",
        ref_key: "el",
        ref: r
      }, [
        d.type === "file" ? (k(), ee("div", ra, [
          W("label", aa, ae(d.label), 1),
          W("div", oa, [
            W("input", {
              class: "absolute w-full opacity-0 inset-0 cursor-pointer",
              type: "file",
              name: "file",
              accept: ".geojson,.json,.csv,.zip",
              "aria-label": i.ariaLabel,
              onInput: R[0] || (R[0] = (Q) => {
                V(Q);
              })
            }, null, 40, ia),
            R[11] || (R[11] = W("div", { class: "upload-mask absolute inset-0 flex border-dashed border-2 border-gray-400 pointer-events-none justify-center" }, [
              W("svg", {
                class: "w-30 h-30 m-auto",
                fill: "#a8a8a8",
                xmlns: "http://www.w3.org/2000/svg",
                viewBox: "0 0 58 58"
              }, [
                W("path", { d: "M29,58A29,29,0,1,0,0,29,29,29,0,0,0,29,58ZM29,4A25,25,0,1,1,4,29,25,25,0,0,1,29,4Z" }),
                W("polygon", { points: "27 22 27 44.4 31 44.4 31 22 41.7 31.1 44.3 28.1 29 15 13.7 28.1 16.3 31.1 27 22" })
              ])
            ], -1))
          ]),
          W("div", sa, ae(d.help), 1)
        ])) : d.type === "url" ? (k(), ee("div", la, [
          W("label", ca, ae(d.label), 1),
          W("div", ua, [
            W("input", {
              class: "text-sm w-full border-solid border-gray-300 mb-5 focus:border-green-500",
              type: "url",
              name: "url",
              value: d.modelValue,
              "aria-label": i.ariaLabel,
              onChange: R[1] || (R[1] = (Q) => c.value ? u.value = !1 : u.value = !0),
              onInput: R[2] || (R[2] = (Q) => {
                z(Q);
              })
            }, null, 40, da)
          ]),
          u.value ? (k(), ee("div", fa, ae(d.modelValue ? d.validationMessages?.invalid : d.validationMessages?.required), 1)) : ue("", !0)
        ])) : d.type === "select" ? (k(), ee("div", va, [
          W("label", ha, ae(d.label), 1),
          W("div", pa, [
            d.multiple ? (k(), ee("div", ga, [
              W("div", {
                ref_key: "treeWrapper",
                ref: O
              }, [
                pe(G(na), {
                  modelValue: p.value,
                  "onUpdate:modelValue": R[3] || (R[3] = (Q) => p.value = Q),
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
                  placeholder: G(e)("wizard.configure.sublayers.select"),
                  noResultsText: G(e)("wizard.configure.sublayers.results"),
                  clearAllText: G(e)("wizard.configure.sublayers.clearAll"),
                  onSelect: R[4] || (R[4] = (Q) => {
                    P.$nextTick(() => {
                      $();
                    });
                  }),
                  onDeselect: R[5] || (R[5] = (Q) => {
                    P.$nextTick(() => {
                      $();
                    });
                  }),
                  onOpen: R[6] || (R[6] = (Q) => {
                    P.$nextTick(() => {
                      g();
                    });
                  })
                }, {
                  [b.value]: ge(({ node: Q }) => [
                    W("label", null, ae(N(Q.label)), 1)
                  ]),
                  [m.value]: ge(({ node: Q, labelClassName: se }) => [
                    lt((k(), ee("label", {
                      class: Je(se)
                    }, [
                      Ze(ae(Q.label), 1)
                    ], 2)), [
                      [J, {
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
              d.validation && v.value ? (k(), ee("div", ma, ae(d.validationMessages?.required), 1)) : ue("", !0)
            ])) : (k(), ee("div", ya, [
              lt((k(), ee("select", {
                class: Je(["block border-solid border-gray-300 w-full p-3 overflow-y-auto", d.size && "configure-select"]),
                size: d.size,
                value: d.modelValue,
                onInput: R[7] || (R[7] = (Q) => T(d.size, Q)),
                "aria-label": i.ariaLabel,
                ref_key: "wizardSelect",
                ref: A
              }, [
                (k(!0), ee(mn, null, yn(d.options, (Q) => (k(), ee("option", {
                  class: "p-6",
                  key: Q.label,
                  value: Q.value
                }, ae(Q.label), 9, Sa))), 128))
              ], 42, ba)), [
                [K, {
                  content: G(e)("select.items"),
                  trigger: "manual",
                  placement: "top-start"
                }]
              ]),
              d.validation && d.formatError ? (k(), ee("div", Oa, ae(d.validationMessages?.invalid), 1)) : ue("", !0),
              d.validation && d.failureError ? (k(), ee("div", xa, ae(d.validationMessages?.failure), 1)) : ue("", !0)
            ]))
          ])
        ])) : d.type === "checkbox" ? (k(), ee("div", Ea, [
          W("input", {
            class: "text-sm border-solid border-gray-300 mb-5 focus:border-green-500 mr-10",
            type: "checkbox",
            name: "nested",
            checked: !0,
            "aria-label": i.ariaLabel,
            onChange: R[8] || (R[8] = (Q) => {
              E(Q);
            })
          }, null, 40, Na),
          W("label", Ta, ae(d.label), 1)
        ])) : (k(), ee("div", Ca, [
          W("label", Ia, ae(d.label), 1),
          W("div", La, [
            W("input", {
              class: Je(["border-solid border-gray-300 p-3 w-full", { "error-border": !c.value && !d.modelValue }]),
              type: "text",
              value: d.modelValue,
              "aria-label": i.ariaLabel,
              onChange: R[9] || (R[9] = (Q) => c.value ? h.value = !1 : h.value = !0),
              onInput: R[10] || (R[10] = (Q) => {
                L(Q);
              })
            }, null, 42, Aa)
          ]),
          d.validation && !d.modelValue ? (k(), ee("div", Ma, ae(d.validationMessages?.required), 1)) : ue("", !0)
        ]))
      ], 512);
    };
  }
}), be = /* @__PURE__ */ ft(Ra, [["__scopeId", "data-v-5b62d383"]]), wa = { class: "step relative flex flex-col px-12" }, ja = { class: "stepper-header flex pb-24" }, Fa = {
  key: 1,
  class: "flex-none stepper-check w-24 h-24 text-gray-400"
}, Da = { class: "flex flex-col overflow-hidden" }, Va = { class: "pl-12 flex items-center text-md" }, Pa = { class: "pl-12 text-xs transition-opacity duration-1000 ease-out" }, za = { class: "pl-36" }, $a = /* @__PURE__ */ qe({
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
  setup(d) {
    const o = Bt("stepper"), l = te(-1);
    ut(() => {
      l.value = o.numSteps++;
    });
    const e = () => o.activeIndex > l.value, a = () => o.activeIndex === l.value;
    return (i, r) => {
      const c = Pt("truncate");
      return k(), ee("div", wa, [
        W("div", ja, [
          e() ? (k(), ee("div", Fa, r[0] || (r[0] = [
            W("svg", {
              xmlns: "http://www.w3.org/2000/svg",
              height: "100%",
              width: "100%",
              preserveAspectRatio: "xMidYMid meet",
              viewBox: "0 0 24 24",
              focusable: "false"
            }, [
              W("g", { id: "check_circle" }, [
                W("path", { d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" })
              ])
            ], -1)
          ]))) : (k(), ee("div", {
            key: 0,
            class: Je(["w-24 h-24 bg-gray-500 rounded-full flex justify-center items-center text-white text-xs font-semibold", { "bg-blue-500": a }])
          }, ae(l.value + 1), 3)),
          W("div", Da, [
            W("div", Va, ae(d.title), 1),
            lt((k(), ee("div", Pa, [
              Ze(ae(d.summary), 1)
            ])), [
              [dn, !a()],
              [c]
            ])
          ])
        ]),
        pe(Or, {
          name: "step",
          mode: "out-in"
        }, {
          default: ge(() => [
            lt(W("div", za, [
              Ge(i.$slots, "default", {}, void 0, !0)
            ], 512), [
              [dn, a()]
            ])
          ]),
          _: 3
        })
      ]);
    };
  }
}), Vt = /* @__PURE__ */ ft($a, [["__scopeId", "data-v-686fab2c"]]), Ba = { class: "py-12 h-auto stepper" }, Ha = /* @__PURE__ */ qe({
  __name: "stepper",
  props: {
    activeStep: {
      type: Number,
      default: 0
    }
  },
  setup(d) {
    const o = d, l = Se(() => o.activeStep), e = Xe([]), a = Xe({
      activeIndex: o.activeStep,
      numSteps: 0
    });
    return xr("stepper", a), e.push(
      ct(l, () => {
        a.activeIndex = o.activeStep;
      })
    ), dt(() => {
      e.forEach((i) => i());
    }), (i, r) => (k(), ee("div", Ba, [
      Ge(i.$slots, "default")
    ]));
  }
}), Ua = {
  key: 0,
  class: "inline-flex items-center mb-10"
}, Wa = { class: "px-5 text-xs" }, Ga = { key: 5 }, Ka = ["for"], Xa = {
  key: 6,
  class: "text-base font-bold"
}, Qa = { class: "sr-only" }, Ya = { class: "sr-only" }, ka = /* @__PURE__ */ qe({
  __name: "screen",
  props: {
    panel: {
      type: Object,
      required: !0
    }
  },
  setup(d) {
    const o = Er(), { t: l } = $t(), e = Bt("iApi"), a = te(), i = te([]), r = Se(() => o.layerSource), c = Se(() => o.currStep), u = te(), h = te(), v = te(0), p = te(!1), b = te(!1), m = te(!1), y = te(!1), O = te(!1), j = te(!1), A = te(!1), M = te(!0), D = te(""), V = te(""), z = te([]), T = Xe([
      {
        value: oe.FEATURE,
        label: l("wizard.layerType.esriFeature")
      },
      {
        value: oe.MAPIMAGE,
        label: l("wizard.layerType.esriMapImage")
      },
      {
        value: oe.TILE,
        label: l("wizard.layerType.esriTile")
      },
      {
        value: oe.IMAGERY,
        label: l("wizard.layerType.esriImagery")
      },
      {
        value: oe.WMS,
        label: l("wizard.layerType.ogcWms")
      },
      {
        value: oe.WFS,
        label: l("wizard.layerType.ogcWfs")
      }
    ]), E = Xe([
      {
        value: oe.GEOJSON,
        label: l("wizard.fileType.geojson")
      },
      {
        value: oe.SHAPEFILE,
        label: l("wizard.fileType.shapefile")
      },
      { value: oe.CSV, label: l("wizard.fileType.csv") }
    ]), L = Se({
      get() {
        return o.url;
      },
      set(U) {
        o.url = U;
      }
    }), $ = Se({
      get() {
        return o.fileData;
      },
      set(U) {
        o.fileData = U;
      }
    }), N = Se({
      get() {
        return o.typeSelection;
      },
      set(U) {
        o.typeSelection = U;
      }
    }), g = Se({
      get() {
        return o.layerInfo;
      },
      set(U) {
        o.layerInfo = U;
      }
    }), C = Se(() => {
      let U = e.geo.proxy !== "";
      switch (N.value) {
        case oe.FEATURE:
        case oe.MAPIMAGE:
        case oe.TILE:
        case oe.IMAGERY:
          return !U;
        case oe.WFS:
          return !0;
        case oe.WMS:
          return !U;
        case oe.GEOJSON:
        case oe.SHAPEFILE:
        case oe.CSV:
          return !!(K() && !$.value);
        default:
          return !1;
      }
    });
    Nr(() => ((c.value === ze.FORMAT || c.value === ze.CONFIGURE) && (b.value = !0, o.goToStep(ze.FORMAT)), !1)), ut(() => {
      i.value.push(
        e.event.on(fn.LAYER_LAYERSTATECHANGE, (U) => {
          U.layer.userAdded && (D.value = U.layer.name, A.value = U.state !== Tt.LOADING && U.state !== Tt.NEW, M.value = A.value && U.state === Tt.LOADED);
        })
      ), c.value === ze.CONFIGURE && (g.value?.configOptions.includes("colour") && xe(), O.value = !g.value?.configOptions.includes("sublayers") && !!g.value?.config.name);
    }), dt(() => {
      i.value.forEach((U) => e.event.off(U));
    });
    const I = async (U) => {
      const H = new FileReader();
      H.onload = (q) => {
        $.value = H.result, L.value = U.name, w(q);
      }, H.readAsArrayBuffer(U);
    }, w = (U) => {
      U?.preventDefault(), N.value = r.value.guessFormatFromURL(L.value), o.goToStep(ze.FORMAT);
    }, B = async (U) => {
      U?.preventDefault(), p.value = !0, m.value = !1, j.value = !0, V.value = K() ? E.find((q) => q.value === N.value)?.label : T.find((q) => q.value === N.value)?.label;
      try {
        g.value = K() ? await r.value.fetchFileInfo(L.value, N.value, $.value) : await r.value.fetchServiceInfo(
          L.value,
          N.value,
          o.nested
        ), K() && $.value && (g.value.config.url = "");
      } catch {
        p.value = !1, m.value = !0;
        return;
      }
      const H = N.value === oe.FEATURE && !(g.value && g.value.fields);
      if (!g.value || H) {
        b.value = !0, g.value = {
          config: {
            id: "Placeholder",
            layerType: oe.UNKNOWN,
            url: ""
          },
          configOptions: []
        }, p.value = !1;
        return;
      }
      xe(), o.goToStep(ze.CONFIGURE), O.value = !(g.value.configOptions.includes("sublayers") || !g.value.config.name), p.value = !1, j.value = !1;
    }, P = async (U) => {
      U?.preventDefault();
      const H = Object.assign(g.value.config, U);
      z.value = [], V.value = "";
      const q = e.geo.layer.createLayer(H);
      e.geo.map.addLayer(q).catch(() => {
      }), q.userAdded = !0, e.event.emit(fn.USER_LAYER_ADDED, q), y.value = !1, o.goToStep(ze.UPLOAD);
    }, R = () => g.value?.fields.map((U) => ({
      value: U.name,
      label: U.alias || U.name
    })), J = (U) => g.value?.latLonFields[U].map((H) => ({
      value: H,
      label: H
    })), K = () => $.value || L.value.match(/\.(zip|csv|json|geojson)$/), Q = (U) => {
      I(U), L.value = "";
    }, se = (U, H) => {
      L.value = U.trim(), H ? y.value = !0 : y.value = !1;
    }, Le = (U) => {
      N.value = U, b.value = !1;
    }, Ae = (U) => {
      g.value.config.name = U.trim();
      const H = g.value?.config.sublayers;
      (H ? U && H.length > 0 : U.trim()) ? O.value = !0 : O.value = !1;
    }, Te = (U) => {
      g.value.config.sublayers = U, U.length > 0 && g.value?.config.name ? O.value = !0 : O.value = !1;
    }, Me = (U) => {
      if (o.nested = U, z.value = [], v.value += 1, N.value === oe.MAPIMAGE) {
        g.value.layers = r.value.createLayerHierarchy(
          g.value.layersRaw,
          o.nested
        );
        const H = new Set(
          (g.value?.config?.sublayers ?? []).map((q) => q.index)
        );
        o.nested ? Re(g, H) : Qe(g, H);
      } else if (N.value === oe.WMS) {
        g.value.layers = r.value.mapWmsLayerList(
          g.value.layersRaw,
          o.nested
        );
        const H = new Set((g.value?.config?.sublayers ?? []).map((q) => q.id));
        o.nested ? Oe(g, H) : _e(g, H);
      }
      Te(Ye(z.value));
    }, Re = (U, H) => {
      const q = /* @__PURE__ */ new Map();
      for (const X of U.value.layersRaw)
        if (X.parentLayerId !== -1) {
          const de = q.get(X.parentLayerId) || [];
          de.push(X.id), q.set(X.parentLayerId, de);
        }
      const _ = (X) => {
        const de = q.get(X);
        return de ? de.every((Ee) => q.has(Ee) ? _(Ee) : H.has(Ee)) : !1;
      }, ie = (X) => {
        if (_(X))
          z.value.push(X);
        else {
          const de = q.get(X);
          if (de)
            for (const Ee of de)
              H.has(Ee) && z.value.push(Ee);
        }
      };
      for (const X of q.keys()) ie(X);
      for (const X of U.value.layersRaw)
        X.parentLayerId === -1 && !q.has(X.id) && H.has(X.id) && z.value.push(X.id);
      z.value = Array.from(new Set(z.value));
    }, Oe = (U, H) => {
      const q = (X) => !X.layers || X.layers.length === 0 ? H.has(X.name) : X.layers.every((de) => q(de)), _ = (X) => {
        q(X) ? z.value.push(X.name) : X.layers && X.layers.forEach(_);
      }, ie = U.value.layersRaw[0];
      ie && ie.layers && ie.layers.forEach((X) => _(X)), z.value = Array.from(new Set(z.value));
    }, Qe = (U, H) => {
      const q = (_) => {
        const ie = U.value.layersRaw.filter((X) => X.parentLayerId === _);
        if (ie.length > 0)
          for (const X of ie)
            H.has(X.id) ? z.value.push(X.id) : q(X.id);
        else z.value.push(_);
      };
      for (const _ of U.value.layersRaw)
        H.has(_.id) && q(_.id);
      z.value = Array.from(new Set(z.value));
    }, _e = (U, H) => {
      const q = (ie) => {
        ie.layers && ie.layers.length > 0 ? ie.layers.forEach(q) : z.value.push(ie.name);
      }, _ = U.value.layersRaw[0];
      for (const ie of H) {
        const X = _.layers.find((de) => de.name === ie);
        X && X.layers && X.layers.length > 0 ? q(X) : X && z.value.push(X.name);
      }
      z.value = Array.from(new Set(z.value));
    }, Ye = (U) => U.map((H) => {
      switch (N.value) {
        case oe.MAPIMAGE:
          return {
            index: H,
            state: { opacity: 1, visibility: !0 }
          };
        case oe.WMS: {
          const q = H.lastIndexOf("#");
          return { id: H.substring(0, q) };
        }
        default:
          return {
            id: H
          };
      }
    }), xe = () => {
      u.value = g.value?.config.colour ?? "#" + Math.floor(Math.random() * 16777215).toString(16).padStart(6, "0");
      do
        h.value = Math.random().toString(36).substring(2, 9);
      while (document.getElementById(h.value + "-hue-slider") !== null);
    }, we = (U) => {
      g.value.config.colour = U.colors.hex.substring(0, 7), Cr(() => {
        a.value.querySelector(".vacp-copy-button").style.backgroundColor = g.value?.config.colour;
      });
    }, je = () => {
      y.value = !1, o.goToStep(0);
    }, Fe = () => {
      z.value = [], O.value = !1, o.goToStep(1);
    };
    return (U, H) => {
      const q = Tr("panel-screen");
      return k(), Ie(q, { panel: d.panel }, {
        header: ge(() => [
          Ze(ae(G(l)("wizard.title")), 1)
        ]),
        content: ge(() => [
          pe(Ha, { activeStep: c.value }, {
            default: ge(() => [
              pe(Vt, {
                title: G(l)("wizard.upload.title"),
                summary: L.value
              }, {
                default: ge(() => [
                  W("form", {
                    name: "upload",
                    onSubmit: w,
                    onClick: H[1] || (H[1] = (_) => A.value = !1)
                  }, [
                    pe(be, {
                      type: "file",
                      name: "file",
                      label: G(l)("wizard.upload.file.label"),
                      help: G(l)("wizard.upload.file.help"),
                      onUpload: Q,
                      "aria-label": G(l)("wizard.upload.file.label")
                    }, null, 8, ["label", "help", "aria-label"]),
                    H[12] || (H[12] = W("span", { class: "block text-center mb-10" }, "or", -1)),
                    pe(be, {
                      type: "url",
                      name: "url",
                      modelValue: L.value,
                      "onUpdate:modelValue": H[0] || (H[0] = (_) => L.value = _),
                      label: G(l)("wizard.upload.url.label"),
                      onLink: se,
                      validation: !0,
                      "validation-messages": {
                        required: G(l)("wizard.upload.url.error.required"),
                        invalid: G(l)("wizard.upload.url.error.url")
                      },
                      "aria-label": G(l)("wizard.upload.url.label")
                    }, null, 8, ["modelValue", "label", "validation-messages", "aria-label"]),
                    pe(Dt, {
                      onSubmit: w,
                      onCancel: je,
                      disabled: !y.value
                    }, null, 8, ["disabled"])
                  ], 32)
                ]),
                _: 1
              }, 8, ["title", "summary"]),
              pe(Vt, {
                title: G(l)("wizard.format.title"),
                summary: V.value
              }, {
                default: ge(() => [
                  W("form", {
                    name: "format",
                    onSubmit: B
                  }, [
                    C.value ? (k(), ee("div", Ua, [
                      H[13] || (H[13] = W("svg", {
                        class: "inline-block fill-current w-16 h-16",
                        xmlns: "http://www.w3.org/2000/svg",
                        viewBox: "0 0 24 24"
                      }, [
                        W("path", {
                          d: "M0 0h24v24H0z",
                          fill: "none"
                        }),
                        W("path", { d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z" })
                      ], -1)),
                      W("span", Wa, ae(G(l)("wizard.format.info.cors")), 1)
                    ])) : ue("", !0),
                    pe(be, {
                      type: "select",
                      name: "type",
                      modelValue: N.value,
                      "onUpdate:modelValue": H[2] || (H[2] = (_) => N.value = _),
                      onSelect: Le,
                      size: K() ? E.length : T.length,
                      label: K() ? G(l)("wizard.format.type.file") : G(l)("wizard.format.type.service"),
                      options: K() ? E : T,
                      formatError: b.value,
                      failureError: m.value,
                      validation: j.value,
                      "validation-messages": {
                        required: G(l)("wizard.format.type.error.required"),
                        invalid: G(l)("wizard.format.type.error.invalid"),
                        failure: `${G(l)("wizard.format.type.error.failure")}.${C.value ? " " + G(l)("wizard.format.warn.cors") + "." : ""}${" " + G(l)("wizard.format.warn.vpn") + "."}`
                      },
                      onKeydown: H[3] || (H[3] = vn(() => {
                      }, ["stop"])),
                      "aria-label": G(l)("wizard.format.type.service")
                    }, null, 8, ["modelValue", "size", "label", "options", "formatError", "failureError", "validation", "validation-messages", "aria-label"]),
                    pe(Dt, {
                      onSubmit: B,
                      onCancel: H[4] || (H[4] = () => {
                        p.value = !1, b.value = !1, m.value = !1, L.value ? y.value = !0 : y.value = !1, j.value = !1, G(o).goToStep(0), V.value = "";
                      }),
                      animation: !0,
                      disabled: p.value
                    }, null, 8, ["disabled"])
                  ], 32)
                ]),
                _: 1
              }, 8, ["title", "summary"]),
              pe(Vt, {
                title: G(l)("wizard.configure.title")
              }, {
                default: ge(() => [
                  W("form", {
                    name: "configure",
                    onSubmit: P,
                    ref_key: "formElement",
                    ref: a
                  }, [
                    g.value?.configOptions.includes("name") ? (k(), Ie(be, {
                      key: 0,
                      type: "text",
                      name: "name",
                      modelValue: g.value.config.name,
                      "onUpdate:modelValue": H[5] || (H[5] = (_) => g.value.config.name = _),
                      onLink: Ae,
                      label: G(l)("wizard.configure.name.label"),
                      "aria-label": G(l)("wizard.configure.name.label"),
                      validation: !0,
                      "validation-messages": {
                        required: G(l)("wizard.configure.name.error.required")
                      }
                    }, null, 8, ["modelValue", "label", "aria-label", "validation-messages"])) : ue("", !0),
                    g.value?.configOptions.includes("nameField") ? (k(), Ie(be, {
                      key: 1,
                      type: "select",
                      name: "nameField",
                      modelValue: g.value.config.nameField,
                      "onUpdate:modelValue": H[6] || (H[6] = (_) => g.value.config.nameField = _),
                      label: G(l)("wizard.configure.nameField.label"),
                      "aria-label": G(l)("wizard.configure.nameField.label"),
                      defaultOption: !0,
                      options: R()
                    }, null, 8, ["modelValue", "label", "aria-label", "options"])) : ue("", !0),
                    g.value?.configOptions.includes("tooltipField") ? (k(), Ie(be, {
                      key: 2,
                      type: "select",
                      name: "tooltipField",
                      modelValue: g.value.config.tooltipField,
                      "onUpdate:modelValue": H[7] || (H[7] = (_) => g.value.config.tooltipField = _),
                      label: G(l)("wizard.configure.tooltipField.label"),
                      "aria-label": G(l)("wizard.configure.tooltipField.label"),
                      options: R()
                    }, null, 8, ["modelValue", "label", "aria-label", "options"])) : ue("", !0),
                    g.value?.configOptions.includes("latField") ? (k(), Ie(be, {
                      key: 3,
                      type: "select",
                      name: "latField",
                      modelValue: g.value.config.latField,
                      "onUpdate:modelValue": H[8] || (H[8] = (_) => g.value.config.latField = _),
                      defaultOption: !0,
                      label: G(l)("wizard.configure.latField.label"),
                      "aria-label": G(l)("wizard.configure.latField.label"),
                      options: J("lat")
                    }, null, 8, ["modelValue", "label", "aria-label", "options"])) : ue("", !0),
                    g.value?.configOptions.includes("longField") ? (k(), Ie(be, {
                      key: 4,
                      type: "select",
                      name: "longField",
                      modelValue: g.value.config.longField,
                      "onUpdate:modelValue": H[9] || (H[9] = (_) => g.value.config.longField = _),
                      defaultOption: !0,
                      label: G(l)("wizard.configure.longField.label"),
                      "aria-label": G(l)("wizard.configure.longField.label"),
                      options: J("lon")
                    }, null, 8, ["modelValue", "label", "aria-label", "options"])) : ue("", !0),
                    g.value?.configOptions.includes("sublayers") ? (k(), ee("div", Ga, [
                      pe(be, {
                        type: "checkbox",
                        name: "nested",
                        onNested: Me,
                        label: G(l)("wizard.configure.sublayers.nested"),
                        "aria-label": G(l)("wizard.configure.sublayers.nested")
                      }, null, 8, ["label", "aria-label"]),
                      (k(), Ie(be, {
                        type: "select",
                        key: v.value,
                        name: "sublayers",
                        modelValue: g.value.config.sublayers,
                        "onUpdate:modelValue": H[10] || (H[10] = (_) => g.value.config.sublayers = _),
                        onSelect: Te,
                        label: G(l)("wizard.configure.sublayers.label"),
                        "aria-label": G(l)("wizard.configure.sublayers.label"),
                        options: g.value.layers,
                        selectedValues: z.value,
                        sublayerOptions: Ye,
                        multiple: !0,
                        searchable: !0,
                        validation: !0,
                        "validation-messages": {
                          required: G(l)("wizard.configure.sublayers.error.required")
                        },
                        onKeydown: H[11] || (H[11] = vn(() => {
                        }, ["stop"]))
                      }, null, 8, ["modelValue", "label", "aria-label", "options", "selectedValues", "validation-messages"]))
                    ])) : ue("", !0),
                    W("label", {
                      class: "sr-only",
                      for: `${h.value}-color-hex`
                    }, ae(G(l)("wizard.configure.colour.hex")), 9, Ka),
                    g.value?.configOptions.includes("colour") ? (k(), ee("label", Xa, ae(G(l)("wizard.configure.colour.label")), 1)) : ue("", !0),
                    g.value?.configOptions.includes("colour") ? (k(), Ie(G(Sn), {
                      key: 7,
                      "alpha-channel": "hide",
                      "visible-formats": ["hex"],
                      "default-format": "hex",
                      id: h.value,
                      color: u.value,
                      onColorChange: we
                    }, {
                      "hue-range-input-label": ge(() => [
                        W("span", Qa, ae(G(l)("wizard.configure.colour.hue")), 1)
                      ]),
                      "copy-button": ge(() => [
                        W("span", Ya, ae(G(l)("wizard.configure.colour.copy")), 1),
                        H[14] || (H[14] = W("svg", {
                          "aria-hidden": "true",
                          xmlns: "http://www.w3.org/2000/svg",
                          width: "15",
                          height: "15",
                          viewBox: "0 0 15 15"
                        }, [
                          W("path", {
                            d: "M5 0v2H1v13h12v-3h-1v2H2V5h10v3h1V2H9V0zm1 1h2v2h3v1H3V3h3z",
                            fill: "currentColor"
                          }),
                          W("path", {
                            d: "M10 7v2h5v2h-5v2l-3-3zM3 6h5v1H3zm0 2h3v1H3zm0 2h3v1H3zm0 2h5v1H3z",
                            fill: "currentColor"
                          })
                        ], -1))
                      ]),
                      _: 1
                    }, 8, ["id", "color"])) : ue("", !0),
                    pe(Dt, {
                      onSubmit: P,
                      onCancel: Fe,
                      disabled: !O.value
                    }, null, 8, ["disabled"])
                  ], 544)
                ]),
                _: 1
              }, 8, ["title"])
            ]),
            _: 1
          }, 8, ["activeStep"]),
          A.value ? (k(), ee("div", {
            key: 0,
            class: Je(["p-3 border-solid border-2", M.value ? "bg-green-100 !border-green-900" : "bg-red-100 !border-red-900"])
          }, ae(D.value) + " " + ae(G(l)(`wizard.upload.${M.value ? "success" : "fail"}`)), 3)) : ue("", !0)
        ]),
        _: 1
      }, 8, ["panel"]);
    };
  }
}), qa = /* @__PURE__ */ ft(ka, [["__scopeId", "data-v-085c20bf"]]);
export {
  qa as default
};
//# sourceMappingURL=screen-C-y0D4B9.js.map
