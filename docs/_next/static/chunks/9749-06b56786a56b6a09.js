"use strict";
(self["webpackChunk_N_E"] = self["webpackChunk_N_E"] || []).push([[9749],{

/***/ 12006:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {


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

/***/ 18531:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils_createSvgIcon_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(61541);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(94513);
/* __next_internal_client_entry_do_not_use__ default auto */ 

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_utils_createSvgIcon_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A)(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
    d: "M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4z"
}), 'Refresh'));


/***/ }),

/***/ 21607:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils_createSvgIcon_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(61541);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(94513);
/* __next_internal_client_entry_do_not_use__ default auto */ 

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_utils_createSvgIcon_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A)(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
    d: "M12 14c1.66 0 2.99-1.34 2.99-3L15 5c0-1.66-1.34-3-3-3S9 3.34 9 5v6c0 1.66 1.34 3 3 3m5.3-3c0 3-2.54 5.1-5.3 5.1S6.7 14 6.7 11H5c0 3.41 2.72 6.23 6 6.72V21h2v-3.28c3.28-.48 6-3.3 6-6.72z"
}), 'Mic'));


/***/ }),

/***/ 25420:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils_createSvgIcon_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(61541);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(94513);
/* __next_internal_client_entry_do_not_use__ default auto */ 

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_utils_createSvgIcon_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A)(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
    d: "M19 11h-1.7c0 .74-.16 1.43-.43 2.05l1.23 1.23c.56-.98.9-2.09.9-3.28m-4.02.17c0-.06.02-.11.02-.17V5c0-1.66-1.34-3-3-3S9 3.34 9 5v.18zM4.27 3 3 4.27l6.01 6.01V11c0 1.66 1.33 3 2.99 3 .22 0 .44-.03.65-.08l1.66 1.66c-.71.33-1.5.52-2.31.52-2.76 0-5.3-2.1-5.3-5.1H5c0 3.41 2.72 6.23 6 6.72V21h2v-3.28c.91-.13 1.77-.45 2.54-.9L19.73 21 21 19.73z"
}), 'MicOff'));


/***/ }),

/***/ 56539:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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

/***/ 59511:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils_createSvgIcon_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(61541);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(94513);
/* __next_internal_client_entry_do_not_use__ default auto */ 

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_utils_createSvgIcon_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A)(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
    d: "m21 6.5-4 4V7c0-.55-.45-1-1-1H9.82L21 17.18zM3.27 2 2 3.27 4.73 6H4c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h12c.21 0 .39-.08.54-.18L19.73 21 21 19.73z"
}), 'VideocamOff'));


/***/ }),

/***/ 66365:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils_createSvgIcon_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(61541);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(94513);
/* __next_internal_client_entry_do_not_use__ default auto */ 

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_utils_createSvgIcon_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A)(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
    d: "M11.07 12.85c.77-1.39 2.25-2.21 3.11-3.44.91-1.29.4-3.7-2.18-3.7-1.69 0-2.52 1.28-2.87 2.34L6.54 6.96C7.25 4.83 9.18 3 11.99 3c2.35 0 3.96 1.07 4.78 2.41.7 1.15 1.11 3.3.03 4.9-1.2 1.77-2.35 2.31-2.97 3.45-.25.46-.35.76-.35 2.24h-2.89c-.01-.78-.13-2.05.48-3.15M14 20c0 1.1-.9 2-2 2s-2-.9-2-2 .9-2 2-2 2 .9 2 2"
}), 'QuestionMark'));


/***/ }),

/***/ 74035:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   x: () => (/* binding */ ClickAwayListener)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(94285);
/* harmony import */ var _mui_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16316);
/* harmony import */ var _mui_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(43804);
/* harmony import */ var _mui_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(48770);
/* harmony import */ var _mui_utils_getReactElementRef__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(43552);
/* __next_internal_client_entry_do_not_use__ ClickAwayListener auto */ 



// TODO: return `EventHandlerName extends `on${infer EventName}` ? Lowercase<EventName> : never` once generatePropTypes runs with TS 4.1
function mapEventPropToEvent(eventProp) {
    return eventProp.substring(2).toLowerCase();
}
function clickedRootScrollbar(event, doc) {
    return doc.documentElement.clientWidth < event.clientX || doc.documentElement.clientHeight < event.clientY;
}
/**
 * Listen for click events that occur somewhere in the document, outside of the element itself.
 * For instance, if you need to hide a menu when people click anywhere else on your page.
 *
 * Demos:
 *
 * - [Click-Away Listener](https://v6.mui.com/material-ui/react-click-away-listener/)
 * - [Menu](https://v6.mui.com/material-ui/react-menu/)
 *
 * API:
 *
 * - [ClickAwayListener API](https://v6.mui.com/material-ui/api/click-away-listener/)
 */ function ClickAwayListener(props) {
    const { children, disableReactTree = false, mouseEvent = 'onClick', onClickAway, touchEvent = 'onTouchEnd' } = props;
    const movedRef = react__WEBPACK_IMPORTED_MODULE_0__.useRef(false);
    const nodeRef = react__WEBPACK_IMPORTED_MODULE_0__.useRef(null);
    const activatedRef = react__WEBPACK_IMPORTED_MODULE_0__.useRef(false);
    const syntheticEventRef = react__WEBPACK_IMPORTED_MODULE_0__.useRef(false);
    react__WEBPACK_IMPORTED_MODULE_0__.useEffect(()=>{
        // Ensure that this component is not "activated" synchronously.
        // https://github.com/facebook/react/issues/20074
        setTimeout(()=>{
            activatedRef.current = true;
        }, 0);
        return ()=>{
            activatedRef.current = false;
        };
    }, []);
    const handleRef = (0,_mui_utils__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A)((0,_mui_utils_getReactElementRef__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A)(children), nodeRef);
    // The handler doesn't take event.defaultPrevented into account:
    //
    // event.preventDefault() is meant to stop default behaviors like
    // clicking a checkbox to check it, hitting a button to submit a form,
    // and hitting left arrow to move the cursor in a text input etc.
    // Only special HTML elements have these default behaviors.
    const handleClickAway = (0,_mui_utils__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A)((event)=>{
        // Given developers can stop the propagation of the synthetic event,
        // we can only be confident with a positive value.
        const insideReactTree = syntheticEventRef.current;
        syntheticEventRef.current = false;
        const doc = (0,_mui_utils__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A)(nodeRef.current);
        // 1. IE11 support, which trigger the handleClickAway even after the unbind
        // 2. The child might render null.
        // 3. Behave like a blur listener.
        if (!activatedRef.current || !nodeRef.current || 'clientX' in event && clickedRootScrollbar(event, doc)) {
            return;
        }
        // Do not act if user performed touchmove
        if (movedRef.current) {
            movedRef.current = false;
            return;
        }
        let insideDOM;
        // If not enough, can use https://github.com/DieterHolvoet/event-propagation-path/blob/master/propagationPath.js
        if (event.composedPath) {
            insideDOM = event.composedPath().includes(nodeRef.current);
        } else {
            insideDOM = !doc.documentElement.contains(// @ts-expect-error returns `false` as intended when not dispatched from a Node
            event.target) || nodeRef.current.contains(// @ts-expect-error returns `false` as intended when not dispatched from a Node
            event.target);
        }
        if (!insideDOM && (disableReactTree || !insideReactTree)) {
            onClickAway(event);
        }
    });
    // Keep track of mouse/touch events that bubbled up through the portal.
    const createHandleSynthetic = (handlerName)=>(event)=>{
            syntheticEventRef.current = true;
            const childrenPropsHandler = children.props[handlerName];
            if (childrenPropsHandler) {
                childrenPropsHandler(event);
            }
        };
    const childrenProps = {
        ref: handleRef
    };
    if (touchEvent !== false) {
        childrenProps[touchEvent] = createHandleSynthetic(touchEvent);
    }
    react__WEBPACK_IMPORTED_MODULE_0__.useEffect(()=>{
        if (touchEvent !== false) {
            const mappedTouchEvent = mapEventPropToEvent(touchEvent);
            const doc = (0,_mui_utils__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A)(nodeRef.current);
            const handleTouchMove = ()=>{
                movedRef.current = true;
            };
            doc.addEventListener(mappedTouchEvent, handleClickAway);
            doc.addEventListener('touchmove', handleTouchMove);
            return ()=>{
                doc.removeEventListener(mappedTouchEvent, handleClickAway);
                doc.removeEventListener('touchmove', handleTouchMove);
            };
        }
        return undefined;
    }, [
        handleClickAway,
        touchEvent
    ]);
    if (mouseEvent !== false) {
        childrenProps[mouseEvent] = createHandleSynthetic(mouseEvent);
    }
    react__WEBPACK_IMPORTED_MODULE_0__.useEffect(()=>{
        if (mouseEvent !== false) {
            const mappedMouseEvent = mapEventPropToEvent(mouseEvent);
            const doc = (0,_mui_utils__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A)(nodeRef.current);
            doc.addEventListener(mappedMouseEvent, handleClickAway);
            return ()=>{
                doc.removeEventListener(mappedMouseEvent, handleClickAway);
            };
        }
        return undefined;
    }, [
        handleClickAway,
        mouseEvent
    ]);
    return /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.cloneElement(children, childrenProps);
}
 false ? 0 : void 0;
