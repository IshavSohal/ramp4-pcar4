import{bw as t,bx as l,by as S,ec as j,gW as d,eV as E,b0 as I,dS as m,gi as y,gX as b,gY as c,gI as h,gZ as x,g_ as i,ap as J}from"./main-DvIsqh7u.js";import{p as M}from"./normalizeUtilsSync-qhxOX8-4.js";import{e as p}from"./mat3f64-q3fE-ZOt.js";let s=class extends j{constructor(o){super(o)}get bounds(){const o=this.coords;return o?.extent==null?null:d(o.extent)}get coords(){const o=this.element.georeference?.coords;return E(o,this.spatialReference).geometry}get normalizedCoords(){return I.fromJSON(M(this.coords))}get normalizedBounds(){const o=this.normalizedCoords!=null?this.normalizedCoords.extent:null;return o!=null?d(o):null}};t([l()],s.prototype,"spatialReference",void 0),t([l()],s.prototype,"element",void 0),t([l()],s.prototype,"bounds",null),t([l()],s.prototype,"coords",null),t([l()],s.prototype,"normalizedCoords",null),t([l()],s.prototype,"normalizedBounds",null),s=t([S("esri.layers.support.MediaElementView")],s);const r=J(),a=p(),u=p(),g=p();function Y(o,e,n){return m(r,e[0],e[1],1),y(r,r,b(a,n)),r[2]===0?c(o,r[0],r[1]):c(o,r[0]/r[2],r[1]/r[2])}function Z(o,e,n){return f(u,e[0],e[1],e[2],e[3],e[4],e[5],e[6],e[7]),f(g,n[0],n[1],n[2],n[3],n[4],n[5],n[6],n[7]),h(o,x(u,u),g),o[8]!==0&&(o[0]/=o[8],o[1]/=o[8],o[2]/=o[8],o[3]/=o[8],o[4]/=o[8],o[5]/=o[8],o[6]/=o[8],o[7]/=o[8],o[8]/=o[8]),o}function f(o,e,n,z,v,C,V,$,w){i(o,e,z,C,n,v,V,1,1,1),m(r,$,w,1),x(a,o);const[B,N,R]=y(r,r,b(a,a));return i(a,B,0,0,0,N,0,0,0,R),h(o,a,o)}export{Z as j,s as m,Y as p};