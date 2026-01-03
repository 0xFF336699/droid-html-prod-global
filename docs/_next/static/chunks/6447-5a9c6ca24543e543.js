"use strict";
(self["webpackChunk_N_E"] = self["webpackChunk_N_E"] || []).push([[6447],{

/***/ 10944:
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

/***/ 13123:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   M_: () => (/* binding */ loadScrptEditorData)
/* harmony export */ });
/* unused harmony exports scriptEditorNs, createScriptEditorData */
/* harmony import */ var _fanfanlo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(91628);
/* harmony import */ var _fanfanlo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(29498);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(80507);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _barrel_optimize_names_ulid_ulid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(43899);



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

/***/ 13396:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   y: () => (/* binding */ TabbarContainer)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(94513);
/* harmony import */ var _barrel_optimize_names_Box_CssBaseline_Paper_mui_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(68732);
/* harmony import */ var _barrel_optimize_names_Box_CssBaseline_Paper_mui_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(92061);
/* harmony import */ var _barrel_optimize_names_Box_CssBaseline_Paper_mui_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(72632);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(94285);
/* harmony import */ var _page_AndroidPageContent__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(60471);
/* __next_internal_client_entry_do_not_use__ TabbarContainer auto */ 



function BottomBar(param) {
    let { navBar } = param;
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_barrel_optimize_names_Box_CssBaseline_Paper_mui_material__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A, {
        id: "bottom-navigation",
        "data-testid": "Tabbar__navigationContainer__01aryz6s610p4z0skjq69x5prg",
        "data-test-comment": "底部导航栏容器，包含应用的主要导航选项",
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
        "data-testid": "Tabbar__mainContainer__01aryz6s610p4z0skjq69x5prh",
        "data-test-comment": "标签栏主容器，包含页面内容和底部导航栏",
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

/***/ 34852:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   RA: () => (/* binding */ ScriptEditorContextLoader),
/* harmony export */   xP: () => (/* binding */ ScriptEditorContextProvider)
/* harmony export */ });
/* unused harmony export useScriptEditorContext */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(94513);
/* harmony import */ var _fanfanlo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(10944);
/* harmony import */ var _fanfanlo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(94167);
/* harmony import */ var _src_components_fallback_Fallback__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(88907);



const [ScriptEditorContextProvider, useScriptEditorContext] = (0,_fanfanlo__WEBPACK_IMPORTED_MODULE_2__/* .createTypedContext */ .W)();
const ScriptEditorContextLoader = (0,_fanfanlo__WEBPACK_IMPORTED_MODULE_3__/* .createAsyncContextLoader */ .j)({
    Provider: ScriptEditorContextProvider,
    extract: (res)=>res,
    fallback: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_src_components_fallback_Fallback__WEBPACK_IMPORTED_MODULE_1__/* .Fallback */ .H, {})
});


/***/ }),

/***/ 51011:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Bd: () => (/* reexport safe */ C_work_android_droid_html_website_2024_12_node_modules_pnpm_react_i18next_15_6_0_i18next_24_2_3_typescript_5_7_3_react_dom_19_1_0_react_19_1_0_react_19_1_0_typescript_5_7_3_node_modules_react_i18next_dist_es_index_js__WEBPACK_IMPORTED_MODULE_0__.Bd)
/* harmony export */ });
/* harmony import */ var C_work_android_droid_html_website_2024_12_node_modules_pnpm_react_i18next_15_6_0_i18next_24_2_3_typescript_5_7_3_react_dom_19_1_0_react_19_1_0_react_19_1_0_typescript_5_7_3_node_modules_react_i18next_dist_es_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56137);



/***/ }),

/***/ 52807:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   j: () => (/* binding */ NavBar)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(94513);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1674);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _fanfanlo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(56137);
/* harmony import */ var _mui_icons_material_Home__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4306);
/* harmony import */ var _mui_icons_material_Settings__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(31480);
/* harmony import */ var _mui_icons_material_Create__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(44797);
/* harmony import */ var _barrel_optimize_names_BottomNavigation_BottomNavigationAction_mui_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(94360);
/* harmony import */ var _barrel_optimize_names_BottomNavigation_BottomNavigationAction_mui_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(708);







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
        children: tabInfoList.map((e, index)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_barrel_optimize_names_BottomNavigation_BottomNavigationAction_mui_material__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .A, {
                label: e.label,
                icon: e.icon,
                "data-testid": "NavBar__tabItem__01aryz6s610p4z0skjq69x5prs__".concat(index),
                "data-test-comment": "导航栏标签项，点击后导航到对应页面（首页/脚本创建/设置）",
                className: pathname === e.value ? 'Mui-selected' : '',
                onClick: ()=>{
                    if (pathname === e.value) return;
                    router.push(e.value);
                }
            }, e.value))
    });
}


/***/ }),

/***/ 61622:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  b: () => (/* binding */ useDroidDocsScripts)
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/react@19.1.0/node_modules/react/index.js
var react = __webpack_require__(94285);
// EXTERNAL MODULE: ./src/libs/mc/main/MainModel.ts
var MainModel = __webpack_require__(82623);
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


/***/ }),

