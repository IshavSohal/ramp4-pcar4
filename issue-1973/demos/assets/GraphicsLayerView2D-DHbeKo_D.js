import { bp as u$1, a1 as d$1, a0 as V$1, O, aQ as e$1, bd as e$2, be as y, bf as a } from './main-5ivotA7d.js';
import { t as t$1 } from './highlightReasons-DF1DILMu.js';
import { f, y as y$1 } from './LayerView-DFeSr6PP.js';
import { t } from './GraphicContainer-DFvlZbaJ.js';
import { V } from './GraphicsView2D-BrQ_HUMF.js';
import { e } from './HighlightCounter-Cx0IMhrD.js';
import './preload-helper-dJJaZANz.js';
import './Container-CEbThM4A.js';
import './definitions-BdwlvHBE.js';
import './enums-CwcDCDam.js';
import './Texture-syeFgIiX.js';
import './layerViewUtils-CRtvGSrJ.js';
import './AGraphicContainer-9hFfHURA.js';
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
import './FeatureCommandQueue-B1hxBKNw.js';
import './constants-BNnV1ogR.js';
import './AttributeStore-DBgvAy34.js';
import './TimeOnly-Bm6ucPlH.js';
import './timeSupport-D5umCMhm.js';
import './json-DYk0G9qS.js';
import './normalizeUtilsSync-BzkoO-mY.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.30/esri/copyright.txt for details.
*/
let m=class extends(f(y$1)){constructor(){super(...arguments),this._highlightCounter=new e;}attach(){this.graphicsView=new V({requestUpdateCallback:()=>this.requestUpdate(),view:this.view,graphics:this.layer.graphics,container:new t(this.view.featuresTilingScheme),layerId:this.layer.id}),this.container.addChild(this.graphicsView.container),this.addAttachHandles([this.layer.on("graphic-update",this.graphicsView.graphicUpdateHandler),this.watch("layer.visible",(i=>{i&&(this.graphicsView.update({state:this.view.state}),this.graphicsView.pushUpdate());}))]),this._updateHighlight();}detach(){this.container.removeAllChildren(),this.graphicsView=u$1(this.graphicsView);}async hitTest(i){return this.graphicsView?this.graphicsView.hitTest(i).map((t=>({type:"graphic",graphic:t,mapPoint:i,layer:this.layer}))):null}queryGraphics(){return Promise.resolve(this.graphicsView.graphics)}update(i){this.graphicsView.processUpdate(i);}viewChange(){this.graphicsView.viewChange();}moveEnd(){}isUpdating(){return !this.graphicsView||this.graphicsView.updating}highlight(i,h="highlight"){let a;"number"==typeof i?a=[i]:i instanceof d$1?a=[i.uid]:Array.isArray(i)&&i.length>0?a="number"==typeof i[0]?i:i.map((i=>i&&i.uid)):V$1.isCollection(i)&&i.length>0&&(a=i.map((i=>i&&i.uid)).toArray());const o=a?.filter(O);return o?.length?(this._addHighlight(o,h),e$1((()=>this._removeHighlight(o,h)))):e$1()}_addHighlight(i,t){this._highlightCounter.addReason(i,t),this._updateHighlight();}_removeHighlight(i,t){this._highlightCounter.deleteReason(i,t),this._updateHighlight();}_updateHighlight(){const i=[];for(const t of this._highlightCounter.ids()){const e=this._highlightCounter.getHighlightReason(t),r=t$1(e);i.push({objectId:t,highlightFlags:r});}this.graphicsView?.setHighlight(i);}};e$2([y()],m.prototype,"graphicsView",void 0),m=e$2([a("esri.views.2d.layers.GraphicsLayerView2D")],m);const u=m;

export { u as default };
