(self["webpackChunk_N_E"] = self["webpackChunk_N_E"] || []).push([[1587],{

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

/***/ 9825:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Bd: () => (/* reexport safe */ C_work_android_droid_html_website_2024_12_node_modules_pnpm_react_i18next_15_6_0_i18next_24_2_3_typescript_5_7_3_react_dom_19_1_0_react_19_1_0_react_19_1_0_typescript_5_7_3_node_modules_react_i18next_dist_es_index_js__WEBPACK_IMPORTED_MODULE_0__.Bd)
/* harmony export */ });
/* harmony import */ var C_work_android_droid_html_website_2024_12_node_modules_pnpm_react_i18next_15_6_0_i18next_24_2_3_typescript_5_7_3_react_dom_19_1_0_react_19_1_0_react_19_1_0_typescript_5_7_3_node_modules_react_i18next_dist_es_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(50279);



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

/***/ 24042:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ ProjectEditor)
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/react@19.1.0/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(94513);
// EXTERNAL MODULE: ../../libs/fanfanlo/src/dispatcher/Dispatcher.ts
var Dispatcher = __webpack_require__(82727);
;// ../../libs/droid/android/src/android/jsbridge.ts

const hasWindow = "object" !== "undefined";
let androidJsGlobalName = "android";
let android = hasWindow ? window[androidJsGlobalName] : '';
const global = hasWindow ? window.global || (window.global = window) : {};
const jsBridgeDispatcher = new Dispatcher/* Dispatcher */.m();
function getWebViewJsId() {
    return android ? android.webViewJsId() : "-1";
}
const listeningMap = {};
// initJsBridge();
let initJsBridgeCalled = false;
// 供安卓调用js，必须初始化。
function initJsBridge() {
    if (!android) return;
    if (initJsBridgeCalled) return;
    initJsBridgeCalled = true;
    global.onCallJsEvent = function(event) {
        console.log("js bridge global event", JSON.stringify(event));
        if (!event) return;
        try {
            for (const [index, value] of Object.entries(listeningMap)){
                if (value.callbackEventType !== event.type) continue;
                value.fun(event.data);
                if (value.once) {
                    delete listeningMap[index];
                // webViewJsListen时传入了once，所以java端自己就卸载侦听了
                // webViewJsRemoveListen(value.target, index)
                }
            }
            const e = createDispatchEvent(event.data, undefined, undefined, event.type);
            jsBridgeDispatcher.dispatch(event.type, e);
            // 返回时不需要json序列化，容器会对其进行自动序列化
            if (e.result !== undefined) return e.result;
            // 如果没有事件的返回值，则返回一个统一的__okkey__
            return "__okkey__";
        } catch (e) {
            console.log('global on call js event error', e);
        }
        return;
    };
}
function webViewJsListen(target, type, callbackEventType, once, fun) {
    if (!android) return -1;
    const index = android === null || android === void 0 ? void 0 : android.listen(target, type, callbackEventType, once);
    if (!index) return -1;
    let key = index.toString();
    try {
        key = "".concat(typeof target === 'string' ? target : 'target', "-").concat(typeof type === 'string' ? type : 'type', "-").concat(typeof callbackEventType === 'string' ? callbackEventType : 'callbackEventType', "-").concat(typeof index === 'string' ? index : index.toString());
    } catch (e) {
        console.log('listen_fn 2 error', e);
    }
    listeningMap[key] = {
        once,
        fun,
        target,
        type,
        callbackEventType
    };
    return key;
}
function webViewJsRemoveListen(target, index) {
    if (!android) return;
    return android.removeListen(target, index);
}

// EXTERNAL MODULE: ../../libs/droid/project-interface/src/common/project-contexts.tsx
var project_contexts = __webpack_require__(55081);
// EXTERNAL MODULE: ../../libs/droid/project-interface/src/storage/storage.ts
var storage = __webpack_require__(31232);
// EXTERNAL MODULE: ../../libs/droid/project-interface/src/project/IProject.data.ts
var IProject_data = __webpack_require__(73675);
// EXTERNAL MODULE: ../../libs/fanfanlo/src/log/Log.ts + 1 modules
var Log = __webpack_require__(48891);
// EXTERNAL MODULE: ../../libs/fanfanlo/src/watcher/useProxyWatch.ts
var useProxyWatch = __webpack_require__(45007);
// EXTERNAL MODULE: ../../libs/fanfanlo/src/utils/debug/object-count-utils.ts
var object_count_utils = __webpack_require__(31095);
// EXTERNAL MODULE: ../../libs/fanfanlo/src/watcher/proxyWatch.ts
var proxyWatch = __webpack_require__(88518);
// EXTERNAL MODULE: ../../libs/fanfanlo/src/watcher/parentProxy.ts
var parentProxy = __webpack_require__(10019);
// EXTERNAL MODULE: ../../libs/fanfanlo/src/watcher/watchUpdates.ts
var watchUpdates = __webpack_require__(4738);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/Dialog/Dialog.js + 1 modules
var Dialog = __webpack_require__(49280);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/DialogTitle/DialogTitle.js
var DialogTitle = __webpack_require__(3711);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/DialogContent/DialogContent.js + 1 modules
var DialogContent = __webpack_require__(18244);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/TextField/TextField.js + 1 modules
var TextField = __webpack_require__(38771);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/DialogActions/DialogActions.js + 1 modules
var DialogActions = __webpack_require__(69468);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/Button/Button.js + 3 modules
var Button = __webpack_require__(28669);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react@19.1.0/node_modules/react/index.js
var react = __webpack_require__(94285);
// EXTERNAL MODULE: __barrel_optimize__?names=useTranslation!=!../../node_modules/.pnpm/react-i18next@15.6.0_i18next@24.2.3_typescript@5.7.3__react-dom@19.1.0_react@19.1.0__react@19.1.0_typescript@5.7.3/node_modules/react-i18next/dist/es/index.js
var es = __webpack_require__(9825);
;// ../../libs/fanfanlo/src/mui/dialog/EditableText.tsx





