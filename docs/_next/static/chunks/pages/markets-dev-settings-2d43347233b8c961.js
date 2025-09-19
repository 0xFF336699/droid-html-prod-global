(self["webpackChunk_N_E"] = self["webpackChunk_N_E"] || []).push([[4565],{

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

/***/ 5351:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   R: () => (/* binding */ marketsDevScriptLib)
/* harmony export */ });
/* harmony import */ var _droid_android__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5123);
/* harmony import */ var _fanfanlo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(88518);
/* harmony import */ var _fanfanlo__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4887);
/* harmony import */ var _market_lib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(15899);
/* harmony import */ var _market_dev_socket__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(79696);




// 注意marketDevLibData的操作是由devLibInfo来做的
// 一定保持它俩操作的对象是同一个。
const marketDevLibData = (0,_fanfanlo__WEBPACK_IMPORTED_MODULE_1__/* .toProxy */ .I$)({});
let devLibInfo;
// = storeUtils.getNamespaceStoreWithData('devLibInfo', {defData:{}, forceReset:false});
function getMarketScriptDataNsPrefix() {
    return 'market-script-data';
}
function createMarketScriptDataNsPath(ns) {
    return "".concat(getMarketScriptDataNsPrefix(), "/").concat(ns);
}
async function writeNsAllFiles(ns, files) {
    const nsPath = createMarketScriptDataNsPath(ns);
    const oldFiles = _droid_android__WEBPACK_IMPORTED_MODULE_2__/* .autoJsStoreUtils */ .b.read(nsPath) || [];
    for (const name of Object.keys(files)){
        const index = oldFiles.indexOf(name);
        if (index > -1) {
            oldFiles.splice(index, 1);
        }
        const content = files[name];
        _droid_android__WEBPACK_IMPORTED_MODULE_2__/* .autoJsStoreUtils */ .b.write("".concat(nsPath, "/").concat(name), content);
    }
    for (const name of oldFiles){
        removeFile("".concat(nsPath, "/").concat(name));
    }
}
function writeFile(name, content) {}
function readNsAllFiles(ns) {}
function readFile(name) {}
function removeFile(name) {}
function getAllMarkets() {}
function listenDev() {
    _market_dev_socket__WEBPACK_IMPORTED_MODULE_0__/* .marketsDevSocket */ .O.dispatcher.addListener(_market_lib__WEBPACK_IMPORTED_MODULE_3__/* .IMarketDevConnectEventType */ .Dl.getAllScripts, onGetAllScript);
    _market_dev_socket__WEBPACK_IMPORTED_MODULE_0__/* .marketsDevSocket */ .O.dispatcher.addListener(_market_lib__WEBPACK_IMPORTED_MODULE_3__/* .IMarketDevServerEventType */ .GC.update, onFileUpdate);
}
function onGetAllScript(data) {
    // console.log('onGetAllScript=2', data)
    // console.log('devLibInfo.data=', devLibInfo.data)
    devLibInfo.data.allMarketLibData = data;
    // 转为已经代理过的对象
    marketDevLibData.allMarketLibData = devLibInfo.data.allMarketLibData;
// console.log('from onGetAllScript look look id', objectCountUtils.getObjectCount(devLibInfo.data.allMarketLibData.resources))
}
function onFileUpdate(data) {
    if (data.client.resourceType == _market_lib__WEBPACK_IMPORTED_MODULE_3__/* .WatchResourceType */ .um.Html) {
        if (!devLibInfo.data.allMarketLibData) return;
        for (const html of devLibInfo.data.allMarketLibData.htmls){
            if (html.client.path == data.client.path) {
                html.content = data.content;
                return;
            }
        }
    } else if (data.client.resourceType == _market_lib__WEBPACK_IMPORTED_MODULE_3__/* .WatchResourceType */ .um.Js) {
        if (!devLibInfo.data.allMarketLibData) return;
        for(let index = 0; index < devLibInfo.data.allMarketLibData.resources.length; index++){
            const script = devLibInfo.data.allMarketLibData.resources[index];
            if (script.client.path == data.client.path) {
                devLibInfo.data.allMarketLibData.resources[index] = data;
                console.log('market script dev scripts update script', data);
                // devLibInfo.data.allMarketLibData.resources = [...devLibInfo.data.allMarketLibData.resources];
                // console.log('update data', data);
                // console.log('look look id', objectCountUtils.getObjectCount(devLibInfo.data.allMarketLibData.resources), devLibInfo.data.allMarketLibData.resources)
                return;
            }
        }
    } else {
    // unknown resource type
    }
}
let isInitialized = false;
async function init() {
    if (isInitialized) {
        return;
    }
    isInitialized = true;
    listenDev();
    devLibInfo = await _fanfanlo__WEBPACK_IMPORTED_MODULE_4__/* .storeUtils */ .P.getNamespaceStoreWithData('devLibInfo', {
        defData: {},
        forceReset: false
    });
    marketDevLibData.allMarketLibData = devLibInfo.data.allMarketLibData;
}
const marketsDevScriptLib = {
    writeFile,
    readFile,
    writeNsAllFiles,
    readNsAllFiles,
    getAllMarkets,
    init,
    marketDevLibData
};


/***/ }),

/***/ 9220:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ Stack_Stack)
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/react@19.1.0/node_modules/react/index.js
var react = __webpack_require__(94285);
// EXTERNAL MODULE: ../../node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs
var clsx = __webpack_require__(3638);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+utils@6.4.9_@types+react@19.1.8_react@19.1.0/node_modules/@mui/utils/esm/deepmerge/deepmerge.js
var deepmerge = __webpack_require__(33186);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+utils@6.4.9_@types+react@19.1.8_react@19.1.0/node_modules/@mui/utils/esm/generateUtilityClass/generateUtilityClass.js
var generateUtilityClass = __webpack_require__(69014);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+utils@6.4.9_@types+react@19.1.8_react@19.1.0/node_modules/@mui/utils/esm/composeClasses/composeClasses.js
var composeClasses = __webpack_require__(95116);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+system@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled@1_sfs2vjcbuqchwdpqpmkla22opm/node_modules/@mui/system/esm/styled/styled.js
var styled = __webpack_require__(17933);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+system@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled@1_sfs2vjcbuqchwdpqpmkla22opm/node_modules/@mui/system/esm/useThemeProps/useThemeProps.js + 1 modules
var useThemeProps = __webpack_require__(45375);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+system@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled@1_sfs2vjcbuqchwdpqpmkla22opm/node_modules/@mui/system/esm/styleFunctionSx/extendSxProp.js
var extendSxProp = __webpack_require__(82603);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+system@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled@1_sfs2vjcbuqchwdpqpmkla22opm/node_modules/@mui/system/esm/createTheme/createTheme.js + 3 modules
var createTheme = __webpack_require__(43270);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+system@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled@1_sfs2vjcbuqchwdpqpmkla22opm/node_modules/@mui/system/esm/breakpoints/breakpoints.js
var breakpoints = __webpack_require__(64489);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+system@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled@1_sfs2vjcbuqchwdpqpmkla22opm/node_modules/@mui/system/esm/spacing/spacing.js + 1 modules
var spacing = __webpack_require__(35623);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react@19.1.0/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(94513);
;// ../../node_modules/.pnpm/@mui+system@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled@1_sfs2vjcbuqchwdpqpmkla22opm/node_modules/@mui/system/esm/Stack/createStack.js













