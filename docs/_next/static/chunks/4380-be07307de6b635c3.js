"use strict";
(self["webpackChunk_N_E"] = self["webpackChunk_N_E"] || []).push([[4380],{

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

/***/ 5368:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(94285);
/* __next_internal_client_entry_do_not_use__ default auto */ 
/**
 * @ignore - internal component.
 */ const ListContext = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createContext({});
if (false) {}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ListContext);


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

/***/ 7391:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/**
 * Determines if a given element is a DOM element name (i.e. not a React component).
 */ function isHostComponent(element) {
    return typeof element === 'string';
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (isHostComponent);


/***/ }),

/***/ 8476:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ mergeSlotProps)
/* harmony export */ });
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3638);

function mergeSlotProps(externalSlotProps, defaultSlotProps) {
    if (!externalSlotProps) {
        return defaultSlotProps;
    }
    if (typeof externalSlotProps === 'function' || typeof defaultSlotProps === 'function') {
        return (ownerState)=>{
            const defaultSlotPropsValue = typeof defaultSlotProps === 'function' ? defaultSlotProps(ownerState) : defaultSlotProps;
            const externalSlotPropsValue = typeof externalSlotProps === 'function' ? externalSlotProps({
                ...ownerState,
                ...defaultSlotPropsValue
            }) : externalSlotProps;
            const className = (0,clsx__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)(ownerState === null || ownerState === void 0 ? void 0 : ownerState.className, defaultSlotPropsValue === null || defaultSlotPropsValue === void 0 ? void 0 : defaultSlotPropsValue.className, externalSlotPropsValue === null || externalSlotPropsValue === void 0 ? void 0 : externalSlotPropsValue.className);
            return {
                ...defaultSlotPropsValue,
                ...externalSlotPropsValue,
                ...!!className && {
                    className
                },
                ...(defaultSlotPropsValue === null || defaultSlotPropsValue === void 0 ? void 0 : defaultSlotPropsValue.style) && (externalSlotPropsValue === null || externalSlotPropsValue === void 0 ? void 0 : externalSlotPropsValue.style) && {
                    style: {
                        ...defaultSlotPropsValue.style,
                        ...externalSlotPropsValue.style
                    }
                },
                ...(defaultSlotPropsValue === null || defaultSlotPropsValue === void 0 ? void 0 : defaultSlotPropsValue.sx) && (externalSlotPropsValue === null || externalSlotPropsValue === void 0 ? void 0 : externalSlotPropsValue.sx) && {
                    sx: [
                        ...Array.isArray(defaultSlotPropsValue.sx) ? defaultSlotPropsValue.sx : [
                            defaultSlotPropsValue.sx
                        ],
                        ...Array.isArray(externalSlotPropsValue.sx) ? externalSlotPropsValue.sx : [
                            externalSlotPropsValue.sx
                        ]
                    ]
                }
            };
        };
    }
    const typedDefaultSlotProps = defaultSlotProps;
    const className = (0,clsx__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)(typedDefaultSlotProps === null || typedDefaultSlotProps === void 0 ? void 0 : typedDefaultSlotProps.className, externalSlotProps === null || externalSlotProps === void 0 ? void 0 : externalSlotProps.className);
    return {
        ...defaultSlotProps,
        ...externalSlotProps,
        ...!!className && {
            className
        },
        ...(typedDefaultSlotProps === null || typedDefaultSlotProps === void 0 ? void 0 : typedDefaultSlotProps.style) && (externalSlotProps === null || externalSlotProps === void 0 ? void 0 : externalSlotProps.style) && {
            style: {
                ...typedDefaultSlotProps.style,
                ...externalSlotProps.style
            }
        },
        ...(typedDefaultSlotProps === null || typedDefaultSlotProps === void 0 ? void 0 : typedDefaultSlotProps.sx) && (externalSlotProps === null || externalSlotProps === void 0 ? void 0 : externalSlotProps.sx) && {
            sx: [
                ...Array.isArray(typedDefaultSlotProps.sx) ? typedDefaultSlotProps.sx : [
                    typedDefaultSlotProps.sx
                ],
                ...Array.isArray(externalSlotProps.sx) ? externalSlotProps.sx : [
                    externalSlotProps.sx
                ]
            ]
        }
    };
}


/***/ }),

/***/ 11999:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(94285);
/* harmony import */ var _mui_utils_useTimeout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(45443);
/* harmony import */ var _mui_utils_getReactElementRef__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(43552);
/* harmony import */ var _barrel_optimize_names_Transition_react_transition_group__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(73027);
/* harmony import */ var _zero_styled_index_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(38443);
/* harmony import */ var _transitions_utils_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(77810);
/* harmony import */ var _utils_useForkRef_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(71878);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(94513);
/* __next_internal_client_entry_do_not_use__ default auto */ 









function getScale(value) {
    return "scale(".concat(value, ", ").concat(value ** 2, ")");
}
const styles = {
    entering: {
        opacity: 1,
        transform: getScale(1)
    },
    entered: {
        opacity: 1,
        transform: 'none'
    }
};
/*
 TODO v6: remove
 Conditionally apply a workaround for the CSS transition bug in Safari 15.4 / WebKit browsers.
 */ const isWebKit154 = typeof navigator !== 'undefined' && /^((?!chrome|android).)*(safari|mobile)/i.test(navigator.userAgent) && /(os |version\/)15(.|_)4/i.test(navigator.userAgent);
/**
 * The Grow transition is used by the [Tooltip](/material-ui/react-tooltip/) and
 * [Popover](/material-ui/react-popover/) components.
 * It uses [react-transition-group](https://github.com/reactjs/react-transition-group) internally.
 */ const Grow = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(function Grow(props, ref) {
    const { addEndListener, appear = true, children, easing, in: inProp, onEnter, onEntered, onEntering, onExit, onExited, onExiting, style, timeout = 'auto', // eslint-disable-next-line react/prop-types
    TransitionComponent = _barrel_optimize_names_Transition_react_transition_group__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Ay, ...other } = props;
    const timer = (0,_mui_utils_useTimeout__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A)();
    const autoTimeout = react__WEBPACK_IMPORTED_MODULE_0__.useRef();
    const theme = (0,_zero_styled_index_js__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A)();
    const nodeRef = react__WEBPACK_IMPORTED_MODULE_0__.useRef(null);
    const handleRef = (0,_utils_useForkRef_js__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .A)(nodeRef, (0,_mui_utils_getReactElementRef__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .A)(children), ref);
    const normalizedTransitionCallback = (callback)=>(maybeIsAppearing)=>{
            if (callback) {
                const node = nodeRef.current;
                // onEnterXxx and onExitXxx callbacks have a different arguments.length value.
                if (maybeIsAppearing === undefined) {
                    callback(node);
                } else {
                    callback(node, maybeIsAppearing);
                }
            }
        };
    const handleEntering = normalizedTransitionCallback(onEntering);
    const handleEnter = normalizedTransitionCallback((node, isAppearing)=>{
        (0,_transitions_utils_js__WEBPACK_IMPORTED_MODULE_7__/* .reflow */ .q)(node); // So the animation always start from the start.
        const { duration: transitionDuration, delay, easing: transitionTimingFunction } = (0,_transitions_utils_js__WEBPACK_IMPORTED_MODULE_7__/* .getTransitionProps */ .c)({
            style,
            timeout,
            easing
        }, {
            mode: 'enter'
        });
        let duration;
        if (timeout === 'auto') {
            duration = theme.transitions.getAutoHeightDuration(node.clientHeight);
            autoTimeout.current = duration;
        } else {
            duration = transitionDuration;
        }
        node.style.transition = [
            theme.transitions.create('opacity', {
                duration,
                delay
            }),
            theme.transitions.create('transform', {
                duration: isWebKit154 ? duration : duration * 0.666,
                delay,
                easing: transitionTimingFunction
            })
        ].join(',');
        if (onEnter) {
            onEnter(node, isAppearing);
        }
    });
    const handleEntered = normalizedTransitionCallback(onEntered);
    const handleExiting = normalizedTransitionCallback(onExiting);
    const handleExit = normalizedTransitionCallback((node)=>{
        const { duration: transitionDuration, delay, easing: transitionTimingFunction } = (0,_transitions_utils_js__WEBPACK_IMPORTED_MODULE_7__/* .getTransitionProps */ .c)({
            style,
            timeout,
            easing
        }, {
            mode: 'exit'
        });
        let duration;
        if (timeout === 'auto') {
            duration = theme.transitions.getAutoHeightDuration(node.clientHeight);
            autoTimeout.current = duration;
        } else {
            duration = transitionDuration;
        }
        node.style.transition = [
            theme.transitions.create('opacity', {
                duration,
                delay
            }),
            theme.transitions.create('transform', {
                duration: isWebKit154 ? duration : duration * 0.666,
                delay: isWebKit154 ? delay : delay || duration * 0.333,
                easing: transitionTimingFunction
            })
        ].join(',');
        node.style.opacity = 0;
        node.style.transform = getScale(0.75);
        if (onExit) {
            onExit(node);
        }
    });
    const handleExited = normalizedTransitionCallback(onExited);
    const handleAddEndListener = (next)=>{
        if (timeout === 'auto') {
            timer.start(autoTimeout.current || 0, next);
        }
        if (addEndListener) {
            // Old call signature before `react-transition-group` implemented `nodeRef`
            addEndListener(nodeRef.current, next);
        }
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(TransitionComponent, {
        appear: appear,
        in: inProp,
        nodeRef: nodeRef,
        onEnter: handleEnter,
        onEntered: handleEntered,
        onEntering: handleEntering,
        onExit: handleExit,
        onExited: handleExited,
        onExiting: handleExiting,
        addEndListener: handleAddEndListener,
        timeout: timeout === 'auto' ? null : timeout,
        ...other,
        children: (state, param)=>{
            let { ownerState, ...restChildProps } = param;
            return /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.cloneElement(children, {
                style: {
                    opacity: 0,
                    transform: getScale(0.75),
                    visibility: state === 'exited' && !inProp ? 'hidden' : undefined,
                    ...styles[state],
                    ...style,
                    ...children.props.style
                },
                ref: handleRef,
                ...restChildProps
            });
        }
    });
});
 false ? 0 : void 0;
if (Grow) {
    Grow.muiSupportAuto = true;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Grow);


/***/ }),

/***/ 22226:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ getScrollbarSize)
/* harmony export */ });
// A change of the browser zoom change the scrollbar size.
// Credit https://github.com/twbs/bootstrap/blob/488fd8afc535ca3a6ad4dc581f5e89217b6a36ac/js/src/util/scrollbar.js#L14-L18
function getScrollbarSize(win = window) {
  // https://developer.mozilla.org/en-US/docs/Web/API/Window/innerWidth#usage_notes
  const documentWidth = win.document.documentElement.clientWidth;
  return win.innerWidth - documentWidth;
}

/***/ }),

/***/ 22454:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ isMuiElement)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(94285);

function isMuiElement(element, muiNames) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.isValidElement(element) && muiNames.indexOf(
  // For server components `muiName` is avaialble in element.type._payload.value.muiName
  // relevant info - https://github.com/facebook/react/blob/2807d781a08db8e9873687fccc25c0f12b4fb3d4/packages/react/src/ReactLazy.js#L45
  // eslint-disable-next-line no-underscore-dangle
  element.type.muiName ?? element.type?._payload?.value?.muiName) !== -1;
}

/***/ }),

/***/ 26173:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _mui_utils_isMuiElement__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(22454);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_mui_utils_isMuiElement__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A);


/***/ }),

