(self["webpackChunk_N_E"] = self["webpackChunk_N_E"] || []).push([[8959],{

/***/ 7168:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ ProjectSettings)
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/react@19.1.0/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(94513);
// EXTERNAL MODULE: ../../libs/app/ui/src/components/app/AppShell.tsx + 3 modules
var AppShell = __webpack_require__(26719);
// EXTERNAL MODULE: ../../libs/app/ui/src/components/appbar/AppBar.tsx + 2 modules
var AppBar = __webpack_require__(40018);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react-i18next@15.6.0_i18next@24.2.3_typescript@5.7.3__react-dom@19.1.0_react@19.1.0__react@19.1.0_typescript@5.7.3/node_modules/react-i18next/dist/es/index.js + 15 modules
var es = __webpack_require__(56137);
// EXTERNAL MODULE: ../../libs/fanfanlo/src/log/Log.ts + 1 modules
var Log = __webpack_require__(89597);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/Box/Box.js + 2 modules
var Box = __webpack_require__(92061);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/CircularProgress/CircularProgress.js + 1 modules
var CircularProgress = __webpack_require__(95657);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/Alert/Alert.js + 6 modules
var Alert = __webpack_require__(99450);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/Stack/Stack.js + 1 modules
var Stack = __webpack_require__(39070);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/Divider/Divider.js
var Divider = __webpack_require__(8536);
// EXTERNAL MODULE: ../../libs/fanfanlo/src/watcher/useProxyWatch.ts
var useProxyWatch = __webpack_require__(80502);
// EXTERNAL MODULE: ../../libs/app/model/src/user/User.ts + 5 modules
var User = __webpack_require__(80530);
;// ../../libs/app/model/src/user/useUserIsLoggedIn.tsx


function useUserIsLoggedIn() {
    const [token] = (0,useProxyWatch/* useProxyWatch */.x)(User/* user */.k, 'data.storeData.user_token', User/* user */.k.data.storeData.user_token);
    return [
        !!token
    ];
}

// EXTERNAL MODULE: ../../libs/fanfanlo/src/remote/request.ts
var request = __webpack_require__(73603);
// EXTERNAL MODULE: ../../libs/app/model/src/remote/tms.ts
var tms = __webpack_require__(20928);
;// ../../libs/app/model/src/remote/project/deleteProject.ts



const fileLog = new Log/* Log */.tG(false, 'deleteProject_f');
/**
 * 删除项目
 * @param opts 请求选项
 * @returns 删除结果
 */ async function deleteProject(opts) {
    const fnLog = fileLog.sub(false, 'deleteProject_fn');
    // fnLog.pause = true;
    fnLog.log('[deleteProject] 开始删除项目, params:', JSON.stringify(opts.params));
    const res = await (0,request/* request */.Em)(tms/* tms */.X.TProject, tms/* tms */.X.MProjectDeleteProject, opts.params, opts.gateway, opts.handler);
    fnLog.log('[deleteProject] 请求完成, shellIsOk:', res.shellIsOk, 'dataIsOk:', res.dataIsOk);
    if (!res.shellIsOk) {
        fnLog.log('[deleteProject] ERROR: 请求失败, err:', JSON.stringify(res.err));
    }
    if (!res.dataIsOk) {
        var _res_data, _res_data1;
        fnLog.log('[deleteProject] ERROR: 数据异常, errMsg:', (_res_data = res.data) === null || _res_data === void 0 ? void 0 : _res_data.errMsg, 'errCode:', (_res_data1 = res.data) === null || _res_data1 === void 0 ? void 0 : _res_data1.errCode);
    }
    if (res.data) {
        if (res.data.is_ok) {
            fnLog.log('[deleteProject] 删除成功, uuid:', res.data.uuid, 'deletedAt:', res.data.deletedAt);
        } else {
            fnLog.log('[deleteProject] ERROR: 删除失败, msg:', res.data.msg);
        }
    } else {
        fnLog.log('[deleteProject] ERROR: 无返回数据');
    }
    return res;
}
/* harmony default export */ const project_deleteProject = ((/* unused pure expression or super */ null && (deleteProject)));

// EXTERNAL MODULE: ../../libs/droid/project-v2-interface/src/index.ts + 29 modules
var src = __webpack_require__(34456);
// EXTERNAL MODULE: ../../node_modules/.pnpm/next@15.3.5_@babel+core@7.28.0_@playwright+test@1.57.0_babel-plugin-macros@3.1.0_react-dom@19_gjfccjsd7b6xv5ktyj7vxamu6q/node_modules/next/router.js
var next_router = __webpack_require__(1674);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react@19.1.0/node_modules/react/index.js
var react = __webpack_require__(94285);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react-hot-toast@2.5.2_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/react-hot-toast/dist/index.mjs + 1 modules
var dist = __webpack_require__(73349);
;// ./src/components/project/ProjectSettingsContent/context/ProjectSettingsContext.tsx
/* __next_internal_client_entry_do_not_use__ ProjectSettingsProvider,useProjectSettings auto */ 






const ProjectSettingsContext_fileLog = new Log/* Log */.tG(false, 'ProjectSettingsContext');
ProjectSettingsContext_fileLog.pause = true;
ProjectSettingsContext_fileLog.childrenPaused = true;
// 创建 Context
const ProjectSettingsContext = /*#__PURE__*/ (0,react.createContext)(undefined);
// Provider 组件
function ProjectSettingsProvider(param) {
    let { children } = param;
    const router = (0,next_router.useRouter)();
    const [isUserLoggedIn] = useUserIsLoggedIn();
    ProjectSettingsContext_fileLog.log('[Provider] isUserLoggedIn:', isUserLoggedIn);
    // 状态管理
    const [project, setProject] = (0,react.useState)(null);
    const [projectSettings, setProjectSettings] = (0,react.useState)(null);
    const [loading, setLoading] = (0,react.useState)(true);
    const [syncToServer, setSyncToServer] = (0,react.useState)(false);
    const [isPublic, setIsPublic] = (0,react.useState)(false);
    const [deleteConfirmOpen, setDeleteConfirmOpen] = (0,react.useState)(false);
    const [deleteFromLocal, setDeleteFromLocal] = (0,react.useState)(false);
    const [deleteFromServer, setDeleteFromServer] = (0,react.useState)(false);
    const [saving, setSaving] = (0,react.useState)(false);
    const [error, setError] = (0,react.useState)(null);
    (0,react.useEffect)(()=>{
        const fnLog = ProjectSettingsContext_fileLog.sub(false, 'init_useEffect_fn');
        fnLog.log('[init] useEffect 初始化');
        if (!router.isReady) {
            fnLog.log('[init] router未就绪，跳过初始化');
            return;
        }
        const projectUlid = router.query.projectUlid;
        fnLog.log('[init] projectUlid:', projectUlid);
        if (!projectUlid) {
            fnLog.log('[init] projectUlid为空，显示错误');
            setError('项目ID是必需的');
            setLoading(false);
            return;
        }
        try {
            fnLog.log('[init] 查找project');
            const foundProject = src.projectStore.findProject(projectUlid);
            fnLog.log('[init] 找到的project:', foundProject ? JSON.stringify(foundProject) : 'null');
            if (!foundProject) {
                fnLog.log('[init] project不存在');
                setError('项目未找到');
                setLoading(false);
                return;
            }
            setProject(foundProject);
            // 加载设置
            fnLog.log('[init] 加载project设置');
            const settings = src.projectStore.getProjectSettings(projectUlid);
            fnLog.log('[init] 加载的设置:', settings ? JSON.stringify(settings) : 'null');
            if (settings) {
                fnLog.log('[init] 设置存在，syncToServer:', settings.syncToServer);
                setProjectSettings(settings);
                setSyncToServer(settings.syncToServer);
                fnLog.log('[init] 已设置 syncToServer state:', settings.syncToServer);
            } else {
                fnLog.log('[init] 设置不存在');
            }
            // 判断是否公开
            const isPublicValue = foundProject.visibility === src.ProjectVisibility.Public;
            fnLog.log('[init] isPublic:', isPublicValue);
            setIsPublic(isPublicValue);
            setLoading(false);
            fnLog.log('[init] 初始化完成');
        } catch (err) {
            fnLog.log('[init] 初始化异常:', err);
            setError(err instanceof Error ? err.message : 'Unknown error');
            setLoading(false);
        }
    }, [
        router.isReady,
        router.query.projectUlid
    ]);
    // 处理保存
    async function handleSave() {
        const fnLog = ProjectSettingsContext_fileLog.sub(false, 'handleSave_fn');
        fnLog.log('[handleSave] 开始保存');
        fnLog.log('[handleSave] project.ulid:', project === null || project === void 0 ? void 0 : project.ulid);
        fnLog.log('[handleSave] syncToServer state:', syncToServer);
        if (!project) {
            fnLog.log('[handleSave] ERROR: project为空');
            return;
        }
        setSaving(true);
        setError(null);
        try {
            fnLog.log('[handleSave] 开始保存到 projectStore');
            // 直接从 projectStore 获取 settings
            const settings = src.projectStore.getProjectSettings(project.ulid);
            fnLog.log('[handleSave] 从 projectStore 获取的 settings:', JSON.stringify(settings));
            if (settings) {
                fnLog.log('[handleSave] settings 存在', settings);
                fnLog.log('[handleSave] 旧 syncToServer:', settings.syncToServer);
                fnLog.log('[handleSave] 新 syncToServer:', syncToServer);
                // 直接修改现有对象的属性，不创建新对象
                settings.syncToServer = syncToServer;
                fnLog.log('[handleSave] 已修改 syncToServer:', settings.syncToServer);
            } else {
                fnLog.log('[handleSave] ERROR: settings 为 null');
            }
            // 如果visibility改变，需要更新project对象
            const newVisibility = isPublic ? src.ProjectVisibility.Public : src.ProjectVisibility.Private;
            if (project.visibility !== newVisibility) {
                fnLog.log('[handleSave] visibility改变');
                fnLog.log('[handleSave] 旧visibility:', project.visibility);
                fnLog.log('[handleSave] 新visibility:', newVisibility);
                // 直接修改project对象的visibility属性
                project.visibility = newVisibility;
                fnLog.log('[handleSave] 已修改project.visibility:', project.visibility);
            // TODO: 调用updateProject API来保存到服务器
            // const updateData = {
            //   uuid: project.uuid || project.ulid,
            //   visibility: newVisibility,
            // };
            // fnLog.log('[handleSave] updateData:', JSON.stringify(updateData));
            }
            fnLog.log('[handleSave] 保存成功');
            setSaving(false);
            goBack('handleSave');
        } catch (err) {
            fnLog.log('[handleSave] 保存异常:', err);
            setError(err instanceof Error ? err.message : '保存失败');
            setSaving(false);
        }
    }
    // 处理删除
    async function handleDelete() {
        const fnLog = ProjectSettingsContext_fileLog.sub(false, 'handleDelete_fn');
        fnLog.pause = true;
        fnLog.log('[handleDelete] 开始删除');
        fnLog.log('[handleDelete] isUserLoggedIn:', isUserLoggedIn);
        fnLog.log('[handleDelete] deleteFromLocal:', deleteFromLocal);
        fnLog.log('[handleDelete] deleteFromServer:', deleteFromServer);
        if (!project) {
            fnLog.log('[handleDelete] project为空');
            return;
        }
        if (!isUserLoggedIn) {
            fnLog.log('[handleDelete] 未登录，直接删除本地项目');
            setSaving(true);
            setError(null);
            try {
                const projectUlid = project.ulid;
                fnLog.log('[handleDelete] projectUlid:', projectUlid);
                fnLog.log('[handleDelete] 删除本地project');
                src.projectStore.removeProject(projectUlid);
                fnLog.log('[handleDelete] 本地删除成功');
                fnLog.log('[handleDelete] 显示删除成功提示');
                dist/* default */.Ay.success('项目已删除');
                setSaving(false);
                setDeleteConfirmOpen(false);
                fnLog.log('[handleDelete] 删除成功，返回首页');
                router.replace('/');
                return;
            } catch (err) {
                fnLog.log('[handleDelete] 删除异常:', err);
                setError(err instanceof Error ? err.message : '删除失败');
                setSaving(false);
                return;
            }
        }
        if (!deleteFromLocal && !deleteFromServer) {
            fnLog.log('[handleDelete] 删除选项为空');
            return;
        }
        setSaving(true);
        setError(null);
        try {
            const projectUlid = project.ulid;
            fnLog.log('[handleDelete] projectUlid:', projectUlid);
            if (deleteFromServer) {
                fnLog.log('[handleDelete] 删除服务器端project');
                if (!project.uuid) {
                    fnLog.log('[handleDelete] WARNING: project.uuid为空，跳过服务器端删除');
                    fnLog.log('[handleDelete] 继续删除本地project');
                } else {
                    fnLog.log('[handleDelete] 调用deleteProject API，uuid:', project.uuid);
                    try {
                        var _deleteRes_data;
                        const deleteRes = await deleteProject({
                            params: {
                                data: {
                                    uuid: project.uuid
                                }
                            }
                        });
                        fnLog.log('[handleDelete] deleteProject API响应:', JSON.stringify(deleteRes));
                        if (!deleteRes.dataIsOk || !((_deleteRes_data = deleteRes.data) === null || _deleteRes_data === void 0 ? void 0 : _deleteRes_data.is_ok)) {
                            var _deleteRes_data1;
                            fnLog.log('[handleDelete] WARNING: 删除服务器端项目失败，msg:', (_deleteRes_data1 = deleteRes.data) === null || _deleteRes_data1 === void 0 ? void 0 : _deleteRes_data1.msg);
                            fnLog.log('[handleDelete] 继续删除本地project');
                        } else {
                            fnLog.log('[handleDelete] 删除服务器端项目成功');
                        }
                    } catch (err) {
                        fnLog.log('[handleDelete] WARNING: deleteProject API调用异常:', err);
                        fnLog.log('[handleDelete] 继续删除本地project');
                    }
                }
            }
            if (deleteFromLocal) {
                fnLog.log('[handleDelete] 删除本地project');
                src.projectStore.removeProject(projectUlid);
                fnLog.log('[handleDelete] 本地删除成功');
            }
            fnLog.log('[handleDelete] 删除成功');
            fnLog.log('[handleDelete] 显示删除成功提示');
            dist/* default */.Ay.success('项目已删除');
            setSaving(false);
            setDeleteConfirmOpen(false);
            // 删除成功，返回首页
            fnLog.log('[handleDelete] 删除成功，返回首页');
            router.replace('/');
        } catch (err) {
            fnLog.log('[handleDelete] 删除异常:', err);
            setError(err instanceof Error ? err.message : '删除失败');
            setSaving(false);
        }
    }
    // 公用的返回函数
    function goBack(logPrefix) {
        const fnLog = ProjectSettingsContext_fileLog.sub(false, 'goBack_fn');
        fnLog.pause = true;
        fnLog.log("[".concat(logPrefix, "] 开始返回"));
        // 返回到backPath或上一页
        const backPath = router.query.backPath;
        fnLog.log("[".concat(logPrefix, "] backPath:"), backPath);
        if (backPath) {
            fnLog.log("[".concat(logPrefix, "] 跳转到backPath"));
            router.replace(backPath);
        } else {
            fnLog.log("[".concat(logPrefix, "] 返回上一页"));
            router.back();
        }
    }
    // 处理取消
    function handleCancel() {
        const fnLog = ProjectSettingsContext_fileLog.sub(false, 'handleCancel_fn');
        fnLog.log('[handleCancel] 取消操作');
        goBack('handleCancel');
    }
    const value = {
        project,
        projectSettings,
        loading,
        syncToServer,
        isPublic,
        deleteConfirmOpen,
        deleteFromLocal,
        deleteFromServer,
        saving,
        error,
        isUserLoggedIn,
        setSyncToServer,
        setIsPublic,
        setDeleteConfirmOpen,
        setDeleteFromLocal,
        setDeleteFromServer,
        handleSave,
        handleDelete,
        handleCancel,
        setError
    };
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(ProjectSettingsContext.Provider, {
        value: value,
        children: children
    });
}
// 自定义 hook
function useProjectSettings() {
    const context = (0,react.useContext)(ProjectSettingsContext);
    if (!context) {
        throw new Error('useProjectSettings must be used within ProjectSettingsProvider');
    }
    return context;
}

// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/FormControlLabel/FormControlLabel.js + 1 modules
var FormControlLabel = __webpack_require__(21069);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/Checkbox/Checkbox.js + 4 modules
var Checkbox = __webpack_require__(22653);
;// ./src/components/project/ProjectSettingsContent/components/SyncToServerSection.tsx
/* __next_internal_client_entry_do_not_use__ SyncToServerSection auto */ 



function SyncToServerSection() {
    const { t } = (0,es/* useTranslation */.Bd)('homepage/components/project/ProjectSettingsContent/components/content');
    const { syncToServer, setSyncToServer } = useProjectSettings();
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.A, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(FormControlLabel/* default */.A, {
                control: /*#__PURE__*/ (0,jsx_runtime.jsx)(Checkbox/* default */.A, {
                    "data-testid": "ProjectSettingsContent__syncToServerCheckbox__01JG2B0085",
                    "data-test-comment": "同步到服务器复选框",
                    checked: syncToServer,
                    onChange: (e)=>setSyncToServer(e.target.checked)
                }),
                label: t('SyncToServerSection.label')
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Alert/* default */.A, {
                severity: "warning",
                sx: {
                    marginTop: 1
                },
                children: t('SyncToServerSection.warning')
            })
        ]
    });
}

