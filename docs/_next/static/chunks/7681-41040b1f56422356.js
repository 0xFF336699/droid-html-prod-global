"use strict";
(self["webpackChunk_N_E"] = self["webpackChunk_N_E"] || []).push([[7681],{

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

/***/ 9825:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Bd: () => (/* reexport safe */ C_work_android_droid_html_website_2024_12_node_modules_pnpm_react_i18next_15_6_0_i18next_24_2_3_typescript_5_7_3_react_dom_19_1_0_react_19_1_0_react_19_1_0_typescript_5_7_3_node_modules_react_i18next_dist_es_index_js__WEBPACK_IMPORTED_MODULE_0__.Bd)
/* harmony export */ });
/* harmony import */ var C_work_android_droid_html_website_2024_12_node_modules_pnpm_react_i18next_15_6_0_i18next_24_2_3_typescript_5_7_3_react_dom_19_1_0_react_19_1_0_react_19_1_0_typescript_5_7_3_node_modules_react_i18next_dist_es_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(50279);



/***/ }),

/***/ 28210:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   j: () => (/* binding */ createAsyncContextLoader)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(94513);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(94285);
/* __next_internal_client_entry_do_not_use__ createAsyncContextLoader auto */ 
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
    console.log('[AsyncContextLoader] createAsyncContextLoader 被调用');
    const { Provider, extract, fallback = null } = options;
    console.log('[AsyncContextLoader] options 解构完成, fallback:', fallback);
    function AsyncContextLoaderInner(props) {
        console.log('[AsyncContextLoader] AsyncContextLoaderInner 渲染开始');
        console.log('[AsyncContextLoader] props.value 类型:', typeof props.value);
        console.log('[AsyncContextLoader] props.value 是 Promise?', props.value instanceof Promise);
        console.log('[AsyncContextLoader] props.value:', props.value);
        console.log('[AsyncContextLoader] 准备调用 use(props.value)');
        const raw = (0,react__WEBPACK_IMPORTED_MODULE_1__.use)(props.value);
        console.log('[AsyncContextLoader] use(props.value) 返回成功, raw:', raw);
        console.log('[AsyncContextLoader] 准备调用 extract(raw)');
        const contextValue = extract(raw);
        console.log('[AsyncContextLoader] extract(raw) 返回成功, contextValue:', contextValue);
        console.log('[AsyncContextLoader] 准备返回 Provider');
        return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Provider, {
            value: contextValue,
            children: props.children
        });
    }
    return function AsyncContextLoader(props) {
        console.log('[AsyncContextLoader] AsyncContextLoader 渲染开始');
        console.log('[AsyncContextLoader] 接收到的 props.value:', props.value);
        console.log('[AsyncContextLoader] 准备渲染 Suspense + AsyncContextLoaderInner');
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

/***/ 71647:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   RA: () => (/* binding */ ScriptEditorContextLoader),
/* harmony export */   xP: () => (/* binding */ ScriptEditorContextProvider)
/* harmony export */ });
/* unused harmony export useScriptEditorContext */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(94513);
/* harmony import */ var _fanfanlo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3131);
/* harmony import */ var _fanfanlo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(28210);
/* harmony import */ var _src_components_fallback_Fallback__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(55762);



const [ScriptEditorContextProvider, useScriptEditorContext] = (0,_fanfanlo__WEBPACK_IMPORTED_MODULE_2__/* .createTypedContext */ .W)();
const ScriptEditorContextLoader = (0,_fanfanlo__WEBPACK_IMPORTED_MODULE_3__/* .createAsyncContextLoader */ .j)({
    Provider: ScriptEditorContextProvider,
    extract: (res)=>res,
    fallback: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_src_components_fallback_Fallback__WEBPACK_IMPORTED_MODULE_1__/* .Fallback */ .H, {})
});


/***/ }),

/***/ 84754:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   M_: () => (/* binding */ loadScrptEditorData)
/* harmony export */ });
/* unused harmony exports scriptEditorNs, createScriptEditorData */
/* harmony import */ var _fanfanlo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(62095);
/* harmony import */ var _fanfanlo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4887);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(63624);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _barrel_optimize_names_ulid_ulid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(67131);



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
    const unnamed = await (0,_fanfanlo__WEBPACK_IMPORTED_MODULE_2__/* .loadI18nValue */ .y)("homepage/components/script-editor/data/content", 'content.unnamed');
    const id = (0,_barrel_optimize_names_ulid_ulid__WEBPACK_IMPORTED_MODULE_1__/* .ulid */ .Z0)();
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
    const s = await _fanfanlo__WEBPACK_IMPORTED_MODULE_3__/* .storeUtils */ .P.getNamespaceStoreWithData(ns, {
        forceReset: false,
        mergeDefData: true,
        defData: def
    });
    console.log('ddddddddd', s);
    return s.data;
}


/***/ }),

/***/ 85034:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  z: () => (/* binding */ ExamplesScriptsContent)
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/react@19.1.0/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(94513);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react-i18next@15.6.0_i18next@24.2.3_typescript@5.7.3__react-dom@19.1.0_react@19.1.0__react@19.1.0_typescript@5.7.3/node_modules/react-i18next/dist/es/index.js + 15 modules
var es = __webpack_require__(50279);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/Box/Box.js + 2 modules
var Box = __webpack_require__(6445);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/Alert/Alert.js + 6 modules
var Alert = __webpack_require__(81482);
// EXTERNAL MODULE: ../../libs/droid/android/src/android/AutoWebViewJs.ts + 1 modules
var AutoWebViewJs = __webpack_require__(45921);
// EXTERNAL MODULE: ../../libs/fanfanlo/src/i18n/fanfanloI18n.ts
var fanfanloI18n = __webpack_require__(95414);
// EXTERNAL MODULE: ../../libs/fanfanlo/src/watcher/proxyWatch.ts
var proxyWatch = __webpack_require__(88518);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/CircularProgress/CircularProgress.js + 1 modules
var CircularProgress = __webpack_require__(95746);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/Typography/Typography.js
var Typography = __webpack_require__(67079);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/Stack/Stack.js + 1 modules
var Stack = __webpack_require__(9220);
// EXTERNAL MODULE: ./src/components/script-editor/data/context.tsx
var context = __webpack_require__(71647);
// EXTERNAL MODULE: ./src/components/script-editor/data/script-editor.data.intf.ts
var script_editor_data_intf = __webpack_require__(84754);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react@19.1.0/node_modules/react/index.js
var react = __webpack_require__(94285);
// EXTERNAL MODULE: ./src/components/script-editor/content/useDroidDocsScripts.ts + 1 modules
var useDroidDocsScripts = __webpack_require__(98817);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/Button/Button.js + 3 modules
var Button = __webpack_require__(28669);
;// ./src/components/script-editor/content/v2/ScriptControlBar.tsx