const defaultTheme = (0,createTheme/* default */.A)();
// widening Theme to any so that the consumer can own the theme structure.
const defaultCreateStyledComponent = (0,styled/* default */.A)('div', {
  name: 'MuiStack',
  slot: 'Root',
  overridesResolver: (props, styles) => styles.root
});
function useThemePropsDefault(props) {
  return (0,useThemeProps/* default */.A)({
    props,
    name: 'MuiStack',
    defaultTheme
  });
}

/**
 * Return an array with the separator React element interspersed between
 * each React node of the input children.
 *
 * > joinChildren([1,2,3], 0)
 * [1,0,2,0,3]
 */
function joinChildren(children, separator) {
  const childrenArray = react.Children.toArray(children).filter(Boolean);
  return childrenArray.reduce((output, child, index) => {
    output.push(child);
    if (index < childrenArray.length - 1) {
      output.push(/*#__PURE__*/react.cloneElement(separator, {
        key: `separator-${index}`
      }));
    }
    return output;
  }, []);
}
const getSideFromDirection = direction => {
  return {
    row: 'Left',
    'row-reverse': 'Right',
    column: 'Top',
    'column-reverse': 'Bottom'
  }[direction];
};
const style = ({
  ownerState,
  theme
}) => {
  let styles = {
    display: 'flex',
    flexDirection: 'column',
    ...(0,breakpoints/* handleBreakpoints */.NI)({
      theme
    }, (0,breakpoints/* resolveBreakpointValues */.kW)({
      values: ownerState.direction,
      breakpoints: theme.breakpoints.values
    }), propValue => ({
      flexDirection: propValue
    }))
  };
  if (ownerState.spacing) {
    const transformer = (0,spacing/* createUnarySpacing */.LX)(theme);
    const base = Object.keys(theme.breakpoints.values).reduce((acc, breakpoint) => {
      if (typeof ownerState.spacing === 'object' && ownerState.spacing[breakpoint] != null || typeof ownerState.direction === 'object' && ownerState.direction[breakpoint] != null) {
        acc[breakpoint] = true;
      }
      return acc;
    }, {});
    const directionValues = (0,breakpoints/* resolveBreakpointValues */.kW)({
      values: ownerState.direction,
      base
    });
    const spacingValues = (0,breakpoints/* resolveBreakpointValues */.kW)({
      values: ownerState.spacing,
      base
    });
    if (typeof directionValues === 'object') {
      Object.keys(directionValues).forEach((breakpoint, index, breakpoints) => {
        const directionValue = directionValues[breakpoint];
        if (!directionValue) {
          const previousDirectionValue = index > 0 ? directionValues[breakpoints[index - 1]] : 'column';
          directionValues[breakpoint] = previousDirectionValue;
        }
      });
    }
    const styleFromPropValue = (propValue, breakpoint) => {
      if (ownerState.useFlexGap) {
        return {
          gap: (0,spacing/* getValue */._W)(transformer, propValue)
        };
      }
      return {
        // The useFlexGap={false} implement relies on each child to give up control of the margin.
        // We need to reset the margin to avoid double spacing.
        '& > :not(style):not(style)': {
          margin: 0
        },
        '& > :not(style) ~ :not(style)': {
          [`margin${getSideFromDirection(breakpoint ? directionValues[breakpoint] : ownerState.direction)}`]: (0,spacing/* getValue */._W)(transformer, propValue)
        }
      };
    };
    styles = (0,deepmerge/* default */.A)(styles, (0,breakpoints/* handleBreakpoints */.NI)({
      theme
    }, spacingValues, styleFromPropValue));
  }
  styles = (0,breakpoints/* mergeBreakpointsInOrder */.iZ)(theme.breakpoints, styles);
  return styles;
};
function createStack(options = {}) {
  const {
    // This will allow adding custom styled fn (for example for custom sx style function)
    createStyledComponent = defaultCreateStyledComponent,
    useThemeProps = useThemePropsDefault,
    componentName = 'MuiStack'
  } = options;
  const useUtilityClasses = () => {
    const slots = {
      root: ['root']
    };
    return (0,composeClasses/* default */.A)(slots, slot => (0,generateUtilityClass/* default */.Ay)(componentName, slot), {});
  };
  const StackRoot = createStyledComponent(style);
  const Stack = /*#__PURE__*/react.forwardRef(function Grid(inProps, ref) {
    const themeProps = useThemeProps(inProps);
    const props = (0,extendSxProp/* default */.A)(themeProps); // `color` type conflicts with html color attribute.
    const {
      component = 'div',
      direction = 'column',
      spacing = 0,
      divider,
      children,
      className,
      useFlexGap = false,
      ...other
    } = props;
    const ownerState = {
      direction,
      spacing,
      useFlexGap
    };
    const classes = useUtilityClasses();
    return /*#__PURE__*/(0,jsx_runtime.jsx)(StackRoot, {
      as: component,
      ownerState: ownerState,
      ref: ref,
      className: (0,clsx/* default */.A)(classes.root, className),
      ...other,
      children: divider ? joinChildren(children, divider) : children
    });
  });
   false ? 0 : void 0;
  return Stack;
}
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/styles/styled.js
var styles_styled = __webpack_require__(64624);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/DefaultPropsProvider/DefaultPropsProvider.js
var DefaultPropsProvider = __webpack_require__(79209);
;// ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/Stack/Stack.js
/* __next_internal_client_entry_do_not_use__ default auto */ 