;// ./src/components/project/ProjectSettingsContent/components/ShareSection.tsx
/* __next_internal_client_entry_do_not_use__ ShareSection auto */ 



function ShareSection() {
    const { t } = (0,es/* useTranslation */.Bd)('homepage/components/project/ProjectSettingsContent/components/content');
    const { isPublic, setIsPublic } = useProjectSettings();
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.A, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(FormControlLabel/* default */.A, {
                control: /*#__PURE__*/ (0,jsx_runtime.jsx)(Checkbox/* default */.A, {
                    "data-testid": "ProjectSettingsContent__shareCheckbox__01JG2B0086",
                    "data-test-comment": "与他人共享复选框",
                    checked: isPublic,
                    onChange: (e)=>setIsPublic(e.target.checked)
                }),
                label: t('ShareSection.label')
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Alert/* default */.A, {
                severity: "info",
                sx: {
                    marginTop: 1
                },
                children: t('ShareSection.info')
            })
        ]
    });
}

// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/Button/Button.js + 3 modules
var Button = __webpack_require__(20872);
;// ./src/components/project/ProjectSettingsContent/components/DeleteSection.tsx
/* __next_internal_client_entry_do_not_use__ DeleteSection auto */ 



function DeleteSection() {
    const { t } = (0,es/* useTranslation */.Bd)('homepage/components/project/ProjectSettingsContent/components/content');
    const { setDeleteConfirmOpen } = useProjectSettings();
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.A, {
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Button/* default */.A, {
            "data-testid": "ProjectSettingsContent__deleteButton__01JG2B0087",
            "data-test-comment": "删除项目按钮",
            variant: "contained",
            color: "error",
            onClick: ()=>setDeleteConfirmOpen(true),
            children: t('DeleteSection.label')
        })
    });
}

