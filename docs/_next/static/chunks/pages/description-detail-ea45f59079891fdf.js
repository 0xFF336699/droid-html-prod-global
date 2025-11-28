(self["webpackChunk_N_E"] = self["webpackChunk_N_E"] || []).push([[716],{

/***/ 15804:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   $: () => (/* binding */ translationGlobalConfig)
/* harmony export */ });
/* harmony import */ var _watcher__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(88518);
/* harmony import */ var _log__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(48891);


// 文件级别log
const fileLog = new _log__WEBPACK_IMPORTED_MODULE_0__/* .Log */ .tG(false, 'TranslationGlobalData_file');
// fileLog.pause = true;
/**
 * 全局翻译配置
 * 使用toProxy创建响应式对象
 */ const translationGlobalConfig = (0,_watcher__WEBPACK_IMPORTED_MODULE_1__/* .toProxy */ .I$)({
    auto: true
});
// 初始化log
const initLog = fileLog.sub(false, 'init_fn');
// initLog.pause = true;
initLog.log('translationGlobalConfig created', translationGlobalConfig);


/***/ }),

/***/ 20939:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  G: () => (/* binding */ AppShell)
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/react@19.1.0/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(94513);
// EXTERNAL MODULE: ../../libs/fanfanlo/src/i18n/i18n-init.ts + 1 modules
var i18n_init = __webpack_require__(70506);
// EXTERNAL MODULE: ../../libs/fanfanlo/src/storage/store-utils.ts
var store_utils = __webpack_require__(4887);
// EXTERNAL MODULE: ../../libs/fanfanlo/src/watcher/proxyWatch.ts
var proxyWatch = __webpack_require__(88518);
// EXTERNAL MODULE: ../../libs/fanfanlo/src/watcher/watchUpdates.ts
var watchUpdates = __webpack_require__(4738);
// EXTERNAL MODULE: ../../libs/fanfanlo/src/storage/store-page-context.tsx
var store_page_context = __webpack_require__(35155);
// EXTERNAL MODULE: ../../node_modules/.pnpm/next@15.3.5_@babel+core@7.28.0_babel-plugin-macros@3.1.0_react-dom@19.1.0_react@19.1.0__react@19.1.0_sass@1.89.2/node_modules/next/router.js
var next_router = __webpack_require__(75640);
// EXTERNAL MODULE: ../../node_modules/.pnpm/next@15.3.5_@babel+core@7.28.0_babel-plugin-macros@3.1.0_react-dom@19.1.0_react@19.1.0__react@19.1.0_sass@1.89.2/node_modules/next/config.js
var config = __webpack_require__(87891);
var config_default = /*#__PURE__*/__webpack_require__.n(config);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react@19.1.0/node_modules/react/index.js
var react = __webpack_require__(94285);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react-i18next@15.6.0_i18next@24.2.3_typescript@5.7.3__react-dom@19.1.0_react@19.1.0__react@19.1.0_typescript@5.7.3/node_modules/react-i18next/dist/es/index.js + 15 modules
var es = __webpack_require__(50279);
;// __barrel_optimize__?names=I18nextProvider!=!../../node_modules/.pnpm/react-i18next@15.6.0_i18next@24.2.3_typescript@5.7.3__react-dom@19.1.0_react@19.1.0__react@19.1.0_typescript@5.7.3/node_modules/react-i18next/dist/es/index.js


// EXTERNAL MODULE: ../../libs/fanfanlo/src/remote/request.ts
var request = __webpack_require__(34708);
// EXTERNAL MODULE: ../../libs/app/model/src/remote/tms.ts
var tms = __webpack_require__(2413);
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
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(store_page_context/* StorePageContext */.q, {
        value: s,
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(store_page_context/* StorePageDynamicContext */.p, {
            value: o,
            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(es/* I18nextProvider */.xC, {
                i18n: i18n_init/* i18n */.Ru,
                children: children
            })
        })
    });
}


/***/ }),

/***/ 40175:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  j: () => (/* binding */ TranslationComponent)
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/react@19.1.0/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(94513);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react@19.1.0/node_modules/react/index.js
var react = __webpack_require__(94285);
// EXTERNAL MODULE: ../../libs/fanfanlo/src/translation/TranslationGlobalData.ts
var TranslationGlobalData = __webpack_require__(15804);
// EXTERNAL MODULE: ../../node_modules/.pnpm/google-translate-api-x@10.7.2/node_modules/google-translate-api-x/index.cjs
var google_translate_api_x = __webpack_require__(58143);
var google_translate_api_x_default = /*#__PURE__*/__webpack_require__.n(google_translate_api_x);
// EXTERNAL MODULE: ../../libs/fanfanlo/src/storage/indexed-db-utils.ts
var indexed_db_utils = __webpack_require__(62412);
// EXTERNAL MODULE: ../../libs/fanfanlo/src/log/Log.ts + 1 modules
var Log = __webpack_require__(48891);
;// ../../libs/fanfanlo/src/translation/translationCache.ts


// 文件级别log
const fileLog = new Log/* Log */.tG(false, 'translationCache_file');
// fileLog.pause = true;
const CACHE_NAMESPACE = 'translation_cache';
let cacheStore = null;
/**
 * 初始化缓存
 */ async function initCache() {
    const fnLog = fileLog.sub(false, 'initCache_fn');
    // fnLog.pause = true;
    if (cacheStore) {
        fnLog.log('cache already initialized');
        return cacheStore;
    }
    fnLog.log('initializing cache');
    cacheStore = await indexed_db_utils/* indexedDbUtils */.d.getIndexedDbStore(CACHE_NAMESPACE, {
        defData: {},
        mergeDefData: false
    });
    fnLog.log('cache initialized', cacheStore);
    return cacheStore;
}
/**
 * 生成缓存key
 */ function generateCacheKey(originalText, sourceLang, targetLang) {
    const fnLog = fileLog.sub(false, 'generateCacheKey_fn');
    // fnLog.pause = true;
    // 简单hash函数
    const hash = Array.from(originalText).reduce((hash, char)=>{
        return (hash << 5) - hash + char.charCodeAt(0);
    }, 0);
    const key = "".concat(sourceLang, "_").concat(targetLang, "_").concat(hash);
    fnLog.log('generated cache key', {
        originalText,
        sourceLang,
        targetLang,
        key
    });
    return key;
}
/**
 * 从缓存获取翻译
 */ async function getFromCache(originalText, sourceLang, targetLang) {
    const fnLog = fileLog.sub(false, 'getFromCache_fn');
    // fnLog.pause = true;
    fnLog.log('get from cache', {
        originalText,
        sourceLang,
        targetLang
    });
    const store = await initCache();
    const key = generateCacheKey(originalText, sourceLang, targetLang);
    const cached = store.store.read(key);
    if (cached) {
        fnLog.log('cache hit', cached);
        return cached;
    } else {
        fnLog.log('cache miss');
        return null;
    }
}
/**
 * 保存翻译到缓存
 */ async function saveToCache(originalText, translatedText, sourceLang, targetLang) {
    const fnLog = fileLog.sub(false, 'saveToCache_fn');
    // fnLog.pause = true;
    fnLog.log('save to cache', {
        originalText,
        translatedText,
        sourceLang,
        targetLang
    });
    const store = await initCache();
    const key = generateCacheKey(originalText, sourceLang, targetLang);
    const cacheItem = {
        originalText,
        translatedText,
        sourceLang,
        targetLang,
        timestamp: Date.now()
    };
    store.store.write(key, cacheItem);
    fnLog.log('saved to cache', {
        key,
        cacheItem
    });
}
/**
 * 清空所有缓存
 */ async function clearCache() {
    const fnLog = fileLog.sub(false, 'clearCache_fn');
    // fnLog.pause = true;
    fnLog.log('clearing all cache');
    const store = await initCache();
    store.store.clearAll();
    fnLog.log('cache cleared');
}
const translationCache = {
    getFromCache,
    saveToCache,
    clearCache
};

