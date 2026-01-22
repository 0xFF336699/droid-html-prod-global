"use strict";
(self["webpackChunk_N_E"] = self["webpackChunk_N_E"] || []).push([[2202],{

/***/ 122:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/**
 * If `componentProps` is a function, calls it with the provided `ownerState`.
 * Otherwise, just returns `componentProps`.
 */
function resolveComponentProps(componentProps, ownerState, slotState) {
  if (typeof componentProps === 'function') {
    return componentProps(ownerState, slotState);
  }
  return componentProps;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (resolveComponentProps);

/***/ }),

/***/ 3488:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ mergeSlotProps_mergeSlotProps)
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs
var clsx = __webpack_require__(3638);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+utils@6.4.9_@types+react@19.1.8_react@19.1.0/node_modules/@mui/utils/esm/extractEventHandlers/extractEventHandlers.js
var extractEventHandlers = __webpack_require__(79168);
;// ../../node_modules/.pnpm/@mui+utils@6.4.9_@types+react@19.1.8_react@19.1.0/node_modules/@mui/utils/esm/omitEventHandlers/omitEventHandlers.js
/**
 * Removes event handlers from the given object.
 * A field is considered an event handler if it is a function with a name beginning with `on`.
 *
 * @param object Object to remove event handlers from.
 * @returns Object with event handlers removed.
 */
function omitEventHandlers(object) {
  if (object === undefined) {
    return {};
  }
  const result = {};
  Object.keys(object).filter(prop => !(prop.match(/^on[A-Z]/) && typeof object[prop] === 'function')).forEach(prop => {
    result[prop] = object[prop];
  });
  return result;
}
/* harmony default export */ const omitEventHandlers_omitEventHandlers = (omitEventHandlers);
;// ../../node_modules/.pnpm/@mui+utils@6.4.9_@types+react@19.1.8_react@19.1.0/node_modules/@mui/utils/esm/mergeSlotProps/mergeSlotProps.js



/**
 * Merges the slot component internal props (usually coming from a hook)
 * with the externally provided ones.
 *
 * The merge order is (the latter overrides the former):
 * 1. The internal props (specified as a getter function to work with get*Props hook result)
 * 2. Additional props (specified internally on a Base UI component)
 * 3. External props specified on the owner component. These should only be used on a root slot.
 * 4. External props specified in the `slotProps.*` prop.
 * 5. The `className` prop - combined from all the above.
 * @param parameters
 * @returns
 */
function mergeSlotProps(parameters) {
  const {
    getSlotProps,
    additionalProps,
    externalSlotProps,
    externalForwardedProps,
    className
  } = parameters;
  if (!getSlotProps) {
    // The simpler case - getSlotProps is not defined, so no internal event handlers are defined,
    // so we can simply merge all the props without having to worry about extracting event handlers.
    const joinedClasses = (0,clsx/* default */.A)(additionalProps?.className, className, externalForwardedProps?.className, externalSlotProps?.className);
    const mergedStyle = {
      ...additionalProps?.style,
      ...externalForwardedProps?.style,
      ...externalSlotProps?.style
    };
    const props = {
      ...additionalProps,
      ...externalForwardedProps,
      ...externalSlotProps
    };
    if (joinedClasses.length > 0) {
      props.className = joinedClasses;
    }
    if (Object.keys(mergedStyle).length > 0) {
      props.style = mergedStyle;
    }
    return {
      props,
      internalRef: undefined
    };
  }

  // In this case, getSlotProps is responsible for calling the external event handlers.
  // We don't need to include them in the merged props because of this.

  const eventHandlers = (0,extractEventHandlers/* default */.A)({
    ...externalForwardedProps,
    ...externalSlotProps
  });
  const componentsPropsWithoutEventHandlers = omitEventHandlers_omitEventHandlers(externalSlotProps);
  const otherPropsWithoutEventHandlers = omitEventHandlers_omitEventHandlers(externalForwardedProps);
  const internalSlotProps = getSlotProps(eventHandlers);

  // The order of classes is important here.
  // Emotion (that we use in libraries consuming Base UI) depends on this order
  // to properly override style. It requires the most important classes to be last
  // (see https://github.com/mui/material-ui/pull/33205) for the related discussion.
  const joinedClasses = (0,clsx/* default */.A)(internalSlotProps?.className, additionalProps?.className, className, externalForwardedProps?.className, externalSlotProps?.className);
  const mergedStyle = {
    ...internalSlotProps?.style,
    ...additionalProps?.style,
    ...externalForwardedProps?.style,
    ...externalSlotProps?.style
  };
  const props = {
    ...internalSlotProps,
    ...additionalProps,
    ...otherPropsWithoutEventHandlers,
    ...componentsPropsWithoutEventHandlers
  };
  if (joinedClasses.length > 0) {
    props.className = joinedClasses;
  }
  if (Object.keys(mergedStyle).length > 0) {
    props.style = mergedStyle;
  }
  return {
    props,
    internalRef: internalSlotProps.ref
  };
}
/* harmony default export */ const mergeSlotProps_mergeSlotProps = (mergeSlotProps);

/***/ }),

