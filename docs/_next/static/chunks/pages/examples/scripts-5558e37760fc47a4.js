(self["webpackChunk_N_E"] = self["webpackChunk_N_E"] || []).push([[2808],{

/***/ 16063:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ ExamplesScriptsPage)
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/react@19.1.0/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(94513);
// EXTERNAL MODULE: ../../libs/app/ui/src/components/app/AppShell.tsx + 2 modules
var AppShell = __webpack_require__(20939);
// EXTERNAL MODULE: ../../libs/app/ui/src/components/tabbar/Tabbar.tsx
var Tabbar = __webpack_require__(93589);
// EXTERNAL MODULE: ./src/components/navbar/NavBar.tsx
var NavBar = __webpack_require__(32534);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react-i18next@15.6.0_i18next@24.2.3_typescript@5.7.3__react-dom@19.1.0_react@19.1.0__react@19.1.0_typescript@5.7.3/node_modules/react-i18next/dist/es/index.js + 15 modules
var es = __webpack_require__(50279);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/Box/Box.js + 2 modules
var Box = __webpack_require__(6445);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/Alert/Alert.js + 6 modules
var Alert = __webpack_require__(81482);
// EXTERNAL MODULE: ./src/components/script-editor/content/ScriptEditorContent.tsx + 4 modules
var ScriptEditorContent = __webpack_require__(9396);
// EXTERNAL MODULE: ../../node_modules/.pnpm/next@15.3.5_@babel+core@7.28.0_babel-plugin-macros@3.1.0_react-dom@19.1.0_react@19.1.0__react@19.1.0_sass@1.89.2/node_modules/next/router.js
var next_router = __webpack_require__(75640);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react@19.1.0/node_modules/react/index.js
var react = __webpack_require__(94285);
// EXTERNAL MODULE: ../../libs/fanfanlo/src/log/Log.ts + 1 modules
var Log = __webpack_require__(48891);
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
            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(ScriptEditorContent/* ScriptEditorContent */.o, {})
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
    fileLog.log('ExamplesScriptsContent', "Rendering ScriptEditorContent: category=".concat(params.category, ", name=").concat(params.name, ", script=").concat(params.script));
    // 使用 ScriptEditorContent 显示脚本
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.A, {
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(ScriptEditorContent/* ScriptEditorContent */.o, {
            initialCategory: params.category,
            initialName: params.name,
            initialScript: params.script
        })
    });
}

;// ./src/pages/examples/scripts/index.tsx




function ExamplesScriptsPage() {
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(AppShell/* AppShell */.G, {
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Tabbar/* TabbarContainer */.y, {
            titleConf: {
                ns: "homepage/pages/examples/scripts",
                key: "title"
            },
            navBar: /*#__PURE__*/ (0,jsx_runtime.jsx)(NavBar/* NavBar */.j, {}),
            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(ExamplesScriptsContent, {})
        })
    });
}


/***/ }),

/***/ 90342:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {


    (window.__NEXT_P = window.__NEXT_P || []).push([
      "/examples/scripts",
      function () {
        return __webpack_require__(16063);
      }
    ]);
    if(false) {}
  

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, [5352,1482,1174,3716,3617,636,6593,8792], () => (__webpack_exec__(90342)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ _N_E = __webpack_exports__;
/******/ }
]);
//# sourceMappingURL=scripts-5558e37760fc47a4.js.map