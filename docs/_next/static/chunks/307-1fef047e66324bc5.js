"use strict";
(self["webpackChunk_N_E"] = self["webpackChunk_N_E"] || []).push([[307],{

/***/ 20939:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  G: () => (/* binding */ AppShell)
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/react@19.1.0/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(94513);
// EXTERNAL MODULE: ../../libs/fanfanlo/src/i18n/i18n-init.ts + 1 modules
var i18n_init = __webpack_require__(70506);
// EXTERNAL MODULE: ../../libs/fanfanlo/src/storage/store-utils.ts
var store_utils = __webpack_require__(4887);
// EXTERNAL MODULE: ../../libs/fanfanlo/src/watcher/proxyWatch.ts
var proxyWatch = __webpack_require__(88518);
// EXTERNAL MODULE: ../../libs/fanfanlo/src/watcher/watchUpdates.ts
var watchUpdates = __webpack_require__(4738);
// EXTERNAL MODULE: ../../libs/fanfanlo/src/storage/store-page-context.tsx
var store_page_context = __webpack_require__(35155);
// EXTERNAL MODULE: ../../node_modules/.pnpm/next@15.3.5_@babel+core@7.28.0_babel-plugin-macros@3.1.0_react-dom@19.1.0_react@19.1.0__react@19.1.0_sass@1.89.2/node_modules/next/router.js
var next_router = __webpack_require__(75640);
// EXTERNAL MODULE: ../../node_modules/.pnpm/next@15.3.5_@babel+core@7.28.0_babel-plugin-macros@3.1.0_react-dom@19.1.0_react@19.1.0__react@19.1.0_sass@1.89.2/node_modules/next/config.js
var config = __webpack_require__(87891);
var config_default = /*#__PURE__*/__webpack_require__.n(config);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react@19.1.0/node_modules/react/index.js
var react = __webpack_require__(94285);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react-i18next@15.6.0_i18next@24.2.3_typescript@5.7.3__react-dom@19.1.0_react@19.1.0__react@19.1.0_typescript@5.7.3/node_modules/react-i18next/dist/es/index.js + 15 modules
var es = __webpack_require__(50279);
;// __barrel_optimize__?names=I18nextProvider!=!../../node_modules/.pnpm/react-i18next@15.6.0_i18next@24.2.3_typescript@5.7.3__react-dom@19.1.0_react@19.1.0__react@19.1.0_typescript@5.7.3/node_modules/react-i18next/dist/es/index.js


// EXTERNAL MODULE: ../../libs/fanfanlo/src/remote/request.ts
var request = __webpack_require__(34708);
// EXTERNAL MODULE: ../../libs/app/model/src/remote/tms.ts
var tms = __webpack_require__(2413);
;// ../../libs/app/model/src/remote/tracking/print.ts


async function trackingPrint(opts) {
    const res = await (0,request/* request */.Em)(tms/* tms */.X.TTracking, tms/* tms */.X.MTrackingPrint, opts.params, opts.gateway, opts.handler);
    return res;
}

;// ../../libs/app/ui/src/components/app/AppShell.tsx
/* __next_internal_client_entry_do_not_use__ AppShell auto */ 






checkReloadPage();
(0,i18n_init/* i18nInit */.tV)();
function checkReloadPage() {
    if (false) {}
    if (config_default()().publicRuntimeConfig.isDevelopment) {
        return;
    }
    if (window.location.href.indexOf('qiniu') == -1) return;
    // 帮我检测url中是否包含_htmlRefreshTime的参数
    // 如果没有，则添加_htmlRefresTime的参数，值为当前时间的毫秒数
    const searchParams = new URL(window.location.href).searchParams;
    const htmlRefreshTime = searchParams.get('_htmlRefreshTime');
    if (!htmlRefreshTime) {
        const newUrl = new URL(window.location.href);
        newUrl.searchParams.set('_htmlRefreshTime', String(Date.now()));
        window.location.href = newUrl.toString();
        return;
    }
    const refreshTime = Number(htmlRefreshTime);
    if (refreshTime + 2 * 60 * 1000 < Date.now()) {
        const newUrl = new URL(window.location.href);
        newUrl.searchParams.set('_htmlRefreshTime', String(Date.now()));
        window.location.href = newUrl.toString();
    }
}
const dynamicKeyMap = new Map();
function AppShell(param) {
    let { children } = param;
    const router = (0,next_router.useRouter)();
    const scrollKey = 'scrollPositionInfo';
    const href = window.location.href.split("#")[0];
    const dynamicKey = "dynamic-".concat(href);
    const [isOpened] = (0,react.useState)(dynamicKeyMap.get(dynamicKey) === true);
    const s = store_utils/* storeUtils */.P.namespace(dynamicKey);
    let o = s.read(dynamicKey);
    if (!o) {
        o = {};
        s.write(dynamicKey, o);
    }
    o = (0,proxyWatch/* toProxy */.I$)(o);
    (0,react.useEffect)(()=>{
        router.beforePopState((state)=>{
            s.clearAll();
            return true;
        });
    });
    (0,react.useEffect)(()=>{
        s.write(dynamicKey, o);
        return (0,watchUpdates/* watchUpdates */.c)(o, ()=>{
            s.write(dynamicKey, o);
        });
    }, []);
    (0,react.useEffect)(()=>{
        trackingPrint({
            params: {
                type: "页面进入",
                title: "页面",
                subtitle: "发送者-AppShell",
                extra: {
                    href: window.location.href
                }
            }
        });
    }, []);
    (0,react.useEffect)(()=>{
        const info = s.read(scrollKey) || {
            x: 0,
            y: 0
        };
        // console.log('app shell scroll info info = ', info)
        if (info.x == 0 && info.y == 0) {
            listenScroll();
        } else {
            window.requestAnimationFrame(()=>{
                if (isOpened) {
                    window.scrollTo(info.x, info.y);
                }
                listenScroll();
            });
        }
        function onScroll(e) {
            // console.log('app shell on scroll', { x: window.scrollX, y: window.scrollY })
            s.write(scrollKey, {
                x: window.scrollX,
                y: window.scrollY
            });
        }
        function listenScroll() {
            window.addEventListener('scroll', onScroll);
        }
        function unsub() {
            window.removeEventListener('scroll', onScroll);
        }
        return unsub;
    });
    (0,react.useEffect)(()=>{
        dynamicKeyMap.set(dynamicKey, true);
    }, []);
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(store_page_context/* StorePageContext */.q, {
        value: s,
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(store_page_context/* StorePageDynamicContext */.p, {
            value: o,
            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(es/* I18nextProvider */.xC, {
                i18n: i18n_init/* i18n */.Ru,
                children: children
            })
        })
    });
}


/***/ }),

/***/ 35155:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   p: () => (/* binding */ StorePageDynamicContext),
/* harmony export */   q: () => (/* binding */ StorePageContext)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(94285);
/* harmony import */ var _store_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4887);


// import { storeUtils } from "./store";
const s = _store_utils__WEBPACK_IMPORTED_MODULE_1__/* .storeUtils */ .P.namespace('store-page-context');
function create() {
    return /*#__PURE__*/ createContext(s);
}
const StorePageContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)(s);
const StorePageDynamicContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)({});


/***/ }),

/***/ 39800:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   IL: () => (/* binding */ createDefaultWindowConf),
/* harmony export */   Sb: () => (/* binding */ createWindowConfCopy),
/* harmony export */   Wl: () => (/* binding */ createDefaultFloatWindowConf),
/* harmony export */   Ww: () => (/* binding */ FloatSidePattern),
/* harmony export */   YC: () => (/* binding */ FloatShowPattern),
/* harmony export */   ZI: () => (/* binding */ WindowType),
/* harmony export */   n2: () => (/* binding */ getGravityOptions)
/* harmony export */ });
/* unused harmony exports Gravity, ContentType, getDefaulWindowConf, createDefaultWebViewJsParams, createDefaultWebViewConf, createDefaultGravityInfo, createDefaultBorderInfo, createDefaultMatchParentInfo, createDefaultHtmlConf, createDefaultFloatConf, createDefaultDialogWindowConf, createDefaultSysWindowConf */
/* harmony import */ var _barrel_optimize_names_ulid_ulid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67131);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(63624);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);