if (false) {}



/***/ }),

/***/ 77779:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ Tooltip_Tooltip)
});

// UNUSED EXPORTS: testReset

// EXTERNAL MODULE: ../../node_modules/.pnpm/react@19.1.0/node_modules/react/index.js
var react = __webpack_require__(94285);
// EXTERNAL MODULE: ../../node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs
var clsx = __webpack_require__(3638);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+utils@6.4.9_@types+react@19.1.8_react@19.1.0/node_modules/@mui/utils/esm/useTimeout/useTimeout.js + 1 modules
var useTimeout = __webpack_require__(45443);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+utils@6.4.9_@types+react@19.1.8_react@19.1.0/node_modules/@mui/utils/esm/composeClasses/composeClasses.js
var composeClasses = __webpack_require__(95116);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+system@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled@1_sfs2vjcbuqchwdpqpmkla22opm/node_modules/@mui/system/esm/colorManipulator/colorManipulator.js + 1 modules
var colorManipulator = __webpack_require__(21567);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+system@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled@1_sfs2vjcbuqchwdpqpmkla22opm/node_modules/@mui/system/esm/RtlProvider/index.js
var RtlProvider = __webpack_require__(93974);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+utils@6.4.9_@types+react@19.1.8_react@19.1.0/node_modules/@mui/utils/esm/isFocusVisible/isFocusVisible.js
var isFocusVisible = __webpack_require__(86012);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+utils@6.4.9_@types+react@19.1.8_react@19.1.0/node_modules/@mui/utils/esm/getReactElementRef/getReactElementRef.js
var getReactElementRef = __webpack_require__(43552);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/styles/styled.js
var styled = __webpack_require__(64624);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/styles/useTheme.js
var useTheme = __webpack_require__(38443);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/utils/memoTheme.js + 1 modules
var memoTheme = __webpack_require__(10355);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/DefaultPropsProvider/DefaultPropsProvider.js
var DefaultPropsProvider = __webpack_require__(79209);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/utils/capitalize.js
var capitalize = __webpack_require__(99512);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/Grow/Grow.js
var Grow = __webpack_require__(11999);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+utils@6.4.9_@types+react@19.1.8_react@19.1.0/node_modules/@mui/utils/esm/useForkRef/useForkRef.js
var useForkRef = __webpack_require__(16316);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+utils@6.4.9_@types+react@19.1.8_react@19.1.0/node_modules/@mui/utils/esm/useEnhancedEffect/useEnhancedEffect.js
var useEnhancedEffect = __webpack_require__(51142);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+utils@6.4.9_@types+react@19.1.8_react@19.1.0/node_modules/@mui/utils/esm/ownerDocument/ownerDocument.js
var ownerDocument = __webpack_require__(48770);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/popper.js + 53 modules
var lib_popper = __webpack_require__(66293);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+utils@6.4.9_@types+react@19.1.8_react@19.1.0/node_modules/@mui/utils/esm/useSlotProps/useSlotProps.js
var useSlotProps = __webpack_require__(93430);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/Portal/Portal.js + 1 modules
var Portal = __webpack_require__(45009);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+utils@6.4.9_@types+react@19.1.8_react@19.1.0/node_modules/@mui/utils/esm/generateUtilityClasses/generateUtilityClasses.js
var generateUtilityClasses = __webpack_require__(92186);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+utils@6.4.9_@types+react@19.1.8_react@19.1.0/node_modules/@mui/utils/esm/generateUtilityClass/generateUtilityClass.js
var generateUtilityClass = __webpack_require__(69014);
;// ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/Popper/popperClasses.js


function getPopperUtilityClass(slot) {
    return (0,generateUtilityClass/* default */.Ay)('MuiPopper', slot);
}
const popperClasses = (0,generateUtilityClasses/* default */.A)('MuiPopper', [
    'root'
]);
/* harmony default export */ const Popper_popperClasses = ((/* unused pure expression or super */ null && (popperClasses)));

// EXTERNAL MODULE: ../../node_modules/.pnpm/react@19.1.0/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(94513);
;// ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/Popper/BasePopper.js
/* __next_internal_client_entry_do_not_use__ default auto */ 








