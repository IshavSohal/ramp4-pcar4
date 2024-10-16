import { aW as e, aX as y, aY as c } from './main-4YG_Z3fk.js';
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
const o=o=>{let t=class extends o{get availableFields(){return this.layer.fieldsIndex.fields.map((e=>e.name))}};return e([y()],t.prototype,"layer",void 0),e([y({readOnly:!0})],t.prototype,"availableFields",null),t=e([c("esri.views.layers.OGCFeatureLayerView")],t),t};

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
let t=class extends(o(X)){supportsSpatialReference(r){return this.layer.serviceSupportsSpatialReference(r)}};t=e([c("esri.views.2d.layers.OGCFeatureLayerView2D")],t);const a=t;

export { a as default };
