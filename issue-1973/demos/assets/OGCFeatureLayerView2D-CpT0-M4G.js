import { bd as e, be as y, bf as a$1 } from './main-5ivotA7d.js';
import { r as re } from './FeatureLayerView2D-BOX60sh9.js';
import './preload-helper-dJJaZANz.js';
import './Container-CEbThM4A.js';
import './highlightReasons-DF1DILMu.js';
import './definitions-BdwlvHBE.js';
import './enums-CwcDCDam.js';
import './Texture-syeFgIiX.js';
import './timeSupport-DusQPTOa.js';
import './LayerView-DFeSr6PP.js';
import './layerViewUtils-CRtvGSrJ.js';
import './TechniqueInstance-DBsmcB4d.js';
import './UpdateTracking2D-C4LWDD8Y.js';
import './BidiEngine-Z2aMxkhF.js';
import './GeometryUtils-BgJrHE3X.js';
import './enums-CHdyfzUK.js';
import './Rect-zdvLIBQm.js';
import './LabelMetric-CsopNW4j.js';
import './Program-6sDK-ryB.js';
import './VertexElementDescriptor-Bcj0303n.js';
import './BindType-DQnxDFt3.js';
import './Util-VK1Izig4.js';
import './TileContainer-CGL0etE_.js';
import './WGLContainer-CD55gFMT.js';
import './ProgramTemplate-BSP8vhTz.js';
import './vec3f32-CmlAce5k.js';
import './StyleDefinition-DkEWNPyD.js';
import './config-C86_VOH4.js';
import './earcut-B89C9uLK.js';
import './CircularArray-BCXLb8ry.js';
import './tileUtils-Ceq3VL9e.js';
import './SDFHelper-BI841E0q.js';
import './floatRGBA-D-o7v5zT.js';
import './FeatureCommandQueue-B1hxBKNw.js';
import './constants-BNnV1ogR.js';
import './HighlightCounter-Cx0IMhrD.js';
import './popupUtils-CF8yK8NJ.js';
import './RefreshableLayerView-CoNmphPn.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.30/esri/copyright.txt for details.
*/
const o=o=>{let t=class extends o{get availableFields(){return this.layer.fieldsIndex.fields.map((e=>e.name))}};return e([y()],t.prototype,"layer",void 0),e([y({readOnly:!0})],t.prototype,"availableFields",null),t=e([a$1("esri.views.layers.OGCFeatureLayerView")],t),t};

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.30/esri/copyright.txt for details.
*/
let t=class extends(o(re)){supportsSpatialReference(r){return this.layer.serviceSupportsSpatialReference(r)}};t=e([a$1("esri.views.2d.layers.OGCFeatureLayerView2D")],t);const a=t;

export { a as default };
