import { defineComponent as O, inject as $, useTemplateRef as x, ref as v, computed as c, onBeforeMount as k, onMounted as S, onBeforeUnmount as A, resolveDirective as C, openBlock as T, createElementBlock as M, createElementVNode as d, normalizeStyle as P, withDirectives as B, unref as z, vModelText as H } from "vue";
import { F as E, a as N, G as m, _ as R } from "./main-D__TM1kv.js";
import "pinia";
import "vue-i18n";
import "screenfull";
import "lodash.clonedeep";
import "vue-tippy";
import "linkify-html";
import "@popperjs/core";
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
import "@arcgis/map-components/components/arcgis-swipe";
import "deepmerge";
import "@terraformer/spatial";
import "proj4";
import "throttle-debounce";
import "@terraformer/arcgis";
import "csv2geojson";
import "redaxios";
import "await-to-js";
import "svg.js";
import "tiny-emitter";
const W = { class: "swipe-container" }, V = ["id", "aria-valuenow", "aria-label", "content"], D = ["swipe-position", "view"], F = /* @__PURE__ */ O({
  __name: "swipe",
  props: {
    fixture: {
      type: E,
      required: !0
    },
    message: String
  },
  setup(L) {
    const a = $("iApi"), r = N(), t = x("slider"), p = v(45), l = v(0), u = v(0), y = v(50), h = v(), i = v(), w = c(() => {
      const s = 30 + u.value - u.value, o = t.value?.clientWidth ?? 0, e = +p.value / 90, n = (o - s) * e, f = (t.value?.getBoundingClientRect().x ?? 0) + n + (s - 4) / 2;
      return a && (y.value = f / a.$rootEl.clientWidth * 100), `${f}px`;
    }), _ = c(() => `${l.value}px`), b = c(() => `${-l.value / 2 - 16}px`);
    k(() => {
      l.value = a?.$rootEl?.clientHeight ?? 1200;
    }), S(async () => {
      "ontouchstart" in document.documentElement || !window.matchMedia("(pointer:fine)").matches || (t.value.style.background = "inherit"), window.addEventListener("resize", () => {
        l.value = a?.$rootEl?.clientHeight ?? l.value, u.value++, setTimeout(() => {
          u.value++;
        }, 50);
      }), t.value?.addEventListener("focus", () => r.setOpacity(0.1)), t.value?.addEventListener("blur", () => r.setOpacity(1)), t.value?.addEventListener("mouseover", () => {
        r.setOpacity(0.1), t.value.style.background = "";
      }), t.value?.addEventListener("mouseleave", () => {
        r.setOpacity(1), t.value.style.background = "inherit";
      }), t.value?.addEventListener("touchstart", () => {
        r.setOpacity(0.1), t.value.style.background = "";
      }), t.value?.addEventListener("touchend", () => {
        r.setOpacity(1), t.value.style.background = "";
      }), setTimeout(() => {
        u.value++;
      }, 50), await g(), a?.event.on(m.MAP_BASEMAPCHANGE, async (o) => {
        o.schemaChanged && (i.value?.trailingLayers.forEach((e) => {
          i.value?.trailingLayers.remove(e);
        }), i.value?.leadingLayers.forEach((e) => {
          i.value?.leadingLayers.remove(e);
        }), await g());
      }), a?.event.on(m.LAYER_RELOAD_END, (o) => {
        i.value?.trailingLayers.forEach((e) => {
          e.id === o.id && (i.value?.trailingLayers.remove(e), i.value?.trailingLayers.add(o.esriLayer));
        }), i.value?.leadingLayers.forEach((e) => {
          e.id === o.id && (i.value?.leadingLayers.remove(e), i.value?.leadingLayers.add(o.esriLayer));
        });
      }), a?.event.on(m.LAYER_REMOVE, (o) => {
        i.value?.trailingLayers.forEach((e) => {
          e.id === o.id && i.value?.trailingLayers.remove(e);
        }), i.value?.leadingLayers.forEach((e) => {
          e.id === o.id && i.value?.leadingLayers.remove(e);
        });
      });
    });
    const g = async () => {
      await a?.geo.map.viewPromise, h.value = a?.geo.map.esriView;
      const s = ["Nature", "WFSLayer"], o = ["Water", "GeoMet"];
      s.forEach((e) => {
        a?.geo.layer.awaitLayer(e, !0).then((n) => {
          n.esriLayer ? i.value?.trailingLayers.add(n.esriLayer) : console.warn(`Invalid layer instance: ${e}`);
        });
      }), o.forEach((e) => {
        a?.geo.layer.awaitLayer(e, !0).then((n) => {
          n.esriLayer ? i.value?.leadingLayers.add(n.esriLayer) : console.warn(`Invalid layer instance: ${e}`);
        });
      });
    };
    return A(() => {
      window.removeEventListener("resize", () => {
        l.value = a?.$rootEl?.clientHeight ?? l.value, u.value++, setTimeout(() => {
          u.value++;
        }, 50);
      }), t.value?.removeEventListener("focus", () => r.setOpacity(0.1)), t.value?.removeEventListener("blur", () => r.setOpacity(1)), t.value?.removeEventListener("mouseover", () => {
        r.setOpacity(0.1), t.value.style.background = "";
      }), t.value?.removeEventListener("mouseleave", () => {
        r.setOpacity(1), t.value.style.background = "inherit";
      }), t.value?.removeEventListener("touchstart", () => {
        r.setOpacity(0.1), t.value.style.background = "";
      }), t.value?.removeEventListener("touchend", () => {
        r.setOpacity(1), t.value.style.background = "";
      });
    }), (s, o) => {
      const e = C("tippy");
      return T(), M("div", W, [
        d("div", {
          id: "verticalLine",
          style: P({ left: w.value, height: _.value, bottom: b.value })
        }, null, 4),
        B(d("input", {
          "onUpdate:modelValue": o[0] || (o[0] = (n) => p.value = n),
          id: "layerSlider" + z(a)?.$element._uid,
          class: "layerSliderElement",
          type: "range",
          ref_key: "slider",
          ref: t,
          min: "0",
          "aria-valuemin": "0",
          "aria-valuemax": "90",
          "aria-valuenow": p.value,
          "aria-label": s.$t("map.layerSwipe.label"),
          max: "90",
          step: "0.5",
          content: s.$t("map.layerSwipe.drag"),
          style: { "z-index": 10 }
        }, null, 8, V), [
          [H, p.value],
          [e, { followCursor: !0 }]
        ]),
        d("arcgis-swipe", {
          direction: "horizontal",
          "swipe-position": y.value,
          view: h.value,
          "auto-destroy-disable": "",
          ref_key: "swipeComponent",
          ref: i
        }, null, 8, D)
      ]);
    };
  }
}), G = /* @__PURE__ */ R(F, [["__scopeId", "data-v-3c4fa65f"]]);
class ke extends E {
  async added() {
    const { el: a, destroy: r } = this.mount(G, {
      app: this.$element,
      props: { message: "This is a swipe.", fixture: this }
    });
    a.childNodes[0] && this.$vApp.$el.appendChild(a.childNodes[0]), this.removed = () => {
      r();
    };
  }
}
export {
  ke as default
};
