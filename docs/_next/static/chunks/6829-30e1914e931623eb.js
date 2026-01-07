(self["webpackChunk_N_E"] = self["webpackChunk_N_E"] || []).push([[6829],{

/***/ 3200:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   storeUtils: () => (/* reexport safe */ _storage_index__WEBPACK_IMPORTED_MODULE_5__.storeUtils)
/* harmony export */ });
/* harmony import */ var _events__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(24014);
/* harmony reexport (checked) */ if(__webpack_require__.o(_events__WEBPACK_IMPORTED_MODULE_0__, "storeUtils")) __webpack_require__.d(__webpack_exports__, { storeUtils: function() { return _events__WEBPACK_IMPORTED_MODULE_0__.storeUtils; } });
/* harmony import */ var _react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(29644);
/* harmony reexport (checked) */ if(__webpack_require__.o(_react__WEBPACK_IMPORTED_MODULE_1__, "storeUtils")) __webpack_require__.d(__webpack_exports__, { storeUtils: function() { return _react__WEBPACK_IMPORTED_MODULE_1__.storeUtils; } });
/* harmony import */ var _ts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(95034);
/* harmony import */ var _ts__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_ts__WEBPACK_IMPORTED_MODULE_2__);
/* harmony reexport (checked) */ if(__webpack_require__.o(_ts__WEBPACK_IMPORTED_MODULE_2__, "storeUtils")) __webpack_require__.d(__webpack_exports__, { storeUtils: function() { return _ts__WEBPACK_IMPORTED_MODULE_2__.storeUtils; } });
/* harmony import */ var _ts_global_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(43911);
/* harmony import */ var _ts_global_index__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_ts_global_index__WEBPACK_IMPORTED_MODULE_3__);
/* harmony reexport (checked) */ if(__webpack_require__.o(_ts_global_index__WEBPACK_IMPORTED_MODULE_3__, "storeUtils")) __webpack_require__.d(__webpack_exports__, { storeUtils: function() { return _ts_global_index__WEBPACK_IMPORTED_MODULE_3__.storeUtils; } });
/* harmony import */ var _i18n_index__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(13583);
/* harmony reexport (checked) */ if(__webpack_require__.o(_i18n_index__WEBPACK_IMPORTED_MODULE_4__, "storeUtils")) __webpack_require__.d(__webpack_exports__, { storeUtils: function() { return _i18n_index__WEBPACK_IMPORTED_MODULE_4__.storeUtils; } });
/* harmony import */ var _storage_index__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(12779);





















 //# sourceMappingURL=index.js.map


/***/ }),

/***/ 12779:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  storeUtils: () => (/* reexport */ storeUtils)
});

// UNUSED EXPORTS: StorePageContext, StorePageDynamicContext, indexedDbUtils, storage

// EXTERNAL MODULE: ../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/lodash.js
var lodash = __webpack_require__(80507);
var lodash_default = /*#__PURE__*/__webpack_require__.n(lodash);
// EXTERNAL MODULE: ../../node_modules/.pnpm/store2@2.14.4/node_modules/store2/dist/store2.js
var store2 = __webpack_require__(70942);
var store2_default = /*#__PURE__*/__webpack_require__.n(store2);
// EXTERNAL MODULE: ../../libs/fanfanlo/dist/src/watcher/proxyWatch.js + 2 modules
var proxyWatch = __webpack_require__(76025);
// EXTERNAL MODULE: ../../libs/fanfanlo/dist/src/dispatcher/throttle.js
var throttle = __webpack_require__(52026);
;// ../../libs/fanfanlo/dist/src/watcher/watchUpdates.js




function watchUpdates(target, onUpdate, conf, watchChain) {
    var _a;
    watchChain = watchChain || [];
    const unsubMap = /* @__PURE__ */ new Map();
    const { dispatcher } = (0,proxyWatch/* getProxyObject */.Ye)(target);
    const unsub = dispatcher.addListener(throttle/* listenAnyWildcard */._l, createOnUpdateFn(target, onUpdate, unsubMap, [
        ...watchChain
    ], conf));
    unsubMap.set(target, unsub);
    for(const key in target){
        const value = target[key];
        if (!lodash_default().isObject(value) || !checkIsInWatch(key, target, conf)) continue;
        const subConf = lodash_default().isArray(target) ? conf : (_a = conf == null ? void 0 : conf.properties) == null ? void 0 : _a[key];
        listenSubKey(target, key, unsubMap, onUpdate, [
            ...watchChain,
            key
        ], subConf);
    }
    return ()=>{
        unsubMap.forEach((unsub2, target2)=>unsub2());
    };
}
function createOnUpdateFn(target, onUpdate, unsubMap, watchChain, conf) {
    return (prop, now, old)=>{
        var _a, _b;
        if (!checkIsInWatch(prop, target, conf)) return;
        if (lodash_default().isObject(old)) {
            (_a = unsubMap.get(old)) == null ? void 0 : _a();
            unsubMap.delete(old);
        }
        onUpdate({
            target,
            key: prop,
            oldValue: old,
            newValue: now,
            watchChain: [
                ...watchChain,
                prop
            ]
        });
        const subConf = lodash_default().isArray(target) ? conf : (_b = conf == null ? void 0 : conf.properties) == null ? void 0 : _b[prop];
        listenSubKey(target, prop, unsubMap, onUpdate, [
            prop,
            ...watchChain
        ], subConf);
    };
}
function checkIsInWatch(prop, target, conf) {
    return !conf || conf.keys === throttle/* listenAnyWildcard */._l || lodash_default().isArray(conf.keys) && conf.keys.includes(prop) || conf.properties && prop in conf.properties || lodash_default().isArray(target);
}
function listenSubKey(target, key, unsubMap, onUpdate, watchChain, property) {
    const u = target[key];
    if (!u) return;
    if (!lodash_default().isObject(u)) return;
    const unsub = watchUpdates(u, onUpdate, property, [
        ...watchChain
    ]);
    unsubMap.set(u, unsub);
} //# sourceMappingURL=watchUpdates.js.map

// EXTERNAL MODULE: ../../node_modules/.pnpm/idb-keyval@6.2.2/node_modules/idb-keyval/dist/index.js
var dist = __webpack_require__(47067);
;// ../../libs/fanfanlo/dist/src/utils/lodash.js


const isDOM = typeof HTMLElement === "object" ? function(dom) {
    return dom instanceof HTMLElement;
} : function(dom) {
    return dom && typeof dom === "object" && dom.nodeType === 1 && typeof dom.nodeName === "string";
};
function isSimpleValue(v) {
    switch(v){
        case void 0:
        case null:
        case lodash_default().isDate(v):
        case lodash_default().isBoolean(v):
        case lodash_default().isInteger(v):
        case lodash_default().isNaN(v):
        case lodash_default().isNull(v):
        case lodash_default().isNumber(v):
        case lodash_default().isSymbol(v):
        case lodash_default().isString(v):
            return true;
        default:
            return false;
    }
}
function isConsulePrintable(v) {
    const isSimple = isSimpleValue(v);
    if (isSimple) return true;
    if (isDOM(v)) return true;
    return false;
} //# sourceMappingURL=lodash.js.map

// EXTERNAL MODULE: ../../node_modules/.pnpm/date-fns@4.1.0/node_modules/date-fns/format.js + 35 modules
var format = __webpack_require__(65014);
;// ../../libs/fanfanlo/dist/src/log/Log.js




let logIndex = 0;
let colorsIndex = 0;
const colors = [
    "#f1581f",
    "#003366",
    "#990033",
    "#663366",
    "#CCCC99",
    "#CC9999",
    "#003300",
    "#8cc540",
    "#009f5d",
    "#019fa0",
    "#019fde",
    "#ff1244",
    "#ff8345"
];
const _Log = class _Log {
    set forcePrint(p) {
        this.isForcePrint = !!p;
    }
    get forcePrint() {
        return this.isForcePrint;
    }
    set pause(p) {
        this.isPaused = !!p;
    }
    get pause() {
        return this.isPaused;
    }
    set childrenPaused(p) {
        this.isChildrenPaused = !!p;
    }
    get childrenPaused() {
        return this.isChildrenPaused;
    }
    get canPrint() {
        if (this.isForcePrint) return true;
        if (this.isPaused) return false;
        let p = this.parent;
        while(p){
            if (p.isChildrenPaused) return false;
            p = p.parent;
        }
        return true;
    }
    buildParams() {
        for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++){
            args[_key] = arguments[_key];
        }
        let l = this;
        let retArray = [];
        let arr = [];
        let format2 = "";
        format2 = this.loopParent(l, arr, (l2)=>l2.globalIndex, format2);
        arr.unshift("@");
        if (!_Log.isInApp) {
            format2 += "%c%s ";
            arr.unshift("color:#000000;font-weight: bold;");
        }
        format2 = this.loopParent(l, arr, (l2)=>l2.index, format2);
        if (!_Log.isInApp) {
            format2 += "%c%s ";
            arr.push("color:#000000;font-weight: bold;");
        }
        if (_Log.isInApp) {
            for(let i = 0; i < args.length; i++){
                if (!isConsulePrintable(args[i])) {
                    try {
                        const o = args[i];
                        let v = "";
                        if (lodash_default().isError(o)) {
                            v = o.message + "\n" + o.stack;
                        } else {
                            v = JSON.stringify(args[i]);
                        }
                        args[i] = v;
                    } catch (e) {
                        console.log("log print json stringify error", e);
                        console.log("log print json stringify error stack is", lodash_default().isError(e) ? e.stack : "");
                    }
                }
            }
        }
        arr.push(this.prefix);
        arr = arr.concat(args);
        return {
            format: format2,
            arr,
            retArray
        };
    }
    constructor(paused, ...prefixies){
        var _this = this;
        this.sub = (paused, name)=>{
            let log = _Log.createCountedLogger(paused, "".concat(name), ...this.prefixies);
            log.parent = this;
            return log;
        };
        this.warn = function() {
            for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++){
                args[_key] = arguments[_key];
            }
            const { format: format2, arr } = _this.buildParams(...args);
            console.warn(format2, ...arr);
        };
        this.error = function() {
            for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++){
                args[_key] = arguments[_key];
            }
            const isForcePrint = _this.isForcePrint;
            _this.isForcePrint = true;
            const { format: format2, arr } = _this.buildParams(...args);
            console.error(format2, ...arr);
            console.trace("Log error trace");
            _this.isForcePrint = isForcePrint;
            _Log.addError(arr.join(" "));
        };
        this.info = function() {
            for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++){
                args[_key] = arguments[_key];
            }
            const { format: format2, arr } = _this.buildParams(...args);
            console.info(format2, ...arr);
        };
        this.print = function() {
            for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++){
                args[_key] = arguments[_key];
            }
            if (!_this.canPrint) return;
            const { format: format2, arr } = _this.buildParams(...args);
            console.log(format2, ...arr);
            const retArray = arr.slice();
            return retArray;
        };
        this.log = this.print.bind(this);
        this.loopParent = (l, arr, fn, format2)=>{
            while(l){
                arr.unshift(fn(l));
                if (!_Log.isInApp) {
                    format2 += "%c%s ";
                    arr.unshift("color:".concat(l.color, ";font-weight: bold;"));
                }
                l = l.parent;
            }
            return format2;
        };
        this.prefixies = prefixies;
        this.prefix = prefixies.join(" ");
        this.isPaused = !!paused;
        this.globalIndex = logIndex++;
        this.index = 0;
        this.parent = void 0;
        this.isChildrenPaused = false;
        this.isForcePrint = false;
        this.color = colors[colorsIndex++ % colors.length];
        this.logger = this;
    }
};
_Log.isInApp = typeof navigator !== "undefined" && navigator.userAgent.indexOf("droid-lego-android----------") > -1;
_Log.eventWarnAdd = "warnAdd";
_Log.eventErrorAdd = "errorAdd";
// static dispatcher = new EventDispatcher();
_Log.warnList = [];
_Log.errorList = [];
_Log.logStoreMaxLength = 100;
_Log.addWarn = (s)=>{
    _Log.addLog(_Log.warnList, s, _Log.eventWarnAdd);
};
_Log.addError = (s)=>{
    _Log.addLog(_Log.errorList, s, _Log.eventErrorAdd);
};
_Log.addLog = (list, s, event)=>{
    if (list.length > _Log.logStoreMaxLength) {
        list.shift();
    }
    s = (0,format/* format */.GP)(/* @__PURE__ */ new Date(), "dd hh:mm:ss");
    list.push(s);
};
_Log.forbidden = [];
_Log.allowed = [];
_Log.countMap = /* @__PURE__ */ new Map();
_Log.createCountedLogger = function(paused, name) {
    for(var _len = arguments.length, prefixies = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++){
        prefixies[_key - 2] = arguments[_key];
    }
    var _a;
    let v = (_a = _Log.countMap.get(name)) != null ? _a : 0;
    v++;
    _Log.countMap.set(name, v);
    let prefix = "".concat(name, " ").concat(v);
    let arr = prefixies.concat(prefix);
    let log = new _Log(paused, ...arr);
    log.index = v;
    return log;
};
let Log = _Log;
function checkCanPrintLog(conf, from, target) {
    for(var _len = arguments.length, args = new Array(_len > 3 ? _len - 3 : 0), _key = 3; _key < _len; _key++){
        args[_key - 3] = arguments[_key];
    }
    if (!conf) return true;
    if (!conf.extraMatch) {
        if (conf.alias) return from == conf.alias;
        return true;
    }
    if (conf.extraMatch.prefix && from.indexOf(conf.extraMatch.prefix) == -1) return false;
    if (conf.extraMatch.fn && !conf.extraMatch.fn(from, target, ...args)) return false;
    if (conf.extraMatch.fn) return conf.extraMatch.fn(from, target, ...args);
    if (conf.extraMatch.prefix) return from == conf.extraMatch.prefix;
    return false;
}
const logMap = /* @__PURE__ */ new WeakMap();
function logAddPrintTarget(target) {
    let conf = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    logMap.set(target, conf);
}
function logRemovePrintTarget(target) {
    logMap.delete(target);
}
function logGetPrintTargetConf(target) {
    return logMap.get(target);
}
function checkTargetCanPrintLog(target, from) {
    for(var _len = arguments.length, args = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++){
        args[_key - 2] = arguments[_key];
    }
    const conf = logMap.get(target);
    if (!conf) {
        return {
            conf,
            ok: false
        };
    }
    const ok = checkCanPrintLog(conf, from, target, ...args);
    return {
        conf,
        ok
    };
}
function printPassedTargetLog(log, target, from) {
    for(var _len = arguments.length, args = new Array(_len > 3 ? _len - 3 : 0), _key = 3; _key < _len; _key++){
        args[_key - 3] = arguments[_key];
    }
    var _a;
    const conf = logMap.get(target);
    if (!conf) return;
    if (!checkCanPrintLog(conf, from, target, ...args)) return;
    const list = [];
    if (conf.printName) list.push(conf.printName);
    else {
        list.push(from);
        if (conf.alias) list.push("alias=", conf.alias);
        if ((_a = conf.extraMatch) == null ? void 0 : _a.prefix) list.push("prefix=", conf.extraMatch.prefix);
    }
    list.push(...args);
    log.print(...list);
} //# sourceMappingURL=Log.js.map

// EXTERNAL MODULE: ../../libs/fanfanlo/dist/src/watcher/proxyUtils.js
var watcher_proxyUtils = __webpack_require__(92228);
// EXTERNAL MODULE: ../../libs/fanfanlo/dist/src/utils/debug/object-count-utils.js
var object_count_utils = __webpack_require__(73175);
;// ../../libs/fanfanlo/dist/src/watcher/parentProxy.js






const objectMap = /* @__PURE__ */ new WeakMap();
function getParentProxyObject(parent, options) {
    watcher_proxyUtils/* proxyUtils */.o.pauseProxy();
    const target = (0,proxyWatch/* getProxyWatchRealTarget */.xA)(parent);
    let proxyObject = objectMap.get(target);
    if (!proxyObject) {
        const watchProxy = (0,proxyWatch/* getProxyObject */.Ye)(parent);
        proxyObject = {
            target,
            watchProxy
        };
        const unsub = watchProxy.dispatcher.addListener(throttle/* listenAnyWildcard */._l, (prop, value, old, target2)=>{
            var _a;
            if (lodash_default().isObject(old)) {
                const oldProxyObject = objectMap.get(old);
                if (oldProxyObject) {
                    oldProxyObject.parent = void 0;
                    (_a = oldProxyObject.unwatch) == null ? void 0 : _a.call(oldProxyObject);
                    oldProxyObject.unwatch = void 0;
                }
            }
            if (lodash_default().isObject(value)) {
                const newProxyObject = getParentProxyObject(value, options);
                newProxyObject.parent = target2;
            }
        });
        proxyObject.unwatch = unsub;
        if (object_count_utils/* objectCountUtils */._.getObjectCount(target) == object_count_utils/* objectCountUtils */._.getObjectCount(proxyObject.watchProxy.proxy)) {
            throw new Error("proxy object count is same");
        }
        objectMap.set(target, proxyObject);
    }
    loopChildren(target, options);
    watcher_proxyUtils/* proxyUtils */.o.resumeProxy();
    return proxyObject;
}
function loopChildren(parent, options) {
    for(const key in parent){
        const child = parent[key];
        if (!lodash_default().isObject(child)) continue;
        const info = getParentProxyObject(child, options);
        info.parent = parent;
    }
}
function destroyParentProxy(parent) {
    if (!_.isObject(parent)) throw new Error("target must be an object");
    const info = getParentProxyObject(parent);
    info.parent = void 0;
    objectMap.delete(parent);
    for(const key in parent){
        const child = parent[key];
        if (!_.isObject(child)) continue;
        destroyParentProxy(child);
    }
}
function isParent(parent) {
    return objectMap.get(parent);
}
function parentProxy_toParent(target) {
    return getParentProxyObject(target).watchProxy.proxy;
}
function getParentProxyInfo(target) {
    return getParentProxyObject(target);
}
function getParentProxyTarget(target) {
    return getParentProxyObject(target).target;
}
function getParent(target) {
    return getParentProxyObject(target).parent;
}
function getParentWatchProxy(target) {
    const parent = getParentProxyObject(target).parent;
    if (!parent) throw new Error("parent is undefined");
    return toProxy(parent);
} //# sourceMappingURL=parentProxy.js.map

;// ../../libs/fanfanlo/dist/src/watcher/parentWatchProxy.js




function toParentWatchProxy(target) {
    return toParent(toProxy(target));
}
function getProxyTarget(target) {
    let parentObject = isParent(target) ? getParentProxyTarget(target) : target;
    const proxyObject = (0,proxyWatch/* getProxyObject */.Ye)(parentObject).target;
    parentObject = isParent(proxyObject) ? getParentProxyTarget(proxyObject) : proxyObject;
    return parentObject;
}
function getTarget(target) {
    var _a;
    proxyUtils.pauseProxy();
    let t = target;
    let c = 0;
    while(t && isProxy(t)){
        c++;
        if (c > 5) break;
        if (isProxy(t)) t = (_a = isProxy(t)) == null ? void 0 : _a.target;
    }
    proxyUtils.resumeProxy();
    return t;
} //# sourceMappingURL=parentWatchProxy.js.map

;// ../../libs/fanfanlo/dist/src/storage/indexed-db-utils.js

var __async = (__this, __arguments, generator)=>{
    return new Promise((resolve, reject)=>{
        var fulfilled = (value)=>{
            try {
                step(generator.next(value));
            } catch (e) {
                reject(e);
            }
        };
        var rejected = (value)=>{
            try {
                step(generator.throw(value));
            } catch (e) {
                reject(e);
            }
        };
        var step = (x)=>x.done ? resolve(x.value) : Promise.resolve(x.value).then(fulfilled, rejected);
        step((generator = generator.apply(__this, __arguments)).next());
    });
};




const libs = {};
function getNamespaceStoreWithData(ns, opts) {
    return __async(this, null, function*() {
        const log = new Log(false, "indexedDb utils getNamespaceStoreWithData_".concat(ns));
        log.pause = true;
        let ss = libs[ns];
        log.log("init indexed db", ns);
        if (ss) {
            return ss;
        }
        const s = (0,dist/* createStore */.y$)(ns, ns);
        if ((opts == null ? void 0 : opts.forceReset) === true && opts.defData) {
            console.log("clean s", ns);
            yield (0,dist/* clear */.IU)(s);
            const keys = Object.keys(opts.defData);
            for (const key of keys){
                console.log("clear insert", key, opts.defData[key]);
                yield (0,dist/* set */.hZ)(key, opts.defData[key], s);
            }
            console.log("clean complete", ns);
        }
        const raw = yield (0,dist/* entries */.jO)(s);
        let o;
        if (raw && raw.length > 0) {
            o = Object.fromEntries(raw);
        }
        if (!o) {
            if ((opts == null ? void 0 : opts.defData) && opts.mergeDefData) {
                o = opts.defData;
            } else {
                o = {};
            }
        }
        yield mergeDefault();
        function mergeDefault() {
            return __async(this, null, function*() {
                log.log("mergeDefaultdata check opts", ns);
                if (!opts) return;
                log.log("mergeDefaultdata check mergeDefdata must is true", opts.mergeDefData);
                if (opts.mergeDefData !== true) return;
                log.log("start mergeDefaultdata", ns);
                if (!raw || raw.length == 0) return;
                log.log("mergeDefaultdata check defdata");
                if (!opts.defData) return;
                log.log("mergeDefaultdata check mergedefdata");
                if (opts.forceReset) return;
                log.log("mergeDefaultdata check o");
                if (!o) return;
                const defData = opts.defData;
                log.log("real start mergeDefData", defData);
                let keys = Object.keys(defData);
                for(let i = 0; i < keys.length; i++){
                    let key = keys[i];
                    if (key in o) continue;
                    log.log("add key", key, defData[key]);
                    yield (0,dist/* set */.hZ)(key, defData[key], s);
                    o[key] = defData[key];
                }
                keys = Object.keys(o);
                for(let i = 0; i < keys.length; i++){
                    let key = keys[i];
                    if (key in defData) continue;
                    log.log("del key", key);
                    yield (0,dist/* del */.yH)(key, s);
                    delete o[key];
                }
                log.log("after merge o=", o);
            });
        }
        const data = (0,proxyWatch/* toProxy */.I$)(o);
        watchUpdates(data, (info)=>__async(this, null, function*() {
                log.log(" watchUpdates_fn ns=".concat(ns, " data="), data);
                log.log(" watchUpdates_fn info=", info);
                if (info.watchChain.length == 0) {
                    console.error(" watchUpdates_fn no key found", info);
                    console.error(" watchUpdates_fn no key found info=", info);
                    console.error(" watchUpdates_fn data =", data);
                    return;
                }
                const key = info.watchChain[0];
                if (!(key in data)) {
                    console.error(" watchUpdates_fn key not found in data", "key=".concat(key), "ns=".concat(ns));
                    console.error(" watchUpdates_fn data =", data);
                    return;
                }
                log.log("watchUpdates_fn write", "key=".concat(key), "v=", data[key]);
                log.log("json value=", JSON.stringify(data[key]));
                try {
                    let v = data[key];
                    if (lodash_default().isObject(v)) {
                        v = getProxyTarget(v);
                    }
                    yield (0,dist/* set */.hZ)(key, v, s);
                    log.log("getNamespaceStoreWithData_fn watchUpdates", info);
                } catch (e) {
                    console.trace("path");
                    console.error("getNamespaceStoreWithData_fn watchUpdates set error", e);
                }
            }));
        function clean() {
            return __async(this, null, function*() {
                const keys = Object.keys(data);
                for (const key of keys){
                    delete data[key];
                }
                yield (0,dist/* clear */.IU)(s);
            });
        }
        const res = {
            data,
            store: {
                getData: ()=>data,
                read (key, defaultValue) {
                    var _a;
                    return (_a = data[key]) != null ? _a : defaultValue;
                },
                write (key, value, override) {
                    data[key] = value;
                    (0,dist/* set */.hZ)(key, value, s);
                },
                clearAll () {
                    clean();
                },
                setAll (d) {
                    clean();
                    Object.assign(data, d);
                    const keys = Object.keys(d);
                    for (const key of keys){
                        (0,dist/* set */.hZ)(key, d[key], s);
                    }
                },
                remove (key) {
                    delete data[key];
                    (0,dist/* del */.yH)(key, s);
                }
            }
        };
        libs[ns] = res;
        return res;
    });
}
function init() {
    return __async(this, null, function*() {});
}
const indexedDbUtils = {
    init,
    getIndexedDbStore: getNamespaceStoreWithData
}; //# sourceMappingURL=indexed-db-utils.js.map

