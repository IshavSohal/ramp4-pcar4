import{a as o}from"./fabric-rFEJzaiI.js";import{bl as n}from"./main-Bw8nB3u2.js";import"./preload-helper-ExcqyqRp.js";class p extends n{get config(){return this.$iApi.fixture.get("export").config?.map}async make(e){const a=await this.$iApi.geo.map.takeScreenshot({quality:1,format:"png"}),t=new Image;t.src=a.dataUrl;const r=await new Promise(i=>t.onload=()=>i(t));return new o.fabric.Image(r,e)}}export{p as default};