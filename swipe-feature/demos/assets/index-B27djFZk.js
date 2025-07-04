import { bF as defineComponent, bA as FixtureInstance, fE as usePanelStore, fI as useTemplateRef, bI as ref, bL as computed, fK as onBeforeMount, bJ as onMounted, bK as onBeforeUnmount, bN as resolveDirective, bW as createElementBlock, bV as withDirectives, fG as createBaseVNode, iS as normalizeStyle, iG as vModelText, bQ as openBlock, id as _export_sfc } from './main-6KLKyala.js';
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
    const lineDragging = ref(false);
    const linePosition = computed(() => {
      const diff = +sliderPosition.value - 50;
      const position = 50 + 0.99 * diff;
      return `${position - 1}%`;
    });
    const lineHeight = computed(() => {
      return `${innerShellHeight.value}px`;
    });
    const lineTop = computed(() => {
      return `${(-innerShellHeight.value + 45) / 2}px`;
    });
    const mouseMoveHandler = (e) => {
      console.log("mosuemove event");
      console.log(e);
      if (lineDragging.value) {
        sliderPosition.value = +sliderPosition.value + e.movementX / 4;
        setTimeout(() => {
          const inputEvent = new Event("input");
          slider.value?.dispatchEvent(inputEvent);
        });
      }
    };
    onBeforeMount(() => {
      const innerShell = document.querySelector(".inner-shell");
      innerShellHeight.value = innerShell?.clientHeight ?? 1e3;
    });
    onMounted(() => {
      window.addEventListener("resize", () => {
        const innerShell = document.querySelector(".inner-shell");
        innerShellHeight.value = innerShell?.clientHeight ?? innerShellHeight.value;
      });
      line.value?.addEventListener("mousedown", (e) => {
        lineDragging.value = true;
        panelStore.setOpacity(0.1);
      });
      line.value?.addEventListener("mouseup", () => {
        lineDragging.value = false;
        panelStore.setOpacity(1);
      });
      window.addEventListener("mouseup", () => {
        lineDragging.value = false;
        panelStore.setOpacity(1);
      });
      line.value?.addEventListener("mouseover", () => {
        panelStore.setOpacity(0.1);
      });
      line.value?.addEventListener("mouseleave", () => !lineDragging.value && panelStore.setOpacity(1));
      slider.value?.addEventListener("focus", () => panelStore.setOpacity(0.1));
      slider.value?.addEventListener("blur", () => panelStore.setOpacity(1));
      slider.value?.addEventListener("mouseover", () => panelStore.setOpacity(0.1));
      slider.value?.addEventListener("mouseleave", () => panelStore.setOpacity(1));
      line.value?.addEventListener("mousemove", mouseMoveHandler);
    });
    onBeforeUnmount(() => {
      window.removeEventListener("resize", () => {
        const innerShell = document.querySelector(".inner-shell");
        innerShellHeight.value = innerShell?.clientHeight ?? innerShellHeight.value;
      });
      line.value?.removeEventListener("mousedown", () => {
        lineDragging.value = true;
        panelStore.setOpacity(0.1);
      });
      line.value?.removeEventListener("mouseup", () => {
        lineDragging.value = false;
        panelStore.setOpacity(1);
      });
      window.removeEventListener("mouseup", () => {
        lineDragging.value = false;
        panelStore.setOpacity(1);
      });
      line.value?.removeEventListener("mouseover", () => panelStore.setOpacity(0.1));
      line.value?.removeEventListener("mouseleave", () => !lineDragging.value && panelStore.setOpacity(1));
      slider.value?.removeEventListener("focus", () => panelStore.setOpacity(0.1));
      slider.value?.removeEventListener("blur", () => panelStore.setOpacity(1));
      slider.value?.removeEventListener("mouseover", () => panelStore.setOpacity(0.1));
      slider.value?.removeEventListener("mouseleave", () => panelStore.setOpacity(1));
      line.value?.removeEventListener("mousemove", mouseMoveHandler);
    });
    return (_ctx, _cache) => {
      const _directive_tippy = resolveDirective("tippy");
      return openBlock(), createElementBlock("div", _hoisted_1, [
        withDirectives(createBaseVNode("div", {
          id: "verticalLine",
          style: normalizeStyle({ left: linePosition.value, height: lineHeight.value, top: lineTop.value }),
          ref_key: "line",
          ref: line,
          tabIndex: "0"
        }, null, 4), [
          [_directive_tippy, { content: "Drag and slide to move", placement: "left" }]
        ]),
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
          [vModelText, sliderPosition.value]
        ])
      ]);
    };
  }
});

const SwipeV = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-280de464"]]);

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