const Stack = createStack({
    createStyledComponent: (0,styles_styled/* default */.Ay)('div', {
        name: 'MuiStack',
        slot: 'Root',
        overridesResolver: (props, styles)=>styles.root
    }),
    useThemeProps: (inProps)=>(0,DefaultPropsProvider/* useDefaultProps */.b)({
            props: inProps,
            name: 'MuiStack'
        })
});
 false ? 0 : void 0;
/* harmony default export */ const Stack_Stack = (Stack);


/***/ }),

/***/ 14069:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HQ: () => (/* binding */ getSocketConnectStatusEnumI18n),
/* harmony export */   NC: () => (/* binding */ isValidWebSocketURL),
/* harmony export */   du: () => (/* binding */ SocketConnectStatusEnum)
/* harmony export */ });
/* harmony import */ var validator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(40018);
/* harmony import */ var validator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(validator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(27950);


function isValidWebSocketURL(url) {
    if (!url) return false;
    return validator__WEBPACK_IMPORTED_MODULE_0___default().isURL(url, {
        protocols: [
            'ws',
            'wss'
        ],
        require_protocol: true
    });
}
var SocketConnectStatusEnum = /*#__PURE__*/ function(SocketConnectStatusEnum) {
    SocketConnectStatusEnum["connecting"] = "connecting";
    SocketConnectStatusEnum["connected"] = "connected";
    SocketConnectStatusEnum["disconnecting"] = "disconnecting";
    SocketConnectStatusEnum["disconnected"] = "disconnected";
    SocketConnectStatusEnum["waitRetry"] = "waitRetry";
    return SocketConnectStatusEnum;
}({});
async function getSocketConnectStatusEnumI18n(status) {
    return await (0,_i18n__WEBPACK_IMPORTED_MODULE_1__/* .loadI18nValue */ .y)('fanfanlo/utils/socket/content', "status.".concat(status));
}


/***/ }),

/***/ 14895:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ MarketsDevSettingsPage),
  getContacts: () => (/* binding */ getContacts)
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/react@19.1.0/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(94513);
// EXTERNAL MODULE: ../../libs/app/ui/src/components/app/AppShell.tsx + 2 modules
var AppShell = __webpack_require__(20939);
;// ../../libs/fanfanlo/src/react/ContextWrapper.tsx
/* __next_internal_client_entry_do_not_use__ ContextWrapper auto */ 
function ContextWrapper(param) {
    let { contextValue, ContextProvider, children } = param;
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(ContextProvider, {
        value: contextValue,
        children: children
    });
}

;// ../../libs/app/ui/src/components/app/AppPageDataWrapperShell.tsx



//回头想想AppShell里的s要怎么用
// createTypedContext方法返回的context没想好怎么样跟s结合使用。
function AppPageDataWrapperShell(param) {
    let { children, contextValue, ContextProvider } = param;
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(AppShell/* AppShell */.G, {
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(ContextWrapper, {
            contextValue: contextValue,
            ContextProvider: ContextProvider,
            children: children
        })
    });
}

// EXTERNAL MODULE: ../../libs/app/ui/src/components/appbar/AppBar.tsx + 3 modules
var AppBar = __webpack_require__(97972);
// EXTERNAL MODULE: ../../libs/droid/android/src/android/AutoWebViewJs.ts + 1 modules
var AutoWebViewJs = __webpack_require__(45921);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react-i18next@15.6.0_i18next@24.2.3_typescript@5.7.3__react-dom@19.1.0_react@19.1.0__react@19.1.0_typescript@5.7.3/node_modules/react-i18next/dist/es/index.js + 15 modules
var es = __webpack_require__(50279);
// EXTERNAL MODULE: ../../libs/fanfanlo/src/dispatcher/Dispatcher.ts
var Dispatcher = __webpack_require__(82727);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/Box/Box.js + 2 modules
var Box = __webpack_require__(6445);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/Button/Button.js + 3 modules
var Button = __webpack_require__(28669);
// EXTERNAL MODULE: ../../libs/fanfanlo/src/utils/socket/socket-utils.ts
var socket_utils = __webpack_require__(14069);
// EXTERNAL MODULE: ../../libs/fanfanlo/src/watcher/useProxyWatch.ts
var useProxyWatch = __webpack_require__(45007);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/TextField/TextField.js + 1 modules
var TextField = __webpack_require__(38771);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/FormControlLabel/FormControlLabel.js + 1 modules
var FormControlLabel = __webpack_require__(30281);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/Checkbox/Checkbox.js + 4 modules
var Checkbox = __webpack_require__(93916);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/Grid2/Grid2.js + 4 modules
var Grid2 = __webpack_require__(95771);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/Stack/Stack.js + 1 modules
var Stack = __webpack_require__(9220);
// EXTERNAL MODULE: ./src/markets/market-dev-socket.ts
var market_dev_socket = __webpack_require__(79696);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react@19.1.0/node_modules/react/index.js
var react = __webpack_require__(94285);
// EXTERNAL MODULE: ../../libs/fanfanlo/src/react/createTypedContext.ts
var createTypedContext = __webpack_require__(3131);
;// ./src/components/page/markets-dev-settings/data/context.tsx

const [MarketsDevSettingsContextProvider, useMarketsDevSettingsContext] = (0,createTypedContext/* createTypedContext */.W)();

;// ./src/components/page/markets-dev-settings/content/DevSettings.tsx
/* __next_internal_client_entry_do_not_use__ DevSettings auto */ 





