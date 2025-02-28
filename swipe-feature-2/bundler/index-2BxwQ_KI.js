import { F as w, a as L, _ as $, z as p } from "./main-B0zhMyDy.js";
import { defineComponent as b, inject as _, useTemplateRef as S, ref as m, computed as h, onBeforeMount as O, onMounted as k, onBeforeUnmount as x, resolveDirective as A, openBlock as C, createElementBlock as B, createElementVNode as g, normalizeStyle as M, withDirectives as P, unref as T, vModelText as I } from "vue";
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
      type: w,
      required: !0
    },
    message: String
  },
  setup(E) {
    const r = _("iApi"), t = L(), e = S("slider"), n = m(45), o = m(0), i = m(0), u = h(() => {
      const a = 30 + i.value - i.value, l = e.value?.clientWidth ?? 0, v = +n.value / 90, c = (l - a) * v, y = (e.value?.getBoundingClientRect().x ?? 0) + c + (a - 4) / 2, f = new CustomEvent("MoveInput", { detail: y });
      return e.value?.dispatchEvent(f), `${y}px`;
    }), d = h(() => `${o.value}px`), s = h(() => `${-o.value / 2 - 16}px`);
    return O(() => {
      o.value = r?.$rootEl?.clientHeight ?? 1200;
    }), k(() => {
      /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) || (e.value.style.background = "inherit"), window.addEventListener("resize", () => {
        o.value = r?.$rootEl?.clientHeight ?? o.value, i.value++, setTimeout(() => {
          i.value++;
        }, 50);
      }), e.value?.addEventListener("focus", () => t.setOpacity(0.1)), e.value?.addEventListener("blur", () => t.setOpacity(1)), e.value?.addEventListener("mouseover", () => {
        t.setOpacity(0.1), e.value.style.background = "";
      }), e.value?.addEventListener("mouseleave", () => {
        t.setOpacity(1), e.value.style.background = "inherit";
      }), e.value?.addEventListener("touchstart", () => {
        t.setOpacity(0.1), e.value.style.background = "";
      }), e.value?.addEventListener("touchend", () => {
        t.setOpacity(1), e.value.style.background = "";
      }), setTimeout(() => {
        i.value++;
      }, 50);
    }), x(() => {
      window.removeEventListener("resize", () => {
        o.value = r?.$rootEl?.clientHeight ?? o.value, i.value++, setTimeout(() => {
          i.value++;
        }, 50);
      }), e.value?.removeEventListener("focus", () => t.setOpacity(0.1)), e.value?.removeEventListener("blur", () => t.setOpacity(1)), e.value?.removeEventListener("mouseover", () => {
        t.setOpacity(0.1), e.value.style.background = "";
      }), e.value?.removeEventListener("mouseleave", () => {
        t.setOpacity(1), e.value.style.background = "inherit";
      }), e.value?.removeEventListener("touchstart", () => {
        t.setOpacity(0.1), e.value.style.background = "";
      }), e.value?.removeEventListener("touchend", () => {
        t.setOpacity(1), e.value.style.background = "";
      });
    }), (a, l) => {
      const v = A("tippy");
      return C(), B("div", H, [
        g("div", {
          id: "verticalLine",
          style: M({ left: u.value, height: d.value, bottom: s.value })
        }, null, 4),
        P(g("input", {
          "onUpdate:modelValue": l[0] || (l[0] = (c) => n.value = c),
          id: "layerSlider" + T(r)?.$element._uid,
          class: "layerSliderElement",
          type: "range",
          ref_key: "slider",
          ref: e,
          min: "0",
          "aria-valuemin": "0",
          "aria-valuemax": "90",
          "aria-valuenow": n.value,
          "aria-label": a.$t("map.layerSwipe.label"),
          max: "90",
          step: "0.5",
          content: a.$t("map.layerSwipe.drag")
        }, null, 8, V), [
          [I, n.value],
          [v, { followCursor: !0 }]
        ])
      ]);
    };
  }
}), W = /* @__PURE__ */ $(z, [["__scopeId", "data-v-b75e34a1"]]);
class Le extends w {
  addLeadingLayers;
  addTrailingLayers;
  async added() {
    const { el: r, destroy: t } = this.mount(W, {
      app: this.$element,
      props: { message: "This is a swipe.", fixture: this }
    });
    this.$vApp.$el.appendChild(r.childNodes[0]);
    const e = await p.Collection(), n = await p.Collection();
    await this.$iApi.geo.map.viewPromise;
    let o = this.$iApi.geo.map.esriView, i = await p.Swipe({ view: o, leadingLayers: e, trailingLayers: n, position: 50 });
    const u = "#layerSlider" + this.$element._uid, d = this.$vApp.$el.querySelector(u);
    this.removed = () => {
      this.$vApp.$el.removeChild(r.childNodes[0]), i.destroy(), t();
    }, d?.addEventListener("MoveInput", (s) => {
      const a = s;
      i.position = a.detail / this.$iApi?.$rootEl.clientWidth * 100;
    }), window.addEventListener("BasemapSchemaChange", async () => {
      i.destroy(), o = this.$iApi.geo.map.esriView, i = await p.Swipe({ view: o, leadingLayers: e, trailingLayers: n, position: 50 });
    }), this.addTrailingLayers = (s) => {
      s.forEach((a) => {
        a && i.trailingLayers.add(a);
      });
    }, this.addLeadingLayers = (s) => {
      s.forEach((a) => {
        a && i.leadingLayers.add(a);
      });
    };
  }
}
export {
  Le as default
};