function EditableText(param) {
    let { setText, title, cancelText, saveText, contentText, helperText, minHeight, children } = param;
    const { t } = (0,es/* useTranslation */.Bd)('fanfanlo/mui/dialog/content');
    const [editText, setEditText] = (0,react.useState)('');
    const [isEditing, setIsEditing] = (0,react.useState)(false);
    function handleEdit(s) {
        setEditText(s);
    }
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                style: {
                    cursor: 'pointer',
                    width: '100%',
                    textAlign: 'center',
                    display: "inline-block",
                    backgroundColor: '',
                    minHeight: minHeight || '1rem'
                },
                onClick: ()=>setIsEditing(true),
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                    children: children || ''
                })
            }),
            isEditing && /*#__PURE__*/ (0,jsx_runtime.jsxs)(Dialog/* default */.A, {
                open: isEditing,
                onClose: ()=>setIsEditing(false),
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(DialogTitle/* default */.A, {
                        children: title || t('EditableText.title')
                    }),
                    contentText && /*#__PURE__*/ (0,jsx_runtime.jsx)(DialogContent/* default */.A, {
                        children: contentText
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(DialogContent/* default */.A, {
                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(TextField/* default */.A, {
                            id: "editable-text",
                            "aria-label": "editable-text",
                            autoFocus: true,
                            required: true,
                            fullWidth: true,
                            helperText: helperText,
                            variant: "standard",
                            value: editText,
                            onChange: (e)=>handleEdit(e.target.value)
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)(DialogActions/* default */.A, {
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(Button/* default */.A, {
                                id: "editable-text-cancel",
                                "data-id": "editable-text-cancel",
                                onClick: ()=>setIsEditing(false),
                                children: cancelText || t('EditableText.cancel')
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(Button/* default */.A, {
                                id: "editable-text-save",
                                "data-id": "editable-text-save",
                                onClick: ()=>{
                                    setIsEditing(false);
                                    setText(editText);
                                },
                                children: saveText || t('EditableText.save')
                            })
                        ]
                    })
                ]
            })
        ]
    });
}

// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/utils/createSvgIcon.js + 2 modules
var createSvgIcon = __webpack_require__(61541);
;// ../../node_modules/.pnpm/@mui+icons-material@6.4.12_@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_re_5ewkm5t5g27pzq5tz62v6ktvti/node_modules/@mui/icons-material/esm/Close.js
/* __next_internal_client_entry_do_not_use__ default auto */ 

/* harmony default export */ const Close = ((0,createSvgIcon/* default */.A)(/*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
    d: "M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"
}), 'Close'));

// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/styles/styled.js
var styled = __webpack_require__(64624);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/Box/Box.js + 2 modules
var Box = __webpack_require__(6445);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/Paper/Paper.js + 1 modules
var Paper = __webpack_require__(59864);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/IconButton/IconButton.js + 1 modules
var IconButton = __webpack_require__(65494);
// EXTERNAL MODULE: ../../node_modules/.pnpm/next@15.3.5_@babel+core@7.28.0_babel-plugin-macros@3.1.0_react-dom@19.1.0_react@19.1.0__react@19.1.0_sass@1.89.2/node_modules/next/router.js
var next_router = __webpack_require__(75640);
// EXTERNAL MODULE: ../../libs/fanfanlo/src/watcher/proxyUtils.ts
var proxyUtils = __webpack_require__(30452);
// EXTERNAL MODULE: ../../libs/fanfanlo/src/watcher/parentWatchProxy.ts
var parentWatchProxy = __webpack_require__(76648);
// EXTERNAL MODULE: ../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/lodash.js
var lodash = __webpack_require__(63624);
var lodash_default = /*#__PURE__*/__webpack_require__.n(lodash);
;// ../../libs/droid/project/src/history/projectsHistoryMap.ts


const projectsHistoryMap = new Map();
function addProjectHistory(history) {
    proxyUtils/* proxyUtils */.o.runPauseProxyFn(()=>{
        history.project = lodash_default().cloneDeep((0,parentWatchProxy/* getProxyTarget */.EL)(history.project));
    });
    const p = history //_.cloneDeep(getProxyTarget(history))
    ;
    const list = projectsHistoryMap.get(history.project.id);
    if (!list) {
        projectsHistoryMap.set(history.project.id, [
            p
        ]);
        return;
    }
    list.push(p);
}
function getProjectHistory(projectId) {
    return projectsHistoryMap.get(projectId) || [];
}
function removeProjectHistory(projectId) {
    projectsHistoryMap.delete(projectId);
}
function getProjectLastHistory(projectId) {
    const list = getProjectHistory(projectId);
    return list[list.length - 1];
}
function takeProjectSnapshoot(project) {
    const last = getProjectLastHistory(project.id);
    if (last && lodash_default().isEqual(last.project, project)) {
        return false;
    }
    addProjectHistory({
        index: last ? last.index + 1 : 0,
        project,
        date: new Date().toISOString()
    });
    return true;
}
function projectHistoryIsChanged(project) {
    const last = getProjectLastHistory(project.id);
    return !last || !_.isEqual(last.project, project);
}
function isSameProjectHistoryId(id, projectId) {
    const last = getProjectLastHistory(projectId);
    return (last === null || last === void 0 ? void 0 : last.index) === id;
}

// EXTERNAL MODULE: ../../libs/fanfanlo/src/i18n/i18n-value-loader.ts + 1 modules
var i18n_value_loader = __webpack_require__(27950);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react-hot-toast@2.5.2_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/react-hot-toast/dist/index.mjs + 1 modules
var dist = __webpack_require__(22243);
;// ../../libs/droid/project/src/project/manager/edit-project-info-utils.ts


// import { projectStore } from '../../storage';    

const map = (0,proxyWatch/* toProxy */.I$)({});
const dispatcher = new Dispatcher/* Dispatcher */.m();
const projectSavedEvent = 'project-saved';
const editProjectInfoUtils = {
    edit: (project)=>{
        // const info = map[project.id] || (map[project.id] = createProjectEditInfo(project));
        const info = map[project.id] = createProjectEditInfo(project);
        return info;
    },
    getEditInfoById: (id)=>{
        if (map[id]) return map[id];
        const project = storage/* projectStore */.D.findProject(id);
        if (project) return map[id] = createProjectEditInfo(project);
        return null;
    },
    listenProjectSaved: (fn)=>{
        return dispatcher.addListener(projectSavedEvent, fn);
    }
};
function createProjectEditInfo(project) {
    const info = (0,proxyWatch/* toProxy */.I$)({
        project,
        askStay: false,
        giveup: false,
        updated: false,
        historyId: 0,
        testTime: new Date().toLocaleString(),
        save: async ()=>{
            info.updated = false;
            info.askStay = false;
            info.giveup = false;
            storage/* projectStore */.D.saveProject(project);
            dispatcher.dispatch(projectSavedEvent, project);
            const s = await (0,i18n_value_loader/* loadI18nValue */.y)('droid-project/project/manager/content', 'edit-project-info-utils.projectSaved');
            dist/* default */.Ay.success(s);
        }
    });
    return info;
}

;// ../../libs/droid/project/src/project/ui/project/edit-project/contexts.tsx

const ProjectEditInfoContext = /*#__PURE__*/ (0,react.createContext)({}) // export const TriggerActionGroupContext = createContext<ITriggerActionGroup>({} as ITriggerActionGroup)
 // export const TriggerActionContext = createContext<ITriggerAction>({} as ITriggerAction)
 // export const TriggerGroupContext = createContext<ITriggerGroup>({} as ITriggerGroup)
 // export const TriggerListContext = createContext<ITriggerData<ITriggerShellData, ITriggerJavaData>[]>([] as ITriggerData<ITriggerShellData, ITriggerJavaData>[])
 // export const TriggerContext = createContext<ITriggerData<ITriggerShellData, ITriggerJavaData>>({} as ITriggerData<ITriggerShellData, ITriggerJavaData>)
 // export const ActionGroupContext = createContext<IActionGroup>({} as IActionGroup)
 // export const ActionListContext = createContext<IActionData<IActionShellData, IActionJavaData>[]>([] as IActionData<IActionShellData, IActionJavaData>[])
 // export const ActionContext = createContext<IActionData<IActionShellData, IActionJavaData>>({} as IActionData<IActionShellData, IActionJavaData>)
;

// EXTERNAL MODULE: ../../libs/droid/project-interface/src/trigger-action/ITriggerAction.intf.ts + 2 modules
var ITriggerAction_intf = __webpack_require__(73849);
// EXTERNAL MODULE: ../../libs/droid/project-interface/src/utils/IChildToProject.intf.ts
var IChildToProject_intf = __webpack_require__(14209);
// EXTERNAL MODULE: ../../libs/fanfanlo/src/dispatcher/throttle.ts
var throttle = __webpack_require__(98958);
;// ../../libs/fanfanlo/src/watcher/useWatchListOperation.tsx



function useWatchListOperation(target) {
    const [list, setList] = (0,react.useState)([
        ...target
    ]);
    const unsub = (0,proxyWatch/* getProxyDispatcher */.Ax)(target).addListener(throttle/* listenAnyWildcard */._l, ()=>{
        setList([
            ...target
        ]);
    });
    (0,react.useEffect)(()=>{
        return ()=>{
            unsub();
        };
    }, []);
    return [
        list,
        unsub
    ];
}

;// ../../libs/fanfanlo/src/watcher/updateVersion.ts


let count = 0;
const updateVersion_map = new WeakMap();
/**
 * @prefix 如果有用于调试等的需求，可以用prefix作为识别，但是一般来说用不上.
 */ function getUpdateVersion(data) {
    let prefix = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : '';
    let version = updateVersion_map.get(data) || (0,proxyWatch/* toProxy */.I$)({
        version: ++count,
        count: 0,
        key: "".concat(prefix).concat(count, "-0")
    });
    if (!updateVersion_map.has(data)) {
        updateVersion_map.set(data, version);
        const dispatcher = (0,proxyWatch/* getProxyDispatcher */.Ax)(data);
        dispatcher.addListener(throttle/* listenAnyWildcard */._l, (now, old)=>{
            version.count++;
            version.version = ++count;
            // 特定前缀+全局唯一数值+该对象更新次数
            version.key = "".concat(prefix).concat(version.version, "-").concat(version.count);
        });
    }
    return version;
}
function getUpdateVersionKey(data) {
    return getUpdateVersion(data).key;
}

// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+icons-material@6.4.12_@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_re_5ewkm5t5g27pzq5tz62v6ktvti/node_modules/@mui/icons-material/esm/Add.js
var Add = __webpack_require__(56539);
;// ../../node_modules/.pnpm/@mui+icons-material@6.4.12_@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_re_5ewkm5t5g27pzq5tz62v6ktvti/node_modules/@mui/icons-material/esm/Handyman.js
/* __next_internal_client_entry_do_not_use__ default auto */ 

/* harmony default export */ const Handyman = ((0,createSvgIcon/* default */.A)([
    /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
        d: "m21.67 18.17-5.3-5.3h-.99l-2.54 2.54v.99l5.3 5.3c.39.39 1.02.39 1.41 0l2.12-2.12c.39-.38.39-1.02 0-1.41"
    }, "0"),
    /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
        d: "m17.34 10.19 1.41-1.41 2.12 2.12c1.17-1.17 1.17-3.07 0-4.24l-3.54-3.54-1.41 1.41V1.71l-.7-.71-3.54 3.54.71.71h2.83l-1.41 1.41 1.06 1.06-2.89 2.89-4.13-4.13V5.06L4.83 2.04 2 4.87 5.03 7.9h1.41l4.13 4.13-.85.85H7.6l-5.3 5.3c-.39.39-.39 1.02 0 1.41l2.12 2.12c.39.39 1.02.39 1.41 0l5.3-5.3v-2.12l5.15-5.15z"
    }, "1")
], 'Handyman'));