function URL() {
    const { t } = (0,es/* useTranslation */.Bd)('homepage/components/page/markets-dev-settings/content/content');
    const pageData = useMarketsDevSettingsContext();
    const [value, _setValue] = (0,react.useState)(pageData.socketSettingData.url);
    const [isWrong, setIsWrong] = (0,react.useState)(!(0,socket_utils/* isValidWebSocketURL */.NC)(value));
    function setValue(v) {
        _setValue(v);
        pageData.socketSettingData.url = v;
        if (!(0,socket_utils/* isValidWebSocketURL */.NC)(v)) {
            setIsWrong(true);
        } else {
            setIsWrong(false);
        }
    }
    const s = t("DevSettings.socket.url.helperText", {
        0: "socket",
        1: "ws",
        2: "wss",
        3: "url"
    });
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.A, {
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(TextField/* default */.A, {
            fullWidth: true,
            error: isWrong,
            label: t("DevSettings.socket.url.name"),
            value: value,
            placeholder: "ws://192.168.1.2:7001",
            helperText: isWrong ? s : "",
            variant: "standard",
            onChange: (e)=>setValue(e.target.value)
        })
    });
}
function ConnectButton2() {
    const pageData = useMarketsDevSettingsContext();
    const [status] = (0,useProxyWatch/* useProxyWatch */.x)(market_dev_socket/* marketsDevSocket */.O.socketConnectInfo, 'status', market_dev_socket/* marketsDevSocket */.O.socketConnectInfo.status);
    const [buttonName, setButtonName] = (0,react.useState)('');
    const { t } = (0,es/* useTranslation */.Bd)('homepage/components/page/markets-dev-settings/content/content');
    const [url] = (0,useProxyWatch/* useProxyWatch */.x)(pageData.socketSettingData, 'url', pageData.socketSettingData.url);
    const [enabled, setEnabled] = (0,react.useState)(false);
    (0,react.useEffect)(()=>{
        setEnabled((status === socket_utils/* SocketConnectStatusEnum */.du.disconnected || status === socket_utils/* SocketConnectStatusEnum */.du.connected) && (0,socket_utils/* isValidWebSocketURL */.NC)(url));
    }, [
        status,
        url
    ]);
    (0,react.useEffect)(()=>{
        async function updateButtonName() {
            const status = market_dev_socket/* marketsDevSocket */.O.socketConnectInfo.status;
            let name = buttonName;
            switch(status){
                case socket_utils/* SocketConnectStatusEnum */.du.connecting:
                    name = await (0,socket_utils/* getSocketConnectStatusEnumI18n */.HQ)(socket_utils/* SocketConnectStatusEnum */.du.connecting);
                    break;
                case socket_utils/* SocketConnectStatusEnum */.du.connected:
                    name = t("DevSettings.connectButton.disconnect");
                    break;
                case socket_utils/* SocketConnectStatusEnum */.du.disconnecting:
                    name = await (0,socket_utils/* getSocketConnectStatusEnumI18n */.HQ)(socket_utils/* SocketConnectStatusEnum */.du.disconnecting);
                    break;
                case socket_utils/* SocketConnectStatusEnum */.du.disconnected:
                    name = t("DevSettings.connectButton.connect");
                    break;
            }
            if (market_dev_socket/* marketsDevSocket */.O.socketConnectInfo.status !== status) {
                return updateButtonName();
            }
            if (name !== buttonName) {
                setButtonName(name);
            }
        }
        updateButtonName();
    }, [
        status
    ]);
    function onClick() {
        if (status === socket_utils/* SocketConnectStatusEnum */.du.disconnected) {
            market_dev_socket/* marketsDevSocket */.O.connect();
        } else {
            market_dev_socket/* marketsDevSocket */.O.disconnect();
        }
    }
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(Button/* default */.A, {
        variant: "contained",
        disabled: !enabled,
        onClick: onClick,
        children: buttonName
    });
}
function KeepConnectCheckbox() {
    const pageData = useMarketsDevSettingsContext();
    var _pageData_socketSettingData_keepConnect;
    const [keepConnect] = (0,useProxyWatch/* useProxyWatch */.x)(pageData.socketSettingData, 'keepConnect', (_pageData_socketSettingData_keepConnect = pageData.socketSettingData.keepConnect) !== null && _pageData_socketSettingData_keepConnect !== void 0 ? _pageData_socketSettingData_keepConnect : false);
    const { t } = (0,es/* useTranslation */.Bd)('homepage/components/page/markets-dev-settings/content/content');
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(FormControlLabel/* default */.A, {
        control: /*#__PURE__*/ (0,jsx_runtime.jsx)(Checkbox/* default */.A, {
            checked: keepConnect,
            onChange: (e)=>pageData.socketSettingData.keepConnect = e.target.checked
        }),
        label: /*#__PURE__*/ (0,jsx_runtime.jsxs)("span", {
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                    children: t("DevSettings.socket.keepConnect.name")
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                    style: {
                        fontSize: '0.8rem',
                        color: 'gray'
                    },
                    children: t("DevSettings.socket.keepConnect.helperText")
                })
            ]
        })
    });
}
function CheckboxButtonGroup() {
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(Grid2/* default */.A, {
        container: true,
        direction: "row",
        spacing: 2,
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Grid2/* default */.A, {
                size: "grow",
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(KeepConnectCheckbox, {})
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Grid2/* default */.A, {
                size: "auto",
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(ConnectButton2, {})
            })
        ]
    });
}
function DevSettings() {
    const pageData = useMarketsDevSettingsContext();
    (0,react.useEffect)(()=>{
        if (pageData.socketSettingData.keepConnect) {
            market_dev_socket/* marketsDevSocket */.O.connect();
        }
    }, []);
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(jsx_runtime.Fragment, {
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.A, {
            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(Stack/* default */.A, {
                direction: "column",
                spacing: 2,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(URL, {}),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(CheckboxButtonGroup, {})
                ]
            })
        })
    });
}

// EXTERNAL MODULE: ../../libs/fanfanlo/src/iframe/IFrameReactContainer.tsx + 1 modules
var IFrameReactContainer = __webpack_require__(6955);
// EXTERNAL MODULE: ../../libs/fanfanlo/src/watcher/useWatchUpdates.tsx
var useWatchUpdates = __webpack_require__(30771);
// EXTERNAL MODULE: ./src/markets/market-html-utils.ts
var market_html_utils = __webpack_require__(40682);
// EXTERNAL MODULE: ./src/markets/markets-script-dev-lib.ts
var markets_script_dev_lib = __webpack_require__(5351);
;// ./src/components/page/markets-dev-settings/content/Scripts.tsx





