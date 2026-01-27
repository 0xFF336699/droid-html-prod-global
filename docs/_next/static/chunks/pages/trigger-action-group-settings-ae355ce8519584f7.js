(self["webpackChunk_N_E"] = self["webpackChunk_N_E"] || []).push([[2369],{

/***/ 17909:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {


    (window.__NEXT_P = window.__NEXT_P || []).push([
      "/trigger-action-group-settings",
      function () {
        return __webpack_require__(41970);
      }
    ]);
    if(false) {}
  

/***/ }),

/***/ 41970:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ TriggerActionGroupSettings)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(94513);
/* harmony import */ var _app_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(26719);
/* harmony import */ var _app_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(40018);
/* harmony import */ var _droid_project_v2_ui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(48399);
/* harmony import */ var _droid_project_v2_ui__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(97752);
/* harmony import */ var _fanfanlo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(56137);




function TriggerActionGroupSettings() {
    const { t } = (0,_fanfanlo__WEBPACK_IMPORTED_MODULE_1__/* .useTranslation */ .Bd)('homepage/pages/trigger-action-group-settings/content');
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_app_ui__WEBPACK_IMPORTED_MODULE_2__/* .AppShell */ .G, {
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_app_ui__WEBPACK_IMPORTED_MODULE_3__/* .AppbarContainer */ .W, {
            appbarProps: {
                title: t('content.title'),
                back: true
            },
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_droid_project_v2_ui__WEBPACK_IMPORTED_MODULE_4__/* .EntitySettingsPageContainer */ .T, {
                finder: _droid_project_v2_ui__WEBPACK_IMPORTED_MODULE_5__/* .entityFinders */ .r.triggerActionGroup,
                title: t('content.title')
            })
        })
    });
}


/***/ }),

/***/ 48399:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  T: () => (/* binding */ EntitySettingsPageContainer)
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/react@19.1.0/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(94513);
// EXTERNAL MODULE: ../../libs/droid/project-v2-interface/src/index.ts + 29 modules
var src = __webpack_require__(34456);
// EXTERNAL MODULE: ../../node_modules/.pnpm/next@15.3.5_@babel+core@7.28.0_@playwright+test@1.57.0_babel-plugin-macros@3.1.0_react-dom@19_gjfccjsd7b6xv5ktyj7vxamu6q/node_modules/next/router.js
var next_router = __webpack_require__(1674);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react@19.1.0/node_modules/react/index.js
var react = __webpack_require__(94285);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/Box/Box.js + 2 modules
var Box = __webpack_require__(92061);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/Container/Container.js + 1 modules
var Container = __webpack_require__(62145);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/Paper/Paper.js + 1 modules
var Paper = __webpack_require__(68732);
// EXTERNAL MODULE: ../../libs/droid/project-v2-ui/src/ui/components/entity-settings/EntityBasicInfoEditor.tsx + 1 modules
var EntityBasicInfoEditor = __webpack_require__(95591);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react-i18next@15.6.0_i18next@24.2.3_typescript@5.7.3__react-dom@19.1.0_react@19.1.0__react@19.1.0_typescript@5.7.3/node_modules/react-i18next/dist/es/index.js + 15 modules
var es = __webpack_require__(56137);
;// ../../libs/droid/project-v2-ui/src/ui/components/entity-settings/EntitySettingsPage.tsx





function EntitySettingsPage(param) {
    let { title, entity } = param;
    const { t } = (0,es/* useTranslation */.Bd)('droid-project-v2-ui/ui/components/entity-settings/content');
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.A, {
        sx: {
            display: 'flex',
            flexDirection: 'column',
            minHeight: '100vh',
            bgcolor: 'background.default'
        },
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Container/* default */.A, {
            maxWidth: "md",
            sx: {
                py: 4
            },
            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Paper/* default */.A, {
                sx: {
                    p: 3,
                    borderRadius: 2
                },
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(EntityBasicInfoEditor/* EntityBasicInfoEditor */.p, {
                    entity: entity,
                    showTitle: true,
                    showSubtitle: true,
                    showTags: true,
                    showCategories: true
                })
            })
        })
    });
}

// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/CircularProgress/CircularProgress.js + 1 modules
var CircularProgress = __webpack_require__(95657);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/Alert/Alert.js + 6 modules
var Alert = __webpack_require__(99450);
// EXTERNAL MODULE: ../../libs/fanfanlo/src/log/Log.ts + 1 modules
var Log = __webpack_require__(89597);
;// ../../libs/droid/project-v2-ui/src/ui/components/entity-settings/EntitySettingsPageContainer.tsx