;// ../../libs/fanfanlo/dist/src/storage/store-utils.js

var store_utils_async = (__this, __arguments, generator)=>{
    return new Promise((resolve, reject)=>{
        var fulfilled = (value)=>{
            try {
                step(generator.next(value));
            } catch (e) {
                reject(e);
            }
        };
        var rejected = (value)=>{
            try {
                step(generator.throw(value));
            } catch (e) {
                reject(e);
            }
        };
        var step = (x)=>x.done ? resolve(x.value) : Promise.resolve(x.value).then(fulfilled, rejected);
        step((generator = generator.apply(__this, __arguments)).next());
    });
};





const localStoreMap = {};
function createLocalStore(ns, opts) {
    let unsub;
    let ss = localStoreMap[ns];
    if (ss) {
        return ss;
    }
    const s = store2_default().namespace(ns);
    if ((opts == null ? void 0 : opts.forceReset) && (opts == null ? void 0 : opts.defData)) {
        s.setAll(opts == null ? void 0 : opts.defData);
    }
    if (lodash_default().isObject(opts == null ? void 0 : opts.defData) && Object.keys(s.getAll()).length == 0) {
        s.setAll(opts == null ? void 0 : opts.defData);
    }
    let data = createData();
    function createData() {
        unsub == null ? void 0 : unsub();
        unsub = void 0;
        try {
            const d = s.getAll();
            const data2 = (0,proxyWatch/* toProxy */.I$)(d && Object.keys(d).length > 0 ? d : {});
            watchData(data2);
            return data2;
        } catch (e) {
            console.error(e);
            s.setAll({});
            return (0,proxyWatch/* toProxy */.I$)({});
        }
    }
    let requestAnimationFrameId = -1;
    function watchData(data2) {
        unsub = watchUpdates(data2, ()=>{
            if (requestAnimationFrameId > -1) return;
            requestAnimationFrameId = window.requestAnimationFrame(()=>{
                requestAnimationFrameId = -1;
                try {
                    store2_default().namespace(ns).setAll(data2);
                } catch (e) {
                    alert(e);
                    console.error(e);
                }
            });
        });
    }
    const res = {
        data,
        store: {
            getData: ()=>data,
            read (key, defaultValue) {
                return s.get(key, defaultValue);
            },
            write (key, value, override) {
                data[key] = value;
            },
            clearAll () {
                store2_default().namespace(ns).clearAll();
                const keys = Object.keys(data);
                for (const key of keys){
                    delete data[key];
                }
            },
            setAll (d) {
                store2_default().namespace(ns).setAll(d);
                res.store.clearAll();
                const keys = Object.keys(d);
                for (const key of keys){
                    data[key] = d[key];
                }
            },
            remove (key) {
                store2_default().namespace(ns).remove(key);
                delete data[key];
            }
        }
    };
    localStoreMap[ns] = res;
    return res;
}
function createJavaStore(ns, opts) {
    const log = new Log(false, "createJavaStore_fn ns= " + ns);
    log.log("nss=", ns, "opts=", opts);
    let unsub;
    let data = createData();
    function createData() {
        unsub == null ? void 0 : unsub();
        unsub = void 0;
        const raw = getStoresNamespace(ns, opts) || {};
        const o = raw || {};
        mergeDefault();
        function mergeDefault() {
            return store_utils_async(this, null, function*() {
                if (!opts) return;
                if (opts.mergeDefData !== true) return;
                if (!raw || lodash_default().isArray(raw) || !lodash_default().isObject(raw)) return;
                if (!opts.defData) return;
                if (opts.forceReset) return;
                if (!o) return;
                const defData = opts.defData;
                let keys = Object.keys(defData);
                let updated = false;
                for(let i = 0; i < keys.length; i++){
                    let key = keys[i];
                    if (key in o) continue;
                    o[key] = defData[key];
                    updated = true;
                }
                keys = Object.keys(o);
                for(let i = 0; i < keys.length; i++){
                    let key = keys[i];
                    if (key in defData) continue;
                    delete o[key];
                    updated = true;
                }
                if (updated) {
                    is == null ? void 0 : is.write(ns, o);
                }
            });
        }
        const data2 = (0,proxyWatch/* toProxy */.I$)(o);
        watchData(data2);
        return data2;
    }
    let isClearAll = false;
    let callingNextFrame = false;
    function callNextFrame() {
        if (callingNextFrame) return;
        callingNextFrame = true;
        window.requestAnimationFrame(()=>{
            callingNextFrame = false;
            log.log("java store callNextFrame", ns, data);
            is == null ? void 0 : is.write(ns, data);
        });
    }
    function watchData(data2) {
        unsub = watchUpdates(data2, ()=>{
            if (isClearAll) return;
            log.log("java watch data", "ns=", ns, "data=", data2);
            callNextFrame();
        });
    }
    const res = {
        data,
        store: {
            getData: ()=>data,
            read (key, defaultValue) {
                var _a;
                log.log("java store read", ns, key, defaultValue);
                return (_a = data[key]) != null ? _a : defaultValue;
            },
            write (key, value, override) {
                log.log("java store write", ns, key, value, override);
                data[key] = value;
            },
            clearAll () {
                is == null ? void 0 : is.write(ns, "");
                const keys = Object.keys(data);
                isClearAll = true;
                for (const key of keys){
                    delete data[key];
                }
                isClearAll = false;
            },
            setAll (d) {
                is == null ? void 0 : is.write(ns, d);
                res.store.clearAll();
                const keys = Object.keys(d);
                isClearAll = true;
                for (const key of keys){
                    data[key] = d[key];
                }
                isClearAll = false;
            },
            remove (key) {
                delete data[key];
            }
        }
    };
    return res;
}
let is = void 0;
function setStoresProxy(s) {
    s.ns = (0,proxyWatch/* toProxy */.I$)(s.ns);
    is = s;
}
function getStoresNamespace(ns, opts) {
    const log = new Log(false, "getStoresNamespace_fn ns= " + ns);
    log.pause = true;
    log.log("is=", is);
    if (!is) return void 0;
    let s = is.ns[ns];
    log.log("s=", s);
    if (!s) {
        s = is.read(ns);
        log.log("s2=", s);
        if (s) {} else {
            s = is.ns[ns] = (opts == null ? void 0 : opts.defData) || {};
        }
    }
    if ((opts == null ? void 0 : opts.forceReset) && opts.defData) {
        let keys = Object.keys(s);
        for (const key of keys){
            delete s[key];
        }
        keys = Object.keys(opts.defData);
        for (const key of keys){
            s[key] = opts.defData[key];
        }
        log.log("getStoresNamespace_fn force reset", ns);
        is.write(ns, opts.defData);
    }
    is.ns[ns] = (0,proxyWatch/* toProxy */.I$)(s);
    return is.ns[ns];
}
function namespace(ns) {
    const res = is ? createJavaStore(ns) : createLocalStore(ns);
    return res.store;
}
function store_utils_getNamespaceStoreWithData(ns, opts) {
    return store_utils_async(this, null, function*() {
        const res = is ? createJavaStore(ns, opts) : indexedDbUtils.getIndexedDbStore(ns, opts);
        return res;
    });
}
const storeUtils = {
    //获取一个命名空间下的数据对象，本地会从localstorage里读取，
    //安卓环境会从安卓里读取
    namespace,
    getNamespaceStoreWithData: store_utils_getNamespaceStoreWithData,
    setStoresProxy,
    // 这个可以用来侦听子级字段变更以便写入localStorage
    // 不然store2普通的set是无法在子级对象变更时进行写入的。
    createLocalStore,
    //特殊需求的store还是从store2来,譬如大数据变更的情况，还是直接操作方便。
    createStore2: (ns)=>store2_default().namespace(ns)
}; //# sourceMappingURL=store-utils.js.map

;// ../../libs/fanfanlo/dist/src/storage/index.js





 //# sourceMappingURL=index.js.map


/***/ }),

/***/ 13396:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   y: () => (/* binding */ TabbarContainer)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(94513);
/* harmony import */ var _barrel_optimize_names_Box_CssBaseline_Paper_mui_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(68732);
/* harmony import */ var _barrel_optimize_names_Box_CssBaseline_Paper_mui_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(92061);
/* harmony import */ var _barrel_optimize_names_Box_CssBaseline_Paper_mui_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(72632);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(94285);
/* harmony import */ var _page_AndroidPageContent__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(60471);
/* __next_internal_client_entry_do_not_use__ TabbarContainer auto */ 



function BottomBar(param) {
    let { navBar } = param;
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_barrel_optimize_names_Box_CssBaseline_Paper_mui_material__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A, {
        id: "bottom-navigation",
        "data-testid": "Tabbar__navigationContainer__01aryz6s610p4z0skjq69x5prg",
        "data-test-comment": "底部导航栏容器，包含应用的主要导航选项",
        sx: {
            position: 'fixed',
            bottom: 0,
            left: 0,
            right: 0
        },
        elevation: 3,
        children: navBar
    });
}
function TabbarContainer(param) {
    let { children, titleConf, navBar } = param;
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_barrel_optimize_names_Box_CssBaseline_Paper_mui_material__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A, {
        "data-testid": "Tabbar__mainContainer__01aryz6s610p4z0skjq69x5prh",
        "data-test-comment": "标签栏主容器，包含页面内容和底部导航栏",
        sx: {
            minHeight: '100vh',
            paddingBottom: '72px' // 为固定在底部的tabbar留出空间
        },
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_barrel_optimize_names_Box_CssBaseline_Paper_mui_material__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Ay, {}),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_page_AndroidPageContent__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .A, {
                titleConf: titleConf,
                children: children
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(BottomBar, {
                navBar: navBar
            })
        ]
    });
}


/***/ }),

/***/ 13583:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony import */ var _II18nValueConf__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(40815);
/* harmony import */ var _II18nValueConf__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_II18nValueConf__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (checked) */ if(__webpack_require__.o(_II18nValueConf__WEBPACK_IMPORTED_MODULE_0__, "storeUtils")) __webpack_require__.d(__webpack_exports__, { storeUtils: function() { return _II18nValueConf__WEBPACK_IMPORTED_MODULE_0__.storeUtils; } });






 //# sourceMappingURL=index.js.map


/***/ }),

/***/ 20168:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HQ: () => (/* binding */ getSocketConnectStatusEnumI18n),
/* harmony export */   NC: () => (/* binding */ isValidWebSocketURL),
/* harmony export */   du: () => (/* binding */ SocketConnectStatusEnum)
/* harmony export */ });
/* harmony import */ var validator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(40018);
/* harmony import */ var validator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(validator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(91628);


function isValidWebSocketURL(url) {
    if (!url) return false;
    return validator__WEBPACK_IMPORTED_MODULE_0___default().isURL(url, {
        protocols: [
            'ws',
            'wss'
        ],
        require_protocol: true
    });
}
var SocketConnectStatusEnum = /*#__PURE__*/ function(SocketConnectStatusEnum) {
    SocketConnectStatusEnum["connecting"] = "connecting";
    SocketConnectStatusEnum["connected"] = "connected";
    SocketConnectStatusEnum["disconnecting"] = "disconnecting";
    SocketConnectStatusEnum["disconnected"] = "disconnected";
    SocketConnectStatusEnum["waitRetry"] = "waitRetry";
    return SocketConnectStatusEnum;
}({});
async function getSocketConnectStatusEnumI18n(status) {
    return await (0,_i18n__WEBPACK_IMPORTED_MODULE_1__/* .loadI18nValue */ .y)('fanfanlo/utils/socket/content', "status.".concat(status));
}


/***/ }),

/***/ 24014:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony import */ var _IEventDispatcher__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(29206);
/* harmony import */ var _IEventDispatcher__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_IEventDispatcher__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (checked) */ if(__webpack_require__.o(_IEventDispatcher__WEBPACK_IMPORTED_MODULE_0__, "storeUtils")) __webpack_require__.d(__webpack_exports__, { storeUtils: function() { return _IEventDispatcher__WEBPACK_IMPORTED_MODULE_0__.storeUtils; } });






 //# sourceMappingURL=index.js.map


/***/ }),

/***/ 26719:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  G: () => (/* binding */ AppShell)
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/react@19.1.0/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(94513);
// EXTERNAL MODULE: ../../libs/fanfanlo/src/i18n/i18n-init.ts + 1 modules
var i18n_init = __webpack_require__(70679);
// EXTERNAL MODULE: ../../libs/fanfanlo/src/storage/store-utils.ts
var store_utils = __webpack_require__(29498);
// EXTERNAL MODULE: ../../libs/fanfanlo/src/watcher/proxyWatch.ts
var proxyWatch = __webpack_require__(57641);
// EXTERNAL MODULE: ../../libs/fanfanlo/src/watcher/watchUpdates.ts
var watchUpdates = __webpack_require__(31365);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react@19.1.0/node_modules/react/index.js
var react = __webpack_require__(94285);
;// ../../libs/fanfanlo/src/storage/store-page-context.tsx


// import { storeUtils } from "./store";
const s = store_utils/* storeUtils */.P.namespace('store-page-context');
function create() {
    return /*#__PURE__*/ createContext(s);
}
const StorePageContext = /*#__PURE__*/ (0,react.createContext)(s);
const StorePageDynamicContext = /*#__PURE__*/ (0,react.createContext)({});

// EXTERNAL MODULE: ../../node_modules/.pnpm/next@15.3.5_@babel+core@7.28.0_@playwright+test@1.57.0_babel-plugin-macros@3.1.0_react-dom@19_gjfccjsd7b6xv5ktyj7vxamu6q/node_modules/next/router.js
var next_router = __webpack_require__(1674);
// EXTERNAL MODULE: ../../node_modules/.pnpm/next@15.3.5_@babel+core@7.28.0_@playwright+test@1.57.0_babel-plugin-macros@3.1.0_react-dom@19_gjfccjsd7b6xv5ktyj7vxamu6q/node_modules/next/config.js
var config = __webpack_require__(90597);
var config_default = /*#__PURE__*/__webpack_require__.n(config);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react-i18next@15.6.0_i18next@24.2.3_typescript@5.7.3__react-dom@19.1.0_react@19.1.0__react@19.1.0_typescript@5.7.3/node_modules/react-i18next/dist/es/index.js + 15 modules
var es = __webpack_require__(56137);
;// __barrel_optimize__?names=I18nextProvider!=!../../node_modules/.pnpm/react-i18next@15.6.0_i18next@24.2.3_typescript@5.7.3__react-dom@19.1.0_react@19.1.0__react@19.1.0_typescript@5.7.3/node_modules/react-i18next/dist/es/index.js


// EXTERNAL MODULE: ../../libs/fanfanlo/src/remote/request.ts
var request = __webpack_require__(73603);
// EXTERNAL MODULE: ../../libs/app/model/src/remote/tms.ts
var tms = __webpack_require__(20928);
;// ../../libs/app/model/src/remote/tracking/print.ts


async function trackingPrint(opts) {
    const res = await (0,request/* request */.Em)(tms/* tms */.X.TTracking, tms/* tms */.X.MTrackingPrint, opts.params, opts.gateway, opts.handler);
    return res;
}

;// ../../libs/app/ui/src/components/app/AppShell.tsx
/* __next_internal_client_entry_do_not_use__ AppShell auto */ 






checkReloadPage();
(0,i18n_init/* i18nInit */.tV)();
function checkReloadPage() {
    if (false) {}
    if (config_default()().publicRuntimeConfig.isDevelopment) {
        return;
    }
    if (window.location.href.indexOf('qiniu') == -1) return;
    // 帮我检测url中是否包含_htmlRefreshTime的参数
    // 如果没有，则添加_htmlRefresTime的参数，值为当前时间的毫秒数
    const searchParams = new URL(window.location.href).searchParams;
    const htmlRefreshTime = searchParams.get('_htmlRefreshTime');
    if (!htmlRefreshTime) {
        const newUrl = new URL(window.location.href);
        newUrl.searchParams.set('_htmlRefreshTime', String(Date.now()));
        window.location.href = newUrl.toString();
        return;
    }
    const refreshTime = Number(htmlRefreshTime);
    if (refreshTime + 2 * 60 * 1000 < Date.now()) {
        const newUrl = new URL(window.location.href);
        newUrl.searchParams.set('_htmlRefreshTime', String(Date.now()));
        window.location.href = newUrl.toString();
    }
}
const dynamicKeyMap = new Map();
function AppShell(param) {
    let { children } = param;
    const router = (0,next_router.useRouter)();
    const scrollKey = 'scrollPositionInfo';
    const href = window.location.href.split("#")[0];
    const dynamicKey = "dynamic-".concat(href);
    const [isOpened] = (0,react.useState)(dynamicKeyMap.get(dynamicKey) === true);
    const s = store_utils/* storeUtils */.P.namespace(dynamicKey);
    let o = s.read(dynamicKey);
    if (!o) {
        o = {};
        s.write(dynamicKey, o);
    }
    o = (0,proxyWatch/* toProxy */.I$)(o);
    (0,react.useEffect)(()=>{
        router.beforePopState((state)=>{
            s.clearAll();
            return true;
        });
    });
    (0,react.useEffect)(()=>{
        s.write(dynamicKey, o);
        return (0,watchUpdates/* watchUpdates */.c)(o, ()=>{
            s.write(dynamicKey, o);
        });
    }, []);
    (0,react.useEffect)(()=>{
        trackingPrint({
            params: {
                type: "页面进入",
                title: "页面",
                subtitle: "发送者-AppShell",
                extra: {
                    href: window.location.href
                }
            }
        });
    }, []);
    (0,react.useEffect)(()=>{
        const info = s.read(scrollKey) || {
            x: 0,
            y: 0
        };
        // console.log('app shell scroll info info = ', info)
        if (info.x == 0 && info.y == 0) {
            listenScroll();
        } else {
            window.requestAnimationFrame(()=>{
                if (isOpened) {
                    window.scrollTo(info.x, info.y);
                }
                listenScroll();
            });
        }
        function onScroll(e) {
            // console.log('app shell on scroll', { x: window.scrollX, y: window.scrollY })
            s.write(scrollKey, {
                x: window.scrollX,
                y: window.scrollY
            });
        }
        function listenScroll() {
            window.addEventListener('scroll', onScroll);
        }
        function unsub() {
            window.removeEventListener('scroll', onScroll);
        }
        return unsub;
    });
    (0,react.useEffect)(()=>{
        dynamicKeyMap.set(dynamicKey, true);
    }, []);
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(StorePageContext, {
        value: s,
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(StorePageDynamicContext, {
            value: o,
            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(es/* I18nextProvider */.xC, {
                i18n: i18n_init/* i18n */.Ru,
                children: children
            })
        })
    });
}


/***/ }),

/***/ 27998:
/***/ ((module) => {

// extracted by mini-css-extract-plugin
module.exports = {"permissionComponentsSpanPadding":"components_permissionComponentsSpanPadding___8iUl","danger":"components_danger__at2U4","pass":"components_pass__QEjyt"};

/***/ }),

/***/ 29121:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   O: () => (/* binding */ marketsDevSocket)
/* harmony export */ });
/* unused harmony export socketConnectInfo */
/* harmony import */ var _fanfanlo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(30910);
/* harmony import */ var _fanfanlo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(57641);
/* harmony import */ var _fanfanlo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(20168);
/* harmony import */ var _market_lib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(61560);
/* harmony import */ var _market_dev_socket_setting_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(39363);



