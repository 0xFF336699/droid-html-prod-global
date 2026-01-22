(self["webpackChunk_N_E"] = self["webpackChunk_N_E"] || []).push([[9436],{

/***/ 2276:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ AddMarketByUrlPage)
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/react@19.1.0/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(94513);
// EXTERNAL MODULE: ../../libs/app/ui/src/components/app/AppShell.tsx + 3 modules
var AppShell = __webpack_require__(26719);
// EXTERNAL MODULE: ../../libs/app/ui/src/components/appbar/AppBar.tsx + 2 modules
var AppBar = __webpack_require__(40018);
// EXTERNAL MODULE: ../../libs/fanfanlo/src/dispatcher/Dispatcher.ts
var Dispatcher = __webpack_require__(30910);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react-i18next@15.6.0_i18next@24.2.3_typescript@5.7.3__react-dom@19.1.0_react@19.1.0__react@19.1.0_typescript@5.7.3/node_modules/react-i18next/dist/es/index.js + 15 modules
var es = __webpack_require__(56137);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react@19.1.0/node_modules/react/index.js
var react = __webpack_require__(94285);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/Card/Card.js + 1 modules
var Card = __webpack_require__(81737);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/CardContent/CardContent.js + 1 modules
var CardContent = __webpack_require__(54559);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/Typography/Typography.js
var Typography = __webpack_require__(26512);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/Box/Box.js + 2 modules
var Box = __webpack_require__(92061);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/Divider/Divider.js
var Divider = __webpack_require__(8536);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/TextField/TextField.js + 1 modules
var TextField = __webpack_require__(32314);
// EXTERNAL MODULE: ../../libs/fanfanlo/src/iframe/IFrameReactContainer.tsx + 1 modules
var IFrameReactContainer = __webpack_require__(45098);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/Checkbox/Checkbox.js + 4 modules
var Checkbox = __webpack_require__(22653);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/FormControlLabel/FormControlLabel.js + 1 modules
var FormControlLabel = __webpack_require__(21069);
// EXTERNAL MODULE: ../../node_modules/.pnpm/ahooks@3.9.0_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/ahooks/es/useDebounceFn/index.js + 4 modules
var useDebounceFn = __webpack_require__(1131);
// EXTERNAL MODULE: ../../node_modules/.pnpm/axios@1.10.0/node_modules/axios/lib/axios.js + 48 modules
var axios = __webpack_require__(74440);
;// ./src/components/page/add-market-by-url/ui/market-input-form/MarketInputForm.tsx









async function loadHtmlFromUrl(value) {
    const url = "https://autumn-mouse-8da2.mailregios.workers.dev/?url=".concat(encodeURIComponent(value));
    const res = await axios/* default */.A.get(url);
    if (!res.data || !res.data.html) {
        throw new Error('Failed to fetch HTML content.');
    }
    // 这个html就是html的内容。
    // 获取url的origin
    const { origin } = new URL(value);
    // 替换所有script和link标签的src/href为绝对路径
    let html = res.data.html;
    // 拼接时去除重复斜杠，保证只有一个/
    function joinOriginPath(origin, path) {
        let url;
        if (origin.endsWith('/') && path.startsWith('/')) {
            url = origin + path.slice(1);
        } else if (!origin.endsWith('/') && !path.startsWith('/')) {
            url = origin + '/' + path;
        } else {
            url = origin + path;
        }
        // 追加__time__参数
        const timeParam = "__time__=".concat(Date.now());
        if (url.includes('?')) {
            // 已有参数，判断是否已带__time__，避免重复
            if (/([&?])__time__=/.test(url)) return url;
            return url + (url.endsWith('?') || url.endsWith('&') ? '' : '&') + timeParam;
        } else {
            return url + '?' + timeParam;
        }
    }
    // 替换<script src="...">
    html = html.replace(/(<script[^>]*src=["'])(?!https?:|\/\/)([^"'>]+)/gi, (match, p1, p2)=>"".concat(p1).concat(joinOriginPath(origin, p2)));
    // 替换<link href="...">，常用于css
    html = html.replace(/(<link[^>]*href=["'])(?!https?:|\/\/)([^"'>]+)/gi, (match, p1, p2)=>"".concat(p1).concat(joinOriginPath(origin, p2)));
    // 替换<style>@import '...'</style> 里的路径（简单处理）
    html = html.replace(/(@import\s+["'])(?!https?:|\/\/)([^"']+)/gi, (match, p1, p2)=>"".concat(p1).concat(joinOriginPath(origin, p2)));
    console.log('parsed html=', html);
    return html;
}
const MarketInputForm = (param)=>{
    let { isFullMarketPage, onMarketConfigReady, initialValue = '', initialIsUrl = true } = param;
    const [inputValue, setInputValue] = (0,react.useState)(initialValue);
    const [isUrl, setIsUrl] = (0,react.useState)(initialIsUrl);
    const [error, setError] = (0,react.useState)('');
    const { t } = (0,es/* useTranslation */.Bd)("homepage/components/page/add-market-by-url/ui/market-input-form/content");
    // Basic URL validation (can be improved)
    const isValidUrl = (url)=>{
        try {
            new URL(url);
            return true;
        } catch (_) {
            return false;
        }
    };
    // The core logic for processing input
    const processInput = (0,react.useCallback)(async (value, isUrlChecked)=>{
        console.log('Processing input:', value, 'Is URL:', isUrlChecked);
        if (!value) {
            setError('');
            onMarketConfigReady({
                str: '',
                isUrl
            });
            console.log('cleared');
            return;
        }
        if (isUrlChecked) {
            if (value && isValidUrl(value)) {
                const html = await loadHtmlFromUrl(value);
                if (html) {
                    setError('');
                    onMarketConfigReady({
                        str: html,
                        isUrl: false
                    });
                } else {
                    setError('Failed to fetch HTML content.');
                }
            } else if (value) {
                setError('Please enter a valid URL.');
            } else {
                setError(''); // Clear error if input is empty
            }
        } else {
            // For HTML content, maybe trigger on button click or explicit action?
            // For now, let's assume direct content is always 'ready'
            setError('');
            onMarketConfigReady({
                str: value,
                isUrl: false
            });
        }
    }, [
        onMarketConfigReady
    ]);
    // Create the debounced version of the processing function
    const { run: debouncedProcessInput } = (0,useDebounceFn/* default */.A)(processInput, {
        wait: 500
    });
    const handleInputChange = (event)=>{
        const newValue = event.target.value;
        setInputValue(newValue);
        // Call the debounced function when typing
        debouncedProcessInput(newValue, isUrl);
    };
    const handleCheckboxChange = (event)=>{
        const newIsUrl = event.target.checked;
        setIsUrl(newIsUrl);
        // Call the original function immediately when checkbox changes
        processInput(inputValue, newIsUrl);
    };
    let isUrlLabel = "";
    if (isUrl) {
        isUrlLabel = isFullMarketPage ? t('content.full.url') : t('content.item.url');
    } else {
        isUrlLabel = isFullMarketPage ? t('content.full.html') : t('content.item.html');
    }
    let placeholder = "";
    if (!isUrl) {
        placeholder = isFullMarketPage ? "<html><body><div>script list<div></body></html>" : "<html><body><div>".concat(t('content.item.come'), '<a href="https://github.com/your-name/your-repo/docs/index.html">').concat(t('content.item.myMarketName'), "</a>").concat(t('content.item.stroll'), "</div></body></html>");
    } else {
        placeholder = isFullMarketPage ? "https://github.com/your-name/your-repo/docs/market.html" : "https://github.com/your-name/your-repo/docs/summary.html";
    }
    const testIdSuffix = isFullMarketPage ? 'full' : 'item';
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.A, {
        sx: {
            display: 'flex',
            flexDirection: 'column',
            gap: 2
        },
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(TextField/* default */.A, {
                label: isUrlLabel,
                variant: "outlined",
                fullWidth: true,
                value: inputValue,
                onChange: handleInputChange,
                error: !!error,
                helperText: error,
                placeholder: placeholder,
                multiline: !isUrl,
                rows: isUrl ? 1 : 4,
                "data-testid": "MarketInputForm__urlOrHtmlInput__01JFQX8K9N__".concat(testIdSuffix),
                "data-test-comment": "URL 或 HTML 输入框，根据 isUrl 状态切换输入类型（单行 URL 或多行 HTML）"
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(FormControlLabel/* default */.A, {
                control: /*#__PURE__*/ (0,jsx_runtime.jsx)(Checkbox/* default */.A, {
                    checked: isUrl,
                    onChange: handleCheckboxChange,
                    "data-testid": "MarketInputForm__isUrlCheckbox__01JFQX8K9N__".concat(testIdSuffix),
                    "data-test-comment": "URL/HTML 切换复选框，勾选表示输入 URL，取消表示输入 HTML 代码"
                }),
                label: t("content.isUrl")
            })
        ]
    });
};
/* harmony default export */ const market_input_form_MarketInputForm = (MarketInputForm);

;// ./src/components/page/add-market-by-url/ui/AddMarketByUrl.tsx










const AddMarketByUrl = ()=>{
    const [name, setName] = (0,react.useState)('');
    const [summary, setSummary] = (0,react.useState)('');
    const [description, setDescription] = (0,react.useState)('');
    const [urlOrHtmlConf, setUrlOrHtmlConf] = (0,react.useState)(null);
    const [fullMarketConf, setFullMarketConf] = (0,react.useState)(null);
    const { t } = (0,es/* useTranslation */.Bd)("homepage/components/page/add-market-by-url/ui/content");
    const iframeStyle = {
        minWidth: '300px',
        minHeight: '200px',
        border: '1px solid #ccc',
        display: 'block'
    };
    const handleMarketConfigReady = (0,react.useCallback)((config)=>{
        setUrlOrHtmlConf(config);
    }, []);
    const handleFullMarketConfigReady = (0,react.useCallback)((config)=>{
        setFullMarketConf(config);
    }, []);
    const itemMarket = urlOrHtmlConf;
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(Card/* default */.A, {
        sx: {
            maxWidth: 800,
            margin: 'auto',
            mt: 2
        },
        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(CardContent/* default */.A, {
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.A, {
                    sx: {
                        mb: 2,
                        color: 'error.main'
                    },
                    children: t("content.warning")
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.A, {
                    variant: "h5",
                    component: "h2",
                    gutterBottom: true,
                    children: t("content.setNewMarket")
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.A, {
                    sx: {
                        mb: 2
                    },
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(TextField/* default */.A, {
                            fullWidth: true,
                            label: t("content.marketName"),
                            variant: "outlined",
                            value: name,
                            onChange: (e)=>setName(e.target.value),
                            sx: {
                                mb: 1
                            },
                            "data-testid": "AddMarketByUrl__marketNameInput__01JFQX8K9M"
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(TextField/* default */.A, {
                            fullWidth: true,
                            label: t("content.marketSummary"),
                            variant: "outlined",
                            value: summary,
                            onChange: (e)=>setSummary(e.target.value),
                            multiline: true,
                            rows: 2,
                            sx: {
                                mb: 1
                            },
                            "data-testid": "AddMarketByUrl__marketSummaryInput__01JFQX8K9M"
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(TextField/* default */.A, {
                            fullWidth: true,
                            label: t("content.marketDescription"),
                            variant: "outlined",
                            value: description,
                            onChange: (e)=>setDescription(e.target.value),
                            multiline: true,
                            rows: 4,
                            sx: {
                                mb: 2
                            },
                            "data-testid": "AddMarketByUrl__marketDescInput__01JFQX8K9M"
                        })
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.A, {
                    variant: "h6",
                    gutterBottom: true,
                    sx: {
                        mt: 2
                    },
                    children: t("content.itemMarket")
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)(market_input_form_MarketInputForm, {
                    onMarketConfigReady: handleMarketConfigReady,
                    isFullMarketPage: false
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.A, {
                    variant: "h6",
                    gutterBottom: true,
                    sx: {
                        mt: 2
                    },
                    children: t("content.fullMarket")
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)(market_input_form_MarketInputForm, {
                    onMarketConfigReady: handleFullMarketConfigReady,
                    isFullMarketPage: true
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)(Divider/* default */.A, {
                    sx: {
                        my: 2
                    }
                }),
                (name || summary || description || itemMarket || fullMarketConf) && /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.A, {
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsx)("hr", {}),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.A, {
                            sx: {
                                textAlign: 'center'
                            },
                            variant: "h6",
                            component: "h3",
                            gutterBottom: true,
                            children: t("content.settingPreview")
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsxs)(Typography/* default */.A, {
                            variant: "body1",
                            component: "p",
                            paragraph: true,
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("strong", {
                                    children: [
                                        t("content.marketName"),
                                        ":"
                                    ]
                                }),
                                " ",
                                name || t("content.isNotSet")
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsxs)(Typography/* default */.A, {
                            variant: "body1",
                            component: "p",
                            paragraph: true,
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("strong", {
                                    children: [
                                        t("content.marketSummary"),
                                        ":"
                                    ]
                                }),
                                " ",
                                summary || t("content.isNotSet")
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsxs)(Typography/* default */.A, {
                            variant: "body1",
                            component: "p",
                            paragraph: true,
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("strong", {
                                    children: [
                                        t("content.marketDescription"),
                                        ":"
                                    ]
                                }),
                                " ",
                                description || t("content.isNotSet")
                            ]
                        }),
                        itemMarket && /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.A, {
                            sx: {
                                mb: 2
                            },
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.A, {
                                    variant: "subtitle1",
                                    gutterBottom: true,
                                    children: t("content.marketCardPreview")
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)(IFrameReactContainer/* IFrameReactContainer */.T, {
                                    url: itemMarket.isUrl ? itemMarket.str : undefined,
                                    content: !itemMarket.isUrl ? itemMarket.str : undefined,
                                    style: iframeStyle
                                }, "item-market-".concat(itemMarket.str))
                            ]
                        }),
                        fullMarketConf && /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.A, {
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.A, {
                                    variant: "subtitle1",
                                    gutterBottom: true,
                                    children: t("content.marketFullPreview")
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)(IFrameReactContainer/* IFrameReactContainer */.T, {
                                    url: fullMarketConf.isUrl ? fullMarketConf.str : undefined,
                                    content: !fullMarketConf.isUrl ? fullMarketConf.str : undefined,
                                    style: iframeStyle
                                }, "full-market-".concat(fullMarketConf.str))
                            ]
                        })
                    ]
                })
            ]
        })
    });
};
/* harmony default export */ const ui_AddMarketByUrl = (AddMarketByUrl);

;// ./src/pages/add-market-by-url/index.tsx




function AddMarketByUrlPage() {
    const marketConf = {
        name: 'Test Market URL',
        summary: 'Test Summary',
        description: 'Test Description',
        itemMarket: {
            str: '',
            isUrl: true
        },
        fullMarket: {
            str: '',
            isUrl: true
        }
    };
    const dispatcher = new Dispatcher/* Dispatcher */.m();
    const { t } = (0,es/* useTranslation */.Bd)('homepage/pages/add-market-by-url/content');
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(AppShell/* AppShell */.G, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(AppBar/* AppbarContainer */.W, {
                appbarProps: {
                    title: t("content.title"),
                    back: true,
                    backDispatcher: dispatcher
                }
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(ui_AddMarketByUrl, {})
        ]
    });
}


/***/ }),

/***/ 95689:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {


    (window.__NEXT_P = window.__NEXT_P || []).push([
      "/add-market-by-url",
      function () {
        return __webpack_require__(2276);
      }
    ]);
    if(false) {}
  

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, [7772,472,402,5241,6940,1490,1322,2314,3585,9403,8564,1508,5098,636,6593,8792], () => (__webpack_exec__(95689)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ _N_E = __webpack_exports__;
/******/ }
]);
//# sourceMappingURL=add-market-by-url-e3db9cdac775692f.js.map