/***/ 73886:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  z: () => (/* binding */ ExamplesScriptsContent)
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/react@19.1.0/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(94513);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react-i18next@15.6.0_i18next@24.2.3_typescript@5.7.3__react-dom@19.1.0_react@19.1.0__react@19.1.0_typescript@5.7.3/node_modules/react-i18next/dist/es/index.js + 15 modules
var es = __webpack_require__(56137);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/Box/Box.js + 2 modules
var Box = __webpack_require__(92061);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/Alert/Alert.js + 5 modules
var Alert = __webpack_require__(74192);
// EXTERNAL MODULE: ../../libs/droid/android/src/android/AutoWebViewJs.ts + 1 modules
var AutoWebViewJs = __webpack_require__(68709);
// EXTERNAL MODULE: ../../libs/fanfanlo/src/i18n/fanfanloI18n.ts
var fanfanloI18n = __webpack_require__(17039);
// EXTERNAL MODULE: ../../libs/fanfanlo/src/watcher/proxyWatch.ts
var proxyWatch = __webpack_require__(57641);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/CircularProgress/CircularProgress.js + 1 modules
var CircularProgress = __webpack_require__(95657);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/Typography/Typography.js
var Typography = __webpack_require__(26512);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/Stack/Stack.js + 1 modules
var Stack = __webpack_require__(39070);
// EXTERNAL MODULE: ./src/components/script-editor/data/context.tsx
var context = __webpack_require__(34852);
// EXTERNAL MODULE: ./src/components/script-editor/data/script-editor.data.intf.ts
var script_editor_data_intf = __webpack_require__(13123);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react@19.1.0/node_modules/react/index.js
var react = __webpack_require__(94285);
// EXTERNAL MODULE: ./src/components/script-editor/content/useDroidDocsScripts.ts + 1 modules
var useDroidDocsScripts = __webpack_require__(61622);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/Button/Button.js + 3 modules
var Button = __webpack_require__(20872);
;// ./src/components/script-editor/content/v2/ScriptControlBar.tsx



// 日志前缀
const LOG_PREFIX = '[ScriptControlBar]';
/**
 * 脚本控制按钮栏组件
 * 包含运行按钮等控制按钮
 */ function ScriptControlBar(param) {
    let { scriptData, onRun } = param;
    console.log("".concat(LOG_PREFIX, " 组件初始化, scriptData 是否存在: ").concat(!!scriptData));
    const { t } = (0,es/* useTranslation */.Bd)('homepage/components/script-editor/content/v2/content');
    const handleRun = ()=>{
        console.log("".concat(LOG_PREFIX, " 运行按钮被点击"));
        if (!scriptData) {
            console.log("".concat(LOG_PREFIX, " scriptData 为空, 无法运行"));
            return;
        } else {
            console.log("".concat(LOG_PREFIX, " scriptData 存在, 准备运行脚本"));
        }
        if (!scriptData.script || scriptData.script.trim() === '') {
            console.log("".concat(LOG_PREFIX, " 脚本内容为空, 无法运行"));
            return;
        } else {
            console.log("".concat(LOG_PREFIX, " 脚本内容长度: ").concat(scriptData.script.length));
        }
        onRun();
        console.log("".concat(LOG_PREFIX, " onRun 回调已执行"));
    };
    const isDisabled = !scriptData || !scriptData.script || scriptData.script.trim() === '';
    console.log("".concat(LOG_PREFIX, " 运行按钮是否禁用: ").concat(isDisabled));
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.A, {
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Button/* default */.A, {
            variant: "contained",
            onClick: handleRun,
            disabled: isDisabled,
            "data-testid": "ScriptControlBar__runButton__01JG2B0085",
            children: t('ScriptControlBar.run')
        })
    });
}

// EXTERNAL MODULE: ../../libs/fanfanlo/src/watcher/useProxyWatch.ts
var useProxyWatch = __webpack_require__(80502);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/TextareaAutosize/TextareaAutosize.js
var TextareaAutosize = __webpack_require__(20814);
;// ./src/components/script-editor/content/v2/ScriptEditor.tsx



// 日志前缀
const ScriptEditor_LOG_PREFIX = '[ScriptEditor]';
/**
 * 脚本编辑器组件
 * 编辑 IScript 对象的 script 字段
 */ function ScriptEditor(param) {
    let { scriptData } = param;
    console.log("".concat(ScriptEditor_LOG_PREFIX, " 组件初始化"));
    const { t } = (0,es/* useTranslation */.Bd)('homepage/components/script-editor/content/v2/content');
    // 监听 scriptData.script 的变化
    const [script] = (0,useProxyWatch/* useProxyWatch */.x)(scriptData, 'script', scriptData.script);
    console.log("".concat(ScriptEditor_LOG_PREFIX, " script 长度: ").concat(script.length));
    const handleChange = (e)=>{
        const newValue = e.target.value;
        console.log("".concat(ScriptEditor_LOG_PREFIX, " 脚本内容变化, 新长度: ").concat(newValue.length));
        scriptData.script = newValue;
        console.log("".concat(ScriptEditor_LOG_PREFIX, " 脚本内容已更新"));
    };
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.A, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.A, {
                variant: "body2",
                sx: {
                    mb: 1,
                    fontWeight: 500
                },
                children: t('ScriptEditor.label')
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(TextareaAutosize/* default */.A, {
                value: script,
                onChange: handleChange,
                style: {
                    width: '100%',
                    minHeight: '300px',
                    padding: '8px',
                    fontFamily: 'monospace',
                    fontSize: '14px',
                    border: '1px solid #ccc',
                    borderRadius: '4px'
                }
            })
        ]
    });
}

// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+icons-material@6.4.12_@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_re_5ewkm5t5g27pzq5tz62v6ktvti/node_modules/@mui/icons-material/esm/Close.js
var Close = __webpack_require__(24299);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/List/List.js + 1 modules
var List = __webpack_require__(66397);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/ListItem/ListItem.js + 3 modules
var ListItem = __webpack_require__(18248);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/ListItemButton/ListItemButton.js
var ListItemButton = __webpack_require__(62052);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/ListItemText/ListItemText.js
var ListItemText = __webpack_require__(83942);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/Dialog/Dialog.js + 1 modules
var Dialog = __webpack_require__(46822);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/DialogTitle/DialogTitle.js
var DialogTitle = __webpack_require__(16880);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/IconButton/IconButton.js + 1 modules
var IconButton = __webpack_require__(10184);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/DialogContent/DialogContent.js + 1 modules
var DialogContent = __webpack_require__(88149);
;// ./src/components/script-editor/content/v2/ScriptExamplePopup.tsx




// 日志前缀
const ScriptExamplePopup_LOG_PREFIX = '[ScriptExamplePopup]';
/**
 * 脚本示例选择弹窗组件
 * 显示分组的脚本示例列表
 */ function ScriptExamplePopup(param) {
    let { open, onClose, examplesMap, onSelectScript } = param;
    console.log("".concat(ScriptExamplePopup_LOG_PREFIX, " 组件初始化, open: ").concat(open));
    const { t } = (0,es/* useTranslation */.Bd)('homepage/components/script-editor/content/v2/content');
    const handleClose = ()=>{
        console.log("".concat(ScriptExamplePopup_LOG_PREFIX, " 关闭按钮被点击"));
        onClose();
    };
    const handleSelectScript = (script)=>{
        console.log("".concat(ScriptExamplePopup_LOG_PREFIX, " 选中脚本: ").concat(script.name, ", path: ").concat(script.path));
        onSelectScript(script);
    };
    // 渲染分组
    const renderGroup = (level)=>{
        if (!examplesMap) {
            console.log("".concat(ScriptExamplePopup_LOG_PREFIX, " examplesMap 为空, 跳过渲染"));
            return null;
        }
        const scripts = examplesMap[level];
        console.log("".concat(ScriptExamplePopup_LOG_PREFIX, " 渲染分组: ").concat(level, ", 脚本数量: ").concat(scripts.length));
        if (scripts.length === 0) {
            console.log("".concat(ScriptExamplePopup_LOG_PREFIX, " 分组 ").concat(level, " 没有脚本, 跳过渲染"));
            return null;
        }
        return /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.A, {
            sx: {
                mb: 3
            },
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.A, {
                    variant: "subtitle2",
                    color: "primary",
                    sx: {
                        mb: 1,
                        fontWeight: 'bold',
                        px: 2
                    },
                    children: t("ScriptExamplePopup.levels.".concat(level))
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)(List/* default */.A, {
                    children: scripts.map((script)=>{
                        console.log("".concat(ScriptExamplePopup_LOG_PREFIX, " 渲染脚本项: ").concat(script.name));
                        return /*#__PURE__*/ (0,jsx_runtime.jsx)(ListItem/* default */.Ay, {
                            disablePadding: true,
                            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(ListItemButton/* default */.A, {
                                onClick: ()=>handleSelectScript(script),
                                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(ListItemText/* default */.A, {
                                    primary: script.name,
                                    secondary: script.desc
                                })
                            })
                        }, script.path);
                    })
                })
            ]
        }, level);
    };
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(Dialog/* default */.A, {
        open: open,
        onClose: handleClose,
        maxWidth: "md",
        fullWidth: true,
        sx: {
            '& .MuiDialog-paper': {
                minHeight: '60vh',
                maxHeight: '80vh'
            }
        },
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsxs)(DialogTitle/* default */.A, {
                sx: {
                    m: 0,
                    p: 2,
                    pr: 6
                },
                children: [
                    t('ScriptExamplePopup.title'),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(IconButton/* default */.A, {
                        "aria-label": "close",
                        onClick: handleClose,
                        sx: {
                            position: 'absolute',
                            right: 8,
                            top: 8,
                            color: (theme)=>theme.palette.grey[500]
                        },
                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Close/* default */.A, {})
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)(DialogContent/* default */.A, {
                dividers: true,
                children: [
                    renderGroup('beginner'),
                    renderGroup('intermediate'),
                    renderGroup('advanced')
                ]
            })
        ]
    });
}

;// ./src/components/script-editor/content/v2/ScriptExampleSelectorButton.tsx