const dispatcher = new _fanfanlo__WEBPACK_IMPORTED_MODULE_0__/* .Dispatcher */ .m();
const socketConnectInfo = (0,_fanfanlo__WEBPACK_IMPORTED_MODULE_1__/* .toProxy */ .I$)({
    status: _fanfanlo__WEBPACK_IMPORTED_MODULE_2__/* .SocketConnectStatusEnum */ .du.disconnected,
    retryCount: 0
});
let ws;
async function connect() {
    const url = (await (0,_market_dev_socket_setting_data__WEBPACK_IMPORTED_MODULE_3__/* .getMarketDevSocketSettingData */ .D)()).url;
    if (!(0,_fanfanlo__WEBPACK_IMPORTED_MODULE_2__/* .isValidWebSocketURL */ .NC)(url)) {
        return;
    }
    socketConnectInfo.status = _fanfanlo__WEBPACK_IMPORTED_MODULE_2__/* .SocketConnectStatusEnum */ .du.connecting;
    const w = ws = new WebSocket(url);
    w.onopen = ()=>{
        socketConnectInfo.status = _fanfanlo__WEBPACK_IMPORTED_MODULE_2__/* .SocketConnectStatusEnum */ .du.connected;
        toGetAllScripts();
    };
    w.onclose = ()=>{
        console.log('oscket on close', arguments);
        socketConnectInfo.status = _fanfanlo__WEBPACK_IMPORTED_MODULE_2__/* .SocketConnectStatusEnum */ .du.disconnected;
        checkNeedRetry();
    };
    w.onerror = ()=>{
        console.log('socket onerror', arguments);
        socketConnectInfo.status = _fanfanlo__WEBPACK_IMPORTED_MODULE_2__/* .SocketConnectStatusEnum */ .du.disconnected;
        close();
        checkNeedRetry();
    };
    w.onmessage = (e)=>{
        try {
            const event = JSON.parse(e.data);
            console.log('market dev socket onmessage', event.type);
            dispatcher.dispatch(event.type, event.data);
        } catch (e) {
            console.error(e);
        }
    };
    async function toGetAllScripts() {
        const event = {
            type: _market_lib__WEBPACK_IMPORTED_MODULE_4__/* .IMarketDevConnectEventType */ .Dl.getAllScripts
        };
        w.send(JSON.stringify(event));
    }
}
function close() {
    if (!ws) return;
    ws.close();
    ws = undefined;
}
async function checkNeedRetry() {
    const settingData = await (0,_market_dev_socket_setting_data__WEBPACK_IMPORTED_MODULE_3__/* .getMarketDevSocketSettingData */ .D)();
    if (!settingData.keepConnect) {
        return;
    }
    socketConnectInfo.retryCount++;
    setTimeout(()=>{
        connect();
    }, 1000 * 5);
}
function disconnect() {
    if (ws) {
        ws.close();
        ws = undefined;
    }
    socketConnectInfo.status = _fanfanlo__WEBPACK_IMPORTED_MODULE_2__/* .SocketConnectStatusEnum */ .du.disconnected;
}
const marketsDevSocket = {
    connect,
    disconnect,
    socketConnectInfo,
    dispatcher
};


/***/ }),

/***/ 29203:
/***/ ((module) => {

// extracted by mini-css-extract-plugin
module.exports = {"text-recognition-control":"TextRecognitionControl_text-recognition-control__a9DGY","control-section":"TextRecognitionControl_control-section__Rqe8j","status-display":"TextRecognitionControl_status-display__9hRvp","status-indicator":"TextRecognitionControl_status-indicator__wNRhn","running":"TextRecognitionControl_running__EWRBJ","stopped":"TextRecognitionControl_stopped__lYdN4","status-message":"TextRecognitionControl_status-message__4AdzW","config-section":"TextRecognitionControl_config-section__5AKTo","config-type":"TextRecognitionControl_config-type__lgaTV","regex-config":"TextRecognitionControl_regex-config__b0bYu","js-config":"TextRecognitionControl_js-config__BBigv","event-name-config":"TextRecognitionControl_event-name-config__l7Jsg","inputField":"TextRecognitionControl_inputField__fa8Iz","button-group":"TextRecognitionControl_button-group__8lYHd","btn-start":"TextRecognitionControl_btn-start__95KMZ","btn-stop":"TextRecognitionControl_btn-stop__pCrmi","match-result":"TextRecognitionControl_match-result__fXa6f","matched-text":"TextRecognitionControl_matched-text__nPbRD","history-results":"TextRecognitionControl_history-results__KWYo3","results-list":"TextRecognitionControl_results-list__Q29nG","result-item":"TextRecognitionControl_result-item__GlANg","result-text":"TextRecognitionControl_result-text__L5EKC","result-position":"TextRecognitionControl_result-position__KGF7L"};

/***/ }),

/***/ 29206:
/***/ (() => {

"use strict";
 //# sourceMappingURL=IEventDispatcher.js.map


/***/ }),

/***/ 29644:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony import */ var _global_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(50245);
/* harmony import */ var _global_index__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_global_index__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (checked) */ if(__webpack_require__.o(_global_index__WEBPACK_IMPORTED_MODULE_0__, "storeUtils")) __webpack_require__.d(__webpack_exports__, { storeUtils: function() { return _global_index__WEBPACK_IMPORTED_MODULE_0__.storeUtils; } });




 //# sourceMappingURL=index.js.map


/***/ }),

/***/ 39363:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   D: () => (/* binding */ getMarketDevSocketSettingData)
/* harmony export */ });
/* harmony import */ var _fanfanlo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(29498);

async function createDefSocketSettingData() {
    const data = {
        keepConnect: false,
        url: ""
    };
    const res = await _fanfanlo__WEBPACK_IMPORTED_MODULE_0__/* .storeUtils */ .P.getNamespaceStoreWithData('market-dev-socket-setting', {
        defData: data
    });
    return res.data;
}
async function getMarketDevSocketSettingData() {
    return await createDefSocketSettingData();
}


/***/ }),

/***/ 40815:
/***/ (() => {

"use strict";
 //# sourceMappingURL=II18nValueConf.js.map


/***/ }),

/***/ 43598:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TestScript: () => (/* binding */ TestScript),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(94513);
/* harmony import */ var _barrel_optimize_names_Button_mui_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(20872);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(74440);


// import { buildScript, printScript1 } from "@scripts/script1";

function parseUsedLib(s) {
    let res = [];
    let reg = /javaLib\[\"(.*)\"\]/g;
    let r = s.matchAll(reg);
    for (let a of r){
        res.push(a[1]);
    }
    return res;
}
let beforeJavaLibCreateScript = "\nlet isScriptRunnable = true;\nlet scriptExitListeners = [];\nfunction addScriptExitListener(f){\n    removeScriptExitListener(f);\n    scriptExitListeners.push(f);\n}\nfunction removeScriptExitListener(f){\n    let index = scriptExitListeners.indexOf(f);\n    if(index == -1)return;\n    scriptExitListeners.splice(index, 1);\n}\nfunction onJavaCallTerminate(){\n    callScriptExit();\n    return true;\n}\nfunction callJavaExit(){\n\n}\nfunction jsCallComplete(){\n    callScriptExit();\n    callJavaExit();\n}\n\nfunction jsCallFailed(){\n    callScriptExit();\n    callJavaExit();\n}\nfunction callScriptExit(){\n    isScriptRunnable = false;\n    let res = \"\"\n    console.log('before call exit', scriptExitListeners.length);\n    scriptExitListeners.forEach((f)=>{f()});\n    console.log('after call exit');\n    return res;\n}\n    ";
function TestScript() {
    async function onClick() {
        // printScript1('hello script1')
        runProjectScriptDemo();
    }
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_barrel_optimize_names_Button_mui_material__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A, {
            onClick: onClick,
            "data-testid": "TestScript__scriptButton__01JG2B0087",
            children: "script"
        })
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TestScript);
async function runProjectScriptDemo() {
    const res = await axios__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A.get('/scripts/projectScript07.js');
    const scriptString = res.data;
    let dependencies = parseUsedLib(scriptString).concat(parseUsedLib(beforeJavaLibCreateScript));
// const conf = buildScript({
//     script: scriptString, injects: ["console", "a11yModel"],
//     optimizationLevel: -1, printScript: false,
//     scriptId: "demo.project"
// }, dependencies, beforeJavaLibCreateScript)
// const s = AutoWebViewJs.confToScript(conf);
// console.log('ssssssssssss', s)
// AutoWebViewJs.instance.callScriptRunner(s);
// console.log('code', code)
}


/***/ }),

/***/ 43911:
/***/ (() => {

"use strict";
 //# sourceMappingURL=global.index.js.map


/***/ }),

/***/ 50245:
/***/ (() => {

"use strict";
 //# sourceMappingURL=global.index.js.map


/***/ }),

/***/ 52026:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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

/***/ 52807:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   j: () => (/* binding */ NavBar)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(94513);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1674);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _fanfanlo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(56137);
/* harmony import */ var _mui_icons_material_Home__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4306);
/* harmony import */ var _mui_icons_material_Settings__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(31480);
/* harmony import */ var _mui_icons_material_Create__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(44797);
/* harmony import */ var _barrel_optimize_names_BottomNavigation_BottomNavigationAction_mui_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(94360);
/* harmony import */ var _barrel_optimize_names_BottomNavigation_BottomNavigationAction_mui_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(708);







function NavBar() {
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();
    const { pathname } = router;
    const { t } = (0,_fanfanlo__WEBPACK_IMPORTED_MODULE_2__/* .useTranslation */ .Bd)('homepage/components/navbar/content');
    const tabInfoList = [
        {
            label: t('NavBar.home'),
            value: '/',
            icon: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_icons_material_Home__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A, {})
        },
        {
            label: t('NavBar.create'),
            value: '/script-creator',
            icon: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_icons_material_Create__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A, {})
        },
        // { label: t('content.market'), value: '/market', icon: <StorefrontIcon /> },
        {
            label: t('NavBar.settings'),
            value: '/settings',
            icon: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_icons_material_Settings__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .A, {})
        }
    ];
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_barrel_optimize_names_BottomNavigation_BottomNavigationAction_mui_material__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .A, {
        showLabels: true,
        value: pathname,
        children: tabInfoList.map((e, index)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_barrel_optimize_names_BottomNavigation_BottomNavigationAction_mui_material__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .A, {
                label: e.label,
                icon: e.icon,
                "data-testid": "NavBar__tabItem__01aryz6s610p4z0skjq69x5prs__".concat(index),
                "data-test-comment": "导航栏标签项，点击后导航到对应页面（首页/脚本创建/设置）",
                className: pathname === e.value ? 'Mui-selected' : '',
                onClick: ()=>{
                    if (pathname === e.value) return;
                    router.push(e.value);
                }
            }, e.value))
    });
}


/***/ }),

/***/ 56829:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Home)
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/react@19.1.0/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(94513);
// EXTERNAL MODULE: ../../libs/app/ui/src/components/app/AppShell.tsx + 3 modules
var AppShell = __webpack_require__(26719);
// EXTERNAL MODULE: ../../libs/app/ui/src/components/tabbar/Tabbar.tsx
var Tabbar = __webpack_require__(13396);
// EXTERNAL MODULE: ../../libs/fanfanlo/src/i18n/i18n-init.ts + 1 modules
var i18n_init = __webpack_require__(70679);
// EXTERNAL MODULE: ../../libs/droid/android/src/android/AutoWebViewJs.ts + 1 modules
var AutoWebViewJs = __webpack_require__(68709);
// EXTERNAL MODULE: ../../libs/droid/android/src/htmls/accessibility-info-buttons/accessibility-info-buttons.ts
var accessibility_info_buttons = __webpack_require__(37206);
// EXTERNAL MODULE: ../../libs/droid/android/src/android/scripts/permissions/permissionUtils.ts + 1 modules
var permissionUtils = __webpack_require__(89797);
// EXTERNAL MODULE: ../../libs/droid/android/src/android/components/Manifest.ts
var Manifest = __webpack_require__(34100);
// EXTERNAL MODULE: ../../libs/fanfanlo/src/log/Log.ts + 1 modules
var Log = __webpack_require__(89597);
// EXTERNAL MODULE: ../../libs/fanfanlo/src/watcher/proxyWatch.ts
var proxyWatch = __webpack_require__(57641);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react-i18next@15.6.0_i18next@24.2.3_typescript@5.7.3__react-dom@19.1.0_react@19.1.0__react@19.1.0_typescript@5.7.3/node_modules/react-i18next/dist/es/index.js + 15 modules
var es = __webpack_require__(56137);
// EXTERNAL MODULE: ../../libs/fanfanlo/src/watcher/useProxyWatch.ts
var useProxyWatch = __webpack_require__(80502);
// EXTERNAL MODULE: ../../libs/fanfanlo/src/utils/documentUtils.ts
var documentUtils = __webpack_require__(12877);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/Button/Button.js + 3 modules
var Button_Button = __webpack_require__(20872);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react@19.1.0/node_modules/react/index.js
var react = __webpack_require__(94285);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react-hot-toast@2.5.2_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/react-hot-toast/dist/index.mjs + 1 modules
var dist = __webpack_require__(73349);
// EXTERNAL MODULE: __barrel_optimize__?names=ulid!=!../../node_modules/.pnpm/ulid@2.4.0/node_modules/ulid/dist/index.esm.js + 1 modules
var index_esm = __webpack_require__(43899);
;// ./src/components/a11y/open-a11y-node-button.tsx







//interface 
const fileLog = new Log/* Log */.tG(false, 'open-a11y-node-button.tsx');
fileLog.isChildrenPaused = true;
fileLog.isPaused = true;
const data = (0,proxyWatch/* toProxy */.I$)({
    opened: false
});
async function onClick() {
    if (data.opened) return;
    const eventType = "a11yNodeSelectActionItem";
    const selectEventIndex = autoWebViewJs.shellListen(androidDispatchers.WebViewJsDispatcher.name, eventType, eventType, false, onSelectNode);
    function onSelectNode(s) {
        clear();
        autoWebViewJs.clipboardSetText(s);
    // const info: IA11yNodeInfo = JSON.parse(s)
    // console.log('fffffffffffffff', s)
    }
    function clear() {
        data.opened = false;
        autoWebViewJs.shellRemoveListen(androidDispatchers.WebViewJsDispatcher.name, selectEventIndex);
        autoWebViewJs.shellRemoveListen(androidDispatchers.Window.name, exitWindowIndex);
        if (exitWebviewJsIndex) {
            autoWebViewJs.removeListen(androidDispatchers.Window.name, parseInt(exitWebviewJsIndex));
        }
    }
    const windowId = ulid();
    openHtmlShowA11yNodeInfoButton(eventType, windowId);
    data.opened = true;
    const et = "window-".concat(windowId, "-dismiss");
    const { javaResultString: exitWebviewJsIndex, errMsg } = autoWebViewJs.listen(androidDispatchers.Window.name, et, et, true);
    if (errMsg) {
        throw new Error(errMsg);
    }
    const exitWindowIndex = autoWebViewJs.shellListen(androidDispatchers.Window.name, et, et, true, ()=>{
        clear();
    });
}
function open_a11y_node_button_OpenA11yNodeButton() {
    const uiLog = fileLog.sub(false, 'OpenA11yNodeButton_ui');
    uiLog.pause = true;
    const { t } = (0,es/* useTranslation */.Bd)('homepage/components/a11y/content');
    const [isHidden] = (0,useProxyWatch/* useProxyWatch */.x)(documentUtils/* documentHiddenData */.uA, 'isHidden', documentUtils/* documentHiddenData */.uA.isHidden);
    const [isWaitingPermissions, setIsWaitingPermissions] = (0,react.useState)(false);
    function checkPermissions() {
        const script = '\n        com.fanfanlo.lib.permission.PermissionRequestManager.checkPermissions([\n            "Manifest.permission.CAMERA",\n            "android.permission.SYSTEM_ALERT_WINDOW",\n            "android.permission.BIND_ACCESSIBILITY_SERVICE"\n        ]);\n        ';
        const { javaResultData, javaResultString, errMsg } = AutoWebViewJs/* autoWebViewJs */.yx.callScript(script);
        uiLog.log('checkPermissions_fn javaResultString=', javaResultString, errMsg, javaResultData);
        uiLog.log('checkPermissions_fn javaResultData2 =', JSON.stringify(javaResultData));
        uiLog.log('checkPermissions_fn javaResultData3 =', javaResultData);
        uiLog.log('checkPermissions_fn javaResultData4 =', typeof javaResultData);
        uiLog.log('checkPermissions_fn javaResultData5 =', javaResultData === null || javaResultData === void 0 ? void 0 : javaResultData.grantResults[0], 'and typeof', typeof (javaResultData === null || javaResultData === void 0 ? void 0 : javaResultData.grantResults[0]));
        if (errMsg) {
            throw new Error(errMsg);
        }
    }
    (0,react.useEffect)(()=>{
        if (isHidden) {
            uiLog.log('use effect isHidden', isHidden);
            return;
        }
        if (!isWaitingPermissions) {
            uiLog.log('use effect isWaitingPermissions', isWaitingPermissions);
            return;
        }
    }, [
        isHidden,
        isWaitingPermissions
    ]);
    const [opened] = (0,useProxyWatch/* useProxyWatch */.x)(data, 'opened', data.opened);
    function onClick() {
        checkPermissions();
    }
    function onAskPermissionComplete(stoped, granted, result) {
        uiLog.log('onAskPermissionComplete_fn stoped=', stoped, 'granted=', granted, 'result=', JSON.stringify(result));
        if (!granted) {
            dist/* default */.Ay.error("有未授权的权限，所以无法运行。\n请再次点击按钮运行授权并同意赋权后才能继续执行操作。");
            return;
        }
        const eventType = (0,index_esm/* ulid */.Z0)(); // "a11yNodeSelectActionItem";
        const windowId = (0,index_esm/* ulid */.Z0)();
        uiLog.log('onAskPermissionComplete_fn eventType=', eventType, 'windowId=', windowId);
        (0,accessibility_info_buttons/* openHtmlShowA11yNodeInfoWindow */.Z)(eventType, windowId);
    }
    function askingPermissions() {
        const eventType = (0,index_esm/* ulid */.Z0)(); // "a11yNodeSelectActionItem";
        const windowId = (0,index_esm/* ulid */.Z0)();
        uiLog.log('askingPermissions_fn eventType=', eventType);
        const res = permissionUtils/* permissionUtils */.f.askPermissions([
            // Manifest.Permission.CAMERA,
            Manifest/* Manifest */._8.Permission.SYSTEM_ALERT_WINDOW,
            Manifest/* Manifest */._8.Permission.BIND_ACCESSIBILITY_SERVICE
        ], eventType, onAskPermissionComplete);
        uiLog.log('askingPermissions_fn res=', res);
        if (res.isGranted) {
            onAskPermissionComplete(false, true);
        }
    }
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(jsx_runtime.Fragment, {
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Button_Button/* default */.A, {
            variant: "contained",
            onClick: askingPermissions,
            disabled: false,
            "data-testid": "OpenA11yNodeButton__askPermissionsButton__01JG2B0079",
            "data-test-comment": "请求无障碍权限按钮，点击后请求系统无障碍服务权限，获得权限后可以选择无障碍节点",
            children: t("open-a11y-node-button.btnName")
        })
    });
}

;// ./src/components/a11y/test-a11y.tsx



function test_a11y_TestA11y() {
    function exportNode() {
        const script = "\n        com.fanfanlo.droidlib.auto.nodeoverlay.NodeOverlayController.exportPackageDataToJson();\n        ";
        autoWebViewJs.callScript(script);
    }
    function renderNodeInfo() {
        const script = "\n        com.fanfanlo.droidlib.auto.nodeoverlay.NodeOverlayController.createTaskFromJson();\n        ";
        autoWebViewJs.callScript(script);
    }
    return /*#__PURE__*/ _jsx(_Fragment, {
        children: /*#__PURE__*/ _jsxs(Box, {
            children: [
                /*#__PURE__*/ _jsx(Button, {
                    onClick: exportNode,
                    "data-testid": "TestA11y__exportButton__01JG2B0064",
                    children: "导出节点"
                }),
                /*#__PURE__*/ _jsx(Button, {
                    onClick: renderNodeInfo,
                    "data-testid": "TestA11y__renderButton__01JG2B0065",
                    children: "渲染节点信息"
                })
            ]
        })
    });
}

// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/Box/Box.js + 2 modules
var Box_Box = __webpack_require__(92061);
// EXTERNAL MODULE: ../../node_modules/.pnpm/next@15.3.5_@babel+core@7.28.0_@playwright+test@1.57.0_babel-plugin-macros@3.1.0_react-dom@19_gjfccjsd7b6xv5ktyj7vxamu6q/node_modules/next/link.js
var next_link = __webpack_require__(99815);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: __barrel_optimize__?names=useTranslation!=!../../node_modules/.pnpm/react-i18next@15.6.0_i18next@24.2.3_typescript@5.7.3__react-dom@19.1.0_react@19.1.0__react@19.1.0_typescript@5.7.3/node_modules/react-i18next/dist/es/index.js
var dist_es = __webpack_require__(51011);
;// ./src/components/android-float/window/AndroidFloatWindowLink.tsx




function AndroidFloatWindowLink_AndroidFloatWindowLink() {
    const { t } = (0,dist_es/* useTranslation */.Bd)('homepage/components/android-float/window/content');
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(Box_Box/* default */.A, {
        sx: {
            mt: 1,
            mb: 1
        },
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Button_Button/* default */.A, {
            component: (link_default()),
            href: "/android-float-window",
            variant: "contained",
            color: "primary",
            "data-testid": "AndroidFloatWindowLink__linkButton__01JG2B0082",
            "data-test-comment": "浮窗管理链接按钮，点击后导航到浮窗管理页面",
            children: t('AndroidFloatWindowLink.name')
        })
    });
}

;// ./src/components/android-settings/AndroidSettingsInfo.tsx




function AndroidSettingsInfo_AndroidSettingsInfo() {
    const [permissions, setPermissions] = useState([]);
    const [open, setOpen] = useState(false);
    const onSettingClick = ()=>{
        const script = "\n        com.fanfanlo.lib.utils.PermissionUtils.openAppSettings();";
        autoWebViewJs.callScript(script);
    };
    const handleClose = ()=>{
        setOpen(false);
    };
    useEffect(()=>{
        const script = "\n        var data = com.fanfanlo.lib.utils.PermissionUtils.getGrantedPermissions();\n        var res = com.fanfanlo.lib.utils.JsonUtil.gson2.toJson(data);\n        res;\n        ";
        const res = autoWebViewJs.callScript(script);
        if (res.javaResultData) {
            setPermissions(res.javaResultData);
        }
    }, []);
    return /*#__PURE__*/ _jsxs(_Fragment, {
        children: [
            /*#__PURE__*/ _jsx(Box, {
                children: /*#__PURE__*/ _jsxs(Box, {
                    children: [
                        /*#__PURE__*/ _jsx("span", {
                            children: "授权"
                        }),
                        /*#__PURE__*/ _jsx(Button, {
                            onClick: onSettingClick,
                            "data-testid": "AndroidSettingsInfo__openSettingButton__01JG2B0060",
                            children: "打开设置页"
                        }),
                        /*#__PURE__*/ _jsx(Button, {
                            onClick: ()=>setOpen(true),
                            "data-testid": "AndroidSettingsInfo__grantedButton__01JG2B0061",
                            children: "已授权"
                        })
                    ]
                })
            }),
            /*#__PURE__*/ _jsx(Modal, {
                open: open,
                onClose: handleClose,
                "data-testid": "AndroidSettingsInfo__permissionsModal__01JG2B0062",
                children: /*#__PURE__*/ _jsxs(Box, {
                    sx: {
                        bgcolor: "background.paper",
                        p: 2
                    },
                    children: [
                        /*#__PURE__*/ _jsxs(Box, {
                            children: [
                                /*#__PURE__*/ _jsx("span", {
                                    children: "已授权的权限"
                                }),
                                /*#__PURE__*/ _jsx(Button, {
                                    onClick: handleClose,
                                    "data-testid": "AndroidSettingsInfo__closeButton__01JG2B0063",
                                    children: "关闭"
                                })
                            ]
                        }),
                        /*#__PURE__*/ _jsx("ul", {
                            children: permissions.map((p, i)=>/*#__PURE__*/ _jsx("li", {
                                    style: {
                                        wordBreak: "break-all",
                                        wordWrap: "break-word"
                                    },
                                    children: p.replace('android.permission', '')
                                }, i))
                        })
                    ]
                })
            })
        ]
    });
}

