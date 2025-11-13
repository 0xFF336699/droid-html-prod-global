(self["webpackChunk_N_E"] = self["webpackChunk_N_E"] || []).push([[2808],{

/***/ 15826:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ ownerWindow)
/* harmony export */ });
/* harmony import */ var _ownerDocument_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(48770);

function ownerWindow(node) {
  const doc = (0,_ownerDocument_index_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)(node);
  return doc.defaultView || window;
}

/***/ }),

/***/ 16394:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ExamplesScriptsPage)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(94513);
/* harmony import */ var _app_ui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(20939);
/* harmony import */ var _app_ui__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(93589);
/* harmony import */ var _src_components_navbar_NavBar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(32534);
/* harmony import */ var _src_components_page_examples_scripts_ExamplesScriptsContent__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(17558);
/* harmony import */ var _barrel_optimize_names_useTranslation_react_i18next__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9825);





function ExamplesScriptsPage() {
    const { t } = (0,_barrel_optimize_names_useTranslation_react_i18next__WEBPACK_IMPORTED_MODULE_3__/* .useTranslation */ .Bd)('homepage/pages/examples/scripts/content');
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_app_ui__WEBPACK_IMPORTED_MODULE_4__/* .AppShell */ .G, {
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_app_ui__WEBPACK_IMPORTED_MODULE_5__/* .TabbarContainer */ .y, {
            titleConf: {
                title: t('content.title')
            },
            navBar: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_src_components_navbar_NavBar__WEBPACK_IMPORTED_MODULE_1__/* .NavBar */ .j, {}),
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_src_components_page_examples_scripts_ExamplesScriptsContent__WEBPACK_IMPORTED_MODULE_2__/* .ExamplesScriptsContent */ .z, {})
        })
    });
}


/***/ }),

/***/ 41837:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(94285);
/* harmony import */ var _barrel_optimize_names_Transition_react_transition_group__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(73027);
/* harmony import */ var _mui_utils_getReactElementRef__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(43552);
/* harmony import */ var _zero_styled_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(38443);
/* harmony import */ var _transitions_utils_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(77810);
/* harmony import */ var _utils_useForkRef_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(71878);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(94513);
/* __next_internal_client_entry_do_not_use__ default auto */ 








