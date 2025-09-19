(self["webpackChunk_N_E"] = self["webpackChunk_N_E"] || []).push([[2939],{

/***/ 22956:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {


    (window.__NEXT_P = window.__NEXT_P || []).push([
      "/action-list/app-selector",
      function () {
        return __webpack_require__(48508);
      }
    ]);
    if(false) {}
  

/***/ }),

/***/ 48508:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ AppSelector)
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/react@19.1.0/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(94513);
// EXTERNAL MODULE: ../../libs/app/static/src/pages/trigger-list-action-list-common/common.ts
var common = __webpack_require__(24899);
// EXTERNAL MODULE: ../../libs/app/static/src/utils/router-utils.ts
var router_utils = __webpack_require__(62632);
// EXTERNAL MODULE: ../../libs/app/static/src/storage/app-packages-store.ts
var app_packages_store = __webpack_require__(94166);
// EXTERNAL MODULE: ../../libs/droid/android/src/android/AutoWebViewJs.ts + 1 modules
var AutoWebViewJs = __webpack_require__(45921);
// EXTERNAL MODULE: ../../libs/droid/android/src/android/is-in-android.ts
var is_in_android = __webpack_require__(63149);
;// ../../libs/droid/android/src/android/scripts/readAllPackages.ts



// import { readAllPackagesMockData } from "./mock-data/readAllPackages";
const script = "com.fanfanlo.droid.js.JsReceiver.readAllPackages();";
function readAllPackages() {
    let res = AutoWebViewJs/* autoWebViewJs */.yx.callScript(script);
    const list = res.javaResultData || [];
    app_packages_store/* appPackagesStore */.I.savePackages(list);
    return list;
}
async function mockReadAllPackages() {
    const list = [
        {
            label: "test",
            iconBase64: "test",
            packageName: "test"
        }
    ];
    // if(appPackagesStore.data.list.length > 0)return appPackagesStore.data.list
    const mockData = await __webpack_require__.e(/* import() */ 7724).then(__webpack_require__.bind(__webpack_require__, 7724));
    app_packages_store/* appPackagesStore */.I.savePackages(mockData.readAllPackagesMockData);
    return mockData.readAllPackagesMockData;
}
const readAllPackagesScript = {
    script,
    readAllPackages: is_in_android/* isRealInAndroid */.nd ? readAllPackages : mockReadAllPackages
};

// EXTERNAL MODULE: ../../libs/fanfanlo/src/storage/store-utils.ts
var store_utils = __webpack_require__(4887);
// EXTERNAL MODULE: ../../libs/fanfanlo/src/utils/throw-trace-error.ts
var throw_trace_error = __webpack_require__(94429);
// EXTERNAL MODULE: ../../libs/fanfanlo/src/watcher/proxyWatch.ts
var proxyWatch = __webpack_require__(88518);
// EXTERNAL MODULE: ../../libs/fanfanlo/src/watcher/useProxyWatch.ts
var useProxyWatch = __webpack_require__(45007);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react-i18next@15.6.0_i18next@24.2.3_typescript@5.7.3__react-dom@19.1.0_react@19.1.0__react@19.1.0_typescript@5.7.3/node_modules/react-i18next/dist/es/index.js + 15 modules
var es = __webpack_require__(50279);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+icons-material@6.4.12_@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_re_5ewkm5t5g27pzq5tz62v6ktvti/node_modules/@mui/icons-material/esm/Refresh.js
var Refresh = __webpack_require__(18531);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+icons-material@6.4.12_@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_re_5ewkm5t5g27pzq5tz62v6ktvti/node_modules/@mui/icons-material/esm/Search.js
var Search = __webpack_require__(73852);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/Box/Box.js + 2 modules
var Box = __webpack_require__(6445);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/List/List.js + 1 modules
var List = __webpack_require__(90535);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/ListItem/ListItem.js + 4 modules
var ListItem = __webpack_require__(48853);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/Grid2/Grid2.js + 4 modules
var Grid2 = __webpack_require__(95771);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/ListItemText/ListItemText.js
var ListItemText = __webpack_require__(63337);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/Tabs/Tabs.js + 7 modules
var Tabs = __webpack_require__(53861);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/Tab/Tab.js + 1 modules
var Tab = __webpack_require__(81281);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/styles/styled.js
var styled = __webpack_require__(64624);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+system@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled@1_sfs2vjcbuqchwdpqpmkla22opm/node_modules/@mui/system/esm/colorManipulator/colorManipulator.js + 1 modules
var colorManipulator = __webpack_require__(21567);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/InputBase/InputBase.js
var InputBase = __webpack_require__(82827);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/IconButton/IconButton.js + 1 modules
var IconButton = __webpack_require__(65494);
// EXTERNAL MODULE: ../../node_modules/.pnpm/next@15.3.5_@babel+core@7.28.0_babel-plugin-macros@3.1.0_react-dom@19.1.0_react@19.1.0__react@19.1.0_sass@1.89.2/node_modules/next/router.js
var next_router = __webpack_require__(75640);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react@19.1.0/node_modules/react/index.js
var react = __webpack_require__(94285);
// EXTERNAL MODULE: ../../libs/app/ui/src/components/app/AppShell.tsx + 2 modules
var AppShell = __webpack_require__(20939);
// EXTERNAL MODULE: ../../libs/app/ui/src/components/appbar/AppBar.tsx + 3 modules
var AppBar = __webpack_require__(97972);
// EXTERNAL MODULE: ../../libs/droid/project-interface/src/common/trigger-list-action-list-intf.ts
var trigger_list_action_list_intf = __webpack_require__(37416);
// EXTERNAL MODULE: ../../libs/droid/project-interface/src/core/project-member-type.ts
var project_member_type = __webpack_require__(27880);
// EXTERNAL MODULE: ../../libs/droid/project-interface/src/action/IAction.intf.ts
var IAction_intf = __webpack_require__(30624);
// EXTERNAL MODULE: ../../libs/droid/project-interface/src/actions/app/action-open-app/IActionOpenApp.inft.tsx + 2 modules
var IActionOpenApp_inft = __webpack_require__(54778);
// EXTERNAL MODULE: ../../libs/droid/project-interface/src/events/projectEventUtils.ts
var projectEventUtils = __webpack_require__(6659);
;// ./src/pages/action-list/app-selector/index.tsx













const storeName = 'app-selector';
const storage = store_utils/* storeUtils */.P.namespace(storeName);
const storeRecentlyPackageListKey = 'recentlyPackageList';
var TabEnum = /*#__PURE__*/ function(TabEnum) {
    TabEnum["all"] = "all";
    TabEnum["recently"] = "recently";
    return TabEnum;
}(TabEnum || {});
const PageContext = /*#__PURE__*/ (0,react.createContext)({
    packageList: [],
    showPackageList: [],
    recentlyPackageList: [],
    tab: "all",
    onPackageSelect: (packageInfo)=>{}
});
function useController() {
    const router = (0,next_router.useRouter)();
    const nowPath = router.pathname;
    function onPackageSelect(packageInfo) {
        addRecentlyPackage(packageInfo);
        handlePackageSelect(packageInfo);
    }
    function handlePackageSelect(packageInfo) {
        const query = router.query;
        switch(query.type){
            case common/* ActionOrTriggerListTypeEnum */.Q.addAction:
                {
                    const res = (0,trigger_list_action_list_intf/* getTriggerOrActionListPageParams */.JT)(query);
                    if (!res.data.actionGroup) {
                        console.error('actionGroup is undefined query=', query, 'packageInfo=', packageInfo);
                        throw new Error('actionGroup is undefined');
                    }
                    if (!query.actionType) {
                        return (0,throw_trace_error/* throwTraceError */.w)("actionType is undefined query=".concat(query), query, packageInfo);
                    }
                    // const utils = ActionUtilsMap[query.actionType]
                    const utils = (0,IAction_intf/* getActionUtils */.e9)(query.actionType);
                    if (!utils) throw new Error("actionType ".concat(query.actionType, " is not found"));
                    const action = utils.createDefultData();
                    switch(query.actionType){
                        case IActionOpenApp_inft/* actionOpenAppUtils */.F.type:
                            action.javaData.packageName = packageInfo.packageName;
                            break;
                        default:
                            throw new Error("actionType ".concat(query.actionType, " is not found"));
                    }
                    // projectEventUtils.dispatchAddEvent(action.type, ProjectMemberType.actionGroup, action, res)
                    projectEventUtils/* projectEventUtils */.T.dispatchEditEvent(projectEventUtils/* projectEventUtils */.T.EditType.add, {
                        projectMemberType: project_member_type/* ProjectMemberType */.K.actionGroup,
                        data: action,
                        projectInfo: res.data
                    });
                    // res.data.actionGroup.list.push(action)
                    router_utils/* routerUtils */.V.checkToPath(router, nowPath, query.backPath, 2);
                    break;
                }
            case common/* ActionOrTriggerListTypeEnum */.Q.updateAction:
                {
                    const res = (0,trigger_list_action_list_intf/* getTriggerOrActionListPageParams */.JT)(query);
                    console.log('res', res);
                    if (!res.data.actionGroup) {
                        console.error('actionGroup is undefined query=', query, 'packageInfo=', packageInfo);
                        throw new Error('actionGroup is undefined');
                    }
                    if (!res.data.action) {
                        console.error("action is undefined query= ", query, "packageinfo=", packageInfo);
                        throw new Error("action is undefined");
                    }
                    projectEventUtils/* projectEventUtils */.T.dispatchEditEvent(projectEventUtils/* projectEventUtils */.T.EditType.updateJavaData, {
                        projectMemberType: project_member_type/* ProjectMemberType */.K.action,
                        data: {
                            packageName: packageInfo.packageName
                        },
                        projectInfo: res.data
                    });
                    console.log('dispatch event232323456');
                    switch(query.actionType){
                        case IActionOpenApp_inft/* actionOpenAppUtils */.F.type:
                            // const action: IActionOpenAppData = res.data.action as IActionOpenAppData
                            // action.javaData.packageName = packageInfo.packageName
                            router.back();
                            break;
                        default:
                            throw new Error("actionType ".concat(query.actionType, " is not found"));
                    }
                    break;
                }
        }
    }
    function addRecentlyPackage(packageInfo) {
        const index = props.recentlyPackageList.findIndex((item)=>item.packageName === packageInfo.packageName);
        if (index !== -1) {
            props.recentlyPackageList.splice(index, 1);
        }
        props.recentlyPackageList.unshift(packageInfo);
        storage.write(storeRecentlyPackageListKey, props.recentlyPackageList);
    }
    const props = (0,proxyWatch/* toProxy */.I$)({
        packageList: [],
        showPackageList: [],
        recentlyPackageList: storage.read(storeRecentlyPackageListKey) || [],
        tab: "all",
        onPackageSelect
    });
    (0,proxyWatch/* proxyWatch */.kE)(props, 'tab', (v, old)=>{
        updateShowPackageList();
    });
    (0,proxyWatch/* proxyWatch */.kE)(props, 'searchKey', (v, old)=>{
        updateShowPackageList();
    });
    function updateShowPackageList() {
        props.showPackageList = [
            ...getShowPackageList()
        ];
    }
    function getTabShowPackageList() {
        if (props.tab === "all") {
            return props.packageList;
        } else if (props.tab === "recently") {
            return props.recentlyPackageList;
        }
        throw new Error("tab is not valid");
    }
    function getShowPackageList() {
        const list = getTabShowPackageList();
        if (props.searchKey) {
            return list.filter((item)=>item.label.includes(props.searchKey));
        }
        return list;
    }
    (0,proxyWatch/* proxyWatch */.kE)(props, 'searchKey', (v, old)=>{
        updateShowPackageList();
    });
    (0,proxyWatch/* proxyWatch */.kE)(app_packages_store/* appPackagesStore */.I.data, 'list', (v, old)=>{
        props.packageList = [
            ...app_packages_store/* appPackagesStore */.I.data.list
        ];
        updateShowPackageList();
    });
    (0,react.useEffect)(()=>{
        if (props.packageList.length > 0) return; //不为空则跳出
        app_packages_store/* appPackagesStore */.I.loadPackages() //从缓存读取
        ;
        if (app_packages_store/* appPackagesStore */.I.data.list.length > 0) return; //缓存不为空则跳出
        readAllPackagesScript.readAllPackages() //从安卓读取
        ;
    }, []);
    updateShowPackageList();
    return [
        props
    ];
}
function AppList() {
    const pageProps = (0,react.useContext)(PageContext);
    const [list] = (0,useProxyWatch/* useProxyWatch */.x)(pageProps, 'showPackageList', pageProps.showPackageList);
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.A, {
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(List/* default */.A, {
            children: list.map((item, index)=>/*#__PURE__*/ (0,jsx_runtime.jsx)(ListItem/* default */.Ay, {
                    onClick: ()=>pageProps.onPackageSelect(item),
                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Grid2/* default */.A, {
                        container: true,
                        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(Grid2/* default */.A, {
                            size: "grow",
                            container: true,
                            "data-id": "app-selector-893f",
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime.jsx)("img", {
                                    width: 30,
                                    style: {
                                        borderRadius: '8px'
                                    },
                                    src: "data:image/gif;base64,".concat(item.iconBase64)
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)(ListItemText/* default */.A, {
                                    primary: item.label
                                })
                            ]
                        })
                    })
                }, index))
        })
    });
}
function AccessibleTabs() {
    const [value, setValue] = (0,react.useState)(0);
    const { t } = (0,es/* useTranslation */.Bd)("homepage/pages/action-list/app-selector/content");
    const handleChange = (event, newValue)=>{
        setValue(newValue);
        pageProps.tab = newValue === 0 ? "all" : "recently";
    };
    const pageProps = (0,react.useContext)(PageContext);
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.A, {
        sx: {
            width: '100%'
        },
        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(Tabs/* default */.A, {
            sx: {
                width: '100%'
            },
            onChange: handleChange,
            value: value,
            "aria-label": "Tabs where selection follows focus",
            selectionFollowsFocus: true,
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsx)(Tab/* default */.A, {
                    sx: {
                        width: '50%'
                    },
                    label: t("content.all")
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)(Tab/* default */.A, {
                    sx: {
                        width: '50%'
                    },
                    label: t("content.recently")
                })
            ]
        })
    });
}
const app_selector_Search = (0,styled/* default */.Ay)('div')((param)=>{
    let { theme } = param;
    return {
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: (0,colorManipulator/* alpha */.X4)(theme.palette.common.white, 0.15),
        '&:hover': {
            backgroundColor: (0,colorManipulator/* alpha */.X4)(theme.palette.common.white, 0.25)
        },
        marginLeft: 0,
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            marginLeft: theme.spacing(1),
            width: 'auto'
        }
    };
});
const SearchIconWrapper = (0,styled/* default */.Ay)('div')((param)=>{
    let { theme } = param;
    return {
        padding: theme.spacing(0, 2),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    };
});
const StyledInputBase = (0,styled/* default */.Ay)(InputBase/* default */.Ay)((param)=>{
    let { theme } = param;
    return {
        color: 'inherit',
        width: '100%',
        '& .MuiInputBase-input': {
            padding: theme.spacing(1, 1, 1, 0),
            // vertical padding + font size from searchIcon
            paddingLeft: "calc(1em + ".concat(theme.spacing(4), ")"),
            transition: theme.transitions.create('width'),
            [theme.breakpoints.up('sm')]: {
                width: '12ch',
                '&:focus': {
                    width: '20ch'
                }
            }
        }
    };
});
function Title() {
    const { t } = (0,es/* useTranslation */.Bd)("homepage/pages/action-list/app-selector/content");
    const pageProps = (0,react.useContext)(PageContext);
    function onSeachChange(e) {
        pageProps.searchKey = e.target.value;
    }
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(Grid2/* default */.A, {
        container: true,
        width: "100%",
        justifyContent: "space-between",
        sx: {
            alignItems: "center"
        },
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Grid2/* default */.A, {
                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(app_selector_Search, {
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(SearchIconWrapper, {
                            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Search/* default */.A, {})
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(StyledInputBase, {
                            onChange: onSeachChange,
                            placeholder: t("content.searchPlaceholder"),
                            inputProps: {
                                'aria-label': 'search'
                            }
                        })
                    ]
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Grid2/* default */.A, {
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(IconButton/* default */.A, {
                    onClick: ()=>{
                        readAllPackagesScript.readAllPackages();
                    },
                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Refresh/* default */.A, {})
                })
            })
        ]
    });
}
function AppSelector() {
    const [props] = useController();
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(AppShell/* AppShell */.G, {
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(PageContext.Provider, {
            value: props,
            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(AppBar/* AppbarContainer */.W, {
                titleConf: {
                    ns: "homepage/pages/action-list/app-selector/content",
                    key: "content.title"
                },
                appbarProps: {
                    title: /*#__PURE__*/ (0,jsx_runtime.jsx)(Title, {}),
                    back: true
                },
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(AccessibleTabs, {}),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(AppList, {})
                ]
            })
        })
    });
}


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, [5352,1161,2827,5771,687,7733,9717,3881,6291,636,6593,8792], () => (__webpack_exec__(22956)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ _N_E = __webpack_exports__;
/******/ }
]);
//# sourceMappingURL=app-selector-9b03060e7c870b66.js.map