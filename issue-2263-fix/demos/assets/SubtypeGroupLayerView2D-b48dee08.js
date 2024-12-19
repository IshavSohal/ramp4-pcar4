import { aX as e, aZ as c, b3 as d$1, b5 as P$1, W as has } from './main-0c4f0857.js';
import { X } from './FeatureLayerView2D-e54c9dcd.js';
import './preload-helper-a4975f27.js';
import './Container-6f8fa961.js';
import './highlightReasons-082425d2.js';
import './definitions-1e43ef7c.js';
import './enums-af0bf3a9.js';
import './Texture-48b39f3f.js';
import './LayerView-8f47ba75.js';
import './TechniqueInstance-7c8d874f.js';
import './UpdateTracking2D-b0ba741b.js';
import './TurboLine-b20c0328.js';
import './enums-d24bcbbf.js';
import './earcut-e30523f3.js';
import './GeometryUtils-b800f373.js';
import './Rect-09e0f861.js';
import './LabelMetric-f8c09b5a.js';
import './Program-8c2b1556.js';
import './VertexElementDescriptor-ec2771ab.js';
import './BindType-941d78d8.js';
import './Util-046087f1.js';
import './constants-412c3a33.js';
import './TileContainer-f7a566b5.js';
import './WGLContainer-7088b61d.js';
import './ProgramTemplate-e5b5c07b.js';
import './StyleDefinition-acf40298.js';
import './config-71aad884.js';
import './tileUtils-6f82bc7d.js';
import './SDFHelper-492bc38b.js';
import './floatRGBA-dae41c63.js';
import './FeatureCommandQueue-a50fbfc3.js';
import './HighlightCounter-4525f9a0.js';
import './popupUtils-327d28f5.js';
import './RefreshableLayerView-6779160c.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
let o=class extends X{initialize(){this.addHandles([d$1((()=>this.view.scale),(()=>this._update()),P$1)],"constructor");}isUpdating(){const e=this.layer.sublayers.some((e=>null!=e.renderer)),r=this._commandsQueue.updateTracking.updating,s=null!=this._updatingRequiredFieldsPromise,i=!this._worker,t=this.dataUpdating,o=e&&(r||s||i||t);return has("esri-2d-log-updating")&&console.log(`Updating FLV2D: ${o}\n  -> hasRenderer ${e}\n  -> hasPendingCommand ${r}\n  -> updatingRequiredFields ${s}\n  -> updatingProxy ${i}\n  -> updatingPipeline ${t}\n`),o}};o=e([c("esri.views.2d.layers.SubtypeGroupLayerView2D")],o);const a=o;

export { a as default };
