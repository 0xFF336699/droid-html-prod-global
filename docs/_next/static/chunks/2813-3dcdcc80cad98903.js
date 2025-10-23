"use strict";
(self["webpackChunk_N_E"] = self["webpackChunk_N_E"] || []).push([[2813],{

/***/ 50079:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   JI: () => (/* binding */ FloatWindowConfUI),
/* harmony export */   _x: () => (/* binding */ SectionTitle),
/* harmony export */   g2: () => (/* binding */ RequiredLabel),
/* harmony export */   q2: () => (/* binding */ WebViewConfUI),
/* harmony export */   zh: () => (/* binding */ OptionalLabel)
/* harmony export */ });
/* unused harmony exports WindowConfUI, TestWindowConfUI2, DialogWindowConfUI, SysWindowConfUI */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(94513);
/* harmony import */ var _droid_android__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(39800);
/* harmony import */ var _fanfanlo__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(50279);
/* harmony import */ var _fanfanlo__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(45007);
/* harmony import */ var _barrel_optimize_names_Box_Checkbox_FormControlLabel_MenuItem_Select_Stack_TextField_Tooltip_Typography_mui_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6445);
/* harmony import */ var _barrel_optimize_names_Box_Checkbox_FormControlLabel_MenuItem_Select_Stack_TextField_Tooltip_Typography_mui_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(67079);
/* harmony import */ var _barrel_optimize_names_Box_Checkbox_FormControlLabel_MenuItem_Select_Stack_TextField_Tooltip_Typography_mui_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(77779);
/* harmony import */ var _barrel_optimize_names_Box_Checkbox_FormControlLabel_MenuItem_Select_Stack_TextField_Tooltip_Typography_mui_material__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(9220);
/* harmony import */ var _barrel_optimize_names_Box_Checkbox_FormControlLabel_MenuItem_Select_Stack_TextField_Tooltip_Typography_mui_material__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(38771);
/* harmony import */ var _barrel_optimize_names_Box_Checkbox_FormControlLabel_MenuItem_Select_Stack_TextField_Tooltip_Typography_mui_material__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(7313);
/* harmony import */ var _barrel_optimize_names_Box_Checkbox_FormControlLabel_MenuItem_Select_Stack_TextField_Tooltip_Typography_mui_material__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(82797);
/* harmony import */ var _barrel_optimize_names_Box_Checkbox_FormControlLabel_MenuItem_Select_Stack_TextField_Tooltip_Typography_mui_material__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(30281);
/* harmony import */ var _barrel_optimize_names_Box_Checkbox_FormControlLabel_MenuItem_Select_Stack_TextField_Tooltip_Typography_mui_material__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(93916);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(94285);
/* harmony import */ var _HtmlConfUI__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(81780);






