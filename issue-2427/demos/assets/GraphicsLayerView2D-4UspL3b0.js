import { b9 as u$1, a4 as c, a3 as V, q, ax as e, aW as e$1, aX as y, aY as c$1 } from './main-Dj2TL05W.js';
import { t as t$2 } from './highlightReasons-DhX7-tOV.js';
import { m as m$1, u as u$2 } from './LayerView-Cb7E-9I9.js';
import { t as t$1 } from './GraphicContainer-CxEdzSQZ.js';
import { $ } from './GraphicsView2D-Bg0-0H7w.js';
import { t } from './HighlightCounter-MUMaqYsH.js';
import './preload-helper-dJJaZANz.js';
import './Container-Wb5YmKhm.js';
import './definitions-slUvtMCM.js';
import './enums-CgzwTbC2.js';
import './Texture-B8ekQn7Y.js';
import './AGraphicContainer-D5VZY1c4.js';
import './TechniqueInstance-p4JZD2ba.js';
import './UpdateTracking2D-YQTJ4uxt.js';
import './TurboLine-BZDl3bEY.js';
import './enums-DZmWLm_j.js';
import './earcut-D0H6bksA.js';
import './GeometryUtils-DDFcweUg.js';
import './Rect-9uT7dZO1.js';
import './LabelMetric-B6miF8pM.js';
import './Program-DHTahvYA.js';
import './VertexElementDescriptor-BrMxIhbJ.js';
import './BindType-KnpK3yZX.js';
import './Util-CMC52DZV.js';
import './constants-C0QDwCF4.js';
import './TileContainer-B_h1TGCe.js';
import './WGLContainer-Cj7gkzSN.js';
import './ProgramTemplate-B4ggM4sw.js';
import './StyleDefinition-CR2vYxyv.js';
import './config-Di5U9yzL.js';
import './FeatureCommandQueue-BI3Yuh4Y.js';
import './vec3f32-CLbqcArJ.js';
import './AttributeStore-D5TTFO6A.js';
import './TimeOnly-CZB9spBY.js';
import './timeSupport-5S-egL1v.js';
import './json-Beimr7gP.js';
import './normalizeUtilsSync-eUVSLEEY.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
let d=class extends(m$1(u$2)){constructor(){super(...arguments),this._highlightCounter=new t;}attach(){this.graphicsView=new $({requestUpdateCallback:()=>this.requestUpdate(),view:this.view,graphics:this.layer.graphics,container:new t$1(this.view.featuresTilingScheme),layerId:this.layer.id}),this.container.addChild(this.graphicsView.container),this.addAttachHandles(this.layer.on("graphic-update",this.graphicsView.graphicUpdateHandler)),this._updateHighlight();}detach(){this.container.removeAllChildren(),this.graphicsView=u$1(this.graphicsView);}async hitTest(i){return this.graphicsView?this.graphicsView.hitTest(i).map((t=>({type:"graphic",graphic:t,mapPoint:i,layer:this.layer}))):null}queryGraphics(){return Promise.resolve(this.graphicsView.graphics)}update(i){this.graphicsView.processUpdate(i);}moveStart(){}viewChange(){this.graphicsView.viewChange();}moveEnd(){}isUpdating(){return !this.graphicsView||this.graphicsView.updating}highlight(i,h="highlight"){let a;"number"==typeof i?a=[i]:i instanceof c?a=[i.uid]:Array.isArray(i)&&i.length>0?a="number"==typeof i[0]?i:i.map((i=>i&&i.uid)):V.isCollection(i)&&i.length>0&&(a=i.map((i=>i&&i.uid)).toArray());const o=a?.filter(q);return o?.length?(this._addHighlight(o,h),e((()=>this._removeHighlight(o,h)))):e()}_addHighlight(i,t){this._highlightCounter.addReason(i,t),this._updateHighlight();}_removeHighlight(i,t){this._highlightCounter.deleteReason(i,t),this._updateHighlight();}_updateHighlight(){const i=[];for(const t of this._highlightCounter.ids()){const e=this._highlightCounter.getHighestReason(t),r=t$2(e);i.push({objectId:t,highlightFlags:r});}this.graphicsView?.setHighlight(i);}};e$1([y()],d.prototype,"graphicsView",void 0),d=e$1([c$1("esri.views.2d.layers.GraphicsLayerView2D")],d);const u=d;

export { u as default };
