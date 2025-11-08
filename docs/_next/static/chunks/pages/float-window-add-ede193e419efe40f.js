(self["webpackChunk_N_E"] = self["webpackChunk_N_E"] || []).push([[7769],{

/***/ 62083:
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
// EXTERNAL MODULE: ../../node_modules/.pnpm/react@19.1.0/node_modules/react/index.js
var react = __webpack_require__(94285);
// EXTERNAL MODULE: ../../node_modules/.pnpm/next@15.3.5_@babel+core@7.28.0_babel-plugin-macros@3.1.0_react-dom@19.1.0_react@19.1.0__react@19.1.0_sass@1.89.2/node_modules/next/router.js
var next_router = __webpack_require__(75640);
// EXTERNAL MODULE: ../../libs/droid/android/src/android/win/WindowConf.ts
var WindowConf = __webpack_require__(39800);
// EXTERNAL MODULE: ./src/components/android-float/window/data.ts
var data = __webpack_require__(70011);
// EXTERNAL MODULE: ../../libs/fanfanlo/src/watcher/proxyWatch.ts
var proxyWatch = __webpack_require__(88518);
// EXTERNAL MODULE: ../../libs/fanfanlo/src/watcher/useProxyWatch.ts
var useProxyWatch = __webpack_require__(45007);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/Box/Box.js + 2 modules
var Box = __webpack_require__(6445);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/Typography/Typography.js
var Typography = __webpack_require__(67079);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/Stack/Stack.js + 1 modules
var Stack = __webpack_require__(9220);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/TextField/TextField.js + 1 modules
var TextField = __webpack_require__(38771);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/Chip/Chip.js + 2 modules
var Chip = __webpack_require__(688);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/Alert/Alert.js + 6 modules
var Alert = __webpack_require__(81482);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/Button/Button.js + 3 modules
var Button = __webpack_require__(28669);
;// ./src/components/android-float/window/QuickCreateForm.tsx







/**
 * QuickCreateForm - 快速创建悬浮窗配置表单
 *
 * 必填项:
 * - 窗口标识(tag)
 * - 内容(URL 或 HTML)
 *
 * 推荐项:
 * - 前台服务提示文本
 *
 * 可选项:
 * - 窗口说明
 * - WebView JS 参数(折叠)
 */ function QuickCreateForm(param) {
    let { onQuickCreate, onDetailedEdit, onCancel } = param;
    var _conf_floatWindowConf;
    const { t } = (0,es/* useTranslation */.Bd)('homepage/components/android-float/window/content');
    const router = (0,next_router.useRouter)();
    console.log('QuickCreateForm: component mounted');
    // 创建配置对象
    const [conf] = (0,react.useState)(()=>{
        const defaultConf = (0,WindowConf/* createDefaultWindowConf */.IL)();
        defaultConf.windowType = WindowConf/* WindowType */.ZI.Float;
        defaultConf.floatWindowConf = (0,WindowConf/* createDefaultFloatWindowConf */.Wl)();
        return (0,proxyWatch/* toProxy */.I$)(defaultConf);
    });
    // UI状态
    const [contentInput, setContentInput] = (0,react.useState)('');
    const [detectedType, setDetectedType] = (0,react.useState)(null);
    const [errors, setErrors] = (0,react.useState)({});
    // 监听tag变化,实时校验重复
    const [tag] = (0,useProxyWatch/* useProxyWatch */.x)(conf, 'tag', conf.tag);
    // 监听前台服务文本变化
    const [foregroundText] = (0,useProxyWatch/* useProxyWatch */.x)(conf.floatWindowConf, 'foregroundText', ((_conf_floatWindowConf = conf.floatWindowConf) === null || _conf_floatWindowConf === void 0 ? void 0 : _conf_floatWindowConf.foregroundText) || '');
    console.log('QuickCreateForm: render, tag:', tag, 'contentInput:', contentInput);
    /**
   * 检测内容类型
   */ (0,react.useEffect)(()=>{
        console.log('QuickCreateForm: useEffect - contentInput changed:', contentInput);
        if (!contentInput.trim()) {
            setDetectedType(null);
            return;
        }
        const type = (0,data/* detectContentType */.l1)(contentInput);
        console.log('QuickCreateForm: detected type:', type);
        setDetectedType(type);
        if (type === 'url') {
            if (conf.htmlConf) {
                conf.htmlConf.url = contentInput;
                conf.htmlConf.html = '';
            }
        } else if (type === 'html') {
            if (conf.htmlConf) {
                conf.htmlConf.html = contentInput;
                conf.htmlConf.url = '';
            }
        }
    }, [
        contentInput,
        conf
    ]);
    /**
   * 校验tag重复
   */ (0,react.useEffect)(()=>{
        console.log('QuickCreateForm: useEffect - tag changed, checking duplicate:', tag);
        if (!tag.trim()) {
            return;
        }
        if ((0,data/* isTagExists */.lL)(tag)) {
            console.log('QuickCreateForm: tag already exists:', tag);
            setErrors((prev)=>({
                    ...prev,
                    tag: t('QuickCreateForm.tagDuplicateError')
                }));
        } else {
            console.log('QuickCreateForm: tag is unique:', tag);
            setErrors((prev)=>{
                const newErrors = {
                    ...prev
                };
                delete newErrors.tag;
                return newErrors;
            });
        }
    }, [
        tag,
        t
    ]);
    /**
   * 验证必填项
   */ const validateRequired = ()=>{
        var _conf_htmlConf, _conf_htmlConf1;
        console.log('QuickCreateForm: validateRequired called');
        const newErrors = {};
        // 验证tag
        if (!conf.tag.trim()) {
            newErrors.tag = t('QuickCreateForm.validationErrorTag');
        } else if ((0,data/* isTagExists */.lL)(conf.tag)) {
            newErrors.tag = t('QuickCreateForm.tagDuplicateError');
        }
        // 验证内容
        const url = (((_conf_htmlConf = conf.htmlConf) === null || _conf_htmlConf === void 0 ? void 0 : _conf_htmlConf.url) || '').trim();
        const html = (((_conf_htmlConf1 = conf.htmlConf) === null || _conf_htmlConf1 === void 0 ? void 0 : _conf_htmlConf1.html) || '').trim();
        if (!url && !html) {
            newErrors.content = t('QuickCreateForm.validationErrorContent');
        } else if (detectedType === 'invalid') {
            newErrors.content = t('QuickCreateForm.contentInvalid');
        }
        console.log('QuickCreateForm: validation errors:', newErrors);
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };
    /**
   * 快速创建
   */ const handleQuickCreate = ()=>{
        var _conf_htmlConf, _conf_htmlConf1, _conf_floatWindowConf;
        console.log('QuickCreateForm: handleQuickCreate called');
        if (!validateRequired()) {
            console.log('QuickCreateForm: validation failed');
            return;
        }
        console.log('QuickCreateForm: quick create success, conf:', {
            tag: conf.tag,
            url: (_conf_htmlConf = conf.htmlConf) === null || _conf_htmlConf === void 0 ? void 0 : _conf_htmlConf.url,
            html: (_conf_htmlConf1 = conf.htmlConf) === null || _conf_htmlConf1 === void 0 ? void 0 : _conf_htmlConf1.html,
            foregroundText: (_conf_floatWindowConf = conf.floatWindowConf) === null || _conf_floatWindowConf === void 0 ? void 0 : _conf_floatWindowConf.foregroundText
        });
        onQuickCreate(conf);
    };
    /**
   * 详细编辑 - 切换到编辑模式
   */ const handleFullConfig = ()=>{
        console.log('QuickCreateForm: handleFullConfig called');
        if (!validateRequired()) {
            console.log('QuickCreateForm: validation failed');
            return;
        }
        console.log('QuickCreateForm: switching to detailed edit mode, windowId:', conf.windowId);
        // 调用详细编辑回调,让父组件切换到编辑模式
        onDetailedEdit(conf);
    };
    /**
   * 取消
   */ const handleCancel = ()=>{
        console.log('QuickCreateForm: handleCancel called');
        onCancel();
    };
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.A, {
        sx: {
            p: 2,
            maxWidth: 800,
            mx: 'auto'
        },
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.A, {
                variant: "h5",
                gutterBottom: true,
                children: t('QuickCreateForm.title')
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)(Stack/* default */.A, {
                spacing: 3,
                sx: {
                    mt: 3
                },
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(TextField/* default */.A, {
                        label: /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.A, {
                            component: "span",
                            children: [
                                t('QuickCreateForm.tagLabel'),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)(Chip/* default */.A, {
                                    label: t('QuickCreateForm.tagRequired'),
                                    size: "small",
                                    color: "error",
                                    sx: {
                                        ml: 1,
                                        height: 20
                                    }
                                })
                            ]
                        }),
                        placeholder: t('QuickCreateForm.tagPlaceholder'),
                        helperText: errors.tag || t('QuickCreateForm.tagHelper'),
                        error: !!errors.tag,
                        value: tag,
                        onChange: (e)=>conf.tag = e.target.value,
                        fullWidth: true,
                        required: true
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.A, {
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(TextField/* default */.A, {
                                label: /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.A, {
                                    component: "span",
                                    children: [
                                        t('QuickCreateForm.contentLabel'),
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)(Chip/* default */.A, {
                                            label: t('QuickCreateForm.contentRequired'),
                                            size: "small",
                                            color: "error",
                                            sx: {
                                                ml: 1,
                                                height: 20
                                            }
                                        })
                                    ]
                                }),
                                placeholder: t('QuickCreateForm.contentPlaceholder'),
                                helperText: errors.content || t('QuickCreateForm.contentHelper'),
                                error: !!errors.content,
                                value: contentInput,
                                onChange: (e)=>setContentInput(e.target.value),
                                fullWidth: true,
                                required: true,
                                multiline: true,
                                rows: 3
                            }),
                            detectedType === 'url' && /*#__PURE__*/ (0,jsx_runtime.jsx)(Alert/* default */.A, {
                                severity: "success",
                                sx: {
                                    mt: 1
                                },
                                children: t('QuickCreateForm.detectedAsUrl')
                            }),
                            detectedType === 'html' && /*#__PURE__*/ (0,jsx_runtime.jsx)(Alert/* default */.A, {
                                severity: "success",
                                sx: {
                                    mt: 1
                                },
                                children: t('QuickCreateForm.detectedAsHtml')
                            }),
                            detectedType === 'invalid' && /*#__PURE__*/ (0,jsx_runtime.jsx)(Alert/* default */.A, {
                                severity: "error",
                                sx: {
                                    mt: 1
                                },
                                children: t('QuickCreateForm.contentInvalid')
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(TextField/* default */.A, {
                        label: /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.A, {
                            component: "span",
                            children: [
                                t('QuickCreateForm.foregroundTextLabel'),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)(Chip/* default */.A, {
                                    label: t('QuickCreateForm.foregroundTextRecommended'),
                                    size: "small",
                                    color: "warning",
                                    sx: {
                                        ml: 1,
                                        height: 20
                                    }
                                })
                            ]
                        }),
                        placeholder: t('QuickCreateForm.foregroundTextPlaceholder'),
                        helperText: t('QuickCreateForm.foregroundTextHelper'),
                        value: foregroundText,
                        onChange: (e)=>{
                            if (conf.floatWindowConf) {
                                conf.floatWindowConf.foregroundText = e.target.value;
                            }
                        },
                        fullWidth: true,
                        multiline: true,
                        rows: 2
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.A, {
                        sx: {
                            mt: 2
                        },
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.A, {
                                variant: "subtitle2",
                                gutterBottom: true,
                                children: t('QuickCreateForm.moreOptionsExpanded')
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(Stack/* default */.A, {
                                spacing: 2,
                                sx: {
                                    mt: 2
                                },
                                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(TextField/* default */.A, {
                                    label: t('QuickCreateForm.descriptionLabel'),
                                    placeholder: t('QuickCreateForm.descriptionPlaceholder'),
                                    value: conf.description || '',
                                    onChange: (e)=>conf.description = e.target.value,
                                    fullWidth: true,
                                    multiline: true,
                                    rows: 2
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)(Stack/* default */.A, {
                        direction: "row",
                        spacing: 2,
                        justifyContent: "space-between",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(Button/* default */.A, {
                                onClick: handleCancel,
                                variant: "outlined",
                                children: t('QuickCreateForm.cancel')
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)(Stack/* default */.A, {
                                direction: "row",
                                spacing: 2,
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Button/* default */.A, {
                                        onClick: handleQuickCreate,
                                        variant: "contained",
                                        children: t('QuickCreateForm.quickCreate')
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Button/* default */.A, {
                                        onClick: handleFullConfig,
                                        variant: "outlined",
                                        children: t('QuickCreateForm.detailedEdit')
                                    })
                                ]
                            })
                        ]
                    })
                ]
            })
        ]
    });
}

// EXTERNAL MODULE: ./src/components/android-float/window/WindowConfEditor.tsx + 5 modules
var WindowConfEditor = __webpack_require__(70564);
;// ./src/components/android-float/window/AddWindowContent.tsx







function AddWindowContent() {
    const router = (0,next_router.useRouter)();
    // 模式状态: 'create' | 'edit'
    const [mode, setMode] = (0,react.useState)('create');
    // 当前编辑的配置
    const [currentConf, setCurrentConf] = (0,react.useState)(null);
    (0,react.useEffect)(()=>{
        console.log('AddWindowContent: init');
        data/* androidFloatWindowData */.Kl.init();
    }, []);
    /**
   * 快速创建完成 - 添加到列表并返回
   */ const handleQuickCreate = (conf)=>{
        console.log('AddWindowContent: handleQuickCreate, adding window config:', conf.tag);
        data/* androidFloatWindowData */.Kl.data.windowData.windowList.push(conf);
        router.back();
    };
    /**
   * 详细编辑 - 切换到编辑模式(不提前保存)
   */ const handleDetailedEdit = (conf)=>{
        console.log('AddWindowContent: handleDetailedEdit, switching to edit mode:', conf.tag);
        // 不要提前添加到列表! 只有用户点击"确认修改"时才保存
        // 使用 createWindowConfCopy 补齐所有默认属性
        const mergedConf = (0,WindowConf/* createWindowConfCopy */.Sb)(conf);
        console.log('AddWindowContent: merged config with defaults:', mergedConf);
        setCurrentConf(mergedConf);
        // 切换到编辑模式
        setMode('edit');
    };
    /**
   * 快速创建取消
   */ const handleCancel = ()=>{
        console.log('AddWindowContent: handleCancel');
        router.back();
    };
    // 渲染不同模式
    if (mode === 'edit' && currentConf) {
        return /*#__PURE__*/ (0,jsx_runtime.jsx)(WindowConfEditor/* WindowConfEditor */.S, {
            windowConf: currentConf,
            isCreateMode: true
        });
    }
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(QuickCreateForm, {
        onQuickCreate: handleQuickCreate,
        onDetailedEdit: handleDetailedEdit,
        onCancel: handleCancel
    });
}

;// ./src/pages/float-window-add/index.tsx




function AndroidFloatWindow() {
    const { t } = (0,es/* useTranslation */.Bd)('homepage/pages/android-float-window/content');
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(AppShell/* AppShell */.G, {
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(AppBar/* AppbarContainer */.W, {
            appbarProps: {
                title: t('content.title'),
                back: true
            },
            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(AddWindowContent, {})
        })
    });
}


/***/ }),

/***/ 66908:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {


    (window.__NEXT_P = window.__NEXT_P || []).push([
      "/float-window-add",
      function () {
        return __webpack_require__(62083);
      }
    ]);
    if(false) {}
  

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, [5352,1161,4729,9151,3390,7313,8771,1482,788,2611,6980,799,8041,636,6593,8792], () => (__webpack_exec__(66908)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ _N_E = __webpack_exports__;
/******/ }
]);
//# sourceMappingURL=float-window-add-ede193e419efe40f.js.map