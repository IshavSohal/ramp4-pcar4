import { b$ as f, cD as S } from './main-8b7fd68e.js';
import { m } from './queryTopFeatures-9cea7a02.js';
import './preload-helper-a4975f27.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
async function s(s,e,p){const a=f(s);return (await m(a,S.from(e),{...p})).data.objectIds}

export { s as executeForTopIds };