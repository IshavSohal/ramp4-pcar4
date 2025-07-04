import { aW as e, aX as y, aY as c } from './main-BS0NWbi8.js';
import { X } from './FeatureLayerView2D-B2_7mxtk.js';
import './preload-helper-dJJaZANz.js';
import './Container-BrKS4a38.js';
import './highlightReasons-Cvd-BKpF.js';
import './definitions-slUvtMCM.js';
import './enums-CgzwTbC2.js';
import './Texture-_dw9leNp.js';
import './LayerView-CsM32c9y.js';
import './TechniqueInstance-DynWHoB5.js';
import './UpdateTracking2D-CJK_lfrf.js';
import './TurboLine-C4i75s3Q.js';
import './enums-DZmWLm_j.js';
import './earcut-BhGDjsms.js';
import './GeometryUtils-IVnUQPts.js';
import './Rect-9uT7dZO1.js';
import './LabelMetric-ghCl18OT.js';
import './Program-Ds9GVkui.js';
import './VertexElementDescriptor-BrMxIhbJ.js';
import './BindType-KnpK3yZX.js';
import './Util-gcn4IeLE.js';
import './constants-C0QDwCF4.js';
import './TileContainer-BwM9rNDr.js';
import './WGLContainer-CnDLmGJY.js';
import './ProgramTemplate-BP-A650B.js';
import './StyleDefinition-CR2vYxyv.js';
import './config-Di5U9yzL.js';
import './tileUtils-DU1rqR7R.js';
import './SDFHelper-CqxYPv7H.js';
import './floatRGBA-ChTT-x2y.js';
import './FeatureCommandQueue-BfjDFMEs.js';
import './HighlightCounter-BmcKT1eN.js';
import './popupUtils-DNvODi8Q.js';
import './RefreshableLayerView-1Lv_pyOj.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
const o=o=>{let t=class extends o{get availableFields(){return this.layer.fieldsIndex.fields.map((e=>e.name))}};return e([y()],t.prototype,"layer",void 0),e([y({readOnly:!0})],t.prototype,"availableFields",null),t=e([c("esri.views.layers.OGCFeatureLayerView")],t),t};

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
let t=class extends(o(X)){supportsSpatialReference(r){return this.layer.serviceSupportsSpatialReference(r)}};t=e([c("esri.views.2d.layers.OGCFeatureLayerView2D")],t);const a=t;

export { a as default };
