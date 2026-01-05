"use strict";
(self["webpackChunk_N_E"] = self["webpackChunk_N_E"] || []).push([[4706],{

/***/ 44706:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ Tooltip_Tooltip)
});

// UNUSED EXPORTS: testReset

// EXTERNAL MODULE: ../../node_modules/.pnpm/react@19.1.0/node_modules/react/index.js
var react = __webpack_require__(94285);
// EXTERNAL MODULE: ../../node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs
var clsx = __webpack_require__(3638);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+utils@6.4.9_@types+react@19.1.8_react@19.1.0/node_modules/@mui/utils/esm/useTimeout/useTimeout.js + 1 modules
var useTimeout = __webpack_require__(45443);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+utils@6.4.9_@types+react@19.1.8_react@19.1.0/node_modules/@mui/utils/esm/composeClasses/composeClasses.js
var composeClasses = __webpack_require__(95116);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+system@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled@1_sfs2vjcbuqchwdpqpmkla22opm/node_modules/@mui/system/esm/colorManipulator/colorManipulator.js + 1 modules
var colorManipulator = __webpack_require__(21567);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+system@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled@1_sfs2vjcbuqchwdpqpmkla22opm/node_modules/@mui/system/esm/RtlProvider/index.js
var RtlProvider = __webpack_require__(93974);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+utils@6.4.9_@types+react@19.1.8_react@19.1.0/node_modules/@mui/utils/esm/isFocusVisible/isFocusVisible.js
var isFocusVisible = __webpack_require__(86012);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+utils@6.4.9_@types+react@19.1.8_react@19.1.0/node_modules/@mui/utils/esm/getReactElementRef/getReactElementRef.js
var getReactElementRef = __webpack_require__(43552);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/styles/styled.js
var styled = __webpack_require__(96543);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/styles/useTheme.js
var useTheme = __webpack_require__(72808);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/utils/memoTheme.js + 1 modules
var memoTheme = __webpack_require__(18558);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/DefaultPropsProvider/DefaultPropsProvider.js
var DefaultPropsProvider = __webpack_require__(85042);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/utils/capitalize.js
var capitalize = __webpack_require__(93385);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/Grow/Grow.js
var Grow = __webpack_require__(79628);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+utils@6.4.9_@types+react@19.1.8_react@19.1.0/node_modules/@mui/utils/esm/useForkRef/useForkRef.js
var useForkRef = __webpack_require__(16316);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+utils@6.4.9_@types+react@19.1.8_react@19.1.0/node_modules/@mui/utils/esm/useEnhancedEffect/useEnhancedEffect.js
var useEnhancedEffect = __webpack_require__(51142);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+utils@6.4.9_@types+react@19.1.8_react@19.1.0/node_modules/@mui/utils/esm/ownerDocument/ownerDocument.js
var ownerDocument = __webpack_require__(48770);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/popper.js + 53 modules
var lib_popper = __webpack_require__(66293);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+utils@6.4.9_@types+react@19.1.8_react@19.1.0/node_modules/@mui/utils/esm/useSlotProps/useSlotProps.js
var useSlotProps = __webpack_require__(93430);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/Portal/Portal.js + 1 modules
var Portal = __webpack_require__(92215);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+utils@6.4.9_@types+react@19.1.8_react@19.1.0/node_modules/@mui/utils/esm/generateUtilityClasses/generateUtilityClasses.js
var generateUtilityClasses = __webpack_require__(92186);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+utils@6.4.9_@types+react@19.1.8_react@19.1.0/node_modules/@mui/utils/esm/generateUtilityClass/generateUtilityClass.js
var generateUtilityClass = __webpack_require__(69014);
;// ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/Popper/popperClasses.js


function getPopperUtilityClass(slot) {
    return (0,generateUtilityClass/* default */.Ay)('MuiPopper', slot);
}
const popperClasses = (0,generateUtilityClasses/* default */.A)('MuiPopper', [
    'root'
]);
/* harmony default export */ const Popper_popperClasses = ((/* unused pure expression or super */ null && (popperClasses)));

// EXTERNAL MODULE: ../../node_modules/.pnpm/react@19.1.0/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(94513);
;// ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/Popper/BasePopper.js
/* __next_internal_client_entry_do_not_use__ default auto */ 








