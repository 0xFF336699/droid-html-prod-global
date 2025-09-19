(self["webpackChunk_N_E"] = self["webpackChunk_N_E"] || []).push([[9313],{

/***/ 2454:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   q: () => (/* binding */ windowUtils)
/* harmony export */ });
/* harmony import */ var _AutoWebViewJs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(45921);

async function exitWindowById(id) {
    const script = 'var bl = com.fanfanlo.lib.components.floatview.floatwindow.WindowUtils.exitById("'.concat(id, '", "");\n bl;');
    console.log('exitWindowById_fn called', id, script);
    return _AutoWebViewJs__WEBPACK_IMPORTED_MODULE_0__/* .autoWebViewJs */ .yx.callScript(script);
}
const windowUtils = {
    exitWindowById
};


/***/ }),

/***/ 2621:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  J: () => (/* binding */ initTriggerListGroups),
  R: () => (/* binding */ triggerListGroups)
});

// EXTERNAL MODULE: ../../libs/app/static/src/pages/trigger-list-action-list-common/common.ts
var common = __webpack_require__(24899);
// EXTERNAL MODULE: ../../libs/droid/project-interface/src/common/trigger-list-action-list-intf.ts
var trigger_list_action_list_intf = __webpack_require__(37416);
// EXTERNAL MODULE: __barrel_optimize__?names=ulid!=!../../node_modules/.pnpm/ulid@2.4.0/node_modules/ulid/dist/index.esm.js + 1 modules
var index_esm = __webpack_require__(67131);
// EXTERNAL MODULE: ../../libs/droid/project-interface/src/trigger/ITrigger.intf.tsx
var ITrigger_intf = __webpack_require__(14438);
// EXTERNAL MODULE: ../../libs/droid/project-interface/src/core/namespace.ts
var namespace = __webpack_require__(90418);
;// ../../libs/droid/project-interface/src/triggers/triggers-namespace.ts

const triggersNamespace = "".concat(namespace/* projectNamespace */.D, "triggers/");

;// ../../libs/droid/project-interface/src/triggers/time/time-namespace.ts

const timeNamespace = "".concat(triggersNamespace, "time/");

// EXTERNAL MODULE: ../../node_modules/.pnpm/react@19.1.0/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(94513);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react-i18next@15.6.0_i18next@24.2.3_typescript@5.7.3__react-dom@19.1.0_react@19.1.0__react@19.1.0_typescript@5.7.3/node_modules/react-i18next/dist/es/index.js + 15 modules
var es = __webpack_require__(50279);
// EXTERNAL MODULE: ../../libs/fanfanlo/src/watcher/useProxyWatch.ts
var useProxyWatch = __webpack_require__(45007);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/Box/Box.js + 2 modules
var Box = __webpack_require__(6445);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/Grid2/Grid2.js + 4 modules
var Grid2 = __webpack_require__(95771);
;// ../../libs/droid/project-interface/src/triggers/time/timeout/UI.tsx



function UI(data) {
    const { t } = (0,es/* useTranslation */.Bd)('droid-project-interface/triggers/time/timeout/content');
    const [timeout] = (0,useProxyWatch/* useProxyWatch */.x)(data, 'javaData.timeout', data.javaData.timeout);
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(jsx_runtime.Fragment, {
        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.A, {
            sx: {
                width: '100%'
            },
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.A, {
                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)("b", {
                        children: t('ITriggerTimeout.title')
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
                                    children: t('ITriggerTimeout.content_delay')
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)("input", {
                                        id: "trigger-timeout-value-input",
                                        "data-id": "trigger-timeout-value-input",
                                        type: "number",
                                        value: timeout,
                                        onChange: (e)=>data.javaData.timeout = Number(e.target.value)
                                    })
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                    children: t('ITriggerTimeout.content_milliseconds')
                                })
                            ]
                        })
                    })
                })
            ]
        })
    });
}

;// ../../libs/droid/project-interface/src/triggers/time/timeout/ITriggerTimeout.inft.ts




const type = "".concat(timeNamespace, "timeout");
function createDefultData() {
    return {
        id: (0,index_esm/* ulid */.Z0)(),
        type,
        javaData: {
            timeout: 0
        }
    };
}
function init() {}
const triggerTimeoutUtils = (0,ITrigger_intf/* createTriggerUtils */.Cq)(type, init, createDefultData, UI);

// EXTERNAL MODULE: ../../libs/droid/project-interface/src/core/project-member-type.ts
var project_member_type = __webpack_require__(27880);
// EXTERNAL MODULE: ../../libs/droid/project-interface/src/events/projectEventUtils.ts
var projectEventUtils = __webpack_require__(6659);
// EXTERNAL MODULE: ../../libs/fanfanlo/src/utils/throw-trace-error.ts
var throw_trace_error = __webpack_require__(94429);
// EXTERNAL MODULE: ./src/components/trigger-list-action-list-common/ITriggerList-IActionList-common.intf.tsx
var ITriggerList_IActionList_common_intf = __webpack_require__(93579);
;// ./src/components/page/trigger-list/groups/time/timeout/timeout.tsx





const timeoutTriggerItem = {
    id: "timeout-trigger-item-ce8c",
    i18nNs: "homepage/components/page/trigger-list/groups/time/timeout/content",
    nameKey: "content.name",
    group: "timeoutTriggerItem.group",
    descriptionKey: "content.description",
    type: "trigger",
    LinkRender: (0,ITriggerList_IActionList_common_intf/* createActionOrTriggerButtonRender */.cI)(onSelect)
};
function onSelect(param) {
    let { query, item } = param;
    const res = (0,trigger_list_action_list_intf/* getTriggerOrActionListPageParams */.JT)(query);
    switch(query.type){
        case common/* ActionOrTriggerListTypeEnum */.Q.addAction:
            const trigger = triggerTimeoutUtils.createDefultData();
            if (!res.data.triggerGroup) {
                return (0,throw_trace_error/* throwTraceError */.w)('triggerGroup is not found', query);
            }
            projectEventUtils/* projectEventUtils */.T.dispatchEditEvent(projectEventUtils/* projectEventUtils */.T.EditType.add, {
                projectMemberType: project_member_type/* ProjectMemberType */.K.triggerGroup,
                data: trigger,
                projectInfo: res.data
            });
            // res.data.triggerGroup.list.push(trigger)
            // router.back()
            window.history.back();
            break;
        case common/* ActionOrTriggerListTypeEnum */.Q.updateAction:
            break;
    }
}

;// ./src/components/page/trigger-list/groups/time/time-group.ts

const timeGroup = {
    i18nNs: "homepage/components/page/trigger-list/groups/time/content",
    nameKey: "content.name",
    descriptionKey: "content.description",
    items: [
        timeoutTriggerItem
    ]
};

