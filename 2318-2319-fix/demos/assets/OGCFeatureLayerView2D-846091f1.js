import { aX as e, aY as y, aZ as c } from './main-4ab9956b.js';
import { X } from './FeatureLayerView2D-4a96c3a3.js';
import './preload-helper-a4975f27.js';
import './Container-5f4208de.js';
import './highlightReasons-4cc4e5f3.js';
import './definitions-1e43ef7c.js';
import './enums-af0bf3a9.js';
import './Texture-a066d409.js';
import './LayerView-15a6a3f3.js';
import './TechniqueInstance-ed9992be.js';
import './UpdateTracking2D-ff941f45.js';
import './TurboLine-10abf3f8.js';
import './enums-d24bcbbf.js';
import './earcut-4570a850.js';
import './GeometryUtils-47dee9a6.js';
import './Rect-09e0f861.js';
import './LabelMetric-35eece7b.js';
import './Program-b97e55fe.js';
import './VertexElementDescriptor-ec2771ab.js';
import './BindType-941d78d8.js';
import './Util-3ea1b4e0.js';
import './constants-412c3a33.js';
import './TileContainer-6f7a2dfc.js';
import './WGLContainer-40fb8b33.js';
import './ProgramTemplate-d059a794.js';
import './StyleDefinition-acf40298.js';
import './config-71aad884.js';
import './tileUtils-6f82bc7d.js';
import './SDFHelper-67568e44.js';
import './floatRGBA-081a94f2.js';
import './FeatureCommandQueue-45d9d5aa.js';
import './HighlightCounter-b33d56a9.js';
import './popupUtils-c288113b.js';
import './RefreshableLayerView-b16619a3.js';

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
