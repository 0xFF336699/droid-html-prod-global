(self["webpackChunk_N_E"] = self["webpackChunk_N_E"] || []).push([[4153],{

/***/ 48139:
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
var AppShell = __webpack_require__(65505);
// EXTERNAL MODULE: ../../libs/app/ui/src/components/appbar/AppBar.tsx + 3 modules
var AppBar = __webpack_require__(82524);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react-i18next@15.6.0_i18next@24.2.3_typescript@5.7.3__react-dom@19.1.0_react@19.1.0__react@19.1.0_typescript@5.7.3/node_modules/react-i18next/dist/es/index.js + 15 modules
var es = __webpack_require__(56137);
// EXTERNAL MODULE: ../../libs/fanfanlo/src/watcher/useProxyWatch.ts
var useProxyWatch = __webpack_require__(80502);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/Box/Box.js + 2 modules
var Box = __webpack_require__(92061);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react@19.1.0/node_modules/react/index.js
var react = __webpack_require__(94285);
// EXTERNAL MODULE: __barrel_optimize__?names=useTranslation!=!../../node_modules/.pnpm/react-i18next@15.6.0_i18next@24.2.3_typescript@5.7.3__react-dom@19.1.0_react@19.1.0__react@19.1.0_typescript@5.7.3/node_modules/react-i18next/dist/es/index.js
var dist_es = __webpack_require__(51011);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/Button/Button.js + 3 modules
var Button = __webpack_require__(20872);
// EXTERNAL MODULE: ../../node_modules/.pnpm/next@15.3.5_@babel+core@7.28.0_@playwright+test@1.57.0_babel-plugin-macros@3.1.0_react-dom@19_gjfccjsd7b6xv5ktyj7vxamu6q/node_modules/next/router.js
var next_router = __webpack_require__(1674);
;// ./src/components/android-float/window/AddWindowButton.tsx




function AddWindowButton() {
    const { t } = (0,es/* useTranslation */.Bd)('homepage/components/android-float/window/content');
    const router = (0,next_router.useRouter)();
    const handleOpen = ()=>{
        router.push('/float-window-add');
    };
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(jsx_runtime.Fragment, {
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Button/* default */.A, {
            variant: "contained",
            color: "primary",
            onClick: handleOpen,
            "data-testid": "AddWindowButton__addButton__01JG2B0081",
            "data-test-comment": "添加浮窗按钮，点击后导航到浮窗添加页面",
            children: t('AddWindowButton.add')
        })
    });
}

// EXTERNAL MODULE: ./src/components/android-float/window/data.ts
var data = __webpack_require__(74312);
// EXTERNAL MODULE: ../../libs/fanfanlo/src/watcher/useWatchUpdates.tsx
var useWatchUpdates = __webpack_require__(96332);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/Stack/Stack.js + 1 modules
var Stack = __webpack_require__(39070);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/Typography/Typography.js
var Typography = __webpack_require__(26512);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/Dialog/Dialog.js + 1 modules
var Dialog = __webpack_require__(46822);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/DialogTitle/DialogTitle.js
var DialogTitle = __webpack_require__(16880);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/DialogContent/DialogContent.js + 1 modules
var DialogContent = __webpack_require__(88149);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/DialogActions/DialogActions.js + 1 modules
var DialogActions = __webpack_require__(89701);
// EXTERNAL MODULE: ../../libs/fanfanlo/src/log/Log.ts + 1 modules
var Log = __webpack_require__(89597);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/Card/Card.js + 1 modules
var Card = __webpack_require__(81737);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/CardContent/CardContent.js + 1 modules
var CardContent = __webpack_require__(54559);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/Switch/Switch.js + 1 modules
var Switch = __webpack_require__(48230);
// EXTERNAL MODULE: ../../node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs
var clsx = __webpack_require__(3638);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+utils@6.4.9_@types+react@19.1.8_react@19.1.0/node_modules/@mui/utils/esm/composeClasses/composeClasses.js
var composeClasses = __webpack_require__(95116);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/styles/styled.js
var styled = __webpack_require__(96543);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/DefaultPropsProvider/DefaultPropsProvider.js
var DefaultPropsProvider = __webpack_require__(85042);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+utils@6.4.9_@types+react@19.1.8_react@19.1.0/node_modules/@mui/utils/esm/generateUtilityClasses/generateUtilityClasses.js
var generateUtilityClasses = __webpack_require__(92186);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+utils@6.4.9_@types+react@19.1.8_react@19.1.0/node_modules/@mui/utils/esm/generateUtilityClass/generateUtilityClass.js
var generateUtilityClass = __webpack_require__(69014);
;// ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/CardActions/cardActionsClasses.js


function getCardActionsUtilityClass(slot) {
    return (0,generateUtilityClass/* default */.Ay)('MuiCardActions', slot);
}
const cardActionsClasses = (0,generateUtilityClasses/* default */.A)('MuiCardActions', [
    'root',
    'spacing'
]);
/* harmony default export */ const CardActions_cardActionsClasses = ((/* unused pure expression or super */ null && (cardActionsClasses)));

;// ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/CardActions/CardActions.js
/* __next_internal_client_entry_do_not_use__ default auto */ 







const useUtilityClasses = (ownerState)=>{
    const { classes, disableSpacing } = ownerState;
    const slots = {
        root: [
            'root',
            !disableSpacing && 'spacing'
        ]
    };
    return (0,composeClasses/* default */.A)(slots, getCardActionsUtilityClass, classes);
};
const CardActionsRoot = (0,styled/* default */.Ay)('div', {
    name: 'MuiCardActions',
    slot: 'Root',
    overridesResolver: (props, styles)=>{
        const { ownerState } = props;
        return [
            styles.root,
            !ownerState.disableSpacing && styles.spacing
        ];
    }
})({
    display: 'flex',
    alignItems: 'center',
    padding: 8,
    variants: [
        {
            props: {
                disableSpacing: false
            },
            style: {
                '& > :not(style) ~ :not(style)': {
                    marginLeft: 8
                }
            }
        }
    ]
});
const CardActions = /*#__PURE__*/ react.forwardRef(function CardActions(inProps, ref) {
    const props = (0,DefaultPropsProvider/* useDefaultProps */.b)({
        props: inProps,
        name: 'MuiCardActions'
    });
    const { disableSpacing = false, className, ...other } = props;
    const ownerState = {
        ...props,
        disableSpacing
    };
    const classes = useUtilityClasses(ownerState);
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(CardActionsRoot, {
        className: (0,clsx/* default */.A)(classes.root, className),
        ownerState: ownerState,
        ref: ref,
        ...other
    });
});
 false ? 0 : void 0;
/* harmony default export */ const CardActions_CardActions = (CardActions);

// EXTERNAL MODULE: ../../libs/droid/android/src/android/AutoWebViewJs.ts + 1 modules
var AutoWebViewJs = __webpack_require__(68709);
// EXTERNAL MODULE: ../../libs/droid/android/src/android/win/WindowConf.ts
var WindowConf = __webpack_require__(99949);
// EXTERNAL MODULE: ../../libs/droid/android/src/android/WebViewJs.ts + 3 modules
var WebViewJs = __webpack_require__(24828);
// EXTERNAL MODULE: ../../libs/droid/android/src/android/scripts/permissions/permissionUtils.ts + 1 modules
var permissionUtils = __webpack_require__(89797);
// EXTERNAL MODULE: ../../libs/droid/android/src/android/components/Manifest.ts
var Manifest = __webpack_require__(34100);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react-hot-toast@2.5.2_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/react-hot-toast/dist/index.mjs + 1 modules
var dist = __webpack_require__(73349);
// EXTERNAL MODULE: __barrel_optimize__?names=ulid!=!../../node_modules/.pnpm/ulid@2.4.0/node_modules/ulid/dist/index.esm.js + 1 modules
var index_esm = __webpack_require__(43899);
;// ./src/components/android-float/window/android-window.ts



function openFloatWindow(windowConf) {
    var _windowConf_htmlConf;
    const url = ((_windowConf_htmlConf = windowConf.htmlConf) === null || _windowConf_htmlConf === void 0 ? void 0 : _windowConf_htmlConf.url) || 'about:blank';
    const windowId = windowConf.windowId || "float-window-".concat((0,index_esm/* ulid */.Z0)());
    checkPermission();
    function createCopy(url, windowId, callbackEventType) {
        // let windowConf:WindowConf = {
        //   htmlConf: {
        //     url: `${url}`,
        //   },
        //   windowId,
        //   floatWindowConf:{
        //     floatConf:{
        //         tag:windowId
        //     },
        //     // exitByLongTouch:1000 * 5
        //     foregroundText:"点击关闭浮窗时钟"
        //   }
        // };
        return (0,WindowConf/* createWindowConfCopy */.Sb)(windowConf);
    }
    function onAskPermissionComplete(stoped, granted, result) {
        if (!granted) {
            dist/* default */.Ay.error('有未授权的权限，所以无法运行。\n请再次点击按钮运行授权并同意赋权后才能继续执行操作。');
            return;
        }
        const eventType = (0,index_esm/* ulid */.Z0)(); // "a11yNodeSelectActionItem";
        // openHtmlShowA11yNodeInfoWindow(eventType, windowId);
        // windowConf.htmlConf?.webViewJsParams?.javaToJsDataString = JSON.stringify({ event: eventType });
        // const conf = createCopy(url, windowId, eventType);
        const confString = JSON.stringify(windowConf);
        console.log('openFloatWindow: created window conf string:', confString);
        WebViewJs/* WebViewJs */.L.instance.createWindow(confString);
    }
    function checkPermission() {
        const eventType = (0,index_esm/* ulid */.Z0)(); // "a11yNodeSelectActionItem";
        const windowId = (0,index_esm/* ulid */.Z0)();
        const res = permissionUtils/* permissionUtils */.f.askPermissions([
            Manifest/* Manifest */._8.Permission.SYSTEM_ALERT_WINDOW
        ], eventType, onAskPermissionComplete);
        if (res.isGranted) {
            onAskPermissionComplete(false, true);
        }
    }
}

;// ./src/components/android-float/window/WindowConfPreview.tsx







const fileLog = new Log/* Log */.tG(false, 'WindowConfPreview_tsx');
// WindowConfPreview - 用于列表中的快速预览
function WindowConfPreview(param) {
    let { windowConf, onEdit, onDelete } = param;
    const uiLog = fileLog.sub(false, 'WindowConfPreview_fn');
    const { t } = (0,es/* useTranslation */.Bd)('homepage/components/android-float/window/content');
    const [isOpen, setIsOpen] = (0,react.useState)(false);
    const refreshIsOpen = ()=>{
        const fnLog = uiLog.sub(false, 'refreshIsOpen_fn');
        const script = '\n    var isOpen = com.fanfanlo.lib.components.floatview.floatwindow.Window.isShow("'.concat(data/* androidFloatWindowData */.Kl.getItemId(windowConf), '");\n    isOpen;');
        const { javaResultString, errMsg } = AutoWebViewJs/* autoWebViewJs */.yx.callScript(script);
        fnLog.log('refreshIsOpen sript=', script, "errMsg=".concat(errMsg, " and result string = ").concat(javaResultString));
        if (errMsg) {
            fnLog.log('refresh is open err', errMsg);
            return;
        }
        setIsOpen(javaResultString === 'true');
    };
    (0,react.useEffect)(()=>{
        const effLog = uiLog.sub(false, 'effect_fn');
        refreshIsOpen();
        const dismissType = data/* androidFloatWindowData */.Kl.getDismissEventType(windowConf);
        const openedType = data/* androidFloatWindowData */.Kl.getOpenedEventType(windowConf);
        effLog.log('dismissType =', dismissType);
        effLog.log('openedType=', openedType);
        window.addEventListener(dismissType, onDismiss);
        window.addEventListener(openedType, onOpened);
        function onDismiss() {
            effLog.log('dismiss');
            setIsOpen(false);
        }
        function onOpened() {
            effLog.log('opened');
            setIsOpen(true);
        }
        return ()=>{
            effLog.log('remove eventlistener');
            window.removeEventListener(dismissType, onDismiss);
            window.removeEventListener(openedType, onOpened);
        };
    }, []);
    const handleToggle = (checked)=>{
        console.log('WindowConfPreview: handleToggle - checked=', checked);
        // setIsOpen(checked);
        if (checked) {
            // TODO: 改造 openFloatWindow 方法后再执行
            console.log('WindowConfPreview: handleToggle - would open window with windowId:', windowConf.windowId);
            openFloatWindow(windowConf);
        } else {
            const script = '\n      com.fanfanlo.lib.components.floatview.floatwindow.Window.exitById("'.concat(windowConf.windowId, '")');
            console.log('WindowConfPreview: handleToggle - script=', script);
            AutoWebViewJs/* autoWebViewJs */.yx.callScript(script);
        }
    };
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(Card/* default */.A, {
        sx: {
            mb: 2
        },
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsxs)(CardContent/* default */.A, {
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)(Stack/* default */.A, {
                        direction: "row",
                        spacing: 2,
                        alignItems: "center",
                        sx: {
                            mb: 2
                        },
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.A, {
                                variant: "h6",
                                sx: {
                                    fontWeight: 'bold',
                                    flex: 1
                                },
                                children: windowConf.tag
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(Switch/* default */.A, {
                                checked: isOpen,
                                onChange: (e)=>handleToggle(e.target.checked),
                                title: isOpen ? t('WindowConfPreview.stopRunning') : t('WindowConfPreview.startRunning'),
                                "data-testid": "WindowConfPreview__toggleSwitch__01JG2B0028__".concat(windowConf.windowId)
                            })
                        ]
                    }),
                    windowConf.description && /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.A, {
                        variant: "body2",
                        sx: {
                            mb: 2,
                            p: 1.5,
                            bgcolor: 'background.secondary',
                            borderRadius: 1,
                            borderLeft: '3px solid',
                            borderLeftColor: 'primary.main'
                        },
                        children: windowConf.description
                    }),
                    !windowConf.description && /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.A, {
                        variant: "body2",
                        color: "text.secondary",
                        sx: {
                            mb: 2,
                            fontStyle: 'italic'
                        },
                        children: t('WindowConfPreview.noDescription')
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)(CardActions_CardActions, {
                sx: {
                    justifyContent: 'flex-end',
                    gap: 1
                },
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Button/* default */.A, {
                        size: "small",
                        onClick: onEdit,
                        variant: "outlined",
                        "data-testid": "WindowConfPreview__editButton__01JG2B0029__".concat(windowConf.windowId),
                        children: t('WindowConfPreview.detailEdit')
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Button/* default */.A, {
                        size: "small",
                        onClick: onDelete,
                        color: "error",
                        variant: "outlined",
                        "data-testid": "WindowConfPreview__deleteButton__01JG2B0030__".concat(windowConf.windowId),
                        children: t('WindowConfPreview.delete')
                    })
                ]
            })
        ]
    });
}

