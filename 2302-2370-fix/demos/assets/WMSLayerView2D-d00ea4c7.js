import { aX as e, aY as y$1, fs as j, aZ as c, fD as a, ba as u, s, K as s$1, ag as b$1, J as s$2, b3 as d$1, aI as M } from './main-aee4b1c0.js';
import { a as a$1 } from './BitmapContainer-92c05add.js';
import { m as m$1, u as u$1 } from './LayerView-579cd232.js';
import { v } from './ExportStrategy-d2005a49.js';
import { i } from './RefreshableLayerView-298186ec.js';
import './preload-helper-a4975f27.js';
import './WGLContainer-3dc653ea.js';
import './definitions-1e43ef7c.js';
import './LabelMetric-121d7d0c.js';
import './enums-af0bf3a9.js';
import './enums-d24bcbbf.js';
import './Texture-8d644557.js';
import './Program-df458c0e.js';
import './VertexElementDescriptor-ec2771ab.js';
import './ProgramTemplate-e4a8b1fc.js';
import './Container-dd850945.js';
import './highlightReasons-85c51896.js';
import './StyleDefinition-acf40298.js';
import './config-71aad884.js';
import './earcut-de8fd481.js';
import './Bitmap-348080c1.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
const m=m=>{let n=class extends m{initialize(){this.exportImageParameters=new a({layer:this.layer});}destroy(){this.exportImageParameters=u(this.exportImageParameters);}get exportImageVersion(){return this.exportImageParameters?.commitProperty("version"),this.commitProperty("timeExtent"),(this._get("exportImageVersion")||0)+1}async fetchPopupFeaturesAtLocation(e,t){const{layer:s$2}=this;if(!e)throw new s("wmslayerview:fetchPopupFeatures","Nothing to fetch without area",{layer:s$2});const{popupEnabled:a}=s$2;if(!a)throw new s("wmslayerview:fetchPopupFeatures","popupEnabled should be true",{popupEnabled:a});const p=this.createFetchPopupFeaturesQuery(e);if(!p)return [];const{extent:i,width:m,height:n,x:c,y:u}=p;if(!(i&&m&&n))throw new s("wmslayerview:fetchPopupFeatures","WMSLayer does not support fetching features.",{extent:i,width:m,height:n});const h=await s$2.fetchFeatureInfo(i,m,n,c,u);return s$1(t),h}};return e([y$1()],n.prototype,"exportImageParameters",void 0),e([y$1({readOnly:!0})],n.prototype,"exportImageVersion",null),e([y$1()],n.prototype,"layer",void 0),e([y$1(j)],n.prototype,"timeExtent",void 0),n=e([c("esri.layers.mixins.WMSLayerView")],n),n};

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
let g=class extends(m(i(m$1(u$1)))){constructor(){super(...arguments),this.bitmapContainer=new a$1;}supportsSpatialReference(t){return this.layer.serviceSupportsSpatialReference(t)}update(t){this.strategy.update(t).catch((t=>{b$1(t)||s$2.getLogger(this).error(t);}));}attach(){const{layer:t}=this,{imageMaxHeight:e,imageMaxWidth:r}=t;this.bitmapContainer=new a$1,this.container.addChild(this.bitmapContainer),this.strategy=new v({container:this.bitmapContainer,fetchSource:this.fetchImage.bind(this),requestUpdate:this.requestUpdate.bind(this),imageMaxHeight:e,imageMaxWidth:r,imageRotationSupported:!1,imageNormalizationSupported:!1,hidpi:!1}),this.addAttachHandles(d$1((()=>this.exportImageVersion),(()=>this.requestUpdate())));}detach(){this.strategy=u(this.strategy),this.container.removeAllChildren();}moveStart(){}viewChange(){}moveEnd(){this.requestUpdate();}createFetchPopupFeaturesQuery(t){const{view:e,bitmapContainer:r}=this,{x:i,y:s}=t,{spatialReference:a}=e;let o,p=0,m=0;if(r.children.some((t=>{const{width:e,height:r,resolution:h,x:c,y:d}=t,u=c+h*e,g=d-h*r;return i>=c&&i<=u&&s<=d&&s>=g&&(o=new M({xmin:c,ymin:g,xmax:u,ymax:d,spatialReference:a}),p=e,m=r,!0)})),!o)return null;const h=o.width/p,c=Math.round((i-o.xmin)/h),d=Math.round((o.ymax-s)/h);return {extent:o,width:p,height:m,x:c,y:d}}async doRefresh(){this.requestUpdate();}isUpdating(){return this.strategy.updating||this.updateRequested}fetchImage(t,e,r,i){return this.layer.fetchImageBitmap(t,e,r,{timeExtent:this.timeExtent,...i})}};e([y$1()],g.prototype,"strategy",void 0),e([y$1()],g.prototype,"updating",void 0),g=e([c("esri.views.2d.layers.WMSLayerView2D")],g);const y=g;

export { y as default };