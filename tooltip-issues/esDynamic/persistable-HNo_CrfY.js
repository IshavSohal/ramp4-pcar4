import{ey as j,ez as N,eA as P,eB as h,eC as x,eD as A,eE as b,eF as S,eG as v,eH as R,s as $,eI as O,e4 as F,aw as J,eJ as K,ax as z,eK as C}from"./main-DSYcF9d7.js";import{i as B}from"./multiOriginJSONSupportUtils-DGETddQl.js";import{p as y}from"./resourceExtension-BhDLgIde.js";function D(e){const r=e?.origins??[void 0];return(o,n)=>{const t=E(e,o,n);for(const c of r){const i=j(o,c,n);for(const s in t)i[s]=t[s]}}}function E(e,r,o){if(e?.type==="resource")return G(e,r,o);switch(e?.type??"other"){case"other":return{read:!0,write:!0};case"url":{const{read:n,write:t}=C;return{read:n,write:t}}}}function G(e,r,o){const n=N(r,o);return{type:String,read:(t,c,i)=>{const s=P(t,c,i);return n.type===String?s:typeof n.type=="function"?new n.type({url:s}):void 0},write:{writer(t,c,i,s){if(!s?.resources)return typeof t=="string"?void(c[i]=h(t,s)):void(c[i]=t.write({},s));const a=V(t),p=h(a,{...s,verifyItemRelativeUrls:s?.verifyItemRelativeUrls?{writtenUrls:s.verifyItemRelativeUrls.writtenUrls,rootPath:void 0}:void 0},x.NO),l=n.type!==String&&(!B(this)||s?.origin&&this.originIdOf(o)>A(s.origin)),u={object:this,propertyName:o,value:t,targetUrl:p,dest:c,targetPropertyName:i,context:s,params:e};s?.portalItem&&p&&!b(p)?l&&e?.contentAddressed?g(u):l?H(u):L(u):s?.portalItem&&(p==null||S(p)!=null||v(p)||l)?g(u):c[i]=p}}}}function g(e){const{targetUrl:r,params:o,value:n,context:t,dest:c,targetPropertyName:i}=e;if(!t.portalItem)return;const s=R(r),a=U(n,r,t);if(o?.contentAddressed&&a.type!=="json")return void t.messages?.push(new $("persistable:contentAddressingUnsupported",`Property "${i}" is trying to serializing a resource with content of type ${a.type} with content addressing. Content addressing is only supported for json resources.`,{content:a}));const p=o?.contentAddressed&&a.type==="json"?O(a.jsonString):s?.filename??F(),l=J(o?.prefix??s?.prefix,p),u=`${l}.${y(a)}`;if(o?.contentAddressed&&t.resources&&a.type==="json"){const f=t.resources.toKeep.find(({resource:m})=>m.path===u)??t.resources.toAdd.find(({resource:m})=>m.path===u);if(f)return void(c[i]=f.resource.itemRelativeUrl)}const d=t.portalItem.resourceFromPath(u);v(r)&&t.resources&&t.resources.pendingOperations.push(K(r).then(f=>{d.path=`${l}.${y({type:"blob",blob:f})}`,c[i]=d.itemRelativeUrl}).catch(()=>{}));const I=o?.compress??!1;t.resources&&w({...e,resource:d,content:a,compress:I,updates:t.resources.toAdd}),c[i]=d.itemRelativeUrl}function H(e){const{context:r,targetUrl:o,params:n,value:t,dest:c,targetPropertyName:i}=e;if(!r.portalItem)return;const s=r.portalItem.resourceFromPath(o),a=U(t,o,r),p=y(a),l=z(s.path),u=n?.compress??!1;p===l?(r.resources&&w({...e,resource:s,content:a,compress:u,updates:r.resources.toUpdate}),c[i]=o):g(e)}function L({context:e,targetUrl:r,dest:o,targetPropertyName:n}){e.portalItem&&e.resources&&(e.resources.toKeep.push({resource:e.portalItem.resourceFromPath(r),compress:!1}),o[n]=r)}function w({object:e,propertyName:r,updates:o,resource:n,content:t,compress:c}){const i=s=>{Y(e,r,s)};o.push({resource:n,content:t,compress:c,finish:i})}function U(e,r,o){return typeof e=="string"?{type:"url",url:r}:{type:"json",jsonString:JSON.stringify(e.toJSON(o))}}function V(e){return e==null?null:typeof e=="string"?e:e.url}function Y(e,r,o){typeof e[r]=="string"?e[r]=o.url:e[r].url=o.url}export{D as j};