import { aW as e, aY as c, b2 as d$1, b4 as P$1, V as has } from './main-DF5PysNr.js';
import { X } from './FeatureLayerView2D-DnzK372k.js';
import './preload-helper-dJJaZANz.js';
import './Container-BhesgojI.js';
import './highlightReasons-wfUFDSql.js';
import './definitions-slUvtMCM.js';
import './enums-CgzwTbC2.js';
import './Texture-CYEUJwS7.js';
import './LayerView-CS-VBeNx.js';
import './TechniqueInstance-DAdl9YqP.js';
import './UpdateTracking2D-DZZsJPh4.js';
import './TurboLine-0tw7ouM3.js';
import './enums-DZmWLm_j.js';
import './earcut-IRuQaLc4.js';
import './GeometryUtils-biLK-MiI.js';
import './Rect-9uT7dZO1.js';
import './LabelMetric-DTw3alC-.js';
import './Program-Bx9VExp5.js';
import './VertexElementDescriptor-BrMxIhbJ.js';
import './BindType-KnpK3yZX.js';
import './Util-C89JSNc9.js';
import './constants-C0QDwCF4.js';
import './TileContainer-qE-1ymYh.js';
import './WGLContainer-BchwGPh5.js';
import './ProgramTemplate-GiqNV4Gq.js';
import './StyleDefinition-CR2vYxyv.js';
import './config-Di5U9yzL.js';
import './tileUtils-DU1rqR7R.js';
import './SDFHelper-B2i19YJl.js';
import './floatRGBA-CU1RKiZ_.js';
import './FeatureCommandQueue-BMv9sj2_.js';
import './HighlightCounter-Et-942WQ.js';
import './popupUtils-CyFkmyVg.js';
import './RefreshableLayerView-Cqyh-CYi.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
let o=class extends X{initialize(){this.addHandles([d$1((()=>this.view.scale),(()=>this._update()),P$1)],"constructor");}isUpdating(){const e=this.layer.sublayers.some((e=>null!=e.renderer)),r=this._commandsQueue.updateTracking.updating,s=null!=this._updatingRequiredFieldsPromise,i=!this._worker,t=this.dataUpdating,o=e&&(r||s||i||t);return has("esri-2d-log-updating")&&console.log(`Updating FLV2D: ${o}\n  -> hasRenderer ${e}\n  -> hasPendingCommand ${r}\n  -> updatingRequiredFields ${s}\n  -> updatingProxy ${i}\n  -> updatingPipeline ${t}\n`),o}};o=e([c("esri.views.2d.layers.SubtypeGroupLayerView2D")],o);const a=o;

export { a as default };
