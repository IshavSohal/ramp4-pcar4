import { aW as e, aY as c, b2 as d$1, b4 as P$1, V as has } from './main-Dj2TL05W.js';
import { X } from './FeatureLayerView2D-CYk0mHp1.js';
import './preload-helper-dJJaZANz.js';
import './Container-Wb5YmKhm.js';
import './highlightReasons-DhX7-tOV.js';
import './definitions-slUvtMCM.js';
import './enums-CgzwTbC2.js';
import './Texture-B8ekQn7Y.js';
import './LayerView-Cb7E-9I9.js';
import './TechniqueInstance-p4JZD2ba.js';
import './UpdateTracking2D-YQTJ4uxt.js';
import './TurboLine-BZDl3bEY.js';
import './enums-DZmWLm_j.js';
import './earcut-D0H6bksA.js';
import './GeometryUtils-DDFcweUg.js';
import './Rect-9uT7dZO1.js';
import './LabelMetric-B6miF8pM.js';
import './Program-DHTahvYA.js';
import './VertexElementDescriptor-BrMxIhbJ.js';
import './BindType-KnpK3yZX.js';
import './Util-CMC52DZV.js';
import './constants-C0QDwCF4.js';
import './TileContainer-B_h1TGCe.js';
import './WGLContainer-Cj7gkzSN.js';
import './ProgramTemplate-B4ggM4sw.js';
import './StyleDefinition-CR2vYxyv.js';
import './config-Di5U9yzL.js';
import './tileUtils-DU1rqR7R.js';
import './SDFHelper-BFzEvknW.js';
import './floatRGBA-DBa1pTu4.js';
import './FeatureCommandQueue-BI3Yuh4Y.js';
import './HighlightCounter-MUMaqYsH.js';
import './popupUtils-isl5J8HZ.js';
import './RefreshableLayerView-CyRK-acz.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
let o=class extends X{initialize(){this.addHandles([d$1((()=>this.view.scale),(()=>this._update()),P$1)],"constructor");}isUpdating(){const e=this.layer.sublayers.some((e=>null!=e.renderer)),r=this._commandsQueue.updateTracking.updating,s=null!=this._updatingRequiredFieldsPromise,i=!this._worker,t=this.dataUpdating,o=e&&(r||s||i||t);return has("esri-2d-log-updating")&&console.log(`Updating FLV2D: ${o}\n  -> hasRenderer ${e}\n  -> hasPendingCommand ${r}\n  -> updatingRequiredFields ${s}\n  -> updatingProxy ${i}\n  -> updatingPipeline ${t}\n`),o}};o=e([c("esri.views.2d.layers.SubtypeGroupLayerView2D")],o);const a=o;

export { a as default };