// EXTERNAL MODULE: ../../libs/droid/android/src/android/is-in-android.ts
var is_in_android = __webpack_require__(63149);
// EXTERNAL MODULE: ../../libs/droid/android/src/htmls/PnAnInfoWindow.ts + 1 modules
var PnAnInfoWindow = __webpack_require__(76105);
// EXTERNAL MODULE: ../../libs/droid/android/src/android/AutoWebViewJs.ts + 1 modules
var AutoWebViewJs = __webpack_require__(45921);
;// ../../libs/droid/project-interface/src/triggers/app/app-namespace.ts

const appNamespace = "".concat(triggersNamespace, "app/");

// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/Stack/Stack.js + 1 modules
var Stack = __webpack_require__(9220);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/Button/Button.js + 3 modules
var Button = __webpack_require__(28669);
// EXTERNAL MODULE: ../../node_modules/.pnpm/next@15.3.5_@babel+core@7.28.0_babel-plugin-macros@3.1.0_react-dom@19.1.0_react@19.1.0__react@19.1.0_sass@1.89.2/node_modules/next/router.js
var next_router = __webpack_require__(75640);
// EXTERNAL MODULE: ../../libs/droid/project-interface/src/utils/IChildToProject.intf.ts
var IChildToProject_intf = __webpack_require__(14209);
;// ../../libs/droid/project-interface/src/triggers/app/when-activity-in/UI.tsx







function UI_UI(data) {
    const { t } = (0,es/* useTranslation */.Bd)('droid-project-interface/triggers/app/when-activity-in/content');
    const router = (0,next_router.useRouter)();
    const backPath = router.pathname;
    const [pn] = (0,useProxyWatch/* useProxyWatch */.x)(data, "javaData.pn", data.javaData.pn);
    const [an] = (0,useProxyWatch/* useProxyWatch */.x)(data, "javaData.an", data.javaData.an);
    const [cn] = (0,useProxyWatch/* useProxyWatch */.x)(data, "javaData.cn", data.javaData.cn);
    function onChangeClick() {
        var _projectInfo_project, _projectInfo_triggerActionGroup, _projectInfo_triggerAction, _projectInfo_triggerGroup, _projectInfo_project1, _projectInfo_triggerActionGroup1, _projectInfo_triggerAction1, _projectInfo_triggerGroup1, _triggerWhenActivityInUtils_onClickChange;
        const projectInfo = {};
        IChildToProject_intf/* childToProjectDataUtils */.mR.triggerList.getTriggerListByProp(data, projectInfo);
        if (!((_projectInfo_project = projectInfo.project) === null || _projectInfo_project === void 0 ? void 0 : _projectInfo_project.id) || !((_projectInfo_triggerActionGroup = projectInfo.triggerActionGroup) === null || _projectInfo_triggerActionGroup === void 0 ? void 0 : _projectInfo_triggerActionGroup.id) || !((_projectInfo_triggerAction = projectInfo.triggerAction) === null || _projectInfo_triggerAction === void 0 ? void 0 : _projectInfo_triggerAction.id) || !((_projectInfo_triggerGroup = projectInfo.triggerGroup) === null || _projectInfo_triggerGroup === void 0 ? void 0 : _projectInfo_triggerGroup.id)) {
            console.error('UpdateAppLink projectInfo is undefined', projectInfo);
            return;
        }
        const query = {
            backPath,
            projectId: (_projectInfo_project1 = projectInfo.project) === null || _projectInfo_project1 === void 0 ? void 0 : _projectInfo_project1.id,
            triggerActionGroupId: (_projectInfo_triggerActionGroup1 = projectInfo.triggerActionGroup) === null || _projectInfo_triggerActionGroup1 === void 0 ? void 0 : _projectInfo_triggerActionGroup1.id,
            triggerActionId: (_projectInfo_triggerAction1 = projectInfo.triggerAction) === null || _projectInfo_triggerAction1 === void 0 ? void 0 : _projectInfo_triggerAction1.id,
            triggerGroupId: (_projectInfo_triggerGroup1 = projectInfo.triggerGroup) === null || _projectInfo_triggerGroup1 === void 0 ? void 0 : _projectInfo_triggerGroup1.id,
            type: common/* ActionOrTriggerListTypeEnum */.Q.updateAction,
            triggerId: data.id,
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
                        children: t('content.title')
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
                                                children: t('content.pnLabel')
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                                children: pn
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.A, {
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                                children: t('content.anLabel')
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                                children: an
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.A, {
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                                children: t('content.cnLabel')
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
                                onClick: onChangeClick,
                                children: /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                    children: t('content.changeBtnLabel')
                                })
                            })
                        })
                    ]
                })
            ]
        })
    });
}

;// ../../libs/droid/project-interface/src/triggers/app/when-activity-in/ITriggerWhenActivityIn.ts




const ITriggerWhenActivityIn_type = "".concat(appNamespace, "when-activity-in");
function ITriggerWhenActivityIn_createDefultData() {
    return {
        id: (0,index_esm/* ulid */.Z0)(),
        type: ITriggerWhenActivityIn_type,
        javaData: {
            pn: "",
            an: "",
            cn: ""
        }
    };
}
function ITriggerWhenActivityIn_init() {}
const triggerWhenActivityInUtils = (0,ITrigger_intf/* createTriggerUtils */.Cq)(ITriggerWhenActivityIn_type, ITriggerWhenActivityIn_init, ITriggerWhenActivityIn_createDefultData, UI_UI);

// EXTERNAL MODULE: ../../libs/fanfanlo/src/utils/stringUtils.ts
var stringUtils = __webpack_require__(29192);
;// ./src/components/page/trigger-list/groups/app/activity/activity-in.tsx






