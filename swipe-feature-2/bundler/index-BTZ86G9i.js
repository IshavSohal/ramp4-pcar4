import { F as E, a as $, _, z as p, G as g } from "./main-DCRXcEHn.js";
import { defineComponent as b, inject as A, useTemplateRef as S, ref as m, computed as h, onBeforeMount as O, onMounted as x, onBeforeUnmount as k, resolveDirective as T, openBlock as C, createElementBlock as P, createElementVNode as L, normalizeStyle as M, withDirectives as B, unref as H, vModelText as I } from "vue";
import "tiny-emitter";
import "@arcgis/core/Color";
import "@arcgis/core/config";
import "@arcgis/core/core/reactiveUtils.js";
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
import "@terraformer/spatial";
import "proj4";
import "throttle-debounce";
import "pinia";
import "vue-i18n";
import "screenfull";
import "lodash.clonedeep";
import "vue-tippy";
import "linkify-html";
import "@popperjs/core";
import "@terraformer/arcgis";
import "csv2geojson";
import "redaxios";
import "await-to-js";
import "svg.js";
const N = { class: "swipe-container" }, V = ["id", "aria-valuenow", "aria-label", "content"], z = /* @__PURE__ */ b({
  __name: "swipe",
  props: {
    fixture: {
      type: E,
      required: !0
    },
    message: String
  },
  setup(f) {
    const n = A("iApi"), a = $(), e = S("slider"), s = m(45), r = m(0), t = m(0), u = h(() => {
      const o = 30 + t.value - t.value, l = e.value?.clientWidth ?? 0, v = +s.value / 90, c = (l - o) * v, y = (e.value?.getBoundingClientRect().x ?? 0) + c + (o - 4) / 2, w = new CustomEvent("MoveInput", { detail: y });
      return e.value?.dispatchEvent(w), `${y}px`;
    }), d = h(() => `${r.value}px`), i = h(() => `${-r.value / 2 - 16}px`);
    return O(() => {
      r.value = n?.$rootEl?.clientHeight ?? 1200;
    }), x(() => {
      "ontouchstart" in document.documentElement || !window.matchMedia("(pointer:fine)").matches || (e.value.style.background = "inherit"), window.addEventListener("resize", () => {
        r.value = n?.$rootEl?.clientHeight ?? r.value, t.value++, setTimeout(() => {
          t.value++;
        }, 50);
      }), e.value?.addEventListener("focus", () => a.setOpacity(0.1)), e.value?.addEventListener("blur", () => a.setOpacity(1)), e.value?.addEventListener("mouseover", () => {
        a.setOpacity(0.1), e.value.style.background = "";
      }), e.value?.addEventListener("mouseleave", () => {
        a.setOpacity(1), e.value.style.background = "inherit";
      }), e.value?.addEventListener("touchstart", () => {
        a.setOpacity(0.1), e.value.style.background = "";
      }), e.value?.addEventListener("touchend", () => {
        a.setOpacity(1), e.value.style.background = "";
      }), setTimeout(() => {
        t.value++;
      }, 50);
    }), k(() => {
      window.removeEventListener("resize", () => {
        r.value = n?.$rootEl?.clientHeight ?? r.value, t.value++, setTimeout(() => {
          t.value++;
        }, 50);
      }), e.value?.removeEventListener("focus", () => a.setOpacity(0.1)), e.value?.removeEventListener("blur", () => a.setOpacity(1)), e.value?.removeEventListener("mouseover", () => {
        a.setOpacity(0.1), e.value.style.background = "";
      }), e.value?.removeEventListener("mouseleave", () => {
        a.setOpacity(1), e.value.style.background = "inherit";
      }), e.value?.removeEventListener("touchstart", () => {
        a.setOpacity(0.1), e.value.style.background = "";
      }), e.value?.removeEventListener("touchend", () => {
        a.setOpacity(1), e.value.style.background = "";
      });
    }), (o, l) => {
      const v = T("tippy");
      return C(), P("div", N, [
        L("div", {
          id: "verticalLine",
          style: M({ left: u.value, height: d.value, bottom: i.value })
        }, null, 4),
        B(L("input", {
          "onUpdate:modelValue": l[0] || (l[0] = (c) => s.value = c),
          id: "layerSlider" + H(n)?.$element._uid,
          class: "layerSliderElement",
          type: "range",
          ref_key: "slider",
          ref: e,
          min: "0",
          "aria-valuemin": "0",
          "aria-valuemax": "90",
          "aria-valuenow": s.value,
          "aria-label": o.$t("map.layerSwipe.label"),
          max: "90",
          step: "0.5",
          content: o.$t("map.layerSwipe.drag")
        }, null, 8, V), [
          [I, s.value],
          [v, { followCursor: !0 }]
        ])
      ]);
    };
  }
}), D = /* @__PURE__ */ _(z, [["__scopeId", "data-v-9b69fb25"]]);
class _e extends E {
  addLeadingLayer;
  addTrailingLayer;
  async added() {
    const { el: n, destroy: a } = this.mount(D, {
      app: this.$element,
      props: { message: "This is a swipe.", fixture: this }
    });
    this.$vApp.$el.appendChild(n.childNodes[0]);
    const e = await p.Collection(), s = await p.Collection();
    await this.$iApi.geo.map.viewPromise;
    let r = this.$iApi.geo.map.esriView, t = await p.Swipe({ view: r, leadingLayers: e, trailingLayers: s, position: 50 });
    const u = "#layerSlider" + this.$element._uid, d = this.$vApp.$el.querySelector(u);
    this.removed = () => {
      this.$vApp.$el.removeChild(n.childNodes[0]), t.destroy(), a();
    }, d?.addEventListener("MoveInput", (i) => {
      const o = i;
      t.position = o.detail / this.$iApi?.$rootEl.clientWidth * 100;
    }), this.$iApi.event.on(g.LAYER_RELOAD_END, (i) => {
      t.trailingLayers.forEach((o) => {
        o.id === i.id && (t.trailingLayers.remove(o), this.addTrailingLayer(i));
      }), t.leadingLayers.forEach((o) => {
        o.id === i.id && (t.leadingLayers.remove(o), this.addLeadingLayer(i));
      });
    }), this.$iApi.event.on(g.MAP_BASEMAPCHANGE, async (i) => {
      if (i.schemaChanged) {
        const o = t.position;
        t.destroy(), r = this.$iApi.geo.map.esriView, t = await p.Swipe({ view: r, leadingLayers: e, trailingLayers: s, position: o });
      }
    }), this.addTrailingLayer = (i) => {
      i.esriLayer && t.trailingLayers.add(i.esriLayer);
    }, this.addLeadingLayer = (i) => {
      i.esriLayer && t.leadingLayers.add(i.esriLayer);
    };
  }
}
export {
  _e as default
};
