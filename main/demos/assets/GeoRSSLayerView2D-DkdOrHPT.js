import{cf as h,cg as m,bA as g,a1 as w,ch as f,ci as d,cj as n,bw as u,by as b}from"./main-DLFm5qwH.js";import{j as V,y as S}from"./LayerView-CM1-nBMw.js";import{t as _}from"./GraphicContainer-BV-mRpB_.js";import{F as T}from"./GraphicsView2D-BbdFr8hs.js";import"./preload-helper-ExcqyqRp.js";import"./Container-DeUvUUon.js";import"./layerViewUtils-ocddIDWV.js";import"./AGraphicContainer-DIaq4BGW.js";import"./TechniqueInstance-CgmYMmtT.js";import"./UpdateTracking2D-BoFujo6D.js";import"./BidiEngine-DNnuvc1i.js";import"./GeometryUtils-Bh7nnxCX.js";import"./Rect-CUzevAry.js";import"./LabelMetric-BWdOuWc6.js";import"./Program-B5kdq5dh.js";import"./BufferObject-C7DFhjTO.js";import"./VertexElementDescriptor-BOD-G50G.js";import"./BindType-BmZEZMMh.js";import"./Util-BCoAW7HF.js";import"./TileContainer-Cq3aEwqn.js";import"./WGLContainer-BRg3dYOJ.js";import"./VertexArrayObject-CxO9mhPL.js";import"./ProgramTemplate-BUoKWfyu.js";import"./vec3f32-nZdmKIgz.js";import"./StyleDefinition-DccCEpXd.js";import"./config-MDUrh2eL.js";import"./earcut-Lltz9D9k.js";import"./FeatureCommandQueue-U85XXyMD.js";import"./constants-F8oTIn7N.js";import"./AttributeStore-D3U-sDiN.js";import"./TimeOnly-f__QSlcn.js";import"./timeSupport-C2KvaCLq.js";import"./normalizeUtilsSync-CHumLekp.js";let y=class extends V(S){constructor(){super(...arguments),this._graphicsViewMap={},this._popupTemplates=new Map,this.graphicsViews=[]}async hitTest(e,r){if(!this.graphicsViews.length)return null;const s=this.layer;return this.graphicsViews.reverse().flatMap(t=>{const i=this._popupTemplates.get(t),p=t.hitTest(e);for(const o of p)o.layer=s,o.sourceLayer=s,o.popupTemplate=i;return p}).map(t=>({type:"graphic",graphic:t,layer:s,mapPoint:e}))}update(e){if(this.graphicsViews)for(const r of this.graphicsViews)r.processUpdate(e)}attach(){this.addAttachHandles([h(()=>this.layer?.featureCollections,e=>{this._clear();for(const{popupInfo:r,featureSet:s,layerDefinition:t}of e){const i=g.fromJSON(s),p=new w(i.features),o=t.drawingInfo,c=r?f.fromJSON(r):null,a=d(o.renderer),l=new T({requestUpdateCallback:()=>this.requestUpdate(),view:this.view,graphics:p,renderer:a,container:new _(this.view.featuresTilingScheme)});this._graphicsViewMap[i.geometryType]=l,this._popupTemplates.set(l,c),i.geometryType!=="polygon"||this.layer.polygonSymbol?i.geometryType!=="polyline"||this.layer.lineSymbol?i.geometryType!=="point"||this.layer.pointSymbol||(this.layer.pointSymbol=a.symbol):this.layer.lineSymbol=a.symbol:this.layer.polygonSymbol=a.symbol,this.graphicsViews.push(l),this.container.addChild(l.container)}},m),h(()=>this.layer?.polygonSymbol,e=>{this._graphicsViewMap.polygon.renderer=new n({symbol:e})},m),h(()=>this.layer?.lineSymbol,e=>{this._graphicsViewMap.polyline.renderer=new n({symbol:e})},m),h(()=>this.layer?.pointSymbol,e=>{this._graphicsViewMap.point.renderer=new n({symbol:e})},m)])}detach(){this._clear()}moveEnd(){}viewChange(){for(const e of this.graphicsViews)e.viewChange()}_clear(){this.container.removeAllChildren();for(const e of this.graphicsViews)e.destroy();this._graphicsViewMap={},this._popupTemplates.clear(),this.graphicsViews.length=0}};y=u([b("esri.views.2d.layers.GeoRSSLayerView2D")],y);const re=y;export{re as default};