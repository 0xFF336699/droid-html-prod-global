(self["webpackChunk_N_E"] = self["webpackChunk_N_E"] || []).push([[2764],{

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

/***/ 20939:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  G: () => (/* binding */ AppShell)
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/react@19.1.0/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(94513);
// EXTERNAL MODULE: ../../libs/fanfanlo/src/i18n/i18n-init.ts + 1 modules
var i18n_init = __webpack_require__(70506);
// EXTERNAL MODULE: ../../libs/fanfanlo/src/storage/store-utils.ts
var store_utils = __webpack_require__(4887);
// EXTERNAL MODULE: ../../libs/fanfanlo/src/watcher/proxyWatch.ts
var proxyWatch = __webpack_require__(88518);
// EXTERNAL MODULE: ../../libs/fanfanlo/src/watcher/watchUpdates.ts
var watchUpdates = __webpack_require__(4738);
// EXTERNAL MODULE: ../../libs/fanfanlo/src/storage/store-page-context.tsx
var store_page_context = __webpack_require__(35155);
// EXTERNAL MODULE: ../../node_modules/.pnpm/next@15.3.5_@babel+core@7.28.0_babel-plugin-macros@3.1.0_react-dom@19.1.0_react@19.1.0__react@19.1.0_sass@1.89.2/node_modules/next/router.js
var next_router = __webpack_require__(75640);
// EXTERNAL MODULE: ../../node_modules/.pnpm/next@15.3.5_@babel+core@7.28.0_babel-plugin-macros@3.1.0_react-dom@19.1.0_react@19.1.0__react@19.1.0_sass@1.89.2/node_modules/next/config.js
var config = __webpack_require__(87891);
var config_default = /*#__PURE__*/__webpack_require__.n(config);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react@19.1.0/node_modules/react/index.js
var react = __webpack_require__(94285);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react-i18next@15.6.0_i18next@24.2.3_typescript@5.7.3__react-dom@19.1.0_react@19.1.0__react@19.1.0_typescript@5.7.3/node_modules/react-i18next/dist/es/index.js + 15 modules
var es = __webpack_require__(50279);
;// __barrel_optimize__?names=I18nextProvider!=!../../node_modules/.pnpm/react-i18next@15.6.0_i18next@24.2.3_typescript@5.7.3__react-dom@19.1.0_react@19.1.0__react@19.1.0_typescript@5.7.3/node_modules/react-i18next/dist/es/index.js


// EXTERNAL MODULE: ../../libs/fanfanlo/src/remote/request.ts
var request = __webpack_require__(34708);
// EXTERNAL MODULE: ../../libs/app/model/src/remote/tms.ts
var tms = __webpack_require__(2413);
;// ../../libs/app/model/src/remote/tracking/print.ts


async function trackingPrint(opts) {
    const res = await (0,request/* request */.Em)(tms/* tms */.X.TTracking, tms/* tms */.X.MTrackingPrint, opts.params, opts.gateway, opts.handler);
    return res;
}

;// ../../libs/app/ui/src/components/app/AppShell.tsx
/* __next_internal_client_entry_do_not_use__ AppShell auto */ 






checkReloadPage();
(0,i18n_init/* i18nInit */.tV)();
function checkReloadPage() {
    if (false) {}
    if (config_default()().publicRuntimeConfig.isDevelopment) {
        return;
    }
    if (window.location.href.indexOf('qiniu') == -1) return;
    // 帮我检测url中是否包含_htmlRefreshTime的参数
    // 如果没有，则添加_htmlRefresTime的参数，值为当前时间的毫秒数
    const searchParams = new URL(window.location.href).searchParams;
    const htmlRefreshTime = searchParams.get('_htmlRefreshTime');
    if (!htmlRefreshTime) {
        const newUrl = new URL(window.location.href);
        newUrl.searchParams.set('_htmlRefreshTime', String(Date.now()));
        window.location.href = newUrl.toString();
        return;
    }
    const refreshTime = Number(htmlRefreshTime);
    if (refreshTime + 2 * 60 * 1000 < Date.now()) {
        const newUrl = new URL(window.location.href);
        newUrl.searchParams.set('_htmlRefreshTime', String(Date.now()));
        window.location.href = newUrl.toString();
    }
}
const dynamicKeyMap = new Map();
function AppShell(param) {
    let { children } = param;
    const router = (0,next_router.useRouter)();
    const scrollKey = 'scrollPositionInfo';
    const href = window.location.href.split("#")[0];
    const dynamicKey = "dynamic-".concat(href);
    const [isOpened] = (0,react.useState)(dynamicKeyMap.get(dynamicKey) === true);
    const s = store_utils/* storeUtils */.P.namespace(dynamicKey);
    let o = s.read(dynamicKey);
    if (!o) {
        o = {};
        s.write(dynamicKey, o);
    }
    o = (0,proxyWatch/* toProxy */.I$)(o);
    (0,react.useEffect)(()=>{
        router.beforePopState((state)=>{
            s.clearAll();
            return true;
        });
    });
    (0,react.useEffect)(()=>{
        s.write(dynamicKey, o);
        return (0,watchUpdates/* watchUpdates */.c)(o, ()=>{
            s.write(dynamicKey, o);
        });
    }, []);
    (0,react.useEffect)(()=>{
        trackingPrint({
            params: {
                type: "页面进入",
                title: "页面",
                subtitle: "发送者-AppShell",
                extra: {
                    href: window.location.href
                }
            }
        });
    }, []);
    (0,react.useEffect)(()=>{
        const info = s.read(scrollKey) || {
            x: 0,
            y: 0
        };
        // console.log('app shell scroll info info = ', info)
        if (info.x == 0 && info.y == 0) {
            listenScroll();
        } else {
            window.requestAnimationFrame(()=>{
                if (isOpened) {
                    window.scrollTo(info.x, info.y);
                }
                listenScroll();
            });
        }
        function onScroll(e) {
            // console.log('app shell on scroll', { x: window.scrollX, y: window.scrollY })
            s.write(scrollKey, {
                x: window.scrollX,
                y: window.scrollY
            });
        }
        function listenScroll() {
            window.addEventListener('scroll', onScroll);
        }
        function unsub() {
            window.removeEventListener('scroll', onScroll);
        }
        return unsub;
    });
    (0,react.useEffect)(()=>{
        dynamicKeyMap.set(dynamicKey, true);
    }, []);
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(store_page_context/* StorePageContext */.q, {
        value: s,
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(store_page_context/* StorePageDynamicContext */.p, {
            value: o,
            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(es/* I18nextProvider */.xC, {
                i18n: i18n_init/* i18n */.Ru,
                children: children
            })
        })
    });
}


/***/ }),

/***/ 33472:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {


    (window.__NEXT_P = window.__NEXT_P || []).push([
      "/float-window-edit",
      function () {
        return __webpack_require__(72338);
      }
    ]);
    if(false) {}
  

/***/ }),