;// ../../libs/fanfanlo/src/translation/translationService.ts



// 文件级别log
const translationService_fileLog = new Log/* Log */.tG(false, 'translationService_file');
// fileLog.pause = true;
/**
 * 翻译文本
 */ async function translateText(text) {
    let sourceLang = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 'auto', targetLang = arguments.length > 2 ? arguments[2] : void 0, isHtml = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : false;
    const fnLog = translationService_fileLog.sub(false, 'translateText_fn');
    // fnLog.pause = true;
    fnLog.log('translate text start', {
        text,
        sourceLang,
        targetLang,
        isHtml
    });
    // 检查缓存
    const cached = await translationCache.getFromCache(text, sourceLang, targetLang);
    if (cached) {
        fnLog.log('using cached translation', cached);
        return {
            text: cached.translatedText,
            from: cached.sourceLang,
            to: cached.targetLang
        };
    } else {
        fnLog.log('cache miss, calling translation API');
    }
    try {
        var _result_from_language, _result_from;
        // 调用翻译API
        const result = await google_translate_api_x_default()(text, {
            from: sourceLang,
            to: targetLang
        });
        fnLog.log('translation API result', result);
        const translatedText = result.text;
        const detectedSourceLang = ((_result_from = result.from) === null || _result_from === void 0 ? void 0 : (_result_from_language = _result_from.language) === null || _result_from_language === void 0 ? void 0 : _result_from_language.iso) || sourceLang;
        // 保存到缓存
        await translationCache.saveToCache(text, translatedText, detectedSourceLang, targetLang);
        fnLog.log('translation complete', {
            translatedText,
            detectedSourceLang,
            targetLang
        });
        return {
            text: translatedText,
            from: detectedSourceLang,
            to: targetLang
        };
    } catch (error) {
        fnLog.error('translation failed', error);
        throw error;
    }
}
const translationService = {
    translateText
};

// EXTERNAL MODULE: ../../libs/fanfanlo/src/i18n/fanfanloI18n.ts
var fanfanloI18n = __webpack_require__(95414);
// EXTERNAL MODULE: ../../libs/fanfanlo/src/watcher/useProxyWatch.ts
var useProxyWatch = __webpack_require__(45007);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react-i18next@15.6.0_i18next@24.2.3_typescript@5.7.3__react-dom@19.1.0_react@19.1.0__react@19.1.0_typescript@5.7.3/node_modules/react-i18next/dist/es/index.js + 15 modules
var es = __webpack_require__(50279);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/Box/Box.js + 2 modules
var Box = __webpack_require__(6445);
;// ../../libs/fanfanlo/src/translation/TranslationComponent.tsx









