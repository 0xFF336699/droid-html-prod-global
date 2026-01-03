(self["webpackChunk_N_E"] = self["webpackChunk_N_E"] || []).push([[2764],{

/***/ 54745:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {


    (window.__NEXT_P = window.__NEXT_P || []).push([
      "/float-window-edit",
      function () {
        return __webpack_require__(74382);
      }
    ]);
    if(false) {}
  

/***/ }),

/***/ 74382:
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
var AppShell = __webpack_require__(65505);
// EXTERNAL MODULE: ../../libs/app/ui/src/components/appbar/AppBar.tsx + 3 modules
var AppBar = __webpack_require__(82524);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react-i18next@15.6.0_i18next@24.2.3_typescript@5.7.3__react-dom@19.1.0_react@19.1.0__react@19.1.0_typescript@5.7.3/node_modules/react-i18next/dist/es/index.js + 15 modules
var es = __webpack_require__(56137);
// EXTERNAL MODULE: ../../node_modules/.pnpm/next@15.3.5_@babel+core@7.28.0_@playwright+test@1.57.0_babel-plugin-macros@3.1.0_react-dom@19_gjfccjsd7b6xv5ktyj7vxamu6q/node_modules/next/router.js
var next_router = __webpack_require__(1674);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react@19.1.0/node_modules/react/index.js
var react = __webpack_require__(94285);
// EXTERNAL MODULE: ./src/components/android-float/window/data.ts
var data = __webpack_require__(74312);
// EXTERNAL MODULE: ../../libs/fanfanlo/src/log/Log.ts + 1 modules
var Log = __webpack_require__(89597);
// EXTERNAL MODULE: ./src/components/android-float/window/WindowConfEditor.tsx + 5 modules
var WindowConfEditor = __webpack_require__(99910);
// EXTERNAL MODULE: ../../libs/droid/android/src/android/win/WindowConf.ts
var WindowConf = __webpack_require__(99949);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react-hot-toast@2.5.2_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/react-hot-toast/dist/index.mjs + 1 modules
var dist = __webpack_require__(73349);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/Box/Box.js + 2 modules
var Box = __webpack_require__(92061);
;// ./src/components/android-float/window/EditWindowContent.tsx









const fileLog = new Log/* Log */.tG(false, 'EditWindowContent.tsx');
function EditWindowContent() {
    const uiLog = fileLog.sub(false, 'EditWindowContent');
    const { t } = (0,es/* useTranslation */.Bd)('homepage/components/android-float/window/content');
    const router = (0,next_router.useRouter)();
    const [windowConf, setWindowConf] = (0,react.useState)(null);
    const [noWindowId, setNoWindowId] = (0,react.useState)(false);
    const [windowConfNotFound, setWindowConfNotFound] = (0,react.useState)(false);
    const { windowId } = router.query;
    (0,react.useEffect)(()=>{
        const effLog = uiLog.sub(true, 'useEffect-init');
        effLog.log('Editing window id:', windowId);
        if (!windowId) {
            setNoWindowId(true);
            dist/* default */.Ay.error('No windowId provided in query parameters.');
            return;
        }
        data/* androidFloatWindowData */.Kl.init();
        const windowConf = data/* androidFloatWindowData */.Kl.data.windowData.windowList.find((w)=>w.windowId === windowId);
        effLog.log('Loaded window config for editing:', windowConf);
        if (!windowConf) {
            setWindowConfNotFound(true);
            dist/* default */.Ay.error(t('EditWindowContent.windowConfNotFound'));
            return;
        }
        // 使用createWindowConfCopy补齐所有缺失的属性
        const mergedConf = (0,WindowConf/* createWindowConfCopy */.Sb)(windowConf);
        effLog.log('Merged config with default values:', mergedConf);
        setWindowConf(mergedConf);
    }, []);
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.A, {
        children: [
            noWindowId && /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.A, {
                children: t("EditWindowContent.noWindowId")
            }),
            windowConfNotFound && /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.A, {
                children: t("EditWindowContent.windowConfNotFound")
            }),
            windowConf && /*#__PURE__*/ (0,jsx_runtime.jsx)(WindowConfEditor/* WindowConfEditor */.S, {
                windowConf: windowConf
            })
        ]
    });
}

;// ./src/pages/float-window-edit/index.tsx




function AndroidFloatWindow() {
    const { t } = (0,es/* useTranslation */.Bd)('homepage/pages/android-float-window/content');
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(AppShell/* AppShell */.G, {
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(AppBar/* AppbarContainer */.W, {
            appbarProps: {
                title: t('content.title'),
                back: true
            },
            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(EditWindowContent, {})
        })
    });
}


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, [472,1172,7468,9910,636,6593,8792], () => (__webpack_exec__(54745)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ _N_E = __webpack_exports__;
/******/ }
]);
//# sourceMappingURL=float-window-edit-04e4f1648d4ab3b5.js.map