function flipPlacement(placement, direction) {
    if (direction === 'ltr') {
        return placement;
    }
    switch(placement){
        case 'bottom-end':
            return 'bottom-start';
        case 'bottom-start':
            return 'bottom-end';
        case 'top-end':
            return 'top-start';
        case 'top-start':
            return 'top-end';
        default:
            return placement;
    }
}
function resolveAnchorEl(anchorEl) {
    return typeof anchorEl === 'function' ? anchorEl() : anchorEl;
}
function isHTMLElement(element) {
    return element.nodeType !== undefined;
}
function isVirtualElement(element) {
    return !isHTMLElement(element);
}
const useUtilityClasses = (ownerState)=>{
    const { classes } = ownerState;
    const slots = {
        root: [
            'root'
        ]
    };
    return (0,composeClasses/* default */.A)(slots, getPopperUtilityClass, classes);
};
const defaultPopperOptions = {};
const PopperTooltip = /*#__PURE__*/ react.forwardRef(function PopperTooltip(props, forwardedRef) {
    const { anchorEl, children, direction, disablePortal, modifiers, open, placement: initialPlacement, popperOptions, popperRef: popperRefProp, slotProps = {}, slots = {}, TransitionProps, // @ts-ignore internal logic
    ownerState: ownerStateProp, // prevent from spreading to DOM, it can come from the parent component e.g. Select.
    ...other } = props;
    const tooltipRef = react.useRef(null);
    const ownRef = (0,useForkRef/* default */.A)(tooltipRef, forwardedRef);
    const popperRef = react.useRef(null);
    const handlePopperRef = (0,useForkRef/* default */.A)(popperRef, popperRefProp);
    const handlePopperRefRef = react.useRef(handlePopperRef);
    (0,useEnhancedEffect/* default */.A)(()=>{
        handlePopperRefRef.current = handlePopperRef;
    }, [
        handlePopperRef
    ]);
    react.useImperativeHandle(popperRefProp, ()=>popperRef.current, []);
    const rtlPlacement = flipPlacement(initialPlacement, direction);
    /**
   * placement initialized from prop but can change during lifetime if modifiers.flip.
   * modifiers.flip is essentially a flip for controlled/uncontrolled behavior
   */ const [placement, setPlacement] = react.useState(rtlPlacement);
    const [resolvedAnchorElement, setResolvedAnchorElement] = react.useState(resolveAnchorEl(anchorEl));
    react.useEffect(()=>{
        if (popperRef.current) {
            popperRef.current.forceUpdate();
        }
    });
    react.useEffect(()=>{
        if (anchorEl) {
            setResolvedAnchorElement(resolveAnchorEl(anchorEl));
        }
    }, [
        anchorEl
    ]);
    (0,useEnhancedEffect/* default */.A)(()=>{
        if (!resolvedAnchorElement || !open) {
            return undefined;
        }
        const handlePopperUpdate = (data)=>{
            setPlacement(data.placement);
        };
        if (false) {}
        let popperModifiers = [
            {
                name: 'preventOverflow',
                options: {
                    altBoundary: disablePortal
                }
            },
            {
                name: 'flip',
                options: {
                    altBoundary: disablePortal
                }
            },
            {
                name: 'onUpdate',
                enabled: true,
                phase: 'afterWrite',
                fn: (param)=>{
                    let { state } = param;
                    handlePopperUpdate(state);
                }
            }
        ];
        if (modifiers != null) {
            popperModifiers = popperModifiers.concat(modifiers);
        }
        if (popperOptions && popperOptions.modifiers != null) {
            popperModifiers = popperModifiers.concat(popperOptions.modifiers);
        }
        const popper = (0,lib_popper/* createPopper */.n4)(resolvedAnchorElement, tooltipRef.current, {
            placement: rtlPlacement,
            ...popperOptions,
            modifiers: popperModifiers
        });
        handlePopperRefRef.current(popper);
        return ()=>{
            popper.destroy();
            handlePopperRefRef.current(null);
        };
    }, [
        resolvedAnchorElement,
        disablePortal,
        modifiers,
        open,
        popperOptions,
        rtlPlacement
    ]);
    const childProps = {
        placement: placement
    };
    if (TransitionProps !== null) {
        childProps.TransitionProps = TransitionProps;
    }
    const classes = useUtilityClasses(props);
    var _slots_root;
    const Root = (_slots_root = slots.root) !== null && _slots_root !== void 0 ? _slots_root : 'div';
    const rootProps = (0,useSlotProps/* default */.A)({
        elementType: Root,
        externalSlotProps: slotProps.root,
        externalForwardedProps: other,
        additionalProps: {
            role: 'tooltip',
            ref: ownRef
        },
        ownerState: props,
        className: classes.root
    });
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(Root, {
        ...rootProps,
        children: typeof children === 'function' ? children(childProps) : children
    });
});
/**
 * @ignore - internal component.
 */ const Popper = /*#__PURE__*/ react.forwardRef(function Popper(props, forwardedRef) {
    const { anchorEl, children, container: containerProp, direction = 'ltr', disablePortal = false, keepMounted = false, modifiers, open, placement = 'bottom', popperOptions = defaultPopperOptions, popperRef, style, transition = false, slotProps = {}, slots = {}, ...other } = props;
    const [exited, setExited] = react.useState(true);
    const handleEnter = ()=>{
        setExited(false);
    };
    const handleExited = ()=>{
        setExited(true);
    };
    if (!keepMounted && !open && (!transition || exited)) {
        return null;
    }
    // If the container prop is provided, use that
    // If the anchorEl prop is provided, use its parent body element as the container
    // If neither are provided let the Modal take care of choosing the container
    let container;
    if (containerProp) {
        container = containerProp;
    } else if (anchorEl) {
        const resolvedAnchorEl = resolveAnchorEl(anchorEl);
        container = resolvedAnchorEl && isHTMLElement(resolvedAnchorEl) ? (0,ownerDocument/* default */.A)(resolvedAnchorEl).body : (0,ownerDocument/* default */.A)(null).body;
    }
    const display = !open && keepMounted && (!transition || exited) ? 'none' : undefined;
    const transitionProps = transition ? {
        in: open,
        onEnter: handleEnter,
        onExited: handleExited
    } : undefined;
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(Portal/* default */.A, {
        disablePortal: disablePortal,
        container: container,
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(PopperTooltip, {
            anchorEl: anchorEl,
            direction: direction,
            disablePortal: disablePortal,
            modifiers: modifiers,
            ref: forwardedRef,
            open: transition ? !exited : open,
            placement: placement,
            popperOptions: popperOptions,
            popperRef: popperRef,
            slotProps: slotProps,
            slots: slots,
            ...other,
            style: {
                // Prevents scroll issue, waiting for Popper.js to add this style once initiated.
                position: 'fixed',
                // Fix Popper.js display issue
                top: 0,
                left: 0,
                display,
                ...style
            },
            TransitionProps: transitionProps,
            children: children
        })
    });
});
 false ? 0 : void 0;
