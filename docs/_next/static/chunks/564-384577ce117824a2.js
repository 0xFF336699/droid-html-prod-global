"use strict";
(self["webpackChunk_N_E"] = self["webpackChunk_N_E"] || []).push([[564],{

/***/ 70564:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  S: () => (/* binding */ WindowConfEditor)
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/react@19.1.0/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(94513);
// EXTERNAL MODULE: ../../libs/droid/android/src/android/win/WindowConf.ts
var WindowConf = __webpack_require__(39800);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react-i18next@15.6.0_i18next@24.2.3_typescript@5.7.3__react-dom@19.1.0_react@19.1.0__react@19.1.0_typescript@5.7.3/node_modules/react-i18next/dist/es/index.js + 15 modules
var es = __webpack_require__(50279);
// EXTERNAL MODULE: ../../libs/fanfanlo/src/watcher/proxyWatch.ts
var proxyWatch = __webpack_require__(88518);
// EXTERNAL MODULE: ../../libs/fanfanlo/src/watcher/useProxyWatch.ts
var watcher_useProxyWatch = __webpack_require__(45007);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/Box/Box.js + 2 modules
var Box_Box = __webpack_require__(6445);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/Typography/Typography.js
var Typography_Typography = __webpack_require__(67079);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/Accordion/Accordion.js + 1 modules
var Accordion = __webpack_require__(20350);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/AccordionSummary/AccordionSummary.js + 1 modules
var AccordionSummary = __webpack_require__(56420);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/Chip/Chip.js + 2 modules
var Chip = __webpack_require__(688);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/AccordionDetails/AccordionDetails.js + 1 modules
var AccordionDetails = __webpack_require__(29708);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/Stack/Stack.js + 1 modules
var Stack_Stack = __webpack_require__(9220);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/Button/Button.js + 3 modules
var Button = __webpack_require__(28669);
// EXTERNAL MODULE: ../../node_modules/.pnpm/next@15.3.5_@babel+core@7.28.0_babel-plugin-macros@3.1.0_react-dom@19.1.0_react@19.1.0__react@19.1.0_sass@1.89.2/node_modules/next/router.js
var next_router = __webpack_require__(75640);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+icons-material@6.4.12_@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_re_5ewkm5t5g27pzq5tz62v6ktvti/node_modules/@mui/icons-material/esm/ExpandMore.js
var ExpandMore = __webpack_require__(21985);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react@19.1.0/node_modules/react/index.js
var react = __webpack_require__(94285);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/Tooltip/Tooltip.js + 4 modules
var Tooltip = __webpack_require__(77779);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/TextField/TextField.js + 1 modules
var TextField_TextField = __webpack_require__(38771);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/Select/Select.js + 11 modules
var Select_Select = __webpack_require__(1593);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/MenuItem/MenuItem.js + 2 modules
var MenuItem_MenuItem = __webpack_require__(82797);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/FormControlLabel/FormControlLabel.js + 1 modules
var FormControlLabel_FormControlLabel = __webpack_require__(30281);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/Checkbox/Checkbox.js + 4 modules
var Checkbox_Checkbox = __webpack_require__(93916);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/Alert/Alert.js + 6 modules
var Alert = __webpack_require__(81482);
// EXTERNAL MODULE: ./src/components/android-float/window/data.ts
var data = __webpack_require__(70011);
;// ./src/components/android-float/window/HtmlConfUI.tsx






// WebViewJsParams UI
function WebViewJsParamsUI(param) {
    let { jsParams } = param;
    console.log('🔥 WebViewJsParamsUI: Component RENDER! jsParams:', jsParams);
    const { t } = (0,es/* useTranslation */.Bd)('droid-android/android/win/content');
    const [fitContentWidth] = (0,watcher_useProxyWatch/* useProxyWatch */.x)(jsParams, 'fitContentWidth', jsParams.fitContentWidth || 0);
    const [fitContentHeight] = (0,watcher_useProxyWatch/* useProxyWatch */.x)(jsParams, 'fitContentHeight', jsParams.fitContentHeight || 0);
    const [javaToJsDataString] = (0,watcher_useProxyWatch/* useProxyWatch */.x)(jsParams, 'javaToJsDataString', jsParams.javaToJsDataString || '');
    const [fitContentId] = (0,watcher_useProxyWatch/* useProxyWatch */.x)(jsParams, 'fitContentId', jsParams.fitContentId || '');
    const [fitContentClass] = (0,watcher_useProxyWatch/* useProxyWatch */.x)(jsParams, 'fitContentClass', jsParams.fitContentClass || '');
    const [fitContentJs] = (0,watcher_useProxyWatch/* useProxyWatch */.x)(jsParams, 'fitContentJs', jsParams.fitContentJs || '');
    console.log('WebViewJsParamsUI: Rendering with values:', {
        fitContentWidth,
        fitContentHeight,
        javaToJsDataString,
        fitContentId,
        fitContentClass,
        fitContentJs
    });
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(Stack_Stack/* default */.A, {
        spacing: 1,
        sx: {
            pl: 2
        },
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(TextField_TextField/* default */.A, {
                label: t('content.WebViewJsParams.fitContentWidth'),
                type: "number",
                value: fitContentWidth,
                onChange: (e)=>{
                    jsParams.fitContentWidth = Number(e.target.value);
                },
                size: "small"
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(TextField_TextField/* default */.A, {
                label: t('content.WebViewJsParams.fitContentHeight'),
                type: "number",
                value: fitContentHeight,
                onChange: (e)=>{
                    jsParams.fitContentHeight = Number(e.target.value);
                },
                size: "small"
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(TextField_TextField/* default */.A, {
                label: t('content.WebViewJsParams.javaToJsDataString'),
                value: javaToJsDataString,
                onChange: (e)=>{
                    jsParams.javaToJsDataString = e.target.value;
                },
                size: "small",
                multiline: true,
                rows: 2
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(TextField_TextField/* default */.A, {
                label: t('content.WebViewJsParams.fitContentId'),
                value: fitContentId,
                onChange: (e)=>{
                    jsParams.fitContentId = e.target.value;
                },
                size: "small"
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(TextField_TextField/* default */.A, {
                label: t('content.WebViewJsParams.fitContentClass'),
                value: fitContentClass,
                onChange: (e)=>{
                    jsParams.fitContentClass = e.target.value;
                },
                size: "small"
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(TextField_TextField/* default */.A, {
                label: t('content.WebViewJsParams.fitContentJs'),
                value: fitContentJs,
                onChange: (e)=>{
                    jsParams.fitContentJs = e.target.value;
                },
                size: "small",
                multiline: true,
                rows: 2
            })
        ]
    });
}
function HtmlConfUI_HtmlConfUI(param) {
    let { htmlConf } = param;
    const { t } = (0,es/* useTranslation */.Bd)('droid-android/android/win/content');
    console.log('=== HtmlConfUI: Component render start ===');
    console.log('HtmlConfUI: htmlConf received:', htmlConf);
    console.log('HtmlConfUI: htmlConf.webViewJsParams:', htmlConf.webViewJsParams);
    console.log('HtmlConfUI: htmlConf.webViewJsParams type:', typeof htmlConf.webViewJsParams);
    console.log('HtmlConfUI: htmlConf.webViewJsParams is null:', htmlConf.webViewJsParams === null);
    console.log('HtmlConfUI: htmlConf.webViewJsParams is undefined:', htmlConf.webViewJsParams === undefined);
    console.log('HtmlConfUI: htmlConf.webViewJsParams truthiness:', !!htmlConf.webViewJsParams);
    console.log('HtmlConfUI: htmlConf.webViewConf:', htmlConf.webViewConf);
    const [url] = (0,watcher_useProxyWatch/* useProxyWatch */.x)(htmlConf, 'url', htmlConf.url || '');
    const [html] = (0,watcher_useProxyWatch/* useProxyWatch */.x)(htmlConf, 'html', htmlConf.html || '');
    const [jsBridgeName] = (0,watcher_useProxyWatch/* useProxyWatch */.x)(htmlConf, 'jsBridgeName', htmlConf.jsBridgeName || '');
    const [webViewJsParams] = (0,watcher_useProxyWatch/* useProxyWatch */.x)(htmlConf, 'webViewJsParams', htmlConf.webViewJsParams);
    const [webViewConf] = (0,watcher_useProxyWatch/* useProxyWatch */.x)(htmlConf, 'webViewConf', htmlConf.webViewConf);
    const [webViewJsName] = (0,watcher_useProxyWatch/* useProxyWatch */.x)(htmlConf, 'webViewJsName', htmlConf.webViewJsName || '');
    const [javaRunnerId] = (0,watcher_useProxyWatch/* useProxyWatch */.x)(htmlConf, 'javaRunnerId', htmlConf.javaRunnerId || 0);
    const [extra] = (0,watcher_useProxyWatch/* useProxyWatch */.x)(htmlConf, 'extra', htmlConf.extra || {});
    console.log('HtmlConfUI: after useProxyWatch - webViewJsParams:', webViewJsParams);
    console.log('HtmlConfUI: after useProxyWatch - webViewConf:', webViewConf);
    // 本地状态用于内容输入和错误提示
    const [contentInput, setContentInput] = (0,react.useState)(htmlConf.url || htmlConf.html || '');
    const [contentError, setContentError] = (0,react.useState)('');
    const [detectedType, setDetectedType] = (0,react.useState)('invalid');
    // 本地状态用于 JSON 编辑和错误提示
    const [extraJson, setExtraJson] = (0,react.useState)(JSON.stringify(htmlConf.extra || {}, null, 2));
    const [extraJsonError, setExtraJsonError] = (0,react.useState)('');
    const handleContentChange = (value)=>{
        console.log('HtmlConfUI: content input changed');
        setContentInput(value);
        if (!value || value.trim().length === 0) {
            setDetectedType('invalid');
            setContentError('');
            htmlConf.url = '';
            htmlConf.html = '';
            return;
        }
        const type = (0,data/* detectContentType */.l1)(value);
        console.log('HtmlConfUI: detected content type:', type);
        setDetectedType(type);
        if (type === 'invalid') {
            setContentError(t('content.HtmlConf.contentInvalid'));
            return;
        }
        setContentError('');
        if (type === 'url') {
            htmlConf.url = value;
            htmlConf.html = '';
            console.log('HtmlConfUI: set as URL:', value);
        } else if (type === 'html') {
            htmlConf.html = value;
            htmlConf.url = '';
            console.log('HtmlConfUI: set as HTML:', value);
        }
    };
    const extraJsonChange = (value)=>{
        console.log('HtmlConfUI: extra JSON changed');
        setExtraJson(value);
        try {
            const parsed = JSON.parse(value);
            htmlConf.extra = parsed;
            setExtraJsonError('');
            console.log('HtmlConfUI: extra JSON parsed successfully:', parsed);
        } catch (err) {
            const errorMsg = err instanceof Error ? err.message : t('content.HtmlConf.extraJsonError');
            setExtraJsonError(errorMsg);
            console.error('HtmlConfUI: extra JSON parse error:', err);
        }
    };
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(Stack_Stack/* default */.A, {
        spacing: 2,
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(SectionTitle, {
                title: t('content.HtmlConf.required'),
                count: 1
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box_Box/* default */.A, {
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(RequiredLabel, {
                        label: t('content.HtmlConf.content')
                    }),
                    contentError && /*#__PURE__*/ (0,jsx_runtime.jsx)(Alert/* default */.A, {
                        severity: "error",
                        sx: {
                            mb: 1
                        },
                        children: contentError
                    }),
                    detectedType !== 'invalid' && /*#__PURE__*/ (0,jsx_runtime.jsxs)(Alert/* default */.A, {
                        severity: "success",
                        sx: {
                            mb: 1
                        },
                        children: [
                            t('content.HtmlConf.detectedAs'),
                            ": ",
                            detectedType === 'url' ? 'URL' : 'HTML'
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(TextField_TextField/* default */.A, {
                        value: contentInput,
                        onChange: (e)=>handleContentChange(e.target.value),
                        placeholder: t('content.HtmlConf.contentPlaceholder'),
                        size: "small",
                        multiline: true,
                        rows: 4,
                        fullWidth: true,
                        helperText: t('content.HtmlConf.contentHelper'),
                        error: !!contentError
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(SectionTitle, {
                title: t('content.HtmlConf.optional'),
                count: 6
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box_Box/* default */.A, {
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(OptionalLabel, {
                        label: t('content.HtmlConf.jsBridgeName')
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(TextField_TextField/* default */.A, {
                        value: jsBridgeName,
                        onChange: (e)=>{
                            htmlConf.jsBridgeName = e.target.value;
                        },
                        size: "small",
                        fullWidth: true
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box_Box/* default */.A, {
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(OptionalLabel, {
                        label: t('content.HtmlConf.webViewJsName')
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(TextField_TextField/* default */.A, {
                        value: webViewJsName,
                        onChange: (e)=>{
                            htmlConf.webViewJsName = e.target.value;
                        },
                        size: "small",
                        fullWidth: true
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box_Box/* default */.A, {
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(OptionalLabel, {
                        label: t('content.HtmlConf.javaRunnerId')
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(TextField_TextField/* default */.A, {
                        type: "number",
                        value: javaRunnerId,
                        onChange: (e)=>{
                            htmlConf.javaRunnerId = Number(e.target.value);
                        },
                        size: "small",
                        fullWidth: true
                    })
                ]
            }),
            (()=>{
                console.log('HtmlConfUI: Evaluating webViewJsParams condition...');
                console.log('HtmlConfUI: webViewJsParams value:', webViewJsParams);
                console.log('HtmlConfUI: webViewJsParams truthiness:', !!webViewJsParams);
                const shouldRender = !!webViewJsParams;
                console.log('HtmlConfUI: Should render WebViewJsParams?', shouldRender);
                if (shouldRender) {
                    console.log('✅ WebViewJsParams WILL BE RENDERED!');
                } else {
                    console.log('❌ WebViewJsParams will NOT be rendered');
                }
                return shouldRender;
            })() && /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
                children: [
                    console.log('📦 Rendering WebViewJsParams block...'),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)(Typography_Typography/* default */.A, {
                        variant: "subtitle2",
                        children: [
                            console.log('📝 Rendering Typography for WebViewJsParams.title'),
                            t('content.WebViewJsParams.title')
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(WebViewJsParamsUI, {
                        jsParams: webViewJsParams
                    })
                ]
            }),
            (()=>{
                console.log('HtmlConfUI: Evaluating webViewConf condition...');
                console.log('HtmlConfUI: webViewConf value:', webViewConf);
                console.log('HtmlConfUI: webViewConf truthiness:', !!webViewConf);
                const shouldRender = !!webViewConf;
                console.log('HtmlConfUI: Should render WebViewConf?', shouldRender);
                return shouldRender;
            })() && /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography_Typography/* default */.A, {
                        variant: "subtitle2",
                        children: t('content.WebViewConf.title')
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(WebViewConfUI, {
                        webViewConf: webViewConf
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box_Box/* default */.A, {
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(OptionalLabel, {
                        label: t('content.HtmlConf.extra')
                    }),
                    extraJsonError && /*#__PURE__*/ (0,jsx_runtime.jsxs)(Alert/* default */.A, {
                        severity: "error",
                        sx: {
                            mb: 1
                        },
                        children: [
                            t('content.HtmlConf.extraJsonError'),
                            ": ",
                            extraJsonError
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(TextField_TextField/* default */.A, {
                        value: extraJson,
                        onChange: (e)=>extraJsonChange(e.target.value),
                        placeholder: t('content.HtmlConf.extraPlaceholder'),
                        size: "small",
                        multiline: true,
                        rows: 4,
                        fullWidth: true,
                        helperText: t('content.HtmlConf.extraHelper'),
                        error: !!extraJsonError
                    })
                ]
            })
        ]
    });
}

;// ./src/components/android-float/window/WindowConfUI.tsx






// ============ 标签辅助组件 ============
// 必选标签组件
function RequiredLabel(param) {
    let { label, description } = param;
    const content = /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box_Box/* default */.A, {
        sx: {
            display: 'flex',
            alignItems: 'center',
            gap: 0.5
        },
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography_Typography/* default */.A, {
                children: label
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography_Typography/* default */.A, {
                sx: {
                    color: 'error.main',
                    fontWeight: 'bold'
                },
                children: "*"
            })
        ]
    });
    if (description) {
        return /*#__PURE__*/ (0,jsx_runtime.jsx)(Tooltip/* default */.A, {
            title: description,
            arrow: true,
            children: content
        });
    }
    return content;
}
// 可选标签组件
function OptionalLabel(param) {
    let { label, description } = param;
    const { t } = (0,es/* useTranslation */.Bd)('homepage/components/android-float/window/content');
    const content = /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box_Box/* default */.A, {
        sx: {
            display: 'flex',
            alignItems: 'center',
            gap: 0.5
        },
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography_Typography/* default */.A, {
                children: label
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography_Typography/* default */.A, {
                sx: {
                    color: 'text.secondary',
                    fontSize: '0.875rem'
                },
                children: t('WindowConfUI.optional')
            })
        ]
    });
    if (description) {
        return /*#__PURE__*/ (0,jsx_runtime.jsx)(Tooltip/* default */.A, {
            title: description,
            arrow: true,
            children: content
        });
    }
    return content;
}
// Section 标题组件
function SectionTitle(param) {
    let { title, count } = param;
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box_Box/* default */.A, {
        sx: {
            display: 'flex',
            alignItems: 'center',
            gap: 1,
            mt: 2,
            mb: 1.5
        },
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography_Typography/* default */.A, {
                variant: "subtitle1",
                sx: {
                    fontWeight: 'bold',
                    color: 'primary.main'
                },
                children: title
            }),
            count && /*#__PURE__*/ (0,jsx_runtime.jsxs)(Typography_Typography/* default */.A, {
                sx: {
                    color: 'text.secondary',
                    fontSize: '0.875rem'
                },
                children: [
                    "(",
                    count,
                    ")"
                ]
            })
        ]
    });
}
// WebViewConf UI
function WebViewConfUI(param) {
    let { webViewConf } = param;
    const { t } = (0,es/* useTranslation */.Bd)('droid-android/android/win/content');
    const [backgroundColor] = (0,watcher_useProxyWatch/* useProxyWatch */.x)(webViewConf, 'backgroundColor', webViewConf.backgroundColor || 0);
    const [ua] = (0,watcher_useProxyWatch/* useProxyWatch */.x)(webViewConf, 'ua', webViewConf.ua || '');
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(Stack_Stack/* default */.A, {
        spacing: 1,
        sx: {
            pl: 2
        },
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(TextField_TextField/* default */.A, {
                label: t('content.WebViewConf.backgroundColor'),
                type: "number",
                value: backgroundColor,
                onChange: (e)=>{
                    webViewConf.backgroundColor = Number(e.target.value);
                },
                size: "small"
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(TextField_TextField/* default */.A, {
                label: t('content.WebViewConf.ua'),
                value: ua,
                onChange: (e)=>{
                    webViewConf.ua = e.target.value;
                },
                size: "small",
                multiline: true,
                rows: 2
            })
        ]
    });
}
// GravityInfo UI
function GravityInfoUI(param) {
    let { gravityInfo } = param;
    const { t } = (0,es/* useTranslation */.Bd)('droid-android/android/win/content');
    const [gravity] = (0,watcher_useProxyWatch/* useProxyWatch */.x)(gravityInfo, 'gravity', gravityInfo.gravity);
    const [offsetX] = (0,watcher_useProxyWatch/* useProxyWatch */.x)(gravityInfo, 'offsetX', gravityInfo.offsetX || 0);
    const [offsetY] = (0,watcher_useProxyWatch/* useProxyWatch */.x)(gravityInfo, 'offsetY', gravityInfo.offsetY || 0);
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(Stack_Stack/* default */.A, {
        spacing: 1,
        sx: {
            pl: 2
        },
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Select_Select/* default */.A, {
                value: gravity,
                onChange: (e)=>{
                    gravityInfo.gravity = e.target.value;
                },
                size: "small",
                children: (0,WindowConf/* getGravityOptions */.n2)(t).map((option)=>/*#__PURE__*/ (0,jsx_runtime.jsx)(MenuItem_MenuItem/* default */.A, {
                        value: option.value,
                        children: option.label
                    }, option.value))
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(TextField_TextField/* default */.A, {
                label: t('content.GravityInfo.offsetX'),
                type: "number",
                value: offsetX,
                onChange: (e)=>{
                    gravityInfo.offsetX = Number(e.target.value);
                },
                size: "small"
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(TextField_TextField/* default */.A, {
                label: t('content.GravityInfo.offsetY'),
                type: "number",
                value: offsetY,
                onChange: (e)=>{
                    gravityInfo.offsetY = Number(e.target.value);
                },
                size: "small"
            })
        ]
    });
}
// BorderInfo UI
function BorderInfoUI(param) {
    let { borderInfo } = param;
    const { t } = (0,es/* useTranslation */.Bd)('droid-android/android/win/content');
    const [left] = (0,watcher_useProxyWatch/* useProxyWatch */.x)(borderInfo, 'left', borderInfo.left);
    const [top] = (0,watcher_useProxyWatch/* useProxyWatch */.x)(borderInfo, 'top', borderInfo.top);
    const [right] = (0,watcher_useProxyWatch/* useProxyWatch */.x)(borderInfo, 'right', borderInfo.right);
    const [bottom] = (0,watcher_useProxyWatch/* useProxyWatch */.x)(borderInfo, 'bottom', borderInfo.bottom);
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(Stack_Stack/* default */.A, {
        spacing: 1,
        sx: {
            pl: 2
        },
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(TextField_TextField/* default */.A, {
                label: t('content.BorderInfo.left'),
                type: "number",
                value: left,
                onChange: (e)=>{
                    borderInfo.left = Number(e.target.value);
                },
                size: "small"
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(TextField_TextField/* default */.A, {
                label: t('content.BorderInfo.top'),
                type: "number",
                value: top,
                onChange: (e)=>{
                    borderInfo.top = Number(e.target.value);
                },
                size: "small"
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(TextField_TextField/* default */.A, {
                label: t('content.BorderInfo.right'),
                type: "number",
                value: right,
                onChange: (e)=>{
                    borderInfo.right = Number(e.target.value);
                },
                size: "small"
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(TextField_TextField/* default */.A, {
                label: t('content.BorderInfo.bottom'),
                type: "number",
                value: bottom,
                onChange: (e)=>{
                    borderInfo.bottom = Number(e.target.value);
                },
                size: "small"
            })
        ]
    });
}
// MatchParentInfo UI
function MatchParentInfoUI(param) {
    let { matchParentInfo } = param;
    const { t } = (0,es/* useTranslation */.Bd)('droid-android/android/win/content');
    const [widthMatch] = (0,watcher_useProxyWatch/* useProxyWatch */.x)(matchParentInfo, 'widthMatch', matchParentInfo.widthMatch);
    const [heightMatch] = (0,watcher_useProxyWatch/* useProxyWatch */.x)(matchParentInfo, 'heightMatch', matchParentInfo.heightMatch);
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(Stack_Stack/* default */.A, {
        spacing: 1,
        sx: {
            pl: 2
        },
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(FormControlLabel_FormControlLabel/* default */.A, {
                control: /*#__PURE__*/ (0,jsx_runtime.jsx)(Checkbox_Checkbox/* default */.A, {
                    checked: widthMatch,
                    onChange: (e)=>{
                        matchParentInfo.widthMatch = e.target.checked;
                    }
                }),
                label: t('content.MatchParentInfo.widthMatch')
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(FormControlLabel_FormControlLabel/* default */.A, {
                control: /*#__PURE__*/ (0,jsx_runtime.jsx)(Checkbox_Checkbox/* default */.A, {
                    checked: heightMatch,
                    onChange: (e)=>{
                        matchParentInfo.heightMatch = e.target.checked;
                    }
                }),
                label: t('content.MatchParentInfo.heightMatch')
            })
        ]
    });
}
// FloatConf UI
function FloatConfUI(param) {
    let { floatConf } = param;
    const { t } = (0,es/* useTranslation */.Bd)('droid-android/android/win/content');
    const [positionSaveName] = (0,watcher_useProxyWatch/* useProxyWatch */.x)(floatConf, 'positionSaveName', floatConf.positionSaveName || '');
    const [draggable] = (0,watcher_useProxyWatch/* useProxyWatch */.x)(floatConf, 'draggable', floatConf.draggable || false);
    const [defaultX] = (0,watcher_useProxyWatch/* useProxyWatch */.x)(floatConf, 'defaultX', floatConf.defaultX || 0);
    const [defaultY] = (0,watcher_useProxyWatch/* useProxyWatch */.x)(floatConf, 'defaultY', floatConf.defaultY || 0);
    const [resetX] = (0,watcher_useProxyWatch/* useProxyWatch */.x)(floatConf, 'resetX', floatConf.resetX || 0);
    const [resetY] = (0,watcher_useProxyWatch/* useProxyWatch */.x)(floatConf, 'resetY', floatConf.resetY || 0);
    const [tag] = (0,watcher_useProxyWatch/* useProxyWatch */.x)(floatConf, 'tag', floatConf.tag || '');
    const [sidePattern] = (0,watcher_useProxyWatch/* useProxyWatch */.x)(floatConf, 'sidePattern', floatConf.sidePattern);
    const [showPattern] = (0,watcher_useProxyWatch/* useProxyWatch */.x)(floatConf, 'showPattern', floatConf.showPattern);
    const [hasEditText] = (0,watcher_useProxyWatch/* useProxyWatch */.x)(floatConf, 'hasEditText', floatConf.hasEditText || false);
    const [gravity] = (0,watcher_useProxyWatch/* useProxyWatch */.x)(floatConf, 'gravity', floatConf.gravity);
    const [layoutChangedGravity] = (0,watcher_useProxyWatch/* useProxyWatch */.x)(floatConf, 'layoutChangedGravity', floatConf.layoutChangedGravity);
    const [border] = (0,watcher_useProxyWatch/* useProxyWatch */.x)(floatConf, 'border', floatConf.border);
    const [matchParent] = (0,watcher_useProxyWatch/* useProxyWatch */.x)(floatConf, 'matchParent', floatConf.matchParent);
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(Stack_Stack/* default */.A, {
        spacing: 2,
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(SectionTitle, {
                title: t('content.FloatConf.optional'),
                count: 14
            }),
            gravity && /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box_Box/* default */.A, {
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(OptionalLabel, {
                        label: t('content.FloatConf.gravity')
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(GravityInfoUI, {
                        gravityInfo: gravity
                    })
                ]
            }),
            border && /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box_Box/* default */.A, {
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(OptionalLabel, {
                        label: t('content.FloatConf.border')
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(BorderInfoUI, {
                        borderInfo: border
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(FormControlLabel_FormControlLabel/* default */.A, {
                control: /*#__PURE__*/ (0,jsx_runtime.jsx)(Checkbox_Checkbox/* default */.A, {
                    checked: draggable,
                    onChange: (e)=>{
                        floatConf.draggable = e.target.checked;
                    }
                }),
                label: /*#__PURE__*/ (0,jsx_runtime.jsx)(OptionalLabel, {
                    label: t('content.FloatConf.draggable')
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box_Box/* default */.A, {
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(OptionalLabel, {
                        label: t('content.FloatConf.defaultX')
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(TextField_TextField/* default */.A, {
                        type: "number",
                        value: defaultX,
                        onChange: (e)=>{
                            floatConf.defaultX = Number(e.target.value);
                        },
                        size: "small",
                        fullWidth: true
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box_Box/* default */.A, {
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(OptionalLabel, {
                        label: t('content.FloatConf.defaultY')
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(TextField_TextField/* default */.A, {
                        type: "number",
                        value: defaultY,
                        onChange: (e)=>{
                            floatConf.defaultY = Number(e.target.value);
                        },
                        size: "small",
                        fullWidth: true
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box_Box/* default */.A, {
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(OptionalLabel, {
                        label: t('content.FloatConf.resetX')
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(TextField_TextField/* default */.A, {
                        type: "number",
                        value: resetX,
                        onChange: (e)=>{
                            floatConf.resetX = Number(e.target.value);
                        },
                        size: "small",
                        fullWidth: true
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box_Box/* default */.A, {
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(OptionalLabel, {
                        label: t('content.FloatConf.resetY')
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(TextField_TextField/* default */.A, {
                        type: "number",
                        value: resetY,
                        onChange: (e)=>{
                            floatConf.resetY = Number(e.target.value);
                        },
                        size: "small",
                        fullWidth: true
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box_Box/* default */.A, {
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(OptionalLabel, {
                        label: t('content.FloatConf.tag')
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(TextField_TextField/* default */.A, {
                        value: tag,
                        onChange: (e)=>{
                            floatConf.tag = e.target.value;
                        },
                        size: "small",
                        fullWidth: true
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box_Box/* default */.A, {
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(OptionalLabel, {
                        label: t('content.FloatConf.sidePattern')
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Select_Select/* default */.A, {
                        value: sidePattern || WindowConf/* FloatSidePattern */.Ww.DEFAULT,
                        onChange: (e)=>{
                            floatConf.sidePattern = e.target.value;
                        },
                        size: "small",
                        fullWidth: true,
                        children: Object.values(WindowConf/* FloatSidePattern */.Ww).map((pattern)=>/*#__PURE__*/ (0,jsx_runtime.jsx)(MenuItem_MenuItem/* default */.A, {
                                value: pattern,
                                children: pattern
                            }, pattern))
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box_Box/* default */.A, {
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(OptionalLabel, {
                        label: t('content.FloatConf.showPattern')
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Select_Select/* default */.A, {
                        value: showPattern || WindowConf/* FloatShowPattern */.YC.ALL_TIME,
                        onChange: (e)=>{
                            floatConf.showPattern = e.target.value;
                        },
                        size: "small",
                        fullWidth: true,
                        children: Object.values(WindowConf/* FloatShowPattern */.YC).map((pattern)=>/*#__PURE__*/ (0,jsx_runtime.jsx)(MenuItem_MenuItem/* default */.A, {
                                value: pattern,
                                children: pattern
                            }, pattern))
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(FormControlLabel_FormControlLabel/* default */.A, {
                control: /*#__PURE__*/ (0,jsx_runtime.jsx)(Checkbox_Checkbox/* default */.A, {
                    checked: hasEditText,
                    onChange: (e)=>{
                        floatConf.hasEditText = e.target.checked;
                    }
                }),
                label: /*#__PURE__*/ (0,jsx_runtime.jsx)(OptionalLabel, {
                    label: t('content.FloatConf.hasEditText')
                })
            }),
            layoutChangedGravity && /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box_Box/* default */.A, {
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(OptionalLabel, {
                        label: t('content.FloatConf.layoutChangedGravity')
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Select_Select/* default */.A, {
                        value: layoutChangedGravity,
                        onChange: (e)=>{
                            floatConf.layoutChangedGravity = e.target.value;
                        },
                        size: "small",
                        fullWidth: true,
                        children: (0,WindowConf/* getGravityOptions */.n2)(t).map((option)=>/*#__PURE__*/ (0,jsx_runtime.jsx)(MenuItem_MenuItem/* default */.A, {
                                value: option.value,
                                children: option.label
                            }, option.value))
                    })
                ]
            }),
            matchParent && /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography_Typography/* default */.A, {
                        variant: "subtitle2",
                        children: t('content.FloatConf.matchParent')
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(MatchParentInfoUI, {
                        matchParentInfo: matchParent
                    })
                ]
            })
        ]
    });
}
// FloatWindowConf UI
function FloatWindowConfUI(param) {
    let { floatWindowConf, hideForegroundText } = param;
    const { t } = (0,es/* useTranslation */.Bd)('droid-android/android/win/content');
    const [foregroundText] = (0,watcher_useProxyWatch/* useProxyWatch */.x)(floatWindowConf, 'foregroundText', floatWindowConf.foregroundText || '');
    const [floatConf] = (0,watcher_useProxyWatch/* useProxyWatch */.x)(floatWindowConf, 'floatConf', floatWindowConf.floatConf);
    console.log('[FloatWindowConfUI] rendering, hideForegroundText:', hideForegroundText);
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(Stack_Stack/* default */.A, {
        spacing: 2,
        children: [
            !hideForegroundText && /*#__PURE__*/ (0,jsx_runtime.jsx)(TextField_TextField/* default */.A, {
                label: t('content.FloatWindowConf.foregroundText'),
                value: foregroundText,
                onChange: (e)=>{
                    console.log('[FloatWindowConfUI] foregroundText changed:', e.target.value);
                    floatWindowConf.foregroundText = e.target.value;
                },
                size: "small",
                helperText: t('content.FloatWindowConf.foregroundTextDescription')
            }),
            floatConf && /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography_Typography/* default */.A, {
                        variant: "subtitle2",
                        children: t('content.FloatConf.title')
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(FloatConfUI, {
                        floatConf: floatConf
                    })
                ]
            })
        ]
    });
}
// DialogWindowConf UI
function DialogWindowConfUI(param) {
    let { dialogWindowConf } = param;
    const { t } = useTranslation('droid-android/android/win/content');
    const [theme] = useProxyWatch(dialogWindowConf, 'theme', dialogWindowConf.theme || '');
    const [viewLayoutParams] = useProxyWatch(dialogWindowConf, 'viewLayoutParams', dialogWindowConf.viewLayoutParams || {});
    return /*#__PURE__*/ _jsxs(Stack, {
        spacing: 2,
        children: [
            /*#__PURE__*/ _jsx(TextField, {
                label: t('content.DialogWindowConf.theme'),
                value: theme,
                onChange: (e)=>{
                    dialogWindowConf.theme = e.target.value;
                },
                size: "small"
            }),
            /*#__PURE__*/ _jsx(TextField, {
                label: t('content.DialogWindowConf.viewLayoutParams'),
                value: JSON.stringify(viewLayoutParams),
                onChange: (e)=>{
                    try {
                        dialogWindowConf.viewLayoutParams = JSON.parse(e.target.value);
                    } catch  {
                    // 无效的 JSON，忽略
                    }
                },
                size: "small",
                multiline: true,
                rows: 3
            })
        ]
    });
}
// SysWindowConf UI
function SysWindowConfUI(param) {
    let { systemWindowConf } = param;
    const { t } = useTranslation('droid-android/android/win/content');
    const [listenBackKey] = useProxyWatch(systemWindowConf, 'listenBackKey', systemWindowConf.listenBackKey);
    const [viewLayoutParams] = useProxyWatch(systemWindowConf, 'viewLayoutParams', systemWindowConf.viewLayoutParams || {});
    return /*#__PURE__*/ _jsxs(Stack, {
        spacing: 2,
        children: [
            /*#__PURE__*/ _jsx(FormControlLabel, {
                control: /*#__PURE__*/ _jsx(Checkbox, {
                    checked: listenBackKey,
                    onChange: (e)=>{
                        systemWindowConf.listenBackKey = e.target.checked;
                    }
                }),
                label: t('content.SysWindowConf.listenBackKey')
            }),
            /*#__PURE__*/ _jsx(TextField, {
                label: t('content.SysWindowConf.viewLayoutParams'),
                value: JSON.stringify(viewLayoutParams),
                onChange: (e)=>{
                    try {
                        systemWindowConf.viewLayoutParams = JSON.parse(e.target.value);
                    } catch  {
                    // 无效的 JSON，忽略
                    }
                },
                size: "small",
                multiline: true,
                rows: 3
            })
        ]
    });
}
// Main WindowConf UI
function WindowConfUI(param) {
    let { windowConf, hideForegroundText } = param;
    console.log('[WindowConfUI] rendering, hideForegroundText:', hideForegroundText);
    const { t } = useTranslation('droid-android/android/win/content');
    const [windowType] = useProxyWatch(windowConf, 'windowType', windowConf.windowType);
    const [contentType] = useProxyWatch(windowConf, 'contentType', windowConf.contentType);
    const [htmlConf] = useProxyWatch(windowConf, 'htmlConf', windowConf.htmlConf);
    const [floatWindowConf] = useProxyWatch(windowConf, 'floatWindowConf', windowConf.floatWindowConf);
    const [windowId] = useProxyWatch(windowConf, 'windowId', windowConf.windowId);
    const [tag] = useProxyWatch(windowConf, 'tag', windowConf.tag);
    const [description] = useProxyWatch(windowConf, 'description', windowConf.description || '');
    const [forceDismissWindowTime] = useProxyWatch(windowConf, 'forceDismissWindowTime', windowConf.forceDismissWindowTime);
    useEffect(()=>{
        // 9n windowType bMn�a
        let savedFloatWindowConf = windowConf.floatWindowConf;
        windowConf.floatWindowConf = undefined;
        windowConf.floatWindowConf = savedFloatWindowConf || createDefaultFloatWindowConf();
    }, [
        windowType
    ]);
    return /*#__PURE__*/ _jsx(Box, {
        sx: {
            p: 2
        },
        children: /*#__PURE__*/ _jsxs(Stack, {
            spacing: 2,
            children: [
                /*#__PURE__*/ _jsx(Typography, {
                    variant: "h5",
                    sx: {
                        fontWeight: 'bold',
                        mb: 1
                    },
                    children: t('content.WindowConf.title')
                }),
                /*#__PURE__*/ _jsx(SectionTitle, {
                    title: t('content.WindowConf.required'),
                    count: 5
                }),
                /*#__PURE__*/ _jsxs(Box, {
                    children: [
                        /*#__PURE__*/ _jsx(RequiredLabel, {
                            label: t('content.WindowConf.windowType')
                        }),
                        /*#__PURE__*/ _jsx(Select, {
                            value: windowType,
                            onChange: (e)=>{
                                windowConf.windowType = e.target.value;
                            },
                            size: "small",
                            fullWidth: true,
                            children: /*#__PURE__*/ _jsx(MenuItem, {
                                value: WindowType.Float,
                                children: WindowType.Float
                            })
                        })
                    ]
                }),
                /*#__PURE__*/ _jsxs(Box, {
                    children: [
                        /*#__PURE__*/ _jsx(RequiredLabel, {
                            label: t('content.WindowConf.contentType')
                        }),
                        /*#__PURE__*/ _jsx(Select, {
                            value: contentType,
                            disabled: true,
                            size: "small",
                            fullWidth: true,
                            children: /*#__PURE__*/ _jsx(MenuItem, {
                                value: ContentType.Html,
                                children: ContentType.Html
                            })
                        })
                    ]
                }),
                /*#__PURE__*/ _jsxs(Box, {
                    children: [
                        tagOptional ? /*#__PURE__*/ _jsx(OptionalLabel, {
                            label: t('content.WindowConf.tag')
                        }) : /*#__PURE__*/ _jsx(RequiredLabel, {
                            label: t('content.WindowConf.tag')
                        }),
                        /*#__PURE__*/ _jsx(TextField, {
                            value: tag,
                            onChange: (e)=>{
                                console.log('[WindowConfUI] tag changed:', e.target.value);
                                windowConf.tag = e.target.value;
                            },
                            size: "small",
                            fullWidth: true
                        })
                    ]
                }),
                /*#__PURE__*/ _jsxs(Box, {
                    children: [
                        /*#__PURE__*/ _jsx(OptionalLabel, {
                            label: t('content.WindowConf.description')
                        }),
                        /*#__PURE__*/ _jsx(TextField, {
                            value: description,
                            onChange: (e)=>{
                                windowConf.description = e.target.value;
                            },
                            size: "small",
                            fullWidth: true,
                            multiline: true,
                            rows: 2
                        })
                    ]
                }),
                /*#__PURE__*/ _jsxs(Box, {
                    children: [
                        /*#__PURE__*/ _jsx(RequiredLabel, {
                            label: t('content.WindowConf.windowId')
                        }),
                        /*#__PURE__*/ _jsx(TextField, {
                            value: windowId,
                            disabled: true,
                            size: "small",
                            fullWidth: true
                        })
                    ]
                }),
                /*#__PURE__*/ _jsxs(Box, {
                    children: [
                        /*#__PURE__*/ _jsx(RequiredLabel, {
                            label: t('content.WindowConf.forceDismissWindowTime')
                        }),
                        /*#__PURE__*/ _jsx(TextField, {
                            type: "number",
                            value: forceDismissWindowTime,
                            onChange: (e)=>{
                                windowConf.forceDismissWindowTime = Number(e.target.value);
                            },
                            size: "small",
                            fullWidth: true
                        })
                    ]
                }),
                /*#__PURE__*/ _jsx(SectionTitle, {
                    title: t('content.WindowConf.optional'),
                    count: 3
                }),
                htmlConf && /*#__PURE__*/ _jsxs(Box, {
                    children: [
                        /*#__PURE__*/ _jsx(Typography, {
                            variant: "subtitle2",
                            sx: {
                                fontWeight: 'bold',
                                color: 'primary.main'
                            },
                            children: t('content.HtmlConf.title')
                        }),
                        /*#__PURE__*/ _jsx(HtmlConfUI, {
                            htmlConf: htmlConf
                        })
                    ]
                }),
                floatWindowConf && /*#__PURE__*/ _jsxs(Box, {
                    children: [
                        /*#__PURE__*/ _jsx(Typography, {
                            variant: "subtitle2",
                            sx: {
                                fontWeight: 'bold',
                                color: 'primary.main'
                            },
                            children: t('content.FloatWindowConf.title')
                        }),
                        /*#__PURE__*/ _jsx(FloatWindowConfUI, {
                            floatWindowConf: floatWindowConf,
                            hideForegroundText: hideForegroundText
                        })
                    ]
                })
            ]
        })
    });
}
function TestWindowConfUI2() {
    const [conf] = useState(toProxy(createDefaultWindowConf()));
    return /*#__PURE__*/ _jsx(_Fragment, {
        children: /*#__PURE__*/ _jsx(WindowConfUI, {
            windowConf: conf
        })
    });
}
// ============ 导出辅助组件 ============
// 这些组件被 Wizard 和 Editor 组件使用



;// ./src/components/android-float/window/BasicInfoSection.tsx




/**
 * BasicInfoSection - 基本信息编辑区域
 *
 * 编辑字段：
 * - windowType: 窗口类型
 * - tag: 窗口标识
 * - description: 窗口说明
 * - windowId: 窗口 ID (只读)
 */ function BasicInfoSection(param) {
    let { windowConf, hideTag = false } = param;
    const { t } = (0,es/* useTranslation */.Bd)('homepage/components/android-float/window/content');
    const [windowType] = (0,watcher_useProxyWatch/* useProxyWatch */.x)(windowConf, 'windowType', windowConf.windowType);
    const [tag] = (0,watcher_useProxyWatch/* useProxyWatch */.x)(windowConf, 'tag', windowConf.tag);
    const [description] = (0,watcher_useProxyWatch/* useProxyWatch */.x)(windowConf, 'description', windowConf.description || '');
    const [windowId] = (0,watcher_useProxyWatch/* useProxyWatch */.x)(windowConf, 'windowId', windowConf.windowId);
    console.log('BasicInfoSection: render windowType:', windowType, 'tag:', tag, 'hideTag:', hideTag);
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(Stack_Stack/* default */.A, {
        spacing: 2,
        children: [
            !hideTag && /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box_Box/* default */.A, {
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(RequiredLabel, {
                        label: t('BasicInfoSection.windowTag')
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(TextField_TextField/* default */.A, {
                        value: tag,
                        onChange: (e)=>{
                            console.log('BasicInfoSection: tag changed to', e.target.value);
                            windowConf.tag = e.target.value;
                        },
                        size: "small",
                        fullWidth: true
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box_Box/* default */.A, {
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(OptionalLabel, {
                        label: t('BasicInfoSection.windowDescription')
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(TextField_TextField/* default */.A, {
                        value: description,
                        onChange: (e)=>{
                            console.log('BasicInfoSection: description changed to', e.target.value);
                            windowConf.description = e.target.value;
                        },
                        size: "small",
                        fullWidth: true,
                        multiline: true,
                        rows: 2
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box_Box/* default */.A, {
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography_Typography/* default */.A, {
                        variant: "body2",
                        sx: {
                            fontWeight: 'bold',
                            mb: 0.5
                        },
                        children: t('BasicInfoSection.windowIdLabel')
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(TextField_TextField/* default */.A, {
                        value: windowId,
                        disabled: true,
                        size: "small",
                        fullWidth: true
                    })
                ]
            })
        ]
    });
}

;// ./src/components/android-float/window/HtmlConfSection.tsx


/**
 * HtmlConfSection - HTML 内容编辑区域
 *
 * 编辑字段：
 * - url: 内容 URL
 * - html: 内嵌 HTML 代码
 * - jsBridgeName: 注入的 JS Bridge 名称
 * - webViewJsName: WebView JS 类型
 * - javaRunnerId: Java Runner ID
 * - webViewJsParams: WebView JS 参数
 * - webViewConf: WebView 配置
 */ function HtmlConfSection(param) {
    let { htmlConf } = param;
    if (!htmlConf) {
        return null;
    }
    console.log('HtmlConfSection: render htmlConf:', htmlConf);
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(HtmlConfUI_HtmlConfUI, {
        htmlConf: htmlConf
    });
}

;// ./src/components/android-float/window/AdvancedSection.tsx




/**
 * AdvancedSection - 高级选项编辑区域
 *
 * 编辑字段：
 * - forceDismissWindowTime: 强制关闭时间
 */ function AdvancedSection(param) {
    let { windowConf } = param;
    const { t } = (0,es/* useTranslation */.Bd)('homepage/components/android-float/window/content');
    const [forceDismissWindowTime] = (0,watcher_useProxyWatch/* useProxyWatch */.x)(windowConf, 'forceDismissWindowTime', windowConf.forceDismissWindowTime);
    console.log('AdvancedSection: render forceDismissWindowTime:', forceDismissWindowTime);
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(Stack_Stack/* default */.A, {
        spacing: 2,
        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box_Box/* default */.A, {
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsx)(OptionalLabel, {
                    label: t('AdvancedSection.forceDismissWindowTimeLabel')
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)(TextField_TextField/* default */.A, {
                    type: "number",
                    value: forceDismissWindowTime,
                    onChange: (e)=>{
                        console.log('AdvancedSection: forceDismissWindowTime changed to', e.target.value);
                        windowConf.forceDismissWindowTime = Number(e.target.value);
                    },
                    size: "small",
                    fullWidth: true,
                    inputProps: {
                        min: 0,
                        step: 1000
                    },
                    helperText: t('AdvancedSection.forceDismissWindowTimeHelper')
                })
            ]
        })
    });
}

;// ./src/components/android-float/window/WindowConfEditor.tsx












/**
 * WindowConfEditor - Accordion 式编辑窗口配置
 *
 * 功能：
 * - 快速定位和编辑字段
 * - 根据 windowType 动态显示配置
 * - 必填项标记
 */ function WindowConfEditor(param) {
    let { windowConf: conf, isCreateMode = false, hideForegroundText = false, hideTag = false, onConfirm, onCancel } = param;
    const router = (0,next_router.useRouter)();
    const { t } = (0,es/* useTranslation */.Bd)('homepage/components/android-float/window/content');
    const [windowConf] = (0,react.useState)((0,proxyWatch/* toProxy */.I$)(conf));
    const [expanded, setExpanded] = (0,react.useState)('basic');
    const [windowType] = (0,watcher_useProxyWatch/* useProxyWatch */.x)(windowConf, 'windowType', windowConf.windowType);
    const [tag] = (0,watcher_useProxyWatch/* useProxyWatch */.x)(windowConf, 'tag', windowConf.tag);
    const [windowId] = (0,watcher_useProxyWatch/* useProxyWatch */.x)(windowConf, 'windowId', windowConf.windowId);
    console.log('WindowConfEditor: render windowType:', windowType, 'hideForegroundText:', hideForegroundText, 'hideTag:', hideTag);
    /**
   * 监听 windowType 变化，自动初始化对应的配置对象
   */ (0,react.useEffect)(()=>{
        console.log('WindowConfEditor: useEffect - windowType changed to:', windowType);
        if (windowType === WindowConf/* WindowType */.ZI.Float) {
            if (!windowConf.floatWindowConf) {
                console.log('WindowConfEditor: creating default FloatWindowConf');
                windowConf.floatWindowConf = (0,WindowConf/* createDefaultFloatWindowConf */.Wl)();
            }
        }
    }, [
        windowType,
        windowConf
    ]);
    const editComfirmed = ()=>{
        console.log('WindowConfEditor: editComfirmed, isCreateMode:', isCreateMode);
        if (isCreateMode) {
            // 创建模式: 首次添加到列表
            console.log('WindowConfEditor: creating new window config:', windowConf.tag);
            data/* androidFloatWindowData */.Kl.data.windowData.windowList.push(windowConf);
        } else {
            // 编辑模式: 更新列表中的配置
            const index = data/* androidFloatWindowData */.Kl.data.windowData.windowList.findIndex((w)=>w.windowId === windowConf.windowId);
            if (index == -1) {
                console.error('WindowConfEditor: editComfirmed - window config not found for windowId:', windowConf.windowId);
                return;
            }
            data/* androidFloatWindowData */.Kl.data.windowData.windowList[index] = windowConf;
            console.log('WindowConfEditor: window config updated at index:', index);
        }
    };
    const handleConfirm = ()=>{
        console.log('WindowConfEditor: handleConfirm - confirming changes');
        if (onConfirm) {
            console.log('WindowConfEditor: using custom onConfirm callback');
            onConfirm(windowConf);
        } else {
            console.log('WindowConfEditor: using default confirm behavior');
            editComfirmed();
            router.back();
        }
    };
    const handleCancelClick = ()=>{
        console.log('WindowConfEditor: handleCancelClick, isCreateMode:', isCreateMode);
        if (onCancel) {
            console.log('WindowConfEditor: using custom onCancel callback');
            onCancel();
        } else {
            console.log('WindowConfEditor: using default cancel behavior');
            if (isCreateMode) {
                console.log('WindowConfEditor: discarding new config (not saved)');
            } else {
                console.log('WindowConfEditor: discarding changes to existing config');
            }
            router.back();
        }
    };
    /**
   * 处理 Accordion 展开/折叠
   */ const handleAccordionChange = (panelId)=>(event, isExpanded)=>{
            console.log('WindowConfEditor: Accordion', panelId, 'toggled, isExpanded:', isExpanded);
            setExpanded(isExpanded ? panelId : false);
        };
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box_Box/* default */.A, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box_Box/* default */.A, {
                sx: {
                    mb: 3,
                    pb: 2,
                    borderBottom: '1px solid',
                    borderColor: 'divider'
                },
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography_Typography/* default */.A, {
                        variant: "h6",
                        sx: {
                            fontWeight: 'bold'
                        },
                        children: tag
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography_Typography/* default */.A, {
                        variant: "body2",
                        color: "text.secondary",
                        children: t('WindowConfEditor.header.typeAndId', {
                            type: windowType,
                            id: windowId.substring(0, 8)
                        })
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)(Accordion/* default */.A, {
                expanded: expanded === 'basic',
                onChange: handleAccordionChange('basic'),
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)(AccordionSummary/* default */.A, {
                        expandIcon: /*#__PURE__*/ (0,jsx_runtime.jsx)(ExpandMore/* default */.A, {}),
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(Chip/* default */.A, {
                                label: t('WindowConfEditor.sections.required'),
                                size: "small",
                                sx: {
                                    mr: 1
                                },
                                color: "error",
                                variant: "outlined"
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography_Typography/* default */.A, {
                                children: t('WindowConfEditor.sections.basicInfo')
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(AccordionDetails/* default */.A, {
                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(BasicInfoSection, {
                            windowConf: windowConf,
                            hideTag: hideTag
                        })
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)(Accordion/* default */.A, {
                expanded: expanded === 'html',
                onChange: handleAccordionChange('html'),
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)(AccordionSummary/* default */.A, {
                        expandIcon: /*#__PURE__*/ (0,jsx_runtime.jsx)(ExpandMore/* default */.A, {}),
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(Chip/* default */.A, {
                                label: t('WindowConfEditor.sections.required'),
                                size: "small",
                                sx: {
                                    mr: 1
                                },
                                color: "error",
                                variant: "outlined"
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography_Typography/* default */.A, {
                                children: t('WindowConfEditor.sections.htmlContent')
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(AccordionDetails/* default */.A, {
                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(HtmlConfSection, {
                            htmlConf: windowConf.htmlConf
                        })
                    })
                ]
            }),
            windowType === WindowConf/* WindowType */.ZI.Float && windowConf.floatWindowConf && /*#__PURE__*/ (0,jsx_runtime.jsxs)(Accordion/* default */.A, {
                expanded: expanded === 'float',
                onChange: handleAccordionChange('float'),
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(AccordionSummary/* default */.A, {
                        expandIcon: /*#__PURE__*/ (0,jsx_runtime.jsx)(ExpandMore/* default */.A, {}),
                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography_Typography/* default */.A, {
                            children: t('WindowConfEditor.sections.floatConfig')
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(AccordionDetails/* default */.A, {
                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(FloatWindowConfUI, {
                            floatWindowConf: windowConf.floatWindowConf,
                            hideForegroundText: hideForegroundText
                        })
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)(Accordion/* default */.A, {
                expanded: expanded === 'advanced',
                onChange: handleAccordionChange('advanced'),
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(AccordionSummary/* default */.A, {
                        expandIcon: /*#__PURE__*/ (0,jsx_runtime.jsx)(ExpandMore/* default */.A, {}),
                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography_Typography/* default */.A, {
                            children: t('WindowConfEditor.sections.advanced')
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(AccordionDetails/* default */.A, {
                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(AdvancedSection, {
                            windowConf: windowConf
                        })
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)(Stack_Stack/* default */.A, {
                direction: "row",
                spacing: 2,
                sx: {
                    mt: 4,
                    justifyContent: 'flex-end'
                },
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Button/* default */.A, {
                        variant: "outlined",
                        onClick: handleCancelClick,
                        children: t('WindowConfEditor.actions.cancel')
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Button/* default */.A, {
                        variant: "contained",
                        color: "primary",
                        onClick: handleConfirm,
                        children: t('WindowConfEditor.actions.save')
                    })
                ]
            })
        ]
    });
}


/***/ }),

/***/ 81482:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ Alert_Alert)
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/react@19.1.0/node_modules/react/index.js
var react = __webpack_require__(94285);
// EXTERNAL MODULE: ../../node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs
var clsx = __webpack_require__(3638);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+utils@6.4.9_@types+react@19.1.8_react@19.1.0/node_modules/@mui/utils/esm/composeClasses/composeClasses.js
var composeClasses = __webpack_require__(95116);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+system@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled@1_sfs2vjcbuqchwdpqpmkla22opm/node_modules/@mui/system/esm/colorManipulator/colorManipulator.js + 1 modules
var colorManipulator = __webpack_require__(21567);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/styles/styled.js
var styled = __webpack_require__(64624);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/utils/memoTheme.js + 1 modules
var memoTheme = __webpack_require__(10355);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/DefaultPropsProvider/DefaultPropsProvider.js
var DefaultPropsProvider = __webpack_require__(79209);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/utils/useSlot.js
var useSlot = __webpack_require__(98005);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/utils/capitalize.js
var capitalize = __webpack_require__(99512);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/utils/createSimplePaletteValueFilter.js
var createSimplePaletteValueFilter = __webpack_require__(36118);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/Paper/Paper.js + 1 modules
var Paper = __webpack_require__(59864);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+utils@6.4.9_@types+react@19.1.8_react@19.1.0/node_modules/@mui/utils/esm/generateUtilityClasses/generateUtilityClasses.js
var generateUtilityClasses = __webpack_require__(92186);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+utils@6.4.9_@types+react@19.1.8_react@19.1.0/node_modules/@mui/utils/esm/generateUtilityClass/generateUtilityClass.js
var generateUtilityClass = __webpack_require__(69014);
;// ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/Alert/alertClasses.js


function getAlertUtilityClass(slot) {
    return (0,generateUtilityClass/* default */.Ay)('MuiAlert', slot);
}
const alertClasses = (0,generateUtilityClasses/* default */.A)('MuiAlert', [
    'root',
    'action',
    'icon',
    'message',
    'filled',
    'colorSuccess',
    'colorInfo',
    'colorWarning',
    'colorError',
    'filledSuccess',
    'filledInfo',
    'filledWarning',
    'filledError',
    'outlined',
    'outlinedSuccess',
    'outlinedInfo',
    'outlinedWarning',
    'outlinedError',
    'standard',
    'standardSuccess',
    'standardInfo',
    'standardWarning',
    'standardError'
]);
/* harmony default export */ const Alert_alertClasses = (alertClasses);

// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/IconButton/IconButton.js + 1 modules
var IconButton = __webpack_require__(65494);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/utils/createSvgIcon.js + 2 modules
var createSvgIcon = __webpack_require__(61541);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react@19.1.0/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(94513);
;// ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/internal/svg-icons/SuccessOutlined.js
/* __next_internal_client_entry_do_not_use__ default auto */ 

/**
 * @ignore - internal component.
 */ 
/* harmony default export */ const SuccessOutlined = ((0,createSvgIcon/* default */.A)(/*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
    d: "M20,12A8,8 0 0,1 12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4C12.76,4 13.5,4.11 14.2, 4.31L15.77,2.74C14.61,2.26 13.34,2 12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0, 0 22,12M7.91,10.08L6.5,11.5L11,16L21,6L19.59,4.58L11,13.17L7.91,10.08Z"
}), 'SuccessOutlined'));

;// ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/internal/svg-icons/ReportProblemOutlined.js
/* __next_internal_client_entry_do_not_use__ default auto */ 

/**
 * @ignore - internal component.
 */ 
/* harmony default export */ const ReportProblemOutlined = ((0,createSvgIcon/* default */.A)(/*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
    d: "M12 5.99L19.53 19H4.47L12 5.99M12 2L1 21h22L12 2zm1 14h-2v2h2v-2zm0-6h-2v4h2v-4z"
}), 'ReportProblemOutlined'));

;// ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/internal/svg-icons/ErrorOutline.js
/* __next_internal_client_entry_do_not_use__ default auto */ 

/**
 * @ignore - internal component.
 */ 
/* harmony default export */ const ErrorOutline = ((0,createSvgIcon/* default */.A)(/*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
    d: "M11 15h2v2h-2zm0-8h2v6h-2zm.99-5C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"
}), 'ErrorOutline'));

;// ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/internal/svg-icons/InfoOutlined.js
/* __next_internal_client_entry_do_not_use__ default auto */ 

/**
 * @ignore - internal component.
 */ 
/* harmony default export */ const InfoOutlined = ((0,createSvgIcon/* default */.A)(/*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
    d: "M11,9H13V7H11M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20, 12C20,16.41 16.41,20 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10, 10 0 0,0 12,2M11,17H13V11H11V17Z"
}), 'InfoOutlined'));

;// ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/internal/svg-icons/Close.js
/* __next_internal_client_entry_do_not_use__ default auto */ 

/**
 * @ignore - internal component.
 *
 * Alias to `Clear`.
 */ 
/* harmony default export */ const Close = ((0,createSvgIcon/* default */.A)(/*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
    d: "M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"
}), 'Close'));

;// ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/Alert/Alert.js
/* __next_internal_client_entry_do_not_use__ default auto */ 



















const useUtilityClasses = (ownerState)=>{
    const { variant, color, severity, classes } = ownerState;
    const slots = {
        root: [
            'root',
            "color".concat((0,capitalize/* default */.A)(color || severity)),
            "".concat(variant).concat((0,capitalize/* default */.A)(color || severity)),
            "".concat(variant)
        ],
        icon: [
            'icon'
        ],
        message: [
            'message'
        ],
        action: [
            'action'
        ]
    };
    return (0,composeClasses/* default */.A)(slots, getAlertUtilityClass, classes);
};
const AlertRoot = (0,styled/* default */.Ay)(Paper/* default */.A, {
    name: 'MuiAlert',
    slot: 'Root',
    overridesResolver: (props, styles)=>{
        const { ownerState } = props;
        return [
            styles.root,
            styles[ownerState.variant],
            styles["".concat(ownerState.variant).concat((0,capitalize/* default */.A)(ownerState.color || ownerState.severity))]
        ];
    }
})((0,memoTheme/* default */.A)((param)=>{
    let { theme } = param;
    const getColor = theme.palette.mode === 'light' ? colorManipulator/* darken */.e$ : colorManipulator/* lighten */.a;
    const getBackgroundColor = theme.palette.mode === 'light' ? colorManipulator/* lighten */.a : colorManipulator/* darken */.e$;
    return {
        ...theme.typography.body2,
        backgroundColor: 'transparent',
        display: 'flex',
        padding: '6px 16px',
        variants: [
            ...Object.entries(theme.palette).filter((0,createSimplePaletteValueFilter/* default */.A)([
                'light'
            ])).map((param)=>{
                let [color] = param;
                return {
                    props: {
                        colorSeverity: color,
                        variant: 'standard'
                    },
                    style: {
                        color: theme.vars ? theme.vars.palette.Alert["".concat(color, "Color")] : getColor(theme.palette[color].light, 0.6),
                        backgroundColor: theme.vars ? theme.vars.palette.Alert["".concat(color, "StandardBg")] : getBackgroundColor(theme.palette[color].light, 0.9),
                        ["& .".concat(Alert_alertClasses.icon)]: theme.vars ? {
                            color: theme.vars.palette.Alert["".concat(color, "IconColor")]
                        } : {
                            color: theme.palette[color].main
                        }
                    }
                };
            }),
            ...Object.entries(theme.palette).filter((0,createSimplePaletteValueFilter/* default */.A)([
                'light'
            ])).map((param)=>{
                let [color] = param;
                return {
                    props: {
                        colorSeverity: color,
                        variant: 'outlined'
                    },
                    style: {
                        color: theme.vars ? theme.vars.palette.Alert["".concat(color, "Color")] : getColor(theme.palette[color].light, 0.6),
                        border: "1px solid ".concat((theme.vars || theme).palette[color].light),
                        ["& .".concat(Alert_alertClasses.icon)]: theme.vars ? {
                            color: theme.vars.palette.Alert["".concat(color, "IconColor")]
                        } : {
                            color: theme.palette[color].main
                        }
                    }
                };
            }),
            ...Object.entries(theme.palette).filter((0,createSimplePaletteValueFilter/* default */.A)([
                'dark'
            ])).map((param)=>{
                let [color] = param;
                return {
                    props: {
                        colorSeverity: color,
                        variant: 'filled'
                    },
                    style: {
                        fontWeight: theme.typography.fontWeightMedium,
                        ...theme.vars ? {
                            color: theme.vars.palette.Alert["".concat(color, "FilledColor")],
                            backgroundColor: theme.vars.palette.Alert["".concat(color, "FilledBg")]
                        } : {
                            backgroundColor: theme.palette.mode === 'dark' ? theme.palette[color].dark : theme.palette[color].main,
                            color: theme.palette.getContrastText(theme.palette[color].main)
                        }
                    }
                };
            })
        ]
    };
}));
const AlertIcon = (0,styled/* default */.Ay)('div', {
    name: 'MuiAlert',
    slot: 'Icon',
    overridesResolver: (props, styles)=>styles.icon
})({
    marginRight: 12,
    padding: '7px 0',
    display: 'flex',
    fontSize: 22,
    opacity: 0.9
});
const AlertMessage = (0,styled/* default */.Ay)('div', {
    name: 'MuiAlert',
    slot: 'Message',
    overridesResolver: (props, styles)=>styles.message
})({
    padding: '8px 0',
    minWidth: 0,
    overflow: 'auto'
});
const AlertAction = (0,styled/* default */.Ay)('div', {
    name: 'MuiAlert',
    slot: 'Action',
    overridesResolver: (props, styles)=>styles.action
})({
    display: 'flex',
    alignItems: 'flex-start',
    padding: '4px 0 0 16px',
    marginLeft: 'auto',
    marginRight: -8
});
const defaultIconMapping = {
    success: /*#__PURE__*/ (0,jsx_runtime.jsx)(SuccessOutlined, {
        fontSize: "inherit"
    }),
    warning: /*#__PURE__*/ (0,jsx_runtime.jsx)(ReportProblemOutlined, {
        fontSize: "inherit"
    }),
    error: /*#__PURE__*/ (0,jsx_runtime.jsx)(ErrorOutline, {
        fontSize: "inherit"
    }),
    info: /*#__PURE__*/ (0,jsx_runtime.jsx)(InfoOutlined, {
        fontSize: "inherit"
    })
};
const Alert = /*#__PURE__*/ react.forwardRef(function Alert(inProps, ref) {
    const props = (0,DefaultPropsProvider/* useDefaultProps */.b)({
        props: inProps,
        name: 'MuiAlert'
    });
    const { action, children, className, closeText = 'Close', color, components = {}, componentsProps = {}, icon, iconMapping = defaultIconMapping, onClose, role = 'alert', severity = 'success', slotProps = {}, slots = {}, variant = 'standard', ...other } = props;
    const ownerState = {
        ...props,
        color,
        severity,
        variant,
        colorSeverity: color || severity
    };
    const classes = useUtilityClasses(ownerState);
    const externalForwardedProps = {
        slots: {
            closeButton: components.CloseButton,
            closeIcon: components.CloseIcon,
            ...slots
        },
        slotProps: {
            ...componentsProps,
            ...slotProps
        }
    };
    const [RootSlot, rootSlotProps] = (0,useSlot/* default */.A)('root', {
        ref,
        shouldForwardComponentProp: true,
        className: (0,clsx/* default */.A)(classes.root, className),
        elementType: AlertRoot,
        externalForwardedProps: {
            ...externalForwardedProps,
            ...other
        },
        ownerState,
        additionalProps: {
            role,
            elevation: 0
        }
    });
    const [IconSlot, iconSlotProps] = (0,useSlot/* default */.A)('icon', {
        className: classes.icon,
        elementType: AlertIcon,
        externalForwardedProps,
        ownerState
    });
    const [MessageSlot, messageSlotProps] = (0,useSlot/* default */.A)('message', {
        className: classes.message,
        elementType: AlertMessage,
        externalForwardedProps,
        ownerState
    });
    const [ActionSlot, actionSlotProps] = (0,useSlot/* default */.A)('action', {
        className: classes.action,
        elementType: AlertAction,
        externalForwardedProps,
        ownerState
    });
    const [CloseButtonSlot, closeButtonProps] = (0,useSlot/* default */.A)('closeButton', {
        elementType: IconButton/* default */.A,
        externalForwardedProps,
        ownerState
    });
    const [CloseIconSlot, closeIconProps] = (0,useSlot/* default */.A)('closeIcon', {
        elementType: Close,
        externalForwardedProps,
        ownerState
    });
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(RootSlot, {
        ...rootSlotProps,
        children: [
            icon !== false ? /*#__PURE__*/ (0,jsx_runtime.jsx)(IconSlot, {
                ...iconSlotProps,
                children: icon || iconMapping[severity] || defaultIconMapping[severity]
            }) : null,
            /*#__PURE__*/ (0,jsx_runtime.jsx)(MessageSlot, {
                ...messageSlotProps,
                children: children
            }),
            action != null ? /*#__PURE__*/ (0,jsx_runtime.jsx)(ActionSlot, {
                ...actionSlotProps,
                children: action
            }) : null,
            action == null && onClose ? /*#__PURE__*/ (0,jsx_runtime.jsx)(ActionSlot, {
                ...actionSlotProps,
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(CloseButtonSlot, {
                    size: "small",
                    "aria-label": closeText,
                    title: closeText,
                    color: "inherit",
                    onClick: onClose,
                    ...closeButtonProps,
                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(CloseIconSlot, {
                        fontSize: "small",
                        ...closeIconProps
                    })
                })
            }) : null
        ]
    });
});
 false ? 0 : void 0;
/* harmony default export */ const Alert_Alert = (Alert);


/***/ })

}]);
//# sourceMappingURL=564-384577ce117824a2.js.map