;// ./src/components/project/ProjectSettingsContent/components/ActionButtons.tsx
/* __next_internal_client_entry_do_not_use__ ActionButtons auto */ 




function ActionButtons() {
    const { t } = (0,es/* useTranslation */.Bd)('homepage/components/project/ProjectSettingsContent/components/content');
    const router = (0,next_router.useRouter)();
    const { saving, handleSave } = useProjectSettings();
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.A, {
        sx: {
            display: 'flex',
            gap: 2,
            justifyContent: 'flex-end'
        },
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Button/* default */.A, {
                "data-testid": "ProjectSettingsContent__cancelButton__01JG2B0088",
                "data-test-comment": "取消按钮",
                variant: "outlined",
                onClick: ()=>router.back(),
                disabled: saving,
                children: t('ActionButtons.cancel')
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Button/* default */.A, {
                "data-testid": "ProjectSettingsContent__saveButton__01JG2B0089",
                "data-test-comment": "保存按钮",
                variant: "contained",
                onClick: handleSave,
                disabled: saving,
                children: saving ? /*#__PURE__*/ (0,jsx_runtime.jsx)(CircularProgress/* default */.A, {
                    size: 24
                }) : t('ActionButtons.save')
            })
        ]
    });
}

// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/Dialog/Dialog.js + 1 modules
var Dialog = __webpack_require__(46822);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/DialogTitle/DialogTitle.js
var DialogTitle = __webpack_require__(16880);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/DialogContent/DialogContent.js + 1 modules
var DialogContent = __webpack_require__(88149);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/DialogActions/DialogActions.js + 1 modules
var DialogActions = __webpack_require__(89701);
;// ./src/components/project/ProjectSettingsContent/components/DeleteConfirmDialog.tsx
/* __next_internal_client_entry_do_not_use__ DeleteConfirmDialog auto */ 



