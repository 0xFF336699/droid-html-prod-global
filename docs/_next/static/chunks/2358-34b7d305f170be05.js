"use strict";
(self["webpackChunk_N_E"] = self["webpackChunk_N_E"] || []).push([[2358],{

/***/ 8299:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   q: () => (/* binding */ windowUtils)
/* harmony export */ });
/* harmony import */ var _AutoWebViewJs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(68709);

async function exitWindowById(id) {
    const script = 'var bl = com.fanfanlo.lib.components.floatview.floatwindow.WindowUtils.exitById("'.concat(id, '", "");\n bl;');
    console.log('exitWindowById_fn called', id, script);
    return _AutoWebViewJs__WEBPACK_IMPORTED_MODULE_0__/* .autoWebViewJs */ .yx.callScript(script);
}
const windowUtils = {
    exitWindowById
};


/***/ }),

/***/ 36370:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  U: () => (/* binding */ openPnAnInfoWindow)
});

// EXTERNAL MODULE: ../../libs/droid/android/src/confs/env.ts
var env = __webpack_require__(63259);
// EXTERNAL MODULE: __barrel_optimize__?names=ulid!=!../../node_modules/.pnpm/ulid@2.4.0/node_modules/ulid/dist/index.esm.js + 1 modules
var index_esm = __webpack_require__(43899);
// EXTERNAL MODULE: ../../libs/droid/android/src/android/win/WindowConf.ts
var WindowConf = __webpack_require__(99949);
// EXTERNAL MODULE: ../../libs/droid/android/src/android/components/permissionGroupCreator.ts + 4 modules
var permissionGroupCreator = __webpack_require__(15962);
// EXTERNAL MODULE: ../../libs/droid/android/src/android/components/PermissionGroup.ts
var PermissionGroup = __webpack_require__(6433);
// EXTERNAL MODULE: ../../libs/fanfanlo/src/events/EventDispatcher.ts
var EventDispatcher = __webpack_require__(31232);
// EXTERNAL MODULE: ../../libs/fanfanlo/src/log/Log.ts + 1 modules
var Log = __webpack_require__(89597);
// EXTERNAL MODULE: ../../libs/fanfanlo/src/events/DataEvent.ts + 1 modules
var DataEvent = __webpack_require__(56456);
// EXTERNAL MODULE: ../../libs/droid/android/src/android/WebViewJs.ts + 3 modules
var WebViewJs = __webpack_require__(24828);
// EXTERNAL MODULE: ../../libs/droid/android/src/android/androidDispatchers.ts
var androidDispatchers = __webpack_require__(59915);
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

// EXTERNAL MODULE: ../../libs/fanfanlo/src/i18n/i18n-value-loader.ts
var i18n_value_loader = __webpack_require__(91628);
// EXTERNAL MODULE: ../../libs/droid/android/src/android/scripts/window/windowUtils.ts
var windowUtils = __webpack_require__(8299);
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

/***/ 37206:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ openHtmlShowA11yNodeInfoWindow),
/* harmony export */   d: () => (/* binding */ openHtmlShowA11yNodeInfoButton)
/* harmony export */ });
/* harmony import */ var await_to_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(11318);
/* harmony import */ var _android_components_Manifest__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(34100);
/* harmony import */ var _android_components_permissionGroupCreator__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(15962);
/* harmony import */ var _android_win_WindowConf__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(99949);
/* harmony import */ var _android_WebViewJs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(24828);
/* harmony import */ var _confs_env__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(63259);
/* harmony import */ var _fanfanlo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(89597);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(80507);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);








