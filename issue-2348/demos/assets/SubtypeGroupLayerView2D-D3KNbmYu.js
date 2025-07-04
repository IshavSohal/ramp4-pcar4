import { bd as e, bf as a$1, bj as d$1, bk as P, N as has } from './main-De_LB6CK.js';
import { r as re } from './FeatureLayerView2D-DRxeBGue.js';
import './preload-helper-dJJaZANz.js';
import './Container-CYASymoM.js';
import './highlightReasons-YmgYMDlT.js';
import './definitions-BdwlvHBE.js';
import './enums-CwcDCDam.js';
import './Texture-uGPQfE6_.js';
import './timeSupport-Conh97qY.js';
import './LayerView-9LthKO0C.js';
import './layerViewUtils-CRtvGSrJ.js';
import './TechniqueInstance-BSbjTD-i.js';
import './UpdateTracking2D-yUm-UBvk.js';
import './BidiEngine-Z2aMxkhF.js';
import './GeometryUtils-D0hz-lmY.js';
import './enums-CHdyfzUK.js';
import './Rect-zdvLIBQm.js';
import './LabelMetric-DPSrT4k2.js';
import './Program-KGuy3OGN.js';
import './VertexElementDescriptor-Bcj0303n.js';
import './BindType-DQnxDFt3.js';
import './Util-DpONg75R.js';
import './TileContainer-BR8CjdIc.js';
import './WGLContainer-D0eQcPC6.js';
import './ProgramTemplate-BqGFIPrN.js';
import './vec3f32-CmlAce5k.js';
import './StyleDefinition-DkEWNPyD.js';
import './config-C86_VOH4.js';
import './earcut-D2l-TsO6.js';
import './CircularArray-BCXLb8ry.js';
import './tileUtils-Ceq3VL9e.js';
import './SDFHelper-Pe96_m5i.js';
import './floatRGBA-BWB0Am3W.js';
import './FeatureCommandQueue-U1aagV2a.js';
import './constants-BNnV1ogR.js';
import './HighlightCounter-C_YRKYCO.js';
import './popupUtils-OsQdK3Bb.js';
import './RefreshableLayerView-uDvT5Lpa.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.30/esri/copyright.txt for details.
*/
let o=class extends re{initialize(){this.addHandles([d$1((()=>this.view.scale),(()=>this._update()),P)],"constructor");}isUpdating(){const e=this.layer.sublayers.some((e=>null!=e.renderer)),r=this._commandsQueue.updateTracking.updating,s=null!=this._updatingRequiredFieldsPromise,i=!this._workerProxy,t=this.dataUpdating,o=e&&(r||s||i||t);return has("esri-2d-log-updating")&&console.log(`Updating FLV2D: ${o}\n  -> hasRenderer ${e}\n  -> hasPendingCommand ${r}\n  -> updatingRequiredFields ${s}\n  -> updatingProxy ${i}\n  -> updatingPipeline ${t}\n`),o}};o=e([a$1("esri.views.2d.layers.SubtypeGroupLayerView2D")],o);const a=o;

export { a as default };
