import { dN as s, s as s$1, P as a } from './main-5ivotA7d.js';
import { l } from './MeshVertexAttributes-BEPzAW87.js';
import { M } from './vertexSpaceConversion-gXIMBmQ2.js';
import './preload-helper-dJJaZANz.js';
import './mat3f64-BNcPSU_3.js';
import './mat4f64-UGgSIQpQ.js';
import './spatialReferenceEllipsoidUtils-BCtq26AC.js';
import './computeTranslationToOriginAndRotation-DpXeX_Fh.js';
import './meshVertexSpaceUtils-DcFBFyHk.js';
import './MeshLocalVertexSpace-zIkNRdee.js';
import './vec3-B5zfTS4z.js';
import './projection-o15496_e.js';
import './DoubleArray-D04FUswz.js';
import './BufferView-BPu5ppB7.js';
import './vec4-g_DyLy6N.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.30/esri/copyright.txt for details.
*/
async function i(i,n,c){await Promise.resolve(),s(c);const m=M(i,n);if(!m)throw new s$1("meshUtils:convertVertexSpace()","Failed to convert to provided vertex space due to projection errors");const p=i.cloneAndModifyVertexAttributes(new l({...m,uv:a(i.vertexAttributes.uv),color:a(i.vertexAttributes.color)}),n);return p.transform=null,p}

export { i as convertMeshVertexSpace };
