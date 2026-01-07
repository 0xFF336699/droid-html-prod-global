"use strict";
(self["webpackChunk_N_E"] = self["webpackChunk_N_E"] || []).push([[1562],{

/***/ 6433:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   v: () => (/* binding */ PermissionGroup)
/* harmony export */ });
/* harmony import */ var _fanfanlo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(31232);
/* harmony import */ var _fanfanlo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(89597);
/* harmony import */ var _fanfanlo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(56456);
/* harmony import */ var _Permission__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(51996);


class PermissionGroup extends _fanfanlo__WEBPACK_IMPORTED_MODULE_0__/* .EventDispatcher */ .Q {
    get isSuccess() {
        let { print, error, warn, logger } = this.logger.sub(false, "fn_isSuccess");
        for(let i = 0; i < this.permissions.length; i++){
            let p = this.permissions[i];
            print("permission is ".concat(p.constructor.name, ", success is ").concat(p.isSuccess));
            if (!p.isSuccess) return false;
        }
        return true;
    }
    addCallback(callback) {
        this.callback = callback;
        return this;
    }
    constructor(permissions = []){
        super(), this.index = -1, this.logger = new _fanfanlo__WEBPACK_IMPORTED_MODULE_1__/* .Log */ .tG(false, this.constructor.name), this.run = ()=>{
            this.checkNext();
        }, this.runPermission = ()=>{
            console.log('runPermission_fn', 'index=', this.index, 'permissions.length=', this.permissions.length);
            if (this.permissions.length < this.index) {
                throw new Error("permission index out of bounds");
            }
            let p = this.permissions[this.index];
            p.addDomainEventListener(this, _Permission__WEBPACK_IMPORTED_MODULE_2__/* .Permission */ .a.eventComplete, this.onPermissionComplete);
            p.checkOrAsk();
        }, this.onPermissionComplete = (e)=>{
            e.target.removeDomain(this);
            this.checkNext();
        }, this.checkNext = ()=>{
            console.log('checkNext_fn', 'index=', this.index, 'permissions.length=', this.permissions.length);
            this.index++;
            if (this.index >= this.permissions.length) {
                return this.dispatchComplete();
            }
            this.runPermission();
        }, this.dispatchComplete = ()=>{
            var _this_callback, _this;
            console.log('dispatchComplete_fn', 'isSuccess=', this.isSuccess, 'index=', this.index);
            this.dispatchEvent(new _fanfanlo__WEBPACK_IMPORTED_MODULE_3__/* .DataEvent */ .P(PermissionGroup.eventComplete));
            (_this_callback = (_this = this).callback) === null || _this_callback === void 0 ? void 0 : _this_callback.call(_this, this, this.isSuccess);
        }, this.exit = ()=>{
            for(let i = 0; i < this.permissions.length; i++){
                this.permissions[i].removeDomain(this);
            }
        };
        // this.logger = Log.createCountedLogger(false, this.constructor.name)
        this.permissions = permissions;
    }
}
PermissionGroup.eventComplete = "complete";


/***/ }),

/***/ 15962:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  ps: () => (/* binding */ createFloatA11yPermissionGroup),
  uu: () => (/* binding */ runPermissionGroup)
});

// UNUSED EXPORTS: createPermissionsGroup