// 文件级别log
const TranslationComponent_fileLog = new Log/* Log */.tG(false, 'TranslationComponent_file');
// fileLog.pause = true;
/**
 * 翻译组件
 * - 根据translationGlobalConfig.auto决定是否自动翻译
 * - 点击可切换原文/译文
 * - 支持HTML内容翻译
 */ function TranslationComponent(props) {
    const uiLog = TranslationComponent_fileLog.sub(false, 'TranslationComponent_ui');
    // uiLog.pause = true;
    const { children, sourceLang = 'auto', isHtml = false, className = '' } = props;
    // 监听全局auto配置
    const [auto] = (0,useProxyWatch/* useProxyWatch */.x)(TranslationGlobalData/* translationGlobalConfig */.$, 'auto', TranslationGlobalData/* translationGlobalConfig */.$.auto);
    // 使用i18n
    const { t } = (0,es/* useTranslation */.Bd)('fanfanlo/translation/content');
    // 组件内部状态
    const [originalText, setOriginalText] = (0,react.useState)('');
    const [translatedText, setTranslatedText] = (0,react.useState)('');
    const [showTranslation, setShowTranslation] = (0,react.useState)(false);
    const [isTranslating, setIsTranslating] = (0,react.useState)(false);
    const [error, setError] = (0,react.useState)(null);
    // 提取文本内容
    (0,react.useEffect)(()=>{
        const effectLog = uiLog.sub(false, 'effect_extractText_fn');
        // effectLog.pause = true;
        let textContent = '';
        if (typeof children === 'string') {
            textContent = children;
            effectLog.log('extracted text from string', textContent);
        } else if (/*#__PURE__*/ react.isValidElement(children)) {
            if (isHtml) {
                // 当 isHtml=true 时,将React元素转换为HTML字符串
                textContent = reactElementToHtml(children);
                effectLog.log('converted react element to html', textContent);
            } else {
                // 提取纯文本
                textContent = extractTextFromReactNode(children);
                effectLog.log('extracted text from react element', textContent);
            }
        } else if (Array.isArray(children)) {
            if (isHtml) {
                // 处理数组形式的React元素
                textContent = children.map((child)=>{
                    if (/*#__PURE__*/ react.isValidElement(child)) {
                        return reactElementToHtml(child);
                    } else {
                        return String(child);
                    }
                }).join('');
                effectLog.log('converted react element array to html', textContent);
            } else {
                textContent = children.map((child)=>{
                    if (/*#__PURE__*/ react.isValidElement(child)) {
                        return extractTextFromReactNode(child);
                    } else {
                        return String(child);
                    }
                }).join('');
                effectLog.log('extracted text from array', textContent);
            }
        } else {
            textContent = String(children);
            effectLog.log('converted to string', textContent);
        }
        effectLog.log('final extracted text', textContent);
        setOriginalText(textContent);
    }, [
        children,
        isHtml
    ]);
    // 自动翻译逻辑
    (0,react.useEffect)(()=>{
        const effectLog = uiLog.sub(false, 'effect_autoTranslate_fn');
        // effectLog.pause = true;
        effectLog.log('auto translate check', {
            auto,
            originalText
        });
        if (!auto) {
            effectLog.log('auto is false, reset translation state');
            // 重置翻译状态,恢复显示原文
            setShowTranslation(false);
            setIsTranslating(false);
            setError(null);
            return;
        }
        if (!originalText) {
            effectLog.log('no original text, skip translation');
            return;
        }
        const targetLang = fanfanloI18n/* fanfanloI18n */._.language;
        effectLog.log('target language', targetLang);
        // 如果源语言和目标语言相同,不翻译
        if (sourceLang !== 'auto' && sourceLang === targetLang) {
            effectLog.log('source and target language are the same, skip translation');
            return;
        }
        // 执行翻译
        performTranslation();
        async function performTranslation() {
            const fnLog = effectLog.sub(false, 'performTranslation_fn');
            // fnLog.pause = true;
            fnLog.log('start translation', {
                originalText,
                sourceLang,
                targetLang
            });
            setIsTranslating(true);
            setError(null);
            try {
                const result = await translationService.translateText(originalText, sourceLang, targetLang, isHtml);
                fnLog.log('translation result', result);
                // 如果检测到的源语言和目标语言相同,不显示翻译
                if (result.from === result.to) {
                    fnLog.log('detected source language equals target language, skip translation');
                    setShowTranslation(false);
                } else {
                    setTranslatedText(result.text);
                    setShowTranslation(true);
                }
            } catch (err) {
                fnLog.error('translation error', err);
                setError(err instanceof Error ? err.message : 'Translation failed');
            } finally{
                setIsTranslating(false);
            }
        }
    }, [
        auto,
        originalText,
        sourceLang,
        isHtml
    ]);
    // 点击切换原文/译文
    const handleClick = ()=>{
        const fnLog = uiLog.sub(false, 'handleClick_fn');
        // fnLog.pause = true;
        if (!translatedText) {
            fnLog.log('no translated text, skip toggle');
            return;
        }
        const newShowTranslation = !showTranslation;
        fnLog.log('toggle show translation', {
            from: showTranslation,
            to: newShowTranslation
        });
        setShowTranslation(newShowTranslation);
    };
    // 渲染内容
    const displayText = showTranslation ? translatedText : originalText;
    uiLog.log('render', {
        displayText,
        showTranslation,
        isTranslating,
        error
    });
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.A, {
        className: className,
        onClick: handleClick,
        sx: {
            cursor: translatedText ? 'pointer' : 'default',
            position: 'relative'
        },
        children: [
            isHtml ? /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                dangerouslySetInnerHTML: {
                    __html: displayText
                }
            }) : /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                children: displayText
            }),
            isTranslating && /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                style: {
                    marginLeft: '8px',
                    fontSize: '0.8em',
                    color: '#999'
                },
                children: t('TranslationComponent.translating')
            }),
            error && /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                style: {
                    marginLeft: '8px',
                    fontSize: '0.8em',
                    color: 'red'
                },
                children: t('TranslationComponent.translationFailed')
            })
        ]
    });
}
/**
 * 从React节点提取文本内容
 */ function extractTextFromReactNode(node) {
    const fnLog = TranslationComponent_fileLog.sub(false, 'extractTextFromReactNode_fn');
    // fnLog.pause = true;
    if (typeof node === 'string') {
        return node;
    }
    if (typeof node === 'number') {
        return String(node);
    }
    if (/*#__PURE__*/ react.isValidElement(node)) {
        if (node.props.children) {
            if (Array.isArray(node.props.children)) {
                return node.props.children.map(extractTextFromReactNode).join('');
            } else {
                return extractTextFromReactNode(node.props.children);
            }
        }
    }
    if (Array.isArray(node)) {
        return node.map(extractTextFromReactNode).join('');
    }
    fnLog.log('unknown node type', node);
    return '';
}
/**
 * 将React元素转换为HTML字符串
 */ function reactElementToHtml(element) {
    const fnLog = TranslationComponent_fileLog.sub(false, 'reactElementToHtml_fn');
    // fnLog.pause = true;
    if (!/*#__PURE__*/ react.isValidElement(element)) {
        fnLog.log('not a valid react element');
        return String(element);
    }
    const type = element.type;
    const props = element.props;
    const children = props.children;
    fnLog.log('converting element', {
        type,
        props
    });
    // 处理字符串类型的标签 (如 'div', 'h1', 'p' 等)
    if (typeof type === 'string') {
        const tagName = type;
        const attributes = [];
        // 构建属性
        for (const [key, value] of Object.entries(props)){
            if (key === 'children') {
                continue;
            }
            if (key === 'className') {
                attributes.push('class="'.concat(value, '"'));
            } else if (key === 'htmlFor') {
                attributes.push('for="'.concat(value, '"'));
            } else if (typeof value === 'string') {
                attributes.push("".concat(key, '="').concat(value, '"'));
            } else if (typeof value === 'number') {
                attributes.push("".concat(key, '="').concat(value, '"'));
            } else if (typeof value === 'boolean' && value) {
                attributes.push(key);
            }
        }
        const attrsString = attributes.length > 0 ? ' ' + attributes.join(' ') : '';
        // 自闭合标签
        const selfClosingTags = [
            'img',
            'br',
            'hr',
            'input',
            'meta',
            'link'
        ];
        if (selfClosingTags.includes(tagName)) {
            return "<".concat(tagName).concat(attrsString, " />");
        }
        // 处理子元素
        let childrenHtml = '';
        if (children !== undefined && children !== null) {
            if (Array.isArray(children)) {
                childrenHtml = children.map((child)=>{
                    if (/*#__PURE__*/ react.isValidElement(child)) {
                        return reactElementToHtml(child);
                    } else if (typeof child === 'string') {
                        return child;
                    } else if (typeof child === 'number') {
                        return String(child);
                    } else {
                        return '';
                    }
                }).join('');
            } else if (/*#__PURE__*/ react.isValidElement(children)) {
                childrenHtml = reactElementToHtml(children);
            } else if (typeof children === 'string') {
                childrenHtml = children;
            } else if (typeof children === 'number') {
                childrenHtml = String(children);
            }
        }
        const html = "<".concat(tagName).concat(attrsString, ">").concat(childrenHtml, "</").concat(tagName, ">");
        fnLog.log('generated html', html);
        return html;
    } else {
        // 处理组件类型 (函数组件或类组件)
        fnLog.log('component type, extracting children');
        if (children) {
            if (Array.isArray(children)) {
                return children.map((child)=>{
                    if (/*#__PURE__*/ react.isValidElement(child)) {
                        return reactElementToHtml(child);
                    } else {
                        return String(child);
                    }
                }).join('');
            } else if (/*#__PURE__*/ react.isValidElement(children)) {
                return reactElementToHtml(children);
            } else {
                return String(children);
            }
        }
        return '';
    }
}


/***/ }),

/***/ 65494:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ IconButton_IconButton)
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/react@19.1.0/node_modules/react/index.js
var react = __webpack_require__(94285);
// EXTERNAL MODULE: ../../node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs
var clsx = __webpack_require__(3638);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+utils@6.4.9_@types+react@19.1.8_react@19.1.0/node_modules/@mui/utils/esm/composeClasses/composeClasses.js
var composeClasses = __webpack_require__(95116);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/utils/useId.js
var useId = __webpack_require__(14036);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+system@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled@1_sfs2vjcbuqchwdpqpmkla22opm/node_modules/@mui/system/esm/colorManipulator/colorManipulator.js + 1 modules
var colorManipulator = __webpack_require__(21567);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/styles/styled.js
var styled = __webpack_require__(64624);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/utils/memoTheme.js + 1 modules
var memoTheme = __webpack_require__(10355);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/utils/createSimplePaletteValueFilter.js
var createSimplePaletteValueFilter = __webpack_require__(36118);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/DefaultPropsProvider/DefaultPropsProvider.js
var DefaultPropsProvider = __webpack_require__(79209);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/ButtonBase/ButtonBase.js + 5 modules
var ButtonBase = __webpack_require__(42932);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/CircularProgress/CircularProgress.js + 1 modules
var CircularProgress = __webpack_require__(95746);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/utils/capitalize.js
var capitalize = __webpack_require__(99512);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+utils@6.4.9_@types+react@19.1.8_react@19.1.0/node_modules/@mui/utils/esm/generateUtilityClasses/generateUtilityClasses.js
var generateUtilityClasses = __webpack_require__(92186);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+utils@6.4.9_@types+react@19.1.8_react@19.1.0/node_modules/@mui/utils/esm/generateUtilityClass/generateUtilityClass.js
var generateUtilityClass = __webpack_require__(69014);
;// ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/IconButton/iconButtonClasses.js


function getIconButtonUtilityClass(slot) {
    return (0,generateUtilityClass/* default */.Ay)('MuiIconButton', slot);
}
const iconButtonClasses = (0,generateUtilityClasses/* default */.A)('MuiIconButton', [
    'root',
    'disabled',
    'colorInherit',
    'colorPrimary',
    'colorSecondary',
    'colorError',
    'colorInfo',
    'colorSuccess',
    'colorWarning',
    'edgeStart',
    'edgeEnd',
    'sizeSmall',
    'sizeMedium',
    'sizeLarge',
    'loading',
    'loadingIndicator',
    'loadingWrapper'
]);
/* harmony default export */ const IconButton_iconButtonClasses = (iconButtonClasses);

