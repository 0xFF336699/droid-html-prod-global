(self["webpackChunk_N_E"] = self["webpackChunk_N_E"] || []).push([[3408],{

/***/ 27602:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   O: () => (/* binding */ QuickCreateForm)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(94513);
/* harmony import */ var _droid_android__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(39800);
/* harmony import */ var _fanfanlo__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(50279);
/* harmony import */ var _fanfanlo__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(88518);
/* harmony import */ var _fanfanlo__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(45007);
/* harmony import */ var _barrel_optimize_names_Alert_Box_Button_Chip_Stack_TextField_Typography_mui_material__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(6445);
/* harmony import */ var _barrel_optimize_names_Alert_Box_Button_Chip_Stack_TextField_Typography_mui_material__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(67079);
/* harmony import */ var _barrel_optimize_names_Alert_Box_Button_Chip_Stack_TextField_Typography_mui_material__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(9220);
/* harmony import */ var _barrel_optimize_names_Alert_Box_Button_Chip_Stack_TextField_Typography_mui_material__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(38771);
/* harmony import */ var _barrel_optimize_names_Alert_Box_Button_Chip_Stack_TextField_Typography_mui_material__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(688);
/* harmony import */ var _barrel_optimize_names_Alert_Box_Button_Chip_Stack_TextField_Typography_mui_material__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(81482);
/* harmony import */ var _barrel_optimize_names_Alert_Box_Button_Chip_Stack_TextField_Typography_mui_material__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(28669);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(94285);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(75640);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(70011);







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
                                children: t('QuickCreateForm.cancel')
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_barrel_optimize_names_Alert_Box_Button_Chip_Stack_TextField_Typography_mui_material__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .A, {
                                direction: "row",
                                spacing: 2,
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_barrel_optimize_names_Alert_Box_Button_Chip_Stack_TextField_Typography_mui_material__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .A, {
                                        onClick: handleQuickCreate,
                                        variant: "contained",
                                        children: t('QuickCreateForm.quickCreate')
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_barrel_optimize_names_Alert_Box_Button_Chip_Stack_TextField_Typography_mui_material__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .A, {
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


/***/ }),

/***/ 37416:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   JT: () => (/* binding */ getTriggerOrActionListPageParams)
/* harmony export */ });
/* unused harmony exports ActionListFromEnum, TriggerOrActionListTypeEnum */
/* harmony import */ var _storage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(31232);

var ActionListFromEnum = /*#__PURE__*/ function(ActionListFromEnum) {
    ActionListFromEnum["project"] = "project";
    return ActionListFromEnum;
}({});
var TriggerOrActionListTypeEnum = /*#__PURE__*/ function(TriggerOrActionListTypeEnum) {
    TriggerOrActionListTypeEnum["addAction"] = "add";
    TriggerOrActionListTypeEnum["updateAction"] = "update";
    return TriggerOrActionListTypeEnum;
}({});
function getTriggerOrActionListPageParams(params) {
    const project = _storage__WEBPACK_IMPORTED_MODULE_0__/* .projectStore */ .D.findDraftOrSavedProject(params.projectId);
    const data = {};
    const res = {
        data,
        params
    };
    if (!project) return res;
    data.project = project;
    if (project.triggerActionGroup.id !== params.triggerActionGroupId) return res;
    data.triggerActionGroup = project.triggerActionGroup;
    if (!params.triggerActionId) return res;
    const triggerAction = data.triggerActionGroup.list.find((item)=>item.id === params.triggerActionId);
    if (!triggerAction) return res;
    data.triggerAction = triggerAction;
    parseAction(data, params, triggerAction);
    parseTrigger(data, params, triggerAction);
    return res;
}
function parseAction(data, params, triggerAction) {
    if (!params.actionGroupId || !triggerAction.actionGroup || params.actionGroupId != triggerAction.actionGroup.id) return;
    data.actionGroup = triggerAction.actionGroup;
    const action = triggerAction.actionGroup.list.find((item)=>item.id === params.actionId);
    if (!action) return;
    data.action = action;
}
function parseTrigger(data, params, triggerAction) {
    if (!params.triggerGroupId || !triggerAction.triggerGroup || params.triggerGroupId != triggerAction.triggerGroup.id) return;
    data.triggerGroup = triggerAction.triggerGroup;
    const trigger = triggerAction.triggerGroup.list.find((item)=>item.id === params.triggerId);
    if (!trigger) return;
    data.trigger = trigger;
}


/***/ }),

