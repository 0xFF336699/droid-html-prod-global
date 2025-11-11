(self["webpackChunk_N_E"] = self["webpackChunk_N_E"] || []).push([[2808],{

/***/ 4945:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ ExamplesScriptsPage)
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/react@19.1.0/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(94513);
// EXTERNAL MODULE: ../../libs/app/ui/src/components/app/AppShell.tsx + 2 modules
var AppShell = __webpack_require__(20939);
// EXTERNAL MODULE: ../../libs/app/ui/src/components/tabbar/Tabbar.tsx
var Tabbar = __webpack_require__(93589);
// EXTERNAL MODULE: ./src/components/navbar/NavBar.tsx
var NavBar = __webpack_require__(32534);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react-i18next@15.6.0_i18next@24.2.3_typescript@5.7.3__react-dom@19.1.0_react@19.1.0__react@19.1.0_typescript@5.7.3/node_modules/react-i18next/dist/es/index.js + 15 modules
var es = __webpack_require__(50279);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/Box/Box.js + 2 modules
var Box = __webpack_require__(6445);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/Alert/Alert.js + 5 modules
var Alert = __webpack_require__(85629);
// EXTERNAL MODULE: ../../libs/droid/android/src/android/AutoWebViewJs.ts + 1 modules
var AutoWebViewJs = __webpack_require__(45921);
// EXTERNAL MODULE: ../../libs/fanfanlo/src/i18n/fanfanloI18n.ts
var fanfanloI18n = __webpack_require__(95414);
// EXTERNAL MODULE: ../../libs/fanfanlo/src/watcher/proxyWatch.ts
var proxyWatch = __webpack_require__(88518);
// EXTERNAL MODULE: ../../libs/fanfanlo/src/iframe/IFrameReactContainer.tsx + 1 modules
var IFrameReactContainer = __webpack_require__(6955);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/Typography/Typography.js
var Typography = __webpack_require__(67079);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/Stack/Stack.js + 1 modules
var Stack = __webpack_require__(9220);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/CircularProgress/CircularProgress.js + 1 modules
var CircularProgress = __webpack_require__(95746);
// EXTERNAL MODULE: ./src/components/script-editor/data/context.tsx
var context = __webpack_require__(71647);
// EXTERNAL MODULE: ./src/components/script-editor/data/script-editor.data.intf.ts
var script_editor_data_intf = __webpack_require__(84754);
// EXTERNAL MODULE: ./src/markets/market-html-utils.ts
var market_html_utils = __webpack_require__(40682);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react@19.1.0/node_modules/react/index.js
var react = __webpack_require__(94285);
// EXTERNAL MODULE: ./src/components/script-editor/content/useDroidDocsScripts.ts + 1 modules
var useDroidDocsScripts = __webpack_require__(98817);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/Button/Button.js + 3 modules
var Button = __webpack_require__(28669);
;// ./src/components/script-editor/content/v2/ScriptControlBar.tsx



// 日志前缀
const LOG_PREFIX = '[ScriptControlBar]';
/**
 * 脚本控制按钮栏组件
 * 包含运行按钮等控制按钮
 */ function ScriptControlBar(param) {
    let { scriptData, onRun } = param;
    console.log("".concat(LOG_PREFIX, " 组件初始化, scriptData 是否存在: ").concat(!!scriptData));
    const { t } = (0,es/* useTranslation */.Bd)('homepage/components/script-editor/content/v2/content');
    const handleRun = ()=>{
        console.log("".concat(LOG_PREFIX, " 运行按钮被点击"));
        if (!scriptData) {
            console.log("".concat(LOG_PREFIX, " scriptData 为空, 无法运行"));
            return;
        } else {
            console.log("".concat(LOG_PREFIX, " scriptData 存在, 准备运行脚本"));
        }
        if (!scriptData.script || scriptData.script.trim() === '') {
            console.log("".concat(LOG_PREFIX, " 脚本内容为空, 无法运行"));
            return;
        } else {
            console.log("".concat(LOG_PREFIX, " 脚本内容长度: ").concat(scriptData.script.length));
        }
        onRun();
        console.log("".concat(LOG_PREFIX, " onRun 回调已执行"));
    };
    const isDisabled = !scriptData || !scriptData.script || scriptData.script.trim() === '';
    console.log("".concat(LOG_PREFIX, " 运行按钮是否禁用: ").concat(isDisabled));
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.A, {
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Button/* default */.A, {
            variant: "contained",
            onClick: handleRun,
            disabled: isDisabled,
            children: t('ScriptControlBar.run')
        })
    });
}

// EXTERNAL MODULE: ../../libs/fanfanlo/src/watcher/useProxyWatch.ts
var useProxyWatch = __webpack_require__(45007);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/TextareaAutosize/TextareaAutosize.js
var TextareaAutosize = __webpack_require__(90333);
;// ./src/components/script-editor/content/v2/ScriptEditor.tsx



// 日志前缀
const ScriptEditor_LOG_PREFIX = '[ScriptEditor]';
/**
 * 脚本编辑器组件
 * 编辑 IScript 对象的 script 字段
 */ function ScriptEditor(param) {
    let { scriptData } = param;
    console.log("".concat(ScriptEditor_LOG_PREFIX, " 组件初始化"));
    const { t } = (0,es/* useTranslation */.Bd)('homepage/components/script-editor/content/v2/content');
    // 监听 scriptData.script 的变化
    const [script] = (0,useProxyWatch/* useProxyWatch */.x)(scriptData, 'script', scriptData.script);
    console.log("".concat(ScriptEditor_LOG_PREFIX, " script 长度: ").concat(script.length));
    const handleChange = (e)=>{
        const newValue = e.target.value;
        console.log("".concat(ScriptEditor_LOG_PREFIX, " 脚本内容变化, 新长度: ").concat(newValue.length));
        scriptData.script = newValue;
        console.log("".concat(ScriptEditor_LOG_PREFIX, " 脚本内容已更新"));
    };
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.A, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.A, {
                variant: "body2",
                sx: {
                    mb: 1,
                    fontWeight: 500
                },
                children: t('ScriptEditor.label')
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(TextareaAutosize/* default */.A, {
                value: script,
                onChange: handleChange,
                style: {
                    width: '100%',
                    minHeight: '300px',
                    padding: '8px',
                    fontFamily: 'monospace',
                    fontSize: '14px',
                    border: '1px solid #ccc',
                    borderRadius: '4px'
                }
            })
        ]
    });
}

// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+icons-material@6.4.12_@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_re_5ewkm5t5g27pzq5tz62v6ktvti/node_modules/@mui/icons-material/esm/Close.js
var Close = __webpack_require__(29864);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/List/List.js + 1 modules
var List = __webpack_require__(90535);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/ListItem/ListItem.js + 3 modules
var ListItem = __webpack_require__(60889);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/ListItemButton/ListItemButton.js
var ListItemButton = __webpack_require__(48863);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/ListItemText/ListItemText.js
var ListItemText = __webpack_require__(63337);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/Dialog/Dialog.js + 1 modules
var Dialog = __webpack_require__(49280);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/DialogTitle/DialogTitle.js
var DialogTitle = __webpack_require__(3711);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/IconButton/IconButton.js + 1 modules
var IconButton = __webpack_require__(65494);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/DialogContent/DialogContent.js + 1 modules
var DialogContent = __webpack_require__(18244);
;// ./src/components/script-editor/content/v2/ScriptExamplePopup.tsx




// 日志前缀
const ScriptExamplePopup_LOG_PREFIX = '[ScriptExamplePopup]';
/**
 * 脚本示例选择弹窗组件
 * 显示分组的脚本示例列表
 */ function ScriptExamplePopup(param) {
    let { open, onClose, examplesMap, onSelectScript } = param;
    console.log("".concat(ScriptExamplePopup_LOG_PREFIX, " 组件初始化, open: ").concat(open));
    const { t } = (0,es/* useTranslation */.Bd)('homepage/components/script-editor/content/v2/content');
    const handleClose = ()=>{
        console.log("".concat(ScriptExamplePopup_LOG_PREFIX, " 关闭按钮被点击"));
        onClose();
    };
    const handleSelectScript = (script)=>{
        console.log("".concat(ScriptExamplePopup_LOG_PREFIX, " 选中脚本: ").concat(script.name, ", path: ").concat(script.path));
        onSelectScript(script);
    };
    // 渲染分组
    const renderGroup = (level)=>{
        if (!examplesMap) {
            console.log("".concat(ScriptExamplePopup_LOG_PREFIX, " examplesMap 为空, 跳过渲染"));
            return null;
        }
        const scripts = examplesMap[level];
        console.log("".concat(ScriptExamplePopup_LOG_PREFIX, " 渲染分组: ").concat(level, ", 脚本数量: ").concat(scripts.length));
        if (scripts.length === 0) {
            console.log("".concat(ScriptExamplePopup_LOG_PREFIX, " 分组 ").concat(level, " 没有脚本, 跳过渲染"));
            return null;
        }
        return /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.A, {
            sx: {
                mb: 3
            },
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.A, {
                    variant: "subtitle2",
                    color: "primary",
                    sx: {
                        mb: 1,
                        fontWeight: 'bold',
                        px: 2
                    },
                    children: t("ScriptExamplePopup.levels.".concat(level))
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)(List/* default */.A, {
                    children: scripts.map((script)=>{
                        console.log("".concat(ScriptExamplePopup_LOG_PREFIX, " 渲染脚本项: ").concat(script.name));
                        return /*#__PURE__*/ (0,jsx_runtime.jsx)(ListItem/* default */.Ay, {
                            disablePadding: true,
                            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(ListItemButton/* default */.A, {
                                onClick: ()=>handleSelectScript(script),
                                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(ListItemText/* default */.A, {
                                    primary: script.name,
                                    secondary: script.desc
                                })
                            })
                        }, script.path);
                    })
                })
            ]
        }, level);
    };
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(Dialog/* default */.A, {
        open: open,
        onClose: handleClose,
        maxWidth: "md",
        fullWidth: true,
        sx: {
            '& .MuiDialog-paper': {
                minHeight: '60vh',
                maxHeight: '80vh'
            }
        },
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsxs)(DialogTitle/* default */.A, {
                sx: {
                    m: 0,
                    p: 2,
                    pr: 6
                },
                children: [
                    t('ScriptExamplePopup.title'),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(IconButton/* default */.A, {
                        "aria-label": "close",
                        onClick: handleClose,
                        sx: {
                            position: 'absolute',
                            right: 8,
                            top: 8,
                            color: (theme)=>theme.palette.grey[500]
                        },
                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Close/* default */.A, {})
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)(DialogContent/* default */.A, {
                dividers: true,
                children: [
                    renderGroup('beginner'),
                    renderGroup('intermediate'),
                    renderGroup('advanced')
                ]
            })
        ]
    });
}

;// ./src/components/script-editor/content/v2/ScriptExampleSelectorButton.tsx





// 日志前缀
const ScriptExampleSelectorButton_LOG_PREFIX = '[ScriptExampleSelectorButton]';
/**
 * 脚本示例选择按钮组件
 * 点击按钮弹出示例选择弹窗
 */ function ScriptExampleSelectorButton(param) {
    let { examplesMap, onSelectScript } = param;
    console.log("".concat(ScriptExampleSelectorButton_LOG_PREFIX, " 组件初始化"));
    const { t } = (0,es/* useTranslation */.Bd)('homepage/components/script-editor/content/v2/content');
    const [open, setOpen] = (0,react.useState)(false);
    const handleOpen = ()=>{
        console.log("".concat(ScriptExampleSelectorButton_LOG_PREFIX, " 按钮被点击, 准备打开弹窗"));
        setOpen(true);
        console.log("".concat(ScriptExampleSelectorButton_LOG_PREFIX, " 弹窗状态已设置为 true"));
    };
    const handleClose = ()=>{
        console.log("".concat(ScriptExampleSelectorButton_LOG_PREFIX, " 准备关闭弹窗"));
        setOpen(false);
        console.log("".concat(ScriptExampleSelectorButton_LOG_PREFIX, " 弹窗状态已设置为 false"));
    };
    const handleSelect = (script)=>{
        console.log("".concat(ScriptExampleSelectorButton_LOG_PREFIX, " 选中脚本: ").concat(script.name));
        onSelectScript(script);
        handleClose();
    };
    const isDisabled = !examplesMap;
    console.log("".concat(ScriptExampleSelectorButton_LOG_PREFIX, " 按钮是否禁用: ").concat(isDisabled));
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Button/* default */.A, {
                variant: "contained",
                onClick: handleOpen,
                disabled: isDisabled,
                children: t('ScriptExampleSelectorButton.selectExample')
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(ScriptExamplePopup, {
                open: open,
                onClose: handleClose,
                examplesMap: examplesMap,
                onSelectScript: handleSelect
            })
        ]
    });
}

