import { aX as e, aY as y$1, fs as j, aZ as c, ft as m, aS as c$1, ag as b$1, J as s$1, b3 as d$1 } from './main-0c4f0857.js';
import { a } from './BitmapContainer-d78b343b.js';
import { m as m$1, u } from './LayerView-8f47ba75.js';
import { $ } from './GraphicsView2D-a4971c25.js';
import { h } from './HighlightGraphicContainer-cce2fa09.js';
import { v } from './ExportStrategy-cfecb0b8.js';
import { i } from './RefreshableLayerView-6779160c.js';
import { U, r } from './drapedUtils-145d0b3f.js';
import './preload-helper-a4975f27.js';
import './WGLContainer-7088b61d.js';
import './definitions-1e43ef7c.js';
import './LabelMetric-f8c09b5a.js';
import './enums-af0bf3a9.js';
import './enums-d24bcbbf.js';
import './Texture-48b39f3f.js';
import './Program-8c2b1556.js';
import './VertexElementDescriptor-ec2771ab.js';
import './ProgramTemplate-e5b5c07b.js';
import './Container-6f8fa961.js';
import './highlightReasons-082425d2.js';
import './StyleDefinition-acf40298.js';
import './config-71aad884.js';
import './earcut-e30523f3.js';
import './UpdateTracking2D-b0ba741b.js';
import './TurboLine-b20c0328.js';
import './GeometryUtils-b800f373.js';
import './Rect-09e0f861.js';
import './BindType-941d78d8.js';
import './Util-046087f1.js';
import './constants-412c3a33.js';
import './AttributeStore-34072f9a.js';
import './TimeOnly-20c69a28.js';
import './timeSupport-da4b74bd.js';
import './json-aab78c64.js';
import './FeatureCommandQueue-a50fbfc3.js';
import './normalizeUtilsSync-61e12c86.js';
import './AGraphicContainer-83f9afa5.js';
import './TechniqueInstance-7c8d874f.js';
import './TileContainer-f7a566b5.js';
import './vec3f32-cca6bca6.js';
import './Bitmap-1f6b7455.js';
import './popupUtils-327d28f5.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
const p=p=>{let a=class extends p{initialize(){this.exportImageParameters=new m({layer:this.layer});}destroy(){this.exportImageParameters.destroy(),this.exportImageParameters=null;}get floors(){return this.view?.floors??null}get exportImageVersion(){return this.exportImageParameters?.commitProperty("version"),this.commitProperty("timeExtent"),this.commitProperty("floors"),(this._get("exportImageVersion")||0)+1}canResume(){return !!super.canResume()&&!this.timeExtent?.isEmpty}};return e([y$1()],a.prototype,"exportImageParameters",void 0),e([y$1({readOnly:!0})],a.prototype,"floors",null),e([y$1({readOnly:!0})],a.prototype,"exportImageVersion",null),e([y$1()],a.prototype,"layer",void 0),e([y$1()],a.prototype,"suspended",void 0),e([y$1(j)],a.prototype,"timeExtent",void 0),a=e([c("esri.views.layers.MapImageLayerView")],a),a};

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
let y=class extends(p(i(m$1(u)))){constructor(){super(...arguments),this._highlightGraphics=new c$1,this._updateHash="";}fetchPopupFeaturesAtLocation(t,e){return this._popupHighlightHelper.fetchPopupFeaturesAtLocation(t,e)}update(t){const r=`${this.exportImageVersion}/${t.state.id}/${t.pixelRatio}/${t.stationary}`;this._updateHash!==r&&(this._updateHash=r,this.strategy.update(t).catch((t=>{b$1(t)||s$1.getLogger(this).error(t);})),t.stationary&&this._popupHighlightHelper.updateHighlightedFeatures(t.state.resolution)),this._highlightView.processUpdate(t);}attach(){const{imageMaxWidth:t,imageMaxHeight:e,version:i}=this.layer,s=i>=10.3,a$1=i>=10;this._bitmapContainer=new a,this.container.addChild(this._bitmapContainer),this._highlightView=new $({view:this.view,graphics:this._highlightGraphics,requestUpdateCallback:()=>this.requestUpdate(),container:new h(this.view.featuresTilingScheme),defaultPointSymbolEnabled:!1}),this.container.addChild(this._highlightView.container),this._popupHighlightHelper=new U({createFetchPopupFeaturesQueryGeometry:(t,e)=>r(t,e,this.view),highlightGraphics:this._highlightGraphics,highlightGraphicUpdated:(t,e)=>{this._highlightView.graphicUpdateHandler({graphic:t,property:e});},layerView:this,updatingHandles:this._updatingHandles}),this.strategy=new v({container:this._bitmapContainer,fetchSource:this.fetchImageBitmap.bind(this),requestUpdate:this.requestUpdate.bind(this),imageMaxWidth:t,imageMaxHeight:e,imageRotationSupported:s,imageNormalizationSupported:a$1,hidpi:!0}),this.addAttachHandles(d$1((()=>this.exportImageVersion),(()=>this.requestUpdate()))),this.requestUpdate();}detach(){this.strategy.destroy(),this.container.removeAllChildren(),this._bitmapContainer.removeAllChildren(),this._highlightView.destroy(),this._popupHighlightHelper.destroy();}moveStart(){}viewChange(){}moveEnd(){this.requestUpdate();}supportsSpatialReference(t){return this.layer.serviceSupportsSpatialReference(t)}async doRefresh(){this._updateHash="",this.requestUpdate();}isUpdating(){return this.strategy.updating||this.updateRequested}fetchImage(t,e,i,r){return this.layer.fetchImage(t,e,i,{timeExtent:this.timeExtent,floors:this.floors,...r})}fetchImageBitmap(t,e,i,r){return this.layer.fetchImageBitmap(t,e,i,{timeExtent:this.timeExtent,floors:this.floors,...r})}highlight(t){return this._popupHighlightHelper.highlight(t)}};e([y$1()],y.prototype,"strategy",void 0),e([y$1()],y.prototype,"updating",void 0),y=e([c("esri.views.2d.layers.MapImageLayerView2D")],y);const w=y;

export { w as default };
