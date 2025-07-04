import { F as g, a as E, _ as L, z as u } from "./main-DQwTeDd_.js";
import { defineComponent as _, inject as S, useTemplateRef as x, ref as c, computed as h, onBeforeMount as A, onMounted as C, onBeforeUnmount as O, resolveDirective as b, openBlock as B, createElementBlock as T, createElementVNode as w, normalizeStyle as I, withDirectives as P, unref as H, vModelText as M } from "vue";
import "tiny-emitter";
import "@arcgis/core/Color";
import "@arcgis/core/config";
import "@arcgis/core/geometry/Extent";
import "@arcgis/core/geometry/Multipoint";
import "@arcgis/core/geometry/Point";
import "@arcgis/core/geometry/Polygon";
import "@arcgis/core/geometry/Polyline";
import "@arcgis/core/geometry/SpatialReference";
import "@arcgis/core/geometry/support/jsonUtils";
import "@arcgis/core/Graphic";
import "@arcgis/core/request";
import "@arcgis/core/symbols/PictureMarkerSymbol";
import "@arcgis/core/symbols/SimpleFillSymbol";
import "@arcgis/core/symbols/SimpleLineSymbol";
import "@arcgis/core/symbols/SimpleMarkerSymbol";
import "@arcgis/core/symbols/support/jsonUtils";
import "deepmerge";
import "terraformer";
import "proj4";
import "throttle-debounce";
import "pinia";
import "vue-i18n";
import "screenfull";
import "lodash.clonedeep";
import "vue-tippy";
import "linkify-html";
import "@popperjs/core";
import "terraformer-arcgis-parser";
import "csv2geojson";
import "redaxios";
import "await-to-js";
import "svg.js";
const V = { class: "swipe-container" }, W = ["id", "aria-valuenow", "aria-label", "content"], z = /* @__PURE__ */ _({
  __name: "swipe",
  props: {
    fixture: {
      type: g,
      required: !0
    },
    message: String
  },
  setup($) {
    const a = S("iApi"), i = E(), e = x("slider"), r = c(45), t = c(0), o = c(0), m = h(() => {
      const n = 30 + o.value - o.value, l = e.value?.clientWidth ?? 0, p = +r.value / 90, v = (l - n) * p, y = (e.value?.getBoundingClientRect().x ?? 0) + v + (n - 4) / 2, f = new CustomEvent("MoveInput", { detail: y });
      return e.value?.dispatchEvent(f), `${y}px`;
    }), s = h(() => `${t.value}px`), d = h(() => `${-65 * (t.value / 1270)}px`);
    return A(() => {
      t.value = a?.$rootEl?.clientHeight ?? 1200;
    }), C(() => {
      window.addEventListener("resize", () => {
        t.value = a?.$rootEl?.clientHeight ?? t.value, o.value++, setTimeout(() => {
          o.value++;
        }, 50);
      }), e.value?.addEventListener("focus", () => i.setOpacity(0.1)), e.value?.addEventListener("blur", () => i.setOpacity(1)), e.value?.addEventListener("mouseover", () => i.setOpacity(0.1)), e.value?.addEventListener("mouseleave", () => i.setOpacity(1)), setTimeout(() => {
        o.value++;
      }, 50);
    }), O(() => {
      window.removeEventListener("resize", () => {
        t.value = a?.$rootEl?.clientHeight ?? t.value, o.value++, setTimeout(() => {
          o.value++;
        }, 50);
      }), e.value?.removeEventListener("focus", () => i.setOpacity(0.1)), e.value?.removeEventListener("blur", () => i.setOpacity(1)), e.value?.removeEventListener("mouseover", () => i.setOpacity(0.1)), e.value?.removeEventListener("mouseleave", () => i.setOpacity(1));
    }), (n, l) => {
      const p = b("tippy");
      return B(), T("div", V, [
        w("div", {
          id: "verticalLine",
          style: I({ left: m.value, height: s.value, bottom: d.value })
        }, null, 4),
        P(w("input", {
          "onUpdate:modelValue": l[0] || (l[0] = (v) => r.value = v),
          id: "layerSlider" + H(a)?.$element._uid,
          class: "layerSliderElement",
          type: "range",
          ref_key: "slider",
          ref: e,
          min: "0",
          "aria-valuemin": "0",
          "aria-valuemax": "90",
          "aria-valuenow": r.value,
          "aria-label": n.$t("map.layerSwipe.label"),
          max: "90",
          step: "0.5",
          content: n.$t("map.layerSwipe.drag")
        }, null, 8, W), [
          [M, r.value],
          [p, { followCursor: !0 }]
        ])
      ]);
    };
  }
}), N = /* @__PURE__ */ L(z, [["__scopeId", "data-v-e91788a6"]]);
class Ee extends g {
  async added() {
    const { el: a, destroy: i } = this.mount(N, {
      app: this.$element,
      props: { message: "This is a swipe.", fixture: this }
    });
    this.$vApp.$el.appendChild(a.childNodes[0]);
    const e = await u.Collection(), r = await u.Collection();
    await this.$iApi.geo.map.viewPromise;
    let t = this.$iApi.geo.map.esriView;
    const o = this.$iApi.geo.layer.getLayer("Nature")?.esriLayer, m = this.$iApi.geo.layer.getLayer("Water")?.esriLayer;
    e.add(o), r.add(m);
    let s = await u.Swipe({ view: t, leadingLayers: e, trailingLayers: r, position: 50 });
    const d = "#layerSlider" + this.$element._uid;
    this.$vApp.$el.querySelector(d)?.addEventListener("MoveInput", (l) => {
      const p = l;
      s.position = p.detail / this.$iApi?.$rootEl.clientWidth * 100;
    }), window.addEventListener("BasemapSchemaChange", async () => {
      s.destroy(), t = this.$iApi.geo.map.esriView, s = await u.Swipe({ view: t, leadingLayers: e, trailingLayers: r, position: 50 });
    }), this.removed = () => {
      this.$vApp.$el.removeChild(a.childNodes[0]), s.destroy(), i();
    };
  }
}
export {
  Ee as default
};
