import{bw as s,bx as i,by as l,bz as d,bW as n,bV as f,hd as S,bt as g,bu as y,U as b,he as w}from"./main-Bw8nB3u2.js";let o=class extends d{constructor(e){super(e),this.geometries=[],this.outSpatialReference=null,this.transformation=null,this.transformForward=null}toJSON(){const e=this.geometries.map(a=>a.toJSON()),t=this.geometries[0],r={};return r.outSR=n(this.outSpatialReference),r.inSR=n(t.spatialReference),r.geometries=JSON.stringify({geometryType:f(t),geometries:e}),this.transformation&&(r.transformation=this.transformation.wkid||JSON.stringify(this.transformation)),this.transformForward!=null&&(r.transformForward=this.transformForward),r}};s([i()],o.prototype,"geometries",void 0),s([i({json:{read:{source:"outSR"}}})],o.prototype,"outSpatialReference",void 0),s([i()],o.prototype,"transformation",void 0),s([i()],o.prototype,"transformForward",void 0),o=s([l("esri.rest.support.ProjectParameters")],o);const R=o,j=S(R);async function J(e,t,r){t=j(t);const a=g(e),p={...a.query,f:"json",...t.toJSON()},m=t.outSpatialReference,u=f(t.geometries[0]),c=y(p,r);return b(a.path+"/project",c).then(({data:{geometries:h}})=>w(h,u,m))}export{J as n,R as p};