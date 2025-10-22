(self["webpackChunk_N_E"] = self["webpackChunk_N_E"] || []).push([[2764],{

/***/ 33472:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {


    (window.__NEXT_P = window.__NEXT_P || []).push([
      "/float-window-edit",
      function () {
        return __webpack_require__(72338);
      }
    ]);
    if(false) {}
  

/***/ }),

/***/ 45279:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   b: () => (/* binding */ getListItemTextUtilityClass)
/* harmony export */ });
/* harmony import */ var _mui_utils_generateUtilityClasses__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(92186);
/* harmony import */ var _mui_utils_generateUtilityClass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(69014);


function getListItemTextUtilityClass(slot) {
    return (0,_mui_utils_generateUtilityClass__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Ay)('MuiListItemText', slot);
}
const listItemTextClasses = (0,_mui_utils_generateUtilityClasses__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A)('MuiListItemText', [
    'root',
    'multiline',
    'dense',
    'inset',
    'primary',
    'secondary'
]);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (listItemTextClasses);


/***/ }),

/***/ 72338:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ AndroidFloatWindow)
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/react@19.1.0/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(94513);
// EXTERNAL MODULE: ../../libs/app/ui/src/components/app/AppShell.tsx + 2 modules
var AppShell = __webpack_require__(20939);
// EXTERNAL MODULE: ../../libs/app/ui/src/components/appbar/AppBar.tsx + 3 modules
var AppBar = __webpack_require__(97972);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react-i18next@15.6.0_i18next@24.2.3_typescript@5.7.3__react-dom@19.1.0_react@19.1.0__react@19.1.0_typescript@5.7.3/node_modules/react-i18next/dist/es/index.js + 15 modules
var es = __webpack_require__(50279);
// EXTERNAL MODULE: ../../node_modules/.pnpm/next@15.3.5_@babel+core@7.28.0_babel-plugin-macros@3.1.0_react-dom@19.1.0_react@19.1.0__react@19.1.0_sass@1.89.2/node_modules/next/router.js
var next_router = __webpack_require__(75640);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react@19.1.0/node_modules/react/index.js
var react = __webpack_require__(94285);
// EXTERNAL MODULE: ./src/components/android-float/window/data.ts
var data = __webpack_require__(70011);
// EXTERNAL MODULE: ../../libs/fanfanlo/src/log/Log.ts + 1 modules
var Log = __webpack_require__(48891);
// EXTERNAL MODULE: ../../libs/droid/android/src/android/win/WindowConf.ts
var WindowConf = __webpack_require__(39800);
// EXTERNAL MODULE: ../../libs/fanfanlo/src/watcher/proxyWatch.ts
var proxyWatch = __webpack_require__(88518);
// EXTERNAL MODULE: ../../libs/fanfanlo/src/watcher/useProxyWatch.ts
var useProxyWatch = __webpack_require__(45007);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/Box/Box.js + 2 modules
var Box = __webpack_require__(6445);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/Typography/Typography.js
var Typography = __webpack_require__(67079);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/Accordion/Accordion.js + 1 modules
var Accordion = __webpack_require__(20350);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/AccordionSummary/AccordionSummary.js + 1 modules
var AccordionSummary = __webpack_require__(56420);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/Chip/Chip.js + 2 modules
var Chip = __webpack_require__(688);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/AccordionDetails/AccordionDetails.js + 1 modules
var AccordionDetails = __webpack_require__(29708);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/Stack/Stack.js + 1 modules
var Stack = __webpack_require__(9220);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/Button/Button.js + 3 modules
var Button = __webpack_require__(28669);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+icons-material@6.4.12_@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_re_5ewkm5t5g27pzq5tz62v6ktvti/node_modules/@mui/icons-material/esm/ExpandMore.js
var ExpandMore = __webpack_require__(21985);
// EXTERNAL MODULE: ./src/components/android-float/window/WindowConfUI.tsx
var WindowConfUI = __webpack_require__(50079);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/Select/Select.js + 5 modules
var Select = __webpack_require__(7313);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/MenuItem/MenuItem.js + 2 modules
var MenuItem = __webpack_require__(82797);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/TextField/TextField.js + 1 modules
var TextField = __webpack_require__(38771);
;// ./src/components/android-float/window/BasicInfoSection.tsx





