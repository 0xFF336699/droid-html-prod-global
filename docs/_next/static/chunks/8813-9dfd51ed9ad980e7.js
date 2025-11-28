"use strict";
(self["webpackChunk_N_E"] = self["webpackChunk_N_E"] || []).push([[8813],{

/***/ 16080:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  a: () => (/* binding */ Permission)
});

// EXTERNAL MODULE: ../../libs/droid/android/src/android/AutoWebViewJs.ts + 1 modules
var AutoWebViewJs = __webpack_require__(45921);
// EXTERNAL MODULE: ../../libs/fanfanlo/src/events/DataEvent.ts + 1 modules
var DataEvent = __webpack_require__(67816);
;// ../../libs/droid/android/src/android/components/PermissionEvent.ts

class PermissionEvent extends DataEvent/* DataEvent */.P {
    constructor(type, bl, extra, permission){
        super(type, {
            bl,
            extra,
            permission
        });
        this.bl = bl;
        this.extra = extra;
        this.permission = permission;
    }
}

// EXTERNAL MODULE: ../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/lodash.js
var lodash = __webpack_require__(63624);
var lodash_default = /*#__PURE__*/__webpack_require__.n(lodash);
// EXTERNAL MODULE: ../../libs/fanfanlo/src/events/EventDispatcher.ts
var EventDispatcher = __webpack_require__(59647);
;// ../../libs/fanfanlo/src/utils/callLater/callLater.ts

const list = [];
// in browser,not supports in nodejs
function callLater(fn, delay) {
    let repeatable = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : false;
    for(var _len = arguments.length, args = new Array(_len > 3 ? _len - 3 : 0), _key = 3; _key < _len; _key++){
        args[_key - 3] = arguments[_key];
    }
    if (!repeatable) {
        removeCallLater(fn);
    }
    let data = {
        fn,
        handle: -1,
        cancelled: false
    };
    // if in nodejs need to change window an return type
    data.handle = window.setTimeout(()=>{
        if (data.cancelled) return;
        fn.apply(undefined, args);
        remove(data);
    }, delay);
    list.push(data);
    return data;
}
function removeCallLater(fn) {
    for(let i = 0; i < list.length; i++){
        let data = list[i];
        if (!data) continue;
        if (data.fn == fn) {
            stopClear(data, i);
            return;
        }
    }
}
function remove(data) {
    let index = list.indexOf(data);
    stopClear(data, index);
}
function stopClear(data, index) {
    if (!data) return;
    clearTimeout(data.handle);
    data.cancelled = true;
    if (index > -1) {
        list.splice(index, 1);
    }
}
class QueueMicroTaskData {
    constructor(fn){
        this.f = ()=>{
            if (this.cancelled) return;
            let fn = this.fn;
            removeQueueMicroTask(this.fn);
            fn();
        };
        this.cancelled = false;
        this.fn = fn;
    }
}
let tasks = (/* unused pure expression or super */ null && ([]));
function callQueueMicroTask(fn) {
    let repeatable = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false;
    let data = new QueueMicroTaskData(fn);
    queueMicrotask(data.f);
    if (!repeatable) {
        let res = findTaskByFn(fn);
        if (res) {
            stopClearTask(res.data, res.i);
        }
    }
    tasks.push(data);
    return data;
}
function removeQueueMicroTask(fn) {
    if (fn instanceof QueueMicroTaskData) {
        let index = tasks.indexOf(fn);
        stopClearTask(fn, index);
    } else if (_.isFunction(fn)) {
        let res = findTaskByFn(fn);
        if (res) {
            stopClearTask(res.data, res.i);
        }
    } else {
    // warning not found
    }
}
function findTaskByFn(fn) {
    for(let i = 0; i < tasks.length; i++){
        let data = tasks[i];
        if (data.fn == fn) {
            return {
                data,
                i
            };
        }
    }
    return;
}
function stopClearTask(data, index) {
    if (!data) return;
    data.cancelled = true;
    if (index > -1) {
        tasks.splice(index, 1);
    }
}
function removeTask(data) {
    let index = tasks.indexOf(data);
    stopClearTask(data, index);
}

// EXTERNAL MODULE: ../../libs/fanfanlo/src/log/Log.ts + 1 modules
var Log = __webpack_require__(48891);
// EXTERNAL MODULE: ../../libs/fanfanlo/src/utils/documentUtils.ts
var documentUtils = __webpack_require__(47684);
;// ../../libs/droid/android/src/android/components/Permission.ts




class Permission extends EventDispatcher/* EventDispatcher */.Q {
    init(conf) {
        this.conf = conf;
    }
    runCheck() {
        let res;
        let hasPermission;
        let strData;
        let { print, error, warn, logger } = this.logger.sub(false, "fn-runCheck");
        if (this.conf.scripts.check.isRunner) {
            res = AutoWebViewJs/* autoWebViewJs */.yx.callScriptRunner(this.conf.scripts.check.script);
            strData = res.runnerResult;
        } else {
            res = AutoWebViewJs/* autoWebViewJs */.yx.callScript(this.conf.scripts.check.script);
            if (res.errMsg) {
                error(res.errMsg);
            }
            strData = res.javaResultString;
        }
        if (strData) {
            try {
                hasPermission = JSON.parse(strData);
            } catch (e) {
                error("json parese strData", e);
            }
        }
        return hasPermission;
    }
    check() {
        this.isSuccess = undefined;
        let { print, error, warn, logger } = this.logger.sub(false, "fn_check");
        let hasPermission = this.runCheck();
        if (!lodash_default().isBoolean(hasPermission)) {
            error("hasPermission is not bool", hasPermission);
            hasPermission = false;
        } else {
            this.isSuccess = hasPermission;
        }
        if (hasPermission === true) {
            callLater(this.complete, 1);
        }
        return this.isSuccess;
    }
    ask() {
        let res;
        if (this.conf.scripts.ask.isRunner) {
            res = AutoWebViewJs/* autoWebViewJs */.yx.callScriptRunner(this.conf.scripts.ask.script);
        } else {
            res = AutoWebViewJs/* autoWebViewJs */.yx.callScript(this.conf.scripts.ask.script);
        }
    // 在子类里覆写吧
    //         this.dispatchMayUpdatedEvent(undefined, undefined)
    }
    callAsk() {
        this.listenAskBack();
        this.ask();
    }
    dispatchMayUpdatedEvent() {
        let bl = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : undefined, extra = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : undefined;
        for(let i = 0; i < this.androidPermissionList.length; i++){
            let p = this.androidPermissionList[i];
            let event = new PermissionEvent(p, bl, extra, this);
            Permission.dispacher.dispatchEvent(event);
            this.dispatchEvent(event);
        }
    }
    clear() {
        for(let i = 0; i < this.exitFunList.length; i++){
            this.exitFunList[i]();
        }
        this.exitFunList.length = 0;
    }
    constructor(...args){
        super(...args), this.logger = new Log/* Log */.tG(false, this.constructor.name), this.androidPermissionList = [], this.exitFunList = [], this.isComplete = false, this.isTerminate = false, this.checkOrAsk = ()=>{
            this.isTerminate = false;
            this.isComplete = false;
            let hasPermission = this.check();
            if (!hasPermission) {
                this.runAsk();
                return false;
            }
            return hasPermission;
        }, this.runAsk = ()=>{
            this.conf.askUi.show(this);
        }, this.listenAskBack = ()=>{
            if (!this.conf.listenResume) return;
            document.addEventListener(documentUtils/* documentEventTypeDocumentIsShow */.oj, this.onDocumentShow);
        }, this.onDocumentShow = (e)=>{
            document.removeEventListener(documentUtils/* documentEventTypeDocumentIsShow */.oj, this.onDocumentShow);
            this.askComplete();
        }, this.askComplete = ()=>{
            if (this.isComplete) {
                return;
            }
            this.check();
            this.dispatchMayUpdatedEvent(this.isSuccess, undefined);
            this.complete();
        }, this.complete = ()=>{
            this.isComplete = true;
            this.clear();
            this.dispatchEvent(new DataEvent/* DataEvent */.P(Permission.eventComplete));
        };
    }
}
Permission.dispacher = new EventDispatcher/* EventDispatcher */.Q();
Permission.eventPermissionMayUpdated = "eventPermissionMayUpdated";
Permission.eventComplete = "complete";


/***/ }),

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

