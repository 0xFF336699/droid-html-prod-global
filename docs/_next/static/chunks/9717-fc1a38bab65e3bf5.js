"use strict";
(self["webpackChunk_N_E"] = self["webpackChunk_N_E"] || []).push([[9717],{

/***/ 18531:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils_createSvgIcon_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(61541);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(94513);
/* __next_internal_client_entry_do_not_use__ default auto */ 

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_utils_createSvgIcon_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A)(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
    d: "M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4z"
}), 'Refresh'));


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

/***/ 45640:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _mui_utils_ownerDocument__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(48770);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_mui_utils_ownerDocument__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A);


/***/ }),

/***/ 53861:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ Tabs_Tabs)
});

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
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/styles/styled.js
var styled = __webpack_require__(64624);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/styles/useTheme.js
var useTheme = __webpack_require__(38443);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/utils/memoTheme.js + 1 modules
var memoTheme = __webpack_require__(10355);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/DefaultPropsProvider/DefaultPropsProvider.js
var DefaultPropsProvider = __webpack_require__(79209);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/utils/debounce.js
var debounce = __webpack_require__(74169);
;// ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/internal/animate.js
function easeInOutSin(time) {
    return (1 + Math.sin(Math.PI * time - Math.PI / 2)) / 2;
}
function animate(property, element, to) {
    let options = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {}, cb = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : ()=>{};
    const { ease = easeInOutSin, duration = 300 // standard
     } = options;
    let start = null;
    const from = element[property];
    let cancelled = false;
    const cancel = ()=>{
        cancelled = true;
    };
    const step = (timestamp)=>{
        if (cancelled) {
            cb(new Error('Animation cancelled'));
            return;
        }
        if (start === null) {
            start = timestamp;
        }
        const time = Math.min(1, (timestamp - start) / duration);
        element[property] = ease(time) * (to - from) + from;
        if (time >= 1) {
            requestAnimationFrame(()=>{
                cb(null);
            });
            return;
        }
        requestAnimationFrame(step);
    };
    if (from === to) {
        cb(new Error('Element already at target position'));
        return cancel;
    }
    requestAnimationFrame(step);
    return cancel;
}

// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/utils/useEnhancedEffect.js
var useEnhancedEffect = __webpack_require__(34486);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/utils/ownerWindow.js
var ownerWindow = __webpack_require__(72429);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react@19.1.0/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(94513);
;// ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/Tabs/ScrollbarSize.js
/* __next_internal_client_entry_do_not_use__ default auto */ 




const styles = {
    width: 99,
    height: 99,
    position: 'absolute',
    top: -9999,
    overflow: 'scroll'
};
/**
 * @ignore - internal component.
 * The component originates from https://github.com/STORIS/react-scrollbar-size.
 * It has been moved into the core in order to minimize the bundle size.
 */ function ScrollbarSize(props) {
    const { onChange, ...other } = props;
    const scrollbarHeight = react.useRef();
    const nodeRef = react.useRef(null);
    const setMeasurements = ()=>{
        scrollbarHeight.current = nodeRef.current.offsetHeight - nodeRef.current.clientHeight;
    };
    (0,useEnhancedEffect/* default */.A)(()=>{
        const handleResize = (0,debounce/* default */.A)(()=>{
            const prevHeight = scrollbarHeight.current;
            setMeasurements();
            if (prevHeight !== scrollbarHeight.current) {
                onChange(scrollbarHeight.current);
            }
        });
        const containerWindow = (0,ownerWindow/* default */.A)(nodeRef.current);
        containerWindow.addEventListener('resize', handleResize);
        return ()=>{
            handleResize.clear();
            containerWindow.removeEventListener('resize', handleResize);
        };
    }, [
        onChange
    ]);
    react.useEffect(()=>{
        setMeasurements();
        onChange(scrollbarHeight.current);
    }, [
        onChange
    ]);
    return /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
        style: styles,
        ...other,
        ref: nodeRef
    });
}
 false ? 0 : void 0;

// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/utils/createSvgIcon.js + 2 modules
var createSvgIcon = __webpack_require__(61541);
;// ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/internal/svg-icons/KeyboardArrowLeft.js
/* __next_internal_client_entry_do_not_use__ default auto */ 

/**
 * @ignore - internal component.
 */ 
