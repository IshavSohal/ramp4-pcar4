import{aw as p,s as h,ax as x,U as R}from"./main-Bw8nB3u2.js";import"./preload-helper-ExcqyqRp.js";async function F(e,t={},s){await e.load(s);const r=p(e.itemUrl,"resources"),{start:a=1,num:m=10,sortOrder:n="asc",sortField:f="resource"}=t,l={query:{start:a,num:m,sortOrder:n,sortField:f,token:e.apiKey},signal:s?.signal},o=await e.portal.request(r,l);return{total:o.total,nextStart:o.nextStart,resources:o.resources.map(({created:d,size:c,resource:i})=>({created:new Date(d),size:c,resource:e.resourceFromPath(i)}))}}async function S(e,t,s,r){const a=new Map;for(const{resource:n,content:f,compress:l,access:o}of t){if(!n.hasPath())throw new h(`portal-item-resource-${s}:invalid-path`,"Resource does not have a valid path");const[d,c]=g(n.path),i=`${d}/${l??""}/${o??""}`;a.has(i)||a.set(i,{prefix:d,compress:l,access:o,files:[]}),a.get(i).files.push({fileName:c,content:f})}await e.load(r);const m=p(e.userItemUrl,s==="add"?"addResources":"updateResources");for(const{prefix:n,compress:f,access:l,files:o}of a.values())for(let c=0;c<o.length;c+=25){const i=o.slice(c,c+25),u=new FormData;n&&n!=="."&&u.append("resourcesPrefix",n),f&&u.append("compress","true"),l&&u.append("access",l);let y=0;for(const{fileName:v,content:b}of i)u.append("file"+ ++y,b,v);u.append("f","json"),await e.portal.request(m,{method:"post",body:u,signal:r?.signal})}}async function O(e,t,s){if(!t.hasPath())throw new h("portal-item-resources-remove:invalid-path","Resource does not have a valid path");await e.load(s);const r=p(e.userItemUrl,"removeResources");await e.portal.request(r,{method:"post",query:{resource:t.path},signal:s?.signal}),t.portalItem=null}async function U(e,t){await e.load(t);const s=p(e.userItemUrl,"removeResources");return e.portal.request(s,{method:"post",query:{deleteAll:!0},signal:t?.signal})}function g(e){const t=e.lastIndexOf("/");return t===-1?[".",e]:[e.slice(0,t),e.slice(t+1)]}function w(e){const[t,s]=P(e),[r,a]=g(t);return[r,a,s]}function P(e){const t=x(e);return t==null?[e,""]:[e.slice(0,e.length-t.length-1),`.${t}`]}async function $(e){return e.type==="blob"?e.blob:e.type==="json"?new Blob([e.jsonString],{type:"application/json"}):(await R(e.url,{responseType:"blob"})).data}function j(e,t){if(!e.hasPath())return null;const[s,,r]=w(e.path);return e.portalItem.resourceFromPath(p(s,t+r))}function T(e,t){if(!e.hasPath())return null;const[s,,r]=w(e.path);return e.portalItem.resourceFromPath(p(s,t+r))}export{S as addOrUpdateResources,$ as contentToBlob,F as fetchResources,j as getSiblingOfSameType,T as getSiblingOfSameTypeI,U as removeAllResources,O as removeResource,w as splitPrefixFileNameAndExtension};