const fileLog = new Log/* Log */.tG(false, 'EntitySettingsPageContainer');
fileLog.pause = false;
function EntitySettingsPageContainer(param) {
    let { finder, titleKey, title } = param;
    const router = (0,next_router.useRouter)();
    const { t, i18n } = (0,es/* useTranslation */.Bd)('droid-project-v2-ui/ui/components/entity-settings/content');
    // 默认语言逻辑
    const defaultLang = i18n.language || 'zh-CN';
    const pageTitle = title || (titleKey ? t(titleKey) : 'Settings');
    // State
    const [project, setProject] = (0,react.useState)(null);
    const [entity, setEntity] = (0,react.useState)(undefined);
    const [loading, setLoading] = (0,react.useState)(true);
    const [error, setError] = (0,react.useState)(null);
    // Initial Load
    (0,react.useEffect)(()=>{
        if (!router.isReady) return;
        const { projectUlid, ulid } = router.query;
        fileLog.log('[useEffect] query:', router.query);
        if (!projectUlid || !ulid) {
            if (router.isReady && (!projectUlid || !ulid)) {
                setError(t('EntitySettingsPageContainer.error.missingParams'));
                setLoading(false);
            }
            return;
        }
        try {
            const foundProject = src.projectStore.findProject(projectUlid);
            if (!foundProject) {
                setError(t('EntitySettingsPageContainer.error.projectNotFound'));
                setLoading(false);
                return;
            }
            const foundEntity = finder(foundProject, ulid);
            if (!foundEntity) {
                setError(t('EntitySettingsPageContainer.error.entityNotFound'));
                setLoading(false);
                return;
            }
            setProject(foundProject);
            setEntity(foundEntity);
            setLoading(false);
        } catch (err) {
            setError(err.message);
            setLoading(false);
        }
    }, [
        router.isReady,
        router.query,
        finder,
        t
    ]);
    if (loading) {
        return /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.A, {
            sx: {
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: '100vh'
            },
            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(CircularProgress/* default */.A, {})
        });
    }
    if (error) {
        return /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.A, {
            sx: {
                p: 4,
                display: 'flex',
                justifyContent: 'center'
            },
            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Alert/* default */.A, {
                severity: "error",
                "data-testid": "EntitySettingsPageContainer__errorAlert__01JK2W6DZA5L1M8C",
                children: error
            })
        });
    }
    if (!project || !entity) return null;
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(EntitySettingsPage, {
        title: pageTitle,
        entity: entity
    });
}


/***/ }),

/***/ 97752:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   r: () => (/* binding */ entityFinders)
/* harmony export */ });
const entityFinders = {
    triggerActionGroup: (project, ulid)=>{
        var _project_children;
        return (_project_children = project.children) === null || _project_children === void 0 ? void 0 : _project_children.find((g)=>g.ulid === ulid);
    },
    triggerAction: (project, ulid)=>{
        if (!project.children) return undefined;
        for (const group of project.children){
            if (!group.children) continue;
            const found = group.children.find((ta)=>ta.ulid === ulid);
            if (found) return found;
        }
        return undefined;
    },
    triggerGroup: (project, ulid)=>{
        if (!project.children) return undefined;
        for (const group of project.children){
            if (!group.children) continue;
            for (const ta of group.children){
                var _ta_triggerGroup;
                if (((_ta_triggerGroup = ta.triggerGroup) === null || _ta_triggerGroup === void 0 ? void 0 : _ta_triggerGroup.ulid) === ulid) return ta.triggerGroup;
            }
        }
        return undefined;
    },
    actionGroup: (project, ulid)=>{
        if (!project.children) return undefined;
        for (const group of project.children){
            if (!group.children) continue;
            for (const ta of group.children){
                var _ta_actionGroup;
                if (((_ta_actionGroup = ta.actionGroup) === null || _ta_actionGroup === void 0 ? void 0 : _ta_actionGroup.ulid) === ulid) return ta.actionGroup;
            }
        }
        return undefined;
    },
    trigger: (project, ulid)=>{
        if (!project.children) return undefined;
        for (const group of project.children){
            if (!group.children) continue;
            for (const ta of group.children){
                var _ta_triggerGroup;
                if ((_ta_triggerGroup = ta.triggerGroup) === null || _ta_triggerGroup === void 0 ? void 0 : _ta_triggerGroup.children) {
                    const found = ta.triggerGroup.children.find((t)=>t.ulid === ulid);
                    if (found) return found;
                }
            }
        }
        return undefined;
    },
    action: (project, ulid)=>{
        if (!project.children) return undefined;
        for (const group of project.children){
            if (!group.children) continue;
            for (const ta of group.children){
                var _ta_actionGroup;
                if ((_ta_actionGroup = ta.actionGroup) === null || _ta_actionGroup === void 0 ? void 0 : _ta_actionGroup.children) {
                    const found = ta.actionGroup.children.find((a)=>a.ulid === ulid);
                    if (found) return found;
                }
            }
        }
        return undefined;
    }
};


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, [7772,472,402,5241,6940,1490,1322,5409,2314,8143,9050,4550,8547,5812,2346,1508,1469,4456,5591,636,6593,8792], () => (__webpack_exec__(17909)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ _N_E = __webpack_exports__;
/******/ }
]);
//# sourceMappingURL=trigger-action-group-settings-ae355ce8519584f7.js.map