// 日志前缀
const ScriptExampleSelectorButton_LOG_PREFIX = '[ScriptExampleSelectorButton]';
/**
 * 脚本示例选择按钮组件
 * 点击按钮弹出示例选择弹窗
 */ function ScriptExampleSelectorButton(param) {
    let { examplesMap, onSelectScript } = param;
    console.log("".concat(ScriptExampleSelectorButton_LOG_PREFIX, " 组件初始化"));
    const { t } = (0,es/* useTranslation */.Bd)('homepage/components/script-editor/content/v2/content');
    const [open, setOpen] = (0,react.useState)(false);
    const handleOpen = ()=>{
        console.log("".concat(ScriptExampleSelectorButton_LOG_PREFIX, " 按钮被点击, 准备打开弹窗"));
        setOpen(true);
        console.log("".concat(ScriptExampleSelectorButton_LOG_PREFIX, " 弹窗状态已设置为 true"));
    };
    const handleClose = ()=>{
        console.log("".concat(ScriptExampleSelectorButton_LOG_PREFIX, " 准备关闭弹窗"));
        setOpen(false);
        console.log("".concat(ScriptExampleSelectorButton_LOG_PREFIX, " 弹窗状态已设置为 false"));
    };
    const handleSelect = (script)=>{
        console.log("".concat(ScriptExampleSelectorButton_LOG_PREFIX, " 选中脚本: ").concat(script.name));
        onSelectScript(script);
        handleClose();
    };
    const isDisabled = !examplesMap;
    console.log("".concat(ScriptExampleSelectorButton_LOG_PREFIX, " 按钮是否禁用: ").concat(isDisabled));
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Button/* default */.A, {
                variant: "contained",
                onClick: handleOpen,
                disabled: isDisabled,
                "data-testid": "ScriptExampleSelectorButton__selectButton__01JG2B0084",
                "data-test-comment": "脚本示例选择按钮，点击后打开示例选择弹窗，当示例数据未加载时禁用",
                children: t('ScriptExampleSelectorButton.selectExample')
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(ScriptExamplePopup, {
                open: open,
                onClose: handleClose,
                examplesMap: examplesMap,
                onSelectScript: handleSelect
            })
        ]
    });
}

// EXTERNAL MODULE: ../../libs/fanfanlo/src/watcher/useWatchUpdates.tsx
var useWatchUpdates = __webpack_require__(96332);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/Chip/Chip.js + 2 modules
var Chip = __webpack_require__(95409);
// EXTERNAL MODULE: ../../libs/droid/ui/dist/src/components/permissions/android-permissions/AndroidPermissionsButton.js + 2 modules
var AndroidPermissionsButton = __webpack_require__(366);
;// ./src/components/script-editor/content/v2/ScriptPermissionsEditor.tsx





// 日志前缀
const ScriptPermissionsEditor_LOG_PREFIX = '[ScriptPermissionsEditor]';
/**
 * 脚本权限编辑器组件
 * 编辑 IScript 对象的 permissions 字段
 */ function ScriptPermissionsEditor(param) {
    let { scriptData } = param;
    console.log("".concat(ScriptPermissionsEditor_LOG_PREFIX, " 组件初始化"));
    const { t } = (0,es/* useTranslation */.Bd)('homepage/components/script-editor/content/v2/content');
    // 确保 permissions 数组存在
    if (!scriptData.permissions) {
        console.log("".concat(ScriptPermissionsEditor_LOG_PREFIX, " scriptData.permissions 为 undefined, 初始化为空数组"));
        scriptData.permissions = [];
    } else {
        console.log("".concat(ScriptPermissionsEditor_LOG_PREFIX, " scriptData.permissions 已存在, 长度: ").concat(scriptData.permissions.length));
    }
    // 创建 permissionsProps 对象并使用 toProxy 包装
    const [permissionsProps] = (0,react.useState)(()=>{
        console.log("".concat(ScriptPermissionsEditor_LOG_PREFIX, " 创建 permissionsProps 对象"));
        const props = (0,proxyWatch/* toProxy */.I$)({
            permissions: scriptData.permissions
        });
        console.log("".concat(ScriptPermissionsEditor_LOG_PREFIX, " permissionsProps 创建完成"));
        return props;
    });
    // 监听 permissions 数组的变化
    const [permissions] = (0,useWatchUpdates/* useProxyWatchUpdates */.d)(permissionsProps, 'permissions', permissionsProps.permissions);
    console.log("".concat(ScriptPermissionsEditor_LOG_PREFIX, " 当前权限数量: ").concat(permissions.length), t('ScriptPermissionsEditor.permissionsCount'));
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.A, {
        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(Stack/* default */.A, {
            direction: "row",
            spacing: 2,
            alignItems: "center",
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsxs)(Typography/* default */.A, {
                    variant: "body2",
                    sx: {
                        fontWeight: 500
                    },
                    children: [
                        t('ScriptPermissionsEditor.label'),
                        ":"
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)(Chip/* default */.A, {
                    label: "".concat(permissions.length, " ").concat(t('ScriptPermissionsEditor.permissionsCount')),
                    size: "small",
                    color: permissions.length > 0 ? 'primary' : 'default'
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)(AndroidPermissionsButton/* AndroidPermissionsButton */.S, {
                    permissionsProps: permissionsProps
                })
            ]
        })
    });
}

;// ./src/components/script-editor/content/v2/ScriptEditorContentV2.tsx