/***/ 34486:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _mui_utils_useEnhancedEffect__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(51142);
/* __next_internal_client_entry_do_not_use__ default auto */ 
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_mui_utils_useEnhancedEffect__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A);


/***/ }),

/***/ 34499:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ utils_useControlled)
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/react@19.1.0/node_modules/react/index.js
var react = __webpack_require__(94285);
;// ../../node_modules/.pnpm/@mui+utils@6.4.9_@types+react@19.1.8_react@19.1.0/node_modules/@mui/utils/esm/useControlled/useControlled.js
'use client';

// TODO: uncomment once we enable eslint-plugin-react-compiler // eslint-disable-next-line react-compiler/react-compiler -- process.env never changes, dependency arrays are intentionally ignored
/* eslint-disable react-hooks/rules-of-hooks, react-hooks/exhaustive-deps */

function useControlled({
  controlled,
  default: defaultProp,
  name,
  state = 'value'
}) {
  // isControlled is ignored in the hook dependency lists as it should never change.
  const {
    current: isControlled
  } = react.useRef(controlled !== undefined);
  const [valueState, setValue] = react.useState(defaultProp);
  const value = isControlled ? controlled : valueState;
  if (false) {}
  const setValueIfUncontrolled = react.useCallback(newValue => {
    if (!isControlled) {
      setValue(newValue);
    }
  }, []);
  return [value, setValueIfUncontrolled];
}
;// ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/utils/useControlled.js
/* __next_internal_client_entry_do_not_use__ default auto */ 
/* harmony default export */ const utils_useControlled = (useControlled);


/***/ }),

/***/ 41862:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ Menu_Menu)
});

// UNUSED EXPORTS: MenuPaper

// EXTERNAL MODULE: ../../node_modules/.pnpm/react@19.1.0/node_modules/react/index.js
var react = __webpack_require__(94285);
// EXTERNAL MODULE: ../../node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs
var clsx = __webpack_require__(3638);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+utils@6.4.9_@types+react@19.1.8_react@19.1.0/node_modules/@mui/utils/esm/composeClasses/composeClasses.js
var composeClasses = __webpack_require__(95116);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+system@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled@1_sfs2vjcbuqchwdpqpmkla22opm/node_modules/@mui/system/esm/RtlProvider/index.js
var RtlProvider = __webpack_require__(93974);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+utils@6.4.9_@types+react@19.1.8_react@19.1.0/node_modules/@mui/utils/esm/useSlotProps/useSlotProps.js
var useSlotProps = __webpack_require__(93430);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/utils/ownerDocument.js
var ownerDocument = __webpack_require__(45640);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/List/List.js + 1 modules
var List = __webpack_require__(90535);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+utils@6.4.9_@types+react@19.1.8_react@19.1.0/node_modules/@mui/utils/esm/getScrollbarSize/getScrollbarSize.js
var getScrollbarSize = __webpack_require__(22226);
;// ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/utils/getScrollbarSize.js

/* harmony default export */ const utils_getScrollbarSize = (getScrollbarSize/* default */.A);

// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/utils/useForkRef.js
var useForkRef = __webpack_require__(71878);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/utils/useEnhancedEffect.js
var useEnhancedEffect = __webpack_require__(34486);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/utils/ownerWindow.js
var ownerWindow = __webpack_require__(72429);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react@19.1.0/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(94513);
;// ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/MenuList/MenuList.js
/* __next_internal_client_entry_do_not_use__ default auto */ 









function nextItem(list, item, disableListWrap) {
    if (list === item) {
        return list.firstChild;
    }
    if (item && item.nextElementSibling) {
        return item.nextElementSibling;
    }
    return disableListWrap ? null : list.firstChild;
}
function previousItem(list, item, disableListWrap) {
    if (list === item) {
        return disableListWrap ? list.firstChild : list.lastChild;
    }
    if (item && item.previousElementSibling) {
        return item.previousElementSibling;
    }
    return disableListWrap ? null : list.lastChild;
}
function textCriteriaMatches(nextFocus, textCriteria) {
    if (textCriteria === undefined) {
        return true;
    }
    let text = nextFocus.innerText;
    if (text === undefined) {
        // jsdom doesn't support innerText
        text = nextFocus.textContent;
    }
    text = text.trim().toLowerCase();
    if (text.length === 0) {
        return false;
    }
    if (textCriteria.repeating) {
        return text[0] === textCriteria.keys[0];
    }
    return text.startsWith(textCriteria.keys.join(''));
}
function moveFocus(list, currentFocus, disableListWrap, disabledItemsFocusable, traversalFunction, textCriteria) {
    let wrappedOnce = false;
    let nextFocus = traversalFunction(list, currentFocus, currentFocus ? disableListWrap : false);
    while(nextFocus){
        // Prevent infinite loop.
        if (nextFocus === list.firstChild) {
            if (wrappedOnce) {
                return false;
            }
            wrappedOnce = true;
        }
        // Same logic as useAutocomplete.js
        const nextFocusDisabled = disabledItemsFocusable ? false : nextFocus.disabled || nextFocus.getAttribute('aria-disabled') === 'true';
        if (!nextFocus.hasAttribute('tabindex') || !textCriteriaMatches(nextFocus, textCriteria) || nextFocusDisabled) {
            // Move to the next element.
            nextFocus = traversalFunction(list, nextFocus, disableListWrap);
        } else {
            nextFocus.focus();
            return true;
        }
    }
    return false;
}
/**
 * A permanently displayed menu following https://www.w3.org/WAI/ARIA/apg/patterns/menu-button/.
 * It's exposed to help customization of the [`Menu`](/material-ui/api/menu/) component if you
 * use it separately you need to move focus into the component manually. Once
 * the focus is placed inside the component it is fully keyboard accessible.
 */ const MenuList = /*#__PURE__*/ react.forwardRef(function MenuList(props, ref) {
    const { // private
    // eslint-disable-next-line react/prop-types
    actions, autoFocus = false, autoFocusItem = false, children, className, disabledItemsFocusable = false, disableListWrap = false, onKeyDown, variant = 'selectedMenu', ...other } = props;
    const listRef = react.useRef(null);
    const textCriteriaRef = react.useRef({
        keys: [],
        repeating: true,
        previousKeyMatched: true,
        lastTime: null
    });
    (0,useEnhancedEffect/* default */.A)(()=>{
        if (autoFocus) {
            listRef.current.focus();
        }
    }, [
        autoFocus
    ]);
    react.useImperativeHandle(actions, ()=>({
            adjustStyleForScrollbar: (containerElement, param)=>{
                let { direction } = param;
                // Let's ignore that piece of logic if users are already overriding the width
                // of the menu.
                const noExplicitWidth = !listRef.current.style.width;
                if (containerElement.clientHeight < listRef.current.clientHeight && noExplicitWidth) {
                    const scrollbarSize = "".concat(utils_getScrollbarSize((0,ownerWindow/* default */.A)(containerElement)), "px");
                    listRef.current.style[direction === 'rtl' ? 'paddingLeft' : 'paddingRight'] = scrollbarSize;
                    listRef.current.style.width = "calc(100% + ".concat(scrollbarSize, ")");
                }
                return listRef.current;
            }
        }), []);
    const handleKeyDown = (event)=>{
        const list = listRef.current;
        const key = event.key;
        const isModifierKeyPressed = event.ctrlKey || event.metaKey || event.altKey;
        if (isModifierKeyPressed) {
            if (onKeyDown) {
                onKeyDown(event);
            }
            return;
        }
        /**
     * @type {Element} - will always be defined since we are in a keydown handler
     * attached to an element. A keydown event is either dispatched to the activeElement
     * or document.body or document.documentElement. Only the first case will
     * trigger this specific handler.
     */ const currentFocus = (0,ownerDocument/* default */.A)(list).activeElement;
        if (key === 'ArrowDown') {
            // Prevent scroll of the page
            event.preventDefault();
            moveFocus(list, currentFocus, disableListWrap, disabledItemsFocusable, nextItem);
        } else if (key === 'ArrowUp') {
            event.preventDefault();
            moveFocus(list, currentFocus, disableListWrap, disabledItemsFocusable, previousItem);
        } else if (key === 'Home') {
            event.preventDefault();
            moveFocus(list, null, disableListWrap, disabledItemsFocusable, nextItem);
        } else if (key === 'End') {
            event.preventDefault();
            moveFocus(list, null, disableListWrap, disabledItemsFocusable, previousItem);
        } else if (key.length === 1) {
            const criteria = textCriteriaRef.current;
            const lowerKey = key.toLowerCase();
            const currTime = performance.now();
            if (criteria.keys.length > 0) {
                // Reset
                if (currTime - criteria.lastTime > 500) {
                    criteria.keys = [];
                    criteria.repeating = true;
                    criteria.previousKeyMatched = true;
                } else if (criteria.repeating && lowerKey !== criteria.keys[0]) {
                    criteria.repeating = false;
                }
            }
            criteria.lastTime = currTime;
            criteria.keys.push(lowerKey);
            const keepFocusOnCurrent = currentFocus && !criteria.repeating && textCriteriaMatches(currentFocus, criteria);
            if (criteria.previousKeyMatched && (keepFocusOnCurrent || moveFocus(list, currentFocus, false, disabledItemsFocusable, nextItem, criteria))) {
                event.preventDefault();
            } else {
                criteria.previousKeyMatched = false;
            }
        }
        if (onKeyDown) {
            onKeyDown(event);
        }
    };
    const handleRef = (0,useForkRef/* default */.A)(listRef, ref);
    /**
   * the index of the item should receive focus
   * in a `variant="selectedMenu"` it's the first `selected` item
   * otherwise it's the very first item.
   */ let activeItemIndex = -1;
    // since we inject focus related props into children we have to do a lookahead
    // to check if there is a `selected` item. We're looking for the last `selected`
    // item and use the first valid item as a fallback
    react.Children.forEach(children, (child, index)=>{
        if (!/*#__PURE__*/ react.isValidElement(child)) {
            if (activeItemIndex === index) {
                activeItemIndex += 1;
                if (activeItemIndex >= children.length) {
                    // there are no focusable items within the list.
                    activeItemIndex = -1;
                }
            }
            return;
        }
        if (false) {}
        if (!child.props.disabled) {
            if (variant === 'selectedMenu' && child.props.selected) {
                activeItemIndex = index;
            } else if (activeItemIndex === -1) {
                activeItemIndex = index;
            }
        }
        if (activeItemIndex === index && (child.props.disabled || child.props.muiSkipListHighlight || child.type.muiSkipListHighlight)) {
            activeItemIndex += 1;
            if (activeItemIndex >= children.length) {
                // there are no focusable items within the list.
                activeItemIndex = -1;
            }
        }
    });
    const items = react.Children.map(children, (child, index)=>{
        if (index === activeItemIndex) {
            const newChildProps = {};
            if (autoFocusItem) {
                newChildProps.autoFocus = true;
            }
            if (child.props.tabIndex === undefined && variant === 'selectedMenu') {
                newChildProps.tabIndex = 0;
            }
            return /*#__PURE__*/ react.cloneElement(child, newChildProps);
        }
        return child;
    });
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(List/* default */.A, {
        role: "menu",
        ref: handleRef,
        className: className,
        onKeyDown: handleKeyDown,
        tabIndex: autoFocus ? 0 : -1,
        ...other,
        children: items
    });
});
 false ? 0 : void 0;
/* harmony default export */ const MenuList_MenuList = (MenuList);

// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/utils/isHostComponent.js
var isHostComponent = __webpack_require__(7391);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/styles/styled.js
var styled = __webpack_require__(64624);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/DefaultPropsProvider/DefaultPropsProvider.js
var DefaultPropsProvider = __webpack_require__(79209);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/utils/debounce.js
var debounce = __webpack_require__(74169);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/Grow/Grow.js
var Grow = __webpack_require__(11999);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/Modal/Modal.js + 4 modules
var Modal = __webpack_require__(44729);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/Paper/Paper.js + 1 modules
var Paper = __webpack_require__(59864);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+utils@6.4.9_@types+react@19.1.8_react@19.1.0/node_modules/@mui/utils/esm/generateUtilityClasses/generateUtilityClasses.js
var generateUtilityClasses = __webpack_require__(92186);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+utils@6.4.9_@types+react@19.1.8_react@19.1.0/node_modules/@mui/utils/esm/generateUtilityClass/generateUtilityClass.js
var generateUtilityClass = __webpack_require__(69014);
;// ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/Popover/popoverClasses.js


function getPopoverUtilityClass(slot) {
    return (0,generateUtilityClass/* default */.Ay)('MuiPopover', slot);
}
const popoverClasses = (0,generateUtilityClasses/* default */.A)('MuiPopover', [
    'root',
    'paper'
]);
/* harmony default export */ const Popover_popoverClasses = ((/* unused pure expression or super */ null && (popoverClasses)));

// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/utils/useSlot.js
var useSlot = __webpack_require__(98005);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/utils/mergeSlotProps.js
var mergeSlotProps = __webpack_require__(8476);
;// ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/Popover/Popover.js
/* __next_internal_client_entry_do_not_use__ getOffsetTop,getOffsetLeft,PopoverRoot,PopoverPaper,default auto */ 





















function getOffsetTop(rect, vertical) {
    let offset = 0;
    if (typeof vertical === 'number') {
        offset = vertical;
    } else if (vertical === 'center') {
        offset = rect.height / 2;
    } else if (vertical === 'bottom') {
        offset = rect.height;
    }
    return offset;
}
function getOffsetLeft(rect, horizontal) {
    let offset = 0;
    if (typeof horizontal === 'number') {
        offset = horizontal;
    } else if (horizontal === 'center') {
        offset = rect.width / 2;
    } else if (horizontal === 'right') {
        offset = rect.width;
    }
    return offset;
}
function getTransformOriginValue(transformOrigin) {
    return [
        transformOrigin.horizontal,
        transformOrigin.vertical
    ].map((n)=>typeof n === 'number' ? "".concat(n, "px") : n).join(' ');
}
function resolveAnchorEl(anchorEl) {
    return typeof anchorEl === 'function' ? anchorEl() : anchorEl;
}
const useUtilityClasses = (ownerState)=>{
    const { classes } = ownerState;
    const slots = {
        root: [
            'root'
        ],
        paper: [
            'paper'
        ]
    };
    return (0,composeClasses/* default */.A)(slots, getPopoverUtilityClass, classes);
};
const PopoverRoot = (0,styled/* default */.Ay)(Modal/* default */.A, {
    name: 'MuiPopover',
    slot: 'Root',
    overridesResolver: (props, styles)=>styles.root
})({});
const PopoverPaper = (0,styled/* default */.Ay)(Paper/* default */.A, {
    name: 'MuiPopover',
    slot: 'Paper',
    overridesResolver: (props, styles)=>styles.paper
})({
    position: 'absolute',
    overflowY: 'auto',
    overflowX: 'hidden',
    // So we see the popover when it's empty.
    // It's most likely on issue on userland.
    minWidth: 16,
    minHeight: 16,
    maxWidth: 'calc(100% - 32px)',
    maxHeight: 'calc(100% - 32px)',
    // We disable the focus ring for mouse, touch and keyboard users.
    outline: 0
});
const Popover = /*#__PURE__*/ react.forwardRef(function Popover(inProps, ref) {
    const props = (0,DefaultPropsProvider/* useDefaultProps */.b)({
        props: inProps,
        name: 'MuiPopover'
    });
    const { action, anchorEl, anchorOrigin = {
        vertical: 'top',
        horizontal: 'left'
    }, anchorPosition, anchorReference = 'anchorEl', children, className, container: containerProp, elevation = 8, marginThreshold = 16, open, PaperProps: PaperPropsProp = {}, // TODO: remove in v7
    slots = {}, slotProps = {}, transformOrigin = {
        vertical: 'top',
        horizontal: 'left'
    }, TransitionComponent, // TODO: remove in v7
    transitionDuration: transitionDurationProp = 'auto', TransitionProps = {}, // TODO: remove in v7
    disableScrollLock = false, ...other } = props;
    const paperRef = react.useRef();
    const ownerState = {
        ...props,
        anchorOrigin,
        anchorReference,
        elevation,
        marginThreshold,
        transformOrigin,
        TransitionComponent,
        transitionDuration: transitionDurationProp,
        TransitionProps
    };
    const classes = useUtilityClasses(ownerState);
    // Returns the top/left offset of the position
    // to attach to on the anchor element (or body if none is provided)
    const getAnchorOffset = react.useCallback(()=>{
        if (anchorReference === 'anchorPosition') {
            if (false) {}
            return anchorPosition;
        }
        const resolvedAnchorEl = resolveAnchorEl(anchorEl);
        // If an anchor element wasn't provided, just use the parent body element of this Popover
        const anchorElement = resolvedAnchorEl && resolvedAnchorEl.nodeType === 1 ? resolvedAnchorEl : (0,ownerDocument/* default */.A)(paperRef.current).body;
        const anchorRect = anchorElement.getBoundingClientRect();
        if (false) {}
        return {
            top: anchorRect.top + getOffsetTop(anchorRect, anchorOrigin.vertical),
            left: anchorRect.left + getOffsetLeft(anchorRect, anchorOrigin.horizontal)
        };
    }, [
        anchorEl,
        anchorOrigin.horizontal,
        anchorOrigin.vertical,
        anchorPosition,
        anchorReference
    ]);
    // Returns the base transform origin using the element
    const getTransformOrigin = react.useCallback((elemRect)=>{
        return {
            vertical: getOffsetTop(elemRect, transformOrigin.vertical),
            horizontal: getOffsetLeft(elemRect, transformOrigin.horizontal)
        };
    }, [
        transformOrigin.horizontal,
        transformOrigin.vertical
    ]);
    const getPositioningStyle = react.useCallback((element)=>{
        const elemRect = {
            width: element.offsetWidth,
            height: element.offsetHeight
        };
        // Get the transform origin point on the element itself
        const elemTransformOrigin = getTransformOrigin(elemRect);
        if (anchorReference === 'none') {
            return {
                top: null,
                left: null,
                transformOrigin: getTransformOriginValue(elemTransformOrigin)
            };
        }
        // Get the offset of the anchoring element
        const anchorOffset = getAnchorOffset();
        // Calculate element positioning
        let top = anchorOffset.top - elemTransformOrigin.vertical;
        let left = anchorOffset.left - elemTransformOrigin.horizontal;
        const bottom = top + elemRect.height;
        const right = left + elemRect.width;
        // Use the parent window of the anchorEl if provided
        const containerWindow = (0,ownerWindow/* default */.A)(resolveAnchorEl(anchorEl));
        // Window thresholds taking required margin into account
        const heightThreshold = containerWindow.innerHeight - marginThreshold;
        const widthThreshold = containerWindow.innerWidth - marginThreshold;
        // Check if the vertical axis needs shifting
        if (marginThreshold !== null && top < marginThreshold) {
            const diff = top - marginThreshold;
            top -= diff;
            elemTransformOrigin.vertical += diff;
        } else if (marginThreshold !== null && bottom > heightThreshold) {
            const diff = bottom - heightThreshold;
            top -= diff;
            elemTransformOrigin.vertical += diff;
        }
        if (false) {}
        // Check if the horizontal axis needs shifting
        if (marginThreshold !== null && left < marginThreshold) {
            const diff = left - marginThreshold;
            left -= diff;
            elemTransformOrigin.horizontal += diff;
        } else if (right > widthThreshold) {
            const diff = right - widthThreshold;
            left -= diff;
            elemTransformOrigin.horizontal += diff;
        }
        return {
            top: "".concat(Math.round(top), "px"),
            left: "".concat(Math.round(left), "px"),
            transformOrigin: getTransformOriginValue(elemTransformOrigin)
        };
    }, [
        anchorEl,
        anchorReference,
        getAnchorOffset,
        getTransformOrigin,
        marginThreshold
    ]);
    const [isPositioned, setIsPositioned] = react.useState(open);
    const setPositioningStyles = react.useCallback(()=>{
        const element = paperRef.current;
        if (!element) {
            return;
        }
        const positioning = getPositioningStyle(element);
        if (positioning.top !== null) {
            element.style.setProperty('top', positioning.top);
        }
        if (positioning.left !== null) {
            element.style.left = positioning.left;
        }
        element.style.transformOrigin = positioning.transformOrigin;
        setIsPositioned(true);
    }, [
        getPositioningStyle
    ]);
    react.useEffect(()=>{
        if (disableScrollLock) {
            window.addEventListener('scroll', setPositioningStyles);
        }
        return ()=>window.removeEventListener('scroll', setPositioningStyles);
    }, [
        anchorEl,
        disableScrollLock,
        setPositioningStyles
    ]);
    const handleEntering = ()=>{
        setPositioningStyles();
    };
    const handleExited = ()=>{
        setIsPositioned(false);
    };
    react.useEffect(()=>{
        if (open) {
            setPositioningStyles();
        }
    });
    react.useImperativeHandle(action, ()=>open ? {
            updatePosition: ()=>{
                setPositioningStyles();
            }
        } : null, [
        open,
        setPositioningStyles
    ]);
    react.useEffect(()=>{
        if (!open) {
            return undefined;
        }
        const handleResize = (0,debounce/* default */.A)(()=>{
            setPositioningStyles();
        });
        const containerWindow = (0,ownerWindow/* default */.A)(resolveAnchorEl(anchorEl));
        containerWindow.addEventListener('resize', handleResize);
        return ()=>{
            handleResize.clear();
            containerWindow.removeEventListener('resize', handleResize);
        };
    }, [
        anchorEl,
        open,
        setPositioningStyles
    ]);
    let transitionDuration = transitionDurationProp;
    const externalForwardedProps = {
        slots: {
            transition: TransitionComponent,
            ...slots
        },
        slotProps: {
            transition: TransitionProps,
            paper: PaperPropsProp,
            ...slotProps
        }
    };
    const [TransitionSlot, transitionSlotProps] = (0,useSlot/* default */.A)('transition', {
        elementType: Grow/* default */.A,
        externalForwardedProps,
        ownerState,
        getSlotProps: (handlers)=>({
                ...handlers,
                onEntering: (element, isAppearing)=>{
                    var _handlers_onEntering;
                    (_handlers_onEntering = handlers.onEntering) === null || _handlers_onEntering === void 0 ? void 0 : _handlers_onEntering.call(handlers, element, isAppearing);
                    handleEntering();
                },
                onExited: (element)=>{
                    var _handlers_onExited;
                    (_handlers_onExited = handlers.onExited) === null || _handlers_onExited === void 0 ? void 0 : _handlers_onExited.call(handlers, element);
                    handleExited();
                }
            }),
        additionalProps: {
            appear: true,
            in: open
        }
    });
    if (transitionDurationProp === 'auto' && !TransitionSlot.muiSupportAuto) {
        transitionDuration = undefined;
    }
    // If the container prop is provided, use that
    // If the anchorEl prop is provided, use its parent body element as the container
    // If neither are provided let the Modal take care of choosing the container
    const container = containerProp || (anchorEl ? (0,ownerDocument/* default */.A)(resolveAnchorEl(anchorEl)).body : undefined);
    const [RootSlot, { slots: rootSlotsProp, slotProps: rootSlotPropsProp, ...rootProps }] = (0,useSlot/* default */.A)('root', {
        ref,
        elementType: PopoverRoot,
        externalForwardedProps: {
            ...externalForwardedProps,
            ...other
        },
        shouldForwardComponentProp: true,
        additionalProps: {
            slots: {
                backdrop: slots.backdrop
            },
            slotProps: {
                backdrop: (0,mergeSlotProps/* default */.A)(typeof slotProps.backdrop === 'function' ? slotProps.backdrop(ownerState) : slotProps.backdrop, {
                    invisible: true
                })
            },
            container,
            open
        },
        ownerState,
        className: (0,clsx/* default */.A)(classes.root, className)
    });
    const [PaperSlot, paperProps] = (0,useSlot/* default */.A)('paper', {
        ref: paperRef,
        className: classes.paper,
        elementType: PopoverPaper,
        externalForwardedProps,
        shouldForwardComponentProp: true,
        additionalProps: {
            elevation,
            style: isPositioned ? undefined : {
                opacity: 0
            }
        },
        ownerState
    });
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(RootSlot, {
        ...rootProps,
        ...!(0,isHostComponent/* default */.A)(RootSlot) && {
            slots: rootSlotsProp,
            slotProps: rootSlotPropsProp,
            disableScrollLock
        },
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(TransitionSlot, {
            ...transitionSlotProps,
            timeout: transitionDuration,
            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(PaperSlot, {
                ...paperProps,
                children: children
            })
        })
    });
});
 false ? 0 : void 0;
