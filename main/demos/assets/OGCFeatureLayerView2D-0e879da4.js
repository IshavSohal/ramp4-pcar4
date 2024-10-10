import { aX as e, aY as y, aZ as c } from './main-c2ed9af5.js';
import { X } from './FeatureLayerView2D-6a75577d.js';
import './preload-helper-a4975f27.js';
import './Container-5cb376e3.js';
import './highlightReasons-50944c52.js';
import './definitions-1e43ef7c.js';
import './enums-af0bf3a9.js';
import './Texture-889a20ea.js';
import './LayerView-c77c5d46.js';
import './TechniqueInstance-b826de6e.js';
import './UpdateTracking2D-4a3176f9.js';
import './TurboLine-c58f3b93.js';
import './enums-d24bcbbf.js';
import './earcut-53478943.js';
import './GeometryUtils-d9fc0b1f.js';
import './Rect-09e0f861.js';
import './LabelMetric-0a9167a7.js';
import './Program-d8ec9c05.js';
import './VertexElementDescriptor-ec2771ab.js';
import './BindType-941d78d8.js';
import './Util-517706ee.js';
import './constants-412c3a33.js';
import './TileContainer-681fb45f.js';
import './WGLContainer-940132e7.js';
import './ProgramTemplate-e0959037.js';
import './StyleDefinition-acf40298.js';
import './config-71aad884.js';
import './tileUtils-6f82bc7d.js';
import './SDFHelper-b283e065.js';
import './floatRGBA-13ed3ff1.js';
import './FeatureCommandQueue-476e143d.js';
import './HighlightCounter-dffb3fdf.js';
import './popupUtils-172af672.js';
import './RefreshableLayerView-767dcadf.js';

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
