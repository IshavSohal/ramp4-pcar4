import { aW as e, aX as y, aY as c } from './main-CLzf0Tu_.js';
import { X } from './FeatureLayerView2D-ZsgUQLU2.js';
import './preload-helper-dJJaZANz.js';
import './Container-BbjgkGcP.js';
import './highlightReasons-DZpyMItp.js';
import './definitions-slUvtMCM.js';
import './enums-CgzwTbC2.js';
import './Texture-DWszxTT7.js';
import './LayerView-DMcoE6er.js';
import './TechniqueInstance-KPu6dcbN.js';
import './UpdateTracking2D-fkUXNw2L.js';
import './TurboLine-BHTR0jQJ.js';
import './enums-DZmWLm_j.js';
import './earcut-pAfSrXrY.js';
import './GeometryUtils-CWz7cHG_.js';
import './Rect-9uT7dZO1.js';
import './LabelMetric-6IMa4XBZ.js';
import './Program-DTUHpmR_.js';
import './VertexElementDescriptor-BrMxIhbJ.js';
import './BindType-KnpK3yZX.js';
import './Util-BOniqNW5.js';
import './constants-C0QDwCF4.js';
import './TileContainer-DeiUAtYJ.js';
import './WGLContainer-BzCAqmKg.js';
import './ProgramTemplate-ox0SQR_V.js';
import './StyleDefinition-CR2vYxyv.js';
import './config-Di5U9yzL.js';
import './tileUtils-DU1rqR7R.js';
import './SDFHelper-B5XqtecN.js';
import './floatRGBA-B1gf9AO3.js';
import './FeatureCommandQueue-HtZB4Fim.js';
import './HighlightCounter-CiaPUrIS.js';
import './popupUtils-FezJ93-l.js';
import './RefreshableLayerView-DNt6qzXc.js';

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
