(self["webpackChunk_N_E"] = self["webpackChunk_N_E"] || []).push([[3763],{

/***/ 31357:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {


    (window.__NEXT_P = window.__NEXT_P || []).push([
      "/action-list",
      function () {
        return __webpack_require__(34040);
      }
    ]);
    if(false) {}
  

/***/ }),

/***/ 34040:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ index)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(94513);
/* harmony import */ var _fanfanlo__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(56137);
/* harmony import */ var _src_components_page_action_list_action_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(52358);
/* harmony import */ var _src_components_trigger_list_action_list_common_TriggerListOrActionListUI__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(37335);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1674);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _app_ui__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(26719);






function index() {
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();
    const { t } = (0,_fanfanlo__WEBPACK_IMPORTED_MODULE_4__/* .useTranslation */ .Bd)("homepage/pages/action-list/content");
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_app_ui__WEBPACK_IMPORTED_MODULE_5__/* .AppShell */ .G, {
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_src_components_trigger_list_action_list_common_TriggerListOrActionListUI__WEBPACK_IMPORTED_MODULE_2__/* .TriggerListOrActionListUI */ .M, {
            groups: _src_components_page_action_list_action_data__WEBPACK_IMPORTED_MODULE_1__/* .actionListGroups */ .j,
            title: t("content.title"),
            actionListParams: router.query,
            titleConf: {
                title: t("content.title")
            }
        })
    });
}


/***/ }),

/***/ 37335:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  M: () => (/* binding */ TriggerListOrActionListUI)
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/react@19.1.0/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(94513);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/Box/Box.js + 2 modules
var Box = __webpack_require__(92061);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/Typography/Typography.js
var Typography = __webpack_require__(26512);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react@19.1.0/node_modules/react/index.js
var react = __webpack_require__(94285);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react-i18next@15.6.0_i18next@24.2.3_typescript@5.7.3__react-dom@19.1.0_react@19.1.0__react@19.1.0_typescript@5.7.3/node_modules/react-i18next/dist/es/index.js + 15 modules
var es = __webpack_require__(56137);
;// ./src/components/trigger-list-action-list-common/context.tsx

const ActionListOrTriggerListPageParamsContext = /*#__PURE__*/ (0,react.createContext)({});
const ActionOrTriggerGroupListContext = /*#__PURE__*/ (0,react.createContext)({});

// EXTERNAL MODULE: ../../libs/app/ui/src/components/appbar/AppBar.tsx + 2 modules
var AppBar = __webpack_require__(40018);
;// ./src/components/trigger-list-action-list-common/TriggerListOrActionListUI.tsx






function Item(param) {
    let { item } = param;
    const { t } = (0,es/* useTranslation */.Bd)(item.i18nNs);
    const params = (0,react.useContext)(ActionListOrTriggerListPageParamsContext);
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.A, {
        sx: {
            width: "100%",
            textIndent: "1rem",
            padding: "1px",
            backgroundColor: "#f6f2e9"
        },
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.A, {
            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(item.LinkRender, {
                query: params,
                id: item.id,
                item: item,
                children: t(item.nameKey)
            })
        })
    });
}
function Group(param) {
    let { group } = param;
    const { t } = (0,es/* useTranslation */.Bd)(group.i18nNs);
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.A, {
        sx: {
            width: "100%"
        },
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.A, {
                sx: {
                    width: "100%",
                    backgroundColor: "#f6f9f6",
                    padding: "2px"
                },
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                    children: t(group.nameKey)
                })
            }),
            group.items.map((action)=>{
                return /*#__PURE__*/ (0,jsx_runtime.jsx)(Item, {
                    item: action
                }, action.i18nNs);
            })
        ]
    });
}
function GroupList() {
    const groups = (0,react.useContext)(ActionOrTriggerGroupListContext);
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.A, {
        sx: {
            width: "100%"
        },
        children: groups.map((group)=>/*#__PURE__*/ (0,jsx_runtime.jsx)(Group, {
                group: group
            }, group.i18nNs))
    });
}
function ActionListContent() {
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.A, {
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(GroupList, {})
    });
}
function TriggerListOrActionListUI(param) {
    let { groups, title, actionListParams, titleConf } = param;
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(ActionListOrTriggerListPageParamsContext, {
        value: actionListParams,
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(ActionOrTriggerGroupListContext, {
            value: groups,
            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(AppBar/* AppbarContainer */.W, {
                appbarProps: {
                    title: /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.A, {
                        children: title
                    }),
                    back: true
                },
                titleConf: titleConf,
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(ActionListContent, {})
            })
        })
    });
}


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, [7772,472,402,5241,6940,1490,1322,5409,2314,8143,9050,4550,5475,9815,4571,1508,1469,4456,4100,4205,1562,2358,636,6593,8792], () => (__webpack_exec__(31357)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ _N_E = __webpack_exports__;
/******/ }
]);
//# sourceMappingURL=action-list-6d34a57980b71710.js.map