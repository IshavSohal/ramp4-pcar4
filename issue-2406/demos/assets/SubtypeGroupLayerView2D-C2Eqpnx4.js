import{bw as a,by as n,cf as d,cg as u,Q as l}from"./main-BdYDOcNT.js";import{r as g}from"./FeatureLayerView2D-CfexAmsR.js";import"./preload-helper-ExcqyqRp.js";import"./Container-BqsU0nXB.js";import"./timeSupport-DOzzNEzp.js";import"./LayerView-D-6zoD_P.js";import"./layerViewUtils-COrn2uIG.js";import"./TechniqueInstance-CUcM8e0F.js";import"./UpdateTracking2D-C-EdWDwo.js";import"./BidiEngine-DNnuvc1i.js";import"./GeometryUtils-BSTexdO_.js";import"./Rect-CUzevAry.js";import"./LabelMetric-B-dRqvc7.js";import"./Program-BUK66osI.js";import"./BufferObject-uF8W19me.js";import"./VertexElementDescriptor-BOD-G50G.js";import"./BindType-BmZEZMMh.js";import"./Util-DSf1IGXU.js";import"./TileContainer-DhgzTxmI.js";import"./WGLContainer-tRvHye2Q.js";import"./VertexArrayObject-CE7GEbjw.js";import"./ProgramTemplate-DYdDNu9T.js";import"./vec3f32-nZdmKIgz.js";import"./StyleDefinition-DdcTz6Fk.js";import"./config-MDUrh2eL.js";import"./earcut-Lltz9D9k.js";import"./FeatureCommandQueue-DmO0OSMr.js";import"./constants-F8oTIn7N.js";import"./CircularArray-CujHzHWW.js";import"./SDFHelper-D7MnBd6o.js";import"./floatRGBA-KtcIUGAz.js";import"./HighlightCounter-Czi-fdpx.js";import"./popupUtils-C89k8Aac.js";import"./RefreshableLayerView-CI63PF6_.js";let i=class extends g{initialize(){this.addHandles([d(()=>this.view.scale,()=>this._update(),u)],"constructor")}isUpdating(){const t=this.layer.sublayers.some(s=>s.renderer!=null),r=this._commandsQueue.updateTracking.updating,o=this._updatingRequiredFieldsPromise!=null,p=!this._workerProxy,e=this.dataUpdating,m=t&&(r||o||p||e);return l("esri-2d-log-updating")&&console.log(`Updating FLV2D: ${m}
  -> hasRenderer ${t}
  -> hasPendingCommand ${r}
  -> updatingRequiredFields ${o}
  -> updatingProxy ${p}
  -> updatingPipeline ${e}
`),m}};i=a([n("esri.views.2d.layers.SubtypeGroupLayerView2D")],i);const N=i;export{N as default};