;// ../../node_modules/.pnpm/@mui+icons-material@6.4.12_@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_re_5ewkm5t5g27pzq5tz62v6ktvti/node_modules/@mui/icons-material/esm/NotificationsNone.js
/* __next_internal_client_entry_do_not_use__ default auto */ 

/* harmony default export */ const NotificationsNone = ((0,createSvgIcon/* default */.A)(/*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
    d: "M12 22c1.1 0 2-.9 2-2h-4c0 1.1.9 2 2 2m6-6v-5c0-3.07-1.63-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.64 5.36 6 7.92 6 11v5l-2 2v1h16v-1zm-2 1H8v-6c0-2.48 1.51-4.5 4-4.5s4 2.02 4 4.5z"
}), 'NotificationsNone'));

;// ../../node_modules/.pnpm/@mui+icons-material@6.4.12_@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_re_5ewkm5t5g27pzq5tz62v6ktvti/node_modules/@mui/icons-material/esm/TableRows.js
/* __next_internal_client_entry_do_not_use__ default auto */ 

/* harmony default export */ const TableRows = ((0,createSvgIcon/* default */.A)(/*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
    d: "M21 8H3V4h18zm0 2H3v4h18zm0 6H3v4h18z"
}), 'TableRows'));

// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/Grid2/Grid2.js + 4 modules
var Grid2 = __webpack_require__(95771);
;// ../../node_modules/.pnpm/@mui+icons-material@6.4.12_@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_re_5ewkm5t5g27pzq5tz62v6ktvti/node_modules/@mui/icons-material/esm/DeleteOutline.js
/* __next_internal_client_entry_do_not_use__ default auto */ 

/* harmony default export */ const DeleteOutline = ((0,createSvgIcon/* default */.A)(/*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
    d: "M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6zM8 9h8v10H8zm7.5-5-1-1h-5l-1 1H5v2h14V4z"
}), 'DeleteOutline'));

// EXTERNAL MODULE: ../../libs/app/static/src/pages/trigger-list-action-list-common/common.ts
var common = __webpack_require__(24899);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/FormGroup/FormGroup.js + 1 modules
var FormGroup = __webpack_require__(80239);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/FormControlLabel/FormControlLabel.js + 1 modules
var FormControlLabel = __webpack_require__(30281);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/Switch/Switch.js + 1 modules
var Switch = __webpack_require__(85156);
// EXTERNAL MODULE: ../../libs/fanfanlo/src/watcher/useWatchUpdates.tsx
var useWatchUpdates = __webpack_require__(30771);
// EXTERNAL MODULE: ../../libs/fanfanlo/src/mui/dialog/ButtonConfirm.tsx
var ButtonConfirm = __webpack_require__(56257);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/Checkbox/Checkbox.js + 4 modules
var Checkbox = __webpack_require__(93916);
;// ../../libs/droid/project/src/project/ui/project/edit-project/components/group/GroupCheck.tsx






function getProjectDataByGroup(group) {
    let projectData = {};
    switch(group.type){
        case actionGroupType:
            getActionGroupElement(group, '', '', projectData);
            break;
        case triggerGroupType:
            childToProjectDataUtils.triggerGroup.getTriggerGroupElement(group, '', '', projectData);
            break;
        case triggerActionGroupType:
            childToProjectDataUtils.triggerActionGroup.getTriggerActionGroupElement(group, '', '', projectData);
            break;
    }
    return projectData;
}
function Check2(param) {
    let { list, index } = param;
    const logger = new Log/* Log */.tG(false, 'Check2_fn');
    logger.isPaused = true;
    logger.log('list=', list);
    const [l] = (0,useWatchUpdates/* useWatchUpdates */.p)(list);
    const groupCheckList1Context = (0,react.useContext)(project_contexts/* GroupCheckList1Context */.oc);
    function onRemoveClick() {
        groupCheckList1Context.splice(index, 1);
    }
    logger.log('l=', l);
    // const check1 = getParent<GroupCheckList1>(list)
    // console.log('check1=', check1)
    // const group = getParent<IGroup<any>>(check1!)!
    // console.log('group=', group)
    // const projectData = getProjectDataByGroup(group)
    // console.log('projectData=', projectData)
    // const globalId = `project`
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(jsx_runtime.Fragment, {
        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(Grid2/* default */.A, {
            container: true,
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsx)(Grid2/* default */.A, {
                    container: true,
                    size: 'grow',
                    children: l.map((check, index)=>/*#__PURE__*/ (0,jsx_runtime.jsx)(Grid2/* default */.A, {
                            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(FormGroup/* default */.A, {
                                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(FormControlLabel/* default */.A, {
                                    label: index.toString(),
                                    control: /*#__PURE__*/ (0,jsx_runtime.jsx)(Checkbox/* default */.A, {
                                        "data-id": "group-check-checkbox",
                                        "data-checked": check,
                                        "data-value": check,
                                        checked: check,
                                        onChange: (e)=>{
                                            list[index] = e.target.checked;
                                        }
                                    })
                                })
                            })
                        }, object_count_utils/* objectCountUtils */._.getNewCountId().toString()))
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)(Grid2/* default */.A, {
                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(ButtonConfirm/* ButtonConfirm */.b, {
                        title: "提醒",
                        onConfirm: onRemoveClick,
                        content: "您要删除此条校验吗？",
                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(IconButton/* default */.A, {
                            "data-id": "group-check-remove",
                            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(DeleteOutline, {})
                        })
                    })
                })
            ]
        })
    });
}
function Check1(param) {
    let { list } = param;
    const logger = new Log/* Log */.tG(false, 'Check1_fn');
    logger.isPaused = true;
    logger.log('Check1 list=', list);
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(project_contexts/* GroupCheckList1Context */.oc.Provider, {
        value: list,
        children: list.map((checks2, index)=>/*#__PURE__*/ (0,jsx_runtime.jsx)(Check2, {
                list: list[index],
                index: index
            }, getUpdateVersionKey(checks2)))
    });
}
function GroupCheck(param) {
    let { group } = param;
    const logger = new Log/* Log */.tG(false, 'GroupCheck_fn');
    logger.isPaused = true;
    const [isSequential] = (0,useProxyWatch/* useProxyWatch */.x)(group, 'isSequential', group.isSequential);
    const [l] = (0,useProxyWatch/* useProxyWatch */.x)(group, 'list', group.list);
    const [list] = (0,useWatchUpdates/* useWatchUpdates */.p)(l);
    const [listSize] = (0,useProxyWatch/* useProxyWatch */.x)(list, 'length', list.length);
    const [c] = (0,useProxyWatch/* useProxyWatch */.x)(group, 'checks', group.checks);
    const [checks1] = (0,useWatchUpdates/* useWatchUpdates */.p)(c);
    function updateChecks2() {
        logger.log('updateChecks2_fn', 'listSize=', listSize, group.checks);
        group.checks.forEach((checks2)=>{
            logger.log('updateChecks2_fn', 'checks2=', checks2);
            for(let i = checks2.length; i < listSize; i++){
                checks2.push(true);
            }
            checks2.length = listSize;
        });
    }
    (0,react.useEffect)(()=>{
        updateChecks2();
    }, [
        listSize
    ]);
    // logger.log('group=', group);
    // logger.log('checks1=', checks1);
    // logger.log('isSequential=', isSequential);
    logger.log('list.length=', list.length);
    if (list.length <= 1 || isSequential) return /*#__PURE__*/ (0,jsx_runtime.jsx)(jsx_runtime.Fragment, {});
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.A, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Grid2/* default */.A, {
                container: true,
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Grid2/* default */.A, {
                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Button/* default */.A, {
                        "data-id": "group-add-check-list.875aec4f-5049-426a-a395-0ac0c6666a35",
                        onClick: ()=>{
                            group.checks.push(new Array(listSize).fill(true));
                        },
                        children: "添加校验组"
                    })
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Check1, {
                list: group.checks
            })
        ]
    });
}

;// ../../libs/droid/project/src/project/ui/project/edit-project/components/list-page-link/ActionListOrTriggerListPageLink.tsx



function ActionListOrTriggerListPageLink(param) {
    let { query, attrs, path, btnId, children } = param;
    const router = (0,next_router.useRouter)();
    query.backPath = router.pathname;
    function handleClick() {
        const list = Object.keys(query).map((key)=>[
                key,
                query[key].toString()
            ]);
        const q = new URLSearchParams(list);
        const href = "".concat(path, "?").concat(q.toString());
        router.push(href);
    }
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(Button/* default */.A, {
        onClick: handleClick,
        ...attrs,
        // id="link-router-to-action-list"
        // data-id="link-router-to-action-list"
        id: btnId,
        "data-id": btnId,
        children: children
    });
}

// EXTERNAL MODULE: ../../libs/droid/project-interface/src/action/IAction.intf.ts
var IAction_intf = __webpack_require__(30624);
;// ../../libs/droid/project/src/project/ui/project/edit-project/trigger-action-group/trigger-action/action-group/action-list/action/Action.tsx






function Action(param) {
    let { actionData } = param;
    const list = (0,react.useContext)(project_contexts/* ActionListContext */.Us);
    const utils = IAction_intf/* ActionUtilsMap */.Gh[actionData.type];
    function onDeleteComfirmed() {
        const index = list.indexOf(actionData);
        if (index === -1) return;
        list.splice(index, 1);
    }
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.A, {
        sx: {
            position: 'relative',
            padding: '2px',
            marginTop: "2px",
            marginBottom: "2px",
            '&::after': {
                content: '""',
                position: 'absolute',
                right: 0,
                top: '5px',
                bottom: '5px',
                borderRight: '1px solid red'
            },
            '&::before': {
                content: '""',
                position: 'absolute',
                left: 0,
                top: '5px',
                bottom: '5px',
                borderLeft: '1px solid red'
            }
        },
        children: [
            utils.UI(actionData),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.A, {
                sx: {
                    textAlign: "center"
                },
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(ButtonConfirm/* ButtonConfirm */.b, {
                    title: "删除动作",
                    content: "确定删除本动作吗？",
                    onConfirm: onDeleteComfirmed,
                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Button/* default */.A, {
                        id: "del-action-btn",
                        "data-id": "del-action-btn",
                        children: "删除"
                    })
                })
            })
        ]
    });
}

