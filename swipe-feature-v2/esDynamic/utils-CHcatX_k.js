import{G as B,h6 as $}from"./main-DKOGNH0V.js";const U=()=>B.getLogger("esri.rest.support.generateRendererUtils");function g(e,l){return Number(e.toFixed(l))}function O(e){const{normalizationTotal:l}=e;return{classBreaks:P(e),normalizationTotal:l}}function P(e){const l=e.definition,{classificationMethod:n,normalizationType:t,definedInterval:i}=l,r=l.breakCount??1,s=[];let a=e.values;if(a.length===0)return[];a=a.sort((c,d)=>c-d);const m=a[0],p=a[a.length-1];if(n==="equal-interval")if(a.length>=r){const c=(p-m)/r;let d=m;for(let o=1;o<r;o++){const u=g(m+o*c,6);s.push({minValue:d,maxValue:u,label:V(d,u,t)}),d=u}s.push({minValue:d,maxValue:p,label:V(d,p,t)})}else a.forEach(c=>{s.push({minValue:c,maxValue:c,label:V(c,c,t)})});else if(n==="natural-breaks"){const c=G(a),d=e.valueFrequency||c.valueFrequency,o=L(c.uniqueValues,d,r);let u=m;for(let f=1;f<r;f++)if(c.uniqueValues.length>f){const h=g(c.uniqueValues[o[f]],6);s.push({minValue:u,maxValue:h,label:V(u,h,t)}),u=h}s.push({minValue:u,maxValue:p,label:V(u,p,t)})}else if(n==="quantile")if(a.length>=r&&m!==p){let c=m,d=Math.ceil(a.length/r),o=0;for(let u=1;u<r;u++){let f=d+o-1;f>a.length&&(f=a.length-1),f<0&&(f=0),s.push({minValue:c,maxValue:a[f],label:V(c,a[f],t)}),c=a[f],o+=d,d=Math.ceil((a.length-o)/(r-u))}s.push({minValue:c,maxValue:p,label:V(c,p,t)})}else{let c=-1;for(let d=0;d<a.length;d++){const o=a[d];o!==c&&(c=o,s.push({minValue:c,maxValue:o,label:V(c,o,t)}),c=o)}}else if(n==="standard-deviation"){const c=Y(a),d=Q(a,c);if(d===0)s.push({minValue:a[0],maxValue:a[0],label:V(a[0],a[0],t)});else{const o=_(m,p,r,c,d)*d;let u=0,f=m;for(let b=r;b>=1;b--){const F=g(c-(b-.5)*o,6);s.push({minValue:f,maxValue:F,label:V(f,F,t)}),f=F,u++}let h=g(c+.5*o,6);s.push({minValue:f,maxValue:h,label:V(f,h,t)}),f=h,u++;for(let b=1;b<=r;b++)h=u===2*r?p:g(c+(b+.5)*o,6),s.push({minValue:f,maxValue:h,label:V(f,h,t)}),f=h,u++}}else if(n==="defined-interval"){if(!i)return s;const c=a[0],d=a[a.length-1],o=Math.ceil((d-c)/i);let u=c;for(let f=1;f<o;f++){const h=g(c+f*i,6);s.push({minValue:u,maxValue:h,label:V(u,h,t)}),u=h}s.push({minValue:u,maxValue:d,label:V(u,d,t)})}return s}function V(e,l,n){let t=null;return t=e===l?n&&n==="percent-of-total"?e+"%":e.toString():n&&n==="percent-of-total"?e+"% - "+l+"%":e+" - "+l,t}function G(e){const l=[],n=[];let t=Number.MIN_VALUE,i=1,r=-1;for(let s=0;s<e.length;s++){const a=e[s];a===t?(i++,n[r]=i):a!==null&&(l.push(a),t=a,i=1,n.push(i),r++)}return{uniqueValues:l,valueFrequency:n}}function L(e,l,n){const t=e.length,i=[];n>t&&(n=t);for(let s=0;s<n;s++)i.push(Math.round(s*t/n-1));i.push(t-1);let r=I(i,e,l,n);return A(r.mean,r.sdcm,i,e,l,n)&&(r=I(i,e,l,n)),i}function I(e,l,n,t){let i=[],r=[],s=[],a=0;const m=[],p=[];for(let u=0;u<t;u++){const f=v(u,e,l,n);m.push(f.sbMean),p.push(f.sbSdcm),a+=p[u]}let c,d=a,o=!0;for(;o||a<d;){o=!1,i=[];for(let u=0;u<t;u++)i.push(e[u]);for(let u=0;u<t;u++)for(let f=e[u]+1;f<=e[u+1];f++)if(c=l[f],u>0&&f!==e[u+1]&&Math.abs(c-m[u])>Math.abs(c-m[u-1]))e[u]=f;else if(u<t-1&&e[u]!==f-1&&Math.abs(c-m[u])>Math.abs(c-m[u+1])){e[u+1]=f-1;break}d=a,a=0,r=[],s=[];for(let u=0;u<t;u++){r.push(m[u]),s.push(p[u]);const f=v(u,e,l,n);m[u]=f.sbMean,p[u]=f.sbSdcm,a+=p[u]}}if(a>d){for(let u=0;u<t;u++)e[u]=i[u],m[u]=r[u],p[u]=s[u];a=d}return{mean:m,sdcm:p}}function A(e,l,n,t,i,r){let s=0,a=0,m=0,p=0,c=!0;for(let d=0;d<2&&c;d++){d===0&&(c=!1);for(let o=0;o<r-1;o++)for(;n[o+1]+1!==n[o+2];){n[o+1]=n[o+1]+1;const u=v(o,n,t,i);m=u.sbMean,s=u.sbSdcm;const f=v(o+1,n,t,i);if(p=f.sbMean,a=f.sbSdcm,!(s+a<l[o]+l[o+1])){n[o+1]=n[o+1]-1;break}l[o]=s,l[o+1]=a,e[o]=m,e[o+1]=p,c=!0}for(let o=r-1;o>0;o--)for(;n[o]!==n[o-1]+1;){n[o]=n[o]-1;const u=v(o-1,n,t,i);m=u.sbMean,s=u.sbSdcm;const f=v(o,n,t,i);if(p=f.sbMean,a=f.sbSdcm,!(s+a<l[o-1]+l[o])){n[o]=n[o]+1;break}l[o-1]=s,l[o]=a,e[o-1]=m,e[o]=p,c=!0}}return c}function _(e,l,n,t,i){let r=Math.max(t-e,l-t)/i/n;return r=r>=1?1:r>=.5?.5:.25,r}function Y(e){let l=0;for(let n=0;n<e.length;n++)l+=e[n];return l/=e.length,l}function Q(e,l){let n=0;for(let t=0;t<e.length;t++){const i=e[t];n+=(i-l)*(i-l)}return n/=e.length,Math.sqrt(n)}function v(e,l,n,t){let i=0,r=0;for(let m=l[e]+1;m<=l[e+1];m++){const p=t[m];i+=n[m]*p,r+=p}r<=0&&U().warn("Exception in Natural Breaks calculation");const s=i/r;let a=0;for(let m=l[e]+1;m<=l[e+1];m++)a+=t[m]*(n[m]-s)**2;return{sbMean:s,sbSdcm:a}}const R="<Null>",j="equal-interval",H=1,J=5,K=10,W=/\s*(\+|-)?((\d+(\.\d+)?)|(\.\d+))\s*/gi,X=new Set(["esriFieldTypeDate","esriFieldTypeInteger","esriFieldTypeSmallInteger","esriFieldTypeSingle","esriFieldTypeDouble","esriFieldTypeLong","esriFieldTypeOID","esriFieldTypeBigInteger"]),Z=new Set(["esriFieldTypeTimeOnly","esriFieldTypeDateOnly"]),ee=["min","max","avg","stddev","count","sum","variance","nullcount","median"];function x(e){return e==null||typeof e=="string"&&!e?R:e}function D(e){const l=e.normalizationField!=null||e.normalizationType!=null,n=e.minValue!=null||e.maxValue!=null,t=!!e.sqlExpression&&e.supportsSQLExpression;return!l&&!n&&!t}function le(e){const{outStatisticTypes:l}=e,n=e.returnDistinct?[...new Set(e.values)]:e.values,t=n.filter(s=>s!=null).sort(),i=t.length,r={count:i,min:t[0],max:t[i-1]};return e.supportsNullCount&&(r.nullcount=n.length-i),!e.percentileParams||l?.include?.length&&!l.include.includes("median")||l?.exclude?.length&&l.exclude.includes("median")||(r.median=M(n,e.percentileParams)),r}function N(e){const{values:l,useSampleStdDev:n,supportsNullCount:t,outStatisticTypes:i}=e;let r=Number.POSITIVE_INFINITY,s=Number.NEGATIVE_INFINITY,a=null,m=null,p=null,c=null,d=0;const o=e.minValue==null?-1/0:e.minValue,u=e.maxValue==null?1/0:e.maxValue;for(const h of l)Number.isFinite(h)?h>=o&&h<=u&&(a=a===null?h:a+h,r=Math.min(r,h),s=Math.max(s,h),d++):typeof h=="string"&&d++;if(d&&a!=null){m=a/d;let h=0;for(const b of l)Number.isFinite(b)&&b>=o&&b<=u&&(h+=(b-m)**2);c=n?d>1?h/(d-1):0:d>0?h/d:0,p=Math.sqrt(c)}else r=null,s=null;const f={avg:m,count:d,max:s,min:r,stddev:p,sum:a,variance:c};return t&&(f.nullcount=l.length-d),!e.percentileParams||i?.include?.length&&!i.include.includes("median")||i?.exclude?.length&&i.exclude.includes("median")||(f.median=M(l,e.percentileParams)),f}function M(e,l){const{fieldType:n,value:t,orderBy:i,isDiscrete:r}=l,s=k(n,i==="desc");if((e=[...e].filter(u=>u!=null).sort((u,f)=>s(u,f))).length===0)return null;if(t<=0)return e[0];if(t>=1)return e[e.length-1];const a=(e.length-1)*t,m=Math.floor(a),p=m+1,c=a%1,d=e[m],o=e[p];return p>=e.length||r||typeof d=="string"||typeof o=="string"?d:d*(1-c)+o*c}function k(e,l){if(e){if(X.has(e))return C(l);if(Z.has(e))return z(l,!1);if(e==="esriFieldTypeTimestampOffset")return ae(l);const s=z(l,!0);if(e==="esriFieldTypeString")return s;if(e==="esriFieldTypeGUID"||e==="esriFieldTypeGlobalID")return(a,m)=>s(w(a),w(m))}const n=l?1:-1,t=C(l),i=z(l,!0),r=q(l);return(s,a)=>typeof s=="number"&&typeof a=="number"?t(s,a):typeof s=="string"&&typeof a=="string"?i(s,a):r(s,a)??n}const T=(e,l)=>e==null?l==null?0:1:l==null?-1:null,y=(e,l)=>e==null?l==null?0:-1:l==null?1:null;function q(e){return e?T:y}const ne=(e,l)=>y(e,l)??(e===l?0:new Date(e).getTime()-new Date(l).getTime()),te=(e,l)=>T(e,l)??(e===l?0:new Date(l).getTime()-new Date(e).getTime());function ae(e){return e?te:ne}const ie=(e,l)=>y(e,l)??(e===l?0:e<l?-1:1),ue=(e,l)=>T(e,l)??(e===l?0:e<l?1:-1);function z(e,l){if(!l)return e?ue:ie;const n=q(e);return e?(t,i)=>n(t,i)??((t=t.toUpperCase())>(i=i.toUpperCase())?-1:t<i?1:0):(t,i)=>n(t,i)??((t=t.toUpperCase())<(i=i.toUpperCase())?-1:t>i?1:0)}const oe=(e,l)=>T(e,l)??l-e,re=(e,l)=>y(e,l)??e-l;function C(e){return e?oe:re}function w(e){return e.slice(24,36)+e.slice(19,23)+e.slice(16,18)+e.slice(14,16)+e.slice(11,13)+e.slice(9,11)+e.slice(6,8)+e.slice(4,6)+e.slice(2,4)+e.slice(0,2)}function se(e,l,n){let t;for(t in e)l?.include?.length&&!l.include.includes(t)||l?.exclude?.length&&l.exclude.includes(t)?delete e[t]:ee.includes(t)&&(Number.isFinite(e[t])||(e[t]=null));return n&&["avg","stddev","variance"].forEach(i=>{e[i]!=null&&(e[i]=Math.ceil(e[i]??0))}),e}function ce(e){const l={};for(let n of e)(n==null||typeof n=="string"&&n.trim()==="")&&(n=null),l[n]==null?l[n]={count:1,data:n}:l[n].count++;return{count:l}}function S(e){return e?.type!=="coded-value"?[]:e.codedValues.map(l=>l.code)}function me(e,l,n,t){const i=e.count,r=[];if(n&&l){const s=[],a=S(l[0]);for(const m of a)if(l[1]){const p=S(l[1]);for(const c of p)if(l[2]){const d=S(l[2]);for(const o of d)s.push(`${x(m)}${t}${x(c)}${t}${x(o)}`)}else s.push(`${x(m)}${t}${x(c)}`)}else s.push(m);for(const m of s)i.hasOwnProperty(m)||(i[m]={data:m,count:0})}for(const s in i){const a=i[s];r.push({value:a.data,count:a.count,label:a.label})}return{uniqueValueInfos:r}}function fe(e,l,n,t){let i=null;switch(l){case"log":e!==0&&(i=Math.log(e)*Math.LOG10E);break;case"percent-of-total":Number.isFinite(t)&&t!==0&&(i=e/t*100);break;case"field":Number.isFinite(n)&&n!==0&&(i=e/n);break;case"natural-log":e>0&&(i=Math.log(e));break;case"square-root":e>0&&(i=e**.5)}return i}function E(e,l){const n=pe({field:l.field,normalizationType:l.normalizationType,normalizationField:l.normalizationField,classificationMethod:l.classificationMethod,standardDeviationInterval:l.standardDeviationInterval,breakCount:l.numClasses||J});return e=de(e,l.minValue,l.maxValue),O({definition:n,values:e,normalizationTotal:l.normalizationTotal})}function de(e,l,n){const t=l??-1/0,i=n??1/0;return e.filter(r=>Number.isFinite(r)&&r>=t&&r<=i)}function pe(e){const{breakCount:l,field:n,normalizationField:t,normalizationType:i}=e,r=e.classificationMethod||j,s=r==="standard-deviation"?e.standardDeviationInterval||H:void 0,a=r==="defined-interval"?e.definedInterval:void 0;return new $({breakCount:l,classificationField:n,classificationMethod:r,normalizationField:i==="field"?t:void 0,normalizationType:i,standardDeviationInterval:s,definedInterval:a})}function he(e,l){let n=e.classBreaks;const t=n.length,i=n[0]?.minValue,r=n[t-1]?.maxValue,s=l==="standard-deviation",a=W;return n=n.map(m=>{const p=m.label,c={minValue:m.minValue,maxValue:m.maxValue,label:p};if(s&&p){const d=p.match(a),o=d?.map(u=>+u.trim())??[];o.length===2?(c.minStdDev=o[0],c.maxStdDev=o[1],o[0]<0&&o[1]>0&&(c.hasAvg=!0)):o.length===1&&(p.includes("<")?(c.minStdDev=null,c.maxStdDev=o[0]):p.includes(">")&&(c.minStdDev=o[0],c.maxStdDev=null))}return c}),{minValue:i,maxValue:r,classBreakInfos:n,normalizationTotal:e.normalizationTotal}}function Ve(e,l){const n=be(e,l);if(n.min==null&&n.max==null)return{bins:[],minValue:n.min,maxValue:n.max,normalizationTotal:l.normalizationTotal};const t=n.intervals,i=n.min??0,r=n.max??0,s=t.map((a,m)=>({minValue:t[m][0],maxValue:t[m][1],count:0}));for(const a of e)if(a!=null&&a>=i&&a<=r){const m=ge(t,a);m>-1&&s[m].count++}return{bins:s,minValue:i,maxValue:r,normalizationTotal:l.normalizationTotal}}function be(e,l){const{field:n,classificationMethod:t,standardDeviationInterval:i,normalizationType:r,normalizationField:s,normalizationTotal:a,minValue:m,maxValue:p}=l,c=l.numBins||K;let d=null,o=null,u=null;if((!t||t==="equal-interval")&&!r){if(m!=null&&p!=null)d=m,o=p;else{const f=N({values:e,minValue:m,maxValue:p,useSampleStdDev:!r,supportsNullCount:D({normalizationType:r,normalizationField:s,minValue:m,maxValue:p})});d=f.min??null,o=f.max??null}u=ve(d??0,o??0,c)}else{const{classBreaks:f}=E(e,{field:n,normalizationType:r,normalizationField:s,normalizationTotal:a,classificationMethod:t,standardDeviationInterval:i,minValue:m,maxValue:p,numClasses:c});d=f[0].minValue,o=f[f.length-1].maxValue,u=f.map(h=>[h.minValue,h.maxValue])}return{min:d,max:o,intervals:u}}function ge(e,l){let n=-1;for(let t=e.length-1;t>=0;t--)if(l>=e[t][0]){n=t;break}return n}function ve(e,l,n){const t=(l-e)/n,i=[];let r,s=e;for(let a=1;a<=n;a++)r=s+t,r=Number(r.toFixed(16)),i.push([s,a===n?l:r]),s=r;return i}export{me as $,fe as B,se as C,E,he as P,Ve as U,D as d,le as f,k as g,ce as k,x as m,N as p,M as v};