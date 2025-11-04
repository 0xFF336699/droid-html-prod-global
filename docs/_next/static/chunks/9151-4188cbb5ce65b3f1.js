"use strict";
(self["webpackChunk_N_E"] = self["webpackChunk_N_E"] || []).push([[9151],{

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

/***/ 21183:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   gr: () => (/* binding */ isAdornedStart),
/* harmony export */   lq: () => (/* binding */ isFilled)
/* harmony export */ });
/* unused harmony export hasValue */
// Supports determination of isControlled().
// Controlled input accepts its current value as a prop.
//
// @see https://facebook.github.io/react/docs/forms.html#controlled-components
// @param value
// @returns {boolean} true if string (including '') or number (including zero)
function hasValue(value) {
    return value != null && !(Array.isArray(value) && value.length === 0);
}
// Determine if field is empty or filled.
// Response determines if label is presented above field or as placeholder.
//
// @param obj
// @param SSR
// @returns {boolean} False when not present or empty string.
//                    True when any number or string with length.
function isFilled(obj) {
    let SSR = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false;
    return obj && (hasValue(obj.value) && obj.value !== '' || SSR && hasValue(obj.defaultValue) && obj.defaultValue !== '');
}
// Determine if an Input is adorned on start.
// It's corresponding to the left with LTR.
//
// @param obj
// @returns {boolean} False when no adornments.
//                    True when adorned at the start.
function isAdornedStart(obj) {
    return obj.startAdornment;
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

/***/ 25245:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   g: () => (/* binding */ getInputBaseUtilityClass)
/* harmony export */ });
/* harmony import */ var _mui_utils_generateUtilityClasses__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(92186);
/* harmony import */ var _mui_utils_generateUtilityClass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(69014);


function getInputBaseUtilityClass(slot) {
    return (0,_mui_utils_generateUtilityClass__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Ay)('MuiInputBase', slot);
}
const inputBaseClasses = (0,_mui_utils_generateUtilityClasses__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A)('MuiInputBase', [
    'root',
    'formControl',
    'focused',
    'disabled',
    'adornedStart',
    'adornedEnd',
    'error',
    'sizeSmall',
    'multiline',
    'colorSecondary',
    'fullWidth',
    'hiddenLabel',
    'readOnly',
    'input',
    'inputSizeSmall',
    'inputMultiline',
    'inputTypeSearch',
    'inputAdornedStart',
    'inputAdornedEnd',
    'inputHiddenLabel'
]);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (inputBaseClasses);


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

/***/ 41918:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(94285);
/* __next_internal_client_entry_do_not_use__ default auto */ 
/**
 * @ignore - internal component.
 */ const FormControlContext = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createContext(undefined);
if (false) {}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FormControlContext);


/***/ }),

/***/ 65104:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ formControlState)
/* harmony export */ });
function formControlState(param) {
    let { props, states, muiFormControl } = param;
    return states.reduce((acc, state)=>{
        acc[state] = props[state];
        if (muiFormControl) {
            if (typeof props[state] === 'undefined') {
                acc[state] = muiFormControl[state];
            }
        }
        return acc;
    }, {});
}


/***/ }),

/***/ 67286:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ useFormControl)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(94285);
/* harmony import */ var _FormControlContext_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(41918);
/* __next_internal_client_entry_do_not_use__ default auto */ 

function useFormControl() {
    return react__WEBPACK_IMPORTED_MODULE_0__.useContext(_FormControlContext_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A);
}


/***/ }),

/***/ 82827:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Ay: () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   Oj: () => (/* binding */ inputOverridesResolver),
/* harmony export */   Sh: () => (/* binding */ InputBaseRoot),
/* harmony export */   WC: () => (/* binding */ rootOverridesResolver),
/* harmony export */   ck: () => (/* binding */ InputBaseInput)
/* harmony export */ });
/* harmony import */ var _mui_utils_formatMuiErrorMessage__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(82554);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(94285);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(3638);
/* harmony import */ var _mui_utils_composeClasses__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(95116);
/* harmony import */ var _TextareaAutosize_index_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(90333);
/* harmony import */ var _utils_isHostComponent_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(7391);
/* harmony import */ var _FormControl_formControlState_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(65104);
/* harmony import */ var _FormControl_FormControlContext_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(41918);
/* harmony import */ var _FormControl_useFormControl_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(67286);
/* harmony import */ var _zero_styled_index_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(64624);
/* harmony import */ var _zero_styled_index_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(14357);
/* harmony import */ var _utils_memoTheme_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(10355);
/* harmony import */ var _DefaultPropsProvider_index_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(79209);
/* harmony import */ var _utils_capitalize_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(99512);
/* harmony import */ var _utils_useForkRef_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(71878);
/* harmony import */ var _utils_useEnhancedEffect_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(34486);
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(21183);
/* harmony import */ var _inputBaseClasses_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(25245);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(94513);
/* __next_internal_client_entry_do_not_use__ rootOverridesResolver,inputOverridesResolver,InputBaseRoot,InputBaseInput,default auto */ 
var _InputGlobalStyles;




