function createHtml(script) {
    // return marketHtmlUtils.createHtml(script);
    return '<html>\n    <head>\n        <title>script</title>\n    </head>\n    <body>\n        <div id="app"></div>\n        <script>'.concat(script, "</script>\n    </body>\n</html>");
}
function Script(param) {
    let { resource } = param;
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.A, {
        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(Stack/* default */.A, {
            direction: "column",
            spacing: 2,
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                    children: resource.client.path
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)(IFrameReactContainer/* IFrameReactContainer */.T, {
                    content: resource.content,
                    htmlBuilder: market_html_utils/* marketHtmlUtils */.P.createHtml
                })
            ]
        })
    });
}
function Scripts() {
    var _marketsDevScriptLib_marketDevLibData_allMarketLibData, _marketsDevScriptLib_marketDevLibData_allMarketLibData_resources, _marketsDevScriptLib_marketDevLibData_allMarketLibData1;
    const [resources] = (0,useWatchUpdates/* useProxyWatchUpdates */.d)(markets_script_dev_lib/* marketsDevScriptLib */.R.marketDevLibData, "allMarketLibData.resources", ((_marketsDevScriptLib_marketDevLibData_allMarketLibData = markets_script_dev_lib/* marketsDevScriptLib */.R.marketDevLibData.allMarketLibData) === null || _marketsDevScriptLib_marketDevLibData_allMarketLibData === void 0 ? void 0 : _marketsDevScriptLib_marketDevLibData_allMarketLibData.resources) || []);
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.A, {
        children: (_marketsDevScriptLib_marketDevLibData_allMarketLibData1 = markets_script_dev_lib/* marketsDevScriptLib */.R.marketDevLibData.allMarketLibData) === null || _marketsDevScriptLib_marketDevLibData_allMarketLibData1 === void 0 ? void 0 : (_marketsDevScriptLib_marketDevLibData_allMarketLibData_resources = _marketsDevScriptLib_marketDevLibData_allMarketLibData1.resources) === null || _marketsDevScriptLib_marketDevLibData_allMarketLibData_resources === void 0 ? void 0 : _marketsDevScriptLib_marketDevLibData_allMarketLibData_resources.map((resource, index)=>{
            return /*#__PURE__*/ (0,jsx_runtime.jsx)(Script, {
                resource: resource
            }, resource.content);
        })
    });
}

;// ./src/components/page/markets-dev-settings/content/MarketsDevSettingsContent.tsx




function MarketsDevSettingsContent() {
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(jsx_runtime.Fragment, {
        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.A, {
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsx)(DevSettings, {}),
                /*#__PURE__*/ (0,jsx_runtime.jsx)(Scripts, {}),
                /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.A, {
                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)("button", {
                        children: "hello"
                    })
                })
            ]
        })
    });
}

// EXTERNAL MODULE: ../../libs/fanfanlo/src/watcher/proxyWatch.ts
var proxyWatch = __webpack_require__(88518);
// EXTERNAL MODULE: ./src/markets/market-dev-socket-setting-data.ts
var market_dev_socket_setting_data = __webpack_require__(29272);
;// ./src/components/page/markets-dev-settings/data/data.intf.ts


async function createDefPageData() {
    return {
        socketSettingData: await (0,market_dev_socket_setting_data/* getMarketDevSocketSettingData */.D)()
    };
}
let dataImpl;
async function marketsDevSettingsLoadDefData() {
    if (dataImpl) {
        return dataImpl;
    }
    let data = await createDefPageData();
    dataImpl = (0,proxyWatch/* toProxy */.I$)(data);
    return dataImpl;
}

;// ./src/pages/markets-dev-settings/index.tsx










