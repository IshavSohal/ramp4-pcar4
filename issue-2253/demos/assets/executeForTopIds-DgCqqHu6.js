import { b_ as f, cC as S } from './main-Bl7UhAgQ.js';
import { m } from './queryTopFeatures-Q7NhC73c.js';
import './preload-helper-dJJaZANz.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
async function s(s,e,p){const a=f(s);return (await m(a,S.from(e),{...p})).data.objectIds}

export { s as executeForTopIds };
