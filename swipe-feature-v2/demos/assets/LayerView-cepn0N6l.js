import{bw as e,bx as r,f4 as S,by as y,f3 as $,bq as _,b0 as A,a1 as f,kQ as w,cL as O,kR as C,s as H,cf as o,hJ as h,kS as q,cc as x,kT as T,kU as k,G as b,eb as E,kV as P,d6 as I,ec as L,fa as U,ck as V}from"./main-Dh6BJvY6.js";import{n as j}from"./Container-Dk6JfFCP.js";import{p as R,a as M}from"./ClipRect-Yx5wz137.js";import{r as G,a as m}from"./layerViewUtils-Dk0pK9XP.js";function B(i){return i!=null&&typeof i=="object"&&i.type==="2d"&&i.view2dType==="linkchart"}var v;const N={base:$,key:"type",typeMap:{extent:_,polygon:A}};let u=v=class extends R{constructor(i){super(i),this.type="geometry",this.geometry=null}clone(){return new v({geometry:this.geometry?.clone()??null})}commitVersionProperties(){this.commitProperty("geometry")}};e([r({types:N,json:{read:S,write:!0}})],u.prototype,"geometry",void 0),u=v=e([y("esri.views.layers.support.Geometry")],u);const D=u;let c=class extends R{constructor(i){super(i),this.type="path",this.path=[]}commitVersionProperties(){this.commitProperty("path")}};e([r({type:[[[Number]]],json:{write:!0}})],c.prototype,"path",void 0),c=e([y("esri.views.layers.support.Path")],c);const F=c,g=f.ofType({key:"type",base:null,typeMap:{rect:M,path:F,geometry:D}}),z=new(f.ofType(w)),X=i=>{let a=class extends i{constructor(){super(...arguments),this.attached=!1,this.clips=new g,this.highlights=null,this.lastUpdateId=-1,this.moving=!1,this.updateRequested=!1,this._visibleAtCurrentScale=!0}initialize(){const t=this.view?.spatialReferenceLocked??!0;this.view?.spatialReference&&t&&!this.spatialReferenceSupported?this.addResolvingPromise(Promise.reject(new H("layerview:spatial-reference-incompatible","The spatial reference of this layer does not meet the requirements of the view",{layer:this.layer}))):(this.container||(this.container=new j),this.container.fadeTransitionEnabled=!0,this.container.visible=!1,this.container.endTransitions(),this.addHandles([o(()=>this.suspended,s=>{this.container&&(this.container.visible=!s)},h),o(()=>this.updateSuspended,s=>{this.view&&!s&&this.updateRequested&&this.view.requestUpdate()},h),o(()=>this.layer?.opacity??1,s=>{this.container&&(this.container.opacity=s)},h),o(()=>this.layer&&"blendMode"in this.layer?this.layer.blendMode:"normal",s=>{this.container&&(this.container.blendMode=s)},h),o(()=>this.layer&&"effect"in this.layer?this.layer.effect:null,s=>{this.container&&(this.container.effect=s)},h),o(()=>this._mergedHighlights.items.map(s=>({name:s.name,options:{fillColor:s.options.color,haloColor:s.options.haloColor,fillOpacity:s.options.fillOpacity,haloOpacity:s.options.haloOpacity,haloWidth:s.options.haloWidth,haloBlur:s.options.haloBlur}})),()=>{this.container.highlightGradient=q(this.container.highlightGradient,this._mergedHighlights.items)},h),o(()=>this._mergedHighlights.items.map(s=>s.name),()=>{this._updateHighlights()}),x(()=>this.clips,"change",()=>{this.container&&(this.container.clips=this.clips)},h),o(()=>({scale:this.view?.scale,scaleRange:this.layer&&"effectiveScaleRange"in this.layer?this.layer.effectiveScaleRange:null}),({scale:s,scaleRange:d})=>{const p=G(d,s);p!==this._visibleAtCurrentScale&&(this._visibleAtCurrentScale=p)},h)],"constructor"),this.view?.whenLayerView?this.view.whenLayerView(this.layer).then(s=>{s===this&&this.processAttach()},()=>{}):this.when().then(()=>{this.processAttach()},()=>{}))}_updateHighlights(){}destroy(){this.processDetach(),this.updateRequested=!1}get highlightOptions(){return T(this)}set highlightOptions(t){k(this,t)}get _mergedHighlights(){if(!this.view)return z;if(!this.highlights)return this.view.highlights;const t=this.view.highlights.clone();for(const l of this.highlights){const s=t.find(d=>d.name===l.name);s&&(s.options=l.options)}return t}get scheduler(){return this.view.scheduler}get spatialReferenceSupported(){const t=this.view?.spatialReference;return t==null||this.supportsSpatialReference(t)}get updating(){return this.spatialReferenceSupported&&(!this.attached||!this.suspended&&(this.updateRequested||this.isUpdating())||!!this._updatingHandles?.updating||this.container.transitioning)}get visibleAtCurrentScale(){return this._visibleAtCurrentScale}processAttach(){this.isResolved()&&!this.attached&&!this.destroyed&&this.spatialReferenceSupported&&(this.attach(),this.attached=!0,this.requestUpdate())}processDetach(){this.attached&&(this.attached=!1,this.removeHandles("attach"),this.detach(),this.updateRequested=!1)}requestUpdate(){this.destroyed||this.updateRequested||(this.updateRequested=!0,this.updateSuspended||this.view.requestUpdate())}processUpdate(t){!this.isFulfilled()||this.isResolved()?(this._set("updateParameters",t),this.updateRequested&&!this.updateSuspended&&(this.updateRequested=!1,this.update(t))):this.updateRequested=!1}hitTest(t,l){return Promise.resolve(null)}supportsSpatialReference(t){return!0}canResume(){if(!this.spatialReferenceSupported)return!1;switch(this.layer?.type){case"link-chart":case"knowledge-graph-sublayer":break;default:if(B(this.view)&&!this.view.inGeographicLayout)return!1}return!!super.canResume()&&this.visibleAtCurrentScale}getSuspendInfo(){const t=super.getSuspendInfo(),l=!this.spatialReferenceSupported;return l&&(t.spatialReferenceNotSupported=l),t}addAttachHandles(t){this.addHandles(t,"attach")}_getHighlightBits(t){t=new Set(t);let l=1,s=0;if(!this.view)return 0;const d=this._mergedHighlights;for(const{name:p}of d)t.delete(p)&&(s=l),l<<=1;for(const p of t)b.getLogger(this).error("#highlights",`${p} was not found. Features in this group will not be highlighted.`);return s}};return e([r()],a.prototype,"attached",void 0),e([r({type:g,set(t){const l=O(t,this._get("clips"),g);this._set("clips",l)}})],a.prototype,"clips",void 0),e([r()],a.prototype,"container",void 0),e([r({type:C})],a.prototype,"highlightOptions",null),e([r({type:f.ofType(w)})],a.prototype,"highlights",void 0),e([r()],a.prototype,"_mergedHighlights",null),e([r()],a.prototype,"moving",void 0),e([r({readOnly:!0})],a.prototype,"spatialReferenceSupported",null),e([r({readOnly:!0})],a.prototype,"updateParameters",void 0),e([r()],a.prototype,"updateRequested",void 0),e([r()],a.prototype,"updating",null),e([r()],a.prototype,"view",void 0),e([r()],a.prototype,"_visibleAtCurrentScale",void 0),e([r({readOnly:!0})],a.prototype,"visibleAtCurrentScale",null),a=e([y("esri.views.2d.layers.LayerView2D")],a),a};let n=class extends E(P(I.EventedMixin(L))){constructor(i){super(i),this._updatingHandles=new U,this.layer=null,this.parent=null}initialize(){this.when().catch(i=>{if(i.name!=="layerview:create-error"){const a=this.layer&&this.layer.id||"no id",t=this.layer?.title||"no title";b.getLogger(this).error("#resolve()",`Failed to resolve layer view (layer title: '${t}', id: '${a}')`,i)}})}destroy(){this._updatingHandles=V(this._updatingHandles)}get fullOpacity(){return(this.layer?.opacity??1)*(this.parent?.fullOpacity??1)}get suspended(){return this.destroyed||!this.canResume()}get suspendInfo(){return this.getSuspendInfo()}get legendEnabled(){return!this.suspended&&this.layer?.legendEnabled===!0}get updating(){return!(!this._updatingHandles?.updating&&!this.isUpdating())}get updatingProgress(){return this.updating?0:1}get updateSuspended(){return this.suspended}get visible(){return this.layer?.visible===!0}set visible(i){this._overrideIfSome("visible",i)}get visibleAtCurrentScale(){return!0}get visibleAtCurrentTimeExtent(){const i=this.view.timeExtent,a=this.layer?.visibilityTimeExtent;return!i||!a||!i.intersection(a).isEmpty}canResume(){const i=this.layer&&"effectiveScaleRange"in this.layer?this.layer.effectiveScaleRange:null;return this.visible&&this.layer?.loaded&&!this.parent?.suspended&&this.view?.ready&&m(i)&&this.visibleAtCurrentScale&&this.visibleAtCurrentTimeExtent||!1}getSuspendInfo(){const i=this.parent?.suspended?this.parent.suspendInfo:{};this.view?.ready||(i.viewNotReady=!0),this.layer&&this.layer.loaded||(i.layerNotLoaded=!0);const t=this.layer&&"effectiveScaleRange"in this.layer?this.layer.effectiveScaleRange:null;return m(t)&&this.visibleAtCurrentScale||(i.outsideScaleRange=!0),this.visibleAtCurrentTimeExtent||(i.outsideVisibilityTimeExtent=!0),this.visible||(i.layerInvisible=!0),i}isUpdating(){return!1}};e([r()],n.prototype,"view",void 0),e([r()],n.prototype,"fullOpacity",null),e([r()],n.prototype,"layer",void 0),e([r()],n.prototype,"parent",void 0),e([r({readOnly:!0})],n.prototype,"suspended",null),e([r({readOnly:!0})],n.prototype,"suspendInfo",null),e([r({readOnly:!0})],n.prototype,"legendEnabled",null),e([r({type:Boolean,readOnly:!0})],n.prototype,"updating",null),e([r({readOnly:!0})],n.prototype,"updatingProgress",null),e([r()],n.prototype,"updateSuspended",null),e([r()],n.prototype,"visible",null),e([r({readOnly:!0})],n.prototype,"visibleAtCurrentScale",null),e([r({readOnly:!0})],n.prototype,"visibleAtCurrentTimeExtent",null),n=e([y("esri.views.layers.LayerView")],n);const Y=n;export{D as a,X as j,Y as y};