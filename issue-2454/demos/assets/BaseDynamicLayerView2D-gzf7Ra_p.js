import { ax as b$1, G as n$1, bd as e, be as y, bf as a$1 } from './main-CZWQ_YsF.js';
import { a } from './BitmapContainer-0TdsNmbl.js';
import { f, y as y$1 } from './LayerView-CudGrL5v.js';
import { _ } from './ExportStrategy-BNXrbXvQ.js';
import { i } from './RefreshableLayerView-j9ZFdnWh.js';
import './preload-helper-dJJaZANz.js';
import './WGLContainer-DOmKcxv3.js';
import './definitions-BdwlvHBE.js';
import './LabelMetric-CHohjUQo.js';
import './enums-CHdyfzUK.js';
import './Texture-CYj_KoTM.js';
import './enums-CwcDCDam.js';
import './Program-B3K2aJH5.js';
import './VertexElementDescriptor-Bcj0303n.js';
import './ProgramTemplate-CN1f8d5r.js';
import './vec3f32-CmlAce5k.js';
import './Container-DXvqytsE.js';
import './highlightReasons-DQ8GS6gg.js';
import './StyleDefinition-DkEWNPyD.js';
import './config-C86_VOH4.js';
import './earcut-B1EGf_Hg.js';
import './layerViewUtils-CRtvGSrJ.js';
import './Bitmap-BgYhVf6h.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.30/esri/copyright.txt for details.
*/
let m=class extends(i(f(y$1))){update(t){this._strategy.update(t).catch((t=>{b$1(t)||n$1.getLogger(this).error(t);})),this.notifyChange("updating");}attach(){this._bitmapContainer=new a,this.container.addChild(this._bitmapContainer),this._strategy=new _({container:this._bitmapContainer,fetchSource:this.fetchBitmapData.bind(this),requestUpdate:this.requestUpdate.bind(this)});}detach(){this._strategy.destroy(),this._strategy=null,this.container.removeChild(this._bitmapContainer),this._bitmapContainer.removeAllChildren();}viewChange(){}moveEnd(){this.requestUpdate();}fetchBitmapData(t,e,r){return this.layer.fetchImageBitmap(t,e,r)}async doRefresh(){this.requestUpdate();}isUpdating(){return this._strategy.updating||this.updateRequested}};e([y()],m.prototype,"_strategy",void 0),e([y()],m.prototype,"updating",void 0),m=e([a$1("esri.views.2d.layers.BaseDynamicLayerView2D")],m);const d=m;

export { d as default };