const fileLog = new _fanfanlo__WEBPACK_IMPORTED_MODULE_1__/* .Log */ .tG(false, 'acceccibility-info-buttons');
function createCopy(callbackEventType, windowId) {
    let windowConf = (0,_android_win_WindowConf__WEBPACK_IMPORTED_MODULE_2__/* .createDefaultWindowConf */ .IL)();
    const conf = {
        htmlConf: {
            // url:`${env.htmlOrigin}pages/accessibility-info-buttons/#/`,
            url: "".concat(_confs_env__WEBPACK_IMPORTED_MODULE_3__/* .env */ ._.htmlOrigin, "pages/accessibility-info-buttons/index.html"),
            webViewJsParams: {
                fitContentClass: "webviewMeatureContainer",
                // fitContentWidth:-200,
                // fitContentHeight:-200,
                javaToJsDataString: JSON.stringify({
                    event: callbackEventType
                })
            }
        },
        windowId
    };
    windowConf = lodash__WEBPACK_IMPORTED_MODULE_0___default().merge(windowConf, conf);
    return (0,_android_win_WindowConf__WEBPACK_IMPORTED_MODULE_2__/* .createWindowConfCopy */ .Sb)(windowConf);
}
function openHtmlShowA11yNodeInfoWindow(callbackEventType, windowId) {
    const fnLog = fileLog.sub(false, 'openHtmlShowA11yNodeInfoWindow_fn');
    fnLog.info('callbackEventType =', callbackEventType, 'windowId =', windowId);
    let conf = createCopy(callbackEventType, windowId);
    fnLog.info("conf =", conf);
    return _android_WebViewJs__WEBPACK_IMPORTED_MODULE_4__/* .WebViewJs */ .L.instance.createWindow(JSON.stringify(conf));
}
async function openHtmlShowA11yNodeInfoButton(callbackEventType, windowId) {
    let [err, group] = await (0,await_to_js__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .A)((0,_android_components_permissionGroupCreator__WEBPACK_IMPORTED_MODULE_6__/* .runPermissionGroup */ .uu)(_android_components_Manifest__WEBPACK_IMPORTED_MODULE_7__/* .Manifest */ ._8.Permission.SYSTEM_ALERT_WINDOW, _android_components_Manifest__WEBPACK_IMPORTED_MODULE_7__/* .Manifest */ ._8.Permission.BIND_ACCESSIBILITY_SERVICE));
    console.log('openHtmlShowA11yNodeInfoButton_fn group=', group, 'err=', err);
    if (err) {
        if ("message" in err) {
            alert("悬浮窗权限申请错误 message= ".concat(err.message));
        } else {
            try {
                alert("悬浮窗权限申请错误 err= ".concat(JSON.stringify(err)));
            } catch (err) {
                alert("悬浮窗权限申请错误 stringify err ".concat(err));
            }
        }
        // alert(`openHtmlShowA11yNodeInfoButton_fn error err.toString()`)
        _android_WebViewJs__WEBPACK_IMPORTED_MODULE_4__/* .WebViewJs */ .L.instance.toast(err.toString());
        // showSimpleToast(err.toString())
        return;
    }
    return openHtmlShowA11yNodeInfoWindow(callbackEventType, windowId);
}


/***/ }),

/***/ 42248:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   IS: () => (/* binding */ createActionOrTriggerListLinkRender),
/* harmony export */   cI: () => (/* binding */ createActionOrTriggerButtonRender)
/* harmony export */ });
/* unused harmony export ActionOrTriggerListLinkRender */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(94513);
/* harmony import */ var _barrel_optimize_names_Button_mui_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(20872);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(99815);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1674);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);




function ActionOrTriggerListLinkRender(param) {
    let { query, children, pathname, id } = param;
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
        href: {
            pathname,
            query
        },
        "data-id": id,
        "data-testid": id,
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
            "data-testid": "ActionTriggerButton__".concat(item.id, "__01JG2B0078"),
            children: children
        });
    };
}


/***/ }),

/***/ 52358:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  j: () => (/* binding */ actionListGroups),
  v: () => (/* binding */ initActionListGroups)
});

// EXTERNAL MODULE: ../../libs/app/static/src/utils/router-utils.ts
var router_utils = __webpack_require__(57595);
// EXTERNAL MODULE: ../../libs/droid/android/src/android/is-in-android.ts
var is_in_android = __webpack_require__(49378);
// EXTERNAL MODULE: ../../libs/droid/android/src/android/AutoWebViewJs.ts + 1 modules
var AutoWebViewJs = __webpack_require__(68709);
// EXTERNAL MODULE: ../../libs/droid/android/src/android/androidDispatchers.ts
var androidDispatchers = __webpack_require__(59915);
// EXTERNAL MODULE: ../../libs/droid/android/src/android/scripts/window/windowUtils.ts
var windowUtils = __webpack_require__(8299);
// EXTERNAL MODULE: ../../libs/droid/android/src/htmls/accessibility-info-buttons/accessibility-info-buttons.ts
var accessibility_info_buttons = __webpack_require__(37206);
// EXTERNAL MODULE: ../../libs/droid/project-v2-interface/src/index.ts + 29 modules
var src = __webpack_require__(34456);
// EXTERNAL MODULE: ../../libs/droid/project-v2-ext/src/index.ts + 61 modules
var project_v2_ext_src = __webpack_require__(54245);
// EXTERNAL MODULE: ./src/components/trigger-list-action-list-common/ITriggerList-IActionList-common.intf.tsx
var ITriggerList_IActionList_common_intf = __webpack_require__(42248);
// EXTERNAL MODULE: __barrel_optimize__?names=ulid!=!../../node_modules/.pnpm/ulid@2.4.0/node_modules/ulid/dist/index.esm.js + 1 modules
var index_esm = __webpack_require__(43899);
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

