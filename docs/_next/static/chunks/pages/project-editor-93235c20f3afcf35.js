(self["webpackChunk_N_E"] = self["webpackChunk_N_E"] || []).push([[1587],{

/***/ 43033:
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
// EXTERNAL MODULE: ../../libs/droid/project-interface/src/core/project-member-type.ts
var project_member_type = __webpack_require__(27880);
// EXTERNAL MODULE: ../../libs/droid/project-interface/src/events/projectEventUtils.ts
var projectEventUtils = __webpack_require__(6659);
// EXTERNAL MODULE: ../../libs/droid/project/src/iproject/triggers/time/timeout/ITriggerTimeout.inft.ts + 2 modules
var ITriggerTimeout_inft = __webpack_require__(49149);
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
            const trigger = ITriggerTimeout_inft/* triggerTimeoutUtils */.V.createDefaultData();
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
// EXTERNAL MODULE: ../../libs/droid/project/src/iproject/triggers/app/when-activity-in/ITriggerWhenActivityIn.ts + 2 modules
var ITriggerWhenActivityIn = __webpack_require__(82318);
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
ITriggerWhenActivityIn/* triggerWhenActivityInUtils */.S.onClickChange = onChangeSelect;
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
//     const trigger = triggerWhenActivityInUtils.mergeDataToDefaultData({javaData:{pn:info.pn, an:info.an, cn:info.cn}})
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
    const action = ITriggerWhenActivityIn/* triggerWhenActivityInUtils */.S.mergeDataToDefaultData({
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

/***/ 56608:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {


    (window.__NEXT_P = window.__NEXT_P || []).push([
      "/project-editor",
      function () {
        return __webpack_require__(72493);
      }
    ]);
    if(false) {}
  

/***/ }),

/***/ 72493:
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

// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+icons-material@6.4.12_@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_re_5ewkm5t5g27pzq5tz62v6ktvti/node_modules/@mui/icons-material/esm/Close.js
var Close = __webpack_require__(29864);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/styles/styled.js
var styled = __webpack_require__(64624);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/Box/Box.js + 2 modules
var Box = __webpack_require__(6445);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/Paper/Paper.js + 1 modules
var Paper = __webpack_require__(59864);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/IconButton/IconButton.js + 1 modules
var IconButton = __webpack_require__(65494);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/Tooltip/Tooltip.js + 4 modules
var Tooltip = __webpack_require__(77779);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/FormControlLabel/FormControlLabel.js + 1 modules
var FormControlLabel = __webpack_require__(30281);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/Switch/Switch.js + 1 modules
var Switch = __webpack_require__(85156);
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

// EXTERNAL MODULE: ../../libs/fanfanlo/src/i18n/i18n-value-loader.ts
var i18n_value_loader = __webpack_require__(62095);
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

// EXTERNAL MODULE: ../../libs/droid/project-interface/src/trigger/ITrigger.intf.tsx
var ITrigger_intf = __webpack_require__(14438);
// EXTERNAL MODULE: ../../libs/droid/project-interface/src/action/IAction.intf.ts
var IAction_intf = __webpack_require__(30624);
// EXTERNAL MODULE: __barrel_optimize__?names=ulid!=!../../node_modules/.pnpm/ulid@2.4.0/node_modules/ulid/dist/index.esm.js + 1 modules
var index_esm = __webpack_require__(67131);
// EXTERNAL MODULE: ../../libs/droid/project/src/iproject/actions/a11y/node-action/IActionNodeAction.ts + 1 modules
var IActionNodeAction = __webpack_require__(32973);
// EXTERNAL MODULE: ../../libs/droid/project/src/iproject/triggers/a11y/node-trigger/ITriggerNodeTrigger.ts + 2 modules
var ITriggerNodeTrigger = __webpack_require__(90514);
;// ../../libs/droid/project/src/iproject/triggers/a11y/node-trigger/selector-chain.ts
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

;// ../../libs/droid/project/src/project/ui/project/edit-project/handlers/nodeClickUtils.ts






const fileLog = new Log/* Log */.tG(false, 'nodeClickUtils_f');
fileLog.pause = false;
fileLog.childrenPaused = false;
/**
 * 创建 NodeTrigger + NodeAction 的 TriggerAction 对
 *
 * @param pn - 包名
 * @param an - Activity名
 * @param cn - 类名(可选)
 * @param node - 节点数据
 * @returns ITriggerAction
 */ function createNodeTriggerActionPair(pn, an, cn, node) {
    var _triggerData_permissions, _triggerData_injects, _actionData_permissions, _actionData_injects;
    fileLog.log('createNodeTriggerActionPair called');
    fileLog.log('pn =', pn);
    fileLog.log('an =', an);
    fileLog.log('cn =', cn);
    fileLog.log('node =', node);
    // 获取 trigger utils
    const triggerUtils = (0,ITrigger_intf/* getTriggerUtils */.gq)(ITriggerNodeTrigger/* triggerNodeTriggerType */.F);
    fileLog.log('got triggerUtils for type:', ITriggerNodeTrigger/* triggerNodeTriggerType */.F);
    if (!triggerUtils) {
        const errorMsg = "triggerUtils not found for type: ".concat(ITriggerNodeTrigger/* triggerNodeTriggerType */.F);
        fileLog.log(errorMsg);
        throw new Error(errorMsg);
    }
    fileLog.log('triggerUtils found');
    // 使用 mergeDataToDefaultData 创建 trigger 数据
    const triggerId = (0,index_esm/* ulid */.Z0)();
    fileLog.log('created triggerId =', triggerId);
    // 将 node 转换为 selectorChain
    fileLog.log('converting node to selectorChain...');
    const operations = nodeToSelectorChain(node);
    fileLog.log('selectorChain operations count:', operations.length);
    const triggerData = triggerUtils.mergeDataToDefaultData({
        id: triggerId,
        javaData: {
            pn,
            an,
            cn: cn || undefined,
            selectorChain: {
                operations: operations
            }
        }
    });
    fileLog.log('created triggerData with mergeDataToDefaultData');
    fileLog.log('triggerData.permissions count =', ((_triggerData_permissions = triggerData.permissions) === null || _triggerData_permissions === void 0 ? void 0 : _triggerData_permissions.length) || 0);
    fileLog.log('triggerData.injects count =', ((_triggerData_injects = triggerData.injects) === null || _triggerData_injects === void 0 ? void 0 : _triggerData_injects.length) || 0);
    fileLog.log('triggerData =', triggerData);
    // 获取 action utils
    const actionUtils = (0,IAction_intf/* getActionUtils */.e9)(IActionNodeAction/* actionNodeActionType */.p);
    fileLog.log('got actionUtils for type:', IActionNodeAction/* actionNodeActionType */.p);
    if (!actionUtils) {
        const errorMsg = "actionUtils not found for type: ".concat(IActionNodeAction/* actionNodeActionType */.p);
        fileLog.log(errorMsg);
        throw new Error(errorMsg);
    }
    fileLog.log('actionUtils found');
    // 使用 mergeDataToDefaultData 创建 action 数据
    const actionId = (0,index_esm/* ulid */.Z0)();
    fileLog.log('created actionId =', actionId);
    const actionData = actionUtils.mergeDataToDefaultData({
        id: actionId,
        javaData: {
            actionType: 'click',
            clickConfig: {
                useGlobalClick: false
            }
        }
    });
    fileLog.log('created actionData with mergeDataToDefaultData');
    fileLog.log('actionData.permissions count =', ((_actionData_permissions = actionData.permissions) === null || _actionData_permissions === void 0 ? void 0 : _actionData_permissions.length) || 0);
    fileLog.log('actionData.injects count =', ((_actionData_injects = actionData.injects) === null || _actionData_injects === void 0 ? void 0 : _actionData_injects.length) || 0);
    fileLog.log('actionData =', actionData);
    // 创建 actionGroup (IGroup<IActionData>)
    const actionGroupId = (0,index_esm/* ulid */.Z0)();
    fileLog.log('created actionGroupId =', actionGroupId);
    const actionGroup = {
        type: 'actionGroup',
        id: actionGroupId,
        list: [
            actionData
        ],
        checks: [
            [
                true
            ]
        ],
        isSequential: true
    };
    fileLog.log('created actionGroup =', actionGroup);
    // 创建 triggerGroup (IGroup<ITriggerData>)
    const triggerGroupId = (0,index_esm/* ulid */.Z0)();
    fileLog.log('created triggerGroupId =', triggerGroupId);
    const triggerGroup = {
        type: 'triggerGroup',
        id: triggerGroupId,
        list: [
            triggerData
        ],
        checks: [
            [
                true
            ]
        ],
        isSequential: true
    };
    fileLog.log('created triggerGroup =', triggerGroup);
    // 创建 triggerAction
    const triggerActionId = (0,index_esm/* ulid */.Z0)();
    fileLog.log('created triggerActionId =', triggerActionId);
    const triggerAction = {
        type: 'triggerAction',
        id: triggerActionId,
        name: '',
        triggerGroup,
        actionGroup
    };
    fileLog.log('created triggerAction =', triggerAction);
    return triggerAction;
}
/**
 * Node 布尔属性名称枚举
 * 定义 A11y Node 对象的布尔属性名称
 */ var NodeBooleanProperty = /*#__PURE__*/ function(NodeBooleanProperty) {
    NodeBooleanProperty["IS_CLICKABLE"] = "isClickable";
    NodeBooleanProperty["IS_ENABLED"] = "isEnabled";
    NodeBooleanProperty["IS_VISIBLE_TO_USER"] = "isVisibleToUser";
    NodeBooleanProperty["IS_SCROLLABLE"] = "isScrollable";
    NodeBooleanProperty["IS_CHECKABLE"] = "isCheckable";
    NodeBooleanProperty["IS_CHECKED"] = "isChecked";
    NodeBooleanProperty["IS_FOCUSABLE"] = "isFocusable";
    NodeBooleanProperty["IS_SELECTED"] = "isSelected";
    return NodeBooleanProperty;
}(NodeBooleanProperty || {});
/**
 * 将 A11y Node 数据转换为 SelectorChain operations
 *
 * @param node - A11y 节点数据
 * @returns operations 数组
 */ function nodeToSelectorChain(node) {
    const operations = [];
    fileLog.log('[nodeToSelectorChain] 开始转换 node 为 selectorChain');
    fileLog.log('[nodeToSelectorChain] node:', JSON.stringify(node));
    // 1. text - 优先级最高,如果有文本就使用
    if (node.text && typeof node.text === 'string' && node.text.trim() !== '') {
        const textValue = node.text.trim();
        fileLog.log('[nodeToSelectorChain] 添加 text selector:', textValue);
        operations.push({
            method: SelectorOperation.TEXT,
            value: textValue
        });
    }
    // 2. className - 几乎所有节点都有,作为辅助条件
    if (node.className && typeof node.className === 'string') {
        fileLog.log('[nodeToSelectorChain] 添加 className selector:', node.className);
        operations.push({
            method: SelectorOperation.CLASS_NAME,
            value: node.className
        });
    }
    // 3. 如果没有 text,考虑使用其他属性
    if (!node.text || node.text.trim() === '') {
        fileLog.log('[nodeToSelectorChain] 节点没有 text,考虑添加其他属性');
        // contentDescription (desc)
        if (node.contentDescription && typeof node.contentDescription === 'string' && node.contentDescription.trim() !== '') {
            fileLog.log('[nodeToSelectorChain] 添加 desc selector:', node.contentDescription);
            operations.push({
                method: SelectorOperation.DESC,
                value: node.contentDescription.trim()
            });
        }
        // resourceId (id)
        if (node.viewIdResourceName && typeof node.viewIdResourceName === 'string' && node.viewIdResourceName.trim() !== '') {
            fileLog.log('[nodeToSelectorChain] 添加 id selector:', node.viewIdResourceName);
            operations.push({
                method: SelectorOperation.ID,
                value: node.viewIdResourceName.trim()
            });
        }
    }
    // 4. 布尔属性 - 作为辅助条件(仅在有明确值时添加)
    const booleanAttrs = [
        {
            key: "isClickable",
            method: SelectorOperation.CLICKABLE
        },
        {
            key: "isEnabled",
            method: SelectorOperation.ENABLED
        },
        {
            key: "isVisibleToUser",
            method: SelectorOperation.VISIBLE_TO_USER
        },
        {
            key: "isScrollable",
            method: SelectorOperation.SCROLLABLE
        },
        {
            key: "isCheckable",
            method: SelectorOperation.CHECKABLE
        },
        {
            key: "isChecked",
            method: SelectorOperation.CHECKED
        },
        {
            key: "isFocusable",
            method: SelectorOperation.FOCUSABLE
        },
        {
            key: "isSelected",
            method: SelectorOperation.SELECTED
        }
    ];
    for (const attr of booleanAttrs){
        if (typeof node[attr.key] === 'boolean') {
            // 只添加有区分性的属性(true 的情况,或者对定位很重要的属性)
            if (node[attr.key] === true && (attr.key === "isClickable" || attr.key === "isEnabled")) {
                fileLog.log('[nodeToSelectorChain] 添加', attr.method, 'selector:', node[attr.key]);
                operations.push({
                    method: attr.method,
                    value: node[attr.key]
                });
            }
        }
    }
    // 5. bounds - 作为最后的兜底方案(当其他属性都不够唯一时)
    // 注意: bounds 可能随屏幕尺寸变化,所以优先级最低
    if (operations.length === 0 && node.boundsInScreen) {
        const bounds = node.boundsInScreen;
        if (typeof bounds.left === 'number' && typeof bounds.top === 'number' && typeof bounds.right === 'number' && typeof bounds.bottom === 'number') {
            fileLog.log('[nodeToSelectorChain] 其他属性不足,添加 bounds selector:', bounds);
            operations.push({
                method: SelectorOperation.BOUNDS,
                value: {
                    left: bounds.left,
                    top: bounds.top,
                    right: bounds.right,
                    bottom: bounds.bottom
                }
            });
        }
    }
    fileLog.log('[nodeToSelectorChain] 转换完成, operations count:', operations.length);
    fileLog.log('[nodeToSelectorChain] operations:', JSON.stringify(operations));
    return operations;
}

;// ../../libs/droid/project/src/project/ui/project/edit-project/handlers/handleNodeClickAction.ts



const handleNodeClickAction_fileLog = new Log/* Log */.tG(false, 'handleNodeClickAction_f');
handleNodeClickAction_fileLog.pause = false;
handleNodeClickAction_fileLog.childrenPaused = false;
/**
 * 处理添加节点点击配置的 action
 *
 * @param project - 当前 project 数据
 * @param action - URL 参数中的 action 值
 * @param dataBase64 - URL 参数中的 data 值(base64编码)
 * @returns 是否处理成功
 */ async function handleNodeClickAction(project, action, dataBase64) {
    handleNodeClickAction_fileLog.log('handleNodeClickAction called');
    handleNodeClickAction_fileLog.log('action =', action);
    handleNodeClickAction_fileLog.log('dataBase64 =', dataBase64);
    // 检查 action 是否为 addNodeClick
    if (action !== 'addNodeClick') {
        handleNodeClickAction_fileLog.log('action is not addNodeClick, skipping');
        return false;
    }
    // 检查 dataBase64 是否存在
    if (!dataBase64) {
        handleNodeClickAction_fileLog.error('dataBase64 is null or undefined');
        return false;
    }
    try {
        // 解码 base64 (使用 UTF-8 安全解码)
        handleNodeClickAction_fileLog.log('decoding base64...');
        const dataJson = decodeBase64ToUTF8(dataBase64);
        handleNodeClickAction_fileLog.log('dataJson =', dataJson);
        // 解析 JSON
        handleNodeClickAction_fileLog.log('parsing JSON...');
        const nodeData = JSON.parse(dataJson);
        handleNodeClickAction_fileLog.log('nodeData =', nodeData);
        // 验证数据完整性
        handleNodeClickAction_fileLog.log('validating data...');
        if (!nodeData.pn) {
            handleNodeClickAction_fileLog.error('pn is missing');
            return false;
        }
        if (!nodeData.an) {
            handleNodeClickAction_fileLog.error('an is missing');
            return false;
        }
        if (!nodeData.node) {
            handleNodeClickAction_fileLog.error('node is missing');
            return false;
        }
        handleNodeClickAction_fileLog.log('data validation passed');
        handleNodeClickAction_fileLog.log('pn =', nodeData.pn);
        handleNodeClickAction_fileLog.log('an =', nodeData.an);
        handleNodeClickAction_fileLog.log('cn =', nodeData.cn);
        handleNodeClickAction_fileLog.log('node =', nodeData.node);
        // TODO: 重复检测功能需要基于新的 selectorChain 数据结构重新实现
        // 当前暂时跳过重复检测
        handleNodeClickAction_fileLog.log('skipping duplicate check (需要基于 selectorChain 重新实现)');
        // 创建新的 triggerAction
        handleNodeClickAction_fileLog.log('creating new triggerAction with node trigger');
        // 创建新的 triggerAction 对 (trigger + action)
        const newTriggerAction = createNodeTriggerActionPair(nodeData.pn, nodeData.an, nodeData.cn, nodeData.node);
        handleNodeClickAction_fileLog.log('newTriggerAction created:', newTriggerAction.id);
        // 添加到 triggerActionGroup.list
        if (!project.triggerActionGroup) {
            handleNodeClickAction_fileLog.error('triggerActionGroup is null');
            return false;
        }
        if (!project.triggerActionGroup.list) {
            handleNodeClickAction_fileLog.log('initializing triggerActionGroup.list');
            project.triggerActionGroup.list = [];
        }
        project.triggerActionGroup.list.push(newTriggerAction);
        handleNodeClickAction_fileLog.log('added to triggerActionGroup, total count =', project.triggerActionGroup.list.length);
        // 保存 project
        handleNodeClickAction_fileLog.log('saving project...');
        try {
            storage/* projectStore */.D.saveProject(project);
            handleNodeClickAction_fileLog.log('project saved successfully');
        // alert('节点配置已添加')
        } catch (error) {
            handleNodeClickAction_fileLog.error('failed to save project:', error);
            alert('保存失败');
            return false;
        }
        handleNodeClickAction_fileLog.log('handleNodeClickAction completed');
        return true;
    } catch (error) {
        handleNodeClickAction_fileLog.error('Error in handleNodeClickAction:', error);
        return false;
    }
}
/**
 * 将 UTF-8 编码的 Base64 字符串解码为原始字符串
 * 支持中文和其他非 Latin1 字符
 *
 * @param base64 - Base64 编码的字符串
 * @returns 解码后的字符串
 */ function decodeBase64ToUTF8(base64) {
    handleNodeClickAction_fileLog.log('decodeBase64ToUTF8 called with base64 length =', base64.length);
    try {
        // 步骤 1: 使用 atob 将 Base64 解码为二进制字符串
        const binaryString = atob(base64);
        handleNodeClickAction_fileLog.log('binaryString length =', binaryString.length);
        // 步骤 2: 将二进制字符串转换为字节数组
        const utf8Bytes = new Uint8Array(binaryString.length);
        for(let i = 0; i < binaryString.length; i++){
            utf8Bytes[i] = binaryString.charCodeAt(i);
        }
        handleNodeClickAction_fileLog.log('utf8Bytes length =', utf8Bytes.length);
        // 步骤 3: 使用 TextDecoder 将 UTF-8 字节数组解码为字符串
        const decoder = new TextDecoder('utf-8');
        const result = decoder.decode(utf8Bytes);
        handleNodeClickAction_fileLog.log('result length =', result.length);
        return result;
    } catch (error) {
        handleNodeClickAction_fileLog.error('decodeBase64ToUTF8 error:', error);
        throw error;
    }
}

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
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+icons-material@6.4.12_@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_re_5ewkm5t5g27pzq5tz62v6ktvti/node_modules/@mui/icons-material/esm/Handyman.js
var Handyman = __webpack_require__(81856);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+icons-material@6.4.12_@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_re_5ewkm5t5g27pzq5tz62v6ktvti/node_modules/@mui/icons-material/esm/NotificationsNone.js
var NotificationsNone = __webpack_require__(29022);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+icons-material@6.4.12_@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_re_5ewkm5t5g27pzq5tz62v6ktvti/node_modules/@mui/icons-material/esm/TableRows.js
var TableRows = __webpack_require__(53589);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/Grid2/Grid2.js + 4 modules
var Grid2 = __webpack_require__(95771);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+icons-material@6.4.12_@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_re_5ewkm5t5g27pzq5tz62v6ktvti/node_modules/@mui/icons-material/esm/DeleteOutline.js
var DeleteOutline = __webpack_require__(64583);
// EXTERNAL MODULE: ../../libs/app/static/src/pages/trigger-list-action-list-common/common.ts
var common = __webpack_require__(24899);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/FormGroup/FormGroup.js + 1 modules
var FormGroup = __webpack_require__(80239);
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
                            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(DeleteOutline/* default */.A, {})
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

;// ../../libs/droid/project/src/project/ui/project/edit-project/trigger-action-group/trigger-action/action-group/action-list/action/Action.tsx






function Action(param) {
    let { actionData } = param;
    const list = (0,react.useContext)(project_contexts/* ActionListContext */.Us);
    const utils = (0,IAction_intf/* getActionUtils */.e9)(actionData.type);
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

;// ../../libs/droid/project/src/project/ui/project/edit-project/trigger-action-group/trigger-action/trigger-group/trigger-list/trigger/Trigger.tsx







const Trigger_fileLog = new Log/* Log */.tG(false, 'Trigger_f');
// fileLog.pause = true;
// fileLog.childrenPaused = true;
function Trigger(param) {
    let { triggerData } = param;
    const uiLog = Trigger_fileLog.sub(false, 'trigger_ui');
    // uiLog.pause = true
    // uiLog.childrenPaused = true
    const list = (0,react.useContext)(project_contexts/* TriggerListContext */.Ue);
    uiLog.log('triggerData.type', triggerData.type);
    const utils = (0,ITrigger_intf/* getTriggerUtils */.gq)(triggerData.type);
    const onDeleteComfirmed = ()=>{
        const index = list.indexOf((0,proxyWatch/* toProxy */.I$)(triggerData));
        if (index === -1) return;
        (0,proxyWatch/* toProxy */.I$)(list).splice(index, 1);
    };
    uiLog.info('utils', utils);
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
                                /*#__PURE__*/ (0,jsx_runtime.jsx)(NotificationsNone/* default */.A, {}),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)(Handyman/* default */.A, {})
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
                                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(DeleteOutline/* default */.A, {})
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
        const newTriggerAction = (0,ITriggerAction_intf/* createDefaultTriggerAction */.G)();
        (0,parentProxy/* toParent */.sd)(triggerActionGroup).list.push(newTriggerAction);
    }
    // 监听 isSequential 变化
    const [isSequential] = (0,useProxyWatch/* useProxyWatch */.x)(triggerActionGroup, 'isSequential', triggerActionGroup.isSequential);
    // 切换执行模式
    function handleSequentialChange(event) {
        const newValue = event.target.checked;
        console.log('[TriggerActionGroup] handleSequentialChange, newValue:', newValue);
        triggerActionGroup.isSequential = newValue;
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
                                /*#__PURE__*/ (0,jsx_runtime.jsx)(NotificationsNone/* default */.A, {}),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)(Handyman/* default */.A, {}),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)(TableRows/* default */.A, {})
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
                            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Tooltip/* default */.A, {
                                title: isSequential ? "顺序执行:按顺序逐个执行 TriggerAction" : "并发执行:同时执行所有 TriggerAction",
                                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(FormControlLabel/* default */.A, {
                                    control: /*#__PURE__*/ (0,jsx_runtime.jsx)(Switch/* default */.A, {
                                        checked: isSequential,
                                        onChange: handleSequentialChange,
                                        "data-id": "trigger-action-group-sequential-switch"
                                    }),
                                    label: "顺序"
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

// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+icons-material@6.4.12_@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_re_5ewkm5t5g27pzq5tz62v6ktvti/node_modules/@mui/icons-material/esm/Save.js
var Save = __webpack_require__(84118);
// EXTERNAL MODULE: ../../libs/droid/project/src/project/utils/runProject.ts + 6 modules
var runProject = __webpack_require__(97608);
;// ../../libs/droid/project/src/project/ui/project/edit-project/EditProject.tsx

















// import { IAppBarBackAskEvent } from "@app/static"
const EditProject_fileLog = new Log/* Log */.tG(false, 'EditProject_f');
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
                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Close/* default */.A, {})
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
function ProjectTools(param) {
    let { projectData } = param;
    const { t } = (0,es/* useTranslation */.Bd)('droid-project/project/ui/project/edit-project/content');
    const fnLog = EditProject_fileLog.sub(false, 'ProjectTools_fn');
    var _projectData_keepAlive;
    // 监听 keepAlive 状态
    const [keepAlive] = (0,useProxyWatch/* useProxyWatch */.x)(projectData, 'keepAlive', (_projectData_keepAlive = projectData.keepAlive) !== null && _projectData_keepAlive !== void 0 ? _projectData_keepAlive : false);
    fnLog.log('[ProjectTools] keepAlive:', String(keepAlive));
    // 切换 keepAlive
    function handleKeepAliveChange(event) {
        const newValue = event.target.checked;
        fnLog.log('[ProjectTools] handleKeepAliveChange - newValue:', newValue);
        projectData.keepAlive = newValue;
        fnLog.log('[ProjectTools] handleKeepAliveChange - projectData.keepAlive:', String(projectData.keepAlive));
    }
    async function onRunClick() {
        const fnLog = EditProject_fileLog.sub(false, 'onRunClick_fn');
        fnLog.log('[onRunClick] 调用 runProject 函数');
        fnLog.log('[onRunClick] projectData.id:', projectData.id);
        fnLog.log('[onRunClick] projectData.name:', projectData.name);
        fnLog.log('[onRunClick] projectData.keepAlive:', String(projectData.keepAlive));
        try {
            const result = await (0,runProject/* runProject */.t)(projectData);
            fnLog.log('[onRunClick] runProject 返回结果:', result);
        } catch (error) {
            fnLog.log('[onRunClick] runProject 执行异常:', error);
        }
    }
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(jsx_runtime.Fragment, {
        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.A, {
            sx: {
                display: 'flex',
                flexDirection: 'row',
                gap: 2,
                alignItems: 'center',
                padding: 2
            },
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsx)(Button/* default */.A, {
                    onClick: onRunClick,
                    children: t("content.projectTools.run")
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)(Tooltip/* default */.A, {
                    title: keepAlive ? "持续运行模式:Project 不会在 Action 完成后自动退出" : "普通模式:Action 完成后自动退出",
                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(FormControlLabel/* default */.A, {
                        control: /*#__PURE__*/ (0,jsx_runtime.jsx)(Switch/* default */.A, {
                            checked: keepAlive,
                            onChange: handleKeepAliveChange,
                            "data-id": "project-keep-alive-switch"
                        }),
                        label: "持续运行"
                    })
                })
            ]
        })
    });
}
function EditProjectBuilder() {
    const dispatcher = new Dispatcher/* Dispatcher */.m();
    const router = (0,next_router.useRouter)();
    const { id } = router.query;
    // 这个project和下面editInfo.project并不是同一个，一般应该使用editInfo.project
    let project = storage/* projectStore */.D.findDraftOrSavedProject(id || '-1') || (0,IProject_data/* mergeProjectDataToDefaultData */.u)({
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
            // fileLog.log('[Content] useEffect: 初始化项目系统')
            // initProjectSystem()
            // fileLog.log('[Content] useEffect: 项目系统初始化完成')
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
        // 处理从 DeepLinkRouter 传来的 addNodeClick action
        (0,react.useEffect)(()=>{
            EditProject_fileLog.log('EditProject - checking URL params for addNodeClick action');
            const { action, data } = router.query;
            EditProject_fileLog.log('action =', action);
            EditProject_fileLog.log('data =', data);
            if (action && data) {
                EditProject_fileLog.log('calling handleNodeClickAction...');
                handleNodeClickAction(project, action, data).then((success)=>{
                    EditProject_fileLog.log('handleNodeClickAction result:', success);
                }).catch((error)=>{
                    EditProject_fileLog.error('handleNodeClickAction error:', error);
                });
            } else {
                EditProject_fileLog.log('no action or data in URL params');
            }
        }, [
            router.query
        ]);
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
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(ProjectTools, {
                            projectData: project
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(ProjectContent, {}),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(StayAlert, {})
                    ]
                })
            })
        });
    }
    function Title() {
        const project = editInfo.project;
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
                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Save/* default */.A, {})
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
// EXTERNAL MODULE: ./src/components/page/action-list/action.data.ts + 8 modules
var action_data = __webpack_require__(35305);
// EXTERNAL MODULE: ./src/components/page/trigger-list/trigger.data.ts + 4 modules
var trigger_data = __webpack_require__(43033);
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


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, [5299,9893,3685,7097,7779,9577,8813,4873,7572,5532,636,6593,8792], () => (__webpack_exec__(56608)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ _N_E = __webpack_exports__;
/******/ }
]);
//# sourceMappingURL=project-editor-93235c20f3afcf35.js.map