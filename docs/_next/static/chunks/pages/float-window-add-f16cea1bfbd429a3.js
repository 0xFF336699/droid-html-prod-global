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
// EXTERNAL MODULE: ../../libs/app/ui/src/components/appbar/AppBar.tsx + 3 modules
var AppBar = __webpack_require__(82524);
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
  

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, [472,9669,4706,4522,9910,636,6593,8792], () => (__webpack_exec__(57881)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ _N_E = __webpack_exports__;
/******/ }
]);
//# sourceMappingURL=float-window-add-f16cea1bfbd429a3.js.map