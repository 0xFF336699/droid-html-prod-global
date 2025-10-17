"use strict";
(self["webpackChunk_N_E"] = self["webpackChunk_N_E"] || []).push([[4075],{

/***/ 9220:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


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

/***/ 72537:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ internal_SwitchBase)
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/react@19.1.0/node_modules/react/index.js
var react = __webpack_require__(94285);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+utils@6.4.9_@types+react@19.1.8_react@19.1.0/node_modules/@mui/utils/esm/composeClasses/composeClasses.js
var composeClasses = __webpack_require__(95116);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/utils/capitalize.js
var capitalize = __webpack_require__(99512);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/styles/rootShouldForwardProp.js
var rootShouldForwardProp = __webpack_require__(84044);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/styles/styled.js
var styled = __webpack_require__(64624);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/utils/useControlled.js + 1 modules
var useControlled = __webpack_require__(34499);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/FormControl/useFormControl.js
var useFormControl = __webpack_require__(67286);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/ButtonBase/ButtonBase.js + 5 modules
var ButtonBase = __webpack_require__(42932);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+utils@6.4.9_@types+react@19.1.8_react@19.1.0/node_modules/@mui/utils/esm/generateUtilityClasses/generateUtilityClasses.js
var generateUtilityClasses = __webpack_require__(92186);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+utils@6.4.9_@types+react@19.1.8_react@19.1.0/node_modules/@mui/utils/esm/generateUtilityClass/generateUtilityClass.js
var generateUtilityClass = __webpack_require__(69014);
;// ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/internal/switchBaseClasses.js


function getSwitchBaseUtilityClass(slot) {
    return (0,generateUtilityClass/* default */.Ay)('PrivateSwitchBase', slot);
}
const switchBaseClasses = (0,generateUtilityClasses/* default */.A)('PrivateSwitchBase', [
    'root',
    'checked',
    'disabled',
    'input',
    'edgeStart',
    'edgeEnd'
]);
/* harmony default export */ const internal_switchBaseClasses = ((/* unused pure expression or super */ null && (switchBaseClasses)));

// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/utils/useSlot.js
var useSlot = __webpack_require__(98005);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react@19.1.0/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(94513);
;// ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/internal/SwitchBase.js
/* __next_internal_client_entry_do_not_use__ default auto */ 












const useUtilityClasses = (ownerState)=>{
    const { classes, checked, disabled, edge } = ownerState;
    const slots = {
        root: [
            'root',
            checked && 'checked',
            disabled && 'disabled',
            edge && "edge".concat((0,capitalize/* default */.A)(edge))
        ],
        input: [
            'input'
        ]
    };
    return (0,composeClasses/* default */.A)(slots, getSwitchBaseUtilityClass, classes);
};
const SwitchBaseRoot = (0,styled/* default */.Ay)(ButtonBase/* default */.A)({
    padding: 9,
    borderRadius: '50%',
    variants: [
        {
            props: {
                edge: 'start',
                size: 'small'
            },
            style: {
                marginLeft: -3
            }
        },
        {
            props: (param)=>{
                let { edge, ownerState } = param;
                return edge === 'start' && ownerState.size !== 'small';
            },
            style: {
                marginLeft: -12
            }
        },
        {
            props: {
                edge: 'end',
                size: 'small'
            },
            style: {
                marginRight: -3
            }
        },
        {
            props: (param)=>{
                let { edge, ownerState } = param;
                return edge === 'end' && ownerState.size !== 'small';
            },
            style: {
                marginRight: -12
            }
        }
    ]
});
const SwitchBaseInput = (0,styled/* default */.Ay)('input', {
    shouldForwardProp: rootShouldForwardProp/* default */.A
})({
    cursor: 'inherit',
    position: 'absolute',
    opacity: 0,
    width: '100%',
    height: '100%',
    top: 0,
    left: 0,
    margin: 0,
    padding: 0,
    zIndex: 1
});
/**
 * @ignore - internal component.
 */ const SwitchBase = /*#__PURE__*/ react.forwardRef(function SwitchBase(props, ref) {
    const { autoFocus, checked: checkedProp, checkedIcon, defaultChecked, disabled: disabledProp, disableFocusRipple = false, edge = false, icon, id, inputProps, inputRef, name, onBlur, onChange, onFocus, readOnly, required = false, tabIndex, type, value, slots = {}, slotProps = {}, ...other } = props;
    const [checked, setCheckedState] = (0,useControlled/* default */.A)({
        controlled: checkedProp,
        default: Boolean(defaultChecked),
        name: 'SwitchBase',
        state: 'checked'
    });
    const muiFormControl = (0,useFormControl/* default */.A)();
    const handleFocus = (event)=>{
        if (onFocus) {
            onFocus(event);
        }
        if (muiFormControl && muiFormControl.onFocus) {
            muiFormControl.onFocus(event);
        }
    };
    const handleBlur = (event)=>{
        if (onBlur) {
            onBlur(event);
        }
        if (muiFormControl && muiFormControl.onBlur) {
            muiFormControl.onBlur(event);
        }
    };
    const handleInputChange = (event)=>{
        // Workaround for https://github.com/facebook/react/issues/9023
        if (event.nativeEvent.defaultPrevented) {
            return;
        }
        const newChecked = event.target.checked;
        setCheckedState(newChecked);
        if (onChange) {
            // TODO v6: remove the second argument.
            onChange(event, newChecked);
        }
    };
    let disabled = disabledProp;
    if (muiFormControl) {
        if (typeof disabled === 'undefined') {
            disabled = muiFormControl.disabled;
        }
    }
    const hasLabelFor = type === 'checkbox' || type === 'radio';
    const ownerState = {
        ...props,
        checked,
        disabled,
        disableFocusRipple,
        edge
    };
    const classes = useUtilityClasses(ownerState);
    const externalForwardedProps = {
        slots,
        slotProps: {
            input: inputProps,
            ...slotProps
        }
    };
    const [RootSlot, rootSlotProps] = (0,useSlot/* default */.A)('root', {
        ref,
        elementType: SwitchBaseRoot,
        className: classes.root,
        shouldForwardComponentProp: true,
        externalForwardedProps: {
            ...externalForwardedProps,
            component: 'span',
            ...other
        },
        getSlotProps: (handlers)=>({
                ...handlers,
                onFocus: (event)=>{
                    var _handlers_onFocus;
                    (_handlers_onFocus = handlers.onFocus) === null || _handlers_onFocus === void 0 ? void 0 : _handlers_onFocus.call(handlers, event);
                    handleFocus(event);
                },
                onBlur: (event)=>{
                    var _handlers_onBlur;
                    (_handlers_onBlur = handlers.onBlur) === null || _handlers_onBlur === void 0 ? void 0 : _handlers_onBlur.call(handlers, event);
                    handleBlur(event);
                }
            }),
        ownerState,
        additionalProps: {
            centerRipple: true,
            focusRipple: !disableFocusRipple,
            disabled,
            role: undefined,
            tabIndex: null
        }
    });
    const [InputSlot, inputSlotProps] = (0,useSlot/* default */.A)('input', {
        ref: inputRef,
        elementType: SwitchBaseInput,
        className: classes.input,
        externalForwardedProps,
        getSlotProps: (handlers)=>({
                onChange: (event)=>{
                    var _handlers_onChange;
                    (_handlers_onChange = handlers.onChange) === null || _handlers_onChange === void 0 ? void 0 : _handlers_onChange.call(handlers, event);
                    handleInputChange(event);
                }
            }),
        ownerState,
        additionalProps: {
            autoFocus,
            checked: checkedProp,
            defaultChecked,
            disabled,
            id: hasLabelFor ? id : undefined,
            name,
            readOnly,
            required,
            tabIndex,
            type,
            ...type === 'checkbox' && value === undefined ? {} : {
                value
            }
        }
    });
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(RootSlot, {
        ...rootSlotProps,
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(InputSlot, {
                ...inputSlotProps
            }),
            checked ? checkedIcon : icon
        ]
    });
});
// NB: If changed, please update Checkbox, Switch and Radio
// so that the API documentation is updated.
 false ? 0 : void 0;
/* harmony default export */ const internal_SwitchBase = (SwitchBase);


/***/ }),

/***/ 73160:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

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



/***/ })

}]);
//# sourceMappingURL=4075-398766f90e3329b5.js.map