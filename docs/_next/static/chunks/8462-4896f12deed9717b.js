"use strict";
(self["webpackChunk_N_E"] = self["webpackChunk_N_E"] || []).push([[8462],{

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
    // log.pause = true;
    log.log("i18n languageChanged", lng);
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
        // fallbackLng: isServer ? "en" : "zh-CN",
        fallbackLng: "en",
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
/* harmony export */   Kt: () => (/* binding */ ManifestPermissionGroup),
/* harmony export */   Ls: () => (/* binding */ ManifestPermission),
/* harmony export */   _8: () => (/* binding */ Manifest)
/* harmony export */ });
/* unused harmony export AndroidPermissions */
// 权限组定义 (使用 as const 提供类型安全)
const PermissionGroup = {
    ACTIVITY_RECOGNITION: "android.permission-group.ACTIVITY_RECOGNITION",
    CALENDAR: "android.permission-group.CALENDAR",
    CALL_LOG: "android.permission-group.CALL_LOG",
    CAMERA: "android.permission-group.CAMERA",
    CONTACTS: "android.permission-group.CONTACTS",
    LOCATION: "android.permission-group.LOCATION",
    MICROPHONE: "android.permission-group.MICROPHONE",
    NEARBY_DEVICES: "android.permission-group.NEARBY_DEVICES",
    NOTIFICATIONS: "android.permission-group.NOTIFICATIONS",
    PHONE: "android.permission-group.PHONE",
    READ_MEDIA_AURAL: "android.permission-group.READ_MEDIA_AURAL",
    READ_MEDIA_VISUAL: "android.permission-group.READ_MEDIA_VISUAL",
    SENSORS: "android.permission-group.SENSORS",
    SMS: "android.permission-group.SMS",
    STORAGE: "android.permission-group.STORAGE"
};
const ManifestPermissionGroup = PermissionGroup;
// 完整权限定义 (使用 as const 提供类型安全)
const Permission = {
    ACCEPT_HANDOVER: "android.permission.ACCEPT_HANDOVER",
    ACCESS_BACKGROUND_LOCATION: "android.permission.ACCESS_BACKGROUND_LOCATION",
    ACCESS_BLOBS_ACROSS_USERS: "android.permission.ACCESS_BLOBS_ACROSS_USERS",
    ACCESS_CHECKIN_PROPERTIES: "android.permission.ACCESS_CHECKIN_PROPERTIES",
    ACCESS_COARSE_LOCATION: "android.permission.ACCESS_COARSE_LOCATION",
    ACCESS_FINE_LOCATION: "android.permission.ACCESS_FINE_LOCATION",
    ACCESS_LOCATION_EXTRA_COMMANDS: "android.permission.ACCESS_LOCATION_EXTRA_COMMANDS",
    ACCESS_MEDIA_LOCATION: "android.permission.ACCESS_MEDIA_LOCATION",
    ACCESS_NETWORK_STATE: "android.permission.ACCESS_NETWORK_STATE",
    ACCESS_NOTIFICATION_POLICY: "android.permission.ACCESS_NOTIFICATION_POLICY",
    ACCESS_WIFI_STATE: "android.permission.ACCESS_WIFI_STATE",
    ACCOUNT_MANAGER: "android.permission.ACCOUNT_MANAGER",
    ACTIVITY_RECOGNITION: "android.permission.ACTIVITY_RECOGNITION",
    ADD_VOICEMAIL: "com.android.voicemail.permission.ADD_VOICEMAIL",
    ANSWER_PHONE_CALLS: "android.permission.ANSWER_PHONE_CALLS",
    BATTERY_STATS: "android.permission.BATTERY_STATS",
    BIND_ACCESSIBILITY_SERVICE: "android.permission.BIND_ACCESSIBILITY_SERVICE",
    BIND_APPWIDGET: "android.permission.BIND_APPWIDGET",
    BIND_AUTOFILL_SERVICE: "android.permission.BIND_AUTOFILL_SERVICE",
    BIND_CALL_REDIRECTION_SERVICE: "android.permission.BIND_CALL_REDIRECTION_SERVICE",
    BIND_CARRIER_MESSAGING_CLIENT_SERVICE: "android.permission.BIND_CARRIER_MESSAGING_CLIENT_SERVICE",
    BIND_CARRIER_MESSAGING_SERVICE: "android.permission.BIND_CARRIER_MESSAGING_SERVICE",
    BIND_CARRIER_SERVICES: "android.permission.BIND_CARRIER_SERVICES",
    BIND_CHOOSER_TARGET_SERVICE: "android.permission.BIND_CHOOSER_TARGET_SERVICE",
    BIND_COMPANION_DEVICE_SERVICE: "android.permission.BIND_COMPANION_DEVICE_SERVICE",
    BIND_CONDITION_PROVIDER_SERVICE: "android.permission.BIND_CONDITION_PROVIDER_SERVICE",
    BIND_CONTROLS: "android.permission.BIND_CONTROLS",
    BIND_CREDENTIAL_PROVIDER_SERVICE: "android.permission.BIND_CREDENTIAL_PROVIDER_SERVICE",
    BIND_DEVICE_ADMIN: "android.permission.BIND_DEVICE_ADMIN",
    BIND_DREAM_SERVICE: "android.permission.BIND_DREAM_SERVICE",
    BIND_INCALL_SERVICE: "android.permission.BIND_INCALL_SERVICE",
    BIND_INPUT_METHOD: "android.permission.BIND_INPUT_METHOD",
    BIND_MIDI_DEVICE_SERVICE: "android.permission.BIND_MIDI_DEVICE_SERVICE",
    BIND_NFC_SERVICE: "android.permission.BIND_NFC_SERVICE",
    BIND_NOTIFICATION_LISTENER_SERVICE: "android.permission.BIND_NOTIFICATION_LISTENER_SERVICE",
    BIND_PRINT_SERVICE: "android.permission.BIND_PRINT_SERVICE",
    BIND_QUICK_ACCESS_WALLET_SERVICE: "android.permission.BIND_QUICK_ACCESS_WALLET_SERVICE",
    BIND_QUICK_SETTINGS_TILE: "android.permission.BIND_QUICK_SETTINGS_TILE",
    BIND_REMOTEVIEWS: "android.permission.BIND_REMOTEVIEWS",
    BIND_SCREENING_SERVICE: "android.permission.BIND_SCREENING_SERVICE",
    BIND_TELECOM_CONNECTION_SERVICE: "android.permission.BIND_TELECOM_CONNECTION_SERVICE",
    BIND_TEXT_SERVICE: "android.permission.BIND_TEXT_SERVICE",
    BIND_TV_INPUT: "android.permission.BIND_TV_INPUT",
    BIND_TV_INTERACTIVE_APP: "android.permission.BIND_TV_INTERACTIVE_APP",
    BIND_VISUAL_VOICEMAIL_SERVICE: "android.permission.BIND_VISUAL_VOICEMAIL_SERVICE",
    BIND_VOICE_INTERACTION: "android.permission.BIND_VOICE_INTERACTION",
    BIND_VPN_SERVICE: "android.permission.BIND_VPN_SERVICE",
    BIND_VR_LISTENER_SERVICE: "android.permission.BIND_VR_LISTENER_SERVICE",
    BIND_WALLPAPER: "android.permission.BIND_WALLPAPER",
    BLUETOOTH: "android.permission.BLUETOOTH",
    BLUETOOTH_ADMIN: "android.permission.BLUETOOTH_ADMIN",
    BLUETOOTH_ADVERTISE: "android.permission.BLUETOOTH_ADVERTISE",
    BLUETOOTH_CONNECT: "android.permission.BLUETOOTH_CONNECT",
    BLUETOOTH_PRIVILEGED: "android.permission.BLUETOOTH_PRIVILEGED",
    BLUETOOTH_SCAN: "android.permission.BLUETOOTH_SCAN",
    BODY_SENSORS: "android.permission.BODY_SENSORS",
    BODY_SENSORS_BACKGROUND: "android.permission.BODY_SENSORS_BACKGROUND",
    BROADCAST_PACKAGE_REMOVED: "android.permission.BROADCAST_PACKAGE_REMOVED",
    BROADCAST_SMS: "android.permission.BROADCAST_SMS",
    BROADCAST_STICKY: "android.permission.BROADCAST_STICKY",
    BROADCAST_WAP_PUSH: "android.permission.BROADCAST_WAP_PUSH",
    CALL_COMPANION_APP: "android.permission.CALL_COMPANION_APP",
    CALL_PHONE: "android.permission.CALL_PHONE",
    CALL_PRIVILEGED: "android.permission.CALL_PRIVILEGED",
    CAMERA: "android.permission.CAMERA",
    CAPTURE_AUDIO_OUTPUT: "android.permission.CAPTURE_AUDIO_OUTPUT",
    CHANGE_COMPONENT_ENABLED_STATE: "android.permission.CHANGE_COMPONENT_ENABLED_STATE",
    CHANGE_CONFIGURATION: "android.permission.CHANGE_CONFIGURATION",
    CHANGE_NETWORK_STATE: "android.permission.CHANGE_NETWORK_STATE",
    CHANGE_WIFI_MULTICAST_STATE: "android.permission.CHANGE_WIFI_MULTICAST_STATE",
    CHANGE_WIFI_STATE: "android.permission.CHANGE_WIFI_STATE",
    CLEAR_APP_CACHE: "android.permission.CLEAR_APP_CACHE",
    CONFIGURE_WIFI_DISPLAY: "android.permission.CONFIGURE_WIFI_DISPLAY",
    CONTROL_LOCATION_UPDATES: "android.permission.CONTROL_LOCATION_UPDATES",
    CREDENTIAL_MANAGER_QUERY_CANDIDATE_CREDENTIALS: "android.permission.CREDENTIAL_MANAGER_QUERY_CANDIDATE_CREDENTIALS",
    CREDENTIAL_MANAGER_SET_ALLOWED_PROVIDERS: "android.permission.CREDENTIAL_MANAGER_SET_ALLOWED_PROVIDERS",
    CREDENTIAL_MANAGER_SET_ORIGIN: "android.permission.CREDENTIAL_MANAGER_SET_ORIGIN",
    DELETE_CACHE_FILES: "android.permission.DELETE_CACHE_FILES",
    DELETE_PACKAGES: "android.permission.DELETE_PACKAGES",
    DELIVER_COMPANION_MESSAGES: "android.permission.DELIVER_COMPANION_MESSAGES",
    DETECT_SCREEN_CAPTURE: "android.permission.DETECT_SCREEN_CAPTURE",
    DIAGNOSTIC: "android.permission.DIAGNOSTIC",
    DISABLE_KEYGUARD: "android.permission.DISABLE_KEYGUARD",
    DUMP: "android.permission.DUMP",
    ENFORCE_UPDATE_OWNERSHIP: "android.permission.ENFORCE_UPDATE_OWNERSHIP",
    EXECUTE_APP_ACTION: "android.permission.EXECUTE_APP_ACTION",
    EXPAND_STATUS_BAR: "android.permission.EXPAND_STATUS_BAR",
    FACTORY_TEST: "android.permission.FACTORY_TEST",
    FOREGROUND_SERVICE: "android.permission.FOREGROUND_SERVICE",
    FOREGROUND_SERVICE_CAMERA: "android.permission.FOREGROUND_SERVICE_CAMERA",
    FOREGROUND_SERVICE_CONNECTED_DEVICE: "android.permission.FOREGROUND_SERVICE_CONNECTED_DEVICE",
    FOREGROUND_SERVICE_DATA_SYNC: "android.permission.FOREGROUND_SERVICE_DATA_SYNC",
    FOREGROUND_SERVICE_HEALTH: "android.permission.FOREGROUND_SERVICE_HEALTH",
    FOREGROUND_SERVICE_LOCATION: "android.permission.FOREGROUND_SERVICE_LOCATION",
    FOREGROUND_SERVICE_MEDIA_PLAYBACK: "android.permission.FOREGROUND_SERVICE_MEDIA_PLAYBACK",
    FOREGROUND_SERVICE_MEDIA_PROJECTION: "android.permission.FOREGROUND_SERVICE_MEDIA_PROJECTION",
    FOREGROUND_SERVICE_MICROPHONE: "android.permission.FOREGROUND_SERVICE_MICROPHONE",
    FOREGROUND_SERVICE_PHONE_CALL: "android.permission.FOREGROUND_SERVICE_PHONE_CALL",
    FOREGROUND_SERVICE_REMOTE_MESSAGING: "android.permission.FOREGROUND_SERVICE_REMOTE_MESSAGING",
    FOREGROUND_SERVICE_SPECIAL_USE: "android.permission.FOREGROUND_SERVICE_SPECIAL_USE",
    FOREGROUND_SERVICE_SYSTEM_EXEMPTED: "android.permission.FOREGROUND_SERVICE_SYSTEM_EXEMPTED",
    GET_ACCOUNTS: "android.permission.GET_ACCOUNTS",
    GET_ACCOUNTS_PRIVILEGED: "android.permission.GET_ACCOUNTS_PRIVILEGED",
    GET_PACKAGE_SIZE: "android.permission.GET_PACKAGE_SIZE",
    GET_TASKS: "android.permission.GET_TASKS",
    GLOBAL_SEARCH: "android.permission.GLOBAL_SEARCH",
    HIDE_OVERLAY_WINDOWS: "android.permission.HIDE_OVERLAY_WINDOWS",
    HIGH_SAMPLING_RATE_SENSORS: "android.permission.HIGH_SAMPLING_RATE_SENSORS",
    INSTALL_LOCATION_PROVIDER: "android.permission.INSTALL_LOCATION_PROVIDER",
    INSTALL_PACKAGES: "android.permission.INSTALL_PACKAGES",
    INSTALL_SHORTCUT: "com.android.launcher.permission.INSTALL_SHORTCUT",
    INSTANT_APP_FOREGROUND_SERVICE: "android.permission.INSTANT_APP_FOREGROUND_SERVICE",
    INTERACT_ACROSS_PROFILES: "android.permission.INTERACT_ACROSS_PROFILES",
    INTERNET: "android.permission.INTERNET",
    KILL_BACKGROUND_PROCESSES: "android.permission.KILL_BACKGROUND_PROCESSES",
    LAUNCH_CAPTURE_CONTENT_ACTIVITY_FOR_NOTE: "android.permission.LAUNCH_CAPTURE_CONTENT_ACTIVITY_FOR_NOTE",
    LAUNCH_MULTI_PANE_SETTINGS_DEEP_LINK: "android.permission.LAUNCH_MULTI_PANE_SETTINGS_DEEP_LINK",
    LOADER_USAGE_STATS: "android.permission.LOADER_USAGE_STATS",
    LOCATION_HARDWARE: "android.permission.LOCATION_HARDWARE",
    MANAGE_DEVICE_LOCK_STATE: "android.permission.MANAGE_DEVICE_LOCK_STATE",
    MANAGE_DEVICE_POLICY_ACCESSIBILITY: "android.permission.MANAGE_DEVICE_POLICY_ACCESSIBILITY",
    MANAGE_DEVICE_POLICY_ACCOUNT_MANAGEMENT: "android.permission.MANAGE_DEVICE_POLICY_ACCOUNT_MANAGEMENT",
    MANAGE_DEVICE_POLICY_ACROSS_USERS: "android.permission.MANAGE_DEVICE_POLICY_ACROSS_USERS",
    MANAGE_DEVICE_POLICY_ACROSS_USERS_FULL: "android.permission.MANAGE_DEVICE_POLICY_ACROSS_USERS_FULL",
    MANAGE_DEVICE_POLICY_ACROSS_USERS_SECURITY_CRITICAL: "android.permission.MANAGE_DEVICE_POLICY_ACROSS_USERS_SECURITY_CRITICAL",
    MANAGE_DEVICE_POLICY_AIRPLANE_MODE: "android.permission.MANAGE_DEVICE_POLICY_AIRPLANE_MODE",
    MANAGE_DEVICE_POLICY_APPS_CONTROL: "android.permission.MANAGE_DEVICE_POLICY_APPS_CONTROL",
    MANAGE_DEVICE_POLICY_APP_RESTRICTIONS: "android.permission.MANAGE_DEVICE_POLICY_APP_RESTRICTIONS",
    MANAGE_DEVICE_POLICY_APP_USER_DATA: "android.permission.MANAGE_DEVICE_POLICY_APP_USER_DATA",
    MANAGE_DEVICE_POLICY_AUDIO_OUTPUT: "android.permission.MANAGE_DEVICE_POLICY_AUDIO_OUTPUT",
    MANAGE_DEVICE_POLICY_AUTOFILL: "android.permission.MANAGE_DEVICE_POLICY_AUTOFILL",
    MANAGE_DEVICE_POLICY_BACKUP_SERVICE: "android.permission.MANAGE_DEVICE_POLICY_BACKUP_SERVICE",
    MANAGE_DEVICE_POLICY_BLUETOOTH: "android.permission.MANAGE_DEVICE_POLICY_BLUETOOTH",
    MANAGE_DEVICE_POLICY_BUGREPORT: "android.permission.MANAGE_DEVICE_POLICY_BUGREPORT",
    MANAGE_DEVICE_POLICY_CALLS: "android.permission.MANAGE_DEVICE_POLICY_CALLS",
    MANAGE_DEVICE_POLICY_CAMERA: "android.permission.MANAGE_DEVICE_POLICY_CAMERA",
    MANAGE_DEVICE_POLICY_CERTIFICATES: "android.permission.MANAGE_DEVICE_POLICY_CERTIFICATES",
    MANAGE_DEVICE_POLICY_COMMON_CRITERIA_MODE: "android.permission.MANAGE_DEVICE_POLICY_COMMON_CRITERIA_MODE",
    MANAGE_DEVICE_POLICY_DEBUGGING_FEATURES: "android.permission.MANAGE_DEVICE_POLICY_DEBUGGING_FEATURES",
    MANAGE_DEVICE_POLICY_DEFAULT_SMS: "android.permission.MANAGE_DEVICE_POLICY_DEFAULT_SMS",
    MANAGE_DEVICE_POLICY_DEVICE_IDENTIFIERS: "android.permission.MANAGE_DEVICE_POLICY_DEVICE_IDENTIFIERS",
    MANAGE_DEVICE_POLICY_DISPLAY: "android.permission.MANAGE_DEVICE_POLICY_DISPLAY",
    MANAGE_DEVICE_POLICY_FACTORY_RESET: "android.permission.MANAGE_DEVICE_POLICY_FACTORY_RESET",
    MANAGE_DEVICE_POLICY_FUN: "android.permission.MANAGE_DEVICE_POLICY_FUN",
    MANAGE_DEVICE_POLICY_INPUT_METHODS: "android.permission.MANAGE_DEVICE_POLICY_INPUT_METHODS",
    MANAGE_DEVICE_POLICY_INSTALL_UNKNOWN_SOURCES: "android.permission.MANAGE_DEVICE_POLICY_INSTALL_UNKNOWN_SOURCES",
    MANAGE_DEVICE_POLICY_KEEP_UNINSTALLED_PACKAGES: "android.permission.MANAGE_DEVICE_POLICY_KEEP_UNINSTALLED_PACKAGES",
    MANAGE_DEVICE_POLICY_KEYGUARD: "android.permission.MANAGE_DEVICE_POLICY_KEYGUARD",
    MANAGE_DEVICE_POLICY_LOCALE: "android.permission.MANAGE_DEVICE_POLICY_LOCALE",
    MANAGE_DEVICE_POLICY_LOCATION: "android.permission.MANAGE_DEVICE_POLICY_LOCATION",
    MANAGE_DEVICE_POLICY_LOCK: "android.permission.MANAGE_DEVICE_POLICY_LOCK",
    MANAGE_DEVICE_POLICY_LOCK_CREDENTIALS: "android.permission.MANAGE_DEVICE_POLICY_LOCK_CREDENTIALS",
    MANAGE_DEVICE_POLICY_LOCK_TASK: "android.permission.MANAGE_DEVICE_POLICY_LOCK_TASK",
    MANAGE_DEVICE_POLICY_METERED_DATA: "android.permission.MANAGE_DEVICE_POLICY_METERED_DATA",
    MANAGE_DEVICE_POLICY_MICROPHONE: "android.permission.MANAGE_DEVICE_POLICY_MICROPHONE",
    MANAGE_DEVICE_POLICY_MOBILE_NETWORK: "android.permission.MANAGE_DEVICE_POLICY_MOBILE_NETWORK",
    MANAGE_DEVICE_POLICY_MODIFY_USERS: "android.permission.MANAGE_DEVICE_POLICY_MODIFY_USERS",
    MANAGE_DEVICE_POLICY_MTE: "android.permission.MANAGE_DEVICE_POLICY_MTE",
    MANAGE_DEVICE_POLICY_NEARBY_COMMUNICATION: "android.permission.MANAGE_DEVICE_POLICY_NEARBY_COMMUNICATION",
    MANAGE_DEVICE_POLICY_NETWORK_LOGGING: "android.permission.MANAGE_DEVICE_POLICY_NETWORK_LOGGING",
    MANAGE_DEVICE_POLICY_ORGANIZATION_IDENTITY: "android.permission.MANAGE_DEVICE_POLICY_ORGANIZATION_IDENTITY",
    MANAGE_DEVICE_POLICY_OVERRIDE_APN: "android.permission.MANAGE_DEVICE_POLICY_OVERRIDE_APN",
    MANAGE_DEVICE_POLICY_PACKAGE_STATE: "android.permission.MANAGE_DEVICE_POLICY_PACKAGE_STATE",
    MANAGE_DEVICE_POLICY_PHYSICAL_MEDIA: "android.permission.MANAGE_DEVICE_POLICY_PHYSICAL_MEDIA",
    MANAGE_DEVICE_POLICY_PRINTING: "android.permission.MANAGE_DEVICE_POLICY_PRINTING",
    MANAGE_DEVICE_POLICY_PRIVATE_DNS: "android.permission.MANAGE_DEVICE_POLICY_PRIVATE_DNS",
    MANAGE_DEVICE_POLICY_PROFILES: "android.permission.MANAGE_DEVICE_POLICY_PROFILES",
    MANAGE_DEVICE_POLICY_PROFILE_INTERACTION: "android.permission.MANAGE_DEVICE_POLICY_PROFILE_INTERACTION",
    MANAGE_DEVICE_POLICY_PROXY: "android.permission.MANAGE_DEVICE_POLICY_PROXY",
    MANAGE_DEVICE_POLICY_QUERY_SYSTEM_UPDATES: "android.permission.MANAGE_DEVICE_POLICY_QUERY_SYSTEM_UPDATES",
    MANAGE_DEVICE_POLICY_RESET_PASSWORD: "android.permission.MANAGE_DEVICE_POLICY_RESET_PASSWORD",
    MANAGE_DEVICE_POLICY_RESTRICT_PRIVATE_DNS: "android.permission.MANAGE_DEVICE_POLICY_RESTRICT_PRIVATE_DNS",
    MANAGE_DEVICE_POLICY_RUNTIME_PERMISSIONS: "android.permission.MANAGE_DEVICE_POLICY_RUNTIME_PERMISSIONS",
    MANAGE_DEVICE_POLICY_RUN_IN_BACKGROUND: "android.permission.MANAGE_DEVICE_POLICY_RUN_IN_BACKGROUND",
    MANAGE_DEVICE_POLICY_SAFE_BOOT: "android.permission.MANAGE_DEVICE_POLICY_SAFE_BOOT",
    MANAGE_DEVICE_POLICY_SCREEN_CAPTURE: "android.permission.MANAGE_DEVICE_POLICY_SCREEN_CAPTURE",
    MANAGE_DEVICE_POLICY_SCREEN_CONTENT: "android.permission.MANAGE_DEVICE_POLICY_SCREEN_CONTENT",
    MANAGE_DEVICE_POLICY_SECURITY_LOGGING: "android.permission.MANAGE_DEVICE_POLICY_SECURITY_LOGGING",
    MANAGE_DEVICE_POLICY_SETTINGS: "android.permission.MANAGE_DEVICE_POLICY_SETTINGS",
    MANAGE_DEVICE_POLICY_SMS: "android.permission.MANAGE_DEVICE_POLICY_SMS",
    MANAGE_DEVICE_POLICY_STATUS_BAR: "android.permission.MANAGE_DEVICE_POLICY_STATUS_BAR",
    MANAGE_DEVICE_POLICY_SUPPORT_MESSAGE: "android.permission.MANAGE_DEVICE_POLICY_SUPPORT_MESSAGE",
    MANAGE_DEVICE_POLICY_SUSPEND_PERSONAL_APPS: "android.permission.MANAGE_DEVICE_POLICY_SUSPEND_PERSONAL_APPS",
    MANAGE_DEVICE_POLICY_SYSTEM_APPS: "android.permission.MANAGE_DEVICE_POLICY_SYSTEM_APPS",
    MANAGE_DEVICE_POLICY_SYSTEM_DIALOGS: "android.permission.MANAGE_DEVICE_POLICY_SYSTEM_DIALOGS",
    MANAGE_DEVICE_POLICY_SYSTEM_UPDATES: "android.permission.MANAGE_DEVICE_POLICY_SYSTEM_UPDATES",
    MANAGE_DEVICE_POLICY_TIME: "android.permission.MANAGE_DEVICE_POLICY_TIME",
    MANAGE_DEVICE_POLICY_USB_DATA_SIGNALLING: "android.permission.MANAGE_DEVICE_POLICY_USB_DATA_SIGNALLING",
    MANAGE_DEVICE_POLICY_USB_FILE_TRANSFER: "android.permission.MANAGE_DEVICE_POLICY_USB_FILE_TRANSFER",
    MANAGE_DEVICE_POLICY_USERS: "android.permission.MANAGE_DEVICE_POLICY_USERS",
    MANAGE_DEVICE_POLICY_VPN: "android.permission.MANAGE_DEVICE_POLICY_VPN",
    MANAGE_DEVICE_POLICY_WALLPAPER: "android.permission.MANAGE_DEVICE_POLICY_WALLPAPER",
    MANAGE_DEVICE_POLICY_WIFI: "android.permission.MANAGE_DEVICE_POLICY_WIFI",
    MANAGE_DEVICE_POLICY_WINDOWS: "android.permission.MANAGE_DEVICE_POLICY_WINDOWS",
    MANAGE_DEVICE_POLICY_WIPE_DATA: "android.permission.MANAGE_DEVICE_POLICY_WIPE_DATA",
    MANAGE_DOCUMENTS: "android.permission.MANAGE_DOCUMENTS",
    MANAGE_EXTERNAL_STORAGE: "android.permission.MANAGE_EXTERNAL_STORAGE",
    MANAGE_MEDIA: "android.permission.MANAGE_MEDIA",
    MANAGE_ONGOING_CALLS: "android.permission.MANAGE_ONGOING_CALLS",
    MANAGE_OWN_CALLS: "android.permission.MANAGE_OWN_CALLS",
    MANAGE_WIFI_INTERFACES: "android.permission.MANAGE_WIFI_INTERFACES",
    MANAGE_WIFI_NETWORK_SELECTION: "android.permission.MANAGE_WIFI_NETWORK_SELECTION",
    MASTER_CLEAR: "android.permission.MASTER_CLEAR",
    MEDIA_CONTENT_CONTROL: "android.permission.MEDIA_CONTENT_CONTROL",
    MODIFY_AUDIO_SETTINGS: "android.permission.MODIFY_AUDIO_SETTINGS",
    MODIFY_PHONE_STATE: "android.permission.MODIFY_PHONE_STATE",
    MOUNT_FORMAT_FILESYSTEMS: "android.permission.MOUNT_FORMAT_FILESYSTEMS",
    MOUNT_UNMOUNT_FILESYSTEMS: "android.permission.MOUNT_UNMOUNT_FILESYSTEMS",
    NEARBY_WIFI_DEVICES: "android.permission.NEARBY_WIFI_DEVICES",
    NFC: "android.permission.NFC",
    NFC_PREFERRED_PAYMENT_INFO: "android.permission.NFC_PREFERRED_PAYMENT_INFO",
    NFC_TRANSACTION_EVENT: "android.permission.NFC_TRANSACTION_EVENT",
    OVERRIDE_WIFI_CONFIG: "android.permission.OVERRIDE_WIFI_CONFIG",
    PACKAGE_USAGE_STATS: "android.permission.PACKAGE_USAGE_STATS",
    PERSISTENT_ACTIVITY: "android.permission.PERSISTENT_ACTIVITY",
    POST_NOTIFICATIONS: "android.permission.POST_NOTIFICATIONS",
    PROCESS_OUTGOING_CALLS: "android.permission.PROCESS_OUTGOING_CALLS",
    PROVIDE_OWN_AUTOFILL_SUGGESTIONS: "android.permission.PROVIDE_OWN_AUTOFILL_SUGGESTIONS",
    PROVIDE_REMOTE_CREDENTIALS: "android.permission.PROVIDE_REMOTE_CREDENTIALS",
    QUERY_ALL_PACKAGES: "android.permission.QUERY_ALL_PACKAGES",
    READ_ASSISTANT_APP_SEARCH_DATA: "android.permission.READ_ASSISTANT_APP_SEARCH_DATA",
    READ_BASIC_PHONE_STATE: "android.permission.READ_BASIC_PHONE_STATE",
    READ_CALENDAR: "android.permission.READ_CALENDAR",
    READ_CALL_LOG: "android.permission.READ_CALL_LOG",
    READ_CONTACTS: "android.permission.READ_CONTACTS",
    READ_EXTERNAL_STORAGE: "android.permission.READ_EXTERNAL_STORAGE",
    READ_HOME_APP_SEARCH_DATA: "android.permission.READ_HOME_APP_SEARCH_DATA",
    READ_INPUT_STATE: "android.permission.READ_INPUT_STATE",
    READ_LOGS: "android.permission.READ_LOGS",
    READ_MEDIA_AUDIO: "android.permission.READ_MEDIA_AUDIO",
    READ_MEDIA_IMAGES: "android.permission.READ_MEDIA_IMAGES",
    READ_MEDIA_VIDEO: "android.permission.READ_MEDIA_VIDEO",
    READ_MEDIA_VISUAL_USER_SELECTED: "android.permission.READ_MEDIA_VISUAL_USER_SELECTED",
    READ_NEARBY_STREAMING_POLICY: "android.permission.READ_NEARBY_STREAMING_POLICY",
    READ_PHONE_NUMBERS: "android.permission.READ_PHONE_NUMBERS",
    READ_PHONE_STATE: "android.permission.READ_PHONE_STATE",
    READ_PRECISE_PHONE_STATE: "android.permission.READ_PRECISE_PHONE_STATE",
    READ_SMS: "android.permission.READ_SMS",
    READ_SYNC_SETTINGS: "android.permission.READ_SYNC_SETTINGS",
    READ_SYNC_STATS: "android.permission.READ_SYNC_STATS",
    READ_VOICEMAIL: "com.android.voicemail.permission.READ_VOICEMAIL",
    REBOOT: "android.permission.REBOOT",
    RECEIVE_BOOT_COMPLETED: "android.permission.RECEIVE_BOOT_COMPLETED",
    RECEIVE_MMS: "android.permission.RECEIVE_MMS",
    RECEIVE_SMS: "android.permission.RECEIVE_SMS",
    RECEIVE_WAP_PUSH: "android.permission.RECEIVE_WAP_PUSH",
    RECORD_AUDIO: "android.permission.RECORD_AUDIO",
    REORDER_TASKS: "android.permission.REORDER_TASKS",
    REQUEST_COMPANION_PROFILE_APP_STREAMING: "android.permission.REQUEST_COMPANION_PROFILE_APP_STREAMING",
    REQUEST_COMPANION_PROFILE_AUTOMOTIVE_PROJECTION: "android.permission.REQUEST_COMPANION_PROFILE_AUTOMOTIVE_PROJECTION",
    REQUEST_COMPANION_PROFILE_COMPUTER: "android.permission.REQUEST_COMPANION_PROFILE_COMPUTER",
    REQUEST_COMPANION_PROFILE_GLASSES: "android.permission.REQUEST_COMPANION_PROFILE_GLASSES",
    REQUEST_COMPANION_PROFILE_NEARBY_DEVICE_STREAMING: "android.permission.REQUEST_COMPANION_PROFILE_NEARBY_DEVICE_STREAMING",
    REQUEST_COMPANION_PROFILE_WATCH: "android.permission.REQUEST_COMPANION_PROFILE_WATCH",
    REQUEST_COMPANION_RUN_IN_BACKGROUND: "android.permission.REQUEST_COMPANION_RUN_IN_BACKGROUND",
    REQUEST_COMPANION_SELF_MANAGED: "android.permission.REQUEST_COMPANION_SELF_MANAGED",
    REQUEST_COMPANION_START_FOREGROUND_SERVICES_FROM_BACKGROUND: "android.permission.REQUEST_COMPANION_START_FOREGROUND_SERVICES_FROM_BACKGROUND",
    REQUEST_COMPANION_USE_DATA_IN_BACKGROUND: "android.permission.REQUEST_COMPANION_USE_DATA_IN_BACKGROUND",
    REQUEST_DELETE_PACKAGES: "android.permission.REQUEST_DELETE_PACKAGES",
    REQUEST_IGNORE_BATTERY_OPTIMIZATIONS: "android.permission.REQUEST_IGNORE_BATTERY_OPTIMIZATIONS",
    REQUEST_INSTALL_PACKAGES: "android.permission.REQUEST_INSTALL_PACKAGES",
    REQUEST_OBSERVE_COMPANION_DEVICE_PRESENCE: "android.permission.REQUEST_OBSERVE_COMPANION_DEVICE_PRESENCE",
    REQUEST_PASSWORD_COMPLEXITY: "android.permission.REQUEST_PASSWORD_COMPLEXITY",
    RESTART_PACKAGES: "android.permission.RESTART_PACKAGES",
    RUN_USER_INITIATED_JOBS: "android.permission.RUN_USER_INITIATED_JOBS",
    SCHEDULE_EXACT_ALARM: "android.permission.SCHEDULE_EXACT_ALARM",
    SEND_RESPOND_VIA_MESSAGE: "android.permission.SEND_RESPOND_VIA_MESSAGE",
    SEND_SMS: "android.permission.SEND_SMS",
    SET_ALARM: "com.android.alarm.permission.SET_ALARM",
    SET_ALWAYS_FINISH: "android.permission.SET_ALWAYS_FINISH",
    SET_ANIMATION_SCALE: "android.permission.SET_ANIMATION_SCALE",
    SET_DEBUG_APP: "android.permission.SET_DEBUG_APP",
    SET_PREFERRED_APPLICATIONS: "android.permission.SET_PREFERRED_APPLICATIONS",
    SET_PROCESS_LIMIT: "android.permission.SET_PROCESS_LIMIT",
    SET_TIME: "android.permission.SET_TIME",
    SET_TIME_ZONE: "android.permission.SET_TIME_ZONE",
    SET_WALLPAPER: "android.permission.SET_WALLPAPER",
    SET_WALLPAPER_HINTS: "android.permission.SET_WALLPAPER_HINTS",
    SIGNAL_PERSISTENT_PROCESSES: "android.permission.SIGNAL_PERSISTENT_PROCESSES",
    SMS_FINANCIAL_TRANSACTIONS: "android.permission.SMS_FINANCIAL_TRANSACTIONS",
    START_FOREGROUND_SERVICES_FROM_BACKGROUND: "android.permission.START_FOREGROUND_SERVICES_FROM_BACKGROUND",
    START_VIEW_APP_FEATURES: "android.permission.START_VIEW_APP_FEATURES",
    START_VIEW_PERMISSION_USAGE: "android.permission.START_VIEW_PERMISSION_USAGE",
    STATUS_BAR: "android.permission.STATUS_BAR",
    SUBSCRIBE_TO_KEYGUARD_LOCKED_STATE: "android.permission.SUBSCRIBE_TO_KEYGUARD_LOCKED_STATE",
    // 浮窗
    SYSTEM_ALERT_WINDOW: "android.permission.SYSTEM_ALERT_WINDOW",
    TRANSMIT_IR: "android.permission.TRANSMIT_IR",
    TURN_SCREEN_ON: "android.permission.TURN_SCREEN_ON",
    UNINSTALL_SHORTCUT: "com.android.launcher.permission.UNINSTALL_SHORTCUT",
    UPDATE_DEVICE_STATS: "android.permission.UPDATE_DEVICE_STATS",
    UPDATE_PACKAGES_WITHOUT_USER_ACTION: "android.permission.UPDATE_PACKAGES_WITHOUT_USER_ACTION",
    USE_BIOMETRIC: "android.permission.USE_BIOMETRIC",
    USE_EXACT_ALARM: "android.permission.USE_EXACT_ALARM",
    USE_FINGERPRINT: "android.permission.USE_FINGERPRINT",
    USE_FULL_SCREEN_INTENT: "android.permission.USE_FULL_SCREEN_INTENT",
    USE_ICC_AUTH_WITH_DEVICE_IDENTIFIER: "android.permission.USE_ICC_AUTH_WITH_DEVICE_IDENTIFIER",
    USE_SIP: "android.permission.USE_SIP",
    UWB_RANGING: "android.permission.UWB_RANGING",
    VIBRATE: "android.permission.VIBRATE",
    WAKE_LOCK: "android.permission.WAKE_LOCK",
    WRITE_APN_SETTINGS: "android.permission.WRITE_APN_SETTINGS",
    WRITE_CALENDAR: "android.permission.WRITE_CALENDAR",
    WRITE_CALL_LOG: "android.permission.WRITE_CALL_LOG",
    WRITE_CONTACTS: "android.permission.WRITE_CONTACTS",
    WRITE_EXTERNAL_STORAGE: "android.permission.WRITE_EXTERNAL_STORAGE",
    WRITE_GSERVICES: "android.permission.WRITE_GSERVICES",
    WRITE_SECURE_SETTINGS: "android.permission.WRITE_SECURE_SETTINGS",
    WRITE_SETTINGS: "android.permission.WRITE_SETTINGS",
    WRITE_SYNC_SETTINGS: "android.permission.WRITE_SYNC_SETTINGS",
    WRITE_VOICEMAIL: "com.android.voicemail.permission.WRITE_VOICEMAIL"
};
const ManifestPermission = Permission;
// 合并所有权限（权限组 + 权限）以提供完整的联合类型
const AndroidPermissions = {
    ...PermissionGroup,
    ...Permission
};
// 向后兼容：通过 Manifest 对象导出权限组和权限
const Manifest = {
    Permission,
    PermissionGroup
};


/***/ })

}]);
//# sourceMappingURL=8462-4896f12deed9717b.js.map