var Gravity = /*#__PURE__*/ function(Gravity) {
    // 水平方向
    Gravity[Gravity["LEFT"] = 3] = "LEFT";
    Gravity[Gravity["RIGHT"] = 5] = "RIGHT";
    Gravity[Gravity["END"] = 8388613] = "END";
    Gravity[Gravity["START"] = 8388608] = "START";
    // 垂直方向
    Gravity[Gravity["TOP"] = 48] = "TOP";
    Gravity[Gravity["BOTTOM"] = 80] = "BOTTOM";
    // 组合方向
    Gravity[Gravity["CENTER"] = 17] = "CENTER";
    Gravity[Gravity["CENTER_HORIZONTAL"] = 1] = "CENTER_HORIZONTAL";
    Gravity[Gravity["CENTER_VERTICAL"] = 16] = "CENTER_VERTICAL";
    // 位置常量
    Gravity[Gravity["NO_GRAVITY"] = 0] = "NO_GRAVITY";
    return Gravity;
}({});
// ============ Gravity 映射 ============
/**
 * 获取所有可用的 Gravity 选项
 * 用于生成 Select 下拉框的选项
 * @param t 国际化翻译函数,用于获取 Gravity 的显示文本
 * @returns Gravity 选项数组,包含 value 和 label
 */ function getGravityOptions(t) {
    const gravityKeys = [
        3,
        5,
        8388608,
        8388613,
        48,
        80,
        17,
        1,
        16,
        0
    ];
    return gravityKeys.map((gravity)=>({
            value: gravity,
            label: t ? t("content.Gravity.".concat(Gravity[gravity])) : Gravity[gravity]
        }));
}
var FloatShowPattern = /*#__PURE__*/ function(FloatShowPattern) {
    // 仅在当前Activity显示
    FloatShowPattern["CURRENT_ACTIVITY"] = "CURRENT_ACTIVITY";
    // 一直显示
    FloatShowPattern["ALL_TIME"] = "ALL_TIME";
    // 仅前台显示
    FloatShowPattern["FOREGROUND"] = "FOREGROUND";
    return FloatShowPattern;
}({});
var FloatSidePattern = /*#__PURE__*/ function(FloatSidePattern) {
    // 默认不贴边，跟随手指移动
    FloatSidePattern["DEFAULT"] = "DEFAULT";
    // 左、右、上、下四个方向固定（一直吸附在该方向边缘，只能在该方向的边缘移动）
    FloatSidePattern["LEFT"] = "LEFT";
    FloatSidePattern["RIGHT"] = "RIGHT";
    FloatSidePattern["TOP"] = "TOP";
    FloatSidePattern["BOTTOM"] = "BOTTOM";
    // 根据手指到屏幕边缘的距离，自动选择水平方向的贴边、垂直方向的贴边、四方向的贴边
    FloatSidePattern["AUTO_HORIZONTAL"] = "AUTO_HORIZONTAL";
    FloatSidePattern["AUTO_VERTICAL"] = "AUTO_VERTICAL";
    FloatSidePattern["AUTO_SIDE"] = "AUTO_SIDE";
    // 拖拽时跟随手指移动，结束时贴边
    FloatSidePattern["RESULT_LEFT"] = "RESULT_LEFT";
    FloatSidePattern["RESULT_RIGHT"] = "RESULT_RIGHT";
    FloatSidePattern["RESULT_TOP"] = "RESULT_TOP";
    FloatSidePattern["RESULT_BOTTOM"] = "RESULT_BOTTOM";
    FloatSidePattern["RESULT_HORIZONTAL"] = "RESULT_HORIZONTAL";
    FloatSidePattern["RESULT_VERTICAL"] = "RESULT_VERTICAL";
    FloatSidePattern["RESULT_SIDE"] = "RESULT_SIDE";
    return FloatSidePattern;
}({});
// 内容类型枚举
var ContentType = /*#__PURE__*/ function(ContentType) {
    // 使用html
    ContentType["Html"] = "html";
    // 使用安卓的view。但是现在并没提供。
    ContentType["View"] = "view";
    return ContentType;
}({});
// 窗口类型枚举
var WindowType = /*#__PURE__*/ function(WindowType) {
    // 悬浮窗。像小工具、闹钟类的可以使用
    WindowType["Float"] = "float";
    // 系统。系统级别窗口
    WindowType["System"] = "system";
    // 弹窗。一般用于对话框
    WindowType["Dialog"] = "dialog";
    return WindowType;
}({});
// export const webViewJsParams: WebViewJsParams = {
//   fitContentWidth: 0,
//   fitContentHeight: 0,
//   javaToJsDataString: ``,
// };
// export const webViewConf: WebViewConf = {
//   backgroundColor: 0,
// };
// export const htmlConf: HtmlConf = {
//   url: ``,
//   webViewJsParams: webViewJsParams,
//   webViewConf: webViewConf,
//   jsBridgeName: 'android',
//   webViewJsName: 'AutoWebViewJs',
//   // extra:{
//   //     // javaRunnerId:javaRunner.id,
//   // }
// };
// export const floatConf: FloatConf = {
//   // positionSaveName: '',
//   draggable: true,
//   showPattern: FloatShowPattern.ALL_TIME,
//   hasEditText: false,
//   sidePattern: FloatSidePattern.DEFAULT,
//   gravity: {
//     gravity: Gravity.END,
//     offsetX: 0,
//     offsetY: 0,
//   },
//   layoutChangedGravity: Gravity.END,
//   border: {
//     left: 0,
//     top: 0,
//     right: 0,
//     bottom: 0,
//   },
//   matchParent: {
//     widthMatch: false,
//     heightMatch: false,
//   },
// };
// export const floatWindowConf: FloatWindowConf = {
//   floatConf: floatConf,
// };
// export const windowConf: WindowConf = {
//   tag: '',
//   contentType: ContentType.Html,
//   windowType: WindowType.Float,
//   htmlConf: htmlConf,
//   floatWindowConf: floatWindowConf,
//   windowId: ulid(),
//   forceDismissWindowTime: 0,
// };
function getDefaulWindowConf() {
    return JSON.parse(JSON.stringify(createDefaultWindowConf()));
}
function createWindowConfCopy(conf) {
    return lodash__WEBPACK_IMPORTED_MODULE_1___default().merge({}, createDefaultWindowConf(), conf);
}
// ============ createDefault 方法 ============
function createDefaultWebViewJsParams() {
    return {
        fitContentWidth: 0,
        fitContentHeight: 0,
        javaToJsDataString: ""
    };
}
function createDefaultWebViewConf() {
    return {
        backgroundColor: 0
    };
}
function createDefaultGravityInfo() {
    return {
        gravity: 8388608
    };
}
function createDefaultBorderInfo() {
    return {
        left: 0,
        top: 0,
        right: 0,
        bottom: 0
    };
}
function createDefaultMatchParentInfo() {
    return {
        widthMatch: false,
        heightMatch: false
    };
}
function createDefaultHtmlConf() {
    return {
        url: "",
        webViewJsParams: createDefaultWebViewJsParams(),
        webViewConf: createDefaultWebViewConf(),
        jsBridgeName: 'android',
        webViewJsName: 'AutoWebViewJs'
    };
}
function createDefaultFloatConf() {
    return {
        positionSaveName: '${positionSaveName}',
        draggable: true,
        showPattern: "ALL_TIME",
        hasEditText: true,
        sidePattern: "DEFAULT",
        gravity: createDefaultGravityInfo(),
        layoutChangedGravity: 8388608,
        border: createDefaultBorderInfo(),
        matchParent: createDefaultMatchParentInfo()
    };
}
function createDefaultFloatWindowConf() {
    return {
        floatConf: createDefaultFloatConf()
    };
}
function createDefaultDialogWindowConf() {
    return {
        viewLayoutParams: {},
        theme: ''
    };
}
function createDefaultSysWindowConf() {
    return {
        viewLayoutParams: {},
        listenBackKey: false
    };
}
function createDefaultWindowConf() {
    return {
        tag: '',
        contentType: "html",
        windowType: "float",
        htmlConf: createDefaultHtmlConf(),
        floatWindowConf: createDefaultFloatWindowConf(),
        windowId: (0,_barrel_optimize_names_ulid_ulid__WEBPACK_IMPORTED_MODULE_0__/* .ulid */ .Z0)(),
        forceDismissWindowTime: 0
    };
}


/***/ }),

