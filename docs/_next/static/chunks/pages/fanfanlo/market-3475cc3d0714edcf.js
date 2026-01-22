(self["webpackChunk_N_E"] = self["webpackChunk_N_E"] || []).push([[4840],{

/***/ 5705:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {


    (window.__NEXT_P = window.__NEXT_P || []).push([
      "/fanfanlo/market",
      function () {
        return __webpack_require__(25986);
      }
    ]);
    if(false) {}
  

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

/***/ 25986:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ FanfanloMarketPage)
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/react@19.1.0/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(94513);
// EXTERNAL MODULE: ../../libs/app/ui/src/components/app/AppShell.tsx + 3 modules
var AppShell = __webpack_require__(26719);
// EXTERNAL MODULE: ../../libs/app/ui/src/components/tabbar/Tabbar.tsx
var Tabbar = __webpack_require__(13396);
// EXTERNAL MODULE: ./src/components/navbar/NavBar.tsx
var NavBar = __webpack_require__(52807);
// EXTERNAL MODULE: ../../libs/fanfanlo/src/log/Log.ts + 1 modules
var Log = __webpack_require__(89597);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/Box/Box.js + 2 modules
var Box = __webpack_require__(92061);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react@19.1.0/node_modules/react/index.js
var react = __webpack_require__(94285);
// EXTERNAL MODULE: ../../libs/fanfanlo/src/watcher/useWatchUpdates.tsx
var useWatchUpdates = __webpack_require__(96332);
// EXTERNAL MODULE: ../../libs/fanfanlo/src/watcher/useProxyWatch.ts
var useProxyWatch = __webpack_require__(80502);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react-virtuoso@4.13.0_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/react-virtuoso/dist/index.mjs
var dist = __webpack_require__(24675);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react-i18next@15.6.0_i18next@24.2.3_typescript@5.7.3__react-dom@19.1.0_react@19.1.0__react@19.1.0_typescript@5.7.3/node_modules/react-i18next/dist/es/index.js + 15 modules
var es = __webpack_require__(56137);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/Card/Card.js + 1 modules
var Card = __webpack_require__(81737);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/CardContent/CardContent.js + 1 modules
var CardContent = __webpack_require__(54559);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/Typography/Typography.js
var Typography = __webpack_require__(26512);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/Chip/Chip.js + 2 modules
var Chip = __webpack_require__(95409);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/Stack/Stack.js + 1 modules
var Stack = __webpack_require__(39070);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/Button/Button.js + 3 modules
var Button = __webpack_require__(20872);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+icons-material@6.4.12_@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_re_5ewkm5t5g27pzq5tz62v6ktvti/node_modules/@mui/icons-material/esm/Edit.js
var Edit = __webpack_require__(60921);
// EXTERNAL MODULE: ../../node_modules/.pnpm/next@15.3.5_@babel+core@7.28.0_@playwright+test@1.57.0_babel-plugin-macros@3.1.0_react-dom@19_gjfccjsd7b6xv5ktyj7vxamu6q/node_modules/next/link.js
var next_link = __webpack_require__(99815);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
;// ../../libs/droid/project-v2-ui/src/ui/market/MarketProjectCard.tsx





const fileLog = new Log/* Log */.tG(false, 'MarketProjectCard_f');
function MarketProjectCard(param) {
    let { project, index } = param;
    const uiLog = fileLog.sub(false, 'MarketProjectCard_ui');
    // uiLog.pause = true;
    // uiLog.childrenPaused = true;
    const { t } = (0,es/* useTranslation */.Bd)('droid-project-v2-ui/ui/market/content');
    uiLog.log('[MarketProjectCard] index:', index, 'uuid:', project.uuid, 'title:', project.title);
    let displayTitle = project.title;
    if (!displayTitle) {
        displayTitle = t('MarketProjectCard.untitled');
    }
    const editHref = "/project-editor?mode=market&uuid=".concat(project.uuid);
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(Card/* default */.A, {
        sx: {
            width: '100%',
            mb: 1
        },
        "data-testid": "MarketProjectCard__card__01jw8k9m2n3p4q5r6s7t8u9v__".concat(index),
        "data-test-comment": "市场项目卡片，展示项目标题、副标题、标签和操作按钮",
        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(CardContent/* default */.A, {
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.A, {
                    variant: "h6",
                    component: "div",
                    gutterBottom: true,
                    children: displayTitle
                }),
                project.subtitle && /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.A, {
                    variant: "body2",
                    color: "text.secondary",
                    gutterBottom: true,
                    children: project.subtitle
                }),
                project.tags && project.tags.length > 0 && /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.A, {
                    sx: {
                        mb: 1
                    },
                    children: project.tags.map((tag, tagIndex)=>/*#__PURE__*/ (0,jsx_runtime.jsx)(Chip/* default */.A, {
                            label: tag,
                            size: "small",
                            sx: {
                                mr: 0.5,
                                mb: 0.5
                            }
                        }, tagIndex))
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)(Stack/* default */.A, {
                    direction: "row",
                    spacing: 1,
                    sx: {
                        mt: 1
                    },
                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)((link_default()), {
                        href: editHref,
                        passHref: true,
                        legacyBehavior: true,
                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Button/* default */.A, {
                            component: "a",
                            size: "small",
                            variant: "contained",
                            startIcon: /*#__PURE__*/ (0,jsx_runtime.jsx)(Edit/* default */.A, {}),
                            "data-testid": "MarketProjectCard__editButton__01jw8k9m2n3p4q5r6s7t8u9v__".concat(index),
                            "data-test-comment": "编辑按钮，点击后进入编辑页面编辑该市场项目",
                            children: t('MarketProjectCard.edit')
                        })
                    })
                })
            ]
        })
    });
}

