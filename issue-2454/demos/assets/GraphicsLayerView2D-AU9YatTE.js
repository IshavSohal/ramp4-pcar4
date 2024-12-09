import { bp as u$1, a1 as d$1, a0 as V$1, O, aQ as e$1, bd as e$2, be as y, bf as a } from './main-CZWQ_YsF.js';
import { t as t$1 } from './highlightReasons-DQ8GS6gg.js';
import { f, y as y$1 } from './LayerView-CudGrL5v.js';
import { t } from './GraphicContainer-Bo0b7_u6.js';
import { V } from './GraphicsView2D-BjkFe-Ue.js';
import { e } from './HighlightCounter-BJ4uJt4r.js';
import './preload-helper-dJJaZANz.js';
import './Container-DXvqytsE.js';
import './definitions-BdwlvHBE.js';
import './enums-CwcDCDam.js';
import './Texture-CYj_KoTM.js';
import './layerViewUtils-CRtvGSrJ.js';
import './AGraphicContainer-CXTD55iR.js';
import './TechniqueInstance-k_6lzq5c.js';
import './UpdateTracking2D-yZuQY9Ej.js';
import './BidiEngine-Z2aMxkhF.js';
import './GeometryUtils-DgqH6i7F.js';
import './enums-CHdyfzUK.js';
import './Rect-zdvLIBQm.js';
import './LabelMetric-CHohjUQo.js';
import './Program-B3K2aJH5.js';
import './VertexElementDescriptor-Bcj0303n.js';
import './BindType-DQnxDFt3.js';
import './Util-B1M_knDm.js';
import './TileContainer-Cv6-m6LL.js';
import './WGLContainer-DOmKcxv3.js';
import './ProgramTemplate-CN1f8d5r.js';
import './vec3f32-CmlAce5k.js';
import './StyleDefinition-DkEWNPyD.js';
import './config-C86_VOH4.js';
import './earcut-B1EGf_Hg.js';
import './FeatureCommandQueue-sBAzkW7s.js';
import './constants-BNnV1ogR.js';
import './AttributeStore-gYP3Ty1U.js';
import './TimeOnly-DtkYP-DD.js';
import './timeSupport-Dw3PhFgn.js';
import './json-DYk0G9qS.js';
import './normalizeUtilsSync-MxEnGSDk.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.30/esri/copyright.txt for details.
*/
let m=class extends(f(y$1)){constructor(){super(...arguments),this._highlightCounter=new e;}attach(){this.graphicsView=new V({requestUpdateCallback:()=>this.requestUpdate(),view:this.view,graphics:this.layer.graphics,container:new t(this.view.featuresTilingScheme),layerId:this.layer.id}),this.container.addChild(this.graphicsView.container),this.addAttachHandles([this.layer.on("graphic-update",this.graphicsView.graphicUpdateHandler),this.watch("layer.visible",(i=>{i&&(this.graphicsView.update({state:this.view.state}),this.graphicsView.pushUpdate());}))]),this._updateHighlight();}detach(){this.container.removeAllChildren(),this.graphicsView=u$1(this.graphicsView);}async hitTest(i){return this.graphicsView?this.graphicsView.hitTest(i).map((t=>({type:"graphic",graphic:t,mapPoint:i,layer:this.layer}))):null}queryGraphics(){return Promise.resolve(this.graphicsView.graphics)}update(i){this.graphicsView.processUpdate(i);}viewChange(){this.graphicsView.viewChange();}moveEnd(){}isUpdating(){return !this.graphicsView||this.graphicsView.updating}highlight(i,h="highlight"){let a;"number"==typeof i?a=[i]:i instanceof d$1?a=[i.uid]:Array.isArray(i)&&i.length>0?a="number"==typeof i[0]?i:i.map((i=>i&&i.uid)):V$1.isCollection(i)&&i.length>0&&(a=i.map((i=>i&&i.uid)).toArray());const o=a?.filter(O);return o?.length?(this._addHighlight(o,h),e$1((()=>this._removeHighlight(o,h)))):e$1()}_addHighlight(i,t){this._highlightCounter.addReason(i,t),this._updateHighlight();}_removeHighlight(i,t){this._highlightCounter.deleteReason(i,t),this._updateHighlight();}_updateHighlight(){const i=[];for(const t of this._highlightCounter.ids()){const e=this._highlightCounter.getHighlightReason(t),r=t$1(e);i.push({objectId:t,highlightFlags:r});}this.graphicsView?.setHighlight(i);}};e$2([y()],m.prototype,"graphicsView",void 0),m=e$2([a("esri.views.2d.layers.GraphicsLayerView2D")],m);const u=m;

export { u as default };
