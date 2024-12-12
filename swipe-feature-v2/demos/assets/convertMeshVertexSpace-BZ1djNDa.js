import { dN as s, s as s$1, P as a } from './main-DoQYi8g2.js';
import { l } from './MeshVertexAttributes-BGhQto9M.js';
import { M } from './vertexSpaceConversion-C-TXZhUD.js';
import './preload-helper-dJJaZANz.js';
import './mat3f64-BNcPSU_3.js';
import './mat4f64-UGgSIQpQ.js';
import './spatialReferenceEllipsoidUtils-C83-zxSc.js';
import './computeTranslationToOriginAndRotation-0dlTIS_H.js';
import './meshVertexSpaceUtils-spKyWh7e.js';
import './MeshLocalVertexSpace-BSf56qoj.js';
import './vec3-DfjnbWc3.js';
import './projection-BzYcMf64.js';
import './DoubleArray-DIWiUICL.js';
import './BufferView-B4of455W.js';
import './vec4-BqxzVKzB.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.30/esri/copyright.txt for details.
*/
async function i(i,n,c){await Promise.resolve(),s(c);const m=M(i,n);if(!m)throw new s$1("meshUtils:convertVertexSpace()","Failed to convert to provided vertex space due to projection errors");const p=i.cloneAndModifyVertexAttributes(new l({...m,uv:a(i.vertexAttributes.uv),color:a(i.vertexAttributes.color)}),n);return p.transform=null,p}

export { i as convertMeshVertexSpace };
