"use strict";
(self["webpackChunk_N_E"] = self["webpackChunk_N_E"] || []).push([[5904],{

/***/ 46730:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


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

/***/ 55904:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  j: () => (/* binding */ actionListGroups),
  v: () => (/* binding */ initActionListGroups)
});

// EXTERNAL MODULE: ../../libs/app/static/src/utils/router-utils.ts
var router_utils = __webpack_require__(62632);
// EXTERNAL MODULE: ../../libs/droid/android/src/android/is-in-android.ts
var is_in_android = __webpack_require__(63149);
// EXTERNAL MODULE: ../../libs/droid/android/src/android/AutoWebViewJs.ts + 1 modules
var AutoWebViewJs = __webpack_require__(45921);
// EXTERNAL MODULE: ../../libs/droid/android/src/android/androidDispatchers.ts
var androidDispatchers = __webpack_require__(64558);
// EXTERNAL MODULE: ../../libs/droid/android/src/android/scripts/window/windowUtils.ts
var windowUtils = __webpack_require__(2454);
// EXTERNAL MODULE: ../../libs/droid/android/src/htmls/accessibility-info-buttons/accessibility-info-buttons.ts
var accessibility_info_buttons = __webpack_require__(65541);
// EXTERNAL MODULE: ../../libs/droid/project-interface/src/common/trigger-list-action-list-intf.ts
var trigger_list_action_list_intf = __webpack_require__(37416);
// EXTERNAL MODULE: ../../libs/droid/project-interface/src/events/projectEventUtils.ts
var projectEventUtils = __webpack_require__(6659);
// EXTERNAL MODULE: ../../libs/droid/project-interface/src/core/project-member-type.ts
var project_member_type = __webpack_require__(27880);
// EXTERNAL MODULE: ../../libs/droid/project/src/iproject/actions/a11y/node-execute/node-execute.ts + 15 modules
var node_execute = __webpack_require__(68835);
// EXTERNAL MODULE: ./src/components/trigger-list-action-list-common/ITriggerList-IActionList-common.intf.tsx
var ITriggerList_IActionList_common_intf = __webpack_require__(93579);
// EXTERNAL MODULE: __barrel_optimize__?names=ulid!=!../../node_modules/.pnpm/ulid@2.4.0/node_modules/ulid/dist/index.esm.js + 1 modules
var index_esm = __webpack_require__(67131);
;// ./src/components/page/action-list/groups/a11y/node-select/mockA11yNodeInfo.ts
const mockA11yNodeInfo1 = {
    "activeActivity": "com.fanfanlo.droid.MainActivity",
    "pn": "com.fanfanlo.droid.debug",
    "cn": "android.widget.FrameLayout",
    "node": {
        "availableExtraData": [
            "android.view.accessibility.extra.DATA_TEXT_CHARACTER_LOCATION_KEY"
        ],
        "boundsInScreen": {
            "bottom": 733,
            "left": 57,
            "right": 264,
            "top": 631
        },
        "children": [],
        "className": "android.widget.Button",
        "isAccessibilityDataSensitive": false,
        "isAccessibilityFocused": false,
        "isCheckable": false,
        "isChecked": false,
        "isClickable": true,
        "isContentInvalid": false,
        "isContextClickable": false,
        "isDismissable": false,
        "isEditable": false,
        "isEnabled": true,
        "isFocusable": true,
        "isFocused": true,
        "isHeading": false,
        "isImportantForAccessibility": false,
        "isLongClickable": false,
        "isMultiLine": false,
        "isPassword": false,
        "isScreenReaderFocusable": false,
        "isScrollable": false,
        "isSelected": false,
        "isShowingHintText": false,
        "isTextEntryKey": false,
        "isTextSelectable": false,
        "isVisibleToUser": true,
        "text": "选择节点",
        "viewIdResourceName": "a11y-node-select-action-item-df1c",
        "index": 0,
        "listIndex": 24
    }
};
const mockA11yNodeInfo2 = {
    "activeActivity": "com.fanfanlo.droid.MainActivity",
    "pn": "com.fanfanlo.droid.debug",
    "cn": "android.widget.FrameLayout",
    "node": {
        "availableExtraData": [
            "android.view.accessibility.extra.DATA_TEXT_CHARACTER_LOCATION_KEY"
        ],
        "boundsInScreen": {
            "bottom": 1258,
            "left": 60,
            "right": 467,
            "top": 1186
        },
        "children": [],
        "className": "android.widget.TextView",
        "isAccessibilityDataSensitive": false,
        "isAccessibilityFocused": false,
        "isCheckable": false,
        "isChecked": false,
        "isClickable": false,
        "isContentInvalid": false,
        "isContextClickable": false,
        "isDismissable": false,
        "isEditable": false,
        "isEnabled": true,
        "isFocusable": false,
        "isFocused": false,
        "isHeading": false,
        "isImportantForAccessibility": false,
        "isLongClickable": false,
        "isMultiLine": false,
        "isPassword": false,
        "isScreenReaderFocusable": false,
        "isScrollable": false,
        "isSelected": false,
        "isShowingHintText": false,
        "isTextEntryKey": false,
        "isTextSelectable": false,
        "isVisibleToUser": true,
        "text": "动作组",
        "index": 15,
        "listIndex": 40
    }
};
const mockA11yNodeInfoList = [
    mockA11yNodeInfo1,
    mockA11yNodeInfo2
];
function getRandomMockA11yNodeInfo() {
    return mockA11yNodeInfoList[parseInt((Math.random() * mockA11yNodeInfoList.length).toString())];
}

// EXTERNAL MODULE: ../../libs/fanfanlo/dist/src/watcher/proxyWatch.js + 2 modules
var proxyWatch = __webpack_require__(86125);
;// ./src/components/page/action-list/groups/a11y/node-select/node-execute-select.tsx








const a11yNodeSelectActionItem = {
    id: "a11y-node-select-action-item-df1c",
    i18nNs: "homepage/components/page/action-list/groups/a11y/node-select/content",
    nameKey: "content.name",
    group: "a11yNodeSelectActionItem.group",
    descriptionKey: "content.description",
    type: "action",
    LinkRender: (0,ITriggerList_IActionList_common_intf/* createActionOrTriggerButtonRender */.cI)(onAddSelect)
};
node_execute/* actionA11yNodeExecuteUtils */.p.onClickChange = onChangeSelect;
async function onSelect() {
    return new Promise((resolve)=>{
        if (!is_in_android/* isRealInAndroid */.nd) {
            return resolve(getRandomMockA11yNodeInfo());
        }
        const eventType = "a11yNodeSelectActionItem";
        const listenIndex = AutoWebViewJs/* autoWebViewJs */.yx.shellListen(androidDispatchers/* androidDispatchers */.m.WebViewJsDispatcher.name, eventType, eventType, false, onSelectNode);
        function onSelectNode(s) {
            const info = JSON.parse(s);
            console.log('fffffffffffffff', s);
            windowUtils/* windowUtils */.q.exitWindowById(windowId);
            AutoWebViewJs/* autoWebViewJs */.yx.shellRemoveListen(androidDispatchers/* androidDispatchers */.m.WebViewJsDispatcher.name, listenIndex);
            resolve(info);
        }
        const windowId = (0,index_esm/* ulid */.Z0)();
        (0,accessibility_info_buttons/* openHtmlShowA11yNodeInfoButton */.d)(eventType, windowId);
    });
}
async function onAddSelect(param) {
    let { query, router } = param;
    const nowPath = router.pathname;
    const info = await onSelect();
    const action = node_execute/* actionA11yNodeExecuteUtils */.p.mergeDataToDefaultData({});
    action.javaData.info = info;
    const res = (0,trigger_list_action_list_intf/* getTriggerOrActionListPageParams */.JT)(query);
    projectEventUtils/* projectEventUtils */.T.dispatchEditEvent(projectEventUtils/* projectEventUtils */.T.EditType.add, {
        data: action,
        projectMemberType: project_member_type/* ProjectMemberType */.K.actionGroup,
        projectInfo: res.data
    });
    router_utils/* routerUtils */.V.checkToPath(router, nowPath, query.backPath || "", 1);
    AutoWebViewJs/* autoWebViewJs */.yx.openSelfByPackage();
}
async function onChangeSelect(param) {
    let { query, onDataSelectedEventType } = param;
    console.log('lllllllllllllllllllllllllll2223333');
    const info = await onSelect();
    // onJavaDataChangeDataSelect?.(info)
    const res = (0,trigger_list_action_list_intf/* getTriggerOrActionListPageParams */.JT)(query);
    if (onDataSelectedEventType && res.data.action) {
        console.log('fffffffffffrom event type ');
        (0,proxyWatch/* getProxyDispatcher */.Ax)(res.data.action).dispatch(onDataSelectedEventType, info);
        return;
    }
    projectEventUtils/* projectEventUtils */.T.dispatchEditEvent(projectEventUtils/* projectEventUtils */.T.EditType.updateJavaData, {
        data: {
            info
        },
        projectMemberType: project_member_type/* ProjectMemberType */.K.action,
        projectInfo: res.data
    });
    AutoWebViewJs/* autoWebViewJs */.yx.openSelfByPackage();
}

;// ./src/components/page/action-list/groups/a11y/a11y-group.ts

const a11yGroup = {
    i18nNs: "homepage/components/page/action-list/groups/a11y/content",
    nameKey: "content.name",
    descriptionKey: "content.description",
    items: [
        a11yNodeSelectActionItem
    ]
};

// EXTERNAL MODULE: ../../libs/droid/project/src/iproject/actions/app/action-open-app/IActionOpenApp.inft.tsx + 2 modules
var IActionOpenApp_inft = __webpack_require__(86907);
;// ./src/components/page/action-list/groups/app/app-select/app-select.tsx


// http://192.168.177.180:3000/locales/homepage/components/page/action-list/groups/app/zh-CN/app-select.json?v=1.0.1
// apps\homepage\public\locales\homepage\components\page\action-list\groups\app\app-select\zh-CN\content.json
// 明天早上在这里注入actionType，继续设计，似乎openApp可以放到一个map里处理，将来更新字段多了，也可以有个分流
// 在选择app的页面里应该是通过actionType找到一个函数，给这个函数注入被选择的app就行，这样的话以后安卓手机接收消息转发等也可以用选择app的页面了
// 这个名字似乎叫openApp更合适
// id注入设计的不合理
const selectAppActionItem = {
    id: "selectAppActionItem-7537eb25-586d-4178-9d9b-b817706a4c6b",
    i18nNs: "homepage/components/page/action-list/groups/app/app-select/content",
    nameKey: "content.name",
    group: "selectAppActionItem.group",
    descriptionKey: "content.description",
    type: "page",
    LinkRender: (0,ITriggerList_IActionList_common_intf/* createActionOrTriggerListLinkRender */.IS)("/app-selector", "selectAppActionItem-7537eb25-586d-4178-9d9b-b817706a4c6b", {
        actionType: IActionOpenApp_inft/* actionOpenAppUtils */.F.type
    })
};

// EXTERNAL MODULE: ../../libs/droid/android/src/htmls/PnAnInfoWindow.ts + 1 modules
var PnAnInfoWindow = __webpack_require__(76105);
// EXTERNAL MODULE: ../../libs/droid/project/src/iproject/actions/app/to-app-main-page/IToAppMainPage.intf.ts + 1 modules
var IToAppMainPage_intf = __webpack_require__(79216);
// EXTERNAL MODULE: ../../libs/fanfanlo/src/utils/stringUtils.ts
var stringUtils = __webpack_require__(29192);
;// ./src/components/page/action-list/groups/app/to-app-main-page/to-app-main-page.tsx





const toAppMainPageActionItem = {
    id: "to-app-main-page-action-item-df1c",
    i18nNs: "homepage/components/page/action-list/groups/app/to-app-main-page/content",
    nameKey: "content.name",
    group: "toAppMainPageActionItem.group",
    descriptionKey: "content.description",
    type: "action",
    LinkRender: (0,ITriggerList_IActionList_common_intf/* createActionOrTriggerButtonRender */.cI)(to_app_main_page_onAddSelect)
};
IToAppMainPage_intf/* actionToAppMainPageUtils */.w.onClickChange = to_app_main_page_onChangeSelect;
async function to_app_main_page_onSelect() {
    let info;
    if (is_in_android/* isRealInAndroid */.nd) {
        info = await (0,PnAnInfoWindow/* openPnAnInfoWindow */.U)(true);
    } else {
        info = {
            pn: "".concat((0,stringUtils/* createRandomEnglishCharacters */.g0)(Math.floor(Math.random() * 5) + 5), ".").concat((0,stringUtils/* createRandomEnglishCharacters */.g0)(Math.floor(Math.random() * 5) + 5), ".").concat((0,stringUtils/* createRandomEnglishCharacters */.g0)(Math.floor(Math.random() * 5) + 5)),
            an: (0,stringUtils/* createRandomEnglishCharacters */.g0)(Math.floor(Math.random() * 5) + 5)
        };
    }
    // console.log('info1=', info)
    return info;
}
async function to_app_main_page_onAddSelect(param) {
    let { query } = param;
    const info = await to_app_main_page_onSelect();
    const res = (0,trigger_list_action_list_intf/* getTriggerOrActionListPageParams */.JT)(query);
    const action = IToAppMainPage_intf/* actionToAppMainPageUtils */.w.mergeDataToDefaultData({
        javaData: {
            pn: info.pn,
            an: info.an
        }
    });
    projectEventUtils/* projectEventUtils */.T.dispatchEditEvent(projectEventUtils/* projectEventUtils */.T.EditType.add, {
        data: action,
        projectMemberType: project_member_type/* ProjectMemberType */.K.actionGroup,
        projectInfo: res.data
    });
    window.history.back();
    AutoWebViewJs/* autoWebViewJs */.yx.openSelfByPackage();
}
async function to_app_main_page_onChangeSelect(param) {
    let { query } = param;
    const info = await to_app_main_page_onSelect();
    const res = (0,trigger_list_action_list_intf/* getTriggerOrActionListPageParams */.JT)(query);
    projectEventUtils/* projectEventUtils */.T.dispatchEditEvent(projectEventUtils/* projectEventUtils */.T.EditType.updateJavaData, {
        data: info,
        projectMemberType: project_member_type/* ProjectMemberType */.K.action,
        projectInfo: res.data
    });
    AutoWebViewJs/* autoWebViewJs */.yx.openSelfByPackage();
}

;// ./src/components/page/action-list/groups/app/app-group.ts


const appGroup = {
    i18nNs: "homepage/components/page/action-list/groups/app/content",
    nameKey: "content.name",
    descriptionKey: "content.description",
    items: [
        selectAppActionItem,
        toAppMainPageActionItem
    ]
};

// EXTERNAL MODULE: ../../libs/droid/project/src/iproject/actions/float-window/action-show-float-window/IActionShowFloatWindow.inft.tsx + 2 modules
var IActionShowFloatWindow_inft = __webpack_require__(46730);
;// ./src/components/page/action-list/groups/float-window/show-window/show-window.tsx


const showFloatWindowActionItem = {
    id: "showFloatWindowActionItem-e8c4f231-9a7b-4d2e-8f3a-2b1c5d6e7f8a",
    i18nNs: "homepage/components/page/action-list/groups/float-window/show-window/content",
    nameKey: "content.name",
    group: "showFloatWindowActionItem.group",
    descriptionKey: "content.description",
    type: "page",
    LinkRender: (0,ITriggerList_IActionList_common_intf/* createActionOrTriggerListLinkRender */.IS)("/float-window-config", "showFloatWindowActionItem-e8c4f231-9a7b-4d2e-8f3a-2b1c5d6e7f8a", {
        actionType: IActionShowFloatWindow_inft/* actionShowFloatWindowUtils */.n.type
    })
};

;// ./src/components/page/action-list/groups/float-window/float-window-group.ts

const floatWindowGroup = {
    i18nNs: "homepage/components/page/action-list/groups/float-window/content",
    nameKey: "content.name",
    descriptionKey: "content.description",
    items: [
        showFloatWindowActionItem
    ]
};

// EXTERNAL MODULE: ../../libs/app/static/src/pages/trigger-list-action-list-common/common.ts
var common = __webpack_require__(24899);
// EXTERNAL MODULE: ../../libs/droid/project/src/iproject/actions/script/script-action/IActionScript.inft.tsx + 3 modules
var IActionScript_inft = __webpack_require__(26933);
// EXTERNAL MODULE: ../../libs/fanfanlo/src/utils/throw-trace-error.ts
var throw_trace_error = __webpack_require__(94429);
;// ./src/components/page/action-list/groups/script/script-action/script-action.tsx






const scriptActionItem = {
    id: "script-action-item-ce8c",
    i18nNs: "homepage/components/page/action-list/groups/script/script-action/content",
    nameKey: "content.name",
    group: "scriptActionItem.group",
    descriptionKey: "content.description",
    type: "action",
    LinkRender: (0,ITriggerList_IActionList_common_intf/* createActionOrTriggerButtonRender */.cI)(script_action_onSelect)
};
function script_action_onSelect(param) {
    let { query, item } = param;
    const res = (0,trigger_list_action_list_intf/* getTriggerOrActionListPageParams */.JT)(query);
    switch(query.type){
        case common/* ActionOrTriggerListTypeEnum */.Q.addAction:
            const action = IActionScript_inft/* actionScriptUtils */.x.createDefaultData();
            console.log('[scriptAction.onSelect] 创建脚本动作:', action);
            if (!res.data.actionGroup) {
                return (0,throw_trace_error/* throwTraceError */.w)('actionGroup is not found', query);
            }
            projectEventUtils/* projectEventUtils */.T.dispatchEditEvent(projectEventUtils/* projectEventUtils */.T.EditType.add, {
                projectMemberType: project_member_type/* ProjectMemberType */.K.actionGroup,
                data: action,
                projectInfo: res.data
            });
            console.log('[scriptAction.onSelect] 事件已分发');
            window.history.back();
            break;
        case common/* ActionOrTriggerListTypeEnum */.Q.updateAction:
            console.log('[scriptAction.onSelect] updateAction 暂未实现');
            break;
    }
}

;// ./src/components/page/action-list/groups/script/script-group.ts

const scriptGroup = {
    i18nNs: "homepage/components/page/action-list/groups/script/content",
    nameKey: "content.name",
    descriptionKey: "content.description",
    items: [
        scriptActionItem
    ]
};

;// ./src/components/page/action-list/action.data.ts




const actionListGroups = [
    appGroup,
    a11yGroup,
    floatWindowGroup,
    scriptGroup
];
async function initActionListGroups() {
    actionListGroups;
}


/***/ }),

/***/ 62632:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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


/***/ })

}]);
//# sourceMappingURL=5904-c703e5636d3100c6.js.map