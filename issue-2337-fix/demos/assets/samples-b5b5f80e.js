import { _ as __vitePreload } from './preload-helper-a4975f27.js';
import { _ as __variableDynamicImportRuntimeHelper } from './dynamic-import-helper-f8bb4967.js';

var SAMPLE_KEY = 'sample';
            var currentUrl = new URL(window.location.href);

            document
                .getElementById('selectConfig')
                .addEventListener('change', onConfigSelect);
            initialLoad();

            async function loadScript(scriptName) {
                // vite dynamic import. requires assigning to a variable to be recognized.
                await __variableDynamicImportRuntimeHelper((/* #__PURE__ */ Object.assign({"./starter-scripts/alternate.js": () => __vitePreload(() => import('./alternate-4c254994.js'),true?[]:void 0,import.meta.url),"./starter-scripts/basemap-fail.js": () => __vitePreload(() => import('./basemap-fail-015fb349.js'),true?["./basemap-fail-015fb349.js","./main-2b0f0b77.js","./preload-helper-a4975f27.js","./main-5c005d17.css"]:void 0,import.meta.url),"./starter-scripts/basemap-only.js": () => __vitePreload(() => import('./basemap-only-0ce6c683.js'),true?["./basemap-only-0ce6c683.js","./main-2b0f0b77.js","./preload-helper-a4975f27.js","./main-5c005d17.css"]:void 0,import.meta.url),"./starter-scripts/basemaps.js": () => __vitePreload(() => import('./basemaps-25df6ece.js'),true?["./basemaps-25df6ece.js","./main-2b0f0b77.js","./preload-helper-a4975f27.js","./main-5c005d17.css"]:void 0,import.meta.url),"./starter-scripts/cam.js": () => __vitePreload(() => import('./cam-2fa60e9e.js'),true?["./cam-2fa60e9e.js","./main-2b0f0b77.js","./preload-helper-a4975f27.js","./main-5c005d17.css"]:void 0,import.meta.url),"./starter-scripts/cccs.js": () => __vitePreload(() => import('./cccs-d61a7f35.js'),true?["./cccs-d61a7f35.js","./main-2b0f0b77.js","./preload-helper-a4975f27.js","./main-5c005d17.css"]:void 0,import.meta.url),"./starter-scripts/cesi.js": () => __vitePreload(() => import('./cesi-974bb76a.js'),true?["./cesi-974bb76a.js","./main-2b0f0b77.js","./preload-helper-a4975f27.js","./main-5c005d17.css"]:void 0,import.meta.url),"./starter-scripts/cumulative-effects.js": () => __vitePreload(() => import('./cumulative-effects-54688c47.js'),true?["./cumulative-effects-54688c47.js","./main-2b0f0b77.js","./preload-helper-a4975f27.js","./main-5c005d17.css"]:void 0,import.meta.url),"./starter-scripts/custom-appbar-button.js": () => __vitePreload(() => import('./custom-appbar-button-9104586f.js'),true?["./custom-appbar-button-9104586f.js","./main-2b0f0b77.js","./preload-helper-a4975f27.js","./main-5c005d17.css"]:void 0,import.meta.url),"./starter-scripts/custom-arrow.js": () => __vitePreload(() => import('./custom-arrow-0d09ac20.js'),true?["./custom-arrow-0d09ac20.js","./main-2b0f0b77.js","./preload-helper-a4975f27.js","./main-5c005d17.css"]:void 0,import.meta.url),"./starter-scripts/custom-grid-buttons.js": () => __vitePreload(() => import('./custom-grid-buttons-41873c55.js'),true?["./custom-grid-buttons-41873c55.js","./main-2b0f0b77.js","./preload-helper-a4975f27.js","./main-5c005d17.css"]:void 0,import.meta.url),"./starter-scripts/custom-overviewmap.js": () => __vitePreload(() => import('./custom-overviewmap-7a0a3c49.js'),true?["./custom-overviewmap-7a0a3c49.js","./main-2b0f0b77.js","./preload-helper-a4975f27.js","./main-5c005d17.css"]:void 0,import.meta.url),"./starter-scripts/custom-renderer.js": () => __vitePreload(() => import('./custom-renderer-1f06c418.js'),true?["./custom-renderer-1f06c418.js","./main-2b0f0b77.js","./preload-helper-a4975f27.js","./main-5c005d17.css"]:void 0,import.meta.url),"./starter-scripts/custom-store.js": () => __vitePreload(() => import('./custom-store-a1142612.js'),true?["./custom-store-a1142612.js","./main-2b0f0b77.js","./preload-helper-a4975f27.js","./main-5c005d17.css","./custom-store-6f829547.css"]:void 0,import.meta.url),"./starter-scripts/custom-symbology.js": () => __vitePreload(() => import('./custom-symbology-7b2968cb.js'),true?["./custom-symbology-7b2968cb.js","./main-2b0f0b77.js","./preload-helper-a4975f27.js","./main-5c005d17.css"]:void 0,import.meta.url),"./starter-scripts/delayed-start.js": () => __vitePreload(() => import('./delayed-start-e619935a.js'),true?["./delayed-start-e619935a.js","./main-2b0f0b77.js","./preload-helper-a4975f27.js","./main-5c005d17.css"]:void 0,import.meta.url),"./starter-scripts/disabled-options.js": () => __vitePreload(() => import('./disabled-options-374e130a.js'),true?["./disabled-options-374e130a.js","./main-2b0f0b77.js","./preload-helper-a4975f27.js","./main-5c005d17.css"]:void 0,import.meta.url),"./starter-scripts/error-layers.js": () => __vitePreload(() => import('./error-layers-ada0e286.js'),true?["./error-layers-ada0e286.js","./main-2b0f0b77.js","./preload-helper-a4975f27.js","./main-5c005d17.css"]:void 0,import.meta.url),"./starter-scripts/exclusive-fields.js": () => __vitePreload(() => import('./exclusive-fields-bd50f30d.js'),true?["./exclusive-fields-bd50f30d.js","./main-2b0f0b77.js","./preload-helper-a4975f27.js","./main-5c005d17.css"]:void 0,import.meta.url),"./starter-scripts/export-custom-renderer.js": () => __vitePreload(() => import('./export-custom-renderer-da949958.js'),true?["./export-custom-renderer-da949958.js","./main-2b0f0b77.js","./preload-helper-a4975f27.js","./main-5c005d17.css"]:void 0,import.meta.url),"./starter-scripts/fog-hilight.js": () => __vitePreload(() => import('./fog-hilight-395b050e.js'),true?["./fog-hilight-395b050e.js","./main-2b0f0b77.js","./preload-helper-a4975f27.js","./main-5c005d17.css"]:void 0,import.meta.url),"./starter-scripts/form.js": () => __vitePreload(() => import('./form-c8f0b8fb.js'),true?["./form-c8f0b8fb.js","./main-2b0f0b77.js","./preload-helper-a4975f27.js","./main-5c005d17.css"]:void 0,import.meta.url),"./starter-scripts/geosearch-filtered.js": () => __vitePreload(() => import('./geosearch-filtered-59c15521.js'),true?["./geosearch-filtered-59c15521.js","./main-2b0f0b77.js","./preload-helper-a4975f27.js","./main-5c005d17.css"]:void 0,import.meta.url),"./starter-scripts/geosearch.js": () => __vitePreload(() => import('./geosearch-626b9796.js'),true?["./geosearch-626b9796.js","./main-2b0f0b77.js","./preload-helper-a4975f27.js","./main-5c005d17.css"]:void 0,import.meta.url),"./starter-scripts/grid-config.js": () => __vitePreload(() => import('./grid-config-a4ade53d.js'),true?["./grid-config-a4ade53d.js","./main-2b0f0b77.js","./preload-helper-a4975f27.js","./main-5c005d17.css"]:void 0,import.meta.url),"./starter-scripts/grid-custom-template.js": () => __vitePreload(() => import('./grid-custom-template-12b88e29.js'),true?["./grid-custom-template-12b88e29.js","./main-2b0f0b77.js","./preload-helper-a4975f27.js","./main-5c005d17.css"]:void 0,import.meta.url),"./starter-scripts/grid.js": () => __vitePreload(() => import('./grid-1833e48f.js'),true?["./grid-1833e48f.js","./main-2b0f0b77.js","./preload-helper-a4975f27.js","./main-5c005d17.css"]:void 0,import.meta.url),"./starter-scripts/help.js": () => __vitePreload(() => import('./help-bf31fdb1.js'),true?["./help-bf31fdb1.js","./main-2b0f0b77.js","./preload-helper-a4975f27.js","./main-5c005d17.css"]:void 0,import.meta.url),"./starter-scripts/info-section.js": () => __vitePreload(() => import('./info-section-d5f0ae02.js'),true?["./info-section-d5f0ae02.js","./main-2b0f0b77.js","./preload-helper-a4975f27.js","./main-5c005d17.css"]:void 0,import.meta.url),"./starter-scripts/lambert.js": () => __vitePreload(() => import('./lambert-862661bb.js'),true?["./lambert-862661bb.js","./main-2b0f0b77.js","./preload-helper-a4975f27.js","./main-5c005d17.css"]:void 0,import.meta.url),"./starter-scripts/layer-metadata.js": () => __vitePreload(() => import('./layer-metadata-d1d4647b.js'),true?["./layer-metadata-d1d4647b.js","./main-2b0f0b77.js","./preload-helper-a4975f27.js","./main-5c005d17.css"]:void 0,import.meta.url),"./starter-scripts/legend.js": () => __vitePreload(() => import('./legend-9ff790c4.js'),true?["./legend-9ff790c4.js","./main-2b0f0b77.js","./preload-helper-a4975f27.js","./main-5c005d17.css"]:void 0,import.meta.url),"./starter-scripts/main.js": () => __vitePreload(() => import('./main-84ddc6b3.js'),true?["./main-84ddc6b3.js","./main-2b0f0b77.js","./preload-helper-a4975f27.js","./main-5c005d17.css"]:void 0,import.meta.url),"./starter-scripts/map-image-layer.js": () => __vitePreload(() => import('./map-image-layer-ade8e9f4.js'),true?["./map-image-layer-ade8e9f4.js","./main-2b0f0b77.js","./preload-helper-a4975f27.js","./main-5c005d17.css"]:void 0,import.meta.url),"./starter-scripts/mapnav.js": () => __vitePreload(() => import('./mapnav-c0a6d67a.js'),true?["./mapnav-c0a6d67a.js","./main-2b0f0b77.js","./preload-helper-a4975f27.js","./main-5c005d17.css"]:void 0,import.meta.url),"./starter-scripts/merge-grid.js": () => __vitePreload(() => import('./merge-grid-1a7c5526.js'),true?["./merge-grid-1a7c5526.js","./main-2b0f0b77.js","./preload-helper-a4975f27.js","./main-5c005d17.css"]:void 0,import.meta.url),"./starter-scripts/multi-instances.js": () => __vitePreload(() => import('./multi-instances-b5350282.js'),true?["./multi-instances-b5350282.js","./main-2b0f0b77.js","./preload-helper-a4975f27.js","./main-5c005d17.css"]:void 0,import.meta.url),"./starter-scripts/multi-ramp.js": () => __vitePreload(() => import('./multi-ramp-019efd7c.js'),true?["./multi-ramp-019efd7c.js","./main-2b0f0b77.js","./preload-helper-a4975f27.js","./main-5c005d17.css"]:void 0,import.meta.url),"./starter-scripts/no-layers.js": () => __vitePreload(() => import('./no-layers-43ddb27b.js'),true?["./no-layers-43ddb27b.js","./main-2b0f0b77.js","./preload-helper-a4975f27.js","./main-5c005d17.css"]:void 0,import.meta.url),"./starter-scripts/offscale-layer.js": () => __vitePreload(() => import('./offscale-layer-8d1dc6c1.js'),true?["./offscale-layer-8d1dc6c1.js","./main-2b0f0b77.js","./preload-helper-a4975f27.js","./main-5c005d17.css"]:void 0,import.meta.url),"./starter-scripts/old-main.js": () => __vitePreload(() => import('./old-main-0c60d372.js'),true?["./old-main-0c60d372.js","./main-2b0f0b77.js","./preload-helper-a4975f27.js","./main-5c005d17.css"]:void 0,import.meta.url),"./starter-scripts/panel-party.js": () => __vitePreload(() => import('./panel-party-d5c40493.js'),true?["./panel-party-d5c40493.js","./main-2b0f0b77.js","./preload-helper-a4975f27.js","./main-5c005d17.css"]:void 0,import.meta.url),"./starter-scripts/perm-filter.js": () => __vitePreload(() => import('./perm-filter-787f3406.js'),true?["./perm-filter-787f3406.js","./main-2b0f0b77.js","./preload-helper-a4975f27.js","./main-5c005d17.css"]:void 0,import.meta.url),"./starter-scripts/r2-config-upgraded.js": () => __vitePreload(() => import('./r2-config-upgraded-bbbc3f7f.js'),true?["./r2-config-upgraded-bbbc3f7f.js","./main-2b0f0b77.js","./preload-helper-a4975f27.js","./main-5c005d17.css"]:void 0,import.meta.url),"./starter-scripts/ramp-basic.js": () => __vitePreload(() => import('./ramp-basic-3b1648fd.js'),true?["./ramp-basic-3b1648fd.js","./main-2b0f0b77.js","./preload-helper-a4975f27.js","./main-5c005d17.css"]:void 0,import.meta.url),"./starter-scripts/section-item.js": () => __vitePreload(() => import('./section-item-f0cb73d0.js'),true?["./section-item-f0cb73d0.js","./main-2b0f0b77.js","./preload-helper-a4975f27.js","./main-5c005d17.css"]:void 0,import.meta.url),"./starter-scripts/simple-data.js": () => __vitePreload(() => import('./simple-data-2d2d7a4a.js'),true?["./simple-data-2d2d7a4a.js","./main-2b0f0b77.js","./preload-helper-a4975f27.js","./main-5c005d17.css"]:void 0,import.meta.url),"./starter-scripts/simple-feature.js": () => __vitePreload(() => import('./simple-feature-bd53746b.js'),true?["./simple-feature-bd53746b.js","./main-2b0f0b77.js","./preload-helper-a4975f27.js","./main-5c005d17.css"]:void 0,import.meta.url),"./starter-scripts/simple-file.js": () => __vitePreload(() => import('./simple-file-87b894da.js'),true?["./simple-file-87b894da.js","./main-2b0f0b77.js","./preload-helper-a4975f27.js","./main-5c005d17.css"]:void 0,import.meta.url),"./starter-scripts/simple-mil.js": () => __vitePreload(() => import('./simple-mil-23d60365.js'),true?["./simple-mil-23d60365.js","./main-2b0f0b77.js","./preload-helper-a4975f27.js","./main-5c005d17.css"]:void 0,import.meta.url),"./starter-scripts/teleport-details.js": () => __vitePreload(() => import('./teleport-details-2c12324a.js'),true?["./teleport-details-2c12324a.js","./main-2b0f0b77.js","./preload-helper-a4975f27.js","./main-5c005d17.css"]:void 0,import.meta.url),"./starter-scripts/teleport-wet.js": () => __vitePreload(() => import('./teleport-wet-d724ef37.js'),true?["./teleport-wet-d724ef37.js","./main-2b0f0b77.js","./preload-helper-a4975f27.js","./main-5c005d17.css"]:void 0,import.meta.url),"./starter-scripts/teleport.js": () => __vitePreload(() => import('./teleport-a11d674d.js'),true?["./teleport-a11d674d.js","./main-2b0f0b77.js","./preload-helper-a4975f27.js","./main-5c005d17.css"]:void 0,import.meta.url),"./starter-scripts/tree-grow.js": () => __vitePreload(() => import('./tree-grow-f1fb81a2.js'),true?["./tree-grow-f1fb81a2.js","./main-2b0f0b77.js","./preload-helper-a4975f27.js","./main-5c005d17.css"]:void 0,import.meta.url),"./starter-scripts/wet.js": () => __vitePreload(() => import('./wet-d0d9a7d6.js'),true?["./wet-d0d9a7d6.js","./main-2b0f0b77.js","./preload-helper-a4975f27.js","./main-5c005d17.css"]:void 0,import.meta.url),"./starter-scripts/wms-layer.js": () => __vitePreload(() => import('./wms-layer-14e9da8e.js'),true?["./wms-layer-14e9da8e.js","./main-2b0f0b77.js","./preload-helper-a4975f27.js","./main-5c005d17.css"]:void 0,import.meta.url)})), `./starter-scripts/${scriptName}.js`);
            }

            function onConfigSelect(event) {
                // refresh page with new selection in URL
                currentUrl.searchParams.set(
                    SAMPLE_KEY,
                    document.getElementById('selectConfig').selectedIndex + 1
                );
                window.location.href = currentUrl;
            }

            function initialLoad() {
                var params = new URLSearchParams(currentUrl.search);
                var sampleIndex = params.get(SAMPLE_KEY) - 1;
                var selectElem = document.getElementById('selectConfig');
                if (
                    params.has(SAMPLE_KEY) &&
                    sampleIndex >= 1 &&
                    selectElem.item(sampleIndex)
                ) {
                    selectElem.options[sampleIndex].selected = 'selected';
                    loadScript(selectElem.options[sampleIndex].value);
                } else {
                    loadScript(selectElem.options[0].value);
                }
            }