/* harmony default export */ const Popover_Popover = (Popover);

// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/styles/rootShouldForwardProp.js
var rootShouldForwardProp = __webpack_require__(84044);
;// ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/Menu/menuClasses.js


function getMenuUtilityClass(slot) {
    return (0,generateUtilityClass/* default */.Ay)('MuiMenu', slot);
}
const menuClasses = (0,generateUtilityClasses/* default */.A)('MuiMenu', [
    'root',
    'paper',
    'list'
]);
/* harmony default export */ const Menu_menuClasses = ((/* unused pure expression or super */ null && (menuClasses)));

;// ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/Menu/Menu.js
/* __next_internal_client_entry_do_not_use__ MenuPaper,default auto */ 















const RTL_ORIGIN = {
    vertical: 'top',
    horizontal: 'right'
};
const LTR_ORIGIN = {
    vertical: 'top',
    horizontal: 'left'
};
const Menu_useUtilityClasses = (ownerState)=>{
    const { classes } = ownerState;
    const slots = {
        root: [
            'root'
        ],
        paper: [
            'paper'
        ],
        list: [
            'list'
        ]
    };
    return (0,composeClasses/* default */.A)(slots, getMenuUtilityClass, classes);
};
const MenuRoot = (0,styled/* default */.Ay)(Popover_Popover, {
    shouldForwardProp: (prop)=>(0,rootShouldForwardProp/* default */.A)(prop) || prop === 'classes',
    name: 'MuiMenu',
    slot: 'Root',
    overridesResolver: (props, styles)=>styles.root
})({});
const MenuPaper = (0,styled/* default */.Ay)(PopoverPaper, {
    name: 'MuiMenu',
    slot: 'Paper',
    overridesResolver: (props, styles)=>styles.paper
})({
    // specZ: The maximum height of a simple menu should be one or more rows less than the view
    // height. This ensures a tappable area outside of the simple menu with which to dismiss
    // the menu.
    maxHeight: 'calc(100% - 96px)',
    // Add iOS momentum scrolling for iOS < 13.0
    WebkitOverflowScrolling: 'touch'
});
const MenuMenuList = (0,styled/* default */.Ay)(MenuList_MenuList, {
    name: 'MuiMenu',
    slot: 'List',
    overridesResolver: (props, styles)=>styles.list
})({
    // We disable the focus ring for mouse, touch and keyboard users.
    outline: 0
});
const Menu = /*#__PURE__*/ react.forwardRef(function Menu(inProps, ref) {
    const props = (0,DefaultPropsProvider/* useDefaultProps */.b)({
        props: inProps,
        name: 'MuiMenu'
    });
    const { autoFocus = true, children, className, disableAutoFocusItem = false, MenuListProps = {}, onClose, open, PaperProps = {}, PopoverClasses, transitionDuration = 'auto', TransitionProps: { onEntering, ...TransitionProps } = {}, variant = 'selectedMenu', slots = {}, slotProps = {}, ...other } = props;
    const isRtl = (0,RtlProvider/* useRtl */.I)();
    const ownerState = {
        ...props,
        autoFocus,
        disableAutoFocusItem,
        MenuListProps,
        onEntering,
        PaperProps,
        transitionDuration,
        TransitionProps,
        variant
    };
    const classes = Menu_useUtilityClasses(ownerState);
    const autoFocusItem = autoFocus && !disableAutoFocusItem && open;
    const menuListActionsRef = react.useRef(null);
    const handleEntering = (element, isAppearing)=>{
        if (menuListActionsRef.current) {
            menuListActionsRef.current.adjustStyleForScrollbar(element, {
                direction: isRtl ? 'rtl' : 'ltr'
            });
        }
        if (onEntering) {
            onEntering(element, isAppearing);
        }
    };
    const handleListKeyDown = (event)=>{
        if (event.key === 'Tab') {
            event.preventDefault();
            if (onClose) {
                onClose(event, 'tabKeyDown');
            }
        }
    };
    /**
   * the index of the item should receive focus
   * in a `variant="selectedMenu"` it's the first `selected` item
   * otherwise it's the very first item.
   */ let activeItemIndex = -1;
    // since we inject focus related props into children we have to do a lookahead
    // to check if there is a `selected` item. We're looking for the last `selected`
    // item and use the first valid item as a fallback
    react.Children.map(children, (child, index)=>{
        if (!/*#__PURE__*/ react.isValidElement(child)) {
            return;
        }
        if (false) {}
        if (!child.props.disabled) {
            if (variant === 'selectedMenu' && child.props.selected) {
                activeItemIndex = index;
            } else if (activeItemIndex === -1) {
                activeItemIndex = index;
            }
        }
    });
    const externalForwardedProps = {
        slots,
        slotProps: {
            list: MenuListProps,
            transition: TransitionProps,
            paper: PaperProps,
            ...slotProps
        }
    };
    const rootSlotProps = (0,useSlotProps/* default */.A)({
        elementType: slots.root,
        externalSlotProps: slotProps.root,
        ownerState,
        className: [
            classes.root,
            className
        ]
    });
    const [PaperSlot, paperSlotProps] = (0,useSlot/* default */.A)('paper', {
        className: classes.paper,
        elementType: MenuPaper,
        externalForwardedProps,
        shouldForwardComponentProp: true,
        ownerState
    });
    const [ListSlot, listSlotProps] = (0,useSlot/* default */.A)('list', {
        className: (0,clsx/* default */.A)(classes.list, MenuListProps.className),
        elementType: MenuMenuList,
        shouldForwardComponentProp: true,
        externalForwardedProps,
        getSlotProps: (handlers)=>({
                ...handlers,
                onKeyDown: (event)=>{
                    var _handlers_onKeyDown;
                    handleListKeyDown(event);
                    (_handlers_onKeyDown = handlers.onKeyDown) === null || _handlers_onKeyDown === void 0 ? void 0 : _handlers_onKeyDown.call(handlers, event);
                }
            }),
        ownerState
    });
    const resolvedTransitionProps = typeof externalForwardedProps.slotProps.transition === 'function' ? externalForwardedProps.slotProps.transition(ownerState) : externalForwardedProps.slotProps.transition;
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(MenuRoot, {
        onClose: onClose,
        anchorOrigin: {
            vertical: 'bottom',
            horizontal: isRtl ? 'right' : 'left'
        },
        transformOrigin: isRtl ? RTL_ORIGIN : LTR_ORIGIN,
        slots: {
            root: slots.root,
            paper: PaperSlot,
            backdrop: slots.backdrop,
            ...slots.transition && {
                // TODO: pass `slots.transition` directly once `TransitionComponent` is removed from Popover
                transition: slots.transition
            }
        },
        slotProps: {
            root: rootSlotProps,
            paper: paperSlotProps,
            backdrop: typeof slotProps.backdrop === 'function' ? slotProps.backdrop(ownerState) : slotProps.backdrop,
            transition: {
                ...resolvedTransitionProps,
                onEntering: function() {
                    for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++){
                        args[_key] = arguments[_key];
                    }
                    var _resolvedTransitionProps_onEntering;
                    handleEntering(...args);
                    resolvedTransitionProps === null || resolvedTransitionProps === void 0 ? void 0 : (_resolvedTransitionProps_onEntering = resolvedTransitionProps.onEntering) === null || _resolvedTransitionProps_onEntering === void 0 ? void 0 : _resolvedTransitionProps_onEntering.call(resolvedTransitionProps, ...args);
                }
            }
        },
        open: open,
        ref: ref,
        transitionDuration: transitionDuration,
        ownerState: ownerState,
        ...other,
        classes: PopoverClasses,
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(ListSlot, {
            actions: menuListActionsRef,
            autoFocus: autoFocus && (activeItemIndex === -1 || disableAutoFocusItem),
            autoFocusItem: autoFocusItem,
            variant: variant,
            ...listSlotProps,
            children: children
        })
    });
});
 false ? 0 : void 0;
/* harmony default export */ const Menu_Menu = (Menu);


/***/ }),

/***/ 44729:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ Modal_Modal)
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/react@19.1.0/node_modules/react/index.js
var react = __webpack_require__(94285);
// EXTERNAL MODULE: ../../node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs
var clsx = __webpack_require__(3638);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+utils@6.4.9_@types+react@19.1.8_react@19.1.0/node_modules/@mui/utils/esm/composeClasses/composeClasses.js
var composeClasses = __webpack_require__(95116);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+utils@6.4.9_@types+react@19.1.8_react@19.1.0/node_modules/@mui/utils/esm/useForkRef/useForkRef.js
var useForkRef = __webpack_require__(16316);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+utils@6.4.9_@types+react@19.1.8_react@19.1.0/node_modules/@mui/utils/esm/getReactElementRef/getReactElementRef.js
var getReactElementRef = __webpack_require__(43552);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+utils@6.4.9_@types+react@19.1.8_react@19.1.0/node_modules/@mui/utils/esm/ownerDocument/ownerDocument.js
var ownerDocument = __webpack_require__(48770);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react@19.1.0/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(94513);
;// ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/Unstable_TrapFocus/FocusTrap.js
/* __next_internal_client_entry_do_not_use__ default auto */ /* eslint-disable consistent-return, jsx-a11y/no-noninteractive-tabindex */ 