/***/ 46730:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  n: () => (/* binding */ actionShowFloatWindowUtils)
});

// EXTERNAL MODULE: ../../libs/droid/android/src/android/win/WindowConf.ts
var WindowConf = __webpack_require__(39800);
// EXTERNAL MODULE: __barrel_optimize__?names=ulid!=!../../node_modules/.pnpm/ulid@2.4.0/node_modules/ulid/dist/index.esm.js + 1 modules
var index_esm = __webpack_require__(67131);
// EXTERNAL MODULE: ../../libs/droid/project-interface/src/action/IAction.intf.ts
var IAction_intf = __webpack_require__(30624);
// EXTERNAL MODULE: ../../libs/droid/project/src/iproject/actions/actions-namespace.ts
var actions_namespace = __webpack_require__(80389);
;// ../../libs/droid/project/src/iproject/actions/float-window/float-window-namespace.ts

const floatWindowNamespace = "".concat(actions_namespace/* actionsNamespace */.j, "floatwindow/");

// EXTERNAL MODULE: ../../node_modules/.pnpm/react@19.1.0/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(94513);
// EXTERNAL MODULE: ../../libs/app/static/src/pages/trigger-list-action-list-common/common.ts
var common = __webpack_require__(24899);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/Button/Button.js + 3 modules
var Button = __webpack_require__(28669);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/Box/Box.js + 2 modules
var Box = __webpack_require__(6445);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/Grid2/Grid2.js + 4 modules
var Grid2 = __webpack_require__(95771);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/Typography/Typography.js
var Typography = __webpack_require__(67079);
// EXTERNAL MODULE: ../../node_modules/.pnpm/next@15.3.5_@babel+core@7.28.0_babel-plugin-macros@3.1.0_react-dom@19.1.0_react@19.1.0__react@19.1.0_sass@1.89.2/node_modules/next/router.js
var next_router = __webpack_require__(75640);
// EXTERNAL MODULE: ../../libs/fanfanlo/src/watcher/proxyWatch.ts
var proxyWatch = __webpack_require__(88518);
// EXTERNAL MODULE: ../../libs/droid/project-interface/src/utils/IChildToProject.intf.ts
var IChildToProject_intf = __webpack_require__(14209);
;// ../../libs/droid/project/src/iproject/actions/float-window/action-show-float-window/IActionShowFloatWindow.UI.tsx







