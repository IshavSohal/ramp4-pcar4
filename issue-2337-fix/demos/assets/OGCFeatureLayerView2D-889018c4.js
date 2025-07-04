import { aX as e, aY as y, aZ as c } from './main-2b0f0b77.js';
import { X } from './FeatureLayerView2D-d08bad6c.js';
import './preload-helper-a4975f27.js';
import './Container-bc8108a5.js';
import './highlightReasons-a5eea3d2.js';
import './definitions-1e43ef7c.js';
import './enums-af0bf3a9.js';
import './Texture-4f23a877.js';
import './LayerView-33682228.js';
import './TechniqueInstance-b01975f5.js';
import './UpdateTracking2D-2e48976a.js';
import './TurboLine-6e8155ef.js';
import './enums-d24bcbbf.js';
import './earcut-7957339c.js';
import './GeometryUtils-0d5e68e0.js';
import './Rect-09e0f861.js';
import './LabelMetric-c4db1b59.js';
import './Program-0ab921ae.js';
import './VertexElementDescriptor-ec2771ab.js';
import './BindType-941d78d8.js';
import './Util-ee1147d0.js';
import './constants-412c3a33.js';
import './TileContainer-f8ff6bca.js';
import './WGLContainer-3f4b1c42.js';
import './ProgramTemplate-1533e40b.js';
import './StyleDefinition-acf40298.js';
import './config-71aad884.js';
import './tileUtils-6f82bc7d.js';
import './SDFHelper-611e7296.js';
import './floatRGBA-adc85717.js';
import './FeatureCommandQueue-b9eb7454.js';
import './HighlightCounter-b30841ea.js';
import './popupUtils-3cc347cd.js';
import './RefreshableLayerView-a2a80559.js';

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
