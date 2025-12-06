(self["webpackChunk_N_E"] = self["webpackChunk_N_E"] || []).push([[6608],{

/***/ 2995:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony import */ var _IEventDispatcher__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(29229);
/* harmony import */ var _IEventDispatcher__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_IEventDispatcher__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (checked) */ if(__webpack_require__.o(_IEventDispatcher__WEBPACK_IMPORTED_MODULE_0__, "storeUtils")) __webpack_require__.d(__webpack_exports__, { storeUtils: function() { return _IEventDispatcher__WEBPACK_IMPORTED_MODULE_0__.storeUtils; } });






 //# sourceMappingURL=index.js.map


/***/ }),

/***/ 5351:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   R: () => (/* binding */ marketsDevScriptLib)
/* harmony export */ });
/* harmony import */ var _droid_android__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5123);
/* harmony import */ var _fanfanlo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(88518);
/* harmony import */ var _fanfanlo__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4887);
/* harmony import */ var _market_lib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(15899);
/* harmony import */ var _market_dev_socket__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(79696);




// 注意marketDevLibData的操作是由devLibInfo来做的
// 一定保持它俩操作的对象是同一个。
const marketDevLibData = (0,_fanfanlo__WEBPACK_IMPORTED_MODULE_1__/* .toProxy */ .I$)({});
let devLibInfo;
// = storeUtils.getNamespaceStoreWithData('devLibInfo', {defData:{}, forceReset:false});
function getMarketScriptDataNsPrefix() {
    return 'market-script-data';
}
function createMarketScriptDataNsPath(ns) {
    return "".concat(getMarketScriptDataNsPrefix(), "/").concat(ns);
}
async function writeNsAllFiles(ns, files) {
    const nsPath = createMarketScriptDataNsPath(ns);
    const oldFiles = _droid_android__WEBPACK_IMPORTED_MODULE_2__/* .autoJsStoreUtils */ .b.read(nsPath) || [];
    for (const name of Object.keys(files)){
        const index = oldFiles.indexOf(name);
        if (index > -1) {
            oldFiles.splice(index, 1);
        }
        const content = files[name];
        _droid_android__WEBPACK_IMPORTED_MODULE_2__/* .autoJsStoreUtils */ .b.write("".concat(nsPath, "/").concat(name), content);
    }
    for (const name of oldFiles){
        removeFile("".concat(nsPath, "/").concat(name));
    }
}
function writeFile(name, content) {}
function readNsAllFiles(ns) {}
function readFile(name) {}
function removeFile(name) {}
function getAllMarkets() {}
function listenDev() {
    _market_dev_socket__WEBPACK_IMPORTED_MODULE_0__/* .marketsDevSocket */ .O.dispatcher.addListener(_market_lib__WEBPACK_IMPORTED_MODULE_3__/* .IMarketDevConnectEventType */ .Dl.getAllScripts, onGetAllScript);
    _market_dev_socket__WEBPACK_IMPORTED_MODULE_0__/* .marketsDevSocket */ .O.dispatcher.addListener(_market_lib__WEBPACK_IMPORTED_MODULE_3__/* .IMarketDevServerEventType */ .GC.update, onFileUpdate);
}
function onGetAllScript(data) {
    // console.log('onGetAllScript=2', data)
    // console.log('devLibInfo.data=', devLibInfo.data)
    devLibInfo.data.allMarketLibData = data;
    // 转为已经代理过的对象
    marketDevLibData.allMarketLibData = devLibInfo.data.allMarketLibData;
// console.log('from onGetAllScript look look id', objectCountUtils.getObjectCount(devLibInfo.data.allMarketLibData.resources))
}
function onFileUpdate(data) {
    if (data.client.resourceType == _market_lib__WEBPACK_IMPORTED_MODULE_3__/* .WatchResourceType */ .um.Html) {
        if (!devLibInfo.data.allMarketLibData) return;
        for (const html of devLibInfo.data.allMarketLibData.htmls){
            if (html.client.path == data.client.path) {
                html.content = data.content;
                return;
            }
        }
    } else if (data.client.resourceType == _market_lib__WEBPACK_IMPORTED_MODULE_3__/* .WatchResourceType */ .um.Js) {
        if (!devLibInfo.data.allMarketLibData) return;
        for(let index = 0; index < devLibInfo.data.allMarketLibData.resources.length; index++){
            const script = devLibInfo.data.allMarketLibData.resources[index];
            if (script.client.path == data.client.path) {
                devLibInfo.data.allMarketLibData.resources[index] = data;
                console.log('market script dev scripts update script', data);
                // devLibInfo.data.allMarketLibData.resources = [...devLibInfo.data.allMarketLibData.resources];
                // console.log('update data', data);
                // console.log('look look id', objectCountUtils.getObjectCount(devLibInfo.data.allMarketLibData.resources), devLibInfo.data.allMarketLibData.resources)
                return;
            }
        }
    } else {
    // unknown resource type
    }
}
let isInitialized = false;
async function init() {
    if (isInitialized) {
        return;
    }
    isInitialized = true;
    listenDev();
    devLibInfo = await _fanfanlo__WEBPACK_IMPORTED_MODULE_4__/* .storeUtils */ .P.getNamespaceStoreWithData('devLibInfo', {
        defData: {},
        forceReset: false
    });
    marketDevLibData.allMarketLibData = devLibInfo.data.allMarketLibData;
}
const marketsDevScriptLib = {
    writeFile,
    readFile,
    writeNsAllFiles,
    readNsAllFiles,
    getAllMarkets,
    init,
    marketDevLibData
};


/***/ }),

/***/ 14069:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HQ: () => (/* binding */ getSocketConnectStatusEnumI18n),
/* harmony export */   NC: () => (/* binding */ isValidWebSocketURL),
/* harmony export */   du: () => (/* binding */ SocketConnectStatusEnum)
/* harmony export */ });
/* harmony import */ var validator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(40018);
/* harmony import */ var validator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(validator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(62095);


function isValidWebSocketURL(url) {
    if (!url) return false;
    return validator__WEBPACK_IMPORTED_MODULE_0___default().isURL(url, {
        protocols: [
            'ws',
            'wss'
        ],
        require_protocol: true
    });
}
var SocketConnectStatusEnum = /*#__PURE__*/ function(SocketConnectStatusEnum) {
    SocketConnectStatusEnum["connecting"] = "connecting";
    SocketConnectStatusEnum["connected"] = "connected";
    SocketConnectStatusEnum["disconnecting"] = "disconnecting";
    SocketConnectStatusEnum["disconnected"] = "disconnected";
    SocketConnectStatusEnum["waitRetry"] = "waitRetry";
    return SocketConnectStatusEnum;
}({});
async function getSocketConnectStatusEnumI18n(status) {
    return await (0,_i18n__WEBPACK_IMPORTED_MODULE_1__/* .loadI18nValue */ .y)('fanfanlo/utils/socket/content', "status.".concat(status));
}


/***/ }),

/***/ 15804:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   $: () => (/* binding */ translationGlobalConfig)
/* harmony export */ });
/* harmony import */ var _watcher__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(88518);
/* harmony import */ var _log__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(48891);


// 文件级别log
const fileLog = new _log__WEBPACK_IMPORTED_MODULE_0__/* .Log */ .tG(false, 'TranslationGlobalData_file');
// fileLog.pause = true;
/**
 * 全局翻译配置
 * 使用toProxy创建响应式对象
 */ const translationGlobalConfig = (0,_watcher__WEBPACK_IMPORTED_MODULE_1__/* .toProxy */ .I$)({
    auto: true
});
// 初始化log
const initLog = fileLog.sub(false, 'init_fn');
// initLog.pause = true;
initLog.log('translationGlobalConfig created', translationGlobalConfig);


/***/ }),

/***/ 15899:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Dl: () => (/* binding */ IMarketDevConnectEventType),
/* harmony export */   GC: () => (/* binding */ IMarketDevServerEventType),
/* harmony export */   um: () => (/* binding */ WatchResourceType)
/* harmony export */ });
/* unused harmony exports ScriptType, IMarketDevClientEmitEventType */
var ScriptType = /*#__PURE__*/ function(ScriptType) {
    // 只有一个脚本执行文件，它只在脚本列表里显示。
    // 如果要修改或者配置参数，它可以嵌入到自己的代码里
    // 或者提供新的页面路径，用router的方式打开
    // 例如router.go({url:'/script-setting', script:'function(){//code is here}', pagePath:'/all-script-setting/#your-namespace/script/script001'})
    // all-script-setting所有第三方统一页面
    // your-namespace 第三方自己的命名空间
    // url 第三方自己的js文件url，它和script二选一，优先script。
    // script 第三方自己纯代码的脚本
    // url可以设置为实时更新版本，script可以作为stable版本使用。
    // script001 第三方自己的脚本名称
    // pagePath可以挂载到你指定的路径下
    ScriptType["Script"] = "script";
    ScriptType["Market"] = "market";
    return ScriptType;
}({});
var WatchResourceType = /*#__PURE__*/ function(WatchResourceType) {
    // 这是一个js文件，加载后直接套在iframe里用即可
    WatchResourceType["Js"] = "js";
    // 这是一个html文件，直接当html加载到iframe里即可.
    WatchResourceType["Html"] = "html";
    return WatchResourceType;
}({});
var IMarketDevConnectEventType = /*#__PURE__*/ function(IMarketDevConnectEventType) {
    IMarketDevConnectEventType["getAllScripts"] = "getAllScripts";
    return IMarketDevConnectEventType;
}({});
// client用socket向server发送的消息，也就是安卓端或者是安卓端的网页向server发送的消息
var IMarketDevClientEmitEventType = /*#__PURE__*/ function(IMarketDevClientEmitEventType) {
    IMarketDevClientEmitEventType["init"] = "init";
    return IMarketDevClientEmitEventType;
}({});
// server用socket向安卓端发送的消息（本地调试也可以认为是向安卓的网页发送消息）
var IMarketDevServerEventType = /*#__PURE__*/ function(IMarketDevServerEventType) {
    IMarketDevServerEventType["update"] = "update";
    return IMarketDevServerEventType;
}({});


/***/ }),

/***/ 17819:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony import */ var _global_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(88664);
/* harmony import */ var _global_index__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_global_index__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (checked) */ if(__webpack_require__.o(_global_index__WEBPACK_IMPORTED_MODULE_0__, "storeUtils")) __webpack_require__.d(__webpack_exports__, { storeUtils: function() { return _global_index__WEBPACK_IMPORTED_MODULE_0__.storeUtils; } });




 //# sourceMappingURL=index.js.map


/***/ }),

/***/ 20623:
/***/ (() => {

"use strict";
 //# sourceMappingURL=index.js.map


/***/ }),

/***/ 28995:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   storeUtils: () => (/* reexport safe */ _storage_index__WEBPACK_IMPORTED_MODULE_5__.storeUtils)
/* harmony export */ });
/* harmony import */ var _events__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2995);
/* harmony reexport (checked) */ if(__webpack_require__.o(_events__WEBPACK_IMPORTED_MODULE_0__, "storeUtils")) __webpack_require__.d(__webpack_exports__, { storeUtils: function() { return _events__WEBPACK_IMPORTED_MODULE_0__.storeUtils; } });
/* harmony import */ var _react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(17819);
/* harmony reexport (checked) */ if(__webpack_require__.o(_react__WEBPACK_IMPORTED_MODULE_1__, "storeUtils")) __webpack_require__.d(__webpack_exports__, { storeUtils: function() { return _react__WEBPACK_IMPORTED_MODULE_1__.storeUtils; } });
/* harmony import */ var _ts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(20623);
/* harmony import */ var _ts__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_ts__WEBPACK_IMPORTED_MODULE_2__);
/* harmony reexport (checked) */ if(__webpack_require__.o(_ts__WEBPACK_IMPORTED_MODULE_2__, "storeUtils")) __webpack_require__.d(__webpack_exports__, { storeUtils: function() { return _ts__WEBPACK_IMPORTED_MODULE_2__.storeUtils; } });
/* harmony import */ var _ts_global_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(69276);
/* harmony import */ var _ts_global_index__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_ts_global_index__WEBPACK_IMPORTED_MODULE_3__);
/* harmony reexport (checked) */ if(__webpack_require__.o(_ts_global_index__WEBPACK_IMPORTED_MODULE_3__, "storeUtils")) __webpack_require__.d(__webpack_exports__, { storeUtils: function() { return _ts_global_index__WEBPACK_IMPORTED_MODULE_3__.storeUtils; } });
/* harmony import */ var _i18n_index__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(31114);
/* harmony reexport (checked) */ if(__webpack_require__.o(_i18n_index__WEBPACK_IMPORTED_MODULE_4__, "storeUtils")) __webpack_require__.d(__webpack_exports__, { storeUtils: function() { return _i18n_index__WEBPACK_IMPORTED_MODULE_4__.storeUtils; } });
/* harmony import */ var _storage_index__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(44690);




















 //# sourceMappingURL=index.js.map


/***/ }),

/***/ 29229:
/***/ (() => {

"use strict";
 //# sourceMappingURL=IEventDispatcher.js.map


/***/ }),

/***/ 29272:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   D: () => (/* binding */ getMarketDevSocketSettingData)
/* harmony export */ });
/* harmony import */ var _fanfanlo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4887);

async function createDefSocketSettingData() {
    const data = {
        keepConnect: false,
        url: ""
    };
    const res = await _fanfanlo__WEBPACK_IMPORTED_MODULE_0__/* .storeUtils */ .P.getNamespaceStoreWithData('market-dev-socket-setting', {
        defData: data
    });
    return res.data;
}
async function getMarketDevSocketSettingData() {
    return await createDefSocketSettingData();
}


/***/ }),

/***/ 31114:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony import */ var _II18nValueConf__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(87332);
/* harmony import */ var _II18nValueConf__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_II18nValueConf__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (checked) */ if(__webpack_require__.o(_II18nValueConf__WEBPACK_IMPORTED_MODULE_0__, "storeUtils")) __webpack_require__.d(__webpack_exports__, { storeUtils: function() { return _II18nValueConf__WEBPACK_IMPORTED_MODULE_0__.storeUtils; } });






 //# sourceMappingURL=index.js.map


/***/ }),

/***/ 32534:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   j: () => (/* binding */ NavBar)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(94513);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(75640);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _fanfanlo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(50279);
/* harmony import */ var _mui_icons_material_Home__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(30319);
/* harmony import */ var _mui_icons_material_Settings__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(52089);
/* harmony import */ var _mui_icons_material_Create__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(58696);
/* harmony import */ var _barrel_optimize_names_BottomNavigation_BottomNavigationAction_mui_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(76242);
/* harmony import */ var _barrel_optimize_names_BottomNavigation_BottomNavigationAction_mui_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(366);







function NavBar() {
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();
    const { pathname } = router;
    const { t } = (0,_fanfanlo__WEBPACK_IMPORTED_MODULE_2__/* .useTranslation */ .Bd)('homepage/components/navbar/content');
    const tabInfoList = [
        {
            label: t('NavBar.home'),
            value: '/',
            icon: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_icons_material_Home__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A, {})
        },
        {
            label: t('NavBar.create'),
            value: '/script-creator',
            icon: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_icons_material_Create__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A, {})
        },
        // { label: t('content.market'), value: '/market', icon: <StorefrontIcon /> },
        {
            label: t('NavBar.settings'),
            value: '/settings',
            icon: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_icons_material_Settings__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .A, {})
        }
    ];
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_barrel_optimize_names_BottomNavigation_BottomNavigationAction_mui_material__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .A, {
        showLabels: true,
        value: pathname,
        children: tabInfoList.map((e)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_barrel_optimize_names_BottomNavigation_BottomNavigationAction_mui_material__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .A, {
                label: e.label,
                icon: e.icon,
                "data-id": "tabbar-".concat(e.value),
                className: pathname === e.value ? 'Mui-selected' : '',
                onClick: ()=>{
                    if (pathname === e.value) return;
                    router.push(e.value);
                }
            }, e.value))
    });
}


/***/ }),

/***/ 33035:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TestScript: () => (/* binding */ TestScript),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(94513);
/* harmony import */ var _barrel_optimize_names_Button_mui_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(28669);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(49595);


// import { buildScript, printScript1 } from "@scripts/script1";

function parseUsedLib(s) {
    let res = [];
    let reg = /javaLib\[\"(.*)\"\]/g;
    let r = s.matchAll(reg);
    for (let a of r){
        res.push(a[1]);
    }
    return res;
}
let beforeJavaLibCreateScript = "\nlet isScriptRunnable = true;\nlet scriptExitListeners = [];\nfunction addScriptExitListener(f){\n    removeScriptExitListener(f);\n    scriptExitListeners.push(f);\n}\nfunction removeScriptExitListener(f){\n    let index = scriptExitListeners.indexOf(f);\n    if(index == -1)return;\n    scriptExitListeners.splice(index, 1);\n}\nfunction onJavaCallTerminate(){\n    callScriptExit();\n    return true;\n}\nfunction callJavaExit(){\n\n}\nfunction jsCallComplete(){\n    callScriptExit();\n    callJavaExit();\n}\n\nfunction jsCallFailed(){\n    callScriptExit();\n    callJavaExit();\n}\nfunction callScriptExit(){\n    isScriptRunnable = false;\n    let res = \"\"\n    console.log('before call exit', scriptExitListeners.length);\n    scriptExitListeners.forEach((f)=>{f()});\n    console.log('after call exit');\n    return res;\n}\n    ";
function TestScript() {
    async function onClick() {
        // printScript1('hello script1')
        runProjectScriptDemo();
    }
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_barrel_optimize_names_Button_mui_material__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A, {
            onClick: onClick,
            children: "script"
        })
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TestScript);
async function runProjectScriptDemo() {
    const res = await axios__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A.get('/scripts/projectScript07.js');
    const scriptString = res.data;
    let dependencies = parseUsedLib(scriptString).concat(parseUsedLib(beforeJavaLibCreateScript));
// const conf = buildScript({
//     script: scriptString, injects: ["console", "a11yModel"],
//     optimizationLevel: -1, printScript: false,
//     scriptId: "demo.project"
// }, dependencies, beforeJavaLibCreateScript)
// const s = AutoWebViewJs.confToScript(conf);
// console.log('ssssssssssss', s)
// AutoWebViewJs.instance.callScriptRunner(s);
// console.log('code', code)
}


/***/ }),

/***/ 38532:
/***/ ((module) => {

// extracted by mini-css-extract-plugin
module.exports = {"text-recognition-control":"TextRecognitionControl_text-recognition-control__a9DGY","control-section":"TextRecognitionControl_control-section__Rqe8j","status-display":"TextRecognitionControl_status-display__9hRvp","status-indicator":"TextRecognitionControl_status-indicator__wNRhn","running":"TextRecognitionControl_running__EWRBJ","stopped":"TextRecognitionControl_stopped__lYdN4","status-message":"TextRecognitionControl_status-message__4AdzW","config-section":"TextRecognitionControl_config-section__5AKTo","config-type":"TextRecognitionControl_config-type__lgaTV","regex-config":"TextRecognitionControl_regex-config__b0bYu","js-config":"TextRecognitionControl_js-config__BBigv","event-name-config":"TextRecognitionControl_event-name-config__l7Jsg","inputField":"TextRecognitionControl_inputField__fa8Iz","button-group":"TextRecognitionControl_button-group__8lYHd","btn-start":"TextRecognitionControl_btn-start__95KMZ","btn-stop":"TextRecognitionControl_btn-stop__pCrmi","match-result":"TextRecognitionControl_match-result__fXa6f","matched-text":"TextRecognitionControl_matched-text__nPbRD","history-results":"TextRecognitionControl_history-results__KWYo3","results-list":"TextRecognitionControl_results-list__Q29nG","result-item":"TextRecognitionControl_result-item__GlANg","result-text":"TextRecognitionControl_result-text__L5EKC","result-position":"TextRecognitionControl_result-position__KGF7L"};

/***/ }),

/***/ 40175:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  j: () => (/* binding */ TranslationComponent)
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/react@19.1.0/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(94513);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react@19.1.0/node_modules/react/index.js
var react = __webpack_require__(94285);
// EXTERNAL MODULE: ../../libs/fanfanlo/src/translation/TranslationGlobalData.ts
var TranslationGlobalData = __webpack_require__(15804);
// EXTERNAL MODULE: ../../node_modules/.pnpm/google-translate-api-x@10.7.2/node_modules/google-translate-api-x/index.cjs
var google_translate_api_x = __webpack_require__(58143);
var google_translate_api_x_default = /*#__PURE__*/__webpack_require__.n(google_translate_api_x);
// EXTERNAL MODULE: ../../libs/fanfanlo/src/storage/indexed-db-utils.ts
var indexed_db_utils = __webpack_require__(62412);
// EXTERNAL MODULE: ../../libs/fanfanlo/src/log/Log.ts + 1 modules
var Log = __webpack_require__(48891);
;// ../../libs/fanfanlo/src/translation/translationCache.ts