;// ./src/components/android-float/window/WindowConfList.tsx







// WindowConfList - 列表组件
function WindowConfList() {
    const { t } = (0,es/* useTranslation */.Bd)('homepage/components/android-float/window/content');
    const router = (0,next_router.useRouter)();
    const [deleteDialogOpen, setDeleteDialogOpen] = (0,react.useState)(false);
    const [deleteTargetWindowId, setDeleteTargetWindowId] = (0,react.useState)(null);
    const [windowList] = (0,useWatchUpdates/* useProxyWatchUpdates */.d)(data/* androidFloatWindowData */.Kl.data.windowData, 'windowList', data/* androidFloatWindowData */.Kl.data.windowData.windowList);
    const handleEdit = (conf)=>{
        console.log('Edit window:', conf);
        // TODO: 实现编辑逻辑（打开编辑页面或对话框）
        router.push("/float-window-edit?windowId=".concat(conf.windowId));
    };
    const handleDeleteClick = (windowId)=>{
        console.log('Delete window requested:', windowId);
        setDeleteTargetWindowId(windowId);
        setDeleteDialogOpen(true);
    };
    const handleDeleteConfirm = ()=>{
        console.log('Delete window confirmed:', deleteTargetWindowId);
        if (deleteTargetWindowId) {
            const index = data/* androidFloatWindowData */.Kl.data.windowData.windowList.findIndex((w)=>w.windowId === deleteTargetWindowId);
            if (index > -1) {
                data/* androidFloatWindowData */.Kl.data.windowData.windowList.splice(index, 1);
            }
        }
        setDeleteDialogOpen(false);
        setDeleteTargetWindowId(null);
    };
    const handleDeleteCancel = ()=>{
        console.log('Delete window cancelled');
        setDeleteDialogOpen(false);
        setDeleteTargetWindowId(null);
    };
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.A, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsxs)(Stack/* default */.A, {
                spacing: 2,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.A, {
                        variant: "h5",
                        sx: {
                            fontWeight: 'bold'
                        },
                        children: t('WindowConfList.title')
                    }),
                    windowList.length === 0 ? /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.A, {
                        sx: {
                            p: 4,
                            textAlign: 'center',
                            bgcolor: 'background.secondary',
                            borderRadius: 1,
                            border: '1px dashed',
                            borderColor: 'divider'
                        },
                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.A, {
                            color: "text.secondary",
                            children: t('WindowConfList.empty')
                        })
                    }) : /*#__PURE__*/ (0,jsx_runtime.jsx)(Stack/* default */.A, {
                        spacing: 2,
                        children: windowList.map((conf)=>/*#__PURE__*/ (0,jsx_runtime.jsx)(WindowConfPreview, {
                                windowConf: conf,
                                onEdit: ()=>handleEdit(conf),
                                onDelete: ()=>handleDeleteClick(conf.windowId)
                            }, conf.windowId))
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)(Dialog/* default */.A, {
                open: deleteDialogOpen,
                onClose: handleDeleteCancel,
                "data-testid": "WindowConfList__deleteDialog__01JG2B0025",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(DialogTitle/* default */.A, {
                        children: t('WindowConfList.deleteConfirmTitle')
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(DialogContent/* default */.A, {
                        children: t('WindowConfList.deleteConfirmMessage')
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)(DialogActions/* default */.A, {
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(Button/* default */.A, {
                                onClick: handleDeleteCancel,
                                "data-testid": "WindowConfList__deleteCancelButton__01JG2B0026",
                                children: t('WindowConfList.deleteCancel')
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(Button/* default */.A, {
                                onClick: handleDeleteConfirm,
                                color: "error",
                                variant: "contained",
                                "data-testid": "WindowConfList__deleteConfirmButton__01JG2B0027",
                                children: t('WindowConfList.deleteConfirm')
                            })
                        ]
                    })
                ]
            })
        ]
    });
}