// EXTERNAL MODULE: ../../node_modules/.pnpm/react@19.1.0/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(94513);
;// ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/IconButton/IconButton.js
/* __next_internal_client_entry_do_not_use__ default auto */ 















const useUtilityClasses = (ownerState)=>{
    const { classes, disabled, color, edge, size, loading } = ownerState;
    const slots = {
        root: [
            'root',
            loading && 'loading',
            disabled && 'disabled',
            color !== 'default' && "color".concat((0,capitalize/* default */.A)(color)),
            edge && "edge".concat((0,capitalize/* default */.A)(edge)),
            "size".concat((0,capitalize/* default */.A)(size))
        ],
        loadingIndicator: [
            'loadingIndicator'
        ],
        loadingWrapper: [
            'loadingWrapper'
        ]
    };
    return (0,composeClasses/* default */.A)(slots, getIconButtonUtilityClass, classes);
};
const IconButtonRoot = (0,styled/* default */.Ay)(ButtonBase/* default */.A, {
    name: 'MuiIconButton',
    slot: 'Root',
    overridesResolver: (props, styles)=>{
        const { ownerState } = props;
        return [
            styles.root,
            ownerState.loading && styles.loading,
            ownerState.color !== 'default' && styles["color".concat((0,capitalize/* default */.A)(ownerState.color))],
            ownerState.edge && styles["edge".concat((0,capitalize/* default */.A)(ownerState.edge))],
            styles["size".concat((0,capitalize/* default */.A)(ownerState.size))]
        ];
    }
})((0,memoTheme/* default */.A)((param)=>{
    let { theme } = param;
    return {
        textAlign: 'center',
        flex: '0 0 auto',
        fontSize: theme.typography.pxToRem(24),
        padding: 8,
        borderRadius: '50%',
        color: (theme.vars || theme).palette.action.active,
        transition: theme.transitions.create('background-color', {
            duration: theme.transitions.duration.shortest
        }),
        variants: [
            {
                props: (props)=>!props.disableRipple,
                style: {
                    '--IconButton-hoverBg': theme.vars ? "rgba(".concat(theme.vars.palette.action.activeChannel, " / ").concat(theme.vars.palette.action.hoverOpacity, ")") : (0,colorManipulator/* alpha */.X4)(theme.palette.action.active, theme.palette.action.hoverOpacity),
                    '&:hover': {
                        backgroundColor: 'var(--IconButton-hoverBg)',
                        // Reset on touch devices, it doesn't add specificity
                        '@media (hover: none)': {
                            backgroundColor: 'transparent'
                        }
                    }
                }
            },
            {
                props: {
                    edge: 'start'
                },
                style: {
                    marginLeft: -12
                }
            },
            {
                props: {
                    edge: 'start',
                    size: 'small'
                },
                style: {
                    marginLeft: -3
                }
            },
            {
                props: {
                    edge: 'end'
                },
                style: {
                    marginRight: -12
                }
            },
            {
                props: {
                    edge: 'end',
                    size: 'small'
                },
                style: {
                    marginRight: -3
                }
            }
        ]
    };
}), (0,memoTheme/* default */.A)((param)=>{
    let { theme } = param;
    return {
        variants: [
            {
                props: {
                    color: 'inherit'
                },
                style: {
                    color: 'inherit'
                }
            },
            ...Object.entries(theme.palette).filter((0,createSimplePaletteValueFilter/* default */.A)()) // check all the used fields in the style below
            .map((param)=>{
                let [color] = param;
                return {
                    props: {
                        color
                    },
                    style: {
                        color: (theme.vars || theme).palette[color].main
                    }
                };
            }),
            ...Object.entries(theme.palette).filter((0,createSimplePaletteValueFilter/* default */.A)()) // check all the used fields in the style below
            .map((param)=>{
                let [color] = param;
                return {
                    props: {
                        color
                    },
                    style: {
                        '--IconButton-hoverBg': theme.vars ? "rgba(".concat((theme.vars || theme).palette[color].mainChannel, " / ").concat(theme.vars.palette.action.hoverOpacity, ")") : (0,colorManipulator/* alpha */.X4)((theme.vars || theme).palette[color].main, theme.palette.action.hoverOpacity)
                    }
                };
            }),
            {
                props: {
                    size: 'small'
                },
                style: {
                    padding: 5,
                    fontSize: theme.typography.pxToRem(18)
                }
            },
            {
                props: {
                    size: 'large'
                },
                style: {
                    padding: 12,
                    fontSize: theme.typography.pxToRem(28)
                }
            }
        ],
        ["&.".concat(IconButton_iconButtonClasses.disabled)]: {
            backgroundColor: 'transparent',
            color: (theme.vars || theme).palette.action.disabled
        },
        ["&.".concat(IconButton_iconButtonClasses.loading)]: {
            color: 'transparent'
        }
    };
}));
const IconButtonLoadingIndicator = (0,styled/* default */.Ay)('span', {
    name: 'MuiIconButton',
    slot: 'LoadingIndicator',
    overridesResolver: (props, styles)=>styles.loadingIndicator
})((param)=>{
    let { theme } = param;
    return {
        display: 'none',
        position: 'absolute',
        visibility: 'visible',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        color: (theme.vars || theme).palette.action.disabled,
        variants: [
            {
                props: {
                    loading: true
                },
                style: {
                    display: 'flex'
                }
            }
        ]
    };
});
/**
 * Refer to the [Icons](/material-ui/icons/) section of the documentation
 * regarding the available icon options.
 */ const IconButton = /*#__PURE__*/ react.forwardRef(function IconButton(inProps, ref) {
    const props = (0,DefaultPropsProvider/* useDefaultProps */.b)({
        props: inProps,
        name: 'MuiIconButton'
    });
    const { edge = false, children, className, color = 'default', disabled = false, disableFocusRipple = false, size = 'medium', id: idProp, loading = null, loadingIndicator: loadingIndicatorProp, ...other } = props;
    const loadingId = (0,useId/* default */.A)(idProp);
    const loadingIndicator = loadingIndicatorProp !== null && loadingIndicatorProp !== void 0 ? loadingIndicatorProp : /*#__PURE__*/ (0,jsx_runtime.jsx)(CircularProgress/* default */.A, {
        "aria-labelledby": loadingId,
        color: "inherit",
        size: 16
    });
    const ownerState = {
        ...props,
        edge,
        color,
        disabled,
        disableFocusRipple,
        loading,
        loadingIndicator,
        size
    };
    const classes = useUtilityClasses(ownerState);
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(IconButtonRoot, {
        id: loading ? loadingId : idProp,
        className: (0,clsx/* default */.A)(classes.root, className),
        centerRipple: true,
        focusRipple: !disableFocusRipple,
        disabled: disabled || loading,
        ref: ref,
        ...other,
        ownerState: ownerState,
        children: [
            typeof loading === 'boolean' && /*#__PURE__*/ // use plain HTML span to minimize the runtime overhead
            (0,jsx_runtime.jsx)("span", {
                className: classes.loadingWrapper,
                style: {
                    display: 'contents'
                },
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(IconButtonLoadingIndicator, {
                    className: classes.loadingIndicator,
                    ownerState: ownerState,
                    children: loading && loadingIndicator
                })
            }),
            children
        ]
    });
});
 false ? 0 : void 0;
/* harmony default export */ const IconButton_IconButton = (IconButton);


/***/ }),