/***/ 38952:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   _: () => (/* binding */ env)
/* harmony export */ });
/* harmony import */ var is_ip__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(12006);

function getHtmlOrigin() {
    if (false) {}
    if (!(0,is_ip__WEBPACK_IMPORTED_MODULE_0__/* .isIP */ .ei)(window.location.hostname) && window.location.hostname !== "homepage.vm-ubuntu.droidlego.com") return window.location.origin + "/";
    // return `${window.location.protocol}://${window.location.hostname}:5173/`
    return "".concat(window.location.protocol, "//htmls.vm-ubuntu.droidlego.com/");
}
class Env {
    constructor(){
        this.htmlOrigin = getHtmlOrigin();
    }
}
const env = new Env();


/***/ }),

/***/ 39800:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   $W: () => (/* binding */ getWindowDismissEventType),
/* harmony export */   IL: () => (/* binding */ createDefaultWindowConf),
/* harmony export */   Sb: () => (/* binding */ createWindowConfCopy),
/* harmony export */   Wl: () => (/* binding */ createDefaultFloatWindowConf),
/* harmony export */   Ww: () => (/* binding */ FloatSidePattern),
/* harmony export */   YC: () => (/* binding */ FloatShowPattern),
/* harmony export */   ZI: () => (/* binding */ WindowType),
/* harmony export */   bH: () => (/* binding */ getWindowHideEventType),
/* harmony export */   n2: () => (/* binding */ getGravityOptions),
/* harmony export */   s: () => (/* binding */ getWindowOpenedEventType)
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
function getWindowDismissEventType(id) {
    return "window-".concat(id, "-dismiss");
}
function getWindowOpenedEventType(id) {
    return "window-".concat(id, "-opened");
}
function getWindowHideEventType(id) {
    return "window-".concat(id, "-hide");
}