// 日志前缀
const LOG_PREFIX = '[ScriptControlBar]';
/**
 * 脚本控制按钮栏组件
 * 包含运行按钮等控制按钮
 */ function ScriptControlBar(param) {
    let { scriptData, onRun } = param;
    console.log("".concat(LOG_PREFIX, " 组件初始化, scriptData 是否存在: ").concat(!!scriptData));
    const { t } = (0,es/* useTranslation */.Bd)('homepage/components/script-editor/content/v2/content');
    const handleRun = ()=>{
        console.log("".concat(LOG_PREFIX, " 运行按钮被点击"));
        if (!scriptData) {
            console.log("".concat(LOG_PREFIX, " scriptData 为空, 无法运行"));
            return;
        } else {
            console.log("".concat(LOG_PREFIX, " scriptData 存在, 准备运行脚本"));
        }
        if (!scriptData.script || scriptData.script.trim() === '') {
            console.log("".concat(LOG_PREFIX, " 脚本内容为空, 无法运行"));
            return;
        } else {
            console.log("".concat(LOG_PREFIX, " 脚本内容长度: ").concat(scriptData.script.length));
        }
        onRun();
        console.log("".concat(LOG_PREFIX, " onRun 回调已执行"));
    };
    const isDisabled = !scriptData || !scriptData.script || scriptData.script.trim() === '';
    console.log("".concat(LOG_PREFIX, " 运行按钮是否禁用: ").concat(isDisabled));
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.A, {
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Button/* default */.A, {
            variant: "contained",
            onClick: handleRun,
            disabled: isDisabled,
            children: t('ScriptControlBar.run')
        })
    });
}

// EXTERNAL MODULE: ../../libs/fanfanlo/src/watcher/useProxyWatch.ts
var useProxyWatch = __webpack_require__(45007);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/TextareaAutosize/TextareaAutosize.js
var TextareaAutosize = __webpack_require__(90333);
;// ./src/components/script-editor/content/v2/ScriptEditor.tsx



// 日志前缀
const ScriptEditor_LOG_PREFIX = '[ScriptEditor]';
/**
 * 脚本编辑器组件
 * 编辑 IScript 对象的 script 字段
 */ function ScriptEditor(param) {
    let { scriptData } = param;
    console.log("".concat(ScriptEditor_LOG_PREFIX, " 组件初始化"));
    const { t } = (0,es/* useTranslation */.Bd)('homepage/components/script-editor/content/v2/content');
    // 监听 scriptData.script 的变化
    const [script] = (0,useProxyWatch/* useProxyWatch */.x)(scriptData, 'script', scriptData.script);
    console.log("".concat(ScriptEditor_LOG_PREFIX, " script 长度: ").concat(script.length));
    const handleChange = (e)=>{
        const newValue = e.target.value;
        console.log("".concat(ScriptEditor_LOG_PREFIX, " 脚本内容变化, 新长度: ").concat(newValue.length));
        scriptData.script = newValue;
        console.log("".concat(ScriptEditor_LOG_PREFIX, " 脚本内容已更新"));
    };
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.A, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.A, {
                variant: "body2",
                sx: {
                    mb: 1,
                    fontWeight: 500
                },
                children: t('ScriptEditor.label')
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(TextareaAutosize/* default */.A, {
                value: script,
                onChange: handleChange,
                style: {
                    width: '100%',
                    minHeight: '300px',
                    padding: '8px',
                    fontFamily: 'monospace',
                    fontSize: '14px',
                    border: '1px solid #ccc',
                    borderRadius: '4px'
                }
            })
        ]
    });
}

// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+icons-material@6.4.12_@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_re_5ewkm5t5g27pzq5tz62v6ktvti/node_modules/@mui/icons-material/esm/Close.js
var Close = __webpack_require__(29864);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/List/List.js + 1 modules
var List = __webpack_require__(90535);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/ListItem/ListItem.js + 3 modules
var ListItem = __webpack_require__(60889);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/ListItemButton/ListItemButton.js
var ListItemButton = __webpack_require__(48863);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/ListItemText/ListItemText.js
var ListItemText = __webpack_require__(63337);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/Dialog/Dialog.js + 1 modules
var Dialog = __webpack_require__(49280);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/DialogTitle/DialogTitle.js
var DialogTitle = __webpack_require__(3711);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/IconButton/IconButton.js + 1 modules
var IconButton = __webpack_require__(65494);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/DialogContent/DialogContent.js + 1 modules
var DialogContent = __webpack_require__(18244);
;// ./src/components/script-editor/content/v2/ScriptExamplePopup.tsx




