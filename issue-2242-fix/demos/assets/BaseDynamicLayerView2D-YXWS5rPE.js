import { af as b$1, H as s$1, aW as e, aX as y, aY as c } from './main-4YG_Z3fk.js';
import { a } from './BitmapContainer-Cof1AMY0.js';
import { m as m$1, u } from './LayerView-BAw1Pzs9.js';
import { v } from './ExportStrategy-HQ3lEIvc.js';
import { i } from './RefreshableLayerView-Ncg4ZUQ7.js';
import './preload-helper-dJJaZANz.js';
import './WGLContainer-02Ii9pDh.js';
import './definitions-slUvtMCM.js';
import './LabelMetric-s_0sakBj.js';
import './enums-CgzwTbC2.js';
import './enums-DZmWLm_j.js';
import './Texture-Bh3Nf_Ee.js';
import './Program-BhxCv7P5.js';
import './VertexElementDescriptor-BrMxIhbJ.js';
import './ProgramTemplate-C0GwegYt.js';
import './Container-CBd4thNq.js';
import './highlightReasons-giL9puo9.js';
import './StyleDefinition-CR2vYxyv.js';
import './config-Di5U9yzL.js';
import './earcut-DGTRyIfg.js';
import './Bitmap-DPuGIDJ7.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
let h=class extends(i(m$1(u))){update(t){this._strategy.update(t).catch((t=>{b$1(t)||s$1.getLogger(this).error(t);})),this.notifyChange("updating");}attach(){this._bitmapContainer=new a,this.container.addChild(this._bitmapContainer),this._strategy=new v({container:this._bitmapContainer,fetchSource:this.fetchBitmapData.bind(this),requestUpdate:this.requestUpdate.bind(this)});}detach(){this._strategy.destroy(),this._strategy=null,this.container.removeChild(this._bitmapContainer),this._bitmapContainer.removeAllChildren();}moveStart(){}viewChange(){}moveEnd(){this.requestUpdate();}fetchBitmapData(t,e,r){return this.layer.fetchImageBitmap(t,e,r)}async doRefresh(){this.requestUpdate();}isUpdating(){return this._strategy.updating||this.updateRequested}};e([y()],h.prototype,"_strategy",void 0),e([y()],h.prototype,"updating",void 0),h=e([c("esri.views.2d.layers.BaseDynamicLayerView2D")],h);const d=h;

export { d as default };