const styles = {
    entering: {
        opacity: 1
    },
    entered: {
        opacity: 1
    }
};
/**
 * The Fade transition is used by the [Modal](/material-ui/react-modal/) component.
 * It uses [react-transition-group](https://github.com/reactjs/react-transition-group) internally.
 */ const Fade = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(function Fade(props, ref) {
    const theme = (0,_zero_styled_index_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A)();
    const defaultTimeout = {
        enter: theme.transitions.duration.enteringScreen,
        exit: theme.transitions.duration.leavingScreen
    };
    const { addEndListener, appear = true, children, easing, in: inProp, onEnter, onEntered, onEntering, onExit, onExited, onExiting, style, timeout = defaultTimeout, // eslint-disable-next-line react/prop-types
    TransitionComponent = _barrel_optimize_names_Transition_react_transition_group__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Ay, ...other } = props;
    const enableStrictModeCompat = true;
    const nodeRef = react__WEBPACK_IMPORTED_MODULE_0__.useRef(null);
    const handleRef = (0,_utils_useForkRef_js__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A)(nodeRef, (0,_mui_utils_getReactElementRef__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .A)(children), ref);
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
        (0,_transitions_utils_js__WEBPACK_IMPORTED_MODULE_6__/* .reflow */ .q)(node); // So the animation always start from the start.
        const transitionProps = (0,_transitions_utils_js__WEBPACK_IMPORTED_MODULE_6__/* .getTransitionProps */ .c)({
            style,
            timeout,
            easing
        }, {
            mode: 'enter'
        });
        node.style.webkitTransition = theme.transitions.create('opacity', transitionProps);
        node.style.transition = theme.transitions.create('opacity', transitionProps);
        if (onEnter) {
            onEnter(node, isAppearing);
        }
    });
    const handleEntered = normalizedTransitionCallback(onEntered);
    const handleExiting = normalizedTransitionCallback(onExiting);
    const handleExit = normalizedTransitionCallback((node)=>{
        const transitionProps = (0,_transitions_utils_js__WEBPACK_IMPORTED_MODULE_6__/* .getTransitionProps */ .c)({
            style,
            timeout,
            easing
        }, {
            mode: 'exit'
        });
        node.style.webkitTransition = theme.transitions.create('opacity', transitionProps);
        node.style.transition = theme.transitions.create('opacity', transitionProps);
        if (onExit) {
            onExit(node);
        }
    });
    const handleExited = normalizedTransitionCallback(onExited);
    const handleAddEndListener = (next)=>{
        if (addEndListener) {
            // Old call signature before `react-transition-group` implemented `nodeRef`
            addEndListener(nodeRef.current, next);
        }
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(TransitionComponent, {
        appear: appear,
        in: inProp,
        nodeRef: enableStrictModeCompat ? nodeRef : undefined,
        onEnter: handleEnter,
        onEntered: handleEntered,
        onEntering: handleEntering,
        onExit: handleExit,
        onExited: handleExited,
        onExiting: handleExiting,
        addEndListener: handleAddEndListener,
        timeout: timeout,
        ...other,
        children: (state, param)=>{
            let { ownerState, ...restChildProps } = param;
            return /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.cloneElement(children, {
                style: {
                    opacity: 0,
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Fade);


/***/ }),

/***/ 43552:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ getReactElementRef)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(94285);


/**
 * Returns the ref of a React element handling differences between React 19 and older versions.
 * It will throw runtime error if the element is not a valid React element.
 *
 * @param element React.ReactElement
 * @returns React.Ref<any> | null
 */
function getReactElementRef(element) {
  // 'ref' is passed as prop in React 19, whereas 'ref' is directly attached to children in older versions
  if (parseInt(react__WEBPACK_IMPORTED_MODULE_0__.version, 10) >= 19) {
    return element?.props?.ref || null;
  }
  // @ts-expect-error element.ref is not included in the ReactElement type
  // https://github.com/DefinitelyTyped/DefinitelyTyped/discussions/70189
  return element?.ref || null;
}

/***/ }),

/***/ 48770:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ ownerDocument)
/* harmony export */ });
function ownerDocument(node) {
  return node && node.ownerDocument || document;
}

/***/ }),

/***/ 77810:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   c: () => (/* binding */ getTransitionProps),
/* harmony export */   q: () => (/* binding */ reflow)
/* harmony export */ });
const reflow = (node)=>node.scrollTop;
function getTransitionProps(props, options) {
    const { timeout, easing, style = {} } = props;
    var _style_transitionDuration, _style_transitionTimingFunction;
    return {
        duration: (_style_transitionDuration = style.transitionDuration) !== null && _style_transitionDuration !== void 0 ? _style_transitionDuration : typeof timeout === 'number' ? timeout : timeout[options.mode] || 0,
        easing: (_style_transitionTimingFunction = style.transitionTimingFunction) !== null && _style_transitionTimingFunction !== void 0 ? _style_transitionTimingFunction : typeof easing === 'object' ? easing[options.mode] : easing,
        delay: style.transitionDelay
    };
}


/***/ }),

/***/ 90342:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {


    (window.__NEXT_P = window.__NEXT_P || []).push([
      "/examples/scripts",
      function () {
        return __webpack_require__(16394);
      }
    ]);
    if(false) {}
  

/***/ }),

/***/ 97878:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, [5352,4729,788,3685,5629,9170,889,3750,2316,8462,864,7558,636,6593,8792], () => (__webpack_exec__(90342)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ _N_E = __webpack_exports__;
/******/ }
]);
//# sourceMappingURL=scripts-2895a83f36a1f6f9.js.map