// EXTERNAL MODULE: ../../libs/fanfanlo/src/watcher/proxyWatch.ts
var proxyWatch = __webpack_require__(57641);
;// ../../libs/app/model/src/remote/project/types.ts
/**
 * Project API 类型定义
 *
 * 使用 Partial + Omit 方式基于 IProject 创建 Input 类型
 * 保证字段与 @droid/project-v2-interface 对齐
 *
 * 对应后端：C:\work\android-droid\go\routers\project\create_project.go
 */ /**
 * 市场加载状态枚举
 */ var types_MarketLoadingState = /*#__PURE__*/ function(MarketLoadingState) {
    MarketLoadingState["Idle"] = "idle";
    MarketLoadingState["Loading"] = "loading";
    MarketLoadingState["Error"] = "error";
    MarketLoadingState["Success"] = "success";
    return MarketLoadingState;
}({});

// EXTERNAL MODULE: ../../libs/fanfanlo/src/remote/request.ts
var request = __webpack_require__(73603);
// EXTERNAL MODULE: ../../libs/app/model/src/remote/tms.ts
var tms = __webpack_require__(20928);
;// ../../libs/app/model/src/remote/project/nextPage.ts



const nextPage_fileLog = new Log/* Log */.tG(false, 'nextPage_f');
/**
 * 获取市场项目分页数据
 * 
 * 功能说明：
 * - 获取公开项目市场的分页CDN URL列表
 * - 不传currentPageIndex时从最新页开始
 * - 传入currentPageIndex时从currentPageIndex-1开始
 * 
 * @param opts 请求选项
 * @returns 查询结果，包含pageIndex和urls列表
 */ async function nextPage(opts) {
    const fnLog = nextPage_fileLog.sub(false, 'nextPage_fn');
    // fnLog.pause = true;
    fnLog.log('[nextPage] 开始获取市场分页数据, params:', JSON.stringify(opts.params));
    const res = await (0,request/* request */.Em)(tms/* tms */.X.TProject, tms/* tms */.X.MProjectNextPage, opts.params, opts.gateway, opts.handler);
    fnLog.log('[nextPage] 请求完成, shellIsOk:', res.shellIsOk, 'dataIsOk:', res.dataIsOk);
    if (!res.shellIsOk) {
        fnLog.log('[nextPage] ERROR: 请求失败, err:', JSON.stringify(res.err));
    }
    if (!res.dataIsOk) {
        var _res_data, _res_data1;
        fnLog.log('[nextPage] ERROR: 数据异常, errMsg:', (_res_data = res.data) === null || _res_data === void 0 ? void 0 : _res_data.errMsg, 'errCode:', (_res_data1 = res.data) === null || _res_data1 === void 0 ? void 0 : _res_data1.errCode);
    }
    if (res.data) {
        if (res.data.is_ok) {
            var _res_data_urls;
            fnLog.log('[nextPage] 获取成功, pageIndex:', res.data.pageIndex, 'urls数量:', (_res_data_urls = res.data.urls) === null || _res_data_urls === void 0 ? void 0 : _res_data_urls.length);
        } else {
            fnLog.log('[nextPage] ERROR: 获取失败, msg:', res.data.msg);
        }
    } else {
        fnLog.log('[nextPage] ERROR: 无返回数据');
    }
    return res;
}
/* harmony default export */ const project_nextPage = ((/* unused pure expression or super */ null && (nextPage)));

