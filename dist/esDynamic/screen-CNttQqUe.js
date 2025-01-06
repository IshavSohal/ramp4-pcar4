import{dM as H,fa as A,dN as R,e2 as j,e3 as T,dQ as _,gd as C,e8 as V,dE as X,e7 as U,e9 as F,dR as q,dV as D,dW as k,dU as o,ea as B,d$ as c,e0 as p,dY as d,dX as h}from"./main-BNhf_Hlc.js";import{m as Y}from"./marked.esm-DgqJBp_S.js";const G=`<?xml version="1.0" encoding="UTF-8"?>\r
<xsl:stylesheet version="1.0"\r
                xmlns:xsl="http://www.w3.org/1999/XSL/Transform"\r
                xmlns:gmd="http://www.isotc211.org/2005/gmd"\r
                xmlns:gco="http://www.isotc211.org/2005/gco"\r
                xmlns:xlink="http://www.w3.org/1999/xlink"\r
                xmlns:gmdl="http://www.canada.gc.ca/ns/gmdl"\r
                xmlns:napec="http://www.ec.gc.ca/data_donnees/standards/schemas/napec"\r
                xmlns:gml="http://www.opengis.net/gml"\r
                xmlns:geonet="http://www.fao.org/geonetwork"\r
                xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"\r
                xsi:schemaLocation="http://www.ec.gc.ca/data_donnees/standards/schemas/napec/schema.xsd">\r
\r
  <xsl:param name="catalogue_url" />\r
  <xsl:decimal-format NaN=""/>\r
\r
  <xsl:template match="/">\r
\r
    <div class="metadata-view">\r
\r
      <xsl:if test="//gmd:abstract/gco:CharacterString/text() != ''">\r
        <h5 class="text-xl font-bold mb-3">{{metadata.xslt.Abstract}}</h5>\r
        <p>\r
          <xsl:value-of select="//gmd:abstract/gco:CharacterString/text()" />\r
        </p>\r
      </xsl:if>\r
\r
      <xsl:comment>\r
        <h5 class="text-xl font-bold mb-3">{{metadata.xslt.Scope}}</h5>\r
        <p>{{metadata.xslt.hereBeScope}}</p>\r
      </xsl:comment>\r
\r
      <xsl:if test="//gml:TimePeriod//* != ''">\r
        <h5 class="text-xl font-bold mb-3">{{metadata.xslt.timePeriod}}</h5>\r
        <p>\r
          <xsl:value-of select="//gml:TimePeriod//gml:beginPosition" />\r
          <xsl:if test="//gml:TimePeriod//gml:beginPosition/text() != '' and //gml:TimePeriod//gml:endPosition/text() != ''">\r
            -\r
          </xsl:if>\r
          <xsl:value-of select="//gml:TimePeriod//gml:endPosition" />\r
        </p>\r
      </xsl:if>\r
\r
      <xsl:comment>\r
        <xsl:if test="//gmd:supplementalInformation/gco:CharacterString/text() != ''">\r
          <h5 class="text-xl font-bold mb-3">{{metadata.xslt.supplementalData}}</h5>\r
          <p>\r
            <xsl:value-of select="//gmd:supplementalInformation/gco:CharacterString/text()" />\r
          </p>\r
        </xsl:if>\r
      </xsl:comment>\r
\r
      <xsl:if test="//gmd:pointOfContact//gmd:individualName/* != '' \r
              or //gmd:pointOfContact//gmd:organisationName/gco:CharacterString/text() != ''\r
              or //gmd:pointOfContact//gmd:positionName/gco:CharacterString/text() != ''\r
              or //gmd:pointOfContact//gmd:electronicMailAddress/* != ''\r
              or //gmd:pointOfContact//gmd:role/gmd:CI_RoleCode/@codeListValue != ''">\r
        <h5 class="text-xl font-bold mb-3">{{metadata.xslt.contactInfo}}</h5>\r
        <p>\r
          <xsl:value-of select="//gmd:pointOfContact//gmd:individualName" />\r
        </p>\r
        <p>\r
          <xsl:value-of select="//gmd:pointOfContact//gmd:organisationName/gco:CharacterString/text()" />\r
        </p>\r
        <p>\r
          <xsl:value-of select="//gmd:pointOfContact//gmd:positionName/gco:CharacterString/text()" />\r
        </p>\r
        <p>\r
          <a href="mailto:{//gmd:pointOfContact//gmd:electronicMailAddress/gco:CharacterString/text()}?Subject={//gmd:identificationInfo//gmd:title/gco:CharacterString/text()}">\r
            <xsl:value-of select="//gmd:pointOfContact//gmd:electronicMailAddress" />\r
          </a>\r
        </p>\r
        <p>\r
          <xsl:variable name="roleCode" >\r
            <xsl:value-of select="concat(substring(//gmd:pointOfContact//gmd:role/gmd:CI_RoleCode/@codeListValue,1,1),\r
                        substring(//gmd:pointOfContact//gmd:role/gmd:CI_RoleCode/@codeListValue, 2))" />\r
          </xsl:variable>\r
\r
          <xsl:choose>\r
            <xsl:when test="$roleCode = 'resourceProvider'">{{metadata.xslt.resourceProvider}}</xsl:when>\r
            <xsl:when test="$roleCode = 'custodian'">{{metadata.xslt.custodian}}</xsl:when>\r
            <xsl:when test="$roleCode = 'owner'">{{metadata.xslt.owner}}</xsl:when>\r
            <xsl:when test="$roleCode = 'user'">{{metadata.xslt.user}}</xsl:when>\r
            <xsl:when test="$roleCode = 'distributor'">{{metadata.xslt.distributor}}</xsl:when>\r
            <xsl:when test="$roleCode = 'originator'">{{metadata.xslt.originator}}</xsl:when>\r
            <xsl:when test="$roleCode = 'pointOfContact'">{{metadata.xslt.pointOfContact}}</xsl:when>\r
            <xsl:when test="$roleCode = 'principalInvestigator'">{{metadata.xslt.principalInvestigator}}</xsl:when>\r
            <xsl:when test="$roleCode = 'processor'">{{metadata.xslt.processor}}</xsl:when>\r
            <xsl:when test="$roleCode = 'publisher'">{{metadata.xslt.publisher}}</xsl:when>\r
            <xsl:when test="$roleCode = 'author'">{{metadata.xslt.author}}</xsl:when>\r
            <xsl:when test="$roleCode = 'collaborator'">{{metadata.xslt.collaborator}}</xsl:when>\r
            <xsl:when test="$roleCode = 'editor'">{{metadata.xslt.editor}}</xsl:when>\r
            <xsl:when test="$roleCode = 'mediator'">{{metadata.xslt.mediator}}</xsl:when>\r
            <xsl:when test="$roleCode = 'rightsHolder'">{{metadata.xslt.rightsHolder}}</xsl:when>\r
          </xsl:choose>\r
        </p>\r
      </xsl:if>\r
\r
      <xsl:if test="$catalogue_url != ''">\r
        <h5 class="text-xl font-bold mb-3">{{metadata.xslt.cataloguePage}}</h5>\r
        <p>\r
          <a href="{$catalogue_url}"\r
             rel="external" target="_blank" class="ui-link">\r
            {{metadata.xslt.metadata}}\r
          </a>\r
        </p>\r
      </xsl:if>\r
    </div>\r
  </xsl:template>\r
</xsl:stylesheet>\r
`,Q=`<?xml version="1.0" encoding="UTF-8"?>\r
<xsl:stylesheet version="1.0"\r
                xmlns:xsl="http://www.w3.org/1999/XSL/Transform"\r
                xmlns:gmd="http://www.isotc211.org/2005/gmd"\r
                xmlns:gco="http://www.isotc211.org/2005/gco"\r
                xmlns:xlink="http://www.w3.org/1999/xlink"\r
                xmlns:gmdl="http://www.canada.gc.ca/ns/gmdl"\r
                xmlns:napec="http://www.ec.gc.ca/data_donnees/standards/schemas/napec"\r
                xmlns:gml="http://www.opengis.net/gml"\r
                xmlns:geonet="http://www.fao.org/geonetwork"\r
                xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"\r
                xsi:schemaLocation="http://www.ec.gc.ca/data_donnees/standards/schemas/napec/schema.xsd">\r
\r
  <xsl:param name="catalogue_url" />\r
  <xsl:decimal-format NaN=""/>\r
\r
  <xsl:template match="/">\r
\r
    <div class="metadata-view">\r
\r
      <xsl:if test="//gmd:abstract//gmd:LocalisedCharacterString[@locale='#fra']/text() != ''">\r
        <h5 class="text-xl font-bold mb-3">{{metadata.xslt.Abstract}}</h5>\r
        <p>\r
          <xsl:value-of select="//gmd:abstract//gmd:LocalisedCharacterString[@locale='#fra']/text()" />\r
        </p>\r
      </xsl:if>\r
\r
      <xsl:comment>\r
        <h5 class="text-xl font-bold mb-3">{{metadata.xslt.Scope}}</h5>\r
        <p>{{metadata.xslt.hereBeScope}}</p>\r
      </xsl:comment>\r
\r
      <xsl:if test="//gml:TimePeriod//* != ''">\r
        <h5 class="text-xl font-bold mb-3">{{metadata.xslt.timePeriod}}</h5>\r
        <p>\r
          <xsl:value-of select="//gml:TimePeriod//gml:beginPosition" />\r
          <xsl:if test="//gml:TimePeriod//gml:beginPosition/text() != '' and //gml:TimePeriod//gml:endPosition/text() != ''">\r
            -\r
          </xsl:if>\r
          <xsl:value-of select="//gml:TimePeriod//gml:endPosition" />\r
        </p>\r
      </xsl:if>\r
\r
      <xsl:comment>\r
        <xsl:if test="//gmd:supplementalInformation//gmd:LocalisedCharacterString[@locale='#fra']/text() != ''">\r
          <h5 class="text-xl font-bold mb-3">{{metadata.xslt.supplementalData}}</h5>\r
          <p>\r
            <xsl:value-of select="//gmd:supplementalInformation//gmd:LocalisedCharacterString[@locale='#fra']/text()" />\r
          </p>\r
        </xsl:if>\r
      </xsl:comment>\r
\r
      <xsl:if test="//gmd:pointOfContact//gmd:individualName/* != '' \r
              or //gmd:pointOfContact//gmd:organisationName//gmd:LocalisedCharacterString[@locale='#fra']/text() != ''\r
              or //gmd:pointOfContact//gmd:positionName//gmd:LocalisedCharacterString[@locale='#fra']/text() != ''\r
              or //gmd:pointOfContact//gmd:electronicMailAddress/* != ''\r
              or //gmd:pointOfContact//gmd:role/gmd:CI_RoleCode/@codeListValue != ''">\r
        <h5 class="text-xl font-bold mb-3">{{metadata.xslt.contactInfo}}</h5>\r
        <p>\r
          <xsl:value-of select="//gmd:pointOfContact//gmd:individualName" />\r
        </p>\r
        <p>\r
          <xsl:value-of select="//gmd:pointOfContact//gmd:organisationName//gmd:LocalisedCharacterString[@locale='#fra']/text()" />\r
        </p>\r
        <p>\r
          <xsl:value-of select="//gmd:pointOfContact//gmd:positionName//gmd:LocalisedCharacterString[@locale='#fra']/text()" />\r
        </p>\r
        <p>\r
          <a href="mailto:{//gmd:pointOfContact//gmd:electronicMailAddress//gmd:LocalisedCharacterString[@locale='#fra']/text()}?Subject={//gmd:identificationInfo//gmd:title//gmd:LocalisedCharacterString[@locale='#fra']/text()}">\r
            <xsl:value-of select="//gmd:pointOfContact//gmd:electronicMailAddress" />\r
          </a>\r
        </p>\r
        <p>\r
          <xsl:variable name="roleCode" >\r
            <xsl:value-of select="concat(substring(//gmd:pointOfContact//gmd:role/gmd:CI_RoleCode/@codeListValue,1,1),\r
                        substring(//gmd:pointOfContact//gmd:role/gmd:CI_RoleCode/@codeListValue, 2))" />\r
          </xsl:variable>\r
\r
          <xsl:choose>\r
            <xsl:when test="$roleCode = 'resourceProvider'">{{metadata.xslt.resourceProvider}}</xsl:when>\r
            <xsl:when test="$roleCode = 'custodian'">{{metadata.xslt.custodian}}</xsl:when>\r
            <xsl:when test="$roleCode = 'owner'">{{metadata.xslt.owner}}</xsl:when>\r
            <xsl:when test="$roleCode = 'user'">{{metadata.xslt.user}}</xsl:when>\r
            <xsl:when test="$roleCode = 'distributor'">{{metadata.xslt.distributor}}</xsl:when>\r
            <xsl:when test="$roleCode = 'originator'">{{metadata.xslt.originator}}</xsl:when>\r
            <xsl:when test="$roleCode = 'pointOfContact'">{{metadata.xslt.pointOfContact}}</xsl:when>\r
            <xsl:when test="$roleCode = 'principalInvestigator'">{{metadata.xslt.principalInvestigator}}</xsl:when>\r
            <xsl:when test="$roleCode = 'processor'">{{metadata.xslt.processor}}</xsl:when>\r
            <xsl:when test="$roleCode = 'publisher'">{{metadata.xslt.publisher}}</xsl:when>\r
            <xsl:when test="$roleCode = 'author'">{{metadata.xslt.author}}</xsl:when>\r
            <xsl:when test="$roleCode = 'collaborator'">{{metadata.xslt.collaborator}}</xsl:when>\r
            <xsl:when test="$roleCode = 'editor'">{{metadata.xslt.editor}}</xsl:when>\r
            <xsl:when test="$roleCode = 'mediator'">{{metadata.xslt.mediator}}</xsl:when>\r
            <xsl:when test="$roleCode = 'rightsHolder'">{{metadata.xslt.rightsHolder}}</xsl:when>\r
          </xsl:choose>\r
        </p>\r
      </xsl:if>\r
\r
      <xsl:if test="$catalogue_url != ''">\r
        <h5 class="text-xl font-bold mb-3">{{metadata.xslt.cataloguePage}}</h5>\r
        <p>\r
          <a href="{$catalogue_url}"\r
             rel="external" target="_blank" class="ui-link">\r
            {{metadata.xslt.metadata}}\r
          </a>\r
        </p>\r
      </xsl:if>\r
    </div>\r
  </xsl:template>\r
</xsl:stylesheet>\r
`,W={key:0},z={class:"flex justify-center"},J={key:0,class:"flex flex-col justify-center text-center"},K=["innerHTML"],Z=["innerHTML"],ee={key:3,class:"flex flex-col justify-center text-center"},te={class:"text-xl mt-20"},ae={key:1,class:"p-5"},re=H({__name:"screen",props:{panel:{type:Object,required:!0},payload:{type:Object,required:!0}},setup(n){const l=A(),{t:s}=R(),u=j("iApi"),M=T(),r=n,f=_(()=>l.status),v=_(()=>l.response),b=T(!1),x=C({}),y=C([]),$=C([]);V(()=>{S(),y.push(u.event.on(X.LAYER_REMOVE,e=>{r.payload.layer?.uid===e.uid&&r.panel.close()})),$.push(U(()=>r.payload.layer.uid,(e,t)=>{e!==t&&S()}))}),F(()=>{y.forEach(e=>u.event.off(e)),$.forEach(e=>e())});const S=()=>{b.value=r.payload.layer!==void 0&&!r.payload.layer.isRemoved,r.payload.type==="xml"?I(r.payload.url,[]).then(e=>{if(l.status="success",e!==null){const t=document.createElement("div");t.appendChild(g(`${e.firstElementChild.outerHTML}`)),(r.payload.catalogueUrl||r.payload.url)&&t.appendChild(g(`<h5 class="text-xl font-bold mb-3">${s("metadata.xslt.metadata")}</h5>`)),r.payload.catalogueUrl&&t.appendChild(g(`<p><a style="color: blue;" href="${r.payload.catalogueUrl}" target="_blank">${s("metadata.xslt.cataloguePage")}</a></p>`)),t.appendChild(g(`<p><a style="color: blue;" href="${r.payload.url}" target="_blank">${s("metadata.xslt.metadataPage")}</a> (xml)</p>`)),l.response=t.outerHTML}}):r.payload.type==="html"?w(r.payload.url).then(e=>{l.status=e.status,l.response=e.response}):r.payload.type==="md"&&w(r.payload.url).then(e=>{l.status=e.status,l.response=Y(e.response)})},I=(e,t)=>{let a=u.language==="en"?G:Q;return a=a.replace(/\{\{([\w.]+)\}\}/g,(i,m)=>s(m)),x[e]?Promise.resolve(L(x[e],a,t)):w(e).then(i=>(x[e]=i.response,L(x[e],a,t)))},L=(e,t,a)=>{let i=null;if(window.XSLTProcessor){const m=new window.XSLTProcessor,O=new DOMParser,N=O.parseFromString(e,"text/xml"),E=O.parseFromString(t,"text/xml");m.importStylesheet(E),a&&a.forEach(P=>m.setParameter("",P.key,P.value||"")),i=m.transformToFragment(N,document)}return i},w=e=>new Promise(t=>{const a=new XMLHttpRequest;a.open("GET",e,!0),a.responseType="text",a.onload=()=>{a.status===200?t({status:"success",response:a.response}):t({status:"error",response:"Could not load results from remote service."})},a.onerror=()=>{t({status:"error",response:"Could not load results from remote service."})},a.send()});function g(e){const t=document.createElement("div");return t.innerHTML=e,t}return(e,t)=>{const a=q("panel-screen");return o(),D(a,{panel:n.panel,ref_key:"el",ref:M},{header:k(()=>[B(c(p(s)("metadata.title"))+": "+c(n.payload.layerName),1)]),content:k(()=>[b.value?(o(),d("div",W,[h("div",z,[f.value=="loading"?(o(),d("div",J,c(p(s)("metadata.loading")),1)):n.payload.type==="xml"&&f.value=="success"?(o(),d("div",{key:1,innerHTML:v.value,class:"flex flex-col justify-center xml-content"},null,8,K)):(n.payload.type==="html"||n.payload.type==="md")&&f.value=="success"?(o(),d("div",{key:2,innerHTML:v.value,class:"flex flex-col justify-center max-w-full metadata-view"},null,8,Z)):(o(),d("div",ee,[t[0]||(t[0]=h("img",{src:"https://i.imgur.com/fA5EqV6.png"},null,-1)),h("span",te,c(p(s)("metadata.error")),1)]))])])):(o(),d("div",ae,[h("span",null,c(p(s)("metadata.label.no.layer")),1)]))]),_:1},8,["panel"])}}});export{re as default};
