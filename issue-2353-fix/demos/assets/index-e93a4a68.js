import { _ as __vitePreload } from './preload-helper-a4975f27.js';
import { bG as defineComponent, bI as inject, bN as resolveComponent, bP as openBlock, bQ as createBlock, bR as withCtx, fH as createBaseVNode, iM as normalizeStyle, bS as createTextVNode, bH as useI18n, bT as toDisplayString, bU as unref, bB as FixtureInstance, he as markRaw } from './main-b44d912b.js';

const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  __name: "appbar-button",
  props: {
    options: {
      type: Object
    }
  },
  setup(__props) {
    const iApi = inject("iApi");
    const onClick = () => {
      iApi.panel.toggle({ id: "p2", screen: "p-2-screen-2" });
    };
    return (_ctx, _cache) => {
      const _component_appbar_button = resolveComponent("appbar-button", true);
      return openBlock(), createBlock(_component_appbar_button, {
        onClickFunction: onClick,
        tooltip: "Gazebo"
      }, {
        default: withCtx(() => [
          createBaseVNode("span", {
            style: normalizeStyle({ color: __props.options?.colour ?? "#BDBDBD" })
          }, "G ", 4)
        ]),
        _: 1
      });
    };
  }
});

const _hoisted_1$3 = /* @__PURE__ */ createBaseVNode("a", { href: "javascript:;" }, "Option 1", -1);
const _hoisted_2$3 = /* @__PURE__ */ createBaseVNode("a", { href: "javascript:;" }, "Option 2", -1);
const _hoisted_3$2 = /* @__PURE__ */ createBaseVNode("a", { href: "javascript:;" }, "Option 3", -1);
const _hoisted_4$1 = { class: "flex flex-col items-center" };
const _hoisted_5$1 = /* @__PURE__ */ createBaseVNode("br", null, null, -1);
const _hoisted_6$1 = /* @__PURE__ */ createBaseVNode("img", {
  src: "https://c.tenor.com/RJ3ZG5beDhIAAAAC/napoleon-dynamite-napoleon.gif",
  alt: "Gazebo1"
}, null, -1);
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "p1-screen-1",
  props: {
    panel: {
      type: Object,
      required: true
    }
  },
  setup(__props) {
    return (_ctx, _cache) => {
      const _component_panel_screen = resolveComponent("panel-screen");
      return openBlock(), createBlock(_component_panel_screen, { panel: __props.panel }, {
        header: withCtx(() => [
          createTextVNode(" Gazebo/Panel 1/Screen A ")
        ]),
        controls: withCtx(() => [
          _hoisted_1$3,
          _hoisted_2$3,
          _hoisted_3$2
        ]),
        content: withCtx(() => [
          createBaseVNode("div", _hoisted_4$1, [
            createBaseVNode("button", {
              type: "button",
              onClick: _cache[0] || (_cache[0] = ($event) => __props.panel.show({ screen: "p-1-screen-2" })),
              class: "bg-blue-500 hover:bg-blue-700 text-white font-bold py-8 px-16"
            }, " See Gazebo 2 "),
            _hoisted_5$1,
            _hoisted_6$1
          ])
        ]),
        _: 1
      }, 8, ["panel"]);
    };
  }
});

const _hoisted_1$2 = { class: "flex flex-col items-center" };
const _hoisted_2$2 = /* @__PURE__ */ createBaseVNode("br", null, null, -1);
const _hoisted_3$1 = /* @__PURE__ */ createBaseVNode("img", {
  src: "http://nesn.com/wp-content/uploads/2014/09/jeternephew.gif",
  alt: "Gazebo2"
}, null, -1);
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "p1-screen-2",
  props: {
    panel: {
      type: Object,
      required: true
    }
  },
  setup(__props) {
    return (_ctx, _cache) => {
      const _component_panel_screen = resolveComponent("panel-screen");
      return openBlock(), createBlock(_component_panel_screen, { panel: __props.panel }, {
        header: withCtx(() => [
          createTextVNode(" Gazebo/Panel 1/Screen B ")
        ]),
        content: withCtx(() => [
          createBaseVNode("div", _hoisted_1$2, [
            createBaseVNode("button", {
              type: "button",
              onClick: _cache[0] || (_cache[0] = ($event) => __props.panel.show({ screen: "p-1-screen-1" })),
              class: "bg-blue-500 hover:bg-blue-700 text-white font-bold py-8 px-16"
            }, " See Gazebo 1 "),
            _hoisted_2$2,
            _hoisted_3$1
          ])
        ]),
        _: 1
      }, 8, ["panel"]);
    };
  }
});