// EXTERNAL MODULE: ../../libs/fanfanlo/src/watcher/useWatchUpdates.tsx
var useWatchUpdates = __webpack_require__(30771);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/Chip/Chip.js + 2 modules
var Chip = __webpack_require__(688);
// EXTERNAL MODULE: ./src/components/permissions/android-permissions/AndroidPermissionsButton.tsx + 2 modules
var AndroidPermissionsButton = __webpack_require__(50191);
;// ./src/components/script-editor/content/v2/ScriptPermissionsEditor.tsx





// 日志前缀
const ScriptPermissionsEditor_LOG_PREFIX = '[ScriptPermissionsEditor]';
/**
 * 脚本权限编辑器组件
 * 编辑 IScript 对象的 permissions 字段
 */ function ScriptPermissionsEditor(param) {
    let { scriptData } = param;
    console.log("".concat(ScriptPermissionsEditor_LOG_PREFIX, " 组件初始化"));
    const { t } = (0,es/* useTranslation */.Bd)('homepage/components/script-editor/content/v2/content');
    // 确保 permissions 数组存在
    if (!scriptData.permissions) {
        console.log("".concat(ScriptPermissionsEditor_LOG_PREFIX, " scriptData.permissions 为 undefined, 初始化为空数组"));
        scriptData.permissions = [];
    } else {
        console.log("".concat(ScriptPermissionsEditor_LOG_PREFIX, " scriptData.permissions 已存在, 长度: ").concat(scriptData.permissions.length));
    }
    // 创建 permissionsProps 对象并使用 toProxy 包装
    const [permissionsProps] = (0,react.useState)(()=>{
        console.log("".concat(ScriptPermissionsEditor_LOG_PREFIX, " 创建 permissionsProps 对象"));
        const props = (0,proxyWatch/* toProxy */.I$)({
            permissions: scriptData.permissions
        });
        console.log("".concat(ScriptPermissionsEditor_LOG_PREFIX, " permissionsProps 创建完成"));
        return props;
    });
    // 监听 permissions 数组的变化
    const [permissions] = (0,useWatchUpdates/* useProxyWatchUpdates */.d)(permissionsProps, 'permissions', permissionsProps.permissions);
    console.log("".concat(ScriptPermissionsEditor_LOG_PREFIX, " 当前权限数量: ").concat(permissions.length));
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.A, {
        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(Stack/* default */.A, {
            direction: "row",
            spacing: 2,
            alignItems: "center",
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsxs)(Typography/* default */.A, {
                    variant: "body2",
                    sx: {
                        fontWeight: 500
                    },
                    children: [
                        t('ScriptPermissionsEditor.label'),
                        ":"
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)(Chip/* default */.A, {
                    label: "".concat(permissions.length, " ").concat(t('ScriptPermissionsEditor.permissionsCount')),
                    size: "small",
                    color: permissions.length > 0 ? 'primary' : 'default'
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)(AndroidPermissionsButton/* AndroidPermissionsButton */.S, {
                    permissionsProps: permissionsProps
                })
            ]
        })
    });
}

;// ./src/components/script-editor/content/v2/ScriptEditorContentV2.tsx