function flipPlacement(placement, direction) {
    if (direction === 'ltr') {
        return placement;
    }
    switch(placement){
        case 'bottom-end':
            return 'bottom-start';
        case 'bottom-start':
            return 'bottom-end';
        case 'top-end':
            return 'top-start';
        case 'top-start':
            return 'top-end';
        default:
            return placement;
    }
}
function resolveAnchorEl(anchorEl) {
    return typeof anchorEl === 'function' ? anchorEl() : anchorEl;
}
function isHTMLElement(element) {
    return element.nodeType !== undefined;
}
function isVirtualElement(element) {
    return !isHTMLElement(element);
}
const useUtilityClasses = (ownerState)=>{
    const { classes } = ownerState;
    const slots = {
        root: [
            'root'
        ]
    };
    return (0,composeClasses/* default */.A)(slots, getPopperUtilityClass, classes);
};
const defaultPopperOptions = {};
const PopperTooltip = /*#__PURE__*/ react.forwardRef(function PopperTooltip(props, forwardedRef) {
    const { anchorEl, children, direction, disablePortal, modifiers, open, placement: initialPlacement, popperOptions, popperRef: popperRefProp, slotProps = {}, slots = {}, TransitionProps, // @ts-ignore internal logic
    ownerState: ownerStateProp, // prevent from spreading to DOM, it can come from the parent component e.g. Select.
    ...other } = props;
    const tooltipRef = react.useRef(null);
    const ownRef = (0,useForkRef/* default */.A)(tooltipRef, forwardedRef);
    const popperRef = react.useRef(null);
    const handlePopperRef = (0,useForkRef/* default */.A)(popperRef, popperRefProp);
    const handlePopperRefRef = react.useRef(handlePopperRef);
    (0,useEnhancedEffect/* default */.A)(()=>{
        handlePopperRefRef.current = handlePopperRef;
    }, [
        handlePopperRef
    ]);
    react.useImperativeHandle(popperRefProp, ()=>popperRef.current, []);
    const rtlPlacement = flipPlacement(initialPlacement, direction);
    /**
   * placement initialized from prop but can change during lifetime if modifiers.flip.
   * modifiers.flip is essentially a flip for controlled/uncontrolled behavior
   */ const [placement, setPlacement] = react.useState(rtlPlacement);
    const [resolvedAnchorElement, setResolvedAnchorElement] = react.useState(resolveAnchorEl(anchorEl));
    react.useEffect(()=>{
        if (popperRef.current) {
            popperRef.current.forceUpdate();
        }
    });
    react.useEffect(()=>{
        if (anchorEl) {
            setResolvedAnchorElement(resolveAnchorEl(anchorEl));
        }
    }, [
        anchorEl
    ]);
    (0,useEnhancedEffect/* default */.A)(()=>{
        if (!resolvedAnchorElement || !open) {
            return undefined;
        }
        const handlePopperUpdate = (data)=>{
            setPlacement(data.placement);
        };
        if (false) {}
        let popperModifiers = [
            {
                name: 'preventOverflow',
                options: {
                    altBoundary: disablePortal
                }
            },
            {
                name: 'flip',
                options: {
                    altBoundary: disablePortal
                }
            },
            {
                name: 'onUpdate',
                enabled: true,
                phase: 'afterWrite',
                fn: (param)=>{
                    let { state } = param;
                    handlePopperUpdate(state);
                }
            }
        ];
        if (modifiers != null) {
            popperModifiers = popperModifiers.concat(modifiers);
        }
        if (popperOptions && popperOptions.modifiers != null) {
            popperModifiers = popperModifiers.concat(popperOptions.modifiers);
        }
        const popper = (0,lib_popper/* createPopper */.n4)(resolvedAnchorElement, tooltipRef.current, {
            placement: rtlPlacement,
            ...popperOptions,
            modifiers: popperModifiers
        });
        handlePopperRefRef.current(popper);
        return ()=>{
            popper.destroy();
            handlePopperRefRef.current(null);
        };
    }, [
        resolvedAnchorElement,
        disablePortal,
        modifiers,
        open,
        popperOptions,
        rtlPlacement
    ]);
    const childProps = {
        placement: placement
    };
    if (TransitionProps !== null) {
        childProps.TransitionProps = TransitionProps;
    }
    const classes = useUtilityClasses(props);
    var _slots_root;
    const Root = (_slots_root = slots.root) !== null && _slots_root !== void 0 ? _slots_root : 'div';
    const rootProps = (0,useSlotProps/* default */.A)({
        elementType: Root,
        externalSlotProps: slotProps.root,
        externalForwardedProps: other,
        additionalProps: {
            role: 'tooltip',
            ref: ownRef
        },
        ownerState: props,
        className: classes.root
    });
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(Root, {
        ...rootProps,
        children: typeof children === 'function' ? children(childProps) : children
    });
});
/**
 * @ignore - internal component.
 */ const Popper = /*#__PURE__*/ react.forwardRef(function Popper(props, forwardedRef) {
    const { anchorEl, children, container: containerProp, direction = 'ltr', disablePortal = false, keepMounted = false, modifiers, open, placement = 'bottom', popperOptions = defaultPopperOptions, popperRef, style, transition = false, slotProps = {}, slots = {}, ...other } = props;
    const [exited, setExited] = react.useState(true);
    const handleEnter = ()=>{
        setExited(false);
    };
    const handleExited = ()=>{
        setExited(true);
    };
    if (!keepMounted && !open && (!transition || exited)) {
        return null;
    }
    // If the container prop is provided, use that
    // If the anchorEl prop is provided, use its parent body element as the container
    // If neither are provided let the Modal take care of choosing the container
    let container;
    if (containerProp) {
        container = containerProp;
    } else if (anchorEl) {
        const resolvedAnchorEl = resolveAnchorEl(anchorEl);
        container = resolvedAnchorEl && isHTMLElement(resolvedAnchorEl) ? (0,ownerDocument/* default */.A)(resolvedAnchorEl).body : (0,ownerDocument/* default */.A)(null).body;
    }
    const display = !open && keepMounted && (!transition || exited) ? 'none' : undefined;
    const transitionProps = transition ? {
        in: open,
        onEnter: handleEnter,
        onExited: handleExited
    } : undefined;
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(Portal/* default */.A, {
        disablePortal: disablePortal,
        container: container,
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(PopperTooltip, {
            anchorEl: anchorEl,
            direction: direction,
            disablePortal: disablePortal,
            modifiers: modifiers,
            ref: forwardedRef,
            open: transition ? !exited : open,
            placement: placement,
            popperOptions: popperOptions,
            popperRef: popperRef,
            slotProps: slotProps,
            slots: slots,
            ...other,
            style: {
                // Prevents scroll issue, waiting for Popper.js to add this style once initiated.
                position: 'fixed',
                // Fix Popper.js display issue
                top: 0,
                left: 0,
                display,
                ...style
            },
            TransitionProps: transitionProps,
            children: children
        })
    });
});
 false ? 0 : void 0;
/* harmony default export */ const BasePopper = (Popper);

;// ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/Popper/Popper.js
/* __next_internal_client_entry_do_not_use__ default auto */ 








const PopperRoot = (0,styled/* default */.Ay)(BasePopper, {
    name: 'MuiPopper',
    slot: 'Root',
    overridesResolver: (props, styles)=>styles.root
})({});
/**
 *
 * Demos:
 *
 * - [Autocomplete](https://v6.mui.com/material-ui/react-autocomplete/)
 * - [Menu](https://v6.mui.com/material-ui/react-menu/)
 * - [Popper](https://v6.mui.com/material-ui/react-popper/)
 *
 * API:
 *
 * - [Popper API](https://v6.mui.com/material-ui/api/popper/)
 */ const Popper_Popper = /*#__PURE__*/ react.forwardRef(function Popper(inProps, ref) {
    const isRtl = (0,RtlProvider/* useRtl */.I)();
    const props = (0,DefaultPropsProvider/* useDefaultProps */.b)({
        props: inProps,
        name: 'MuiPopper'
    });
    const { anchorEl, component, components, componentsProps, container, disablePortal, keepMounted, modifiers, open, placement, popperOptions, popperRef, transition, slots, slotProps, ...other } = props;
    var _slots_root;
    const RootComponent = (_slots_root = slots === null || slots === void 0 ? void 0 : slots.root) !== null && _slots_root !== void 0 ? _slots_root : components === null || components === void 0 ? void 0 : components.Root;
    const otherProps = {
        anchorEl,
        container,
        disablePortal,
        keepMounted,
        modifiers,
        open,
        placement,
        popperOptions,
        popperRef,
        transition,
        ...other
    };
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(PopperRoot, {
        as: component,
        direction: isRtl ? 'rtl' : 'ltr',
        slots: {
            root: RootComponent
        },
        slotProps: slotProps !== null && slotProps !== void 0 ? slotProps : componentsProps,
        ...otherProps,
        ref: ref
    });
});
 false ? 0 : void 0;
/* harmony default export */ const material_Popper_Popper = (Popper_Popper);

// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/utils/useEventCallback.js
var useEventCallback = __webpack_require__(37976);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/utils/useForkRef.js
var utils_useForkRef = __webpack_require__(71878);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/utils/useId.js
var useId = __webpack_require__(14036);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/utils/useControlled.js + 1 modules
var useControlled = __webpack_require__(34499);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/utils/useSlot.js
var useSlot = __webpack_require__(98005);
;// ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/Tooltip/tooltipClasses.js


function getTooltipUtilityClass(slot) {
    return (0,generateUtilityClass/* default */.Ay)('MuiTooltip', slot);
}
const tooltipClasses = (0,generateUtilityClasses/* default */.A)('MuiTooltip', [
    'popper',
    'popperInteractive',
    'popperArrow',
    'popperClose',
    'tooltip',
    'tooltipArrow',
    'touch',
    'tooltipPlacementLeft',
    'tooltipPlacementRight',
    'tooltipPlacementTop',
    'tooltipPlacementBottom',
    'arrow'
]);
/* harmony default export */ const Tooltip_tooltipClasses = (tooltipClasses);

;// ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/Tooltip/Tooltip.js
/* __next_internal_client_entry_do_not_use__ testReset,default auto */ 






















