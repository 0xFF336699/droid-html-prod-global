(self["webpackChunk_N_E"] = self["webpackChunk_N_E"] || []).push([[7769],{

/***/ 20939:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

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

"use strict";
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

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   IL: () => (/* binding */ createDefaultWindowConf),
/* harmony export */   Sb: () => (/* binding */ createWindowConfCopy),
/* harmony export */   Wl: () => (/* binding */ createDefaultFloatWindowConf),
/* harmony export */   Ww: () => (/* binding */ FloatSidePattern),
/* harmony export */   YC: () => (/* binding */ FloatShowPattern),
/* harmony export */   ZI: () => (/* binding */ WindowType),
/* harmony export */   cM: () => (/* binding */ ContentType),
/* harmony export */   fF: () => (/* binding */ createDefaultSysWindowConf),
/* harmony export */   rn: () => (/* binding */ Gravity),
/* harmony export */   yu: () => (/* binding */ createDefaultDialogWindowConf)
/* harmony export */ });
/* unused harmony exports GravityDisplayNames, DisplayNameToGravity, getGravityDisplayName, getGravityOptions, webViewJsParams, webViewConf, htmlConf, floatConf, floatWindowConf, windowConf, getDefaulWindowConf, createDefaultWebViewJsParams, createDefaultWebViewConf, createDefaultGravityInfo, createDefaultBorderInfo, createDefaultMatchParentInfo, createDefaultHtmlConf, createDefaultFloatConf */
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
 * Gravity 值的可读名称映射
 * 用于 UI 显示时将整数值转换为可读的中文文本
 */ const GravityDisplayNames = {
    [3]: '左对齐',
    [5]: '右对齐',
    [8388613]: '末端对齐 (RTL)',
    [8388608]: '起始对齐 (RTL)',
    [48]: '上对齐',
    [80]: '下对齐',
    [17]: '居中',
    [1]: '水平居中',
    [16]: '竖直居中',
    [0]: '无对齐'
};
/**
 * 反向映射：显示名称 → Gravity 值
 * 用于从 UI 选择转换回 Gravity 值
 */ const DisplayNameToGravity = Object.entries(GravityDisplayNames).reduce((acc, param)=>{
    let [key, value] = param;
    return {
        ...acc,
        [value]: Number(key)
    };
}, {});
/**
 * 获取 Gravity 的可读显示名称
 * @param gravity Gravity 整数值
 * @returns 可读的中文文本
 */ function getGravityDisplayName(gravity) {
    return GravityDisplayNames[gravity] || "未知 (".concat(gravity, ")");
}
/**
 * 获取所有可用的 Gravity 选项
 * 用于生成 Select 下拉框的选项
 */ function getGravityOptions() {
    return Object.entries(GravityDisplayNames).map((param)=>{
        let [key, value] = param;
        return {
            value: Number(key),
            label: value
        };
    });
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
const webViewJsParams = {
    fitContentWidth: 0,
    fitContentHeight: 0,
    javaToJsDataString: ""
};
const webViewConf = {
    backgroundColor: 0
};
const htmlConf = {
    url: "",
    webViewJsParams: webViewJsParams,
    webViewConf: webViewConf,
    jsBridgeName: 'android',
    webViewJsName: 'AutoWebViewJs'
};
const floatConf = {
    positionSaveName: '${positionSaveName}',
    draggable: true,
    showPattern: "ALL_TIME",
    hasEditText: false,
    sidePattern: "RESULT_HORIZONTAL",
    gravity: {
        gravity: 8388613,
        offsetX: 0,
        offsetY: 200
    },
    layoutChangedGravity: 8388613,
    border: {
        left: 100,
        top: 100,
        right: 800,
        bottom: 800
    },
    matchParent: {
        widthMatch: false,
        heightMatch: false
    }
};
const floatWindowConf = {
    floatConf: floatConf
};
const windowConf = {
    tag: '',
    contentType: "html",
    windowType: "float",
    htmlConf: htmlConf,
    floatWindowConf: floatWindowConf,
    windowId: (0,_barrel_optimize_names_ulid_ulid__WEBPACK_IMPORTED_MODULE_0__/* .ulid */ .Z0)(),
    forceDismissWindowTime: 0
};
function getDefaulWindowConf() {
    return JSON.parse(JSON.stringify(windowConf));
}
function createWindowConfCopy(conf) {
    return lodash__WEBPACK_IMPORTED_MODULE_1___default().merge({}, windowConf, conf);
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
        gravity: 17
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
        hasEditText: false,
        sidePattern: "RESULT_HORIZONTAL",
        gravity: createDefaultGravityInfo(),
        layoutChangedGravity: 8388613,
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

/***/ 66908:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {


    (window.__NEXT_P = window.__NEXT_P || []).push([
      "/float-window-add",
      function () {
        return __webpack_require__(85019);
      }
    ]);
    if(false) {}
  

/***/ }),

/***/ 67236:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

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
var i18n_value_loader = __webpack_require__(27950);
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

"use strict";

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

/***/ 85019:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ AndroidFloatWindow)
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/react@19.1.0/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(94513);
// EXTERNAL MODULE: ../../libs/app/ui/src/components/app/AppShell.tsx + 2 modules
var AppShell = __webpack_require__(20939);
// EXTERNAL MODULE: ../../libs/app/ui/src/components/appbar/AppBar.tsx + 3 modules
var AppBar = __webpack_require__(97972);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react-i18next@15.6.0_i18next@24.2.3_typescript@5.7.3__react-dom@19.1.0_react@19.1.0__react@19.1.0_typescript@5.7.3/node_modules/react-i18next/dist/es/index.js + 15 modules
var es = __webpack_require__(50279);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react@19.1.0/node_modules/react/index.js
var react = __webpack_require__(94285);
// EXTERNAL MODULE: ../../node_modules/.pnpm/next@15.3.5_@babel+core@7.28.0_babel-plugin-macros@3.1.0_react-dom@19.1.0_react@19.1.0__react@19.1.0_sass@1.89.2/node_modules/next/router.js
var next_router = __webpack_require__(75640);
// EXTERNAL MODULE: ./src/components/android-float/window/data.ts
var data = __webpack_require__(70011);
// EXTERNAL MODULE: ../../libs/droid/android/src/android/win/WindowConf.ts
var WindowConf = __webpack_require__(39800);
// EXTERNAL MODULE: ../../libs/fanfanlo/src/watcher/proxyWatch.ts
var proxyWatch = __webpack_require__(88518);
// EXTERNAL MODULE: ../../libs/fanfanlo/src/watcher/useProxyWatch.ts
var useProxyWatch = __webpack_require__(45007);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/Box/Box.js + 2 modules
var Box = __webpack_require__(6445);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/Stepper/Stepper.js + 3 modules
var Stepper = __webpack_require__(38359);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/Step/Step.js + 1 modules
var Step = __webpack_require__(44135);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/StepLabel/StepLabel.js + 5 modules
var StepLabel = __webpack_require__(10788);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/Alert/Alert.js + 6 modules
var Alert = __webpack_require__(81482);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/Button/Button.js + 3 modules
var Button = __webpack_require__(28669);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/Stack/Stack.js + 1 modules
var Stack = __webpack_require__(9220);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/Typography/Typography.js
var Typography = __webpack_require__(67079);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/Select/Select.js + 5 modules
var Select = __webpack_require__(7313);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/MenuItem/MenuItem.js + 2 modules
var MenuItem = __webpack_require__(82797);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/TextField/TextField.js + 1 modules
var TextField = __webpack_require__(38771);
// EXTERNAL MODULE: ./src/components/android-float/window/WindowConfUI.tsx
var WindowConfUI = __webpack_require__(50079);
;// ./src/components/android-float/window/Step1BasicInfo.tsx





/**
 * Step 1: 基本信息
 *
 * 用户输入：
 * - windowType: 窗口类型 (Float/Dialog/System)
 * - tag: 窗口标识 (必填)
 * - description: 窗口说明 (可选)
 */ function Step1BasicInfo(param) {
    let { conf } = param;
    const { t } = (0,es/* useTranslation */.Bd)('homepage/components/android-float/window/content');
    const [windowType] = (0,useProxyWatch/* useProxyWatch */.x)(conf, 'windowType', conf.windowType);
    const [tag] = (0,useProxyWatch/* useProxyWatch */.x)(conf, 'tag', conf.tag);
    const [description] = (0,useProxyWatch/* useProxyWatch */.x)(conf, 'description', conf.description || '');
    console.log('Step1BasicInfo: render windowType:', windowType, 'tag:', tag);
    /**
   * 获取窗口类型说明
   */ const getWindowTypeDescription = ()=>{
        switch(windowType){
            case WindowConf/* WindowType */.ZI.Float:
                return t('Step1BasicInfo.floatDesc');
            case WindowConf/* WindowType */.ZI.Dialog:
                return t('Step1BasicInfo.dialogDesc');
            case WindowConf/* WindowType */.ZI.System:
                return t('Step1BasicInfo.systemDesc');
            default:
                return '';
        }
    };
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(Stack/* default */.A, {
        spacing: 3,
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.A, {
                variant: "h6",
                children: t('Step1BasicInfo.title')
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Alert/* default */.A, {
                severity: "info",
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.A, {
                    variant: "body2",
                    children: t('Step1BasicInfo.description')
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.A, {
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(WindowConfUI/* RequiredLabel */.g2, {
                        label: t('Step1BasicInfo.windowTypeLabel'),
                        description: t('Step1BasicInfo.windowTypeDesc')
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)(Select/* default */.A, {
                        value: windowType,
                        onChange: (e)=>{
                            const newType = e.target.value;
                            console.log('Step1BasicInfo: windowType changed to', newType);
                            conf.windowType = newType;
                        },
                        size: "small",
                        fullWidth: true,
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(MenuItem/* default */.A, {
                                value: WindowConf/* WindowType */.ZI.Float,
                                children: "浮窗 (Float)"
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(MenuItem/* default */.A, {
                                value: WindowConf/* WindowType */.ZI.Dialog,
                                children: "对话框 (Dialog)"
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(MenuItem/* default */.A, {
                                value: WindowConf/* WindowType */.ZI.System,
                                children: "系统窗口 (System)"
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.A, {
                        variant: "caption",
                        color: "text.secondary",
                        sx: {
                            mt: 1,
                            display: 'block'
                        },
                        children: getWindowTypeDescription()
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.A, {
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(WindowConfUI/* RequiredLabel */.g2, {
                        label: t('Step1BasicInfo.tagLabel'),
                        description: t('Step1BasicInfo.tagDesc')
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(TextField/* default */.A, {
                        value: tag,
                        onChange: (e)=>{
                            console.log('Step1BasicInfo: tag changed to', e.target.value);
                            conf.tag = e.target.value;
                        },
                        placeholder: t('Step1BasicInfo.tagPlaceholder'),
                        size: "small",
                        fullWidth: true,
                        helperText: t('Step1BasicInfo.tagHelper')
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.A, {
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(WindowConfUI/* OptionalLabel */.zh, {
                        label: t('Step1BasicInfo.descriptionLabel'),
                        description: t('Step1BasicInfo.descriptionDesc')
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(TextField/* default */.A, {
                        value: description,
                        onChange: (e)=>{
                            console.log('Step1BasicInfo: description changed to', e.target.value);
                            conf.description = e.target.value;
                        },
                        placeholder: t('Step1BasicInfo.descriptionPlaceholder'),
                        size: "small",
                        fullWidth: true,
                        multiline: true,
                        rows: 3
                    })
                ]
            })
        ]
    });
}

// EXTERNAL MODULE: ./src/components/android-float/window/HtmlConfUI.tsx
var HtmlConfUI = __webpack_require__(81780);
;// ./src/components/android-float/window/Step2HtmlConf.tsx




/**
 * Step 2: HTML 内容配置
 *
 * 用户配置：
 * - htmlConf.url: 内容 URL (可选，但与 html 二选一)
 * - htmlConf.html: 内嵌 HTML 代码 (可选，但与 url 二选一)
 * - htmlConf.jsBridgeName: 注入的 JS Bridge 名称
 * - htmlConf.webViewJsName: WebView JS 类型
 * - htmlConf.javaRunnerId: Java Runner ID
 * - htmlConf.webViewJsParams: WebView JS 参数
 * - htmlConf.webViewConf: WebView 配置
 */ function Step2HtmlConf(param) {
    let { conf } = param;
    const [htmlConf] = (0,useProxyWatch/* useProxyWatch */.x)(conf, 'htmlConf', conf.htmlConf);
    const { t } = (0,es/* useTranslation */.Bd)('homepage/components/android-float/window/content');
    console.log('Step2HtmlConf: render htmlConf:', htmlConf);
    if (!htmlConf) {
        return null;
    }
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(Stack/* default */.A, {
        spacing: 3,
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.A, {
                variant: "h6",
                children: t('Step2HtmlConf.title')
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Alert/* default */.A, {
                severity: "info",
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.A, {
                    variant: "body2",
                    children: t('Step2HtmlConf.description')
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(HtmlConfUI/* HtmlConfUI */.A, {
                htmlConf: htmlConf
            })
        ]
    });
}

;// ./src/components/android-float/window/Step3WindowType.tsx





/**
 * Step 3: 窗口特定配置
 *
 * 根据 windowType 显示对应的配置组件：
 * - Float: FloatWindowConfUI
 * - Dialog: DialogWindowConfUI
 * - System: SysWindowConfUI
 */ function Step3WindowType(param) {
    let { conf } = param;
    const [windowType] = (0,useProxyWatch/* useProxyWatch */.x)(conf, 'windowType', conf.windowType);
    const [floatWindowConf] = (0,useProxyWatch/* useProxyWatch */.x)(conf, 'floatWindowConf', conf.floatWindowConf);
    const [dialogWindowConf] = (0,useProxyWatch/* useProxyWatch */.x)(conf, 'dialogWindowConf', conf.dialogWindowConf);
    const [systemWindowConf] = (0,useProxyWatch/* useProxyWatch */.x)(conf, 'systemWindowConf', conf.systemWindowConf);
    const { t } = (0,es/* useTranslation */.Bd)('homepage/components/android-float/window/content');
    console.log('Step3WindowType: render windowType:', windowType);
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(Stack/* default */.A, {
        spacing: 3,
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.A, {
                variant: "h6",
                children: t('Step3WindowType.title')
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Alert/* default */.A, {
                severity: "info",
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.A, {
                    variant: "body2",
                    children: t('Step3WindowType.description')
                })
            }),
            windowType === WindowConf/* WindowType */.ZI.Float && floatWindowConf && /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.A, {
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.A, {
                        variant: "subtitle2",
                        sx: {
                            fontWeight: 'bold',
                            color: 'primary.main',
                            mb: 2
                        },
                        children: t('Step3WindowType.floatConfig')
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(WindowConfUI/* FloatWindowConfUI */.JI, {
                        floatWindowConf: floatWindowConf
                    })
                ]
            }),
            windowType === WindowConf/* WindowType */.ZI.Dialog && dialogWindowConf && /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.A, {
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.A, {
                        variant: "subtitle2",
                        sx: {
                            fontWeight: 'bold',
                            color: 'primary.main',
                            mb: 2
                        },
                        children: t('Step3WindowType.dialogConfig')
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(WindowConfUI/* DialogWindowConfUI */.TP, {
                        dialogWindowConf: dialogWindowConf
                    })
                ]
            }),
            windowType === WindowConf/* WindowType */.ZI.System && systemWindowConf && /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.A, {
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.A, {
                        variant: "subtitle2",
                        sx: {
                            fontWeight: 'bold',
                            color: 'primary.main',
                            mb: 2
                        },
                        children: t('Step3WindowType.systemConfig')
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(WindowConfUI/* SysWindowConfUI */.o0, {
                        systemWindowConf: systemWindowConf
                    })
                ]
            })
        ]
    });
}

;// ./src/components/android-float/window/Step4Advanced.tsx





/**
 * Step 4: 高级选项
 *
 * 配置：
 * - forceDismissWindowTime: 强制关闭时间
 * - WebViewConf: WebView 配置
 * - 显示完成总结
 */ function Step4Advanced(param) {
    let { conf } = param;
    const [forceDismissWindowTime] = (0,useProxyWatch/* useProxyWatch */.x)(conf, 'forceDismissWindowTime', conf.forceDismissWindowTime);
    const [htmlConf] = (0,useProxyWatch/* useProxyWatch */.x)(conf, 'htmlConf', conf.htmlConf);
    const [tag] = (0,useProxyWatch/* useProxyWatch */.x)(conf, 'tag', conf.tag);
    const { t } = (0,es/* useTranslation */.Bd)('homepage/components/android-float/window/content');
    console.log('Step4Advanced: render forceDismissWindowTime:', forceDismissWindowTime);
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(Stack/* default */.A, {
        spacing: 3,
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.A, {
                variant: "h6",
                children: t('Step4Advanced.title')
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Alert/* default */.A, {
                severity: "info",
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.A, {
                    variant: "body2",
                    children: t('Step4Advanced.description')
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.A, {
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(WindowConfUI/* OptionalLabel */.zh, {
                        label: t('Step4Advanced.dismissTimeLabel'),
                        description: t('Step4Advanced.dismissTimeDesc')
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(TextField/* default */.A, {
                        type: "number",
                        value: forceDismissWindowTime,
                        onChange: (e)=>{
                            console.log('Step4Advanced: forceDismissWindowTime changed to', e.target.value);
                            conf.forceDismissWindowTime = Number(e.target.value);
                        },
                        size: "small",
                        fullWidth: true,
                        inputProps: {
                            min: 0,
                            step: 1000
                        }
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.A, {
                        variant: "caption",
                        color: "text.secondary",
                        sx: {
                            mt: 1,
                            display: 'block'
                        },
                        children: t('Step4Advanced.dismissTimeHelper')
                    })
                ]
            }),
            (htmlConf === null || htmlConf === void 0 ? void 0 : htmlConf.webViewConf) && /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.A, {
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.A, {
                        variant: "subtitle2",
                        sx: {
                            fontWeight: 'bold',
                            color: 'primary.main',
                            mb: 2
                        },
                        children: t('Step4Advanced.webViewConfig')
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(WindowConfUI/* WebViewConfUI */.q2, {
                        webViewConf: htmlConf.webViewConf
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.A, {
                sx: {
                    p: 2,
                    bgcolor: 'success.light',
                    borderRadius: 1
                },
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.A, {
                        variant: "subtitle2",
                        sx: {
                            fontWeight: 'bold',
                            mb: 1
                        },
                        children: t('Step4Advanced.completeSummary')
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)(Stack/* default */.A, {
                        spacing: 0.5,
                        sx: {
                            fontSize: '0.875rem'
                        },
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)(Typography/* default */.A, {
                                variant: "body2",
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("strong", {
                                        children: t('Step4Advanced.summaryTag')
                                    }),
                                    " ",
                                    tag
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)(Typography/* default */.A, {
                                variant: "body2",
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("strong", {
                                        children: t('Step4Advanced.summaryType')
                                    }),
                                    " ",
                                    conf.windowType
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)(Typography/* default */.A, {
                                variant: "body2",
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("strong", {
                                        children: t('Step4Advanced.summaryUrl')
                                    }),
                                    " ",
                                    (htmlConf === null || htmlConf === void 0 ? void 0 : htmlConf.url) || '(未设置)'
                                ]
                            }),
                            (htmlConf === null || htmlConf === void 0 ? void 0 : htmlConf.html) && /*#__PURE__*/ (0,jsx_runtime.jsxs)(Typography/* default */.A, {
                                variant: "body2",
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("strong", {
                                        children: t('Step4Advanced.summaryHtml')
                                    }),
                                    " ",
                                    htmlConf.html.substring(0, 50),
                                    "..."
                                ]
                            })
                        ]
                    })
                ]
            })
        ]
    });
}

;// ./src/components/android-float/window/WindowConfWizard.tsx









/**
 * WindowConfWizard - 分步引导创建窗口配置
 *
 * 4 个步骤：
 * 1. 基本信息 (窗口类型、标识、说明)
 * 2. HTML 内容 (URL 或 HTML 代码)
 * 3. 窗口特定配置 (根据窗口类型)
 * 4. 高级选项 (强制关闭时间、WebView 配置)
 */ function WindowConfWizard(param) {
    let { onComplete, onCancel } = param;
    const { t } = (0,es/* useTranslation */.Bd)('homepage/components/android-float/window/content');
    const [step, setStep] = (0,react.useState)(1);
    const [conf] = (0,react.useState)(()=>(0,proxyWatch/* toProxy */.I$)((0,WindowConf/* createDefaultWindowConf */.IL)()));
    const [errors, setErrors] = (0,react.useState)({});
    // 监听 windowType 变化，使用 useProxyWatch
    const [windowType] = (0,useProxyWatch/* useProxyWatch */.x)(conf, 'windowType', conf.windowType);
    console.log('WindowConfWizard: render step', step);
    /**
   * 监听 windowType 变化，初始化对应的窗口配置
   */ (0,react.useEffect)(()=>{
        console.log('WindowConfWizard: useEffect - windowType changed to', windowType);
        // 清空其他窗口类型的配置
        conf.floatWindowConf = undefined;
        conf.dialogWindowConf = undefined;
        conf.systemWindowConf = undefined;
        // 根据 windowType 初始化对应的配置
        switch(windowType){
            case WindowConf/* WindowType */.ZI.Float:
                console.log('WindowConfWizard: initializing floatWindowConf');
                conf.floatWindowConf = (0,WindowConf/* createDefaultFloatWindowConf */.Wl)();
                break;
            case WindowConf/* WindowType */.ZI.Dialog:
                console.log('WindowConfWizard: initializing dialogWindowConf');
                conf.dialogWindowConf = (0,WindowConf/* createDefaultDialogWindowConf */.yu)();
                break;
            case WindowConf/* WindowType */.ZI.System:
                console.log('WindowConfWizard: initializing systemWindowConf');
                conf.systemWindowConf = (0,WindowConf/* createDefaultSysWindowConf */.fF)();
                break;
        }
    }, [
        windowType,
        conf
    ]);
    /**
   * 验证当前步骤的必填字段
   */ const validateStep = (currentStep)=>{
        console.log('WindowConfWizard: validateStep', currentStep);
        switch(currentStep){
            case 1:
                // Step 1: tag 必填
                const isStep1Valid = conf.tag.trim() !== '';
                console.log('WindowConfWizard: Step 1 validation - tag:', conf.tag, 'valid:', isStep1Valid);
                return isStep1Valid;
            case 2:
                var _conf_htmlConf, _conf_htmlConf1;
                // Step 2: url 和 html 必须二选一
                const url = (((_conf_htmlConf = conf.htmlConf) === null || _conf_htmlConf === void 0 ? void 0 : _conf_htmlConf.url) || '').trim();
                const html = (((_conf_htmlConf1 = conf.htmlConf) === null || _conf_htmlConf1 === void 0 ? void 0 : _conf_htmlConf1.html) || '').trim();
                const isStep2Valid = url !== '' || html !== '';
                console.log('WindowConfWizard: Step 2 validation - url:', url, 'html:', html, 'valid:', isStep2Valid);
                return isStep2Valid;
            case 3:
                // Step 3: 根据 windowType 选择对应的配置
                let isStep3Valid = false;
                switch(conf.windowType){
                    case WindowConf/* WindowType */.ZI.Float:
                        isStep3Valid = conf.floatWindowConf !== undefined;
                        break;
                    case WindowConf/* WindowType */.ZI.Dialog:
                        isStep3Valid = conf.dialogWindowConf !== undefined;
                        break;
                    case WindowConf/* WindowType */.ZI.System:
                        isStep3Valid = conf.systemWindowConf !== undefined;
                        break;
                }
                console.log('WindowConfWizard: Step 3 validation - windowType:', conf.windowType, 'valid:', isStep3Valid);
                return isStep3Valid;
            case 4:
                // Step 4: 无强制验证
                console.log('WindowConfWizard: Step 4 validation - no validation required');
                return true;
            default:
                return true;
        }
    };
    /**
   * 处理下一步
   */ const handleNext = ()=>{
        console.log('WindowConfWizard: handleNext called, current step:', step);
        if (validateStep(step)) {
            console.log('WindowConfWizard: validation passed');
            if (step < 4) {
                setStep(step + 1);
            } else {
                console.log('WindowConfWizard: calling onComplete');
                onComplete(conf);
            }
            setErrors({});
        } else {
            console.log('WindowConfWizard: validation failed');
            setErrors({
                ...errors,
                [step]: t('WindowConfWizard.validationError') || '请填写所有必填项'
            });
        }
    };
    /**
   * 处理上一步
   */ const handlePrevious = ()=>{
        console.log('WindowConfWizard: handlePrevious called, current step:', step);
        if (step > 1) {
            setStep(step - 1);
            setErrors({});
        }
    };
    /**
   * 处理取消
   */ const handleCancel = ()=>{
        console.log('WindowConfWizard: calling onCancel');
        onCancel();
    };
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.A, {
        sx: {
            p: 3
        },
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsxs)(Stepper/* default */.A, {
                activeStep: step - 1,
                sx: {
                    mb: 4
                },
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Step/* default */.A, {
                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(StepLabel/* default */.A, {
                            children: t('WindowConfWizard.basicInfo')
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Step/* default */.A, {
                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(StepLabel/* default */.A, {
                            children: t('WindowConfWizard.htmlContent')
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Step/* default */.A, {
                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(StepLabel/* default */.A, {
                            children: t('WindowConfWizard.windowConfig')
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Step/* default */.A, {
                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(StepLabel/* default */.A, {
                            children: t('WindowConfWizard.advancedOptions')
                        })
                    })
                ]
            }),
            errors[step] && /*#__PURE__*/ (0,jsx_runtime.jsx)(Alert/* default */.A, {
                severity: "error",
                sx: {
                    mb: 2
                },
                children: errors[step]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.A, {
                sx: {
                    minHeight: 400,
                    mb: 3
                },
                children: [
                    step === 1 && /*#__PURE__*/ (0,jsx_runtime.jsx)(Step1BasicInfo, {
                        conf: conf
                    }),
                    step === 2 && /*#__PURE__*/ (0,jsx_runtime.jsx)(Step2HtmlConf, {
                        conf: conf
                    }),
                    step === 3 && /*#__PURE__*/ (0,jsx_runtime.jsx)(Step3WindowType, {
                        conf: conf
                    }),
                    step === 4 && /*#__PURE__*/ (0,jsx_runtime.jsx)(Step4Advanced, {
                        conf: conf
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.A, {
                sx: {
                    display: 'flex',
                    gap: 1,
                    justifyContent: 'flex-end'
                },
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Button/* default */.A, {
                        onClick: handleCancel,
                        children: t('WindowConfWizard.cancel')
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Button/* default */.A, {
                        disabled: step === 1,
                        onClick: handlePrevious,
                        children: t('WindowConfWizard.previousStep')
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Button/* default */.A, {
                        variant: "contained",
                        onClick: handleNext,
                        children: step === 4 ? t('WindowConfWizard.completeCreate') : t('WindowConfWizard.nextStep')
                    })
                ]
            })
        ]
    });
}

;// ./src/components/android-float/window/AddWindowContent.tsx





function AddWindowContent() {
    const router = (0,next_router.useRouter)();
    (0,react.useEffect)(()=>{
        console.log('AddWindowContent: init');
        data/* androidFloatWindowData */.Kl.init();
    }, []);
    /**
   * 处理向导完成 - 添加窗口配置到列表
   */ const handleWizardComplete = (conf)=>{
        console.log('AddWindowContent: handleWizardComplete, adding window config:', conf.tag);
        data/* androidFloatWindowData */.Kl.data.windowData.windowList.push(conf);
        router.back();
    };
    /**
   * 处理向导取消
   */ const handleWizardCancel = ()=>{
        console.log('AddWindowContent: handleWizardCancel');
        router.back();
    };
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(WindowConfWizard, {
        onComplete: handleWizardComplete,
        onCancel: handleWizardCancel
    });
}

;// ./src/pages/float-window-add/index.tsx




function AndroidFloatWindow() {
    const { t } = (0,es/* useTranslation */.Bd)('homepage/pages/android-float-window/content');
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(AppShell/* AppShell */.G, {
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(AppBar/* AppbarContainer */.W, {
            appbarProps: {
                title: t('content.title'),
                back: true
            },
            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(AddWindowContent, {})
        })
    });
}


/***/ }),

/***/ 97972:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  W: () => (/* binding */ AppbarContainer)
});

// UNUSED EXPORTS: Appbar

// EXTERNAL MODULE: ../../node_modules/.pnpm/react@19.1.0/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(94513);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/useScrollTrigger/useScrollTrigger.js
var useScrollTrigger = __webpack_require__(97241);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/Slide/Slide.js
var Slide = __webpack_require__(62115);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/Fade/Fade.js
var Fade = __webpack_require__(41837);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/Box/Box.js + 2 modules
var Box = __webpack_require__(6445);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/CssBaseline/CssBaseline.js
var CssBaseline = __webpack_require__(32055);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/AppBar/AppBar.js + 1 modules
var AppBar_AppBar = __webpack_require__(16844);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/Toolbar/Toolbar.js + 1 modules
var Toolbar_Toolbar = __webpack_require__(21436);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/Container/Container.js + 1 modules
var Container = __webpack_require__(44437);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/Fab/Fab.js + 1 modules
var Fab = __webpack_require__(12726);
// EXTERNAL MODULE: ../../libs/fanfanlo/src/utils/browser/window-history-utils.ts
var window_history_utils = __webpack_require__(70574);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+icons-material@6.4.12_@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_re_5ewkm5t5g27pzq5tz62v6ktvti/node_modules/@mui/icons-material/esm/KeyboardArrowLeft.js
var KeyboardArrowLeft = __webpack_require__(47951);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+icons-material@6.4.12_@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_re_5ewkm5t5g27pzq5tz62v6ktvti/node_modules/@mui/icons-material/esm/KeyboardArrowUp.js
var KeyboardArrowUp = __webpack_require__(94283);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react@19.1.0/node_modules/react/index.js
var react = __webpack_require__(94285);
// EXTERNAL MODULE: ../../node_modules/.pnpm/next@15.3.5_@babel+core@7.28.0_babel-plugin-macros@3.1.0_react-dom@19.1.0_react@19.1.0__react@19.1.0_sass@1.89.2/node_modules/next/router.js
var next_router = __webpack_require__(75640);
// EXTERNAL MODULE: ../../libs/fanfanlo/src/dispatcher/Dispatcher.ts
var Dispatcher = __webpack_require__(82727);
;// ../../libs/app/static/src/mc/static-model.ts

const dipsatcher = new Dispatcher/* Dispatcher */.m();
const staticModel = {
    dipsatcher,
    screenLockCount: 0,
    switchPage: async ()=>{
        dipsatcher.dispatch("switchPage");
        staticModel.screenLockCount = 0;
    },
    listenSwitchPage: (callback)=>{
        return dipsatcher.addListener("switchPage", callback);
    }
};

// EXTERNAL MODULE: ../../node_modules/.pnpm/framer-motion@11.18.2_@emotion+is-prop-valid@1.3.1_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs + 3 modules
var AnimatePresence = __webpack_require__(98969);
// EXTERNAL MODULE: ../../node_modules/.pnpm/framer-motion@11.18.2_@emotion+is-prop-valid@1.3.1_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs + 243 modules
var proxy = __webpack_require__(17582);
;// ../../libs/app/ui/src/components/motion/page-transition.tsx



function PageTransition(param) {
    let { children } = param;
    const router = (0,next_router.useRouter)();
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(AnimatePresence/* AnimatePresence */.N, {
        mode: "sync",
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(proxy/* motion */.P.div, {
            initial: {
                opacity: 0,
                y: 10
            },
            animate: {
                opacity: 1,
                y: 0
            },
            exit: {
                opacity: 0,
                y: -110
            },
            transition: {
                duration: 0.3
            },
            children: children
        }, router.route)
    });
}

;// ../../libs/app/ui/src/components/app/PageShell.tsx





let idCount = 0;
function PageShell(param) {
    let { children } = param;
    const id = "app-shell-".concat(idCount++);
    (0,react.useEffect)(()=>{
        const box = document.querySelector("#".concat(id));
        const unlisten = staticModel.listenSwitchPage(()=>{
            if (!box) return;
        });
        if (!box) return;
        box.addEventListener("click", (e)=>{
            if (staticModel.screenLockCount == 0) return;
            e.stopPropagation();
            e.preventDefault();
        });
        return ()=>{
            unlisten();
        };
    }, []);
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.A, {
        id: id,
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(PageTransition, {
            children: children
        })
    });
}

// EXTERNAL MODULE: ../../libs/app/ui/src/components/page/AndroidPageContent.tsx + 1 modules
var AndroidPageContent = __webpack_require__(67236);
;// ../../libs/app/ui/src/components/appbar/AppBar.tsx


// import {AndroidPageContent} from "../../";







function HideOnScroll(props) {
    const { children, window } = props;
    // Note that you normally won't need to set the window ref as useScrollTrigger
    // will default to window.
    // This is only being set here because the demo is in an iframe.
    const trigger = (0,useScrollTrigger/* default */.A)({
        target: window ? window() : undefined
    });
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(Slide/* default */.A, {
        appear: false,
        direction: "down",
        in: !trigger,
        children: children !== null && children !== void 0 ? children : /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {})
    });
}
function Appbar(param) {
    let { title } = param;
    return /*#__PURE__*/ _jsx(AppBar, {
        color: "inherit",
        children: /*#__PURE__*/ _jsx(Toolbar, {
            children: /*#__PURE__*/ _jsx(Typography, {
                variant: "h6",
                component: "div",
                children: title
            })
        })
    });
}
// export interface IAppBarBackAskEvent{
//     defaultPrevented:boolean
// }
function ScrollTop(props) {
    const { children, window } = props;
    // Note that you normally won't need to set the window ref as useScrollTrigger
    // will default to window.
    // This is only being set here because the demo is in an iframe.
    const trigger = (0,useScrollTrigger/* default */.A)({
        target: window ? window() : undefined,
        disableHysteresis: true,
        threshold: 100
    });
    const handleClick = (event)=>{
        const anchor = (event.target.ownerDocument || document).querySelector('#back-to-top-anchor');
        if (anchor) {
            anchor.scrollIntoView({
                block: 'center'
            });
        }
    };
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(Fade/* default */.A, {
        in: trigger,
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.A, {
            "data-id": "content-scroll-top-button",
            onClick: handleClick,
            role: "presentation",
            sx: {
                position: 'fixed',
                bottom: 16,
                right: 16
            },
            children: children
        })
    });
}
function AppbarContainer(props) {
    const { children, appbarProps, titleConf, reload } = props;
    const router = (0,next_router.useRouter)();
    function handleBack() {
        // 本想抽象成底层一个方法，但是考虑了一下router需要注入或者是一个callback，似乎像现在这样判断一下event也可以。回头继续观察一下吧。
        const event = window_history_utils/* browserHistoryUtils */.W.askHistoryBack();
        if (event.defaultPrevented) return;
        if (appbarProps.backDispatcher) {
            const e = {
                defaultPrevented: false
            };
            appbarProps.backDispatcher.dispatch('back', e);
            if (e.defaultPrevented) return;
        }
        router.back();
    }
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(PageShell, {
        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(react.Fragment, {
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsx)(CssBaseline/* default */.Ay, {}),
                /*#__PURE__*/ (0,jsx_runtime.jsx)(HideOnScroll, {
                    ...props,
                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(AppBar_AppBar/* default */.A, {
                        color: "inherit",
                        children: appbarProps.toolbar ? appbarProps.toolbar : /*#__PURE__*/ (0,jsx_runtime.jsxs)(Toolbar_Toolbar/* default */.A, {
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime.jsx)(KeyboardArrowLeft/* default */.A, {
                                    onClick: handleBack
                                }),
                                appbarProps.title
                            ]
                        })
                    })
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)(Toolbar_Toolbar/* default */.A, {
                    id: "back-to-top-anchor"
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)(Container/* default */.A, {
                    sx: {
                        padding: "0",
                        marginTop: "17px"
                    },
                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(AndroidPageContent/* default */.A, {
                        titleConf: titleConf,
                        reload: reload,
                        children: children
                    })
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)(ScrollTop, {
                    ...props,
                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Fab/* default */.A, {
                        size: "small",
                        "aria-label": "scroll back to top",
                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(KeyboardArrowUp/* default */.A, {})
                    })
                })
            ]
        })
    });
}


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, [7054,1161,9151,3390,7313,8771,788,1482,799,6947,7122,636,6593,8792], () => (__webpack_exec__(66908)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ _N_E = __webpack_exports__;
/******/ }
]);
//# sourceMappingURL=float-window-add-c1f2b1e39835eb72.js.map