"use strict";
(self["webpackChunk_N_E"] = self["webpackChunk_N_E"] || []).push([[864],{

/***/ 9825:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Bd: () => (/* reexport safe */ C_work_android_droid_html_website_2024_12_node_modules_pnpm_react_i18next_15_6_0_i18next_24_2_3_typescript_5_7_3_react_dom_19_1_0_react_19_1_0_react_19_1_0_typescript_5_7_3_node_modules_react_i18next_dist_es_index_js__WEBPACK_IMPORTED_MODULE_0__.Bd)
/* harmony export */ });
/* harmony import */ var C_work_android_droid_html_website_2024_12_node_modules_pnpm_react_i18next_15_6_0_i18next_24_2_3_typescript_5_7_3_react_dom_19_1_0_react_19_1_0_react_19_1_0_typescript_5_7_3_node_modules_react_i18next_dist_es_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(50279);



/***/ }),

/***/ 32534:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   j: () => (/* binding */ NavBar)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(94513);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(75640);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _fanfanlo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(50279);
/* harmony import */ var _mui_icons_material_Home__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(30319);
/* harmony import */ var _mui_icons_material_Settings__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(52089);
/* harmony import */ var _mui_icons_material_Create__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(58696);
/* harmony import */ var _barrel_optimize_names_BottomNavigation_BottomNavigationAction_mui_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(76242);
/* harmony import */ var _barrel_optimize_names_BottomNavigation_BottomNavigationAction_mui_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(366);







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
        // { label: t('content.market'), value: '/market', icon: <StorefrontIcon /> },
        {
            label: t('NavBar.settings'),
            value: '/settings',
            icon: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_icons_material_Settings__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .A, {})
        }
    ];
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_barrel_optimize_names_BottomNavigation_BottomNavigationAction_mui_material__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .A, {
        showLabels: true,
        value: pathname,
        children: tabInfoList.map((e)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_barrel_optimize_names_BottomNavigation_BottomNavigationAction_mui_material__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .A, {
                label: e.label,
                icon: e.icon,
                "data-id": "tabbar-".concat(e.value),
                className: pathname === e.value ? 'Mui-selected' : '',
                onClick: ()=>{
                    if (pathname === e.value) return;
                    router.push(e.value);
                }
            }, e.value))
    });
}


/***/ }),