/***/ 67236:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ AndroidPageContent)
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/react@19.1.0/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(94513);
// EXTERNAL MODULE: ../../libs/fanfanlo/src/nextjs/env/env.ts
var env = __webpack_require__(49210);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react-i18next@15.6.0_i18next@24.2.3_typescript@5.7.3__react-dom@19.1.0_react@19.1.0__react@19.1.0_typescript@5.7.3/node_modules/react-i18next/dist/es/index.js + 15 modules
var es = __webpack_require__(50279);
// EXTERNAL MODULE: ../../libs/fanfanlo/src/i18n/i18n-value-loader.ts
var i18n_value_loader = __webpack_require__(62095);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/Box/Box.js + 2 modules
var Box = __webpack_require__(6445);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/Button/Button.js + 3 modules
var Button = __webpack_require__(28669);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/Container/Container.js + 1 modules
var Container = __webpack_require__(44437);
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

/***/ 70506:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Ru: () => (/* binding */ i18n),
  tV: () => (/* binding */ i18nInit)
});

// UNUSED EXPORTS: default, i18nLogger, useTranslation

// EXTERNAL MODULE: ../../node_modules/.pnpm/react-i18next@15.6.0_i18next@24.2.3_typescript@5.7.3__react-dom@19.1.0_react@19.1.0__react@19.1.0_typescript@5.7.3/node_modules/react-i18next/dist/es/index.js + 15 modules
var es = __webpack_require__(50279);
;// __barrel_optimize__?names=initReactI18next!=!../../node_modules/.pnpm/react-i18next@15.6.0_i18next@24.2.3_typescript@5.7.3__react-dom@19.1.0_react@19.1.0__react@19.1.0_typescript@5.7.3/node_modules/react-i18next/dist/es/index.js


// EXTERNAL MODULE: ../../node_modules/.pnpm/i18next-browser-languagedetector@8.2.0/node_modules/i18next-browser-languagedetector/dist/esm/i18nextBrowserLanguageDetector.js
var i18nextBrowserLanguageDetector = __webpack_require__(43734);
// EXTERNAL MODULE: ../../node_modules/.pnpm/i18next-http-backend@3.0.2_encoding@0.1.13/node_modules/i18next-http-backend/esm/index.js + 2 modules
var esm = __webpack_require__(50148);
// EXTERNAL MODULE: ../../node_modules/.pnpm/i18next@24.2.3_typescript@5.7.3/node_modules/i18next/dist/esm/i18next.js
var i18next = __webpack_require__(94912);
// EXTERNAL MODULE: ../../libs/fanfanlo/src/log/Log.ts + 1 modules
var Log = __webpack_require__(48891);
// EXTERNAL MODULE: ../../libs/fanfanlo/src/utils/files-map-utils.ts
var files_map_utils = __webpack_require__(91850);
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

/***/ 80317:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ DescriptionDetailPage)
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/react@19.1.0/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(94513);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react@19.1.0/node_modules/react/index.js
var react = __webpack_require__(94285);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/Box/Box.js + 2 modules
var Box = __webpack_require__(6445);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/IconButton/IconButton.js + 1 modules
var IconButton = __webpack_require__(65494);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/Typography/Typography.js
var Typography = __webpack_require__(67079);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/CircularProgress/CircularProgress.js + 1 modules
var CircularProgress = __webpack_require__(95746);
// EXTERNAL MODULE: ../../node_modules/.pnpm/next@15.3.5_@babel+core@7.28.0_babel-plugin-macros@3.1.0_react-dom@19.1.0_react@19.1.0__react@19.1.0_sass@1.89.2/node_modules/next/router.js
var next_router = __webpack_require__(75640);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/utils/createSvgIcon.js + 2 modules
var createSvgIcon = __webpack_require__(61541);
;// ../../node_modules/.pnpm/@mui+icons-material@6.4.12_@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_re_5ewkm5t5g27pzq5tz62v6ktvti/node_modules/@mui/icons-material/esm/ArrowBack.js
/* __next_internal_client_entry_do_not_use__ default auto */ 