/* harmony default export */ const KeyboardArrowLeft = ((0,createSvgIcon/* default */.A)(/*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
    d: "M15.41 16.09l-4.58-4.59 4.58-4.59L14 5.5l-6 6 6 6z"
}), 'KeyboardArrowLeft'));

;// ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/internal/svg-icons/KeyboardArrowRight.js
/* __next_internal_client_entry_do_not_use__ default auto */ 

/**
 * @ignore - internal component.
 */ 
/* harmony default export */ const KeyboardArrowRight = ((0,createSvgIcon/* default */.A)(/*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
    d: "M8.59 16.34l4.58-4.59-4.58-4.59L10 5.75l6 6-6 6z"
}), 'KeyboardArrowRight'));

// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/ButtonBase/ButtonBase.js + 5 modules
var ButtonBase = __webpack_require__(42932);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+utils@6.4.9_@types+react@19.1.8_react@19.1.0/node_modules/@mui/utils/esm/generateUtilityClasses/generateUtilityClasses.js
var generateUtilityClasses = __webpack_require__(92186);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+utils@6.4.9_@types+react@19.1.8_react@19.1.0/node_modules/@mui/utils/esm/generateUtilityClass/generateUtilityClass.js
var generateUtilityClass = __webpack_require__(69014);
;// ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/TabScrollButton/tabScrollButtonClasses.js


function getTabScrollButtonUtilityClass(slot) {
    return (0,generateUtilityClass/* default */.Ay)('MuiTabScrollButton', slot);
}
const tabScrollButtonClasses = (0,generateUtilityClasses/* default */.A)('MuiTabScrollButton', [
    'root',
    'vertical',
    'horizontal',
    'disabled'
]);
/* harmony default export */ const TabScrollButton_tabScrollButtonClasses = (tabScrollButtonClasses);

;// ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/TabScrollButton/TabScrollButton.js
/* __next_internal_client_entry_do_not_use__ default auto */ /* eslint-disable jsx-a11y/aria-role */ 












const useUtilityClasses = (ownerState)=>{
    const { classes, orientation, disabled } = ownerState;
    const slots = {
        root: [
            'root',
            orientation,
            disabled && 'disabled'
        ]
    };
    return (0,composeClasses/* default */.A)(slots, getTabScrollButtonUtilityClass, classes);
};
const TabScrollButtonRoot = (0,styled/* default */.Ay)(ButtonBase/* default */.A, {
    name: 'MuiTabScrollButton',
    slot: 'Root',
    overridesResolver: (props, styles)=>{
        const { ownerState } = props;
        return [
            styles.root,
            ownerState.orientation && styles[ownerState.orientation]
        ];
    }
})({
    width: 40,
    flexShrink: 0,
    opacity: 0.8,
    ["&.".concat(TabScrollButton_tabScrollButtonClasses.disabled)]: {
        opacity: 0
    },
    variants: [
        {
            props: {
                orientation: 'vertical'
            },
            style: {
                width: '100%',
                height: 40,
                '& svg': {
                    transform: 'var(--TabScrollButton-svgRotate)'
                }
            }
        }
    ]
});
const TabScrollButton = /*#__PURE__*/ react.forwardRef(function TabScrollButton(inProps, ref) {
    const props = (0,DefaultPropsProvider/* useDefaultProps */.b)({
        props: inProps,
        name: 'MuiTabScrollButton'
    });
    const { className, slots = {}, slotProps = {}, direction, orientation, disabled, ...other } = props;
    const isRtl = (0,RtlProvider/* useRtl */.I)();
    const ownerState = {
        isRtl,
        ...props
    };
    const classes = useUtilityClasses(ownerState);
    var _slots_StartScrollButtonIcon;
    const StartButtonIcon = (_slots_StartScrollButtonIcon = slots.StartScrollButtonIcon) !== null && _slots_StartScrollButtonIcon !== void 0 ? _slots_StartScrollButtonIcon : KeyboardArrowLeft;
    var _slots_EndScrollButtonIcon;
    const EndButtonIcon = (_slots_EndScrollButtonIcon = slots.EndScrollButtonIcon) !== null && _slots_EndScrollButtonIcon !== void 0 ? _slots_EndScrollButtonIcon : KeyboardArrowRight;
    const startButtonIconProps = (0,useSlotProps/* default */.A)({
        elementType: StartButtonIcon,
        externalSlotProps: slotProps.startScrollButtonIcon,
        additionalProps: {
            fontSize: 'small'
        },
        ownerState
    });
    const endButtonIconProps = (0,useSlotProps/* default */.A)({
        elementType: EndButtonIcon,
        externalSlotProps: slotProps.endScrollButtonIcon,
        additionalProps: {
            fontSize: 'small'
        },
        ownerState
    });
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(TabScrollButtonRoot, {
        component: "div",
        className: (0,clsx/* default */.A)(classes.root, className),
        ref: ref,
        role: null,
        ownerState: ownerState,
        tabIndex: null,
        ...other,
        style: {
            ...other.style,
            ...orientation === 'vertical' && {
                '--TabScrollButton-svgRotate': "rotate(".concat(isRtl ? -90 : 90, "deg)")
            }
        },
        children: direction === 'left' ? /*#__PURE__*/ (0,jsx_runtime.jsx)(StartButtonIcon, {
            ...startButtonIconProps
        }) : /*#__PURE__*/ (0,jsx_runtime.jsx)(EndButtonIcon, {
            ...endButtonIconProps
        })
    });
});
 false ? 0 : void 0;
/* harmony default export */ const TabScrollButton_TabScrollButton = (TabScrollButton);

// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/utils/useEventCallback.js
var useEventCallback = __webpack_require__(37976);
;// ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/Tabs/tabsClasses.js


function getTabsUtilityClass(slot) {
    return (0,generateUtilityClass/* default */.Ay)('MuiTabs', slot);
}
const tabsClasses = (0,generateUtilityClasses/* default */.A)('MuiTabs', [
    'root',
    'vertical',
    'list',
    'flexContainer',
    'flexContainerVertical',
    'centered',
    'scroller',
    'fixed',
    'scrollableX',
    'scrollableY',
    'hideScrollbar',
    'scrollButtons',
    'scrollButtonsHideMobile',
    'indicator'
]);
/* harmony default export */ const Tabs_tabsClasses = (tabsClasses);

// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/utils/ownerDocument.js
var ownerDocument = __webpack_require__(45640);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/utils/useSlot.js
var useSlot = __webpack_require__(98005);
;// ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/Tabs/Tabs.js
/* __next_internal_client_entry_do_not_use__ default auto */ 




















const nextItem = (list, item)=>{
    if (list === item) {
        return list.firstChild;
    }
    if (item && item.nextElementSibling) {
        return item.nextElementSibling;
    }
    return list.firstChild;
};
const previousItem = (list, item)=>{
    if (list === item) {
        return list.lastChild;
    }
    if (item && item.previousElementSibling) {
        return item.previousElementSibling;
    }
    return list.lastChild;
};
const moveFocus = (list, currentFocus, traversalFunction)=>{
    let wrappedOnce = false;
    let nextFocus = traversalFunction(list, currentFocus);
    while(nextFocus){
        // Prevent infinite loop.
        if (nextFocus === list.firstChild) {
            if (wrappedOnce) {
                return;
            }
            wrappedOnce = true;
        }
        // Same logic as useAutocomplete.js
        const nextFocusDisabled = nextFocus.disabled || nextFocus.getAttribute('aria-disabled') === 'true';
        if (!nextFocus.hasAttribute('tabindex') || nextFocusDisabled) {
            // Move to the next element.
            nextFocus = traversalFunction(list, nextFocus);
        } else {
            nextFocus.focus();
            return;
        }
    }
};
const Tabs_useUtilityClasses = (ownerState)=>{
    const { vertical, fixed, hideScrollbar, scrollableX, scrollableY, centered, scrollButtonsHideMobile, classes } = ownerState;
    const slots = {
        root: [
            'root',
            vertical && 'vertical'
        ],
        scroller: [
            'scroller',
            fixed && 'fixed',
            hideScrollbar && 'hideScrollbar',
            scrollableX && 'scrollableX',
            scrollableY && 'scrollableY'
        ],
        list: [
            'list',
            'flexContainer',
            vertical && 'flexContainerVertical',
            vertical && 'vertical',
            centered && 'centered'
        ],
        indicator: [
            'indicator'
        ],
        scrollButtons: [
            'scrollButtons',
            scrollButtonsHideMobile && 'scrollButtonsHideMobile'
        ],
        scrollableX: [
            scrollableX && 'scrollableX'
        ],
        hideScrollbar: [
            hideScrollbar && 'hideScrollbar'
        ]
    };
    return (0,composeClasses/* default */.A)(slots, getTabsUtilityClass, classes);
};
const TabsRoot = (0,styled/* default */.Ay)('div', {
    name: 'MuiTabs',
    slot: 'Root',
    overridesResolver: (props, styles)=>{
        const { ownerState } = props;
        return [
            {
                ["& .".concat(Tabs_tabsClasses.scrollButtons)]: styles.scrollButtons
            },
            {
                ["& .".concat(Tabs_tabsClasses.scrollButtons)]: ownerState.scrollButtonsHideMobile && styles.scrollButtonsHideMobile
            },
            styles.root,
            ownerState.vertical && styles.vertical
        ];
    }
})((0,memoTheme/* default */.A)((param)=>{
    let { theme } = param;
    return {
        overflow: 'hidden',
        minHeight: 48,
        // Add iOS momentum scrolling for iOS < 13.0
        WebkitOverflowScrolling: 'touch',
        display: 'flex',
        variants: [
            {
                props: (param)=>{
                    let { ownerState } = param;
                    return ownerState.vertical;
                },
                style: {
                    flexDirection: 'column'
                }
            },
            {
                props: (param)=>{
                    let { ownerState } = param;
                    return ownerState.scrollButtonsHideMobile;
                },
                style: {
                    ["& .".concat(Tabs_tabsClasses.scrollButtons)]: {
                        [theme.breakpoints.down('sm')]: {
                            display: 'none'
                        }
                    }
                }
            }
        ]
    };
}));
const TabsScroller = (0,styled/* default */.Ay)('div', {
    name: 'MuiTabs',
    slot: 'Scroller',
    overridesResolver: (props, styles)=>{
        const { ownerState } = props;
        return [
            styles.scroller,
            ownerState.fixed && styles.fixed,
            ownerState.hideScrollbar && styles.hideScrollbar,
            ownerState.scrollableX && styles.scrollableX,
            ownerState.scrollableY && styles.scrollableY
        ];
    }
})({
    position: 'relative',
    display: 'inline-block',
    flex: '1 1 auto',
    whiteSpace: 'nowrap',
    variants: [
        {
            props: (param)=>{
                let { ownerState } = param;
                return ownerState.fixed;
            },
            style: {
                overflowX: 'hidden',
                width: '100%'
            }
        },
        {
            props: (param)=>{
                let { ownerState } = param;
                return ownerState.hideScrollbar;
            },
            style: {
                // Hide dimensionless scrollbar on macOS
                scrollbarWidth: 'none',
                // Firefox
                '&::-webkit-scrollbar': {
                    display: 'none' // Safari + Chrome
                }
            }
        },
        {
            props: (param)=>{
                let { ownerState } = param;
                return ownerState.scrollableX;
            },
            style: {
                overflowX: 'auto',
                overflowY: 'hidden'
            }
        },
        {
            props: (param)=>{
                let { ownerState } = param;
                return ownerState.scrollableY;
            },
            style: {
                overflowY: 'auto',
                overflowX: 'hidden'
            }
        }
    ]
});
const List = (0,styled/* default */.Ay)('div', {
    name: 'MuiTabs',
    slot: 'List',
    overridesResolver: (props, styles)=>{
        const { ownerState } = props;
        return [
            styles.list,
            styles.flexContainer,
            ownerState.vertical && styles.flexContainerVertical,
            ownerState.centered && styles.centered
        ];
    }
})({
    display: 'flex',
    variants: [
        {
            props: (param)=>{
                let { ownerState } = param;
                return ownerState.vertical;
            },
            style: {
                flexDirection: 'column'
            }
        },
        {
            props: (param)=>{
                let { ownerState } = param;
                return ownerState.centered;
            },
            style: {
                justifyContent: 'center'
            }
        }
    ]
});
const TabsIndicator = (0,styled/* default */.Ay)('span', {
    name: 'MuiTabs',
    slot: 'Indicator',
    overridesResolver: (props, styles)=>styles.indicator
})((0,memoTheme/* default */.A)((param)=>{
    let { theme } = param;
    return {
        position: 'absolute',
        height: 2,
        bottom: 0,
        width: '100%',
        transition: theme.transitions.create(),
        variants: [
            {
                props: {
                    indicatorColor: 'primary'
                },
                style: {
                    backgroundColor: (theme.vars || theme).palette.primary.main
                }
            },
            {
                props: {
                    indicatorColor: 'secondary'
                },
                style: {
                    backgroundColor: (theme.vars || theme).palette.secondary.main
                }
            },
            {
                props: (param)=>{
                    let { ownerState } = param;
                    return ownerState.vertical;
                },
                style: {
                    height: '100%',
                    width: 2,
                    right: 0
                }
            }
        ]
    };
}));
const TabsScrollbarSize = (0,styled/* default */.Ay)(ScrollbarSize)({
    overflowX: 'auto',
    overflowY: 'hidden',
    // Hide dimensionless scrollbar on macOS
    scrollbarWidth: 'none',
    // Firefox
    '&::-webkit-scrollbar': {
        display: 'none' // Safari + Chrome
    }
});
const defaultIndicatorStyle = {};
let warnedOnceTabPresent = false;
const Tabs = /*#__PURE__*/ react.forwardRef(function Tabs(inProps, ref) {
    const props = (0,DefaultPropsProvider/* useDefaultProps */.b)({
        props: inProps,
        name: 'MuiTabs'
    });
    const theme = (0,useTheme/* default */.A)();
    const isRtl = (0,RtlProvider/* useRtl */.I)();
    const { 'aria-label': ariaLabel, 'aria-labelledby': ariaLabelledBy, action, centered = false, children: childrenProp, className, component = 'div', allowScrollButtonsMobile = false, indicatorColor = 'primary', onChange, orientation = 'horizontal', ScrollButtonComponent, // TODO: remove in v7 (deprecated in v6)
    scrollButtons = 'auto', selectionFollowsFocus, slots = {}, slotProps = {}, TabIndicatorProps = {}, // TODO: remove in v7 (deprecated in v6)
    TabScrollButtonProps = {}, // TODO: remove in v7 (deprecated in v6)
    textColor = 'primary', value, variant = 'standard', visibleScrollbar = false, ...other } = props;
    const scrollable = variant === 'scrollable';
    const vertical = orientation === 'vertical';
    const scrollStart = vertical ? 'scrollTop' : 'scrollLeft';
    const start = vertical ? 'top' : 'left';
    const end = vertical ? 'bottom' : 'right';
    const clientSize = vertical ? 'clientHeight' : 'clientWidth';
    const size = vertical ? 'height' : 'width';
    const ownerState = {
        ...props,
        component,
        allowScrollButtonsMobile,
        indicatorColor,
        orientation,
        vertical,
        scrollButtons,
        textColor,
        variant,
        visibleScrollbar,
        fixed: !scrollable,
        hideScrollbar: scrollable && !visibleScrollbar,
        scrollableX: scrollable && !vertical,
        scrollableY: scrollable && vertical,
        centered: centered && !scrollable,
        scrollButtonsHideMobile: !allowScrollButtonsMobile
    };
    const classes = Tabs_useUtilityClasses(ownerState);
    const startScrollButtonIconProps = (0,useSlotProps/* default */.A)({
        elementType: slots.StartScrollButtonIcon,
        externalSlotProps: slotProps.startScrollButtonIcon,
        ownerState
    });
    const endScrollButtonIconProps = (0,useSlotProps/* default */.A)({
        elementType: slots.EndScrollButtonIcon,
        externalSlotProps: slotProps.endScrollButtonIcon,
        ownerState
    });
    if (false) {}
    const [mounted, setMounted] = react.useState(false);
    const [indicatorStyle, setIndicatorStyle] = react.useState(defaultIndicatorStyle);
    const [displayStartScroll, setDisplayStartScroll] = react.useState(false);
    const [displayEndScroll, setDisplayEndScroll] = react.useState(false);
    const [updateScrollObserver, setUpdateScrollObserver] = react.useState(false);
    const [scrollerStyle, setScrollerStyle] = react.useState({
        overflow: 'hidden',
        scrollbarWidth: 0
    });
    const valueToIndex = new Map();
    const tabsRef = react.useRef(null);
    const tabListRef = react.useRef(null);
    const externalForwardedProps = {
        slots,
        slotProps: {
            indicator: TabIndicatorProps,
            scrollButton: TabScrollButtonProps,
            ...slotProps
        }
    };
    const getTabsMeta = ()=>{
        const tabsNode = tabsRef.current;
        let tabsMeta;
        if (tabsNode) {
            const rect = tabsNode.getBoundingClientRect();
            // create a new object with ClientRect class props + scrollLeft
            tabsMeta = {
                clientWidth: tabsNode.clientWidth,
                scrollLeft: tabsNode.scrollLeft,
                scrollTop: tabsNode.scrollTop,
                scrollWidth: tabsNode.scrollWidth,
                top: rect.top,
                bottom: rect.bottom,
                left: rect.left,
                right: rect.right
            };
        }
        let tabMeta;
        if (tabsNode && value !== false) {
            const children = tabListRef.current.children;
            if (children.length > 0) {
                const tab = children[valueToIndex.get(value)];
                if (false) {}
                tabMeta = tab ? tab.getBoundingClientRect() : null;
                if (false) {}
            }
        }
        return {
            tabsMeta,
            tabMeta
        };
    };
    const updateIndicatorState = (0,useEventCallback/* default */.A)(()=>{
        const { tabsMeta, tabMeta } = getTabsMeta();
        let startValue = 0;
        let startIndicator;
        if (vertical) {
            startIndicator = 'top';
            if (tabMeta && tabsMeta) {
                startValue = tabMeta.top - tabsMeta.top + tabsMeta.scrollTop;
            }
        } else {
            startIndicator = isRtl ? 'right' : 'left';
            if (tabMeta && tabsMeta) {
                startValue = (isRtl ? -1 : 1) * (tabMeta[startIndicator] - tabsMeta[startIndicator] + tabsMeta.scrollLeft);
            }
        }
        const newIndicatorStyle = {
            [startIndicator]: startValue,
            // May be wrong until the font is loaded.
            [size]: tabMeta ? tabMeta[size] : 0
        };
        if (typeof indicatorStyle[startIndicator] !== 'number' || typeof indicatorStyle[size] !== 'number') {
            setIndicatorStyle(newIndicatorStyle);
        } else {
            const dStart = Math.abs(indicatorStyle[startIndicator] - newIndicatorStyle[startIndicator]);
            const dSize = Math.abs(indicatorStyle[size] - newIndicatorStyle[size]);
            if (dStart >= 1 || dSize >= 1) {
                setIndicatorStyle(newIndicatorStyle);
            }
        }
    });
    const scroll = function(scrollValue) {
        let { animation = true } = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
        if (animation) {
            animate(scrollStart, tabsRef.current, scrollValue, {
                duration: theme.transitions.duration.standard
            });
        } else {
            tabsRef.current[scrollStart] = scrollValue;
        }
    };
    const moveTabsScroll = (delta)=>{
        let scrollValue = tabsRef.current[scrollStart];
        if (vertical) {
            scrollValue += delta;
        } else {
            scrollValue += delta * (isRtl ? -1 : 1);
        }
        scroll(scrollValue);
    };
    const getScrollSize = ()=>{
        const containerSize = tabsRef.current[clientSize];
        let totalSize = 0;
        const children = Array.from(tabListRef.current.children);
        for(let i = 0; i < children.length; i += 1){
            const tab = children[i];
            if (totalSize + tab[clientSize] > containerSize) {
                // If the first item is longer than the container size, then only scroll
                // by the container size.
                if (i === 0) {
                    totalSize = containerSize;
                }
                break;
            }
            totalSize += tab[clientSize];
        }
        return totalSize;
    };
    const handleStartScrollClick = ()=>{
        moveTabsScroll(-1 * getScrollSize());
    };
    const handleEndScrollClick = ()=>{
        moveTabsScroll(getScrollSize());
    };
    const [ScrollbarSlot, { onChange: scrollbarOnChange, ...scrollbarSlotProps }] = (0,useSlot/* default */.A)('scrollbar', {
        className: (0,clsx/* default */.A)(classes.scrollableX, classes.hideScrollbar),
        elementType: TabsScrollbarSize,
        shouldForwardComponentProp: true,
        externalForwardedProps,
        ownerState
    });
    // TODO Remove <ScrollbarSize /> as browser support for hiding the scrollbar
    // with CSS improves.
    const handleScrollbarSizeChange = react.useCallback((scrollbarWidth)=>{
        scrollbarOnChange === null || scrollbarOnChange === void 0 ? void 0 : scrollbarOnChange(scrollbarWidth);
        setScrollerStyle({
            overflow: null,
            scrollbarWidth
        });
    }, [
        scrollbarOnChange
    ]);
    const [ScrollButtonsSlot, scrollButtonSlotProps] = (0,useSlot/* default */.A)('scrollButtons', {
        className: (0,clsx/* default */.A)(classes.scrollButtons, TabScrollButtonProps.className),
        elementType: TabScrollButton_TabScrollButton,
        externalForwardedProps,
        ownerState,
        additionalProps: {
            orientation,
            slots: {
                StartScrollButtonIcon: slots.startScrollButtonIcon || slots.StartScrollButtonIcon,
                EndScrollButtonIcon: slots.endScrollButtonIcon || slots.EndScrollButtonIcon
            },
            slotProps: {
                startScrollButtonIcon: startScrollButtonIconProps,
                endScrollButtonIcon: endScrollButtonIconProps
            }
        }
    });
    const getConditionalElements = ()=>{
        const conditionalElements = {};
        conditionalElements.scrollbarSizeListener = scrollable ? /*#__PURE__*/ (0,jsx_runtime.jsx)(ScrollbarSlot, {
            ...scrollbarSlotProps,
            onChange: handleScrollbarSizeChange
        }) : null;
        const scrollButtonsActive = displayStartScroll || displayEndScroll;
        const showScrollButtons = scrollable && (scrollButtons === 'auto' && scrollButtonsActive || scrollButtons === true);
        conditionalElements.scrollButtonStart = showScrollButtons ? /*#__PURE__*/ (0,jsx_runtime.jsx)(ScrollButtonsSlot, {
            direction: isRtl ? 'right' : 'left',
            onClick: handleStartScrollClick,
            disabled: !displayStartScroll,
            ...scrollButtonSlotProps
        }) : null;
        conditionalElements.scrollButtonEnd = showScrollButtons ? /*#__PURE__*/ (0,jsx_runtime.jsx)(ScrollButtonsSlot, {
            direction: isRtl ? 'left' : 'right',
            onClick: handleEndScrollClick,
            disabled: !displayEndScroll,
            ...scrollButtonSlotProps
        }) : null;
        return conditionalElements;
    };
    const scrollSelectedIntoView = (0,useEventCallback/* default */.A)((animation)=>{
        const { tabsMeta, tabMeta } = getTabsMeta();
        if (!tabMeta || !tabsMeta) {
            return;
        }
        if (tabMeta[start] < tabsMeta[start]) {
            // left side of button is out of view
            const nextScrollStart = tabsMeta[scrollStart] + (tabMeta[start] - tabsMeta[start]);
            scroll(nextScrollStart, {
                animation
            });
        } else if (tabMeta[end] > tabsMeta[end]) {
            // right side of button is out of view
            const nextScrollStart = tabsMeta[scrollStart] + (tabMeta[end] - tabsMeta[end]);
            scroll(nextScrollStart, {
                animation
            });
        }
    });
    const updateScrollButtonState = (0,useEventCallback/* default */.A)(()=>{
        if (scrollable && scrollButtons !== false) {
            setUpdateScrollObserver(!updateScrollObserver);
        }
    });
    react.useEffect(()=>{
        const handleResize = (0,debounce/* default */.A)(()=>{
            // If the Tabs component is replaced by Suspense with a fallback, the last
            // ResizeObserver's handler that runs because of the change in the layout is trying to
            // access a dom node that is no longer there (as the fallback component is being shown instead).
            // See https://github.com/mui/material-ui/issues/33276
            // TODO: Add tests that will ensure the component is not failing when
            // replaced by Suspense with a fallback, once React is updated to version 18
            if (tabsRef.current) {
                updateIndicatorState();
            }
        });
        let resizeObserver;
        /**
     * @type {MutationCallback}
     */ const handleMutation = (records)=>{
            records.forEach((record)=>{
                record.removedNodes.forEach((item)=>{
                    resizeObserver === null || resizeObserver === void 0 ? void 0 : resizeObserver.unobserve(item);
                });
                record.addedNodes.forEach((item)=>{
                    resizeObserver === null || resizeObserver === void 0 ? void 0 : resizeObserver.observe(item);
                });
            });
            handleResize();
            updateScrollButtonState();
        };
        const win = (0,ownerWindow/* default */.A)(tabsRef.current);
        win.addEventListener('resize', handleResize);
        let mutationObserver;
        if (typeof ResizeObserver !== 'undefined') {
            resizeObserver = new ResizeObserver(handleResize);
            Array.from(tabListRef.current.children).forEach((child)=>{
                resizeObserver.observe(child);
            });
        }
        if (typeof MutationObserver !== 'undefined') {
            mutationObserver = new MutationObserver(handleMutation);
            mutationObserver.observe(tabListRef.current, {
                childList: true
            });
        }
        return ()=>{
            handleResize.clear();
            win.removeEventListener('resize', handleResize);
            mutationObserver === null || mutationObserver === void 0 ? void 0 : mutationObserver.disconnect();
            resizeObserver === null || resizeObserver === void 0 ? void 0 : resizeObserver.disconnect();
        };
    }, [
        updateIndicatorState,
        updateScrollButtonState
    ]);
    /**
   * Toggle visibility of start and end scroll buttons
   * Using IntersectionObserver on first and last Tabs.
   */ react.useEffect(()=>{
        const tabListChildren = Array.from(tabListRef.current.children);
        const length = tabListChildren.length;
        if (typeof IntersectionObserver !== 'undefined' && length > 0 && scrollable && scrollButtons !== false) {
            const firstTab = tabListChildren[0];
            const lastTab = tabListChildren[length - 1];
            const observerOptions = {
                root: tabsRef.current,
                threshold: 0.99
            };
            const handleScrollButtonStart = (entries)=>{
                setDisplayStartScroll(!entries[0].isIntersecting);
            };
            const firstObserver = new IntersectionObserver(handleScrollButtonStart, observerOptions);
            firstObserver.observe(firstTab);
            const handleScrollButtonEnd = (entries)=>{
                setDisplayEndScroll(!entries[0].isIntersecting);
            };
            const lastObserver = new IntersectionObserver(handleScrollButtonEnd, observerOptions);
            lastObserver.observe(lastTab);
            return ()=>{
                firstObserver.disconnect();
                lastObserver.disconnect();
            };
        }
        return undefined;
    }, [
        scrollable,
        scrollButtons,
        updateScrollObserver,
        childrenProp === null || childrenProp === void 0 ? void 0 : childrenProp.length
    ]);
    react.useEffect(()=>{
        setMounted(true);
    }, []);
    react.useEffect(()=>{
        updateIndicatorState();
    });
    react.useEffect(()=>{
        // Don't animate on the first render.
        scrollSelectedIntoView(defaultIndicatorStyle !== indicatorStyle);
    }, [
        scrollSelectedIntoView,
        indicatorStyle
    ]);
    react.useImperativeHandle(action, ()=>({
            updateIndicator: updateIndicatorState,
            updateScrollButtons: updateScrollButtonState
        }), [
        updateIndicatorState,
        updateScrollButtonState
    ]);
    const [IndicatorSlot, indicatorSlotProps] = (0,useSlot/* default */.A)('indicator', {
        className: (0,clsx/* default */.A)(classes.indicator, TabIndicatorProps.className),
        elementType: TabsIndicator,
        externalForwardedProps,
        ownerState,
        additionalProps: {
            style: indicatorStyle
        }
    });
    const indicator = /*#__PURE__*/ (0,jsx_runtime.jsx)(IndicatorSlot, {
        ...indicatorSlotProps
    });
    let childIndex = 0;
    const children = react.Children.map(childrenProp, (child)=>{
        if (!/*#__PURE__*/ react.isValidElement(child)) {
            return null;
        }
        if (false) {}
        const childValue = child.props.value === undefined ? childIndex : child.props.value;
        valueToIndex.set(childValue, childIndex);
        const selected = childValue === value;
        childIndex += 1;
        return /*#__PURE__*/ react.cloneElement(child, {
            fullWidth: variant === 'fullWidth',
            indicator: selected && !mounted && indicator,
            selected,
            selectionFollowsFocus,
            onChange,
            textColor,
            value: childValue,
            ...childIndex === 1 && value === false && !child.props.tabIndex ? {
                tabIndex: 0
            } : {}
        });
    });
    const handleKeyDown = (event)=>{
        // Check if a modifier key (Alt, Shift, Ctrl, Meta) is pressed
        if (event.altKey || event.shiftKey || event.ctrlKey || event.metaKey) {
            return;
        }
        const list = tabListRef.current;
        const currentFocus = (0,ownerDocument/* default */.A)(list).activeElement;
        // Keyboard navigation assumes that [role="tab"] are siblings
        // though we might warn in the future about nested, interactive elements
        // as a a11y violation
        const role = currentFocus.getAttribute('role');
        if (role !== 'tab') {
            return;
        }
        let previousItemKey = orientation === 'horizontal' ? 'ArrowLeft' : 'ArrowUp';
        let nextItemKey = orientation === 'horizontal' ? 'ArrowRight' : 'ArrowDown';
        if (orientation === 'horizontal' && isRtl) {
            // swap previousItemKey with nextItemKey
            previousItemKey = 'ArrowRight';
            nextItemKey = 'ArrowLeft';
        }
        switch(event.key){
            case previousItemKey:
                event.preventDefault();
                moveFocus(list, currentFocus, previousItem);
                break;
            case nextItemKey:
                event.preventDefault();
                moveFocus(list, currentFocus, nextItem);
                break;
            case 'Home':
                event.preventDefault();
                moveFocus(list, null, nextItem);
                break;
            case 'End':
                event.preventDefault();
                moveFocus(list, null, previousItem);
                break;
            default:
                break;
        }
    };
    const conditionalElements = getConditionalElements();
    const [RootSlot, rootSlotProps] = (0,useSlot/* default */.A)('root', {
        ref,
        className: (0,clsx/* default */.A)(classes.root, className),
        elementType: TabsRoot,
        externalForwardedProps: {
            ...externalForwardedProps,
            ...other,
            component
        },
        ownerState
    });
    const [ScrollerSlot, scrollerSlotProps] = (0,useSlot/* default */.A)('scroller', {
        ref: tabsRef,
        className: classes.scroller,
        elementType: TabsScroller,
        externalForwardedProps,
        ownerState,
        additionalProps: {
            style: {
                overflow: scrollerStyle.overflow,
                [vertical ? "margin".concat(isRtl ? 'Left' : 'Right') : 'marginBottom']: visibleScrollbar ? undefined : -scrollerStyle.scrollbarWidth
            }
        }
    });
    const [ListSlot, listSlotProps] = (0,useSlot/* default */.A)('list', {
        ref: tabListRef,
        className: (0,clsx/* default */.A)(classes.list, classes.flexContainer),
        elementType: List,
        externalForwardedProps,
        ownerState,
        getSlotProps: (handlers)=>({
                ...handlers,
                onKeyDown: (event)=>{
                    var _handlers_onKeyDown;
                    handleKeyDown(event);
                    (_handlers_onKeyDown = handlers.onKeyDown) === null || _handlers_onKeyDown === void 0 ? void 0 : _handlers_onKeyDown.call(handlers, event);
                }
            })
    });
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(RootSlot, {
        ...rootSlotProps,
        children: [
            conditionalElements.scrollButtonStart,
            conditionalElements.scrollbarSizeListener,
            /*#__PURE__*/ (0,jsx_runtime.jsxs)(ScrollerSlot, {
                ...scrollerSlotProps,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(ListSlot, {
                        "aria-label": ariaLabel,
                        "aria-labelledby": ariaLabelledBy,
                        "aria-orientation": orientation === 'vertical' ? 'vertical' : null,
                        role: "tablist",
                        ...listSlotProps,
                        children: children
                    }),
                    mounted && indicator
                ]
            }),
            conditionalElements.scrollButtonEnd
        ]
    });
});
 false ? 0 : void 0;
/* harmony default export */ const Tabs_Tabs = (Tabs);


/***/ }),