/***/ }),

/***/ 40164:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  ps: () => (/* binding */ createFloatA11yPermissionGroup),
  uu: () => (/* binding */ runPermissionGroup)
});

// UNUSED EXPORTS: createPermissionsGroup

// EXTERNAL MODULE: ../../libs/fanfanlo/src/i18n/i18n-value-loader.ts
var i18n_value_loader = __webpack_require__(62095);
// EXTERNAL MODULE: ../../libs/fanfanlo/src/log/Log.ts + 1 modules
var Log = __webpack_require__(48891);
// EXTERNAL MODULE: ../../libs/fanfanlo/src/utils/documentUtils.ts
var documentUtils = __webpack_require__(47684);
// EXTERNAL MODULE: ../../libs/droid/android/src/android/androidDispatchers.ts
var androidDispatchers = __webpack_require__(64558);
// EXTERNAL MODULE: ../../libs/droid/android/src/android/AutoWebViewJs.ts + 1 modules
var AutoWebViewJs = __webpack_require__(45921);
// EXTERNAL MODULE: ../../libs/droid/android/src/android/WebViewJs.ts + 3 modules
var WebViewJs = __webpack_require__(96113);
// EXTERNAL MODULE: ../../libs/droid/android/src/android/components/i18n.ts
var i18n = __webpack_require__(80482);
// EXTERNAL MODULE: ../../libs/droid/android/src/android/components/Manifest.ts
var Manifest = __webpack_require__(73703);
// EXTERNAL MODULE: ../../libs/droid/android/src/android/components/Permission.ts + 2 modules
var Permission = __webpack_require__(16080);
// EXTERNAL MODULE: ../../libs/fanfanlo/src/storage/storage.ts
var storage = __webpack_require__(64487);
// EXTERNAL MODULE: ../../libs/fanfanlo/src/storage/store-utils.ts
var store_utils = __webpack_require__(4887);
;// ../../libs/droid/android/src/android/components/permission-storage.ts

const permissionStorage = store_utils/* storeUtils */.P.namespace('permission-droid/android');

;// ../../libs/droid/android/src/android/components/PermissionAskUi.ts