const activityInItem = {
    id: "activity-in-item-ce8c",
    i18nNs: "homepage/components/page/trigger-list/groups/app/activity/content",
    nameKey: "content.name",
    group: "activityInItem.group",
    descriptionKey: "content.description",
    type: "trigger",
    LinkRender: (0,ITriggerList_IActionList_common_intf/* createActionOrTriggerButtonRender */.cI)(onAddSelect)
};
triggerWhenActivityInUtils.onClickChange = onChangeSelect;
// async function onSelect({query, item}:{query:IActionOrTriggerListPageParams, item:IActionOrTriggerItem}){
//     const res = getTriggerOrActionListPageParams(query)
//     let info:PnAnResultData ;
//     if(isRealInAndroid){
//         info = await openPnAnInfoWindow()
//     }else{
//         info = {
//             pn:`${createRandomEnglishCharacters(Math.floor(Math.random() * 5) + 5)}.${createRandomEnglishCharacters(Math.floor(Math.random() * 5) + 5)}.${createRandomEnglishCharacters(Math.floor(Math.random() * 5) + 5)}`,
//             an:createRandomEnglishCharacters(Math.floor(Math.random() * 5) + 5)
//         }
//     }
//     console.log('info=', info)
//     const trigger = triggerWhenActivityInUtils.mergeDataToDefultData({javaData:{pn:info.pn, an:info.an, cn:info.cn}})
//     projectEventUtils.dispatchEditEvent(projectEventUtils.EditType.add,{
//         data:trigger,
//         projectMemberType:ProjectMemberType.triggerGroup,
//         projectInfo:res.data
//     })
//     window.history.back()
// }
async function activity_in_onSelect() {
    let info;
    if (is_in_android/* isRealInAndroid */.nd) {
        info = await (0,PnAnInfoWindow/* openPnAnInfoWindow */.U)(true);
    } else {
        info = {
            pn: "".concat((0,stringUtils/* createRandomEnglishCharacters */.g0)(Math.floor(Math.random() * 5) + 5), ".").concat((0,stringUtils/* createRandomEnglishCharacters */.g0)(Math.floor(Math.random() * 5) + 5), ".").concat((0,stringUtils/* createRandomEnglishCharacters */.g0)(Math.floor(Math.random() * 5) + 5)),
            an: (0,stringUtils/* createRandomEnglishCharacters */.g0)(Math.floor(Math.random() * 5) + 5),
            cn: (0,stringUtils/* createRandomEnglishCharacters */.g0)(Math.floor(Math.random() * 5) + 5)
        };
    }
    // console.log('info1=', info)
    return info;
}
async function onAddSelect(param) {
    let { query } = param;
    const info = await activity_in_onSelect();
    const res = (0,trigger_list_action_list_intf/* getTriggerOrActionListPageParams */.JT)(query);
    const action = triggerWhenActivityInUtils.mergeDataToDefultData({
        javaData: {
            pn: info.pn,
            an: info.an,
            cn: info.cn
        }
    });
    projectEventUtils/* projectEventUtils */.T.dispatchEditEvent(projectEventUtils/* projectEventUtils */.T.EditType.add, {
        data: action,
        projectMemberType: project_member_type/* ProjectMemberType */.K.triggerGroup,
        projectInfo: res.data
    });
    console.log('ccccccccccccccall open self');
    AutoWebViewJs/* autoWebViewJs */.yx.openSelfByPackage();
    window.history.back();
}
async function onChangeSelect(param) {
    let { query } = param;
    const info = await activity_in_onSelect();
    const res = (0,trigger_list_action_list_intf/* getTriggerOrActionListPageParams */.JT)(query);
    projectEventUtils/* projectEventUtils */.T.dispatchEditEvent(projectEventUtils/* projectEventUtils */.T.EditType.updateJavaData, {
        data: info,
        projectMemberType: project_member_type/* ProjectMemberType */.K.trigger,
        projectInfo: res.data
    });
    AutoWebViewJs/* autoWebViewJs */.yx.openSelfByPackage();
}

;// ./src/components/page/trigger-list/groups/app/app-group.ts

const appGroup = {
    i18nNs: "homepage/components/page/trigger-list/groups/app/content",
    nameKey: "content.name",
    descriptionKey: "content.description",
    items: [
        activityInItem
    ]
};

;// ./src/components/page/trigger-list/trigger.data.ts


const triggerListGroups = [
    timeGroup,
    appGroup
];
async function initTriggerListGroups() {
    triggerListGroups;
}


/***/ }),

/***/ 6659:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   T: () => (/* binding */ projectEventUtils)
/* harmony export */ });
/* harmony import */ var _fanfanlo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(82727);
/* harmony import */ var _fanfanlo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(94429);
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(27880);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(63624);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);



const dispatcher = new _fanfanlo__WEBPACK_IMPORTED_MODULE_1__/* .Dispatcher */ .m();
var EditType = /*#__PURE__*/ function(EditType) {
    EditType["add"] = "add";
    EditType["updateJavaData"] = "updateJavaData";
    EditType["updateShellData"] = "updateShellData";
    return EditType;
}(EditType || {});
function dispatchEditEvent(editType, event) {
    // console.log('dispatchEditEvent', editType, event)
    dispatcher.dispatch(editType, event);
}
function onEditJavaData(event) {
    // console.log('on edit java data', event)
    switch(event.projectMemberType){
        case _core__WEBPACK_IMPORTED_MODULE_2__/* .ProjectMemberType */ .K.action:
            onActionEdit("updateJavaData", event);
            break;
        case _core__WEBPACK_IMPORTED_MODULE_2__/* .ProjectMemberType */ .K.trigger:
            onTriggerEdit("updateJavaData", event);
            break;
        default:
            {
                const msg = "on edit java data unknow event type ".concat(event.projectMemberType);
                (0,_fanfanlo__WEBPACK_IMPORTED_MODULE_3__/* .throwTraceError */ .w)(msg, event);
            }
    }
}
function onTriggerEdit(editType, event) {
    var _event_projectInfo;
    // console.log('on trigger edit', event)
    const trigger = (_event_projectInfo = event.projectInfo) === null || _event_projectInfo === void 0 ? void 0 : _event_projectInfo.trigger;
    if (!trigger) {
        const msg = "no trigger when edit trigger java data";
        return (0,_fanfanlo__WEBPACK_IMPORTED_MODULE_3__/* .throwTraceError */ .w)(msg, event);
    }
    switch(editType){
        case "updateJavaData":
            // console.log('before merge', trigger.javaData)
            lodash__WEBPACK_IMPORTED_MODULE_0___default().merge(trigger.javaData, event.data);
            break;
        case "updateShellData":
            lodash__WEBPACK_IMPORTED_MODULE_0___default().merge(trigger.shellData, event.data);
            break;
        default:
            {
                const msg = "on trigger edit unknow event type ".concat(event.editType);
                (0,_fanfanlo__WEBPACK_IMPORTED_MODULE_3__/* .throwTraceError */ .w)(msg, event);
            }
    }
}
function onActionEdit(editType, event) {
    var _event_projectInfo;
    console.log('on action edit', event);
    const action = (_event_projectInfo = event.projectInfo) === null || _event_projectInfo === void 0 ? void 0 : _event_projectInfo.action;
    if (!action) {
        const msg = "no action when edit action java data";
        return (0,_fanfanlo__WEBPACK_IMPORTED_MODULE_3__/* .throwTraceError */ .w)(msg, event);
    }
    switch(editType){
        case "updateJavaData":
            console.log('before merge', JSON.parse(JSON.stringify(action.javaData)));
            lodash__WEBPACK_IMPORTED_MODULE_0___default().merge(action.javaData, event.data);
            console.log('after merge', JSON.parse(JSON.stringify(action.javaData)));
            break;
        case "updateShellData":
            lodash__WEBPACK_IMPORTED_MODULE_0___default().merge(action.shellData, event.data);
            break;
        default:
            {
                const msg = "on action edit unknow event type ".concat(event.editType);
                (0,_fanfanlo__WEBPACK_IMPORTED_MODULE_3__/* .throwTraceError */ .w)(msg, event);
            }
    }
}
function onAdd(event) {
    switch(event.projectMemberType){
        case _core__WEBPACK_IMPORTED_MODULE_2__/* .ProjectMemberType */ .K.actionGroup:
            onActionGroupAdd(event);
            break;
        case _core__WEBPACK_IMPORTED_MODULE_2__/* .ProjectMemberType */ .K.triggerGroup:
            onTriggerGroupAdd(event);
            break;
    }
}
function onTriggerGroupAdd(event) {
    var _event_projectInfo;
    const group = (_event_projectInfo = event.projectInfo) === null || _event_projectInfo === void 0 ? void 0 : _event_projectInfo.triggerGroup;
    if (!group) {
        const msg = "no trigger group when edit action group add";
        return (0,_fanfanlo__WEBPACK_IMPORTED_MODULE_3__/* .throwTraceError */ .w)(msg, event);
    }
    group.list.push(event.data);
}
function onActionGroupAdd(event) {
    var _event_projectInfo;
    const group = (_event_projectInfo = event.projectInfo) === null || _event_projectInfo === void 0 ? void 0 : _event_projectInfo.actionGroup;
    if (!group) {
        const msg = "no action group when edit action group add";
        return (0,_fanfanlo__WEBPACK_IMPORTED_MODULE_3__/* .throwTraceError */ .w)(msg, event);
    }
    group.list.push(event.data);
}
function init() {
    dispatcher.addListener("updateJavaData", onEditJavaData);
    dispatcher.addListener("add", onAdd);
}
const projectEventUtils = {
    init,
    dispatcher,
    dispatchEditEvent,
    EditType
};