;// ./src/components/android-float/window/WindowPageContent.tsx








function WindowPageContent() {
    const { t } = (0,dist_es/* useTranslation */.Bd)('homepage/components/android-float/window/content');
    const [initialized] = (0,useProxyWatch/* useProxyWatch */.x)(data/* androidFloatWindowData */.Kl.data, 'initialized', data/* androidFloatWindowData */.Kl.data.initialized);
    (0,react.useEffect)(()=>{
        data/* androidFloatWindowData */.Kl.init();
    }, []);
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.A, {
        children: initialized && /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.A, {
                    sx: {
                        fontSize: 20,
                        fontWeight: 'bold',
                        mb: 2
                    },
                    children: t('WindowPageContent.title')
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)(AddWindowButton, {}),
                /*#__PURE__*/ (0,jsx_runtime.jsx)(WindowConfList, {})
            ]
        })
    });
}

;// ./src/pages/android-float-window/index.tsx




function AndroidFloatWindow() {
    const { t } = (0,es/* useTranslation */.Bd)('homepage/pages/android-float-window/content');
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(AppShell/* AppShell */.G, {
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(AppBar/* AppbarContainer */.W, {
            appbarProps: {
                title: t('content.title'),
                back: true
            },
            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(WindowPageContent, {})
        })
    });
}


