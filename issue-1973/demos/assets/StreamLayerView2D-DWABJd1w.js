import { bd as e, be as y, fT as d, bf as a, bj as d$1, s, fx as o, aQ as e$1, bl as d$2 } from './main-5ivotA7d.js';
import { n, r as re } from './FeatureLayerView2D-BOX60sh9.js';
import './preload-helper-dJJaZANz.js';
import './Container-CEbThM4A.js';
import './highlightReasons-DF1DILMu.js';
import './definitions-BdwlvHBE.js';
import './enums-CwcDCDam.js';
import './Texture-syeFgIiX.js';
import './timeSupport-DusQPTOa.js';
import './LayerView-DFeSr6PP.js';
import './layerViewUtils-CRtvGSrJ.js';
import './TechniqueInstance-DBsmcB4d.js';
import './UpdateTracking2D-C4LWDD8Y.js';
import './BidiEngine-Z2aMxkhF.js';
import './GeometryUtils-BgJrHE3X.js';
import './enums-CHdyfzUK.js';
import './Rect-zdvLIBQm.js';
import './LabelMetric-CsopNW4j.js';
import './Program-6sDK-ryB.js';
import './VertexElementDescriptor-Bcj0303n.js';
import './BindType-DQnxDFt3.js';
import './Util-VK1Izig4.js';
import './TileContainer-CGL0etE_.js';
import './WGLContainer-CD55gFMT.js';
import './ProgramTemplate-BSP8vhTz.js';
import './vec3f32-CmlAce5k.js';
import './StyleDefinition-DkEWNPyD.js';
import './config-C86_VOH4.js';
import './earcut-B89C9uLK.js';
import './CircularArray-BCXLb8ry.js';
import './tileUtils-Ceq3VL9e.js';
import './SDFHelper-BI841E0q.js';
import './floatRGBA-D-o7v5zT.js';
import './FeatureCommandQueue-B1hxBKNw.js';
import './constants-BNnV1ogR.js';
import './HighlightCounter-Cx0IMhrD.js';
import './popupUtils-CF8yK8NJ.js';
import './RefreshableLayerView-CoNmphPn.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.30/esri/copyright.txt for details.
*/
const r=r=>{let i=class extends r{resume(){this._isUserPaused=!1,this.suspended||this._doResume();}pause(){this._isUserPaused=!0,this.suspended||this._doPause();}disconnect(){this._doDisconnect();}connect(){this._doConnect();}clear(){this._doClear();}constructor(...s){super(...s),this._isUserPaused=!1,this.filter=null;}get connectionStatus(){return (this._isUserPaused||this.suspended)&&"connected"===this._streamConnectionStatus?"paused":this._streamConnectionStatus}_onSuspendedChange(s){s?this._doPause():this._isUserPaused||this._doResume();}};return e([y()],i.prototype,"_isUserPaused",void 0),e([y({readOnly:!0})],i.prototype,"connectionStatus",null),e([y({type:d})],i.prototype,"filter",void 0),i=e([a("esri.views.layers.StreamLayerView")],i),i};

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.30/esri/copyright.txt for details.
*/
let p=class extends(r(re)){constructor(){super(...arguments),this.pipelineConnectionStatus="disconnected",this.pipelineErrorString=null;}initialize(){this.addHandles([d$1((()=>this.layer.customParameters),(async e=>{(await this.getWorker()).streamMessenger.updateCustomParameters(e);})),this.layer.on("send-message-to-socket",(async e=>{(await this.getWorker()).streamMessenger.sendMessageToSocket(e);})),this.layer.on("send-message-to-client",(async e=>{(await this.getWorker()).streamMessenger.sendMessageToClient(e),this._isUserPaused&&"type"in e&&"clear"===e.type&&this.incrementSourceRefreshVersion();})),d$1((()=>this.layer.purgeOptions),(()=>this._update())),d$1((()=>this.suspended),this._onSuspendedChange.bind(this))],"constructor"),this._doResume();}destroy(){this._doPause();}get connectionError(){return this.pipelineErrorString?new s("stream-controller",this.pipelineErrorString):null}on(e,r){if(Array.isArray(e))return o(e.map((e=>this.on(e,r))));const n=["data-received","message-received"].includes(e);n&&this.getWorker().then((r=>r.streamMessenger.enableEvent(e,!0)));const o$1=super.on(e,r),i=this;return e$1((()=>{o$1.remove(),n&&(i._workerProxy.closed||i.hasEventListener(e)||i.getWorker().then((r=>r.streamMessenger.enableEvent(e,!1))));}))}async queryLatestObservations(e,t){if(!(this.layer.timeInfo?.endField||this.layer.timeInfo?.startField||this.layer.timeInfo?.trackIdField))throw new s("streamlayer-no-timeField","queryLatestObservation can only be used with services that define a TrackIdField");const s$1=await this.getWorker();return n(s$1.features.executeQueryForLatestObservations(this._cleanUpQuery(e),t).then((e=>{const r=d$2.fromJSON(e);return r.features.forEach((e=>{e.layer=this.layer,e.sourceLayer=this.layer;})),r})),new d$2({features:[]}))}detach(){super.detach(),this.pipelineConnectionStatus="disconnected";}get _streamConnectionStatus(){return this.pipelineConnectionStatus}_doPause(){null!=this._refreshInterval&&(clearInterval(this._refreshInterval),this._refreshInterval=null);}_doResume(){this._refreshInterval=setInterval((()=>this.incrementSourceRefreshVersion()),this.layer.updateInterval);}_doDisconnect(){this.getWorker().then((e=>e.streamMessenger.disconnect())),this._doPause();}_doConnect(){this.getWorker().then((e=>e.streamMessenger.connect())),this.resume();}_doClear(){this.getWorker().then((e=>e.streamMessenger.clear())),null==this._refreshInterval&&this.incrementSourceRefreshVersion();}_createClientOptions(){const e=super._createClientOptions(),r=this;return {...e,get container(){return r.featureContainer},setProperty:e=>{this.set(e.propertyName,e.value);}}}};e([y()],p.prototype,"pipelineConnectionStatus",void 0),e([y()],p.prototype,"pipelineErrorString",void 0),e([y({readOnly:!0})],p.prototype,"connectionError",null),e([y({readOnly:!0})],p.prototype,"_streamConnectionStatus",null),p=e([a("esri.views.2d.layers.StreamLayerView2D")],p);const u=p;

export { u as default };
