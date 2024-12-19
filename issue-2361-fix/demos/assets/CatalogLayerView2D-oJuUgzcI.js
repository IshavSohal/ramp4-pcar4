import { a3 as V, aW as e, aX as y, aY as c } from './main-DF5PysNr.js';
import { m as m$1, u } from './LayerView-CS-VBeNx.js';
import './preload-helper-dJJaZANz.js';
import './Container-BhesgojI.js';
import './highlightReasons-wfUFDSql.js';
import './definitions-slUvtMCM.js';
import './enums-CgzwTbC2.js';
import './Texture-CYEUJwS7.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
let s=class extends(m$1(u)){constructor(){super(...arguments),this.layerViews=new V;}get dynamicGroupLayerView(){return this.layerViews.find((e=>e.layer===this.layer?.dynamicGroupLayer))}get footprintLayerView(){return this.layerViews.find((e=>e.layer===this.layer?.footprintLayer))}update(e){}moveStart(){}viewChange(){}moveEnd(){}attach(){this.addAttachHandles([this._updatingHandles.addOnCollectionChange((()=>this.layerViews),(()=>this._updateStageChildren()),{initial:!0})]);}detach(){this.container.removeAllChildren();}isUpdating(){return this.layerViews.some((e=>e.updating))}_updateStageChildren(){this.container.removeAllChildren(),this.layerViews.forEach(((e,r)=>this.container.addChildAt(e.container,r)));}};e([y()],s.prototype,"dynamicGroupLayerView",null),e([y()],s.prototype,"footprintLayerView",null),e([y()],s.prototype,"layerViews",void 0),s=e([c("esri.views.2d.layers.CatalogLayerView2D")],s);const n=s;

export { n as default };
