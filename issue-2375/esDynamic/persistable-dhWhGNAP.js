import{e5 as b,e6 as j,e7 as N,e8 as h,e9 as P,ea as x,eb as A,ec as S,ed as v,ee as R,s as $,ef as O,dC as F,b3 as C,eg as J,b4 as K,eh as z}from"./main-C02UbYD7.js";import{i as k}from"./multiOriginJSONSupportUtils-DGETddQl.js";import{p as y}from"./resourceExtension-WxVSw9jJ.js";function q(e){const r=e?.origins??[void 0];return(o,n)=>{const t=B(e,o,n);for(const a of r){const i=b(o,a,n);for(const s in t)i[s]=t[s]}}}function B(e,r,o){if(e?.type==="resource")return H(e,r,o);switch(e?.type??"other"){case"other":return{read:!0,write:!0};case"url":{const{read:n,write:t}=z;return{read:n,write:t}}}}function H(e,r,o){const n=j(r,o);return{type:String,read:(t,a,i)=>{const s=N(t,a,i);return n.type===String?s:typeof n.type=="function"?new n.type({url:s}):void 0},write:{writer(t,a,i,s){if(!s?.resources)return typeof t=="string"?void(a[i]=h(t,s)):void(a[i]=t.write({},s));const c=Y(t),p=h(c,{...s,verifyItemRelativeUrls:s?.verifyItemRelativeUrls?{writtenUrls:s.verifyItemRelativeUrls.writtenUrls,rootPath:void 0}:void 0},P.NO),d=n.type!==String&&(!k(this)||s?.origin&&this.originIdOf(o)>x(s.origin)),u={object:this,propertyName:o,value:t,targetUrl:p,dest:a,targetPropertyName:i,context:s,params:e};s?.portalItem&&p&&!A(p)?d&&e?.contentAddressed?g(u):d?L(u):V(u):s?.portalItem&&(p==null||S(p)!=null||v(p)||d)?g(u):a[i]=p}}}}function g(e){const{targetUrl:r,params:o,value:n,context:t,dest:a,targetPropertyName:i}=e;if(!t.portalItem)return;const s=R(r),c=w(n,r,t);if(o?.contentAddressed&&c.type!=="json")return void t.messages?.push(new $("persistable:contentAddressingUnsupported",`Property "${i}" is trying to serializing a resource with content of type ${c.type} with content addressing. Content addressing is only supported for json resources.`,{content:c}));const p=o?.contentAddressed&&c.type==="json"?O(c.jsonString):s?.filename??F(),d=C(o?.prefix??s?.prefix,p),u=`${d}.${y(c)}`;if(o?.contentAddressed&&t.resources&&c.type==="json"){const f=t.resources.toKeep.find(({resource:m})=>m.path===u)??t.resources.toAdd.find(({resource:m})=>m.path===u);if(f)return void(a[i]=f.resource.itemRelativeUrl)}const l=t.portalItem.resourceFromPath(u);v(r)&&t.resources&&t.resources.pendingOperations.push(J(r).then(f=>{l.path=`${d}.${y({type:"blob",blob:f})}`,a[i]=l.itemRelativeUrl}).catch(()=>{}));const I=o?.compress??!1;t.resources&&U({...e,resource:l,content:c,compress:I,updates:t.resources.toAdd}),a[i]=l.itemRelativeUrl}function L(e){const{context:r,targetUrl:o,params:n,value:t,dest:a,targetPropertyName:i}=e;if(!r.portalItem)return;const s=r.portalItem.resourceFromPath(o),c=w(t,o,r),p=y(c),d=K(s.path),u=n?.compress??!1;p===d?(r.resources&&U({...e,resource:s,content:c,compress:u,updates:r.resources.toUpdate}),a[i]=o):g(e)}function V({context:e,targetUrl:r,dest:o,targetPropertyName:n}){e.portalItem&&e.resources&&(e.resources.toKeep.push({resource:e.portalItem.resourceFromPath(r),compress:!1}),o[n]=r)}function U({object:e,propertyName:r,updates:o,resource:n,content:t,compress:a}){const i=s=>{Z(e,r,s)};o.push({resource:n,content:t,compress:a,finish:i})}function w(e,r,o){return typeof e=="string"?{type:"url",url:r}:{type:"json",jsonString:JSON.stringify(e.toJSON(o))}}function Y(e){return e==null?null:typeof e=="string"?e:e.url}function Z(e,r,o){typeof e[r]=="string"?e[r]=o.url:e[r].url=o.url}export{q as j};