class PermissionAskUi {
    getCheckBoxValue() {
        let { storageKey } = this.conf;
        if (!storageKey) return undefined;
        const o = permissionStorage.read(storageKey);
        // const o = {hide:false, time:0} //storage.getItem(storageKey) as any;
        let show = true;
        if (o && o.hide === true) {
            let now = Date.now();
            let time = o.time;
            let diff = now - time;
            if (diff < 1000 * 60 * 60 * 24 * 15) {
                show = false;
            }
        }
        return show;
    }
    createDialogInnerHtml() {
        let { text, title, hasCheckBox, checkBoxText, okButtonText, cancelButtonText } = this.conf;
        let ct = hasCheckBox ? '<div style="flex;flex-direction: row"><input id="permissionAskHideCheckBox" type="checkbox" />\n            <span>'.concat(checkBoxText, "</span>\n            </div> ") : '';
        let innerHTML = '<div>\n        <div>\n        <div style="text-align: center">\n        <b>'.concat(title, "</b>\n        </div>\n        <p>").concat(text, "</p>\n        ").concat(ct, '\n        </div>\n        <div style="text-align: right;margin-right: 20px">\n        <button id="permissionAskCancelButton" href="#" style="margin-right: 20px">').concat(cancelButtonText, '</button>\n        <button id="permissionAskOkButton">').concat(okButtonText, "</button></div>\n        </div>");
        return innerHTML;
    }
    initDialog() {
        let checkBoxValue = this.getCheckBoxValue();
        if (checkBoxValue === false) {
            this.callAsk();
            this.exit();
            return;
        }
        var dialog = document.createElement("dialog");
        this.dialog = dialog;
        dialog.innerHTML = this.createDialogInnerHtml();
        document.body.appendChild(dialog);
        this.initCloseButton();
        this.initOkButton();
        dialog.showModal();
    }
    initCloseButton() {
        let closeBtn = document.getElementById("permissionAskCancelButton");
        if (closeBtn) {
            closeBtn.onclick = ()=>{
                this.closeDialog();
            };
        }
    }
    initOkButton() {
        let okBtn = document.getElementById("permissionAskOkButton");
        console.log('oooooooooke button=', okBtn);
        if (!okBtn) return;
        console.log('oozz', okBtn, this);
        // okBtn.addEventListener('click', ()=>{
        //     console.log('ffffffffffffff', this)
        // })
        okBtn.onclick = this.onOkClick.bind(this);
    }
    callAsk() {
        this.permission.callAsk();
    }
    exit() {
        if (this.exited) return;
        this.exited = true;
    }
    closeDialog() {
        this.exit();
        if (!this.dialog) return;
        this.dialog.close();
        document.body.removeChild(this.dialog);
        this.dialog = undefined;
    }
    onOkClick() {
        console.log('ooooooooooookkkkk clickedqqq');
        this.storeCheckValue();
        this.callAsk();
        this.closeDialog();
    }
    onCloseClick() {
        this.closeDialog();
    }
    constructor(){
        this.exited = false;
        this.showDialog = ()=>{
            this.initDialog();
        };
        this.storeCheckValue = ()=>{
            let { hasCheckBox, storageKey } = this.conf;
            if (!hasCheckBox) return;
            let input = document.getElementById("permissionAskHideCheckBox");
            let checked = false;
            if (input) {
                checked = input["checked"];
            }
            if (checked) {
                let o = {
                    hide: true,
                    time: Date.now()
                };
                storage/* storage */.I.setItem(storageKey, o);
            }
        };
        this.show = (permission)=>{
            this.permission = permission;
            this.showDialog();
        };
    }
}

;// ../../libs/droid/android/src/android/components/floatPermission.ts