/***/ 65494:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ IconButton_IconButton)
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/react@19.1.0/node_modules/react/index.js
var react = __webpack_require__(94285);
// EXTERNAL MODULE: ../../node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs
var clsx = __webpack_require__(3638);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+utils@6.4.9_@types+react@19.1.8_react@19.1.0/node_modules/@mui/utils/esm/composeClasses/composeClasses.js
var composeClasses = __webpack_require__(95116);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/utils/useId.js
var useId = __webpack_require__(14036);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+system@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled@1_sfs2vjcbuqchwdpqpmkla22opm/node_modules/@mui/system/esm/colorManipulator/colorManipulator.js + 1 modules
var colorManipulator = __webpack_require__(21567);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/styles/styled.js
var styled = __webpack_require__(64624);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/utils/memoTheme.js + 1 modules
var memoTheme = __webpack_require__(10355);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/utils/createSimplePaletteValueFilter.js
var createSimplePaletteValueFilter = __webpack_require__(36118);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/DefaultPropsProvider/DefaultPropsProvider.js
var DefaultPropsProvider = __webpack_require__(79209);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/ButtonBase/ButtonBase.js + 5 modules
var ButtonBase = __webpack_require__(42932);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/CircularProgress/CircularProgress.js + 1 modules
var CircularProgress = __webpack_require__(95746);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/utils/capitalize.js
var capitalize = __webpack_require__(99512);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+utils@6.4.9_@types+react@19.1.8_react@19.1.0/node_modules/@mui/utils/esm/generateUtilityClasses/generateUtilityClasses.js
var generateUtilityClasses = __webpack_require__(92186);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+utils@6.4.9_@types+react@19.1.8_react@19.1.0/node_modules/@mui/utils/esm/generateUtilityClass/generateUtilityClass.js
var generateUtilityClass = __webpack_require__(69014);
;// ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/IconButton/iconButtonClasses.js