;// ../../libs/droid/android/src/android/scripts/app/app-kill-self.ts

let script = "com.fanfanlo.lib.sys.Sys.killMyApp()";
function appKillSelf() {
    AutoWebViewJs/* AutoWebViewJs */.w6.instance.callScript(script);
}

;// ./src/components/app/kill-self/KillSelf.tsx





function KillSelf_KillSelf() {
    const { t } = (0,es/* useTranslation */.Bd)("homepage/components/app/kill-self/content");
    async function onClick() {
        dist/* default */.Ay.success(t("KillSelf.toast"));
        await new Promise((r)=>setTimeout(r, 1000 * 1));
        appKillSelf();
    }
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(jsx_runtime.Fragment, {
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Button_Button/* default */.A, {
            onClick: onClick,
            "data-testid": "KillSelf__killButton__01JG2B0083",
            "data-test-comment": "应用退出按钮，点击后显示提示信息，1秒后关闭应用",
            children: t("KillSelf.name")
        })
    });
}

// EXTERNAL MODULE: ../../node_modules/.pnpm/next@15.3.5_@babel+core@7.28.0_@playwright+test@1.57.0_babel-plugin-macros@3.1.0_react-dom@19_gjfccjsd7b6xv5ktyj7vxamu6q/node_modules/next/router.js
var next_router = __webpack_require__(1674);
;// ./src/components/markets/AddExternalMarketButton.tsx





function AddExternalMarketButton_AddExternalMarketButton() {
    const router = useRouter();
    const { t } = useTranslation('homepage/components/markets/content');
    useEffect(()=>{
        nextPreload(router, '/add-market');
    }, []);
    function onClick() {
        router.push("/add-market");
    }
    return /*#__PURE__*/ _jsx(Button, {
        onClick: onClick,
        "data-testid": "AddExternalMarketButton__addButton__01JFQX8K9W",
        "data-test-comment": "添加外部市场按钮，点击后导航到添加市场页面",
        children: t("AddExternalMarketButton.name")
    });
}

;// ./src/components/markets/main-page-add-buttons/MainPageAddButtons.tsx






const MainPageAddButtons_MainPageAddButtons = ()=>{
    const router = useRouter();
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event)=>{
        setAnchorEl(event.currentTarget);
    };
    const handleClose = ()=>{
        setAnchorEl(null);
    };
    const { t } = useTranslation('homepage/components/markets/main-page-add-buttons/content');
    const menuItems = [
        {
            name: t("content.sub.addScriptByUrl"),
            url: "/listen-editing-market"
        },
        {
            name: t("content.sub.addScriptByText"),
            url: "/add-market-by-text"
        },
        {
            name: t("content.sub.addMarket"),
            url: "/add-market-by-url"
        },
        {
            name: t("content.sub.addMarketByText"),
            url: "/listen-editing-market"
        }
    ];
    return /*#__PURE__*/ _jsxs(_Fragment, {
        children: [
            /*#__PURE__*/ _jsx(Button, {
                variant: "contained",
                startIcon: /*#__PURE__*/ _jsx(AddIcon, {}),
                onClick: handleClick,
                "data-testid": "MainPageAddButtons__addButton__01JG2B0072",
                "data-test-comment": "添加按钮，点击后打开添加菜单，支持添加脚本、市场等",
                children: t("content.add")
            }),
            /*#__PURE__*/ _jsx(Menu, {
                anchorEl: anchorEl,
                open: open,
                onClose: handleClose,
                "data-testid": "MainPageAddButtons__menu__01JG2B0073",
                "data-test-comment": "添加菜单，包含多个添加选项",
                children: menuItems.map((item, index)=>/*#__PURE__*/ _jsx(MenuItem, {
                        onClick: ()=>{
                            handleClose();
                            router.push(item.url);
                        },
                        "data-testid": "MainPageAddButtons__menuItem__01JG2B0074__".concat(index),
                        "data-test-comment": "菜单项，群组元件，点击后导航到对应页面",
                        children: item.name
                    }, index))
            })
        ]
    });
};

// EXTERNAL MODULE: ./src/components/navbar/NavBar.tsx
var NavBar = __webpack_require__(52807);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/Stack/Stack.js + 1 modules
var Stack = __webpack_require__(39070);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/Typography/Typography.js
var Typography = __webpack_require__(26512);
// EXTERNAL MODULE: ../../libs/droid/android/src/android/scripts/store/store.ts
var store = __webpack_require__(88504);
// EXTERNAL MODULE: ../../libs/droid/android/src/android/is-in-android.ts
var is_in_android = __webpack_require__(49378);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/Dialog/Dialog.js + 1 modules
var Dialog = __webpack_require__(46822);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/DialogTitle/DialogTitle.js
var DialogTitle = __webpack_require__(16880);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/DialogContent/DialogContent.js + 1 modules
var DialogContent = __webpack_require__(88149);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/TextField/TextField.js + 1 modules
var TextField = __webpack_require__(32314);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/DialogContentText/DialogContentText.js + 1 modules
var DialogContentText = __webpack_require__(32218);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/DialogActions/DialogActions.js + 1 modules
var DialogActions = __webpack_require__(89701);
;// ./src/components/notification-listener/intf.ts
const createDefServerStatus = ()=>({
        running: false,
        port: 6001,
        clientCount: 0,
        socketEnabled: false,
        connectedClients: 0,
        ipv4: [],
        ipv6: []
    });

;// ./src/components/notification-listener/ScanQRCodeButton.tsx




function ScaneQRCodeButton() {
    const { t } = (0,es/* useTranslation */.Bd)('homepage/components/notification-listener/content');
    function onClick() {
        const script = "\n        com.fanfanlo.lib.notification.NotificationScanQRCode.scanQRCode()\n        ";
        AutoWebViewJs/* autoWebViewJs */.yx.callScript(script);
    }
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(jsx_runtime.Fragment, {
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Button_Button/* default */.A, {
            variant: "outlined",
            onClick: onClick,
            "data-testid": "ScaneQRCodeButton__scanButton__01JG2B0083",
            "data-test-comment": "扫描二维码按钮，点击后调用系统二维码扫描功能",
            children: t("ScaneQRCodeButton.name")
        })
    });
}

;// ./src/components/notification-listener/SettingPanel.tsx