// ============ 标签辅助组件 ============
// 必选标签组件
function RequiredLabel(param) {
    let { label, description } = param;
    const content = /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_barrel_optimize_names_Box_Checkbox_FormControlLabel_MenuItem_Select_Stack_TextField_Tooltip_Typography_mui_material__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A, {
        sx: {
            display: 'flex',
            alignItems: 'center',
            gap: 0.5
        },
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_barrel_optimize_names_Box_Checkbox_FormControlLabel_MenuItem_Select_Stack_TextField_Tooltip_Typography_mui_material__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A, {
                children: label
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_barrel_optimize_names_Box_Checkbox_FormControlLabel_MenuItem_Select_Stack_TextField_Tooltip_Typography_mui_material__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A, {
                sx: {
                    color: 'error.main',
                    fontWeight: 'bold'
                },
                children: "*"
            })
        ]
    });
    if (description) {
        return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_barrel_optimize_names_Box_Checkbox_FormControlLabel_MenuItem_Select_Stack_TextField_Tooltip_Typography_mui_material__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .A, {
            title: description,
            arrow: true,
            children: content
        });
    }
    return content;
}
// 可选标签组件
function OptionalLabel(param) {
    let { label, description } = param;
    const content = /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_barrel_optimize_names_Box_Checkbox_FormControlLabel_MenuItem_Select_Stack_TextField_Tooltip_Typography_mui_material__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A, {
        sx: {
            display: 'flex',
            alignItems: 'center',
            gap: 0.5
        },
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_barrel_optimize_names_Box_Checkbox_FormControlLabel_MenuItem_Select_Stack_TextField_Tooltip_Typography_mui_material__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A, {
                children: label
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_barrel_optimize_names_Box_Checkbox_FormControlLabel_MenuItem_Select_Stack_TextField_Tooltip_Typography_mui_material__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A, {
                sx: {
                    color: 'text.secondary',
                    fontSize: '0.875rem'
                },
                children: "(可选)"
            })
        ]
    });
    if (description) {
        return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_barrel_optimize_names_Box_Checkbox_FormControlLabel_MenuItem_Select_Stack_TextField_Tooltip_Typography_mui_material__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .A, {
            title: description,
            arrow: true,
            children: content
        });
    }
    return content;
}
// Section 标题组件
function SectionTitle(param) {
    let { title, count } = param;
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_barrel_optimize_names_Box_Checkbox_FormControlLabel_MenuItem_Select_Stack_TextField_Tooltip_Typography_mui_material__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A, {
        sx: {
            display: 'flex',
            alignItems: 'center',
            gap: 1,
            mt: 2,
            mb: 1.5
        },
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_barrel_optimize_names_Box_Checkbox_FormControlLabel_MenuItem_Select_Stack_TextField_Tooltip_Typography_mui_material__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A, {
                variant: "subtitle1",
                sx: {
                    fontWeight: 'bold',
                    color: 'primary.main'
                },
                children: title
            }),
            count && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_barrel_optimize_names_Box_Checkbox_FormControlLabel_MenuItem_Select_Stack_TextField_Tooltip_Typography_mui_material__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A, {
                sx: {
                    color: 'text.secondary',
                    fontSize: '0.875rem'
                },
                children: [
                    "(",
                    count,
                    ")"
                ]
            })
        ]
    });
}
// WebViewConf UI
function WebViewConfUI(param) {
    let { webViewConf } = param;
    const { t } = (0,_fanfanlo__WEBPACK_IMPORTED_MODULE_6__/* .useTranslation */ .Bd)('droid-android/android/win/content');
    const [backgroundColor] = (0,_fanfanlo__WEBPACK_IMPORTED_MODULE_7__/* .useProxyWatch */ .x)(webViewConf, 'backgroundColor', webViewConf.backgroundColor || 0);
    const [ua] = (0,_fanfanlo__WEBPACK_IMPORTED_MODULE_7__/* .useProxyWatch */ .x)(webViewConf, 'ua', webViewConf.ua || '');
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_barrel_optimize_names_Box_Checkbox_FormControlLabel_MenuItem_Select_Stack_TextField_Tooltip_Typography_mui_material__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .A, {
        spacing: 1,
        sx: {
            pl: 2
        },
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_barrel_optimize_names_Box_Checkbox_FormControlLabel_MenuItem_Select_Stack_TextField_Tooltip_Typography_mui_material__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .A, {
                label: t('content.WebViewConf.backgroundColor'),
                type: "number",
                value: backgroundColor,
                onChange: (e)=>{
                    webViewConf.backgroundColor = Number(e.target.value);
                },
                size: "small"
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_barrel_optimize_names_Box_Checkbox_FormControlLabel_MenuItem_Select_Stack_TextField_Tooltip_Typography_mui_material__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .A, {
                label: t('content.WebViewConf.ua'),
                value: ua,
                onChange: (e)=>{
                    webViewConf.ua = e.target.value;
                },
                size: "small",
                multiline: true,
                rows: 2
            })
        ]
    });
}
// GravityInfo UI
function GravityInfoUI(param) {
    let { gravityInfo } = param;
    const { t } = (0,_fanfanlo__WEBPACK_IMPORTED_MODULE_6__/* .useTranslation */ .Bd)('droid-android/android/win/content');
    const [gravity] = (0,_fanfanlo__WEBPACK_IMPORTED_MODULE_7__/* .useProxyWatch */ .x)(gravityInfo, 'gravity', gravityInfo.gravity);
    const [offsetX] = (0,_fanfanlo__WEBPACK_IMPORTED_MODULE_7__/* .useProxyWatch */ .x)(gravityInfo, 'offsetX', gravityInfo.offsetX || 0);
    const [offsetY] = (0,_fanfanlo__WEBPACK_IMPORTED_MODULE_7__/* .useProxyWatch */ .x)(gravityInfo, 'offsetY', gravityInfo.offsetY || 0);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_barrel_optimize_names_Box_Checkbox_FormControlLabel_MenuItem_Select_Stack_TextField_Tooltip_Typography_mui_material__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .A, {
        spacing: 1,
        sx: {
            pl: 2
        },
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_barrel_optimize_names_Box_Checkbox_FormControlLabel_MenuItem_Select_Stack_TextField_Tooltip_Typography_mui_material__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .A, {
                value: gravity,
                onChange: (e)=>{
                    gravityInfo.gravity = e.target.value;
                },
                size: "small",
                children: (0,_droid_android__WEBPACK_IMPORTED_MODULE_11__/* .getGravityOptions */ .n2)().map((option)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_barrel_optimize_names_Box_Checkbox_FormControlLabel_MenuItem_Select_Stack_TextField_Tooltip_Typography_mui_material__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .A, {
                        value: option.value,
                        children: option.label
                    }, option.value))
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_barrel_optimize_names_Box_Checkbox_FormControlLabel_MenuItem_Select_Stack_TextField_Tooltip_Typography_mui_material__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .A, {
                label: t('content.GravityInfo.offsetX'),
                type: "number",
                value: offsetX,
                onChange: (e)=>{
                    gravityInfo.offsetX = Number(e.target.value);
                },
                size: "small"
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_barrel_optimize_names_Box_Checkbox_FormControlLabel_MenuItem_Select_Stack_TextField_Tooltip_Typography_mui_material__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .A, {
                label: t('content.GravityInfo.offsetY'),
                type: "number",
                value: offsetY,
                onChange: (e)=>{
                    gravityInfo.offsetY = Number(e.target.value);
                },
                size: "small"
            })
        ]
    });
}
// BorderInfo UI
function BorderInfoUI(param) {
    let { borderInfo } = param;
    const { t } = (0,_fanfanlo__WEBPACK_IMPORTED_MODULE_6__/* .useTranslation */ .Bd)('droid-android/android/win/content');
    const [left] = (0,_fanfanlo__WEBPACK_IMPORTED_MODULE_7__/* .useProxyWatch */ .x)(borderInfo, 'left', borderInfo.left);
    const [top] = (0,_fanfanlo__WEBPACK_IMPORTED_MODULE_7__/* .useProxyWatch */ .x)(borderInfo, 'top', borderInfo.top);
    const [right] = (0,_fanfanlo__WEBPACK_IMPORTED_MODULE_7__/* .useProxyWatch */ .x)(borderInfo, 'right', borderInfo.right);
    const [bottom] = (0,_fanfanlo__WEBPACK_IMPORTED_MODULE_7__/* .useProxyWatch */ .x)(borderInfo, 'bottom', borderInfo.bottom);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_barrel_optimize_names_Box_Checkbox_FormControlLabel_MenuItem_Select_Stack_TextField_Tooltip_Typography_mui_material__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .A, {
        spacing: 1,
        sx: {
            pl: 2
        },
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_barrel_optimize_names_Box_Checkbox_FormControlLabel_MenuItem_Select_Stack_TextField_Tooltip_Typography_mui_material__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .A, {
                label: t('content.BorderInfo.left'),
                type: "number",
                value: left,
                onChange: (e)=>{
                    borderInfo.left = Number(e.target.value);
                },
                size: "small"
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_barrel_optimize_names_Box_Checkbox_FormControlLabel_MenuItem_Select_Stack_TextField_Tooltip_Typography_mui_material__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .A, {
                label: t('content.BorderInfo.top'),
                type: "number",
                value: top,
                onChange: (e)=>{
                    borderInfo.top = Number(e.target.value);
                },
                size: "small"
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_barrel_optimize_names_Box_Checkbox_FormControlLabel_MenuItem_Select_Stack_TextField_Tooltip_Typography_mui_material__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .A, {
                label: t('content.BorderInfo.right'),
                type: "number",
                value: right,
                onChange: (e)=>{
                    borderInfo.right = Number(e.target.value);
                },
                size: "small"
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_barrel_optimize_names_Box_Checkbox_FormControlLabel_MenuItem_Select_Stack_TextField_Tooltip_Typography_mui_material__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .A, {
                label: t('content.BorderInfo.bottom'),
                type: "number",
                value: bottom,
                onChange: (e)=>{
                    borderInfo.bottom = Number(e.target.value);
                },
                size: "small"
            })
        ]
    });
}
// MatchParentInfo UI
function MatchParentInfoUI(param) {
    let { matchParentInfo } = param;
    const { t } = (0,_fanfanlo__WEBPACK_IMPORTED_MODULE_6__/* .useTranslation */ .Bd)('droid-android/android/win/content');
    const [widthMatch] = (0,_fanfanlo__WEBPACK_IMPORTED_MODULE_7__/* .useProxyWatch */ .x)(matchParentInfo, 'widthMatch', matchParentInfo.widthMatch);
    const [heightMatch] = (0,_fanfanlo__WEBPACK_IMPORTED_MODULE_7__/* .useProxyWatch */ .x)(matchParentInfo, 'heightMatch', matchParentInfo.heightMatch);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_barrel_optimize_names_Box_Checkbox_FormControlLabel_MenuItem_Select_Stack_TextField_Tooltip_Typography_mui_material__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .A, {
        spacing: 1,
        sx: {
            pl: 2
        },
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_barrel_optimize_names_Box_Checkbox_FormControlLabel_MenuItem_Select_Stack_TextField_Tooltip_Typography_mui_material__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .A, {
                control: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_barrel_optimize_names_Box_Checkbox_FormControlLabel_MenuItem_Select_Stack_TextField_Tooltip_Typography_mui_material__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .A, {
                    checked: widthMatch,
                    onChange: (e)=>{
                        matchParentInfo.widthMatch = e.target.checked;
                    }
                }),
                label: t('content.MatchParentInfo.widthMatch')
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_barrel_optimize_names_Box_Checkbox_FormControlLabel_MenuItem_Select_Stack_TextField_Tooltip_Typography_mui_material__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .A, {
                control: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_barrel_optimize_names_Box_Checkbox_FormControlLabel_MenuItem_Select_Stack_TextField_Tooltip_Typography_mui_material__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .A, {
                    checked: heightMatch,
                    onChange: (e)=>{
                        matchParentInfo.heightMatch = e.target.checked;
                    }
                }),
                label: t('content.MatchParentInfo.heightMatch')
            })
        ]
    });
}
// FloatConf UI
function FloatConfUI(param) {
    let { floatConf } = param;
    const { t } = (0,_fanfanlo__WEBPACK_IMPORTED_MODULE_6__/* .useTranslation */ .Bd)('droid-android/android/win/content');
    const [positionSaveName] = (0,_fanfanlo__WEBPACK_IMPORTED_MODULE_7__/* .useProxyWatch */ .x)(floatConf, 'positionSaveName', floatConf.positionSaveName || '');
    const [draggable] = (0,_fanfanlo__WEBPACK_IMPORTED_MODULE_7__/* .useProxyWatch */ .x)(floatConf, 'draggable', floatConf.draggable || false);
    const [defaultX] = (0,_fanfanlo__WEBPACK_IMPORTED_MODULE_7__/* .useProxyWatch */ .x)(floatConf, 'defaultX', floatConf.defaultX || 0);
    const [defaultY] = (0,_fanfanlo__WEBPACK_IMPORTED_MODULE_7__/* .useProxyWatch */ .x)(floatConf, 'defaultY', floatConf.defaultY || 0);
    const [resetX] = (0,_fanfanlo__WEBPACK_IMPORTED_MODULE_7__/* .useProxyWatch */ .x)(floatConf, 'resetX', floatConf.resetX || 0);
    const [resetY] = (0,_fanfanlo__WEBPACK_IMPORTED_MODULE_7__/* .useProxyWatch */ .x)(floatConf, 'resetY', floatConf.resetY || 0);
    const [tag] = (0,_fanfanlo__WEBPACK_IMPORTED_MODULE_7__/* .useProxyWatch */ .x)(floatConf, 'tag', floatConf.tag || '');
    const [sidePattern] = (0,_fanfanlo__WEBPACK_IMPORTED_MODULE_7__/* .useProxyWatch */ .x)(floatConf, 'sidePattern', floatConf.sidePattern);
    const [showPattern] = (0,_fanfanlo__WEBPACK_IMPORTED_MODULE_7__/* .useProxyWatch */ .x)(floatConf, 'showPattern', floatConf.showPattern);
    const [hasEditText] = (0,_fanfanlo__WEBPACK_IMPORTED_MODULE_7__/* .useProxyWatch */ .x)(floatConf, 'hasEditText', floatConf.hasEditText || false);
    const [gravity] = (0,_fanfanlo__WEBPACK_IMPORTED_MODULE_7__/* .useProxyWatch */ .x)(floatConf, 'gravity', floatConf.gravity);
    const [layoutChangedGravity] = (0,_fanfanlo__WEBPACK_IMPORTED_MODULE_7__/* .useProxyWatch */ .x)(floatConf, 'layoutChangedGravity', floatConf.layoutChangedGravity);
    const [border] = (0,_fanfanlo__WEBPACK_IMPORTED_MODULE_7__/* .useProxyWatch */ .x)(floatConf, 'border', floatConf.border);
    const [matchParent] = (0,_fanfanlo__WEBPACK_IMPORTED_MODULE_7__/* .useProxyWatch */ .x)(floatConf, 'matchParent', floatConf.matchParent);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_barrel_optimize_names_Box_Checkbox_FormControlLabel_MenuItem_Select_Stack_TextField_Tooltip_Typography_mui_material__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .A, {
        spacing: 2,
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(SectionTitle, {
                title: t('content.FloatConf.optional'),
                count: 14
            }),
            gravity && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_barrel_optimize_names_Box_Checkbox_FormControlLabel_MenuItem_Select_Stack_TextField_Tooltip_Typography_mui_material__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A, {
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(OptionalLabel, {
                        label: t('content.FloatConf.gravity')
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(GravityInfoUI, {
                        gravityInfo: gravity
                    })
                ]
            }),
            border && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_barrel_optimize_names_Box_Checkbox_FormControlLabel_MenuItem_Select_Stack_TextField_Tooltip_Typography_mui_material__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A, {
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(OptionalLabel, {
                        label: t('content.FloatConf.border')
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(BorderInfoUI, {
                        borderInfo: border
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_barrel_optimize_names_Box_Checkbox_FormControlLabel_MenuItem_Select_Stack_TextField_Tooltip_Typography_mui_material__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .A, {
                control: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_barrel_optimize_names_Box_Checkbox_FormControlLabel_MenuItem_Select_Stack_TextField_Tooltip_Typography_mui_material__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .A, {
                    checked: draggable,
                    onChange: (e)=>{
                        floatConf.draggable = e.target.checked;
                    }
                }),
                label: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(OptionalLabel, {
                    label: t('content.FloatConf.draggable')
                })
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_barrel_optimize_names_Box_Checkbox_FormControlLabel_MenuItem_Select_Stack_TextField_Tooltip_Typography_mui_material__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A, {
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(OptionalLabel, {
                        label: t('content.FloatConf.defaultX')
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_barrel_optimize_names_Box_Checkbox_FormControlLabel_MenuItem_Select_Stack_TextField_Tooltip_Typography_mui_material__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .A, {
                        type: "number",
                        value: defaultX,
                        onChange: (e)=>{
                            floatConf.defaultX = Number(e.target.value);
                        },
                        size: "small",
                        fullWidth: true
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_barrel_optimize_names_Box_Checkbox_FormControlLabel_MenuItem_Select_Stack_TextField_Tooltip_Typography_mui_material__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A, {
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(OptionalLabel, {
                        label: t('content.FloatConf.defaultY')
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_barrel_optimize_names_Box_Checkbox_FormControlLabel_MenuItem_Select_Stack_TextField_Tooltip_Typography_mui_material__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .A, {
                        type: "number",
                        value: defaultY,
                        onChange: (e)=>{
                            floatConf.defaultY = Number(e.target.value);
                        },
                        size: "small",
                        fullWidth: true
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_barrel_optimize_names_Box_Checkbox_FormControlLabel_MenuItem_Select_Stack_TextField_Tooltip_Typography_mui_material__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A, {
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(OptionalLabel, {
                        label: t('content.FloatConf.resetX')
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_barrel_optimize_names_Box_Checkbox_FormControlLabel_MenuItem_Select_Stack_TextField_Tooltip_Typography_mui_material__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .A, {
                        type: "number",
                        value: resetX,
                        onChange: (e)=>{
                            floatConf.resetX = Number(e.target.value);
                        },
                        size: "small",
                        fullWidth: true
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_barrel_optimize_names_Box_Checkbox_FormControlLabel_MenuItem_Select_Stack_TextField_Tooltip_Typography_mui_material__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A, {
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(OptionalLabel, {
                        label: t('content.FloatConf.resetY')
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_barrel_optimize_names_Box_Checkbox_FormControlLabel_MenuItem_Select_Stack_TextField_Tooltip_Typography_mui_material__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .A, {
                        type: "number",
                        value: resetY,
                        onChange: (e)=>{
                            floatConf.resetY = Number(e.target.value);
                        },
                        size: "small",
                        fullWidth: true
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_barrel_optimize_names_Box_Checkbox_FormControlLabel_MenuItem_Select_Stack_TextField_Tooltip_Typography_mui_material__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A, {
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(OptionalLabel, {
                        label: t('content.FloatConf.tag')
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_barrel_optimize_names_Box_Checkbox_FormControlLabel_MenuItem_Select_Stack_TextField_Tooltip_Typography_mui_material__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .A, {
                        value: tag,
                        onChange: (e)=>{
                            floatConf.tag = e.target.value;
                        },
                        size: "small",
                        fullWidth: true
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_barrel_optimize_names_Box_Checkbox_FormControlLabel_MenuItem_Select_Stack_TextField_Tooltip_Typography_mui_material__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A, {
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(OptionalLabel, {
                        label: t('content.FloatConf.sidePattern')
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_barrel_optimize_names_Box_Checkbox_FormControlLabel_MenuItem_Select_Stack_TextField_Tooltip_Typography_mui_material__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .A, {
                        value: sidePattern || _droid_android__WEBPACK_IMPORTED_MODULE_11__/* .FloatSidePattern */ .Ww.DEFAULT,
                        onChange: (e)=>{
                            floatConf.sidePattern = e.target.value;
                        },
                        size: "small",
                        fullWidth: true,
                        children: Object.values(_droid_android__WEBPACK_IMPORTED_MODULE_11__/* .FloatSidePattern */ .Ww).map((pattern)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_barrel_optimize_names_Box_Checkbox_FormControlLabel_MenuItem_Select_Stack_TextField_Tooltip_Typography_mui_material__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .A, {
                                value: pattern,
                                children: pattern
                            }, pattern))
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_barrel_optimize_names_Box_Checkbox_FormControlLabel_MenuItem_Select_Stack_TextField_Tooltip_Typography_mui_material__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A, {
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(OptionalLabel, {
                        label: t('content.FloatConf.showPattern')
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_barrel_optimize_names_Box_Checkbox_FormControlLabel_MenuItem_Select_Stack_TextField_Tooltip_Typography_mui_material__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .A, {
                        value: showPattern || _droid_android__WEBPACK_IMPORTED_MODULE_11__/* .FloatShowPattern */ .YC.ALL_TIME,
                        onChange: (e)=>{
                            floatConf.showPattern = e.target.value;
                        },
                        size: "small",
                        fullWidth: true,
                        children: Object.values(_droid_android__WEBPACK_IMPORTED_MODULE_11__/* .FloatShowPattern */ .YC).map((pattern)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_barrel_optimize_names_Box_Checkbox_FormControlLabel_MenuItem_Select_Stack_TextField_Tooltip_Typography_mui_material__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .A, {
                                value: pattern,
                                children: pattern
                            }, pattern))
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_barrel_optimize_names_Box_Checkbox_FormControlLabel_MenuItem_Select_Stack_TextField_Tooltip_Typography_mui_material__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .A, {
                control: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_barrel_optimize_names_Box_Checkbox_FormControlLabel_MenuItem_Select_Stack_TextField_Tooltip_Typography_mui_material__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .A, {
                    checked: hasEditText,
                    onChange: (e)=>{
                        floatConf.hasEditText = e.target.checked;
                    }
                }),
                label: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(OptionalLabel, {
                    label: t('content.FloatConf.hasEditText')
                })
            }),
            layoutChangedGravity && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_barrel_optimize_names_Box_Checkbox_FormControlLabel_MenuItem_Select_Stack_TextField_Tooltip_Typography_mui_material__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A, {
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(OptionalLabel, {
                        label: t('content.FloatConf.layoutChangedGravity')
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_barrel_optimize_names_Box_Checkbox_FormControlLabel_MenuItem_Select_Stack_TextField_Tooltip_Typography_mui_material__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .A, {
                        value: layoutChangedGravity,
                        onChange: (e)=>{
                            floatConf.layoutChangedGravity = e.target.value;
                        },
                        size: "small",
                        fullWidth: true,
                        children: (0,_droid_android__WEBPACK_IMPORTED_MODULE_11__/* .getGravityOptions */ .n2)().map((option)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_barrel_optimize_names_Box_Checkbox_FormControlLabel_MenuItem_Select_Stack_TextField_Tooltip_Typography_mui_material__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .A, {
                                value: option.value,
                                children: option.label
                            }, option.value))
                    })
                ]
            }),
            matchParent && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_barrel_optimize_names_Box_Checkbox_FormControlLabel_MenuItem_Select_Stack_TextField_Tooltip_Typography_mui_material__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A, {
                        variant: "subtitle2",
                        children: t('content.FloatConf.matchParent')
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(MatchParentInfoUI, {
                        matchParentInfo: matchParent
                    })
                ]
            })
        ]
    });
}
// FloatWindowConf UI
function FloatWindowConfUI(param) {
    let { floatWindowConf } = param;
    const { t } = (0,_fanfanlo__WEBPACK_IMPORTED_MODULE_6__/* .useTranslation */ .Bd)('droid-android/android/win/content');
    const [foregroundText] = (0,_fanfanlo__WEBPACK_IMPORTED_MODULE_7__/* .useProxyWatch */ .x)(floatWindowConf, 'foregroundText', floatWindowConf.foregroundText || '');
    const [floatConf] = (0,_fanfanlo__WEBPACK_IMPORTED_MODULE_7__/* .useProxyWatch */ .x)(floatWindowConf, 'floatConf', floatWindowConf.floatConf);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_barrel_optimize_names_Box_Checkbox_FormControlLabel_MenuItem_Select_Stack_TextField_Tooltip_Typography_mui_material__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .A, {
        spacing: 2,
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_barrel_optimize_names_Box_Checkbox_FormControlLabel_MenuItem_Select_Stack_TextField_Tooltip_Typography_mui_material__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .A, {
                label: t('content.FloatWindowConf.foregroundText'),
                value: foregroundText,
                onChange: (e)=>{
                    floatWindowConf.foregroundText = e.target.value;
                },
                size: "small",
                helperText: t('content.FloatWindowConf.foregroundTextDescription')
            }),
            floatConf && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_barrel_optimize_names_Box_Checkbox_FormControlLabel_MenuItem_Select_Stack_TextField_Tooltip_Typography_mui_material__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A, {
                        variant: "subtitle2",
                        children: t('content.FloatConf.title')
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(FloatConfUI, {
                        floatConf: floatConf
                    })
                ]
            })
        ]
    });
}
// DialogWindowConf UI
function DialogWindowConfUI(param) {
    let { dialogWindowConf } = param;
    const { t } = useTranslation('droid-android/android/win/content');
    const [theme] = useProxyWatch(dialogWindowConf, 'theme', dialogWindowConf.theme || '');
    const [viewLayoutParams] = useProxyWatch(dialogWindowConf, 'viewLayoutParams', dialogWindowConf.viewLayoutParams || {});
    return /*#__PURE__*/ _jsxs(Stack, {
        spacing: 2,
        children: [
            /*#__PURE__*/ _jsx(TextField, {
                label: t('content.DialogWindowConf.theme'),
                value: theme,
                onChange: (e)=>{
                    dialogWindowConf.theme = e.target.value;
                },
                size: "small"
            }),
            /*#__PURE__*/ _jsx(TextField, {
                label: t('content.DialogWindowConf.viewLayoutParams'),
                value: JSON.stringify(viewLayoutParams),
                onChange: (e)=>{
                    try {
                        dialogWindowConf.viewLayoutParams = JSON.parse(e.target.value);
                    } catch  {
                    // 无效的 JSON，忽略
                    }
                },
                size: "small",
                multiline: true,
                rows: 3
            })
        ]
    });
}
// SysWindowConf UI
function SysWindowConfUI(param) {
    let { systemWindowConf } = param;
    const { t } = useTranslation('droid-android/android/win/content');
    const [listenBackKey] = useProxyWatch(systemWindowConf, 'listenBackKey', systemWindowConf.listenBackKey);
    const [viewLayoutParams] = useProxyWatch(systemWindowConf, 'viewLayoutParams', systemWindowConf.viewLayoutParams || {});
    return /*#__PURE__*/ _jsxs(Stack, {
        spacing: 2,
        children: [
            /*#__PURE__*/ _jsx(FormControlLabel, {
                control: /*#__PURE__*/ _jsx(Checkbox, {
                    checked: listenBackKey,
                    onChange: (e)=>{
                        systemWindowConf.listenBackKey = e.target.checked;
                    }
                }),
                label: t('content.SysWindowConf.listenBackKey')
            }),
            /*#__PURE__*/ _jsx(TextField, {
                label: t('content.SysWindowConf.viewLayoutParams'),
                value: JSON.stringify(viewLayoutParams),
                onChange: (e)=>{
                    try {
                        systemWindowConf.viewLayoutParams = JSON.parse(e.target.value);
                    } catch  {
                    // 无效的 JSON，忽略
                    }
                },
                size: "small",
                multiline: true,
                rows: 3
            })
        ]
    });
}
// Main WindowConf UI
function WindowConfUI(param) {
    let { windowConf } = param;
    const { t } = useTranslation('droid-android/android/win/content');
    const [windowType] = useProxyWatch(windowConf, 'windowType', windowConf.windowType);
    const [contentType] = useProxyWatch(windowConf, 'contentType', windowConf.contentType);
    const [htmlConf] = useProxyWatch(windowConf, 'htmlConf', windowConf.htmlConf);
    const [floatWindowConf] = useProxyWatch(windowConf, 'floatWindowConf', windowConf.floatWindowConf);
    const [windowId] = useProxyWatch(windowConf, 'windowId', windowConf.windowId);
    const [tag] = useProxyWatch(windowConf, 'tag', windowConf.tag);
    const [description] = useProxyWatch(windowConf, 'description', windowConf.description || '');
    const [forceDismissWindowTime] = useProxyWatch(windowConf, 'forceDismissWindowTime', windowConf.forceDismissWindowTime);
    useEffect(()=>{
        // 9n windowType bMn�a
        let savedFloatWindowConf = windowConf.floatWindowConf;
        windowConf.floatWindowConf = undefined;
        windowConf.floatWindowConf = savedFloatWindowConf || createDefaultFloatWindowConf();
    }, [
        windowType
    ]);
    return /*#__PURE__*/ _jsx(Box, {
        sx: {
            p: 2
        },
        children: /*#__PURE__*/ _jsxs(Stack, {
            spacing: 2,
            children: [
                /*#__PURE__*/ _jsx(Typography, {
                    variant: "h5",
                    sx: {
                        fontWeight: 'bold',
                        mb: 1
                    },
                    children: t('content.WindowConf.title')
                }),
                /*#__PURE__*/ _jsx(SectionTitle, {
                    title: t('content.WindowConf.required'),
                    count: 5
                }),
                /*#__PURE__*/ _jsxs(Box, {
                    children: [
                        /*#__PURE__*/ _jsx(RequiredLabel, {
                            label: t('content.WindowConf.windowType')
                        }),
                        /*#__PURE__*/ _jsx(Select, {
                            value: windowType,
                            onChange: (e)=>{
                                windowConf.windowType = e.target.value;
                            },
                            size: "small",
                            fullWidth: true,
                            children: /*#__PURE__*/ _jsx(MenuItem, {
                                value: WindowType.Float,
                                children: WindowType.Float
                            })
                        })
                    ]
                }),
                /*#__PURE__*/ _jsxs(Box, {
                    children: [
                        /*#__PURE__*/ _jsx(RequiredLabel, {
                            label: t('content.WindowConf.contentType')
                        }),
                        /*#__PURE__*/ _jsx(Select, {
                            value: contentType,
                            disabled: true,
                            size: "small",
                            fullWidth: true,
                            children: /*#__PURE__*/ _jsx(MenuItem, {
                                value: ContentType.Html,
                                children: ContentType.Html
                            })
                        })
                    ]
                }),
                /*#__PURE__*/ _jsxs(Box, {
                    children: [
                        /*#__PURE__*/ _jsx(RequiredLabel, {
                            label: t('content.WindowConf.tag')
                        }),
                        /*#__PURE__*/ _jsx(TextField, {
                            value: tag,
                            onChange: (e)=>{
                                windowConf.tag = e.target.value;
                            },
                            size: "small",
                            fullWidth: true
                        })
                    ]
                }),
                /*#__PURE__*/ _jsxs(Box, {
                    children: [
                        /*#__PURE__*/ _jsx(OptionalLabel, {
                            label: t('content.WindowConf.description')
                        }),
                        /*#__PURE__*/ _jsx(TextField, {
                            value: description,
                            onChange: (e)=>{
                                windowConf.description = e.target.value;
                            },
                            size: "small",
                            fullWidth: true,
                            multiline: true,
                            rows: 2
                        })
                    ]
                }),
                /*#__PURE__*/ _jsxs(Box, {
                    children: [
                        /*#__PURE__*/ _jsx(RequiredLabel, {
                            label: t('content.WindowConf.windowId')
                        }),
                        /*#__PURE__*/ _jsx(TextField, {
                            value: windowId,
                            disabled: true,
                            size: "small",
                            fullWidth: true
                        })
                    ]
                }),
                /*#__PURE__*/ _jsxs(Box, {
                    children: [
                        /*#__PURE__*/ _jsx(RequiredLabel, {
                            label: t('content.WindowConf.forceDismissWindowTime')
                        }),
                        /*#__PURE__*/ _jsx(TextField, {
                            type: "number",
                            value: forceDismissWindowTime,
                            onChange: (e)=>{
                                windowConf.forceDismissWindowTime = Number(e.target.value);
                            },
                            size: "small",
                            fullWidth: true
                        })
                    ]
                }),
                /*#__PURE__*/ _jsx(SectionTitle, {
                    title: t('content.WindowConf.optional'),
                    count: 3
                }),
                htmlConf && /*#__PURE__*/ _jsxs(Box, {
                    children: [
                        /*#__PURE__*/ _jsx(Typography, {
                            variant: "subtitle2",
                            sx: {
                                fontWeight: 'bold',
                                color: 'primary.main'
                            },
                            children: t('content.HtmlConf.title')
                        }),
                        /*#__PURE__*/ _jsx(HtmlConfUI, {
                            htmlConf: htmlConf
                        })
                    ]
                }),
                floatWindowConf && /*#__PURE__*/ _jsxs(Box, {
                    children: [
                        /*#__PURE__*/ _jsx(Typography, {
                            variant: "subtitle2",
                            sx: {
                                fontWeight: 'bold',
                                color: 'primary.main'
                            },
                            children: t('content.FloatWindowConf.title')
                        }),
                        /*#__PURE__*/ _jsx(FloatWindowConfUI, {
                            floatWindowConf: floatWindowConf
                        })
                    ]
                })
            ]
        })
    });
}
function TestWindowConfUI2() {
    const [conf] = useState(toProxy(createDefaultWindowConf()));
    return /*#__PURE__*/ _jsx(_Fragment, {
        children: /*#__PURE__*/ _jsx(WindowConfUI, {
            windowConf: conf
        })
    });
}
// ============ 导出辅助组件 ============
// 这些组件被 Wizard 和 Editor 组件使用




/***/ }),

/***/ 70011:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Kl: () => (/* binding */ androidFloatWindowData),
/* harmony export */   l1: () => (/* binding */ detectContentType)
/* harmony export */ });
/* unused harmony exports isValidContent, generateDefaultWindowName, isTagExists */
/* harmony import */ var _droid_android__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5123);
/* harmony import */ var _fanfanlo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(88518);
/* harmony import */ var _fanfanlo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4738);


const STORE_KEY_WINDOW_DATA = 'android_float_window_data';
// 正则表达式常量
const URL_REGEX = /^(https?:\/\/|ftp:\/\/|\/\/)[^\s]+$/i;
const HTML_REGEX = /<[^>]+>/;
const data = (0,_fanfanlo__WEBPACK_IMPORTED_MODULE_0__/* .toProxy */ .I$)({
    windowData: {
        windowList: []
    },
    initialized: false
});
/**
 * 检测 contentUrl 是 URL 还是 HTML
 * @param content 输入内容
 * @returns 'url' | 'html' | 'invalid'
 */ function detectContentType(content) {
    if (!content || content.trim().length === 0) {
        return 'invalid';
    }
    // 先检测是否包含 HTML 标签
    if (HTML_REGEX.test(content)) {
        return 'html';
    }
    // 检测是否为有效 URL
    if (URL_REGEX.test(content.trim())) {
        return 'url';
    }
    return 'invalid';
}
/**
 * 验证 contentUrl 是否有效（URL 或 HTML）
 * @param content 输入内容
 * @returns boolean
 */ function isValidContent(content) {
    const type = detectContentType(content);
    return type !== 'invalid';
}
/**
 * 生成默认窗口名称（当前时间戳）
 * @returns 格式为 yyyy-MM-dd HH:mm:ss 的时间字符串
 */ function generateDefaultWindowName() {
    const now = new Date();
    const year = now.getFullYear();
    const month = String(now.getMonth() + 1).padStart(2, '0');
    const date = String(now.getDate()).padStart(2, '0');
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    return "".concat(year, "-").concat(month, "-").concat(date, " ").concat(hours, ":").concat(minutes, ":").concat(seconds);
}
/**
 * 检查窗口名称（tag）是否已存在
 * @param tag 要检查的 tag
 * @param excludeTag 排除的 tag（用于编辑时）
 * @returns boolean true 表示已存在
 */ function isTagExists(tag, excludeTag) {
    return data.windowData.windowList.some((item)=>item.windowId === tag && (excludeTag ? item.windowId !== excludeTag : true));
}
function init() {
    if (data.initialized) return;
    data.windowData = _droid_android__WEBPACK_IMPORTED_MODULE_1__/* .autoJsStoreUtils */ .b.read(STORE_KEY_WINDOW_DATA, {
        windowList: []
    });
    (0,_fanfanlo__WEBPACK_IMPORTED_MODULE_2__/* .watchUpdates */ .c)(data.windowData, ()=>{
        console.log('Detected changes in windowData, saving to storage...', data.windowData);
        _droid_android__WEBPACK_IMPORTED_MODULE_1__/* .autoJsStoreUtils */ .b.write(STORE_KEY_WINDOW_DATA, data.windowData);
    });
    console.log('Android Float Window data initialized:', data.windowData);
    data.initialized = true;
}
function getItemId(item) {
    return "".concat(item.windowId);
}
function getDismissEventType(item) {
    return "window-".concat(getItemId(item), "-dismiss");
}
function getOpenedEventType(item) {
    return "window-".concat(getItemId(item), "-opened");
}
function getHideEventType(item) {
    return "window-".concat(getItemId(item), "-hide");
}
const androidFloatWindowData = {
    data,
    init,
    getItemId: getItemId,
    getDismissEventType,
    getOpenedEventType,
    getHideEventType
};


/***/ }),

/***/ 81780:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ HtmlConfUI)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(94513);
/* harmony import */ var _fanfanlo__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(50279);
/* harmony import */ var _fanfanlo__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(45007);
/* harmony import */ var _barrel_optimize_names_Alert_Box_Stack_TextField_Typography_mui_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(9220);
/* harmony import */ var _barrel_optimize_names_Alert_Box_Stack_TextField_Typography_mui_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(38771);
/* harmony import */ var _barrel_optimize_names_Alert_Box_Stack_TextField_Typography_mui_material__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(6445);
/* harmony import */ var _barrel_optimize_names_Alert_Box_Stack_TextField_Typography_mui_material__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(81482);
/* harmony import */ var _barrel_optimize_names_Alert_Box_Stack_TextField_Typography_mui_material__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(67079);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(94285);
/* harmony import */ var _WindowConfUI__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(50079);
/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(70011);






// WebViewJsParams UI
function WebViewJsParamsUI(param) {
    let { jsParams } = param;
    const { t } = (0,_fanfanlo__WEBPACK_IMPORTED_MODULE_4__/* .useTranslation */ .Bd)('droid-android/android/win/content');
    const [fitContentWidth] = (0,_fanfanlo__WEBPACK_IMPORTED_MODULE_5__/* .useProxyWatch */ .x)(jsParams, 'fitContentWidth', jsParams.fitContentWidth || 0);
    const [fitContentHeight] = (0,_fanfanlo__WEBPACK_IMPORTED_MODULE_5__/* .useProxyWatch */ .x)(jsParams, 'fitContentHeight', jsParams.fitContentHeight || 0);
    const [javaToJsDataString] = (0,_fanfanlo__WEBPACK_IMPORTED_MODULE_5__/* .useProxyWatch */ .x)(jsParams, 'javaToJsDataString', jsParams.javaToJsDataString || '');
    const [fitContentId] = (0,_fanfanlo__WEBPACK_IMPORTED_MODULE_5__/* .useProxyWatch */ .x)(jsParams, 'fitContentId', jsParams.fitContentId || '');
    const [fitContentClass] = (0,_fanfanlo__WEBPACK_IMPORTED_MODULE_5__/* .useProxyWatch */ .x)(jsParams, 'fitContentClass', jsParams.fitContentClass || '');
    const [fitContentJs] = (0,_fanfanlo__WEBPACK_IMPORTED_MODULE_5__/* .useProxyWatch */ .x)(jsParams, 'fitContentJs', jsParams.fitContentJs || '');
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_barrel_optimize_names_Alert_Box_Stack_TextField_Typography_mui_material__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .A, {
        spacing: 1,
        sx: {
            pl: 2
        },
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_barrel_optimize_names_Alert_Box_Stack_TextField_Typography_mui_material__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .A, {
                label: t('content.WebViewJsParams.fitContentWidth'),
                type: "number",
                value: fitContentWidth,
                onChange: (e)=>{
                    jsParams.fitContentWidth = Number(e.target.value);
                },
                size: "small"
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_barrel_optimize_names_Alert_Box_Stack_TextField_Typography_mui_material__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .A, {
                label: t('content.WebViewJsParams.fitContentHeight'),
                type: "number",
                value: fitContentHeight,
                onChange: (e)=>{
                    jsParams.fitContentHeight = Number(e.target.value);
                },
                size: "small"
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_barrel_optimize_names_Alert_Box_Stack_TextField_Typography_mui_material__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .A, {
                label: t('content.WebViewJsParams.javaToJsDataString'),
                value: javaToJsDataString,
                onChange: (e)=>{
                    jsParams.javaToJsDataString = e.target.value;
                },
                size: "small",
                multiline: true,
                rows: 2
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_barrel_optimize_names_Alert_Box_Stack_TextField_Typography_mui_material__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .A, {
                label: t('content.WebViewJsParams.fitContentId'),
                value: fitContentId,
                onChange: (e)=>{
                    jsParams.fitContentId = e.target.value;
                },
                size: "small"
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_barrel_optimize_names_Alert_Box_Stack_TextField_Typography_mui_material__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .A, {
                label: t('content.WebViewJsParams.fitContentClass'),
                value: fitContentClass,
                onChange: (e)=>{
                    jsParams.fitContentClass = e.target.value;
                },
                size: "small"
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_barrel_optimize_names_Alert_Box_Stack_TextField_Typography_mui_material__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .A, {
                label: t('content.WebViewJsParams.fitContentJs'),
                value: fitContentJs,
                onChange: (e)=>{
                    jsParams.fitContentJs = e.target.value;
                },
                size: "small",
                multiline: true,
                rows: 2
            })
        ]
    });
}
function HtmlConfUI(param) {
    let { htmlConf } = param;
    const { t } = (0,_fanfanlo__WEBPACK_IMPORTED_MODULE_4__/* .useTranslation */ .Bd)('droid-android/android/win/content');
    const [url] = (0,_fanfanlo__WEBPACK_IMPORTED_MODULE_5__/* .useProxyWatch */ .x)(htmlConf, 'url', htmlConf.url || '');
    const [html] = (0,_fanfanlo__WEBPACK_IMPORTED_MODULE_5__/* .useProxyWatch */ .x)(htmlConf, 'html', htmlConf.html || '');
    const [jsBridgeName] = (0,_fanfanlo__WEBPACK_IMPORTED_MODULE_5__/* .useProxyWatch */ .x)(htmlConf, 'jsBridgeName', htmlConf.jsBridgeName || '');
    const [webViewJsParams] = (0,_fanfanlo__WEBPACK_IMPORTED_MODULE_5__/* .useProxyWatch */ .x)(htmlConf, 'webViewJsParams', htmlConf.webViewJsParams);
    const [webViewConf] = (0,_fanfanlo__WEBPACK_IMPORTED_MODULE_5__/* .useProxyWatch */ .x)(htmlConf, 'webViewConf', htmlConf.webViewConf);
    const [webViewJsName] = (0,_fanfanlo__WEBPACK_IMPORTED_MODULE_5__/* .useProxyWatch */ .x)(htmlConf, 'webViewJsName', htmlConf.webViewJsName || '');
    const [javaRunnerId] = (0,_fanfanlo__WEBPACK_IMPORTED_MODULE_5__/* .useProxyWatch */ .x)(htmlConf, 'javaRunnerId', htmlConf.javaRunnerId || 0);
    const [extra] = (0,_fanfanlo__WEBPACK_IMPORTED_MODULE_5__/* .useProxyWatch */ .x)(htmlConf, 'extra', htmlConf.extra || {});
    // 本地状态用于内容输入和错误提示
    const [contentInput, setContentInput] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(htmlConf.url || htmlConf.html || '');
    const [contentError, setContentError] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('');
    const [detectedType, setDetectedType] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('invalid');
    // 本地状态用于 JSON 编辑和错误提示
    const [extraJson, setExtraJson] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(JSON.stringify(htmlConf.extra || {}, null, 2));
    const [extraJsonError, setExtraJsonError] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('');
    const handleContentChange = (value)=>{
        console.log('HtmlConfUI: content input changed');
        setContentInput(value);
        if (!value || value.trim().length === 0) {
            setDetectedType('invalid');
            setContentError('');
            htmlConf.url = '';
            htmlConf.html = '';
            return;
        }
        const type = (0,_data__WEBPACK_IMPORTED_MODULE_3__/* .detectContentType */ .l1)(value);
        console.log('HtmlConfUI: detected content type:', type);
        setDetectedType(type);
        if (type === 'invalid') {
            setContentError(t('content.HtmlConf.contentInvalid'));
            return;
        }
        setContentError('');
        if (type === 'url') {
            htmlConf.url = value;
            htmlConf.html = '';
            console.log('HtmlConfUI: set as URL:', value);
        } else if (type === 'html') {
            htmlConf.html = value;
            htmlConf.url = '';
            console.log('HtmlConfUI: set as HTML:', value);
        }
    };
    const extraJsonChange = (value)=>{
        console.log('HtmlConfUI: extra JSON changed');
        setExtraJson(value);
        try {
            const parsed = JSON.parse(value);
            htmlConf.extra = parsed;
            setExtraJsonError('');
            console.log('HtmlConfUI: extra JSON parsed successfully:', parsed);
        } catch (err) {
            const errorMsg = err instanceof Error ? err.message : '无效的 JSON 格式';
            setExtraJsonError(errorMsg);
            console.error('HtmlConfUI: extra JSON parse error:', err);
        }
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_barrel_optimize_names_Alert_Box_Stack_TextField_Typography_mui_material__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .A, {
        spacing: 2,
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_WindowConfUI__WEBPACK_IMPORTED_MODULE_2__/* .SectionTitle */ ._x, {
                title: t('content.HtmlConf.required'),
                count: 1
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_barrel_optimize_names_Alert_Box_Stack_TextField_Typography_mui_material__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .A, {
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_WindowConfUI__WEBPACK_IMPORTED_MODULE_2__/* .RequiredLabel */ .g2, {
                        label: t('content.HtmlConf.content')
                    }),
                    contentError && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_barrel_optimize_names_Alert_Box_Stack_TextField_Typography_mui_material__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .A, {
                        severity: "error",
                        sx: {
                            mb: 1
                        },
                        children: contentError
                    }),
                    detectedType !== 'invalid' && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_barrel_optimize_names_Alert_Box_Stack_TextField_Typography_mui_material__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .A, {
                        severity: "success",
                        sx: {
                            mb: 1
                        },
                        children: [
                            t('content.HtmlConf.detectedAs'),
                            ": ",
                            detectedType === 'url' ? 'URL' : 'HTML'
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_barrel_optimize_names_Alert_Box_Stack_TextField_Typography_mui_material__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .A, {
                        value: contentInput,
                        onChange: (e)=>handleContentChange(e.target.value),
                        placeholder: t('content.HtmlConf.contentPlaceholder'),
                        size: "small",
                        multiline: true,
                        rows: 4,
                        fullWidth: true,
                        helperText: t('content.HtmlConf.contentHelper'),
                        error: !!contentError
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_WindowConfUI__WEBPACK_IMPORTED_MODULE_2__/* .SectionTitle */ ._x, {
                title: t('content.HtmlConf.optional'),
                count: 6
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_barrel_optimize_names_Alert_Box_Stack_TextField_Typography_mui_material__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .A, {
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_WindowConfUI__WEBPACK_IMPORTED_MODULE_2__/* .OptionalLabel */ .zh, {
                        label: t('content.HtmlConf.jsBridgeName')
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_barrel_optimize_names_Alert_Box_Stack_TextField_Typography_mui_material__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .A, {
                        value: jsBridgeName,
                        onChange: (e)=>{
                            htmlConf.jsBridgeName = e.target.value;
                        },
                        size: "small",
                        fullWidth: true
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_barrel_optimize_names_Alert_Box_Stack_TextField_Typography_mui_material__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .A, {
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_WindowConfUI__WEBPACK_IMPORTED_MODULE_2__/* .OptionalLabel */ .zh, {
                        label: t('content.HtmlConf.webViewJsName')
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_barrel_optimize_names_Alert_Box_Stack_TextField_Typography_mui_material__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .A, {
                        value: webViewJsName,
                        onChange: (e)=>{
                            htmlConf.webViewJsName = e.target.value;
                        },
                        size: "small",
                        fullWidth: true
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_barrel_optimize_names_Alert_Box_Stack_TextField_Typography_mui_material__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .A, {
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_WindowConfUI__WEBPACK_IMPORTED_MODULE_2__/* .OptionalLabel */ .zh, {
                        label: t('content.HtmlConf.javaRunnerId')
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_barrel_optimize_names_Alert_Box_Stack_TextField_Typography_mui_material__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .A, {
                        type: "number",
                        value: javaRunnerId,
                        onChange: (e)=>{
                            htmlConf.javaRunnerId = Number(e.target.value);
                        },
                        size: "small",
                        fullWidth: true
                    })
                ]
            }),
            webViewJsParams && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_barrel_optimize_names_Alert_Box_Stack_TextField_Typography_mui_material__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .A, {
                        variant: "subtitle2",
                        children: t('content.WebViewJsParams.title')
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(WebViewJsParamsUI, {
                        jsParams: webViewJsParams
                    })
                ]
            }),
            webViewConf && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_barrel_optimize_names_Alert_Box_Stack_TextField_Typography_mui_material__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .A, {
                        variant: "subtitle2",
                        children: t('content.WebViewConf.title')
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_WindowConfUI__WEBPACK_IMPORTED_MODULE_2__/* .WebViewConfUI */ .q2, {
                        webViewConf: webViewConf
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_barrel_optimize_names_Alert_Box_Stack_TextField_Typography_mui_material__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .A, {
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_WindowConfUI__WEBPACK_IMPORTED_MODULE_2__/* .OptionalLabel */ .zh, {
                        label: t('content.HtmlConf.extra')
                    }),
                    extraJsonError && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_barrel_optimize_names_Alert_Box_Stack_TextField_Typography_mui_material__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .A, {
                        severity: "error",
                        sx: {
                            mb: 1
                        },
                        children: [
                            t('content.HtmlConf.extraJsonError'),
                            ": ",
                            extraJsonError
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_barrel_optimize_names_Alert_Box_Stack_TextField_Typography_mui_material__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .A, {
                        value: extraJson,
                        onChange: (e)=>extraJsonChange(e.target.value),
                        placeholder: t('content.HtmlConf.extraPlaceholder'),
                        size: "small",
                        multiline: true,
                        rows: 4,
                        fullWidth: true,
                        helperText: t('content.HtmlConf.extraHelper'),
                        error: !!extraJsonError
                    })
                ]
            })
        ]
    });
}


/***/ }),

/***/ 97972:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


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

}]);
//# sourceMappingURL=2813-3dcdcc80cad98903.js.map