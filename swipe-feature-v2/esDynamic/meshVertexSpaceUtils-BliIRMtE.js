import{D as s,E as p,G as u,H as l}from"./main-DKOGNH0V.js";import{a as f,b as d}from"./MeshLocalVertexSpace-BZ0qz59e.js";function c(){return u.getLogger("esri.geometry.Mesh")}function t(e){return e.origin!=null}function v(e){return t(e.vertexSpace)}function x(e,r){if(!t(e))return null;const[i,n,o]=e.origin;return new s({x:i,y:n,z:o,spatialReference:r})}function h(e,r){const{x:i,y:n,z:o,spatialReference:g}=e,a=[i,n,o??0];return r?.geographic!==void 0&&(p(c(),"option: geographic",{replacement:"Use the `vertexSpace` option instead.",version:"4.29",warnOnce:!0}),r.vertexSpace&&c().warn("Deprecated geographic flag ignored since vertexSpace option is provided.")),(r?.vertexSpace??w(r?.geographic)??m(g))==="local"?new f({origin:a}):new d({origin:a})}function m(e){return e.isGeographic||e.isWebMercator?"local":"georeferenced"}function w(e){return e==null?void 0:e?"local":"georeferenced"}function y(e,r){return e.type===r.type&&(e.origin===r.origin||e.origin!=null&&r.origin!=null&&l(e.origin,r.origin))}export{t as a,v as g,y as m,h as s,x as u};