// 文件级别log
const fileLog = new Log/* Log */.tG(false, 'translationCache_file');
// fileLog.pause = true;
const CACHE_NAMESPACE = 'translation_cache';
let cacheStore = null;
/**
 * 初始化缓存
 */ async function initCache() {
    const fnLog = fileLog.sub(false, 'initCache_fn');
    // fnLog.pause = true;
    if (cacheStore) {
        fnLog.log('cache already initialized');
        return cacheStore;
    }
    fnLog.log('initializing cache');
    cacheStore = await indexed_db_utils/* indexedDbUtils */.d.getIndexedDbStore(CACHE_NAMESPACE, {
        defData: {},
        mergeDefData: false
    });
    fnLog.log('cache initialized', cacheStore);
    return cacheStore;
}
/**
 * 生成缓存key
 */ function generateCacheKey(originalText, sourceLang, targetLang) {
    const fnLog = fileLog.sub(false, 'generateCacheKey_fn');
    // fnLog.pause = true;
    // 简单hash函数
    const hash = Array.from(originalText).reduce((hash, char)=>{
        return (hash << 5) - hash + char.charCodeAt(0);
    }, 0);
    const key = "".concat(sourceLang, "_").concat(targetLang, "_").concat(hash);
    fnLog.log('generated cache key', {
        originalText,
        sourceLang,
        targetLang,
        key
    });
    return key;
}
/**
 * 从缓存获取翻译
 */ async function getFromCache(originalText, sourceLang, targetLang) {
    const fnLog = fileLog.sub(false, 'getFromCache_fn');
    // fnLog.pause = true;
    fnLog.log('get from cache', {
        originalText,
        sourceLang,
        targetLang
    });
    const store = await initCache();
    const key = generateCacheKey(originalText, sourceLang, targetLang);
    const cached = store.store.read(key);
    if (cached) {
        fnLog.log('cache hit', cached);
        return cached;
    } else {
        fnLog.log('cache miss');
        return null;
    }
}
/**
 * 保存翻译到缓存
 */ async function saveToCache(originalText, translatedText, sourceLang, targetLang) {
    const fnLog = fileLog.sub(false, 'saveToCache_fn');
    // fnLog.pause = true;
    fnLog.log('save to cache', {
        originalText,
        translatedText,
        sourceLang,
        targetLang
    });
    const store = await initCache();
    const key = generateCacheKey(originalText, sourceLang, targetLang);
    const cacheItem = {
        originalText,
        translatedText,
        sourceLang,
        targetLang,
        timestamp: Date.now()
    };
    store.store.write(key, cacheItem);
    fnLog.log('saved to cache', {
        key,
        cacheItem
    });
}
/**
 * 清空所有缓存
 */ async function clearCache() {
    const fnLog = fileLog.sub(false, 'clearCache_fn');
    // fnLog.pause = true;
    fnLog.log('clearing all cache');
    const store = await initCache();
    store.store.clearAll();
    fnLog.log('cache cleared');
}
const translationCache = {
    getFromCache,
    saveToCache,
    clearCache
};

;// ../../libs/fanfanlo/src/translation/translationService.ts



// 文件级别log
const translationService_fileLog = new Log/* Log */.tG(false, 'translationService_file');
// fileLog.pause = true;
/**
 * 翻译文本
 */ async function translateText(text) {
    let sourceLang = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 'auto', targetLang = arguments.length > 2 ? arguments[2] : void 0, isHtml = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : false;
    const fnLog = translationService_fileLog.sub(false, 'translateText_fn');
    // fnLog.pause = true;
    fnLog.log('translate text start', {
        text,
        sourceLang,
        targetLang,
        isHtml
    });
    // 检查缓存
    const cached = await translationCache.getFromCache(text, sourceLang, targetLang);
    if (cached) {
        fnLog.log('using cached translation', cached);
        return {
            text: cached.translatedText,
            from: cached.sourceLang,
            to: cached.targetLang
        };
    } else {
        fnLog.log('cache miss, calling translation API');
    }
    try {
        var _result_from_language, _result_from;
        // 调用翻译API
        const result = await google_translate_api_x_default()(text, {
            from: sourceLang,
            to: targetLang
        });
        fnLog.log('translation API result', result);
        const translatedText = result.text;
        const detectedSourceLang = ((_result_from = result.from) === null || _result_from === void 0 ? void 0 : (_result_from_language = _result_from.language) === null || _result_from_language === void 0 ? void 0 : _result_from_language.iso) || sourceLang;
        // 保存到缓存
        await translationCache.saveToCache(text, translatedText, detectedSourceLang, targetLang);
        fnLog.log('translation complete', {
            translatedText,
            detectedSourceLang,
            targetLang
        });
        return {
            text: translatedText,
            from: detectedSourceLang,
            to: targetLang
        };
    } catch (error) {
        fnLog.error('translation failed', error);
        throw error;
    }
}
const translationService = {
    translateText
};

// EXTERNAL MODULE: ../../libs/fanfanlo/src/i18n/fanfanloI18n.ts
var fanfanloI18n = __webpack_require__(95414);
// EXTERNAL MODULE: ../../libs/fanfanlo/src/watcher/useProxyWatch.ts
var useProxyWatch = __webpack_require__(45007);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react-i18next@15.6.0_i18next@24.2.3_typescript@5.7.3__react-dom@19.1.0_react@19.1.0__react@19.1.0_typescript@5.7.3/node_modules/react-i18next/dist/es/index.js + 15 modules
var es = __webpack_require__(50279);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/Box/Box.js + 2 modules
var Box = __webpack_require__(6445);
;// ../../libs/fanfanlo/src/translation/TranslationComponent.tsx









// 文件级别log
const TranslationComponent_fileLog = new Log/* Log */.tG(false, 'TranslationComponent_file');
// fileLog.pause = true;
/**
 * 翻译组件
 * - 根据translationGlobalConfig.auto决定是否自动翻译
 * - 点击可切换原文/译文
 * - 支持HTML内容翻译
 */ function TranslationComponent(props) {
    const uiLog = TranslationComponent_fileLog.sub(false, 'TranslationComponent_ui');
    // uiLog.pause = true;
    const { children, sourceLang = 'auto', isHtml = false, className = '' } = props;
    // 监听全局auto配置
    const [auto] = (0,useProxyWatch/* useProxyWatch */.x)(TranslationGlobalData/* translationGlobalConfig */.$, 'auto', TranslationGlobalData/* translationGlobalConfig */.$.auto);
    // 使用i18n
    const { t } = (0,es/* useTranslation */.Bd)('fanfanlo/translation/content');
    // 组件内部状态
    const [originalText, setOriginalText] = (0,react.useState)('');
    const [translatedText, setTranslatedText] = (0,react.useState)('');
    const [showTranslation, setShowTranslation] = (0,react.useState)(false);
    const [isTranslating, setIsTranslating] = (0,react.useState)(false);
    const [error, setError] = (0,react.useState)(null);
    // 提取文本内容
    (0,react.useEffect)(()=>{
        const effectLog = uiLog.sub(false, 'effect_extractText_fn');
        // effectLog.pause = true;
        let textContent = '';
        if (typeof children === 'string') {
            textContent = children;
            effectLog.log('extracted text from string', textContent);
        } else if (/*#__PURE__*/ react.isValidElement(children)) {
            if (isHtml) {
                // 当 isHtml=true 时,将React元素转换为HTML字符串
                textContent = reactElementToHtml(children);
                effectLog.log('converted react element to html', textContent);
            } else {
                // 提取纯文本
                textContent = extractTextFromReactNode(children);
                effectLog.log('extracted text from react element', textContent);
            }
        } else if (Array.isArray(children)) {
            if (isHtml) {
                // 处理数组形式的React元素
                textContent = children.map((child)=>{
                    if (/*#__PURE__*/ react.isValidElement(child)) {
                        return reactElementToHtml(child);
                    } else {
                        return String(child);
                    }
                }).join('');
                effectLog.log('converted react element array to html', textContent);
            } else {
                textContent = children.map((child)=>{
                    if (/*#__PURE__*/ react.isValidElement(child)) {
                        return extractTextFromReactNode(child);
                    } else {
                        return String(child);
                    }
                }).join('');
                effectLog.log('extracted text from array', textContent);
            }
        } else {
            textContent = String(children);
            effectLog.log('converted to string', textContent);
        }
        effectLog.log('final extracted text', textContent);
        setOriginalText(textContent);
    }, [
        children,
        isHtml
    ]);
    // 自动翻译逻辑
    (0,react.useEffect)(()=>{
        const effectLog = uiLog.sub(false, 'effect_autoTranslate_fn');
        // effectLog.pause = true;
        effectLog.log('auto translate check', {
            auto,
            originalText
        });
        if (!auto) {
            effectLog.log('auto is false, reset translation state');
            // 重置翻译状态,恢复显示原文
            setShowTranslation(false);
            setIsTranslating(false);
            setError(null);
            return;
        }
        if (!originalText) {
            effectLog.log('no original text, skip translation');
            return;
        }
        const targetLang = fanfanloI18n/* fanfanloI18n */._.language;
        effectLog.log('target language', targetLang);
        // 如果源语言和目标语言相同,不翻译
        if (sourceLang !== 'auto' && sourceLang === targetLang) {
            effectLog.log('source and target language are the same, skip translation');
            return;
        }
        // 执行翻译
        performTranslation();
        async function performTranslation() {
            const fnLog = effectLog.sub(false, 'performTranslation_fn');
            // fnLog.pause = true;
            fnLog.log('start translation', {
                originalText,
                sourceLang,
                targetLang
            });
            setIsTranslating(true);
            setError(null);
            try {
                const result = await translationService.translateText(originalText, sourceLang, targetLang, isHtml);
                fnLog.log('translation result', result);
                // 如果检测到的源语言和目标语言相同,不显示翻译
                if (result.from === result.to) {
                    fnLog.log('detected source language equals target language, skip translation');
                    setShowTranslation(false);
                } else {
                    setTranslatedText(result.text);
                    setShowTranslation(true);
                }
            } catch (err) {
                fnLog.error('translation error', err);
                setError(err instanceof Error ? err.message : 'Translation failed');
            } finally{
                setIsTranslating(false);
            }
        }
    }, [
        auto,
        originalText,
        sourceLang,
        isHtml
    ]);
    // 点击切换原文/译文
    const handleClick = ()=>{
        const fnLog = uiLog.sub(false, 'handleClick_fn');
        // fnLog.pause = true;
        if (!translatedText) {
            fnLog.log('no translated text, skip toggle');
            return;
        }
        const newShowTranslation = !showTranslation;
        fnLog.log('toggle show translation', {
            from: showTranslation,
            to: newShowTranslation
        });
        setShowTranslation(newShowTranslation);
    };
    // 渲染内容
    const displayText = showTranslation ? translatedText : originalText;
    uiLog.log('render', {
        displayText,
        showTranslation,
        isTranslating,
        error
    });
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.A, {
        className: className,
        onClick: handleClick,
        sx: {
            cursor: translatedText ? 'pointer' : 'default',
            position: 'relative'
        },
        children: [
            isHtml ? /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                dangerouslySetInnerHTML: {
                    __html: displayText
                }
            }) : /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                children: displayText
            }),
            isTranslating && /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                style: {
                    marginLeft: '8px',
                    fontSize: '0.8em',
                    color: '#999'
                },
                children: t('TranslationComponent.translating')
            }),
            error && /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                style: {
                    marginLeft: '8px',
                    fontSize: '0.8em',
                    color: 'red'
                },
                children: t('TranslationComponent.translationFailed')
            })
        ]
    });
}
/**
 * 从React节点提取文本内容
 */ function extractTextFromReactNode(node) {
    const fnLog = TranslationComponent_fileLog.sub(false, 'extractTextFromReactNode_fn');
    // fnLog.pause = true;
    if (typeof node === 'string') {
        return node;
    }
    if (typeof node === 'number') {
        return String(node);
    }
    if (/*#__PURE__*/ react.isValidElement(node)) {
        if (node.props.children) {
            if (Array.isArray(node.props.children)) {
                return node.props.children.map(extractTextFromReactNode).join('');
            } else {
                return extractTextFromReactNode(node.props.children);
            }
        }
    }
    if (Array.isArray(node)) {
        return node.map(extractTextFromReactNode).join('');
    }
    fnLog.log('unknown node type', node);
    return '';
}
/**
 * 将React元素转换为HTML字符串
 */ function reactElementToHtml(element) {
    const fnLog = TranslationComponent_fileLog.sub(false, 'reactElementToHtml_fn');
    // fnLog.pause = true;
    if (!/*#__PURE__*/ react.isValidElement(element)) {
        fnLog.log('not a valid react element');
        return String(element);
    }
    const type = element.type;
    const props = element.props;
    const children = props.children;
    fnLog.log('converting element', {
        type,
        props
    });
    // 处理字符串类型的标签 (如 'div', 'h1', 'p' 等)
    if (typeof type === 'string') {
        const tagName = type;
        const attributes = [];
        // 构建属性
        for (const [key, value] of Object.entries(props)){
            if (key === 'children') {
                continue;
            }
            if (key === 'className') {
                attributes.push('class="'.concat(value, '"'));
            } else if (key === 'htmlFor') {
                attributes.push('for="'.concat(value, '"'));
            } else if (typeof value === 'string') {
                attributes.push("".concat(key, '="').concat(value, '"'));
            } else if (typeof value === 'number') {
                attributes.push("".concat(key, '="').concat(value, '"'));
            } else if (typeof value === 'boolean' && value) {
                attributes.push(key);
            }
        }
        const attrsString = attributes.length > 0 ? ' ' + attributes.join(' ') : '';
        // 自闭合标签
        const selfClosingTags = [
            'img',
            'br',
            'hr',
            'input',
            'meta',
            'link'
        ];
        if (selfClosingTags.includes(tagName)) {
            return "<".concat(tagName).concat(attrsString, " />");
        }
        // 处理子元素
        let childrenHtml = '';
        if (children !== undefined && children !== null) {
            if (Array.isArray(children)) {
                childrenHtml = children.map((child)=>{
                    if (/*#__PURE__*/ react.isValidElement(child)) {
                        return reactElementToHtml(child);
                    } else if (typeof child === 'string') {
                        return child;
                    } else if (typeof child === 'number') {
                        return String(child);
                    } else {
                        return '';
                    }
                }).join('');
            } else if (/*#__PURE__*/ react.isValidElement(children)) {
                childrenHtml = reactElementToHtml(children);
            } else if (typeof children === 'string') {
                childrenHtml = children;
            } else if (typeof children === 'number') {
                childrenHtml = String(children);
            }
        }
        const html = "<".concat(tagName).concat(attrsString, ">").concat(childrenHtml, "</").concat(tagName, ">");
        fnLog.log('generated html', html);
        return html;
    } else {
        // 处理组件类型 (函数组件或类组件)
        fnLog.log('component type, extracting children');
        if (children) {
            if (Array.isArray(children)) {
                return children.map((child)=>{
                    if (/*#__PURE__*/ react.isValidElement(child)) {
                        return reactElementToHtml(child);
                    } else {
                        return String(child);
                    }
                }).join('');
            } else if (/*#__PURE__*/ react.isValidElement(children)) {
                return reactElementToHtml(children);
            } else {
                return String(children);
            }
        }
        return '';
    }
}


/***/ }),

/***/ 44690:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  storeUtils: () => (/* reexport */ storeUtils)
});

// UNUSED EXPORTS: StorePageContext, StorePageDynamicContext, indexedDbUtils, storage

// EXTERNAL MODULE: ../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/lodash.js
var lodash = __webpack_require__(63624);
var lodash_default = /*#__PURE__*/__webpack_require__.n(lodash);
// EXTERNAL MODULE: ../../node_modules/.pnpm/store2@2.14.4/node_modules/store2/dist/store2.js
var store2 = __webpack_require__(45049);
var store2_default = /*#__PURE__*/__webpack_require__.n(store2);
// EXTERNAL MODULE: ../../libs/fanfanlo/dist/src/watcher/proxyWatch.js + 2 modules
var proxyWatch = __webpack_require__(86125);
// EXTERNAL MODULE: ../../libs/fanfanlo/dist/src/dispatcher/throttle.js
var throttle = __webpack_require__(54529);
;// ../../libs/fanfanlo/dist/src/watcher/watchUpdates.js




function watchUpdates(target, onUpdate, conf, watchChain) {
    var _a;
    watchChain = watchChain || [];
    const unsubMap = /* @__PURE__ */ new Map();
    const { dispatcher } = (0,proxyWatch/* getProxyObject */.Ye)(target);
    const unsub = dispatcher.addListener(throttle/* listenAnyWildcard */._l, createOnUpdateFn(target, onUpdate, unsubMap, [
        ...watchChain
    ], conf));
    unsubMap.set(target, unsub);
    for(const key in target){
        const value = target[key];
        if (!lodash_default().isObject(value) || !checkIsInWatch(key, target, conf)) continue;
        const subConf = lodash_default().isArray(target) ? conf : (_a = conf == null ? void 0 : conf.properties) == null ? void 0 : _a[key];
        listenSubKey(target, key, unsubMap, onUpdate, [
            ...watchChain,
            key
        ], subConf);
    }
    return ()=>{
        unsubMap.forEach((unsub2, target2)=>unsub2());
    };
}
function createOnUpdateFn(target, onUpdate, unsubMap, watchChain, conf) {
    return (prop, now, old)=>{
        var _a, _b;
        if (!checkIsInWatch(prop, target, conf)) return;
        if (lodash_default().isObject(old)) {
            (_a = unsubMap.get(old)) == null ? void 0 : _a();
            unsubMap.delete(old);
        }
        onUpdate({
            target,
            key: prop,
            oldValue: old,
            newValue: now,
            watchChain: [
                ...watchChain,
                prop
            ]
        });
        const subConf = lodash_default().isArray(target) ? conf : (_b = conf == null ? void 0 : conf.properties) == null ? void 0 : _b[prop];
        listenSubKey(target, prop, unsubMap, onUpdate, [
            prop,
            ...watchChain
        ], subConf);
    };
}
function checkIsInWatch(prop, target, conf) {
    return !conf || conf.keys === throttle/* listenAnyWildcard */._l || lodash_default().isArray(conf.keys) && conf.keys.includes(prop) || conf.properties && prop in conf.properties || lodash_default().isArray(target);
}
function listenSubKey(target, key, unsubMap, onUpdate, watchChain, property) {
    const u = target[key];
    if (!u) return;
    if (!lodash_default().isObject(u)) return;
    const unsub = watchUpdates(u, onUpdate, property, [
        ...watchChain
    ]);
    unsubMap.set(u, unsub);
} //# sourceMappingURL=watchUpdates.js.map

// EXTERNAL MODULE: ../../node_modules/.pnpm/idb-keyval@6.2.2/node_modules/idb-keyval/dist/index.js
var dist = __webpack_require__(47067);
// EXTERNAL MODULE: ../../libs/fanfanlo/dist/src/watcher/proxyUtils.js
var watcher_proxyUtils = __webpack_require__(87041);
// EXTERNAL MODULE: ../../libs/fanfanlo/dist/src/utils/debug/object-count-utils.js
var object_count_utils = __webpack_require__(5994);
;// ../../libs/fanfanlo/dist/src/watcher/parentProxy.js






