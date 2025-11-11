"use strict";
(self["webpackChunk_N_E"] = self["webpackChunk_N_E"] || []).push([[5066],{

/***/ 3131:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   W: () => (/* binding */ createTypedContext)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(94285);

function createTypedContext() {
    const Context = (0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)(undefined);
    const useTypedContext = ()=>{
        const value = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(Context);
        if (value === undefined) throw new Error("Context not provided");
        return value;
    };
    return [
        Context.Provider,
        useTypedContext
    ];
}


/***/ }),

/***/ 9825:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Bd: () => (/* reexport safe */ C_work_android_droid_html_website_2024_12_node_modules_pnpm_react_i18next_15_6_0_i18next_24_2_3_typescript_5_7_3_react_dom_19_1_0_react_19_1_0_react_19_1_0_typescript_5_7_3_node_modules_react_i18next_dist_es_index_js__WEBPACK_IMPORTED_MODULE_0__.Bd)
/* harmony export */ });
/* harmony import */ var C_work_android_droid_html_website_2024_12_node_modules_pnpm_react_i18next_15_6_0_i18next_24_2_3_typescript_5_7_3_react_dom_19_1_0_react_19_1_0_react_19_1_0_typescript_5_7_3_node_modules_react_i18next_dist_es_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(50279);



/***/ }),

/***/ 28210:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   j: () => (/* binding */ createAsyncContextLoader)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(94513);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(94285);
/* __next_internal_client_entry_do_not_use__ createAsyncContextLoader auto */ 
/**
 * 使用场景：
 * 
export const [MarketPageDataContextProvider, useMarketPageData] = createTypedContext<IMarketPageData>();

 function Content({loader}: {loader: Promise<IStoreWithData<IMarketPageData>>}){
    const store = use(loader);
    console.log('store=', store);
    return (<MarketPageDataContextProvider value={store.data}>
    <MarketContent />
</MarketPageDataContextProvider>
    )
}
    export default function MarketPage() {
    const loader:Promise<IStoreWithData<IMarketPageData>> = loadMarketPageData();
    return (
                <Suspense fallback={<div>loading</div>}>
                    <Content loader={loader} />
                </Suspense>
        )
}
 */ // 使用场景：
// C:\work\android-droid\html\website-2024-12\libs\fanfanlo\src\react\createTypedContext.ts 的 createTypedContext返回的useTypedContext会需要是promise的，所以我需要一个能够给它传递promise并初始化的组件，可以使用react19的use方法来帮我实现吗？

function createAsyncContextLoader(options) {
    const { Provider, extract, fallback = null } = options;
    function AsyncContextLoaderInner(props) {
        const raw = (0,react__WEBPACK_IMPORTED_MODULE_1__.use)(props.value);
        const contextValue = extract(raw);
        return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Provider, {
            value: contextValue,
            children: props.children
        });
    }
    return function AsyncContextLoader(props) {
        return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react__WEBPACK_IMPORTED_MODULE_1__.Suspense, {
            fallback: fallback,
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(AsyncContextLoaderInner, {
                ...props
            })
        });
    };
}


/***/ }),

/***/ 32534:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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