function round(value) {
    return Math.round(value * 1e5) / 1e5;
}
const Tooltip_useUtilityClasses = (ownerState)=>{
    const { classes, disableInteractive, arrow, touch, placement } = ownerState;
    const slots = {
        popper: [
            'popper',
            !disableInteractive && 'popperInteractive',
            arrow && 'popperArrow'
        ],
        tooltip: [
            'tooltip',
            arrow && 'tooltipArrow',
            touch && 'touch',
            "tooltipPlacement".concat((0,capitalize/* default */.A)(placement.split('-')[0]))
        ],
        arrow: [
            'arrow'
        ]
    };
    return (0,composeClasses/* default */.A)(slots, getTooltipUtilityClass, classes);
};
const TooltipPopper = (0,styled/* default */.Ay)(material_Popper_Popper, {
    name: 'MuiTooltip',
    slot: 'Popper',
    overridesResolver: (props, styles)=>{
        const { ownerState } = props;
        return [
            styles.popper,
            !ownerState.disableInteractive && styles.popperInteractive,
            ownerState.arrow && styles.popperArrow,
            !ownerState.open && styles.popperClose
        ];
    }
})((0,memoTheme/* default */.A)((param)=>{
    let { theme } = param;
    return {
        zIndex: (theme.vars || theme).zIndex.tooltip,
        pointerEvents: 'none',
        variants: [
            {
                props: (param)=>{
                    let { ownerState } = param;
                    return !ownerState.disableInteractive;
                },
                style: {
                    pointerEvents: 'auto'
                }
            },
            {
                props: (param)=>{
                    let { open } = param;
                    return !open;
                },
                style: {
                    pointerEvents: 'none'
                }
            },
            {
                props: (param)=>{
                    let { ownerState } = param;
                    return ownerState.arrow;
                },
                style: {
                    ['&[data-popper-placement*="bottom"] .'.concat(Tooltip_tooltipClasses.arrow)]: {
                        top: 0,
                        marginTop: '-0.71em',
                        '&::before': {
                            transformOrigin: '0 100%'
                        }
                    },
                    ['&[data-popper-placement*="top"] .'.concat(Tooltip_tooltipClasses.arrow)]: {
                        bottom: 0,
                        marginBottom: '-0.71em',
                        '&::before': {
                            transformOrigin: '100% 0'
                        }
                    },
                    ['&[data-popper-placement*="right"] .'.concat(Tooltip_tooltipClasses.arrow)]: {
                        height: '1em',
                        width: '0.71em',
                        '&::before': {
                            transformOrigin: '100% 100%'
                        }
                    },
                    ['&[data-popper-placement*="left"] .'.concat(Tooltip_tooltipClasses.arrow)]: {
                        height: '1em',
                        width: '0.71em',
                        '&::before': {
                            transformOrigin: '0 0'
                        }
                    }
                }
            },
            {
                props: (param)=>{
                    let { ownerState } = param;
                    return ownerState.arrow && !ownerState.isRtl;
                },
                style: {
                    ['&[data-popper-placement*="right"] .'.concat(Tooltip_tooltipClasses.arrow)]: {
                        left: 0,
                        marginLeft: '-0.71em'
                    }
                }
            },
            {
                props: (param)=>{
                    let { ownerState } = param;
                    return ownerState.arrow && !!ownerState.isRtl;
                },
                style: {
                    ['&[data-popper-placement*="right"] .'.concat(Tooltip_tooltipClasses.arrow)]: {
                        right: 0,
                        marginRight: '-0.71em'
                    }
                }
            },
            {
                props: (param)=>{
                    let { ownerState } = param;
                    return ownerState.arrow && !ownerState.isRtl;
                },
                style: {
                    ['&[data-popper-placement*="left"] .'.concat(Tooltip_tooltipClasses.arrow)]: {
                        right: 0,
                        marginRight: '-0.71em'
                    }
                }
            },
            {
                props: (param)=>{
                    let { ownerState } = param;
                    return ownerState.arrow && !!ownerState.isRtl;
                },
                style: {
                    ['&[data-popper-placement*="left"] .'.concat(Tooltip_tooltipClasses.arrow)]: {
                        left: 0,
                        marginLeft: '-0.71em'
                    }
                }
            }
        ]
    };
}));
const TooltipTooltip = (0,styled/* default */.Ay)('div', {
    name: 'MuiTooltip',
    slot: 'Tooltip',
    overridesResolver: (props, styles)=>{
        const { ownerState } = props;
        return [
            styles.tooltip,
            ownerState.touch && styles.touch,
            ownerState.arrow && styles.tooltipArrow,
            styles["tooltipPlacement".concat((0,capitalize/* default */.A)(ownerState.placement.split('-')[0]))]
        ];
    }
})((0,memoTheme/* default */.A)((param)=>{
    let { theme } = param;
    return {
        backgroundColor: theme.vars ? theme.vars.palette.Tooltip.bg : (0,colorManipulator/* alpha */.X4)(theme.palette.grey[700], 0.92),
        borderRadius: (theme.vars || theme).shape.borderRadius,
        color: (theme.vars || theme).palette.common.white,
        fontFamily: theme.typography.fontFamily,
        padding: '4px 8px',
        fontSize: theme.typography.pxToRem(11),
        maxWidth: 300,
        margin: 2,
        wordWrap: 'break-word',
        fontWeight: theme.typography.fontWeightMedium,
        [".".concat(Tooltip_tooltipClasses.popper, '[data-popper-placement*="left"] &')]: {
            transformOrigin: 'right center'
        },
        [".".concat(Tooltip_tooltipClasses.popper, '[data-popper-placement*="right"] &')]: {
            transformOrigin: 'left center'
        },
        [".".concat(Tooltip_tooltipClasses.popper, '[data-popper-placement*="top"] &')]: {
            transformOrigin: 'center bottom',
            marginBottom: '14px'
        },
        [".".concat(Tooltip_tooltipClasses.popper, '[data-popper-placement*="bottom"] &')]: {
            transformOrigin: 'center top',
            marginTop: '14px'
        },
        variants: [
            {
                props: (param)=>{
                    let { ownerState } = param;
                    return ownerState.arrow;
                },
                style: {
                    position: 'relative',
                    margin: 0
                }
            },
            {
                props: (param)=>{
                    let { ownerState } = param;
                    return ownerState.touch;
                },
                style: {
                    padding: '8px 16px',
                    fontSize: theme.typography.pxToRem(14),
                    lineHeight: "".concat(round(16 / 14), "em"),
                    fontWeight: theme.typography.fontWeightRegular
                }
            },
            {
                props: (param)=>{
                    let { ownerState } = param;
                    return !ownerState.isRtl;
                },
                style: {
                    [".".concat(Tooltip_tooltipClasses.popper, '[data-popper-placement*="left"] &')]: {
                        marginRight: '14px'
                    },
                    [".".concat(Tooltip_tooltipClasses.popper, '[data-popper-placement*="right"] &')]: {
                        marginLeft: '14px'
                    }
                }
            },
            {
                props: (param)=>{
                    let { ownerState } = param;
                    return !ownerState.isRtl && ownerState.touch;
                },
                style: {
                    [".".concat(Tooltip_tooltipClasses.popper, '[data-popper-placement*="left"] &')]: {
                        marginRight: '24px'
                    },
                    [".".concat(Tooltip_tooltipClasses.popper, '[data-popper-placement*="right"] &')]: {
                        marginLeft: '24px'
                    }
                }
            },
            {
                props: (param)=>{
                    let { ownerState } = param;
                    return !!ownerState.isRtl;
                },
                style: {
                    [".".concat(Tooltip_tooltipClasses.popper, '[data-popper-placement*="left"] &')]: {
                        marginLeft: '14px'
                    },
                    [".".concat(Tooltip_tooltipClasses.popper, '[data-popper-placement*="right"] &')]: {
                        marginRight: '14px'
                    }
                }
            },
            {
                props: (param)=>{
                    let { ownerState } = param;
                    return !!ownerState.isRtl && ownerState.touch;
                },
                style: {
                    [".".concat(Tooltip_tooltipClasses.popper, '[data-popper-placement*="left"] &')]: {
                        marginLeft: '24px'
                    },
                    [".".concat(Tooltip_tooltipClasses.popper, '[data-popper-placement*="right"] &')]: {
                        marginRight: '24px'
                    }
                }
            },
            {
                props: (param)=>{
                    let { ownerState } = param;
                    return ownerState.touch;
                },
                style: {
                    [".".concat(Tooltip_tooltipClasses.popper, '[data-popper-placement*="top"] &')]: {
                        marginBottom: '24px'
                    }
                }
            },
            {
                props: (param)=>{
                    let { ownerState } = param;
                    return ownerState.touch;
                },
                style: {
                    [".".concat(Tooltip_tooltipClasses.popper, '[data-popper-placement*="bottom"] &')]: {
                        marginTop: '24px'
                    }
                }
            }
        ]
    };
}));
const TooltipArrow = (0,styled/* default */.Ay)('span', {
    name: 'MuiTooltip',
    slot: 'Arrow',
    overridesResolver: (props, styles)=>styles.arrow
})((0,memoTheme/* default */.A)((param)=>{
    let { theme } = param;
    return {
        overflow: 'hidden',
        position: 'absolute',
        width: '1em',
        height: '0.71em' /* = width / sqrt(2) = (length of the hypotenuse) */ ,
        boxSizing: 'border-box',
        color: theme.vars ? theme.vars.palette.Tooltip.bg : (0,colorManipulator/* alpha */.X4)(theme.palette.grey[700], 0.9),
        '&::before': {
            content: '""',
            margin: 'auto',
            display: 'block',
            width: '100%',
            height: '100%',
            backgroundColor: 'currentColor',
            transform: 'rotate(45deg)'
        }
    };
}));
let hystersisOpen = false;
const hystersisTimer = new useTimeout/* Timeout */.E();
let cursorPosition = {
    x: 0,
    y: 0
};
function testReset() {
    hystersisOpen = false;
    hystersisTimer.clear();
}
function composeEventHandler(handler, eventHandler) {
    return function(event) {
        for(var _len = arguments.length, params = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++){
            params[_key - 1] = arguments[_key];
        }
        if (eventHandler) {
            eventHandler(event, ...params);
        }
        handler(event, ...params);
    };
}
// TODO v6: Remove PopperComponent, PopperProps, TransitionComponent and TransitionProps.
const Tooltip = /*#__PURE__*/ react.forwardRef(function Tooltip(inProps, ref) {
    const props = (0,DefaultPropsProvider/* useDefaultProps */.b)({
        props: inProps,
        name: 'MuiTooltip'
    });
    const { arrow = false, children: childrenProp, classes: classesProp, components = {}, componentsProps = {}, describeChild = false, disableFocusListener = false, disableHoverListener = false, disableInteractive: disableInteractiveProp = false, disableTouchListener = false, enterDelay = 100, enterNextDelay = 0, enterTouchDelay = 700, followCursor = false, id: idProp, leaveDelay = 0, leaveTouchDelay = 1500, onClose, onOpen, open: openProp, placement = 'bottom', PopperComponent: PopperComponentProp, PopperProps = {}, slotProps = {}, slots = {}, title, TransitionComponent: TransitionComponentProp, TransitionProps, ...other } = props;
    // to prevent runtime errors, developers will need to provide a child as a React element anyway.
    const children = /*#__PURE__*/ react.isValidElement(childrenProp) ? childrenProp : /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
        children: childrenProp
    });
    const theme = (0,useTheme/* default */.A)();
    const isRtl = (0,RtlProvider/* useRtl */.I)();
    const [childNode, setChildNode] = react.useState();
    const [arrowRef, setArrowRef] = react.useState(null);
    const ignoreNonTouchEvents = react.useRef(false);
    const disableInteractive = disableInteractiveProp || followCursor;
    const closeTimer = (0,useTimeout/* default */.A)();
    const enterTimer = (0,useTimeout/* default */.A)();
    const leaveTimer = (0,useTimeout/* default */.A)();
    const touchTimer = (0,useTimeout/* default */.A)();
    const [openState, setOpenState] = (0,useControlled/* default */.A)({
        controlled: openProp,
        default: false,
        name: 'Tooltip',
        state: 'open'
    });
    let open = openState;
    if (false) {}
    const id = (0,useId/* default */.A)(idProp);
    const prevUserSelect = react.useRef();
    const stopTouchInteraction = (0,useEventCallback/* default */.A)(()=>{
        if (prevUserSelect.current !== undefined) {
            document.body.style.WebkitUserSelect = prevUserSelect.current;
            prevUserSelect.current = undefined;
        }
        touchTimer.clear();
    });
    react.useEffect(()=>stopTouchInteraction, [
        stopTouchInteraction
    ]);
    const handleOpen = (event)=>{
        hystersisTimer.clear();
        hystersisOpen = true;
        // The mouseover event will trigger for every nested element in the tooltip.
        // We can skip rerendering when the tooltip is already open.
        // We are using the mouseover event instead of the mouseenter event to fix a hide/show issue.
        setOpenState(true);
        if (onOpen && !open) {
            onOpen(event);
        }
    };
    const handleClose = (0,useEventCallback/* default */.A)(/**
   * @param {React.SyntheticEvent | Event} event
   */ (event)=>{
        hystersisTimer.start(800 + leaveDelay, ()=>{
            hystersisOpen = false;
        });
        setOpenState(false);
        if (onClose && open) {
            onClose(event);
        }
        closeTimer.start(theme.transitions.duration.shortest, ()=>{
            ignoreNonTouchEvents.current = false;
        });
    });
    const handleMouseOver = (event)=>{
        if (ignoreNonTouchEvents.current && event.type !== 'touchstart') {
            return;
        }
        // Remove the title ahead of time.
        // We don't want to wait for the next render commit.
        // We would risk displaying two tooltips at the same time (native + this one).
        if (childNode) {
            childNode.removeAttribute('title');
        }
        enterTimer.clear();
        leaveTimer.clear();
        if (enterDelay || hystersisOpen && enterNextDelay) {
            enterTimer.start(hystersisOpen ? enterNextDelay : enterDelay, ()=>{
                handleOpen(event);
            });
        } else {
            handleOpen(event);
        }
    };
    const handleMouseLeave = (event)=>{
        enterTimer.clear();
        leaveTimer.start(leaveDelay, ()=>{
            handleClose(event);
        });
    };
    const [, setChildIsFocusVisible] = react.useState(false);
    const handleBlur = (event)=>{
        if (!(0,isFocusVisible/* default */.A)(event.target)) {
            setChildIsFocusVisible(false);
            handleMouseLeave(event);
        }
    };
    const handleFocus = (event)=>{
        // Workaround for https://github.com/facebook/react/issues/7769
        // The autoFocus of React might trigger the event before the componentDidMount.
        // We need to account for this eventuality.
        if (!childNode) {
            setChildNode(event.currentTarget);
        }
        if ((0,isFocusVisible/* default */.A)(event.target)) {
            setChildIsFocusVisible(true);
            handleMouseOver(event);
        }
    };
    const detectTouchStart = (event)=>{
        ignoreNonTouchEvents.current = true;
        const childrenProps = children.props;
        if (childrenProps.onTouchStart) {
            childrenProps.onTouchStart(event);
        }
    };
    const handleTouchStart = (event)=>{
        detectTouchStart(event);
        leaveTimer.clear();
        closeTimer.clear();
        stopTouchInteraction();
        prevUserSelect.current = document.body.style.WebkitUserSelect;
        // Prevent iOS text selection on long-tap.
        document.body.style.WebkitUserSelect = 'none';
        touchTimer.start(enterTouchDelay, ()=>{
            document.body.style.WebkitUserSelect = prevUserSelect.current;
            handleMouseOver(event);
        });
    };
    const handleTouchEnd = (event)=>{
        if (children.props.onTouchEnd) {
            children.props.onTouchEnd(event);
        }
        stopTouchInteraction();
        leaveTimer.start(leaveTouchDelay, ()=>{
            handleClose(event);
        });
    };
    react.useEffect(()=>{
        if (!open) {
            return undefined;
        }
        /**
     * @param {KeyboardEvent} nativeEvent
     */ function handleKeyDown(nativeEvent) {
            if (nativeEvent.key === 'Escape') {
                handleClose(nativeEvent);
            }
        }
        document.addEventListener('keydown', handleKeyDown);
        return ()=>{
            document.removeEventListener('keydown', handleKeyDown);
        };
    }, [
        handleClose,
        open
    ]);
    const handleRef = (0,utils_useForkRef/* default */.A)((0,getReactElementRef/* default */.A)(children), setChildNode, ref);
    // There is no point in displaying an empty tooltip.
    // So we exclude all falsy values, except 0, which is valid.
    if (!title && title !== 0) {
        open = false;
    }
    const popperRef = react.useRef();
    const handleMouseMove = (event)=>{
        const childrenProps = children.props;
        if (childrenProps.onMouseMove) {
            childrenProps.onMouseMove(event);
        }
        cursorPosition = {
            x: event.clientX,
            y: event.clientY
        };
        if (popperRef.current) {
            popperRef.current.update();
        }
    };
    const nameOrDescProps = {};
    const titleIsString = typeof title === 'string';
    if (describeChild) {
        nameOrDescProps.title = !open && titleIsString && !disableHoverListener ? title : null;
        nameOrDescProps['aria-describedby'] = open ? id : null;
    } else {
        nameOrDescProps['aria-label'] = titleIsString ? title : null;
        nameOrDescProps['aria-labelledby'] = open && !titleIsString ? id : null;
    }
    const childrenProps = {
        ...nameOrDescProps,
        ...other,
        ...children.props,
        className: (0,clsx/* default */.A)(other.className, children.props.className),
        onTouchStart: detectTouchStart,
        ref: handleRef,
        ...followCursor ? {
            onMouseMove: handleMouseMove
        } : {}
    };
    if (false) {}
    const interactiveWrapperListeners = {};
    if (!disableTouchListener) {
        childrenProps.onTouchStart = handleTouchStart;
        childrenProps.onTouchEnd = handleTouchEnd;
    }
    if (!disableHoverListener) {
        childrenProps.onMouseOver = composeEventHandler(handleMouseOver, childrenProps.onMouseOver);
        childrenProps.onMouseLeave = composeEventHandler(handleMouseLeave, childrenProps.onMouseLeave);
        if (!disableInteractive) {
            interactiveWrapperListeners.onMouseOver = handleMouseOver;
            interactiveWrapperListeners.onMouseLeave = handleMouseLeave;
        }
    }
    if (!disableFocusListener) {
        childrenProps.onFocus = composeEventHandler(handleFocus, childrenProps.onFocus);
        childrenProps.onBlur = composeEventHandler(handleBlur, childrenProps.onBlur);
        if (!disableInteractive) {
            interactiveWrapperListeners.onFocus = handleFocus;
            interactiveWrapperListeners.onBlur = handleBlur;
        }
    }
    if (false) {}
    const ownerState = {
        ...props,
        isRtl,
        arrow,
        disableInteractive,
        placement,
        PopperComponentProp,
        touch: ignoreNonTouchEvents.current
    };
    const resolvedPopperProps = typeof slotProps.popper === 'function' ? slotProps.popper(ownerState) : slotProps.popper;
    const popperOptions = react.useMemo(()=>{
        var _PopperProps_popperOptions, _resolvedPopperProps_popperOptions;
        let tooltipModifiers = [
            {
                name: 'arrow',
                enabled: Boolean(arrowRef),
                options: {
                    element: arrowRef,
                    padding: 4
                }
            }
        ];
        if ((_PopperProps_popperOptions = PopperProps.popperOptions) === null || _PopperProps_popperOptions === void 0 ? void 0 : _PopperProps_popperOptions.modifiers) {
            tooltipModifiers = tooltipModifiers.concat(PopperProps.popperOptions.modifiers);
        }
        if (resolvedPopperProps === null || resolvedPopperProps === void 0 ? void 0 : (_resolvedPopperProps_popperOptions = resolvedPopperProps.popperOptions) === null || _resolvedPopperProps_popperOptions === void 0 ? void 0 : _resolvedPopperProps_popperOptions.modifiers) {
            tooltipModifiers = tooltipModifiers.concat(resolvedPopperProps.popperOptions.modifiers);
        }
        return {
            ...PopperProps.popperOptions,
            ...resolvedPopperProps === null || resolvedPopperProps === void 0 ? void 0 : resolvedPopperProps.popperOptions,
            modifiers: tooltipModifiers
        };
    }, [
        arrowRef,
        PopperProps.popperOptions,
        resolvedPopperProps === null || resolvedPopperProps === void 0 ? void 0 : resolvedPopperProps.popperOptions
    ]);
    const classes = Tooltip_useUtilityClasses(ownerState);
    const resolvedTransitionProps = typeof slotProps.transition === 'function' ? slotProps.transition(ownerState) : slotProps.transition;
    var _components_Transition, _slotProps_arrow, _slotProps_tooltip;
    const externalForwardedProps = {
        slots: {
            popper: components.Popper,
            transition: (_components_Transition = components.Transition) !== null && _components_Transition !== void 0 ? _components_Transition : TransitionComponentProp,
            tooltip: components.Tooltip,
            arrow: components.Arrow,
            ...slots
        },
        slotProps: {
            arrow: (_slotProps_arrow = slotProps.arrow) !== null && _slotProps_arrow !== void 0 ? _slotProps_arrow : componentsProps.arrow,
            popper: {
                ...PopperProps,
                ...resolvedPopperProps !== null && resolvedPopperProps !== void 0 ? resolvedPopperProps : componentsProps.popper
            },
            // resolvedPopperProps can be spread because it's already an object
            tooltip: (_slotProps_tooltip = slotProps.tooltip) !== null && _slotProps_tooltip !== void 0 ? _slotProps_tooltip : componentsProps.tooltip,
            transition: {
                ...TransitionProps,
                ...resolvedTransitionProps !== null && resolvedTransitionProps !== void 0 ? resolvedTransitionProps : componentsProps.transition
            }
        }
    };
    const [PopperSlot, popperSlotProps] = (0,useSlot/* default */.A)('popper', {
        elementType: TooltipPopper,
        externalForwardedProps,
        ownerState,
        className: (0,clsx/* default */.A)(classes.popper, PopperProps === null || PopperProps === void 0 ? void 0 : PopperProps.className)
    });
    const [TransitionSlot, transitionSlotProps] = (0,useSlot/* default */.A)('transition', {
        elementType: Grow/* default */.A,
        externalForwardedProps,
        ownerState
    });
    const [TooltipSlot, tooltipSlotProps] = (0,useSlot/* default */.A)('tooltip', {
        elementType: TooltipTooltip,
        className: classes.tooltip,
        externalForwardedProps,
        ownerState
    });
    const [ArrowSlot, arrowSlotProps] = (0,useSlot/* default */.A)('arrow', {
        elementType: TooltipArrow,
        className: classes.arrow,
        externalForwardedProps,
        ownerState,
        ref: setArrowRef
    });
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(react.Fragment, {
        children: [
            /*#__PURE__*/ react.cloneElement(children, childrenProps),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(PopperSlot, {
                as: PopperComponentProp !== null && PopperComponentProp !== void 0 ? PopperComponentProp : material_Popper_Popper,
                placement: placement,
                anchorEl: followCursor ? {
                    getBoundingClientRect: ()=>({
                            top: cursorPosition.y,
                            left: cursorPosition.x,
                            right: cursorPosition.x,
                            bottom: cursorPosition.y,
                            width: 0,
                            height: 0
                        })
                } : childNode,
                popperRef: popperRef,
                open: childNode ? open : false,
                id: id,
                transition: true,
                ...interactiveWrapperListeners,
                ...popperSlotProps,
                popperOptions: popperOptions,
                children: (param)=>{
                    let { TransitionProps: TransitionPropsInner } = param;
                    return /*#__PURE__*/ (0,jsx_runtime.jsx)(TransitionSlot, {
                        timeout: theme.transitions.duration.shorter,
                        ...TransitionPropsInner,
                        ...transitionSlotProps,
                        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(TooltipSlot, {
                            ...tooltipSlotProps,
                            children: [
                                title,
                                arrow ? /*#__PURE__*/ (0,jsx_runtime.jsx)(ArrowSlot, {
                                    ...arrowSlotProps
                                }) : null
                            ]
                        })
                    });
                }
            })
        ]
    });
});
 false ? 0 : void 0;