const objectMap = /* @__PURE__ */ new WeakMap();
function getParentProxyObject(parent, options) {
    watcher_proxyUtils/* proxyUtils */.o.pauseProxy();
    const target = (0,proxyWatch/* getProxyWatchRealTarget */.xA)(parent);
    let proxyObject = objectMap.get(target);
    if (!proxyObject) {
        const watchProxy = (0,proxyWatch/* getProxyObject */.Ye)(parent);
        proxyObject = {
            target,
            watchProxy
        };
        const unsub = watchProxy.dispatcher.addListener(throttle/* listenAnyWildcard */._l, (prop, value, old, target2)=>{
            var _a;
            if (lodash_default().isObject(old)) {
                const oldProxyObject = objectMap.get(old);
                if (oldProxyObject) {
                    oldProxyObject.parent = void 0;
                    (_a = oldProxyObject.unwatch) == null ? void 0 : _a.call(oldProxyObject);
                    oldProxyObject.unwatch = void 0;
                }
            }
            if (lodash_default().isObject(value)) {
                const newProxyObject = getParentProxyObject(value, options);
                newProxyObject.parent = target2;
            }
        });
        proxyObject.unwatch = unsub;
        if (object_count_utils/* objectCountUtils */._.getObjectCount(target) == object_count_utils/* objectCountUtils */._.getObjectCount(proxyObject.watchProxy.proxy)) {
            throw new Error("proxy object count is same");
        }
        objectMap.set(target, proxyObject);
    }
    loopChildren(target, options);
    watcher_proxyUtils/* proxyUtils */.o.resumeProxy();
    return proxyObject;
}
function loopChildren(parent, options) {
    for(const key in parent){
        const child = parent[key];
        if (!lodash_default().isObject(child)) continue;
        const info = getParentProxyObject(child, options);
        info.parent = parent;
    }
}
function destroyParentProxy(parent) {
    if (!_.isObject(parent)) throw new Error("target must be an object");
    const info = getParentProxyObject(parent);
    info.parent = void 0;
    objectMap.delete(parent);
    for(const key in parent){
        const child = parent[key];
        if (!_.isObject(child)) continue;
        destroyParentProxy(child);
    }
}
function isParent(parent) {
    return objectMap.get(parent);
}
function parentProxy_toParent(target) {
    return getParentProxyObject(target).watchProxy.proxy;
}
function getParentProxyInfo(target) {
    return getParentProxyObject(target);
}
function getParentProxyTarget(target) {
    return getParentProxyObject(target).target;
}
function getParent(target) {
    return getParentProxyObject(target).parent;
}
function getParentWatchProxy(target) {
    const parent = getParentProxyObject(target).parent;
    if (!parent) throw new Error("parent is undefined");
    return toProxy(parent);
} //# sourceMappingURL=parentProxy.js.map

;// ../../libs/fanfanlo/dist/src/watcher/parentWatchProxy.js




function toParentWatchProxy(target) {
    return toParent(toProxy(target));
}
function getProxyTarget(target) {
    let parentObject = isParent(target) ? getParentProxyTarget(target) : target;
    const proxyObject = (0,proxyWatch/* getProxyObject */.Ye)(parentObject).target;
    parentObject = isParent(proxyObject) ? getParentProxyTarget(proxyObject) : proxyObject;
    return parentObject;
}
function getTarget(target) {
    var _a;
    proxyUtils.pauseProxy();
    let t = target;
    let c = 0;
    while(t && isProxy(t)){
        c++;
        if (c > 5) break;
        if (isProxy(t)) t = (_a = isProxy(t)) == null ? void 0 : _a.target;
    }
    proxyUtils.resumeProxy();
    return t;
} //# sourceMappingURL=parentWatchProxy.js.map

// EXTERNAL MODULE: ../../libs/fanfanlo/dist/src/log/Log.js + 1 modules
var Log = __webpack_require__(53133);
;// ../../libs/fanfanlo/dist/src/storage/indexed-db-utils.js

var __async = (__this, __arguments, generator)=>{
    return new Promise((resolve, reject)=>{
        var fulfilled = (value)=>{
            try {
                step(generator.next(value));
            } catch (e) {
                reject(e);
            }
        };
        var rejected = (value)=>{
            try {
                step(generator.throw(value));
            } catch (e) {
                reject(e);
            }
        };
        var step = (x)=>x.done ? resolve(x.value) : Promise.resolve(x.value).then(fulfilled, rejected);
        step((generator = generator.apply(__this, __arguments)).next());
    });
};




const libs = {};
function getNamespaceStoreWithData(ns, opts) {
    return __async(this, null, function*() {
        const log = new Log/* Log */.tG(false, "indexedDb utils getNamespaceStoreWithData_".concat(ns));
        log.pause = true;
        let ss = libs[ns];
        log.log("init indexed db", ns);
        if (ss) {
            return ss;
        }
        const s = (0,dist/* createStore */.y$)(ns, ns);
        if ((opts == null ? void 0 : opts.forceReset) === true && opts.defData) {
            console.log("clean s", ns);
            yield (0,dist/* clear */.IU)(s);
            const keys = Object.keys(opts.defData);
            for (const key of keys){
                console.log("clear insert", key, opts.defData[key]);
                yield (0,dist/* set */.hZ)(key, opts.defData[key], s);
            }
            console.log("clean complete", ns);
        }
        const raw = yield (0,dist/* entries */.jO)(s);
        let o;
        if (raw && raw.length > 0) {
            o = Object.fromEntries(raw);
        }
        if (!o) {
            if ((opts == null ? void 0 : opts.defData) && opts.mergeDefData) {
                o = opts.defData;
            } else {
                o = {};
            }
        }
        yield mergeDefault();
        function mergeDefault() {
            return __async(this, null, function*() {
                log.log("mergeDefaultdata check opts", ns);
                if (!opts) return;
                log.log("mergeDefaultdata check mergeDefdata must is true", opts.mergeDefData);
                if (opts.mergeDefData !== true) return;
                log.log("start mergeDefaultdata", ns);
                if (!raw || raw.length == 0) return;
                log.log("mergeDefaultdata check defdata");
                if (!opts.defData) return;
                log.log("mergeDefaultdata check mergedefdata");
                if (opts.forceReset) return;
                log.log("mergeDefaultdata check o");
                if (!o) return;
                const defData = opts.defData;
                log.log("real start mergeDefData", defData);
                let keys = Object.keys(defData);
                for(let i = 0; i < keys.length; i++){
                    let key = keys[i];
                    if (key in o) continue;
                    log.log("add key", key, defData[key]);
                    yield (0,dist/* set */.hZ)(key, defData[key], s);
                    o[key] = defData[key];
                }
                keys = Object.keys(o);
                for(let i = 0; i < keys.length; i++){
                    let key = keys[i];
                    if (key in defData) continue;
                    log.log("del key", key);
                    yield (0,dist/* del */.yH)(key, s);
                    delete o[key];
                }
                log.log("after merge o=", o);
            });
        }
        const data = (0,proxyWatch/* toProxy */.I$)(o);
        watchUpdates(data, (info)=>__async(this, null, function*() {
                log.log(" watchUpdates_fn ns=".concat(ns, " data="), data);
                log.log(" watchUpdates_fn info=", info);
                if (info.watchChain.length == 0) {
                    console.error(" watchUpdates_fn no key found", info);
                    console.error(" watchUpdates_fn no key found info=", info);
                    console.error(" watchUpdates_fn data =", data);
                    return;
                }
                const key = info.watchChain[0];
                if (!(key in data)) {
                    console.error(" watchUpdates_fn key not found in data", "key=".concat(key), "ns=".concat(ns));
                    console.error(" watchUpdates_fn data =", data);
                    return;
                }
                log.log("watchUpdates_fn write", "key=".concat(key), "v=", data[key]);
                log.log("json value=", JSON.stringify(data[key]));
                try {
                    let v = data[key];
                    if (lodash_default().isObject(v)) {
                        v = getProxyTarget(v);
                    }
                    yield (0,dist/* set */.hZ)(key, v, s);
                    log.log("getNamespaceStoreWithData_fn watchUpdates", info);
                } catch (e) {
                    console.trace("path");
                    console.error("getNamespaceStoreWithData_fn watchUpdates set error", e);
                }
            }));
        function clean() {
            return __async(this, null, function*() {
                const keys = Object.keys(data);
                for (const key of keys){
                    delete data[key];
                }
                yield (0,dist/* clear */.IU)(s);
            });
        }
        const res = {
            data,
            store: {
                getData: ()=>data,
                read (key, defaultValue) {
                    var _a;
                    return (_a = data[key]) != null ? _a : defaultValue;
                },
                write (key, value, override) {
                    data[key] = value;
                    (0,dist/* set */.hZ)(key, value, s);
                },
                clearAll () {
                    clean();
                },
                setAll (d) {
                    clean();
                    Object.assign(data, d);
                    const keys = Object.keys(d);
                    for (const key of keys){
                        (0,dist/* set */.hZ)(key, d[key], s);
                    }
                },
                remove (key) {
                    delete data[key];
                    (0,dist/* del */.yH)(key, s);
                }
            }
        };
        libs[ns] = res;
        return res;
    });
}
function init() {
    return __async(this, null, function*() {});
}
const indexedDbUtils = {
    init,
    getIndexedDbStore: getNamespaceStoreWithData
}; //# sourceMappingURL=indexed-db-utils.js.map

;// ../../libs/fanfanlo/dist/src/storage/store-utils.js

var store_utils_async = (__this, __arguments, generator)=>{
    return new Promise((resolve, reject)=>{
        var fulfilled = (value)=>{
            try {
                step(generator.next(value));
            } catch (e) {
                reject(e);
            }
        };
        var rejected = (value)=>{
            try {
                step(generator.throw(value));
            } catch (e) {
                reject(e);
            }
        };
        var step = (x)=>x.done ? resolve(x.value) : Promise.resolve(x.value).then(fulfilled, rejected);
        step((generator = generator.apply(__this, __arguments)).next());
    });
};





const localStoreMap = {};
function createLocalStore(ns, opts) {
    let unsub;
    let ss = localStoreMap[ns];
    if (ss) {
        return ss;
    }
    const s = store2_default().namespace(ns);
    if ((opts == null ? void 0 : opts.forceReset) && (opts == null ? void 0 : opts.defData)) {
        s.setAll(opts == null ? void 0 : opts.defData);
    }
    if (lodash_default().isObject(opts == null ? void 0 : opts.defData) && Object.keys(s.getAll()).length == 0) {
        s.setAll(opts == null ? void 0 : opts.defData);
    }
    let data = createData();
    function createData() {
        unsub == null ? void 0 : unsub();
        unsub = void 0;
        try {
            const d = s.getAll();
            const data2 = (0,proxyWatch/* toProxy */.I$)(d && Object.keys(d).length > 0 ? d : {});
            watchData(data2);
            return data2;
        } catch (e) {
            console.error(e);
            s.setAll({});
            return (0,proxyWatch/* toProxy */.I$)({});
        }
    }
    let requestAnimationFrameId = -1;
    function watchData(data2) {
        unsub = watchUpdates(data2, ()=>{
            if (requestAnimationFrameId > -1) return;
            requestAnimationFrameId = window.requestAnimationFrame(()=>{
                requestAnimationFrameId = -1;
                try {
                    store2_default().namespace(ns).setAll(data2);
                } catch (e) {
                    alert(e);
                    console.error(e);
                }
            });
        });
    }
    const res = {
        data,
        store: {
            getData: ()=>data,
            read (key, defaultValue) {
                return s.get(key, defaultValue);
            },
            write (key, value, override) {
                data[key] = value;
            },
            clearAll () {
                store2_default().namespace(ns).clearAll();
                const keys = Object.keys(data);
                for (const key of keys){
                    delete data[key];
                }
            },
            setAll (d) {
                store2_default().namespace(ns).setAll(d);
                res.store.clearAll();
                const keys = Object.keys(d);
                for (const key of keys){
                    data[key] = d[key];
                }
            },
            remove (key) {
                store2_default().namespace(ns).remove(key);
                delete data[key];
            }
        }
    };
    localStoreMap[ns] = res;
    return res;
}
function createJavaStore(ns, opts) {
    const log = new Log/* Log */.tG(false, "createJavaStore_fn ns= " + ns);
    log.pause = true;
    let unsub;
    let data = createData();
    function createData() {
        unsub == null ? void 0 : unsub();
        unsub = void 0;
        const raw = getStoresNamespace(ns, opts) || {};
        const o = raw || {};
        mergeDefault();
        function mergeDefault() {
            return store_utils_async(this, null, function*() {
                if (!opts) return;
                if (opts.mergeDefData !== true) return;
                if (!raw || lodash_default().isArray(raw) || !lodash_default().isObject(raw)) return;
                if (!opts.defData) return;
                if (opts.forceReset) return;
                if (!o) return;
                const defData = opts.defData;
                let keys = Object.keys(defData);
                let updated = false;
                for(let i = 0; i < keys.length; i++){
                    let key = keys[i];
                    if (key in o) continue;
                    o[key] = defData[key];
                    updated = true;
                }
                keys = Object.keys(o);
                for(let i = 0; i < keys.length; i++){
                    let key = keys[i];
                    if (key in defData) continue;
                    delete o[key];
                    updated = true;
                }
                if (updated) {
                    is == null ? void 0 : is.write(ns, o);
                }
            });
        }
        const data2 = (0,proxyWatch/* toProxy */.I$)(o);
        watchData(data2);
        return data2;
    }
    let isClearAll = false;
    let callingNextFrame = false;
    function callNextFrame() {
        if (callingNextFrame) return;
        callingNextFrame = true;
        window.requestAnimationFrame(()=>{
            callingNextFrame = false;
            log.log("java store callNextFrame", ns, data);
            is == null ? void 0 : is.write(ns, data);
        });
    }
    function watchData(data2) {
        unsub = watchUpdates(data2, ()=>{
            if (isClearAll) return;
            log.log("java watch data", "ns=", ns, "data=", data2);
            callNextFrame();
        });
    }
    const res = {
        data,
        store: {
            getData: ()=>data,
            read (key, defaultValue) {
                var _a;
                log.log("java store read", ns, key, defaultValue);
                return (_a = data[key]) != null ? _a : defaultValue;
            },
            write (key, value, override) {
                log.log("java store write", ns, key, value, override);
                data[key] = value;
            },
            clearAll () {
                is == null ? void 0 : is.write(ns, "");
                const keys = Object.keys(data);
                isClearAll = true;
                for (const key of keys){
                    delete data[key];
                }
                isClearAll = false;
            },
            setAll (d) {
                is == null ? void 0 : is.write(ns, d);
                res.store.clearAll();
                const keys = Object.keys(d);
                isClearAll = true;
                for (const key of keys){
                    data[key] = d[key];
                }
                isClearAll = false;
            },
            remove (key) {
                delete data[key];
            }
        }
    };
    return res;
}
let is = void 0;
function setStoresProxy(s) {
    s.ns = (0,proxyWatch/* toProxy */.I$)(s.ns);
    is = s;
}
function getStoresNamespace(ns, opts) {
    const log = new Log/* Log */.tG(false, "getStoresNamespace_fn ns= " + ns);
    log.pause = true;
    log.log("is=", is);
    if (!is) return void 0;
    let s = is.ns[ns];
    log.log("s=", s);
    if (!s) {
        s = is.read(ns);
        log.log("s2=", s);
        if (s) {} else {
            s = is.ns[ns] = (opts == null ? void 0 : opts.defData) || {};
        }
    }
    if ((opts == null ? void 0 : opts.forceReset) && opts.defData) {
        let keys = Object.keys(s);
        for (const key of keys){
            delete s[key];
        }
        keys = Object.keys(opts.defData);
        for (const key of keys){
            s[key] = opts.defData[key];
        }
        log.log("getStoresNamespace_fn force reset", ns);
        is.write(ns, opts.defData);
    }
    is.ns[ns] = (0,proxyWatch/* toProxy */.I$)(s);
    return is.ns[ns];
}
function namespace(ns) {
    const res = is ? createJavaStore(ns) : createLocalStore(ns);
    return res.store;
}
function store_utils_getNamespaceStoreWithData(ns, opts) {
    return store_utils_async(this, null, function*() {
        const res = is ? createJavaStore(ns, opts) : indexedDbUtils.getIndexedDbStore(ns, opts);
        return res;
    });
}
const storeUtils = {
    //获取一个命名空间下的数据对象，本地会从localstorage里读取，
    //安卓环境会从安卓里读取
    namespace,
    getNamespaceStoreWithData: store_utils_getNamespaceStoreWithData,
    setStoresProxy,
    // 这个可以用来侦听子级字段变更以便写入localStorage
    // 不然store2普通的set是无法在子级对象变更时进行写入的。
    createLocalStore,
    //特殊需求的store还是从store2来,譬如大数据变更的情况，还是直接操作方便。
    createStore2: (ns)=>store2_default().namespace(ns)
}; //# sourceMappingURL=store-utils.js.map

;// ../../libs/fanfanlo/dist/src/storage/index.js





 //# sourceMappingURL=index.js.map


/***/ }),

/***/ 46112:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  f: () => (/* binding */ permissionUtils)
});

// EXTERNAL MODULE: ../../libs/droid/android/src/android/AutoWebViewJs.ts + 1 modules
var AutoWebViewJs = __webpack_require__(45921);
;// ../../libs/droid/android/src/android/scripts/permissions/permissions.intf.ts
var PermissionAskStatus = /*#__PURE__*/ function(PermissionAskStatus) {
    PermissionAskStatus["asking"] = "asking";
    PermissionAskStatus["granted"] = "granted";
    PermissionAskStatus["denied"] = "denied";
    return PermissionAskStatus;
}({});

// EXTERNAL MODULE: ../../libs/fanfanlo/src/log/Log.ts + 1 modules
var Log = __webpack_require__(48891);
;// ../../libs/droid/android/src/android/scripts/permissions/permissionUtils.ts



const fileLog = new Log/* Log */.tG(false, 'permissionUtils');
function checkPermissions(permissions) {
    const fnLog = fileLog.sub(false, 'checkPermissions_fn');
    const script = "\n    com.fanfanlo.lib.permission.PermissionRequestManager.checkPermissions(".concat(JSON.stringify(permissions), ");\n    ");
    const { javaResultData, javaResultString, errMsg } = AutoWebViewJs/* autoWebViewJs */.yx.callScript(script);
    fnLog.info('checkPermissions_fn javaResultData=', javaResultData, 'javaResultString=', javaResultString, 'errMsg=', errMsg);
    const result = {
        isGranted: (javaResultData === null || javaResultData === void 0 ? void 0 : javaResultData.isAllGranted) || false,
        status: (javaResultData === null || javaResultData === void 0 ? void 0 : javaResultData.isAllGranted) ? PermissionAskStatus.granted : PermissionAskStatus.asking,
        permissionResult: javaResultData
    };
    return result;
}
function ask(checkResult, permissions, completeEventName, askPermissionsBack) {
    const fnLog = fileLog.sub(false, 'ask_fn');
    const script = "\n    com.fanfanlo.lib.permission.PermissionRequestManager.requestMultiplePermissions(".concat(JSON.stringify(permissions), ', "').concat(completeEventName, '");\n    ');
    fnLog.info('script=', script);
    AutoWebViewJs/* autoWebViewJs */.yx.callScript(script);
    function onEvent() {
        fnLog.info('onEvent_fn');
        const checkResult = checkPermissions(permissions);
        askPermissionsBack(false, checkResult.isGranted, checkResult);
    }
    window.addEventListener(completeEventName, onEvent);
    function unsubListener() {
        fnLog.info('unsubListener_fn');
        window.removeEventListener(completeEventName, onEvent);
    }
    checkResult.unsubListener = unsubListener;
}
function askPermissions(permissions, completeEventName, askPermissionsBack, askPanelFunction) {
    const fnLog = fileLog.sub(false, "askPermission_fn");
    const checkResult = checkPermissions(permissions);
    fnLog.info('askPermission_fn checkResult=', checkResult);
    if (checkResult.isGranted) {
        fnLog.info("askPermission_fn checkResult.isGranted");
        return checkResult;
    }
    fnLog.info('askPermission_fn askPanelFunction=', !!askPanelFunction);
    if (askPanelFunction) {
        if (!checkResult.permissionResult) {
            fnLog.error('askPermission_fn checkResult.permissionResult is null');
            throw new Error('checkResult.permissionResult is null');
        }
        askPanelFunction(checkResult.permissionResult, (toAsk)=>{
            fnLog.info("askPermissions_fn askPanelFunction toAsk=", toAsk);
            if (toAsk) {
                ask(checkResult, permissions, completeEventName, askPermissionsBack);
            } else {
                askPermissionsBack(true, false);
            }
        });
    } else {
        ask(checkResult, permissions, completeEventName, askPermissionsBack);
    }
    return checkResult;
}
const permissionUtils = {
    askPermissions
};


/***/ }),

/***/ 62039:
/***/ ((module) => {

// extracted by mini-css-extract-plugin
module.exports = {"permissionComponentsSpanPadding":"components_permissionComponentsSpanPadding___8iUl","danger":"components_danger__at2U4","pass":"components_pass__QEjyt"};

/***/ }),

