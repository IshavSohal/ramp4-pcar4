import { dN as s, s as s$1, P as a } from './main-De_LB6CK.js';
import { l } from './MeshVertexAttributes-C8WaYfTQ.js';
import { M } from './vertexSpaceConversion-CUyRO8GH.js';
import './preload-helper-dJJaZANz.js';
import './mat3f64-BNcPSU_3.js';
import './mat4f64-UGgSIQpQ.js';
import './spatialReferenceEllipsoidUtils-Cyuld_dU.js';
import './computeTranslationToOriginAndRotation-DnypH-8m.js';
import './meshVertexSpaceUtils-5TjQRTSc.js';
import './MeshLocalVertexSpace-CxLA1CTa.js';
import './vec3-CZ7lj5p3.js';
import './projection-D5PNRBAr.js';
import './DoubleArray-D7vEiMX8.js';
import './BufferView-4E1wW6he.js';
import './vec4-DL7AGgEj.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.30/esri/copyright.txt for details.
*/
async function i(i,n,c){await Promise.resolve(),s(c);const m=M(i,n);if(!m)throw new s$1("meshUtils:convertVertexSpace()","Failed to convert to provided vertex space due to projection errors");const p=i.cloneAndModifyVertexAttributes(new l({...m,uv:a(i.vertexAttributes.uv),color:a(i.vertexAttributes.color)}),n);return p.transform=null,p}

export { i as convertMeshVertexSpace };
