import { cp as f, cW as S } from './main-De_LB6CK.js';
import { c } from './queryTopFeatures-BqpFMakk.js';
import './preload-helper-dJJaZANz.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.30/esri/copyright.txt for details.
*/
async function s(s,e,p){const u=f(s);return (await c(u,S.from(e),{...p})).data.count}

export { s as executeForTopCount };