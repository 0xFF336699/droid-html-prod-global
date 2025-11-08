"use strict";
(self["webpackChunk_N_E"] = self["webpackChunk_N_E"] || []).push([[3617],{

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

/***/ 9396:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  o: () => (/* binding */ ScriptEditorContent)
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/react@19.1.0/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(94513);
// EXTERNAL MODULE: ../../libs/fanfanlo/src/log/Log.ts + 1 modules
var Log = __webpack_require__(48891);
// EXTERNAL MODULE: ../../libs/fanfanlo/src/i18n/fanfanloI18n.ts
var fanfanloI18n = __webpack_require__(95414);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react-i18next@15.6.0_i18next@24.2.3_typescript@5.7.3__react-dom@19.1.0_react@19.1.0__react@19.1.0_typescript@5.7.3/node_modules/react-i18next/dist/es/index.js + 15 modules
var es = __webpack_require__(50279);
// EXTERNAL MODULE: ../../libs/fanfanlo/src/iframe/IFrameReactContainer.tsx + 1 modules
var IFrameReactContainer = __webpack_require__(6955);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/Box/Box.js + 2 modules
var Box = __webpack_require__(6445);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/Typography/Typography.js
var Typography = __webpack_require__(67079);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/Stack/Stack.js + 1 modules
var Stack = __webpack_require__(9220);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/CircularProgress/CircularProgress.js + 1 modules
var CircularProgress = __webpack_require__(95746);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/Alert/Alert.js + 6 modules
var Alert = __webpack_require__(81482);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/Button/Button.js + 3 modules
var Button = __webpack_require__(28669);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/TextareaAutosize/TextareaAutosize.js
var TextareaAutosize = __webpack_require__(90333);
// EXTERNAL MODULE: ../../libs/fanfanlo/src/react/createTypedContext.ts
var createTypedContext = __webpack_require__(3131);
// EXTERNAL MODULE: ../../libs/fanfanlo/src/react/AsyncContextLoader.tsx
var AsyncContextLoader = __webpack_require__(28210);
// EXTERNAL MODULE: ./src/components/fallback/Fallback.tsx
var Fallback = __webpack_require__(55762);
;// ./src/components/script-editor/data/context.tsx



const [ScriptEditorContextProvider, useScriptEditorContext] = (0,createTypedContext/* createTypedContext */.W)();
const ScriptEditorContextLoader = (0,AsyncContextLoader/* createAsyncContextLoader */.j)({
    Provider: ScriptEditorContextProvider,
    extract: (res)=>res,
    fallback: /*#__PURE__*/ (0,jsx_runtime.jsx)(Fallback/* Fallback */.H, {})
});

// EXTERNAL MODULE: ../../libs/fanfanlo/src/i18n/i18n-value-loader.ts
var i18n_value_loader = __webpack_require__(62095);
// EXTERNAL MODULE: ../../libs/fanfanlo/src/storage/store-utils.ts
var store_utils = __webpack_require__(4887);
// EXTERNAL MODULE: ../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/lodash.js
var lodash = __webpack_require__(63624);
// EXTERNAL MODULE: __barrel_optimize__?names=ulid!=!../../node_modules/.pnpm/ulid@2.4.0/node_modules/ulid/dist/index.esm.js + 1 modules
var index_esm = __webpack_require__(67131);
;// ./src/components/script-editor/data/script-editor.data.intf.ts



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
    const unnamed = await (0,i18n_value_loader/* loadI18nValue */.y)("homepage/components/script-editor/data/content", 'content.unnamed');
    const id = (0,index_esm/* ulid */.Z0)();
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
    const s = await store_utils/* storeUtils */.P.getNamespaceStoreWithData(ns, {
        forceReset: false,
        mergeDefData: true,
        defData: def
    });
    console.log('ddddddddd', s);
    return s.data;
}

// EXTERNAL MODULE: ./src/markets/market-html-utils.ts
var market_html_utils = __webpack_require__(40682);
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
                const map = await fetchExamplesMap(lang, false);
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

// EXTERNAL MODULE: ../../libs/droid/android/src/android/AutoWebViewJs.ts + 1 modules
var AutoWebViewJs = __webpack_require__(45921);
;// ./src/components/script-editor/content/ScriptEditorContent.tsx









const fileLog = new Log/* Log */.tG(false, 'ScriptEditorContent_f');
function ScriptEditorContent(param) {
    let { ns, initialCategory, initialName, initialScript } = param;
    const lang = fanfanloI18n/* fanfanloI18n */._.language || 'en';
    // 使用 droid-docs API 获取脚本数据
    const { examplesMap, selectedLevel, selectedScript, scriptContent, isLoadingMap, isLoadingScript, mapError, scriptError, setSelectedLevel, selectScript, updateScriptContent } = useDroidDocsScripts(lang);
    console.log('[ScriptEditorContent] useDroidDocsScripts 初始化完成', {
        examplesMapLoaded: !!examplesMap,
        selectedLevel,
        selectedScriptName: selectedScript === null || selectedScript === void 0 ? void 0 : selectedScript.name,
        scriptContentLength: scriptContent.length,
        isLoadingMap,
        isLoadingScript
    });
    // 运行脚本状态
    const [runScript, setRunScript] = (0,react.useState)('');
    console.log('[ScriptEditorContent] 初始化 runScript: 空字符串');
    const { t } = (0,es/* useTranslation */.Bd)("homepage/components/script-editor/content/content");
    // 如果提供了初始参数，自动选择并加载脚本
    (0,react.useEffect)(()=>{
        fileLog.log('ScriptEditorContent', "InitialParams effect triggered: initialCategory=".concat(initialCategory, ", initialName=").concat(initialName, ", examplesMapLoaded=").concat(!!examplesMap));
        if (!initialCategory || !initialName || !examplesMap) {
            if (initialCategory && initialName) {
                fileLog.log('ScriptEditorContent', 'Waiting for examplesMap to load');
            }
            return;
        }
        fileLog.log('ScriptEditorContent', "Initializing with: category=".concat(initialCategory, ", name=").concat(initialName, ", script=").concat(initialScript));
        const levelScripts = examplesMap[initialCategory];
        if (!levelScripts) {
            fileLog.error('ScriptEditorContent', "Category not found: ".concat(initialCategory));
            return;
        }
        // 按 path 查找脚本，而不是按 name，因为 name 是 i18n 翻译后的名称
        // path 格式: "category/script-name"，例如: "beginner/vibrate"
        const targetScript = levelScripts.find((s)=>s.path === "".concat(initialCategory, "/").concat(initialName));
        if (!targetScript) {
            fileLog.error('ScriptEditorContent', "Script not found: ".concat(initialCategory, "/").concat(initialName));
            fileLog.log('ScriptEditorContent', "Available scripts in ".concat(initialCategory, ":"), levelScripts.map((s)=>({
                    path: s.path,
                    name: s.name
                })));
            return;
        }
        fileLog.log('ScriptEditorContent', "Found target script: ".concat(targetScript.name));
        // 不调用 setSelectedLevel，因为它会自动选择该级别的第一个脚本
        // 直接调用 selectScript 来选择指定的脚本
        selectScript(targetScript);
        if (initialScript === false) {
            fileLog.log('ScriptEditorContent', 'initialScript is false, clearing content');
            updateScriptContent('');
        }
    }, [
        initialCategory,
        initialName,
        initialScript,
        examplesMap,
        setSelectedLevel,
        selectScript,
        updateScriptContent
    ]);
    // 使用 useRef 标记是否已加载，防止重复执行 loadScrptEditorData
    const hasLoadedRef = (0,react.useRef)(false);
    // 创建稳定的加载函数引用，使用 useCallback 只在 ns 改变时重新创建
    const loadData = (0,react.useCallback)(async ()=>{
        console.log("[ScriptEditorContent] loadData 函数被调用，hasLoaded=".concat(hasLoadedRef.current));
        // 防止重复加载：如果已加载过，直接返回空 Promise
        if (hasLoadedRef.current) {
            console.log("[ScriptEditorContent] 数据已加载过，跳过重新加载");
            return Promise.resolve(null);
        }
        console.log("[ScriptEditorContent] 开始加载数据，ns=".concat(ns));
        hasLoadedRef.current = true;
        try {
            const result = await loadScrptEditorData(ns);
            console.log("[ScriptEditorContent] 数据加载完成", result);
            return result;
        } catch (error) {
            console.error("[ScriptEditorContent] 数据加载失败", error);
            hasLoadedRef.current = false; // 加载失败，允许重试
            throw error;
        }
    }, [
        ns
    ]);
    // 处理难度级别变更
    const handleLevelChange = (level)=>{
        console.log("[ScriptEditorContent] 切换难度级别为: ".concat(level));
        setSelectedLevel(level);
    };
    // 处理脚本选择
    const handleScriptChange = async (scriptPath)=>{
        console.log("[ScriptEditorContent] 选择脚本: ".concat(scriptPath));
        if (!examplesMap) {
            console.error('[ScriptEditorContent] examplesMap 未加载');
            return;
        }
        // 从所有级别中查找脚本
        let foundScript = null;
        for (const level of [
            'beginner',
            'intermediate',
            'advanced'
        ]){
            const scripts = examplesMap[level];
            console.log("[ScriptEditorContent] 在 ".concat(level, " 级别中查找脚本"));
            foundScript = scripts.find((s)=>s.path === scriptPath);
            if (foundScript) {
                console.log("[ScriptEditorContent] 在 ".concat(level, " 级别找到脚本: ").concat(foundScript.name));
                break;
            }
        }
        if (foundScript) {
            console.log("[ScriptEditorContent] 开始加载脚本内容");
            await selectScript(foundScript);
        } else {
            console.error('[ScriptEditorContent] 未找到脚本:', scriptPath);
        }
    };
    function onRunClick() {
        console.log("[ScriptEditorContent] 执行脚本, 脚本名称: ".concat(selectedScript === null || selectedScript === void 0 ? void 0 : selectedScript.name));
        const isLoadHtml = false;
        if (isLoadHtml) {
            setRunScript('');
            setTimeout(()=>setRunScript(scriptContent), 100 * 3);
        } else {
            AutoWebViewJs/* autoWebViewJs */.yx.callScript(scriptContent);
        }
    }
    // 获取当前级别的脚本列表
    const currentLevelScripts = examplesMap ? examplesMap[selectedLevel] : [];
    console.log("[ScriptEditorContent] 当前级别 (".concat(selectedLevel, ") 有 ").concat((currentLevelScripts === null || currentLevelScripts === void 0 ? void 0 : currentLevelScripts.length) || 0, " 个脚本"));
    console.log('rendering ScriptEditorContent');
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(jsx_runtime.Fragment, {
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(ScriptEditorContextLoader, {
            value: loadData,
            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.A, {
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.A, {
                        variant: "h5",
                        children: t(ns ? 'ScriptEditorContent.name.editScript' : 'ScriptEditorContent.name.createScript')
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)(Stack/* default */.A, {
                        direction: "column",
                        spacing: 2,
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
                                        children: t('ScriptEditorContent.loading')
                                    })
                                ]
                            }),
                            mapError && /*#__PURE__*/ (0,jsx_runtime.jsxs)(Alert/* default */.A, {
                                severity: "error",
                                children: [
                                    t('ScriptEditorContent.mapError'),
                                    ": ",
                                    mapError.message
                                ]
                            }),
                            scriptError && /*#__PURE__*/ (0,jsx_runtime.jsxs)(Alert/* default */.A, {
                                severity: "error",
                                children: [
                                    t('ScriptEditorContent.scriptError'),
                                    ": ",
                                    scriptError.message
                                ]
                            }),
                            examplesMap && /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.A, {
                                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(Stack/* default */.A, {
                                    direction: "row",
                                    spacing: 1,
                                    style: {
                                        marginBottom: '12px',
                                        alignItems: 'center',
                                        flexWrap: 'wrap'
                                    },
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)(Typography/* default */.A, {
                                            variant: "body2",
                                            style: {
                                                fontWeight: 500
                                            },
                                            children: [
                                                t('ScriptEditorContent.difficulty'),
                                                ":"
                                            ]
                                        }),
                                        [
                                            'beginner',
                                            'intermediate',
                                            'advanced'
                                        ].map((level)=>/*#__PURE__*/ (0,jsx_runtime.jsxs)(Button/* default */.A, {
                                                variant: selectedLevel === level ? 'contained' : 'outlined',
                                                size: "small",
                                                onClick: ()=>handleLevelChange(level),
                                                children: [
                                                    t("ScriptEditorContent.difficultyLevels.".concat(level)),
                                                    " (".concat(examplesMap[level].length, ")")
                                                ]
                                            }, level))
                                    ]
                                })
                            }),
                            examplesMap && currentLevelScripts && currentLevelScripts.length > 0 && /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.A, {
                                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(Stack/* default */.A, {
                                    direction: "row",
                                    spacing: 1,
                                    style: {
                                        marginBottom: '12px',
                                        alignItems: 'center'
                                    },
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)(Typography/* default */.A, {
                                            variant: "body2",
                                            style: {
                                                fontWeight: 500
                                            },
                                            children: [
                                                t('ScriptEditorContent.selectScript'),
                                                ":"
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("select", {
                                            value: (selectedScript === null || selectedScript === void 0 ? void 0 : selectedScript.path) || '',
                                            onChange: (e)=>handleScriptChange(e.target.value),
                                            disabled: isLoadingScript,
                                            style: {
                                                padding: '8px 12px',
                                                borderRadius: '4px',
                                                border: '1px solid #ccc'
                                            },
                                            children: [
                                                /*#__PURE__*/ (0,jsx_runtime.jsx)("option", {
                                                    value: "",
                                                    children: t('ScriptEditorContent.selectScriptPlaceholder')
                                                }),
                                                currentLevelScripts.map((script)=>/*#__PURE__*/ (0,jsx_runtime.jsxs)("option", {
                                                        value: script.path,
                                                        children: [
                                                            script.name,
                                                            " - ",
                                                            script.desc
                                                        ]
                                                    }, script.path))
                                            ]
                                        }),
                                        isLoadingScript && /*#__PURE__*/ (0,jsx_runtime.jsx)(CircularProgress/* default */.A, {
                                            size: 20
                                        })
                                    ]
                                })
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.A, {
                                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Button/* default */.A, {
                                    onClick: onRunClick,
                                    disabled: !selectedScript || isLoadingScript,
                                    children: t('ScriptEditorContent.run')
                                })
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.A, {
                                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(TextareaAutosize/* default */.A, {
                                    value: scriptContent,
                                    onChange: (e)=>updateScriptContent(e.target.value),
                                    style: {
                                        width: "100%",
                                        minHeight: "200px"
                                    }
                                })
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.A, {
                                children: runScript && /*#__PURE__*/ (0,jsx_runtime.jsx)(IFrameReactContainer/* IFrameReactContainer */.T, {
                                    content: runScript,
                                    urlAsContent: true,
                                    htmlBuilder: market_html_utils/* marketHtmlUtils */.P.mergeHtml
                                })
                            })
                        ]
                    })
                ]
            })
        })
    });
}


/***/ }),

/***/ 28210:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   j: () => (/* binding */ createAsyncContextLoader)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(94513);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(94285);
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
        const cachedPromise = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(()=>props.value(), []);
        const raw = (0,react__WEBPACK_IMPORTED_MODULE_1__.use)(cachedPromise);
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


/***/ })

}]);
//# sourceMappingURL=3617-c56732e110492207.js.map