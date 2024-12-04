import { aX as e, aZ as c, b3 as d$1, b5 as P$1, W as has } from './main-aee4b1c0.js';
import { X } from './FeatureLayerView2D-abe4b950.js';
import './preload-helper-a4975f27.js';
import './Container-dd850945.js';
import './highlightReasons-85c51896.js';
import './definitions-1e43ef7c.js';
import './enums-af0bf3a9.js';
import './Texture-8d644557.js';
import './LayerView-579cd232.js';
import './TechniqueInstance-7e40ff5f.js';
import './UpdateTracking2D-a34e6869.js';
import './TurboLine-3e0f5eca.js';
import './enums-d24bcbbf.js';
import './earcut-de8fd481.js';
import './GeometryUtils-7632ef12.js';
import './Rect-09e0f861.js';
import './LabelMetric-121d7d0c.js';
import './Program-df458c0e.js';
import './VertexElementDescriptor-ec2771ab.js';
import './BindType-941d78d8.js';
import './Util-9932e968.js';
import './constants-412c3a33.js';
import './TileContainer-64c534c6.js';
import './WGLContainer-3dc653ea.js';
import './ProgramTemplate-e4a8b1fc.js';
import './StyleDefinition-acf40298.js';
import './config-71aad884.js';
import './tileUtils-6f82bc7d.js';
import './SDFHelper-b25b0723.js';
import './floatRGBA-6ecab60b.js';
import './FeatureCommandQueue-a3eb9ef5.js';
import './HighlightCounter-b9b01330.js';
import './popupUtils-4db387c0.js';
import './RefreshableLayerView-298186ec.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
let o=class extends X{initialize(){this.addHandles([d$1((()=>this.view.scale),(()=>this._update()),P$1)],"constructor");}isUpdating(){const e=this.layer.sublayers.some((e=>null!=e.renderer)),r=this._commandsQueue.updateTracking.updating,s=null!=this._updatingRequiredFieldsPromise,i=!this._worker,t=this.dataUpdating,o=e&&(r||s||i||t);return has("esri-2d-log-updating")&&console.log(`Updating FLV2D: ${o}\n  -> hasRenderer ${e}\n  -> hasPendingCommand ${r}\n  -> updatingRequiredFields ${s}\n  -> updatingProxy ${i}\n  -> updatingPipeline ${t}\n`),o}};o=e([c("esri.views.2d.layers.SubtypeGroupLayerView2D")],o);const a=o;

export { a as default };
