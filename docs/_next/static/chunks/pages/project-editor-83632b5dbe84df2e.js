(self["webpackChunk_N_E"] = self["webpackChunk_N_E"] || []).push([[1587],{

/***/ 10322:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  J: () => (/* binding */ initTriggerListGroups),
  R: () => (/* binding */ triggerListGroups)
});

// EXTERNAL MODULE: ../../libs/app/static/src/pages/trigger-list-action-list-common/common.ts
var common = __webpack_require__(82964);
// EXTERNAL MODULE: ../../libs/droid/project-v2-interface/src/index.ts + 25 modules
var src = __webpack_require__(22812);
// EXTERNAL MODULE: ../../libs/droid/project-v2-ext/src/index.ts + 59 modules
var project_v2_ext_src = __webpack_require__(29144);
// EXTERNAL MODULE: ../../libs/fanfanlo/src/utils/throw-trace-error.ts
var throw_trace_error = __webpack_require__(51020);
// EXTERNAL MODULE: ./src/components/trigger-list-action-list-common/ITriggerList-IActionList-common.intf.tsx
var ITriggerList_IActionList_common_intf = __webpack_require__(42248);
;// ./src/components/page/trigger-list/groups/time/timeout/timeout.tsx

// v2: 使用 project-v2-interface 替代 project-interface




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
    const res = (0,src/* getTriggerOrActionListPageParams */.JT)(query);
    switch(query.type){
        case common/* ActionOrTriggerListTypeEnum */.Q.addAction:
            const trigger = project_v2_ext_src/* triggerTimeoutUtils */.Vl.createDefaultData();
            if (!res.data.triggerGroup) {
                return (0,throw_trace_error/* throwTraceError */.w)('triggerGroup is not found', query);
            }
            src/* projectEventUtils */.TC.dispatchEditEvent(src/* projectEventUtils */.TC.EditType.add, {
                projectMemberType: src/* ProjectMemberType */.KY.triggerGroup,
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
var is_in_android = __webpack_require__(49378);
// EXTERNAL MODULE: ../../libs/droid/android/src/htmls/PnAnInfoWindow.ts + 1 modules
var PnAnInfoWindow = __webpack_require__(36370);
// EXTERNAL MODULE: ../../libs/droid/android/src/android/AutoWebViewJs.ts + 1 modules
var AutoWebViewJs = __webpack_require__(68709);
// EXTERNAL MODULE: ../../libs/fanfanlo/src/utils/stringUtils.ts
var stringUtils = __webpack_require__(70649);
;// ./src/components/page/trigger-list/groups/app/activity/activity-in.tsx

// v2: 使用 project-v2-interface 替代 project-interface




const activityInItem = {
    id: "activity-in-item-ce8c",
    i18nNs: "homepage/components/page/trigger-list/groups/app/activity/content",
    nameKey: "content.name",
    group: "activityInItem.group",
    descriptionKey: "content.description",
    type: "trigger",
    LinkRender: (0,ITriggerList_IActionList_common_intf/* createActionOrTriggerButtonRender */.cI)(onAddSelect)
};
project_v2_ext_src/* triggerWhenActivityInUtils */.SR.onClickChange = onChangeSelect;
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
    const res = (0,src/* getTriggerOrActionListPageParams */.JT)(query);
    const action = project_v2_ext_src/* triggerWhenActivityInUtils */.SR.mergeDataToDefaultData({
        javaData: {
            pn: info.pn,
            an: info.an,
            cn: info.cn
        }
    });
    src/* projectEventUtils */.TC.dispatchEditEvent(src/* projectEventUtils */.TC.EditType.add, {
        data: action,
        projectMemberType: src/* ProjectMemberType */.KY.triggerGroup,
        projectInfo: res.data
    });
    console.log('ccccccccccccccall open self');
    AutoWebViewJs/* autoWebViewJs */.yx.openSelfByPackage();
    window.history.back();
}
async function onChangeSelect(param) {
    let { query } = param;
    const info = await activity_in_onSelect();
    const res = (0,src/* getTriggerOrActionListPageParams */.JT)(query);
    src/* projectEventUtils */.TC.dispatchEditEvent(src/* projectEventUtils */.TC.EditType.updateJavaData, {
        data: info,
        projectMemberType: src/* ProjectMemberType */.KY.trigger,
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

;// ./src/components/page/trigger-list/groups/script/script-trigger/script-trigger.tsx

// v2: 使用 project-v2-interface 替代 project-interface




const scriptTriggerItem = {
    id: "script-trigger-item-ce8c",
    i18nNs: "homepage/components/page/trigger-list/groups/script/script-trigger/content",
    nameKey: "content.name",
    group: "scriptTriggerItem.group",
    descriptionKey: "content.description",
    type: "trigger",
    LinkRender: (0,ITriggerList_IActionList_common_intf/* createActionOrTriggerButtonRender */.cI)(script_trigger_onSelect)
};
function script_trigger_onSelect(param) {
    let { query, item } = param;
    const res = (0,src/* getTriggerOrActionListPageParams */.JT)(query);
    switch(query.type){
        case common/* ActionOrTriggerListTypeEnum */.Q.addAction:
            const trigger = project_v2_ext_src/* triggerScriptUtils */.JW.createDefaultData();
            console.log('[scriptTrigger.onSelect] 创建脚本触发器:', trigger);
            if (!res.data.triggerGroup) {
                return (0,throw_trace_error/* throwTraceError */.w)('triggerGroup is not found', query);
            }
            src/* projectEventUtils */.TC.dispatchEditEvent(src/* projectEventUtils */.TC.EditType.add, {
                projectMemberType: src/* ProjectMemberType */.KY.triggerGroup,
                data: trigger,
                projectInfo: res.data
            });
            console.log('[scriptTrigger.onSelect] 事件已分发');
            window.history.back();
            break;
        case common/* ActionOrTriggerListTypeEnum */.Q.updateAction:
            console.log('[scriptTrigger.onSelect] updateAction 暂未实现');
            break;
    }
}

;// ./src/components/page/trigger-list/groups/script/script-group.ts

const scriptGroup = {
    i18nNs: "homepage/components/page/trigger-list/groups/script/content",
    nameKey: "content.name",
    descriptionKey: "content.description",
    items: [
        scriptTriggerItem
    ]
};

;// ./src/components/page/trigger-list/trigger.data.ts



const triggerListGroups = [
    timeGroup,
    appGroup,
    scriptGroup
];
async function initTriggerListGroups() {
    triggerListGroups;
}


/***/ }),

/***/ 31480:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils_createSvgIcon_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(38803);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(94513);
/* __next_internal_client_entry_do_not_use__ default auto */ 

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_utils_createSvgIcon_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A)(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
    d: "M19.14 12.94c.04-.3.06-.61.06-.94 0-.32-.02-.64-.07-.94l2.03-1.58c.18-.14.23-.41.12-.61l-1.92-3.32c-.12-.22-.37-.29-.59-.22l-2.39.96c-.5-.38-1.03-.7-1.62-.94l-.36-2.54c-.04-.24-.24-.41-.48-.41h-3.84c-.24 0-.43.17-.47.41l-.36 2.54c-.59.24-1.13.57-1.62.94l-2.39-.96c-.22-.08-.47 0-.59.22L2.74 8.87c-.12.21-.08.47.12.61l2.03 1.58c-.05.3-.09.63-.09.94s.02.64.07.94l-2.03 1.58c-.18.14-.23.41-.12.61l1.92 3.32c.12.22.37.29.59.22l2.39-.96c.5.38 1.03.7 1.62.94l.36 2.54c.05.24.24.41.48.41h3.84c.24 0 .44-.17.47-.41l.36-2.54c.59-.24 1.13-.56 1.62-.94l2.39.96c.22.08.47 0 .59-.22l1.92-3.32c.12-.22.07-.47-.12-.61zM12 15.6c-1.98 0-3.6-1.62-3.6-3.6s1.62-3.6 3.6-3.6 3.6 1.62 3.6 3.6-1.62 3.6-3.6 3.6"
}), 'Settings'));


/***/ }),

/***/ 40373:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {


    (window.__NEXT_P = window.__NEXT_P || []).push([
      "/project-editor",
      function () {
        return __webpack_require__(47327);
      }
    ]);
    if(false) {}
  

/***/ }),

/***/ 47327:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ ProjectEditorV2Test)
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/react@19.1.0/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(94513);
// EXTERNAL MODULE: ../../libs/fanfanlo/src/dispatcher/Dispatcher.ts
var Dispatcher = __webpack_require__(30910);
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

// EXTERNAL MODULE: ../../libs/droid/project-v2-interface/src/index.ts + 25 modules
var src = __webpack_require__(22812);
// EXTERNAL MODULE: ../../libs/app/static/src/pages/trigger-list-action-list-common/common.ts
var common = __webpack_require__(82964);
// EXTERNAL MODULE: ../../libs/fanfanlo/src/log/Log.ts + 1 modules
var Log = __webpack_require__(89597);
// EXTERNAL MODULE: ../../libs/fanfanlo/src/watcher/useProxyWatch.ts
var useProxyWatch = __webpack_require__(80502);
// EXTERNAL MODULE: ../../libs/fanfanlo/src/utils/debug/object-count-utils.ts
var object_count_utils = __webpack_require__(79132);
// EXTERNAL MODULE: ../../libs/fanfanlo/src/watcher/proxyWatch.ts
var proxyWatch = __webpack_require__(57641);
// EXTERNAL MODULE: ../../libs/fanfanlo/src/watcher/parentProxy.ts
var parentProxy = __webpack_require__(74346);
// EXTERNAL MODULE: ../../libs/fanfanlo/src/watcher/watchUpdates.ts
var watchUpdates = __webpack_require__(31365);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/Dialog/Dialog.js + 1 modules
var Dialog = __webpack_require__(46822);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/DialogTitle/DialogTitle.js
var DialogTitle = __webpack_require__(16880);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/DialogContent/DialogContent.js + 1 modules
var DialogContent = __webpack_require__(88149);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/TextField/TextField.js + 1 modules
var TextField = __webpack_require__(32314);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/DialogActions/DialogActions.js + 1 modules
var DialogActions = __webpack_require__(89701);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/Button/Button.js + 3 modules
var Button = __webpack_require__(20872);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react@19.1.0/node_modules/react/index.js
var react = __webpack_require__(94285);
// EXTERNAL MODULE: __barrel_optimize__?names=useTranslation!=!../../node_modules/.pnpm/react-i18next@15.6.0_i18next@24.2.3_typescript@5.7.3__react-dom@19.1.0_react@19.1.0__react@19.1.0_typescript@5.7.3/node_modules/react-i18next/dist/es/index.js
var es = __webpack_require__(51011);
;// ../../libs/fanfanlo/src/mui/dialog/EditableText.tsx