/***/ 69276:
/***/ (() => {

"use strict";
 //# sourceMappingURL=global.index.js.map


/***/ }),

/***/ 79696:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   O: () => (/* binding */ marketsDevSocket)
/* harmony export */ });
/* unused harmony export socketConnectInfo */
/* harmony import */ var _fanfanlo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(82727);
/* harmony import */ var _fanfanlo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(88518);
/* harmony import */ var _fanfanlo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(14069);
/* harmony import */ var _market_lib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(15899);
/* harmony import */ var _market_dev_socket_setting_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(29272);



const dispatcher = new _fanfanlo__WEBPACK_IMPORTED_MODULE_0__/* .Dispatcher */ .m();
const socketConnectInfo = (0,_fanfanlo__WEBPACK_IMPORTED_MODULE_1__/* .toProxy */ .I$)({
    status: _fanfanlo__WEBPACK_IMPORTED_MODULE_2__/* .SocketConnectStatusEnum */ .du.disconnected,
    retryCount: 0
});
let ws;
async function connect() {
    const url = (await (0,_market_dev_socket_setting_data__WEBPACK_IMPORTED_MODULE_3__/* .getMarketDevSocketSettingData */ .D)()).url;
    if (!(0,_fanfanlo__WEBPACK_IMPORTED_MODULE_2__/* .isValidWebSocketURL */ .NC)(url)) {
        return;
    }
    socketConnectInfo.status = _fanfanlo__WEBPACK_IMPORTED_MODULE_2__/* .SocketConnectStatusEnum */ .du.connecting;
    const w = ws = new WebSocket(url);
    w.onopen = ()=>{
        socketConnectInfo.status = _fanfanlo__WEBPACK_IMPORTED_MODULE_2__/* .SocketConnectStatusEnum */ .du.connected;
        toGetAllScripts();
    };
    w.onclose = ()=>{
        console.log('oscket on close', arguments);
        socketConnectInfo.status = _fanfanlo__WEBPACK_IMPORTED_MODULE_2__/* .SocketConnectStatusEnum */ .du.disconnected;
        checkNeedRetry();
    };
    w.onerror = ()=>{
        console.log('socket onerror', arguments);
        socketConnectInfo.status = _fanfanlo__WEBPACK_IMPORTED_MODULE_2__/* .SocketConnectStatusEnum */ .du.disconnected;
        close();
        checkNeedRetry();
    };
    w.onmessage = (e)=>{
        try {
            const event = JSON.parse(e.data);
            console.log('market dev socket onmessage', event.type);
            dispatcher.dispatch(event.type, event.data);
        } catch (e) {
            console.error(e);
        }
    };
    async function toGetAllScripts() {
        const event = {
            type: _market_lib__WEBPACK_IMPORTED_MODULE_4__/* .IMarketDevConnectEventType */ .Dl.getAllScripts
        };
        w.send(JSON.stringify(event));
    }
}
function close() {
    if (!ws) return;
    ws.close();
    ws = undefined;
}
async function checkNeedRetry() {
    const settingData = await (0,_market_dev_socket_setting_data__WEBPACK_IMPORTED_MODULE_3__/* .getMarketDevSocketSettingData */ .D)();
    if (!settingData.keepConnect) {
        return;
    }
    socketConnectInfo.retryCount++;
    setTimeout(()=>{
        connect();
    }, 1000 * 5);
}
function disconnect() {
    if (ws) {
        ws.close();
        ws = undefined;
    }
    socketConnectInfo.status = _fanfanlo__WEBPACK_IMPORTED_MODULE_2__/* .SocketConnectStatusEnum */ .du.disconnected;
}
const marketsDevSocket = {
    connect,
    disconnect,
    socketConnectInfo,
    dispatcher
};


/***/ }),

/***/ 87332:
/***/ (() => {

"use strict";
 //# sourceMappingURL=II18nValueConf.js.map


/***/ }),

/***/ 88664:
/***/ (() => {

"use strict";
 //# sourceMappingURL=global.index.js.map


/***/ }),

/***/ 93589:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   y: () => (/* binding */ TabbarContainer)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(94513);
/* harmony import */ var _barrel_optimize_names_Box_CssBaseline_Paper_mui_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(59864);
/* harmony import */ var _barrel_optimize_names_Box_CssBaseline_Paper_mui_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6445);
/* harmony import */ var _barrel_optimize_names_Box_CssBaseline_Paper_mui_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(32055);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(94285);
/* harmony import */ var _page_AndroidPageContent__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(67236);
/* __next_internal_client_entry_do_not_use__ TabbarContainer auto */ 



function BottomBar(param) {
    let { navBar } = param;
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_barrel_optimize_names_Box_CssBaseline_Paper_mui_material__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A, {
        id: "bottom-navigation",
        sx: {
            position: 'fixed',
            bottom: 0,
            left: 0,
            right: 0
        },
        elevation: 3,
        children: navBar
    });
}
function TabbarContainer(param) {
    let { children, titleConf, navBar } = param;
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_barrel_optimize_names_Box_CssBaseline_Paper_mui_material__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A, {
        sx: {
            minHeight: '100vh',
            paddingBottom: '72px' // 为固定在底部的tabbar留出空间
        },
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_barrel_optimize_names_Box_CssBaseline_Paper_mui_material__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Ay, {}),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_page_AndroidPageContent__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .A, {
                titleConf: titleConf,
                children: children
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(BottomBar, {
                navBar: navBar
            })
        ]
    });
}


/***/ }),

/***/ 96608:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Home)
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/react@19.1.0/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(94513);
// EXTERNAL MODULE: ../../libs/app/ui/src/components/app/AppShell.tsx + 2 modules
var AppShell = __webpack_require__(20939);
// EXTERNAL MODULE: ../../libs/app/ui/src/components/tabbar/Tabbar.tsx
var Tabbar = __webpack_require__(93589);
// EXTERNAL MODULE: ../../libs/fanfanlo/src/i18n/i18n-init.ts + 1 modules
var i18n_init = __webpack_require__(70506);
// EXTERNAL MODULE: ../../libs/droid/android/src/android/AutoWebViewJs.ts + 1 modules
var AutoWebViewJs = __webpack_require__(45921);
// EXTERNAL MODULE: ../../libs/droid/android/src/htmls/accessibility-info-buttons/accessibility-info-buttons.ts
var accessibility_info_buttons = __webpack_require__(65541);
// EXTERNAL MODULE: ../../libs/droid/android/src/android/scripts/permissions/permissionUtils.ts + 1 modules
var permissionUtils = __webpack_require__(46112);
// EXTERNAL MODULE: ../../libs/droid/android/src/android/components/Manifest.ts
var Manifest = __webpack_require__(73703);
// EXTERNAL MODULE: ../../libs/fanfanlo/src/log/Log.ts + 1 modules
var Log = __webpack_require__(48891);
// EXTERNAL MODULE: ../../libs/fanfanlo/src/watcher/proxyWatch.ts
var proxyWatch = __webpack_require__(88518);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react-i18next@15.6.0_i18next@24.2.3_typescript@5.7.3__react-dom@19.1.0_react@19.1.0__react@19.1.0_typescript@5.7.3/node_modules/react-i18next/dist/es/index.js + 15 modules
var es = __webpack_require__(50279);
// EXTERNAL MODULE: ../../libs/fanfanlo/src/watcher/useProxyWatch.ts
var useProxyWatch = __webpack_require__(45007);
// EXTERNAL MODULE: ../../libs/fanfanlo/src/utils/documentUtils.ts
var documentUtils = __webpack_require__(47684);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/Button/Button.js + 3 modules
var Button_Button = __webpack_require__(28669);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react@19.1.0/node_modules/react/index.js
var react = __webpack_require__(94285);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react-hot-toast@2.5.2_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/react-hot-toast/dist/index.mjs + 1 modules
var dist = __webpack_require__(22243);
// EXTERNAL MODULE: __barrel_optimize__?names=ulid!=!../../node_modules/.pnpm/ulid@2.4.0/node_modules/ulid/dist/index.esm.js + 1 modules
var index_esm = __webpack_require__(67131);
;// ./src/components/a11y/open-a11y-node-button.tsx







//interface 
const fileLog = new Log/* Log */.tG(false, 'open-a11y-node-button.tsx');
fileLog.isChildrenPaused = false;
fileLog.isPaused = false;
const data = (0,proxyWatch/* toProxy */.I$)({
    opened: false
});
async function onClick() {
    if (data.opened) return;
    const eventType = "a11yNodeSelectActionItem";
    const selectEventIndex = autoWebViewJs.shellListen(androidDispatchers.WebViewJsDispatcher.name, eventType, eventType, false, onSelectNode);
    function onSelectNode(s) {
        clear();
        autoWebViewJs.clipboardSetText(s);
    // const info: IA11yNodeInfo = JSON.parse(s)
    // console.log('fffffffffffffff', s)
    }
    function clear() {
        data.opened = false;
        autoWebViewJs.shellRemoveListen(androidDispatchers.WebViewJsDispatcher.name, selectEventIndex);
        autoWebViewJs.shellRemoveListen(androidDispatchers.Window.name, exitWindowIndex);
        if (exitWebviewJsIndex) {
            autoWebViewJs.removeListen(androidDispatchers.Window.name, parseInt(exitWebviewJsIndex));
        }
    }
    const windowId = ulid();
    openHtmlShowA11yNodeInfoButton(eventType, windowId);
    data.opened = true;
    const et = "window-".concat(windowId, "-dismiss");
    const { javaResultString: exitWebviewJsIndex, errMsg } = autoWebViewJs.listen(androidDispatchers.Window.name, et, et, true);
    if (errMsg) {
        throw new Error(errMsg);
    }
    const exitWindowIndex = autoWebViewJs.shellListen(androidDispatchers.Window.name, et, et, true, ()=>{
        clear();
    });
}
function open_a11y_node_button_OpenA11yNodeButton() {
    const uiLog = fileLog.sub(false, 'OpenA11yNodeButton_ui');
    const { t } = (0,es/* useTranslation */.Bd)('homepage/components/a11y/content');
    const [isHidden] = (0,useProxyWatch/* useProxyWatch */.x)(documentUtils/* documentHiddenData */.uA, 'isHidden', documentUtils/* documentHiddenData */.uA.isHidden);
    const [isWaitingPermissions, setIsWaitingPermissions] = (0,react.useState)(false);
    function checkPermissions() {
        const script = '\n        com.fanfanlo.lib.permission.PermissionRequestManager.checkPermissions([\n            "Manifest.permission.CAMERA",\n            "android.permission.SYSTEM_ALERT_WINDOW",\n            "android.permission.BIND_ACCESSIBILITY_SERVICE"\n        ]);\n        ';
        const { javaResultData, javaResultString, errMsg } = AutoWebViewJs/* autoWebViewJs */.yx.callScript(script);
        uiLog.info('checkPermissions_fn javaResultString=', javaResultString, errMsg, javaResultData);
        uiLog.info('checkPermissions_fn javaResultData2 =', JSON.stringify(javaResultData));
        uiLog.info('checkPermissions_fn javaResultData3 =', javaResultData);
        uiLog.info('checkPermissions_fn javaResultData4 =', typeof javaResultData);
        uiLog.info('checkPermissions_fn javaResultData5 =', javaResultData === null || javaResultData === void 0 ? void 0 : javaResultData.grantResults[0], 'and typeof', typeof (javaResultData === null || javaResultData === void 0 ? void 0 : javaResultData.grantResults[0]));
        if (errMsg) {
            throw new Error(errMsg);
        }
    }
    (0,react.useEffect)(()=>{
        if (isHidden) {
            uiLog.info('use effect isHidden', isHidden);
            return;
        }
        if (!isWaitingPermissions) {
            uiLog.info('use effect isWaitingPermissions', isWaitingPermissions);
            return;
        }
    }, [
        isHidden,
        isWaitingPermissions
    ]);
    const [opened] = (0,useProxyWatch/* useProxyWatch */.x)(data, 'opened', data.opened);
    function onClick() {
        checkPermissions();
    }
    function onAskPermissionComplete(stoped, granted, result) {
        uiLog.info('onAskPermissionComplete_fn stoped=', stoped, 'granted=', granted, 'result=', JSON.stringify(result));
        if (!granted) {
            dist/* default */.Ay.error("有未授权的权限，所以无法运行。\n请再次点击按钮运行授权并同意赋权后才能继续执行操作。");
            return;
        }
        const eventType = (0,index_esm/* ulid */.Z0)(); // "a11yNodeSelectActionItem";
        const windowId = (0,index_esm/* ulid */.Z0)();
        uiLog.info('onAskPermissionComplete_fn eventType=', eventType, 'windowId=', windowId);
        (0,accessibility_info_buttons/* openHtmlShowA11yNodeInfoWindow */.Z)(eventType, windowId);
    }
    function askingPermissions() {
        const eventType = (0,index_esm/* ulid */.Z0)(); // "a11yNodeSelectActionItem";
        const windowId = (0,index_esm/* ulid */.Z0)();
        uiLog.info('askingPermissions_fn eventType=', eventType);
        const res = permissionUtils/* permissionUtils */.f.askPermissions([
            // Manifest.Permission.CAMERA,
            Manifest/* Manifest */._8.Permission.SYSTEM_ALERT_WINDOW,
            Manifest/* Manifest */._8.Permission.BIND_ACCESSIBILITY_SERVICE
        ], eventType, onAskPermissionComplete);
        uiLog.info('askingPermissions_fn res=', res);
        if (res.isGranted) {
            onAskPermissionComplete(false, true);
        }
    }
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(jsx_runtime.Fragment, {
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Button_Button/* default */.A, {
            variant: "contained",
            onClick: askingPermissions,
            disabled: false,
            children: t("open-a11y-node-button.btnName")
        })
    });
}

;// ./src/components/android-settings/AndroidSettingsInfo.tsx




function AndroidSettingsInfo_AndroidSettingsInfo() {
    const [permissions, setPermissions] = useState([]);
    const [open, setOpen] = useState(false);
    const onSettingClick = ()=>{
        const script = "\n        com.fanfanlo.lib.utils.PermissionUtils.openAppSettings();";
        autoWebViewJs.callScript(script);
    };
    const handleClose = ()=>{
        setOpen(false);
    };
    useEffect(()=>{
        const script = "\n        var data = com.fanfanlo.lib.utils.PermissionUtils.getGrantedPermissions();\n        var res = com.fanfanlo.lib.utils.JsonUtil.gson2.toJson(data);\n        res;\n        ";
        const res = autoWebViewJs.callScript(script);
        if (res.javaResultData) {
            setPermissions(res.javaResultData);
        }
    }, []);
    return /*#__PURE__*/ _jsxs(_Fragment, {
        children: [
            /*#__PURE__*/ _jsx(Box, {
                children: /*#__PURE__*/ _jsxs(Box, {
                    children: [
                        /*#__PURE__*/ _jsx("span", {
                            children: "授权"
                        }),
                        /*#__PURE__*/ _jsx(Button, {
                            onClick: onSettingClick,
                            children: "打开设置页"
                        }),
                        /*#__PURE__*/ _jsx(Button, {
                            onClick: ()=>setOpen(true),
                            children: "已授权"
                        })
                    ]
                })
            }),
            /*#__PURE__*/ _jsx(Modal, {
                open: open,
                onClose: handleClose,
                children: /*#__PURE__*/ _jsxs(Box, {
                    sx: {
                        bgcolor: "background.paper",
                        p: 2
                    },
                    children: [
                        /*#__PURE__*/ _jsxs(Box, {
                            children: [
                                /*#__PURE__*/ _jsx("span", {
                                    children: "已授权的权限"
                                }),
                                /*#__PURE__*/ _jsx(Button, {
                                    onClick: handleClose,
                                    children: "关闭"
                                })
                            ]
                        }),
                        /*#__PURE__*/ _jsx("ul", {
                            children: permissions.map((p, i)=>/*#__PURE__*/ _jsx("li", {
                                    style: {
                                        wordBreak: "break-all",
                                        wordWrap: "break-word"
                                    },
                                    children: p.replace('android.permission', '')
                                }, i))
                        })
                    ]
                })
            })
        ]
    });
}

;// ../../libs/droid/android/src/android/scripts/app/app-kill-self.ts

let script = "com.fanfanlo.lib.sys.Sys.killMyApp()";
function appKillSelf() {
    AutoWebViewJs/* AutoWebViewJs */.w6.instance.callScript(script);
}

;// ./src/components/app/kill-self/KillSelf.tsx





function KillSelf_KillSelf() {
    const { t } = (0,es/* useTranslation */.Bd)("homepage/components/app/kill-self/content");
    async function onClick() {
        dist/* default */.Ay.success(t("KillSelf.toast"));
        await new Promise((r)=>setTimeout(r, 1000 * 1));
        appKillSelf();
    }
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(jsx_runtime.Fragment, {
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Button_Button/* default */.A, {
            onClick: onClick,
            children: t("KillSelf.name")
        })
    });
}

// EXTERNAL MODULE: ../../node_modules/.pnpm/next@15.3.5_@babel+core@7.28.0_babel-plugin-macros@3.1.0_react-dom@19.1.0_react@19.1.0__react@19.1.0_sass@1.89.2/node_modules/next/router.js
var next_router = __webpack_require__(75640);
;// ./src/components/markets/AddExternalMarketButton.tsx





function AddExternalMarketButton_AddExternalMarketButton() {
    const router = useRouter();
    const { t } = useTranslation('homepage/components/markets/content');
    useEffect(()=>{
        nextPreload(router, '/add-market');
    }, []);
    function onClick() {
        router.push("/add-market");
    }
    return /*#__PURE__*/ _jsx(Button, {
        onClick: onClick,
        children: t("AddExternalMarketButton.name")
    });
}

;// ./src/components/markets/main-page-add-buttons/MainPageAddButtons.tsx






const MainPageAddButtons_MainPageAddButtons = ()=>{
    const router = useRouter();
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event)=>{
        setAnchorEl(event.currentTarget);
    };
    const handleClose = ()=>{
        setAnchorEl(null);
    };
    const { t } = useTranslation('homepage/components/markets/main-page-add-buttons/content');
    const menuItems = [
        {
            name: t("content.sub.addScriptByUrl"),
            url: "/listen-editing-market"
        },
        {
            name: t("content.sub.addScriptByText"),
            url: "/add-market-by-text"
        },
        {
            name: t("content.sub.addMarket"),
            url: "/add-market-by-url"
        },
        {
            name: t("content.sub.addMarketByText"),
            url: "/listen-editing-market"
        }
    ];
    return /*#__PURE__*/ _jsxs(_Fragment, {
        children: [
            /*#__PURE__*/ _jsx(Button, {
                variant: "contained",
                startIcon: /*#__PURE__*/ _jsx(AddIcon, {}),
                onClick: handleClick,
                children: t("content.add")
            }),
            /*#__PURE__*/ _jsx(Menu, {
                anchorEl: anchorEl,
                open: open,
                onClose: handleClose,
                children: menuItems.map((item, index)=>/*#__PURE__*/ _jsx(MenuItem, {
                        onClick: ()=>{
                            handleClose();
                            router.push(item.url);
                        },
                        children: item.name
                    }, index))
            })
        ]
    });
};

;// ./src/components/page/markets-dev-settings/open-link-button/OpenLinkButton.tsx




function MarketsDevSettingsOpenLinkButton() {
    const router = useRouter();
    const { t } = useTranslation('homepage/components/page/markets-dev-settings/open-link-button/content');
    async function onClick() {
        const bl = await router.push("/markets-dev-settings");
    }
    return /*#__PURE__*/ _jsx(_Fragment, {
        children: /*#__PURE__*/ _jsx(Button, {
            onClick: onClick,
            children: t("content.name")
        })
    });
}
function OpenLinkButton_MarketsDevSettingsLineOpenLinkButton() {
    return /*#__PURE__*/ _jsx(_Fragment, {
        children: /*#__PURE__*/ _jsx(Box, {
            sx: {
                mt: 2,
                mb: 2
            },
            children: /*#__PURE__*/ _jsx(MarketsDevSettingsOpenLinkButton, {})
        })
    });
}

// EXTERNAL MODULE: ./src/markets/markets-script-dev-lib.ts
var markets_script_dev_lib = __webpack_require__(5351);
// EXTERNAL MODULE: ../../libs/fanfanlo/src/watcher/watchUpdates.ts
var watchUpdates = __webpack_require__(4738);
// EXTERNAL MODULE: ../../libs/fanfanlo/dist/src/index.js
var src = __webpack_require__(28995);
// EXTERNAL MODULE: ../../libs/fanfanlo/dist/src/watcher/proxyWatch.js + 2 modules
var watcher_proxyWatch = __webpack_require__(86125);
;// ./src/markets/markets-script-lib.ts