// 日志前缀
const ScriptEditorContentV2_LOG_PREFIX = '[ScriptEditorContentV2]';
function ScriptEditorContentV2(param) {
    let { ns, initialCategory, initialName, initialScript } = param;
    console.log("".concat(ScriptEditorContentV2_LOG_PREFIX, " 组件初始化, ns: ").concat(ns, ", initialCategory: ").concat(initialCategory, ", initialName: ").concat(initialName, ", initialScript: ").concat(initialScript));
    const lang = fanfanloI18n/* fanfanloI18n */._.language || 'en';
    console.log("".concat(ScriptEditorContentV2_LOG_PREFIX, " 当前语言: ").concat(lang));
    const { t } = (0,es/* useTranslation */.Bd)('homepage/components/script-editor/content/v2/content');
    // 使用 droid-docs API 获取脚本数据
    const { examplesMap, isLoadingMap, mapError, scriptError } = (0,useDroidDocsScripts/* useDroidDocsScripts */.b)(lang);
    console.log("".concat(ScriptEditorContentV2_LOG_PREFIX, " examplesMap 是否加载: ").concat(!!examplesMap, ", isLoadingMap: ").concat(isLoadingMap));
    // 使用 toProxy 管理 IScript 状态
    const [scriptData, setScriptData] = (0,react.useState)(null);
    console.log("".concat(ScriptEditorContentV2_LOG_PREFIX, " scriptData 是否存在: ").concat(!!scriptData));
    // 运行脚本状态
    const [runScript, setRunScript] = (0,react.useState)('');
    console.log("".concat(ScriptEditorContentV2_LOG_PREFIX, " runScript 状态: ").concat(runScript ? '有内容' : '空'));
    // 创建空的 IScript 对象
    const createEmptyScript = ()=>{
        console.log("".concat(ScriptEditorContentV2_LOG_PREFIX, " 创建空的 IScript 对象"));
        const emptyScript = {
            name: '',
            script: '',
            desc: '',
            path: '',
            version: 1,
            permissions: []
        };
        console.log("".concat(ScriptEditorContentV2_LOG_PREFIX, " 空 IScript 对象创建完成"));
        return (0,proxyWatch/* toProxy */.I$)(emptyScript);
    };
    // 根据 initialCategory 和 initialName 查找并加载脚本
    (0,react.useEffect)(()=>{
        var _scriptCopy_permissions;
        console.log("".concat(ScriptEditorContentV2_LOG_PREFIX, " useEffect 触发, initialCategory: ").concat(initialCategory, ", initialName: ").concat(initialName, ", examplesMap 是否存在: ").concat(!!examplesMap));
        // 如果没有初始化参数,创建空的 IScript
        if (!initialCategory || !initialName) {
            console.log("".concat(ScriptEditorContentV2_LOG_PREFIX, " 没有初始化参数, 创建空的 IScript"));
            if (!scriptData) {
                console.log("".concat(ScriptEditorContentV2_LOG_PREFIX, " scriptData 为空, 执行创建"));
                const empty = createEmptyScript();
                setScriptData(empty);
                console.log("".concat(ScriptEditorContentV2_LOG_PREFIX, " 空 IScript 已设置"));
            } else {
                console.log("".concat(ScriptEditorContentV2_LOG_PREFIX, " scriptData 已存在, 跳过创建"));
            }
            return;
        }
        // 等待 examplesMap 加载
        if (!examplesMap) {
            console.log("".concat(ScriptEditorContentV2_LOG_PREFIX, " examplesMap 未加载, 等待..."));
            return;
        }
        console.log("".concat(ScriptEditorContentV2_LOG_PREFIX, " 开始查找脚本: ").concat(initialCategory, "/").concat(initialName));
        // 查找目标脚本
        const levelScripts = examplesMap[initialCategory];
        if (!levelScripts) {
            console.error("".concat(ScriptEditorContentV2_LOG_PREFIX, " 未找到分类: ").concat(initialCategory));
            return;
        }
        console.log("".concat(ScriptEditorContentV2_LOG_PREFIX, " 在 ").concat(initialCategory, " 中查找, 共有 ").concat(levelScripts.length, " 个脚本"));
        const targetScript = levelScripts.find((s)=>s.path === "".concat(initialCategory, "/").concat(initialName));
        if (!targetScript) {
            console.error("".concat(ScriptEditorContentV2_LOG_PREFIX, " 未找到脚本: ").concat(initialCategory, "/").concat(initialName));
            console.log("".concat(ScriptEditorContentV2_LOG_PREFIX, " 可用的脚本:"), levelScripts.map((s)=>s.path));
            return;
        }
        console.log("".concat(ScriptEditorContentV2_LOG_PREFIX, " 找到目标脚本: ").concat(targetScript.name));
        // 创建 IScript 对象的副本
        const scriptCopy = {
            ...targetScript,
            permissions: targetScript.permissions ? [
                ...targetScript.permissions
            ] : []
        };
        console.log("".concat(ScriptEditorContentV2_LOG_PREFIX, " 脚本副本创建完成, permissions 数量: ").concat(((_scriptCopy_permissions = scriptCopy.permissions) === null || _scriptCopy_permissions === void 0 ? void 0 : _scriptCopy_permissions.length) || 0));
        const proxiedScript = (0,proxyWatch/* toProxy */.I$)(scriptCopy);
        console.log("".concat(ScriptEditorContentV2_LOG_PREFIX, " 脚本已使用 toProxy 包装"));
        setScriptData(proxiedScript);
        console.log("".concat(ScriptEditorContentV2_LOG_PREFIX, " scriptData 已设置"));
        // 如果 initialScript 为 false,清空脚本内容
        if (initialScript === false) {
            console.log("".concat(ScriptEditorContentV2_LOG_PREFIX, " initialScript 为 false, 清空脚本内容"));
            proxiedScript.script = '';
            console.log("".concat(ScriptEditorContentV2_LOG_PREFIX, " 脚本内容已清空"));
        } else {
            console.log("".concat(ScriptEditorContentV2_LOG_PREFIX, " 保持脚本内容不变"));
        }
    }, [
        initialCategory,
        initialName,
        initialScript,
        examplesMap
    ]);
    // 使用 useRef 标记是否已加载,防止重复执行 loadScrptEditorData
    const hasLoadedRef = (0,react.useRef)(false);
    // 创建稳定的加载函数引用
    const loadData = (0,react.useCallback)(async ()=>{
        console.log("".concat(ScriptEditorContentV2_LOG_PREFIX, " loadData 函数被调用, hasLoaded: ").concat(hasLoadedRef.current));
        if (hasLoadedRef.current) {
            console.log("".concat(ScriptEditorContentV2_LOG_PREFIX, " 数据已加载过, 跳过重新加载"));
            return Promise.resolve(null);
        }
        console.log("".concat(ScriptEditorContentV2_LOG_PREFIX, " 开始加载数据, ns: ").concat(ns));
        hasLoadedRef.current = true;
        try {
            const result = await (0,script_editor_data_intf/* loadScrptEditorData */.M_)(ns);
            console.log("".concat(ScriptEditorContentV2_LOG_PREFIX, " 数据加载完成"), result);
            return result;
        } catch (error) {
            console.error("".concat(ScriptEditorContentV2_LOG_PREFIX, " 数据加载失败"), error);
            hasLoadedRef.current = false;
            throw error;
        }
    }, [
        ns
    ]);
    // 使用 useRef 确保 Promise 只创建一次,避免重新渲染时创建新 Promise
    const loadDataPromiseRef = (0,react.useRef)(null);
    if (loadDataPromiseRef.current === null) {
        console.log("".concat(ScriptEditorContentV2_LOG_PREFIX, " 首次创建 loadDataPromise"));
        loadDataPromiseRef.current = loadData();
    } else {
        console.log("".concat(ScriptEditorContentV2_LOG_PREFIX, " 复用已有的 loadDataPromise"));
    }
    const loadDataPromise = loadDataPromiseRef.current;
    // 处理选择示例脚本
    const handleSelectScript = (script)=>{
        var _scriptCopy_permissions;
        console.log("".concat(ScriptEditorContentV2_LOG_PREFIX, " 选择示例脚本: ").concat(script.name));
        // 创建脚本的副本
        const scriptCopy = {
            ...script,
            permissions: script.permissions ? [
                ...script.permissions
            ] : []
        };
        console.log("".concat(ScriptEditorContentV2_LOG_PREFIX, " 脚本副本创建完成, permissions 数量: ").concat(((_scriptCopy_permissions = scriptCopy.permissions) === null || _scriptCopy_permissions === void 0 ? void 0 : _scriptCopy_permissions.length) || 0));
        const proxiedScript = (0,proxyWatch/* toProxy */.I$)(scriptCopy);
        console.log("".concat(ScriptEditorContentV2_LOG_PREFIX, " 脚本已使用 toProxy 包装"));
        setScriptData(proxiedScript);
        console.log("".concat(ScriptEditorContentV2_LOG_PREFIX, " scriptData 已更新"));
    };
    // 处理运行脚本
    const handleRun = ()=>{
        console.log("".concat(ScriptEditorContentV2_LOG_PREFIX, " 处理运行脚本"));
        if (!scriptData) {
            console.log("".concat(ScriptEditorContentV2_LOG_PREFIX, " scriptData 为空, 无法运行"));
            return;
        }
        console.log("".concat(ScriptEditorContentV2_LOG_PREFIX, " 执行脚本, 名称: ").concat(scriptData.name, ", 脚本长度: ").concat(scriptData.script.length));
        const isLoadHtml = false;
        if (isLoadHtml) {
            console.log("".concat(ScriptEditorContentV2_LOG_PREFIX, " 使用 IFrameReactContainer 运行"));
            setRunScript('');
            setTimeout(()=>setRunScript(scriptData.script), 300);
        } else {
            console.log("".concat(ScriptEditorContentV2_LOG_PREFIX, " 使用 autoWebViewJs.callScript 运行"));
            AutoWebViewJs/* autoWebViewJs */.yx.callScript(scriptData.script);
        }
        console.log("".concat(ScriptEditorContentV2_LOG_PREFIX, " 脚本运行完成"));
    };
    console.log("".concat(ScriptEditorContentV2_LOG_PREFIX, " 组件渲染"));
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(context/* ScriptEditorContextLoader */.RA, {
        value: loadDataPromise,
        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.A, {
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.A, {
                    variant: "h5",
                    children: t(ns ? 'ScriptEditorContentV2.title.edit' : 'ScriptEditorContentV2.title.create')
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsxs)(Stack/* default */.A, {
                    direction: "column",
                    spacing: 2,
                    sx: {
                        mt: 2
                    },
                    children: [
                        isLoadingMap && /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.A, {
                            sx: {
                                display: 'flex',
                                alignItems: 'center',
                                gap: 1
                            },
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime.jsx)(CircularProgress/* default */.A, {
                                    size: 24
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.A, {
                                    variant: "body2",
                                    children: t('ScriptEditorContentV2.loading')
                                })
                            ]
                        }),
                        mapError && /*#__PURE__*/ (0,jsx_runtime.jsxs)(Alert/* default */.A, {
                            severity: "error",
                            children: [
                                t('ScriptEditorContentV2.mapError'),
                                ": ",
                                mapError.message
                            ]
                        }),
                        scriptError && /*#__PURE__*/ (0,jsx_runtime.jsxs)(Alert/* default */.A, {
                            severity: "error",
                            children: [
                                t('ScriptEditorContentV2.scriptError'),
                                ": ",
                                scriptError.message
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.A, {
                            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(ScriptExampleSelectorButton, {
                                examplesMap: examplesMap,
                                onSelectScript: handleSelectScript
                            })
                        }),
                        scriptData && /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.A, {
                            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(ScriptPermissionsEditor, {
                                scriptData: scriptData
                            })
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.A, {
                            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(ScriptControlBar, {
                                scriptData: scriptData,
                                onRun: handleRun
                            })
                        }),
                        scriptData && /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.A, {
                            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(ScriptEditor, {
                                scriptData: scriptData
                            }, scriptData.path || 'default')
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.A, {
                            children: runScript && /*#__PURE__*/ (0,jsx_runtime.jsx)(IFrameReactContainer/* IFrameReactContainer */.T, {
                                content: runScript,
                                urlAsContent: true,
                                htmlBuilder: market_html_utils/* marketHtmlUtils */.P.mergeHtml
                            })
                        })
                    ]
                })
            ]
        })
    });
}