// Inspired by https://github.com/focus-trap/tabbable
const candidatesSelector = [
    'input',
    'select',
    'textarea',
    'a[href]',
    'button',
    '[tabindex]',
    'audio[controls]',
    'video[controls]',
    '[contenteditable]:not([contenteditable="false"])'
].join(',');
function getTabIndex(node) {
    const tabindexAttr = parseInt(node.getAttribute('tabindex') || '', 10);
    if (!Number.isNaN(tabindexAttr)) {
        return tabindexAttr;
    }
    // Browsers do not return `tabIndex` correctly for contentEditable nodes;
    // https://issues.chromium.org/issues/41283952
    // so if they don't have a tabindex attribute specifically set, assume it's 0.
    // in Chrome, <details/>, <audio controls/> and <video controls/> elements get a default
    //  `tabIndex` of -1 when the 'tabindex' attribute isn't specified in the DOM,
    //  yet they are still part of the regular tab order; in FF, they get a default
    //  `tabIndex` of 0; since Chrome still puts those elements in the regular tab
    //  order, consider their tab index to be 0.
    if (node.contentEditable === 'true' || (node.nodeName === 'AUDIO' || node.nodeName === 'VIDEO' || node.nodeName === 'DETAILS') && node.getAttribute('tabindex') === null) {
        return 0;
    }
    return node.tabIndex;
}
function isNonTabbableRadio(node) {
    if (node.tagName !== 'INPUT' || node.type !== 'radio') {
        return false;
    }
    if (!node.name) {
        return false;
    }
    const getRadio = (selector)=>node.ownerDocument.querySelector('input[type="radio"]'.concat(selector));
    let roving = getRadio('[name="'.concat(node.name, '"]:checked'));
    if (!roving) {
        roving = getRadio('[name="'.concat(node.name, '"]'));
    }
    return roving !== node;
}
function isNodeMatchingSelectorFocusable(node) {
    if (node.disabled || node.tagName === 'INPUT' && node.type === 'hidden' || isNonTabbableRadio(node)) {
        return false;
    }
    return true;
}
function defaultGetTabbable(root) {
    const regularTabNodes = [];
    const orderedTabNodes = [];
    Array.from(root.querySelectorAll(candidatesSelector)).forEach((node, i)=>{
        const nodeTabIndex = getTabIndex(node);
        if (nodeTabIndex === -1 || !isNodeMatchingSelectorFocusable(node)) {
            return;
        }
        if (nodeTabIndex === 0) {
            regularTabNodes.push(node);
        } else {
            orderedTabNodes.push({
                documentOrder: i,
                tabIndex: nodeTabIndex,
                node: node
            });
        }
    });
    return orderedTabNodes.sort((a, b)=>a.tabIndex === b.tabIndex ? a.documentOrder - b.documentOrder : a.tabIndex - b.tabIndex).map((a)=>a.node).concat(regularTabNodes);
}
function defaultIsEnabled() {
    return true;
}
/**
 * @ignore - internal component.
 */ function FocusTrap(props) {
    const { children, disableAutoFocus = false, disableEnforceFocus = false, disableRestoreFocus = false, getTabbable = defaultGetTabbable, isEnabled = defaultIsEnabled, open } = props;
    const ignoreNextEnforceFocus = react.useRef(false);
    const sentinelStart = react.useRef(null);
    const sentinelEnd = react.useRef(null);
    const nodeToRestore = react.useRef(null);
    const reactFocusEventTarget = react.useRef(null);
    // This variable is useful when disableAutoFocus is true.
    // It waits for the active element to move into the component to activate.
    const activated = react.useRef(false);
    const rootRef = react.useRef(null);
    const handleRef = (0,useForkRef/* default */.A)((0,getReactElementRef/* default */.A)(children), rootRef);
    const lastKeydown = react.useRef(null);
    react.useEffect(()=>{
        // We might render an empty child.
        if (!open || !rootRef.current) {
            return;
        }
        activated.current = !disableAutoFocus;
    }, [
        disableAutoFocus,
        open
    ]);
    react.useEffect(()=>{
        // We might render an empty child.
        if (!open || !rootRef.current) {
            return;
        }
        const doc = (0,ownerDocument/* default */.A)(rootRef.current);
        if (!rootRef.current.contains(doc.activeElement)) {
            if (!rootRef.current.hasAttribute('tabIndex')) {
                if (false) {}
                rootRef.current.setAttribute('tabIndex', '-1');
            }
            if (activated.current) {
                rootRef.current.focus();
            }
        }
        return ()=>{
            // restoreLastFocus()
            if (!disableRestoreFocus) {
                // In IE11 it is possible for document.activeElement to be null resulting
                // in nodeToRestore.current being null.
                // Not all elements in IE11 have a focus method.
                // Once IE11 support is dropped the focus() call can be unconditional.
                if (nodeToRestore.current && nodeToRestore.current.focus) {
                    ignoreNextEnforceFocus.current = true;
                    nodeToRestore.current.focus();
                }
                nodeToRestore.current = null;
            }
        };
    // Missing `disableRestoreFocus` which is fine.
    // We don't support changing that prop on an open FocusTrap
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [
        open
    ]);
    react.useEffect(()=>{
        // We might render an empty child.
        if (!open || !rootRef.current) {
            return;
        }
        const doc = (0,ownerDocument/* default */.A)(rootRef.current);
        const loopFocus = (nativeEvent)=>{
            lastKeydown.current = nativeEvent;
            if (disableEnforceFocus || !isEnabled() || nativeEvent.key !== 'Tab') {
                return;
            }
            // Make sure the next tab starts from the right place.
            // doc.activeElement refers to the origin.
            if (doc.activeElement === rootRef.current && nativeEvent.shiftKey) {
                // We need to ignore the next contain as
                // it will try to move the focus back to the rootRef element.
                ignoreNextEnforceFocus.current = true;
                if (sentinelEnd.current) {
                    sentinelEnd.current.focus();
                }
            }
        };
        const contain = ()=>{
            const rootElement = rootRef.current;
            // Cleanup functions are executed lazily in React 17.
            // Contain can be called between the component being unmounted and its cleanup function being run.
            if (rootElement === null) {
                return;
            }
            if (!doc.hasFocus() || !isEnabled() || ignoreNextEnforceFocus.current) {
                ignoreNextEnforceFocus.current = false;
                return;
            }
            // The focus is already inside
            if (rootElement.contains(doc.activeElement)) {
                return;
            }
            // The disableEnforceFocus is set and the focus is outside of the focus trap (and sentinel nodes)
            if (disableEnforceFocus && doc.activeElement !== sentinelStart.current && doc.activeElement !== sentinelEnd.current) {
                return;
            }
            // if the focus event is not coming from inside the children's react tree, reset the refs
            if (doc.activeElement !== reactFocusEventTarget.current) {
                reactFocusEventTarget.current = null;
            } else if (reactFocusEventTarget.current !== null) {
                return;
            }
            if (!activated.current) {
                return;
            }
            let tabbable = [];
            if (doc.activeElement === sentinelStart.current || doc.activeElement === sentinelEnd.current) {
                tabbable = getTabbable(rootRef.current);
            }
            // one of the sentinel nodes was focused, so move the focus
            // to the first/last tabbable element inside the focus trap
            if (tabbable.length > 0) {
                var _lastKeydown_current, _lastKeydown_current1;
                const isShiftTab = Boolean(((_lastKeydown_current = lastKeydown.current) === null || _lastKeydown_current === void 0 ? void 0 : _lastKeydown_current.shiftKey) && ((_lastKeydown_current1 = lastKeydown.current) === null || _lastKeydown_current1 === void 0 ? void 0 : _lastKeydown_current1.key) === 'Tab');
                const focusNext = tabbable[0];
                const focusPrevious = tabbable[tabbable.length - 1];
                if (typeof focusNext !== 'string' && typeof focusPrevious !== 'string') {
                    if (isShiftTab) {
                        focusPrevious.focus();
                    } else {
                        focusNext.focus();
                    }
                }
            // no tabbable elements in the trap focus or the focus was outside of the focus trap
            } else {
                rootElement.focus();
            }
        };
        doc.addEventListener('focusin', contain);
        doc.addEventListener('keydown', loopFocus, true);
        // With Edge, Safari and Firefox, no focus related events are fired when the focused area stops being a focused area.
        // for example https://bugzilla.mozilla.org/show_bug.cgi?id=559561.
        // Instead, we can look if the active element was restored on the BODY element.
        //
        // The whatwg spec defines how the browser should behave but does not explicitly mention any events:
        // https://html.spec.whatwg.org/multipage/interaction.html#focus-fixup-rule.
        const interval = setInterval(()=>{
            if (doc.activeElement && doc.activeElement.tagName === 'BODY') {
                contain();
            }
        }, 50);
        return ()=>{
            clearInterval(interval);
            doc.removeEventListener('focusin', contain);
            doc.removeEventListener('keydown', loopFocus, true);
        };
    }, [
        disableAutoFocus,
        disableEnforceFocus,
        disableRestoreFocus,
        isEnabled,
        open,
        getTabbable
    ]);
    const onFocus = (event)=>{
        if (nodeToRestore.current === null) {
            nodeToRestore.current = event.relatedTarget;
        }
        activated.current = true;
        reactFocusEventTarget.current = event.target;
        const childrenPropsHandler = children.props.onFocus;
        if (childrenPropsHandler) {
            childrenPropsHandler(event);
        }
    };
    const handleFocusSentinel = (event)=>{
        if (nodeToRestore.current === null) {
            nodeToRestore.current = event.relatedTarget;
        }
        activated.current = true;
    };
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(react.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                tabIndex: open ? 0 : -1,
                onFocus: handleFocusSentinel,
                ref: sentinelStart,
                "data-testid": "sentinelStart"
            }),
            /*#__PURE__*/ react.cloneElement(children, {
                ref: handleRef,
                onFocus
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                tabIndex: open ? 0 : -1,
                onFocus: handleFocusSentinel,
                ref: sentinelEnd,
                "data-testid": "sentinelEnd"
            })
        ]
    });
}
 false ? 0 : void 0;
if (false) {}
/* harmony default export */ const Unstable_TrapFocus_FocusTrap = (FocusTrap);

// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/Portal/Portal.js + 1 modules
var Portal = __webpack_require__(45009);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/styles/styled.js
var styled = __webpack_require__(64624);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/utils/memoTheme.js + 1 modules
var memoTheme = __webpack_require__(10355);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/DefaultPropsProvider/DefaultPropsProvider.js
var DefaultPropsProvider = __webpack_require__(79209);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/Backdrop/Backdrop.js + 1 modules
var Backdrop = __webpack_require__(86807);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+utils@6.4.9_@types+react@19.1.8_react@19.1.0/node_modules/@mui/utils/esm/useEventCallback/useEventCallback.js
var useEventCallback = __webpack_require__(43804);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+utils@6.4.9_@types+react@19.1.8_react@19.1.0/node_modules/@mui/utils/esm/createChainedFunction/createChainedFunction.js
var createChainedFunction = __webpack_require__(85366);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+utils@6.4.9_@types+react@19.1.8_react@19.1.0/node_modules/@mui/utils/esm/extractEventHandlers/extractEventHandlers.js
var extractEventHandlers = __webpack_require__(79168);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+utils@6.4.9_@types+react@19.1.8_react@19.1.0/node_modules/@mui/utils/esm/ownerWindow/ownerWindow.js
var ownerWindow = __webpack_require__(15826);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+utils@6.4.9_@types+react@19.1.8_react@19.1.0/node_modules/@mui/utils/esm/getScrollbarSize/getScrollbarSize.js
var getScrollbarSize = __webpack_require__(22226);
;// ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/Modal/ModalManager.js