/***/ }),

/***/ 51011:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Bd: () => (/* reexport safe */ C_work_android_droid_html_website_2024_12_node_modules_pnpm_react_i18next_15_6_0_i18next_24_2_3_typescript_5_7_3_react_dom_19_1_0_react_19_1_0_react_19_1_0_typescript_5_7_3_node_modules_react_i18next_dist_es_index_js__WEBPACK_IMPORTED_MODULE_0__.Bd)
/* harmony export */ });
/* harmony import */ var C_work_android_droid_html_website_2024_12_node_modules_pnpm_react_i18next_15_6_0_i18next_24_2_3_typescript_5_7_3_react_dom_19_1_0_react_19_1_0_react_19_1_0_typescript_5_7_3_node_modules_react_i18next_dist_es_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56137);



/***/ }),

/***/ 54559:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ CardContent_CardContent)
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/react@19.1.0/node_modules/react/index.js
var react = __webpack_require__(94285);
// EXTERNAL MODULE: ../../node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs
var clsx = __webpack_require__(3638);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+utils@6.4.9_@types+react@19.1.8_react@19.1.0/node_modules/@mui/utils/esm/composeClasses/composeClasses.js
var composeClasses = __webpack_require__(95116);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/styles/styled.js
var styled = __webpack_require__(96543);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/DefaultPropsProvider/DefaultPropsProvider.js
var DefaultPropsProvider = __webpack_require__(85042);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+utils@6.4.9_@types+react@19.1.8_react@19.1.0/node_modules/@mui/utils/esm/generateUtilityClasses/generateUtilityClasses.js
var generateUtilityClasses = __webpack_require__(92186);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+utils@6.4.9_@types+react@19.1.8_react@19.1.0/node_modules/@mui/utils/esm/generateUtilityClass/generateUtilityClass.js
var generateUtilityClass = __webpack_require__(69014);
;// ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/CardContent/cardContentClasses.js