/***/ 35155:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   p: () => (/* binding */ StorePageDynamicContext),
/* harmony export */   q: () => (/* binding */ StorePageContext)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(94285);
/* harmony import */ var _store_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4887);


// import { storeUtils } from "./store";
const s = _store_utils__WEBPACK_IMPORTED_MODULE_1__/* .storeUtils */ .P.namespace('store-page-context');
function create() {
    return /*#__PURE__*/ createContext(s);
}
const StorePageContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)(s);
const StorePageDynamicContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)({});


/***/ }),

/***/ 39800:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   IL: () => (/* binding */ createDefaultWindowConf),
/* harmony export */   Sb: () => (/* binding */ createWindowConfCopy),
/* harmony export */   Wl: () => (/* binding */ createDefaultFloatWindowConf),
/* harmony export */   Ww: () => (/* binding */ FloatSidePattern),
/* harmony export */   YC: () => (/* binding */ FloatShowPattern),
/* harmony export */   ZI: () => (/* binding */ WindowType),
/* harmony export */   cM: () => (/* binding */ ContentType),
/* harmony export */   fF: () => (/* binding */ createDefaultSysWindowConf),
/* harmony export */   rn: () => (/* binding */ Gravity),
/* harmony export */   yu: () => (/* binding */ createDefaultDialogWindowConf)
/* harmony export */ });
/* unused harmony exports GravityDisplayNames, DisplayNameToGravity, getGravityDisplayName, getGravityOptions, webViewJsParams, webViewConf, htmlConf, floatConf, floatWindowConf, windowConf, getDefaulWindowConf, createDefaultWebViewJsParams, createDefaultWebViewConf, createDefaultGravityInfo, createDefaultBorderInfo, createDefaultMatchParentInfo, createDefaultHtmlConf, createDefaultFloatConf */
/* harmony import */ var _barrel_optimize_names_ulid_ulid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67131);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(63624);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);


