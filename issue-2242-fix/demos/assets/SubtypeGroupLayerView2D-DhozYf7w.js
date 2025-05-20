import { aW as e, aY as c, b2 as d$1, b4 as P$1, V as has } from './main-CzcGIf_8.js';
import { X } from './FeatureLayerView2D-RwstFXML.js';
import './preload-helper-dJJaZANz.js';
import './Container-CTSbOwGa.js';
import './highlightReasons-CjEIbRYw.js';
import './definitions-slUvtMCM.js';
import './enums-CgzwTbC2.js';
import './Texture-2viXBA2a.js';
import './LayerView-D8eLL_hj.js';
import './TechniqueInstance-BzctXHG9.js';
import './UpdateTracking2D-VB30Kgjb.js';
import './TurboLine-BNYEgFbr.js';
import './enums-DZmWLm_j.js';
import './earcut-CxDBfrF8.js';
import './GeometryUtils-Dt-6MQJq.js';
import './Rect-9uT7dZO1.js';
import './LabelMetric-UnyAdilV.js';
import './Program-CTeYzNn6.js';
import './VertexElementDescriptor-BrMxIhbJ.js';
import './BindType-KnpK3yZX.js';
import './Util-7MwmGdUU.js';
import './constants-C0QDwCF4.js';
import './TileContainer-Bk6WZNMX.js';
import './WGLContainer-DKrjpvit.js';
import './ProgramTemplate-APxvsnzU.js';
import './StyleDefinition-CR2vYxyv.js';
import './config-Di5U9yzL.js';
import './tileUtils-DU1rqR7R.js';
import './SDFHelper-B7-JVr9g.js';
import './floatRGBA-4Ks87Wrd.js';
import './FeatureCommandQueue-C2xikHGc.js';
import './HighlightCounter-xzHEdFTQ.js';
import './popupUtils-COdF04N1.js';
import './RefreshableLayerView-B08W2pm4.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
let o=class extends X{initialize(){this.addHandles([d$1((()=>this.view.scale),(()=>this._update()),P$1)],"constructor");}isUpdating(){const e=this.layer.sublayers.some((e=>null!=e.renderer)),r=this._commandsQueue.updateTracking.updating,s=null!=this._updatingRequiredFieldsPromise,i=!this._worker,t=this.dataUpdating,o=e&&(r||s||i||t);return has("esri-2d-log-updating")&&console.log(`Updating FLV2D: ${o}\n  -> hasRenderer ${e}\n  -> hasPendingCommand ${r}\n  -> updatingRequiredFields ${s}\n  -> updatingProxy ${i}\n  -> updatingPipeline ${t}\n`),o}};o=e([c("esri.views.2d.layers.SubtypeGroupLayerView2D")],o);const a=o;

export { a as default };