// console.trace('float permission')
let trans;
async function floatpermissionInit() {
    trans = await (0,i18n_value_loader/* getI18nT */.r)("droid-android/android/components/content");
}
floatpermissionInit();
function callback(isOk, rejectMsg) {}
function createAskScript(eventType, id) {
    let script = '\nvar bl = com.fanfanlo.lib.permissions.FloatPermission.openPermission(function(bl){\n        webViewJs.callJsEvent("'.concat(eventType, '", bl, "').concat(id, '");\n    });\n    webViewJs.callJsEvent("').concat(eventType, '", bl, "').concat(id, '");\n');
    const conf = {
        forceStopTime: 0,
        onlyRunSingle: true,
        stopPrevIfOnlyRunSingle: true,
        injects: [
            [
                "webViewJs"
            ]
        ],
        script
    };
    return AutoWebViewJs/* AutoWebViewJs */.w6.confToScript(conf);
}
function createPermissionConf(askUi, eventType, id) {
    let conf = {
        askUi: askUi,
        callback,
        permissionId: 0,
        scripts: {
            ask: {
                script: createAskScript(eventType, id),
                isRunner: true
            },
            check: {
                script: "var bl = com.fanfanlo.lib.permissions.FloatPermission.hasPermission();\n bl;",
                isRunner: false
            }
        },
        listenResume: false
    };
    return conf;
}
function createAskUi() {
    const t = (0,i18n/* getTrans */.j)();
    let conf = {
        cancelButtonText: t("floatPermission.cancel"),
        checkBoxText: t("floatPermission.checkBoxText"),
        hasCheckBox: true,
        okButtonText: t("floatPermission.ok"),
        // storageKey: storageKeys.permissions.float.showAsk,
        storageKey: 'storageKeys.permissions.float.showAsk',
        text: t("floatPermission.content"),
        title: t("floatPermission.title")
    };
    let askUi = new PermissionAskUi();
    askUi.conf = conf;
    return askUi;
}
function listenAskBackEvent(eventType, permission) {
    let print = new Log/* Log */.tG(false, "fn-listenAskBackEvent").print;
    const index = WebViewJs/* WebViewJs */.L.instance.shellListen(androidDispatchers/* androidDispatchers */.m.webViewJs.name, eventType, eventType, true, onBack);
    print("index is", index);
    function onBack(data) {
        print("fn-onBack result is", data);
    }
    document.addEventListener(documentUtils/* documentEventTypeDocumentIsShow */.oj, onDocumentShow);
    function onDocumentShow() {
        document.removeEventListener(documentUtils/* documentEventTypeDocumentIsShow */.oj, onDocumentShow);
        let res = WebViewJs/* WebViewJs */.L.instance.shellRemoveListen(androidDispatchers/* androidDispatchers */.m.webViewJs.name, index);
        permission.askComplete();
        print("android listener removeListen", res);
    }
}
function createFloatPermission() {
    let askUi = createAskUi();
    let id = Date.now().toString();
    let eventType = "onFloatPermissionSettingResult".concat(id);
    let permissionConf = createPermissionConf(askUi, eventType, id);
    let floatPermission = new FloatPermission();
    floatPermission.conf = permissionConf;
    return floatPermission;
}
class FloatPermission extends Permission/* Permission */.a {
    ask() {
        let id = Date.now().toString();
        let eventType = "onFloatPermissionSettingResult".concat(id);
        this.conf.scripts.ask.script = createAskScript(eventType, id);
        listenAskBackEvent(eventType, this);
        let res = super.ask();
        this.dispatchMayUpdatedEvent(undefined, undefined);
    }
    constructor(){
        super();
        this.androidPermissionList = [
            Manifest/* Manifest */._8.Permission.SYSTEM_ALERT_WINDOW
        ];
    }
}

;// ../../libs/droid/android/src/android/components/A11yPermission.ts





// import { storageKeys } from "@droid/data";
/**
 * ask back data
 * class A11yServiceLiveInfo {
 *     var hasPermission = false
 *     var hasService = false
 *     var isAlive = false
 *     var pingTime = 0L
 *     var test = "abc"
 * }
 */ function A11yPermission_callback(isOk, rejectMsg) {}