/***/ 40682:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   P: () => (/* binding */ marketHtmlUtils)
/* harmony export */ });
function createHtml(script, opts) {
    return '<html>\n    <head>\n    <script type="importmap">\n  {\n    "imports": {\n      "react": "https://esm.sh/react@19",\n      "react-dom/client": "https://esm.sh/react-dom@19/client"\n    }\n  }\n</script>\n        <script>\n                const IFRAME_ID = \''.concat(opts === null || opts === void 0 ? void 0 : opts.iframeId, "';\n                window.IFRAME_ID = '").concat(opts === null || opts === void 0 ? void 0 : opts.iframeId, '\';\n                \n            var autoWebViewJs = window.autoWebViewJs = window.parent.window.autoWebViewJs;\n            autoWebViewJs = window.parent.window.autoWebViewJs;\n            var callScript = window.callScript = autoWebViewJs.callScript;\n            var callScriptByConf = window.callScriptByConf = autoWebViewJs.callScriptByConf;\n            var isRealInAndroid = window.isRealInAndroid;\n            // var storeUtilsConf = window.storeUtilsConf = window.parent.window.storeUtilsConf;\n            var storeUtilsConf = window.storeUtilsConf = {\n                ns:{},\n                read:window.parent.window.storeUtilsConf.read,\n                write:window.parent.window.storeUtilsConf.write   \n            }\n        </script>\n        <title>droid lego</title>\n        <style>html, body{margin-left:-0px;padding:0;\n        background-color: white;}</style>\n    </head>\n    <body>\n        <div id="app"></div>\n        <script>').concat(script, "</script>\n        <script>\n                // const IFRAME_ID = '").concat(opts === null || opts === void 0 ? void 0 : opts.iframeId, "';\n                function notifyResize() {\n                    const body = document.body;\n                    const html = document.documentElement;\n                    \n                    // 获取实际内容高度（取最大值）\n                    const height = Math.max(\n                        body.scrollHeight,\n                        body.offsetHeight,\n                        html.scrollHeight,\n                        html.offsetHeight\n                    );\n                    \n                    // 获取实际内容宽度\n                    const width = Math.max(\n                        body.scrollWidth,\n                        body.offsetWidth,\n                        html.scrollWidth,\n                        html.offsetWidth\n                    );\n                    \n                    // 发送消息给父窗口\n                    window.parent.postMessage({\n                        type: 'resize',\n                        iframeId: IFRAME_ID,\n                        height,\n                        width\n                    }, '*');\n                }\n                \n                // 监听窗口大小变化\n                window.addEventListener('resize', notifyResize);\n                \n                // 监听DOMContentLoaded，确保DOM加载完毕后调整大小\n                document.addEventListener('DOMContentLoaded', notifyResize);\n                \n                // 监听load事件，确保所有资源加载完毕后调整大小\n                window.addEventListener('load', notifyResize);\n                \n                // 创建MutationObserver监听DOM变化\n                const observer = new MutationObserver(notifyResize);\n                observer.observe(document.documentElement, {\n                    childList: true,\n                    subtree: true,\n                    attributes: true,\n                    characterData: true\n                });\n                \n                // 监听来自父窗口的消息，处理请求重新调整大小的消息\n                window.addEventListener('message', function(event) {\n                    if (event.data && event.data.type === 'requestResize') {\n                        // 主动触发一次尺寸计算和发送\n                        notifyResize();\n                    }\n                });\n                \n                // 初始化大小\n                notifyResize();\n        </script>\n    </body>\n</html>");
}
function mergeHtml(html, opts) {
    let h = html;
    if (!h.includes('<body')) {
        h = "<body>".concat(h, "</body>");
    }
    if (!h.includes('<html')) {
        h = "<html>".concat(h, "</html>");
    }
    if (!h.includes('<head')) {
        h = h.replace('<html>', '<html><head></head>');
    }
    h = h.replace('<head>', "<head><script>\n                const IFRAME_ID = '".concat(opts === null || opts === void 0 ? void 0 : opts.iframeId, "';\n                window.IFRAME_ID = '").concat(opts === null || opts === void 0 ? void 0 : opts.iframeId, "';\n                \n            var autoWebViewJs = window.autoWebViewJs = window.parent.window.autoWebViewJs;\n            autoWebViewJs = window.parent.window.autoWebViewJs;\n            var callScript = window.callScript = autoWebViewJs.callScript;\n            var callScriptByConf = window.callScriptByConf = autoWebViewJs.callScriptByConf;\n            var isRealInAndroid = window.isRealInAndroid;\n            // var storeUtilsConf = window.storeUtilsConf = window.parent.window.storeUtilsConf;\n            var storeUtilsConf = window.storeUtilsConf = {\n                ns:{},\n                read:window.parent.window.storeUtilsConf.read,\n                write:window.parent.window.storeUtilsConf.write   \n            }\n        </script>\n        \n        <style>html, body{margin-left:-0px;padding:0;\n        background-color: white;}</style>"));
    h = h.replace("</body>", "\n        \n        <script>\n                function notifyResize() {\n                    const body = document.body;\n                    const html = document.documentElement;\n                    \n                    // 获取实际内容高度（取最大值）\n                    const height = Math.max(\n                        body.scrollHeight,\n                        body.offsetHeight,\n                        html.scrollHeight,\n                        html.offsetHeight\n                    );\n                    \n                    // 获取实际内容宽度\n                    const width = Math.max(\n                        body.scrollWidth,\n                        body.offsetWidth,\n                        html.scrollWidth,\n                        html.offsetWidth\n                    );\n                    \n                    // 发送消息给父窗口\n                    window.parent.postMessage({\n                        type: 'resize',\n                        iframeId: IFRAME_ID,\n                        height,\n                        width\n                    }, '*');\n                }\n                \n                // 监听窗口大小变化\n                window.addEventListener('resize', notifyResize);\n                \n                // 监听DOMContentLoaded，确保DOM加载完毕后调整大小\n                document.addEventListener('DOMContentLoaded', notifyResize);\n                \n                // 监听load事件，确保所有资源加载完毕后调整大小\n                window.addEventListener('load', notifyResize);\n                \n                // 创建MutationObserver监听DOM变化\n                const observer = new MutationObserver(notifyResize);\n                observer.observe(document.documentElement, {\n                    childList: true,\n                    subtree: true,\n                    attributes: true,\n                    characterData: true\n                });\n                \n                // 监听来自父窗口的消息，处理请求重新调整大小的消息\n                window.addEventListener('message', function(event) {\n                    if (event.data && event.data.type === 'requestResize') {\n                        // 主动触发一次尺寸计算和发送\n                        notifyResize();\n                    }\n                });\n                \n                // 初始化大小\n                notifyResize();\n        </script>\n        </body>");
    console.log('hhhhhhhhhhhhh=', h);
    return h;
}
async function createHtmlByUrl(url, opts) {
    const res = await fetch(url);
    const content = await res.text();
    return createHtml(content, opts);
}
const marketHtmlUtils = {
    createHtml,
    createHtmlByUrl,
    mergeHtml
};


