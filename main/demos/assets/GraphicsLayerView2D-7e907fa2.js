import { ba as u$1, a5 as c, a4 as V, q, ay as e, aX as e$1, aY as y, aZ as c$1 } from './main-9f9fefa2.js';
import { t as t$2 } from './highlightReasons-84e7435c.js';
import { m as m$1, u as u$2 } from './LayerView-3adfeaca.js';
import { t as t$1 } from './GraphicContainer-a6a5f1be.js';
import { $ } from './GraphicsView2D-5ba370f5.js';
import { t } from './HighlightCounter-5c351c8f.js';
import './preload-helper-a4975f27.js';
import './Container-1857da40.js';
import './definitions-1e43ef7c.js';
import './enums-af0bf3a9.js';
import './Texture-f4c38644.js';
import './AGraphicContainer-a674801b.js';
import './TechniqueInstance-246cdfe1.js';
import './UpdateTracking2D-c5a8e79b.js';
import './TurboLine-53d04bf7.js';
import './enums-d24bcbbf.js';
import './earcut-b4f2d05e.js';
import './GeometryUtils-a6dbc1f6.js';
import './Rect-09e0f861.js';
import './LabelMetric-e4139a9e.js';
import './Program-50043045.js';
import './VertexElementDescriptor-ec2771ab.js';
import './BindType-941d78d8.js';
import './Util-fb0046cc.js';
import './constants-412c3a33.js';
import './TileContainer-b15dc935.js';
import './WGLContainer-74a74ff0.js';
import './ProgramTemplate-22831b89.js';
import './StyleDefinition-acf40298.js';
import './config-71aad884.js';
import './FeatureCommandQueue-2749561e.js';
import './vec3f32-cca6bca6.js';
import './AttributeStore-589c24d8.js';
import './TimeOnly-c495ccd5.js';
import './timeSupport-730de262.js';
import './json-aab78c64.js';
import './normalizeUtilsSync-e90ae1d6.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
let d=class extends(m$1(u$2)){constructor(){super(...arguments),this._highlightCounter=new t;}attach(){this.graphicsView=new $({requestUpdateCallback:()=>this.requestUpdate(),view:this.view,graphics:this.layer.graphics,container:new t$1(this.view.featuresTilingScheme),layerId:this.layer.id}),this.container.addChild(this.graphicsView.container),this.addAttachHandles(this.layer.on("graphic-update",this.graphicsView.graphicUpdateHandler)),this._updateHighlight();}detach(){this.container.removeAllChildren(),this.graphicsView=u$1(this.graphicsView);}async hitTest(i){return this.graphicsView?this.graphicsView.hitTest(i).map((t=>({type:"graphic",graphic:t,mapPoint:i,layer:this.layer}))):null}queryGraphics(){return Promise.resolve(this.graphicsView.graphics)}update(i){this.graphicsView.processUpdate(i);}moveStart(){}viewChange(){this.graphicsView.viewChange();}moveEnd(){}isUpdating(){return !this.graphicsView||this.graphicsView.updating}highlight(i,h="highlight"){let a;"number"==typeof i?a=[i]:i instanceof c?a=[i.uid]:Array.isArray(i)&&i.length>0?a="number"==typeof i[0]?i:i.map((i=>i&&i.uid)):V.isCollection(i)&&i.length>0&&(a=i.map((i=>i&&i.uid)).toArray());const o=a?.filter(q);return o?.length?(this._addHighlight(o,h),e((()=>this._removeHighlight(o,h)))):e()}_addHighlight(i,t){this._highlightCounter.addReason(i,t),this._updateHighlight();}_removeHighlight(i,t){this._highlightCounter.deleteReason(i,t),this._updateHighlight();}_updateHighlight(){const i=[];for(const t of this._highlightCounter.ids()){const e=this._highlightCounter.getHighestReason(t),r=t$2(e);i.push({objectId:t,highlightFlags:r});}this.graphicsView?.setHighlight(i);}};e$1([y()],d.prototype,"graphicsView",void 0),d=e$1([c$1("esri.views.2d.layers.GraphicsLayerView2D")],d);const u=d;

export { u as default };