/***/ }),

/***/ 9220:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ Stack_Stack)
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/react@19.1.0/node_modules/react/index.js
var react = __webpack_require__(94285);
// EXTERNAL MODULE: ../../node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs
var clsx = __webpack_require__(3638);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+utils@6.4.9_@types+react@19.1.8_react@19.1.0/node_modules/@mui/utils/esm/deepmerge/deepmerge.js
var deepmerge = __webpack_require__(33186);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+utils@6.4.9_@types+react@19.1.8_react@19.1.0/node_modules/@mui/utils/esm/generateUtilityClass/generateUtilityClass.js
var generateUtilityClass = __webpack_require__(69014);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+utils@6.4.9_@types+react@19.1.8_react@19.1.0/node_modules/@mui/utils/esm/composeClasses/composeClasses.js
var composeClasses = __webpack_require__(95116);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+system@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled@1_sfs2vjcbuqchwdpqpmkla22opm/node_modules/@mui/system/esm/styled/styled.js
var styled = __webpack_require__(17933);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+system@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled@1_sfs2vjcbuqchwdpqpmkla22opm/node_modules/@mui/system/esm/useThemeProps/useThemeProps.js + 1 modules
var useThemeProps = __webpack_require__(45375);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+system@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled@1_sfs2vjcbuqchwdpqpmkla22opm/node_modules/@mui/system/esm/styleFunctionSx/extendSxProp.js
var extendSxProp = __webpack_require__(82603);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+system@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled@1_sfs2vjcbuqchwdpqpmkla22opm/node_modules/@mui/system/esm/createTheme/createTheme.js + 3 modules
var createTheme = __webpack_require__(43270);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+system@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled@1_sfs2vjcbuqchwdpqpmkla22opm/node_modules/@mui/system/esm/breakpoints/breakpoints.js
var breakpoints = __webpack_require__(64489);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+system@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled@1_sfs2vjcbuqchwdpqpmkla22opm/node_modules/@mui/system/esm/spacing/spacing.js + 1 modules
var spacing = __webpack_require__(35623);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react@19.1.0/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(94513);
;// ../../node_modules/.pnpm/@mui+system@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled@1_sfs2vjcbuqchwdpqpmkla22opm/node_modules/@mui/system/esm/Stack/createStack.js













const defaultTheme = (0,createTheme/* default */.A)();
// widening Theme to any so that the consumer can own the theme structure.
const defaultCreateStyledComponent = (0,styled/* default */.A)('div', {
  name: 'MuiStack',
  slot: 'Root',
  overridesResolver: (props, styles) => styles.root
});
function useThemePropsDefault(props) {
  return (0,useThemeProps/* default */.A)({
    props,
    name: 'MuiStack',
    defaultTheme
  });
}

/**
 * Return an array with the separator React element interspersed between
 * each React node of the input children.
 *
 * > joinChildren([1,2,3], 0)
 * [1,0,2,0,3]
 */
function joinChildren(children, separator) {
  const childrenArray = react.Children.toArray(children).filter(Boolean);
  return childrenArray.reduce((output, child, index) => {
    output.push(child);
    if (index < childrenArray.length - 1) {
      output.push(/*#__PURE__*/react.cloneElement(separator, {
        key: `separator-${index}`
      }));
    }
    return output;
  }, []);
}
const getSideFromDirection = direction => {
  return {
    row: 'Left',
    'row-reverse': 'Right',
    column: 'Top',
    'column-reverse': 'Bottom'
  }[direction];
};
const style = ({
  ownerState,
  theme
}) => {
  let styles = {
    display: 'flex',
    flexDirection: 'column',
    ...(0,breakpoints/* handleBreakpoints */.NI)({
      theme
    }, (0,breakpoints/* resolveBreakpointValues */.kW)({
      values: ownerState.direction,
      breakpoints: theme.breakpoints.values
    }), propValue => ({
      flexDirection: propValue
    }))
  };
  if (ownerState.spacing) {
    const transformer = (0,spacing/* createUnarySpacing */.LX)(theme);
    const base = Object.keys(theme.breakpoints.values).reduce((acc, breakpoint) => {
      if (typeof ownerState.spacing === 'object' && ownerState.spacing[breakpoint] != null || typeof ownerState.direction === 'object' && ownerState.direction[breakpoint] != null) {
        acc[breakpoint] = true;
      }
      return acc;
    }, {});
    const directionValues = (0,breakpoints/* resolveBreakpointValues */.kW)({
      values: ownerState.direction,
      base
    });
    const spacingValues = (0,breakpoints/* resolveBreakpointValues */.kW)({
      values: ownerState.spacing,
      base
    });
    if (typeof directionValues === 'object') {
      Object.keys(directionValues).forEach((breakpoint, index, breakpoints) => {
        const directionValue = directionValues[breakpoint];
        if (!directionValue) {
          const previousDirectionValue = index > 0 ? directionValues[breakpoints[index - 1]] : 'column';
          directionValues[breakpoint] = previousDirectionValue;
        }
      });
    }
    const styleFromPropValue = (propValue, breakpoint) => {
      if (ownerState.useFlexGap) {
        return {
          gap: (0,spacing/* getValue */._W)(transformer, propValue)
        };
      }
      return {
        // The useFlexGap={false} implement relies on each child to give up control of the margin.
        // We need to reset the margin to avoid double spacing.
        '& > :not(style):not(style)': {
          margin: 0
        },
        '& > :not(style) ~ :not(style)': {
          [`margin${getSideFromDirection(breakpoint ? directionValues[breakpoint] : ownerState.direction)}`]: (0,spacing/* getValue */._W)(transformer, propValue)
        }
      };
    };
    styles = (0,deepmerge/* default */.A)(styles, (0,breakpoints/* handleBreakpoints */.NI)({
      theme
    }, spacingValues, styleFromPropValue));
  }
  styles = (0,breakpoints/* mergeBreakpointsInOrder */.iZ)(theme.breakpoints, styles);
  return styles;
};
function createStack(options = {}) {
  const {
    // This will allow adding custom styled fn (for example for custom sx style function)
    createStyledComponent = defaultCreateStyledComponent,
    useThemeProps = useThemePropsDefault,
    componentName = 'MuiStack'
  } = options;
  const useUtilityClasses = () => {
    const slots = {
      root: ['root']
    };
    return (0,composeClasses/* default */.A)(slots, slot => (0,generateUtilityClass/* default */.Ay)(componentName, slot), {});
  };
  const StackRoot = createStyledComponent(style);
  const Stack = /*#__PURE__*/react.forwardRef(function Grid(inProps, ref) {
    const themeProps = useThemeProps(inProps);
    const props = (0,extendSxProp/* default */.A)(themeProps); // `color` type conflicts with html color attribute.
    const {
      component = 'div',
      direction = 'column',
      spacing = 0,
      divider,
      children,
      className,
      useFlexGap = false,
      ...other
    } = props;
    const ownerState = {
      direction,
      spacing,
      useFlexGap
    };
    const classes = useUtilityClasses();
    return /*#__PURE__*/(0,jsx_runtime.jsx)(StackRoot, {
      as: component,
      ownerState: ownerState,
      ref: ref,
      className: (0,clsx/* default */.A)(classes.root, className),
      ...other,
      children: divider ? joinChildren(children, divider) : children
    });
  });
   false ? 0 : void 0;
  return Stack;
}
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/styles/styled.js
var styles_styled = __webpack_require__(64624);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/DefaultPropsProvider/DefaultPropsProvider.js
var DefaultPropsProvider = __webpack_require__(79209);
;// ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/Stack/Stack.js
/* __next_internal_client_entry_do_not_use__ default auto */ 