// EXTERNAL MODULE: ../../libs/fanfanlo/src/watcher/proxyWatch.ts
var proxyWatch = __webpack_require__(57641);
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
project_v2_ext_src.actionA11yNodeExecuteUtils.onClickChange = onChangeSelect;
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
    const action = project_v2_ext_src.actionA11yNodeExecuteUtils.mergeDataToDefaultData({});
    action.javaData.info = info;
    const res = (0,src.getTriggerOrActionListPageParams)(query);
    src.projectEventUtils.dispatchEditEvent(src.projectEventUtils.EditType.add, {
        data: action,
        projectMemberType: src.ProjectMemberType.actionGroup,
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
    const res = (0,src.getTriggerOrActionListPageParams)(query);
    if (onDataSelectedEventType && res.data.action) {
        console.log('fffffffffffrom event type ');
        (0,proxyWatch/* getProxyDispatcher */.Ax)(res.data.action).dispatch(onDataSelectedEventType, info);
        return;
    }
    src.projectEventUtils.dispatchEditEvent(src.projectEventUtils.EditType.updateJavaData, {
        data: {
            info
        },
        projectMemberType: src.ProjectMemberType.action,
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
        actionType: project_v2_ext_src.actionOpenAppUtils.type
    })
};

// EXTERNAL MODULE: ../../libs/droid/android/src/htmls/PnAnInfoWindow.ts + 1 modules
var PnAnInfoWindow = __webpack_require__(36370);
// EXTERNAL MODULE: ../../libs/fanfanlo/src/utils/stringUtils.ts
var stringUtils = __webpack_require__(70649);
;// ./src/components/page/action-list/groups/app/to-app-main-page/to-app-main-page.tsx

// v2: 使用 project-v2-interface 替代 project-interface




const toAppMainPageActionItem = {
    id: "to-app-main-page-action-item-df1c",
    i18nNs: "homepage/components/page/action-list/groups/app/to-app-main-page/content",
    nameKey: "content.name",
    group: "toAppMainPageActionItem.group",
    descriptionKey: "content.description",
    type: "action",
    LinkRender: (0,ITriggerList_IActionList_common_intf/* createActionOrTriggerButtonRender */.cI)(to_app_main_page_onAddSelect)
};
project_v2_ext_src.actionToAppMainPageUtils.onClickChange = to_app_main_page_onChangeSelect;
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
    const res = (0,src.getTriggerOrActionListPageParams)(query);
    const action = project_v2_ext_src.actionToAppMainPageUtils.mergeDataToDefaultData({
        javaData: {
            pn: info.pn,
            an: info.an
        }
    });
    src.projectEventUtils.dispatchEditEvent(src.projectEventUtils.EditType.add, {
        data: action,
        projectMemberType: src.ProjectMemberType.actionGroup,
        projectInfo: res.data
    });
    window.history.back();
    AutoWebViewJs/* autoWebViewJs */.yx.openSelfByPackage();
}
async function to_app_main_page_onChangeSelect(param) {
    let { query } = param;
    const info = await to_app_main_page_onSelect();
    const res = (0,src.getTriggerOrActionListPageParams)(query);
    src.projectEventUtils.dispatchEditEvent(src.projectEventUtils.EditType.updateJavaData, {
        data: info,
        projectMemberType: src.ProjectMemberType.action,
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

;// ./src/components/page/action-list/groups/float-window/show-window/show-window.tsx


const showFloatWindowActionItem = {
    id: "showFloatWindowActionItem-e8c4f231-9a7b-4d2e-8f3a-2b1c5d6e7f8a",
    i18nNs: "homepage/components/page/action-list/groups/float-window/show-window/content",
    nameKey: "content.name",
    group: "showFloatWindowActionItem.group",
    descriptionKey: "content.description",
    type: "page",
    LinkRender: (0,ITriggerList_IActionList_common_intf/* createActionOrTriggerListLinkRender */.IS)("/float-window-config", "showFloatWindowActionItem-e8c4f231-9a7b-4d2e-8f3a-2b1c5d6e7f8a", {
        actionType: project_v2_ext_src.actionShowFloatWindowUtils.type
    })
};

// EXTERNAL MODULE: ../../libs/app/static/src/pages/trigger-list-action-list-common/common.ts
var common = __webpack_require__(82964);
// EXTERNAL MODULE: ../../libs/fanfanlo/src/log/Log.ts + 1 modules
var Log = __webpack_require__(89597);
// EXTERNAL MODULE: ../../libs/fanfanlo/src/utils/throw-trace-error.ts
var throw_trace_error = __webpack_require__(51020);
;// ./src/components/page/action-list/groups/float-window/accessibility-node-reader/accessibility-node-reader.tsx





const fileLog = new Log/* Log */.tG(false, 'accessibility_node_reader_action');
// fileLog.pause = true
// fileLog.childrenPaused = true
const accessibilityNodeReaderActionItem = {
    id: "accessibility-node-reader-action-item-anr001",
    i18nNs: "homepage/components/page/action-list/groups/float-window/accessibility-node-reader/content",
    nameKey: "content.name",
    group: "accessibilityNodeReaderActionItem.group",
    descriptionKey: "content.description",
    type: "action",
    LinkRender: (0,ITriggerList_IActionList_common_intf/* createActionOrTriggerButtonRender */.cI)(accessibility_node_reader_onSelect)
};
function accessibility_node_reader_onSelect(param) {
    let { query, item } = param;
    const fnLog = fileLog.sub(false, 'onSelect_fn');
    // fnLog.pause = true
    // fnLog.childrenPaused = true
    fnLog.log('query:', query);
    fnLog.log('item:', item);
    const res = (0,src.getTriggerOrActionListPageParams)(query);
    fnLog.log('res:', res);
    switch(query.type){
        case common/* ActionOrTriggerListTypeEnum */.Q.addAction:
            fnLog.log('addAction 分支');
            const action = project_v2_ext_src.actionAccessibilityNodeReaderUtils.createDefaultData();
            fnLog.log('创建无障碍节点读取动作:', action);
            if (!res.data.actionGroup) {
                fnLog.log('actionGroup 不存在');
                return (0,throw_trace_error/* throwTraceError */.w)('actionGroup is not found', query);
            }
            fnLog.log('分发编辑事件');
            src.projectEventUtils.dispatchEditEvent(src.projectEventUtils.EditType.add, {
                projectMemberType: src.ProjectMemberType.actionGroup,
                data: action,
                projectInfo: res.data
            });
            fnLog.log('事件已分发');
            fnLog.log('返回上一页');
            window.history.back();
            break;
        case common/* ActionOrTriggerListTypeEnum */.Q.updateAction:
            fnLog.log('updateAction 暂未实现');
            break;
    }
}

;// ./src/components/page/action-list/groups/float-window/float-window-group.ts


const floatWindowGroup = {
    i18nNs: "homepage/components/page/action-list/groups/float-window/content",
    nameKey: "content.name",
    descriptionKey: "content.description",
    items: [
        showFloatWindowActionItem,
        accessibilityNodeReaderActionItem
    ]
};

;// ./src/components/page/action-list/groups/script/script-action/script-action.tsx

// v2: 使用 project-v2-interface 替代 project-interface




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
    const res = (0,src.getTriggerOrActionListPageParams)(query);
    switch(query.type){
        case common/* ActionOrTriggerListTypeEnum */.Q.addAction:
            const action = project_v2_ext_src.actionScriptUtils.createDefaultData();
            console.log('[scriptAction.onSelect] 创建脚本动作:', action);
            if (!res.data.actionGroup) {
                return (0,throw_trace_error/* throwTraceError */.w)('actionGroup is not found', query);
            }
            src.projectEventUtils.dispatchEditEvent(src.projectEventUtils.EditType.add, {
                projectMemberType: src.ProjectMemberType.actionGroup,
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

/***/ 57595:
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


/***/ }),

/***/ 70649:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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


/***/ })

}]);
//# sourceMappingURL=2358-34b7d305f170be05.js.map