function UpdateWindowConfLink(param) {
    let { data, children } = param;
    var _projectInfo_project, _projectInfo_triggerActionGroup, _projectInfo_triggerAction, _projectInfo_actionGroup, _projectInfo_project1, _projectInfo_triggerActionGroup1, _projectInfo_triggerAction1, _projectInfo_actionGroup1;
    console.log('[UpdateWindowConfLink] rendering, data:', data);
    const projectInfo = {};
    IChildToProject_intf/* childToProjectDataUtils */.mR.actionList.getActionListByProp(data, projectInfo);
    console.log('[UpdateWindowConfLink] projectInfo:', projectInfo);
    if (!((_projectInfo_project = projectInfo.project) === null || _projectInfo_project === void 0 ? void 0 : _projectInfo_project.id) || !((_projectInfo_triggerActionGroup = projectInfo.triggerActionGroup) === null || _projectInfo_triggerActionGroup === void 0 ? void 0 : _projectInfo_triggerActionGroup.id) || !((_projectInfo_triggerAction = projectInfo.triggerAction) === null || _projectInfo_triggerAction === void 0 ? void 0 : _projectInfo_triggerAction.id) || !((_projectInfo_actionGroup = projectInfo.actionGroup) === null || _projectInfo_actionGroup === void 0 ? void 0 : _projectInfo_actionGroup.id)) {
        console.error('[UpdateWindowConfLink] projectInfo is undefined', projectInfo);
        return null;
    }
    const router = (0,next_router.useRouter)();
    const backPath = router.pathname;
    console.log('[UpdateWindowConfLink] backPath:', backPath);
    const query = {
        backPath,
        projectId: (_projectInfo_project1 = projectInfo.project) === null || _projectInfo_project1 === void 0 ? void 0 : _projectInfo_project1.id,
        triggerActionGroupId: (_projectInfo_triggerActionGroup1 = projectInfo.triggerActionGroup) === null || _projectInfo_triggerActionGroup1 === void 0 ? void 0 : _projectInfo_triggerActionGroup1.id,
        triggerActionId: (_projectInfo_triggerAction1 = projectInfo.triggerAction) === null || _projectInfo_triggerAction1 === void 0 ? void 0 : _projectInfo_triggerAction1.id,
        actionGroupId: (_projectInfo_actionGroup1 = projectInfo.actionGroup) === null || _projectInfo_actionGroup1 === void 0 ? void 0 : _projectInfo_actionGroup1.id,
        type: common/* ActionOrTriggerListTypeEnum */.Q.updateAction,
        actionId: data.id,
        actionType: actionShowFloatWindowUtils.type
    };
    console.log('[UpdateWindowConfLink] query:', query);
    const param1 = new URLSearchParams([
        ...Object.entries(query)
    ]);
    const p = "/action-list/float-window-config?".concat(param1.toString());
    console.log('[UpdateWindowConfLink] path:', p);
    function onLinkClick() {
        console.log('[UpdateWindowConfLink] onClick, navigating to:', p);
        router.push(p);
    }
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(Button/* default */.A, {
        id: "show-float-window-action-change-conf-btn",
        "data-id": "show-float-window-action-change-conf-btn",
        onClick: onLinkClick,
        children: children
    });
}
function IActionShowFloatWindowUI(data) {
    console.log('[IActionShowFloatWindowUI] rendering, data:', data);
    const windowConf = data.javaData.windowConf;
    console.log('[IActionShowFloatWindowUI] windowConf:', windowConf);
    function getDisplayText() {
        var _windowConf_htmlConf;
        console.log('[IActionShowFloatWindowUI.getDisplayText] calculating display text');
        if (windowConf.description && windowConf.description.trim()) {
            console.log('[IActionShowFloatWindowUI.getDisplayText] using description:', windowConf.description);
            return windowConf.description;
        }
        if (((_windowConf_htmlConf = windowConf.htmlConf) === null || _windowConf_htmlConf === void 0 ? void 0 : _windowConf_htmlConf.url) && windowConf.htmlConf.url.trim()) {
            console.log('[IActionShowFloatWindowUI.getDisplayText] using url:', windowConf.htmlConf.url);
            return windowConf.htmlConf.url;
        }
        console.log('[IActionShowFloatWindowUI.getDisplayText] using windowId:', windowConf.windowId);
        return windowConf.windowId;
    }
    function onDeleteConfirmed() {
        console.log('[IActionShowFloatWindowUI] onDeleteConfirmed called for action id:', data.id);
        const projectData = {};
        IChildToProject_intf/* childToProjectDataUtils */.mR.actionList.getActionListByProp(data, projectData);
        console.log('[IActionShowFloatWindowUI] projectData:', projectData);
        const list = projectData.actionList;
        if (!list) {
            console.error('[IActionShowFloatWindowUI] actionList is undefined');
            throw new Error('actionList is undefined');
        }
        console.log('[IActionShowFloatWindowUI] current actionList length:', list.length);
        const index = list.findIndex((a)=>a.id === data.id);
        console.log('[IActionShowFloatWindowUI] action index:', index);
        if (index === -1) {
            console.error('[IActionShowFloatWindowUI] action not found in list');
            throw new Error('action not found');
        }
        (0,proxyWatch/* toProxy */.I$)(list).splice(index, 1);
        console.log('[IActionShowFloatWindowUI] action deleted, new list length:', list.length);
    }
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.A, {
        sx: {
            width: '100%'
        },
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.A, {
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)("b", {
                    children: "显示悬浮窗"
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)(Grid2/* default */.A, {
                container: true,
                sx: {
                    width: '100%'
                },
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Grid2/* default */.A, {
                        size: "grow",
                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.A, {
                            sx: {},
                            children: /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                style: {
                                    display: "inline-block",
                                    textIndent: "10px"
                                },
                                children: getDisplayText()
                            })
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Grid2/* default */.A, {
                        size: "auto",
                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(UpdateWindowConfLink, {
                            data: data,
                            children: /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                children: "配置"
                            })
                        })
                    })
                ]
            })
        ]
    });
}

;// ../../libs/droid/project/src/iproject/actions/float-window/action-show-float-window/IActionShowFloatWindow.inft.tsx





