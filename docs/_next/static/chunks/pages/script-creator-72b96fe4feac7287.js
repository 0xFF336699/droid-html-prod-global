(self["webpackChunk_N_E"] = self["webpackChunk_N_E"] || []).push([[9426],{

/***/ 40682:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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

/***/ 55854:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ ScriptCreatorPage)
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/react@19.1.0/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(94513);
// EXTERNAL MODULE: ../../libs/app/ui/src/components/app/AppShell.tsx + 2 modules
var AppShell = __webpack_require__(20939);
// EXTERNAL MODULE: ../../libs/app/ui/src/components/appbar/AppBar.tsx + 3 modules
var AppBar = __webpack_require__(97972);
// EXTERNAL MODULE: ../../libs/app/ui/src/components/tabbar/Tabbar.tsx
var Tabbar = __webpack_require__(93589);
// EXTERNAL MODULE: ./src/components/navbar/NavBar.tsx
var NavBar = __webpack_require__(32534);
// EXTERNAL MODULE: ./src/components/page/examples/scripts/ExamplesScriptsContent.tsx + 6 modules
var ExamplesScriptsContent = __webpack_require__(17558);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/Box/Box.js + 2 modules
var Box = __webpack_require__(6445);
// EXTERNAL MODULE: ../../libs/fanfanlo/src/log/Log.ts + 1 modules
var Log = __webpack_require__(48891);
// EXTERNAL MODULE: ../../libs/fanfanlo/src/i18n/fanfanloI18n.ts
var fanfanloI18n = __webpack_require__(95414);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react-i18next@15.6.0_i18next@24.2.3_typescript@5.7.3__react-dom@19.1.0_react@19.1.0__react@19.1.0_typescript@5.7.3/node_modules/react-i18next/dist/es/index.js + 15 modules
var es = __webpack_require__(50279);
// EXTERNAL MODULE: ../../libs/fanfanlo/src/iframe/IFrameReactContainer.tsx + 1 modules
var IFrameReactContainer = __webpack_require__(6955);
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
// EXTERNAL MODULE: ./src/components/script-editor/data/context.tsx
var context = __webpack_require__(71647);
// EXTERNAL MODULE: ./src/components/script-editor/data/script-editor.data.intf.ts
var script_editor_data_intf = __webpack_require__(84754);
// EXTERNAL MODULE: ./src/markets/market-html-utils.ts
var market_html_utils = __webpack_require__(40682);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react@19.1.0/node_modules/react/index.js
var react = __webpack_require__(94285);
// EXTERNAL MODULE: ./src/components/script-editor/content/useDroidDocsScripts.ts + 1 modules
var useDroidDocsScripts = __webpack_require__(98817);
// EXTERNAL MODULE: ../../libs/droid/android/src/android/AutoWebViewJs.ts + 1 modules
var AutoWebViewJs = __webpack_require__(45921);
;// ./src/components/script-editor/content/ScriptEditorContent.tsx









const fileLog = new Log/* Log */.tG(false, 'ScriptEditorContent_f');
function ScriptEditorContent(param) {
    let { ns, initialCategory, initialName, initialScript } = param;
    const lang = fanfanloI18n/* fanfanloI18n */._.language || 'en';
    // 使用 droid-docs API 获取脚本数据
    const { examplesMap, selectedLevel, selectedScript, scriptContent, isLoadingMap, isLoadingScript, mapError, scriptError, setSelectedLevel, selectScript, updateScriptContent } = (0,useDroidDocsScripts/* useDroidDocsScripts */.b)(lang);
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
        // 同时执行两个操作：
        // 1. selectScript(targetScript) - 加载脚本内容（异步）
        // 2. setSelectedLevel(initialCategory) - 更新UI状态（同步触发）
        // selectScript是异步的，所以会在setSelectedLevel的自动选择完成后才加载我们的目标脚本
        selectScript(targetScript);
        fileLog.log('ScriptEditorContent', "Called selectScript for: ".concat(targetScript.path));
        // 如果当前选中的级别与初始类别不匹配，更新级别
        if (selectedLevel !== initialCategory) {
            fileLog.log('ScriptEditorContent', "Updating selectedLevel from ".concat(selectedLevel, " to ").concat(initialCategory));
            setSelectedLevel(initialCategory);
        } else {
            fileLog.log('ScriptEditorContent', "selectedLevel already matches initialCategory: ".concat(initialCategory));
        }
        if (initialScript === false) {
            fileLog.log('ScriptEditorContent', 'initialScript is false, clearing content');
            updateScriptContent('');
        }
    }, [
        initialCategory,
        initialName,
        initialScript,
        examplesMap,
        selectedLevel,
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
            const result = await (0,script_editor_data_intf/* loadScrptEditorData */.M_)(ns);
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
    // 使用 useState 的 lazy initialization 确保 Promise 只创建一次
    // 这比 useRef 更符合 React 的渲染模型,避免在函数体中直接执行副作用
    const [loadDataPromise] = (0,react.useState)(()=>{
        console.log("[ScriptEditorContent] 通过 useState lazy init 创建 loadDataPromise");
        return loadData();
    });
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
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(context/* ScriptEditorContextLoader */.RA, {
            value: loadDataPromise,
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
                                                currentLevelScripts.map((script)=>/*#__PURE__*/ (0,jsx_runtime.jsx)("option", {
                                                        value: script.path,
                                                        children: script.name
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

;// ./src/components/page/script-creator/content/ScriptCreatorContent.tsx



function ScriptCreatorContent() {
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(jsx_runtime.Fragment, {
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.A, {
            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(ScriptEditorContent, {})
        })
    });
}

// EXTERNAL MODULE: __barrel_optimize__?names=useTranslation!=!../../node_modules/.pnpm/react-i18next@15.6.0_i18next@24.2.3_typescript@5.7.3__react-dom@19.1.0_react@19.1.0__react@19.1.0_typescript@5.7.3/node_modules/react-i18next/dist/es/index.js
var dist_es = __webpack_require__(9825);
;// ./src/pages/script-creator/index.tsx






function ScriptCreatorPage() {
    const { t } = (0,dist_es/* useTranslation */.Bd)('homepage/pages/script-creator/content');
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(AppShell/* AppShell */.G, {
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(AppBar/* AppbarContainer */.W, {
            appbarProps: {
                title: t('content.title'),
                back: true
            },
            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(ExamplesScriptsContent/* ExamplesScriptsContent */.z, {})
        })
    });
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(AppShell/* AppShell */.G, {
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Tabbar/* TabbarContainer */.y, {
            titleConf: {
                ns: 'homepage/pages/script-creator/content',
                key: 'content.title'
            },
            navBar: /*#__PURE__*/ (0,jsx_runtime.jsx)(NavBar/* NavBar */.j, {}),
            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(ScriptCreatorContent, {})
        })
    });
}


/***/ }),

/***/ 61350:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {


    (window.__NEXT_P = window.__NEXT_P || []).push([
      "/script-creator",
      function () {
        return __webpack_require__(55854);
      }
    ]);
    if(false) {}
  

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
/******/ __webpack_require__.O(0, [5299,9893,889,9777,7320,3716,6401,636,6593,8792], () => (__webpack_exec__(61350)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ _N_E = __webpack_exports__;
/******/ }
]);
//# sourceMappingURL=script-creator-72b96fe4feac7287.js.map