var Gravity = /*#__PURE__*/ function(Gravity) {
    // 水平方向
    Gravity[Gravity["LEFT"] = 3] = "LEFT";
    Gravity[Gravity["RIGHT"] = 5] = "RIGHT";
    Gravity[Gravity["END"] = 8388613] = "END";
    Gravity[Gravity["START"] = 8388608] = "START";
    // 垂直方向
    Gravity[Gravity["TOP"] = 48] = "TOP";
    Gravity[Gravity["BOTTOM"] = 80] = "BOTTOM";
    // 组合方向
    Gravity[Gravity["CENTER"] = 17] = "CENTER";
    Gravity[Gravity["CENTER_HORIZONTAL"] = 1] = "CENTER_HORIZONTAL";
    Gravity[Gravity["CENTER_VERTICAL"] = 16] = "CENTER_VERTICAL";
    // 位置常量
    Gravity[Gravity["NO_GRAVITY"] = 0] = "NO_GRAVITY";
    return Gravity;
}({});
// ============ Gravity 映射 ============
/**
 * Gravity 值的可读名称映射
 * 用于 UI 显示时将整数值转换为可读的中文文本
 */ const GravityDisplayNames = {
    [3]: '左对齐',
    [5]: '右对齐',
    [8388613]: '末端对齐 (RTL)',
    [8388608]: '起始对齐 (RTL)',
    [48]: '上对齐',
    [80]: '下对齐',
    [17]: '居中',
    [1]: '水平居中',
    [16]: '竖直居中',
    [0]: '无对齐'
};
/**
 * 反向映射：显示名称 → Gravity 值
 * 用于从 UI 选择转换回 Gravity 值
 */ const DisplayNameToGravity = Object.entries(GravityDisplayNames).reduce((acc, param)=>{
    let [key, value] = param;
    return {
        ...acc,
        [value]: Number(key)
    };
}, {});
/**
 * 获取 Gravity 的可读显示名称
 * @param gravity Gravity 整数值
 * @returns 可读的中文文本
 */ function getGravityDisplayName(gravity) {
    return GravityDisplayNames[gravity] || "未知 (".concat(gravity, ")");
}
/**
 * 获取所有可用的 Gravity 选项
 * 用于生成 Select 下拉框的选项
 */ function getGravityOptions() {
    return Object.entries(GravityDisplayNames).map((param)=>{
        let [key, value] = param;
        return {
            value: Number(key),
            label: value
        };
    });
}
var FloatShowPattern = /*#__PURE__*/ function(FloatShowPattern) {
    // 仅在当前Activity显示
    FloatShowPattern["CURRENT_ACTIVITY"] = "CURRENT_ACTIVITY";
    // 一直显示
    FloatShowPattern["ALL_TIME"] = "ALL_TIME";
    // 仅前台显示
    FloatShowPattern["FOREGROUND"] = "FOREGROUND";
    return FloatShowPattern;
}({});
var FloatSidePattern = /*#__PURE__*/ function(FloatSidePattern) {
    // 默认不贴边，跟随手指移动
    FloatSidePattern["DEFAULT"] = "DEFAULT";
    // 左、右、上、下四个方向固定（一直吸附在该方向边缘，只能在该方向的边缘移动）
    FloatSidePattern["LEFT"] = "LEFT";
    FloatSidePattern["RIGHT"] = "RIGHT";
    FloatSidePattern["TOP"] = "TOP";
    FloatSidePattern["BOTTOM"] = "BOTTOM";
    // 根据手指到屏幕边缘的距离，自动选择水平方向的贴边、垂直方向的贴边、四方向的贴边
    FloatSidePattern["AUTO_HORIZONTAL"] = "AUTO_HORIZONTAL";
    FloatSidePattern["AUTO_VERTICAL"] = "AUTO_VERTICAL";
    FloatSidePattern["AUTO_SIDE"] = "AUTO_SIDE";
    // 拖拽时跟随手指移动，结束时贴边
    FloatSidePattern["RESULT_LEFT"] = "RESULT_LEFT";
    FloatSidePattern["RESULT_RIGHT"] = "RESULT_RIGHT";
    FloatSidePattern["RESULT_TOP"] = "RESULT_TOP";
    FloatSidePattern["RESULT_BOTTOM"] = "RESULT_BOTTOM";
    FloatSidePattern["RESULT_HORIZONTAL"] = "RESULT_HORIZONTAL";
    FloatSidePattern["RESULT_VERTICAL"] = "RESULT_VERTICAL";
    FloatSidePattern["RESULT_SIDE"] = "RESULT_SIDE";
    return FloatSidePattern;
}({});
// 内容类型枚举
var ContentType = /*#__PURE__*/ function(ContentType) {
    // 使用html
    ContentType["Html"] = "html";
    // 使用安卓的view。但是现在并没提供。
    ContentType["View"] = "view";
    return ContentType;
}({});
// 窗口类型枚举
var WindowType = /*#__PURE__*/ function(WindowType) {
    // 悬浮窗。像小工具、闹钟类的可以使用
    WindowType["Float"] = "float";
    // 系统。系统级别窗口
    WindowType["System"] = "system";
    // 弹窗。一般用于对话框
    WindowType["Dialog"] = "dialog";
    return WindowType;
}({});
const webViewJsParams = {
    fitContentWidth: 0,
    fitContentHeight: 0,
    javaToJsDataString: ""
};
const webViewConf = {
    backgroundColor: 0
};
const htmlConf = {
    url: "",
    webViewJsParams: webViewJsParams,
    webViewConf: webViewConf,
    jsBridgeName: 'android',
    webViewJsName: 'AutoWebViewJs'
};
const floatConf = {
    positionSaveName: '${positionSaveName}',
    draggable: true,
    showPattern: "ALL_TIME",
    hasEditText: false,
    sidePattern: "RESULT_HORIZONTAL",
    gravity: {
        gravity: 8388613,
        offsetX: 0,
        offsetY: 200
    },
    layoutChangedGravity: 8388613,
    border: {
        left: 100,
        top: 100,
        right: 800,
        bottom: 800
    },
    matchParent: {
        widthMatch: false,
        heightMatch: false
    }
};
const floatWindowConf = {
    floatConf: floatConf
};
const windowConf = {
    tag: '',
    contentType: "html",
    windowType: "float",
    htmlConf: htmlConf,
    floatWindowConf: floatWindowConf,
    windowId: (0,_barrel_optimize_names_ulid_ulid__WEBPACK_IMPORTED_MODULE_0__/* .ulid */ .Z0)(),
    forceDismissWindowTime: 0
};
function getDefaulWindowConf() {
    return JSON.parse(JSON.stringify(windowConf));
}
function createWindowConfCopy(conf) {
    return lodash__WEBPACK_IMPORTED_MODULE_1___default().merge({}, windowConf, conf);
}
// ============ createDefault 方法 ============
function createDefaultWebViewJsParams() {
    return {
        fitContentWidth: 0,
        fitContentHeight: 0,
        javaToJsDataString: ""
    };
}
function createDefaultWebViewConf() {
    return {
        backgroundColor: 0
    };
}
function createDefaultGravityInfo() {
    return {
        gravity: 17
    };
}
function createDefaultBorderInfo() {
    return {
        left: 0,
        top: 0,
        right: 0,
        bottom: 0
    };
}
function createDefaultMatchParentInfo() {
    return {
        widthMatch: false,
        heightMatch: false
    };
}
function createDefaultHtmlConf() {
    return {
        url: "",
        webViewJsParams: createDefaultWebViewJsParams(),
        webViewConf: createDefaultWebViewConf(),
        jsBridgeName: 'android',
        webViewJsName: 'AutoWebViewJs'
    };
}
function createDefaultFloatConf() {
    return {
        positionSaveName: '${positionSaveName}',
        draggable: true,
        showPattern: "ALL_TIME",
        hasEditText: false,
        sidePattern: "RESULT_HORIZONTAL",
        gravity: createDefaultGravityInfo(),
        layoutChangedGravity: 8388613,
        border: createDefaultBorderInfo(),
        matchParent: createDefaultMatchParentInfo()
    };
}
function createDefaultFloatWindowConf() {
    return {
        floatConf: createDefaultFloatConf()
    };
}
function createDefaultDialogWindowConf() {
    return {
        viewLayoutParams: {},
        theme: ''
    };
}
function createDefaultSysWindowConf() {
    return {
        viewLayoutParams: {},
        listenBackKey: false
    };
}
function createDefaultWindowConf() {
    return {
        tag: '',
        contentType: "html",
        windowType: "float",
        htmlConf: createDefaultHtmlConf(),
        floatWindowConf: createDefaultFloatWindowConf(),
        windowId: (0,_barrel_optimize_names_ulid_ulid__WEBPACK_IMPORTED_MODULE_0__/* .ulid */ .Z0)(),
        forceDismissWindowTime: 0
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

/***/ 67236:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ AndroidPageContent)
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/react@19.1.0/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(94513);
// EXTERNAL MODULE: ../../libs/fanfanlo/src/nextjs/env/env.ts
var env = __webpack_require__(49210);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react-i18next@15.6.0_i18next@24.2.3_typescript@5.7.3__react-dom@19.1.0_react@19.1.0__react@19.1.0_typescript@5.7.3/node_modules/react-i18next/dist/es/index.js + 15 modules
var es = __webpack_require__(50279);
// EXTERNAL MODULE: ../../libs/fanfanlo/src/i18n/i18n-value-loader.ts + 1 modules
var i18n_value_loader = __webpack_require__(27950);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/Box/Box.js + 2 modules
var Box = __webpack_require__(6445);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/Button/Button.js + 3 modules
var Button = __webpack_require__(28669);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/Container/Container.js + 1 modules
var Container = __webpack_require__(44437);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react@19.1.0/node_modules/react/index.js
var react = __webpack_require__(94285);
;// ../../libs/app/ui/src/components/page/PageContent.tsx




function Reload() {
    if (!env/* isDev */.Cu) return /*#__PURE__*/ (0,jsx_runtime.jsx)(jsx_runtime.Fragment, {
        children: "  "
    });
    const { t } = (0,es/* useTranslation */.Bd)("app-ui/components/page/content");
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.A, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Button/* default */.A, {
                onClick: ()=>{
                    window.location.reload();
                },
                children: t("PageContent.refresh")
            }),
            new Date().toLocaleString()
        ]
    });
}
const ScrollP = /*#__PURE__*/ (0,react.createContext)({
    x: 0,
    y: 0
});
let index = 0;
function PageContent(param) {
    let { children, titleConf, reload } = param;
    index++;
    const scroll = (0,react.useContext)(ScrollP);
    const clazz = "".concat(Date.now() + Math.random() * Date.now());
    (0,react.useEffect)(()=>{
        async function loadTitle() {
            if (!titleConf) return;
            let title = titleConf.title;
            if (titleConf.ns) {
                title = await (0,i18n_value_loader/* loadI18nValue */.y)(titleConf.ns, titleConf.key || "content.title");
            }
            if (!title) return;
            document.title = title;
        }
        loadTitle();
    }, []);
    (0,react.useEffect)(()=>{
        const container = document.getElementsByClassName(clazz)[0];
        if (!container) return;
        container.scrollTop = scroll.y;
        const onScroll = ()=>{
            var scrollTop = container.scrollTop;
            scroll.y = scrollTop;
        };
        container.removeEventListener('scroll', onScroll);
        container.addEventListener('scroll', onScroll, {
            passive: true
        });
        return ()=>container.removeEventListener('scroll', onScroll);
    }, [
        clazz,
        scroll
    ]);
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(Container/* default */.A, {
        className: clazz,
        sx: {
            height: '100%',
            overflow: 'auto',
            padding: "0px",
            display: 'flex',
            flexDirection: 'column'
        },
        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.A, {
            children: [
                (reload || reload == undefined) && /*#__PURE__*/ (0,jsx_runtime.jsx)(Reload, {}),
                children
            ]
        })
    });
}