;// ../../libs/droid/project-v2-ui/src/ui/market/marketState.ts


const marketState_fileLog = new Log/* Log */.tG(false, 'marketState_f');
// fileLog.pause = true;
// fileLog.childrenPaused = true;
/**
 * 市场数据状态
 */ const marketState = (0,proxyWatch/* toProxy */.I$)({
    projects: [],
    currentPageIndex: 0,
    hasMore: true,
    loadingState: types_MarketLoadingState.Idle,
    errorMsg: ''
});
/**
 * 加载市场项目列表
 * @param refresh 是否刷新（重新从最新页开始）
 */ async function loadMarketProjects() {
    let refresh = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : false;
    const fnLog = marketState_fileLog.sub(false, 'loadMarketProjects_fn');
    // fnLog.pause = true;
    // fnLog.childrenPaused = true;
    const currentLoadingState = marketState.loadingState;
    const currentHasMore = marketState.hasMore;
    const currentPageIndex = marketState.currentPageIndex;
    fnLog.log('[loadMarketProjects] refresh:', refresh, 'loadingState:', currentLoadingState, 'hasMore:', currentHasMore, 'pageIndex:', currentPageIndex, 'isLoading:', currentLoadingState === types_MarketLoadingState.Loading, 'noMore:', !refresh && !currentHasMore);
    if (currentLoadingState === types_MarketLoadingState.Loading) {
        return;
    }
    if (!refresh && !currentHasMore) {
        return;
    }
    if (refresh) {
        marketState.projects = [];
        marketState.currentPageIndex = 0;
        marketState.hasMore = true;
        marketState.errorMsg = '';
    }
    marketState.loadingState = types_MarketLoadingState.Loading;
    try {
        const params = {
            category: 'public'
        };
        const pageIndexToRequest = marketState.currentPageIndex;
        if (pageIndexToRequest > 0) {
            params.currentPageIndex = pageIndexToRequest;
        }
        const res = await nextPage({
            params
        });
        const resData = res.data;
        const hasData = !!resData;
        let resDataIsOk = false;
        let resDataMsg = '';
        if (resData) {
            resDataIsOk = resData.is_ok;
            if (resData.msg) {
                resDataMsg = resData.msg;
            }
        }
        fnLog.log('[loadMarketProjects] nextPage, params:', JSON.stringify(params), 'shellIsOk:', res.shellIsOk, 'dataIsOk:', res.dataIsOk, 'hasData:', hasData, 'isOk:', resDataIsOk, 'msg:', resDataMsg);
        if (!res.shellIsOk) {
            marketState.loadingState = types_MarketLoadingState.Error;
            marketState.errorMsg = '';
            return;
        }
        if (!res.dataIsOk) {
            marketState.loadingState = types_MarketLoadingState.Error;
            marketState.errorMsg = '';
            return;
        }
        if (!resData) {
            marketState.loadingState = types_MarketLoadingState.Error;
            marketState.errorMsg = '';
            return;
        }
        if (!resData.is_ok) {
            marketState.loadingState = types_MarketLoadingState.Error;
            if (resData.msg) {
                marketState.errorMsg = resData.msg;
            } else {
                marketState.errorMsg = '';
            }
            return;
        }
        const urls = resData.urls;
        const pageIndex = resData.pageIndex;
        const urlsLength = urls ? urls.length : 0;
        fnLog.log('[loadMarketProjects] urls数量:', urlsLength, 'pageIndex:', pageIndex, 'noUrls:', !urls || urlsLength === 0);
        if (!urls || urlsLength === 0) {
            marketState.hasMore = false;
            marketState.loadingState = types_MarketLoadingState.Success;
            return;
        }
        const allProjects = [];
        for(let i = 0; i < urls.length; i++){
            const url = urls[i];
            try {
                const response = await fetch(url);
                const responseOk = response.ok;
                const pageData = await response.json();
                const projects = pageData.projects;
                const projectsLength = projects ? projects.length : 0;
                fnLog.log('[loadMarketProjects] fetch URL[' + i + '], ok:', responseOk, 'status:', response.status, 'projects:', projectsLength);
                if (!responseOk) {
                    continue;
                }
                if (projects) {
                    allProjects.push(...projects);
                }
            } catch (fetchErr) {
                fnLog.log('[loadMarketProjects] fetch URL[' + i + '] 异常:', fetchErr);
            }
        }
        const existingProjects = marketState.projects;
        marketState.projects = [
            ...existingProjects,
            ...allProjects
        ];
        marketState.currentPageIndex = pageIndex;
        const newHasMore = pageIndex > 1;
        marketState.hasMore = newHasMore;
        marketState.loadingState = types_MarketLoadingState.Success;
        fnLog.log('[loadMarketProjects] 完成, 新增:', allProjects.length, '总数:', marketState.projects.length, 'hasMore:', newHasMore);
    } catch (err) {
        fnLog.log('[loadMarketProjects] ERROR:', err);
        marketState.loadingState = types_MarketLoadingState.Error;
        marketState.errorMsg = '';
    }
}
/**
 * 重置市场状态
 */ function resetMarketState() {
    const fnLog = marketState_fileLog.sub(false, 'resetMarketState_fn');
    // fnLog.pause = true;
    // fnLog.childrenPaused = true;
    fnLog.log('[resetMarketState] 重置状态');
    marketState.projects = [];
    marketState.currentPageIndex = 0;
    marketState.hasMore = true;
    marketState.loadingState = MarketLoadingState.Idle;
    marketState.errorMsg = '';
}

// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/CircularProgress/CircularProgress.js + 1 modules
var CircularProgress = __webpack_require__(95657);
;// ../../libs/droid/project-v2-ui/src/ui/market/MarketStateComponents.tsx



const MarketStateComponents_fileLog = new Log/* Log */.tG(false, 'MarketStateComponents_f');
function MarketStateComponents_MarketLoadingState(param) {
    let { testId } = param;
    const uiLog = MarketStateComponents_fileLog.sub(false, 'MarketLoadingState_ui');
    uiLog.log('[MarketLoadingState] 渲染加载状态');
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.A, {
        sx: {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100%'
        },
        "data-testid": testId || 'MarketLoadingState__box__01jw8k9m2n3p4q5r6s7t8u9y',
        "data-test-comment": "市场列表加载中状态",
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(CircularProgress/* default */.A, {})
    });
}
function MarketErrorState(param) {
    let { errorMsg, onRetry, testId } = param;
    const uiLog = MarketStateComponents_fileLog.sub(false, 'MarketErrorState_ui');
    const { t } = (0,es/* useTranslation */.Bd)('droid-project-v2-ui/ui/market/content');
    uiLog.log('[MarketErrorState] 渲染错误状态, errorMsg:', errorMsg);
    let displayErrorMsg = errorMsg;
    if (!displayErrorMsg) {
        displayErrorMsg = t('MarketStateComponents.MarketContainer.loadFailed');
    }
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.A, {
        sx: {
            textAlign: 'center',
            py: 4
        },
        "data-testid": testId || 'MarketErrorState__box__01jw8k9m2n3p4q5r6s7t8u9z',
        "data-test-comment": "市场列表错误状态",
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.A, {
                color: "error",
                gutterBottom: true,
                children: displayErrorMsg
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Button/* default */.A, {
                variant: "contained",
                onClick: onRetry,
                "data-testid": "MarketErrorState__retryButton__01jw8k9m2n3p4q5r6s7t8ua0",
                "data-test-comment": "重试按钮，点击后重新加载市场项目列表",
                children: t('MarketStateComponents.MarketContainer.retry')
            })
        ]
    });
}
function MarketEmptyState(param) {
    let { testId } = param;
    const uiLog = MarketStateComponents_fileLog.sub(false, 'MarketEmptyState_ui');
    const { t } = (0,es/* useTranslation */.Bd)('droid-project-v2-ui/ui/market/content');
    uiLog.log('[MarketEmptyState] 渲染空状态');
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.A, {
        sx: {
            textAlign: 'center',
            py: 4
        },
        "data-testid": testId || 'MarketEmptyState__box__01jw8k9m2n3p4q5r6s7t8ua1',
        "data-test-comment": "市场列表空状态",
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.A, {
            color: "text.secondary",
            children: t('MarketStateComponents.MarketContainer.noProjects')
        })
    });
}
function MarketFooterLoading(param) {
    let { testId } = param;
    const uiLog = MarketStateComponents_fileLog.sub(false, 'MarketFooterLoading_ui');
    uiLog.log('[MarketFooterLoading] 渲染底部加载状态');
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.A, {
        sx: {
            display: 'flex',
            justifyContent: 'center',
            py: 2
        },
        "data-testid": testId || 'MarketFooterLoading__box__01jw8k9m2n3p4q5r6s7t8ua2',
        "data-test-comment": "市场列表底部加载中状态",
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(CircularProgress/* default */.A, {
            size: 24
        })
    });
}
function MarketFooterError(param) {
    let { errorMsg, onRetry, testId } = param;
    const uiLog = MarketStateComponents_fileLog.sub(false, 'MarketFooterError_ui');
    const { t } = (0,es/* useTranslation */.Bd)('droid-project-v2-ui/ui/market/content');
    uiLog.log('[MarketFooterError] 渲染底部错误状态, errorMsg:', errorMsg);
    let displayErrorMsg = errorMsg;
    if (!displayErrorMsg) {
        displayErrorMsg = t('MarketStateComponents.MarketContainer.loadFailed');
    }
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.A, {
        sx: {
            textAlign: 'center',
            py: 2
        },
        "data-testid": testId || 'MarketFooterError__box__01jw8k9m2n3p4q5r6s7t8ua3',
        "data-test-comment": "市场列表底部错误状态",
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.A, {
                color: "error",
                variant: "body2",
                gutterBottom: true,
                children: displayErrorMsg
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Button/* default */.A, {
                size: "small",
                variant: "outlined",
                onClick: onRetry,
                "data-testid": "MarketFooterError__retryButton__01jw8k9m2n3p4q5r6s7t8ua4",
                "data-test-comment": "底部重试按钮，点击后重新加载下一页",
                children: t('MarketStateComponents.MarketContainer.retry')
            })
        ]
    });
}
function MarketFooterNoMore(param) {
    let { testId } = param;
    const uiLog = MarketStateComponents_fileLog.sub(false, 'MarketFooterNoMore_ui');
    const { t } = (0,es/* useTranslation */.Bd)('droid-project-v2-ui/ui/market/content');
    uiLog.log('[MarketFooterNoMore] 渲染底部无更多数据状态');
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.A, {
        sx: {
            textAlign: 'center',
            py: 2
        },
        "data-testid": testId || 'MarketFooterNoMore__box__01jw8k9m2n3p4q5r6s7t8ua5',
        "data-test-comment": "市场列表底部无更多数据状态",
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.A, {
            color: "text.secondary",
            variant: "body2",
            children: t('MarketStateComponents.MarketContainer.noMore')
        })
    });
}

