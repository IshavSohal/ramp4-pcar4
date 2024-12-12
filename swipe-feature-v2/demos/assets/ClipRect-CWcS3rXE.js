import { bd as e, be as y, bf as a, b_ as f$1 } from './main-DoQYi8g2.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.30/esri/copyright.txt for details.
*/
let t=class extends f$1{get version(){return this.commitVersionProperties(),(this._get("version")||0)+1}};e([y({readOnly:!0})],t.prototype,"version",null),t=e([a("esri.views.layers.support.ClipArea")],t);const p$1=t;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.30/esri/copyright.txt for details.
*/
var s;let i=s=class extends p$1{constructor(t){super(t),this.type="rect",this.left=null,this.right=null,this.top=null,this.bottom=null;}clone(){return new s({left:this.left,right:this.right,top:this.top,bottom:this.bottom})}commitVersionProperties(){this.commitProperty("left"),this.commitProperty("right"),this.commitProperty("top"),this.commitProperty("bottom");}};e([y({type:[Number,String],json:{write:!0}})],i.prototype,"left",void 0),e([y({type:[Number,String],json:{write:!0}})],i.prototype,"right",void 0),e([y({type:[Number,String],json:{write:!0}})],i.prototype,"top",void 0),e([y({type:[Number,String],json:{write:!0}})],i.prototype,"bottom",void 0),i=s=e([a("esri.views.layers.support.ClipRect")],i);const p=i;

export { p$1 as a, p };