;// ../../libs/app/ui/src/components/page/AndroidPageContent.tsx


function AndroidPageContent(param) {
    let { children, titleConf, reload } = param;
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(PageContent, {
        titleConf: titleConf,
        reload: reload,
        children: children
    });
}


/***/ }),

/***/ 70506:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Ru: () => (/* binding */ i18n),
  tV: () => (/* binding */ i18nInit)
});

// UNUSED EXPORTS: default, i18nLogger, useTranslation

// EXTERNAL MODULE: ../../node_modules/.pnpm/react-i18next@15.6.0_i18next@24.2.3_typescript@5.7.3__react-dom@19.1.0_react@19.1.0__react@19.1.0_typescript@5.7.3/node_modules/react-i18next/dist/es/index.js + 15 modules
var es = __webpack_require__(50279);
;// __barrel_optimize__?names=initReactI18next!=!../../node_modules/.pnpm/react-i18next@15.6.0_i18next@24.2.3_typescript@5.7.3__react-dom@19.1.0_react@19.1.0__react@19.1.0_typescript@5.7.3/node_modules/react-i18next/dist/es/index.js


// EXTERNAL MODULE: ../../node_modules/.pnpm/i18next-browser-languagedetector@8.2.0/node_modules/i18next-browser-languagedetector/dist/esm/i18nextBrowserLanguageDetector.js
var i18nextBrowserLanguageDetector = __webpack_require__(43734);
// EXTERNAL MODULE: ../../node_modules/.pnpm/i18next-http-backend@3.0.2_encoding@0.1.13/node_modules/i18next-http-backend/esm/index.js + 2 modules
var esm = __webpack_require__(50148);
// EXTERNAL MODULE: ../../node_modules/.pnpm/i18next@24.2.3_typescript@5.7.3/node_modules/i18next/dist/esm/i18next.js
var i18next = __webpack_require__(94912);
// EXTERNAL MODULE: ../../libs/fanfanlo/src/log/Log.ts + 1 modules
var Log = __webpack_require__(48891);
// EXTERNAL MODULE: ../../libs/fanfanlo/src/nextjs/env/env.ts
var env = __webpack_require__(49210);
// EXTERNAL MODULE: ../../libs/fanfanlo/src/utils/files-map-utils.ts
var files_map_utils = __webpack_require__(91850);
;// ../../libs/fanfanlo/src/i18n/i18n-init.ts
/* __next_internal_client_entry_do_not_use__ useTranslation,i18nLogger,i18n,i18nInit,default auto */ // 现在用的是这个文件