// Is a vertical scrollbar displayed?
function isOverflowing(container) {
    const doc = (0,ownerDocument/* default */.A)(container);
    if (doc.body === container) {
        return (0,ownerWindow/* default */.A)(container).innerWidth > doc.documentElement.clientWidth;
    }
    return container.scrollHeight > container.clientHeight;
}
function ariaHidden(element, hide) {
    if (hide) {
        element.setAttribute('aria-hidden', 'true');
    } else {
        element.removeAttribute('aria-hidden');
    }
}
function getPaddingRight(element) {
    return parseInt((0,ownerWindow/* default */.A)(element).getComputedStyle(element).paddingRight, 10) || 0;
}
function isAriaHiddenForbiddenOnElement(element) {
    // The forbidden HTML tags are the ones from ARIA specification that
    // can be children of body and can't have aria-hidden attribute.
    // cf. https://www.w3.org/TR/html-aria/#docconformance
    const forbiddenTagNames = [
        'TEMPLATE',
        'SCRIPT',
        'STYLE',
        'LINK',
        'MAP',
        'META',
        'NOSCRIPT',
        'PICTURE',
        'COL',
        'COLGROUP',
        'PARAM',
        'SLOT',
        'SOURCE',
        'TRACK'
    ];
    const isForbiddenTagName = forbiddenTagNames.includes(element.tagName);
    const isInputHidden = element.tagName === 'INPUT' && element.getAttribute('type') === 'hidden';
    return isForbiddenTagName || isInputHidden;
}
function ariaHiddenSiblings(container, mountElement, currentElement, elementsToExclude, hide) {
    const blacklist = [
        mountElement,
        currentElement,
        ...elementsToExclude
    ];
    [].forEach.call(container.children, (element)=>{
        const isNotExcludedElement = !blacklist.includes(element);
        const isNotForbiddenElement = !isAriaHiddenForbiddenOnElement(element);
        if (isNotExcludedElement && isNotForbiddenElement) {
            ariaHidden(element, hide);
        }
    });
}
function findIndexOf(items, callback) {
    let idx = -1;
    items.some((item, index)=>{
        if (callback(item)) {
            idx = index;
            return true;
        }
        return false;
    });
    return idx;
}
function handleContainer(containerInfo, props) {
    const restoreStyle = [];
    const container = containerInfo.container;
    if (!props.disableScrollLock) {
        if (isOverflowing(container)) {
            // Compute the size before applying overflow hidden to avoid any scroll jumps.
            const scrollbarSize = (0,getScrollbarSize/* default */.A)((0,ownerWindow/* default */.A)(container));
            restoreStyle.push({
                value: container.style.paddingRight,
                property: 'padding-right',
                el: container
            });
            // Use computed style, here to get the real padding to add our scrollbar width.
            container.style.paddingRight = "".concat(getPaddingRight(container) + scrollbarSize, "px");
            // .mui-fixed is a global helper.
            const fixedElements = (0,ownerDocument/* default */.A)(container).querySelectorAll('.mui-fixed');
            [].forEach.call(fixedElements, (element)=>{
                restoreStyle.push({
                    value: element.style.paddingRight,
                    property: 'padding-right',
                    el: element
                });
                element.style.paddingRight = "".concat(getPaddingRight(element) + scrollbarSize, "px");
            });
        }
        let scrollContainer;
        if (container.parentNode instanceof DocumentFragment) {
            scrollContainer = (0,ownerDocument/* default */.A)(container).body;
        } else {
            // Support html overflow-y: auto for scroll stability between pages
            // https://css-tricks.com/snippets/css/force-vertical-scrollbar/
            const parent = container.parentElement;
            const containerWindow = (0,ownerWindow/* default */.A)(container);
            scrollContainer = (parent === null || parent === void 0 ? void 0 : parent.nodeName) === 'HTML' && containerWindow.getComputedStyle(parent).overflowY === 'scroll' ? parent : container;
        }
        // Block the scroll even if no scrollbar is visible to account for mobile keyboard
        // screensize shrink.
        restoreStyle.push({
            value: scrollContainer.style.overflow,
            property: 'overflow',
            el: scrollContainer
        }, {
            value: scrollContainer.style.overflowX,
            property: 'overflow-x',
            el: scrollContainer
        }, {
            value: scrollContainer.style.overflowY,
            property: 'overflow-y',
            el: scrollContainer
        });
        scrollContainer.style.overflow = 'hidden';
    }
    const restore = ()=>{
        restoreStyle.forEach((param)=>{
            let { value, el, property } = param;
            if (value) {
                el.style.setProperty(property, value);
            } else {
                el.style.removeProperty(property);
            }
        });
    };
    return restore;
}
function getHiddenSiblings(container) {
    const hiddenSiblings = [];
    [].forEach.call(container.children, (element)=>{
        if (element.getAttribute('aria-hidden') === 'true') {
            hiddenSiblings.push(element);
        }
    });
    return hiddenSiblings;
}
/**
 * @ignore - do not document.
 *
 * Proper state management for containers and the modals in those containers.
 * Simplified, but inspired by react-overlay's ModalManager class.
 * Used by the Modal to ensure proper styling of containers.
 */ class ModalManager {
    add(modal, container) {
        let modalIndex = this.modals.indexOf(modal);
        if (modalIndex !== -1) {
            return modalIndex;
        }
        modalIndex = this.modals.length;
        this.modals.push(modal);
        // If the modal we are adding is already in the DOM.
        if (modal.modalRef) {
            ariaHidden(modal.modalRef, false);
        }
        const hiddenSiblings = getHiddenSiblings(container);
        ariaHiddenSiblings(container, modal.mount, modal.modalRef, hiddenSiblings, true);
        const containerIndex = findIndexOf(this.containers, (item)=>item.container === container);
        if (containerIndex !== -1) {
            this.containers[containerIndex].modals.push(modal);
            return modalIndex;
        }
        this.containers.push({
            modals: [
                modal
            ],
            container,
            restore: null,
            hiddenSiblings
        });
        return modalIndex;
    }
    mount(modal, props) {
        const containerIndex = findIndexOf(this.containers, (item)=>item.modals.includes(modal));
        const containerInfo = this.containers[containerIndex];
        if (!containerInfo.restore) {
            containerInfo.restore = handleContainer(containerInfo, props);
        }
    }
    remove(modal) {
        let ariaHiddenState = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : true;
        const modalIndex = this.modals.indexOf(modal);
        if (modalIndex === -1) {
            return modalIndex;
        }
        const containerIndex = findIndexOf(this.containers, (item)=>item.modals.includes(modal));
        const containerInfo = this.containers[containerIndex];
        containerInfo.modals.splice(containerInfo.modals.indexOf(modal), 1);
        this.modals.splice(modalIndex, 1);
        // If that was the last modal in a container, clean up the container.
        if (containerInfo.modals.length === 0) {
            // The modal might be closed before it had the chance to be mounted in the DOM.
            if (containerInfo.restore) {
                containerInfo.restore();
            }
            if (modal.modalRef) {
                // In case the modal wasn't in the DOM yet.
                ariaHidden(modal.modalRef, ariaHiddenState);
            }
            ariaHiddenSiblings(containerInfo.container, modal.mount, modal.modalRef, containerInfo.hiddenSiblings, false);
            this.containers.splice(containerIndex, 1);
        } else {
            // Otherwise make sure the next top modal is visible to a screen reader.
            const nextTop = containerInfo.modals[containerInfo.modals.length - 1];
            // as soon as a modal is adding its modalRef is undefined. it can't set
            // aria-hidden because the dom element doesn't exist either
            // when modal was unmounted before modalRef gets null
            if (nextTop.modalRef) {
                ariaHidden(nextTop.modalRef, false);
            }
        }
        return modalIndex;
    }
    isTopModal(modal) {
        return this.modals.length > 0 && this.modals[this.modals.length - 1] === modal;
    }
    constructor(){
        this.modals = [];
        this.containers = [];
    }
}

;// ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/Modal/useModal.js
/* __next_internal_client_entry_do_not_use__ default auto */ 



function getContainer(container) {
    return typeof container === 'function' ? container() : container;
}
function getHasTransition(children) {
    return children ? children.props.hasOwnProperty('in') : false;
}
const noop = ()=>{};
// A modal manager used to track and manage the state of open Modals.
// Modals don't open on the server so this won't conflict with concurrent requests.
const manager = new ModalManager();
/**
 *
 * Demos:
 *
 * - [Modal](https://mui.com/base-ui/react-modal/#hook)
 *
 * API:
 *
 * - [useModal API](https://mui.com/base-ui/react-modal/hooks-api/#use-modal)
 */ function useModal(parameters) {
    const { container, disableEscapeKeyDown = false, disableScrollLock = false, closeAfterTransition = false, onTransitionEnter, onTransitionExited, children, onClose, open, rootRef } = parameters;
    // @ts-ignore internal logic
    const modal = react.useRef({});
    const mountNodeRef = react.useRef(null);
    const modalRef = react.useRef(null);
    const handleRef = (0,useForkRef/* default */.A)(modalRef, rootRef);
    const [exited, setExited] = react.useState(!open);
    const hasTransition = getHasTransition(children);
    let ariaHiddenProp = true;
    if (parameters['aria-hidden'] === 'false' || parameters['aria-hidden'] === false) {
        ariaHiddenProp = false;
    }
    const getDoc = ()=>(0,ownerDocument/* default */.A)(mountNodeRef.current);
    const getModal = ()=>{
        modal.current.modalRef = modalRef.current;
        modal.current.mount = mountNodeRef.current;
        return modal.current;
    };
    const handleMounted = ()=>{
        manager.mount(getModal(), {
            disableScrollLock
        });
        // Fix a bug on Chrome where the scroll isn't initially 0.
        if (modalRef.current) {
            modalRef.current.scrollTop = 0;
        }
    };
    const handleOpen = (0,useEventCallback/* default */.A)(()=>{
        const resolvedContainer = getContainer(container) || getDoc().body;
        manager.add(getModal(), resolvedContainer);
        // The element was already mounted.
        if (modalRef.current) {
            handleMounted();
        }
    });
    const isTopModal = ()=>manager.isTopModal(getModal());
    const handlePortalRef = (0,useEventCallback/* default */.A)((node)=>{
        mountNodeRef.current = node;
        if (!node) {
            return;
        }
        if (open && isTopModal()) {
            handleMounted();
        } else if (modalRef.current) {
            ariaHidden(modalRef.current, ariaHiddenProp);
        }
    });
    const handleClose = react.useCallback(()=>{
        manager.remove(getModal(), ariaHiddenProp);
    }, [
        ariaHiddenProp
    ]);
    react.useEffect(()=>{
        return ()=>{
            handleClose();
        };
    }, [
        handleClose
    ]);
    react.useEffect(()=>{
        if (open) {
            handleOpen();
        } else if (!hasTransition || !closeAfterTransition) {
            handleClose();
        }
    }, [
        open,
        handleClose,
        hasTransition,
        closeAfterTransition,
        handleOpen
    ]);
    const createHandleKeyDown = (otherHandlers)=>(event)=>{
            var _otherHandlers_onKeyDown;
            (_otherHandlers_onKeyDown = otherHandlers.onKeyDown) === null || _otherHandlers_onKeyDown === void 0 ? void 0 : _otherHandlers_onKeyDown.call(otherHandlers, event);
            // The handler doesn't take event.defaultPrevented into account:
            //
            // event.preventDefault() is meant to stop default behaviors like
            // clicking a checkbox to check it, hitting a button to submit a form,
            // and hitting left arrow to move the cursor in a text input etc.
            // Only special HTML elements have these default behaviors.
            if (event.key !== 'Escape' || event.which === 229 || // Wait until IME is settled.
            !isTopModal()) {
                return;
            }
            if (!disableEscapeKeyDown) {
                // Swallow the event, in case someone is listening for the escape key on the body.
                event.stopPropagation();
                if (onClose) {
                    onClose(event, 'escapeKeyDown');
                }
            }
        };
    const createHandleBackdropClick = (otherHandlers)=>(event)=>{
            var _otherHandlers_onClick;
            (_otherHandlers_onClick = otherHandlers.onClick) === null || _otherHandlers_onClick === void 0 ? void 0 : _otherHandlers_onClick.call(otherHandlers, event);
            if (event.target !== event.currentTarget) {
                return;
            }
            if (onClose) {
                onClose(event, 'backdropClick');
            }
        };
    const getRootProps = function() {
        let otherHandlers = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
        const propsEventHandlers = (0,extractEventHandlers/* default */.A)(parameters);
        // The custom event handlers shouldn't be spread on the root element
        delete propsEventHandlers.onTransitionEnter;
        delete propsEventHandlers.onTransitionExited;
        const externalEventHandlers = {
            ...propsEventHandlers,
            ...otherHandlers
        };
        return {
            /*
       * Marking an element with the role presentation indicates to assistive technology
       * that this element should be ignored; it exists to support the web application and
       * is not meant for humans to interact with directly.
       * https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/no-static-element-interactions.md
       */ role: 'presentation',
            ...externalEventHandlers,
            onKeyDown: createHandleKeyDown(externalEventHandlers),
            ref: handleRef
        };
    };
    const getBackdropProps = function() {
        let otherHandlers = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
        const externalEventHandlers = otherHandlers;
        return {
            'aria-hidden': true,
            ...externalEventHandlers,
            onClick: createHandleBackdropClick(externalEventHandlers),
            open
        };
    };
    const getTransitionProps = ()=>{
        const handleEnter = ()=>{
            setExited(false);
            if (onTransitionEnter) {
                onTransitionEnter();
            }
        };
        const handleExited = ()=>{
            setExited(true);
            if (onTransitionExited) {
                onTransitionExited();
            }
            if (closeAfterTransition) {
                handleClose();
            }
        };
        var _children_props_onEnter, _children_props_onExited;
        return {
            onEnter: (0,createChainedFunction/* default */.A)(handleEnter, (_children_props_onEnter = children === null || children === void 0 ? void 0 : children.props.onEnter) !== null && _children_props_onEnter !== void 0 ? _children_props_onEnter : noop),
            onExited: (0,createChainedFunction/* default */.A)(handleExited, (_children_props_onExited = children === null || children === void 0 ? void 0 : children.props.onExited) !== null && _children_props_onExited !== void 0 ? _children_props_onExited : noop)
        };
    };
    return {
        getRootProps,
        getBackdropProps,
        getTransitionProps,
        rootRef: handleRef,
        portalRef: handlePortalRef,
        isTopModal,
        exited,
        hasTransition
    };
}
/* harmony default export */ const Modal_useModal = (useModal);

// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+utils@6.4.9_@types+react@19.1.8_react@19.1.0/node_modules/@mui/utils/esm/generateUtilityClasses/generateUtilityClasses.js
var generateUtilityClasses = __webpack_require__(92186);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+utils@6.4.9_@types+react@19.1.8_react@19.1.0/node_modules/@mui/utils/esm/generateUtilityClass/generateUtilityClass.js
var generateUtilityClass = __webpack_require__(69014);
;// ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/Modal/modalClasses.js


function getModalUtilityClass(slot) {
    return (0,generateUtilityClass/* default */.Ay)('MuiModal', slot);
}
const modalClasses = (0,generateUtilityClasses/* default */.A)('MuiModal', [
    'root',
    'hidden',
    'backdrop'
]);
/* harmony default export */ const Modal_modalClasses = ((/* unused pure expression or super */ null && (modalClasses)));

// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/utils/useSlot.js
var useSlot = __webpack_require__(98005);
;// ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/Modal/Modal.js
/* __next_internal_client_entry_do_not_use__ default auto */ 















const useUtilityClasses = (ownerState)=>{
    const { open, exited, classes } = ownerState;
    const slots = {
        root: [
            'root',
            !open && exited && 'hidden'
        ],
        backdrop: [
            'backdrop'
        ]
    };
    return (0,composeClasses/* default */.A)(slots, getModalUtilityClass, classes);
};
const ModalRoot = (0,styled/* default */.Ay)('div', {
    name: 'MuiModal',
    slot: 'Root',
    overridesResolver: (props, styles)=>{
        const { ownerState } = props;
        return [
            styles.root,
            !ownerState.open && ownerState.exited && styles.hidden
        ];
    }
})((0,memoTheme/* default */.A)((param)=>{
    let { theme } = param;
    return {
        position: 'fixed',
        zIndex: (theme.vars || theme).zIndex.modal,
        right: 0,
        bottom: 0,
        top: 0,
        left: 0,
        variants: [
            {
                props: (param)=>{
                    let { ownerState } = param;
                    return !ownerState.open && ownerState.exited;
                },
                style: {
                    visibility: 'hidden'
                }
            }
        ]
    };
}));
const ModalBackdrop = (0,styled/* default */.Ay)(Backdrop/* default */.A, {
    name: 'MuiModal',
    slot: 'Backdrop',
    overridesResolver: (props, styles)=>{
        return styles.backdrop;
    }
})({
    zIndex: -1
});
/**
 * Modal is a lower-level construct that is leveraged by the following components:
 *
 * - [Dialog](/material-ui/api/dialog/)
 * - [Drawer](/material-ui/api/drawer/)
 * - [Menu](/material-ui/api/menu/)
 * - [Popover](/material-ui/api/popover/)
 *
 * If you are creating a modal dialog, you probably want to use the [Dialog](/material-ui/api/dialog/) component
 * rather than directly using Modal.
 *
 * This component shares many concepts with [react-overlays](https://react-bootstrap.github.io/react-overlays/#modals).
 */ const Modal = /*#__PURE__*/ react.forwardRef(function Modal(inProps, ref) {
    const props = (0,DefaultPropsProvider/* useDefaultProps */.b)({
        name: 'MuiModal',
        props: inProps
    });
    const { BackdropComponent = ModalBackdrop, BackdropProps, classes: classesProp, className, closeAfterTransition = false, children, container, component, components = {}, componentsProps = {}, disableAutoFocus = false, disableEnforceFocus = false, disableEscapeKeyDown = false, disablePortal = false, disableRestoreFocus = false, disableScrollLock = false, hideBackdrop = false, keepMounted = false, onBackdropClick, onClose, onTransitionEnter, onTransitionExited, open, slotProps = {}, slots = {}, // eslint-disable-next-line react/prop-types
    theme, ...other } = props;
    const propsWithDefaults = {
        ...props,
        closeAfterTransition,
        disableAutoFocus,
        disableEnforceFocus,
        disableEscapeKeyDown,
        disablePortal,
        disableRestoreFocus,
        disableScrollLock,
        hideBackdrop,
        keepMounted
    };
    const { getRootProps, getBackdropProps, getTransitionProps, portalRef, isTopModal, exited, hasTransition } = Modal_useModal({
        ...propsWithDefaults,
        rootRef: ref
    });
    const ownerState = {
        ...propsWithDefaults,
        exited
    };
    const classes = useUtilityClasses(ownerState);
    const childProps = {};
    if (children.props.tabIndex === undefined) {
        childProps.tabIndex = '-1';
    }
    // It's a Transition like component
    if (hasTransition) {
        const { onEnter, onExited } = getTransitionProps();
        childProps.onEnter = onEnter;
        childProps.onExited = onExited;
    }
    const externalForwardedProps = {
        slots: {
            root: components.Root,
            backdrop: components.Backdrop,
            ...slots
        },
        slotProps: {
            ...componentsProps,
            ...slotProps
        }
    };
    const [RootSlot, rootProps] = (0,useSlot/* default */.A)('root', {
        ref,
        elementType: ModalRoot,
        externalForwardedProps: {
            ...externalForwardedProps,
            ...other,
            component
        },
        getSlotProps: getRootProps,
        ownerState,
        className: (0,clsx/* default */.A)(className, classes === null || classes === void 0 ? void 0 : classes.root, !ownerState.open && ownerState.exited && (classes === null || classes === void 0 ? void 0 : classes.hidden))
    });
    const [BackdropSlot, backdropProps] = (0,useSlot/* default */.A)('backdrop', {
        ref: BackdropProps === null || BackdropProps === void 0 ? void 0 : BackdropProps.ref,
        elementType: BackdropComponent,
        externalForwardedProps,
        shouldForwardComponentProp: true,
        additionalProps: BackdropProps,
        getSlotProps: (otherHandlers)=>{
            return getBackdropProps({
                ...otherHandlers,
                onClick: (event)=>{
                    if (onBackdropClick) {
                        onBackdropClick(event);
                    }
                    if (otherHandlers === null || otherHandlers === void 0 ? void 0 : otherHandlers.onClick) {
                        otherHandlers.onClick(event);
                    }
                }
            });
        },
        className: (0,clsx/* default */.A)(BackdropProps === null || BackdropProps === void 0 ? void 0 : BackdropProps.className, classes === null || classes === void 0 ? void 0 : classes.backdrop),
        ownerState
    });
    if (!keepMounted && !open && (!hasTransition || exited)) {
        return null;
    }
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(Portal/* default */.A, {
        ref: portalRef,
        container: container,
        disablePortal: disablePortal,
        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(RootSlot, {
            ...rootProps,
            children: [
                !hideBackdrop && BackdropComponent ? /*#__PURE__*/ (0,jsx_runtime.jsx)(BackdropSlot, {
                    ...backdropProps
                }) : null,
                /*#__PURE__*/ (0,jsx_runtime.jsx)(Unstable_TrapFocus_FocusTrap, {
                    disableEnforceFocus: disableEnforceFocus,
                    disableAutoFocus: disableAutoFocus,
                    disableRestoreFocus: disableRestoreFocus,
                    isEnabled: isTopModal,
                    open: open,
                    children: /*#__PURE__*/ react.cloneElement(children, childProps)
                })
            ]
        })
    });
});
 false ? 0 : void 0;
/* harmony default export */ const Modal_Modal = (Modal);


/***/ }),

/***/ 45009:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ Portal_Portal)
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/react@19.1.0/node_modules/react/index.js
var react = __webpack_require__(94285);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react-dom@19.1.0_react@19.1.0/node_modules/react-dom/index.js
var react_dom = __webpack_require__(95088);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+utils@6.4.9_@types+react@19.1.8_react@19.1.0/node_modules/@mui/utils/esm/useForkRef/useForkRef.js
var useForkRef = __webpack_require__(16316);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+utils@6.4.9_@types+react@19.1.8_react@19.1.0/node_modules/@mui/utils/esm/getReactElementRef/getReactElementRef.js
var getReactElementRef = __webpack_require__(43552);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+utils@6.4.9_@types+react@19.1.8_react@19.1.0/node_modules/@mui/utils/esm/useEnhancedEffect/useEnhancedEffect.js
var useEnhancedEffect = __webpack_require__(51142);
;// ../../node_modules/.pnpm/@mui+utils@6.4.9_@types+react@19.1.8_react@19.1.0/node_modules/@mui/utils/esm/setRef/setRef.js
/**
 * TODO v5: consider making it private
 *
 * passes {value} to {ref}
 *
 * WARNING: Be sure to only call this inside a callback that is passed as a ref.
 * Otherwise, make sure to cleanup the previous {ref} if it changes. See
 * https://github.com/mui/material-ui/issues/13539
 *
 * Useful if you want to expose the ref of an inner component to the public API
 * while still using it inside the component.
 * @param ref A ref callback or ref object. If anything falsy, this is a no-op.
 */
function setRef(ref, value) {
  if (typeof ref === 'function') {
    ref(value);
  } else if (ref) {
    ref.current = value;
  }
}
;// ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/Portal/Portal.js
/* __next_internal_client_entry_do_not_use__ default auto */ 



