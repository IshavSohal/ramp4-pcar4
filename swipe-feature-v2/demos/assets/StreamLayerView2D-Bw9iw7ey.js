import{bw as s,bx as o,g$ as l,by as d,cf as c,s as h,gN as m,bi as y,bA as u}from"./main-Dh6BJvY6.js";import{n as _,r as g}from"./FeatureLayerView2D-DbgycVC2.js";import"./preload-helper-ExcqyqRp.js";import"./Container-Dk6JfFCP.js";import"./timeSupport-CEu4LzE2.js";import"./LayerView-cepn0N6l.js";import"./ClipRect-Yx5wz137.js";import"./layerViewUtils-Dk0pK9XP.js";import"./TechniqueInstance-CB9yccDl.js";import"./UpdateTracking2D-BwJQKToT.js";import"./BidiEngine-DNnuvc1i.js";import"./GeometryUtils-Bl-VBL2s.js";import"./Rect-CUzevAry.js";import"./LabelMetric-C3xQRnNR.js";import"./Program-DTPMwzSB.js";import"./BufferObject-DEZu3UCV.js";import"./VertexElementDescriptor-BOD-G50G.js";import"./BindType-BmZEZMMh.js";import"./Util-B61z3LsG.js";import"./TileContainer-L2aMOXkR.js";import"./WGLContainer-DlRsWeOT.js";import"./VertexArrayObject-Dhp0IYUD.js";import"./ProgramTemplate-BNB8XQQs.js";import"./vec3f32-nZdmKIgz.js";import"./StyleDefinition-C62YTcyu.js";import"./config-MDUrh2eL.js";import"./earcut-Lltz9D9k.js";import"./FeatureCommandQueue-DrxVndXF.js";import"./constants-F8oTIn7N.js";import"./CircularArray-CujHzHWW.js";import"./SDFHelper-PTt2dR6t.js";import"./floatRGBA-CrjKAQDY.js";import"./HighlightCounter-Czi-fdpx.js";import"./popupUtils-CfKn2MLX.js";import"./RefreshableLayerView-C5OxEpzE.js";const f=e=>{let t=class extends e{resume(){this._isUserPaused=!1,this.suspended||this._doResume()}pause(){this._isUserPaused=!0,this.suspended||this._doPause()}disconnect(){this._doDisconnect()}connect(){this._doConnect()}clear(){this._doClear()}constructor(...r){super(...r),this._isUserPaused=!1,this.filter=null}get connectionStatus(){return(this._isUserPaused||this.suspended)&&this._streamConnectionStatus==="connected"?"paused":this._streamConnectionStatus}_onSuspendedChange(r){r?this._doPause():this._isUserPaused||this._doResume()}};return s([o()],t.prototype,"_isUserPaused",void 0),s([o({readOnly:!0})],t.prototype,"connectionStatus",null),s([o({type:l})],t.prototype,"filter",void 0),t=s([d("esri.views.layers.StreamLayerView")],t),t};let n=class extends f(g){constructor(){super(...arguments),this.pipelineConnectionStatus="disconnected",this.pipelineErrorString=null}initialize(){this.addHandles([c(()=>this.layer.customParameters,async e=>{(await this.getWorker()).streamMessenger.updateCustomParameters(e)}),this.layer.on("send-message-to-socket",async e=>{(await this.getWorker()).streamMessenger.sendMessageToSocket(e)}),this.layer.on("send-message-to-client",async e=>{(await this.getWorker()).streamMessenger.sendMessageToClient(e),this._isUserPaused&&"type"in e&&e.type==="clear"&&this.incrementSourceRefreshVersion()}),c(()=>this.layer.purgeOptions,()=>this._update()),c(()=>this.suspended,this._onSuspendedChange.bind(this))],"constructor"),this._doResume()}destroy(){this._doPause()}get connectionError(){return this.pipelineErrorString?new h("stream-controller",this.pipelineErrorString):null}on(e,t){if(Array.isArray(e))return m(e.map(i=>this.on(i,t)));const r=["data-received","message-received"].includes(e);r&&this.getWorker().then(i=>i.streamMessenger.enableEvent(e,!0));const p=super.on(e,t),a=this;return y(()=>{p.remove(),r&&(a._workerProxy.closed||a.hasEventListener(e)||a.getWorker().then(i=>i.streamMessenger.enableEvent(e,!1)))})}async queryLatestObservations(e,t){if(!(this.layer.timeInfo?.endField||this.layer.timeInfo?.startField||this.layer.timeInfo?.trackIdField))throw new h("streamlayer-no-timeField","queryLatestObservation can only be used with services that define a TrackIdField");const r=await this.getWorker();return _(r.features.executeQueryForLatestObservations(this._cleanUpQuery(e),t).then(p=>{const a=u.fromJSON(p);return a.features.forEach(i=>{i.layer=this.layer,i.sourceLayer=this.layer}),a}),new u({features:[]}))}detach(){super.detach(),this.pipelineConnectionStatus="disconnected"}get _streamConnectionStatus(){return this.pipelineConnectionStatus}_doPause(){this._refreshInterval!=null&&(clearInterval(this._refreshInterval),this._refreshInterval=null)}_doResume(){this._refreshInterval=setInterval(()=>this.incrementSourceRefreshVersion(),this.layer.updateInterval)}_doDisconnect(){this.getWorker().then(e=>e.streamMessenger.disconnect()),this._doPause()}_doConnect(){this.getWorker().then(e=>e.streamMessenger.connect()),this.resume()}_doClear(){this.getWorker().then(e=>e.streamMessenger.clear()),this._refreshInterval==null&&this.incrementSourceRefreshVersion()}_createClientOptions(){const e=super._createClientOptions(),t=this;return{...e,get container(){return t.featureContainer},setProperty:r=>{this.set(r.propertyName,r.value)}}}};s([o()],n.prototype,"pipelineConnectionStatus",void 0),s([o()],n.prototype,"pipelineErrorString",void 0),s([o({readOnly:!0})],n.prototype,"connectionError",null),s([o({readOnly:!0})],n.prototype,"_streamConnectionStatus",null),n=s([d("esri.views.2d.layers.StreamLayerView2D")],n);const ee=n;export{ee as default};