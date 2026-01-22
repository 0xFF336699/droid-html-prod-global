"use strict";
(self["webpackChunk_N_E"] = self["webpackChunk_N_E"] || []).push([[4245],{

/***/ 54245:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A11yNode: () => (/* reexport */ A11yNode),
  A11yNodePropertyInfo: () => (/* reexport */ A11yNodePropertyInfo),
  A11yNodePropertyType: () => (/* reexport */ A11yNodePropertyType),
  ActionType: () => (/* reexport */ ActionType),
  AppIcon30: () => (/* reexport */ AppIcon30),
  ISFCondfType: () => (/* reexport */ ISFCondfType),
  NodeActionKeys: () => (/* reexport */ NodeActionKeys),
  NodeActionUI: () => (/* reexport */ NodeActionUI),
  SFAction: () => (/* reexport */ SFAction),
  SFActionClick: () => (/* reexport */ SFActionClick),
  SFActionFocus: () => (/* reexport */ SFActionFocus),
  SFActionGlobalClick: () => (/* reexport */ SFActionGlobalClick),
  SFActionLearFocus: () => (/* reexport */ SFActionLearFocus),
  SFActionLongClick: () => (/* reexport */ SFActionLongClick),
  SFActionSetText: () => (/* reexport */ SFActionSetText),
  SFActionTryClick: () => (/* reexport */ SFActionTryClick),
  SFCond: () => (/* reexport */ SFCond),
  SFCondClickable: () => (/* reexport */ SFCondClickable),
  SFCondDesc: () => (/* reexport */ SFCondDesc),
  SFCondDescs: () => (/* reexport */ SFCondDescs),
  SFCondId: () => (/* reexport */ SFCondId),
  SFCondIds: () => (/* reexport */ SFCondIds),
  SFCondMatchText: () => (/* reexport */ SFCondMatchText),
  SFCondRoot: () => (/* reexport */ SFCondRoot),
  SFCondText: () => (/* reexport */ SFCondText),
  SFCondTexts: () => (/* reexport */ SFCondTexts),
  SFCondTypes: () => (/* reexport */ SFCondTypes),
  SFData: () => (/* reexport */ SFData),
  SFWait: () => (/* reexport */ SFWait),
  SelectorOperation: () => (/* reexport */ SelectorOperation),
  a11yActionNamespace: () => (/* reexport */ a11yActionNamespace),
  a11yNodeProperties: () => (/* reexport */ a11yNodeProperties),
  a11yNodeProperyEnum: () => (/* reexport */ a11yNodeProperyEnum),
  a11yNodeRealizedKeys: () => (/* reexport */ a11yNodeRealizedKeys),
  a11yTriggerNamespace: () => (/* reexport */ a11yTriggerNamespace),
  actionA11yNodeExecuteUtils: () => (/* reexport */ actionA11yNodeExecuteUtils),
  actionAccessibilityNodeReaderUtils: () => (/* reexport */ actionAccessibilityNodeReaderUtils),
  actionNodeActionType: () => (/* reexport */ actionNodeActionType),
  actionNodeActionUtils: () => (/* reexport */ actionNodeActionUtils),
  actionOpenAppUtils: () => (/* reexport */ actionOpenAppUtils),
  actionScriptUtils: () => (/* reexport */ actionScriptUtils),
  actionShowFloatWindowUtils: () => (/* reexport */ actionShowFloatWindowUtils),
  actionToAppMainPageUtils: () => (/* reexport */ actionToAppMainPageUtils),
  actionsNamespace: () => (/* reexport */ actionsNamespace),
  appActionNamespace: () => (/* reexport */ appActionNamespace),
  appTriggerNamespace: () => (/* reexport */ appTriggerNamespace),
  floatWindowActionNamespace: () => (/* reexport */ floatWindowActionNamespace),
  initActions: () => (/* reexport */ initActions),
  initProjectSystem: () => (/* reexport */ initProjectSystem),
  initTriggers: () => (/* reexport */ initTriggers),
  nodeActions: () => (/* reexport */ nodeActions),
  projectUtils: () => (/* reexport */ projectUtils),
  scriptActionAdvancedTemplate: () => (/* reexport */ scriptActionAdvancedTemplate),
  scriptActionFullTemplate: () => (/* reexport */ scriptActionFullTemplate),
  scriptActionNamespace: () => (/* reexport */ scriptActionNamespace),
  scriptActionSimpleTemplate: () => (/* reexport */ scriptActionSimpleTemplate),
  scriptTriggerAdvancedTemplate: () => (/* reexport */ scriptTriggerAdvancedTemplate),
  scriptTriggerFullTemplate: () => (/* reexport */ scriptTriggerFullTemplate),
  scriptTriggerNamespace: () => (/* reexport */ scriptTriggerNamespace),
  scriptTriggerSimpleTemplate: () => (/* reexport */ scriptTriggerSimpleTemplate),
  timeNamespace: () => (/* reexport */ timeNamespace),
  timeOutOpenAppTriggerActionUtils: () => (/* reexport */ timeOutOpenAppTriggerActionUtils),
  triggerActionsNamespace: () => (/* reexport */ triggerActionsNamespace),
  triggerNodeTriggerType: () => (/* reexport */ triggerNodeTriggerType),
  triggerNodeTriggerUtils: () => (/* reexport */ triggerNodeTriggerUtils),
  triggerScriptUtils: () => (/* reexport */ triggerScriptUtils),
  triggerTimeoutUtils: () => (/* reexport */ triggerTimeoutUtils),
  triggerWhenActivityInUtils: () => (/* reexport */ triggerWhenActivityInUtils),
  triggersNamespace: () => (/* reexport */ triggersNamespace)
});

// EXTERNAL MODULE: ../../libs/fanfanlo/src/log/Log.ts + 1 modules
var Log = __webpack_require__(89597);
// EXTERNAL MODULE: __barrel_optimize__?names=ulid!=!../../node_modules/.pnpm/ulid@2.4.0/node_modules/ulid/dist/index.esm.js + 1 modules
var index_esm = __webpack_require__(43899);
// EXTERNAL MODULE: ../../libs/droid/project-v2-interface/src/index.ts + 29 modules
var src = __webpack_require__(34456);
;// ../../libs/droid/project-v2-ext/src/triggers/time/time-namespace.ts
/**
 * Time 命名空间
 * 用于时间相关的 trigger 类型前缀
 */ const timeNamespace = 'fanfanlo/javajs/v1/project/components/triggers/time/';

// EXTERNAL MODULE: ../../node_modules/.pnpm/react@19.1.0/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(94513);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react-i18next@15.6.0_i18next@24.2.3_typescript@5.7.3__react-dom@19.1.0_react@19.1.0__react@19.1.0_typescript@5.7.3/node_modules/react-i18next/dist/es/index.js + 15 modules
var es = __webpack_require__(56137);
// EXTERNAL MODULE: ../../libs/fanfanlo/src/watcher/useProxyWatch.ts
var useProxyWatch = __webpack_require__(80502);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/Box/Box.js + 2 modules
var Box = __webpack_require__(92061);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/Grid2/Grid2.js + 4 modules
var Grid2 = __webpack_require__(29050);
;// ../../libs/droid/project-v2-ext/src/triggers/time/timeout/UI.tsx



function UI(data) {
    const { t } = (0,es/* useTranslation */.Bd)('droid-project-v2-ext/triggers/time/timeout/content');
    const [time] = (0,useProxyWatch/* useProxyWatch */.x)(data, 'javaData.time', data.javaData.time);
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(jsx_runtime.Fragment, {
        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.A, {
            sx: {
                width: '100%'
            },
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.A, {
                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)("b", {
                        children: t('UI.title')
                    })
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)(Grid2/* default */.A, {
                    container: true,
                    sx: {
                        width: '100%'
                    },
                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Grid2/* default */.A, {
                        size: "grow",
                        container: true,
                        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.A, {
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                    children: t('UI.content_delay')
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)("input", {
                                        id: "trigger-timeout-value-input",
                                        "data-id": "trigger-timeout-value-input",
                                        "data-testid": "TimeoutUI__timeInput__01JFXYZQ0G6H7I8J9K0L1M2N3",
                                        type: "number",
                                        value: time,
                                        onChange: (e)=>{
                                            data.javaData.time = Number(e.target.value);
                                        }
                                    })
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                    children: t('UI.content_milliseconds')
                                })
                            ]
                        })
                    })
                })
            ]
        })
    });
}

;// ../../libs/droid/project-v2-ext/src/triggers/time/timeout/ITriggerTimeout.inft.ts





const fileLog = new Log/* Log */.tG(false, "[ITriggerTimeout]");
fileLog.pause = true;
fileLog.childrenPaused = true;
const type = "".concat(timeNamespace, "timeout");
fileLog.log('[ITriggerTimeout] timeNamespace:', timeNamespace);
fileLog.log('[ITriggerTimeout] type:', type);
function createDefaultData() {
    fileLog.log('[ITriggerTimeout.createDefaultData] 创建默认数据, type:', type);
    const ulidValue = (0,index_esm/* ulid */.Z0)();
    const defaultData = {
        ulid: ulidValue,
        uuid: '',
        ownerUuid: '',
        currentVersion: 0,
        type,
        name: 'triggerTimeout',
        javaData: {
            time: 0
        },
        createdAt: 0,
        updatedAt: 0,
        authorUuid: ''
    };
    fileLog.log('[ITriggerTimeout.createDefaultData] defaultData:', JSON.stringify(defaultData));
    return defaultData;
}
function init() {
    fileLog.log('[ITriggerTimeout.init] 初始化');
}
const triggerTimeoutUtils = (0,src.createTriggerUtils)(type, init, createDefaultData, UI);

;// ../../libs/droid/project-v2-ext/src/triggers/app/app-namespace.ts
/**
 * App 命名空间
 * 用于应用相关的 trigger 类型前缀
 */ const appTriggerNamespace = 'fanfanlo/javajs/v1/project/components/triggers/app/';

// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/Stack/Stack.js + 1 modules
var Stack = __webpack_require__(39070);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/Button/Button.js + 3 modules
var Button = __webpack_require__(20872);
// EXTERNAL MODULE: ../../node_modules/.pnpm/next@15.3.5_@babel+core@7.28.0_@playwright+test@1.57.0_babel-plugin-macros@3.1.0_react-dom@19_gjfccjsd7b6xv5ktyj7vxamu6q/node_modules/next/router.js
var next_router = __webpack_require__(1674);
// EXTERNAL MODULE: ../../libs/app/static/src/pages/trigger-list-action-list-common/common.ts
var common = __webpack_require__(82964);
;// ../../libs/droid/project-v2-ext/src/triggers/app/when-activity-in/UI.tsx







function UI_UI(data) {
    const { t } = (0,es/* useTranslation */.Bd)('droid-project-v2-ext/triggers/app/when-activity-in/content');
    const router = (0,next_router.useRouter)();
    const backPath = router.pathname;
    const [pn] = (0,useProxyWatch/* useProxyWatch */.x)(data, "javaData.pn", data.javaData.pn);
    const [an] = (0,useProxyWatch/* useProxyWatch */.x)(data, "javaData.an", data.javaData.an);
    const [cn] = (0,useProxyWatch/* useProxyWatch */.x)(data, "javaData.cn", data.javaData.cn);
    function onChangeClick() {
        var _projectInfo_project, _projectInfo_triggerActionGroup, _projectInfo_triggerAction, _projectInfo_triggerGroup, _projectInfo_project1, _projectInfo_triggerActionGroup1, _projectInfo_triggerAction1, _projectInfo_triggerGroup1, _triggerWhenActivityInUtils_onClickChange;
        const projectInfo = {};
        src.childToProjectDataUtils.triggerList.getTriggerListByProp(data, projectInfo);
        // 修改：属性从 .id 改为 .ulid，URL参数名从 xxxId 改为 xxxUlid
        if (!((_projectInfo_project = projectInfo.project) === null || _projectInfo_project === void 0 ? void 0 : _projectInfo_project.ulid) || !((_projectInfo_triggerActionGroup = projectInfo.triggerActionGroup) === null || _projectInfo_triggerActionGroup === void 0 ? void 0 : _projectInfo_triggerActionGroup.ulid) || !((_projectInfo_triggerAction = projectInfo.triggerAction) === null || _projectInfo_triggerAction === void 0 ? void 0 : _projectInfo_triggerAction.ulid) || !((_projectInfo_triggerGroup = projectInfo.triggerGroup) === null || _projectInfo_triggerGroup === void 0 ? void 0 : _projectInfo_triggerGroup.ulid)) {
            console.error('UpdateAppLink projectInfo is undefined', projectInfo);
            return;
        }
        const query = {
            backPath,
            projectUlid: (_projectInfo_project1 = projectInfo.project) === null || _projectInfo_project1 === void 0 ? void 0 : _projectInfo_project1.ulid,
            triggerActionGroupUlid: (_projectInfo_triggerActionGroup1 = projectInfo.triggerActionGroup) === null || _projectInfo_triggerActionGroup1 === void 0 ? void 0 : _projectInfo_triggerActionGroup1.ulid,
            triggerActionUlid: (_projectInfo_triggerAction1 = projectInfo.triggerAction) === null || _projectInfo_triggerAction1 === void 0 ? void 0 : _projectInfo_triggerAction1.ulid,
            triggerGroupUlid: (_projectInfo_triggerGroup1 = projectInfo.triggerGroup) === null || _projectInfo_triggerGroup1 === void 0 ? void 0 : _projectInfo_triggerGroup1.ulid,
            type: common/* ActionOrTriggerListTypeEnum */.Q.updateAction,
            triggerUlid: data.ulid,
            triggerType: triggerWhenActivityInUtils.type
        };
        (_triggerWhenActivityInUtils_onClickChange = triggerWhenActivityInUtils.onClickChange) === null || _triggerWhenActivityInUtils_onClickChange === void 0 ? void 0 : _triggerWhenActivityInUtils_onClickChange.call(triggerWhenActivityInUtils, {
            query
        });
    }
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(jsx_runtime.Fragment, {
        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.A, {
            sx: {
                width: '100%'
            },
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.A, {
                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)("b", {
                        children: t('UI.title')
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
                            container: true,
                            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(Stack/* default */.A, {
                                direction: "column",
                                spacing: 2,
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.A, {
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                                children: t('UI.pnLabel')
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                                children: pn
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.A, {
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                                children: t('UI.anLabel')
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                                children: an
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.A, {
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                                children: t('UI.cnLabel')
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                                children: cn
                                            })
                                        ]
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(Grid2/* default */.A, {
                            size: "auto",
                            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Button/* default */.A, {
                                "data-testid": "WhenActivityInUI__changeButton__01JFXYZJ1Z5A6B7C8D9E0F1G2",
                                onClick: onChangeClick,
                                children: /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                    children: t('UI.changeBtnLabel')
                                })
                            })
                        })
                    ]
                })
            ]
        })
    });
}

;// ../../libs/droid/project-v2-ext/src/triggers/app/when-activity-in/ITriggerWhenActivityIn.ts





const ITriggerWhenActivityIn_fileLog = new Log/* Log */.tG(false, '[ITriggerWhenActivityIn]');
ITriggerWhenActivityIn_fileLog.pause = true;
ITriggerWhenActivityIn_fileLog.childrenPaused = true;
const ITriggerWhenActivityIn_type = "".concat(appTriggerNamespace, "when-activity-in");
ITriggerWhenActivityIn_fileLog.log('[ITriggerWhenActivityIn] type:', ITriggerWhenActivityIn_type);
function ITriggerWhenActivityIn_createDefaultData() {
    ITriggerWhenActivityIn_fileLog.log('[ITriggerWhenActivityIn.createDefaultData] 创建默认数据');
    const ulidValue = (0,index_esm/* ulid */.Z0)();
    const data = {
        ulid: ulidValue,
        uuid: '',
        ownerUuid: '',
        currentVersion: 0,
        type: ITriggerWhenActivityIn_type,
        javaData: {
            pn: "",
            an: "",
            cn: ""
        },
        createdAt: 0,
        updatedAt: 0,
        authorUuid: ''
    };
    ITriggerWhenActivityIn_fileLog.log('[ITriggerWhenActivityIn.createDefaultData] data:', JSON.stringify(data));
    return data;
}
function ITriggerWhenActivityIn_init() {
    ITriggerWhenActivityIn_fileLog.log('[ITriggerWhenActivityIn.init] 初始化');
}
const triggerWhenActivityInUtils = (0,src.createTriggerUtils)(ITriggerWhenActivityIn_type, ITriggerWhenActivityIn_init, ITriggerWhenActivityIn_createDefaultData, UI_UI);

;// ../../libs/droid/project-v2-ext/src/triggers/a11y/a11y-namespace.ts
/**
 * A11y 命名空间
 * 用于无障碍相关的 trigger 类型前缀
 */ const a11yTriggerNamespace = 'fanfanlo/javajs/v1/project/components/triggers/a11y/';

// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/Typography/Typography.js
var Typography = __webpack_require__(26512);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/Paper/Paper.js + 1 modules
var Paper = __webpack_require__(68732);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/Chip/Chip.js + 2 modules
var Chip = __webpack_require__(95409);
;// ../../libs/droid/project-v2-ext/src/triggers/a11y/node-trigger/UI.tsx




const UI_fileLog = new Log/* Log */.tG(false, 'NodeTriggerUI_f');
UI_fileLog.pause = true;
/**
 * NodeTrigger UI 组件
 * 显示包名、Activity名、类名和节点选择器链(只读)
 */ function node_trigger_UI_UI(data) {
    var _selectorChain_operations, _selectorChain_operations1;
    const { t } = (0,es/* useTranslation */.Bd)('droid/project-v2-ext/triggers/a11y/node-trigger/content');
    UI_fileLog.log('UI rendered, data =', data);
    const [pn] = (0,useProxyWatch/* useProxyWatch */.x)(data, "javaData.pn", data.javaData.pn);
    const [an] = (0,useProxyWatch/* useProxyWatch */.x)(data, "javaData.an", data.javaData.an);
    const [cn] = (0,useProxyWatch/* useProxyWatch */.x)(data, "javaData.cn", data.javaData.cn);
    const [selectorChain] = (0,useProxyWatch/* useProxyWatch */.x)(data, "javaData.selectorChain", data.javaData.selectorChain);
    UI_fileLog.log('pn =', pn);
    UI_fileLog.log('an =', an);
    UI_fileLog.log('cn =', cn);
    UI_fileLog.log('selectorChain operations count =', (selectorChain === null || selectorChain === void 0 ? void 0 : (_selectorChain_operations = selectorChain.operations) === null || _selectorChain_operations === void 0 ? void 0 : _selectorChain_operations.length) || 0);
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.A, {
        sx: {
            width: '100%'
        },
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.A, {
                sx: {
                    mb: 2
                },
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.A, {
                    variant: "h6",
                    component: "b",
                    children: t('UI.title')
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)(Stack/* default */.A, {
                direction: "column",
                spacing: 2,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.A, {
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.A, {
                                variant: "body2",
                                color: "text.secondary",
                                children: t('UI.packageName')
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.A, {
                                variant: "body1",
                                children: pn || t('UI.notSet')
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.A, {
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.A, {
                                variant: "body2",
                                color: "text.secondary",
                                children: t('UI.activityName')
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.A, {
                                variant: "body1",
                                children: an || t('UI.notSet')
                            })
                        ]
                    }),
                    cn && /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.A, {
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.A, {
                                variant: "body2",
                                color: "text.secondary",
                                children: t('UI.className')
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.A, {
                                variant: "body1",
                                children: cn
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.A, {
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.A, {
                                variant: "body2",
                                color: "text.secondary",
                                sx: {
                                    mb: 1
                                },
                                children: t('UI.selectorOperations', {
                                    count: (selectorChain === null || selectorChain === void 0 ? void 0 : (_selectorChain_operations1 = selectorChain.operations) === null || _selectorChain_operations1 === void 0 ? void 0 : _selectorChain_operations1.length) || 0
                                })
                            }),
                            selectorChain && selectorChain.operations && selectorChain.operations.length > 0 ? /*#__PURE__*/ (0,jsx_runtime.jsx)(Stack/* default */.A, {
                                direction: "column",
                                spacing: 1,
                                children: selectorChain.operations.map((operation, index)=>/*#__PURE__*/ (0,jsx_runtime.jsx)(OperationItem, {
                                        operation: operation,
                                        index: index
                                    }, index))
                            }) : /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.A, {
                                variant: "body2",
                                color: "text.disabled",
                                children: t('UI.noOperations')
                            })
                        ]
                    })
                ]
            })
        ]
    });
}
/**
 * 单个选择器操作的显示组件
 */ function OperationItem(param) {
    let { operation, index } = param;
    const { t } = (0,es/* useTranslation */.Bd)('droid/project-v2-ext/triggers/a11y/node-trigger/content');
    UI_fileLog.log("OperationItem ".concat(index, " rendered, operation ="), operation);
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(Paper/* default */.A, {
        variant: "outlined",
        sx: {
            p: 2
        },
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.A, {
                variant: "body2",
                color: "text.secondary",
                sx: {
                    mb: 1
                },
                children: t('UI.operationIndex', {
                    index: index + 1
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)(Stack/* default */.A, {
                direction: "row",
                spacing: 1,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Chip/* default */.A, {
                        label: t('UI.method', {
                            method: operation.method
                        }),
                        size: "small",
                        color: "primary"
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Chip/* default */.A, {
                        label: t('UI.value', {
                            value: JSON.stringify(operation.value)
                        }),
                        size: "small"
                    })
                ]
            })
        ]
    });
}