function MarketsDevSettingsPage() {
    const { t } = (0,es/* useTranslation */.Bd)('homepage/pages/markets-dev-settings/content');
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(react.Suspense, {
        fallback: /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
            children: t("content.loadPageData")
        }),
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Content, {
            pageData: marketsDevSettingsLoadDefData(),
            libInit: markets_script_dev_lib/* marketsDevScriptLib */.R.init()
        })
    });
}
function Content(param) {
    let { pageData, libInit } = param;
    const { t } = (0,es/* useTranslation */.Bd)('homepage/pages/markets-dev-settings/content');
    const data = (0,react.use)(pageData);
    const dispatcher = new Dispatcher/* Dispatcher */.m();
    (0,react.use)(libInit);
    async function onClick() {
        const res = await getContacts();
        console.log('on click res=', res);
    }
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(AppPageDataWrapperShell, {
        contextValue: data,
        ContextProvider: MarketsDevSettingsContextProvider,
        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(AppBar/* AppbarContainer */.W, {
            appbarProps: {
                title: t("content.title"),
                back: true,
                backDispatcher: dispatcher
            },
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.A, {
                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Button/* default */.A, {
                        onClick: onClick,
                        children: "script"
                    })
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)(MarketsDevSettingsContent, {})
            ]
        })
    });
}
function temp(id) {
    const x = '\n\ncontactsPermission.permission = "android.permission.READ_CONTACTS";\n    var permissions = [contactsPermission];\n    var result = {\n      permissions: permissions,\n      permissionDenied: [],\n      permissionsSuccessed: [],\n      error: null,\n      data: null,\n      warning: null,\n      info: null,\n      isSuccess:false,\n    };\n\n    com.fanfanlo.lib.permissions.PermissionActivity.requestPermissions(context, permissions, true, "SOS-读取联系人", onCheckPermissionsCallback);\n    \n    function missionFailed(){\n      webViewJs.callJsEvent("'.concat(id, '-missionFailed", result, ').concat(id, ');\n      missionComplete();\n    }\n    \n    function missionSuccess(){\n      webViewJs.callJsEvent("').concat(id, '-missionSuccess", result, ').concat(id, ');\n      missionComplete();\n    }\n\n    function missionComplete(){\n      webViewJs.callJsEvent("').concat(id, '-missionComplete", result, ').concat(id, ');\n    }\n    function onCheckPermissionsCallback(resultMap){\n      for(var i = 0; i < permissions.size(); i++){\n        var permissionInfo = permissions.get(i);\n        var permission = permissionInfo.permission;\n        if((permission in resultMap && resultMap[permission] == true) || permissionInfo.required == false)continue;\n        result.error = {\n          message:"permission denied",\n          extra:permissionInfo\n        }\n        missionFailed();\n        return;\n      }\n      runCodeAfterPermissionsAccess();\n    }\n    \n    function runCodeAfterPermissionsAccess(){\n      result.isSuccess = true;\n      missionSuccess();\n    }\n    `{isOk:"true"}`\n');
}
function createReadContactsScript(id) {
    return '\n    var Manifest = Packages.android.Manifest;\n    var context = com.fanfanlo.lib.mc.LibMainModel.instance.application;\n    var contactsPermission = new Packages.com.fanfanlo.lib.permissions.PermissionRequest("android.permission.READ_CONTACTS", true, null, null, null);\n// contactsPermission.permission = "android.permission.READ_CONTACTS";\n\n    var permissions = [contactsPermission];\n    var result = {\n      permissions: permissions,\n      permissionDenied: [],\n      permissionsSuccessed: [],\n      error: null,\n      data: null,\n      warning: null,\n      info: null,\n      isSuccess:false,\n    };\n    \n    com.fanfanlo.lib.permissions.PermissionActivity.requestPermissions(context, permissions, true, "SOS-读取联系人", onCheckPermissionsCallback);\n\n    function missionFailed(){\n        webViewJs.callJsEvent("'.concat(id, '-missionFailed", result, "').concat(id, '");\n        missionComplete();\n      }\n      \n      function missionSuccess(){\n        webViewJs.callJsEvent("').concat(id, '-missionSuccess", result, "').concat(id, '");\n        missionComplete();\n      }\n  \n      function missionComplete(){\n        webViewJs.callJsEvent("').concat(id, '-missionComplete", result, "').concat(id, '");\n      }\n      function onCheckPermissionsCallback(resultMap){\n        for(var i = 0; i < permissions.length; i++){\n          var permissionInfo = permissions[i];\n          var permission = permissionInfo.permission;\n          if(resultMap.get(permission) == true)continue;\n          if(permissionInfo.required == false)continue;\n          result.error = {\n            message:"permission denied",\n            extra:{\n                "resultMap":resultMap,\n                "permission":permission,\n                permissionInfo:permissionInfo\n            }\n          }\n          missionFailed();\n          return;\n        }\n        runCodeAfterPermissionsAccess();\n      }\n      \n      function runCodeAfterPermissionsAccess(){\n        result.isSuccess = true;\n        readContacts();\n        missionSuccess();\n      }\n\n      function readContacts(){\n        var contentResolver = com.fanfanlo.lib.mc.LibMainModel.instance.application.getContentResolver();\n        var ContactsContract = Packages.android.provider.ContactsContract;\n        var cursor = contentResolver.query(\n        ContactsContract.Contacts.CONTENT_URI,\n        null,\n        null,\n        null,\n        null\n        );\n\n        var contactList = [];\n        if (cursor !== null && cursor.moveToFirst()) {\n        var nameIndex = cursor.getColumnIndex(ContactsContract.Contacts.DISPLAY_NAME);\n        var idIndex = cursor.getColumnIndex(ContactsContract.Contacts._ID);\n\n        do {\n            var contactName = cursor.getString(nameIndex);\n            var contactId = cursor.getString(idIndex);\n\n            // 查询电话号码\n            let phone = null;\n            var hasPhoneNumberIndex = cursor.getColumnIndex(ContactsContract.Contacts.HAS_PHONE_NUMBER);\n            var hasPhoneNumber = cursor.getInt(hasPhoneNumberIndex);\n            if (hasPhoneNumber > 0) {\n            var phoneCursor = contentResolver.query(\n                ContactsContract.CommonDataKinds.Phone.CONTENT_URI,\n                null,\n                ContactsContract.CommonDataKinds.Phone.CONTACT_ID + " = ?",\n                [contactId],\n                null\n            );\n\n            if (phoneCursor !== null && phoneCursor.moveToFirst()) {\n                var phoneIndex = phoneCursor.getColumnIndex(ContactsContract.CommonDataKinds.Phone.NUMBER);\n                phone = phoneCursor.getString(phoneIndex);\n                phoneCursor.close();\n            }\n            }\n\n            contactList.push({\n            name: contactName,\n            phone: phone,\n            });\n\n        } while (cursor.moveToNext());\n\n        cursor.close();\n        }\n\n        result.data = {contactList};\n        var json = com.fanfanlo.lib.utils.JsonUtil.gson2.toJson(result);\n        console.log(json);\n      }\n    ');
}
async function getContacts() {
    return new Promise((resolve, reject)=>{
        const id = '@fanfanlo/scripts/script001/get-contacts';
        const conf = {
            bridgeId: id,
            scriptId: id,
            forceStopTime: 1000 * 60 * 20,
            onlyRunSingle: true,
            injects: [
                "webViewJs",
                "console"
            ],
            script: createReadContactsScript(id)
        };
        function onMessage(event) {
            console.log('llllllllllllllllllllllllllaaaddd', event);
            switch(event.type){
                case "@fanfanlo/scripts/script001/get-contacts-missionSuccess":
                    resolve(event.data);
                    break;
                case "@fanfanlo/scripts/script001/get-contacts-missionSuccess":
                    reject(event.data);
                    break;
                case "@fanfanlo/scripts/script001/get-contacts-missionComplete":
                    window.removeEventListener("message", onMessage);
                    break;
            }
        }
        window.addEventListener('message', onMessage);
        const res = AutoWebViewJs/* autoWebViewJs */.yx.callScriptByConf(conf);
        console.log('getContacts_fn res=', res);
    });
}


/***/ }),

/***/ 15899:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Dl: () => (/* binding */ IMarketDevConnectEventType),
/* harmony export */   GC: () => (/* binding */ IMarketDevServerEventType),
/* harmony export */   um: () => (/* binding */ WatchResourceType)
/* harmony export */ });
/* unused harmony exports ScriptType, IMarketDevClientEmitEventType */
var ScriptType = /*#__PURE__*/ function(ScriptType) {
    // 只有一个脚本执行文件，它只在脚本列表里显示。
    // 如果要修改或者配置参数，它可以嵌入到自己的代码里
    // 或者提供新的页面路径，用router的方式打开
    // 例如router.go({url:'/script-setting', script:'function(){//code is here}', pagePath:'/all-script-setting/#your-namespace/script/script001'})
    // all-script-setting所有第三方统一页面
    // your-namespace 第三方自己的命名空间
    // url 第三方自己的js文件url，它和script二选一，优先script。
    // script 第三方自己纯代码的脚本
    // url可以设置为实时更新版本，script可以作为stable版本使用。
    // script001 第三方自己的脚本名称
    // pagePath可以挂载到你指定的路径下
    ScriptType["Script"] = "script";
    ScriptType["Market"] = "market";
    return ScriptType;
}({});
var WatchResourceType = /*#__PURE__*/ function(WatchResourceType) {
    // 这是一个js文件，加载后直接套在iframe里用即可
    WatchResourceType["Js"] = "js";
    // 这是一个html文件，直接当html加载到iframe里即可.
    WatchResourceType["Html"] = "html";
    return WatchResourceType;
}({});
var IMarketDevConnectEventType = /*#__PURE__*/ function(IMarketDevConnectEventType) {
    IMarketDevConnectEventType["getAllScripts"] = "getAllScripts";
    return IMarketDevConnectEventType;
}({});
// client用socket向server发送的消息，也就是安卓端或者是安卓端的网页向server发送的消息
var IMarketDevClientEmitEventType = /*#__PURE__*/ function(IMarketDevClientEmitEventType) {
    IMarketDevClientEmitEventType["init"] = "init";
    return IMarketDevClientEmitEventType;
}({});
// server用socket向安卓端发送的消息（本地调试也可以认为是向安卓的网页发送消息）
var IMarketDevServerEventType = /*#__PURE__*/ function(IMarketDevServerEventType) {
    IMarketDevServerEventType["update"] = "update";
    return IMarketDevServerEventType;
}({});


