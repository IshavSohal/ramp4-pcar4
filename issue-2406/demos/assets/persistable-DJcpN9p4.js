import{eB as $,eC as j,eD as N,eE as h,eF as P,eG as x,eH as b,eI as S,eJ as v,eK as A,s as O,eL as R,e7 as F,aw as J,eM as K,ax as C,eN as H}from"./main-BdYDOcNT.js";import{i as z}from"./multiOriginJSONSupportUtils-C0wm8_Yw.js";import{p as y}from"./resourceExtension-k2jrAwAe.js";function k(e){const r=e?.origins??[void 0];return(o,n)=>{const t=B(e,o,n);for(const a of r){const i=$(o,a,n);for(const s in t)i[s]=t[s]}}}function B(e,r,o){if(e?.type==="resource")return D(e,r,o);switch(e?.type??"other"){case"other":return{read:!0,write:!0};case"url":{const{read:n,write:t}=H;return{read:n,write:t}}}}function D(e,r,o){const n=j(r,o);return{type:String,read:(t,a,i)=>{const s=N(t,a,i);return n.type===String?s:typeof n.type=="function"?new n.type({url:s}):void 0},write:{writer(t,a,i,s){if(!s?.resources)return typeof t=="string"?void(a[i]=h(t,s)):void(a[i]=t.write({},s));const c=L(t),p=h(c,{...s,verifyItemRelativeUrls:s?.verifyItemRelativeUrls?{writtenUrls:s.verifyItemRelativeUrls.writtenUrls,rootPath:void 0}:void 0},P.NO),l=n.type!==String&&(!z(this)||s?.origin&&this.originIdOf(o)>x(s.origin)),u={object:this,propertyName:o,value:t,targetUrl:p,dest:a,targetPropertyName:i,context:s,params:e};s?.portalItem&&p&&!b(p)?l&&e?.contentAddressed?g(u):l?E(u):G(u):s?.portalItem&&(p==null||S(p)!=null||v(p)||l)?g(u):a[i]=p}}}}function g(e){const{targetUrl:r,params:o,value:n,context:t,dest:a,targetPropertyName:i}=e;if(!t.portalItem)return;const s=A(r),c=w(n,r,t);if(o?.contentAddressed&&c.type!=="json")return void t.messages?.push(new O("persistable:contentAddressingUnsupported",`Property "${i}" is trying to serializing a resource with content of type ${c.type} with content addressing. Content addressing is only supported for json resources.`,{content:c}));const p=o?.contentAddressed&&c.type==="json"?R(c.jsonString):s?.filename??F(),l=J(o?.prefix??s?.prefix,p),u=`${l}.${y(c)}`;if(o?.contentAddressed&&t.resources&&c.type==="json"){const f=t.resources.toKeep.find(({resource:m})=>m.path===u)??t.resources.toAdd.find(({resource:m})=>m.path===u);if(f)return void(a[i]=f.resource.itemRelativeUrl)}const d=t.portalItem.resourceFromPath(u);v(r)&&t.resources&&t.resources.pendingOperations.push(K(r).then(f=>{d.path=`${l}.${y({type:"blob",blob:f})}`,a[i]=d.itemRelativeUrl}).catch(()=>{}));const I=o?.compress??!1;t.resources&&U({...e,resource:d,content:c,compress:I,updates:t.resources.toAdd}),a[i]=d.itemRelativeUrl}function E(e){const{context:r,targetUrl:o,params:n,value:t,dest:a,targetPropertyName:i}=e;if(!r.portalItem)return;const s=r.portalItem.resourceFromPath(o),c=w(t,o,r),p=y(c),l=C(s.path),u=n?.compress??!1;p===l?(r.resources&&U({...e,resource:s,content:c,compress:u,updates:r.resources.toUpdate}),a[i]=o):g(e)}function G({context:e,targetUrl:r,dest:o,targetPropertyName:n}){e.portalItem&&e.resources&&(e.resources.toKeep.push({resource:e.portalItem.resourceFromPath(r),compress:!1}),o[n]=r)}function U({object:e,propertyName:r,updates:o,resource:n,content:t,compress:a}){const i=s=>{M(e,r,s)};o.push({resource:n,content:t,compress:a,finish:i})}function w(e,r,o){return typeof e=="string"?{type:"url",url:r}:{type:"json",jsonString:JSON.stringify(e.toJSON(o))}}function L(e){return e==null?null:typeof e=="string"?e:e.url}function M(e,r,o){typeof e[r]=="string"?e[r]=o.url:e[r].url=o.url}export{k as j};