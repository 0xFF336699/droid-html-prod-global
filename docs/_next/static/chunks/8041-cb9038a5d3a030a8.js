"use strict";
(self["webpackChunk_N_E"] = self["webpackChunk_N_E"] || []).push([[8041],{

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
// EXTERNAL MODULE: ../../libs/fanfanlo/src/i18n/i18n-value-loader.ts
var i18n_value_loader = __webpack_require__(62095);
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

/***/ 70011:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Kl: () => (/* binding */ androidFloatWindowData),
/* harmony export */   l1: () => (/* binding */ detectContentType),
/* harmony export */   lL: () => (/* binding */ isTagExists)
/* harmony export */ });
/* unused harmony exports isValidContent, generateDefaultWindowName */
/* harmony import */ var _droid_android__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5123);
/* harmony import */ var _fanfanlo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(88518);
/* harmony import */ var _fanfanlo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4738);


const STORE_KEY_WINDOW_DATA = 'android_float_window_data';
// 正则表达式常量
const URL_REGEX = /^(https?:\/\/|ftp:\/\/|\/\/)[^\s]+$/i;
const HTML_REGEX = /<[^>]+>/;
const data = (0,_fanfanlo__WEBPACK_IMPORTED_MODULE_0__/* .toProxy */ .I$)({
    windowData: {
        windowList: []
    },
    initialized: false
});
/**
 * 检测 contentUrl 是 URL 还是 HTML
 * @param content 输入内容
 * @returns 'url' | 'html' | 'invalid'
 */ function detectContentType(content) {
    if (!content || content.trim().length === 0) {
        return 'invalid';
    }
    // 先检测是否包含 HTML 标签
    if (HTML_REGEX.test(content)) {
        return 'html';
    }
    // 检测是否为有效 URL
    if (URL_REGEX.test(content.trim())) {
        return 'url';
    }
    return 'invalid';
}
/**
 * 验证 contentUrl 是否有效（URL 或 HTML）
 * @param content 输入内容
 * @returns boolean
 */ function isValidContent(content) {
    const type = detectContentType(content);
    return type !== 'invalid';
}
/**
 * 生成默认窗口名称（当前时间戳）
 * @returns 格式为 yyyy-MM-dd HH:mm:ss 的时间字符串
 */ function generateDefaultWindowName() {
    const now = new Date();
    const year = now.getFullYear();
    const month = String(now.getMonth() + 1).padStart(2, '0');
    const date = String(now.getDate()).padStart(2, '0');
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    return "".concat(year, "-").concat(month, "-").concat(date, " ").concat(hours, ":").concat(minutes, ":").concat(seconds);
}
/**
 * 检查窗口名称（tag）是否已存在
 * @param tag 要检查的 tag
 * @param excludeWindowId 排除的 windowId（用于编辑时排除自己）
 * @returns boolean true 表示已存在
 */ function isTagExists(tag, excludeWindowId) {
    const trimmedTag = tag.trim();
    if (!trimmedTag) return false;
    return data.windowData.windowList.some((win)=>win.tag === trimmedTag && win.windowId !== excludeWindowId);
}
function init() {
    if (data.initialized) return;
    data.windowData = _droid_android__WEBPACK_IMPORTED_MODULE_1__/* .autoJsStoreUtils */ .b.read(STORE_KEY_WINDOW_DATA, {
        windowList: []
    });
    (0,_fanfanlo__WEBPACK_IMPORTED_MODULE_2__/* .watchUpdates */ .c)(data.windowData, ()=>{
        console.log('Detected changes in windowData, saving to storage...', data.windowData);
        _droid_android__WEBPACK_IMPORTED_MODULE_1__/* .autoJsStoreUtils */ .b.write(STORE_KEY_WINDOW_DATA, data.windowData);
    });
    console.log('Android Float Window data initialized:', data.windowData);
    data.initialized = true;
}
function getItemId(item) {
    return "".concat(item.windowId);
}
function getDismissEventType(item) {
    return "window-".concat(getItemId(item), "-dismiss");
}
function getOpenedEventType(item) {
    return "window-".concat(getItemId(item), "-opened");
}
function getHideEventType(item) {
    return "window-".concat(getItemId(item), "-hide");
}
const androidFloatWindowData = {
    data,
    init,
    getItemId: getItemId,
    getDismissEventType,
    getOpenedEventType,
    getHideEventType
};


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

/***/ 70564:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  S: () => (/* binding */ WindowConfEditor)
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/react@19.1.0/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(94513);
// EXTERNAL MODULE: ../../libs/droid/android/src/android/win/WindowConf.ts
var WindowConf = __webpack_require__(39800);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react-i18next@15.6.0_i18next@24.2.3_typescript@5.7.3__react-dom@19.1.0_react@19.1.0__react@19.1.0_typescript@5.7.3/node_modules/react-i18next/dist/es/index.js + 15 modules
var es = __webpack_require__(50279);
// EXTERNAL MODULE: ../../libs/fanfanlo/src/watcher/proxyWatch.ts
var proxyWatch = __webpack_require__(88518);
// EXTERNAL MODULE: ../../libs/fanfanlo/src/watcher/useProxyWatch.ts
var watcher_useProxyWatch = __webpack_require__(45007);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/Box/Box.js + 2 modules
var Box_Box = __webpack_require__(6445);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/Typography/Typography.js
var Typography_Typography = __webpack_require__(67079);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/Accordion/Accordion.js + 1 modules
var Accordion = __webpack_require__(20350);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/AccordionSummary/AccordionSummary.js + 1 modules
var AccordionSummary = __webpack_require__(56420);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/Chip/Chip.js + 2 modules
var Chip = __webpack_require__(688);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/AccordionDetails/AccordionDetails.js + 1 modules
var AccordionDetails = __webpack_require__(29708);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/Stack/Stack.js + 1 modules
var Stack_Stack = __webpack_require__(9220);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/Button/Button.js + 3 modules
var Button = __webpack_require__(28669);
// EXTERNAL MODULE: ../../node_modules/.pnpm/next@15.3.5_@babel+core@7.28.0_babel-plugin-macros@3.1.0_react-dom@19.1.0_react@19.1.0__react@19.1.0_sass@1.89.2/node_modules/next/router.js
var next_router = __webpack_require__(75640);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+icons-material@6.4.12_@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_re_5ewkm5t5g27pzq5tz62v6ktvti/node_modules/@mui/icons-material/esm/ExpandMore.js
var ExpandMore = __webpack_require__(21985);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react@19.1.0/node_modules/react/index.js
var react = __webpack_require__(94285);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/Tooltip/Tooltip.js + 1 modules
var Tooltip = __webpack_require__(36994);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/TextField/TextField.js + 1 modules
var TextField_TextField = __webpack_require__(38771);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/Select/Select.js + 4 modules
var Select_Select = __webpack_require__(7749);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/MenuItem/MenuItem.js + 2 modules
var MenuItem_MenuItem = __webpack_require__(82797);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/FormControlLabel/FormControlLabel.js + 1 modules
var FormControlLabel_FormControlLabel = __webpack_require__(30281);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/Checkbox/Checkbox.js + 4 modules
var Checkbox_Checkbox = __webpack_require__(93916);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/Alert/Alert.js + 5 modules
var Alert = __webpack_require__(85629);
// EXTERNAL MODULE: ./src/components/android-float/window/data.ts
var data = __webpack_require__(70011);
;// ./src/components/android-float/window/HtmlConfUI.tsx