function A11yPermission_createPermissionConf(askUi) {
    let conf = {
        askUi: askUi,
        callback: A11yPermission_callback,
        permissionId: 0,
        scripts: {
            ask: {
                script: "",
                isRunner: false
            },
            check: {
                script: "",
                isRunner: false
            }
        },
        listenResume: true
    };
    return conf;
}
function A11yPermission_createAskUi() {
    const t = (0,i18n/* getTrans */.j)();
    let conf = {
        cancelButtonText: t("A11yPermission.cancel"),
        checkBoxText: t("A11yPermission.checkBoxText"),
        hasCheckBox: true,
        okButtonText: t("A11yPermission.ok"),
        // storageKey: storageKeys.permissions.a11y.showAsk,
        storageKey: 'storageKeys.permissions.a11y.showAsk',
        text: t("A11yPermission.content"),
        title: t("A11yPermission.title")
    };
    let askUi = new PermissionAskUi();
    askUi.conf = conf;
    return askUi;
}
function createA11yPermission() {
    let askUi = A11yPermission_createAskUi();
    let permissionConf = A11yPermission_createPermissionConf(askUi);
    let permission = new A11yPermission();
    permission.conf = permissionConf;
    return permission;
}
class A11yPermission extends Permission/* Permission */.a {
    runCheck() {
        let { print, error, warn, logger } = this.logger.sub(false, "fn_ask");
        let res = AutoWebViewJs/* autoWebViewJs */.yx.onCallGetA11yServiceLiveInfo();
        let { errMsg, javaResultData: data } = res;
        if (errMsg) {
            error(errMsg);
            error(errMsg);
            return undefined;
        }
        print("data2 is", res);
        // print("data3 is", res?.hasPermission);
        return data === null || data === void 0 ? void 0 : data.hasPermission;
    }
    ask() {
        AutoWebViewJs/* autoWebViewJs */.yx.onCallOpenA11yPermission();
    }
    constructor(){
        super();
        this.androidPermissionList = [
            Manifest/* Manifest */._8.Permission.BIND_ACCESSIBILITY_SERVICE
        ];
    }
}

// EXTERNAL MODULE: ../../libs/droid/android/src/android/components/PermissionGroup.ts
var PermissionGroup = __webpack_require__(70168);
;// ../../libs/droid/android/src/android/components/permissionGroupCreator.ts




const P = Manifest/* Manifest */._8.Permission;
const map = {
    [P.BIND_ACCESSIBILITY_SERVICE]: createA11yPermission,
    [P.SYSTEM_ALERT_WINDOW]: createFloatPermission
};
function createFloatA11yPermissionGroup() {
    return createPermissionsGroup(P.SYSTEM_ALERT_WINDOW, P.BIND_ACCESSIBILITY_SERVICE);
}
function createPermissionsGroup() {
    for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++){
        args[_key] = arguments[_key];
    }
    let list = [];
    for(let i = 0; i < args.length; i++){
        let name = args[i];
        let f = map[name];
        if (!f) {
            throw new Error("no permission registed " + name);
        }
        list.push(f());
    }
    let group = new PermissionGroup/* PermissionGroup */.v(list);
    return group;
}
async function runPermissionGroup() {
    for(var _len = arguments.length, permissions = new Array(_len), _key = 0; _key < _len; _key++){
        permissions[_key] = arguments[_key];
    }
    return new Promise((resolve, reject)=>{
        let group = createPermissionsGroup(...permissions);
        group.addEventListener(PermissionGroup/* PermissionGroup */.v.eventComplete, ()=>{
            console.log('runPermissionGroup_fn in Promise group=', group, 'permissions=', permissions, 'isSuccess=', group.isSuccess);
            if (group.isSuccess) {
                resolve(group);
            } else {
                reject(group);
            }
        });
        group.run();
    });
}


/***/ }),

