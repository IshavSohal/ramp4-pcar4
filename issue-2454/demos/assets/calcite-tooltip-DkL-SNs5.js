import{cX as T,cY as E,f0 as a,cT as s,cZ as w}from"./main-Bw8nB3u2.js";import{t as H,q as b,e as y}from"./dom-BveoWHh2.js";import{c as k,a as C,b as R,r as O,F as f}from"./floating-ui-DBiV8q05.js";import{g as S}from"./guid-BxSjQh8J.js";import{o as d}from"./openCloseComponent-BqUDVCcF.js";import{F as L}from"./FloatingArrow-DBv7tDaV.js";import"./preload-helper-ExcqyqRp.js";import"./debounce-BOqmhDXu.js";/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/dev/LICENSE.md for details.
 * v2.13.2
 */const x={container:"container"},A=300,D=500,h="aria-describedby";function u(n){const{referenceElement:e}=n;return(typeof e=="string"?b(n,{id:e}):e)||null}class P{constructor(){this.registeredElements=new WeakMap,this.registeredShadowRootCounts=new WeakMap,this.hoverOpenTimeout=null,this.hoverCloseTimeout=null,this.activeTooltip=null,this.registeredElementCount=0,this.clickedTooltip=null,this.queryTooltip=e=>{const{registeredElements:t}=this,i=e.find(o=>t.has(o));return t.get(i)},this.keyDownHandler=e=>{if(e.key==="Escape"&&!e.defaultPrevented){const{activeTooltip:t}=this;if(t?.open){this.clearHoverTimeout(),this.closeActiveTooltip();const i=u(t);i instanceof Element&&i.contains(e.target)&&e.preventDefault()}}},this.pointerMoveHandler=e=>{const t=e.composedPath(),{activeTooltip:i}=this,o=this.queryTooltip(t);if(this.pathHasOpenTooltip(o,t)){this.clearHoverTimeout();return}o!==this.clickedTooltip&&(o?this.openHoveredTooltip(o):i?.open&&this.closeHoveredTooltip(),this.clickedTooltip=null)},this.clickHandler=e=>{this.clickedTooltip=null;const t=e.composedPath(),i=this.queryTooltip(t);if(this.pathHasOpenTooltip(i,t)){this.clearHoverTimeout();return}if(this.closeActiveTooltip(),!!i){if(this.clearHoverTimeout(),i.closeOnClick){this.clickedTooltip=i,this.toggleTooltip(i,!1);return}this.toggleTooltip(i,!0)}},this.blurHandler=()=>{this.closeActiveTooltip()},this.focusInHandler=e=>{const t=e.composedPath(),i=this.queryTooltip(t);if(this.pathHasOpenTooltip(i,t)){this.clearHoverTimeout();return}this.closeTooltipIfNotActive(i),i&&this.toggleFocusedTooltip(i,!0)},this.openHoveredTooltip=e=>{this.hoverOpenTimeout=window.setTimeout(()=>{this.hoverOpenTimeout!==null&&(this.clearHoverCloseTimeout(),this.closeTooltipIfNotActive(e),this.toggleTooltip(e,!0))},this.activeTooltip?.open?0:A)},this.closeHoveredTooltip=()=>{this.hoverCloseTimeout=window.setTimeout(()=>{this.hoverCloseTimeout!==null&&this.closeActiveTooltip()},D)}}registerElement(e,t){this.registeredElementCount++,this.registeredElements.set(e,t);const i=this.getReferenceElShadowRootNode(e);i&&this.registerShadowRoot(i),this.registeredElementCount===1&&this.addListeners()}unregisterElement(e){const t=this.getReferenceElShadowRootNode(e);t&&this.unregisterShadowRoot(t),this.registeredElements.delete(e)&&this.registeredElementCount--,this.registeredElementCount===0&&this.removeListeners()}pathHasOpenTooltip(e,t){const{activeTooltip:i}=this;return i?.open&&t.includes(i)||e?.open&&t.includes(e)}addShadowListeners(e){e.addEventListener("focusin",this.focusInHandler,{capture:!0})}removeShadowListeners(e){e.removeEventListener("focusin",this.focusInHandler,{capture:!0})}addListeners(){window.addEventListener("keydown",this.keyDownHandler,{capture:!0}),window.addEventListener("pointermove",this.pointerMoveHandler,{capture:!0}),window.addEventListener("click",this.clickHandler,{capture:!0}),window.addEventListener("focusin",this.focusInHandler,{capture:!0}),window.addEventListener("blur",this.blurHandler)}removeListeners(){window.removeEventListener("keydown",this.keyDownHandler,{capture:!0}),window.removeEventListener("pointermove",this.pointerMoveHandler,{capture:!0}),window.removeEventListener("click",this.clickHandler,{capture:!0}),window.removeEventListener("focusin",this.focusInHandler,{capture:!0}),window.removeEventListener("blur",this.blurHandler)}clearHoverOpenTimeout(){window.clearTimeout(this.hoverOpenTimeout),this.hoverOpenTimeout=null}clearHoverCloseTimeout(){window.clearTimeout(this.hoverCloseTimeout),this.hoverCloseTimeout=null}clearHoverTimeout(){this.clearHoverOpenTimeout(),this.clearHoverCloseTimeout()}closeTooltipIfNotActive(e){this.activeTooltip!==e&&this.closeActiveTooltip()}closeActiveTooltip(){const{activeTooltip:e}=this;e?.open&&this.toggleTooltip(e,!1)}toggleFocusedTooltip(e,t){t&&this.clearHoverTimeout(),this.toggleTooltip(e,t)}toggleTooltip(e,t){e.open=t,this.activeTooltip=t?e:null}registerShadowRoot(e){const{registeredShadowRootCounts:t}=this,i=t.get(e),o=Math.min((typeof i=="number"?i:0)+1,1);o===1&&this.addShadowListeners(e),t.set(e,o)}unregisterShadowRoot(e){const{registeredShadowRootCounts:t}=this,i=t.get(e),o=Math.max((typeof i=="number"?i:1)-1,0);o===0&&this.removeShadowListeners(e),t.set(e,o)}getReferenceElShadowRootNode(e){return e instanceof Element?y(e):null}}const I=":host{--calcite-floating-ui-z-index:var(--calcite-tooltip-z-index, var(--calcite-z-index-tooltip));display:block;position:absolute;z-index:var(--calcite-floating-ui-z-index)}.calcite-floating-ui-anim{position:relative;transition:var(--calcite-floating-ui-transition);transition-property:inset, left, opacity;opacity:0;box-shadow:0 0 16px 0 rgba(0, 0, 0, 0.16);z-index:var(--calcite-z-index);border-radius:0.25rem}:host([data-placement^=bottom]) .calcite-floating-ui-anim{inset-block-start:-5px}:host([data-placement^=top]) .calcite-floating-ui-anim{inset-block-start:5px}:host([data-placement^=left]) .calcite-floating-ui-anim{left:5px}:host([data-placement^=right]) .calcite-floating-ui-anim{left:-5px}:host([data-placement]) .calcite-floating-ui-anim--active{opacity:1;inset-block:0;left:0}:host([calcite-hydrated-hidden]){visibility:hidden !important;pointer-events:none}.calcite-floating-ui-arrow{pointer-events:none;position:absolute;z-index:calc(var(--calcite-z-index) * -1);fill:var(--calcite-color-foreground-1)}.calcite-floating-ui-arrow__stroke{stroke:var(--calcite-color-border-3)}.container{position:relative;overflow:hidden;border-radius:0.25rem;padding-block:0.75rem;padding-inline:1rem;font-size:var(--calcite-font-size--2);line-height:1.375;font-weight:var(--calcite-font-weight-medium);color:var(--calcite-color-text-1);max-inline-size:20rem;max-block-size:20rem;text-align:start}.calcite-floating-ui-anim{border-radius:0.25rem;border-width:1px;border-style:solid;border-color:var(--calcite-color-border-3);background-color:var(--calcite-color-foreground-1)}.arrow::before{outline:1px solid var(--calcite-color-border-3)}:host([hidden]){display:none}[hidden]{display:none}",_=I,p=new P,m=T(class extends E{constructor(){super(),this.__registerHost(),this.__attachShadow(),this.calciteTooltipBeforeClose=a(this,"calciteTooltipBeforeClose",6),this.calciteTooltipClose=a(this,"calciteTooltipClose",6),this.calciteTooltipBeforeOpen=a(this,"calciteTooltipBeforeOpen",6),this.calciteTooltipOpen=a(this,"calciteTooltipOpen",6),this.guid=`calcite-tooltip-${S()}`,this.openTransitionProp="opacity",this.setTransitionEl=e=>{this.transitionEl=e},this.setUpReferenceElement=(e=!0)=>{this.removeReferences(),this.effectiveReferenceElement=u(this.el),k(this,this.effectiveReferenceElement,this.el);const{el:t,referenceElement:i,effectiveReferenceElement:o}=this;e&&i&&!o&&console.warn(`${t.tagName}: reference-element id "${i}" was not found.`,{el:t}),this.addReferences()},this.getId=()=>this.el.id||this.guid,this.addReferences=()=>{const{effectiveReferenceElement:e}=this;if(!e)return;const t=this.getId();"setAttribute"in e&&e.setAttribute(h,t),p.registerElement(e,this.el)},this.removeReferences=()=>{const{effectiveReferenceElement:e}=this;e&&("removeAttribute"in e&&e.removeAttribute(h),p.unregisterElement(e))},this.closeOnClick=!1,this.label=void 0,this.offsetDistance=C,this.offsetSkidding=0,this.open=!1,this.overlayPositioning="absolute",this.placement="auto",this.referenceElement=void 0,this.effectiveReferenceElement=void 0,this.floatingLayout="vertical"}offsetDistanceOffsetHandler(){this.reposition(!0)}offsetSkiddingHandler(){this.reposition(!0)}openHandler(){d(this),this.reposition(!0)}overlayPositioningHandler(){this.reposition(!0)}placementHandler(){this.reposition(!0)}referenceElementHandler(){this.setUpReferenceElement()}connectedCallback(){this.setUpReferenceElement(!0),this.open&&d(this)}async componentWillLoad(){this.open&&d(this)}componentDidLoad(){this.referenceElement&&!this.effectiveReferenceElement&&this.setUpReferenceElement()}disconnectedCallback(){this.removeReferences(),R(this,this.effectiveReferenceElement,this.el)}async reposition(e=!1){const{el:t,effectiveReferenceElement:i,placement:o,overlayPositioning:r,offsetDistance:l,offsetSkidding:c,arrowEl:g}=this;return O(this,{floatingEl:t,referenceEl:i,overlayPositioning:r,placement:o,offsetDistance:l,offsetSkidding:c,arrowEl:g,type:"tooltip"},e)}onBeforeOpen(){this.calciteTooltipBeforeOpen.emit()}onOpen(){this.calciteTooltipOpen.emit()}onBeforeClose(){this.calciteTooltipBeforeClose.emit()}onClose(){this.calciteTooltipClose.emit()}render(){const{effectiveReferenceElement:e,label:t,open:i,floatingLayout:o}=this,r=e&&i,l=!r;return s(w,{key:"4f097fd8c6eda6dfcd5734e5aaea1f52092501e7","aria-hidden":H(l),"aria-label":t,"aria-live":"polite","calcite-hydrated-hidden":l,id:this.getId(),role:"tooltip"},s("div",{key:"6b5055ab6f95277dd4daeaaff15cb9848d85eea0",class:{[f.animation]:!0,[f.animationActive]:r},ref:this.setTransitionEl},s(L,{key:"57f68bea5a7bb369d82437f10535cab9753677ea",floatingLayout:o,ref:c=>this.arrowEl=c}),s("div",{key:"100b8318173849508952f996acaeb5bf81b8af43",class:x.container},s("slot",{key:"f89d3ae9313d9555e6a7acdc32c323de85319a3a"}))))}get el(){return this}static get watchers(){return{offsetDistance:["offsetDistanceOffsetHandler"],offsetSkidding:["offsetSkiddingHandler"],open:["openHandler"],overlayPositioning:["overlayPositioningHandler"],placement:["placementHandler"],referenceElement:["referenceElementHandler"]}}static get style(){return _}},[1,"calcite-tooltip",{closeOnClick:[516,"close-on-click"],label:[1],offsetDistance:[514,"offset-distance"],offsetSkidding:[514,"offset-skidding"],open:[516],overlayPositioning:[513,"overlay-positioning"],placement:[513],referenceElement:[1,"reference-element"],effectiveReferenceElement:[32],floatingLayout:[32],reposition:[64]},void 0,{offsetDistance:["offsetDistanceOffsetHandler"],offsetSkidding:["offsetSkiddingHandler"],open:["openHandler"],overlayPositioning:["overlayPositioningHandler"],placement:["placementHandler"],referenceElement:["referenceElementHandler"]}]);function v(){if(typeof customElements>"u")return;["calcite-tooltip"].forEach(e=>{switch(e){case"calcite-tooltip":customElements.get(e)||customElements.define(e,m);break}})}v();const W=m,X=v;export{W as CalciteTooltip,X as defineCustomElement};