/***/ }),

/***/ 29272:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   D: () => (/* binding */ getMarketDevSocketSettingData)
/* harmony export */ });
/* harmony import */ var _fanfanlo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4887);

async function createDefSocketSettingData() {
    const data = {
        keepConnect: false,
        url: ""
    };
    const res = await _fanfanlo__WEBPACK_IMPORTED_MODULE_0__/* .storeUtils */ .P.getNamespaceStoreWithData('market-dev-socket-setting', {
        defData: data
    });
    return res.data;
}
async function getMarketDevSocketSettingData() {
    return await createDefSocketSettingData();
}


/***/ }),

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

/***/ 73160:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   n_: () => (/* binding */ K)
/* harmony export */ });
/* unused harmony exports initializeChildListener, updateParentScrollOnResize */
const p = () => typeof window < "u", E = () => window.self !== window.top, b = (e) => e instanceof HTMLIFrameElement, M = (e) => {
  window.document.readyState === "complete" ? e() : window.addEventListener("load", e);
}, T = (e, t) => {
  t(), e.addEventListener("load", t);
}, C = (e, t) => {
  var o, i;
  const n = ((o = e.contentWindow) == null ? void 0 : o.document.readyState) === "complete";
  return e.src !== "about:blank" && ((i = e.contentWindow) == null ? void 0 : i.location.href) !== "about:blank" && n ? t() : e.addEventListener("load", t);
}, B = () => ({ offsetSize: 0, checkOrigin: !0, enableLegacyLibSupport: !1 }), k = (e) => {
  try {
    return new URL(e.src).origin === window.location.origin;
  } catch {
    return !1;
  }
}, D = (e) => {
  try {
    const t = new URL(e.src).origin;
    if (t !== "about:blank")
      return t;
  } catch {
  }
  return null;
}, W = (e) => (Object.keys(e).forEach((t) => e[t] === void 0 && delete e[t]), e), L = (e) => {
  const { height: t, width: n } = e.getBoundingClientRect();
  return { height: Math.ceil(t), width: Math.ceil(n) };
}, g = (e, t) => e ? t ? e.querySelector(t) : e.documentElement : null, I = (e, t) => {
  e && (t.bodyPadding && (e.body.style.padding = t.bodyPadding), t.bodyMargin && (e.body.style.margin = t.bodyMargin));
}, h = (e) => e <= 100 ? 100 : e <= 120 ? 1e3 : 1e4, A = () => "[iFrameSizer]ID:0:false:false:32:true:true::auto:::0:false:child:auto:true:::true:::false";
function H(e) {
  if (typeof e.data != "string" || !e.data.startsWith("[iFrameSizer]") || !e.data.endsWith("mutationObserver") && !e.data.endsWith("resizeObserver"))
    return null;
  const [t, n] = e.data.split(":"), r = +n;
  return r > 0 ? r : null;
}
const z = q();
let f = [];
const K = (e, t) => {
  if (!p())
    return [];
  const n = { ...B(), ...W(e ?? {}) }, r = P(t), o = x(n, r);
  return r.map((i) => {
    const s = {
      iframe: i,
      settings: n,
      interactionState: { isHovered: !1 },
      initContext: { isInitialized: !1, retryAttempts: 0 }
    }, a = F(s, o);
    return f.push(s), {
      unsubscribe: () => {
        a(), f = f.filter((d) => d.iframe !== i);
      }
    };
  });
};
function P(e) {
  return typeof e == "string" ? Array.from(document.querySelectorAll(e)).filter(b) : e ? b(e) ? [e] : [] : Array.from(document.getElementsByTagName("iframe"));
}
function x(e, t) {
  if (Array.isArray(e.checkOrigin))
    return e.checkOrigin;
  if (!e.checkOrigin)
    return [];
  const n = [];
  for (const r of t) {
    const o = D(r);
    o && n.push(o);
  }
  return n;
}
function F(e, t) {
  const n = k(e.iframe) ? U(e) : N(e, t), r = $(e);
  return () => {
    n(), r();
  };
}
function N(e, t) {
  const {
    iframe: n,
    initContext: r,
    settings: { checkOrigin: o, enableLegacyLibSupport: i, targetElementSelector: s, bodyPadding: a, bodyMargin: d }
  } = e, u = (c) => {
    var y;
    const S = !o || t.includes(c.origin);
    if (!(!(n.contentWindow === c.source) || !S)) {
      if (((y = c.data) == null ? void 0 : y.type) === "iframe-resized") {
        const { height: l } = c.data;
        l && m({ newHeight: l, registeredElement: e });
        return;
      }
      if (i) {
        const l = H(c);
        l !== null && m({ newHeight: l, registeredElement: e });
        return;
      }
    }
  };
  window.addEventListener("message", u);
  const R = i ? A() : { type: "iframe-child-init", targetElementSelector: s, bodyPadding: a, bodyMargin: d }, w = () => {
    T(n, () => {
      var c;
      return (c = n.contentWindow) == null ? void 0 : c.postMessage(R, "*");
    }), r.retryAttempts++, r.retryTimeoutId = window.setTimeout(w, h(r.retryAttempts));
  };
  return w(), () => window.removeEventListener("message", u);
}
function U(e) {
  const { iframe: t, settings: n } = e, { targetElementSelector: r } = n;
  let o = 0;
  const i = () => {
    const s = g(t.contentDocument, r);
    if (!t.contentDocument || !s)
      return o++, setTimeout(i, h(o));
    I(t.contentDocument, n), z().observe(s);
  };
  return C(t, i), () => {
    const s = g(t.contentDocument, r);
    s && z().unobserve(s), t.removeEventListener("load", i);
  };
}
function $({ iframe: e, interactionState: t }) {
  const n = () => {
    t.isHovered = !0;
  }, r = () => {
    t.isHovered = !1;
  };
  return e.addEventListener("mouseenter", n), e.addEventListener("mouseleave", r), () => {
    e.removeEventListener("mouseenter", n), e.removeEventListener("mouseleave", r);
  };
}
function q() {
  let e = null;
  return () => {
    if (!e) {
      const t = ({ target: n }) => {
        const r = f.find(({ iframe: d }) => d.contentDocument === n.ownerDocument);
        if (!r)
          return;
        const { iframe: o, settings: i } = r, s = g(o.contentDocument, i.targetElementSelector);
        if (!s)
          return;
        const { height: a } = L(s);
        a && m({ newHeight: a, registeredElement: r });
      };
      e = new ResizeObserver((n) => n.forEach(t));
    }
    return e;
  };
}
function m({ registeredElement: e, newHeight: t }) {
  var u;
  const { iframe: n, settings: r, interactionState: o, initContext: i } = e;
  if (i.isInitialized || (i.isInitialized = !0, clearTimeout(i.retryTimeoutId)), ((u = r.onBeforeIframeResize) == null ? void 0 : u.call(r, { iframe: n, settings: { ...r }, observedHeight: t })) === !1)
    return;
  const s = n.getBoundingClientRect(), a = t + r.offsetSize;
  if (n.style.height = `${a}px`, !r.onIframeResize)
    return;
  const d = {
    iframe: n,
    settings: { ...r },
    interactionState: { ...o },
    previousRenderState: { rect: s },
    nextRenderState: { rect: n.getBoundingClientRect() }
  };
  r.onIframeResize(d);
}
const V = G();
let v = !1;
_();
function _() {
  !p() || !E() || window.addEventListener("message", (e) => {
    var t;
    ((t = e.data) == null ? void 0 : t.type) === "iframe-child-init" && M(() => O(e));
  });
}
function O(e, t = 0) {
  const { targetElementSelector: n, bodyPadding: r, bodyMargin: o } = e.data, i = g(document, n);
  if (v || window.parent !== e.source)
    return;
  if (!i)
    return setTimeout(() => O(e, t + 1), h(t));
  I(document, { bodyMargin: o, bodyPadding: r });
  const s = V();
  s.disconnect(), s.observe(i), v = !0;
}
function G() {
  let e = null;
  return () => (e || (e = new ResizeObserver((t) => {
    if (!t[0].target)
      return;
    const { height: n, width: r } = L(t[0].target), o = {
      type: "iframe-resized",
      width: r,
      height: n
    };
    window.parent.postMessage(o, "*");
  })), e);
}
const Q = ({ previousRenderState: e, nextRenderState: t, iframe: n }) => {
  document.activeElement === n && window.scrollBy(0, t.rect.bottom - e.rect.bottom);
};



