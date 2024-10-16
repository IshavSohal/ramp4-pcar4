import { ag as b$1, J as s$1, aX as e, aY as y, aZ as c } from './main-2a2363bb.js';
import { a } from './BitmapContainer-5fbd8ecb.js';
import { m as m$1, u } from './LayerView-143aba5a.js';
import { v } from './ExportStrategy-cc8de9aa.js';
import { i } from './RefreshableLayerView-42865f0c.js';
import './preload-helper-a4975f27.js';
import './WGLContainer-7ec72a3e.js';
import './definitions-1e43ef7c.js';
import './LabelMetric-c01bd57e.js';
import './enums-af0bf3a9.js';
import './enums-d24bcbbf.js';
import './Texture-6e2c83a1.js';
import './Program-984e2fa9.js';
import './VertexElementDescriptor-ec2771ab.js';
import './ProgramTemplate-c9eb2280.js';
import './Container-8f2f49a3.js';
import './highlightReasons-2cb4935a.js';
import './StyleDefinition-acf40298.js';
import './config-71aad884.js';
import './earcut-713ed0c0.js';
import './Bitmap-8e8d9335.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
let h=class extends(i(m$1(u))){update(t){this._strategy.update(t).catch((t=>{b$1(t)||s$1.getLogger(this).error(t);})),this.notifyChange("updating");}attach(){this._bitmapContainer=new a,this.container.addChild(this._bitmapContainer),this._strategy=new v({container:this._bitmapContainer,fetchSource:this.fetchBitmapData.bind(this),requestUpdate:this.requestUpdate.bind(this)});}detach(){this._strategy.destroy(),this._strategy=null,this.container.removeChild(this._bitmapContainer),this._bitmapContainer.removeAllChildren();}moveStart(){}viewChange(){}moveEnd(){this.requestUpdate();}fetchBitmapData(t,e,r){return this.layer.fetchImageBitmap(t,e,r)}async doRefresh(){this.requestUpdate();}isUpdating(){return this._strategy.updating||this.updateRequested}};e([y()],h.prototype,"_strategy",void 0),e([y()],h.prototype,"updating",void 0),h=e([c("esri.views.2d.layers.BaseDynamicLayerView2D")],h);const d=h;

export { d as default };