;// ../../libs/droid/project-v2-ui/src/ui/market/MarketProjectList.tsx









const MarketProjectList_fileLog = new Log/* Log */.tG(false, 'MarketProjectList_f');
function MarketProjectList() {
    const uiLog = MarketProjectList_fileLog.sub(false, 'MarketProjectList_ui');
    const [projects] = (0,useWatchUpdates/* useProxyWatchUpdates */.d)(marketState, 'projects', marketState.projects || []);
    const [loadingState] = (0,useProxyWatch/* useProxyWatch */.x)(marketState, 'loadingState', marketState.loadingState);
    const [hasMore] = (0,useProxyWatch/* useProxyWatch */.x)(marketState, 'hasMore', marketState.hasMore);
    const [errorMsg] = (0,useProxyWatch/* useProxyWatch */.x)(marketState, 'errorMsg', marketState.errorMsg);
    const projectsLength = projects.length;
    const isLoading = loadingState === types_MarketLoadingState.Loading;
    const isError = loadingState === types_MarketLoadingState.Error;
    const isSuccess = loadingState === types_MarketLoadingState.Success;
    uiLog.log('[MarketProjectList] projects:', projectsLength, 'loadingState:', loadingState, 'hasMore:', hasMore);
    const virtuosoRef = (0,react.useRef)(null);
    const handleEndReached = (0,react.useCallback)(()=>{
        const currentLoadingState = marketState.loadingState;
        const currentHasMore = marketState.hasMore;
        uiLog.log('[MarketProjectList] endReached, isLoading:', currentLoadingState === types_MarketLoadingState.Loading, 'hasMore:', currentHasMore);
        if (currentLoadingState === types_MarketLoadingState.Loading) {
            return;
        }
        if (!currentHasMore) {
            return;
        }
        loadMarketProjects(false);
    }, []);
    const handleRetry = ()=>{
        uiLog.log('[MarketProjectList] 点击重试');
        loadMarketProjects(true);
    };
    const hasNoProjects = projectsLength === 0;
    if (isLoading && hasNoProjects) {
        return /*#__PURE__*/ (0,jsx_runtime.jsx)(MarketStateComponents_MarketLoadingState, {});
    }
    if (isError && hasNoProjects) {
        return /*#__PURE__*/ (0,jsx_runtime.jsx)(MarketErrorState, {
            errorMsg: errorMsg,
            onRetry: handleRetry
        });
    }
    if (hasNoProjects && isSuccess) {
        return /*#__PURE__*/ (0,jsx_runtime.jsx)(MarketEmptyState, {});
    }
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(dist/* Virtuoso */.aY, {
        ref: virtuosoRef,
        style: {
            height: '100%',
            width: '100%'
        },
        data: projects,
        itemContent: (index, project)=>/*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.A, {
                sx: {
                    px: 1,
                    py: 0.5
                },
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(MarketProjectCard, {
                    project: project,
                    index: index
                })
            }),
        endReached: handleEndReached,
        components: {
            EmptyPlaceholder: ()=>/*#__PURE__*/ (0,jsx_runtime.jsx)(MarketEmptyState, {}),
            Footer: ()=>{
                const currentLoadingState = marketState.loadingState;
                const currentHasMore = marketState.hasMore;
                const currentIsLoading = currentLoadingState === types_MarketLoadingState.Loading;
                const currentIsError = currentLoadingState === types_MarketLoadingState.Error;
                const hasProjects = projectsLength > 0;
                if (currentIsLoading && hasProjects) {
                    return /*#__PURE__*/ (0,jsx_runtime.jsx)(MarketFooterLoading, {});
                }
                if (currentIsError && hasProjects) {
                    return /*#__PURE__*/ (0,jsx_runtime.jsx)(MarketFooterError, {
                        errorMsg: marketState.errorMsg,
                        onRetry: handleRetry
                    });
                }
                if (!currentHasMore && hasProjects) {
                    return /*#__PURE__*/ (0,jsx_runtime.jsx)(MarketFooterNoMore, {});
                }
                return null;
            }
        }
    });
}

