import{c2 as s,cz as m,aY as r}from"./main-DFK8jSbu.js";import{d as c}from"./queryTopFeatures-DdfKQaNl.js";import"./preload-helper-ExcqyqRp.js";async function f(n,o,e){const i=s(n),a=await c(i,m.from(o),{...e}),t=a.data.extent;return!t||isNaN(t.xmin)||isNaN(t.ymin)||isNaN(t.xmax)||isNaN(t.ymax)?{count:a.data.count,extent:null}:{count:a.data.count,extent:r.fromJSON(t)}}export{f as executeForTopExtents};