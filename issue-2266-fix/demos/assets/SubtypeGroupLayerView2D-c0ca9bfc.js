import { aX as e, aZ as c, b3 as d$1, b5 as P$1, W as has } from './main-8b7fd68e.js';
import { X } from './FeatureLayerView2D-7e512334.js';
import './preload-helper-a4975f27.js';
import './Container-9923a77f.js';
import './highlightReasons-6b94dc4e.js';
import './definitions-1e43ef7c.js';
import './enums-af0bf3a9.js';
import './Texture-36b6a43b.js';
import './LayerView-e40cb5f3.js';
import './TechniqueInstance-41417f2c.js';
import './UpdateTracking2D-2dd604b6.js';
import './TurboLine-bf047bb4.js';
import './enums-d24bcbbf.js';
import './earcut-394bf117.js';
import './GeometryUtils-c4cd248f.js';
import './Rect-09e0f861.js';
import './LabelMetric-691fbb4d.js';
import './Program-22f90517.js';
import './VertexElementDescriptor-ec2771ab.js';
import './BindType-941d78d8.js';
import './Util-b80f1fb2.js';
import './constants-412c3a33.js';
import './TileContainer-21884525.js';
import './WGLContainer-9692429b.js';
import './ProgramTemplate-ffc1c2e8.js';
import './StyleDefinition-acf40298.js';
import './config-71aad884.js';
import './tileUtils-6f82bc7d.js';
import './SDFHelper-2bcaac2d.js';
import './floatRGBA-557aa8c4.js';
import './FeatureCommandQueue-190c3261.js';
import './HighlightCounter-6e06ed51.js';
import './popupUtils-412a0626.js';
import './RefreshableLayerView-5aab1cab.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
let o=class extends X{initialize(){this.addHandles([d$1((()=>this.view.scale),(()=>this._update()),P$1)],"constructor");}isUpdating(){const e=this.layer.sublayers.some((e=>null!=e.renderer)),r=this._commandsQueue.updateTracking.updating,s=null!=this._updatingRequiredFieldsPromise,i=!this._worker,t=this.dataUpdating,o=e&&(r||s||i||t);return has("esri-2d-log-updating")&&console.log(`Updating FLV2D: ${o}\n  -> hasRenderer ${e}\n  -> hasPendingCommand ${r}\n  -> updatingRequiredFields ${s}\n  -> updatingProxy ${i}\n  -> updatingPipeline ${t}\n`),o}};o=e([c("esri.views.2d.layers.SubtypeGroupLayerView2D")],o);const a=o;

export { a as default };