function EditableText(param) {
    let { setText, title, cancelText, saveText, contentText, helperText, minHeight, children, multiline } = param;
    const { t } = (0,es/* useTranslation */.Bd)('fanfanlo/mui/dialog/content');
    const [editText, setEditText] = (0,react.useState)('');
    const [isEditing, setIsEditing] = (0,react.useState)(false);
    function handleEdit(s) {
        setEditText(s);
    }
    function onConfirmClick() {
        setIsEditing(false);
        setText(editText);
    }
    function onCancel() {
        setIsEditing(false);
    }
    function onKeyDown(e) {
        if (e.key === 'Enter' && !multiline) {
            onConfirmClick();
        }
    }
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                "data-testid": "EditableText__triggerSpan__01JFXYZAH7H8I9J0K1L2M3N4",
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
                            onKeyDown: (e)=>{
                                onKeyDown(e);
                            },
                            multiline: multiline,
                            "data-testid": "EditableText__textField__01JFXYZAI8I9J0K1L2M3N4O5",
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
                                "data-testid": "EditableText__cancelButton__01JFXYZAJ9J0K1L2M3N4O5P6",
                                id: "editable-text-cancel",
                                "data-id": "editable-text-cancel",
                                onClick: onCancel,
                                children: cancelText || t('EditableText.cancel')
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(Button/* default */.A, {
                                "data-testid": "EditableText__saveButton__01JFXYZAK0K1L2M3N4O5P6Q7",
                                id: "editable-text-save",
                                "data-id": "editable-text-save",
                                onClick: onConfirmClick,
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
var Close = __webpack_require__(24299);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/styles/styled.js
var styled = __webpack_require__(96543);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/Box/Box.js + 2 modules
var Box = __webpack_require__(92061);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/Paper/Paper.js + 1 modules
var Paper = __webpack_require__(68732);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/IconButton/IconButton.js + 1 modules
var IconButton = __webpack_require__(10184);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/Tooltip/Tooltip.js + 1 modules
var Tooltip = __webpack_require__(33140);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/FormControlLabel/FormControlLabel.js + 1 modules
var FormControlLabel = __webpack_require__(21069);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/Switch/Switch.js + 1 modules
var Switch = __webpack_require__(48230);
// EXTERNAL MODULE: ../../node_modules/.pnpm/next@15.3.5_@babel+core@7.28.0_@playwright+test@1.57.0_babel-plugin-macros@3.1.0_react-dom@19_gjfccjsd7b6xv5ktyj7vxamu6q/node_modules/next/router.js
var next_router = __webpack_require__(1674);
// EXTERNAL MODULE: ../../libs/fanfanlo/src/i18n/i18n-value-loader.ts
var i18n_value_loader = __webpack_require__(91628);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react-hot-toast@2.5.2_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/react-hot-toast/dist/index.mjs + 1 modules
var dist = __webpack_require__(73349);
// EXTERNAL MODULE: ../../libs/fanfanlo/src/remote/request.ts
var request = __webpack_require__(73603);
// EXTERNAL MODULE: ../../libs/app/model/src/remote/tms.ts
var tms = __webpack_require__(20928);
;// ../../libs/app/model/src/remote/project/createProject.ts


/**
 * 创建项目
 * @param opts 请求选项
 * @returns 创建结果
 */ async function createProject(opts) {
    console.log('[createProject] 开始创建项目, params:', JSON.stringify(opts.params));
    const res = await (0,request/* request */.Em)(tms/* tms */.X.TProject, tms/* tms */.X.MProjectCreateProject, opts.params, opts.gateway, opts.handler);
    if (res.shellIsOk) {
        console.log('[createProject] 请求成功, shellIsOk:', res.shellIsOk);
    } else {
        console.log('[createProject] 请求失败, shellIsOk:', res.shellIsOk, 'err:', res.err);
    }
    if (res.dataIsOk) {
        console.log('[createProject] 数据正常, dataIsOk:', res.dataIsOk);
    } else {
        var _res_data, _res_data1;
        console.log('[createProject] 数据异常, dataIsOk:', res.dataIsOk, 'errMsg:', (_res_data = res.data) === null || _res_data === void 0 ? void 0 : _res_data.errMsg, 'errCode:', (_res_data1 = res.data) === null || _res_data1 === void 0 ? void 0 : _res_data1.errCode);
    }
    if (res.data) {
        if (res.data.is_ok) {
            var _res_data_project;
            console.log('[createProject] 创建成功, project.uuid:', (_res_data_project = res.data.project) === null || _res_data_project === void 0 ? void 0 : _res_data_project.uuid);
        } else {
            console.log('[createProject] 创建失败, msg:', res.data.msg);
        }
    } else {
        console.log('[createProject] 无返回数据');
    }
    return res;
}
/* harmony default export */ const project_createProject = ((/* unused pure expression or super */ null && (createProject)));

;// ../../libs/app/model/src/remote/project/updateProject.ts


/**
 * 更新项目
 * @param opts 请求选项
 * @returns 更新结果
 */ async function updateProject(opts) {
    console.log('[updateProject] 开始更新项目, params:', JSON.stringify(opts.params));
    const res = await (0,request/* request */.Em)(tms/* tms */.X.TProject, tms/* tms */.X.MProjectUpdateProject, opts.params, opts.gateway, opts.handler);
    if (res.shellIsOk) {
        console.log('[updateProject] 请求成功, shellIsOk:', res.shellIsOk);
    } else {
        console.log('[updateProject] 请求失败, shellIsOk:', res.shellIsOk, 'err:', res.err);
    }
    if (res.dataIsOk) {
        console.log('[updateProject] 数据正常, dataIsOk:', res.dataIsOk);
    } else {
        var _res_data, _res_data1;
        console.log('[updateProject] 数据异常, dataIsOk:', res.dataIsOk, 'errMsg:', (_res_data = res.data) === null || _res_data === void 0 ? void 0 : _res_data.errMsg, 'errCode:', (_res_data1 = res.data) === null || _res_data1 === void 0 ? void 0 : _res_data1.errCode);
    }
    if (res.data) {
        if (res.data.isOk) {
            var _res_data_project;
            console.log('[updateProject] 更新成功, project.uuid:', (_res_data_project = res.data.project) === null || _res_data_project === void 0 ? void 0 : _res_data_project.uuid);
            console.log('[updateProject] 变更信息:', JSON.stringify(res.data.changes));
            console.log('[updateProject] 删除的子级:', res.data.deletedChildren);
            console.log('[updateProject] 创建的子级:', res.data.createdChildren);
        } else {
            console.log('[updateProject] 更新失败, msg:', res.data.msg);
        }
    } else {
        console.log('[updateProject] 无返回数据');
    }
    return res;
}
/* harmony default export */ const project_updateProject = ((/* unused pure expression or super */ null && (updateProject)));

;// ../../libs/droid/project-v2-ui/src/utils/projectSyncUtils.ts
/**
 * Project 远程同步工具
 * 处理 project 的创建和更新到服务器
 */ 



const fileLog = new Log/* Log */.tG(false, 'projectSyncUtils');
fileLog.pause = true;
/**
 * 内部函数：同步单个 project 对象的 uuid
 */ function syncUuidsToProject(localProject, serverProject) {
    const fnLog = fileLog.sub(false, 'syncUuidsToProject_fn');
    // 同步 project 的 uuid
    if (serverProject.uuid && !localProject.uuid) {
        localProject.uuid = serverProject.uuid;
        fnLog.log('[syncUuidsToProject] project.uuid:', localProject.uuid);
    }
    // 同步 children (triggerActionGroup) 的 uuid
    const localChildren = localProject.children || [];
    const serverChildren = serverProject.children || [];
    for(let i = 0; i < localChildren.length && i < serverChildren.length; i++){
        const localTAG = localChildren[i];
        const serverTAG = serverChildren[i];
        if (serverTAG.uuid && !localTAG.uuid) {
            localTAG.uuid = serverTAG.uuid;
            fnLog.log('[syncUuidsToProject] children[' + i + '].uuid:', localTAG.uuid);
        }
        // 同步 triggerAction 的 uuid
        const localTAs = localTAG.children || [];
        const serverTAs = serverTAG.children || [];
        for(let j = 0; j < localTAs.length && j < serverTAs.length; j++){
            const localTA = localTAs[j];
            const serverTA = serverTAs[j];
            if (serverTA.uuid && !localTA.uuid) {
                localTA.uuid = serverTA.uuid;
                fnLog.log('[syncUuidsToProject] triggerAction[' + j + '].uuid:', localTA.uuid);
            }
            // 同步 triggerGroup 的 uuid
            if (localTA.triggerGroup && serverTA.triggerGroup) {
                if (serverTA.triggerGroup.uuid && !localTA.triggerGroup.uuid) {
                    localTA.triggerGroup.uuid = serverTA.triggerGroup.uuid;
                    fnLog.log('[syncUuidsToProject] triggerGroup.uuid:', localTA.triggerGroup.uuid);
                }
                // 同步 trigger 的 uuid
                const localTriggers = localTA.triggerGroup.children || [];
                const serverTriggers = serverTA.triggerGroup.children || [];
                for(let k = 0; k < localTriggers.length && k < serverTriggers.length; k++){
                    if (serverTriggers[k].uuid && !localTriggers[k].uuid) {
                        localTriggers[k].uuid = serverTriggers[k].uuid;
                        fnLog.log('[syncUuidsToProject] trigger[' + k + '].uuid:', localTriggers[k].uuid);
                    }
                }
            }
            // 同步 actionGroup 的 uuid
            if (localTA.actionGroup && serverTA.actionGroup) {
                if (serverTA.actionGroup.uuid && !localTA.actionGroup.uuid) {
                    localTA.actionGroup.uuid = serverTA.actionGroup.uuid;
                    fnLog.log('[syncUuidsToProject] actionGroup.uuid:', localTA.actionGroup.uuid);
                }
                // 同步 action 的 uuid
                const localActions = localTA.actionGroup.children || [];
                const serverActions = serverTA.actionGroup.children || [];
                for(let k = 0; k < localActions.length && k < serverActions.length; k++){
                    if (serverActions[k].uuid && !localActions[k].uuid) {
                        localActions[k].uuid = serverActions[k].uuid;
                        fnLog.log('[syncUuidsToProject] action[' + k + '].uuid:', localActions[k].uuid);
                    }
                }
            }
        }
    }
}
/**
 * 从服务器返回的 project 同步 uuid 到所有本地副本
 * 包括：传入的 project、draft、list、history
 */ function syncUuidsFromServer(localProject, serverProject) {
    const fnLog = fileLog.sub(false, 'syncUuidsFromServer_fn');
    fnLog.log('[syncUuidsFromServer] 开始同步 uuid');
    fnLog.log('[syncUuidsFromServer] localProject.ulid:', localProject.ulid);
    const ulid = localProject.ulid;
    // 1. 同步传入的 project
    fnLog.log('[syncUuidsFromServer] 同步传入的 project');
    syncUuidsToProject(localProject, serverProject);
    // 2. 同步 draft 里的 project
    const draftProject = src/* projectStore */.DO.getDraft(ulid);
    if (draftProject && draftProject !== localProject) {
        fnLog.log('[syncUuidsFromServer] 同步 draft 里的 project');
        syncUuidsToProject(draftProject, serverProject);
    }
    // 3. 同步 list 里的 project
    const listProject = src/* projectStore */.DO.findSavedProject(ulid);
    if (listProject && listProject !== localProject && listProject !== draftProject) {
        fnLog.log('[syncUuidsFromServer] 同步 list 里的 project');
        syncUuidsToProject(listProject, serverProject);
    }
    // 4. 同步 history 里的所有 project
    const historyList = (0,src/* getProjectHistory */.C)(ulid);
    if (historyList && historyList.length > 0) {
        fnLog.log('[syncUuidsFromServer] 同步 history 里的 project, 数量:', historyList.length);
        for(let i = 0; i < historyList.length; i++){
            const historyItem = historyList[i];
            if (historyItem.project) {
                fnLog.log('[syncUuidsFromServer] 同步 history[' + i + ']');
                syncUuidsToProject(historyItem.project, serverProject);
            }
        }
    }
    fnLog.log('[syncUuidsFromServer] 同步完成');
}
/**
 * 创建项目到服务器
 * @returns 是否成功
 */ async function saveToServer(project) {
    const fnLog = fileLog.sub(false, 'saveToServer_fn');
    fnLog.log('[saveToServer] 开始创建项目到服务器');
    fnLog.log('[saveToServer] project.ulid:', project.ulid);
    const settings = src/* projectStore */.DO.getProjectSettings(project.ulid);
    if (settings) {
        settings.remoteSyncStatus = src/* RemoteSyncStatus */.yZ.Pending;
    }
    try {
        var _res_data;
        // 直接传 project，TypeScript 的 Partial<Omit<...>> 类型会自动忽略多余字段
        fnLog.log('[saveToServer] project:', JSON.stringify(project));
        const res = await createProject({
            params: {
                data: project
            }
        });
        fnLog.log('[saveToServer] res.shellIsOk:', res.shellIsOk);
        fnLog.log('[saveToServer] res.dataIsOk:', res.dataIsOk);
        if (res.dataIsOk && ((_res_data = res.data) === null || _res_data === void 0 ? void 0 : _res_data.is_ok) && res.data.project) {
            fnLog.log('[saveToServer] 创建成功, uuid:', res.data.project.uuid);
            // 同步 uuid 到所有本地副本
            syncUuidsFromServer(project, res.data.project);
            // 保存到 list
            src/* projectStore */.DO.saveProject(project);
            // 更新状态
            if (settings) {
                settings.remoteSyncStatus = src/* RemoteSyncStatus */.yZ.Synced;
                settings.lastSyncTime = Date.now();
            }
            fnLog.log('[saveToServer] 同步成功');
            return true;
        } else {
            var _res_data1, _res_data2;
            fnLog.log('[saveToServer] 创建失败:', (_res_data1 = res.data) === null || _res_data1 === void 0 ? void 0 : _res_data1.msg);
            if (settings) {
                settings.remoteSyncStatus = src/* RemoteSyncStatus */.yZ.Failed;
            }
            dist/* default */.Ay.error('同步到服务器失败: ' + (((_res_data2 = res.data) === null || _res_data2 === void 0 ? void 0 : _res_data2.msg) || '未知错误'));
            return false;
        }
    } catch (error) {
        fnLog.log('[saveToServer] 异常:', error);
        if (settings) {
            settings.remoteSyncStatus = src/* RemoteSyncStatus */.yZ.Failed;
        }
        dist/* default */.Ay.error('同步到服务器异常');
        return false;
    }
}
/**
 * 更新项目到服务器
 * @returns 是否成功
 */ async function updateToServer(project) {
    const fnLog = fileLog.sub(false, 'updateToServer_fn');
    fnLog.log('[updateToServer] 开始更新项目到服务器');
    fnLog.log('[updateToServer] project.ulid:', project.ulid);
    fnLog.log('[updateToServer] project.uuid:', project.uuid);
    if (!project.uuid) {
        fnLog.log('[updateToServer] ERROR: project.uuid is undefined');
        throw new Error('updateToServer: project.uuid is required for update');
    }
    const settings = src/* projectStore */.DO.getProjectSettings(project.ulid);
    if (settings) {
        settings.remoteSyncStatus = src/* RemoteSyncStatus */.yZ.Pending;
    }
    try {
        var _res_data;
        // 直接传 project，TypeScript 的 Partial<Omit<...>> 类型会自动忽略多余字段
        fnLog.log('[updateToServer] project:', JSON.stringify(project));
        const res = await updateProject({
            params: {
                data: {
                    ...project,
                    uuid: project.uuid
                }
            }
        });
        fnLog.log('[updateToServer] res.shellIsOk:', res.shellIsOk);
        fnLog.log('[updateToServer] res.dataIsOk:', res.dataIsOk);
        if (res.dataIsOk && ((_res_data = res.data) === null || _res_data === void 0 ? void 0 : _res_data.is_ok)) {
            fnLog.log('[updateToServer] 更新成功');
            // 同步 uuid（如果有新创建的子级）
            if (res.data.project) {
                syncUuidsFromServer(project, res.data.project);
                src/* projectStore */.DO.saveProject(project);
            }
            // 更新状态
            if (settings) {
                settings.remoteSyncStatus = src/* RemoteSyncStatus */.yZ.Synced;
                settings.lastSyncTime = Date.now();
            }
            fnLog.log('[updateToServer] 同步成功');
            return true;
        } else {
            var _res_data1, _res_data2;
            fnLog.log('[updateToServer] 更新失败:', (_res_data1 = res.data) === null || _res_data1 === void 0 ? void 0 : _res_data1.msg);
            if (settings) {
                settings.remoteSyncStatus = src/* RemoteSyncStatus */.yZ.Failed;
            }
            dist/* default */.Ay.error('同步到服务器失败: ' + (((_res_data2 = res.data) === null || _res_data2 === void 0 ? void 0 : _res_data2.msg) || '未知错误'));
            return false;
        }
    } catch (error) {
        fnLog.log('[updateToServer] 异常:', error);
        if (settings) {
            settings.remoteSyncStatus = src/* RemoteSyncStatus */.yZ.Failed;
        }
        dist/* default */.Ay.error('同步到服务器异常');
        return false;
    }
}
/**
 * 同步项目到服务器（自动判断 create 或 update）
 * @returns 是否成功
 */ async function syncToServer(project) {
    const fnLog = fileLog.sub(false, 'syncToServer_fn');
    fnLog.log('[syncToServer] project.ulid:', project.ulid);
    fnLog.log('[syncToServer] project.uuid:', project.uuid);
    if (!project.uuid) {
        fnLog.log('[syncToServer] 没有 uuid，调用 saveToServer');
        return saveToServer(project);
    } else {
        fnLog.log('[syncToServer] 有 uuid，调用 updateToServer');
        return updateToServer(project);
    }
}

// EXTERNAL MODULE: ../../libs/app/model/src/user/User.ts + 5 modules
var User = __webpack_require__(80530);
;// ../../libs/droid/project-v2-ui/src/manager/edit-project-info-utils.ts





const map = (0,proxyWatch/* toProxy */.I$)({});
const dispatcher = new Dispatcher/* Dispatcher */.m();
const projectSavedEvent = 'project-saved';
const editProjectInfoUtils = {
    edit: (project)=>{
        // const info = map[project.ulid] || (map[project.ulid] = createProjectEditInfo(project));
        const info = map[project.ulid] = createProjectEditInfo(project);
        return info;
    },
    getEditInfoByUlid: (ulid)=>{
        if (map[ulid]) return map[ulid];
        const project = src/* projectStore */.DO.findProject(ulid);
        if (project) return map[ulid] = createProjectEditInfo(project);
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
            src/* projectStore */.DO.saveProject(project);
            dispatcher.dispatch(projectSavedEvent, project);
            const s = await (0,i18n_value_loader/* loadI18nValue */.y)('droid-project/project/manager/content', 'edit-project-info-utils.projectSaved');
            dist/* default */.Ay.success(s);
            // 如果开启了同步到服务器，则同步
            const settings = src/* projectStore */.DO.getProjectSettings(project.ulid);
            console.log('aaaaaaaaaaaaa', User/* user */.k.data.storeData.user_token, settings);
            if (User/* user */.k.data.storeData.user_token && settings && settings.syncToServer) {
                syncToServer(project);
            }
        }
    });
    return info;
}

;// ../../libs/droid/project-v2-ui/src/ui/project/edit-project/contexts.tsx


const ProjectEditInfoContext = /*#__PURE__*/ (0,react.createContext)({});
/**
 * 默认的 UI 配置（Workflow 模式）
 */ const defaultUIConfig = src/* PROJECT_CATEGORY_CONFIGS */.v8[src/* ProjectCategory */.U2.Workflow].uiConfig;
/**
 * ProjectCategory UI 配置 Context
 * 用于在编辑器组件中传递类别配置
 */ const ProjectCategoryUIConfigContext = /*#__PURE__*/ (0,react.createContext)(defaultUIConfig) // export const TriggerActionGroupContext = createContext<ITriggerActionGroup>({} as ITriggerActionGroup)
 // export const TriggerActionContext = createContext<ITriggerAction>({} as ITriggerAction)
 // export const TriggerGroupContext = createContext<ITriggerGroup>({} as ITriggerGroup)
 // export const TriggerListContext = createContext<ITriggerData<ITriggerShellData, ITriggerJavaData>[]>([] as ITriggerData<ITriggerShellData, ITriggerJavaData>[])
 // export const TriggerContext = createContext<ITriggerData<ITriggerShellData, ITriggerJavaData>>({} as ITriggerData<ITriggerShellData, ITriggerJavaData>)
 // export const ActionGroupContext = createContext<IActionGroup>({} as IActionGroup)
 // export const ActionListContext = createContext<IActionData<IActionShellData, IActionJavaData>[]>([] as IActionData<IActionShellData, IActionJavaData>[])
 // export const ActionContext = createContext<IActionData<IActionShellData, IActionJavaData>>({} as IActionData<IActionShellData, IActionJavaData>)
;

// EXTERNAL MODULE: ../../libs/droid/project-v2-ext/src/index.ts + 59 modules
var project_v2_ext_src = __webpack_require__(29144);
// EXTERNAL MODULE: __barrel_optimize__?names=ulid!=!../../node_modules/.pnpm/ulid@2.4.0/node_modules/ulid/dist/index.esm.js + 1 modules
var index_esm = __webpack_require__(43899);
;// ../../libs/droid/project-v2-ui/src/ui/project/edit-project/handlers/nodeClickUtils.ts
// 从 project-v2-interface 导入基础接口

// 从 project-v2-ext 导入具体实现类型



const nodeClickUtils_fileLog = new Log/* Log */.tG(false, 'nodeClickUtils_f');
nodeClickUtils_fileLog.pause = false;
nodeClickUtils_fileLog.childrenPaused = false;
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
    nodeClickUtils_fileLog.log('createNodeTriggerActionPair called');
    nodeClickUtils_fileLog.log('pn =', pn);
    nodeClickUtils_fileLog.log('an =', an);
    nodeClickUtils_fileLog.log('cn =', cn);
    nodeClickUtils_fileLog.log('node =', node);
    // 获取 trigger utils
    const triggerUtils = (0,src/* getTriggerUtils */.gq)(project_v2_ext_src/* triggerNodeTriggerType */.FG);
    nodeClickUtils_fileLog.log('got triggerUtils for type:', project_v2_ext_src/* triggerNodeTriggerType */.FG);
    if (!triggerUtils) {
        const errorMsg = "triggerUtils not found for type: ".concat(project_v2_ext_src/* triggerNodeTriggerType */.FG);
        nodeClickUtils_fileLog.log(errorMsg);
        throw new Error(errorMsg);
    }
    nodeClickUtils_fileLog.log('triggerUtils found');
    // 使用 mergeDataToDefaultData 创建 trigger 数据
    const triggerId = (0,index_esm/* ulid */.Z0)();
    nodeClickUtils_fileLog.log('created triggerId =', triggerId);
    // 将 node 转换为 selectorChain
    nodeClickUtils_fileLog.log('converting node to selectorChain...');
    const operations = nodeToSelectorChain(node);
    nodeClickUtils_fileLog.log('selectorChain operations count:', operations.length);
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
    nodeClickUtils_fileLog.log('created triggerData with mergeDataToDefaultData');
    nodeClickUtils_fileLog.log('triggerData.permissions count =', ((_triggerData_permissions = triggerData.permissions) === null || _triggerData_permissions === void 0 ? void 0 : _triggerData_permissions.length) || 0);
    nodeClickUtils_fileLog.log('triggerData.injects count =', ((_triggerData_injects = triggerData.injects) === null || _triggerData_injects === void 0 ? void 0 : _triggerData_injects.length) || 0);
    nodeClickUtils_fileLog.log('triggerData =', triggerData);
    // 获取 action utils
    const actionUtils = (0,src/* getActionUtils */.e9)(project_v2_ext_src/* actionNodeActionType */.pu);
    nodeClickUtils_fileLog.log('got actionUtils for type:', project_v2_ext_src/* actionNodeActionType */.pu);
    if (!actionUtils) {
        const errorMsg = "actionUtils not found for type: ".concat(project_v2_ext_src/* actionNodeActionType */.pu);
        nodeClickUtils_fileLog.log(errorMsg);
        throw new Error(errorMsg);
    }
    nodeClickUtils_fileLog.log('actionUtils found');
    // 使用 mergeDataToDefaultData 创建 action 数据
    const actionId = (0,index_esm/* ulid */.Z0)();
    nodeClickUtils_fileLog.log('created actionId =', actionId);
    const actionData = actionUtils.mergeDataToDefaultData({
        id: actionId,
        javaData: {
            actionType: 'click',
            clickConfig: {
                useGlobalClick: false
            }
        }
    });
    nodeClickUtils_fileLog.log('created actionData with mergeDataToDefaultData');
    nodeClickUtils_fileLog.log('actionData.permissions count =', ((_actionData_permissions = actionData.permissions) === null || _actionData_permissions === void 0 ? void 0 : _actionData_permissions.length) || 0);
    nodeClickUtils_fileLog.log('actionData.injects count =', ((_actionData_injects = actionData.injects) === null || _actionData_injects === void 0 ? void 0 : _actionData_injects.length) || 0);
    nodeClickUtils_fileLog.log('actionData =', actionData);
    // 创建 actionGroup (IGroup<IActionData>)
    const actionGroupId = (0,index_esm/* ulid */.Z0)();
    nodeClickUtils_fileLog.log('created actionGroupId =', actionGroupId);
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
    nodeClickUtils_fileLog.log('created actionGroup =', actionGroup);
    // 创建 triggerGroup (IGroup<ITriggerData>)
    const triggerGroupId = (0,index_esm/* ulid */.Z0)();
    nodeClickUtils_fileLog.log('created triggerGroupId =', triggerGroupId);
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
    nodeClickUtils_fileLog.log('created triggerGroup =', triggerGroup);
    // 创建 triggerAction
    const triggerActionId = (0,index_esm/* ulid */.Z0)();
    nodeClickUtils_fileLog.log('created triggerActionId =', triggerActionId);
    const triggerAction = {
        type: 'triggerAction',
        id: triggerActionId,
        name: '',
        triggerGroup,
        actionGroup
    };
    nodeClickUtils_fileLog.log('created triggerAction =', triggerAction);
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
    nodeClickUtils_fileLog.log('[nodeToSelectorChain] 开始转换 node 为 selectorChain');
    nodeClickUtils_fileLog.log('[nodeToSelectorChain] node:', JSON.stringify(node));
    // 1. text - 优先级最高,如果有文本就使用
    if (node.text && typeof node.text === 'string' && node.text.trim() !== '') {
        const textValue = node.text.trim();
        nodeClickUtils_fileLog.log('[nodeToSelectorChain] 添加 text selector:', textValue);
        operations.push({
            method: project_v2_ext_src/* SelectorOperation */.L$.TEXT,
            value: textValue
        });
    }
    // 2. className - 几乎所有节点都有,作为辅助条件
    if (node.className && typeof node.className === 'string') {
        nodeClickUtils_fileLog.log('[nodeToSelectorChain] 添加 className selector:', node.className);
        operations.push({
            method: project_v2_ext_src/* SelectorOperation */.L$.CLASS_NAME,
            value: node.className
        });
    }
    // 3. 如果没有 text,考虑使用其他属性
    if (!node.text || node.text.trim() === '') {
        nodeClickUtils_fileLog.log('[nodeToSelectorChain] 节点没有 text,考虑添加其他属性');
        // contentDescription (desc)
        if (node.contentDescription && typeof node.contentDescription === 'string' && node.contentDescription.trim() !== '') {
            nodeClickUtils_fileLog.log('[nodeToSelectorChain] 添加 desc selector:', node.contentDescription);
            operations.push({
                method: project_v2_ext_src/* SelectorOperation */.L$.DESC,
                value: node.contentDescription.trim()
            });
        }
        // resourceId (id)
        if (node.viewIdResourceName && typeof node.viewIdResourceName === 'string' && node.viewIdResourceName.trim() !== '') {
            nodeClickUtils_fileLog.log('[nodeToSelectorChain] 添加 id selector:', node.viewIdResourceName);
            operations.push({
                method: project_v2_ext_src/* SelectorOperation */.L$.ID,
                value: node.viewIdResourceName.trim()
            });
        }
    }
    // 4. 布尔属性 - 作为辅助条件(仅在有明确值时添加)
    const booleanAttrs = [
        {
            key: "isClickable",
            method: project_v2_ext_src/* SelectorOperation */.L$.CLICKABLE
        },
        {
            key: "isEnabled",
            method: project_v2_ext_src/* SelectorOperation */.L$.ENABLED
        },
        {
            key: "isVisibleToUser",
            method: project_v2_ext_src/* SelectorOperation */.L$.VISIBLE_TO_USER
        },
        {
            key: "isScrollable",
            method: project_v2_ext_src/* SelectorOperation */.L$.SCROLLABLE
        },
        {
            key: "isCheckable",
            method: project_v2_ext_src/* SelectorOperation */.L$.CHECKABLE
        },
        {
            key: "isChecked",
            method: project_v2_ext_src/* SelectorOperation */.L$.CHECKED
        },
        {
            key: "isFocusable",
            method: project_v2_ext_src/* SelectorOperation */.L$.FOCUSABLE
        },
        {
            key: "isSelected",
            method: project_v2_ext_src/* SelectorOperation */.L$.SELECTED
        }
    ];
    for (const attr of booleanAttrs){
        if (typeof node[attr.key] === 'boolean') {
            // 只添加有区分性的属性(true 的情况,或者对定位很重要的属性)
            if (node[attr.key] === true && (attr.key === "isClickable" || attr.key === "isEnabled")) {
                nodeClickUtils_fileLog.log('[nodeToSelectorChain] 添加', attr.method, 'selector:', node[attr.key]);
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
            nodeClickUtils_fileLog.log('[nodeToSelectorChain] 其他属性不足,添加 bounds selector:', bounds);
            operations.push({
                method: project_v2_ext_src/* SelectorOperation */.L$.BOUNDS,
                value: {
                    left: bounds.left,
                    top: bounds.top,
                    right: bounds.right,
                    bottom: bounds.bottom
                }
            });
        }
    }
    nodeClickUtils_fileLog.log('[nodeToSelectorChain] 转换完成, operations count:', operations.length);
    nodeClickUtils_fileLog.log('[nodeToSelectorChain] operations:', JSON.stringify(operations));
    return operations;
}

;// ../../libs/droid/project-v2-ui/src/ui/project/edit-project/handlers/handleNodeClickAction.ts



const handleNodeClickAction_fileLog = new Log/* Log */.tG(false, 'handleNodeClickAction_f');
handleNodeClickAction_fileLog.pause = false;
handleNodeClickAction_fileLog.childrenPaused = false;
// 这个方法要进行比较大的改造.
// 参看这个说明 C:\work\ai-conversations\docs\web\08.悬浮窗选择自动点击节点的说明.md
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
        // 添加到 children[0] (triggerActionGroup)
        if (!project.children || project.children.length === 0) {
            handleNodeClickAction_fileLog.error('project.children is empty');
            return false;
        }
        const triggerActionGroup = project.children[0];
        handleNodeClickAction_fileLog.log('triggerActionGroup.ulid =', triggerActionGroup.ulid);
        if (!triggerActionGroup.children) {
            handleNodeClickAction_fileLog.log('initializing triggerActionGroup.children');
            triggerActionGroup.children = [];
        }
        triggerActionGroup.children.push(newTriggerAction);
        handleNodeClickAction_fileLog.log('added object to triggerActionGroup.children, total count =', triggerActionGroup.children.length);
        // 保存 project
        handleNodeClickAction_fileLog.log('saving project...');
        try {
            src/* projectStore */.DO.saveProject(project);
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

// EXTERNAL MODULE: ../../libs/fanfanlo/src/dispatcher/throttle.ts
var throttle = __webpack_require__(93803);
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

// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/utils/createSvgIcon.js + 2 modules
var createSvgIcon = __webpack_require__(38803);
;// ../../node_modules/.pnpm/@mui+icons-material@6.4.12_@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_re_5ewkm5t5g27pzq5tz62v6ktvti/node_modules/@mui/icons-material/esm/Add.js
/* __next_internal_client_entry_do_not_use__ default auto */ 

/* harmony default export */ const Add = ((0,createSvgIcon/* default */.A)(/*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
    d: "M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6z"
}), 'Add'));

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
var Grid2 = __webpack_require__(29050);
// EXTERNAL MODULE: ../../libs/fanfanlo/src/mui/dialog/ButtonConfirm.tsx
var ButtonConfirm = __webpack_require__(15728);
;// ../../node_modules/.pnpm/@mui+icons-material@6.4.12_@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_re_5ewkm5t5g27pzq5tz62v6ktvti/node_modules/@mui/icons-material/esm/DeleteOutline.js
/* __next_internal_client_entry_do_not_use__ default auto */ 

/* harmony default export */ const DeleteOutline = ((0,createSvgIcon/* default */.A)(/*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
    d: "M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6zM8 9h8v10H8zm7.5-5-1-1h-5l-1 1H5v2h14V4z"
}), 'DeleteOutline'));

// EXTERNAL MODULE: ../../node_modules/.pnpm/react-i18next@15.6.0_i18next@24.2.3_typescript@5.7.3__react-dom@19.1.0_react@19.1.0__react@19.1.0_typescript@5.7.3/node_modules/react-i18next/dist/es/index.js + 15 modules
var dist_es = __webpack_require__(56137);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/FormGroup/FormGroup.js + 1 modules
var FormGroup = __webpack_require__(18515);
// EXTERNAL MODULE: ../../libs/fanfanlo/src/watcher/useWatchUpdates.tsx
var useWatchUpdates = __webpack_require__(96332);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/Checkbox/Checkbox.js + 4 modules
var Checkbox = __webpack_require__(22653);
;// ../../libs/droid/project-v2-ui/src/ui/project/edit-project/components/group/GroupCheck.tsx






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
    const groupCheckList1Context = (0,react.useContext)(src/* GroupCheckList1Context */.oc);
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
                                        "data-testid": "GroupCheck__checkbox__01JFXYZR9H3I4J5K6L7M8N9O0__".concat(index),
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
                            "data-testid": "GroupCheck__deleteButton__01JFXYZT0I4J5K6L7M8N9O0P1",
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
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(src/* GroupCheckList1Context */.oc.Provider, {
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
    // logger.isPaused = true;
    const [isSequential] = (0,useProxyWatch/* useProxyWatch */.x)(group, 'isSequential', group.isSequential);
    // 修改：监听children而不是list（web端主要使用children）
    const [l] = (0,useProxyWatch/* useProxyWatch */.x)(group, 'children', group.children);
    console.log('group=', JSON.stringify(group));
    const [children] = (0,useWatchUpdates/* useWatchUpdates */.p)(l);
    var _children_length;
    // const [listSize] = useProxyWatch(list, 'length', list.length);
    const listSize = (_children_length = children === null || children === void 0 ? void 0 : children.length) !== null && _children_length !== void 0 ? _children_length : 0;
    // const [c] = useProxyWatch(group, 'checks', group.checks);
    // const [checks1] = useWatchUpdates(c);
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
    logger.log('children.length=', children === null || children === void 0 ? void 0 : children.length, 'isSequential=', isSequential);
    if ((children === null || children === void 0 ? void 0 : children.length) <= 1 || isSequential) return /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {});
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.A, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Grid2/* default */.A, {
                container: true,
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Grid2/* default */.A, {
                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Button/* default */.A, {
                        "data-id": "group-add-check-list.875aec4f-5049-426a-a395-0ac0c6666a35",
                        onClick: ()=>{
                            console.log('aaaaaaaaaaa');
                            group.checks.push(new Array(listSize).fill(true));
                            console.log('bbbbbbbbbbbbbbbbb');
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

;// ../../libs/droid/project-v2-ui/src/ui/project/edit-project/components/list-page-link/ActionListOrTriggerListPageLink.tsx



function ActionListOrTriggerListPageLink(param) {
    let { query, attrs, path, btnId, testId, children } = param;
    const router = (0,next_router.useRouter)();
    query.backPath = router.pathname;
    function handleClick() {
        const list = Object.keys(query).filter((key)=>query[key] != null && query[key] !== undefined).map((key)=>[
                key,
                String(query[key])
            ]);
        const q = new URLSearchParams(list);
        const href = "".concat(path, "?").concat(q.toString());
        router.push(href);
    }
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(Button/* default */.A, {
        onClick: handleClick,
        ...attrs,
        id: btnId,
        "data-id": btnId,
        "data-testid": testId,
        children: children
    });
}

;// ../../libs/droid/project-v2-ui/src/ui/project/edit-project/trigger-action-group/trigger-action/action-group/action-list/action/Action.tsx




const Action_fileLog = new Log/* Log */.tG(false, 'Action_f');
Action_fileLog.pause = true;
Action_fileLog.childrenPaused = true;
function Action(param) {
    let { actionData, actionGroup, index } = param;
    const uiLog = Action_fileLog.sub(false, 'action_ui');
    uiLog.pause = true;
    uiLog.childrenPaused = true;
    uiLog.log('actionData.type', actionData.type);
    uiLog.log('index', index);
    const utils = (0,src/* getActionUtils */.e9)(actionData.type);
    function onDeleteComfirmed() {
        var _actionGroup_children;
        uiLog.log('[onDeleteComfirmed] 开始删除 action');
        uiLog.log('[onDeleteComfirmed] actionGroup.children.length =', (_actionGroup_children = actionGroup.children) === null || _actionGroup_children === void 0 ? void 0 : _actionGroup_children.length);
        uiLog.log('[onDeleteComfirmed] index =', index);
        uiLog.log('[onDeleteComfirmed] actionData.ulid =', actionData.ulid);
        // 直接使用 index 删除，不需要再查找
        if (!actionGroup.children) {
            uiLog.error('[onDeleteComfirmed] actionGroup.children 不存在');
            return;
        }
        if (index < 0 || index >= actionGroup.children.length) {
            uiLog.error('[onDeleteComfirmed] index 越界');
            return;
        }
        (0,proxyWatch/* toProxy */.I$)(actionGroup.children).splice(index, 1);
        uiLog.log('[onDeleteComfirmed] 删除成功，新 actionGroup.children.length =', actionGroup.children.length);
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
                        "data-testid": "Action__deleteButton__01JFXYZB8Q2R3S4T5U6V7W8X9__".concat(index),
                        id: "del-action-btn",
                        "data-id": "del-action-btn",
                        children: "删除"
                    })
                })
            })
        ]
    });
}

// EXTERNAL MODULE: ../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/lodash.js
var lodash = __webpack_require__(80507);
var lodash_default = /*#__PURE__*/__webpack_require__.n(lodash);
;// ../../libs/droid/project-v2-ui/src/ui/project/edit-project/trigger-action-group/trigger-action/action-group/action-list/ActionList.tsx






const ActionList_fileLog = new Log/* Log */.tG(true, 'ActionList');
ActionList_fileLog.pause = true;
function ActionList() {
    const actionGroup = (0,react.useContext)(src/* ActionGroupContext */.Tj);
    // 修改：监听children而不是list（web端主要使用children）
    const [children] = (0,useWatchUpdates/* useWatchUpdates */.p)(actionGroup.children);
    if (!children || !lodash_default().isArray(children)) {
        ActionList_fileLog.log('children is null or not array', actionGroup);
    }
    ActionList_fileLog.log('actionGroup=', JSON.stringify(actionGroup));
    // 使用 children 获取完整对象，而不是 list
    const childrenArray = actionGroup.children || [];
    ActionList_fileLog.log('children.length=', childrenArray.length);
    return /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
        children: childrenArray.map((action, index)=>{
            ActionList_fileLog.log("render action index=".concat(index, ", action="), action);
            if (!action) {
                ActionList_fileLog.error("action is undefined at index=".concat(index));
                return null;
            }
            return /*#__PURE__*/ (0,jsx_runtime.jsx)(Action, {
                actionData: action,
                actionGroup: actionGroup,
                index: index
            }, getUpdateVersionKey(action));
        })
    });
}

