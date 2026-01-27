(self["webpackChunk_N_E"] = self["webpackChunk_N_E"] || []).push([[7769],{

/***/ 30951:
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
// EXTERNAL MODULE: ../../libs/app/ui/src/components/app/AppShell.tsx + 3 modules
var AppShell = __webpack_require__(26719);
// EXTERNAL MODULE: ../../libs/app/ui/src/components/appbar/AppBar.tsx + 2 modules
var AppBar = __webpack_require__(40018);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react-i18next@15.6.0_i18next@24.2.3_typescript@5.7.3__react-dom@19.1.0_react@19.1.0__react@19.1.0_typescript@5.7.3/node_modules/react-i18next/dist/es/index.js + 15 modules
var es = __webpack_require__(56137);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react@19.1.0/node_modules/react/index.js
var react = __webpack_require__(94285);
// EXTERNAL MODULE: ../../node_modules/.pnpm/next@15.3.5_@babel+core@7.28.0_@playwright+test@1.57.0_babel-plugin-macros@3.1.0_react-dom@19_gjfccjsd7b6xv5ktyj7vxamu6q/node_modules/next/router.js
var next_router = __webpack_require__(1674);
// EXTERNAL MODULE: ../../libs/droid/android/src/android/win/WindowConf.ts
var WindowConf = __webpack_require__(99949);
// EXTERNAL MODULE: ./src/components/android-float/window/data.ts
var data = __webpack_require__(74312);
// EXTERNAL MODULE: ./src/components/android-float/window/QuickCreateForm.tsx
var QuickCreateForm = __webpack_require__(52713);
// EXTERNAL MODULE: ./src/components/android-float/window/WindowConfEditor.tsx + 5 modules
var WindowConfEditor = __webpack_require__(99910);
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
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(QuickCreateForm/* QuickCreateForm */.O, {
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

/***/ 52713:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   O: () => (/* binding */ QuickCreateForm)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(94513);
/* harmony import */ var _droid_android__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(99949);
/* harmony import */ var _fanfanlo__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(56137);
/* harmony import */ var _fanfanlo__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(57641);
/* harmony import */ var _fanfanlo__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(80502);
/* harmony import */ var _barrel_optimize_names_Alert_Box_Button_Chip_Stack_TextField_Typography_mui_material__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(92061);
/* harmony import */ var _barrel_optimize_names_Alert_Box_Button_Chip_Stack_TextField_Typography_mui_material__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(26512);
/* harmony import */ var _barrel_optimize_names_Alert_Box_Button_Chip_Stack_TextField_Typography_mui_material__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(39070);
/* harmony import */ var _barrel_optimize_names_Alert_Box_Button_Chip_Stack_TextField_Typography_mui_material__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(32314);
/* harmony import */ var _barrel_optimize_names_Alert_Box_Button_Chip_Stack_TextField_Typography_mui_material__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(95409);
/* harmony import */ var _barrel_optimize_names_Alert_Box_Button_Chip_Stack_TextField_Typography_mui_material__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(99450);
/* harmony import */ var _barrel_optimize_names_Alert_Box_Button_Chip_Stack_TextField_Typography_mui_material__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(20872);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(94285);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1674);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(74312);







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
    let { initialConf, onQuickCreate, onDetailedEdit, onCancel, hideForegroundText = false, hideTag = false } = param;
    var _conf_floatWindowConf;
    const { t } = (0,_fanfanlo__WEBPACK_IMPORTED_MODULE_4__/* .useTranslation */ .Bd)('homepage/components/android-float/window/content');
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();
    console.log('QuickCreateForm: component mounted, initialConf:', initialConf, 'hideForegroundText:', hideForegroundText, 'hideTag:', hideTag);
    // 创建配置对象
    const [conf] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(()=>{
        if (initialConf) {
            console.log('QuickCreateForm: using initialConf');
            return (0,_fanfanlo__WEBPACK_IMPORTED_MODULE_5__/* .toProxy */ .I$)(initialConf);
        }
        console.log('QuickCreateForm: creating default conf');
        const defaultConf = (0,_droid_android__WEBPACK_IMPORTED_MODULE_6__/* .createDefaultWindowConf */ .IL)();
        defaultConf.windowType = _droid_android__WEBPACK_IMPORTED_MODULE_6__/* .WindowType */ .ZI.Float;
        defaultConf.floatWindowConf = (0,_droid_android__WEBPACK_IMPORTED_MODULE_6__/* .createDefaultFloatWindowConf */ .Wl)();
        return (0,_fanfanlo__WEBPACK_IMPORTED_MODULE_5__/* .toProxy */ .I$)(defaultConf);
    });
    // UI状态
    const [contentInput, setContentInput] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('');
    const [detectedType, setDetectedType] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
    const [errors, setErrors] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({});
    // 监听tag变化,实时校验重复
    const [tag] = (0,_fanfanlo__WEBPACK_IMPORTED_MODULE_7__/* .useProxyWatch */ .x)(conf, 'tag', conf.tag);
    // 监听前台服务文本变化
    const [foregroundText] = (0,_fanfanlo__WEBPACK_IMPORTED_MODULE_7__/* .useProxyWatch */ .x)(conf.floatWindowConf, 'foregroundText', ((_conf_floatWindowConf = conf.floatWindowConf) === null || _conf_floatWindowConf === void 0 ? void 0 : _conf_floatWindowConf.foregroundText) || '');
    console.log('QuickCreateForm: render, tag:', tag, 'contentInput:', contentInput, 'hideTag:', hideTag);
    /**
   * 当 initialConf 存在时，初始化表单数据
   */ (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        console.log('[QuickCreateForm] useEffect - initialConf changed:', initialConf);
        if (initialConf) {
            var _initialConf_htmlConf, _initialConf_htmlConf1;
            console.log('[QuickCreateForm] initialConf provided, initializing form with existing data');
            // 更新 conf 的所有属性
            console.log('[QuickCreateForm] updating conf with initialConf properties');
            Object.assign(conf, initialConf);
            // 初始化 contentInput
            if ((_initialConf_htmlConf = initialConf.htmlConf) === null || _initialConf_htmlConf === void 0 ? void 0 : _initialConf_htmlConf.url) {
                console.log('[QuickCreateForm] setting contentInput from url:', initialConf.htmlConf.url);
                setContentInput(initialConf.htmlConf.url);
            } else if ((_initialConf_htmlConf1 = initialConf.htmlConf) === null || _initialConf_htmlConf1 === void 0 ? void 0 : _initialConf_htmlConf1.html) {
                console.log('[QuickCreateForm] setting contentInput from html (length):', initialConf.htmlConf.html.length);
                setContentInput(initialConf.htmlConf.html);
            }
        }
    }, [
        initialConf,
        conf
    ]);
    /**
   * 检测内容类型
   */ (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        console.log('QuickCreateForm: useEffect - contentInput changed:', contentInput);
        if (!contentInput.trim()) {
            setDetectedType(null);
            return;
        }
        const type = (0,_data__WEBPACK_IMPORTED_MODULE_3__/* .detectContentType */ .l1)(contentInput);
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
   */ (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        console.log('QuickCreateForm: useEffect - tag changed, checking duplicate:', tag);
        if (!tag.trim()) {
            return;
        }
        if ((0,_data__WEBPACK_IMPORTED_MODULE_3__/* .isTagExists */ .lL)(tag)) {
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
        // tag 不再是必填项，但如果为空则自动使用 windowId
        if (!conf.tag.trim()) {
            console.log('QuickCreateForm: tag is empty, using windowId as tag:', conf.windowId);
            conf.tag = conf.windowId;
        } else if ((0,_data__WEBPACK_IMPORTED_MODULE_3__/* .isTagExists */ .lL)(conf.tag)) {
            // 如果用户手动输入了 tag，仍然检查重复
            console.log('QuickCreateForm: tag already exists:', conf.tag);
            newErrors.tag = t('QuickCreateForm.tagDuplicateError');
        }
        // 验证内容
        const url = (((_conf_htmlConf = conf.htmlConf) === null || _conf_htmlConf === void 0 ? void 0 : _conf_htmlConf.url) || '').trim();
        const html = (((_conf_htmlConf1 = conf.htmlConf) === null || _conf_htmlConf1 === void 0 ? void 0 : _conf_htmlConf1.html) || '').trim();
        if (!url && !html) {
            console.log('QuickCreateForm: content is empty');
            newErrors.content = t('QuickCreateForm.validationErrorContent');
        } else if (detectedType === 'invalid') {
            console.log('QuickCreateForm: content type is invalid');
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
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_barrel_optimize_names_Alert_Box_Button_Chip_Stack_TextField_Typography_mui_material__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .A, {
        sx: {
            p: 2,
            maxWidth: 800,
            mx: 'auto'
        },
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_barrel_optimize_names_Alert_Box_Button_Chip_Stack_TextField_Typography_mui_material__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .A, {
                variant: "h5",
                gutterBottom: true,
                children: t('QuickCreateForm.title')
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_barrel_optimize_names_Alert_Box_Button_Chip_Stack_TextField_Typography_mui_material__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .A, {
                spacing: 3,
                sx: {
                    mt: 3
                },
                children: [
                    !hideTag && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_barrel_optimize_names_Alert_Box_Button_Chip_Stack_TextField_Typography_mui_material__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .A, {
                        label: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_barrel_optimize_names_Alert_Box_Button_Chip_Stack_TextField_Typography_mui_material__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .A, {
                            component: "span",
                            children: [
                                t('QuickCreateForm.tagLabel'),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_barrel_optimize_names_Alert_Box_Button_Chip_Stack_TextField_Typography_mui_material__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .A, {
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
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_barrel_optimize_names_Alert_Box_Button_Chip_Stack_TextField_Typography_mui_material__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .A, {
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_barrel_optimize_names_Alert_Box_Button_Chip_Stack_TextField_Typography_mui_material__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .A, {
                                label: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_barrel_optimize_names_Alert_Box_Button_Chip_Stack_TextField_Typography_mui_material__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .A, {
                                    component: "span",
                                    children: [
                                        t('QuickCreateForm.contentLabel'),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_barrel_optimize_names_Alert_Box_Button_Chip_Stack_TextField_Typography_mui_material__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .A, {
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
                            detectedType === 'url' && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_barrel_optimize_names_Alert_Box_Button_Chip_Stack_TextField_Typography_mui_material__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .A, {
                                severity: "success",
                                sx: {
                                    mt: 1
                                },
                                children: t('QuickCreateForm.detectedAsUrl')
                            }),
                            detectedType === 'html' && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_barrel_optimize_names_Alert_Box_Button_Chip_Stack_TextField_Typography_mui_material__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .A, {
                                severity: "success",
                                sx: {
                                    mt: 1
                                },
                                children: t('QuickCreateForm.detectedAsHtml')
                            }),
                            detectedType === 'invalid' && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_barrel_optimize_names_Alert_Box_Button_Chip_Stack_TextField_Typography_mui_material__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .A, {
                                severity: "error",
                                sx: {
                                    mt: 1
                                },
                                children: t('QuickCreateForm.contentInvalid')
                            })
                        ]
                    }),
                    !hideForegroundText && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_barrel_optimize_names_Alert_Box_Button_Chip_Stack_TextField_Typography_mui_material__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .A, {
                        label: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_barrel_optimize_names_Alert_Box_Button_Chip_Stack_TextField_Typography_mui_material__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .A, {
                            component: "span",
                            children: [
                                t('QuickCreateForm.foregroundTextLabel'),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_barrel_optimize_names_Alert_Box_Button_Chip_Stack_TextField_Typography_mui_material__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .A, {
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
                            console.log('[QuickCreateForm] foregroundText changed:', e.target.value);
                            if (conf.floatWindowConf) {
                                conf.floatWindowConf.foregroundText = e.target.value;
                            }
                        },
                        fullWidth: true,
                        multiline: true,
                        rows: 2
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_barrel_optimize_names_Alert_Box_Button_Chip_Stack_TextField_Typography_mui_material__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .A, {
                        sx: {
                            mt: 2
                        },
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_barrel_optimize_names_Alert_Box_Button_Chip_Stack_TextField_Typography_mui_material__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .A, {
                                variant: "subtitle2",
                                gutterBottom: true,
                                children: t('QuickCreateForm.moreOptionsExpanded')
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_barrel_optimize_names_Alert_Box_Button_Chip_Stack_TextField_Typography_mui_material__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .A, {
                                spacing: 2,
                                sx: {
                                    mt: 2
                                },
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_barrel_optimize_names_Alert_Box_Button_Chip_Stack_TextField_Typography_mui_material__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .A, {
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
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_barrel_optimize_names_Alert_Box_Button_Chip_Stack_TextField_Typography_mui_material__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .A, {
                        direction: "row",
                        spacing: 2,
                        justifyContent: "space-between",
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_barrel_optimize_names_Alert_Box_Button_Chip_Stack_TextField_Typography_mui_material__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .A, {
                                onClick: handleCancel,
                                variant: "outlined",
                                "data-testid": "QuickCreateForm__cancelButton__01JG2B0017",
                                children: t('QuickCreateForm.cancel')
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_barrel_optimize_names_Alert_Box_Button_Chip_Stack_TextField_Typography_mui_material__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .A, {
                                direction: "row",
                                spacing: 2,
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_barrel_optimize_names_Alert_Box_Button_Chip_Stack_TextField_Typography_mui_material__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .A, {
                                        onClick: handleQuickCreate,
                                        variant: "contained",
                                        "data-testid": "QuickCreateForm__quickCreateButton__01JG2B0018",
                                        children: t('QuickCreateForm.quickCreate')
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_barrel_optimize_names_Alert_Box_Button_Chip_Stack_TextField_Typography_mui_material__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .A, {
                                        onClick: handleFullConfig,
                                        variant: "outlined",
                                        "data-testid": "QuickCreateForm__detailedEditButton__01JG2B0019",
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


/***/ }),

/***/ 57881:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {


    (window.__NEXT_P = window.__NEXT_P || []).push([
      "/float-window-add",
      function () {
        return __webpack_require__(30951);
      }
    ]);
    if(false) {}
  

/***/ }),

/***/ 61984:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils_createSvgIcon_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(38803);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(94513);
/* __next_internal_client_entry_do_not_use__ default auto */ 

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_utils_createSvgIcon_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A)(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
    d: "M16.59 8.59 12 13.17 7.41 8.59 6 10l6 6 6-6z"
}), 'ExpandMore'));


/***/ }),

/***/ 99450:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ Alert_Alert)
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/react@19.1.0/node_modules/react/index.js
var react = __webpack_require__(94285);
// EXTERNAL MODULE: ../../node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs
var clsx = __webpack_require__(3638);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+utils@6.4.9_@types+react@19.1.8_react@19.1.0/node_modules/@mui/utils/esm/composeClasses/composeClasses.js
var composeClasses = __webpack_require__(95116);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+system@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled@1_sfs2vjcbuqchwdpqpmkla22opm/node_modules/@mui/system/esm/colorManipulator/colorManipulator.js + 1 modules
var colorManipulator = __webpack_require__(21567);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/styles/styled.js
var styled = __webpack_require__(96543);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/utils/memoTheme.js + 1 modules
var memoTheme = __webpack_require__(18558);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/DefaultPropsProvider/DefaultPropsProvider.js
var DefaultPropsProvider = __webpack_require__(85042);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/utils/useSlot.js
var useSlot = __webpack_require__(48470);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/utils/capitalize.js
var capitalize = __webpack_require__(93385);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/utils/createSimplePaletteValueFilter.js
var createSimplePaletteValueFilter = __webpack_require__(38047);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/Paper/Paper.js + 1 modules
var Paper = __webpack_require__(68732);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+utils@6.4.9_@types+react@19.1.8_react@19.1.0/node_modules/@mui/utils/esm/generateUtilityClasses/generateUtilityClasses.js
var generateUtilityClasses = __webpack_require__(92186);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+utils@6.4.9_@types+react@19.1.8_react@19.1.0/node_modules/@mui/utils/esm/generateUtilityClass/generateUtilityClass.js
var generateUtilityClass = __webpack_require__(69014);
;// ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/Alert/alertClasses.js


function getAlertUtilityClass(slot) {
    return (0,generateUtilityClass/* default */.Ay)('MuiAlert', slot);
}
const alertClasses = (0,generateUtilityClasses/* default */.A)('MuiAlert', [
    'root',
    'action',
    'icon',
    'message',
    'filled',
    'colorSuccess',
    'colorInfo',
    'colorWarning',
    'colorError',
    'filledSuccess',
    'filledInfo',
    'filledWarning',
    'filledError',
    'outlined',
    'outlinedSuccess',
    'outlinedInfo',
    'outlinedWarning',
    'outlinedError',
    'standard',
    'standardSuccess',
    'standardInfo',
    'standardWarning',
    'standardError'
]);
/* harmony default export */ const Alert_alertClasses = (alertClasses);

// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/IconButton/IconButton.js + 1 modules
var IconButton = __webpack_require__(10184);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/utils/createSvgIcon.js + 2 modules
var createSvgIcon = __webpack_require__(38803);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react@19.1.0/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(94513);
;// ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/internal/svg-icons/SuccessOutlined.js
/* __next_internal_client_entry_do_not_use__ default auto */ 

/**
 * @ignore - internal component.
 */ 
/* harmony default export */ const SuccessOutlined = ((0,createSvgIcon/* default */.A)(/*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
    d: "M20,12A8,8 0 0,1 12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4C12.76,4 13.5,4.11 14.2, 4.31L15.77,2.74C14.61,2.26 13.34,2 12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0, 0 22,12M7.91,10.08L6.5,11.5L11,16L21,6L19.59,4.58L11,13.17L7.91,10.08Z"
}), 'SuccessOutlined'));

;// ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/internal/svg-icons/ReportProblemOutlined.js
/* __next_internal_client_entry_do_not_use__ default auto */ 

/**
 * @ignore - internal component.
 */ 
/* harmony default export */ const ReportProblemOutlined = ((0,createSvgIcon/* default */.A)(/*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
    d: "M12 5.99L19.53 19H4.47L12 5.99M12 2L1 21h22L12 2zm1 14h-2v2h2v-2zm0-6h-2v4h2v-4z"
}), 'ReportProblemOutlined'));

;// ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/internal/svg-icons/ErrorOutline.js
/* __next_internal_client_entry_do_not_use__ default auto */ 

/**
 * @ignore - internal component.
 */ 
/* harmony default export */ const ErrorOutline = ((0,createSvgIcon/* default */.A)(/*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
    d: "M11 15h2v2h-2zm0-8h2v6h-2zm.99-5C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"
}), 'ErrorOutline'));

;// ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/internal/svg-icons/InfoOutlined.js
/* __next_internal_client_entry_do_not_use__ default auto */ 

/**
 * @ignore - internal component.
 */ 
/* harmony default export */ const InfoOutlined = ((0,createSvgIcon/* default */.A)(/*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
    d: "M11,9H13V7H11M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20, 12C20,16.41 16.41,20 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10, 10 0 0,0 12,2M11,17H13V11H11V17Z"
}), 'InfoOutlined'));

;// ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/internal/svg-icons/Close.js
/* __next_internal_client_entry_do_not_use__ default auto */ 

/**
 * @ignore - internal component.
 *
 * Alias to `Clear`.
 */ 
/* harmony default export */ const Close = ((0,createSvgIcon/* default */.A)(/*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
    d: "M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"
}), 'Close'));

;// ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/Alert/Alert.js
/* __next_internal_client_entry_do_not_use__ default auto */ 



















const useUtilityClasses = (ownerState)=>{
    const { variant, color, severity, classes } = ownerState;
    const slots = {
        root: [
            'root',
            "color".concat((0,capitalize/* default */.A)(color || severity)),
            "".concat(variant).concat((0,capitalize/* default */.A)(color || severity)),
            "".concat(variant)
        ],
        icon: [
            'icon'
        ],
        message: [
            'message'
        ],
        action: [
            'action'
        ]
    };
    return (0,composeClasses/* default */.A)(slots, getAlertUtilityClass, classes);
};
const AlertRoot = (0,styled/* default */.Ay)(Paper/* default */.A, {
    name: 'MuiAlert',
    slot: 'Root',
    overridesResolver: (props, styles)=>{
        const { ownerState } = props;
        return [
            styles.root,
            styles[ownerState.variant],
            styles["".concat(ownerState.variant).concat((0,capitalize/* default */.A)(ownerState.color || ownerState.severity))]
        ];
    }
})((0,memoTheme/* default */.A)((param)=>{
    let { theme } = param;
    const getColor = theme.palette.mode === 'light' ? colorManipulator/* darken */.e$ : colorManipulator/* lighten */.a;
    const getBackgroundColor = theme.palette.mode === 'light' ? colorManipulator/* lighten */.a : colorManipulator/* darken */.e$;
    return {
        ...theme.typography.body2,
        backgroundColor: 'transparent',
        display: 'flex',
        padding: '6px 16px',
        variants: [
            ...Object.entries(theme.palette).filter((0,createSimplePaletteValueFilter/* default */.A)([
                'light'
            ])).map((param)=>{
                let [color] = param;
                return {
                    props: {
                        colorSeverity: color,
                        variant: 'standard'
                    },
                    style: {
                        color: theme.vars ? theme.vars.palette.Alert["".concat(color, "Color")] : getColor(theme.palette[color].light, 0.6),
                        backgroundColor: theme.vars ? theme.vars.palette.Alert["".concat(color, "StandardBg")] : getBackgroundColor(theme.palette[color].light, 0.9),
                        ["& .".concat(Alert_alertClasses.icon)]: theme.vars ? {
                            color: theme.vars.palette.Alert["".concat(color, "IconColor")]
                        } : {
                            color: theme.palette[color].main
                        }
                    }
                };
            }),
            ...Object.entries(theme.palette).filter((0,createSimplePaletteValueFilter/* default */.A)([
                'light'
            ])).map((param)=>{
                let [color] = param;
                return {
                    props: {
                        colorSeverity: color,
                        variant: 'outlined'
                    },
                    style: {
                        color: theme.vars ? theme.vars.palette.Alert["".concat(color, "Color")] : getColor(theme.palette[color].light, 0.6),
                        border: "1px solid ".concat((theme.vars || theme).palette[color].light),
                        ["& .".concat(Alert_alertClasses.icon)]: theme.vars ? {
                            color: theme.vars.palette.Alert["".concat(color, "IconColor")]
                        } : {
                            color: theme.palette[color].main
                        }
                    }
                };
            }),
            ...Object.entries(theme.palette).filter((0,createSimplePaletteValueFilter/* default */.A)([
                'dark'
            ])).map((param)=>{
                let [color] = param;
                return {
                    props: {
                        colorSeverity: color,
                        variant: 'filled'
                    },
                    style: {
                        fontWeight: theme.typography.fontWeightMedium,
                        ...theme.vars ? {
                            color: theme.vars.palette.Alert["".concat(color, "FilledColor")],
                            backgroundColor: theme.vars.palette.Alert["".concat(color, "FilledBg")]
                        } : {
                            backgroundColor: theme.palette.mode === 'dark' ? theme.palette[color].dark : theme.palette[color].main,
                            color: theme.palette.getContrastText(theme.palette[color].main)
                        }
                    }
                };
            })
        ]
    };
}));
const AlertIcon = (0,styled/* default */.Ay)('div', {
    name: 'MuiAlert',
    slot: 'Icon',
    overridesResolver: (props, styles)=>styles.icon
})({
    marginRight: 12,
    padding: '7px 0',
    display: 'flex',
    fontSize: 22,
    opacity: 0.9
});
const AlertMessage = (0,styled/* default */.Ay)('div', {
    name: 'MuiAlert',
    slot: 'Message',
    overridesResolver: (props, styles)=>styles.message
})({
    padding: '8px 0',
    minWidth: 0,
    overflow: 'auto'
});
const AlertAction = (0,styled/* default */.Ay)('div', {
    name: 'MuiAlert',
    slot: 'Action',
    overridesResolver: (props, styles)=>styles.action
})({
    display: 'flex',
    alignItems: 'flex-start',
    padding: '4px 0 0 16px',
    marginLeft: 'auto',
    marginRight: -8
});
const defaultIconMapping = {
    success: /*#__PURE__*/ (0,jsx_runtime.jsx)(SuccessOutlined, {
        fontSize: "inherit"
    }),
    warning: /*#__PURE__*/ (0,jsx_runtime.jsx)(ReportProblemOutlined, {
        fontSize: "inherit"
    }),
    error: /*#__PURE__*/ (0,jsx_runtime.jsx)(ErrorOutline, {
        fontSize: "inherit"
    }),
    info: /*#__PURE__*/ (0,jsx_runtime.jsx)(InfoOutlined, {
        fontSize: "inherit"
    })
};
const Alert = /*#__PURE__*/ react.forwardRef(function Alert(inProps, ref) {
    const props = (0,DefaultPropsProvider/* useDefaultProps */.b)({
        props: inProps,
        name: 'MuiAlert'
    });
    const { action, children, className, closeText = 'Close', color, components = {}, componentsProps = {}, icon, iconMapping = defaultIconMapping, onClose, role = 'alert', severity = 'success', slotProps = {}, slots = {}, variant = 'standard', ...other } = props;
    const ownerState = {
        ...props,
        color,
        severity,
        variant,
        colorSeverity: color || severity
    };
    const classes = useUtilityClasses(ownerState);
    const externalForwardedProps = {
        slots: {
            closeButton: components.CloseButton,
            closeIcon: components.CloseIcon,
            ...slots
        },
        slotProps: {
            ...componentsProps,
            ...slotProps
        }
    };
    const [RootSlot, rootSlotProps] = (0,useSlot/* default */.A)('root', {
        ref,
        shouldForwardComponentProp: true,
        className: (0,clsx/* default */.A)(classes.root, className),
        elementType: AlertRoot,
        externalForwardedProps: {
            ...externalForwardedProps,
            ...other
        },
        ownerState,
        additionalProps: {
            role,
            elevation: 0
        }
    });
    const [IconSlot, iconSlotProps] = (0,useSlot/* default */.A)('icon', {
        className: classes.icon,
        elementType: AlertIcon,
        externalForwardedProps,
        ownerState
    });
    const [MessageSlot, messageSlotProps] = (0,useSlot/* default */.A)('message', {
        className: classes.message,
        elementType: AlertMessage,
        externalForwardedProps,
        ownerState
    });
    const [ActionSlot, actionSlotProps] = (0,useSlot/* default */.A)('action', {
        className: classes.action,
        elementType: AlertAction,
        externalForwardedProps,
        ownerState
    });
    const [CloseButtonSlot, closeButtonProps] = (0,useSlot/* default */.A)('closeButton', {
        elementType: IconButton/* default */.A,
        externalForwardedProps,
        ownerState
    });
    const [CloseIconSlot, closeIconProps] = (0,useSlot/* default */.A)('closeIcon', {
        elementType: Close,
        externalForwardedProps,
        ownerState
    });
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(RootSlot, {
        ...rootSlotProps,
        children: [
            icon !== false ? /*#__PURE__*/ (0,jsx_runtime.jsx)(IconSlot, {
                ...iconSlotProps,
                children: icon || iconMapping[severity] || defaultIconMapping[severity]
            }) : null,
            /*#__PURE__*/ (0,jsx_runtime.jsx)(MessageSlot, {
                ...messageSlotProps,
                children: children
            }),
            action != null ? /*#__PURE__*/ (0,jsx_runtime.jsx)(ActionSlot, {
                ...actionSlotProps,
                children: action
            }) : null,
            action == null && onClose ? /*#__PURE__*/ (0,jsx_runtime.jsx)(ActionSlot, {
                ...actionSlotProps,
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(CloseButtonSlot, {
                    size: "small",
                    "aria-label": closeText,
                    title: closeText,
                    color: "inherit",
                    onClick: onClose,
                    ...closeButtonProps,
                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(CloseIconSlot, {
                        fontSize: "small",
                        ...closeIconProps
                    })
                })
            }) : null
        ]
    });
});
 false ? 0 : void 0;
/* harmony default export */ const Alert_Alert = (Alert);


/***/ }),

/***/ 99949:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   $W: () => (/* binding */ getWindowDismissEventType),
/* harmony export */   IL: () => (/* binding */ createDefaultWindowConf),
/* harmony export */   Sb: () => (/* binding */ createWindowConfCopy),
/* harmony export */   Wl: () => (/* binding */ createDefaultFloatWindowConf),
/* harmony export */   Ww: () => (/* binding */ FloatSidePattern),
/* harmony export */   YC: () => (/* binding */ FloatShowPattern),
/* harmony export */   ZI: () => (/* binding */ WindowType),
/* harmony export */   bH: () => (/* binding */ getWindowHideEventType),
/* harmony export */   n2: () => (/* binding */ getGravityOptions),
/* harmony export */   s: () => (/* binding */ getWindowOpenedEventType)
/* harmony export */ });
/* unused harmony exports Gravity, ContentType, getDefaulWindowConf, createDefaultWebViewJsParams, createDefaultWebViewConf, createDefaultGravityInfo, createDefaultBorderInfo, createDefaultMatchParentInfo, createDefaultHtmlConf, createDefaultFloatConf, createDefaultDialogWindowConf, createDefaultSysWindowConf */
/* harmony import */ var _barrel_optimize_names_ulid_ulid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(43899);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(80507);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);


var Gravity = /*#__PURE__*/ function(Gravity) {
    // 水平方向
    Gravity[Gravity["LEFT"] = 3] = "LEFT";
    Gravity[Gravity["RIGHT"] = 5] = "RIGHT";
    Gravity[Gravity["END"] = 8388613] = "END";
    Gravity[Gravity["START"] = 8388608] = "START";
    // 垂直方向
    Gravity[Gravity["TOP"] = 48] = "TOP";
    Gravity[Gravity["BOTTOM"] = 80] = "BOTTOM";
    // 组合方向
    Gravity[Gravity["CENTER"] = 17] = "CENTER";
    Gravity[Gravity["CENTER_HORIZONTAL"] = 1] = "CENTER_HORIZONTAL";
    Gravity[Gravity["CENTER_VERTICAL"] = 16] = "CENTER_VERTICAL";
    // 位置常量
    Gravity[Gravity["NO_GRAVITY"] = 0] = "NO_GRAVITY";
    return Gravity;
}({});
// ============ Gravity 映射 ============
/**
 * 获取所有可用的 Gravity 选项
 * 用于生成 Select 下拉框的选项
 * @param t 国际化翻译函数,用于获取 Gravity 的显示文本
 * @returns Gravity 选项数组,包含 value 和 label
 */ function getGravityOptions(t) {
    const gravityKeys = [
        3,
        5,
        8388608,
        8388613,
        48,
        80,
        17,
        1,
        16,
        0
    ];
    return gravityKeys.map((gravity)=>({
            value: gravity,
            label: t ? t("content.Gravity.".concat(Gravity[gravity])) : Gravity[gravity]
        }));
}
var FloatShowPattern = /*#__PURE__*/ function(FloatShowPattern) {
    // 仅在当前Activity显示
    FloatShowPattern["CURRENT_ACTIVITY"] = "CURRENT_ACTIVITY";
    // 一直显示
    FloatShowPattern["ALL_TIME"] = "ALL_TIME";
    // 仅前台显示
    FloatShowPattern["FOREGROUND"] = "FOREGROUND";
    return FloatShowPattern;
}({});
var FloatSidePattern = /*#__PURE__*/ function(FloatSidePattern) {
    // 默认不贴边，跟随手指移动
    FloatSidePattern["DEFAULT"] = "DEFAULT";
    // 左、右、上、下四个方向固定（一直吸附在该方向边缘，只能在该方向的边缘移动）
    FloatSidePattern["LEFT"] = "LEFT";
    FloatSidePattern["RIGHT"] = "RIGHT";
    FloatSidePattern["TOP"] = "TOP";
    FloatSidePattern["BOTTOM"] = "BOTTOM";
    // 根据手指到屏幕边缘的距离，自动选择水平方向的贴边、垂直方向的贴边、四方向的贴边
    FloatSidePattern["AUTO_HORIZONTAL"] = "AUTO_HORIZONTAL";
    FloatSidePattern["AUTO_VERTICAL"] = "AUTO_VERTICAL";
    FloatSidePattern["AUTO_SIDE"] = "AUTO_SIDE";
    // 拖拽时跟随手指移动，结束时贴边
    FloatSidePattern["RESULT_LEFT"] = "RESULT_LEFT";
    FloatSidePattern["RESULT_RIGHT"] = "RESULT_RIGHT";
    FloatSidePattern["RESULT_TOP"] = "RESULT_TOP";
    FloatSidePattern["RESULT_BOTTOM"] = "RESULT_BOTTOM";
    FloatSidePattern["RESULT_HORIZONTAL"] = "RESULT_HORIZONTAL";
    FloatSidePattern["RESULT_VERTICAL"] = "RESULT_VERTICAL";
    FloatSidePattern["RESULT_SIDE"] = "RESULT_SIDE";
    return FloatSidePattern;
}({});
// 内容类型枚举
var ContentType = /*#__PURE__*/ function(ContentType) {
    // 使用html
    ContentType["Html"] = "html";
    // 使用安卓的view。但是现在并没提供。
    ContentType["View"] = "view";
    return ContentType;
}({});
// 窗口类型枚举
var WindowType = /*#__PURE__*/ function(WindowType) {
    // 悬浮窗。像小工具、闹钟类的可以使用
    WindowType["Float"] = "float";
    // 系统。系统级别窗口
    WindowType["System"] = "system";
    // 弹窗。一般用于对话框
    WindowType["Dialog"] = "dialog";
    return WindowType;
}({});
function getDefaulWindowConf() {
    return JSON.parse(JSON.stringify(createDefaultWindowConf()));
}
function createWindowConfCopy(conf) {
    return lodash__WEBPACK_IMPORTED_MODULE_1___default().merge({}, createDefaultWindowConf(), conf);
}
// ============ createDefault 方法 ============
function createDefaultWebViewJsParams() {
    return {
        fitContentWidth: 0,
        fitContentHeight: 0,
        javaToJsDataString: ""
    };
}
function createDefaultWebViewConf() {
    return {
        backgroundColor: 0
    };
}
function createDefaultGravityInfo() {
    return {
        gravity: 8388608
    };
}
function createDefaultBorderInfo() {
    return {
        left: 0,
        top: 0,
        right: 0,
        bottom: 0
    };
}
function createDefaultMatchParentInfo() {
    return {
        widthMatch: false,
        heightMatch: false
    };
}
function createDefaultHtmlConf() {
    return {
        url: "",
        webViewJsParams: createDefaultWebViewJsParams(),
        webViewConf: createDefaultWebViewConf(),
        jsBridgeName: 'android',
        webViewJsName: 'AutoWebViewJs'
    };
}
function createDefaultFloatConf() {
    return {
        positionSaveName: '${positionSaveName}',
        draggable: true,
        showPattern: "ALL_TIME",
        hasEditText: true,
        sidePattern: "DEFAULT",
        gravity: createDefaultGravityInfo(),
        layoutChangedGravity: 8388608,
        border: createDefaultBorderInfo(),
        matchParent: createDefaultMatchParentInfo()
    };
}
function createDefaultFloatWindowConf() {
    return {
        floatConf: createDefaultFloatConf()
    };
}
function createDefaultDialogWindowConf() {
    return {
        viewLayoutParams: {},
        theme: ''
    };
}
function createDefaultSysWindowConf() {
    return {
        viewLayoutParams: {},
        listenBackKey: false
    };
}
function createDefaultWindowConf() {
    return {
        tag: '',
        contentType: "html",
        windowType: "float",
        htmlConf: createDefaultHtmlConf(),
        floatWindowConf: createDefaultFloatWindowConf(),
        windowId: (0,_barrel_optimize_names_ulid_ulid__WEBPACK_IMPORTED_MODULE_0__/* .ulid */ .Z0)(),
        forceDismissWindowTime: 0
    };
}
function getWindowDismissEventType(id) {
    return "window-".concat(id, "-dismiss");
}
function getWindowOpenedEventType(id) {
    return "window-".concat(id, "-opened");
}
function getWindowHideEventType(id) {
    return "window-".concat(id, "-hide");
}


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, [7772,472,402,5241,6940,1490,1322,5409,2314,5475,4706,1508,9910,636,6593,8792], () => (__webpack_exec__(57881)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ _N_E = __webpack_exports__;
/******/ }
]);
//# sourceMappingURL=float-window-add-fe48e0fd247ca764.js.map