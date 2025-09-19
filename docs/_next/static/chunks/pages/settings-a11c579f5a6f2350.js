(self["webpackChunk_N_E"] = self["webpackChunk_N_E"] || []).push([[199],{

/***/ 3131:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Bd: () => (/* reexport safe */ C_work_android_droid_html_website_2024_12_node_modules_pnpm_react_i18next_15_6_0_i18next_24_2_3_typescript_5_7_3_react_dom_19_1_0_react_19_1_0_react_19_1_0_typescript_5_7_3_node_modules_react_i18next_dist_es_index_js__WEBPACK_IMPORTED_MODULE_0__.Bd)
/* harmony export */ });
/* harmony import */ var C_work_android_droid_html_website_2024_12_node_modules_pnpm_react_i18next_15_6_0_i18next_24_2_3_typescript_5_7_3_react_dom_19_1_0_react_19_1_0_react_19_1_0_typescript_5_7_3_node_modules_react_i18next_dist_es_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(50279);



/***/ }),

/***/ 14582:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ SettingsPage)
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/react@19.1.0/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(94513);
// EXTERNAL MODULE: ../../libs/app/ui/src/components/app/AppShell.tsx + 2 modules
var AppShell = __webpack_require__(20939);
// EXTERNAL MODULE: ../../libs/app/ui/src/components/tabbar/Tabbar.tsx
var Tabbar = __webpack_require__(93589);
// EXTERNAL MODULE: ./src/components/navbar/NavBar.tsx
var NavBar = __webpack_require__(32534);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/Box/Box.js + 2 modules
var Box = __webpack_require__(6445);
// EXTERNAL MODULE: ./src/components/language-selector/LanguageSelect.tsx + 1 modules
var LanguageSelect = __webpack_require__(12474);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react-i18next@15.6.0_i18next@24.2.3_typescript@5.7.3__react-dom@19.1.0_react@19.1.0__react@19.1.0_typescript@5.7.3/node_modules/react-i18next/dist/es/index.js + 15 modules
var es = __webpack_require__(50279);
// EXTERNAL MODULE: ../../node_modules/.pnpm/next@15.3.5_@babel+core@7.28.0_babel-plugin-macros@3.1.0_react-dom@19.1.0_react@19.1.0__react@19.1.0_sass@1.89.2/node_modules/next/router.js
var next_router = __webpack_require__(75640);
// EXTERNAL MODULE: ../../libs/fanfanlo/src/watcher/useProxyWatch.ts
var useProxyWatch = __webpack_require__(45007);
// EXTERNAL MODULE: ../../libs/app/model/src/user/User.ts + 5 modules
var User = __webpack_require__(90886);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react-hot-toast@2.5.2_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/react-hot-toast/dist/index.mjs + 1 modules
var dist = __webpack_require__(22243);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/Button/Button.js + 3 modules
var Button = __webpack_require__(28669);
// EXTERNAL MODULE: ../../node_modules/.pnpm/next@15.3.5_@babel+core@7.28.0_babel-plugin-macros@3.1.0_react-dom@19.1.0_react@19.1.0__react@19.1.0_sass@1.89.2/node_modules/next/link.js
var next_link = __webpack_require__(97097);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: ../../libs/fanfanlo/src/mui/dialog/ButtonConfirm.tsx
var ButtonConfirm = __webpack_require__(56257);
;// ./src/components/page/sign-up-in/components/sign-up-in-button/SignUpIn.tsx









