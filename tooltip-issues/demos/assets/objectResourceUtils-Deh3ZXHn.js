const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./loader-9nSBBBan.js","./main-DvIsqh7u.js","./preload-helper-ExcqyqRp.js","./main-wZMPJMua.css","./mat4f64-CSKppSlJ.js","./quat-CViErhlp.js","./mat3f64-q3fE-ZOt.js","./quatf64-aQ5IuZRd.js","./BufferView-C8X1vu7u.js","./resourceUtils-CzX-2Ew2.js","./basicInterfaces-CZwQPxTp.js"])))=>i.map(i=>d[i]);
import{_ as Ae}from"./preload-helper-ExcqyqRp.js";import{a as _e}from"./devEnvironmentUtils-8WtPGj6h.js";import{dS as P,dG as C,dE as L,mp as Me,ap as G,iu as Oe,dZ as ee,mq as Re,mr as Be,gI as se,ms as Ce,j_ as de,U as Ee,B as fe,s as Se,mt as pe,fF as ne,mu as ge,kH as W,cz as ie,G as Pe,mv as Le,gf as Fe,gg as oe,gh as Ne,dX as Ge,dD as Ue,mw as ae,dU as ke,ao as je,i_ as qe}from"./main-DvIsqh7u.js";import{t as J,e as xe}from"./mat3f64-q3fE-ZOt.js";import{o as ue,r as De,e as He}from"./mat4f64-CSKppSlJ.js";import{r as Ve,e as H,o as ze,a as We,C as be,B as K,s as Ke,t as Qe,n as Xe,b as Ze,c as V}from"./AttributeArray-DfHFUXKH.js";import{c as Je,x as ye,L as Ye,i as $e,O as et,E as tt}from"./BufferView-C8X1vu7u.js";import{e as rt,f as st,l as le,o as ce}from"./vec3-CfrdavQP.js";import{n as nt,s as he}from"./vec4-Lf_prB-q.js";import{n as it,d as U,o as ot,g as at,t as ut,h as lt}from"./DefaultMaterial_COLOR_GAMMA-ywebeL66.js";import{r as Y}from"./resourceUtils-CzX-2Ew2.js";import{t as ct}from"./NestedMap-CImDozOA.js";import{t as ht,l as we}from"./Indices-DuTTT8ki.js";import{t as mt}from"./requestImageUtils-BHIP2Bf-.js";import{t as j}from"./orientedBoundingBox-q3u7eAx0.js";import{t as dt,e as te,i as M,n as ft}from"./basicInterfaces-CZwQPxTp.js";import{S as pt}from"./triangle-DURF5gLA.js";import{s as gt}from"./Util-C-4tES1D.js";import{e as v}from"./VertexAttribute-BdZWZuT1.js";import{a as me}from"./NormalAttribute.glsl-IVLkS0uk.js";import"./InterleavedLayout-DuDZ8vn7.js";import"./types-D0PSWh4d.js";import"./interfaces-DDtDqZYj.js";import"./BindType-BmZEZMMh.js";import"./boundedPlane-DfUA7DPo.js";import"./sphere-DDyAc15v.js";import"./plane-BHGege5P.js";import"./quatf64-aQ5IuZRd.js";import"./lineSegment-dh87YI0S.js";import"./renderState-WO9RIICA.js";import"./doublePrecisionUtils-B0owpBza.js";import"./quat-CViErhlp.js";import"./spatialReferenceEllipsoidUtils-1o9GOaZb.js";import"./computeTranslationToOriginAndRotation-BrFtLJUZ.js";function xt(n,e){if(!n)return!1;const{size:t,data:r,indices:l}=n;P(e,0,0,0),P(w,0,0,0);let u=0,i=0;for(let a=0;a<l.length-2;a+=3){const c=l[a]*t,s=l[a+1]*t,o=l[a+2]*t;P(g,r[c],r[c+1],r[c+2]),P(E,r[s],r[s+1],r[s+2]),P(z,r[o],r[o+1],r[o+2]);const h=pt(g,E,z);h?(C(g,g,E),C(g,g,z),L(g,g,1/3*h),C(e,e,g),u+=h):(C(w,w,g),C(w,w,E),C(w,w,z),i+=3)}return(i!==0||u!==0)&&(u!==0?(L(e,e,1/u),!0):i!==0&&(L(e,w,1/i),!0))}function bt(n,e){if(!n)return!1;const{size:t,data:r,indices:l}=n;P(e,0,0,0);let u=-1,i=0;for(let a=0;a<l.length;a++){const c=l[a]*t;u!==c&&(e[0]+=r[c],e[1]+=r[c+1],e[2]+=r[c+2],i++),u=c}return i>1&&L(e,e,1/i),i>0}function yt(n,e,t){if(!n)return!1;P(t,0,0,0),P(w,0,0,0);let r=0,l=0;const{size:u,data:i,indices:a}=n,c=a.length-1,s=c+(e?2:0);for(let o=0;o<s;o+=2){const h=o<c?o+1:0,d=a[o<c?o:c]*u,f=a[h]*u;g[0]=i[d],g[1]=i[d+1],g[2]=i[d+2],E[0]=i[f],E[1]=i[f+1],E[2]=i[f+2],L(g,C(g,g,E),.5);const m=Me(g,E);m>0?(C(t,t,L(g,g,m)),r+=m):r===0&&(C(w,w,g),l++)}return r!==0?(L(t,t,1/r),!0):l!==0&&(L(t,w,1/l),!0)}const g=G(),E=G(),z=G(),w=G();class $t{constructor(){this.uid=Oe()}}class wt extends $t{constructor(e){super(),this.highlightGroupName=e,this.channel=dt.Highlight}}class Q extends Ve{constructor(e,t,r=null,l=H.Mesh,u=null,i=-1){super(),this.material=e,this.mapPositions=r,this.type=l,this.objectAndLayerIdColor=u,this.edgeIndicesLength=i,this.highlights=new Set,this._highlightGroupCounts=new Map,this.visible=!0,this._attributes=new Map,this._boundingInfo=null;for(const[a,c]of t)this._attributes.set(a,{...c,indices:ht(c.indices)}),a===v.POSITION&&(this.edgeIndicesLength=this.edgeIndicesLength<0?this._attributes.get(a).indices.length:this.edgeIndicesLength)}instantiate(e={}){const t=new Q(e.material||this.material,[],this.mapPositions,this.type,this.objectAndLayerIdColor,this.edgeIndicesLength);return this._attributes.forEach((r,l)=>{r.exclusive=!1,t._attributes.set(l,r)}),t._boundingInfo=this._boundingInfo,t.transformation=e.transformation||this.transformation,t}get attributes(){return this._attributes}getMutableAttribute(e){let t=this._attributes.get(e);return t&&!t.exclusive&&(t={...t,exclusive:!0,data:ze(t.data)},this._attributes.set(e,t)),t}setAttributeData(e,t){const r=this._attributes.get(e);r&&this._attributes.set(e,{...r,exclusive:!0,data:t})}get indexCount(){return this._attributes.values().next().value.indices?.length??0}get faceCount(){return this.indexCount/3}get boundingInfo(){return this._boundingInfo==null&&(this._boundingInfo=this._calculateBoundingInfo()),this._boundingInfo}computeAttachmentOrigin(e){return!!(this.type===H.Mesh?this._computeAttachmentOriginTriangles(e):this.type===H.Line?this._computeAttachmentOriginLines(e):this._computeAttachmentOriginPoints(e))&&(this._transformation!=null&&ee(e,e,this._transformation),!0)}_computeAttachmentOriginTriangles(e){const t=this.attributes.get(v.POSITION);return xt(t,e)}_computeAttachmentOriginLines(e){const t=this.attributes.get(v.POSITION);return yt(t,vt(this.material.parameters,t),e)}_computeAttachmentOriginPoints(e){const t=this.attributes.get(v.POSITION);return bt(t,e)}invalidateBoundingInfo(){this._boundingInfo=null}_calculateBoundingInfo(){const e=this.attributes.get(v.POSITION);if(!e||e.indices.length===0)return null;const t=this.type===H.Mesh?3:1;gt(e.indices.length%t==0,"Indexing error: "+e.indices.length+" not divisible by "+t);const r=we(e.indices.length/t);return new We(r,t,e)}get transformation(){return this._transformation??ue}set transformation(e){this._transformation=e&&e!==ue?De(e):null}get highlightGroups(){return this._highlightGroupCounts}get hasHighlights(){return this._highlightGroupCounts.size>0}foreachHighlightGroup(e){this._highlightGroupCounts.forEach((t,r)=>e(r))}allocateIdAndHighlight(e){const t=new wt(e);return this.addHighlight(t)}addHighlight(e){this.highlights.add(e);const{highlightGroupName:t}=e,r=(this._highlightGroupCounts.get(t)??0)+1;return this._highlightGroupCounts.set(t,r),e}removeHighlight(e){if(this.highlights.delete(e)){const{highlightGroupName:t}=e,r=this._highlightGroupCounts.get(t)??0;r<=1?this._highlightGroupCounts.delete(t):this._highlightGroupCounts.set(t,r-1)}}}function vt(n,e){return!(!("isClosed"in n)||!n.isClosed)&&e.indices.length>2}function q(n){if(n==null)return null;const e=n.offset!=null?n.offset:Re,t=n.rotation!=null?n.rotation:0,r=n.scale!=null?n.scale:Be,l=J(1,0,0,0,1,0,e[0],e[1],1),u=J(Math.cos(t),-Math.sin(t),0,Math.sin(t),Math.cos(t),0,0,0,1),i=J(r[0],0,0,0,r[1],0,0,0,1),a=xe();return se(a,u,i),se(a,l,a),a}class Tt{constructor(){this.geometries=new Array,this.materials=new Array,this.textures=new Array}}class It{constructor(e,t,r){this.name=e,this.lodThreshold=t,this.pivotOffset=r,this.stageResources=new Tt,this.numberOfVertices=0}}const B=()=>Pe.getLogger("esri.views.3d.layers.graphics.objectResourceUtils");async function At(n,e){const t=await _t(n,e),r=await Ct(t.textureDefinitions??{},e);let l=0;for(const u in r)if(r.hasOwnProperty(u)){const i=r[u];l+=i?.image?i.image.width*i.image.height*4:0}return{resource:t,textures:r,size:l+Ce(t)}}async function _t(n,e){const t=e?.streamDataRequester;if(t)return Mt(n,t,e);const r=await de(Ee(n,e));if(r.ok===!0)return r.value.data;fe(r.error),ve(r.error)}async function Mt(n,e,t){const r=await de(e.request(n,"json",t));if(r.ok===!0)return r.value;fe(r.error),ve(r.error.details.url)}function ve(n){throw new Se("",`Request for object resource failed: ${n}`)}function Ot(n){const e=n.params,t=e.topology;let r=!0;switch(e.vertexAttributes||(B().warn("Geometry must specify vertex attributes"),r=!1),e.topology){case"PerAttributeArray":break;case"Indexed":case null:case void 0:{const u=e.faces;if(u){if(e.vertexAttributes)for(const i in e.vertexAttributes){const a=u[i];a?.values?(a.valueType!=null&&a.valueType!=="UInt32"&&(B().warn(`Unsupported indexed geometry indices type '${a.valueType}', only UInt32 is currently supported`),r=!1),a.valuesPerElement!=null&&a.valuesPerElement!==1&&(B().warn(`Unsupported indexed geometry values per element '${a.valuesPerElement}', only 1 is currently supported`),r=!1)):(B().warn(`Indexed geometry does not specify face indices for '${i}' attribute`),r=!1)}}else B().warn("Indexed geometries must specify faces"),r=!1;break}default:B().warn(`Unsupported topology '${t}'`),r=!1}n.params.material||(B().warn("Geometry requires material"),r=!1);const l=n.params.vertexAttributes;for(const u in l)l[u].values||(B().warn("Geometries with externally defined attributes are not yet supported"),r=!1);return r}function Rt(n,e){const t=new Array,r=new Array,l=new Array,u=new ct,i=n.resource,a=pe.parse(i.version||"1.0","wosr");St.validate(a);const c=i.model.name,s=i.model.geometries,o=i.materialDefinitions??{},h=n.textures;let d=0;const f=new Map;for(let m=0;m<s.length;m++){const p=s[m];if(!Ot(p))continue;const b=Et(p),T=p.params.vertexAttributes,A=[],I=x=>{if(p.params.topology==="PerAttributeArray")return null;const _=p.params.faces;for(const R in _)if(R===x)return _[R].values;return null},F=T[v.POSITION],D=F.values.length/F.valuesPerElement;for(const x in T){const _=T[x],R=_.values,Z=I(x)??we(D);A.push([x,new j(R,Z,_.valuesPerElement,!0)])}const O=b.texture,y=h&&h[O];if(y&&!f.has(O)){const{image:x,parameters:_}=y,R=new be(x,_);r.push(R),f.set(O,R)}const N=f.get(O),X=N?N.id:void 0,S=b.material;let $=u.get(S,O);if($==null){const x=o[S.slice(S.lastIndexOf("/")+1)].params;x.transparency===1&&(x.transparency=0);const _=y&&y.alphaChannelUsage,R=x.transparency>0||_==="transparency"||_==="maskAndTransparency",Z=y?Te(y.alphaChannelUsage):void 0,re={ambient:ne(x.diffuse),diffuse:ne(x.diffuse),opacity:1-(x.transparency||0),transparent:R,textureAlphaMode:Z,textureAlphaCutoff:.33,textureId:X,initTextureTransparent:!0,doubleSided:!0,cullFace:te.None,colorMixMode:x.externalColorMixMode||"tint",textureAlphaPremultiplied:y?.parameters.preMultiplyAlpha??!1};e?.materialParameters&&Object.assign(re,e.materialParameters),$=new K(re,e),u.set(S,O,$)}l.push($);const Ie=new Q($,A);d+=A.find(x=>x[0]===v.POSITION)?.[1]?.indices.length??0,t.push(Ie)}return{engineResources:[{name:c,stageResources:{textures:r,materials:l,geometries:t},pivotOffset:i.model.pivotOffset,numberOfVertices:d,lodThreshold:null}],referenceBoundingBox:Bt(t)}}function Bt(n){const e=ge();return n.forEach(t=>{const r=t.boundingInfo;r!=null&&(W(e,r.bbMin),W(e,r.bbMax))}),e}async function Ct(n,e){const t=new Array;for(const u in n){const i=n[u],a=i.images[0].data;if(!a){B().warn("Externally referenced texture data is not yet supported");continue}const c=i.encoding+";base64,"+a,s="/textureDefinitions/"+u,o=i.channels==="rgba"?i.alphaChannelUsage||"transparency":"none",h={noUnpackFlip:!0,wrap:{s:ie.REPEAT,t:ie.REPEAT},preMultiplyAlpha:Te(o)!==M.Opaque},d=e?.disableTextures?Promise.resolve(null):mt(c,e);t.push(d.then(f=>({refId:s,image:f,parameters:h,alphaChannelUsage:o})))}const r=await Promise.all(t),l={};for(const u of r)l[u.refId]=u;return l}function Te(n){switch(n){case"mask":return M.Mask;case"maskAndTransparency":return M.MaskBlend;case"none":return M.Opaque;default:return M.Blend}}function Et(n){const e=n.params;return{id:1,material:e.material,texture:e.texture,region:e.texture}}const St=new pe(1,2,"wosr");async function $r(n,e){const t=Pt(_e(n));if(t.fileType==="wosr"){const h=await(e.cache?e.cache.loadWOSR(t.url,e):At(t.url,e)),{engineResources:d,referenceBoundingBox:f}=Rt(h,e);return{lods:d,referenceBoundingBox:f,isEsriSymbolResource:!1,isWosr:!0}}let r;if(e.cache)r=await e.cache.loadGLTF(t.url,e,!!e.usePBR);else{const{loadGLTF:h}=await Ae(()=>import("./loader-9nSBBBan.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10]),import.meta.url);r=await h(new it(e.streamDataRequester),t.url,e,e.usePBR)}const l=r.model.meta?.ESRI_proxyEllipsoid,u=r.meta.isEsriSymbolResource&&l!=null&&r.meta.ESRI_webstyle==="EsriRealisticTreesStyle";u&&!r.customMeta.esriTreeRendering&&(r.customMeta.esriTreeRendering=!0,Ut(r,l));const i=!!e.usePBR,a=r.meta.isEsriSymbolResource?{usePBR:i,isSchematic:!1,treeRendering:u,mrrFactors:Ke}:{usePBR:i,isSchematic:!1,treeRendering:!1,mrrFactors:Qe},c={...e.materialParameters,treeRendering:u},{engineResources:s,referenceBoundingBox:o}=Lt(r,a,c,e,t.specifiedLodIndex);return{lods:s,referenceBoundingBox:o,isEsriSymbolResource:r.meta.isEsriSymbolResource,isWosr:!1}}function Pt(n){const e=n.match(/(.*\.(gltf|glb))(\?lod=([0-9]+))?$/);return e?{fileType:"gltf",url:e[1],specifiedLodIndex:e[4]!=null?Number(e[4]):null}:n.match(/(.*\.(json|json\.gz))$/)?{fileType:"wosr",url:n,specifiedLodIndex:null}:{fileType:"unknown",url:n,specifiedLodIndex:null}}function Lt(n,e,t,r,l){const u=n.model,i=new Array,a=new Map,c=new Map,s=u.lods.length,o=ge();return u.lods.forEach((h,d)=>{const f=r.skipHighLods===!0&&(s>1&&d===0||s>3&&d===1)||r.skipHighLods===!1&&l!=null&&d!==l;if(f&&d!==0)return;const m=new It(h.name,h.lodThreshold,[0,0,0]);h.parts.forEach(p=>{const b=f?new K({},r):Ft(u,p,m,e,t,a,c,r),{geometry:T,vertexCount:A}=Nt(p,b??new K({},r)),I=T.boundingInfo;I!=null&&d===0&&(W(o,I.bbMin),W(o,I.bbMax)),b!=null&&(m.stageResources.geometries.push(T),m.numberOfVertices+=A)}),f||i.push(m)}),{engineResources:i,referenceBoundingBox:o}}function Ft(n,e,t,r,l,u,i,a){const c=e.material+(e.attributes.normal?"_normal":"")+(e.attributes.color?"_color":"")+(e.attributes.texCoord0?"_texCoord0":"")+(e.attributes.tangent?"_tangent":""),s=n.materials.get(e.material),o=e.attributes.texCoord0!=null,h=e.attributes.normal!=null;if(s==null)return null;const d=Gt(s.alphaMode);if(!u.has(c)){if(o){const y=(N,X=!1)=>{if(N!=null&&!i.has(N)){const S=n.textures.get(N);if(S!=null){const $=S.data;i.set(N,new be(Y($)?$.data:$,{...S.parameters,preMultiplyAlpha:!Y($)&&X,encoding:Y($)&&$.encoding!=null?$.encoding:void 0}))}}};y(s.textureColor,d!==M.Opaque),y(s.textureNormal),y(s.textureOcclusion),y(s.textureEmissive),y(s.textureMetallicRoughness)}const m=s.color[0]**(1/U),p=s.color[1]**(1/U),b=s.color[2]**(1/U),T=s.emissiveFactor[0]**(1/U),A=s.emissiveFactor[1]**(1/U),I=s.emissiveFactor[2]**(1/U),F=s.textureColor!=null&&o?i.get(s.textureColor):null,D=Xe({normalTexture:s.textureNormal,metallicRoughnessTexture:s.textureMetallicRoughness,metallicFactor:s.metallicFactor,roughnessFactor:s.roughnessFactor,emissiveTexture:s.textureEmissive,emissiveFactor:s.emissiveFactor,occlusionTexture:s.textureOcclusion}),O=s.normalTextureTransform?.scale!=null?s.normalTextureTransform?.scale:Le;u.set(c,new K({...r,transparent:d===M.Blend,customDepthTest:ft.Lequal,textureAlphaMode:d,textureAlphaCutoff:s.alphaCutoff,diffuse:[m,p,b],ambient:[m,p,b],opacity:s.opacity,doubleSided:s.doubleSided,doubleSidedType:"winding-order",cullFace:s.doubleSided?te.None:te.Back,hasVertexColors:!!e.attributes.color,hasVertexTangents:!!e.attributes.tangent,normalType:h?me.Attribute:me.ScreenDerivative,castShadows:!0,receiveShadows:s.receiveShadows,receiveAmbientOcclusion:s.receiveAmbientOcclustion,textureId:F?.id,colorMixMode:s.colorMixMode,normalTextureId:s.textureNormal!=null&&o?i.get(s.textureNormal).id:void 0,textureAlphaPremultiplied:F!=null&&!!F.parameters.preMultiplyAlpha,occlusionTextureId:s.textureOcclusion!=null&&o?i.get(s.textureOcclusion).id:void 0,emissiveTextureId:s.textureEmissive!=null&&o?i.get(s.textureEmissive).id:void 0,metallicRoughnessTextureId:s.textureMetallicRoughness!=null&&o?i.get(s.textureMetallicRoughness).id:void 0,emissiveFactor:[T,A,I],mrrFactors:D?Ze:[s.metallicFactor,s.roughnessFactor,r.mrrFactors[2]],isSchematic:D,colorTextureTransformMatrix:q(s.colorTextureTransform),normalTextureTransformMatrix:q(s.normalTextureTransform),scale:[O[0],O[1]],occlusionTextureTransformMatrix:q(s.occlusionTextureTransform),emissiveTextureTransformMatrix:q(s.emissiveTextureTransform),metallicRoughnessTextureTransformMatrix:q(s.metallicRoughnessTextureTransform),...l},a))}const f=u.get(c);if(t.stageResources.materials.push(f),o){const m=p=>{p!=null&&t.stageResources.textures.push(i.get(p))};m(s.textureColor),m(s.textureNormal),m(s.textureOcclusion),m(s.textureEmissive),m(s.textureMetallicRoughness)}return f}function Nt(n,e){const t=n.attributes.position.count,r=ot(n.indices||t,n.primitiveType),l=V(3*t),{typedBuffer:u,typedBufferStride:i}=n.attributes.position;rt(l,u,n.transform,3,i);const a=[[v.POSITION,new j(l,r,3,!0)]];if(n.attributes.normal!=null){const s=V(3*t),{typedBuffer:o,typedBufferStride:h}=n.attributes.normal;Fe(k,n.transform),st(s,o,k,3,h),oe(k)&&le(s,s),a.push([v.NORMAL,new j(s,r,3,!0)])}if(n.attributes.tangent!=null){const s=V(4*t),{typedBuffer:o,typedBufferStride:h}=n.attributes.tangent;Ne(k,n.transform),nt(s,o,k,4,h),oe(k)&&le(s,s,4),a.push([v.TANGENT,new j(s,r,4,!0)])}if(n.attributes.texCoord0!=null){const s=V(2*t),{typedBuffer:o,typedBufferStride:h}=n.attributes.texCoord0;at(s,o,2,h),a.push([v.UV0,new j(s,r,2,!0)])}const c=n.attributes.color;if(c!=null){const s=new Uint8Array(4*t);c.elementCount===4?c instanceof Je?he(s,c,255):c instanceof ye?ut(s,c):c instanceof Ye&&he(s,c,1/256):(s.fill(255),c instanceof $e?ce(s,c.typedBuffer,255,4,c.typedBufferStride):n.attributes.color instanceof et?lt(s,c.typedBuffer,4,n.attributes.color.typedBufferStride):n.attributes.color instanceof tt&&ce(s,c.typedBuffer,1/256,4,c.typedBufferStride)),a.push([v.COLOR,new j(s,r,4,!0)])}return{geometry:new Q(e,a),vertexCount:t}}const k=xe();function Gt(n){switch(n){case"BLEND":return M.Blend;case"MASK":return M.Mask;case"OPAQUE":case null:case void 0:return M.Opaque}}function Ut(n,e){for(let t=0;t<n.model.lods.length;++t){const r=n.model.lods[t];for(const l of r.parts){const u=l.attributes.normal;if(u==null)return;const i=l.attributes.position,a=i.count,c=G(),s=G(),o=G(),h=new Uint8Array(4*a),d=new Float64Array(3*a),f=Ge(He(),l.transform);let m=0,p=0;for(let b=0;b<a;b++){i.getVec(b,s),u.getVec(b,c),ee(s,s,l.transform),Ue(o,s,e.center),ae(o,o,e.radius);const T=o[2],A=ke(o),I=Math.min(.45+.55*A*A,1);ae(o,o,e.radius),f!==null&&ee(o,o,f),je(o,o),t+1!==n.model.lods.length&&n.model.lods.length>1&&qe(o,o,c,T>-1?.2:Math.min(-4*T-3.8,1)),d[m]=o[0],d[m+1]=o[1],d[m+2]=o[2],m+=3,h[p]=255*I,h[p+1]=255*I,h[p+2]=255*I,h[p+3]=255,p+=4}l.attributes.normal=new $e(d),l.attributes.color=new ye(h)}}}export{$r as fetch,Pt as parseUrl};