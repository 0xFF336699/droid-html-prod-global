"use strict";
(self["webpackChunk_N_E"] = self["webpackChunk_N_E"] || []).push([[472],{

/***/ 62145:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ Container_Container)
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/react@19.1.0/node_modules/react/index.js
var react = __webpack_require__(94285);
// EXTERNAL MODULE: ../../node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs
var clsx = __webpack_require__(3638);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+utils@6.4.9_@types+react@19.1.8_react@19.1.0/node_modules/@mui/utils/esm/generateUtilityClass/generateUtilityClass.js
var generateUtilityClass = __webpack_require__(69014);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+utils@6.4.9_@types+react@19.1.8_react@19.1.0/node_modules/@mui/utils/esm/composeClasses/composeClasses.js
var composeClasses = __webpack_require__(95116);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+utils@6.4.9_@types+react@19.1.8_react@19.1.0/node_modules/@mui/utils/esm/capitalize/capitalize.js
var capitalize = __webpack_require__(40144);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+system@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled@1_sfs2vjcbuqchwdpqpmkla22opm/node_modules/@mui/system/esm/useThemeProps/useThemeProps.js + 1 modules
var useThemeProps = __webpack_require__(45375);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+system@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled@1_sfs2vjcbuqchwdpqpmkla22opm/node_modules/@mui/system/esm/styled/styled.js
var styled = __webpack_require__(17933);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+system@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled@1_sfs2vjcbuqchwdpqpmkla22opm/node_modules/@mui/system/esm/createTheme/createTheme.js + 3 modules
var createTheme = __webpack_require__(43270);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react@19.1.0/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(94513);
;// ../../node_modules/.pnpm/@mui+system@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled@1_sfs2vjcbuqchwdpqpmkla22opm/node_modules/@mui/system/esm/Container/createContainer.js










const defaultTheme = (0,createTheme/* default */.A)();
const defaultCreateStyledComponent = (0,styled/* default */.A)('div', {
  name: 'MuiContainer',
  slot: 'Root',
  overridesResolver: (props, styles) => {
    const {
      ownerState
    } = props;
    return [styles.root, styles[`maxWidth${(0,capitalize/* default */.A)(String(ownerState.maxWidth))}`], ownerState.fixed && styles.fixed, ownerState.disableGutters && styles.disableGutters];
  }
});
const useThemePropsDefault = inProps => (0,useThemeProps/* default */.A)({
  props: inProps,
  name: 'MuiContainer',
  defaultTheme
});
const useUtilityClasses = (ownerState, componentName) => {
  const getContainerUtilityClass = slot => {
    return (0,generateUtilityClass/* default */.Ay)(componentName, slot);
  };
  const {
    classes,
    fixed,
    disableGutters,
    maxWidth
  } = ownerState;
  const slots = {
    root: ['root', maxWidth && `maxWidth${(0,capitalize/* default */.A)(String(maxWidth))}`, fixed && 'fixed', disableGutters && 'disableGutters']
  };
  return (0,composeClasses/* default */.A)(slots, getContainerUtilityClass, classes);
};
function createContainer(options = {}) {
  const {
    // This will allow adding custom styled fn (for example for custom sx style function)
    createStyledComponent = defaultCreateStyledComponent,
    useThemeProps = useThemePropsDefault,
    componentName = 'MuiContainer'
  } = options;
  const ContainerRoot = createStyledComponent(({
    theme,
    ownerState
  }) => ({
    width: '100%',
    marginLeft: 'auto',
    boxSizing: 'border-box',
    marginRight: 'auto',
    ...(!ownerState.disableGutters && {
      paddingLeft: theme.spacing(2),
      paddingRight: theme.spacing(2),
      // @ts-ignore module augmentation fails if custom breakpoints are used
      [theme.breakpoints.up('sm')]: {
        paddingLeft: theme.spacing(3),
        paddingRight: theme.spacing(3)
      }
    })
  }), ({
    theme,
    ownerState
  }) => ownerState.fixed && Object.keys(theme.breakpoints.values).reduce((acc, breakpointValueKey) => {
    const breakpoint = breakpointValueKey;
    const value = theme.breakpoints.values[breakpoint];
    if (value !== 0) {
      // @ts-ignore
      acc[theme.breakpoints.up(breakpoint)] = {
        maxWidth: `${value}${theme.breakpoints.unit}`
      };
    }
    return acc;
  }, {}), ({
    theme,
    ownerState
  }) => ({
    // @ts-ignore module augmentation fails if custom breakpoints are used
    ...(ownerState.maxWidth === 'xs' && {
      // @ts-ignore module augmentation fails if custom breakpoints are used
      [theme.breakpoints.up('xs')]: {
        // @ts-ignore module augmentation fails if custom breakpoints are used
        maxWidth: Math.max(theme.breakpoints.values.xs, 444)
      }
    }),
    ...(ownerState.maxWidth &&
    // @ts-ignore module augmentation fails if custom breakpoints are used
    ownerState.maxWidth !== 'xs' && {
      // @ts-ignore module augmentation fails if custom breakpoints are used
      [theme.breakpoints.up(ownerState.maxWidth)]: {
        // @ts-ignore module augmentation fails if custom breakpoints are used
        maxWidth: `${theme.breakpoints.values[ownerState.maxWidth]}${theme.breakpoints.unit}`
      }
    })
  }));
  const Container = /*#__PURE__*/react.forwardRef(function Container(inProps, ref) {
    const props = useThemeProps(inProps);
    const {
      className,
      component = 'div',
      disableGutters = false,
      fixed = false,
      maxWidth = 'lg',
      classes: classesProp,
      ...other
    } = props;
    const ownerState = {
      ...props,
      component,
      disableGutters,
      fixed,
      maxWidth
    };

    // @ts-ignore module augmentation fails if custom breakpoints are used
    const classes = useUtilityClasses(ownerState, componentName);
    return (
      /*#__PURE__*/
      // @ts-ignore theme is injected by the styled util
      (0,jsx_runtime.jsx)(ContainerRoot, {
        as: component
        // @ts-ignore module augmentation fails if custom breakpoints are used
        ,
        ownerState: ownerState,
        className: (0,clsx/* default */.A)(classes.root, className),
        ref: ref,
        ...other
      })
    );
  });
   false ? 0 : void 0;
  return Container;
}
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/utils/capitalize.js
var utils_capitalize = __webpack_require__(93385);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/styles/styled.js
var styles_styled = __webpack_require__(96543);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/DefaultPropsProvider/DefaultPropsProvider.js
var DefaultPropsProvider = __webpack_require__(85042);
;// ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/Container/Container.js
/* __next_internal_client_entry_do_not_use__ default auto */ 




const Container = createContainer({
    createStyledComponent: (0,styles_styled/* default */.Ay)('div', {
        name: 'MuiContainer',
        slot: 'Root',
        overridesResolver: (props, styles)=>{
            const { ownerState } = props;
            return [
                styles.root,
                styles["maxWidth".concat((0,utils_capitalize/* default */.A)(String(ownerState.maxWidth)))],
                ownerState.fixed && styles.fixed,
                ownerState.disableGutters && styles.disableGutters
            ];
        }
    }),
    useThemeProps: (inProps)=>(0,DefaultPropsProvider/* useDefaultProps */.b)({
            props: inProps,
            name: 'MuiContainer'
        })
});
 false ? 0 : void 0;
/* harmony default export */ const Container_Container = (Container);


/***/ }),

