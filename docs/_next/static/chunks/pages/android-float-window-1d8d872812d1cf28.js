(self["webpackChunk_N_E"] = self["webpackChunk_N_E"] || []).push([[4153],{

/***/ 1984:
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
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/Box/Box.js + 2 modules
var Box = __webpack_require__(6445);
// EXTERNAL MODULE: ../../libs/fanfanlo/src/watcher/useWatchUpdates.tsx
var useWatchUpdates = __webpack_require__(30771);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/Typography/Typography.js
var Typography = __webpack_require__(67079);
// EXTERNAL MODULE: ../../libs/droid/android/src/android/scripts/store/store.ts
var store = __webpack_require__(5123);
// EXTERNAL MODULE: ../../libs/fanfanlo/src/watcher/proxyWatch.ts
var proxyWatch = __webpack_require__(88518);
// EXTERNAL MODULE: ../../libs/fanfanlo/src/watcher/watchUpdates.ts
var watchUpdates = __webpack_require__(4738);
;// ./src/components/android-float/window/data.ts


const STORE_KEY_WINDOW_DATA = 'android_float_window_data';
// 正则表达式常量
const URL_REGEX = /^(https?:\/\/|ftp:\/\/|\/\/)[^\s]+$/i;
const HTML_REGEX = /<[^>]+>/;
const data = (0,proxyWatch/* toProxy */.I$)({
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
 * @param excludeTag 排除的 tag（用于编辑时）
 * @returns boolean true 表示已存在
 */ function isTagExists(tag, excludeTag) {
    return data.windowData.windowList.some((item)=>item.tag === tag && (excludeTag ? item.tag !== excludeTag : true));
}
function init() {
    if (data.initialized) return;
    data.windowData = store/* autoJsStoreUtils */.b.read(STORE_KEY_WINDOW_DATA, {
        windowList: []
    });
    (0,watchUpdates/* watchUpdates */.c)(data.windowData, ()=>{
        console.log('Detected changes in windowData, saving to storage...', data.windowData);
        store/* autoJsStoreUtils */.b.write(STORE_KEY_WINDOW_DATA, data.windowData);
    });
    console.log('Android Float Window data initialized:', data.windowData);
    data.initialized = true;
}
function getItemTag(item) {
    return "android-float-window-".concat(item.tag, "-").concat(item.createdAt);
}
function getDismissEventType(item) {
    return "window-".concat(getItemTag(item), "-dismiss");
}
function getOpenedEventType(item) {
    return "window-".concat(getItemTag(item), "-opened");
}
function getHideEventType(item) {
    return "window-".concat(getItemTag(item), "-hide");
}
const androidFloatWindowData = {
    data,
    init,
    getItemTag,
    getDismissEventType,
    getOpenedEventType,
    getHideEventType
};

// EXTERNAL MODULE: ../../libs/fanfanlo/src/log/Log.ts + 1 modules
var Log = __webpack_require__(48891);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/Card/Card.js + 1 modules
var Card = __webpack_require__(88049);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/CardContent/CardContent.js + 1 modules
var CardContent = __webpack_require__(65371);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/Stack/Stack.js + 1 modules
var Stack = __webpack_require__(9220);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/Switch/Switch.js + 1 modules
var Switch = __webpack_require__(85156);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/IconButton/IconButton.js + 1 modules
var IconButton = __webpack_require__(65494);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/Dialog/Dialog.js + 1 modules
var Dialog = __webpack_require__(49280);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/DialogTitle/DialogTitle.js
var DialogTitle = __webpack_require__(3711);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/DialogContent/DialogContent.js + 1 modules
var DialogContent = __webpack_require__(18244);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/TextField/TextField.js + 1 modules
var TextField = __webpack_require__(38771);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/DialogActions/DialogActions.js + 1 modules
var DialogActions = __webpack_require__(69468);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/Button/Button.js + 3 modules
var Button = __webpack_require__(28669);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/Alert/Alert.js + 6 modules
var Alert = __webpack_require__(81482);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/utils/createSvgIcon.js + 2 modules
var createSvgIcon = __webpack_require__(61541);
;// ../../node_modules/.pnpm/@mui+icons-material@6.4.12_@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_re_5ewkm5t5g27pzq5tz62v6ktvti/node_modules/@mui/icons-material/esm/Delete.js
/* __next_internal_client_entry_do_not_use__ default auto */ 

/* harmony default export */ const Delete = ((0,createSvgIcon/* default */.A)(/*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
    d: "M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6zM19 4h-3.5l-1-1h-5l-1 1H5v2h14z"
}), 'Delete'));

;// ../../node_modules/.pnpm/@mui+icons-material@6.4.12_@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_re_5ewkm5t5g27pzq5tz62v6ktvti/node_modules/@mui/icons-material/esm/Edit.js
/* __next_internal_client_entry_do_not_use__ default auto */ 

/* harmony default export */ const Edit = ((0,createSvgIcon/* default */.A)(/*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
    d: "M3 17.25V21h3.75L17.81 9.94l-3.75-3.75zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34a.996.996 0 0 0-1.41 0l-1.83 1.83 3.75 3.75z"
}), 'Edit'));

// EXTERNAL MODULE: ../../node_modules/.pnpm/react@19.1.0/node_modules/react/index.js
var react = __webpack_require__(94285);
// EXTERNAL MODULE: ../../libs/droid/android/src/android/win/WindowConf.ts
var WindowConf = __webpack_require__(39800);
// EXTERNAL MODULE: ../../libs/droid/android/src/android/WebViewJs.ts + 3 modules
var WebViewJs = __webpack_require__(96113);
// EXTERNAL MODULE: ../../libs/droid/android/src/android/scripts/permissions/permissionUtils.ts + 1 modules
var permissionUtils = __webpack_require__(46112);
// EXTERNAL MODULE: ../../libs/droid/android/src/android/components/Manifest.ts
var Manifest = __webpack_require__(73703);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react-hot-toast@2.5.2_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/react-hot-toast/dist/index.mjs + 1 modules
var dist = __webpack_require__(22243);
// EXTERNAL MODULE: __barrel_optimize__?names=ulid!=!../../node_modules/.pnpm/ulid@2.4.0/node_modules/ulid/dist/index.esm.js + 1 modules
var index_esm = __webpack_require__(67131);
;// ./src/components/android-float/window/android-window.ts



function openFloatWindow(url, windowId) {
    checkPermission();
    function createCopy(url, windowId, callbackEventType) {
        let windowConf = {
            htmlConf: {
                url: "".concat(url),
                webViewJsParams: {
                    javaToJsDataString: JSON.stringify({
                        event: callbackEventType
                    })
                }
            },
            windowId,
            floatWindowConf: {
                floatConf: {
                    tag: windowId
                },
                exitByLongTouch: 1000 * 5
            }
        };
        return (0,WindowConf/* createWindowConfCopy */.Sb)(windowConf);
    }
    function onAskPermissionComplete(stoped, granted, result) {
        if (!granted) {
            dist/* default */.Ay.error('有未授权的权限，所以无法运行。\n请再次点击按钮运行授权并同意赋权后才能继续执行操作。');
            return;
        }
        const eventType = (0,index_esm/* ulid */.Z0)(); // "a11yNodeSelectActionItem";
        // openHtmlShowA11yNodeInfoWindow(eventType, windowId);
        const conf = createCopy(url, windowId, eventType);
        WebViewJs/* WebViewJs */.L.instance.createWindow(JSON.stringify(conf));
    }
    function checkPermission() {
        const eventType = (0,index_esm/* ulid */.Z0)(); // "a11yNodeSelectActionItem";
        const windowId = (0,index_esm/* ulid */.Z0)();
        const res = permissionUtils/* permissionUtils */.f.askPermissions([
            Manifest/* Manifest */._.Permission.SYSTEM_ALERT_WINDOW
        ], eventType, onAskPermissionComplete);
        if (res.isGranted) {
            onAskPermissionComplete(false, true);
        }
    }
}

// EXTERNAL MODULE: ../../libs/droid/android/src/android/AutoWebViewJs.ts + 1 modules
var AutoWebViewJs = __webpack_require__(45921);
;// ./src/components/android-float/window/WindowListItem.tsx









const fileLog = new Log/* Log */.tG(false, 'window-list-item');
function WindowListItem(param) {
    let { item, onToggle } = param;
    const uiLog = fileLog.sub(false, 'WindowListItem_ui');
    const { t } = (0,es/* useTranslation */.Bd)('homepage/components/android-float/window/content');
    const [isEditing, setIsEditing] = (0,react.useState)(false);
    const [showDeleteConfirm, setShowDeleteConfirm] = (0,react.useState)(false);
    const [isOpen, setIsOpen] = (0,react.useState)(false);
    const [editName, setEditName] = (0,react.useState)(item.tag);
    const [editContent, setEditContent] = (0,react.useState)(item.contentUrl);
    const [editWidth, setEditWidth] = (0,react.useState)(item.width);
    const [editHeight, setEditHeight] = (0,react.useState)(item.height);
    const [errors, setErrors] = (0,react.useState)({});
    const refreshIsOpen = ()=>{
        const fnLog = uiLog.sub(false, 'refreshIsOpen_fn');
        const script = '\n    var isOpen = com.fanfanlo.lib.components.floatview.floatwindow.Window.isShow("'.concat(androidFloatWindowData.getItemTag(item), '");\n    isOpen;');
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
        const dismissType = androidFloatWindowData.getDismissEventType(item);
        const openedType = androidFloatWindowData.getOpenedEventType(item);
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
    const validateEditForm = ()=>{
        const newErrors = {};
        if (!editName.trim()) {
            newErrors.name = t('AddWindow.errorEmptyName');
        } else if (isTagExists(editName.trim(), item.tag)) {
            newErrors.name = t('AddWindow.errorDuplicateName');
        }
        if (!editContent.trim()) {
            newErrors.content = t('AddWindow.errorEmptyContent');
        } else if (!isValidContent(editContent)) {
            newErrors.content = t('AddWindow.errorInvalidContent');
        }
        // 验证宽度
        if (editWidth < 0) {
            newErrors.width = t('AddWindow.errorNegativeWidth');
        }
        // 验证高度
        if (editHeight < 0) {
            newErrors.height = t('AddWindow.errorNegativeHeight');
        }
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };
    const handleSaveEdit = ()=>{
        if (!validateEditForm()) {
            return;
        }
        const itemIndex = androidFloatWindowData.data.windowData.windowList.findIndex((i)=>i.tag === item.tag);
        if (itemIndex !== -1) {
            const updatedItem = {
                ...androidFloatWindowData.data.windowData.windowList[itemIndex],
                tag: editName.trim(),
                contentUrl: editContent.trim(),
                width: editWidth,
                height: editHeight,
                updatedAt: Date.now()
            };
            androidFloatWindowData.data.windowData.windowList[itemIndex] = updatedItem;
        }
        setIsEditing(false);
        setErrors({});
    };
    const handleDelete = ()=>{
        const index = androidFloatWindowData.data.windowData.windowList.findIndex((i)=>i.tag === item.tag);
        if (index !== -1) {
            androidFloatWindowData.data.windowData.windowList.splice(index, 1);
        }
        setShowDeleteConfirm(false);
    };
    const handleToggle = (checked)=>{
        const fnLog = uiLog.sub(false, 'handleToggle_fn');
        fnLog.log('checked = ', checked);
        setIsOpen(checked);
        if (checked) {
            openFloatWindow(item.contentUrl, androidFloatWindowData.getItemTag(item));
        } else {
            const script = '\n      com.fanfanlo.lib.components.floatview.floatwindow.Window.exitById("'.concat(androidFloatWindowData.getItemTag(item), '")');
            fnLog.log('script=', script);
            AutoWebViewJs/* autoWebViewJs */.yx.callScript(script);
        }
        if (onToggle) {
            onToggle(item.tag, checked);
        }
    };
    const contentPreview = editContent.length > 50 ? editContent.substring(0, 50) + '...' : editContent;
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Card/* default */.A, {
                sx: {
                    mb: 1
                },
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(CardContent/* default */.A, {
                    children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(Stack/* default */.A, {
                        direction: "row",
                        spacing: 2,
                        alignItems: "center",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(Switch/* default */.A, {
                                checked: isOpen,
                                onChange: (e)=>handleToggle(e.target.checked)
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.A, {
                                sx: {
                                    flex: 1,
                                    minWidth: 0
                                },
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.A, {
                                        variant: "subtitle2",
                                        sx: {
                                            fontWeight: 'bold'
                                        },
                                        children: item.tag
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.A, {
                                        variant: "body2",
                                        sx: {
                                            color: '#666',
                                            mt: 0.5,
                                            overflow: 'hidden',
                                            textOverflow: 'ellipsis',
                                            whiteSpace: 'nowrap'
                                        },
                                        children: contentPreview
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)(Stack/* default */.A, {
                                direction: "row",
                                spacing: 1,
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(IconButton/* default */.A, {
                                        size: "small",
                                        onClick: ()=>{
                                            setEditName(item.tag);
                                            setEditContent(item.contentUrl);
                                            setEditWidth(item.width);
                                            setEditHeight(item.height);
                                            setErrors({});
                                            setIsEditing(true);
                                        },
                                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Edit, {
                                            fontSize: "small"
                                        })
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(IconButton/* default */.A, {
                                        size: "small",
                                        color: "error",
                                        onClick: ()=>setShowDeleteConfirm(true),
                                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Delete, {
                                            fontSize: "small"
                                        })
                                    })
                                ]
                            })
                        ]
                    })
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)(Dialog/* default */.A, {
                open: isEditing,
                onClose: ()=>setIsEditing(false),
                maxWidth: "sm",
                fullWidth: true,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(DialogTitle/* default */.A, {
                        children: t('WindowList.edit')
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(DialogContent/* default */.A, {
                        sx: {
                            pt: 2
                        },
                        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(Stack/* default */.A, {
                            spacing: 2,
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime.jsx)(TextField/* default */.A, {
                                    label: t('AddWindow.nameLabel'),
                                    value: editName,
                                    onChange: (e)=>{
                                        setEditName(e.target.value);
                                        if (errors.name) {
                                            setErrors({
                                                ...errors,
                                                name: ''
                                            });
                                        }
                                    },
                                    error: !!errors.name,
                                    helperText: errors.name || t('AddWindow.nameHelper'),
                                    fullWidth: true,
                                    size: "small",
                                    sx: {
                                        mt: '0.7rem'
                                    }
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)(TextField/* default */.A, {
                                    label: "URL / HTML",
                                    value: editContent,
                                    onChange: (e)=>{
                                        setEditContent(e.target.value);
                                        if (errors.content) {
                                            setErrors({
                                                ...errors,
                                                content: ''
                                            });
                                        }
                                    },
                                    error: !!errors.content,
                                    helperText: errors.content || t('AddWindow.contentHelper'),
                                    multiline: true,
                                    rows: 4,
                                    fullWidth: true,
                                    size: "small"
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsxs)(Stack/* default */.A, {
                                    direction: "row",
                                    spacing: 2,
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)(TextField/* default */.A, {
                                            label: t('AddWindow.widthLabel'),
                                            type: "number",
                                            value: editWidth,
                                            onChange: (e)=>{
                                                const val = Number(e.target.value);
                                                setEditWidth(val);
                                                if (errors.width) {
                                                    setErrors({
                                                        ...errors,
                                                        width: ''
                                                    });
                                                }
                                            },
                                            error: !!errors.width,
                                            helperText: errors.width || t('AddWindow.widthHelper'),
                                            fullWidth: true,
                                            size: "small",
                                            inputProps: {
                                                min: 0
                                            }
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)(TextField/* default */.A, {
                                            label: t('AddWindow.heightLabel'),
                                            type: "number",
                                            value: editHeight,
                                            onChange: (e)=>{
                                                const val = Number(e.target.value);
                                                setEditHeight(val);
                                                if (errors.height) {
                                                    setErrors({
                                                        ...errors,
                                                        height: ''
                                                    });
                                                }
                                            },
                                            error: !!errors.height,
                                            helperText: errors.height || t('AddWindow.heightHelper'),
                                            fullWidth: true,
                                            size: "small",
                                            inputProps: {
                                                min: 0
                                            }
                                        })
                                    ]
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)(DialogActions/* default */.A, {
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(Button/* default */.A, {
                                onClick: ()=>setIsEditing(false),
                                variant: "outlined",
                                color: "inherit",
                                children: t('AddWindow.cancelButton')
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(Button/* default */.A, {
                                onClick: handleSaveEdit,
                                variant: "contained",
                                color: "primary",
                                children: t('AddWindow.editSaveButton')
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)(Dialog/* default */.A, {
                open: showDeleteConfirm,
                onClose: ()=>setShowDeleteConfirm(false),
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(DialogTitle/* default */.A, {
                        children: t('WindowList.delete')
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(DialogContent/* default */.A, {
                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Alert/* default */.A, {
                            severity: "warning",
                            children: t('WindowList.deleteConfirm')
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)(DialogActions/* default */.A, {
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(Button/* default */.A, {
                                onClick: ()=>setShowDeleteConfirm(false),
                                children: t('WindowList.cancel')
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(Button/* default */.A, {
                                onClick: handleDelete,
                                color: "error",
                                variant: "contained",
                                children: t('WindowList.confirm')
                            })
                        ]
                    })
                ]
            })
        ]
    });
}

;// ./src/components/android-float/window/WindowList.tsx





function WindowList() {
    const { t } = (0,es/* useTranslation */.Bd)('homepage/components/android-float/window/content');
    // 使用 useProxyWatch 获取响应式的窗口列表数据
    const [windowList] = (0,useWatchUpdates/* useProxyWatchUpdates */.d)(androidFloatWindowData.data.windowData, 'windowList', androidFloatWindowData.data.windowData.windowList);
    console.log('WindowList render, windowList:', windowList);
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.A, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.A, {
                variant: "h6",
                sx: {
                    mb: 2,
                    fontWeight: 'bold'
                },
                children: t('WindowList.title')
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.A, {
                sx: {
                    mb: 2,
                    fontWeight: 'bold'
                },
                children: t('WindowList.description')
            }),
            windowList && windowList.length > 0 ? /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.A, {
                children: windowList.map((item)=>/*#__PURE__*/ (0,jsx_runtime.jsx)(WindowListItem, {
                        item: item
                    }, item.tag))
            }) : /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.A, {
                variant: "body2",
                sx: {
                    color: '#999',
                    textAlign: 'center',
                    py: 3
                },
                children: t('WindowList.empty')
            })
        ]
    });
}

// EXTERNAL MODULE: __barrel_optimize__?names=useTranslation!=!../../node_modules/.pnpm/react-i18next@15.6.0_i18next@24.2.3_typescript@5.7.3__react-dom@19.1.0_react@19.1.0__react@19.1.0_typescript@5.7.3/node_modules/react-i18next/dist/es/index.js
var dist_es = __webpack_require__(9825);
// EXTERNAL MODULE: ../../libs/fanfanlo/src/watcher/useProxyWatch.ts
var useProxyWatch = __webpack_require__(45007);
;// ./src/components/android-float/window/AddWindow.tsx





function AddWindow(param) {
    let { onClose } = param;
    const { t } = (0,es/* useTranslation */.Bd)('homepage/components/android-float/window/content');
    const [name, setName] = (0,react.useState)('');
    const [content, setContent] = (0,react.useState)('');
    const [width, setWidth] = (0,react.useState)(0);
    const [height, setHeight] = (0,react.useState)(0);
    const [errors, setErrors] = (0,react.useState)({});
    const validateForm = ()=>{
        const newErrors = {};
        // 验证窗口名称
        if (!name.trim()) {
            newErrors.name = t('AddWindow.errorEmptyName');
        } else if (isTagExists(name.trim())) {
            newErrors.name = t('AddWindow.errorDuplicateName');
        }
        // 验证内容
        if (!content.trim()) {
            newErrors.content = t('AddWindow.errorEmptyContent');
        } else if (!isValidContent(content)) {
            newErrors.content = t('AddWindow.errorInvalidContent');
        }
        // 验证宽度
        if (width < 0) {
            newErrors.width = t('AddWindow.errorNegativeWidth');
        }
        // 验证高度
        if (height < 0) {
            newErrors.height = t('AddWindow.errorNegativeHeight');
        }
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };
    const handleAdd = ()=>{
        if (!validateForm()) {
            return;
        }
        const now = Date.now();
        const finalName = name.trim() || generateDefaultWindowName();
        console.log('adding new window ndroidFloatWindowData.data.windowData.windowList', androidFloatWindowData.data.windowData.windowList);
        androidFloatWindowData.data.windowData.windowList.push({
            tag: finalName,
            contentUrl: content.trim(),
            width: width,
            height: height,
            createdAt: now,
            updatedAt: now
        });
        // 重置表单
        setName('');
        setContent('');
        setWidth(0);
        setHeight(0);
        setErrors({});
        // 关闭 Dialog（如果提供了 onClose 回调）
        if (onClose) {
            onClose();
        }
    };
    const handleCancel = ()=>{
        // 重置表单
        setName('');
        setContent('');
        setWidth(0);
        setHeight(0);
        setErrors({});
        // 关闭 Dialog
        if (onClose) {
            onClose();
        }
    };
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.A, {
        sx: {
            p: 2
        },
        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(Stack/* default */.A, {
            spacing: 2,
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsx)(TextField/* default */.A, {
                    label: t('AddWindow.nameLabel'),
                    value: name,
                    onChange: (e)=>{
                        setName(e.target.value);
                        if (errors.name) {
                            setErrors({
                                ...errors,
                                name: ''
                            });
                        }
                    },
                    error: !!errors.name,
                    helperText: errors.name || t('AddWindow.nameHelper'),
                    placeholder: generateDefaultWindowName(),
                    fullWidth: true,
                    size: "small",
                    sx: {
                        mt: '0.7rem'
                    }
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)(TextField/* default */.A, {
                    label: "URL / HTML",
                    value: content,
                    onChange: (e)=>{
                        setContent(e.target.value);
                        if (errors.content) {
                            setErrors({
                                ...errors,
                                content: ''
                            });
                        }
                    },
                    error: !!errors.content,
                    helperText: errors.content || t('AddWindow.contentHelper'),
                    placeholder: t('AddWindow.urlPlaceholder'),
                    multiline: true,
                    rows: 4,
                    fullWidth: true,
                    size: "small"
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsxs)(Stack/* default */.A, {
                    direction: "row",
                    spacing: 2,
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(TextField/* default */.A, {
                            label: t('AddWindow.widthLabel'),
                            type: "number",
                            value: width,
                            onChange: (e)=>{
                                const val = Number(e.target.value);
                                setWidth(val);
                                if (errors.width) {
                                    setErrors({
                                        ...errors,
                                        width: ''
                                    });
                                }
                            },
                            error: !!errors.width,
                            helperText: errors.width || t('AddWindow.widthHelper'),
                            fullWidth: true,
                            size: "small",
                            inputProps: {
                                min: 0
                            }
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(TextField/* default */.A, {
                            label: t('AddWindow.heightLabel'),
                            type: "number",
                            value: height,
                            onChange: (e)=>{
                                const val = Number(e.target.value);
                                setHeight(val);
                                if (errors.height) {
                                    setErrors({
                                        ...errors,
                                        height: ''
                                    });
                                }
                            },
                            error: !!errors.height,
                            helperText: errors.height || t('AddWindow.heightHelper'),
                            fullWidth: true,
                            size: "small",
                            inputProps: {
                                min: 0
                            }
                        })
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.A, {
                    sx: {
                        display: 'flex',
                        justifyContent: 'flex-end',
                        gap: 1
                    },
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(Button/* default */.A, {
                            variant: "outlined",
                            color: "inherit",
                            onClick: handleCancel,
                            children: t('AddWindow.cancelButton')
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(Button/* default */.A, {
                            variant: "contained",
                            color: "primary",
                            onClick: handleAdd,
                            children: t('AddWindow.addButton')
                        })
                    ]
                })
            ]
        })
    });
}

;// ./src/components/android-float/window/AddWindowButton.tsx





function AddWindowButton() {
    const { t } = (0,es/* useTranslation */.Bd)('homepage/components/android-float/window/content');
    const [open, setOpen] = (0,react.useState)(false);
    const handleOpen = ()=>{
        setOpen(true);
    };
    const handleClose = ()=>{
        setOpen(false);
    };
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Button/* default */.A, {
                variant: "contained",
                color: "primary",
                onClick: handleOpen,
                children: t('AddWindow.add')
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)(Dialog/* default */.A, {
                open: open,
                onClose: handleClose,
                maxWidth: "sm",
                fullWidth: true,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(DialogTitle/* default */.A, {
                        children: t('AddWindow.add')
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(DialogContent/* default */.A, {
                        sx: {
                            p: 0
                        },
                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(AddWindow, {
                            onClose: handleClose
                        })
                    })
                ]
            })
        ]
    });
}

;// ./src/components/android-float/window/WindowPageContent.tsx








function WindowPageContent() {
    const { t } = (0,dist_es/* useTranslation */.Bd)('homepage/components/android-float/window/content');
    const [initialized] = (0,useProxyWatch/* useProxyWatch */.x)(androidFloatWindowData.data, 'initialized', androidFloatWindowData.data.initialized);
    (0,react.useEffect)(()=>{
        androidFloatWindowData.init();
    }, []);
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.A, {
        children: initialized && /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsx)(AddWindowButton, {}),
                /*#__PURE__*/ (0,jsx_runtime.jsx)(WindowList, {})
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

/***/ 9825:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Bd: () => (/* reexport safe */ C_work_android_droid_html_website_2024_12_node_modules_pnpm_react_i18next_15_6_0_i18next_24_2_3_typescript_5_7_3_react_dom_19_1_0_react_19_1_0_react_19_1_0_typescript_5_7_3_node_modules_react_i18next_dist_es_index_js__WEBPACK_IMPORTED_MODULE_0__.Bd)
/* harmony export */ });
/* harmony import */ var C_work_android_droid_html_website_2024_12_node_modules_pnpm_react_i18next_15_6_0_i18next_24_2_3_typescript_5_7_3_react_dom_19_1_0_react_19_1_0_react_19_1_0_typescript_5_7_3_node_modules_react_i18next_dist_es_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(50279);



/***/ }),

/***/ 33228:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {


    (window.__NEXT_P = window.__NEXT_P || []).push([
      "/android-float-window",
      function () {
        return __webpack_require__(1984);
      }
    ]);
    if(false) {}
  

/***/ }),

/***/ 46112:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  f: () => (/* binding */ permissionUtils)
});

// EXTERNAL MODULE: ../../libs/droid/android/src/android/AutoWebViewJs.ts + 1 modules
var AutoWebViewJs = __webpack_require__(45921);
;// ../../libs/droid/android/src/android/scripts/permissions/permissions.intf.ts
var PermissionAskStatus = /*#__PURE__*/ function(PermissionAskStatus) {
    PermissionAskStatus["asking"] = "asking";
    PermissionAskStatus["granted"] = "granted";
    PermissionAskStatus["denied"] = "denied";
    return PermissionAskStatus;
}({});

// EXTERNAL MODULE: ../../libs/fanfanlo/src/log/Log.ts + 1 modules
var Log = __webpack_require__(48891);
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

/***/ 65371:
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
var styled = __webpack_require__(64624);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/DefaultPropsProvider/DefaultPropsProvider.js
var DefaultPropsProvider = __webpack_require__(79209);
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

/***/ 88049:
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
var styled = __webpack_require__(64624);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/DefaultPropsProvider/DefaultPropsProvider.js
var DefaultPropsProvider = __webpack_require__(79209);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/Paper/Paper.js + 1 modules
var Paper = __webpack_require__(59864);
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
/******/ __webpack_require__.O(0, [5352,1161,9151,3390,7313,8771,1482,3577,5881,307,636,6593,8792], () => (__webpack_exec__(33228)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ _N_E = __webpack_exports__;
/******/ }
]);
//# sourceMappingURL=android-float-window-1d8d872812d1cf28.js.map