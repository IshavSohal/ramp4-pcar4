import { G as x$2, ew as c$1, al as u$1, J as s$1, ay as e, be as W, ie as w$1, dn as g$1, s, dK as I$1, bd as U, fu as o, ig as n, gT as h$1, C as a, fZ as t$2, ih as _$1, aH as u$2, aG as m$1, ii as R$2 } from './main-108906d2.js';
import './preload-helper-a4975f27.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
const l$1=()=>s$1.getLogger("esri.layers.support.ElevationSampler");class m{queryElevation(e){return p(e.clone(),this)}on(){return e()}projectIfRequired(e,t){return h(e,t)}}class c extends m{get spatialReference(){return this.extent.spatialReference}constructor(e,t,i){super(),this.tile=e,this.noDataValue=i;const o=e.tile.extent;this.extent=c$1(o,t.spatialReference),this.extent.zmin=e.zmin,this.extent.zmax=e.zmax,this._aaExtent=o;const a=W(t.spatialReference),r=t.lodAt(e.tile.level).resolution*a;this.demResolution={min:r,max:r};}contains(e){const t=this.projectIfRequired(e,this.spatialReference);return null!=t&&this.containsAt(t.x,t.y)}containsAt(e,t){return w$1(this._aaExtent,e,t)}elevationAt(e,t){if(!this.containsAt(e,t)){const n=this.extent,s=`${n.xmin}, ${n.ymin}, ${n.xmax}, ${n.ymax}`;return l$1().warn("#elevationAt()",`Point used to sample elevation (${e}, ${t}) is outside of the sampler extent (${s})`),this.noDataValue}return this.tile.sample(e,t)??this.noDataValue}}class u extends m{get spatialReference(){return this.extent.spatialReference}constructor(e,t,n){let i;super(),"number"==typeof t?(this.noDataValue=t,i=null):(i=t,this.noDataValue=n),this.samplers=i?e.map((e=>new c(e,i,this.noDataValue))):e;const a=this.samplers[0];if(a){this.extent=a.extent.clone();const{min:e,max:t}=a.demResolution;this.demResolution={min:e,max:t};for(let n=1;n<this.samplers.length;n++){const e=this.samplers[n];this.extent.union(e.extent),this.demResolution.min=Math.min(this.demResolution.min,e.demResolution.min),this.demResolution.max=Math.max(this.demResolution.max,e.demResolution.max);}}else this.extent=c$1(u$1(),i.spatialReference),this.demResolution={min:0,max:0};}elevationAt(e,t){let n,s=!1;for(const i of this.samplers)if(i.containsAt(e,t)&&(s=!0,n=i.elevationAt(e,t),n!==i.noDataValue))return n;return null!=n?n:(s||l$1().warn("#elevationAt()",`Point used to sample elevation (${e}, ${t}) is outside of the sampler`),this.noDataValue)}}function p(e,t){const n=h(e,t.spatialReference);if(!n)return null;switch(e.type){case"point":f(e,n,t);break;case"polyline":x$1(e,n,t);break;case"multipoint":R$1(e,n,t);}return e}function h(e,t){if(null==e)return null;const n=e.spatialReference;if(n.equals(t))return e;const s=g$1(e,t);return s||l$1().error(`Cannot project geometry spatial reference (wkid:${n.wkid}) to elevation sampler spatial reference (wkid:${t.wkid})`),s}function f(e,t,n){e.z=n.elevationAt(t.x,t.y);}function x$1(e,t,n){d.spatialReference=t.spatialReference;const s=e.hasM&&!e.hasZ;for(let i=0;i<e.paths.length;i++){const o=e.paths[i],a=t.paths[i];for(let e=0;e<o.length;e++){const t=o[e],i=a[e];d.x=i[0],d.y=i[1],s&&(t[3]=t[2]),t[2]=n.elevationAt(d.x,d.y);}}e.hasZ=!0;}function R$1(e,t,n){d.spatialReference=t.spatialReference;const s=e.hasM&&!e.hasZ;for(let i=0;i<e.points.length;i++){const o=e.points[i],a=t.points[i];d.x=a[0],d.y=a[1],s&&(o[3]=o[2]),o[2]=n.elevationAt(d.x,d.y);}e.hasZ=!0;}const d=new x$2;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
let t$1 = class t{constructor(t,h){this.data=t,this.safeWidth=.99999999*(t.width-1),this.dx=(t.width-1)/(h[2]-h[0]),this.dy=(t.width-1)/(h[3]-h[1]),this.x0=h[0],this.y1=h[3];}};

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
class t{constructor(t,l=null){if(this.tile=t,null!=l&&null!=t){const e=t.extent;this._samplerData=new t$1(l,e);}}get zmin(){return null!=this._samplerData?this._samplerData.data.minValue:0}get zmax(){return null!=this._samplerData?this._samplerData.data.maxValue:0}get hasNoDataValues(){return !!this._samplerData?.data.hasNoDataValues}sample(a,t){if(null==this._samplerData)return;const{safeWidth:e,data:s,dx:r,dy:n,y1:i,x0:u}=this._samplerData,{width:o,values:m,noDataValue:h}=s,p=l(n*(i-t),0,e),D=l(r*(a-u),0,e),d=Math.floor(p),f=Math.floor(D),_=d*o+f,c=_+o,x=m[_],V=m[c],g=m[_+1],v=m[c+1];if(x!==h&&V!==h&&g!==h&&v!==h){const a=D-f,t=x+(g-x)*a;return t+(V+(v-V)*a-t)*(p-d)}}}function l(a,t,l){return a<t?t:a>l?l:a}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
class T{async queryAll(e,i,n){if(!(e=n&&n.ignoreInvisibleLayers?e.filter((e=>e.visible)):e.slice()).length)throw new s("elevation-query:invalid-layer","Elevation queries require at least one elevation layer to fetch tiles from");const l=v.fromGeometry(i);let s$1=!1;n&&n.returnSampleInfo||(s$1=!0);const o={...R,...n,returnSampleInfo:!0},a=await this.query(e[e.length-1],l,o),r=await this._queryAllContinue(e,a,o);return r.geometry=r.geometry.export(),s$1&&delete r.sampleInfo,r}async query(e,i,n){if(!e)throw new s("elevation-query:invalid-layer","Elevation queries require an elevation layer to fetch tiles from");if(!i||!(i instanceof v)&&"point"!==i.type&&"multipoint"!==i.type&&"polyline"!==i.type)throw new s("elevation-query:invalid-geometry","Only point, polyline and multipoint geometries can be used to query elevation");const l={...R,...n},s$1=new x(e,i.spatialReference,l),o=l.signal;return await e.load({signal:o}),await this._createGeometryDescriptor(s$1,i,o),await this._selectTiles(s$1,o),await this._populateElevationTiles(s$1,o),this._sampleGeometryWithElevation(s$1),this._createQueryResult(s$1,o)}async createSampler(e,i,n){if(!e)throw new s("elevation-query:invalid-layer","Elevation queries require an elevation layer to fetch tiles from");if(!i||"extent"!==i.type)throw new s("elevation-query:invalid-extent","Invalid or undefined extent");const l={...R,...n};return this._createSampler(e,i,l)}async createSamplerAll(e,i,n){if(!(e=n&&n.ignoreInvisibleLayers?e.filter((e=>e.visible)):e.slice()).length)throw new s("elevation-query:invalid-layer","Elevation queries require at least one elevation layer to fetch tiles from");if(!i||"extent"!==i.type)throw new s("elevation-query:invalid-extent","Invalid or undefined extent");const l={...R,...n,returnSampleInfo:!0},s$1=await this._createSampler(e[e.length-1],i,l);return this._createSamplerAllContinue(e,i,s$1,l)}async _createSampler(e,t,i,n){const l=i.signal;await e.load({signal:l});const s=t.spatialReference,o=e.tileInfo.spatialReference;s.equals(o)||(await I$1([{source:s,dest:o}],{signal:l}),t=U(t,o));const a=new _(e,t,i,n);return await this._selectTiles(a,l),await this._populateElevationTiles(a,l),new u(a.elevationTiles,a.layer.tileInfo,a.options.noDataValue)}async _createSamplerAllContinue(e,t,i,n){if(e.pop(),!e.length)return i;const l=i.samplers.filter((e=>!e.tile.hasNoDataValues)).map((e=>o(e.extent))),s=await this._createSampler(e[e.length-1],t,n,l);if(0===s.samplers.length)return i;const o$1=i.samplers.concat(s.samplers),a=new u(o$1,n.noDataValue);return this._createSamplerAllContinue(e,t,a,n)}async _queryAllContinue(e,t,n$1){const l=e.pop(),s=t.geometry.coordinates,o=t.sampleInfo;n(o);const a=[],r=[];for(let i=0;i<s.length;i++){const t=o[i];t.demResolution>=0?t.source||(t.source=l):e.length&&(a.push(s[i]),r.push(i));}if(!e.length||0===a.length)return t;const c=t.geometry.clone(a),u=await this.query(e[e.length-1],c,n$1),h=u.sampleInfo;if(!h)throw new Error("no sampleInfo");return r.forEach(((e,t)=>{s[e].z=u.geometry.coordinates[t].z,o[e].demResolution=h[t].demResolution;})),this._queryAllContinue(e,t,n$1)}async _createQueryResult(e,t){const n$1=await e.geometry.project(e.outSpatialReference,t);n(n$1);const l={geometry:n$1.export(),noDataValue:e.options.noDataValue};return e.options.returnSampleInfo&&(l.sampleInfo=this._extractSampleInfo(e)),e.geometry.coordinates.forEach((e=>{e.tile=null,e.elevationTile=null;})),l}async _createGeometryDescriptor(e,i,n){let l;const s$1=e.layer.tileInfo.spatialReference;if(i instanceof v?l=await i.project(s$1,n):(await I$1([{source:i.spatialReference,dest:s$1}],{signal:n}),l=U(i,s$1)),!l)throw new s("elevation-query:spatial-reference-mismatch",`Cannot query elevation in '${i.spatialReference.wkid}' on an elevation service in '${s$1.wkid}'`);e.geometry=v.fromGeometry(l);}async _selectTiles(e,i){"geometry"===e.type&&this._preselectOutsideLayerExtent(e);const n=e.options.demResolution;if("number"==typeof n)this._selectTilesClosestResolution(e,n);else if("finest-contiguous"===n)await this._selectTilesFinestContiguous(e,i);else {if("auto"!==n)throw new s("elevation-query:invalid-dem-resolution",`Invalid dem resolution value '${n}', expected a number, "finest-contiguous" or "auto"`);await this._selectTilesAuto(e,i);}}_preselectOutsideLayerExtent(e){if(null==e.layer.fullExtent)return;const t$1=new t(null);t$1.sample=()=>e.options.noDataValue,e.outsideExtentTile=t$1;const i=e.layer.fullExtent;e.geometry.coordinates.forEach((e=>{const n=e.x,l=e.y;(n<i.xmin||n>i.xmax||l<i.ymin||l>i.ymax)&&(e.elevationTile=t$1);}));}_selectTilesClosestResolution(e,t){const i=this._findNearestDemResolutionLODIndex(e,t);e.selectTilesAtLOD(i);}_findNearestDemResolutionLODIndex(e,t){const{tileInfo:i,tilemapCache:n}=e.layer,l=t/W(i.spatialReference),o=q(i,n);let a=o[0],r=0;for(let s=1;s<o.length;s++){const e=o[s];Math.abs(e.resolution-l)<Math.abs(a.resolution-l)&&(a=e,r=s);}return r}async _selectTilesFinestContiguous(e,t){const{tileInfo:i,tilemapCache:n}=e.layer,l=E(i,n,e.options.minDemResolution);await this._selectTilesFinestContiguousAt(e,l,t);}async _selectTilesFinestContiguousAt(e,i,s$1){const o=e.layer;if(e.selectTilesAtLOD(i),i<0)return;const a$1=o.tilemapCache,r=e.getTilesToFetch();try{if(a$1&&!I(a$1))await h$1(Promise.all(r.map((e=>a$1.fetchAvailability(e.level,e.row,e.col,{signal:s$1})))),s$1);else if(await this._populateElevationTiles(e,s$1),!e.allElevationTilesFetched())throw e.clearElevationTiles(),new s("elevation-query:has-unavailable-tiles")}catch(c){a(c),await this._selectTilesFinestContiguousAt(e,i-1,s$1);}}async _populateElevationTiles(e,t$1){const i=e.getTilesToFetch(),l={},s=e.options.cache,o=e.options.noDataValue,a=i.map((async i=>{if(null==i.id)return;const n=`${e.layer.uid}:${i.id}:${o}`,a=null!=s?s.get(n):null,r=null!=a?a:await e.layer.fetchTile(i.level,i.row,i.col,{noDataValue:o,signal:t$1});null!=s&&s.put(n,r),l[i.id]=new t(i,r);}));await h$1(Promise.allSettled(a),t$1),e.populateElevationTiles(l);}async _selectTilesAuto(t,i){this._selectTilesAutoFinest(t),this._reduceTilesForMaximumRequests(t);const s=t.layer.tilemapCache;if(!s||I(s))return this._selectTilesAutoPrefetchUpsample(t,i);const o=t.getTilesToFetch(),a$1={},r=o.map((async t=>{const n=new t$2(null,0,0,0,u$1()),o=await _$1(s.fetchAvailabilityUpsample(t.level,t.row,t.col,n,{signal:i}));!1!==o.ok?null!=t.id&&(a$1[t.id]=n):a(o.error);}));await h$1(Promise.all(r),i),t.remapTiles(a$1);}_reduceTilesForMaximumRequests(e){const t=e.layer.tileInfo;let i=0;const n={},l=e=>{null!=e.id&&(e.id in n?n[e.id]++:(n[e.id]=1,i++));},s=e=>{if(null==e.id)return;const t=n[e.id];1===t?(delete n[e.id],i--):n[e.id]=t-1;};e.forEachTileToFetch(l,s);let o=!0;for(;o&&(o=!1,e.forEachTileToFetch((n=>{i<=e.options.maximumAutoTileRequests||(s(n),t.upsampleTile(n)&&(o=!0),l(n));}),s),o););}_selectTilesAutoFinest(e){const{tileInfo:t,tilemapCache:i}=e.layer,n=E(t,i,e.options.minDemResolution);e.selectTilesAtLOD(n,e.options.maximumAutoTileRequests);}async _selectTilesAutoPrefetchUpsample(e,t){const i=e.layer.tileInfo;await this._populateElevationTiles(e,t);let n=!1;e.forEachTileToFetch(((e,t)=>{i.upsampleTile(e)?n=!0:t();})),n&&await this._selectTilesAutoPrefetchUpsample(e,t);}_sampleGeometryWithElevation(e){e.geometry.coordinates.forEach((t=>{const i=t.elevationTile;let n=e.options.noDataValue;if(i){const e=i.sample(t.x,t.y);null!=e?n=e:t.elevationTile=null;}t.z=n;}));}_extractSampleInfo(e){const t=e.layer.tileInfo,i=W(t.spatialReference);return e.geometry.coordinates.map((n=>{let l=-1;if(n.elevationTile&&n.elevationTile!==e.outsideExtentTile){l=t.lodAt(n.elevationTile.tile.level).resolution*i;}return {demResolution:l}}))}}class v{export(){return this._exporter(this.coordinates,this.spatialReference)}clone(e){const t=new v;return t.geometry=this.geometry,t.spatialReference=this.spatialReference,t.coordinates=e||this.coordinates.map((e=>e.clone())),t._exporter=this._exporter,t}async project(e,t){if(this.spatialReference.equals(e))return this.clone();await I$1([{source:this.spatialReference,dest:e}],{signal:t});const i=new u$2({spatialReference:this.spatialReference,points:this.coordinates.map((e=>[e.x,e.y]))}),n=U(i,e);if(!n)return null;const l=this.coordinates.map(((e,t)=>{const i=e.clone(),l=n.points[t];return i.x=l[0],i.y=l[1],i})),s=this.clone(l);return s.spatialReference=e,s}static fromGeometry(e){const t=new v;if(t.geometry=e,t.spatialReference=e.spatialReference,e instanceof v)t.coordinates=e.coordinates.map((e=>e.clone())),t._exporter=(t,i)=>{const n=e.clone(t);return n.spatialReference=i,n};else switch(e.type){case"point":{const i=e,{hasZ:n,hasM:l}=i;t.coordinates=n&&l?[new w(i.x,i.y,i.z,i.m)]:n?[new w(i.x,i.y,i.z)]:l?[new w(i.x,i.y,null,i.m)]:[new w(i.x,i.y)],t._exporter=(t,i)=>e.hasM?new x$2(t[0].x,t[0].y,t[0].z,t[0].m,i):new x$2(t[0].x,t[0].y,t[0].z,i);break}case"multipoint":{const i=e,{hasZ:n,hasM:l}=i;t.coordinates=n&&l?i.points.map((e=>new w(e[0],e[1],e[2],e[3]))):n?i.points.map((e=>new w(e[0],e[1],e[2]))):l?i.points.map((e=>new w(e[0],e[1],null,e[2]))):i.points.map((e=>new w(e[0],e[1]))),t._exporter=(t,i)=>e.hasM?new u$2({points:t.map((e=>[e.x,e.y,e.z,e.m])),hasZ:!0,hasM:!0,spatialReference:i}):new u$2(t.map((e=>[e.x,e.y,e.z])),i);break}case"polyline":{const i=e,n=[],l=[],{hasZ:s,hasM:o}=e;let a=0;for(const e of i.paths)if(l.push([a,a+e.length]),a+=e.length,s&&o)for(const t of e)n.push(new w(t[0],t[1],t[2],t[3]));else if(s)for(const t of e)n.push(new w(t[0],t[1],t[2]));else if(o)for(const t of e)n.push(new w(t[0],t[1],null,t[2]));else for(const t of e)n.push(new w(t[0],t[1]));t.coordinates=n,t._exporter=(t,i)=>{const n=e.hasM?t.map((e=>[e.x,e.y,e.z,e.m])):t.map((e=>[e.x,e.y,e.z])),s=l.map((e=>n.slice(e[0],e[1])));return new m$1({paths:s,hasM:e.hasM,hasZ:!0,spatialReference:i})};break}}return t}}class w{constructor(e,t,i=null,n=null,l=null,s=null){this.x=e,this.y=t,this.z=i,this.m=n,this.tile=l,this.elevationTile=s;}clone(){return new w(this.x,this.y,this.z,this.m)}}class g{constructor(e,t){this.layer=e,this.options=t;}}class x extends g{constructor(e,t,i){super(e,i),this.outSpatialReference=t,this.type="geometry";}selectTilesAtLOD(e){if(e<0)this.geometry.coordinates.forEach((e=>e.tile=null));else {const{tileInfo:t,tilemapCache:i}=this.layer,n=q(t,i)[e].level;this.geometry.coordinates.forEach((e=>e.tile=t.tileAt(n,e.x,e.y)));}}allElevationTilesFetched(){return !this.geometry.coordinates.some((e=>!e.elevationTile))}clearElevationTiles(){for(const e of this.geometry.coordinates)e.elevationTile!==this.outsideExtentTile&&(e.elevationTile=null);}populateElevationTiles(e){for(const t of this.geometry.coordinates)!t.elevationTile&&t.tile?.id&&(t.elevationTile=e[t.tile.id]);}remapTiles(e){for(const t of this.geometry.coordinates){const i=t.tile?.id;t.tile=i?e[i]:null;}}getTilesToFetch(){const e={},t=[];for(const i of this.geometry.coordinates){const n=i.tile;if(!n)continue;const l=i.tile?.id;i.elevationTile||!l||e[l]||(e[l]=n,t.push(n));}return t}forEachTileToFetch(e){for(const t of this.geometry.coordinates)t.tile&&!t.elevationTile&&e(t.tile,(()=>{t.tile=null;}));}}class _ extends g{constructor(e,t,i,n){super(e,i),this.type="extent",this.elevationTiles=[],this._candidateTiles=[],this._fetchedCandidates=new Set,this.extent=t.clone().intersection(e.fullExtent),this.maskExtents=n;}selectTilesAtLOD(e,t){const i=this._maximumLodForRequests(t),n=Math.min(i,e);n<0?this._candidateTiles.length=0:this._selectCandidateTilesCoveringExtentAt(n);}_maximumLodForRequests(e){const{tileInfo:t,tilemapCache:i}=this.layer,n=q(t,i);if(!e)return n.length-1;const l=this.extent;if(null==l)return -1;for(let s=n.length-1;s>=0;s--){const i=n[s],o=i.resolution*t.size[0],a=i.resolution*t.size[1];if(Math.ceil(l.width/o)*Math.ceil(l.height/a)<=e)return s}return -1}allElevationTilesFetched(){return this._candidateTiles.length===this.elevationTiles.length}clearElevationTiles(){this.elevationTiles.length=0,this._fetchedCandidates.clear();}populateElevationTiles(e){for(const t of this._candidateTiles){const i=t.id&&e[t.id];i&&(this._fetchedCandidates.add(t),this.elevationTiles.push(i));}}remapTiles(e){this._candidateTiles=this._uniqueNonOverlappingTiles(this._candidateTiles.map((t=>e[t.id])));}getTilesToFetch(){return this._candidateTiles}forEachTileToFetch(e,t){const i=this._candidateTiles;this._candidateTiles=[],i.forEach((i=>{if(this._fetchedCandidates.has(i))return void(t&&t(i));let n=!1;e(i,(()=>n=!0)),n?t&&t(i):this._candidateTiles.push(i);})),this._candidateTiles=this._uniqueNonOverlappingTiles(this._candidateTiles,t);}_uniqueNonOverlappingTiles(e,t){const i={},n=[];for(const s of e){const e=s.id;e&&!i[e]?(i[e]=s,n.push(s)):t&&t(s);}const l=n.sort(((e,t)=>e.level-t.level));return l.filter(((e,i)=>{for(let n=0;n<i;n++){const i=l[n].extent;if(i&&e.extent&&R$2(i,e.extent))return t&&t(e),!1}return !0}))}_selectCandidateTilesCoveringExtentAt(e){this._candidateTiles.length=0;const t=this.extent;if(null==t)return;const{tileInfo:i,tilemapCache:n}=this.layer,l=q(i,n)[e],s=i.tileAt(l.level,t.xmin,t.ymin),o=s.extent;if(null==o)return;const a=l.resolution*i.size[0],r=l.resolution*i.size[1],c=Math.ceil((t.xmax-o[0])/a),u=Math.ceil((t.ymax-o[1])/r);for(let h=0;h<u;h++)for(let e=0;e<c;e++){const t=new t$2(null,s.level,s.row-h,s.col+e);i.updateTileInfo(t),this._tileIsMasked(t)||this._candidateTiles.push(t);}}_tileIsMasked(e){return !!this.maskExtents&&this.maskExtents.some((t=>e.extent&&R$2(t,e.extent)))}}function E(e,t,i=0){const n=q(e,t);let l=n.length-1;if(i>0){const t=i/W(e.spatialReference),o=n.findIndex((e=>e.resolution<t));0===o?l=0:o>0&&(l=o-1);}return l}const R={maximumAutoTileRequests:20,noDataValue:0,returnSampleInfo:!1,demResolution:"auto",minDemResolution:0};function q(e,t){const i=e.lods;if(I(t)){const{effectiveMinLOD:e,effectiveMaxLOD:n}=t;return i.filter((t=>t.level>=e&&t.level<=n))}return i}function I(e){return null!=e?.tileInfo}

export { T as ElevationQuery, v as GeometryDescriptor, E as getFinestLodIndex };