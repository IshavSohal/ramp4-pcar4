import { fB as t, bs as K, _ as _$1, U as U$1, b8 as c$2, a0 as V, bj as d$1, fC as e$1, bp as u$1, a_ as w$1, br as W, bA as f$2, fD as r, fE as A, cp as f$3, fF as v, bd as e$2, be as y$1, bf as a$1 } from './main-5ivotA7d.js';
import { b as b$1, g as g$1, d } from './kmlUtils-KyZEuqHP.js';
import { g, f, b } from './Bitmap-Bdj_ebnG.js';
import { a } from './BitmapContainer-CpSV-Dth.js';
import { f as f$1, y as y$2 } from './LayerView-DFeSr6PP.js';
import { t as t$1 } from './GraphicContainer-DFvlZbaJ.js';
import { V as V$1 } from './GraphicsView2D-BrQ_HUMF.js';
import { C as C$1, e as ee } from './rasterProjectionHelper-Blo5cT-_.js';
import { a as h$1 } from './WGLContainer-CD55gFMT.js';
import { y, o } from './RenderingContext-CjLRKfQH.js';
import { D, G, U, X } from './enums-CwcDCDam.js';
import { E } from './Program-6sDK-ryB.js';
import { c } from './rasterUtils-DtLbE8wo.js';
import { e, c as c$1 } from './Texture-syeFgIiX.js';
import './preload-helper-dJJaZANz.js';
import './Container-CEbThM4A.js';
import './highlightReasons-DF1DILMu.js';
import './definitions-BdwlvHBE.js';
import './layerViewUtils-CRtvGSrJ.js';
import './AGraphicContainer-9hFfHURA.js';
import './TechniqueInstance-DBsmcB4d.js';
import './UpdateTracking2D-C4LWDD8Y.js';
import './BidiEngine-Z2aMxkhF.js';
import './GeometryUtils-BgJrHE3X.js';
import './enums-CHdyfzUK.js';
import './Rect-zdvLIBQm.js';
import './LabelMetric-CsopNW4j.js';
import './VertexElementDescriptor-Bcj0303n.js';
import './BindType-DQnxDFt3.js';
import './Util-VK1Izig4.js';
import './TileContainer-CGL0etE_.js';
import './FeatureCommandQueue-B1hxBKNw.js';
import './ProgramTemplate-BSP8vhTz.js';
import './constants-BNnV1ogR.js';
import './vec3f32-CmlAce5k.js';
import './AttributeStore-DBgvAy34.js';
import './TimeOnly-Bm6ucPlH.js';
import './timeSupport-D5umCMhm.js';
import './json-DYk0G9qS.js';
import './normalizeUtilsSync-BzkoO-mY.js';
import './StyleDefinition-DkEWNPyD.js';
import './config-C86_VOH4.js';
import './earcut-B89C9uLK.js';
import './webglDeps-1HRvm3OD.js';
import './NestedMap-D_excvDj.js';
import './renderState-Cae0JNUz.js';
import './basicInterfaces-CK7IW-0v.js';
import './interfaces-MbpZrcgP.js';
import './testSVGPremultipliedAlpha-Bgk408Q9.js';
import './floatRGBA-D-o7v5zT.js';
import './doublePrecisionUtils-DdMra9FE.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.30/esri/copyright.txt for details.
*/
class w{constructor(t$1){if(this._ownsRctx=!1,t$1)this._ownsRctx=!1,this._rctx=t$1;else {if(w._instance)return w._instanceRefCount++,w._instance;w._instanceRefCount=1,w._instance=this,this._ownsRctx=!0;const t$1=document.createElement("canvas"),e=t(t$1);e.getExtension("OES_texture_float"),this._rctx=new y(e,{});}const e={applyProjection:!0,bilinear:!1,bicubic:!1},r=o("raster/reproject","raster/reproject",new Map([["a_position",0]]),e);this._program=this._rctx.programCache.acquire(r.shaders.vertexShader,r.shaders.fragmentShader,r.attributes),this._rctx.useProgram(this._program),this._program.setUniform1f("u_opacity",1),this._program.setUniform1i("u_image",0),this._program.setUniform1i("u_flipY",0),this._program.setUniform1i("u_transformGrid",1),this._quad=new h$1(this._rctx,[0,0,1,0,0,1,1,1]);}reprojectTexture(t,s,n=!1){const o=K(t.extent,s),m=new _$1({x:(t.extent.xmax-t.extent.xmin)/t.texture.descriptor.width,y:(t.extent.ymax-t.extent.ymin)/t.texture.descriptor.height,spatialReference:t.extent.spatialReference}),{x:c$1,y:g}=C$1(m,s,t.extent);let f=(c$1+g)/2;const w=Math.round((o.xmax-o.xmin)/f),b=Math.round((o.ymax-o.ymin)/f);f=(o.width/w+o.height/b)/2;const j=new _$1({x:f,y:f,spatialReference:o.spatialReference}),D$1=ee({projectedExtent:o,srcBufferExtent:t.extent,pixelSize:j,hasWrapAround:!0,spacing:[16,16]}),R=c(this._rctx,D$1),T=new e(w,b);T.wrapMode=D.CLAMP_TO_EDGE;const C=new E(this._rctx,T);this._rctx.bindFramebuffer(C),this._rctx.setViewport(0,0,w,b),this._rctx.useProgram(this._program),this._rctx.bindTexture(t.texture,0),this._rctx.bindTexture(R,1),this._quad.bind();const{width:y=0,height:E$1=0}=t.texture.descriptor;if(this._program.setUniform2f("u_srcImageSize",y,E$1),this._program.setUniform2fv("u_transformSpacing",D$1.spacing),this._program.setUniform2fv("u_transformGridSize",D$1.size),this._program.setUniform2f("u_targetImageSize",w,b),this._quad.draw(),this._quad.unbind(),this._rctx.useProgram(null),this._rctx.bindFramebuffer(null),R.dispose(),n){const{width:t,height:e}=C,r=new ImageData(t??0,e??0);C.readPixels(0,0,t??0,e??0,G.RGBA,U.UNSIGNED_BYTE,r.data);const i=C.detachColorTexture(X.COLOR_ATTACHMENT0);return C.dispose(),{texture:i,extent:o,imageData:r}}const U$1=C.detachColorTexture(X.COLOR_ATTACHMENT0);return C.dispose(),{texture:U$1,extent:o}}reprojectBitmapData(t,e$1){const r=g(t.bitmapData)?f(t.bitmapData):t.bitmapData,i=new e;i.wrapMode=D.CLAMP_TO_EDGE,i.width=t.bitmapData.width,i.height=t.bitmapData.height;const a=new c$1(this._rctx,i,r),o=this.reprojectTexture({texture:a,extent:t.extent},e$1,!0);o.texture.dispose();const m=document.createElement("canvas"),c=o.imageData;m.width=c.width,m.height=c.height;return m.getContext("2d").putImageData(c,0,0),{bitmapData:m,extent:o.extent}}async loadAndReprojectBitmapData(e,r,i){const a=(await U$1(e,{responseType:"image"})).data,s=document.createElement("canvas");s.width=a.width,s.height=a.height;const n=s.getContext("2d");n.drawImage(a,0,0);const o=n.getImageData(0,0,s.width,s.height);if(r.spatialReference.equals(i))return {bitmapData:o,extent:r};const m=this.reprojectBitmapData({bitmapData:o,extent:r},i);return {bitmapData:m.bitmapData,extent:m.extent}}destroy(){this._ownsRctx?(w._instanceRefCount--,0===w._instanceRefCount&&(this._quad.dispose(),this._program.dispose(),this._rctx.dispose(),w._instance=null)):(this._quad.dispose(),this._program.dispose());}}w._instanceRefCount=0;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.30/esri/copyright.txt for details.
*/
class C{constructor(){this.allSublayers=new Map,this.allPoints=[],this.allPolylines=[],this.allPolygons=[],this.allMapImages=[];}}let j=class extends(f$1(y$2)){constructor(){super(...arguments),this._bitmapIndex=new Map,this._mapImageContainer=new a,this._kmlVisualData=new C,this._fetchController=null,this.allVisiblePoints=new c$2,this.allVisiblePolylines=new c$2,this.allVisiblePolygons=new c$2,this.allVisibleMapImages=new V;}async hitTest(e,i){const t=this.layer;return [this._pointsView?.hitTest(e),this._polylinesView?.hitTest(e),this._polygonsView?.hitTest(e)].flat().filter(Boolean).map((i=>(i.layer=t,i.sourceLayer=t,{type:"graphic",graphic:i,layer:t,mapPoint:e})))}update(e){this._polygonsView&&this._polygonsView.processUpdate(e),this._polylinesView&&this._polylinesView.processUpdate(e),this._pointsView&&this._pointsView.processUpdate(e);}attach(){this._fetchController=new AbortController,this.container.addChild(this._mapImageContainer),this._polygonsView=new V$1({view:this.view,graphics:this.allVisiblePolygons,requestUpdateCallback:()=>this.requestUpdate(),container:new t$1(this.view.featuresTilingScheme)}),this.container.addChild(this._polygonsView.container),this._polylinesView=new V$1({view:this.view,graphics:this.allVisiblePolylines,requestUpdateCallback:()=>this.requestUpdate(),container:new t$1(this.view.featuresTilingScheme)}),this.container.addChild(this._polylinesView.container),this._pointsView=new V$1({view:this.view,graphics:this.allVisiblePoints,requestUpdateCallback:()=>this.requestUpdate(),container:new t$1(this.view.featuresTilingScheme)}),this.container.addChild(this._pointsView.container),this.addAttachHandles([this.allVisibleMapImages.on("change",(e=>{e.added.forEach((e=>this._addMapImage(e))),e.removed.forEach((e=>this._removeMapImage(e)));})),d$1((()=>this.layer.visibleSublayers),(e=>{for(const[i,t]of this._kmlVisualData.allSublayers)t.visibility=0;for(const i of e){const e=this._kmlVisualData.allSublayers.get(i.id);e&&(e.visibility=1);}this._refreshCollections();}))]),this._updatingHandles.addPromise(this._fetchService(this._fetchController.signal)),this._imageReprojector=new w;}detach(){this._fetchController=e$1(this._fetchController),this._mapImageContainer.removeAllChildren(),this.container.removeAllChildren(),this._bitmapIndex.clear(),this._polygonsView=u$1(this._polygonsView),this._polylinesView=u$1(this._polylinesView),this._pointsView=u$1(this._pointsView),this._imageReprojector=u$1(this._imageReprojector);}viewChange(){this._polygonsView.viewChange(),this._polylinesView.viewChange(),this._pointsView.viewChange();}moveEnd(){}isUpdating(){return this._pointsView.updating||this._polygonsView.updating||this._polylinesView.updating}_addMapImage(e){(this.view.spatialReference?.isWGS84||this.view.spatialReference?.isWebMercator)&&this._imageReprojector.loadAndReprojectBitmapData(e.href,w$1.fromJSON(e.extent),this.view.spatialReference).then((i=>{const t=new b(i.bitmapData);t.x=i.extent.xmin,t.y=i.extent.ymax,t.resolution=i.extent.width/i.bitmapData.width,t.rotation=e.rotation,this._mapImageContainer.addChild(t),this._bitmapIndex.set(e,t);}));}async _getViewDependentUrl(e,t){const{viewFormat:s,viewBoundScale:a,httpQuery:o}=e;if(null!=s){if(null==t)throw new Error("Loading this network link requires a view state.");let n;if(await W(),null!=a&&1!==a){const e=new w$1(t.extent);e.expand(a),n=e;}else n=t.extent;n=K(n,f$2.WGS84);const h=K(n,f$2.WebMercator),y=n.xmin,g=n.xmax,w=n.ymin,_=n.ymax,b=t.size[0]*t.pixelRatio,V=t.size[1]*t.pixelRatio,f=Math.max(h.width,h.height),v$1={"[bboxWest]":y.toString(),"[bboxEast]":g.toString(),"[bboxSouth]":w.toString(),"[bboxNorth]":_.toString(),"[lookatLon]":n.center.x.toString(),"[lookatLat]":n.center.y.toString(),"[lookatRange]":f.toString(),"[lookatTilt]":"0","[lookatHeading]":t.rotation.toString(),"[lookatTerrainLon]":n.center.x.toString(),"[lookatTerrainLat]":n.center.y.toString(),"[lookatTerrainAlt]":"0","[cameraLon]":n.center.x.toString(),"[cameraLat]":n.center.y.toString(),"[cameraAlt]":f.toString(),"[horizFov]":"60","[vertFov]":"60","[horizPixels]":b.toString(),"[vertPixels]":V.toString(),"[terrainEnabled]":"0","[clientVersion]":r,"[kmlVersion]":"2.2","[clientName]":"ArcGIS API for JavaScript","[language]":"en-US"},S=e=>{for(const i in e){let t;for(t in v$1)e[i]=e[i].replace(t,v$1[t]);}},I=A(s);S(I);let x={};null!=o&&(x=A(o),S(x));const C=f$3(e.href);C.query={...C.query,...I,...x};return `${C.path}?${v(I)}`}return e.href}async _fetchService(e){const i=new C;await this._loadVisualData(this.layer.url,i,e),this._kmlVisualData=i,this._refreshCollections();}_refreshCollections(){this.allVisiblePoints.removeAll(),this.allVisiblePolylines.removeAll(),this.allVisiblePolygons.removeAll(),this.allVisibleMapImages.removeAll(),this.allVisiblePoints.addMany(this._kmlVisualData.allPoints.filter((e=>this._isSublayerVisible(e.sublayerId))).map((({item:e})=>e))),this.allVisiblePolylines.addMany(this._kmlVisualData.allPolylines.filter((e=>this._isSublayerVisible(e.sublayerId))).map((({item:e})=>e))),this.allVisiblePolygons.addMany(this._kmlVisualData.allPolygons.filter((e=>this._isSublayerVisible(e.sublayerId))).map((({item:e})=>e))),this.allVisibleMapImages.addMany(this._kmlVisualData.allMapImages.filter((e=>this._isSublayerVisible(e.sublayerId))).map((({item:e})=>e)));}_isSublayerVisible(e){const i=this._kmlVisualData.allSublayers.get(e);return !!i?.visibility&&(-1===i.parentFolderId||this._isSublayerVisible(i.parentFolderId))}_loadVisualData(e,i,t){return this._fetchParsedKML(e,t).then((async e=>{for(const s of e.sublayers){i.allSublayers.set(s.id,s);const e=s.points?await b$1(s.points):[],a=s.polylines?await b$1(s.polylines):[],o=s.polygons?await b$1(s.polygons):[],l=s.mapImages||[];if(i.allPoints.push(...e.map((e=>({item:e,sublayerId:s.id})))),i.allPolylines.push(...a.map((e=>({item:e,sublayerId:s.id})))),i.allPolygons.push(...o.map((e=>({item:e,sublayerId:s.id})))),i.allMapImages.push(...l.map((e=>({item:e,sublayerId:s.id})))),s.networkLink){const e=await this._getViewDependentUrl(s.networkLink,this.view.state);await this._loadVisualData(e,i,t);}}}))}_fetchParsedKML(e,i){return g$1(e,this.layer.spatialReference,this.layer.refreshInterval,i).then((e=>d(e.data)))}_removeMapImage(e){const i=this._bitmapIndex.get(e);i&&(this._mapImageContainer.removeChild(i),this._bitmapIndex.delete(e));}};e$2([y$1()],j.prototype,"_pointsView",void 0),e$2([y$1()],j.prototype,"_polylinesView",void 0),e$2([y$1()],j.prototype,"_polygonsView",void 0),e$2([y$1()],j.prototype,"updating",void 0),j=e$2([a$1("esri.views.2d.layers.KMLLayerView2D")],j);const k=j;

export { k as default };