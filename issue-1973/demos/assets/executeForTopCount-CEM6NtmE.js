import { cp as f, cW as S } from './main-5ivotA7d.js';
import { c } from './queryTopFeatures-BfWmiCTt.js';
import './preload-helper-dJJaZANz.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.30/esri/copyright.txt for details.
*/
async function s(s,e,p){const u=f(s);return (await c(u,S.from(e),{...p})).data.count}

export { s as executeForTopCount };
