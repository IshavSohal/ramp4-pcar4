import { _ as L$1, fd as w$1, fe as o, ff as M, fg as t, fh as h, fi as b$1, fj as i$1, fk as f$1, fl as e } from './main-0c4f0857.js';
import { i } from './Container-6f8fa961.js';
import { P, G, D as D$1 } from './enums-af0bf3a9.js';
import { e as e$1, m as m$1 } from './Texture-48b39f3f.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
class l{constructor(l,e,t){this.pixelBlock=l,this.extent=e,this.originalPixelBlock=t;}get width(){return null!=this.pixelBlock?this.pixelBlock.width:0}get height(){return null!=this.pixelBlock?this.pixelBlock.height:0}render(l){const e=this.pixelBlock;if(null==e)return;const t=this.filter({extent:this.extent,pixelBlock:this.originalPixelBlock??e});if(null==t.pixelBlock)return;t.pixelBlock.maskIsAlpha&&(t.pixelBlock.premultiplyAlpha=!0);const i=t.pixelBlock.getAsRGBA(),h=l.createImageData(t.pixelBlock.width,t.pixelBlock.height);h.data.set(i),l.putImageData(h,0,0);}getRenderedRasterPixels(){const l=this.filter({extent:this.extent,pixelBlock:this.pixelBlock});return null==l.pixelBlock?null:(l.pixelBlock.maskIsAlpha&&(l.pixelBlock.premultiplyAlpha=!0),{width:l.pixelBlock.width,height:l.pixelBlock.height,renderedRasterPixels:new Uint8Array(l.pixelBlock.getAsRGBA().buffer)})}}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
function g(t){return t&&"render"in t}function f(t){const e=document.createElement("canvas");return e.width=t.width,e.height=t.height,t.render(e.getContext("2d")),e}function w(t){return g(t)?t instanceof l?t.getRenderedRasterPixels()?.renderedRasterPixels:f(t):t}class b extends i{constructor(t=null,e=!1){super(),this.blendFunction="standard",this._sourceWidth=0,this._sourceHeight=0,this._textureInvalidated=!1,this._texture=null,this.stencilRef=0,this.coordScale=[1,1],this._height=void 0,this.pixelRatio=1,this.resolution=0,this.rotation=0,this._source=null,this._width=void 0,this.x=0,this.y=0,this.immutable=e,this.source=t,this.requestRender=this.requestRender.bind(this);}destroy(){this._texture&&(this._texture.dispose(),this._texture=null),null!=this._uploadStatus&&(this._uploadStatus.controller.abort(),this._uploadStatus=null);}get isSourceScaled(){return this.width!==this._sourceWidth||this.height!==this._sourceHeight}get height(){return void 0!==this._height?this._height:this._sourceHeight}set height(t){this._height=t;}get source(){return this._source}set source(t){null==t&&null==this._source||(this._source=t,this.invalidateTexture(),this.requestRender());}get width(){return void 0!==this._width?this._width:this._sourceWidth}set width(t){this._width=t;}beforeRender(t){super.beforeRender(t),this.updateTexture(t);}async setSourceAsync(i,s){null!=this._uploadStatus&&this._uploadStatus.controller.abort();const r=new AbortController,h=L$1();return w$1(s,(()=>r.abort())),w$1(r,(t=>h.reject(t))),this._uploadStatus={controller:r,resolver:h},this.source=i,h.promise}invalidateTexture(){this._textureInvalidated||(this._textureInvalidated=!0,this._source instanceof HTMLImageElement?(this._sourceHeight=this._source.naturalHeight,this._sourceWidth=this._source.naturalWidth):this._source&&(this._sourceHeight=this._source.height,this._sourceWidth=this._source.width));}updateTransitionProperties(t,e){t>=64&&(this.fadeTransitionEnabled=!1,this.inFadeTransition=!1),super.updateTransitionProperties(t,e);}setTransform(t$1){const e=o(this.transforms.displayViewScreenMat3),[i,a]=t$1.toScreenNoRotation([0,0],[this.x,this.y]),l=this.resolution/this.pixelRatio/t$1.resolution,d=l*this.width,c=l*this.height,_=Math.PI*this.rotation/180;M(e,e,t(i,a)),M(e,e,t(d/2,c/2)),h(e,e,-_),M(e,e,t(-d/2,-c/2)),b$1(e,e,t(d,c)),i$1(this.transforms.displayViewScreenMat3,t$1.displayViewMat3,e);}setSamplingProfile(t){this._texture&&(t.mips&&!this._texture.descriptor.hasMipmap&&this._texture.generateMipmap(),this._texture.setSamplingMode(t.samplingMode));}bind(t,e){this._texture&&t.bindTexture(this._texture,e);}async updateTexture({context:t,painter:e}){if(!this._textureInvalidated)return;if(this._textureInvalidated=!1,this._texture||(this._texture=this._createTexture(t)),!this.source)return void this._texture.setData(null);this._texture.resize(this._sourceWidth,this._sourceHeight);const s=w(this.source);try{if(null!=this._uploadStatus){const{controller:t,resolver:i}=this._uploadStatus,r={signal:t.signal},{width:h,height:o}=this,u=this._texture,a=e.textureUploadManager;await a.enqueueTextureUpdate({data:s,texture:u,width:h,height:o},r),i.resolve(),this._uploadStatus=null;}else this._texture.setData(s);this.ready();}catch(r){f$1(r);}}onDetach(){this.destroy();}_createTransforms(){return {displayViewScreenMat3:e()}}_createTexture(t){const e=this.immutable,i=new e$1;return i.internalFormat=e?P.RGBA8:G.RGBA,i.wrapMode=D$1.CLAMP_TO_EDGE,i.isImmutable=e,i.width=this._sourceWidth,i.height=this._sourceHeight,new m$1(t,i)}}

export { b, f, g, l };