/* harmony default export */ const ArrowBack = ((0,createSvgIcon/* default */.A)(/*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
    d: "M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20z"
}), 'ArrowBack'));

// EXTERNAL MODULE: ../../libs/fanfanlo/src/log/Log.ts + 1 modules
var Log = __webpack_require__(48891);
// EXTERNAL MODULE: ../../libs/app/ui/src/components/app/AppShell.tsx + 2 modules
var AppShell = __webpack_require__(20939);
// EXTERNAL MODULE: ../../libs/app/ui/src/components/appbar/AppBar.tsx + 3 modules
var AppBar = __webpack_require__(97972);
// EXTERNAL MODULE: ../../libs/droid/project-interface/src/storage/storage.ts
var storage = __webpack_require__(31232);
;// ../../libs/droid/project-interface/src/utils/entityFinder.ts

const fileLog = new Log/* Log */.tG(false, 'description_entityFinder');
/**
 * 在TriggerActionGroup中查找TriggerAction
 */ function findInTriggerActionGroup(group, id) {
    const fnLog = fileLog.sub(false, 'findInTriggerActionGroup_fn');
    // fnLog.pause = true;
    fnLog.log('开始查找TriggerAction, group:', group, 'id:', id);
    if (!group) {
        fnLog.log('group为null');
        return null;
    }
    if (!group.list) {
        fnLog.log('group.list为null');
        return null;
    }
    if (!Array.isArray(group.list)) {
        fnLog.log('group.list不是数组');
        return null;
    }
    const result = group.list.find((ta)=>ta.id === id) || null;
    fnLog.log('查找结果:', result);
    return result;
}
/**
 * 在ActionGroup中查找Action
 */ function findInActionGroup(group, id) {
    const fnLog = fileLog.sub(false, 'findInActionGroup_fn');
    // fnLog.pause = true;
    fnLog.log('开始查找Action, group:', group, 'id:', id);
    if (!group) {
        fnLog.log('group为null');
        return null;
    }
    if (!group.list) {
        fnLog.log('group.list为null');
        return null;
    }
    if (!Array.isArray(group.list)) {
        fnLog.log('group.list不是数组');
        return null;
    }
    const result = group.list.find((a)=>a.id === id) || null;
    fnLog.log('查找结果:', result);
    return result;
}
/**
 * 在TriggerGroup中查找Trigger
 */ function findInTriggerGroup(group, id) {
    const fnLog = fileLog.sub(false, 'findInTriggerGroup_fn');
    // fnLog.pause = true;
    fnLog.log('开始查找Trigger, group:', group, 'id:', id);
    if (!group) {
        fnLog.log('group为null');
        return null;
    }
    if (!group.list) {
        fnLog.log('group.list为null');
        return null;
    }
    if (!Array.isArray(group.list)) {
        fnLog.log('group.list不是数组');
        return null;
    }
    const result = group.list.find((t)=>t.id === id) || null;
    fnLog.log('查找结果:', result);
    return result;
}
/**
 * 在单个project中查找实体
 */ function findEntityInProject(project, params) {
    const fnLog = fileLog.sub(false, 'findEntityInProject_fn');
    // fnLog.pause = true;
    fnLog.log('开始在project中查找实体, project:', project, 'params:', params);
    const { triggerActionGroupId, triggerActionId, actionGroupId, actionId, triggerGroupId, triggerId } = params;
    if (!project) {
        fnLog.log('project为null');
        return null;
    }
    // 如果提供了triggerActionGroupId
    if (triggerActionGroupId) {
        const triggerActionGroup = project.triggerActionGroup;
        fnLog.log('查找triggerActionGroup, id:', triggerActionGroupId);
        if (triggerActionGroup && triggerActionGroup.id === triggerActionGroupId) {
            fnLog.log('找到triggerActionGroup');
            return {
                entity: triggerActionGroup,
                type: 'triggerActionGroup'
            };
        } else {
            fnLog.log('未找到triggerActionGroup');
        }
    }
    // 如果提供了triggerActionId
    if (triggerActionId) {
        const triggerActionGroup = project.triggerActionGroup;
        fnLog.log('查找triggerAction, id:', triggerActionId);
        if (!triggerActionGroup) {
            fnLog.log('project.triggerActionGroup为null');
        } else {
            const triggerAction = findInTriggerActionGroup(triggerActionGroup, triggerActionId);
            if (triggerAction) {
                fnLog.log('找到triggerAction');
                // 如果还需要查找更深层的action或trigger
                if (actionGroupId || actionId) {
                    const actionGroup = triggerAction.actionGroup;
                    fnLog.log('查找actionGroup或action');
                    if (actionGroupId && actionGroup && actionGroup.id === actionGroupId) {
                        fnLog.log('找到actionGroup');
                        return {
                            entity: actionGroup,
                            type: 'actionGroup'
                        };
                    }
                    if (actionId && actionGroup) {
                        const action = findInActionGroup(actionGroup, actionId);
                        if (action) {
                            fnLog.log('找到action');
                            return {
                                entity: action,
                                type: 'action'
                            };
                        } else {
                            fnLog.log('未找到action');
                        }
                    }
                }
                if (triggerGroupId || triggerId) {
                    const triggerGroup = triggerAction.triggerGroup;
                    fnLog.log('查找triggerGroup或trigger');
                    if (triggerGroupId && triggerGroup && triggerGroup.id === triggerGroupId) {
                        fnLog.log('找到triggerGroup');
                        return {
                            entity: triggerGroup,
                            type: 'triggerGroup'
                        };
                    }
                    if (triggerId && triggerGroup) {
                        const trigger = findInTriggerGroup(triggerGroup, triggerId);
                        if (trigger) {
                            fnLog.log('找到trigger');
                            return {
                                entity: trigger,
                                type: 'trigger'
                            };
                        } else {
                            fnLog.log('未找到trigger');
                        }
                    }
                }
                // 如果没有更深层的查找，返回triggerAction
                fnLog.log('返回triggerAction');
                return {
                    entity: triggerAction,
                    type: 'triggerAction'
                };
            } else {
                fnLog.log('未找到triggerAction');
            }
        }
    }
    // 如果只提供了projectId，返回project
    fnLog.log('返回project');
    return {
        entity: project,
        type: 'project'
    };
}
/**
 * 在所有projects中查找实体
 */ function findEntityAcrossProjects(allProjects, params) {
    const fnLog = fileLog.sub(false, 'findEntityAcrossProjects_fn');
    // fnLog.pause = true;
    fnLog.log('开始在所有projects中查找实体, projects数量:', allProjects.length, 'params:', params);
    if (!allProjects) {
        fnLog.log('allProjects为null');
        return null;
    }
    if (!Array.isArray(allProjects)) {
        fnLog.log('allProjects不是数组');
        return null;
    }
    const { projectId } = params;
    // 如果提供了projectId，先找到对应的project
    if (projectId) {
        fnLog.log('查找project, id:', projectId);
        const project = allProjects.find((p)=>p.id === projectId);
        if (!project) {
            fnLog.log('未找到project');
            return null;
        }
        fnLog.log('找到project, 开始在project中查找实体');
        const result = findEntityInProject(project, params);
        return result;
    }
    // 如果没有提供projectId，遍历所有project查找
    fnLog.log('未提供projectId, 遍历所有projects查找');
    for(let i = 0; i < allProjects.length; i++){
        const project = allProjects[i];
        fnLog.log('检查project, index:', i, 'id:', project.id);
        const result = findEntityInProject(project, params);
        if (result) {
            fnLog.log('找到实体, type:', result.type);
            return result;
        }
    }
    fnLog.log('未找到任何实体');
    return null;
}

// EXTERNAL MODULE: ../../node_modules/.pnpm/react-i18next@15.6.0_i18next@24.2.3_typescript@5.7.3__react-dom@19.1.0_react@19.1.0__react@19.1.0_typescript@5.7.3/node_modules/react-i18next/dist/es/index.js + 15 modules
var es = __webpack_require__(50279);
// EXTERNAL MODULE: ../../libs/fanfanlo/src/translation/TranslationComponent.tsx + 2 modules
var TranslationComponent = __webpack_require__(40175);
;// ../../libs/droid/project-interface/src/common/IEntityDescription.ts
/**
 * 描述内容类型枚举
 */ var DescriptionContentType = /*#__PURE__*/ function(DescriptionContentType) {
    DescriptionContentType["TEXT"] = "text";
    DescriptionContentType["URL"] = "url";
    DescriptionContentType["HTML"] = "html";
    return DescriptionContentType;
}({});

;// ../../libs/droid/project-interface/src/utils/descriptionUtils.ts

const descriptionUtils_fileLog = new Log/* Log */.tG(false, 'description_utils_validateUrl');
// fileLog.pause = true;
// fileLog.childrenPaused = true;
/**
 * 验证URL是否有效且安全
 * @param url 待验证的URL
 * @returns 是否有效
 */ function validateUrl(url) {
    const fnLog = descriptionUtils_fileLog.sub(false, 'validateUrl_fn');
    // fnLog.pause = true;
    fnLog.log('开始验证URL:', url);
    if (!url) {
        fnLog.log('URL为空');
        return false;
    }
    if (typeof url !== 'string') {
        fnLog.log('URL类型不是string:', typeof url);
        return false;
    }
    const trimmedUrl = url.trim();
    fnLog.log('去除空格后的URL:', trimmedUrl);
    if (trimmedUrl.length === 0) {
        fnLog.log('去除空格后URL为空');
        return false;
    }
    // 检查协议（仅允许http和https）
    const hasHttpProtocol = trimmedUrl.startsWith('http://');
    const hasHttpsProtocol = trimmedUrl.startsWith('https://');
    fnLog.log('是否http协议:', hasHttpProtocol, '是否https协议:', hasHttpsProtocol);
    if (!hasHttpProtocol && !hasHttpsProtocol) {
        fnLog.log('URL协议不是http或https');
        return false;
    }
    // 尝试使用URL API验证
    let urlObj = null;
    try {
        urlObj = new URL(trimmedUrl);
        fnLog.log('URL解析成功:', urlObj.href);
    } catch (e) {
        fnLog.error('URL解析失败:', e);
        return false;
    }
    if (urlObj === null) {
        fnLog.log('URL对象为null');
        return false;
    }
    // 再次确认协议
    const protocol = urlObj.protocol;
    fnLog.log('URL协议:', protocol);
    const isValid = protocol === 'http:' || protocol === 'https:';
    fnLog.log('URL是否有效:', isValid);
    return isValid;
}

;// ../../libs/droid/project-interface/src/components/description-renderer/DescriptionContentRenderer.tsx








const DescriptionContentRenderer_fileLog = new Log/* Log */.tG(false, 'DescriptionContentRenderer_ui');
/**
 * 描述内容渲染器
 * 根据内容类型渲染不同的展示方式
 */ function DescriptionContentRenderer(props) {
    const uiLog = DescriptionContentRenderer_fileLog.sub(false, 'DescriptionContentRenderer_ui');
    // uiLog.pause = true;
    const { t } = (0,es/* useTranslation */.Bd)('droid/project-interface/components/description-renderer/content');
    const { data, sourceLang = 'auto', className } = props;
    uiLog.log('渲染DescriptionContentRenderer, data:', data, 'sourceLang:', sourceLang);
    if (!data) {
        uiLog.log('data为null, 不渲染');
        return null;
    }
    if (!data.content) {
        uiLog.log('data.content为空, 不渲染');
        return null;
    }
    const contentType = data.type;
    const content = data.content;
    uiLog.log('contentType:', contentType, 'content:', content);
    // 文本类型 - 使用TranslationComponent
    if (contentType === DescriptionContentType.TEXT) {
        uiLog.log('渲染TEXT类型, 使用TranslationComponent');
        return /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.A, {
            className: className,
            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(TranslationComponent/* TranslationComponent */.j, {
                sourceLang: sourceLang,
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.A, {
                    children: content
                })
            })
        });
    }
    // HTML类型 - 使用TranslationComponent + isHtml
    if (contentType === DescriptionContentType.HTML) {
        uiLog.log('渲染HTML类型, 使用TranslationComponent isHtml');
        return /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.A, {
            className: className,
            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(TranslationComponent/* TranslationComponent */.j, {
                sourceLang: sourceLang,
                isHtml: true,
                children: content
            })
        });
    }
    // URL类型 - 使用iframe渲染
    if (contentType === DescriptionContentType.URL) {
        uiLog.log('渲染URL类型');
        const isValid = validateUrl(content);
        uiLog.log('URL是否有效:', isValid);
        if (!isValid) {
            uiLog.error('URL无效:', content);
            return /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.A, {
                className: className,
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.A, {
                    color: "error",
                    children: t('DescriptionContentRenderer.invalidUrl', {
                        url: content
                    })
                })
            });
        }
        return /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.A, {
            className: className,
            children: /*#__PURE__*/ (0,jsx_runtime.jsx)("iframe", {
                sandbox: "allow-scripts",
                src: content,
                style: {
                    width: '100%',
                    minHeight: '400px',
                    border: '1px solid #e0e0e0',
                    borderRadius: '4px'
                },
                title: "URL Content"
            })
        });
    }
    // 未知类型
    uiLog.error('未知的contentType:', contentType);
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.A, {
        className: className,
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.A, {
            color: "error",
            children: t('DescriptionContentRenderer.unknownType', {
                type: contentType
            })
        })
    });
}

