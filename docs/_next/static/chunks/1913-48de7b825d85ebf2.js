"use strict";
(self["webpackChunk_N_E"] = self["webpackChunk_N_E"] || []).push([[1913],{

/***/ 5994:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   _: () => (/* binding */ objectCountUtils)
/* harmony export */ });

const map = /* @__PURE__ */ new WeakMap();
let count = 1;
const getRanNum = function() {
    var result = [];
    for(var i = 0; i < 1; i++){
        var ranNum = Math.ceil(Math.random() * 25);
        result.push(String.fromCharCode(65 + ranNum));
    }
    return result.join("");
};
const objectCountUtils = {
    getObjectCount (target) {
        if (map.has(target)) {
            return map.get(target);
        }
        const id = "ID[".concat(++count, "]");
        map.set(target, id);
        return id;
    },
    removeObjectCount (target) {
        if (map.has(target)) {
            map.delete(target);
            count--;
        }
    },
    setObjectCount (target, id, key) {
        map.set(target, id);
        return id;
    },
    getNewCountId () {
        return ++count;
    }
}; //# sourceMappingURL=object-count-utils.js.map


/***/ }),

/***/ 54529:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   _l: () => (/* binding */ listenAnyWildcard),
/* harmony export */   v3: () => (/* binding */ createThrottle)
/* harmony export */ });
/* unused harmony export multiUpdatedDispatchWildcard */

const listenAnyWildcard = "*";
const multiUpdatedDispatchWildcard = "**";
function createThrottle(dispatcher) {
    let listenWildcard = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : listenAnyWildcard, dispatchWildcard = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : multiUpdatedDispatchWildcard;
    let isUpdating = false;
    let changeList = [];
    let p = null;
    function handler(prop, now, old) {
        if (isUpdating) {
            console.warn("throttle handler is updating, skip", "prop=".concat(prop, ", now=").concat(now, ", old=").concat(old));
            console.dir(dispatcher, {
                depth: 10
            });
            return;
        }
        changeList.push({
            prop,
            now,
            old
        });
        trottle();
    }
    function trottle() {
        if (p) return;
        p = Promise.resolve().then(()=>{
            dispatch();
        });
    }
    function dispatch() {
        isUpdating = true;
        dispatcher.dispatch(dispatchWildcard, changeList);
        changeList = [];
        isUpdating = false;
        p = null;
    }
    return dispatcher.addListener(listenWildcard, handler);
} //# sourceMappingURL=throttle.js.map


/***/ }),

/***/ 55081:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Ck: () => (/* binding */ TriggerActionContext),
/* harmony export */   MS: () => (/* binding */ TriggerContext),
/* harmony export */   NF: () => (/* binding */ TriggerActionGroupContext),
/* harmony export */   Tj: () => (/* binding */ ActionGroupContext),
/* harmony export */   UA: () => (/* binding */ useProjectUniqueKeyValue),
/* harmony export */   Ue: () => (/* binding */ TriggerListContext),
/* harmony export */   Us: () => (/* binding */ ActionListContext),
/* harmony export */   bf: () => (/* binding */ TriggerGroupContext),
/* harmony export */   oc: () => (/* binding */ GroupCheckList1Context),
/* harmony export */   vz: () => (/* binding */ ProjectContext)
/* harmony export */ });
/* unused harmony exports ActionContext, GroupContext, GroupCheckList2Context */
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(94285);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(14209);
/* harmony import */ var _fanfanlo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(35155);
/* harmony import */ var _fanfanlo__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(88518);
/* harmony import */ var _fanfanlo__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(4738);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(63624);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);




const ProjectContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)({});
const TriggerActionGroupContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)({});
const TriggerActionContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)({});
const TriggerGroupContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)({});
const TriggerListContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)([]);
const TriggerContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)({});
const ActionGroupContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)({});
const ActionListContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)([]);
const ActionContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)({});
const GroupContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)({});
const GroupCheckList2Context = /*#__PURE__*/ (/* unused pure expression or super */ null && (createContext([])));
const GroupCheckList1Context = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)([]);
function useProjectUniqueKeyValue(initProjectInfoFn, key, defValue) {
    const projectInfo = {};
    initProjectInfoFn(projectInfo);
    const store = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_fanfanlo__WEBPACK_IMPORTED_MODULE_2__/* .StorePageContext */ .q);
    const uniqueKey = "".concat(key, ":").concat((0,_utils__WEBPACK_IMPORTED_MODULE_3__/* .projectDataToUniqueId */ .h4)(projectInfo));
    const [value, _setValue] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(store.get(uniqueKey) || defValue);
    function setValue(v) {
        _setValue(v);
        store.set(uniqueKey, v);
    }
    const v = lodash__WEBPACK_IMPORTED_MODULE_1___default().isObject(value) ? (0,_fanfanlo__WEBPACK_IMPORTED_MODULE_4__/* .toProxy */ .I$)(value) : value;
    if (lodash__WEBPACK_IMPORTED_MODULE_1___default().isObject(value)) {
        (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{
            (0,_fanfanlo__WEBPACK_IMPORTED_MODULE_5__/* .watchUpdates */ .c)(value, (info)=>{
                store.set(uniqueKey, v);
            // 这里逻辑上返回的v是重新构建的，所以其它地方引用v的时候需要注意删除侦听，或者这里得寻找统一方法处理
            // setValue((_.isArray(value) ? [...value] : {...value}) as T)
            });
        }, []);
    }
    return [
        v,
        setValue,
        uniqueKey
    ];
}


/***/ }),

/***/ 65541:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ openHtmlShowA11yNodeInfoWindow),
/* harmony export */   d: () => (/* binding */ openHtmlShowA11yNodeInfoButton)
/* harmony export */ });
/* harmony import */ var await_to_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(86353);
/* harmony import */ var _android_components_Manifest__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(73703);
/* harmony import */ var _android_components_permissionGroupCreator__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(40164);
/* harmony import */ var _android_win_WindowConf__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(39800);
/* harmony import */ var _android_WebViewJs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(96113);
/* harmony import */ var _confs_env__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(38952);
/* harmony import */ var _fanfanlo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(48891);







const fileLog = new _fanfanlo__WEBPACK_IMPORTED_MODULE_0__/* .Log */ .tG(false, 'acceccibility-info-buttons');
function createCopy(callbackEventType, windowId) {
    let windowConf = {
        htmlConf: {
            // url:`${env.htmlOrigin}pages/accessibility-info-buttons/#/`,
            url: "".concat(_confs_env__WEBPACK_IMPORTED_MODULE_1__/* .env */ ._.htmlOrigin, "pages/accessibility-info-buttons/index.html"),
            webViewJsParams: {
                javaToJsDataString: JSON.stringify({
                    event: callbackEventType
                })
            }
        },
        windowId
    };
    return (0,_android_win_WindowConf__WEBPACK_IMPORTED_MODULE_2__/* .createWindowConfCopy */ .Sb)(windowConf);
}
function openHtmlShowA11yNodeInfoWindow(callbackEventType, windowId) {
    const fnLog = fileLog.sub(false, 'openHtmlShowA11yNodeInfoWindow_fn');
    fnLog.info('callbackEventType =', callbackEventType, 'windowId =', windowId);
    let conf = createCopy(callbackEventType, windowId);
    fnLog.info("conf =", conf);
    return _android_WebViewJs__WEBPACK_IMPORTED_MODULE_3__/* .WebViewJs */ .L.instance.createWindow(JSON.stringify(conf));
}
async function openHtmlShowA11yNodeInfoButton(callbackEventType, windowId) {
    let [err, group] = await (0,await_to_js__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A)((0,_android_components_permissionGroupCreator__WEBPACK_IMPORTED_MODULE_5__/* .runPermissionGroup */ .uu)(_android_components_Manifest__WEBPACK_IMPORTED_MODULE_6__/* .Manifest */ ._.Permission.SYSTEM_ALERT_WINDOW, _android_components_Manifest__WEBPACK_IMPORTED_MODULE_6__/* .Manifest */ ._.Permission.BIND_ACCESSIBILITY_SERVICE));
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
        _android_WebViewJs__WEBPACK_IMPORTED_MODULE_3__/* .WebViewJs */ .L.instance.toast(err.toString());
        // showSimpleToast(err.toString())
        return;
    }
    return openHtmlShowA11yNodeInfoWindow(callbackEventType, windowId);
}


/***/ }),

/***/ 86125:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Ax: () => (/* binding */ getProxyDispatcher),
  Ye: () => (/* binding */ getProxyObject),
  xA: () => (/* binding */ getProxyWatchRealTarget),
  I$: () => (/* binding */ toProxy)
});