// EXTERNAL MODULE: ../../libs/droid/android/src/android/components/Manifest.ts
var Manifest = __webpack_require__(34100);
// EXTERNAL MODULE: ../../libs/app/static/src/project/RhinoInjectKeys.ts
var RhinoInjectKeys = __webpack_require__(92289);
;// ../../libs/droid/project-v2-ext/src/triggers/a11y/node-trigger/ITriggerNodeTrigger.ts







const ITriggerNodeTrigger_fileLog = new Log/* Log */.tG(false, '[ITriggerNodeTrigger]');
ITriggerNodeTrigger_fileLog.pause = true;
ITriggerNodeTrigger_fileLog.childrenPaused = true;
const triggerNodeTriggerType = "".concat(a11yTriggerNamespace, "node-trigger");
const ITriggerNodeTrigger_type = triggerNodeTriggerType;
ITriggerNodeTrigger_fileLog.log('[ITriggerNodeTrigger] type:', ITriggerNodeTrigger_type);
/**
 * 创建默认的 NodeTrigger 数据
 */ function ITriggerNodeTrigger_createDefaultData() {
    ITriggerNodeTrigger_fileLog.log('[ITriggerNodeTrigger.createDefaultData] 开始创建默认数据');
    const ulidValue = (0,index_esm/* ulid */.Z0)();
    ITriggerNodeTrigger_fileLog.log('[ITriggerNodeTrigger.createDefaultData] 生成ulid:', ulidValue);
    const permissions = [
        {
            name: '辅助功能权限',
            value: Manifest/* ManifestPermission */.Ls.BIND_ACCESSIBILITY_SERVICE,
            reason: '需要辅助功能来监听应用切换和查找节点'
        }
    ];
    ITriggerNodeTrigger_fileLog.log('[ITriggerNodeTrigger.createDefaultData] 权限数量:', permissions.length);
    const injects = [
        [
            RhinoInjectKeys/* RhinoInjectNames */.gp.a11yModel,
            'a11yModel'
        ]
    ];
    ITriggerNodeTrigger_fileLog.log('[ITriggerNodeTrigger.createDefaultData] 注入配置数量:', injects.length);
    const defaultData = {
        ulid: ulidValue,
        uuid: '',
        ownerUuid: '',
        currentVersion: 0,
        type: ITriggerNodeTrigger_type,
        name: 'triggerNodeTrigger',
        permissions,
        injects,
        javaData: {
            pn: '',
            an: '',
            cn: '',
            selectorChain: {
                operations: []
            }
        },
        createdAt: 0,
        updatedAt: 0,
        authorUuid: ''
    };
    ITriggerNodeTrigger_fileLog.log('[ITriggerNodeTrigger.createDefaultData] defaultData:', JSON.stringify(defaultData));
    return defaultData;
}
/**
 * 初始化函数
 */ function ITriggerNodeTrigger_init() {
    ITriggerNodeTrigger_fileLog.log('[ITriggerNodeTrigger.init] 初始化');
}
/**
 * NodeTrigger 工具对象
 */ const triggerNodeTriggerUtils = (0,src.createTriggerUtils)(ITriggerNodeTrigger_type, ITriggerNodeTrigger_init, ITriggerNodeTrigger_createDefaultData, node_trigger_UI_UI);

;// ../../libs/droid/project-v2-ext/src/triggers/script/script-namespace.ts
/**
 * Script 命名空间
 * 用于脚本相关的 trigger 类型前缀
 */ const scriptTriggerNamespace = 'fanfanlo/javajs/v1/project/components/triggers/script/';

;// ../../libs/droid/project-v2-ext/src/triggers/script/scriptTemplates.ts
/**
 * 脚本触发器模板集合
 * 这些是用于展示给用户的示例代码，导出为字符串常量
 * 不作为可执行的代码文件
 */ const scriptTriggerSimpleTemplate = 'import { regTrigger } from "#/droid/java_js/fanfanlo/javajs/v1/project/store.java"\nimport { eventTypeExit, eventTypeComplete } from "#/droid/java_js/fanfanlo/javajs/v1/project/base/projectEventTypes.java"\n\nlet type = "fanfanlo/javajs/v1/project/components/triggers/script/simple"\n\nonLibReady(() => {\n  regTrigger(type, attach)\n}, "fanfanlo/javajs/v1/project/components/triggers/script/simple")\n\nfunction attach(that) {\n  let domain = {};\n  let logger = that.logger.subLogger(\'ScriptTrigger\')\n\n  function clean() {\n    a11yModel.removeDomain(that);\n    that.removeDomain(domain)\n  }\n\n  function onExitOrComplete(e) {\n    clean();\n  }\n\n  let superOnRun = that.onRun;\n  that.onRun = onRun.bind(that);\n\n  function onRun() {\n    superOnRun();\n    addListener();\n    check();\n  }\n\n  function addListener() {\n    that.dispatcher.listenDomain(eventTypeExit, domain, onExitOrComplete);\n    that.dispatcher.listenDomain(eventTypeComplete, domain, onExitOrComplete);\n  }\n\n  function onDataChange(event) {\n    logger.log("data changed", event)\n    check();\n  }\n\n  function check() {\n    logger.log("check start", that.isRunnable)\n\n    if (!that.isRunnable) {\n      clean();\n      return;\n    }\n\n    // 简单的脚本触发示例\n    // 当前台包名等于配置的包名时，触发条件成立\n    let packageName = a11yModel.lastFullScreenPackage;\n    logger.log("current package", packageName, "target package", that.data.packageName)\n\n    if (packageName === that.data.packageName) {\n      that.dispatchConditionsOn({packageName})\n    } else {\n      that.dispatchConditionsOff({packageName})\n    }\n  }\n}\n\nexport { type }';
const scriptTriggerAdvancedTemplate = 'import { regTrigger } from "#/droid/java_js/fanfanlo/javajs/v1/project/store.java"\nimport { eventTypeExit, eventTypeComplete } from "#/droid/java_js/fanfanlo/javajs/v1/project/base/projectEventTypes.java"\nimport { hideImeIfPackageOpened } from "#/droid/java_js/fanfanlo/javajs/v1/a11y/a11yUtils.java"\n\nlet type = "fanfanlo/javajs/v1/project/components/triggers/script/advanced"\n\nonLibReady(() => {\n  regTrigger(type, attach)\n}, "fanfanlo/javajs/v1/project/components/triggers/script/advanced")\n\nfunction attach(that) {\n  let domain = {};\n  let logger = that.logger.subLogger(\'ScriptTrigger\')\n  let isOn = false;\n\n  function clean() {\n    a11yModel.removeDomain(that);\n    that.removeDomain(domain)\n  }\n\n  function onExitOrComplete(e) {\n    logger.log("onExitOrComplete triggered")\n    clean();\n  }\n\n  let superOnRun = that.onRun;\n  that.onRun = onRun.bind(that);\n\n  function onRun() {\n    logger.log("onRun called")\n    superOnRun();\n    addListener();\n    check();\n  }\n\n  function addListener() {\n    logger.log("adding listeners")\n    that.dispatcher.listenDomain(eventTypeExit, domain, onExitOrComplete);\n    that.dispatcher.listenDomain(eventTypeComplete, domain, onExitOrComplete);\n    a11yModel.listenDomainData(\n      com.fanfanlo.droidlib.auto.service.accessibility.A11yModel.Companion.eventLastPackageChanged,\n      domain,\n      onPackageChange\n    );\n  }\n\n  function onPackageChange(event) {\n    logger.log("package changed", event)\n    check();\n  }\n\n  function check() {\n    logger.log("check start, isRunnable:", that.isRunnable)\n\n    if (!that.isRunnable) {\n      logger.log("script not runnable, cleaning up")\n      clean();\n      return;\n    }\n\n    // 高级脚本示例：包含状态管理和多条件判断\n    let packageName = a11yModel.lastFullScreenPackage;\n    let targetPackage = that.data.packageName;\n    let hideIme = that.data.hideIme;\n\n    logger.log("current package:", packageName)\n    logger.log("target package:", targetPackage)\n    logger.log("hideIme:", hideIme)\n\n    // 检查是否需要隐藏输入法\n    if (hideIme && hideImeIfPackageOpened(targetPackage)) {\n      logger.log("ime is shown for target package, skipping")\n      return;\n    }\n\n    // 状态转换管理\n    let shouldBeOn = packageName === targetPackage;\n\n    if (shouldBeOn && !isOn) {\n      logger.log("transition to ON state")\n      isOn = true;\n      that.dispatchConditionsOn({packageName})\n    } else if (!shouldBeOn && isOn) {\n      logger.log("transition to OFF state")\n      isOn = false;\n      that.dispatchConditionsOff({packageName})\n    }\n  }\n\n  let superOnExit = that.onExit;\n  that.onExit = onExit.bind(that);\n\n  function onExit() {\n    logger.log("onExit called")\n    superOnExit();\n    a11yModel.removeDomain(that);\n  }\n}';
const scriptTriggerFullTemplate = scriptTriggerAdvancedTemplate;

// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/FormControl/FormControl.js + 1 modules
var FormControl = __webpack_require__(60247);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/InputLabel/InputLabel.js + 1 modules
var InputLabel = __webpack_require__(79804);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/Select/Select.js + 11 modules
var Select = __webpack_require__(38011);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/MenuItem/MenuItem.js + 2 modules
var MenuItem = __webpack_require__(89170);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/TextField/TextField.js + 1 modules
var TextField = __webpack_require__(32314);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react@19.1.0/node_modules/react/index.js
var react = __webpack_require__(94285);
;// ../../libs/droid/project-v2-ext/src/triggers/script/script-trigger/UI.tsx





