import { ag as b$1, J as s$1, aX as e, aY as y, aZ as c } from './main-0c4f0857.js';
import { a } from './BitmapContainer-d78b343b.js';
import { m as m$1, u } from './LayerView-8f47ba75.js';
import { v } from './ExportStrategy-cfecb0b8.js';
import { i } from './RefreshableLayerView-6779160c.js';
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
import './Bitmap-1f6b7455.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
let h=class extends(i(m$1(u))){update(t){this._strategy.update(t).catch((t=>{b$1(t)||s$1.getLogger(this).error(t);})),this.notifyChange("updating");}attach(){this._bitmapContainer=new a,this.container.addChild(this._bitmapContainer),this._strategy=new v({container:this._bitmapContainer,fetchSource:this.fetchBitmapData.bind(this),requestUpdate:this.requestUpdate.bind(this)});}detach(){this._strategy.destroy(),this._strategy=null,this.container.removeChild(this._bitmapContainer),this._bitmapContainer.removeAllChildren();}moveStart(){}viewChange(){}moveEnd(){this.requestUpdate();}fetchBitmapData(t,e,r){return this.layer.fetchImageBitmap(t,e,r)}async doRefresh(){this.requestUpdate();}isUpdating(){return this._strategy.updating||this.updateRequested}};e([y()],h.prototype,"_strategy",void 0),e([y()],h.prototype,"updating",void 0),h=e([c("esri.views.2d.layers.BaseDynamicLayerView2D")],h);const d=h;

export { d as default };