function getIconButtonUtilityClass(slot) {
    return (0,generateUtilityClass/* default */.Ay)('MuiIconButton', slot);
}
const iconButtonClasses = (0,generateUtilityClasses/* default */.A)('MuiIconButton', [
    'root',
    'disabled',
    'colorInherit',
    'colorPrimary',
    'colorSecondary',
    'colorError',
    'colorInfo',
    'colorSuccess',
    'colorWarning',
    'edgeStart',
    'edgeEnd',
    'sizeSmall',
    'sizeMedium',
    'sizeLarge',
    'loading',
    'loadingIndicator',
    'loadingWrapper'
]);
/* harmony default export */ const IconButton_iconButtonClasses = (iconButtonClasses);

// EXTERNAL MODULE: ../../node_modules/.pnpm/react@19.1.0/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(94513);
;// ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/IconButton/IconButton.js
/* __next_internal_client_entry_do_not_use__ default auto */ 















const useUtilityClasses = (ownerState)=>{
    const { classes, disabled, color, edge, size, loading } = ownerState;
    const slots = {
        root: [
            'root',
            loading && 'loading',
            disabled && 'disabled',
            color !== 'default' && "color".concat((0,capitalize/* default */.A)(color)),
            edge && "edge".concat((0,capitalize/* default */.A)(edge)),
            "size".concat((0,capitalize/* default */.A)(size))
        ],
        loadingIndicator: [
            'loadingIndicator'
        ],
        loadingWrapper: [
            'loadingWrapper'
        ]
    };
    return (0,composeClasses/* default */.A)(slots, getIconButtonUtilityClass, classes);
};
const IconButtonRoot = (0,styled/* default */.Ay)(ButtonBase/* default */.A, {
    name: 'MuiIconButton',
    slot: 'Root',
    overridesResolver: (props, styles)=>{
        const { ownerState } = props;
        return [
            styles.root,
            ownerState.loading && styles.loading,
            ownerState.color !== 'default' && styles["color".concat((0,capitalize/* default */.A)(ownerState.color))],
            ownerState.edge && styles["edge".concat((0,capitalize/* default */.A)(ownerState.edge))],
            styles["size".concat((0,capitalize/* default */.A)(ownerState.size))]
        ];
    }
})((0,memoTheme/* default */.A)((param)=>{
    let { theme } = param;
    return {
        textAlign: 'center',
        flex: '0 0 auto',
        fontSize: theme.typography.pxToRem(24),
        padding: 8,
        borderRadius: '50%',
        color: (theme.vars || theme).palette.action.active,
        transition: theme.transitions.create('background-color', {
            duration: theme.transitions.duration.shortest
        }),
        variants: [
            {
                props: (props)=>!props.disableRipple,
                style: {
                    '--IconButton-hoverBg': theme.vars ? "rgba(".concat(theme.vars.palette.action.activeChannel, " / ").concat(theme.vars.palette.action.hoverOpacity, ")") : (0,colorManipulator/* alpha */.X4)(theme.palette.action.active, theme.palette.action.hoverOpacity),
                    '&:hover': {
                        backgroundColor: 'var(--IconButton-hoverBg)',
                        // Reset on touch devices, it doesn't add specificity
                        '@media (hover: none)': {
                            backgroundColor: 'transparent'
                        }
                    }
                }
            },
            {
                props: {
                    edge: 'start'
                },
                style: {
                    marginLeft: -12
                }
            },
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
                props: {
                    edge: 'end'
                },
                style: {
                    marginRight: -12
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
            }
        ]
    };
}), (0,memoTheme/* default */.A)((param)=>{
    let { theme } = param;
    return {
        variants: [
            {
                props: {
                    color: 'inherit'
                },
                style: {
                    color: 'inherit'
                }
            },
            ...Object.entries(theme.palette).filter((0,createSimplePaletteValueFilter/* default */.A)()) // check all the used fields in the style below
            .map((param)=>{
                let [color] = param;
                return {
                    props: {
                        color
                    },
                    style: {
                        color: (theme.vars || theme).palette[color].main
                    }
                };
            }),
            ...Object.entries(theme.palette).filter((0,createSimplePaletteValueFilter/* default */.A)()) // check all the used fields in the style below
            .map((param)=>{
                let [color] = param;
                return {
                    props: {
                        color
                    },
                    style: {
                        '--IconButton-hoverBg': theme.vars ? "rgba(".concat((theme.vars || theme).palette[color].mainChannel, " / ").concat(theme.vars.palette.action.hoverOpacity, ")") : (0,colorManipulator/* alpha */.X4)((theme.vars || theme).palette[color].main, theme.palette.action.hoverOpacity)
                    }
                };
            }),
            {
                props: {
                    size: 'small'
                },
                style: {
                    padding: 5,
                    fontSize: theme.typography.pxToRem(18)
                }
            },
            {
                props: {
                    size: 'large'
                },
                style: {
                    padding: 12,
                    fontSize: theme.typography.pxToRem(28)
                }
            }
        ],
        ["&.".concat(IconButton_iconButtonClasses.disabled)]: {
            backgroundColor: 'transparent',
            color: (theme.vars || theme).palette.action.disabled
        },
        ["&.".concat(IconButton_iconButtonClasses.loading)]: {
            color: 'transparent'
        }
    };
}));
const IconButtonLoadingIndicator = (0,styled/* default */.Ay)('span', {
    name: 'MuiIconButton',
    slot: 'LoadingIndicator',
    overridesResolver: (props, styles)=>styles.loadingIndicator
})((param)=>{
    let { theme } = param;
    return {
        display: 'none',
        position: 'absolute',
        visibility: 'visible',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        color: (theme.vars || theme).palette.action.disabled,
        variants: [
            {
                props: {
                    loading: true
                },
                style: {
                    display: 'flex'
                }
            }
        ]
    };
});
/**
 * Refer to the [Icons](/material-ui/icons/) section of the documentation
 * regarding the available icon options.
 */ const IconButton = /*#__PURE__*/ react.forwardRef(function IconButton(inProps, ref) {
    const props = (0,DefaultPropsProvider/* useDefaultProps */.b)({
        props: inProps,
        name: 'MuiIconButton'
    });
    const { edge = false, children, className, color = 'default', disabled = false, disableFocusRipple = false, size = 'medium', id: idProp, loading = null, loadingIndicator: loadingIndicatorProp, ...other } = props;
    const loadingId = (0,useId/* default */.A)(idProp);
    const loadingIndicator = loadingIndicatorProp !== null && loadingIndicatorProp !== void 0 ? loadingIndicatorProp : /*#__PURE__*/ (0,jsx_runtime.jsx)(CircularProgress/* default */.A, {
        "aria-labelledby": loadingId,
        color: "inherit",
        size: 16
    });
    const ownerState = {
        ...props,
        edge,
        color,
        disabled,
        disableFocusRipple,
        loading,
        loadingIndicator,
        size
    };
    const classes = useUtilityClasses(ownerState);
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(IconButtonRoot, {
        id: loading ? loadingId : idProp,
        className: (0,clsx/* default */.A)(classes.root, className),
        centerRipple: true,
        focusRipple: !disableFocusRipple,
        disabled: disabled || loading,
        ref: ref,
        ...other,
        ownerState: ownerState,
        children: [
            typeof loading === 'boolean' && /*#__PURE__*/ // use plain HTML span to minimize the runtime overhead
            (0,jsx_runtime.jsx)("span", {
                className: classes.loadingWrapper,
                style: {
                    display: 'contents'
                },
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(IconButtonLoadingIndicator, {
                    className: classes.loadingIndicator,
                    ownerState: ownerState,
                    children: loading && loadingIndicator
                })
            }),
            children
        ]
    });
});
 false ? 0 : void 0;
