import { bF as defineComponent, bG as useI18n, bH as inject, bI as ref, iB as reactive, bJ as onMounted, fO as GlobalEvents, bK as onBeforeUnmount, bW as createElementBlock, fG as createBaseVNode, bS as toDisplayString, bT as unref, bQ as openBlock, id as _export_sfc, bA as FixtureInstance } from './main-6KLKyala.js';
import './preload-helper-dJJaZANz.js';

const messages = {"en":{"panguard.instructions":"Use two fingers to pan the map"},"fr":{"panguard.instructions":"Utilisez deux doigts pour faire un panoramique de la carte"}};

const _hoisted_1 = { class: "pg-label" };
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "map-panguard",
  setup(__props) {
    const { t } = useI18n();
    const iApi = inject("iApi");
    const panGuard = ref();
    const timeoutID = ref(-1);
    const esriHandlers = reactive([]);
    const rampHanders = reactive([]);
    onMounted(() => {
      setup();
      rampHanders.push(
        iApi.event.on(GlobalEvents.MAP_CREATED, () => {
          setup();
        })
      );
      rampHanders.push(
        iApi.event.on(GlobalEvents.MAP_DESTROYED, () => {
          esriHandlers.forEach((h) => h.remove());
        })
      );
      rampHanders.push(
        iApi.event.on(GlobalEvents.MAP_REFRESH_START, () => {
          esriHandlers.forEach((h) => h.remove());
        })
      );
      rampHanders.push(
        iApi.event.on(GlobalEvents.MAP_REFRESH_END, () => {
          setup();
        })
      );
    });
    onBeforeUnmount(() => {
      rampHanders.forEach((h) => iApi.event.off(h));
      esriHandlers.forEach((h) => h.remove());
    });
    const setup = () => {
      const pointers = /* @__PURE__ */ new Map();
      iApi.geo.map.viewPromise.then(() => {
        esriHandlers.push(
          iApi.geo.map.esriView.on("pointer-down", (e) => {
            if (e.pointerType !== "touch") return;
            pointers.set(e.pointerId, { x: e.x, y: e.y });
          })
        );
        esriHandlers.push(
          //@ts-ignore
          iApi.geo.map.esriView.on(["pointer-up", "pointer-leave"], (e) => {
            if (e.pointerType !== "touch") return;
            window.setTimeout(() => {
              pointers.delete(e.pointerId);
            }, 200);
          })
        );
        esriHandlers.push(
          iApi.geo.map.esriView.on("pointer-move", (e) => {
            const { pointerId, pointerType, x, y } = e;
            const pointer = pointers.get(pointerId);
            if (!pointer || pointerType !== "touch" || pointers.size !== 1) {
              panGuard.value.classList.remove("pg-active");
              return;
            }
            const distance = Math.sqrt(Math.pow(x - pointer.x, 2) + Math.pow(y - pointer.y, 2));
            if (distance < 20) return;
            panGuard.value.classList.add("pg-active");
            if (timeoutID.value !== -1) {
              clearTimeout(timeoutID.value);
            }
            timeoutID.value = window.setTimeout(() => {
              panGuard.value.classList.remove("pg-active");
            }, 2e3);
            window.scrollBy(pointer.x - x, pointer.y - y);
          })
        );
      });
    };
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: "pg",
        ref_key: "panGuard",
        ref: panGuard
      }, [
        createBaseVNode("p", _hoisted_1, toDisplayString(unref(t)("panguard.instructions")), 1)
      ], 512);
    };
  }
});

const PanguardV = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-5b2a52cc"]]);

class PanguardFixture extends FixtureInstance {
  added() {
    Object.entries(messages).forEach((value) => this.$iApi.$i18n.mergeLocaleMessage(...value));
    const { destroy, el } = this.mount(PanguardV, {
      app: this.$element
    });
    const innerShell = this.$vApp.$el.getElementsByClassName("inner-shell")[0];
    innerShell.appendChild(el.childNodes[0]);
    this.removed = () => {
      destroy();
    };
  }
}

export { PanguardFixture as default };