const _hoisted_1$1 = { class: "flex flex-row justify-center items-center mt-16" };
const _hoisted_2$1 = { class: "mt-16" };
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "p2-screen-2",
  props: {
    panel: { type: Object, required: true },
    greeting: { type: String }
  },
  setup(__props) {
    const props = __props;
    const { t } = useI18n();
    const iApi = inject("iApi");
    const enhancedCatActivities = () => {
      props.panel.show("p-2-screen-3");
      iApi.event.emit("gazebo/beholdMyText", "I am a cat");
    };
    return (_ctx, _cache) => {
      const _component_panel_screen = resolveComponent("panel-screen");
      return openBlock(), createBlock(_component_panel_screen, { panel: __props.panel }, {
        header: withCtx(() => [
          createTextVNode(" Gazebo/Panel 2/Screen B ")
        ]),
        content: withCtx(() => [
          createTextVNode(toDisplayString(unref(t)("gz.hello2")) + " ", 1),
          createBaseVNode("div", _hoisted_1$1, [
            createBaseVNode("button", {
              type: "button",
              onClick: _cache[0] || (_cache[0] = ($event) => __props.panel.show({
                screen: "p-2-screen-1",
                props: { greeting: "Greeting from Screen B" }
              })),
              class: "bg-green-500 hover:bg-green-700 text-white font-bold py-8 px-16"
            }, " Switch to Screen A "),
            createBaseVNode("button", {
              type: "button",
              onClick: _cache[1] || (_cache[1] = ($event) => enhancedCatActivities()),
              class: "bg-blue-500 hover:bg-blue-700 text-white font-bold py-8 px-16 m-2"
            }, " See a cat ")
          ]),
          createBaseVNode("p", _hoisted_2$1, toDisplayString(__props.greeting), 1)
        ]),
        _: 1
      }, 8, ["panel"]);
    };
  }
});

const _hoisted_1 = { class: "flex flex-col items-center mt-16" };
const _hoisted_2 = /* @__PURE__ */ createBaseVNode("img", {
  class: "my-16",
  src: "https://media.giphy.com/media/iWkHDNtcHpB5e/giphy.gif",
  alt: "",
  srcset: ""
}, null, -1);
const _hoisted_3 = /* @__PURE__ */ createBaseVNode("p", null, "Locale merging:", -1);
const _hoisted_4 = /* @__PURE__ */ createBaseVNode("dt", null, "global locale:", -1);
const _hoisted_5 = { class: "ml-32 font-bold" };
const _hoisted_6 = /* @__PURE__ */ createBaseVNode("dt", null, "fixture locale:", -1);
const _hoisted_7 = { class: "ml-32 font-bold" };
const _hoisted_8 = /* @__PURE__ */ createBaseVNode("dt", null, "common panels locale:", -1);
const _hoisted_9 = { class: "ml-32 font-bold" };
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "p2-screen-3",
  props: {
    panel: { type: Object, required: true }
  },
  setup(__props) {
    const { t } = useI18n({
      messages: {
        en: {
          lang_native: "En",
          who: "[me cat]"
        },
        fr: {
          lang_native: "Fr",
          who: "[moi chat]"
        }
      }
    });
    return (_ctx, _cache) => {
      const _component_panel_screen = resolveComponent("panel-screen");
      return openBlock(), createBlock(_component_panel_screen, { panel: __props.panel }, {
        header: withCtx(() => [
          createTextVNode(" Gazebo/Panel 2/Screen C ")
        ]),
        content: withCtx(() => [
          createBaseVNode("div", _hoisted_1, [
            createBaseVNode("button", {
              type: "button",
              onClick: _cache[0] || (_cache[0] = ($event) => __props.panel.show({
                screen: "p-2-screen-1",
                props: { greeting: "Greeting from Screen C" }
              })),
              class: "bg-green-500 hover:bg-green-700 text-white font-bold py-8 px-16"
            }, " Switch to Screen A "),
            _hoisted_2,
            _hoisted_3,
            createBaseVNode("dl", null, [
              _hoisted_4,
              createBaseVNode("dd", _hoisted_5, toDisplayString(unref(t)("lang_native")), 1),
              _hoisted_6,
              createBaseVNode("dd", _hoisted_7, toDisplayString(unref(t)("gz.hello")), 1),
              _hoisted_8,
              createBaseVNode("dd", _hoisted_9, toDisplayString(unref(t)("who")), 1)
            ])
          ])
        ]),
        _: 1
      }, 8, ["panel"]);
    };
  }
});

