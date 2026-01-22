(self["webpackChunk_N_E"] = self["webpackChunk_N_E"] || []).push([[716],{

/***/ 42163:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {


    (window.__NEXT_P = window.__NEXT_P || []).push([
      "/description-detail",
      function () {
        return __webpack_require__(94724);
      }
    ]);
    if(false) {}
  

/***/ }),

/***/ 94724:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ DescriptionDetailPage)
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/react@19.1.0/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(94513);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react@19.1.0/node_modules/react/index.js
var react = __webpack_require__(94285);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/Box/Box.js + 2 modules
var Box = __webpack_require__(92061);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/IconButton/IconButton.js + 1 modules
var IconButton = __webpack_require__(10184);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/Typography/Typography.js
var Typography = __webpack_require__(26512);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/CircularProgress/CircularProgress.js + 1 modules
var CircularProgress = __webpack_require__(95657);
// EXTERNAL MODULE: ../../node_modules/.pnpm/next@15.3.5_@babel+core@7.28.0_@playwright+test@1.57.0_babel-plugin-macros@3.1.0_react-dom@19_gjfccjsd7b6xv5ktyj7vxamu6q/node_modules/next/router.js
var next_router = __webpack_require__(1674);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/utils/createSvgIcon.js + 2 modules
var createSvgIcon = __webpack_require__(38803);
;// ../../node_modules/.pnpm/@mui+icons-material@6.4.12_@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_re_5ewkm5t5g27pzq5tz62v6ktvti/node_modules/@mui/icons-material/esm/ArrowBack.js
/* __next_internal_client_entry_do_not_use__ default auto */ 

/* harmony default export */ const ArrowBack = ((0,createSvgIcon/* default */.A)(/*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
    d: "M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20z"
}), 'ArrowBack'));

// EXTERNAL MODULE: ../../libs/fanfanlo/src/log/Log.ts + 1 modules
var Log = __webpack_require__(89597);
// EXTERNAL MODULE: ../../libs/app/ui/src/components/app/AppShell.tsx + 3 modules
var AppShell = __webpack_require__(26719);
// EXTERNAL MODULE: ../../libs/app/ui/src/components/appbar/AppBar.tsx + 2 modules
var AppBar = __webpack_require__(40018);
// EXTERNAL MODULE: ../../libs/droid/project-v2-interface/src/storage/storage.ts + 1 modules
var storage = __webpack_require__(59814);
// EXTERNAL MODULE: ../../libs/droid/project-v2-interface/src/utils/entityFinder.ts
var entityFinder = __webpack_require__(23420);
// EXTERNAL MODULE: ../../libs/droid/project-v2-interface/src/components/description-renderer/DescriptionContentRenderer.tsx
var DescriptionContentRenderer = __webpack_require__(41445);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react-i18next@15.6.0_i18next@24.2.3_typescript@5.7.3__react-dom@19.1.0_react@19.1.0__react@19.1.0_typescript@5.7.3/node_modules/react-i18next/dist/es/index.js + 15 modules
var es = __webpack_require__(56137);
// EXTERNAL MODULE: ../../libs/fanfanlo/src/translation/TranslationComponent.tsx + 2 modules
var TranslationComponent = __webpack_require__(46922);
;// ./src/pages/description-detail/index.tsx












const fileLog = new Log/* Log */.tG(false, 'DescriptionDetailPage_ui');
// fileLog.pause = true;
// fileLog.childrenPaused = true;
function DescriptionDetailPage() {
    const uiLog = fileLog.sub(false, 'DescriptionDetailPage_ui');
    // uiLog.pause = true;
    const { t } = (0,es/* useTranslation */.Bd)('homepage/pages/description-detail/content');
    const router = (0,next_router.useRouter)();
    const [loading, setLoading] = (0,react.useState)(true);
    const [error, setError] = (0,react.useState)(null);
    const [entityResult, setEntityResult] = (0,react.useState)(null);
    const [descriptionContent, setDescriptionContent] = (0,react.useState)(null);
    const [entityName, setEntityName] = (0,react.useState)('');
    (0,react.useEffect)(()=>{
        const fnLog = uiLog.sub(false, 'effect_loadEntity_fn');
        // fnLog.pause = true;
        if (!router.isReady) {
            fnLog.log('router未准备好');
            return;
        }
        fnLog.log('开始加载实体, query:', router.query);
        const query = router.query;
        const field = query.field;
        if (!field) {
            fnLog.error('缺少field参数');
            setError(t('DescriptionDetailPage.missingField'));
            setLoading(false);
            return;
        }
        fnLog.log('field:', field);
        const params = {
            projectClientId: query.projectClientId,
            triggerActionGroupId: query.triggerActionGroupId,
            triggerActionId: query.triggerActionId,
            actionGroupId: query.actionGroupId,
            actionId: query.actionId,
            triggerGroupId: query.triggerGroupId,
            triggerId: query.triggerId
        };
        fnLog.log('查找参数:', params);
        const allProjects = [
            ...storage/* projectStore */.D.list,
            ...storage/* projectStore */.D.draft
        ];
        fnLog.log('所有projects数量:', allProjects.length);
        const result = (0,entityFinder/* findEntityAcrossProjects */.M)(allProjects, params);
        if (!result) {
            fnLog.error('未找到实体');
            setError(t('DescriptionDetailPage.entityNotFound'));
            setLoading(false);
            return;
        }
        fnLog.log('找到实体, type:', result.type, 'entity:', result.entity);
        setEntityResult(result);
        const entity = result.entity;
        if (!entity) {
            fnLog.error('entity为null');
            setError(t('DescriptionDetailPage.entityEmpty'));
            setLoading(false);
            return;
        }
        // 获取实体名字
        const name = entity.name || t('DescriptionDetailPage.unnamed');
        fnLog.log('实体名字:', name);
        setEntityName(name);
        // 获取描述内容
        let content = null;
        if (field === 'summary') {
            content = entity.summary || null;
        } else if (field === 'fullIntroduction') {
            content = entity.fullIntroduction || null;
        } else {
            fnLog.error('未知的field:', field);
            setError(t('DescriptionDetailPage.unknownField', {
                field
            }));
            setLoading(false);
            return;
        }
        fnLog.log('描述内容:', content);
        if (!content) {
            fnLog.log('描述内容为空');
            const fieldName = field === 'summary' ? t('DescriptionDetailPage.summaryName') : t('DescriptionDetailPage.fullIntroductionName');
            setError(t('DescriptionDetailPage.noContent', {
                fieldName
            }));
            setLoading(false);
            return;
        }
        setDescriptionContent(content);
        setLoading(false);
    }, [
        router.isReady,
        router.query,
        t
    ]);
    const handleBack = ()=>{
        const fnLog = uiLog.sub(false, 'handleBack_fn');
        // fnLog.pause = true;
        fnLog.log('返回上一页');
        router.back();
    };
    const appBarProps = {
        title: /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.A, {
            sx: {
                display: 'flex',
                alignItems: 'center'
            },
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsx)(IconButton/* default */.A, {
                    onClick: handleBack,
                    sx: {
                        mr: 1
                    },
                    "data-testid": "DescriptionDetailPage__backButton__01JG2B0090",
                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(ArrowBack, {})
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsxs)(Typography/* default */.A, {
                    variant: "h6",
                    children: [
                        entityName,
                        " - ",
                        t('DescriptionDetailPage.detail')
                    ]
                })
            ]
        }),
        back: false
    };
    uiLog.log('渲染页面, loading:', loading, 'error:', error);
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(AppShell/* AppShell */.G, {
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(AppBar/* AppbarContainer */.W, {
            appbarProps: appBarProps,
            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.A, {
                sx: {
                    p: 3
                },
                children: [
                    loading && /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.A, {
                        sx: {
                            display: 'flex',
                            justifyContent: 'center',
                            mt: 4
                        },
                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(CircularProgress/* default */.A, {})
                    }),
                    error && /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.A, {
                        color: "error",
                        children: error
                    }),
                    !loading && !error && descriptionContent && /*#__PURE__*/ (0,jsx_runtime.jsx)(TranslationComponent/* TranslationComponent */.j, {
                        sourceLang: "auto",
                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(DescriptionContentRenderer/* DescriptionContentRenderer */.d, {
                            data: descriptionContent
                        })
                    })
                ]
            })
        })
    });
}


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, [7772,472,402,8143,1508,1469,636,6593,8792], () => (__webpack_exec__(42163)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ _N_E = __webpack_exports__;
/******/ }
]);
//# sourceMappingURL=description-detail-88913d7988951c7b.js.map