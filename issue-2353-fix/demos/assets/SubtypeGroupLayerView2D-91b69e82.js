import { aX as e, aZ as c, b3 as d$1, b5 as P$1, W as has } from './main-b44d912b.js';
import { X } from './FeatureLayerView2D-6788cce3.js';
import './preload-helper-a4975f27.js';
import './Container-59692cd8.js';
import './highlightReasons-e3f78f88.js';
import './definitions-1e43ef7c.js';
import './enums-af0bf3a9.js';
import './Texture-33220e1e.js';
import './LayerView-42297830.js';
import './TechniqueInstance-6e403455.js';
import './UpdateTracking2D-659dc37c.js';
import './TurboLine-bb57cf6e.js';
import './enums-d24bcbbf.js';
import './earcut-2603f00b.js';
import './GeometryUtils-b5f97be8.js';
import './Rect-09e0f861.js';
import './LabelMetric-ff0e7d54.js';
import './Program-b8b484c7.js';
import './VertexElementDescriptor-ec2771ab.js';
import './BindType-941d78d8.js';
import './Util-54dae8b6.js';
import './constants-412c3a33.js';
import './TileContainer-eb8a6133.js';
import './WGLContainer-37800683.js';
import './ProgramTemplate-efa15cfb.js';
import './StyleDefinition-acf40298.js';
import './config-71aad884.js';
import './tileUtils-6f82bc7d.js';
import './SDFHelper-d326f1e7.js';
import './floatRGBA-4eb90319.js';
import './FeatureCommandQueue-59174329.js';
import './HighlightCounter-3cd1700f.js';
import './popupUtils-44d56387.js';
import './RefreshableLayerView-6ce64598.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
let o=class extends X{initialize(){this.addHandles([d$1((()=>this.view.scale),(()=>this._update()),P$1)],"constructor");}isUpdating(){const e=this.layer.sublayers.some((e=>null!=e.renderer)),r=this._commandsQueue.updateTracking.updating,s=null!=this._updatingRequiredFieldsPromise,i=!this._worker,t=this.dataUpdating,o=e&&(r||s||i||t);return has("esri-2d-log-updating")&&console.log(`Updating FLV2D: ${o}\n  -> hasRenderer ${e}\n  -> hasPendingCommand ${r}\n  -> updatingRequiredFields ${s}\n  -> updatingProxy ${i}\n  -> updatingPipeline ${t}\n`),o}};o=e([c("esri.views.2d.layers.SubtypeGroupLayerView2D")],o);const a=o;

export { a as default };
