import { t, bd as U, G as x$1, U as U$2, aS as c$1, a4 as V, b3 as d$1, fo as e$1, ba as u, aI as M, bc as B, bl as f$1, fp as r, fq as A, b$ as f$2, fr as v, aX as e$2, aY as y, aZ as c$2 } from './main-02c4cfca.js';
import { b as b$1, g as g$1, d } from './kmlUtils-c67942bf.js';
import { g, f, b } from './Bitmap-db224f1c.js';
import { a } from './BitmapContainer-76af40a2.js';
import { m as m$2, u as u$1 } from './LayerView-8e5af475.js';
import { t as t$1 } from './GraphicContainer-687d0e87.js';
import { $ } from './GraphicsView2D-0ebfd638.js';
import { C as C$1, e as ee } from './rasterProjectionHelper-3c7fd398.js';
import { a as h$1 } from './WGLContainer-638ab274.js';
import { w as w$1, o } from './RenderingContext-98b54f72.js';
import { D as D$1, G, U as U$1, X } from './enums-af0bf3a9.js';
import { x } from './Program-fc57b041.js';
import { c } from './rasterUtils-ce84f12a.js';
import { e, m as m$1 } from './Texture-f4d740e6.js';
import './preload-helper-a4975f27.js';
import './Container-e4a2f033.js';
import './highlightReasons-8d55e285.js';
import './definitions-1e43ef7c.js';
import './AGraphicContainer-ddd95c22.js';
import './TechniqueInstance-1cd94b30.js';
import './UpdateTracking2D-22f9329d.js';
import './TurboLine-13fc6b86.js';
import './enums-d24bcbbf.js';
import './earcut-dac9467c.js';
import './GeometryUtils-5028e5b5.js';
import './Rect-09e0f861.js';
import './LabelMetric-56f6c301.js';
import './VertexElementDescriptor-ec2771ab.js';
import './BindType-941d78d8.js';
import './Util-dfa71ca0.js';
import './constants-412c3a33.js';
import './TileContainer-089ed93f.js';
import './FeatureCommandQueue-611e2fa5.js';
import './ProgramTemplate-8c14e983.js';
import './vec3f32-cca6bca6.js';
import './AttributeStore-200b5b8b.js';
import './TimeOnly-334030fb.js';
import './timeSupport-f2312e23.js';
import './json-aab78c64.js';
import './normalizeUtilsSync-08465fc2.js';
import './StyleDefinition-acf40298.js';
import './config-71aad884.js';
import './programUtils-651fc83c.js';
import './NestedMap-7fc3349d.js';
import './OrderIndependentTransparency-67a8dcc4.js';
import './basicInterfaces-f85cdac5.js';
import './testSVGPremultipliedAlpha-f0e322e4.js';
import './floatRGBA-d2c14299.js';
import './doublePrecisionUtils-434e21f5.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
class w{constructor(t$1){if(this._ownsRctx=!1,t$1)this._ownsRctx=!1,this._rctx=t$1;else {if(w._instance)return w._instanceRefCount++,w._instance;w._instanceRefCount=1,w._instance=this,this._ownsRctx=!0;const t$1=document.createElement("canvas"),e=t(t$1);e.getExtension("OES_texture_float"),this._rctx=new w$1(e,{});}const e={applyProjection:!0,bilinear:!1,bicubic:!1},r=o("raster/reproject","raster/reproject",new Map([["a_position",0]]),e);this._program=this._rctx.programCache.acquire(r.shaders.vertexShader,r.shaders.fragmentShader,r.attributes),this._rctx.useProgram(this._program),this._program.setUniform1f("u_opacity",1),this._program.setUniform1i("u_image",0),this._program.setUniform1i("u_flipY",0),this._program.setUniform1i("u_transformGrid",1),this._quad=new h$1(this._rctx,[0,0,1,0,0,1,1,1]);}reprojectTexture(t,s,n=!1){const o=U(t.extent,s),m=new x$1({x:(t.extent.xmax-t.extent.xmin)/t.texture.descriptor.width,y:(t.extent.ymax-t.extent.ymin)/t.texture.descriptor.height,spatialReference:t.extent.spatialReference}),{x:c$1,y:g}=C$1(m,s,t.extent);let f=(c$1+g)/2;const w=Math.round((o.xmax-o.xmin)/f),b=Math.round((o.ymax-o.ymin)/f);f=(o.width/w+o.height/b)/2;const j=new x$1({x:f,y:f,spatialReference:o.spatialReference}),D=ee({projectedExtent:o,srcBufferExtent:t.extent,pixelSize:j,hasWrapAround:!0,spacing:[16,16]}),R=c(this._rctx,D),T=new e(w,b);T.wrapMode=D$1.CLAMP_TO_EDGE;const C=new x(this._rctx,T);this._rctx.bindFramebuffer(C),this._rctx.setViewport(0,0,w,b),this._rctx.useProgram(this._program),this._rctx.bindTexture(t.texture,0),this._rctx.bindTexture(R,1),this._quad.bind();const{width:y=0,height:E=0}=t.texture.descriptor;if(this._program.setUniform2f("u_srcImageSize",y,E),this._program.setUniform2fv("u_transformSpacing",D.spacing),this._program.setUniform2fv("u_transformGridSize",D.size),this._program.setUniform2f("u_targetImageSize",w,b),this._quad.draw(),this._quad.unbind(),this._rctx.useProgram(null),this._rctx.bindFramebuffer(null),R.dispose(),n){const{width:t,height:e}=C,r=new ImageData(t??0,e??0);C.readPixels(0,0,t??0,e??0,G.RGBA,U$1.UNSIGNED_BYTE,r.data);const i=C.detachColorTexture(X.COLOR_ATTACHMENT0);return C.dispose(),{texture:i,extent:o,imageData:r}}const U$2=C.detachColorTexture(X.COLOR_ATTACHMENT0);return C.dispose(),{texture:U$2,extent:o}}reprojectBitmapData(t,e$1){const r=g(t.bitmapData)?f(t.bitmapData):t.bitmapData,i=new e;i.wrapMode=D$1.CLAMP_TO_EDGE,i.width=t.bitmapData.width,i.height=t.bitmapData.height;const a=new m$1(this._rctx,i,r),o=this.reprojectTexture({texture:a,extent:t.extent},e$1,!0);o.texture.dispose();const m=document.createElement("canvas"),c=o.imageData;m.width=c.width,m.height=c.height;return m.getContext("2d").putImageData(c,0,0),{bitmapData:m,extent:o.extent}}async loadAndReprojectBitmapData(e,r,i){const a=(await U$2(e,{responseType:"image"})).data,s=document.createElement("canvas");s.width=a.width,s.height=a.height;const n=s.getContext("2d");n.drawImage(a,0,0);const o=n.getImageData(0,0,s.width,s.height);if(r.spatialReference.equals(i))return {bitmapData:o,extent:r};const m=this.reprojectBitmapData({bitmapData:o,extent:r},i);return {bitmapData:m.bitmapData,extent:m.extent}}destroy(){this._ownsRctx?(w._instanceRefCount--,0===w._instanceRefCount&&(this._quad.dispose(),this._program.dispose(),this._rctx.dispose(),w._instance=null)):(this._quad.dispose(),this._program.dispose());}}w._instanceRefCount=0;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
class C{constructor(){this.allSublayers=new Map,this.allPoints=[],this.allPolylines=[],this.allPolygons=[],this.allMapImages=[];}}let j=class extends(m$2(u$1)){constructor(){super(...arguments),this._bitmapIndex=new Map,this._mapImageContainer=new a,this._kmlVisualData=new C,this._fetchController=null,this.allVisiblePoints=new c$1,this.allVisiblePolylines=new c$1,this.allVisiblePolygons=new c$1,this.allVisibleMapImages=new V;}async hitTest(e,i){const t=this.layer;return [this._pointsView?.hitTest(e),this._polylinesView?.hitTest(e),this._polygonsView?.hitTest(e)].flat().filter(Boolean).map((i=>(i.layer=t,i.sourceLayer=t,{type:"graphic",graphic:i,layer:t,mapPoint:e})))}update(e){this._polygonsView&&this._polygonsView.processUpdate(e),this._polylinesView&&this._polylinesView.processUpdate(e),this._pointsView&&this._pointsView.processUpdate(e);}attach(){this._fetchController=new AbortController,this.container.addChild(this._mapImageContainer),this._polygonsView=new $({view:this.view,graphics:this.allVisiblePolygons,requestUpdateCallback:()=>this.requestUpdate(),container:new t$1(this.view.featuresTilingScheme)}),this.container.addChild(this._polygonsView.container),this._polylinesView=new $({view:this.view,graphics:this.allVisiblePolylines,requestUpdateCallback:()=>this.requestUpdate(),container:new t$1(this.view.featuresTilingScheme)}),this.container.addChild(this._polylinesView.container),this._pointsView=new $({view:this.view,graphics:this.allVisiblePoints,requestUpdateCallback:()=>this.requestUpdate(),container:new t$1(this.view.featuresTilingScheme)}),this.container.addChild(this._pointsView.container),this.addAttachHandles([this.allVisibleMapImages.on("change",(e=>{e.added.forEach((e=>this._addMapImage(e))),e.removed.forEach((e=>this._removeMapImage(e)));})),d$1((()=>this.layer.visibleSublayers),(e=>{for(const[i,t]of this._kmlVisualData.allSublayers)t.visibility=0;for(const i of e){const e=this._kmlVisualData.allSublayers.get(i.id);e&&(e.visibility=1);}this._refreshCollections();}))]),this._updatingHandles.addPromise(this._fetchService(this._fetchController.signal)),this._imageReprojector=new w;}detach(){this._fetchController=e$1(this._fetchController),this._mapImageContainer.removeAllChildren(),this.container.removeAllChildren(),this._bitmapIndex.clear(),this._polygonsView=u(this._polygonsView),this._polylinesView=u(this._polylinesView),this._pointsView=u(this._pointsView),this._imageReprojector=u(this._imageReprojector);}moveStart(){}viewChange(){this._polygonsView.viewChange(),this._polylinesView.viewChange(),this._pointsView.viewChange();}moveEnd(){}isUpdating(){return this._pointsView.updating||this._polygonsView.updating||this._polylinesView.updating}_addMapImage(e){(this.view.spatialReference?.isWGS84||this.view.spatialReference?.isWebMercator)&&this._imageReprojector.loadAndReprojectBitmapData(e.href,M.fromJSON(e.extent),this.view.spatialReference).then((i=>{const t=new b(i.bitmapData);t.x=i.extent.xmin,t.y=i.extent.ymax,t.resolution=i.extent.width/i.bitmapData.width,t.rotation=e.rotation,this._mapImageContainer.addChild(t),this._bitmapIndex.set(e,t);}));}async _getViewDependentUrl(e,t){const{viewFormat:s,viewBoundScale:a,httpQuery:o}=e;if(null!=s){if(null==t)throw new Error("Loading this network link requires a view state.");let n;if(await B(),null!=a&&1!==a){const e=new M(t.extent);e.expand(a),n=e;}else n=t.extent;n=U(n,f$1.WGS84);const h=U(n,f$1.WebMercator),y=n.xmin,g=n.xmax,w=n.ymin,_=n.ymax,b=t.size[0]*t.pixelRatio,V=t.size[1]*t.pixelRatio,f=Math.max(h.width,h.height),v$1={"[bboxWest]":y.toString(),"[bboxEast]":g.toString(),"[bboxSouth]":w.toString(),"[bboxNorth]":_.toString(),"[lookatLon]":n.center.x.toString(),"[lookatLat]":n.center.y.toString(),"[lookatRange]":f.toString(),"[lookatTilt]":"0","[lookatHeading]":t.rotation.toString(),"[lookatTerrainLon]":n.center.x.toString(),"[lookatTerrainLat]":n.center.y.toString(),"[lookatTerrainAlt]":"0","[cameraLon]":n.center.x.toString(),"[cameraLat]":n.center.y.toString(),"[cameraAlt]":f.toString(),"[horizFov]":"60","[vertFov]":"60","[horizPixels]":b.toString(),"[vertPixels]":V.toString(),"[terrainEnabled]":"0","[clientVersion]":r,"[kmlVersion]":"2.2","[clientName]":"ArcGIS API for JavaScript","[language]":"en-US"},S=e=>{for(const i in e){let t;for(t in v$1)e[i]=e[i].replace(t,v$1[t]);}},I=A(s);S(I);let x={};null!=o&&(x=A(o),S(x));const C=f$2(e.href);C.query={...C.query,...I,...x};return `${C.path}?${v(I)}`}return e.href}async _fetchService(e){const i=new C;await this._loadVisualData(this.layer.url,i,e),this._kmlVisualData=i,this._refreshCollections();}_refreshCollections(){this.allVisiblePoints.removeAll(),this.allVisiblePolylines.removeAll(),this.allVisiblePolygons.removeAll(),this.allVisibleMapImages.removeAll(),this.allVisiblePoints.addMany(this._kmlVisualData.allPoints.filter((e=>this._isSublayerVisible(e.sublayerId))).map((({item:e})=>e))),this.allVisiblePolylines.addMany(this._kmlVisualData.allPolylines.filter((e=>this._isSublayerVisible(e.sublayerId))).map((({item:e})=>e))),this.allVisiblePolygons.addMany(this._kmlVisualData.allPolygons.filter((e=>this._isSublayerVisible(e.sublayerId))).map((({item:e})=>e))),this.allVisibleMapImages.addMany(this._kmlVisualData.allMapImages.filter((e=>this._isSublayerVisible(e.sublayerId))).map((({item:e})=>e)));}_isSublayerVisible(e){const i=this._kmlVisualData.allSublayers.get(e);return !!i?.visibility&&(-1===i.parentFolderId||this._isSublayerVisible(i.parentFolderId))}_loadVisualData(e,i,t){return this._fetchParsedKML(e,t).then((async e=>{for(const s of e.sublayers){i.allSublayers.set(s.id,s);const e=s.points?await b$1(s.points):[],a=s.polylines?await b$1(s.polylines):[],o=s.polygons?await b$1(s.polygons):[],l=s.mapImages||[];if(i.allPoints.push(...e.map((e=>({item:e,sublayerId:s.id})))),i.allPolylines.push(...a.map((e=>({item:e,sublayerId:s.id})))),i.allPolygons.push(...o.map((e=>({item:e,sublayerId:s.id})))),i.allMapImages.push(...l.map((e=>({item:e,sublayerId:s.id})))),s.networkLink){const e=await this._getViewDependentUrl(s.networkLink,this.view.state);await this._loadVisualData(e,i,t);}}}))}_fetchParsedKML(e,i){return g$1(e,this.layer.spatialReference,this.layer.refreshInterval,i).then((e=>d(e.data)))}_removeMapImage(e){const i=this._bitmapIndex.get(e);i&&(this._mapImageContainer.removeChild(i),this._bitmapIndex.delete(e));}};e$2([y()],j.prototype,"_pointsView",void 0),e$2([y()],j.prototype,"_polylinesView",void 0),e$2([y()],j.prototype,"_polygonsView",void 0),e$2([y()],j.prototype,"updating",void 0),j=e$2([c$2("esri.views.2d.layers.KMLLayerView2D")],j);const k=j;

export { k as default };