const DeleteConfirmDialog_fileLog = new Log/* Log */.tG(false, 'DeleteConfirmDialog');
DeleteConfirmDialog_fileLog.pause = true;
DeleteConfirmDialog_fileLog.childrenPaused = true;
function DeleteConfirmDialog() {
    const { t } = (0,es/* useTranslation */.Bd)('homepage/components/project/ProjectSettingsContent/components/content');
    const { deleteConfirmOpen, setDeleteConfirmOpen, deleteFromLocal, setDeleteFromLocal, deleteFromServer, setDeleteFromServer, saving, handleDelete, error, isUserLoggedIn } = useProjectSettings();
    DeleteConfirmDialog_fileLog.log('[DeleteConfirmDialog] isUserLoggedIn:', isUserLoggedIn);
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(Dialog/* default */.A, {
        "data-testid": "ProjectSettingsContent__deleteDialog__01JG2B008E",
        open: deleteConfirmOpen,
        onClose: ()=>setDeleteConfirmOpen(false),
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(DialogTitle/* default */.A, {
                children: t('DeleteConfirmDialog.title')
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(DialogContent/* default */.A, {
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Stack/* default */.A, {
                    spacing: 2,
                    sx: {
                        marginTop: 1
                    },
                    children: isUserLoggedIn ? /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
                        children: [
                            error ? /*#__PURE__*/ (0,jsx_runtime.jsx)(Alert/* default */.A, {
                                "data-testid": "ProjectSettingsContent__deleteErrorAlert__01JG2B008F",
                                "data-test-comment": "删除错误提示",
                                severity: "error",
                                children: error
                            }) : null,
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.A, {
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(FormControlLabel/* default */.A, {
                                        control: /*#__PURE__*/ (0,jsx_runtime.jsx)(Checkbox/* default */.A, {
                                            "data-testid": "ProjectSettingsContent__deleteServerCheckbox__01JG2B008A",
                                            "data-test-comment": "从服务器删除复选框",
                                            checked: deleteFromServer,
                                            onChange: (e)=>setDeleteFromServer(e.target.checked),
                                            disabled: deleteFromLocal
                                        }),
                                        label: t('DeleteConfirmDialog.deleteFromServer')
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.A, {
                                        sx: {
                                            marginLeft: 4,
                                            marginTop: 1,
                                            fontSize: '0.875rem',
                                            color: 'text.secondary'
                                        },
                                        children: t('DeleteConfirmDialog.deleteServerInfo')
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.A, {
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(FormControlLabel/* default */.A, {
                                        control: /*#__PURE__*/ (0,jsx_runtime.jsx)(Checkbox/* default */.A, {
                                            "data-testid": "ProjectSettingsContent__deleteLocalCheckbox__01JG2B008B",
                                            "data-test-comment": "从本地删除复选框",
                                            checked: deleteFromLocal,
                                            onChange: (e)=>{
                                                const checked = e.target.checked;
                                                DeleteConfirmDialog_fileLog.log('[DeleteConfirmDialog] deleteFromLocal onChange, checked:', checked);
                                                setDeleteFromLocal(checked);
                                                if (checked) {
                                                    DeleteConfirmDialog_fileLog.log('[DeleteConfirmDialog] deleteFromLocal checked, auto check deleteFromServer');
                                                    setDeleteFromServer(true);
                                                }
                                            }
                                        }),
                                        label: t('DeleteConfirmDialog.deleteFromLocal')
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.A, {
                                        sx: {
                                            marginLeft: 4,
                                            marginTop: 1,
                                            fontSize: '0.875rem',
                                            color: 'text.secondary'
                                        },
                                        children: t('DeleteConfirmDialog.deleteLocalInfo')
                                    })
                                ]
                            })
                        ]
                    }) : /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
                        children: [
                            error ? /*#__PURE__*/ (0,jsx_runtime.jsx)(Alert/* default */.A, {
                                "data-testid": "ProjectSettingsContent__deleteErrorAlertNotLoggedIn__01JG2B008G",
                                "data-test-comment": "未登录时删除错误提示",
                                severity: "error",
                                children: error
                            }) : null,
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(Alert/* default */.A, {
                                "data-testid": "ProjectSettingsContent__deleteConfirmAlertNotLoggedIn__01JG2B008H",
                                "data-test-comment": "未登录时删除确认提示",
                                severity: "warning",
                                children: t('DeleteConfirmDialog.warningNotLoggedIn')
                            })
                        ]
                    })
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)(DialogActions/* default */.A, {
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Button/* default */.A, {
                        "data-testid": "ProjectSettingsContent__deleteCancelButton__01JG2B008C",
                        "data-test-comment": "删除确认对话框取消按钮",
                        onClick: ()=>setDeleteConfirmOpen(false),
                        children: t('DeleteConfirmDialog.cancel')
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Button/* default */.A, {
                        "data-testid": "ProjectSettingsContent__deleteConfirmButton__01JG2B008D",
                        "data-test-comment": "删除确认按钮",
                        onClick: handleDelete,
                        color: "error",
                        variant: "contained",
                        disabled: isUserLoggedIn ? !deleteFromLocal && !deleteFromServer || saving : saving,
                        children: saving ? /*#__PURE__*/ (0,jsx_runtime.jsx)(CircularProgress/* default */.A, {
                            size: 24
                        }) : t('DeleteConfirmDialog.delete')
                    })
                ]
            })
        ]
    });
}

// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/Typography/Typography.js
var Typography = __webpack_require__(26512);
// EXTERNAL MODULE: ../../libs/droid/project-v2-ui/src/ui/components/entity-settings/EntityBasicInfoEditor.tsx + 1 modules
var EntityBasicInfoEditor = __webpack_require__(95591);
;// ./src/components/project/ProjectSettingsContent/components/ProjectBasicInfoSection.tsx





function ProjectBasicInfoSection() {
    const { t } = (0,es/* useTranslation */.Bd)('homepage/components/project/ProjectSettingsContent/components/content');
    const { project, saving } = useProjectSettings();
    if (!project) return null;
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.A, {
        sx: {
            py: 2
        },
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.A, {
                variant: "h6",
                sx: {
                    mb: 2
                },
                children: t('ProjectBasicInfoSection.title')
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(EntityBasicInfoEditor/* EntityBasicInfoEditor */.p, {
                entity: project,
                showTitle: true,
                showSubtitle: true,
                showTags: true,
                showCategories: true,
                disabled: saving,
                componentName: "ProjectBasicInfo"
            })
        ]
    });
}

