import { ag as b$1, J as s$1, aX as e, aY as y, aZ as c } from './main-b44d912b.js';
import { a } from './BitmapContainer-4b7fbd05.js';
import { m as m$1, u } from './LayerView-42297830.js';
import { v } from './ExportStrategy-6e880624.js';
import { i } from './RefreshableLayerView-6ce64598.js';
import './preload-helper-a4975f27.js';
import './WGLContainer-37800683.js';
import './definitions-1e43ef7c.js';
import './LabelMetric-ff0e7d54.js';
import './enums-af0bf3a9.js';
import './enums-d24bcbbf.js';
import './Texture-33220e1e.js';
import './Program-b8b484c7.js';
import './VertexElementDescriptor-ec2771ab.js';
import './ProgramTemplate-efa15cfb.js';
import './Container-59692cd8.js';
import './highlightReasons-e3f78f88.js';
import './StyleDefinition-acf40298.js';
import './config-71aad884.js';
import './earcut-2603f00b.js';
import './Bitmap-22058975.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
let h=class extends(i(m$1(u))){update(t){this._strategy.update(t).catch((t=>{b$1(t)||s$1.getLogger(this).error(t);})),this.notifyChange("updating");}attach(){this._bitmapContainer=new a,this.container.addChild(this._bitmapContainer),this._strategy=new v({container:this._bitmapContainer,fetchSource:this.fetchBitmapData.bind(this),requestUpdate:this.requestUpdate.bind(this)});}detach(){this._strategy.destroy(),this._strategy=null,this.container.removeChild(this._bitmapContainer),this._bitmapContainer.removeAllChildren();}moveStart(){}viewChange(){}moveEnd(){this.requestUpdate();}fetchBitmapData(t,e,r){return this.layer.fetchImageBitmap(t,e,r)}async doRefresh(){this.requestUpdate();}isUpdating(){return this._strategy.updating||this.updateRequested}};e([y()],h.prototype,"_strategy",void 0),e([y()],h.prototype,"updating",void 0),h=e([c("esri.views.2d.layers.BaseDynamicLayerView2D")],h);const d=h;

export { d as default };