const type = "".concat(floatWindowNamespace, "showFloatWindow");
function createDefaultData() {
    console.log('[IActionShowFloatWindow] createDefaultData called');
    const data = {
        id: (0,index_esm/* ulid */.Z0)(),
        type,
        javaData: {
            windowConf: (0,WindowConf/* createDefaultWindowConf */.IL)()
        }
    };
    console.log('[IActionShowFloatWindow] createDefaultData result:', data);
    return data;
}
function init() {
    console.log('[IActionShowFloatWindow] init called');
}
const actionShowFloatWindowUtils = (0,IAction_intf/* createActionUtils */.A5)(type, init, createDefaultData, IActionShowFloatWindowUI);


/***/ }),

/***/ 57756:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ FloatWindowConfig)
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/react@19.1.0/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(94513);
// EXTERNAL MODULE: ../../libs/app/static/src/pages/trigger-list-action-list-common/common.ts
var common = __webpack_require__(24899);
// EXTERNAL MODULE: ../../libs/app/static/src/utils/router-utils.ts
var router_utils = __webpack_require__(62632);
// EXTERNAL MODULE: ../../libs/app/ui/src/components/app/AppShell.tsx + 2 modules
var AppShell = __webpack_require__(20939);
// EXTERNAL MODULE: ../../libs/app/ui/src/components/appbar/AppBar.tsx + 3 modules
var AppBar = __webpack_require__(97972);
// EXTERNAL MODULE: ../../libs/droid/project-interface/src/common/trigger-list-action-list-intf.ts
var trigger_list_action_list_intf = __webpack_require__(37416);
// EXTERNAL MODULE: ../../libs/droid/project-interface/src/events/projectEventUtils.ts
var projectEventUtils = __webpack_require__(6659);
// EXTERNAL MODULE: ../../libs/droid/project-interface/src/core/project-member-type.ts
var project_member_type = __webpack_require__(27880);
// EXTERNAL MODULE: ../../libs/droid/project/src/iproject/actions/float-window/action-show-float-window/IActionShowFloatWindow.inft.tsx + 2 modules
var IActionShowFloatWindow_inft = __webpack_require__(46730);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react-i18next@15.6.0_i18next@24.2.3_typescript@5.7.3__react-dom@19.1.0_react@19.1.0__react@19.1.0_typescript@5.7.3/node_modules/react-i18next/dist/es/index.js + 15 modules
var es = __webpack_require__(50279);
// EXTERNAL MODULE: ../../libs/fanfanlo/src/utils/throw-trace-error.ts
var throw_trace_error = __webpack_require__(94429);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react@19.1.0/node_modules/react/index.js
var react = __webpack_require__(94285);
// EXTERNAL MODULE: ../../libs/droid/android/src/android/win/WindowConf.ts
var WindowConf = __webpack_require__(39800);
// EXTERNAL MODULE: ./src/components/android-float/window/QuickCreateForm.tsx
var QuickCreateForm = __webpack_require__(27602);
// EXTERNAL MODULE: ./src/components/android-float/window/WindowConfEditor.tsx + 5 modules
var WindowConfEditor = __webpack_require__(70564);
;// ./src/components/android-float/window/ActionFloatWindowConfig.tsx