const libIndexInfo = src.storeUtils.createLocalStore('markets-script-index-info', {
    defData: {
        list: []
    },
    forceReset: false
});
const lib = (0,watcher_proxyWatch/* toProxy */.I$)({});
let isInitialized = false;
function init() {
    if (isInitialized) {
        return;
    }
    isInitialized = true;
}
const marketsScriptLib = {
    lib,
    libIndexInfo,
    init
};

;// ./src/markets/markets-script-manager.ts



let markets_script_manager_isInitialized = false;
function markets_script_manager_init() {
    if (markets_script_manager_isInitialized) {
        return;
    }
    markets_script_manager_isInitialized = true;
    markets_script_dev_lib/* marketsDevScriptLib */.R.init();
    marketsScriptLib.init();
    (0,watchUpdates/* watchUpdates */.c)(markets_script_dev_lib/* marketsDevScriptLib */.R.marketDevLibData, (data)=>{
        console.log('marketsDevScriptLib.devLibInfo=', data);
        const allMarktLibData = markets_script_dev_lib/* marketsDevScriptLib */.R.marketDevLibData.allMarketLibData;
        if (!allMarktLibData) return;
        for (const html of allMarktLibData.htmls){
            marketsScriptLib.lib[html.client.ns] = html;
        }
        for (const script of allMarktLibData.resources){
            marketsScriptLib.lib[script.client.ns] = script;
        }
    });
}
const markets_script_manager_marketsScriptManager = {
    init: markets_script_manager_init
};

;// ./src/components/permissions/accessibility/AccessibilityInfo.tsx
/* __next_internal_client_entry_do_not_use__ AccessibilityInfo auto */ 






// import { useTranslation } from 'react-i18next';s


function AccessibilityInfo_AccessibilityInfo() {
    const { t } = useTranslation('homepage/components/permissions/accessibility/content');
    const [hasPermission, setHasPermission] = useState(a11yScript.hasPermission());
    const status = usePermissionStatus(hasPermission ? AndroidPermissionStatus.granted : AndroidPermissionStatus.shouldAskAgain);
    const [openTooltip, setOpenTooltip] = useState(false);
    const isActive = useTabActivity();
    const router = useRouter();
    function onSettingClick() {
        // if(!isInAndroid())return;
        autoWebViewJs.onCallOpenA11yPermission();
    }
    useEffect(()=>{
        if (!isActive) return;
        setHasPermission(a11yScript.hasPermission());
    }, [
        isActive
    ]);
    useEffect(()=>{
        if (!isInAndroid()) {
            console.log('check a11y permission in webview,but not in android');
            return;
        }
        let script = "var info =com.fanfanlo.droidlib.auto.components.webview.AutoWebViewJs.a11yModel.serviceLiveInfo;\n var s = com.fanfanlo.lib.utils.companion.gson2.toJson(info);\n s;";
        script = "var info =com.fanfanlo.droidlib.auto.components.webview.AutoWebViewJs.a11yModel.serviceLiveInfo;\n var s = com.fanfanlo.lib.utils.JsonUtil.gson2.toJson(info);\n s;";
        const info = autoWebViewJs.callScript(script);
        const bl = a11yScript.checkPermission();
    }, []);
    function onDangerPageButtonClick() {
        router.push('/a11y-danger');
    }
    return /*#__PURE__*/ _jsx(Box, {
        children: /*#__PURE__*/ _jsxs(Box, {
            children: [
                /*#__PURE__*/ _jsx("span", {
                    children: t('AccessibilityInfo.name')
                }),
                /*#__PURE__*/ _jsx("span", {
                    children: ":"
                }),
                /*#__PURE__*/ _jsx("button", {
                    onClick: onSettingClick,
                    role: "button",
                    style: {
                        marginLeft: "0.5rem",
                        marginRight: "0.5rem"
                    },
                    children: t('AccessibilityInfo.setting')
                }),
                /*#__PURE__*/ _jsx("span", {
                    children: status
                }),
                /*#__PURE__*/ _jsx("span", {
                    children: hasPermission ? 'ok' : 'no'
                }),
                /*#__PURE__*/ _jsx("span", {
                    style: {
                        paddingLeft: '1rem'
                    }
                }),
                /*#__PURE__*/ _jsx(ClickAwayListener, {
                    onClickAway: ()=>setOpenTooltip(false),
                    children: /*#__PURE__*/ _jsx(Tooltip, {
                        disableFocusListener: true,
                        disableHoverListener: true,
                        disableTouchListener: true,
                        title: t("AccessibilityInfo.dangerDesc"),
                        slotProps: {
                            popper: {
                                disablePortal: true
                            }
                        },
                        open: openTooltip,
                        onOpen: ()=>setOpenTooltip(true),
                        onClose: ()=>setOpenTooltip(false),
                        children: /*#__PURE__*/ _jsxs("span", {
                            onMouseDown: ()=>setOpenTooltip(true),
                            children: [
                                /*#__PURE__*/ _jsx("span", {
                                    children: t('AccessibilityInfo.danger')
                                }),
                                /*#__PURE__*/ _jsx("span", {}),
                                /*#__PURE__*/ _jsx("span", {
                                    children: /*#__PURE__*/ _jsx(QuestionMarkIcon, {
                                        fontSize: "small",
                                        sx: {
                                            verticalAlign: 'sub'
                                        }
                                    })
                                }),
                                /*#__PURE__*/ _jsx("span", {
                                    style: {
                                        color: "red"
                                    },
                                    children: /*#__PURE__*/ _jsx(Button, {
                                        onClick: onDangerPageButtonClick,
                                        children: "警告"
                                    })
                                })
                            ]
                        })
                    })
                })
            ]
        })
    });
}

// EXTERNAL MODULE: ./src/components/permissions/components/components.module.scss
var components_module = __webpack_require__(62039);
;// ./src/components/permissions/components/Components.tsx







function Components_PermissionCommonSetting() {
    const { t } = useTranslation('homepage/components/permissions/components/content');
    return /*#__PURE__*/ _jsx("span", {
        className: styles.permissionComponentsSpanPadding,
        children: /*#__PURE__*/ _jsx("button", {
            children: /*#__PURE__*/ _jsx("span", {
                children: t('Components.setting')
            })
        })
    });
}
function Components_PermissionCommonNotPass() {
    const { t } = useTranslation('homepage/components/permissions/components/content');
    return /*#__PURE__*/ _jsx(_Fragment, {
        children: /*#__PURE__*/ _jsx("span", {
            className: styles.permissionComponentsSpanPadding,
            children: t('Components.notPass')
        })
    });
}
function Components_PermissionCommonPass() {
    const { t } = useTranslation('homepage/components/permissions/components/content');
    return /*#__PURE__*/ _jsx(_Fragment, {
        children: /*#__PURE__*/ _jsx("span", {
            className: styles.permissionComponentsSpanPadding,
            children: t('Components.pass')
        })
    });
}
function Components_PermissionCommonDanger(param) {
    let { desc } = param;
    const { t } = useTranslation('homepage/components/permissions/components/content');
    const [openTooltip, setOpenTooltip] = useState(false);
    return /*#__PURE__*/ _jsx("span", {
        className: styles.danger,
        children: /*#__PURE__*/ _jsx(ClickAwayListener, {
            onClickAway: ()=>setOpenTooltip(false),
            children: /*#__PURE__*/ _jsx(Tooltip, {
                disableFocusListener: true,
                disableHoverListener: true,
                disableTouchListener: true,
                title: desc,
                slotProps: {
                    popper: {
                        disablePortal: true
                    }
                },
                open: openTooltip,
                onOpen: ()=>setOpenTooltip(true),
                onClose: ()=>setOpenTooltip(false),
                children: /*#__PURE__*/ _jsxs("span", {
                    onMouseDown: ()=>setOpenTooltip(true),
                    children: [
                        /*#__PURE__*/ _jsx("span", {
                            children: t('Components.danger')
                        }),
                        /*#__PURE__*/ _jsx("span", {}),
                        /*#__PURE__*/ _jsx("span", {
                            children: /*#__PURE__*/ _jsx(QuestionMarkIcon, {
                                fontSize: "small",
                                sx: {
                                    verticalAlign: 'sub'
                                }
                            })
                        })
                    ]
                })
            })
        })
    });
}
function Components_PermissionCommonName(param) {
    let { children } = param;
    return /*#__PURE__*/ _jsx("span", {
        children: children
    });
}
function PermissionCommonDesc(param) {
    let { children } = param;
    return /*#__PURE__*/ _jsx("span", {
        children: children
    });
}

;// ./src/components/permissions/floating/FloatingInfo.tsx






function FloatingInfo_FloatingInfo() {
    const { t } = useTranslation('homepage/components/permissions/floating/content');
    const [hasPermission, setHasPermission] = useState(floatingInfo.hasPermission());
    useEffect(()=>{
        const unlisten = tabActivity.listen((activity)=>{
            setHasPermission(floatingInfo.hasPermission());
        });
        return ()=>{
            unlisten();
        };
    }, []);
    return /*#__PURE__*/ _jsxs("div", {
        children: [
            /*#__PURE__*/ _jsx(PermissionCommonName, {
                children: t('FloatingInfo.name')
            }),
            /*#__PURE__*/ _jsx("span", {
                onClick: ()=>{
                    floatingInfo.openPermission();
                },
                children: /*#__PURE__*/ _jsx(PermissionCommonSetting, {})
            }),
            hasPermission ? /*#__PURE__*/ _jsx(PermissionCommonPass, {}) : /*#__PURE__*/ _jsx(PermissionCommonNotPass, {}),
            /*#__PURE__*/ _jsx(PermissionCommonDanger, {
                desc: t('FloatingInfo.dangerDesc')
            })
        ]
    });
}

;// ./src/components/permissions/home-page-permissions/HomePagePermissions.tsx




function HomePagePermissions_HomePagePermissions() {
    return /*#__PURE__*/ _jsxs(Box, {
        children: [
            /*#__PURE__*/ _jsx(AccessibilityInfo, {}),
            /*#__PURE__*/ _jsx(FloatingInfo, {})
        ]
    });
}

// EXTERNAL MODULE: ./src/pages/home/test-script.tsx
var test_script = __webpack_require__(33035);
// EXTERNAL MODULE: ./src/components/navbar/NavBar.tsx
var NavBar = __webpack_require__(32534);
;// ./src/components/a11y/test-a11y.tsx



function test_a11y_TestA11y() {
    function exportNode() {
        const script = "\n        com.fanfanlo.droidlib.auto.nodeoverlay.NodeOverlayController.exportPackageDataToJson();\n        ";
        autoWebViewJs.callScript(script);
    }
    function renderNodeInfo() {
        const script = "\n        com.fanfanlo.droidlib.auto.nodeoverlay.NodeOverlayController.createTaskFromJson();\n        ";
        autoWebViewJs.callScript(script);
    }
    return /*#__PURE__*/ _jsx(_Fragment, {
        children: /*#__PURE__*/ _jsxs(Box, {
            children: [
                /*#__PURE__*/ _jsx(Button, {
                    onClick: exportNode,
                    children: "导出节点"
                }),
                /*#__PURE__*/ _jsx(Button, {
                    onClick: renderNodeInfo,
                    children: "渲染节点信息"
                })
            ]
        })
    });
}

// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/Box/Box.js + 2 modules
var Box_Box = __webpack_require__(6445);
// EXTERNAL MODULE: ../../node_modules/.pnpm/next@15.3.5_@babel+core@7.28.0_babel-plugin-macros@3.1.0_react-dom@19.1.0_react@19.1.0__react@19.1.0_sass@1.89.2/node_modules/next/link.js
var next_link = __webpack_require__(97097);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: __barrel_optimize__?names=useTranslation!=!../../node_modules/.pnpm/react-i18next@15.6.0_i18next@24.2.3_typescript@5.7.3__react-dom@19.1.0_react@19.1.0__react@19.1.0_typescript@5.7.3/node_modules/react-i18next/dist/es/index.js
var dist_es = __webpack_require__(9825);
;// ./src/components/android-float/window/AndroidFloatWindowLink.tsx




function AndroidFloatWindowLink_AndroidFloatWindowLink() {
    const { t } = (0,dist_es/* useTranslation */.Bd)('homepage/components/android-float/window/content');
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(Box_Box/* default */.A, {
        sx: {
            mt: 1,
            mb: 1
        },
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Button_Button/* default */.A, {
            component: (link_default()),
            href: "/android-float-window",
            variant: "contained",
            color: "primary",
            children: t('AndroidFloatWindowLink.name')
        })
    });
}

// EXTERNAL MODULE: ./src/components/screen-recognition/TextRecognitionControl.module.css
var TextRecognitionControl_module = __webpack_require__(38532);
;// ./src/components/screen-recognition/TextRecognitionControl.tsx



// 修改：导入语句已从 './TextRecognitionControl.css' 更改为 CSS 模块


const TextRecognitionControl_fileLog = new Log/* Log */.tG(false, 'TextRecognitionControl.tsx');
/**
 * 文字识图控制组件
 *
 * 功能：
 * 1. 启动/停止屏幕识图
 * 2. 配置识图匹配规则（正则或JS函数）
 * 3. 监听识图事件和匹配事件
 * 4. 显示识图状态和匹配结果
 */ const TextRecognitionControl_TextRecognitionControl = ()=>{
    const uiLog = TextRecognitionControl_fileLog.sub(false, 'TextRecognitionControl_ui');
    const { t } = useTranslation('homepage/components/screen-recognition/content');
    // 公共事件名称
    const EVENT_RECOGNITION_STARTED = 'screen_recognition_started';
    const EVENT_RECOGNITION_START_FAILED = 'screen_recognition_start_failed';
    const EVENT_RECOGNITION_STOPPED = 'screen_recognition_stopped';
    const EVENT_RECOGNITION_STOP_FAILED = 'screen_recognition_stop_failed';
    // 私有事件名称
    const PRIVATE_EVENT_START_SUCCESS = 'text_recognition_start_success';
    const PRIVATE_EVENT_START_FAILED = 'text_recognition_start_failed';
    const PRIVATE_EVENT_STOP_SUCCESS = 'text_recognition_stop_success';
    const PRIVATE_EVENT_STOP_FAILED = 'text_recognition_stop_failed';
    // 状态
    const [isRunning, setIsRunning] = useState(false);
    const [matchResults, setMatchResults] = useState([]);
    const [useRegex, setUseRegex] = useState(true);
    const [regexPatterns, setRegexPatterns] = useState('');
    const [jsFunction, setJsFunction] = useState('');
    const [eventName, setEventName] = useState('text_matched');
    const [lastMatchedText, setLastMatchedText] = useState('');
    const [statusMessage, setStatusMessage] = useState('');
    // 处理启动识图
    const handleStart = useCallback(()=>{
        const effLog = uiLog.sub(false, 'handleStart_fn');
        effLog.info('TextRecognitionControl: 启动屏幕识图');
        try {
            // 构建匹配配置
            const config = {
                eventName: eventName
            };
            if (useRegex && regexPatterns) {
                config.regexPatterns = regexPatterns.split('\n').filter((p)=>p.trim());
            } else if (!useRegex && jsFunction) {
                config.jsFn = jsFunction;
            } else {
                setStatusMessage(t('TextRecognitionControl.errorNoConfig'));
                return;
            }
            const configJson = JSON.stringify(config);
            effLog.info('TextRecognitionControl: 配置JSON', configJson);
            // 调用 Android 接口启动识图
            const script = "\n      com.fanfanlo.lib.screenrecorder.ScreenRecognitionController.start(\n        '".concat(configJson, "',\n        '").concat(EVENT_RECOGNITION_STARTED, "',\n        '").concat(EVENT_RECOGNITION_START_FAILED, "'\n      );\n      ");
            effLog.info('TextRecognitionControl: 调用启动脚本', script);
            autoWebViewJs.callScript(script);
        } catch (error) {
            effLog.error('TextRecognitionControl: 启动异常', error);
            setStatusMessage(t('TextRecognitionControl.startException'));
        }
    }, [
        useRegex,
        regexPatterns,
        jsFunction,
        eventName,
        t
    ]);
    // 处理停止识图
    const handleStop = useCallback(()=>{
        const effLog = uiLog.sub(false, 'handleStop_fn');
        effLog.info('TextRecognitionControl: 停止屏幕识图');
        try {
            const script = "\n      com.fanfanlo.lib.screenrecorder.ScreenRecognitionController.stop('".concat(PRIVATE_EVENT_STOP_SUCCESS, "', '").concat(PRIVATE_EVENT_STOP_FAILED, "');");
            autoWebViewJs.callScript(script);
        } catch (error) {
            effLog.error('TextRecognitionControl: 停止异常', error);
            setStatusMessage(t('TextRecognitionControl.stopException'));
        }
    }, [
        t
    ]);
    // 检查识图状态
    const checkRunningStatus = useCallback(()=>{
        const effLog = uiLog.sub(false, 'checkRunningStatus_fn');
        try {
            const script = "\n      com.fanfanlo.lib.screenrecorder.ScreenRecognitionController.isRunning();";
            const { javaResultString, errMsg } = autoWebViewJs.callScript(script);
            if (errMsg) {
                effLog.warn('TextRecognitionControl: 检查状态脚本调用异常', errMsg);
                return;
            }
            const running = javaResultString === 'true';
            setIsRunning(running);
            effLog.info('TextRecognitionControl: 识图状态 -', running);
        } catch (error) {
            effLog.warn('TextRecognitionControl: 检查状态异常', error);
        }
    }, []);
    // 事件监听
    useEffect(()=>{
        const effLog = uiLog.sub(false, 'useEffect_eventListeners');
        effLog.info('TextRecognitionControl: 设置事件监听');
        // 私有事件回调
        const onPrivateStartSuccess = ()=>{
            effLog.info('TextRecognitionControl: 私有事件 - 启动成功');
            effLog.info('TextRecognitionControl: 识图已启动');
            setIsRunning(true);
            setStatusMessage(t('TextRecognitionControl.recognitionStarted'));
            setMatchResults([]);
        };
        const onPrivateStartFailed = ()=>{
            var _customEvent_detail;
            effLog.warn('TextRecognitionControl: 私有事件 - 启动失败');
            const customEvent = event;
            const error = ((_customEvent_detail = customEvent.detail) === null || _customEvent_detail === void 0 ? void 0 : _customEvent_detail.error) || '未知错误';
            effLog.error('TextRecognitionControl: 启动失败 -', error);
            setStatusMessage("".concat(t('TextRecognitionControl.startFailed'), ": ").concat(error));
        };
        const onPrivateStopSuccess = ()=>{
            effLog.info('TextRecognitionControl: 私有事件 - 停止成功');
            effLog.info('TextRecognitionControl: 识图已停止');
            setIsRunning(false);
            setStatusMessage(t('TextRecognitionControl.recognitionStopped'));
        };
        const onPrivateStopFailed = ()=>{
            var _customEvent_detail;
            effLog.warn('TextRecognitionControl: 私有事件 - 停止失败');
            const customEvent = event;
            const error = ((_customEvent_detail = customEvent.detail) === null || _customEvent_detail === void 0 ? void 0 : _customEvent_detail.error) || '未知错误';
            effLog.error('TextRecognitionControl: 停止失败 -', error);
            setStatusMessage("".concat(t('TextRecognitionControl.stopFailed'), ": ").concat(error));
        };
        // 文字匹配事件回调
        const onTextMatched = (event1)=>{
            const customEvent = event1;
            const matchData = customEvent.detail;
            effLog.info('TextRecognitionControl: 文字匹配成功 -', matchData);
            setLastMatchedText((matchData === null || matchData === void 0 ? void 0 : matchData.matchedText) || '');
            if (matchData) {
                setMatchResults((prev)=>[
                        ...prev.slice(-9),
                        matchData
                    ]);
            }
            setStatusMessage("".concat(t('TextRecognitionControl.matched'), ": ").concat(matchData === null || matchData === void 0 ? void 0 : matchData.matchedText));
        };
        // 添加事件监听
        window.addEventListener(PRIVATE_EVENT_START_SUCCESS, onPrivateStartSuccess);
        window.addEventListener(PRIVATE_EVENT_START_FAILED, onPrivateStartFailed);
        window.addEventListener(PRIVATE_EVENT_STOP_SUCCESS, onPrivateStopSuccess);
        window.addEventListener(PRIVATE_EVENT_STOP_FAILED, onPrivateStopFailed);
        window.addEventListener(eventName, onTextMatched);
        // 检查初始状态
        checkRunningStatus();
        // 清理监听
        return ()=>{
            window.removeEventListener(PRIVATE_EVENT_START_SUCCESS, onPrivateStartSuccess);
            window.removeEventListener(PRIVATE_EVENT_START_FAILED, onPrivateStartFailed);
            window.removeEventListener(PRIVATE_EVENT_STOP_SUCCESS, onPrivateStopSuccess);
            window.removeEventListener(PRIVATE_EVENT_STOP_FAILED, onPrivateStopFailed);
            window.removeEventListener(eventName, onTextMatched);
            effLog.info('TextRecognitionControl: 清理事件监听');
        };
    }, [
        eventName,
        checkRunningStatus,
        t
    ]);
    return /*#__PURE__*/ _jsx("div", {
        className: styles.textRecognitionControl,
        children: /*#__PURE__*/ _jsxs("div", {
            className: styles.controlSection,
            children: [
                /*#__PURE__*/ _jsx("h2", {
                    children: t('TextRecognitionControl.title')
                }),
                /*#__PURE__*/ _jsxs("div", {
                    className: styles.statusDisplay,
                    children: [
                        /*#__PURE__*/ _jsxs("div", {
                            className: "".concat(styles.statusIndicator, " ").concat(isRunning ? styles.running : styles.stopped),
                            children: [
                                isRunning ? '🟢' : '🔴',
                                " ",
                                isRunning ? t('TextRecognitionControl.running') : t('TextRecognitionControl.stopped')
                            ]
                        }),
                        statusMessage && /*#__PURE__*/ _jsx("div", {
                            className: styles.statusMessage,
                            children: statusMessage
                        })
                    ]
                }),
                /*#__PURE__*/ _jsxs("div", {
                    className: styles.configSection,
                    children: [
                        /*#__PURE__*/ _jsx("h3", {
                            children: t('TextRecognitionControl.matchConfig')
                        }),
                        /*#__PURE__*/ _jsxs("div", {
                            className: styles.configType,
                            children: [
                                /*#__PURE__*/ _jsxs("label", {
                                    children: [
                                        /*#__PURE__*/ _jsx("input", {
                                            type: "radio",
                                            name: "configType",
                                            checked: useRegex,
                                            onChange: ()=>setUseRegex(true)
                                        }),
                                        t('TextRecognitionControl.useRegex')
                                    ]
                                }),
                                /*#__PURE__*/ _jsxs("label", {
                                    children: [
                                        /*#__PURE__*/ _jsx("input", {
                                            type: "radio",
                                            name: "configType",
                                            checked: !useRegex,
                                            onChange: ()=>setUseRegex(false)
                                        }),
                                        t('TextRecognitionControl.useJsFunction')
                                    ]
                                })
                            ]
                        }),
                        useRegex && /*#__PURE__*/ _jsxs("div", {
                            className: styles.regexConfig,
                            children: [
                                /*#__PURE__*/ _jsx("label", {
                                    children: t('TextRecognitionControl.regexPatterns')
                                }),
                                /*#__PURE__*/ _jsx("textarea", {
                                    value: regexPatterns,
                                    className: styles.inputField,
                                    onChange: (e)=>setRegexPatterns(e.target.value),
                                    placeholder: t('TextRecognitionControl.regexPlaceholder'),
                                    rows: 4
                                })
                            ]
                        }),
                        !useRegex && /*#__PURE__*/ _jsxs("div", {
                            className: styles.jsConfig,
                            children: [
                                /*#__PURE__*/ _jsx("label", {
                                    children: t('TextRecognitionControl.jsFunction')
                                }),
                                /*#__PURE__*/ _jsx("textarea", {
                                    className: styles.inputField,
                                    value: jsFunction,
                                    onChange: (e)=>setJsFunction(e.target.value),
                                    placeholder: t('TextRecognitionControl.jsFunctionPlaceholder'),
                                    rows: 4
                                })
                            ]
                        }),
                        /*#__PURE__*/ _jsxs("div", {
                            className: styles.eventNameConfig,
                            children: [
                                /*#__PURE__*/ _jsx("label", {
                                    children: t('TextRecognitionControl.eventName')
                                }),
                                /*#__PURE__*/ _jsx("input", {
                                    className: styles.inputField,
                                    type: "text",
                                    value: eventName,
                                    onChange: (e)=>setEventName(e.target.value),
                                    placeholder: t('TextRecognitionControl.eventNamePlaceholder')
                                })
                            ]
                        })
                    ]
                }),
                /*#__PURE__*/ _jsxs("div", {
                    className: styles.buttonGroup,
                    children: [
                        /*#__PURE__*/ _jsx("button", {
                            onClick: handleStart,
                            disabled: isRunning,
                            className: styles.btnStart,
                            children: t('TextRecognitionControl.startButton')
                        }),
                        /*#__PURE__*/ _jsx("button", {
                            onClick: handleStop,
                            disabled: !isRunning,
                            className: styles.btnStop,
                            children: t('TextRecognitionControl.stopButton')
                        })
                    ]
                }),
                lastMatchedText && /*#__PURE__*/ _jsxs("div", {
                    className: styles.matchResult,
                    children: [
                        /*#__PURE__*/ _jsx("h3", {
                            children: t('TextRecognitionControl.lastMatched')
                        }),
                        /*#__PURE__*/ _jsx("div", {
                            className: styles.matchedText,
                            children: lastMatchedText
                        })
                    ]
                }),
                matchResults.length > 0 && /*#__PURE__*/ _jsxs("div", {
                    className: styles.historyResults,
                    children: [
                        /*#__PURE__*/ _jsx("h3", {
                            children: t('TextRecognitionControl.matchHistory')
                        }),
                        /*#__PURE__*/ _jsx("div", {
                            className: styles.resultsList,
                            children: matchResults.map((result, index)=>/*#__PURE__*/ _jsxs("div", {
                                    className: styles.resultItem,
                                    children: [
                                        /*#__PURE__*/ _jsx("span", {
                                            className: styles.resultText,
                                            children: result.matchedText
                                        }),
                                        /*#__PURE__*/ _jsxs("span", {
                                            className: styles.resultPosition,
                                            children: [
                                                "[",
                                                result.startIndex,
                                                ", ",
                                                result.endIndex,
                                                "]"
                                            ]
                                        })
                                    ]
                                }, index))
                        })
                    ]
                })
            ]
        })
    });
};

// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/Stack/Stack.js + 1 modules
var Stack = __webpack_require__(9220);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/Typography/Typography.js
var Typography = __webpack_require__(67079);
// EXTERNAL MODULE: ../../libs/droid/android/src/android/scripts/store/store.ts
var store = __webpack_require__(5123);
// EXTERNAL MODULE: ../../libs/droid/android/src/android/is-in-android.ts
var is_in_android = __webpack_require__(63149);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/Dialog/Dialog.js + 1 modules
var Dialog = __webpack_require__(49280);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/DialogTitle/DialogTitle.js
var DialogTitle = __webpack_require__(3711);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/DialogContent/DialogContent.js + 1 modules
var DialogContent = __webpack_require__(18244);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/TextField/TextField.js + 1 modules
var TextField = __webpack_require__(38771);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/DialogContentText/DialogContentText.js + 1 modules
var DialogContentText = __webpack_require__(33899);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/DialogActions/DialogActions.js + 1 modules
var DialogActions = __webpack_require__(69468);
;// ./src/components/notification-listener/intf.ts
const createDefServerStatus = ()=>({
        running: false,
        port: 6001,
        clientCount: 0,
        socketEnabled: false,
        connectedClients: 0,
        ipv4: [],
        ipv6: []
    });

;// ./src/components/notification-listener/ScanQRCodeButton.tsx




function ScaneQRCodeButton() {
    const { t } = (0,es/* useTranslation */.Bd)('homepage/components/notification-listener/content');
    function onClick() {
        const script = "\n        com.fanfanlo.lib.notification.NotificationScanQRCode.scanQRCode()\n        ";
        AutoWebViewJs/* autoWebViewJs */.yx.callScript(script);
    }
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(jsx_runtime.Fragment, {
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Button_Button/* default */.A, {
            variant: "outlined",
            onClick: onClick,
            children: t("ScaneQRCodeButton.name")
        })
    });
}

;// ./src/components/notification-listener/SettingPanel.tsx







