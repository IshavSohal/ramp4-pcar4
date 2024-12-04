import { dN as s, s as s$1, P as a } from './main-CZWQ_YsF.js';
import { l } from './MeshVertexAttributes-VvkmibXJ.js';
import { M } from './vertexSpaceConversion-Cu_s8yrz.js';
import './preload-helper-dJJaZANz.js';
import './mat3f64-BNcPSU_3.js';
import './mat4f64-UGgSIQpQ.js';
import './spatialReferenceEllipsoidUtils-B2bMcklQ.js';
import './computeTranslationToOriginAndRotation-Cdjrz4gK.js';
import './meshVertexSpaceUtils-TW10x9gC.js';
import './MeshLocalVertexSpace-y9TmdXDm.js';
import './vec3-CAiOVLWh.js';
import './projection-RJWxRZW8.js';
import './DoubleArray-ixwUEB71.js';
import './BufferView-4Xu_Qv0k.js';
import './vec4-BSpjOAWB.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.30/esri/copyright.txt for details.
*/
async function i(i,n,c){await Promise.resolve(),s(c);const m=M(i,n);if(!m)throw new s$1("meshUtils:convertVertexSpace()","Failed to convert to provided vertex space due to projection errors");const p=i.cloneAndModifyVertexAttributes(new l({...m,uv:a(i.vertexAttributes.uv),color:a(i.vertexAttributes.color)}),n);return p.transform=null,p}

export { i as convertMeshVertexSpace };