/* harmony default export */ const Tooltip_Tooltip = (Tooltip);


/***/ }),

/***/ 83501:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils_createSvgIcon_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(61541);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(94513);
/* __next_internal_client_entry_do_not_use__ default auto */ 

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_utils_createSvgIcon_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A)(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
    d: "M12 9c-1.6 0-3.15.25-4.6.72v3.1c0 .39-.23.74-.56.9-.98.49-1.87 1.12-2.66 1.85-.18.18-.43.28-.7.28-.28 0-.53-.11-.71-.29L.29 13.08c-.18-.17-.29-.42-.29-.7s.11-.53.29-.71C3.34 8.78 7.46 7 12 7s8.66 1.78 11.71 4.67c.18.18.29.43.29.71s-.11.53-.29.71l-2.48 2.48c-.18.18-.43.29-.71.29-.27 0-.52-.11-.7-.28-.79-.74-1.69-1.36-2.67-1.85-.33-.16-.56-.5-.56-.9v-3.1C15.15 9.25 13.6 9 12 9"
}), 'CallEnd'));


/***/ }),

/***/ 87924:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Ay: () => (/* binding */ Grid_Grid)
});

// UNUSED EXPORTS: generateColumnGap, generateDirection, generateGrid, generateRowGap, resolveSpacingClasses, resolveSpacingStyles