/***/ 6035:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ appendOwnerState_appendOwnerState)
});

;// ../../node_modules/.pnpm/@mui+utils@6.4.9_@types+react@19.1.8_react@19.1.0/node_modules/@mui/utils/esm/isHostComponent/isHostComponent.js
/**
 * Determines if a given element is a DOM element name (i.e. not a React component).
 */
function isHostComponent(element) {
  return typeof element === 'string';
}
/* harmony default export */ const isHostComponent_isHostComponent = (isHostComponent);
;// ../../node_modules/.pnpm/@mui+utils@6.4.9_@types+react@19.1.8_react@19.1.0/node_modules/@mui/utils/esm/appendOwnerState/appendOwnerState.js


/**
 * Type of the ownerState based on the type of an element it applies to.
 * This resolves to the provided OwnerState for React components and `undefined` for host components.
 * Falls back to `OwnerState | undefined` when the exact type can't be determined in development time.
 */

/**
 * Appends the ownerState object to the props, merging with the existing one if necessary.
 *
 * @param elementType Type of the element that owns the `existingProps`. If the element is a DOM node or undefined, `ownerState` is not applied.
 * @param otherProps Props of the element.
 * @param ownerState
 */
function appendOwnerState(elementType, otherProps, ownerState) {
  if (elementType === undefined || isHostComponent_isHostComponent(elementType)) {
    return otherProps;
  }
  return {
    ...otherProps,
    ownerState: {
      ...otherProps.ownerState,
      ...ownerState
    }
  };
}
/* harmony default export */ const appendOwnerState_appendOwnerState = (appendOwnerState);

/***/ }),

/***/ 15826:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ ownerWindow)
/* harmony export */ });
/* harmony import */ var _ownerDocument_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(48770);

function ownerWindow(node) {
  const doc = (0,_ownerDocument_index_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)(node);
  return doc.defaultView || window;
}

/***/ }),

/***/ 17933:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _createStyled_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(75637);

const styled = (0,_createStyled_index_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Ay)();
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (styled);

/***/ }),

/***/ 38803:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ createSvgIcon)
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/react@19.1.0/node_modules/react/index.js
var react = __webpack_require__(94285);
// EXTERNAL MODULE: ../../node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs
var clsx = __webpack_require__(3638);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+utils@6.4.9_@types+react@19.1.8_react@19.1.0/node_modules/@mui/utils/esm/composeClasses/composeClasses.js
var composeClasses = __webpack_require__(95116);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/utils/capitalize.js
var capitalize = __webpack_require__(93385);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/styles/styled.js
var styled = __webpack_require__(96543);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/utils/memoTheme.js + 1 modules
var memoTheme = __webpack_require__(18558);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/DefaultPropsProvider/DefaultPropsProvider.js
var DefaultPropsProvider = __webpack_require__(85042);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+utils@6.4.9_@types+react@19.1.8_react@19.1.0/node_modules/@mui/utils/esm/generateUtilityClasses/generateUtilityClasses.js
var generateUtilityClasses = __webpack_require__(92186);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+utils@6.4.9_@types+react@19.1.8_react@19.1.0/node_modules/@mui/utils/esm/generateUtilityClass/generateUtilityClass.js
var generateUtilityClass = __webpack_require__(69014);
;// ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/SvgIcon/svgIconClasses.js


