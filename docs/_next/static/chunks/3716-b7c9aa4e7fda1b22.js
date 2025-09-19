"use strict";
(self["webpackChunk_N_E"] = self["webpackChunk_N_E"] || []).push([[3716],{

/***/ 6955:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  T: () => (/* binding */ IFrameReactContainer)
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/react@19.1.0/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(94513);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react@19.1.0/node_modules/react/index.js
var react = __webpack_require__(94285);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@open-iframe-resizer+core@1.6.0/node_modules/@open-iframe-resizer/core/dist/index.js
var dist = __webpack_require__(73160);
;// ../../libs/fanfanlo/src/iframe/IFrameContainer.ts
/* __next_internal_client_entry_do_not_use__ IFrameContainer auto */ 
class IFrameContainer {
    // private initializeResultList?:InitializeResult[]
    fitIframe() {
        return;
        this.initializeResultList = (0,dist/* initialize */.n_)({
            bodyMargin: "0px",
            bodyPadding: "0px",
            offsetSize: 3
        }, "#".concat(this.iframeId));
    }
    loadContent(content, htmlBuilder) {
        this.currentLoadCallback = null;
        this.currentErrorCallback = null;
        const resizeScript = "\n            <script>\n                const IFRAME_ID = '".concat(this.iframeId, "';\n                window.IFRAME_ID = '").concat(this.iframeId, "';\n                function notifyResize() {\n                    const body = document.body;\n                    const html = document.documentElement;\n                    \n                    // 获取实际内容高度（取最大值）\n                    const height = Math.max(\n                        body.scrollHeight,\n                        body.offsetHeight,\n                        html.scrollHeight,\n                        html.offsetHeight\n                    );\n                    \n                    // 获取实际内容宽度\n                    const width = Math.max(\n                        body.scrollWidth,\n                        body.offsetWidth,\n                        html.scrollWidth,\n                        html.offsetWidth\n                    );\n                    \n                    // 发送消息给父窗口\n                    window.parent.postMessage({\n                        type: 'resize',\n                        iframeId: IFRAME_ID,\n                        height,\n                        width\n                    }, '*');\n                }\n                \n                // 监听窗口大小变化\n                window.addEventListener('resize', notifyResize);\n                \n                // 监听DOMContentLoaded，确保DOM加载完毕后调整大小\n                document.addEventListener('DOMContentLoaded', notifyResize);\n                \n                // 监听load事件，确保所有资源加载完毕后调整大小\n                window.addEventListener('load', notifyResize);\n                \n                // 创建MutationObserver监听DOM变化\n                const observer = new MutationObserver(notifyResize);\n                observer.observe(document.documentElement, {\n                    childList: true,\n                    subtree: true,\n                    attributes: true,\n                    characterData: true\n                });\n                \n                // 监听来自父窗口的消息，处理请求重新调整大小的消息\n                window.addEventListener('message', function(event) {\n                    if (event.data && event.data.type === 'requestResize') {\n                        // 主动触发一次尺寸计算和发送\n                        notifyResize();\n                    }\n                });\n                \n                // 初始化大小\n                notifyResize();\n            </script>\n        ");
        const topScript = "\n        <script>\n        var autoWebViewJs = window.autoWebViewJs = window.parent.window.autoWebViewJs;\n        autoWebViewJs = window.parent.window.autoWebViewJs;\n        var isRealInAndroid = window.isRealInAndroid;\n        var storeUtilsConf = window.storeUtilsConf = window.parent.window.storeUtilsConf;\n        </script>\n        ";
        const bodyStyle = "<style>html, body{margin-left:-4px;padding:0;\n        background-color: white;}</style>";
        const idScript = "\n        <script>\n            const IFRAME_ID = '".concat(this.iframeId, "';\n            window.IFRAME_ID = '").concat(this.iframeId, "';\n        </script>");
        // 将内容和脚本组合
        let fullContent = content;
        fullContent = fullContent.includes('<head>') ? fullContent.replace('<head>', "<head>".concat(topScript)) : "".concat(fullContent).concat(topScript);
        fullContent = fullContent.includes('</head>') ? fullContent.replace('</head>', "".concat(bodyStyle, "</head>")) : "".concat(fullContent).concat(bodyStyle);
        fullContent = fullContent.includes('</body>') ? fullContent.replace('</body>', "".concat(resizeScript, "</body>")) : "".concat(fullContent).concat(resizeScript);
        // fullContent = fullContent.includes('<head>') ?
        // fullContent.replace(`<head>`,`<head>${idScript}`):
        // `${idScript}${fullContent}`;
        let c = htmlBuilder ? htmlBuilder(content, {
            iframeId: this.iframeId
        }) : content;
        // c = c.includes('</body>') 
        //     ? c.replace('</body>', `${resizeScript}</body>`)
        //     : `${c}${resizeScript}`;
        // this.iframe.srcdoc = c
        const blob = new Blob([
            c
        ], {
            type: 'text/html'
        });
        const url = URL.createObjectURL(blob);
        this.blobUrl = url;
        this.iframe.src = url;
    }
    template(s) {
        return '\n        <html>\n        <head>\n        </head>\n        <body>\n        <div id="app"></div>\n        <script>'.concat(s, "</script>\n        </body>\n        </html>");
    }
    /**
     * 设置最小宽度和高度
     * @param minWidth 最小宽度（像素）
     * @param minHeight 最小高度（像素）
     */ setMinSize(minWidth, minHeight) {
        this.minWidth = minWidth;
        this.minHeight = minHeight;
    }
    /**
     * 设置最大宽度和高度
     * @param maxWidth 最大宽度（像素）
     * @param maxHeight 最大高度（像素）
     */ setMaxSize(maxWidth, maxHeight) {
        this.maxWidth = maxWidth;
        this.maxHeight = maxHeight;
    }
    handleIframeMessage(event) {
        // 如果禁用了调整大小功能或处于全屏状态，直接返回
        if (!this.resizeEnabled || this.originalState.isFullscreen) return;
        if (event.data.type === 'resize' && event.data.iframeId === this.iframeId) {
            let { height, width } = event.data;
            const windowMaxWidth = window.innerWidth;
            // 应用最小尺寸限制
            if (this.minWidth !== null) {
                width = Math.max(width, this.minWidth);
            }
            if (this.minHeight !== null) {
                height = Math.max(height, this.minHeight);
            }
            // 应用最大尺寸限制
            if (this.maxWidth !== null) {
                width = Math.min(width, this.maxWidth);
            } else {
                // 如果没有设置最大宽度，则使用窗口宽度作为限制
                width = Math.min(width, windowMaxWidth);
            }
            if (this.maxHeight !== null) {
                height = Math.min(height, this.maxHeight);
            }
            // 设置容器尺寸
            this.container.style.height = "".concat(height, "px");
            this.container.style.width = "".concat(width, "px");
        }
    }
    /**
     * 通过URL加载iframe
     * @param url 要加载的URL
     * @param onLoad 加载成功回调函数
     * @param onError 加载失败回调函数
     */ async loadUrl(url, onLoad, onError) {
        this.currentLoadCallback = onLoad || null;
        this.currentErrorCallback = onError || null;
        if (this.iframe) {
            this.iframe.src = url;
        } else {
            console.error('IFrameContainer: iframe element is null in loadUrl!');
        }
    }
    // 移除 createLoadingElement, showLoading, removeLoading 方法
    /**
     * 从URL加载内容并作为字符串显示
     * @param url 要加载的资源URL
     * @returns Promise<void>
     */ async loadUrlAsContent(url, onLoad, onError, htmlBuilder) {
        try {
            const response = await fetch(url);
            if (!response.ok) {
                onError === null || onError === void 0 ? void 0 : onError(new Error("HTTP error! status: ".concat(response.status)));
                return;
            }
            const content = await response.text();
            this.loadContent(content, htmlBuilder);
            onLoad === null || onLoad === void 0 ? void 0 : onLoad();
        } catch (error) {
            console.error('Failed to load URL content:', error);
            onError === null || onError === void 0 ? void 0 : onError(error);
        }
    }
    /**
     * 获取容器元素
     * @returns HTMLDivElement 容器元素
     */ getContainer() {
        return this.container;
    }
    /**
     * 设置容器大小
     * @param width 宽度
     * @param height 高度
     */ setSize(width, height) {
        this.container.style.width = width;
        this.container.style.height = height;
    }
    /**
     * 进入全屏模式
     * 将iframe扩展到整个窗口大小，并暂停自动调整大小
     */ enterFullscreen() {
        if (this.originalState.isFullscreen) return; // 已经是全屏了
        // 保存当前状态
        this.originalState = {
            position: this.container.style.position,
            top: this.container.style.top,
            left: this.container.style.left,
            width: this.container.style.width,
            height: this.container.style.height,
            zIndex: this.container.style.zIndex,
            overflow: this.container.style.overflow,
            border: this.container.style.border,
            margin: this.container.style.margin,
            padding: this.container.style.padding,
            boxSizing: this.container.style.boxSizing,
            minWidth: this.minWidth,
            minHeight: this.minHeight,
            maxWidth: this.maxWidth,
            maxHeight: this.maxHeight,
            isFullscreen: true
        };
        // 暂停resize功能
        this.resizeEnabled = false;
        // 设置全屏样式
        this.container.style.position = 'fixed';
        this.container.style.top = '0';
        this.container.style.left = '0';
        this.container.style.width = '100vw';
        this.container.style.height = '100vh';
        this.container.style.zIndex = '2147483647';
        this.container.style.border = 'none';
        this.container.style.margin = '0';
        this.container.style.padding = '0';
        this.container.style.boxSizing = 'border-box';
        // 临时禁用最小/最大尺寸限制
        this.setMinSize(null, null);
        this.setMaxSize(null, null);
    }
    /**
     * 退出全屏模式
     * 恢复iframe到原始大小，并重新启用自动调整大小
     */ exitFullscreen() {
        if (!this.originalState.isFullscreen) return; // 不是全屏状态
        // 恢复原来的样式
        this.container.style.position = this.originalState.position || '';
        this.container.style.top = this.originalState.top || '';
        this.container.style.left = this.originalState.left || '';
        this.container.style.width = this.originalState.width || '';
        this.container.style.height = this.originalState.height || '';
        this.container.style.zIndex = this.originalState.zIndex || '';
        this.container.style.overflow = this.originalState.overflow || '';
        this.container.style.border = this.originalState.border || '';
        this.container.style.margin = this.originalState.margin || '';
        this.container.style.padding = this.originalState.padding || '';
        this.container.style.boxSizing = this.originalState.boxSizing || '';
        var _this_originalState_minWidth, _this_originalState_minHeight;
        // 恢复最小/最大尺寸限制
        this.setMinSize((_this_originalState_minWidth = this.originalState.minWidth) !== null && _this_originalState_minWidth !== void 0 ? _this_originalState_minWidth : null, (_this_originalState_minHeight = this.originalState.minHeight) !== null && _this_originalState_minHeight !== void 0 ? _this_originalState_minHeight : null);
        var _this_originalState_maxWidth, _this_originalState_maxHeight;
        this.setMaxSize((_this_originalState_maxWidth = this.originalState.maxWidth) !== null && _this_originalState_maxWidth !== void 0 ? _this_originalState_maxWidth : null, (_this_originalState_maxHeight = this.originalState.maxHeight) !== null && _this_originalState_maxHeight !== void 0 ? _this_originalState_maxHeight : null);
        // 重新启用resize功能
        this.resizeEnabled = true;
        // 重置状态
        this.originalState.isFullscreen = false;
        // 触发一次resize以恢复适当的大小
        if (this.iframe.contentWindow) {
            // 尝试通过消息触发重新调整大小
            this.iframe.contentWindow.postMessage({
                type: 'requestResize'
            }, '*');
        }
    }
    /**
     * 切换全屏状态
     * 如果当前是全屏，则退出；否则进入全屏
     */ toggleFullscreen() {
        if (this.originalState.isFullscreen) {
            this.exitFullscreen();
        } else {
            this.enterFullscreen();
        }
    }
    /**
     * 判断是否是全屏状态
     * @returns boolean 是否处于全屏状态
     */ isFullscreen() {
        return this.originalState.isFullscreen;
    }
    /**
     * 启用或禁用resize功能
     * @param enabled 是否启用resize
     */ enableResize(enabled) {
        this.resizeEnabled = enabled;
        // 如果重新启用了resize，尝试触发一次调整大小
        if (enabled && this.iframe.contentWindow && !this.originalState.isFullscreen) {
            this.iframe.contentWindow.postMessage({
                type: 'requestResize'
            }, '*');
        }
    }
    exit() {
        const iframe = this.iframe;
        if (!iframe) return;
        const clone = iframe.cloneNode(false);
        iframe.replaceWith(clone);
        iframe.remove();
        if (this.blobUrl) {
            URL.revokeObjectURL(this.blobUrl);
            this.blobUrl = undefined;
        }
        console.log('iframe released', this.iframeId);
    }
    constructor(){
        this.minWidth = null;
        this.minHeight = null;
        this.maxWidth = null;
        this.maxHeight = null;
        this.currentLoadCallback = null;
        this.currentErrorCallback = null;
        this.resizeEnabled = true;
        // 保存原始状态的对象
        this.originalState = {
            isFullscreen: false
        };
        this.iframeId = 'iframe_' + Math.random().toString(36).substr(2, 9);
        // 创建容器和iframe
        this.container = document.createElement('div');
        this.iframe = document.createElement('iframe');
        this.iframe.controller = this;
        // 设置容器样式
        this.container.style.width = '100%';
        this.container.style.height = '100%';
        this.container.style.overflow = 'hidden';
        this.container.style.position = 'relative';
        this.container.style.maxWidth = '100%';
        this.container.style.margin = '0 auto';
        // 设置iframe样式
        this.iframe.style.width = '100%';
        this.iframe.style.height = '100%';
        this.iframe.style.border = 'none';
        this.iframe.style.overflow = 'hidden';
        this.iframe.style.boxSizing = 'border-box';
        this.iframe.setAttribute('scrolling', 'no');
        this.iframe.setAttribute('seamless', 'seamless');
        // --- Add Load and Error Handlers ---
        this.iframe.onload = ()=>{
            if (this.currentLoadCallback) {
                this.currentLoadCallback();
            // Optionally clear callback after use if needed
            // this.currentLoadCallback = null; 
            }
            if (true) {
                this.fitIframe();
            // const initInitialize = ()=>{
            //     const list:InitializeResult[] = initialize({
            //         bodyMargin:"0px",
            //         bodyPadding:"0px",
            //         offsetSize:3,
            //     },`#${this.iframeId}`)
            // }
            // initInitialize();
            // const initIframeResizer =()=>{
            //     const iFrameResize = (window as any).iframeResize;
            //     // console.log('iframeResize_fn', iFrameResize)
            //     iFrameResize({
            //         onReady:(iframe:any)=>{
            //             // console.log('onReady_fn', iframe)
            //         },
            //         license: 'GPLv3',
            //         waitForLoad:true,
            //         log: false, // 可选：是否输出日志
            //         checkOrigin: false, // 可选：如果 iframe 是跨域的必须设为 false
            //       }, `#${this.iframeId}`);
            // }
            }
        };
        this.iframe.onerror = (event, source, lineno, colno, error)=>{
            console.error('%cIFrameContainer: iframe "error" event triggered.', 'color: red; font-weight: bold;', event);
            const err = error || new Error(typeof event === 'string' ? event : 'Failed to load iframe content');
            if (this.currentErrorCallback) {
                this.currentErrorCallback(err);
            // Optionally clear callback after use if needed
            // this.currentErrorCallback = null;
            }
        };
        // --- End Handlers ---
        // 将iframe添加到容器中
        this.container.appendChild(this.iframe);
        // 设置iframe的ID
        this.iframe.id = this.iframeId;
        // 添加message事件监听
        window.addEventListener('message', this.handleIframeMessage.bind(this));
    }
}

// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/Box/Box.js + 2 modules
var Box = __webpack_require__(6445);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/CircularProgress/CircularProgress.js + 1 modules
var CircularProgress = __webpack_require__(95746);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/Typography/Typography.js
var Typography = __webpack_require__(67079);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/Alert/Alert.js + 6 modules
var Alert = __webpack_require__(81482);
;// ../../libs/fanfanlo/src/iframe/IFrameReactContainer.tsx



// --- Add MUI Imports ---




const IFrameReactContainer = (param)=>{
    let { style, className, url, content, urlAsContent, minWidth, minHeight, maxWidth, maxHeight, onError, onLoad, htmlBuilder } = param;
    const containerRef = (0,react.useRef)(null);
    const iframeContainerRef = (0,react.useRef)(null);
    // Internal loading state for the iframe itself
    const [iframeLoading, setIframeLoading] = (0,react.useState)(false);
    // Internal error state for the iframe itself
    const [iframeError, setIframeError] = (0,react.useState)(null);
    (0,react.useEffect)(()=>{
        return ()=>{
            if (iframeContainerRef.current) {
                iframeContainerRef.current.exit();
            }
        };
    }, []);
    (0,react.useEffect)(()=>{
        // 创建 IFrameContainer 实例
        if (!iframeContainerRef.current && containerRef.current) {
            iframeContainerRef.current = new IFrameContainer();
            const container = iframeContainerRef.current;
            container.setMinSize(minWidth !== null && minWidth !== void 0 ? minWidth : null, minHeight !== null && minHeight !== void 0 ? minHeight : null);
            container.setMaxSize(maxWidth !== null && maxWidth !== void 0 ? maxWidth : null, maxHeight !== null && maxHeight !== void 0 ? maxHeight : null);
            containerRef.current.appendChild(container.getContainer());
        }
        return ()=>{
            // 清理事件监听
            if (containerRef.current && iframeContainerRef.current) {
                containerRef.current.removeChild(iframeContainerRef.current.getContainer());
                iframeContainerRef.current = null;
            }
        };
    }, [
        minWidth,
        minHeight,
        maxWidth,
        maxHeight
    ]);
    (0,react.useEffect)(()=>{
        const iframeContainer = iframeContainerRef.current;
        if (!iframeContainer) return;
        const loadContentOrUrl = async ()=>{
            // Reset internal state before loading
            setIframeLoading(true);
            setIframeError(null);
            try {
                if (content) {
                    iframeContainer.loadContent(content, htmlBuilder);
                    // For srcdoc, loading might be considered finished immediately
                    // or rely on resizer events. Let's tentatively set loading false.
                    setIframeLoading(false);
                    onLoad === null || onLoad === void 0 ? void 0 : onLoad(); // Call parent onLoad immediately for content
                } else if (url) {
                    // Pass wrapped callbacks to the actual loadUrl
                    const handleLoad = ()=>{
                        setIframeLoading(false);
                        setIframeError(null);
                        onLoad === null || onLoad === void 0 ? void 0 : onLoad(); // Call the parent's onLoad
                    };
                    const handleError = (error)=>{
                        console.error('%cIFrameReactContainer: handleError (callback from IFrameContainer) triggered.', 'color: red;', error);
                        setIframeLoading(false);
                        setIframeError(error);
                        onError === null || onError === void 0 ? void 0 : onError(error); // Call the parent's onError
                    };
                    if (urlAsContent) {
                        iframeContainer.loadUrlAsContent(url, handleLoad, handleError, htmlBuilder);
                        handleLoad();
                    } else {
                        iframeContainer.loadUrl(url, handleLoad, handleError);
                    }
                // Note: setIframeLoading(false) is now handled inside the callbacks
                } else {
                    setIframeLoading(false); // No URL or content, stop loading
                }
            } catch (error) {
                console.error('>>> Sync Error during loadContentOrUrl setup:', error);
                if (error instanceof Error) {
                    setIframeLoading(false);
                    setIframeError(error);
                    onError === null || onError === void 0 ? void 0 : onError(error);
                } else {
                    const unknownError = new Error('An unknown error occurred during setup');
                    setIframeLoading(false);
                    setIframeError(unknownError);
                    onError === null || onError === void 0 ? void 0 : onError(unknownError);
                }
            }
        };
        loadContentOrUrl();
    }, [
        url,
        content,
        onError,
        onLoad,
        iframeContainerRef.current
    ]);
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        ref: containerRef,
        style: style,
        className: className,
        children: [
            iframeLoading && /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.A, {
                sx: {
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    padding: 2
                },
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(CircularProgress/* default */.A, {
                        size: 24
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.A, {
                        variant: "body2",
                        sx: {
                            ml: 1
                        },
                        children: "Loading preview..."
                    })
                ]
            }),
            iframeError && !iframeLoading && /*#__PURE__*/ (0,jsx_runtime.jsxs)(Alert/* default */.A, {
                severity: "error",
                sx: {
                    m: 1
                },
                children: [
                    "Preview Error: ",
                    iframeError.message
                ]
            })
        ]
    });
};