function SignUpInButton(param) {
    let { back } = param;
    // apps\homepage\src\components\page\sign-up-in\components\sign-up-in-button\SignUpIn.i18n.json
    const { t } = (0,es/* useTranslation */.Bd)('homepage/components/page/sign-up-in/components/sign-up-in-button/content');
    const router = (0,next_router.useRouter)();
    const [token] = (0,useProxyWatch/* useProxyWatch */.x)(User/* user */.k, 'data.storeData.user_token', User/* user */.k.data.storeData.user_token);
    const [userInitialized] = (0,useProxyWatch/* useProxyWatch */.x)(User/* user */.k, 'data.userInitialized', User/* user */.k.data.userInitialized);
    function onSignoutClick() {
        User/* user */.k.signout();
        (0,dist/* default */.Ay)(t('SignUpIn.signoutOk'), {
            duration: 5000
        });
    }
    if (!userInitialized) {
        return /*#__PURE__*/ (0,jsx_runtime.jsx)(jsx_runtime.Fragment, {
            children: t('SignUpIn.loadingData')
        });
    }
    if (token) {
        return /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.A, {
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.A, {
                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                        children: User/* user */.k.userName
                    })
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.A, {
                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(ButtonConfirm/* ButtonConfirm */.b, {
                            title: t('SignUpIn.confirmTitle'),
                            content: t('SignUpIn.confirmContent'),
                            onConfirm: onSignoutClick,
                            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Button/* default */.A, {
                                children: t('SignUpIn.signOut')
                            })
                        })
                    })
                })
            ]
        });
    }
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(jsx_runtime.Fragment, {
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
            children: /*#__PURE__*/ (0,jsx_runtime.jsx)((link_default()), {
                href: "/sign-up-in?back=".concat(back),
                children: t('SignUpIn.signUpIn')
            })
        })
    });
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(jsx_runtime.Fragment, {
        children: token ? /*#__PURE__*/ (0,jsx_runtime.jsx)(ButtonConfirm/* ButtonConfirm */.b, {
            title: t('SignUpIn.confirmTitle'),
            content: t('SignUpIn.confirmContent'),
            onConfirm: onSignoutClick,
            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Button/* default */.A, {
                children: t('SignUpIn.signOut')
            })
        }) : /*#__PURE__*/ (0,jsx_runtime.jsx)((link_default()), {
            href: "/sign-up-in?back=".concat(back),
            children: t('SignUpIn.signUpIn')
        })
    });
}

;// ./src/components/page/settings/content/Settings.tsx




const SettingsContent = ()=>{
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.A, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(LanguageSelect/* LanguageSelect */.p, {}),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(SignUpInButton, {
                back: "/settings"
            })
        ]
    });
};

// EXTERNAL MODULE: ../../libs/fanfanlo/src/react/AsyncContextLoader.tsx
var AsyncContextLoader = __webpack_require__(28210);
// EXTERNAL MODULE: ../../libs/fanfanlo/src/react/createTypedContext.ts
var createTypedContext = __webpack_require__(3131);
// EXTERNAL MODULE: ./src/components/fallback/Fallback.tsx
var Fallback = __webpack_require__(55762);
;// ./src/components/page/settings/data/settings.context.tsx




const [SettingsPageDataContextProvider, useSettingsPageData] = (0,createTypedContext/* createTypedContext */.W)();
const SettingsPageDataContextLoader = (0,AsyncContextLoader/* createAsyncContextLoader */.j)({
    Provider: SettingsPageDataContextProvider,
    extract: (res)=>res.data,
    fallback: /*#__PURE__*/ (0,jsx_runtime.jsx)(Fallback/* Fallback */.H, {})
});

// EXTERNAL MODULE: ../../libs/fanfanlo/src/storage/store-utils.ts
var store_utils = __webpack_require__(4887);
;// ./src/components/page/settings/data/ns.ts
const ns = 'settings';
const androidData = "".concat(ns, ":android");
const webData = "".concat(ns, ":web");
const settingNs = {
    ns,
    androidData,
    webData
};

;// ./src/components/page/settings/data/settings.data.intf.ts


function createDefaultSettingsPageData() {
    return {};
}
function createSettingsPageData() {
    return createDefaultSettingsPageData();
}
let loader;
async function loadSettingsPageData() {
    if (loader) return loader;
    const defData = createSettingsPageData();
    loader = store_utils/* storeUtils */.P.getNamespaceStoreWithData(settingNs.androidData, {
        defData,
        forceReset: false,
        mergeDefData: true
    });
    return loader;
}

;// ./src/pages/settings/index.tsx






function SettingsPage() {
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(AppShell/* AppShell */.G, {
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Tabbar/* TabbarContainer */.y, {
            titleConf: {
                ns: "emergency-call/pages/settings/content",
                key: "content.title"
            },
            navBar: /*#__PURE__*/ (0,jsx_runtime.jsx)(NavBar/* NavBar */.j, {}),
            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(SettingsPageDataContextLoader, {
                value: ()=>loadSettingsPageData(),
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(SettingsContent, {})
            })
        })
    });
}


/***/ }),

/***/ 28210:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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
        const raw = (0,react__WEBPACK_IMPORTED_MODULE_1__.use)(props.value());
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