// EXTERNAL MODULE: ../../node_modules/.pnpm/next@15.3.5_@babel+core@7.28.0_babel-plugin-macros@3.1.0_react-dom@19.1.0_react@19.1.0__react@19.1.0_sass@1.89.2/node_modules/next/router.js
var next_router = __webpack_require__(75640);
// EXTERNAL MODULE: ../../libs/fanfanlo/src/log/Log.ts + 1 modules
var Log = __webpack_require__(48891);
;// ./src/components/page/examples/scripts/ExamplesScriptsContent.tsx







const fileLog = new Log/* Log */.tG(false, 'ExamplesScriptsContent_f');
/**
 * 处理 Deep Link 路由的脚本示例页面
 *
 * Deep Link URL 格式:
 * /examples/scripts?category=beginner&name=vibrate&script=true
 *
 * 参数说明:
 * - category: 脚本难度级别 (beginner, intermediate, advanced) - 可选
 * - name: 脚本名称 - 可选
 * - script: 是否加载脚本内容 (true/false) - 默认 true
 */ function ExamplesScriptsContent() {
    const router = (0,next_router.useRouter)();
    const { t } = (0,es/* useTranslation */.Bd)("homepage/components/page/examples/scripts/content");
    const [params, setParams] = (0,react.useState)({
        script: true
    });
    const [isReady, setIsReady] = (0,react.useState)(false);
    // 从 query 参数提取脚本参数
    (0,react.useEffect)(()=>{
        if (!router.isReady) {
            fileLog.log('ExamplesScriptsContent', 'Router not ready yet');
            return;
        }
        fileLog.log('ExamplesScriptsContent', 'Router is ready, processing query params');
        const { category, name, script } = router.query;
        fileLog.log('ExamplesScriptsContent', "Query params: category=".concat(category, ", name=").concat(name, ", script=").concat(script));
        // 解析 script 参数 (可以为字符串 'true'/'false' 或 true/false)
        const scriptBool = script === 'false' ? false : true;
        fileLog.log('ExamplesScriptsContent', "Parsed script param: ".concat(scriptBool));
        // 构建参数对象 (category 和 name 可以为空)
        const newParams = {
            category: category,
            name: name,
            script: scriptBool
        };
        fileLog.log('ExamplesScriptsContent', "Updated params: ".concat(JSON.stringify(newParams)));
        setParams(newParams);
        setIsReady(true);
    }, [
        router.isReady,
        router.query
    ]);
    // 如果参数为空，显示提示信息
    if (!isReady) {
        fileLog.log('ExamplesScriptsContent', 'Still loading router');
        return /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.A, {
            sx: {
                p: 2
            },
            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Alert/* default */.A, {
                severity: "info",
                children: t('ExamplesScriptsContent.loading', 'Loading...')
            })
        });
    }
    // 参数都为空时，显示默认内容（默认为初级第一个脚本）
    if (!params.category && !params.name) {
        fileLog.log('ExamplesScriptsContent', 'No category and name provided, using defaults (beginner first script)');
        return /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.A, {
            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(ScriptEditorContentV2, {})
        });
    }
    // 只有 category 或只有 name 时，显示错误信息
    if (!params.category || !params.name) {
        fileLog.log('ExamplesScriptsContent', "Invalid params: category=".concat(params.category, ", name=").concat(params.name));
        return /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.A, {
            sx: {
                p: 2
            },
            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Alert/* default */.A, {
                severity: "error",
                children: t('ExamplesScriptsContent.invalidParams', '无效的脚本参数，请确保 category 和 name 都已提供')
            })
        });
    }
    fileLog.log('ExamplesScriptsContent', "Rendering ScriptEditorContentV2: category=".concat(params.category, ", name=").concat(params.name, ", script=").concat(params.script));
    // 使用 ScriptEditorContentV2 显示脚本
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.A, {
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(ScriptEditorContentV2, {
            initialCategory: params.category,
            initialName: params.name,
            initialScript: params.script
        })
    });
}