// EXTERNAL MODULE: ../../libs/fanfanlo/src/i18n/i18n-value-loader.ts
var i18n_value_loader = __webpack_require__(91628);
// EXTERNAL MODULE: ../../libs/fanfanlo/src/log/Log.ts + 1 modules
var Log = __webpack_require__(89597);
// EXTERNAL MODULE: ../../libs/fanfanlo/src/utils/documentUtils.ts
var documentUtils = __webpack_require__(12877);
// EXTERNAL MODULE: ../../libs/droid/android/src/android/androidDispatchers.ts
var androidDispatchers = __webpack_require__(59915);
// EXTERNAL MODULE: ../../libs/droid/android/src/android/AutoWebViewJs.ts + 1 modules
var AutoWebViewJs = __webpack_require__(68709);
// EXTERNAL MODULE: ../../libs/droid/android/src/android/WebViewJs.ts + 3 modules
var WebViewJs = __webpack_require__(24828);
// EXTERNAL MODULE: ../../libs/droid/android/src/android/components/i18n.ts
var i18n = __webpack_require__(31909);
// EXTERNAL MODULE: ../../libs/droid/android/src/android/components/Manifest.ts
var Manifest = __webpack_require__(34100);
// EXTERNAL MODULE: ../../libs/droid/android/src/android/components/Permission.ts + 2 modules
var Permission = __webpack_require__(51996);
// EXTERNAL MODULE: ../../libs/fanfanlo/src/storage/storage.ts
var storage = __webpack_require__(93646);
// EXTERNAL MODULE: ../../libs/fanfanlo/src/storage/store-utils.ts
var store_utils = __webpack_require__(29498);
;// ../../libs/droid/android/src/android/components/permission-storage.ts

const permissionStorage = store_utils/* storeUtils */.P.namespace('permission-droid/android');

;// ../../libs/droid/android/src/android/components/PermissionAskUi.ts


class PermissionAskUi {
    getCheckBoxValue() {
        let { storageKey } = this.conf;
        if (!storageKey) return undefined;
        const o = permissionStorage.read(storageKey);
        // const o = {hide:false, time:0} //storage.getItem(storageKey) as any;
        let show = true;
        if (o && o.hide === true) {
            let now = Date.now();
            let time = o.time;
            let diff = now - time;
            if (diff < 1000 * 60 * 60 * 24 * 15) {
                show = false;
            }
        }
        return show;
    }
    createDialogInnerHtml() {
        let { text, title, hasCheckBox, checkBoxText, okButtonText, cancelButtonText } = this.conf;
        let ct = hasCheckBox ? '<div style="flex;flex-direction: row"><input id="permissionAskHideCheckBox" type="checkbox" />\n            <span>'.concat(checkBoxText, "</span>\n            </div> ") : '';
        let innerHTML = '<div>\n        <div>\n        <div style="text-align: center">\n        <b>'.concat(title, "</b>\n        </div>\n        <p>").concat(text, "</p>\n        ").concat(ct, '\n        </div>\n        <div style="text-align: right;margin-right: 20px">\n        <button id="permissionAskCancelButton" href="#" style="margin-right: 20px">').concat(cancelButtonText, '</button>\n        <button id="permissionAskOkButton">').concat(okButtonText, "</button></div>\n        </div>");
        return innerHTML;
    }
    initDialog() {
        let checkBoxValue = this.getCheckBoxValue();
        if (checkBoxValue === false) {
            this.callAsk();
            this.exit();
            return;
        }
        var dialog = document.createElement("dialog");
        this.dialog = dialog;
        dialog.innerHTML = this.createDialogInnerHtml();
        document.body.appendChild(dialog);
        this.initCloseButton();
        this.initOkButton();
        dialog.showModal();
    }
    initCloseButton() {
        let closeBtn = document.getElementById("permissionAskCancelButton");
        if (closeBtn) {
            closeBtn.onclick = ()=>{
                this.closeDialog();
            };
        }
    }
    initOkButton() {
        let okBtn = document.getElementById("permissionAskOkButton");
        console.log('oooooooooke button=', okBtn);
        if (!okBtn) return;
        console.log('oozz', okBtn, this);
        // okBtn.addEventListener('click', ()=>{
        //     console.log('ffffffffffffff', this)
        // })
        okBtn.onclick = this.onOkClick.bind(this);
    }
    callAsk() {
        this.permission.callAsk();
    }
    exit() {
        if (this.exited) return;
        this.exited = true;
    }
    closeDialog() {
        this.exit();
        if (!this.dialog) return;
        this.dialog.close();
        document.body.removeChild(this.dialog);
        this.dialog = undefined;
    }
    onOkClick() {
        console.log('ooooooooooookkkkk clickedqqq');
        this.storeCheckValue();
        this.callAsk();
        this.closeDialog();
    }
    onCloseClick() {
        this.closeDialog();
    }
    constructor(){
        this.exited = false;
        this.showDialog = ()=>{
            this.initDialog();
        };
        this.storeCheckValue = ()=>{
            let { hasCheckBox, storageKey } = this.conf;
            if (!hasCheckBox) return;
            let input = document.getElementById("permissionAskHideCheckBox");
            let checked = false;
            if (input) {
                checked = input["checked"];
            }
            if (checked) {
                let o = {
                    hide: true,
                    time: Date.now()
                };
                storage/* storage */.I.setItem(storageKey, o);
            }
        };
        this.show = (permission)=>{
            this.permission = permission;
            this.showDialog();
        };
    }
}