function getSvgIconUtilityClass(slot) {
    return (0,generateUtilityClass/* default */.Ay)('MuiSvgIcon', slot);
}
const svgIconClasses = (0,generateUtilityClasses/* default */.A)('MuiSvgIcon', [
    'root',
    'colorPrimary',
    'colorSecondary',
    'colorAction',
    'colorError',
    'colorDisabled',
    'fontSizeInherit',
    'fontSizeSmall',
    'fontSizeMedium',
    'fontSizeLarge'
]);
/* harmony default export */ const SvgIcon_svgIconClasses = ((/* unused pure expression or super */ null && (svgIconClasses)));

// EXTERNAL MODULE: ../../node_modules/.pnpm/react@19.1.0/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(94513);
;// ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/SvgIcon/SvgIcon.js
/* __next_internal_client_entry_do_not_use__ default auto */ 









const useUtilityClasses = (ownerState)=>{
    const { color, fontSize, classes } = ownerState;
    const slots = {
        root: [
            'root',
            color !== 'inherit' && "color".concat((0,capitalize/* default */.A)(color)),
            "fontSize".concat((0,capitalize/* default */.A)(fontSize))
        ]
    };
    return (0,composeClasses/* default */.A)(slots, getSvgIconUtilityClass, classes);
};
const SvgIconRoot = (0,styled/* default */.Ay)('svg', {
    name: 'MuiSvgIcon',
    slot: 'Root',
    overridesResolver: (props, styles)=>{
        const { ownerState } = props;
        return [
            styles.root,
            ownerState.color !== 'inherit' && styles["color".concat((0,capitalize/* default */.A)(ownerState.color))],
            styles["fontSize".concat((0,capitalize/* default */.A)(ownerState.fontSize))]
        ];
    }
})((0,memoTheme/* default */.A)((param)=>{
    let { theme } = param;
    var _transitions_duration, _transitions, _theme_transitions_create, _theme_transitions, _theme_typography_pxToRem, _theme_typography, _theme_typography_pxToRem1, _theme_typography1, _theme_typography_pxToRem2, _theme_typography2, _palette_action, _palette, _palette_action1, _palette1;
    var _theme_vars, _theme_vars1, _theme_vars2, _theme_vars3;
    return {
        userSelect: 'none',
        width: '1em',
        height: '1em',
        display: 'inline-block',
        flexShrink: 0,
        transition: (_theme_transitions = theme.transitions) === null || _theme_transitions === void 0 ? void 0 : (_theme_transitions_create = _theme_transitions.create) === null || _theme_transitions_create === void 0 ? void 0 : _theme_transitions_create.call(_theme_transitions, 'fill', {
            duration: (_transitions = ((_theme_vars = theme.vars) !== null && _theme_vars !== void 0 ? _theme_vars : theme).transitions) === null || _transitions === void 0 ? void 0 : (_transitions_duration = _transitions.duration) === null || _transitions_duration === void 0 ? void 0 : _transitions_duration.shorter
        }),
        variants: [
            {
                props: (props)=>!props.hasSvgAsChild,
                style: {
                    // the <svg> will define the property that has `currentColor`
                    // for example heroicons uses fill="none" and stroke="currentColor"
                    fill: 'currentColor'
                }
            },
            {
                props: {
                    fontSize: 'inherit'
                },
                style: {
                    fontSize: 'inherit'
                }
            },
            {
                props: {
                    fontSize: 'small'
                },
                style: {
                    fontSize: ((_theme_typography = theme.typography) === null || _theme_typography === void 0 ? void 0 : (_theme_typography_pxToRem = _theme_typography.pxToRem) === null || _theme_typography_pxToRem === void 0 ? void 0 : _theme_typography_pxToRem.call(_theme_typography, 20)) || '1.25rem'
                }
            },
            {
                props: {
                    fontSize: 'medium'
                },
                style: {
                    fontSize: ((_theme_typography1 = theme.typography) === null || _theme_typography1 === void 0 ? void 0 : (_theme_typography_pxToRem1 = _theme_typography1.pxToRem) === null || _theme_typography_pxToRem1 === void 0 ? void 0 : _theme_typography_pxToRem1.call(_theme_typography1, 24)) || '1.5rem'
                }
            },
            {
                props: {
                    fontSize: 'large'
                },
                style: {
                    fontSize: ((_theme_typography2 = theme.typography) === null || _theme_typography2 === void 0 ? void 0 : (_theme_typography_pxToRem2 = _theme_typography2.pxToRem) === null || _theme_typography_pxToRem2 === void 0 ? void 0 : _theme_typography_pxToRem2.call(_theme_typography2, 35)) || '2.1875rem'
                }
            },
            // TODO v5 deprecate color prop, v6 remove for sx
            ...Object.entries(((_theme_vars1 = theme.vars) !== null && _theme_vars1 !== void 0 ? _theme_vars1 : theme).palette).filter((param)=>{
                let [, value] = param;
                return value && value.main;
            }).map((param)=>{
                let [color] = param;
                var _palette_color, _palette;
                var _theme_vars;
                return {
                    props: {
                        color
                    },
                    style: {
                        color: (_palette = ((_theme_vars = theme.vars) !== null && _theme_vars !== void 0 ? _theme_vars : theme).palette) === null || _palette === void 0 ? void 0 : (_palette_color = _palette[color]) === null || _palette_color === void 0 ? void 0 : _palette_color.main
                    }
                };
            }),
            {
                props: {
                    color: 'action'
                },
                style: {
                    color: (_palette = ((_theme_vars2 = theme.vars) !== null && _theme_vars2 !== void 0 ? _theme_vars2 : theme).palette) === null || _palette === void 0 ? void 0 : (_palette_action = _palette.action) === null || _palette_action === void 0 ? void 0 : _palette_action.active
                }
            },
            {
                props: {
                    color: 'disabled'
                },
                style: {
                    color: (_palette1 = ((_theme_vars3 = theme.vars) !== null && _theme_vars3 !== void 0 ? _theme_vars3 : theme).palette) === null || _palette1 === void 0 ? void 0 : (_palette_action1 = _palette1.action) === null || _palette_action1 === void 0 ? void 0 : _palette_action1.disabled
                }
            },
            {
                props: {
                    color: 'inherit'
                },
                style: {
                    color: undefined
                }
            }
        ]
    };
}));
const SvgIcon = /*#__PURE__*/ react.forwardRef(function SvgIcon(inProps, ref) {
    const props = (0,DefaultPropsProvider/* useDefaultProps */.b)({
        props: inProps,
        name: 'MuiSvgIcon'
    });
    const { children, className, color = 'inherit', component = 'svg', fontSize = 'medium', htmlColor, inheritViewBox = false, titleAccess, viewBox = '0 0 24 24', ...other } = props;
    const hasSvgAsChild = /*#__PURE__*/ react.isValidElement(children) && children.type === 'svg';
    const ownerState = {
        ...props,
        color,
        component,
        fontSize,
        instanceFontSize: inProps.fontSize,
        inheritViewBox,
        viewBox,
        hasSvgAsChild
    };
    const more = {};
    if (!inheritViewBox) {
        more.viewBox = viewBox;
    }
    const classes = useUtilityClasses(ownerState);
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(SvgIconRoot, {
        as: component,
        className: (0,clsx/* default */.A)(classes.root, className),
        focusable: "false",
        color: htmlColor,
        "aria-hidden": titleAccess ? undefined : true,
        role: titleAccess ? 'img' : undefined,
        ref: ref,
        ...more,
        ...other,
        ...hasSvgAsChild && children.props,
        ownerState: ownerState,
        children: [
            hasSvgAsChild ? children.props.children : children,
            titleAccess ? /*#__PURE__*/ (0,jsx_runtime.jsx)("title", {
                children: titleAccess
            }) : null
        ]
    });
});
 false ? 0 : void 0;