// 日志前缀
const ScriptExamplePopup_LOG_PREFIX = '[ScriptExamplePopup]';
/**
 * 脚本示例选择弹窗组件
 * 显示分组的脚本示例列表
 */ function ScriptExamplePopup(param) {
    let { open, onClose, examplesMap, onSelectScript } = param;
    console.log("".concat(ScriptExamplePopup_LOG_PREFIX, " 组件初始化, open: ").concat(open));
    const { t } = (0,es/* useTranslation */.Bd)('homepage/components/script-editor/content/v2/content');
    const handleClose = ()=>{
        console.log("".concat(ScriptExamplePopup_LOG_PREFIX, " 关闭按钮被点击"));
        onClose();
    };
    const handleSelectScript = (script)=>{
        console.log("".concat(ScriptExamplePopup_LOG_PREFIX, " 选中脚本: ").concat(script.name, ", path: ").concat(script.path));
        onSelectScript(script);
    };
    // 渲染分组
    const renderGroup = (level)=>{
        if (!examplesMap) {
            console.log("".concat(ScriptExamplePopup_LOG_PREFIX, " examplesMap 为空, 跳过渲染"));
            return null;
        }
        const scripts = examplesMap[level];
        console.log("".concat(ScriptExamplePopup_LOG_PREFIX, " 渲染分组: ").concat(level, ", 脚本数量: ").concat(scripts.length));
        if (scripts.length === 0) {
            console.log("".concat(ScriptExamplePopup_LOG_PREFIX, " 分组 ").concat(level, " 没有脚本, 跳过渲染"));
            return null;
        }
        return /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.A, {
            sx: {
                mb: 3
            },
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.A, {
                    variant: "subtitle2",
                    color: "primary",
                    sx: {
                        mb: 1,
                        fontWeight: 'bold',
                        px: 2
                    },
                    children: t("ScriptExamplePopup.levels.".concat(level))
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)(List/* default */.A, {
                    children: scripts.map((script)=>{
                        console.log("".concat(ScriptExamplePopup_LOG_PREFIX, " 渲染脚本项: ").concat(script.name));
                        return /*#__PURE__*/ (0,jsx_runtime.jsx)(ListItem/* default */.Ay, {
                            disablePadding: true,
                            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(ListItemButton/* default */.A, {
                                onClick: ()=>handleSelectScript(script),
                                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(ListItemText/* default */.A, {
                                    primary: script.name,
                                    secondary: script.desc
                                })
                            })
                        }, script.path);
                    })
                })
            ]
        }, level);
    };
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(Dialog/* default */.A, {
        open: open,
        onClose: handleClose,
        maxWidth: "md",
        fullWidth: true,
        sx: {
            '& .MuiDialog-paper': {
                minHeight: '60vh',
                maxHeight: '80vh'
            }
        },
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsxs)(DialogTitle/* default */.A, {
                sx: {
                    m: 0,
                    p: 2,
                    pr: 6
                },
                children: [
                    t('ScriptExamplePopup.title'),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(IconButton/* default */.A, {
                        "aria-label": "close",
                        onClick: handleClose,
                        sx: {
                            position: 'absolute',
                            right: 8,
                            top: 8,
                            color: (theme)=>theme.palette.grey[500]
                        },
                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Close/* default */.A, {})
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)(DialogContent/* default */.A, {
                dividers: true,
                children: [
                    renderGroup('beginner'),
                    renderGroup('intermediate'),
                    renderGroup('advanced')
                ]
            })
        ]
    });
}

;// ./src/components/script-editor/content/v2/ScriptExampleSelectorButton.tsx





// 日志前缀
const ScriptExampleSelectorButton_LOG_PREFIX = '[ScriptExampleSelectorButton]';
/**
 * 脚本示例选择按钮组件
 * 点击按钮弹出示例选择弹窗
 */ function ScriptExampleSelectorButton(param) {
    let { examplesMap, onSelectScript } = param;
    console.log("".concat(ScriptExampleSelectorButton_LOG_PREFIX, " 组件初始化"));
    const { t } = (0,es/* useTranslation */.Bd)('homepage/components/script-editor/content/v2/content');
    const [open, setOpen] = (0,react.useState)(false);
    const handleOpen = ()=>{
        console.log("".concat(ScriptExampleSelectorButton_LOG_PREFIX, " 按钮被点击, 准备打开弹窗"));
        setOpen(true);
        console.log("".concat(ScriptExampleSelectorButton_LOG_PREFIX, " 弹窗状态已设置为 true"));
    };
    const handleClose = ()=>{
        console.log("".concat(ScriptExampleSelectorButton_LOG_PREFIX, " 准备关闭弹窗"));
        setOpen(false);
        console.log("".concat(ScriptExampleSelectorButton_LOG_PREFIX, " 弹窗状态已设置为 false"));
    };
    const handleSelect = (script)=>{
        console.log("".concat(ScriptExampleSelectorButton_LOG_PREFIX, " 选中脚本: ").concat(script.name));
        onSelectScript(script);
        handleClose();
    };
    const isDisabled = !examplesMap;
    console.log("".concat(ScriptExampleSelectorButton_LOG_PREFIX, " 按钮是否禁用: ").concat(isDisabled));
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Button/* default */.A, {
                variant: "contained",
                onClick: handleOpen,
                disabled: isDisabled,
                children: t('ScriptExampleSelectorButton.selectExample')
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(ScriptExamplePopup, {
                open: open,
                onClose: handleClose,
                examplesMap: examplesMap,
                onSelectScript: handleSelect
            })
        ]
    });
}

// EXTERNAL MODULE: ../../libs/fanfanlo/src/watcher/useWatchUpdates.tsx
var useWatchUpdates = __webpack_require__(30771);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/Chip/Chip.js + 2 modules
var Chip = __webpack_require__(688);
// EXTERNAL MODULE: ../../libs/droid/android/src/android/components/Manifest.ts
var Manifest = __webpack_require__(73703);
// EXTERNAL MODULE: ../../libs/fanfanlo/src/log/Log.ts + 1 modules
var Log = __webpack_require__(48891);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/Divider/Divider.js
var Divider = __webpack_require__(56575);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/FormGroup/FormGroup.js + 1 modules
var FormGroup = __webpack_require__(80239);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/FormControlLabel/FormControlLabel.js + 1 modules
var FormControlLabel = __webpack_require__(30281);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/Checkbox/Checkbox.js + 4 modules
var Checkbox = __webpack_require__(93916);
;// ./src/components/permissions/android-permissions/AndroidPermissionsCheckbox.tsx





