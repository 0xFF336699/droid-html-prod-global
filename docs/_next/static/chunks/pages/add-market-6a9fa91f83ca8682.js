(self["webpackChunk_N_E"] = self["webpackChunk_N_E"] || []).push([[4310],{

/***/ 22199:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {


    (window.__NEXT_P = window.__NEXT_P || []).push([
      "/add-market",
      function () {
        return __webpack_require__(90420);
      }
    ]);
    if(false) {}
  

/***/ }),

/***/ 79078:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   i: () => (/* binding */ marketUtils)
/* harmony export */ });
function parseMarketInfoByString(s) {
    try {
        const lib = new Function("".concat(s, ";return lib;"))();
        if (!lib.marketData) {
            throw new Error("no marketData found");
        }
        // const marketData = lib.marketData;
        console.log('info=', lib);
        return lib;
    } catch (e) {
        console.log('e=', e);
        return null;
    }
}
const marketUtils = {
    parseMarketInfoByString
};


/***/ }),

/***/ 90420:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Index)
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/react@19.1.0/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(94513);
// EXTERNAL MODULE: ../../libs/app/ui/src/components/app/AppShell.tsx + 3 modules
var AppShell = __webpack_require__(26719);
// EXTERNAL MODULE: ../../libs/app/ui/src/components/appbar/AppBar.tsx + 2 modules
var AppBar = __webpack_require__(40018);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react-i18next@15.6.0_i18next@24.2.3_typescript@5.7.3__react-dom@19.1.0_react@19.1.0__react@19.1.0_typescript@5.7.3/node_modules/react-i18next/dist/es/index.js + 15 modules
var es = __webpack_require__(56137);
// EXTERNAL MODULE: ../../libs/fanfanlo/src/dispatcher/Dispatcher.ts
var Dispatcher = __webpack_require__(30910);
// EXTERNAL MODULE: ../../libs/app/static/src/utils/market-utils.ts
var market_utils = __webpack_require__(79078);
;// ../../libs/fanfanlo/src/utils/url.ts
function isUrl(href) {
    const pattern = new RegExp('^(https?:\\/\\/)?' + // protocol
    '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|' + // domain name
    '((\\d{1,3}\\.){3}\\d{1,3}))' + // OR ip (v4) address
    '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' + // port and path
    '(\\?[;&a-z\\d%_.~+=-]*)?' + // query string
    '(\\#[-a-z\\d_]*)?$', 'i'); // fragment locator
    return pattern.test(href);
} // export function isValidURL(url:string) {
 //     const urlRegex = /^(https?:\/\/)?([\w-]+\.)+[\w-]{2,}(\/[\w\-._~:/?#[\]@!$&'()*+,;=]*)?$/i;
 //     return urlRegex.test(url);
 //   }

// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/Box/Box.js + 2 modules
var Box = __webpack_require__(92061);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/Stack/Stack.js + 1 modules
var Stack = __webpack_require__(39070);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/FormControl/FormControl.js + 1 modules
var FormControl = __webpack_require__(60247);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/InputLabel/InputLabel.js + 1 modules
var InputLabel = __webpack_require__(79804);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/Input/Input.js + 1 modules
var Input = __webpack_require__(52787);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/FormHelperText/FormHelperText.js + 1 modules
var FormHelperText = __webpack_require__(43022);
// EXTERNAL MODULE: ../../node_modules/.pnpm/await-to-js@3.0.0/node_modules/await-to-js/dist/await-to-js.es5.js
var await_to_js_es5 = __webpack_require__(11318);
// EXTERNAL MODULE: ../../node_modules/.pnpm/axios@1.10.0/node_modules/axios/lib/axios.js + 48 modules
var axios = __webpack_require__(74440);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react@19.1.0/node_modules/react/index.js
var react = __webpack_require__(94285);
;// ./src/components/markets/add-market-page-content/AddMarketPageContent.tsx
/* __next_internal_client_entry_do_not_use__ AddMarketPageContent auto */ 