// UNUSED EXPORTS: ProxyArrayStringTag, ProxyObjectStringTag, destroyProxyObject, getUnshellProxyTarget, isProxy, isProxyArray, isProxyObject, proxyArrayUpdateEvent, proxyUpdateAllProperties, proxyUpdateObject, proxyUpdateObjectProperties, proxyWatch

// EXTERNAL MODULE: ../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/lodash.js
var lodash = __webpack_require__(63624);
var lodash_default = /*#__PURE__*/__webpack_require__.n(lodash);
// EXTERNAL MODULE: ../../libs/fanfanlo/dist/src/dispatcher/throttle.js
var throttle = __webpack_require__(54529);
;// ../../libs/fanfanlo/dist/src/dispatcher/IDispatcher.js

const dipspatcherPreventDefault = {};
function clearDispatcherPreventDefault() {
    for(const key in dipspatcherPreventDefault){
        delete dipspatcherPreventDefault[key];
    }
}
const dipspatcherStopPropagation = {};
class DispatchEvent {
    constructor(data, result, extra, type){
        this.stoped = false;
        this.data = data;
        this.result = result;
        this.extra = extra;
        this.type = type;
    }
}
function createDispatchEvent(data, result, extra, type) {
    return new DispatchEvent(data, result, extra, type);
} //# sourceMappingURL=IDispatcher.js.map

;// ../../libs/fanfanlo/dist/src/dispatcher/Dispatcher.js



let count = 0;
class Dispatcher {
    findHandlersByDomain(type, domain) {
        const handlers = this.handlerMap.get(type);
        if (!handlers) return [];
        return handlers.filter((h)=>h.domain === domain);
    }
    getHandler(type, handler) {
        const res = {
            type,
            index: -1
        };
        const handlers = this.handlerMap.get(type);
        if (!handlers) return res;
        res.handlers = handlers;
        res.index = handlers.findIndex((h)=>{
            var _a;
            return h.handler === handler || ((_a = h.weak) == null ? void 0 : _a.deref()) === handler;
        });
        if (res.index > -1) {
            res.handlerData = handlers[res.index];
        }
        return res;
    }
    addHandler(type, handler, once, index, weak, domain) {
        var _a, _b, _c;
        const findResult = this.getHandler(type, handler);
        if (findResult.index > -1) {
            if (findResult.handlerData) {
                findResult.handlerData.once = once;
                findResult.handlerData.domain = domain;
                if (weak && !((_a = findResult.handlerData.weak) == null ? void 0 : _a.deref())) {
                    findResult.handlerData.weak = new WeakRef(handler);
                } else {
                    findResult.handlerData.handler = handler;
                }
                if (index !== void 0) {
                    (_b = findResult.handlers) == null ? void 0 : _b.splice(findResult.index, 1);
                    (_c = findResult.handlers) == null ? void 0 : _c.splice(index, 0, findResult.handlerData);
                }
                return;
            }
        }
        const handlerData = {
            handler,
            once,
            domain,
            type
        };
        if (weak) {
            handlerData.weak = new WeakRef(handler);
        } else {
            handlerData.handler = handler;
        }
        let handlers = this.handlerMap.get(type);
        if (!handlers) {
            handlers = [];
            this.handlerMap.set(type, handlers);
        }
        const i = lodash_default().isNumber(index) ? index : handlers.length;
        handlers.splice(i, 0, handlerData);
    }
    removeHandler(type, handler) {
        var _a;
        const findResult = this.getHandler(type, handler);
        if (findResult.index === -1) return false;
        (_a = findResult.handlers) == null ? void 0 : _a.splice(findResult.index, 1);
        return true;
    }
    removeAllListeners() {
        this.handlerMap.clear();
    }
    addDomainListener(domain, type, handler, index, weak) {
        this.addHandler(type, handler, false, index, !!weak, domain);
        return ()=>{
            this.removeListener(type, handler);
        };
    }
    addDomainOnceListener(domain, type, handler, index, weak) {
        this.addHandler(type, handler, true, index, !!weak, domain);
        return ()=>{
            this.removeListener(type, handler);
        };
    }
    addListener(type, handler, index, weak) {
        if (type === "") {
            try {
                throw new Error("addDomainEventListener error no type");
            } catch (e) {
                console.log("EventDispatcher2", "addDomainEventListener", "err", type, e);
            }
        }
        if (typeof handler != "function") {
            try {
                throw new Error("addDomainEventListener error no cb");
            } catch (e) {
                console.log("EventDispatcher2", "addDomainEventListener", "err", handler, e);
            }
        }
        this.addHandler(type, handler, false, index, !!weak, void 0);
        return ()=>{
            this.removeListener(type, handler);
        };
    }
    on(type, handler, index, weak) {
        return this.addListener(type, handler, index, weak);
    }
    addOnceListener(type, handler, index, weak) {
        this.addHandler(type, handler, true, index, weak, void 0);
        return ()=>{
            this.removeListener(type, handler);
        };
    }
    dispatch(type) {
        for(var _len = arguments.length, rest = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++){
            rest[_key - 1] = arguments[_key];
        }
        var _a;
        const handlers = this.handlerMap.get(type);
        if (!handlers) return false;
        const unloads = [];
        let blockPreventDefault = false;
        for (const handler of handlers){
            const h = handler.handler || ((_a = handler.weak) == null ? void 0 : _a.deref());
            if (h) {
                const res = h.apply(null, rest);
                if (handler.once) {
                    unloads.push(handler);
                }
                if (res === dipspatcherPreventDefault) {
                    blockPreventDefault = true;
                }
                if (res === dipspatcherStopPropagation) {
                    break;
                }
            } else {
                unloads.push(handler);
            }
        }
        for (const handlerData of unloads){
            const index = handlers.indexOf(handlerData);
            if (index > -1) {
                handlers.splice(index, 1);
            }
        }
        return blockPreventDefault ? dipspatcherPreventDefault : true;
    }
    emit(type) {
        for(var _len = arguments.length, rest = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++){
            rest[_key - 1] = arguments[_key];
        }
        return this.dispatch(type, ...rest);
    }
    removeDomain(domain) {
        const handlers = this.findHandlersByDomain(domain);
        if (handlers.length === 0) return false;
        for (const handler of handlers){
            if (handler.handler) {
                this.removeHandler(handler.type, handler.handler);
            }
        }
        return true;
    }
    removeListener(type, handler) {
        return this.removeHandler(type, handler);
    }
    off(type, handler) {
        return this.removeListener(type, handler);
    }
    willTrigger(type) {
        return this.handlerMap.has(type);
    }
    constructor(){
        // private ____dispatcher_index = count++
        this.handlerMap = /* @__PURE__ */ new Map();
    }
} //# sourceMappingURL=Dispatcher.js.map

