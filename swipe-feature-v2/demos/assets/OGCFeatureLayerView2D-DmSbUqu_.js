import { bd as e, be as y, bf as a$1 } from './main-DoQYi8g2.js';
import { r as re } from './FeatureLayerView2D-CcqeOgAW.js';
import './preload-helper-dJJaZANz.js';
import './Container-BXDC_O9V.js';
import './highlightReasons-CiRq4-R7.js';
import './definitions-BdwlvHBE.js';
import './enums-CwcDCDam.js';
import './Texture-Cxsvcizu.js';
import './timeSupport-DDU9vSWr.js';
import './LayerView-DVWbXcf-.js';
import './ClipRect-CWcS3rXE.js';
import './layerViewUtils-CRtvGSrJ.js';
import './TechniqueInstance-CknLba_O.js';
import './UpdateTracking2D-g8ArCcPp.js';
import './BidiEngine-Z2aMxkhF.js';
import './GeometryUtils-_it_xdn2.js';
import './enums-CHdyfzUK.js';
import './Rect-zdvLIBQm.js';
import './LabelMetric-x642nFfX.js';
import './Program-r2VmhuDV.js';
import './VertexElementDescriptor-Bcj0303n.js';
import './BindType-DQnxDFt3.js';
import './Util-DGkoUKGK.js';
import './TileContainer-BZ2g2WDD.js';
import './WGLContainer-D6Fm9z2u.js';
import './ProgramTemplate-DQrTJtci.js';
import './vec3f32-CmlAce5k.js';
import './StyleDefinition-DkEWNPyD.js';
import './config-C86_VOH4.js';
import './earcut-BMZC1akZ.js';
import './CircularArray-BCXLb8ry.js';
import './tileUtils-Ceq3VL9e.js';
import './SDFHelper-_vVP7ump.js';
import './floatRGBA-CG8vzEF7.js';
import './FeatureCommandQueue-B9mwxU7i.js';
import './constants-BNnV1ogR.js';
import './HighlightCounter-VXMRVc5f.js';
import './popupUtils-BB92MPl7.js';
import './RefreshableLayerView-BzKzyNvW.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.30/esri/copyright.txt for details.
*/
const o=o=>{let t=class extends o{get availableFields(){return this.layer.fieldsIndex.fields.map((e=>e.name))}};return e([y()],t.prototype,"layer",void 0),e([y({readOnly:!0})],t.prototype,"availableFields",null),t=e([a$1("esri.views.layers.OGCFeatureLayerView")],t),t};

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.30/esri/copyright.txt for details.
*/
let t=class extends(o(re)){supportsSpatialReference(r){return this.layer.serviceSupportsSpatialReference(r)}};t=e([a$1("esri.views.2d.layers.OGCFeatureLayerView2D")],t);const a=t;

export { a as default };