// import { transform } from "@babel/core";
function test() {
    const s = 'var script1=function(n){"use strict";return function(){function v(){return new Date().getTime()}var u={exports:{}},e={};/**\n * @license React\n * react-jsx-runtime.production.js\n *\n * Copyright (c) Meta Platforms, Inc. and affiliates.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE file in the root directory of this source tree.\n */var c=Symbol.for("react.transitional.element"),d=Symbol.for("react.fragment");function s(T,t,r){var i=null;if(r!==void 0&&(i=""+r),t.key!==void 0&&(i=""+t.key),"key"in t){r={};for(var o in t)o!=="key"&&(r[o]=t[o])}else r=t;return t=r.ref,{$$typeof:c,type:T,key:i,ref:t!==void 0?t:null,props:r}}e.Fragment=d,e.jsx=s,e.jsxs=s,u.exports=e;var l=u.exports;function a(){return l.jsx("div",{children:l.jsx("button",{children:"html生成按钮"})})}const x={UI:a};function E(){return v()}n.components=x,n.printA=E,Object.defineProperty(n,Symbol.toStringTag,{value:"Module"})}(),n}({}); return script1;';
    const o = new Function(s)();
    o.printA();
    // console.log('cccccccccccccccomponents=', o.components)
    return o;
}
function AddMarketPageContent() {
    // const [ui, setUI] = useState(null)
    // useEffect(() => {
    //     setTimeout(() => {
    //         setUI(test().components.UI())
    //     }, 1000 * 2)
    // }, [])
    // url = 'http://192.168.177.180:3000/resources/markets/market1.iife.js'
    const [url, setUrl] = (0,react.useState)('');
    const [urlIsWrong, setUrlIsWrong] = (0,react.useState)(url ? !isUrl(url) : false);
    const [urlFetchError, setUrlFetchError] = (0,react.useState)(undefined);
    const [marketLib, setMarketLib] = (0,react.useState)(null);
    const { t } = (0,es/* useTranslation */.Bd)('homepage/components/markets/add-market-page-content/content');
    const [isFetchingUrl, fetchUrlTransition] = (0,react.useTransition)();
    function onUrlChange(url) {
        setUrlFetchError(undefined);
        console.log('value is', url);
        setUrl(url);
        const urlIsOk = isUrl(url);
        console.log('urlIsOk=', urlIsOk);
        setUrlIsWrong(!urlIsOk && !!url);
    }
    (0,react.useEffect)(()=>{
        if (urlIsWrong || !url) return;
        fetchUrlTransition(fetchUrl2);
    }, [
        url,
        urlIsWrong
    ]);
    async function fetchUrl() {
        console.log('fetchUrl', url);
        if (!url) {
            return;
        }
        const [err, res] = await (0,await_to_js_es5/* default */.A)(axios/* default */.A.get(url));
        if (err) {
            setUrlFetchError(err.message);
            return;
        }
        const scriptString = res === null || res === void 0 ? void 0 : res.data;
        const info = market_utils/* marketUtils */.i.parseMarketInfoByString(scriptString);
        console.log('info222=', info);
        if (!info) return;
        setMarketLib(info);
        // const ui = info.marketData.MarketSummaryUI()
        // console.log('uuuuuuuuuuuuui', ui)
        // if(ui)setUI(ui as any)
        return;
    }
    async function fetchUrl2() {
        if (!url) {
            return;
        }
        console.log('url=', url);
        const mod = await import(/* webpackIgnore: true */ url);
        // const ui = mod.marketData.MarketSummaryUI()
        console.log('mod=', mod, Object.keys(mod));
        console.log('mod."marketData"=', mod.marketData, Object.keys(mod.marketData));
    // setUI(mod.marketData.MarketSummaryUI)
    // const container = document.getElementById("remote-root")!;
    // const root = createRoot(container);
    // root.render(createElement(mod.marketData.MarketSummaryUI));
    // setUI(ui)
    }
    (0,react.useEffect)(()=>{
        if (!marketLib) return;
        const ui = marketLib.marketData.MarketSummaryUI();
        console.log('uuuuuuuuuuuuui', ui);
        // if(ui)setUI(ui as any)
        return;
    }, [
        marketLib
    ]);
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.A, {
        sx: {
            width: "100%"
        },
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                id: "remote-root"
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)(Stack/* default */.A, {
                direction: "column",
                spacing: 2,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)(FormControl/* default */.A, {
                        error: urlIsWrong,
                        variant: "standard",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)(InputLabel/* default */.A, {
                                htmlFor: "component-error",
                                children: [
                                    t("AddMarketPageContent.url"),
                                    " "
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(Input/* default */.A, {
                                id: "component-error",
                                value: url,
                                onChange: (e)=>onUrlChange(e.currentTarget.value),
                                "aria-describedby": "component-error-text",
                                "data-testid": "AddMarketPageContent__urlInput__01JG2B0076"
                            }),
                            urlIsWrong && /*#__PURE__*/ (0,jsx_runtime.jsx)(FormHelperText/* default */.A, {
                                id: "component-error-text",
                                children: t("AddMarketPageContent.urlIsNotValid")
                            })
                        ]
                    }),
                    urlFetchError && /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.A, {
                        children: urlFetchError
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.A, {
                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                            children: /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                children: t("AddMarketPageContent.summary")
                            })
                        })
                    }),
                    marketLib && /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.A, {}),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.A, {})
                ]
            })
        ]
    });
}

;// ./src/pages/add-market/index.tsx




function Index() {
    const { t } = (0,es/* useTranslation */.Bd)('homepage/pages/add-market/content');
    const dispatcher = new Dispatcher/* Dispatcher */.m();
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(AppShell/* AppShell */.G, {
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(AppBar/* AppbarContainer */.W, {
            appbarProps: {
                title: t("content.title"),
                back: true,
                backDispatcher: dispatcher
            },
            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(AddMarketPageContent, {})
        })
    });
}


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, [7772,472,402,6940,2920,1508,636,6593,8792], () => (__webpack_exec__(22199)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ _N_E = __webpack_exports__;
/******/ }
]);
//# sourceMappingURL=add-market-6a9fa91f83ca8682.js.map