let fileDateVersion = '' // = getConfig().publicRuntimeConfig?.version
;
const i18nLogger = new Log/* Log */.tG(false, "i18n");
const windowHref = (()=>{
    var _window_parent;
    if (false) {}
    const u = new URL(window.location.href || ((_window_parent = window.parent) === null || _window_parent === void 0 ? void 0 : _window_parent.location.href));
    // 同域文本iframe里的页面会获取不到href，所以判断一下直接用父级的就行.
    return u.origin == null || u.origin == 'null' ? '' : u.origin;
})();
const backendOptions = {
    loadPath: function(lngs, namespaces) {
        const log = i18nLogger.sub(false, "i18n loadpath");
        log.pause = true;
        const lng = lngs[0];
        let p = "";
        // p = `/options/_locales/${lngs[0].replace("-", "_")}/messages.json`;
        // p = `/locales/zh-CN/ns1/content.json`;
        // p = `locales/${lng}/${namespaces[0]}.json?v=${fileDateVersion}`
        const ps = namespaces[0].split('/');
        ps.splice(ps.length - 1, 0, lng);
        // p = `locales/${ps.join('/')}.json?v=${fileDateVersion}`
        // p = `locales/${ps.join('/')}.json?v=${getBuildTime()}`
        p = "locales/".concat(ps.join('/'), ".json");
        log.log("lngs=", lngs);
        log.log("namespaces=", namespaces);
        log.log("p=", p);
        p = files_map_utils/* fileMapUtils */.E.getFile("/".concat(p));
        // console.log('map p=', p)
        p = "".concat(windowHref, "/").concat(p);
        return p;
    },
    parse: function(data, languages, namespaces) {
        const log = i18nLogger.sub(false, "i18n backend parse");
        log.pause = true;
        // log.log(`parrrse`, data, languages, namespaces);
        const l = JSON.parse(data);
        log.print("before set i18ndata");
        // i18nData = l as II18n;
        // log.log(`i18nData.rule.scripts.sys.rules`, i18nData.rule.scripts.sys.rules);
        log.log("parrrse", languages, namespaces);
        return l;
    }
};
const backend = new esm/* default */.A();
backend.init(null, backendOptions);
const i18n = i18next/* default */.Ay;
// export const resources: Resource = {
//   // 'zh-CN': {
//   //   translation: _.merge({}, zhCN),
//   // },
//   // en: {
//   //   translation: _.merge({}, en),
//   // },
// };
i18n.on("languageChanged", async function(lng) {
    const log = i18nLogger.sub(false, "onlanguageChanged");
    log.pause = true;
    log.log("lllllng", lng);
// lng = "en";
// const p = `/options/_locales/${lng.replace("-", "_")}/messages.json`;
});
function i18nInit() {
    let _fileDateVersion = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : '';
    fileDateVersion = _fileDateVersion;
    i18n.use(i18nextBrowserLanguageDetector/* default */.A).use(backend).use(es/* initReactI18next */.r9).init({
        load: "currentOnly",
        // load: "all",
        // supportedLngs: ['zh-CN', 'zh-TW', 'en', 'en-GB', 'ja'],
        // resources,
        fallbackLng: env/* isServer */.S$ ? "en" : "zh-CN",
        // fallbackLng: "zh-CN",
        // lng: "zh-CN",
        partialBundledLanguages: true,
        ns: [],
        debug: false,
        interpolation: {
            escapeValue: false
        },
        detection: {
            caches: [
                "localStorage"
            ]
        }
    });
}
i18n.on("missingKey", function(lngs, namespace, key, res) {
    console.error("i18n mssing key, lngs=%s, namespace=%s, key=%s, res=%s", lngs, namespace, key, res);
});
i18n.on("loaded", function(loaded) {
    const log = i18nLogger.sub(false, "onloaded");
    log.pause = true;
    log.log("onloaded arguments", loaded);
});
i18n.on("failedLoading", function(lng, ns, msg) {
    const log = i18nLogger.sub(false, "onfailedLoading");
    log.pause = true;
    log.log("failedLoading arguments", lng, ns, msg);
});
i18n.on("added", function() {
    console.log('added', arguments);
});
/* harmony default export */ const i18n_init = ((/* unused pure expression or super */ null && (i18n)));


