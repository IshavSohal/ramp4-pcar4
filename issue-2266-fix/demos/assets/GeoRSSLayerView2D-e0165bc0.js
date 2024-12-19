import { b3 as d$1, b5 as P$1, b6 as d, a4 as V, b7 as P, b8 as t, b9 as m, aX as e, aZ as c } from './main-8b7fd68e.js';
import { m as m$1, u } from './LayerView-e40cb5f3.js';
import { t as t$1 } from './GraphicContainer-0f9189bb.js';
import { $ } from './GraphicsView2D-bc3826dd.js';
import './preload-helper-a4975f27.js';
import './Container-9923a77f.js';
import './highlightReasons-6b94dc4e.js';
import './definitions-1e43ef7c.js';
import './enums-af0bf3a9.js';
import './Texture-36b6a43b.js';
import './AGraphicContainer-8e5c5900.js';
import './TechniqueInstance-41417f2c.js';
import './UpdateTracking2D-2dd604b6.js';
import './TurboLine-bf047bb4.js';
import './enums-d24bcbbf.js';
import './earcut-394bf117.js';
import './GeometryUtils-c4cd248f.js';
import './Rect-09e0f861.js';
import './LabelMetric-691fbb4d.js';
import './Program-22f90517.js';
import './VertexElementDescriptor-ec2771ab.js';
import './BindType-941d78d8.js';
import './Util-b80f1fb2.js';
import './constants-412c3a33.js';
import './TileContainer-21884525.js';
import './WGLContainer-9692429b.js';
import './ProgramTemplate-ffc1c2e8.js';
import './StyleDefinition-acf40298.js';
import './config-71aad884.js';
import './FeatureCommandQueue-190c3261.js';
import './vec3f32-cca6bca6.js';
import './AttributeStore-555202b7.js';
import './TimeOnly-f19fc858.js';
import './timeSupport-99a95732.js';
import './json-aab78c64.js';
import './normalizeUtilsSync-3f48f3fd.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
let y=class extends(m$1(u)){constructor(){super(...arguments),this._graphicsViewMap={},this._popupTemplates=new Map,this.graphicsViews=[];}async hitTest(e,r){if(!this.graphicsViews.length)return null;const s=this.layer;return this.graphicsViews.reverse().flatMap((r=>{const i=this._popupTemplates.get(r),t=r.hitTest(e);for(const e of t)e.layer=s,e.sourceLayer=s,e.popupTemplate=i;return t})).map((r=>({type:"graphic",graphic:r,layer:s,mapPoint:e})))}update(e){if(this.graphicsViews)for(const r of this.graphicsViews)r.processUpdate(e);}attach(){this.addAttachHandles([d$1((()=>this.layer?.featureCollections),(e=>{this._clear();for(const{popupInfo:i,featureSet:t$2,layerDefinition:o}of e){const e=d.fromJSON(t$2),p=new V(e.features),n=o.drawingInfo,m=i?P.fromJSON(i):null,y=t(n.renderer),g=new $({requestUpdateCallback:()=>this.requestUpdate(),view:this.view,graphics:p,renderer:y,container:new t$1(this.view.featuresTilingScheme)});this._graphicsViewMap[e.geometryType]=g,this._popupTemplates.set(g,m),"polygon"!==e.geometryType||this.layer.polygonSymbol?"polyline"!==e.geometryType||this.layer.lineSymbol?"point"!==e.geometryType||this.layer.pointSymbol||(this.layer.pointSymbol=y.symbol):this.layer.lineSymbol=y.symbol:this.layer.polygonSymbol=y.symbol,this.graphicsViews.push(g),this.container.addChild(g.container);}}),P$1),d$1((()=>this.layer?.polygonSymbol),(e=>{this._graphicsViewMap.polygon.renderer=new m({symbol:e});}),P$1),d$1((()=>this.layer?.lineSymbol),(e=>{this._graphicsViewMap.polyline.renderer=new m({symbol:e});}),P$1),d$1((()=>this.layer?.pointSymbol),(e=>{this._graphicsViewMap.point.renderer=new m({symbol:e});}),P$1)]);}detach(){this._clear();}moveStart(){}moveEnd(){}viewChange(){for(const e of this.graphicsViews)e.viewChange();}_clear(){this.container.removeAllChildren();for(const e of this.graphicsViews)e.destroy();this._graphicsViewMap={},this._popupTemplates.clear(),this.graphicsViews.length=0;}};y=e([c("esri.views.2d.layers.GeoRSSLayerView2D")],y);const g=y;

export { g as default };
