import { _ as __vitePreload } from './preload-helper-a4975f27.js';
import { dO as e, s, U as U$1, dP as F, bp as i$1, dQ as c$1, cm as n$1 } from './main-02c4cfca.js';

let c=a();function a(){return new e(50)}function u(){c=a();}async function l(e,o){if(e.resource?.href)return m(e.resource.href).then((e=>[e.width,e.height]));if(e.resource?.primitive)return null!=o?[o,o]:[256,256];throw new s("symbol3d:invalid-symbol-layer","symbol layers of type Icon must have either an href or a primitive resource")}function m(r){return U$1(r,{responseType:"image"}).then((e=>e.data))}async function f(e,o=null){if(!e.isPrimitive){const o=e.resource.href;if(!o)throw new s("symbol:invalid-resource","The symbol does not have a valid resource");const s$1=c.get(o);if(void 0!==s$1)return s$1;const{fetch:n}=await __vitePreload(() => import('./objectResourceUtils-aadbc4ca.js').then(n => n.o),true?["./objectResourceUtils-aadbc4ca.js","./devEnvironmentUtils-1f64130b.js","./main-02c4cfca.js","./preload-helper-a4975f27.js","./main-54569533.css","./mat3f64-3fe11525.js","./mat4f64-b32e2490.js","./BufferView-b5852773.js","./vec3-b613769b.js","./DefaultMaterial_COLOR_GAMMA-75402019.js","./enums-af0bf3a9.js","./quat-6935c9f4.js","./quatf64-137a8dbb.js","./resourceUtils-00818050.js","./basicInterfaces-f85cdac5.js","./Indices-e0fa6ace.js","./NestedMap-7fc3349d.js","./requestImageUtils-d514111f.js","./orientedBoundingBox-c7495750.js","./computeTranslationToOriginAndRotation-5ccafe06.js","./plane-e4d9ee77.js","./triangle-f60ba3ad.js","./Util-dfa71ca0.js","./ObjectStack-c2541a2f.js","./lineSegment-70b3e5e9.js","./VertexAttribute-66b2103c.js","./Texture-f4d740e6.js","./InterleavedLayout-adb15e2b.js","./types-e38a67d0.js","./OrderIndependentTransparency-67a8dcc4.js","./BindType-941d78d8.js","./sphere-e324ab6a.js","./doublePrecisionUtils-434e21f5.js","./symbolColorUtils-54604f6f.js","./RenderState-dde7519e.js"]:void 0,import.meta.url),a=await n(o,{disableTextures:!0}),u=F(a.referenceBoundingBox,n$1());return c.put(o,u),u}if(!e.resource?.primitive)throw new s("symbol:invalid-resource","The symbol does not have a valid resource");const a=i$1(c$1(e.resource.primitive));if(null!=o)for(let r=0;r<a.length;r++)a[r]*=o;return F(a,n$1())}

export { u as clearBoundingBoxCache, l as computeIconLayerResourceSize, f as computeObjectLayerResourceSize };