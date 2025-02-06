import { F as L, a as f, _ as $, z as p } from "./main-15qpD8fM.js";
import { defineComponent as b, inject as _, useTemplateRef as S, ref as c, computed as m, onBeforeMount as O, onMounted as A, onBeforeUnmount as k, resolveDirective as x, openBlock as C, createElementBlock as B, createElementVNode as g, normalizeStyle as M, withDirectives as P, unref as T, vModelText as I } from "vue";
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
const H = { class: "swipe-container" }, V = ["id", "aria-valuenow", "aria-label", "content"], z = /* @__PURE__ */ b({
  __name: "swipe",
  props: {
    fixture: {
      type: L,
      required: !0
    },
    message: String
  },
  setup(w) {
    const n = _("iApi"), i = f(), e = S("slider"), s = c(45), r = c(0), t = c(0), u = m(() => {
      const a = 30 + t.value - t.value, o = e.value?.clientWidth ?? 0, d = +s.value / 90, v = (o - a) * d, h = (e.value?.getBoundingClientRect().x ?? 0) + v + (a - 4) / 2, E = new CustomEvent("MoveInput", { detail: h });
      return e.value?.dispatchEvent(E), `${h}px`;
    }), y = m(() => `${r.value}px`), l = m(() => `${-r.value / 2 - 16}px`);
    return O(() => {
      r.value = n?.$rootEl?.clientHeight ?? 1200;
    }), A(() => {
      /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) || (e.value.style.background = "inherit"), window.addEventListener("resize", () => {
        r.value = n?.$rootEl?.clientHeight ?? r.value, t.value++, setTimeout(() => {
          t.value++;
        }, 50);
      }), e.value?.addEventListener("focus", () => i.setOpacity(0.1)), e.value?.addEventListener("blur", () => i.setOpacity(1)), e.value?.addEventListener("mouseover", () => {
        i.setOpacity(0.1), e.value.style.background = "";
      }), e.value?.addEventListener("mouseleave", () => {
        i.setOpacity(1), e.value.style.background = "inherit";
      }), e.value?.addEventListener("touchstart", () => {
        i.setOpacity(0.1), e.value.style.background = "";
      }), e.value?.addEventListener("touchend", () => {
        i.setOpacity(1), e.value.style.background = "";
      }), setTimeout(() => {
        t.value++;
      }, 50);
    }), k(() => {
      window.removeEventListener("resize", () => {
        r.value = n?.$rootEl?.clientHeight ?? r.value, t.value++, setTimeout(() => {
          t.value++;
        }, 50);
      }), e.value?.removeEventListener("focus", () => i.setOpacity(0.1)), e.value?.removeEventListener("blur", () => i.setOpacity(1)), e.value?.removeEventListener("mouseover", () => {
        i.setOpacity(0.1), e.value.style.background = "";
      }), e.value?.removeEventListener("mouseleave", () => {
        i.setOpacity(1), e.value.style.background = "inherit";
      }), e.value?.removeEventListener("touchstart", () => {
        i.setOpacity(0.1), e.value.style.background = "";
      }), e.value?.removeEventListener("touchend", () => {
        i.setOpacity(1), e.value.style.background = "";
      });
    }), (a, o) => {
      const d = x("tippy");
      return C(), B("div", H, [
        g("div", {
          id: "verticalLine",
          style: M({ left: u.value, height: y.value, bottom: l.value })
        }, null, 4),
        P(g("input", {
          "onUpdate:modelValue": o[0] || (o[0] = (v) => s.value = v),
          id: "layerSlider" + T(n)?.$element._uid,
          class: "layerSliderElement",
          type: "range",
          ref_key: "slider",
          ref: e,
          min: "0",
          "aria-valuemin": "0",
          "aria-valuemax": "90",
          "aria-valuenow": s.value,
          "aria-label": a.$t("map.layerSwipe.label"),
          max: "90",
          step: "0.5",
          content: a.$t("map.layerSwipe.drag")
        }, null, 8, V), [
          [I, s.value],
          [d, { followCursor: !0 }]
        ])
      ]);
    };
  }
}), W = /* @__PURE__ */ $(z, [["__scopeId", "data-v-33e32b75"]]);
class fe extends L {
  addLeadingLayers;
  addTrailingLayers;
  async added() {
    const { el: n, destroy: i } = this.mount(W, {
      app: this.$element,
      props: { message: "This is a swipe.", fixture: this }
    });
    this.$vApp.$el.appendChild(n.childNodes[0]);
    const e = await p.Collection(), s = await p.Collection();
    await this.$iApi.geo.map.viewPromise;
    let r = this.$iApi.geo.map.esriView, t = await p.Swipe({ view: r, leadingLayers: e, trailingLayers: s, position: 50 });
    const u = "#layerSlider" + this.$element._uid;
    this.$vApp.$el.querySelector(u)?.addEventListener("MoveInput", (l) => {
      const a = l;
      t.position = a.detail / this.$iApi?.$rootEl.clientWidth * 100;
    }), window.addEventListener("BasemapSchemaChange", async () => {
      t.destroy(), r = this.$iApi.geo.map.esriView, t = await p.Swipe({ view: r, leadingLayers: e, trailingLayers: s, position: 50 });
    }), this.removed = () => {
      this.$vApp.$el.removeChild(n.childNodes[0]), t.destroy(), i();
    }, this.addTrailingLayers = (l) => {
      l.forEach((a) => {
        const o = this.$iApi.geo.layer.getLayer(a)?.esriLayer;
        o && t.trailingLayers.add(o);
      }), t.trailingLayers = s;
    }, this.addLeadingLayers = (l) => {
      l.forEach((a) => {
        const o = this.$iApi.geo.layer.getLayer(a)?.esriLayer;
        o && t.leadingLayers.add(o);
      });
    };
  }
}
export {
  fe as default
};