// 日志前缀
const ScriptEditorContentV2_LOG_PREFIX = '[ScriptEditorContentV2]';
function ScriptEditorContentV2(param) {
    let { ns, initialCategory, initialName, initialScript } = param;
    console.log("".concat(ScriptEditorContentV2_LOG_PREFIX, " 组件初始化, ns: ").concat(ns, ", initialCategory: ").concat(initialCategory, ", initialName: ").concat(initialName, ", initialScript: ").concat(initialScript));
    const lang = fanfanloI18n/* fanfanloI18n */._.language || 'en';
    console.log("".concat(ScriptEditorContentV2_LOG_PREFIX, " 当前语言: ").concat(lang));
    const { t } = (0,es/* useTranslation */.Bd)('homepage/components/script-editor/content/v2/content');
    // Context 数据状态
    const [contextData, setContextData] = (0,react.useState)(null);
    const [isLoadingContext, setIsLoadingContext] = (0,react.useState)(true);
    const [contextError, setContextError] = (0,react.useState)(null);
    console.log("".concat(ScriptEditorContentV2_LOG_PREFIX, " contextData 是否存在: ").concat(!!contextData, ", isLoadingContext: ").concat(isLoadingContext));
    // 使用 droid-docs API 获取脚本数据
    const { examplesMap, isLoadingMap, mapError, scriptError } = (0,useDroidDocsScripts/* useDroidDocsScripts */.b)(lang);
    console.log("".concat(ScriptEditorContentV2_LOG_PREFIX, " examplesMap 是否加载: ").concat(!!examplesMap, ", isLoadingMap: ").concat(isLoadingMap));
    // 使用 toProxy 管理 IScript 状态
    const [scriptData, setScriptData] = (0,react.useState)(null);
    console.log("".concat(ScriptEditorContentV2_LOG_PREFIX, " scriptData 是否存在: ").concat(!!scriptData));
    // 运行脚本状态
    const [runScript, setRunScript] = (0,react.useState)('');
    console.log("".concat(ScriptEditorContentV2_LOG_PREFIX, " runScript 状态: ").concat(runScript ? '有内容' : '空'));
    // 使用 useRef 标记是否已加载 context 数据
    const hasLoadedContextRef = (0,react.useRef)(false);
    // 加载 context 数据
    (0,react.useEffect)(()=>{
        console.log("".concat(ScriptEditorContentV2_LOG_PREFIX, " context 加载 useEffect 触发, hasLoaded: ").concat(hasLoadedContextRef.current));
        if (hasLoadedContextRef.current) {
            console.log("".concat(ScriptEditorContentV2_LOG_PREFIX, " context 已加载过, 跳过"));
            return;
        }
        let mounted = true;
        console.log("".concat(ScriptEditorContentV2_LOG_PREFIX, " 开始加载 context 数据"));
        async function loadContext() {
            try {
                setIsLoadingContext(true);
                console.log("".concat(ScriptEditorContentV2_LOG_PREFIX, " 调用 loadScrptEditorData, ns: ").concat(ns));
                const data = await (0,script_editor_data_intf/* loadScrptEditorData */.M_)(ns);
                console.log("".concat(ScriptEditorContentV2_LOG_PREFIX, " loadScrptEditorData 完成"), data);
                if (mounted) {
                    console.log("".concat(ScriptEditorContentV2_LOG_PREFIX, " 组件仍然挂载, 设置 context 数据"));
                    setContextData(data);
                    setIsLoadingContext(false);
                    hasLoadedContextRef.current = true;
                } else {
                    console.log("".concat(ScriptEditorContentV2_LOG_PREFIX, " 组件已卸载, 忽略数据"));
                }
            } catch (err) {
                console.error("".concat(ScriptEditorContentV2_LOG_PREFIX, " 加载 context 数据失败"), err);
                if (mounted) {
                    setContextError(err);
                    setIsLoadingContext(false);
                }
            }
        }
        loadContext();
        return ()=>{
            console.log("".concat(ScriptEditorContentV2_LOG_PREFIX, " context 加载 useEffect 清理"));
            mounted = false;
        };
    }, [
        ns
    ]);
    // 创建空的 IScript 对象
    const createEmptyScript = ()=>{
        console.log("".concat(ScriptEditorContentV2_LOG_PREFIX, " 创建空的 IScript 对象"));
        const emptyScript = {
            name: '',
            script: '',
            desc: '',
            path: '',
            version: 1,
            permissions: []
        };
        console.log("".concat(ScriptEditorContentV2_LOG_PREFIX, " 空 IScript 对象创建完成"));
        return (0,proxyWatch/* toProxy */.I$)(emptyScript);
    };
    // 根据 initialCategory 和 initialName 查找并加载脚本
    (0,react.useEffect)(()=>{
        var _targetScript_permissions, _scriptCopy_permissions;
        console.log("".concat(ScriptEditorContentV2_LOG_PREFIX, " useEffect 触发, initialCategory: ").concat(initialCategory, ", initialName: ").concat(initialName, ", examplesMap 是否存在: ").concat(!!examplesMap));
        // 如果没有初始化参数,创建空的 IScript
        if (!initialCategory || !initialName) {
            console.log("".concat(ScriptEditorContentV2_LOG_PREFIX, " 没有初始化参数, 创建空的 IScript"));
            if (!scriptData) {
                console.log("".concat(ScriptEditorContentV2_LOG_PREFIX, " scriptData 为空, 执行创建"));
                const empty = createEmptyScript();
                setScriptData(empty);
                console.log("".concat(ScriptEditorContentV2_LOG_PREFIX, " 空 IScript 已设置"));
            } else {
                console.log("".concat(ScriptEditorContentV2_LOG_PREFIX, " scriptData 已存在, 跳过创建"));
            }
            return;
        }
        // 如果还在加载 examplesMap,等待
        if (!examplesMap) {
            console.log("".concat(ScriptEditorContentV2_LOG_PREFIX, " examplesMap 尚未加载, 等待"));
            return;
        }
        console.log("".concat(ScriptEditorContentV2_LOG_PREFIX, " 开始根据 category 和 name 查找脚本"));
        // 从 examplesMap 中查找对应级别的脚本列表
        const levelScripts = examplesMap[initialCategory];
        console.log("".concat(ScriptEditorContentV2_LOG_PREFIX, " ").concat(initialCategory, " 级别脚本列表长度: ").concat((levelScripts === null || levelScripts === void 0 ? void 0 : levelScripts.length) || 0));
        if (!levelScripts) {
            console.error("".concat(ScriptEditorContentV2_LOG_PREFIX, " 找不到 ").concat(initialCategory, " 级别的脚本列表"));
            return;
        }
        // 在脚本列表中查找目标脚本
        const targetScript = levelScripts.find((s)=>s.path === "".concat(initialCategory, "/").concat(initialName));
        console.log("".concat(ScriptEditorContentV2_LOG_PREFIX, " 查找结果: ").concat(targetScript ? '找到' : '未找到'));
        if (!targetScript) {
            console.error("".concat(ScriptEditorContentV2_LOG_PREFIX, " 找不到脚本: ").concat(initialCategory, "/").concat(initialName));
            return;
        }
        console.log("".concat(ScriptEditorContentV2_LOG_PREFIX, " 找到脚本: ").concat(targetScript.name, ", 权限数量: ").concat(((_targetScript_permissions = targetScript.permissions) === null || _targetScript_permissions === void 0 ? void 0 : _targetScript_permissions.length) || 0));
        // 创建脚本的副本并使用 toProxy 包装
        const scriptCopy = {
            ...targetScript,
            permissions: targetScript.permissions ? [
                ...targetScript.permissions
            ] : []
        };
        console.log("".concat(ScriptEditorContentV2_LOG_PREFIX, " 脚本副本创建完成, permissions 数量: ").concat(((_scriptCopy_permissions = scriptCopy.permissions) === null || _scriptCopy_permissions === void 0 ? void 0 : _scriptCopy_permissions.length) || 0));
        const proxiedScript = (0,proxyWatch/* toProxy */.I$)(scriptCopy);
        console.log("".concat(ScriptEditorContentV2_LOG_PREFIX, " 脚本已使用 toProxy 包装"));
        setScriptData(proxiedScript);
        console.log("".concat(ScriptEditorContentV2_LOG_PREFIX, " scriptData 已更新"));
    }, [
        initialCategory,
        initialName,
        examplesMap
    ]);
    // 处理选择示例脚本
    const handleSelectScript = (script)=>{
        var _scriptCopy_permissions;
        console.log("".concat(ScriptEditorContentV2_LOG_PREFIX, " 选择示例脚本: ").concat(script.name));
        // 创建脚本的副本
        const scriptCopy = {
            ...script,
            permissions: script.permissions ? [
                ...script.permissions
            ] : []
        };
        console.log("".concat(ScriptEditorContentV2_LOG_PREFIX, " 脚本副本创建完成, permissions 数量: ").concat(((_scriptCopy_permissions = scriptCopy.permissions) === null || _scriptCopy_permissions === void 0 ? void 0 : _scriptCopy_permissions.length) || 0));
        const proxiedScript = (0,proxyWatch/* toProxy */.I$)(scriptCopy);
        console.log("".concat(ScriptEditorContentV2_LOG_PREFIX, " 脚本已使用 toProxy 包装"));
        setScriptData(proxiedScript);
        console.log("".concat(ScriptEditorContentV2_LOG_PREFIX, " scriptData 已更新"));
    };
    // 处理运行脚本
    const handleRunScript = ()=>{
        var _scriptData_permissions;
        console.log("".concat(ScriptEditorContentV2_LOG_PREFIX, " 准备运行脚本"));
        if (!scriptData) {
            console.error("".concat(ScriptEditorContentV2_LOG_PREFIX, " scriptData 为空, 无法运行"));
            return;
        }
        if (!scriptData.script) {
            console.error("".concat(ScriptEditorContentV2_LOG_PREFIX, " 脚本内容为空, 无法运行"));
            return;
        }
        console.log("".concat(ScriptEditorContentV2_LOG_PREFIX, " 脚本内容长度: ").concat(scriptData.script.length));
        console.log("".concat(ScriptEditorContentV2_LOG_PREFIX, " 脚本权限数量: ").concat(((_scriptData_permissions = scriptData.permissions) === null || _scriptData_permissions === void 0 ? void 0 : _scriptData_permissions.length) || 0));
        console.log("".concat(ScriptEditorContentV2_LOG_PREFIX, " 使用 autoWebViewJs.callScript 运行"));
        AutoWebViewJs/* autoWebViewJs */.yx.callScript(scriptData.script);
        console.log("".concat(ScriptEditorContentV2_LOG_PREFIX, " 脚本运行完成"));
    };
    console.log("".concat(ScriptEditorContentV2_LOG_PREFIX, " 组件渲染"));
    // 如果 context 正在加载
    if (isLoadingContext) {
        console.log("".concat(ScriptEditorContentV2_LOG_PREFIX, " 渲染加载状态"));
        return /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.A, {
            sx: {
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                minHeight: 200
            },
            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(CircularProgress/* default */.A, {})
        });
    }
    // 如果 context 加载失败
    if (contextError) {
        console.log("".concat(ScriptEditorContentV2_LOG_PREFIX, " 渲染错误状态"));
        return /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.A, {
            sx: {
                p: 2
            },
            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(Alert/* default */.A, {
                severity: "error",
                children: [
                    t('ScriptEditorContentV2.contextError'),
                    ": ",
                    contextError.message
                ]
            })
        });
    }
    // 如果 context 数据不存在
    if (!contextData) {
        console.log("".concat(ScriptEditorContentV2_LOG_PREFIX, " context 数据为空"));
        return null;
    }
    console.log("".concat(ScriptEditorContentV2_LOG_PREFIX, " 渲染完整 UI"));
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(context/* ScriptEditorContextProvider */.xP, {
        value: contextData,
        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.A, {
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.A, {
                    variant: "h5",
                    children: t(ns ? 'ScriptEditorContentV2.title.edit' : 'ScriptEditorContentV2.title.create')
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsxs)(Stack/* default */.A, {
                    direction: "column",
                    spacing: 2,
                    sx: {
                        mt: 2
                    },
                    children: [
                        isLoadingMap && /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.A, {
                            sx: {
                                display: 'flex',
                                alignItems: 'center',
                                gap: 1
                            },
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime.jsx)(CircularProgress/* default */.A, {
                                    size: 24
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.A, {
                                    variant: "body2",
                                    children: t('ScriptEditorContentV2.loading')
                                })
                            ]
                        }),
                        mapError && /*#__PURE__*/ (0,jsx_runtime.jsxs)(Alert/* default */.A, {
                            severity: "error",
                            children: [
                                t('ScriptEditorContentV2.mapError'),
                                ": ",
                                mapError.message
                            ]
                        }),
                        scriptError && /*#__PURE__*/ (0,jsx_runtime.jsxs)(Alert/* default */.A, {
                            severity: "error",
                            children: [
                                t('ScriptEditorContentV2.scriptError'),
                                ": ",
                                scriptError.message
                            ]
                        }),
                        examplesMap && /*#__PURE__*/ (0,jsx_runtime.jsx)(ScriptExampleSelectorButton, {
                            examplesMap: examplesMap,
                            onSelectScript: handleSelectScript
                        }),
                        scriptData && /*#__PURE__*/ (0,jsx_runtime.jsx)(ScriptPermissionsEditor, {
                            scriptData: scriptData
                        }),
                        scriptData && /*#__PURE__*/ (0,jsx_runtime.jsx)(ScriptControlBar, {
                            scriptData: scriptData,
                            onRun: handleRunScript
                        }),
                        scriptData && /*#__PURE__*/ (0,jsx_runtime.jsx)(ScriptEditor, {
                            scriptData: scriptData
                        }, scriptData.path || 'default'),
                        runScript && /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.A, {
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.A, {
                                    variant: "h6",
                                    children: t('ScriptEditorContentV2.result')
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.A, {
                                    sx: {
                                        p: 2,
                                        bgcolor: 'grey.100',
                                        borderRadius: 1,
                                        fontFamily: 'monospace',
                                        whiteSpace: 'pre-wrap'
                                    },
                                    children: runScript
                                })
                            ]
                        })
                    ]
                })
            ]
        })
    });
}

