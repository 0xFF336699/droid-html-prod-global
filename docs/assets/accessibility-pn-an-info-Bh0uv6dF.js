import"./_commonjsHelpers-B-UnjaXt.js";import{W as L,l as y,A as S,i as D,c as j,g as _,a as O}from"./AutoWebViewJs-Dd6EJXHO.js";const b={scriptPlaceholder:"____script@@Holder____",unShell:F,callScript:N,createPlaceholder:W};function W(n){return`~!@#$${n}%^&*(`}function F(n){const t=n.indexOf("{");return n.slice(t+1,n.length-1)}function N(n){if(!L.instance.isInApp)return;const t=y.merge({},n),o=t.injects||[],l=[];for(let i=0;i<o.length;i++){const a=o[i];let s;y.isArray(a)?s=a:y.isString(a)?s=[a]:y.isObject(a)&&(s=[a.name,a.alias]),l.push(s)}t.injects=l;const u=JSON.stringify(t);return S.instance.callScriptRunner(u)}const c=new S;async function R(){D(),j();const n="htmls/pages/accessibility-pn-an-info/content",t=await _(n),o=await O(n,"content.title");c.init(),document.title=o,G(t)}R();function G(n){const t=document.getElementById("pn"),o=document.getElementById("an"),l=document.getElementById("cls"),u=document.getElementById("closeBtn"),i=document.getElementById("useBtn"),a=document.getElementById("lpn"),s=document.getElementById("lan"),w=document.getElementById("lan"),r=document.getElementById("apn"),g=document.getElementById("aan"),v=document.getElementById("acn");if(!t||!o||!l||!u||!i||!a||!s||!w||!r||!g||!v){console.log(`!inputPn=${!t}, !inputAn=${!o}, !inputCls=${!l}, !closeBtn=${!u}, !useBtn=${!i}, !lpn=${!a}, !lan=${!s}, !lcls=${!w}, !buttonPn=${!r}, !buttonAn=${g}, !buttonCn=${!v}`);return}a.innerText=n("content.pnLabel"),s.innerText=n("content.anLabel"),w.innerText=n("content.clsLable"),u.innerText=n("content.closeBtn"),i.innerText=n("content.useBtn"),r.innerText=n("content.copyButtonText"),r.onclick=function(){c.clipboardSetText(t.value)},g.innerText=n("content.copyButtonText"),g.onclick=function(){c.clipboardSetText(o.value)},v.innerText=n("content.copyButtonText"),v.onclick=function(){c.clipboardSetText(l.value)};const h=c.callJavaToJsDataString(),E=JSON.parse(h.javaResultString||"{}");u.onclick=function(){A()};function A(){c.onJsCallEvent("callExit",""),c.callExitFromJs()}i.onclick=function(){c.dispatchData("WebViewJsDispatcher",E.eventType,JSON.stringify({pn:t.value,an:o.value,cn:l.value}))},console.log(4);const p=c.webViewJsId().javaResultString||"id failed",m="onSetPackage",T="eventLastPackageChanged",B="onLastPackageChanged",f="onSetActivity",J="onSetClass";k();function k(){c.listen("a11yModel",T,"onLastPackageChanged",!1)}console.log(5),window.global||(console.log(5.5),window.global=window);const $=window;console.log(6),$.onCallJsEvent=window.global.onCallJsEvent=function(e){if(console.log("global.onCallJsEvent-fn",e),!!e)switch(e.type){case m:x(e.data);break;case B:C();break;case f:I(e.data);break;case J:V(e.data);break;default:console.log("uuuuuuuuuuuuuuuuuunknow event")}},console.log("global=",window.global),console.log("window=",window);function x(e){t.value=e}function I(e){o.value=e}function V(e){l.value=e}C();function C(){const e=`
        var pn = a11yModel.nowApplicationPackageName;
        webViewJs.callJsEvent("${m}", pn, ${p});
        `,d={injects:[["webViewJs"],["a11yModel"]],script:e};b.callScript(d)}M();function M(){const e=`
        // a11yModel.listenDomainData(com.fanfanlo.droidlib.auto.service.accessibility.A11yModel.Companion.eventLastFullScreenActivityChanged, webViewJs, function(e){
        //     var an = a11yModel.lastFullScreenActivity;
        //     webViewJs.callJsEvent("${f}", an, ${p});
        // });
        a11yModel.listenDomainData(com.fanfanlo.droidlib.auto.service.accessibility.A11yModel.Companion.eventLastFullScreenActivityChanged, webViewJs, onActivityChange);
        onActivityChange(null);
        function onActivityChange(e){
            var an = a11yModel.lastFullScreenActivity;
            webViewJs.callJsEvent("${f}", an, ${p});
        }
        `,d={injects:[["webViewJs"],{name:"a11yModel",alias:"a11yModel"}],script:e};b.callScript(d)}P();function P(){const e=`
       
        a11yModel.listenDomainData(com.fanfanlo.droidlib.auto.service.accessibility.A11yModel.Companion.eventAppWindowRefresh, webViewJs, onClassChange);
        onClassChange(null);
        function onClassChange(e){
            var cls = a11yModel.lastClassName;
            webViewJs.callJsEvent("${J}", cls, ${p});
        }
        `,d={injects:[["webViewJs"],{name:"a11yModel",alias:"a11yModel"}],script:e};b.callScript(d)}c.onDocumentReady(),console.log(7)}
