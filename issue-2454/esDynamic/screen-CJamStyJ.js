import{fI as L,fJ as U,f_ as B,kl as z,fM as V,fO as c,fQ as a,fU as l,fP as u,fY as x,fT as s,fW as T,fZ as v,fV as f,fX as _,kb as O,kc as W,g7 as C,jO as A,g0 as H,f$ as E,g4 as J,g5 as K,fN as N,fR as P,fS as M,g6 as j,h4 as Q}from"./main-iFHo11y2.js";const R={class:"mb-10"},X=["aria-label"],Y={key:0,class:"w-full h-30 hidden"},Z=["alt","src"],$=["alt","src"],D=["alt"],F={class:"pl-5"},G={class:"ml-auto pr-5"},ee=["content"],ae={key:0,class:"rv-basemap-check absolute top-0 right-0"},le=L({__name:"item",props:{basemap:{type:Object,required:!0},tileSchema:{type:Object,required:!0}},setup(e){const{t:b}=U(),y=B("iApi"),i=z(),m=V(()=>i.activeBasemapConfig),o=p=>{p.id!==m.value.id&&y?.geo.map.setBasemap(p.id)};return(p,t)=>{const g=c("truncate"),n=c("tippy"),h=c("focus-item");return a(),l("div",R,[u((a(),l("button",{class:"basemap-item-button bg-gray-300 w-full h-full",type:"button","aria-label":x(b)("basemap.select"),onClick:t[2]||(t[2]=r=>o(e.basemap))},[s("div",null,[s("div",{class:T(["flex hover:opacity-50 basemap-item-image basemap-item-container",e.basemap.hideThumbnail?"h-30":"h-180"])},[e.basemap.hideThumbnail?(a(),l("div",Y)):e.basemap.thumbnailUrl?(a(),l("img",{key:1,class:"w-full h-180",alt:e.basemap.altText,src:e.basemap.thumbnailUrl},null,8,Z)):e.tileSchema.thumbnailTileUrls&&e.tileSchema.thumbnailTileUrls.length>0&&e.basemap.layers.every(r=>r.layerType==="esri-tile")?(a(!0),l(v,{key:2},f(e.basemap.layers,r=>(a(),l("div",{key:r.id,class:"flex basemap-item-inner h-180"},[(a(!0),l(v,null,f(e.tileSchema.thumbnailTileUrls,(w,k)=>(a(),l("img",{class:"w-full",alt:e.basemap.altText,src:r.url+w,key:k},null,8,$))),128))]))),128)):(a(),l("img",{key:3,class:"w-full bg-white h-180",alt:e.basemap.altText,src:"https://openclipart.org/image/800px/275366"},null,8,D))],2)]),s("div",{class:T(["absolute flex w-full bg-black text-white h-30 bottom-6 items-center",e.basemap.hideThumbnail&&e.basemap.id===m.value.id?"opacity-85":"opacity-75"])},[u((a(),l("div",F,[s("span",null,_(e.basemap.name),1)])),[[g]]),s("div",G,[u((a(),l("a",{onClick:t[0]||(t[0]=O(()=>{},["stop"])),onKeydown:t[1]||(t[1]=W(O(()=>{},["prevent"]),["enter","space"])),content:e.basemap.description},t[3]||(t[3]=[s("svg",{class:"fill-current w-16 h-16",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},[s("path",{d:"M0 0h24v24H0z",fill:"none"}),s("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"})],-1)]),40,ee)),[[n,{placement:"bottom",trigger:"click focus"}]])])],2),e.basemap.id===m.value.id&&!e.basemap.hideThumbnail?(a(),l("div",ae,t[4]||(t[4]=[s("svg",{class:"fill-current w-25 h-25 relative",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},[s("path",{d:"M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z"})],-1)]))):C("",!0)],8,X)),[[h]])])}}}),te=A(le,[["__scopeId","data-v-7cf27f80"]]),se=["content"],ie={class:"h-600 overflow-y-auto"},ne={class:"font-bold text-xl"},re={key:0,class:"border-t border-b border-gray-600"},me=L({__name:"screen",props:{panel:{type:Object}},setup(e){const{t:b}=U(),y=z(),i=H("el"),m=E([]),o=E([]),p=n=>{n.key==="Tab"&&i.value?.matches(":focus")&&i.value._tippy.show()},t=()=>{i.value._tippy.hide()};J(()=>{const n=y.config.map;m.value=n.tileSchemas,o.value=n.basemaps,i.value?.addEventListener("blur",t),i.value?.addEventListener("keyup",p)}),K(()=>{i.value?.removeEventListener("blur",t),i.value?.removeEventListener("keyup",p)});const g=n=>o.value.filter(h=>h.tileSchemaId===n);return(n,h)=>{const r=N("panel-screen"),w=c("truncate"),k=c("focus-list"),I=c("tippy");return a(),P(r,{panel:e.panel},{header:M(()=>[j(_(x(b)("basemap.title")),1)]),content:M(()=>[u((a(),l("div",{content:x(b)("panels.controls.items"),ref_key:"el",ref:i},[s("div",ie,[(a(!0),l(v,null,f(m.value,(d,q)=>(a(),l("div",{class:"mx-5",key:d.id},[s("div",{class:T((q===0?"mt-5":"mt-36")+" flex mb-5")},[u((a(),l("h3",ne,[j(_(d.name),1)])),[[w]])],2),o.value.length>0?(a(),l("ul",re,[(a(!0),l(v,null,f(g(d.id),S=>(a(),l("li",{key:S.id},[Q(te,{basemap:S,tileSchema:d,class:"block relative overflow-hidden"},null,8,["basemap","tileSchema"])]))),128))])):C("",!0)]))),128))])],8,se)),[[k],[I,{trigger:"manual",placement:"top-end",maxWidth:190}]])]),_:1},8,["panel"])}}});export{me as default};