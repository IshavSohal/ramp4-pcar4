import { J as s$2, fR as d$1 } from './main-b44d912b.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
const t$1=()=>s$2.getLogger("esri.rest.support.generateRendererUtils");function l$1(e,t){return Number(e.toFixed(t))}function a$1(e){const{normalizationTotal:t}=e;return {classBreaks:u$1(e),normalizationTotal:t}}function u$1(e){const t=e.definition,{classificationMethod:n,normalizationType:a,definedInterval:u}=t,i=t.breakCount??1,c=[];let b=e.values;if(0===b.length)return [];b=b.sort(((e,t)=>e-t));const V=b[0],p=b[b.length-1];if("equal-interval"===n)if(b.length>=i){const e=(p-V)/i;let t=V;for(let n=1;n<i;n++){const u=l$1(V+n*e,6);c.push({minValue:t,maxValue:u,label:s$1(t,u,a)}),t=u;}c.push({minValue:t,maxValue:p,label:s$1(t,p,a)});}else b.forEach((e=>{c.push({minValue:e,maxValue:e,label:s$1(e,e,a)});}));else if("natural-breaks"===n){const t=o$1(b),n=e.valueFrequency||t.valueFrequency,u=r$1(t.uniqueValues,n,i);let f=V;for(let e=1;e<i;e++)if(t.uniqueValues.length>e){const n=l$1(t.uniqueValues[u[e]],6);c.push({minValue:f,maxValue:n,label:s$1(f,n,a)}),f=n;}c.push({minValue:f,maxValue:p,label:s$1(f,p,a)});}else if("quantile"===n)if(b.length>=i&&V!==p){let e=V,t=Math.ceil(b.length/i),l=0;for(let n=1;n<i;n++){let u=t+l-1;u>b.length&&(u=b.length-1),u<0&&(u=0),c.push({minValue:e,maxValue:b[u],label:s$1(e,b[u],a)}),e=b[u],l+=t,t=Math.ceil((b.length-l)/(i-n));}c.push({minValue:e,maxValue:p,label:s$1(e,p,a)});}else {let e=-1;for(let t=0;t<b.length;t++){const l=b[t];l!==e&&(e=l,c.push({minValue:e,maxValue:l,label:s$1(e,l,a)}),e=l);}}else if("standard-deviation"===n){const e=h$1(b),t=m$1(b,e);if(0===t)c.push({minValue:b[0],maxValue:b[0],label:s$1(b[0],b[0],a)});else {const n=f$1(V,p,i,e,t)*t;let u=0,o=V;for(let t=i;t>=1;t--){const r=l$1(e-(t-.5)*n,6);c.push({minValue:o,maxValue:r,label:s$1(o,r,a)}),o=r,u++;}let r=l$1(e+.5*n,6);c.push({minValue:o,maxValue:r,label:s$1(o,r,a)}),o=r,u++;for(let t=1;t<=i;t++)r=u===2*i?p:l$1(e+(t+.5)*n,6),c.push({minValue:o,maxValue:r,label:s$1(o,r,a)}),o=r,u++;}}else if("defined-interval"===n){if(!u)return c;const e=b[0],t=b[b.length-1],n=Math.ceil((t-e)/u);let o=e;for(let r=1;r<n;r++){const t=l$1(e+r*u,6);c.push({minValue:o,maxValue:t,label:s$1(o,t,a)}),o=t;}c.push({minValue:o,maxValue:t,label:s$1(o,t,a)});}return c}function s$1(e,t,l){let n=null;return n=e===t?l&&"percent-of-total"===l?e+"%":e.toString():l&&"percent-of-total"===l?e+"% - "+t+"%":e+" - "+t,n}function o$1(e){const t=[],l=[];let n=Number.MIN_VALUE,a=1,u=-1;for(let s=0;s<e.length;s++){const o=e[s];o===n?(a++,l[u]=a):null!==o&&(t.push(o),n=o,a=1,l.push(a),u++);}return {uniqueValues:t,valueFrequency:l}}function r$1(e,t,l){const n=e.length,a=[];l>n&&(l=n);for(let s=0;s<l;s++)a.push(Math.round(s*n/l-1));a.push(n-1);let u=i$1(a,e,t,l);return c(u.mean,u.sdcm,a,e,t,l)&&(u=i$1(a,e,t,l)),a}function i$1(e,t,l,n){let a=[],u=[],s=[],o=0;const r=[],i=[];for(let m=0;m<n;m++){const n=b$1(m,e,t,l);r.push(n.sbMean),i.push(n.sbSdcm),o+=i[m];}let c,f=o,h=!0;for(;h||o<f;){h=!1,a=[];for(let t=0;t<n;t++)a.push(e[t]);for(let l=0;l<n;l++)for(let a=e[l]+1;a<=e[l+1];a++)if(c=t[a],l>0&&a!==e[l+1]&&Math.abs(c-r[l])>Math.abs(c-r[l-1]))e[l]=a;else if(l<n-1&&e[l]!==a-1&&Math.abs(c-r[l])>Math.abs(c-r[l+1])){e[l+1]=a-1;break}f=o,o=0,u=[],s=[];for(let a=0;a<n;a++){u.push(r[a]),s.push(i[a]);const n=b$1(a,e,t,l);r[a]=n.sbMean,i[a]=n.sbSdcm,o+=i[a];}}if(o>f){for(let t=0;t<n;t++)e[t]=a[t],r[t]=u[t],i[t]=s[t];o=f;}return {mean:r,sdcm:i}}function c(e,t,l,n,a,u){let s=0,o=0,r=0,i=0,c=!0;for(let f=0;f<2&&c;f++){0===f&&(c=!1);for(let f=0;f<u-1;f++)for(;l[f+1]+1!==l[f+2];){l[f+1]=l[f+1]+1;const u=b$1(f,l,n,a);r=u.sbMean,s=u.sbSdcm;const h=b$1(f+1,l,n,a);if(i=h.sbMean,o=h.sbSdcm,!(s+o<t[f]+t[f+1])){l[f+1]=l[f+1]-1;break}t[f]=s,t[f+1]=o,e[f]=r,e[f+1]=i,c=!0;}for(let f=u-1;f>0;f--)for(;l[f]!==l[f-1]+1;){l[f]=l[f]-1;const u=b$1(f-1,l,n,a);r=u.sbMean,s=u.sbSdcm;const h=b$1(f,l,n,a);if(i=h.sbMean,o=h.sbSdcm,!(s+o<t[f-1]+t[f])){l[f]=l[f]+1;break}t[f-1]=s,t[f]=o,e[f-1]=r,e[f]=i,c=!0;}}return c}function f$1(e,t,l,n,a){let u=Math.max(n-e,t-n)/a/l;return u=u>=1?1:u>=.5?.5:.25,u}function h$1(e){let t=0;for(let l=0;l<e.length;l++)t+=e[l];return t/=e.length,t}function m$1(e,t){let l=0;for(let n=0;n<e.length;n++){const a=e[n];l+=(a-t)*(a-t);}l/=e.length;return Math.sqrt(l)}function b$1(e,l,n,a){let u=0,s=0;for(let t=l[e]+1;t<=l[e+1];t++){const e=a[t];u+=n[t]*e,s+=e;}s<=0&&t$1().warn("Exception in Natural Breaks calculation");const o=u/s;let r=0;for(let t=l[e]+1;t<=l[e+1];t++)r+=a[t]*(n[t]-o)**2;return {sbMean:o,sbSdcm:r}}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
const t="<Null>",l="equal-interval",i=1,a=5,o=10,r=/\s*(\+|-)?((\d+(\.\d+)?)|(\.\d+))\s*/gi,u=new Set(["esriFieldTypeDate","esriFieldTypeInteger","esriFieldTypeSmallInteger","esriFieldTypeSingle","esriFieldTypeDouble","esriFieldTypeLong","esriFieldTypeOID","esriFieldTypeBigInteger"]),s=new Set(["esriFieldTypeTimeOnly","esriFieldTypeDateOnly"]),m=["min","max","avg","stddev","count","sum","variance","nullcount","median"];function c$1(n){return null==n||"string"==typeof n&&!n?t:n}function f(n){const e=null!=n.normalizationField||null!=n.normalizationType,t=null!=n.minValue||null!=n.maxValue,l=!!n.sqlExpression&&n.supportsSQLExpression;return !e&&!t&&!l}function d(n){const e=n.returnDistinct?[...new Set(n.values)]:n.values,t=e.filter((n=>null!=n)).sort(),l=t.length,i={count:l,min:t[0],max:t[l-1]};return n.supportsNullCount&&(i.nullcount=e.length-l),n.percentileParams&&(i.median=v(e,n.percentileParams)),i}function p(n){const{values:e,useSampleStdDev:t,supportsNullCount:l}=n;let i=Number.POSITIVE_INFINITY,a=Number.NEGATIVE_INFINITY,o=null,r=null,u=null,s=null,m=0;const c=null==n.minValue?-1/0:n.minValue,f=null==n.maxValue?1/0:n.maxValue;for(const p of e)Number.isFinite(p)?p>=c&&p<=f&&(o=null===o?p:o+p,i=Math.min(i,p),a=Math.max(a,p),m++):"string"==typeof p&&m++;if(m&&null!=o){r=o/m;let n=0;for(const t of e)Number.isFinite(t)&&t>=c&&t<=f&&(n+=(t-r)**2);s=t?m>1?n/(m-1):0:m>0?n/m:0,u=Math.sqrt(s);}else i=null,a=null;const d={avg:r,count:m,max:a,min:i,stddev:u,sum:o,variance:s};return l&&(d.nullcount=e.length-m),n.percentileParams&&(d.median=v(e,n.percentileParams)),d}function v(n,e){const{fieldType:t,value:l,orderBy:i,isDiscrete:a}=e,o=T(t,"desc"===i);if(0===(n=[...n].filter((n=>null!=n)).sort(((n,e)=>o(n,e)))).length)return null;if(l<=0)return n[0];if(l>=1)return n[n.length-1];const r=(n.length-1)*l,u=Math.floor(r),s=u+1,m=r%1,c=n[u],f=n[s];return s>=n.length||a||"string"==typeof c||"string"==typeof f?c:c*(1-m)+f*m}function T(n,e){if(n){if(u.has(n))return S(e);if(s.has(n))return z(e,!1);if("esriFieldTypeTimestampOffset"===n)return x(e);const t=z(e,!0);if("esriFieldTypeString"===n)return t;if("esriFieldTypeGUID"===n||"esriFieldTypeGlobalID"===n)return (n,e)=>t(M(n),M(e))}const t=e?1:-1,l=S(e),i=z(e,!0);return (n,e)=>"number"==typeof n&&"number"==typeof e?l(n,e):"string"==typeof n&&"string"==typeof e?i(n,e):t}const g=(n,e)=>null==n?null==e?0:1:null==e?-1:null,h=(n,e)=>null==n?null==e?0:-1:null==e?1:null;function V(n){return n?g:h}const b=(n,e)=>h(n,e)??(n===e?0:new Date(n).getTime()-new Date(e).getTime()),y=(n,e)=>g(n,e)??(n===e?0:new Date(e).getTime()-new Date(n).getTime());function x(n){return n?y:b}const F=(n,e)=>h(n,e)??(n===e?0:n<e?-1:1),D=(n,e)=>g(n,e)??(n===e?0:n<e?1:-1);function z(n,e){if(!e)return n?D:F;const t=V(n);return n?(n,e)=>{const l=t(n,e);return null!=l?l:(n=n.toUpperCase())>(e=e.toUpperCase())?-1:n<e?1:0}:(n,e)=>{const l=t(n,e);return null!=l?l:(n=n.toUpperCase())<(e=e.toUpperCase())?-1:n>e?1:0}}const I=(n,e)=>g(n,e)??e-n,N=(n,e)=>h(n,e)??n-e;function S(n){return n?I:N}function M(n){return n.substr(24,12)+n.substr(19,4)+n.substr(16,2)+n.substr(14,2)+n.substr(11,2)+n.substr(9,2)+n.substr(6,2)+n.substr(4,2)+n.substr(2,2)+n.substr(0,2)}function C(n,e){let t;for(t in n)m.includes(t)&&(Number.isFinite(n[t])||(n[t]=null));return e?(["avg","stddev","variance"].forEach((e=>{null!=n[e]&&(n[e]=Math.ceil(n[e]??0));})),n):n}function k(n){const e={};for(let t of n)(null==t||"string"==typeof t&&""===t.trim())&&(t=null),null==e[t]?e[t]={count:1,data:t}:e[t].count++;return {count:e}}function w(n){return "coded-value"!==n?.type?[]:n.codedValues.map((n=>n.code))}function $(n,e,t,l){const i=n.count,a=[];if(t&&e){const n=[],t=w(e[0]);for(const i of t)if(e[1]){const t=w(e[1]);for(const a of t)if(e[2]){const t=w(e[2]);for(const e of t)n.push(`${c$1(i)}${l}${c$1(a)}${l}${c$1(e)}`);}else n.push(`${c$1(i)}${l}${c$1(a)}`);}else n.push(i);for(const e of n)i.hasOwnProperty(e)||(i[e]={data:e,count:0});}for(const o in i){const n=i[o];a.push({value:n.data,count:n.count,label:n.label});}return {uniqueValueInfos:a}}function B(n,e,t,l){let i=null;switch(e){case"log":0!==n&&(i=Math.log(n)*Math.LOG10E);break;case"percent-of-total":Number.isFinite(l)&&0!==l&&(i=n/l*100);break;case"field":Number.isFinite(t)&&0!==t&&(i=n/t);break;case"natural-log":n>0&&(i=Math.log(n));break;case"square-root":n>0&&(i=n**.5);}return i}function E(n,t){const l=q({field:t.field,normalizationType:t.normalizationType,normalizationField:t.normalizationField,classificationMethod:t.classificationMethod,standardDeviationInterval:t.standardDeviationInterval,breakCount:t.numClasses||a});return n=O(n,t.minValue,t.maxValue),a$1({definition:l,values:n,normalizationTotal:t.normalizationTotal})}function O(n,e,t){const l=e??-1/0,i=t??1/0;return n.filter((n=>Number.isFinite(n)&&n>=l&&n<=i))}function q(e){const{breakCount:t,field:a,normalizationField:o,normalizationType:r}=e,u=e.classificationMethod||l,s="standard-deviation"===u?e.standardDeviationInterval||i:void 0;return new d$1({breakCount:t,classificationField:a,classificationMethod:u,normalizationField:"field"===r?o:void 0,normalizationType:r,standardDeviationInterval:s})}function P(n,e){let t=n.classBreaks;const l=t.length,i=t[0]?.minValue,a=t[l-1]?.maxValue,o="standard-deviation"===e,u=r;return t=t.map((n=>{const e=n.label,t={minValue:n.minValue,maxValue:n.maxValue,label:e};if(o&&e){const n=e.match(u),l=n?.map((n=>+n.trim()))??[];2===l.length?(t.minStdDev=l[0],t.maxStdDev=l[1],l[0]<0&&l[1]>0&&(t.hasAvg=!0)):1===l.length&&(e.includes("<")?(t.minStdDev=null,t.maxStdDev=l[0]):e.includes(">")&&(t.minStdDev=l[0],t.maxStdDev=null));}return t})),{minValue:i,maxValue:a,classBreakInfos:t,normalizationTotal:n.normalizationTotal}}function U(n,e){const t=G(n,e);if(null==t.min&&null==t.max)return {bins:[],minValue:t.min,maxValue:t.max,normalizationTotal:e.normalizationTotal};const l=t.intervals,i=t.min??0,a=t.max??0,o=l.map(((n,e)=>({minValue:l[e][0],maxValue:l[e][1],count:0})));for(const r of n)if(null!=r&&r>=i&&r<=a){const n=L(l,r);n>-1&&o[n].count++;}return {bins:o,minValue:i,maxValue:a,normalizationTotal:e.normalizationTotal}}function G(n,e){const{field:t,classificationMethod:l,standardDeviationInterval:i,normalizationType:a,normalizationField:r,normalizationTotal:u,minValue:s,maxValue:m}=e,c=e.numBins||o;let d=null,v=null,T=null;if((!l||"equal-interval"===l)&&!a){if(null!=s&&null!=m)d=s,v=m;else {const e=p({values:n,minValue:s,maxValue:m,useSampleStdDev:!a,supportsNullCount:f({normalizationType:a,normalizationField:r,minValue:s,maxValue:m})});d=e.min??null,v=e.max??null;}T=j(d??0,v??0,c);}else {const{classBreaks:e}=E(n,{field:t,normalizationType:a,normalizationField:r,normalizationTotal:u,classificationMethod:l,standardDeviationInterval:i,minValue:s,maxValue:m,numClasses:c});d=e[0].minValue,v=e[e.length-1].maxValue,T=e.map((n=>[n.minValue,n.maxValue]));}return {min:d,max:v,intervals:T}}function L(n,e){let t=-1;for(let l=n.length-1;l>=0;l--){if(e>=n[l][0]){t=l;break}}return t}function j(n,e,t){const l=(e-n)/t,i=[];let a,o=n;for(let r=1;r<=t;r++)a=o+l,a=Number(a.toFixed(16)),i.push([o,r===t?e:a]),o=a;return i}

export { $, B, C, E, P, T, U, c$1 as c, d, f, k, p, v };