function getCardContentUtilityClass(slot) {
    return (0,generateUtilityClass/* default */.Ay)('MuiCardContent', slot);
}
const cardContentClasses = (0,generateUtilityClasses/* default */.A)('MuiCardContent', [
    'root'
]);
/* harmony default export */ const CardContent_cardContentClasses = ((/* unused pure expression or super */ null && (cardContentClasses)));

// EXTERNAL MODULE: ../../node_modules/.pnpm/react@19.1.0/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(94513);
;// ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/CardContent/CardContent.js
/* __next_internal_client_entry_do_not_use__ default auto */ 







const useUtilityClasses = (ownerState)=>{
    const { classes } = ownerState;
    const slots = {
        root: [
            'root'
        ]
    };
    return (0,composeClasses/* default */.A)(slots, getCardContentUtilityClass, classes);
};
const CardContentRoot = (0,styled/* default */.Ay)('div', {
    name: 'MuiCardContent',
    slot: 'Root',
    overridesResolver: (props, styles)=>styles.root
})({
    padding: 16,
    '&:last-child': {
        paddingBottom: 24
    }
});
const CardContent = /*#__PURE__*/ react.forwardRef(function CardContent(inProps, ref) {
    const props = (0,DefaultPropsProvider/* useDefaultProps */.b)({
        props: inProps,
        name: 'MuiCardContent'
    });
    const { className, component = 'div', ...other } = props;
    const ownerState = {
        ...props,
        component
    };
    const classes = useUtilityClasses(ownerState);
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(CardContentRoot, {
        as: component,
        className: (0,clsx/* default */.A)(classes.root, className),
        ownerState: ownerState,
        ref: ref,
        ...other
    });
});
 false ? 0 : void 0;
/* harmony default export */ const CardContent_CardContent = (CardContent);


/***/ }),

/***/ 74312:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Kl: () => (/* binding */ androidFloatWindowData),
/* harmony export */   l1: () => (/* binding */ detectContentType),
/* harmony export */   lL: () => (/* binding */ isTagExists)
/* harmony export */ });
/* unused harmony exports isValidContent, generateDefaultWindowName */
/* harmony import */ var _droid_android__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(88504);
/* harmony import */ var _droid_android__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(99949);
/* harmony import */ var _fanfanlo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(57641);
/* harmony import */ var _fanfanlo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(31365);


const STORE_KEY_WINDOW_DATA = 'android_float_window_data';
// 正则表达式常量
const URL_REGEX = /^(https?:\/\/|ftp:\/\/|\/\/)[^\s]+$/i;
const HTML_REGEX = /<[^>]+>/;
const data = (0,_fanfanlo__WEBPACK_IMPORTED_MODULE_0__/* .toProxy */ .I$)({
    windowData: {
        windowList: []
    },
    initialized: false
});
/**
 * 检测 contentUrl 是 URL 还是 HTML
 * @param content 输入内容
 * @returns 'url' | 'html' | 'invalid'
 */ function detectContentType(content) {
    if (!content || content.trim().length === 0) {
        return 'invalid';
    }
    // 先检测是否包含 HTML 标签
    if (HTML_REGEX.test(content)) {
        return 'html';
    }
    // 检测是否为有效 URL
    if (URL_REGEX.test(content.trim())) {
        return 'url';
    }
    return 'invalid';
}
/**
 * 验证 contentUrl 是否有效（URL 或 HTML）
 * @param content 输入内容
 * @returns boolean
 */ function isValidContent(content) {
    const type = detectContentType(content);
    return type !== 'invalid';
}
/**
 * 生成默认窗口名称（当前时间戳）
 * @returns 格式为 yyyy-MM-dd HH:mm:ss 的时间字符串
 */ function generateDefaultWindowName() {
    const now = new Date();
    const year = now.getFullYear();
    const month = String(now.getMonth() + 1).padStart(2, '0');
    const date = String(now.getDate()).padStart(2, '0');
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    return "".concat(year, "-").concat(month, "-").concat(date, " ").concat(hours, ":").concat(minutes, ":").concat(seconds);
}
/**
 * 检查窗口名称（tag）是否已存在
 * @param tag 要检查的 tag
 * @param excludeWindowId 排除的 windowId（用于编辑时排除自己）
 * @returns boolean true 表示已存在
 */ function isTagExists(tag, excludeWindowId) {
    const trimmedTag = tag.trim();
    if (!trimmedTag) return false;
    return data.windowData.windowList.some((win)=>win.tag === trimmedTag && win.windowId !== excludeWindowId);
}
function init() {
    if (data.initialized) return;
    data.windowData = _droid_android__WEBPACK_IMPORTED_MODULE_1__/* .autoJsStoreUtils */ .b.read(STORE_KEY_WINDOW_DATA, {
        windowList: []
    });
    (0,_fanfanlo__WEBPACK_IMPORTED_MODULE_2__/* .watchUpdates */ .c)(data.windowData, ()=>{
        console.log('Detected changes in windowData, saving to storage...', data.windowData);
        _droid_android__WEBPACK_IMPORTED_MODULE_1__/* .autoJsStoreUtils */ .b.write(STORE_KEY_WINDOW_DATA, data.windowData);
    });
    console.log('Android Float Window data initialized:', data.windowData);
    data.initialized = true;
}
function getItemId(item) {
    return "".concat(item.windowId);
}
function getDismissEventType(item) {
    return (0,_droid_android__WEBPACK_IMPORTED_MODULE_3__/* .getWindowDismissEventType */ .$W)(getItemId(item));
    return "window-".concat(getItemId(item), "-dismiss");
}
function getOpenedEventType(item) {
    return (0,_droid_android__WEBPACK_IMPORTED_MODULE_3__/* .getWindowOpenedEventType */ .s)(getItemId(item));
    return "window-".concat(getItemId(item), "-opened");
}
function getHideEventType(item) {
    return (0,_droid_android__WEBPACK_IMPORTED_MODULE_3__/* .getWindowHideEventType */ .bH)(getItemId(item));
    return "window-".concat(getItemId(item), "-hide");
}
const androidFloatWindowData = {
    data,
    init,
    getItemId: getItemId,
    getDismissEventType,
    getOpenedEventType,
    getHideEventType
};


