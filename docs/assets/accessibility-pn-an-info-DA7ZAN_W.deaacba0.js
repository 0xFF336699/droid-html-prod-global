import"./_commonjsHelpers-B-UnjaXt.js";import{l as f}from"./proxyWatch-DGo6tDfm.js";import{W as L,A,i as D,c as j,g as _,l as O}from"./AutoWebViewJs-tVZbAsSC.js";const y={scriptPlaceholder:"____script@@Holder____",unShell:F,callScript:R,createPlaceholder:N};function N(e){return`~!@#$${e}%^&*(`}function F(e){const t=e.indexOf("{");return e.slice(t+1,e.length-1)}function R(e){if(!L.instance.isInApp)return;const t=f.merge({},e),o=t.injects||[],c=[];for(let i=0;i<o.length;i++){const l=o[i];let s;f.isArray(l)?s=l:f.isString(l)?s=[l]:f.isObject(l)&&(s=[l.name,l.alias]),c.push(s)}t.injects=c;const r=JSON.stringify(t);return A.instance.callScriptRunner(r)}const a=new A;async function W(){D(),j();const e="htmls/pages/accessibility-pn-an-info/content",t=await _(e),o=await O(e,"content.title");a.init(),document.title=o,G(t)}W();function G(e){const t=document.getElementById("pn"),o=document.getElementById("an"),c=document.getElementById("cls"),r=document.getElementById("closeBtn"),i=document.getElementById("useBtn"),l=document.getElementById("lpn"),s=document.getElementById("lan"),w=document.getElementById("lan"),d=document.getElementById("apn"),g=document.getElementById("aan"),p=document.getElementById("acn");if(!t||!o||!c||!r||!i||!l||!s||!w||!d||!g||!p){console.log(`!inputPn=${!t}, !inputAn=${!o}, !inputCls=${!c}, !closeBtn=${!r}, !useBtn=${!i}, !lpn=${!l}, !lan=${!s}, !lcls=${!w}, !buttonPn=${!d}, !buttonAn=${g}, !buttonCn=${!p}`);return}l.innerText=e("content.pnLabel"),s.innerText=e("content.anLabel"),w.innerText=e("content.clsLable"),r.innerText=e("content.closeBtn"),i.innerText=e("content.useBtn"),d.innerText=e("content.copyButtonText"),d.onclick=function(){a.clipboardSetText(t.value)},g.innerText=e("content.copyButtonText"),g.onclick=function(){a.clipboardSetText(o.value)},p.innerText=e("content.copyButtonText"),p.onclick=function(){a.clipboardSetText(c.value)};const T=a.callJavaToJsDataString(),b=JSON.parse(T.javaResultString||"{}");r.onclick=function(){h()};function h(){a.onJsCallEvent("callExit",""),a.callExitFromJs()}i.onclick=function(){console.log("[pn-an-info] useBtn clicked"),console.log("[pn-an-info] callJavaToJsData.eventType =",b.eventType),console.log("[pn-an-info] inputPn.value =",t.value),console.log("[pn-an-info] inputAn.value =",o.value),console.log("[pn-an-info] inputCls.value =",c.value);const n=`
        com.fanfanlo.droidlib.auto.nodeoverlay.NodeOverlayController.confirmPnAnCnSelect('${b.eventType}')
        `;console.log("[pn-an-info] calling NodeOverlayController.confirmPnAnCnSelect with script:",n);const u={injects:[],script:n};y.callScript(u),console.log("[pn-an-info] script called")},console.log(4);const v=a.webViewJsId().javaResultString||"id failed",C="onSetPackage",E="eventLastPackageChanged",B="onLastPackageChanged",m="onSetActivity",J="onSetClass";k();function k(){a.listen("a11yModel",E,"onLastPackageChanged",!1)}console.log(5),window.global||(console.log(5.5),window.global=window);const $=window;console.log(6),$.onCallJsEvent=window.global.onCallJsEvent=function(n){if(console.log("global.onCallJsEvent-fn",n),!!n)switch(n.type){case C:x(n.data);break;case B:S();break;case m:I(n.data);break;case J:P(n.data);break;default:console.log("uuuuuuuuuuuuuuuuuunknow event")}},console.log("global=",window.global),console.log("window=",window);function x(n){t.value=n}function I(n){o.value=n}function P(n){c.value=n}S();function S(){const n=`
        var pn = a11yModel.nowApplicationPackageName;
        webViewJs.callJsEvent("${C}", pn, ${v});
        `,u={injects:[["webViewJs"],["a11yModel"]],script:n};y.callScript(u)}M();function M(){const n=`
        // a11yModel.listenDomainData(com.fanfanlo.droidlib.auto.service.accessibility.A11yModel.Companion.eventLastFullScreenActivityChanged, webViewJs, function(e){
        //     var an = a11yModel.lastFullScreenActivity;
        //     webViewJs.callJsEvent("${m}", an, ${v});
        // });
        a11yModel.listenDomainData(com.fanfanlo.droidlib.auto.service.accessibility.A11yModel.Companion.eventLastFullScreenActivityChanged, webViewJs, onActivityChange);
        onActivityChange(null);
        function onActivityChange(e){
            var an = a11yModel.lastFullScreenActivity;
            webViewJs.callJsEvent("${m}", an, ${v});
        }
        `,u={injects:[["webViewJs"],{name:"a11yModel",alias:"a11yModel"}],script:n};y.callScript(u)}V();function V(){const n=`
       
        a11yModel.listenDomainData(com.fanfanlo.droidlib.auto.service.accessibility.A11yModel.Companion.eventAppWindowRefresh, webViewJs, onClassChange);
        onClassChange(null);
        function onClassChange(e){
            var cls = a11yModel.lastClassName;
            webViewJs.callJsEvent("${J}", cls, ${v});
        }
        `,u={injects:[["webViewJs"],{name:"a11yModel",alias:"a11yModel"}],script:n};y.callScript(u)}a.onDocumentReady(),console.log(7)}
