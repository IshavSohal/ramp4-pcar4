import { aX as e, aY as y, aZ as c } from './main-9f9fefa2.js';
import { X } from './FeatureLayerView2D-6f3cf115.js';
import './preload-helper-a4975f27.js';
import './Container-1857da40.js';
import './highlightReasons-84e7435c.js';
import './definitions-1e43ef7c.js';
import './enums-af0bf3a9.js';
import './Texture-f4c38644.js';
import './LayerView-3adfeaca.js';
import './TechniqueInstance-246cdfe1.js';
import './UpdateTracking2D-c5a8e79b.js';
import './TurboLine-53d04bf7.js';
import './enums-d24bcbbf.js';
import './earcut-b4f2d05e.js';
import './GeometryUtils-a6dbc1f6.js';
import './Rect-09e0f861.js';
import './LabelMetric-e4139a9e.js';
import './Program-50043045.js';
import './VertexElementDescriptor-ec2771ab.js';
import './BindType-941d78d8.js';
import './Util-fb0046cc.js';
import './constants-412c3a33.js';
import './TileContainer-b15dc935.js';
import './WGLContainer-74a74ff0.js';
import './ProgramTemplate-22831b89.js';
import './StyleDefinition-acf40298.js';
import './config-71aad884.js';
import './tileUtils-6f82bc7d.js';
import './SDFHelper-e032909f.js';
import './floatRGBA-98e4fd56.js';
import './FeatureCommandQueue-2749561e.js';
import './HighlightCounter-5c351c8f.js';
import './popupUtils-86fc0206.js';
import './RefreshableLayerView-89db393e.js';

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