// 日志前缀
const AndroidPermissionsCheckbox_LOG_PREFIX = '[AndroidPermissionsCheckbox]';
const fileLog = new Log/* Log */.tG(false, 'AndroidPermissionsCheckbox_f');
fileLog.pause = true;
fileLog.childrenPaused = true;
/**
 * 权限选择器组件 (Checkbox 版本)
 * @param props IPermissionsProps 对象 (使用 toProxy 包装)
 */ const AndroidPermissionsCheckbox = (props)=>{
    fileLog.log("".concat(AndroidPermissionsCheckbox_LOG_PREFIX, " 组件初始化, props:"), props);
    const { t } = (0,es/* useTranslation */.Bd)('homepage/components/permissions/android-permissions/content');
    const { t: tManifest } = (0,es/* useTranslation */.Bd)('droid-android/android/components/content');
    // 监听 props.permissions 的变化,触发组件重新渲染
    const [permissions] = (0,useWatchUpdates/* useProxyWatchUpdates */.d)(props, 'permissions', props.permissions);
    fileLog.log("".concat(AndroidPermissionsCheckbox_LOG_PREFIX, " permissions 数组长度: ").concat(permissions.length));
    // 1. 构造用于显示的完整选项列表
    const permissionOptions = (0,react.useMemo)(()=>{
        fileLog.log("".concat(AndroidPermissionsCheckbox_LOG_PREFIX, " 开始构造权限选项列表"));
        const options = [];
        // 1.1. 处理 ManifestPermissionGroup
        const groupKeys = Object.keys(Manifest/* ManifestPermissionGroup */.Kt);
        fileLog.log("".concat(AndroidPermissionsCheckbox_LOG_PREFIX, " ManifestPermissionGroup 数量: ").concat(groupKeys.length));
        groupKeys.forEach((key)=>{
            options.push({
                key: key,
                value: Manifest/* ManifestPermissionGroup */.Kt[key],
                label: tManifest("Manifest.PermissionGroup.".concat(key)),
                group: 'ManifestPermissionGroup'
            });
        });
        // 1.2. 处理 ManifestPermission
        const permissionKeys = Object.keys(Manifest/* ManifestPermission */.Ls);
        fileLog.log("".concat(AndroidPermissionsCheckbox_LOG_PREFIX, " ManifestPermission 数量: ").concat(permissionKeys.length));
        permissionKeys.forEach((key)=>{
            options.push({
                key: key,
                value: Manifest/* ManifestPermission */.Ls[key],
                label: tManifest("Manifest.Permission.".concat(key)),
                group: 'ManifestPermission'
            });
        });
        fileLog.log("".concat(AndroidPermissionsCheckbox_LOG_PREFIX, " 权限选项列表构造完成, 总数: ").concat(options.length));
        return options;
    }, [
        tManifest
    ]);
    // 2. 按分组整理选项
    const groupedOptions = (0,react.useMemo)(()=>{
        fileLog.log("".concat(AndroidPermissionsCheckbox_LOG_PREFIX, " 开始按分组整理选项"));
        const groups = {
            ManifestPermissionGroup: [],
            ManifestPermission: []
        };
        permissionOptions.forEach((option)=>{
            if (option.group === 'ManifestPermissionGroup') {
                groups.ManifestPermissionGroup.push(option);
            } else {
                groups.ManifestPermission.push(option);
            }
        });
        fileLog.log("".concat(AndroidPermissionsCheckbox_LOG_PREFIX, " 分组完成, ManifestPermissionGroup: ").concat(groups.ManifestPermissionGroup.length, ", ManifestPermission: ").concat(groups.ManifestPermission.length));
        return groups;
    }, [
        permissionOptions
    ]);
    // 3. 处理 Checkbox 勾选/取消勾选事件
    const handleCheckboxChange = (permissionValue, checked)=>{
        fileLog.log("".concat(AndroidPermissionsCheckbox_LOG_PREFIX, " Checkbox 状态变化, 权限: ").concat(permissionValue, ", 是否勾选: ").concat(checked));
        if (checked) {
            // 勾选: 添加到数组
            const alreadyExists = props.permissions.includes(permissionValue);
            fileLog.log("".concat(AndroidPermissionsCheckbox_LOG_PREFIX, " 准备添加权限, 是否已存在: ").concat(alreadyExists));
            if (alreadyExists) {
                fileLog.log("".concat(AndroidPermissionsCheckbox_LOG_PREFIX, " 权限已存在, 无需添加"));
            } else {
                props.permissions.push(permissionValue);
                fileLog.log("".concat(AndroidPermissionsCheckbox_LOG_PREFIX, " 权限已添加, 当前数组长度: ").concat(props.permissions.length));
            }
        } else {
            // 取消勾选: 从数组中移除
            const index = props.permissions.indexOf(permissionValue);
            fileLog.log("".concat(AndroidPermissionsCheckbox_LOG_PREFIX, " 准备移除权限, 索引位置: ").concat(index));
            if (index === -1) {
                fileLog.log("".concat(AndroidPermissionsCheckbox_LOG_PREFIX, " 权限不存在于数组中, 无需移除"));
            } else {
                props.permissions.splice(index, 1);
                fileLog.log("".concat(AndroidPermissionsCheckbox_LOG_PREFIX, " 权限已移除, 当前数组长度: ").concat(props.permissions.length));
            }
        }
    };
    // 4. 渲染分组
    const renderGroup = (groupName)=>{
        const options = groupedOptions[groupName];
        fileLog.log("".concat(AndroidPermissionsCheckbox_LOG_PREFIX, " 渲染分组: ").concat(groupName, ", 选项数量: ").concat(options.length));
        const groupLabel = t("AndroidPermissionsCheckbox.Group.".concat(groupName));
        return /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.A, {
            sx: {
                mb: 3
            },
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.A, {
                    variant: "subtitle2",
                    color: "primary",
                    sx: {
                        mb: 1,
                        fontWeight: 'bold'
                    },
                    children: groupLabel
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)(FormGroup/* default */.A, {
                    children: options.map((option)=>{
                        const isChecked = permissions.includes(option.value);
                        return /*#__PURE__*/ (0,jsx_runtime.jsx)(FormControlLabel/* default */.A, {
                            control: /*#__PURE__*/ (0,jsx_runtime.jsx)(Checkbox/* default */.A, {
                                checked: isChecked,
                                onChange: (e)=>{
                                    const checked = e.target.checked;
                                    fileLog.log("".concat(AndroidPermissionsCheckbox_LOG_PREFIX, " onChange 事件触发, 权限: ").concat(option.value, ", checked: ").concat(checked));
                                    handleCheckboxChange(option.value, checked);
                                }
                            }),
                            label: /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.A, {
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.A, {
                                        variant: "body2",
                                        sx: {
                                            fontWeight: 500,
                                            color: 'primary.main'
                                        },
                                        children: option.label
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.A, {
                                        variant: "caption",
                                        color: "text.secondary",
                                        sx: {
                                            fontFamily: 'monospace'
                                        },
                                        children: option.value
                                    })
                                ]
                            })
                        }, option.value);
                    })
                })
            ]
        }, groupName);
    };
    fileLog.log("".concat(AndroidPermissionsCheckbox_LOG_PREFIX, " 组件渲染"));
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.A, {
        sx: {
            width: '100%'
        },
        children: [
            renderGroup('ManifestPermissionGroup'),
            renderGroup('ManifestPermission')
        ]
    });
};

;// ./src/components/permissions/android-permissions/AndroidPermissionsPopup.tsx