// EXTERNAL MODULE: ../../node_modules/.pnpm/react@19.1.0/node_modules/react/index.js
var react = __webpack_require__(94285);
// EXTERNAL MODULE: ../../node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs
var clsx = __webpack_require__(3638);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+system@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled@1_sfs2vjcbuqchwdpqpmkla22opm/node_modules/@mui/system/esm/breakpoints/breakpoints.js
var breakpoints = __webpack_require__(64489);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+system@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled@1_sfs2vjcbuqchwdpqpmkla22opm/node_modules/@mui/system/esm/styleFunctionSx/extendSxProp.js
var extendSxProp = __webpack_require__(82603);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+utils@6.4.9_@types+react@19.1.8_react@19.1.0/node_modules/@mui/utils/esm/composeClasses/composeClasses.js
var composeClasses = __webpack_require__(95116);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/styles/styled.js
var styled = __webpack_require__(64624);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/DefaultPropsProvider/DefaultPropsProvider.js
var DefaultPropsProvider = __webpack_require__(79209);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/styles/useTheme.js
var useTheme = __webpack_require__(38443);
;// ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/Grid/GridContext.js
/* __next_internal_client_entry_do_not_use__ default auto */ 
/**
 * @ignore - internal component.
 */ const GridContext = /*#__PURE__*/ react.createContext();