/**
 * BasicInfoSection - 基本信息编辑区域
 *
 * 编辑字段：
 * - windowType: 窗口类型
 * - tag: 窗口标识
 * - description: 窗口说明
 * - windowId: 窗口 ID (只读)
 */ function BasicInfoSection(param) {
    let { windowConf } = param;
    const [windowType] = (0,useProxyWatch/* useProxyWatch */.x)(windowConf, 'windowType', windowConf.windowType);
    const [tag] = (0,useProxyWatch/* useProxyWatch */.x)(windowConf, 'tag', windowConf.tag);
    const [description] = (0,useProxyWatch/* useProxyWatch */.x)(windowConf, 'description', windowConf.description || '');
    const [windowId] = (0,useProxyWatch/* useProxyWatch */.x)(windowConf, 'windowId', windowConf.windowId);
    console.log('BasicInfoSection: render windowType:', windowType, 'tag:', tag);
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(Stack/* default */.A, {
        spacing: 2,
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.A, {
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(WindowConfUI/* RequiredLabel */.g2, {
                        label: "窗口类型"
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)(Select/* default */.A, {
                        value: windowType,
                        onChange: (e)=>{
                            console.log('BasicInfoSection: windowType changed to', e.target.value);
                            windowConf.windowType = e.target.value;
                        },
                        size: "small",
                        fullWidth: true,
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(MenuItem/* default */.A, {
                                value: WindowConf/* WindowType */.ZI.Float,
                                children: "浮窗 (Float)"
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(MenuItem/* default */.A, {
                                value: WindowConf/* WindowType */.ZI.Dialog,
                                children: "对话框 (Dialog)"
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(MenuItem/* default */.A, {
                                value: WindowConf/* WindowType */.ZI.System,
                                children: "系统窗口 (System)"
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.A, {
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(WindowConfUI/* RequiredLabel */.g2, {
                        label: "窗口标识"
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(TextField/* default */.A, {
                        value: tag,
                        onChange: (e)=>{
                            console.log('BasicInfoSection: tag changed to', e.target.value);
                            windowConf.tag = e.target.value;
                        },
                        size: "small",
                        fullWidth: true
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.A, {
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(WindowConfUI/* OptionalLabel */.zh, {
                        label: "窗口说明"
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(TextField/* default */.A, {
                        value: description,
                        onChange: (e)=>{
                            console.log('BasicInfoSection: description changed to', e.target.value);
                            windowConf.description = e.target.value;
                        },
                        size: "small",
                        fullWidth: true,
                        multiline: true,
                        rows: 2
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.A, {
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.A, {
                        variant: "body2",
                        sx: {
                            fontWeight: 'bold',
                            mb: 0.5
                        },
                        children: "窗口 ID（系统生成）"
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(TextField/* default */.A, {
                        value: windowId,
                        disabled: true,
                        size: "small",
                        fullWidth: true
                    })
                ]
            })
        ]
    });
}

// EXTERNAL MODULE: ./src/components/android-float/window/HtmlConfUI.tsx
var HtmlConfUI = __webpack_require__(81780);
;// ./src/components/android-float/window/HtmlConfSection.tsx


/**
 * HtmlConfSection - HTML 内容编辑区域
 *
 * 编辑字段：
 * - url: 内容 URL
 * - html: 内嵌 HTML 代码
 * - jsBridgeName: 注入的 JS Bridge 名称
 * - webViewJsName: WebView JS 类型
 * - javaRunnerId: Java Runner ID
 * - webViewJsParams: WebView JS 参数
 * - webViewConf: WebView 配置
 */ function HtmlConfSection(param) {
    let { htmlConf } = param;
    if (!htmlConf) {
        return null;
    }
    console.log('HtmlConfSection: render htmlConf:', htmlConf);
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(HtmlConfUI/* HtmlConfUI */.A, {
        htmlConf: htmlConf
    });
}

;// ./src/components/android-float/window/AdvancedSection.tsx




/**
 * AdvancedSection - 高级选项编辑区域
 *
 * 编辑字段：
 * - forceDismissWindowTime: 强制关闭时间
 */ function AdvancedSection(param) {
    let { windowConf } = param;
    const { t } = (0,es/* useTranslation */.Bd)('homepage/components/android-float/window/content');
    const [forceDismissWindowTime] = (0,useProxyWatch/* useProxyWatch */.x)(windowConf, 'forceDismissWindowTime', windowConf.forceDismissWindowTime);
    console.log('AdvancedSection: render forceDismissWindowTime:', forceDismissWindowTime);
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(Stack/* default */.A, {
        spacing: 2,
        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.A, {
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsx)(WindowConfUI/* OptionalLabel */.zh, {
                    label: t('AdvancedSection.forceDismissWindowTimeLabel')
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)(TextField/* default */.A, {
                    type: "number",
                    value: forceDismissWindowTime,
                    onChange: (e)=>{
                        console.log('AdvancedSection: forceDismissWindowTime changed to', e.target.value);
                        windowConf.forceDismissWindowTime = Number(e.target.value);
                    },
                    size: "small",
                    fullWidth: true,
                    inputProps: {
                        min: 0,
                        step: 1000
                    },
                    helperText: t('AdvancedSection.forceDismissWindowTimeHelper')
                })
            ]
        })
    });
}

;// ./src/components/android-float/window/WindowConfEditor.tsx












/**
 * WindowConfEditor - Accordion 式编辑窗口配置
 *
 * 功能：
 * - 快速定位和编辑字段
 * - 根据 windowType 动态显示配置
 * - 必填项标记
 */ function WindowConfEditor(param) {
    let { windowConf: conf } = param;
    const router = (0,next_router.useRouter)();
    const [windowConf] = (0,react.useState)((0,proxyWatch/* toProxy */.I$)(conf));
    const [expanded, setExpanded] = (0,react.useState)('basic');
    const [windowType] = (0,useProxyWatch/* useProxyWatch */.x)(windowConf, 'windowType', windowConf.windowType);
    const [tag] = (0,useProxyWatch/* useProxyWatch */.x)(windowConf, 'tag', windowConf.tag);
    const [windowId] = (0,useProxyWatch/* useProxyWatch */.x)(windowConf, 'windowId', windowConf.windowId);
    console.log('WindowConfEditor: render windowType:', windowType);
    /**
   * 监听 windowType 变化，自动初始化对应的配置对象
   */ (0,react.useEffect)(()=>{
        console.log('WindowConfEditor: useEffect - windowType changed to:', windowType);
        if (windowType === WindowConf/* WindowType */.ZI.Float) {
            if (!windowConf.floatWindowConf) {
                console.log('WindowConfEditor: creating default FloatWindowConf');
                windowConf.floatWindowConf = (0,WindowConf/* createDefaultFloatWindowConf */.Wl)();
            }
        }
    }, [
        windowType,
        windowConf
    ]);
    const editComfirmed = ()=>{
        const index = data/* androidFloatWindowData */.Kl.data.windowData.windowList.findIndex((w)=>w.windowId === windowConf.windowId);
        if (index == -1) {
            console.error('WindowConfEditor: editComfirmed - window config not found for windowId:', windowConf.windowId);
            return;
        }
        data/* androidFloatWindowData */.Kl.data.windowData.windowList[index] = windowConf;
        console.log('WindowConfEditor: window config updated:', windowConf);
    };
    const handleConfirm = ()=>{
        console.log('WindowConfEditor: handleConfirm - confirming changes');
        editComfirmed();
        router.back();
    };
    const handleCancel = ()=>{
        console.log('WindowConfEditor: handleCancel - discarding changes');
        router.back();
    };
    /**
   * 处理 Accordion 展开/折叠
   */ const handleAccordionChange = (panelId)=>(event, isExpanded)=>{
            console.log('WindowConfEditor: Accordion', panelId, 'toggled, isExpanded:', isExpanded);
            setExpanded(isExpanded ? panelId : false);
        };
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.A, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.A, {
                sx: {
                    mb: 3,
                    pb: 2,
                    borderBottom: '1px solid',
                    borderColor: 'divider'
                },
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.A, {
                        variant: "h6",
                        sx: {
                            fontWeight: 'bold'
                        },
                        children: tag
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)(Typography/* default */.A, {
                        variant: "body2",
                        color: "text.secondary",
                        children: [
                            "类型: ",
                            windowType,
                            " | ID: ",
                            windowId.substring(0, 8),
                            "..."
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)(Accordion/* default */.A, {
                expanded: expanded === 'basic',
                onChange: handleAccordionChange('basic'),
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)(AccordionSummary/* default */.A, {
                        expandIcon: /*#__PURE__*/ (0,jsx_runtime.jsx)(ExpandMore/* default */.A, {}),
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(Chip/* default */.A, {
                                label: "必填",
                                size: "small",
                                sx: {
                                    mr: 1
                                },
                                color: "error",
                                variant: "outlined"
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.A, {
                                children: "基本信息"
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(AccordionDetails/* default */.A, {
                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(BasicInfoSection, {
                            windowConf: windowConf
                        })
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)(Accordion/* default */.A, {
                expanded: expanded === 'html',
                onChange: handleAccordionChange('html'),
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)(AccordionSummary/* default */.A, {
                        expandIcon: /*#__PURE__*/ (0,jsx_runtime.jsx)(ExpandMore/* default */.A, {}),
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(Chip/* default */.A, {
                                label: "必填",
                                size: "small",
                                sx: {
                                    mr: 1
                                },
                                color: "error",
                                variant: "outlined"
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.A, {
                                children: "HTML 内容"
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(AccordionDetails/* default */.A, {
                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(HtmlConfSection, {
                            htmlConf: windowConf.htmlConf
                        })
                    })
                ]
            }),
            windowType === WindowConf/* WindowType */.ZI.Float && windowConf.floatWindowConf && /*#__PURE__*/ (0,jsx_runtime.jsxs)(Accordion/* default */.A, {
                expanded: expanded === 'float',
                onChange: handleAccordionChange('float'),
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(AccordionSummary/* default */.A, {
                        expandIcon: /*#__PURE__*/ (0,jsx_runtime.jsx)(ExpandMore/* default */.A, {}),
                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.A, {
                            children: "浮窗配置"
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(AccordionDetails/* default */.A, {
                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(WindowConfUI/* FloatWindowConfUI */.JI, {
                            floatWindowConf: windowConf.floatWindowConf
                        })
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)(Accordion/* default */.A, {
                expanded: expanded === 'advanced',
                onChange: handleAccordionChange('advanced'),
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(AccordionSummary/* default */.A, {
                        expandIcon: /*#__PURE__*/ (0,jsx_runtime.jsx)(ExpandMore/* default */.A, {}),
                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.A, {
                            children: "高级选项"
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(AccordionDetails/* default */.A, {
                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(AdvancedSection, {
                            windowConf: windowConf
                        })
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)(Stack/* default */.A, {
                direction: "row",
                spacing: 2,
                sx: {
                    mt: 4,
                    justifyContent: 'flex-end'
                },
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Button/* default */.A, {
                        variant: "outlined",
                        onClick: handleCancel,
                        children: "放弃"
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Button/* default */.A, {
                        variant: "contained",
                        color: "primary",
                        onClick: handleConfirm,
                        children: "确认修改"
                    })
                ]
            })
        ]
    });
}

// EXTERNAL MODULE: ../../node_modules/.pnpm/react-hot-toast@2.5.2_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/react-hot-toast/dist/index.mjs + 1 modules
var dist = __webpack_require__(22243);
;// ./src/components/android-float/window/EditWindowContent.tsx








const fileLog = new Log/* Log */.tG(false, 'EditWindowContent.tsx');
function EditWindowContent() {
    const uiLog = fileLog.sub(false, 'EditWindowContent');
    const { t } = (0,es/* useTranslation */.Bd)('homepage/components/android-float/window/content');
    const router = (0,next_router.useRouter)();
    const [windowConf, setWindowConf] = (0,react.useState)(null);
    const [noWindowId, setNoWindowId] = (0,react.useState)(false);
    const [windowConfNotFound, setWindowConfNotFound] = (0,react.useState)(false);
    const { windowId } = router.query;
    (0,react.useEffect)(()=>{
        const effLog = uiLog.sub(true, 'useEffect-init');
        effLog.log('Editing window id:', windowId);
        if (!windowId) {
            setNoWindowId(true);
            dist/* default */.Ay.error('No windowId provided in query parameters.');
            return;
        }
        data/* androidFloatWindowData */.Kl.init();
        const windowConf = data/* androidFloatWindowData */.Kl.data.windowData.windowList.find((w)=>w.windowId === windowId);
        effLog.log('Loaded window config for editing:', windowConf);
        if (!windowConf) {
            setWindowConfNotFound(true);
            dist/* default */.Ay.error(t('EditWindowContent.windowConfNotFound'));
            return;
        }
        setWindowConf(windowConf || null);
    }, []);
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.A, {
        children: [
            noWindowId && /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.A, {
                children: t("EditWindowContent.noWindowId")
            }),
            windowConfNotFound && /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.A, {
                children: t("EditWindowContent.windowConfNotFound")
            }),
            windowConf && /*#__PURE__*/ (0,jsx_runtime.jsx)(WindowConfEditor, {
                windowConf: windowConf
            })
        ]
    });
}

;// ./src/pages/float-window-edit/index.tsx




function AndroidFloatWindow() {
    const { t } = (0,es/* useTranslation */.Bd)('homepage/pages/android-float-window/content');
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(AppShell/* AppShell */.G, {
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(AppBar/* AppbarContainer */.W, {
            appbarProps: {
                title: t('content.title'),
                back: true
            },
            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(EditWindowContent, {})
        })
    });
}


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, [7054,1161,9151,6491,3390,7313,8771,788,1482,3126,1538,688,2163,636,6593,8792], () => (__webpack_exec__(33472)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ _N_E = __webpack_exports__;
/******/ }
]);
//# sourceMappingURL=float-window-edit-53a5e61553597e05.js.map