SvgIcon.muiName = 'SvgIcon';
/* harmony default export */ const SvgIcon_SvgIcon = (SvgIcon);

;// ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/utils/createSvgIcon.js
/* __next_internal_client_entry_do_not_use__ default auto */ 

/**
 * Private module reserved for @mui packages.
 */ 
function createSvgIcon(path, displayName) {
    function Component(props, ref) {
        return /*#__PURE__*/ (0,jsx_runtime.jsx)(SvgIcon_SvgIcon, {
            "data-testid": "".concat(displayName, "Icon"),
            ref: ref,
            ...props,
            children: path
        });
    }
    if (false) {}
    Component.muiName = SvgIcon_SvgIcon.muiName;
    return /*#__PURE__*/ react.memo(/*#__PURE__*/ react.forwardRef(Component));
}


/***/ }),

/***/ 45375:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ useThemeProps)
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+utils@6.4.9_@types+react@19.1.8_react@19.1.0/node_modules/@mui/utils/esm/resolveProps/resolveProps.js
var resolveProps = __webpack_require__(20892);
;// ../../node_modules/.pnpm/@mui+system@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled@1_sfs2vjcbuqchwdpqpmkla22opm/node_modules/@mui/system/esm/useThemeProps/getThemeProps.js

function getThemeProps(params) {
  const {
    theme,
    name,
    props
  } = params;
  if (!theme || !theme.components || !theme.components[name] || !theme.components[name].defaultProps) {
    return props;
  }
  return (0,resolveProps/* default */.A)(theme.components[name].defaultProps, props);
}
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+system@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled@1_sfs2vjcbuqchwdpqpmkla22opm/node_modules/@mui/system/esm/useTheme/useTheme.js
var useTheme = __webpack_require__(81499);
;// ../../node_modules/.pnpm/@mui+system@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled@1_sfs2vjcbuqchwdpqpmkla22opm/node_modules/@mui/system/esm/useThemeProps/useThemeProps.js
'use client';



