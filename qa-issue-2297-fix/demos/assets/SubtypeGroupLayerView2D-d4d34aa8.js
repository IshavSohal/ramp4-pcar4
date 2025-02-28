import { aX as e, aZ as c, b3 as d$1, b5 as P$1, W as has } from './main-02c4cfca.js';
import { X } from './FeatureLayerView2D-dc5380d9.js';
import './preload-helper-a4975f27.js';
import './Container-e4a2f033.js';
import './highlightReasons-8d55e285.js';
import './definitions-1e43ef7c.js';
import './enums-af0bf3a9.js';
import './Texture-f4d740e6.js';
import './LayerView-8e5af475.js';
import './TechniqueInstance-1cd94b30.js';
import './UpdateTracking2D-22f9329d.js';
import './TurboLine-13fc6b86.js';
import './enums-d24bcbbf.js';
import './earcut-dac9467c.js';
import './GeometryUtils-5028e5b5.js';
import './Rect-09e0f861.js';
import './LabelMetric-56f6c301.js';
import './Program-fc57b041.js';
import './VertexElementDescriptor-ec2771ab.js';
import './BindType-941d78d8.js';
import './Util-dfa71ca0.js';
import './constants-412c3a33.js';
import './TileContainer-089ed93f.js';
import './WGLContainer-638ab274.js';
import './ProgramTemplate-8c14e983.js';
import './StyleDefinition-acf40298.js';
import './config-71aad884.js';
import './tileUtils-6f82bc7d.js';
import './SDFHelper-bd651a85.js';
import './floatRGBA-d2c14299.js';
import './FeatureCommandQueue-611e2fa5.js';
import './HighlightCounter-891715b6.js';
import './popupUtils-c6ced47d.js';
import './RefreshableLayerView-9b686d3a.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
let o=class extends X{initialize(){this.addHandles([d$1((()=>this.view.scale),(()=>this._update()),P$1)],"constructor");}isUpdating(){const e=this.layer.sublayers.some((e=>null!=e.renderer)),r=this._commandsQueue.updateTracking.updating,s=null!=this._updatingRequiredFieldsPromise,i=!this._worker,t=this.dataUpdating,o=e&&(r||s||i||t);return has("esri-2d-log-updating")&&console.log(`Updating FLV2D: ${o}\n  -> hasRenderer ${e}\n  -> hasPendingCommand ${r}\n  -> updatingRequiredFields ${s}\n  -> updatingProxy ${i}\n  -> updatingPipeline ${t}\n`),o}};o=e([c("esri.views.2d.layers.SubtypeGroupLayerView2D")],o);const a=o;

export { a as default };