;// ../../libs/droid/android/src/android/components/floatPermission.ts








// console.trace('float permission')
let trans;
async function floatpermissionInit() {
    trans = await (0,i18n_value_loader/* getI18nT */.r)("droid-android/android/components/content");
}
floatpermissionInit();
function callback(isOk, rejectMsg) {}
function createAskScript(eventType, id) {
    let script = '\nvar bl = com.fanfanlo.lib.permissions.FloatPermission.openPermission(function(bl){\n        webViewJs.callJsEvent("'.concat(eventType, '", bl, "').concat(id, '");\n    });\n    webViewJs.callJsEvent("').concat(eventType, '", bl, "').concat(id, '");\n');
    const conf = {
        forceStopTime: 0,
        onlyRunSingle: true,
        stopPrevIfOnlyRunSingle: true,
        injects: [
            [
                "webViewJs"
            ]
        ],
        script
    };
    return AutoWebViewJs/* AutoWebViewJs */.w6.confToScript(conf);
}
function createPermissionConf(askUi, eventType, id) {
    let conf = {
        askUi: askUi,
        callback,
        permissionId: 0,
        scripts: {
            ask: {
                script: createAskScript(eventType, id),
                isRunner: true
            },
            check: {
                script: "var bl = com.fanfanlo.lib.permissions.FloatPermission.hasPermission();\n bl;",
                isRunner: false
            }
        },
        listenResume: false
    };
    return conf;
}
function createAskUi() {
    const t = (0,i18n/* getTrans */.j)();
    let conf = {
        cancelButtonText: t("floatPermission.cancel"),
        checkBoxText: t("floatPermission.checkBoxText"),
        hasCheckBox: true,
        okButtonText: t("floatPermission.ok"),
        // storageKey: storageKeys.permissions.float.showAsk,
        storageKey: 'storageKeys.permissions.float.showAsk',
        text: t("floatPermission.content"),
        title: t("floatPermission.title")
    };
    let askUi = new PermissionAskUi();
    askUi.conf = conf;
    return askUi;
}
function listenAskBackEvent(eventType, permission) {
    let print = new Log/* Log */.tG(false, "fn-listenAskBackEvent").print;
    const index = WebViewJs/* WebViewJs */.L.instance.shellListen(androidDispatchers/* androidDispatchers */.m.webViewJs.name, eventType, eventType, true, onBack);
    print("index is", index);
    function onBack(data) {
        print("fn-onBack result is", data);
    }
    document.addEventListener(documentUtils/* documentEventTypeDocumentIsShow */.oj, onDocumentShow);
    function onDocumentShow() {
        document.removeEventListener(documentUtils/* documentEventTypeDocumentIsShow */.oj, onDocumentShow);
        let res = WebViewJs/* WebViewJs */.L.instance.shellRemoveListen(androidDispatchers/* androidDispatchers */.m.webViewJs.name, index);
        permission.askComplete();
        print("android listener removeListen", res);
    }
}
function createFloatPermission() {
    let askUi = createAskUi();
    let id = Date.now().toString();
    let eventType = "onFloatPermissionSettingResult".concat(id);
    let permissionConf = createPermissionConf(askUi, eventType, id);
    let floatPermission = new FloatPermission();
    floatPermission.conf = permissionConf;
    return floatPermission;
}
class FloatPermission extends Permission/* Permission */.a {
    ask() {
        let id = Date.now().toString();
        let eventType = "onFloatPermissionSettingResult".concat(id);
        this.conf.scripts.ask.script = createAskScript(eventType, id);
        listenAskBackEvent(eventType, this);
        let res = super.ask();
        this.dispatchMayUpdatedEvent(undefined, undefined);
    }
    constructor(){
        super();
        this.androidPermissionList = [
            Manifest/* Manifest */._8.Permission.SYSTEM_ALERT_WINDOW
        ];
    }
}

