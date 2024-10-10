import { b3 as d$1, b5 as P$1, b6 as d, a4 as V, b7 as P, b8 as t, b9 as m, aX as e, aZ as c } from './main-c2ed9af5.js';
import { m as m$1, u } from './LayerView-c77c5d46.js';
import { t as t$1 } from './GraphicContainer-edfd0822.js';
import { $ } from './GraphicsView2D-86a7ff35.js';
import './preload-helper-a4975f27.js';
import './Container-5cb376e3.js';
import './highlightReasons-50944c52.js';
import './definitions-1e43ef7c.js';
import './enums-af0bf3a9.js';
import './Texture-889a20ea.js';
import './AGraphicContainer-5472bb1b.js';
import './TechniqueInstance-b826de6e.js';
import './UpdateTracking2D-4a3176f9.js';
import './TurboLine-c58f3b93.js';
import './enums-d24bcbbf.js';
import './earcut-53478943.js';
import './GeometryUtils-d9fc0b1f.js';
import './Rect-09e0f861.js';
import './LabelMetric-0a9167a7.js';
import './Program-d8ec9c05.js';
import './VertexElementDescriptor-ec2771ab.js';
import './BindType-941d78d8.js';
import './Util-517706ee.js';
import './constants-412c3a33.js';
import './TileContainer-681fb45f.js';
import './WGLContainer-940132e7.js';
import './ProgramTemplate-e0959037.js';
import './StyleDefinition-acf40298.js';
import './config-71aad884.js';
import './FeatureCommandQueue-476e143d.js';
import './vec3f32-cca6bca6.js';
import './AttributeStore-90069e41.js';
import './TimeOnly-19f9b28f.js';
import './timeSupport-711367e1.js';
import './json-aab78c64.js';
import './normalizeUtilsSync-7dbd6c47.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
let y=class extends(m$1(u)){constructor(){super(...arguments),this._graphicsViewMap={},this._popupTemplates=new Map,this.graphicsViews=[];}async hitTest(e,r){if(!this.graphicsViews.length)return null;const s=this.layer;return this.graphicsViews.reverse().flatMap((r=>{const i=this._popupTemplates.get(r),t=r.hitTest(e);for(const e of t)e.layer=s,e.sourceLayer=s,e.popupTemplate=i;return t})).map((r=>({type:"graphic",graphic:r,layer:s,mapPoint:e})))}update(e){if(this.graphicsViews)for(const r of this.graphicsViews)r.processUpdate(e);}attach(){this.addAttachHandles([d$1((()=>this.layer?.featureCollections),(e=>{this._clear();for(const{popupInfo:i,featureSet:t$2,layerDefinition:o}of e){const e=d.fromJSON(t$2),p=new V(e.features),n=o.drawingInfo,m=i?P.fromJSON(i):null,y=t(n.renderer),g=new $({requestUpdateCallback:()=>this.requestUpdate(),view:this.view,graphics:p,renderer:y,container:new t$1(this.view.featuresTilingScheme)});this._graphicsViewMap[e.geometryType]=g,this._popupTemplates.set(g,m),"polygon"!==e.geometryType||this.layer.polygonSymbol?"polyline"!==e.geometryType||this.layer.lineSymbol?"point"!==e.geometryType||this.layer.pointSymbol||(this.layer.pointSymbol=y.symbol):this.layer.lineSymbol=y.symbol:this.layer.polygonSymbol=y.symbol,this.graphicsViews.push(g),this.container.addChild(g.container);}}),P$1),d$1((()=>this.layer?.polygonSymbol),(e=>{this._graphicsViewMap.polygon.renderer=new m({symbol:e});}),P$1),d$1((()=>this.layer?.lineSymbol),(e=>{this._graphicsViewMap.polyline.renderer=new m({symbol:e});}),P$1),d$1((()=>this.layer?.pointSymbol),(e=>{this._graphicsViewMap.point.renderer=new m({symbol:e});}),P$1)]);}detach(){this._clear();}moveStart(){}moveEnd(){}viewChange(){for(const e of this.graphicsViews)e.viewChange();}_clear(){this.container.removeAllChildren();for(const e of this.graphicsViews)e.destroy();this._graphicsViewMap={},this._popupTemplates.clear(),this.graphicsViews.length=0;}};y=e([c("esri.views.2d.layers.GeoRSSLayerView2D")],y);const g=y;

export { g as default };