/***/ }),

/***/ 81737:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ Card_Card)
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/react@19.1.0/node_modules/react/index.js
var react = __webpack_require__(94285);
// EXTERNAL MODULE: ../../node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs
var clsx = __webpack_require__(3638);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+utils@6.4.9_@types+react@19.1.8_react@19.1.0/node_modules/@mui/utils/esm/composeClasses/composeClasses.js
var composeClasses = __webpack_require__(95116);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/styles/styled.js
var styled = __webpack_require__(96543);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/DefaultPropsProvider/DefaultPropsProvider.js
var DefaultPropsProvider = __webpack_require__(85042);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/Paper/Paper.js + 1 modules
var Paper = __webpack_require__(68732);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+utils@6.4.9_@types+react@19.1.8_react@19.1.0/node_modules/@mui/utils/esm/generateUtilityClasses/generateUtilityClasses.js
var generateUtilityClasses = __webpack_require__(92186);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+utils@6.4.9_@types+react@19.1.8_react@19.1.0/node_modules/@mui/utils/esm/generateUtilityClass/generateUtilityClass.js
var generateUtilityClass = __webpack_require__(69014);
;// ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/Card/cardClasses.js


function getCardUtilityClass(slot) {
    return (0,generateUtilityClass/* default */.Ay)('MuiCard', slot);
}
const cardClasses = (0,generateUtilityClasses/* default */.A)('MuiCard', [
    'root'
]);
/* harmony default export */ const Card_cardClasses = ((/* unused pure expression or super */ null && (cardClasses)));

// EXTERNAL MODULE: ../../node_modules/.pnpm/react@19.1.0/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(94513);
;// ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/Card/Card.js
/* __next_internal_client_entry_do_not_use__ default auto */ 









const useUtilityClasses = (ownerState)=>{
    const { classes } = ownerState;
    const slots = {
        root: [
            'root'
        ]
    };
    return (0,composeClasses/* default */.A)(slots, getCardUtilityClass, classes);
};
const CardRoot = (0,styled/* default */.Ay)(Paper/* default */.A, {
    name: 'MuiCard',
    slot: 'Root',
    overridesResolver: (props, styles)=>styles.root
})({
    overflow: 'hidden'
});
const Card = /*#__PURE__*/ react.forwardRef(function Card(inProps, ref) {
    const props = (0,DefaultPropsProvider/* useDefaultProps */.b)({
        props: inProps,
        name: 'MuiCard'
    });
    const { className, raised = false, ...other } = props;
    const ownerState = {
        ...props,
        raised
    };
    const classes = useUtilityClasses(ownerState);
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(CardRoot, {
        className: (0,clsx/* default */.A)(classes.root, className),
        elevation: raised ? 8 : undefined,
        ref: ref,
        ownerState: ownerState,
        ...other
    });
});
 false ? 0 : void 0;
/* harmony default export */ const Card_Card = (Card);


/***/ }),

/***/ 83322:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {


    (window.__NEXT_P = window.__NEXT_P || []).push([
      "/android-float-window",
      function () {
        return __webpack_require__(48139);
      }
    ]);
    if(false) {}
  

/***/ }),

/***/ 89797:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  f: () => (/* binding */ permissionUtils)
});

// EXTERNAL MODULE: ../../libs/droid/android/src/android/AutoWebViewJs.ts + 1 modules
var AutoWebViewJs = __webpack_require__(68709);
;// ../../libs/droid/android/src/android/scripts/permissions/permissions.intf.ts
var PermissionAskStatus = /*#__PURE__*/ function(PermissionAskStatus) {
    PermissionAskStatus["asking"] = "asking";
    PermissionAskStatus["granted"] = "granted";
    PermissionAskStatus["denied"] = "denied";
    return PermissionAskStatus;
}({});

// EXTERNAL MODULE: ../../libs/fanfanlo/src/log/Log.ts + 1 modules
var Log = __webpack_require__(89597);
;// ../../libs/droid/android/src/android/scripts/permissions/permissionUtils.ts