function getContainer(container) {
    return typeof container === 'function' ? container() : container;
}
/**
 * Portals provide a first-class way to render children into a DOM node
 * that exists outside the DOM hierarchy of the parent component.
 *
 * Demos:
 *
 * - [Portal](https://v6.mui.com/material-ui/react-portal/)
 *
 * API:
 *
 * - [Portal API](https://v6.mui.com/material-ui/api/portal/)
 */ const Portal = /*#__PURE__*/ react.forwardRef(function Portal(props, forwardedRef) {
    const { children, container, disablePortal = false } = props;
    const [mountNode, setMountNode] = react.useState(null);
    const handleRef = (0,useForkRef/* default */.A)(/*#__PURE__*/ react.isValidElement(children) ? (0,getReactElementRef/* default */.A)(children) : null, forwardedRef);
    (0,useEnhancedEffect/* default */.A)(()=>{
        if (!disablePortal) {
            setMountNode(getContainer(container) || document.body);
        }
    }, [
        container,
        disablePortal
    ]);
    (0,useEnhancedEffect/* default */.A)(()=>{
        if (mountNode && !disablePortal) {
            setRef(forwardedRef, mountNode);
            return ()=>{
                setRef(forwardedRef, null);
            };
        }
        return undefined;
    }, [
        forwardedRef,
        mountNode,
        disablePortal
    ]);
    if (disablePortal) {
        if (/*#__PURE__*/ react.isValidElement(children)) {
            const newProps = {
                ref: handleRef
            };
            return /*#__PURE__*/ react.cloneElement(children, newProps);
        }
        return children;
    }
    return mountNode ? /*#__PURE__*/ react_dom.createPortal(children, mountNode) : mountNode;
});
 false ? 0 : void 0;
if (false) {}
/* harmony default export */ const Portal_Portal = (Portal);


/***/ }),

/***/ 45640:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _mui_utils_ownerDocument__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(48770);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_mui_utils_ownerDocument__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A);


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

/***/ 86807:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ Backdrop_Backdrop)
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/react@19.1.0/node_modules/react/index.js
var react = __webpack_require__(94285);
// EXTERNAL MODULE: ../../node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs
var clsx = __webpack_require__(3638);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+utils@6.4.9_@types+react@19.1.8_react@19.1.0/node_modules/@mui/utils/esm/composeClasses/composeClasses.js
var composeClasses = __webpack_require__(95116);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/styles/styled.js
var styled = __webpack_require__(64624);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/DefaultPropsProvider/DefaultPropsProvider.js
var DefaultPropsProvider = __webpack_require__(79209);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/utils/useSlot.js
var useSlot = __webpack_require__(98005);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/Fade/Fade.js
var Fade = __webpack_require__(41837);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+utils@6.4.9_@types+react@19.1.8_react@19.1.0/node_modules/@mui/utils/esm/generateUtilityClasses/generateUtilityClasses.js
var generateUtilityClasses = __webpack_require__(92186);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+utils@6.4.9_@types+react@19.1.8_react@19.1.0/node_modules/@mui/utils/esm/generateUtilityClass/generateUtilityClass.js
var generateUtilityClass = __webpack_require__(69014);
;// ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/Backdrop/backdropClasses.js


function getBackdropUtilityClass(slot) {
    return (0,generateUtilityClass/* default */.Ay)('MuiBackdrop', slot);
}
const backdropClasses = (0,generateUtilityClasses/* default */.A)('MuiBackdrop', [
    'root',
    'invisible'
]);
/* harmony default export */ const Backdrop_backdropClasses = ((/* unused pure expression or super */ null && (backdropClasses)));

// EXTERNAL MODULE: ../../node_modules/.pnpm/react@19.1.0/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(94513);
;// ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/Backdrop/Backdrop.js
/* __next_internal_client_entry_do_not_use__ default auto */ 









const useUtilityClasses = (ownerState)=>{
    const { classes, invisible } = ownerState;
    const slots = {
        root: [
            'root',
            invisible && 'invisible'
        ]
    };
    return (0,composeClasses/* default */.A)(slots, getBackdropUtilityClass, classes);
};
const BackdropRoot = (0,styled/* default */.Ay)('div', {
    name: 'MuiBackdrop',
    slot: 'Root',
    overridesResolver: (props, styles)=>{
        const { ownerState } = props;
        return [
            styles.root,
            ownerState.invisible && styles.invisible
        ];
    }
})({
    position: 'fixed',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    right: 0,
    bottom: 0,
    top: 0,
    left: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    WebkitTapHighlightColor: 'transparent',
    variants: [
        {
            props: {
                invisible: true
            },
            style: {
                backgroundColor: 'transparent'
            }
        }
    ]
});
const Backdrop = /*#__PURE__*/ react.forwardRef(function Backdrop(inProps, ref) {
    const props = (0,DefaultPropsProvider/* useDefaultProps */.b)({
        props: inProps,
        name: 'MuiBackdrop'
    });
    const { children, className, component = 'div', invisible = false, open, components = {}, componentsProps = {}, slotProps = {}, slots = {}, TransitionComponent: TransitionComponentProp, transitionDuration, ...other } = props;
    const ownerState = {
        ...props,
        component,
        invisible
    };
    const classes = useUtilityClasses(ownerState);
    const backwardCompatibleSlots = {
        transition: TransitionComponentProp,
        root: components.Root,
        ...slots
    };
    const backwardCompatibleSlotProps = {
        ...componentsProps,
        ...slotProps
    };
    const externalForwardedProps = {
        slots: backwardCompatibleSlots,
        slotProps: backwardCompatibleSlotProps
    };
    const [RootSlot, rootProps] = (0,useSlot/* default */.A)('root', {
        elementType: BackdropRoot,
        externalForwardedProps,
        className: (0,clsx/* default */.A)(classes.root, className),
        ownerState
    });
    const [TransitionSlot, transitionProps] = (0,useSlot/* default */.A)('transition', {
        elementType: Fade/* default */.A,
        externalForwardedProps,
        ownerState
    });
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(TransitionSlot, {
        in: open,
        timeout: transitionDuration,
        ...other,
        ...transitionProps,
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(RootSlot, {
            "aria-hidden": true,
            ...rootProps,
            classes: classes,
            ref: ref,
            children: children
        })
    });
});
 false ? 0 : void 0;
/* harmony default export */ const Backdrop_Backdrop = (Backdrop);


/***/ }),

/***/ 90535:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ List_List)
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/react@19.1.0/node_modules/react/index.js
var react = __webpack_require__(94285);
// EXTERNAL MODULE: ../../node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs
var clsx = __webpack_require__(3638);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+utils@6.4.9_@types+react@19.1.8_react@19.1.0/node_modules/@mui/utils/esm/composeClasses/composeClasses.js
var composeClasses = __webpack_require__(95116);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/styles/styled.js
var styled = __webpack_require__(64624);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/DefaultPropsProvider/DefaultPropsProvider.js
var DefaultPropsProvider = __webpack_require__(79209);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/List/ListContext.js
var ListContext = __webpack_require__(5368);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+utils@6.4.9_@types+react@19.1.8_react@19.1.0/node_modules/@mui/utils/esm/generateUtilityClasses/generateUtilityClasses.js
var generateUtilityClasses = __webpack_require__(92186);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+utils@6.4.9_@types+react@19.1.8_react@19.1.0/node_modules/@mui/utils/esm/generateUtilityClass/generateUtilityClass.js
var generateUtilityClass = __webpack_require__(69014);
;// ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/List/listClasses.js


function getListUtilityClass(slot) {
    return (0,generateUtilityClass/* default */.Ay)('MuiList', slot);
}
const listClasses = (0,generateUtilityClasses/* default */.A)('MuiList', [
    'root',
    'padding',
    'dense',
    'subheader'
]);
/* harmony default export */ const List_listClasses = ((/* unused pure expression or super */ null && (listClasses)));

// EXTERNAL MODULE: ../../node_modules/.pnpm/react@19.1.0/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(94513);
;// ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/List/List.js
/* __next_internal_client_entry_do_not_use__ default auto */ 








const useUtilityClasses = (ownerState)=>{
    const { classes, disablePadding, dense, subheader } = ownerState;
    const slots = {
        root: [
            'root',
            !disablePadding && 'padding',
            dense && 'dense',
            subheader && 'subheader'
        ]
    };
    return (0,composeClasses/* default */.A)(slots, getListUtilityClass, classes);
};
const ListRoot = (0,styled/* default */.Ay)('ul', {
    name: 'MuiList',
    slot: 'Root',
    overridesResolver: (props, styles)=>{
        const { ownerState } = props;
        return [
            styles.root,
            !ownerState.disablePadding && styles.padding,
            ownerState.dense && styles.dense,
            ownerState.subheader && styles.subheader
        ];
    }
})({
    listStyle: 'none',
    margin: 0,
    padding: 0,
    position: 'relative',
    variants: [
        {
            props: (param)=>{
                let { ownerState } = param;
                return !ownerState.disablePadding;
            },
            style: {
                paddingTop: 8,
                paddingBottom: 8
            }
        },
        {
            props: (param)=>{
                let { ownerState } = param;
                return ownerState.subheader;
            },
            style: {
                paddingTop: 0
            }
        }
    ]
});
const List = /*#__PURE__*/ react.forwardRef(function List(inProps, ref) {
    const props = (0,DefaultPropsProvider/* useDefaultProps */.b)({
        props: inProps,
        name: 'MuiList'
    });
    const { children, className, component = 'ul', dense = false, disablePadding = false, subheader, ...other } = props;
    const context = react.useMemo(()=>({
            dense
        }), [
        dense
    ]);
    const ownerState = {
        ...props,
        component,
        dense,
        disablePadding
    };
    const classes = useUtilityClasses(ownerState);
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(ListContext/* default */.A.Provider, {
        value: context,
        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(ListRoot, {
            as: component,
            className: (0,clsx/* default */.A)(classes.root, className),
            ref: ref,
            ownerState: ownerState,
            ...other,
            children: [
                subheader,
                children
            ]
        })
    });
});
 false ? 0 : void 0;
/* harmony default export */ const List_List = (List);


/***/ }),

/***/ 93430:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _useForkRef_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(16316);
/* harmony import */ var _appendOwnerState_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6035);
/* harmony import */ var _mergeSlotProps_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3488);
/* harmony import */ var _resolveComponentProps_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(122);
'use client';





/**
 * @ignore - do not document.
 * Builds the props to be passed into the slot of an unstyled component.
 * It merges the internal props of the component with the ones supplied by the user, allowing to customize the behavior.
 * If the slot component is not a host component, it also merges in the `ownerState`.
 *
 * @param parameters.getSlotProps - A function that returns the props to be passed to the slot component.
 */
function useSlotProps(parameters) {
  const {
    elementType,
    externalSlotProps,
    ownerState,
    skipResolvingSlotProps = false,
    ...other
  } = parameters;
  const resolvedComponentsProps = skipResolvingSlotProps ? {} : (0,_resolveComponentProps_index_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)(externalSlotProps, ownerState);
  const {
    props: mergedProps,
    internalRef
  } = (0,_mergeSlotProps_index_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A)({
    ...other,
    externalSlotProps: resolvedComponentsProps
  });
  const ref = (0,_useForkRef_index_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A)(internalRef, resolvedComponentsProps?.ref, parameters.additionalProps?.ref);
  const props = (0,_appendOwnerState_index_js__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A)(elementType, {
    ...mergedProps,
    ref
  }, ownerState);
  return props;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useSlotProps);

/***/ }),

/***/ 98005:
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


/***/ })

}]);
//# sourceMappingURL=4380-be07307de6b635c3.js.map