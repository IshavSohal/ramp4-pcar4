import { a as fabric } from './fabric-NdBs1aEa.js';
import { b$ as FixtureInstance, c0 as merge } from './main-5ivotA7d.js';
import './preload-helper-dJJaZANz.js';

class ExportTimestampFixture extends FixtureInstance {
  get config() {
    const fixtureConfig = this.$iApi.fixture.get("export").config;
    return fixtureConfig?.timestamp;
  }
  make(options) {
    const timestampFixtureConfig = this.config;
    const fabricTextConfig = {
      text: (/* @__PURE__ */ new Date()).toLocaleString("en-CA"),
      fontFamily: "Montserrat, BlinkMacSystemFont, Segoe UI, Helvetica, Arial, sans-serif",
      fill: "#000",
      fontSize: 20,
      top: 0,
      left: 0,
      originX: "left"
    };
    if (timestampFixtureConfig?.value !== void 0) {
      fabricTextConfig.text = timestampFixtureConfig.value;
    }
    const config = merge(fabricTextConfig, options || {});
    const fbTimestamp = new fabric.fabric.Textbox(config.text, config);
    return Promise.resolve(fbTimestamp);
  }
}

export { ExportTimestampFixture as default };