// EXTERNAL MODULE: ../../node_modules/.pnpm/next@15.3.5_@babel+core@7.28.0_@playwright+test@1.57.0_babel-plugin-macros@3.1.0_react-dom@19_gjfccjsd7b6xv5ktyj7vxamu6q/node_modules/next/router.js
var next_router = __webpack_require__(1674);
// EXTERNAL MODULE: ../../libs/fanfanlo/src/log/Log.ts + 1 modules
var Log = __webpack_require__(89597);
;// ./src/components/page/examples/scripts/ExamplesScriptsContent.tsx







const fileLog = new Log/* Log */.tG(false, 'ExamplesScriptsContent_f');
/**
 * 处理 Deep Link 路由的脚本示例页面
 *
 * Deep Link URL 格式:
 * /examples/scripts?category=beginner&name=vibrate&script=true
 *
 * 参数说明:
 * - category: 脚本难度级别 (beginner, intermediate, advanced) - 可选
 * - name: 脚本名称 - 可选
 * - script: 是否加载脚本内容 (true/false) - 默认 true
 */ function ExamplesScriptsContent() {
    const router = (0,next_router.useRouter)();
    const { t } = (0,es/* useTranslation */.Bd)("homepage/components/page/examples/scripts/content");
    const [params, setParams] = (0,react.useState)({
        script: true
    });
    const [isReady, setIsReady] = (0,react.useState)(false);
    // 从 query 参数提取脚本参数
    (0,react.useEffect)(()=>{
        if (!router.isReady) {
            fileLog.log('ExamplesScriptsContent', 'Router not ready yet');
            return;
        }
        fileLog.log('ExamplesScriptsContent', 'Router is ready, processing query params');
        const { category, name, script } = router.query;
        fileLog.log('ExamplesScriptsContent', "Query params: category=".concat(category, ", name=").concat(name, ", script=").concat(script));
        // 解析 script 参数 (可以为字符串 'true'/'false' 或 true/false)
        const scriptBool = script === 'false' ? false : true;
        fileLog.log('ExamplesScriptsContent', "Parsed script param: ".concat(scriptBool));
        // 构建参数对象 (category 和 name 可以为空)
        const newParams = {
            category: category,
            name: name,
            script: scriptBool
        };
        fileLog.log('ExamplesScriptsContent', "Updated params: ".concat(JSON.stringify(newParams)));
        setParams(newParams);
        setIsReady(true);
    }, [
        router.isReady,
        router.query
    ]);
    // 如果参数为空，显示提示信息
    if (!isReady) {
        fileLog.log('ExamplesScriptsContent', 'Still loading router');
        return /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.A, {
            sx: {
                p: 2
            },
            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Alert/* default */.A, {
                severity: "info",
                children: t('ExamplesScriptsContent.loading', 'Loading...')
            })
        });
    }
    // 参数都为空时，显示默认内容（默认为初级第一个脚本）
    if (!params.category && !params.name) {
        fileLog.log('ExamplesScriptsContent', 'No category and name provided, using defaults (beginner first script)');
        return /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.A, {
            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(ScriptEditorContentV2, {})
        });
    }
    // 只有 category 或只有 name 时，显示错误信息
    if (!params.category || !params.name) {
        fileLog.log('ExamplesScriptsContent', "Invalid params: category=".concat(params.category, ", name=").concat(params.name));
        return /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.A, {
            sx: {
                p: 2
            },
            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Alert/* default */.A, {
                severity: "error",
                children: t('ExamplesScriptsContent.invalidParams', '无效的脚本参数，请确保 category 和 name 都已提供')
            })
        });
    }
    fileLog.log('ExamplesScriptsContent', "Rendering ScriptEditorContentV2: category=".concat(params.category, ", name=").concat(params.name, ", script=").concat(params.script));
    // 使用 ScriptEditorContentV2 显示脚本
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.A, {
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(ScriptEditorContentV2, {
            initialCategory: params.category,
            initialName: params.name,
            initialScript: params.script
        })
    });
}