;// ../../libs/droid/project-v2-ui/src/ui/project/edit-project/trigger-action-group/trigger-action/action-group/ActionGroup.tsx
// v2: 使用 ITriggerOrActionListPageParams 替代 IActionOrTriggerListPageParams










const ActionGroup_fileLog = new Log/* Log */.tG(true, 'ActionGroup_f');
ActionGroup_fileLog.pause = true;
ActionGroup_fileLog.childrenPaused = true;
function ActionGroup(param) {
    let { actionGroup } = param;
    var _actionGroup_children;
    const { t } = (0,dist_es/* useTranslation */.Bd)("droid-project-v2-ui/ui/project/edit-project/trigger-action-group/trigger-action/action-group/content");
    const editInfo = (0,react.useContext)(ProjectEditInfoContext);
    const triggerActionGroup = (0,react.useContext)(src/* TriggerActionGroupContext */.NF);
    const triggerAction = (0,react.useContext)(src/* TriggerActionContext */.Ck);
    const uiConfig = (0,react.useContext)(ProjectCategoryUIConfigContext);
    ActionGroup_fileLog.log("[ActionGroup] uiConfig.showActionList=".concat(uiConfig.showActionList));
    // v2: 使用 ITriggerOrActionListPageParams 和 Ulid 后缀的参数名
    const query = {
        projectUlid: editInfo.project.ulid,
        triggerActionGroupUlid: triggerActionGroup.ulid,
        triggerActionUlid: triggerAction.ulid,
        actionGroupUlid: actionGroup.ulid,
        type: src/* TriggerOrActionListTypeEnum */.bz.addAction,
        actionType: ''
    };
    const [isSequential] = (0,useProxyWatch/* useProxyWatch */.x)(actionGroup, 'isSequential', actionGroup.isSequential);
    var _actionGroup_children_length;
    // 修改：改为监听children而不是list（web端主要使用children）
    const [listSize] = (0,useProxyWatch/* useProxyWatch */.x)(actionGroup.children, 'length', (_actionGroup_children_length = (_actionGroup_children = actionGroup.children) === null || _actionGroup_children === void 0 ? void 0 : _actionGroup_children.length) !== null && _actionGroup_children_length !== void 0 ? _actionGroup_children_length : 0);
    function setIsSequential(value) {
        (0,proxyWatch/* toProxy */.I$)(actionGroup).isSequential = value;
    }
    // 使用 children 而不是 list，因为 children 存储完整对象
    const childrenArray = actionGroup.children || [];
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(src/* ActionGroupContext */.Tj.Provider, {
        value: actionGroup,
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(src/* ActionListContext */.Us.Provider, {
            value: childrenArray,
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
                            uiConfig.showActionList && /*#__PURE__*/ (0,jsx_runtime.jsx)(Grid2/* default */.A, {
                                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.A, {
                                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(ActionListOrTriggerListPageLink, {
                                        query: query,
                                        attrs: (0,src/* getActionGroupElement */.q_)(actionGroup),
                                        path: "/action-list",
                                        btnId: "link-router-to-action-list",
                                        testId: "ActionGroup__actionListLink__01JFXYZB2C3D4E5F6G7H8I9",
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

;// ../../libs/droid/project-v2-ui/src/ui/project/edit-project/trigger-action-group/trigger-action/trigger-group/trigger-list/trigger/Trigger.tsx




const Trigger_fileLog = new Log/* Log */.tG(false, 'Trigger_f');
Trigger_fileLog.pause = true;
Trigger_fileLog.childrenPaused = true;
function Trigger(param) {
    let { triggerData, triggerGroup, index } = param;
    const uiLog = Trigger_fileLog.sub(false, 'trigger_ui');
    uiLog.pause = true;
    uiLog.childrenPaused = true;
    uiLog.log('triggerData.type', triggerData.type);
    uiLog.log('index', index);
    const utils = (0,src/* getTriggerUtils */.gq)(triggerData.type);
    const onDeleteComfirmed = ()=>{
        var _triggerGroup_children;
        uiLog.log('[onDeleteComfirmed] 开始删除 trigger');
        uiLog.log('[onDeleteComfirmed] triggerGroup.children.length =', (_triggerGroup_children = triggerGroup.children) === null || _triggerGroup_children === void 0 ? void 0 : _triggerGroup_children.length);
        uiLog.log('[onDeleteComfirmed] index =', index);
        uiLog.log('[onDeleteComfirmed] triggerData.ulid =', triggerData.ulid);
        // 直接使用 index 删除，不需要再查找
        if (!triggerGroup.children) {
            uiLog.error('[onDeleteComfirmed] triggerGroup.children 不存在');
            return;
        }
        if (index < 0 || index >= triggerGroup.children.length) {
            uiLog.error('[onDeleteComfirmed] index 越界');
            return;
        }
        (0,proxyWatch/* toProxy */.I$)(triggerGroup.children).splice(index, 1);
        uiLog.log('[onDeleteComfirmed] 删除成功，新 triggerGroup.children.length =', triggerGroup.children.length);
    };
    // uiLog.info('utils', utils)
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(src/* TriggerContext */.MS.Provider, {
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
                            "data-testid": "Trigger__deleteButton__01JFXYZA7P1Q2R3S4T5U6V7W8__".concat(index),
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

;// ../../libs/droid/project-v2-ui/src/ui/project/edit-project/trigger-action-group/trigger-action/trigger-group/trigger-list/TriggerList.tsx






const TriggerList_fileLog = new Log/* Log */.tG(true, 'TriggerList');
TriggerList_fileLog.pause = true;
function TriggerList() {
    const triggerGroup = (0,react.useContext)(src/* TriggerGroupContext */.bf);
    // 修改：监听children而不是list（web端主要使用children）
    const [children] = (0,useWatchUpdates/* useWatchUpdates */.p)(triggerGroup.children);
    TriggerList_fileLog.log('triggerGroup=', JSON.stringify(triggerGroup));
    // 使用 children 获取完整对象，而不是 list
    const childrenArray = triggerGroup.children || [];
    TriggerList_fileLog.log('children.length=', childrenArray.length);
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(src/* TriggerListContext */.Ue.Provider, {
        value: childrenArray,
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.A, {
            children: childrenArray.map((trigger, index)=>{
                TriggerList_fileLog.log("render trigger index=".concat(index, ", trigger="), trigger);
                if (!trigger) {
                    TriggerList_fileLog.error("trigger is undefined at index=".concat(index));
                    return null;
                }
                return /*#__PURE__*/ (0,jsx_runtime.jsx)(Trigger, {
                    triggerData: trigger,
                    triggerGroup: triggerGroup,
                    index: index
                }, getUpdateVersion(trigger).version);
            })
        })
    });
}

;// ../../libs/droid/project-v2-ui/src/ui/project/edit-project/trigger-action-group/trigger-action/trigger-group/TriggerGroup.tsx
// v2: 使用 ITriggerOrActionListPageParams 替代 IActionOrTriggerListPageParams











function TriggerGroup(param) {
    let { triggerGroup } = param;
    var _triggerGroup_children;
    const { t } = (0,dist_es/* useTranslation */.Bd)("droid-project-v2-ui/ui/project/edit-project/trigger-action-group/trigger-action/trigger-group/content");
    const editInfo = (0,react.useContext)(ProjectEditInfoContext);
    const triggerActionGroup = (0,react.useContext)(src/* TriggerActionGroupContext */.NF);
    const triggerAction = (0,react.useContext)(src/* TriggerActionContext */.Ck);
    // v2: 使用 ITriggerOrActionListPageParams 和 Ulid 后缀的参数名
    const query = {
        projectUlid: editInfo.project.ulid,
        triggerActionGroupUlid: triggerActionGroup.ulid,
        triggerActionUlid: triggerAction.ulid,
        triggerGroupUlid: triggerGroup.ulid,
        type: src/* TriggerOrActionListTypeEnum */.bz.addAction,
        actionType: ''
    };
    const [isSequential] = (0,useProxyWatch/* useProxyWatch */.x)(triggerGroup, 'isSequential', triggerGroup.isSequential);
    var _triggerGroup_children_length;
    // 修改：改为监听children而不是list（web端主要使用children）
    const [listSize] = (0,useProxyWatch/* useProxyWatch */.x)(triggerGroup.children, 'length', (_triggerGroup_children_length = (_triggerGroup_children = triggerGroup.children) === null || _triggerGroup_children === void 0 ? void 0 : _triggerGroup_children.length) !== null && _triggerGroup_children_length !== void 0 ? _triggerGroup_children_length : 0);
    function setIsSequential(value) {
        (0,proxyWatch/* toProxy */.I$)(triggerGroup).isSequential = value;
    }
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(src/* TriggerGroupContext */.bf.Provider, {
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
                                    attrs: src/* childToProjectDataUtils */.mR.triggerGroup.getTriggerGroupElement(triggerGroup),
                                    path: "/trigger-list",
                                    btnId: "link-router-to-trigger-list",
                                    testId: "TriggerGroup__triggerListLink__01JFXYZA1B2C3D4E5F6G7H9",
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

;// ../../libs/droid/project-v2-ui/src/ui/project/edit-project/trigger-action-group/trigger-action/TriggerAction.tsx











const TriggerAction_fileLog = new Log/* Log */.tG(true, 'TriggerAction_f');
TriggerAction_fileLog.pause = true;
TriggerAction_fileLog.childrenPaused = true;
function TriggerAction(param) {
    let { triggerAction, triggerActionGroup, index } = param;
    const uiLog = TriggerAction_fileLog.sub(false, 'triggerAction_ui');
    uiLog.pause = true;
    uiLog.childrenPaused = true;
    const uiConfig = (0,react.useContext)(ProjectCategoryUIConfigContext);
    uiLog.log("[TriggerAction] uiConfig.showTrigger=".concat(uiConfig.showTrigger));
    uiLog.log("[TriggerAction] index=".concat(index));
    const [name, setName] = (0,react.useState)(triggerAction.name || '未命名');
    function handleNameChange(name) {
        triggerAction.name = name;
        setName(name);
    }
    function handleDelete() {
        var _triggerActionGroup_children;
        uiLog.log('[handleDelete] 开始删除 triggerAction');
        uiLog.log('[handleDelete] triggerActionGroup.children.length =', (_triggerActionGroup_children = triggerActionGroup.children) === null || _triggerActionGroup_children === void 0 ? void 0 : _triggerActionGroup_children.length);
        uiLog.log('[handleDelete] index =', index);
        uiLog.log('[handleDelete] triggerAction.ulid =', triggerAction.ulid);
        // 直接使用 index 删除，不需要再查找
        if (!triggerActionGroup.children) {
            uiLog.error('[handleDelete] triggerActionGroup.children 不存在');
            return;
        }
        if (index < 0 || index >= triggerActionGroup.children.length) {
            uiLog.error('[handleDelete] index 越界');
            return;
        }
        (0,proxyWatch/* toProxy */.I$)(triggerActionGroup.children).splice(index, 1);
        uiLog.log('[handleDelete] 删除成功，新 triggerActionGroup.children.length =', triggerActionGroup.children.length);
    }
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(src/* TriggerActionContext */.Ck.Provider, {
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
                                uiConfig.showTrigger && /*#__PURE__*/ (0,jsx_runtime.jsx)(NotificationsNone, {}),
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
                                    "data-testid": "TriggerAction__deleteButton__01JFXYZX4M8N9O0P1Q2R3S4T5__".concat(index),
                                    "data-id": "del-trigger-action-btn",
                                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(DeleteOutline, {})
                                })
                            })
                        })
                    ]
                }),
                uiConfig.showTrigger && /*#__PURE__*/ (0,jsx_runtime.jsx)(TriggerGroup, {
                    triggerGroup: triggerAction.triggerGroup
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)(ActionGroup, {
                    actionGroup: triggerAction.actionGroup
                })
            ]
        })
    });
}

;// ../../libs/droid/project-v2-ui/src/ui/project/edit-project/trigger-action-group/TriggerActionGroup.tsx












const TriggerActionGroup_fileLog = new Log/* Log */.tG(true, 'TriggerActionGroup');
TriggerActionGroup_fileLog.pause = true;
TriggerActionGroup_fileLog.childrenPaused = true;
function TriggerActionGroup(param) {
    let { triggerActionGroup: propsTriggerActionGroup } = param;
    const { t } = (0,es/* useTranslation */.Bd)('droid-project/project/ui/project/edit-project/trigger-action-group/content');
    const editInfo = (0,react.useContext)(ProjectEditInfoContext);
    const uiConfig = (0,react.useContext)(ProjectCategoryUIConfigContext);
    const contextTriggerActionGroup = (0,react.useContext)(src/* TriggerActionGroupContext */.NF);
    // 优先使用 props，其次使用 Context（不再兼容旧的 project.triggerActionGroup）
    const triggerActionGroup = propsTriggerActionGroup || contextTriggerActionGroup;
    if (!triggerActionGroup) {
        TriggerActionGroup_fileLog.error('[TriggerActionGroup] triggerActionGroup 不存在');
        return null;
    }
    TriggerActionGroup_fileLog.log("[TriggerActionGroup] triggerActionGroup.ulid=".concat(triggerActionGroup.ulid));
    TriggerActionGroup_fileLog.log("[TriggerActionGroup] uiConfig.allowAddGroup=".concat(uiConfig.allowAddGroup));
    TriggerActionGroup_fileLog.log("[TriggerActionGroup] uiConfig.showTrigger=".concat(uiConfig.showTrigger));
    const [groupName, setGroupName] = (0,react.useState)(triggerActionGroup.name || t('TriggerActionGroup.unamed'));
    // 监听 children
    const [children] = useWatchListOperation(triggerActionGroup.children);
    function handleGroupNameChange(name) {
        triggerActionGroup.name = name;
        setGroupName(name || t('TriggerActionGroup.unamed'));
    }
    function addTriggerAction() {
        const fnLog = TriggerActionGroup_fileLog.sub(false, 'addTriggerAction');
        const newTriggerAction = (0,src/* createDefaultTriggerAction */.GY)();
        fnLog.log("[addTriggerAction] newTriggerAction.ulid=".concat(newTriggerAction.ulid));
        const parent = (0,parentProxy/* toParent */.sd)(triggerActionGroup);
        // 修改：只维护children（存储完整对象），list由后端维护
        if (!parent.children) {
            parent.children = [];
            fnLog.log("[addTriggerAction] created children array");
        }
        parent.children.push(newTriggerAction);
        fnLog.log("[addTriggerAction] pushed object to children, children.length=".concat(parent.children.length));
    }
    // 监听 isSequential 变化
    const [isSequential] = (0,useProxyWatch/* useProxyWatch */.x)(triggerActionGroup, 'isSequential', triggerActionGroup.isSequential);
    // 切换执行模式
    function handleSequentialChange(event) {
        const newValue = event.target.checked;
        TriggerActionGroup_fileLog.log('[TriggerActionGroup] handleSequentialChange, newValue:', newValue);
        triggerActionGroup.isSequential = newValue;
    }
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(src/* TriggerActionGroupContext */.NF.Provider, {
        value: triggerActionGroup,
        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.A, {
            sx: {
                border: '2px solid rgb(217, 217, 217)',
                padding: '4px'
            },
            ...src/* childToProjectDataUtils */.mR.triggerActionGroup.getTriggerActionGroupElementByProp(triggerActionGroup.list),
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
                                uiConfig.showTrigger && /*#__PURE__*/ (0,jsx_runtime.jsx)(NotificationsNone, {}),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)(Handyman, {}),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)(TableRows, {})
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(Grid2/* default */.A, {
                            size: 'grow',
                            sx: {
                                alignItems: 'center',
                                width: '100%'
                            },
                            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.A, {
                                sx: {
                                    width: '100%'
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
                        uiConfig.allowAddGroup && /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime.jsx)(Grid2/* default */.A, {
                                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Tooltip/* default */.A, {
                                        title: isSequential ? '顺序执行:按顺序逐个执行 TriggerAction' : '并发执行:同时执行所有 TriggerAction',
                                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(FormControlLabel/* default */.A, {
                                            control: /*#__PURE__*/ (0,jsx_runtime.jsx)(Switch/* default */.A, {
                                                "data-testid": "TriggerActionGroup__sequentialSwitch__01JFXYZV2K6L7M8N9O0P1Q2R3",
                                                checked: isSequential,
                                                onChange: handleSequentialChange,
                                                "data-id": "trigger-action-group-sequential-switch"
                                            }),
                                            label: '顺序'
                                        })
                                    })
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)(Grid2/* default */.A, {
                                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.A, {
                                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(IconButton/* default */.A, {
                                            "data-testid": "TriggerActionGroup__addButton__01JFXYZW3L7M8N9O0P1Q2R3S4",
                                            "data-id": "add-trigger-action-btn.22fab779-75e2-4e34-82f4-64667e7fc017",
                                            onClick: addTriggerAction,
                                            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Add, {})
                                        })
                                    })
                                })
                            ]
                        })
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.A, {
                    children: children === null || children === void 0 ? void 0 : children.map((triggerAction, index)=>{
                        TriggerActionGroup_fileLog.log("[TriggerActionGroup] render index=".concat(index, ", triggerAction.ulid=").concat(triggerAction === null || triggerAction === void 0 ? void 0 : triggerAction.ulid));
                        if (!triggerAction) {
                            TriggerActionGroup_fileLog.error("[TriggerActionGroup] triggerAction is undefined at index=".concat(index));
                            return null;
                        }
                        return /*#__PURE__*/ (0,jsx_runtime.jsx)(TriggerAction, {
                            triggerAction: triggerAction,
                            triggerActionGroup: triggerActionGroup,
                            index: index
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

// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+icons-material@6.4.12_@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_re_5ewkm5t5g27pzq5tz62v6ktvti/node_modules/@mui/icons-material/esm/Settings.js
var Settings = __webpack_require__(31480);
// EXTERNAL MODULE: ../../libs/droid/project-v2-ui/src/utils/runProject.ts + 5 modules
var runProject = __webpack_require__(41514);
;// ../../libs/droid/project-v2-ui/src/ui/project/edit-project/EditProject.tsx















// 使用 @droid/project-v2-ext 包中的初始化函数，注册 trigger 和 action 的 utils





// import { IAppBarBackAskEvent } from "@app/static"
const EditProject_fileLog = new Log/* Log */.tG(false, 'EditProject_f');
EditProject_fileLog.pause = true;
EditProject_fileLog.childrenPaused = true;
// 在模块顶层调用初始化，确保在组件渲染前完成 action/trigger utils 的注册
EditProject_fileLog.log('[EditProject] 模块加载时初始化项目系统');
(0,project_v2_ext_src/* initProjectSystem */.Nc)();
EditProject_fileLog.log('[EditProject] 项目系统初始化完成');
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
    var _project_children, _project_children1;
    const project = (0,react.useContext)(src/* ProjectContext */.vz);
    const fnLog = EditProject_fileLog.sub(false, 'ProjectContent_fn');
    fnLog.pause = true;
    fnLog.log("[ProjectContent] project.ulid=".concat(project.ulid));
    fnLog.log("[ProjectContent] project.children.length=".concat((_project_children = project.children) === null || _project_children === void 0 ? void 0 : _project_children.length));
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.A, {
        "data-ulid-project": project.ulid,
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Paper/* default */.A, {
            children: (_project_children1 = project.children) === null || _project_children1 === void 0 ? void 0 : _project_children1.map((triggerActionGroup, index)=>{
                fnLog.log("[ProjectContent] 渲染 triggerActionGroup[".concat(index, "], ulid=").concat(triggerActionGroup.ulid));
                return /*#__PURE__*/ (0,jsx_runtime.jsx)(TriggerActionGroupWrapper, {
                    triggerActionGroup: triggerActionGroup,
                    index: index
                }, triggerActionGroup.ulid);
            })
        })
    });
}
// TriggerActionGroupWrapper 组件：提供 Context
function TriggerActionGroupWrapper(param) {
    let { triggerActionGroup, index } = param;
    const fnLog = EditProject_fileLog.sub(false, 'TriggerActionGroupWrapper_fn');
    fnLog.pause = true;
    fnLog.log("[TriggerActionGroupWrapper] index=".concat(index, ", ulid=").concat(triggerActionGroup.ulid));
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(src/* TriggerActionGroupContext */.NF.Provider, {
        value: triggerActionGroup,
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(TriggerActionGroup, {
            triggerActionGroup: triggerActionGroup
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
        src/* projectStore */.DO.deleteDraft(editInfo.project.ulid);
    }
    function handleSaveAndLeave() {
        editInfo.save();
        toLeave();
        src/* projectStore */.DO.deleteDraft(editInfo.project.ulid);
    }
    function handleStayAndEdit() {
        editInfo.askStay = false;
        editInfo.giveup = false;
        logger.log('handleStayAndEdit fn called ', 'objectCount=', object_count_utils/* objectCountUtils */._.getObjectCount(editInfo), 'editInfo=', editInfo);
    }
    function handleSaveToDraftAndLeave() {
        src/* projectStore */.DO.addDraft(editInfo.project);
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
                    "data-testid": "EditProject__closeDialogButton__01JFXYZK2A6B7C8D9E0F1G2H3",
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
                            "data-testid": "EditProject__discardButton__01JFXYZL3B7C8D9E0F1G2H3I4",
                            onClick: handleLeaveWithoutSave,
                            children: "放弃保存并离开"
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(Button/* default */.A, {
                            "data-testid": "EditProject__saveDraftButton__01JFXYZM4C8D9E0F1G2H3I4J5",
                            onClick: handleSaveToDraftAndLeave,
                            children: "保存变更到草稿并离开"
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(Button/* default */.A, {
                            "data-testid": "EditProject__saveAndLeaveButton__01JFXYZN5D9E0F1G2H3I4J5K6",
                            onClick: handleSaveAndLeave,
                            children: "保存并离开"
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(Button/* default */.A, {
                            "data-testid": "EditProject__stayEditButton__01JFXYZO6E0F1G2H3I4J5K6L7",
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
    fnLog.pause = true;
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
        fnLog.pause = true;
        fnLog.log('[onRunClick] 调用 runProject 函数');
        fnLog.log('[onRunClick] projectData.ulid:', projectData.ulid);
        fnLog.log('[onRunClick] projectData.name:', projectData.name);
        fnLog.log('[onRunClick] projectData.keepAlive:', String(projectData.keepAlive));
        console.log('onrun json', JSON.stringify(projectData));
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
                    "data-testid": "EditProject__runButton__01JFXYZP7F1G2H3I4J5K6L7M8",
                    onClick: onRunClick,
                    children: t("content.projectTools.run")
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)(Tooltip/* default */.A, {
                    title: keepAlive ? "持续运行模式:Project 不会在 Action 完成后自动退出" : "普通模式:Action 完成后自动退出",
                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(FormControlLabel/* default */.A, {
                        control: /*#__PURE__*/ (0,jsx_runtime.jsx)(Switch/* default */.A, {
                            "data-testid": "EditProject__keepAliveSwitch__01JFXYZQ8G2H3I4J5K6L7M8N9",
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
    const { ulid } = router.query;
    // V2: 使用 projectStore 加载或创建项目，优先从草稿加载（与 V1 保持一致）
    let project = src/* projectStore */.DO.findDraftOrSavedProject(ulid || '-1');
    if (!project) {
        var _project_children_, _project_children;
        // 如果找不到，使用 createProjectByCategory 创建默认项目 (v2)
        // 这确保所有子级（triggerActionGroup、triggerAction、triggerGroup、actionGroup）都有正确的 ulid
        EditProject_fileLog.log('[EditProjectBuilder] 项目未找到，使用 createProjectByCategory 创建默认项目');
        project = (0,src/* createProjectByCategory */.ZX)(src/* ProjectCategory */.U2.Workflow);
        EditProject_fileLog.log('[EditProjectBuilder] 创建的项目 ulid:', project.ulid);
        // [迁移注释] 原使用 project.triggerActionGroup，现改为 project.children[0]
        // fileLog.log('[EditProjectBuilder] triggerActionGroup.ulid:', project.triggerActionGroup?.ulid)
        EditProject_fileLog.log('[EditProjectBuilder] triggerActionGroup.ulid:', (_project_children = project.children) === null || _project_children === void 0 ? void 0 : (_project_children_ = _project_children[0]) === null || _project_children_ === void 0 ? void 0 : _project_children_.ulid);
        // 如果 URL 中有有效的 ulid，使用它覆盖生成的 ulid
        if (ulid && ulid !== '-1') {
            project.ulid = ulid;
            EditProject_fileLog.log('[EditProjectBuilder] 使用 URL 中的 ulid 覆盖:', project.ulid);
        }
    }
    const createProject = project;
    const draftProject = project = src/* projectStore */.DO.addDraft(createProject);
    const proxyProject = project = (0,proxyWatch/* toProxy */.I$)(draftProject);
    const parentProject = project = (0,parentProxy/* toParent */.sd)(proxyProject);
    const editInfo = editProjectInfoUtils.edit(parentProject);
    function checkUpdated() {
        const logger = new Log/* Log */.tG(false, 'checkUpdated_fn');
        logger.isPaused = true;
        const c = src/* projectStore */.DO.findSavedProject(project.ulid);
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
            // initProjectSystem() 已移至模块顶层调用，确保在组件渲染前完成注册
            (0,src/* takeProjectSnapshoot */.kg)(project);
            if (!project) return;
            const unsub = (0,watchUpdates/* watchUpdates */.c)((0,parentProxy/* getParentProxyTarget */.Al)(project), ()=>{
                (0,src/* takeProjectSnapshoot */.kg)(project);
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
                if (canBack) src/* projectStore */.DO.deleteDraft(project.ulid);
            });
            return ()=>{
                unsub();
            };
        }, []);
        (0,react.useEffect)(()=>{
            return dispatcher.addListener('back', (e)=>{
                const canBack = e.defaultPrevented = checkUpdated();
                if (canBack) src/* projectStore */.DO.deleteDraft(project.ulid);
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
        // 处理 QuickAction 新建时自动跳转到 action-list。这种project只有一个triggerActionGroup 所以写死获取第0个索引的就行。
        (0,react.useEffect)(()=>{
            const fnLog = EditProject_fileLog.sub(false, 'quickaction_redirect_effect');
            fnLog.pause = true;
            fnLog.log('[QuickAction Redirect] 检查是否需要跳转');
            fnLog.log('[QuickAction Redirect] router.query.isNew:', router.query.isNew);
            fnLog.log('[QuickAction Redirect] project.category:', project.category);
            const isNew = router.query.isNew === 'true';
            const isQuickAction = project.category === src/* ProjectCategory */.U2.QuickAction;
            fnLog.log('[QuickAction Redirect] isNew:', isNew);
            fnLog.log('[QuickAction Redirect] isQuickAction:', isQuickAction);
            if (isNew && isQuickAction) {
                var _project_children, _triggerActionGroup_children, _triggerAction_actionGroup_children;
                fnLog.log('[QuickAction Redirect] 需要跳转到 action-list');
                // 从 children[0] 获取 triggerActionGroup
                const triggerActionGroup = (_project_children = project.children) === null || _project_children === void 0 ? void 0 : _project_children[0];
                if (!triggerActionGroup) {
                    fnLog.log('[QuickAction Redirect] triggerActionGroup 不存在，跳过跳转');
                    return;
                }
                fnLog.log("[QuickAction Redirect] triggerActionGroup.ulid=".concat(triggerActionGroup.ulid));
                const triggerAction = (_triggerActionGroup_children = triggerActionGroup.children) === null || _triggerActionGroup_children === void 0 ? void 0 : _triggerActionGroup_children[0];
                if (!triggerAction) {
                    fnLog.log('[QuickAction Redirect] triggerAction 不存在，跳过跳转');
                    return;
                }
                // 如果 actionGroup 中已经有 action，说明已经选择过，不需要再跳转
                // 修改：改为检查children而不是list（web端主要使用children）
                const hasAction = triggerAction.actionGroup.children && triggerAction.actionGroup.children.length > 0;
                fnLog.log('[QuickAction Redirect] hasAction:', hasAction);
                var _triggerAction_actionGroup_children_length;
                fnLog.log('[QuickAction Redirect] actionGroup.children.length:', (_triggerAction_actionGroup_children_length = (_triggerAction_actionGroup_children = triggerAction.actionGroup.children) === null || _triggerAction_actionGroup_children === void 0 ? void 0 : _triggerAction_actionGroup_children.length) !== null && _triggerAction_actionGroup_children_length !== void 0 ? _triggerAction_actionGroup_children_length : 0);
                if (hasAction) {
                    fnLog.log('[QuickAction Redirect] actionGroup 已有 action，跳过跳转');
                    return;
                }
                // URL参数名从 xxxId 改为 xxxUlid，与 v2 接口保持一致
                const actionListQuery = {
                    projectUlid: project.ulid,
                    triggerActionGroupUlid: triggerActionGroup.ulid,
                    triggerActionUlid: triggerAction.ulid,
                    actionGroupUlid: triggerAction.actionGroup.ulid,
                    type: common/* ActionOrTriggerListTypeEnum */.Q.addAction,
                    actionType: '',
                    backPath: '/project-editor'
                };
                fnLog.log('[QuickAction Redirect] actionListQuery:', JSON.stringify(actionListQuery));
                const queryString = new URLSearchParams(actionListQuery).toString();
                const actionListPath = "/action-list?".concat(queryString);
                fnLog.log('[QuickAction Redirect] 跳转到:', actionListPath);
                // 使用 push 保持历史栈，这样选择 action 后可以正确返回
                router.push(actionListPath);
            } else {
                fnLog.log('[QuickAction Redirect] 不需要跳转');
            }
        }, [
            router.query.isNew,
            project.category
        ]);
        const p = (0,proxyWatch/* toProxy */.I$)(editInfo.project);
        // 获取项目类别的 UI 配置
        const categoryConfig = (0,src/* getProjectCategoryConfig */.af)(editInfo.project.category);
        EditProject_fileLog.log('[Content] project.category:', editInfo.project.category);
        EditProject_fileLog.log('[Content] categoryConfig.uiConfig:', JSON.stringify(categoryConfig.uiConfig));
        return /*#__PURE__*/ (0,jsx_runtime.jsx)(ProjectEditInfoContext.Provider, {
            value: editInfo,
            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(ProjectCategoryUIConfigContext.Provider, {
                value: categoryConfig.uiConfig,
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(src/* ProjectContext */.vz.Provider, {
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
        function openSettings() {
            const fnLog = EditProject_fileLog.sub(false, 'openSettings_fn');
            fnLog.pause = true;
            fnLog.log('[openSettings] 打开设置页面');
            fnLog.log('[openSettings] project.ulid:', project.ulid);
            const currentPath = "/project-editor?ulid=".concat(project.ulid);
            fnLog.log('[openSettings] 当前路径:', currentPath);
            const settingsPath = "/project-settings?projectUlid=".concat(project.ulid, "&backPath=").concat(encodeURIComponent(currentPath));
            fnLog.log('[openSettings] 跳转到:', settingsPath);
            router.push(settingsPath, undefined, {
                shallow: true
            });
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
                    "data-testid": "EditProject__settingsButton__01JG2B008E",
                    onClick: ()=>{
                        openSettings();
                    },
                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Settings/* default */.A, {})
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)(IconButton/* default */.A, {
                    "data-testid": "EditProject__saveButton__01JFXYZP7F1G2H3I4J5K6L7M8",
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
var AppShell = __webpack_require__(65505);
// EXTERNAL MODULE: ../../libs/app/ui/src/components/appbar/AppBar.tsx + 3 modules
var AppBar = __webpack_require__(82524);
// EXTERNAL MODULE: ./src/components/page/action-list/action.data.ts + 10 modules
var action_data = __webpack_require__(83841);
// EXTERNAL MODULE: ./src/components/page/trigger-list/trigger.data.ts + 6 modules
var trigger_data = __webpack_require__(10322);
;// ./src/pages/project-editor/index.tsx





function ProjectEditorV2Test() {
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
/******/ __webpack_require__.O(0, [472,1172,9815,7468,1562,9398,2710,636,6593,8792], () => (__webpack_exec__(40373)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ _N_E = __webpack_exports__;
/******/ }
]);
//# sourceMappingURL=project-editor-83632b5dbe84df2e.js.map