const Stack = createStack({
    createStyledComponent: (0,styles_styled/* default */.Ay)('div', {
        name: 'MuiStack',
        slot: 'Root',
        overridesResolver: (props, styles)=>styles.root
    }),
    useThemeProps: (inProps)=>(0,DefaultPropsProvider/* useDefaultProps */.b)({
            props: inProps,
            name: 'MuiStack'
        })
});
 false ? 0 : void 0;
/* harmony default export */ const Stack_Stack = (Stack);


/***/ }),

/***/ 12006:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  ei: () => (/* binding */ isIP)
});

// UNUSED EXPORTS: ipVersion, isIPv4, isIPv6

;// ../../node_modules/.pnpm/ip-regex@5.0.0/node_modules/ip-regex/index.js
const word = '[a-fA-F\\d:]';

const boundry = options => options && options.includeBoundaries
	? `(?:(?<=\\s|^)(?=${word})|(?<=${word})(?=\\s|$))`
	: '';

const v4 = '(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)(?:\\.(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)){3}';

const v6segment = '[a-fA-F\\d]{1,4}';

const v6 = `
(?:
(?:${v6segment}:){7}(?:${v6segment}|:)|                                    // 1:2:3:4:5:6:7::  1:2:3:4:5:6:7:8
(?:${v6segment}:){6}(?:${v4}|:${v6segment}|:)|                             // 1:2:3:4:5:6::    1:2:3:4:5:6::8   1:2:3:4:5:6::8  1:2:3:4:5:6::1.2.3.4
(?:${v6segment}:){5}(?::${v4}|(?::${v6segment}){1,2}|:)|                   // 1:2:3:4:5::      1:2:3:4:5::7:8   1:2:3:4:5::8    1:2:3:4:5::7:1.2.3.4
(?:${v6segment}:){4}(?:(?::${v6segment}){0,1}:${v4}|(?::${v6segment}){1,3}|:)| // 1:2:3:4::        1:2:3:4::6:7:8   1:2:3:4::8      1:2:3:4::6:7:1.2.3.4
(?:${v6segment}:){3}(?:(?::${v6segment}){0,2}:${v4}|(?::${v6segment}){1,4}|:)| // 1:2:3::          1:2:3::5:6:7:8   1:2:3::8        1:2:3::5:6:7:1.2.3.4
(?:${v6segment}:){2}(?:(?::${v6segment}){0,3}:${v4}|(?::${v6segment}){1,5}|:)| // 1:2::            1:2::4:5:6:7:8   1:2::8          1:2::4:5:6:7:1.2.3.4
(?:${v6segment}:){1}(?:(?::${v6segment}){0,4}:${v4}|(?::${v6segment}){1,6}|:)| // 1::              1::3:4:5:6:7:8   1::8            1::3:4:5:6:7:1.2.3.4
(?::(?:(?::${v6segment}){0,5}:${v4}|(?::${v6segment}){1,7}|:))             // ::2:3:4:5:6:7:8  ::2:3:4:5:6:7:8  ::8             ::1.2.3.4
)(?:%[0-9a-zA-Z]{1,})?                                             // %eth0            %1
`.replace(/\s*\/\/.*$/gm, '').replace(/\n/g, '').trim();

// Pre-compile only the exact regexes because adding a global flag make regexes stateful
const v46Exact = new RegExp(`(?:^${v4}$)|(?:^${v6}$)`);
const v4exact = new RegExp(`^${v4}$`);
const v6exact = new RegExp(`^${v6}$`);

const ip_regex_ipRegex = options => options && options.exact
	? v46Exact
	: new RegExp(`(?:${boundry(options)}${v4}${boundry(options)})|(?:${boundry(options)}${v6}${boundry(options)})`, 'g');

ip_regex_ipRegex.v4 = options => options && options.exact ? v4exact : new RegExp(`${boundry(options)}${v4}${boundry(options)}`, 'g');
ip_regex_ipRegex.v6 = options => options && options.exact ? v6exact : new RegExp(`${boundry(options)}${v6}${boundry(options)}`, 'g');

/* harmony default export */ const ip_regex = (ip_regex_ipRegex);

;// ../../node_modules/.pnpm/function-timeout@0.1.1/node_modules/function-timeout/browser.js
// Even though the browser version is a no-op, we wrap it to ensure consistent behavior.
function browser_functionTimeout(function_) {
	const wrappedFunction = (...arguments_) => function_(...arguments_);

	Object.defineProperty(wrappedFunction, 'name', {
		value: `functionTimeout(${function_.name || '<anonymous>'})`,
		configurable: true,
	});

	return wrappedFunction;
}

function browser_isTimeoutError() {
	return false;
}

;// ../../node_modules/.pnpm/is-regexp@3.1.0/node_modules/is-regexp/index.js
const {toString: is_regexp_toString} = Object.prototype;

function isRegexp(value) {
	return is_regexp_toString.call(value) === '[object RegExp]';
}

;// ../../node_modules/.pnpm/clone-regexp@3.0.0/node_modules/clone-regexp/index.js


const flagMap = {
	global: 'g',
	ignoreCase: 'i',
	multiline: 'm',
	dotAll: 's',
	sticky: 'y',
	unicode: 'u'
};