;// ../../libs/droid/project/src/project/ui/project/edit-project/trigger-action-group/trigger-action/action-group/action-list/ActionList.tsx



// import { ActionGroupContext } from "../../../../contexts"



function ActionList() {
    const actionGroup = (0,react.useContext)(project_contexts/* ActionGroupContext */.Tj);
    const [list] = (0,useWatchUpdates/* useWatchUpdates */.p)(actionGroup.list);
    if (!list || !lodash_default().isArray(list)) {
        console.log('lllllllllllllist is null', actionGroup);
    }
    return /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
        children: actionGroup.list.map((action)=>{
            return /*#__PURE__*/ (0,jsx_runtime.jsx)(Action, {
                actionData: action
            }, getUpdateVersionKey(action));
        })
    });
}

// EXTERNAL MODULE: ../../node_modules/.pnpm/react-i18next@15.6.0_i18next@24.2.3_typescript@5.7.3__react-dom@19.1.0_react@19.1.0__react@19.1.0_typescript@5.7.3/node_modules/react-i18next/dist/es/index.js + 15 modules
var dist_es = __webpack_require__(50279);
;// ../../libs/droid/project/src/project/ui/project/edit-project/trigger-action-group/trigger-action/action-group/ActionGroup.tsx











function ActionGroup(param) {
    let { actionGroup } = param;
    const { t } = (0,dist_es/* useTranslation */.Bd)("droid-project/project/ui/project/edit-project/trigger-action-group/trigger-action/action-group/content");
    const editInfo = (0,react.useContext)(ProjectEditInfoContext);
    const triggerActionGroup = (0,react.useContext)(project_contexts/* TriggerActionGroupContext */.NF);
    const triggerAction = (0,react.useContext)(project_contexts/* TriggerActionContext */.Ck);
    const query = {
        projectId: editInfo.project.id,
        triggerActionGroupId: triggerActionGroup.id,
        triggerActionId: triggerAction.id,
        actionGroupId: actionGroup.id,
        type: common/* ActionOrTriggerListTypeEnum */.Q.addAction,
        actionType: ''
    };
    const [isSequential] = (0,useProxyWatch/* useProxyWatch */.x)(actionGroup, 'isSequential', actionGroup.isSequential);
    const [listSize] = (0,useProxyWatch/* useProxyWatch */.x)(actionGroup.list, 'length', actionGroup.list.length);
    function setIsSequential(value) {
        (0,proxyWatch/* toProxy */.I$)(actionGroup).isSequential = value;
    }
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(project_contexts/* ActionGroupContext */.Tj.Provider, {
        value: actionGroup,
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(project_contexts/* ActionListContext */.Us.Provider, {
            value: actionGroup.list,
            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.A, {
                sx: {
                    border: '2px solid #ccc',
                    padding: '4px'
                },
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)(Grid2/* default */.A, {
                        container: true,
                        sx: {
                            alignItems: 'center'
                        },
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(Grid2/* default */.A, {
                                size: "grow",
                                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.A, {
                                    children: t("content.title")
                                })
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(Grid2/* default */.A, {
                                children: listSize > 1 && /*#__PURE__*/ (0,jsx_runtime.jsx)(FormGroup/* default */.A, {
                                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(FormControlLabel/* default */.A, {
                                        control: /*#__PURE__*/ (0,jsx_runtime.jsx)(Switch/* default */.A, {
                                            checked: isSequential,
                                            "data-id": "action-group-checkbox-is-sequential.122f",
                                            "aria-checked": isSequential,
                                            "data-checked": isSequential,
                                            onChange: (e)=>{
                                                setIsSequential(e.target.checked);
                                            }
                                        }),
                                        label: t("content.sequential")
                                    })
                                })
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(Grid2/* default */.A, {
                                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.A, {
                                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(ActionListOrTriggerListPageLink, {
                                        query: query,
                                        attrs: (0,IChildToProject_intf/* getActionGroupElement */.q_)(actionGroup),
                                        path: "/action-list",
                                        btnId: "link-router-to-action-list",
                                        children: t("content.list")
                                    })
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(GroupCheck, {
                        group: actionGroup
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(ActionList, {})
                ]
            })
        })
    });
}

// EXTERNAL MODULE: ../../libs/droid/project-interface/src/trigger/ITrigger.intf.tsx
var ITrigger_intf = __webpack_require__(14438);
;// ../../libs/droid/project/src/project/ui/project/edit-project/trigger-action-group/trigger-action/trigger-group/trigger-list/trigger/Trigger.tsx







function Trigger(param) {
    let { triggerData } = param;
    const list = (0,react.useContext)(project_contexts/* TriggerListContext */.Ue);
    const utils = (0,ITrigger_intf/* getTriggerUtils */.gq)(triggerData.type);
    const onDeleteComfirmed = ()=>{
        const index = list.indexOf((0,proxyWatch/* toProxy */.I$)(triggerData));
        if (index === -1) return;
        (0,proxyWatch/* toProxy */.I$)(list).splice(index, 1);
    };
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(project_contexts/* TriggerContext */.MS.Provider, {
        value: triggerData,
        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.A, {
            children: [
                utils.UI(triggerData),
                /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.A, {
                    sx: {
                        textAlign: "center"
                    },
                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(ButtonConfirm/* ButtonConfirm */.b, {
                        title: "删除触发",
                        content: "确定删除本触发吗？",
                        onConfirm: onDeleteComfirmed,
                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Button/* default */.A, {
                            id: "del-trigger-btn",
                            "data-id": "del-trigger-btn",
                            children: "删除"
                        })
                    })
                })
            ]
        })
    });
}

;// ../../libs/droid/project/src/project/ui/project/edit-project/trigger-action-group/trigger-action/trigger-group/trigger-list/TriggerList.tsx






function TriggerList() {
    const triggerGroup = (0,react.useContext)(project_contexts/* TriggerGroupContext */.bf);
    const [l] = (0,useWatchUpdates/* useWatchUpdates */.p)(triggerGroup.list);
    // useEffect(()=>{
    //     console.log('llllllllllllllllllllllll', l)
    //     console.log('triggerGroupppppppppp', triggerGroup)
    // }, [l])
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(project_contexts/* TriggerListContext */.Ue.Provider, {
        value: triggerGroup.list,
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.A, {
            children: triggerGroup.list.map((trigger)=>/*#__PURE__*/ (0,jsx_runtime.jsx)(Trigger, {
                    triggerData: trigger
                }, getUpdateVersion(trigger).version))
        })
    });
}

;// ../../libs/droid/project/src/project/ui/project/edit-project/trigger-action-group/trigger-action/trigger-group/TriggerGroup.tsx











function TriggerGroup(param) {
    let { triggerGroup } = param;
    const { t } = (0,dist_es/* useTranslation */.Bd)("droid-project/project/ui/project/edit-project/trigger-action-group/trigger-action/trigger-group/content");
    const editInfo = (0,react.useContext)(ProjectEditInfoContext);
    const triggerActionGroup = (0,react.useContext)(project_contexts/* TriggerActionGroupContext */.NF);
    const triggerAction = (0,react.useContext)(project_contexts/* TriggerActionContext */.Ck);
    const query = {
        projectId: editInfo.project.id,
        triggerActionGroupId: triggerActionGroup.id,
        triggerActionId: triggerAction.id,
        triggerGroupId: triggerGroup.id,
        type: common/* ActionOrTriggerListTypeEnum */.Q.addAction,
        actionType: ''
    };
    const [isSequential] = (0,useProxyWatch/* useProxyWatch */.x)(triggerGroup, 'isSequential', triggerGroup.isSequential);
    const [listSize] = (0,useProxyWatch/* useProxyWatch */.x)(triggerGroup.list, 'length', triggerGroup.list.length);
    function setIsSequential(value) {
        (0,proxyWatch/* toProxy */.I$)(triggerGroup).isSequential = value;
    }
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(project_contexts/* TriggerGroupContext */.bf.Provider, {
        value: triggerGroup,
        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.A, {
            sx: {
                border: '2px solid #a4a737',
                padding: '4px',
                marginBottom: "2px",
                marginTop: "2px"
            },
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsxs)(Grid2/* default */.A, {
                    container: true,
                    sx: {
                        alignItems: 'center'
                    },
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(Grid2/* default */.A, {
                            size: "grow",
                            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.A, {
                                children: t("content.title")
                            })
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(Grid2/* default */.A, {
                            children: listSize > 1 && /*#__PURE__*/ (0,jsx_runtime.jsx)(FormGroup/* default */.A, {
                                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(FormControlLabel/* default */.A, {
                                    control: /*#__PURE__*/ (0,jsx_runtime.jsx)(Switch/* default */.A, {
                                        checked: isSequential,
                                        "data-id": "trigger-group-checkbox-is-sequential.122f",
                                        "aria-checked": isSequential,
                                        "data-checked": isSequential,
                                        onChange: (e)=>{
                                            setIsSequential(e.target.checked);
                                        }
                                    }),
                                    label: t("content.sequential")
                                })
                            })
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(Grid2/* default */.A, {
                            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.A, {
                                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(ActionListOrTriggerListPageLink, {
                                    query: query,
                                    attrs: IChildToProject_intf/* childToProjectDataUtils */.mR.triggerGroup.getTriggerGroupElement(triggerGroup),
                                    path: "/trigger-list",
                                    btnId: "link-router-to-trigger-list",
                                    children: t("content.list")
                                })
                            })
                        })
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)(GroupCheck, {
                    group: triggerGroup
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)(TriggerList, {})
            ]
        })
    });
}

;// ../../libs/droid/project/src/project/ui/project/edit-project/trigger-action-group/trigger-action/TriggerAction.tsx











function TriggerAction(param) {
    let { triggerAction } = param;
    const [name, setName] = (0,react.useState)(triggerAction.name || '未命名');
    function handleNameChange(name) {
        triggerAction.name = name;
        setName(name);
    }
    function handleDelete() {
        const parent = (0,parentProxy/* getParentWatchProxy */.SZ)(triggerAction);
        if (!parent) return;
        parent.splice(parent.indexOf(triggerAction), 1);
    }
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(project_contexts/* TriggerActionContext */.Ck.Provider, {
        value: triggerAction,
        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.A, {
            sx: {
                border: '2px solid #02450e',
                padding: '4px'
            },
            "data-id-trigger-action": triggerAction.id,
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsxs)(Grid2/* default */.A, {
                    sx: {
                        alignItems: 'center'
                    },
                    container: true,
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsxs)(Grid2/* default */.A, {
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime.jsx)(NotificationsNone, {}),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)(Handyman, {})
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(Grid2/* default */.A, {
                            size: "grow",
                            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(EditableText, {
                                setText: handleNameChange,
                                children: /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                    "data-id": "rename-trigger-action-btn.a4c6",
                                    children: name
                                })
                            })
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(Grid2/* default */.A, {
                            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(ButtonConfirm/* ButtonConfirm */.b, {
                                title: "提示",
                                content: "确认要删除这条触发器和动作吗",
                                onConfirm: handleDelete,
                                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(IconButton/* default */.A, {
                                    "data-id": "del-trigger-action-btn",
                                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(DeleteOutline, {})
                                })
                            })
                        })
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)(TriggerGroup, {
                    triggerGroup: triggerAction.triggerGroup
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)(ActionGroup, {
                    actionGroup: triggerAction.actionGroup
                })
            ]
        })
    });
}

;// ../../libs/droid/project/src/project/ui/project/edit-project/trigger-action-group/TriggerActionGroup.tsx












function TriggerActionGroup() {
    const { t } = (0,es/* useTranslation */.Bd)('droid-project/project/ui/project/edit-project/trigger-action-group/content');
    const editInfo = (0,react.useContext)(ProjectEditInfoContext);
    const [groupName, setGroupName] = (0,react.useState)(editInfo.project.triggerActionGroup.name || t('TriggerActionGroup.unamed'));
    const [list] = useWatchListOperation(editInfo.project.triggerActionGroup.list);
    function handleGroupNameChange(name) {
        editInfo.project.triggerActionGroup.name = name;
        setGroupName(name || t('TriggerActionGroup.unamed'));
    }
    const triggerActionGroup = editInfo.project.triggerActionGroup;
    function addTriggerAction() {
        const newTriggerAction = (0,ITriggerAction_intf/* createDefultTriggerAction */.n)();
        (0,parentProxy/* toParent */.sd)(triggerActionGroup).list.push(newTriggerAction);
    }
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(project_contexts/* TriggerActionGroupContext */.NF.Provider, {
        value: triggerActionGroup,
        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.A, {
            sx: {
                border: '2px solid rgb(217, 217, 217)',
                padding: '4px'
            },
            ...IChildToProject_intf/* childToProjectDataUtils */.mR.triggerActionGroup.getTriggerActionGroupElementByProp(triggerActionGroup.list),
            "data-id-trigger-action-group": triggerActionGroup.id,
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsxs)(Grid2/* default */.A, {
                    container: true,
                    sx: {
                        alignItems: 'center'
                    },
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsxs)(Grid2/* default */.A, {
                            container: true,
                            sx: {
                                alignItems: 'center'
                            },
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime.jsx)(NotificationsNone, {}),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)(Handyman, {}),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)(TableRows, {})
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(Grid2/* default */.A, {
                            size: "grow",
                            sx: {
                                alignItems: 'center',
                                width: "100%"
                            },
                            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.A, {
                                sx: {
                                    width: "100%"
                                },
                                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(EditableText, {
                                    setText: handleGroupNameChange,
                                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                        "data-id": "rename-groupname-btn-a322",
                                        style: {
                                            backgroundColor: 'red'
                                        },
                                        children: groupName
                                    })
                                })
                            })
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(Grid2/* default */.A, {
                            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.A, {
                                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(IconButton/* default */.A, {
                                    "data-id": "add-trigger-action-btn.22fab779-75e2-4e34-82f4-64667e7fc017",
                                    onClick: addTriggerAction,
                                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Add/* default */.A, {})
                                })
                            })
                        })
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.A, {
                    children: list.map((ta, index)=>{
                        const triggerAction = triggerActionGroup.list[index];
                        return /*#__PURE__*/ (0,jsx_runtime.jsx)(TriggerAction, {
                            triggerAction: triggerAction
                        }, getUpdateVersion(triggerAction).version);
                    })
                })
            ]
        })
    });
}