if (false) {}
/* harmony default export */ const Grid_GridContext = (GridContext);

// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+utils@6.4.9_@types+react@19.1.8_react@19.1.0/node_modules/@mui/utils/esm/generateUtilityClasses/generateUtilityClasses.js
var generateUtilityClasses = __webpack_require__(92186);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+utils@6.4.9_@types+react@19.1.8_react@19.1.0/node_modules/@mui/utils/esm/generateUtilityClass/generateUtilityClass.js
var generateUtilityClass = __webpack_require__(69014);
;// ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/Grid/gridClasses.js


function getGridUtilityClass(slot) {
    return (0,generateUtilityClass/* default */.Ay)('MuiGrid', slot);
}
const SPACINGS = [
    0,
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10
];
const DIRECTIONS = [
    'column-reverse',
    'column',
    'row-reverse',
    'row'
];
const WRAPS = [
    'nowrap',
    'wrap-reverse',
    'wrap'
];
const GRID_SIZES = [
    'auto',
    true,
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10,
    11,
    12
];
const gridClasses = (0,generateUtilityClasses/* default */.A)('MuiGrid', [
    'root',
    'container',
    'item',
    'zeroMinWidth',
    // spacings
    ...SPACINGS.map((spacing)=>"spacing-xs-".concat(spacing)),
    // direction values
    ...DIRECTIONS.map((direction)=>"direction-xs-".concat(direction)),
    // wrap values
    ...WRAPS.map((wrap)=>"wrap-xs-".concat(wrap)),
    // grid sizes for all breakpoints
    ...GRID_SIZES.map((size)=>"grid-xs-".concat(size)),
    ...GRID_SIZES.map((size)=>"grid-sm-".concat(size)),
    ...GRID_SIZES.map((size)=>"grid-md-".concat(size)),
    ...GRID_SIZES.map((size)=>"grid-lg-".concat(size)),
    ...GRID_SIZES.map((size)=>"grid-xl-".concat(size))
]);
/* harmony default export */ const Grid_gridClasses = (gridClasses);

// EXTERNAL MODULE: ../../node_modules/.pnpm/react@19.1.0/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(94513);
;// ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/Grid/Grid.js
/* __next_internal_client_entry_do_not_use__ generateGrid,generateDirection,generateRowGap,generateColumnGap,resolveSpacingStyles,resolveSpacingClasses,default auto */ // A grid component using the following libs as inspiration.
//
// For the implementation:
// - https://getbootstrap.com/docs/4.3/layout/grid/
// - https://github.com/kristoferjoseph/flexboxgrid/blob/master/src/css/flexboxgrid.css
// - https://github.com/roylee0704/react-flexbox-grid
// - https://material.angularjs.org/latest/layout/introduction
//
// Follow this flexbox Guide to better understand the underlying model:
// - https://css-tricks.com/snippets/css/a-guide-to-flexbox/













