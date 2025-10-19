"use strict";
(self["webpackChunk_N_E"] = self["webpackChunk_N_E"] || []).push([[7122],{

/***/ 50079:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   JI: () => (/* binding */ FloatWindowConfUI),
/* harmony export */   TP: () => (/* binding */ DialogWindowConfUI),
/* harmony export */   _x: () => (/* binding */ SectionTitle),
/* harmony export */   g2: () => (/* binding */ RequiredLabel),
/* harmony export */   h0: () => (/* binding */ TestWindowConfUI2),
/* harmony export */   o0: () => (/* binding */ SysWindowConfUI),
/* harmony export */   q2: () => (/* binding */ WebViewConfUI),
/* harmony export */   zh: () => (/* binding */ OptionalLabel)
/* harmony export */ });
/* unused harmony export WindowConfUI */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(94513);
/* harmony import */ var _droid_android__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(39800);
/* harmony import */ var _fanfanlo__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(50279);
/* harmony import */ var _fanfanlo__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(45007);
/* harmony import */ var _fanfanlo__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(88518);
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
                children: Object.values(_droid_android__WEBPACK_IMPORTED_MODULE_11__/* .Gravity */ .rn).map((g)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_barrel_optimize_names_Box_Checkbox_FormControlLabel_MenuItem_Select_Stack_TextField_Tooltip_Typography_mui_material__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .A, {
                        value: g,
                        children: g
                    }, g))
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
                title: t('content.FloatConf.required'),
                count: 2
            }),
            gravity && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_barrel_optimize_names_Box_Checkbox_FormControlLabel_MenuItem_Select_Stack_TextField_Tooltip_Typography_mui_material__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A, {
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(RequiredLabel, {
                        label: t('content.FloatConf.gravity')
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(GravityInfoUI, {
                        gravityInfo: gravity
                    })
                ]
            }),
            border && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_barrel_optimize_names_Box_Checkbox_FormControlLabel_MenuItem_Select_Stack_TextField_Tooltip_Typography_mui_material__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A, {
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(RequiredLabel, {
                        label: t('content.FloatConf.border')
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(BorderInfoUI, {
                        borderInfo: border
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(SectionTitle, {
                title: t('content.FloatConf.optional'),
                count: 12
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_barrel_optimize_names_Box_Checkbox_FormControlLabel_MenuItem_Select_Stack_TextField_Tooltip_Typography_mui_material__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A, {
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(OptionalLabel, {
                        label: t('content.FloatConf.positionSaveName')
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_barrel_optimize_names_Box_Checkbox_FormControlLabel_MenuItem_Select_Stack_TextField_Tooltip_Typography_mui_material__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .A, {
                        value: positionSaveName,
                        onChange: (e)=>{
                            floatConf.positionSaveName = e.target.value;
                        },
                        size: "small",
                        fullWidth: true
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
                        children: Object.values(_droid_android__WEBPACK_IMPORTED_MODULE_11__/* .Gravity */ .rn).map((g)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_barrel_optimize_names_Box_Checkbox_FormControlLabel_MenuItem_Select_Stack_TextField_Tooltip_Typography_mui_material__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .A, {
                                value: g,
                                children: g
                            }, g))
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
                size: "small"
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
    const { t } = (0,_fanfanlo__WEBPACK_IMPORTED_MODULE_6__/* .useTranslation */ .Bd)('droid-android/android/win/content');
    const [theme] = (0,_fanfanlo__WEBPACK_IMPORTED_MODULE_7__/* .useProxyWatch */ .x)(dialogWindowConf, 'theme', dialogWindowConf.theme || '');
    const [viewLayoutParams] = (0,_fanfanlo__WEBPACK_IMPORTED_MODULE_7__/* .useProxyWatch */ .x)(dialogWindowConf, 'viewLayoutParams', dialogWindowConf.viewLayoutParams || {});
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_barrel_optimize_names_Box_Checkbox_FormControlLabel_MenuItem_Select_Stack_TextField_Tooltip_Typography_mui_material__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .A, {
        spacing: 2,
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_barrel_optimize_names_Box_Checkbox_FormControlLabel_MenuItem_Select_Stack_TextField_Tooltip_Typography_mui_material__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .A, {
                label: t('content.DialogWindowConf.theme'),
                value: theme,
                onChange: (e)=>{
                    dialogWindowConf.theme = e.target.value;
                },
                size: "small"
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_barrel_optimize_names_Box_Checkbox_FormControlLabel_MenuItem_Select_Stack_TextField_Tooltip_Typography_mui_material__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .A, {
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
    const { t } = (0,_fanfanlo__WEBPACK_IMPORTED_MODULE_6__/* .useTranslation */ .Bd)('droid-android/android/win/content');
    const [listenBackKey] = (0,_fanfanlo__WEBPACK_IMPORTED_MODULE_7__/* .useProxyWatch */ .x)(systemWindowConf, 'listenBackKey', systemWindowConf.listenBackKey);
    const [viewLayoutParams] = (0,_fanfanlo__WEBPACK_IMPORTED_MODULE_7__/* .useProxyWatch */ .x)(systemWindowConf, 'viewLayoutParams', systemWindowConf.viewLayoutParams || {});
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_barrel_optimize_names_Box_Checkbox_FormControlLabel_MenuItem_Select_Stack_TextField_Tooltip_Typography_mui_material__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .A, {
        spacing: 2,
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_barrel_optimize_names_Box_Checkbox_FormControlLabel_MenuItem_Select_Stack_TextField_Tooltip_Typography_mui_material__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .A, {
                control: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_barrel_optimize_names_Box_Checkbox_FormControlLabel_MenuItem_Select_Stack_TextField_Tooltip_Typography_mui_material__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .A, {
                    checked: listenBackKey,
                    onChange: (e)=>{
                        systemWindowConf.listenBackKey = e.target.checked;
                    }
                }),
                label: t('content.SysWindowConf.listenBackKey')
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_barrel_optimize_names_Box_Checkbox_FormControlLabel_MenuItem_Select_Stack_TextField_Tooltip_Typography_mui_material__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .A, {
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
    const { t } = (0,_fanfanlo__WEBPACK_IMPORTED_MODULE_6__/* .useTranslation */ .Bd)('droid-android/android/win/content');
    const [windowType] = (0,_fanfanlo__WEBPACK_IMPORTED_MODULE_7__/* .useProxyWatch */ .x)(windowConf, 'windowType', windowConf.windowType);
    const [contentType] = (0,_fanfanlo__WEBPACK_IMPORTED_MODULE_7__/* .useProxyWatch */ .x)(windowConf, 'contentType', windowConf.contentType);
    const [htmlConf] = (0,_fanfanlo__WEBPACK_IMPORTED_MODULE_7__/* .useProxyWatch */ .x)(windowConf, 'htmlConf', windowConf.htmlConf);
    const [floatWindowConf] = (0,_fanfanlo__WEBPACK_IMPORTED_MODULE_7__/* .useProxyWatch */ .x)(windowConf, 'floatWindowConf', windowConf.floatWindowConf);
    const [dialogWindowConf] = (0,_fanfanlo__WEBPACK_IMPORTED_MODULE_7__/* .useProxyWatch */ .x)(windowConf, 'dialogWindowConf', windowConf.dialogWindowConf);
    const [systemWindowConf] = (0,_fanfanlo__WEBPACK_IMPORTED_MODULE_7__/* .useProxyWatch */ .x)(windowConf, 'systemWindowConf', windowConf.systemWindowConf);
    const [windowId] = (0,_fanfanlo__WEBPACK_IMPORTED_MODULE_7__/* .useProxyWatch */ .x)(windowConf, 'windowId', windowConf.windowId);
    const [tag] = (0,_fanfanlo__WEBPACK_IMPORTED_MODULE_7__/* .useProxyWatch */ .x)(windowConf, 'tag', windowConf.tag);
    const [description] = (0,_fanfanlo__WEBPACK_IMPORTED_MODULE_7__/* .useProxyWatch */ .x)(windowConf, 'description', windowConf.description || '');
    const [forceDismissWindowTime] = (0,_fanfanlo__WEBPACK_IMPORTED_MODULE_7__/* .useProxyWatch */ .x)(windowConf, 'forceDismissWindowTime', windowConf.forceDismissWindowTime);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        // 9n windowType bMn�a
        let savedFloatWindowConf = windowConf.floatWindowConf;
        let savedDialogWindowConf = windowConf.dialogWindowConf;
        let savedSysWindowConf = windowConf.systemWindowConf;
        windowConf.floatWindowConf = undefined;
        windowConf.dialogWindowConf = undefined;
        windowConf.systemWindowConf = undefined;
        switch(windowType){
            case _droid_android__WEBPACK_IMPORTED_MODULE_11__/* .WindowType */ .ZI.Float:
                windowConf.floatWindowConf = savedFloatWindowConf || (0,_droid_android__WEBPACK_IMPORTED_MODULE_11__/* .createDefaultFloatWindowConf */ .Wl)();
                break;
            case _droid_android__WEBPACK_IMPORTED_MODULE_11__/* .WindowType */ .ZI.Dialog:
                windowConf.dialogWindowConf = savedDialogWindowConf || (0,_droid_android__WEBPACK_IMPORTED_MODULE_11__/* .createDefaultDialogWindowConf */ .yu)();
                break;
            case _droid_android__WEBPACK_IMPORTED_MODULE_11__/* .WindowType */ .ZI.System:
                windowConf.systemWindowConf = savedSysWindowConf || (0,_droid_android__WEBPACK_IMPORTED_MODULE_11__/* .createDefaultSysWindowConf */ .fF)();
                break;
        }
    }, [
        windowType
    ]);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_barrel_optimize_names_Box_Checkbox_FormControlLabel_MenuItem_Select_Stack_TextField_Tooltip_Typography_mui_material__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A, {
        sx: {
            p: 2
        },
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_barrel_optimize_names_Box_Checkbox_FormControlLabel_MenuItem_Select_Stack_TextField_Tooltip_Typography_mui_material__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .A, {
            spacing: 2,
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_barrel_optimize_names_Box_Checkbox_FormControlLabel_MenuItem_Select_Stack_TextField_Tooltip_Typography_mui_material__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A, {
                    variant: "h5",
                    sx: {
                        fontWeight: 'bold',
                        mb: 1
                    },
                    children: t('content.WindowConf.title')
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(SectionTitle, {
                    title: t('content.WindowConf.required'),
                    count: 5
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_barrel_optimize_names_Box_Checkbox_FormControlLabel_MenuItem_Select_Stack_TextField_Tooltip_Typography_mui_material__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A, {
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(RequiredLabel, {
                            label: t('content.WindowConf.windowType')
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_barrel_optimize_names_Box_Checkbox_FormControlLabel_MenuItem_Select_Stack_TextField_Tooltip_Typography_mui_material__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .A, {
                            value: windowType,
                            onChange: (e)=>{
                                windowConf.windowType = e.target.value;
                            },
                            size: "small",
                            fullWidth: true,
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_barrel_optimize_names_Box_Checkbox_FormControlLabel_MenuItem_Select_Stack_TextField_Tooltip_Typography_mui_material__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .A, {
                                    value: _droid_android__WEBPACK_IMPORTED_MODULE_11__/* .WindowType */ .ZI.Float,
                                    children: _droid_android__WEBPACK_IMPORTED_MODULE_11__/* .WindowType */ .ZI.Float
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_barrel_optimize_names_Box_Checkbox_FormControlLabel_MenuItem_Select_Stack_TextField_Tooltip_Typography_mui_material__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .A, {
                                    value: _droid_android__WEBPACK_IMPORTED_MODULE_11__/* .WindowType */ .ZI.Dialog,
                                    children: _droid_android__WEBPACK_IMPORTED_MODULE_11__/* .WindowType */ .ZI.Dialog
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_barrel_optimize_names_Box_Checkbox_FormControlLabel_MenuItem_Select_Stack_TextField_Tooltip_Typography_mui_material__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .A, {
                                    value: _droid_android__WEBPACK_IMPORTED_MODULE_11__/* .WindowType */ .ZI.System,
                                    children: _droid_android__WEBPACK_IMPORTED_MODULE_11__/* .WindowType */ .ZI.System
                                })
                            ]
                        })
                    ]
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_barrel_optimize_names_Box_Checkbox_FormControlLabel_MenuItem_Select_Stack_TextField_Tooltip_Typography_mui_material__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A, {
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(RequiredLabel, {
                            label: t('content.WindowConf.contentType')
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_barrel_optimize_names_Box_Checkbox_FormControlLabel_MenuItem_Select_Stack_TextField_Tooltip_Typography_mui_material__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .A, {
                            value: contentType,
                            disabled: true,
                            size: "small",
                            fullWidth: true,
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_barrel_optimize_names_Box_Checkbox_FormControlLabel_MenuItem_Select_Stack_TextField_Tooltip_Typography_mui_material__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .A, {
                                value: _droid_android__WEBPACK_IMPORTED_MODULE_11__/* .ContentType */ .cM.Html,
                                children: _droid_android__WEBPACK_IMPORTED_MODULE_11__/* .ContentType */ .cM.Html
                            })
                        })
                    ]
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_barrel_optimize_names_Box_Checkbox_FormControlLabel_MenuItem_Select_Stack_TextField_Tooltip_Typography_mui_material__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A, {
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(RequiredLabel, {
                            label: t('content.WindowConf.tag')
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_barrel_optimize_names_Box_Checkbox_FormControlLabel_MenuItem_Select_Stack_TextField_Tooltip_Typography_mui_material__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .A, {
                            value: tag,
                            onChange: (e)=>{
                                windowConf.tag = e.target.value;
                            },
                            size: "small",
                            fullWidth: true
                        })
                    ]
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_barrel_optimize_names_Box_Checkbox_FormControlLabel_MenuItem_Select_Stack_TextField_Tooltip_Typography_mui_material__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A, {
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(OptionalLabel, {
                            label: t('content.WindowConf.description')
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_barrel_optimize_names_Box_Checkbox_FormControlLabel_MenuItem_Select_Stack_TextField_Tooltip_Typography_mui_material__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .A, {
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
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_barrel_optimize_names_Box_Checkbox_FormControlLabel_MenuItem_Select_Stack_TextField_Tooltip_Typography_mui_material__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A, {
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(RequiredLabel, {
                            label: t('content.WindowConf.windowId')
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_barrel_optimize_names_Box_Checkbox_FormControlLabel_MenuItem_Select_Stack_TextField_Tooltip_Typography_mui_material__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .A, {
                            value: windowId,
                            disabled: true,
                            size: "small",
                            fullWidth: true
                        })
                    ]
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_barrel_optimize_names_Box_Checkbox_FormControlLabel_MenuItem_Select_Stack_TextField_Tooltip_Typography_mui_material__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A, {
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(RequiredLabel, {
                            label: t('content.WindowConf.forceDismissWindowTime')
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_barrel_optimize_names_Box_Checkbox_FormControlLabel_MenuItem_Select_Stack_TextField_Tooltip_Typography_mui_material__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .A, {
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
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(SectionTitle, {
                    title: t('content.WindowConf.optional'),
                    count: 3
                }),
                htmlConf && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_barrel_optimize_names_Box_Checkbox_FormControlLabel_MenuItem_Select_Stack_TextField_Tooltip_Typography_mui_material__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A, {
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_barrel_optimize_names_Box_Checkbox_FormControlLabel_MenuItem_Select_Stack_TextField_Tooltip_Typography_mui_material__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A, {
                            variant: "subtitle2",
                            sx: {
                                fontWeight: 'bold',
                                color: 'primary.main'
                            },
                            children: t('content.HtmlConf.title')
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_HtmlConfUI__WEBPACK_IMPORTED_MODULE_2__/* .HtmlConfUI */ .A, {
                            htmlConf: htmlConf
                        })
                    ]
                }),
                floatWindowConf && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_barrel_optimize_names_Box_Checkbox_FormControlLabel_MenuItem_Select_Stack_TextField_Tooltip_Typography_mui_material__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A, {
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_barrel_optimize_names_Box_Checkbox_FormControlLabel_MenuItem_Select_Stack_TextField_Tooltip_Typography_mui_material__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A, {
                            variant: "subtitle2",
                            sx: {
                                fontWeight: 'bold',
                                color: 'primary.main'
                            },
                            children: t('content.FloatWindowConf.title')
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(FloatWindowConfUI, {
                            floatWindowConf: floatWindowConf
                        })
                    ]
                }),
                dialogWindowConf && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_barrel_optimize_names_Box_Checkbox_FormControlLabel_MenuItem_Select_Stack_TextField_Tooltip_Typography_mui_material__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A, {
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_barrel_optimize_names_Box_Checkbox_FormControlLabel_MenuItem_Select_Stack_TextField_Tooltip_Typography_mui_material__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A, {
                            variant: "subtitle2",
                            sx: {
                                fontWeight: 'bold',
                                color: 'primary.main'
                            },
                            children: t('content.DialogWindowConf.title')
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(DialogWindowConfUI, {
                            dialogWindowConf: dialogWindowConf
                        })
                    ]
                }),
                systemWindowConf && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_barrel_optimize_names_Box_Checkbox_FormControlLabel_MenuItem_Select_Stack_TextField_Tooltip_Typography_mui_material__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A, {
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_barrel_optimize_names_Box_Checkbox_FormControlLabel_MenuItem_Select_Stack_TextField_Tooltip_Typography_mui_material__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A, {
                            variant: "subtitle2",
                            sx: {
                                fontWeight: 'bold',
                                color: 'primary.main'
                            },
                            children: t('content.SysWindowConf.title')
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(SysWindowConfUI, {
                            systemWindowConf: systemWindowConf
                        })
                    ]
                })
            ]
        })
    });
}
function TestWindowConfUI2() {
    const [conf] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)((0,_fanfanlo__WEBPACK_IMPORTED_MODULE_15__/* .toProxy */ .I$)((0,_droid_android__WEBPACK_IMPORTED_MODULE_11__/* .createDefaultWindowConf */ .IL)()));
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(WindowConfUI, {
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
/* harmony export */   M6: () => (/* binding */ isValidContent),
/* harmony export */   aM: () => (/* binding */ generateDefaultWindowName),
/* harmony export */   l1: () => (/* binding */ detectContentType),
/* harmony export */   lL: () => (/* binding */ isTagExists)
/* harmony export */ });
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


/***/ })

}]);
//# sourceMappingURL=7122-824a3fb7b17e9928.js.map