/***/ 67236:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ AndroidPageContent)
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/react@19.1.0/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(94513);
// EXTERNAL MODULE: ../../libs/fanfanlo/src/nextjs/env/env.ts
var env = __webpack_require__(49210);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react-i18next@15.6.0_i18next@24.2.3_typescript@5.7.3__react-dom@19.1.0_react@19.1.0__react@19.1.0_typescript@5.7.3/node_modules/react-i18next/dist/es/index.js + 15 modules
var es = __webpack_require__(50279);
// EXTERNAL MODULE: ../../libs/fanfanlo/src/i18n/i18n-value-loader.ts + 1 modules
var i18n_value_loader = __webpack_require__(69399);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/Box/Box.js + 2 modules
var Box = __webpack_require__(6445);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/Button/Button.js + 3 modules
var Button = __webpack_require__(28669);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/Container/Container.js + 1 modules
var Container = __webpack_require__(44437);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react@19.1.0/node_modules/react/index.js
var react = __webpack_require__(94285);
;// ../../libs/app/ui/src/components/page/PageContent.tsx




function Reload() {
    if (!env/* isDev */.Cu) return /*#__PURE__*/ (0,jsx_runtime.jsx)(jsx_runtime.Fragment, {
        children: "  "
    });
    const { t } = (0,es/* useTranslation */.Bd)("app-ui/components/page/content");
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.A, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Button/* default */.A, {
                onClick: ()=>{
                    window.location.reload();
                },
                children: t("PageContent.refresh")
            }),
            new Date().toLocaleString()
        ]
    });
}
const ScrollP = /*#__PURE__*/ (0,react.createContext)({
    x: 0,
    y: 0
});
let index = 0;
function PageContent(param) {
    let { children, titleConf, reload } = param;
    index++;
    const scroll = (0,react.useContext)(ScrollP);
    const clazz = "".concat(Date.now() + Math.random() * Date.now());
    (0,react.useEffect)(()=>{
        async function loadTitle() {
            if (!titleConf) return;
            let title = titleConf.title;
            if (titleConf.ns) {
                title = await (0,i18n_value_loader/* loadI18nValue */.y)(titleConf.ns, titleConf.key || "content.title");
            }
            if (!title) return;
            document.title = title;
        }
        loadTitle();
    }, []);
    (0,react.useEffect)(()=>{
        const container = document.getElementsByClassName(clazz)[0];
        if (!container) return;
        container.scrollTop = scroll.y;
        const onScroll = ()=>{
            var scrollTop = container.scrollTop;
            scroll.y = scrollTop;
        };
        container.removeEventListener('scroll', onScroll);
        container.addEventListener('scroll', onScroll, {
            passive: true
        });
        return ()=>container.removeEventListener('scroll', onScroll);
    }, [
        clazz,
        scroll
    ]);
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(Container/* default */.A, {
        className: clazz,
        sx: {
            height: '100%',
            overflow: 'auto',
            padding: "0px",
            display: 'flex',
            flexDirection: 'column'
        },
        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.A, {
            children: [
                (reload || reload == undefined) && /*#__PURE__*/ (0,jsx_runtime.jsx)(Reload, {}),
                children
            ]
        })
    });
}

;// ../../libs/app/ui/src/components/page/AndroidPageContent.tsx


function AndroidPageContent(param) {
    let { children, titleConf, reload } = param;
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(PageContent, {
        titleConf: titleConf,
        reload: reload,
        children: children
    });
}


/***/ }),

/***/ 70506:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Ru: () => (/* binding */ i18n),
  tV: () => (/* binding */ i18nInit)
});

// UNUSED EXPORTS: default, i18nLogger, useTranslation

// EXTERNAL MODULE: ../../node_modules/.pnpm/react-i18next@15.6.0_i18next@24.2.3_typescript@5.7.3__react-dom@19.1.0_react@19.1.0__react@19.1.0_typescript@5.7.3/node_modules/react-i18next/dist/es/index.js + 15 modules
var es = __webpack_require__(50279);
;// __barrel_optimize__?names=initReactI18next!=!../../node_modules/.pnpm/react-i18next@15.6.0_i18next@24.2.3_typescript@5.7.3__react-dom@19.1.0_react@19.1.0__react@19.1.0_typescript@5.7.3/node_modules/react-i18next/dist/es/index.js


// EXTERNAL MODULE: ../../node_modules/.pnpm/i18next-browser-languagedetector@8.2.0/node_modules/i18next-browser-languagedetector/dist/esm/i18nextBrowserLanguageDetector.js
var i18nextBrowserLanguageDetector = __webpack_require__(43734);
// EXTERNAL MODULE: ../../node_modules/.pnpm/i18next-http-backend@3.0.2_encoding@0.1.13/node_modules/i18next-http-backend/esm/index.js + 2 modules
var esm = __webpack_require__(50148);
// EXTERNAL MODULE: ../../node_modules/.pnpm/i18next@24.2.3_typescript@5.7.3/node_modules/i18next/dist/esm/i18next.js
var i18next = __webpack_require__(94912);
// EXTERNAL MODULE: ../../libs/fanfanlo/src/log/Log.ts + 1 modules
var Log = __webpack_require__(48891);
// EXTERNAL MODULE: ../../libs/fanfanlo/src/nextjs/env/env.ts
var env = __webpack_require__(49210);
// EXTERNAL MODULE: ../../libs/fanfanlo/src/utils/files-map-utils.ts
var files_map_utils = __webpack_require__(91850);
;// ../../libs/fanfanlo/src/i18n/i18n-init.ts
/* __next_internal_client_entry_do_not_use__ useTranslation,i18nLogger,i18n,i18nInit,default auto */ // 现在用的是这个文件








let fileDateVersion = '' // = getConfig().publicRuntimeConfig?.version
;
const i18nLogger = new Log/* Log */.tG(false, "i18n");
const windowHref = (()=>{
    var _window_parent;
    if (false) {}
    const u = new URL(window.location.href || ((_window_parent = window.parent) === null || _window_parent === void 0 ? void 0 : _window_parent.location.href));
    // 同域文本iframe里的页面会获取不到href，所以判断一下直接用父级的就行.
    return u.origin == null || u.origin == 'null' ? '' : u.origin;
})();
const backendOptions = {
    loadPath: function(lngs, namespaces) {
        const log = i18nLogger.sub(false, "i18n loadpath");
        log.pause = true;
        const lng = lngs[0];
        let p = "";
        // p = `/options/_locales/${lngs[0].replace("-", "_")}/messages.json`;
        // p = `/locales/zh-CN/ns1/content.json`;
        // p = `locales/${lng}/${namespaces[0]}.json?v=${fileDateVersion}`
        const ps = namespaces[0].split('/');
        ps.splice(ps.length - 1, 0, lng);
        // p = `locales/${ps.join('/')}.json?v=${fileDateVersion}`
        // p = `locales/${ps.join('/')}.json?v=${getBuildTime()}`
        p = "locales/".concat(ps.join('/'), ".json");
        log.log("lngs=", lngs);
        log.log("namespaces=", namespaces);
        log.log("p=", p);
        p = files_map_utils/* fileMapUtils */.E.getFile("/".concat(p));
        // console.log('map p=', p)
        p = "".concat(windowHref, "/").concat(p);
        return p;
    },
    parse: function(data, languages, namespaces) {
        const log = i18nLogger.sub(false, "i18n backend parse");
        log.pause = true;
        // log.log(`parrrse`, data, languages, namespaces);
        const l = JSON.parse(data);
        log.print("before set i18ndata");
        // i18nData = l as II18n;
        // log.log(`i18nData.rule.scripts.sys.rules`, i18nData.rule.scripts.sys.rules);
        log.log("parrrse", languages, namespaces);
        return l;
    }
};
const backend = new esm/* default */.A();
backend.init(null, backendOptions);
const i18n = i18next/* default */.Ay;
// export const resources: Resource = {
//   // 'zh-CN': {
//   //   translation: _.merge({}, zhCN),
//   // },
//   // en: {
//   //   translation: _.merge({}, en),
//   // },
// };
i18n.on("languageChanged", async function(lng) {
    const log = i18nLogger.sub(false, "onlanguageChanged");
    log.pause = true;
    log.log("lllllng", lng);
// lng = "en";
// const p = `/options/_locales/${lng.replace("-", "_")}/messages.json`;
});
function i18nInit() {
    let _fileDateVersion = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : '';
    fileDateVersion = _fileDateVersion;
    i18n.use(i18nextBrowserLanguageDetector/* default */.A).use(backend).use(es/* initReactI18next */.r9).init({
        load: "currentOnly",
        // load: "all",
        // supportedLngs: ['zh-CN', 'zh-TW', 'en', 'en-GB', 'ja'],
        // resources,
        fallbackLng: env/* isServer */.S$ ? "en" : "zh-CN",
        // fallbackLng: "zh-CN",
        // lng: "zh-CN",
        partialBundledLanguages: true,
        ns: [],
        debug: false,
        interpolation: {
            escapeValue: false
        },
        detection: {
            caches: [
                "localStorage"
            ]
        }
    });
}
i18n.on("missingKey", function(lngs, namespace, key, res) {
    console.error("i18n mssing key, lngs=%s, namespace=%s, key=%s, res=%s", lngs, namespace, key, res);
});
i18n.on("loaded", function(loaded) {
    const log = i18nLogger.sub(false, "onloaded");
    log.pause = true;
    log.log("onloaded arguments", loaded);
});
i18n.on("failedLoading", function(lng, ns, msg) {
    const log = i18nLogger.sub(false, "onfailedLoading");
    log.pause = true;
    log.log("failedLoading arguments", lng, ns, msg);
});
i18n.on("added", function() {
    console.log('added', arguments);
});
/* harmony default export */ const i18n_init = ((/* unused pure expression or super */ null && (i18n)));


