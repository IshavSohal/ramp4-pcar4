import { a4 as V, bu as n$1, aX as e, aY as y, bv as t, aZ as c$1 } from './main-4ab9956b.js';
import { m as m$1, u } from './LayerView-15a6a3f3.js';
import './preload-helper-a4975f27.js';
import './Container-5f4208de.js';
import './highlightReasons-4cc4e5f3.js';
import './definitions-1e43ef7c.js';
import './enums-af0bf3a9.js';
import './Texture-a066d409.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
let n=class extends(m$1(u)){constructor(e){super(e),this.layerViews=new V;}set layerViews(e){this._set("layerViews",n$1(e,this._get("layerViews")));}get updatingProgress(){return 0===this.layerViews.length?1:this.layerViews.reduce(((e,r)=>e+r.updatingProgress),0)/this.layerViews.length}attach(){this._updateStageChildren(),this.addAttachHandles(this.layerViews.on("after-changes",(()=>this._updateStageChildren())));}detach(){this.container.removeAllChildren();}update(e){}moveStart(){}viewChange(){}moveEnd(){}_updateStageChildren(){this.container.removeAllChildren(),this.layerViews.forEach(((e,r)=>this.container.addChildAt(e.container,r)));}};e([y({cast:t})],n.prototype,"layerViews",null),e([y({readOnly:!0})],n.prototype,"updatingProgress",null),n=e([c$1("esri.views.2d.layers.KnowledgeGraphLayerView2D")],n);const c=n;

export { c as default };