/**
 * TriggerScript UI 组件
 * 脚本触发器编辑器
 */ function script_trigger_UI_UI(data) {
    const { t } = (0,es/* useTranslation */.Bd)('droid-project-v2-ext/triggers/script/script-trigger/content');
    const [mode, setMode] = (0,react.useState)('simple');
    const [code, setCode] = (0,react.useState)(data.javaData.script || scriptTriggerSimpleTemplate);
    function handleModeChange(newMode) {
        setMode(newMode);
        let template = scriptTriggerSimpleTemplate;
        if (newMode === 'advanced') {
            template = scriptTriggerAdvancedTemplate;
        } else if (newMode === 'full') {
            template = scriptTriggerFullTemplate;
        }
        setCode(template);
        data.javaData.script = template;
    }
    function handleCodeChange(newCode) {
        setCode(newCode);
        data.javaData.script = newCode;
    }
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.A, {
        sx: {
            width: '100%'
        },
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.A, {
                sx: {
                    mb: 2
                },
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.A, {
                    variant: "h6",
                    component: "b",
                    children: t('UI.title')
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)(FormControl/* default */.A, {
                fullWidth: true,
                sx: {
                    mb: 2
                },
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(InputLabel/* default */.A, {
                        children: t('UI.scriptMode')
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)(Select/* default */.A, {
                        "data-testid": "ScriptTriggerUI__modeSelect__01JFXYZR1H7I8J9K0L1M2N3O4",
                        value: mode,
                        label: t('UI.scriptMode'),
                        onChange: (e)=>handleModeChange(e.target.value),
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(MenuItem/* default */.A, {
                                value: "simple",
                                children: t('UI.scriptMode_simple')
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(MenuItem/* default */.A, {
                                value: "advanced",
                                children: t('UI.scriptMode_advanced')
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(MenuItem/* default */.A, {
                                value: "full",
                                children: t('UI.scriptMode_full')
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)(Typography/* default */.A, {
                variant: "body2",
                color: "text.secondary",
                sx: {
                    mb: 2
                },
                children: [
                    mode === 'simple' && t('UI.modeDescription_simple'),
                    mode === 'advanced' && t('UI.modeDescription_advanced'),
                    mode === 'full' && t('UI.modeDescription_full')
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(TextField/* default */.A, {
                "data-testid": "ScriptTriggerUI__codeEditor__01JFXYZS2I8J9K0L1M2N3O4P5",
                fullWidth: true,
                multiline: true,
                rows: 12,
                label: t('UI.scriptCode'),
                value: code,
                onChange: (e)=>handleCodeChange(e.target.value),
                placeholder: t('UI.scriptPlaceholder'),
                sx: {
                    fontFamily: 'monospace'
                }
            })
        ]
    });
}

;// ../../libs/droid/project-v2-ext/src/triggers/script/script-trigger/ITriggerScript.inft.ts





const ITriggerScript_inft_fileLog = new Log/* Log */.tG(false, '[ITriggerScript]');
ITriggerScript_inft_fileLog.pause = true;
ITriggerScript_inft_fileLog.childrenPaused = true;
const ITriggerScript_inft_type = "".concat(scriptTriggerNamespace, "script");
ITriggerScript_inft_fileLog.log('[ITriggerScript] type:', ITriggerScript_inft_type);
function ITriggerScript_inft_createDefaultData() {
    ITriggerScript_inft_fileLog.log('[ITriggerScript.createDefaultData] 开始创建默认数据');
    const ulidValue = (0,index_esm/* ulid */.Z0)();
    ITriggerScript_inft_fileLog.log('[ITriggerScript.createDefaultData] 生成ulid:', ulidValue);
    const defaultData = {
        ulid: ulidValue,
        uuid: '',
        ownerUuid: '',
        currentVersion: 0,
        type: ITriggerScript_inft_type,
        name: 'triggerScript',
        javaData: {
            script: '',
            scriptMode: 'simple'
        },
        createdAt: 0,
        updatedAt: 0,
        authorUuid: ''
    };
    ITriggerScript_inft_fileLog.log('[ITriggerScript.createDefaultData] defaultData:', JSON.stringify(defaultData));
    return defaultData;
}
function ITriggerScript_inft_init() {
    ITriggerScript_inft_fileLog.log('[ITriggerScript.init] 初始化');
}
const triggerScriptUtils = (0,src.createTriggerUtils)(ITriggerScript_inft_type, ITriggerScript_inft_init, ITriggerScript_inft_createDefaultData, script_trigger_UI_UI);

;// ../../libs/droid/project-v2-ext/src/init/initTriggers.ts





const initTriggers_fileLog = new Log/* Log */.tG(false, 'initTriggers_f');
initTriggers_fileLog.pause = true;
initTriggers_fileLog.childrenPaused = true;
/**
 * 初始化所有 Triggers
 * 调用各个 triggerUtils.init() 完成注册
 */ function initTriggers() {
    triggerTimeoutUtils.init();
    triggerWhenActivityInUtils.init();
    triggerNodeTriggerUtils.init();
    triggerScriptUtils.init();
    initTriggers_fileLog.log('[initTriggers] 所有 trigger types 初始化完成');
}

;// ../../libs/droid/project-v2-ext/src/actions/app/app-namespace.ts
/**
 * App Action 命名空间
 */ const appActionNamespace = 'fanfanlo/javajs/v1/project/components/actions/app/';

// EXTERNAL MODULE: ../../libs/app/static/src/storage/app-packages-store-v2.ts
var app_packages_store_v2 = __webpack_require__(94820);
// EXTERNAL MODULE: ../../libs/fanfanlo/src/watcher/proxyWatch.ts
var proxyWatch = __webpack_require__(57641);
;// ../../libs/droid/project-v2-ext/src/components/AppIcon30.tsx



const AppIcon30_fileLog = new Log/* Log */.tG(false, 'AppIcon30');
// fileLog.pause = true;
// fileLog.childrenPaused = true;
function AppIcon30(param) {
    let { packageName } = param;
    const uiLog = AppIcon30_fileLog.sub(false, 'AppIcon30_ui');
    // uiLog.pause = true;
    // uiLog.childrenPaused = true;
    const packageInfo = app_packages_store_v2/* appPackagesStoreV2 */.U.findPackageInfoByPackageName(packageName);
    let image = '';
    if (packageInfo && packageInfo.iconBase64) {
        image = 'data:image/gif;base64,' + packageInfo.iconBase64;
    } else {
        uiLog.log('no packageInfo or iconBase64, packageName=' + packageName);
    }
    return /*#__PURE__*/ (0,jsx_runtime.jsx)("img", {
        src: image,
        width: 30,
        style: {
            borderRadius: '8px'
        }
    });
}

;// ../../libs/droid/project-v2-ext/src/components/index.ts


;// ../../libs/droid/project-v2-ext/src/actions/app/action-open-app/IActionOpenApp.UI.tsx











function UpdateAppLink(param) {
    let { data, children } = param;
    // 使用 useContext 获取所需的数据
    const project = (0,react.useContext)(src.ProjectContext);
    const triggerActionGroup = (0,react.useContext)(src.TriggerActionGroupContext);
    const triggerAction = (0,react.useContext)(src.TriggerActionContext);
    const actionGroup = (0,react.useContext)(src.ActionGroupContext);
    // 检查必需的数据是否存在
    if (!(project === null || project === void 0 ? void 0 : project.ulid) || !(triggerActionGroup === null || triggerActionGroup === void 0 ? void 0 : triggerActionGroup.ulid) || !(triggerAction === null || triggerAction === void 0 ? void 0 : triggerAction.ulid) || !(actionGroup === null || actionGroup === void 0 ? void 0 : actionGroup.ulid)) {
        console.error('UpdateAppLink: Required context data is undefined', {
            project: project === null || project === void 0 ? void 0 : project.ulid,
            triggerActionGroup: triggerActionGroup === null || triggerActionGroup === void 0 ? void 0 : triggerActionGroup.ulid,
            triggerAction: triggerAction === null || triggerAction === void 0 ? void 0 : triggerAction.ulid,
            actionGroup: actionGroup === null || actionGroup === void 0 ? void 0 : actionGroup.ulid
        });
        return null;
    }
    const router = (0,next_router.useRouter)();
    const backPath = router.pathname;
    const query = {
        backPath,
        projectUlid: project.ulid,
        triggerActionGroupUlid: triggerActionGroup.ulid,
        triggerActionUlid: triggerAction.ulid,
        actionGroupUlid: actionGroup.ulid,
        type: common/* ActionOrTriggerListTypeEnum */.Q.updateAction,
        actionUlid: data.ulid,
        actionType: actionOpenAppUtils.type
    };
    const param1 = new URLSearchParams([
        ...Object.entries(query)
    ]);
    const p = "/action-list/app-selector?".concat(param1.toString());
    (0,react.useEffect)(()=>{
        router.prefetch(p);
    }, []);
    function onLinkClick() {
        router.push(p);
    }
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(Button/* default */.A, {
        id: "open-app-action-change-app-btn",
        "data-id": "open-app-action-change-app-btn",
        "data-testid": "OpenAppActionUI__changeButton__01JFXYZI0Y4Z5A6B7C8D9E0F1",
        onClick: onLinkClick,
        children: children
    });
}
function IActionOpenAppUI(data) {
    const { t } = (0,es/* useTranslation */.Bd)('droid/project-v2-ext/actions/app/action-open-app/content');
    const packageInfo = app_packages_store_v2/* appPackagesStoreV2 */.U.findPackageInfoByPackageName(data.javaData.packageName);
    function onDeleteComfirmed() {
        const projectData = {};
        src.childToProjectDataUtils.actionList.getActionListByProp(data, projectData);
        const list = projectData.actionList;
        if (!list) {
            throw new Error('actionList is undefined');
        }
        const index = list.findIndex((a)=>a.ulid === data.ulid);
        if (index === -1) {
            throw new Error('action not found');
        }
        (0,proxyWatch/* toProxy */.I$)(list).splice(index, 1);
    }
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.A, {
        sx: {
            width: '100%'
        },
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.A, {
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)("b", {
                    children: t('IActionOpenApp.openApp')
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)(Grid2/* default */.A, {
                container: true,
                sx: {
                    width: '100%'
                },
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)(Grid2/* default */.A, {
                        size: "grow",
                        container: true,
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(Grid2/* default */.A, {
                                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(AppIcon30, {
                                    packageName: data.javaData.packageName
                                })
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(Grid2/* default */.A, {
                                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(Typography/* default */.A, {
                                    sx: {},
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                            style: {
                                                display: 'inline-block',
                                                textIndent: '10px'
                                            },
                                            children: packageInfo === null || packageInfo === void 0 ? void 0 : packageInfo.label
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                            style: {
                                                display: 'inline-block',
                                                textIndent: '10px',
                                                fontSize: '0.8rem'
                                            },
                                            children: packageInfo === null || packageInfo === void 0 ? void 0 : packageInfo.packageName
                                        })
                                    ]
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Grid2/* default */.A, {
                        size: 'auto',
                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(UpdateAppLink, {
                            data: data,
                            children: /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                children: t('IActionOpenApp.reselect')
                            })
                        })
                    })
                ]
            })
        ]
    });
}

// EXTERNAL MODULE: ../../libs/fanfanlo/src/i18n/i18n-value-loader.ts
var i18n_value_loader = __webpack_require__(91628);
;// ../../libs/droid/project-v2-ext/src/actions/app/action-open-app/IActionOpenApp.inft.tsx







const IActionOpenApp_inft_fileLog = new Log/* Log */.tG(false, '[IActionOpenApp]');
IActionOpenApp_inft_fileLog.pause = true;
IActionOpenApp_inft_fileLog.childrenPaused = true;
const actionType = "".concat(appActionNamespace, "openApp");
IActionOpenApp_inft_fileLog.log('[IActionOpenApp] type:', actionType);
const i18nNamespace = 'droid-project-v2-ext/actions/app/action-open-app/content';
function IActionOpenApp_inft_createDefaultData() {
    IActionOpenApp_inft_fileLog.log('[createDefaultData] 开始创建默认数据');
    const ulidValue = (0,index_esm/* ulid */.Z0)();
    IActionOpenApp_inft_fileLog.log('[createDefaultData] 生成ulid:', ulidValue);
    const permissions = [
        {
            name: '辅助功能权限',
            value: Manifest/* ManifestPermission */.Ls.BIND_ACCESSIBILITY_SERVICE,
            reason: '需要辅助功能来检测应用是否已打开'
        },
        {
            name: '后台弹出窗口权限',
            value: Manifest/* ManifestChinesePhoneSpecialPermission */.lN.BACKGROUND_POPUP,
            reason: '需要后台弹出权限来在后台显示弹窗通知'
        }
    ];
    const permissionsMap = {
        [Manifest/* ManifestPermission */.Ls.BIND_ACCESSIBILITY_SERVICE]: {
            reasonI18nNs: i18nNamespace,
            reasonI18nKey: Manifest/* ManifestPermission */.Ls.BIND_ACCESSIBILITY_SERVICE
        },
        [Manifest/* ManifestChinesePhoneSpecialPermission */.lN.BACKGROUND_POPUP]: {
            reasonI18nNs: i18nNamespace,
            reasonI18nKey: Manifest/* ManifestChinesePhoneSpecialPermission */.lN.BACKGROUND_POPUP
        }
    };
    IActionOpenApp_inft_fileLog.log('[createDefaultData] 权限数量:', permissions.length);
    const injects = [
        [
            RhinoInjectKeys/* RhinoInjectNames */.gp.a11yModel,
            'a11yModel'
        ]
    ];
    IActionOpenApp_inft_fileLog.log('[createDefaultData] 注入配置数量:', injects.length);
    IActionOpenApp_inft_fileLog.log('[createDefaultData] permissionsMap=', JSON.stringify(permissionsMap));
    const defaultData = {
        ulid: ulidValue,
        uuid: '',
        ownerUuid: '',
        currentVersion: 0,
        type: actionType,
        name: 'actionOpenApp',
        permissions,
        injects,
        javaData: {
            packageName: ''
        },
        webConfig: {
            permissionsMap
        },
        createdAt: 0,
        updatedAt: 0,
        authorUuid: ''
    };
    IActionOpenApp_inft_fileLog.log('[createDefaultData] defaultData:', JSON.stringify(defaultData));
    return defaultData;
}
function IActionOpenApp_inft_init() {
    IActionOpenApp_inft_fileLog.log('[init] actionOpenApp 初始化');
}
// 添加异步加载国际化文本的函数
async function loadI18nTexts(data) {
    IActionOpenApp_inft_fileLog.log('[loadI18nTexts] 开始加载国际化文本');
    IActionOpenApp_inft_fileLog.log('[loadI18nTexts] data:', JSON.stringify(data));
    if (!data.permissions) {
        IActionOpenApp_inft_fileLog.log('[loadI18nTexts] data.permissions 为 undefined, 跳过加载');
        return;
    }
    if (data.permissions.length === 0) {
        IActionOpenApp_inft_fileLog.log('[loadI18nTexts] data.permissions 长度为 0, 跳过加载');
        return;
    }
    // 加载 IActionOpenApp 的国际化文本 (权限原因)
    IActionOpenApp_inft_fileLog.log('[loadI18nTexts] 加载 IActionOpenApp 国际化命名空间');
    const actionT = await (0,i18n_value_loader/* getI18nT */.r)('droid-project-v2-ext/actions/app/action-open-app/content');
    IActionOpenApp_inft_fileLog.log('[loadI18nTexts] IActionOpenApp 国际化加载完成');
    // 更新权限数据
    const permissionsLength = data.permissions.length;
    IActionOpenApp_inft_fileLog.log('[loadI18nTexts] 权限数量:', permissionsLength);
    for(let i = 0; i < permissionsLength; i++){
        const permission = data.permissions[i];
        IActionOpenApp_inft_fileLog.log('[loadI18nTexts] 处理权限索引:', i, 'value:', permission.value);
        const permissionI18n = data.webConfig.permissionsMap[permission.value];
        IActionOpenApp_inft_fileLog.log('[loadI18nTexts] permissionI18n=', JSON.stringify(permissionI18n));
        if (permissionI18n) {
            const ns = permissionI18n.reasonI18nNs;
            const key = permissionI18n.reasonI18nKey;
            IActionOpenApp_inft_fileLog.log('[loadI18nTexts] permission i18n ns key', ns, key);
            if (ns && key) {
                const fullKey = "IActionOpenApp.permission.".concat(key);
                const reason = await (0,i18n_value_loader/* loadI18nValue */.y)(ns, fullKey);
                if (reason != fullKey) {
                    permission.reason = reason;
                    IActionOpenApp_inft_fileLog.log('[loadI18nTexts] i18n找到了值', permission.reason);
                } else {
                    IActionOpenApp_inft_fileLog.log('[loadI18nTexts] i18n没有找到值，key=', fullKey);
                }
            }
        }
    }
    IActionOpenApp_inft_fileLog.log('[loadI18nTexts] 所有权限国际化文本加载完成');
}
const actionOpenAppUtils = (0,src.createActionUtils)(actionType, IActionOpenApp_inft_init, IActionOpenApp_inft_createDefaultData, IActionOpenAppUI);
// 添加 loadI18nTexts 方法
actionOpenAppUtils.loadI18nTexts = loadI18nTexts;

;// ../../libs/droid/project-v2-ext/src/actions/app/to-app-main-page/UI.tsx







function to_app_main_page_UI_UI(data) {
    const { t } = (0,es/* useTranslation */.Bd)("droid-project-v2-ext/actions/app/to-app-main-page/content");
    const router = (0,next_router.useRouter)();
    const backPath = router.pathname;
    const [pn] = (0,useProxyWatch/* useProxyWatch */.x)(data, "javaData.pn", data.javaData.pn);
    const [an] = (0,useProxyWatch/* useProxyWatch */.x)(data, "javaData.an", data.javaData.an);
    function onChangeClick() {
        var _projectInfo_project, _projectInfo_triggerActionGroup, _projectInfo_triggerAction, _projectInfo_actionGroup, _projectInfo_project1, _projectInfo_triggerActionGroup1, _projectInfo_triggerAction1, _projectInfo_actionGroup1, _actionToAppMainPageUtils_onClickChange;
        const projectInfo = {};
        src.childToProjectDataUtils.actionList.getActionListByProp(data, projectInfo);
        // 修改：属性从 .id 改为 .ulid，URL参数名从 xxxId 改为 xxxUlid
        if (!((_projectInfo_project = projectInfo.project) === null || _projectInfo_project === void 0 ? void 0 : _projectInfo_project.ulid) || !((_projectInfo_triggerActionGroup = projectInfo.triggerActionGroup) === null || _projectInfo_triggerActionGroup === void 0 ? void 0 : _projectInfo_triggerActionGroup.ulid) || !((_projectInfo_triggerAction = projectInfo.triggerAction) === null || _projectInfo_triggerAction === void 0 ? void 0 : _projectInfo_triggerAction.ulid) || !((_projectInfo_actionGroup = projectInfo.actionGroup) === null || _projectInfo_actionGroup === void 0 ? void 0 : _projectInfo_actionGroup.ulid)) {
            console.error('UpdateAppLink projectInfo is undefined', projectInfo);
            return;
        }
        const query = {
            backPath,
            projectUlid: (_projectInfo_project1 = projectInfo.project) === null || _projectInfo_project1 === void 0 ? void 0 : _projectInfo_project1.ulid,
            triggerActionGroupUlid: (_projectInfo_triggerActionGroup1 = projectInfo.triggerActionGroup) === null || _projectInfo_triggerActionGroup1 === void 0 ? void 0 : _projectInfo_triggerActionGroup1.ulid,
            triggerActionUlid: (_projectInfo_triggerAction1 = projectInfo.triggerAction) === null || _projectInfo_triggerAction1 === void 0 ? void 0 : _projectInfo_triggerAction1.ulid,
            actionGroupUlid: (_projectInfo_actionGroup1 = projectInfo.actionGroup) === null || _projectInfo_actionGroup1 === void 0 ? void 0 : _projectInfo_actionGroup1.ulid,
            type: common/* ActionOrTriggerListTypeEnum */.Q.updateAction,
            actionUlid: data.ulid,
            actionType: actionToAppMainPageUtils.type
        };
        (_actionToAppMainPageUtils_onClickChange = actionToAppMainPageUtils.onClickChange) === null || _actionToAppMainPageUtils_onClickChange === void 0 ? void 0 : _actionToAppMainPageUtils_onClickChange.call(actionToAppMainPageUtils, {
            query
        });
    }
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(jsx_runtime.Fragment, {
        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.A, {
            sx: {
                width: "100%"
            },
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.A, {
                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)("b", {
                        children: t("content.title")
                    })
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsxs)(Grid2/* default */.A, {
                    container: true,
                    sx: {
                        width: "100%"
                    },
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(Grid2/* default */.A, {
                            size: "grow",
                            container: true,
                            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(Stack/* default */.A, {
                                direction: "column",
                                spacing: 2,
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.A, {
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                                children: t("content.pnName")
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                                children: pn
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.A, {
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                                children: t("content.anName")
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                                children: an
                                            })
                                        ]
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(Grid2/* default */.A, {
                            size: "auto",
                            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Button/* default */.A, {
                                "data-testid": "ToAppMainPageUI__changeButton__01JFXYZF7V1W2X3Y4Z5A6B7C8",
                                onClick: onChangeClick,
                                children: /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                    children: t("content.changeBtnLabel")
                                })
                            })
                        })
                    ]
                })
            ]
        })
    });
}

;// ../../libs/droid/project-v2-ext/src/actions/app/to-app-main-page/IToAppMainPage.intf.ts





const IToAppMainPage_intf_fileLog = new Log/* Log */.tG(false, '[IToAppMainPage]');
IToAppMainPage_intf_fileLog.pause = true;
IToAppMainPage_intf_fileLog.childrenPaused = true;
const IToAppMainPage_intf_type = "".concat(appActionNamespace, "toAppMainPage");
IToAppMainPage_intf_fileLog.log('[IToAppMainPage] type:', IToAppMainPage_intf_type);
function IToAppMainPage_intf_createDefaultData() {
    IToAppMainPage_intf_fileLog.log('[createDefaultData] 开始创建默认数据');
    const ulidValue = (0,index_esm/* ulid */.Z0)();
    const data = {
        ulid: ulidValue,
        uuid: '',
        ownerUuid: '',
        currentVersion: 0,
        type: IToAppMainPage_intf_type,
        javaData: {
            pn: '',
            an: ''
        },
        createdAt: 0,
        updatedAt: 0,
        authorUuid: ''
    };
    IToAppMainPage_intf_fileLog.log('[createDefaultData] data:', JSON.stringify(data));
    return data;
}
function IToAppMainPage_intf_init() {
    IToAppMainPage_intf_fileLog.log('[init] toAppMainPage 初始化');
}
const actionToAppMainPageUtils = (0,src.createActionUtils)(IToAppMainPage_intf_type, IToAppMainPage_intf_init, IToAppMainPage_intf_createDefaultData, to_app_main_page_UI_UI);

;// ../../libs/droid/project-v2-ext/src/actions/a11y/a11y-namespace.ts
/**
 * A11y Action 命名空间
 */ const a11yActionNamespace = 'fanfanlo/javajs/v1/project/components/actions/a11y/';

// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/FormControlLabel/FormControlLabel.js + 1 modules
var FormControlLabel = __webpack_require__(21069);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/Switch/Switch.js + 1 modules
var Switch = __webpack_require__(48230);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/Checkbox/Checkbox.js + 4 modules
var Checkbox = __webpack_require__(22653);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/Accordion/Accordion.js + 1 modules
var Accordion = __webpack_require__(33658);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/AccordionSummary/AccordionSummary.js + 1 modules
var AccordionSummary = __webpack_require__(28801);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/AccordionDetails/AccordionDetails.js + 1 modules
var AccordionDetails = __webpack_require__(78496);
;// ../../libs/droid/project-v2-ext/src/actions/a11y/types/sfdata.ts
class SFCond {
}
class SFCondId extends SFCond {
    constructor(...args){
        super(...args), this.type = "com.fanfanlo.droidlib.auto.service.accessibility.krosxx.Id";
    }
}
class SFCondText extends SFCond {
    constructor(...args){
        super(...args), this.type = "com.fanfanlo.droidlib.auto.service.accessibility.krosxx.Text";
    }
}
class SFCondMatchText extends SFCond {
    constructor(...args){
        super(...args), this.type = "com.fanfanlo.droidlib.auto.service.accessibility.krosxx.MatchText";
    }
}
class SFCondDesc extends SFCond {
    constructor(...args){
        super(...args), this.type = "com.fanfanlo.droidlib.auto.service.accessibility.krosxx.Desc";
    }
}
class SFCondClickable extends SFCond {
    constructor(...args){
        super(...args), this.type = "com.fanfanlo.droidlib.auto.service.accessibility.krosxx.Clickable";
    }
}
class ISFCondfType extends SFCond {
    constructor(...args){
        super(...args), this.type = "com.fanfanlo.droidlib.auto.service.accessibility.krosxx.Type";
    }
}
class SFCondIds extends SFCond {
    constructor(...args){
        super(...args), this.type = "com.fanfanlo.droidlib.auto.service.accessibility.krosxx.Ids";
    }
}
class SFCondDescs extends SFCond {
    constructor(...args){
        super(...args), this.type = "com.fanfanlo.droidlib.auto.service.accessibility.krosxx.Descs";
    }
}
class SFCondTexts extends SFCond {
    constructor(...args){
        super(...args), this.type = "com.fanfanlo.droidlib.auto.service.accessibility.krosxx.Texts";
    }
}
class SFCondRoot extends SFCond {
    getData() {
        return JSON.parse(JSON.stringify(this));
    }
    getCondRoot() {
        return {
            type: "com.fanfanlo.droidlib.auto.service.accessibility.krosxx.SFRootCond",
            pn: this.pn,
            an: this.an,
            cn: this.cn
        };
    }
    constructor(...args){
        super(...args), this.type = "com.fanfanlo.droidlib.auto.service.accessibility.krosxx.SFRoot", // 此变量在设置了an时有效。当pn匹配而an不匹配时尝试点击返回键直至返回到首页为止。捎带的副作用就是必然会从首页开始执行下一步。
        // 在trigger中使用时可以先匹配pn，当pn匹配，an不匹配时判断这个变量，如果这个变量为true则执行后退，执行后等待下一个event，在event里再次判断执行。
        // true为尝试点击
        this.back = false;
    }
}
class SFCondTypes extends SFCond {
    constructor(...args){
        super(...args), this.type = "com.fanfanlo.droidlib.auto.service.accessibility.krosxx.SFTypes";
    }
}
class SFAction {
    get data() {
        return {
            type: this.type
        };
    }
}
class SFActionFocus extends SFAction {
    constructor(...args){
        super(...args), this.type = "com.fanfanlo.droidlib.auto.service.accessibility.krosxx.Focus";
    }
}
class SFActionLearFocus extends SFAction {
    constructor(...args){
        super(...args), this.type = "com.fanfanlo.droidlib.auto.service.accessibility.krosxx.ClearFocus";
    }
}
class SFActionClick extends SFAction {
    constructor(...args){
        super(...args), this.type = "com.fanfanlo.droidlib.auto.service.accessibility.krosxx.Click";
    }
}
class SFActionTryClick extends SFAction {
    constructor(...args){
        super(...args), this.type = "com.fanfanlo.droidlib.auto.service.accessibility.krosxx.TryClick";
    }
}
class SFActionLongClick extends SFAction {
    constructor(...args){
        super(...args), this.type = "com.fanfanlo.droidlib.auto.service.accessibility.krosxx.LongClick";
    }
}
class SFActionGlobalClick extends SFAction {
    constructor(...args){
        super(...args), this.type = "com.fanfanlo.droidlib.auto.service.accessibility.krosxx.GlobalClick";
    }
}
class SFActionSetText extends SFAction {
    get data() {
        console.log("ssssfffffffffff set text");
        return {
            type: this.type,
            value: this.value
        };
    }
    constructor(...args){
        super(...args), this.type = "com.fanfanlo.droidlib.auto.service.accessibility.krosxx.SetText";
    }
}
class SFWait {
    constructor(){
        this.type = "com.fanfanlo.droidlib.auto.service.accessibility.krosxx.SFWait";
        this.time = 0;
        this.interval = 0;
        this.invisible = false;
    }
}
class SFData {
    get data() {
        return JSON.parse(JSON.stringify(this));
    }
    constructor(){
        this.type = "com.fanfanlo.droidlib.auto.service.accessibility.krosxx.SFData";
    }
}

;// ../../libs/droid/project-v2-ext/src/actions/a11y/types/A11yNode.ts

var a11yNodeProperyEnum = /*#__PURE__*/ function(a11yNodeProperyEnum) {
    a11yNodeProperyEnum["viewIdResourceName"] = "viewIdResourceName";
    a11yNodeProperyEnum["contentDescription"] = "contentDescription";
    a11yNodeProperyEnum["hintText"] = "hintText";
    a11yNodeProperyEnum["text"] = "text";
    a11yNodeProperyEnum["className"] = "className";
    a11yNodeProperyEnum["availableExtraData"] = "availableExtraData";
    a11yNodeProperyEnum["boundsInScreen"] = "boundsInScreen";
    a11yNodeProperyEnum["children"] = "children";
    a11yNodeProperyEnum["isAccessibilityDataSensitive"] = "isAccessibilityDataSensitive";
    a11yNodeProperyEnum["isAccessibilityFocused"] = "isAccessibilityFocused";
    a11yNodeProperyEnum["isCheckable"] = "isCheckable";
    a11yNodeProperyEnum["isChecked"] = "isChecked";
    a11yNodeProperyEnum["isClickable"] = "isClickable";
    a11yNodeProperyEnum["isContentInvalid"] = "isContentInvalid";
    a11yNodeProperyEnum["isContextClickable"] = "isContextClickable";
    a11yNodeProperyEnum["isDismissable"] = "isDismissable";
    a11yNodeProperyEnum["isEditable"] = "isEditable";
    a11yNodeProperyEnum["isEnabled"] = "isEnabled";
    a11yNodeProperyEnum["isFocusable"] = "isFocusable";
    a11yNodeProperyEnum["isFocused"] = "isFocused";
    a11yNodeProperyEnum["isHeading"] = "isHeading";
    a11yNodeProperyEnum["isImportantForAccessibility"] = "isImportantForAccessibility";
    a11yNodeProperyEnum["isLongClickable"] = "isLongClickable";
    a11yNodeProperyEnum["isMultiLine"] = "isMultiLine";
    a11yNodeProperyEnum["isPassword"] = "isPassword";
    a11yNodeProperyEnum["isScreenReaderFocusable"] = "isScreenReaderFocusable";
    a11yNodeProperyEnum["isScrollable"] = "isScrollable";
    a11yNodeProperyEnum["isSelected"] = "isSelected";
    a11yNodeProperyEnum["isShowingHintText"] = "isShowingHintText";
    a11yNodeProperyEnum["isTextEntryKey"] = "isTextEntryKey";
    a11yNodeProperyEnum["isTextSelectable"] = "isTextSelectable";
    a11yNodeProperyEnum["isVisibleToUser"] = "isVisibleToUser";
    a11yNodeProperyEnum["index"] = "index";
    a11yNodeProperyEnum["listIndex"] = "listIndex";
    return a11yNodeProperyEnum;
}({});
// 需要转码的contentDescription、hintText、text 这三个字段进出都需要转码
class A11yNode {
    constructor(){
        this.isAccessibilityDataSensitive = false;
        this.isAccessibilityFocused = false;
        this.isCheckable = false;
        this.isChecked = false;
        this.isClickable = false;
        this.isContentInvalid = false;
        this.isContextClickable = false;
        this.isDismissable = false;
        this.isEditable = false;
        this.isEnabled = true;
        this.isFocusable = false;
        this.isFocused = false;
        this.isHeading = false;
        this.isImportantForAccessibility = false;
        this.isLongClickable = false;
        this.isMultiLine = false;
        this.isPassword = false;
        this.isScreenReaderFocusable = false;
        this.isScrollable = false;
        this.isSelected = false;
        this.isShowingHintText = false;
        this.isTextEntryKey = false;
        this.isTextSelectable = false;
        this.isVisibleToUser = true;
    }
}
var A11yNodePropertyType = /*#__PURE__*/ function(A11yNodePropertyType) {
    A11yNodePropertyType["bl"] = "bl";
    A11yNodePropertyType["text"] = "text";
    A11yNodePropertyType["num"] = "num";
    A11yNodePropertyType["arr"] = "arr";
    A11yNodePropertyType["rect"] = "rect";
    return A11yNodePropertyType;
}({});
class A11yNodePropertyInfo {
    constructor(name, type){
        this.name = name;
        this.type = type;
    }
}
const a11yNodeProperties = {
    viewIdResourceName: new A11yNodePropertyInfo("viewIdResourceName", "text"),
    text: new A11yNodePropertyInfo("text", "text"),
    contentDescription: new A11yNodePropertyInfo("contentDescription", "text"),
    isClickable: new A11yNodePropertyInfo("isClickable", "bl"),
    index: new A11yNodePropertyInfo("index", "num"),
    isAccessibilityDataSensitive: new A11yNodePropertyInfo("isAccessibilityDataSensitive", "bl"),
    isAccessibilityFocused: new A11yNodePropertyInfo("isAccessibilityFocused", "bl"),
    isCheckable: new A11yNodePropertyInfo("isCheckable", "bl"),
    isChecked: new A11yNodePropertyInfo("isChecked", "bl"),
    isContentInvalid: new A11yNodePropertyInfo("isContentInvalid", "bl"),
    isContextClickable: new A11yNodePropertyInfo("isContextClickable", "bl"),
    isDismissable: new A11yNodePropertyInfo("isDismissable", "bl"),
    isEditable: new A11yNodePropertyInfo("isEditable", "bl"),
    isEnabled: new A11yNodePropertyInfo("isEnabled", "bl"),
    isFocusable: new A11yNodePropertyInfo("isFocusable", "bl"),
    isFocused: new A11yNodePropertyInfo("isFocused", "bl"),
    isHeading: new A11yNodePropertyInfo("isHeading", "bl"),
    isImportantForAccessibility: new A11yNodePropertyInfo("isImportantForAccessibility", "bl"),
    isLongClickable: new A11yNodePropertyInfo("isLongClickable", "bl"),
    isMultiLine: new A11yNodePropertyInfo("isMultiLine", "bl"),
    isPassword: new A11yNodePropertyInfo("isPassword", "bl"),
    isScreenReaderFocusable: new A11yNodePropertyInfo("isScreenReaderFocusable", "bl"),
    isScrollable: new A11yNodePropertyInfo("isScrollable", "bl"),
    isSelected: new A11yNodePropertyInfo("isSelected", "bl"),
    isShowingHintText: new A11yNodePropertyInfo("isShowingHintText", "bl"),
    isTextEntryKey: new A11yNodePropertyInfo("isTextEntryKey", "bl"),
    isTextSelectable: new A11yNodePropertyInfo("isTextSelectable", "bl"),
    isVisibleToUser: new A11yNodePropertyInfo("isVisibleToUser", "bl"),
    listIndex: new A11yNodePropertyInfo("listIndex", "num"),
    className: new A11yNodePropertyInfo("className", "text"),
    hintText: new A11yNodePropertyInfo("hintText", "text"),
    children: new A11yNodePropertyInfo("children", "arr"),
    boundsInScreen: new A11yNodePropertyInfo("boundsInScreen", "rect"),
    availableExtraData: new A11yNodePropertyInfo("availableExtraData", "arr")
};
const a11yNodeRealizedKeys = [
    "viewIdResourceName",
    "text",
    "contentDescription",
    "isClickable"
];
var NodeActionKeys = /*#__PURE__*/ function(NodeActionKeys) {
    NodeActionKeys["click"] = "click";
    NodeActionKeys["longClick"] = "longClick";
    NodeActionKeys["setText"] = "setText";
    NodeActionKeys["tryClick"] = "tryClick";
    NodeActionKeys["globalClick"] = "globalClick";
    return NodeActionKeys;
}({});
const nodeActions = {
    ["click"]: {
        clazz: SFActionClick,
        name: "click",
        value: "click",
        hasInput: false
    },
    ["longClick"]: {
        clazz: SFActionLongClick,
        name: "longClick",
        value: "longClick",
        hasInput: false
    },
    ["setText"]: {
        clazz: SFActionSetText,
        name: "setText",
        value: "setText",
        hasInput: true
    },
    ["tryClick"]: {
        clazz: SFActionTryClick,
        name: "tryClick",
        value: "tryClick",
        hasInput: false
    },
    ["globalClick"]: {
        clazz: SFActionGlobalClick,
        name: "globalClick",
        value: "globalClick",
        hasInput: false
    }
};

;// ../../libs/droid/project-v2-ext/src/actions/a11y/types/index.ts



// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/FormLabel/FormLabel.js
var FormLabel = __webpack_require__(35252);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/RadioGroup/RadioGroup.js + 1 modules
var RadioGroup = __webpack_require__(67484);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/Radio/Radio.js + 6 modules
var Radio = __webpack_require__(93783);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/Input/Input.js + 1 modules
var Input = __webpack_require__(52787);
;// ../../libs/droid/project-v2-ext/src/actions/a11y/components/NodeActionUI.tsx




function NodeActionUI(param) {
    let { nodeAction, setNodeAction, text, setText } = param;
    const { t } = (0,es/* useTranslation */.Bd)("droid-project-v2-ext/actions/a11y/content");
    const handleChange = (event)=>{
        setNodeAction(nodeActions[event.target.value]);
    };
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(jsx_runtime.Fragment, {
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.A, {
            sx: {
                width: "100%"
            },
            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(FormControl/* default */.A, {
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(FormLabel/* default */.A, {
                        id: "demo-radio-buttons-group-label",
                        children: t("NodeActionUI.title")
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)(RadioGroup/* default */.A, {
                        "aria-labelledby": "demo-radio-buttons-group-label",
                        value: nodeAction.value,
                        name: "radio-buttons-group",
                        onChange: handleChange,
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(FormControlLabel/* default */.A, {
                                "data-testid": "NodeActionUI__clickRadio__01JFXYZT3J9K0L1M2N3O4P5Q6",
                                value: NodeActionKeys.click,
                                control: /*#__PURE__*/ (0,jsx_runtime.jsx)(Radio/* default */.A, {}),
                                label: t("NodeActionUI.click")
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(FormControlLabel/* default */.A, {
                                "data-testid": "NodeActionUI__longClickRadio__01JFXYZU4K0L1M2N3O4P5Q6R7",
                                value: NodeActionKeys.longClick,
                                control: /*#__PURE__*/ (0,jsx_runtime.jsx)(Radio/* default */.A, {}),
                                label: t("NodeActionUI.longClick")
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)(Grid2/* default */.A, {
                                direction: "row",
                                spacing: 2,
                                container: true,
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Grid2/* default */.A, {
                                        size: "auto",
                                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(FormControlLabel/* default */.A, {
                                            "data-testid": "NodeActionUI__setTextRadio__01JFXYZV5L1M2N3O4P5Q6R7S8",
                                            value: NodeActionKeys.setText,
                                            control: /*#__PURE__*/ (0,jsx_runtime.jsx)(Radio/* default */.A, {}),
                                            label: t("NodeActionUI.setText")
                                        })
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Grid2/* default */.A, {
                                        size: "grow",
                                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Input/* default */.A, {
                                            "data-testid": "NodeActionUI__setTextInput__01JFXYZW6M2N3O4P5Q6R7S8T9",
                                            value: text,
                                            onChange: (e)=>setText(e.target.value)
                                        })
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(FormControlLabel/* default */.A, {
                                "data-testid": "NodeActionUI__tryClickRadio__01JFXYZX7N3O4P5Q6R7S8T9U0",
                                value: NodeActionKeys.tryClick,
                                control: /*#__PURE__*/ (0,jsx_runtime.jsx)(Radio/* default */.A, {}),
                                label: t("NodeActionUI.tryClick")
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(FormControlLabel/* default */.A, {
                                "data-testid": "NodeActionUI__globalClickRadio__01JFXYZY8O4P5Q6R7S8T9U0V1",
                                value: NodeActionKeys.globalClick,
                                control: /*#__PURE__*/ (0,jsx_runtime.jsx)(Radio/* default */.A, {}),
                                label: t("NodeActionUI.globalClick")
                            })
                        ]
                    })
                ]
            })
        })
    });
}

;// ../../libs/droid/project-v2-ext/src/actions/a11y/components/index.ts


// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+icons-material@7.2.0_@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_rea_ajjais66od7kee7mo6ans43why/node_modules/@mui/icons-material/esm/ExpandMore.js
var ExpandMore = __webpack_require__(8137);
;// ../../libs/droid/project-v2-ext/src/actions/a11y/node-execute/UI.tsx











const node_execute_UI_fileLog = new Log/* Log */.tG(false, 'NodeExecuteUI_f');
node_execute_UI_fileLog.pause = true;
function SelectConditions(param) {
    let { data } = param;
    var _data_javaData_info;
    const node = (_data_javaData_info = data.javaData.info) === null || _data_javaData_info === void 0 ? void 0 : _data_javaData_info.node;
    if (!node) {
        return /*#__PURE__*/ (0,jsx_runtime.jsx)(jsx_runtime.Fragment, {});
    }
    const { t } = (0,es/* useTranslation */.Bd)("droid-project-v2-ext/actions/a11y/node-execute/content");
    const [showAll, setShowAll] = (0,react.useState)(false);
    const [keys, setKeys] = (0,react.useState)(showAll ? Object.keys(a11yNodeProperties) : a11yNodeRealizedKeys);
    (0,react.useEffect)(()=>{
        setKeys(showAll ? Object.keys(a11yNodeProperties) : a11yNodeRealizedKeys);
    }, [
        showAll
    ]);
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(jsx_runtime.Fragment, {
        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.A, {
            sx: {
                width: "100%"
            },
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.A, {
                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(FormControlLabel/* default */.A, {
                        control: /*#__PURE__*/ (0,jsx_runtime.jsx)(Switch/* default */.A, {
                            "data-testid": "NodeExecuteUI__showAllSwitch__01JFXYZZ1P5Q6R7S8T9U0V1W2",
                            checked: Boolean(showAll),
                            onChange: (e)=>setShowAll(Boolean(e.target.checked))
                        }),
                        label: t("content.showNodeAllProperties")
                    })
                }),
                keys.map((key, index)=>{
                    return /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.A, {
                        sx: {
                            width: "100%",
                            wordBreak: "break-all"
                        },
                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(FormControlLabel/* default */.A, {
                            control: /*#__PURE__*/ (0,jsx_runtime.jsx)(Checkbox/* default */.A, {
                                "data-testid": "NodeExecuteUI__propertyCheckbox__01JFXYZA2Q6R7S8T9U0V1W2X3__".concat(index),
                                checked: data.javaData.selectedProperties.includes(key),
                                onChange: (e)=>{
                                    if (e.target.checked) {
                                        data.javaData.selectedProperties.push(key);
                                    } else {
                                        data.javaData.selectedProperties = data.javaData.selectedProperties.filter((k)=>k !== key);
                                    }
                                }
                            }),
                            label: "".concat(key, "::").concat(JSON.stringify(node[key]))
                        })
                    }, key);
                })
            ]
        })
    });
}
function WaitUI(param) {
    let { data } = param;
    if (!data.javaData.wait) {
        data.javaData.wait = {
            time: 1000,
            interval: 20,
            invisible: false
        };
    }
    const { t } = (0,es/* useTranslation */.Bd)("droid-project-v2-ext/actions/a11y/node-execute/content");
    const [time] = (0,useProxyWatch/* useProxyWatch */.x)(data, 'javaData.wait.time', data.javaData.wait.time || 1000);
    const [interval] = (0,useProxyWatch/* useProxyWatch */.x)(data, 'javaData.wait.interval', data.javaData.wait.interval);
    const [invisible] = (0,useProxyWatch/* useProxyWatch */.x)(data, "javaData.wait.invisible", data.javaData.wait.invisible);
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(jsx_runtime.Fragment, {
        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(Stack/* default */.A, {
            direction: "column",
            sx: {
                width: "100%"
            },
            spacing: 2,
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsx)(TextField/* default */.A, {
                    "data-testid": "NodeExecuteUI__waitTimeInput__01JFXYZB3R7S8T9U0V1W2X3Y4",
                    type: "number",
                    value: parseInt(time.toString()),
                    onChange: (e)=>data.javaData.wait.time = parseInt(e.target.value),
                    label: t("content.wait.time")
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)(TextField/* default */.A, {
                    "data-testid": "NodeExecuteUI__waitIntervalInput__01JFXYZC4S8T9U0V1W2X3Y4Z5",
                    type: "number",
                    value: parseInt(interval.toString()),
                    onChange: (e)=>data.javaData.wait.interval = parseInt(e.target.value),
                    label: t("content.wait.interval")
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)(FormControlLabel/* default */.A, {
                    control: /*#__PURE__*/ (0,jsx_runtime.jsx)(Checkbox/* default */.A, {
                        "data-testid": "NodeExecuteUI__waitInvisibleCheckbox__01JFXYZD5T9U0V1W2X3Y4Z5A6",
                        checked: invisible,
                        onChange: (e)=>data.javaData.wait.invisible = e.target.checked
                    }),
                    label: t("content.wait.invisible")
                })
            ]
        })
    });
}
function node_execute_UI_UI(data) {
    const onInfoSelectedEventType = 'onInfoSelected';
    const { t } = (0,es/* useTranslation */.Bd)("droid-project-v2-ext/actions/a11y/node-execute/content");
    const router = (0,next_router.useRouter)();
    const backPath = router.pathname;
    const [nodeAction, _setNodeAction] = (0,react.useState)(data.javaData.action);
    const [open, setOpen] = (0,react.useState)(false);
    function setNodeAction(nodeAction) {
        _setNodeAction(nodeAction);
        data.javaData.action = nodeAction;
    }
    const [text, _setText] = (0,react.useState)(data.javaData.setText);
    function setText(text) {
        _setText(text);
        data.javaData.setText = text;
    }
    function onChangeClick() {
        var _projectInfo_project, _projectInfo_triggerActionGroup, _projectInfo_triggerAction, _projectInfo_actionGroup, _projectInfo_project1, _projectInfo_triggerActionGroup1, _projectInfo_triggerAction1, _projectInfo_actionGroup1, _actionA11yNodeExecuteUtils_onClickChange;
        const projectInfo = {};
        src.childToProjectDataUtils.actionList.getActionListByProp(data, projectInfo);
        // 修改：属性从 .id 改为 .ulid，URL参数名从 xxxId 改为 xxxUlid
        if (!((_projectInfo_project = projectInfo.project) === null || _projectInfo_project === void 0 ? void 0 : _projectInfo_project.ulid) || !((_projectInfo_triggerActionGroup = projectInfo.triggerActionGroup) === null || _projectInfo_triggerActionGroup === void 0 ? void 0 : _projectInfo_triggerActionGroup.ulid) || !((_projectInfo_triggerAction = projectInfo.triggerAction) === null || _projectInfo_triggerAction === void 0 ? void 0 : _projectInfo_triggerAction.ulid) || !((_projectInfo_actionGroup = projectInfo.actionGroup) === null || _projectInfo_actionGroup === void 0 ? void 0 : _projectInfo_actionGroup.ulid)) {
            console.error('UpdateAppLink projectInfo is undefined', projectInfo);
            return;
        }
        const query = {
            backPath,
            projectUlid: (_projectInfo_project1 = projectInfo.project) === null || _projectInfo_project1 === void 0 ? void 0 : _projectInfo_project1.ulid,
            triggerActionGroupUlid: (_projectInfo_triggerActionGroup1 = projectInfo.triggerActionGroup) === null || _projectInfo_triggerActionGroup1 === void 0 ? void 0 : _projectInfo_triggerActionGroup1.ulid,
            triggerActionUlid: (_projectInfo_triggerAction1 = projectInfo.triggerAction) === null || _projectInfo_triggerAction1 === void 0 ? void 0 : _projectInfo_triggerAction1.ulid,
            actionGroupUlid: (_projectInfo_actionGroup1 = projectInfo.actionGroup) === null || _projectInfo_actionGroup1 === void 0 ? void 0 : _projectInfo_actionGroup1.ulid,
            type: common/* ActionOrTriggerListTypeEnum */.Q.updateAction,
            actionUlid: data.ulid,
            actionType: actionA11yNodeExecuteUtils.type
        };
        (_actionA11yNodeExecuteUtils_onClickChange = actionA11yNodeExecuteUtils.onClickChange) === null || _actionA11yNodeExecuteUtils_onClickChange === void 0 ? void 0 : _actionA11yNodeExecuteUtils_onClickChange.call(actionA11yNodeExecuteUtils, {
            query,
            onDataSelectedEventType: onInfoSelectedEventType
        });
    }
    (0,react.useEffect)(()=>{
        return (0,proxyWatch/* getProxyDispatcher */.Ax)(data).addListener(onInfoSelectedEventType, (info)=>{
            data.javaData.info = info;
        });
    });
    if (!nodeAction) {
        return /*#__PURE__*/ (0,jsx_runtime.jsx)(jsx_runtime.Fragment, {
            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.A, {
                children: "no node action!!!"
            })
        });
    }
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(jsx_runtime.Fragment, {
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.A, {
            sx: {
                width: "100%"
            },
            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(Accordion/* default */.A, {
                expanded: Boolean(open),
                onChange: (e, expanded)=>setOpen(Boolean(expanded)),
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(AccordionSummary/* default */.A, {
                        expandIcon: /*#__PURE__*/ (0,jsx_runtime.jsx)(ExpandMore/* default */.A, {}),
                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                            children: t("content.title")
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(AccordionDetails/* default */.A, {
                        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(Grid2/* default */.A, {
                            container: true,
                            sx: {
                                width: "100%"
                            },
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime.jsx)(Grid2/* default */.A, {
                                    size: "grow",
                                    container: true,
                                    children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(Stack/* default */.A, {
                                        direction: "column",
                                        spacing: 2,
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime.jsx)(NodeActionUI, {
                                                nodeAction: nodeAction,
                                                setNodeAction: setNodeAction,
                                                text: text || "",
                                                setText: setText
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime.jsx)(WaitUI, {
                                                data: data
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime.jsx)(SelectConditions, {
                                                data: data
                                            })
                                        ]
                                    })
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)(Grid2/* default */.A, {
                                    size: "auto",
                                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Button/* default */.A, {
                                        "data-testid": "NodeExecuteUI__changeButton__01JFXYZE6U0V1W2X3Y4Z5A6B7",
                                        onClick: onChangeClick,
                                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                            children: t("content.changeBtnLabel")
                                        })
                                    })
                                })
                            ]
                        })
                    })
                ]
            })
        })
    });
}

;// ../../libs/droid/project-v2-ext/src/actions/a11y/node-execute/node-execute.ts





const node_execute_fileLog = new Log/* Log */.tG(false, '[IActionA11yNodeExecute]');
node_execute_fileLog.pause = true;
node_execute_fileLog.childrenPaused = true;
const node_execute_type = "".concat(a11yActionNamespace, "node-execute");
node_execute_fileLog.log('[IActionA11yNodeExecute] type:', node_execute_type);
function node_execute_createDefaultData() {
    node_execute_fileLog.log('[createDefaultData] 开始创建默认数据');
    const ulidValue = (0,index_esm/* ulid */.Z0)();
    const data = {
        ulid: ulidValue,
        uuid: '',
        ownerUuid: '',
        currentVersion: 0,
        type: node_execute_type,
        javaData: {
            selectedProperties: [],
            regexProperties: {},
            wait: {
                time: 0,
                interval: 0,
                invisible: false
            },
            action: {
                name: 'click',
                value: 'click'
            }
        },
        createdAt: 0,
        updatedAt: 0,
        authorUuid: ''
    };
    node_execute_fileLog.log('[createDefaultData] data:', JSON.stringify(data));
    return data;
}
function node_execute_init() {
    node_execute_fileLog.log('[init] node-execute 初始化');
}
const actionA11yNodeExecuteUtils = (0,src.createActionUtils)(node_execute_type, node_execute_init, node_execute_createDefaultData, node_execute_UI_UI);

;// ../../libs/droid/project-v2-ext/src/actions/a11y/node-action/UI.tsx




const node_action_UI_fileLog = new Log/* Log */.tG(false, 'NodeActionUI_f');
node_action_UI_fileLog.pause = true;
/**
 * NodeAction UI 组件
 * 提供配置界面让用户选择操作类型和相关参数
 */ function node_action_UI_UI(data) {
    node_action_UI_fileLog.log('UI rendered, data =', data);
    const { t } = (0,es/* useTranslation */.Bd)('droid-project-v2-ext/actions/a11y/node-action/content');
    node_action_UI_fileLog.log('i18n loaded');
    const [actionType] = (0,useProxyWatch/* useProxyWatch */.x)(data, "javaData.actionType", data.javaData.actionType);
    node_action_UI_fileLog.log('actionType =', actionType);
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.A, {
        sx: {
            width: '100%'
        },
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.A, {
                sx: {
                    mb: 2
                },
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.A, {
                    variant: "h6",
                    component: "b",
                    children: t('UI.UI.title')
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)(Stack/* default */.A, {
                direction: "column",
                spacing: 2,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.A, {
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)(Typography/* default */.A, {
                                variant: "body2",
                                color: "text.secondary",
                                children: [
                                    t('UI.UI.actionTypeLabel'),
                                    ":"
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.A, {
                                variant: "body1",
                                children: getActionTypeLabel(actionType, t)
                            })
                        ]
                    }),
                    actionType === ActionType.click && /*#__PURE__*/ (0,jsx_runtime.jsx)(ClickConfig, {
                        data: data
                    }),
                    actionType === ActionType.scroll && /*#__PURE__*/ (0,jsx_runtime.jsx)(ScrollConfig, {
                        data: data
                    }),
                    actionType === ActionType.setText && /*#__PURE__*/ (0,jsx_runtime.jsx)(SetTextConfig, {
                        data: data
                    }),
                    actionType === ActionType.longClick && /*#__PURE__*/ (0,jsx_runtime.jsx)(LongClickConfig, {}),
                    actionType === ActionType.focus && /*#__PURE__*/ (0,jsx_runtime.jsx)(FocusConfig, {})
                ]
            })
        ]
    });
}
/**
 * 点击操作配置
 */ function ClickConfig(param) {
    let { data } = param;
    node_action_UI_fileLog.log('ClickConfig rendered');
    const { t } = (0,es/* useTranslation */.Bd)('droid-project-v2-ext/actions/a11y/node-action/content');
    node_action_UI_fileLog.log('ClickConfig i18n loaded');
    // 确保 clickConfig 存在
    if (!data.javaData.clickConfig) {
        node_action_UI_fileLog.log('clickConfig is undefined, initializing...');
        data.javaData.clickConfig = {
            useGlobalClick: false,
            continuousClickConfig: {
                enableContinuousClick: false,
                baseInterval: 300,
                intervalVariation: 50
            }
        };
    }
    // 确保 continuousClickConfig 存在
    if (!data.javaData.clickConfig.continuousClickConfig) {
        node_action_UI_fileLog.log('continuousClickConfig is undefined, initializing...');
        data.javaData.clickConfig.continuousClickConfig = {
            enableContinuousClick: false,
            baseInterval: 300,
            intervalVariation: 50
        };
    }
    const [useGlobalClick] = (0,useProxyWatch/* useProxyWatch */.x)(data.javaData.clickConfig, "useGlobalClick", data.javaData.clickConfig.useGlobalClick);
    const [enableContinuousClick] = (0,useProxyWatch/* useProxyWatch */.x)(data.javaData.clickConfig.continuousClickConfig, "enableContinuousClick", data.javaData.clickConfig.continuousClickConfig.enableContinuousClick);
    const [baseInterval] = (0,useProxyWatch/* useProxyWatch */.x)(data.javaData.clickConfig.continuousClickConfig, "baseInterval", data.javaData.clickConfig.continuousClickConfig.baseInterval);
    const [intervalVariation] = (0,useProxyWatch/* useProxyWatch */.x)(data.javaData.clickConfig.continuousClickConfig, "intervalVariation", data.javaData.clickConfig.continuousClickConfig.intervalVariation);
    node_action_UI_fileLog.log('useGlobalClick =', useGlobalClick);
    node_action_UI_fileLog.log('enableContinuousClick =', enableContinuousClick);
    node_action_UI_fileLog.log('baseInterval =', baseInterval);
    node_action_UI_fileLog.log('intervalVariation =', intervalVariation);
    function handleToggle(checked) {
        node_action_UI_fileLog.log('handleToggle called, checked =', checked);
        if (data.javaData.clickConfig) {
            data.javaData.clickConfig.useGlobalClick = checked;
        }
    }
    function handleContinuousToggle(checked) {
        var _data_javaData_clickConfig;
        node_action_UI_fileLog.log('handleContinuousToggle called, checked =', checked);
        if ((_data_javaData_clickConfig = data.javaData.clickConfig) === null || _data_javaData_clickConfig === void 0 ? void 0 : _data_javaData_clickConfig.continuousClickConfig) {
            data.javaData.clickConfig.continuousClickConfig.enableContinuousClick = checked;
        }
    }
    function handleBaseIntervalChange(value) {
        node_action_UI_fileLog.log('handleBaseIntervalChange called, value =', value);
        const numValue = parseInt(value, 10);
        node_action_UI_fileLog.log('numValue =', numValue);
        if (!isNaN(numValue) && numValue >= 0) {
            var _data_javaData_clickConfig;
            if ((_data_javaData_clickConfig = data.javaData.clickConfig) === null || _data_javaData_clickConfig === void 0 ? void 0 : _data_javaData_clickConfig.continuousClickConfig) {
                data.javaData.clickConfig.continuousClickConfig.baseInterval = numValue;
            }
        } else {
            node_action_UI_fileLog.log('handleBaseIntervalChange - invalid value, skipping');
        }
    }
    function handleIntervalVariationChange(value) {
        node_action_UI_fileLog.log('handleIntervalVariationChange called, value =', value);
        const numValue = parseInt(value, 10);
        node_action_UI_fileLog.log('numValue =', numValue);
        if (!isNaN(numValue) && numValue >= 0) {
            var _data_javaData_clickConfig;
            if ((_data_javaData_clickConfig = data.javaData.clickConfig) === null || _data_javaData_clickConfig === void 0 ? void 0 : _data_javaData_clickConfig.continuousClickConfig) {
                data.javaData.clickConfig.continuousClickConfig.intervalVariation = numValue;
            }
        } else {
            node_action_UI_fileLog.log('handleIntervalVariationChange - invalid value, skipping');
        }
    }
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.A, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(FormControlLabel/* default */.A, {
                control: /*#__PURE__*/ (0,jsx_runtime.jsx)(Switch/* default */.A, {
                    "data-testid": "NodeActionUI__useGlobalClickSwitch__01JFXYZK9A0B1C2D3E4F5G6H7",
                    checked: useGlobalClick,
                    onChange: (e)=>handleToggle(e.target.checked)
                }),
                label: t('UI.UI.ClickConfig.useGlobalClickLabel')
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.A, {
                variant: "caption",
                display: "block",
                color: "text.secondary",
                sx: {
                    mt: 0.5,
                    mb: 2
                },
                children: useGlobalClick ? t('UI.UI.ClickConfig.useGlobalClickHintOn') : t('UI.UI.ClickConfig.useGlobalClickHintOff')
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.A, {
                sx: {
                    mt: 2,
                    p: 2,
                    border: '1px solid',
                    borderColor: 'divider',
                    borderRadius: 1
                },
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(FormControlLabel/* default */.A, {
                        control: /*#__PURE__*/ (0,jsx_runtime.jsx)(Switch/* default */.A, {
                            "data-testid": "NodeActionUI__enableContinuousClickSwitch__01JFXYZL9B1C2D3E4F5G6H7I8",
                            checked: enableContinuousClick,
                            onChange: (e)=>handleContinuousToggle(e.target.checked)
                        }),
                        label: t('UI.UI.ClickConfig.enableContinuousClickLabel')
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.A, {
                        variant: "caption",
                        display: "block",
                        color: "text.secondary",
                        sx: {
                            mt: 0.5,
                            mb: 2
                        },
                        children: t('UI.UI.ClickConfig.enableContinuousClickHint')
                    }),
                    enableContinuousClick && /*#__PURE__*/ (0,jsx_runtime.jsxs)(Stack/* default */.A, {
                        direction: "column",
                        spacing: 2,
                        sx: {
                            mt: 2
                        },
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(TextField/* default */.A, {
                                "data-testid": "NodeActionUI__baseIntervalInput__01JFXYZM9C2D3E4F5G6H7I8J9",
                                fullWidth: true,
                                type: "number",
                                label: t('UI.UI.ClickConfig.baseIntervalLabel'),
                                value: baseInterval,
                                onChange: (e)=>handleBaseIntervalChange(e.target.value),
                                inputProps: {
                                    min: 0,
                                    step: 50
                                },
                                helperText: t('UI.UI.ClickConfig.baseIntervalHint')
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(TextField/* default */.A, {
                                "data-testid": "NodeActionUI__intervalVariationInput__01JFXYZN9D3E4F5G6H7I8J9K0",
                                fullWidth: true,
                                type: "number",
                                label: t('UI.UI.ClickConfig.intervalVariationLabel'),
                                value: intervalVariation,
                                onChange: (e)=>handleIntervalVariationChange(e.target.value),
                                inputProps: {
                                    min: 0,
                                    step: 10
                                },
                                helperText: t('UI.UI.ClickConfig.intervalVariationHint', {
                                    baseInterval,
                                    intervalVariation
                                })
                            })
                        ]
                    })
                ]
            })
        ]
    });
}
/**
 * 滚动操作配置
 */ function ScrollConfig(param) {
    let { data } = param;
    node_action_UI_fileLog.log('ScrollConfig rendered');
    const { t } = (0,es/* useTranslation */.Bd)('droid-project-v2-ext/actions/a11y/node-action/content');
    node_action_UI_fileLog.log('ScrollConfig i18n loaded');
    // 确保 scrollConfig 存在
    if (!data.javaData.scrollConfig) {
        node_action_UI_fileLog.log('scrollConfig is undefined, initializing...');
        data.javaData.scrollConfig = {
            direction: 'forward'
        };
    }
    const [direction] = (0,useProxyWatch/* useProxyWatch */.x)(data.javaData.scrollConfig, "direction", data.javaData.scrollConfig.direction);
    node_action_UI_fileLog.log('direction =', direction);
    function handleChange(newDirection) {
        node_action_UI_fileLog.log('handleChange called, newDirection =', newDirection);
        if (data.javaData.scrollConfig) {
            data.javaData.scrollConfig.direction = newDirection;
        }
    }
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.A, {
        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(FormControl/* default */.A, {
            fullWidth: true,
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsx)(InputLabel/* default */.A, {
                    children: t('UI.UI.ScrollConfig.directionLabel')
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsxs)(Select/* default */.A, {
                    "data-testid": "NodeActionUI__directionSelect__01JFXYZO9E4F5G6H7I8J9K0L1",
                    value: direction,
                    label: t('UI.UI.ScrollConfig.directionLabel'),
                    onChange: (e)=>handleChange(e.target.value),
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(MenuItem/* default */.A, {
                            value: "forward",
                            children: t('UI.UI.ScrollConfig.directionForward')
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(MenuItem/* default */.A, {
                            value: "backward",
                            children: t('UI.UI.ScrollConfig.directionBackward')
                        })
                    ]
                })
            ]
        })
    });
}
/**
 * 设置文本操作配置
 */ function SetTextConfig(param) {
    let { data } = param;
    node_action_UI_fileLog.log('SetTextConfig rendered');
    const { t } = (0,es/* useTranslation */.Bd)('droid-project-v2-ext/actions/a11y/node-action/content');
    node_action_UI_fileLog.log('SetTextConfig i18n loaded');
    // 确保 textConfig 存在
    if (!data.javaData.textConfig) {
        node_action_UI_fileLog.log('textConfig is undefined, initializing...');
        data.javaData.textConfig = {
            text: ''
        };
    }
    const [text] = (0,useProxyWatch/* useProxyWatch */.x)(data.javaData.textConfig, "text", data.javaData.textConfig.text);
    node_action_UI_fileLog.log('text =', text);
    function handleChange(newText) {
        node_action_UI_fileLog.log('handleChange called, newText =', newText);
        if (data.javaData.textConfig) {
            data.javaData.textConfig.text = newText;
        }
    }
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.A, {
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(TextField/* default */.A, {
            "data-testid": "NodeActionUI__setTextInput__01JFXYZP9F5G6H7I8J9K0L1M2",
            fullWidth: true,
            label: t('UI.UI.SetTextConfig.textLabel'),
            value: text,
            onChange: (e)=>handleChange(e.target.value),
            placeholder: t('UI.UI.SetTextConfig.textPlaceholder')
        })
    });
}
/**
 * 长按操作说明
 */ function LongClickConfig() {
    const { t } = (0,es/* useTranslation */.Bd)('droid-project-v2-ext/actions/a11y/node-action/content');
    node_action_UI_fileLog.log('LongClickConfig i18n loaded');
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.A, {
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.A, {
            variant: "body2",
            color: "text.secondary",
            children: t('UI.UI.LongClickConfig.description')
        })
    });
}
/**
 * 聚焦操作说明
 */ function FocusConfig() {
    const { t } = (0,es/* useTranslation */.Bd)('droid-project-v2-ext/actions/a11y/node-action/content');
    node_action_UI_fileLog.log('FocusConfig i18n loaded');
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.A, {
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.A, {
            variant: "body2",
            color: "text.secondary",
            children: t('UI.UI.FocusConfig.description')
        })
    });
}
/**
 * 获取操作类型的标签
 */ function getActionTypeLabel(actionType, t) {
    node_action_UI_fileLog.log('getActionTypeLabel called, actionType =', actionType);
    const labels = {
        [ActionType.click]: t('UI.UI.ActionType.click'),
        [ActionType.longClick]: t('UI.UI.ActionType.longClick'),
        [ActionType.scroll]: t('UI.UI.ActionType.scroll'),
        [ActionType.setText]: t('UI.UI.ActionType.setText'),
        [ActionType.focus]: t('UI.UI.ActionType.focus')
    };
    const label = labels[actionType];
    node_action_UI_fileLog.log('getActionTypeLabel label =', label);
    return label || actionType;
}

