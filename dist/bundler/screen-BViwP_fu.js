import { defineComponent as A, inject as H, ref as O, computed as T, reactive as C, onMounted as j, watch as R, onBeforeUnmount as X, resolveComponent as V, openBlock as l, createBlock as F, withCtx as k, createTextVNode as B, toDisplayString as c, unref as g, createElementBlock as i, createElementVNode as h } from "vue";
import { r as D, G as q } from "./main-BrQ-0Xn5.js";
import "pinia";
import { useI18n as G } from "vue-i18n";
import "screenfull";
import "lodash.clonedeep";
import "vue-tippy";
import "linkify-html";
import "@popperjs/core";
import "@arcgis/core/Color";
import "@arcgis/core/config";
import "@arcgis/core/geometry/Extent";
import "@arcgis/core/geometry/Multipoint";
import "@arcgis/core/geometry/Point";
import "@arcgis/core/geometry/Polygon";
import "@arcgis/core/geometry/Polyline";
import "@arcgis/core/geometry/SpatialReference";
import "@arcgis/core/geometry/support/jsonUtils";
import "@arcgis/core/Graphic";
import "@arcgis/core/request";
import "@arcgis/core/symbols/PictureMarkerSymbol";
import "@arcgis/core/symbols/SimpleFillSymbol";
import "@arcgis/core/symbols/SimpleLineSymbol";
import "@arcgis/core/symbols/SimpleMarkerSymbol";
import "@arcgis/core/symbols/support/jsonUtils";
import "deepmerge";
import "terraformer";
import "proj4";
import "throttle-debounce";
import "terraformer-arcgis-parser";
import "csv2geojson";
import "redaxios";
import "await-to-js";
import "svg.js";
import { marked as U } from "marked";
const Y = `<?xml version="1.0" encoding="UTF-8"?>\r
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
`, z = `<?xml version="1.0" encoding="UTF-8"?>\r
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
`, J = { key: 0 }, K = { class: "flex justify-center" }, Q = {
  key: 0,
  class: "flex flex-col justify-center text-center"
}, W = ["innerHTML"], Z = ["innerHTML"], tt = {
  key: 3,
  class: "flex flex-col justify-center text-center"
}, et = { class: "text-xl mt-20" }, nt = {
  key: 1,
  class: "p-5"
}, Rt = /* @__PURE__ */ A({
  __name: "screen",
  props: {
    panel: {
      type: Object,
      required: !0
    },
    payload: {
      type: Object,
      required: !0
    }
  },
  setup(s) {
    const a = D(), { t: o } = G(), u = H("iApi"), M = O(), r = s, f = T(() => a.status), v = T(() => a.response), b = O(!1), x = C({}), y = C([]), S = C([]);
    j(() => {
      $(), y.push(
        u.event.on(q.LAYER_REMOVE, (t) => {
          r.payload.layer?.uid === t.uid && r.panel.close();
        })
      ), S.push(
        R(
          () => r.payload.layer.uid,
          (t, e) => {
            t !== e && $();
          }
        )
      );
    }), X(() => {
      y.forEach((t) => u.event.off(t)), S.forEach((t) => t());
    });
    const $ = () => {
      b.value = r.payload.layer !== void 0 && !r.payload.layer.isRemoved, r.payload.type === "xml" ? I(r.payload.url, []).then((t) => {
        if (a.status = "success", t !== null) {
          const e = document.createElement("div");
          e.appendChild(p(`${t.firstElementChild.outerHTML}`)), (r.payload.catalogueUrl || r.payload.url) && e.appendChild(
            p(`<h5 class="text-xl font-bold mb-3">${o("metadata.xslt.metadata")}</h5>`)
          ), r.payload.catalogueUrl && e.appendChild(
            p(
              `<p><a style="color: blue;" href="${r.payload.catalogueUrl}" target="_blank">${o(
                "metadata.xslt.cataloguePage"
              )}</a></p>`
            )
          ), e.appendChild(
            p(
              `<p><a style="color: blue;" href="${r.payload.url}" target="_blank">${o(
                "metadata.xslt.metadataPage"
              )}</a> (xml)</p>`
            )
          ), a.response = e.outerHTML;
        }
      }) : r.payload.type === "html" ? w(r.payload.url).then((t) => {
        a.status = t.status, a.response = t.response;
      }) : r.payload.type === "md" && w(r.payload.url).then((t) => {
        a.status = t.status, a.response = U(t.response);
      });
    }, I = (t, e) => {
      let n = u.language === "en" ? Y : z;
      return n = n.replace(/\{\{([\w.]+)\}\}/g, (d, m) => o(m)), x[t] ? Promise.resolve(_(x[t], n, e)) : w(t).then((d) => (x[t] = d.response, _(x[t], n, e)));
    }, _ = (t, e, n) => {
      let d = null;
      if (window.XSLTProcessor) {
        const m = new window.XSLTProcessor(), L = new DOMParser(), N = L.parseFromString(t, "text/xml"), E = L.parseFromString(e, "text/xml");
        m.importStylesheet(E), n && n.forEach((P) => m.setParameter("", P.key, P.value || "")), d = m.transformToFragment(N, document);
      }
      return d;
    }, w = (t) => new Promise((e) => {
      const n = new XMLHttpRequest();
      n.open("GET", t, !0), n.responseType = "text", n.onload = () => {
        n.status === 200 ? e({ status: "success", response: n.response }) : e({
          status: "error",
          response: "Could not load results from remote service."
        });
      }, n.onerror = () => {
        e({
          status: "error",
          response: "Could not load results from remote service."
        });
      }, n.send();
    });
    function p(t) {
      const e = document.createElement("div");
      return e.innerHTML = t, e;
    }
    return (t, e) => {
      const n = V("panel-screen");
      return l(), F(n, {
        panel: s.panel,
        ref_key: "el",
        ref: M
      }, {
        header: k(() => [
          B(c(g(o)("metadata.title")) + ": " + c(s.payload.layerName), 1)
        ]),
        content: k(() => [
          b.value ? (l(), i("div", J, [
            h("div", K, [
              f.value == "loading" ? (l(), i("div", Q, c(g(o)("metadata.loading")), 1)) : s.payload.type === "xml" && f.value == "success" ? (l(), i("div", {
                key: 1,
                innerHTML: v.value,
                class: "flex flex-col justify-center xml-content"
              }, null, 8, W)) : (s.payload.type === "html" || s.payload.type === "md") && f.value == "success" ? (l(), i("div", {
                key: 2,
                innerHTML: v.value,
                class: "flex flex-col justify-center max-w-full metadata-view"
              }, null, 8, Z)) : (l(), i("div", tt, [
                e[0] || (e[0] = h("img", { src: "https://i.imgur.com/fA5EqV6.png" }, null, -1)),
                h("span", et, c(g(o)("metadata.error")), 1)
              ]))
            ])
          ])) : (l(), i("div", nt, [
            h("span", null, c(g(o)("metadata.label.no.layer")), 1)
          ]))
        ]),
        _: 1
      }, 8, ["panel"]);
    };
  }
});
export {
  Rt as default
};