/***/ }),

/***/ 75244:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {


    (window.__NEXT_P = window.__NEXT_P || []).push([
      "/markets-dev-settings",
      function () {
        return __webpack_require__(14895);
      }
    ]);
    if(false) {}
  

/***/ }),

/***/ 79696:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   O: () => (/* binding */ marketsDevSocket)
/* harmony export */ });
/* unused harmony export socketConnectInfo */
/* harmony import */ var _fanfanlo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(82727);
/* harmony import */ var _fanfanlo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(88518);
/* harmony import */ var _fanfanlo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(14069);
/* harmony import */ var _market_lib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(15899);
/* harmony import */ var _market_dev_socket_setting_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(29272);



const dispatcher = new _fanfanlo__WEBPACK_IMPORTED_MODULE_0__/* .Dispatcher */ .m();
const socketConnectInfo = (0,_fanfanlo__WEBPACK_IMPORTED_MODULE_1__/* .toProxy */ .I$)({
    status: _fanfanlo__WEBPACK_IMPORTED_MODULE_2__/* .SocketConnectStatusEnum */ .du.disconnected,
    retryCount: 0
});
let ws;
async function connect() {
    const url = (await (0,_market_dev_socket_setting_data__WEBPACK_IMPORTED_MODULE_3__/* .getMarketDevSocketSettingData */ .D)()).url;
    if (!(0,_fanfanlo__WEBPACK_IMPORTED_MODULE_2__/* .isValidWebSocketURL */ .NC)(url)) {
        return;
    }
    socketConnectInfo.status = _fanfanlo__WEBPACK_IMPORTED_MODULE_2__/* .SocketConnectStatusEnum */ .du.connecting;
    const w = ws = new WebSocket(url);
    w.onopen = ()=>{
        socketConnectInfo.status = _fanfanlo__WEBPACK_IMPORTED_MODULE_2__/* .SocketConnectStatusEnum */ .du.connected;
        toGetAllScripts();
    };
    w.onclose = ()=>{
        console.log('oscket on close', arguments);
        socketConnectInfo.status = _fanfanlo__WEBPACK_IMPORTED_MODULE_2__/* .SocketConnectStatusEnum */ .du.disconnected;
        checkNeedRetry();
    };
    w.onerror = ()=>{
        console.log('socket onerror', arguments);
        socketConnectInfo.status = _fanfanlo__WEBPACK_IMPORTED_MODULE_2__/* .SocketConnectStatusEnum */ .du.disconnected;
        close();
        checkNeedRetry();
    };
    w.onmessage = (e)=>{
        try {
            const event = JSON.parse(e.data);
            console.log('market dev socket onmessage', event.type);
            dispatcher.dispatch(event.type, event.data);
        } catch (e) {
            console.error(e);
        }
    };
    async function toGetAllScripts() {
        const event = {
            type: _market_lib__WEBPACK_IMPORTED_MODULE_4__/* .IMarketDevConnectEventType */ .Dl.getAllScripts
        };
        w.send(JSON.stringify(event));
    }
}
function close() {
    if (!ws) return;
    ws.close();
    ws = undefined;
}
async function checkNeedRetry() {
    const settingData = await (0,_market_dev_socket_setting_data__WEBPACK_IMPORTED_MODULE_3__/* .getMarketDevSocketSettingData */ .D)();
    if (!settingData.keepConnect) {
        return;
    }
    socketConnectInfo.retryCount++;
    setTimeout(()=>{
        connect();
    }, 1000 * 5);
}
function disconnect() {
    if (ws) {
        ws.close();
        ws = undefined;
    }
    socketConnectInfo.status = _fanfanlo__WEBPACK_IMPORTED_MODULE_2__/* .SocketConnectStatusEnum */ .du.disconnected;
}
const marketsDevSocket = {
    connect,
    disconnect,
    socketConnectInfo,
    dispatcher
};


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
/******/ __webpack_require__.O(0, [5352,1161,4380,2827,3390,7313,5771,1482,8771,788,18,3716,636,6593,8792], () => (__webpack_exec__(75244)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ _N_E = __webpack_exports__;
/******/ }
]);
//# sourceMappingURL=markets-dev-settings-2d43347233b8c961.js.map