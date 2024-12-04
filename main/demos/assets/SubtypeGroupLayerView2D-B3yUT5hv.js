import { aW as e, aY as c, b2 as d$1, b4 as P$1, V as has } from './main-BtYHawlJ.js';
import { X } from './FeatureLayerView2D-Ddo8E388.js';
import './preload-helper-dJJaZANz.js';
import './Container-ClmJlGj6.js';
import './highlightReasons-piG1EPJA.js';
import './definitions-slUvtMCM.js';
import './enums-CgzwTbC2.js';
import './Texture-C9RaZhhN.js';
import './LayerView-DugfY1NR.js';
import './TechniqueInstance-Bw5VJJCX.js';
import './UpdateTracking2D-BLGwSfPW.js';
import './TurboLine-CCxtXwSA.js';
import './enums-DZmWLm_j.js';
import './earcut-B_OmKtHR.js';
import './GeometryUtils-Bw-D9vF9.js';
import './Rect-9uT7dZO1.js';
import './LabelMetric-CWewWHrx.js';
import './Program-DWP4U_eW.js';
import './VertexElementDescriptor-BrMxIhbJ.js';
import './BindType-KnpK3yZX.js';
import './Util-DwjPEBzN.js';
import './constants-C0QDwCF4.js';
import './TileContainer-sdGyeTJm.js';
import './WGLContainer-DXKeRDRf.js';
import './ProgramTemplate-CPhtTd6j.js';
import './StyleDefinition-CR2vYxyv.js';
import './config-Di5U9yzL.js';
import './tileUtils-DU1rqR7R.js';
import './SDFHelper-BnXE2Plg.js';
import './floatRGBA-CMYiIrCE.js';
import './FeatureCommandQueue-hNJ9Z_EY.js';
import './HighlightCounter-CtY-l3U6.js';
import './popupUtils-DiFPIc5G.js';
import './RefreshableLayerView-C_OGGpRC.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
let o=class extends X{initialize(){this.addHandles([d$1((()=>this.view.scale),(()=>this._update()),P$1)],"constructor");}isUpdating(){const e=this.layer.sublayers.some((e=>null!=e.renderer)),r=this._commandsQueue.updateTracking.updating,s=null!=this._updatingRequiredFieldsPromise,i=!this._worker,t=this.dataUpdating,o=e&&(r||s||i||t);return has("esri-2d-log-updating")&&console.log(`Updating FLV2D: ${o}\n  -> hasRenderer ${e}\n  -> hasPendingCommand ${r}\n  -> updatingRequiredFields ${s}\n  -> updatingProxy ${i}\n  -> updatingPipeline ${t}\n`),o}};o=e([c("esri.views.2d.layers.SubtypeGroupLayerView2D")],o);const a=o;

export { a as default };