;// ../../libs/droid/android/src/android/components/A11yPermission.ts





// import { storageKeys } from "@droid/data";
/**
 * ask back data
 * class A11yServiceLiveInfo {
 *     var hasPermission = false
 *     var hasService = false
 *     var isAlive = false
 *     var pingTime = 0L
 *     var test = "abc"
 * }
 */ function A11yPermission_callback(isOk, rejectMsg) {}
function A11yPermission_createPermissionConf(askUi) {
    let conf = {
        askUi: askUi,
        callback: A11yPermission_callback,
        permissionId: 0,
        scripts: {
            ask: {
                script: "",
                isRunner: false
            },
            check: {
                script: "",
                isRunner: false
            }
        },
        listenResume: true
    };
    return conf;
}
function A11yPermission_createAskUi() {
    const t = (0,i18n/* getTrans */.j)();
    let conf = {
        cancelButtonText: t("A11yPermission.cancel"),
        checkBoxText: t("A11yPermission.checkBoxText"),
        hasCheckBox: true,
        okButtonText: t("A11yPermission.ok"),
        // storageKey: storageKeys.permissions.a11y.showAsk,
        storageKey: 'storageKeys.permissions.a11y.showAsk',
        text: t("A11yPermission.content"),
        title: t("A11yPermission.title")
    };
    let askUi = new PermissionAskUi();
    askUi.conf = conf;
    return askUi;
}
function createA11yPermission() {
    let askUi = A11yPermission_createAskUi();
    let permissionConf = A11yPermission_createPermissionConf(askUi);
    let permission = new A11yPermission();
    permission.conf = permissionConf;
    return permission;
}
class A11yPermission extends Permission/* Permission */.a {
    runCheck() {
        let { print, error, warn, logger } = this.logger.sub(false, "fn_ask");
        let res = AutoWebViewJs/* autoWebViewJs */.yx.onCallGetA11yServiceLiveInfo();
        let { errMsg, javaResultData: data } = res;
        if (errMsg) {
            error(errMsg);
            error(errMsg);
            return undefined;
        }
        print("data2 is", res);
        // print("data3 is", res?.hasPermission);
        return data === null || data === void 0 ? void 0 : data.hasPermission;
    }
    ask() {
        AutoWebViewJs/* autoWebViewJs */.yx.onCallOpenA11yPermission();
    }
    constructor(){
        super();
        this.androidPermissionList = [
            Manifest/* Manifest */._8.Permission.BIND_ACCESSIBILITY_SERVICE
        ];
    }
}

// EXTERNAL MODULE: ../../libs/droid/android/src/android/components/PermissionGroup.ts
var PermissionGroup = __webpack_require__(6433);
;// ../../libs/droid/android/src/android/components/permissionGroupCreator.ts




const P = Manifest/* Manifest */._8.Permission;
const map = {
    [P.BIND_ACCESSIBILITY_SERVICE]: createA11yPermission,
    [P.SYSTEM_ALERT_WINDOW]: createFloatPermission
};
function createFloatA11yPermissionGroup() {
    return createPermissionsGroup(P.SYSTEM_ALERT_WINDOW, P.BIND_ACCESSIBILITY_SERVICE);
}
function createPermissionsGroup() {
    for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++){
        args[_key] = arguments[_key];
    }
    let list = [];
    for(let i = 0; i < args.length; i++){
        let name = args[i];
        let f = map[name];
        if (!f) {
            throw new Error("no permission registed " + name);
        }
        list.push(f());
    }
    let group = new PermissionGroup/* PermissionGroup */.v(list);
    return group;
}
async function runPermissionGroup() {
    for(var _len = arguments.length, permissions = new Array(_len), _key = 0; _key < _len; _key++){
        permissions[_key] = arguments[_key];
    }
    return new Promise((resolve, reject)=>{
        let group = createPermissionsGroup(...permissions);
        group.addEventListener(PermissionGroup/* PermissionGroup */.v.eventComplete, ()=>{
            console.log('runPermissionGroup_fn in Promise group=', group, 'permissions=', permissions, 'isSuccess=', group.isSuccess);
            if (group.isSuccess) {
                resolve(group);
            } else {
                reject(group);
            }
        });
        group.run();
    });
}


