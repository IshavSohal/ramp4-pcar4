import { aX as e, aZ as c, b3 as d$1, b5 as P$1, W as has } from './main-2a2363bb.js';
import { X } from './FeatureLayerView2D-2d6114d5.js';
import './preload-helper-a4975f27.js';
import './Container-8f2f49a3.js';
import './highlightReasons-2cb4935a.js';
import './definitions-1e43ef7c.js';
import './enums-af0bf3a9.js';
import './Texture-6e2c83a1.js';
import './LayerView-143aba5a.js';
import './TechniqueInstance-6e7d175f.js';
import './UpdateTracking2D-3f0558a9.js';
import './TurboLine-67acc61b.js';
import './enums-d24bcbbf.js';
import './earcut-713ed0c0.js';
import './GeometryUtils-4410bbcd.js';
import './Rect-09e0f861.js';
import './LabelMetric-c01bd57e.js';
import './Program-984e2fa9.js';
import './VertexElementDescriptor-ec2771ab.js';
import './BindType-941d78d8.js';
import './Util-1a587b01.js';
import './constants-412c3a33.js';
import './TileContainer-329441fb.js';
import './WGLContainer-7ec72a3e.js';
import './ProgramTemplate-c9eb2280.js';
import './StyleDefinition-acf40298.js';
import './config-71aad884.js';
import './tileUtils-6f82bc7d.js';
import './SDFHelper-3fc9f3ca.js';
import './floatRGBA-bbc22595.js';
import './FeatureCommandQueue-5c6b5f23.js';
import './HighlightCounter-1cb57978.js';
import './popupUtils-02d09075.js';
import './RefreshableLayerView-42865f0c.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
let o=class extends X{initialize(){this.addHandles([d$1((()=>this.view.scale),(()=>this._update()),P$1)],"constructor");}isUpdating(){const e=this.layer.sublayers.some((e=>null!=e.renderer)),r=this._commandsQueue.updateTracking.updating,s=null!=this._updatingRequiredFieldsPromise,i=!this._worker,t=this.dataUpdating,o=e&&(r||s||i||t);return has("esri-2d-log-updating")&&console.log(`Updating FLV2D: ${o}\n  -> hasRenderer ${e}\n  -> hasPendingCommand ${r}\n  -> updatingRequiredFields ${s}\n  -> updatingProxy ${i}\n  -> updatingPipeline ${t}\n`),o}};o=e([c("esri.views.2d.layers.SubtypeGroupLayerView2D")],o);const a=o;

export { a as default };