/***/ }),

/***/ 55762:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   H: () => (/* binding */ Fallback)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(94513);
/* harmony import */ var _fanfanlo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(50279);


function Fallback() {
    const { t } = (0,_fanfanlo__WEBPACK_IMPORTED_MODULE_1__/* .useTranslation */ .Bd)('homepage/components/fallback/content');
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
        style: {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100%',
            width: "100%"
        },
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", {
            children: t('content.loading')
        })
    });
}


/***/ }),

/***/ 71647:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   RA: () => (/* binding */ ScriptEditorContextLoader)
/* harmony export */ });
/* unused harmony exports ScriptEditorContextProvider, useScriptEditorContext */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(94513);
/* harmony import */ var _fanfanlo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3131);
/* harmony import */ var _fanfanlo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(28210);
/* harmony import */ var _src_components_fallback_Fallback__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(55762);



const [ScriptEditorContextProvider, useScriptEditorContext] = (0,_fanfanlo__WEBPACK_IMPORTED_MODULE_2__/* .createTypedContext */ .W)();
const ScriptEditorContextLoader = (0,_fanfanlo__WEBPACK_IMPORTED_MODULE_3__/* .createAsyncContextLoader */ .j)({
    Provider: ScriptEditorContextProvider,
    extract: (res)=>res,
    fallback: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_src_components_fallback_Fallback__WEBPACK_IMPORTED_MODULE_1__/* .Fallback */ .H, {})
});


/***/ }),

/***/ 84754:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   M_: () => (/* binding */ loadScrptEditorData)
/* harmony export */ });
/* unused harmony exports scriptEditorNs, createScriptEditorData */
/* harmony import */ var _fanfanlo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(62095);
/* harmony import */ var _fanfanlo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4887);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(63624);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _barrel_optimize_names_ulid_ulid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(67131);



