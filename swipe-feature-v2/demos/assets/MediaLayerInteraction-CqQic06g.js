const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./editingTools-DJ1IBJfj.js","./main-Dh6BJvY6.js","./preload-helper-ExcqyqRp.js","./main-tmgbVJK6.css","./projectVectorToVector-CPkPMCLp.js","./projectPointToVector-Cvgy4LHZ.js","./elevationInfoUtils-Ck1vTF15.js","./geodesicUtils-MPKp1VcP.js","./geometryEngine-4uSclHxP.js","./geometryEngineBase-Cxuc5lOK.js","./hydrated-CbXPYYPj.js","./quat-BwW2qi8g.js","./mat3f64-q3fE-ZOt.js","./quatf64-aQ5IuZRd.js","./ReactiveSet-CdzSICeK.js","./plane-lWIA9ji3.js","./mat4f64-CSKppSlJ.js","./sphere-DzLxD3IJ.js","./MeshTransform-CdIcc7i4.js","./meshVertexSpaceUtils-DCQxU_SY.js","./MeshLocalVertexSpace-CdqccB-c.js","./earcut-Lltz9D9k.js","./triangle-AcpOk6jc.js","./lineSegment-B3QQxR4H.js","./spatialReferenceEllipsoidUtils-BKE17HR-.js","./drapedUtils-DbD3eKCL.js","./boundedPlane-2TAdyiZF.js"])))=>i.map(i=>d[i]);
import{_ as u}from"./preload-helper-ExcqyqRp.js";import{ec as v,fa as y,fb as g,bi as r,fc as f,cg as l,fd as d,fe as w,bw as s,bx as i,by as T}from"./main-Dh6BJvY6.js";const h={redo:"r",undo:"z"},c=Symbol(),_=Symbol(),p=Symbol();let n=class extends v{constructor(e){super(e),this._tool=null,this._updatingHandles=new y,this.enabled=!1,this._onPointerMove=g(async t=>{const o=await this._updatingHandles.addPromise(this._findElementAtScreenPoint(t));this.destroyed||(this.removeHandles(_),o&&o!==this.selectedElement&&(this.view.cursor="pointer",this.addHandles(r(()=>this.view.cursor=null),_)))})}initialize(){this.addHandles(f(this._updatingHandles)),this._updatingHandles.add(()=>this.enabled,e=>this._setEnabled(e),l),this._updatingHandles.add(()=>this._preferredInteractionTool,()=>this._preferredInteractionToolChanged())}get _validatedSelectedElement(){const e=this.selectedElement;if(!e)return null;const{layer:{source:t}}=this;return t?"hasElement"in t?t.hasElement(e)?e:null:t===e?e:null:null}get _preferredInteractionTool(){return this.options?.tool??"transform"}get updating(){return this._updatingHandles.updating}_setEnabled(e){if(this.removeHandles(c),!e)return;const{view:t}=this;this.addHandles([t.on("immediate-click",o=>this._onClick(o),d.TOOL),t.on("pointer-move",o=>this._onPointerMove(o).catch(()=>{}),d.TOOL),t.on("key-down",o=>{o.key===h.undo&&this._tool?.canUndo()&&(this._tool.undo(),o.stopPropagation()),o.key===h.redo&&this._tool?.canRedo()&&(this._tool.redo(),o.stopPropagation())}),this._updatingHandles.add(()=>this._validatedSelectedElement,o=>this._selectedElementChanged(o),l),r(()=>{t.cursor=null,this._removeTool()})],c)}async _findElementAtScreenPoint(e){const t=(await this.view.hitTest(e,{include:[this.layer]})).results[0];return t?.type==="media"?t.element:null}async _onClick(e){await this._updatingHandles.addPromise(e.async(async()=>{const t=await this._findElementAtScreenPoint(e);this.destroyed||(t&&e.stopPropagation(),this.selectedElement=t,this.selectedElement&&(this.view.cursor=null))}))}_preferredInteractionToolChanged(){const{_tool:e}=this;e&&(this._preferredInteractionTool===e.type||this._updatingHandles.addPromise(this._recreateTool()))}async _recreateTool(){this.removeHandles(p),this._removeTool();const e=this._validatedSelectedElement;if(!e)return;const t=new AbortController;this.addHandles(w(t),p);const{TransformTool:o,ControlPointsTransformTool:m}=await u(()=>import("./editingTools-DJ1IBJfj.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26]),import.meta.url);if(t.signal.aborted)return;const{view:a}=this;switch(this._preferredInteractionTool){case"transform":this._tool=new o({target:e,view:a});break;case"reshape":this._tool=new m({mediaElement:e,view:a})}this.addHandles([r(()=>{this._tool&&(a.tools.remove(this._tool),this._tool=null)})],this._tool),a.addAndActivateTool(this._tool)}_removeTool(){this._tool&&this.removeHandles(this._tool)}async _selectedElementChanged(e){e?.georeference?await this._updatingHandles.addPromise(this._recreateTool()):this._removeTool()}};s([i()],n.prototype,"_validatedSelectedElement",null),s([i()],n.prototype,"_preferredInteractionTool",null),s([i({constructOnly:!0})],n.prototype,"view",void 0),s([i({constructOnly:!0})],n.prototype,"layer",void 0),s([i()],n.prototype,"selectedElement",void 0),s([i()],n.prototype,"enabled",void 0),s([i()],n.prototype,"options",void 0),s([i()],n.prototype,"updating",null),n=s([T("esri.views.2d.layers.support.MediaLayerInteraction")],n);export{n as MediaLayerInteraction};