import { c4 as defineComponent, b$ as FixtureInstance, fX as usePanelStore, f$ as useTemplateRef, c7 as ref, ca as computed, g1 as onBeforeMount, c8 as onMounted, c9 as onBeforeUnmount, cc as resolveDirective, cl as createElementBlock, fZ as createBaseVNode, je as normalizeStyle, ck as withDirectives, j2 as vModelText, cf as openBlock, iF as _export_sfc } from './main-DoQYi8g2.js';
import './preload-helper-dJJaZANz.js';

const _hoisted_1 = { class: "swipe-container" };
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "swipe",
  props: {
    fixture: {
      type: FixtureInstance,
      required: true
    },
    message: String
  },
  setup(__props) {
    const panelStore = usePanelStore();
    const slider = useTemplateRef("slider");
    const sliderPosition = ref(50);
    const innerShellHeight = ref(0);
    const line = useTemplateRef("line");
    const linePosition = computed(() => {
      const diff = +sliderPosition.value - 50;
      const position = 50 + 0.99 * diff;
      return `${position}%`;
    });
    const lineHeight = computed(() => {
      return `${innerShellHeight.value}px`;
    });
    const lineTop = computed(() => {
      return `${-innerShellHeight.value * 0.91}px`;
    });
    onBeforeMount(() => {
      const innerShell = document.querySelector(".inner-shell");
      innerShellHeight.value = innerShell?.clientHeight ?? 1e3;
    });
    onMounted(() => {
      window.addEventListener("resize", () => {
        const innerShell = document.querySelector(".inner-shell");
        innerShellHeight.value = innerShell?.clientHeight ?? innerShellHeight.value;
      });
      slider.value?.addEventListener("focus", () => panelStore.setOpacity(0.1));
      slider.value?.addEventListener("blur", () => panelStore.setOpacity(1));
      slider.value?.addEventListener("mouseover", () => panelStore.setOpacity(0.1));
      slider.value?.addEventListener("mouseleave", () => panelStore.setOpacity(1));
    });
    onBeforeUnmount(() => {
      window.removeEventListener("resize", () => {
        const innerShell = document.querySelector(".inner-shell");
        innerShellHeight.value = innerShell?.clientHeight ?? innerShellHeight.value;
      });
      slider.value?.removeEventListener("focus", () => panelStore.setOpacity(0.1));
      slider.value?.removeEventListener("blur", () => panelStore.setOpacity(1));
      slider.value?.removeEventListener("mouseover", () => panelStore.setOpacity(0.1));
      slider.value?.removeEventListener("mouseleave", () => panelStore.setOpacity(1));
    });
    return (_ctx, _cache) => {
      const _directive_tippy = resolveDirective("tippy");
      return openBlock(), createElementBlock("div", _hoisted_1, [
        createBaseVNode("div", {
          id: "verticalLine",
          style: normalizeStyle({ left: linePosition.value, height: lineHeight.value, top: lineTop.value }),
          ref_key: "line",
          ref: line
        }, null, 4),
        withDirectives(createBaseVNode("input", {
          "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => sliderPosition.value = $event),
          id: "layerSlider",
          type: "range",
          ref_key: "slider",
          ref: slider,
          min: "5",
          max: "95",
          step: "0.5"
        }, null, 512), [
          [vModelText, sliderPosition.value],
          [_directive_tippy, { content: "Drag and slide to move", followCursor: true }]
        ])
      ]);
    };
  }
});

const SwipeV = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-f1b7a6d6"]]);

class SwipeFixture extends FixtureInstance {
  added() {
    const { el } = this.mount(SwipeV, {
      app: this.$element,
      props: { message: "This is a swipe.", fixture: this }
    });
    this.$vApp.$el.appendChild(el.childNodes[0]);
  }
  removed() {
  }
}

export { SwipeFixture as default };
