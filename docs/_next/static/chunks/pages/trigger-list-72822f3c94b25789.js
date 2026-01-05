(self["webpackChunk_N_E"] = self["webpackChunk_N_E"] || []).push([[9313],{

/***/ 8299:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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

/***/ 36370:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

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

/***/ 37335:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  M: () => (/* binding */ TriggerListOrActionListUI)
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/react@19.1.0/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(94513);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/Box/Box.js + 2 modules
var Box = __webpack_require__(92061);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/Typography/Typography.js
var Typography = __webpack_require__(26512);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react@19.1.0/node_modules/react/index.js
var react = __webpack_require__(94285);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react-i18next@15.6.0_i18next@24.2.3_typescript@5.7.3__react-dom@19.1.0_react@19.1.0__react@19.1.0_typescript@5.7.3/node_modules/react-i18next/dist/es/index.js + 15 modules
var es = __webpack_require__(56137);
;// ./src/components/trigger-list-action-list-common/context.tsx

const ActionListOrTriggerListPageParamsContext = /*#__PURE__*/ (0,react.createContext)({});
const ActionOrTriggerGroupListContext = /*#__PURE__*/ (0,react.createContext)({});

// EXTERNAL MODULE: ../../libs/app/ui/src/components/appbar/AppBar.tsx + 3 modules
var AppBar = __webpack_require__(82524);
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

/***/ 42248:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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

/***/ 53682:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ TriggerList)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(94513);
/* harmony import */ var _app_ui__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(65505);
/* harmony import */ var _fanfanlo__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(56137);
/* harmony import */ var _src_components_page_trigger_list_trigger_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(10322);
/* harmony import */ var _src_components_trigger_list_action_list_common_TriggerListOrActionListUI__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(37335);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1674);
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

/***/ 70213:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {


    (window.__NEXT_P = window.__NEXT_P || []).push([
      "/trigger-list",
      function () {
        return __webpack_require__(53682);
      }
    ]);
    if(false) {}
  

/***/ }),

/***/ 70649:
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


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, [472,1172,9815,7468,1562,636,6593,8792], () => (__webpack_exec__(70213)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ _N_E = __webpack_exports__;
/******/ }
]);
//# sourceMappingURL=trigger-list-72822f3c94b25789.js.map