/***/ 95138:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ esm)
});

;// ../../node_modules/.pnpm/i18next-http-backend@3.0.2_encoding@0.1.13/node_modules/i18next-http-backend/esm/utils.js
function _typeof(o) {
    "@babel/helpers - typeof";
    return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o) {
        return typeof o;
    } : function(o) {
        return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
    }, _typeof(o);
}
var arr = [];
var each = arr.forEach;
var slice = arr.slice;
function defaults(obj) {
    each.call(slice.call(arguments, 1), function(source) {
        if (source) {
            for(var prop in source){
                if (obj[prop] === undefined) obj[prop] = source[prop];
            }
        }
    });
    return obj;
}
function hasXMLHttpRequest() {
    return typeof XMLHttpRequest === 'function' || (typeof XMLHttpRequest === "undefined" ? "undefined" : _typeof(XMLHttpRequest)) === 'object';
}
function isPromise(maybePromise) {
    return !!maybePromise && typeof maybePromise.then === 'function';
}
function makePromise(maybePromise) {
    if (isPromise(maybePromise)) {
        return maybePromise;
    }
    return Promise.resolve(maybePromise);
}

;// ../../node_modules/.pnpm/i18next-http-backend@3.0.2_encoding@0.1.13/node_modules/i18next-http-backend/esm/request.js
function ownKeys(e, r) {
    var t = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var o = Object.getOwnPropertySymbols(e);
        r && (o = o.filter(function(r) {
            return Object.getOwnPropertyDescriptor(e, r).enumerable;
        })), t.push.apply(t, o);
    }
    return t;
}
function _objectSpread(e) {
    for(var r = 1; r < arguments.length; r++){
        var t = null != arguments[r] ? arguments[r] : {};
        r % 2 ? ownKeys(Object(t), !0).forEach(function(r) {
            _defineProperty(e, r, t[r]);
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function(r) {
            Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
        });
    }
    return e;
}
function _defineProperty(e, r, t) {
    return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, {
        value: t,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[r] = t, e;
}
function _toPropertyKey(t) {
    var i = _toPrimitive(t, "string");
    return "symbol" == request_typeof(i) ? i : i + "";
}
function _toPrimitive(t, r) {
    if ("object" != request_typeof(t) || !t) return t;
    var e = t[Symbol.toPrimitive];
    if (void 0 !== e) {
        var i = e.call(t, r || "default");
        if ("object" != request_typeof(i)) return i;
        throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return ("string" === r ? String : Number)(t);
}
function request_typeof(o) {
    "@babel/helpers - typeof";
    return request_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o) {
        return typeof o;
    } : function(o) {
        return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
    }, request_typeof(o);
}

var fetchApi = typeof fetch === 'function' ? fetch : undefined;
if (typeof global !== 'undefined' && global.fetch) {
    fetchApi = global.fetch;
} else if ( true && window.fetch) {
    fetchApi = window.fetch;
}
var XmlHttpRequestApi;
if (hasXMLHttpRequest()) {
    if (typeof global !== 'undefined' && global.XMLHttpRequest) {
        XmlHttpRequestApi = global.XMLHttpRequest;
    } else if ( true && window.XMLHttpRequest) {
        XmlHttpRequestApi = window.XMLHttpRequest;
    }
}
var ActiveXObjectApi;
if (typeof ActiveXObject === 'function') {
    if (typeof global !== 'undefined' && global.ActiveXObject) {
        ActiveXObjectApi = global.ActiveXObject;
    } else if ( true && window.ActiveXObject) {
        ActiveXObjectApi = window.ActiveXObject;
    }
}
if (typeof fetchApi !== 'function') fetchApi = undefined;
if (!fetchApi && !XmlHttpRequestApi && !ActiveXObjectApi) {
    try {
        __webpack_require__.e(/* import() */ 906).then(__webpack_require__.t.bind(__webpack_require__, 50906, 19)).then(function(mod) {
            fetchApi = mod.default;
        }).catch(function() {});
    } catch (e) {}
}
var addQueryString = function addQueryString(url, params) {
    if (params && request_typeof(params) === 'object') {
        var queryString = '';
        for(var paramName in params){
            queryString += '&' + encodeURIComponent(paramName) + '=' + encodeURIComponent(params[paramName]);
        }
        if (!queryString) return url;
        url = url + (url.indexOf('?') !== -1 ? '&' : '?') + queryString.slice(1);
    }
    return url;
};
var fetchIt = function fetchIt(url, fetchOptions, callback, altFetch) {
    var resolver = function resolver(response) {
        if (!response.ok) return callback(response.statusText || 'Error', {
            status: response.status
        });
        response.text().then(function(data) {
            callback(null, {
                status: response.status,
                data: data
            });
        }).catch(callback);
    };
    if (altFetch) {
        var altResponse = altFetch(url, fetchOptions);
        if (altResponse instanceof Promise) {
            altResponse.then(resolver).catch(callback);
            return;
        }
    }
    if (typeof fetch === 'function') {
        fetch(url, fetchOptions).then(resolver).catch(callback);
    } else {
        fetchApi(url, fetchOptions).then(resolver).catch(callback);
    }
};
var omitFetchOptions = false;
var requestWithFetch = function requestWithFetch(options, url, payload, callback) {
    if (options.queryStringParams) {
        url = addQueryString(url, options.queryStringParams);
    }
    var headers = _objectSpread({}, typeof options.customHeaders === 'function' ? options.customHeaders() : options.customHeaders);
    if (false) {}
    if (payload) headers['Content-Type'] = 'application/json';
    var reqOptions = typeof options.requestOptions === 'function' ? options.requestOptions(payload) : options.requestOptions;
    var fetchOptions = _objectSpread({
        method: payload ? 'POST' : 'GET',
        body: payload ? options.stringify(payload) : undefined,
        headers: headers
    }, omitFetchOptions ? {} : reqOptions);
    var altFetch = typeof options.alternateFetch === 'function' && options.alternateFetch.length >= 1 ? options.alternateFetch : undefined;
    try {
        fetchIt(url, fetchOptions, callback, altFetch);
    } catch (e) {
        if (!reqOptions || Object.keys(reqOptions).length === 0 || !e.message || e.message.indexOf('not implemented') < 0) {
            return callback(e);
        }
        try {
            Object.keys(reqOptions).forEach(function(opt) {
                delete fetchOptions[opt];
            });
            fetchIt(url, fetchOptions, callback, altFetch);
            omitFetchOptions = true;
        } catch (err) {
            callback(err);
        }
    }
};
var requestWithXmlHttpRequest = function requestWithXmlHttpRequest(options, url, payload, callback) {
    if (payload && request_typeof(payload) === 'object') {
        payload = addQueryString('', payload).slice(1);
    }
    if (options.queryStringParams) {
        url = addQueryString(url, options.queryStringParams);
    }
    try {
        var x = XmlHttpRequestApi ? new XmlHttpRequestApi() : new ActiveXObjectApi('MSXML2.XMLHTTP.3.0');
        x.open(payload ? 'POST' : 'GET', url, 1);
        if (!options.crossDomain) {
            x.setRequestHeader('X-Requested-With', 'XMLHttpRequest');
        }
        x.withCredentials = !!options.withCredentials;
        if (payload) {
            x.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
        }
        if (x.overrideMimeType) {
            x.overrideMimeType('application/json');
        }
        var h = options.customHeaders;
        h = typeof h === 'function' ? h() : h;
        if (h) {
            for(var i in h){
                x.setRequestHeader(i, h[i]);
            }
        }
        x.onreadystatechange = function() {
            x.readyState > 3 && callback(x.status >= 400 ? x.statusText : null, {
                status: x.status,
                data: x.responseText
            });
        };
        x.send(payload);
    } catch (e) {
        console && console.log(e);
    }
};
var request = function request(options, url, payload, callback) {
    if (typeof payload === 'function') {
        callback = payload;
        payload = undefined;
    }
    callback = callback || function() {};
    if (fetchApi && url.indexOf('file:') !== 0) {
        return requestWithFetch(options, url, payload, callback);
    }
    if (hasXMLHttpRequest() || typeof ActiveXObject === 'function') {
        return requestWithXmlHttpRequest(options, url, payload, callback);
    }
    callback(new Error('No fetch and no xhr implementation found!'));
};
/* harmony default export */ const esm_request = (request);

;// ../../node_modules/.pnpm/i18next-http-backend@3.0.2_encoding@0.1.13/node_modules/i18next-http-backend/esm/index.js
function esm_typeof(o) {
    "@babel/helpers - typeof";
    return esm_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o) {
        return typeof o;
    } : function(o) {
        return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
    }, esm_typeof(o);
}
function esm_ownKeys(e, r) {
    var t = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var o = Object.getOwnPropertySymbols(e);
        r && (o = o.filter(function(r) {
            return Object.getOwnPropertyDescriptor(e, r).enumerable;
        })), t.push.apply(t, o);
    }
    return t;
}
function esm_objectSpread(e) {
    for(var r = 1; r < arguments.length; r++){
        var t = null != arguments[r] ? arguments[r] : {};
        r % 2 ? esm_ownKeys(Object(t), !0).forEach(function(r) {
            esm_defineProperty(e, r, t[r]);
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : esm_ownKeys(Object(t)).forEach(function(r) {
            Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
        });
    }
    return e;
}
function _classCallCheck(a, n) {
    if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function");
}
function _defineProperties(e, r) {
    for(var t = 0; t < r.length; t++){
        var o = r[t];
        o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, esm_toPropertyKey(o.key), o);
    }
}
function _createClass(e, r, t) {
    return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", {
        writable: !1
    }), e;
}
function esm_defineProperty(e, r, t) {
    return (r = esm_toPropertyKey(r)) in e ? Object.defineProperty(e, r, {
        value: t,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[r] = t, e;
}
function esm_toPropertyKey(t) {
    var i = esm_toPrimitive(t, "string");
    return "symbol" == esm_typeof(i) ? i : i + "";
}
function esm_toPrimitive(t, r) {
    if ("object" != esm_typeof(t) || !t) return t;
    var e = t[Symbol.toPrimitive];
    if (void 0 !== e) {
        var i = e.call(t, r || "default");
        if ("object" != esm_typeof(i)) return i;
        throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return ("string" === r ? String : Number)(t);
}


var getDefaults = function getDefaults() {
    return {
        loadPath: '/locales/{{lng}}/{{ns}}.json',
        addPath: '/locales/add/{{lng}}/{{ns}}',
        parse: function parse(data) {
            return JSON.parse(data);
        },
        stringify: JSON.stringify,
        parsePayload: function parsePayload(namespace, key, fallbackValue) {
            return esm_defineProperty({}, key, fallbackValue || '');
        },
        parseLoadPayload: function parseLoadPayload(languages, namespaces) {
            return undefined;
        },
        request: esm_request,
        reloadInterval:  true ? false : 0,
        customHeaders: {},
        queryStringParams: {},
        crossDomain: false,
        withCredentials: false,
        overrideMimeType: false,
        requestOptions: {
            mode: 'cors',
            credentials: 'same-origin',
            cache: 'default'
        }
    };
};
var Backend = function() {
    function Backend(services) {
        var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
        var allOptions = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
        _classCallCheck(this, Backend);
        this.services = services;
        this.options = options;
        this.allOptions = allOptions;
        this.type = 'backend';
        this.init(services, options, allOptions);
    }
    return _createClass(Backend, [
        {
            key: "init",
            value: function init(services) {
                var _this = this;
                var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
                var allOptions = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
                this.services = services;
                this.options = esm_objectSpread(esm_objectSpread(esm_objectSpread({}, getDefaults()), this.options || {}), options);
                this.allOptions = allOptions;
                if (this.services && this.options.reloadInterval) {
                    var timer = setInterval(function() {
                        return _this.reload();
                    }, this.options.reloadInterval);
                    if (esm_typeof(timer) === 'object' && typeof timer.unref === 'function') timer.unref();
                }
            }
        },
        {
            key: "readMulti",
            value: function readMulti(languages, namespaces, callback) {
                this._readAny(languages, languages, namespaces, namespaces, callback);
            }
        },
        {
            key: "read",
            value: function read(language, namespace, callback) {
                this._readAny([
                    language
                ], language, [
                    namespace
                ], namespace, callback);
            }
        },
        {
            key: "_readAny",
            value: function _readAny(languages, loadUrlLanguages, namespaces, loadUrlNamespaces, callback) {
                var _this2 = this;
                var loadPath = this.options.loadPath;
                if (typeof this.options.loadPath === 'function') {
                    loadPath = this.options.loadPath(languages, namespaces);
                }
                loadPath = makePromise(loadPath);
                loadPath.then(function(resolvedLoadPath) {
                    if (!resolvedLoadPath) return callback(null, {});
                    var url = _this2.services.interpolator.interpolate(resolvedLoadPath, {
                        lng: languages.join('+'),
                        ns: namespaces.join('+')
                    });
                    _this2.loadUrl(url, callback, loadUrlLanguages, loadUrlNamespaces);
                });
            }
        },
        {
            key: "loadUrl",
            value: function loadUrl(url, callback, languages, namespaces) {
                var _this3 = this;
                var lng = typeof languages === 'string' ? [
                    languages
                ] : languages;
                var ns = typeof namespaces === 'string' ? [
                    namespaces
                ] : namespaces;
                var payload = this.options.parseLoadPayload(lng, ns);
                this.options.request(this.options, url, payload, function(err, res) {
                    if (res && (res.status >= 500 && res.status < 600 || !res.status)) return callback('failed loading ' + url + '; status code: ' + res.status, true);
                    if (res && res.status >= 400 && res.status < 500) return callback('failed loading ' + url + '; status code: ' + res.status, false);
                    if (!res && err && err.message) {
                        var errorMessage = err.message.toLowerCase();
                        var isNetworkError = [
                            'failed',
                            'fetch',
                            'network',
                            'load'
                        ].find(function(term) {
                            return errorMessage.indexOf(term) > -1;
                        });
                        if (isNetworkError) {
                            return callback('failed loading ' + url + ': ' + err.message, true);
                        }
                    }
                    if (err) return callback(err, false);
                    var ret, parseErr;
                    try {
                        if (typeof res.data === 'string') {
                            ret = _this3.options.parse(res.data, languages, namespaces);
                        } else {
                            ret = res.data;
                        }
                    } catch (e) {
                        parseErr = 'failed parsing ' + url + ' to json';
                    }
                    if (parseErr) return callback(parseErr, false);
                    callback(null, ret);
                });
            }
        },
        {
            key: "create",
            value: function create(languages, namespace, key, fallbackValue, callback) {
                var _this4 = this;
                if (!this.options.addPath) return;
                if (typeof languages === 'string') languages = [
                    languages
                ];
                var payload = this.options.parsePayload(namespace, key, fallbackValue);
                var finished = 0;
                var dataArray = [];
                var resArray = [];
                languages.forEach(function(lng) {
                    var addPath = _this4.options.addPath;
                    if (typeof _this4.options.addPath === 'function') {
                        addPath = _this4.options.addPath(lng, namespace);
                    }
                    var url = _this4.services.interpolator.interpolate(addPath, {
                        lng: lng,
                        ns: namespace
                    });
                    _this4.options.request(_this4.options, url, payload, function(data, res) {
                        finished += 1;
                        dataArray.push(data);
                        resArray.push(res);
                        if (finished === languages.length) {
                            if (typeof callback === 'function') callback(dataArray, resArray);
                        }
                    });
                });
            }
        },
        {
            key: "reload",
            value: function reload() {
                var _this5 = this;
                var _this$services = this.services, backendConnector = _this$services.backendConnector, languageUtils = _this$services.languageUtils, logger = _this$services.logger;
                var currentLanguage = backendConnector.language;
                if (currentLanguage && currentLanguage.toLowerCase() === 'cimode') return;
                var toLoad = [];
                var append = function append(lng) {
                    var lngs = languageUtils.toResolveHierarchy(lng);
                    lngs.forEach(function(l) {
                        if (toLoad.indexOf(l) < 0) toLoad.push(l);
                    });
                };
                append(currentLanguage);
                if (this.allOptions.preload) this.allOptions.preload.forEach(function(l) {
                    return append(l);
                });
                toLoad.forEach(function(lng) {
                    _this5.allOptions.ns.forEach(function(ns) {
                        backendConnector.read(lng, ns, 'read', null, null, function(err, data) {
                            if (err) logger.warn("loading namespace ".concat(ns, " for language ").concat(lng, " failed"), err);
                            if (!err && data) logger.log("loaded namespace ".concat(ns, " for language ").concat(lng), data);
                            backendConnector.loaded("".concat(lng, "|").concat(ns), err, data);
                        });
                    });
                });
            }
        }
    ]);
}();
Backend.type = 'backend';
/* harmony default export */ const esm = (Backend);


/***/ }),

/***/ 99031:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ Browser)
/* harmony export */ });
const { slice, forEach } = [];
function defaults(obj) {
    forEach.call(slice.call(arguments, 1), (source)=>{
        if (source) {
            for(const prop in source){
                if (obj[prop] === undefined) obj[prop] = source[prop];
            }
        }
    });
    return obj;
}
function hasXSS(input) {
    if (typeof input !== 'string') return false;
    // Common XSS attack patterns
    const xssPatterns = [
        /<\s*script.*?>/i,
        /<\s*\/\s*script\s*>/i,
        /<\s*img.*?on\w+\s*=/i,
        /<\s*\w+\s*on\w+\s*=.*?>/i,
        /javascript\s*:/i,
        /vbscript\s*:/i,
        /expression\s*\(/i,
        /eval\s*\(/i,
        /alert\s*\(/i,
        /document\.cookie/i,
        /document\.write\s*\(/i,
        /window\.location/i,
        /innerHTML/i
    ];
    return xssPatterns.some((pattern)=>pattern.test(input));
}
// eslint-disable-next-line no-control-regex
const fieldContentRegExp = /^[\u0009\u0020-\u007e\u0080-\u00ff]+$/;
const serializeCookie = function(name, val) {
    let options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {
        path: '/'
    };
    const opt = options;
    const value = encodeURIComponent(val);
    let str = "".concat(name, "=").concat(value);
    if (opt.maxAge > 0) {
        const maxAge = opt.maxAge - 0;
        if (Number.isNaN(maxAge)) throw new Error('maxAge should be a Number');
        str += "; Max-Age=".concat(Math.floor(maxAge));
    }
    if (opt.domain) {
        if (!fieldContentRegExp.test(opt.domain)) {
            throw new TypeError('option domain is invalid');
        }
        str += "; Domain=".concat(opt.domain);
    }
    if (opt.path) {
        if (!fieldContentRegExp.test(opt.path)) {
            throw new TypeError('option path is invalid');
        }
        str += "; Path=".concat(opt.path);
    }
    if (opt.expires) {
        if (typeof opt.expires.toUTCString !== 'function') {
            throw new TypeError('option expires is invalid');
        }
        str += "; Expires=".concat(opt.expires.toUTCString());
    }
    if (opt.httpOnly) str += '; HttpOnly';
    if (opt.secure) str += '; Secure';
    if (opt.sameSite) {
        const sameSite = typeof opt.sameSite === 'string' ? opt.sameSite.toLowerCase() : opt.sameSite;
        switch(sameSite){
            case true:
                str += '; SameSite=Strict';
                break;
            case 'lax':
                str += '; SameSite=Lax';
                break;
            case 'strict':
                str += '; SameSite=Strict';
                break;
            case 'none':
                str += '; SameSite=None';
                break;
            default:
                throw new TypeError('option sameSite is invalid');
        }
    }
    if (opt.partitioned) str += '; Partitioned';
    return str;
};
const cookie = {
    create (name, value, minutes, domain) {
        let cookieOptions = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : {
            path: '/',
            sameSite: 'strict'
        };
        if (minutes) {
            cookieOptions.expires = new Date();
            cookieOptions.expires.setTime(cookieOptions.expires.getTime() + minutes * 60 * 1000);
        }
        if (domain) cookieOptions.domain = domain;
        document.cookie = serializeCookie(name, value, cookieOptions);
    },
    read (name) {
        const nameEQ = "".concat(name, "=");
        const ca = document.cookie.split(';');
        for(let i = 0; i < ca.length; i++){
            let c = ca[i];
            while(c.charAt(0) === ' ')c = c.substring(1, c.length);
            if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
        }
        return null;
    },
    remove (name, domain) {
        this.create(name, '', -1, domain);
    }
};
var cookie$1 = {
    name: 'cookie',
    // Deconstruct the options object and extract the lookupCookie property
    lookup (_ref) {
        let { lookupCookie } = _ref;
        if (lookupCookie && typeof document !== 'undefined') {
            return cookie.read(lookupCookie) || undefined;
        }
        return undefined;
    },
    // Deconstruct the options object and extract the lookupCookie, cookieMinutes, cookieDomain, and cookieOptions properties
    cacheUserLanguage (lng, _ref2) {
        let { lookupCookie, cookieMinutes, cookieDomain, cookieOptions } = _ref2;
        if (lookupCookie && typeof document !== 'undefined') {
            cookie.create(lookupCookie, lng, cookieMinutes, cookieDomain, cookieOptions);
        }
    }
};
var querystring = {
    name: 'querystring',
    // Deconstruct the options object and extract the lookupQuerystring property
    lookup (_ref) {
        let { lookupQuerystring } = _ref;
        let found;
        if (true) {
            var _window_location_hash;
            let { search } = window.location;
            if (!window.location.search && ((_window_location_hash = window.location.hash) === null || _window_location_hash === void 0 ? void 0 : _window_location_hash.indexOf('?')) > -1) {
                search = window.location.hash.substring(window.location.hash.indexOf('?'));
            }
            const query = search.substring(1);
            const params = query.split('&');
            for(let i = 0; i < params.length; i++){
                const pos = params[i].indexOf('=');
                if (pos > 0) {
                    const key = params[i].substring(0, pos);
                    if (key === lookupQuerystring) {
                        found = params[i].substring(pos + 1);
                    }
                }
            }
        }
        return found;
    }
};
var hash = {
    name: 'hash',
    // Deconstruct the options object and extract the lookupHash property and the lookupFromHashIndex property
    lookup (_ref) {
        let { lookupHash, lookupFromHashIndex } = _ref;
        let found;
        if (true) {
            const { hash } = window.location;
            if (hash && hash.length > 2) {
                const query = hash.substring(1);
                if (lookupHash) {
                    const params = query.split('&');
                    for(let i = 0; i < params.length; i++){
                        const pos = params[i].indexOf('=');
                        if (pos > 0) {
                            const key = params[i].substring(0, pos);
                            if (key === lookupHash) {
                                found = params[i].substring(pos + 1);
                            }
                        }
                    }
                }
                if (found) return found;
                if (!found && lookupFromHashIndex > -1) {
                    var _language_index;
                    const language = hash.match(/\/([a-zA-Z-]*)/g);
                    if (!Array.isArray(language)) return undefined;
                    const index = typeof lookupFromHashIndex === 'number' ? lookupFromHashIndex : 0;
                    return (_language_index = language[index]) === null || _language_index === void 0 ? void 0 : _language_index.replace('/', '');
                }
            }
        }
        return found;
    }
};
let hasLocalStorageSupport = null;
const localStorageAvailable = ()=>{
    if (hasLocalStorageSupport !== null) return hasLocalStorageSupport;
    try {
        hasLocalStorageSupport =  true && window.localStorage !== null;
        if (!hasLocalStorageSupport) {
            return false;
        }
        const testKey = 'i18next.translate.boo';
        window.localStorage.setItem(testKey, 'foo');
        window.localStorage.removeItem(testKey);
    } catch (e) {
        hasLocalStorageSupport = false;
    }
    return hasLocalStorageSupport;
};
var localStorage = {
    name: 'localStorage',
    // Deconstruct the options object and extract the lookupLocalStorage property
    lookup (_ref) {
        let { lookupLocalStorage } = _ref;
        if (lookupLocalStorage && localStorageAvailable()) {
            return window.localStorage.getItem(lookupLocalStorage) || undefined; // Undefined ensures type consistency with the previous version of this function
        }
        return undefined;
    },
    // Deconstruct the options object and extract the lookupLocalStorage property
    cacheUserLanguage (lng, _ref2) {
        let { lookupLocalStorage } = _ref2;
        if (lookupLocalStorage && localStorageAvailable()) {
            window.localStorage.setItem(lookupLocalStorage, lng);
        }
    }
};
let hasSessionStorageSupport = null;
const sessionStorageAvailable = ()=>{
    if (hasSessionStorageSupport !== null) return hasSessionStorageSupport;
    try {
        hasSessionStorageSupport =  true && window.sessionStorage !== null;
        if (!hasSessionStorageSupport) {
            return false;
        }
        const testKey = 'i18next.translate.boo';
        window.sessionStorage.setItem(testKey, 'foo');
        window.sessionStorage.removeItem(testKey);
    } catch (e) {
        hasSessionStorageSupport = false;
    }
    return hasSessionStorageSupport;
};
var sessionStorage = {
    name: 'sessionStorage',
    lookup (_ref) {
        let { lookupSessionStorage } = _ref;
        if (lookupSessionStorage && sessionStorageAvailable()) {
            return window.sessionStorage.getItem(lookupSessionStorage) || undefined;
        }
        return undefined;
    },
    cacheUserLanguage (lng, _ref2) {
        let { lookupSessionStorage } = _ref2;
        if (lookupSessionStorage && sessionStorageAvailable()) {
            window.sessionStorage.setItem(lookupSessionStorage, lng);
        }
    }
};
var navigator$1 = {
    name: 'navigator',
    lookup (options) {
        const found = [];
        if (typeof navigator !== 'undefined') {
            const { languages, userLanguage, language } = navigator;
            if (languages) {
                // chrome only; not an array, so can't use .push.apply instead of iterating
                for(let i = 0; i < languages.length; i++){
                    found.push(languages[i]);
                }
            }
            if (userLanguage) {
                found.push(userLanguage);
            }
            if (language) {
                found.push(language);
            }
        }
        return found.length > 0 ? found : undefined;
    }
};
var htmlTag = {
    name: 'htmlTag',
    // Deconstruct the options object and extract the htmlTag property
    lookup (_ref) {
        let { htmlTag } = _ref;
        let found;
        const internalHtmlTag = htmlTag || (typeof document !== 'undefined' ? document.documentElement : null);
        if (internalHtmlTag && typeof internalHtmlTag.getAttribute === 'function') {
            found = internalHtmlTag.getAttribute('lang');
        }
        return found;
    }
};
var path = {
    name: 'path',
    // Deconstruct the options object and extract the lookupFromPathIndex property
    lookup (_ref) {
        var _language_index;
        let { lookupFromPathIndex } = _ref;
        if (false) {}
        const language = window.location.pathname.match(/\/([a-zA-Z-]*)/g);
        if (!Array.isArray(language)) return undefined;
        const index = typeof lookupFromPathIndex === 'number' ? lookupFromPathIndex : 0;
        return (_language_index = language[index]) === null || _language_index === void 0 ? void 0 : _language_index.replace('/', '');
    }
};
var subdomain = {
    name: 'subdomain',
    lookup (_ref) {
        var _window_location_hostname, _window_location;
        let { lookupFromSubdomainIndex } = _ref;
        // If given get the subdomain index else 1
        const internalLookupFromSubdomainIndex = typeof lookupFromSubdomainIndex === 'number' ? lookupFromSubdomainIndex + 1 : 1;
        // get all matches if window.location. is existing
        // first item of match is the match itself and the second is the first group match which should be the first subdomain match
        // is the hostname no public domain get the or option of localhost
        const language =  true && ((_window_location = window.location) === null || _window_location === void 0 ? void 0 : (_window_location_hostname = _window_location.hostname) === null || _window_location_hostname === void 0 ? void 0 : _window_location_hostname.match(/^(\w{2,5})\.(([a-z0-9-]{1,63}\.[a-z]{2,6})|localhost)/i));
        // if there is no match (null) return undefined
        if (!language) return undefined;
        // return the given group match
        return language[internalLookupFromSubdomainIndex];
    }
};
// some environments, throws when accessing document.cookie
let canCookies = false;
try {
    // eslint-disable-next-line no-unused-expressions
    document.cookie;
    canCookies = true;
// eslint-disable-next-line no-empty
} catch (e) {}
const order = [
    'querystring',
    'cookie',
    'localStorage',
    'sessionStorage',
    'navigator',
    'htmlTag'
];
if (!canCookies) order.splice(1, 1);
const getDefaults = ()=>({
        order,
        lookupQuerystring: 'lng',
        lookupCookie: 'i18next',
        lookupLocalStorage: 'i18nextLng',
        lookupSessionStorage: 'i18nextLng',
        // cache user language
        caches: [
            'localStorage'
        ],
        excludeCacheFor: [
            'cimode'
        ],
        // cookieMinutes: 10,
        // cookieDomain: 'myDomain'
        convertDetectedLanguage: (l)=>l
    });
class Browser {
    init() {
        let services = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
            languageUtils: {}
        };
        let options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
        let i18nOptions = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
        this.services = services;
        this.options = defaults(options, this.options || {}, getDefaults());
        if (typeof this.options.convertDetectedLanguage === 'string' && this.options.convertDetectedLanguage.indexOf('15897') > -1) {
            this.options.convertDetectedLanguage = (l)=>l.replace('-', '_');
        }
        // backwards compatibility
        if (this.options.lookupFromUrlIndex) this.options.lookupFromPathIndex = this.options.lookupFromUrlIndex;
        this.i18nOptions = i18nOptions;
        this.addDetector(cookie$1);
        this.addDetector(querystring);
        this.addDetector(localStorage);
        this.addDetector(sessionStorage);
        this.addDetector(navigator$1);
        this.addDetector(htmlTag);
        this.addDetector(path);
        this.addDetector(subdomain);
        this.addDetector(hash);
    }
    addDetector(detector) {
        this.detectors[detector.name] = detector;
        return this;
    }
    detect() {
        let detectionOrder = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.options.order;
        let detected = [];
        detectionOrder.forEach((detectorName)=>{
            if (this.detectors[detectorName]) {
                let lookup = this.detectors[detectorName].lookup(this.options);
                if (lookup && typeof lookup === 'string') lookup = [
                    lookup
                ];
                if (lookup) detected = detected.concat(lookup);
            }
        });
        detected = detected.filter((d)=>d !== undefined && d !== null && !hasXSS(d)).map((d)=>this.options.convertDetectedLanguage(d));
        if (this.services && this.services.languageUtils && this.services.languageUtils.getBestMatchFromCodes) return detected; // new i18next v19.5.0
        return detected.length > 0 ? detected[0] : null; // a little backward compatibility
    }
    cacheUserLanguage(lng) {
        let caches = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.options.caches;
        if (!caches) return;
        if (this.options.excludeCacheFor && this.options.excludeCacheFor.indexOf(lng) > -1) return;
        caches.forEach((cacheName)=>{
            if (this.detectors[cacheName]) this.detectors[cacheName].cacheUserLanguage(lng, this.options);
        });
    }
    constructor(services){
        let options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
        this.type = 'languageDetector';
        this.detectors = {};
        this.init(services, options);
    }
}
Browser.type = 'languageDetector';



/***/ })

}]);
//# sourceMappingURL=472-b7c97bb3b68221b2.js.map