import { aS as o$1 } from './main-De_LB6CK.js';
import './preload-helper-dJJaZANz.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.30/esri/copyright.txt for details.
*/
var e,t,n,a={exports:{}};e=a,t="undefined"!=typeof document?document.currentScript?.src:void 0,n=function(r={}){var e,n,a=Object.assign({},r),o=new Promise(((r,t)=>{e=r,n=t;})),i=!0,u=Object.assign({},a),s="./this.program",l="";function c(r){return a.locateFile?a.locateFile(r,l):l+r}"undefined"!=typeof document&&document.currentScript&&(l=document.currentScript.src),t&&(l=t),l=l.startsWith("blob:")?"":l.substr(0,l.replace(/[?#].*/,"").lastIndexOf("/")+1),a.print||console.log.bind(console);var f,d,h=a.printErr||console.error.bind(console);Object.assign(a,u),u=null,a.arguments&&a.arguments,a.thisProgram&&(s=a.thisProgram),a.quit&&a.quit,a.wasmBinary&&(f=a.wasmBinary);var m,v,p,y,g,w,_,b,A=!1;function T(){var r=d.buffer;a.HEAP8=m=new Int8Array(r),a.HEAP16=p=new Int16Array(r),a.HEAPU8=v=new Uint8Array(r),a.HEAPU16=y=new Uint16Array(r),a.HEAP32=g=new Int32Array(r),a.HEAPU32=w=new Uint32Array(r),a.HEAPF32=_=new Float32Array(r),a.HEAPF64=b=new Float64Array(r);}var C=[],F=[],P=[];function W(){if(a.preRun)for("function"==typeof a.preRun&&(a.preRun=[a.preRun]);a.preRun.length;)O(a.preRun.shift());G(C);}function E(){G(F);}function S(){if(a.postRun)for("function"==typeof a.postRun&&(a.postRun=[a.postRun]);a.postRun.length;)j(a.postRun.shift());G(P);}function O(r){C.unshift(r);}function $(r){F.unshift(r);}function j(r){P.unshift(r);}var M=0,D=null;function R(r){M++,a.monitorRunDependencies?.(M);}function x(r){if(M--,a.monitorRunDependencies?.(M),0==M&&D){var e=D;D=null,e();}}function k(r){a.onAbort?.(r),h(r="Aborted("+r+")"),A=!0,r+=". Build with -sASSERTIONS for more info.";var e=new WebAssembly.RuntimeError(r);throw n(e),e}var H,I="data:application/octet-stream;base64,",V=r=>r.startsWith(I);function U(r){if(r==H&&f)return new Uint8Array(f);throw "both async and sync fetching of the wasm failed"}function Y(r){return !f&&i&&"function"==typeof fetch?fetch(r,{credentials:"same-origin"}).then((e=>{if(!e.ok)throw `failed to load wasm binary file at '${r}'`;return e.arrayBuffer()})).catch((()=>U(r))):Promise.resolve().then((()=>U(r)))}function B(r,e,t){return Y(r).then((r=>WebAssembly.instantiate(r,e))).then(t,(r=>{h(`failed to asynchronously prepare wasm: ${r}`),k(r);}))}function z(r,e,t,n){return r||"function"!=typeof WebAssembly.instantiateStreaming||V(e)||"function"!=typeof fetch?B(e,t,n):fetch(e,{credentials:"same-origin"}).then((r=>WebAssembly.instantiateStreaming(r,t).then(n,(function(r){return h(`wasm streaming compile failed: ${r}`),h("falling back to ArrayBuffer instantiation"),B(e,t,n)}))))}function N(){return {a:ut}}function q(){var r=N();function e(r,e){return st=r.exports,d=st.M,T(),kr=st.P,$(st.N),x(),st}function t(r){e(r.instance);}if(R(),a.instantiateWasm)try{return a.instantiateWasm(r,e)}catch(o){h(`Module.instantiateWasm callback failed with error: ${o}`),n(o);}return z(f,H,r,t).catch(n),{}}V(H="lclayout.wasm")||(H=c(H));var G=r=>{for(;r.length>0;)r.shift()(a);};a.noExitRuntime;class J{constructor(r){this.excPtr=r,this.ptr=r-24;}set_type(r){w[this.ptr+4>>2]=r;}get_type(){return w[this.ptr+4>>2]}set_destructor(r){w[this.ptr+8>>2]=r;}get_destructor(){return w[this.ptr+8>>2]}set_caught(r){r=r?1:0,m[this.ptr+12]=r;}get_caught(){return 0!=m[this.ptr+12]}set_rethrown(r){r=r?1:0,m[this.ptr+13]=r;}get_rethrown(){return 0!=m[this.ptr+13]}init(r,e){this.set_adjusted_ptr(0),this.set_type(r),this.set_destructor(e);}set_adjusted_ptr(r){w[this.ptr+16>>2]=r;}get_adjusted_ptr(){return w[this.ptr+16>>2]}get_exception_ptr(){if(dt(this.get_type()))return w[this.excPtr>>2];var r=this.get_adjusted_ptr();return 0!==r?r:this.excPtr}}var L=(r,e,t)=>{throw new J(r).init(e,t),r},X={},K=r=>{for(;r.length;){var e=r.pop();r.pop()(e);}};function Q(r){return this.fromWireType(w[r>>2])}var Z,rr,er,tr={},nr={},ar={},or=r=>{throw new Z(r)},ir=(r,e,t)=>{function n(e){var n=t(e);n.length!==r.length&&or("Mismatched type converter count");for(var a=0;a<r.length;++a)hr(r[a],n[a]);}r.forEach((function(r){ar[r]=e;}));var a=new Array(e.length),o=[],i=0;e.forEach(((r,e)=>{nr.hasOwnProperty(r)?a[e]=nr[r]:(o.push(r),tr.hasOwnProperty(r)||(tr[r]=[]),tr[r].push((()=>{a[e]=nr[r],++i===o.length&&n(a);})));})),0===o.length&&n(a);},ur=r=>{var e=X[r];delete X[r];var t=e.rawConstructor,n=e.rawDestructor,a=e.fields,o=a.map((r=>r.getterReturnType)).concat(a.map((r=>r.setterArgumentType)));ir([r],o,(r=>{var o={};return a.forEach(((e,t)=>{var n=e.fieldName,i=r[t],u=e.getter,s=e.getterContext,l=r[t+a.length],c=e.setter,f=e.setterContext;o[n]={read:r=>i.fromWireType(u(s,r)),write:(r,e)=>{var t=[];c(f,r,l.toWireType(t,e)),K(t);}};})),[{name:e.name,fromWireType:r=>{var e={};for(var t in o)e[t]=o[t].read(r);return n(r),e},toWireType:(r,e)=>{for(var a in o)if(!(a in e))throw new TypeError(`Missing field: "${a}"`);var i=t();for(a in o)o[a].write(i,e[a]);return null!==r&&r.push(n,i),i},argPackAdvance:mr,readValueFromPointer:Q,destructorFunction:n}]}));},sr=(r,e,t,n,a)=>{},lr=()=>{for(var r=new Array(256),e=0;e<256;++e)r[e]=String.fromCharCode(e);rr=r;},cr=r=>{for(var e="",t=r;v[t];)e+=rr[v[t++]];return e},fr=r=>{throw new er(r)};function dr(r,e,t={}){var n=e.name;if(r||fr(`type "${n}" must have a positive integer typeid pointer`),nr.hasOwnProperty(r)){if(t.ignoreDuplicateRegistrations)return;fr(`Cannot register type '${n}' twice`);}if(nr[r]=e,delete ar[r],tr.hasOwnProperty(r)){var a=tr[r];delete tr[r],a.forEach((r=>r()));}}function hr(r,e,t={}){if(!("argPackAdvance"in e))throw new TypeError("registerType registeredInstance requires argPackAdvance");return dr(r,e,t)}var mr=8,vr=(r,e,t,n)=>{hr(r,{name:e=cr(e),fromWireType:function(r){return !!r},toWireType:function(r,e){return e?t:n},argPackAdvance:mr,readValueFromPointer:function(r){return this.fromWireType(v[r])},destructorFunction:null});},pr=(r,e,t)=>{r=cr(r),ir([],[e],(e=>(e=e[0],a[r]=e.fromWireType(t),[])));},yr=[],gr=[],wr=r=>{r>9&&0==--gr[r+1]&&(gr[r]=void 0,yr.push(r));},_r=()=>gr.length/2-5-yr.length,br=()=>{gr.push(0,1,void 0,1,null,1,!0,1,!1,1),a.count_emval_handles=_r;},Ar={toValue:r=>(r||fr("Cannot use deleted val. handle = "+r),gr[r]),toHandle:r=>{switch(r){case void 0:return 2;case null:return 4;case!0:return 6;case!1:return 8;default:{const e=yr.pop()||gr.length;return gr[e]=r,gr[e+1]=1,e}}}},Tr={name:"emscripten::val",fromWireType:r=>{var e=Ar.toValue(r);return wr(r),e},toWireType:(r,e)=>Ar.toHandle(e),argPackAdvance:mr,readValueFromPointer:Q,destructorFunction:null},Cr=r=>hr(r,Tr),Fr=(r,e,t)=>{if(void 0===r[e].overloadTable){var n=r[e];r[e]=function(...n){return r[e].overloadTable.hasOwnProperty(n.length)||fr(`Function '${t}' called with an invalid number of arguments (${n.length}) - expects one of (${r[e].overloadTable})!`),r[e].overloadTable[n.length].apply(this,n)},r[e].overloadTable=[],r[e].overloadTable[n.argCount]=n;}},Pr=(r,e,t)=>{a.hasOwnProperty(r)?((void 0===t||void 0!==a[r].overloadTable&&void 0!==a[r].overloadTable[t])&&fr(`Cannot register public name '${r}' twice`),Fr(a,r,r),a.hasOwnProperty(t)&&fr(`Cannot register multiple overloads of a function with the same number of arguments (${t})!`),a[r].overloadTable[t]=e):(a[r]=e,void 0!==t&&(a[r].numArguments=t));},Wr=(r,e,t)=>{switch(e){case 1:return t?function(r){return this.fromWireType(m[r])}:function(r){return this.fromWireType(v[r])};case 2:return t?function(r){return this.fromWireType(p[r>>1])}:function(r){return this.fromWireType(y[r>>1])};case 4:return t?function(r){return this.fromWireType(g[r>>2])}:function(r){return this.fromWireType(w[r>>2])};default:throw new TypeError(`invalid integer width (${e}): ${r}`)}},Er=(r,e,t,n)=>{function a(){}e=cr(e),a.values={},hr(r,{name:e,constructor:a,fromWireType:function(r){return this.constructor.values[r]},toWireType:(r,e)=>e.value,argPackAdvance:mr,readValueFromPointer:Wr(e,t,n),destructorFunction:null}),Pr(e,a);},Sr=(r,e)=>Object.defineProperty(e,"name",{value:r}),Or=r=>{var e=lt(r),t=cr(e);return ft(e),t},$r=(r,e)=>{var t=nr[r];return void 0===t&&fr(`${e} has unknown type ${Or(r)}`),t},jr=(r,e,t)=>{var n=$r(r,"enum");e=cr(e);var a=n.constructor,o=Object.create(n.constructor.prototype,{value:{value:t},constructor:{value:Sr(`${n.name}_${e}`,(function(){}))}});a.values[t]=o,a[e]=o;},Mr=(r,e)=>{switch(e){case 4:return function(r){return this.fromWireType(_[r>>2])};case 8:return function(r){return this.fromWireType(b[r>>3])};default:throw new TypeError(`invalid float width (${e}): ${r}`)}},Dr=(r,e,t)=>{hr(r,{name:e=cr(e),fromWireType:r=>r,toWireType:(r,e)=>e,argPackAdvance:mr,readValueFromPointer:Mr(e,t),destructorFunction:null});};function Rr(r){for(var e=1;e<r.length;++e)if(null!==r[e]&&void 0===r[e].destructorFunction)return !0;return !1}function xr(r,e,t,n,a,o){var i=e.length;i<2&&fr("argTypes array size mismatch! Must at least get return value and 'this' types!");var u=null!==e[1]&&null!==t,s=Rr(e),l="void"!==e[0].name,c=i-2,f=new Array(c),d=[],h=[];return Sr(r,(function(...t){var o;t.length!==c&&fr(`function ${r} called with ${t.length} arguments, expected ${c}`),h.length=0,d.length=u?2:1,d[0]=a,u&&(o=e[1].toWireType(h,this),d[1]=o);for(var i=0;i<c;++i)f[i]=e[i+2].toWireType(h,t[i]),d.push(f[i]);function m(r){if(s)K(h);else for(var t=u?1:2;t<e.length;t++){var n=1===t?o:f[t-2];null!==e[t].destructorFunction&&e[t].destructorFunction(n);}if(l)return e[0].fromWireType(r)}return m(n(...d))}))}var kr,Hr,Ir,Vr=(r,e)=>{for(var t=[],n=0;n<r;n++)t.push(w[e+4*n>>2]);return t},Ur=(r,e,t)=>{a.hasOwnProperty(r)||or("Replacing nonexistent public symbol"),void 0!==a[r].overloadTable&&void 0!==t?a[r].overloadTable[t]=e:(a[r]=e,a[r].argCount=t);},Yr=(r,e,t)=>(r=r.replace(/p/g,"i"),(0, a["dynCall_"+r])(e,...t)),Br=[],zr=r=>{var e=Br[r];return e||(r>=Br.length&&(Br.length=r+1),Br[r]=e=kr.get(r)),e},Nr=(r,e,t=[])=>r.includes("j")?Yr(r,e,t):zr(e)(...t),qr=(r,e)=>(...t)=>Nr(r,e,t),Gr=(r,e)=>{function t(){return r.includes("j")?qr(r,e):zr(e)}r=cr(r);var n=t();return "function"!=typeof n&&fr(`unknown function pointer with signature ${r}: ${e}`),n},Jr=(r,e)=>{var t=Sr(e,(function(r){this.name=e,this.message=r;var t=new Error(r).stack;void 0!==t&&(this.stack=this.toString()+"\n"+t.replace(/^Error(:[^\n]*)?\n/,""));}));return t.prototype=Object.create(r.prototype),t.prototype.constructor=t,t.prototype.toString=function(){return void 0===this.message?this.name:`${this.name}: ${this.message}`},t},Lr=(r,e)=>{var t=[],n={};function a(r){n[r]||nr[r]||(ar[r]?ar[r].forEach(a):(t.push(r),n[r]=!0));}throw e.forEach(a),new Hr(`${r}: `+t.map(Or).join([", "]))},Xr=r=>{const e=(r=r.trim()).indexOf("(");return -1!==e?r.substr(0,e):r},Kr=(r,e,t,n,a,o,i)=>{var u=Vr(e,t);r=cr(r),r=Xr(r),a=Gr(n,a),Pr(r,(function(){Lr(`Cannot call ${r} due to unbound types`,u);}),e-1),ir([],u,(t=>{var n=[t[0],null].concat(t.slice(1));return Ur(r,xr(r,n,null,a,o),e-1),[]}));},Qr=(r,e,t)=>{switch(e){case 1:return t?r=>m[r]:r=>v[r];case 2:return t?r=>p[r>>1]:r=>y[r>>1];case 4:return t?r=>g[r>>2]:r=>w[r>>2];default:throw new TypeError(`invalid integer width (${e}): ${r}`)}},Zr=(r,e,t,n,a)=>{e=cr(e);var o=r=>r;if(0===n){var i=32-8*t;o=r=>r<<i>>>i;}var u=e.includes("unsigned"),s=(r,e)=>{};hr(r,{name:e,fromWireType:o,toWireType:u?function(r,e){return s(e,this.name),e>>>0}:function(r,e){return s(e,this.name),e},argPackAdvance:mr,readValueFromPointer:Qr(e,t,0!==n),destructorFunction:null});},re=(r,e,t)=>{var n=[Int8Array,Uint8Array,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array][e];function a(r){var e=w[r>>2],t=w[r+4>>2];return new n(m.buffer,t,e)}hr(r,{name:t=cr(t),fromWireType:a,argPackAdvance:mr,readValueFromPointer:a},{ignoreDuplicateRegistrations:!0});},ee=(r,e)=>{Cr(r);},te=(r,e,t,n)=>{if(!(n>0))return 0;for(var a=t,o=t+n-1,i=0;i<r.length;++i){var u=r.charCodeAt(i);if(u>=55296&&u<=57343&&(u=65536+((1023&u)<<10)|1023&r.charCodeAt(++i)),u<=127){if(t>=o)break;e[t++]=u;}else if(u<=2047){if(t+1>=o)break;e[t++]=192|u>>6,e[t++]=128|63&u;}else if(u<=65535){if(t+2>=o)break;e[t++]=224|u>>12,e[t++]=128|u>>6&63,e[t++]=128|63&u;}else {if(t+3>=o)break;e[t++]=240|u>>18,e[t++]=128|u>>12&63,e[t++]=128|u>>6&63,e[t++]=128|63&u;}}return e[t]=0,t-a},ne=(r,e,t)=>te(r,v,e,t),ae=r=>{for(var e=0,t=0;t<r.length;++t){var n=r.charCodeAt(t);n<=127?e++:n<=2047?e+=2:n>=55296&&n<=57343?(e+=4,++t):e+=3;}return e},oe="undefined"!=typeof TextDecoder?new TextDecoder("utf8"):void 0,ie=(r,e,t)=>{for(var n=e+t,a=e;r[a]&&!(a>=n);)++a;if(a-e>16&&r.buffer&&oe)return oe.decode(r.subarray(e,a));for(var o="";e<a;){var i=r[e++];if(128&i){var u=63&r[e++];if(192!=(224&i)){var s=63&r[e++];if((i=224==(240&i)?(15&i)<<12|u<<6|s:(7&i)<<18|u<<12|s<<6|63&r[e++])<65536)o+=String.fromCharCode(i);else {var l=i-65536;o+=String.fromCharCode(55296|l>>10,56320|1023&l);}}else o+=String.fromCharCode((31&i)<<6|u);}else o+=String.fromCharCode(i);}return o},ue=(r,e)=>r?ie(v,r,e):"",se=(r,e)=>{var t="std::string"===(e=cr(e));hr(r,{name:e,fromWireType(r){var e,n=w[r>>2],a=r+4;if(t)for(var o=a,i=0;i<=n;++i){var u=a+i;if(i==n||0==v[u]){var s=ue(o,u-o);void 0===e?e=s:(e+=String.fromCharCode(0),e+=s),o=u+1;}}else {var l=new Array(n);for(i=0;i<n;++i)l[i]=String.fromCharCode(v[a+i]);e=l.join("");}return ft(r),e},toWireType(r,e){var n;e instanceof ArrayBuffer&&(e=new Uint8Array(e));var a="string"==typeof e;a||e instanceof Uint8Array||e instanceof Uint8ClampedArray||e instanceof Int8Array||fr("Cannot pass non-string to std::string"),n=t&&a?ae(e):e.length;var o=ct(4+n+1),i=o+4;if(w[o>>2]=n,t&&a)ne(e,i,n+1);else if(a)for(var u=0;u<n;++u){var s=e.charCodeAt(u);s>255&&(ft(i),fr("String has UTF-16 code units that do not fit in 8 bits")),v[i+u]=s;}else for(u=0;u<n;++u)v[i+u]=e[u];return null!==r&&r.push(ft,o),o},argPackAdvance:mr,readValueFromPointer:Q,destructorFunction(r){ft(r);}});},le="undefined"!=typeof TextDecoder?new TextDecoder("utf-16le"):void 0,ce=(r,e)=>{for(var t=r,n=t>>1,a=n+e/2;!(n>=a)&&y[n];)++n;if((t=n<<1)-r>32&&le)return le.decode(v.subarray(r,t));for(var o="",i=0;!(i>=e/2);++i){var u=p[r+2*i>>1];if(0==u)break;o+=String.fromCharCode(u);}return o},fe=(r,e,t)=>{if(t??=2147483647,t<2)return 0;for(var n=e,a=(t-=2)<2*r.length?t/2:r.length,o=0;o<a;++o){var i=r.charCodeAt(o);p[e>>1]=i,e+=2;}return p[e>>1]=0,e-n},de=r=>2*r.length,he=(r,e)=>{for(var t=0,n="";!(t>=e/4);){var a=g[r+4*t>>2];if(0==a)break;if(++t,a>=65536){var o=a-65536;n+=String.fromCharCode(55296|o>>10,56320|1023&o);}else n+=String.fromCharCode(a);}return n},me=(r,e,t)=>{if(t??=2147483647,t<4)return 0;for(var n=e,a=n+t-4,o=0;o<r.length;++o){var i=r.charCodeAt(o);if(i>=55296&&i<=57343&&(i=65536+((1023&i)<<10)|1023&r.charCodeAt(++o)),g[e>>2]=i,(e+=4)+4>a)break}return g[e>>2]=0,e-n},ve=r=>{for(var e=0,t=0;t<r.length;++t){var n=r.charCodeAt(t);n>=55296&&n<=57343&&++t,e+=4;}return e},pe=(r,e,t)=>{var n,a,o,i;t=cr(t),2===e?(n=ce,a=fe,i=de,o=r=>y[r>>1]):4===e&&(n=he,a=me,i=ve,o=r=>w[r>>2]),hr(r,{name:t,fromWireType:r=>{for(var t,a=w[r>>2],i=r+4,u=0;u<=a;++u){var s=r+4+u*e;if(u==a||0==o(s)){var l=n(i,s-i);void 0===t?t=l:(t+=String.fromCharCode(0),t+=l),i=s+e;}}return ft(r),t},toWireType:(r,n)=>{"string"!=typeof n&&fr(`Cannot pass non-string to C++ string type ${t}`);var o=i(n),u=ct(4+o+e);return w[u>>2]=o/e,a(n,u+4,o+e),null!==r&&r.push(ft,u),u},argPackAdvance:mr,readValueFromPointer:Q,destructorFunction(r){ft(r);}});},ye=(r,e,t,n,a,o)=>{X[r]={name:cr(e),rawConstructor:Gr(t,n),rawDestructor:Gr(a,o),fields:[]};},ge=(r,e,t,n,a,o,i,u,s,l)=>{X[r].fields.push({fieldName:cr(e),getterReturnType:t,getter:Gr(n,a),getterContext:o,setterArgumentType:i,setter:Gr(u,s),setterContext:l});},we=(r,e)=>{hr(r,{isVoid:!0,name:e=cr(e),argPackAdvance:0,fromWireType:()=>{},toWireType:(r,e)=>{}});},_e=1,be=()=>_e,Ae=(r,e,t)=>v.copyWithin(r,e,e+t),Te=(r,e,t)=>{var n=[],a=r.toWireType(n,t);return n.length&&(w[e>>2]=Ar.toHandle(n)),a},Ce=(r,e,t)=>(r=Ar.toValue(r),e=$r(e,"emval::as"),Te(e,t,r)),Fe={},Pe=r=>{var e=Fe[r];return void 0===e?cr(r):e},We=[],Ee=(r,e,t,n,a)=>(r=We[r])(e=Ar.toValue(e),e[t=Pe(t)],n,a),Se=r=>{var e=We.length;return We.push(r),e},Oe=(r,e)=>{for(var t=new Array(r),n=0;n<r;++n)t[n]=$r(w[e+4*n>>2],"parameter "+n);return t},$e=Reflect.construct,je=(r,e,t)=>{var n=Oe(r,e),a=n.shift();r--;var o=new Array(r),i=(e,i,u,s)=>{for(var l=0,c=0;c<r;++c)o[c]=n[c].readValueFromPointer(s+l),l+=n[c].argPackAdvance;var f=1===t?$e(i,o):i.apply(e,o);return Te(a,u,f)},u=`methodCaller<(${n.map((r=>r.name)).join(", ")}) => ${a.name}>`;return Se(Sr(u,i))},Me=(r,e)=>(r=Ar.toValue(r),e=Ar.toValue(e),Ar.toHandle(r[e])),De=()=>Ar.toHandle([]),Re=r=>{r=Ar.toValue(r);for(var e=new Array(r.length),t=0;t<r.length;t++)e[t]=r[t];return Ar.toHandle(e)},xe=r=>Ar.toHandle(Pe(r)),ke=r=>{var e=Ar.toValue(r);K(e),wr(r);},He=(r,e)=>{var t=(r=$r(r,"_emval_take_value")).readValueFromPointer(e);return Ar.toHandle(t)},Ie=()=>{k("");},Ve=()=>Date.now(),Ue=()=>2147483648,Ye=()=>Ue();Ir=()=>performance.now();var Be=r=>{var e=(r-d.buffer.byteLength+65535)/65536;try{return d.grow(e),T(),1}catch(t){}},ze=r=>{var e=v.length;r>>>=0;var t=Ue();if(r>t)return !1;for(var n=(r,e)=>r+(e-r%e)%e,a=1;a<=4;a*=2){var o=e*(1+.2/a);o=Math.min(o,r+100663296);var i=Math.min(t,n(Math.max(r,o),65536));if(Be(i))return !0}return !1},Ne={},qe=()=>s||"./this.program",Ge=()=>{if(!Ge.strings){var r={USER:"web_user",LOGNAME:"web_user",PATH:"/",PWD:"/",HOME:"/home/web_user",LANG:("object"==typeof navigator&&navigator.languages&&navigator.languages[0]||"C").replace("-","_")+".UTF-8",_:qe()};for(var e in Ne)void 0===Ne[e]?delete r[e]:r[e]=Ne[e];var t=[];for(var e in r)t.push(`${e}=${r[e]}`);Ge.strings=t;}return Ge.strings},Je=(r,e)=>{for(var t=0;t<r.length;++t)m[e++]=r.charCodeAt(t);m[e]=0;},Le=(r,e)=>{var t=0;return Ge().forEach(((n,a)=>{var o=e+t;w[r+4*a>>2]=o,Je(n,o),t+=n.length+1;})),0},Xe=(r,e)=>{var t=Ge();w[r>>2]=t.length;var n=0;return t.forEach((r=>n+=r.length+1)),w[e>>2]=n,0},Ke=r=>r%4==0&&(r%100!=0||r%400==0),Qe=(r,e)=>{for(var t=0,n=0;n<=e;t+=r[n++]);return t},Ze=[31,29,31,30,31,30,31,31,30,31,30,31],rt=[31,28,31,30,31,30,31,31,30,31,30,31],et=(r,e)=>{for(var t=new Date(r.getTime());e>0;){var n=Ke(t.getFullYear()),a=t.getMonth(),o=(n?Ze:rt)[a];if(!(e>o-t.getDate()))return t.setDate(t.getDate()+e),t;e-=o-t.getDate()+1,t.setDate(1),a<11?t.setMonth(a+1):(t.setMonth(0),t.setFullYear(t.getFullYear()+1));}return t};function tt(r,e,t){var n=ae(r)+1,a=new Array(n);return te(r,a,0,a.length),a}var nt=(r,e)=>{m.set(r,e);},at=(r,e,t,n)=>{var a=w[n+40>>2],o={tm_sec:g[n>>2],tm_min:g[n+4>>2],tm_hour:g[n+8>>2],tm_mday:g[n+12>>2],tm_mon:g[n+16>>2],tm_year:g[n+20>>2],tm_wday:g[n+24>>2],tm_yday:g[n+28>>2],tm_isdst:g[n+32>>2],tm_gmtoff:g[n+36>>2],tm_zone:a?ue(a):""},i=ue(t),u={"%c":"%a %b %d %H:%M:%S %Y","%D":"%m/%d/%y","%F":"%Y-%m-%d","%h":"%b","%r":"%I:%M:%S %p","%R":"%H:%M","%T":"%H:%M:%S","%x":"%m/%d/%y","%X":"%H:%M:%S","%Ec":"%c","%EC":"%C","%Ex":"%m/%d/%y","%EX":"%H:%M:%S","%Ey":"%y","%EY":"%Y","%Od":"%d","%Oe":"%e","%OH":"%H","%OI":"%I","%Om":"%m","%OM":"%M","%OS":"%S","%Ou":"%u","%OU":"%U","%OV":"%V","%Ow":"%w","%OW":"%W","%Oy":"%y"};for(var s in u)i=i.replace(new RegExp(s,"g"),u[s]);var l=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],c=["January","February","March","April","May","June","July","August","September","October","November","December"];function f(r,e,t){for(var n="number"==typeof r?r.toString():r||"";n.length<e;)n=t[0]+n;return n}function d(r,e){return f(r,e,"0")}function h(r,e){function t(r){return r<0?-1:r>0?1:0}var n;return 0===(n=t(r.getFullYear()-e.getFullYear()))&&0===(n=t(r.getMonth()-e.getMonth()))&&(n=t(r.getDate()-e.getDate())),n}function m(r){switch(r.getDay()){case 0:return new Date(r.getFullYear()-1,11,29);case 1:return r;case 2:return new Date(r.getFullYear(),0,3);case 3:return new Date(r.getFullYear(),0,2);case 4:return new Date(r.getFullYear(),0,1);case 5:return new Date(r.getFullYear()-1,11,31);case 6:return new Date(r.getFullYear()-1,11,30)}}function v(r){var e=et(new Date(r.tm_year+1900,0,1),r.tm_yday),t=new Date(e.getFullYear(),0,4),n=new Date(e.getFullYear()+1,0,4),a=m(t),o=m(n);return h(a,e)<=0?h(o,e)<=0?e.getFullYear()+1:e.getFullYear():e.getFullYear()-1}var p={"%a":r=>l[r.tm_wday].substring(0,3),"%A":r=>l[r.tm_wday],"%b":r=>c[r.tm_mon].substring(0,3),"%B":r=>c[r.tm_mon],"%C":r=>d((r.tm_year+1900)/100|0,2),"%d":r=>d(r.tm_mday,2),"%e":r=>f(r.tm_mday,2," "),"%g":r=>v(r).toString().substring(2),"%G":v,"%H":r=>d(r.tm_hour,2),"%I":r=>{var e=r.tm_hour;return 0==e?e=12:e>12&&(e-=12),d(e,2)},"%j":r=>d(r.tm_mday+Qe(Ke(r.tm_year+1900)?Ze:rt,r.tm_mon-1),3),"%m":r=>d(r.tm_mon+1,2),"%M":r=>d(r.tm_min,2),"%n":()=>"\n","%p":r=>r.tm_hour>=0&&r.tm_hour<12?"AM":"PM","%S":r=>d(r.tm_sec,2),"%t":()=>"\t","%u":r=>r.tm_wday||7,"%U":r=>{var e=r.tm_yday+7-r.tm_wday;return d(Math.floor(e/7),2)},"%V":r=>{var e=Math.floor((r.tm_yday+7-(r.tm_wday+6)%7)/7);if((r.tm_wday+371-r.tm_yday-2)%7<=2&&e++,e){if(53==e){var t=(r.tm_wday+371-r.tm_yday)%7;4==t||3==t&&Ke(r.tm_year)||(e=1);}}else {e=52;var n=(r.tm_wday+7-r.tm_yday-1)%7;(4==n||5==n&&Ke(r.tm_year%400-1))&&e++;}return d(e,2)},"%w":r=>r.tm_wday,"%W":r=>{var e=r.tm_yday+7-(r.tm_wday+6)%7;return d(Math.floor(e/7),2)},"%y":r=>(r.tm_year+1900).toString().substring(2),"%Y":r=>r.tm_year+1900,"%z":r=>{var e=r.tm_gmtoff,t=e>=0;return e=(e=Math.abs(e)/60)/60*100+e%60,(t?"+":"-")+String("0000"+e).slice(-4)},"%Z":r=>r.tm_zone,"%%":()=>"%"};for(var s in i=i.replace(/%%/g,"\0\0"),p)i.includes(s)&&(i=i.replace(new RegExp(s,"g"),p[s](o)));var y=tt(i=i.replace(/\0\0/g,"%"));return y.length>e?0:(nt(y,r),y.length-1)},ot=(r,e,t,n,a)=>at(r,e,t,n);Z=a.InternalError=class extends Error{constructor(r){super(r),this.name="InternalError";}},lr(),er=a.BindingError=class extends Error{constructor(r){super(r),this.name="BindingError";}},br(),Hr=a.UnboundTypeError=Jr(Error,"UnboundTypeError");var it,ut={a:L,k:ur,w:sr,E:vr,u:pr,v:Cr,K:Er,q:jr,t:Dr,d:Kr,j:Zr,f:re,L:ee,s:se,r:pe,l:ye,e:ge,J:we,C:be,H:Ae,g:Ce,n:Ee,b:wr,o:je,h:Me,p:De,I:Re,m:xe,c:ke,i:He,B:Ie,D:Ve,x:Ye,G:Ir,F:ze,z:Le,A:Xe,y:ot},st=q(),lt=r=>(lt=st.O)(r),ct=a._malloc=r=>(ct=a._malloc=st.Q)(r),ft=a._free=r=>(ft=a._free=st.R)(r),dt=r=>(dt=st.S)(r);function ht(){function r(){it||(it=!0,a.calledRun=!0,A||(E(),e(a),a.onRuntimeInitialized&&a.onRuntimeInitialized(),S()));}M>0||(W(),M>0||(a.setStatus?(a.setStatus("Running..."),setTimeout((function(){setTimeout((function(){a.setStatus("");}),1),r();}),1)):r()));}if(a.dynCall_viijii=(r,e,t,n,o,i,u)=>(a.dynCall_viijii=st.T)(r,e,t,n,o,i,u),a.dynCall_iiiiij=(r,e,t,n,o,i,u)=>(a.dynCall_iiiiij=st.U)(r,e,t,n,o,i,u),a.dynCall_iiiiijj=(r,e,t,n,o,i,u,s,l)=>(a.dynCall_iiiiijj=st.V)(r,e,t,n,o,i,u,s,l),a.dynCall_iiiiiijj=(r,e,t,n,o,i,u,s,l,c)=>(a.dynCall_iiiiiijj=st.W)(r,e,t,n,o,i,u,s,l,c),D=function r(){it||ht(),it||(D=r);},a.preInit)for("function"==typeof a.preInit&&(a.preInit=[a.preInit]);a.preInit.length>0;)a.preInit.pop()();return ht(),o},e.exports=n;const o=o$1(a.exports),i=Object.freeze(Object.defineProperty({__proto__:null,default:o},Symbol.toStringTag,{value:"Module"}));

export { i as l };