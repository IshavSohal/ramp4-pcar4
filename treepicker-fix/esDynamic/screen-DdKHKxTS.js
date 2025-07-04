import { fC as U, bF as ae, ip as Xe, bI as Re, fH as it, bG as $t, bH as st, bN as q, bT as oe, im as Ye, bO as ke, fI as ve, bU as pr, bV as gr, bP as se, bC as qe, bD as zt, iq as En, bQ as K, i4 as lt, iP as Nn, bE as Bt, bK as mr, bR as Ee, bM as Te, bS as wt, fD as Ze, i3 as ur, it as Tn, mw as In, iJ as Cn, iB as le, mx as An, fK as cr, kN as Nt, my as He, bJ as Ln, bL as we, ii as dr, mq as Mn } from "./main-D-74LVlY.js";
import { r as Rn } from "./vue.esm-bundler-CHTdIT1C.js";
function We(d, o, u) {
  return Math.max(o, Math.min(d, u));
}
function ye(d, o = 2) {
  return d.toFixed(o).replace(/\.?0+$/, "");
}
function fr(d) {
  return d.endsWith(".") ? NaN : (parseFloat(d) % 360 + 360) % 360 / 360;
}
function vr(d) {
  return ye(360 * d);
}
function Qe(d) {
  if (!d.endsWith("%")) return NaN;
  const o = d.substring(0, d.length - 1);
  if (o.endsWith(".")) return NaN;
  const u = parseFloat(o);
  return Number.isNaN(u) ? NaN : We(u, 0, 100) / 100;
}
function rt(d) {
  return ye(100 * d) + "%";
}
function Tt(d) {
  if (d.endsWith("%")) return Qe(d);
  if (d.endsWith(".")) return NaN;
  const o = parseFloat(d);
  return Number.isNaN(o) ? NaN : We(o, 0, 255) / 255;
}
function It(d) {
  return ye(255 * d);
}
function Ct(d) {
  return d.endsWith("%") ? Qe(d) : We(parseFloat(d), 0, 1);
}
function At(d) {
  return String(d);
}
const Vt = { hsl: { h: { to: vr, from: fr }, s: { to: rt, from: Qe }, l: { to: rt, from: Qe }, a: { to: At, from: Ct } }, hwb: { h: { to: vr, from: fr }, w: { to: rt, from: Qe }, b: { to: rt, from: Qe }, a: { to: At, from: Ct } }, rgb: { r: { to: It, from: Tt }, g: { to: It, from: Tt }, b: { to: It, from: Tt }, a: { to: At, from: Ct } } };
function nt(d) {
  const o = d.replace(/^#/, ""), u = [], e = o.length > 4 ? 2 : 1;
  for (let a = 0; a < o.length; a += e) {
    const n = o.slice(a, a + e);
    u.push(n.repeat(e % 2 + 1));
  }
  u.length === 3 && u.push("ff");
  const r = u.map((a) => parseInt(a, 16) / 255);
  return { r: r[0], g: r[1], b: r[2], a: r[3] };
}
function Lt(d) {
  const o = d.l < 0.5 ? d.l * (1 + d.s) : d.l + d.s - d.l * d.s, u = 2 * d.l - o;
  return { r: Mt(u, o, d.h + 1 / 3), g: Mt(u, o, d.h), b: Mt(u, o, d.h - 1 / 3), a: d.a };
}
function Mt(d, o, u) {
  return u < 0 ? u += 1 : u > 1 && (u -= 1), u < 1 / 6 ? d + 6 * (o - d) * u : u < 0.5 ? o : u < 2 / 3 ? d + (o - d) * (2 / 3 - u) * 6 : d;
}
function Je(d) {
  return { r: Rt(5, d), g: Rt(3, d), b: Rt(1, d), a: d.a };
}
function Rt(d, o) {
  const u = (d + 6 * o.h) % 6;
  return o.v - o.v * o.s * Math.max(0, Math.min(u, 4 - u, 1));
}
function Ge(d) {
  return { h: d.h, s: d.b === 1 ? 0 : 1 - d.w / (1 - d.b), v: 1 - d.b, a: d.a };
}
function Ke(d) {
  const o = Math.min(d.r, d.g, d.b), u = Math.max(d.r, d.g, d.b);
  let e;
  return e = u === o ? 0 : u === d.r ? (0 + (d.g - d.b) / (u - o)) / 6 : u === d.g ? (2 + (d.b - d.r) / (u - o)) / 6 : (4 + (d.r - d.g) / (u - o)) / 6, e < 0 && (e += 1), { h: e, w: o, b: 1 - u, a: d.a };
}
function jt(d) {
  const o = Ke(d), u = o.w, e = 1 - o.b, r = (e + u) / 2;
  let a;
  return a = e === 0 || u === 1 ? 0 : (e - r) / Math.min(r, 1 - r), { h: o.h, s: a, l: r, a: d.a };
}
function at(d) {
  return "#" + Object.values(d).map((o) => {
    const u = 255 * o, e = Math.round(u).toString(16);
    return e.length === 1 ? "0" + e : e;
  }).join("");
}
const jn = { hex: [["hsl", (d) => Le(d, [nt, jt])], ["hsv", (d) => Le(d, [nt, Ke, Ge])], ["hwb", (d) => Le(d, [nt, Ke])], ["rgb", nt]], hsl: [["hex", (d) => Le(d, [Lt, at])], ["hsv", function(d) {
  const o = d.l + d.s * Math.min(d.l, 1 - d.l), u = o === 0 ? 0 : 2 - 2 * d.l / o;
  return { h: d.h, s: u, v: o, a: d.a };
}], ["hwb", (d) => Le(d, [Lt, Ke])], ["rgb", Lt]], hsv: [["hex", (d) => Le(d, [Je, at])], ["hsl", function(d) {
  const o = d.v - d.v * d.s / 2, u = Math.min(o, 1 - o), e = u === 0 ? 0 : (d.v - o) / u;
  return { h: d.h, s: e, l: o, a: d.a };
}], ["hwb", function(d) {
  return { h: d.h, w: (1 - d.s) * d.v, b: 1 - d.v, a: d.a };
}], ["rgb", Je]], hwb: [["hex", (d) => Le(d, [Ge, Je, at])], ["hsl", (d) => Le(d, [Ge, Je, jt])], ["hsv", Ge], ["rgb", (d) => Le(d, [Ge, Je])]], rgb: [["hex", at], ["hsl", jt], ["hsv", (d) => Le(d, [Ke, Ge])], ["hwb", Ke]] };
function Le(d, o) {
  return o.reduce((u, e) => e(u), d);
}
function ot(d) {
  const o = {};
  for (const u in d) o[u] = d[u];
  return o;
}
const Dn = { hex: (d, o) => o && [5, 9].includes(d.length) ? d.substring(0, d.length - (d.length - 1) / 4) : d, hsl: (d, o) => `hsl(${ye(360 * d.h)} ${ye(100 * d.s)}% ${ye(100 * d.l)}%` + (o ? ")" : ` / ${ye(d.a)})`), hwb: (d, o) => `hwb(${ye(360 * d.h)} ${ye(100 * d.w)}% ${ye(100 * d.b)}%` + (o ? ")" : ` / ${ye(d.a)})`), rgb: (d, o) => `rgb(${ye(255 * d.r)} ${ye(255 * d.g)} ${ye(255 * d.b)}` + (o ? ")" : ` / ${ye(d.a)})`) };
function hr(d, o, u) {
  return Dn[o](d, u);
}
function yr(d) {
  return /^#(?:(?:[A-F0-9]{2}){3,4}|[A-F0-9]{3,4})$/i.test(d);
}
function Pn(d) {
  if (typeof d != "string")
    return { format: function(c) {
      return Object.prototype.hasOwnProperty.call(c, "r") ? "rgb" : Object.prototype.hasOwnProperty.call(c, "w") ? "hwb" : Object.prototype.hasOwnProperty.call(c, "v") ? "hsv" : "hsl";
    }(d), color: d };
  if (yr(d)) return { format: "hex", color: d };
  if (!d.includes("(")) {
    const l = document.createElement("canvas").getContext("2d");
    l.fillStyle = d;
    const c = l.fillStyle;
    return c === "#000000" && d !== "black" ? null : { format: "hex", color: c };
  }
  const [o, u] = d.split("("), e = o.substring(0, 3), r = u.replace(/[,/)]/g, " ").replace(/\s+/g, " ").trim().split(" ");
  r.length === 3 && r.push("1");
  const a = (e + "a").split(""), n = Object.fromEntries(a.map((l, c) => [l, Vt[e][l].from(r[c])]));
  return { format: e, color: n };
}
const Dt = ["hex", "hsl", "hwb", "rgb"], Fn = ["show", "hide"], wn = { class: "vacp-range-input-group" }, Vn = ["for"], $n = { class: "vacp-range-input-label-text vacp-range-input-label-text--hue" }, zn = ["id", "value"], Bn = ["for"], Hn = { class: "vacp-range-input-label-text vacp-range-input-label-text--alpha" }, Wn = ["id", "value"], Un = U("span", { class: "vacp-visually-hidden" }, "Copy color", -1), Gn = U("svg", { class: "vacp-icon", xmlns: "http://www.w3.org/2000/svg", "aria-hidden": "true", width: "24", height: "24", viewBox: "0 0 32 32" }, [U("path", { d: "M25.313 28v-18.688h-14.625v18.688h14.625zM25.313 6.688c1.438 0 2.688 1.188 2.688 2.625v18.688c0 1.438-1.25 2.688-2.688 2.688h-14.625c-1.438 0-2.688-1.25-2.688-2.688v-18.688c0-1.438 1.25-2.625 2.688-2.625h14.625zM21.313 1.313v2.688h-16v18.688h-2.625v-18.688c0-1.438 1.188-2.688 2.625-2.688h16z", fill: "currentColor" })], -1), Kn = { class: "vacp-color-inputs" }, Yn = { class: "vacp-color-input-group" }, Qn = ["for"], Xn = U("span", { class: "vacp-color-input-label-text" }, " Hex ", -1), Jn = ["id", "value"], Zn = ["id", "for", "onInput"], kn = { class: "vacp-color-input-label-text" }, qn = ["id", "value", "onInput"], _n = U("span", { class: "vacp-visually-hidden" }, "Switch format", -1), ea = U("svg", { class: "vacp-icon", "aria-hidden": "true", xmlns: "http://www.w3.org/2000/svg", width: "16", height: "15" }, [U("path", { d: "M8 15l5-5-1-1-4 2-4-2-1 1zm4-9l1-1-5-5-5 5 1 1 4-2z", fill: "currentColor" })], -1);
var br = { __name: "ColorPicker", props: { color: { type: [String, Object], default: "#ffffffff" }, id: { type: String, default: "color-picker" }, visibleFormats: { type: Array, default: () => Dt, validator: (d) => d.length > 0 && d.every((o) => Dt.includes(o)) }, defaultFormat: { type: String, default: "hsl", validator: (d) => Dt.includes(d) }, alphaChannel: { type: String, default: "show", validator: (d) => Fn.includes(d) } }, emits: ["color-change"], setup(d, { emit: o }) {
  const u = d, e = ae(null), r = ae(null), a = ae(null);
  let n = !1;
  const l = ae(u.visibleFormats.includes(u.defaultFormat) ? u.defaultFormat : u.visibleFormats[0]), c = Xe({ hex: "#ffffffff", hsl: { h: 0, s: 0, l: 1, a: 1 }, hsv: { h: 0, s: 0, v: 1, a: 1 }, hwb: { h: 0, w: 1, b: 0, a: 1 }, rgb: { r: 1, g: 1, b: 1, a: 1 } }), f = Re(function() {
    const y = Object.keys(c[l.value]);
    return l.value !== "hex" && u.alphaChannel === "hide" ? y.slice(0, 3) : y;
  }), p = Re(function() {
    return u.alphaChannel === "hide" && [5, 9].includes(c.hex.length) ? c.hex.substring(0, c.hex.length - (c.hex.length - 1) / 4) : c.hex;
  });
  function h() {
    const y = (u.visibleFormats.findIndex((x) => x === l.value) + 1) % u.visibleFormats.length;
    l.value = u.visibleFormats[y];
  }
  function g(y) {
    n = !0, S(y);
  }
  function m(y) {
    n = !0, T(y);
  }
  function b() {
    n = !1;
  }
  function S(y) {
    y.buttons === 1 && n !== !1 && r.value instanceof HTMLElement && C(r.value, y.clientX, y.clientY);
  }
  function T(y) {
    if (n === !1 || !(r.value instanceof HTMLElement)) return;
    y.preventDefault();
    const x = y.touches[0];
    C(r.value, x.clientX, x.clientY);
  }
  function C(y, x, O) {
    const A = function(D, W, G) {
      const X = D.getBoundingClientRect(), J = W - X.left, ee = G - X.top;
      return { x: X.width === 0 ? 0 : We(J / X.width, 0, 1), y: X.height === 0 ? 0 : We(1 - ee / X.height, 0, 1) };
    }(y, x, O), H = ot(c.hsv);
    H.s = A.x, H.v = A.y, M("hsv", H);
  }
  function E(y) {
    if (!["ArrowUp", "ArrowRight", "ArrowDown", "ArrowLeft"].includes(y.key)) return;
    y.preventDefault();
    const x = ["ArrowLeft", "ArrowDown"].includes(y.key) ? -1 : 1, O = ["ArrowLeft", "ArrowRight"].includes(y.key) ? "s" : "v", A = y.shiftKey ? 10 : 1, H = c.hsv[O] + x * A * 0.01, D = ot(c.hsv);
    D[O] = We(H, 0, 1), M("hsv", D);
  }
  function j(y) {
    const x = Pn(y);
    x !== null && M(x.format, x.color);
  }
  function F(y, x) {
    const O = y.currentTarget, A = ot(c.hsv);
    A[x] = parseInt(O.value) / parseInt(O.max), M("hsv", A);
  }
  function R(y) {
    const x = y.target;
    yr(x.value) && M("hex", x.value);
  }
  function I(y, x) {
    const O = y.target, A = ot(c[l.value]), H = Vt[l.value][x].from(O.value);
    Number.isNaN(H) || H === void 0 || (A[x] = H, M(l.value, A));
  }
  function M(y, x) {
    let O = x;
    if (u.alphaChannel === "hide") if (typeof x != "string") x.a = 1, O = x;
    else if ([5, 9].includes(x.length)) {
      const A = (x.length - 1) / 4;
      O = x.substring(0, x.length - A) + "f".repeat(A);
    } else [4, 7].includes(x.length) && (O = x + "f".repeat((x.length - 1) / 3));
    if (!function(A, H) {
      if (typeof A == "string" || typeof H == "string") return A === H;
      for (const D in A) if (A[D] !== H[D]) return !1;
      return !0;
    }(c[y], O)) {
      (function(H, D) {
        c[H] = D;
        for (const [W, G] of jn[H]) c[W] = G(c[H]);
      })(y, O);
      const A = function() {
        const H = u.alphaChannel === "hide", D = hr(c[l.value], l.value, H);
        return { colors: c, cssColor: D };
      }();
      o("color-change", A);
    }
    (function() {
      e.value instanceof HTMLElement && r.value instanceof HTMLElement && a.value instanceof HTMLElement && (e.value.style.setProperty("--vacp-hsl-h", String(c.hsl.h)), e.value.style.setProperty("--vacp-hsl-s", String(c.hsl.s)), e.value.style.setProperty("--vacp-hsl-l", String(c.hsl.l)), e.value.style.setProperty("--vacp-hsl-a", String(c.hsl.a)), r.value.style.position = "relative", r.value.style.backgroundColor = "hsl(calc(var(--vacp-hsl-h) * 360) 100% 50%)", r.value.style.backgroundImage = "linear-gradient(to top, #000, transparent), linear-gradient(to right, #fff, transparent)", a.value.style.boxSizing = "border-box", a.value.style.position = "absolute", a.value.style.left = 100 * c.hsv.s + "%", a.value.style.bottom = 100 * c.hsv.v + "%");
    })();
  }
  async function P() {
    const y = c[l.value], x = u.alphaChannel === "hide", O = hr(y, l.value, x);
    await window.navigator.clipboard.writeText(O);
  }
  function B(y, x) {
    return Vt[y][x].to(c[y][x]);
  }
  function V(y) {
    if (!["ArrowUp", "ArrowRight", "ArrowDown", "ArrowLeft"].includes(y.key) || !y.shiftKey) return;
    const x = y.currentTarget, O = parseFloat(x.step), A = ["ArrowLeft", "ArrowDown"].includes(y.key) ? -1 : 1, H = We(parseFloat(x.value) + A * O * 10, parseInt(x.min), parseInt(x.max));
    x.value = String(H - A * O);
  }
  return it(() => u.color, j), $t(function() {
    document.addEventListener("mousemove", S, { passive: !1 }), document.addEventListener("touchmove", T, { passive: !1 }), document.addEventListener("mouseup", b), document.addEventListener("touchend", b), j(u.color);
  }), st(function() {
    document.removeEventListener("mousemove", S), document.removeEventListener("touchmove", T), document.removeEventListener("mouseup", b), document.removeEventListener("touchend", b);
  }), (y, x) => (q(), oe("div", { ref_key: "colorPicker", ref: e, class: "vacp-color-picker" }, [U("div", { ref_key: "colorSpace", ref: r, class: "vacp-color-space", onMousedown: g, onTouchstart: m }, [U("div", { ref_key: "thumb", ref: a, class: "vacp-color-space-thumb", tabindex: "0", "aria-label": "Color space thumb", onKeydown: E }, null, 544)], 544), U("div", wn, [U("label", { class: "vacp-range-input-label vacp-range-input-label--hue", for: `${d.id}-hue-slider` }, [U("span", $n, [Ye(y.$slots, "hue-range-input-label", {}, () => [ke("Hue")])]), U("input", { id: `${d.id}-hue-slider`, class: "vacp-range-input vacp-range-input--hue", value: 360 * c.hsv.h, type: "range", min: "0", max: "360", step: "1", onKeydownPassive: V, onInput: x[0] || (x[0] = (O) => F(O, "h")) }, null, 40, zn)], 8, Vn), d.alphaChannel === "show" ? (q(), oe("label", { key: 0, class: "vacp-range-input-label vacp-range-input-label--alpha", for: `${d.id}-alpha-slider` }, [U("span", Hn, [Ye(y.$slots, "alpha-range-input-label", {}, () => [ke("Alpha")])]), U("input", { id: `${d.id}-alpha-slider`, class: "vacp-range-input vacp-range-input--alpha", value: 100 * c.hsv.a, type: "range", min: "0", max: "100", step: "1", onKeydownPassive: V, onInput: x[1] || (x[1] = (O) => F(O, "a")) }, null, 40, Wn)], 8, Bn)) : ve("v-if", !0)]), U("button", { class: "vacp-copy-button", type: "button", onClick: P }, [Ye(y.$slots, "copy-button", {}, () => [Un, Gn])]), U("div", Kn, [U("div", Yn, [l.value === "hex" ? (q(), oe("label", { key: 0, class: "vacp-color-input-label", for: `${d.id}-color-hex` }, [Xn, U("input", { id: `${d.id}-color-hex`, class: "vacp-color-input", type: "text", value: p.value, onInput: R }, null, 40, Jn)], 8, Qn)) : (q(!0), oe(pr, { key: 1 }, gr(f.value, (O) => (q(), oe("label", { id: `${d.id}-color-${l.value}-${O}-label`, key: `${d.id}-color-${l.value}-${O}-label`, class: "vacp-color-input-label", for: `${d.id}-color-${l.value}-${O}`, onInput: (A) => I(A, O) }, [U("span", kn, se(O.toUpperCase()), 1), U("input", { id: `${d.id}-color-${l.value}-${O}`, class: "vacp-color-input", type: "text", value: B(l.value, O), onInput: (A) => I(A, O) }, null, 40, qn)], 40, Zn))), 128))]), d.visibleFormats.length > 1 ? (q(), oe("button", { key: 0, class: "vacp-format-switch-button", type: "button", onClick: h }, [Ye(y.$slots, "format-switch-button", {}, () => [_n, ea])])) : ve("v-if", !0)])], 512));
} };
(function(d, o) {
  o === void 0 && (o = {});
  var u = o.insertAt;
  if (typeof document < "u") {
    var e = document.head || document.getElementsByTagName("head")[0], r = document.createElement("style");
    r.type = "text/css", u === "top" && e.firstChild ? e.insertBefore(r, e.firstChild) : e.appendChild(r), r.styleSheet ? r.styleSheet.cssText = d : r.appendChild(document.createTextNode(d));
  }
})(".vacp-color-picker{--vacp-color:hsl(calc(var(--vacp-hsl-h)*360) calc(var(--vacp-hsl-s)*100%) calc(var(--vacp-hsl-l)*100%)/var(--vacp-hsl-a));--vacp-focus-color:#19f;--vacp-focus-outline:2px solid var(--vacp-focus-color);--vacp-border-width:1px;--vacp-border-color:#000;--vacp-border:var(--vacp-border-width) solid var(--vacp-border-color);--vacp-color-space-width:300px;--vacp-spacing:6px;grid-gap:var(--vacp-spacing);background-color:#fff;display:grid;font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol;font-size:.8em;grid-template-columns:1fr min-content;max-width:var(--vacp-color-space-width);padding:var(--vacp-spacing)}.vacp-color-picker,.vacp-color-picker *,.vacp-color-picker :after,.vacp-color-picker :before{box-sizing:border-box}.vacp-color-picker button::-moz-focus-inner{border:none;padding:0}.vacp-color-picker :focus{outline:var(--vacp-focus-outline)}.vacp-color-space{grid-column:1/-1;height:calc(var(--vacp-color-space-width)*.6);overflow:hidden}.vacp-color-space-thumb{--vacp-thumb-size:calc(var(--vacp-spacing)*4);border:3px solid #fff;border-radius:50%;box-shadow:0 0 0 var(--vacp-border-width) var(--vacp-border-color);height:var(--vacp-thumb-size);margin-bottom:calc(var(--vacp-thumb-size)*-1/2);margin-left:calc(var(--vacp-thumb-size)*-1/2);transform:rotate(0);width:var(--vacp-thumb-size)}.vacp-color-space-thumb:focus{box-shadow:0 0 0 var(--vacp-border-width) var(--vacp-border-color),0 0 0 3px var(--vacp-focus-color);outline-color:transparent}.vacp-range-input-label{--vacp-slider-track-width:100%;--vacp-slider-track-height:calc(var(--vacp-spacing)*3);display:block}.vacp-range-input-group{display:flex;flex-direction:column;justify-content:center}.vacp-range-input-group>:not(:first-child){margin-top:var(--vacp-spacing)}.vacp-range-input,.vacp-range-input::-webkit-slider-thumb{-webkit-appearance:none}.vacp-range-input{background:none;border:none;display:block;height:var(--vacp-slider-track-height);margin-bottom:calc(var(--vacp-spacing)/2 + 1px);margin-left:0;margin-right:0;margin-top:calc(var(--vacp-spacing)/2 + 1px);padding:0;width:var(--vacp-slider-track-width)}.vacp-range-input:focus{outline:none}.vacp-range-input::-moz-focus-outer{border:none}.vacp-range-input--alpha{background-color:#fff;background-image:linear-gradient(45deg,#eee 25%,transparent 0,transparent 75%,#eee 0,#eee),linear-gradient(45deg,#eee 25%,transparent 0,transparent 75%,#eee 0,#eee);background-position:0 0,var(--vacp-spacing) var(--vacp-spacing);background-size:calc(var(--vacp-spacing)*2) calc(var(--vacp-spacing)*2)}.vacp-range-input::-moz-range-track{border:var(--vacp-border);box-sizing:content-box;height:var(--vacp-slider-track-height);width:var(--vacp-slider-track-width)}.vacp-range-input::-webkit-slider-runnable-track{border:var(--vacp-border);box-sizing:content-box;height:var(--vacp-slider-track-height);width:var(--vacp-slider-track-width)}.vacp-range-input::-ms-track{border:var(--vacp-border);box-sizing:content-box;height:var(--vacp-slider-track-height);width:var(--vacp-slider-track-width)}.vacp-range-input:focus::-moz-range-track{outline:var(--vacp-focus-outline)}.vacp-range-input:focus::-webkit-slider-runnable-track{outline:var(--vacp-focus-outline)}.vacp-range-input:focus::-ms-track{outline:var(--vacp-focus-outline)}.vacp-range-input--alpha::-moz-range-track{background-image:linear-gradient(to right,transparent,var(--vacp-color))}.vacp-range-input--alpha::-webkit-slider-runnable-track{background-image:linear-gradient(to right,transparent,var(--vacp-color))}.vacp-range-input--alpha::-ms-track{background-image:linear-gradient(to right,transparent,var(--vacp-color))}.vacp-range-input--hue::-moz-range-track{background-image:linear-gradient(90deg,red 0,#ff0 16.66667%,#0f0 33.33333%,#0ff 50%,#00f 66.66667%,#f0f 83.33333%,red 100%)}.vacp-range-input--hue::-webkit-slider-runnable-track{background-image:linear-gradient(90deg,red 0,#ff0 16.66667%,#0f0 33.33333%,#0ff 50%,#00f 66.66667%,#f0f 83.33333%,red 100%)}.vacp-range-input--hue::-ms-track{background-image:linear-gradient(90deg,red 0,#ff0 16.66667%,#0f0 33.33333%,#0ff 50%,#00f 66.66667%,#f0f 83.33333%,red 100%)}.vacp-range-input::-moz-range-thumb{background-color:transparent;border:3px solid #fff;border-radius:50%;box-shadow:0 0 0 var(--vacp-border-width) var(--vacp-border-color);box-sizing:content-box;height:var(--vacp-slider-track-height);isolation:isolate;width:var(--vacp-slider-track-height)}.vacp-range-input::-webkit-slider-thumb{background-color:transparent;border:3px solid #fff;border-radius:50%;box-shadow:0 0 0 var(--vacp-border-width) var(--vacp-border-color);box-sizing:content-box;height:var(--vacp-slider-track-height);isolation:isolate;margin-top:calc((var(--vacp-spacing)/2)*-1);width:var(--vacp-slider-track-height)}.vacp-range-input::-ms-thumb{background-color:transparent;border:3px solid #fff;border-radius:50%;box-shadow:0 0 0 var(--vacp-border-width) var(--vacp-border-color);box-sizing:content-box;height:var(--vacp-slider-track-height);isolation:isolate;margin-top:calc((var(--vacp-spacing)/2)*-1);width:var(--vacp-slider-track-height)}.vacp-copy-button{align-items:center;align-self:center;background-color:#fff;border:var(--vacp-border-width) solid transparent;border-radius:50%;display:flex;height:calc(var(--vacp-spacing)*6);justify-content:center;justify-self:center;overflow:hidden;position:relative;width:calc(var(--vacp-spacing)*6)}.vacp-copy-button:enabled:focus{border-color:var(--vacp-border-color);box-shadow:0 0 0 2px var(--vacp-focus-color);outline:none}.vacp-copy-button:enabled:hover{background-color:#0002}.vacp-color-inputs{align-items:center;display:flex;grid-column:1/-1}.vacp-color-inputs>:not(:first-child){margin-left:var(--vacp-spacing)}.vacp-color-input-group{column-gap:var(--vacp-spacing);display:grid;flex-grow:1;grid-auto-flow:column}.vacp-color-input-label{text-align:center}.vacp-color-input{border:var(--vacp-border);margin:0;margin-top:calc(var(--vacp-spacing)/2);text-align:center;width:100%}.vacp-color-input,.vacp-format-switch-button{background-color:#fff;color:inherit;font:inherit;padding:var(--vacp-spacing)}.vacp-format-switch-button{align-items:center;border:var(--vacp-border-width) solid transparent;border-radius:50%;display:flex;justify-content:center;margin:0}.vacp-format-switch-button:enabled:focus{border-color:var(--vacp-border-color)}.vacp-format-switch-button:enabled:hover{background-color:#0002}.vacp-visually-hidden{clip:rect(0 0 0 0);border:0;height:1px;margin:-1px;overflow:hidden;padding:0;position:absolute;white-space:nowrap;width:1px}"), br.__file = "src/ColorPicker.vue";
const ta = { class: "flex justify-end mb-20" }, ra = ["disabled", "animation"], na = { class: "button-text" }, aa = /* @__PURE__ */ qe({
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
    const { t: o } = zt(), u = d, e = ae();
    it(En(u, "disabled"), (a) => {
      !a && e.value.classList.contains("button--loading") && e.value.classList.remove("button--loading");
    });
    const r = () => {
      u.animation && e.value.classList.toggle("button--loading");
    };
    return (a, n) => (q(), oe("div", ta, [
      U("button", {
        class: "hover:bg-gray-200 text-gray-600 font-bold py-8 px-16 m-2",
        type: "button",
        onClick: n[0] || (n[0] = (l) => a.$emit("cancel"))
      }, se(K(o)("wizard.step.cancel")), 1),
      U("button", {
        class: "button bg-blue-700 hover:bg-blue-700 text-white font-bold py-8 px-16 m-2 disabled:bg-gray-200 disabled:cursor-default disabled:text-gray-400",
        ref_key: "submitButton",
        ref: e,
        type: "button",
        disabled: d.disabled,
        animation: d.animation,
        onClick: n[1] || (n[1] = (l) => {
          a.$emit("submit"), r();
        })
      }, [
        U("span", na, se(K(o)("wizard.step.continue")), 1)
      ], 8, ra)
    ]));
  }
}), Pt = /* @__PURE__ */ lt(aa, [["__scopeId", "data-v-5e77d8d6"]]);
var Sr = { exports: {} };
(function(d) {
  d.exports = /******/
  function(o) {
    var u = {};
    function e(r) {
      if (u[r])
        return u[r].exports;
      var a = u[r] = {
        /******/
        i: r,
        /******/
        l: !1,
        /******/
        exports: {}
        /******/
      };
      return o[r].call(a.exports, a, a.exports, e), a.l = !0, a.exports;
    }
    return e.m = o, e.c = u, e.d = function(r, a, n) {
      e.o(r, a) || Object.defineProperty(r, a, { enumerable: !0, get: n });
    }, e.r = function(r) {
      typeof Symbol < "u" && Symbol.toStringTag && Object.defineProperty(r, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(r, "__esModule", { value: !0 });
    }, e.t = function(r, a) {
      if (a & 1 && (r = e(r)), a & 8 || a & 4 && typeof r == "object" && r && r.__esModule) return r;
      var n = /* @__PURE__ */ Object.create(null);
      if (e.r(n), Object.defineProperty(n, "default", { enumerable: !0, value: r }), a & 2 && typeof r != "string") for (var l in r) e.d(n, l, function(c) {
        return r[c];
      }.bind(null, l));
      return n;
    }, e.n = function(r) {
      var a = r && r.__esModule ? (
        /******/
        function() {
          return r.default;
        }
      ) : (
        /******/
        function() {
          return r;
        }
      );
      return e.d(a, "a", a), a;
    }, e.o = function(r, a) {
      return Object.prototype.hasOwnProperty.call(r, a);
    }, e.p = "", e(e.s = "fb15");
  }({
    /***/
    "00b4": (
      /***/
      function(o, u, e) {
        e("ac1f");
        var r = e("23e7"), a = e("c65b"), n = e("1626"), l = e("825a"), c = e("577e"), f = function() {
          var h = !1, g = /[ac]/;
          return g.exec = function() {
            return h = !0, /./.exec.apply(this, arguments);
          }, g.test("abc") === !0 && h;
        }(), p = /./.test;
        r({ target: "RegExp", proto: !0, forced: !f }, {
          test: function(h) {
            var g = l(this), m = c(h), b = g.exec;
            if (!n(b)) return a(p, g, m);
            var S = a(b, g, m);
            return S === null ? !1 : (l(S), !0);
          }
        });
      }
    ),
    /***/
    "00ee": (
      /***/
      function(o, u, e) {
        var r = e("b622"), a = r("toStringTag"), n = {};
        n[a] = "z", o.exports = String(n) === "[object z]";
      }
    ),
    /***/
    "00fd": (
      /***/
      function(o, u, e) {
        var r = e("9e69"), a = Object.prototype, n = a.hasOwnProperty, l = a.toString, c = r ? r.toStringTag : void 0;
        function f(p) {
          var h = n.call(p, c), g = p[c];
          try {
            p[c] = void 0;
            var m = !0;
          } catch {
          }
          var b = l.call(p);
          return m && (h ? p[c] = g : delete p[c]), b;
        }
        o.exports = f;
      }
    ),
    /***/
    "0366": (
      /***/
      function(o, u, e) {
        var r = e("4625"), a = e("59ed"), n = e("40d5"), l = r(r.bind);
        o.exports = function(c, f) {
          return a(c), f === void 0 ? c : n ? l(c, f) : function() {
            return c.apply(f, arguments);
          };
        };
      }
    ),
    /***/
    "0481": (
      /***/
      function(o, u, e) {
        var r = e("23e7"), a = e("a2bf"), n = e("7b0b"), l = e("07fa"), c = e("5926"), f = e("65f0");
        r({ target: "Array", proto: !0 }, {
          flat: function() {
            var h = arguments.length ? arguments[0] : void 0, g = n(this), m = l(g), b = f(g, 0);
            return b.length = a(b, g, g, m, 0, h === void 0 ? 1 : c(h)), b;
          }
        });
      }
    ),
    /***/
    "04d1": (
      /***/
      function(o, u, e) {
        var r = e("342f"), a = r.match(/firefox\/(\d+)/i);
        o.exports = !!a && +a[1];
      }
    ),
    /***/
    "04f8": (
      /***/
      function(o, u, e) {
        var r = e("2d00"), a = e("d039"), n = e("da84"), l = n.String;
        o.exports = !!Object.getOwnPropertySymbols && !a(function() {
          var c = Symbol("symbol detection");
          return !l(c) || !(Object(c) instanceof Symbol) || // Chrome 38-40 symbols are not inherited from DOM collections prototypes to instances
          !Symbol.sham && r && r < 41;
        });
      }
    ),
    /***/
    "06cf": (
      /***/
      function(o, u, e) {
        var r = e("83ab"), a = e("c65b"), n = e("d1e7"), l = e("5c6c"), c = e("fc6a"), f = e("a04b"), p = e("1a2d"), h = e("0cfb"), g = Object.getOwnPropertyDescriptor;
        u.f = r ? g : function(b, S) {
          if (b = c(b), S = f(S), h) try {
            return g(b, S);
          } catch {
          }
          if (p(b, S)) return l(!a(n.f, b, S), b[S]);
        };
      }
    ),
    /***/
    "07fa": (
      /***/
      function(o, u, e) {
        var r = e("50c4");
        o.exports = function(a) {
          return r(a.length);
        };
      }
    ),
    /***/
    "083a": (
      /***/
      function(o, u, e) {
        var r = e("0d51"), a = TypeError;
        o.exports = function(n, l) {
          if (!delete n[l]) throw new a("Cannot delete property " + r(l) + " of " + r(n));
        };
      }
    ),
    /***/
    "0b42": (
      /***/
      function(o, u, e) {
        var r = e("e8b5"), a = e("68ee"), n = e("861d"), l = e("b622"), c = l("species"), f = Array;
        o.exports = function(p) {
          var h;
          return r(p) && (h = p.constructor, a(h) && (h === f || r(h.prototype)) ? h = void 0 : n(h) && (h = h[c], h === null && (h = void 0))), h === void 0 ? f : h;
        };
      }
    ),
    /***/
    "0cb2": (
      /***/
      function(o, u, e) {
        var r = e("e330"), a = e("7b0b"), n = Math.floor, l = r("".charAt), c = r("".replace), f = r("".slice), p = /\$([$&'`]|\d{1,2}|<[^>]*>)/g, h = /\$([$&'`]|\d{1,2})/g;
        o.exports = function(g, m, b, S, T, C) {
          var E = b + g.length, j = S.length, F = h;
          return T !== void 0 && (T = a(T), F = p), c(C, F, function(R, I) {
            var M;
            switch (l(I, 0)) {
              case "$":
                return "$";
              case "&":
                return g;
              case "`":
                return f(m, 0, b);
              case "'":
                return f(m, E);
              case "<":
                M = T[f(I, 1, -1)];
                break;
              default:
                var P = +I;
                if (P === 0) return R;
                if (P > j) {
                  var B = n(P / 10);
                  return B === 0 ? R : B <= j ? S[B - 1] === void 0 ? l(I, 1) : S[B - 1] + l(I, 1) : R;
                }
                M = S[P - 1];
            }
            return M === void 0 ? "" : M;
          });
        };
      }
    ),
    /***/
    "0cfb": (
      /***/
      function(o, u, e) {
        var r = e("83ab"), a = e("d039"), n = e("cc12");
        o.exports = !r && !a(function() {
          return Object.defineProperty(n("div"), "a", {
            get: function() {
              return 7;
            }
          }).a !== 7;
        });
      }
    ),
    /***/
    "0d51": (
      /***/
      function(o, u, e) {
        var r = String;
        o.exports = function(a) {
          try {
            return r(a);
          } catch {
            return "Object";
          }
        };
      }
    ),
    /***/
    "107c": (
      /***/
      function(o, u, e) {
        var r = e("d039"), a = e("da84"), n = a.RegExp;
        o.exports = r(function() {
          var l = n("(?<a>b)", "g");
          return l.exec("b").groups.a !== "b" || "b".replace(l, "$<a>c") !== "bc";
        });
      }
    ),
    /***/
    1310: (
      /***/
      function(o, u) {
        function e(r) {
          return r != null && typeof r == "object";
        }
        o.exports = e;
      }
    ),
    /***/
    "13d2": (
      /***/
      function(o, u, e) {
        var r = e("e330"), a = e("d039"), n = e("1626"), l = e("1a2d"), c = e("83ab"), f = e("5e77").CONFIGURABLE, p = e("8925"), h = e("69f3"), g = h.enforce, m = h.get, b = String, S = Object.defineProperty, T = r("".slice), C = r("".replace), E = r([].join), j = c && !a(function() {
          return S(function() {
          }, "length", { value: 8 }).length !== 8;
        }), F = String(String).split("String"), R = o.exports = function(I, M, P) {
          T(b(M), 0, 7) === "Symbol(" && (M = "[" + C(b(M), /^Symbol\(([^)]*)\).*$/, "$1") + "]"), P && P.getter && (M = "get " + M), P && P.setter && (M = "set " + M), (!l(I, "name") || f && I.name !== M) && (c ? S(I, "name", { value: M, configurable: !0 }) : I.name = M), j && P && l(P, "arity") && I.length !== P.arity && S(I, "length", { value: P.arity });
          try {
            P && l(P, "constructor") && P.constructor ? c && S(I, "prototype", { writable: !1 }) : I.prototype && (I.prototype = void 0);
          } catch {
          }
          var B = g(I);
          return l(B, "source") || (B.source = E(F, typeof M == "string" ? M : "")), I;
        };
        Function.prototype.toString = R(function() {
          return n(this) && m(this).source || p(this);
        }, "toString");
      }
    ),
    /***/
    "13d5": (
      /***/
      function(o, u, e) {
        var r = e("23e7"), a = e("d58f").left, n = e("a640"), l = e("2d00"), c = e("605d"), f = !c && l > 79 && l < 83, p = f || !n("reduce");
        r({ target: "Array", proto: !0, forced: p }, {
          reduce: function(g) {
            var m = arguments.length;
            return a(this, g, m, m > 1 ? arguments[1] : void 0);
          }
        });
      }
    ),
    /***/
    "14c3": (
      /***/
      function(o, u, e) {
        var r = e("c65b"), a = e("825a"), n = e("1626"), l = e("c6b6"), c = e("9263"), f = TypeError;
        o.exports = function(p, h) {
          var g = p.exec;
          if (n(g)) {
            var m = r(g, p, h);
            return m !== null && a(m), m;
          }
          if (l(p) === "RegExp") return r(c, p, h);
          throw new f("RegExp#exec called on incompatible receiver");
        };
      }
    ),
    /***/
    "14d9": (
      /***/
      function(o, u, e) {
        var r = e("23e7"), a = e("7b0b"), n = e("07fa"), l = e("3a34"), c = e("3511"), f = e("d039"), p = f(function() {
          return [].push.call({ length: 4294967296 }, 1) !== 4294967297;
        }), h = function() {
          try {
            Object.defineProperty([], "length", { writable: !1 }).push();
          } catch (m) {
            return m instanceof TypeError;
          }
        }, g = p || !h();
        r({ target: "Array", proto: !0, arity: 1, forced: g }, {
          // eslint-disable-next-line no-unused-vars -- required for `.length`
          push: function(b) {
            var S = a(this), T = n(S), C = arguments.length;
            c(T + C);
            for (var E = 0; E < C; E++)
              S[T] = arguments[E], T++;
            return l(S, T), T;
          }
        });
      }
    ),
    /***/
    "159b": (
      /***/
      function(o, u, e) {
        var r = e("da84"), a = e("fdbc"), n = e("785a"), l = e("17c2"), c = e("9112"), f = function(h) {
          if (h && h.forEach !== l) try {
            c(h, "forEach", l);
          } catch {
            h.forEach = l;
          }
        };
        for (var p in a)
          a[p] && f(r[p] && r[p].prototype);
        f(n);
      }
    ),
    /***/
    1626: (
      /***/
      function(o, u, e) {
        var r = typeof document == "object" && document.all;
        o.exports = typeof r > "u" && r !== void 0 ? function(a) {
          return typeof a == "function" || a === r;
        } : function(a) {
          return typeof a == "function";
        };
      }
    ),
    /***/
    1787: (
      /***/
      function(o, u, e) {
        var r = e("861d");
        o.exports = function(a) {
          return r(a) || a === null;
        };
      }
    ),
    /***/
    "17c2": (
      /***/
      function(o, u, e) {
        var r = e("b727").forEach, a = e("a640"), n = a("forEach");
        o.exports = n ? [].forEach : function(c) {
          return r(this, c, arguments.length > 1 ? arguments[1] : void 0);
        };
      }
    ),
    /***/
    "1a2d": (
      /***/
      function(o, u, e) {
        var r = e("e330"), a = e("7b0b"), n = r({}.hasOwnProperty);
        o.exports = Object.hasOwn || function(c, f) {
          return n(a(c), f);
        };
      }
    ),
    /***/
    "1a8c": (
      /***/
      function(o, u) {
        function e(r) {
          var a = typeof r;
          return r != null && (a == "object" || a == "function");
        }
        o.exports = e;
      }
    ),
    /***/
    "1be4": (
      /***/
      function(o, u, e) {
        var r = e("d066");
        o.exports = r("document", "documentElement");
      }
    ),
    /***/
    "1d80": (
      /***/
      function(o, u, e) {
        var r = e("7234"), a = TypeError;
        o.exports = function(n) {
          if (r(n)) throw new a("Can't call method on " + n);
          return n;
        };
      }
    ),
    /***/
    "1d92": (
      /***/
      function(o, u, e) {
        var r = e("e0ef");
        function a(n) {
          return r(2, n);
        }
        o.exports = a;
      }
    ),
    /***/
    "1dde": (
      /***/
      function(o, u, e) {
        var r = e("d039"), a = e("b622"), n = e("2d00"), l = a("species");
        o.exports = function(c) {
          return n >= 51 || !r(function() {
            var f = [], p = f.constructor = {};
            return p[l] = function() {
              return { foo: 1 };
            }, f[c](Boolean).foo !== 1;
          });
        };
      }
    ),
    /***/
    "23cb": (
      /***/
      function(o, u, e) {
        var r = e("5926"), a = Math.max, n = Math.min;
        o.exports = function(l, c) {
          var f = r(l);
          return f < 0 ? a(f + c, 0) : n(f, c);
        };
      }
    ),
    /***/
    "23e7": (
      /***/
      function(o, u, e) {
        var r = e("da84"), a = e("06cf").f, n = e("9112"), l = e("cb2d"), c = e("6374"), f = e("e893"), p = e("94ca");
        o.exports = function(h, g) {
          var m = h.target, b = h.global, S = h.stat, T, C, E, j, F, R;
          if (b ? C = r : S ? C = r[m] || c(m, {}) : C = r[m] && r[m].prototype, C) for (E in g) {
            if (F = g[E], h.dontCallGetSet ? (R = a(C, E), j = R && R.value) : j = C[E], T = p(b ? E : m + (S ? "." : "#") + E, h.forced), !T && j !== void 0) {
              if (typeof F == typeof j) continue;
              f(F, j);
            }
            (h.sham || j && j.sham) && n(F, "sham", !0), l(C, E, F, h);
          }
        };
      }
    ),
    /***/
    "241c": (
      /***/
      function(o, u, e) {
        var r = e("ca84"), a = e("7839"), n = a.concat("length", "prototype");
        u.f = Object.getOwnPropertyNames || function(c) {
          return r(c, n);
        };
      }
    ),
    /***/
    "25f0": (
      /***/
      function(o, u, e) {
        var r = e("5e77").PROPER, a = e("cb2d"), n = e("825a"), l = e("577e"), c = e("d039"), f = e("90d8"), p = "toString", h = RegExp.prototype, g = h[p], m = c(function() {
          return g.call({ source: "a", flags: "b" }) !== "/a/b";
        }), b = r && g.name !== p;
        (m || b) && a(h, p, function() {
          var T = n(this), C = l(T.source), E = l(f(T));
          return "/" + C + "/" + E;
        }, { unsafe: !0 });
      }
    ),
    /***/
    2655: (
      /***/
      function(o, u) {
        o.exports = e, o.exports.default = e;
        function e(r) {
          return !!r && (typeof r == "object" || typeof r == "function") && typeof r.then == "function";
        }
      }
    ),
    /***/
    "29f3": (
      /***/
      function(o, u) {
        var e = Object.prototype, r = e.toString;
        function a(n) {
          return r.call(n);
        }
        o.exports = a;
      }
    ),
    /***/
    "2b3e": (
      /***/
      function(o, u, e) {
        var r = e("585a"), a = typeof self == "object" && self && self.Object === Object && self, n = r || a || Function("return this")();
        o.exports = n;
      }
    ),
    /***/
    "2ba4": (
      /***/
      function(o, u, e) {
        var r = e("40d5"), a = Function.prototype, n = a.apply, l = a.call;
        o.exports = typeof Reflect == "object" && Reflect.apply || (r ? l.bind(n) : function() {
          return l.apply(n, arguments);
        });
      }
    ),
    /***/
    "2d00": (
      /***/
      function(o, u, e) {
        var r = e("da84"), a = e("342f"), n = r.process, l = r.Deno, c = n && n.versions || l && l.version, f = c && c.v8, p, h;
        f && (p = f.split("."), h = p[0] > 0 && p[0] < 4 ? 1 : +(p[0] + p[1])), !h && a && (p = a.match(/Edge\/(\d+)/), (!p || p[1] >= 74) && (p = a.match(/Chrome\/(\d+)/), p && (h = +p[1]))), o.exports = h;
      }
    ),
    /***/
    "2e39": (
      /***/
      function(o, u, e) {
        function r(a, n) {
          var l = n.length, c = a.length;
          if (c > l)
            return !1;
          if (c === l)
            return a === n;
          e: for (var f = 0, p = 0; f < c; f++) {
            for (var h = a.charCodeAt(f); p < l; )
              if (n.charCodeAt(p++) === h)
                continue e;
            return !1;
          }
          return !0;
        }
        o.exports = r;
      }
    ),
    /***/
    3410: (
      /***/
      function(o, u, e) {
        var r = e("23e7"), a = e("d039"), n = e("7b0b"), l = e("e163"), c = e("e177"), f = a(function() {
          l(1);
        });
        r({ target: "Object", stat: !0, forced: f, sham: !c }, {
          getPrototypeOf: function(h) {
            return l(n(h));
          }
        });
      }
    ),
    /***/
    "342f": (
      /***/
      function(o, u, e) {
        o.exports = typeof navigator < "u" && String(navigator.userAgent) || "";
      }
    ),
    /***/
    3511: (
      /***/
      function(o, u, e) {
        var r = TypeError, a = 9007199254740991;
        o.exports = function(n) {
          if (n > a) throw r("Maximum allowed index exceeded");
          return n;
        };
      }
    ),
    /***/
    3729: (
      /***/
      function(o, u, e) {
        var r = e("9e69"), a = e("00fd"), n = e("29f3"), l = "[object Null]", c = "[object Undefined]", f = r ? r.toStringTag : void 0;
        function p(h) {
          return h == null ? h === void 0 ? c : l : f && f in Object(h) ? a(h) : n(h);
        }
        o.exports = p;
      }
    ),
    /***/
    "37e8": (
      /***/
      function(o, u, e) {
        var r = e("83ab"), a = e("aed9"), n = e("9bf2"), l = e("825a"), c = e("fc6a"), f = e("df75");
        u.f = r && !a ? Object.defineProperties : function(h, g) {
          l(h);
          for (var m = c(g), b = f(g), S = b.length, T = 0, C; S > T; ) n.f(h, C = b[T++], m[C]);
          return h;
        };
      }
    ),
    /***/
    "3a34": (
      /***/
      function(o, u, e) {
        var r = e("83ab"), a = e("e8b5"), n = TypeError, l = Object.getOwnPropertyDescriptor, c = r && !function() {
          if (this !== void 0) return !0;
          try {
            Object.defineProperty([], "length", { writable: !1 }).length = 1;
          } catch (f) {
            return f instanceof TypeError;
          }
        }();
        o.exports = c ? function(f, p) {
          if (a(f) && !l(f, "length").writable)
            throw new n("Cannot set read only .length");
          return f.length = p;
        } : function(f, p) {
          return f.length = p;
        };
      }
    ),
    /***/
    "3a9b": (
      /***/
      function(o, u, e) {
        var r = e("e330");
        o.exports = r({}.isPrototypeOf);
      }
    ),
    /***/
    "3bbe": (
      /***/
      function(o, u, e) {
        var r = e("1787"), a = String, n = TypeError;
        o.exports = function(l) {
          if (r(l)) return l;
          throw new n("Can't set " + a(l) + " as a prototype");
        };
      }
    ),
    /***/
    4069: (
      /***/
      function(o, u, e) {
        var r = e("44d2");
        r("flat");
      }
    ),
    /***/
    "408a": (
      /***/
      function(o, u, e) {
        var r = e("e330");
        o.exports = r(1 .valueOf);
      }
    ),
    /***/
    "408c": (
      /***/
      function(o, u, e) {
        var r = e("2b3e"), a = function() {
          return r.Date.now();
        };
        o.exports = a;
      }
    ),
    /***/
    "40d5": (
      /***/
      function(o, u, e) {
        var r = e("d039");
        o.exports = !r(function() {
          var a = function() {
          }.bind();
          return typeof a != "function" || a.hasOwnProperty("prototype");
        });
      }
    ),
    /***/
    4160: (
      /***/
      function(o, u, e) {
        var r = e("23e7"), a = e("17c2");
        r({ target: "Array", proto: !0, forced: [].forEach !== a }, {
          forEach: a
        });
      }
    ),
    /***/
    "428f": (
      /***/
      function(o, u, e) {
        var r = e("da84");
        o.exports = r;
      }
    ),
    /***/
    4416: (
      /***/
      function(o, u) {
        function e(r) {
          var a = r == null ? 0 : r.length;
          return a ? r[a - 1] : void 0;
        }
        o.exports = e;
      }
    ),
    /***/
    "44ad": (
      /***/
      function(o, u, e) {
        var r = e("e330"), a = e("d039"), n = e("c6b6"), l = Object, c = r("".split);
        o.exports = a(function() {
          return !l("z").propertyIsEnumerable(0);
        }) ? function(f) {
          return n(f) === "String" ? c(f, "") : l(f);
        } : l;
      }
    ),
    /***/
    "44d2": (
      /***/
      function(o, u, e) {
        var r = e("b622"), a = e("7c73"), n = e("9bf2").f, l = r("unscopables"), c = Array.prototype;
        c[l] === void 0 && n(c, l, {
          configurable: !0,
          value: a(null)
        }), o.exports = function(f) {
          c[l][f] = !0;
        };
      }
    ),
    /***/
    "45fc": (
      /***/
      function(o, u, e) {
        var r = e("23e7"), a = e("b727").some, n = e("a640"), l = n("some");
        r({ target: "Array", proto: !0, forced: !l }, {
          some: function(f) {
            return a(this, f, arguments.length > 1 ? arguments[1] : void 0);
          }
        });
      }
    ),
    /***/
    4625: (
      /***/
      function(o, u, e) {
        var r = e("c6b6"), a = e("e330");
        o.exports = function(n) {
          if (r(n) === "Function") return a(n);
        };
      }
    ),
    /***/
    "485a": (
      /***/
      function(o, u, e) {
        var r = e("c65b"), a = e("1626"), n = e("861d"), l = TypeError;
        o.exports = function(c, f) {
          var p, h;
          if (f === "string" && a(p = c.toString) && !n(h = r(p, c)) || a(p = c.valueOf) && !n(h = r(p, c)) || f !== "string" && a(p = c.toString) && !n(h = r(p, c))) return h;
          throw new l("Can't convert object to primitive value");
        };
      }
    ),
    /***/
    "498a": (
      /***/
      function(o, u, e) {
        var r = e("23e7"), a = e("58a8").trim, n = e("c8d2");
        r({ target: "String", proto: !0, forced: n("trim") }, {
          trim: function() {
            return a(this);
          }
        });
      }
    ),
    /***/
    "4b17": (
      /***/
      function(o, u, e) {
        var r = e("6428");
        function a(n) {
          var l = r(n), c = l % 1;
          return l === l ? c ? l - c : l : 0;
        }
        o.exports = a;
      }
    ),
    /***/
    "4cef": (
      /***/
      function(o, u) {
        var e = /\s/;
        function r(a) {
          for (var n = a.length; n-- && e.test(a.charAt(n)); )
            ;
          return n;
        }
        o.exports = r;
      }
    ),
    /***/
    "4d64": (
      /***/
      function(o, u, e) {
        var r = e("fc6a"), a = e("23cb"), n = e("07fa"), l = function(c) {
          return function(f, p, h) {
            var g = r(f), m = n(g);
            if (m === 0) return !c && -1;
            var b = a(h, m), S;
            if (c && p !== p) {
              for (; m > b; )
                if (S = g[b++], S !== S) return !0;
            } else for (; m > b; b++)
              if ((c || b in g) && g[b] === p) return c || b || 0;
            return !c && -1;
          };
        };
        o.exports = {
          // `Array.prototype.includes` method
          // https://tc39.es/ecma262/#sec-array.prototype.includes
          includes: l(!0),
          // `Array.prototype.indexOf` method
          // https://tc39.es/ecma262/#sec-array.prototype.indexof
          indexOf: l(!1)
        };
      }
    ),
    /***/
    "4de4": (
      /***/
      function(o, u, e) {
        var r = e("23e7"), a = e("b727").filter, n = e("1dde"), l = n("filter");
        r({ target: "Array", proto: !0, forced: !l }, {
          filter: function(f) {
            return a(this, f, arguments.length > 1 ? arguments[1] : void 0);
          }
        });
      }
    ),
    /***/
    "4e82": (
      /***/
      function(o, u, e) {
        var r = e("23e7"), a = e("e330"), n = e("59ed"), l = e("7b0b"), c = e("07fa"), f = e("083a"), p = e("577e"), h = e("d039"), g = e("addb"), m = e("a640"), b = e("04d1"), S = e("d998"), T = e("2d00"), C = e("512c"), E = [], j = a(E.sort), F = a(E.push), R = h(function() {
          E.sort(void 0);
        }), I = h(function() {
          E.sort(null);
        }), M = m("sort"), P = !h(function() {
          if (T) return T < 70;
          if (!(b && b > 3)) {
            if (S) return !0;
            if (C) return C < 603;
            var y = "", x, O, A, H;
            for (x = 65; x < 76; x++) {
              switch (O = String.fromCharCode(x), x) {
                case 66:
                case 69:
                case 70:
                case 72:
                  A = 3;
                  break;
                case 68:
                case 71:
                  A = 4;
                  break;
                default:
                  A = 2;
              }
              for (H = 0; H < 47; H++)
                E.push({ k: O + H, v: A });
            }
            for (E.sort(function(D, W) {
              return W.v - D.v;
            }), H = 0; H < E.length; H++)
              O = E[H].k.charAt(0), y.charAt(y.length - 1) !== O && (y += O);
            return y !== "DGBEFHACIJK";
          }
        }), B = R || !I || !M || !P, V = function(y) {
          return function(x, O) {
            return O === void 0 ? -1 : x === void 0 ? 1 : y !== void 0 ? +y(x, O) || 0 : p(x) > p(O) ? 1 : -1;
          };
        };
        r({ target: "Array", proto: !0, forced: B }, {
          sort: function(x) {
            x !== void 0 && n(x);
            var O = l(this);
            if (P) return x === void 0 ? j(O) : j(O, x);
            var A = [], H = c(O), D, W;
            for (W = 0; W < H; W++)
              W in O && F(A, O[W]);
            for (g(A, V(x)), D = c(A), W = 0; W < D; ) O[W] = A[W++];
            for (; W < H; ) f(O, W++);
            return O;
          }
        });
      }
    ),
    /***/
    "50c4": (
      /***/
      function(o, u, e) {
        var r = e("5926"), a = Math.min;
        o.exports = function(n) {
          var l = r(n);
          return l > 0 ? a(l, 9007199254740991) : 0;
        };
      }
    ),
    /***/
    "512c": (
      /***/
      function(o, u, e) {
        var r = e("342f"), a = r.match(/AppleWebKit\/(\d+)\./);
        o.exports = !!a && +a[1];
      }
    ),
    /***/
    5319: (
      /***/
      function(o, u, e) {
        var r = e("2ba4"), a = e("c65b"), n = e("e330"), l = e("d784"), c = e("d039"), f = e("825a"), p = e("1626"), h = e("7234"), g = e("5926"), m = e("50c4"), b = e("577e"), S = e("1d80"), T = e("8aa5"), C = e("dc4a"), E = e("0cb2"), j = e("14c3"), F = e("b622"), R = F("replace"), I = Math.max, M = Math.min, P = n([].concat), B = n([].push), V = n("".indexOf), y = n("".slice), x = function(D) {
          return D === void 0 ? D : String(D);
        }, O = function() {
          return "a".replace(/./, "$0") === "$0";
        }(), A = function() {
          return /./[R] ? /./[R]("a", "$0") === "" : !1;
        }(), H = !c(function() {
          var D = /./;
          return D.exec = function() {
            var W = [];
            return W.groups = { a: "7" }, W;
          }, "".replace(D, "$<a>") !== "7";
        });
        l("replace", function(D, W, G) {
          var X = A ? "$" : "$0";
          return [
            // `String.prototype.replace` method
            // https://tc39.es/ecma262/#sec-string.prototype.replace
            function(ee, ne) {
              var ie = S(this), ce = h(ee) ? void 0 : C(ee, R);
              return ce ? a(ce, ee, ie, ne) : a(W, b(ie), ee, ne);
            },
            // `RegExp.prototype[@@replace]` method
            // https://tc39.es/ecma262/#sec-regexp.prototype-@@replace
            function(J, ee) {
              var ne = f(this), ie = b(J);
              if (typeof ee == "string" && V(ee, X) === -1 && V(ee, "$<") === -1) {
                var ce = G(W, ne, ie, ee);
                if (ce.done) return ce.value;
              }
              var fe = p(ee);
              fe || (ee = b(ee));
              var Se = ne.global, he;
              Se && (he = ne.unicode, ne.lastIndex = 0);
              for (var Ne = [], ge; ge = j(ne, ie), !(ge === null || (B(Ne, ge), !Se)); ) {
                var Ve = b(ge[0]);
                Ve === "" && (ne.lastIndex = T(ie, m(ne.lastIndex), he));
              }
              for (var Oe = "", Ie = 0, De = 0; De < Ne.length; De++) {
                ge = Ne[De];
                for (var Pe = b(ge[0]), z = I(M(g(ge.index), ie.length), 0), $ = [], Q, k = 1; k < ge.length; k++) B($, x(ge[k]));
                var ue = ge.groups;
                if (fe) {
                  var Y = P([Pe], $, z, ie);
                  ue !== void 0 && B(Y, ue), Q = b(r(ee, void 0, Y));
                } else
                  Q = E(Pe, ie, z, $, ue, ee);
                z >= Ie && (Oe += y(ie, Ie, z) + Q, Ie = z + Pe.length);
              }
              return Oe + y(ie, Ie);
            }
          ];
        }, !H || !O || A);
      }
    ),
    /***/
    5692: (
      /***/
      function(o, u, e) {
        var r = e("c6cd");
        o.exports = function(a, n) {
          return r[a] || (r[a] = n || {});
        };
      }
    ),
    /***/
    "56ef": (
      /***/
      function(o, u, e) {
        var r = e("d066"), a = e("e330"), n = e("241c"), l = e("7418"), c = e("825a"), f = a([].concat);
        o.exports = r("Reflect", "ownKeys") || function(h) {
          var g = n.f(c(h)), m = l.f;
          return m ? f(g, m(h)) : g;
        };
      }
    ),
    /***/
    "577e": (
      /***/
      function(o, u, e) {
        var r = e("f5df"), a = String;
        o.exports = function(n) {
          if (r(n) === "Symbol") throw new TypeError("Cannot convert a Symbol value to a string");
          return a(n);
        };
      }
    ),
    /***/
    "585a": (
      /***/
      function(o, u, e) {
        (function(r) {
          var a = typeof r == "object" && r && r.Object === Object && r;
          o.exports = a;
        }).call(this, e("c8ba"));
      }
    ),
    /***/
    5899: (
      /***/
      function(o, u, e) {
        o.exports = `	
\v\f\r                　\u2028\u2029\uFEFF`;
      }
    ),
    /***/
    "58a8": (
      /***/
      function(o, u, e) {
        var r = e("e330"), a = e("1d80"), n = e("577e"), l = e("5899"), c = r("".replace), f = RegExp("^[" + l + "]+"), p = RegExp("(^|[^" + l + "])[" + l + "]+$"), h = function(g) {
          return function(m) {
            var b = n(a(m));
            return g & 1 && (b = c(b, f, "")), g & 2 && (b = c(b, p, "$1")), b;
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
    5926: (
      /***/
      function(o, u, e) {
        var r = e("b42e");
        o.exports = function(a) {
          var n = +a;
          return n !== n || n === 0 ? 0 : r(n);
        };
      }
    ),
    /***/
    "59ed": (
      /***/
      function(o, u, e) {
        var r = e("1626"), a = e("0d51"), n = TypeError;
        o.exports = function(l) {
          if (r(l)) return l;
          throw new n(a(l) + " is not a function");
        };
      }
    ),
    /***/
    "5c6c": (
      /***/
      function(o, u, e) {
        o.exports = function(r, a) {
          return {
            enumerable: !(r & 1),
            configurable: !(r & 2),
            writable: !(r & 4),
            value: a
          };
        };
      }
    ),
    /***/
    "5e77": (
      /***/
      function(o, u, e) {
        var r = e("83ab"), a = e("1a2d"), n = Function.prototype, l = r && Object.getOwnPropertyDescriptor, c = a(n, "name"), f = c && function() {
        }.name === "something", p = c && (!r || r && l(n, "name").configurable);
        o.exports = {
          EXISTS: c,
          PROPER: f,
          CONFIGURABLE: p
        };
      }
    ),
    /***/
    "605d": (
      /***/
      function(o, u, e) {
        var r = e("da84"), a = e("c6b6");
        o.exports = a(r.process) === "process";
      }
    ),
    /***/
    6374: (
      /***/
      function(o, u, e) {
        var r = e("da84"), a = Object.defineProperty;
        o.exports = function(n, l) {
          try {
            a(r, n, { value: l, configurable: !0, writable: !0 });
          } catch {
            r[n] = l;
          }
          return l;
        };
      }
    ),
    /***/
    6428: (
      /***/
      function(o, u, e) {
        var r = e("b4b0"), a = 1 / 0, n = 17976931348623157e292;
        function l(c) {
          if (!c)
            return c === 0 ? c : 0;
          if (c = r(c), c === a || c === -a) {
            var f = c < 0 ? -1 : 1;
            return f * n;
          }
          return c === c ? c : 0;
        }
        o.exports = l;
      }
    ),
    /***/
    6547: (
      /***/
      function(o, u, e) {
        var r = e("e330"), a = e("5926"), n = e("577e"), l = e("1d80"), c = r("".charAt), f = r("".charCodeAt), p = r("".slice), h = function(g) {
          return function(m, b) {
            var S = n(l(m)), T = a(b), C = S.length, E, j;
            return T < 0 || T >= C ? g ? "" : void 0 : (E = f(S, T), E < 55296 || E > 56319 || T + 1 === C || (j = f(S, T + 1)) < 56320 || j > 57343 ? g ? c(S, T) : E : g ? p(S, T, T + 2) : (E - 55296 << 10) + (j - 56320) + 65536);
          };
        };
        o.exports = {
          // `String.prototype.codePointAt` method
          // https://tc39.es/ecma262/#sec-string.prototype.codepointat
          codeAt: h(!1),
          // `String.prototype.at` method
          // https://github.com/mathiasbynens/String.prototype.at
          charAt: h(!0)
        };
      }
    ),
    /***/
    "65f0": (
      /***/
      function(o, u, e) {
        var r = e("0b42");
        o.exports = function(a, n) {
          return new (r(a))(n === 0 ? 0 : n);
        };
      }
    ),
    /***/
    "68ee": (
      /***/
      function(o, u, e) {
        var r = e("e330"), a = e("d039"), n = e("1626"), l = e("f5df"), c = e("d066"), f = e("8925"), p = function() {
        }, h = c("Reflect", "construct"), g = /^\s*(?:class|function)\b/, m = r(g.exec), b = !g.test(p), S = function(E) {
          if (!n(E)) return !1;
          try {
            return h(p, [], E), !0;
          } catch {
            return !1;
          }
        }, T = function(E) {
          if (!n(E)) return !1;
          switch (l(E)) {
            case "AsyncFunction":
            case "GeneratorFunction":
            case "AsyncGeneratorFunction":
              return !1;
          }
          try {
            return b || !!m(g, f(E));
          } catch {
            return !0;
          }
        };
        T.sham = !0, o.exports = !h || a(function() {
          var C;
          return S(S.call) || !S(Object) || !S(function() {
            C = !0;
          }) || C;
        }) ? T : S;
      }
    ),
    /***/
    "69f3": (
      /***/
      function(o, u, e) {
        var r = e("cdce"), a = e("da84"), n = e("861d"), l = e("9112"), c = e("1a2d"), f = e("c6cd"), p = e("f772"), h = e("d012"), g = "Object already initialized", m = a.TypeError, b = a.WeakMap, S, T, C, E = function(I) {
          return C(I) ? T(I) : S(I, {});
        }, j = function(I) {
          return function(M) {
            var P;
            if (!n(M) || (P = T(M)).type !== I)
              throw new m("Incompatible receiver, " + I + " required");
            return P;
          };
        };
        if (r || f.state) {
          var F = f.state || (f.state = new b());
          F.get = F.get, F.has = F.has, F.set = F.set, S = function(I, M) {
            if (F.has(I)) throw new m(g);
            return M.facade = I, F.set(I, M), M;
          }, T = function(I) {
            return F.get(I) || {};
          }, C = function(I) {
            return F.has(I);
          };
        } else {
          var R = p("state");
          h[R] = !0, S = function(I, M) {
            if (c(I, R)) throw new m(g);
            return M.facade = I, l(I, R, M), M;
          }, T = function(I) {
            return c(I, R) ? I[R] : {};
          }, C = function(I) {
            return c(I, R);
          };
        }
        o.exports = {
          set: S,
          get: T,
          has: C,
          enforce: E,
          getterFor: j
        };
      }
    ),
    /***/
    "6b0d": (
      /***/
      function(o, u, e) {
        Object.defineProperty(u, "__esModule", { value: !0 }), u.default = (r, a) => {
          const n = r.__vccOpts || r;
          for (const [l, c] of a)
            n[l] = c;
          return n;
        };
      }
    ),
    /***/
    7156: (
      /***/
      function(o, u, e) {
        var r = e("1626"), a = e("861d"), n = e("d2bb");
        o.exports = function(l, c, f) {
          var p, h;
          return (
            // it can work only with native `setPrototypeOf`
            n && // we haven't completely correct pre-ES6 way for getting `new.target`, so use this
            r(p = c.constructor) && p !== f && a(h = p.prototype) && h !== f.prototype && n(l, h), l
          );
        };
      }
    ),
    /***/
    7234: (
      /***/
      function(o, u, e) {
        o.exports = function(r) {
          return r == null;
        };
      }
    ),
    /***/
    7282: (
      /***/
      function(o, u, e) {
        var r = e("e330"), a = e("59ed");
        o.exports = function(n, l, c) {
          try {
            return r(a(Object.getOwnPropertyDescriptor(n, l)[c]));
          } catch {
          }
        };
      }
    ),
    /***/
    "72f0": (
      /***/
      function(o, u) {
        function e(r) {
          return function() {
            return r;
          };
        }
        o.exports = e;
      }
    ),
    /***/
    7418: (
      /***/
      function(o, u, e) {
        u.f = Object.getOwnPropertySymbols;
      }
    ),
    /***/
    7839: (
      /***/
      function(o, u, e) {
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
    "785a": (
      /***/
      function(o, u, e) {
        var r = e("cc12"), a = r("span").classList, n = a && a.constructor && a.constructor.prototype;
        o.exports = n === Object.prototype ? void 0 : n;
      }
    ),
    /***/
    "7b0b": (
      /***/
      function(o, u, e) {
        var r = e("1d80"), a = Object;
        o.exports = function(n) {
          return a(r(n));
        };
      }
    ),
    /***/
    "7c73": (
      /***/
      function(o, u, e) {
        var r = e("825a"), a = e("37e8"), n = e("7839"), l = e("d012"), c = e("1be4"), f = e("cc12"), p = e("f772"), h = ">", g = "<", m = "prototype", b = "script", S = p("IE_PROTO"), T = function() {
        }, C = function(I) {
          return g + b + h + I + g + "/" + b + h;
        }, E = function(I) {
          I.write(C("")), I.close();
          var M = I.parentWindow.Object;
          return I = null, M;
        }, j = function() {
          var I = f("iframe"), M = "java" + b + ":", P;
          return I.style.display = "none", c.appendChild(I), I.src = String(M), P = I.contentWindow.document, P.open(), P.write(C("document.F=Object")), P.close(), P.F;
        }, F, R = function() {
          try {
            F = new ActiveXObject("htmlfile");
          } catch {
          }
          R = typeof document < "u" ? document.domain && F ? E(F) : j() : E(F);
          for (var I = n.length; I--; ) delete R[m][n[I]];
          return R();
        };
        l[S] = !0, o.exports = Object.create || function(M, P) {
          var B;
          return M !== null ? (T[m] = r(M), B = new T(), T[m] = null, B[S] = M) : B = R(), P === void 0 ? B : a.f(B, P);
        };
      }
    ),
    /***/
    "825a": (
      /***/
      function(o, u, e) {
        var r = e("861d"), a = String, n = TypeError;
        o.exports = function(l) {
          if (r(l)) return l;
          throw new n(a(l) + " is not an object");
        };
      }
    ),
    /***/
    "83ab": (
      /***/
      function(o, u, e) {
        var r = e("d039");
        o.exports = !r(function() {
          return Object.defineProperty({}, 1, { get: function() {
            return 7;
          } })[1] !== 7;
        });
      }
    ),
    /***/
    8418: (
      /***/
      function(o, u, e) {
        var r = e("83ab"), a = e("9bf2"), n = e("5c6c");
        o.exports = function(l, c, f) {
          r ? a.f(l, c, n(0, f)) : l[c] = f;
        };
      }
    ),
    /***/
    "861d": (
      /***/
      function(o, u, e) {
        var r = e("1626");
        o.exports = function(a) {
          return typeof a == "object" ? a !== null : r(a);
        };
      }
    ),
    /***/
    8925: (
      /***/
      function(o, u, e) {
        var r = e("e330"), a = e("1626"), n = e("c6cd"), l = r(Function.toString);
        a(n.inspectSource) || (n.inspectSource = function(c) {
          return l(c);
        }), o.exports = n.inspectSource;
      }
    ),
    /***/
    "8aa5": (
      /***/
      function(o, u, e) {
        var r = e("6547").charAt;
        o.exports = function(a, n, l) {
          return n + (l ? r(a, n).length : 1);
        };
      }
    ),
    /***/
    "8bbf": (
      /***/
      function(o, u) {
        o.exports = Rn;
      }
    ),
    /***/
    "8d74": (
      /***/
      function(o, u, e) {
        var r = e("4cef"), a = /^\s+/;
        function n(l) {
          return l && l.slice(0, r(l) + 1).replace(a, "");
        }
        o.exports = n;
      }
    ),
    /***/
    "90d8": (
      /***/
      function(o, u, e) {
        var r = e("c65b"), a = e("1a2d"), n = e("3a9b"), l = e("ad6d"), c = RegExp.prototype;
        o.exports = function(f) {
          var p = f.flags;
          return p === void 0 && !("flags" in c) && !a(f, "flags") && n(c, f) ? r(l, f) : p;
        };
      }
    ),
    /***/
    "90e3": (
      /***/
      function(o, u, e) {
        var r = e("e330"), a = 0, n = Math.random(), l = r(1 .toString);
        o.exports = function(c) {
          return "Symbol(" + (c === void 0 ? "" : c) + ")_" + l(++a + n, 36);
        };
      }
    ),
    /***/
    9112: (
      /***/
      function(o, u, e) {
        var r = e("83ab"), a = e("9bf2"), n = e("5c6c");
        o.exports = r ? function(l, c, f) {
          return a.f(l, c, n(1, f));
        } : function(l, c, f) {
          return l[c] = f, l;
        };
      }
    ),
    /***/
    9263: (
      /***/
      function(o, u, e) {
        var r = e("c65b"), a = e("e330"), n = e("577e"), l = e("ad6d"), c = e("9f7f"), f = e("5692"), p = e("7c73"), h = e("69f3").get, g = e("fce3"), m = e("107c"), b = f("native-string-replace", String.prototype.replace), S = RegExp.prototype.exec, T = S, C = a("".charAt), E = a("".indexOf), j = a("".replace), F = a("".slice), R = function() {
          var B = /a/, V = /b*/g;
          return r(S, B, "a"), r(S, V, "a"), B.lastIndex !== 0 || V.lastIndex !== 0;
        }(), I = c.BROKEN_CARET, M = /()??/.exec("")[1] !== void 0, P = R || M || I || g || m;
        P && (T = function(V) {
          var y = this, x = h(y), O = n(V), A = x.raw, H, D, W, G, X, J, ee;
          if (A)
            return A.lastIndex = y.lastIndex, H = r(T, A, O), y.lastIndex = A.lastIndex, H;
          var ne = x.groups, ie = I && y.sticky, ce = r(l, y), fe = y.source, Se = 0, he = O;
          if (ie && (ce = j(ce, "y", ""), E(ce, "g") === -1 && (ce += "g"), he = F(O, y.lastIndex), y.lastIndex > 0 && (!y.multiline || y.multiline && C(O, y.lastIndex - 1) !== `
`) && (fe = "(?: " + fe + ")", he = " " + he, Se++), D = new RegExp("^(?:" + fe + ")", ce)), M && (D = new RegExp("^" + fe + "$(?!\\s)", ce)), R && (W = y.lastIndex), G = r(S, ie ? D : y, he), ie ? G ? (G.input = F(G.input, Se), G[0] = F(G[0], Se), G.index = y.lastIndex, y.lastIndex += G[0].length) : y.lastIndex = 0 : R && G && (y.lastIndex = y.global ? G.index + G[0].length : W), M && G && G.length > 1 && r(b, G[0], D, function() {
            for (X = 1; X < arguments.length - 2; X++)
              arguments[X] === void 0 && (G[X] = void 0);
          }), G && ne)
            for (G.groups = J = p(null), X = 0; X < ne.length; X++)
              ee = ne[X], J[ee[0]] = G[ee[1]];
          return G;
        }), o.exports = T;
      }
    ),
    /***/
    "94ca": (
      /***/
      function(o, u, e) {
        var r = e("d039"), a = e("1626"), n = /#|\.prototype\./, l = function(g, m) {
          var b = f[c(g)];
          return b === h ? !0 : b === p ? !1 : a(m) ? r(m) : !!m;
        }, c = l.normalize = function(g) {
          return String(g).replace(n, ".").toLowerCase();
        }, f = l.data = {}, p = l.NATIVE = "N", h = l.POLYFILL = "P";
        o.exports = l;
      }
    ),
    /***/
    "99af": (
      /***/
      function(o, u, e) {
        var r = e("23e7"), a = e("d039"), n = e("e8b5"), l = e("861d"), c = e("7b0b"), f = e("07fa"), p = e("3511"), h = e("8418"), g = e("65f0"), m = e("1dde"), b = e("b622"), S = e("2d00"), T = b("isConcatSpreadable"), C = S >= 51 || !a(function() {
          var F = [];
          return F[T] = !1, F.concat()[0] !== F;
        }), E = function(F) {
          if (!l(F)) return !1;
          var R = F[T];
          return R !== void 0 ? !!R : n(F);
        }, j = !C || !m("concat");
        r({ target: "Array", proto: !0, arity: 1, forced: j }, {
          // eslint-disable-next-line no-unused-vars -- required for `.length`
          concat: function(R) {
            var I = c(this), M = g(I, 0), P = 0, B, V, y, x, O;
            for (B = -1, y = arguments.length; B < y; B++)
              if (O = B === -1 ? I : arguments[B], E(O))
                for (x = f(O), p(P + x), V = 0; V < x; V++, P++) V in O && h(M, P, O[V]);
              else
                p(P + 1), h(M, P++, O);
            return M.length = P, M;
          }
        });
      }
    ),
    /***/
    "9bf2": (
      /***/
      function(o, u, e) {
        var r = e("83ab"), a = e("0cfb"), n = e("aed9"), l = e("825a"), c = e("a04b"), f = TypeError, p = Object.defineProperty, h = Object.getOwnPropertyDescriptor, g = "enumerable", m = "configurable", b = "writable";
        u.f = r ? n ? function(T, C, E) {
          if (l(T), C = c(C), l(E), typeof T == "function" && C === "prototype" && "value" in E && b in E && !E[b]) {
            var j = h(T, C);
            j && j[b] && (T[C] = E.value, E = {
              configurable: m in E ? E[m] : j[m],
              enumerable: g in E ? E[g] : j[g],
              writable: !1
            });
          }
          return p(T, C, E);
        } : p : function(T, C, E) {
          if (l(T), C = c(C), l(E), a) try {
            return p(T, C, E);
          } catch {
          }
          if ("get" in E || "set" in E) throw new f("Accessors not supported");
          return "value" in E && (T[C] = E.value), T;
        };
      }
    ),
    /***/
    "9e69": (
      /***/
      function(o, u, e) {
        var r = e("2b3e"), a = r.Symbol;
        o.exports = a;
      }
    ),
    /***/
    "9f7f": (
      /***/
      function(o, u, e) {
        var r = e("d039"), a = e("da84"), n = a.RegExp, l = r(function() {
          var p = n("a", "y");
          return p.lastIndex = 2, p.exec("abcd") !== null;
        }), c = l || r(function() {
          return !n("a", "y").sticky;
        }), f = l || r(function() {
          var p = n("^r", "gy");
          return p.lastIndex = 2, p.exec("str") !== null;
        });
        o.exports = {
          BROKEN_CARET: f,
          MISSED_STICKY: c,
          UNSUPPORTED_Y: l
        };
      }
    ),
    /***/
    a04b: (
      /***/
      function(o, u, e) {
        var r = e("c04e"), a = e("d9b5");
        o.exports = function(n) {
          var l = r(n, "string");
          return a(l) ? l : l + "";
        };
      }
    ),
    /***/
    a15b: (
      /***/
      function(o, u, e) {
        var r = e("23e7"), a = e("e330"), n = e("44ad"), l = e("fc6a"), c = e("a640"), f = a([].join), p = n !== Object, h = p || !c("join", ",");
        r({ target: "Array", proto: !0, forced: h }, {
          join: function(m) {
            return f(l(this), m === void 0 ? "," : m);
          }
        });
      }
    ),
    /***/
    a2bf: (
      /***/
      function(o, u, e) {
        var r = e("e8b5"), a = e("07fa"), n = e("3511"), l = e("0366"), c = function(f, p, h, g, m, b, S, T) {
          for (var C = m, E = 0, j = S ? l(S, T) : !1, F, R; E < g; )
            E in h && (F = j ? j(h[E], E, p) : h[E], b > 0 && r(F) ? (R = a(F), C = c(f, p, F, R, C, b - 1) - 1) : (n(C + 1), f[C] = F), C++), E++;
          return C;
        };
        o.exports = c;
      }
    ),
    /***/
    a434: (
      /***/
      function(o, u, e) {
        var r = e("23e7"), a = e("7b0b"), n = e("23cb"), l = e("5926"), c = e("07fa"), f = e("3a34"), p = e("3511"), h = e("65f0"), g = e("8418"), m = e("083a"), b = e("1dde"), S = b("splice"), T = Math.max, C = Math.min;
        r({ target: "Array", proto: !0, forced: !S }, {
          splice: function(j, F) {
            var R = a(this), I = c(R), M = n(j, I), P = arguments.length, B, V, y, x, O, A;
            for (P === 0 ? B = V = 0 : P === 1 ? (B = 0, V = I - M) : (B = P - 2, V = C(T(l(F), 0), I - M)), p(I + B - V), y = h(R, V), x = 0; x < V; x++)
              O = M + x, O in R && g(y, x, R[O]);
            if (y.length = V, B < V) {
              for (x = M; x < I - V; x++)
                O = x + V, A = x + B, O in R ? R[A] = R[O] : m(R, A);
              for (x = I; x > I - V + B; x--) m(R, x - 1);
            } else if (B > V)
              for (x = I - V; x > M; x--)
                O = x + V - 1, A = x + B - 1, O in R ? R[A] = R[O] : m(R, A);
            for (x = 0; x < B; x++)
              R[x + M] = arguments[x + 2];
            return f(R, I - V + B), y;
          }
        });
      }
    ),
    /***/
    a623: (
      /***/
      function(o, u, e) {
        var r = e("23e7"), a = e("b727").every, n = e("a640"), l = n("every");
        r({ target: "Array", proto: !0, forced: !l }, {
          every: function(f) {
            return a(this, f, arguments.length > 1 ? arguments[1] : void 0);
          }
        });
      }
    ),
    /***/
    a640: (
      /***/
      function(o, u, e) {
        var r = e("d039");
        o.exports = function(a, n) {
          var l = [][a];
          return !!l && r(function() {
            l.call(null, n || function() {
              return 1;
            }, 1);
          });
        };
      }
    ),
    /***/
    a9e3: (
      /***/
      function(o, u, e) {
        var r = e("23e7"), a = e("c430"), n = e("83ab"), l = e("da84"), c = e("428f"), f = e("e330"), p = e("94ca"), h = e("1a2d"), g = e("7156"), m = e("3a9b"), b = e("d9b5"), S = e("c04e"), T = e("d039"), C = e("241c").f, E = e("06cf").f, j = e("9bf2").f, F = e("408a"), R = e("58a8").trim, I = "Number", M = l[I], P = c[I], B = M.prototype, V = l.TypeError, y = f("".slice), x = f("".charCodeAt), O = function(X) {
          var J = S(X, "number");
          return typeof J == "bigint" ? J : A(J);
        }, A = function(X) {
          var J = S(X, "number"), ee, ne, ie, ce, fe, Se, he, Ne;
          if (b(J)) throw new V("Cannot convert a Symbol value to a number");
          if (typeof J == "string" && J.length > 2) {
            if (J = R(J), ee = x(J, 0), ee === 43 || ee === 45) {
              if (ne = x(J, 2), ne === 88 || ne === 120) return NaN;
            } else if (ee === 48) {
              switch (x(J, 1)) {
                case 66:
                case 98:
                  ie = 2, ce = 49;
                  break;
                case 79:
                case 111:
                  ie = 8, ce = 55;
                  break;
                default:
                  return +J;
              }
              for (fe = y(J, 2), Se = fe.length, he = 0; he < Se; he++)
                if (Ne = x(fe, he), Ne < 48 || Ne > ce) return NaN;
              return parseInt(fe, ie);
            }
          }
          return +J;
        }, H = p(I, !M(" 0o1") || !M("0b1") || M("+0x1")), D = function(X) {
          return m(B, X) && T(function() {
            F(X);
          });
        }, W = function(J) {
          var ee = arguments.length < 1 ? 0 : M(O(J));
          return D(this) ? g(Object(ee), this, W) : ee;
        };
        W.prototype = B, H && !a && (B.constructor = W), r({ global: !0, constructor: !0, wrap: !0, forced: H }, {
          Number: W
        });
        var G = function(X, J) {
          for (var ee = n ? C(J) : (
            // ES3:
            "MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,isFinite,isInteger,isNaN,isSafeInteger,parseFloat,parseInt,fromString,range".split(",")
          ), ne = 0, ie; ee.length > ne; ne++)
            h(J, ie = ee[ne]) && !h(X, ie) && j(X, ie, E(J, ie));
        };
        a && P && G(c[I], P), (H || a) && G(c[I], M);
      }
    ),
    /***/
    aa1f: (
      /***/
      function(o, u, e) {
        var r = e("83ab"), a = e("d039"), n = e("825a"), l = e("e391"), c = Error.prototype.toString, f = a(function() {
          if (r) {
            var p = Object.create(Object.defineProperty({}, "name", { get: function() {
              return this === p;
            } }));
            if (c.call(p) !== "true") return !0;
          }
          return c.call({ message: 1, name: 2 }) !== "2: 1" || c.call({}) !== "Error";
        });
        o.exports = f ? function() {
          var h = n(this), g = l(h.name, "Error"), m = l(h.message);
          return g ? m ? g + ": " + m : g : m;
        } : c;
      }
    ),
    /***/
    ac1f: (
      /***/
      function(o, u, e) {
        var r = e("23e7"), a = e("9263");
        r({ target: "RegExp", proto: !0, forced: /./.exec !== a }, {
          exec: a
        });
      }
    ),
    /***/
    ad6d: (
      /***/
      function(o, u, e) {
        var r = e("825a");
        o.exports = function() {
          var a = r(this), n = "";
          return a.hasIndices && (n += "d"), a.global && (n += "g"), a.ignoreCase && (n += "i"), a.multiline && (n += "m"), a.dotAll && (n += "s"), a.unicode && (n += "u"), a.unicodeSets && (n += "v"), a.sticky && (n += "y"), n;
        };
      }
    ),
    /***/
    addb: (
      /***/
      function(o, u, e) {
        var r = e("f36a"), a = Math.floor, n = function(l, c) {
          var f = l.length;
          if (f < 8)
            for (var p = 1, h, g; p < f; ) {
              for (g = p, h = l[p]; g && c(l[g - 1], h) > 0; )
                l[g] = l[--g];
              g !== p++ && (l[g] = h);
            }
          else
            for (var m = a(f / 2), b = n(r(l, 0, m), c), S = n(r(l, m), c), T = b.length, C = S.length, E = 0, j = 0; E < T || j < C; )
              l[E + j] = E < T && j < C ? c(b[E], S[j]) <= 0 ? b[E++] : S[j++] : E < T ? b[E++] : S[j++];
          return l;
        };
        o.exports = n;
      }
    ),
    /***/
    aed9: (
      /***/
      function(o, u, e) {
        var r = e("83ab"), a = e("d039");
        o.exports = r && a(function() {
          return Object.defineProperty(function() {
          }, "prototype", {
            value: 42,
            writable: !1
          }).prototype !== 42;
        });
      }
    ),
    /***/
    b041: (
      /***/
      function(o, u, e) {
        var r = e("00ee"), a = e("f5df");
        o.exports = r ? {}.toString : function() {
          return "[object " + a(this) + "]";
        };
      }
    ),
    /***/
    b047: (
      /***/
      function(o, u, e) {
        var r = e("1a8c"), a = e("408c"), n = e("b4b0"), l = "Expected a function", c = Math.max, f = Math.min;
        function p(h, g, m) {
          var b, S, T, C, E, j, F = 0, R = !1, I = !1, M = !0;
          if (typeof h != "function")
            throw new TypeError(l);
          g = n(g) || 0, r(m) && (R = !!m.leading, I = "maxWait" in m, T = I ? c(n(m.maxWait) || 0, g) : T, M = "trailing" in m ? !!m.trailing : M);
          function P(W) {
            var G = b, X = S;
            return b = S = void 0, F = W, C = h.apply(X, G), C;
          }
          function B(W) {
            return F = W, E = setTimeout(x, g), R ? P(W) : C;
          }
          function V(W) {
            var G = W - j, X = W - F, J = g - G;
            return I ? f(J, T - X) : J;
          }
          function y(W) {
            var G = W - j, X = W - F;
            return j === void 0 || G >= g || G < 0 || I && X >= T;
          }
          function x() {
            var W = a();
            if (y(W))
              return O(W);
            E = setTimeout(x, V(W));
          }
          function O(W) {
            return E = void 0, M && b ? P(W) : (b = S = void 0, C);
          }
          function A() {
            E !== void 0 && clearTimeout(E), F = 0, b = j = S = E = void 0;
          }
          function H() {
            return E === void 0 ? C : O(a());
          }
          function D() {
            var W = a(), G = y(W);
            if (b = arguments, S = this, j = W, G) {
              if (E === void 0)
                return B(j);
              if (I)
                return clearTimeout(E), E = setTimeout(x, g), P(j);
            }
            return E === void 0 && (E = setTimeout(x, g)), C;
          }
          return D.cancel = A, D.flush = H, D;
        }
        o.exports = p;
      }
    ),
    /***/
    b42e: (
      /***/
      function(o, u, e) {
        var r = Math.ceil, a = Math.floor;
        o.exports = Math.trunc || function(l) {
          var c = +l;
          return (c > 0 ? a : r)(c);
        };
      }
    ),
    /***/
    b4b0: (
      /***/
      function(o, u, e) {
        var r = e("8d74"), a = e("1a8c"), n = e("ffd6"), l = NaN, c = /^[-+]0x[0-9a-f]+$/i, f = /^0b[01]+$/i, p = /^0o[0-7]+$/i, h = parseInt;
        function g(m) {
          if (typeof m == "number")
            return m;
          if (n(m))
            return l;
          if (a(m)) {
            var b = typeof m.valueOf == "function" ? m.valueOf() : m;
            m = a(b) ? b + "" : b;
          }
          if (typeof m != "string")
            return m === 0 ? m : +m;
          m = r(m);
          var S = f.test(m);
          return S || p.test(m) ? h(m.slice(2), S ? 2 : 8) : c.test(m) ? l : +m;
        }
        o.exports = g;
      }
    ),
    /***/
    b622: (
      /***/
      function(o, u, e) {
        var r = e("da84"), a = e("5692"), n = e("1a2d"), l = e("90e3"), c = e("04f8"), f = e("fdbf"), p = r.Symbol, h = a("wks"), g = f ? p.for || p : p && p.withoutSetter || l;
        o.exports = function(m) {
          return n(h, m) || (h[m] = c && n(p, m) ? p[m] : g("Symbol." + m)), h[m];
        };
      }
    ),
    /***/
    b64b: (
      /***/
      function(o, u, e) {
        var r = e("23e7"), a = e("7b0b"), n = e("df75"), l = e("d039"), c = l(function() {
          n(1);
        });
        r({ target: "Object", stat: !0, forced: c }, {
          keys: function(p) {
            return n(a(p));
          }
        });
      }
    ),
    /***/
    b727: (
      /***/
      function(o, u, e) {
        var r = e("0366"), a = e("e330"), n = e("44ad"), l = e("7b0b"), c = e("07fa"), f = e("65f0"), p = a([].push), h = function(g) {
          var m = g === 1, b = g === 2, S = g === 3, T = g === 4, C = g === 6, E = g === 7, j = g === 5 || C;
          return function(F, R, I, M) {
            for (var P = l(F), B = n(P), V = c(B), y = r(R, I), x = 0, O = M || f, A = m ? O(F, V) : b || E ? O(F, 0) : void 0, H, D; V > x; x++) if ((j || x in B) && (H = B[x], D = y(H, x, P), g))
              if (m) A[x] = D;
              else if (D) switch (g) {
                case 3:
                  return !0;
                case 5:
                  return H;
                case 6:
                  return x;
                case 2:
                  p(A, H);
              }
              else switch (g) {
                case 4:
                  return !1;
                case 7:
                  p(A, H);
              }
            return C ? -1 : S || T ? T : A;
          };
        };
        o.exports = {
          // `Array.prototype.forEach` method
          // https://tc39.es/ecma262/#sec-array.prototype.foreach
          forEach: h(0),
          // `Array.prototype.map` method
          // https://tc39.es/ecma262/#sec-array.prototype.map
          map: h(1),
          // `Array.prototype.filter` method
          // https://tc39.es/ecma262/#sec-array.prototype.filter
          filter: h(2),
          // `Array.prototype.some` method
          // https://tc39.es/ecma262/#sec-array.prototype.some
          some: h(3),
          // `Array.prototype.every` method
          // https://tc39.es/ecma262/#sec-array.prototype.every
          every: h(4),
          // `Array.prototype.find` method
          // https://tc39.es/ecma262/#sec-array.prototype.find
          find: h(5),
          // `Array.prototype.findIndex` method
          // https://tc39.es/ecma262/#sec-array.prototype.findIndex
          findIndex: h(6),
          // `Array.prototype.filterReject` method
          // https://github.com/tc39/proposal-array-filtering
          filterReject: h(7)
        };
      }
    ),
    /***/
    bcdf: (
      /***/
      function(o, u) {
        function e() {
        }
        o.exports = e;
      }
    ),
    /***/
    c04e: (
      /***/
      function(o, u, e) {
        var r = e("c65b"), a = e("861d"), n = e("d9b5"), l = e("dc4a"), c = e("485a"), f = e("b622"), p = TypeError, h = f("toPrimitive");
        o.exports = function(g, m) {
          if (!a(g) || n(g)) return g;
          var b = l(g, h), S;
          if (b) {
            if (m === void 0 && (m = "default"), S = r(b, g, m), !a(S) || n(S)) return S;
            throw new p("Can't convert object to primitive value");
          }
          return m === void 0 && (m = "number"), c(g, m);
        };
      }
    ),
    /***/
    c430: (
      /***/
      function(o, u, e) {
        o.exports = !1;
      }
    ),
    /***/
    c65b: (
      /***/
      function(o, u, e) {
        var r = e("40d5"), a = Function.prototype.call;
        o.exports = r ? a.bind(a) : function() {
          return a.apply(a, arguments);
        };
      }
    ),
    /***/
    c6b6: (
      /***/
      function(o, u, e) {
        var r = e("e330"), a = r({}.toString), n = r("".slice);
        o.exports = function(l) {
          return n(a(l), 8, -1);
        };
      }
    ),
    /***/
    c6cd: (
      /***/
      function(o, u, e) {
        var r = e("c430"), a = e("da84"), n = e("6374"), l = "__core-js_shared__", c = o.exports = a[l] || n(l, {});
        (c.versions || (c.versions = [])).push({
          version: "3.37.1",
          mode: r ? "pure" : "global",
          copyright: "© 2014-2024 Denis Pushkarev (zloirock.ru)",
          license: "https://github.com/zloirock/core-js/blob/v3.37.1/LICENSE",
          source: "https://github.com/zloirock/core-js"
        });
      }
    ),
    /***/
    c8ba: (
      /***/
      function(o, u) {
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
      function(o, u, e) {
        var r = e("5e77").PROPER, a = e("d039"), n = e("5899"), l = "​᠎";
        o.exports = function(c) {
          return a(function() {
            return !!n[c]() || l[c]() !== l || r && n[c].name !== c;
          });
        };
      }
    ),
    /***/
    c975: (
      /***/
      function(o, u, e) {
        var r = e("23e7"), a = e("4625"), n = e("4d64").indexOf, l = e("a640"), c = a([].indexOf), f = !!c && 1 / c([1], 1, -0) < 0, p = f || !l("indexOf");
        r({ target: "Array", proto: !0, forced: p }, {
          indexOf: function(g) {
            var m = arguments.length > 1 ? arguments[1] : void 0;
            return f ? c(this, g, m) || 0 : n(this, g, m);
          }
        });
      }
    ),
    /***/
    ca84: (
      /***/
      function(o, u, e) {
        var r = e("e330"), a = e("1a2d"), n = e("fc6a"), l = e("4d64").indexOf, c = e("d012"), f = r([].push);
        o.exports = function(p, h) {
          var g = n(p), m = 0, b = [], S;
          for (S in g) !a(c, S) && a(g, S) && f(b, S);
          for (; h.length > m; ) a(g, S = h[m++]) && (~l(b, S) || f(b, S));
          return b;
        };
      }
    ),
    /***/
    cb2d: (
      /***/
      function(o, u, e) {
        var r = e("1626"), a = e("9bf2"), n = e("13d2"), l = e("6374");
        o.exports = function(c, f, p, h) {
          h || (h = {});
          var g = h.enumerable, m = h.name !== void 0 ? h.name : f;
          if (r(p) && n(p, m, h), h.global)
            g ? c[f] = p : l(f, p);
          else {
            try {
              h.unsafe ? c[f] && (g = !0) : delete c[f];
            } catch {
            }
            g ? c[f] = p : a.f(c, f, {
              value: p,
              enumerable: !1,
              configurable: !h.nonConfigurable,
              writable: !h.nonWritable
            });
          }
          return c;
        };
      }
    ),
    /***/
    cc12: (
      /***/
      function(o, u, e) {
        var r = e("da84"), a = e("861d"), n = r.document, l = a(n) && a(n.createElement);
        o.exports = function(c) {
          return l ? n.createElement(c) : {};
        };
      }
    ),
    /***/
    cd9d: (
      /***/
      function(o, u) {
        function e(r) {
          return r;
        }
        o.exports = e;
      }
    ),
    /***/
    cdce: (
      /***/
      function(o, u, e) {
        var r = e("da84"), a = e("1626"), n = r.WeakMap;
        o.exports = a(n) && /native code/.test(String(n));
      }
    ),
    /***/
    d012: (
      /***/
      function(o, u, e) {
        o.exports = {};
      }
    ),
    /***/
    d039: (
      /***/
      function(o, u, e) {
        o.exports = function(r) {
          try {
            return !!r();
          } catch {
            return !0;
          }
        };
      }
    ),
    /***/
    d066: (
      /***/
      function(o, u, e) {
        var r = e("da84"), a = e("1626"), n = function(l) {
          return a(l) ? l : void 0;
        };
        o.exports = function(l, c) {
          return arguments.length < 2 ? n(r[l]) : r[l] && r[l][c];
        };
      }
    ),
    /***/
    d15f: (
      /***/
      function(o, u, e) {
      }
    ),
    /***/
    d1e7: (
      /***/
      function(o, u, e) {
        var r = {}.propertyIsEnumerable, a = Object.getOwnPropertyDescriptor, n = a && !r.call({ 1: 2 }, 1);
        u.f = n ? function(c) {
          var f = a(this, c);
          return !!f && f.enumerable;
        } : r;
      }
    ),
    /***/
    d2bb: (
      /***/
      function(o, u, e) {
        var r = e("7282"), a = e("861d"), n = e("1d80"), l = e("3bbe");
        o.exports = Object.setPrototypeOf || ("__proto__" in {} ? function() {
          var c = !1, f = {}, p;
          try {
            p = r(Object.prototype, "__proto__", "set"), p(f, []), c = f instanceof Array;
          } catch {
          }
          return function(g, m) {
            return n(g), l(m), a(g) && (c ? p(g, m) : g.__proto__ = m), g;
          };
        }() : void 0);
      }
    ),
    /***/
    d3b7: (
      /***/
      function(o, u, e) {
        var r = e("00ee"), a = e("cb2d"), n = e("b041");
        r || a(Object.prototype, "toString", n, { unsafe: !0 });
      }
    ),
    /***/
    d401: (
      /***/
      function(o, u, e) {
        var r = e("cb2d"), a = e("aa1f"), n = Error.prototype;
        n.toString !== a && r(n, "toString", a);
      }
    ),
    /***/
    d58f: (
      /***/
      function(o, u, e) {
        var r = e("59ed"), a = e("7b0b"), n = e("44ad"), l = e("07fa"), c = TypeError, f = "Reduce of empty array with no initial value", p = function(h) {
          return function(g, m, b, S) {
            var T = a(g), C = n(T), E = l(T);
            if (r(m), E === 0 && b < 2) throw new c(f);
            var j = h ? E - 1 : 0, F = h ? -1 : 1;
            if (b < 2) for (; ; ) {
              if (j in C) {
                S = C[j], j += F;
                break;
              }
              if (j += F, h ? j < 0 : E <= j)
                throw new c(f);
            }
            for (; h ? j >= 0 : E > j; j += F) j in C && (S = m(S, C[j], j, T));
            return S;
          };
        };
        o.exports = {
          // `Array.prototype.reduce` method
          // https://tc39.es/ecma262/#sec-array.prototype.reduce
          left: p(!1),
          // `Array.prototype.reduceRight` method
          // https://tc39.es/ecma262/#sec-array.prototype.reduceright
          right: p(!0)
        };
      }
    ),
    /***/
    d784: (
      /***/
      function(o, u, e) {
        e("ac1f");
        var r = e("c65b"), a = e("cb2d"), n = e("9263"), l = e("d039"), c = e("b622"), f = e("9112"), p = c("species"), h = RegExp.prototype;
        o.exports = function(g, m, b, S) {
          var T = c(g), C = !l(function() {
            var R = {};
            return R[T] = function() {
              return 7;
            }, ""[g](R) !== 7;
          }), E = C && !l(function() {
            var R = !1, I = /a/;
            return g === "split" && (I = {}, I.constructor = {}, I.constructor[p] = function() {
              return I;
            }, I.flags = "", I[T] = /./[T]), I.exec = function() {
              return R = !0, null;
            }, I[T](""), !R;
          });
          if (!C || !E || b) {
            var j = /./[T], F = m(T, ""[g], function(R, I, M, P, B) {
              var V = I.exec;
              return V === n || V === h.exec ? C && !B ? { done: !0, value: r(j, I, M, P) } : { done: !0, value: r(R, M, I, P) } : { done: !1 };
            });
            a(String.prototype, g, F[0]), a(h, T, F[1]);
          }
          S && f(h[T], "sham", !0);
        };
      }
    ),
    /***/
    d81d: (
      /***/
      function(o, u, e) {
        var r = e("23e7"), a = e("b727").map, n = e("1dde"), l = n("map");
        r({ target: "Array", proto: !0, forced: !l }, {
          map: function(f) {
            return a(this, f, arguments.length > 1 ? arguments[1] : void 0);
          }
        });
      }
    ),
    /***/
    d998: (
      /***/
      function(o, u, e) {
        var r = e("342f");
        o.exports = /MSIE|Trident/.test(r);
      }
    ),
    /***/
    d9b5: (
      /***/
      function(o, u, e) {
        var r = e("d066"), a = e("1626"), n = e("3a9b"), l = e("fdbf"), c = Object;
        o.exports = l ? function(f) {
          return typeof f == "symbol";
        } : function(f) {
          var p = r("Symbol");
          return a(p) && n(p.prototype, c(f));
        };
      }
    ),
    /***/
    da84: (
      /***/
      function(o, u, e) {
        (function(r) {
          var a = function(n) {
            return n && n.Math === Math && n;
          };
          o.exports = // eslint-disable-next-line es/no-global-this -- safe
          a(typeof globalThis == "object" && globalThis) || a(typeof window == "object" && window) || // eslint-disable-next-line no-restricted-globals -- safe
          a(typeof self == "object" && self) || a(typeof r == "object" && r) || a(typeof this == "object" && this) || // eslint-disable-next-line no-new-func -- fallback
          /* @__PURE__ */ function() {
            return this;
          }() || Function("return this")();
        }).call(this, e("c8ba"));
      }
    ),
    /***/
    dc4a: (
      /***/
      function(o, u, e) {
        var r = e("59ed"), a = e("7234");
        o.exports = function(n, l) {
          var c = n[l];
          return a(c) ? void 0 : r(c);
        };
      }
    ),
    /***/
    df75: (
      /***/
      function(o, u, e) {
        var r = e("ca84"), a = e("7839");
        o.exports = Object.keys || function(l) {
          return r(l, a);
        };
      }
    ),
    /***/
    e0ef: (
      /***/
      function(o, u, e) {
        var r = e("4b17"), a = "Expected a function";
        function n(l, c) {
          var f;
          if (typeof c != "function")
            throw new TypeError(a);
          return l = r(l), function() {
            return --l > 0 && (f = c.apply(this, arguments)), l <= 1 && (c = void 0), f;
          };
        }
        o.exports = n;
      }
    ),
    /***/
    e163: (
      /***/
      function(o, u, e) {
        var r = e("1a2d"), a = e("1626"), n = e("7b0b"), l = e("f772"), c = e("e177"), f = l("IE_PROTO"), p = Object, h = p.prototype;
        o.exports = c ? p.getPrototypeOf : function(g) {
          var m = n(g);
          if (r(m, f)) return m[f];
          var b = m.constructor;
          return a(b) && m instanceof b ? b.prototype : m instanceof p ? h : null;
        };
      }
    ),
    /***/
    e177: (
      /***/
      function(o, u, e) {
        var r = e("d039");
        o.exports = !r(function() {
          function a() {
          }
          return a.prototype.constructor = null, Object.getPrototypeOf(new a()) !== a.prototype;
        });
      }
    ),
    /***/
    e267: (
      /***/
      function(o, u, e) {
        var r = e("e330"), a = e("e8b5"), n = e("1626"), l = e("c6b6"), c = e("577e"), f = r([].push);
        o.exports = function(p) {
          if (n(p)) return p;
          if (a(p)) {
            for (var h = p.length, g = [], m = 0; m < h; m++) {
              var b = p[m];
              typeof b == "string" ? f(g, b) : (typeof b == "number" || l(b) === "Number" || l(b) === "String") && f(g, c(b));
            }
            var S = g.length, T = !0;
            return function(C, E) {
              if (T)
                return T = !1, E;
              if (a(this)) return E;
              for (var j = 0; j < S; j++) if (g[j] === C) return E;
            };
          }
        };
      }
    ),
    /***/
    e330: (
      /***/
      function(o, u, e) {
        var r = e("40d5"), a = Function.prototype, n = a.call, l = r && a.bind.bind(n, n);
        o.exports = r ? l : function(c) {
          return function() {
            return n.apply(c, arguments);
          };
        };
      }
    ),
    /***/
    e391: (
      /***/
      function(o, u, e) {
        var r = e("577e");
        o.exports = function(a, n) {
          return a === void 0 ? arguments.length < 2 ? "" : n : r(a);
        };
      }
    ),
    /***/
    e893: (
      /***/
      function(o, u, e) {
        var r = e("1a2d"), a = e("56ef"), n = e("06cf"), l = e("9bf2");
        o.exports = function(c, f, p) {
          for (var h = a(f), g = l.f, m = n.f, b = 0; b < h.length; b++) {
            var S = h[b];
            !r(c, S) && !(p && r(p, S)) && g(c, S, m(f, S));
          }
        };
      }
    ),
    /***/
    e8b5: (
      /***/
      function(o, u, e) {
        var r = e("c6b6");
        o.exports = Array.isArray || function(n) {
          return r(n) === "Array";
        };
      }
    ),
    /***/
    e9c4: (
      /***/
      function(o, u, e) {
        var r = e("23e7"), a = e("d066"), n = e("2ba4"), l = e("c65b"), c = e("e330"), f = e("d039"), p = e("1626"), h = e("d9b5"), g = e("f36a"), m = e("e267"), b = e("04f8"), S = String, T = a("JSON", "stringify"), C = c(/./.exec), E = c("".charAt), j = c("".charCodeAt), F = c("".replace), R = c(1 .toString), I = /[\uD800-\uDFFF]/g, M = /^[\uD800-\uDBFF]$/, P = /^[\uDC00-\uDFFF]$/, B = !b || f(function() {
          var O = a("Symbol")("stringify detection");
          return T([O]) !== "[null]" || T({ a: O }) !== "{}" || T(Object(O)) !== "{}";
        }), V = f(function() {
          return T("\uDF06\uD834") !== '"\\udf06\\ud834"' || T("\uDEAD") !== '"\\udead"';
        }), y = function(O, A) {
          var H = g(arguments), D = m(A);
          if (!(!p(D) && (O === void 0 || h(O))))
            return H[1] = function(W, G) {
              if (p(D) && (G = l(D, this, S(W), G)), !h(G)) return G;
            }, n(T, null, H);
        }, x = function(O, A, H) {
          var D = E(H, A - 1), W = E(H, A + 1);
          return C(M, O) && !C(P, W) || C(P, O) && !C(M, D) ? "\\u" + R(j(O, 0), 16) : O;
        };
        T && r({ target: "JSON", stat: !0, arity: 3, forced: B || V }, {
          // eslint-disable-next-line no-unused-vars -- required for `.length`
          stringify: function(A, H, D) {
            var W = g(arguments), G = n(B ? y : T, null, W);
            return V && typeof G == "string" ? F(G, I, x) : G;
          }
        });
      }
    ),
    /***/
    f36a: (
      /***/
      function(o, u, e) {
        var r = e("e330");
        o.exports = r([].slice);
      }
    ),
    /***/
    f4b3: (
      /***/
      function(o, u, e) {
        var r = e("23e7"), a = e("d039"), n = e("7b0b"), l = e("c04e"), c = a(function() {
          return (/* @__PURE__ */ new Date(NaN)).toJSON() !== null || Date.prototype.toJSON.call({ toISOString: function() {
            return 1;
          } }) !== 1;
        });
        r({ target: "Date", proto: !0, arity: 1, forced: c }, {
          // eslint-disable-next-line no-unused-vars -- required for `.length`
          toJSON: function(p) {
            var h = n(this), g = l(h, "number");
            return typeof g == "number" && !isFinite(g) ? null : h.toISOString();
          }
        });
      }
    ),
    /***/
    f5df: (
      /***/
      function(o, u, e) {
        var r = e("00ee"), a = e("1626"), n = e("c6b6"), l = e("b622"), c = l("toStringTag"), f = Object, p = n(/* @__PURE__ */ function() {
          return arguments;
        }()) === "Arguments", h = function(g, m) {
          try {
            return g[m];
          } catch {
          }
        };
        o.exports = r ? n : function(g) {
          var m, b, S;
          return g === void 0 ? "Undefined" : g === null ? "Null" : typeof (b = h(m = f(g), c)) == "string" ? b : p ? n(m) : (S = n(m)) === "Object" && a(m.callee) ? "Arguments" : S;
        };
      }
    ),
    /***/
    f772: (
      /***/
      function(o, u, e) {
        var r = e("5692"), a = e("90e3"), n = r("keys");
        o.exports = function(l) {
          return n[l] || (n[l] = a(l));
        };
      }
    ),
    /***/
    fb15: (
      /***/
      function(o, u, e) {
        if (e.r(u), e.d(u, "Treeselect", function() {
          return (
            /* reexport */
            or
          );
        }), e.d(u, "treeselectMixin", function() {
          return (
            /* reexport */
            Xt
          );
        }), e.d(u, "LOAD_ROOT_OPTIONS", function() {
          return (
            /* reexport */
            ue
          );
        }), e.d(u, "LOAD_CHILDREN_OPTIONS", function() {
          return (
            /* reexport */
            Y
          );
        }), e.d(u, "ASYNC_SEARCH", function() {
          return (
            /* reexport */
            me
          );
        }), typeof window < "u") {
          var r = window.document.currentScript, a = r && r.src.match(/(.+\/)[^/]+\.js(\?.*)?$/);
          a && (e.p = a[1]);
        }
        var n = e("8bbf");
        function l(s, t, i, v, N, L) {
          var w = Object(n.resolveComponent)("HiddenFields"), _ = Object(n.resolveComponent)("Control"), te = Object(n.resolveComponent)("MenuPortal"), de = Object(n.resolveComponent)("Menu");
          return Object(n.openBlock)(), Object(n.createBlock)("div", {
            ref: "wrapper",
            class: s.wrapperClass
          }, [Object(n.createVNode)(w), Object(n.createVNode)(_, {
            ref: "control"
          }, null, 512), s.appendToBody ? (Object(n.openBlock)(), Object(n.createBlock)(te, {
            key: 0,
            ref: "portal"
          }, null, 512)) : (Object(n.openBlock)(), Object(n.createBlock)(de, {
            key: 1,
            ref: "menu"
          }, null, 512))], 2);
        }
        function c(s) {
          if (Array.isArray(s)) return s;
        }
        function f(s, t) {
          var i = s == null ? null : typeof Symbol < "u" && s[Symbol.iterator] || s["@@iterator"];
          if (i != null) {
            var v, N, L, w, _ = [], te = !0, de = !1;
            try {
              if (L = (i = i.call(s)).next, t !== 0) for (; !(te = (v = L.call(i)).done) && (_.push(v.value), _.length !== t); te = !0) ;
            } catch (pe) {
              de = !0, N = pe;
            } finally {
              try {
                if (!te && i.return != null && (w = i.return(), Object(w) !== w)) return;
              } finally {
                if (de) throw N;
              }
            }
            return _;
          }
        }
        function p(s, t) {
          (t == null || t > s.length) && (t = s.length);
          for (var i = 0, v = Array(t); i < t; i++) v[i] = s[i];
          return v;
        }
        function h(s, t) {
          if (s) {
            if (typeof s == "string") return p(s, t);
            var i = {}.toString.call(s).slice(8, -1);
            return i === "Object" && s.constructor && (i = s.constructor.name), i === "Map" || i === "Set" ? Array.from(s) : i === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i) ? p(s, t) : void 0;
          }
        }
        function g() {
          throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
        }
        function m(s, t) {
          return c(s) || f(s, t) || h(s, t) || g();
        }
        function b(s) {
          "@babel/helpers - typeof";
          return b = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
            return typeof t;
          } : function(t) {
            return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
          }, b(s);
        }
        function S(s, t) {
          if (b(s) != "object" || !s) return s;
          var i = s[Symbol.toPrimitive];
          if (i !== void 0) {
            var v = i.call(s, t || "default");
            if (b(v) != "object") return v;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return (t === "string" ? String : Number)(s);
        }
        function T(s) {
          var t = S(s, "string");
          return b(t) == "symbol" ? t : t + "";
        }
        function C(s, t, i) {
          return (t = T(t)) in s ? Object.defineProperty(s, t, {
            value: i,
            enumerable: !0,
            configurable: !0,
            writable: !0
          }) : s[t] = i, s;
        }
        function E(s) {
          if (Array.isArray(s)) return p(s);
        }
        function j(s) {
          if (typeof Symbol < "u" && s[Symbol.iterator] != null || s["@@iterator"] != null) return Array.from(s);
        }
        function F() {
          throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
        }
        function R(s) {
          return E(s) || j(s) || h(s) || F();
        }
        function I(s, t) {
          var i = Object.keys(s);
          if (Object.getOwnPropertySymbols) {
            var v = Object.getOwnPropertySymbols(s);
            t && (v = v.filter(function(N) {
              return Object.getOwnPropertyDescriptor(s, N).enumerable;
            })), i.push.apply(i, v);
          }
          return i;
        }
        function M(s) {
          for (var t = 1; t < arguments.length; t++) {
            var i = arguments[t] != null ? arguments[t] : {};
            t % 2 ? I(Object(i), !0).forEach(function(v) {
              C(s, v, i[v]);
            }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(s, Object.getOwnPropertyDescriptors(i)) : I(Object(i)).forEach(function(v) {
              Object.defineProperty(s, v, Object.getOwnPropertyDescriptor(i, v));
            });
          }
          return s;
        }
        e("99af"), e("a623"), e("4de4"), e("0481"), e("4160"), e("c975"), e("d81d"), e("14d9"), e("13d5"), e("fb6a"), e("45fc"), e("4e82"), e("4069"), e("f4b3"), e("e9c4"), e("a9e3"), e("d3b7"), e("ac1f"), e("5319"), e("498a"), e("159b");
        var P = e("2e39"), B = /* @__PURE__ */ e.n(P);
        function V(s) {
          return s !== s;
        }
        function y(s, t) {
          return s.indexOf(t) !== -1;
        }
        var x = e("72f0"), O = /* @__PURE__ */ e.n(x), A = e("cd9d"), H = /* @__PURE__ */ e.n(A), D = function() {
          return /* @__PURE__ */ Object.create(null);
        };
        function W(s, t) {
          if (s.length !== t.length) return !0;
          for (var i = 0; i < s.length; i++)
            if (s[i] !== t[i]) return !0;
          return !1;
        }
        var G = e("bcdf"), X = /* @__PURE__ */ e.n(G), J = (
          /* istanbul ignore next */
          X.a
        );
        function ee(s, t, i) {
          for (var v = 0, N = s.length; v < N; v++)
            if (t.call(i, s[v], v, s)) return s[v];
        }
        function ne(s) {
          return function(i) {
            if (i.type === "mousedown" && i.button === 0) {
              for (var v = arguments.length, N = new Array(v > 1 ? v - 1 : 0), L = 1; L < v; L++)
                N[L - 1] = arguments[L];
              s.call.apply(s, [this, i].concat(N));
            }
          };
        }
        function ie(s, t) {
          var i = s.getBoundingClientRect(), v = t.getBoundingClientRect(), N = t.offsetHeight / 3;
          v.bottom + N > i.bottom ? s.scrollTop = Math.min(t.offsetTop + t.clientHeight - s.offsetHeight + N, s.scrollHeight) : v.top - N < i.top && (s.scrollTop = Math.max(t.offsetTop - N, 0));
        }
        var ce = e("4416"), fe = /* @__PURE__ */ e.n(ce), Se = e("1d92"), he = /* @__PURE__ */ e.n(Se), Ne = e("2655"), ge = /* @__PURE__ */ e.n(Ne);
        e("a434");
        function Ve(s, t) {
          var i = s.indexOf(t);
          i !== -1 && s.splice(i, 1);
        }
        var Oe = null, Ie = 0, De = 1, Pe = 2, z = "ALL_CHILDREN", $ = "ALL_DESCENDANTS", Q = "LEAF_CHILDREN", k = "LEAF_DESCENDANTS", ue = "LOAD_ROOT_OPTIONS", Y = "LOAD_CHILDREN_OPTIONS", me = "ASYNC_SEARCH", Ce = "ALL", _e = "BRANCH_PRIORITY", ut = "LEAF_PRIORITY", ct = "ALL_WITH_INDETERMINATE", Ht = "ORDER_SELECTED", Wt = "LEVEL", Ut = "INDEX", xe = {
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
        }, Or = (
          /* istanbul ignore next */
          200
        ), Gt = 5, Kt = 40;
        function Yt(s, t) {
          var i = 0;
          do {
            if (s.level < i) return -1;
            if (t.level < i) return 1;
            if (s.index[i] !== t.index[i]) return s.index[i] - t.index[i];
            i++;
          } while (!0);
        }
        function xr(s, t) {
          return s.level === t.level ? Yt(s, t) : s.level - t.level;
        }
        function dt() {
          return {
            isLoaded: !1,
            isLoading: !1,
            loadingError: ""
          };
        }
        function Er(s) {
          return typeof s == "string" ? s : typeof s == "number" && !V(s) ? s + "" : "";
        }
        function Qt(s, t, i) {
          return s ? B()(t, i) : y(i, t);
        }
        function ft(s) {
          return s.message || /* istanbul ignore next */
          String(s);
        }
        var Nr = 0, Xt = {
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
              default: O()(!0)
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
                return "".concat(Nr++, "$$");
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
              default: O()(["label"])
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
              default: H.a
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
                var i = ["auto", "top", "bottom", "above", "below"];
                return y(i, t);
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
              default: z,
              validator: function(t) {
                var i = [z, $, Q, k];
                return y(i, t);
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
              default: Ht,
              validator: function(t) {
                var i = [Ht, Wt, Ut];
                return y(i, t);
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
              default: _e,
              validator: function(t) {
                var i = [Ce, _e, ut, ct];
                return y(i, t);
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
                nodeMap: D(),
                // <id, checkedState> map, used for multi-select mode.
                checkedStateMap: D(),
                // Id list of all selected options.
                selectedNodeIds: this.extractCheckedNodeIdsFromValue(),
                // <id, true> map for fast checking:
                //   if (forest.selectedNodeIds.indexOf(id) !== -1) forest.selectedNodeMap[id] === true
                selectedNodeMap: D()
              },
              // States of root options.
              rootOptionsStates: dt(),
              localSearch: {
                // Has user entered any query to search local options?
                active: !1,
                // Has any options matched the search query?
                noResults: !0,
                // <id, countObject> map for counting matched children/descendants.
                countMap: D()
              },
              // <searchQuery, remoteSearchEntry> map.
              remoteSearch: D()
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
              var t = this, i;
              if (this.single || this.flat || this.disableBranchNodes || this.valueConsistsOf === Ce)
                i = this.forest.selectedNodeIds.slice();
              else if (this.valueConsistsOf === _e)
                i = this.forest.selectedNodeIds.filter(function(L) {
                  var w = t.getNode(L);
                  return w.isRootNode ? !0 : !t.isSelected(w.parentNode);
                });
              else if (this.valueConsistsOf === ut)
                i = this.forest.selectedNodeIds.filter(function(L) {
                  var w = t.getNode(L);
                  return w.isLeaf ? !0 : w.children.length === 0;
                });
              else if (this.valueConsistsOf === ct) {
                var v, N = [];
                i = this.forest.selectedNodeIds.slice(), this.selectedNodes.forEach(function(L) {
                  L.ancestors.forEach(function(w) {
                    y(N, w.id) || y(i, w.id) || N.push(w.id);
                  });
                }), (v = i).push.apply(v, N);
              }
              return this.sortValueBy === Wt ? i.sort(function(L, w) {
                return xr(t.getNode(L), t.getNode(w));
              }) : this.sortValueBy === Ut && i.sort(function(L, w) {
                return Yt(t.getNode(L), t.getNode(w));
              }), i;
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
              var t = this, i = [];
              return this.traverseAllNodesByIndex(function(v) {
                if ((!t.localSearch.active || t.shouldOptionBeIncludedInSearchResult(v)) && i.push(v.id), v.isBranch && !t.shouldExpand(v))
                  return !1;
              }), i;
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
            internalValue: function(t, i) {
              var v = W(t, i);
              v && this.$emit("update:modelValue", this.getValue(), this.getInstanceId());
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
              var t = this.extractCheckedNodeIdsFromValue(), i = W(t, this.internalValue);
              i && this.fixSelectedNodeIds(t);
            }
          },
          methods: {
            verifyProps: function() {
              var t = this;
              if (J(function() {
                return t.async ? t.searchable : !0;
              }, function() {
                return 'For async search mode, the value of "searchable" prop must be true.';
              }), this.options == null && !this.loadOptions && J(function() {
                return !1;
              }, function() {
                return 'Are you meant to dynamically load options? You need to use "loadOptions" prop.';
              }), this.flat && J(function() {
                return t.multiple;
              }, function() {
                return 'You are using flat mode. But you forgot to add "multiple=true"?';
              }), !this.flat) {
                var i = ["autoSelectAncestors", "autoSelectDescendants", "autoDeselectAncestors", "autoDeselectDescendants"];
                i.forEach(function(v) {
                  J(function() {
                    return !t[v];
                  }, function() {
                    return '"'.concat(v, '" only applies to flat mode.');
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
                var i = this.forest.nodeMap;
                this.forest.nodeMap = D(), this.keepDataOfSelectedNodes(i), this.forest.normalizedOptions = this.normalize(Oe, t, i), this.fixSelectedNodeIds(this.internalValue);
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
              var i = this.internalValue.map(function(v) {
                return t.getNode(v).raw;
              });
              return this.multiple ? i : i[0];
            },
            getNode: function(t) {
              return J(function() {
                return t != null;
              }, function() {
                return "Invalid node id: ".concat(t);
              }), t == null ? null : t in this.forest.nodeMap ? this.forest.nodeMap[t] : this.createFallbackNode(t);
            },
            createFallbackNode: function(t) {
              var i = this.extractNodeFromValue(t), v = this.enhancedNormalizer(i).label || "".concat(t, " (unknown)"), N = {
                id: t,
                label: v,
                ancestors: [],
                parentNode: Oe,
                isFallbackNode: !0,
                isRootNode: !0,
                isLeaf: !0,
                isBranch: !1,
                isDisabled: !1,
                childrenIgnoreDisabled: !1,
                isNew: !1,
                index: [-1],
                level: 0,
                raw: i
              };
              return this.forest.nodeMap[t] = N;
            },
            extractCheckedNodeIdsFromValue: function() {
              var t = this;
              return this.modelValue == null ? [] : this.valueFormat === "id" ? this.multiple ? this.modelValue.slice() : [this.modelValue] : (this.multiple ? this.modelValue : [this.modelValue]).map(function(i) {
                return t.enhancedNormalizer(i);
              }).map(function(i) {
                return i.id;
              });
            },
            extractNodeFromValue: function(t) {
              var i = this, v = {
                id: t
              };
              if (this.valueFormat === "id")
                return v;
              var N = this.multiple ? Array.isArray(this.modelValue) ? this.modelValue : [] : this.modelValue ? [this.modelValue] : [], L = ee(N, function(w) {
                return w && i.enhancedNormalizer(w).id === t;
              });
              return L || v;
            },
            fixSelectedNodeIds: function(t) {
              var i = this, v = [];
              if (this.single || this.flat || this.disableBranchNodes || this.valueConsistsOf === Ce)
                v = t;
              else if (this.valueConsistsOf === _e)
                t.forEach(function(Ae) {
                  v.push(Ae);
                  var $e = i.getNode(Ae);
                  $e.isBranch && i.traverseDescendantsBFS($e, function(Ue) {
                    v.push(Ue.id);
                  });
                });
              else if (this.valueConsistsOf === ut)
                for (var N = D(), L = t.slice(); L.length; ) {
                  var w = L.shift(), _ = this.getNode(w);
                  v.push(w), !_.isRootNode && (_.parentNode.id in N || (N[_.parentNode.id] = _.parentNode.children.length), --N[_.parentNode.id] === 0 && L.push(_.parentNode.id));
                }
              else if (this.valueConsistsOf === ct)
                for (var te = D(), de = t.filter(function(Ae) {
                  var $e = i.getNode(Ae);
                  return $e.isLeaf || $e.children.length === 0;
                }); de.length; ) {
                  var pe = de.shift(), re = this.getNode(pe);
                  v.push(pe), !re.isRootNode && (re.parentNode.id in te || (te[re.parentNode.id] = re.parentNode.children.length), --te[re.parentNode.id] === 0 && de.push(re.parentNode.id));
                }
              var be = W(this.forest.selectedNodeIds, v);
              be && (this.forest.selectedNodeIds = v), this.buildForestState();
            },
            keepDataOfSelectedNodes: function(t) {
              var i = this;
              this.forest.selectedNodeIds.forEach(function(v) {
                if (t[v]) {
                  var N = M(M({}, t[v]), {}, {
                    isFallbackNode: !0
                  });
                  i.forest.nodeMap[v] = N;
                }
              });
            },
            isSelected: function(t) {
              return this.forest.selectedNodeMap[t.id] === !0;
            },
            traverseDescendantsBFS: function(t, i) {
              if (t.isBranch)
                for (var v = t.children.slice(); v.length; ) {
                  var N = v[0];
                  N.isBranch && v.push.apply(v, R(N.children)), i(N), v.shift();
                }
            },
            traverseDescendantsDFS: function(t, i) {
              var v = this;
              t.isBranch && t.children.forEach(function(N) {
                v.traverseDescendantsDFS(N, i), i(N);
              });
            },
            traverseAllNodesDFS: function(t) {
              var i = this;
              this.forest.normalizedOptions.forEach(function(v) {
                i.traverseDescendantsDFS(v, t), t(v);
              });
            },
            traverseAllNodesByIndex: function(t) {
              var i = function v(N) {
                N.children.forEach(function(L) {
                  t(L) !== !1 && L.isBranch && v(L);
                });
              };
              i({
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
            handleMouseDown: ne(function(t) {
              if (t.preventDefault(), t.stopPropagation(), !this.disabled) {
                var i = this.getValueContainer().$el.contains(t.target);
                i && !this.menu.isOpen && (this.openOnClick || this.trigger.isFocused) && this.openMenu(), this._blurOnSelect ? this.blurInput() : this.focusInput(), this.resetFlags();
              }
            }),
            handleClickOutside: function(t) {
              this.$refs.wrapper && !this.$refs.wrapper.contains(t.target) && (this.blurInput(), this.closeMenu());
            },
            handleLocalSearch: function() {
              var t = this, i = this.trigger.searchQuery, v = function() {
                return t.resetHighlightedOptionWhenNecessary(!0);
              };
              if (!i)
                return this.localSearch.active = !1, v();
              this.localSearch.active = !0, this.localSearch.noResults = !0, this.traverseAllNodesDFS(function(w) {
                w.isBranch && (w.isExpandedOnSearch = !1, w.showAllChildrenOnSearch = !1, w.isMatched = !1, w.hasMatchedDescendants = !1, t.localSearch.countMap[w.id] = C(C(C(C({}, z, 0), $, 0), Q, 0), k, 0));
              });
              var N = i.trim().toLocaleLowerCase(), L = N.replace(/\s+/g, " ").split(" ");
              this.traverseAllNodesDFS(function(w) {
                t.searchNested && L.length > 1 ? w.isMatched = L.every(function(_) {
                  return Qt(!1, _, w.nestedSearchLabel);
                }) : w.isMatched = t.matchKeys.some(function(_) {
                  return Qt(!t.disableFuzzyMatching, N, w.lowerCased[_]);
                }), w.isMatched && (t.localSearch.noResults = !1, w.ancestors.forEach(function(_) {
                  return t.localSearch.countMap[_.id][$]++;
                }), w.isLeaf && w.ancestors.forEach(function(_) {
                  return t.localSearch.countMap[_.id][k]++;
                }), w.parentNode !== Oe && (t.localSearch.countMap[w.parentNode.id][z] += 1, w.isLeaf && (t.localSearch.countMap[w.parentNode.id][Q] += 1))), (w.isMatched || w.isBranch && w.isExpandedOnSearch) && w.parentNode !== Oe && (w.parentNode.isExpandedOnSearch = !0, w.parentNode.hasMatchedDescendants = !0);
              }), v();
            },
            handleRemoteSearch: function() {
              var t = this, i = this.trigger.searchQuery, v = this.getRemoteSearchEntry(), N = function() {
                t.initialize(), t.resetHighlightedOptionWhenNecessary(!0);
              };
              if ((i === "" || this.cacheOptions) && v.isLoaded)
                return N();
              this.callLoadOptionsProp({
                action: me,
                args: {
                  searchQuery: i
                },
                isPending: function() {
                  return v.isLoading;
                },
                start: function() {
                  v.isLoading = !0, v.isLoaded = !1, v.loadingError = "";
                },
                succeed: function(w) {
                  v.isLoaded = !0, v.options = w, t.trigger.searchQuery === i && N();
                },
                fail: function(w) {
                  v.loadingError = ft(w);
                },
                end: function() {
                  v.isLoading = !1;
                }
              });
            },
            getRemoteSearchEntry: function() {
              var t = this, i = this.trigger.searchQuery, v = this.remoteSearch[i] || M(M({}, dt()), {}, {
                options: []
              });
              if (this.$watch(function() {
                return v.options;
              }, function() {
                t.trigger.searchQuery === i && t.initialize();
              }, {
                deep: !0
              }), i === "") {
                if (Array.isArray(this.defaultOptions))
                  return v.options = this.defaultOptions, v.isLoaded = !0, v;
                if (this.defaultOptions !== !0)
                  return v.isLoaded = !0, v;
              }
              return this.remoteSearch[i] || (this.remoteSearch[i] = v), v;
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
              var t = this.appendToBody ? this.$refs.portal.portalTarget : this, i = t.$refs.menu.$refs.menu;
              return i && i.nodeName !== "#comment" ? i : null;
            },
            setCurrentHighlightedOption: function(t) {
              var i = this, v = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0, N = this.menu.current;
              if (N != null && N in this.forest.nodeMap && (this.forest.nodeMap[N].isHighlighted = !1), this.menu.current = t.id, t.isHighlighted = !0, this.menu.isOpen && v) {
                var L = function() {
                  var _ = i.getMenu(), te = _.querySelector('.vue-treeselect__option[data-id="'.concat(t.id, '"]'));
                  te && ie(_, te);
                };
                this.getMenu() ? L() : this.$nextTick(L);
              }
            },
            resetHighlightedOptionWhenNecessary: function() {
              var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !1, i = this.menu.current;
              (t || i == null || !(i in this.forest.nodeMap) || !this.shouldShowOptionInMenu(this.getNode(i))) && this.highlightFirstOption();
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
                var t = fe()(this.visibleOptionIds);
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
              var i;
              this.localSearch.active ? (i = t.isExpandedOnSearch = !t.isExpandedOnSearch, i && (t.showAllChildrenOnSearch = !0)) : i = t.isExpanded = !t.isExpanded, i && !t.childrenStates.isLoaded && this.loadChildrenOptions(t);
            },
            buildForestState: function() {
              var t = this, i = D();
              this.forest.selectedNodeIds.forEach(function(N) {
                i[N] = !0;
              }), this.forest.selectedNodeMap = i;
              var v = D();
              this.multiple && (this.traverseAllNodesByIndex(function(N) {
                v[N.id] = Ie;
              }), this.selectedNodes.forEach(function(N) {
                v[N.id] = Pe, !t.flat && !t.disableBranchNodes && N.ancestors.forEach(function(L) {
                  t.isSelected(L) || (v[L.id] = De);
                });
              })), this.forest.checkedStateMap = v;
            },
            enhancedNormalizer: function(t) {
              return M(M({}, t), this.normalizer(t, this.getInstanceId()));
            },
            normalize: function(t, i, v) {
              var N = this, L = i.map(function(te) {
                return [N.enhancedNormalizer(te), te];
              }).map(function(te, de) {
                var pe = m(te, 2), re = pe[0], be = pe[1];
                N.checkDuplication(re), N.verifyNodeShape(re);
                var Ae = re.id, $e = re.label, Ue = re.children, St = re.isDefaultExpanded, ze = t === Oe, ir = ze ? 0 : t.level + 1, Ot = Array.isArray(Ue) || Ue === null, xt = !Ot, Sn = re.childrenIgnoreDisabled, sr = !!re.isDisabled || !N.flat && !ze && t.isDisabled && !t.childrenIgnoreDisabled, On = !!re.isNew, Et = N.matchKeys.reduce(function(Be, lr) {
                  return M(M({}, Be), {}, C({}, lr, Er(re[lr]).toLocaleLowerCase()));
                }, {}), xn = ze ? Et.label : t.nestedSearchLabel + " " + Et.label;
                N.forest.nodeMap[Ae] = D();
                var Z = N.forest.nodeMap[Ae];
                if (Z.id = Ae, Z.label = $e, Z.level = ir, Z.ancestors = ze ? [] : [t].concat(t.ancestors), Z.index = (ze ? [] : t.index).concat(de), Z.parentNode = t, Z.lowerCased = Et, Z.nestedSearchLabel = xn, Z.childrenIgnoreDisabled = Sn, Z.isDisabled = sr, Z.isNew = On, Z.isMatched = !1, Z.isHighlighted = !1, Z.isBranch = Ot, Z.isLeaf = xt, Z.isRootNode = ze, Z.raw = be, Ot) {
                  var tt = Array.isArray(Ue);
                  Z.childrenStates = M(M({}, dt()), {}, {
                    isLoaded: tt
                  }), Z.isExpanded = typeof St == "boolean" ? St : ir < N.defaultExpandLevel, Z.hasMatchedDescendants = !1, Z.hasDisabledDescendants = !1, Z.isExpandedOnSearch = !1, Z.showAllChildrenOnSearch = !1, Z.count = C(C(C(C({}, z, 0), $, 0), Q, 0), k, 0), Z.children = tt ? N.normalize(Z, Ue, v) : [], St === !0 && Z.ancestors.forEach(function(Be) {
                    Be.isExpanded = !0;
                  }), !tt && typeof N.loadOptions != "function" ? J(function() {
                    return !1;
                  }, function() {
                    return 'Unloaded branch node detected. "loadOptions" prop is required to load its children.';
                  }) : !tt && Z.isExpanded && N.loadChildrenOptions(Z);
                }
                if (Z.ancestors.forEach(function(Be) {
                  return Be.count[$]++;
                }), xt && Z.ancestors.forEach(function(Be) {
                  return Be.count[k]++;
                }), ze || (t.count[z] += 1, xt && (t.count[Q] += 1), sr && (t.hasDisabledDescendants = !0)), v && v[Ae]) {
                  var Fe = v[Ae];
                  Z.isMatched = Fe.isMatched, Z.showAllChildrenOnSearch = Fe.showAllChildrenOnSearch, Z.isHighlighted = Fe.isHighlighted, Fe.isBranch && Z.isBranch && (Z.isExpanded = Fe.isExpanded, Z.isExpandedOnSearch = Fe.isExpandedOnSearch, Fe.childrenStates.isLoaded && !Z.childrenStates.isLoaded ? Z.isExpanded = !1 : Z.childrenStates = M({}, Fe.childrenStates));
                }
                return Z;
              });
              if (this.branchNodesFirst) {
                var w = L.filter(function(te) {
                  return te.isBranch;
                }), _ = L.filter(function(te) {
                  return te.isLeaf;
                });
                L = w.concat(_);
              }
              return L;
            },
            loadRootOptions: function() {
              var t = this;
              this.callLoadOptionsProp({
                action: ue,
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
                fail: function(v) {
                  t.rootOptionsStates.loadingError = ft(v);
                },
                end: function() {
                  t.rootOptionsStates.isLoading = !1;
                }
              });
            },
            loadChildrenOptions: function(t) {
              var i = this, v = t.id, N = t.raw;
              this.callLoadOptionsProp({
                action: Y,
                args: {
                  // We always pass the raw node instead of the normalized node to any
                  // callback provided by the user of this component.
                  // Because the shape of the raw node is more likely to be closing to
                  // what the back-end API service of the application needs.
                  parentNode: N
                },
                isPending: function() {
                  return i.getNode(v).childrenStates.isLoading;
                },
                start: function() {
                  i.getNode(v).childrenStates.isLoading = !0, i.getNode(v).childrenStates.loadingError = "";
                },
                succeed: function() {
                  i.getNode(v).childrenStates.isLoaded = !0;
                },
                fail: function(w) {
                  i.getNode(v).childrenStates.loadingError = ft(w);
                },
                end: function() {
                  i.getNode(v).childrenStates.isLoading = !1;
                }
              });
            },
            callLoadOptionsProp: function(t) {
              var i = t.action, v = t.args, N = t.isPending, L = t.start, w = t.succeed, _ = t.fail, te = t.end;
              if (!(!this.loadOptions || N())) {
                L();
                var de = he()(function(re, be) {
                  re ? _(re) : w(be), te();
                }), pe = this.loadOptions(M(M({
                  id: this.getInstanceId(),
                  instanceId: this.getInstanceId(),
                  action: i
                }, v), {}, {
                  callback: de
                }));
                ge()(pe) && pe.then(function() {
                  de();
                }, function(re) {
                  de(re);
                }).catch(function(re) {
                  console.error(re);
                });
              }
            },
            checkDuplication: function(t) {
              var i = this;
              J(function() {
                return !(t.id in i.forest.nodeMap && !i.forest.nodeMap[t.id].isFallbackNode);
              }, function() {
                return "Detected duplicate presence of node id ".concat(JSON.stringify(t.id), ". ") + 'Their labels are "'.concat(i.forest.nodeMap[t.id].label, '" and "').concat(t.label, '" respectively.');
              });
            },
            verifyNodeShape: function(t) {
              J(function() {
                return !(t.children === void 0 && t.isBranch === !0);
              }, function() {
                return "Are you meant to declare an unloaded branch node? `isBranch: true` is no longer supported, please use `children: null` instead.";
              });
            },
            select: function(t) {
              if (!(this.disabled || t.isDisabled)) {
                this.single && this.clear();
                var i = this.multiple && !this.flat ? this.forest.checkedStateMap[t.id] === Ie : !this.isSelected(t);
                i ? this._selectNode(t) : this._deselectNode(t), this.buildForestState(), i ? this.$emit("select", t.raw, this.getInstanceId()) : this.$emit("deselect", t.raw, this.getInstanceId()), this.localSearch.active && i && (this.single || this.clearOnSelect) && this.resetSearchQuery(), this.single && this.closeOnSelect && (this.closeMenu(), this.searchable && (this._blurOnSelect = !0));
              }
            },
            clear: function() {
              var t = this;
              this.hasValue && (this.single || this.allowClearingDisabled ? this.forest.selectedNodeIds = [] : this.forest.selectedNodeIds = this.forest.selectedNodeIds.filter(function(i) {
                return t.getNode(i).isDisabled;
              }), this.buildForestState());
            },
            // This is meant to be called only by `select()`.
            _selectNode: function(t) {
              var i = this;
              if (this.single || this.disableBranchNodes)
                return this.addValue(t);
              if (this.flat) {
                this.addValue(t), this.autoSelectAncestors ? t.ancestors.forEach(function(L) {
                  !i.isSelected(L) && !L.isDisabled && i.addValue(L);
                }) : this.autoSelectDescendants && this.traverseDescendantsBFS(t, function(L) {
                  !i.isSelected(L) && !L.isDisabled && i.addValue(L);
                });
                return;
              }
              var v = t.isLeaf || /* node.isBranch && */
              !t.hasDisabledDescendants || /* node.isBranch && */
              this.allowSelectingDisabledDescendants;
              if (v && this.addValue(t), t.isBranch && this.traverseDescendantsBFS(t, function(L) {
                (!L.isDisabled || i.allowSelectingDisabledDescendants) && i.addValue(L);
              }), v)
                for (var N = t; (N = N.parentNode) !== Oe && (N.children.every(this.isSelected) && !N.childrenIgnoreDisabled); )
                  this.addValue(N);
            },
            // This is meant to be called only by `select()`.
            _deselectNode: function(t) {
              var i = this;
              if (this.disableBranchNodes)
                return this.removeValue(t);
              if (this.flat) {
                this.removeValue(t), this.autoDeselectAncestors ? t.ancestors.forEach(function(L) {
                  i.isSelected(L) && !L.isDisabled && i.removeValue(L);
                }) : this.autoDeselectDescendants && this.traverseDescendantsBFS(t, function(L) {
                  i.isSelected(L) && !L.isDisabled && i.removeValue(L);
                });
                return;
              }
              var v = !1;
              if (t.isBranch && this.traverseDescendantsDFS(t, function(L) {
                (!L.isDisabled || i.allowSelectingDisabledDescendants) && (i.removeValue(L), v = !0);
              }), t.isLeaf || /* node.isBranch && */
              v || /* node.isBranch && */
              t.children.length === 0) {
                this.removeValue(t);
                for (var N = t; (N = N.parentNode) !== Oe && this.isSelected(N); )
                  this.removeValue(N);
              }
            },
            addValue: function(t) {
              this.forest.selectedNodeIds.push(t.id), this.forest.selectedNodeMap[t.id] = !0;
            },
            removeValue: function(t) {
              Ve(this.forest.selectedNodeIds, t.id), delete this.forest.selectedNodeMap[t.id];
            },
            removeLastValue: function() {
              if (this.hasValue) {
                if (this.single) return this.clear();
                var t = fe()(this.internalValue), i = this.getNode(t);
                this.select(i);
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
        function Tr(s) {
          return typeof s == "string" ? s : s != null && !V(s) ? JSON.stringify(s) : "";
        }
        var Ir = Object(n.defineComponent)({
          name: "vue-treeselect--hidden-fields",
          inject: ["instance"],
          functional: !0,
          render: function(t) {
            var i = t.instance;
            if (!i.name || i.disabled || !i.hasValue) return null;
            var v = i.internalValue.map(Tr);
            return i.multiple && i.joinValues && (v = [v.join(i.delimiter)]), v.map(function(N, L) {
              return Object(n.createVNode)("input", {
                type: "hidden",
                name: i.name,
                value: N,
                key: "hidden-field-" + L
              }, null);
            });
          }
        }), Cr = Ir;
        e("d401"), e("25f0");
        var Ar = e("b047"), Lr = /* @__PURE__ */ e.n(Ar);
        e("3410"), e("b64b");
        function Jt(s) {
          return s == null || b(s) !== "object" ? !1 : Object.getPrototypeOf(s) === Object.prototype;
        }
        function Mr(s, t, i) {
          Jt(i) ? (s[t] || (s[t] = {}), vt(s[t], i)) : s[t] = i;
        }
        function vt(s, t) {
          if (Jt(t))
            for (var i = Object.keys(t), v = 0, N = i.length; v < N; v++)
              Mr(s, i[v], t[i[v]]);
          return s;
        }
        function Rr(s) {
          return typeof s == "function" || Object.prototype.toString.call(s) === "[object Object]" && !Object(n.isVNode)(s);
        }
        var jr = [xe.ENTER, xe.END, xe.HOME, xe.ARROW_LEFT, xe.ARROW_UP, xe.ARROW_RIGHT, xe.ARROW_DOWN], Dr = {
          name: "vue-treeselect--input",
          inject: ["instance"],
          data: function() {
            return {
              inputWidth: Gt,
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
            this.debouncedCallback = Lr()(this.updateSearchQuery, Or, {
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
              var t = this.instance, i = t.getMenu();
              if (i && document.activeElement === i)
                return this.focus();
              t.trigger.isFocused = !1, t.closeMenu();
            },
            onInput: function(t) {
              var i = t.target.value;
              this.value = i, i ? this.debouncedCallback() : (this.debouncedCallback.cancel(), this.updateSearchQuery());
            },
            // 用 keyUp 事件存在一个问题，删除输入框最后一个字符也会导致取消选中最后一项
            onKeyDown: function(t) {
              var i = this.instance, v = "which" in t ? t.which : (
                /* istanbul ignore next */
                t.keyCode
              );
              if (!(t.ctrlKey || t.shiftKey || t.altKey || t.metaKey)) {
                if (!i.menu.isOpen && y(jr, v))
                  return t.preventDefault(), i.openMenu();
                switch (v) {
                  case xe.BACKSPACE: {
                    i.backspaceRemoves && !this.value.length && i.removeLastValue();
                    break;
                  }
                  case xe.ENTER: {
                    if (t.preventDefault(), i.menu.current === null) return;
                    var N = i.getNode(i.menu.current);
                    if (N.isBranch && i.disableBranchNodes) return;
                    i.select(N);
                    break;
                  }
                  case xe.ESCAPE: {
                    this.value.length ? this.clear() : i.menu.isOpen && i.closeMenu();
                    break;
                  }
                  case xe.ARROW_UP: {
                    t.preventDefault(), i.highlightPrevOption();
                    break;
                  }
                  case xe.ARROW_DOWN: {
                    t.preventDefault(), i.highlightNextOption();
                    break;
                  }
                  case xe.DELETE: {
                    i.deleteRemoves && !this.value.length && i.removeLastValue();
                    break;
                  }
                  default:
                    i.openMenu();
                }
              }
            },
            onMouseDown: function(t) {
              this.value.length && t.stopPropagation();
            },
            renderInputContainer: function() {
              var t = this.instance, i = {}, v = [];
              return t.searchable && !t.disabled && (v.push(this.renderInput()), this.needAutoSize && v.push(this.renderSizer())), t.searchable || vt(i, {
                on: {
                  focus: this.onFocus,
                  blur: this.onBlur,
                  keydown: this.onKeyDown
                },
                ref: "input"
              }), !t.searchable && !t.disabled && vt(i, {
                attrs: {
                  tabIndex: t.tabIndex
                }
              }), Object(n.createVNode)("div", Object(n.mergeProps)({
                class: "vue-treeselect__input-container"
              }, i), Rr(v) ? v : {
                default: function() {
                  return [v];
                }
              });
            },
            renderInput: function() {
              var t = this.instance;
              return Object(n.createVNode)("input", {
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
              return Object(n.createVNode)("div", {
                ref: "sizer",
                class: "vue-treeselect__sizer"
              }, [this.value]);
            },
            updateInputWidth: function() {
              this.inputWidth = Math.max(Gt, this.$refs.sizer.scrollWidth + 15);
            },
            updateSearchQuery: function() {
              var t = this.instance;
              t.trigger.searchQuery = this.value;
            }
          },
          render: function() {
            return this.renderInputContainer();
          }
        }, Zt = Dr, Pr = {
          name: "vue-treeselect--placeholder",
          inject: ["instance"],
          render: function() {
            var t = this.instance, i = {
              "vue-treeselect__placeholder": !0,
              "vue-treeselect-helper-zoom-effect-off": !0,
              "vue-treeselect-helper-hide": t.hasValue || t.trigger.searchQuery
            };
            return Object(n.createVNode)("div", {
              class: i
            }, [t.placeholder]);
          }
        }, kt = Pr, Fr = {
          name: "vue-treeselect--single-value",
          inject: ["instance"],
          methods: {
            renderSingleValueLabel: function() {
              var t = this.instance, i = t.selectedNodes[0], v = t.$slots["value-label"];
              return v ? v({
                node: i
              }) : i.label;
            }
          },
          render: function() {
            var t = this.instance, i = this.$parent.renderValueContainer, v = t.hasValue && !t.trigger.searchQuery;
            return i([v && Object(n.createVNode)("div", {
              class: "vue-treeselect__single-value"
            }, [this.renderSingleValueLabel()]), Object(n.createVNode)(kt, null, null), Object(n.createVNode)(Zt, {
              ref: "input"
            }, null)]);
          }
        }, wr = Fr, Vr = {
          xmlns: "http://www.w3.org/2000/svg",
          viewBox: "0 0 348.333 348.333"
        }, $r = /* @__PURE__ */ Object(n.createVNode)("path", {
          d: "M336.559 68.611L231.016 174.165l105.543 105.549c15.699 15.705 15.699 41.145 0 56.85-7.844 7.844-18.128 11.769-28.407 11.769-10.296 0-20.581-3.919-28.419-11.769L174.167 231.003 68.609 336.563c-7.843 7.844-18.128 11.769-28.416 11.769-10.285 0-20.563-3.919-28.413-11.769-15.699-15.698-15.699-41.139 0-56.85l105.54-105.549L11.774 68.611c-15.699-15.699-15.699-41.145 0-56.844 15.696-15.687 41.127-15.687 56.829 0l105.563 105.554L279.721 11.767c15.705-15.687 41.139-15.687 56.832 0 15.705 15.699 15.705 41.145.006 56.844z"
        }, null, -1);
        function zr(s, t, i, v, N, L) {
          return Object(n.openBlock)(), Object(n.createBlock)("svg", Vr, [$r]);
        }
        var Br = {
          name: "vue-treeselect--x"
        }, Hr = e("6b0d"), ht = /* @__PURE__ */ e.n(Hr), qt = /* @__PURE__ */ ht()(Br, [["render", zr]]);
        function Wr(s) {
          return typeof s == "function" || Object.prototype.toString.call(s) === "[object Object]" && !Object(n.isVNode)(s);
        }
        var Ur = {
          name: "vue-treeselect--multi-value-item",
          inject: ["instance"],
          props: {
            node: {
              type: Object,
              required: !0
            }
          },
          methods: {
            handleMouseDown: ne(function() {
              var t = this.instance, i = this.node;
              t.select(i);
            })
          },
          render: function() {
            var t = this.instance, i = this.node, v = {
              "vue-treeselect__multi-value-item": !0,
              "vue-treeselect__multi-value-item-disabled": i.isDisabled,
              "vue-treeselect__multi-value-item-new": i.isNew
            }, N = t.$slots["value-label"], L = N ? N({
              node: i
            }) : i.label;
            return Object(n.createVNode)("div", {
              class: "vue-treeselect__multi-value-item-container"
            }, [Object(n.createVNode)("div", {
              class: v,
              onMousedown: this.handleMouseDown
            }, [Object(n.createVNode)("span", {
              class: "vue-treeselect__multi-value-label"
            }, Wr(L) ? L : {
              default: function() {
                return [L];
              }
            }), Object(n.createVNode)("span", {
              class: "vue-treeselect__icon vue-treeselect__value-remove"
            }, [Object(n.createVNode)(qt, null, null)])])]);
          }
        }, Gr = Ur, Kr = {
          name: "vue-treeselect--multi-value",
          inject: ["instance"],
          methods: {
            renderMultiValueItems: function() {
              var t = this.instance;
              return t.internalValue.slice(0, t.limit).map(t.getNode).map(function(i) {
                return Object(n.createVNode)(Gr, {
                  key: "multi-value-item-".concat(i.id),
                  node: i
                }, null);
              });
            },
            renderExceedLimitTip: function() {
              var t = this.instance, i = t.internalValue.length - t.limit;
              return i <= 0 ? null : Object(n.createVNode)("div", {
                class: "vue-treeselect__limit-tip vue-treeselect-helper-zoom-effect-off",
                key: "exceed-limit-tip"
              }, [Object(n.createVNode)("span", {
                class: "vue-treeselect__limit-tip-text"
              }, [t.limitText(i)])]);
            }
          },
          render: function() {
            var t = this.$parent.renderValueContainer;
            return t(Object(n.createVNode)("div", {
              class: "vue-treeselect__multi-value",
              tag: "div",
              name: "vue-treeselect__multi-value-item--transition",
              appear: !0
            }, [this.renderMultiValueItems(), this.renderExceedLimitTip(), Object(n.createVNode)(kt, {
              key: "placeholder"
            }, null), Object(n.createVNode)(Zt, {
              ref: "input",
              key: "input"
            }, null)]));
          }
        }, Yr = Kr, Qr = {
          xmlns: "http://www.w3.org/2000/svg",
          viewBox: "0 0 292.362 292.362"
        }, Xr = /* @__PURE__ */ Object(n.createVNode)("path", {
          d: "M286.935 69.377c-3.614-3.617-7.898-5.424-12.848-5.424H18.274c-4.952 0-9.233 1.807-12.85 5.424C1.807 72.998 0 77.279 0 82.228c0 4.948 1.807 9.229 5.424 12.847l127.907 127.907c3.621 3.617 7.902 5.428 12.85 5.428s9.233-1.811 12.847-5.428L286.935 95.074c3.613-3.617 5.427-7.898 5.427-12.847 0-4.948-1.814-9.229-5.427-12.85z"
        }, null, -1);
        function Jr(s, t, i, v, N, L) {
          return Object(n.openBlock)(), Object(n.createBlock)("svg", Qr, [Xr]);
        }
        var Zr = {
          name: "vue-treeselect--arrow"
        }, _t = /* @__PURE__ */ ht()(Zr, [["render", Jr]]);
        function kr(s) {
          return typeof s == "function" || Object.prototype.toString.call(s) === "[object Object]" && !Object(n.isVNode)(s);
        }
        var qr = {
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
              return t.hasValue && t.internalValue.some(function(i) {
                return !t.getNode(i).isDisabled;
              });
            }
            /* eslint-enable valid-jsdoc */
          },
          methods: {
            renderX: function() {
              var t = this.instance, i = t.multiple ? t.clearAllText : t.clearValueText;
              return this.shouldShowX ? Object(n.createVNode)("div", {
                class: "vue-treeselect__x-container",
                title: i,
                onMousedown: this.handleMouseDownOnX
              }, [Object(n.createVNode)(qt, {
                class: "vue-treeselect__x"
              }, null)]) : null;
            },
            renderArrow: function() {
              var t = this.instance, i = {
                "vue-treeselect__control-arrow": !0,
                "vue-treeselect__control-arrow--rotated": t.menu.isOpen
              };
              return this.shouldShowArrow ? Object(n.createVNode)("div", {
                class: "vue-treeselect__control-arrow-container",
                onMousedown: this.handleMouseDownOnArrow
              }, [Object(n.createVNode)(_t, {
                class: i
              }, null)]) : null;
            },
            handleMouseDownOnX: ne(function(t) {
              t.stopPropagation(), t.preventDefault();
              var i = this.instance, v = i.beforeClearAll(), N = function(w) {
                w && i.clear();
              };
              ge()(v) ? v.then(N) : setTimeout(function() {
                return N(v);
              }, 0);
            }),
            handleMouseDownOnArrow: ne(function(t) {
              t.preventDefault(), t.stopPropagation();
              var i = this.instance;
              i.focusInput(), i.toggleMenu();
            }),
            // This is meant to be called by child `<Value />` component.
            renderValueContainer: function(t) {
              return Object(n.createVNode)("div", {
                class: "vue-treeselect__value-container"
              }, kr(t) ? t : {
                default: function() {
                  return [t];
                }
              });
            }
          },
          render: function() {
            var t = this.instance, i = t.single ? wr : Yr;
            return Object(n.createVNode)("div", {
              class: "vue-treeselect__control",
              onMousedown: t.handleMouseDown
            }, [Object(n.createVNode)(i, {
              ref: "value-container"
            }, null), this.renderX(), this.renderArrow()]);
          }
        }, _r = qr, en = function(s, t) {
          var i = document.createElement("_"), v = i.appendChild(document.createElement("_")), N = i.appendChild(document.createElement("_")), L = v.appendChild(document.createElement("_")), w = void 0, _ = void 0;
          return v.style.cssText = i.style.cssText = "height:100%;left:0;opacity:0;overflow:hidden;pointer-events:none;position:absolute;top:0;transition:0s;width:100%;z-index:-1", L.style.cssText = N.style.cssText = "display:block;height:100%;transition:0s;width:100%", L.style.width = L.style.height = "200%", s.appendChild(i), te(), pe;
          function te() {
            de();
            var re = s.offsetWidth, be = s.offsetHeight;
            (re !== w || be !== _) && (w = re, _ = be, N.style.width = re * 2 + "px", N.style.height = be * 2 + "px", i.scrollLeft = i.scrollWidth, i.scrollTop = i.scrollHeight, v.scrollLeft = v.scrollWidth, v.scrollTop = v.scrollHeight, t({ width: re, height: be })), v.addEventListener("scroll", te), i.addEventListener("scroll", te);
          }
          function de() {
            v.removeEventListener("scroll", te), i.removeEventListener("scroll", te);
          }
          function pe() {
            de(), s.removeChild(i);
          }
        }, tn = en, pt, et = [], rn = 100;
        function nn() {
          pt = setInterval(function() {
            et.forEach(er);
          }, rn);
        }
        function an() {
          clearInterval(pt), pt = null;
        }
        function er(s) {
          var t = s.$el, i = s.listener, v = s.lastWidth, N = s.lastHeight, L = t.offsetWidth, w = t.offsetHeight;
          (v !== L || N !== w) && (s.lastWidth = L, s.lastHeight = w, i({
            width: L,
            height: w
          }));
        }
        function on(s, t) {
          var i = {
            $el: s,
            listener: t,
            lastWidth: null,
            lastHeight: null
          }, v = function() {
            Ve(et, i), et.length || an();
          };
          return et.push(i), er(i), nn(), v;
        }
        function tr(s, t) {
          var i = document.documentMode === 9, v = !0, N = function() {
            return v || t.apply(void 0, arguments);
          }, L = i ? on : tn, w = L(s, N);
          return v = !1, w;
        }
        e("00b4");
        function sn(s) {
          for (var t = [], i = s.parentNode; i && i.nodeName !== "BODY" && i.nodeType === document.ELEMENT_NODE; )
            ln(i) && t.push(i), i = i.parentNode;
          return t.push(window), t;
        }
        function ln(s) {
          var t = getComputedStyle(s), i = t.overflow, v = t.overflowX, N = t.overflowY;
          return /(auto|scroll|overlay)/.test(i + N + v);
        }
        function rr(s, t) {
          var i = sn(s);
          return window.addEventListener("resize", t, {
            passive: !0
          }), i.forEach(function(v) {
            v.addEventListener("scroll", t, {
              passive: !0
            });
          }), function() {
            window.removeEventListener("resize", t, {
              passive: !0
            }), i.forEach(function(N) {
              N.removeEventListener("scroll", t, {
                passive: !0
              });
            });
          };
        }
        var un = Object(n.defineComponent)({
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
            var i = this.type, v = this.icon;
            return Object(n.createVNode)("div", {
              class: "vue-treeselect__tip vue-treeselect__".concat(i, "-tip")
            }, [Object(n.createVNode)("div", {
              class: "vue-treeselect__icon-container"
            }, [Object(n.createVNode)("span", {
              class: "vue-treeselect__icon-".concat(v)
            }, null)]), Object(n.createVNode)("span", {
              class: "vue-treeselect__tip-text vue-treeselect__".concat(i, "-tip-text")
            }, [this.$slots.default()])]);
          }
        }), je = un;
        function nr(s) {
          return typeof s == "function" || Object.prototype.toString.call(s) === "[object Object]" && !Object(n.isVNode)(s);
        }
        var gt, mt, yt, cn = {
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
              var t = this.instance, i = this.node;
              return i.isBranch && t.shouldExpand(i);
            },
            shouldShow: function() {
              var t = this.instance, i = this.node;
              return t.shouldShowOptionInMenu(i);
            }
          },
          methods: {
            renderOption: function() {
              var t = this.instance, i = this.node, v = {
                "vue-treeselect__option": !0,
                "vue-treeselect__option--disabled": i.isDisabled,
                "vue-treeselect__option--selected": t.isSelected(i),
                "vue-treeselect__option--highlight": i.isHighlighted,
                "vue-treeselect__option--matched": t.localSearch.active && i.isMatched,
                "vue-treeselect__option--hide": !this.shouldShow
              };
              return Object(n.createVNode)("div", {
                class: v,
                onMouseenter: this.handleMouseEnterOption,
                "data-id": i.id
              }, [this.renderArrow(), this.renderLabelContainer([this.renderCheckboxContainer([this.renderCheckbox()]), this.renderLabel()])]);
            },
            renderSubOptionsList: function() {
              return this.shouldExpand ? Object(n.createVNode)("div", {
                class: "vue-treeselect__list"
              }, [this.renderSubOptions(), this.renderNoChildrenTip(), this.renderLoadingChildrenTip(), this.renderLoadingChildrenErrorTip()]) : null;
            },
            renderArrow: function() {
              var t = this.instance, i = this.node;
              if (t.shouldFlattenOptions && this.shouldShow) return null;
              if (i.isBranch) {
                var v = {
                  "vue-treeselect__option-arrow": !0,
                  "vue-treeselect__option-arrow--rotated": this.shouldExpand
                };
                return Object(n.createVNode)("div", {
                  class: "vue-treeselect__option-arrow-container",
                  onMousedown: this.handleMouseDownOnArrow
                }, [Object(n.createVNode)("div", {
                  name: "vue-treeselect__option-arrow--prepare",
                  appear: !0
                }, [Object(n.createVNode)(_t, {
                  class: v
                }, null)])]);
              }
              return (
                /*node.isLeaf && */
                t.hasBranchNodes ? (gt || (gt = Object(n.createVNode)("div", {
                  class: "vue-treeselect__option-arrow-placeholder"
                }, [Object(n.createTextVNode)(" ")])), gt) : null
              );
            },
            renderLabelContainer: function(t) {
              return Object(n.createVNode)("div", {
                class: "vue-treeselect__label-container",
                onMousedown: this.handleMouseDownOnLabelContainer
              }, nr(t) ? t : {
                default: function() {
                  return [t];
                }
              });
            },
            renderCheckboxContainer: function(t) {
              var i = this.instance, v = this.node;
              return i.single || i.disableBranchNodes && v.isBranch ? null : Object(n.createVNode)("div", {
                class: "vue-treeselect__checkbox-container"
              }, nr(t) ? t : {
                default: function() {
                  return [t];
                }
              });
            },
            renderCheckbox: function() {
              var t = this.instance, i = this.node, v = t.forest.checkedStateMap[i.id], N = {
                "vue-treeselect__checkbox": !0,
                "vue-treeselect__checkbox--checked": v === Pe,
                "vue-treeselect__checkbox--indeterminate": v === De,
                "vue-treeselect__checkbox--unchecked": v === Ie,
                "vue-treeselect__checkbox--disabled": i.isDisabled
              };
              return mt || (mt = Object(n.createVNode)("span", {
                class: "vue-treeselect__check-mark"
              }, null)), yt || (yt = Object(n.createVNode)("span", {
                class: "vue-treeselect__minus-mark"
              }, null)), Object(n.createVNode)("span", {
                class: N
              }, [mt, yt]);
            },
            renderLabel: function() {
              var t = this.instance, i = this.node, v = i.isBranch && (t.localSearch.active ? t.showCountOnSearchComputed : t.showCount), N = v ? t.localSearch.active ? t.localSearch.countMap[i.id][t.showCountOf] : i.count[t.showCountOf] : NaN, L = "vue-treeselect__label", w = "vue-treeselect__count", _ = t.$slots["option-label"];
              return _ ? _({
                node: i,
                shouldShowCount: v,
                count: N,
                labelClassName: L,
                countClassName: w
              }) : Object(n.createVNode)("label", {
                class: L
              }, [i.label, v && Object(n.createVNode)("span", {
                class: w
              }, [Object(n.createTextVNode)("("), N, Object(n.createTextVNode)(")")])]);
            },
            renderSubOptions: function() {
              var t = this.node;
              return t.childrenStates.isLoaded ? t.children.map(function(i) {
                return Object(n.createVNode)(Object(n.resolveComponent)("vue-treeselect--option"), {
                  node: i,
                  key: i.id
                }, null);
              }) : null;
            },
            renderNoChildrenTip: function() {
              var t = this.instance, i = this.node;
              return !i.childrenStates.isLoaded || i.children.length ? null : Object(n.createVNode)(je, {
                type: "no-children",
                icon: "warning"
              }, {
                default: function() {
                  return [t.noChildrenText];
                }
              });
            },
            renderLoadingChildrenTip: function() {
              var t = this.instance, i = this.node;
              return i.childrenStates.isLoading ? Object(n.createVNode)(je, {
                type: "loading",
                icon: "loader"
              }, {
                default: function() {
                  return [t.loadingText];
                }
              }) : null;
            },
            renderLoadingChildrenErrorTip: function() {
              var t = this, i = this.instance, v = this.node;
              return v.childrenStates.loadingError ? Object(n.createVNode)(je, {
                type: "error",
                icon: "error"
              }, {
                default: function() {
                  return [v.childrenStates.loadingError, Object(n.createVNode)("a", {
                    class: "vue-treeselect__retry",
                    title: i.retryTitle,
                    onMousedown: t.handleMouseDownOnRetry
                  }, [i.retryText])];
                }
              }) : null;
            },
            handleMouseEnterOption: function(t) {
              var i = this.instance, v = this.node;
              t.target === t.currentTarget && i.setCurrentHighlightedOption(v, !1);
            },
            handleMouseDownOnArrow: ne(function() {
              var t = this.instance, i = this.node;
              t.toggleExpanded(i);
            }),
            handleMouseDownOnLabelContainer: ne(function() {
              var t = this.instance, i = this.node;
              i.isBranch && t.disableBranchNodes ? t.toggleExpanded(i) : t.select(i);
            }),
            handleMouseDownOnRetry: ne(function() {
              var t = this.instance, i = this.node;
              t.loadChildrenOptions(i);
            })
          },
          render: function() {
            var t = this.node, i = this.instance.shouldFlattenOptions ? 0 : t.level, v = C({
              "vue-treeselect__list-item": !0
            }, "vue-treeselect__indent-level-".concat(i), !0);
            return Object(n.createVNode)("div", {
              class: v
            }, [this.renderOption(), t.isBranch ? Object(n.createVNode)("div", {
              name: "vue-treeselect__list--transition"
            }, [this.renderSubOptionsList()]) : ""]);
          }
        }, dn = cn, fn = dn, vn = {
          top: "top",
          bottom: "bottom",
          above: "top",
          below: "bottom"
        }, hn = {
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
              return t.menu.isOpen ? Object(n.createVNode)("div", {
                ref: "menu",
                class: "vue-treeselect__menu",
                onMousedown: t.handleMouseDown,
                style: this.menuStyle
              }, [this.renderBeforeList(), t.async ? this.renderAsyncSearchMenuInner() : t.localSearch.active ? this.renderLocalSearchMenuInner() : this.renderNormalMenuInner(), this.renderAfterList()]) : null;
            },
            renderBeforeList: function() {
              var t = this.instance, i = t.$slots["before-list"];
              return i ? i() : null;
            },
            renderAfterList: function() {
              var t = this.instance, i = t.$slots["after-list"];
              return i ? i() : null;
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
              var t = this.instance, i = t.getRemoteSearchEntry(), v = t.trigger.searchQuery === "" && !t.defaultOptions, N = v ? !1 : i.isLoaded && i.options.length === 0;
              return v ? this.renderSearchPromptTip() : i.isLoading ? this.renderLoadingOptionsTip() : i.loadingError ? this.renderAsyncSearchLoadingErrorTip() : N ? this.renderNoResultsTip() : this.renderOptionList();
            },
            renderOptionList: function() {
              var t = this.instance;
              return Object(n.createVNode)("div", {
                class: "vue-treeselect__list"
              }, [t.forest.normalizedOptions.map(function(i) {
                return Object(n.createVNode)(fn, {
                  node: i,
                  key: i.id
                }, null);
              })]);
            },
            renderSearchPromptTip: function() {
              var t = this.instance;
              return Object(n.createVNode)(je, {
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
              return Object(n.createVNode)(je, {
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
              return Object(n.createVNode)(je, {
                type: "error",
                icon: "error"
              }, {
                default: function() {
                  return [t.rootOptionsStates.loadingError, Object(n.createVNode)("a", {
                    class: "vue-treeselect__retry",
                    onClick: t.loadRootOptions,
                    title: t.retryTitle
                  }, [t.retryText])];
                }
              });
            },
            renderAsyncSearchLoadingErrorTip: function() {
              var t = this.instance, i = t.getRemoteSearchEntry();
              return Object(n.createVNode)(je, {
                type: "error",
                icon: "error"
              }, {
                default: function() {
                  return [i.loadingError, Object(n.createVNode)("a", {
                    class: "vue-treeselect__retry",
                    onClick: t.handleRemoteSearch,
                    title: t.retryTitle
                  }, [t.retryText])];
                }
              });
            },
            renderNoAvailableOptionsTip: function() {
              var t = this.instance;
              return Object(n.createVNode)(je, {
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
              return Object(n.createVNode)(je, {
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
                var i = t.getMenu(), v = t.getControl(), N = i.getBoundingClientRect(), L = v.getBoundingClientRect(), w = N.height, _ = window.innerHeight, te = L.top, de = window.innerHeight - L.bottom, pe = L.top >= 0 && L.top <= _ || L.top < 0 && L.bottom > 0, re = de > w + Kt, be = te > w + Kt;
                pe ? t.openDirection !== "auto" ? t.menu.placement = vn[t.openDirection] : re || !be ? t.menu.placement = "bottom" : t.menu.placement = "top" : t.closeMenu();
              }
            },
            setupMenuSizeWatcher: function() {
              var t = this.instance, i = t.getMenu();
              this.menuSizeWatcher || (this.menuSizeWatcher = {
                remove: tr(i, this.adjustMenuOpenDirection)
              });
            },
            setupMenuResizeAndScrollEventListeners: function() {
              var t = this.instance, i = t.getControl();
              this.menuResizeAndScrollEventListeners || (this.menuResizeAndScrollEventListeners = {
                remove: rr(i, this.adjustMenuOpenDirection)
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
            return Object(n.createVNode)("div", {
              ref: "menu-container",
              class: "vue-treeselect__menu-container",
              style: this.menuContainerStyle
            }, [Object(n.createVNode)("div", {
              name: "vue-treeselect__menu--transition"
            }, [this.renderMenu()])]);
          }
        }, ar = hn, pn = {
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
              var t = this.instance, i = t.getControl();
              this.controlResizeAndScrollEventListeners || (this.controlResizeAndScrollEventListeners = {
                remove: rr(i, this.updateMenuContainerOffset)
              });
            },
            setupControlSizeWatcher: function() {
              var t = this, i = this.instance, v = i.getControl();
              this.controlSizeWatcher || (this.controlSizeWatcher = {
                remove: tr(v, function() {
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
              var t = this.instance, i = this.$el, v = t.getControl(), N = v.getBoundingClientRect();
              i.style.width = N.width + "px";
            },
            updateMenuContainerOffset: function() {
              var t = this.instance, i = t.getControl(), v = this.$el, N = i.getBoundingClientRect(), L = v.getBoundingClientRect(), w = t.menu.placement === "bottom" ? N.height : 0, _ = Math.round(N.left - L.left) + "px", te = Math.round(N.top - L.top + w) + "px", de = this.$refs.menu.$refs["menu-container"].style, pe = ["transform", "webkitTransform", "MozTransform", "msTransform"], re = ee(pe, function(be) {
                return be in document.body.style;
              });
              de[re] = "translate(".concat(_, ", ").concat(te, ")");
            }
          },
          render: function() {
            var t = this.instance, i = ["vue-treeselect__portal-target", t.wrapperClass], v = {
              zIndex: t.zIndex
            };
            return Object(n.createVNode)("div", {
              class: i,
              style: v,
              "data-instance-id": t.getInstanceId()
            }, [Object(n.createVNode)(ar, {
              ref: "menu"
            }, null)]);
          },
          unmounted: function() {
            this.removeHandlers();
          }
        }, bt, gn = {
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
              document.body.appendChild(t), this.portalTarget = Object(n.createApp)(M({
                parent: this
              }, pn)), this.portalTarget.mount(t);
            },
            teardown: function() {
              document.body.removeChild(this.portalTarget.$el), this.portalTarget.$el.innerHTML = "", this.portalTarget.$destroy(), this.portalTarget = null;
            }
          },
          render: function() {
            return bt || (bt = Object(n.createVNode)("div", {
              class: "vue-treeselect__menu-placeholder"
            }, null)), bt;
          }
        }, mn = gn, yn = Object(n.defineComponent)({
          name: "vue-treeselect",
          mixins: [Xt],
          components: {
            HiddenFields: Cr,
            Control: _r,
            Menu: ar,
            MenuPortal: mn
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
        }), or = /* @__PURE__ */ ht()(yn, [["render", l]]);
        e("d15f");
        var bn = or;
        u.default = bn;
      }
    ),
    /***/
    fb6a: (
      /***/
      function(o, u, e) {
        var r = e("23e7"), a = e("e8b5"), n = e("68ee"), l = e("861d"), c = e("23cb"), f = e("07fa"), p = e("fc6a"), h = e("8418"), g = e("b622"), m = e("1dde"), b = e("f36a"), S = m("slice"), T = g("species"), C = Array, E = Math.max;
        r({ target: "Array", proto: !0, forced: !S }, {
          slice: function(F, R) {
            var I = p(this), M = f(I), P = c(F, M), B = c(R === void 0 ? M : R, M), V, y, x;
            if (a(I) && (V = I.constructor, n(V) && (V === C || a(V.prototype)) ? V = void 0 : l(V) && (V = V[T], V === null && (V = void 0)), V === C || V === void 0))
              return b(I, P, B);
            for (y = new (V === void 0 ? C : V)(E(B - P, 0)), x = 0; P < B; P++, x++) P in I && h(y, x, I[P]);
            return y.length = x, y;
          }
        });
      }
    ),
    /***/
    fc6a: (
      /***/
      function(o, u, e) {
        var r = e("44ad"), a = e("1d80");
        o.exports = function(n) {
          return r(a(n));
        };
      }
    ),
    /***/
    fce3: (
      /***/
      function(o, u, e) {
        var r = e("d039"), a = e("da84"), n = a.RegExp;
        o.exports = r(function() {
          var l = n(".", "s");
          return !(l.dotAll && l.test(`
`) && l.flags === "s");
        });
      }
    ),
    /***/
    fdbc: (
      /***/
      function(o, u, e) {
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
      function(o, u, e) {
        var r = e("04f8");
        o.exports = r && !Symbol.sham && typeof Symbol.iterator == "symbol";
      }
    ),
    /***/
    ffd6: (
      /***/
      function(o, u, e) {
        var r = e("3729"), a = e("1310"), n = "[object Symbol]";
        function l(c) {
          return typeof c == "symbol" || a(c) && r(c) == n;
        }
        o.exports = l;
      }
    )
    /******/
  });
})(Sr);
var oa = Sr.exports;
const ia = /* @__PURE__ */ Nn(oa), sa = { key: 0 }, la = { class: "text-base font-bold" }, ua = {
  class: "relative py-8 mb-0.5 h-75",
  "data-type": "file"
}, ca = ["aria-label"], da = { class: "text-gray-500 text-xs mb-1" }, fa = { key: 1 }, va = { class: "text-base font-bold" }, ha = {
  class: "mb-0.5",
  "data-type": "url"
}, pa = ["value", "aria-label"], ga = {
  key: 0,
  class: "text-red-900 text-xs"
}, ma = { key: 2 }, ya = { class: "text-base font-bold" }, ba = {
  class: "relative mb-0.5",
  "data-type": "select"
}, Sa = { key: 0 }, Oa = {
  key: 0,
  class: "text-red-900 text-xs"
}, xa = { key: 1 }, Ea = ["size", "value", "aria-label"], Na = ["value"], Ta = {
  key: 0,
  class: "text-red-900 text-xs"
}, Ia = {
  key: 1,
  class: "text-red-900 text-xs"
}, Ca = { key: 3 }, Aa = ["aria-label"], La = { class: "text-base font-bold" }, Ma = { key: 4 }, Ra = { class: "text-base font-bold" }, ja = { class: "relative mb-0.5" }, Da = ["value", "aria-label"], Pa = {
  key: 0,
  class: "text-red-900 text-xs"
}, Fa = /* @__PURE__ */ qe({
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
    const u = Bt("iApi"), { t: e } = zt(), r = o, a = d, n = ae(), l = ae(!1), c = ae(!1), f = ae(!1), p = ae(!1), h = ae([...a.selectedValues]), g = ae("value-label"), m = ae("option-label"), b = ae(void 0), S = ae(null), T = Xe([]);
    if (a.defaultOption && a.modelValue === "" && a.options.length) {
      let O = a.options[0].value;
      if (a.name === "latField") {
        const A = new RegExp(/^(y|lat.*)$/i);
        O = a.options.find((D) => A.test(D.label))?.value || O;
      } else if (a.name === "longField") {
        const A = new RegExp(/^(x|long.*)$/i);
        O = a.options.find((D) => A.test(D.label))?.value || O;
      }
      r("update:modelValue", O);
    }
    const C = (O) => {
      O.trim() !== "" ? l.value = !0 : (l.value = !1, u.updateAlert(e("wizard.configure.name.error.required")));
    }, E = (O) => {
      let A;
      try {
        A = new URL(O);
      } catch {
        return l.value = !1, !1;
      }
      A.protocol === "http:" || A.protocol === "https:" ? l.value = !0 : l.value = !1;
    }, j = (O) => {
      r("upload", O.target.files[0]), O.target.value = "";
    }, F = (O) => {
      E(O.target.value), r("link", O.target.value, l), c.value = !1;
    }, R = (O, A) => {
      r(O ? "select" : "update:modelValue", A.target.value);
    }, I = (O) => {
      r("nested", O.target.checked);
    }, M = (O) => {
      C(O.target.value), r("link", O.target.value, l), f.value = !1;
    }, P = () => {
      r("select", a.sublayerOptions(h.value)), h.value && h.value.length > 0 ? p.value = !1 : p.value = !0;
    }, B = (O) => O.length > 5 ? `${O.slice(0, 5)}...` : O;
    function V() {
      b.value = new ResizeObserver(function() {
        y();
      }), b.value.observe(u.$vApp.$el.querySelector(".vue-treeselect__control")), b.value.observe(u.$vApp.$el.querySelector(".vue-treeselect__menu"));
    }
    const y = () => {
      const O = u.$vApp.$el.querySelector(".vue-treeselect__menu")?.clientHeight, A = u.$vApp.$el.querySelector(".vue-treeselect__control")?.clientHeight;
      n.value.style.height = `${O + A + 30}px`;
    };
    T.push(
      it(S, (O) => {
        O && x();
      })
    );
    const x = () => {
      if (S.value) {
        const O = S.value.querySelector('input[type="text"]');
        O && O.setAttribute("aria-label", e("wizard.configure.sublayers.select"));
      }
    };
    return st(() => {
      b.value.disconnect(), T.forEach((O) => O());
    }), (O, A) => {
      const H = mr("truncate");
      return q(), oe("div", {
        class: "input-wrapper mb-12",
        ref_key: "el",
        ref: n
      }, [
        d.type === "file" ? (q(), oe("div", sa, [
          U("label", la, se(d.label), 1),
          U("div", ua, [
            U("input", {
              class: "absolute w-full opacity-0 inset-0 cursor-pointer",
              type: "file",
              name: "file",
              accept: ".geojson,.json,.csv,.zip",
              "aria-label": a.ariaLabel,
              onInput: A[0] || (A[0] = (D) => {
                j(D);
              })
            }, null, 40, ca),
            A[11] || (A[11] = U("div", { class: "upload-mask absolute inset-0 flex border-dashed border-2 border-gray-400 pointer-events-none justify-center" }, [
              U("svg", {
                class: "w-30 h-30 m-auto",
                fill: "#a8a8a8",
                xmlns: "http://www.w3.org/2000/svg",
                viewBox: "0 0 58 58"
              }, [
                U("path", { d: "M29,58A29,29,0,1,0,0,29,29,29,0,0,0,29,58ZM29,4A25,25,0,1,1,4,29,25,25,0,0,1,29,4Z" }),
                U("polygon", { points: "27 22 27 44.4 31 44.4 31 22 41.7 31.1 44.3 28.1 29 15 13.7 28.1 16.3 31.1 27 22" })
              ])
            ], -1))
          ]),
          U("div", da, se(d.help), 1)
        ])) : d.type === "url" ? (q(), oe("div", fa, [
          U("label", va, se(d.label), 1),
          U("div", ha, [
            U("input", {
              class: "text-sm w-full border-solid border-gray-300 mb-5 focus:border-green-500",
              type: "url",
              name: "url",
              value: d.modelValue,
              "aria-label": a.ariaLabel,
              onChange: A[1] || (A[1] = (D) => l.value ? c.value = !1 : c.value = !0),
              onInput: A[2] || (A[2] = (D) => {
                F(D);
              })
            }, null, 40, pa)
          ]),
          c.value ? (q(), oe("div", ga, se(d.modelValue ? d.validationMessages?.invalid : d.validationMessages?.required), 1)) : ve("", !0)
        ])) : d.type === "select" ? (q(), oe("div", ma, [
          U("label", ya, se(d.label), 1),
          U("div", ba, [
            d.multiple ? (q(), oe("div", Sa, [
              U("div", {
                ref_key: "treeWrapper",
                ref: S
              }, [
                Ee(K(ia), {
                  modelValue: h.value,
                  "onUpdate:modelValue": A[3] || (A[3] = (D) => h.value = D),
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
                  placeholder: K(e)("wizard.configure.sublayers.select"),
                  noResultsText: K(e)("wizard.configure.sublayers.results"),
                  clearAllText: K(e)("wizard.configure.sublayers.clearAll"),
                  onSelect: A[4] || (A[4] = (D) => {
                    O.$nextTick(() => {
                      P();
                    });
                  }),
                  onDeselect: A[5] || (A[5] = (D) => {
                    O.$nextTick(() => {
                      P();
                    });
                  }),
                  onOpen: A[6] || (A[6] = (D) => {
                    O.$nextTick(() => {
                      V();
                    });
                  })
                }, {
                  [g.value]: Te(({ node: D }) => [
                    U("label", null, se(B(D.label)), 1)
                  ]),
                  [m.value]: Te(({ node: D, labelClassName: W }) => [
                    wt((q(), oe("label", {
                      class: Ze(W)
                    }, [
                      ke(se(D.label), 1)
                    ], 2)), [
                      [H, {
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
              d.validation && p.value ? (q(), oe("div", Oa, se(d.validationMessages?.required), 1)) : ve("", !0)
            ])) : (q(), oe("div", xa, [
              U("select", {
                class: Ze(["block border-solid border-gray-300 w-full p-3 overflow-y-auto", d.size && "configure-select"]),
                size: d.size,
                value: d.modelValue,
                onInput: A[7] || (A[7] = (D) => R(d.size, D)),
                "aria-label": a.ariaLabel
              }, [
                (q(!0), oe(pr, null, gr(d.options, (D) => (q(), oe("option", {
                  class: "p-6",
                  key: D.label,
                  value: D.value
                }, se(D.label), 9, Na))), 128))
              ], 42, Ea),
              d.validation && d.formatError ? (q(), oe("div", Ta, se(d.validationMessages?.invalid), 1)) : ve("", !0),
              d.validation && d.failureError ? (q(), oe("div", Ia, se(d.validationMessages?.failure), 1)) : ve("", !0)
            ]))
          ])
        ])) : d.type === "checkbox" ? (q(), oe("div", Ca, [
          U("input", {
            class: "text-sm border-solid border-gray-300 mb-5 focus:border-green-500 mr-10",
            type: "checkbox",
            name: "nested",
            checked: !0,
            "aria-label": a.ariaLabel,
            onChange: A[8] || (A[8] = (D) => {
              I(D);
            })
          }, null, 40, Aa),
          U("label", La, se(d.label), 1)
        ])) : (q(), oe("div", Ma, [
          U("label", Ra, se(d.label), 1),
          U("div", ja, [
            U("input", {
              class: Ze(["border-solid border-gray-300 p-3 w-full", { "error-border": !l.value && !d.modelValue }]),
              type: "text",
              value: d.modelValue,
              "aria-label": a.ariaLabel,
              onChange: A[9] || (A[9] = (D) => l.value ? f.value = !1 : f.value = !0),
              onInput: A[10] || (A[10] = (D) => {
                M(D);
              })
            }, null, 42, Da)
          ]),
          d.validation && !d.modelValue ? (q(), oe("div", Pa, se(d.validationMessages?.required), 1)) : ve("", !0)
        ]))
      ], 512);
    };
  }
}), Me = /* @__PURE__ */ lt(Fa, [["__scopeId", "data-v-be5c9863"]]), wa = { class: "step relative flex flex-col px-12" }, Va = { class: "stepper-header flex pb-24" }, $a = {
  key: 1,
  class: "flex-none stepper-check w-24 h-24 text-gray-400"
}, za = { class: "flex flex-col overflow-hidden" }, Ba = { class: "pl-12 flex items-center text-md" }, Ha = { class: "pl-12 text-xs transition-opacity duration-1000 ease-out" }, Wa = { class: "pl-36" }, Ua = /* @__PURE__ */ qe({
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
    const o = Bt("stepper"), u = ae(-1);
    $t(() => {
      u.value = o.numSteps++;
    });
    const e = () => o.activeIndex > u.value, r = () => o.activeIndex === u.value;
    return (a, n) => {
      const l = mr("truncate");
      return q(), oe("div", wa, [
        U("div", Va, [
          e() ? (q(), oe("div", $a, n[0] || (n[0] = [
            U("svg", {
              xmlns: "http://www.w3.org/2000/svg",
              height: "100%",
              width: "100%",
              preserveAspectRatio: "xMidYMid meet",
              viewBox: "0 0 24 24",
              focusable: "false"
            }, [
              U("g", { id: "check_circle" }, [
                U("path", { d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" })
              ])
            ], -1)
          ]))) : (q(), oe("div", {
            key: 0,
            class: Ze(["w-24 h-24 bg-gray-500 rounded-full flex justify-center items-center text-white text-xs font-semibold", { "bg-blue-500": r }])
          }, se(u.value + 1), 3)),
          U("div", za, [
            U("div", Ba, se(d.title), 1),
            wt((q(), oe("div", Ha, [
              ke(se(d.summary), 1)
            ])), [
              [ur, !r()],
              [l]
            ])
          ])
        ]),
        Ee(Tn, {
          name: "step",
          mode: "out-in"
        }, {
          default: Te(() => [
            wt(U("div", Wa, [
              Ye(a.$slots, "default", {}, void 0, !0)
            ], 512), [
              [ur, r()]
            ])
          ]),
          _: 3
        })
      ]);
    };
  }
}), Ft = /* @__PURE__ */ lt(Ua, [["__scopeId", "data-v-686fab2c"]]), Ga = { class: "py-12 h-auto stepper" }, Ka = /* @__PURE__ */ qe({
  __name: "stepper",
  props: {
    activeStep: {
      type: Number,
      default: 0
    }
  },
  setup(d) {
    const o = d, u = Re(() => o.activeStep), e = Xe([]), r = Xe({
      activeIndex: o.activeStep,
      numSteps: 0
    });
    return In("stepper", r), e.push(
      it(u, () => {
        r.activeIndex = o.activeStep;
      })
    ), st(() => {
      e.forEach((a) => a());
    }), (a, n) => (q(), oe("div", Ga, [
      Ye(a.$slots, "default")
    ]));
  }
}), Ya = {
  key: 0,
  class: "inline-flex items-center mb-10"
}, Qa = { class: "px-5 text-xs" }, Xa = { key: 5 }, Ja = ["for"], Za = {
  key: 6,
  class: "text-base font-bold"
}, ka = { class: "sr-only" }, qa = { class: "sr-only" }, _a = /* @__PURE__ */ qe({
  __name: "screen",
  props: {
    panel: {
      type: Object,
      required: !0
    }
  },
  setup(d) {
    const o = Cn(), { t: u } = zt(), e = Bt("iApi"), r = ae(), a = ae([]), n = Re(() => o.layerSource), l = Re(() => o.currStep), c = ae(), f = ae(), p = ae(0), h = ae(!1), g = ae(!1), m = ae(!1), b = ae(!1), S = ae(!1), T = ae(!1), C = ae(!1), E = ae(!0), j = ae(""), F = ae(""), R = ae([]), I = Xe([
      {
        value: le.FEATURE,
        label: u("wizard.layerType.esriFeature")
      },
      {
        value: le.MAPIMAGE,
        label: u("wizard.layerType.esriMapImage")
      },
      {
        value: le.TILE,
        label: u("wizard.layerType.esriTile")
      },
      {
        value: le.IMAGERY,
        label: u("wizard.layerType.esriImagery")
      },
      {
        value: le.WMS,
        label: u("wizard.layerType.ogcWms")
      },
      {
        value: le.WFS,
        label: u("wizard.layerType.ogcWfs")
      }
    ]), M = Xe([
      {
        value: le.GEOJSON,
        label: u("wizard.fileType.geojson")
      },
      {
        value: le.SHAPEFILE,
        label: u("wizard.fileType.shapefile")
      },
      { value: le.CSV, label: u("wizard.fileType.csv") }
    ]), P = Re({
      get() {
        return o.url;
      },
      set(z) {
        o.url = z;
      }
    }), B = Re({
      get() {
        return o.fileData;
      },
      set(z) {
        o.fileData = z;
      }
    }), V = Re({
      get() {
        return o.typeSelection;
      },
      set(z) {
        o.typeSelection = z;
      }
    }), y = Re({
      get() {
        return o.layerInfo;
      },
      set(z) {
        o.layerInfo = z;
      }
    }), x = Re(() => {
      let z = e.geo.proxy !== "";
      switch (V.value) {
        case le.FEATURE:
        case le.MAPIMAGE:
        case le.TILE:
        case le.IMAGERY:
          return !z;
        case le.WFS:
          return !0;
        case le.WMS:
          return !z;
        case le.GEOJSON:
        case le.SHAPEFILE:
        case le.CSV:
          return !!(X() && !B.value);
        default:
          return !1;
      }
    });
    An(() => ((l.value === He.FORMAT || l.value === He.CONFIGURE) && (g.value = !0, o.goToStep(He.FORMAT)), !1)), $t(() => {
      a.value.push(
        e.event.on(cr.LAYER_LAYERSTATECHANGE, (z) => {
          z.layer.userAdded && (j.value = z.layer.name, C.value = z.state !== Nt.LOADING && z.state !== Nt.NEW, E.value = C.value && z.state === Nt.LOADED);
        })
      ), l.value === He.CONFIGURE && (y.value?.configOptions.includes("colour") && Oe(), S.value = !y.value?.configOptions.includes("sublayers") && !!y.value?.config.name);
    }), st(() => {
      a.value.forEach((z) => e.event.off(z));
    });
    const O = async (z) => {
      const $ = new FileReader();
      $.onload = (Q) => {
        B.value = $.result, P.value = z.name, A(Q);
      }, $.readAsArrayBuffer(z);
    }, A = (z) => {
      z?.preventDefault(), V.value = n.value.guessFormatFromURL(P.value), o.goToStep(He.FORMAT);
    }, H = async (z) => {
      z?.preventDefault(), h.value = !0, m.value = !1, T.value = !0, F.value = X() ? M.find((Q) => Q.value === V.value)?.label : I.find((Q) => Q.value === V.value)?.label;
      try {
        y.value = X() ? await n.value.fetchFileInfo(P.value, V.value, B.value) : await n.value.fetchServiceInfo(
          P.value,
          V.value,
          o.nested
        ), X() && B.value && (y.value.config.url = "");
      } catch {
        h.value = !1, m.value = !0;
        return;
      }
      const $ = V.value === le.FEATURE && !(y.value && y.value.fields);
      if (!y.value || $) {
        g.value = !0, y.value = {
          config: {
            id: "Placeholder",
            layerType: le.UNKNOWN,
            url: ""
          },
          configOptions: []
        }, h.value = !1;
        return;
      }
      Oe(), o.goToStep(He.CONFIGURE), S.value = !(y.value.configOptions.includes("sublayers") || !y.value.config.name), h.value = !1, T.value = !1;
    }, D = async (z) => {
      z?.preventDefault();
      const $ = Object.assign(y.value.config, z);
      R.value = [], F.value = "";
      const Q = e.geo.layer.createLayer($);
      e.geo.map.addLayer(Q).catch(() => {
      }), Q.userAdded = !0, e.event.emit(cr.USER_LAYER_ADDED, Q), b.value = !1, o.goToStep(He.UPLOAD);
    }, W = () => y.value?.fields.map((z) => ({
      value: z.name,
      label: z.alias || z.name
    })), G = (z) => y.value?.latLonFields[z].map(($) => ({
      value: $,
      label: $
    })), X = () => B.value || P.value.match(/\.(zip|csv|json|geojson)$/), J = (z) => {
      O(z), P.value = "";
    }, ee = (z, $) => {
      P.value = z.trim(), $ ? b.value = !0 : b.value = !1;
    }, ne = (z) => {
      V.value = z, g.value = !1;
    }, ie = (z) => {
      y.value.config.name = z.trim();
      const $ = y.value?.config.sublayers;
      ($ ? z && $.length > 0 : z.trim()) ? S.value = !0 : S.value = !1;
    }, ce = (z) => {
      y.value.config.sublayers = z, z.length > 0 && y.value?.config.name ? S.value = !0 : S.value = !1;
    }, fe = (z) => {
      if (o.nested = z, R.value = [], p.value += 1, V.value === le.MAPIMAGE) {
        y.value.layers = n.value.createLayerHierarchy(
          y.value.layersRaw,
          o.nested
        );
        const $ = new Set(
          (y.value?.config?.sublayers ?? []).map((Q) => Q.index)
        );
        o.nested ? Se(y, $) : Ne(y, $);
      } else if (V.value === le.WMS) {
        y.value.layers = n.value.mapWmsLayerList(
          y.value.layersRaw,
          o.nested
        );
        const $ = new Set((y.value?.config?.sublayers ?? []).map((Q) => Q.id));
        o.nested ? he(y, $) : ge(y, $);
      }
      ce(Ve(R.value));
    }, Se = (z, $) => {
      const Q = /* @__PURE__ */ new Map();
      for (const Y of z.value.layersRaw)
        if (Y.parentLayerId !== -1) {
          const me = Q.get(Y.parentLayerId) || [];
          me.push(Y.id), Q.set(Y.parentLayerId, me);
        }
      const k = (Y) => {
        const me = Q.get(Y);
        return me ? me.every((Ce) => Q.has(Ce) ? k(Ce) : $.has(Ce)) : !1;
      }, ue = (Y) => {
        if (k(Y))
          R.value.push(Y);
        else {
          const me = Q.get(Y);
          if (me)
            for (const Ce of me)
              $.has(Ce) && R.value.push(Ce);
        }
      };
      for (const Y of Q.keys()) ue(Y);
      for (const Y of z.value.layersRaw)
        Y.parentLayerId === -1 && !Q.has(Y.id) && $.has(Y.id) && R.value.push(Y.id);
      R.value = Array.from(new Set(R.value));
    }, he = (z, $) => {
      const Q = (Y) => !Y.layers || Y.layers.length === 0 ? $.has(Y.name) : Y.layers.every((me) => Q(me)), k = (Y) => {
        Q(Y) ? R.value.push(Y.name) : Y.layers && Y.layers.forEach(k);
      }, ue = z.value.layersRaw[0];
      ue && ue.layers && ue.layers.forEach((Y) => k(Y)), R.value = Array.from(new Set(R.value));
    }, Ne = (z, $) => {
      const Q = (k) => {
        const ue = z.value.layersRaw.filter((Y) => Y.parentLayerId === k);
        if (ue.length > 0)
          for (const Y of ue)
            $.has(Y.id) ? R.value.push(Y.id) : Q(Y.id);
        else R.value.push(k);
      };
      for (const k of z.value.layersRaw)
        $.has(k.id) && Q(k.id);
      R.value = Array.from(new Set(R.value));
    }, ge = (z, $) => {
      const Q = (ue) => {
        ue.layers && ue.layers.length > 0 ? ue.layers.forEach(Q) : R.value.push(ue.name);
      }, k = z.value.layersRaw[0];
      for (const ue of $) {
        const Y = k.layers.find((me) => me.name === ue);
        Y && Y.layers && Y.layers.length > 0 ? Q(Y) : Y && R.value.push(Y.name);
      }
      R.value = Array.from(new Set(R.value));
    }, Ve = (z) => z.map(($) => {
      switch (V.value) {
        case le.MAPIMAGE:
          return {
            index: $,
            state: { opacity: 1, visibility: !0 }
          };
        case le.WMS: {
          const Q = $.lastIndexOf("#");
          return { id: $.substring(0, Q) };
        }
        default:
          return {
            id: $
          };
      }
    }), Oe = () => {
      c.value = y.value?.config.colour ?? "#" + Math.floor(Math.random() * 16777215).toString(16).padStart(6, "0");
      do
        f.value = Math.random().toString(36).substring(2, 9);
      while (document.getElementById(f.value + "-hue-slider") !== null);
    }, Ie = (z) => {
      y.value.config.colour = z.colors.hex.substring(0, 7), Mn(() => {
        r.value.querySelector(".vacp-copy-button").style.backgroundColor = y.value?.config.colour;
      });
    }, De = () => {
      b.value = !1, o.goToStep(0);
    }, Pe = () => {
      R.value = [], S.value = !1, o.goToStep(1);
    };
    return (z, $) => {
      const Q = Ln("panel-screen");
      return q(), we(Q, { panel: d.panel }, {
        header: Te(() => [
          ke(se(K(u)("wizard.title")), 1)
        ]),
        content: Te(() => [
          Ee(Ka, { activeStep: l.value }, {
            default: Te(() => [
              Ee(Ft, {
                title: K(u)("wizard.upload.title"),
                summary: P.value
              }, {
                default: Te(() => [
                  U("form", {
                    name: "upload",
                    onSubmit: A,
                    onClick: $[1] || ($[1] = (k) => C.value = !1)
                  }, [
                    Ee(Me, {
                      type: "file",
                      name: "file",
                      label: K(u)("wizard.upload.file.label"),
                      help: K(u)("wizard.upload.file.help"),
                      onUpload: J,
                      "aria-label": K(u)("wizard.upload.file.label")
                    }, null, 8, ["label", "help", "aria-label"]),
                    $[12] || ($[12] = U("span", { class: "block text-center mb-10" }, "or", -1)),
                    Ee(Me, {
                      type: "url",
                      name: "url",
                      modelValue: P.value,
                      "onUpdate:modelValue": $[0] || ($[0] = (k) => P.value = k),
                      label: K(u)("wizard.upload.url.label"),
                      onLink: ee,
                      validation: !0,
                      "validation-messages": {
                        required: K(u)("wizard.upload.url.error.required"),
                        invalid: K(u)("wizard.upload.url.error.url")
                      },
                      "aria-label": K(u)("wizard.upload.url.label")
                    }, null, 8, ["modelValue", "label", "validation-messages", "aria-label"]),
                    Ee(Pt, {
                      onSubmit: A,
                      onCancel: De,
                      disabled: !b.value
                    }, null, 8, ["disabled"])
                  ], 32)
                ]),
                _: 1
              }, 8, ["title", "summary"]),
              Ee(Ft, {
                title: K(u)("wizard.format.title"),
                summary: F.value
              }, {
                default: Te(() => [
                  U("form", {
                    name: "format",
                    onSubmit: H
                  }, [
                    x.value ? (q(), oe("div", Ya, [
                      $[13] || ($[13] = U("svg", {
                        class: "inline-block fill-current w-16 h-16",
                        xmlns: "http://www.w3.org/2000/svg",
                        viewBox: "0 0 24 24"
                      }, [
                        U("path", {
                          d: "M0 0h24v24H0z",
                          fill: "none"
                        }),
                        U("path", { d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z" })
                      ], -1)),
                      U("span", Qa, se(K(u)("wizard.format.info.cors")), 1)
                    ])) : ve("", !0),
                    Ee(Me, {
                      type: "select",
                      name: "type",
                      modelValue: V.value,
                      "onUpdate:modelValue": $[2] || ($[2] = (k) => V.value = k),
                      onSelect: ne,
                      size: X() ? M.length : I.length,
                      label: X() ? K(u)("wizard.format.type.file") : K(u)("wizard.format.type.service"),
                      options: X() ? M : I,
                      formatError: g.value,
                      failureError: m.value,
                      validation: T.value,
                      "validation-messages": {
                        required: K(u)("wizard.format.type.error.required"),
                        invalid: K(u)("wizard.format.type.error.invalid"),
                        failure: `${K(u)("wizard.format.type.error.failure")}.${x.value ? " " + K(u)("wizard.format.warn.cors") + "." : ""}${" " + K(u)("wizard.format.warn.vpn") + "."}`
                      },
                      onKeydown: $[3] || ($[3] = dr(() => {
                      }, ["stop"])),
                      "aria-label": K(u)("wizard.format.type.service")
                    }, null, 8, ["modelValue", "size", "label", "options", "formatError", "failureError", "validation", "validation-messages", "aria-label"]),
                    Ee(Pt, {
                      onSubmit: H,
                      onCancel: $[4] || ($[4] = () => {
                        h.value = !1, g.value = !1, m.value = !1, P.value ? b.value = !0 : b.value = !1, T.value = !1, K(o).goToStep(0), F.value = "";
                      }),
                      animation: !0,
                      disabled: h.value
                    }, null, 8, ["disabled"])
                  ], 32)
                ]),
                _: 1
              }, 8, ["title", "summary"]),
              Ee(Ft, {
                title: K(u)("wizard.configure.title")
              }, {
                default: Te(() => [
                  U("form", {
                    name: "configure",
                    onSubmit: D,
                    ref_key: "formElement",
                    ref: r
                  }, [
                    y.value?.configOptions.includes("name") ? (q(), we(Me, {
                      key: 0,
                      type: "text",
                      name: "name",
                      modelValue: y.value.config.name,
                      "onUpdate:modelValue": $[5] || ($[5] = (k) => y.value.config.name = k),
                      onLink: ie,
                      label: K(u)("wizard.configure.name.label"),
                      "aria-label": K(u)("wizard.configure.name.label"),
                      validation: !0,
                      "validation-messages": {
                        required: K(u)("wizard.configure.name.error.required")
                      }
                    }, null, 8, ["modelValue", "label", "aria-label", "validation-messages"])) : ve("", !0),
                    y.value?.configOptions.includes("nameField") ? (q(), we(Me, {
                      key: 1,
                      type: "select",
                      name: "nameField",
                      modelValue: y.value.config.nameField,
                      "onUpdate:modelValue": $[6] || ($[6] = (k) => y.value.config.nameField = k),
                      label: K(u)("wizard.configure.nameField.label"),
                      "aria-label": K(u)("wizard.configure.nameField.label"),
                      defaultOption: !0,
                      options: W()
                    }, null, 8, ["modelValue", "label", "aria-label", "options"])) : ve("", !0),
                    y.value?.configOptions.includes("tooltipField") ? (q(), we(Me, {
                      key: 2,
                      type: "select",
                      name: "tooltipField",
                      modelValue: y.value.config.tooltipField,
                      "onUpdate:modelValue": $[7] || ($[7] = (k) => y.value.config.tooltipField = k),
                      label: K(u)("wizard.configure.tooltipField.label"),
                      "aria-label": K(u)("wizard.configure.tooltipField.label"),
                      options: W()
                    }, null, 8, ["modelValue", "label", "aria-label", "options"])) : ve("", !0),
                    y.value?.configOptions.includes("latField") ? (q(), we(Me, {
                      key: 3,
                      type: "select",
                      name: "latField",
                      modelValue: y.value.config.latField,
                      "onUpdate:modelValue": $[8] || ($[8] = (k) => y.value.config.latField = k),
                      defaultOption: !0,
                      label: K(u)("wizard.configure.latField.label"),
                      "aria-label": K(u)("wizard.configure.latField.label"),
                      options: G("lat")
                    }, null, 8, ["modelValue", "label", "aria-label", "options"])) : ve("", !0),
                    y.value?.configOptions.includes("longField") ? (q(), we(Me, {
                      key: 4,
                      type: "select",
                      name: "longField",
                      modelValue: y.value.config.longField,
                      "onUpdate:modelValue": $[9] || ($[9] = (k) => y.value.config.longField = k),
                      defaultOption: !0,
                      label: K(u)("wizard.configure.longField.label"),
                      "aria-label": K(u)("wizard.configure.longField.label"),
                      options: G("lon")
                    }, null, 8, ["modelValue", "label", "aria-label", "options"])) : ve("", !0),
                    y.value?.configOptions.includes("sublayers") ? (q(), oe("div", Xa, [
                      Ee(Me, {
                        type: "checkbox",
                        name: "nested",
                        onNested: fe,
                        label: K(u)("wizard.configure.sublayers.nested"),
                        "aria-label": K(u)("wizard.configure.sublayers.nested")
                      }, null, 8, ["label", "aria-label"]),
                      (q(), we(Me, {
                        type: "select",
                        key: p.value,
                        name: "sublayers",
                        modelValue: y.value.config.sublayers,
                        "onUpdate:modelValue": $[10] || ($[10] = (k) => y.value.config.sublayers = k),
                        onSelect: ce,
                        label: K(u)("wizard.configure.sublayers.label"),
                        "aria-label": K(u)("wizard.configure.sublayers.label"),
                        options: y.value.layers,
                        selectedValues: R.value,
                        sublayerOptions: Ve,
                        multiple: !0,
                        searchable: !0,
                        validation: !0,
                        "validation-messages": {
                          required: K(u)("wizard.configure.sublayers.error.required")
                        },
                        onKeydown: $[11] || ($[11] = dr(() => {
                        }, ["stop"]))
                      }, null, 8, ["modelValue", "label", "aria-label", "options", "selectedValues", "validation-messages"]))
                    ])) : ve("", !0),
                    U("label", {
                      class: "sr-only",
                      for: `${f.value}-color-hex`
                    }, se(K(u)("wizard.configure.colour.hex")), 9, Ja),
                    y.value?.configOptions.includes("colour") ? (q(), oe("label", Za, se(K(u)("wizard.configure.colour.label")), 1)) : ve("", !0),
                    y.value?.configOptions.includes("colour") ? (q(), we(K(br), {
                      key: 7,
                      "alpha-channel": "hide",
                      "visible-formats": ["hex"],
                      "default-format": "hex",
                      id: f.value,
                      color: c.value,
                      onColorChange: Ie
                    }, {
                      "hue-range-input-label": Te(() => [
                        U("span", ka, se(K(u)("wizard.configure.colour.hue")), 1)
                      ]),
                      "copy-button": Te(() => [
                        U("span", qa, se(K(u)("wizard.configure.colour.copy")), 1),
                        $[14] || ($[14] = U("svg", {
                          "aria-hidden": "true",
                          xmlns: "http://www.w3.org/2000/svg",
                          width: "15",
                          height: "15",
                          viewBox: "0 0 15 15"
                        }, [
                          U("path", {
                            d: "M5 0v2H1v13h12v-3h-1v2H2V5h10v3h1V2H9V0zm1 1h2v2h3v1H3V3h3z",
                            fill: "currentColor"
                          }),
                          U("path", {
                            d: "M10 7v2h5v2h-5v2l-3-3zM3 6h5v1H3zm0 2h3v1H3zm0 2h3v1H3zm0 2h5v1H3z",
                            fill: "currentColor"
                          })
                        ], -1))
                      ]),
                      _: 1
                    }, 8, ["id", "color"])) : ve("", !0),
                    Ee(Pt, {
                      onSubmit: D,
                      onCancel: Pe,
                      disabled: !S.value
                    }, null, 8, ["disabled"])
                  ], 544)
                ]),
                _: 1
              }, 8, ["title"])
            ]),
            _: 1
          }, 8, ["activeStep"]),
          C.value ? (q(), oe("div", {
            key: 0,
            class: Ze(["p-3 border-solid border-2", E.value ? "bg-green-100 !border-green-900" : "bg-red-100 !border-red-900"])
          }, se(j.value) + " " + se(K(u)(`wizard.upload.${E.value ? "success" : "fail"}`)), 3)) : ve("", !0)
        ]),
        _: 1
      }, 8, ["panel"]);
    };
  }
}), mo = /* @__PURE__ */ lt(_a, [["__scopeId", "data-v-085c20bf"]]);
export {
  mo as default
};
//# sourceMappingURL=screen-DdKHKxTS.js.map
