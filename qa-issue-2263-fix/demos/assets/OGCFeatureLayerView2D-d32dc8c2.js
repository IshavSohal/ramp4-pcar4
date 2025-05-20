import { aX as e, aY as y, aZ as c } from './main-108906d2.js';
import { X } from './FeatureLayerView2D-954d89bc.js';
import './preload-helper-a4975f27.js';
import './Container-13584057.js';
import './highlightReasons-b626a4d5.js';
import './definitions-1e43ef7c.js';
import './enums-af0bf3a9.js';
import './Texture-028d6d2b.js';
import './LayerView-06c563cc.js';
import './TechniqueInstance-d1efbdb2.js';
import './UpdateTracking2D-034b5d77.js';
import './TurboLine-55e1a93a.js';
import './enums-d24bcbbf.js';
import './earcut-c441e71e.js';
import './GeometryUtils-18a344c2.js';
import './Rect-09e0f861.js';
import './LabelMetric-b3462615.js';
import './Program-a39cbbeb.js';
import './VertexElementDescriptor-ec2771ab.js';
import './BindType-941d78d8.js';
import './Util-0c39bebb.js';
import './constants-412c3a33.js';
import './TileContainer-f5e36af4.js';
import './WGLContainer-89c29bdd.js';
import './ProgramTemplate-0aa4a4c7.js';
import './StyleDefinition-acf40298.js';
import './config-71aad884.js';
import './tileUtils-6f82bc7d.js';
import './SDFHelper-02e5eb17.js';
import './floatRGBA-c5205702.js';
import './FeatureCommandQueue-bc122a69.js';
import './HighlightCounter-0376a0f4.js';
import './popupUtils-79837638.js';
import './RefreshableLayerView-2343449d.js';

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
