import{s as u,bq as c,br as f,bs as m,U as p}from"./main-VekDu-pG.js";async function g(i,s,o,r){if(!s)throw new u("post:missing-guid","guid for version is missing");const t=c(i),a=o.toJSON(),e=f(t.query,{query:m({...a,f:"json"}),...r,method:"post"});s.startsWith("{")&&(s=s.slice(1,-1));const n=`${t.path}/versions/${s}/deleteForwardEdits`,{data:d}=await p(n,e);return d}export{g as deleteForwardEdits};