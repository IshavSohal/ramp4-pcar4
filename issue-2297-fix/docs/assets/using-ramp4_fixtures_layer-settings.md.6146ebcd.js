import{_ as s,o as n,c as a,V as e}from"./chunks/framework.2f70cb37.js";const m=JSON.parse('{"title":"Settings","description":"","frontmatter":{},"headers":[],"relativePath":"using-ramp4/fixtures/layer-settings.md","filePath":"using-ramp4/fixtures/layer-settings.md"}'),l={name:"using-ramp4/fixtures/layer-settings.md"},i=e(`<h1 id="settings" tabindex="-1">Settings <a class="header-anchor" href="#settings" aria-label="Permalink to &quot;Settings&quot;">​</a></h1><h2 id="overview" tabindex="-1">Overview <a class="header-anchor" href="#overview" aria-label="Permalink to &quot;Overview&quot;">​</a></h2><p>The settings fixture displays a panel containing information about a given layer. The settings panel also enables a user to modify layer settings. Settings can be made adjustable or fixed in the <code>config</code>.</p><p>The settings fixture is a default fixture, meaning it will be automatically loaded using a standard configuration.</p><h2 id="configuration" tabindex="-1">Configuration <a class="header-anchor" href="#configuration" aria-label="Permalink to &quot;Configuration&quot;">​</a></h2><p>Unlike most fixtures, the settings fixture is configured separately for each layer in the main configuration file. A very simple configuration file below shows that the legend configuration object should be placed within a layer object, directly under the <code>fixtures</code> property:</p><div class="language- line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">const config = {</span></span>
<span class="line"><span style="color:#A6ACCD;">    layers: [</span></span>
<span class="line"><span style="color:#A6ACCD;">        {</span></span>
<span class="line"><span style="color:#A6ACCD;">            id: &#39;RAMP Layer&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">            layerType: &#39;esri-feature&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">            url: &#39;...&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">            fixtures: {</span></span>
<span class="line"><span style="color:#A6ACCD;">                settings: {</span></span>
<span class="line"><span style="color:#A6ACCD;">                ... layer settings go here ...</span></span>
<span class="line"><span style="color:#A6ACCD;">                }</span></span>
<span class="line"><span style="color:#A6ACCD;">            }</span></span>
<span class="line"><span style="color:#A6ACCD;">        },</span></span>
<span class="line"><span style="color:#A6ACCD;">        ... more layers</span></span>
<span class="line"><span style="color:#A6ACCD;">    ]</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br></div></div><h3 id="properties" tabindex="-1">Properties <a class="header-anchor" href="#properties" aria-label="Permalink to &quot;Properties&quot;">​</a></h3><p>The settings configuration object supports the following two properties:</p><ul><li><code>controls</code>: keeps track of the list of enabled layer controls <ul><li>Visibility (<code>visibility</code>): <em>determines whether layer visibility can be toggled</em></li><li>Opacity (<code>opacity</code>): <em>determines whether layer opacity can be adjusted</em></li><li>Identify (<code>identify</code>): <em>determines whether layer identification can be toggled</em></li></ul></li><li><code>disabledControls</code>: keeps track of the list of disabled layer controls <ul><li>See above</li></ul></li></ul><p>By default, if no <code>settings</code> configuration object is provided within a layer configuration, all layer controls are enabled. There are two ways to disable layer controls:</p><ol><li>Add the <code>disabledControls</code> property to the object as an array with the names for each control (in parenthesis above). The following example demonstrates disabling the visibility and identify controls for the layer item <code>RAMP Layer</code>:</li></ol><div class="language- line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">        id: &#39;RAMP Layer&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">        layerType: &#39;esri-feature&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">        url: &#39;...&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">        fixtures: {</span></span>
<span class="line"><span style="color:#A6ACCD;">            settings: {</span></span>
<span class="line"><span style="color:#A6ACCD;">                disabledControls: [</span></span>
<span class="line"><span style="color:#A6ACCD;">                    &#39;visibility&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">                    &#39;identify&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">                ]</span></span>
<span class="line"><span style="color:#A6ACCD;">            }</span></span>
<span class="line"><span style="color:#A6ACCD;">        }</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div><ol><li>Add the <code>controls</code> property to the object as an array and omit the names of the disabled layers. The next example configures <code>RAMP Layer</code> in the same way as before:</li></ol><div class="language- line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">        id: &#39;RAMP Layer&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">        layerType: &#39;esri-feature&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">        url: &#39;...&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">        fixtures: {</span></span>
<span class="line"><span style="color:#A6ACCD;">            settings: {</span></span>
<span class="line"><span style="color:#A6ACCD;">                controls: [</span></span>
<span class="line"><span style="color:#A6ACCD;">                    &#39;opacity&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">                ]</span></span>
<span class="line"><span style="color:#A6ACCD;">            }</span></span>
<span class="line"><span style="color:#A6ACCD;">        }</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div>`,15),p=[i];function r(t,o,c,d,b,u){return n(),a("div",null,p)}const C=s(l,[["render",r]]);export{m as __pageData,C as default};