;// ./src/pages/description-detail/index.tsx












const description_detail_fileLog = new Log/* Log */.tG(false, 'DescriptionDetailPage_ui');
// fileLog.pause = true;
// fileLog.childrenPaused = true;
function DescriptionDetailPage() {
    const uiLog = description_detail_fileLog.sub(false, 'DescriptionDetailPage_ui');
    // uiLog.pause = true;
    const { t } = (0,es/* useTranslation */.Bd)('homepage/pages/description-detail/content');
    const router = (0,next_router.useRouter)();
    const [loading, setLoading] = (0,react.useState)(true);
    const [error, setError] = (0,react.useState)(null);
    const [entityResult, setEntityResult] = (0,react.useState)(null);
    const [descriptionContent, setDescriptionContent] = (0,react.useState)(null);
    const [entityName, setEntityName] = (0,react.useState)('');
    (0,react.useEffect)(()=>{
        const fnLog = uiLog.sub(false, 'effect_loadEntity_fn');
        // fnLog.pause = true;
        if (!router.isReady) {
            fnLog.log('router未准备好');
            return;
        }
        fnLog.log('开始加载实体, query:', router.query);
        const query = router.query;
        const field = query.field;
        if (!field) {
            fnLog.error('缺少field参数');
            setError(t('DescriptionDetailPage.missingField'));
            setLoading(false);
            return;
        }
        fnLog.log('field:', field);
        const params = {
            projectId: query.projectId,
            triggerActionGroupId: query.triggerActionGroupId,
            triggerActionId: query.triggerActionId,
            actionGroupId: query.actionGroupId,
            actionId: query.actionId,
            triggerGroupId: query.triggerGroupId,
            triggerId: query.triggerId
        };
        fnLog.log('查找参数:', params);
        const allProjects = [
            ...storage/* projectStore */.D.list,
            ...storage/* projectStore */.D.draft
        ];
        fnLog.log('所有projects数量:', allProjects.length);
        const result = findEntityAcrossProjects(allProjects, params);
        if (!result) {
            fnLog.error('未找到实体');
            setError(t('DescriptionDetailPage.entityNotFound'));
            setLoading(false);
            return;
        }
        fnLog.log('找到实体, type:', result.type, 'entity:', result.entity);
        setEntityResult(result);
        const entity = result.entity;
        if (!entity) {
            fnLog.error('entity为null');
            setError(t('DescriptionDetailPage.entityEmpty'));
            setLoading(false);
            return;
        }
        // 获取实体名字
        const name = entity.name || t('DescriptionDetailPage.unnamed');
        fnLog.log('实体名字:', name);
        setEntityName(name);
        // 获取描述内容
        let content = null;
        if (field === 'summary') {
            content = entity.summary || null;
        } else if (field === 'fullIntroduction') {
            content = entity.fullIntroduction || null;
        } else {
            fnLog.error('未知的field:', field);
            setError(t('DescriptionDetailPage.unknownField', {
                field
            }));
            setLoading(false);
            return;
        }
        fnLog.log('描述内容:', content);
        if (!content) {
            fnLog.log('描述内容为空');
            const fieldName = field === 'summary' ? t('DescriptionDetailPage.summaryName') : t('DescriptionDetailPage.fullIntroductionName');
            setError(t('DescriptionDetailPage.noContent', {
                fieldName
            }));
            setLoading(false);
            return;
        }
        setDescriptionContent(content);
        setLoading(false);
    }, [
        router.isReady,
        router.query,
        t
    ]);
    const handleBack = ()=>{
        const fnLog = uiLog.sub(false, 'handleBack_fn');
        // fnLog.pause = true;
        fnLog.log('返回上一页');
        router.back();
    };
    const appBarProps = {
        title: /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.A, {
            sx: {
                display: 'flex',
                alignItems: 'center'
            },
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsx)(IconButton/* default */.A, {
                    onClick: handleBack,
                    sx: {
                        mr: 1
                    },
                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(ArrowBack, {})
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsxs)(Typography/* default */.A, {
                    variant: "h6",
                    children: [
                        entityName,
                        " - ",
                        t('DescriptionDetailPage.detail')
                    ]
                })
            ]
        }),
        back: false
    };
    uiLog.log('渲染页面, loading:', loading, 'error:', error);
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(AppShell/* AppShell */.G, {
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(AppBar/* AppbarContainer */.W, {
            appbarProps: appBarProps,
            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.A, {
                sx: {
                    p: 3
                },
                children: [
                    loading && /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.A, {
                        sx: {
                            display: 'flex',
                            justifyContent: 'center',
                            mt: 4
                        },
                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(CircularProgress/* default */.A, {})
                    }),
                    error && /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.A, {
                        color: "error",
                        children: error
                    }),
                    !loading && !error && descriptionContent && /*#__PURE__*/ (0,jsx_runtime.jsx)(TranslationComponent/* TranslationComponent */.j, {
                        sourceLang: "auto",
                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(DescriptionContentRenderer, {
                            data: descriptionContent
                        })
                    })
                ]
            })
        })
    });
}


/***/ }),

/***/ 93302:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {


    (window.__NEXT_P = window.__NEXT_P || []).push([
      "/description-detail",
      function () {
        return __webpack_require__(80317);
      }
    ]);
    if(false) {}
  

/***/ }),

/***/ 97972:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  W: () => (/* binding */ AppbarContainer)
});

// UNUSED EXPORTS: Appbar