const ns = "script-editor";
const androidData = "".concat(ns, ":android");
const webData = "".concat(ns, ":web");
function createScriptNs(id) {
    return "".concat(androidData, ":").concat(id);
}
const scriptEditorNs = {
    ns,
    androidData,
    webData
};
async function createDefaultScriptEditorData() {
    const unnamed = await (0,_fanfanlo__WEBPACK_IMPORTED_MODULE_2__/* .loadI18nValue */ .y)("homepage/components/script-editor/data/content", 'content.unnamed');
    const id = (0,_barrel_optimize_names_ulid_ulid__WEBPACK_IMPORTED_MODULE_1__/* .ulid */ .Z0)();
    return {
        info: {
            dataModified: false,
            htmlPreviewIsShow: false
        },
        data: {
            script: {
                ns: createScriptNs(id),
                name: unnamed,
                version: "1.0.0",
                url: "/script-editor",
                content: "",
                id: id
            }
        }
    };
}
async function createScriptEditorData(data) {
    const def = await createDefaultScriptEditorData();
    const res = _.merge(def, data);
    return res;
}
async function loadScrptEditorData(ns) {
    const def = await createDefaultScriptEditorData();
    ns = ns || def.data.script.ns;
    const s = await _fanfanlo__WEBPACK_IMPORTED_MODULE_3__/* .storeUtils */ .P.getNamespaceStoreWithData(ns, {
        forceReset: false,
        mergeDefData: true,
        defData: def
    });
    console.log('ddddddddd', s);
    return s.data;
}


/***/ }),

/***/ 93589:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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

/***/ 98817:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  b: () => (/* binding */ useDroidDocsScripts)
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/react@19.1.0/node_modules/react/index.js
var react = __webpack_require__(94285);
// EXTERNAL MODULE: ./src/libs/mc/main/MainModel.ts
var MainModel = __webpack_require__(28660);
;// ./src/services/droid-docs-api.ts
/**
 * Droid Docs API Service
 * 用于与 droid-docs 项目的 API 交互
 */ 
// API 基础 URL - 从环境变量或默认值读取
const getApiBaseUrl = ()=>{
    console.log('[DroidDocsApi] 获取 API 基础 URL');
    // 在浏览器环境中，使用 localhost
    if (true) {
        // const baseUrl = 'https://droid-docs.vm-ubuntu.droidlego.com';
        const baseUrl = MainModel/* mainModel */.N.appConfig.docsApi;
        console.log('[DroidDocsApi] 浏览器环境，使用 baseUrl:', baseUrl);
        return baseUrl;
    }
    // 服务端环境
    // const baseUrl = 'https://droid-docs.vm-ubuntu.droidlego.com';
    const baseUrl = MainModel/* mainModel */.N.appConfig.docsApi;
    console.log('[DroidDocsApi] 服务端环境，使用 baseUrl:', baseUrl);
    return baseUrl;
};
/**
 * 获取完整的脚本地图（按难度级别组织）
 * @param lang 语言代码，默认为 'zh-CN'
 * @param withScript 是否包含脚本内容，默认为 false
 * @returns 包含所有脚本的地图
 */ async function fetchExamplesMap(lang) {
    let withScript = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false;
    console.log('[DroidDocsApi] 开始获取脚本地图', {
        lang,
        withScript
    });
    try {
        const apiUrl = "".concat(getApiBaseUrl(), "/api/examples-map");
        const params = new URLSearchParams({
            lang,
            script: String(withScript)
        });
        const fullUrl = "".concat(apiUrl, "?").concat(params.toString());
        console.log('[DroidDocsApi] 请求 URL:', fullUrl);
        const response = await fetch(fullUrl, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        });
        console.log('[DroidDocsApi] 响应状态码:', response.status);
        if (!response.ok) {
            console.error('[DroidDocsApi] 响应状态不为 200, 状态码:', response.status);
            throw new Error("Failed to fetch examples map: ".concat(response.status, " ").concat(response.statusText));
        }
        const data = await response.json();
        console.log('[DroidDocsApi] 获取脚本地图成功', {
            total: data.total,
            count: data.count
        });
        return data.data;
    } catch (error) {
        console.error('[DroidDocsApi] 获取脚本地图失败:', error.message);
        throw error;
    }
}
/**
 * 获取单个脚本的完整内容
 * @param category 脚本分类（beginner/intermediate/advanced）
 * @param name 脚本名称
 * @param lang 语言代码，默认为 'zh-CN'
 * @param withScript 是否包含脚本内容，默认为 true
 * @returns 脚本对象
 */ async function fetchScript(category, name) {
    let lang = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 'zh-CN', withScript = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : true;
    console.log('[DroidDocsApi] 开始获取单个脚本', {
        category,
        name,
        lang,
        withScript
    });
    try {
        const apiUrl = "".concat(getApiBaseUrl(), "/api/script");
        const params = new URLSearchParams({
            category,
            name,
            lang,
            script: String(withScript)
        });
        const fullUrl = "".concat(apiUrl, "?").concat(params.toString());
        console.log('[DroidDocsApi] 请求 URL:', fullUrl);
        const response = await fetch(fullUrl, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        });
        console.log('[DroidDocsApi] 响应状态码:', response.status);
        if (!response.ok) {
            console.error('[DroidDocsApi] 响应状态不为 200, 状态码:', response.status);
            throw new Error("Failed to fetch script: ".concat(response.status, " ").concat(response.statusText));
        }
        const script = await response.json();
        console.log('[DroidDocsApi] 获取脚本成功:', script.name);
        return script;
    } catch (error) {
        console.error('[DroidDocsApi] 获取脚本失败:', error.message);
        throw error;
    }
}

