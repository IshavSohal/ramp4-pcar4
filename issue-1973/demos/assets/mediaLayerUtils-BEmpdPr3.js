import { $, j } from './utils-Cojm7iUI.js';
import { o } from './jsonContext-Bf_48zPs.js';
import { l as l$1, a, f as f$1 } from './main-5ivotA7d.js';
import { p as p$1 } from './resourceUtils-DGvQKd1z.js';
import './originUtils-Do2K3Z97.js';
import './multiOriginJSONSupportUtils-C5oGZ9U0.js';
import './saveAPIKeyUtils-CPfijME_.js';
import './saveUtils-DYaRB3Rk.js';
import './preload-helper-dJJaZANz.js';
import './resourceUtils-C_K0Y3ub.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.30/esri/copyright.txt for details.
*/
const i="Media Layer",u="media-layer-save",p="media-layer-save-as",l=["media-layer:unsupported-source"];function m(e){return {isValid:"media"===e.type,errorMessage:"Layer.type should be 'media'"}}function c(e){return o(e,"portal-item",!0)}function y(e){return e.layerJSON}async function f(e,r){r.extent=e.fullExtent?await l$1(e.fullExtent):null;}async function d(e,r){r.title||=e.title,await f(e,r),a(r,f$1.METADATA);}async function x(r,t){return $({layer:r,itemType:i,validateLayer:m,createJSONContext:e=>c(e),createItemData:y,errorNamePrefix:u,supplementalUnsupportedErrors:l,setItemProperties:f,saveResources:(e,t)=>p$1(r.resourceReferences,t)},t)}async function v(e,t,a){return j({layer:e,itemType:i,validateLayer:m,createJSONContext:e=>c(e),createItemData:y,errorNamePrefix:p,supplementalUnsupportedErrors:l,newItem:t,setItemProperties:d,saveResources:(r,t)=>p$1(e.resourceReferences,t)},a)}

export { x as save, v as saveAs };
