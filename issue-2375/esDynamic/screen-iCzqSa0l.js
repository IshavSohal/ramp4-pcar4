import{fw as $,fx as C,fC as T,fE as c,fI as w,fH as s,fD as S,fM as p,fL as k,fK as V,fW as q,fG as L,iw as z,jr as A,fY as E,ix as B,fO as J,iO as D,fA as F,fP as x,fS as G,fT as N,fV as P,fB as U,fF as M,fX as W,js as X,jt as Y,iK as Q,iJ as Z,fJ as ee,fN as ne,j0 as ae}from"./main-C02UbYD7.js";import{m as j}from"./marked.esm-DgqJBp_S.js";const te={key:0},le=["content"],se={class:"text-lg text-left flex-grow"},re=["innerHTML"],oe=$({__name:"section",props:{helpSection:{type:Object,required:!0}},setup(o){const{t:g}=C();return(y,r)=>{const f=T("tippy");return o.helpSection.drawn?(c(),w("div",te,[s("div",null,[S((c(),w("button",{type:"button",class:"help-section-header flex items-center py-15 px-25 hover:bg-gray-200 cursor-pointer select-none w-full",onClick:r[0]||(r[0]=i=>y.$emit("expand")),content:p(g)(o.helpSection.expanded?"help.section.collapse":"help.section.expand")},[s("span",se,k(o.helpSection.header),1),s("div",{class:V(["dropdown-icon",{"transform -rotate-180":o.helpSection.expanded}])},r[1]||(r[1]=[s("svg",{xmlns:"http://www.w3.org/2000/svg",height:"24",viewBox:"0 0 24 24",width:"24"},[s("path",{d:"M0 0h24v24H0V0z",fill:"none"}),s("path",{d:"M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z"})],-1)]),2)],8,le)),[[f,{placement:"top-end",hideOnClick:!1}]]),q(A,{name:"help-item",mode:"out-in"},{default:L(()=>[S(s("div",{innerHTML:o.helpSection.info,class:"ramp-markdown section-body px-20 pt-5 ml-10 overflow-hidden"},null,8,re),[[z,o.helpSection.expanded]])]),_:1})])])):E("",!0)}}}),pe=B(oe,[["__scopeId","data-v-7dc61532"]]),ie={class:"h-26 mb-8 mx-8"},de=["placeholder","aria-label"],ce={key:0},fe=$({__name:"screen",props:{panel:{type:Object,required:!0}},setup(o){const g=J("iApi"),y=D(),{t:r}=C(),f=F(()=>y.location),i=x([]),b=x([]),O=x([]),_=x(!1);let u,h;function H(e,t){const n=t.info.split(/(<[^>]*>)/);for(const[a,l]of n.entries())if(a%2===0&&l.toLowerCase().indexOf(e.toLowerCase())>-1)return!0;return!1}function R(e,t){const n=b.value[t].split(/(<[^>]*>)/);let a="";for(const[l,d]of n.entries())l%2===0?a+=d.replace(new RegExp(e,"gi"),v=>`<mark>${v}</mark>`):a+=d;i.value[t].info=a}function I(e,t){u=0,t.forEach((n,a)=>{n.info=b.value[a],n.drawn=H(e,n)||n.header.toLowerCase().indexOf(e.toLowerCase())>-1,u=n.drawn?u+1:u,n.expanded=n.drawn&&e.length>2,n.drawn&&e.length>2&&R(e,a)}),_.value=u===0}function K(e){e.expanded=!e.expanded}return G(()=>{O.value.push(N(()=>g.language,(e,t)=>{if(e===t)return;const n=new j.Renderer,a=f.value.slice(-1)==="/"?f.value:`${f.value}/`;n.image=(l,d,v)=>(l.indexOf("http")===-1&&(l=`${a}images/`+l),`<img src="${l}" alt="${v}">`),ae.get(`${a}${e}.md`).then(l=>{const d=/^#\s(.*)\n{2}(?:.+|\n(?!\n{2,}))*/gm;let v=l.data.replace(new RegExp("\r","g"),"");i.value=[];let m;for(;m=d.exec(v);)i.value.push({header:m[1],info:j(m[0].split(`
`).splice(2).join(`
`),{renderer:n}),drawn:!0,expanded:!1}),b.value.push(j(m[0].split(`
`).splice(2).join(`
`),{renderer:n}))})},{immediate:!0}))}),P(()=>{O.value.forEach(e=>e())}),(e,t)=>{const n=U("panel-screen");return c(),M(n,{panel:o.panel},{header:L(()=>[W(k(p(r)("help.title")),1)]),content:L(()=>[s("div",ie,[S(s("input",{type:"search",class:"rv-help-search-bar border-b w-full text-base py-8 outline-none focus:shadow-outline border-gray-600 h-full min-w-0",placeholder:p(r)("help.search"),"onUpdate:modelValue":t[0]||(t[0]=a=>Y(h)?h.value=a:h=a),"aria-label":p(r)("help.search"),onInput:t[1]||(t[1]=a=>I(p(h),i.value)),onKeypress:t[2]||(t[2]=Q(Z(()=>{},["prevent"]),["enter"])),enterkeyhint:"done"},null,40,de),[[X,p(h)]])]),_.value?(c(),w("div",ce,[s("p",null,k(p(r)("help.noResults")),1)])):E("",!0),(c(!0),w(ne,null,ee(i.value,(a,l)=>(c(),M(pe,{helpSection:a,key:l,onExpand:d=>K(a)},null,8,["helpSection","onExpand"]))),128))]),_:1},8,["panel"])}}});export{fe as default};