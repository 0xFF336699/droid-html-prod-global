"use strict";
(self["webpackChunk_N_E"] = self["webpackChunk_N_E"] || []).push([[531],{

/***/ 48247:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ material_Popper_Popper)
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+system@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled@1_sfs2vjcbuqchwdpqpmkla22opm/node_modules/@mui/system/esm/RtlProvider/index.js
var RtlProvider = __webpack_require__(93974);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react@19.1.0/node_modules/react/index.js
var react = __webpack_require__(94285);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+utils@6.4.9_@types+react@19.1.8_react@19.1.0/node_modules/@mui/utils/esm/useForkRef/useForkRef.js
var useForkRef = __webpack_require__(16316);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+utils@6.4.9_@types+react@19.1.8_react@19.1.0/node_modules/@mui/utils/esm/useEnhancedEffect/useEnhancedEffect.js
var useEnhancedEffect = __webpack_require__(51142);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+utils@6.4.9_@types+react@19.1.8_react@19.1.0/node_modules/@mui/utils/esm/ownerDocument/ownerDocument.js
var ownerDocument = __webpack_require__(48770);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/popper.js + 53 modules
var lib_popper = __webpack_require__(66293);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+utils@6.4.9_@types+react@19.1.8_react@19.1.0/node_modules/@mui/utils/esm/composeClasses/composeClasses.js
var composeClasses = __webpack_require__(95116);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+utils@6.4.9_@types+react@19.1.8_react@19.1.0/node_modules/@mui/utils/esm/useSlotProps/useSlotProps.js
var useSlotProps = __webpack_require__(93430);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/Portal/Portal.js
var Portal = __webpack_require__(19185);
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

// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/styles/styled.js
var styled = __webpack_require__(64624);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/DefaultPropsProvider/DefaultPropsProvider.js
var DefaultPropsProvider = __webpack_require__(79209);
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


/***/ }),

/***/ 82797:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ MenuItem_MenuItem)
});

// UNUSED EXPORTS: overridesResolver

// EXTERNAL MODULE: ../../node_modules/.pnpm/react@19.1.0/node_modules/react/index.js
var react = __webpack_require__(94285);
// EXTERNAL MODULE: ../../node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs
var clsx = __webpack_require__(3638);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+utils@6.4.9_@types+react@19.1.8_react@19.1.0/node_modules/@mui/utils/esm/composeClasses/composeClasses.js
var composeClasses = __webpack_require__(95116);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+system@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled@1_sfs2vjcbuqchwdpqpmkla22opm/node_modules/@mui/system/esm/colorManipulator/colorManipulator.js + 1 modules
var colorManipulator = __webpack_require__(21567);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/styles/rootShouldForwardProp.js
var rootShouldForwardProp = __webpack_require__(84044);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/styles/styled.js
var styled = __webpack_require__(64624);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/utils/memoTheme.js + 1 modules
var memoTheme = __webpack_require__(10355);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/DefaultPropsProvider/DefaultPropsProvider.js
var DefaultPropsProvider = __webpack_require__(79209);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/List/ListContext.js
var ListContext = __webpack_require__(5368);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/ButtonBase/ButtonBase.js + 5 modules
var ButtonBase = __webpack_require__(42932);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/utils/useEnhancedEffect.js
var useEnhancedEffect = __webpack_require__(34486);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/utils/useForkRef.js
var useForkRef = __webpack_require__(71878);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/Divider/dividerClasses.js
var dividerClasses = __webpack_require__(70745);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+utils@6.4.9_@types+react@19.1.8_react@19.1.0/node_modules/@mui/utils/esm/generateUtilityClasses/generateUtilityClasses.js
var generateUtilityClasses = __webpack_require__(92186);
;// ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/ListItemIcon/listItemIconClasses.js


function getListItemIconUtilityClass(slot) {
    return generateUtilityClass('MuiListItemIcon', slot);
}
const listItemIconClasses = (0,generateUtilityClasses/* default */.A)('MuiListItemIcon', [
    'root',
    'alignItemsFlexStart'
]);
/* harmony default export */ const ListItemIcon_listItemIconClasses = (listItemIconClasses);

// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/ListItemText/listItemTextClasses.js
var listItemTextClasses = __webpack_require__(45279);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+utils@6.4.9_@types+react@19.1.8_react@19.1.0/node_modules/@mui/utils/esm/generateUtilityClass/generateUtilityClass.js
var generateUtilityClass_generateUtilityClass = __webpack_require__(69014);
;// ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/MenuItem/menuItemClasses.js


function getMenuItemUtilityClass(slot) {
    return (0,generateUtilityClass_generateUtilityClass/* default */.Ay)('MuiMenuItem', slot);
}
const menuItemClasses = (0,generateUtilityClasses/* default */.A)('MuiMenuItem', [
    'root',
    'focusVisible',
    'dense',
    'disabled',
    'divider',
    'gutters',
    'selected'
]);
/* harmony default export */ const MenuItem_menuItemClasses = (menuItemClasses);

// EXTERNAL MODULE: ../../node_modules/.pnpm/react@19.1.0/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(94513);
;// ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/MenuItem/MenuItem.js
/* __next_internal_client_entry_do_not_use__ overridesResolver,default auto */ 

















const overridesResolver = (props, styles)=>{
    const { ownerState } = props;
    return [
        styles.root,
        ownerState.dense && styles.dense,
        ownerState.divider && styles.divider,
        !ownerState.disableGutters && styles.gutters
    ];
};
const useUtilityClasses = (ownerState)=>{
    const { disabled, dense, divider, disableGutters, selected, classes } = ownerState;
    const slots = {
        root: [
            'root',
            dense && 'dense',
            disabled && 'disabled',
            !disableGutters && 'gutters',
            divider && 'divider',
            selected && 'selected'
        ]
    };
    const composedClasses = (0,composeClasses/* default */.A)(slots, getMenuItemUtilityClass, classes);
    return {
        ...classes,
        ...composedClasses
    };
};
const MenuItemRoot = (0,styled/* default */.Ay)(ButtonBase/* default */.A, {
    shouldForwardProp: (prop)=>(0,rootShouldForwardProp/* default */.A)(prop) || prop === 'classes',
    name: 'MuiMenuItem',
    slot: 'Root',
    overridesResolver
})((0,memoTheme/* default */.A)((param)=>{
    let { theme } = param;
    return {
        ...theme.typography.body1,
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'center',
        position: 'relative',
        textDecoration: 'none',
        minHeight: 48,
        paddingTop: 6,
        paddingBottom: 6,
        boxSizing: 'border-box',
        whiteSpace: 'nowrap',
        '&:hover': {
            textDecoration: 'none',
            backgroundColor: (theme.vars || theme).palette.action.hover,
            // Reset on touch devices, it doesn't add specificity
            '@media (hover: none)': {
                backgroundColor: 'transparent'
            }
        },
        ["&.".concat(MenuItem_menuItemClasses.selected)]: {
            backgroundColor: theme.vars ? "rgba(".concat(theme.vars.palette.primary.mainChannel, " / ").concat(theme.vars.palette.action.selectedOpacity, ")") : (0,colorManipulator/* alpha */.X4)(theme.palette.primary.main, theme.palette.action.selectedOpacity),
            ["&.".concat(MenuItem_menuItemClasses.focusVisible)]: {
                backgroundColor: theme.vars ? "rgba(".concat(theme.vars.palette.primary.mainChannel, " / calc(").concat(theme.vars.palette.action.selectedOpacity, " + ").concat(theme.vars.palette.action.focusOpacity, "))") : (0,colorManipulator/* alpha */.X4)(theme.palette.primary.main, theme.palette.action.selectedOpacity + theme.palette.action.focusOpacity)
            }
        },
        ["&.".concat(MenuItem_menuItemClasses.selected, ":hover")]: {
            backgroundColor: theme.vars ? "rgba(".concat(theme.vars.palette.primary.mainChannel, " / calc(").concat(theme.vars.palette.action.selectedOpacity, " + ").concat(theme.vars.palette.action.hoverOpacity, "))") : (0,colorManipulator/* alpha */.X4)(theme.palette.primary.main, theme.palette.action.selectedOpacity + theme.palette.action.hoverOpacity),
            // Reset on touch devices, it doesn't add specificity
            '@media (hover: none)': {
                backgroundColor: theme.vars ? "rgba(".concat(theme.vars.palette.primary.mainChannel, " / ").concat(theme.vars.palette.action.selectedOpacity, ")") : (0,colorManipulator/* alpha */.X4)(theme.palette.primary.main, theme.palette.action.selectedOpacity)
            }
        },
        ["&.".concat(MenuItem_menuItemClasses.focusVisible)]: {
            backgroundColor: (theme.vars || theme).palette.action.focus
        },
        ["&.".concat(MenuItem_menuItemClasses.disabled)]: {
            opacity: (theme.vars || theme).palette.action.disabledOpacity
        },
        ["& + .".concat(dividerClasses/* default */.A.root)]: {
            marginTop: theme.spacing(1),
            marginBottom: theme.spacing(1)
        },
        ["& + .".concat(dividerClasses/* default */.A.inset)]: {
            marginLeft: 52
        },
        ["& .".concat(listItemTextClasses/* default */.A.root)]: {
            marginTop: 0,
            marginBottom: 0
        },
        ["& .".concat(listItemTextClasses/* default */.A.inset)]: {
            paddingLeft: 36
        },
        ["& .".concat(ListItemIcon_listItemIconClasses.root)]: {
            minWidth: 36
        },
        variants: [
            {
                props: (param)=>{
                    let { ownerState } = param;
                    return !ownerState.disableGutters;
                },
                style: {
                    paddingLeft: 16,
                    paddingRight: 16
                }
            },
            {
                props: (param)=>{
                    let { ownerState } = param;
                    return ownerState.divider;
                },
                style: {
                    borderBottom: "1px solid ".concat((theme.vars || theme).palette.divider),
                    backgroundClip: 'padding-box'
                }
            },
            {
                props: (param)=>{
                    let { ownerState } = param;
                    return !ownerState.dense;
                },
                style: {
                    [theme.breakpoints.up('sm')]: {
                        minHeight: 'auto'
                    }
                }
            },
            {
                props: (param)=>{
                    let { ownerState } = param;
                    return ownerState.dense;
                },
                style: {
                    minHeight: 32,
                    // https://m2.material.io/components/menus#specs > Dense
                    paddingTop: 4,
                    paddingBottom: 4,
                    ...theme.typography.body2,
                    ["& .".concat(ListItemIcon_listItemIconClasses.root, " svg")]: {
                        fontSize: '1.25rem'
                    }
                }
            }
        ]
    };
}));
const MenuItem = /*#__PURE__*/ react.forwardRef(function MenuItem(inProps, ref) {
    const props = (0,DefaultPropsProvider/* useDefaultProps */.b)({
        props: inProps,
        name: 'MuiMenuItem'
    });
    const { autoFocus = false, component = 'li', dense = false, divider = false, disableGutters = false, focusVisibleClassName, role = 'menuitem', tabIndex: tabIndexProp, className, ...other } = props;
    const context = react.useContext(ListContext/* default */.A);
    const childContext = react.useMemo(()=>({
            dense: dense || context.dense || false,
            disableGutters
        }), [
        context.dense,
        dense,
        disableGutters
    ]);
    const menuItemRef = react.useRef(null);
    (0,useEnhancedEffect/* default */.A)(()=>{
        if (autoFocus) {
            if (menuItemRef.current) {
                menuItemRef.current.focus();
            } else if (false) {}
        }
    }, [
        autoFocus
    ]);
    const ownerState = {
        ...props,
        dense: childContext.dense,
        divider,
        disableGutters
    };
    const classes = useUtilityClasses(props);
    const handleRef = (0,useForkRef/* default */.A)(menuItemRef, ref);
    let tabIndex;
    if (!props.disabled) {
        tabIndex = tabIndexProp !== undefined ? tabIndexProp : -1;
    }
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(ListContext/* default */.A.Provider, {
        value: childContext,
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(MenuItemRoot, {
            ref: handleRef,
            role: role,
            tabIndex: tabIndex,
            component: component,
            focusVisibleClassName: (0,clsx/* default */.A)(classes.focusVisible, focusVisibleClassName),
            className: (0,clsx/* default */.A)(classes.root, className),
            ...other,
            ownerState: ownerState,
            classes: classes
        })
    });
});
 false ? 0 : void 0;
/* harmony default export */ const MenuItem_MenuItem = (MenuItem);


/***/ })

}]);
//# sourceMappingURL=531-6b28f6100f7d15bf.js.map