/***/ }),

/***/ 31232:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Q: () => (/* binding */ EventDispatcher)
/* harmony export */ });
class EventDispatcher {
    addDomainEventListener(domain, type, cb, index) {
        let _domain = this.listenDomainMap.get(domain);
        if (!_domain) {
            _domain = new Map();
            this.listenDomainMap.set(domain, _domain);
        }
        let listeners = _domain.get(type);
        if (!listeners) {
            listeners = [];
            _domain.set(type, listeners);
        }
        if (listeners.indexOf(cb) == -1) listeners.push(cb);
        this.addEventListener(type, cb, index);
    }
    addDomainOnceListener(domain, type, cb, index) {
        this.addOnceListener(type, cb, index, domain);
    }
    addEventListener(type, cb, index) {
        if (type === '') {
            try {
                throw new Error('addDomainEventListener error no type');
            } catch (e) {
                console.log('EventDispatcher2', 'addDomainEventListener', 'err', type, e);
            }
        }
        if (typeof cb != 'function') {
            try {
                throw new Error('addDomainEventListener error no cb');
            } catch (e) {
                console.log('EventDispatcher2', 'addDomainEventListener', 'err', cb, e);
            }
        }
        let listeners = this.listenMap.get(type);
        if (!listeners) {
            listeners = [];
            this.listenMap.set(type, listeners);
        }
        const _index = listeners.indexOf(cb);
        if (_index > -1) listeners.splice(_index, 1);
        if (index == undefined || index < 0) index = listeners.length;
        index = Math.max(0, Math.min(index, listeners.length));
        listeners.splice(index, 0, cb);
    }
    addEventListenerOnce(type, cb, index) {
        return this.addOnceListener(type, cb, index, undefined);
    }
    onceListenerCb(type, onEvent, domain) {
        // eslint-disable-next-line @typescript-eslint/no-this-alias
        const that = this;
        return (function() {
            for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++){
                args[_key] = arguments[_key];
            }
            // onEvent(event);
            if (typeof onEvent === 'function') {
                onEvent(...args);
            } else {
                console.error(onEvent);
                console.log(...args);
                throw new Error('onEvent not a function');
            }
            // eslint-disable-next-line prefer-spread,@typescript-eslint/ban-types
            // (onEvent as Function).apply(null, args)
            // const listeners = that.onceListeners[type];
            const listeners = that.onceListeners.get(type);
            if (!listeners) return;
            if (domain) that.removeDomainEventListener(domain, type, listeners.get(onEvent));
            else that.removeEventListener(type, listeners.get(onEvent));
        }).bind(this);
    }
    addOnceListener(type, onEvent, index, domain) {
        // let listeners = this.onceListeners[type];
        let listeners = this.onceListeners.get(type);
        if (!listeners) {
            listeners = new Map();
            this.onceListeners.set(type, listeners);
        }
        const fn = this.onceListenerCb(type, onEvent, domain);
        listeners.set(onEvent, fn);
        domain ? this.addDomainEventListener(domain, type, fn, index) : this.addEventListener(type, fn, index);
        return fn;
    }
    dispatchArgs(type) {
        for(var _len = arguments.length, rest = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++){
            rest[_key - 1] = arguments[_key];
        }
        const listeners = this.listenMap.get(type);
        if (!listeners) return false;
        for(let i = 0, len = listeners.length; i < len; i++){
            listeners[i].apply(null, rest);
        }
        return true;
    }
    dispatchEvent(event) {
        if (!event || !event.type) return true;
        const listeners = this.listenMap.get(event.type);
        if (!listeners) {
            return false;
        }
        event[event._target] = this;
        for(let i = 0, len = listeners.length; i < len; i++){
            if (event.canceled) return false;
            try {
                listeners[i](event);
            } catch (e) {
                console.log('EventDispatcher2', 'dispatchEvent', 'err', e);
                console.log('event is', event);
            }
        }
        return true;
    }
    removeDomain(domain) {
        const domainMap = this.listenDomainMap.get(domain);
        if (!domainMap) return false;
        for(const type in domainMap){
            var _domainMap_get;
            (_domainMap_get = domainMap.get(type)) === null || _domainMap_get === void 0 ? void 0 : _domainMap_get.forEach((cb)=>{
                try {
                    this.removeEventListener(type, cb);
                } catch (e) {
                    console.log('eventdispatcher2', 'removedomain', 'err', e);
                }
            }, this);
        }
        this.listenDomainMap.delete(domain);
        return true;
    }
    removeDomainEventListener(domain, type, cb) {
        const domainMap = this.listenDomainMap.get(domain);
        if (!domainMap) return false;
        const listeners = domainMap.get(type);
        if (!listeners) return false;
        const index = listeners.indexOf(cb);
        if (index == -1) return false;
        listeners.splice(index, 1);
        return this.removeEventListener(type, cb);
    }
    removeEventListener(type, cb) {
        const listeners = this.listenMap.get(type);
        if (!listeners) return false;
        const index = listeners.indexOf(cb);
        if (index == -1) {
            return false;
        } else {
            listeners.splice(index, 1);
            return true;
        }
    }
    willTrigger(type) {
        const l = this.listenMap.get(type);
        return !l || l.length == 0 ? false : true;
    // return this.listenMap.get(type) !== undefined && this.listenMap.get(type)?.length > 0;
    }
    constructor(){
        this.listenDomainMap = new Map();
        this.listenMap = new Map();
        this.onceListeners = new Map();
    }
}