function useThemeProps({
  props,
  name,
  defaultTheme,
  themeId
}) {
  let theme = (0,useTheme/* default */.A)(defaultTheme);
  if (themeId) {
    theme = theme[themeId] || theme;
  }
  return getThemeProps({
    theme,
    name,
    props
  });
}

/***/ }),

/***/ 48470:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ useSlot)
/* harmony export */ });
/* harmony import */ var _mui_utils_useForkRef__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(16316);
/* harmony import */ var _mui_utils_appendOwnerState__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6035);
/* harmony import */ var _mui_utils_resolveComponentProps__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(122);
/* harmony import */ var _mui_utils_mergeSlotProps__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3488);
/* __next_internal_client_entry_do_not_use__ default auto */ 



/**
 * An internal function to create a Material UI slot.
 *
 * This is an advanced version of Base UI `useSlotProps` because Material UI allows leaf component to be customized via `component` prop
 * while Base UI does not need to support leaf component customization.
 *
 * @param {string} name: name of the slot
 * @param {object} parameters
 * @returns {[Slot, slotProps]} The slot's React component and the slot's props
 *
 * Note: the returned slot's props
 * - will never contain `component` prop.
 * - might contain `as` prop.
 */ function useSlot(/**
 * The slot's name. All Material UI components should have `root` slot.
 *
 * If the name is `root`, the logic behaves differently from other slots,
 * e.g. the `externalForwardedProps` are spread to `root` slot but not other slots.
 */ name, parameters) {
    const { className, elementType: initialElementType, ownerState, externalForwardedProps, internalForwardedProps, shouldForwardComponentProp = false, ...useSlotPropsParams } = parameters;
    const { component: rootComponent, slots = {
        [name]: undefined
    }, slotProps = {
        [name]: undefined
    }, ...other } = externalForwardedProps;
    const elementType = slots[name] || initialElementType;
    // `slotProps[name]` can be a callback that receives the component's ownerState.
    // `resolvedComponentsProps` is always a plain object.
    const resolvedComponentsProps = (0,_mui_utils_resolveComponentProps__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)(slotProps[name], ownerState);
    const { props: { component: slotComponent, ...mergedProps }, internalRef } = (0,_mui_utils_mergeSlotProps__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A)({
        className,
        ...useSlotPropsParams,
        externalForwardedProps: name === 'root' ? other : undefined,
        externalSlotProps: resolvedComponentsProps
    });
    const ref = (0,_mui_utils_useForkRef__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A)(internalRef, resolvedComponentsProps === null || resolvedComponentsProps === void 0 ? void 0 : resolvedComponentsProps.ref, parameters.ref);
    const LeafComponent = name === 'root' ? slotComponent || rootComponent : slotComponent;
    const props = (0,_mui_utils_appendOwnerState__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A)(elementType, {
        ...name === 'root' && !rootComponent && !slots[name] && internalForwardedProps,
        ...name !== 'root' && !slots[name] && internalForwardedProps,
        ...mergedProps,
        ...LeafComponent && !shouldForwardComponentProp && {
            as: LeafComponent
        },
        ...LeafComponent && shouldForwardComponentProp && {
            component: LeafComponent
        },
        ref
    }, ownerState);
    return [
        elementType,
        props
    ];
}