;// ../../libs/droid/project-v2-ext/src/actions/a11y/node-action/IActionNodeAction.ts







const IActionNodeAction_fileLog = new Log/* Log */.tG(false, '[IActionNodeAction]');
IActionNodeAction_fileLog.pause = true;
IActionNodeAction_fileLog.childrenPaused = true;
const actionNodeActionType = "".concat(a11yActionNamespace, "node-action");
const IActionNodeAction_type = actionNodeActionType;
IActionNodeAction_fileLog.log('[IActionNodeAction] type:', IActionNodeAction_type);
/**
 * 节点操作类型枚举
 */ var ActionType = /*#__PURE__*/ function(ActionType) {
    ActionType["click"] = "click";
    ActionType["longClick"] = "longClick";
    ActionType["scroll"] = "scroll";
    ActionType["setText"] = "setText";
    ActionType["focus"] = "focus";
    return ActionType;
}({});
/**
 * 创建默认的 NodeAction 数据
 */ function IActionNodeAction_createDefaultData() {
    IActionNodeAction_fileLog.log('[createDefaultData] 开始创建默认数据');
    const ulidValue = (0,index_esm/* ulid */.Z0)();
    IActionNodeAction_fileLog.log('[createDefaultData] 生成ulid:', ulidValue);
    const permissions = [
        {
            name: '辅助功能权限',
            value: Manifest/* ManifestPermission */.Ls.BIND_ACCESSIBILITY_SERVICE,
            reason: '需要辅助功能来操作节点'
        }
    ];
    IActionNodeAction_fileLog.log('[createDefaultData] 权限数量:', permissions.length);
    const injects = [
        [
            RhinoInjectKeys/* RhinoInjectNames */.gp.a11yModel,
            'a11yModel'
        ]
    ];
    IActionNodeAction_fileLog.log('[createDefaultData] 注入配置数量:', injects.length);
    const defaultData = {
        ulid: ulidValue,
        uuid: '',
        ownerUuid: '',
        currentVersion: 0,
        type: IActionNodeAction_type,
        name: 'actionNodeAction',
        permissions,
        injects,
        javaData: {
            actionType: "click",
            clickConfig: {
                useGlobalClick: true,
                continuousClickConfig: {
                    enableContinuousClick: false,
                    baseInterval: 300,
                    intervalVariation: 50
                }
            }
        },
        createdAt: 0,
        updatedAt: 0,
        authorUuid: ''
    };
    IActionNodeAction_fileLog.log('[createDefaultData] defaultData:', JSON.stringify(defaultData));
    return defaultData;
}
/**
 * 初始化函数
 */ function IActionNodeAction_init() {
    IActionNodeAction_fileLog.log('[init] node-action 初始化');
}
/**
 * NodeAction 工具对象
 */ const actionNodeActionUtils = (0,src.createActionUtils)(IActionNodeAction_type, IActionNodeAction_init, IActionNodeAction_createDefaultData, node_action_UI_UI);