// EXTERNAL MODULE: __barrel_optimize__?names=useTranslation!=!../../node_modules/.pnpm/react-i18next@15.6.0_i18next@24.2.3_typescript@5.7.3__react-dom@19.1.0_react@19.1.0__react@19.1.0_typescript@5.7.3/node_modules/react-i18next/dist/es/index.js
var dist_es = __webpack_require__(9825);
;// ./src/pages/examples/scripts/index.tsx





function ExamplesScriptsPage() {
    const { t } = (0,dist_es/* useTranslation */.Bd)('homepage/pages/examples/scripts/content');
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(AppShell/* AppShell */.G, {
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Tabbar/* TabbarContainer */.y, {
            titleConf: {
                title: t('content.title')
            },
            navBar: /*#__PURE__*/ (0,jsx_runtime.jsx)(NavBar/* NavBar */.j, {}),
            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(ExamplesScriptsContent, {})
        })
    });
}


/***/ }),

/***/ 50191:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  S: () => (/* binding */ AndroidPermissionsButton)
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/react@19.1.0/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(94513);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react-i18next@15.6.0_i18next@24.2.3_typescript@5.7.3__react-dom@19.1.0_react@19.1.0__react@19.1.0_typescript@5.7.3/node_modules/react-i18next/dist/es/index.js + 15 modules
var es = __webpack_require__(50279);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/Button/Button.js + 3 modules
var Button = __webpack_require__(28669);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react@19.1.0/node_modules/react/index.js
var react = __webpack_require__(94285);
// EXTERNAL MODULE: ../../libs/droid/android/src/android/components/Manifest.ts
var Manifest = __webpack_require__(73703);
// EXTERNAL MODULE: ../../libs/fanfanlo/src/watcher/useWatchUpdates.tsx
var useWatchUpdates = __webpack_require__(30771);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+icons-material@6.4.12_@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_re_5ewkm5t5g27pzq5tz62v6ktvti/node_modules/@mui/icons-material/esm/Close.js
var Close = __webpack_require__(29864);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/Dialog/Dialog.js + 1 modules
var Dialog = __webpack_require__(49280);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/DialogTitle/DialogTitle.js
var DialogTitle = __webpack_require__(3711);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/IconButton/IconButton.js + 1 modules
var IconButton = __webpack_require__(65494);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/DialogContent/DialogContent.js + 1 modules
var DialogContent = __webpack_require__(18244);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/Box/Box.js + 2 modules
var Box = __webpack_require__(6445);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/Typography/Typography.js
var Typography = __webpack_require__(67079);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/Stack/Stack.js + 1 modules
var Stack = __webpack_require__(9220);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/Divider/Divider.js
var Divider = __webpack_require__(56575);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/FormGroup/FormGroup.js + 1 modules
var FormGroup = __webpack_require__(80239);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/FormControlLabel/FormControlLabel.js + 1 modules
var FormControlLabel = __webpack_require__(30281);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/Checkbox/Checkbox.js + 4 modules
var Checkbox = __webpack_require__(93916);
;// ./src/components/permissions/android-permissions/AndroidPermissionsCheckbox.tsx





