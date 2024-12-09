import { aW as e, aY as c, b2 as d$1, b4 as P$1, V as has } from './main-BS0NWbi8.js';
import { X } from './FeatureLayerView2D-B2_7mxtk.js';
import './preload-helper-dJJaZANz.js';
import './Container-BrKS4a38.js';
import './highlightReasons-Cvd-BKpF.js';
import './definitions-slUvtMCM.js';
import './enums-CgzwTbC2.js';
import './Texture-_dw9leNp.js';
import './LayerView-CsM32c9y.js';
import './TechniqueInstance-DynWHoB5.js';
import './UpdateTracking2D-CJK_lfrf.js';
import './TurboLine-C4i75s3Q.js';
import './enums-DZmWLm_j.js';
import './earcut-BhGDjsms.js';
import './GeometryUtils-IVnUQPts.js';
import './Rect-9uT7dZO1.js';
import './LabelMetric-ghCl18OT.js';
import './Program-Ds9GVkui.js';
import './VertexElementDescriptor-BrMxIhbJ.js';
import './BindType-KnpK3yZX.js';
import './Util-gcn4IeLE.js';
import './constants-C0QDwCF4.js';
import './TileContainer-BwM9rNDr.js';
import './WGLContainer-CnDLmGJY.js';
import './ProgramTemplate-BP-A650B.js';
import './StyleDefinition-CR2vYxyv.js';
import './config-Di5U9yzL.js';
import './tileUtils-DU1rqR7R.js';
import './SDFHelper-CqxYPv7H.js';
import './floatRGBA-ChTT-x2y.js';
import './FeatureCommandQueue-BfjDFMEs.js';
import './HighlightCounter-BmcKT1eN.js';
import './popupUtils-DNvODi8Q.js';
import './RefreshableLayerView-1Lv_pyOj.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
let o=class extends X{initialize(){this.addHandles([d$1((()=>this.view.scale),(()=>this._update()),P$1)],"constructor");}isUpdating(){const e=this.layer.sublayers.some((e=>null!=e.renderer)),r=this._commandsQueue.updateTracking.updating,s=null!=this._updatingRequiredFieldsPromise,i=!this._worker,t=this.dataUpdating,o=e&&(r||s||i||t);return has("esri-2d-log-updating")&&console.log(`Updating FLV2D: ${o}\n  -> hasRenderer ${e}\n  -> hasPendingCommand ${r}\n  -> updatingRequiredFields ${s}\n  -> updatingProxy ${i}\n  -> updatingPipeline ${t}\n`),o}};o=e([c("esri.views.2d.layers.SubtypeGroupLayerView2D")],o);const a=o;

export { a as default };