;// ../../libs/droid/project-v2-ext/src/actions/script/script-namespace.ts
/**
 * Script Action 命名空间
 */ const scriptActionNamespace = 'fanfanlo/javajs/v1/project/components/actions/script/';

;// ../../libs/droid/project-v2-ext/src/actions/script/scriptTemplates.ts
/**
 * 脚本动作模板集合
 */ const scriptActionSimpleTemplate = "// 简单脚本动作示例\nfunction execute(context) {\n    console.log('执行简单动作')\n    // 在这里添加你的动作逻辑\n}\n\nexport { execute }";
const scriptActionAdvancedTemplate = "// 高级脚本动作示例\nfunction execute(context) {\n    const logger = context.logger\n    logger.log('执行高级动作')\n\n    // 获取节点信息\n    const node = context.node\n    if (node) {\n        logger.log('节点信息:', node)\n        // 执行节点操作\n        node.click()\n    }\n}\n\nfunction cleanup(context) {\n    context.logger.log('清理资源')\n}\n\nexport { execute, cleanup }";
const scriptActionFullTemplate = scriptActionAdvancedTemplate;

;// ../../libs/droid/project-v2-ext/src/actions/script/script-action/IActionScript.UI.tsx





/**
 * ActionScript UI 组件
 * 脚本动作编辑器
 */ function IActionScriptUI(data) {
    const { t } = (0,es/* useTranslation */.Bd)('droid-project-v2-ext/actions/script/script-action/content');
    const [mode, setMode] = (0,react.useState)(data.javaData.scriptMode || 'simple');
    const [code, setCode] = (0,react.useState)(data.javaData.script || scriptActionSimpleTemplate);
    function handleModeChange(newMode) {
        setMode(newMode);
        data.javaData.scriptMode = newMode;
        let template = scriptActionSimpleTemplate;
        if (newMode === 'advanced') {
            template = scriptActionAdvancedTemplate;
        } else if (newMode === 'full') {
            template = scriptActionFullTemplate;
        }
        setCode(template);
        data.javaData.script = template;
    }
    function handleCodeChange(newCode) {
        setCode(newCode);
        data.javaData.script = newCode;
    }
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.A, {
        sx: {
            width: '100%'
        },
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.A, {
                sx: {
                    mb: 2
                },
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.A, {
                    variant: "h6",
                    component: "b",
                    children: t('IActionScript.title')
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)(FormControl/* default */.A, {
                fullWidth: true,
                sx: {
                    mb: 2
                },
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(InputLabel/* default */.A, {
                        children: t('IActionScript.scriptMode')
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)(Select/* default */.A, {
                        "data-testid": "ActionScriptUI__modeSelect__01JFXYZG8W2X3Y4Z5A6B7C8D9",
                        value: mode,
                        label: t('IActionScript.scriptMode'),
                        onChange: (e)=>handleModeChange(e.target.value),
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(MenuItem/* default */.A, {
                                value: "simple",
                                children: t('IActionScript.scriptMode_simple')
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(MenuItem/* default */.A, {
                                value: "advanced",
                                children: t('IActionScript.scriptMode_advanced')
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(MenuItem/* default */.A, {
                                value: "full",
                                children: t('IActionScript.scriptMode_full')
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)(Typography/* default */.A, {
                variant: "body2",
                color: "text.secondary",
                sx: {
                    mb: 2
                },
                children: [
                    mode === 'simple' && t('IActionScript.modeDescription_simple'),
                    mode === 'advanced' && t('IActionScript.modeDescription_advanced'),
                    mode === 'full' && t('IActionScript.modeDescription_full')
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(TextField/* default */.A, {
                "data-testid": "ActionScriptUI__codeEditor__01JFXYZH9X3Y4Z5A6B7C8D9E0",
                fullWidth: true,
                multiline: true,
                rows: 12,
                label: t('IActionScript.scriptCode'),
                value: code,
                onChange: (e)=>handleCodeChange(e.target.value),
                placeholder: t('IActionScript.scriptPlaceholder'),
                sx: {
                    fontFamily: 'monospace'
                }
            })
        ]
    });
}

;// ../../libs/droid/project-v2-ext/src/actions/script/script-action/IActionScript.inft.tsx





const IActionScript_inft_fileLog = new Log/* Log */.tG(false, '[IActionScript]');
IActionScript_inft_fileLog.pause = true;
IActionScript_inft_fileLog.childrenPaused = true;
const IActionScript_inft_type = "".concat(scriptActionNamespace, "script");
IActionScript_inft_fileLog.log('[IActionScript] type:', IActionScript_inft_type);
function IActionScript_inft_createDefaultData() {
    IActionScript_inft_fileLog.log('[createDefaultData] 开始创建默认数据');
    const ulidValue = (0,index_esm/* ulid */.Z0)();
    IActionScript_inft_fileLog.log('[createDefaultData] 生成ulid:', ulidValue);
    const defaultData = {
        ulid: ulidValue,
        uuid: '',
        ownerUuid: '',
        currentVersion: 0,
        type: IActionScript_inft_type,
        name: 'actionScript',
        javaData: {
            script: '',
            scriptMode: 'simple'
        },
        createdAt: 0,
        updatedAt: 0,
        authorUuid: ''
    };
    IActionScript_inft_fileLog.log('[createDefaultData] defaultData:', JSON.stringify(defaultData));
    return defaultData;
}
function IActionScript_inft_init() {
    IActionScript_inft_fileLog.log('[init] script-action 初始化');
}
const actionScriptUtils = (0,src.createActionUtils)(IActionScript_inft_type, IActionScript_inft_init, IActionScript_inft_createDefaultData, IActionScriptUI);

;// ../../libs/droid/project-v2-ext/src/actions/app/index.ts




;// ../../libs/droid/project-v2-ext/src/actions/a11y/index.ts






;// ../../libs/droid/project-v2-ext/src/actions/script/index.ts




// EXTERNAL MODULE: ../../libs/droid/android/src/android/win/WindowConf.ts
var WindowConf = __webpack_require__(99949);
;// ../../libs/droid/project-v2-ext/src/actions/actions-namespace.ts
/**
 * Actions 命名空间
 */ const actionsNamespace = 'fanfanlo/javajs/v1/project/components/actions/';

;// ../../libs/droid/project-v2-ext/src/actions/float-window/float-window-namespace.ts

const floatWindowActionNamespace = "".concat(actionsNamespace, "floatwindow/");

;// ../../libs/droid/project-v2-ext/src/actions/float-window/action-show-float-window/IActionShowFloatWindow.UI.tsx







function UpdateWindowConfLink(param) {
    let { data, children } = param;
    var _projectInfo_project, _projectInfo_triggerActionGroup, _projectInfo_triggerAction, _projectInfo_actionGroup, _projectInfo_project1, _projectInfo_triggerActionGroup1, _projectInfo_triggerAction1, _projectInfo_actionGroup1;
    console.log('[UpdateWindowConfLink] rendering, data:', data);
    const projectInfo = {};
    src.childToProjectDataUtils.actionList.getActionListByProp(data, projectInfo);
    console.log('[UpdateWindowConfLink] projectInfo:', projectInfo);
    if (!((_projectInfo_project = projectInfo.project) === null || _projectInfo_project === void 0 ? void 0 : _projectInfo_project.ulid) || !((_projectInfo_triggerActionGroup = projectInfo.triggerActionGroup) === null || _projectInfo_triggerActionGroup === void 0 ? void 0 : _projectInfo_triggerActionGroup.ulid) || !((_projectInfo_triggerAction = projectInfo.triggerAction) === null || _projectInfo_triggerAction === void 0 ? void 0 : _projectInfo_triggerAction.ulid) || !((_projectInfo_actionGroup = projectInfo.actionGroup) === null || _projectInfo_actionGroup === void 0 ? void 0 : _projectInfo_actionGroup.ulid)) {
        console.error('[UpdateWindowConfLink] projectInfo is undefined', projectInfo);
        return null;
    }
    const router = (0,next_router.useRouter)();
    const backPath = router.pathname;
    console.log('[UpdateWindowConfLink] backPath:', backPath);
    const query = {
        backPath,
        projectId: (_projectInfo_project1 = projectInfo.project) === null || _projectInfo_project1 === void 0 ? void 0 : _projectInfo_project1.ulid,
        triggerActionGroupId: (_projectInfo_triggerActionGroup1 = projectInfo.triggerActionGroup) === null || _projectInfo_triggerActionGroup1 === void 0 ? void 0 : _projectInfo_triggerActionGroup1.ulid,
        triggerActionId: (_projectInfo_triggerAction1 = projectInfo.triggerAction) === null || _projectInfo_triggerAction1 === void 0 ? void 0 : _projectInfo_triggerAction1.ulid,
        actionGroupId: (_projectInfo_actionGroup1 = projectInfo.actionGroup) === null || _projectInfo_actionGroup1 === void 0 ? void 0 : _projectInfo_actionGroup1.ulid,
        type: common/* ActionOrTriggerListTypeEnum */.Q.updateAction,
        actionId: data.ulid,
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
        "data-testid": "show-float-window-action-change-conf-btn-ooae882",
        onClick: onLinkClick,
        children: children
    });
}
function IActionShowFloatWindowUI(data) {
    const { t } = (0,es/* useTranslation */.Bd)('droid/project-v2-ext/actions/float-window/action-show-float-window/content');
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
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.A, {
        sx: {
            width: '100%'
        },
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.A, {
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)("b", {
                    children: t('IActionShowFloatWindow.title')
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
                                children: t('IActionShowFloatWindow.configure')
                            })
                        })
                    })
                ]
            })
        ]
    });
}

;// ../../libs/droid/project-v2-ext/src/actions/float-window/action-show-float-window/IActionShowFloatWindow.inft.tsx






const IActionShowFloatWindow_inft_fileLog = new Log/* Log */.tG(false, '[IActionShowFloatWindow]');
IActionShowFloatWindow_inft_fileLog.pause = true;
IActionShowFloatWindow_inft_fileLog.childrenPaused = true;
const IActionShowFloatWindow_inft_type = "".concat(floatWindowActionNamespace, "showFloatWindow");
IActionShowFloatWindow_inft_fileLog.log('[IActionShowFloatWindow] type:', IActionShowFloatWindow_inft_type);
function IActionShowFloatWindow_inft_createDefaultData() {
    IActionShowFloatWindow_inft_fileLog.log('[createDefaultData] 开始创建默认数据');
    const ulidValue = (0,index_esm/* ulid */.Z0)();
    const data = {
        ulid: ulidValue,
        uuid: '',
        ownerUuid: '',
        currentVersion: 0,
        type: IActionShowFloatWindow_inft_type,
        javaData: {
            windowConf: (0,WindowConf/* createDefaultWindowConf */.IL)()
        },
        createdAt: 0,
        updatedAt: 0,
        authorUuid: ''
    };
    IActionShowFloatWindow_inft_fileLog.log('[createDefaultData] data:', JSON.stringify(data));
    return data;
}
function IActionShowFloatWindow_inft_init() {
    IActionShowFloatWindow_inft_fileLog.log('[init] showFloatWindow 初始化');
}
const actionShowFloatWindowUtils = (0,src.createActionUtils)(IActionShowFloatWindow_inft_type, IActionShowFloatWindow_inft_init, IActionShowFloatWindow_inft_createDefaultData, IActionShowFloatWindowUI);

;// ../../libs/droid/project-v2-ext/src/actions/float-window/action-accessibility-node-reader/IActionAccessibilityNodeReader.UI.tsx




const IActionAccessibilityNodeReader_UI_fileLog = new Log/* Log */.tG(false, 'IActionAccessibilityNodeReader_UI');
// fileLog.pause = true
// fileLog.childrenPaused = true
function IActionAccessibilityNodeReaderUI(data) {
    const uiLog = IActionAccessibilityNodeReader_UI_fileLog.sub(false, 'IActionAccessibilityNodeReaderUI_ui');
    // uiLog.pause = true
    // uiLog.childrenPaused = true
    const { t } = (0,es/* useTranslation */.Bd)('droid-project-v2-ext/actions/float-window/action-accessibility-node-reader/content');
    uiLog.log('rendering, data:', data);
    const windowConf = data.javaData.windowConf;
    uiLog.log('windowConf:', windowConf);
    function getDisplayText() {
        var _windowConf_htmlConf;
        const fnLog = uiLog.sub(false, 'getDisplayText_fn');
        // fnLog.pause = true
        // fnLog.childrenPaused = true
        fnLog.log('calculating display text');
        if (windowConf.description && windowConf.description.trim()) {
            fnLog.log('using description:', windowConf.description);
            return windowConf.description;
        }
        if (((_windowConf_htmlConf = windowConf.htmlConf) === null || _windowConf_htmlConf === void 0 ? void 0 : _windowConf_htmlConf.url) && windowConf.htmlConf.url.trim()) {
            fnLog.log('using url:', windowConf.htmlConf.url);
            return windowConf.htmlConf.url;
        }
        fnLog.log('using windowId:', windowConf.windowId);
        return windowConf.windowId;
    }
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.A, {
        sx: {
            width: '100%'
        },
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.A, {
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)("b", {
                    children: t('IActionAccessibilityNodeReader.title')
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Grid2/* default */.A, {
                container: true,
                sx: {
                    width: '100%'
                },
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Grid2/* default */.A, {
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
                })
            })
        ]
    });
}