;// ./src/components/project/ProjectSettingsContent/ProjectSettingsContent.tsx
/* __next_internal_client_entry_do_not_use__ ProjectSettingsContent auto */ 









const ProjectSettingsContent_fileLog = new Log/* Log */.tG(false, 'ProjectSettingsContent');
ProjectSettingsContent_fileLog.pause = true;
ProjectSettingsContent_fileLog.childrenPaused = true;
// 内部组件：主内容
function ProjectSettingsContentInner() {
    const { t } = (0,es/* useTranslation */.Bd)('homepage/components/project/ProjectSettingsContent/content');
    const { loading, error, project, isUserLoggedIn } = useProjectSettings();
    ProjectSettingsContent_fileLog.log('[ProjectSettingsContentInner] isUserLoggedIn:', isUserLoggedIn);
    if (loading) {
        return /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.A, {
            sx: {
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: '100vh'
            },
            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(CircularProgress/* default */.A, {})
        });
    }
    if (error) {
        return /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.A, {
            sx: {
                padding: 2
            },
            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Alert/* default */.A, {
                severity: "error",
                children: error
            })
        });
    }
    if (!project) {
        return /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.A, {
            sx: {
                padding: 2
            },
            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Alert/* default */.A, {
                severity: "error",
                children: t('ProjectSettingsContent.projectNotFound')
            })
        });
    }
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.A, {
        sx: {
            padding: 2
        },
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsxs)(Stack/* default */.A, {
                spacing: 3,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(ProjectBasicInfoSection, {}),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Divider/* default */.A, {}),
                    isUserLoggedIn ? /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(SyncToServerSection, {}),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(Divider/* default */.A, {})
                        ]
                    }) : null,
                    isUserLoggedIn ? /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(ShareSection, {}),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(Divider/* default */.A, {})
                        ]
                    }) : null,
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(DeleteSection, {}),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(ActionButtons, {})
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(DeleteConfirmDialog, {})
        ]
    });
}
// 导出的主组件
function ProjectSettingsContent() {
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(ProjectSettingsProvider, {
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(ProjectSettingsContentInner, {})
    });
}

;// ./src/pages/project-settings/index.tsx




function ProjectSettings() {
    const { t } = (0,es/* useTranslation */.Bd)('homepage/pages/project-settings/content');
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(AppShell/* AppShell */.G, {
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(AppBar/* AppbarContainer */.W, {
            appbarProps: {
                title: t('content.title'),
                back: true
            },
            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(ProjectSettingsContent, {})
        })
    });
}


/***/ }),

/***/ 16717:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {


    (window.__NEXT_P = window.__NEXT_P || []).push([
      "/project-settings",
      function () {
        return __webpack_require__(7168);
      }
    ]);
    if(false) {}
  

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, [7772,472,402,5241,6940,1490,1322,5409,2314,8143,9050,4550,8547,5812,2346,6242,1508,1469,4456,5591,636,6593,8792], () => (__webpack_exec__(16717)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ _N_E = __webpack_exports__;
/******/ }
]);
//# sourceMappingURL=project-settings-be55d62bdee61c69.js.map