const SettingPanel_fileLog = new Log/* Log */.tG(false, "SettingPanel_file");
SettingPanel_fileLog.childrenPaused = true;
SettingPanel_fileLog.pause = true;
function SettingPanel(props) {
    const uiLog = SettingPanel_fileLog.sub(false, "  SettingPanel_ui");
    uiLog.childrenPaused = true;
    uiLog.pause = true;
    const { t } = (0,es/* useTranslation */.Bd)('homepage/components/notification-listener/content');
    const { open, onClose } = props;
    const [initialSetting, setInitialSetting] = (0,react.useState)(createDefServerStatus());
    const [portInput, setPortInput] = (0,react.useState)('6001'); // 设置默认值
    const [portError, setPortError] = (0,react.useState)('');
    function checkUpdateSetting() {
        uiLog.log('checkUpdateSetting_fn');
        if (portError) {
            uiLog.warn('Port has an error, skipping update.');
            return;
        }
        const currentSetting = createDefServerStatus();
        const settingBase64 = store/* autoJsStoreUtils */.b.btoaUtf8(JSON.stringify(currentSetting));
        const script = "\n        com.fanfanlo.lib.notification.NotificationSocketServer.updateSettingBase64('".concat(settingBase64, "');\n        ");
        uiLog.log('Calling updateSettingBase64 with script:', script);
        const { errMsg } = AutoWebViewJs/* autoWebViewJs */.yx.callScript(script);
        if (errMsg) {
            uiLog.error('updateSettingBase64 error:', errMsg);
        }
    }
    (0,react.useEffect)(()=>{
        uiLog.log('useEffect_fn, open changed:', open);
        if (open) {
            const script = "\n            var s = com.fanfanlo.lib.notification.NotificationSocketServer.getStatus();\n            s;";
            const { javaResultString, errMsg } = AutoWebViewJs/* autoWebViewJs */.yx.callScript(script);
            if (errMsg) {
                uiLog.error('getStatus error:', errMsg);
                return;
            }
            let str = javaResultString || '' // autoJsStoreUtils.atobUtf8(javaResultString || '');
            ;
            if (!str) {
                if (is_in_android/* isRealInAndroid */.nd) {
                    uiLog.error('atobUtf8 result empty, javaResultString=', javaResultString);
                    return;
                } else {
                    str = "";
                }
            }
            const storedSetting = JSON.parse(str || '{}');
            setInitialSetting(storedSetting);
            // 确保 port 有值，否则使用默认值 6001
            const port = storedSetting.port || 6001;
            setPortInput(String(port));
            setPortError('');
        }
    }, [
        open
    ]);
    const handlePortChange = (event)=>{
        const value = event.target.value;
        // 确保值不为空
        if (value === '') {
            setPortInput('');
            setPortError(t('SettingPanel.portRangeError'));
            return;
        }
        setPortInput(value);
        const portNum = Number(value);
        if (!Number.isInteger(portNum) || portNum <= 1024 || portNum > 65535) {
            setPortError(t('SettingPanel.portRangeError'));
        } else {
            setPortError('');
        }
    };
    // “使用”按钮的点击事件处理器
    const handleApply = ()=>{
        uiLog.log('handleApply_fn');
        checkUpdateSetting(); // 保存设置
        onClose(); // 关闭对话框
    };
    const handleInputFocus = (event)=>{
        setTimeout(()=>{
            event.target.scrollIntoView({
                behavior: 'smooth',
                block: 'center'
            });
        }, 300);
    };
    return(// Dialog 的 onClose 直接使用父组件的 onClose，不执行任何保存操作
    /*#__PURE__*/ (0,jsx_runtime.jsxs)(Dialog/* default */.A, {
        open: open,
        onClose: onClose,
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(DialogTitle/* default */.A, {
                children: t('SettingPanel.modalTitle')
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(DialogContent/* default */.A, {
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(ScaneQRCodeButton, {})
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)(DialogContent/* default */.A, {
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(TextField/* default */.A, {
                        margin: "dense",
                        id: "port",
                        label: t('SettingPanel.portLabel'),
                        type: "number",
                        fullWidth: true,
                        variant: "standard",
                        value: portInput,
                        onChange: handlePortChange,
                        onFocus: handleInputFocus,
                        error: !!portError,
                        helperText: portError,
                        inputProps: {
                            min: 1025,
                            max: 65535
                        },
                        "data-testid": "SettingPanel__portInput__01JG2B0093",
                        "data-test-comment": "端口号输入框，输入范围1025-65535，用于配置Socket服务器端口"
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(DialogContentText/* default */.A, {
                        sx: {
                            mt: 2
                        },
                        children: t('SettingPanel.description')
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(DialogContentText/* default */.A, {
                        color: "error",
                        sx: {
                            mt: 2
                        },
                        children: t('SettingPanel.riskWarning')
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)(DialogActions/* default */.A, {
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Button_Button/* default */.A, {
                        onClick: onClose,
                        "data-testid": "SettingPanel__cancelButton__01JG2B0091",
                        "data-test-comment": "取消按钮，点击后关闭设置面板，不保存任何更改",
                        children: t('SettingPanel.cancelButton')
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Button_Button/* default */.A, {
                        onClick: handleApply,
                        disabled: !!portError,
                        "data-testid": "SettingPanel__applyButton__01JG2B0092",
                        "data-test-comment": "应用按钮，点击后保存设置并关闭面板，端口错误时禁用",
                        children: t('SettingPanel.applyButton')
                    })
                ]
            })
        ]
    }));
}

// EXTERNAL MODULE: ../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/lodash.js
var lodash = __webpack_require__(80507);
var lodash_default = /*#__PURE__*/__webpack_require__.n(lodash);
;// ./src/components/permissions/notification/NotificationSettingButton.tsx




function NotificationSettingButton() {
    const { t } = (0,es/* useTranslation */.Bd)('homepage/components/permissions/notification/content');
    function openSettings() {
        const script = "\n                com.fanfanlo.lib.notification.NotificationReader.openNotificationAccessSettings()\n                ";
        console.log('call opensettings');
        AutoWebViewJs/* autoWebViewJs */.yx.callScript(script);
    }
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(Button_Button/* default */.A, {
        onClick: openSettings,
        "data-testid": "NotificationSettingButton__settingButton__01JFQX8K9A0",
        "data-test-comment": "通知设置按钮，点击后打开系统通知访问设置",
        children: t('NotificationSettingButton.setting')
    });
}

;// ./src/components/notification-listener/NotificationListenerPanel.tsx








const NotificationListenerPanel_fileLog = new Log/* Log */.tG(false, 'NotificationListenerPanel_file');
NotificationListenerPanel_fileLog.childrenPaused = true;
NotificationListenerPanel_fileLog.pause = true;
const SERVER_CLIENT_NUM_UPDATED = 'serverClientNumUpdated';
function NotificationReadable() {
    const uiLog = NotificationListenerPanel_fileLog.sub(false, '  NotificationReadable_ui');
    uiLog.pause = true;
    uiLog.childrenPaused = true;
    const { t } = (0,es/* useTranslation */.Bd)('homepage/components/notification-listener/content');
    const [readable, setReadable] = (0,react.useState)(false);
    function refresh() {
        const fnLog = uiLog.sub(false, '    refresh_fn');
        fnLog.pause = true;
        fnLog.log('Checking if notification listener service is connected and readable');
        const script = "\n        com.fanfanlo.lib.notification.MyNotificationListenerService.readIsConnected()\n    ";
        const { javaResultData, javaResultString, errMsg } = AutoWebViewJs/* autoWebViewJs */.yx.callScript(script);
        fnLog.log("Script result: javaResultData=".concat(javaResultData, ", javaResultString=").concat(javaResultString, ", errMsg=").concat(errMsg));
        if (errMsg) {
            setReadable(false);
            return;
        }
        setReadable(javaResultString === 'true');
    }
    (0,react.useEffect)(()=>{
        refresh();
    });
    (0,react.useEffect)(()=>{
        const effLog = uiLog.sub(false, '  useEffect_eventListener');
        effLog.pause = true;
        function onConnected() {
            setReadable(true);
            effLog.log('onConnected_event');
        }
        function onDisconnected() {
            setReadable(false);
            effLog.log('onDisconnected_event');
        }
        effLog.log('Setting up event listeners for notification listener service connection status');
        const EVENT_TYPE_CONNECTED = 'notificationListenServiceConnected';
        const EVENT_TYPE_DISCONNECTED = 'notificationListenServiceDisconnected';
        const EVENT_TYPE_CONNECT_CHANGED = 'notificationListenServiceConnectChanged';
        window.addEventListener(EVENT_TYPE_CONNECTED, onConnected);
        window.addEventListener(EVENT_TYPE_DISCONNECTED, onDisconnected);
        return ()=>{
            window.removeEventListener(EVENT_TYPE_CONNECTED, onConnected);
            window.removeEventListener(EVENT_TYPE_DISCONNECTED, onDisconnected);
            effLog.log('Cleaned up event listeners for notification listener service connection status');
        };
    }, []);
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(Stack/* default */.A, {
        direction: "row",
        spacing: 2,
        alignItems: "center",
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsxs)(Typography/* default */.A, {
                variant: "body2",
                color: "text.secondary",
                sx: {
                    flexShrink: 0
                },
                children: [
                    t('NotificationListenerPanel.notificationReadable'),
                    readable ? t('NotificationListenerPanel.notificationReadableYes') : t('NotificationListenerPanel.notificationReadableNo')
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(NotificationSettingButton, {})
        ]
    });
}
function SocketServerSwitch() {
    const uiLog = NotificationListenerPanel_fileLog.sub(false, '  SocketServerSwitch_ui');
    const { t } = (0,es/* useTranslation */.Bd)('homepage/components/notification-listener/content');
    const [isRunning, setIsRunning] = (0,react.useState)(false);
    function refresh() {
        const fnLog = uiLog.sub(false, '    refresh_fn');
        fnLog.log('Checking if socket server is running');
        const script = "\n      com.fanfanlo.lib.notification.NotificationSocketServer.serverIsRunning()\n    ";
        const { javaResultData, javaResultString, errMsg } = AutoWebViewJs/* autoWebViewJs */.yx.callScript(script);
        fnLog.log("NotificationSocketServer.serverIsRunning Script result: javaResultData=".concat(javaResultData, ", javaResultString=").concat(javaResultString, ", errMsg=").concat(errMsg));
        if (errMsg) {
            setIsRunning(false);
            return;
        }
        setIsRunning(javaResultString === 'true');
    }
    function handleStart() {
        const fnLog = uiLog.sub(false, '    handleStart_fn');
        fnLog.log('Starting socket server');
        const notificationTitle = t('NotificationListenerPanel.foregroundService.title');
        const notificationContent = t('NotificationListenerPanel.foregroundService.content');
        const requestReason = t('NotificationListenerPanel.foregroundService.reason');
        const script = '\n      var notificationTitle = "'.concat(notificationTitle.replace(/"/g, '\\"'), '";\n      var notificationContent = "').concat(notificationContent.replace(/"/g, '\\"'), '";\n      var requestReason = ').concat(JSON.stringify(requestReason), ";\n\n      com.fanfanlo.lib.notification.NotificationSocketServer.start(\n        notificationTitle,\n        notificationContent,\n        requestReason\n      );\n    ");
        const result = AutoWebViewJs/* autoWebViewJs */.yx.callScript(script);
        if (result.errMsg) {
            fnLog.error('Failed to start server:', result.errMsg);
            return;
        }
        fnLog.log('Server start request sent');
    }
    function handleStop() {
        const fnLog = uiLog.sub(false, '    handleStop_fn');
        fnLog.log('Stopping socket server');
        const script = 'com.fanfanlo.lib.notification.NotificationSocketServer.stop();';
        const result = AutoWebViewJs/* autoWebViewJs */.yx.callScript(script);
        if (result.errMsg) {
            fnLog.error('Failed to stop server:', result.errMsg);
            return;
        }
        fnLog.log('Server stopped');
    }
    function handleToggle() {
        if (isRunning) {
            handleStop();
        } else {
            handleStart();
        }
    }
    (0,react.useEffect)(()=>{
        refresh();
    }, []);
    (0,react.useEffect)(()=>{
        const effLog = uiLog.sub(false, '  useEffect_socketServerEvents');
        const EVENT_SWITCHED = 'notification_socket_server_switched';
        const EVENT_SWITCH_ON = 'notification_socket_server_switch_on';
        const EVENT_SWITCH_OFF = 'notification_socket_server_switch_off';
        function onSwitched(event) {
            var _customEvent_detail;
            const customEvent = event;
            const isOn = customEvent.detail === true || ((_customEvent_detail = customEvent.detail) === null || _customEvent_detail === void 0 ? void 0 : _customEvent_detail.data) === true;
            effLog.log('notificationSocketServerSwitched Socket server switched:', isOn);
            setIsRunning(isOn);
        }
        function onSwitchOn() {
            effLog.log('notificationSocketServerSwitched Socket server switched on');
            setIsRunning(true);
        }
        function onSwitchOff() {
            effLog.log('notificationSocketServerSwitched Socket server switched off');
            setIsRunning(false);
        }
        effLog.log('Setting up event listeners for socket server status');
        window.addEventListener(EVENT_SWITCHED, onSwitched);
        window.addEventListener(EVENT_SWITCH_ON, onSwitchOn);
        window.addEventListener(EVENT_SWITCH_OFF, onSwitchOff);
        return ()=>{
            window.removeEventListener(EVENT_SWITCHED, onSwitched);
            window.removeEventListener(EVENT_SWITCH_ON, onSwitchOn);
            window.removeEventListener(EVENT_SWITCH_OFF, onSwitchOff);
            effLog.log('Cleaned up event listeners for socket server status');
        };
    }, []);
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(Stack/* default */.A, {
        direction: "row",
        spacing: 2,
        alignItems: "center",
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsxs)(Typography/* default */.A, {
                variant: "body2",
                color: "text.secondary",
                sx: {
                    flexShrink: 0
                },
                children: [
                    t('NotificationListenerPanel.socketServerStatus'),
                    isRunning ? t('NotificationListenerPanel.socketServerRunning') : t('NotificationListenerPanel.socketServerStopped')
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Button_Button/* default */.A, {
                variant: "contained",
                color: isRunning ? 'error' : 'primary',
                onClick: handleToggle,
                size: "small",
                "data-testid": "SocketServerSwitch__toggleButton__01JG2B0086",
                "data-test-comment": "Socket服务器开关按钮，点击后启动或停止通知监听Socket服务器",
                children: isRunning ? t('NotificationListenerPanel.socketServerStopButton') : t('NotificationListenerPanel.socketServerStartButton')
            })
        ]
    });
}
function NotificationListenerPanel_NotificationListenerPanel() {
    const uiLog = NotificationListenerPanel_fileLog.sub(false, '  NotificationListenerPanel_ui');
    const { t } = (0,es/* useTranslation */.Bd)('homepage/components/notification-listener/content');
    // 控制设置弹窗的显示和隐藏
    const [isSettingPanelOpen, setIsSettingPanelOpen] = (0,react.useState)(false);
    const [serverStatus, setServerStatus] = (0,react.useState)({
        running: false,
        port: 0,
        clientCount: 0,
        socketEnabled: false,
        connectedClients: 0
    });
    // 从 serverStatus 派生 isListenerEnabled 状态
    const isListenerEnabled = Boolean(serverStatus === null || serverStatus === void 0 ? void 0 : serverStatus.running);
    function readServerClientNum() {
        refreshServerStatus();
    }
    (0,react.useEffect)(()=>{
        window.addEventListener(SERVER_CLIENT_NUM_UPDATED, readServerClientNum);
        return ()=>{
            window.removeEventListener(SERVER_CLIENT_NUM_UPDATED, readServerClientNum);
        };
    });
    function refreshServerStatus() {
        const script = "\n    const s = com.fanfanlo.lib.notification.NotificationSocketServer.getStatus();\n    s;";
        const { javaResultData, javaResultString, errMsg } = AutoWebViewJs/* autoWebViewJs */.yx.callScript(script);
        if (errMsg) {
            uiLog.error('getStatus error:', errMsg);
            return;
        }
        uiLog.log('getStatus result:', javaResultString);
        const status = lodash_default().isObject(javaResultData) ? javaResultData : JSON.parse(javaResultString || '{}');
        setServerStatus((prev)=>({
                ...prev,
                ...status,
                // 确保所有必要的字段都有默认值
                running: typeof status.running === 'boolean' ? status.running : prev.running,
                connectedClients: typeof status.connectedClients === 'number' ? status.connectedClients : prev.connectedClients
            }));
    }
    (0,react.useEffect)(()=>{
        refreshServerStatus();
    }, []);
    const handleSwitchChange = (event)=>{
        uiLog.log('handleSwitchChange_fn, checked:', event.target.checked);
        const checked = event.target.checked;
        // 立即更新本地 UI 状态以提供即时反馈
        setServerStatus((prev)=>({
                ...prev,
                running: checked
            }));
        try {
            if (checked) {
                // 启动服务 - 传递前台服务参数
                const notificationTitle = t('NotificationListenerPanel.foregroundService.title');
                const notificationContent = t('NotificationListenerPanel.foregroundService.content');
                const requestReason = t('NotificationListenerPanel.foregroundService.reason');
                uiLog.log('Starting notification listener with foreground service:', {
                    notificationTitle,
                    notificationContent,
                    requestReason
                });
                const script = '\n          var notificationTitle = "'.concat(notificationTitle.replace(/"/g, '\\"'), '";\n          var notificationContent = "').concat(notificationContent.replace(/"/g, '\\"'), '";\n          var requestReason = ').concat(JSON.stringify(requestReason), ";\n\n          com.fanfanlo.lib.notification.NotificationSocketServer.start(\n            notificationTitle,\n            notificationContent,\n            requestReason\n          );\n        ");
                const result = AutoWebViewJs/* autoWebViewJs */.yx.callScript(script);
                if (result.errMsg) {
                    throw new Error(result.errMsg);
                }
                uiLog.log('Foreground service request sent, waiting for user authorization');
                // 可选: 监听前台服务授权结果
                const eventName = 'notification_socket_server_foreground_event';
                const handleForegroundEvent = (event)=>{
                    const customEvent = event;
                    const data = customEvent.detail;
                    uiLog.log('Foreground service event:', data);
                    if (data.status === 'SUCCESS') {
                        uiLog.log('Foreground service authorized, server started');
                        refreshServerStatus();
                    } else if (data.status === 'ABORT') {
                        uiLog.warn('User rejected foreground service request');
                        // 回滚状态
                        setServerStatus((prev)=>({
                                ...prev,
                                running: false
                            }));
                    } else if (data.status === 'FAILURE') {
                        uiLog.error('Foreground service request failed');
                        setServerStatus((prev)=>({
                                ...prev,
                                running: false
                            }));
                    }
                    // 移除监听
                    window.removeEventListener(eventName, handleForegroundEvent);
                };
                window.addEventListener(eventName, handleForegroundEvent);
            } else {
                // 停止服务
                const script = 'com.fanfanlo.lib.notification.NotificationSocketServer.stop();';
                const result = AutoWebViewJs/* autoWebViewJs */.yx.callScript(script);
                if (result.errMsg) {
                    throw new Error(result.errMsg);
                }
                setIsSettingPanelOpen(false);
            }
        } catch (error) {
            uiLog.error('Failed to toggle notification listener:', error);
            // 如果调用失败，回滚状态
            setServerStatus((prev)=>({
                    ...prev,
                    running: !checked
                }));
        }
    };
    const handleOpenSettingPanel = ()=>{
        uiLog.log('handleOpenSettingPanel_fn');
        setIsSettingPanelOpen(true);
    };
    const handleCloseSettingPanel = ()=>{
        uiLog.log('handleCloseSettingPanel_fn');
        setIsSettingPanelOpen(false);
    };
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(Stack/* default */.A, {
        direction: "column",
        spacing: 2,
        sx: {
            width: '100%',
            border: '1px solid',
            borderColor: 'grey.300',
            borderRadius: '3px',
            p: 1
        },
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsxs)(Stack/* default */.A, {
                direction: "row",
                spacing: 2,
                alignItems: "center",
                sx: {
                    width: '100%'
                },
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.A, {
                        variant: "h6",
                        sx: {
                            flexShrink: 0
                        },
                        children: t('NotificationListenerPanel.title')
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Button_Button/* default */.A, {
                        variant: "outlined",
                        onClick: handleOpenSettingPanel,
                        "data-testid": "NotificationListenerPanel__settingsButton__01JG2B0087",
                        "data-test-comment": "通知监听器设置按钮，点击后打开设置面板",
                        children: t('NotificationListenerPanel.settingsButtonLabel')
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(SettingPanel, {
                        open: isSettingPanelOpen,
                        onClose: handleCloseSettingPanel
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Box_Box/* default */.A, {
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(NotificationReadable, {})
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)(Stack/* default */.A, {
                direction: "row",
                spacing: 2,
                alignItems: "center",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)(Typography/* default */.A, {
                        variant: "body1",
                        sx: {},
                        children: [
                            t('NotificationListenerPanel.clientsNum'),
                            " ",
                            serverStatus.connectedClients
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(SocketServerSwitch, {})
                ]
            })
        ]
    });
}

// EXTERNAL MODULE: ../../libs/fanfanlo/src/nextjs/env/env.ts
var env = __webpack_require__(99401);
// EXTERNAL MODULE: ../../libs/droid/project-v2-interface/src/index.ts + 23 modules
var src = __webpack_require__(91415);
// EXTERNAL MODULE: ../../libs/fanfanlo/src/watcher/watchUpdates.ts
var watchUpdates = __webpack_require__(31365);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/List/List.js + 1 modules
var List = __webpack_require__(66397);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/ListItem/ListItem.js + 3 modules
var ListItem = __webpack_require__(18248);
// EXTERNAL MODULE: ../../libs/droid/project-v2-ext/src/index.ts + 69 modules
var project_v2_ext_src = __webpack_require__(18697);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/Grid2/Grid2.js + 4 modules
var Grid2 = __webpack_require__(29050);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/Card/Card.js + 1 modules
var Card = __webpack_require__(81737);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/CardActionArea/CardActionArea.js + 1 modules
var CardActionArea = __webpack_require__(77313);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/CardContent/CardContent.js + 1 modules
var CardContent = __webpack_require__(54559);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+icons-material@6.4.12_@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_re_5ewkm5t5g27pzq5tz62v6ktvti/node_modules/@mui/icons-material/esm/FlashOn.js
var FlashOn = __webpack_require__(15648);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+icons-material@6.4.12_@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_re_5ewkm5t5g27pzq5tz62v6ktvti/node_modules/@mui/icons-material/esm/Code.js
var Code = __webpack_require__(3508);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+icons-material@6.4.12_@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_re_5ewkm5t5g27pzq5tz62v6ktvti/node_modules/@mui/icons-material/esm/AccountTree.js
var AccountTree = __webpack_require__(13820);
;// ../../libs/droid/project-v2-ui/src/ui/components/ProjectCategorySelectDialog.tsx








const ProjectCategorySelectDialog_fileLog = new Log/* Log */.tG(true, 'ProjectCategorySelectDialog');
ProjectCategorySelectDialog_fileLog.pause = true;
ProjectCategorySelectDialog_fileLog.childrenPaused = true;
// 图标映射
const categoryIcons = {
    [src/* ProjectCategory */.U2.QuickAction]: /*#__PURE__*/ (0,jsx_runtime.jsx)(FlashOn/* default */.A, {
        sx: {
            fontSize: 48,
            color: 'primary.main'
        }
    }),
    [src/* ProjectCategory */.U2.ScriptRunner]: /*#__PURE__*/ (0,jsx_runtime.jsx)(Code/* default */.A, {
        sx: {
            fontSize: 48,
            color: 'primary.main'
        }
    }),
    [src/* ProjectCategory */.U2.Workflow]: /*#__PURE__*/ (0,jsx_runtime.jsx)(AccountTree/* default */.A, {
        sx: {
            fontSize: 48,
            color: 'primary.main'
        }
    })
};
/**
 * 项目类别选择对话框
 */ const ProjectCategorySelectDialog = (param)=>{
    let { open, onClose, onSelect } = param;
    const { t } = (0,dist_es/* useTranslation */.Bd)("droid-project-v2-ui/ui/components/content");
    ProjectCategorySelectDialog_fileLog.log("[ProjectCategorySelectDialog] 渲染, open=".concat(open));
    const projectCategories = [
        src/* ProjectCategory */.U2.QuickAction,
        src/* ProjectCategory */.U2.ScriptRunner,
        src/* ProjectCategory */.U2.Workflow
    ];
    const handleSelect = (category)=>{
        ProjectCategorySelectDialog_fileLog.log("[ProjectCategorySelectDialog] 选择类别: ".concat(category));
        onSelect(category);
    };
    const handleClose = ()=>{
        ProjectCategorySelectDialog_fileLog.log("[ProjectCategorySelectDialog] 关闭对话框");
        onClose();
    };
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(Dialog/* default */.A, {
        open: open,
        onClose: handleClose,
        maxWidth: "sm",
        fullWidth: true,
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(DialogTitle/* default */.A, {
                children: t('ProjectCategorySelectDialog.ProjectCategorySelectDialog.title')
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(DialogContent/* default */.A, {
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Grid2/* default */.A, {
                    container: true,
                    spacing: 2,
                    sx: {
                        pt: 1
                    },
                    children: projectCategories.map((category, index)=>{
                        const config = src/* PROJECT_CATEGORY_CONFIGS */.v8[category];
                        ProjectCategorySelectDialog_fileLog.log("[ProjectCategorySelectDialog] 渲染类别卡片: ".concat(category, ", config="), JSON.stringify(config));
                        return /*#__PURE__*/ (0,jsx_runtime.jsx)(Grid2/* default */.A, {
                            size: {
                                xs: 12,
                                sm: 4
                            },
                            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Card/* default */.A, {
                                sx: {
                                    height: '100%',
                                    '&:hover': {
                                        boxShadow: 4
                                    }
                                },
                                "data-testid": "ProjectCategorySelectDialog__categoryCard__01JFXYZ9A1B2C3D4E5F6G7H8__".concat(index),
                                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(CardActionArea/* default */.A, {
                                    onClick: ()=>handleSelect(category),
                                    sx: {
                                        height: '100%',
                                        p: 2
                                    },
                                    children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(CardContent/* default */.A, {
                                        sx: {
                                            textAlign: 'center',
                                            p: 0
                                        },
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime.jsx)(Box_Box/* default */.A, {
                                                sx: {
                                                    mb: 1
                                                },
                                                children: categoryIcons[category]
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.A, {
                                                variant: "h6",
                                                gutterBottom: true,
                                                children: t("ProjectCategorySelectDialog.".concat(config.labelKey))
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.A, {
                                                variant: "body2",
                                                color: "text.secondary",
                                                children: t("ProjectCategorySelectDialog.".concat(config.descriptionKey))
                                            })
                                        ]
                                    })
                                })
                            })
                        }, category);
                    })
                })
            })
        ]
    });
};

;// ../../libs/droid/project-v2-ui/src/ui/components/CreateProjectButton.tsx









const CreateProjectButton_fileLog = new Log/* Log */.tG(true, 'CreateProjectButton');
CreateProjectButton_fileLog.pause = true;
CreateProjectButton_fileLog.childrenPaused = true;
const CreateProjectButton = ()=>{
    const { t } = (0,dist_es/* useTranslation */.Bd)("droid-project-v2-ui/ui/components/content");
    const router = (0,next_router.useRouter)();
    const [dialogOpen, setDialogOpen] = (0,react.useState)(false);
    CreateProjectButton_fileLog.log("[CreateProjectButton] 渲染, dialogOpen=".concat(dialogOpen));
    const handleOpenDialog = ()=>{
        CreateProjectButton_fileLog.log("[CreateProjectButton] 打开类别选择对话框");
        setDialogOpen(true);
    };
    const handleCloseDialog = ()=>{
        CreateProjectButton_fileLog.log("[CreateProjectButton] 关闭类别选择对话框");
        setDialogOpen(false);
    };
    const handleSelectCategory = async (category)=>{
        CreateProjectButton_fileLog.log("[CreateProjectButton] 用户选择类别: ".concat(category));
        const project = (0,src/* createProjectByCategory */.ZX)(category);
        CreateProjectButton_fileLog.log("[CreateProjectButton] 创建 project, ulid=".concat(project.ulid, ", category=").concat(project.category));
        // 如果是 ScriptRunner，添加一个 script action
        if (category === src/* ProjectCategory */.U2.ScriptRunner) {
            var _project_children, _triggerActionGroup_children;
            CreateProjectButton_fileLog.log("[CreateProjectButton] ScriptRunner: 添加 script action");
            const triggerActionGroup = (_project_children = project.children) === null || _project_children === void 0 ? void 0 : _project_children[0];
            if (!triggerActionGroup) {
                CreateProjectButton_fileLog.error("[CreateProjectButton] triggerActionGroup is undefined");
                return;
            }
            CreateProjectButton_fileLog.log("[CreateProjectButton] triggerActionGroup.ulid=".concat(triggerActionGroup.ulid));
            const triggerAction = (_triggerActionGroup_children = triggerActionGroup.children) === null || _triggerActionGroup_children === void 0 ? void 0 : _triggerActionGroup_children[0];
            if (!triggerAction) {
                CreateProjectButton_fileLog.error("[CreateProjectButton] triggerAction is undefined");
            } else {
                const actionGroup = triggerAction.actionGroup;
                if (actionGroup) {
                    const scriptAction = project_v2_ext_src/* actionScriptUtils */.xC.createDefaultData();
                    CreateProjectButton_fileLog.log("[CreateProjectButton] 创建 scriptAction:", JSON.stringify(scriptAction));
                    // 修改：只维护children（存储完整对象），list由后端维护
                    if (!actionGroup.children) {
                        actionGroup.children = [];
                    }
                    actionGroup.children.push(scriptAction);
                    CreateProjectButton_fileLog.log("[CreateProjectButton] actionGroup.children.length after: ".concat(actionGroup.children.length));
                }
            }
        }
        src/* projectStore */.DO.addDraft(project);
        CreateProjectButton_fileLog.log("[CreateProjectButton] project 已添加到 draft store");
        // 构建跳转路径
        let path = "/project-editor?ulid=".concat(project.ulid);
        // 如果是 QuickAction，添加 isNew 参数，用于在编辑器中判断是否需要跳转到 action-list
        if (category === src/* ProjectCategory */.U2.QuickAction) {
            path += '&isNew=true';
            CreateProjectButton_fileLog.log("[CreateProjectButton] QuickAction: 添加 isNew 参数");
        }
        CreateProjectButton_fileLog.log("[CreateProjectButton] 准备跳转到: ".concat(path));
        await router.prefetch(path);
        router.push(path);
        setDialogOpen(false);
    };
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("span", {
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Button_Button/* default */.A, {
                "data-id": "create-project-button.b79975b3-cc10-4e3e-bc05-478a98c925b6",
                "data-typeof-create-project-id": "create-project-btn-from-ui-components-create-project-button",
                id: "typeof-create-project-id-create-project-btn-from-ui-components-create-project-button",
                "data-testid": "CreateProjectButton__button__01JFXYZ7K8M2N3P4Q5R6S7T8",
                "data-test-comment": "创建项目按钮，点击后打开项目类别选择对话框",
                onClick: handleOpenDialog,
                children: t("content.create")
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(ProjectCategorySelectDialog, {
                open: dialogOpen,
                onClose: handleCloseDialog,
                onSelect: handleSelectCategory
            })
        ]
    });
};

;// ../../libs/droid/project-v2-ui/src/utils/projectUtils.ts
const projectUtils = {
    getProjectName: (project)=>{
        var _project_ulid, _project_ulid1;
        return (project === null || project === void 0 ? void 0 : project.localName) || (project === null || project === void 0 ? void 0 : project.name) || (project === null || project === void 0 ? void 0 : (_project_ulid1 = project.ulid) === null || _project_ulid1 === void 0 ? void 0 : _project_ulid1.slice((project === null || project === void 0 ? void 0 : (_project_ulid = project.ulid) === null || _project_ulid === void 0 ? void 0 : _project_ulid.length) - 8)) || '';
    }
};

// EXTERNAL MODULE: ../../libs/droid/project-v2-ui/src/utils/runProject.ts + 5 modules
var runProject = __webpack_require__(41514);
// EXTERNAL MODULE: ../../libs/fanfanlo/src/mui/dialog/ButtonConfirm.tsx
var ButtonConfirm = __webpack_require__(15728);
;// ../../libs/droid/project-v2-ui/src/ui/components/DeleteProjectButton.tsx







function DeleteProjectButton() {
    const { t } = (0,dist_es/* useTranslation */.Bd)("droid-project-v2-ui/ui/components/content");
    const project = (0,react.useContext)(src/* ProjectContext */.vz);
    const projectUlid = project.ulid;
    const handleDelete = ()=>{
        src/* projectStore */.DO.removeProject(projectUlid);
    };
    const content = /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box_Box/* default */.A, {
        style: {
            textAlign: 'center'
        },
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                style: {
                    color: "#FF0000"
                },
                children: project.name
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)("br", {}),
            /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                children: t('content.confirmDelete')
            })
        ]
    });
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(jsx_runtime.Fragment, {
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(ButtonConfirm/* ButtonConfirm */.b, {
            title: t('content.title'),
            content: content,
            onConfirm: handleDelete,
            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Button_Button/* default */.A, {
                "data-testid": "DeleteProjectButton__deleteButton__01JFXYZU1J5K6L7M8N9O0P1Q2",
                "data-test-comment": "删除项目按钮，点击后弹出确认对话框，确认后删除项目",
                id: "project-simple-title-list-del-btn",
                "data-id": "project-simple-title-list-del-btn",
                children: t('content.delete')
            })
        })
    });
}

// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+icons-material@6.4.12_@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_re_5ewkm5t5g27pzq5tz62v6ktvti/node_modules/@mui/icons-material/esm/PlayArrow.js
var PlayArrow = __webpack_require__(13108);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+icons-material@6.4.12_@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_re_5ewkm5t5g27pzq5tz62v6ktvti/node_modules/@mui/icons-material/esm/Stop.js
var Stop = __webpack_require__(40509);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+icons-material@6.4.12_@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_re_5ewkm5t5g27pzq5tz62v6ktvti/node_modules/@mui/icons-material/esm/Settings.js
var Settings = __webpack_require__(31480);
;// ../../libs/droid/project-v2-ui/src/ui/project/ProjectUI.tsx














const ProjectUI_fileLog = new Log/* Log */.tG(false, 'ProjectUI_f');
// fileLog.pause = true;  // 注释掉：允许日志输出
// fileLog.childrenPaused = true;  // 注释掉：允许子日志输出
function ProjectName(param) {
    let { project } = param;
    const router = (0,next_router.useRouter)();
    const { t } = (0,dist_es/* useTranslation */.Bd)('droid-project/project/ui/project/content');
    const [isRunning, setIsRunning] = (0,react.useState)(false);
    (0,react.useEffect)(()=>{
        const fnLog = ProjectUI_fileLog.sub(false, 'ProjectName_useEffect_fn');
        fnLog.pause = true; // 注释掉：允许日志输出
        fnLog.log('[ProjectName] useEffect 初始化');
        fnLog.log('[ProjectName] project.ulid:', project.ulid);
        const projectUlid = project.ulid;
        const hasProjectUlid = projectUlid ? true : false;
        fnLog.log('[ProjectName] 是否有projectUlid:', hasProjectUlid);
        if (!hasProjectUlid) {
            fnLog.log('[ProjectName] projectUlid为空,跳过初始化');
            return;
        }
        try {
            fnLog.log('[ProjectName] 调用 RhinoManager.isRunning 检查初始状态');
            const script = '\n            com.fanfanlo.droidlib.auto.rhino.RhinoManager.isRunning("'.concat(projectUlid, '")\n            ');
            const { javaResultString } = AutoWebViewJs/* autoWebViewJs */.yx.callScript(script);
            fnLog.log('[ProjectName] RhinoManager.isRunning 返回:', javaResultString);
            const isRunning = (javaResultString === null || javaResultString === void 0 ? void 0 : javaResultString.toString()) == 'true';
            fnLog.log('[ProjectName] 初始运行状态:', isRunning);
            setIsRunning(isRunning);
        } catch (error) {
            fnLog.log('[ProjectName] 调用 isRunning 异常:', error);
        }
        const eventNameOn = "project_".concat(projectUlid, "_running_on");
        const eventNameOff = "project_".concat(projectUlid, "_running_off");
        fnLog.log('[ProjectName] 监听on事件:', eventNameOn);
        fnLog.log('[ProjectName] 监听off事件:', eventNameOff);
        const handleRunningOn = (event)=>{
            fnLog.log('[ProjectName] 收到running_on事件');
            fnLog.log('[ProjectName] event:', event);
            fnLog.log('[ProjectName] 更新运行状态为: true');
            setIsRunning(true);
        };
        const handleRunningOff = (event)=>{
            fnLog.log('[ProjectName] 收到running_off事件');
            fnLog.log('[ProjectName] event:', event);
            fnLog.log('[ProjectName] 更新运行状态为: false');
            setIsRunning(false);
        };
        fnLog.log('[ProjectName] 注册on事件监听器');
        window.addEventListener(eventNameOn, handleRunningOn);
        fnLog.log('[ProjectName] 注册off事件监听器');
        window.addEventListener(eventNameOff, handleRunningOff);
        return ()=>{
            fnLog.log('[ProjectName] useEffect 清理');
            fnLog.log('[ProjectName] 移除on事件监听器:', eventNameOn);
            window.removeEventListener(eventNameOn, handleRunningOn);
            fnLog.log('[ProjectName] 移除off事件监听器:', eventNameOff);
            window.removeEventListener(eventNameOff, handleRunningOff);
        };
    }, [
        project.ulid
    ]);
    async function onRunClick() {
        const fnLog = ProjectUI_fileLog.sub(false, 'onRunClick_fn');
        // fnLog.pause = true;  // 注释掉：允许日志输出
        fnLog.log('[onRunClick] 开始运行项目');
        fnLog.log('[onRunClick] project.ulid:', project.ulid);
        fnLog.log('[onRunClick] project.name:', project.name);
        try {
            const result = await (0,runProject/* runProject */.t)(project);
            fnLog.log('[onRunClick] runProject 返回结果:', result);
        } catch (error) {
            fnLog.log('[onRunClick] runProject 执行异常:', error);
        }
    }
    async function onStopClick() {
        const fnLog = ProjectUI_fileLog.sub(false, 'onStopClick_fn');
        // fnLog.pause = true;  // 注释掉：允许日志输出
        fnLog.log('[onStopClick] 开始停止项目');
        fnLog.log('[onStopClick] project.ulid:', project.ulid);
        const projectUlid = project.ulid;
        const hasProjectUlid = projectUlid ? true : false;
        fnLog.log('[onStopClick] 是否有projectUlid:', hasProjectUlid);
        if (!hasProjectUlid) {
            fnLog.log('[onStopClick] projectUlid为空,无法停止');
            return;
        }
        try {
            const script = '\n            com.fanfanlo.droidlib.auto.rhino.JsRhinoManager.jsCallStopById("'.concat(projectUlid, '")\n            ');
            fnLog.log('[onStopClick] 调用stopById脚本', script);
            const { javaResultString } = AutoWebViewJs/* autoWebViewJs */.yx.callScript(script);
            fnLog.log('[onStopClick] RhinoManager.stopById 返回结果:', javaResultString);
        } catch (error) {
            fnLog.log('[onStopClick] stopById 执行异常:', error);
        }
    }
    async function onToggleRunClick() {
        const fnLog = ProjectUI_fileLog.sub(false, 'onToggleRunClick_fn');
        // fnLog.pause = true;  // 注释掉：允许日志输出
        fnLog.log('[onToggleRunClick] 切换运行状态');
        fnLog.log('[onToggleRunClick] 当前isRunning:', isRunning);
        const currentIsRunning = isRunning;
        fnLog.log('[onToggleRunClick] currentIsRunning值:', currentIsRunning);
        if (currentIsRunning) {
            fnLog.log('[onToggleRunClick] 当前正在运行,准备停止');
            await onStopClick();
        } else {
            fnLog.log('[onToggleRunClick] 当前未运行,准备启动');
            await onRunClick();
        }
    }
    function edit() {
        const path = "/project-editor?ulid=".concat(project.ulid);
        router.push(path, undefined, {
            shallow: true
        });
    }
    function openSettings() {
        const fnLog = ProjectUI_fileLog.sub(false, 'openSettings_fn');
        // fnLog.pause = true;  // 注释掉：允许日志输出
        fnLog.log('[openSettings] 打开设置页面');
        fnLog.log('[openSettings] project.ulid:', project.ulid);
        const currentPath = router.asPath;
        fnLog.log('[openSettings] 当前路径:', currentPath);
        const settingsPath = "/project-settings?projectUlid=".concat(project.ulid, "&backPath=").concat(encodeURIComponent(currentPath));
        fnLog.log('[openSettings] 跳转到:', settingsPath);
        router.push(settingsPath, undefined, {
            shallow: true
        });
    }
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(Grid2/* default */.A, {
        container: true,
        spacing: 2,
        sx: {
            width: "100%"
        },
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Grid2/* default */.A, {
                size: "grow",
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                    children: projectUtils.getProjectName(project)
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)(Grid2/* default */.A, {
                container: true,
                spacing: 2,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Button_Button/* default */.A, {
                        "data-testid": "ProjectUI__toggleRunButton__01JFXYZY5N9O0P1Q2R3S4T5U6",
                        ...src/* childToProjectDataUtils */.mR.getProjectElementsId({
                            project
                        }, isRunning ? 'project-list-stop-btn' : 'project-list-run-btn'),
                        "data-listof-project-list-btn-id": project.ulid,
                        id: "project-simple-title-list-toggle-btn",
                        "data-id": "project-simple-title-list-toggle-btn",
                        onClick: onToggleRunClick,
                        color: isRunning ? "error" : "primary",
                        startIcon: isRunning ? /*#__PURE__*/ (0,jsx_runtime.jsx)(Stop/* default */.A, {}) : /*#__PURE__*/ (0,jsx_runtime.jsx)(PlayArrow/* default */.A, {}),
                        children: isRunning ? t('content.project.stop') : t('content.project.run')
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Button_Button/* default */.A, {
                        "data-testid": "ProjectUI__editButton__01JFXYZZ6O0P1Q2R3S4T5U6V7",
                        ...src/* childToProjectDataUtils */.mR.getProjectElementsId({
                            project
                        }, 'project-list-edit-btn'),
                        "data-listof-project-list-edit-btn-id": project.ulid,
                        id: "project-simple-title-list-edit-btn",
                        "data-id": "project-simple-title-list-edit-btn",
                        onClick: edit,
                        children: t('content.project.edit')
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Button_Button/* default */.A, {
                        "data-testid": "ProjectUI__settingsButton__01JFXYZY5N9O0P1Q2R3S4T5U7",
                        ...src/* childToProjectDataUtils */.mR.getProjectElementsId({
                            project
                        }, 'project-list-settings-btn'),
                        "data-listof-project-list-settings-btn-id": project.ulid,
                        id: "project-simple-title-list-settings-btn",
                        "data-id": "project-simple-title-list-settings-btn",
                        onClick: openSettings,
                        startIcon: /*#__PURE__*/ (0,jsx_runtime.jsx)(Settings/* default */.A, {}),
                        children: t('content.project.settings')
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(DeleteProjectButton, {})
                ]
            })
        ]
    });
}
function ProjectUI(param) {
    let { project } = param;
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(src/* ProjectContext */.vz.Provider, {
        value: project,
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Box_Box/* default */.A, {
            sx: {
                width: "100%",
                backgroundColor: "#f0f0f0",
                padding: 1
            },
            "data-ulid": project.ulid,
            ...src/* childToProjectDataUtils */.mR.getProjectElementsId({
                project
            }),
            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(ProjectName, {
                project: project
            })
        })
    });
}

;// ../../libs/droid/project-v2-ui/src/ui/projects/ProjectsInfoItemUI.tsx








function ProjectsTitle() {
    const { t } = (0,dist_es/* useTranslation */.Bd)('droid-project/project/ui/projects/content');
    // const v = use(loadI18nValue('droid-project/project/ui/projects/content', 'content.projects'))
    // console.log('ttttttttttttttttttttttt', v, 'tttt', t)
    return /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)("h4", {
            children: t('content.projects')
        })
    });
}
function ProjectList(param) {
    let { projects } = param;
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(List/* default */.A, {
        sx: {
            width: "100%"
        },
        children: projects.length > 0 && projects.map((project)=>/*#__PURE__*/ (0,jsx_runtime.jsx)(ListItem/* default */.Ay, {
                sx: {
                    width: "100%"
                },
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(ProjectUI, {
                    project: project
                }, project.ulid)
            }, project.ulid))
    });
}
function Projects() {
    const { t } = (0,dist_es/* useTranslation */.Bd)('droid-project/project/ui/projects/content');
    const [projects, setProjects] = (0,react.useState)(src/* projectStore */.DO.getListCopy());
    (0,react.useEffect)(()=>{
        const unsub = (0,watchUpdates/* watchUpdates */.c)(src/* projectStore */.DO.list, ()=>{
            setProjects(src/* projectStore */.DO.getListCopy());
        });
        return ()=>{
            unsub();
        };
    }, []);
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box_Box/* default */.A, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(CreateProjectButton, {}),
            projects.length == 0 && /*#__PURE__*/ (0,jsx_runtime.jsx)(Box_Box/* default */.A, {
                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box_Box/* default */.A, {
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                            children: t('content.noProjects')
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                            children: t('content.orFindFromMarket')
                        })
                    ]
                })
            }),
            projects.length > 0 && /*#__PURE__*/ (0,jsx_runtime.jsx)(ProjectList, {
                projects: projects
            })
        ]
    });
}
function ProjectsUI() {
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box_Box/* default */.A, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(ProjectsTitle, {}),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Projects, {})
        ]
    });
}