// EXTERNAL MODULE: ../../libs/fanfanlo/src/nextjs/env/env.ts
var env = __webpack_require__(99401);
;// ../../libs/droid/project-v2-ext/src/actions/float-window/action-accessibility-node-reader/IActionAccessibilityNodeReader.inft.tsx







const IActionAccessibilityNodeReader_inft_fileLog = new Log/* Log */.tG(false, 'IActionAccessibilityNodeReader_inft');
// fileLog.pause = true
// fileLog.childrenPaused = true
const IActionAccessibilityNodeReader_inft_type = "".concat(floatWindowActionNamespace, "accessibilityNodeReader");
IActionAccessibilityNodeReader_inft_fileLog.log('type:', IActionAccessibilityNodeReader_inft_type);
function getNodeReaderUrl() {
    const fnLog = IActionAccessibilityNodeReader_inft_fileLog.sub(false, 'getNodeReaderUrl_fn');
    // fnLog.pause = true
    // fnLog.childrenPaused = true
    fnLog.log('开始获取URL');
    fnLog.log('isDev:', env/* isDev */.Cu);
    if (env/* isDev */.Cu) {
        const url = 'https://192.168.177.180:19016/pages/accessibility-node-click-detector/#';
        fnLog.log('dev环境, url:', url);
        return url;
    }
    if (false) {}
    const currentDomain = window.location.origin;
    const url = "".concat(currentDomain, "/pages/accessibility-node-click-detector/");
    fnLog.log('非dev环境, currentDomain:', currentDomain);
    fnLog.log('url:', url);
    return url;
}
function IActionAccessibilityNodeReader_inft_createDefaultData() {
    const fnLog = IActionAccessibilityNodeReader_inft_fileLog.sub(false, 'createDefaultData_fn');
    // fnLog.pause = true
    // fnLog.childrenPaused = true
    fnLog.log('开始创建默认数据');
    const ulidValue = (0,index_esm/* ulid */.Z0)();
    const windowConf = (0,WindowConf/* createDefaultWindowConf */.IL)();
    const url = getNodeReaderUrl();
    fnLog.log('url:', url);
    if (!windowConf.htmlConf) {
        fnLog.log('htmlConf不存在, 创建htmlConf');
        windowConf.htmlConf = {
            url: '',
            webViewJsParams: {
                fitContentWidth: 0,
                fitContentHeight: 0,
                javaToJsDataString: '',
                fitContentClass: ''
            },
            webViewConf: {
                backgroundColor: 0
            },
            jsBridgeName: 'android',
            webViewJsName: 'AutoWebViewJs',
            html: ''
        };
    }
    windowConf.htmlConf.url = url;
    if (!windowConf.htmlConf.webViewJsParams) {
        fnLog.log('webViewJsParams不存在, 创建webViewJsParams');
        windowConf.htmlConf.webViewJsParams = {
            fitContentWidth: 0,
            fitContentHeight: 0,
            javaToJsDataString: '',
            fitContentClass: ''
        };
    }
    windowConf.htmlConf.webViewJsParams.fitContentClass = 'webviewMeatureContainer';
    fnLog.log('设置fitContentClass为webviewMeatureContainer');
    const data = {
        ulid: ulidValue,
        uuid: '',
        ownerUuid: '',
        currentVersion: 0,
        type: IActionAccessibilityNodeReader_inft_type,
        javaData: {
            windowConf
        },
        createdAt: 0,
        updatedAt: 0,
        authorUuid: ''
    };
    fnLog.log('data:', JSON.stringify(data));
    return data;
}
function IActionAccessibilityNodeReader_inft_init() {
    const fnLog = IActionAccessibilityNodeReader_inft_fileLog.sub(false, 'init_fn');
    // fnLog.pause = true
    // fnLog.childrenPaused = true
    fnLog.log('accessibilityNodeReader 初始化');
}
const actionAccessibilityNodeReaderUtils = (0,src.createActionUtils)(IActionAccessibilityNodeReader_inft_type, IActionAccessibilityNodeReader_inft_init, IActionAccessibilityNodeReader_inft_createDefaultData, IActionAccessibilityNodeReaderUI);