function clonedRegexp(regexp, options = {}) {
	if (!isRegexp(regexp)) {
		throw new TypeError('Expected a RegExp instance');
	}

	const flags = Object.keys(flagMap).map(flag => (
		(typeof options[flag] === 'boolean' ? options[flag] : regexp[flag]) ? flagMap[flag] : ''
	)).join('');

	const clonedRegexp = new RegExp(options.source || regexp.source, flags);

	clonedRegexp.lastIndex = typeof options.lastIndex === 'number' ?
		options.lastIndex :
		regexp.lastIndex;

	return clonedRegexp;
}

;// ../../node_modules/.pnpm/super-regex@0.2.0/node_modules/super-regex/index.js


 // TODO: Use `structuredClone` instead when targeting Node.js 18.

const resultToMatch = result => ({
	match: result[0],
	index: result.index,
	groups: result.slice(1),
	namedGroups: result.groups ?? {},
	input: result.input,
});

function super_regex_isMatch(regex, string, {timeout} = {}) {
	try {
		return browser_functionTimeout(() => clonedRegexp(regex).test(string), {timeout})();
	} catch (error) {
		if (browser_isTimeoutError(error)) {
			return false;
		}

		throw error;
	}
}

function firstMatch(regex, string, {timeout} = {}) {
	try {
		const result = functionTimeout(() => cloneRegexp(regex).exec(string), {timeout})();

		if (result === null) {
			return;
		}

		return resultToMatch(result);
	} catch (error) {
		if (isTimeoutError(error)) {
			return;
		}

		throw error;
	}
}

function matches(regex, string, {timeout = Number.POSITIVE_INFINITY, matchTimeout = Number.POSITIVE_INFINITY} = {}) {
	if (!regex.global) {
		throw new Error('The regex must have the global flag, otherwise, use `firstMatch()` instead');
	}

	return {
		* [Symbol.iterator]() {
			try {
				const matches = string.matchAll(regex); // The regex is only executed when iterated over.

				while (true) {
					const nextMatch = functionTimeout(() => matches.next(), {timeout: (timeout !== Number.POSITIVE_INFINITY || matchTimeout !== Number.POSITIVE_INFINITY) ? Math.min(timeout, matchTimeout) : undefined}); // `matches.next` must be called within an arrow function so that it doesn't loose its context.

					const end = timeSpan();
					const {value, done} = nextMatch();
					timeout -= Math.ceil(end());

					if (done) {
						break;
					}

					yield resultToMatch(value);
				}
			} catch (error) {
				if (!isTimeoutError(error)) {
					throw error;
				}
			}
		},
	};
}

;// ../../node_modules/.pnpm/is-ip@5.0.1/node_modules/is-ip/index.js



const maxIPv4Length = 15;
const maxIPv6Length = 45;

const options = {
	timeout: 400,
};

function isIP(string) {
	if (string.length > maxIPv6Length) {
		return false;
	}

	return super_regex_isMatch(ip_regex({exact: true}), string, options);
}

function isIPv6(string) {
	if (string.length > maxIPv6Length) {
		return false;
	}

	return isMatch(ipRegex.v6({exact: true}), string, options);
}

function isIPv4(string) {
	if (string.length > maxIPv4Length) {
		return false;
	}

	return isMatch(ipRegex.v4({exact: true}), string, options);
}

function ipVersion(string) {
	if (isIPv6(string)) {
		return 6;
	}

	if (isIPv4(string)) {
		return 4;
	}
}


/***/ }),

/***/ 14438:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Cq: () => (/* binding */ createTriggerUtils),
/* harmony export */   gq: () => (/* binding */ getTriggerUtils)
/* harmony export */ });
/* unused harmony exports TriggerUtilsMap, registerTriggerUtils */
/* harmony import */ var _utils_mergeToDefaultData__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(82713);

const TriggerUtilsMap = {};
function registerTriggerUtils(key, utils) {
    if (key in TriggerUtilsMap) {
        throw new Error("TriggerUtilsMap already has key: ".concat(key));
    }
    TriggerUtilsMap[key] = utils;
}
function getTriggerUtils(key) {
    return TriggerUtilsMap[key];
}
function createTriggerUtils(type, init, createDefultData, UI) {
    const res = {
        type,
        mergeDataToDefultData: (0,_utils_mergeToDefaultData__WEBPACK_IMPORTED_MODULE_0__/* .createMergeToDefaultData */ .dV)(createDefultData),
        createDefultData,
        create: (triggerGroup, data)=>{
            const trigger = createDefultData();
            triggerGroup.list.push(trigger);
        },
        update: (trigger, data)=>{
            (0,_utils_mergeToDefaultData__WEBPACK_IMPORTED_MODULE_0__/* .mergeDataWith */ .zI)(trigger, data);
        },
        UI,
        init
    };
    registerTriggerUtils(type, res);
    return res;
}


/***/ }),

/***/ 19283:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ TriggerList)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(94513);
/* harmony import */ var _app_ui__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(20939);
/* harmony import */ var _fanfanlo__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(50279);
/* harmony import */ var _src_components_page_trigger_list_trigger_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2621);
/* harmony import */ var _src_components_trigger_list_action_list_common_TriggerListOrActionListUI__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(33129);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(75640);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);






// import { useTranslation } from 'react-i18next';
function TriggerList() {
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();
    const { t } = (0,_fanfanlo__WEBPACK_IMPORTED_MODULE_4__/* .useTranslation */ .Bd)("homepage/pages/trigger-list/content");
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_app_ui__WEBPACK_IMPORTED_MODULE_5__/* .AppShell */ .G, {
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_src_components_trigger_list_action_list_common_TriggerListOrActionListUI__WEBPACK_IMPORTED_MODULE_2__/* .TriggerListOrActionListUI */ .M, {
            groups: _src_components_page_trigger_list_trigger_data__WEBPACK_IMPORTED_MODULE_1__/* .triggerListGroups */ .R,
            titleConf: {
                title: t("content.title")
            },
            title: t("content.title"),
            actionListParams: router.query
        })
    });
}


/***/ }),

/***/ 22454:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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

/***/ 24899:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Q: () => (/* binding */ ActionOrTriggerListTypeEnum)
/* harmony export */ });
/* unused harmony exports x, ActionOrTriggerListFromEnum */
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

/***/ 27880:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   K: () => (/* binding */ ProjectMemberType)
/* harmony export */ });
var ProjectMemberType = /*#__PURE__*/ function(ProjectMemberType) {
    ProjectMemberType["project"] = "project";
    ProjectMemberType["trigger"] = "trigger";
    ProjectMemberType["action"] = "action";
    ProjectMemberType["shellData"] = "shellData";
    ProjectMemberType["javaData"] = "javaData";
    ProjectMemberType["triggerAction"] = "triggerAction";
    ProjectMemberType["actionGroup"] = "actionGroup";
    ProjectMemberType["triggerGroup"] = "triggerGroup";
    ProjectMemberType["triggerActionGroup"] = "triggerActionGroup";
    ProjectMemberType["checks"] = "GroupCheckList1";
    return ProjectMemberType;
}({});


/***/ }),

