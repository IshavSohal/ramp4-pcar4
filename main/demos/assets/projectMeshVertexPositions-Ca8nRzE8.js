import{a6 as p,bH as e}from"./main-DLFm5qwH.js";import{b as m}from"./MeshLocalVertexSpace-Cv6LmFkl.js";import{B as s}from"./vertexSpaceConversion-BFOf_EKG.js";import"./preload-helper-ExcqyqRp.js";import"./mat3f64-q3fE-ZOt.js";import"./mat4f64-CSKppSlJ.js";import"./spatialReferenceEllipsoidUtils-Jtk-AUbV.js";import"./computeTranslationToOriginAndRotation-ani6dtaQ.js";import"./projectPointToVector-h5UFRPjg.js";import"./meshVertexSpaceUtils-BDv5Mmex.js";import"./vec3-BCGjrbrM.js";import"./BufferView-oPCvv7rg.js";import"./vec4-DBWsUEkI.js";function w(t,i){const o=s(t,m.absolute);if(!o)return null;let r=o.position;return p(t.spatialReference,i)||(r=new Float64Array(o.position.length),e(o.position,t.spatialReference,0,r,i,0))?r:null}export{w as projectMeshVertexPositions};