// EXTERNAL MODULE: ../../node_modules/.pnpm/react@19.1.0/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(94513);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/useScrollTrigger/useScrollTrigger.js
var useScrollTrigger = __webpack_require__(97241);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/Slide/Slide.js
var Slide = __webpack_require__(62115);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/Fade/Fade.js
var Fade = __webpack_require__(41837);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/Box/Box.js + 2 modules
var Box = __webpack_require__(6445);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/CssBaseline/CssBaseline.js
var CssBaseline = __webpack_require__(32055);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/AppBar/AppBar.js + 1 modules
var AppBar_AppBar = __webpack_require__(16844);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/Toolbar/Toolbar.js + 1 modules
var Toolbar_Toolbar = __webpack_require__(21436);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/Container/Container.js + 1 modules
var Container = __webpack_require__(44437);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/Fab/Fab.js + 1 modules
var Fab = __webpack_require__(12726);
// EXTERNAL MODULE: ../../libs/fanfanlo/src/utils/browser/window-history-utils.ts
var window_history_utils = __webpack_require__(70574);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+icons-material@6.4.12_@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_re_5ewkm5t5g27pzq5tz62v6ktvti/node_modules/@mui/icons-material/esm/KeyboardArrowLeft.js
var KeyboardArrowLeft = __webpack_require__(47951);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+icons-material@6.4.12_@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_re_5ewkm5t5g27pzq5tz62v6ktvti/node_modules/@mui/icons-material/esm/KeyboardArrowUp.js
var KeyboardArrowUp = __webpack_require__(94283);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react@19.1.0/node_modules/react/index.js
var react = __webpack_require__(94285);
// EXTERNAL MODULE: ../../node_modules/.pnpm/next@15.3.5_@babel+core@7.28.0_babel-plugin-macros@3.1.0_react-dom@19.1.0_react@19.1.0__react@19.1.0_sass@1.89.2/node_modules/next/router.js
var next_router = __webpack_require__(75640);
// EXTERNAL MODULE: ../../libs/fanfanlo/src/dispatcher/Dispatcher.ts
var Dispatcher = __webpack_require__(82727);
;// ../../libs/app/static/src/mc/static-model.ts

const dipsatcher = new Dispatcher/* Dispatcher */.m();
const staticModel = {
    dipsatcher,
    screenLockCount: 0,
    switchPage: async ()=>{
        dipsatcher.dispatch("switchPage");
        staticModel.screenLockCount = 0;
    },
    listenSwitchPage: (callback)=>{
        return dipsatcher.addListener("switchPage", callback);
    }
};

// EXTERNAL MODULE: ../../node_modules/.pnpm/framer-motion@11.18.2_@emotion+is-prop-valid@1.3.1_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs + 3 modules
var AnimatePresence = __webpack_require__(98969);
// EXTERNAL MODULE: ../../node_modules/.pnpm/framer-motion@11.18.2_@emotion+is-prop-valid@1.3.1_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs + 243 modules
var proxy = __webpack_require__(17582);
;// ../../libs/app/ui/src/components/motion/page-transition.tsx



function PageTransition(param) {
    let { children } = param;
    const router = (0,next_router.useRouter)();
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(AnimatePresence/* AnimatePresence */.N, {
        mode: "sync",
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(proxy/* motion */.P.div, {
            initial: {
                opacity: 0,
                y: 10
            },
            animate: {
                opacity: 1,
                y: 0
            },
            exit: {
                opacity: 0,
                y: -110
            },
            transition: {
                duration: 0.3
            },
            children: children
        }, router.route)
    });
}

;// ../../libs/app/ui/src/components/app/PageShell.tsx





let idCount = 0;
function PageShell(param) {
    let { children } = param;
    const id = "app-shell-".concat(idCount++);
    (0,react.useEffect)(()=>{
        const box = document.querySelector("#".concat(id));
        const unlisten = staticModel.listenSwitchPage(()=>{
            if (!box) return;
        });
        if (!box) return;
        box.addEventListener("click", (e)=>{
            if (staticModel.screenLockCount == 0) return;
            e.stopPropagation();
            e.preventDefault();
        });
        return ()=>{
            unlisten();
        };
    }, []);
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.A, {
        id: id,
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(PageTransition, {
            children: children
        })
    });
}

// EXTERNAL MODULE: ../../libs/app/ui/src/components/page/AndroidPageContent.tsx + 1 modules
var AndroidPageContent = __webpack_require__(67236);
;// ../../libs/app/ui/src/components/appbar/AppBar.tsx


// import {AndroidPageContent} from "../../";







function HideOnScroll(props) {
    const { children, window } = props;
    // Note that you normally won't need to set the window ref as useScrollTrigger
    // will default to window.
    // This is only being set here because the demo is in an iframe.
    const trigger = (0,useScrollTrigger/* default */.A)({
        target: window ? window() : undefined
    });
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(Slide/* default */.A, {
        appear: false,
        direction: "down",
        in: !trigger,
        children: children !== null && children !== void 0 ? children : /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {})
    });
}
function Appbar(param) {
    let { title } = param;
    return /*#__PURE__*/ _jsx(AppBar, {
        color: "inherit",
        children: /*#__PURE__*/ _jsx(Toolbar, {
            children: /*#__PURE__*/ _jsx(Typography, {
                variant: "h6",
                component: "div",
                children: title
            })
        })
    });
}
// export interface IAppBarBackAskEvent{
//     defaultPrevented:boolean
// }
function ScrollTop(props) {
    const { children, window } = props;
    // Note that you normally won't need to set the window ref as useScrollTrigger
    // will default to window.
    // This is only being set here because the demo is in an iframe.
    const trigger = (0,useScrollTrigger/* default */.A)({
        target: window ? window() : undefined,
        disableHysteresis: true,
        threshold: 100
    });
    const handleClick = (event)=>{
        const anchor = (event.target.ownerDocument || document).querySelector('#back-to-top-anchor');
        if (anchor) {
            anchor.scrollIntoView({
                block: 'center'
            });
        }
    };
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(Fade/* default */.A, {
        in: trigger,
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.A, {
            "data-id": "content-scroll-top-button",
            onClick: handleClick,
            role: "presentation",
            sx: {
                position: 'fixed',
                bottom: 16,
                right: 16
            },
            children: children
        })
    });
}
function AppbarContainer(props) {
    const { children, appbarProps, titleConf, reload } = props;
    const router = (0,next_router.useRouter)();
    function handleBack() {
        // 本想抽象成底层一个方法，但是考虑了一下router需要注入或者是一个callback，似乎像现在这样判断一下event也可以。回头继续观察一下吧。
        const event = window_history_utils/* browserHistoryUtils */.W.askHistoryBack();
        if (event.defaultPrevented) return;
        if (appbarProps.backDispatcher) {
            const e = {
                defaultPrevented: false
            };
            appbarProps.backDispatcher.dispatch('back', e);
            if (e.defaultPrevented) return;
        }
        router.back();
    }
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(PageShell, {
        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(react.Fragment, {
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsx)(CssBaseline/* default */.Ay, {}),
                /*#__PURE__*/ (0,jsx_runtime.jsx)(HideOnScroll, {
                    ...props,
                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(AppBar_AppBar/* default */.A, {
                        color: "inherit",
                        children: appbarProps.toolbar ? appbarProps.toolbar : /*#__PURE__*/ (0,jsx_runtime.jsxs)(Toolbar_Toolbar/* default */.A, {
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime.jsx)(KeyboardArrowLeft/* default */.A, {
                                    onClick: handleBack
                                }),
                                appbarProps.title
                            ]
                        })
                    })
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)(Toolbar_Toolbar/* default */.A, {
                    id: "back-to-top-anchor"
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)(Container/* default */.A, {
                    sx: {
                        padding: "0",
                        marginTop: "17px"
                    },
                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(AndroidPageContent/* default */.A, {
                        titleConf: titleConf,
                        reload: reload,
                        children: children
                    })
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)(ScrollTop, {
                    ...props,
                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Fab/* default */.A, {
                        size: "small",
                        "aria-label": "scroll back to top",
                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(KeyboardArrowUp/* default */.A, {})
                    })
                })
            ]
        })
    });
}


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, [5299,9893,8143,636,6593,8792], () => (__webpack_exec__(93302)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ _N_E = __webpack_exports__;
/******/ }
]);
//# sourceMappingURL=description-detail-ea45f59079891fdf.js.map