;// ../../node_modules/.pnpm/@mui+icons-material@6.4.12_@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_re_5ewkm5t5g27pzq5tz62v6ktvti/node_modules/@mui/icons-material/esm/Save.js
/* __next_internal_client_entry_do_not_use__ default auto */ 

/* harmony default export */ const Save = ((0,createSvgIcon/* default */.A)(/*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
    d: "M17 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V7zm-5 16c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3m3-10H5V5h10z"
}), 'Save'));

;// ../../libs/droid/project/src/project/ui/project/edit-project/EditProject.tsx















const BootstrapDialog = (0,styled/* default */.Ay)(Dialog/* default */.A)((param)=>{
    let { theme } = param;
    return {
        '& .MuiDialogContent-root': {
            padding: theme.spacing(2)
        },
        '& .MuiDialogActions-root': {
            padding: theme.spacing(1)
        }
    };
});
function ProjectContent() {
    const project = (0,react.useContext)(project_contexts/* ProjectContext */.vz);
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.A, {
        "data-id-project": project.id,
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Paper/* default */.A, {
            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(TriggerActionGroup, {})
        })
    });
}
function StayAlert() {
    const editInfo = (0,react.useContext)(ProjectEditInfoContext);
    const logger = Log/* Log */.tG.createCountedLogger(false, 'project-editor-effect');
    const [askStay] = (0,useProxyWatch/* useProxyWatch */.x)(editInfo, 'askStay', editInfo.askStay);
    const router = (0,next_router.useRouter)();
    function toLeave() {
        editInfo.askStay = false;
        editInfo.giveup = true;
        router.back();
        editInfo.giveup = false;
        editInfo.updated = false;
    }
    function handleClose() {
        editInfo.askStay = false;
    }
    function handleLeaveWithoutSave() {
        toLeave();
        storage/* projectStore */.D.deleteDraft(editInfo.project.id);
    }
    function handleSaveAndLeave() {
        editInfo.save();
        toLeave();
        storage/* projectStore */.D.deleteDraft(editInfo.project.id);
    }
    function handleStayAndEdit() {
        editInfo.askStay = false;
        editInfo.giveup = false;
        logger.log('handleStayAndEdit fn called ', 'objectCount=', object_count_utils/* objectCountUtils */._.getObjectCount(editInfo), 'editInfo=', editInfo);
    }
    function handleSaveToDraftAndLeave() {
        // projectStore.save
        storage/* projectStore */.D.addDraft(editInfo.project);
        toLeave();
    }
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.A, {
        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(BootstrapDialog, {
            onClose: handleClose,
            "aria-labelledby": "customized-dialog-title",
            open: askStay,
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsx)(DialogTitle/* default */.A, {
                    sx: {
                        m: 0,
                        p: 2
                    },
                    id: "customized-dialog-title",
                    children: "提示:您有更改没有保存，确定要离开吗？"
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)(IconButton/* default */.A, {
                    "aria-label": "close",
                    onClick: handleClose,
                    sx: (theme)=>({
                            position: 'absolute',
                            right: 8,
                            top: 8,
                            color: theme.palette.grey[500]
                        }),
                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Close, {})
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)(DialogContent/* default */.A, {
                    dividers: true
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsxs)(DialogActions/* default */.A, {
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(Button/* default */.A, {
                            onClick: handleLeaveWithoutSave,
                            children: "放弃保存并离开"
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(Button/* default */.A, {
                            onClick: handleSaveToDraftAndLeave,
                            children: "保存变更到草稿并离开"
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(Button/* default */.A, {
                            onClick: handleSaveAndLeave,
                            children: "保存并离开"
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(Button/* default */.A, {
                            onClick: handleStayAndEdit,
                            children: "留下编辑"
                        })
                    ]
                })
            ]
        })
    });
}
function ProjectTools() {
    const { t } = (0,es/* useTranslation */.Bd)('droid-project/project/ui/project/edit-project/content');
    function onRunClick() {}
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(jsx_runtime.Fragment, {
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.A, {
            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Button/* default */.A, {
                onClick: onRunClick,
                children: t("content.projectTools.run")
            })
        })
    });
}
function EditProjectBuilder() {
    const dispatcher = new Dispatcher/* Dispatcher */.m();
    const router = (0,next_router.useRouter)();
    const { id } = router.query;
    let project = storage/* projectStore */.D.findDraftOrSavedProject(id || '-1') || (0,IProject_data/* mergeProjectDataToDefultData */.D)({
        id: id || '-1'
    });
    const createProject = project;
    const draftPorjct = project = storage/* projectStore */.D.addDraft(createProject);
    const proxyProject = project = (0,proxyWatch/* toProxy */.I$)(draftPorjct);
    const parentProject = project = (0,parentProxy/* toParent */.sd)(proxyProject);
    const editInfo = editProjectInfoUtils.edit(parentProject);
    function checkUpdated() {
        const logger = new Log/* Log */.tG(false, 'checkUpdated_fn');
        logger.isPaused = true;
        const c = storage/* projectStore */.D.findSavedProject(project.id);
        logger.log('checkUpdated fn called', 'c=', c);
        editInfo.updated = !c || !lodash_default().isEqual(c, project);
        logger.log('editInfo.updated=', editInfo.updated);
        if (editInfo.updated && !editInfo.giveup) {
            editInfo.askStay = true;
            logger.log('checkUpdated fn called', 'editInfo.askStay=', editInfo.askStay);
            return true;
        }
        logger.log('checkUpdated fn called2', 'editInfo.askStay=', editInfo.askStay);
        return false;
    }
    function Content() {
        (0,react.useEffect)(()=>{
            takeProjectSnapshoot(project);
            if (!project) return;
            const unsub = (0,watchUpdates/* watchUpdates */.c)((0,parentProxy/* getParentProxyTarget */.Al)(project), ()=>{
                takeProjectSnapshoot(project);
                editInfo.updated = true;
            // console.log('project updated2', project)
            });
            return ()=>{
                unsub();
            };
        }, []);
        (0,react.useEffect)(()=>{
            const unsub = jsBridgeDispatcher.addListener("checkBrowserCanBack", (event)=>{
                const canBack = event.result = checkUpdated();
                console.log('ooooooooooooooooooooooooo checkBrowserCanBack_fn', event, 'canback=', canBack);
                if (canBack) storage/* projectStore */.D.deleteDraft(project.id);
            });
            return ()=>{
                unsub();
            };
        }, []);
        (0,react.useEffect)(()=>{
            return dispatcher.addListener('back', (e)=>{
                const canBack = e.defaultPrevented = checkUpdated();
                if (canBack) storage/* projectStore */.D.deleteDraft(project.id);
            });
        }, []);
        const p = (0,proxyWatch/* toProxy */.I$)(editInfo.project);
        return /*#__PURE__*/ (0,jsx_runtime.jsx)(ProjectEditInfoContext.Provider, {
            value: editInfo,
            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(project_contexts/* ProjectContext */.vz.Provider, {
                value: p,
                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.A, {
                    sx: {
                        width: "100%"
                    },
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(ProjectTools, {}),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(ProjectContent, {}),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(StayAlert, {})
                    ]
                })
            })
        });
    }
    function Title() {
        const { t } = (0,es/* useTranslation */.Bd)('droid-project/project/ui/project/edit-project/content');
        const clickToSetProjectName = t('content.clickToSetProjectName');
        const [name] = (0,useProxyWatch/* useProxyWatch */.x)(project, 'name', clickToSetProjectName);
        function setName(name) {
            project.name = name;
        }
        return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
            style: {
                display: 'flex',
                flexDirection: 'row',
                gap: 16,
                width: "100%",
                alignItems: "center"
            },
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                    style: {
                        flexGrow: 1,
                        paddingLeft: "2rem"
                    },
                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(EditableText, {
                        setText: setName,
                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)("h2", {
                            children: /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                id: "project-name-editor",
                                "data-id": "project-name-editor",
                                children: name || clickToSetProjectName
                            })
                        })
                    })
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)(IconButton/* default */.A, {
                    onClick: ()=>{
                        editInfo.save();
                    },
                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Save, {})
                })
            ]
        });
    }
    return {
        Content,
        Title,
        dispatcher
    };
}

