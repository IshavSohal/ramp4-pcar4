import { aX as e, aY as y, aZ as c } from './main-6dfbf2ec.js';
import { X } from './FeatureLayerView2D-a1abf813.js';
import './preload-helper-a4975f27.js';
import './Container-a9cc8032.js';
import './highlightReasons-abb54496.js';
import './definitions-1e43ef7c.js';
import './enums-af0bf3a9.js';
import './Texture-56b2be3a.js';
import './LayerView-e90b5d76.js';
import './TechniqueInstance-00c1789f.js';
import './UpdateTracking2D-ec6373cf.js';
import './TurboLine-11f90f86.js';
import './enums-d24bcbbf.js';
import './earcut-7e52402c.js';
import './GeometryUtils-cb305452.js';
import './Rect-09e0f861.js';
import './LabelMetric-6652e30c.js';
import './Program-6562e4af.js';
import './VertexElementDescriptor-ec2771ab.js';
import './BindType-941d78d8.js';
import './Util-51f50512.js';
import './constants-412c3a33.js';
import './TileContainer-51e2f317.js';
import './WGLContainer-f2d9d864.js';
import './ProgramTemplate-0e52f51f.js';
import './StyleDefinition-acf40298.js';
import './config-71aad884.js';
import './tileUtils-6f82bc7d.js';
import './SDFHelper-3f7d190d.js';
import './floatRGBA-4314873b.js';
import './FeatureCommandQueue-84edd406.js';
import './HighlightCounter-b7a7d024.js';
import './popupUtils-b519340e.js';
import './RefreshableLayerView-66a99e17.js';

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