const fileLog = new Log/* Log */.tG(false, 'permissionUtils');
function checkPermissions(permissions) {
    const fnLog = fileLog.sub(false, 'checkPermissions_fn');
    const script = "\n    com.fanfanlo.lib.permission.PermissionRequestManager.checkPermissions(".concat(JSON.stringify(permissions), ");\n    ");
    const { javaResultData, javaResultString, errMsg } = AutoWebViewJs/* autoWebViewJs */.yx.callScript(script);
    fnLog.info('checkPermissions_fn javaResultData=', javaResultData, 'javaResultString=', javaResultString, 'errMsg=', errMsg);
    const result = {
        isGranted: (javaResultData === null || javaResultData === void 0 ? void 0 : javaResultData.isAllGranted) || false,
        status: (javaResultData === null || javaResultData === void 0 ? void 0 : javaResultData.isAllGranted) ? PermissionAskStatus.granted : PermissionAskStatus.asking,
        permissionResult: javaResultData
    };
    return result;
}
function ask(checkResult, permissions, completeEventName, askPermissionsBack) {
    const fnLog = fileLog.sub(false, 'ask_fn');
    const script = "\n    com.fanfanlo.lib.permission.PermissionRequestManager.requestMultiplePermissions(".concat(JSON.stringify(permissions), ', "').concat(completeEventName, '");\n    ');
    fnLog.info('script=', script);
    AutoWebViewJs/* autoWebViewJs */.yx.callScript(script);
    function onEvent() {
        fnLog.info('onEvent_fn');
        const checkResult = checkPermissions(permissions);
        askPermissionsBack(false, checkResult.isGranted, checkResult);
    }
    window.addEventListener(completeEventName, onEvent);
    function unsubListener() {
        fnLog.info('unsubListener_fn');
        window.removeEventListener(completeEventName, onEvent);
    }
    checkResult.unsubListener = unsubListener;
}
function askPermissions(permissions, completeEventName, askPermissionsBack, askPanelFunction) {
    const fnLog = fileLog.sub(false, "askPermission_fn");
    const checkResult = checkPermissions(permissions);
    fnLog.info('askPermission_fn checkResult=', checkResult);
    if (checkResult.isGranted) {
        fnLog.info("askPermission_fn checkResult.isGranted");
        return checkResult;
    }
    fnLog.info('askPermission_fn askPanelFunction=', !!askPanelFunction);
    if (askPanelFunction) {
        if (!checkResult.permissionResult) {
            fnLog.error('askPermission_fn checkResult.permissionResult is null');
            throw new Error('checkResult.permissionResult is null');
        }
        askPanelFunction(checkResult.permissionResult, (toAsk)=>{
            fnLog.info("askPermissions_fn askPanelFunction toAsk=", toAsk);
            if (toAsk) {
                ask(checkResult, permissions, completeEventName, askPermissionsBack);
            } else {
                askPermissionsBack(true, false);
            }
        });
    } else {
        ask(checkResult, permissions, completeEventName, askPermissionsBack);
    }
    return checkResult;
}
const permissionUtils = {
    askPermissions
};


/***/ }),

/***/ 99949:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   $W: () => (/* binding */ getWindowDismissEventType),
/* harmony export */   IL: () => (/* binding */ createDefaultWindowConf),
/* harmony export */   Sb: () => (/* binding */ createWindowConfCopy),
/* harmony export */   Wl: () => (/* binding */ createDefaultFloatWindowConf),
/* harmony export */   Ww: () => (/* binding */ FloatSidePattern),
/* harmony export */   YC: () => (/* binding */ FloatShowPattern),
/* harmony export */   ZI: () => (/* binding */ WindowType),
/* harmony export */   bH: () => (/* binding */ getWindowHideEventType),
/* harmony export */   n2: () => (/* binding */ getGravityOptions),
/* harmony export */   s: () => (/* binding */ getWindowOpenedEventType)
/* harmony export */ });
/* unused harmony exports Gravity, ContentType, getDefaulWindowConf, createDefaultWebViewJsParams, createDefaultWebViewConf, createDefaultGravityInfo, createDefaultBorderInfo, createDefaultMatchParentInfo, createDefaultHtmlConf, createDefaultFloatConf, createDefaultDialogWindowConf, createDefaultSysWindowConf */
/* harmony import */ var _barrel_optimize_names_ulid_ulid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(43899);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(80507);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);


