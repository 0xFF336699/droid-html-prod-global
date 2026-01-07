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
/* harmony import */ var _src_components_page_action_list_action_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(83841);
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

/***/ 37206:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ openHtmlShowA11yNodeInfoWindow),
/* harmony export */   d: () => (/* binding */ openHtmlShowA11yNodeInfoButton)
/* harmony export */ });
/* harmony import */ var await_to_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(11318);
/* harmony import */ var _android_components_Manifest__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(34100);
/* harmony import */ var _android_components_permissionGroupCreator__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(15962);
/* harmony import */ var _android_win_WindowConf__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(99949);
/* harmony import */ var _android_WebViewJs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(24828);
/* harmony import */ var _confs_env__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(63259);
/* harmony import */ var _fanfanlo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(89597);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(80507);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);








const fileLog = new _fanfanlo__WEBPACK_IMPORTED_MODULE_1__/* .Log */ .tG(false, 'acceccibility-info-buttons');
function createCopy(callbackEventType, windowId) {
    let windowConf = (0,_android_win_WindowConf__WEBPACK_IMPORTED_MODULE_2__/* .createDefaultWindowConf */ .IL)();
    const conf = {
        htmlConf: {
            // url:`${env.htmlOrigin}pages/accessibility-info-buttons/#/`,
            url: "".concat(_confs_env__WEBPACK_IMPORTED_MODULE_3__/* .env */ ._.htmlOrigin, "pages/accessibility-info-buttons/index.html"),
            webViewJsParams: {
                fitContentClass: "webviewMeatureContainer",
                // fitContentWidth:-200,
                // fitContentHeight:-200,
                javaToJsDataString: JSON.stringify({
                    event: callbackEventType
                })
            }
        },
        windowId
    };
    windowConf = lodash__WEBPACK_IMPORTED_MODULE_0___default().merge(windowConf, conf);
    return (0,_android_win_WindowConf__WEBPACK_IMPORTED_MODULE_2__/* .createWindowConfCopy */ .Sb)(windowConf);
}
function openHtmlShowA11yNodeInfoWindow(callbackEventType, windowId) {
    const fnLog = fileLog.sub(false, 'openHtmlShowA11yNodeInfoWindow_fn');
    fnLog.info('callbackEventType =', callbackEventType, 'windowId =', windowId);
    let conf = createCopy(callbackEventType, windowId);
    fnLog.info("conf =", conf);
    return _android_WebViewJs__WEBPACK_IMPORTED_MODULE_4__/* .WebViewJs */ .L.instance.createWindow(JSON.stringify(conf));
}
async function openHtmlShowA11yNodeInfoButton(callbackEventType, windowId) {
    let [err, group] = await (0,await_to_js__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .A)((0,_android_components_permissionGroupCreator__WEBPACK_IMPORTED_MODULE_6__/* .runPermissionGroup */ .uu)(_android_components_Manifest__WEBPACK_IMPORTED_MODULE_7__/* .Manifest */ ._8.Permission.SYSTEM_ALERT_WINDOW, _android_components_Manifest__WEBPACK_IMPORTED_MODULE_7__/* .Manifest */ ._8.Permission.BIND_ACCESSIBILITY_SERVICE));
    console.log('openHtmlShowA11yNodeInfoButton_fn group=', group, 'err=', err);
    if (err) {
        if ("message" in err) {
            alert("悬浮窗权限申请错误 message= ".concat(err.message));
        } else {
            try {
                alert("悬浮窗权限申请错误 err= ".concat(JSON.stringify(err)));
            } catch (err) {
                alert("悬浮窗权限申请错误 stringify err ".concat(err));
            }
        }
        // alert(`openHtmlShowA11yNodeInfoButton_fn error err.toString()`)
        _android_WebViewJs__WEBPACK_IMPORTED_MODULE_4__/* .WebViewJs */ .L.instance.toast(err.toString());
        // showSimpleToast(err.toString())
        return;
    }
    return openHtmlShowA11yNodeInfoWindow(callbackEventType, windowId);
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

// EXTERNAL MODULE: ../../libs/app/ui/src/components/appbar/AppBar.tsx + 3 modules
var AppBar = __webpack_require__(82524);
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
/******/ __webpack_require__.O(0, [472,9669,9815,4522,1562,2710,636,6593,8792], () => (__webpack_exec__(31357)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ _N_E = __webpack_exports__;
/******/ }
]);
//# sourceMappingURL=action-list-039b1139ff2c3e1a.js.map