// WebViewJsParams UI
function WebViewJsParamsUI(param) {
    let { jsParams } = param;
    console.log('🔥 WebViewJsParamsUI: Component RENDER! jsParams:', jsParams);
    const { t } = (0,es/* useTranslation */.Bd)('droid-android/android/win/content');
    const [fitContentWidth] = (0,watcher_useProxyWatch/* useProxyWatch */.x)(jsParams, 'fitContentWidth', jsParams.fitContentWidth || 0);
    const [fitContentHeight] = (0,watcher_useProxyWatch/* useProxyWatch */.x)(jsParams, 'fitContentHeight', jsParams.fitContentHeight || 0);
    const [javaToJsDataString] = (0,watcher_useProxyWatch/* useProxyWatch */.x)(jsParams, 'javaToJsDataString', jsParams.javaToJsDataString || '');
    const [fitContentId] = (0,watcher_useProxyWatch/* useProxyWatch */.x)(jsParams, 'fitContentId', jsParams.fitContentId || '');
    const [fitContentClass] = (0,watcher_useProxyWatch/* useProxyWatch */.x)(jsParams, 'fitContentClass', jsParams.fitContentClass || '');
    const [fitContentJs] = (0,watcher_useProxyWatch/* useProxyWatch */.x)(jsParams, 'fitContentJs', jsParams.fitContentJs || '');
    console.log('WebViewJsParamsUI: Rendering with values:', {
        fitContentWidth,
        fitContentHeight,
        javaToJsDataString,
        fitContentId,
        fitContentClass,
        fitContentJs
    });
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(Stack_Stack/* default */.A, {
        spacing: 1,
        sx: {
            pl: 2
        },
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(TextField_TextField/* default */.A, {
                label: t('content.WebViewJsParams.fitContentWidth'),
                type: "number",
                value: fitContentWidth,
                onChange: (e)=>{
                    jsParams.fitContentWidth = Number(e.target.value);
                },
                size: "small"
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(TextField_TextField/* default */.A, {
                label: t('content.WebViewJsParams.fitContentHeight'),
                type: "number",
                value: fitContentHeight,
                onChange: (e)=>{
                    jsParams.fitContentHeight = Number(e.target.value);
                },
                size: "small"
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(TextField_TextField/* default */.A, {
                label: t('content.WebViewJsParams.javaToJsDataString'),
                value: javaToJsDataString,
                onChange: (e)=>{
                    jsParams.javaToJsDataString = e.target.value;
                },
                size: "small",
                multiline: true,
                rows: 2
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(TextField_TextField/* default */.A, {
                label: t('content.WebViewJsParams.fitContentId'),
                value: fitContentId,
                onChange: (e)=>{
                    jsParams.fitContentId = e.target.value;
                },
                size: "small"
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(TextField_TextField/* default */.A, {
                label: t('content.WebViewJsParams.fitContentClass'),
                value: fitContentClass,
                onChange: (e)=>{
                    jsParams.fitContentClass = e.target.value;
                },
                size: "small"
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(TextField_TextField/* default */.A, {
                label: t('content.WebViewJsParams.fitContentJs'),
                value: fitContentJs,
                onChange: (e)=>{
                    jsParams.fitContentJs = e.target.value;
                },
                size: "small",
                multiline: true,
                rows: 2
            })
        ]
    });
}
function HtmlConfUI_HtmlConfUI(param) {
    let { htmlConf } = param;
    const { t } = (0,es/* useTranslation */.Bd)('droid-android/android/win/content');
    console.log('=== HtmlConfUI: Component render start ===');
    console.log('HtmlConfUI: htmlConf received:', htmlConf);
    console.log('HtmlConfUI: htmlConf.webViewJsParams:', htmlConf.webViewJsParams);
    console.log('HtmlConfUI: htmlConf.webViewJsParams type:', typeof htmlConf.webViewJsParams);
    console.log('HtmlConfUI: htmlConf.webViewJsParams is null:', htmlConf.webViewJsParams === null);
    console.log('HtmlConfUI: htmlConf.webViewJsParams is undefined:', htmlConf.webViewJsParams === undefined);
    console.log('HtmlConfUI: htmlConf.webViewJsParams truthiness:', !!htmlConf.webViewJsParams);
    console.log('HtmlConfUI: htmlConf.webViewConf:', htmlConf.webViewConf);
    const [url] = (0,watcher_useProxyWatch/* useProxyWatch */.x)(htmlConf, 'url', htmlConf.url || '');
    const [html] = (0,watcher_useProxyWatch/* useProxyWatch */.x)(htmlConf, 'html', htmlConf.html || '');
    const [jsBridgeName] = (0,watcher_useProxyWatch/* useProxyWatch */.x)(htmlConf, 'jsBridgeName', htmlConf.jsBridgeName || '');
    const [webViewJsParams] = (0,watcher_useProxyWatch/* useProxyWatch */.x)(htmlConf, 'webViewJsParams', htmlConf.webViewJsParams);
    const [webViewConf] = (0,watcher_useProxyWatch/* useProxyWatch */.x)(htmlConf, 'webViewConf', htmlConf.webViewConf);
    const [webViewJsName] = (0,watcher_useProxyWatch/* useProxyWatch */.x)(htmlConf, 'webViewJsName', htmlConf.webViewJsName || '');
    const [javaRunnerId] = (0,watcher_useProxyWatch/* useProxyWatch */.x)(htmlConf, 'javaRunnerId', htmlConf.javaRunnerId || 0);
    const [extra] = (0,watcher_useProxyWatch/* useProxyWatch */.x)(htmlConf, 'extra', htmlConf.extra || {});
    console.log('HtmlConfUI: after useProxyWatch - webViewJsParams:', webViewJsParams);
    console.log('HtmlConfUI: after useProxyWatch - webViewConf:', webViewConf);
    // 本地状态用于内容输入和错误提示
    const [contentInput, setContentInput] = (0,react.useState)(htmlConf.url || htmlConf.html || '');
    const [contentError, setContentError] = (0,react.useState)('');
    const [detectedType, setDetectedType] = (0,react.useState)('invalid');
    // 本地状态用于 JSON 编辑和错误提示
    const [extraJson, setExtraJson] = (0,react.useState)(JSON.stringify(htmlConf.extra || {}, null, 2));
    const [extraJsonError, setExtraJsonError] = (0,react.useState)('');
    const handleContentChange = (value)=>{
        console.log('HtmlConfUI: content input changed');
        setContentInput(value);
        if (!value || value.trim().length === 0) {
            setDetectedType('invalid');
            setContentError('');
            htmlConf.url = '';
            htmlConf.html = '';
            return;
        }
        const type = (0,data/* detectContentType */.l1)(value);
        console.log('HtmlConfUI: detected content type:', type);
        setDetectedType(type);
        if (type === 'invalid') {
            setContentError(t('content.HtmlConf.contentInvalid'));
            return;
        }
        setContentError('');
        if (type === 'url') {
            htmlConf.url = value;
            htmlConf.html = '';
            console.log('HtmlConfUI: set as URL:', value);
        } else if (type === 'html') {
            htmlConf.html = value;
            htmlConf.url = '';
            console.log('HtmlConfUI: set as HTML:', value);
        }
    };
    const extraJsonChange = (value)=>{
        console.log('HtmlConfUI: extra JSON changed');
        setExtraJson(value);
        try {
            const parsed = JSON.parse(value);
            htmlConf.extra = parsed;
            setExtraJsonError('');
            console.log('HtmlConfUI: extra JSON parsed successfully:', parsed);
        } catch (err) {
            const errorMsg = err instanceof Error ? err.message : t('content.HtmlConf.extraJsonError');
            setExtraJsonError(errorMsg);
            console.error('HtmlConfUI: extra JSON parse error:', err);
        }
    };
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(Stack_Stack/* default */.A, {
        spacing: 2,
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(SectionTitle, {
                title: t('content.HtmlConf.required'),
                count: 1
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box_Box/* default */.A, {
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(RequiredLabel, {
                        label: t('content.HtmlConf.content')
                    }),
                    contentError && /*#__PURE__*/ (0,jsx_runtime.jsx)(Alert/* default */.A, {
                        severity: "error",
                        sx: {
                            mb: 1
                        },
                        children: contentError
                    }),
                    detectedType !== 'invalid' && /*#__PURE__*/ (0,jsx_runtime.jsxs)(Alert/* default */.A, {
                        severity: "success",
                        sx: {
                            mb: 1
                        },
                        children: [
                            t('content.HtmlConf.detectedAs'),
                            ": ",
                            detectedType === 'url' ? 'URL' : 'HTML'
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(TextField_TextField/* default */.A, {
                        value: contentInput,
                        onChange: (e)=>handleContentChange(e.target.value),
                        placeholder: t('content.HtmlConf.contentPlaceholder'),
                        size: "small",
                        multiline: true,
                        rows: 4,
                        fullWidth: true,
                        helperText: t('content.HtmlConf.contentHelper'),
                        error: !!contentError
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(SectionTitle, {
                title: t('content.HtmlConf.optional'),
                count: 6
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box_Box/* default */.A, {
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(OptionalLabel, {
                        label: t('content.HtmlConf.jsBridgeName')
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(TextField_TextField/* default */.A, {
                        value: jsBridgeName,
                        onChange: (e)=>{
                            htmlConf.jsBridgeName = e.target.value;
                        },
                        size: "small",
                        fullWidth: true
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box_Box/* default */.A, {
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(OptionalLabel, {
                        label: t('content.HtmlConf.webViewJsName')
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(TextField_TextField/* default */.A, {
                        value: webViewJsName,
                        onChange: (e)=>{
                            htmlConf.webViewJsName = e.target.value;
                        },
                        size: "small",
                        fullWidth: true
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box_Box/* default */.A, {
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(OptionalLabel, {
                        label: t('content.HtmlConf.javaRunnerId')
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(TextField_TextField/* default */.A, {
                        type: "number",
                        value: javaRunnerId,
                        onChange: (e)=>{
                            htmlConf.javaRunnerId = Number(e.target.value);
                        },
                        size: "small",
                        fullWidth: true
                    })
                ]
            }),
            (()=>{
                console.log('HtmlConfUI: Evaluating webViewJsParams condition...');
                console.log('HtmlConfUI: webViewJsParams value:', webViewJsParams);
                console.log('HtmlConfUI: webViewJsParams truthiness:', !!webViewJsParams);
                const shouldRender = !!webViewJsParams;
                console.log('HtmlConfUI: Should render WebViewJsParams?', shouldRender);
                if (shouldRender) {
                    console.log('✅ WebViewJsParams WILL BE RENDERED!');
                } else {
                    console.log('❌ WebViewJsParams will NOT be rendered');
                }
                return shouldRender;
            })() && /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
                children: [
                    console.log('📦 Rendering WebViewJsParams block...'),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)(Typography_Typography/* default */.A, {
                        variant: "subtitle2",
                        children: [
                            console.log('📝 Rendering Typography for WebViewJsParams.title'),
                            t('content.WebViewJsParams.title')
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(WebViewJsParamsUI, {
                        jsParams: webViewJsParams
                    })
                ]
            }),
            (()=>{
                console.log('HtmlConfUI: Evaluating webViewConf condition...');
                console.log('HtmlConfUI: webViewConf value:', webViewConf);
                console.log('HtmlConfUI: webViewConf truthiness:', !!webViewConf);
                const shouldRender = !!webViewConf;
                console.log('HtmlConfUI: Should render WebViewConf?', shouldRender);
                return shouldRender;
            })() && /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography_Typography/* default */.A, {
                        variant: "subtitle2",
                        children: t('content.WebViewConf.title')
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(WebViewConfUI, {
                        webViewConf: webViewConf
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box_Box/* default */.A, {
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(OptionalLabel, {
                        label: t('content.HtmlConf.extra')
                    }),
                    extraJsonError && /*#__PURE__*/ (0,jsx_runtime.jsxs)(Alert/* default */.A, {
                        severity: "error",
                        sx: {
                            mb: 1
                        },
                        children: [
                            t('content.HtmlConf.extraJsonError'),
                            ": ",
                            extraJsonError
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(TextField_TextField/* default */.A, {
                        value: extraJson,
                        onChange: (e)=>extraJsonChange(e.target.value),
                        placeholder: t('content.HtmlConf.extraPlaceholder'),
                        size: "small",
                        multiline: true,
                        rows: 4,
                        fullWidth: true,
                        helperText: t('content.HtmlConf.extraHelper'),
                        error: !!extraJsonError
                    })
                ]
            })
        ]
    });
}

;// ./src/components/android-float/window/WindowConfUI.tsx






// ============ 标签辅助组件 ============
// 必选标签组件
function RequiredLabel(param) {
    let { label, description } = param;
    const content = /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box_Box/* default */.A, {
        sx: {
            display: 'flex',
            alignItems: 'center',
            gap: 0.5
        },
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography_Typography/* default */.A, {
                children: label
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography_Typography/* default */.A, {
                sx: {
                    color: 'error.main',
                    fontWeight: 'bold'
                },
                children: "*"
            })
        ]
    });
    if (description) {
        return /*#__PURE__*/ (0,jsx_runtime.jsx)(Tooltip/* default */.A, {
            title: description,
            arrow: true,
            children: content
        });
    }
    return content;
}
// 可选标签组件
function OptionalLabel(param) {
    let { label, description } = param;
    const { t } = (0,es/* useTranslation */.Bd)('homepage/components/android-float/window/content');
    const content = /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box_Box/* default */.A, {
        sx: {
            display: 'flex',
            alignItems: 'center',
            gap: 0.5
        },
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography_Typography/* default */.A, {
                children: label
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography_Typography/* default */.A, {
                sx: {
                    color: 'text.secondary',
                    fontSize: '0.875rem'
                },
                children: t('WindowConfUI.optional')
            })
        ]
    });
    if (description) {
        return /*#__PURE__*/ (0,jsx_runtime.jsx)(Tooltip/* default */.A, {
            title: description,
            arrow: true,
            children: content
        });
    }
    return content;
}
// Section 标题组件
function SectionTitle(param) {
    let { title, count } = param;
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box_Box/* default */.A, {
        sx: {
            display: 'flex',
            alignItems: 'center',
            gap: 1,
            mt: 2,
            mb: 1.5
        },
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography_Typography/* default */.A, {
                variant: "subtitle1",
                sx: {
                    fontWeight: 'bold',
                    color: 'primary.main'
                },
                children: title
            }),
            count && /*#__PURE__*/ (0,jsx_runtime.jsxs)(Typography_Typography/* default */.A, {
                sx: {
                    color: 'text.secondary',
                    fontSize: '0.875rem'
                },
                children: [
                    "(",
                    count,
                    ")"
                ]
            })
        ]
    });
}
// WebViewConf UI
function WebViewConfUI(param) {
    let { webViewConf } = param;
    const { t } = (0,es/* useTranslation */.Bd)('droid-android/android/win/content');
    const [backgroundColor] = (0,watcher_useProxyWatch/* useProxyWatch */.x)(webViewConf, 'backgroundColor', webViewConf.backgroundColor || 0);
    const [ua] = (0,watcher_useProxyWatch/* useProxyWatch */.x)(webViewConf, 'ua', webViewConf.ua || '');
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(Stack_Stack/* default */.A, {
        spacing: 1,
        sx: {
            pl: 2
        },
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(TextField_TextField/* default */.A, {
                label: t('content.WebViewConf.backgroundColor'),
                type: "number",
                value: backgroundColor,
                onChange: (e)=>{
                    webViewConf.backgroundColor = Number(e.target.value);
                },
                size: "small"
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(TextField_TextField/* default */.A, {
                label: t('content.WebViewConf.ua'),
                value: ua,
                onChange: (e)=>{
                    webViewConf.ua = e.target.value;
                },
                size: "small",
                multiline: true,
                rows: 2
            })
        ]
    });
}
// GravityInfo UI
function GravityInfoUI(param) {
    let { gravityInfo } = param;
    const { t } = (0,es/* useTranslation */.Bd)('droid-android/android/win/content');
    const [gravity] = (0,watcher_useProxyWatch/* useProxyWatch */.x)(gravityInfo, 'gravity', gravityInfo.gravity);
    const [offsetX] = (0,watcher_useProxyWatch/* useProxyWatch */.x)(gravityInfo, 'offsetX', gravityInfo.offsetX || 0);
    const [offsetY] = (0,watcher_useProxyWatch/* useProxyWatch */.x)(gravityInfo, 'offsetY', gravityInfo.offsetY || 0);
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(Stack_Stack/* default */.A, {
        spacing: 1,
        sx: {
            pl: 2
        },
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Select_Select/* default */.A, {
                value: gravity,
                onChange: (e)=>{
                    gravityInfo.gravity = e.target.value;
                },
                size: "small",
                children: (0,WindowConf/* getGravityOptions */.n2)(t).map((option)=>/*#__PURE__*/ (0,jsx_runtime.jsx)(MenuItem_MenuItem/* default */.A, {
                        value: option.value,
                        children: option.label
                    }, option.value))
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(TextField_TextField/* default */.A, {
                label: t('content.GravityInfo.offsetX'),
                type: "number",
                value: offsetX,
                onChange: (e)=>{
                    gravityInfo.offsetX = Number(e.target.value);
                },
                size: "small"
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(TextField_TextField/* default */.A, {
                label: t('content.GravityInfo.offsetY'),
                type: "number",
                value: offsetY,
                onChange: (e)=>{
                    gravityInfo.offsetY = Number(e.target.value);
                },
                size: "small"
            })
        ]
    });
}
// BorderInfo UI
function BorderInfoUI(param) {
    let { borderInfo } = param;
    const { t } = (0,es/* useTranslation */.Bd)('droid-android/android/win/content');
    const [left] = (0,watcher_useProxyWatch/* useProxyWatch */.x)(borderInfo, 'left', borderInfo.left);
    const [top] = (0,watcher_useProxyWatch/* useProxyWatch */.x)(borderInfo, 'top', borderInfo.top);
    const [right] = (0,watcher_useProxyWatch/* useProxyWatch */.x)(borderInfo, 'right', borderInfo.right);
    const [bottom] = (0,watcher_useProxyWatch/* useProxyWatch */.x)(borderInfo, 'bottom', borderInfo.bottom);
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(Stack_Stack/* default */.A, {
        spacing: 1,
        sx: {
            pl: 2
        },
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(TextField_TextField/* default */.A, {
                label: t('content.BorderInfo.left'),
                type: "number",
                value: left,
                onChange: (e)=>{
                    borderInfo.left = Number(e.target.value);
                },
                size: "small"
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(TextField_TextField/* default */.A, {
                label: t('content.BorderInfo.top'),
                type: "number",
                value: top,
                onChange: (e)=>{
                    borderInfo.top = Number(e.target.value);
                },
                size: "small"
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(TextField_TextField/* default */.A, {
                label: t('content.BorderInfo.right'),
                type: "number",
                value: right,
                onChange: (e)=>{
                    borderInfo.right = Number(e.target.value);
                },
                size: "small"
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(TextField_TextField/* default */.A, {
                label: t('content.BorderInfo.bottom'),
                type: "number",
                value: bottom,
                onChange: (e)=>{
                    borderInfo.bottom = Number(e.target.value);
                },
                size: "small"
            })
        ]
    });
}
// MatchParentInfo UI
function MatchParentInfoUI(param) {
    let { matchParentInfo } = param;
    const { t } = (0,es/* useTranslation */.Bd)('droid-android/android/win/content');
    const [widthMatch] = (0,watcher_useProxyWatch/* useProxyWatch */.x)(matchParentInfo, 'widthMatch', matchParentInfo.widthMatch);
    const [heightMatch] = (0,watcher_useProxyWatch/* useProxyWatch */.x)(matchParentInfo, 'heightMatch', matchParentInfo.heightMatch);
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(Stack_Stack/* default */.A, {
        spacing: 1,
        sx: {
            pl: 2
        },
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(FormControlLabel_FormControlLabel/* default */.A, {
                control: /*#__PURE__*/ (0,jsx_runtime.jsx)(Checkbox_Checkbox/* default */.A, {
                    checked: widthMatch,
                    onChange: (e)=>{
                        matchParentInfo.widthMatch = e.target.checked;
                    }
                }),
                label: t('content.MatchParentInfo.widthMatch')
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(FormControlLabel_FormControlLabel/* default */.A, {
                control: /*#__PURE__*/ (0,jsx_runtime.jsx)(Checkbox_Checkbox/* default */.A, {
                    checked: heightMatch,
                    onChange: (e)=>{
                        matchParentInfo.heightMatch = e.target.checked;
                    }
                }),
                label: t('content.MatchParentInfo.heightMatch')
            })
        ]
    });
}
// FloatConf UI
function FloatConfUI(param) {
    let { floatConf } = param;
    const { t } = (0,es/* useTranslation */.Bd)('droid-android/android/win/content');
    const [positionSaveName] = (0,watcher_useProxyWatch/* useProxyWatch */.x)(floatConf, 'positionSaveName', floatConf.positionSaveName || '');
    const [draggable] = (0,watcher_useProxyWatch/* useProxyWatch */.x)(floatConf, 'draggable', floatConf.draggable || false);
    const [defaultX] = (0,watcher_useProxyWatch/* useProxyWatch */.x)(floatConf, 'defaultX', floatConf.defaultX || 0);
    const [defaultY] = (0,watcher_useProxyWatch/* useProxyWatch */.x)(floatConf, 'defaultY', floatConf.defaultY || 0);
    const [resetX] = (0,watcher_useProxyWatch/* useProxyWatch */.x)(floatConf, 'resetX', floatConf.resetX || 0);
    const [resetY] = (0,watcher_useProxyWatch/* useProxyWatch */.x)(floatConf, 'resetY', floatConf.resetY || 0);
    const [tag] = (0,watcher_useProxyWatch/* useProxyWatch */.x)(floatConf, 'tag', floatConf.tag || '');
    const [sidePattern] = (0,watcher_useProxyWatch/* useProxyWatch */.x)(floatConf, 'sidePattern', floatConf.sidePattern);
    const [showPattern] = (0,watcher_useProxyWatch/* useProxyWatch */.x)(floatConf, 'showPattern', floatConf.showPattern);
    const [hasEditText] = (0,watcher_useProxyWatch/* useProxyWatch */.x)(floatConf, 'hasEditText', floatConf.hasEditText || false);
    const [gravity] = (0,watcher_useProxyWatch/* useProxyWatch */.x)(floatConf, 'gravity', floatConf.gravity);
    const [layoutChangedGravity] = (0,watcher_useProxyWatch/* useProxyWatch */.x)(floatConf, 'layoutChangedGravity', floatConf.layoutChangedGravity);
    const [border] = (0,watcher_useProxyWatch/* useProxyWatch */.x)(floatConf, 'border', floatConf.border);
    const [matchParent] = (0,watcher_useProxyWatch/* useProxyWatch */.x)(floatConf, 'matchParent', floatConf.matchParent);
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(Stack_Stack/* default */.A, {
        spacing: 2,
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(SectionTitle, {
                title: t('content.FloatConf.optional'),
                count: 14
            }),
            gravity && /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box_Box/* default */.A, {
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(OptionalLabel, {
                        label: t('content.FloatConf.gravity')
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(GravityInfoUI, {
                        gravityInfo: gravity
                    })
                ]
            }),
            border && /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box_Box/* default */.A, {
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(OptionalLabel, {
                        label: t('content.FloatConf.border')
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(BorderInfoUI, {
                        borderInfo: border
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(FormControlLabel_FormControlLabel/* default */.A, {
                control: /*#__PURE__*/ (0,jsx_runtime.jsx)(Checkbox_Checkbox/* default */.A, {
                    checked: draggable,
                    onChange: (e)=>{
                        floatConf.draggable = e.target.checked;
                    }
                }),
                label: /*#__PURE__*/ (0,jsx_runtime.jsx)(OptionalLabel, {
                    label: t('content.FloatConf.draggable')
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box_Box/* default */.A, {
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(OptionalLabel, {
                        label: t('content.FloatConf.defaultX')
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(TextField_TextField/* default */.A, {
                        type: "number",
                        value: defaultX,
                        onChange: (e)=>{
                            floatConf.defaultX = Number(e.target.value);
                        },
                        size: "small",
                        fullWidth: true
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box_Box/* default */.A, {
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(OptionalLabel, {
                        label: t('content.FloatConf.defaultY')
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(TextField_TextField/* default */.A, {
                        type: "number",
                        value: defaultY,
                        onChange: (e)=>{
                            floatConf.defaultY = Number(e.target.value);
                        },
                        size: "small",
                        fullWidth: true
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box_Box/* default */.A, {
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(OptionalLabel, {
                        label: t('content.FloatConf.resetX')
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(TextField_TextField/* default */.A, {
                        type: "number",
                        value: resetX,
                        onChange: (e)=>{
                            floatConf.resetX = Number(e.target.value);
                        },
                        size: "small",
                        fullWidth: true
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box_Box/* default */.A, {
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(OptionalLabel, {
                        label: t('content.FloatConf.resetY')
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(TextField_TextField/* default */.A, {
                        type: "number",
                        value: resetY,
                        onChange: (e)=>{
                            floatConf.resetY = Number(e.target.value);
                        },
                        size: "small",
                        fullWidth: true
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box_Box/* default */.A, {
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(OptionalLabel, {
                        label: t('content.FloatConf.tag')
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(TextField_TextField/* default */.A, {
                        value: tag,
                        onChange: (e)=>{
                            floatConf.tag = e.target.value;
                        },
                        size: "small",
                        fullWidth: true
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box_Box/* default */.A, {
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(OptionalLabel, {
                        label: t('content.FloatConf.sidePattern')
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Select_Select/* default */.A, {
                        value: sidePattern || WindowConf/* FloatSidePattern */.Ww.DEFAULT,
                        onChange: (e)=>{
                            floatConf.sidePattern = e.target.value;
                        },
                        size: "small",
                        fullWidth: true,
                        children: Object.values(WindowConf/* FloatSidePattern */.Ww).map((pattern)=>/*#__PURE__*/ (0,jsx_runtime.jsx)(MenuItem_MenuItem/* default */.A, {
                                value: pattern,
                                children: pattern
                            }, pattern))
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box_Box/* default */.A, {
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(OptionalLabel, {
                        label: t('content.FloatConf.showPattern')
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Select_Select/* default */.A, {
                        value: showPattern || WindowConf/* FloatShowPattern */.YC.ALL_TIME,
                        onChange: (e)=>{
                            floatConf.showPattern = e.target.value;
                        },
                        size: "small",
                        fullWidth: true,
                        children: Object.values(WindowConf/* FloatShowPattern */.YC).map((pattern)=>/*#__PURE__*/ (0,jsx_runtime.jsx)(MenuItem_MenuItem/* default */.A, {
                                value: pattern,
                                children: pattern
                            }, pattern))
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(FormControlLabel_FormControlLabel/* default */.A, {
                control: /*#__PURE__*/ (0,jsx_runtime.jsx)(Checkbox_Checkbox/* default */.A, {
                    checked: hasEditText,
                    onChange: (e)=>{
                        floatConf.hasEditText = e.target.checked;
                    }
                }),
                label: /*#__PURE__*/ (0,jsx_runtime.jsx)(OptionalLabel, {
                    label: t('content.FloatConf.hasEditText')
                })
            }),
            layoutChangedGravity && /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box_Box/* default */.A, {
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(OptionalLabel, {
                        label: t('content.FloatConf.layoutChangedGravity')
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Select_Select/* default */.A, {
                        value: layoutChangedGravity,
                        onChange: (e)=>{
                            floatConf.layoutChangedGravity = e.target.value;
                        },
                        size: "small",
                        fullWidth: true,
                        children: (0,WindowConf/* getGravityOptions */.n2)(t).map((option)=>/*#__PURE__*/ (0,jsx_runtime.jsx)(MenuItem_MenuItem/* default */.A, {
                                value: option.value,
                                children: option.label
                            }, option.value))
                    })
                ]
            }),
            matchParent && /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography_Typography/* default */.A, {
                        variant: "subtitle2",
                        children: t('content.FloatConf.matchParent')
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(MatchParentInfoUI, {
                        matchParentInfo: matchParent
                    })
                ]
            })
        ]
    });
}
// FloatWindowConf UI
function FloatWindowConfUI(param) {
    let { floatWindowConf } = param;
    const { t } = (0,es/* useTranslation */.Bd)('droid-android/android/win/content');
    const [foregroundText] = (0,watcher_useProxyWatch/* useProxyWatch */.x)(floatWindowConf, 'foregroundText', floatWindowConf.foregroundText || '');
    const [floatConf] = (0,watcher_useProxyWatch/* useProxyWatch */.x)(floatWindowConf, 'floatConf', floatWindowConf.floatConf);
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(Stack_Stack/* default */.A, {
        spacing: 2,
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(TextField_TextField/* default */.A, {
                label: t('content.FloatWindowConf.foregroundText'),
                value: foregroundText,
                onChange: (e)=>{
                    floatWindowConf.foregroundText = e.target.value;
                },
                size: "small",
                helperText: t('content.FloatWindowConf.foregroundTextDescription')
            }),
            floatConf && /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography_Typography/* default */.A, {
                        variant: "subtitle2",
                        children: t('content.FloatConf.title')
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(FloatConfUI, {
                        floatConf: floatConf
                    })
                ]
            })
        ]
    });
}
// DialogWindowConf UI
function DialogWindowConfUI(param) {
    let { dialogWindowConf } = param;
    const { t } = useTranslation('droid-android/android/win/content');
    const [theme] = useProxyWatch(dialogWindowConf, 'theme', dialogWindowConf.theme || '');
    const [viewLayoutParams] = useProxyWatch(dialogWindowConf, 'viewLayoutParams', dialogWindowConf.viewLayoutParams || {});
    return /*#__PURE__*/ _jsxs(Stack, {
        spacing: 2,
        children: [
            /*#__PURE__*/ _jsx(TextField, {
                label: t('content.DialogWindowConf.theme'),
                value: theme,
                onChange: (e)=>{
                    dialogWindowConf.theme = e.target.value;
                },
                size: "small"
            }),
            /*#__PURE__*/ _jsx(TextField, {
                label: t('content.DialogWindowConf.viewLayoutParams'),
                value: JSON.stringify(viewLayoutParams),
                onChange: (e)=>{
                    try {
                        dialogWindowConf.viewLayoutParams = JSON.parse(e.target.value);
                    } catch  {
                    // 无效的 JSON，忽略
                    }
                },
                size: "small",
                multiline: true,
                rows: 3
            })
        ]
    });
}
// SysWindowConf UI
function SysWindowConfUI(param) {
    let { systemWindowConf } = param;
    const { t } = useTranslation('droid-android/android/win/content');
    const [listenBackKey] = useProxyWatch(systemWindowConf, 'listenBackKey', systemWindowConf.listenBackKey);
    const [viewLayoutParams] = useProxyWatch(systemWindowConf, 'viewLayoutParams', systemWindowConf.viewLayoutParams || {});
    return /*#__PURE__*/ _jsxs(Stack, {
        spacing: 2,
        children: [
            /*#__PURE__*/ _jsx(FormControlLabel, {
                control: /*#__PURE__*/ _jsx(Checkbox, {
                    checked: listenBackKey,
                    onChange: (e)=>{
                        systemWindowConf.listenBackKey = e.target.checked;
                    }
                }),
                label: t('content.SysWindowConf.listenBackKey')
            }),
            /*#__PURE__*/ _jsx(TextField, {
                label: t('content.SysWindowConf.viewLayoutParams'),
                value: JSON.stringify(viewLayoutParams),
                onChange: (e)=>{
                    try {
                        systemWindowConf.viewLayoutParams = JSON.parse(e.target.value);
                    } catch  {
                    // 无效的 JSON，忽略
                    }
                },
                size: "small",
                multiline: true,
                rows: 3
            })
        ]
    });
}
// Main WindowConf UI
function WindowConfUI(param) {
    let { windowConf } = param;
    const { t } = useTranslation('droid-android/android/win/content');
    const [windowType] = useProxyWatch(windowConf, 'windowType', windowConf.windowType);
    const [contentType] = useProxyWatch(windowConf, 'contentType', windowConf.contentType);
    const [htmlConf] = useProxyWatch(windowConf, 'htmlConf', windowConf.htmlConf);
    const [floatWindowConf] = useProxyWatch(windowConf, 'floatWindowConf', windowConf.floatWindowConf);
    const [windowId] = useProxyWatch(windowConf, 'windowId', windowConf.windowId);
    const [tag] = useProxyWatch(windowConf, 'tag', windowConf.tag);
    const [description] = useProxyWatch(windowConf, 'description', windowConf.description || '');
    const [forceDismissWindowTime] = useProxyWatch(windowConf, 'forceDismissWindowTime', windowConf.forceDismissWindowTime);
    useEffect(()=>{
        // 9n windowType bMn�a
        let savedFloatWindowConf = windowConf.floatWindowConf;
        windowConf.floatWindowConf = undefined;
        windowConf.floatWindowConf = savedFloatWindowConf || createDefaultFloatWindowConf();
    }, [
        windowType
    ]);
    return /*#__PURE__*/ _jsx(Box, {
        sx: {
            p: 2
        },
        children: /*#__PURE__*/ _jsxs(Stack, {
            spacing: 2,
            children: [
                /*#__PURE__*/ _jsx(Typography, {
                    variant: "h5",
                    sx: {
                        fontWeight: 'bold',
                        mb: 1
                    },
                    children: t('content.WindowConf.title')
                }),
                /*#__PURE__*/ _jsx(SectionTitle, {
                    title: t('content.WindowConf.required'),
                    count: 5
                }),
                /*#__PURE__*/ _jsxs(Box, {
                    children: [
                        /*#__PURE__*/ _jsx(RequiredLabel, {
                            label: t('content.WindowConf.windowType')
                        }),
                        /*#__PURE__*/ _jsx(Select, {
                            value: windowType,
                            onChange: (e)=>{
                                windowConf.windowType = e.target.value;
                            },
                            size: "small",
                            fullWidth: true,
                            children: /*#__PURE__*/ _jsx(MenuItem, {
                                value: WindowType.Float,
                                children: WindowType.Float
                            })
                        })
                    ]
                }),
                /*#__PURE__*/ _jsxs(Box, {
                    children: [
                        /*#__PURE__*/ _jsx(RequiredLabel, {
                            label: t('content.WindowConf.contentType')
                        }),
                        /*#__PURE__*/ _jsx(Select, {
                            value: contentType,
                            disabled: true,
                            size: "small",
                            fullWidth: true,
                            children: /*#__PURE__*/ _jsx(MenuItem, {
                                value: ContentType.Html,
                                children: ContentType.Html
                            })
                        })
                    ]
                }),
                /*#__PURE__*/ _jsxs(Box, {
                    children: [
                        /*#__PURE__*/ _jsx(RequiredLabel, {
                            label: t('content.WindowConf.tag')
                        }),
                        /*#__PURE__*/ _jsx(TextField, {
                            value: tag,
                            onChange: (e)=>{
                                windowConf.tag = e.target.value;
                            },
                            size: "small",
                            fullWidth: true
                        })
                    ]
                }),
                /*#__PURE__*/ _jsxs(Box, {
                    children: [
                        /*#__PURE__*/ _jsx(OptionalLabel, {
                            label: t('content.WindowConf.description')
                        }),
                        /*#__PURE__*/ _jsx(TextField, {
                            value: description,
                            onChange: (e)=>{
                                windowConf.description = e.target.value;
                            },
                            size: "small",
                            fullWidth: true,
                            multiline: true,
                            rows: 2
                        })
                    ]
                }),
                /*#__PURE__*/ _jsxs(Box, {
                    children: [
                        /*#__PURE__*/ _jsx(RequiredLabel, {
                            label: t('content.WindowConf.windowId')
                        }),
                        /*#__PURE__*/ _jsx(TextField, {
                            value: windowId,
                            disabled: true,
                            size: "small",
                            fullWidth: true
                        })
                    ]
                }),
                /*#__PURE__*/ _jsxs(Box, {
                    children: [
                        /*#__PURE__*/ _jsx(RequiredLabel, {
                            label: t('content.WindowConf.forceDismissWindowTime')
                        }),
                        /*#__PURE__*/ _jsx(TextField, {
                            type: "number",
                            value: forceDismissWindowTime,
                            onChange: (e)=>{
                                windowConf.forceDismissWindowTime = Number(e.target.value);
                            },
                            size: "small",
                            fullWidth: true
                        })
                    ]
                }),
                /*#__PURE__*/ _jsx(SectionTitle, {
                    title: t('content.WindowConf.optional'),
                    count: 3
                }),
                htmlConf && /*#__PURE__*/ _jsxs(Box, {
                    children: [
                        /*#__PURE__*/ _jsx(Typography, {
                            variant: "subtitle2",
                            sx: {
                                fontWeight: 'bold',
                                color: 'primary.main'
                            },
                            children: t('content.HtmlConf.title')
                        }),
                        /*#__PURE__*/ _jsx(HtmlConfUI, {
                            htmlConf: htmlConf
                        })
                    ]
                }),
                floatWindowConf && /*#__PURE__*/ _jsxs(Box, {
                    children: [
                        /*#__PURE__*/ _jsx(Typography, {
                            variant: "subtitle2",
                            sx: {
                                fontWeight: 'bold',
                                color: 'primary.main'
                            },
                            children: t('content.FloatWindowConf.title')
                        }),
                        /*#__PURE__*/ _jsx(FloatWindowConfUI, {
                            floatWindowConf: floatWindowConf
                        })
                    ]
                })
            ]
        })
    });
}
function TestWindowConfUI2() {
    const [conf] = useState(toProxy(createDefaultWindowConf()));
    return /*#__PURE__*/ _jsx(_Fragment, {
        children: /*#__PURE__*/ _jsx(WindowConfUI, {
            windowConf: conf
        })
    });
}
// ============ 导出辅助组件 ============
// 这些组件被 Wizard 和 Editor 组件使用



;// ./src/components/android-float/window/BasicInfoSection.tsx




/**
 * BasicInfoSection - 基本信息编辑区域
 *
 * 编辑字段：
 * - windowType: 窗口类型
 * - tag: 窗口标识
 * - description: 窗口说明
 * - windowId: 窗口 ID (只读)
 */ function BasicInfoSection(param) {
    let { windowConf } = param;
    const { t } = (0,es/* useTranslation */.Bd)('homepage/components/android-float/window/content');
    const [windowType] = (0,watcher_useProxyWatch/* useProxyWatch */.x)(windowConf, 'windowType', windowConf.windowType);
    const [tag] = (0,watcher_useProxyWatch/* useProxyWatch */.x)(windowConf, 'tag', windowConf.tag);
    const [description] = (0,watcher_useProxyWatch/* useProxyWatch */.x)(windowConf, 'description', windowConf.description || '');
    const [windowId] = (0,watcher_useProxyWatch/* useProxyWatch */.x)(windowConf, 'windowId', windowConf.windowId);
    console.log('BasicInfoSection: render windowType:', windowType, 'tag:', tag);
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(Stack_Stack/* default */.A, {
        spacing: 2,
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box_Box/* default */.A, {
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(RequiredLabel, {
                        label: t('BasicInfoSection.windowTag')
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(TextField_TextField/* default */.A, {
                        value: tag,
                        onChange: (e)=>{
                            console.log('BasicInfoSection: tag changed to', e.target.value);
                            windowConf.tag = e.target.value;
                        },
                        size: "small",
                        fullWidth: true
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box_Box/* default */.A, {
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(OptionalLabel, {
                        label: t('BasicInfoSection.windowDescription')
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(TextField_TextField/* default */.A, {
                        value: description,
                        onChange: (e)=>{
                            console.log('BasicInfoSection: description changed to', e.target.value);
                            windowConf.description = e.target.value;
                        },
                        size: "small",
                        fullWidth: true,
                        multiline: true,
                        rows: 2
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box_Box/* default */.A, {
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography_Typography/* default */.A, {
                        variant: "body2",
                        sx: {
                            fontWeight: 'bold',
                            mb: 0.5
                        },
                        children: t('BasicInfoSection.windowIdLabel')
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(TextField_TextField/* default */.A, {
                        value: windowId,
                        disabled: true,
                        size: "small",
                        fullWidth: true
                    })
                ]
            })
        ]
    });
}

;// ./src/components/android-float/window/HtmlConfSection.tsx


/**
 * HtmlConfSection - HTML 内容编辑区域
 *
 * 编辑字段：
 * - url: 内容 URL
 * - html: 内嵌 HTML 代码
 * - jsBridgeName: 注入的 JS Bridge 名称
 * - webViewJsName: WebView JS 类型
 * - javaRunnerId: Java Runner ID
 * - webViewJsParams: WebView JS 参数
 * - webViewConf: WebView 配置
 */ function HtmlConfSection(param) {
    let { htmlConf } = param;
    if (!htmlConf) {
        return null;
    }
    console.log('HtmlConfSection: render htmlConf:', htmlConf);
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(HtmlConfUI_HtmlConfUI, {
        htmlConf: htmlConf
    });
}

;// ./src/components/android-float/window/AdvancedSection.tsx




/**
 * AdvancedSection - 高级选项编辑区域
 *
 * 编辑字段：
 * - forceDismissWindowTime: 强制关闭时间
 */ function AdvancedSection(param) {
    let { windowConf } = param;
    const { t } = (0,es/* useTranslation */.Bd)('homepage/components/android-float/window/content');
    const [forceDismissWindowTime] = (0,watcher_useProxyWatch/* useProxyWatch */.x)(windowConf, 'forceDismissWindowTime', windowConf.forceDismissWindowTime);
    console.log('AdvancedSection: render forceDismissWindowTime:', forceDismissWindowTime);
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(Stack_Stack/* default */.A, {
        spacing: 2,
        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box_Box/* default */.A, {
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsx)(OptionalLabel, {
                    label: t('AdvancedSection.forceDismissWindowTimeLabel')
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)(TextField_TextField/* default */.A, {
                    type: "number",
                    value: forceDismissWindowTime,
                    onChange: (e)=>{
                        console.log('AdvancedSection: forceDismissWindowTime changed to', e.target.value);
                        windowConf.forceDismissWindowTime = Number(e.target.value);
                    },
                    size: "small",
                    fullWidth: true,
                    inputProps: {
                        min: 0,
                        step: 1000
                    },
                    helperText: t('AdvancedSection.forceDismissWindowTimeHelper')
                })
            ]
        })
    });
}

;// ./src/components/android-float/window/WindowConfEditor.tsx












/**
 * WindowConfEditor - Accordion 式编辑窗口配置
 *
 * 功能：
 * - 快速定位和编辑字段
 * - 根据 windowType 动态显示配置
 * - 必填项标记
 */ function WindowConfEditor(param) {
    let { windowConf: conf, isCreateMode = false } = param;
    const router = (0,next_router.useRouter)();
    const { t } = (0,es/* useTranslation */.Bd)('homepage/components/android-float/window/content');
    const [windowConf] = (0,react.useState)((0,proxyWatch/* toProxy */.I$)(conf));
    const [expanded, setExpanded] = (0,react.useState)('basic');
    const [windowType] = (0,watcher_useProxyWatch/* useProxyWatch */.x)(windowConf, 'windowType', windowConf.windowType);
    const [tag] = (0,watcher_useProxyWatch/* useProxyWatch */.x)(windowConf, 'tag', windowConf.tag);
    const [windowId] = (0,watcher_useProxyWatch/* useProxyWatch */.x)(windowConf, 'windowId', windowConf.windowId);
    console.log('WindowConfEditor: render windowType:', windowType);
    /**
   * 监听 windowType 变化，自动初始化对应的配置对象
   */ (0,react.useEffect)(()=>{
        console.log('WindowConfEditor: useEffect - windowType changed to:', windowType);
        if (windowType === WindowConf/* WindowType */.ZI.Float) {
            if (!windowConf.floatWindowConf) {
                console.log('WindowConfEditor: creating default FloatWindowConf');
                windowConf.floatWindowConf = (0,WindowConf/* createDefaultFloatWindowConf */.Wl)();
            }
        }
    }, [
        windowType,
        windowConf
    ]);
    const editComfirmed = ()=>{
        console.log('WindowConfEditor: editComfirmed, isCreateMode:', isCreateMode);
        if (isCreateMode) {
            // 创建模式: 首次添加到列表
            console.log('WindowConfEditor: creating new window config:', windowConf.tag);
            data/* androidFloatWindowData */.Kl.data.windowData.windowList.push(windowConf);
        } else {
            // 编辑模式: 更新列表中的配置
            const index = data/* androidFloatWindowData */.Kl.data.windowData.windowList.findIndex((w)=>w.windowId === windowConf.windowId);
            if (index == -1) {
                console.error('WindowConfEditor: editComfirmed - window config not found for windowId:', windowConf.windowId);
                return;
            }
            data/* androidFloatWindowData */.Kl.data.windowData.windowList[index] = windowConf;
            console.log('WindowConfEditor: window config updated at index:', index);
        }
    };
    const handleConfirm = ()=>{
        console.log('WindowConfEditor: handleConfirm - confirming changes');
        editComfirmed();
        router.back();
    };
    const handleCancel = ()=>{
        console.log('WindowConfEditor: handleCancel, isCreateMode:', isCreateMode);
        if (isCreateMode) {
            console.log('WindowConfEditor: discarding new config (not saved)');
        } else {
            console.log('WindowConfEditor: discarding changes to existing config');
        }
        router.back();
    };
    /**
   * 处理 Accordion 展开/折叠
   */ const handleAccordionChange = (panelId)=>(event, isExpanded)=>{
            console.log('WindowConfEditor: Accordion', panelId, 'toggled, isExpanded:', isExpanded);
            setExpanded(isExpanded ? panelId : false);
        };
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box_Box/* default */.A, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box_Box/* default */.A, {
                sx: {
                    mb: 3,
                    pb: 2,
                    borderBottom: '1px solid',
                    borderColor: 'divider'
                },
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography_Typography/* default */.A, {
                        variant: "h6",
                        sx: {
                            fontWeight: 'bold'
                        },
                        children: tag
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography_Typography/* default */.A, {
                        variant: "body2",
                        color: "text.secondary",
                        children: t('WindowConfEditor.header.typeAndId', {
                            type: windowType,
                            id: windowId.substring(0, 8)
                        })
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)(Accordion/* default */.A, {
                expanded: expanded === 'basic',
                onChange: handleAccordionChange('basic'),
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)(AccordionSummary/* default */.A, {
                        expandIcon: /*#__PURE__*/ (0,jsx_runtime.jsx)(ExpandMore/* default */.A, {}),
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(Chip/* default */.A, {
                                label: t('WindowConfEditor.sections.required'),
                                size: "small",
                                sx: {
                                    mr: 1
                                },
                                color: "error",
                                variant: "outlined"
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography_Typography/* default */.A, {
                                children: t('WindowConfEditor.sections.basicInfo')
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(AccordionDetails/* default */.A, {
                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(BasicInfoSection, {
                            windowConf: windowConf
                        })
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)(Accordion/* default */.A, {
                expanded: expanded === 'html',
                onChange: handleAccordionChange('html'),
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)(AccordionSummary/* default */.A, {
                        expandIcon: /*#__PURE__*/ (0,jsx_runtime.jsx)(ExpandMore/* default */.A, {}),
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(Chip/* default */.A, {
                                label: t('WindowConfEditor.sections.required'),
                                size: "small",
                                sx: {
                                    mr: 1
                                },
                                color: "error",
                                variant: "outlined"
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography_Typography/* default */.A, {
                                children: t('WindowConfEditor.sections.htmlContent')
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(AccordionDetails/* default */.A, {
                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(HtmlConfSection, {
                            htmlConf: windowConf.htmlConf
                        })
                    })
                ]
            }),
            windowType === WindowConf/* WindowType */.ZI.Float && windowConf.floatWindowConf && /*#__PURE__*/ (0,jsx_runtime.jsxs)(Accordion/* default */.A, {
                expanded: expanded === 'float',
                onChange: handleAccordionChange('float'),
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(AccordionSummary/* default */.A, {
                        expandIcon: /*#__PURE__*/ (0,jsx_runtime.jsx)(ExpandMore/* default */.A, {}),
                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography_Typography/* default */.A, {
                            children: t('WindowConfEditor.sections.floatConfig')
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(AccordionDetails/* default */.A, {
                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(FloatWindowConfUI, {
                            floatWindowConf: windowConf.floatWindowConf
                        })
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)(Accordion/* default */.A, {
                expanded: expanded === 'advanced',
                onChange: handleAccordionChange('advanced'),
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(AccordionSummary/* default */.A, {
                        expandIcon: /*#__PURE__*/ (0,jsx_runtime.jsx)(ExpandMore/* default */.A, {}),
                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography_Typography/* default */.A, {
                            children: t('WindowConfEditor.sections.advanced')
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(AccordionDetails/* default */.A, {
                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(AdvancedSection, {
                            windowConf: windowConf
                        })
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)(Stack_Stack/* default */.A, {
                direction: "row",
                spacing: 2,
                sx: {
                    mt: 4,
                    justifyContent: 'flex-end'
                },
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Button/* default */.A, {
                        variant: "outlined",
                        onClick: handleCancel,
                        children: t('WindowConfEditor.actions.cancel')
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Button/* default */.A, {
                        variant: "contained",
                        color: "primary",
                        onClick: handleConfirm,
                        children: t('WindowConfEditor.actions.save')
                    })
                ]
            })
        ]
    });
}


/***/ }),

/***/ 97972:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


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

}]);
//# sourceMappingURL=8041-cb9038a5d3a030a8.js.map