// 日志前缀
const LOG_PREFIX = '[AndroidPermissionsCheckbox]';
/**
 * 权限选择器组件 (Checkbox 版本)
 * @param props IPermissionsProps 对象 (使用 toProxy 包装)
 */ const AndroidPermissionsCheckbox = (props)=>{
    console.log("".concat(LOG_PREFIX, " 组件初始化, props:"), props);
    const { t } = (0,es/* useTranslation */.Bd)('droid-android/android/components/content');
    // 监听 props.permissions 的变化,触发组件重新渲染
    const [permissions] = (0,useWatchUpdates/* useProxyWatchUpdates */.d)(props, 'permissions', props.permissions);
    console.log("".concat(LOG_PREFIX, " permissions 数组长度: ").concat(permissions.length));
    // 1. 构造用于显示的完整选项列表
    const permissionOptions = (0,react.useMemo)(()=>{
        console.log("".concat(LOG_PREFIX, " 开始构造权限选项列表"));
        const options = [];
        // 1.1. 处理 ManifestPermissionGroup
        const groupKeys = Object.keys(Manifest/* ManifestPermissionGroup */.Kt);
        console.log("".concat(LOG_PREFIX, " ManifestPermissionGroup 数量: ").concat(groupKeys.length));
        groupKeys.forEach((key)=>{
            options.push({
                key: key,
                value: Manifest/* ManifestPermissionGroup */.Kt[key],
                label: t("Manifest.PermissionGroup.".concat(key)),
                group: 'ManifestPermissionGroup'
            });
        });
        // 1.2. 处理 ManifestPermission
        const permissionKeys = Object.keys(Manifest/* ManifestPermission */.Ls);
        console.log("".concat(LOG_PREFIX, " ManifestPermission 数量: ").concat(permissionKeys.length));
        permissionKeys.forEach((key)=>{
            options.push({
                key: key,
                value: Manifest/* ManifestPermission */.Ls[key],
                label: t("Manifest.Permission.".concat(key)),
                group: 'ManifestPermission'
            });
        });
        console.log("".concat(LOG_PREFIX, " 权限选项列表构造完成, 总数: ").concat(options.length));
        return options;
    }, [
        t
    ]);
    // 2. 按分组整理选项
    const groupedOptions = (0,react.useMemo)(()=>{
        console.log("".concat(LOG_PREFIX, " 开始按分组整理选项"));
        const groups = {
            ManifestPermissionGroup: [],
            ManifestPermission: []
        };
        permissionOptions.forEach((option)=>{
            if (option.group === 'ManifestPermissionGroup') {
                groups.ManifestPermissionGroup.push(option);
            } else {
                groups.ManifestPermission.push(option);
            }
        });
        console.log("".concat(LOG_PREFIX, " 分组完成, ManifestPermissionGroup: ").concat(groups.ManifestPermissionGroup.length, ", ManifestPermission: ").concat(groups.ManifestPermission.length));
        return groups;
    }, [
        permissionOptions
    ]);
    // 3. 处理 Checkbox 勾选/取消勾选事件
    const handleCheckboxChange = (permissionValue, checked)=>{
        console.log("".concat(LOG_PREFIX, " Checkbox 状态变化, 权限: ").concat(permissionValue, ", 是否勾选: ").concat(checked));
        if (checked) {
            // 勾选: 添加到数组
            const alreadyExists = props.permissions.includes(permissionValue);
            console.log("".concat(LOG_PREFIX, " 准备添加权限, 是否已存在: ").concat(alreadyExists));
            if (alreadyExists) {
                console.log("".concat(LOG_PREFIX, " 权限已存在, 无需添加"));
            } else {
                props.permissions.push(permissionValue);
                console.log("".concat(LOG_PREFIX, " 权限已添加, 当前数组长度: ").concat(props.permissions.length));
            }
        } else {
            // 取消勾选: 从数组中移除
            const index = props.permissions.indexOf(permissionValue);
            console.log("".concat(LOG_PREFIX, " 准备移除权限, 索引位置: ").concat(index));
            if (index === -1) {
                console.log("".concat(LOG_PREFIX, " 权限不存在于数组中, 无需移除"));
            } else {
                props.permissions.splice(index, 1);
                console.log("".concat(LOG_PREFIX, " 权限已移除, 当前数组长度: ").concat(props.permissions.length));
            }
        }
    };
    // 4. 渲染分组
    const renderGroup = (groupName)=>{
        const options = groupedOptions[groupName];
        console.log("".concat(LOG_PREFIX, " 渲染分组: ").concat(groupName, ", 选项数量: ").concat(options.length));
        const groupLabel = t("PermissionsSelector.Group.".concat(groupName), groupName === 'ManifestPermissionGroup' ? '权限组 (ManifestPermission Groups)' : '权限 (Permissions)');
        return /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.A, {
            sx: {
                mb: 3
            },
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.A, {
                    variant: "subtitle2",
                    color: "primary",
                    sx: {
                        mb: 1,
                        fontWeight: 'bold'
                    },
                    children: groupLabel
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)(FormGroup/* default */.A, {
                    children: options.map((option)=>{
                        const isChecked = permissions.includes(option.value);
                        return /*#__PURE__*/ (0,jsx_runtime.jsx)(FormControlLabel/* default */.A, {
                            control: /*#__PURE__*/ (0,jsx_runtime.jsx)(Checkbox/* default */.A, {
                                checked: isChecked,
                                onChange: (e)=>{
                                    const checked = e.target.checked;
                                    console.log("".concat(LOG_PREFIX, " onChange 事件触发, 权限: ").concat(option.value, ", checked: ").concat(checked));
                                    handleCheckboxChange(option.value, checked);
                                }
                            }),
                            label: option.label
                        }, option.value);
                    })
                })
            ]
        }, groupName);
    };
    console.log("".concat(LOG_PREFIX, " 组件渲染"));
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.A, {
        sx: {
            width: '100%'
        },
        children: [
            renderGroup('ManifestPermissionGroup'),
            renderGroup('ManifestPermission')
        ]
    });
};

;// ./src/components/permissions/android-permissions/AndroidPermissionsPopup.tsx