const rootOverridesResolver = (props, styles)=>{
    const { ownerState } = props;
    return [
        styles.root,
        ownerState.formControl && styles.formControl,
        ownerState.startAdornment && styles.adornedStart,
        ownerState.endAdornment && styles.adornedEnd,
        ownerState.error && styles.error,
        ownerState.size === 'small' && styles.sizeSmall,
        ownerState.multiline && styles.multiline,
        ownerState.color && styles["color".concat((0,_utils_capitalize_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A)(ownerState.color))],
        ownerState.fullWidth && styles.fullWidth,
        ownerState.hiddenLabel && styles.hiddenLabel
    ];
};
const inputOverridesResolver = (props, styles)=>{
    const { ownerState } = props;
    return [
        styles.input,
        ownerState.size === 'small' && styles.inputSizeSmall,
        ownerState.multiline && styles.inputMultiline,
        ownerState.type === 'search' && styles.inputTypeSearch,
        ownerState.startAdornment && styles.inputAdornedStart,
        ownerState.endAdornment && styles.inputAdornedEnd,
        ownerState.hiddenLabel && styles.inputHiddenLabel
    ];
};
const useUtilityClasses = (ownerState)=>{
    const { classes, color, disabled, error, endAdornment, focused, formControl, fullWidth, hiddenLabel, multiline, readOnly, size, startAdornment, type } = ownerState;
    const slots = {
        root: [
            'root',
            "color".concat((0,_utils_capitalize_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A)(color)),
            disabled && 'disabled',
            error && 'error',
            fullWidth && 'fullWidth',
            focused && 'focused',
            formControl && 'formControl',
            size && size !== 'medium' && "size".concat((0,_utils_capitalize_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A)(size)),
            multiline && 'multiline',
            startAdornment && 'adornedStart',
            endAdornment && 'adornedEnd',
            hiddenLabel && 'hiddenLabel',
            readOnly && 'readOnly'
        ],
        input: [
            'input',
            disabled && 'disabled',
            type === 'search' && 'inputTypeSearch',
            multiline && 'inputMultiline',
            size === 'small' && 'inputSizeSmall',
            hiddenLabel && 'inputHiddenLabel',
            startAdornment && 'inputAdornedStart',
            endAdornment && 'inputAdornedEnd',
            readOnly && 'readOnly'
        ]
    };
    return (0,_mui_utils_composeClasses__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A)(slots, _inputBaseClasses_js__WEBPACK_IMPORTED_MODULE_4__/* .getInputBaseUtilityClass */ .g, classes);
};
const InputBaseRoot = (0,_zero_styled_index_js__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Ay)('div', {
    name: 'MuiInputBase',
    slot: 'Root',
    overridesResolver: rootOverridesResolver
})((0,_utils_memoTheme_js__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .A)((param)=>{
    let { theme } = param;
    return {
        ...theme.typography.body1,
        color: (theme.vars || theme).palette.text.primary,
        lineHeight: '1.4375em',
        // 23px
        boxSizing: 'border-box',
        // Prevent padding issue with fullWidth.
        position: 'relative',
        cursor: 'text',
        display: 'inline-flex',
        alignItems: 'center',
        ["&.".concat(_inputBaseClasses_js__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A.disabled)]: {
            color: (theme.vars || theme).palette.text.disabled,
            cursor: 'default'
        },
        variants: [
            {
                props: (param)=>{
                    let { ownerState } = param;
                    return ownerState.multiline;
                },
                style: {
                    padding: '4px 0 5px'
                }
            },
            {
                props: (param)=>{
                    let { ownerState, size } = param;
                    return ownerState.multiline && size === 'small';
                },
                style: {
                    paddingTop: 1
                }
            },
            {
                props: (param)=>{
                    let { ownerState } = param;
                    return ownerState.fullWidth;
                },
                style: {
                    width: '100%'
                }
            }
        ]
    };
}));
const InputBaseInput = (0,_zero_styled_index_js__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Ay)('input', {
    name: 'MuiInputBase',
    slot: 'Input',
    overridesResolver: inputOverridesResolver
})((0,_utils_memoTheme_js__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .A)((param)=>{
    let { theme } = param;
    const light = theme.palette.mode === 'light';
    const placeholder = {
        color: 'currentColor',
        ...theme.vars ? {
            opacity: theme.vars.opacity.inputPlaceholder
        } : {
            opacity: light ? 0.42 : 0.5
        },
        transition: theme.transitions.create('opacity', {
            duration: theme.transitions.duration.shorter
        })
    };
    const placeholderHidden = {
        opacity: '0 !important'
    };
    const placeholderVisible = theme.vars ? {
        opacity: theme.vars.opacity.inputPlaceholder
    } : {
        opacity: light ? 0.42 : 0.5
    };
    return {
        font: 'inherit',
        letterSpacing: 'inherit',
        color: 'currentColor',
        padding: '4px 0 5px',
        border: 0,
        boxSizing: 'content-box',
        background: 'none',
        height: '1.4375em',
        // Reset 23pxthe native input line-height
        margin: 0,
        // Reset for Safari
        WebkitTapHighlightColor: 'transparent',
        display: 'block',
        // Make the flex item shrink with Firefox
        minWidth: 0,
        width: '100%',
        '&::-webkit-input-placeholder': placeholder,
        '&::-moz-placeholder': placeholder,
        // Firefox 19+
        '&::-ms-input-placeholder': placeholder,
        // Edge
        '&:focus': {
            outline: 0
        },
        // Reset Firefox invalid required input style
        '&:invalid': {
            boxShadow: 'none'
        },
        '&::-webkit-search-decoration': {
            // Remove the padding when type=search.
            WebkitAppearance: 'none'
        },
        // Show and hide the placeholder logic
        ["label[data-shrink=false] + .".concat(_inputBaseClasses_js__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A.formControl, " &")]: {
            '&::-webkit-input-placeholder': placeholderHidden,
            '&::-moz-placeholder': placeholderHidden,
            // Firefox 19+
            '&::-ms-input-placeholder': placeholderHidden,
            // Edge
            '&:focus::-webkit-input-placeholder': placeholderVisible,
            '&:focus::-moz-placeholder': placeholderVisible,
            // Firefox 19+
            '&:focus::-ms-input-placeholder': placeholderVisible // Edge
        },
        ["&.".concat(_inputBaseClasses_js__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A.disabled)]: {
            opacity: 1,
            // Reset iOS opacity
            WebkitTextFillColor: (theme.vars || theme).palette.text.disabled // Fix opacity Safari bug
        },
        variants: [
            {
                props: (param)=>{
                    let { ownerState } = param;
                    return !ownerState.disableInjectingGlobalStyles;
                },
                style: {
                    animationName: 'mui-auto-fill-cancel',
                    animationDuration: '10ms',
                    '&:-webkit-autofill': {
                        animationDuration: '5000s',
                        animationName: 'mui-auto-fill'
                    }
                }
            },
            {
                props: {
                    size: 'small'
                },
                style: {
                    paddingTop: 1
                }
            },
            {
                props: (param)=>{
                    let { ownerState } = param;
                    return ownerState.multiline;
                },
                style: {
                    height: 'auto',
                    resize: 'none',
                    padding: 0,
                    paddingTop: 0
                }
            },
            {
                props: {
                    type: 'search'
                },
                style: {
                    MozAppearance: 'textfield' // Improve type search style.
                }
            }
        ]
    };
}));
const InputGlobalStyles = (0,_zero_styled_index_js__WEBPACK_IMPORTED_MODULE_7__/* .globalCss */ .Dp)({
    '@keyframes mui-auto-fill': {
        from: {
            display: 'block'
        }
    },
    '@keyframes mui-auto-fill-cancel': {
        from: {
            display: 'block'
        }
    }
});
/**
 * `InputBase` contains as few styles as possible.
 * It aims to be a simple building block for creating an input.
 * It contains a load of style reset and some state logic.
 */ const InputBase = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(function InputBase(inProps, ref) {
    const props = (0,_DefaultPropsProvider_index_js__WEBPACK_IMPORTED_MODULE_8__/* .useDefaultProps */ .b)({
        props: inProps,
        name: 'MuiInputBase'
    });
    const { 'aria-describedby': ariaDescribedby, autoComplete, autoFocus, className, color, components = {}, componentsProps = {}, defaultValue, disabled, disableInjectingGlobalStyles, endAdornment, error, fullWidth = false, id, inputComponent = 'input', inputProps: inputPropsProp = {}, inputRef: inputRefProp, margin, maxRows, minRows, multiline = false, name, onBlur, onChange, onClick, onFocus, onKeyDown, onKeyUp, placeholder, readOnly, renderSuffix, rows, size, slotProps = {}, slots = {}, startAdornment, type = 'text', value: valueProp, ...other } = props;
    const value = inputPropsProp.value != null ? inputPropsProp.value : valueProp;
    const { current: isControlled } = react__WEBPACK_IMPORTED_MODULE_0__.useRef(value != null);
    const inputRef = react__WEBPACK_IMPORTED_MODULE_0__.useRef();
    const handleInputRefWarning = react__WEBPACK_IMPORTED_MODULE_0__.useCallback((instance)=>{
        if (false) {}
    }, []);
    const handleInputRef = (0,_utils_useForkRef_js__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .A)(inputRef, inputRefProp, inputPropsProp.ref, handleInputRefWarning);
    const [focused, setFocused] = react__WEBPACK_IMPORTED_MODULE_0__.useState(false);
    const muiFormControl = (0,_FormControl_useFormControl_js__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .A)();
    if (false) {}
    const fcs = (0,_FormControl_formControlState_js__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .A)({
        props,
        muiFormControl,
        states: [
            'color',
            'disabled',
            'error',
            'hiddenLabel',
            'size',
            'required',
            'filled'
        ]
    });
    fcs.focused = muiFormControl ? muiFormControl.focused : focused;
    // The blur won't fire when the disabled state is set on a focused input.
    // We need to book keep the focused state manually.
    react__WEBPACK_IMPORTED_MODULE_0__.useEffect(()=>{
        if (!muiFormControl && disabled && focused) {
            setFocused(false);
            if (onBlur) {
                onBlur();
            }
        }
    }, [
        muiFormControl,
        disabled,
        focused,
        onBlur
    ]);
    const onFilled = muiFormControl && muiFormControl.onFilled;
    const onEmpty = muiFormControl && muiFormControl.onEmpty;
    const checkDirty = react__WEBPACK_IMPORTED_MODULE_0__.useCallback((obj)=>{
        if ((0,_utils_js__WEBPACK_IMPORTED_MODULE_12__/* .isFilled */ .lq)(obj)) {
            if (onFilled) {
                onFilled();
            }
        } else if (onEmpty) {
            onEmpty();
        }
    }, [
        onFilled,
        onEmpty
    ]);
    (0,_utils_useEnhancedEffect_js__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .A)(()=>{
        if (isControlled) {
            checkDirty({
                value
            });
        }
    }, [
        value,
        checkDirty,
        isControlled
    ]);
    const handleFocus = (event)=>{
        if (onFocus) {
            onFocus(event);
        }
        if (inputPropsProp.onFocus) {
            inputPropsProp.onFocus(event);
        }
        if (muiFormControl && muiFormControl.onFocus) {
            muiFormControl.onFocus(event);
        } else {
            setFocused(true);
        }
    };
    const handleBlur = (event)=>{
        if (onBlur) {
            onBlur(event);
        }
        if (inputPropsProp.onBlur) {
            inputPropsProp.onBlur(event);
        }
        if (muiFormControl && muiFormControl.onBlur) {
            muiFormControl.onBlur(event);
        } else {
            setFocused(false);
        }
    };
    const handleChange = function(event) {
        for(var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++){
            args[_key - 1] = arguments[_key];
        }
        if (!isControlled) {
            const element = event.target || inputRef.current;
            if (element == null) {
                throw new Error( false ? 0 : (0,_mui_utils_formatMuiErrorMessage__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .A)(1));
            }
            checkDirty({
                value: element.value
            });
        }
        if (inputPropsProp.onChange) {
            inputPropsProp.onChange(event, ...args);
        }
        // Perform in the willUpdate
        if (onChange) {
            onChange(event, ...args);
        }
    };
    // Check the input state on mount, in case it was filled by the user
    // or auto filled by the browser before the hydration (for SSR).
    react__WEBPACK_IMPORTED_MODULE_0__.useEffect(()=>{
        checkDirty(inputRef.current);
    // TODO: uncomment once we enable eslint-plugin-react-compiler // eslint-disable-next-line react-compiler/react-compiler
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    const handleClick = (event)=>{
        if (inputRef.current && event.currentTarget === event.target) {
            inputRef.current.focus();
        }
        if (onClick) {
            onClick(event);
        }
    };
    let InputComponent = inputComponent;
    let inputProps = inputPropsProp;
    if (multiline && InputComponent === 'input') {
        if (rows) {
            if (false) {}
            inputProps = {
                type: undefined,
                minRows: rows,
                maxRows: rows,
                ...inputProps
            };
        } else {
            inputProps = {
                type: undefined,
                maxRows,
                minRows,
                ...inputProps
            };
        }
        InputComponent = _TextareaAutosize_index_js__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .A;
    }
    const handleAutoFill = (event)=>{
        // Provide a fake value as Chrome might not let you access it for security reasons.
        checkDirty(event.animationName === 'mui-auto-fill-cancel' ? inputRef.current : {
            value: 'x'
        });
    };
    react__WEBPACK_IMPORTED_MODULE_0__.useEffect(()=>{
        if (muiFormControl) {
            muiFormControl.setAdornedStart(Boolean(startAdornment));
        }
    }, [
        muiFormControl,
        startAdornment
    ]);
    const ownerState = {
        ...props,
        color: fcs.color || 'primary',
        disabled: fcs.disabled,
        endAdornment,
        error: fcs.error,
        focused: fcs.focused,
        formControl: muiFormControl,
        fullWidth,
        hiddenLabel: fcs.hiddenLabel,
        multiline,
        size: fcs.size,
        startAdornment,
        type
    };
    const classes = useUtilityClasses(ownerState);
    const Root = slots.root || components.Root || InputBaseRoot;
    const rootProps = slotProps.root || componentsProps.root || {};
    const Input = slots.input || components.Input || InputBaseInput;
    var _slotProps_input;
    inputProps = {
        ...inputProps,
        ...(_slotProps_input = slotProps.input) !== null && _slotProps_input !== void 0 ? _slotProps_input : componentsProps.input
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            !disableInjectingGlobalStyles && typeof InputGlobalStyles === 'function' && // For Pigment CSS, this has no effect because the InputGlobalStyles will be null.
            (_InputGlobalStyles || (_InputGlobalStyles = /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(InputGlobalStyles, {}))),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(Root, {
                ...rootProps,
                ref: ref,
                onClick: handleClick,
                ...other,
                ...!(0,_utils_isHostComponent_js__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .A)(Root) && {
                    ownerState: {
                        ...ownerState,
                        ...rootProps.ownerState
                    }
                },
                className: (0,clsx__WEBPACK_IMPORTED_MODULE_17__/* ["default"] */ .A)(classes.root, rootProps.className, className, readOnly && 'MuiInputBase-readOnly'),
                children: [
                    startAdornment,
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_FormControl_FormControlContext_js__WEBPACK_IMPORTED_MODULE_18__/* ["default"] */ .A.Provider, {
                        value: null,
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Input, {
                            "aria-invalid": fcs.error,
                            "aria-describedby": ariaDescribedby,
                            autoComplete: autoComplete,
                            autoFocus: autoFocus,
                            defaultValue: defaultValue,
                            disabled: fcs.disabled,
                            id: id,
                            onAnimationStart: handleAutoFill,
                            name: name,
                            placeholder: placeholder,
                            readOnly: readOnly,
                            required: fcs.required,
                            rows: rows,
                            value: value,
                            onKeyDown: onKeyDown,
                            onKeyUp: onKeyUp,
                            type: type,
                            ...inputProps,
                            ...!(0,_utils_isHostComponent_js__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .A)(Input) && {
                                as: InputComponent,
                                ownerState: {
                                    ...ownerState,
                                    ...inputProps.ownerState
                                }
                            },
                            ref: handleInputRef,
                            className: (0,clsx__WEBPACK_IMPORTED_MODULE_17__/* ["default"] */ .A)(classes.input, inputProps.className, readOnly && 'MuiInputBase-readOnly'),
                            onBlur: handleBlur,
                            onChange: handleChange,
                            onFocus: handleFocus
                        })
                    }),
                    endAdornment,
                    renderSuffix ? renderSuffix({
                        ...fcs,
                        startAdornment
                    }) : null
                ]
            })
        ]
    });
});
 false ? 0 : void 0;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (InputBase);