/***/ 59647:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Q: () => (/* binding */ EventDispatcher)
/* harmony export */ });
class EventDispatcher {
    addDomainEventListener(domain, type, cb, index) {
        let _domain = this.listenDomainMap.get(domain);
        if (!_domain) {
            _domain = new Map();
            this.listenDomainMap.set(domain, _domain);
        }
        let listeners = _domain.get(type);
        if (!listeners) {
            listeners = [];
            _domain.set(type, listeners);
        }
        if (listeners.indexOf(cb) == -1) listeners.push(cb);
        this.addEventListener(type, cb, index);
    }
    addDomainOnceListener(domain, type, cb, index) {
        this.addOnceListener(type, cb, index, domain);
    }
    addEventListener(type, cb, index) {
        if (type === '') {
            try {
                throw new Error('addDomainEventListener error no type');
            } catch (e) {
                console.log('EventDispatcher2', 'addDomainEventListener', 'err', type, e);
            }
        }
        if (typeof cb != 'function') {
            try {
                throw new Error('addDomainEventListener error no cb');
            } catch (e) {
                console.log('EventDispatcher2', 'addDomainEventListener', 'err', cb, e);
            }
        }
        let listeners = this.listenMap.get(type);
        if (!listeners) {
            listeners = [];
            this.listenMap.set(type, listeners);
        }
        const _index = listeners.indexOf(cb);
        if (_index > -1) listeners.splice(_index, 1);
        if (index == undefined || index < 0) index = listeners.length;
        index = Math.max(0, Math.min(index, listeners.length));
        listeners.splice(index, 0, cb);
    }
    addEventListenerOnce(type, cb, index) {
        return this.addOnceListener(type, cb, index, undefined);
    }
    onceListenerCb(type, onEvent, domain) {
        // eslint-disable-next-line @typescript-eslint/no-this-alias
        const that = this;
        return (function() {
            for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++){
                args[_key] = arguments[_key];
            }
            // onEvent(event);
            if (typeof onEvent === 'function') {
                onEvent(...args);
            } else {
                console.error(onEvent);
                console.log(...args);
                throw new Error('onEvent not a function');
            }
            // eslint-disable-next-line prefer-spread,@typescript-eslint/ban-types
            // (onEvent as Function).apply(null, args)
            // const listeners = that.onceListeners[type];
            const listeners = that.onceListeners.get(type);
            if (!listeners) return;
            if (domain) that.removeDomainEventListener(domain, type, listeners.get(onEvent));
            else that.removeEventListener(type, listeners.get(onEvent));
        }).bind(this);
    }
    addOnceListener(type, onEvent, index, domain) {
        // let listeners = this.onceListeners[type];
        let listeners = this.onceListeners.get(type);
        if (!listeners) {
            listeners = new Map();
            this.onceListeners.set(type, listeners);
        }
        const fn = this.onceListenerCb(type, onEvent, domain);
        listeners.set(onEvent, fn);
        domain ? this.addDomainEventListener(domain, type, fn, index) : this.addEventListener(type, fn, index);
        return fn;
    }
    dispatchArgs(type) {
        for(var _len = arguments.length, rest = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++){
            rest[_key - 1] = arguments[_key];
        }
        const listeners = this.listenMap.get(type);
        if (!listeners) return false;
        for(let i = 0, len = listeners.length; i < len; i++){
            listeners[i].apply(null, rest);
        }
        return true;
    }
    dispatchEvent(event) {
        if (!event || !event.type) return true;
        const listeners = this.listenMap.get(event.type);
        if (!listeners) {
            return false;
        }
        event[event._target] = this;
        for(let i = 0, len = listeners.length; i < len; i++){
            if (event.canceled) return false;
            try {
                listeners[i](event);
            } catch (e) {
                console.log('EventDispatcher2', 'dispatchEvent', 'err', e);
                console.log('event is', event);
            }
        }
        return true;
    }
    removeDomain(domain) {
        const domainMap = this.listenDomainMap.get(domain);
        if (!domainMap) return false;
        for(const type in domainMap){
            var _domainMap_get;
            (_domainMap_get = domainMap.get(type)) === null || _domainMap_get === void 0 ? void 0 : _domainMap_get.forEach((cb)=>{
                try {
                    this.removeEventListener(type, cb);
                } catch (e) {
                    console.log('eventdispatcher2', 'removedomain', 'err', e);
                }
            }, this);
        }
        this.listenDomainMap.delete(domain);
        return true;
    }
    removeDomainEventListener(domain, type, cb) {
        const domainMap = this.listenDomainMap.get(domain);
        if (!domainMap) return false;
        const listeners = domainMap.get(type);
        if (!listeners) return false;
        const index = listeners.indexOf(cb);
        if (index == -1) return false;
        listeners.splice(index, 1);
        return this.removeEventListener(type, cb);
    }
    removeEventListener(type, cb) {
        const listeners = this.listenMap.get(type);
        if (!listeners) return false;
        const index = listeners.indexOf(cb);
        if (index == -1) {
            return false;
        } else {
            listeners.splice(index, 1);
            return true;
        }
    }
    willTrigger(type) {
        const l = this.listenMap.get(type);
        return !l || l.length == 0 ? false : true;
    // return this.listenMap.get(type) !== undefined && this.listenMap.get(type)?.length > 0;
    }
    constructor(){
        this.listenDomainMap = new Map();
        this.listenMap = new Map();
        this.onceListeners = new Map();
    }
}


/***/ }),