/* harmony default export */ const IconButton_IconButton = (IconButton);


/***/ }),

/***/ 73852:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils_createSvgIcon_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(61541);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(94513);
/* __next_internal_client_entry_do_not_use__ default auto */ 

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_utils_createSvgIcon_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A)(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
    d: "M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14"
}), 'Search'));


/***/ }),

/***/ 81281:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ Tab_Tab)
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/react@19.1.0/node_modules/react/index.js
var react = __webpack_require__(94285);
// EXTERNAL MODULE: ../../node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs
var clsx = __webpack_require__(3638);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+utils@6.4.9_@types+react@19.1.8_react@19.1.0/node_modules/@mui/utils/esm/composeClasses/composeClasses.js
var composeClasses = __webpack_require__(95116);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/ButtonBase/ButtonBase.js + 5 modules
var ButtonBase = __webpack_require__(42932);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/utils/capitalize.js
var capitalize = __webpack_require__(99512);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/styles/styled.js
var styled = __webpack_require__(64624);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/utils/memoTheme.js + 1 modules
var memoTheme = __webpack_require__(10355);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/DefaultPropsProvider/DefaultPropsProvider.js
var DefaultPropsProvider = __webpack_require__(79209);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+utils@6.4.9_@types+react@19.1.8_react@19.1.0/node_modules/@mui/utils/esm/generateUtilityClasses/generateUtilityClasses.js
var generateUtilityClasses = __webpack_require__(92186);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+utils@6.4.9_@types+react@19.1.8_react@19.1.0/node_modules/@mui/utils/esm/generateUtilityClass/generateUtilityClass.js
var generateUtilityClass = __webpack_require__(69014);
;// ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/Tab/tabClasses.js