;// ./src/components/browser/OpenBrowserButton.tsx




function OpenBrowserButton(param) {
    let { url, name } = param;
    const { t } = (0,es/* useTranslation */.Bd)('homepage/components/browser/content');
    const onClick = ()=>{
        const script = '\n        com.fanfanlo.lib.browser.BrowserLauncher.openTutorialUrl("'.concat(url, '")\n        ');
        AutoWebViewJs/* autoWebViewJs */.yx.callScript(script);
    };
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(jsx_runtime.Fragment, {
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Button_Button/* default */.A, {
            onClick: onClick,
            "data-testid": "OpenBrowserButton__openButton__01JG2B0080",
            "data-test-comment": "打开浏览器按钮，点击后在系统浏览器中打开指定URL",
            children: name || t("OpenBrowserButton.buttonName")
        })
    });
}
function OpenBrowserButtonBox(params) {
    return /*#__PURE__*/ _jsx(_Fragment, {
        children: /*#__PURE__*/ _jsx(Box, {
            children: /*#__PURE__*/ _jsx(OpenBrowserButton, {
                url: params.url,
                name: params.name
            })
        })
    });
}

;// ./src/components/browser/data.ts

const docUrl = (()=>{
    switch(env/* publicRuntimeConfig */.OT.region){
        case env/* Region */.Tp.GLOBAL:
            switch(env/* publicRuntimeConfig */.OT.env){
                case env/* AppEnv */.H.Dev:
                    return 'http://192.168.177.180:10222/';
                case env/* AppEnv */.H.Prod:
                    return 'https://droid-docs.vercel.app/';
                default:
                    return 'https://droid-docs.vercel.app/';
            }
        case env/* Region */.Tp.CN:
            return 'http://192.168.177.180:10222/';
        default:
            return 'https://droid-docs.vercel.app/';
    }
})();
const browserConf = {
    docUrl
};
const browserUtils = {
    getUrl: (path)=>{
        return "".concat(docUrl).concat(path);
    }
};

;// ./src/components/browser/DocMainPage.tsx




function DocMainPage() {
    const { t } = (0,es/* useTranslation */.Bd)('homepage/components/browser/content');
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(OpenBrowserButton, {
        url: browserUtils.getUrl(""),
        name: t("DocMainPage.mainPage")
    });
}

// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/FormControlLabel/FormControlLabel.js + 1 modules
var FormControlLabel = __webpack_require__(21069);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/Checkbox/Checkbox.js + 4 modules
var Checkbox = __webpack_require__(22653);
// EXTERNAL MODULE: ../../libs/fanfanlo/src/translation/TranslationGlobalData.ts
var TranslationGlobalData = __webpack_require__(69753);
;// ../../libs/fanfanlo/src/translation/AutoTranslateToggle.tsx







// 文件级别log
const AutoTranslateToggle_fileLog = new Log/* Log */.tG(false, 'AutoTranslateToggle_file');
AutoTranslateToggle_fileLog.pause = true;
/**
 * 自动翻译开关组件
 * - 可以显示为按钮或复选框
 * - 切换translationGlobalConfig.auto
 */ function AutoTranslateToggle(props) {
    const uiLog = AutoTranslateToggle_fileLog.sub(false, 'AutoTranslateToggle_ui');
    uiLog.pause = true;
    const { variant = 'button', className = '' } = props;
    // 监听全局auto配置
    const [auto] = (0,useProxyWatch/* useProxyWatch */.x)(TranslationGlobalData/* translationGlobalConfig */.$, 'auto', TranslationGlobalData/* translationGlobalConfig */.$.auto);
    // 使用i18n
    const { t } = (0,es/* useTranslation */.Bd)('fanfanlo/translation/content');
    const handleToggle = ()=>{
        const fnLog = uiLog.sub(false, 'handleToggle_fn');
        fnLog.pause = true;
        const newAuto = !auto;
        fnLog.log('toggle auto', {
            from: auto,
            to: newAuto
        });
        TranslationGlobalData/* translationGlobalConfig */.$.auto = newAuto;
    };
    uiLog.log('render', {
        variant,
        auto
    });
    if (variant === 'checkbox') {
        return /*#__PURE__*/ (0,jsx_runtime.jsx)(FormControlLabel/* default */.A, {
            className: className,
            control: /*#__PURE__*/ (0,jsx_runtime.jsx)(Checkbox/* default */.A, {
                "data-testid": "AutoTranslateToggle__checkbox__01JFXYZAO4O5P6Q7R8S9T0U1",
                checked: auto,
                onChange: handleToggle
            }),
            label: t('AutoTranslateToggle.autoTranslate')
        });
    } else {
        return /*#__PURE__*/ (0,jsx_runtime.jsx)(Button_Button/* default */.A, {
            "data-testid": "AutoTranslateToggle__button__01JFXYZAP5P6Q7R8S9T0U1V2",
            className: className,
            variant: auto ? 'contained' : 'outlined',
            onClick: handleToggle,
            children: auto ? t('AutoTranslateToggle.disableAutoTranslate') : t('AutoTranslateToggle.enableAutoTranslate')
        });
    }
}

;// ./src/components/page/home/HomeGlobalDevContent.tsx









function HomeGlobalDevContent() {
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(jsx_runtime.Fragment, {
        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box_Box/* default */.A, {
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsx)(NotificationListenerPanel_NotificationListenerPanel, {}),
                /*#__PURE__*/ (0,jsx_runtime.jsx)(AndroidFloatWindowLink_AndroidFloatWindowLink, {}),
                /*#__PURE__*/ (0,jsx_runtime.jsx)(Box_Box/* default */.A, {
                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(open_a11y_node_button_OpenA11yNodeButton, {})
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)(DocMainPage, {}),
                /*#__PURE__*/ (0,jsx_runtime.jsx)(Box_Box/* default */.A, {
                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(KillSelf_KillSelf, {})
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)(ProjectsUI, {}),
                /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(AutoTranslateToggle, {
                        variant: "checkbox"
                    })
                })
            ]
        })
    });
}

;// ./src/components/page/home/HomeGlobalStagingContent.tsx

function HomeGlobalStagingContent() {
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(jsx_runtime.Fragment, {
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
            children: "HomeGlobalStagingContent"
        })
    });
}

;// ./src/components/page/home/HomeGlobalProdContent.tsx








function HomeGlobalProdContent() {
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box_Box/* default */.A, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(NotificationListenerPanel_NotificationListenerPanel, {}),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(AndroidFloatWindowLink_AndroidFloatWindowLink, {}),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Box_Box/* default */.A, {
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(open_a11y_node_button_OpenA11yNodeButton, {})
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(DocMainPage, {}),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Box_Box/* default */.A, {
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(KillSelf_KillSelf, {})
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(ProjectsUI, {})
        ]
    });
}

;// ./src/components/page/home/HomeContent.tsx





function Global() {
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
        children: [
            env/* publicRuntimeConfig */.OT.env === env/* AppEnv */.H.Dev && /*#__PURE__*/ (0,jsx_runtime.jsx)(HomeGlobalDevContent, {}),
            env/* publicRuntimeConfig */.OT.env === env/* AppEnv */.H.Staging && /*#__PURE__*/ (0,jsx_runtime.jsx)(HomeGlobalStagingContent, {}),
            env/* publicRuntimeConfig */.OT.env === env/* AppEnv */.H.Prod && /*#__PURE__*/ (0,jsx_runtime.jsx)(HomeGlobalProdContent, {})
        ]
    });
}
function Cn() {
    return /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
        children: "cn"
    });
}
function HomeContent() {
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
        children: [
            env/* publicRuntimeConfig */.OT.region === "global" && /*#__PURE__*/ (0,jsx_runtime.jsx)(Global, {}),
            env/* publicRuntimeConfig */.OT.region === "zh-cn" && /*#__PURE__*/ (0,jsx_runtime.jsx)(Cn, {})
        ]
    });
}

;// ./src/components/page/markets-dev-settings/open-link-button/OpenLinkButton.tsx




function MarketsDevSettingsOpenLinkButton() {
    const router = useRouter();
    const { t } = useTranslation('homepage/components/page/markets-dev-settings/open-link-button/content');
    async function onClick() {
        const bl = await router.push("/markets-dev-settings");
    }
    return /*#__PURE__*/ _jsx(_Fragment, {
        children: /*#__PURE__*/ _jsx(Button, {
            onClick: onClick,
            "data-testid": "MarketsDevSettingsOpenLinkButton__openButton__01JFQX8K9V",
            "data-test-comment": "打开市场开发设置页面按钮，点击后导航到市场开发设置页面",
            children: t("content.name")
        })
    });
}
function OpenLinkButton_MarketsDevSettingsLineOpenLinkButton() {
    return /*#__PURE__*/ _jsx(_Fragment, {
        children: /*#__PURE__*/ _jsx(Box, {
            sx: {
                mt: 2,
                mb: 2
            },
            children: /*#__PURE__*/ _jsx(MarketsDevSettingsOpenLinkButton, {})
        })
    });
}

// EXTERNAL MODULE: ./src/components/screen-recognition/TextRecognitionControl.module.css
var TextRecognitionControl_module = __webpack_require__(29203);
;// ./src/components/screen-recognition/TextRecognitionControl.tsx



// 修改：导入语句已从 './TextRecognitionControl.css' 更改为 CSS 模块