/* harmony default export */ const BasePopper = (Popper);

;// ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/Popper/Popper.js
/* __next_internal_client_entry_do_not_use__ default auto */ 








const PopperRoot = (0,styled/* default */.Ay)(BasePopper, {
    name: 'MuiPopper',
    slot: 'Root',
    overridesResolver: (props, styles)=>styles.root
})({});
/**
 *
 * Demos:
 *
 * - [Autocomplete](https://v6.mui.com/material-ui/react-autocomplete/)
 * - [Menu](https://v6.mui.com/material-ui/react-menu/)
 * - [Popper](https://v6.mui.com/material-ui/react-popper/)
 *
 * API:
 *
 * - [Popper API](https://v6.mui.com/material-ui/api/popper/)
 */ const Popper_Popper = /*#__PURE__*/ react.forwardRef(function Popper(inProps, ref) {
    const isRtl = (0,RtlProvider/* useRtl */.I)();
    const props = (0,DefaultPropsProvider/* useDefaultProps */.b)({
        props: inProps,
        name: 'MuiPopper'
    });
    const { anchorEl, component, components, componentsProps, container, disablePortal, keepMounted, modifiers, open, placement, popperOptions, popperRef, transition, slots, slotProps, ...other } = props;
    var _slots_root;
    const RootComponent = (_slots_root = slots === null || slots === void 0 ? void 0 : slots.root) !== null && _slots_root !== void 0 ? _slots_root : components === null || components === void 0 ? void 0 : components.Root;
    const otherProps = {
        anchorEl,
        container,
        disablePortal,
        keepMounted,
        modifiers,
        open,
        placement,
        popperOptions,
        popperRef,
        transition,
        ...other
    };
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(PopperRoot, {
        as: component,
        direction: isRtl ? 'rtl' : 'ltr',
        slots: {
            root: RootComponent
        },
        slotProps: slotProps !== null && slotProps !== void 0 ? slotProps : componentsProps,
        ...otherProps,
        ref: ref
    });
});
 false ? 0 : void 0;
/* harmony default export */ const material_Popper_Popper = (Popper_Popper);

// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/utils/useEventCallback.js
var useEventCallback = __webpack_require__(64925);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/utils/useForkRef.js
var utils_useForkRef = __webpack_require__(83379);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/utils/useId.js
var useId = __webpack_require__(78431);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/utils/useControlled.js + 1 modules
var useControlled = __webpack_require__(2408);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/utils/useSlot.js
var useSlot = __webpack_require__(48470);
;// ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/Tooltip/tooltipClasses.js


function getTooltipUtilityClass(slot) {
    return (0,generateUtilityClass/* default */.Ay)('MuiTooltip', slot);
}
const tooltipClasses = (0,generateUtilityClasses/* default */.A)('MuiTooltip', [
    'popper',
    'popperInteractive',
    'popperArrow',
    'popperClose',
    'tooltip',
    'tooltipArrow',
    'touch',
    'tooltipPlacementLeft',
    'tooltipPlacementRight',
    'tooltipPlacementTop',
    'tooltipPlacementBottom',
    'arrow'
]);
/* harmony default export */ const Tooltip_tooltipClasses = (tooltipClasses);

;// ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/Tooltip/Tooltip.js
/* __next_internal_client_entry_do_not_use__ testReset,default auto */ 






















