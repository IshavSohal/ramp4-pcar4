import{a5 as n,bE as r}from"./main-VekDu-pG.js";import{b as s}from"./MeshLocalVertexSpace-CGalKZZO.js";import{B as a}from"./vertexSpaceConversion-Bzx_5LyC.js";function l(e,i){const o=a(e,s.absolute);if(!o)return null;let t=o.position;return n(e.spatialReference,i)||(t=new Float64Array(o.position.length),r(o.position,e.spatialReference,0,t,i,0))?t:null}export{l as projectMeshVertexPositions};