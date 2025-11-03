(self["webpackChunk_N_E"] = self["webpackChunk_N_E"] || []).push([[7769],{

/***/ 66908:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {


    (window.__NEXT_P = window.__NEXT_P || []).push([
      "/float-window-add",
      function () {
        return __webpack_require__(85019);
      }
    ]);
    if(false) {}
  

/***/ }),

/***/ 85019:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ AndroidFloatWindow)
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/react@19.1.0/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(94513);
// EXTERNAL MODULE: ../../libs/app/ui/src/components/app/AppShell.tsx + 2 modules
var AppShell = __webpack_require__(20939);
// EXTERNAL MODULE: ../../libs/app/ui/src/components/appbar/AppBar.tsx + 3 modules
var AppBar = __webpack_require__(97972);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react-i18next@15.6.0_i18next@24.2.3_typescript@5.7.3__react-dom@19.1.0_react@19.1.0__react@19.1.0_typescript@5.7.3/node_modules/react-i18next/dist/es/index.js + 15 modules
var es = __webpack_require__(50279);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react@19.1.0/node_modules/react/index.js
var react = __webpack_require__(94285);
// EXTERNAL MODULE: ../../node_modules/.pnpm/next@15.3.5_@babel+core@7.28.0_babel-plugin-macros@3.1.0_react-dom@19.1.0_react@19.1.0__react@19.1.0_sass@1.89.2/node_modules/next/router.js
var next_router = __webpack_require__(75640);
// EXTERNAL MODULE: ./src/components/android-float/window/data.ts
var data = __webpack_require__(70011);
// EXTERNAL MODULE: ../../libs/droid/android/src/android/win/WindowConf.ts
var WindowConf = __webpack_require__(39800);
// EXTERNAL MODULE: ../../libs/fanfanlo/src/watcher/proxyWatch.ts
var proxyWatch = __webpack_require__(88518);
// EXTERNAL MODULE: ../../libs/fanfanlo/src/watcher/useProxyWatch.ts
var useProxyWatch = __webpack_require__(45007);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/Box/Box.js + 2 modules
var Box = __webpack_require__(6445);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/Stepper/Stepper.js + 3 modules
var Stepper = __webpack_require__(38359);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/Step/Step.js + 1 modules
var Step = __webpack_require__(44135);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/StepLabel/StepLabel.js + 5 modules
var StepLabel = __webpack_require__(10788);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/Alert/Alert.js + 6 modules
var Alert = __webpack_require__(81482);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/Button/Button.js + 3 modules
var Button = __webpack_require__(28669);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/Stack/Stack.js + 1 modules
var Stack = __webpack_require__(9220);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/Typography/Typography.js
var Typography = __webpack_require__(67079);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/TextField/TextField.js + 1 modules
var TextField = __webpack_require__(38771);
// EXTERNAL MODULE: ./src/components/android-float/window/WindowConfUI.tsx
var WindowConfUI = __webpack_require__(50079);
;// ./src/components/android-float/window/Step1BasicInfo.tsx




/**
 * Step 1: 基本信息
 *
 * 用户输入：
 * - tag: 窗口标识 (必填)
 * - description: 窗口说明 (可选)
 */ function Step1BasicInfo(param) {
    let { conf } = param;
    const { t } = (0,es/* useTranslation */.Bd)('homepage/components/android-float/window/content');
    const [tag] = (0,useProxyWatch/* useProxyWatch */.x)(conf, 'tag', conf.tag);
    const [description] = (0,useProxyWatch/* useProxyWatch */.x)(conf, 'description', conf.description || '');
    console.log('Step1BasicInfo: render tag:', tag);
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(Stack/* default */.A, {
        spacing: 3,
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.A, {
                variant: "h6",
                children: t('Step1BasicInfo.title')
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Alert/* default */.A, {
                severity: "info",
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.A, {
                    variant: "body2",
                    children: t('Step1BasicInfo.description')
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.A, {
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(WindowConfUI/* RequiredLabel */.g2, {
                        label: t('Step1BasicInfo.tagLabel'),
                        description: t('Step1BasicInfo.tagDesc')
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(TextField/* default */.A, {
                        value: tag,
                        onChange: (e)=>{
                            console.log('Step1BasicInfo: tag changed to', e.target.value);
                            conf.tag = e.target.value;
                        },
                        placeholder: t('Step1BasicInfo.tagPlaceholder'),
                        size: "small",
                        fullWidth: true,
                        helperText: t('Step1BasicInfo.tagHelper')
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.A, {
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(WindowConfUI/* OptionalLabel */.zh, {
                        label: t('Step1BasicInfo.descriptionLabel'),
                        description: t('Step1BasicInfo.descriptionDesc')
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(TextField/* default */.A, {
                        value: description,
                        onChange: (e)=>{
                            console.log('Step1BasicInfo: description changed to', e.target.value);
                            conf.description = e.target.value;
                        },
                        placeholder: t('Step1BasicInfo.descriptionPlaceholder'),
                        size: "small",
                        fullWidth: true,
                        multiline: true,
                        rows: 3
                    })
                ]
            })
        ]
    });
}

// EXTERNAL MODULE: ./src/components/android-float/window/HtmlConfUI.tsx
var HtmlConfUI = __webpack_require__(81780);
;// ./src/components/android-float/window/Step2HtmlConf.tsx




/**
 * Step 2: HTML 内容配置
 *
 * 用户配置：
 * - htmlConf.url: 内容 URL (可选，但与 html 二选一)
 * - htmlConf.html: 内嵌 HTML 代码 (可选，但与 url 二选一)
 * - htmlConf.jsBridgeName: 注入的 JS Bridge 名称
 * - htmlConf.webViewJsName: WebView JS 类型
 * - htmlConf.javaRunnerId: Java Runner ID
 * - htmlConf.webViewJsParams: WebView JS 参数
 * - htmlConf.webViewConf: WebView 配置
 */ function Step2HtmlConf(param) {
    let { conf } = param;
    const [htmlConf] = (0,useProxyWatch/* useProxyWatch */.x)(conf, 'htmlConf', conf.htmlConf);
    const { t } = (0,es/* useTranslation */.Bd)('homepage/components/android-float/window/content');
    console.log('Step2HtmlConf: render htmlConf:', htmlConf);
    if (!htmlConf) {
        return null;
    }
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(Stack/* default */.A, {
        spacing: 3,
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.A, {
                variant: "h6",
                children: t('Step2HtmlConf.title')
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Alert/* default */.A, {
                severity: "info",
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.A, {
                    variant: "body2",
                    children: t('Step2HtmlConf.description')
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(HtmlConfUI/* HtmlConfUI */.A, {
                htmlConf: htmlConf
            })
        ]
    });
}

;// ./src/components/android-float/window/Step3WindowType.tsx





/**
 * Step 3: 窗口特定配置
 *
 * 根据 windowType 显示对应的配置组件：
 * - Float: FloatWindowConfUI
 * - Dialog: DialogWindowConfUI
 * - System: SysWindowConfUI
 */ function Step3WindowType(param) {
    let { conf } = param;
    const [windowType] = (0,useProxyWatch/* useProxyWatch */.x)(conf, 'windowType', conf.windowType);
    const [floatWindowConf] = (0,useProxyWatch/* useProxyWatch */.x)(conf, 'floatWindowConf', conf.floatWindowConf);
    const { t } = (0,es/* useTranslation */.Bd)('homepage/components/android-float/window/content');
    console.log('Step3WindowType: render windowType:', windowType);
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(Stack/* default */.A, {
        spacing: 3,
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.A, {
                variant: "h6",
                children: t('Step3WindowType.title')
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Alert/* default */.A, {
                severity: "info",
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.A, {
                    variant: "body2",
                    children: t('Step3WindowType.description')
                })
            }),
            windowType === WindowConf/* WindowType */.ZI.Float && floatWindowConf && /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.A, {
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.A, {
                        variant: "subtitle2",
                        sx: {
                            fontWeight: 'bold',
                            color: 'primary.main',
                            mb: 2
                        },
                        children: t('Step3WindowType.floatConfig')
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(WindowConfUI/* FloatWindowConfUI */.JI, {
                        floatWindowConf: floatWindowConf
                    })
                ]
            })
        ]
    });
}

;// ./src/components/android-float/window/Step4Advanced.tsx





/**
 * Step 4: 高级选项
 *
 * 配置：
 * - forceDismissWindowTime: 强制关闭时间
 * - WebViewConf: WebView 配置
 * - 显示完成总结
 */ function Step4Advanced(param) {
    let { conf } = param;
    const [forceDismissWindowTime] = (0,useProxyWatch/* useProxyWatch */.x)(conf, 'forceDismissWindowTime', conf.forceDismissWindowTime);
    const [htmlConf] = (0,useProxyWatch/* useProxyWatch */.x)(conf, 'htmlConf', conf.htmlConf);
    const [tag] = (0,useProxyWatch/* useProxyWatch */.x)(conf, 'tag', conf.tag);
    const { t } = (0,es/* useTranslation */.Bd)('homepage/components/android-float/window/content');
    console.log('Step4Advanced: render forceDismissWindowTime:', forceDismissWindowTime);
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(Stack/* default */.A, {
        spacing: 3,
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.A, {
                variant: "h6",
                children: t('Step4Advanced.title')
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Alert/* default */.A, {
                severity: "info",
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.A, {
                    variant: "body2",
                    children: t('Step4Advanced.description')
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.A, {
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(WindowConfUI/* OptionalLabel */.zh, {
                        label: t('Step4Advanced.dismissTimeLabel'),
                        description: t('Step4Advanced.dismissTimeDesc')
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(TextField/* default */.A, {
                        type: "number",
                        value: forceDismissWindowTime,
                        onChange: (e)=>{
                            console.log('Step4Advanced: forceDismissWindowTime changed to', e.target.value);
                            conf.forceDismissWindowTime = Number(e.target.value);
                        },
                        size: "small",
                        fullWidth: true,
                        inputProps: {
                            min: 0,
                            step: 1000
                        }
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.A, {
                        variant: "caption",
                        color: "text.secondary",
                        sx: {
                            mt: 1,
                            display: 'block'
                        },
                        children: t('Step4Advanced.dismissTimeHelper')
                    })
                ]
            }),
            (htmlConf === null || htmlConf === void 0 ? void 0 : htmlConf.webViewConf) && /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.A, {
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.A, {
                        variant: "subtitle2",
                        sx: {
                            fontWeight: 'bold',
                            color: 'primary.main',
                            mb: 2
                        },
                        children: t('Step4Advanced.webViewConfig')
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(WindowConfUI/* WebViewConfUI */.q2, {
                        webViewConf: htmlConf.webViewConf
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.A, {
                sx: {
                    p: 2,
                    bgcolor: 'success.light',
                    borderRadius: 1
                },
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.A, {
                        variant: "subtitle2",
                        sx: {
                            fontWeight: 'bold',
                            mb: 1
                        },
                        children: t('Step4Advanced.completeSummary')
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)(Stack/* default */.A, {
                        spacing: 0.5,
                        sx: {
                            fontSize: '0.875rem'
                        },
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)(Typography/* default */.A, {
                                variant: "body2",
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("strong", {
                                        children: t('Step4Advanced.summaryTag')
                                    }),
                                    " ",
                                    tag
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)(Typography/* default */.A, {
                                variant: "body2",
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("strong", {
                                        children: t('Step4Advanced.summaryType')
                                    }),
                                    " ",
                                    conf.windowType
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)(Typography/* default */.A, {
                                variant: "body2",
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("strong", {
                                        children: t('Step4Advanced.summaryUrl')
                                    }),
                                    " ",
                                    (htmlConf === null || htmlConf === void 0 ? void 0 : htmlConf.url) || '(未设置)'
                                ]
                            }),
                            (htmlConf === null || htmlConf === void 0 ? void 0 : htmlConf.html) && /*#__PURE__*/ (0,jsx_runtime.jsxs)(Typography/* default */.A, {
                                variant: "body2",
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("strong", {
                                        children: t('Step4Advanced.summaryHtml')
                                    }),
                                    " ",
                                    htmlConf.html.substring(0, 50),
                                    "..."
                                ]
                            })
                        ]
                    })
                ]
            })
        ]
    });
}

;// ./src/components/android-float/window/WindowConfWizard.tsx









/**
 * WindowConfWizard - 分步引导创建窗口配置
 *
 * 4 个步骤：
 * 1. 基本信息 (窗口类型、标识、说明)
 * 2. HTML 内容 (URL 或 HTML 代码)
 * 3. 窗口特定配置 (根据窗口类型)
 * 4. 高级选项 (强制关闭时间、WebView 配置)
 */ function WindowConfWizard(param) {
    let { onComplete, onCancel } = param;
    const { t } = (0,es/* useTranslation */.Bd)('homepage/components/android-float/window/content');
    const [step, setStep] = (0,react.useState)(1);
    const [conf] = (0,react.useState)(()=>(0,proxyWatch/* toProxy */.I$)((0,WindowConf/* createDefaultWindowConf */.IL)()));
    const [errors, setErrors] = (0,react.useState)({});
    // 监听 windowType 变化，使用 useProxyWatch
    const [windowType] = (0,useProxyWatch/* useProxyWatch */.x)(conf, 'windowType', conf.windowType);
    console.log('WindowConfWizard: render step', step);
    /**
   * 监听 windowType 变化，初始化对应的窗口配置
   */ (0,react.useEffect)(()=>{
        console.log('WindowConfWizard: useEffect - windowType changed to', windowType);
        // 仅保留 Float 窗口配置
        if (windowType === WindowConf/* WindowType */.ZI.Float) {
            console.log('WindowConfWizard: initializing floatWindowConf');
            conf.floatWindowConf = (0,WindowConf/* createDefaultFloatWindowConf */.Wl)();
        }
    }, [
        windowType,
        conf
    ]);
    /**
   * 验证当前步骤的必填字段
   */ const validateStep = (currentStep)=>{
        console.log('WindowConfWizard: validateStep', currentStep);
        switch(currentStep){
            case 1:
                // Step 1: tag 必填
                const isStep1Valid = conf.tag.trim() !== '';
                console.log('WindowConfWizard: Step 1 validation - tag:', conf.tag, 'valid:', isStep1Valid);
                return isStep1Valid;
            case 2:
                var _conf_htmlConf, _conf_htmlConf1;
                // Step 2: url 和 html 必须二选一
                const url = (((_conf_htmlConf = conf.htmlConf) === null || _conf_htmlConf === void 0 ? void 0 : _conf_htmlConf.url) || '').trim();
                const html = (((_conf_htmlConf1 = conf.htmlConf) === null || _conf_htmlConf1 === void 0 ? void 0 : _conf_htmlConf1.html) || '').trim();
                const isStep2Valid = url !== '' || html !== '';
                console.log('WindowConfWizard: Step 2 validation - url:', url, 'html:', html, 'valid:', isStep2Valid);
                return isStep2Valid;
            case 3:
                // Step 3: 仅验证 floatWindowConf
                const isStep3Valid = conf.floatWindowConf !== undefined;
                console.log('WindowConfWizard: Step 3 validation - valid:', isStep3Valid);
                return isStep3Valid;
            case 4:
                // Step 4: 无强制验证
                console.log('WindowConfWizard: Step 4 validation - no validation required');
                return true;
            default:
                return true;
        }
    };
    /**
   * 处理下一步
   */ const handleNext = ()=>{
        console.log('WindowConfWizard: handleNext called, current step:', step);
        if (validateStep(step)) {
            console.log('WindowConfWizard: validation passed');
            if (step < 4) {
                setStep(step + 1);
            } else {
                console.log('WindowConfWizard: calling onComplete');
                onComplete(conf);
            }
            setErrors({});
        } else {
            console.log('WindowConfWizard: validation failed');
            setErrors({
                ...errors,
                [step]: t('WindowConfWizard.validationError') || '请填写所有必填项'
            });
        }
    };
    /**
   * 处理上一步
   */ const handlePrevious = ()=>{
        console.log('WindowConfWizard: handlePrevious called, current step:', step);
        if (step > 1) {
            setStep(step - 1);
            setErrors({});
        }
    };
    /**
   * 处理取消
   */ const handleCancel = ()=>{
        console.log('WindowConfWizard: calling onCancel');
        onCancel();
    };
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.A, {
        sx: {
            p: 3
        },
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsxs)(Stepper/* default */.A, {
                activeStep: step - 1,
                sx: {
                    mb: 4
                },
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Step/* default */.A, {
                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(StepLabel/* default */.A, {
                            children: t('WindowConfWizard.basicInfo')
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Step/* default */.A, {
                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(StepLabel/* default */.A, {
                            children: t('WindowConfWizard.htmlContent')
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Step/* default */.A, {
                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(StepLabel/* default */.A, {
                            children: t('WindowConfWizard.windowConfig')
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Step/* default */.A, {
                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(StepLabel/* default */.A, {
                            children: t('WindowConfWizard.advancedOptions')
                        })
                    })
                ]
            }),
            errors[step] && /*#__PURE__*/ (0,jsx_runtime.jsx)(Alert/* default */.A, {
                severity: "error",
                sx: {
                    mb: 2
                },
                children: errors[step]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.A, {
                sx: {
                    minHeight: 400,
                    mb: 3
                },
                children: [
                    step === 1 && /*#__PURE__*/ (0,jsx_runtime.jsx)(Step1BasicInfo, {
                        conf: conf
                    }),
                    step === 2 && /*#__PURE__*/ (0,jsx_runtime.jsx)(Step2HtmlConf, {
                        conf: conf
                    }),
                    step === 3 && /*#__PURE__*/ (0,jsx_runtime.jsx)(Step3WindowType, {
                        conf: conf
                    }),
                    step === 4 && /*#__PURE__*/ (0,jsx_runtime.jsx)(Step4Advanced, {
                        conf: conf
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.A, {
                sx: {
                    display: 'flex',
                    gap: 1,
                    justifyContent: 'flex-end'
                },
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Button/* default */.A, {
                        onClick: handleCancel,
                        children: t('WindowConfWizard.cancel')
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Button/* default */.A, {
                        disabled: step === 1,
                        onClick: handlePrevious,
                        children: t('WindowConfWizard.previousStep')
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Button/* default */.A, {
                        variant: "contained",
                        onClick: handleNext,
                        children: step === 4 ? t('WindowConfWizard.completeCreate') : t('WindowConfWizard.nextStep')
                    })
                ]
            })
        ]
    });
}

;// ./src/components/android-float/window/AddWindowContent.tsx





function AddWindowContent() {
    const router = (0,next_router.useRouter)();
    (0,react.useEffect)(()=>{
        console.log('AddWindowContent: init');
        data/* androidFloatWindowData */.Kl.init();
    }, []);
    /**
   * 处理向导完成 - 添加窗口配置到列表
   */ const handleWizardComplete = (conf)=>{
        console.log('AddWindowContent: handleWizardComplete, adding window config:', conf.tag);
        data/* androidFloatWindowData */.Kl.data.windowData.windowList.push(conf);
        router.back();
    };
    /**
   * 处理向导取消
   */ const handleWizardCancel = ()=>{
        console.log('AddWindowContent: handleWizardCancel');
        router.back();
    };
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(WindowConfWizard, {
        onComplete: handleWizardComplete,
        onCancel: handleWizardCancel
    });
}

;// ./src/pages/float-window-add/index.tsx




function AndroidFloatWindow() {
    const { t } = (0,es/* useTranslation */.Bd)('homepage/pages/android-float-window/content');
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(AppShell/* AppShell */.G, {
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(AppBar/* AppbarContainer */.W, {
            appbarProps: {
                title: t('content.title'),
                back: true
            },
            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(AddWindowContent, {})
        })
    });
}


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, [7054,1161,4729,2827,7313,4780,8771,788,1482,3126,4466,4687,2813,636,6593,8792], () => (__webpack_exec__(66908)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ _N_E = __webpack_exports__;
/******/ }
]);
//# sourceMappingURL=float-window-add-9a69bbc61a3111ea.js.map