;// ../../libs/droid/project-v2-ext/src/actions/float-window/index.ts




;// ../../libs/droid/project-v2-ext/src/actions/index.ts
// Actions 主导出
// App

// A11y

// Script

// Float Window

// Namespace


;// ../../libs/droid/project-v2-ext/src/init/initActions.ts







const initActions_fileLog = new Log/* Log */.tG(false, 'initActions_f');
initActions_fileLog.pause = true;
initActions_fileLog.childrenPaused = true;
/**
 * 初始化所有 Actions
 * 调用各个 actionUtils.init() 完成注册
 */ function initActions() {
    actionOpenAppUtils.init();
    actionToAppMainPageUtils.init();
    actionA11yNodeExecuteUtils.init();
    actionNodeActionUtils.init();
    actionScriptUtils.init();
    actionShowFloatWindowUtils.init();
}

;// ../../libs/droid/project-v2-ext/src/init/initProjectSystem.ts



const initProjectSystem_fileLog = new Log/* Log */.tG(false, 'initProjectSystem_f');
initProjectSystem_fileLog.pause = true;
initProjectSystem_fileLog.childrenPaused = true;
/**
 * 初始化项目系统
 * 在应用启动时调用，初始化所有 triggers 和 actions
 */ function initProjectSystem() {
    initTriggers();
    initActions();
}

;// ../../libs/droid/project-v2-ext/src/init/index.ts




;// ../../libs/droid/project-v2-ext/src/triggers/time/index.ts



;// ../../libs/droid/project-v2-ext/src/triggers/app/index.ts



;// ../../libs/droid/project-v2-ext/src/triggers/a11y/node-trigger/selector-chain.ts
/**
 * DroidSelector操作类型
 * 定义所有可用的selector链式调用方法
 */ var SelectorOperation = /*#__PURE__*/ function(SelectorOperation) {
    // ==================== 文本匹配 ====================
    SelectorOperation["TEXT"] = "text";
    SelectorOperation["TEXT_CONTAINS"] = "textContains";
    SelectorOperation["TEXT_STARTS_WITH"] = "textStartsWith";
    SelectorOperation["TEXT_ENDS_WITH"] = "textEndsWith";
    SelectorOperation["TEXT_MATCHES"] = "textMatches";
    // ==================== ID匹配 ====================
    SelectorOperation["ID"] = "id";
    SelectorOperation["ID_CONTAINS"] = "idContains";
    SelectorOperation["ID_STARTS_WITH"] = "idStartsWith";
    SelectorOperation["ID_ENDS_WITH"] = "idEndsWith";
    SelectorOperation["ID_MATCHES"] = "idMatches";
    // ==================== 类名匹配 ====================
    SelectorOperation["CLASS_NAME"] = "className";
    SelectorOperation["CLASS_NAME_CONTAINS"] = "classNameContains";
    SelectorOperation["CLASS_NAME_STARTS_WITH"] = "classNameStartsWith";
    SelectorOperation["CLASS_NAME_ENDS_WITH"] = "classNameEndsWith";
    SelectorOperation["CLASS_NAME_MATCHES"] = "classNameMatches";
    // ==================== 描述匹配 ====================
    SelectorOperation["DESC"] = "desc";
    SelectorOperation["DESC_CONTAINS"] = "descContains";
    SelectorOperation["DESC_STARTS_WITH"] = "descStartsWith";
    SelectorOperation["DESC_ENDS_WITH"] = "descEndsWith";
    SelectorOperation["DESC_MATCHES"] = "descMatches";
    // ==================== 包名匹配 ====================
    SelectorOperation["PACKAGE_NAME"] = "packageName";
    SelectorOperation["PACKAGE_NAME_CONTAINS"] = "packageNameContains";
    SelectorOperation["PACKAGE_NAME_STARTS_WITH"] = "packageNameStartsWith";
    SelectorOperation["PACKAGE_NAME_ENDS_WITH"] = "packageNameEndsWith";
    SelectorOperation["PACKAGE_NAME_MATCHES"] = "packageNameMatches";
    // ==================== 布尔属性 ====================
    SelectorOperation["CLICKABLE"] = "clickable";
    SelectorOperation["LONG_CLICKABLE"] = "longClickable";
    SelectorOperation["SCROLLABLE"] = "scrollable";
    SelectorOperation["ENABLED"] = "enabled";
    SelectorOperation["CHECKABLE"] = "checkable";
    SelectorOperation["CHECKED"] = "checked";
    SelectorOperation["FOCUSABLE"] = "focusable";
    SelectorOperation["FOCUSED"] = "focused";
    SelectorOperation["VISIBLE_TO_USER"] = "visibleToUser";
    SelectorOperation["SELECTED"] = "selected";
    SelectorOperation["PASSWORD"] = "password";
    // ==================== 整数属性 ====================
    SelectorOperation["DEPTH"] = "depth";
    SelectorOperation["INDEX_IN_PARENT"] = "indexInParent";
    SelectorOperation["CHILD_COUNT"] = "childCount";
    // ==================== 边界 ====================
    SelectorOperation["BOUNDS"] = "bounds";
    SelectorOperation["BOUNDS_INSIDE"] = "boundsInside";
    SelectorOperation["BOUNDS_CONTAINS"] = "boundsContains";
    // ==================== 算法 ====================
    SelectorOperation["ALGORITHM"] = "algorithm";
    return SelectorOperation;
}({});

;// ../../libs/droid/project-v2-ext/src/triggers/a11y/index.ts




;// ../../libs/droid/project-v2-ext/src/triggers/script/index.ts




;// ../../libs/droid/project-v2-ext/src/triggers/triggers-namespace.ts
/**
 * Triggers 命名空间
 */ const triggersNamespace = 'fanfanlo/javajs/v1/project/components/triggers/';

;// ../../libs/droid/project-v2-ext/src/triggers/index.ts
// Triggers 主导出
// Time

// App

// A11y

// Script

// Namespace


;// ../../libs/droid/project-v2-ext/src/trigger-actions/trigger-actions-namespace.ts

const triggerActionsNamespace = "".concat(src.projectNamespace, "triggerActions/");

;// ../../libs/droid/project-v2-ext/src/trigger-actions/ITimeOutOpenApp.ts





const ITimeOutOpenApp_type = "".concat(triggerActionsNamespace).concat(triggerTimeoutUtils.type, "-").concat(actionOpenAppUtils.type);
function ITimeOutOpenApp_createDefaultData() {
    const ulidValue = (0,index_esm/* ulid */.Z0)();
    const triggerGroupUlid = (0,index_esm/* ulid */.Z0)();
    const actionGroupUlid = (0,index_esm/* ulid */.Z0)();
    return {
        ulid: ulidValue,
        uuid: '',
        ownerUuid: '',
        currentVersion: 0,
        name: "",
        type: ITimeOutOpenApp_type,
        triggerGroupUlid,
        actionGroupUlid,
        triggerGroupUuid: '',
        actionGroupUuid: '',
        triggerGroup: {
            ulid: triggerGroupUlid,
            uuid: '',
            ownerUuid: '',
            currentVersion: 0,
            isSequential: false,
            type: 'triggerGroup',
            list: [
                triggerTimeoutUtils.createDefaultData()
            ],
            checks: [
                [
                    true
                ]
            ],
            createdAt: 0,
            updatedAt: 0,
            authorUuid: ''
        },
        actionGroup: {
            ulid: actionGroupUlid,
            uuid: '',
            ownerUuid: '',
            currentVersion: 0,
            isSequential: false,
            type: 'actionGroup',
            list: [
                actionOpenAppUtils.createDefaultData()
            ],
            checks: [
                [
                    true
                ]
            ],
            createdAt: 0,
            updatedAt: 0,
            authorUuid: ''
        },
        triggerGroupVersion: 0,
        actionGroupVersion: 0,
        createdAt: 0,
        updatedAt: 0,
        authorUuid: ''
    };
}
const timeOutOpenAppTriggerActionUtils = (0,src.createTriggerActionUtils)(ITimeOutOpenApp_type, ITimeOutOpenApp_createDefaultData);

;// ../../libs/droid/project-v2-ext/src/trigger-actions/index.ts



;// ../../libs/droid/project-v2-ext/src/utils/projectUtils.ts
/**
 * projectUtils - 项目工具函数集合
 * 使用 v2 类型 (IProject, ITrigger, IAction 等)
 */ 

const projectUtils_fileLog = new Log/* Log */.tG(false, 'project-utils_f');
projectUtils_fileLog.pause = false;
projectUtils_fileLog.childrenPaused = false;
/**
 * 获取Project权限列表
 * @param project 项目数据
 * @returns 权限名称列表
 */ function getProjectPermissions(project) {
    const fnLog = projectUtils_fileLog.sub(false, 'getProjectPermissions_fn');
    // fnLog.pause = true;
    fnLog.log('[getProjectPermissions] 开始获取权限, projectUlid:', project.ulid);
    const permissions = new Set();
    if (!project.children || project.children.length === 0) {
        fnLog.log('[getProjectPermissions] project.children 不存在或为空');
        return [];
    }
    fnLog.log('[getProjectPermissions] project.children.length:', project.children.length);
    // 循环所有 triggerActionGroup
    for(let g = 0; g < project.children.length; g++){
        const triggerActionGroup = project.children[g];
        fnLog.log('[getProjectPermissions] 处理 triggerActionGroup[', g, '], ulid:', triggerActionGroup.ulid);
        const triggerActionChildren = triggerActionGroup.children;
        if (!triggerActionChildren) {
            fnLog.log('[getProjectPermissions] triggerActionGroup[', g, '].children 不存在');
            continue;
        }
        for(let i = 0; i < triggerActionChildren.length; i++){
            const triggerAction = triggerActionChildren[i];
            fnLog.log('[getProjectPermissions] 处理triggerAction[', i, ']');
            const triggerGroup = triggerAction.triggerGroup;
            if (triggerGroup) {
                const triggerChildren = triggerGroup.children;
                if (triggerChildren) {
                    for(let j = 0; j < triggerChildren.length; j++){
                        const trigger = triggerChildren[j];
                        if (trigger.permissions) {
                            fnLog.log('[getProjectPermissions] trigger有权限, 数量:', trigger.permissions.length);
                            for(let k = 0; k < trigger.permissions.length; k++){
                                const permission = trigger.permissions[k];
                                fnLog.log('[getProjectPermissions] 添加权限:', permission.name);
                                permissions.add(permission.name);
                            }
                        }
                    }
                }
            }
            const actionGroup = triggerAction.actionGroup;
            if (actionGroup) {
                const actionChildren = actionGroup.children;
                if (actionChildren) {
                    for(let j = 0; j < actionChildren.length; j++){
                        const action = actionChildren[j];
                        if (action.permissions) {
                            fnLog.log('[getProjectPermissions] action有权限, 数量:', action.permissions.length);
                            for(let k = 0; k < action.permissions.length; k++){
                                const permission = action.permissions[k];
                                fnLog.log('[getProjectPermissions] 添加权限:', permission.name);
                                permissions.add(permission.name);
                            }
                        }
                    }
                }
            }
        }
    }
    const result = [
        ...permissions
    ];
    fnLog.log('[getProjectPermissions] 权限获取完成, 总数:', result.length);
    return result;
}
/**
 * 获取Project权限详细信息列表
 * 返回包含name、value、reason的完整权限数据
 * 异步加载国际化文本 (通过各 action/trigger 的 loadI18nTexts)
 */ async function getProjectPermissionsData(project) {
    const fnLog = projectUtils_fileLog.sub(false, 'getProjectPermissionsData_fn');
    fnLog.pause = false;
    fnLog.log('[getProjectPermissionsData] 开始获取权限详细信息, projectUlid:', project.ulid);
    if (!project.children || project.children.length === 0) {
        fnLog.log('[getProjectPermissionsData] project.children 不存在或为空');
        return [];
    }
    fnLog.log('[getProjectPermissionsData] project.children.length:', project.children.length);
    // 收集权限数据
    const permissionsMap = new Map();
    // 循环所有 triggerActionGroup
    for(let g = 0; g < project.children.length; g++){
        const triggerActionGroup = project.children[g];
        fnLog.log('[getProjectPermissionsData] 处理 triggerActionGroup[', g, '], ulid:', triggerActionGroup.ulid);
        const triggerActionChildren = triggerActionGroup.children;
        if (!triggerActionChildren) {
            fnLog.log('[getProjectPermissionsData] triggerActionGroup[', g, '].children 不存在');
            continue;
        }
        // 先调用各 action/trigger 的 loadI18nTexts 加载国际化文本
        fnLog.log('[getProjectPermissionsData] 开始加载国际化文本');
        for(let i = 0; i < triggerActionChildren.length; i++){
            const triggerAction = triggerActionChildren[i];
            fnLog.log('[getProjectPermissionsData] 处理triggerAction[', i, ']');
            // 加载 trigger 的 i18n
            const triggerGroup = triggerAction.triggerGroup;
            if (triggerGroup) {
                const triggerChildren = triggerGroup.children;
                if (triggerChildren) {
                    for(let j = 0; j < triggerChildren.length; j++){
                        const trigger = triggerChildren[j];
                        fnLog.log('[getProjectPermissionsData] 处理trigger[', j, '], type:', trigger.type);
                        const triggerUtils = (0,src.getTriggerUtils)(trigger.type);
                        fnLog.log('[getProjectPermissionsData] triggerUtils 是否存在:', !!triggerUtils);
                        if (triggerUtils) {
                            const hasLoadI18nTexts = !!triggerUtils.loadI18nTexts;
                            fnLog.log('[getProjectPermissionsData] triggerUtils.loadI18nTexts 是否存在:', hasLoadI18nTexts);
                            if (hasLoadI18nTexts) {
                                fnLog.log('[getProjectPermissionsData] 调用 triggerUtils.loadI18nTexts');
                                await triggerUtils.loadI18nTexts(trigger);
                                fnLog.log('[getProjectPermissionsData] trigger i18n 加载完成');
                            }
                        }
                    }
                }
            }
            // 加载 action 的 i18n
            const actionGroup = triggerAction.actionGroup;
            if (actionGroup) {
                const actionChildren = actionGroup.children;
                if (actionChildren) {
                    for(let j = 0; j < actionChildren.length; j++){
                        const action = actionChildren[j];
                        fnLog.log('[getProjectPermissionsData] 处理action[', j, '], type:', action.type);
                        const actionUtils = (0,src.getActionUtils)(action.type);
                        fnLog.log('[getProjectPermissionsData] actionUtils 是否存在:', !!actionUtils);
                        if (actionUtils) {
                            const hasLoadI18nTexts = !!actionUtils.loadI18nTexts;
                            fnLog.log('[getProjectPermissionsData] actionUtils.loadI18nTexts 是否存在:', hasLoadI18nTexts);
                            if (hasLoadI18nTexts) {
                                fnLog.log('[getProjectPermissionsData] 调用 actionUtils.loadI18nTexts');
                                await actionUtils.loadI18nTexts(action);
                                fnLog.log('[getProjectPermissionsData] action i18n 加载完成');
                            }
                        }
                    }
                }
            }
        }
        fnLog.log('[getProjectPermissionsData] triggerActionGroup[', g, '] i18n 加载完成, 开始收集权限');
        for(let i = 0; i < triggerActionChildren.length; i++){
            const triggerAction = triggerActionChildren[i];
            fnLog.log('[getProjectPermissionsData] 收集triggerAction[', i, ']的权限');
            const triggerGroup = triggerAction.triggerGroup;
            if (triggerGroup) {
                const triggerChildren = triggerGroup.children;
                if (triggerChildren) {
                    for(let j = 0; j < triggerChildren.length; j++){
                        const trigger = triggerChildren[j];
                        if (trigger.permissions) {
                            fnLog.log('[getProjectPermissionsData] trigger有权限, 数量:', trigger.permissions.length);
                            for(let k = 0; k < trigger.permissions.length; k++){
                                const permission = trigger.permissions[k];
                                fnLog.log('[getProjectPermissionsData] 添加权限:', permission.name, 'value:', permission.value);
                                if (permission.value) {
                                    permissionsMap.set(permission.value, permission);
                                }
                            }
                        }
                    }
                }
            }
            const actionGroup = triggerAction.actionGroup;
            if (actionGroup) {
                const actionChildren = actionGroup.children;
                if (actionChildren) {
                    for(let j = 0; j < actionChildren.length; j++){
                        const action = actionChildren[j];
                        if (action.permissions) {
                            fnLog.log('[getProjectPermissionsData] action有权限, 数量:', action.permissions.length);
                            for(let k = 0; k < action.permissions.length; k++){
                                const permission = action.permissions[k];
                                fnLog.log('[getProjectPermissionsData] 添加权限:', permission.name, 'value:', permission.value);
                                if (permission.value) {
                                    permissionsMap.set(permission.value, permission);
                                }
                            }
                        }
                    }
                }
            }
        }
    }
    const result = Array.from(permissionsMap.values());
    fnLog.log('[getProjectPermissionsData] 权限详细信息获取完成, 总数:', result.length, JSON.stringify(result));
    return result;
}
/**
 * 获取Project注入配置列表
 * 收集所有 action 和 trigger 中声明的 injects
 * 返回混合格式数组,支持 InjectKeyType 和 [InjectKeyType, string]
 */ function getProjectInjects(project) {
    const fnLog = projectUtils_fileLog.sub(false, 'getProjectInjects_fn');
    fnLog.pause = false;
    fnLog.log('[getProjectInjects] 开始获取注入配置, projectUlid:', project.ulid);
    const injectsArray = [];
    const injectKeysSet = new Set();
    if (!project.children || project.children.length === 0) {
        fnLog.log('[getProjectInjects] project.children 不存在或为空');
        return [];
    }
    fnLog.log('[getProjectInjects] project.children.length:', project.children.length);
    // 循环所有 triggerActionGroup
    for(let g = 0; g < project.children.length; g++){
        const triggerActionGroup = project.children[g];
        fnLog.log('[getProjectInjects] 处理 triggerActionGroup[', g, '], ulid:', triggerActionGroup.ulid);
        const triggerActionChildren = triggerActionGroup.children;
        if (!triggerActionChildren) {
            fnLog.log('[getProjectInjects] triggerActionGroup[', g, '].children 不存在');
            continue;
        }
        fnLog.log('[getProjectInjects] triggerActionChildren长度:', triggerActionChildren.length);
        for(let i = 0; i < triggerActionChildren.length; i++){
            const triggerAction = triggerActionChildren[i];
            fnLog.log('[getProjectInjects] 处理triggerAction[', i, ']');
            const triggerGroup = triggerAction.triggerGroup;
            if (triggerGroup) {
                const triggerChildren = triggerGroup.children;
                if (triggerChildren) {
                    fnLog.log('[getProjectInjects] triggerChildren长度:', triggerChildren.length);
                    for(let j = 0; j < triggerChildren.length; j++){
                        const trigger = triggerChildren[j];
                        fnLog.log('[getProjectInjects] 处理trigger[', j, ']');
                        if (trigger.injects) {
                            fnLog.log('[getProjectInjects] trigger有injects, 数量:', trigger.injects.length);
                            for(let k = 0; k < trigger.injects.length; k++){
                                const injectConfig = trigger.injects[k];
                                fnLog.log('[getProjectInjects] 处理inject[', k, ']:', JSON.stringify(injectConfig));
                                let injectKey;
                                let varName;
                                // 兼容两种格式
                                const isArray = Array.isArray(injectConfig);
                                fnLog.log('[getProjectInjects] injectConfig是否为数组:', isArray);
                                if (isArray) {
                                    // 数组格式: [key, varName]
                                    injectKey = injectConfig[0];
                                    varName = injectConfig[1];
                                    fnLog.log('[getProjectInjects] 数组格式, key:', injectKey, ', varName:', varName);
                                } else {
                                    // 对象格式: { key, varName }
                                    injectKey = injectConfig.key;
                                    varName = injectConfig.varName;
                                    fnLog.log('[getProjectInjects] 对象格式, key:', injectKey, ', varName:', varName);
                                }
                                const hasKey = injectKeysSet.has(injectKey);
                                fnLog.log('[getProjectInjects] 是否已存在:', hasKey);
                                if (!hasKey) {
                                    if (varName) {
                                        fnLog.log('[getProjectInjects] 添加新inject(数组格式)');
                                        injectsArray.push([
                                            injectKey,
                                            varName
                                        ]);
                                    } else {
                                        fnLog.log('[getProjectInjects] 添加新inject(字符串格式)');
                                        injectsArray.push(injectKey);
                                    }
                                    injectKeysSet.add(injectKey);
                                }
                            }
                        }
                    }
                }
            }
            const actionGroup = triggerAction.actionGroup;
            if (actionGroup) {
                const actionChildren = actionGroup.children;
                if (actionChildren) {
                    fnLog.log('[getProjectInjects] actionChildren长度:', actionChildren.length);
                    for(let j = 0; j < actionChildren.length; j++){
                        const action = actionChildren[j];
                        fnLog.log('[getProjectInjects] 处理action[', j, ']');
                        if (action.injects) {
                            fnLog.log('[getProjectInjects] action有injects, 数量:', action.injects.length);
                            for(let k = 0; k < action.injects.length; k++){
                                const injectConfig = action.injects[k];
                                fnLog.log('[getProjectInjects] 处理inject[', k, ']:', JSON.stringify(injectConfig));
                                let injectKey;
                                let varName;
                                // 兼容两种格式
                                const isArray = Array.isArray(injectConfig);
                                fnLog.log('[getProjectInjects] injectConfig是否为数组:', isArray);
                                if (isArray) {
                                    // 数组格式: [key, varName]
                                    injectKey = injectConfig[0];
                                    varName = injectConfig[1];
                                    fnLog.log('[getProjectInjects] 数组格式, key:', injectKey, ', varName:', varName);
                                } else {
                                    // 对象格式: { key, varName }
                                    injectKey = injectConfig.key;
                                    varName = injectConfig.varName;
                                    fnLog.log('[getProjectInjects] 对象格式, key:', injectKey, ', varName:', varName);
                                }
                                const hasKey = injectKeysSet.has(injectKey);
                                fnLog.log('[getProjectInjects] 是否已存在:', hasKey);
                                if (!hasKey) {
                                    if (varName) {
                                        fnLog.log('[getProjectInjects] 添加新inject(数组格式)');
                                        injectsArray.push([
                                            injectKey,
                                            varName
                                        ]);
                                    } else {
                                        fnLog.log('[getProjectInjects] 添加新inject(字符串格式)');
                                        injectsArray.push(injectKey);
                                    }
                                    injectKeysSet.add(injectKey);
                                }
                            }
                        }
                    }
                }
            }
        }
    }
    fnLog.log('[getProjectInjects] 注入配置获取完成, 总数:', injectsArray.length);
    return injectsArray;
}
/**
 * 清理项目中的空 TriggerAction
 * 空 TriggerAction 定义: triggerGroup.children 和 actionGroup.children 都为空
 * @param project 项目数据
 * @returns 被清理的空 TriggerAction 数量
 */ function cleanEmptyTriggerActions(project) {
    const fnLog = projectUtils_fileLog.sub(false, 'cleanEmptyTriggerActions_fn');
    fnLog.pause = false;
    fnLog.log('[cleanEmptyTriggerActions] 开始清理空 TriggerAction');
    if (!project.children || project.children.length === 0) {
        fnLog.log('[cleanEmptyTriggerActions] project.children 不存在或为空,跳过清理');
        return 0;
    }
    fnLog.log('[cleanEmptyTriggerActions] project.children.length:', project.children.length);
    let totalRemovedCount = 0;
    // 循环所有 triggerActionGroup
    for(let g = 0; g < project.children.length; g++){
        const triggerActionGroup = project.children[g];
        fnLog.log('[cleanEmptyTriggerActions] 处理 triggerActionGroup[', g, '], ulid:', triggerActionGroup.ulid);
        const triggerActionChildren = triggerActionGroup.children;
        if (!triggerActionChildren) {
            fnLog.log('[cleanEmptyTriggerActions] triggerActionGroup[', g, '].children 不存在,跳过');
            continue;
        }
        // 记录清理前的数量
        const originalCount = triggerActionChildren.length;
        fnLog.log('[cleanEmptyTriggerActions] 清理前 TriggerAction 数量:', originalCount);
        // 过滤空的 triggerAction
        fnLog.log('[cleanEmptyTriggerActions] 开始过滤');
        const filteredList = triggerActionChildren.filter((triggerAction, index)=>{
            fnLog.log('[cleanEmptyTriggerActions] 检查 triggerAction[', index, '] ulid:', triggerAction.ulid);
            // 检查 triggerGroup
            const triggerGroup = triggerAction.triggerGroup;
            const hasTriggerGroup = triggerGroup ? true : false;
            fnLog.log('[cleanEmptyTriggerActions] triggerAction[', index, '] triggerGroup 是否存在:', hasTriggerGroup);
            let triggerCount = 0;
            if (triggerGroup && triggerGroup.children) {
                triggerCount = triggerGroup.children.length;
            }
            fnLog.log('[cleanEmptyTriggerActions] triggerAction[', index, '] trigger 数量:', triggerCount);
            // 检查 actionGroup
            const actionGroup = triggerAction.actionGroup;
            const hasActionGroup = actionGroup ? true : false;
            fnLog.log('[cleanEmptyTriggerActions] triggerAction[', index, '] actionGroup 是否存在:', hasActionGroup);
            let actionCount = 0;
            if (actionGroup && actionGroup.children) {
                actionCount = actionGroup.children.length;
            }
            fnLog.log('[cleanEmptyTriggerActions] triggerAction[', index, '] action 数量:', actionCount);
            // 判断是否为空(trigger 和 action 都为空)
            const hasTriggers = triggerCount > 0;
            const hasActions = actionCount > 0;
            fnLog.log('[cleanEmptyTriggerActions] triggerAction[', index, '] hasTriggers:', hasTriggers);
            fnLog.log('[cleanEmptyTriggerActions] triggerAction[', index, '] hasActions:', hasActions);
            // 至少要有 trigger 或 action 之一
            const shouldKeep = hasTriggers || hasActions;
            fnLog.log('[cleanEmptyTriggerActions] triggerAction[', index, '] shouldKeep:', shouldKeep);
            if (!shouldKeep) {
                fnLog.log('[cleanEmptyTriggerActions] 清理空的 triggerAction[', index, '] ulid:', triggerAction.ulid);
            } else {
                fnLog.log('[cleanEmptyTriggerActions] 保留 triggerAction[', index, '] ulid:', triggerAction.ulid);
            }
            return shouldKeep;
        });
        // 更新列表
        fnLog.log('[cleanEmptyTriggerActions] 更新 children');
        triggerActionGroup.children = filteredList;
        fnLog.log('[cleanEmptyTriggerActions] children 已更新，长度:', filteredList.length);
        const removedCount = originalCount - filteredList.length;
        totalRemovedCount += removedCount;
        fnLog.log('[cleanEmptyTriggerActions] triggerActionGroup[', g, '] 清理了', removedCount, '个空 TriggerAction');
    }
    fnLog.log('[cleanEmptyTriggerActions] 总共清理了', totalRemovedCount, '个空 TriggerAction');
    return totalRemovedCount;
}
// ==================== 导出 ====================
const projectUtils = {
    getProjectPermissions,
    getProjectPermissionsData,
    getProjectInjects,
    cleanEmptyTriggerActions
};

