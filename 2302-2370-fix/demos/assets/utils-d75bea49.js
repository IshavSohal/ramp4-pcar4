import { S, Q, i, s, f as f$1 } from './main-aee4b1c0.js';
import { i as i$1 } from './originUtils-f2cf510b.js';
import { o } from './jsonContext-bf3b1a6e.js';
import { i as i$2 } from './saveAPIKeyUtils-a4b4620b.js';
import { t } from './saveUtils-b4bcd01a.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
function l(t,r,o){const a=o(t);if(!a.isValid)throw new s(`${r}:invalid-parameters`,a.errorMessage,{layer:t})}async function m(e){const{layer:t,errorNamePrefix:r,validateLayer:o}=e;await t.load(),l(t,r,o);}function c(e,t){return `Layer (title: ${e.title}, id: ${e.id}) of type '${e.declaredClass}' ${t}`}function u(t){const{item:r,errorNamePrefix:o,layer:a,validateItem:i}=t;if(i$2(r),f(t),i){const t=i(r);if(!t.isValid)throw new s(`${o}:invalid-parameters`,t.errorMessage,{layer:a})}}function f(t){const{item:r,itemType:o,additionalItemType:a,errorNamePrefix:i,layer:n}=t,s$1=[o];if(a&&s$1.push(a),!s$1.includes(r.type)){const t=s$1.map((e=>`'${e}'`)).join(", ");throw new s(`${i}:portal-item-wrong-type`,`Portal item type should be one of: "${t}"`,{item:r,layer:n})}}function d(t){const{layer:r,errorNamePrefix:o}=t,{portalItem:a}=r;if(!a)throw new s(`${o}:portal-item-not-set`,c(r,"requires the portalItem property to be set"));if(!a.loaded)throw new s(`${o}:portal-item-not-loaded`,c(r,"cannot be saved to a portal item that does not exist or is inaccessible"));u({...t,item:a});}function y(e){const{newItem:t,itemType:a}=e;let i=S.from(t);return i.id&&(i=i.clone(),i.id=null),i.type??=a,i.portal??=Q.getDefault(),u({...e,item:i}),i}function w(e){return o(e,"portal-item")}async function I(e,t$1,r){"beforeSave"in e&&"function"==typeof e.beforeSave&&await e.beforeSave();const o=e.write({},t$1);return await Promise.all(t$1.resources?.pendingOperations??[]),t(t$1,{errorName:"layer-write:unsupported"},r),o}function v(e){i(e,f$1.JSAPI),e.typeKeywords&&(e.typeKeywords=e.typeKeywords.filter(((e,t,r)=>r.indexOf(e)===t)));}async function P(e,t,r){const o=e.portal;await o.signIn(),await(o.user?.addItem({item:e,data:t,folder:r?.folder}));}async function $(e,r){const{layer:o,createItemData:a,createJSONContext:i,saveResources:n,supplementalUnsupportedErrors:s}=e;await m(e),d(e);const p=o.portalItem,l=i?i(p):w(p),c=await I(o,l,{...r,supplementalUnsupportedErrors:s}),u=await a({layer:o,layerJSON:c},p);return v(p),await p.update({data:u}),i$1(l),await(n?.(p,l)),p}async function j(e,r){const{layer:o,createItemData:a,createJSONContext:i,setItemProperties:n,saveResources:s,supplementalUnsupportedErrors:p}=e;await m(e);const l=y(e),c=i?i(l):w(l),u=await I(o,c,{...r,supplementalUnsupportedErrors:p}),f=await a({layer:o,layerJSON:u},l);return await n(o,l),v(l),await P(l,f,r),o.portalItem=l,i$1(c),await(s?.(l,c)),l}

export { $, I, P, c, d, j, l, v, w, y };