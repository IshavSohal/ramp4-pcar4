import{bt as o,ic as G,id as Q,ie as O,ch as X,aC as W,hW as Y,gH as J,aK as V,hX as Z,gA as tt,gF as st,gB as et,gC as ot,hY as it,gD as rt,b3 as at,ig as nt,ih as F}from"./main-BfJ-fbpL.js";import{r as pt}from"./vec3f32-BS0cezmI.js";import{n as dt}from"./WGLContainer-BW-0MOPO.js";import{t as ht,a as L,i as lt}from"./FeatureCommandQueue-DZ1Bw7Hr.js";import{h as U,g as p,m as q,I as ct,C as m,P as H,a as ut,j as C,S as ft,b as vt,c as gt,G as mt,H as xt,l as yt,v as wt,w as _t,e as Mt}from"./UpdateTracking2D-DF01104j.js";class D extends ct{}o([U(0,m)],D.prototype,"pos",void 0),o([U(1,m)],D.prototype,"uv",void 0);class St extends wt{}class K extends H{}o([p(ut)],K.prototype,"dvs",void 0);class v extends H{}o([p(m)],v.prototype,"perspective",void 0),o([p(m)],v.prototype,"texSize",void 0),o([p(C)],v.prototype,"wrapAroundShift",void 0),o([p(C)],v.prototype,"opacity",void 0),o([p(ft)],v.prototype,"texture",void 0);class x extends vt{vertex(t){const e=t.uv.divide(this.config.texSize),s=new C(1).add(gt(e,this.config.perspective)),n=new mt(t.pos.add(new m(this.config.wrapAroundShift,0)),1),i=this.transform.dvs.multiply(n);return{uv:e,glPosition:new xt(i.xy.multiply(s),0,s)}}fragment(t){const e=yt(this.config.texture,t.uv).multiply(this.config.opacity),s=new _t;return s.glFragColor=e,s}}o([p(K)],x.prototype,"transform",void 0),o([p(v)],x.prototype,"config",void 0),o([G(0,q(D))],x.prototype,"vertex",null),o([G(0,q(St))],x.prototype,"fragment",null);let bt=class extends ht{constructor(){super(...arguments),this.type=Mt.Overlay,this._mesh=null,this.shaders={overlay:new x}}render(a,t){const{context:e,painter:s}=a,n=this._getMesh(a,t);s.setPipelineState(L);const{isWrapAround:i,wrapAroundShift:d}=t.config,h={...t.config,wrapAroundShift:0},u={shader:this.shaders.overlay,uniforms:{transform:t.transform,config:h},defines:null,optionalAttributes:null,useComputeBuffer:!1};s.setPipelineState({...L,stencil:{write:!1,test:{compare:Q.EQUAL,op:{fail:O.KEEP,zFail:O.KEEP,zPass:O.REPLACE},ref:0,mask:255}}}),s.submitDrawMeshUntyped(e,u,n),i&&(h.wrapAroundShift=d,s.submitDrawMeshUntyped(e,u,n))}shutdown(){X(this._mesh)}_getMesh(a,t){const{context:e}=a;if(this._mesh){const s=this._mesh.vertexBuffers.get("positions");if(!s)throw new Error("Buffer not found");s.setData(t.position)}else{const s=t.index!=null?t.index.length:t.position.length/2;this._mesh=new lt(e,{vertex:{positions:t.position,uvs:t.tex},index:t.index!=null?{index:t.index}:void 0,groups:[{attributes:[{name:"pos",count:2,type:W.FLOAT,location:0,vertex:"positions",stride:8,offset:0},{name:"tex",count:2,type:W.UNSIGNED_SHORT,location:1,vertex:"uvs",stride:4,offset:0}],index:t.index!=null?"index":void 0,primitive:Y.TRIANGLE_STRIP}],parts:[{group:0,start:0,count:s}]})}return this._mesh}};class At extends dt{constructor(){super(...arguments),this._viewStateId=-1,this._dvsMat3=J(),this._overlayTechnique=new bt}get dvsMat3(){return this._dvsMat3}beforeRender(t){this._updateMatrices(t),this._updateOverlays(t,this.children);for(const e of this.children)e.beforeRender(t)}doRender(t){if(t.drawPhase!==V.MAP||!this.visible)return;super.doRender(t);const e=this._overlayTechnique;for(const s of this.children)s.draw(t,e)}onDetach(){this._overlayTechnique.shutdown()}_updateMatrices(t){const{state:e}=t,{id:s,size:n,pixelRatio:i,resolution:d,rotation:h,viewpoint:u,displayMat3:M}=e;if(this._viewStateId===s)return;const y=F(h),l=i*n[0],f=i*n[1];this._localOrigin=u.targetGeometry.clone();const{x:g,y:S}=this._localOrigin,w=Z(g,e.spatialReference);this._localOrigin.x=w,this._localOrigin.y=S;const b=d*l,A=d*f,r=tt(this._dvsMat3);st(r,r,M),et(r,r,ot(l/2,f/2)),it(r,r,pt(l/b,-f/A,1)),rt(r,r,-y),this._viewStateId=s}_updateOverlays(t,e){const{state:s}=t,{rotation:n,spatialReference:i,worldScreenWidth:d,size:h,viewpoint:u}=s,M=this._localOrigin;let y,l=0;const f=at(i);if(f&&i.isWrappable){const g=h[0],S=h[1],w=F(n),b=Math.abs(Math.cos(w)),A=Math.abs(Math.sin(w)),r=Math.round(g*b+S*A),[I,T]=f.valid,c=nt(i),{x:z,y:N}=u.targetGeometry,$=[z,N],P=[0,0];s.toScreen(P,$);const _=[0,0];let R;R=r>d?.5*d:.5*r;const B=Math.floor((z+.5*c)/c),j=I+B*c,k=T+B*c,E=[P[0]+R,0];s.toMap(_,E),_[0]>k&&(l=c),E[0]=P[0]-R,s.toMap(_,E),_[0]<j&&(l=-c),y={worldWidth:c,xBounds:[I,T]}}for(const g of e)g.updateDrawCoords(M,l,i,y)}}export{At as u};