const SettingPanel_fileLog = new Log/* Log */.tG(false, "SettingPanel_file");
SettingPanel_fileLog.childrenPaused = true;
SettingPanel_fileLog.pause = true;
function SettingPanel(props) {
    const uiLog = SettingPanel_fileLog.sub(false, "  SettingPanel_ui");
    uiLog.childrenPaused = true;
    uiLog.pause = true;
    const { t } = (0,es/* useTranslation */.Bd)('homepage/components/notification-listener/content');
    const { open, onClose } = props;
    const [initialSetting, setInitialSetting] = (0,react.useState)(createDefServerStatus());
    const [portInput, setPortInput] = (0,react.useState)('6001'); // 设置默认值
    const [portError, setPortError] = (0,react.useState)('');
    function checkUpdateSetting() {
        uiLog.log('checkUpdateSetting_fn');
        if (portError) {
            uiLog.warn('Port has an error, skipping update.');
            return;
        }
        const currentSetting = createDefServerStatus();
        const settingBase64 = store/* autoJsStoreUtils */.b.btoaUtf8(JSON.stringify(currentSetting));
        const script = "\n        com.fanfanlo.lib.notification.NotificationSocketServer.updateSettingBase64('".concat(settingBase64, "');\n        ");
        uiLog.log('Calling updateSettingBase64 with script:', script);
        const { errMsg } = AutoWebViewJs/* autoWebViewJs */.yx.callScript(script);
        if (errMsg) {
            uiLog.error('updateSettingBase64 error:', errMsg);
        }
    }
    (0,react.useEffect)(()=>{
        uiLog.log('useEffect_fn, open changed:', open);
        if (open) {
            const script = "\n            var s = com.fanfanlo.lib.notification.NotificationSocketServer.getStatus();\n            s;";
            const { javaResultString, errMsg } = AutoWebViewJs/* autoWebViewJs */.yx.callScript(script);
            if (errMsg) {
                uiLog.error('getStatus error:', errMsg);
                return;
            }
            let str = javaResultString || '' // autoJsStoreUtils.atobUtf8(javaResultString || '');
            ;
            if (!str) {
                if (is_in_android/* isRealInAndroid */.nd) {
                    uiLog.error('atobUtf8 result empty, javaResultString=', javaResultString);
                    return;
                } else {
                    str = "";
                }
            }
            const storedSetting = JSON.parse(str || '{}');
            setInitialSetting(storedSetting);
            // 确保 port 有值，否则使用默认值 6001
            const port = storedSetting.port || 6001;
            setPortInput(String(port));
            setPortError('');
        }
    }, [
        open
    ]);
    const handlePortChange = (event)=>{
        const value = event.target.value;
        // 确保值不为空
        if (value === '') {
            setPortInput('');
            setPortError(t('SettingPanel.portRangeError'));
            return;
        }
        setPortInput(value);
        const portNum = Number(value);
        if (!Number.isInteger(portNum) || portNum <= 1024 || portNum > 65535) {
            setPortError(t('SettingPanel.portRangeError'));
        } else {
            setPortError('');
        }
    };
    // “使用”按钮的点击事件处理器
    const handleApply = ()=>{
        uiLog.log('handleApply_fn');
        checkUpdateSetting(); // 保存设置
        onClose(); // 关闭对话框
    };
    const handleInputFocus = (event)=>{
        setTimeout(()=>{
            event.target.scrollIntoView({
                behavior: 'smooth',
                block: 'center'
            });
        }, 300);
    };
    return(// Dialog 的 onClose 直接使用父组件的 onClose，不执行任何保存操作
    /*#__PURE__*/ (0,jsx_runtime.jsxs)(Dialog/* default */.A, {
        open: open,
        onClose: onClose,
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(DialogTitle/* default */.A, {
                children: t('SettingPanel.modalTitle')
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(DialogContent/* default */.A, {
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(ScaneQRCodeButton, {})
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)(DialogContent/* default */.A, {
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(TextField/* default */.A, {
                        margin: "dense",
                        id: "port",
                        label: t('SettingPanel.portLabel'),
                        type: "number",
                        fullWidth: true,
                        variant: "standard",
                        value: portInput,
                        onChange: handlePortChange,
                        onFocus: handleInputFocus,
                        error: !!portError,
                        helperText: portError,
                        inputProps: {
                            min: 1025,
                            max: 65535
                        }
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(DialogContentText/* default */.A, {
                        sx: {
                            mt: 2
                        },
                        children: t('SettingPanel.description')
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(DialogContentText/* default */.A, {
                        color: "error",
                        sx: {
                            mt: 2
                        },
                        children: t('SettingPanel.riskWarning')
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)(DialogActions/* default */.A, {
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Button_Button/* default */.A, {
                        onClick: onClose,
                        children: t('SettingPanel.cancelButton')
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Button_Button/* default */.A, {
                        onClick: handleApply,
                        disabled: !!portError,
                        children: t('SettingPanel.applyButton')
                    })
                ]
            })
        ]
    }));
}

// EXTERNAL MODULE: ../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/lodash.js
var lodash = __webpack_require__(63624);
var lodash_default = /*#__PURE__*/__webpack_require__.n(lodash);
;// ./src/components/permissions/notification/NotificationSettingButton.tsx




function NotificationSettingButton() {
    const { t } = (0,es/* useTranslation */.Bd)('homepage/components/permissions/notification/content');
    function openSettings() {
        const script = "\n                com.fanfanlo.lib.notification.NotificationReader.openNotificationAccessSettings()\n                ";
        console.log('call opensettings');
        AutoWebViewJs/* autoWebViewJs */.yx.callScript(script);
    }
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(Button_Button/* default */.A, {
        onClick: openSettings,
        children: t('NotificationSettingButton.setting')
    });
}

;// ./src/components/notification-listener/NotificationListenerPanel.tsx








const NotificationListenerPanel_fileLog = new Log/* Log */.tG(false, 'NotificationListenerPanel_file');
NotificationListenerPanel_fileLog.childrenPaused = true;
NotificationListenerPanel_fileLog.pause = true;
const SERVER_CLIENT_NUM_UPDATED = 'serverClientNumUpdated';
function NotificationReadable() {
    const uiLog = NotificationListenerPanel_fileLog.sub(false, '  NotificationReadable_ui');
    uiLog.pause = true;
    uiLog.childrenPaused = true;
    const { t } = (0,es/* useTranslation */.Bd)('homepage/components/notification-listener/content');
    const [readable, setReadable] = (0,react.useState)(false);
    function refresh() {
        const fnLog = uiLog.sub(false, '    refresh_fn');
        fnLog.pause = true;
        fnLog.log('Checking if notification listener service is connected and readable');
        const script = "\n        com.fanfanlo.lib.notification.MyNotificationListenerService.readIsConnected()\n    ";
        const { javaResultData, javaResultString, errMsg } = AutoWebViewJs/* autoWebViewJs */.yx.callScript(script);
        fnLog.log("Script result: javaResultData=".concat(javaResultData, ", javaResultString=").concat(javaResultString, ", errMsg=").concat(errMsg));
        if (errMsg) {
            setReadable(false);
            return;
        }
        setReadable(javaResultString === 'true');
    }
    (0,react.useEffect)(()=>{
        refresh();
    });
    (0,react.useEffect)(()=>{
        const effLog = uiLog.sub(false, '  useEffect_eventListener');
        effLog.pause = true;
        function onConnected() {
            setReadable(true);
            effLog.log('onConnected_event');
        }
        function onDisconnected() {
            setReadable(false);
            effLog.log('onDisconnected_event');
        }
        effLog.log('Setting up event listeners for notification listener service connection status');
        const EVENT_TYPE_CONNECTED = 'notificationListenServiceConnected';
        const EVENT_TYPE_DISCONNECTED = 'notificationListenServiceDisconnected';
        const EVENT_TYPE_CONNECT_CHANGED = 'notificationListenServiceConnectChanged';
        window.addEventListener(EVENT_TYPE_CONNECTED, onConnected);
        window.addEventListener(EVENT_TYPE_DISCONNECTED, onDisconnected);
        return ()=>{
            window.removeEventListener(EVENT_TYPE_CONNECTED, onConnected);
            window.removeEventListener(EVENT_TYPE_DISCONNECTED, onDisconnected);
            effLog.log('Cleaned up event listeners for notification listener service connection status');
        };
    }, []);
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(Stack/* default */.A, {
        direction: "row",
        spacing: 2,
        alignItems: "center",
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsxs)(Typography/* default */.A, {
                variant: "body2",
                color: "text.secondary",
                sx: {
                    flexShrink: 0
                },
                children: [
                    t('NotificationListenerPanel.notificationReadable'),
                    readable ? t('NotificationListenerPanel.notificationReadableYes') : t('NotificationListenerPanel.notificationReadableNo')
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(NotificationSettingButton, {})
        ]
    });
}
function SocketServerSwitch() {
    const uiLog = NotificationListenerPanel_fileLog.sub(false, '  SocketServerSwitch_ui');
    const { t } = (0,es/* useTranslation */.Bd)('homepage/components/notification-listener/content');
    const [isRunning, setIsRunning] = (0,react.useState)(false);
    function refresh() {
        const fnLog = uiLog.sub(false, '    refresh_fn');
        fnLog.log('Checking if socket server is running');
        const script = "\n      com.fanfanlo.lib.notification.NotificationSocketServer.serverIsRunning()\n    ";
        const { javaResultData, javaResultString, errMsg } = AutoWebViewJs/* autoWebViewJs */.yx.callScript(script);
        fnLog.log("NotificationSocketServer.serverIsRunning Script result: javaResultData=".concat(javaResultData, ", javaResultString=").concat(javaResultString, ", errMsg=").concat(errMsg));
        if (errMsg) {
            setIsRunning(false);
            return;
        }
        setIsRunning(javaResultString === 'true');
    }
    function handleStart() {
        const fnLog = uiLog.sub(false, '    handleStart_fn');
        fnLog.log('Starting socket server');
        const notificationTitle = t('NotificationListenerPanel.foregroundService.title');
        const notificationContent = t('NotificationListenerPanel.foregroundService.content');
        const requestReason = t('NotificationListenerPanel.foregroundService.reason');
        const script = '\n      var notificationTitle = "'.concat(notificationTitle.replace(/"/g, '\\"'), '";\n      var notificationContent = "').concat(notificationContent.replace(/"/g, '\\"'), '";\n      var requestReason = ').concat(JSON.stringify(requestReason), ";\n\n      com.fanfanlo.lib.notification.NotificationSocketServer.start(\n        notificationTitle,\n        notificationContent,\n        requestReason\n      );\n    ");
        const result = AutoWebViewJs/* autoWebViewJs */.yx.callScript(script);
        if (result.errMsg) {
            fnLog.error('Failed to start server:', result.errMsg);
            return;
        }
        fnLog.log('Server start request sent');
    }
    function handleStop() {
        const fnLog = uiLog.sub(false, '    handleStop_fn');
        fnLog.log('Stopping socket server');
        const script = 'com.fanfanlo.lib.notification.NotificationSocketServer.stop();';
        const result = AutoWebViewJs/* autoWebViewJs */.yx.callScript(script);
        if (result.errMsg) {
            fnLog.error('Failed to stop server:', result.errMsg);
            return;
        }
        fnLog.log('Server stopped');
    }
    function handleToggle() {
        if (isRunning) {
            handleStop();
        } else {
            handleStart();
        }
    }
    (0,react.useEffect)(()=>{
        refresh();
    }, []);
    (0,react.useEffect)(()=>{
        const effLog = uiLog.sub(false, '  useEffect_socketServerEvents');
        const EVENT_SWITCHED = 'notification_socket_server_switched';
        const EVENT_SWITCH_ON = 'notification_socket_server_switch_on';
        const EVENT_SWITCH_OFF = 'notification_socket_server_switch_off';
        function onSwitched(event) {
            var _customEvent_detail;
            const customEvent = event;
            const isOn = customEvent.detail === true || ((_customEvent_detail = customEvent.detail) === null || _customEvent_detail === void 0 ? void 0 : _customEvent_detail.data) === true;
            effLog.log('notificationSocketServerSwitched Socket server switched:', isOn);
            setIsRunning(isOn);
        }
        function onSwitchOn() {
            effLog.log('notificationSocketServerSwitched Socket server switched on');
            setIsRunning(true);
        }
        function onSwitchOff() {
            effLog.log('notificationSocketServerSwitched Socket server switched off');
            setIsRunning(false);
        }
        effLog.log('Setting up event listeners for socket server status');
        window.addEventListener(EVENT_SWITCHED, onSwitched);
        window.addEventListener(EVENT_SWITCH_ON, onSwitchOn);
        window.addEventListener(EVENT_SWITCH_OFF, onSwitchOff);
        return ()=>{
            window.removeEventListener(EVENT_SWITCHED, onSwitched);
            window.removeEventListener(EVENT_SWITCH_ON, onSwitchOn);
            window.removeEventListener(EVENT_SWITCH_OFF, onSwitchOff);
            effLog.log('Cleaned up event listeners for socket server status');
        };
    }, []);
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(Stack/* default */.A, {
        direction: "row",
        spacing: 2,
        alignItems: "center",
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsxs)(Typography/* default */.A, {
                variant: "body2",
                color: "text.secondary",
                sx: {
                    flexShrink: 0
                },
                children: [
                    t('NotificationListenerPanel.socketServerStatus'),
                    isRunning ? t('NotificationListenerPanel.socketServerRunning') : t('NotificationListenerPanel.socketServerStopped')
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Button_Button/* default */.A, {
                variant: "contained",
                color: isRunning ? 'error' : 'primary',
                onClick: handleToggle,
                size: "small",
                children: isRunning ? t('NotificationListenerPanel.socketServerStopButton') : t('NotificationListenerPanel.socketServerStartButton')
            })
        ]
    });
}
function NotificationListenerPanel_NotificationListenerPanel() {
    const uiLog = NotificationListenerPanel_fileLog.sub(false, '  NotificationListenerPanel_ui');
    const { t } = (0,es/* useTranslation */.Bd)('homepage/components/notification-listener/content');
    // 控制设置弹窗的显示和隐藏
    const [isSettingPanelOpen, setIsSettingPanelOpen] = (0,react.useState)(false);
    const [serverStatus, setServerStatus] = (0,react.useState)({
        running: false,
        port: 0,
        clientCount: 0,
        socketEnabled: false,
        connectedClients: 0
    });
    // 从 serverStatus 派生 isListenerEnabled 状态
    const isListenerEnabled = Boolean(serverStatus === null || serverStatus === void 0 ? void 0 : serverStatus.running);
    function readServerClientNum() {
        refreshServerStatus();
    }
    (0,react.useEffect)(()=>{
        window.addEventListener(SERVER_CLIENT_NUM_UPDATED, readServerClientNum);
        return ()=>{
            window.removeEventListener(SERVER_CLIENT_NUM_UPDATED, readServerClientNum);
        };
    });
    function refreshServerStatus() {
        const script = "\n    const s = com.fanfanlo.lib.notification.NotificationSocketServer.getStatus();\n    s;";
        const { javaResultData, javaResultString, errMsg } = AutoWebViewJs/* autoWebViewJs */.yx.callScript(script);
        if (errMsg) {
            uiLog.error('getStatus error:', errMsg);
            return;
        }
        uiLog.log('getStatus result:', javaResultString);
        const status = lodash_default().isObject(javaResultData) ? javaResultData : JSON.parse(javaResultString || '{}');
        setServerStatus((prev)=>({
                ...prev,
                ...status,
                // 确保所有必要的字段都有默认值
                running: typeof status.running === 'boolean' ? status.running : prev.running,
                connectedClients: typeof status.connectedClients === 'number' ? status.connectedClients : prev.connectedClients
            }));
    }
    (0,react.useEffect)(()=>{
        refreshServerStatus();
    }, []);
    const handleSwitchChange = (event)=>{
        uiLog.log('handleSwitchChange_fn, checked:', event.target.checked);
        const checked = event.target.checked;
        // 立即更新本地 UI 状态以提供即时反馈
        setServerStatus((prev)=>({
                ...prev,
                running: checked
            }));
        try {
            if (checked) {
                // 启动服务 - 传递前台服务参数
                const notificationTitle = t('NotificationListenerPanel.foregroundService.title');
                const notificationContent = t('NotificationListenerPanel.foregroundService.content');
                const requestReason = t('NotificationListenerPanel.foregroundService.reason');
                uiLog.log('Starting notification listener with foreground service:', {
                    notificationTitle,
                    notificationContent,
                    requestReason
                });
                const script = '\n          var notificationTitle = "'.concat(notificationTitle.replace(/"/g, '\\"'), '";\n          var notificationContent = "').concat(notificationContent.replace(/"/g, '\\"'), '";\n          var requestReason = ').concat(JSON.stringify(requestReason), ";\n\n          com.fanfanlo.lib.notification.NotificationSocketServer.start(\n            notificationTitle,\n            notificationContent,\n            requestReason\n          );\n        ");
                const result = AutoWebViewJs/* autoWebViewJs */.yx.callScript(script);
                if (result.errMsg) {
                    throw new Error(result.errMsg);
                }
                uiLog.log('Foreground service request sent, waiting for user authorization');
                // 可选: 监听前台服务授权结果
                const eventName = 'notification_socket_server_foreground_event';
                const handleForegroundEvent = (event)=>{
                    const customEvent = event;
                    const data = customEvent.detail;
                    uiLog.log('Foreground service event:', data);
                    if (data.status === 'SUCCESS') {
                        uiLog.log('Foreground service authorized, server started');
                        refreshServerStatus();
                    } else if (data.status === 'ABORT') {
                        uiLog.warn('User rejected foreground service request');
                        // 回滚状态
                        setServerStatus((prev)=>({
                                ...prev,
                                running: false
                            }));
                    } else if (data.status === 'FAILURE') {
                        uiLog.error('Foreground service request failed');
                        setServerStatus((prev)=>({
                                ...prev,
                                running: false
                            }));
                    }
                    // 移除监听
                    window.removeEventListener(eventName, handleForegroundEvent);
                };
                window.addEventListener(eventName, handleForegroundEvent);
            } else {
                // 停止服务
                const script = 'com.fanfanlo.lib.notification.NotificationSocketServer.stop();';
                const result = AutoWebViewJs/* autoWebViewJs */.yx.callScript(script);
                if (result.errMsg) {
                    throw new Error(result.errMsg);
                }
                setIsSettingPanelOpen(false);
            }
        } catch (error) {
            uiLog.error('Failed to toggle notification listener:', error);
            // 如果调用失败，回滚状态
            setServerStatus((prev)=>({
                    ...prev,
                    running: !checked
                }));
        }
    };
    const handleOpenSettingPanel = ()=>{
        uiLog.log('handleOpenSettingPanel_fn');
        setIsSettingPanelOpen(true);
    };
    const handleCloseSettingPanel = ()=>{
        uiLog.log('handleCloseSettingPanel_fn');
        setIsSettingPanelOpen(false);
    };
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(Stack/* default */.A, {
        direction: "column",
        spacing: 2,
        sx: {
            width: '100%',
            border: '1px solid',
            borderColor: 'grey.300',
            borderRadius: '3px',
            p: 1
        },
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsxs)(Stack/* default */.A, {
                direction: "row",
                spacing: 2,
                alignItems: "center",
                sx: {
                    width: '100%'
                },
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.A, {
                        variant: "h6",
                        sx: {
                            flexShrink: 0
                        },
                        children: t('NotificationListenerPanel.title')
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Button_Button/* default */.A, {
                        variant: "outlined",
                        onClick: handleOpenSettingPanel,
                        children: t('NotificationListenerPanel.settingsButtonLabel')
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(SettingPanel, {
                        open: isSettingPanelOpen,
                        onClose: handleCloseSettingPanel
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Box_Box/* default */.A, {
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(NotificationReadable, {})
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)(Stack/* default */.A, {
                direction: "row",
                spacing: 2,
                alignItems: "center",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)(Typography/* default */.A, {
                        variant: "body1",
                        sx: {},
                        children: [
                            t('NotificationListenerPanel.clientsNum'),
                            " ",
                            serverStatus.connectedClients
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(SocketServerSwitch, {})
                ]
            })
        ]
    });
}

// EXTERNAL MODULE: ../../libs/fanfanlo/src/nextjs/env/env.ts
var env = __webpack_require__(49210);
// EXTERNAL MODULE: ../../libs/droid/project-interface/src/storage/storage.ts
var storage = __webpack_require__(31232);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/List/List.js + 1 modules
var List = __webpack_require__(90535);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/ListItem/ListItem.js + 3 modules
var ListItem = __webpack_require__(60889);
// EXTERNAL MODULE: ../../libs/droid/project-interface/src/project/IProject.data.ts
var IProject_data = __webpack_require__(73675);
// EXTERNAL MODULE: ../../libs/droid/project-interface/src/project/ProjectCategory.ts
var ProjectCategory = __webpack_require__(82944);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/Grid2/Grid2.js + 4 modules
var Grid2 = __webpack_require__(95771);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/Card/Card.js + 1 modules
var Card = __webpack_require__(88049);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/CardActionArea/CardActionArea.js + 1 modules
var CardActionArea = __webpack_require__(34638);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/CardContent/CardContent.js + 1 modules
var CardContent = __webpack_require__(65371);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+icons-material@6.4.12_@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_re_5ewkm5t5g27pzq5tz62v6ktvti/node_modules/@mui/icons-material/esm/FlashOn.js
var FlashOn = __webpack_require__(55875);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+icons-material@6.4.12_@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_re_5ewkm5t5g27pzq5tz62v6ktvti/node_modules/@mui/icons-material/esm/Code.js
var Code = __webpack_require__(70974);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+icons-material@6.4.12_@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_re_5ewkm5t5g27pzq5tz62v6ktvti/node_modules/@mui/icons-material/esm/AccountTree.js
var AccountTree = __webpack_require__(70695);
;// ../../libs/droid/project/src/project/ui/components/ProjectCategorySelectDialog.tsx








const ProjectCategorySelectDialog_fileLog = new Log/* Log */.tG(true, 'ProjectCategorySelectDialog');
ProjectCategorySelectDialog_fileLog.pause = false;
// 图标映射
const categoryIcons = {
    [ProjectCategory/* ProjectCategory */.U2.QuickAction]: /*#__PURE__*/ (0,jsx_runtime.jsx)(FlashOn/* default */.A, {
        sx: {
            fontSize: 48,
            color: 'primary.main'
        }
    }),
    [ProjectCategory/* ProjectCategory */.U2.ScriptRunner]: /*#__PURE__*/ (0,jsx_runtime.jsx)(Code/* default */.A, {
        sx: {
            fontSize: 48,
            color: 'primary.main'
        }
    }),
    [ProjectCategory/* ProjectCategory */.U2.Workflow]: /*#__PURE__*/ (0,jsx_runtime.jsx)(AccountTree/* default */.A, {
        sx: {
            fontSize: 48,
            color: 'primary.main'
        }
    })
};
/**
 * 项目类别选择对话框
 */ const ProjectCategorySelectDialog = (param)=>{
    let { open, onClose, onSelect } = param;
    const { t } = (0,dist_es/* useTranslation */.Bd)("droid-project/project/ui/components/content");
    ProjectCategorySelectDialog_fileLog.log("[ProjectCategorySelectDialog] 渲染, open=".concat(open));
    const projectCategories = [
        ProjectCategory/* ProjectCategory */.U2.QuickAction,
        ProjectCategory/* ProjectCategory */.U2.ScriptRunner,
        ProjectCategory/* ProjectCategory */.U2.Workflow
    ];
    const handleSelect = (category)=>{
        ProjectCategorySelectDialog_fileLog.log("[ProjectCategorySelectDialog] 选择类别: ".concat(category));
        onSelect(category);
    };
    const handleClose = ()=>{
        ProjectCategorySelectDialog_fileLog.log("[ProjectCategorySelectDialog] 关闭对话框");
        onClose();
    };
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(Dialog/* default */.A, {
        open: open,
        onClose: handleClose,
        maxWidth: "sm",
        fullWidth: true,
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(DialogTitle/* default */.A, {
                children: t('ProjectCategorySelectDialog.title')
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(DialogContent/* default */.A, {
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Grid2/* default */.A, {
                    container: true,
                    spacing: 2,
                    sx: {
                        pt: 1
                    },
                    children: projectCategories.map((category)=>{
                        const config = ProjectCategory/* PROJECT_CATEGORY_CONFIGS */.v8[category];
                        ProjectCategorySelectDialog_fileLog.log("[ProjectCategorySelectDialog] 渲染类别卡片: ".concat(category, ", config="), JSON.stringify(config));
                        return /*#__PURE__*/ (0,jsx_runtime.jsx)(Grid2/* default */.A, {
                            size: {
                                xs: 12,
                                sm: 4
                            },
                            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Card/* default */.A, {
                                sx: {
                                    height: '100%',
                                    '&:hover': {
                                        boxShadow: 4
                                    }
                                },
                                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(CardActionArea/* default */.A, {
                                    onClick: ()=>handleSelect(category),
                                    sx: {
                                        height: '100%',
                                        p: 2
                                    },
                                    children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(CardContent/* default */.A, {
                                        sx: {
                                            textAlign: 'center',
                                            p: 0
                                        },
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime.jsx)(Box_Box/* default */.A, {
                                                sx: {
                                                    mb: 1
                                                },
                                                children: categoryIcons[category]
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.A, {
                                                variant: "h6",
                                                gutterBottom: true,
                                                children: t(config.labelKey)
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.A, {
                                                variant: "body2",
                                                color: "text.secondary",
                                                children: t(config.descriptionKey)
                                            })
                                        ]
                                    })
                                })
                            })
                        }, category);
                    })
                })
            })
        ]
    });
};

// EXTERNAL MODULE: ../../libs/droid/project/src/iproject/actions/script/script-action/IActionScript.inft.tsx + 3 modules
var IActionScript_inft = __webpack_require__(26933);
;// ../../libs/droid/project/src/project/ui/components/CreateProjectButton.tsx









const CreateProjectButton_fileLog = new Log/* Log */.tG(true, 'CreateProjectButton');
CreateProjectButton_fileLog.pause = false;
const CreateProjectButton = ()=>{
    const { t } = (0,dist_es/* useTranslation */.Bd)("droid-project/project/ui/components/content");
    const router = (0,next_router.useRouter)();
    const [dialogOpen, setDialogOpen] = (0,react.useState)(false);
    CreateProjectButton_fileLog.log("[CreateProjectButton] 渲染, dialogOpen=".concat(dialogOpen));
    const handleOpenDialog = ()=>{
        CreateProjectButton_fileLog.log("[CreateProjectButton] 打开类别选择对话框");
        setDialogOpen(true);
    };
    const handleCloseDialog = ()=>{
        CreateProjectButton_fileLog.log("[CreateProjectButton] 关闭类别选择对话框");
        setDialogOpen(false);
    };
    const handleSelectCategory = async (category)=>{
        CreateProjectButton_fileLog.log("[CreateProjectButton] 用户选择类别: ".concat(category));
        const project = (0,IProject_data/* createProjectByCategory */.ZX)(category);
        CreateProjectButton_fileLog.log("[CreateProjectButton] 创建 project, id=".concat(project.id, ", category=").concat(project.category));
        // 如果是 ScriptRunner，添加一个 script action
        if (category === ProjectCategory/* ProjectCategory */.U2.ScriptRunner) {
            CreateProjectButton_fileLog.log("[CreateProjectButton] ScriptRunner: 添加 script action");
            const actionGroup = project.triggerActionGroup.list[0].actionGroup;
            CreateProjectButton_fileLog.log("[CreateProjectButton] actionGroup.list.length before: ".concat(actionGroup.list.length));
            const scriptAction = IActionScript_inft/* actionScriptUtils */.x.createDefaultData();
            CreateProjectButton_fileLog.log("[CreateProjectButton] 创建 scriptAction:", JSON.stringify(scriptAction));
            actionGroup.list.push(scriptAction);
            CreateProjectButton_fileLog.log("[CreateProjectButton] actionGroup.list.length after: ".concat(actionGroup.list.length));
        }
        storage/* projectStore */.D.addDraft(project);
        CreateProjectButton_fileLog.log("[CreateProjectButton] project 已添加到 draft store");
        // 构建跳转路径
        let path = "/project-editor?id=".concat(project.id);
        // 如果是 QuickAction，添加 isNew 参数，用于在编辑器中判断是否需要跳转到 action-list
        if (category === ProjectCategory/* ProjectCategory */.U2.QuickAction) {
            path += '&isNew=true';
            CreateProjectButton_fileLog.log("[CreateProjectButton] QuickAction: 添加 isNew 参数");
        }
        CreateProjectButton_fileLog.log("[CreateProjectButton] 准备跳转到: ".concat(path));
        await router.prefetch(path);
        router.push(path);
        setDialogOpen(false);
    };
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("span", {
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Button_Button/* default */.A, {
                "data-id": "create-project-button.b79975b3-cc10-4e3e-bc05-478a98c925b5",
                "data-typeof-create-project-id": "create-project-btn-from-ui-components-create-project-button",
                id: "typeof-create-project-id-create-project-btn-from-ui-components-create-project-button",
                onClick: handleOpenDialog,
                children: t('content.create')
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(ProjectCategorySelectDialog, {
                open: dialogOpen,
                onClose: handleCloseDialog,
                onSelect: handleSelectCategory
            })
        ]
    });
};

// EXTERNAL MODULE: ../../libs/droid/project-interface/src/utils/IChildToProject.intf.ts
var IChildToProject_intf = __webpack_require__(14209);
// EXTERNAL MODULE: ../../libs/droid/project-interface/src/common/project-contexts.tsx
var project_contexts = __webpack_require__(55081);
;// ../../libs/droid/project/src/project/utils/projectUtils.ts
const projectUtils = {
    getProjectName: (project)=>{
        return (project === null || project === void 0 ? void 0 : project.localName) || (project === null || project === void 0 ? void 0 : project.name) || (project === null || project === void 0 ? void 0 : project.id.slice((project === null || project === void 0 ? void 0 : project.id.length) - 8)) || '';
    }
};

// EXTERNAL MODULE: ../../libs/droid/project/src/project/utils/runProject.ts + 6 modules
var runProject = __webpack_require__(97608);
// EXTERNAL MODULE: ../../libs/fanfanlo/src/mui/dialog/ButtonConfirm.tsx
var ButtonConfirm = __webpack_require__(56257);
;// ../../libs/droid/project/src/project/ui/components/DeleteProjectButton.tsx






function DeleteProjectButton() {
    const { t } = (0,dist_es/* useTranslation */.Bd)("droid-project/project/ui/components/content");
    const project = (0,react.useContext)(project_contexts/* ProjectContext */.vz);
    const projectId = project.id;
    const handleDelete = ()=>{
        storage/* projectStore */.D.deleteProject(projectId);
    };
    const content = /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box_Box/* default */.A, {
        style: {
            textAlign: 'center'
        },
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                style: {
                    color: "#FF0000"
                },
                children: project.name
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)("br", {}),
            /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                children: t('content.confirmDelete')
            })
        ]
    });
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(jsx_runtime.Fragment, {
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(ButtonConfirm/* ButtonConfirm */.b, {
            title: t('content.title'),
            content: content,
            onConfirm: handleDelete,
            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Button_Button/* default */.A, {
                id: "project-simple-title-list-del-btn",
                "data-id": "project-simple-title-list-del-btn",
                children: t('content.delete')
            })
        })
    });
}

// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+icons-material@6.4.12_@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_re_5ewkm5t5g27pzq5tz62v6ktvti/node_modules/@mui/icons-material/esm/PlayArrow.js
var PlayArrow = __webpack_require__(22503);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+icons-material@6.4.12_@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_re_5ewkm5t5g27pzq5tz62v6ktvti/node_modules/@mui/icons-material/esm/Stop.js
var Stop = __webpack_require__(13972);
;// ../../libs/droid/project/src/project/ui/project/ProjectUI.tsx













const ProjectUI_fileLog = new Log/* Log */.tG(false, 'ProjectUI_f');
function ProjectName(param) {
    let { project } = param;
    const router = (0,next_router.useRouter)();
    const { t } = (0,dist_es/* useTranslation */.Bd)('droid-project/project/ui/project/content');
    const [isRunning, setIsRunning] = (0,react.useState)(false);
    (0,react.useEffect)(()=>{
        const fnLog = ProjectUI_fileLog.sub(false, 'ProjectName_useEffect_fn');
        fnLog.log('[ProjectName] useEffect 初始化');
        fnLog.log('[ProjectName] project.id:', project.id);
        const projectId = project.id;
        const hasProjectId = projectId ? true : false;
        fnLog.log('[ProjectName] 是否有projectId:', hasProjectId);
        if (!hasProjectId) {
            fnLog.log('[ProjectName] projectId为空,跳过初始化');
            return;
        }
        try {
            fnLog.log('[ProjectName] 调用 RhinoManager.isRunning 检查初始状态');
            const script = '\n            com.fanfanlo.droidlib.auto.rhino.RhinoManager.isRunning("'.concat(projectId, '")\n            ');
            const { javaResultString } = AutoWebViewJs/* autoWebViewJs */.yx.callScript(script);
            fnLog.log('[ProjectName] RhinoManager.isRunning 返回:', javaResultString);
            const isRunning = (javaResultString === null || javaResultString === void 0 ? void 0 : javaResultString.toString()) == 'true';
            fnLog.log('[ProjectName] 初始运行状态:', isRunning);
            setIsRunning(isRunning);
        } catch (error) {
            fnLog.log('[ProjectName] 调用 isRunning 异常:', error);
        }
        const eventNameOn = "project_".concat(projectId, "_running_on");
        const eventNameOff = "project_".concat(projectId, "_running_off");
        fnLog.log('[ProjectName] 监听on事件:', eventNameOn);
        fnLog.log('[ProjectName] 监听off事件:', eventNameOff);
        const handleRunningOn = (event)=>{
            fnLog.log('[ProjectName] 收到running_on事件');
            fnLog.log('[ProjectName] event:', event);
            fnLog.log('[ProjectName] 更新运行状态为: true');
            setIsRunning(true);
        };
        const handleRunningOff = (event)=>{
            fnLog.log('[ProjectName] 收到running_off事件');
            fnLog.log('[ProjectName] event:', event);
            fnLog.log('[ProjectName] 更新运行状态为: false');
            setIsRunning(false);
        };
        fnLog.log('[ProjectName] 注册on事件监听器');
        window.addEventListener(eventNameOn, handleRunningOn);
        fnLog.log('[ProjectName] 注册off事件监听器');
        window.addEventListener(eventNameOff, handleRunningOff);
        return ()=>{
            fnLog.log('[ProjectName] useEffect 清理');
            fnLog.log('[ProjectName] 移除on事件监听器:', eventNameOn);
            window.removeEventListener(eventNameOn, handleRunningOn);
            fnLog.log('[ProjectName] 移除off事件监听器:', eventNameOff);
            window.removeEventListener(eventNameOff, handleRunningOff);
        };
    }, [
        project.id
    ]);
    async function onRunClick() {
        const fnLog = ProjectUI_fileLog.sub(false, 'onRunClick_fn');
        fnLog.log('[onRunClick] 开始运行项目');
        fnLog.log('[onRunClick] project.id:', project.id);
        fnLog.log('[onRunClick] project.name:', project.name);
        try {
            const result = await (0,runProject/* runProject */.t)(project);
            fnLog.log('[onRunClick] runProject 返回结果:', result);
        } catch (error) {
            fnLog.log('[onRunClick] runProject 执行异常:', error);
        }
    }
    async function onStopClick() {
        const fnLog = ProjectUI_fileLog.sub(false, 'onStopClick_fn');
        fnLog.log('[onStopClick] 开始停止项目');
        fnLog.log('[onStopClick] project.id:', project.id);
        const projectId = project.id;
        const hasProjectId = projectId ? true : false;
        fnLog.log('[onStopClick] 是否有projectId:', hasProjectId);
        if (!hasProjectId) {
            fnLog.log('[onStopClick] projectId为空,无法停止');
            return;
        }
        try {
            const script = '\n            com.fanfanlo.droidlib.auto.rhino.JsRhinoManager.jsCallStopById("'.concat(projectId, '")\n            ');
            fnLog.log('[onStopClick] 调用stopById脚本', script);
            const { javaResultString } = AutoWebViewJs/* autoWebViewJs */.yx.callScript(script);
            fnLog.log('[onStopClick] RhinoManager.stopById 返回结果:', javaResultString);
        } catch (error) {
            fnLog.log('[onStopClick] stopById 执行异常:', error);
        }
    }
    async function onToggleRunClick() {
        const fnLog = ProjectUI_fileLog.sub(false, 'onToggleRunClick_fn');
        fnLog.log('[onToggleRunClick] 切换运行状态');
        fnLog.log('[onToggleRunClick] 当前isRunning:', isRunning);
        const currentIsRunning = isRunning;
        fnLog.log('[onToggleRunClick] currentIsRunning值:', currentIsRunning);
        if (currentIsRunning) {
            fnLog.log('[onToggleRunClick] 当前正在运行,准备停止');
            await onStopClick();
        } else {
            fnLog.log('[onToggleRunClick] 当前未运行,准备启动');
            await onRunClick();
        }
    }
    function edit() {
        const path = "/project-editor?id=".concat(project.id);
        router.push(path, undefined, {
            shallow: true
        });
    }
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(Grid2/* default */.A, {
        container: true,
        spacing: 2,
        sx: {
            width: "100%"
        },
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Grid2/* default */.A, {
                size: "grow",
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                    children: projectUtils.getProjectName(project)
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)(Grid2/* default */.A, {
                container: true,
                spacing: 2,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Button_Button/* default */.A, {
                        ...IChildToProject_intf/* childToProjectDataUtils */.mR.getProjectElementsId({
                            project
                        }, isRunning ? 'project-list-stop-btn' : 'project-list-run-btn'),
                        "data-listof-project-list-btn-id": project.id,
                        id: "project-simple-title-list-toggle-btn",
                        "data-id": "project-simple-title-list-toggle-btn",
                        onClick: onToggleRunClick,
                        color: isRunning ? "error" : "primary",
                        startIcon: isRunning ? /*#__PURE__*/ (0,jsx_runtime.jsx)(Stop/* default */.A, {}) : /*#__PURE__*/ (0,jsx_runtime.jsx)(PlayArrow/* default */.A, {}),
                        children: isRunning ? t('content.project.stop') : t('content.project.run')
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Button_Button/* default */.A, {
                        ...IChildToProject_intf/* childToProjectDataUtils */.mR.getProjectElementsId({
                            project
                        }, 'project-list-edit-btn'),
                        "data-listof-project-list-edit-btn-id": project.id,
                        id: "project-simple-title-list-edit-btn",
                        "data-id": "project-simple-title-list-edit-btn",
                        onClick: edit,
                        children: t('content.project.edit')
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(DeleteProjectButton, {})
                ]
            })
        ]
    });
}
function ProjectUI(param) {
    let { project } = param;
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(project_contexts/* ProjectContext */.vz.Provider, {
        value: project,
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Box_Box/* default */.A, {
            sx: {
                width: "100%",
                backgroundColor: "#f0f0f0",
                padding: 1
            },
            "data-id": project.id,
            ...IChildToProject_intf/* childToProjectDataUtils */.mR.getProjectElementsId({
                project
            }),
            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(ProjectName, {
                project: project
            })
        })
    });
}

;// ../../libs/droid/project/src/project/ui/projects/ProjectsInfoItemUI.tsx








function ProjectsTitle() {
    const { t } = (0,dist_es/* useTranslation */.Bd)('droid-project/project/ui/projects/content');
    // const v = use(loadI18nValue('droid-project/project/ui/projects/content', 'content.projects'))
    // console.log('ttttttttttttttttttttttt', v, 'tttt', t)
    return /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)("h4", {
            children: t('content.projects')
        })
    });
}
function ProjectList(param) {
    let { projects } = param;
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(List/* default */.A, {
        sx: {
            width: "100%"
        },
        children: projects.length > 0 && projects.map((project)=>/*#__PURE__*/ (0,jsx_runtime.jsx)(ListItem/* default */.Ay, {
                sx: {
                    width: "100%"
                },
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(ProjectUI, {
                    project: project
                }, project.id)
            }, project.id))
    });
}
function Projects() {
    const { t } = (0,dist_es/* useTranslation */.Bd)('droid-project/project/ui/projects/content');
    const [projects, setProjects] = (0,react.useState)(storage/* projectStore */.D.getListCopy());
    (0,react.useEffect)(()=>{
        const unsub = (0,watchUpdates/* watchUpdates */.c)(storage/* projectStore */.D.list, ()=>{
            setProjects(storage/* projectStore */.D.getListCopy());
        });
        return ()=>{
            unsub();
        };
    }, []);
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box_Box/* default */.A, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(CreateProjectButton, {}),
            projects.length == 0 && /*#__PURE__*/ (0,jsx_runtime.jsx)(Box_Box/* default */.A, {
                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box_Box/* default */.A, {
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                            children: t('content.noProjects')
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                            children: t('content.orFindFromMarket')
                        })
                    ]
                })
            }),
            projects.length > 0 && /*#__PURE__*/ (0,jsx_runtime.jsx)(ProjectList, {
                projects: projects
            })
        ]
    });
}
function ProjectsInfoItemUI_ProjectsUI() {
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box_Box/* default */.A, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(ProjectsTitle, {}),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Projects, {})
        ]
    });
}