// EXTERNAL MODULE: ../../libs/app/ui/src/components/app/AppShell.tsx + 2 modules
var AppShell = __webpack_require__(20939);
// EXTERNAL MODULE: ../../libs/app/ui/src/components/appbar/AppBar.tsx + 3 modules
var AppBar = __webpack_require__(97972);
// EXTERNAL MODULE: ./src/components/page/action-list/action.data.ts + 15 modules
var action_data = __webpack_require__(63053);
// EXTERNAL MODULE: ./src/components/page/trigger-list/trigger.data.ts + 11 modules
var trigger_data = __webpack_require__(2621);
;// ./src/pages/project-editor/index.tsx





function ProjectEditor() {
    const { Content, Title, dispatcher } = EditProjectBuilder();
    (0,action_data/* initActionListGroups */.v)();
    (0,trigger_data/* initTriggerListGroups */.J)();
    const appBarProps = {
        title: /*#__PURE__*/ (0,jsx_runtime.jsx)(Title, {}),
        back: true,
        backDispatcher: dispatcher
    };
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(AppShell/* AppShell */.G, {
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(AppBar/* AppbarContainer */.W, {
            appbarProps: appBarProps,
            titleConf: {
                ns: "homepage/pages/project-editor/content",
                key: "editor.title"
            },
            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Content, {})
        })
    });
}


