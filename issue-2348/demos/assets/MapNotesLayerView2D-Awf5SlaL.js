import { a1 as d$1, a0 as V, O, aQ as e, bj as d$2, bk as P, bg as v, bd as e$1, bf as a } from './main-De_LB6CK.js';
import { t as t$1 } from './highlightReasons-YmgYMDlT.js';
import { f as f$1, y as y$1 } from './LayerView-9LthKO0C.js';
import { t } from './GraphicContainer-Rv-v81e5.js';
import { V as V$1 } from './GraphicsView2D-D1EexDfz.js';
import './preload-helper-dJJaZANz.js';
import './Container-CYASymoM.js';
import './definitions-BdwlvHBE.js';
import './enums-CwcDCDam.js';
import './Texture-uGPQfE6_.js';
import './layerViewUtils-CRtvGSrJ.js';
import './AGraphicContainer-TiEbp8ve.js';
import './TechniqueInstance-BSbjTD-i.js';
import './UpdateTracking2D-yUm-UBvk.js';
import './BidiEngine-Z2aMxkhF.js';
import './GeometryUtils-D0hz-lmY.js';
import './enums-CHdyfzUK.js';
import './Rect-zdvLIBQm.js';
import './LabelMetric-DPSrT4k2.js';
import './Program-KGuy3OGN.js';
import './VertexElementDescriptor-Bcj0303n.js';
import './BindType-DQnxDFt3.js';
import './Util-DpONg75R.js';
import './TileContainer-BR8CjdIc.js';
import './WGLContainer-D0eQcPC6.js';
import './ProgramTemplate-BqGFIPrN.js';
import './vec3f32-CmlAce5k.js';
import './StyleDefinition-DkEWNPyD.js';
import './config-C86_VOH4.js';
import './earcut-D2l-TsO6.js';
import './FeatureCommandQueue-U1aagV2a.js';
import './constants-BNnV1ogR.js';
import './AttributeStore-D1Jrvriw.js';
import './TimeOnly-D_SJ2yc9.js';
import './timeSupport-Cza_Lugm.js';
import './json-DYk0G9qS.js';
import './normalizeUtilsSync-CL9lJlmm.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.30/esri/copyright.txt for details.
*/
const u="sublayers",f="layerView";let m=class extends(f$1(y$1)){constructor(){super(...arguments),this._highlightIds=new Map;}*graphicsViews(){null==this._graphicsViewsFeatureCollectionMap?null==this._graphicsViews?yield*[]:yield*this._graphicsViews:yield*this._graphicsViewsFeatureCollectionMap.keys();}async hitTest(i,e){return Array.from(this.graphicsViews(),(e=>{const s=e.hitTest(i);if(null!=this._graphicsViewsFeatureCollectionMap){const i=this._graphicsViewsFeatureCollectionMap.get(e);for(const e of s)!e.popupTemplate&&i.popupTemplate&&(e.popupTemplate=i.popupTemplate),e.sourceLayer=e.layer=this.layer;}return s})).flat().map((e=>({type:"graphic",graphic:e,layer:this.layer,mapPoint:i})))}highlight(i){let h;"number"==typeof i?h=[i]:i instanceof d$1?h=[i.uid]:Array.isArray(i)&&i.length>0?h="number"==typeof i[0]?i:i.map((i=>i&&i.uid)):V.isCollection(i)&&(h=i.map((i=>i&&i.uid)).toArray());const a=h?.filter(O);return a?.length?(this._addHighlight(a),e((()=>this._removeHighlight(a)))):e()}update(i){for(const e of this.graphicsViews())e.processUpdate(i);}attach(){const i=this.view,e=()=>this.requestUpdate(),s=this.layer.featureCollections;if(null!=s&&s.length){this._graphicsViewsFeatureCollectionMap=new Map;for(const t$1 of s){const s=new t(this.view.featuresTilingScheme),r=new V$1({view:i,graphics:t$1.source,renderer:t$1.renderer,requestUpdateCallback:e,container:s});this._graphicsViewsFeatureCollectionMap.set(r,t$1),this.container.addChild(r.container),this.addHandles([d$2((()=>t$1.visible),(i=>r.container.visible=i),P),d$2((()=>r.updating),(()=>this.notifyChange("updating")),P)],f);}this._updateHighlight();}else null!=this.layer.sublayers&&this.addHandles(v((()=>this.layer.sublayers),"change",(()=>this._createGraphicsViews()),{onListenerAdd:()=>this._createGraphicsViews(),onListenerRemove:()=>this._destroyGraphicsViews()}),u);}detach(){this._destroyGraphicsViews(),this.removeHandles(u);}moveEnd(){}viewChange(){for(const i of this.graphicsViews())i.viewChange();}isUpdating(){for(const i of this.graphicsViews())if(i.updating)return !0;return !1}_destroyGraphicsViews(){this.container.removeAllChildren(),this.removeHandles(f);for(const i of this.graphicsViews())i.destroy();this._graphicsViews=null,this._graphicsViewsFeatureCollectionMap=null;}_createGraphicsViews(){if(this._destroyGraphicsViews(),null==this.layer.sublayers)return;const i=[],e=this.view,s=()=>this.requestUpdate();for(const t$1 of this.layer.sublayers){const r=new t(this.view.featuresTilingScheme);r.fadeTransitionEnabled=!0;const a=new V$1({view:e,graphics:t$1.graphics,requestUpdateCallback:s,container:r});this.addHandles([t$1.on("graphic-update",a.graphicUpdateHandler),d$2((()=>t$1.visible),(i=>a.container.visible=i),P),d$2((()=>a.updating),(()=>this.notifyChange("updating")),P)],f),this.container.addChild(a.container),i.push(a);}this._graphicsViews=i,this._updateHighlight();}_addHighlight(i){for(const e of i)if(this._highlightIds.has(e)){const i=this._highlightIds.get(e);this._highlightIds.set(e,i+1);}else this._highlightIds.set(e,1);this._updateHighlight();}_removeHighlight(i){for(const e of i)if(this._highlightIds.has(e)){const i=this._highlightIds.get(e)-1;0===i?this._highlightIds.delete(e):this._highlightIds.set(e,i);}this._updateHighlight();}_updateHighlight(){const i=Array.from(this._highlightIds.keys()),e=t$1("highlight");for(const s of this.graphicsViews())s.setHighlight(i.map((i=>({objectId:i,highlightFlags:e}))));}};m=e$1([a("esri.views.2d.layers.MapNotesLayerView2D")],m);const w=m;

export { w as default };