// 日志前缀
const AndroidPermissionsPopup_LOG_PREFIX = '[AndroidPermissionsPopup]';
const AndroidPermissionsPopup_fileLog = new Log/* Log */.tG(false, '[AndroidPermissionsPopup]');
/**
 * 权限选择器弹窗组件
 */ const AndroidPermissionsPopup = (param)=>{
    let { open, onClose, permissionsProps } = param;
    AndroidPermissionsPopup_fileLog.log("".concat(AndroidPermissionsPopup_LOG_PREFIX, " 组件初始化, open: ").concat(open));
    const { t } = (0,es/* useTranslation */.Bd)('homepage/components/permissions/android-permissions/content');
    const { t: tManifest } = (0,es/* useTranslation */.Bd)('droid-android/android/components/content');
    // 监听 permissions 数组的变化
    const [permissions] = (0,useWatchUpdates/* useProxyWatchUpdates */.d)(permissionsProps, 'permissions', permissionsProps.permissions);
    AndroidPermissionsPopup_fileLog.log("".concat(AndroidPermissionsPopup_LOG_PREFIX, " 当前已选权限数量: ").concat(permissions.length));
    // 构造权限值到说明的映射 Map
    const permissionLabelMap = (0,react.useMemo)(()=>{
        AndroidPermissionsPopup_fileLog.log("".concat(AndroidPermissionsPopup_LOG_PREFIX, " 开始构造权限标签映射"));
        const map = new Map();
        // 处理 ManifestPermissionGroup
        const groupKeys = Object.keys(Manifest/* ManifestPermissionGroup */.Kt);
        groupKeys.forEach((key)=>{
            const value = Manifest/* ManifestPermissionGroup */.Kt[key];
            const label = tManifest("Manifest.PermissionGroup.".concat(key));
            map.set(value, label);
        });
        // 处理 ManifestPermission
        const permissionKeys = Object.keys(Manifest/* ManifestPermission */.Ls);
        permissionKeys.forEach((key)=>{
            const value = Manifest/* ManifestPermission */.Ls[key];
            const label = tManifest("Manifest.Permission.".concat(key));
            map.set(value, label);
        });
        AndroidPermissionsPopup_fileLog.log("".concat(AndroidPermissionsPopup_LOG_PREFIX, " 权限标签映射构造完成, 总数: ").concat(map.size));
        return map;
    }, [
        tManifest
    ]);
    const handleClose = ()=>{
        AndroidPermissionsPopup_fileLog.log("".concat(AndroidPermissionsPopup_LOG_PREFIX, " 关闭按钮被点击"));
        onClose();
    };
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(Dialog/* default */.A, {
        open: open,
        onClose: handleClose,
        maxWidth: "md",
        fullWidth: true,
        sx: {
            '& .MuiDialog-paper': {
                minHeight: '60vh',
                maxHeight: '80vh'
            }
        },
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsxs)(DialogTitle/* default */.A, {
                sx: {
                    m: 0,
                    p: 2,
                    pr: 6
                },
                children: [
                    t('AndroidPermissionsPopup.Label'),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(IconButton/* default */.A, {
                        "aria-label": "close",
                        onClick: handleClose,
                        sx: {
                            position: 'absolute',
                            right: 8,
                            top: 8,
                            color: (theme)=>theme.palette.grey[500]
                        },
                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Close/* default */.A, {})
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)(DialogContent/* default */.A, {
                dividers: true,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.A, {
                        sx: {
                            mb: 3,
                            p: 2,
                            bgcolor: '#f5f5f5',
                            borderRadius: 1
                        },
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)(Typography/* default */.A, {
                                variant: "subtitle2",
                                sx: {
                                    mb: 1.5,
                                    fontWeight: 'bold',
                                    color: 'primary.main'
                                },
                                children: [
                                    t('AndroidPermissionsPopup.SelectedPermissions'),
                                    " (",
                                    permissions.length,
                                    ")"
                                ]
                            }),
                            permissions.length === 0 ? /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.A, {
                                variant: "body2",
                                color: "text.secondary",
                                children: t('AndroidPermissionsPopup.NoPermissionsSelected')
                            }) : /*#__PURE__*/ (0,jsx_runtime.jsx)(Stack/* default */.A, {
                                direction: "column",
                                spacing: 1.5,
                                children: permissions.map((permission, index)=>{
                                    const label = permissionLabelMap.get(permission);
                                    AndroidPermissionsPopup_fileLog.log("".concat(AndroidPermissionsPopup_LOG_PREFIX, " 渲染已选权限: ").concat(permission, ", 说明: ").concat(label));
                                    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.A, {
                                        sx: {
                                            p: 1.5,
                                            bgcolor: 'white',
                                            borderRadius: 1,
                                            border: '1px solid',
                                            borderColor: 'primary.light'
                                        },
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.A, {
                                                variant: "body2",
                                                sx: {
                                                    fontWeight: 500,
                                                    color: 'primary.main',
                                                    mb: 0.5
                                                },
                                                children: label || permission
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.A, {
                                                variant: "caption",
                                                color: "text.secondary",
                                                sx: {
                                                    fontFamily: 'monospace'
                                                },
                                                children: permission
                                            })
                                        ]
                                    }, "".concat(permission, "-").concat(index));
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Divider/* default */.A, {
                        sx: {
                            mb: 2
                        }
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(AndroidPermissionsCheckbox, {
                        ...permissionsProps
                    })
                ]
            })
        ]
    });
};

;// ./src/components/permissions/android-permissions/AndroidPermissionsButton.tsx





// 日志前缀
const AndroidPermissionsButton_LOG_PREFIX = '[AndroidPermissionsButton]';
/**
 * 权限选择器按钮组件
 * 点击按钮时弹出权限选择器弹窗
 */ const AndroidPermissionsButton = (param)=>{
    let { permissionsProps } = param;
    // console.log(`${LOG_PREFIX} 组件初始化`);
    // C:\work\android-droid\html\website-2024-12\apps\homepage\src\components\permissions\android-permissions\AndroidPermissionsButton.tsx
    const { t } = (0,es/* useTranslation */.Bd)('homepage/components/permissions/android-permissions/content');
    const [open, setOpen] = (0,react.useState)(false);
    const handleOpen = ()=>{
        // console.log(`${LOG_PREFIX} 按钮被点击, 准备打开弹窗`);
        setOpen(true);
    // console.log(`${LOG_PREFIX} 弹窗状态已设置为 true`);
    };
    const handleClose = ()=>{
        // console.log(`${LOG_PREFIX} 准备关闭弹窗`);
        setOpen(false);
    // console.log(`${LOG_PREFIX} 弹窗状态已设置为 false`);
    };
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Button/* default */.A, {
                variant: "contained",
                onClick: handleOpen,
                children: t('AndroidPermissionsButton.ButtonLabel')
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(AndroidPermissionsPopup, {
                open: open,
                onClose: handleClose,
                permissionsProps: permissionsProps
            })
        ]
    });
};

;// ./src/components/script-editor/content/v2/ScriptPermissionsEditor.tsx