;// ./src/components/script-editor/content/useDroidDocsScripts.ts
/**
 * Hook for managing droid-docs script data
 * 管理从 droid-docs API 获取的脚本数据
 */ /* __next_internal_client_entry_do_not_use__ useDroidDocsScripts auto */ 

/**
 * Hook: 使用 droid-docs API 获取脚本数据
 * @param lang 语言代码，默认为 'zh-CN'
 * @returns 脚本数据和操作方法
 */ function useDroidDocsScripts(lang) {
    // 脚本地图状态
    const [examplesMap, setExamplesMap] = (0,react.useState)(null);
    console.log('[useDroidDocsScripts] 初始化 examplesMap');
    // 难度级别选择状态
    const [selectedLevel, setSelectedLevelState] = (0,react.useState)('beginner');
    console.log('[useDroidDocsScripts] 初始化 selectedLevel: beginner');
    // 脚本选择状态
    const [selectedScript, setSelectedScript] = (0,react.useState)(null);
    console.log('[useDroidDocsScripts] 初始化 selectedScript: null');
    // 脚本内容状态
    const [scriptContent, setScriptContent] = (0,react.useState)('');
    console.log('[useDroidDocsScripts] 初始化 scriptContent: 空字符串');
    // 加载状态
    const [isLoadingMap, setIsLoadingMap] = (0,react.useState)(false);
    console.log('[useDroidDocsScripts] 初始化 isLoadingMap: false');
    const [isLoadingScript, setIsLoadingScript] = (0,react.useState)(false);
    console.log('[useDroidDocsScripts] 初始化 isLoadingScript: false');
    // 错误状态
    const [mapError, setMapError] = (0,react.useState)(null);
    console.log('[useDroidDocsScripts] 初始化 mapError: null');
    const [scriptError, setScriptError] = (0,react.useState)(null);
    console.log('[useDroidDocsScripts] 初始化 scriptError: null');
    // 加载脚本地图（仅在初始化时执行）
    (0,react.useEffect)(()=>{
        const loadMap = async ()=>{
            console.log('[useDroidDocsScripts] 开始加载脚本地图');
            setIsLoadingMap(true);
            setMapError(null);
            try {
                const map = await fetchExamplesMap(lang, true);
                console.log('[useDroidDocsScripts] 脚本地图加载成功');
                setExamplesMap(map);
                // 自动选择初级的第一个脚本
                if (map.beginner && map.beginner.length > 0) {
                    const firstScript = map.beginner[0];
                    console.log('[useDroidDocsScripts] 自动选择初级的第一个脚本:', firstScript.name);
                    setSelectedScript(firstScript);
                    // 加载第一个脚本的完整内容
                    console.log('[useDroidDocsScripts] 加载第一个脚本的完整内容');
                    try {
                        const [category, name] = firstScript.path.split('/');
                        console.log('[useDroidDocsScripts] 从 path 提取 category:', category, 'name:', name);
                        if (category && name) {
                            const fullScript = await fetchScript(category, name, lang, true // 获取完整内容
                            );
                            console.log('[useDroidDocsScripts] 初始脚本内容加载成功');
                            setScriptContent(fullScript.script);
                        } else {
                            console.error('[useDroidDocsScripts] 无效的脚本路径:', firstScript.path);
                            setScriptContent('');
                        }
                    } catch (error) {
                        console.error('[useDroidDocsScripts] 初始脚本内容加载失败:', error.message);
                        setScriptContent('');
                    }
                }
            } catch (error) {
                console.error('[useDroidDocsScripts] 脚本地图加载失败:', error.message);
                setMapError(error);
            } finally{
                setIsLoadingMap(false);
            }
        };
        loadMap();
    }, [
        lang
    ]);
    // 设置难度级别
    const setSelectedLevel = (0,react.useCallback)((level)=>{
        console.log('[useDroidDocsScripts] 设置难度级别:', level);
        setSelectedLevelState(level);
        // 重置脚本选择
        if (examplesMap && examplesMap[level] && examplesMap[level].length > 0) {
            const firstScript = examplesMap[level][0];
            console.log('[useDroidDocsScripts] 自动选择新级别的第一个脚本:', firstScript.name);
            setSelectedScript(firstScript);
            // 加载脚本的完整内容
            console.log('[useDroidDocsScripts] 加载新级别脚本的完整内容');
            (async ()=>{
                try {
                    const [category, name] = firstScript.path.split('/');
                    console.log('[useDroidDocsScripts] 从 path 提取 category:', category, 'name:', name);
                    if (category && name) {
                        const fullScript = await fetchScript(category, name, lang, true // 获取完整内容
                        );
                        console.log('[useDroidDocsScripts] 新级别脚本内容加载成功');
                        setScriptContent(fullScript.script);
                    } else {
                        console.error('[useDroidDocsScripts] 无效的脚本路径:', firstScript.path);
                        setScriptContent('');
                    }
                } catch (error) {
                    console.error('[useDroidDocsScripts] 新级别脚本内容加载失败:', error.message);
                    setScriptContent('');
                }
            })();
        } else {
            console.log('[useDroidDocsScripts] 新级别没有脚本');
            setSelectedScript(null);
            setScriptContent('');
        }
    }, [
        examplesMap,
        lang
    ]);
    // 选择脚本并加载内容
    const selectScript = (0,react.useCallback)(async (script)=>{
        console.log('[useDroidDocsScripts] 选择脚本:', script.name);
        setSelectedScript(script);
        setIsLoadingScript(true);
        setScriptError(null);
        try {
            // 从 path 中提取 category 和 name
            // path 格式: "beginner/vibrate"
            const [category, name] = script.path.split('/');
            console.log('[useDroidDocsScripts] 从 path 提取 category:', category, 'name:', name);
            if (!category || !name) {
                throw new Error("Invalid script path: ".concat(script.path));
            }
            const fullScript = await fetchScript(category, name, lang, true // 获取完整内容
            );
            console.log('[useDroidDocsScripts] 脚本内容加载成功');
            setScriptContent(fullScript.script);
        } catch (error) {
            console.error('[useDroidDocsScripts] 脚本内容加载失败:', error.message);
            setScriptError(error);
        } finally{
            setIsLoadingScript(false);
        }
    }, [
        lang
    ]);
    // 更新脚本内容
    const updateScriptContent = (0,react.useCallback)((content)=>{
        console.log('[useDroidDocsScripts] 更新脚本内容，新长度:', content.length);
        setScriptContent(content);
    }, []);
    // 刷新脚本内容（重新从服务器加载）
    const refreshScriptContent = (0,react.useCallback)(async ()=>{
        if (!selectedScript) {
            console.log('[useDroidDocsScripts] 没有选择脚本，无法刷新');
            return;
        }
        console.log('[useDroidDocsScripts] 刷新脚本内容:', selectedScript.name);
        await selectScript(selectedScript);
    }, [
        selectedScript,
        selectScript
    ]);
    return {
        examplesMap,
        selectedLevel,
        selectedScript,
        scriptContent,
        isLoadingMap,
        isLoadingScript,
        mapError,
        scriptError,
        setSelectedLevel,
        selectScript,
        updateScriptContent,
        refreshScriptContent
    };
}


/***/ })

}]);
//# sourceMappingURL=5066-2573e4a3dbcc0e93.js.map