const messages = {"en":{"gz.hello":"I'm a simple panel - but from a locale file","gz.hello2":"I'm a simple panel","gz.alert1":"Gazebo","gz.alert2":"Gazebo two"},"fr":{"gz.hello":"Bonjour. Je suis un panel\"","gz.hello2":"Bonjour. Je suis un panel\"","gz.alert1":"Gazebo","gz.alert2":"Gazebo deux"}};

const BEHOLD_TEXT_EVENT = "gazebo/beholdMyText";
class GazeboFixture extends FixtureInstance {
  added() {
    this.$iApi.event.registerEventName(BEHOLD_TEXT_EVENT);
    this.$iApi.component("gazebo-appbar-button", _sfc_main$4);
    this.$iApi.panel.register(
      {
        // panel-1 has examples of how not to bind things and interact with stuff; bad panel ❌
        // it generally avoids using API and goes straight to the store; fixtures/panels/screens should not do that;
        id: "p1",
        config: {
          screens: {
            "p-1-screen-1": markRaw(_sfc_main$3),
            "p-1-screen-2": markRaw(_sfc_main$2)
          },
          style: {
            "flex-grow": "1",
            "max-width": "500px"
          },
          alertName: "gz.alert1"
        }
      },
      { i18n: { messages } }
    );
    this.$iApi.panel.register(
      {
        // panel-2 has examples of how properly bind things and interact with stuff; good panel ✔
        // use API functions; underlying store structure might change and all the code accessing the store directly will break
        id: "p2",
        config: {
          screens: {
            /**
             * // This should work:
             * manually lazy-loading a screen component
             */
            //'p-2-screen-1': () => import(/* webpackChunkName: "p-2-screen-1" */ `./p2-screen-1.vue`),
            /**
             * // This should work:
             * for the demo purposes, delay resolution of a component by 2 seconds
             */
            "p-2-screen-1": () => {
              return new Promise(
                (resolve) => setTimeout(
                  () => __vitePreload(() => import('./p2-screen-1-99ea3bbd.js'),true?["./p2-screen-1-99ea3bbd.js","./main-b44d912b.js","./preload-helper-a4975f27.js","./main-5c005d17.css"]:void 0,import.meta.url).then(
                    (data) => {
                      resolve(data);
                    }
                  ),
                  2e3
                )
              );
            },
            /**
             * // This should work:
             * letting the core to lazy-load a screen component; need to provide a path relative to the fixtures home folder
             */
            "p-2-screen-2": markRaw(_sfc_main$1),
            /**
             * // This should work:
             * returning a `VueConstructor` in a promise
             */
            "p-2-screen-3": () => {
              return new Promise(
                (resolve) => resolve(markRaw(_sfc_main))
              );
            }
          },
          style: {
            "flex-grow": "1",
            "max-width": "500px"
          },
          alertName: "gz.alert2"
        }
      },
      { i18n: { messages } }
    );
    this.handlePanelTeleports(["p1", "p2"]);
  }
}

export { GazeboFixture as default };