// 日志前缀
const ScriptPermissionsEditor_LOG_PREFIX = '[ScriptPermissionsEditor]';
/**
 * 脚本权限编辑器组件
 * 编辑 IScript 对象的 permissions 字段
 */ function ScriptPermissionsEditor(param) {
    let { scriptData } = param;
    console.log("".concat(ScriptPermissionsEditor_LOG_PREFIX, " 组件初始化"));
    const { t } = (0,es/* useTranslation */.Bd)('homepage/components/script-editor/content/v2/content');
    // 确保 permissions 数组存在
    if (!scriptData.permissions) {
        console.log("".concat(ScriptPermissionsEditor_LOG_PREFIX, " scriptData.permissions 为 undefined, 初始化为空数组"));
        scriptData.permissions = [];
    } else {
        console.log("".concat(ScriptPermissionsEditor_LOG_PREFIX, " scriptData.permissions 已存在, 长度: ").concat(scriptData.permissions.length));
    }
    // 创建 permissionsProps 对象并使用 toProxy 包装
    const [permissionsProps] = (0,react.useState)(()=>{
        console.log("".concat(ScriptPermissionsEditor_LOG_PREFIX, " 创建 permissionsProps 对象"));
        const props = (0,proxyWatch/* toProxy */.I$)({
            permissions: scriptData.permissions
        });
        console.log("".concat(ScriptPermissionsEditor_LOG_PREFIX, " permissionsProps 创建完成"));
        return props;
    });
    // 监听 permissions 数组的变化
    const [permissions] = (0,useWatchUpdates/* useProxyWatchUpdates */.d)(permissionsProps, 'permissions', permissionsProps.permissions);
    console.log("".concat(ScriptPermissionsEditor_LOG_PREFIX, " 当前权限数量: ").concat(permissions.length));
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.A, {
        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(Stack/* default */.A, {
            direction: "row",
            spacing: 2,
            alignItems: "center",
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsxs)(Typography/* default */.A, {
                    variant: "body2",
                    sx: {
                        fontWeight: 500
                    },
                    children: [
                        t('ScriptPermissionsEditor.label'),
                        ":"
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)(Chip/* default */.A, {
                    label: "".concat(permissions.length, " ").concat(t('ScriptPermissionsEditor.permissionsCount')),
                    size: "small",
                    color: permissions.length > 0 ? 'primary' : 'default'
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)(AndroidPermissionsButton, {
                    permissionsProps: permissionsProps
                })
            ]
        })
    });
}

;// ./src/components/script-editor/content/v2/ScriptEditorContentV2.tsx