const TextRecognitionControl_fileLog = new Log/* Log */.tG(false, 'TextRecognitionControl.tsx');
/**
 * 文字识图控制组件
 *
 * 功能：
 * 1. 启动/停止屏幕识图
 * 2. 配置识图匹配规则（正则或JS函数）
 * 3. 监听识图事件和匹配事件
 * 4. 显示识图状态和匹配结果
 */ const TextRecognitionControl_TextRecognitionControl = ()=>{
    const uiLog = TextRecognitionControl_fileLog.sub(false, 'TextRecognitionControl_ui');
    const { t } = useTranslation('homepage/components/screen-recognition/content');
    // 公共事件名称
    const EVENT_RECOGNITION_STARTED = 'screen_recognition_started';
    const EVENT_RECOGNITION_START_FAILED = 'screen_recognition_start_failed';
    const EVENT_RECOGNITION_STOPPED = 'screen_recognition_stopped';
    const EVENT_RECOGNITION_STOP_FAILED = 'screen_recognition_stop_failed';
    // 私有事件名称
    const PRIVATE_EVENT_START_SUCCESS = 'text_recognition_start_success';
    const PRIVATE_EVENT_START_FAILED = 'text_recognition_start_failed';
    const PRIVATE_EVENT_STOP_SUCCESS = 'text_recognition_stop_success';
    const PRIVATE_EVENT_STOP_FAILED = 'text_recognition_stop_failed';
    // 状态
    const [isRunning, setIsRunning] = useState(false);
    const [matchResults, setMatchResults] = useState([]);
    const [useRegex, setUseRegex] = useState(true);
    const [regexPatterns, setRegexPatterns] = useState('');
    const [jsFunction, setJsFunction] = useState('');
    const [eventName, setEventName] = useState('text_matched');
    const [lastMatchedText, setLastMatchedText] = useState('');
    const [statusMessage, setStatusMessage] = useState('');
    // 处理启动识图
    const handleStart = useCallback(()=>{
        const effLog = uiLog.sub(false, 'handleStart_fn');
        effLog.info('TextRecognitionControl: 启动屏幕识图');
        try {
            // 构建匹配配置
            const config = {
                eventName: eventName
            };
            if (useRegex && regexPatterns) {
                config.regexPatterns = regexPatterns.split('\n').filter((p)=>p.trim());
            } else if (!useRegex && jsFunction) {
                config.jsFn = jsFunction;
            } else {
                setStatusMessage(t('TextRecognitionControl.errorNoConfig'));
                return;
            }
            const configJson = JSON.stringify(config);
            effLog.info('TextRecognitionControl: 配置JSON', configJson);
            // 调用 Android 接口启动识图
            const script = "\n      com.fanfanlo.lib.screenrecorder.ScreenRecognitionController.start(\n        '".concat(configJson, "',\n        '").concat(EVENT_RECOGNITION_STARTED, "',\n        '").concat(EVENT_RECOGNITION_START_FAILED, "'\n      );\n      ");
            effLog.info('TextRecognitionControl: 调用启动脚本', script);
            autoWebViewJs.callScript(script);
        } catch (error) {
            effLog.error('TextRecognitionControl: 启动异常', error);
            setStatusMessage(t('TextRecognitionControl.startException'));
        }
    }, [
        useRegex,
        regexPatterns,
        jsFunction,
        eventName,
        t
    ]);
    // 处理停止识图
    const handleStop = useCallback(()=>{
        const effLog = uiLog.sub(false, 'handleStop_fn');
        effLog.info('TextRecognitionControl: 停止屏幕识图');
        try {
            const script = "\n      com.fanfanlo.lib.screenrecorder.ScreenRecognitionController.stop('".concat(PRIVATE_EVENT_STOP_SUCCESS, "', '").concat(PRIVATE_EVENT_STOP_FAILED, "');");
            autoWebViewJs.callScript(script);
        } catch (error) {
            effLog.error('TextRecognitionControl: 停止异常', error);
            setStatusMessage(t('TextRecognitionControl.stopException'));
        }
    }, [
        t
    ]);
    // 检查识图状态
    const checkRunningStatus = useCallback(()=>{
        const effLog = uiLog.sub(false, 'checkRunningStatus_fn');
        try {
            const script = "\n      com.fanfanlo.lib.screenrecorder.ScreenRecognitionController.isRunning();";
            const { javaResultString, errMsg } = autoWebViewJs.callScript(script);
            if (errMsg) {
                effLog.warn('TextRecognitionControl: 检查状态脚本调用异常', errMsg);
                return;
            }
            const running = javaResultString === 'true';
            setIsRunning(running);
            effLog.info('TextRecognitionControl: 识图状态 -', running);
        } catch (error) {
            effLog.warn('TextRecognitionControl: 检查状态异常', error);
        }
    }, []);
    // 事件监听
    useEffect(()=>{
        const effLog = uiLog.sub(false, 'useEffect_eventListeners');
        effLog.info('TextRecognitionControl: 设置事件监听');
        // 私有事件回调
        const onPrivateStartSuccess = ()=>{
            effLog.info('TextRecognitionControl: 私有事件 - 启动成功');
            effLog.info('TextRecognitionControl: 识图已启动');
            setIsRunning(true);
            setStatusMessage(t('TextRecognitionControl.recognitionStarted'));
            setMatchResults([]);
        };
        const onPrivateStartFailed = ()=>{
            var _customEvent_detail;
            effLog.warn('TextRecognitionControl: 私有事件 - 启动失败');
            const customEvent = event;
            const error = ((_customEvent_detail = customEvent.detail) === null || _customEvent_detail === void 0 ? void 0 : _customEvent_detail.error) || '未知错误';
            effLog.error('TextRecognitionControl: 启动失败 -', error);
            setStatusMessage("".concat(t('TextRecognitionControl.startFailed'), ": ").concat(error));
        };
        const onPrivateStopSuccess = ()=>{
            effLog.info('TextRecognitionControl: 私有事件 - 停止成功');
            effLog.info('TextRecognitionControl: 识图已停止');
            setIsRunning(false);
            setStatusMessage(t('TextRecognitionControl.recognitionStopped'));
        };
        const onPrivateStopFailed = ()=>{
            var _customEvent_detail;
            effLog.warn('TextRecognitionControl: 私有事件 - 停止失败');
            const customEvent = event;
            const error = ((_customEvent_detail = customEvent.detail) === null || _customEvent_detail === void 0 ? void 0 : _customEvent_detail.error) || '未知错误';
            effLog.error('TextRecognitionControl: 停止失败 -', error);
            setStatusMessage("".concat(t('TextRecognitionControl.stopFailed'), ": ").concat(error));
        };
        // 文字匹配事件回调
        const onTextMatched = (event1)=>{
            const customEvent = event1;
            const matchData = customEvent.detail;
            effLog.info('TextRecognitionControl: 文字匹配成功 -', matchData);
            setLastMatchedText((matchData === null || matchData === void 0 ? void 0 : matchData.matchedText) || '');
            if (matchData) {
                setMatchResults((prev)=>[
                        ...prev.slice(-9),
                        matchData
                    ]);
            }
            setStatusMessage("".concat(t('TextRecognitionControl.matched'), ": ").concat(matchData === null || matchData === void 0 ? void 0 : matchData.matchedText));
        };
        // 添加事件监听
        window.addEventListener(PRIVATE_EVENT_START_SUCCESS, onPrivateStartSuccess);
        window.addEventListener(PRIVATE_EVENT_START_FAILED, onPrivateStartFailed);
        window.addEventListener(PRIVATE_EVENT_STOP_SUCCESS, onPrivateStopSuccess);
        window.addEventListener(PRIVATE_EVENT_STOP_FAILED, onPrivateStopFailed);
        window.addEventListener(eventName, onTextMatched);
        // 检查初始状态
        checkRunningStatus();
        // 清理监听
        return ()=>{
            window.removeEventListener(PRIVATE_EVENT_START_SUCCESS, onPrivateStartSuccess);
            window.removeEventListener(PRIVATE_EVENT_START_FAILED, onPrivateStartFailed);
            window.removeEventListener(PRIVATE_EVENT_STOP_SUCCESS, onPrivateStopSuccess);
            window.removeEventListener(PRIVATE_EVENT_STOP_FAILED, onPrivateStopFailed);
            window.removeEventListener(eventName, onTextMatched);
            effLog.info('TextRecognitionControl: 清理事件监听');
        };
    }, [
        eventName,
        checkRunningStatus,
        t
    ]);
    return /*#__PURE__*/ _jsx("div", {
        className: styles.textRecognitionControl,
        children: /*#__PURE__*/ _jsxs("div", {
            className: styles.controlSection,
            children: [
                /*#__PURE__*/ _jsx("h2", {
                    children: t('TextRecognitionControl.title')
                }),
                /*#__PURE__*/ _jsxs("div", {
                    className: styles.statusDisplay,
                    children: [
                        /*#__PURE__*/ _jsxs("div", {
                            className: "".concat(styles.statusIndicator, " ").concat(isRunning ? styles.running : styles.stopped),
                            children: [
                                isRunning ? '🟢' : '🔴',
                                " ",
                                isRunning ? t('TextRecognitionControl.running') : t('TextRecognitionControl.stopped')
                            ]
                        }),
                        statusMessage && /*#__PURE__*/ _jsx("div", {
                            className: styles.statusMessage,
                            children: statusMessage
                        })
                    ]
                }),
                /*#__PURE__*/ _jsxs("div", {
                    className: styles.configSection,
                    children: [
                        /*#__PURE__*/ _jsx("h3", {
                            children: t('TextRecognitionControl.matchConfig')
                        }),
                        /*#__PURE__*/ _jsxs("div", {
                            className: styles.configType,
                            children: [
                                /*#__PURE__*/ _jsxs("label", {
                                    children: [
                                        /*#__PURE__*/ _jsx("input", {
                                            type: "radio",
                                            name: "configType",
                                            checked: useRegex,
                                            onChange: ()=>setUseRegex(true)
                                        }),
                                        t('TextRecognitionControl.useRegex')
                                    ]
                                }),
                                /*#__PURE__*/ _jsxs("label", {
                                    children: [
                                        /*#__PURE__*/ _jsx("input", {
                                            type: "radio",
                                            name: "configType",
                                            checked: !useRegex,
                                            onChange: ()=>setUseRegex(false)
                                        }),
                                        t('TextRecognitionControl.useJsFunction')
                                    ]
                                })
                            ]
                        }),
                        useRegex && /*#__PURE__*/ _jsxs("div", {
                            className: styles.regexConfig,
                            children: [
                                /*#__PURE__*/ _jsx("label", {
                                    children: t('TextRecognitionControl.regexPatterns')
                                }),
                                /*#__PURE__*/ _jsx("textarea", {
                                    value: regexPatterns,
                                    className: styles.inputField,
                                    onChange: (e)=>setRegexPatterns(e.target.value),
                                    placeholder: t('TextRecognitionControl.regexPlaceholder'),
                                    rows: 4
                                })
                            ]
                        }),
                        !useRegex && /*#__PURE__*/ _jsxs("div", {
                            className: styles.jsConfig,
                            children: [
                                /*#__PURE__*/ _jsx("label", {
                                    children: t('TextRecognitionControl.jsFunction')
                                }),
                                /*#__PURE__*/ _jsx("textarea", {
                                    className: styles.inputField,
                                    value: jsFunction,
                                    onChange: (e)=>setJsFunction(e.target.value),
                                    placeholder: t('TextRecognitionControl.jsFunctionPlaceholder'),
                                    rows: 4
                                })
                            ]
                        }),
                        /*#__PURE__*/ _jsxs("div", {
                            className: styles.eventNameConfig,
                            children: [
                                /*#__PURE__*/ _jsx("label", {
                                    children: t('TextRecognitionControl.eventName')
                                }),
                                /*#__PURE__*/ _jsx("input", {
                                    className: styles.inputField,
                                    type: "text",
                                    value: eventName,
                                    onChange: (e)=>setEventName(e.target.value),
                                    placeholder: t('TextRecognitionControl.eventNamePlaceholder')
                                })
                            ]
                        })
                    ]
                }),
                /*#__PURE__*/ _jsxs("div", {
                    className: styles.buttonGroup,
                    children: [
                        /*#__PURE__*/ _jsx("button", {
                            onClick: handleStart,
                            disabled: isRunning,
                            className: styles.btnStart,
                            children: t('TextRecognitionControl.startButton')
                        }),
                        /*#__PURE__*/ _jsx("button", {
                            onClick: handleStop,
                            disabled: !isRunning,
                            className: styles.btnStop,
                            children: t('TextRecognitionControl.stopButton')
                        })
                    ]
                }),
                lastMatchedText && /*#__PURE__*/ _jsxs("div", {
                    className: styles.matchResult,
                    children: [
                        /*#__PURE__*/ _jsx("h3", {
                            children: t('TextRecognitionControl.lastMatched')
                        }),
                        /*#__PURE__*/ _jsx("div", {
                            className: styles.matchedText,
                            children: lastMatchedText
                        })
                    ]
                }),
                matchResults.length > 0 && /*#__PURE__*/ _jsxs("div", {
                    className: styles.historyResults,
                    children: [
                        /*#__PURE__*/ _jsx("h3", {
                            children: t('TextRecognitionControl.matchHistory')
                        }),
                        /*#__PURE__*/ _jsx("div", {
                            className: styles.resultsList,
                            children: matchResults.map((result, index)=>/*#__PURE__*/ _jsxs("div", {
                                    className: styles.resultItem,
                                    children: [
                                        /*#__PURE__*/ _jsx("span", {
                                            className: styles.resultText,
                                            children: result.matchedText
                                        }),
                                        /*#__PURE__*/ _jsxs("span", {
                                            className: styles.resultPosition,
                                            children: [
                                                "[",
                                                result.startIndex,
                                                ", ",
                                                result.endIndex,
                                                "]"
                                            ]
                                        })
                                    ]
                                }, index))
                        })
                    ]
                })
            ]
        })
    });
};

// EXTERNAL MODULE: ./src/markets/markets-script-dev-lib.ts
var markets_script_dev_lib = __webpack_require__(97552);
// EXTERNAL MODULE: ../../libs/fanfanlo/dist/src/index.js
var dist_src = __webpack_require__(3200);
// EXTERNAL MODULE: ../../libs/fanfanlo/dist/src/watcher/proxyWatch.js + 2 modules
var watcher_proxyWatch = __webpack_require__(76025);
;// ./src/markets/markets-script-lib.ts

const libIndexInfo = dist_src.storeUtils.createLocalStore('markets-script-index-info', {
    defData: {
        list: []
    },
    forceReset: false
});
const lib = (0,watcher_proxyWatch/* toProxy */.I$)({});
let isInitialized = false;
function init() {
    if (isInitialized) {
        return;
    }
    isInitialized = true;
}
const marketsScriptLib = {
    lib,
    libIndexInfo,
    init
};

;// ./src/markets/markets-script-manager.ts



let markets_script_manager_isInitialized = false;
function markets_script_manager_init() {
    if (markets_script_manager_isInitialized) {
        return;
    }
    markets_script_manager_isInitialized = true;
    markets_script_dev_lib/* marketsDevScriptLib */.R.init();
    marketsScriptLib.init();
    (0,watchUpdates/* watchUpdates */.c)(markets_script_dev_lib/* marketsDevScriptLib */.R.marketDevLibData, (data)=>{
        console.log('marketsDevScriptLib.devLibInfo=', data);
        const allMarktLibData = markets_script_dev_lib/* marketsDevScriptLib */.R.marketDevLibData.allMarketLibData;
        if (!allMarktLibData) return;
        for (const html of allMarktLibData.htmls){
            marketsScriptLib.lib[html.client.ns] = html;
        }
        for (const script of allMarktLibData.resources){
            marketsScriptLib.lib[script.client.ns] = script;
        }
    });
}
const markets_script_manager_marketsScriptManager = {
    init: markets_script_manager_init
};

;// ./src/components/permissions/accessibility/AccessibilityInfo.tsx
/* __next_internal_client_entry_do_not_use__ AccessibilityInfo auto */ 






// import { useTranslation } from 'react-i18next';s


function AccessibilityInfo_AccessibilityInfo() {
    const { t } = useTranslation('homepage/components/permissions/accessibility/content');
    const [hasPermission, setHasPermission] = useState(a11yScript.hasPermission());
    const status = usePermissionStatus(hasPermission ? AndroidPermissionStatus.granted : AndroidPermissionStatus.shouldAskAgain);
    const [openTooltip, setOpenTooltip] = useState(false);
    const isActive = useTabActivity();
    const router = useRouter();
    function onSettingClick() {
        // if(!isInAndroid())return;
        autoWebViewJs.onCallOpenA11yPermission();
    }
    useEffect(()=>{
        if (!isActive) return;
        setHasPermission(a11yScript.hasPermission());
    }, [
        isActive
    ]);
    useEffect(()=>{
        if (!isInAndroid()) {
            console.log('check a11y permission in webview,but not in android');
            return;
        }
        let script = "var info =com.fanfanlo.droidlib.auto.components.webview.AutoWebViewJs.a11yModel.serviceLiveInfo;\n var s = com.fanfanlo.lib.utils.companion.gson2.toJson(info);\n s;";
        script = "var info =com.fanfanlo.droidlib.auto.components.webview.AutoWebViewJs.a11yModel.serviceLiveInfo;\n var s = com.fanfanlo.lib.utils.JsonUtil.gson2.toJson(info);\n s;";
        const info = autoWebViewJs.callScript(script);
        const bl = a11yScript.checkPermission();
    }, []);
    function onDangerPageButtonClick() {
        router.push('/a11y-danger');
    }
    return /*#__PURE__*/ _jsx(Box, {
        children: /*#__PURE__*/ _jsxs(Box, {
            children: [
                /*#__PURE__*/ _jsx("span", {
                    children: t('AccessibilityInfo.name')
                }),
                /*#__PURE__*/ _jsx("span", {
                    children: ":"
                }),
                /*#__PURE__*/ _jsx("button", {
                    onClick: onSettingClick,
                    role: "button",
                    style: {
                        marginLeft: "0.5rem",
                        marginRight: "0.5rem"
                    },
                    "data-testid": "AccessibilityInfo__settingButton__01JG2B0070",
                    "data-test-comment": "无障碍设置按钮，点击后打开系统无障碍服务设置",
                    children: t('AccessibilityInfo.setting')
                }),
                /*#__PURE__*/ _jsx("span", {
                    children: status
                }),
                /*#__PURE__*/ _jsx("span", {
                    children: hasPermission ? 'ok' : 'no'
                }),
                /*#__PURE__*/ _jsx("span", {
                    style: {
                        paddingLeft: '1rem'
                    }
                }),
                /*#__PURE__*/ _jsx(ClickAwayListener, {
                    onClickAway: ()=>setOpenTooltip(false),
                    children: /*#__PURE__*/ _jsx(Tooltip, {
                        disableFocusListener: true,
                        disableHoverListener: true,
                        disableTouchListener: true,
                        title: t("AccessibilityInfo.dangerDesc"),
                        slotProps: {
                            popper: {
                                disablePortal: true
                            }
                        },
                        open: openTooltip,
                        onOpen: ()=>setOpenTooltip(true),
                        onClose: ()=>setOpenTooltip(false),
                        children: /*#__PURE__*/ _jsxs("span", {
                            onMouseDown: ()=>setOpenTooltip(true),
                            children: [
                                /*#__PURE__*/ _jsx("span", {
                                    children: t('AccessibilityInfo.danger')
                                }),
                                /*#__PURE__*/ _jsx("span", {}),
                                /*#__PURE__*/ _jsx("span", {
                                    children: /*#__PURE__*/ _jsx(QuestionMarkIcon, {
                                        fontSize: "small",
                                        sx: {
                                            verticalAlign: 'sub'
                                        }
                                    })
                                }),
                                /*#__PURE__*/ _jsx("span", {
                                    style: {
                                        color: "red"
                                    },
                                    children: /*#__PURE__*/ _jsx(Button, {
                                        onClick: onDangerPageButtonClick,
                                        "data-testid": "AccessibilityInfo__dangerButton__01JG2B0071",
                                        "data-test-comment": "无障碍危险警告按钮，点击后导航到无障碍危险提示页面",
                                        children: "警告"
                                    })
                                })
                            ]
                        })
                    })
                })
            ]
        })
    });
}

// EXTERNAL MODULE: ./src/components/permissions/components/components.module.scss
var components_module = __webpack_require__(27998);
;// ./src/components/permissions/components/Components.tsx







function Components_PermissionCommonSetting() {
    const { t } = useTranslation('homepage/components/permissions/components/content');
    return /*#__PURE__*/ _jsx("span", {
        className: styles.permissionComponentsSpanPadding,
        children: /*#__PURE__*/ _jsx("button", {
            "data-testid": "PermissionCommonSetting__settingButton__01JG2B0077",
            "data-test-comment": "权限设置通用按钮，点击后打开对应权限的系统设置",
            children: /*#__PURE__*/ _jsx("span", {
                children: t('Components.setting')
            })
        })
    });
}
function Components_PermissionCommonNotPass() {
    const { t } = useTranslation('homepage/components/permissions/components/content');
    return /*#__PURE__*/ _jsx(_Fragment, {
        children: /*#__PURE__*/ _jsx("span", {
            className: styles.permissionComponentsSpanPadding,
            children: t('Components.notPass')
        })
    });
}
function Components_PermissionCommonPass() {
    const { t } = useTranslation('homepage/components/permissions/components/content');
    return /*#__PURE__*/ _jsx(_Fragment, {
        children: /*#__PURE__*/ _jsx("span", {
            className: styles.permissionComponentsSpanPadding,
            children: t('Components.pass')
        })
    });
}
function Components_PermissionCommonDanger(param) {
    let { desc } = param;
    const { t } = useTranslation('homepage/components/permissions/components/content');
    const [openTooltip, setOpenTooltip] = useState(false);
    return /*#__PURE__*/ _jsx("span", {
        className: styles.danger,
        children: /*#__PURE__*/ _jsx(ClickAwayListener, {
            onClickAway: ()=>setOpenTooltip(false),
            children: /*#__PURE__*/ _jsx(Tooltip, {
                disableFocusListener: true,
                disableHoverListener: true,
                disableTouchListener: true,
                title: desc,
                slotProps: {
                    popper: {
                        disablePortal: true
                    }
                },
                open: openTooltip,
                onOpen: ()=>setOpenTooltip(true),
                onClose: ()=>setOpenTooltip(false),
                children: /*#__PURE__*/ _jsxs("span", {
                    onMouseDown: ()=>setOpenTooltip(true),
                    children: [
                        /*#__PURE__*/ _jsx("span", {
                            children: t('Components.danger')
                        }),
                        /*#__PURE__*/ _jsx("span", {}),
                        /*#__PURE__*/ _jsx("span", {
                            children: /*#__PURE__*/ _jsx(QuestionMarkIcon, {
                                fontSize: "small",
                                sx: {
                                    verticalAlign: 'sub'
                                }
                            })
                        })
                    ]
                })
            })
        })
    });
}
function Components_PermissionCommonName(param) {
    let { children } = param;
    return /*#__PURE__*/ _jsx("span", {
        children: children
    });
}
function PermissionCommonDesc(param) {
    let { children } = param;
    return /*#__PURE__*/ _jsx("span", {
        children: children
    });
}

;// ./src/components/permissions/floating/FloatingInfo.tsx






function FloatingInfo_FloatingInfo() {
    const { t } = useTranslation('homepage/components/permissions/floating/content');
    const [hasPermission, setHasPermission] = useState(floatingInfo.hasPermission());
    useEffect(()=>{
        const unlisten = tabActivity.listen((activity)=>{
            setHasPermission(floatingInfo.hasPermission());
        });
        return ()=>{
            unlisten();
        };
    }, []);
    return /*#__PURE__*/ _jsxs("div", {
        children: [
            /*#__PURE__*/ _jsx(PermissionCommonName, {
                children: t('FloatingInfo.name')
            }),
            /*#__PURE__*/ _jsx("span", {
                onClick: ()=>{
                    floatingInfo.openPermission();
                },
                "data-testid": "FloatingInfo__settingButton__01JG2B0075",
                "data-test-comment": "浮窗权限设置按钮，点击后打开系统浮窗权限设置",
                children: /*#__PURE__*/ _jsx(PermissionCommonSetting, {})
            }),
            hasPermission ? /*#__PURE__*/ _jsx(PermissionCommonPass, {}) : /*#__PURE__*/ _jsx(PermissionCommonNotPass, {}),
            /*#__PURE__*/ _jsx(PermissionCommonDanger, {
                desc: t('FloatingInfo.dangerDesc')
            })
        ]
    });
}

;// ./src/components/permissions/home-page-permissions/HomePagePermissions.tsx




function HomePagePermissions_HomePagePermissions() {
    return /*#__PURE__*/ _jsxs(Box, {
        children: [
            /*#__PURE__*/ _jsx(AccessibilityInfo, {}),
            /*#__PURE__*/ _jsx(FloatingInfo, {})
        ]
    });
}

// EXTERNAL MODULE: ./src/pages/home/test-script.tsx
var test_script = __webpack_require__(43598);
;// ./src/pages/home/index.tsx




















(0,i18n_init/* i18nInit */.tV)();
function Home() {
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(AppShell/* AppShell */.G, {
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Tabbar/* TabbarContainer */.y, {
            titleConf: {
                ns: "homepage/pages/home/content",
                key: "home.title"
            },
            navBar: /*#__PURE__*/ (0,jsx_runtime.jsx)(NavBar/* NavBar */.j, {}),
            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(HomeContent, {})
        })
    });
}
function test() {
    const s = 'var script1=function(n){"use strict";return function(){function v(){return new Date().getTime()}var u={exports:{}},e={};/**\n * @license React\n * react-jsx-runtime.production.js\n *\n * Copyright (c) Meta Platforms, Inc. and affiliates.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE file in the root directory of this source tree.\n */var c=Symbol.for("react.transitional.element"),d=Symbol.for("react.fragment");function s(T,t,r){var i=null;if(r!==void 0&&(i=""+r),t.key!==void 0&&(i=""+t.key),"key"in t){r={};for(var o in t)o!=="key"&&(r[o]=t[o])}else r=t;return t=r.ref,{$$typeof:c,type:T,key:i,ref:t!==void 0?t:null,props:r}}e.Fragment=d,e.jsx=s,e.jsxs=s,u.exports=e;var l=u.exports;function a(){return l.jsx("div",{children:l.jsx("button",{children:"html生成的按钮"})})}const x={UI:a};function E(){return v()}n.components=x,n.printA=E,Object.defineProperty(n,Symbol.toStringTag,{value:"Module"})}(),n}({}); return script1;';
    const o = new Function(s)();
    o.printA();
    // console.log('cccccccccccccccomponents=', o.components)
    return o;
}
function Content() {
    const [ui, setUI] = useState(null);
    useEffect(()=>{
        if (true) {
            // console.log('has window', document.domain);
            // document.domain = window.location.hostname;
            // console.log('domain is', document.domain);
            ;
            window.sayHello = function(msg) {
                alert('child' + msg);
            };
            console.log('window say=', window.sayHello);
        }
        setTimeout(()=>{
            setUI(test().components.UI());
        }, 1000 * 5);
    }, []);
    useEffect(()=>{
        marketsScriptManager.init();
    }, []);
    return /*#__PURE__*/ _jsxs(Box, {
        children: [
            /*#__PURE__*/ _jsx(AndroidSettingsInfo, {}),
            /*#__PURE__*/ _jsx(AddExternalMarketButton, {}),
            /*#__PURE__*/ _jsx(HomePagePermissions, {}),
            /*#__PURE__*/ _jsx(NotificationListenerPanel, {}),
            /*#__PURE__*/ _jsx(TestA11y, {}),
            /*#__PURE__*/ _jsx(AndroidFloatWindowLink, {}),
            /*#__PURE__*/ _jsx(Box, {
                children: /*#__PURE__*/ _jsx(OpenA11yNodeButton, {})
            }),
            /*#__PURE__*/ _jsx(TextRecognitionControl, {}),
            /*#__PURE__*/ _jsx(TestScript, {}),
            /*#__PURE__*/ _jsx(Box, {
                children: /*#__PURE__*/ _jsx(KillSelf, {})
            }),
            /*#__PURE__*/ _jsx(MarketsDevSettingsLineOpenLinkButton, {}),
            /*#__PURE__*/ _jsx(MainPageAddButtons, {}),
            /*#__PURE__*/ _jsx("div", {})
        ]
    });
}


