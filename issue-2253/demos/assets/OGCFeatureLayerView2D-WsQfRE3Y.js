import { aW as e, aX as y, aY as c } from './main-Bl7UhAgQ.js';
import { X } from './FeatureLayerView2D-Cg_iM_BB.js';
import './preload-helper-dJJaZANz.js';
import './Container-D1TmJp0Z.js';
import './highlightReasons-D-JX1fNv.js';
import './definitions-slUvtMCM.js';
import './enums-CgzwTbC2.js';
import './Texture-COy1GE2G.js';
import './LayerView-Or5DpL_D.js';
import './TechniqueInstance-7osB4m0e.js';
import './UpdateTracking2D-B5ybiahB.js';
import './TurboLine-DAMS-SqP.js';
import './enums-DZmWLm_j.js';
import './earcut-Dz7kptQX.js';
import './GeometryUtils-B6tm3xQc.js';
import './Rect-9uT7dZO1.js';
import './LabelMetric-DaQqGwvM.js';
import './Program-B61PE5xR.js';
import './VertexElementDescriptor-BrMxIhbJ.js';
import './BindType-KnpK3yZX.js';
import './Util-B4hIz2Dd.js';
import './constants-C0QDwCF4.js';
import './TileContainer-Cytg5bfe.js';
import './WGLContainer-N3h8AqkD.js';
import './ProgramTemplate-BxtKohPJ.js';
import './StyleDefinition-CR2vYxyv.js';
import './config-Di5U9yzL.js';
import './tileUtils-DU1rqR7R.js';
import './SDFHelper-3GP4NQMa.js';
import './floatRGBA-DAKoK7H8.js';
import './FeatureCommandQueue-xMa12zxW.js';
import './HighlightCounter-B5-QL78v.js';
import './popupUtils-XJ5nBGKu.js';
import './RefreshableLayerView-Dh7m_1yq.js';

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