// 日志前缀
const ScriptEditorContentV2_LOG_PREFIX = '[ScriptEditorContentV2]';
function ScriptEditorContentV2(param) {
    let { ns, initialCategory, initialName, initialScript } = param;
    console.log("".concat(ScriptEditorContentV2_LOG_PREFIX, " 组件初始化, ns: ").concat(ns, ", initialCategory: ").concat(initialCategory, ", initialName: ").concat(initialName, ", initialScript: ").concat(initialScript));
    const lang = fanfanloI18n/* fanfanloI18n */._.language || 'en';
    console.log("".concat(ScriptEditorContentV2_LOG_PREFIX, " 当前语言: ").concat(lang));
    const { t } = (0,es/* useTranslation */.Bd)('homepage/components/script-editor/content/v2/content');
    // Context 数据状态
    const [contextData, setContextData] = (0,react.useState)(null);
    const [isLoadingContext, setIsLoadingContext] = (0,react.useState)(true);
    const [contextError, setContextError] = (0,react.useState)(null);
    console.log("".concat(ScriptEditorContentV2_LOG_PREFIX, " contextData 是否存在: ").concat(!!contextData, ", isLoadingContext: ").concat(isLoadingContext));
    // 使用 droid-docs API 获取脚本数据
    const { examplesMap, isLoadingMap, mapError, scriptError } = (0,useDroidDocsScripts/* useDroidDocsScripts */.b)(lang);
    console.log("".concat(ScriptEditorContentV2_LOG_PREFIX, " examplesMap 是否加载: ").concat(!!examplesMap, ", isLoadingMap: ").concat(isLoadingMap));
    // 使用 toProxy 管理 IScript 状态
    const [scriptData, setScriptData] = (0,react.useState)(null);
    console.log("".concat(ScriptEditorContentV2_LOG_PREFIX, " scriptData 是否存在: ").concat(!!scriptData));
    // 运行脚本状态
    const [runScript, setRunScript] = (0,react.useState)('');
    console.log("".concat(ScriptEditorContentV2_LOG_PREFIX, " runScript 状态: ").concat(runScript ? '有内容' : '空'));
    // 使用 useRef 标记是否已加载 context 数据
    const hasLoadedContextRef = (0,react.useRef)(false);
    // 加载 context 数据
    (0,react.useEffect)(()=>{
        console.log("".concat(ScriptEditorContentV2_LOG_PREFIX, " context 加载 useEffect 触发, hasLoaded: ").concat(hasLoadedContextRef.current));
        if (hasLoadedContextRef.current) {
            console.log("".concat(ScriptEditorContentV2_LOG_PREFIX, " context 已加载过, 跳过"));
            return;
        }
        let mounted = true;
        console.log("".concat(ScriptEditorContentV2_LOG_PREFIX, " 开始加载 context 数据"));
        async function loadContext() {
            try {
                setIsLoadingContext(true);
                console.log("".concat(ScriptEditorContentV2_LOG_PREFIX, " 调用 loadScrptEditorData, ns: ").concat(ns));
                const data = await (0,script_editor_data_intf/* loadScrptEditorData */.M_)(ns);
                console.log("".concat(ScriptEditorContentV2_LOG_PREFIX, " loadScrptEditorData 完成"), data);
                if (mounted) {
                    console.log("".concat(ScriptEditorContentV2_LOG_PREFIX, " 组件仍然挂载, 设置 context 数据"));
                    setContextData(data);
                    setIsLoadingContext(false);
                    hasLoadedContextRef.current = true;
                } else {
                    console.log("".concat(ScriptEditorContentV2_LOG_PREFIX, " 组件已卸载, 忽略数据"));
                }
            } catch (err) {
                console.error("".concat(ScriptEditorContentV2_LOG_PREFIX, " 加载 context 数据失败"), err);
                if (mounted) {
                    setContextError(err);
                    setIsLoadingContext(false);
                }
            }
        }
        loadContext();
        return ()=>{
            console.log("".concat(ScriptEditorContentV2_LOG_PREFIX, " context 加载 useEffect 清理"));
            mounted = false;
        };
    }, [
        ns
    ]);
    // 创建空的 IScript 对象
    const createEmptyScript = ()=>{
        console.log("".concat(ScriptEditorContentV2_LOG_PREFIX, " 创建空的 IScript 对象"));
        const emptyScript = {
            name: '',
            script: '',
            desc: '',
            path: '',
            version: 1,
            permissions: []
        };
        console.log("".concat(ScriptEditorContentV2_LOG_PREFIX, " 空 IScript 对象创建完成"));
        return (0,proxyWatch/* toProxy */.I$)(emptyScript);
    };
    // 根据 initialCategory 和 initialName 查找并加载脚本
    (0,react.useEffect)(()=>{
        var _targetScript_permissions, _scriptCopy_permissions;
        console.log("".concat(ScriptEditorContentV2_LOG_PREFIX, " useEffect 触发, initialCategory: ").concat(initialCategory, ", initialName: ").concat(initialName, ", examplesMap 是否存在: ").concat(!!examplesMap));
        // 如果没有初始化参数,创建空的 IScript
        if (!initialCategory || !initialName) {
            console.log("".concat(ScriptEditorContentV2_LOG_PREFIX, " 没有初始化参数, 创建空的 IScript"));
            if (!scriptData) {
                console.log("".concat(ScriptEditorContentV2_LOG_PREFIX, " scriptData 为空, 执行创建"));
                const empty = createEmptyScript();
                setScriptData(empty);
                console.log("".concat(ScriptEditorContentV2_LOG_PREFIX, " 空 IScript 已设置"));
            } else {
                console.log("".concat(ScriptEditorContentV2_LOG_PREFIX, " scriptData 已存在, 跳过创建"));
            }
            return;
        }
        // 如果还在加载 examplesMap,等待
        if (!examplesMap) {
            console.log("".concat(ScriptEditorContentV2_LOG_PREFIX, " examplesMap 尚未加载, 等待"));
            return;
        }
        console.log("".concat(ScriptEditorContentV2_LOG_PREFIX, " 开始根据 category 和 name 查找脚本"));
        // 从 examplesMap 中查找对应级别的脚本列表
        const levelScripts = examplesMap[initialCategory];
        console.log("".concat(ScriptEditorContentV2_LOG_PREFIX, " ").concat(initialCategory, " 级别脚本列表长度: ").concat((levelScripts === null || levelScripts === void 0 ? void 0 : levelScripts.length) || 0));
        if (!levelScripts) {
            console.error("".concat(ScriptEditorContentV2_LOG_PREFIX, " 找不到 ").concat(initialCategory, " 级别的脚本列表"));
            return;
        }
        // 在脚本列表中查找目标脚本
        const targetScript = levelScripts.find((s)=>s.path === "".concat(initialCategory, "/").concat(initialName));
        console.log("".concat(ScriptEditorContentV2_LOG_PREFIX, " 查找结果: ").concat(targetScript ? '找到' : '未找到'));
        if (!targetScript) {
            console.error("".concat(ScriptEditorContentV2_LOG_PREFIX, " 找不到脚本: ").concat(initialCategory, "/").concat(initialName));
            return;
        }
        console.log("".concat(ScriptEditorContentV2_LOG_PREFIX, " 找到脚本: ").concat(targetScript.name, ", 权限数量: ").concat(((_targetScript_permissions = targetScript.permissions) === null || _targetScript_permissions === void 0 ? void 0 : _targetScript_permissions.length) || 0));
        // 创建脚本的副本并使用 toProxy 包装
        const scriptCopy = {
            ...targetScript,
            permissions: targetScript.permissions ? [
                ...targetScript.permissions
            ] : []
        };
        console.log("".concat(ScriptEditorContentV2_LOG_PREFIX, " 脚本副本创建完成, permissions 数量: ").concat(((_scriptCopy_permissions = scriptCopy.permissions) === null || _scriptCopy_permissions === void 0 ? void 0 : _scriptCopy_permissions.length) || 0));
        const proxiedScript = (0,proxyWatch/* toProxy */.I$)(scriptCopy);
        console.log("".concat(ScriptEditorContentV2_LOG_PREFIX, " 脚本已使用 toProxy 包装"));
        setScriptData(proxiedScript);
        console.log("".concat(ScriptEditorContentV2_LOG_PREFIX, " scriptData 已更新"));
    }, [
        initialCategory,
        initialName,
        examplesMap
    ]);
    // 处理选择示例脚本
    const handleSelectScript = (script)=>{
        var _scriptCopy_permissions;
        console.log("".concat(ScriptEditorContentV2_LOG_PREFIX, " 选择示例脚本: ").concat(script.name));
        // 创建脚本的副本
        const scriptCopy = {
            ...script,
            permissions: script.permissions ? [
                ...script.permissions
            ] : []
        };
        console.log("".concat(ScriptEditorContentV2_LOG_PREFIX, " 脚本副本创建完成, permissions 数量: ").concat(((_scriptCopy_permissions = scriptCopy.permissions) === null || _scriptCopy_permissions === void 0 ? void 0 : _scriptCopy_permissions.length) || 0));
        const proxiedScript = (0,proxyWatch/* toProxy */.I$)(scriptCopy);
        console.log("".concat(ScriptEditorContentV2_LOG_PREFIX, " 脚本已使用 toProxy 包装"));
        setScriptData(proxiedScript);
        console.log("".concat(ScriptEditorContentV2_LOG_PREFIX, " scriptData 已更新"));
    };
    // 处理运行脚本
    const handleRunScript = ()=>{
        var _scriptData_permissions;
        console.log("".concat(ScriptEditorContentV2_LOG_PREFIX, " 准备运行脚本"));
        if (!scriptData) {
            console.error("".concat(ScriptEditorContentV2_LOG_PREFIX, " scriptData 为空, 无法运行"));
            return;
        }
        if (!scriptData.script) {
            console.error("".concat(ScriptEditorContentV2_LOG_PREFIX, " 脚本内容为空, 无法运行"));
            return;
        }
        console.log("".concat(ScriptEditorContentV2_LOG_PREFIX, " 脚本内容长度: ").concat(scriptData.script.length));
        console.log("".concat(ScriptEditorContentV2_LOG_PREFIX, " 脚本权限数量: ").concat(((_scriptData_permissions = scriptData.permissions) === null || _scriptData_permissions === void 0 ? void 0 : _scriptData_permissions.length) || 0));
        console.log("".concat(ScriptEditorContentV2_LOG_PREFIX, " 使用 autoWebViewJs.callScript 运行"));
        AutoWebViewJs/* autoWebViewJs */.yx.callScript(scriptData.script);
        console.log("".concat(ScriptEditorContentV2_LOG_PREFIX, " 脚本运行完成"));
    };
    console.log("".concat(ScriptEditorContentV2_LOG_PREFIX, " 组件渲染"));
    // 如果 context 正在加载
    if (isLoadingContext) {
        console.log("".concat(ScriptEditorContentV2_LOG_PREFIX, " 渲染加载状态"));
        return /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.A, {
            sx: {
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                minHeight: 200
            },
            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(CircularProgress/* default */.A, {})
        });
    }
    // 如果 context 加载失败
    if (contextError) {
        console.log("".concat(ScriptEditorContentV2_LOG_PREFIX, " 渲染错误状态"));
        return /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.A, {
            sx: {
                p: 2
            },
            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(Alert/* default */.A, {
                severity: "error",
                children: [
                    t('ScriptEditorContentV2.contextError'),
                    ": ",
                    contextError.message
                ]
            })
        });
    }
    // 如果 context 数据不存在
    if (!contextData) {
        console.log("".concat(ScriptEditorContentV2_LOG_PREFIX, " context 数据为空"));
        return null;
    }
    console.log("".concat(ScriptEditorContentV2_LOG_PREFIX, " 渲染完整 UI"));
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(context/* ScriptEditorContextProvider */.xP, {
        value: contextData,
        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.A, {
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.A, {
                    variant: "h5",
                    children: t(ns ? 'ScriptEditorContentV2.title.edit' : 'ScriptEditorContentV2.title.create')
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsxs)(Stack/* default */.A, {
                    direction: "column",
                    spacing: 2,
                    sx: {
                        mt: 2
                    },
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
                                    children: t('ScriptEditorContentV2.loading')
                                })
                            ]
                        }),
                        mapError && /*#__PURE__*/ (0,jsx_runtime.jsxs)(Alert/* default */.A, {
                            severity: "error",
                            children: [
                                t('ScriptEditorContentV2.mapError'),
                                ": ",
                                mapError.message
                            ]
                        }),
                        scriptError && /*#__PURE__*/ (0,jsx_runtime.jsxs)(Alert/* default */.A, {
                            severity: "error",
                            children: [
                                t('ScriptEditorContentV2.scriptError'),
                                ": ",
                                scriptError.message
                            ]
                        }),
                        examplesMap && /*#__PURE__*/ (0,jsx_runtime.jsx)(ScriptExampleSelectorButton, {
                            examplesMap: examplesMap,
                            onSelectScript: handleSelectScript
                        }),
                        scriptData && /*#__PURE__*/ (0,jsx_runtime.jsx)(ScriptPermissionsEditor, {
                            scriptData: scriptData
                        }),
                        scriptData && /*#__PURE__*/ (0,jsx_runtime.jsx)(ScriptControlBar, {
                            scriptData: scriptData,
                            onRun: handleRunScript
                        }),
                        scriptData && /*#__PURE__*/ (0,jsx_runtime.jsx)(ScriptEditor, {
                            scriptData: scriptData
                        }, scriptData.path || 'default'),
                        runScript && /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.A, {
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.A, {
                                    variant: "h6",
                                    children: t('ScriptEditorContentV2.result')
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.A, {
                                    sx: {
                                        p: 2,
                                        bgcolor: 'grey.100',
                                        borderRadius: 1,
                                        fontFamily: 'monospace',
                                        whiteSpace: 'pre-wrap'
                                    },
                                    children: runScript
                                })
                            ]
                        })
                    ]
                })
            ]
        })
    });
}