/***/ }),

/***/ 51996:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  a: () => (/* binding */ Permission)
});

// EXTERNAL MODULE: ../../libs/droid/android/src/android/AutoWebViewJs.ts + 1 modules
var AutoWebViewJs = __webpack_require__(68709);
// EXTERNAL MODULE: ../../libs/fanfanlo/src/events/DataEvent.ts + 1 modules
var DataEvent = __webpack_require__(56456);
;// ../../libs/droid/android/src/android/components/PermissionEvent.ts

class PermissionEvent extends DataEvent/* DataEvent */.P {
    constructor(type, bl, extra, permission){
        super(type, {
            bl,
            extra,
            permission
        });
        this.bl = bl;
        this.extra = extra;
        this.permission = permission;
    }
}

// EXTERNAL MODULE: ../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/lodash.js
var lodash = __webpack_require__(80507);
var lodash_default = /*#__PURE__*/__webpack_require__.n(lodash);
// EXTERNAL MODULE: ../../libs/fanfanlo/src/events/EventDispatcher.ts
var EventDispatcher = __webpack_require__(31232);
;// ../../libs/fanfanlo/src/utils/callLater/callLater.ts

const list = [];
// in browser,not supports in nodejs
function callLater(fn, delay) {
    let repeatable = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : false;
    for(var _len = arguments.length, args = new Array(_len > 3 ? _len - 3 : 0), _key = 3; _key < _len; _key++){
        args[_key - 3] = arguments[_key];
    }
    if (!repeatable) {
        removeCallLater(fn);
    }
    let data = {
        fn,
        handle: -1,
        cancelled: false
    };
    // if in nodejs need to change window an return type
    data.handle = window.setTimeout(()=>{
        if (data.cancelled) return;
        fn.apply(undefined, args);
        remove(data);
    }, delay);
    list.push(data);
    return data;
}
function removeCallLater(fn) {
    for(let i = 0; i < list.length; i++){
        let data = list[i];
        if (!data) continue;
        if (data.fn == fn) {
            stopClear(data, i);
            return;
        }
    }
}
function remove(data) {
    let index = list.indexOf(data);
    stopClear(data, index);
}
function stopClear(data, index) {
    if (!data) return;
    clearTimeout(data.handle);
    data.cancelled = true;
    if (index > -1) {
        list.splice(index, 1);
    }
}
class QueueMicroTaskData {
    constructor(fn){
        this.f = ()=>{
            if (this.cancelled) return;
            let fn = this.fn;
            removeQueueMicroTask(this.fn);
            fn();
        };
        this.cancelled = false;
        this.fn = fn;
    }
}
let tasks = (/* unused pure expression or super */ null && ([]));
function callQueueMicroTask(fn) {
    let repeatable = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false;
    let data = new QueueMicroTaskData(fn);
    queueMicrotask(data.f);
    if (!repeatable) {
        let res = findTaskByFn(fn);
        if (res) {
            stopClearTask(res.data, res.i);
        }
    }
    tasks.push(data);
    return data;
}
function removeQueueMicroTask(fn) {
    if (fn instanceof QueueMicroTaskData) {
        let index = tasks.indexOf(fn);
        stopClearTask(fn, index);
    } else if (_.isFunction(fn)) {
        let res = findTaskByFn(fn);
        if (res) {
            stopClearTask(res.data, res.i);
        }
    } else {
    // warning not found
    }
}
function findTaskByFn(fn) {
    for(let i = 0; i < tasks.length; i++){
        let data = tasks[i];
        if (data.fn == fn) {
            return {
                data,
                i
            };
        }
    }
    return;
}
function stopClearTask(data, index) {
    if (!data) return;
    data.cancelled = true;
    if (index > -1) {
        tasks.splice(index, 1);
    }
}
function removeTask(data) {
    let index = tasks.indexOf(data);
    stopClearTask(data, index);
}