/***/ }),

/***/ 60471:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ AndroidPageContent)
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/react@19.1.0/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(94513);
// EXTERNAL MODULE: ../../libs/fanfanlo/src/nextjs/env/env.ts
var env = __webpack_require__(99401);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react-i18next@15.6.0_i18next@24.2.3_typescript@5.7.3__react-dom@19.1.0_react@19.1.0__react@19.1.0_typescript@5.7.3/node_modules/react-i18next/dist/es/index.js + 15 modules
var es = __webpack_require__(56137);
// EXTERNAL MODULE: ../../libs/fanfanlo/src/i18n/i18n-value-loader.ts
var i18n_value_loader = __webpack_require__(91628);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/Box/Box.js + 2 modules
var Box = __webpack_require__(92061);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/Button/Button.js + 3 modules
var Button = __webpack_require__(20872);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/Container/Container.js + 1 modules
var Container = __webpack_require__(62145);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react@19.1.0/node_modules/react/index.js
var react = __webpack_require__(94285);
;// ../../libs/app/ui/src/components/page/PageContent.tsx




function Reload() {
    if (!env/* isDev */.Cu) return /*#__PURE__*/ (0,jsx_runtime.jsx)(jsx_runtime.Fragment, {
        children: "  "
    });
    const { t } = (0,es/* useTranslation */.Bd)("app-ui/components/page/content");
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.A, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Button/* default */.A, {
                "data-testid": "PageContent__refreshButton__01aryz6s610p4z0skjq69x5pri",
                "data-test-comment": "页面刷新按钮，仅在开发环境显示，点击后刷新页面",
                onClick: ()=>{
                    window.location.reload();
                },
                children: t("PageContent.refresh")
            }),
            new Date().toLocaleString()
        ]
    });
}
const ScrollP = /*#__PURE__*/ (0,react.createContext)({
    x: 0,
    y: 0
});
let index = 0;
function PageContent(param) {
    let { children, titleConf, reload } = param;
    index++;
    const scroll = (0,react.useContext)(ScrollP);
    const clazz = "".concat(Date.now() + Math.random() * Date.now());
    (0,react.useEffect)(()=>{
        async function loadTitle() {
            if (!titleConf) return;
            let title = titleConf.title;
            if (titleConf.ns) {
                title = await (0,i18n_value_loader/* loadI18nValue */.y)(titleConf.ns, titleConf.key || "content.title");
            }
            if (!title) return;
            document.title = title;
        }
        loadTitle();
    }, []);
    (0,react.useEffect)(()=>{
        const container = document.getElementsByClassName(clazz)[0];
        if (!container) return;
        container.scrollTop = scroll.y;
        const onScroll = ()=>{
            var scrollTop = container.scrollTop;
            scroll.y = scrollTop;
        };
        container.removeEventListener('scroll', onScroll);
        container.addEventListener('scroll', onScroll, {
            passive: true
        });
        return ()=>container.removeEventListener('scroll', onScroll);
    }, [
        clazz,
        scroll
    ]);
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(Container/* default */.A, {
        className: clazz,
        sx: {
            height: '100%',
            overflow: 'auto',
            padding: "0px",
            display: 'flex',
            flexDirection: 'column'
        },
        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.A, {
            children: [
                (reload || reload == undefined) && /*#__PURE__*/ (0,jsx_runtime.jsx)(Reload, {}),
                children
            ]
        })
    });
}

;// ../../libs/app/ui/src/components/page/AndroidPageContent.tsx


function AndroidPageContent(param) {
    let { children, titleConf, reload } = param;
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(PageContent, {
        titleConf: titleConf,
        reload: reload,
        children: children
    });
}


/***/ }),

/***/ 61560:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Dl: () => (/* binding */ IMarketDevConnectEventType),
/* harmony export */   GC: () => (/* binding */ IMarketDevServerEventType),
/* harmony export */   um: () => (/* binding */ WatchResourceType)
/* harmony export */ });
/* unused harmony exports ScriptType, IMarketDevClientEmitEventType */
var ScriptType = /*#__PURE__*/ function(ScriptType) {
    // 只有一个脚本执行文件，它只在脚本列表里显示。
    // 如果要修改或者配置参数，它可以嵌入到自己的代码里
    // 或者提供新的页面路径，用router的方式打开
    // 例如router.go({url:'/script-setting', script:'function(){//code is here}', pagePath:'/all-script-setting/#your-namespace/script/script001'})
    // all-script-setting所有第三方统一页面
    // your-namespace 第三方自己的命名空间
    // url 第三方自己的js文件url，它和script二选一，优先script。
    // script 第三方自己纯代码的脚本
    // url可以设置为实时更新版本，script可以作为stable版本使用。
    // script001 第三方自己的脚本名称
    // pagePath可以挂载到你指定的路径下
    ScriptType["Script"] = "script";
    ScriptType["Market"] = "market";
    return ScriptType;
}({});
var WatchResourceType = /*#__PURE__*/ function(WatchResourceType) {
    // 这是一个js文件，加载后直接套在iframe里用即可
    WatchResourceType["Js"] = "js";
    // 这是一个html文件，直接当html加载到iframe里即可.
    WatchResourceType["Html"] = "html";
    return WatchResourceType;
}({});
var IMarketDevConnectEventType = /*#__PURE__*/ function(IMarketDevConnectEventType) {
    IMarketDevConnectEventType["getAllScripts"] = "getAllScripts";
    return IMarketDevConnectEventType;
}({});
// client用socket向server发送的消息，也就是安卓端或者是安卓端的网页向server发送的消息
var IMarketDevClientEmitEventType = /*#__PURE__*/ function(IMarketDevClientEmitEventType) {
    IMarketDevClientEmitEventType["init"] = "init";
    return IMarketDevClientEmitEventType;
}({});
// server用socket向安卓端发送的消息（本地调试也可以认为是向安卓的网页发送消息）
var IMarketDevServerEventType = /*#__PURE__*/ function(IMarketDevServerEventType) {
    IMarketDevServerEventType["update"] = "update";
    return IMarketDevServerEventType;
}({});


/***/ }),

/***/ 70679:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Ru: () => (/* binding */ i18n),
  tV: () => (/* binding */ i18nInit)
});

// UNUSED EXPORTS: default, i18nLogger, useTranslation

// EXTERNAL MODULE: ../../node_modules/.pnpm/react-i18next@15.6.0_i18next@24.2.3_typescript@5.7.3__react-dom@19.1.0_react@19.1.0__react@19.1.0_typescript@5.7.3/node_modules/react-i18next/dist/es/index.js + 15 modules
var es = __webpack_require__(56137);
;// __barrel_optimize__?names=initReactI18next!=!../../node_modules/.pnpm/react-i18next@15.6.0_i18next@24.2.3_typescript@5.7.3__react-dom@19.1.0_react@19.1.0__react@19.1.0_typescript@5.7.3/node_modules/react-i18next/dist/es/index.js


// EXTERNAL MODULE: ../../node_modules/.pnpm/i18next-browser-languagedetector@8.2.0/node_modules/i18next-browser-languagedetector/dist/esm/i18nextBrowserLanguageDetector.js
var i18nextBrowserLanguageDetector = __webpack_require__(99031);
// EXTERNAL MODULE: ../../node_modules/.pnpm/i18next-http-backend@3.0.2_encoding@0.1.13/node_modules/i18next-http-backend/esm/index.js + 2 modules
var esm = __webpack_require__(95138);
// EXTERNAL MODULE: ../../node_modules/.pnpm/i18next@24.2.3_typescript@5.7.3/node_modules/i18next/dist/esm/i18next.js
var i18next = __webpack_require__(32011);
// EXTERNAL MODULE: ../../libs/fanfanlo/src/log/Log.ts + 1 modules
var Log = __webpack_require__(89597);
// EXTERNAL MODULE: ../../libs/fanfanlo/src/utils/files-map-utils.ts
var files_map_utils = __webpack_require__(46115);
;// ../../libs/fanfanlo/src/i18n/i18n-init.ts
/* __next_internal_client_entry_do_not_use__ useTranslation,i18nLogger,i18n,i18nInit,default auto */ // 现在用的是这个文件







let fileDateVersion = '' // = getConfig().publicRuntimeConfig?.version
;
const i18nLogger = new Log/* Log */.tG(false, "i18n");
const windowHref = (()=>{
    var _window_parent;
    if (false) {}
    const u = new URL(window.location.href || ((_window_parent = window.parent) === null || _window_parent === void 0 ? void 0 : _window_parent.location.href));
    // 同域文本iframe里的页面会获取不到href，所以判断一下直接用父级的就行.
    return u.origin == null || u.origin == 'null' ? '' : u.origin;
})();
const backendOptions = {
    loadPath: function(lngs, namespaces) {
        const log = i18nLogger.sub(false, "i18n loadpath");
        log.pause = true;
        const lng = lngs[0];
        let p = "";
        // p = `/options/_locales/${lngs[0].replace("-", "_")}/messages.json`;
        // p = `/locales/zh-CN/ns1/content.json`;
        // p = `locales/${lng}/${namespaces[0]}.json?v=${fileDateVersion}`
        const ps = namespaces[0].split('/');
        ps.splice(ps.length - 1, 0, lng);
        // p = `locales/${ps.join('/')}.json?v=${fileDateVersion}`
        // p = `locales/${ps.join('/')}.json?v=${getBuildTime()}`
        p = "locales/".concat(ps.join('/'), ".json");
        log.log("lngs=", lngs);
        log.log("namespaces=", namespaces);
        log.log("p=", p);
        p = files_map_utils/* fileMapUtils */.E.getFile("/".concat(p));
        // console.log('map p=', p)
        p = "".concat(windowHref, "/").concat(p);
        return p;
    },
    parse: function(data, languages, namespaces) {
        const log = i18nLogger.sub(false, "i18n backend parse");
        log.pause = true;
        // log.log(`parrrse`, data, languages, namespaces);
        const l = JSON.parse(data);
        log.print("before set i18ndata");
        // i18nData = l as II18n;
        // log.log(`i18nData.rule.scripts.sys.rules`, i18nData.rule.scripts.sys.rules);
        log.log("parrrse", languages, namespaces);
        return l;
    }
};
const backend = new esm/* default */.A();
backend.init(null, backendOptions);
const i18n = i18next/* default */.Ay;
// export const resources: Resource = {
//   // 'zh-CN': {
//   //   translation: _.merge({}, zhCN),
//   // },
//   // en: {
//   //   translation: _.merge({}, en),
//   // },
// };
i18n.on("languageChanged", async function(lng) {
    const log = i18nLogger.sub(false, "onlanguageChanged");
    // log.pause = true;
    log.log("i18n languageChanged", lng);
// lng = "en";
// const p = `/options/_locales/${lng.replace("-", "_")}/messages.json`;
});
function i18nInit() {
    let _fileDateVersion = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : '';
    fileDateVersion = _fileDateVersion;
    i18n.use(i18nextBrowserLanguageDetector/* default */.A).use(backend).use(es/* initReactI18next */.r9).init({
        load: "currentOnly",
        // load: "all",
        // supportedLngs: ['zh-CN', 'zh-TW', 'en', 'en-GB', 'ja'],
        // resources,
        // fallbackLng: isServer ? "en" : "zh-CN",
        fallbackLng: "en",
        // fallbackLng: "zh-CN",
        // lng: "zh-CN",
        partialBundledLanguages: true,
        ns: [],
        debug: false,
        interpolation: {
            escapeValue: false
        },
        detection: {
            caches: [
                "localStorage"
            ]
        }
    });
}
i18n.on("missingKey", function(lngs, namespace, key, res) {
    console.error("i18n mssing key, lngs=%s, namespace=%s, key=%s, res=%s", lngs, namespace, key, res);
});
i18n.on("loaded", function(loaded) {
    const log = i18nLogger.sub(false, "onloaded");
    log.pause = true;
    log.log("onloaded arguments", loaded);
});
i18n.on("failedLoading", function(lng, ns, msg) {
    const log = i18nLogger.sub(false, "onfailedLoading");
    log.pause = true;
    log.log("failedLoading arguments", lng, ns, msg);
});
i18n.on("added", function() {
    console.log('added', arguments);
});
/* harmony default export */ const i18n_init = ((/* unused pure expression or super */ null && (i18n)));


/***/ }),

/***/ 73175:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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

/***/ 76025:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Ye: () => (/* binding */ getProxyObject),
  xA: () => (/* binding */ getProxyWatchRealTarget),
  I$: () => (/* binding */ toProxy)
});

// UNUSED EXPORTS: ProxyArrayStringTag, ProxyObjectStringTag, destroyProxyObject, getProxyDispatcher, getUnshellProxyTarget, isProxy, isProxyArray, isProxyObject, proxyArrayUpdateEvent, proxyUpdateAllProperties, proxyUpdateObject, proxyUpdateObjectProperties, proxyWatch

// EXTERNAL MODULE: ../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/lodash.js
var lodash = __webpack_require__(80507);
var lodash_default = /*#__PURE__*/__webpack_require__.n(lodash);
// EXTERNAL MODULE: ../../libs/fanfanlo/dist/src/dispatcher/throttle.js
var throttle = __webpack_require__(52026);
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
var object_count_utils = __webpack_require__(73175);
// EXTERNAL MODULE: ../../libs/fanfanlo/dist/src/watcher/proxyUtils.js
var proxyUtils = __webpack_require__(92228);
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
function isObject(value) {
    return value != null && typeof value == "object";
}
function isFunction(value) {
    return typeof value === "function";
}
function getProxyObject(t, dispatcher, eventMap) {
    if (!t) {
        console.trace("getProxyObject no target", t);
        throw new Error("getProxyObject no target");
    }
    if (isObject(t) == false) {
        console.trace("22getProxyObject target is not object", t);
        throw new Error("getProxyObject target is not object");
    }
    if (isFunction(t)) {}
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

/***/ 89797:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  f: () => (/* binding */ permissionUtils)
});

// EXTERNAL MODULE: ../../libs/droid/android/src/android/AutoWebViewJs.ts + 1 modules
var AutoWebViewJs = __webpack_require__(68709);
;// ../../libs/droid/android/src/android/scripts/permissions/permissions.intf.ts
var PermissionAskStatus = /*#__PURE__*/ function(PermissionAskStatus) {
    PermissionAskStatus["asking"] = "asking";
    PermissionAskStatus["granted"] = "granted";
    PermissionAskStatus["denied"] = "denied";
    return PermissionAskStatus;
}({});

// EXTERNAL MODULE: ../../libs/fanfanlo/src/log/Log.ts + 1 modules
var Log = __webpack_require__(89597);
;// ../../libs/droid/android/src/android/scripts/permissions/permissionUtils.ts



const fileLog = new Log/* Log */.tG(false, 'permissionUtils');
function checkPermissions(permissions) {
    const fnLog = fileLog.sub(false, 'checkPermissions_fn');
    const script = "\n    com.fanfanlo.lib.permission.PermissionRequestManager.checkPermissions(".concat(JSON.stringify(permissions), ");\n    ");
    const { javaResultData, javaResultString, errMsg } = AutoWebViewJs/* autoWebViewJs */.yx.callScript(script);
    fnLog.info('checkPermissions_fn javaResultData=', javaResultData, 'javaResultString=', javaResultString, 'errMsg=', errMsg);
    const result = {
        isGranted: (javaResultData === null || javaResultData === void 0 ? void 0 : javaResultData.isAllGranted) || false,
        status: (javaResultData === null || javaResultData === void 0 ? void 0 : javaResultData.isAllGranted) ? PermissionAskStatus.granted : PermissionAskStatus.asking,
        permissionResult: javaResultData
    };
    return result;
}
function ask(checkResult, permissions, completeEventName, askPermissionsBack) {
    const fnLog = fileLog.sub(false, 'ask_fn');
    const script = "\n    com.fanfanlo.lib.permission.PermissionRequestManager.requestMultiplePermissions(".concat(JSON.stringify(permissions), ', "').concat(completeEventName, '");\n    ');
    fnLog.info('script=', script);
    AutoWebViewJs/* autoWebViewJs */.yx.callScript(script);
    function onEvent() {
        fnLog.info('onEvent_fn');
        const checkResult = checkPermissions(permissions);
        askPermissionsBack(false, checkResult.isGranted, checkResult);
    }
    window.addEventListener(completeEventName, onEvent);
    function unsubListener() {
        fnLog.info('unsubListener_fn');
        window.removeEventListener(completeEventName, onEvent);
    }
    checkResult.unsubListener = unsubListener;
}
function askPermissions(permissions, completeEventName, askPermissionsBack, askPanelFunction) {
    const fnLog = fileLog.sub(false, "askPermission_fn");
    const checkResult = checkPermissions(permissions);
    fnLog.info('askPermission_fn checkResult=', checkResult);
    if (checkResult.isGranted) {
        fnLog.info("askPermission_fn checkResult.isGranted");
        return checkResult;
    }
    fnLog.info('askPermission_fn askPanelFunction=', !!askPanelFunction);
    if (askPanelFunction) {
        if (!checkResult.permissionResult) {
            fnLog.error('askPermission_fn checkResult.permissionResult is null');
            throw new Error('checkResult.permissionResult is null');
        }
        askPanelFunction(checkResult.permissionResult, (toAsk)=>{
            fnLog.info("askPermissions_fn askPanelFunction toAsk=", toAsk);
            if (toAsk) {
                ask(checkResult, permissions, completeEventName, askPermissionsBack);
            } else {
                askPermissionsBack(true, false);
            }
        });
    } else {
        ask(checkResult, permissions, completeEventName, askPermissionsBack);
    }
    return checkResult;
}
const permissionUtils = {
    askPermissions
};


/***/ }),

/***/ 92228:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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


/***/ }),

/***/ 95034:
/***/ (() => {

"use strict";
 //# sourceMappingURL=index.js.map


/***/ }),

/***/ 97552:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   R: () => (/* binding */ marketsDevScriptLib)
/* harmony export */ });
/* harmony import */ var _droid_android__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(88504);
/* harmony import */ var _fanfanlo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(57641);
/* harmony import */ var _fanfanlo__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(29498);
/* harmony import */ var _market_lib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(61560);
/* harmony import */ var _market_dev_socket__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(29121);




// 注意marketDevLibData的操作是由devLibInfo来做的
// 一定保持它俩操作的对象是同一个。
const marketDevLibData = (0,_fanfanlo__WEBPACK_IMPORTED_MODULE_1__/* .toProxy */ .I$)({});
let devLibInfo;
// = storeUtils.getNamespaceStoreWithData('devLibInfo', {defData:{}, forceReset:false});
function getMarketScriptDataNsPrefix() {
    return 'market-script-data';
}
function createMarketScriptDataNsPath(ns) {
    return "".concat(getMarketScriptDataNsPrefix(), "/").concat(ns);
}
async function writeNsAllFiles(ns, files) {
    const nsPath = createMarketScriptDataNsPath(ns);
    const oldFiles = _droid_android__WEBPACK_IMPORTED_MODULE_2__/* .autoJsStoreUtils */ .b.read(nsPath) || [];
    for (const name of Object.keys(files)){
        const index = oldFiles.indexOf(name);
        if (index > -1) {
            oldFiles.splice(index, 1);
        }
        const content = files[name];
        _droid_android__WEBPACK_IMPORTED_MODULE_2__/* .autoJsStoreUtils */ .b.write("".concat(nsPath, "/").concat(name), content);
    }
    for (const name of oldFiles){
        removeFile("".concat(nsPath, "/").concat(name));
    }
}
function writeFile(name, content) {}
function readNsAllFiles(ns) {}
function readFile(name) {}
function removeFile(name) {}
function getAllMarkets() {}
function listenDev() {
    _market_dev_socket__WEBPACK_IMPORTED_MODULE_0__/* .marketsDevSocket */ .O.dispatcher.addListener(_market_lib__WEBPACK_IMPORTED_MODULE_3__/* .IMarketDevConnectEventType */ .Dl.getAllScripts, onGetAllScript);
    _market_dev_socket__WEBPACK_IMPORTED_MODULE_0__/* .marketsDevSocket */ .O.dispatcher.addListener(_market_lib__WEBPACK_IMPORTED_MODULE_3__/* .IMarketDevServerEventType */ .GC.update, onFileUpdate);
}
function onGetAllScript(data) {
    // console.log('onGetAllScript=2', data)
    // console.log('devLibInfo.data=', devLibInfo.data)
    devLibInfo.data.allMarketLibData = data;
    // 转为已经代理过的对象
    marketDevLibData.allMarketLibData = devLibInfo.data.allMarketLibData;
// console.log('from onGetAllScript look look id', objectCountUtils.getObjectCount(devLibInfo.data.allMarketLibData.resources))
}
function onFileUpdate(data) {
    if (data.client.resourceType == _market_lib__WEBPACK_IMPORTED_MODULE_3__/* .WatchResourceType */ .um.Html) {
        if (!devLibInfo.data.allMarketLibData) return;
        for (const html of devLibInfo.data.allMarketLibData.htmls){
            if (html.client.path == data.client.path) {
                html.content = data.content;
                return;
            }
        }
    } else if (data.client.resourceType == _market_lib__WEBPACK_IMPORTED_MODULE_3__/* .WatchResourceType */ .um.Js) {
        if (!devLibInfo.data.allMarketLibData) return;
        for(let index = 0; index < devLibInfo.data.allMarketLibData.resources.length; index++){
            const script = devLibInfo.data.allMarketLibData.resources[index];
            if (script.client.path == data.client.path) {
                devLibInfo.data.allMarketLibData.resources[index] = data;
                console.log('market script dev scripts update script', data);
                // devLibInfo.data.allMarketLibData.resources = [...devLibInfo.data.allMarketLibData.resources];
                // console.log('update data', data);
                // console.log('look look id', objectCountUtils.getObjectCount(devLibInfo.data.allMarketLibData.resources), devLibInfo.data.allMarketLibData.resources)
                return;
            }
        }
    } else {
    // unknown resource type
    }
}
let isInitialized = false;
async function init() {
    if (isInitialized) {
        return;
    }
    isInitialized = true;
    listenDev();
    devLibInfo = await _fanfanlo__WEBPACK_IMPORTED_MODULE_4__/* .storeUtils */ .P.getNamespaceStoreWithData('devLibInfo', {
        defData: {},
        forceReset: false
    });
    marketDevLibData.allMarketLibData = devLibInfo.data.allMarketLibData;
}
const marketsDevScriptLib = {
    writeFile,
    readFile,
    writeNsAllFiles,
    readNsAllFiles,
    getAllMarkets,
    init,
    marketDevLibData
};


/***/ })

}]);
//# sourceMappingURL=6829-30e1914e931623eb.js.map