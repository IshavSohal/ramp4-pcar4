import { defineComponent as _, inject as $, useTemplateRef as h, ref as y, computed as u, onBeforeMount as x, onMounted as S, onBeforeUnmount as O, resolveDirective as A, openBlock as B, createElementBlock as W, createElementVNode as f, normalizeStyle as b, withDirectives as C, vModelText as H } from "vue";
import "tiny-emitter";
import { F as E, a as I, _ as M } from "./main-CkQMIfRk.js";
import "@arcgis/core/Basemap";
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
import "@arcgis/core/layers/FeatureLayer";
import "@arcgis/core/layers/GraphicsLayer";
import "@arcgis/core/layers/ImageryLayer";
import "@arcgis/core/layers/MapImageLayer";
import "@arcgis/core/layers/OpenStreetMapLayer";
import "@arcgis/core/layers/TileLayer";
import "@arcgis/core/layers/WMSLayer";
import "@arcgis/core/layers/support/Field";
import "@arcgis/core/Map";
import "@arcgis/core/renderers/SimpleRenderer";
import "@arcgis/core/renderers/support/jsonUtils";
import "@arcgis/core/request";
import "@arcgis/core/rest/query";
import "@arcgis/core/rest/support/Query";
import "@arcgis/core/symbols/PictureMarkerSymbol";
import "@arcgis/core/symbols/SimpleFillSymbol";
import "@arcgis/core/symbols/SimpleLineSymbol";
import "@arcgis/core/symbols/SimpleMarkerSymbol";
import "@arcgis/core/symbols/support/jsonUtils";
import "@arcgis/core/layers/support/FeatureFilter";
import "@arcgis/core/views/MapView";
import "@arcgis/core/webmap/background/ColorBackground";
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
import T from "@arcgis/core/widgets/Swipe.js";
import g from "@arcgis/core/core/Collection";
const k = { class: "swipe-container" }, P = ["content"], V = /* @__PURE__ */ _({
  __name: "swipe",
  props: {
    fixture: {
      type: E,
      required: !0
    },
    message: String
  },
  setup(w) {
    const r = $("iApi"), t = I(), e = h("slider"), i = y(50), o = y(0), n = h("line"), s = u(() => {
      const l = e.value?.clientWidth ?? 0, m = +i.value / 90, d = (l - 30) * m, v = (e.value?.getBoundingClientRect().x ?? 0) + d + 27 / 2, L = new CustomEvent("MoveInput", { detail: v });
      return e.value?.dispatchEvent(L), `${v}px`;
    }), a = u(() => `${o.value}px`), c = u(() => `${-65 * (o.value / 1270)}px`);
    return x(() => {
      o.value = r?.$rootEl?.clientHeight ?? 1200;
    }), S(() => {
      window.addEventListener("resize", () => {
        o.value = r?.$rootEl?.clientHeight ?? o.value, i.value = +i.value + 1e-9;
      }), e.value?.addEventListener("focus", () => t.setOpacity(0.1)), e.value?.addEventListener("blur", () => t.setOpacity(1)), e.value?.addEventListener("mouseover", () => t.setOpacity(0.1)), e.value?.addEventListener("mouseleave", () => t.setOpacity(1));
    }), O(() => {
      window.removeEventListener("resize", () => {
        o.value = r?.$rootEl?.clientHeight ?? o.value, i.value = +i.value + 1e-9;
      }), e.value?.removeEventListener("focus", () => t.setOpacity(0.1)), e.value?.removeEventListener("blur", () => t.setOpacity(1)), e.value?.removeEventListener("mouseover", () => t.setOpacity(0.1)), e.value?.removeEventListener("mouseleave", () => t.setOpacity(1));
    }), (p, l) => {
      const m = A("tippy");
      return B(), W("div", k, [
        f("div", {
          id: "verticalLine",
          style: b({ left: s.value, height: a.value, bottom: c.value }),
          ref_key: "line",
          ref: n
        }, null, 4),
        C(f("input", {
          "onUpdate:modelValue": l[0] || (l[0] = (d) => i.value = d),
          id: "layerSlider",
          type: "range",
          ref_key: "slider",
          ref: e,
          min: "0",
          max: "90",
          step: "0.5",
          content: p.$t("map.layerSwipe.drag")
        }, null, 8, P), [
          [H, i.value],
          [m, { followCursor: !0 }]
        ])
      ]);
    };
  }
}), z = /* @__PURE__ */ M(V, [["__scopeId", "data-v-532ace35"]]);
class Fe extends E {
  added() {
    console.log(`[fixture] ${this.id} added`);
    const { el: r, destroy: t } = this.mount(z, {
      app: this.$element,
      props: { message: "This is a swipe.", fixture: this }
    });
    this.$vApp.$el.appendChild(r.childNodes[0]), setTimeout(() => {
      const e = this.$iApi.geo.map.esriView, i = this.$iApi.geo.layer.getLayer("Nature")?.esriLayer, o = this.$iApi.geo.layer.getLayer("Water")?.esriLayer, n = new g();
      n.add(i);
      const s = new g();
      s.add(o);
      const a = new T({
        view: e,
        leadingLayers: n,
        trailingLayers: s,
        position: 50
      });
      document.getElementById("layerSlider")?.addEventListener("MoveInput", (p) => {
        a.position = p.detail / this.$iApi?.$rootEl.clientWidth * 100;
      });
    }, 4e3), this.removed = () => {
      console.log(`[fixture] ${this.id} removed`), t();
    };
  }
}
export {
  Fe as default
};