// EXTERNAL MODULE: ../../libs/fanfanlo/src/log/Log.ts + 1 modules
var Log = __webpack_require__(89597);
// EXTERNAL MODULE: ../../libs/fanfanlo/src/utils/documentUtils.ts
var documentUtils = __webpack_require__(12877);
;// ../../libs/droid/android/src/android/components/Permission.ts




class Permission extends EventDispatcher/* EventDispatcher */.Q {
    init(conf) {
        this.conf = conf;
    }
    runCheck() {
        let res;
        let hasPermission;
        let strData;
        let { print, error, warn, logger } = this.logger.sub(false, "fn-runCheck");
        if (this.conf.scripts.check.isRunner) {
            res = AutoWebViewJs/* autoWebViewJs */.yx.callScriptRunner(this.conf.scripts.check.script);
            strData = res.runnerResult;
        } else {
            res = AutoWebViewJs/* autoWebViewJs */.yx.callScript(this.conf.scripts.check.script);
            if (res.errMsg) {
                error(res.errMsg);
            }
            strData = res.javaResultString;
        }
        if (strData) {
            try {
                hasPermission = JSON.parse(strData);
            } catch (e) {
                error("json parese strData", e);
            }
        }
        return hasPermission;
    }
    check() {
        this.isSuccess = undefined;
        let { print, error, warn, logger } = this.logger.sub(false, "fn_check");
        let hasPermission = this.runCheck();
        if (!lodash_default().isBoolean(hasPermission)) {
            error("hasPermission is not bool", hasPermission);
            hasPermission = false;
        } else {
            this.isSuccess = hasPermission;
        }
        if (hasPermission === true) {
            callLater(this.complete, 1);
        }
        return this.isSuccess;
    }
    ask() {
        let res;
        if (this.conf.scripts.ask.isRunner) {
            res = AutoWebViewJs/* autoWebViewJs */.yx.callScriptRunner(this.conf.scripts.ask.script);
        } else {
            res = AutoWebViewJs/* autoWebViewJs */.yx.callScript(this.conf.scripts.ask.script);
        }
    // 在子类里覆写吧
    //         this.dispatchMayUpdatedEvent(undefined, undefined)
    }
    callAsk() {
        this.listenAskBack();
        this.ask();
    }
    dispatchMayUpdatedEvent() {
        let bl = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : undefined, extra = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : undefined;
        for(let i = 0; i < this.androidPermissionList.length; i++){
            let p = this.androidPermissionList[i];
            let event = new PermissionEvent(p, bl, extra, this);
            Permission.dispacher.dispatchEvent(event);
            this.dispatchEvent(event);
        }
    }
    clear() {
        for(let i = 0; i < this.exitFunList.length; i++){
            this.exitFunList[i]();
        }
        this.exitFunList.length = 0;
    }
    constructor(...args){
        super(...args), this.logger = new Log/* Log */.tG(false, this.constructor.name), this.androidPermissionList = [], this.exitFunList = [], this.isComplete = false, this.isTerminate = false, this.checkOrAsk = ()=>{
            this.isTerminate = false;
            this.isComplete = false;
            let hasPermission = this.check();
            if (!hasPermission) {
                this.runAsk();
                return false;
            }
            return hasPermission;
        }, this.runAsk = ()=>{
            this.conf.askUi.show(this);
        }, this.listenAskBack = ()=>{
            if (!this.conf.listenResume) return;
            document.addEventListener(documentUtils/* documentEventTypeDocumentIsShow */.oj, this.onDocumentShow);
        }, this.onDocumentShow = (e)=>{
            document.removeEventListener(documentUtils/* documentEventTypeDocumentIsShow */.oj, this.onDocumentShow);
            this.askComplete();
        }, this.askComplete = ()=>{
            if (this.isComplete) {
                return;
            }
            this.check();
            this.dispatchMayUpdatedEvent(this.isSuccess, undefined);
            this.complete();
        }, this.complete = ()=>{
            this.isComplete = true;
            this.clear();
            this.dispatchEvent(new DataEvent/* DataEvent */.P(Permission.eventComplete));
        };
    }
}
Permission.dispacher = new EventDispatcher/* EventDispatcher */.Q();
Permission.eventPermissionMayUpdated = "eventPermissionMayUpdated";
Permission.eventComplete = "complete";


