import{bw as r,by as t,aL as i,aN as h,aM as n}from"./main-DvIsqh7u.js";import{i as l}from"./AGraphicContainer-DdONDyUf.js";let s=class extends l{get hasHighlight(){return this.children.some(e=>e.hasData)}renderChildren(e){this.attributeView.update(),e.drawPhase===i.HIGHLIGHT&&this.children.some(a=>a.hasData)&&(super.renderChildren(e),e.context.setColorMask(!0,!0,!0,!0),h(e,!0,a=>{this._renderChildren(a,n.All)},0))}};s=r([t("esri.views.2d.layers.graphics.HighlightGraphicContainer")],s);const c=s;export{c as h};