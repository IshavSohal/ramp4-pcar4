import{iV as S,b2 as n,U as y,kR as A,kS as d}from"./main-DSYcF9d7.js";import"./mat4f64-Dn1WEGBx.js";import"./projectVectorToVector-BWD7iRem.js";import"./sphere-OjqW1zLn.js";import{I as g}from"./I3SBinaryReader-Bgd3ii1j.js";import"./floatRGBA-TC19-WFV.js";import"./NormalAttribute.glsl-iV9hv6hR.js";import"./interfaces-DN2-jsJC.js";import"./BindType-9iOk18Ed.js";import"./VertexAttribute-DqD5S0a2.js";import{I as h}from"./orientedBoundingBox-D9852bn4.js";var a;(function(o){o[o.TRANSPARENT=0]="TRANSPARENT",o[o.OPAQUE=1]="OPAQUE"})(a||(a={}));var u;(function(o){o[o.Uniform=0]="Uniform",o[o.Varying=1]="Varying",o[o.COUNT=2]="COUNT"})(u||(u={}));var c,I;(function(o){o[o.Solid=0]="Solid",o[o.Sketch=1]="Sketch",o[o.Mixed=2]="Mixed",o[o.COUNT=3]="COUNT"})(c||(c={})),function(o){o[o.REGULAR=0]="REGULAR",o[o.SILHOUETTE=1]="SILHOUETTE"}(I||(I={}));function D(o){return{...P,...o,type:c.Solid}}const P={color:S(0,0,0,.2),size:1,extensionLength:0,opacity:1,objectTransparency:a.OPAQUE,hasSlicePlane:!1};S(0,0,0,.2),a.OPAQUE,n();var p;async function _(o,s,t,m,N,U,R,O){const E=[];for(const r of s)if(r&&N.includes(r.name)){const i=`${o}/nodes/${t}/attributes/${r.key}/0`;E.push({url:i,storageInfo:r})}const T=await Promise.allSettled(E.map(r=>y(r.url,{responseType:"array-buffer",query:{...R,token:U},signal:O?.signal}).then(i=>g(r.storageInfo,i.data)))),l=[];for(const r of m){const i={};for(let e=0;e<T.length;e++){const f=T[e];if(f.status==="fulfilled"){const C=f.value;i[E[e].storageInfo.name]=x(C,r)}}l.push(i)}return l}(function(o){o[o.OUTSIDE=0]="OUTSIDE",o[o.INTERSECTS_CENTER_OUTSIDE=1]="INTERSECTS_CENTER_OUTSIDE",o[o.INTERSECTS_CENTER_INSIDE=2]="INTERSECTS_CENTER_INSIDE",o[o.INSIDE=3]="INSIDE"})(p||(p={}));const k=-32768,v=-(2**31);function x(o,s){if(!o)return null;const t=o[s];return A(o)?t===k?null:t:d(o)?t===v?null:t:t!=t?null:t}D({color:[0,0,0,0],opacity:0}),n(),n(),new h,new Array(72);export{_ as V};