/***/ }),

/***/ 56456:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  P: () => (/* binding */ DataEvent)
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/lodash.js
var lodash = __webpack_require__(80507);
var lodash_default = /*#__PURE__*/__webpack_require__.n(lodash);
;// ../../libs/fanfanlo/src/events/Event.ts

class Event {
    get target() {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        return this[this._target];
    }
    toString() {
        const res = {};
        lodash_default().each(Object.keys(this), (key)=>{
            if (key === 'data') {
            // console.log('key is ', key, this[key])
            }
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            res[key] = this[key];
        });
        return res;
    }
    constructor(type, cancelable = false){
        this._target = "Event.target";
        this.type = type;
        this.cancelable = cancelable;
        this.canceled = false;
    }
}

;// ../../libs/fanfanlo/src/events/DataEvent.ts

class DataEvent extends Event {
    constructor(type, data, cancelable = false){
        super(type, cancelable);
        this.data = data;
    // this[this._target] = null;
    }
}


/***/ }),

/***/ 59915:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   m: () => (/* binding */ androidDispatchers)
/* harmony export */ });
const androidDispatchers = {
    WebViewJsDispatcher: {
        name: "WebViewJsDispatcher",
        comment: "全局单例类"
    },
    Window: {
        name: "Window",
        comment: "窗口类单例，可以用来侦听窗口的dismiss事件"
    },
    webViewJs: {
        name: "webViewJs",
        comment: "当前窗口被注入的android webviewjs"
    }
};


/***/ }),

/***/ 63259:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   _: () => (/* binding */ env)
/* harmony export */ });
/* harmony import */ var is_ip__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(12006);

function getHtmlOrigin() {
    if (false) {}
    if (!(0,is_ip__WEBPACK_IMPORTED_MODULE_0__/* .isIP */ .ei)(window.location.hostname) && window.location.hostname !== "homepage.vm-ubuntu.droidlego.com") return window.location.origin + "/";
    // return `${window.location.protocol}://${window.location.hostname}:5173/`
    return "".concat(window.location.protocol, "//htmls.vm-ubuntu.droidlego.com/");
}
class Env {
    constructor(){
        this.htmlOrigin = getHtmlOrigin();
    }
}
const env = new Env();


/***/ })

}]);
//# sourceMappingURL=1562-7b4e496924972a7a.js.map