/***/ }),

/***/ 20939:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  G: () => (/* binding */ AppShell)
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/react@19.1.0/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(94513);
// EXTERNAL MODULE: ../../libs/fanfanlo/src/i18n/i18n-init.ts + 2 modules
var i18n_init = __webpack_require__(21964);
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

/***/ 21964:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


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
// EXTERNAL MODULE: ../../libs/fanfanlo/src/nextjs/env/env.ts
var env = __webpack_require__(49210);
;// ../../libs/fanfanlo/src/utils/files-map-utils.ts
const map = {};
// 这里可以添加需要映射的文件路径   
const fileMapUtils = {
    map,
    getFile (src) {
        return this.map[src] || src;
    }
};

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
        p = fileMapUtils.getFile("/".concat(p));
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
    log.pause = true;
    log.log("lllllng", lng);
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
        fallbackLng: env/* isServer */.S$ ? "en" : "zh-CN",
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

/***/ 35155:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   p: () => (/* binding */ StorePageDynamicContext),
/* harmony export */   q: () => (/* binding */ StorePageContext)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(94285);
/* harmony import */ var _store_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4887);


// import { storeUtils } from "./store";
const s = _store_utils__WEBPACK_IMPORTED_MODULE_1__/* .storeUtils */ .P.namespace('store-page-context');
function create() {
    return /*#__PURE__*/ createContext(s);
}
const StorePageContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)(s);
const StorePageDynamicContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)({});


/***/ }),

/***/ 67236:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


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
// EXTERNAL MODULE: ../../libs/fanfanlo/src/i18n/i18n-value-loader.ts + 1 modules
var i18n_value_loader = __webpack_require__(27950);
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


/***/ })

}]);
//# sourceMappingURL=3716-b7c9aa4e7fda1b22.js.map