/***/ }),

/***/ 72338:
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
var AppShell = __webpack_require__(20939);
// EXTERNAL MODULE: ../../libs/app/ui/src/components/appbar/AppBar.tsx + 3 modules
var AppBar = __webpack_require__(97972);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react-i18next@15.6.0_i18next@24.2.3_typescript@5.7.3__react-dom@19.1.0_react@19.1.0__react@19.1.0_typescript@5.7.3/node_modules/react-i18next/dist/es/index.js + 15 modules
var es = __webpack_require__(50279);
// EXTERNAL MODULE: ../../node_modules/.pnpm/next@15.3.5_@babel+core@7.28.0_babel-plugin-macros@3.1.0_react-dom@19.1.0_react@19.1.0__react@19.1.0_sass@1.89.2/node_modules/next/router.js
var next_router = __webpack_require__(75640);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react@19.1.0/node_modules/react/index.js
var react = __webpack_require__(94285);
// EXTERNAL MODULE: ./src/components/android-float/window/data.ts
var data = __webpack_require__(70011);
// EXTERNAL MODULE: ../../libs/fanfanlo/src/log/Log.ts + 1 modules
var Log = __webpack_require__(48891);
// EXTERNAL MODULE: ../../libs/droid/android/src/android/win/WindowConf.ts
var WindowConf = __webpack_require__(39800);
// EXTERNAL MODULE: ../../libs/fanfanlo/src/watcher/proxyWatch.ts
var proxyWatch = __webpack_require__(88518);
// EXTERNAL MODULE: ../../libs/fanfanlo/src/watcher/useProxyWatch.ts
var useProxyWatch = __webpack_require__(45007);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/Box/Box.js + 2 modules
var Box = __webpack_require__(6445);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/Typography/Typography.js
var Typography = __webpack_require__(67079);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/Accordion/Accordion.js + 1 modules
var Accordion = __webpack_require__(20350);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/AccordionSummary/AccordionSummary.js + 1 modules
var AccordionSummary = __webpack_require__(56420);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/Chip/Chip.js + 2 modules
var Chip = __webpack_require__(688);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/AccordionDetails/AccordionDetails.js + 1 modules
var AccordionDetails = __webpack_require__(29708);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/Stack/Stack.js + 1 modules
var Stack = __webpack_require__(9220);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/Button/Button.js + 3 modules
var Button = __webpack_require__(28669);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+icons-material@6.4.12_@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_re_5ewkm5t5g27pzq5tz62v6ktvti/node_modules/@mui/icons-material/esm/ExpandMore.js
var ExpandMore = __webpack_require__(21985);
// EXTERNAL MODULE: ./src/components/android-float/window/WindowConfUI.tsx
var WindowConfUI = __webpack_require__(50079);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/Select/Select.js + 5 modules
var Select = __webpack_require__(7313);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/MenuItem/MenuItem.js + 2 modules
var MenuItem = __webpack_require__(82797);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/TextField/TextField.js + 1 modules
var TextField = __webpack_require__(38771);
;// ./src/components/android-float/window/BasicInfoSection.tsx