var Gravity = /*#__PURE__*/ function(Gravity) {
    // 水平方向
    Gravity[Gravity["LEFT"] = 3] = "LEFT";
    Gravity[Gravity["RIGHT"] = 5] = "RIGHT";
    Gravity[Gravity["END"] = 8388613] = "END";
    Gravity[Gravity["START"] = 8388608] = "START";
    // 垂直方向
    Gravity[Gravity["TOP"] = 48] = "TOP";
    Gravity[Gravity["BOTTOM"] = 80] = "BOTTOM";
    // 组合方向
    Gravity[Gravity["CENTER"] = 17] = "CENTER";
    Gravity[Gravity["CENTER_HORIZONTAL"] = 1] = "CENTER_HORIZONTAL";
    Gravity[Gravity["CENTER_VERTICAL"] = 16] = "CENTER_VERTICAL";
    // 位置常量
    Gravity[Gravity["NO_GRAVITY"] = 0] = "NO_GRAVITY";
    return Gravity;
}({});
// ============ Gravity 映射 ============
/**
 * 获取所有可用的 Gravity 选项
 * 用于生成 Select 下拉框的选项
 * @param t 国际化翻译函数,用于获取 Gravity 的显示文本
 * @returns Gravity 选项数组,包含 value 和 label
 */ function getGravityOptions(t) {
    const gravityKeys = [
        3,
        5,
        8388608,
        8388613,
        48,
        80,
        17,
        1,
        16,
        0
    ];
    return gravityKeys.map((gravity)=>({
            value: gravity,
            label: t ? t("content.Gravity.".concat(Gravity[gravity])) : Gravity[gravity]
        }));
}
var FloatShowPattern = /*#__PURE__*/ function(FloatShowPattern) {
    // 仅在当前Activity显示
    FloatShowPattern["CURRENT_ACTIVITY"] = "CURRENT_ACTIVITY";
    // 一直显示
    FloatShowPattern["ALL_TIME"] = "ALL_TIME";
    // 仅前台显示
    FloatShowPattern["FOREGROUND"] = "FOREGROUND";
    return FloatShowPattern;
}({});
var FloatSidePattern = /*#__PURE__*/ function(FloatSidePattern) {
    // 默认不贴边，跟随手指移动
    FloatSidePattern["DEFAULT"] = "DEFAULT";
    // 左、右、上、下四个方向固定（一直吸附在该方向边缘，只能在该方向的边缘移动）
    FloatSidePattern["LEFT"] = "LEFT";
    FloatSidePattern["RIGHT"] = "RIGHT";
    FloatSidePattern["TOP"] = "TOP";
    FloatSidePattern["BOTTOM"] = "BOTTOM";
    // 根据手指到屏幕边缘的距离，自动选择水平方向的贴边、垂直方向的贴边、四方向的贴边
    FloatSidePattern["AUTO_HORIZONTAL"] = "AUTO_HORIZONTAL";
    FloatSidePattern["AUTO_VERTICAL"] = "AUTO_VERTICAL";
    FloatSidePattern["AUTO_SIDE"] = "AUTO_SIDE";
    // 拖拽时跟随手指移动，结束时贴边
    FloatSidePattern["RESULT_LEFT"] = "RESULT_LEFT";
    FloatSidePattern["RESULT_RIGHT"] = "RESULT_RIGHT";
    FloatSidePattern["RESULT_TOP"] = "RESULT_TOP";
    FloatSidePattern["RESULT_BOTTOM"] = "RESULT_BOTTOM";
    FloatSidePattern["RESULT_HORIZONTAL"] = "RESULT_HORIZONTAL";
    FloatSidePattern["RESULT_VERTICAL"] = "RESULT_VERTICAL";
    FloatSidePattern["RESULT_SIDE"] = "RESULT_SIDE";
    return FloatSidePattern;
}({});
// 内容类型枚举
var ContentType = /*#__PURE__*/ function(ContentType) {
    // 使用html
    ContentType["Html"] = "html";
    // 使用安卓的view。但是现在并没提供。
    ContentType["View"] = "view";
    return ContentType;
}({});
// 窗口类型枚举
var WindowType = /*#__PURE__*/ function(WindowType) {
    // 悬浮窗。像小工具、闹钟类的可以使用
    WindowType["Float"] = "float";
    // 系统。系统级别窗口
    WindowType["System"] = "system";
    // 弹窗。一般用于对话框
    WindowType["Dialog"] = "dialog";
    return WindowType;
}({});
function getDefaulWindowConf() {
    return JSON.parse(JSON.stringify(createDefaultWindowConf()));
}
function createWindowConfCopy(conf) {
    return lodash__WEBPACK_IMPORTED_MODULE_1___default().merge({}, createDefaultWindowConf(), conf);
}
// ============ createDefault 方法 ============
function createDefaultWebViewJsParams() {
    return {
        fitContentWidth: 0,
        fitContentHeight: 0,
        javaToJsDataString: ""
    };
}
function createDefaultWebViewConf() {
    return {
        backgroundColor: 0
    };
}
function createDefaultGravityInfo() {
    return {
        gravity: 8388608
    };
}
function createDefaultBorderInfo() {
    return {
        left: 0,
        top: 0,
        right: 0,
        bottom: 0
    };
}
function createDefaultMatchParentInfo() {
    return {
        widthMatch: false,
        heightMatch: false
    };
}
function createDefaultHtmlConf() {
    return {
        url: "",
        webViewJsParams: createDefaultWebViewJsParams(),
        webViewConf: createDefaultWebViewConf(),
        jsBridgeName: 'android',
        webViewJsName: 'AutoWebViewJs'
    };
}
function createDefaultFloatConf() {
    return {
        positionSaveName: '${positionSaveName}',
        draggable: true,
        showPattern: "ALL_TIME",
        hasEditText: true,
        sidePattern: "DEFAULT",
        gravity: createDefaultGravityInfo(),
        layoutChangedGravity: 8388608,
        border: createDefaultBorderInfo(),
        matchParent: createDefaultMatchParentInfo()
    };
}
function createDefaultFloatWindowConf() {
    return {
        floatConf: createDefaultFloatConf()
    };
}
function createDefaultDialogWindowConf() {
    return {
        viewLayoutParams: {},
        theme: ''
    };
}
function createDefaultSysWindowConf() {
    return {
        viewLayoutParams: {},
        listenBackKey: false
    };
}
function createDefaultWindowConf() {
    return {
        tag: '',
        contentType: "html",
        windowType: "float",
        htmlConf: createDefaultHtmlConf(),
        floatWindowConf: createDefaultFloatWindowConf(),
        windowId: (0,_barrel_optimize_names_ulid_ulid__WEBPACK_IMPORTED_MODULE_0__/* .ulid */ .Z0)(),
        forceDismissWindowTime: 0
    };
}
function getWindowDismissEventType(id) {
    return "window-".concat(id, "-dismiss");
}
function getWindowOpenedEventType(id) {
    return "window-".concat(id, "-opened");
}
function getWindowHideEventType(id) {
    return "window-".concat(id, "-hide");
}


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, [472,1172,7468,636,6593,8792], () => (__webpack_exec__(83322)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ _N_E = __webpack_exports__;
/******/ }
]);
//# sourceMappingURL=android-float-window-e5d5be373618ec8b.js.map