// 日志前缀
const AndroidPermissionsPopup_LOG_PREFIX = '[AndroidPermissionsPopup]';
/**
 * 权限选择器弹窗组件
 */ const AndroidPermissionsPopup = (param)=>{
    let { open, onClose, permissionsProps } = param;
    console.log("".concat(AndroidPermissionsPopup_LOG_PREFIX, " 组件初始化, open: ").concat(open));
    const { t } = (0,es/* useTranslation */.Bd)('droid-android/android/components/content');
    // 监听 permissions 数组的变化
    const [permissions] = (0,useWatchUpdates/* useProxyWatchUpdates */.d)(permissionsProps, 'permissions', permissionsProps.permissions);
    console.log("".concat(AndroidPermissionsPopup_LOG_PREFIX, " 当前已选权限数量: ").concat(permissions.length));
    // 构造权限值到说明的映射 Map
    const permissionLabelMap = (0,react.useMemo)(()=>{
        console.log("".concat(AndroidPermissionsPopup_LOG_PREFIX, " 开始构造权限标签映射"));
        const map = new Map();
        // 处理 ManifestPermissionGroup
        const groupKeys = Object.keys(Manifest/* ManifestPermissionGroup */.Kt);
        groupKeys.forEach((key)=>{
            const value = Manifest/* ManifestPermissionGroup */.Kt[key];
            const label = t("Manifest.PermissionGroup.".concat(key));
            map.set(value, label);
        });
        // 处理 ManifestPermission
        const permissionKeys = Object.keys(Manifest/* ManifestPermission */.Ls);
        permissionKeys.forEach((key)=>{
            const value = Manifest/* ManifestPermission */.Ls[key];
            const label = t("Manifest.Permission.".concat(key));
            map.set(value, label);
        });
        console.log("".concat(AndroidPermissionsPopup_LOG_PREFIX, " 权限标签映射构造完成, 总数: ").concat(map.size));
        return map;
    }, [
        t
    ]);
    const handleClose = ()=>{
        console.log("".concat(AndroidPermissionsPopup_LOG_PREFIX, " 关闭按钮被点击"));
        onClose();
    };
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(Dialog/* default */.A, {
        open: open,
        onClose: handleClose,
        maxWidth: "md",
        fullWidth: true,
        sx: {
            '& .MuiDialog-paper': {
                minHeight: '60vh',
                maxHeight: '80vh'
            }
        },
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsxs)(DialogTitle/* default */.A, {
                sx: {
                    m: 0,
                    p: 2,
                    pr: 6
                },
                children: [
                    t('PermissionsSelector.Label', '选择 Android 权限'),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(IconButton/* default */.A, {
                        "aria-label": "close",
                        onClick: handleClose,
                        sx: {
                            position: 'absolute',
                            right: 8,
                            top: 8,
                            color: (theme)=>theme.palette.grey[500]
                        },
                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Close/* default */.A, {})
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)(DialogContent/* default */.A, {
                dividers: true,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.A, {
                        sx: {
                            mb: 3,
                            p: 2,
                            bgcolor: '#f5f5f5',
                            borderRadius: 1
                        },
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)(Typography/* default */.A, {
                                variant: "subtitle2",
                                sx: {
                                    mb: 1.5,
                                    fontWeight: 'bold',
                                    color: 'primary.main'
                                },
                                children: [
                                    t('PermissionsSelector.SelectedPermissions', '已选权限'),
                                    " (",
                                    permissions.length,
                                    ")"
                                ]
                            }),
                            permissions.length === 0 ? /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.A, {
                                variant: "body2",
                                color: "text.secondary",
                                children: t('PermissionsSelector.NoPermissionsSelected', '未选择任何权限')
                            }) : /*#__PURE__*/ (0,jsx_runtime.jsx)(Stack/* default */.A, {
                                direction: "column",
                                spacing: 1.5,
                                children: permissions.map((permission, index)=>{
                                    const label = permissionLabelMap.get(permission);
                                    console.log("".concat(AndroidPermissionsPopup_LOG_PREFIX, " 渲染已选权限: ").concat(permission, ", 说明: ").concat(label));
                                    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.A, {
                                        sx: {
                                            p: 1.5,
                                            bgcolor: 'white',
                                            borderRadius: 1,
                                            border: '1px solid',
                                            borderColor: 'primary.light'
                                        },
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.A, {
                                                variant: "body2",
                                                sx: {
                                                    fontWeight: 500,
                                                    color: 'primary.main',
                                                    mb: 0.5
                                                },
                                                children: label || permission
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.A, {
                                                variant: "caption",
                                                color: "text.secondary",
                                                sx: {
                                                    fontFamily: 'monospace'
                                                },
                                                children: permission
                                            })
                                        ]
                                    }, "".concat(permission, "-").concat(index));
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Divider/* default */.A, {
                        sx: {
                            mb: 2
                        }
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(AndroidPermissionsCheckbox, {
                        ...permissionsProps
                    })
                ]
            })
        ]
    });
};

;// ./src/components/permissions/android-permissions/AndroidPermissionsButton.tsx





// 日志前缀
const AndroidPermissionsButton_LOG_PREFIX = '[AndroidPermissionsButton]';
/**
 * 权限选择器按钮组件
 * 点击按钮时弹出权限选择器弹窗
 */ const AndroidPermissionsButton = (param)=>{
    let { permissionsProps } = param;
    console.log("".concat(AndroidPermissionsButton_LOG_PREFIX, " 组件初始化"));
    const { t } = (0,es/* useTranslation */.Bd)('droid-android/android/components/content');
    const [open, setOpen] = (0,react.useState)(false);
    const handleOpen = ()=>{
        console.log("".concat(AndroidPermissionsButton_LOG_PREFIX, " 按钮被点击, 准备打开弹窗"));
        setOpen(true);
        console.log("".concat(AndroidPermissionsButton_LOG_PREFIX, " 弹窗状态已设置为 true"));
    };
    const handleClose = ()=>{
        console.log("".concat(AndroidPermissionsButton_LOG_PREFIX, " 准备关闭弹窗"));
        setOpen(false);
        console.log("".concat(AndroidPermissionsButton_LOG_PREFIX, " 弹窗状态已设置为 false"));
    };
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Button/* default */.A, {
                variant: "contained",
                onClick: handleOpen,
                children: t('PermissionsSelector.ButtonLabel', '选择权限')
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(AndroidPermissionsPopup, {
                open: open,
                onClose: handleClose,
                permissionsProps: permissionsProps
            })
        ]
    });
};


/***/ }),

/***/ 90342:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {


    (window.__NEXT_P = window.__NEXT_P || []).push([
      "/examples/scripts",
      function () {
        return __webpack_require__(4945);
      }
    ]);
    if(false) {}
  

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, [5352,4729,788,5629,3685,9170,889,3343,7333,6112,8462,6955,5066,636,6593,8792], () => (__webpack_exec__(90342)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ _N_E = __webpack_exports__;
/******/ }
]);
//# sourceMappingURL=scripts-288699fb2316f8f1.js.map