/***/ 50191:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


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
// EXTERNAL MODULE: ../../libs/fanfanlo/src/log/Log.ts + 1 modules
var Log = __webpack_require__(48891);
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
const fileLog = new Log/* Log */.tG(false, 'AndroidPermissionsCheckbox_f');
fileLog.pause = true;
fileLog.childrenPaused = true;
/**
 * 权限选择器组件 (Checkbox 版本)
 * @param props IPermissionsProps 对象 (使用 toProxy 包装)
 */ const AndroidPermissionsCheckbox = (props)=>{
    fileLog.log("".concat(LOG_PREFIX, " 组件初始化, props:"), props);
    const { t } = (0,es/* useTranslation */.Bd)('homepage/components/permissions/android-permissions/content');
    const { t: tManifest } = (0,es/* useTranslation */.Bd)('droid-android/android/components/content');
    // 监听 props.permissions 的变化,触发组件重新渲染
    const [permissions] = (0,useWatchUpdates/* useProxyWatchUpdates */.d)(props, 'permissions', props.permissions);
    fileLog.log("".concat(LOG_PREFIX, " permissions 数组长度: ").concat(permissions.length));
    // 1. 构造用于显示的完整选项列表
    const permissionOptions = (0,react.useMemo)(()=>{
        fileLog.log("".concat(LOG_PREFIX, " 开始构造权限选项列表"));
        const options = [];
        // 1.1. 处理 ManifestPermissionGroup
        const groupKeys = Object.keys(Manifest/* ManifestPermissionGroup */.Kt);
        fileLog.log("".concat(LOG_PREFIX, " ManifestPermissionGroup 数量: ").concat(groupKeys.length));
        groupKeys.forEach((key)=>{
            options.push({
                key: key,
                value: Manifest/* ManifestPermissionGroup */.Kt[key],
                label: tManifest("Manifest.PermissionGroup.".concat(key)),
                group: 'ManifestPermissionGroup'
            });
        });
        // 1.2. 处理 ManifestPermission
        const permissionKeys = Object.keys(Manifest/* ManifestPermission */.Ls);
        fileLog.log("".concat(LOG_PREFIX, " ManifestPermission 数量: ").concat(permissionKeys.length));
        permissionKeys.forEach((key)=>{
            options.push({
                key: key,
                value: Manifest/* ManifestPermission */.Ls[key],
                label: tManifest("Manifest.Permission.".concat(key)),
                group: 'ManifestPermission'
            });
        });
        fileLog.log("".concat(LOG_PREFIX, " 权限选项列表构造完成, 总数: ").concat(options.length));
        return options;
    }, [
        tManifest
    ]);
    // 2. 按分组整理选项
    const groupedOptions = (0,react.useMemo)(()=>{
        fileLog.log("".concat(LOG_PREFIX, " 开始按分组整理选项"));
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
        fileLog.log("".concat(LOG_PREFIX, " 分组完成, ManifestPermissionGroup: ").concat(groups.ManifestPermissionGroup.length, ", ManifestPermission: ").concat(groups.ManifestPermission.length));
        return groups;
    }, [
        permissionOptions
    ]);
    // 3. 处理 Checkbox 勾选/取消勾选事件
    const handleCheckboxChange = (permissionValue, checked)=>{
        fileLog.log("".concat(LOG_PREFIX, " Checkbox 状态变化, 权限: ").concat(permissionValue, ", 是否勾选: ").concat(checked));
        if (checked) {
            // 勾选: 添加到数组
            const alreadyExists = props.permissions.includes(permissionValue);
            fileLog.log("".concat(LOG_PREFIX, " 准备添加权限, 是否已存在: ").concat(alreadyExists));
            if (alreadyExists) {
                fileLog.log("".concat(LOG_PREFIX, " 权限已存在, 无需添加"));
            } else {
                props.permissions.push(permissionValue);
                fileLog.log("".concat(LOG_PREFIX, " 权限已添加, 当前数组长度: ").concat(props.permissions.length));
            }
        } else {
            // 取消勾选: 从数组中移除
            const index = props.permissions.indexOf(permissionValue);
            fileLog.log("".concat(LOG_PREFIX, " 准备移除权限, 索引位置: ").concat(index));
            if (index === -1) {
                fileLog.log("".concat(LOG_PREFIX, " 权限不存在于数组中, 无需移除"));
            } else {
                props.permissions.splice(index, 1);
                fileLog.log("".concat(LOG_PREFIX, " 权限已移除, 当前数组长度: ").concat(props.permissions.length));
            }
        }
    };
    // 4. 渲染分组
    const renderGroup = (groupName)=>{
        const options = groupedOptions[groupName];
        fileLog.log("".concat(LOG_PREFIX, " 渲染分组: ").concat(groupName, ", 选项数量: ").concat(options.length));
        const groupLabel = t("AndroidPermissionsCheckbox.Group.".concat(groupName));
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
                                    fileLog.log("".concat(LOG_PREFIX, " onChange 事件触发, 权限: ").concat(option.value, ", checked: ").concat(checked));
                                    handleCheckboxChange(option.value, checked);
                                }
                            }),
                            label: /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.A, {
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.A, {
                                        variant: "body2",
                                        sx: {
                                            fontWeight: 500,
                                            color: 'primary.main'
                                        },
                                        children: option.label
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.A, {
                                        variant: "caption",
                                        color: "text.secondary",
                                        sx: {
                                            fontFamily: 'monospace'
                                        },
                                        children: option.value
                                    })
                                ]
                            })
                        }, option.value);
                    })
                })
            ]
        }, groupName);
    };
    fileLog.log("".concat(LOG_PREFIX, " 组件渲染"));
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
const AndroidPermissionsPopup_fileLog = new Log/* Log */.tG(false, '[AndroidPermissionsPopup]');
/**
 * 权限选择器弹窗组件
 */ const AndroidPermissionsPopup = (param)=>{
    let { open, onClose, permissionsProps } = param;
    AndroidPermissionsPopup_fileLog.log("".concat(AndroidPermissionsPopup_LOG_PREFIX, " 组件初始化, open: ").concat(open));
    const { t } = (0,es/* useTranslation */.Bd)('homepage/components/permissions/android-permissions/content');
    const { t: tManifest } = (0,es/* useTranslation */.Bd)('droid-android/android/components/content');
    // 监听 permissions 数组的变化
    const [permissions] = (0,useWatchUpdates/* useProxyWatchUpdates */.d)(permissionsProps, 'permissions', permissionsProps.permissions);
    AndroidPermissionsPopup_fileLog.log("".concat(AndroidPermissionsPopup_LOG_PREFIX, " 当前已选权限数量: ").concat(permissions.length));
    // 构造权限值到说明的映射 Map
    const permissionLabelMap = (0,react.useMemo)(()=>{
        AndroidPermissionsPopup_fileLog.log("".concat(AndroidPermissionsPopup_LOG_PREFIX, " 开始构造权限标签映射"));
        const map = new Map();
        // 处理 ManifestPermissionGroup
        const groupKeys = Object.keys(Manifest/* ManifestPermissionGroup */.Kt);
        groupKeys.forEach((key)=>{
            const value = Manifest/* ManifestPermissionGroup */.Kt[key];
            const label = tManifest("Manifest.PermissionGroup.".concat(key));
            map.set(value, label);
        });
        // 处理 ManifestPermission
        const permissionKeys = Object.keys(Manifest/* ManifestPermission */.Ls);
        permissionKeys.forEach((key)=>{
            const value = Manifest/* ManifestPermission */.Ls[key];
            const label = tManifest("Manifest.Permission.".concat(key));
            map.set(value, label);
        });
        AndroidPermissionsPopup_fileLog.log("".concat(AndroidPermissionsPopup_LOG_PREFIX, " 权限标签映射构造完成, 总数: ").concat(map.size));
        return map;
    }, [
        tManifest
    ]);
    const handleClose = ()=>{
        AndroidPermissionsPopup_fileLog.log("".concat(AndroidPermissionsPopup_LOG_PREFIX, " 关闭按钮被点击"));
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
                    t('AndroidPermissionsPopup.Label'),
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
                                    t('AndroidPermissionsPopup.SelectedPermissions'),
                                    " (",
                                    permissions.length,
                                    ")"
                                ]
                            }),
                            permissions.length === 0 ? /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.A, {
                                variant: "body2",
                                color: "text.secondary",
                                children: t('AndroidPermissionsPopup.NoPermissionsSelected')
                            }) : /*#__PURE__*/ (0,jsx_runtime.jsx)(Stack/* default */.A, {
                                direction: "column",
                                spacing: 1.5,
                                children: permissions.map((permission, index)=>{
                                    const label = permissionLabelMap.get(permission);
                                    AndroidPermissionsPopup_fileLog.log("".concat(AndroidPermissionsPopup_LOG_PREFIX, " 渲染已选权限: ").concat(permission, ", 说明: ").concat(label));
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
    // console.log(`${LOG_PREFIX} 组件初始化`);
    // C:\work\android-droid\html\website-2024-12\apps\homepage\src\components\permissions\android-permissions\AndroidPermissionsButton.tsx
    const { t } = (0,es/* useTranslation */.Bd)('homepage/components/permissions/android-permissions/content');
    const [open, setOpen] = (0,react.useState)(false);
    const handleOpen = ()=>{
        // console.log(`${LOG_PREFIX} 按钮被点击, 准备打开弹窗`);
        setOpen(true);
    // console.log(`${LOG_PREFIX} 弹窗状态已设置为 true`);
    };
    const handleClose = ()=>{
        // console.log(`${LOG_PREFIX} 准备关闭弹窗`);
        setOpen(false);
    // console.log(`${LOG_PREFIX} 弹窗状态已设置为 false`);
    };
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Button/* default */.A, {
                variant: "contained",
                onClick: handleOpen,
                children: t('AndroidPermissionsButton.ButtonLabel')
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

/***/ 93589:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   y: () => (/* binding */ TabbarContainer)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(94513);
/* harmony import */ var _barrel_optimize_names_Box_CssBaseline_Paper_mui_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(59864);
/* harmony import */ var _barrel_optimize_names_Box_CssBaseline_Paper_mui_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6445);
/* harmony import */ var _barrel_optimize_names_Box_CssBaseline_Paper_mui_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(32055);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(94285);
/* harmony import */ var _page_AndroidPageContent__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(67236);
/* __next_internal_client_entry_do_not_use__ TabbarContainer auto */ 



function BottomBar(param) {
    let { navBar } = param;
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_barrel_optimize_names_Box_CssBaseline_Paper_mui_material__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A, {
        id: "bottom-navigation",
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


/***/ })

}]);
//# sourceMappingURL=864-2be6f73a3a52cae7.js.map