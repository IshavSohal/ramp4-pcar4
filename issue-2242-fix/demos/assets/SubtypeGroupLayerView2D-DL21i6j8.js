import { aW as e, aY as c, b2 as d$1, b4 as P$1, V as has } from './main-4YG_Z3fk.js';
import { X } from './FeatureLayerView2D-5WIvIrfU.js';
import './preload-helper-dJJaZANz.js';
import './Container-CBd4thNq.js';
import './highlightReasons-giL9puo9.js';
import './definitions-slUvtMCM.js';
import './enums-CgzwTbC2.js';
import './Texture-Bh3Nf_Ee.js';
import './LayerView-BAw1Pzs9.js';
import './TechniqueInstance-onufARGc.js';
import './UpdateTracking2D-CCCOfhzO.js';
import './TurboLine-DdZkNZnF.js';
import './enums-DZmWLm_j.js';
import './earcut-DGTRyIfg.js';
import './GeometryUtils-CfkTZoPa.js';
import './Rect-9uT7dZO1.js';
import './LabelMetric-s_0sakBj.js';
import './Program-BhxCv7P5.js';
import './VertexElementDescriptor-BrMxIhbJ.js';
import './BindType-KnpK3yZX.js';
import './Util-Dhu6S2zz.js';
import './constants-C0QDwCF4.js';
import './TileContainer-DavtcKIf.js';
import './WGLContainer-02Ii9pDh.js';
import './ProgramTemplate-C0GwegYt.js';
import './StyleDefinition-CR2vYxyv.js';
import './config-Di5U9yzL.js';
import './tileUtils-DU1rqR7R.js';
import './SDFHelper-Dn_bCLWf.js';
import './floatRGBA-DXGeiFv2.js';
import './FeatureCommandQueue-BaU_4VG_.js';
import './HighlightCounter-DkSaK356.js';
import './popupUtils-D5zBkQpS.js';
import './RefreshableLayerView-Ncg4ZUQ7.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
let o=class extends X{initialize(){this.addHandles([d$1((()=>this.view.scale),(()=>this._update()),P$1)],"constructor");}isUpdating(){const e=this.layer.sublayers.some((e=>null!=e.renderer)),r=this._commandsQueue.updateTracking.updating,s=null!=this._updatingRequiredFieldsPromise,i=!this._worker,t=this.dataUpdating,o=e&&(r||s||i||t);return has("esri-2d-log-updating")&&console.log(`Updating FLV2D: ${o}\n  -> hasRenderer ${e}\n  -> hasPendingCommand ${r}\n  -> updatingRequiredFields ${s}\n  -> updatingProxy ${i}\n  -> updatingPipeline ${t}\n`),o}};o=e([c("esri.views.2d.layers.SubtypeGroupLayerView2D")],o);const a=o;

export { a as default };