// EXTERNAL MODULE: ../../node_modules/.pnpm/next@15.3.5_@babel+core@7.28.0_babel-plugin-macros@3.1.0_react-dom@19.1.0_react@19.1.0__react@19.1.0_sass@1.89.2/node_modules/next/router.js
var next_router = __webpack_require__(75640);
;// ./src/components/page/examples/scripts/ExamplesScriptsContent.tsx







const ExamplesScriptsContent_fileLog = new Log/* Log */.tG(false, 'ExamplesScriptsContent_f');
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
            ExamplesScriptsContent_fileLog.log('ExamplesScriptsContent', 'Router not ready yet');
            return;
        }
        ExamplesScriptsContent_fileLog.log('ExamplesScriptsContent', 'Router is ready, processing query params');
        const { category, name, script } = router.query;
        ExamplesScriptsContent_fileLog.log('ExamplesScriptsContent', "Query params: category=".concat(category, ", name=").concat(name, ", script=").concat(script));
        // 解析 script 参数 (可以为字符串 'true'/'false' 或 true/false)
        const scriptBool = script === 'false' ? false : true;
        ExamplesScriptsContent_fileLog.log('ExamplesScriptsContent', "Parsed script param: ".concat(scriptBool));
        // 构建参数对象 (category 和 name 可以为空)
        const newParams = {
            category: category,
            name: name,
            script: scriptBool
        };
        ExamplesScriptsContent_fileLog.log('ExamplesScriptsContent', "Updated params: ".concat(JSON.stringify(newParams)));
        setParams(newParams);
        setIsReady(true);
    }, [
        router.isReady,
        router.query
    ]);
    // 如果参数为空，显示提示信息
    if (!isReady) {
        ExamplesScriptsContent_fileLog.log('ExamplesScriptsContent', 'Still loading router');
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
        ExamplesScriptsContent_fileLog.log('ExamplesScriptsContent', 'No category and name provided, using defaults (beginner first script)');
        return /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.A, {
            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(ScriptEditorContentV2, {})
        });
    }
    // 只有 category 或只有 name 时，显示错误信息
    if (!params.category || !params.name) {
        ExamplesScriptsContent_fileLog.log('ExamplesScriptsContent', "Invalid params: category=".concat(params.category, ", name=").concat(params.name));
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
    ExamplesScriptsContent_fileLog.log('ExamplesScriptsContent', "Rendering ScriptEditorContentV2: category=".concat(params.category, ", name=").concat(params.name, ", script=").concat(params.script));
    // 使用 ScriptEditorContentV2 显示脚本
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.A, {
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(ScriptEditorContentV2, {
            initialCategory: params.category,
            initialName: params.name,
            initialScript: params.script
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


/***/ }),

/***/ 98817:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  b: () => (/* binding */ useDroidDocsScripts)
});

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
                const map = await fetchExamplesMap(lang, true);
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


/***/ })

}]);
//# sourceMappingURL=7681-41040b1f56422356.js.map