/***/ 29192:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   g0: () => (/* binding */ createRandomEnglishCharacters)
/* harmony export */ });
/* unused harmony exports wordFirstToUpperCase, createRandomEnglishCharacter, randomLetters */
function wordFirstToUpperCase(s) {
    return s.replace(/( |^)[a-z]/, (L)=>L.toUpperCase());
}
function createRandomEnglishCharacter() {
    let s = String.fromCharCode(65 + Math.ceil(Math.random() * 25));
    if (Math.random() * 2 > 1) {
        s = s.toLocaleLowerCase();
    }
    return s;
}
function createRandomEnglishCharacters(length) {
    var result = [];
    for(var i = 0; i < length; i++){
        result.push(createRandomEnglishCharacter());
    }
    return result.join('');
}
function randomLetters(len) {
    var str = "", arr = [
        '0',
        '1',
        '2',
        '3',
        '4',
        '5',
        '6',
        '7',
        '8',
        '9',
        'a',
        'b',
        'c',
        'd',
        'e',
        'f',
        'g',
        'h',
        'i',
        'j',
        'k',
        'l',
        'm',
        'n',
        'o',
        'p',
        'q',
        'r',
        's',
        't',
        'u',
        'v',
        'w',
        'x',
        'y',
        'z',
        'A',
        'B',
        'C',
        'D',
        'E',
        'F',
        'G',
        'H',
        'I',
        'J',
        'K',
        'L',
        'M',
        'N',
        'O',
        'P',
        'Q',
        'R',
        'S',
        'T',
        'U',
        'V',
        'W',
        'X',
        'Y',
        'Z'
    ];
    for(var i = 0; i < len; i++){
        const pos = Math.round(Math.random() * (arr.length - 1));
        str += arr[pos];
    }
    return str;
}


/***/ }),

/***/ 33129:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  M: () => (/* binding */ TriggerListOrActionListUI)
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/react@19.1.0/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(94513);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/Box/Box.js + 2 modules
var Box = __webpack_require__(6445);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/Typography/Typography.js
var Typography = __webpack_require__(67079);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react@19.1.0/node_modules/react/index.js
var react = __webpack_require__(94285);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react-i18next@15.6.0_i18next@24.2.3_typescript@5.7.3__react-dom@19.1.0_react@19.1.0__react@19.1.0_typescript@5.7.3/node_modules/react-i18next/dist/es/index.js + 15 modules
var es = __webpack_require__(50279);
;// ./src/components/trigger-list-action-list-common/context.tsx

const ActionListOrTriggerListPageParamsContext = /*#__PURE__*/ (0,react.createContext)({});
const ActionOrTriggerGroupListContext = /*#__PURE__*/ (0,react.createContext)({});

// EXTERNAL MODULE: ../../libs/app/ui/src/components/appbar/AppBar.tsx + 3 modules
var AppBar = __webpack_require__(97972);
;// ./src/components/trigger-list-action-list-common/TriggerListOrActionListUI.tsx






function Item(param) {
    let { item } = param;
    const { t } = (0,es/* useTranslation */.Bd)(item.i18nNs);
    const params = (0,react.useContext)(ActionListOrTriggerListPageParamsContext);
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.A, {
        sx: {
            width: "100%",
            textIndent: "1rem",
            padding: "1px",
            backgroundColor: "#f6f2e9"
        },
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.A, {
            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(item.LinkRender, {
                query: params,
                id: item.id,
                item: item,
                children: t(item.nameKey)
            })
        })
    });
}
function Group(param) {
    let { group } = param;
    const { t } = (0,es/* useTranslation */.Bd)(group.i18nNs);
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.A, {
        sx: {
            width: "100%"
        },
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.A, {
                sx: {
                    width: "100%",
                    backgroundColor: "#f6f9f6",
                    padding: "2px"
                },
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                    children: t(group.nameKey)
                })
            }),
            group.items.map((action)=>{
                return /*#__PURE__*/ (0,jsx_runtime.jsx)(Item, {
                    item: action
                }, action.i18nNs);
            })
        ]
    });
}
function GroupList() {
    const groups = (0,react.useContext)(ActionOrTriggerGroupListContext);
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.A, {
        sx: {
            width: "100%"
        },
        children: groups.map((group)=>/*#__PURE__*/ (0,jsx_runtime.jsx)(Group, {
                group: group
            }, group.i18nNs))
    });
}
function ActionListContent() {
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.A, {
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(GroupList, {})
    });
}
function TriggerListOrActionListUI(param) {
    let { groups, title, actionListParams, titleConf } = param;
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(ActionListOrTriggerListPageParamsContext, {
        value: actionListParams,
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(ActionOrTriggerGroupListContext, {
            value: groups,
            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(AppBar/* AppbarContainer */.W, {
                appbarProps: {
                    title: /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.A, {
                        children: title
                    }),
                    back: true
                },
                titleConf: titleConf,
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(ActionListContent, {})
            })
        })
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

/***/ 76105:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  U: () => (/* binding */ openPnAnInfoWindow)
});

// EXTERNAL MODULE: ../../libs/droid/android/src/confs/env.ts
var env = __webpack_require__(38952);
// EXTERNAL MODULE: __barrel_optimize__?names=ulid!=!../../node_modules/.pnpm/ulid@2.4.0/node_modules/ulid/dist/index.esm.js + 1 modules
var index_esm = __webpack_require__(67131);
// EXTERNAL MODULE: ../../libs/droid/android/src/android/win/WindowConf.ts
var WindowConf = __webpack_require__(39800);
// EXTERNAL MODULE: ../../libs/droid/android/src/android/components/permissionGroupCreator.ts + 4 modules
var permissionGroupCreator = __webpack_require__(40164);
// EXTERNAL MODULE: ../../libs/droid/android/src/android/components/PermissionGroup.ts
var PermissionGroup = __webpack_require__(70168);
// EXTERNAL MODULE: ../../libs/fanfanlo/src/events/EventDispatcher.ts
var EventDispatcher = __webpack_require__(59647);
// EXTERNAL MODULE: ../../libs/fanfanlo/src/log/Log.ts + 1 modules
var Log = __webpack_require__(48891);
// EXTERNAL MODULE: ../../libs/fanfanlo/src/events/DataEvent.ts + 1 modules
var DataEvent = __webpack_require__(67816);
// EXTERNAL MODULE: ../../libs/droid/android/src/android/WebViewJs.ts + 3 modules
var WebViewJs = __webpack_require__(96113);
// EXTERNAL MODULE: ../../libs/droid/android/src/android/androidDispatchers.ts
var androidDispatchers = __webpack_require__(64558);
;// ../../libs/droid/android/src/android/win/Window.ts