;// ./src/components/browser/OpenBrowserButton.tsx




function OpenBrowserButton(param) {
    let { url, name } = param;
    const { t } = (0,es/* useTranslation */.Bd)('homepage/components/browser/content');
    const onClick = ()=>{
        const script = '\n        com.fanfanlo.lib.browser.BrowserLauncher.openTutorialUrl("'.concat(url, '")\n        ');
        AutoWebViewJs/* autoWebViewJs */.yx.callScript(script);
    };
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(jsx_runtime.Fragment, {
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Button_Button/* default */.A, {
            onClick: onClick,
            children: name || t("OpenBrowserButton.buttonName")
        })
    });
}
function OpenBrowserButtonBox(params) {
    return /*#__PURE__*/ _jsx(_Fragment, {
        children: /*#__PURE__*/ _jsx(Box, {
            children: /*#__PURE__*/ _jsx(OpenBrowserButton, {
                url: params.url,
                name: params.name
            })
        })
    });
}

;// ./src/components/browser/data.ts

const docUrl = (()=>{
    switch(env/* publicRuntimeConfig */.OT.region){
        case env/* Region */.Tp.GLOBAL:
            switch(env/* publicRuntimeConfig */.OT.env){
                case env/* AppEnv */.H.Dev:
                    return 'http://192.168.177.180:10222/';
                case env/* AppEnv */.H.Prod:
                    return 'https://droid-docs.vercel.app/';
                default:
                    return 'https://droid-docs.vercel.app/';
            }
        case env/* Region */.Tp.CN:
            return 'http://192.168.177.180:10222/';
        default:
            return 'https://droid-docs.vercel.app/';
    }
})();
const browserConf = {
    docUrl
};
const browserUtils = {
    getUrl: (path)=>{
        return "".concat(docUrl).concat(path);
    }
};

;// ./src/components/browser/DocMainPage.tsx




function DocMainPage() {
    const { t } = (0,es/* useTranslation */.Bd)('homepage/components/browser/content');
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(OpenBrowserButton, {
        url: browserUtils.getUrl(""),
        name: t("DocMainPage.mainPage")
    });
}

// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/FormControlLabel/FormControlLabel.js + 1 modules
var FormControlLabel = __webpack_require__(30281);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/Checkbox/Checkbox.js + 4 modules
var Checkbox = __webpack_require__(93916);
// EXTERNAL MODULE: ../../libs/fanfanlo/src/translation/TranslationGlobalData.ts
var TranslationGlobalData = __webpack_require__(15804);
;// ../../libs/fanfanlo/src/translation/AutoTranslateToggle.tsx







// 文件级别log
const AutoTranslateToggle_fileLog = new Log/* Log */.tG(false, 'AutoTranslateToggle_file');
// fileLog.pause = true;
/**
 * 自动翻译开关组件
 * - 可以显示为按钮或复选框
 * - 切换translationGlobalConfig.auto
 */ function AutoTranslateToggle(props) {
    const uiLog = AutoTranslateToggle_fileLog.sub(false, 'AutoTranslateToggle_ui');
    // uiLog.pause = true;
    const { variant = 'button', className = '' } = props;
    // 监听全局auto配置
    const [auto] = (0,useProxyWatch/* useProxyWatch */.x)(TranslationGlobalData/* translationGlobalConfig */.$, 'auto', TranslationGlobalData/* translationGlobalConfig */.$.auto);
    // 使用i18n
    const { t } = (0,es/* useTranslation */.Bd)('fanfanlo/translation/content');
    const handleToggle = ()=>{
        const fnLog = uiLog.sub(false, 'handleToggle_fn');
        // fnLog.pause = true;
        const newAuto = !auto;
        fnLog.log('toggle auto', {
            from: auto,
            to: newAuto
        });
        TranslationGlobalData/* translationGlobalConfig */.$.auto = newAuto;
    };
    uiLog.log('render', {
        variant,
        auto
    });
    if (variant === 'checkbox') {
        return /*#__PURE__*/ (0,jsx_runtime.jsx)(FormControlLabel/* default */.A, {
            className: className,
            control: /*#__PURE__*/ (0,jsx_runtime.jsx)(Checkbox/* default */.A, {
                checked: auto,
                onChange: handleToggle
            }),
            label: t('AutoTranslateToggle.autoTranslate')
        });
    } else {
        return /*#__PURE__*/ (0,jsx_runtime.jsx)(Button_Button/* default */.A, {
            className: className,
            variant: auto ? 'contained' : 'outlined',
            onClick: handleToggle,
            children: auto ? t('AutoTranslateToggle.disableAutoTranslate') : t('AutoTranslateToggle.enableAutoTranslate')
        });
    }
}

// EXTERNAL MODULE: ../../libs/fanfanlo/src/translation/TranslationComponent.tsx + 2 modules
var TranslationComponent = __webpack_require__(40175);
;// ./src/components/page/home/HomeGlobalDevContent.tsx









function HomeGlobalDevContent() {
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(jsx_runtime.Fragment, {
        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box_Box/* default */.A, {
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsx)(NotificationListenerPanel_NotificationListenerPanel, {}),
                /*#__PURE__*/ (0,jsx_runtime.jsx)(AndroidFloatWindowLink_AndroidFloatWindowLink, {}),
                /*#__PURE__*/ (0,jsx_runtime.jsx)(Box_Box/* default */.A, {
                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(open_a11y_node_button_OpenA11yNodeButton, {})
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)(DocMainPage, {}),
                /*#__PURE__*/ (0,jsx_runtime.jsx)(Box_Box/* default */.A, {
                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(KillSelf_KillSelf, {})
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)(ProjectsInfoItemUI_ProjectsUI, {}),
                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(AutoTranslateToggle, {
                            variant: "checkbox"
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(TranslationComponent/* TranslationComponent */.j, {
                            children: "Hello, this is a test."
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsxs)(TranslationComponent/* TranslationComponent */.j, {
                            isHtml: true,
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime.jsx)("h1", {
                                    children: "Title"
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)("p", {
                                    children: "Content"
                                })
                            ]
                        })
                    ]
                })
            ]
        })
    });
}

;// ./src/components/page/home/HomeGlobalStagingContent.tsx

function HomeGlobalStagingContent() {
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(jsx_runtime.Fragment, {
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
            children: "HomeGlobalStagingContent"
        })
    });
}

;// ./src/components/page/home/HomeGlobalProdContent.tsx








function HomeGlobalProdContent() {
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box_Box/* default */.A, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(NotificationListenerPanel_NotificationListenerPanel, {}),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(AndroidFloatWindowLink_AndroidFloatWindowLink, {}),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Box_Box/* default */.A, {
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(open_a11y_node_button_OpenA11yNodeButton, {})
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(DocMainPage, {}),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Box_Box/* default */.A, {
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(KillSelf_KillSelf, {})
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(ProjectsInfoItemUI_ProjectsUI, {})
        ]
    });
}

;// ./src/components/page/home/HomeContent.tsx





function Global() {
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
        children: [
            env/* publicRuntimeConfig */.OT.env === env/* AppEnv */.H.Dev && /*#__PURE__*/ (0,jsx_runtime.jsx)(HomeGlobalDevContent, {}),
            env/* publicRuntimeConfig */.OT.env === env/* AppEnv */.H.Staging && /*#__PURE__*/ (0,jsx_runtime.jsx)(HomeGlobalStagingContent, {}),
            env/* publicRuntimeConfig */.OT.env === env/* AppEnv */.H.Prod && /*#__PURE__*/ (0,jsx_runtime.jsx)(HomeGlobalProdContent, {})
        ]
    });
}
function Cn() {
    return /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
        children: "cn"
    });
}
function HomeContent() {
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
        children: [
            env/* publicRuntimeConfig */.OT.region === "global" && /*#__PURE__*/ (0,jsx_runtime.jsx)(Global, {}),
            env/* publicRuntimeConfig */.OT.region === "zh-cn" && /*#__PURE__*/ (0,jsx_runtime.jsx)(Cn, {})
        ]
    });
}

;// ./src/pages/home/index.tsx





















(0,i18n_init/* i18nInit */.tV)();
function Home() {
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(AppShell/* AppShell */.G, {
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Tabbar/* TabbarContainer */.y, {
            titleConf: {
                ns: "homepage/pages/home/content",
                key: "home.title"
            },
            navBar: /*#__PURE__*/ (0,jsx_runtime.jsx)(NavBar/* NavBar */.j, {}),
            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(HomeContent, {})
        })
    });
}
function test() {
    const s = 'var script1=function(n){"use strict";return function(){function v(){return new Date().getTime()}var u={exports:{}},e={};/**\n * @license React\n * react-jsx-runtime.production.js\n *\n * Copyright (c) Meta Platforms, Inc. and affiliates.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE file in the root directory of this source tree.\n */var c=Symbol.for("react.transitional.element"),d=Symbol.for("react.fragment");function s(T,t,r){var i=null;if(r!==void 0&&(i=""+r),t.key!==void 0&&(i=""+t.key),"key"in t){r={};for(var o in t)o!=="key"&&(r[o]=t[o])}else r=t;return t=r.ref,{$$typeof:c,type:T,key:i,ref:t!==void 0?t:null,props:r}}e.Fragment=d,e.jsx=s,e.jsxs=s,u.exports=e;var l=u.exports;function a(){return l.jsx("div",{children:l.jsx("button",{children:"html生成的按钮"})})}const x={UI:a};function E(){return v()}n.components=x,n.printA=E,Object.defineProperty(n,Symbol.toStringTag,{value:"Module"})}(),n}({}); return script1;';
    const o = new Function(s)();
    o.printA();
    // console.log('cccccccccccccccomponents=', o.components)
    return o;
}
function Content() {
    const [ui, setUI] = useState(null);
    useEffect(()=>{
        if (true) {
            // console.log('has window', document.domain);
            // document.domain = window.location.hostname;
            // console.log('domain is', document.domain);
            ;
            window.sayHello = function(msg) {
                alert('child' + msg);
            };
            console.log('window say=', window.sayHello);
        }
        setTimeout(()=>{
            setUI(test().components.UI());
        }, 1000 * 5);
    }, []);
    useEffect(()=>{
        marketsScriptManager.init();
    }, []);
    return /*#__PURE__*/ _jsxs(Box, {
        children: [
            /*#__PURE__*/ _jsx(AndroidSettingsInfo, {}),
            /*#__PURE__*/ _jsx(AddExternalMarketButton, {}),
            /*#__PURE__*/ _jsx(HomePagePermissions, {}),
            /*#__PURE__*/ _jsx(NotificationListenerPanel, {}),
            /*#__PURE__*/ _jsx(TestA11y, {}),
            /*#__PURE__*/ _jsx(AndroidFloatWindowLink, {}),
            /*#__PURE__*/ _jsx(Box, {
                children: /*#__PURE__*/ _jsx(OpenA11yNodeButton, {})
            }),
            /*#__PURE__*/ _jsx(TextRecognitionControl, {}),
            /*#__PURE__*/ _jsx(TestScript, {}),
            /*#__PURE__*/ _jsx(Box, {
                children: /*#__PURE__*/ _jsx(KillSelf, {})
            }),
            /*#__PURE__*/ _jsx(MarketsDevSettingsLineOpenLinkButton, {}),
            /*#__PURE__*/ _jsx(MainPageAddButtons, {}),
            /*#__PURE__*/ _jsx(ProjectsUI, {}),
            /*#__PURE__*/ _jsx("div", {})
        ]
    });
}


/***/ })

}]);
//# sourceMappingURL=6608-7bd7d16ad0d56bec.js.map