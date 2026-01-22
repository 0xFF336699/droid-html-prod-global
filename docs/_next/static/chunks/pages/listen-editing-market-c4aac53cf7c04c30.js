(self["webpackChunk_N_E"] = self["webpackChunk_N_E"] || []).push([[2347],{

/***/ 16429:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {


    (window.__NEXT_P = window.__NEXT_P || []).push([
      "/listen-editing-market",
      function () {
        return __webpack_require__(91655);
      }
    ]);
    if(false) {}
  

/***/ }),

/***/ 91655:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ ListenEditingMarketsPage)
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/react@19.1.0/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(94513);
// EXTERNAL MODULE: ../../libs/app/ui/src/components/app/AppShell.tsx + 3 modules
var AppShell = __webpack_require__(26719);
// EXTERNAL MODULE: ../../libs/app/ui/src/components/appbar/AppBar.tsx + 2 modules
var AppBar = __webpack_require__(40018);
// EXTERNAL MODULE: ../../libs/fanfanlo/src/dispatcher/Dispatcher.ts
var Dispatcher = __webpack_require__(30910);
// EXTERNAL MODULE: ../../libs/fanfanlo/src/storage/store-utils.ts
var store_utils = __webpack_require__(29498);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+icons-material@6.4.12_@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_re_5ewkm5t5g27pzq5tz62v6ktvti/node_modules/@mui/icons-material/esm/InsertDriveFileOutlined.js
var InsertDriveFileOutlined = __webpack_require__(87968);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+icons-material@6.4.12_@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_re_5ewkm5t5g27pzq5tz62v6ktvti/node_modules/@mui/icons-material/esm/ExpandLess.js
var ExpandLess = __webpack_require__(10936);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+icons-material@6.4.12_@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_re_5ewkm5t5g27pzq5tz62v6ktvti/node_modules/@mui/icons-material/esm/ExpandMore.js
var ExpandMore = __webpack_require__(61984);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/ListItem/ListItem.js + 3 modules
var ListItem = __webpack_require__(18248);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/ListItemText/ListItemText.js
var ListItemText = __webpack_require__(83942);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/Chip/Chip.js + 2 modules
var Chip = __webpack_require__(95409);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/Collapse/Collapse.js + 1 modules
var Collapse = __webpack_require__(68317);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/Box/Box.js + 2 modules
var Box = __webpack_require__(92061);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/Paper/Paper.js + 1 modules
var Paper = __webpack_require__(68732);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/Typography/Typography.js
var Typography = __webpack_require__(26512);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/List/List.js + 1 modules
var List = __webpack_require__(66397);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/CircularProgress/CircularProgress.js + 1 modules
var CircularProgress = __webpack_require__(95657);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/Container/Container.js + 1 modules
var Container = __webpack_require__(62145);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/Divider/Divider.js
var Divider = __webpack_require__(8536);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react@19.1.0/node_modules/react/index.js
var react = __webpack_require__(94285);
;// ./src/components/page/listen-editing-market/listen-editing-market.tsx
/**
 帮我实现页面加载后通过store2用改文件的路径命名的namespace获取的数据
 该数据记录了socket的地址，和一个MarketList的列表。
 获取到该列表后要展示该列表，组件要单独分离出来，而不是在一个大的组件里嵌套生成子组件。
 socket链接后要发起请求，请求同步已有监听的Imarket.name的数据，同步后把已有的数据替换掉。
 不要删除该注释

 */ 

 // Example icons


const MarketFileDisplay = (param)=>{
    let { file } = param;
    const [contentOpen, setContentOpen] = (0,react.useState)(false);
    const toggleContent = ()=>setContentOpen(!contentOpen);
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsxs)(ListItem/* default */.Ay, {
                sx: {
                    pl: 4,
                    display: 'flex',
                    alignItems: 'center'
                },
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(InsertDriveFileOutlined/* default */.A, {
                        sx: {
                            mr: 1,
                            fontSize: '1rem',
                            flexShrink: 0
                        }
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(ListItemText/* default */.A, {
                        primary: file.path,
                        secondary: "Type: ".concat(file.type),
                        primaryTypographyProps: {
                            variant: 'body2',
                            noWrap: true,
                            flexGrow: 1,
                            mr: 1
                        },
                        secondaryTypographyProps: {
                            variant: 'caption'
                        }
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Chip/* default */.A, {
                        label: contentOpen ? 'Hide Content' : 'Show Content',
                        size: "small",
                        onClick: toggleContent,
                        disabled: !file.content,
                        "data-testid": "MarketFileDisplay__toggleContentChip__01JFQX8K9Z__".concat(file.path)
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Collapse/* default */.A, {
                in: contentOpen,
                timeout: "auto",
                unmountOnExit: true,
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.A, {
                    sx: {
                        pl: 6,
                        pr: 2,
                        pb: 1
                    },
                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Paper/* default */.A, {
                        elevation: 1,
                        sx: {
                            p: 1,
                            maxHeight: '150px',
                            overflowY: 'auto',
                            background: '#f5f5f5'
                        },
                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.A, {
                            component: "pre",
                            variant: "caption",
                            sx: {
                                whiteSpace: 'pre-wrap',
                                wordBreak: 'break-all'
                            },
                            children: file.content || '(Content not loaded or empty)'
                        })
                    })
                })
            })
        ]
    });
};
const MarketItemDisplay = (param)=>{
    let { market } = param;
    const [open, setOpen] = (0,react.useState)(true);
    const handleClick = ()=>{
        setOpen(!open);
    };
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsxs)(ListItem/* default */.Ay, {
                button: true,
                onClick: handleClick,
                "data-testid": "MarketItemDisplay__marketItem__01JFQX8KA0__".concat(market.name),
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(ListItemText/* default */.A, {
                        primary: market.name,
                        primaryTypographyProps: {
                            fontWeight: 'bold'
                        }
                    }),
                    market.files ? open ? /*#__PURE__*/ (0,jsx_runtime.jsx)(ExpandLess/* default */.A, {}) : /*#__PURE__*/ (0,jsx_runtime.jsx)(ExpandMore/* default */.A, {}) : null
                ]
            }),
            market.files && /*#__PURE__*/ (0,jsx_runtime.jsx)(Collapse/* default */.A, {
                in: open,
                timeout: "auto",
                unmountOnExit: true,
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(List/* default */.A, {
                    component: "div",
                    disablePadding: true,
                    children: market.files.length > 0 ? market.files.map((file, index)=>// Use a more specific key including path
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(MarketFileDisplay, {
                            file: file
                        }, "".concat(market.name, "-file-").concat(index, "-").concat(file.path))) : /*#__PURE__*/ (0,jsx_runtime.jsx)(ListItem/* default */.Ay, {
                        sx: {
                            pl: 4
                        },
                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(ListItemText/* default */.A, {
                            primary: "(Waiting for file data...)",
                            primaryTypographyProps: {
                                fontStyle: 'italic',
                                variant: 'body2'
                            }
                        })
                    })
                })
            })
        ]
    });
};
const MarketListDisplay = (param)=>{
    let { marketList, isLoading } = param;
    if (isLoading) {
        return /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.A, {
            sx: {
                display: 'flex',
                justifyContent: 'center',
                my: 3
            },
            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(CircularProgress/* default */.A, {})
        });
    }
    if (!marketList || marketList.length === 0) {
        return /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.A, {
            sx: {
                mt: 2,
                fontStyle: 'italic'
            },
            children: "No markets configured or found."
        });
    }
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(Paper/* default */.A, {
        elevation: 2,
        sx: {
            mt: 2
        },
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(List/* default */.A, {
            component: "nav",
            "aria-labelledby": "nested-list-subheader",
            children: marketList.map((market)=>/*#__PURE__*/ (0,jsx_runtime.jsx)(MarketItemDisplay, {
                    market: market
                }, market.name))
        })
    });
};
// --- Main MUI Component ---
const STORE_NAMESPACE = 'listen-editing-market';
function ListenEditingMarkets() {
    const [socketAddr, setSocketAddr] = (0,react.useState)("ws://localhost:8080");
    const [marketList, setMarketList] = (0,react.useState)([]);
    const [isConnected, setIsConnected] = (0,react.useState)(false);
    const [isLoading, setIsLoading] = (0,react.useState)(true);
    const ws = (0,react.useRef)(null);
    const initialMarketNames = (0,react.useRef)([]);
    // 1. Fetch initial config from store2
    (0,react.useEffect)(()=>{
        setIsLoading(true);
        // const marketStore = store.namespace(STORE_NAMESPACE);
        const marketStore = store_utils/* storeUtils */.P.namespace(STORE_NAMESPACE);
        const storedData = marketStore.read('marketData');
        if (storedData) {
            var _storedData_marketList;
            console.log("[".concat(STORE_NAMESPACE, "] Fetched initial config:"), storedData);
            setSocketAddr(storedData.socketAddr || "ws://localhost:8080"); // Fallback if addr is null/undefined
            initialMarketNames.current = ((_storedData_marketList = storedData.marketList) === null || _storedData_marketList === void 0 ? void 0 : _storedData_marketList.map((m)=>m.name)) || [];
            setMarketList(initialMarketNames.current.map((name)=>({
                    name,
                    files: []
                })));
        } else {
            console.warn("[".concat(STORE_NAMESPACE, "] No initial config found in store2."));
            setMarketList([]);
            initialMarketNames.current = [];
        }
        setIsLoading(false);
    }, []);
    // 2. Manage WebSocket connection and communication
    (0,react.useEffect)(()=>{
        if (!socketAddr) {
            console.log("[".concat(STORE_NAMESPACE, "] No socket address."));
            setIsConnected(false);
            return;
        }
        if (ws.current) {
            ws.current.close();
        }
        console.log("[".concat(STORE_NAMESPACE, "] Attempting to connect: ").concat(socketAddr));
        ws.current = new WebSocket(socketAddr);
        setIsConnected(false);
        ws.current.onopen = ()=>{
            var _ws_current;
            console.log("[".concat(STORE_NAMESPACE, "] WebSocket connected."));
            setIsConnected(true);
            // 3. Request ALL market data from the server
            if (((_ws_current = ws.current) === null || _ws_current === void 0 ? void 0 : _ws_current.readyState) === WebSocket.OPEN) {
                console.log("[".concat(STORE_NAMESPACE, "] Requesting all market data from server."));
                const request = JSON.stringify({
                    action: 'getAllMarkets'
                });
                ws.current.send(request);
            } else {
                console.warn("[".concat(STORE_NAMESPACE, "] WebSocket not open when trying to send getAllMarkets request."));
            }
        };
        ws.current.onmessage = (event)=>{
            try {
                const message = JSON.parse(event.data.toString());
                console.log("[".concat(STORE_NAMESPACE, "] Received:"), message.type, message.marketName || '');
                setMarketList((currentList)=>{
                    // Use structuredClone for safe deep copy and modification
                    let updatedList = structuredClone(currentList);
                    // Handle response containing all market data
                    if (message.type === 'allMarketData' && Array.isArray(message.markets)) {
                        console.log("[".concat(STORE_NAMESPACE, "] Received all market data. Replacing local list."));
                        // Replace the entire list with the data from the server
                        updatedList = message.markets.map((m)=>{
                            var _m_files;
                            return {
                                name: m.name,
                                files: ((_m_files = m.files) === null || _m_files === void 0 ? void 0 : _m_files.map((f)=>({
                                        ...f,
                                        content: f.content || ''
                                    }))) || [],
                                html: m.html
                            };
                        });
                    } else if (message.type === 'marketData' && message.marketName) {
                        const marketIdx = updatedList.findIndex((m)=>m.name === message.marketName);
                        if (marketIdx !== -1) {
                            var _message_files;
                            updatedList[marketIdx].files = ((_message_files = message.files) === null || _message_files === void 0 ? void 0 : _message_files.map((f)=>({
                                    ...f,
                                    content: f.content || ''
                                }))) || []; // Ensure content is string
                            updatedList[marketIdx].html = message.html;
                        } else {
                            var _message_files1;
                            // If server sent data for a market we didn't know about (e.g., from getAllMarkets), add it
                            console.log("[".concat(STORE_NAMESPACE, "] Received marketData for a new market: ").concat(message.marketName, ". Adding to list."));
                            updatedList.push({
                                name: message.marketName,
                                files: ((_message_files1 = message.files) === null || _message_files1 === void 0 ? void 0 : _message_files1.map((f)=>({
                                        ...f,
                                        content: f.content || ''
                                    }))) || [],
                                html: message.html
                            });
                        // Sort alphabetically? (Optional)
                        // updatedList.sort((a, b) => a.name.localeCompare(b.name));
                        }
                    } else if (message.type === 'fileUpdate' && message.marketName && message.path) {
                        const marketIdx = updatedList.findIndex((m)=>m.name === message.marketName);
                        if (marketIdx !== -1) {
                            const fileIdx = updatedList[marketIdx].files.findIndex((f)=>f.path === message.path);
                            if (fileIdx !== -1) {
                                updatedList[marketIdx].files[fileIdx].content = message.content || ''; // Ensure content is string
                                updatedList[marketIdx].files[fileIdx].type = message.fileType;
                            } else {
                                console.warn("[".concat(STORE_NAMESPACE, "] FileUpdate for unknown file: ").concat(message.marketName, "/").concat(message.path));
                            // Optionally add the file if it didn't exist in the initial marketData
                            // updatedList[marketIdx].files.push({ type: message.fileType, path: message.path, content: message.content || '' });
                            }
                        } else {
                            console.warn("[".concat(STORE_NAMESPACE, "] FileUpdate for unknown market: ").concat(message.marketName));
                        }
                    } else if (message.type === 'error') {
                        console.error("[".concat(STORE_NAMESPACE, "] Server error:"), message.message);
                    // TODO: Show error feedback (e.g., Snackbar)
                    } else {
                        console.log("[".concat(STORE_NAMESPACE, "] Unhandled message type:"), message.type);
                    }
                    return updatedList;
                });
            } catch (error) {
                console.error("[".concat(STORE_NAMESPACE, "] Error processing message:"), error, event.data);
            }
        };
        ws.current.onerror = (error)=>{
            console.error("[".concat(STORE_NAMESPACE, "] WebSocket error:"), error);
            setIsConnected(false);
        };
        ws.current.onclose = (event)=>{
            console.log("[".concat(STORE_NAMESPACE, "] WebSocket disconnected. Code: ").concat(event.code, ", Reason: ").concat(event.reason));
            setIsConnected(false);
        // Decide if you want to clear data or show stale
        // setMarketList(current => current.map(m => ({...m, files: m.files.map(f => ({...f, content: '(Disconnected)'})) })));
        };
        // Cleanup
        return ()=>{
            if (ws.current) {
                console.log("[".concat(STORE_NAMESPACE, "] Closing WebSocket on unmount."));
                ws.current.onopen = null;
                ws.current.onmessage = null;
                ws.current.onerror = null;
                ws.current.onclose = null;
                ws.current.close();
                ws.current = null;
            }
        };
    }, [
        socketAddr
    ]);
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(Container/* default */.A, {
        maxWidth: "md",
        sx: {
            py: 3
        },
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.A, {
                variant: "h5",
                gutterBottom: true,
                component: "div",
                children: "Market Watcher Status"
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.A, {
                sx: {
                    display: 'flex',
                    alignItems: 'center',
                    mb: 2
                },
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Chip/* default */.A, {
                        label: isConnected ? 'Connected' : socketAddr ? 'Connecting...' : 'Disconnected',
                        color: isConnected ? 'success' : socketAddr ? 'warning' : 'error',
                        size: "small",
                        sx: {
                            mr: 2
                        }
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.A, {
                        variant: "body2",
                        color: "textSecondary",
                        children: socketAddr || 'No address configured'
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Divider/* default */.A, {
                sx: {
                    mb: 2
                }
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.A, {
                variant: "h6",
                gutterBottom: true,
                component: "div",
                children: "Watched Markets"
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(MarketListDisplay, {
                marketList: marketList,
                isLoading: isLoading && marketList.length === 0
            })
        ]
    });
}

;// ./src/pages/listen-editing-market/index.tsx





function ListenEditingMarketsPage() {
    const dispatcher = new Dispatcher/* Dispatcher */.m();
    (0,react.useEffect)(()=>{
        const socket = new WebSocket('ws://localhost:8080');
        socket.onopen = ()=>{
            console.log('Connected to the WebSocket server');
        };
        socket.onmessage = (event)=>{
            const data = JSON.parse(event.data);
            if (data.type === 'file-changed') {
                console.log("File changed: ".concat(data.file));
            // 在这里可以处理文件变更逻辑，像是刷新 iframe 或其他
            }
        };
        socket.onerror = (error)=>{
            console.error('WebSocket error:', error);
        };
        socket.onclose = ()=>{
            console.log('WebSocket connection closed');
        };
    }, []);
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(AppShell/* AppShell */.G, {
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(AppBar/* AppbarContainer */.W, {
            appbarProps: {
                title: "edit",
                back: true,
                backDispatcher: dispatcher
            },
            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(ListenEditingMarkets, {})
        })
    });
}


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, [7772,472,402,5409,8248,290,1508,636,6593,8792], () => (__webpack_exec__(16429)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ _N_E = __webpack_exports__;
/******/ }
]);
//# sourceMappingURL=listen-editing-market-c4aac53cf7c04c30.js.map