function generateGrid(param) {
    let { theme, ownerState } = param;
    let size;
    return theme.breakpoints.keys.reduce((globalStyles, breakpoint)=>{
        // Use side effect over immutability for better performance.
        let styles = {};
        if (ownerState[breakpoint]) {
            size = ownerState[breakpoint];
        }
        if (!size) {
            return globalStyles;
        }
        if (size === true) {
            // For the auto layouting
            styles = {
                flexBasis: 0,
                flexGrow: 1,
                maxWidth: '100%'
            };
        } else if (size === 'auto') {
            styles = {
                flexBasis: 'auto',
                flexGrow: 0,
                flexShrink: 0,
                maxWidth: 'none',
                width: 'auto'
            };
        } else {
            const columnsBreakpointValues = (0,breakpoints/* resolveBreakpointValues */.kW)({
                values: ownerState.columns,
                breakpoints: theme.breakpoints.values
            });
            const columnValue = typeof columnsBreakpointValues === 'object' ? columnsBreakpointValues[breakpoint] : columnsBreakpointValues;
            if (columnValue === undefined || columnValue === null) {
                return globalStyles;
            }
            // Keep 7 significant numbers.
            const width = "".concat(Math.round(size / columnValue * 10e7) / 10e5, "%");
            let more = {};
            if (ownerState.container && ownerState.item && ownerState.columnSpacing !== 0) {
                const themeSpacing = theme.spacing(ownerState.columnSpacing);
                if (themeSpacing !== '0px') {
                    const fullWidth = "calc(".concat(width, " + ").concat(themeSpacing, ")");
                    more = {
                        flexBasis: fullWidth,
                        maxWidth: fullWidth
                    };
                }
            }
            // Close to the bootstrap implementation:
            // https://github.com/twbs/bootstrap/blob/8fccaa2439e97ec72a4b7dc42ccc1f649790adb0/scss/mixins/_grid.scss#L41
            styles = {
                flexBasis: width,
                flexGrow: 0,
                maxWidth: width,
                ...more
            };
        }
        // No need for a media query for the first size.
        if (theme.breakpoints.values[breakpoint] === 0) {
            Object.assign(globalStyles, styles);
        } else {
            globalStyles[theme.breakpoints.up(breakpoint)] = styles;
        }
        return globalStyles;
    }, {});
}
function generateDirection(param) {
    let { theme, ownerState } = param;
    const directionValues = (0,breakpoints/* resolveBreakpointValues */.kW)({
        values: ownerState.direction,
        breakpoints: theme.breakpoints.values
    });
    return (0,breakpoints/* handleBreakpoints */.NI)({
        theme
    }, directionValues, (propValue)=>{
        const output = {
            flexDirection: propValue
        };
        if (propValue.startsWith('column')) {
            output["& > .".concat(Grid_gridClasses.item)] = {
                maxWidth: 'none'
            };
        }
        return output;
    });
}
/**
 * Extracts zero value breakpoint keys before a non-zero value breakpoint key.
 * @example { xs: 0, sm: 0, md: 2, lg: 0, xl: 0 } or [0, 0, 2, 0, 0]
 * @returns [xs, sm]
 */ function extractZeroValueBreakpointKeys(param) {
    let { breakpoints, values } = param;
    let nonZeroKey = '';
    Object.keys(values).forEach((key)=>{
        if (nonZeroKey !== '') {
            return;
        }
        if (values[key] !== 0) {
            nonZeroKey = key;
        }
    });
    const sortedBreakpointKeysByValue = Object.keys(breakpoints).sort((a, b)=>{
        return breakpoints[a] - breakpoints[b];
    });
    return sortedBreakpointKeysByValue.slice(0, sortedBreakpointKeysByValue.indexOf(nonZeroKey));
}
function generateRowGap(param) {
    let { theme, ownerState } = param;
    const { container, rowSpacing } = ownerState;
    let styles = {};
    if (container && rowSpacing !== 0) {
        const rowSpacingValues = (0,breakpoints/* resolveBreakpointValues */.kW)({
            values: rowSpacing,
            breakpoints: theme.breakpoints.values
        });
        let zeroValueBreakpointKeys;
        if (typeof rowSpacingValues === 'object') {
            zeroValueBreakpointKeys = extractZeroValueBreakpointKeys({
                breakpoints: theme.breakpoints.values,
                values: rowSpacingValues
            });
        }
        styles = (0,breakpoints/* handleBreakpoints */.NI)({
            theme
        }, rowSpacingValues, (propValue, breakpoint)=>{
            const themeSpacing = theme.spacing(propValue);
            if (themeSpacing !== '0px') {
                return {
                    marginTop: "calc(-1 * ".concat(themeSpacing, ")"),
                    ["& > .".concat(Grid_gridClasses.item)]: {
                        paddingTop: themeSpacing
                    }
                };
            }
            if (zeroValueBreakpointKeys === null || zeroValueBreakpointKeys === void 0 ? void 0 : zeroValueBreakpointKeys.includes(breakpoint)) {
                return {};
            }
            return {
                marginTop: 0,
                ["& > .".concat(Grid_gridClasses.item)]: {
                    paddingTop: 0
                }
            };
        });
    }
    return styles;
}
function generateColumnGap(param) {
    let { theme, ownerState } = param;
    const { container, columnSpacing } = ownerState;
    let styles = {};
    if (container && columnSpacing !== 0) {
        const columnSpacingValues = (0,breakpoints/* resolveBreakpointValues */.kW)({
            values: columnSpacing,
            breakpoints: theme.breakpoints.values
        });
        let zeroValueBreakpointKeys;
        if (typeof columnSpacingValues === 'object') {
            zeroValueBreakpointKeys = extractZeroValueBreakpointKeys({
                breakpoints: theme.breakpoints.values,
                values: columnSpacingValues
            });
        }
        styles = (0,breakpoints/* handleBreakpoints */.NI)({
            theme
        }, columnSpacingValues, (propValue, breakpoint)=>{
            const themeSpacing = theme.spacing(propValue);
            if (themeSpacing !== '0px') {
                const negativeValue = "calc(-1 * ".concat(themeSpacing, ")");
                return {
                    width: "calc(100% + ".concat(themeSpacing, ")"),
                    marginLeft: negativeValue,
                    ["& > .".concat(Grid_gridClasses.item)]: {
                        paddingLeft: themeSpacing
                    }
                };
            }
            if (zeroValueBreakpointKeys === null || zeroValueBreakpointKeys === void 0 ? void 0 : zeroValueBreakpointKeys.includes(breakpoint)) {
                return {};
            }
            return {
                width: '100%',
                marginLeft: 0,
                ["& > .".concat(Grid_gridClasses.item)]: {
                    paddingLeft: 0
                }
            };
        });
    }
    return styles;
}
function resolveSpacingStyles(spacing, breakpoints) {
    let styles = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    // undefined/null or `spacing` <= 0
    if (!spacing || spacing <= 0) {
        return [];
    }
    // in case of string/number `spacing`
    if (typeof spacing === 'string' && !Number.isNaN(Number(spacing)) || typeof spacing === 'number') {
        return [
            styles["spacing-xs-".concat(String(spacing))]
        ];
    }
    // in case of object `spacing`
    const spacingStyles = [];
    breakpoints.forEach((breakpoint)=>{
        const value = spacing[breakpoint];
        if (Number(value) > 0) {
            spacingStyles.push(styles["spacing-".concat(breakpoint, "-").concat(String(value))]);
        }
    });
    return spacingStyles;
}
// Default CSS values
// flex: '0 1 auto',
// flexDirection: 'row',
// alignItems: 'flex-start',
// flexWrap: 'nowrap',
// justifyContent: 'flex-start',
const GridRoot = (0,styled/* default */.Ay)('div', {
    name: 'MuiGrid',
    slot: 'Root',
    overridesResolver: (props, styles)=>{
        const { ownerState } = props;
        const { container, direction, item, spacing, wrap, zeroMinWidth, breakpoints } = ownerState;
        let spacingStyles = [];
        // in case of grid item
        if (container) {
            spacingStyles = resolveSpacingStyles(spacing, breakpoints, styles);
        }
        const breakpointsStyles = [];
        breakpoints.forEach((breakpoint)=>{
            const value = ownerState[breakpoint];
            if (value) {
                breakpointsStyles.push(styles["grid-".concat(breakpoint, "-").concat(String(value))]);
            }
        });
        return [
            styles.root,
            container && styles.container,
            item && styles.item,
            zeroMinWidth && styles.zeroMinWidth,
            ...spacingStyles,
            direction !== 'row' && styles["direction-xs-".concat(String(direction))],
            wrap !== 'wrap' && styles["wrap-xs-".concat(String(wrap))],
            ...breakpointsStyles
        ];
    }
})(// FIXME(romgrk): Can't use memoTheme here
(param)=>{
    let { ownerState } = param;
    return {
        boxSizing: 'border-box',
        ...ownerState.container && {
            display: 'flex',
            flexWrap: 'wrap',
            width: '100%'
        },
        ...ownerState.item && {
            margin: 0 // For instance, it's useful when used with a `figure` element.
        },
        ...ownerState.zeroMinWidth && {
            minWidth: 0
        },
        ...ownerState.wrap !== 'wrap' && {
            flexWrap: ownerState.wrap
        }
    };
}, generateDirection, generateRowGap, generateColumnGap, generateGrid);
function resolveSpacingClasses(spacing, breakpoints) {
    // undefined/null or `spacing` <= 0
    if (!spacing || spacing <= 0) {
        return [];
    }
    // in case of string/number `spacing`
    if (typeof spacing === 'string' && !Number.isNaN(Number(spacing)) || typeof spacing === 'number') {
        return [
            "spacing-xs-".concat(String(spacing))
        ];
    }
    // in case of object `spacing`
    const classes = [];
    breakpoints.forEach((breakpoint)=>{
        const value = spacing[breakpoint];
        if (Number(value) > 0) {
            const className = "spacing-".concat(breakpoint, "-").concat(String(value));
            classes.push(className);
        }
    });
    return classes;
}
const useUtilityClasses = (ownerState)=>{
    const { classes, container, direction, item, spacing, wrap, zeroMinWidth, breakpoints } = ownerState;
    let spacingClasses = [];
    // in case of grid item
    if (container) {
        spacingClasses = resolveSpacingClasses(spacing, breakpoints);
    }
    const breakpointsClasses = [];
    breakpoints.forEach((breakpoint)=>{
        const value = ownerState[breakpoint];
        if (value) {
            breakpointsClasses.push("grid-".concat(breakpoint, "-").concat(String(value)));
        }
    });
    const slots = {
        root: [
            'root',
            container && 'container',
            item && 'item',
            zeroMinWidth && 'zeroMinWidth',
            ...spacingClasses,
            direction !== 'row' && "direction-xs-".concat(String(direction)),
            wrap !== 'wrap' && "wrap-xs-".concat(String(wrap)),
            ...breakpointsClasses
        ]
    };
    return (0,composeClasses/* default */.A)(slots, getGridUtilityClass, classes);
};
/**
 * @deprecated Use the [`Grid2`](https://mui.com/material-ui/react-grid2/) component instead.
 */ const Grid = /*#__PURE__*/ react.forwardRef(function Grid(inProps, ref) {
    const themeProps = (0,DefaultPropsProvider/* useDefaultProps */.b)({
        props: inProps,
        name: 'MuiGrid'
    });
    const { breakpoints } = (0,useTheme/* default */.A)();
    const props = (0,extendSxProp/* default */.A)(themeProps);
    const { className, columns: columnsProp, columnSpacing: columnSpacingProp, component = 'div', container = false, direction = 'row', item = false, rowSpacing: rowSpacingProp, spacing = 0, wrap = 'wrap', zeroMinWidth = false, ...other } = props;
    const rowSpacing = rowSpacingProp || spacing;
    const columnSpacing = columnSpacingProp || spacing;
    const columnsContext = react.useContext(Grid_GridContext);
    // columns set with default breakpoint unit of 12
    const columns = container ? columnsProp || 12 : columnsContext;
    const breakpointsValues = {};
    const otherFiltered = {
        ...other
    };
    breakpoints.keys.forEach((breakpoint)=>{
        if (other[breakpoint] != null) {
            breakpointsValues[breakpoint] = other[breakpoint];
            delete otherFiltered[breakpoint];
        }
    });
    const ownerState = {
        ...props,
        columns,
        container,
        direction,
        item,
        rowSpacing,
        columnSpacing,
        wrap,
        zeroMinWidth,
        spacing,
        ...breakpointsValues,
        breakpoints: breakpoints.keys
    };
    const classes = useUtilityClasses(ownerState);
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(Grid_GridContext.Provider, {
        value: columns,
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(GridRoot, {
            ownerState: ownerState,
            className: (0,clsx/* default */.A)(classes.root, className),
            as: component,
            ref: ref,
            ...otherFiltered
        })
    });
});
 false ? 0 : void 0;
if (false) {}
/* harmony default export */ const Grid_Grid = (Grid);


/***/ }),

/***/ 88714:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils_createSvgIcon_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(61541);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(94513);
/* __next_internal_client_entry_do_not_use__ default auto */ 

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_utils_createSvgIcon_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A)(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
    d: "M17 10.5V7c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h12c.55 0 1-.45 1-1v-3.5l4 4v-11z"
}), 'Videocam'));


/***/ })

}]);
//# sourceMappingURL=9749-06b56786a56b6a09.js.map