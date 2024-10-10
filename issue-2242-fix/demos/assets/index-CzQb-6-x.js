import { f as fabric } from './fabric-CT_ZNHv-.js';
import { bA as FixtureInstance } from './main-CoPTeSZJ.js';
import './preload-helper-dJJaZANz.js';

class ExportMapFixture extends FixtureInstance {
  get config() {
    const fixtureConfig = this.$iApi.fixture.get("export").config;
    return fixtureConfig?.map;
  }
  async make(options) {
    const screenshot = await this.$iApi.geo.map.takeScreenshot({
      quality: 1,
      format: "png"
    });
    const img = new Image();
    img.src = screenshot.dataUrl;
    const esriImage = await new Promise(
      (resolve) => img.onload = () => resolve(img)
    );
    return new fabric.fabric.Image(esriImage, options);
  }
}

export { ExportMapFixture as default };
