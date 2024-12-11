import { bd as e, bf as a$1, bj as d$1, bk as P, N as has } from './main-CZWQ_YsF.js';
import { r as re } from './FeatureLayerView2D-4Gee_F35.js';
import './preload-helper-dJJaZANz.js';
import './Container-DXvqytsE.js';
import './highlightReasons-DQ8GS6gg.js';
import './definitions-BdwlvHBE.js';
import './enums-CwcDCDam.js';
import './Texture-CYj_KoTM.js';
import './timeSupport-DHLRVTCC.js';
import './LayerView-CudGrL5v.js';
import './layerViewUtils-CRtvGSrJ.js';
import './TechniqueInstance-k_6lzq5c.js';
import './UpdateTracking2D-yZuQY9Ej.js';
import './BidiEngine-Z2aMxkhF.js';
import './GeometryUtils-DgqH6i7F.js';
import './enums-CHdyfzUK.js';
import './Rect-zdvLIBQm.js';
import './LabelMetric-CHohjUQo.js';
import './Program-B3K2aJH5.js';
import './VertexElementDescriptor-Bcj0303n.js';
import './BindType-DQnxDFt3.js';
import './Util-B1M_knDm.js';
import './TileContainer-Cv6-m6LL.js';
import './WGLContainer-DOmKcxv3.js';
import './ProgramTemplate-CN1f8d5r.js';
import './vec3f32-CmlAce5k.js';
import './StyleDefinition-DkEWNPyD.js';
import './config-C86_VOH4.js';
import './earcut-B1EGf_Hg.js';
import './CircularArray-BCXLb8ry.js';
import './tileUtils-Ceq3VL9e.js';
import './SDFHelper-CHZgO5O5.js';
import './floatRGBA-CbkYZBEi.js';
import './FeatureCommandQueue-sBAzkW7s.js';
import './constants-BNnV1ogR.js';
import './HighlightCounter-BJ4uJt4r.js';
import './popupUtils-DVEeVVeu.js';
import './RefreshableLayerView-j9ZFdnWh.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.30/esri/copyright.txt for details.
*/
let o=class extends re{initialize(){this.addHandles([d$1((()=>this.view.scale),(()=>this._update()),P)],"constructor");}isUpdating(){const e=this.layer.sublayers.some((e=>null!=e.renderer)),r=this._commandsQueue.updateTracking.updating,s=null!=this._updatingRequiredFieldsPromise,i=!this._workerProxy,t=this.dataUpdating,o=e&&(r||s||i||t);return has("esri-2d-log-updating")&&console.log(`Updating FLV2D: ${o}\n  -> hasRenderer ${e}\n  -> hasPendingCommand ${r}\n  -> updatingRequiredFields ${s}\n  -> updatingProxy ${i}\n  -> updatingPipeline ${t}\n`),o}};o=e([a$1("esri.views.2d.layers.SubtypeGroupLayerView2D")],o);const a=o;

export { a as default };