function round(value) {
    return Math.round(value * 1e5) / 1e5;
}
const Tooltip_useUtilityClasses = (ownerState)=>{
    const { classes, disableInteractive, arrow, touch, placement } = ownerState;
    const slots = {
        popper: [
            'popper',
            !disableInteractive && 'popperInteractive',
            arrow && 'popperArrow'
        ],
        tooltip: [
            'tooltip',
            arrow && 'tooltipArrow',
            touch && 'touch',
            "tooltipPlacement".concat((0,capitalize/* default */.A)(placement.split('-')[0]))
        ],
        arrow: [
            'arrow'
        ]
    };
    return (0,composeClasses/* default */.A)(slots, getTooltipUtilityClass, classes);
};
const TooltipPopper = (0,styled/* default */.Ay)(material_Popper_Popper, {
    name: 'MuiTooltip',
    slot: 'Popper',
    overridesResolver: (props, styles)=>{
        const { ownerState } = props;
        return [
            styles.popper,
            !ownerState.disableInteractive && styles.popperInteractive,
            ownerState.arrow && styles.popperArrow,
            !ownerState.open && styles.popperClose
        ];
    }
})((0,memoTheme/* default */.A)((param)=>{
    let { theme } = param;
    return {
        zIndex: (theme.vars || theme).zIndex.tooltip,
        pointerEvents: 'none',
        variants: [
            {
                props: (param)=>{
                    let { ownerState } = param;
                    return !ownerState.disableInteractive;
                },
                style: {
                    pointerEvents: 'auto'
                }
            },
            {
                props: (param)=>{
                    let { open } = param;
                    return !open;
                },
                style: {
                    pointerEvents: 'none'
                }
            },
            {
                props: (param)=>{
                    let { ownerState } = param;
                    return ownerState.arrow;
                },
                style: {
                    ['&[data-popper-placement*="bottom"] .'.concat(Tooltip_tooltipClasses.arrow)]: {
                        top: 0,
                        marginTop: '-0.71em',
                        '&::before': {
                            transformOrigin: '0 100%'
                        }
                    },
                    ['&[data-popper-placement*="top"] .'.concat(Tooltip_tooltipClasses.arrow)]: {
                        bottom: 0,
                        marginBottom: '-0.71em',
                        '&::before': {
                            transformOrigin: '100% 0'
                        }
                    },
                    ['&[data-popper-placement*="right"] .'.concat(Tooltip_tooltipClasses.arrow)]: {
                        height: '1em',
                        width: '0.71em',
                        '&::before': {
                            transformOrigin: '100% 100%'
                        }
                    },
                    ['&[data-popper-placement*="left"] .'.concat(Tooltip_tooltipClasses.arrow)]: {
                        height: '1em',
                        width: '0.71em',
                        '&::before': {
                            transformOrigin: '0 0'
                        }
                    }
                }
            },
            {
                props: (param)=>{
                    let { ownerState } = param;
                    return ownerState.arrow && !ownerState.isRtl;
                },
                style: {
                    ['&[data-popper-placement*="right"] .'.concat(Tooltip_tooltipClasses.arrow)]: {
                        left: 0,
                        marginLeft: '-0.71em'
                    }
                }
            },
            {
                props: (param)=>{
                    let { ownerState } = param;
                    return ownerState.arrow && !!ownerState.isRtl;
                },
                style: {
                    ['&[data-popper-placement*="right"] .'.concat(Tooltip_tooltipClasses.arrow)]: {
                        right: 0,
                        marginRight: '-0.71em'
                    }
                }
            },
            {
                props: (param)=>{
                    let { ownerState } = param;
                    return ownerState.arrow && !ownerState.isRtl;
                },
                style: {
                    ['&[data-popper-placement*="left"] .'.concat(Tooltip_tooltipClasses.arrow)]: {
                        right: 0,
                        marginRight: '-0.71em'
                    }
                }
            },
            {
                props: (param)=>{
                    let { ownerState } = param;
                    return ownerState.arrow && !!ownerState.isRtl;
                },
                style: {
                    ['&[data-popper-placement*="left"] .'.concat(Tooltip_tooltipClasses.arrow)]: {
                        left: 0,
                        marginLeft: '-0.71em'
                    }
                }
            }
        ]
    };
}));
const TooltipTooltip = (0,styled/* default */.Ay)('div', {
    name: 'MuiTooltip',
    slot: 'Tooltip',
    overridesResolver: (props, styles)=>{
        const { ownerState } = props;
        return [
            styles.tooltip,
            ownerState.touch && styles.touch,
            ownerState.arrow && styles.tooltipArrow,
            styles["tooltipPlacement".concat((0,capitalize/* default */.A)(ownerState.placement.split('-')[0]))]
        ];
    }
})((0,memoTheme/* default */.A)((param)=>{
    let { theme } = param;
    return {
        backgroundColor: theme.vars ? theme.vars.palette.Tooltip.bg : (0,colorManipulator/* alpha */.X4)(theme.palette.grey[700], 0.92),
        borderRadius: (theme.vars || theme).shape.borderRadius,
        color: (theme.vars || theme).palette.common.white,
        fontFamily: theme.typography.fontFamily,
        padding: '4px 8px',
        fontSize: theme.typography.pxToRem(11),
        maxWidth: 300,
        margin: 2,
        wordWrap: 'break-word',
        fontWeight: theme.typography.fontWeightMedium,
        [".".concat(Tooltip_tooltipClasses.popper, '[data-popper-placement*="left"] &')]: {
            transformOrigin: 'right center'
        },
        [".".concat(Tooltip_tooltipClasses.popper, '[data-popper-placement*="right"] &')]: {
            transformOrigin: 'left center'
        },
        [".".concat(Tooltip_tooltipClasses.popper, '[data-popper-placement*="top"] &')]: {
            transformOrigin: 'center bottom',
            marginBottom: '14px'
        },
        [".".concat(Tooltip_tooltipClasses.popper, '[data-popper-placement*="bottom"] &')]: {
            transformOrigin: 'center top',
            marginTop: '14px'
        },
        variants: [
            {
                props: (param)=>{
                    let { ownerState } = param;
                    return ownerState.arrow;
                },
                style: {
                    position: 'relative',
                    margin: 0
                }
            },
            {
                props: (param)=>{
                    let { ownerState } = param;
                    return ownerState.touch;
                },
                style: {
                    padding: '8px 16px',
                    fontSize: theme.typography.pxToRem(14),
                    lineHeight: "".concat(round(16 / 14), "em"),
                    fontWeight: theme.typography.fontWeightRegular
                }
            },
            {
                props: (param)=>{
                    let { ownerState } = param;
                    return !ownerState.isRtl;
                },
                style: {
                    [".".concat(Tooltip_tooltipClasses.popper, '[data-popper-placement*="left"] &')]: {
                        marginRight: '14px'
                    },
                    [".".concat(Tooltip_tooltipClasses.popper, '[data-popper-placement*="right"] &')]: {
                        marginLeft: '14px'
                    }
                }
            },
            {
                props: (param)=>{
                    let { ownerState } = param;
                    return !ownerState.isRtl && ownerState.touch;
                },
                style: {
                    [".".concat(Tooltip_tooltipClasses.popper, '[data-popper-placement*="left"] &')]: {
                        marginRight: '24px'
                    },
                    [".".concat(Tooltip_tooltipClasses.popper, '[data-popper-placement*="right"] &')]: {
                        marginLeft: '24px'
                    }
                }
            },
            {
                props: (param)=>{
                    let { ownerState } = param;
                    return !!ownerState.isRtl;
                },
                style: {
                    [".".concat(Tooltip_tooltipClasses.popper, '[data-popper-placement*="left"] &')]: {
                        marginLeft: '14px'
                    },
                    [".".concat(Tooltip_tooltipClasses.popper, '[data-popper-placement*="right"] &')]: {
                        marginRight: '14px'
                    }
                }
            },
            {
                props: (param)=>{
                    let { ownerState } = param;
                    return !!ownerState.isRtl && ownerState.touch;
                },
                style: {
                    [".".concat(Tooltip_tooltipClasses.popper, '[data-popper-placement*="left"] &')]: {
                        marginLeft: '24px'
                    },
                    [".".concat(Tooltip_tooltipClasses.popper, '[data-popper-placement*="right"] &')]: {
                        marginRight: '24px'
                    }
                }
            },
            {
                props: (param)=>{
                    let { ownerState } = param;
                    return ownerState.touch;
                },
                style: {
                    [".".concat(Tooltip_tooltipClasses.popper, '[data-popper-placement*="top"] &')]: {
                        marginBottom: '24px'
                    }
                }
            },
            {
                props: (param)=>{
                    let { ownerState } = param;
                    return ownerState.touch;
                },
                style: {
                    [".".concat(Tooltip_tooltipClasses.popper, '[data-popper-placement*="bottom"] &')]: {
                        marginTop: '24px'
                    }
                }
            }
        ]
    };
}));
const TooltipArrow = (0,styled/* default */.Ay)('span', {
    name: 'MuiTooltip',
    slot: 'Arrow',
    overridesResolver: (props, styles)=>styles.arrow
})((0,memoTheme/* default */.A)((param)=>{
    let { theme } = param;
    return {
        overflow: 'hidden',
        position: 'absolute',
        width: '1em',
        height: '0.71em' /* = width / sqrt(2) = (length of the hypotenuse) */ ,
        boxSizing: 'border-box',
        color: theme.vars ? theme.vars.palette.Tooltip.bg : (0,colorManipulator/* alpha */.X4)(theme.palette.grey[700], 0.9),
        '&::before': {
            content: '""',
            margin: 'auto',
            display: 'block',
            width: '100%',
            height: '100%',
            backgroundColor: 'currentColor',
            transform: 'rotate(45deg)'
        }
    };
}));
let hystersisOpen = false;
const hystersisTimer = new useTimeout/* Timeout */.E();
let cursorPosition = {
    x: 0,
    y: 0
};
function testReset() {
    hystersisOpen = false;
    hystersisTimer.clear();
}
function composeEventHandler(handler, eventHandler) {
    return function(event) {
        for(var _len = arguments.length, params = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++){
            params[_key - 1] = arguments[_key];
        }
        if (eventHandler) {
            eventHandler(event, ...params);
        }
        handler(event, ...params);
    };
}
// TODO v6: Remove PopperComponent, PopperProps, TransitionComponent and TransitionProps.
const Tooltip = /*#__PURE__*/ react.forwardRef(function Tooltip(inProps, ref) {
    const props = (0,DefaultPropsProvider/* useDefaultProps */.b)({
        props: inProps,
        name: 'MuiTooltip'
    });
    const { arrow = false, children: childrenProp, classes: classesProp, components = {}, componentsProps = {}, describeChild = false, disableFocusListener = false, disableHoverListener = false, disableInteractive: disableInteractiveProp = false, disableTouchListener = false, enterDelay = 100, enterNextDelay = 0, enterTouchDelay = 700, followCursor = false, id: idProp, leaveDelay = 0, leaveTouchDelay = 1500, onClose, onOpen, open: openProp, placement = 'bottom', PopperComponent: PopperComponentProp, PopperProps = {}, slotProps = {}, slots = {}, title, TransitionComponent: TransitionComponentProp, TransitionProps, ...other } = props;
    // to prevent runtime errors, developers will need to provide a child as a React element anyway.
    const children = /*#__PURE__*/ react.isValidElement(childrenProp) ? childrenProp : /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
        children: childrenProp
    });
    const theme = (0,useTheme/* default */.A)();
    const isRtl = (0,RtlProvider/* useRtl */.I)();
    const [childNode, setChildNode] = react.useState();
    const [arrowRef, setArrowRef] = react.useState(null);
    const ignoreNonTouchEvents = react.useRef(false);
    const disableInteractive = disableInteractiveProp || followCursor;
    const closeTimer = (0,useTimeout/* default */.A)();
    const enterTimer = (0,useTimeout/* default */.A)();
    const leaveTimer = (0,useTimeout/* default */.A)();
    const touchTimer = (0,useTimeout/* default */.A)();
    const [openState, setOpenState] = (0,useControlled/* default */.A)({
        controlled: openProp,
        default: false,
        name: 'Tooltip',
        state: 'open'
    });
    let open = openState;
    if (false) {}
    const id = (0,useId/* default */.A)(idProp);
    const prevUserSelect = react.useRef();
    const stopTouchInteraction = (0,useEventCallback/* default */.A)(()=>{
        if (prevUserSelect.current !== undefined) {
            document.body.style.WebkitUserSelect = prevUserSelect.current;
            prevUserSelect.current = undefined;
        }
        touchTimer.clear();
    });
    react.useEffect(()=>stopTouchInteraction, [
        stopTouchInteraction
    ]);
    const handleOpen = (event)=>{
        hystersisTimer.clear();
        hystersisOpen = true;
        // The mouseover event will trigger for every nested element in the tooltip.
        // We can skip rerendering when the tooltip is already open.
        // We are using the mouseover event instead of the mouseenter event to fix a hide/show issue.
        setOpenState(true);
        if (onOpen && !open) {
            onOpen(event);
        }
    };
    const handleClose = (0,useEventCallback/* default */.A)(/**
   * @param {React.SyntheticEvent | Event} event
   */ (event)=>{
        hystersisTimer.start(800 + leaveDelay, ()=>{
            hystersisOpen = false;
        });
        setOpenState(false);
        if (onClose && open) {
            onClose(event);
        }
        closeTimer.start(theme.transitions.duration.shortest, ()=>{
            ignoreNonTouchEvents.current = false;
        });
    });
    const handleMouseOver = (event)=>{
        if (ignoreNonTouchEvents.current && event.type !== 'touchstart') {
            return;
        }
        // Remove the title ahead of time.
        // We don't want to wait for the next render commit.
        // We would risk displaying two tooltips at the same time (native + this one).
        if (childNode) {
            childNode.removeAttribute('title');
        }
        enterTimer.clear();
        leaveTimer.clear();
        if (enterDelay || hystersisOpen && enterNextDelay) {
            enterTimer.start(hystersisOpen ? enterNextDelay : enterDelay, ()=>{
                handleOpen(event);
            });
        } else {
            handleOpen(event);
        }
    };
    const handleMouseLeave = (event)=>{
        enterTimer.clear();
        leaveTimer.start(leaveDelay, ()=>{
            handleClose(event);
        });
    };
    const [, setChildIsFocusVisible] = react.useState(false);
    const handleBlur = (event)=>{
        if (!(0,isFocusVisible/* default */.A)(event.target)) {
            setChildIsFocusVisible(false);
            handleMouseLeave(event);
        }
    };
    const handleFocus = (event)=>{
        // Workaround for https://github.com/facebook/react/issues/7769
        // The autoFocus of React might trigger the event before the componentDidMount.
        // We need to account for this eventuality.
        if (!childNode) {
            setChildNode(event.currentTarget);
        }
        if ((0,isFocusVisible/* default */.A)(event.target)) {
            setChildIsFocusVisible(true);
            handleMouseOver(event);
        }
    };
    const detectTouchStart = (event)=>{
        ignoreNonTouchEvents.current = true;
        const childrenProps = children.props;
        if (childrenProps.onTouchStart) {
            childrenProps.onTouchStart(event);
        }
    };
    const handleTouchStart = (event)=>{
        detectTouchStart(event);
        leaveTimer.clear();
        closeTimer.clear();
        stopTouchInteraction();
        prevUserSelect.current = document.body.style.WebkitUserSelect;
        // Prevent iOS text selection on long-tap.
        document.body.style.WebkitUserSelect = 'none';
        touchTimer.start(enterTouchDelay, ()=>{
            document.body.style.WebkitUserSelect = prevUserSelect.current;
            handleMouseOver(event);
        });
    };
    const handleTouchEnd = (event)=>{
        if (children.props.onTouchEnd) {
            children.props.onTouchEnd(event);
        }
        stopTouchInteraction();
        leaveTimer.start(leaveTouchDelay, ()=>{
            handleClose(event);
        });
    };
    react.useEffect(()=>{
        if (!open) {
            return undefined;
        }
        /**
     * @param {KeyboardEvent} nativeEvent
     */ function handleKeyDown(nativeEvent) {
            if (nativeEvent.key === 'Escape') {
                handleClose(nativeEvent);
            }
        }
        document.addEventListener('keydown', handleKeyDown);
        return ()=>{
            document.removeEventListener('keydown', handleKeyDown);
        };
    }, [
        handleClose,
        open
    ]);
    const handleRef = (0,utils_useForkRef/* default */.A)((0,getReactElementRef/* default */.A)(children), setChildNode, ref);
    // There is no point in displaying an empty tooltip.
    // So we exclude all falsy values, except 0, which is valid.
    if (!title && title !== 0) {
        open = false;
    }
    const popperRef = react.useRef();
    const handleMouseMove = (event)=>{
        const childrenProps = children.props;
        if (childrenProps.onMouseMove) {
            childrenProps.onMouseMove(event);
        }
        cursorPosition = {
            x: event.clientX,
            y: event.clientY
        };
        if (popperRef.current) {
            popperRef.current.update();
        }
    };
    const nameOrDescProps = {};
    const titleIsString = typeof title === 'string';
    if (describeChild) {
        nameOrDescProps.title = !open && titleIsString && !disableHoverListener ? title : null;
        nameOrDescProps['aria-describedby'] = open ? id : null;
    } else {
        nameOrDescProps['aria-label'] = titleIsString ? title : null;
        nameOrDescProps['aria-labelledby'] = open && !titleIsString ? id : null;
    }
    const childrenProps = {
        ...nameOrDescProps,
        ...other,
        ...children.props,
        className: (0,clsx/* default */.A)(other.className, children.props.className),
        onTouchStart: detectTouchStart,
        ref: handleRef,
        ...followCursor ? {
            onMouseMove: handleMouseMove
        } : {}
    };
    if (false) {}
    const interactiveWrapperListeners = {};
    if (!disableTouchListener) {
        childrenProps.onTouchStart = handleTouchStart;
        childrenProps.onTouchEnd = handleTouchEnd;
    }
    if (!disableHoverListener) {
        childrenProps.onMouseOver = composeEventHandler(handleMouseOver, childrenProps.onMouseOver);
        childrenProps.onMouseLeave = composeEventHandler(handleMouseLeave, childrenProps.onMouseLeave);
        if (!disableInteractive) {
            interactiveWrapperListeners.onMouseOver = handleMouseOver;
            interactiveWrapperListeners.onMouseLeave = handleMouseLeave;
        }
    }
    if (!disableFocusListener) {
        childrenProps.onFocus = composeEventHandler(handleFocus, childrenProps.onFocus);
        childrenProps.onBlur = composeEventHandler(handleBlur, childrenProps.onBlur);
        if (!disableInteractive) {
            interactiveWrapperListeners.onFocus = handleFocus;
            interactiveWrapperListeners.onBlur = handleBlur;
        }
    }
    if (false) {}
    const ownerState = {
        ...props,
        isRtl,
        arrow,
        disableInteractive,
        placement,
        PopperComponentProp,
        touch: ignoreNonTouchEvents.current
    };
    const resolvedPopperProps = typeof slotProps.popper === 'function' ? slotProps.popper(ownerState) : slotProps.popper;
    const popperOptions = react.useMemo(()=>{
        var _PopperProps_popperOptions, _resolvedPopperProps_popperOptions;
        let tooltipModifiers = [
            {
                name: 'arrow',
                enabled: Boolean(arrowRef),
                options: {
                    element: arrowRef,
                    padding: 4
                }
            }
        ];
        if ((_PopperProps_popperOptions = PopperProps.popperOptions) === null || _PopperProps_popperOptions === void 0 ? void 0 : _PopperProps_popperOptions.modifiers) {
            tooltipModifiers = tooltipModifiers.concat(PopperProps.popperOptions.modifiers);
        }
        if (resolvedPopperProps === null || resolvedPopperProps === void 0 ? void 0 : (_resolvedPopperProps_popperOptions = resolvedPopperProps.popperOptions) === null || _resolvedPopperProps_popperOptions === void 0 ? void 0 : _resolvedPopperProps_popperOptions.modifiers) {
            tooltipModifiers = tooltipModifiers.concat(resolvedPopperProps.popperOptions.modifiers);
        }
        return {
            ...PopperProps.popperOptions,
            ...resolvedPopperProps === null || resolvedPopperProps === void 0 ? void 0 : resolvedPopperProps.popperOptions,
            modifiers: tooltipModifiers
        };
    }, [
        arrowRef,
        PopperProps.popperOptions,
        resolvedPopperProps === null || resolvedPopperProps === void 0 ? void 0 : resolvedPopperProps.popperOptions
    ]);
    const classes = Tooltip_useUtilityClasses(ownerState);
    const resolvedTransitionProps = typeof slotProps.transition === 'function' ? slotProps.transition(ownerState) : slotProps.transition;
    var _components_Transition, _slotProps_arrow, _slotProps_tooltip;
    const externalForwardedProps = {
        slots: {
            popper: components.Popper,
            transition: (_components_Transition = components.Transition) !== null && _components_Transition !== void 0 ? _components_Transition : TransitionComponentProp,
            tooltip: components.Tooltip,
            arrow: components.Arrow,
            ...slots
        },
        slotProps: {
            arrow: (_slotProps_arrow = slotProps.arrow) !== null && _slotProps_arrow !== void 0 ? _slotProps_arrow : componentsProps.arrow,
            popper: {
                ...PopperProps,
                ...resolvedPopperProps !== null && resolvedPopperProps !== void 0 ? resolvedPopperProps : componentsProps.popper
            },
            // resolvedPopperProps can be spread because it's already an object
            tooltip: (_slotProps_tooltip = slotProps.tooltip) !== null && _slotProps_tooltip !== void 0 ? _slotProps_tooltip : componentsProps.tooltip,
            transition: {
                ...TransitionProps,
                ...resolvedTransitionProps !== null && resolvedTransitionProps !== void 0 ? resolvedTransitionProps : componentsProps.transition
            }
        }
    };
    const [PopperSlot, popperSlotProps] = (0,useSlot/* default */.A)('popper', {
        elementType: TooltipPopper,
        externalForwardedProps,
        ownerState,
        className: (0,clsx/* default */.A)(classes.popper, PopperProps === null || PopperProps === void 0 ? void 0 : PopperProps.className)
    });
    const [TransitionSlot, transitionSlotProps] = (0,useSlot/* default */.A)('transition', {
        elementType: Grow/* default */.A,
        externalForwardedProps,
        ownerState
    });
    const [TooltipSlot, tooltipSlotProps] = (0,useSlot/* default */.A)('tooltip', {
        elementType: TooltipTooltip,
        className: classes.tooltip,
        externalForwardedProps,
        ownerState
    });
    const [ArrowSlot, arrowSlotProps] = (0,useSlot/* default */.A)('arrow', {
        elementType: TooltipArrow,
        className: classes.arrow,
        externalForwardedProps,
        ownerState,
        ref: setArrowRef
    });
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(react.Fragment, {
        children: [
            /*#__PURE__*/ react.cloneElement(children, childrenProps),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(PopperSlot, {
                as: PopperComponentProp !== null && PopperComponentProp !== void 0 ? PopperComponentProp : material_Popper_Popper,
                placement: placement,
                anchorEl: followCursor ? {
                    getBoundingClientRect: ()=>({
                            top: cursorPosition.y,
                            left: cursorPosition.x,
                            right: cursorPosition.x,
                            bottom: cursorPosition.y,
                            width: 0,
                            height: 0
                        })
                } : childNode,
                popperRef: popperRef,
                open: childNode ? open : false,
                id: id,
                transition: true,
                ...interactiveWrapperListeners,
                ...popperSlotProps,
                popperOptions: popperOptions,
                children: (param)=>{
                    let { TransitionProps: TransitionPropsInner } = param;
                    return /*#__PURE__*/ (0,jsx_runtime.jsx)(TransitionSlot, {
                        timeout: theme.transitions.duration.shorter,
                        ...TransitionPropsInner,
                        ...transitionSlotProps,
                        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(TooltipSlot, {
                            ...tooltipSlotProps,
                            children: [
                                title,
                                arrow ? /*#__PURE__*/ (0,jsx_runtime.jsx)(ArrowSlot, {
                                    ...arrowSlotProps
                                }) : null
                            ]
                        })
                    });
                }
            })
        ]
    });
});
 false ? 0 : void 0;
/* harmony default export */ const Tooltip_Tooltip = (Tooltip);


/***/ })

}]);
//# sourceMappingURL=4706-8517e0d4a6c0e5f7.js.map