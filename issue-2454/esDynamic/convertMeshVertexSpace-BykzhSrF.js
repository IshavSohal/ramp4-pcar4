import{J as n,s as a,T as i}from"./main-iFHo11y2.js";import{p as c}from"./MeshVertexAttributes-DddUpb0t.js";import{B as l}from"./vertexSpaceConversion-B5d1WJqP.js";async function p(e,o,t){await Promise.resolve(),n(t);const r=l(e,o,{useEllipsoid:t?.useEllipsoid});if(!r)throw new a("meshUtils:convertVertexSpace()","Failed to convert to provided vertex space due to projection errors");const s=e.cloneAndModifyVertexAttributes(new c({...r,uv:i(e.vertexAttributes.uv),color:i(e.vertexAttributes.color)}),o);return s.transform=null,s}export{p as convertMeshVertexSpace};