import { dW as i$1, c1 as f$1, aW as e, aX as y, aY as c, ai as u$1, ey as h, a4 as c$1, b9 as u$2, b2 as d$1, b4 as P$1 } from './main-DF5PysNr.js';
import { m as m$1, u as u$3 } from './LayerView-CS-VBeNx.js';
import { t } from './GraphicContainer-CRd3tap_.js';
import { $ } from './GraphicsView2D-D1sA47vF.js';
import './preload-helper-dJJaZANz.js';
import './Container-BhesgojI.js';
import './highlightReasons-wfUFDSql.js';
import './definitions-slUvtMCM.js';
import './enums-CgzwTbC2.js';
import './Texture-CYEUJwS7.js';
import './AGraphicContainer-CNQGDt0i.js';
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
import './FeatureCommandQueue-BMv9sj2_.js';
import './vec3f32-CLbqcArJ.js';
import './AttributeStore-DhQbuXwo.js';
import './TimeOnly-WwFO3-sd.js';
import './timeSupport-VpMTbYYV.js';
import './json-Beimr7gP.js';
import './normalizeUtilsSync-D6watahY.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
let p=class extends(i$1(f$1)){constructor(o){super(o),this.frameCenter=null,this.frameOutline=null,this.lineOfSight=null,this.sensorLocation=null,this.sensorTrail=null;}};e([y({type:Boolean})],p.prototype,"frameCenter",void 0),e([y({type:Boolean})],p.prototype,"frameOutline",void 0),e([y({type:Boolean})],p.prototype,"lineOfSight",void 0),e([y({type:Boolean})],p.prototype,"sensorLocation",void 0),e([y({type:Boolean})],p.prototype,"sensorTrail",void 0),p=e([c("esri.layers.support.TelemetryDisplay")],p);const i=p;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
const f=new u$1([255,127,0]);let g=class extends(m$1(u$3)){constructor(){super(...arguments),this._graphicsLayer=new h,this._frameOutlineGraphic=new c$1({symbol:{type:"simple-fill",outline:{type:"simple-line",color:f}}}),this._sensorTrailGraphic=new c$1({symbol:{type:"simple-line",color:f}}),this._lineOfSightGraphic=new c$1({symbol:{type:"simple-line",color:f}}),this._sensorLocationGraphic=new c$1({symbol:{type:"simple-marker",color:f}}),this._frameCenterGraphic=new c$1({symbol:{type:"simple-marker",color:f}}),this.layer=null,this.symbolColor=f,this.visibleTelemetryElements=null;}destroy(){this._graphicsLayer=u$2(this._graphicsLayer);}initialize(){this.addHandles(d$1((()=>this.symbolColor),(()=>{this._frameOutlineGraphic.symbol.outline.color=this.symbolColor,this._sensorTrailGraphic.symbol.color=this.symbolColor,this._lineOfSightGraphic.symbol.color=this.symbolColor,this._sensorLocationGraphic.symbol.color=this.symbolColor,this._frameCenterGraphic.symbol.color=this.symbolColor;}),P$1)),this._graphicsLayer.graphics.addMany([this._frameOutlineGraphic,this._sensorTrailGraphic,this._lineOfSightGraphic,this._sensorLocationGraphic,this._frameCenterGraphic]),this.visibleTelemetryElements=new i({frameCenter:this.layer.telemetryDisplay?.frameCenter??!0,frameOutline:this.layer.telemetryDisplay?.frameOutline??!0,lineOfSight:this.layer.telemetryDisplay?.lineOfSight??!0,sensorLocation:this.layer.telemetryDisplay?.sensorLocation??!0,sensorTrail:this.layer.telemetryDisplay?.sensorTrail??!0});}attach(){this.graphicsView=new $({requestUpdateCallback:()=>this.requestUpdate(),view:this.view,graphics:this._graphicsLayer.graphics,container:new t(this.view.featuresTilingScheme)}),this.container.addChild(this.graphicsView.container),this.addAttachHandles(this._graphicsLayer.on("graphic-update",this.graphicsView.graphicUpdateHandler)),this.addAttachHandles([d$1((()=>[this.layer.telemetryDisplay?.frameCenter,this.layer.telemetryDisplay?.frameOutline,this.layer.telemetryDisplay?.sensorLocation,this.layer.telemetryDisplay?.sensorTrail,this.layer.telemetryDisplay?.lineOfSight]),(()=>this._updateVisibleTelemetryElements()),P$1),d$1((()=>[this.layer.telemetry,this.visibleTelemetryElements?.frameCenter,this.visibleTelemetryElements?.frameOutline,this.visibleTelemetryElements?.sensorLocation,this.visibleTelemetryElements?.sensorTrail,this.visibleTelemetryElements?.lineOfSight]),(()=>this._updateGraphicGeometries()),P$1)]);}detach(){this.container.removeAllChildren(),this.graphicsView=u$2(this.graphicsView);}supportsSpatialReference(e){return !0}moveStart(){}moveEnd(){}viewChange(){this.graphicsView.viewChange();}update(e){this.graphicsView.processUpdate(e);}isUpdating(){return !this.graphicsView||this.graphicsView.updating}_updateVisibleTelemetryElements(){this.visibleTelemetryElements&&this.layer.telemetryDisplay&&(this.visibleTelemetryElements.frameCenter=this.layer.telemetryDisplay.frameCenter,this.visibleTelemetryElements.frameOutline=this.layer.telemetryDisplay.frameOutline,this.visibleTelemetryElements.lineOfSight=this.layer.telemetryDisplay.lineOfSight,this.visibleTelemetryElements.sensorLocation=this.layer.telemetryDisplay.sensorLocation,this.visibleTelemetryElements.sensorTrail=this.layer.telemetryDisplay.sensorTrail);}_updateGraphicGeometries(){const{telemetry:e}=this.layer,{visibleTelemetryElements:i}=this;e&&i&&(i.frameOutline&&e.frameOutline?this._frameOutlineGraphic.geometry=this.layer.telemetry.frameOutline:this._frameOutlineGraphic.geometry=null,i.sensorTrail&&e.sensorTrail?this._sensorTrailGraphic.geometry=this.layer.telemetry.sensorTrail:this._sensorTrailGraphic.geometry=null,i.lineOfSight&&e.lineOfSight?this._lineOfSightGraphic.geometry=this.layer.telemetry.lineOfSight:this._lineOfSightGraphic.geometry=null,i.sensorLocation&&e.sensorLocation?this._sensorLocationGraphic.geometry=this.layer.telemetry.sensorLocation:this._sensorLocationGraphic.geometry=null,i.frameCenter&&e.frameCenter?this._frameCenterGraphic.geometry=this.layer.telemetry.frameCenter:this._frameCenterGraphic.geometry=null);}};e([y()],g.prototype,"graphicsView",void 0),e([y()],g.prototype,"layer",void 0),e([y()],g.prototype,"symbolColor",void 0),e([y({type:i})],g.prototype,"visibleTelemetryElements",void 0),g=e([c("esri.views.2d.layers.VideoLayerView2D")],g);const u=g;

export { u as default };