/***/ 45279:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   b: () => (/* binding */ getListItemTextUtilityClass)
/* harmony export */ });
/* harmony import */ var _mui_utils_generateUtilityClasses__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(92186);
/* harmony import */ var _mui_utils_generateUtilityClass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(69014);


function getListItemTextUtilityClass(slot) {
    return (0,_mui_utils_generateUtilityClass__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Ay)('MuiListItemText', slot);
}
const listItemTextClasses = (0,_mui_utils_generateUtilityClasses__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A)('MuiListItemText', [
    'root',
    'multiline',
    'dense',
    'inset',
    'primary',
    'secondary'
]);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (listItemTextClasses);


/***/ }),

/***/ 45520:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {


    (window.__NEXT_P = window.__NEXT_P || []).push([
      "/settings",
      function () {
        return __webpack_require__(14582);
      }
    ]);
    if(false) {}
  

/***/ }),

/***/ 55762:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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

/***/ 56257:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   b: () => (/* binding */ ButtonConfirm)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(94513);
/* harmony import */ var _barrel_optimize_names_Button_Dialog_DialogActions_DialogContent_DialogTitle_mui_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(49280);
/* harmony import */ var _barrel_optimize_names_Button_Dialog_DialogActions_DialogContent_DialogTitle_mui_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3711);
/* harmony import */ var _barrel_optimize_names_Button_Dialog_DialogActions_DialogContent_DialogTitle_mui_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(18244);
/* harmony import */ var _barrel_optimize_names_Button_Dialog_DialogActions_DialogContent_DialogTitle_mui_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(69468);
/* harmony import */ var _barrel_optimize_names_Button_Dialog_DialogActions_DialogContent_DialogTitle_mui_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(28669);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(94285);
/* harmony import */ var _barrel_optimize_names_useTranslation_react_i18next__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9825);




function ButtonConfirm(param) {
    let { title, content, confirmText, cancelText, onConfirm, onCancel, onClose, cancelId, confirmId, children } = param;
    const [isOpen, setIsOpen] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const { t } = (0,_barrel_optimize_names_useTranslation_react_i18next__WEBPACK_IMPORTED_MODULE_2__/* .useTranslation */ .Bd)('fanfanlo/mui/dialog/content');
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", {
                onClick: ()=>setIsOpen(true),
                children: children
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_barrel_optimize_names_Button_Dialog_DialogActions_DialogContent_DialogTitle_mui_material__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A, {
                open: isOpen,
                onClose: ()=>setIsOpen(false),
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_barrel_optimize_names_Button_Dialog_DialogActions_DialogContent_DialogTitle_mui_material__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A, {
                        children: title || t('ButtonConfirm.title')
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_barrel_optimize_names_Button_Dialog_DialogActions_DialogContent_DialogTitle_mui_material__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .A, {
                        children: content || t('ButtonConfirm.content')
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_barrel_optimize_names_Button_Dialog_DialogActions_DialogContent_DialogTitle_mui_material__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .A, {
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_barrel_optimize_names_Button_Dialog_DialogActions_DialogContent_DialogTitle_mui_material__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .A, {
                                id: cancelId || 'btn-dialog-button-confirm-cancel',
                                "data-id": cancelId || 'btn-dialog-button-confirm-cancel',
                                onClick: ()=>{
                                    setIsOpen(false);
                                    onCancel === null || onCancel === void 0 ? void 0 : onCancel();
                                    onClose === null || onClose === void 0 ? void 0 : onClose(false);
                                },
                                children: cancelText || t('ButtonConfirm.cancel')
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_barrel_optimize_names_Button_Dialog_DialogActions_DialogContent_DialogTitle_mui_material__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .A, {
                                id: confirmId || 'btn-dialog-button-confirm-confirm',
                                "data-id": confirmId || 'btn-dialog-button-confirm-confirm',
                                onClick: ()=>{
                                    setIsOpen(false);
                                    onConfirm === null || onConfirm === void 0 ? void 0 : onConfirm();
                                    onClose === null || onClose === void 0 ? void 0 : onClose(true);
                                },
                                children: confirmText || t('ButtonConfirm.confirm')
                            })
                        ]
                    })
                ]
            })
        ]
    });
}


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, [5352,4380,2827,3390,7313,6466,5881,7097,3583,636,6593,8792], () => (__webpack_exec__(45520)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ _N_E = __webpack_exports__;
/******/ }
]);
//# sourceMappingURL=settings-a11c579f5a6f2350.js.map