;// ../../libs/droid/project-v2-ext/src/utils/index.ts


;// ../../libs/droid/project-v2-ext/src/index.ts
// Init

// Triggers

// Actions

// Trigger-Actions

// Components

// Utils



/***/ }),

/***/ 82964:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   P: () => (/* binding */ ActionOrTriggerListFromEnum),
/* harmony export */   Q: () => (/* binding */ ActionOrTriggerListTypeEnum),
/* harmony export */   x: () => (/* binding */ x)
/* harmony export */ });
function x() {}
var ActionOrTriggerListFromEnum = /*#__PURE__*/ function(ActionOrTriggerListFromEnum) {
    ActionOrTriggerListFromEnum["project"] = "project";
    return ActionOrTriggerListFromEnum;
}({});
var ActionOrTriggerListTypeEnum = /*#__PURE__*/ function(ActionOrTriggerListTypeEnum) {
    ActionOrTriggerListTypeEnum["addAction"] = "add";
    ActionOrTriggerListTypeEnum["updateAction"] = "update";
    return ActionOrTriggerListTypeEnum;
}({});


/***/ }),

/***/ 92289:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   $A: () => (/* binding */ getInjectKeyDescriptionByKey),
/* harmony export */   DC: () => (/* binding */ getAllInjectKeys),
/* harmony export */   Ik: () => (/* binding */ WebViewJsInjectKeys),
/* harmony export */   JB: () => (/* binding */ InjectKeyOptions),
/* harmony export */   TV: () => (/* binding */ AllInjectKeys),
/* harmony export */   gp: () => (/* binding */ RhinoInjectNames),
/* harmony export */   pe: () => (/* binding */ getInjectKeyDescription),
/* harmony export */   rE: () => (/* binding */ isValidInjectKey)
/* harmony export */ });
/* harmony import */ var _fanfanlo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(91628);
/**
 * Rhino 脚本注入常量定义
 * 对应 Android 端的注入对象
 */ 
/**
 * WebView JS 注入对象
 * 来自: com.fanfanlo.lib.components.webview.WebViewJsInjectKeys
 */ const WebViewJsInjectKeysConst = {
    Window: "Window",
    WindowUtils: "WindowUtils",
    webViewJs: "webViewJs",
    console: "console",
    UIThreadUtil: "UIThreadUtil"
};
/**
 * Rhino 脚本注入对象
 * 来自: com.fanfanlo.droidlib.auto.rhino.InjectNames
 */ const RhinoInjectNamesConst = {
    dispatcher: "dispatcher",
    quicker: "quicker",
    javaRunner: "javaRunner",
    proxy: "proxy",
    a11yProxy: "a11yProxy",
    a11yModel: "a11yModel",
    WebViewJsDispatcher: "WebViewJsDispatcher"
};
/**
 * 所有可用的注入对象键名
 */ const AllInjectKeys = {
    ...WebViewJsInjectKeysConst,
    ...RhinoInjectNamesConst
};
/**
 * 向后兼容: 导出 WebViewJsInjectKeys (原enum改为const对象)
 * 使用方式不变: WebViewJsInjectKeys.Window
 */ const WebViewJsInjectKeys = WebViewJsInjectKeysConst;
/**
 * 向后兼容: 导出 RhinoInjectNames (原enum改为const对象)
 * 使用方式不变: RhinoInjectNames.dispatcher
 */ const RhinoInjectNames = RhinoInjectNamesConst;
/**
 * 注入键选项数组 - 用于 select 等 UI 组件
 * 包含分组、键名、值和 i18n key
 */ const InjectKeyOptions = [
    ...Object.keys(WebViewJsInjectKeysConst).map((key)=>({
            group: 'WebViewJsInjectKeys',
            key: key,
            value: WebViewJsInjectKeysConst[key],
            i18nKey: "WebViewJsInjectKeys.".concat(key)
        })),
    ...Object.keys(RhinoInjectNamesConst).map((key)=>({
            group: 'RhinoInjectNames',
            key: key,
            value: RhinoInjectNamesConst[key],
            i18nKey: "RhinoInjectNames.".concat(key)
        }))
];
/**
 * 获取所有注入键名的数组
 */ function getAllInjectKeys() {
    return Object.keys(AllInjectKeys);
}
/**
 * 检查是否是有效的注入键名
 */ function isValidInjectKey(key) {
    return getAllInjectKeys().includes(key);
}
/**
 * 获取注入键的国际化描述
 * @param i18nKey i18n键名,格式为 "WebViewJsInjectKeys.Window" 或 "RhinoInjectNames.dispatcher"
 * @returns 返回对应的国际化描述文本
 * @example
 * const desc = await getInjectKeyDescription('WebViewJsInjectKeys.Window');
 * // 返回: "全局Window,可以派发window的退出事件"
 */ async function getInjectKeyDescription(i18nKey) {
    console.log('getInjectKeyDescription: i18nKey="'.concat(i18nKey, '"'));
    const namespace = 'app-static/project/content';
    console.log('getInjectKeyDescription: namespace="'.concat(namespace, '"'));
    const fullI18nKey = "RhinoInjectKeys.".concat(i18nKey);
    console.log('getInjectKeyDescription: fullI18nKey="'.concat(fullI18nKey, '"'));
    const description = await (0,_fanfanlo__WEBPACK_IMPORTED_MODULE_0__/* .loadI18nValue */ .y)(namespace, fullI18nKey);
    console.log('getInjectKeyDescription: description="'.concat(description, '"'));
    return description;
}
/**
 * 根据 InjectKey 获取对应的国际化描述
 * @param key 注入键名,如 "Window", "dispatcher"
 * @returns 返回对应的国际化描述文本
 * @example
 * const desc = await getInjectKeyDescriptionByKey('Window');
 * // 返回: "全局Window,可以派发window的退出事件"
 */ async function getInjectKeyDescriptionByKey(key) {
    console.log('getInjectKeyDescriptionByKey: key="'.concat(key, '"'));
    const option = InjectKeyOptions.find((opt)=>opt.key === key);
    console.log("getInjectKeyDescriptionByKey: option=".concat(JSON.stringify(option)));
    if (!option) {
        console.error('getInjectKeyDescriptionByKey error: key="'.concat(key, '" not found in InjectKeyOptions'));
        return '';
    }
    const description = await getInjectKeyDescription(option.i18nKey);
    console.log('getInjectKeyDescriptionByKey: description="'.concat(description, '"'));
    return description;
}


/***/ }),

/***/ 94820:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   U: () => (/* binding */ appPackagesStoreV2)
/* harmony export */ });
/* harmony import */ var _fanfanlo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(89597);
/* harmony import */ var _fanfanlo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(57641);
/* harmony import */ var _fanfanlo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(55507);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(80507);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);


const fileLog = new _fanfanlo__WEBPACK_IMPORTED_MODULE_1__/* .Log */ .tG(false, 'app-packages-store-v2');
// fileLog.pause = true;
// fileLog.childrenPaused = true;
const data = (0,_fanfanlo__WEBPACK_IMPORTED_MODULE_2__/* .toProxy */ .I$)({
    list: []
});
let indexedDbStore = null;
let isInitialized = false;
async function init() {
    const fnLog = fileLog.sub(false, 'init_fn');
    // fnLog.pause = true;
    // fnLog.childrenPaused = true;
    if (isInitialized) {
        fnLog.log('already initialized');
        return;
    }
    try {
        indexedDbStore = await _fanfanlo__WEBPACK_IMPORTED_MODULE_3__/* .indexedDbUtils */ .d.getIndexedDbStore('app-packages-v2', {
            defData: {
                list: []
            },
            mergeDefData: false
        });
        const storedList = indexedDbStore.data.list;
        if (storedList && lodash__WEBPACK_IMPORTED_MODULE_0___default().isArray(storedList)) {
            data.list = storedList;
        } else {
            data.list = [];
        }
        isInitialized = true;
        fnLog.log('complete, count=' + data.list.length);
    } catch (error) {
        fnLog.error('error=' + JSON.stringify(error));
        data.list = [];
        isInitialized = false;
    }
}
function loadPackages() {
    const fnLog = fileLog.sub(false, 'loadPackages_fn');
    // fnLog.pause = true;
    // fnLog.childrenPaused = true;
    if (!indexedDbStore) {
        fnLog.error('indexedDbStore is null');
        data.list = [];
        return;
    }
    if (!isInitialized) {
        fnLog.error('not initialized');
        data.list = [];
        return;
    }
    const list = indexedDbStore.data.list;
    if (list && lodash__WEBPACK_IMPORTED_MODULE_0___default().isArray(list)) {
        data.list = list;
    } else {
        data.list = [];
    }
    fnLog.log('complete, count=' + data.list.length);
}
function releasePackages() {
    const fnLog = fileLog.sub(false, 'releasePackages_fn');
    // fnLog.pause = true;
    // fnLog.childrenPaused = true;
    fnLog.log('called');
    data.list = [];
}
function savePackages(list) {
    const fnLog = fileLog.sub(false, 'savePackages_fn');
    // fnLog.pause = true;
    // fnLog.childrenPaused = true;
    if (!lodash__WEBPACK_IMPORTED_MODULE_0___default().isArray(list)) {
        fnLog.error('list is not array, list=' + JSON.stringify(list));
        return;
    }
    data.list = list;
    if (!indexedDbStore) {
        fnLog.error('indexedDbStore is null');
        return;
    }
    if (!isInitialized) {
        fnLog.error('not initialized');
        return;
    }
    indexedDbStore.store.write('list', list);
    fnLog.log('complete, count=' + list.length);
}
function findPackageInfoByPackageName(packageName) {
    const fnLog = fileLog.sub(false, 'findPackageInfoByPackageName_fn');
    // fnLog.pause = true;
    // fnLog.childrenPaused = true;
    if (!packageName) {
        fnLog.error('packageName is empty');
        return undefined;
    }
    const result = data.list.find((item)=>item.packageName === packageName);
    if (!result) {
        fnLog.log('not found, packageName=' + packageName + ', listCount=' + data.list.length);
    }
    return result;
}
const appPackagesStoreV2 = {
    data,
    init,
    loadPackages,
    releasePackages,
    savePackages,
    findPackageInfoByPackageName
};


/***/ }),

/***/ 99949:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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

}]);
//# sourceMappingURL=4245-fe8d7f22aa929d2f.js.map