import{bq as m,co as c}from"./main-DLFm5qwH.js";function u(n,e){return e?"xoffset"in e&&e.xoffset?Math.max(n,Math.abs(e.xoffset)):"yoffset"in e&&e.yoffset?Math.max(n,Math.abs(e.yoffset||0)):n:n}function h(n){let e=0,r=0;for(let t=0;t<n.length;t++){const o=n[t].size;typeof o=="number"&&(e+=o,r++)}return e/r}function p(n,e){return typeof n=="number"?n:n?.stops?.length?h(n.stops):e}function b(n,e){if(!e)return n;const r=e.filter(s=>s.type==="size").map(s=>{const{maxSize:f,minSize:i}=s;return(p(f,n)+p(i,n))/2});let t=0;const o=r.length;if(o===0)return n;for(let s=0;s<o;s++)t+=r[s];const a=Math.floor(t/o);return Math.max(a,n)}function M(n){const e=n?.renderer,r=n?.pointerType,t=r==="touch"?9:6;if(!e)return t;const o="visualVariables"in e?b(t,e.visualVariables):t;if(e.type==="simple")return u(o,e.symbol);if(e.type==="unique-value"){let a=o;return e.uniqueValueInfos?.forEach(s=>{a=u(a,s.symbol)}),a}if(e.type==="class-breaks"){let a=o;return e.classBreakInfos.forEach(s=>{a=u(a,s.symbol)}),a}return e.type==="dot-density"||e.type,o}function z(n,e,r,t=new m){let o=0;if(r.type==="2d")o=e*(r.resolution??0);else if(r.type==="3d"){const x=r.overlayPixelSizeInMapUnits(n),l=r.basemapSpatialReference;o=l==null||l.equals(r.spatialReference)?e*x:c(l)/c(r.spatialReference)}const a=n.x-o,s=n.y-o,f=n.x+o,i=n.y+o,{spatialReference:y}=r;return t.xmin=Math.min(a,f),t.ymin=Math.min(s,i),t.xmax=Math.max(a,f),t.ymax=Math.max(s,i),t.spatialReference=y,t}function q(n,e,r){const t=r.toMap(n);return t==null?!1:z(t,M(),r,d).intersects(e)}const d=new m;export{q as i,M as o,z as r};