/**
 * ActionFloatWindowConfig - 用于 action-list 的悬浮窗配置组件
 *
 * 与 AddWindowContent 类似，但不直接操作 androidFloatWindowData
 * 而是通过回调函数返回配置
 */ function ActionFloatWindowConfig(param) {
    let { initialConf, onComplete, onCancel } = param;
    console.log('[ActionFloatWindowConfig] rendering, initialConf:', initialConf);
    // 模式状态: 'create' | 'edit'
    const [mode, setMode] = (0,react.useState)('quick');
    // 当前编辑的配置
    const [currentConf, setCurrentConf] = (0,react.useState)(initialConf || null);
    // 当 initialConf 改变时更新 currentConf
    (0,react.useEffect)(()=>{
        console.log('[ActionFloatWindowConfig] useEffect, initialConf changed:', initialConf);
        if (initialConf) {
            console.log('[ActionFloatWindowConfig] setting currentConf from initialConf');
            setCurrentConf(initialConf);
        }
    }, [
        initialConf
    ]);
    /**
     * 快速创建完成
     */ const handleQuickCreate = (conf)=>{
        console.log('[ActionFloatWindowConfig] handleQuickCreate, conf:', conf);
        onComplete(conf);
    };
    /**
     * 详细编辑 - 切换到详细编辑模式
     */ const handleDetailedEdit = (conf)=>{
        console.log('[ActionFloatWindowConfig] handleDetailedEdit, conf:', conf);
        // 使用 createWindowConfCopy 补齐所有默认属性
        const mergedConf = (0,WindowConf/* createWindowConfCopy */.Sb)(conf);
        console.log('[ActionFloatWindowConfig] merged conf:', mergedConf);
        setCurrentConf(mergedConf);
        // 切换到详细编辑模式
        setMode('detailed');
    };
    /**
     * 取消
     */ const handleCancel = ()=>{
        console.log('[ActionFloatWindowConfig] handleCancel');
        onCancel();
    };
    /**
     * 详细编辑确认
     */ const handleDetailedConfirm = (conf)=>{
        console.log('[ActionFloatWindowConfig] handleDetailedConfirm, conf:', conf);
        onComplete(conf);
    };
    // 渲染不同模式
    if (mode === 'detailed' && currentConf) {
        console.log('[ActionFloatWindowConfig] rendering detailed mode');
        return /*#__PURE__*/ (0,jsx_runtime.jsx)(WindowConfEditor/* WindowConfEditor */.S, {
            windowConf: currentConf,
            isCreateMode: true,
            hideForegroundText: true,
            hideTag: true,
            onConfirm: handleDetailedConfirm,
            onCancel: handleCancel
        });
    }
    console.log('[ActionFloatWindowConfig] rendering quick mode');
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(QuickCreateForm/* QuickCreateForm */.O, {
        initialConf: currentConf,
        onQuickCreate: handleQuickCreate,
        onDetailedEdit: handleDetailedEdit,
        onCancel: handleCancel,
        hideForegroundText: true,
        hideTag: true
    });
}

// EXTERNAL MODULE: ../../node_modules/.pnpm/next@15.3.5_@babel+core@7.28.0_babel-plugin-macros@3.1.0_react-dom@19.1.0_react@19.1.0__react@19.1.0_sass@1.89.2/node_modules/next/router.js
var next_router = __webpack_require__(75640);
;// ./src/pages/action-list/float-window-config/index.tsx









