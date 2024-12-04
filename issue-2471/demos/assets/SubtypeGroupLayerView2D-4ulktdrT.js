import { aW as e, aY as c, b2 as d$1, b4 as P$1, V as has } from './main-CLzf0Tu_.js';
import { X } from './FeatureLayerView2D-ZsgUQLU2.js';
import './preload-helper-dJJaZANz.js';
import './Container-BbjgkGcP.js';
import './highlightReasons-DZpyMItp.js';
import './definitions-slUvtMCM.js';
import './enums-CgzwTbC2.js';
import './Texture-DWszxTT7.js';
import './LayerView-DMcoE6er.js';
import './TechniqueInstance-KPu6dcbN.js';
import './UpdateTracking2D-fkUXNw2L.js';
import './TurboLine-BHTR0jQJ.js';
import './enums-DZmWLm_j.js';
import './earcut-pAfSrXrY.js';
import './GeometryUtils-CWz7cHG_.js';
import './Rect-9uT7dZO1.js';
import './LabelMetric-6IMa4XBZ.js';
import './Program-DTUHpmR_.js';
import './VertexElementDescriptor-BrMxIhbJ.js';
import './BindType-KnpK3yZX.js';
import './Util-BOniqNW5.js';
import './constants-C0QDwCF4.js';
import './TileContainer-DeiUAtYJ.js';
import './WGLContainer-BzCAqmKg.js';
import './ProgramTemplate-ox0SQR_V.js';
import './StyleDefinition-CR2vYxyv.js';
import './config-Di5U9yzL.js';
import './tileUtils-DU1rqR7R.js';
import './SDFHelper-B5XqtecN.js';
import './floatRGBA-B1gf9AO3.js';
import './FeatureCommandQueue-HtZB4Fim.js';
import './HighlightCounter-CiaPUrIS.js';
import './popupUtils-FezJ93-l.js';
import './RefreshableLayerView-DNt6qzXc.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
let o=class extends X{initialize(){this.addHandles([d$1((()=>this.view.scale),(()=>this._update()),P$1)],"constructor");}isUpdating(){const e=this.layer.sublayers.some((e=>null!=e.renderer)),r=this._commandsQueue.updateTracking.updating,s=null!=this._updatingRequiredFieldsPromise,i=!this._worker,t=this.dataUpdating,o=e&&(r||s||i||t);return has("esri-2d-log-updating")&&console.log(`Updating FLV2D: ${o}\n  -> hasRenderer ${e}\n  -> hasPendingCommand ${r}\n  -> updatingRequiredFields ${s}\n  -> updatingProxy ${i}\n  -> updatingPipeline ${t}\n`),o}};o=e([c("esri.views.2d.layers.SubtypeGroupLayerView2D")],o);const a=o;

export { a as default };