/**
 * BasicInfoSection - 基本信息编辑区域
 *
 * 编辑字段：
 * - windowType: 窗口类型
 * - tag: 窗口标识
 * - description: 窗口说明
 * - windowId: 窗口 ID (只读)
 */ function BasicInfoSection(param) {
    let { windowConf } = param;
    const [windowType] = (0,useProxyWatch/* useProxyWatch */.x)(windowConf, 'windowType', windowConf.windowType);
    const [tag] = (0,useProxyWatch/* useProxyWatch */.x)(windowConf, 'tag', windowConf.tag);
    const [description] = (0,useProxyWatch/* useProxyWatch */.x)(windowConf, 'description', windowConf.description || '');
    const [windowId] = (0,useProxyWatch/* useProxyWatch */.x)(windowConf, 'windowId', windowConf.windowId);
    console.log('BasicInfoSection: render windowType:', windowType, 'tag:', tag);
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(Stack/* default */.A, {
        spacing: 2,
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.A, {
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(WindowConfUI/* RequiredLabel */.g2, {
                        label: "窗口类型"
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)(Select/* default */.A, {
                        value: windowType,
                        onChange: (e)=>{
                            console.log('BasicInfoSection: windowType changed to', e.target.value);
                            windowConf.windowType = e.target.value;
                        },
                        size: "small",
                        fullWidth: true,
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(MenuItem/* default */.A, {
                                value: WindowConf/* WindowType */.ZI.Float,
                                children: "浮窗 (Float)"
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(MenuItem/* default */.A, {
                                value: WindowConf/* WindowType */.ZI.Dialog,
                                children: "对话框 (Dialog)"
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(MenuItem/* default */.A, {
                                value: WindowConf/* WindowType */.ZI.System,
                                children: "系统窗口 (System)"
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.A, {
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(WindowConfUI/* RequiredLabel */.g2, {
                        label: "窗口标识"
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(TextField/* default */.A, {
                        value: tag,
                        onChange: (e)=>{
                            console.log('BasicInfoSection: tag changed to', e.target.value);
                            windowConf.tag = e.target.value;
                        },
                        size: "small",
                        fullWidth: true
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.A, {
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(WindowConfUI/* OptionalLabel */.zh, {
                        label: "窗口说明"
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(TextField/* default */.A, {
                        value: description,
                        onChange: (e)=>{
                            console.log('BasicInfoSection: description changed to', e.target.value);
                            windowConf.description = e.target.value;
                        },
                        size: "small",
                        fullWidth: true,
                        multiline: true,
                        rows: 2
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.A, {
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.A, {
                        variant: "body2",
                        sx: {
                            fontWeight: 'bold',
                            mb: 0.5
                        },
                        children: "窗口 ID（系统生成）"
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(TextField/* default */.A, {
                        value: windowId,
                        disabled: true,
                        size: "small",
                        fullWidth: true
                    })
                ]
            })
        ]
    });
}

// EXTERNAL MODULE: ./src/components/android-float/window/HtmlConfUI.tsx
var HtmlConfUI = __webpack_require__(81780);
;// ./src/components/android-float/window/HtmlConfSection.tsx


/**
 * HtmlConfSection - HTML 内容编辑区域
 *
 * 编辑字段：
 * - url: 内容 URL
 * - html: 内嵌 HTML 代码
 * - jsBridgeName: 注入的 JS Bridge 名称
 * - webViewJsName: WebView JS 类型
 * - javaRunnerId: Java Runner ID
 * - webViewJsParams: WebView JS 参数
 * - webViewConf: WebView 配置
 */ function HtmlConfSection(param) {
    let { htmlConf } = param;
    if (!htmlConf) {
        return null;
    }
    console.log('HtmlConfSection: render htmlConf:', htmlConf);
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(HtmlConfUI/* HtmlConfUI */.A, {
        htmlConf: htmlConf
    });
}

;// ./src/components/android-float/window/AdvancedSection.tsx




/**
 * AdvancedSection - 高级选项编辑区域
 *
 * 编辑字段：
 * - forceDismissWindowTime: 强制关闭时间
 */ function AdvancedSection(param) {
    let { windowConf } = param;
    const [forceDismissWindowTime] = (0,useProxyWatch/* useProxyWatch */.x)(windowConf, 'forceDismissWindowTime', windowConf.forceDismissWindowTime);
    console.log('AdvancedSection: render forceDismissWindowTime:', forceDismissWindowTime);
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(Stack/* default */.A, {
        spacing: 2,
        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.A, {
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsx)(WindowConfUI/* OptionalLabel */.zh, {
                    label: "强制关闭时间 (ms)"
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)(TextField/* default */.A, {
                    type: "number",
                    value: forceDismissWindowTime,
                    onChange: (e)=>{
                        console.log('AdvancedSection: forceDismissWindowTime changed to', e.target.value);
                        windowConf.forceDismissWindowTime = Number(e.target.value);
                    },
                    size: "small",
                    fullWidth: true,
                    inputProps: {
                        min: 0,
                        step: 1000
                    },
                    helperText: "0 表示不自动关闭"
                })
            ]
        })
    });
}

;// ./src/components/android-float/window/WindowConfEditor.tsx












/**
 * WindowConfEditor - Accordion 式编辑窗口配置
 *
 * 功能：
 * - 快速定位和编辑字段
 * - 根据 windowType 动态显示配置
 * - 必填项标记
 */ function WindowConfEditor(param) {
    let { windowConf: conf } = param;
    const router = (0,next_router.useRouter)();
    const [windowConf] = (0,react.useState)((0,proxyWatch/* toProxy */.I$)(conf));
    const [expanded, setExpanded] = (0,react.useState)('basic');
    const [windowType] = (0,useProxyWatch/* useProxyWatch */.x)(windowConf, 'windowType', windowConf.windowType);
    const [tag] = (0,useProxyWatch/* useProxyWatch */.x)(windowConf, 'tag', windowConf.tag);
    const [windowId] = (0,useProxyWatch/* useProxyWatch */.x)(windowConf, 'windowId', windowConf.windowId);
    console.log('WindowConfEditor: render windowType:', windowType);
    const editComfirmed = ()=>{
        const index = data/* androidFloatWindowData */.Kl.data.windowData.windowList.findIndex((w)=>w.windowId === windowConf.windowId);
        if (index == -1) {
            console.error('WindowConfEditor: editComfirmed - window config not found for windowId:', windowConf.windowId);
            return;
        }
        data/* androidFloatWindowData */.Kl.data.windowData.windowList[index] = windowConf;
        console.log('WindowConfEditor: window config updated:', windowConf);
    };
    const handleConfirm = ()=>{
        console.log('WindowConfEditor: handleConfirm - confirming changes');
        editComfirmed();
        router.back();
    };
    const handleCancel = ()=>{
        console.log('WindowConfEditor: handleCancel - discarding changes');
        router.back();
    };
    /**
   * 处理 Accordion 展开/折叠
   */ const handleAccordionChange = (panelId)=>(event, isExpanded)=>{
            console.log('WindowConfEditor: Accordion', panelId, 'toggled, isExpanded:', isExpanded);
            setExpanded(isExpanded ? panelId : false);
        };
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.A, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.A, {
                sx: {
                    mb: 3,
                    pb: 2,
                    borderBottom: '1px solid',
                    borderColor: 'divider'
                },
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.A, {
                        variant: "h6",
                        sx: {
                            fontWeight: 'bold'
                        },
                        children: tag
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)(Typography/* default */.A, {
                        variant: "body2",
                        color: "text.secondary",
                        children: [
                            "类型: ",
                            windowType,
                            " | ID: ",
                            windowId.substring(0, 8),
                            "..."
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)(Accordion/* default */.A, {
                expanded: expanded === 'basic',
                onChange: handleAccordionChange('basic'),
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)(AccordionSummary/* default */.A, {
                        expandIcon: /*#__PURE__*/ (0,jsx_runtime.jsx)(ExpandMore/* default */.A, {}),
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(Chip/* default */.A, {
                                label: "必填",
                                size: "small",
                                sx: {
                                    mr: 1
                                },
                                color: "error",
                                variant: "outlined"
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.A, {
                                children: "基本信息"
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(AccordionDetails/* default */.A, {
                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(BasicInfoSection, {
                            windowConf: windowConf
                        })
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)(Accordion/* default */.A, {
                expanded: expanded === 'html',
                onChange: handleAccordionChange('html'),
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)(AccordionSummary/* default */.A, {
                        expandIcon: /*#__PURE__*/ (0,jsx_runtime.jsx)(ExpandMore/* default */.A, {}),
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(Chip/* default */.A, {
                                label: "必填",
                                size: "small",
                                sx: {
                                    mr: 1
                                },
                                color: "error",
                                variant: "outlined"
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.A, {
                                children: "HTML 内容"
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(AccordionDetails/* default */.A, {
                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(HtmlConfSection, {
                            htmlConf: windowConf.htmlConf
                        })
                    })
                ]
            }),
            windowType === WindowConf/* WindowType */.ZI.Float && windowConf.floatWindowConf && /*#__PURE__*/ (0,jsx_runtime.jsxs)(Accordion/* default */.A, {
                expanded: expanded === 'float',
                onChange: handleAccordionChange('float'),
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(AccordionSummary/* default */.A, {
                        expandIcon: /*#__PURE__*/ (0,jsx_runtime.jsx)(ExpandMore/* default */.A, {}),
                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.A, {
                            children: "浮窗配置"
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(AccordionDetails/* default */.A, {
                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(WindowConfUI/* FloatWindowConfUI */.JI, {
                            floatWindowConf: windowConf.floatWindowConf
                        })
                    })
                ]
            }),
            windowType === WindowConf/* WindowType */.ZI.Dialog && windowConf.dialogWindowConf && /*#__PURE__*/ (0,jsx_runtime.jsxs)(Accordion/* default */.A, {
                expanded: expanded === 'dialog',
                onChange: handleAccordionChange('dialog'),
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(AccordionSummary/* default */.A, {
                        expandIcon: /*#__PURE__*/ (0,jsx_runtime.jsx)(ExpandMore/* default */.A, {}),
                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.A, {
                            children: "对话框配置"
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(AccordionDetails/* default */.A, {
                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(WindowConfUI/* DialogWindowConfUI */.TP, {
                            dialogWindowConf: windowConf.dialogWindowConf
                        })
                    })
                ]
            }),
            windowType === WindowConf/* WindowType */.ZI.System && windowConf.systemWindowConf && /*#__PURE__*/ (0,jsx_runtime.jsxs)(Accordion/* default */.A, {
                expanded: expanded === 'system',
                onChange: handleAccordionChange('system'),
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(AccordionSummary/* default */.A, {
                        expandIcon: /*#__PURE__*/ (0,jsx_runtime.jsx)(ExpandMore/* default */.A, {}),
                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.A, {
                            children: "系统窗口配置"
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(AccordionDetails/* default */.A, {
                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(WindowConfUI/* SysWindowConfUI */.o0, {
                            systemWindowConf: windowConf.systemWindowConf
                        })
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)(Accordion/* default */.A, {
                expanded: expanded === 'advanced',
                onChange: handleAccordionChange('advanced'),
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(AccordionSummary/* default */.A, {
                        expandIcon: /*#__PURE__*/ (0,jsx_runtime.jsx)(ExpandMore/* default */.A, {}),
                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.A, {
                            children: "高级选项"
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(AccordionDetails/* default */.A, {
                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(AdvancedSection, {
                            windowConf: windowConf
                        })
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)(Stack/* default */.A, {
                direction: "row",
                spacing: 2,
                sx: {
                    mt: 4,
                    justifyContent: 'flex-end'
                },
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Button/* default */.A, {
                        variant: "outlined",
                        onClick: handleCancel,
                        children: "放弃"
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Button/* default */.A, {
                        variant: "contained",
                        color: "primary",
                        onClick: handleConfirm,
                        children: "确认修改"
                    })
                ]
            })
        ]
    });
}

// EXTERNAL MODULE: ../../node_modules/.pnpm/react-hot-toast@2.5.2_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/react-hot-toast/dist/index.mjs + 1 modules
var dist = __webpack_require__(22243);
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
        setWindowConf(windowConf || null);
    }, []);
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.A, {
        children: [
            noWindowId && /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.A, {
                children: t("EditWindowContent.noWindowId")
            }),
            windowConfNotFound && /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.A, {
                children: t("EditWindowContent.windowConfNotFound")
            }),
            windowConf && /*#__PURE__*/ (0,jsx_runtime.jsx)(WindowConfEditor, {
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
/******/ __webpack_require__.O(0, [7054,1161,9151,3390,7313,8771,788,1482,799,1538,688,7122,636,6593,8792], () => (__webpack_exec__(33472)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ _N_E = __webpack_exports__;
/******/ }
]);
//# sourceMappingURL=float-window-edit-9a084668cf65e45d.js.map