/***/ }),

/***/ 56257:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   b: () => (/* binding */ ButtonConfirm)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(94513);
/* harmony import */ var _barrel_optimize_names_Button_Dialog_DialogActions_DialogContent_DialogTitle_mui_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(49280);
/* harmony import */ var _barrel_optimize_names_Button_Dialog_DialogActions_DialogContent_DialogTitle_mui_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3711);
/* harmony import */ var _barrel_optimize_names_Button_Dialog_DialogActions_DialogContent_DialogTitle_mui_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(18244);
/* harmony import */ var _barrel_optimize_names_Button_Dialog_DialogActions_DialogContent_DialogTitle_mui_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(69468);
/* harmony import */ var _barrel_optimize_names_Button_Dialog_DialogActions_DialogContent_DialogTitle_mui_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(28669);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(94285);
/* harmony import */ var _barrel_optimize_names_useTranslation_react_i18next__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9825);




function ButtonConfirm(param) {
    let { title, content, confirmText, cancelText, onConfirm, onCancel, onClose, cancelId, confirmId, children } = param;
    const [isOpen, setIsOpen] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const { t } = (0,_barrel_optimize_names_useTranslation_react_i18next__WEBPACK_IMPORTED_MODULE_2__/* .useTranslation */ .Bd)('fanfanlo/mui/dialog/content');
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", {
                onClick: ()=>setIsOpen(true),
                children: children
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_barrel_optimize_names_Button_Dialog_DialogActions_DialogContent_DialogTitle_mui_material__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A, {
                open: isOpen,
                onClose: ()=>setIsOpen(false),
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_barrel_optimize_names_Button_Dialog_DialogActions_DialogContent_DialogTitle_mui_material__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A, {
                        children: title || t('ButtonConfirm.title')
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_barrel_optimize_names_Button_Dialog_DialogActions_DialogContent_DialogTitle_mui_material__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .A, {
                        children: content || t('ButtonConfirm.content')
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_barrel_optimize_names_Button_Dialog_DialogActions_DialogContent_DialogTitle_mui_material__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .A, {
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_barrel_optimize_names_Button_Dialog_DialogActions_DialogContent_DialogTitle_mui_material__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .A, {
                                id: cancelId || 'btn-dialog-button-confirm-cancel',
                                "data-id": cancelId || 'btn-dialog-button-confirm-cancel',
                                onClick: ()=>{
                                    setIsOpen(false);
                                    onCancel === null || onCancel === void 0 ? void 0 : onCancel();
                                    onClose === null || onClose === void 0 ? void 0 : onClose(false);
                                },
                                children: cancelText || t('ButtonConfirm.cancel')
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_barrel_optimize_names_Button_Dialog_DialogActions_DialogContent_DialogTitle_mui_material__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .A, {
                                id: confirmId || 'btn-dialog-button-confirm-confirm',
                                "data-id": confirmId || 'btn-dialog-button-confirm-confirm',
                                onClick: ()=>{
                                    setIsOpen(false);
                                    onConfirm === null || onConfirm === void 0 ? void 0 : onConfirm();
                                    onClose === null || onClose === void 0 ? void 0 : onClose(true);
                                },
                                children: confirmText || t('ButtonConfirm.confirm')
                            })
                        ]
                    })
                ]
            })
        ]
    });
}


/***/ }),

/***/ 56539:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils_createSvgIcon_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(61541);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(94513);
/* __next_internal_client_entry_do_not_use__ default auto */ 

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_utils_createSvgIcon_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A)(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
    d: "M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6z"
}), 'Add'));


/***/ }),

/***/ 56608:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {


    (window.__NEXT_P = window.__NEXT_P || []).push([
      "/project-editor",
      function () {
        return __webpack_require__(24042);
      }
    ]);
    if(false) {}
  

/***/ }),

/***/ 65494:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ IconButton_IconButton)
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/react@19.1.0/node_modules/react/index.js
var react = __webpack_require__(94285);
// EXTERNAL MODULE: ../../node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs
var clsx = __webpack_require__(3638);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+utils@6.4.9_@types+react@19.1.8_react@19.1.0/node_modules/@mui/utils/esm/composeClasses/composeClasses.js
var composeClasses = __webpack_require__(95116);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/utils/useId.js
var useId = __webpack_require__(14036);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+system@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled@1_sfs2vjcbuqchwdpqpmkla22opm/node_modules/@mui/system/esm/colorManipulator/colorManipulator.js + 1 modules
var colorManipulator = __webpack_require__(21567);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/styles/styled.js
var styled = __webpack_require__(64624);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/utils/memoTheme.js + 1 modules
var memoTheme = __webpack_require__(10355);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/utils/createSimplePaletteValueFilter.js
var createSimplePaletteValueFilter = __webpack_require__(36118);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/DefaultPropsProvider/DefaultPropsProvider.js
var DefaultPropsProvider = __webpack_require__(79209);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/ButtonBase/ButtonBase.js + 5 modules
var ButtonBase = __webpack_require__(42932);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/CircularProgress/CircularProgress.js + 1 modules
var CircularProgress = __webpack_require__(95746);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/utils/capitalize.js
var capitalize = __webpack_require__(99512);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+utils@6.4.9_@types+react@19.1.8_react@19.1.0/node_modules/@mui/utils/esm/generateUtilityClasses/generateUtilityClasses.js
var generateUtilityClasses = __webpack_require__(92186);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+utils@6.4.9_@types+react@19.1.8_react@19.1.0/node_modules/@mui/utils/esm/generateUtilityClass/generateUtilityClass.js
var generateUtilityClass = __webpack_require__(69014);
;// ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/IconButton/iconButtonClasses.js


