import { aW as e, aX as y, aY as c } from './main-BT9B6yKC.js';
import { X } from './FeatureLayerView2D-Be-wcVW7.js';
import './preload-helper-dJJaZANz.js';
import './Container-mHdZU_lC.js';
import './highlightReasons-BjiSEi8v.js';
import './definitions-slUvtMCM.js';
import './enums-CgzwTbC2.js';
import './Texture-CMqClB5H.js';
import './LayerView-CLSAkYzH.js';
import './TechniqueInstance-C_h_sOWt.js';
import './UpdateTracking2D-B6tf3Zwc.js';
import './TurboLine-uVdl44Bu.js';
import './enums-DZmWLm_j.js';
import './earcut-Cur8qJxg.js';
import './GeometryUtils-UxQJqSyZ.js';
import './Rect-9uT7dZO1.js';
import './LabelMetric-CNtA3ND6.js';
import './Program-dCU0NmaU.js';
import './VertexElementDescriptor-BrMxIhbJ.js';
import './BindType-KnpK3yZX.js';
import './Util-BWO5axsU.js';
import './constants-C0QDwCF4.js';
import './TileContainer-15dGH8Yn.js';
import './WGLContainer-CyO8i04V.js';
import './ProgramTemplate-DhzOSalJ.js';
import './StyleDefinition-CR2vYxyv.js';
import './config-Di5U9yzL.js';
import './tileUtils-DU1rqR7R.js';
import './SDFHelper-BoxzC34v.js';
import './floatRGBA-DVvj3qiE.js';
import './FeatureCommandQueue-BXfPeaze.js';
import './HighlightCounter-B2Mr9yvV.js';
import './popupUtils-BAXl_vsx.js';
import './RefreshableLayerView-iy7reu42.js';

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
