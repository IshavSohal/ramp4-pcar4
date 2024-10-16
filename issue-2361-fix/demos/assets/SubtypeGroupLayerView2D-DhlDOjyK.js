import { aW as e, aY as c, b2 as d$1, b4 as P$1, V as has } from './main-CS1L7HgN.js';
import { X } from './FeatureLayerView2D-Cw0Sn0RR.js';
import './preload-helper-dJJaZANz.js';
import './Container-CcmNz4D-.js';
import './highlightReasons-BRL9zbxd.js';
import './definitions-slUvtMCM.js';
import './enums-CgzwTbC2.js';
import './Texture-C1jw8lgV.js';
import './LayerView-qvl4nelP.js';
import './TechniqueInstance-DPc0h4Vk.js';
import './UpdateTracking2D-BMldueS-.js';
import './TurboLine-BywRwETY.js';
import './enums-DZmWLm_j.js';
import './earcut-D-DnAu-0.js';
import './GeometryUtils-DUKh324D.js';
import './Rect-9uT7dZO1.js';
import './LabelMetric-BgHe-0jn.js';
import './Program-C0g1LoJO.js';
import './VertexElementDescriptor-BrMxIhbJ.js';
import './BindType-KnpK3yZX.js';
import './Util-DB___U-b.js';
import './constants-C0QDwCF4.js';
import './TileContainer-Bp6itw4G.js';
import './WGLContainer-BqA2tFME.js';
import './ProgramTemplate-Dt3oDZKE.js';
import './StyleDefinition-CR2vYxyv.js';
import './config-Di5U9yzL.js';
import './tileUtils-DU1rqR7R.js';
import './SDFHelper-DePHhlbr.js';
import './floatRGBA-9B-Xb9OH.js';
import './FeatureCommandQueue-CMuKrttC.js';
import './HighlightCounter-C3en1L0x.js';
import './popupUtils-BTpa_cWA.js';
import './RefreshableLayerView-BWp3RMWT.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
let o=class extends X{initialize(){this.addHandles([d$1((()=>this.view.scale),(()=>this._update()),P$1)],"constructor");}isUpdating(){const e=this.layer.sublayers.some((e=>null!=e.renderer)),r=this._commandsQueue.updateTracking.updating,s=null!=this._updatingRequiredFieldsPromise,i=!this._worker,t=this.dataUpdating,o=e&&(r||s||i||t);return has("esri-2d-log-updating")&&console.log(`Updating FLV2D: ${o}\n  -> hasRenderer ${e}\n  -> hasPendingCommand ${r}\n  -> updatingRequiredFields ${s}\n  -> updatingProxy ${i}\n  -> updatingPipeline ${t}\n`),o}};o=e([c("esri.views.2d.layers.SubtypeGroupLayerView2D")],o);const a=o;

export { a as default };
