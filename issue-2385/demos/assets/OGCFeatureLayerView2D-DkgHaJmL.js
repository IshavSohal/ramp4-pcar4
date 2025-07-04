import { aW as e, aX as y, aY as c } from './main-CpvNIrSE.js';
import { X } from './FeatureLayerView2D-B9Ff97tN.js';
import './preload-helper-dJJaZANz.js';
import './Container-CIPlC6gc.js';
import './highlightReasons-CIWXHFhc.js';
import './definitions-slUvtMCM.js';
import './enums-CgzwTbC2.js';
import './Texture-CoD3Bv3J.js';
import './LayerView-BG1snzXL.js';
import './TechniqueInstance-Bz44zh1E.js';
import './UpdateTracking2D-DbHj2k7e.js';
import './TurboLine-wapwOSsH.js';
import './enums-DZmWLm_j.js';
import './earcut-2qw_UHH_.js';
import './GeometryUtils-DHeKm8hf.js';
import './Rect-9uT7dZO1.js';
import './LabelMetric-C9-9uo1w.js';
import './Program-BkQeJbco.js';
import './VertexElementDescriptor-BrMxIhbJ.js';
import './BindType-KnpK3yZX.js';
import './Util-SbBvihgd.js';
import './constants-C0QDwCF4.js';
import './TileContainer-DAkjpuzZ.js';
import './WGLContainer-Cp0sN_u3.js';
import './ProgramTemplate-DqzAGm3s.js';
import './StyleDefinition-CR2vYxyv.js';
import './config-Di5U9yzL.js';
import './tileUtils-DU1rqR7R.js';
import './SDFHelper-C9bYsrAX.js';
import './floatRGBA-Ipzy_TVN.js';
import './FeatureCommandQueue-uJwwbgKz.js';
import './HighlightCounter-COUOsrKE.js';
import './popupUtils-uDm_iaVx.js';
import './RefreshableLayerView-DK-lEYv8.js';

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