function getTabUtilityClass(slot) {
    return (0,generateUtilityClass/* default */.Ay)('MuiTab', slot);
}
const tabClasses = (0,generateUtilityClasses/* default */.A)('MuiTab', [
    'root',
    'labelIcon',
    'textColorInherit',
    'textColorPrimary',
    'textColorSecondary',
    'selected',
    'disabled',
    'fullWidth',
    'wrapped',
    'iconWrapper',
    'icon'
]);
/* harmony default export */ const Tab_tabClasses = (tabClasses);

// EXTERNAL MODULE: ../../node_modules/.pnpm/react@19.1.0/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(94513);
;// ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/Tab/Tab.js
/* __next_internal_client_entry_do_not_use__ default auto */ 











const useUtilityClasses = (ownerState)=>{
    const { classes, textColor, fullWidth, wrapped, icon, label, selected, disabled } = ownerState;
    const slots = {
        root: [
            'root',
            icon && label && 'labelIcon',
            "textColor".concat((0,capitalize/* default */.A)(textColor)),
            fullWidth && 'fullWidth',
            wrapped && 'wrapped',
            selected && 'selected',
            disabled && 'disabled'
        ],
        icon: [
            'iconWrapper',
            'icon'
        ]
    };
    return (0,composeClasses/* default */.A)(slots, getTabUtilityClass, classes);
};
const TabRoot = (0,styled/* default */.Ay)(ButtonBase/* default */.A, {
    name: 'MuiTab',
    slot: 'Root',
    overridesResolver: (props, styles)=>{
        const { ownerState } = props;
        return [
            styles.root,
            ownerState.label && ownerState.icon && styles.labelIcon,
            styles["textColor".concat((0,capitalize/* default */.A)(ownerState.textColor))],
            ownerState.fullWidth && styles.fullWidth,
            ownerState.wrapped && styles.wrapped,
            {
                ["& .".concat(Tab_tabClasses.iconWrapper)]: styles.iconWrapper
            },
            {
                ["& .".concat(Tab_tabClasses.icon)]: styles.icon
            }
        ];
    }
})((0,memoTheme/* default */.A)((param)=>{
    let { theme } = param;
    return {
        ...theme.typography.button,
        maxWidth: 360,
        minWidth: 90,
        position: 'relative',
        minHeight: 48,
        flexShrink: 0,
        padding: '12px 16px',
        overflow: 'hidden',
        whiteSpace: 'normal',
        textAlign: 'center',
        lineHeight: 1.25,
        variants: [
            {
                props: (param)=>{
                    let { ownerState } = param;
                    return ownerState.label && (ownerState.iconPosition === 'top' || ownerState.iconPosition === 'bottom');
                },
                style: {
                    flexDirection: 'column'
                }
            },
            {
                props: (param)=>{
                    let { ownerState } = param;
                    return ownerState.label && ownerState.iconPosition !== 'top' && ownerState.iconPosition !== 'bottom';
                },
                style: {
                    flexDirection: 'row'
                }
            },
            {
                props: (param)=>{
                    let { ownerState } = param;
                    return ownerState.icon && ownerState.label;
                },
                style: {
                    minHeight: 72,
                    paddingTop: 9,
                    paddingBottom: 9
                }
            },
            {
                props: (param)=>{
                    let { ownerState, iconPosition } = param;
                    return ownerState.icon && ownerState.label && iconPosition === 'top';
                },
                style: {
                    ["& > .".concat(Tab_tabClasses.icon)]: {
                        marginBottom: 6
                    }
                }
            },
            {
                props: (param)=>{
                    let { ownerState, iconPosition } = param;
                    return ownerState.icon && ownerState.label && iconPosition === 'bottom';
                },
                style: {
                    ["& > .".concat(Tab_tabClasses.icon)]: {
                        marginTop: 6
                    }
                }
            },
            {
                props: (param)=>{
                    let { ownerState, iconPosition } = param;
                    return ownerState.icon && ownerState.label && iconPosition === 'start';
                },
                style: {
                    ["& > .".concat(Tab_tabClasses.icon)]: {
                        marginRight: theme.spacing(1)
                    }
                }
            },
            {
                props: (param)=>{
                    let { ownerState, iconPosition } = param;
                    return ownerState.icon && ownerState.label && iconPosition === 'end';
                },
                style: {
                    ["& > .".concat(Tab_tabClasses.icon)]: {
                        marginLeft: theme.spacing(1)
                    }
                }
            },
            {
                props: {
                    textColor: 'inherit'
                },
                style: {
                    color: 'inherit',
                    opacity: 0.6,
                    // same opacity as theme.palette.text.secondary
                    ["&.".concat(Tab_tabClasses.selected)]: {
                        opacity: 1
                    },
                    ["&.".concat(Tab_tabClasses.disabled)]: {
                        opacity: (theme.vars || theme).palette.action.disabledOpacity
                    }
                }
            },
            {
                props: {
                    textColor: 'primary'
                },
                style: {
                    color: (theme.vars || theme).palette.text.secondary,
                    ["&.".concat(Tab_tabClasses.selected)]: {
                        color: (theme.vars || theme).palette.primary.main
                    },
                    ["&.".concat(Tab_tabClasses.disabled)]: {
                        color: (theme.vars || theme).palette.text.disabled
                    }
                }
            },
            {
                props: {
                    textColor: 'secondary'
                },
                style: {
                    color: (theme.vars || theme).palette.text.secondary,
                    ["&.".concat(Tab_tabClasses.selected)]: {
                        color: (theme.vars || theme).palette.secondary.main
                    },
                    ["&.".concat(Tab_tabClasses.disabled)]: {
                        color: (theme.vars || theme).palette.text.disabled
                    }
                }
            },
            {
                props: (param)=>{
                    let { ownerState } = param;
                    return ownerState.fullWidth;
                },
                style: {
                    flexShrink: 1,
                    flexGrow: 1,
                    flexBasis: 0,
                    maxWidth: 'none'
                }
            },
            {
                props: (param)=>{
                    let { ownerState } = param;
                    return ownerState.wrapped;
                },
                style: {
                    fontSize: theme.typography.pxToRem(12)
                }
            }
        ]
    };
}));
const Tab = /*#__PURE__*/ react.forwardRef(function Tab(inProps, ref) {
    const props = (0,DefaultPropsProvider/* useDefaultProps */.b)({
        props: inProps,
        name: 'MuiTab'
    });
    const { className, disabled = false, disableFocusRipple = false, // eslint-disable-next-line react/prop-types
    fullWidth, icon: iconProp, iconPosition = 'top', // eslint-disable-next-line react/prop-types
    indicator, label, onChange, onClick, onFocus, // eslint-disable-next-line react/prop-types
    selected, // eslint-disable-next-line react/prop-types
    selectionFollowsFocus, // eslint-disable-next-line react/prop-types
    textColor = 'inherit', value, wrapped = false, ...other } = props;
    const ownerState = {
        ...props,
        disabled,
        disableFocusRipple,
        selected,
        icon: !!iconProp,
        iconPosition,
        label: !!label,
        fullWidth,
        textColor,
        wrapped
    };
    const classes = useUtilityClasses(ownerState);
    const icon = iconProp && label && /*#__PURE__*/ react.isValidElement(iconProp) ? /*#__PURE__*/ react.cloneElement(iconProp, {
        className: (0,clsx/* default */.A)(classes.icon, iconProp.props.className)
    }) : iconProp;
    const handleClick = (event)=>{
        if (!selected && onChange) {
            onChange(event, value);
        }
        if (onClick) {
            onClick(event);
        }
    };
    const handleFocus = (event)=>{
        if (selectionFollowsFocus && !selected && onChange) {
            onChange(event, value);
        }
        if (onFocus) {
            onFocus(event);
        }
    };
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(TabRoot, {
        focusRipple: !disableFocusRipple,
        className: (0,clsx/* default */.A)(classes.root, className),
        ref: ref,
        role: "tab",
        "aria-selected": selected,
        disabled: disabled,
        onClick: handleClick,
        onFocus: handleFocus,
        ownerState: ownerState,
        tabIndex: selected ? 0 : -1,
        ...other,
        children: [
            iconPosition === 'top' || iconPosition === 'start' ? /*#__PURE__*/ (0,jsx_runtime.jsxs)(react.Fragment, {
                children: [
                    icon,
                    label
                ]
            }) : /*#__PURE__*/ (0,jsx_runtime.jsxs)(react.Fragment, {
                children: [
                    label,
                    icon
                ]
            }),
            indicator
        ]
    });
});
 false ? 0 : void 0;
/* harmony default export */ const Tab_Tab = (Tab);


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

/***/ })

}]);
//# sourceMappingURL=9717-fc1a38bab65e3bf5.js.map