/***/ }),

/***/ 73703:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   _: () => (/* binding */ Manifest)
/* harmony export */ });
class PermissionGroup {
}
PermissionGroup.ACTIVITY_RECOGNITION = "android.permission-group.ACTIVITY_RECOGNITION";
PermissionGroup.CALENDAR = "android.permission-group.CALENDAR";
PermissionGroup.CALL_LOG = "android.permission-group.CALL_LOG";
PermissionGroup.CAMERA = "android.permission-group.CAMERA";
PermissionGroup.CONTACTS = "android.permission-group.CONTACTS";
PermissionGroup.LOCATION = "android.permission-group.LOCATION";
PermissionGroup.MICROPHONE = "android.permission-group.MICROPHONE";
PermissionGroup.NEARBY_DEVICES = "android.permission-group.NEARBY_DEVICES";
PermissionGroup.NOTIFICATIONS = "android.permission-group.NOTIFICATIONS";
PermissionGroup.PHONE = "android.permission-group.PHONE";
PermissionGroup.READ_MEDIA_AURAL = "android.permission-group.READ_MEDIA_AURAL";
PermissionGroup.READ_MEDIA_VISUAL = "android.permission-group.READ_MEDIA_VISUAL";
PermissionGroup.SENSORS = "android.permission-group.SENSORS";
PermissionGroup.SMS = "android.permission-group.SMS";
PermissionGroup.STORAGE = "android.permission-group.STORAGE";
class Permission {
}
Permission.ACCEPT_HANDOVER = "android.permission.ACCEPT_HANDOVER";
Permission.ACCESS_BACKGROUND_LOCATION = "android.permission.ACCESS_BACKGROUND_LOCATION";
Permission.ACCESS_BLOBS_ACROSS_USERS = "android.permission.ACCESS_BLOBS_ACROSS_USERS";
Permission.ACCESS_CHECKIN_PROPERTIES = "android.permission.ACCESS_CHECKIN_PROPERTIES";
Permission.ACCESS_COARSE_LOCATION = "android.permission.ACCESS_COARSE_LOCATION";
Permission.ACCESS_FINE_LOCATION = "android.permission.ACCESS_FINE_LOCATION";
Permission.ACCESS_LOCATION_EXTRA_COMMANDS = "android.permission.ACCESS_LOCATION_EXTRA_COMMANDS";
Permission.ACCESS_MEDIA_LOCATION = "android.permission.ACCESS_MEDIA_LOCATION";
Permission.ACCESS_NETWORK_STATE = "android.permission.ACCESS_NETWORK_STATE";
Permission.ACCESS_NOTIFICATION_POLICY = "android.permission.ACCESS_NOTIFICATION_POLICY";
Permission.ACCESS_WIFI_STATE = "android.permission.ACCESS_WIFI_STATE";
Permission.ACCOUNT_MANAGER = "android.permission.ACCOUNT_MANAGER";
Permission.ACTIVITY_RECOGNITION = "android.permission.ACTIVITY_RECOGNITION";
Permission.ADD_VOICEMAIL = "com.android.voicemail.permission.ADD_VOICEMAIL";
Permission.ANSWER_PHONE_CALLS = "android.permission.ANSWER_PHONE_CALLS";
Permission.BATTERY_STATS = "android.permission.BATTERY_STATS";
Permission.BIND_ACCESSIBILITY_SERVICE = "android.permission.BIND_ACCESSIBILITY_SERVICE";
Permission.BIND_APPWIDGET = "android.permission.BIND_APPWIDGET";
Permission.BIND_AUTOFILL_SERVICE = "android.permission.BIND_AUTOFILL_SERVICE";
Permission.BIND_CALL_REDIRECTION_SERVICE = "android.permission.BIND_CALL_REDIRECTION_SERVICE";
Permission.BIND_CARRIER_MESSAGING_CLIENT_SERVICE = "android.permission.BIND_CARRIER_MESSAGING_CLIENT_SERVICE";
/** @deprecated */ Permission.BIND_CARRIER_MESSAGING_SERVICE = "android.permission.BIND_CARRIER_MESSAGING_SERVICE";
Permission.BIND_CARRIER_SERVICES = "android.permission.BIND_CARRIER_SERVICES";
/** @deprecated */ Permission.BIND_CHOOSER_TARGET_SERVICE = "android.permission.BIND_CHOOSER_TARGET_SERVICE";
Permission.BIND_COMPANION_DEVICE_SERVICE = "android.permission.BIND_COMPANION_DEVICE_SERVICE";
Permission.BIND_CONDITION_PROVIDER_SERVICE = "android.permission.BIND_CONDITION_PROVIDER_SERVICE";
Permission.BIND_CONTROLS = "android.permission.BIND_CONTROLS";
Permission.BIND_CREDENTIAL_PROVIDER_SERVICE = "android.permission.BIND_CREDENTIAL_PROVIDER_SERVICE";
Permission.BIND_DEVICE_ADMIN = "android.permission.BIND_DEVICE_ADMIN";
Permission.BIND_DREAM_SERVICE = "android.permission.BIND_DREAM_SERVICE";
Permission.BIND_INCALL_SERVICE = "android.permission.BIND_INCALL_SERVICE";
Permission.BIND_INPUT_METHOD = "android.permission.BIND_INPUT_METHOD";
Permission.BIND_MIDI_DEVICE_SERVICE = "android.permission.BIND_MIDI_DEVICE_SERVICE";
Permission.BIND_NFC_SERVICE = "android.permission.BIND_NFC_SERVICE";
Permission.BIND_NOTIFICATION_LISTENER_SERVICE = "android.permission.BIND_NOTIFICATION_LISTENER_SERVICE";
Permission.BIND_PRINT_SERVICE = "android.permission.BIND_PRINT_SERVICE";
Permission.BIND_QUICK_ACCESS_WALLET_SERVICE = "android.permission.BIND_QUICK_ACCESS_WALLET_SERVICE";
Permission.BIND_QUICK_SETTINGS_TILE = "android.permission.BIND_QUICK_SETTINGS_TILE";
Permission.BIND_REMOTEVIEWS = "android.permission.BIND_REMOTEVIEWS";
Permission.BIND_SCREENING_SERVICE = "android.permission.BIND_SCREENING_SERVICE";
Permission.BIND_TELECOM_CONNECTION_SERVICE = "android.permission.BIND_TELECOM_CONNECTION_SERVICE";
Permission.BIND_TEXT_SERVICE = "android.permission.BIND_TEXT_SERVICE";
Permission.BIND_TV_INPUT = "android.permission.BIND_TV_INPUT";
Permission.BIND_TV_INTERACTIVE_APP = "android.permission.BIND_TV_INTERACTIVE_APP";
Permission.BIND_VISUAL_VOICEMAIL_SERVICE = "android.permission.BIND_VISUAL_VOICEMAIL_SERVICE";
Permission.BIND_VOICE_INTERACTION = "android.permission.BIND_VOICE_INTERACTION";
Permission.BIND_VPN_SERVICE = "android.permission.BIND_VPN_SERVICE";
Permission.BIND_VR_LISTENER_SERVICE = "android.permission.BIND_VR_LISTENER_SERVICE";
Permission.BIND_WALLPAPER = "android.permission.BIND_WALLPAPER";
Permission.BLUETOOTH = "android.permission.BLUETOOTH";
Permission.BLUETOOTH_ADMIN = "android.permission.BLUETOOTH_ADMIN";
Permission.BLUETOOTH_ADVERTISE = "android.permission.BLUETOOTH_ADVERTISE";
Permission.BLUETOOTH_CONNECT = "android.permission.BLUETOOTH_CONNECT";
Permission.BLUETOOTH_PRIVILEGED = "android.permission.BLUETOOTH_PRIVILEGED";
Permission.BLUETOOTH_SCAN = "android.permission.BLUETOOTH_SCAN";
Permission.BODY_SENSORS = "android.permission.BODY_SENSORS";
Permission.BODY_SENSORS_BACKGROUND = "android.permission.BODY_SENSORS_BACKGROUND";
Permission.BROADCAST_PACKAGE_REMOVED = "android.permission.BROADCAST_PACKAGE_REMOVED";
Permission.BROADCAST_SMS = "android.permission.BROADCAST_SMS";
Permission.BROADCAST_STICKY = "android.permission.BROADCAST_STICKY";
Permission.BROADCAST_WAP_PUSH = "android.permission.BROADCAST_WAP_PUSH";
Permission.CALL_COMPANION_APP = "android.permission.CALL_COMPANION_APP";
Permission.CALL_PHONE = "android.permission.CALL_PHONE";
Permission.CALL_PRIVILEGED = "android.permission.CALL_PRIVILEGED";
Permission.CAMERA = "android.permission.CAMERA";
Permission.CAPTURE_AUDIO_OUTPUT = "android.permission.CAPTURE_AUDIO_OUTPUT";
Permission.CHANGE_COMPONENT_ENABLED_STATE = "android.permission.CHANGE_COMPONENT_ENABLED_STATE";
Permission.CHANGE_CONFIGURATION = "android.permission.CHANGE_CONFIGURATION";
Permission.CHANGE_NETWORK_STATE = "android.permission.CHANGE_NETWORK_STATE";
Permission.CHANGE_WIFI_MULTICAST_STATE = "android.permission.CHANGE_WIFI_MULTICAST_STATE";
Permission.CHANGE_WIFI_STATE = "android.permission.CHANGE_WIFI_STATE";
Permission.CLEAR_APP_CACHE = "android.permission.CLEAR_APP_CACHE";
Permission.CONFIGURE_WIFI_DISPLAY = "android.permission.CONFIGURE_WIFI_DISPLAY";
Permission.CONTROL_LOCATION_UPDATES = "android.permission.CONTROL_LOCATION_UPDATES";
Permission.CREDENTIAL_MANAGER_QUERY_CANDIDATE_CREDENTIALS = "android.permission.CREDENTIAL_MANAGER_QUERY_CANDIDATE_CREDENTIALS";
Permission.CREDENTIAL_MANAGER_SET_ALLOWED_PROVIDERS = "android.permission.CREDENTIAL_MANAGER_SET_ALLOWED_PROVIDERS";
Permission.CREDENTIAL_MANAGER_SET_ORIGIN = "android.permission.CREDENTIAL_MANAGER_SET_ORIGIN";
Permission.DELETE_CACHE_FILES = "android.permission.DELETE_CACHE_FILES";
Permission.DELETE_PACKAGES = "android.permission.DELETE_PACKAGES";
Permission.DELIVER_COMPANION_MESSAGES = "android.permission.DELIVER_COMPANION_MESSAGES";
Permission.DETECT_SCREEN_CAPTURE = "android.permission.DETECT_SCREEN_CAPTURE";
Permission.DIAGNOSTIC = "android.permission.DIAGNOSTIC";
Permission.DISABLE_KEYGUARD = "android.permission.DISABLE_KEYGUARD";
Permission.DUMP = "android.permission.DUMP";
Permission.ENFORCE_UPDATE_OWNERSHIP = "android.permission.ENFORCE_UPDATE_OWNERSHIP";
Permission.EXECUTE_APP_ACTION = "android.permission.EXECUTE_APP_ACTION";
Permission.EXPAND_STATUS_BAR = "android.permission.EXPAND_STATUS_BAR";
Permission.FACTORY_TEST = "android.permission.FACTORY_TEST";
Permission.FOREGROUND_SERVICE = "android.permission.FOREGROUND_SERVICE";
Permission.FOREGROUND_SERVICE_CAMERA = "android.permission.FOREGROUND_SERVICE_CAMERA";
Permission.FOREGROUND_SERVICE_CONNECTED_DEVICE = "android.permission.FOREGROUND_SERVICE_CONNECTED_DEVICE";
Permission.FOREGROUND_SERVICE_DATA_SYNC = "android.permission.FOREGROUND_SERVICE_DATA_SYNC";
Permission.FOREGROUND_SERVICE_HEALTH = "android.permission.FOREGROUND_SERVICE_HEALTH";
Permission.FOREGROUND_SERVICE_LOCATION = "android.permission.FOREGROUND_SERVICE_LOCATION";
Permission.FOREGROUND_SERVICE_MEDIA_PLAYBACK = "android.permission.FOREGROUND_SERVICE_MEDIA_PLAYBACK";
Permission.FOREGROUND_SERVICE_MEDIA_PROJECTION = "android.permission.FOREGROUND_SERVICE_MEDIA_PROJECTION";
Permission.FOREGROUND_SERVICE_MICROPHONE = "android.permission.FOREGROUND_SERVICE_MICROPHONE";
Permission.FOREGROUND_SERVICE_PHONE_CALL = "android.permission.FOREGROUND_SERVICE_PHONE_CALL";
Permission.FOREGROUND_SERVICE_REMOTE_MESSAGING = "android.permission.FOREGROUND_SERVICE_REMOTE_MESSAGING";
Permission.FOREGROUND_SERVICE_SPECIAL_USE = "android.permission.FOREGROUND_SERVICE_SPECIAL_USE";
Permission.FOREGROUND_SERVICE_SYSTEM_EXEMPTED = "android.permission.FOREGROUND_SERVICE_SYSTEM_EXEMPTED";
Permission.GET_ACCOUNTS = "android.permission.GET_ACCOUNTS";
Permission.GET_ACCOUNTS_PRIVILEGED = "android.permission.GET_ACCOUNTS_PRIVILEGED";
Permission.GET_PACKAGE_SIZE = "android.permission.GET_PACKAGE_SIZE";
/** @deprecated */ Permission.GET_TASKS = "android.permission.GET_TASKS";
Permission.GLOBAL_SEARCH = "android.permission.GLOBAL_SEARCH";
Permission.HIDE_OVERLAY_WINDOWS = "android.permission.HIDE_OVERLAY_WINDOWS";
Permission.HIGH_SAMPLING_RATE_SENSORS = "android.permission.HIGH_SAMPLING_RATE_SENSORS";
Permission.INSTALL_LOCATION_PROVIDER = "android.permission.INSTALL_LOCATION_PROVIDER";
Permission.INSTALL_PACKAGES = "android.permission.INSTALL_PACKAGES";
Permission.INSTALL_SHORTCUT = "com.android.launcher.permission.INSTALL_SHORTCUT";
Permission.INSTANT_APP_FOREGROUND_SERVICE = "android.permission.INSTANT_APP_FOREGROUND_SERVICE";
Permission.INTERACT_ACROSS_PROFILES = "android.permission.INTERACT_ACROSS_PROFILES";
Permission.INTERNET = "android.permission.INTERNET";
Permission.KILL_BACKGROUND_PROCESSES = "android.permission.KILL_BACKGROUND_PROCESSES";
Permission.LAUNCH_CAPTURE_CONTENT_ACTIVITY_FOR_NOTE = "android.permission.LAUNCH_CAPTURE_CONTENT_ACTIVITY_FOR_NOTE";
Permission.LAUNCH_MULTI_PANE_SETTINGS_DEEP_LINK = "android.permission.LAUNCH_MULTI_PANE_SETTINGS_DEEP_LINK";
Permission.LOADER_USAGE_STATS = "android.permission.LOADER_USAGE_STATS";
Permission.LOCATION_HARDWARE = "android.permission.LOCATION_HARDWARE";
Permission.MANAGE_DEVICE_LOCK_STATE = "android.permission.MANAGE_DEVICE_LOCK_STATE";
Permission.MANAGE_DEVICE_POLICY_ACCESSIBILITY = "android.permission.MANAGE_DEVICE_POLICY_ACCESSIBILITY";
Permission.MANAGE_DEVICE_POLICY_ACCOUNT_MANAGEMENT = "android.permission.MANAGE_DEVICE_POLICY_ACCOUNT_MANAGEMENT";
Permission.MANAGE_DEVICE_POLICY_ACROSS_USERS = "android.permission.MANAGE_DEVICE_POLICY_ACROSS_USERS";
Permission.MANAGE_DEVICE_POLICY_ACROSS_USERS_FULL = "android.permission.MANAGE_DEVICE_POLICY_ACROSS_USERS_FULL";
Permission.MANAGE_DEVICE_POLICY_ACROSS_USERS_SECURITY_CRITICAL = "android.permission.MANAGE_DEVICE_POLICY_ACROSS_USERS_SECURITY_CRITICAL";
Permission.MANAGE_DEVICE_POLICY_AIRPLANE_MODE = "android.permission.MANAGE_DEVICE_POLICY_AIRPLANE_MODE";
Permission.MANAGE_DEVICE_POLICY_APPS_CONTROL = "android.permission.MANAGE_DEVICE_POLICY_APPS_CONTROL";
Permission.MANAGE_DEVICE_POLICY_APP_RESTRICTIONS = "android.permission.MANAGE_DEVICE_POLICY_APP_RESTRICTIONS";
Permission.MANAGE_DEVICE_POLICY_APP_USER_DATA = "android.permission.MANAGE_DEVICE_POLICY_APP_USER_DATA";
Permission.MANAGE_DEVICE_POLICY_AUDIO_OUTPUT = "android.permission.MANAGE_DEVICE_POLICY_AUDIO_OUTPUT";
Permission.MANAGE_DEVICE_POLICY_AUTOFILL = "android.permission.MANAGE_DEVICE_POLICY_AUTOFILL";
Permission.MANAGE_DEVICE_POLICY_BACKUP_SERVICE = "android.permission.MANAGE_DEVICE_POLICY_BACKUP_SERVICE";
Permission.MANAGE_DEVICE_POLICY_BLUETOOTH = "android.permission.MANAGE_DEVICE_POLICY_BLUETOOTH";
Permission.MANAGE_DEVICE_POLICY_BUGREPORT = "android.permission.MANAGE_DEVICE_POLICY_BUGREPORT";
Permission.MANAGE_DEVICE_POLICY_CALLS = "android.permission.MANAGE_DEVICE_POLICY_CALLS";
Permission.MANAGE_DEVICE_POLICY_CAMERA = "android.permission.MANAGE_DEVICE_POLICY_CAMERA";
Permission.MANAGE_DEVICE_POLICY_CERTIFICATES = "android.permission.MANAGE_DEVICE_POLICY_CERTIFICATES";
Permission.MANAGE_DEVICE_POLICY_COMMON_CRITERIA_MODE = "android.permission.MANAGE_DEVICE_POLICY_COMMON_CRITERIA_MODE";
Permission.MANAGE_DEVICE_POLICY_DEBUGGING_FEATURES = "android.permission.MANAGE_DEVICE_POLICY_DEBUGGING_FEATURES";
Permission.MANAGE_DEVICE_POLICY_DEFAULT_SMS = "android.permission.MANAGE_DEVICE_POLICY_DEFAULT_SMS";
Permission.MANAGE_DEVICE_POLICY_DEVICE_IDENTIFIERS = "android.permission.MANAGE_DEVICE_POLICY_DEVICE_IDENTIFIERS";
Permission.MANAGE_DEVICE_POLICY_DISPLAY = "android.permission.MANAGE_DEVICE_POLICY_DISPLAY";
Permission.MANAGE_DEVICE_POLICY_FACTORY_RESET = "android.permission.MANAGE_DEVICE_POLICY_FACTORY_RESET";
Permission.MANAGE_DEVICE_POLICY_FUN = "android.permission.MANAGE_DEVICE_POLICY_FUN";
Permission.MANAGE_DEVICE_POLICY_INPUT_METHODS = "android.permission.MANAGE_DEVICE_POLICY_INPUT_METHODS";
Permission.MANAGE_DEVICE_POLICY_INSTALL_UNKNOWN_SOURCES = "android.permission.MANAGE_DEVICE_POLICY_INSTALL_UNKNOWN_SOURCES";
Permission.MANAGE_DEVICE_POLICY_KEEP_UNINSTALLED_PACKAGES = "android.permission.MANAGE_DEVICE_POLICY_KEEP_UNINSTALLED_PACKAGES";
Permission.MANAGE_DEVICE_POLICY_KEYGUARD = "android.permission.MANAGE_DEVICE_POLICY_KEYGUARD";
Permission.MANAGE_DEVICE_POLICY_LOCALE = "android.permission.MANAGE_DEVICE_POLICY_LOCALE";
Permission.MANAGE_DEVICE_POLICY_LOCATION = "android.permission.MANAGE_DEVICE_POLICY_LOCATION";
Permission.MANAGE_DEVICE_POLICY_LOCK = "android.permission.MANAGE_DEVICE_POLICY_LOCK";
Permission.MANAGE_DEVICE_POLICY_LOCK_CREDENTIALS = "android.permission.MANAGE_DEVICE_POLICY_LOCK_CREDENTIALS";
Permission.MANAGE_DEVICE_POLICY_LOCK_TASK = "android.permission.MANAGE_DEVICE_POLICY_LOCK_TASK";
Permission.MANAGE_DEVICE_POLICY_METERED_DATA = "android.permission.MANAGE_DEVICE_POLICY_METERED_DATA";
Permission.MANAGE_DEVICE_POLICY_MICROPHONE = "android.permission.MANAGE_DEVICE_POLICY_MICROPHONE";
Permission.MANAGE_DEVICE_POLICY_MOBILE_NETWORK = "android.permission.MANAGE_DEVICE_POLICY_MOBILE_NETWORK";
Permission.MANAGE_DEVICE_POLICY_MODIFY_USERS = "android.permission.MANAGE_DEVICE_POLICY_MODIFY_USERS";
Permission.MANAGE_DEVICE_POLICY_MTE = "android.permission.MANAGE_DEVICE_POLICY_MTE";
Permission.MANAGE_DEVICE_POLICY_NEARBY_COMMUNICATION = "android.permission.MANAGE_DEVICE_POLICY_NEARBY_COMMUNICATION";
Permission.MANAGE_DEVICE_POLICY_NETWORK_LOGGING = "android.permission.MANAGE_DEVICE_POLICY_NETWORK_LOGGING";
Permission.MANAGE_DEVICE_POLICY_ORGANIZATION_IDENTITY = "android.permission.MANAGE_DEVICE_POLICY_ORGANIZATION_IDENTITY";
Permission.MANAGE_DEVICE_POLICY_OVERRIDE_APN = "android.permission.MANAGE_DEVICE_POLICY_OVERRIDE_APN";
Permission.MANAGE_DEVICE_POLICY_PACKAGE_STATE = "android.permission.MANAGE_DEVICE_POLICY_PACKAGE_STATE";
Permission.MANAGE_DEVICE_POLICY_PHYSICAL_MEDIA = "android.permission.MANAGE_DEVICE_POLICY_PHYSICAL_MEDIA";
Permission.MANAGE_DEVICE_POLICY_PRINTING = "android.permission.MANAGE_DEVICE_POLICY_PRINTING";
Permission.MANAGE_DEVICE_POLICY_PRIVATE_DNS = "android.permission.MANAGE_DEVICE_POLICY_PRIVATE_DNS";
Permission.MANAGE_DEVICE_POLICY_PROFILES = "android.permission.MANAGE_DEVICE_POLICY_PROFILES";
Permission.MANAGE_DEVICE_POLICY_PROFILE_INTERACTION = "android.permission.MANAGE_DEVICE_POLICY_PROFILE_INTERACTION";
Permission.MANAGE_DEVICE_POLICY_PROXY = "android.permission.MANAGE_DEVICE_POLICY_PROXY";
Permission.MANAGE_DEVICE_POLICY_QUERY_SYSTEM_UPDATES = "android.permission.MANAGE_DEVICE_POLICY_QUERY_SYSTEM_UPDATES";
Permission.MANAGE_DEVICE_POLICY_RESET_PASSWORD = "android.permission.MANAGE_DEVICE_POLICY_RESET_PASSWORD";
Permission.MANAGE_DEVICE_POLICY_RESTRICT_PRIVATE_DNS = "android.permission.MANAGE_DEVICE_POLICY_RESTRICT_PRIVATE_DNS";
Permission.MANAGE_DEVICE_POLICY_RUNTIME_PERMISSIONS = "android.permission.MANAGE_DEVICE_POLICY_RUNTIME_PERMISSIONS";
Permission.MANAGE_DEVICE_POLICY_RUN_IN_BACKGROUND = "android.permission.MANAGE_DEVICE_POLICY_RUN_IN_BACKGROUND";
Permission.MANAGE_DEVICE_POLICY_SAFE_BOOT = "android.permission.MANAGE_DEVICE_POLICY_SAFE_BOOT";
Permission.MANAGE_DEVICE_POLICY_SCREEN_CAPTURE = "android.permission.MANAGE_DEVICE_POLICY_SCREEN_CAPTURE";
Permission.MANAGE_DEVICE_POLICY_SCREEN_CONTENT = "android.permission.MANAGE_DEVICE_POLICY_SCREEN_CONTENT";
Permission.MANAGE_DEVICE_POLICY_SECURITY_LOGGING = "android.permission.MANAGE_DEVICE_POLICY_SECURITY_LOGGING";
Permission.MANAGE_DEVICE_POLICY_SETTINGS = "android.permission.MANAGE_DEVICE_POLICY_SETTINGS";
Permission.MANAGE_DEVICE_POLICY_SMS = "android.permission.MANAGE_DEVICE_POLICY_SMS";
Permission.MANAGE_DEVICE_POLICY_STATUS_BAR = "android.permission.MANAGE_DEVICE_POLICY_STATUS_BAR";
Permission.MANAGE_DEVICE_POLICY_SUPPORT_MESSAGE = "android.permission.MANAGE_DEVICE_POLICY_SUPPORT_MESSAGE";
Permission.MANAGE_DEVICE_POLICY_SUSPEND_PERSONAL_APPS = "android.permission.MANAGE_DEVICE_POLICY_SUSPEND_PERSONAL_APPS";
Permission.MANAGE_DEVICE_POLICY_SYSTEM_APPS = "android.permission.MANAGE_DEVICE_POLICY_SYSTEM_APPS";
Permission.MANAGE_DEVICE_POLICY_SYSTEM_DIALOGS = "android.permission.MANAGE_DEVICE_POLICY_SYSTEM_DIALOGS";
Permission.MANAGE_DEVICE_POLICY_SYSTEM_UPDATES = "android.permission.MANAGE_DEVICE_POLICY_SYSTEM_UPDATES";
Permission.MANAGE_DEVICE_POLICY_TIME = "android.permission.MANAGE_DEVICE_POLICY_TIME";
Permission.MANAGE_DEVICE_POLICY_USB_DATA_SIGNALLING = "android.permission.MANAGE_DEVICE_POLICY_USB_DATA_SIGNALLING";
Permission.MANAGE_DEVICE_POLICY_USB_FILE_TRANSFER = "android.permission.MANAGE_DEVICE_POLICY_USB_FILE_TRANSFER";
Permission.MANAGE_DEVICE_POLICY_USERS = "android.permission.MANAGE_DEVICE_POLICY_USERS";
Permission.MANAGE_DEVICE_POLICY_VPN = "android.permission.MANAGE_DEVICE_POLICY_VPN";
Permission.MANAGE_DEVICE_POLICY_WALLPAPER = "android.permission.MANAGE_DEVICE_POLICY_WALLPAPER";
Permission.MANAGE_DEVICE_POLICY_WIFI = "android.permission.MANAGE_DEVICE_POLICY_WIFI";
Permission.MANAGE_DEVICE_POLICY_WINDOWS = "android.permission.MANAGE_DEVICE_POLICY_WINDOWS";
Permission.MANAGE_DEVICE_POLICY_WIPE_DATA = "android.permission.MANAGE_DEVICE_POLICY_WIPE_DATA";
Permission.MANAGE_DOCUMENTS = "android.permission.MANAGE_DOCUMENTS";
Permission.MANAGE_EXTERNAL_STORAGE = "android.permission.MANAGE_EXTERNAL_STORAGE";
Permission.MANAGE_MEDIA = "android.permission.MANAGE_MEDIA";
Permission.MANAGE_ONGOING_CALLS = "android.permission.MANAGE_ONGOING_CALLS";
Permission.MANAGE_OWN_CALLS = "android.permission.MANAGE_OWN_CALLS";
Permission.MANAGE_WIFI_INTERFACES = "android.permission.MANAGE_WIFI_INTERFACES";
Permission.MANAGE_WIFI_NETWORK_SELECTION = "android.permission.MANAGE_WIFI_NETWORK_SELECTION";
Permission.MASTER_CLEAR = "android.permission.MASTER_CLEAR";
Permission.MEDIA_CONTENT_CONTROL = "android.permission.MEDIA_CONTENT_CONTROL";
Permission.MODIFY_AUDIO_SETTINGS = "android.permission.MODIFY_AUDIO_SETTINGS";
Permission.MODIFY_PHONE_STATE = "android.permission.MODIFY_PHONE_STATE";
Permission.MOUNT_FORMAT_FILESYSTEMS = "android.permission.MOUNT_FORMAT_FILESYSTEMS";
Permission.MOUNT_UNMOUNT_FILESYSTEMS = "android.permission.MOUNT_UNMOUNT_FILESYSTEMS";
Permission.NEARBY_WIFI_DEVICES = "android.permission.NEARBY_WIFI_DEVICES";
Permission.NFC = "android.permission.NFC";
Permission.NFC_PREFERRED_PAYMENT_INFO = "android.permission.NFC_PREFERRED_PAYMENT_INFO";
Permission.NFC_TRANSACTION_EVENT = "android.permission.NFC_TRANSACTION_EVENT";
Permission.OVERRIDE_WIFI_CONFIG = "android.permission.OVERRIDE_WIFI_CONFIG";
Permission.PACKAGE_USAGE_STATS = "android.permission.PACKAGE_USAGE_STATS";
/** @deprecated */ Permission.PERSISTENT_ACTIVITY = "android.permission.PERSISTENT_ACTIVITY";
Permission.POST_NOTIFICATIONS = "android.permission.POST_NOTIFICATIONS";
/** @deprecated */ Permission.PROCESS_OUTGOING_CALLS = "android.permission.PROCESS_OUTGOING_CALLS";
Permission.PROVIDE_OWN_AUTOFILL_SUGGESTIONS = "android.permission.PROVIDE_OWN_AUTOFILL_SUGGESTIONS";
Permission.PROVIDE_REMOTE_CREDENTIALS = "android.permission.PROVIDE_REMOTE_CREDENTIALS";
Permission.QUERY_ALL_PACKAGES = "android.permission.QUERY_ALL_PACKAGES";
Permission.READ_ASSISTANT_APP_SEARCH_DATA = "android.permission.READ_ASSISTANT_APP_SEARCH_DATA";
Permission.READ_BASIC_PHONE_STATE = "android.permission.READ_BASIC_PHONE_STATE";
Permission.READ_CALENDAR = "android.permission.READ_CALENDAR";
Permission.READ_CALL_LOG = "android.permission.READ_CALL_LOG";
Permission.READ_CONTACTS = "android.permission.READ_CONTACTS";
Permission.READ_EXTERNAL_STORAGE = "android.permission.READ_EXTERNAL_STORAGE";
Permission.READ_HOME_APP_SEARCH_DATA = "android.permission.READ_HOME_APP_SEARCH_DATA";
/** @deprecated */ Permission.READ_INPUT_STATE = "android.permission.READ_INPUT_STATE";
Permission.READ_LOGS = "android.permission.READ_LOGS";
Permission.READ_MEDIA_AUDIO = "android.permission.READ_MEDIA_AUDIO";
Permission.READ_MEDIA_IMAGES = "android.permission.READ_MEDIA_IMAGES";
Permission.READ_MEDIA_VIDEO = "android.permission.READ_MEDIA_VIDEO";
Permission.READ_MEDIA_VISUAL_USER_SELECTED = "android.permission.READ_MEDIA_VISUAL_USER_SELECTED";
Permission.READ_NEARBY_STREAMING_POLICY = "android.permission.READ_NEARBY_STREAMING_POLICY";
Permission.READ_PHONE_NUMBERS = "android.permission.READ_PHONE_NUMBERS";
Permission.READ_PHONE_STATE = "android.permission.READ_PHONE_STATE";
Permission.READ_PRECISE_PHONE_STATE = "android.permission.READ_PRECISE_PHONE_STATE";
Permission.READ_SMS = "android.permission.READ_SMS";
Permission.READ_SYNC_SETTINGS = "android.permission.READ_SYNC_SETTINGS";
Permission.READ_SYNC_STATS = "android.permission.READ_SYNC_STATS";
Permission.READ_VOICEMAIL = "com.android.voicemail.permission.READ_VOICEMAIL";
Permission.REBOOT = "android.permission.REBOOT";
Permission.RECEIVE_BOOT_COMPLETED = "android.permission.RECEIVE_BOOT_COMPLETED";
Permission.RECEIVE_MMS = "android.permission.RECEIVE_MMS";
Permission.RECEIVE_SMS = "android.permission.RECEIVE_SMS";
Permission.RECEIVE_WAP_PUSH = "android.permission.RECEIVE_WAP_PUSH";
Permission.RECORD_AUDIO = "android.permission.RECORD_AUDIO";
Permission.REORDER_TASKS = "android.permission.REORDER_TASKS";
Permission.REQUEST_COMPANION_PROFILE_APP_STREAMING = "android.permission.REQUEST_COMPANION_PROFILE_APP_STREAMING";
Permission.REQUEST_COMPANION_PROFILE_AUTOMOTIVE_PROJECTION = "android.permission.REQUEST_COMPANION_PROFILE_AUTOMOTIVE_PROJECTION";
Permission.REQUEST_COMPANION_PROFILE_COMPUTER = "android.permission.REQUEST_COMPANION_PROFILE_COMPUTER";
Permission.REQUEST_COMPANION_PROFILE_GLASSES = "android.permission.REQUEST_COMPANION_PROFILE_GLASSES";
Permission.REQUEST_COMPANION_PROFILE_NEARBY_DEVICE_STREAMING = "android.permission.REQUEST_COMPANION_PROFILE_NEARBY_DEVICE_STREAMING";
Permission.REQUEST_COMPANION_PROFILE_WATCH = "android.permission.REQUEST_COMPANION_PROFILE_WATCH";
Permission.REQUEST_COMPANION_RUN_IN_BACKGROUND = "android.permission.REQUEST_COMPANION_RUN_IN_BACKGROUND";
Permission.REQUEST_COMPANION_SELF_MANAGED = "android.permission.REQUEST_COMPANION_SELF_MANAGED";
Permission.REQUEST_COMPANION_START_FOREGROUND_SERVICES_FROM_BACKGROUND = "android.permission.REQUEST_COMPANION_START_FOREGROUND_SERVICES_FROM_BACKGROUND";
Permission.REQUEST_COMPANION_USE_DATA_IN_BACKGROUND = "android.permission.REQUEST_COMPANION_USE_DATA_IN_BACKGROUND";
Permission.REQUEST_DELETE_PACKAGES = "android.permission.REQUEST_DELETE_PACKAGES";
Permission.REQUEST_IGNORE_BATTERY_OPTIMIZATIONS = "android.permission.REQUEST_IGNORE_BATTERY_OPTIMIZATIONS";
Permission.REQUEST_INSTALL_PACKAGES = "android.permission.REQUEST_INSTALL_PACKAGES";
Permission.REQUEST_OBSERVE_COMPANION_DEVICE_PRESENCE = "android.permission.REQUEST_OBSERVE_COMPANION_DEVICE_PRESENCE";
Permission.REQUEST_PASSWORD_COMPLEXITY = "android.permission.REQUEST_PASSWORD_COMPLEXITY";
/** @deprecated */ Permission.RESTART_PACKAGES = "android.permission.RESTART_PACKAGES";
Permission.RUN_USER_INITIATED_JOBS = "android.permission.RUN_USER_INITIATED_JOBS";
Permission.SCHEDULE_EXACT_ALARM = "android.permission.SCHEDULE_EXACT_ALARM";
Permission.SEND_RESPOND_VIA_MESSAGE = "android.permission.SEND_RESPOND_VIA_MESSAGE";
Permission.SEND_SMS = "android.permission.SEND_SMS";
Permission.SET_ALARM = "com.android.alarm.permission.SET_ALARM";
Permission.SET_ALWAYS_FINISH = "android.permission.SET_ALWAYS_FINISH";
Permission.SET_ANIMATION_SCALE = "android.permission.SET_ANIMATION_SCALE";
Permission.SET_DEBUG_APP = "android.permission.SET_DEBUG_APP";
/** @deprecated */ Permission.SET_PREFERRED_APPLICATIONS = "android.permission.SET_PREFERRED_APPLICATIONS";
Permission.SET_PROCESS_LIMIT = "android.permission.SET_PROCESS_LIMIT";
Permission.SET_TIME = "android.permission.SET_TIME";
Permission.SET_TIME_ZONE = "android.permission.SET_TIME_ZONE";
Permission.SET_WALLPAPER = "android.permission.SET_WALLPAPER";
Permission.SET_WALLPAPER_HINTS = "android.permission.SET_WALLPAPER_HINTS";
Permission.SIGNAL_PERSISTENT_PROCESSES = "android.permission.SIGNAL_PERSISTENT_PROCESSES";
/** @deprecated */ Permission.SMS_FINANCIAL_TRANSACTIONS = "android.permission.SMS_FINANCIAL_TRANSACTIONS";
Permission.START_FOREGROUND_SERVICES_FROM_BACKGROUND = "android.permission.START_FOREGROUND_SERVICES_FROM_BACKGROUND";
Permission.START_VIEW_APP_FEATURES = "android.permission.START_VIEW_APP_FEATURES";
Permission.START_VIEW_PERMISSION_USAGE = "android.permission.START_VIEW_PERMISSION_USAGE";
Permission.STATUS_BAR = "android.permission.STATUS_BAR";
Permission.SUBSCRIBE_TO_KEYGUARD_LOCKED_STATE = "android.permission.SUBSCRIBE_TO_KEYGUARD_LOCKED_STATE";
// 浮窗
Permission.SYSTEM_ALERT_WINDOW = "android.permission.SYSTEM_ALERT_WINDOW";
Permission.TRANSMIT_IR = "android.permission.TRANSMIT_IR";
Permission.TURN_SCREEN_ON = "android.permission.TURN_SCREEN_ON";
Permission.UNINSTALL_SHORTCUT = "com.android.launcher.permission.UNINSTALL_SHORTCUT";
Permission.UPDATE_DEVICE_STATS = "android.permission.UPDATE_DEVICE_STATS";
Permission.UPDATE_PACKAGES_WITHOUT_USER_ACTION = "android.permission.UPDATE_PACKAGES_WITHOUT_USER_ACTION";
Permission.USE_BIOMETRIC = "android.permission.USE_BIOMETRIC";
Permission.USE_EXACT_ALARM = "android.permission.USE_EXACT_ALARM";
/** @deprecated */ Permission.USE_FINGERPRINT = "android.permission.USE_FINGERPRINT";
Permission.USE_FULL_SCREEN_INTENT = "android.permission.USE_FULL_SCREEN_INTENT";
Permission.USE_ICC_AUTH_WITH_DEVICE_IDENTIFIER = "android.permission.USE_ICC_AUTH_WITH_DEVICE_IDENTIFIER";
Permission.USE_SIP = "android.permission.USE_SIP";
Permission.UWB_RANGING = "android.permission.UWB_RANGING";
Permission.VIBRATE = "android.permission.VIBRATE";
Permission.WAKE_LOCK = "android.permission.WAKE_LOCK";
Permission.WRITE_APN_SETTINGS = "android.permission.WRITE_APN_SETTINGS";
Permission.WRITE_CALENDAR = "android.permission.WRITE_CALENDAR";
Permission.WRITE_CALL_LOG = "android.permission.WRITE_CALL_LOG";
Permission.WRITE_CONTACTS = "android.permission.WRITE_CONTACTS";
Permission.WRITE_EXTERNAL_STORAGE = "android.permission.WRITE_EXTERNAL_STORAGE";
Permission.WRITE_GSERVICES = "android.permission.WRITE_GSERVICES";
Permission.WRITE_SECURE_SETTINGS = "android.permission.WRITE_SECURE_SETTINGS";
Permission.WRITE_SETTINGS = "android.permission.WRITE_SETTINGS";
Permission.WRITE_SYNC_SETTINGS = "android.permission.WRITE_SYNC_SETTINGS";
Permission.WRITE_VOICEMAIL = "com.android.voicemail.permission.WRITE_VOICEMAIL";
class Manifest {
}
Manifest.Permission = Permission;
Manifest.PermissionGroup = PermissionGroup;


/***/ })

}]);
//# sourceMappingURL=307-1fef047e66324bc5.js.map