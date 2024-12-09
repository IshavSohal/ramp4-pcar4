import { aW as e, aY as c, b2 as d$1, b4 as P$1, V as has } from './main-6KLKyala.js';
import { X } from './FeatureLayerView2D-DIIoHrF0.js';
import './preload-helper-dJJaZANz.js';
import './Container-ByzJr6_Q.js';
import './highlightReasons-BNUGJTE5.js';
import './definitions-slUvtMCM.js';
import './enums-CgzwTbC2.js';
import './Texture-D093N61m.js';
import './LayerView-34mrazGv.js';
import './ClipRect-DLiUAi3L.js';
import './TechniqueInstance-spm1vQU9.js';
import './UpdateTracking2D-C8_n_EWP.js';
import './TurboLine-BXV0d3Dw.js';
import './enums-DZmWLm_j.js';
import './earcut-DiRln5WA.js';
import './GeometryUtils-9oCEXdxq.js';
import './Rect-9uT7dZO1.js';
import './LabelMetric-Dboucql2.js';
import './Program-CR2Kl8TI.js';
import './VertexElementDescriptor-BrMxIhbJ.js';
import './BindType-KnpK3yZX.js';
import './Util-DgvkFNmz.js';
import './constants-C0QDwCF4.js';
import './TileContainer-me8ifluZ.js';
import './WGLContainer-DAL_rdfA.js';
import './ProgramTemplate-BtjLJKNM.js';
import './StyleDefinition-CR2vYxyv.js';
import './config-Di5U9yzL.js';
import './tileUtils-DU1rqR7R.js';
import './SDFHelper-CdV16eZf.js';
import './floatRGBA-CKlcKDoS.js';
import './FeatureCommandQueue-C7GSLQyX.js';
import './HighlightCounter-DQEU4RQX.js';
import './popupUtils-18v21xrk.js';
import './RefreshableLayerView-eS0cAULL.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
let o=class extends X{initialize(){this.addHandles([d$1((()=>this.view.scale),(()=>this._update()),P$1)],"constructor");}isUpdating(){const e=this.layer.sublayers.some((e=>null!=e.renderer)),r=this._commandsQueue.updateTracking.updating,s=null!=this._updatingRequiredFieldsPromise,i=!this._worker,t=this.dataUpdating,o=e&&(r||s||i||t);return has("esri-2d-log-updating")&&console.log(`Updating FLV2D: ${o}\n  -> hasRenderer ${e}\n  -> hasPendingCommand ${r}\n  -> updatingRequiredFields ${s}\n  -> updatingProxy ${i}\n  -> updatingPipeline ${t}\n`),o}};o=e([c("esri.views.2d.layers.SubtypeGroupLayerView2D")],o);const a=o;

export { a as default };