/***/ 64558:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   m: () => (/* binding */ androidDispatchers)
/* harmony export */ });
const androidDispatchers = {
    WebViewJsDispatcher: {
        name: "WebViewJsDispatcher",
        comment: "全局单例类"
    },
    Window: {
        name: "Window",
        comment: "窗口类单例，可以用来侦听窗口的dismiss事件"
    },
    webViewJs: {
        name: "webViewJs",
        comment: "当前窗口被注入的android webviewjs"
    }
};


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

/***/ 67816:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  P: () => (/* binding */ DataEvent)
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/lodash.js
var lodash = __webpack_require__(63624);
var lodash_default = /*#__PURE__*/__webpack_require__.n(lodash);
;// ../../libs/fanfanlo/src/events/Event.ts

class Event {
    get target() {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        return this[this._target];
    }
    toString() {
        const res = {};
        lodash_default().each(Object.keys(this), (key)=>{
            if (key === 'data') {
            // console.log('key is ', key, this[key])
            }
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            res[key] = this[key];
        });
        return res;
    }
    constructor(type, cancelable = false){
        this._target = "Event.target";
        this.type = type;
        this.cancelable = cancelable;
        this.canceled = false;
    }
}

;// ../../libs/fanfanlo/src/events/DataEvent.ts

class DataEvent extends Event {
    constructor(type, data, cancelable = false){
        super(type, cancelable);
        this.data = data;
    // this[this._target] = null;
    }
}


/***/ }),

/***/ 70168:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   v: () => (/* binding */ PermissionGroup)
/* harmony export */ });
/* harmony import */ var _fanfanlo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(59647);
/* harmony import */ var _fanfanlo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(48891);
/* harmony import */ var _fanfanlo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(67816);
/* harmony import */ var _Permission__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(16080);


class PermissionGroup extends _fanfanlo__WEBPACK_IMPORTED_MODULE_0__/* .EventDispatcher */ .Q {
    get isSuccess() {
        let { print, error, warn, logger } = this.logger.sub(false, "fn_isSuccess");
        for(let i = 0; i < this.permissions.length; i++){
            let p = this.permissions[i];
            print("permission is ".concat(p.constructor.name, ", success is ").concat(p.isSuccess));
            if (!p.isSuccess) return false;
        }
        return true;
    }
    addCallback(callback) {
        this.callback = callback;
        return this;
    }
    constructor(permissions = []){
        super(), this.index = -1, this.logger = new _fanfanlo__WEBPACK_IMPORTED_MODULE_1__/* .Log */ .tG(false, this.constructor.name), this.run = ()=>{
            this.checkNext();
        }, this.runPermission = ()=>{
            console.log('runPermission_fn', 'index=', this.index, 'permissions.length=', this.permissions.length);
            if (this.permissions.length < this.index) {
                throw new Error("permission index out of bounds");
            }
            let p = this.permissions[this.index];
            p.addDomainEventListener(this, _Permission__WEBPACK_IMPORTED_MODULE_2__/* .Permission */ .a.eventComplete, this.onPermissionComplete);
            p.checkOrAsk();
        }, this.onPermissionComplete = (e)=>{
            e.target.removeDomain(this);
            this.checkNext();
        }, this.checkNext = ()=>{
            console.log('checkNext_fn', 'index=', this.index, 'permissions.length=', this.permissions.length);
            this.index++;
            if (this.index >= this.permissions.length) {
                return this.dispatchComplete();
            }
            this.runPermission();
        }, this.dispatchComplete = ()=>{
            var _this_callback, _this;
            console.log('dispatchComplete_fn', 'isSuccess=', this.isSuccess, 'index=', this.index);
            this.dispatchEvent(new _fanfanlo__WEBPACK_IMPORTED_MODULE_3__/* .DataEvent */ .P(PermissionGroup.eventComplete));
            (_this_callback = (_this = this).callback) === null || _this_callback === void 0 ? void 0 : _this_callback.call(_this, this, this.isSuccess);
        }, this.exit = ()=>{
            for(let i = 0; i < this.permissions.length; i++){
                this.permissions[i].removeDomain(this);
            }
        };
        // this.logger = Log.createCountedLogger(false, this.constructor.name)
        this.permissions = permissions;
    }
}
PermissionGroup.eventComplete = "complete";


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


/***/ })

}]);
//# sourceMappingURL=8813-9dfd51ed9ad980e7.js.map