;// ../../libs/droid/project-v2-ui/src/ui/market/MarketContainer.tsx






const MarketContainer_fileLog = new Log/* Log */.tG(false, 'MarketContainer_f');
// fileLog.pause = true;
// fileLog.childrenPaused = true;
function MarketContainer() {
    const uiLog = MarketContainer_fileLog.sub(false, 'MarketContainer_ui');
    // uiLog.pause = true;
    // uiLog.childrenPaused = true;
    (0,react.useEffect)(()=>{
        const fnLog = uiLog.sub(false, 'effect_init_fn');
        // fnLog.pause = true;
        fnLog.log('[MarketContainer] useEffect 初始化加载');
        loadMarketProjects(true);
    }, []);
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.A, {
        sx: {
            height: '100%',
            width: '100%'
        },
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(MarketProjectList, {})
    });
}

;// ./src/pages/fanfanlo/market/index.tsx






function FanfanloMarketPage() {
    (0,react.useEffect)(()=>{
        // 保存原始样式
        const originalBodyOverflow = document.body.style.overflow;
        const originalBodyOverflowPriority = document.body.style.getPropertyPriority('overflow');
        const containerOriginalStyles = new Map();
        const containers = document.querySelectorAll('.MuiContainer-root');
        containers.forEach((container)=>{
            if (container.style) {
                containerOriginalStyles.set(container, container.style.overflow);
            }
        });
        // 隐藏 body 和 PageContent 的滚动条，使用 !important 覆盖现有规则
        document.body.style.setProperty('overflow', 'hidden', 'important');
        containers.forEach((container)=>{
            if (container.style) {
                container.style.overflow = 'hidden';
            }
        });
        return ()=>{
            // 恢复滚动条
            if (originalBodyOverflowPriority) {
                document.body.style.setProperty('overflow', originalBodyOverflow, originalBodyOverflowPriority);
            } else if (originalBodyOverflow) {
                document.body.style.overflow = originalBodyOverflow;
            } else {
                document.body.style.removeProperty('overflow');
            }
            containers.forEach((container)=>{
                if (container.style) {
                    const originalValue = containerOriginalStyles.get(container);
                    if (originalValue !== undefined) {
                        container.style.overflow = originalValue;
                    }
                }
            });
        };
    }, []);
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(AppShell/* AppShell */.G, {
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Tabbar/* TabbarContainer */.y, {
            titleConf: {
                ns: "homepage/pages/fanfanlo/market/content",
                key: "market.title"
            },
            navBar: /*#__PURE__*/ (0,jsx_runtime.jsx)(NavBar/* NavBar */.j, {}),
            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.A, {
                sx: {
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: '72px',
                    overflow: 'hidden',
                    zIndex: 1,
                    backgroundColor: 'background.default'
                },
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(MarketContainer, {})
            })
        })
    });
}


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
/* harmony import */ var _mui_icons_material_Settings__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(31480);
/* harmony import */ var _mui_icons_material_Create__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(44797);
/* harmony import */ var _mui_icons_material_Storefront__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(78389);
/* harmony import */ var _barrel_optimize_names_BottomNavigation_BottomNavigationAction_mui_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(94360);
/* harmony import */ var _barrel_optimize_names_BottomNavigation_BottomNavigationAction_mui_material__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(708);








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
        {
            label: t('NavBar.market'),
            value: '/fanfanlo/market',
            icon: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_icons_material_Storefront__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .A, {})
        },
        {
            label: t('NavBar.settings'),
            value: '/settings',
            icon: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_icons_material_Settings__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .A, {})
        }
    ];
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_barrel_optimize_names_BottomNavigation_BottomNavigationAction_mui_material__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .A, {
        showLabels: true,
        value: pathname,
        children: tabInfoList.map((e, index)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_barrel_optimize_names_BottomNavigation_BottomNavigationAction_mui_material__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .A, {
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


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, [7772,472,5409,9815,574,636,6593,8792], () => (__webpack_exec__(5705)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ _N_E = __webpack_exports__;
/******/ }
]);
//# sourceMappingURL=market-3475cc3d0714edcf.js.map