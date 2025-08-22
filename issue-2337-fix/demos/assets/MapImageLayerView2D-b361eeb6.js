import { aX as e, aY as y$1, fs as j, aZ as c, ft as m, aS as c$1, ag as b$1, J as s$1, b3 as d$1 } from './main-2b0f0b77.js';
import { a } from './BitmapContainer-801af998.js';
import { m as m$1, u } from './LayerView-33682228.js';
import { $ } from './GraphicsView2D-ace2e6c3.js';
import { h } from './HighlightGraphicContainer-a3898d59.js';
import { v } from './ExportStrategy-1e38911b.js';
import { i } from './RefreshableLayerView-a2a80559.js';
import { U, r } from './drapedUtils-40eb99b9.js';
import './preload-helper-a4975f27.js';
import './WGLContainer-3f4b1c42.js';
import './definitions-1e43ef7c.js';
import './LabelMetric-c4db1b59.js';
import './enums-af0bf3a9.js';
import './enums-d24bcbbf.js';
import './Texture-4f23a877.js';
import './Program-0ab921ae.js';
import './VertexElementDescriptor-ec2771ab.js';
import './ProgramTemplate-1533e40b.js';
import './Container-bc8108a5.js';
import './highlightReasons-a5eea3d2.js';
import './StyleDefinition-acf40298.js';
import './config-71aad884.js';
import './earcut-7957339c.js';
import './UpdateTracking2D-2e48976a.js';
import './TurboLine-6e8155ef.js';
import './GeometryUtils-0d5e68e0.js';
import './Rect-09e0f861.js';
import './BindType-941d78d8.js';
import './Util-ee1147d0.js';
import './constants-412c3a33.js';
import './AttributeStore-93061172.js';
import './TimeOnly-db2b6f16.js';
import './timeSupport-5a9f0c23.js';
import './json-aab78c64.js';
import './FeatureCommandQueue-b9eb7454.js';
import './normalizeUtilsSync-bf100b6d.js';
import './AGraphicContainer-8723843b.js';
import './TechniqueInstance-b01975f5.js';
import './TileContainer-f8ff6bca.js';
import './vec3f32-cca6bca6.js';
import './Bitmap-5c455778.js';
import './popupUtils-3cc347cd.js';

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