class Window extends EventDispatcher/* EventDispatcher */.Q {
    static getDismissEventType(ulid) {
        return "window-".concat(ulid, "-dismiss");
    }
    static create(conf) {
        let w = new Window(conf);
        return w;
    }
    constructor(conf){
        super(), this.logger = new Log/* Log */.tG(false, this.constructor.name), this.dismissListenIndex = "", this.init = ()=>{
            let { print, error, warn, logger } = this.logger.sub(false, "fn_init");
            let type = Window.getDismissEventType(this.conf.windowId);
            print("type is", type);
            this.dismissListenIndex = WebViewJs/* WebViewJs */.L.instance.shellListen(androidDispatchers/* androidDispatchers */.m.Window.name, type, type, true, this.onDismiss);
            print("dismissListenIndex is", this.dismissListenIndex);
            return this;
        }, this.open = ()=>{
            if (!this.conf) {
                throw Error("no window conf");
            }
            const res = WebViewJs/* WebViewJs */.L.instance.createWindow(JSON.stringify(this.conf));
            console.log('crate window res=', res);
            return this;
        }, this.onDismiss = ()=>{
            let { print, error, warn, logger } = this.logger.sub(false, "fn_onDismiss");
            print("dismiss", Window.getDismissEventType(this.conf.windowId));
            this.dispatchEvent(new DataEvent/* DataEvent */.P(Window.eventTypeDismiss));
        };
        this.conf = conf;
    }
}
Window.eventTypeDismiss = "dismiss";

// EXTERNAL MODULE: ../../libs/fanfanlo/src/i18n/i18n-value-loader.ts + 1 modules
var i18n_value_loader = __webpack_require__(27950);
// EXTERNAL MODULE: ../../libs/droid/android/src/android/scripts/window/windowUtils.ts
var windowUtils = __webpack_require__(2454);
;// ../../libs/droid/android/src/htmls/PnAnInfoWindow.ts










const { htmlOrigin } = env/* env */._;
function getHtmlPnAnInfoWindowConf(windowId, selectEventType) {
    let conf = {
        htmlConf: {
            url: "".concat(htmlOrigin, "pages/accessibility-pn-an-info/"),
            webViewJsParams: {
                javaToJsDataString: JSON.stringify({
                    eventType: selectEventType
                })
            }
        },
        floatWindowConf: {
            floatConf: {
                positionSaveName: "a11y-pn-a-an-info-panel"
            }
        },
        windowId: windowId
    };
    return (0,WindowConf/* createWindowConfCopy */.Sb)(conf);
// return _.merge({}, windowConf, conf)
}
async function openPnAnInfoWindow(autoCloseWhenSelected) {
    console.log('openPnAnInfoWindow_fn');
    let opened = false;
    const t = await (0,i18n_value_loader/* getI18nT */.r)('droid-android/htmls/content');
    return new Promise(function(resolve, reject) {
        let isSuccess = false;
        let group = (0,permissionGroupCreator/* createFloatA11yPermissionGroup */.ps)();
        group.addEventListener(PermissionGroup/* PermissionGroup */.v.eventComplete, ()=>{
            console.log('group.isSuccess=', group.isSuccess, 'opened', opened);
            if (opened) return;
            if (group.isSuccess) {
                openWindow();
            } else {
                reject(t("PnAnInfoWindow.noPermission"));
            }
        });
        group.run();
        function openWindow() {
            opened = true;
            let windowId = (0,index_esm/* ulid */.Z0)();
            let eventType = "openAppBackToMainActivitySelected-".concat(windowId);
            const eventBackType = "".concat(eventType, "back");
            let listenIndex = WebViewJs/* WebViewJs */.L.instance.shellListen(androidDispatchers/* androidDispatchers */.m.WebViewJsDispatcher.name, eventType, eventBackType, true, onSelectApp);
            console.log('openWindow_fn eventType=', eventType, eventBackType);
            let conf = getHtmlPnAnInfoWindowConf(windowId, eventType);
            let win = Window.create(conf);
            win.init().open().addEventListener(Window.eventTypeDismiss, onDismiss);
            function onSelectApp(s) {
                console.log('openWindow_fn onSelectApp', s);
                let o = JSON.parse(s);
                isSuccess = true;
                resolve(o);
                if (autoCloseWhenSelected) {
                    opened = false;
                    WebViewJs/* WebViewJs */.L.instance.shellRemoveListen(androidDispatchers/* androidDispatchers */.m.WebViewJsDispatcher.name, listenIndex);
                    windowUtils/* windowUtils */.q.exitWindowById(windowId);
                }
            }
            function onDismiss() {
                opened = false;
                WebViewJs/* WebViewJs */.L.instance.shellRemoveListen(androidDispatchers/* androidDispatchers */.m.WebViewJsDispatcher.name, listenIndex);
                console.log('openWindow_fnonDismiss_fn', androidDispatchers/* androidDispatchers */.m.WebViewJsDispatcher.name, listenIndex);
                if (!isSuccess) {
                    reject(t("PnAnInfoWindow.noPnSelected"));
                }
            }
        }
    });
}


/***/ }),

/***/ 77740:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {


    (window.__NEXT_P = window.__NEXT_P || []).push([
      "/trigger-list",
      function () {
        return __webpack_require__(19283);
      }
    ]);
    if(false) {}
  

/***/ }),

/***/ 90418:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   D: () => (/* binding */ projectNamespace)
/* harmony export */ });
const projectNamespace = "fanfanlo/";


/***/ }),

/***/ 93579:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   IS: () => (/* binding */ createActionOrTriggerListLinkRender),
/* harmony export */   cI: () => (/* binding */ createActionOrTriggerButtonRender)
/* harmony export */ });
/* unused harmony export ActionOrTriggerListLinkRender */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(94513);
/* harmony import */ var _barrel_optimize_names_Button_mui_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(28669);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(97097);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(75640);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);




function ActionOrTriggerListLinkRender(param) {
    let { query, children, pathname, id } = param;
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
        href: {
            pathname,
            query
        },
        "data-id": id,
        children: children
    });
}
function createActionOrTriggerListLinkRender(subPath, id, extraQuery) {
    return (param)=>{
        let { query, children, item } = param;
        const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();
        const pathname = "".concat(router.pathname).concat(subPath);
        return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(ActionOrTriggerListLinkRender, {
            query: {
                ...query,
                ...extraQuery
            },
            pathname: pathname,
            id: id,
            children: children
        });
    };
}
function createActionOrTriggerButtonRender(onSelect) {
    return (param)=>{
        let { query, children, item } = param;
        const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();
        function onClick() {
            onSelect({
                query,
                item,
                router
            });
        }
        return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_barrel_optimize_names_Button_mui_material__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A, {
            id: item.id,
            "data-id": item.id,
            onClick: onClick,
            children: children
        });
    };
}


/***/ }),

/***/ 94429:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   w: () => (/* binding */ throwTraceError)
/* harmony export */ });
function throwTraceError(msg) {
    for(var _len = arguments.length, rest = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++){
        rest[_key - 1] = arguments[_key];
    }
    console.error(msg, rest);
    console.trace(msg);
    throw new Error(msg);
}


/***/ }),

/***/ 97972:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

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

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, [5352,1161,5771,7097,3881,3900,636,6593,8792], () => (__webpack_exec__(77740)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ _N_E = __webpack_exports__;
/******/ }
]);
//# sourceMappingURL=trigger-list-ee32bda4dfe07bc1.js.map