function FloatWindowConfig() {
    console.log('[FloatWindowConfig] component rendering');
    const { t } = (0,es/* useTranslation */.Bd)("homepage/pages/action-list/float-window-config/content");
    const router = (0,next_router.useRouter)();
    const nowPath = router.pathname;
    console.log('[FloatWindowConfig] nowPath:', nowPath);
    console.log('[FloatWindowConfig] router.query:', router.query);
    console.log('[FloatWindowConfig] router.isReady:', router.isReady);
    const [initialConf, setInitialConf] = (0,react.useState)(undefined);
    (0,react.useEffect)(()=>{
        console.log('[FloatWindowConfig] useEffect, isReady:', router.isReady);
        if (!router.isReady) {
            console.log('[FloatWindowConfig] router not ready yet, skipping');
            return;
        }
        console.log('[FloatWindowConfig] router ready, processing query:', router.query);
        const query = router.query;
        console.log('[FloatWindowConfig] query.type:', query.type);
        if (query.type === common/* ActionOrTriggerListTypeEnum */.Q.updateAction) {
            console.log('[FloatWindowConfig] update mode, loading existing config');
            const res = (0,trigger_list_action_list_intf/* getTriggerOrActionListPageParams */.JT)(query);
            console.log('[FloatWindowConfig] res:', res);
            console.log('[FloatWindowConfig] res.data:', res.data);
            if (res.data.action) {
                const action = res.data.action;
                console.log('[FloatWindowConfig] existing action:', action);
                console.log('[FloatWindowConfig] existing windowConf:', action.javaData.windowConf);
                setInitialConf(action.javaData.windowConf);
            } else {
                console.error('[FloatWindowConfig] action not found in res.data');
            }
        } else {
            console.log('[FloatWindowConfig] add mode, no initial config needed');
        }
    }, [
        router.isReady,
        router.query
    ]);
    function handleComplete(windowConf) {
        console.log('[FloatWindowConfig] handleComplete called with windowConf:', windowConf);
        const query = router.query;
        console.log('[FloatWindowConfig] query:', query);
        switch(query.type){
            case common/* ActionOrTriggerListTypeEnum */.Q.addAction:
                {
                    console.log('[FloatWindowConfig] addAction case');
                    const res = (0,trigger_list_action_list_intf/* getTriggerOrActionListPageParams */.JT)(query);
                    console.log('[FloatWindowConfig] res:', res);
                    if (!res.data.actionGroup) {
                        console.error('[FloatWindowConfig] actionGroup is undefined query=', query, 'windowConf=', windowConf);
                        throw new Error('actionGroup is undefined');
                    }
                    if (!query.actionType) {
                        return (0,throw_trace_error/* throwTraceError */.w)("actionType is undefined query=".concat(query), query, windowConf);
                    }
                    console.log('[FloatWindowConfig] creating action with actionType:', query.actionType);
                    const action = IActionShowFloatWindow_inft/* actionShowFloatWindowUtils */.n.createDefaultData();
                    action.javaData.windowConf = windowConf;
                    console.log('[FloatWindowConfig] created action:', action);
                    console.log('[FloatWindowConfig] dispatching add event');
                    projectEventUtils/* projectEventUtils */.T.dispatchEditEvent(projectEventUtils/* projectEventUtils */.T.EditType.add, {
                        projectMemberType: project_member_type/* ProjectMemberType */.K.actionGroup,
                        data: action,
                        projectInfo: res.data
                    });
                    console.log('[FloatWindowConfig] navigating back');
                    router_utils/* routerUtils */.V.checkToPath(router, nowPath, query.backPath, 2);
                    break;
                }
            case common/* ActionOrTriggerListTypeEnum */.Q.updateAction:
                {
                    console.log('[FloatWindowConfig] updateAction case');
                    const res = (0,trigger_list_action_list_intf/* getTriggerOrActionListPageParams */.JT)(query);
                    console.log('[FloatWindowConfig] res:', res);
                    if (!res.data.actionGroup) {
                        console.error('[FloatWindowConfig] actionGroup is undefined query=', query, 'windowConf=', windowConf);
                        throw new Error('actionGroup is undefined');
                    }
                    if (!res.data.action) {
                        console.error('[FloatWindowConfig] action is undefined query=', query, 'windowConf=', windowConf);
                        throw new Error('action is undefined');
                    }
                    console.log('[FloatWindowConfig] dispatching updateJavaData event');
                    projectEventUtils/* projectEventUtils */.T.dispatchEditEvent(projectEventUtils/* projectEventUtils */.T.EditType.updateJavaData, {
                        projectMemberType: project_member_type/* ProjectMemberType */.K.action,
                        data: {
                            windowConf
                        },
                        projectInfo: res.data
                    });
                    console.log('[FloatWindowConfig] navigating back');
                    router.back();
                    break;
                }
            default:
                console.error('[FloatWindowConfig] unknown query type:', query.type);
                throw new Error("unknown query type: ".concat(query.type));
        }
    }
    function handleCancel() {
        console.log('[FloatWindowConfig] handleCancel called');
        router.back();
    }
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(AppShell/* AppShell */.G, {
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(AppBar/* AppbarContainer */.W, {
            appbarProps: {
                title: t('content.title'),
                back: true
            },
            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(ActionFloatWindowConfig, {
                initialConf: initialConf,
                onComplete: handleComplete,
                onCancel: handleCancel
            })
        })
    });
}


/***/ }),

/***/ 62632:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   V: () => (/* binding */ routerUtils)
/* harmony export */ });
async function checkToPath(router, expectNowPath, pointPath, backCount) {
    const nowPath = router.pathname;
    console.log('nowpath=', nowPath);
    console.log('expectNowPath=', expectNowPath);
    console.log('pointPath=', pointPath);
    if (nowPath === pointPath) {
        return;
    }
    if (expectNowPath !== nowPath) {
        router.replace(pointPath);
    }
    while(backCount > 0){
        router.back();
        backCount--;
    }
    if (router.pathname !== pointPath && pointPath) {
        router.push(pointPath);
    }
}
const routerUtils = {
    checkToPath
};


/***/ }),

/***/ 63712:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {


    (window.__NEXT_P = window.__NEXT_P || []).push([
      "/action-list/float-window-config",
      function () {
        return __webpack_require__(57756);
      }
    ]);
    if(false) {}
  

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, [5299,9893,7840,564,636,6593,8792], () => (__webpack_exec__(63712)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ _N_E = __webpack_exports__;
/******/ }
]);
//# sourceMappingURL=float-window-config-5fb3b8e4c5be59c0.js.map