/***/ }),

/***/ 48770:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ ownerDocument)
/* harmony export */ });
function ownerDocument(node) {
  return node && node.ownerDocument || document;
}

/***/ }),

/***/ 72808:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ useTheme)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(94285);
/* harmony import */ var _mui_system__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(81499);
/* harmony import */ var _defaultTheme_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(21182);
/* harmony import */ var _identifier_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(18103);
/* __next_internal_client_entry_do_not_use__ default auto */ 



function useTheme() {
    const theme = (0,_mui_system__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A)(_defaultTheme_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A);
    if (false) {}
    return theme[_identifier_js__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A] || theme;
}


/***/ }),

/***/ 79168:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/**
 * Extracts event handlers from a given object.
 * A prop is considered an event handler if it is a function and its name starts with `on`.
 *
 * @param object An object to extract event handlers from.
 * @param excludeKeys An array of keys to exclude from the returned object.
 */
function extractEventHandlers(object, excludeKeys = []) {
  if (object === undefined) {
    return {};
  }
  const result = {};
  Object.keys(object).filter(prop => prop.match(/^on[A-Z]/) && typeof object[prop] === 'function' && !excludeKeys.includes(prop)).forEach(prop => {
    result[prop] = object[prop];
  });
  return result;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (extractEventHandlers);

/***/ }),

/***/ 85366:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ createChainedFunction)
/* harmony export */ });
/**
 * Safe chained function.
 *
 * Will only create a new function if needed,
 * otherwise will pass back existing functions or null.
 */
function createChainedFunction(...funcs) {
  return funcs.reduce((acc, func) => {
    if (func == null) {
      return acc;
    }
    return function chainedFunction(...args) {
      acc.apply(this, args);
      func.apply(this, args);
    };
  }, () => {});
}

/***/ }),

/***/ 97878:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ debounce)
/* harmony export */ });
// Corresponds to 10 frames at 60 Hz.
// A few bytes payload overhead when lodash/debounce is ~3 kB and debounce ~300 B.
function debounce(func, wait = 166) {
  let timeout;
  function debounced(...args) {
    const later = () => {
      // @ts-ignore
      func.apply(this, args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  }
  debounced.clear = () => {
    clearTimeout(timeout);
  };
  return debounced;
}

/***/ })

}]);
//# sourceMappingURL=2202.fa2c399c6e8442a2.js.map