/***/ }),

/***/ 90333:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(94285);
/* harmony import */ var _mui_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(16316);
/* harmony import */ var _mui_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(15826);
/* harmony import */ var _mui_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(43804);
/* harmony import */ var _mui_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(51142);
/* harmony import */ var _mui_utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(97878);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(94513);
/* __next_internal_client_entry_do_not_use__ default auto */ 



function getStyleValue(value) {
    return parseInt(value, 10) || 0;
}
const styles = {
    shadow: {
        // Visibility needed to hide the extra text area on iPads
        visibility: 'hidden',
        // Remove from the content flow
        position: 'absolute',
        // Ignore the scrollbar width
        overflow: 'hidden',
        height: 0,
        top: 0,
        left: 0,
        // Create a new layer, increase the isolation of the computed values
        transform: 'translateZ(0)'
    }
};
function isObjectEmpty(object) {
    // eslint-disable-next-line
    for(const _ in object){
        return false;
    }
    return true;
}
function isEmpty(obj) {
    return isObjectEmpty(obj) || obj.outerHeightStyle === 0 && !obj.overflowing;
}
/**
 *
 * Demos:
 *
 * - [Textarea Autosize](https://v6.mui.com/material-ui/react-textarea-autosize/)
 *
 * API:
 *
 * - [TextareaAutosize API](https://v6.mui.com/material-ui/api/textarea-autosize/)
 */ const TextareaAutosize = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(function TextareaAutosize(props, forwardedRef) {
    const { onChange, maxRows, minRows = 1, style, value, ...other } = props;
    const { current: isControlled } = react__WEBPACK_IMPORTED_MODULE_0__.useRef(value != null);
    const textareaRef = react__WEBPACK_IMPORTED_MODULE_0__.useRef(null);
    const handleRef = (0,_mui_utils__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A)(forwardedRef, textareaRef);
    const heightRef = react__WEBPACK_IMPORTED_MODULE_0__.useRef(null);
    const hiddenTextareaRef = react__WEBPACK_IMPORTED_MODULE_0__.useRef(null);
    const calculateTextareaStyles = react__WEBPACK_IMPORTED_MODULE_0__.useCallback(()=>{
        const textarea = textareaRef.current;
        const hiddenTextarea = hiddenTextareaRef.current;
        if (!textarea || !hiddenTextarea) {
            return undefined;
        }
        const containerWindow = (0,_mui_utils__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A)(textarea);
        const computedStyle = containerWindow.getComputedStyle(textarea);
        // If input's width is shrunk and it's not visible, don't sync height.
        if (computedStyle.width === '0px') {
            return {
                outerHeightStyle: 0,
                overflowing: false
            };
        }
        hiddenTextarea.style.width = computedStyle.width;
        hiddenTextarea.value = textarea.value || props.placeholder || 'x';
        if (hiddenTextarea.value.slice(-1) === '\n') {
            // Certain fonts which overflow the line height will cause the textarea
            // to report a different scrollHeight depending on whether the last line
            // is empty. Make it non-empty to avoid this issue.
            hiddenTextarea.value += ' ';
        }
        const boxSizing = computedStyle.boxSizing;
        const padding = getStyleValue(computedStyle.paddingBottom) + getStyleValue(computedStyle.paddingTop);
        const border = getStyleValue(computedStyle.borderBottomWidth) + getStyleValue(computedStyle.borderTopWidth);
        // The height of the inner content
        const innerHeight = hiddenTextarea.scrollHeight;
        // Measure height of a textarea with a single row
        hiddenTextarea.value = 'x';
        const singleRowHeight = hiddenTextarea.scrollHeight;
        // The height of the outer content
        let outerHeight = innerHeight;
        if (minRows) {
            outerHeight = Math.max(Number(minRows) * singleRowHeight, outerHeight);
        }
        if (maxRows) {
            outerHeight = Math.min(Number(maxRows) * singleRowHeight, outerHeight);
        }
        outerHeight = Math.max(outerHeight, singleRowHeight);
        // Take the box sizing into account for applying this value as a style.
        const outerHeightStyle = outerHeight + (boxSizing === 'border-box' ? padding + border : 0);
        const overflowing = Math.abs(outerHeight - innerHeight) <= 1;
        return {
            outerHeightStyle,
            overflowing
        };
    }, [
        maxRows,
        minRows,
        props.placeholder
    ]);
    const didHeightChange = (0,_mui_utils__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A)(()=>{
        const textarea = textareaRef.current;
        const textareaStyles = calculateTextareaStyles();
        if (!textarea || !textareaStyles || isEmpty(textareaStyles)) {
            return false;
        }
        const outerHeightStyle = textareaStyles.outerHeightStyle;
        return heightRef.current != null && heightRef.current !== outerHeightStyle;
    });
    const syncHeight = react__WEBPACK_IMPORTED_MODULE_0__.useCallback(()=>{
        const textarea = textareaRef.current;
        const textareaStyles = calculateTextareaStyles();
        if (!textarea || !textareaStyles || isEmpty(textareaStyles)) {
            return;
        }
        const outerHeightStyle = textareaStyles.outerHeightStyle;
        if (heightRef.current !== outerHeightStyle) {
            heightRef.current = outerHeightStyle;
            textarea.style.height = "".concat(outerHeightStyle, "px");
        }
        textarea.style.overflow = textareaStyles.overflowing ? 'hidden' : '';
    }, [
        calculateTextareaStyles
    ]);
    const frameRef = react__WEBPACK_IMPORTED_MODULE_0__.useRef(-1);
    (0,_mui_utils__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .A)(()=>{
        const debouncedHandleResize = (0,_mui_utils__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .A)(syncHeight);
        const textarea = textareaRef === null || textareaRef === void 0 ? void 0 : textareaRef.current;
        if (!textarea) {
            return undefined;
        }
        const containerWindow = (0,_mui_utils__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A)(textarea);
        containerWindow.addEventListener('resize', debouncedHandleResize);
        let resizeObserver;
        if (typeof ResizeObserver !== 'undefined') {
            resizeObserver = new ResizeObserver(()=>{
                if (didHeightChange()) {
                    // avoid "ResizeObserver loop completed with undelivered notifications" error
                    // by temporarily unobserving the textarea element while manipulating the height
                    // and reobserving one frame later
                    resizeObserver.unobserve(textarea);
                    cancelAnimationFrame(frameRef.current);
                    syncHeight();
                    frameRef.current = requestAnimationFrame(()=>{
                        resizeObserver.observe(textarea);
                    });
                }
            });
            resizeObserver.observe(textarea);
        }
        return ()=>{
            debouncedHandleResize.clear();
            cancelAnimationFrame(frameRef.current);
            containerWindow.removeEventListener('resize', debouncedHandleResize);
            if (resizeObserver) {
                resizeObserver.disconnect();
            }
        };
    }, [
        calculateTextareaStyles,
        syncHeight,
        didHeightChange
    ]);
    (0,_mui_utils__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .A)(()=>{
        syncHeight();
    });
    const handleChange = (event)=>{
        if (!isControlled) {
            syncHeight();
        }
        if (onChange) {
            onChange(event);
        }
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("textarea", {
                value: value,
                onChange: handleChange,
                ref: handleRef,
                rows: minRows,
                style: style,
                ...other
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("textarea", {
                "aria-hidden": true,
                className: props.className,
                readOnly: true,
                ref: hiddenTextareaRef,
                tabIndex: -1,
                style: {
                    ...styles.shadow,
                    ...style,
                    paddingTop: 0,
                    paddingBottom: 0
                }
            })
        ]
    });
});
 false ? 0 : void 0;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TextareaAutosize);


/***/ })

}]);
//# sourceMappingURL=9151-4188cbb5ce65b3f1.js.map