/***/ }),

/***/ 88907:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   H: () => (/* binding */ Fallback)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(94513);
/* harmony import */ var _fanfanlo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(56137);


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

/***/ 94167:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   j: () => (/* binding */ createAsyncContextLoader)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(94513);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(94285);
/* harmony import */ var _log_Log__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(89597);
/* __next_internal_client_entry_do_not_use__ createAsyncContextLoader auto */ 
/**
 * 使用场景：
 * 
export const [MarketPageDataContextProvider, useMarketPageData] = createTypedContext<IMarketPageData>();

 function Content({loader}: {loader: Promise<IStoreWithData<IMarketPageData>>}){
    const store = use(loader);
    fileLog.log('store=', store);
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


const fileLog = new _log_Log__WEBPACK_IMPORTED_MODULE_2__/* .Log */ .tG(false, 'AsyncContextLoader_f');
fileLog.pause = true;
fileLog.childrenPaused = true;
function createAsyncContextLoader(options) {
    fileLog.log('[AsyncContextLoader] createAsyncContextLoader 被调用');
    const { Provider, extract, fallback = null } = options;
    fileLog.log('[AsyncContextLoader] options 解构完成, fallback:', fallback);
    function AsyncContextLoaderInner(props) {
        fileLog.log('[AsyncContextLoader] AsyncContextLoaderInner 渲染开始');
        fileLog.log('[AsyncContextLoader] props.value 类型:', typeof props.value);
        fileLog.log('[AsyncContextLoader] props.value 是 Promise?', props.value instanceof Promise);
        fileLog.log('[AsyncContextLoader] props.value:', props.value);
        fileLog.log('[AsyncContextLoader] 准备调用 use(props.value)');
        const raw = (0,react__WEBPACK_IMPORTED_MODULE_1__.use)(props.value);
        fileLog.log('[AsyncContextLoader] use(props.value) 返回成功, raw:', raw);
        fileLog.log('[AsyncContextLoader] 准备调用 extract(raw)');
        const contextValue = extract(raw);
        fileLog.log('[AsyncContextLoader] extract(raw) 返回成功, contextValue:', contextValue);
        fileLog.log('[AsyncContextLoader] 准备返回 Provider');
        return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Provider, {
            value: contextValue,
            children: props.children
        });
    }
    return function AsyncContextLoader(props) {
        fileLog.log('[AsyncContextLoader] AsyncContextLoader 渲染开始');
        fileLog.log('[AsyncContextLoader] 接收到的 props.value:', props.value);
        fileLog.log('[AsyncContextLoader] 准备渲染 Suspense + AsyncContextLoaderInner');
        return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react__WEBPACK_IMPORTED_MODULE_1__.Suspense, {
            fallback: fallback,
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(AsyncContextLoaderInner, {
                ...props
            })
        });
    };
}


/***/ })

}]);
//# sourceMappingURL=6447-5a9c6ca24543e543.js.map