// EXTERNAL MODULE: ../../libs/fanfanlo/dist/src/utils/debug/object-count-utils.js
var object_count_utils = __webpack_require__(5994);
// EXTERNAL MODULE: ../../libs/fanfanlo/dist/src/watcher/proxyUtils.js
var proxyUtils = __webpack_require__(87041);
;// ../../libs/fanfanlo/dist/src/watcher/proxyWatch.js

var __defProp = Object.defineProperty;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value)=>key in obj ? __defProp(obj, key, {
        enumerable: true,
        configurable: true,
        writable: true,
        value
    }) : obj[key] = value;
var __spreadValues = (a, b)=>{
    for(var prop in b || (b = {}))if (__hasOwnProp.call(b, prop)) __defNormalProp(a, prop, b[prop]);
    if (__getOwnPropSymbols) for (var prop of __getOwnPropSymbols(b)){
        if (__propIsEnum.call(b, prop)) __defNormalProp(a, prop, b[prop]);
    }
    return a;
};





const proxyWatchSymbolKey = Symbol("proxyWatch");
const proxyWatchOriginTargetKey = Symbol("proxyWatchOriginTarget");
const proxyArrayUpdateEvent = "proxyArrayUpdate";
const objectMap = /* @__PURE__ */ new WeakMap();
const proxyMap = /* @__PURE__ */ new WeakMap();
const ProxyArrayStringTag = "ProxyArray";
function arrayHandler(target, dispatcher) {
    const t = target;
    function dispatchChange(start, end, oldTarget) {
        const updated = [];
        for(let i = start; i < end; i++){
            const now = t[i];
            const old = oldTarget[i];
            if (now === old) continue;
            updated.push({
                now,
                old,
                index: i
            });
            dispatcher.dispatch(i.toString(), now, old, i, target, oldTarget);
            dispatcher.dispatch(throttle/* listenAnyWildcard */._l, i, now, old, target, oldTarget);
        }
        dispatcher.dispatch(proxyArrayUpdateEvent, updated, target, oldTarget);
    }
    const handler = {
        deleteProperty (target2, prop) {
            if (!(prop in target2)) return false;
            const old = target2[prop];
            const bl = Reflect.deleteProperty(target2, prop);
            if (bl && old !== void 0) {
                dispatcher.dispatch(prop.toString(), void 0, old);
            }
            return bl;
        },
        get (target2, prop, receiver) {
            if (prop === proxyWatchOriginTargetKey) {
                console.log("get proxyWatchOriginTargetKey array called", target2);
                return target2;
            }
            switch(prop){
                case "push":
                case "unshift":
                case "fill":
                case "copyWithin":
                case "pop":
                case "shift":
                case "splice":
                case "sort":
                case "reverse":
                    return function() {
                        for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++){
                            args[_key] = arguments[_key];
                        }
                        const as = unshellProxies(args);
                        const oldTarget = [
                            ...target2
                        ];
                        const res = target2[prop](...as);
                        const len = Math.max(oldTarget.length, t.length);
                        dispatchChange(0, len, oldTarget);
                        if (oldTarget.length != target2.length) {
                            dispatcher.dispatch("length", target2.length, oldTarget.length);
                        }
                        return res;
                    };
                default:
                    let v = Reflect.get(target2, prop, receiver);
                    if (typeof v === "function") {
                        return v;
                    }
                    if (lodash_default().isObject(v) && !proxyUtils/* proxyUtils */.o.isPauseProxy) return getProxyObject(v).proxy;
                    return v;
            }
        },
        // ownKeys(target){
        //     return [...Reflect.ownKeys(target), proxyWatchSymbolKey]
        // },
        set (target2, prop, v, receiver) {
            const as = unshellProxies([
                v
            ]);
            const value = as[0];
            let oldLength = 0;
            let oldTarget = [];
            if (prop === "length") {
                oldLength = t.length;
                oldTarget = [
                    ...target2
                ];
            }
            const old = Reflect.get(target2, prop, receiver);
            const bl = Reflect.set(target2, prop, value, receiver);
            if (!bl) {
                return bl;
            }
            dispatcher.dispatch(prop, value, old);
            dispatcher.dispatch(throttle/* listenAnyWildcard */._l, prop, value, old, target2, target2);
            if (prop === "length" && oldLength !== t.length) {
                const nowLength = t.length;
                dispatchChange(Math.min(oldLength, nowLength), Math.max(oldLength, nowLength), oldTarget);
            }
            return bl;
        }
    };
    return handler;
}
const ProxyObjectStringTag = "ProxyObject";
function isProxyObject(target) {
    var _a;
    return proxyMap.has(target) && !_.isObject((_a = proxyMap.get(target)) == null ? void 0 : _a.target);
}
function isProxyArray(target) {
    var _a;
    return proxyMap.has(target) && _.isArray((_a = proxyMap.get(target)) == null ? void 0 : _a.target);
}
function isProxy(target) {
    return proxyMap.get(target);
}
function objectHandler(target, dispatcher, eventMap) {
    function checkDispatchEventMap(prop, now, old) {
        if (eventMap && eventMap[prop]) {
            dispatcher.dispatch(eventMap[prop], now, old, target);
        } else {
            dispatcher.dispatch(prop, now, old, target);
        }
        dispatcher.dispatch(throttle/* listenAnyWildcard */._l, prop, now, old, target);
    }
    const handler = {
        deleteProperty (target2, prop) {
            if (!(prop in target2)) return false;
            const old = target2[prop];
            const bl = Reflect.deleteProperty(target2, prop);
            if (bl && old !== void 0) checkDispatchEventMap(prop, void 0, old);
            return bl;
        },
        get (target2, prop, receiver) {
            if (prop === proxyWatchOriginTargetKey) {
                console.log("get proxyWatchOriginTargetKey object called", target2);
                return target2;
            }
            let v = Reflect.get(target2, prop, receiver);
            if (typeof v === "function") {
                return v;
            }
            if (lodash_default().isObject(v) && !proxyUtils/* proxyUtils */.o.isPauseProxy) return getProxyObject(v).proxy;
            return v;
        },
        set (target2, prop, v, receiver) {
            const as = unshellProxies([
                v
            ]);
            const value = as[0];
            const old = Reflect.get(target2, prop, receiver);
            const bl = Reflect.set(target2, prop, value, receiver);
            if (!bl) return bl;
            checkDispatchEventMap(prop, value, old);
            return bl;
        }
    };
    return handler;
}
function getProxyObject(t, dispatcher, eventMap) {
    if (!t) {
        console.trace("getProxyObject no target", t);
        throw new Error("getProxyObject no target");
    }
    if (!lodash_default().isObject(t)) {
        console.trace("getProxyObject target is not object", t);
        throw new Error("getProxyObject target is not object");
    }
    if (lodash_default().isFunction(t)) {}
    const target = getProxyWatchRealTarget(t);
    if (proxyMap.has(target)) {
        console.log("poroxy map has target", proxyMap.get(target));
        throw new Error("poroxy map has target");
    }
    const ts = "toString" in target ? target.toString() : "";
    if (ts.indexOf("i proxy watch") > -1) {
        console.log("eerror proxy watch ts, target", typeof target, ts, target);
        console.log("eerror proxy watch proxymap", object_count_utils/* objectCountUtils */._.getObjectCount(target), proxyMap.get(target));
        console.log("eerror proxy watch objectmap", objectMap.get(target));
        console.log("try to get symbol target", target[proxyWatchSymbolKey]);
        console.log("try to get symbol target2", t[proxyWatchSymbolKey]);
        console.trace("eerror proxy watch target");
        throw new Error("eerror proxy watch");
    }
    let proxyObject = objectMap.get(target) || proxyMap.get(target);
    if (proxyObject) return proxyObject;
    dispatcher = dispatcher || new Dispatcher();
    const handler = lodash_default().isArray(target) ? arrayHandler(target, dispatcher) : objectHandler(target, dispatcher, eventMap);
    const throttleUnsubscribe = (0,throttle/* createThrottle */.v3)(dispatcher);
    const proxy = new Proxy(target, handler);
    const targetId = object_count_utils/* objectCountUtils */._.getObjectCount(target);
    const proxyId = object_count_utils/* objectCountUtils */._.setObjectCount(proxy, "proxy-".concat(targetId), "proxy-id");
    proxyObject = {
        target,
        proxy,
        dispatcher,
        throttleUnsubscribe,
        targetId,
        proxyId
    };
    objectMap.set(target, proxyObject);
    proxyMap.set(proxy, proxyObject);
    return proxyObject;
}
function getProxyWatchRealTarget(target) {
    var _a, _b;
    proxyUtils/* proxyUtils */.o.pauseProxy();
    let t = ((_a = isProxy(target)) == null ? void 0 : _a.target) || target;
    let c = 0;
    while(t && isProxy(t)){
        c++;
        if (c > 5) break;
        if (c > 2) {}
        t = (_b = isProxy(t)) == null ? void 0 : _b.target;
    }
    proxyUtils/* proxyUtils */.o.resumeProxy();
    return t;
}
function destroyProxyObject(target) {
    let destroyChildren = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false;
    const proxyObject = objectMap.get(target);
    if (!proxyObject) return;
    objectMap.delete(target);
    proxyObject.dispatcher.removeAllListeners();
    if (!destroyChildren) return;
    for(const key in proxyObject.target){
        destroyProxyObject(proxyObject.target[key], destroyChildren);
    }
}
function proxyWatch(target, propertyChain, onUpdate, onUndefined) {
    if (!target) {
        throw new Error("watch no target");
    }
    if (!propertyChain) {
        throw new Error("watch no propertyChain");
    }
    function _onUpdate(now, old) {
        const proxiedNow = _.get(target, propertyChain);
        onUpdate(proxiedNow, old);
    }
    const propertyWatchResult = watchProperty(target, propertyChain, _onUpdate, onUndefined);
    return propertyWatchResult;
}
function watchProperty(target, propertyChain, onUpdate, onUndefined) {
    const logger = new Log(false, "watchProperty_fn");
    logger.pause = true;
    const { prop, nextChain } = getChainProperty(propertyChain);
    logger.log("propertyChain=", propertyChain, "prop=", prop, "nextChain=", nextChain);
    const proxyObject = getProxyObject(target);
    let subWatch = null;
    let unsubscribe = null;
    const v = target[prop];
    logger.log("nextChain=", nextChain, "v=", v);
    if (v) {
        if (nextChain) {
            subWatch = proxyWatch(v, nextChain, onUpdate, onUndefined);
        }
    }
    if (!v && nextChain) {
        const noPropertyKey = !(prop in target);
        const noChildNode = !!nextChain && !v;
        if (noPropertyKey || noChildNode) {
            const noValue = noChildNode || v === void 0;
            const info = {
                prop,
                propertyChain,
                nextChain,
                noChildNode,
                noPropertyKey,
                noValue
            };
            logger.log("onUndefined=", info);
            onUndefined == null ? void 0 : onUndefined(info);
        }
    }
    if (!nextChain) {
        logger.log("no nextChain onUpdate=", onUpdate, "v=", v);
        onUpdate(v);
    }
    const onUpdateHandler = nextChain ? (now, old)=>{
        logger.log("onUpdateHandler_fn=", onUpdate, "v=", v);
        subWatch == null ? void 0 : subWatch.unwatch();
        subWatch = null;
        if (now) {
            if (_.isArray(now)) {} else if (_.isObject(now)) {
                subWatch = proxyWatch(now, nextChain, onUpdate, onUndefined);
            } else {}
        }
    } : onUpdate;
    listenProp(prop);
    function listenProp(prop2) {
        unsubscribe == null ? void 0 : unsubscribe();
        unsubscribe = null;
        if (!prop2) return;
        unsubscribe = proxyObject.dispatcher.addListener(prop2, onUpdateHandler);
    }
    function unwatch() {
        unsubscribe == null ? void 0 : unsubscribe();
        unsubscribe = null;
        subWatch == null ? void 0 : subWatch.unwatch();
        subWatch = null;
    }
    return __spreadValues({
        unwatch
    }, proxyObject);
}
function unshellProxies(list) {
    const res = list.map((p)=>{
        const t = getProxyWatchRealTarget(p);
        if (!lodash_default().isObject(t)) return t;
        for(const key in t){
            const v = t[key];
            if (lodash_default().isObject(v)) {
                if (isProxy(v)) {
                    t[key] = getProxyWatchRealTarget(v);
                }
            }
        }
        return t;
    });
    return res;
}
function getChainProperty(chain) {
    if (typeof chain === "string") {
        let index = chain.indexOf(".");
        const prop2 = index > -1 ? chain.slice(0, index) : chain;
        return {
            prop: prop2,
            nextChain: chain.replace("".concat(prop2).concat(index > -1 ? "." : ""), "")
        };
    }
    const newChain = chain.slice();
    const prop = newChain.shift();
    if (!prop) {
        throw new Error("getChainProperty no prop");
    }
    return {
        prop,
        nextChain: newChain.length > 0 ? newChain : void 0
    };
}
function proxyUpdateObject(target, key, oldValue) {
    const proxyObject = getProxyObject(target);
    if (!proxyObject) return false;
    const now = proxyObject.target[key];
    proxyObject.dispatcher.dispatch(key, now, oldValue);
    return true;
}
function proxyUpdateObjectProperties(target, fresh, prev) {
    const proxyObject = getProxyObject(target);
    if (!proxyObject) return false;
    for(const key in fresh){
        const now = proxyObject.target[key];
        const old = prev == null ? void 0 : prev[key];
        proxyObject.dispatcher.dispatch(key, now, old);
    }
    return true;
}
function proxyUpdateAllProperties(target) {
    const proxyObject = getProxyObject(target);
    if (!proxyObject) return;
    for(const key in proxyObject.target){
        proxyUpdateObject(proxyObject.target, key);
    }
}
function toProxy(target) {
    return getProxyObject(target).proxy;
}
function getProxyDispatcher(target) {
    return getProxyObject(target).dispatcher;
}
function getUnshellProxyTarget(target) {
    var _a;
    const proxy = (_a = proxyMap.get(target)) == null ? void 0 : _a.proxy;
    let t = target;
    if (proxy) {
        t = proxy[proxyWatchOriginTargetKey];
    }
    return t;
} //# sourceMappingURL=proxyWatch.js.map


/***/ }),

/***/ 87041:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   o: () => (/* binding */ proxyUtils)
/* harmony export */ });

const proxyUtils = {
    isPauseProxy: false,
    pauseProxy () {
        this.isPauseProxy = true;
    },
    resumeProxy () {
        this.isPauseProxy = false;
    },
    runPauseProxyFn (fn) {
        this.pauseProxy();
        const result = fn();
        this.resumeProxy();
        return result;
    }
}; //# sourceMappingURL=proxyUtils.js.map


/***/ })

}]);
//# sourceMappingURL=1913-48de7b825d85ebf2.js.map