function getIconButtonUtilityClass(slot) {
    return (0,generateUtilityClass/* default */.Ay)('MuiIconButton', slot);
}
const iconButtonClasses = (0,generateUtilityClasses/* default */.A)('MuiIconButton', [
    'root',
    'disabled',
    'colorInherit',
    'colorPrimary',
    'colorSecondary',
    'colorError',
    'colorInfo',
    'colorSuccess',
    'colorWarning',
    'edgeStart',
    'edgeEnd',
    'sizeSmall',
    'sizeMedium',
    'sizeLarge',
    'loading',
    'loadingIndicator',
    'loadingWrapper'
]);
/* harmony default export */ const IconButton_iconButtonClasses = (iconButtonClasses);

// EXTERNAL MODULE: ../../node_modules/.pnpm/react@19.1.0/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(94513);
;// ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/IconButton/IconButton.js
/* __next_internal_client_entry_do_not_use__ default auto */ 















const useUtilityClasses = (ownerState)=>{
    const { classes, disabled, color, edge, size, loading } = ownerState;
    const slots = {
        root: [
            'root',
            loading && 'loading',
            disabled && 'disabled',
            color !== 'default' && "color".concat((0,capitalize/* default */.A)(color)),
            edge && "edge".concat((0,capitalize/* default */.A)(edge)),
            "size".concat((0,capitalize/* default */.A)(size))
        ],
        loadingIndicator: [
            'loadingIndicator'
        ],
        loadingWrapper: [
            'loadingWrapper'
        ]
    };
    return (0,composeClasses/* default */.A)(slots, getIconButtonUtilityClass, classes);
};
const IconButtonRoot = (0,styled/* default */.Ay)(ButtonBase/* default */.A, {
    name: 'MuiIconButton',
    slot: 'Root',
    overridesResolver: (props, styles)=>{
        const { ownerState } = props;
        return [
            styles.root,
            ownerState.loading && styles.loading,
            ownerState.color !== 'default' && styles["color".concat((0,capitalize/* default */.A)(ownerState.color))],
            ownerState.edge && styles["edge".concat((0,capitalize/* default */.A)(ownerState.edge))],
            styles["size".concat((0,capitalize/* default */.A)(ownerState.size))]
        ];
    }
})((0,memoTheme/* default */.A)((param)=>{
    let { theme } = param;
    return {
        textAlign: 'center',
        flex: '0 0 auto',
        fontSize: theme.typography.pxToRem(24),
        padding: 8,
        borderRadius: '50%',
        color: (theme.vars || theme).palette.action.active,
        transition: theme.transitions.create('background-color', {
            duration: theme.transitions.duration.shortest
        }),
        variants: [
            {
                props: (props)=>!props.disableRipple,
                style: {
                    '--IconButton-hoverBg': theme.vars ? "rgba(".concat(theme.vars.palette.action.activeChannel, " / ").concat(theme.vars.palette.action.hoverOpacity, ")") : (0,colorManipulator/* alpha */.X4)(theme.palette.action.active, theme.palette.action.hoverOpacity),
                    '&:hover': {
                        backgroundColor: 'var(--IconButton-hoverBg)',
                        // Reset on touch devices, it doesn't add specificity
                        '@media (hover: none)': {
                            backgroundColor: 'transparent'
                        }
                    }
                }
            },
            {
                props: {
                    edge: 'start'
                },
                style: {
                    marginLeft: -12
                }
            },
            {
                props: {
                    edge: 'start',
                    size: 'small'
                },
                style: {
                    marginLeft: -3
                }
            },
            {
                props: {
                    edge: 'end'
                },
                style: {
                    marginRight: -12
                }
            },
            {
                props: {
                    edge: 'end',
                    size: 'small'
                },
                style: {
                    marginRight: -3
                }
            }
        ]
    };
}), (0,memoTheme/* default */.A)((param)=>{
    let { theme } = param;
    return {
        variants: [
            {
                props: {
                    color: 'inherit'
                },
                style: {
                    color: 'inherit'
                }
            },
            ...Object.entries(theme.palette).filter((0,createSimplePaletteValueFilter/* default */.A)()) // check all the used fields in the style below
            .map((param)=>{
                let [color] = param;
                return {
                    props: {
                        color
                    },
                    style: {
                        color: (theme.vars || theme).palette[color].main
                    }
                };
            }),
            ...Object.entries(theme.palette).filter((0,createSimplePaletteValueFilter/* default */.A)()) // check all the used fields in the style below
            .map((param)=>{
                let [color] = param;
                return {
                    props: {
                        color
                    },
                    style: {
                        '--IconButton-hoverBg': theme.vars ? "rgba(".concat((theme.vars || theme).palette[color].mainChannel, " / ").concat(theme.vars.palette.action.hoverOpacity, ")") : (0,colorManipulator/* alpha */.X4)((theme.vars || theme).palette[color].main, theme.palette.action.hoverOpacity)
                    }
                };
            }),
            {
                props: {
                    size: 'small'
                },
                style: {
                    padding: 5,
                    fontSize: theme.typography.pxToRem(18)
                }
            },
            {
                props: {
                    size: 'large'
                },
                style: {
                    padding: 12,
                    fontSize: theme.typography.pxToRem(28)
                }
            }
        ],
        ["&.".concat(IconButton_iconButtonClasses.disabled)]: {
            backgroundColor: 'transparent',
            color: (theme.vars || theme).palette.action.disabled
        },
        ["&.".concat(IconButton_iconButtonClasses.loading)]: {
            color: 'transparent'
        }
    };
}));
const IconButtonLoadingIndicator = (0,styled/* default */.Ay)('span', {
    name: 'MuiIconButton',
    slot: 'LoadingIndicator',
    overridesResolver: (props, styles)=>styles.loadingIndicator
})((param)=>{
    let { theme } = param;
    return {
        display: 'none',
        position: 'absolute',
        visibility: 'visible',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        color: (theme.vars || theme).palette.action.disabled,
        variants: [
            {
                props: {
                    loading: true
                },
                style: {
                    display: 'flex'
                }
            }
        ]
    };
});
/**
 * Refer to the [Icons](/material-ui/icons/) section of the documentation
 * regarding the available icon options.
 */ const IconButton = /*#__PURE__*/ react.forwardRef(function IconButton(inProps, ref) {
    const props = (0,DefaultPropsProvider/* useDefaultProps */.b)({
        props: inProps,
        name: 'MuiIconButton'
    });
    const { edge = false, children, className, color = 'default', disabled = false, disableFocusRipple = false, size = 'medium', id: idProp, loading = null, loadingIndicator: loadingIndicatorProp, ...other } = props;
    const loadingId = (0,useId/* default */.A)(idProp);
    const loadingIndicator = loadingIndicatorProp !== null && loadingIndicatorProp !== void 0 ? loadingIndicatorProp : /*#__PURE__*/ (0,jsx_runtime.jsx)(CircularProgress/* default */.A, {
        "aria-labelledby": loadingId,
        color: "inherit",
        size: 16
    });
    const ownerState = {
        ...props,
        edge,
        color,
        disabled,
        disableFocusRipple,
        loading,
        loadingIndicator,
        size
    };
    const classes = useUtilityClasses(ownerState);
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(IconButtonRoot, {
        id: loading ? loadingId : idProp,
        className: (0,clsx/* default */.A)(classes.root, className),
        centerRipple: true,
        focusRipple: !disableFocusRipple,
        disabled: disabled || loading,
        ref: ref,
        ...other,
        ownerState: ownerState,
        children: [
            typeof loading === 'boolean' && /*#__PURE__*/ // use plain HTML span to minimize the runtime overhead
            (0,jsx_runtime.jsx)("span", {
                className: classes.loadingWrapper,
                style: {
                    display: 'contents'
                },
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(IconButtonLoadingIndicator, {
                    className: classes.loadingIndicator,
                    ownerState: ownerState,
                    children: loading && loadingIndicator
                })
            }),
            children
        ]
    });
});
 false ? 0 : void 0;
/* harmony default export */ const IconButton_IconButton = (IconButton);


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, [5352,1161,4380,2827,3390,7313,5771,8771,788,5881,7097,1590,3881,3900,1913,6291,3053,636,6593,8792], () => (__webpack_exec__(56608)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ _N_E = __webpack_exports__;
/******/ }
]);
//# sourceMappingURL=project-editor-8a34f62862fb09b0.js.map