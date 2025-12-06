"use strict";
(self["webpackChunk_N_E"] = self["webpackChunk_N_E"] || []).push([[7572],{

/***/ 9825:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Bd: () => (/* reexport safe */ C_work_android_droid_html_website_2024_12_node_modules_pnpm_react_i18next_15_6_0_i18next_24_2_3_typescript_5_7_3_react_dom_19_1_0_react_19_1_0_react_19_1_0_typescript_5_7_3_node_modules_react_i18next_dist_es_index_js__WEBPACK_IMPORTED_MODULE_0__.Bd)
/* harmony export */ });
/* harmony import */ var C_work_android_droid_html_website_2024_12_node_modules_pnpm_react_i18next_15_6_0_i18next_24_2_3_typescript_5_7_3_react_dom_19_1_0_react_19_1_0_react_19_1_0_typescript_5_7_3_node_modules_react_i18next_dist_es_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(50279);



/***/ }),

/***/ 56257:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   b: () => (/* binding */ ButtonConfirm)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(94513);
/* harmony import */ var _barrel_optimize_names_Button_Dialog_DialogActions_DialogContent_DialogTitle_mui_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(49280);
/* harmony import */ var _barrel_optimize_names_Button_Dialog_DialogActions_DialogContent_DialogTitle_mui_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3711);
/* harmony import */ var _barrel_optimize_names_Button_Dialog_DialogActions_DialogContent_DialogTitle_mui_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(18244);
/* harmony import */ var _barrel_optimize_names_Button_Dialog_DialogActions_DialogContent_DialogTitle_mui_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(69468);
/* harmony import */ var _barrel_optimize_names_Button_Dialog_DialogActions_DialogContent_DialogTitle_mui_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(28669);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(94285);
/* harmony import */ var _barrel_optimize_names_useTranslation_react_i18next__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9825);




function ButtonConfirm(param) {
    let { title, content, confirmText, cancelText, onConfirm, onCancel, onClose, cancelId, confirmId, children } = param;
    const [isOpen, setIsOpen] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const { t } = (0,_barrel_optimize_names_useTranslation_react_i18next__WEBPACK_IMPORTED_MODULE_2__/* .useTranslation */ .Bd)('fanfanlo/mui/dialog/content');
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", {
                onClick: ()=>setIsOpen(true),
                children: children
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_barrel_optimize_names_Button_Dialog_DialogActions_DialogContent_DialogTitle_mui_material__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A, {
                open: isOpen,
                onClose: ()=>setIsOpen(false),
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_barrel_optimize_names_Button_Dialog_DialogActions_DialogContent_DialogTitle_mui_material__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A, {
                        children: title || t('ButtonConfirm.title')
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_barrel_optimize_names_Button_Dialog_DialogActions_DialogContent_DialogTitle_mui_material__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .A, {
                        children: content || t('ButtonConfirm.content')
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_barrel_optimize_names_Button_Dialog_DialogActions_DialogContent_DialogTitle_mui_material__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .A, {
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_barrel_optimize_names_Button_Dialog_DialogActions_DialogContent_DialogTitle_mui_material__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .A, {
                                id: cancelId || 'btn-dialog-button-confirm-cancel',
                                "data-id": cancelId || 'btn-dialog-button-confirm-cancel',
                                onClick: ()=>{
                                    setIsOpen(false);
                                    onCancel === null || onCancel === void 0 ? void 0 : onCancel();
                                    onClose === null || onClose === void 0 ? void 0 : onClose(false);
                                },
                                children: cancelText || t('ButtonConfirm.cancel')
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_barrel_optimize_names_Button_Dialog_DialogActions_DialogContent_DialogTitle_mui_material__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .A, {
                                id: confirmId || 'btn-dialog-button-confirm-confirm',
                                "data-id": confirmId || 'btn-dialog-button-confirm-confirm',
                                onClick: ()=>{
                                    setIsOpen(false);
                                    onConfirm === null || onConfirm === void 0 ? void 0 : onConfirm();
                                    onClose === null || onClose === void 0 ? void 0 : onClose(true);
                                },
                                children: confirmText || t('ButtonConfirm.confirm')
                            })
                        ]
                    })
                ]
            })
        ]
    });
}


/***/ }),

/***/ 97608:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  t: () => (/* binding */ runProject)
});

// EXTERNAL MODULE: ../../libs/droid/android/src/android/AutoWebViewJs.ts + 1 modules
var AutoWebViewJs = __webpack_require__(45921);
// EXTERNAL MODULE: ../../libs/fanfanlo/src/log/Log.ts + 1 modules
var Log = __webpack_require__(48891);
// EXTERNAL MODULE: ../../libs/droid/project-interface/src/action/IAction.intf.ts
var IAction_intf = __webpack_require__(30624);
// EXTERNAL MODULE: ../../libs/droid/project-interface/src/trigger/ITrigger.intf.tsx
var ITrigger_intf = __webpack_require__(14438);
;// ../../libs/droid/project-interface/src/project/project-utils.ts



const fileLog = new Log/* Log */.tG(false, 'project-utils_f');
fileLog.pause = false;
fileLog.childrenPaused = false;
/**
 * 获取Project权限列表
 * 保留原有函数以兼容
 */ function getProjectPermissions(project) {
    const fnLog = fileLog.sub(false, 'getProjectPermissions_fn');
    // fnLog.pause = true;
    fnLog.log('[getProjectPermissions] 开始获取权限, projectId:', project.id);
    const permissions = new Set();
    for(let i = 0; i < project.triggerActionGroup.list.length; i++){
        const triggerAction = project.triggerActionGroup.list[i];
        fnLog.log('[getProjectPermissions] 处理triggerAction[', i, ']');
        for(let j = 0; j < triggerAction.triggerGroup.list.length; j++){
            const trigger = triggerAction.triggerGroup.list[j];
            if (trigger.permissions) {
                fnLog.log('[getProjectPermissions] trigger有权限, 数量:', trigger.permissions.length);
                for(let k = 0; k < trigger.permissions.length; k++){
                    const permission = trigger.permissions[k];
                    fnLog.log('[getProjectPermissions] 添加权限:', permission.name);
                    permissions.add(permission.name);
                }
            }
        }
        for(let j = 0; j < triggerAction.actionGroup.list.length; j++){
            const action = triggerAction.actionGroup.list[j];
            if (action.permissions) {
                fnLog.log('[getProjectPermissions] action有权限, 数量:', action.permissions.length);
                for(let k = 0; k < action.permissions.length; k++){
                    const permission = action.permissions[k];
                    fnLog.log('[getProjectPermissions] 添加权限:', permission.name);
                    permissions.add(permission.name);
                }
            }
        }
    }
    const result = [
        ...permissions
    ];
    fnLog.log('[getProjectPermissions] 权限获取完成, 总数:', result.length);
    return result;
}
/**
 * 获取Project权限详细信息列表
 * 返回包含name、value、reason的完整权限数据
 * 异步加载国际化文本 (通过各 action/trigger 的 loadI18nTexts)
 */ async function getProjectPermissionsData(project) {
    const fnLog = fileLog.sub(false, 'getProjectPermissionsData_fn');
    // fnLog.pause = true;
    fnLog.log('[getProjectPermissionsData] 开始获取权限详细信息, projectId:', project.id);
    // 先调用各 action/trigger 的 loadI18nTexts 加载国际化文本
    fnLog.log('[getProjectPermissionsData] 开始加载国际化文本');
    for(let i = 0; i < project.triggerActionGroup.list.length; i++){
        const triggerAction = project.triggerActionGroup.list[i];
        fnLog.log('[getProjectPermissionsData] 处理triggerAction[', i, ']');
        // 加载 trigger 的 i18n
        for(let j = 0; j < triggerAction.triggerGroup.list.length; j++){
            const trigger = triggerAction.triggerGroup.list[j];
            fnLog.log('[getProjectPermissionsData] 处理trigger[', j, '], type:', trigger.type);
            const triggerUtils = (0,ITrigger_intf/* getTriggerUtils */.gq)(trigger.type);
            fnLog.log('[getProjectPermissionsData] triggerUtils 是否存在:', !!triggerUtils);
            if (triggerUtils) {
                const hasLoadI18nTexts = !!triggerUtils.loadI18nTexts;
                fnLog.log('[getProjectPermissionsData] triggerUtils.loadI18nTexts 是否存在:', hasLoadI18nTexts);
                if (hasLoadI18nTexts) {
                    fnLog.log('[getProjectPermissionsData] 调用 triggerUtils.loadI18nTexts');
                    await triggerUtils.loadI18nTexts(trigger);
                    fnLog.log('[getProjectPermissionsData] trigger i18n 加载完成');
                } else {
                    fnLog.log('[getProjectPermissionsData] trigger 没有 loadI18nTexts 方法');
                }
            } else {
                fnLog.log('[getProjectPermissionsData] 未找到 triggerUtils');
            }
        }
        // 加载 action 的 i18n
        for(let j = 0; j < triggerAction.actionGroup.list.length; j++){
            const action = triggerAction.actionGroup.list[j];
            fnLog.log('[getProjectPermissionsData] 处理action[', j, '], type:', action.type);
            const actionUtils = (0,IAction_intf/* getActionUtils */.e9)(action.type);
            fnLog.log('[getProjectPermissionsData] actionUtils 是否存在:', !!actionUtils);
            if (actionUtils) {
                const hasLoadI18nTexts = !!actionUtils.loadI18nTexts;
                fnLog.log('[getProjectPermissionsData] actionUtils.loadI18nTexts 是否存在:', hasLoadI18nTexts);
                if (hasLoadI18nTexts) {
                    fnLog.log('[getProjectPermissionsData] 调用 actionUtils.loadI18nTexts');
                    await actionUtils.loadI18nTexts(action);
                    fnLog.log('[getProjectPermissionsData] action i18n 加载完成');
                } else {
                    fnLog.log('[getProjectPermissionsData] action 没有 loadI18nTexts 方法');
                }
            } else {
                fnLog.log('[getProjectPermissionsData] 未找到 actionUtils');
            }
        }
    }
    fnLog.log('[getProjectPermissionsData] 所有 i18n 加载完成, 开始收集权限');
    // 收集权限数据
    const permissionsMap = new Map();
    for(let i = 0; i < project.triggerActionGroup.list.length; i++){
        const triggerAction = project.triggerActionGroup.list[i];
        fnLog.log('[getProjectPermissionsData] 收集triggerAction[', i, ']的权限');
        for(let j = 0; j < triggerAction.triggerGroup.list.length; j++){
            const trigger = triggerAction.triggerGroup.list[j];
            if (trigger.permissions) {
                fnLog.log('[getProjectPermissionsData] trigger有权限, 数量:', trigger.permissions.length);
                for(let k = 0; k < trigger.permissions.length; k++){
                    const permission = trigger.permissions[k];
                    fnLog.log('[getProjectPermissionsData] 添加权限:', permission.name, 'value:', permission.value);
                    if (permission.value) {
                        permissionsMap.set(permission.value, permission);
                    } else {
                        fnLog.log('[getProjectPermissionsData] 权限缺少value字段, 跳过:', permission.name);
                    }
                }
            } else {
                fnLog.log('[getProjectPermissionsData] trigger没有权限');
            }
        }
        for(let j = 0; j < triggerAction.actionGroup.list.length; j++){
            const action = triggerAction.actionGroup.list[j];
            if (action.permissions) {
                fnLog.log('[getProjectPermissionsData] action有权限, 数量:', action.permissions.length);
                for(let k = 0; k < action.permissions.length; k++){
                    const permission = action.permissions[k];
                    fnLog.log('[getProjectPermissionsData] 添加权限:', permission.name, 'value:', permission.value);
                    if (permission.value) {
                        permissionsMap.set(permission.value, permission);
                    } else {
                        fnLog.log('[getProjectPermissionsData] 权限缺少value字段, 跳过:', permission.name);
                    }
                }
            } else {
                fnLog.log('[getProjectPermissionsData] action没有权限');
            }
        }
    }
    const result = Array.from(permissionsMap.values());
    fnLog.log('[getProjectPermissionsData] 权限详细信息获取完成, 总数:', result.length);
    return result;
}
/**
 * 获取Project注入配置列表
 * 收集所有 action 和 trigger 中声明的 injects
 * 返回混合格式数组,支持 InjectKeyType 和 [InjectKeyType, string]
 */ function getProjectInjects(project) {
    const fnLog = fileLog.sub(false, 'getProjectInjects_fn');
    // fnLog.pause = true;
    fnLog.log('[getProjectInjects] 开始获取注入配置, projectId:', project.id);
    const injectsArray = [];
    const injectKeysSet = new Set();
    fnLog.log('[getProjectInjects] triggerActionGroup.list长度:', project.triggerActionGroup.list.length);
    for(let i = 0; i < project.triggerActionGroup.list.length; i++){
        const triggerAction = project.triggerActionGroup.list[i];
        fnLog.log('[getProjectInjects] 处理triggerAction[', i, ']');
        fnLog.log('[getProjectInjects] triggerGroup.list长度:', triggerAction.triggerGroup.list.length);
        for(let j = 0; j < triggerAction.triggerGroup.list.length; j++){
            const trigger = triggerAction.triggerGroup.list[j];
            fnLog.log('[getProjectInjects] 处理trigger[', j, ']');
            fnLog.log('[getProjectInjects] trigger完整数据:', JSON.stringify(trigger, null, 2));
            fnLog.log('[getProjectInjects] trigger.permissions:', trigger.permissions);
            fnLog.log('[getProjectInjects] trigger.injects:', trigger.injects);
            if (trigger.injects) {
                fnLog.log('[getProjectInjects] trigger有injects, 数量:', trigger.injects.length);
                for(let k = 0; k < trigger.injects.length; k++){
                    const inject = trigger.injects[k];
                    fnLog.log('[getProjectInjects] 处理inject[', k, ']:', inject);
                    const isArray = Array.isArray(inject);
                    fnLog.log('[getProjectInjects] inject是数组:', isArray);
                    if (isArray) {
                        const injectKey = inject[0];
                        fnLog.log('[getProjectInjects] inject键名:', injectKey);
                        const hasKey = injectKeysSet.has(injectKey);
                        fnLog.log('[getProjectInjects] 是否已存在:', hasKey);
                        if (!hasKey) {
                            fnLog.log('[getProjectInjects] 添加新inject(数组格式):', inject);
                            injectsArray.push(inject);
                            injectKeysSet.add(injectKey);
                        } else {
                            fnLog.log('[getProjectInjects] inject已存在,跳过');
                        }
                    } else {
                        const injectKey = inject;
                        fnLog.log('[getProjectInjects] inject键名:', injectKey);
                        const hasKey = injectKeysSet.has(injectKey);
                        fnLog.log('[getProjectInjects] 是否已存在:', hasKey);
                        if (!hasKey) {
                            fnLog.log('[getProjectInjects] 添加新inject(字符串格式):', inject);
                            injectsArray.push(inject);
                            injectKeysSet.add(injectKey);
                        } else {
                            fnLog.log('[getProjectInjects] inject已存在,跳过');
                        }
                    }
                }
            } else {
                fnLog.log('[getProjectInjects] trigger没有injects');
            }
        }
        fnLog.log('[getProjectInjects] actionGroup.list长度:', triggerAction.actionGroup.list.length);
        for(let j = 0; j < triggerAction.actionGroup.list.length; j++){
            const action = triggerAction.actionGroup.list[j];
            fnLog.log('[getProjectInjects] 处理action[', j, ']');
            fnLog.log('[getProjectInjects] action完整数据:', JSON.stringify(action, null, 2));
            fnLog.log('[getProjectInjects] action.permissions:', action.permissions);
            fnLog.log('[getProjectInjects] action.injects:', action.injects);
            if (action.injects) {
                fnLog.log('[getProjectInjects] action有injects, 数量:', action.injects.length);
                for(let k = 0; k < action.injects.length; k++){
                    const inject = action.injects[k];
                    fnLog.log('[getProjectInjects] 处理inject[', k, ']:', inject);
                    const isArray = Array.isArray(inject);
                    fnLog.log('[getProjectInjects] inject是数组:', isArray);
                    if (isArray) {
                        const injectKey = inject[0];
                        fnLog.log('[getProjectInjects] inject键名:', injectKey);
                        const hasKey = injectKeysSet.has(injectKey);
                        fnLog.log('[getProjectInjects] 是否已存在:', hasKey);
                        if (!hasKey) {
                            fnLog.log('[getProjectInjects] 添加新inject(数组格式):', inject);
                            injectsArray.push(inject);
                            injectKeysSet.add(injectKey);
                        } else {
                            fnLog.log('[getProjectInjects] inject已存在,跳过');
                        }
                    } else {
                        const injectKey = inject;
                        fnLog.log('[getProjectInjects] inject键名:', injectKey);
                        const hasKey = injectKeysSet.has(injectKey);
                        fnLog.log('[getProjectInjects] 是否已存在:', hasKey);
                        if (!hasKey) {
                            fnLog.log('[getProjectInjects] 添加新inject(字符串格式):', inject);
                            injectsArray.push(inject);
                            injectKeysSet.add(injectKey);
                        } else {
                            fnLog.log('[getProjectInjects] inject已存在,跳过');
                        }
                    }
                }
            } else {
                fnLog.log('[getProjectInjects] action没有injects');
            }
        }
    }
    fnLog.log('[getProjectInjects] 注入配置获取完成, 总数:', injectsArray.length);
    return injectsArray;
}
/**
 * 运行Project (保留原有函数)
 * 已废弃,使用generateRhinoScript代替
 */ // function runProject(project: IProjectData): void {
//     fnLog.log('[runProject] 废弃函数被调用, projectId:', project.id);
//     const permissions = getProjectPermissions(project);
//     fnLog.log('[runProject] 权限列表:', permissions);
// }
/**
 * 清理项目中的空 TriggerAction
 * 空 TriggerAction 定义:triggerGroup.list 和 actionGroup.list 都为空
 * @param projectData 项目数据
 * @returns 被清理的空 TriggerAction 数量
 */ function cleanEmptyTriggerActions(projectData) {
    const fnLog = fileLog.sub(false, 'cleanEmptyTriggerActions_fn');
    fnLog.log('[cleanEmptyTriggerActions] 开始清理空 TriggerAction');
    // 检查 triggerActionGroup 是否存在
    const hasTriggerActionGroup = projectData.triggerActionGroup ? true : false;
    fnLog.log('[cleanEmptyTriggerActions] triggerActionGroup 是否存在:', hasTriggerActionGroup);
    if (!projectData.triggerActionGroup) {
        fnLog.log('[cleanEmptyTriggerActions] triggerActionGroup 不存在,跳过清理');
        return 0;
    }
    // 检查 list 是否存在
    const hasList = projectData.triggerActionGroup.list ? true : false;
    fnLog.log('[cleanEmptyTriggerActions] list 是否存在:', hasList);
    if (!projectData.triggerActionGroup.list) {
        fnLog.log('[cleanEmptyTriggerActions] list 不存在,跳过清理');
        return 0;
    }
    // 记录清理前的数量
    const originalCount = projectData.triggerActionGroup.list.length;
    fnLog.log('[cleanEmptyTriggerActions] 清理前 TriggerAction 数量:', originalCount);
    // 过滤空的 triggerAction
    fnLog.log('[cleanEmptyTriggerActions] 开始过滤');
    const filteredList = projectData.triggerActionGroup.list.filter((triggerAction, index)=>{
        var _triggerAction_triggerGroup, _triggerAction_triggerGroup_list, _triggerAction_triggerGroup1, _triggerAction_actionGroup, _triggerAction_actionGroup_list, _triggerAction_actionGroup1;
        fnLog.log('[cleanEmptyTriggerActions] 检查 triggerAction[', index, '] id:', triggerAction.id);
        // 检查 triggerGroup
        const hasTriggerGroup = triggerAction.triggerGroup ? true : false;
        fnLog.log('[cleanEmptyTriggerActions] triggerAction[', index, '] triggerGroup 是否存在:', hasTriggerGroup);
        const hasTriggerList = ((_triggerAction_triggerGroup = triggerAction.triggerGroup) === null || _triggerAction_triggerGroup === void 0 ? void 0 : _triggerAction_triggerGroup.list) ? true : false;
        fnLog.log('[cleanEmptyTriggerActions] triggerAction[', index, '] triggerGroup.list 是否存在:', hasTriggerList);
        const triggerCount = ((_triggerAction_triggerGroup1 = triggerAction.triggerGroup) === null || _triggerAction_triggerGroup1 === void 0 ? void 0 : (_triggerAction_triggerGroup_list = _triggerAction_triggerGroup1.list) === null || _triggerAction_triggerGroup_list === void 0 ? void 0 : _triggerAction_triggerGroup_list.length) || 0;
        fnLog.log('[cleanEmptyTriggerActions] triggerAction[', index, '] trigger 数量:', triggerCount);
        // 检查 actionGroup
        const hasActionGroup = triggerAction.actionGroup ? true : false;
        fnLog.log('[cleanEmptyTriggerActions] triggerAction[', index, '] actionGroup 是否存在:', hasActionGroup);
        const hasActionList = ((_triggerAction_actionGroup = triggerAction.actionGroup) === null || _triggerAction_actionGroup === void 0 ? void 0 : _triggerAction_actionGroup.list) ? true : false;
        fnLog.log('[cleanEmptyTriggerActions] triggerAction[', index, '] actionGroup.list 是否存在:', hasActionList);
        const actionCount = ((_triggerAction_actionGroup1 = triggerAction.actionGroup) === null || _triggerAction_actionGroup1 === void 0 ? void 0 : (_triggerAction_actionGroup_list = _triggerAction_actionGroup1.list) === null || _triggerAction_actionGroup_list === void 0 ? void 0 : _triggerAction_actionGroup_list.length) || 0;
        fnLog.log('[cleanEmptyTriggerActions] triggerAction[', index, '] action 数量:', actionCount);
        // 判断是否为空(trigger 和 action 都为空)
        const hasTriggers = triggerCount > 0;
        const hasActions = actionCount > 0;
        fnLog.log('[cleanEmptyTriggerActions] triggerAction[', index, '] hasTriggers:', hasTriggers);
        fnLog.log('[cleanEmptyTriggerActions] triggerAction[', index, '] hasActions:', hasActions);
        // 至少要有 trigger 或 action 之一
        const shouldKeep = hasTriggers || hasActions;
        fnLog.log('[cleanEmptyTriggerActions] triggerAction[', index, '] shouldKeep:', shouldKeep);
        if (!shouldKeep) {
            fnLog.log('[cleanEmptyTriggerActions] ❌ 清理空的 triggerAction[', index, '] id:', triggerAction.id);
        } else {
            fnLog.log('[cleanEmptyTriggerActions] ✅ 保留 triggerAction[', index, '] id:', triggerAction.id);
        }
        return shouldKeep;
    });
    // 更新列表
    fnLog.log('[cleanEmptyTriggerActions] 更新 list');
    projectData.triggerActionGroup.list = filteredList;
    // 记录清理后的数量
    const finalCount = filteredList.length;
    fnLog.log('[cleanEmptyTriggerActions] 清理后 TriggerAction 数量:', finalCount);
    // 计算被清理的数量
    const removedCount = originalCount - finalCount;
    fnLog.log('[cleanEmptyTriggerActions] 清理了', removedCount, '个空 TriggerAction');
    return removedCount;
}
// ==================== 导出 ====================
const projectUtils = {
    // runProject,
    getProjectPermissions,
    getProjectPermissionsData,
    getProjectInjects,
    cleanEmptyTriggerActions
};

// EXTERNAL MODULE: ../../libs/app/static/src/project/RhinoInjectKeys.ts
var RhinoInjectKeys = __webpack_require__(17092);
;// ../../libs/app/static/src/project/projectRunner2.script.ts
/**
 * 脚本退出机制代码
 *
 * 必须在 javaLib 之前加载，因为 openApp.java.js 等文件会使用 addScriptExitListener
 */ const scriptExitMechanismCode = "// ==================== 脚本退出机制 ====================\n\nlet isScriptRunnable = true;\nlet scriptExitListeners = [];\n\nfunction addScriptExitListener(f){\n    console.log('[addScriptExitListener] 添加监听器');\n    removeScriptExitListener(f);\n    scriptExitListeners.push(f);\n    console.log('[addScriptExitListener] 监听器数量:', scriptExitListeners.length);\n}\n\nfunction removeScriptExitListener(f){\n    console.log('[removeScriptExitListener] 移除监听器');\n    let index = scriptExitListeners.indexOf(f);\n    if(index == -1){\n        console.log('[removeScriptExitListener] 监听器不存在');\n        return;\n    }\n    scriptExitListeners.splice(index, 1);\n    console.log('[removeScriptExitListener] 监听器已移除, 剩余数量:', scriptExitListeners.length);\n}\n\nfunction onJavaCallTerminate(){\n    console.log('[onJavaCallTerminate] Java 调用终止');\n    callScriptExit();\n    return true;\n}\n\nfunction callJavaExit(){\n    console.log('[callJavaExit] 调用 Java 退出');\n\n    // 检查javaRunner是否存在\n    const javaRunnerExists = typeof javaRunner !== 'undefined';\n    console.log('[callJavaExit] javaRunner是否存在:', javaRunnerExists);\n\n    if (!javaRunnerExists) {\n        console.log('[callJavaExit] javaRunner未注入,无法通知Java退出');\n        return;\n    }\n\n    // 检查onJsCallStoped方法是否存在\n    const methodExists = typeof javaRunner.onJsCallStoped === 'function';\n    console.log('[callJavaExit] onJsCallStoped方法是否存在:', methodExists);\n\n    if (!methodExists) {\n        console.log('[callJavaExit] javaRunner.onJsCallStoped方法不存在');\n        return;\n    }\n\n    // 调用Java端的正常退出方法\n    console.log('[callJavaExit] 调用javaRunner.onJsCallStoped');\n    try {\n        javaRunner.onJsCallStoped();\n        console.log('[callJavaExit] 调用成功');\n    } catch (e) {\n        console.log('[callJavaExit] 调用异常');\n        console.log('[callJavaExit] 异常消息:', e.message);\n        console.log('[callJavaExit] 异常堆栈:', e.stack);\n    }\n}\n\nfunction jsCallComplete(){\n    console.log('[jsCallComplete] 脚本完成');\n    callScriptExit();\n    callJavaExit();\n}\n\nfunction jsCallFailed(){\n    console.log('[jsCallFailed] 脚本失败');\n    callScriptExit();\n    callJavaExit();\n}\n\nfunction callScriptExit(){\n    console.log('[callScriptExit] 调用脚本退出');\n    isScriptRunnable = false;\n    console.log('[callScriptExit] 退出监听器数量:', scriptExitListeners.length);\n\n    scriptExitListeners.forEach((f)=>{\n        console.log('[callScriptExit] 执行退出监听器');\n        f();\n    });\n\n    console.log('[callScriptExit] 所有退出监听器已执行');\n}\n\n/**\n * 请求Project强制退出\n * 调用Java端的强制退出方法\n * @param {string} reason 退出原因\n * @returns {boolean} 是否成功调用\n */\nfunction requestProjectForceExit(reason) {\n    console.log('[requestProjectForceExit] 请求强制退出');\n    console.log('[requestProjectForceExit] reason:', reason);\n\n    const javaRunnerExists = typeof javaRunner !== 'undefined';\n    console.log('[requestProjectForceExit] javaRunner是否存在:', javaRunnerExists);\n\n    if (!javaRunnerExists) {\n        console.log('[requestProjectForceExit] javaRunner未注入,无法请求退出');\n        return false;\n    }\n\n    const methodExists = typeof javaRunner.onJsCallForceExit === 'function';\n    console.log('[requestProjectForceExit] onJsCallForceExit方法是否存在:', methodExists);\n\n    if (!methodExists) {\n        console.log('[requestProjectForceExit] javaRunner.onJsCallForceExit方法不存在');\n        return false;\n    }\n\n    console.log('[requestProjectForceExit] 调用javaRunner.onJsCallForceExit');\n    try {\n        javaRunner.onJsCallForceExit();\n        console.log('[requestProjectForceExit] 调用成功');\n        return true;\n    } catch (e) {\n        console.log('[requestProjectForceExit] 调用异常');\n        console.log('[requestProjectForceExit] 异常消息:', e.message);\n        console.log('[requestProjectForceExit] 异常堆栈:', e.stack);\n        return false;\n    }\n}\n";
/**
 * projectRunner2.js 主代码
 *
 * 这是将 IProjectData 转换为可执行 Rhino JavaScript 的核心脚本
 *
 * 注意：脚本退出机制已移到 scriptExitMechanismCode 中
 */ const projectRunner2Text = '\n// ==================== 辅助函数 ====================\n\n/**\n * 将对象转为 JSON 字符串，用于详细日志输出\n * 使用 Java 的 Gson 或 JavaScript 的 JSON.stringify\n */\nfunction toJsonString(obj) {\n    try {\n        return com.fanfanlo.lib.utils.JsonUtil.gson2.toJson(obj);\n    } catch (e) {\n        try {\n            return JSON.stringify(obj);\n        } catch (e2) {\n            return String(obj);\n        }\n    }\n}\n\n// ==================== 从 javaLib 提取依赖函数 ====================\n\nconsole.log("[projectRunner2] 从 javaLib 提取 createEventDispatcher");\nvar createEventDispatcher = javaLib[\'fanfanlo/javajs/v1/event/createEventDispatcher\'].createEventDispatcher;\nconsole.log("[projectRunner2] createEventDispatcher 提取结果:", typeof createEventDispatcher);\n\nconsole.log("[projectRunner2] 从 javaLib 提取 createGetterSetter");\nvar createGetterSetter = javaLib[\'fanfanlo/javajs/v1/utils/createGetterSetter\'].createGetterSetter;\nconsole.log("[projectRunner2] createGetterSetter 提取结果:", typeof createGetterSetter);\n\n// ==================== 常量定义 ====================\n\nlet baseInternalIndex = 0;\n\nlet eventTypeComplete = "eventTypeComplete";\nlet eventTypeFailed = "eventTypeFailed";\nlet eventTypeSuccess = "eventTypeSuccess";\nlet eventTypeError = "eventTypeError";\nlet eventTypeExit = "eventTypeExit";\nlet eventTypeTriggerConditionsOn = "eventTypeTriggerConditionsOn";\nlet eventTypeTriggerConditionsOff = "eventTypeTriggerConditionsOff";\n\nlet baseType = {\n    trigger: "trigger",\n    action: "action",\n    project: "project",\n    triggerActionGroup: "triggerActionGroup",\n    triggerAction: "triggerAction",\n    triggerGroup: "triggerGroup",\n    actionGroup: "actionGroup"\n};\n\nlet projectInitData;\n\n// ==================== 工具函数 ====================\n\nfunction callProjectMemberListExit(list){\n    console.log("[callProjectMemberListExit] 退出列表", "长度:", list.length);\n    for (var i = 0; i < list.length; i++) {\n        try{\n            console.log("[callProjectMemberListExit] 退出项", i, list[i].id);\n            list[i].exit();\n        }catch(e){\n            console.log("[callProjectMemberListExit] 错误", e.message);\n        }\n    }\n}\n\nfunction setChildProjectTaskAction(that, child){\n    console.log("[setChildProjectTaskAction] 设置引用", "parent:", that.baseType, "child:", child.baseType);\n\n    var project = that.baseType == baseType.project ? that : that.project;\n    child.project = project;\n\n    console.log("[setChildProjectTaskAction] child.project 已设置", child.id);\n}\n\n// ==================== createCommonBase ====================\n\nfunction createCommonBase(that, name, type, baseTypeValue){\n    console.log("[createCommonBase] 创建", "name:", name, "type:", type, "baseType:", baseTypeValue);\n\n    baseInternalIndex++;\n    that = that || {};\n\n    var dispatcher = createEventDispatcher();\n    var loggerName = name || baseTypeValue || type;\n    var logger = console.subLogger(loggerName + ":" + baseInternalIndex);\n\n    logger.log("初始化 name=" + name + ", baseType=" + baseTypeValue);\n\n    createGetterSetter(that, "logger", logger, {readonly:true});\n    createGetterSetter(that, "dispatcher", dispatcher, {readonly:true}, undefined, undefined, undefined);\n    createGetterSetter(that, "baseType", baseTypeValue, {readonly:true}, that.dispatcher);\n    createGetterSetter(that, "isRunnable", undefined, {readonly:true}, undefined, undefined, (value, that, key)=>{\n        var bl = isScriptRunnable &&\n                 (that.project ? that.project.isRunnable : true) &&\n                 (that.owner ? that.owner.isRunnable : true) &&\n                 (!that.isExited && !that.isTerminated);\n        return bl;\n    });\n    createGetterSetter(that, "baseMsg", undefined, {readonly:true}, undefined, undefined, (value, that, key)=>{\n        return "base msg|baseInternalIndex=" + that.baseInternalIndex +\n               ", baseType=" + that.baseType + ", name=" + that.name + ", type=" + that.type;\n    });\n\n    createGetterSetter(that, "data", undefined, {}, dispatcher);\n    createGetterSetter(that, "buildData", undefined, {}, dispatcher);\n    createGetterSetter(that, "owner", undefined, {}, dispatcher);\n    createGetterSetter(that, "isRunning", false, {}, dispatcher);\n    createGetterSetter(that, "isExited", false, {}, dispatcher);\n    createGetterSetter(that, "isTerminated", false, {}, dispatcher);\n    createGetterSetter(that, "name", name || type, {}, dispatcher);\n    createGetterSetter(that, "type", type, {}, dispatcher);\n    createGetterSetter(that, "baseInternalIndex", baseInternalIndex, {readonly:true}, dispatcher);\n    createGetterSetter(that, "project", undefined, {}, dispatcher);\n\n    function run(owner){\n        this.owner = owner;\n        this.logger.log("run 开始", "isRunnable:", this.isRunnable);\n        if(!this.isRunnable){\n            this.logger.log("run 不可执行,跳过");\n            return;\n        }\n        this.isRunning = true;\n        this.logger.log("run 调用 onRun");\n        this.onRun();\n    }\n\n    function onRun(){\n        this.logger.log("onRun 空实现");\n    }\n\n    function exit(){\n        this.logger.log("exit 开始", this.type);\n        if(this.isExited)return;\n        this.isExited = true;\n        this.dispatcher.dispatch(eventTypeExit);\n        this.dispatcher.removeAllListeners();\n        this.onExit();\n    }\n\n    function onExit(){\n        this.logger.log("onExit 空实现");\n    }\n\n    that.run = run.bind(that);\n    that.onRun = onRun.bind(that);\n    that.exit = exit.bind(that);\n    that.onExit = onExit.bind(that);\n\n    return that;\n}\n\n// ==================== attachAbstractAct ====================\n\nfunction attachAbstractAct(that){\n    console.log("[attachAbstractAct] 添加成功/失败/完成机制", that.name);\n\n    var dispatcher = that.dispatcher;\n\n    createGetterSetter(that, "isSuccess", false, {}, dispatcher);\n    createGetterSetter(that, "isFailed", false, {}, dispatcher);\n    createGetterSetter(that, "isCompleted", false, {}, dispatcher);\n\n    function dispatchSuccess(){\n        this.logger.log("dispatchSuccess 开始", "isSuccess:", this.isSuccess);\n        if(this.isSuccess)return;\n        this.isSuccess = true;\n        this.isFailed = false;\n        this.logger.log("dispatchSuccess 分发事件");\n        this.dispatcher.dispatchData(eventTypeSuccess, {target:this});\n        this.dispatchComplete();\n    }\n\n    function dispatchComplete(){\n        this.logger.log("dispatchComplete 开始", "isRunning:", this.isRunning);\n        if(!this.isRunning)return;\n        this.logger.log("dispatchComplete 分发事件");\n        this.isRunning = false;\n        this.isCompleted = true;\n        this.dispatcher.dispatchData(eventTypeComplete, {target:this});\n    }\n\n    function dispatchFailed(data){\n        this.logger.log("dispatchFailed 开始", "isFailed:", this.isFailed);\n        if(this.isFailed)return;\n        this.isSuccess = false;\n        this.isFailed = true;\n        this.logger.log("dispatchFailed 分发事件");\n        this.dispatcher.dispatchData(eventTypeFailed, {target:this, data:data});\n        this.dispatchComplete();\n    }\n\n    var superRun = that.run;\n    function run(owner){\n        this.logger.log("run 重置状态");\n        this.isSuccess = false;\n        this.isFailed = false;\n        superRun.call(this, owner);\n    }\n\n    that.dispatchSuccess = dispatchSuccess.bind(that);\n    that.dispatchComplete = dispatchComplete.bind(that);\n    that.dispatchFailed = dispatchFailed.bind(that);\n    that.run = run.bind(that);\n\n    return that;\n}\n\n// ==================== attachAbstractParent ====================\n\nfunction attachAbstractParent(that){\n    console.log("[attachAbstractParent] 添加children管理", that.name);\n\n    createGetterSetter(that, "children", [], {}, that.dispatcher);\n\n    var superOnExit = that.onExit;\n    function onExit(){\n        this.logger.log("onExit 退出所有children");\n        callProjectMemberListExit(this.children);\n        superOnExit.call(this);\n    }\n\n    that.onExit = onExit.bind(that);\n}\n\n// ==================== attachQueueGroup ====================\n\nfunction attachQueueGroup(that){\n    console.log("[attachQueueGroup] 添加队列执行功能", that.name);\n\n    attachAbstractAct(that);\n    attachAbstractParent(that);\n\n    createGetterSetter(that, "childIndex", 0, {}, that.dispatcher);\n\n    function onChildSuccess(event){\n        this.logger.log("onChildSuccess 子项成功", event.target.name);\n        this.checkDoNextOrComplete();\n    }\n\n    function checkDoNextOrComplete(){\n        if(!this.isRunnable){\n            this.logger.log("checkDoNextOrComplete 不可运行");\n            return;\n        }\n\n        this.logger.log("checkDoNextOrComplete", "childIndex:", this.childIndex, "总数:", this.children.length);\n\n        if(this.childIndex < this.children.length - 1){\n            this.childIndex++;\n            this.checkRunIndex();\n        }else{\n            this.logger.log("checkDoNextOrComplete 所有子项完成");\n            this.dispatchSuccess();\n        }\n    }\n\n    function onChildFailed(event){\n        this.logger.log("onChildFailed 子项失败", event.target.name);\n        this.dispatchFailed({target:this, data:event.data});\n    }\n\n    function onChildComplete(event){\n        this.logger.log("onChildComplete 子项完成", event.target.name);\n    }\n\n    var superOnRun = that.onRun;\n    function onRun(){\n        this.logger.log("onRun 队列执行开始");\n        this.checkRunIndex();\n        superOnRun.call(this);\n    }\n\n    function checkRunIndex(){\n        var child = this.children[this.childIndex];\n\n        if(child == undefined){\n            this.logger.log("checkRunIndex child未定义", this.childIndex);\n            this.dispatchFailed({err:new Error("child is undefined"), index:this.childIndex});\n            return;\n        }\n\n        this.logger.log("checkRunIndex 执行child", this.childIndex, child.name);\n\n        child.dispatcher.listenData(eventTypeComplete, this.onChildComplete);\n        child.dispatcher.listenData(eventTypeFailed, this.onChildFailed);\n        child.dispatcher.listenData(eventTypeSuccess, this.onChildSuccess);\n\n        setChildProjectTaskAction(this, child);\n        child.run(this);\n    }\n\n    that.onChildSuccess = onChildSuccess.bind(that);\n    that.checkDoNextOrComplete = checkDoNextOrComplete.bind(that);\n    that.onChildFailed = onChildFailed.bind(that);\n    that.onChildComplete = onChildComplete.bind(that);\n    that.onRun = onRun.bind(that);\n    that.checkRunIndex = checkRunIndex.bind(that);\n\n    return that;\n}\n\n// ==================== attachConcurrentGroup ====================\n\nfunction attachConcurrentGroup(that){\n    console.log("[attachConcurrentGroup] 添加并发执行功能", that.name);\n\n    attachAbstractAct(that);\n    attachAbstractParent(that);\n\n    createGetterSetter(that, "completeConditions", [], {}, that.dispatcher);\n\n    function checkIsSuccess(){\n        this.logger.log("checkIsSuccess 检查", "completeConditions长度:", this.completeConditions.length);\n        this.logger.log("checkIsSuccess children长度:", this.children.length);\n\n        if(this.completeConditions.length == 0){\n            this.logger.log("checkIsSuccess 无条件,默认成功");\n            return true;\n        }\n\n        for (var i = 0; i < this.completeConditions.length; i++) {\n            var list = this.completeConditions[i];\n            var hasFailed = false;\n\n            this.logger.log("checkIsSuccess 检查条件", i, "list长度:", list.length);\n\n            for (var j = 0; j < list.length; j++) {\n                var required = list[j];  // 布尔值：是否要求该位置的 child 成功\n                this.logger.log("checkIsSuccess 位置", j, "required:", required);\n\n                if (required) {\n                    // 只有当 required 为 true 时才检查对应位置的 child\n                    var child = this.children[j];  // 用 j 作为索引，而不是 list[j]\n\n                    if (!child) {\n                        this.logger.log("checkIsSuccess child未定义", "index:", j);\n                        hasFailed = true;\n                        break;\n                    }\n\n                    if (child.isSuccess == false) {\n                        this.logger.log("checkIsSuccess child未成功", j, "child.name:", child.name);\n                        hasFailed = true;\n                        break;\n                    }\n                }\n            }\n\n            if(!hasFailed){\n                this.logger.log("checkIsSuccess 满足条件", i);\n                return true;\n            }\n        }\n\n        this.logger.log("checkIsSuccess 不满足任何条件");\n        return false;\n    }\n\n    function checkSuccess(){\n        if(this.isSuccess){\n            this.logger.log("checkSuccess 已经成功");\n            return;\n        }\n\n        if(!this.checkIsSuccess()){\n            this.logger.log("checkSuccess 条件不满足");\n            return;\n        }\n\n        this.logger.log("checkSuccess 分发成功");\n        this.dispatchSuccess();\n    }\n\n    function checkComplete(){\n        if(this.isSuccess){\n            this.logger.log("checkComplete 已经成功");\n            return;\n        }\n\n        for (var i = 0; i < this.children.length; i++) {\n            var child = this.children[i];\n            if(!child.isExited){\n                this.logger.log("checkComplete 还有child未退出", i);\n                return;\n            }\n        }\n\n        this.logger.log("checkComplete 所有child已退出");\n        this.dispatchComplete();\n    }\n\n    function onChildSuccess(event){\n        this.logger.log("onChildSuccess 子项成功", event.target.name);\n        this.checkSuccess();\n    }\n\n    function onChildFailed(event){\n        this.logger.log("onChildFailed 子项失败", event.target.name);\n        this.checkSuccess();\n    }\n\n    function onChildComplete(event){\n        this.logger.log("onChildComplete 子项完成", event.target.name);\n        this.checkComplete();\n    }\n\n    function onRun(){\n        this.logger.log("onRun 并发执行", "children数量:", this.children.length);\n\n        for(var i = 0; i < this.children.length; i++){\n            var child = this.children[i];\n\n            this.logger.log("onRun 启动child", i, child.name);\n\n            child.dispatcher.listenData(eventTypeComplete, this.onChildComplete);\n            child.dispatcher.listenData(eventTypeFailed, this.onChildFailed);\n            child.dispatcher.listenData(eventTypeSuccess, this.onChildSuccess);\n\n            setChildProjectTaskAction(this, child);\n            child.run(this);\n        }\n    }\n\n    var superOnExit = that.onExit;\n    function onExit(){\n        this.logger.log("onExit 退出所有children");\n        callProjectMemberListExit(this.children);\n        superOnExit.call(this);\n    }\n\n    that.checkIsSuccess = checkIsSuccess.bind(that);\n    that.onChildSuccess = onChildSuccess.bind(that);\n    that.onChildFailed = onChildFailed.bind(that);\n    that.onChildComplete = onChildComplete.bind(that);\n    that.checkSuccess = checkSuccess.bind(that);\n    that.checkComplete = checkComplete.bind(that);\n    that.onRun = onRun.bind(that);\n\n    return that;\n}\n\n// ==================== createTrigger ====================\n\nfunction createTrigger(that, name, type){\n    console.log("[createTrigger] 创建Trigger", "name:", name, "type:", type);\n\n    that = createCommonBase(that, name, type, baseType.trigger);\n\n    createGetterSetter(that, "action", undefined, {}, that.dispatcher);\n    createGetterSetter(that, "conditionOnTriggers", [], {}, that.dispatcher);\n    createGetterSetter(that, "conditionOffTriggers", [], {}, that.dispatcher);\n    createGetterSetter(that, "isConditionOk", false, {}, that.dispatcher);\n\n    function dispatchConditionsOn(data){\n        if(!this.isRunnable){\n            this.logger.log("dispatchConditionsOn 不可运行");\n            return;\n        }\n        this.logger.log("dispatchConditionsOn 分发事件");\n        this.dispatcher.dispatchData(eventTypeTriggerConditionsOn, {target:this, data:data});\n    }\n\n    function dispatchConditionsOff(data){\n        if(!this.isRunnable){\n            this.logger.log("dispatchConditionsOff 不可运行");\n            return;\n        }\n        this.logger.log("dispatchConditionsOff 分发事件");\n        this.dispatcher.dispatchData(eventTypeTriggerConditionsOff, {target:this, data:data});\n    }\n\n    function onConditionsOn(event){\n        this.logger.log("onConditionsOn");\n        this.isConditionOk = true;\n    }\n\n    function onConditionsOff(event){\n        this.logger.log("onConditionsOff");\n        this.isConditionOk = false;\n    }\n\n    that.dispatchConditionsOn = dispatchConditionsOn.bind(that);\n    that.dispatchConditionsOff = dispatchConditionsOff.bind(that);\n    that.onConditionsOn = onConditionsOn.bind(that);\n    that.onConditionsOff = onConditionsOff.bind(that);\n\n    return that;\n}\n\n// ==================== createTriggerGroup ====================\n\nfunction createTriggerGroup(that, name, type, isSequential){\n    console.log("[createTriggerGroup] 创建TriggerGroup", "name:", name, "isSequential:", isSequential);\n\n    that = createCommonBase(that, name, type, baseType.triggerGroup);\n\n    attachAbstractAct(that);\n    attachAbstractParent(that);\n\n    // 存储每个trigger的触发状态\n    var triggerConditionMap = {};\n\n    createGetterSetter(that, "completeConditions", [], {}, that.dispatcher);\n\n    function onRun(){\n        this.logger.log("onRun 开始", "children数量:", this.children.length);\n\n        // 如果没有children,直接触发成功\n        if(this.children.length == 0){\n            this.logger.log("onRun triggerGroup没有children,直接触发成功");\n            this.dispatchSuccess();\n            return;\n        }\n\n        // 初始化状态map\n        for(var i = 0; i < this.children.length; i++){\n            var trigger = this.children[i];\n            triggerConditionMap[trigger.id] = false;\n        }\n\n        // 启动所有trigger\n        for(var i = 0; i < this.children.length; i++){\n            var trigger = this.children[i];\n\n            this.logger.log("onRun 启动trigger", i, trigger.name);\n\n            trigger.dispatcher.listenData(eventTypeTriggerConditionsOn, this.onTriggerConditionsOn);\n            trigger.dispatcher.listenData(eventTypeTriggerConditionsOff, this.onTriggerConditionsOff);\n\n            setChildProjectTaskAction(this, trigger);\n            trigger.run(this);\n        }\n    }\n\n    function onTriggerConditionsOn(event){\n        this.logger.log("onTriggerConditionsOn 触发", event.target.name);\n\n        triggerConditionMap[event.target.id] = true;\n\n        this.checkTriggerGroupComplete();\n    }\n\n    function onTriggerConditionsOff(event){\n        this.logger.log("onTriggerConditionsOff 触发", event.target.name);\n\n        triggerConditionMap[event.target.id] = false;\n\n        // ==================== 重置 isSuccess 状态 ====================\n        // 当任一 trigger 的条件变为 false 时,重置 TriggerGroup 的 success 状态\n        // 这样下次条件满足时可以重新触发 ActionGroup\n        if(this.isSuccess){\n            this.logger.log("onTriggerConditionsOff 重置 isSuccess 为 false");\n            this.isSuccess = false;\n        }\n        // ==================== 重置完成 ====================\n    }\n\n    function checkTriggerGroupComplete(){\n        this.logger.log("checkTriggerGroupComplete 检查");\n\n        // 如果没有completeConditions,默认所有trigger都要触发\n        if(this.completeConditions.length == 0){\n            this.logger.log("checkTriggerGroupComplete 检查所有trigger");\n\n            var allTriggered = true;\n            for(var i = 0; i < this.children.length; i++){\n                var trigger = this.children[i];\n                if(!triggerConditionMap[trigger.id]){\n                    this.logger.log("checkTriggerGroupComplete trigger未触发", i);\n                    allTriggered = false;\n                    break;\n                }\n            }\n\n            if(allTriggered){\n                this.logger.log("checkTriggerGroupComplete 所有trigger已触发");\n                this.dispatchSuccess();\n            }\n            return;\n        }\n\n        // 检查completeConditions\n        for(var i = 0; i < this.completeConditions.length; i++){\n            var checkList = this.completeConditions[i];\n            var checkMatched = true;\n\n            this.logger.log("checkTriggerGroupComplete 检查条件", i);\n\n            for(var j = 0; j < checkList.length; j++){\n                var required = checkList[j];\n                var trigger = this.children[j];\n\n                if(required && !triggerConditionMap[trigger.id]){\n                    this.logger.log("checkTriggerGroupComplete 必需trigger未触发", j);\n                    checkMatched = false;\n                    break;\n                }\n            }\n\n            if(checkMatched){\n                this.logger.log("checkTriggerGroupComplete 满足条件", i);\n                this.dispatchSuccess();\n                return;\n            }\n        }\n\n        this.logger.log("checkTriggerGroupComplete 不满足任何条件");\n    }\n\n    var superOnExit = that.onExit;\n    function onExit(){\n        this.logger.log("onExit 退出所有triggers");\n        callProjectMemberListExit(this.children);\n        superOnExit.call(this);\n    }\n\n    that.onRun = onRun.bind(that);\n    that.onTriggerConditionsOn = onTriggerConditionsOn.bind(that);\n    that.onTriggerConditionsOff = onTriggerConditionsOff.bind(that);\n    that.checkTriggerGroupComplete = checkTriggerGroupComplete.bind(that);\n    that.onExit = onExit.bind(that);\n\n    return that;\n}\n\n// ==================== createActionGroup ====================\n\nfunction createActionGroup(that, name, type, isSequential){\n    console.log("[createActionGroup] 创建ActionGroup", "name:", name, "isSequential:", isSequential);\n\n    that = createCommonBase(that, name, type, baseType.actionGroup);\n\n    if(isSequential){\n        attachQueueGroup(that);\n    }else{\n        attachConcurrentGroup(that);\n    }\n\n    return that;\n}\n\n// ==================== createSingleAction ====================\n\nfunction createSingleAction(that, name, type){\n    console.log("[createSingleAction] 创建SingleAction", "name:", name);\n\n    that = createCommonBase(that, name, type, baseType.action);\n\n    attachAbstractAct(that);\n\n    createGetterSetter(that, "conditionOnTriggers", [], {}, that.dispatcher);\n    createGetterSetter(that, "conditionOffTriggers", [], {}, that.dispatcher);\n    createGetterSetter(that, "onTriggerData", undefined, {}, that.dispatcher);\n\n    // 新增：action 可执行状态（由 trigger on/off 控制）\n    createGetterSetter(that, "isActionable", false, {}, that.dispatcher);\n    // 新增：action 是否正在执行的标记\n    createGetterSetter(that, "isActing", false, {}, that.dispatcher);\n\n    var superRun = that.run;\n    function run(parent){\n        this.logger.log("run 开始");\n        superRun.call(this, parent);  // 先调用父类 run（初始化状态）\n        this.runTriggers();            // 再执行 runTriggers → doAction\n    }\n\n    function checkDoAction(data){\n        if(!this.isRunnable){\n            this.logger.log("checkDoAction 不可运行");\n            return;\n        }\n        this.onTriggerData = data;\n        this.doAction();\n    }\n\n    function doAction(data){\n        this.logger.log("doAction 空实现");\n        this.isActing = true;\n    }\n\n    function runTriggers(){\n        this.logger.log("runTriggers", "conditionOnTriggers长度:", this.conditionOnTriggers.length);\n\n        if(!this.conditionOnTriggers || this.conditionOnTriggers.length == 0){\n            this.logger.log("runTriggers 无trigger,直接执行");\n            // 无 trigger 时，默认设置为可执行\n            this.isActionable = true;\n            this.checkDoAction(undefined);\n        }else{\n            for(var i = 0; i < this.conditionOnTriggers.length; i++){\n                var trigger = this.conditionOnTriggers[i];\n                this.runTrigger(trigger, eventTypeTriggerConditionsOn, this.onConditionsOn);\n            }\n        }\n\n        if(this.conditionOffTriggers){\n            for(var i = 0; i < this.conditionOffTriggers.length; i++){\n                var trigger = this.conditionOffTriggers[i];\n                this.runTrigger(trigger, eventTypeTriggerConditionsOff, this.onConditionsOff);\n            }\n        }\n    }\n\n    function runTrigger(trigger, eventType, cb){\n        this.logger.log("runTrigger", trigger.name, eventType);\n        trigger.dispatcher.listenDomainData(eventType, this, cb);\n        setChildProjectTaskAction(this, trigger);\n        trigger.run(this);\n    }\n\n    function onConditionsOn(event){\n        this.logger.log("onConditionsOn action 可以执行");\n        this.isActionable = true;\n\n        // 如果 action 还没开始执行，则启动\n        if(!this.isActing){\n            this.logger.log("onConditionsOn 启动 action");\n            this.checkDoAction(event && event.data ? event.data : event);\n        } else {\n            // 如果已经在执行，通知 action 恢复\n            this.logger.log("onConditionsOn 恢复 action");\n            this.onActionResume(event && event.data ? event.data : event);\n        }\n    }\n\n    function onConditionsOff(event){\n        this.logger.log("onConditionsOff action 不可执行");\n        this.isActionable = false;\n\n        // 通知 action 暂停\n        if(this.isActing){\n            this.logger.log("onConditionsOff 暂停 action");\n            this.onActionPause(event && event.data ? event.data : event);\n        }\n    }\n\n    function onActionPause(data){\n        this.logger.log("onActionPause action 暂停（空实现，由具体 action 重写）");\n        // 由具体 action 实现暂停逻辑\n    }\n\n    function onActionResume(data){\n        this.logger.log("onActionResume action 恢复（空实现，由具体 action 重写）");\n        // 由具体 action 实现恢复逻辑\n    }\n\n    function onExit(){\n        this.logger.log("onExit");\n        this.exitTriggers();\n    }\n\n    function exitTriggers(){\n        this.logger.log("exitTriggers");\n        callProjectMemberListExit(this.conditionOnTriggers);\n        callProjectMemberListExit(this.conditionOffTriggers);\n    }\n\n    that.run = run.bind(that);\n    that.checkDoAction = checkDoAction.bind(that);\n    that.doAction = doAction.bind(that);\n    that.runTriggers = runTriggers.bind(that);\n    that.runTrigger = runTrigger.bind(that);\n    that.onExit = onExit.bind(that);\n    that.exitTriggers = exitTriggers.bind(that);\n    that.onConditionsOn = onConditionsOn.bind(that);\n    that.onConditionsOff = onConditionsOff.bind(that);\n    that.onActionPause = onActionPause.bind(that);\n    that.onActionResume = onActionResume.bind(that);\n\n    return that;\n}\n\n// ==================== createTriggerAction ====================\n\nfunction createTriggerAction(that, name, type){\n    console.log("[createTriggerAction] 创建TriggerAction", "name:", name);\n\n    that = createCommonBase(that, name, type, baseType.triggerAction);\n\n    attachAbstractAct(that);\n\n    createGetterSetter(that, "triggerGroup", undefined, {}, that.dispatcher);\n    createGetterSetter(that, "actionGroup", undefined, {}, that.dispatcher);\n\n    function onRun(){\n        this.logger.log("onRun 开始");\n        this.runTriggerGroup();\n    }\n\n    function runTriggerGroup(){\n        var triggerGroup = this.triggerGroup;\n\n        if(!triggerGroup){\n            this.logger.log("runTriggerGroup triggerGroup不存在");\n            this.dispatchFailed({error: "triggerGroup not found"});\n            return;\n        }\n\n        this.logger.log("runTriggerGroup 监听事件");\n\n        triggerGroup.dispatcher.listenData(eventTypeSuccess, this.onTriggerGroupSuccess);\n        triggerGroup.dispatcher.listenData(eventTypeFailed, this.onTriggerGroupFailed);\n\n        setChildProjectTaskAction(this, triggerGroup);\n\n        this.logger.log("runTriggerGroup 运行");\n        triggerGroup.run(this);\n    }\n\n    function onTriggerGroupSuccess(event){\n        this.logger.log("onTriggerGroupSuccess TriggerGroup成功");\n        this.runActionGroup();\n    }\n\n    function onTriggerGroupFailed(event){\n        this.logger.log("onTriggerGroupFailed TriggerGroup失败");\n        this.dispatchFailed(event.data);\n    }\n\n    function runActionGroup(){\n        var actionGroup = this.actionGroup;\n\n        if(!actionGroup){\n            this.logger.log("runActionGroup actionGroup不存在");\n            this.dispatchFailed({error: "actionGroup not found"});\n            return;\n        }\n\n        this.logger.log("runActionGroup 监听事件");\n\n        actionGroup.dispatcher.listenData(eventTypeSuccess, this.onActionGroupSuccess);\n        actionGroup.dispatcher.listenData(eventTypeFailed, this.onActionGroupFailed);\n\n        setChildProjectTaskAction(this, actionGroup);\n\n        this.logger.log("runActionGroup 运行");\n        actionGroup.run(this);\n    }\n\n    function onActionGroupSuccess(event){\n        this.logger.log("onActionGroupSuccess ActionGroup成功");\n        this.dispatchSuccess();\n    }\n\n    function onActionGroupFailed(event){\n        this.logger.log("onActionGroupFailed ActionGroup失败");\n        this.dispatchFailed(event.data);\n    }\n\n    var superOnExit = that.onExit;\n    function onExit(){\n        this.logger.log("onExit");\n        if(this.triggerGroup){\n            this.triggerGroup.exit();\n        }\n        if(this.actionGroup){\n            this.actionGroup.exit();\n        }\n        superOnExit.call(this);\n    }\n\n    that.onRun = onRun.bind(that);\n    that.runTriggerGroup = runTriggerGroup.bind(that);\n    that.onTriggerGroupSuccess = onTriggerGroupSuccess.bind(that);\n    that.onTriggerGroupFailed = onTriggerGroupFailed.bind(that);\n    that.runActionGroup = runActionGroup.bind(that);\n    that.onActionGroupSuccess = onActionGroupSuccess.bind(that);\n    that.onActionGroupFailed = onActionGroupFailed.bind(that);\n    that.onExit = onExit.bind(that);\n\n    return that;\n}\n\n// ==================== createTriggerActionGroup ====================\n\nfunction createTriggerActionGroup(that, name, type, isSequential){\n    console.log("[createTriggerActionGroup] 创建TriggerActionGroup", "name:", name, "isSequential:", isSequential);\n\n    that = createCommonBase(that, name, type, baseType.triggerActionGroup);\n\n    if(isSequential){\n        attachQueueGroup(that);\n    }else{\n        attachConcurrentGroup(that);\n    }\n\n    return that;\n}\n\n// ==================== createProject ====================\n\nfunction createProject(that, name, type){\n    console.log("[createProject] 创建Project", "name:", name);\n\n    that = createCommonBase(that, name, type, baseType.project);\n\n    attachQueueGroup(that);\n\n    function terminate(){\n        this.logger.log("terminate 中止Project");\n        this.isTerminated = true;\n        this.exit();\n    }\n\n    that.terminate = terminate.bind(that);\n\n    return that;\n}\n\n// ==================== Build 函数 ====================\n\nfunction buildTrigger(triggerData, triggerGroup){\n    console.log("[buildTrigger] 构建Trigger", triggerData.id);\n\n    var trigger = createTrigger({}, triggerData.name, triggerData.type);\n\n    trigger.id = triggerData.id;\n    console.log("[buildTrigger] 设置 trigger.data = triggerData.javaData");\n    trigger.data = triggerData.javaData;\n    trigger.buildData = triggerData;\n    console.log("[buildTrigger] trigger.data:", trigger.data);\n    console.log("[buildTrigger] trigger.buildData.id:", trigger.buildData.id);\n    trigger.project = triggerGroup.project;\n    trigger.owner = triggerGroup;\n\n    // ==================== 传递 triggerActionContext ====================\n    console.log("[buildTrigger] 传递 triggerActionContext");\n    trigger.triggerActionContext = triggerGroup.triggerActionContext;\n    console.log("[buildTrigger] triggerActionContext 已传递");\n    // ==================== triggerActionContext 传递完成 ====================\n\n    if(triggerData.type){\n        var triggerStore = javaLib["fanfanlo/javajs/v1/project/store"].getTrigger(triggerData.type);\n        if(triggerStore){\n            console.log("[buildTrigger] triggerStore 存在:", triggerData.type);\n            if(triggerStore.attach){\n                console.log("[buildTrigger] 调用attach", triggerData.type);\n                triggerStore.attach(trigger);\n            }else{\n                console.log("[buildTrigger] 警告: triggerStore.attach 不存在", triggerData.type);\n            }\n        }else{\n            console.log("[buildTrigger] 警告: 未找到 triggerStore", triggerData.type);\n        }\n    }else{\n        console.log("[buildTrigger] 警告: triggerData.type 为空");\n    }\n\n    return trigger;\n}\n\nfunction buildTriggerGroup(triggerGroupData, triggerAction){\n    console.log("[buildTriggerGroup] 构建TriggerGroup", triggerGroupData.id);\n\n    var isSequential = triggerGroupData.isSequential !== undefined ? triggerGroupData.isSequential : true;\n\n    var triggerGroup = createTriggerGroup(\n        {},\n        triggerGroupData.name,\n        triggerGroupData.type,\n        isSequential\n    );\n\n    triggerGroup.id = triggerGroupData.id;\n    triggerGroup.data = triggerGroupData;\n    triggerGroup.project = triggerAction.project;\n    triggerGroup.owner = triggerAction;\n\n    // ==================== 传递 triggerActionContext ====================\n    console.log("[buildTriggerGroup] 传递 triggerActionContext");\n    triggerGroup.triggerActionContext = triggerAction.triggerActionContext;\n    console.log("[buildTriggerGroup] triggerActionContext 已传递");\n    // ==================== triggerActionContext 传递完成 ====================\n\n    var triggerList = triggerGroupData.list || [];\n    console.log("[buildTriggerGroup] 构建Triggers", "数量:", triggerList.length);\n\n    for(var i = 0; i < triggerList.length; i++){\n        var triggerData = triggerList[i];\n        var triggerThat = buildTrigger(triggerData, triggerGroup);\n        triggerGroup.children.push(triggerThat);\n    }\n\n    if(triggerGroupData.checks){\n        console.log("[buildTriggerGroup] 设置checks");\n        triggerGroup.completeConditions = triggerGroupData.checks;\n    }\n\n    return triggerGroup;\n}\n\nfunction buildAction(actionData, actionGroup){\n    console.log("[buildAction] 构建Action", actionData.id);\n\n    var action = createSingleAction({}, actionData.name, actionData.type);\n\n    action.id = actionData.id;\n    console.log("[buildAction] 设置 action.data = actionData.javaData");\n    action.data = actionData.javaData;\n    action.buildData = actionData;\n    console.log("[buildAction] action.data:", action.data);\n    console.log("[buildAction] action.buildData.id:", action.buildData.id);\n    action.project = actionGroup.project;\n    action.owner = actionGroup;\n\n    // ==================== 传递 triggerActionContext ====================\n    console.log("[buildAction] 传递 triggerActionContext");\n    action.triggerActionContext = actionGroup.triggerActionContext;\n    console.log("[buildAction] triggerActionContext 已传递");\n    // ==================== triggerActionContext 传递完成 ====================\n\n    if(actionData.type){\n        var actionStore = javaLib["fanfanlo/javajs/v1/project/store"].getAction(actionData.type);\n        if(actionStore){\n            console.log("[buildAction] actionStore 存在:", actionData.type);\n            if(actionStore.attach){\n                console.log("[buildAction] 调用attach", actionData.type);\n                actionStore.attach(action);\n            }else{\n                console.log("[buildAction] 警告: actionStore.attach 不存在", actionData.type);\n            }\n        }else{\n            console.log("[buildAction] 警告: 未找到 actionStore", actionData.type);\n        }\n    }else{\n        console.log("[buildAction] 警告: actionData.type 为空");\n    }\n\n    return action;\n}\n\nfunction buildActionGroup(actionGroupData, triggerAction){\n    console.log("[buildActionGroup] 构建ActionGroup", actionGroupData.id);\n\n    var isSequential = actionGroupData.isSequential !== undefined ? actionGroupData.isSequential : true;\n\n    var actionGroup = createActionGroup(\n        {},\n        actionGroupData.name,\n        actionGroupData.type,\n        isSequential\n    );\n\n    actionGroup.id = actionGroupData.id;\n    actionGroup.data = actionGroupData;\n    actionGroup.project = triggerAction.project;\n    actionGroup.owner = triggerAction;\n\n    // ==================== 传递 triggerActionContext ====================\n    console.log("[buildActionGroup] 传递 triggerActionContext");\n    actionGroup.triggerActionContext = triggerAction.triggerActionContext;\n    console.log("[buildActionGroup] triggerActionContext 已传递");\n    // ==================== triggerActionContext 传递完成 ====================\n\n    var actionList = actionGroupData.list || [];\n    console.log("[buildActionGroup] 构建Actions", "数量:", actionList.length);\n\n    for(var i = 0; i < actionList.length; i++){\n        var actionData = actionList[i];\n        var actionThat = buildAction(actionData, actionGroup);\n        actionGroup.children.push(actionThat);\n    }\n\n    if(actionGroupData.checks){\n        console.log("[buildActionGroup] 设置checks");\n        actionGroup.completeConditions = actionGroupData.checks;\n    }\n\n    return actionGroup;\n}\n\nfunction buildTriggerAction(triggerActionData, triggerActionGroup){\n    console.log("[buildTriggerAction] 构建TriggerAction", triggerActionData.id);\n\n    var triggerAction = createTriggerAction(\n        {},\n        triggerActionData.name,\n        triggerActionData.type\n    );\n\n    triggerAction.id = triggerActionData.id;\n    triggerAction.data = triggerActionData;\n    triggerAction.project = triggerActionGroup.project;\n    triggerAction.owner = triggerActionGroup;\n\n    // ==================== 创建 triggerActionContext ====================\n    console.log("[buildTriggerAction] 创建 triggerActionContext");\n    var triggerActionContext = {};\n    triggerAction.triggerActionContext = triggerActionContext;\n    console.log("[buildTriggerAction] triggerActionContext 已创建");\n    // ==================== triggerActionContext 创建完成 ====================\n\n    console.log("[buildTriggerAction] 构建TriggerGroup");\n    var triggerGroupThat = buildTriggerGroup(triggerActionData.triggerGroup, triggerAction);\n    triggerAction.triggerGroup = triggerGroupThat;\n\n    console.log("[buildTriggerAction] 构建ActionGroup");\n    var actionGroupThat = buildActionGroup(triggerActionData.actionGroup, triggerAction);\n    triggerAction.actionGroup = actionGroupThat;\n\n    return triggerAction;\n}\n\nfunction buildTriggerActionGroup(triggerActionGroupData, project){\n    console.log("[buildTriggerActionGroup] 构建TriggerActionGroup", triggerActionGroupData.id);\n\n    var isSequential = triggerActionGroupData.isSequential !== undefined ? triggerActionGroupData.isSequential : true;\n\n    var triggerActionGroup = createTriggerActionGroup(\n        {},\n        triggerActionGroupData.name,\n        triggerActionGroupData.type,\n        isSequential\n    );\n\n    triggerActionGroup.id = triggerActionGroupData.id;\n    triggerActionGroup.data = triggerActionGroupData;\n    triggerActionGroup.project = project;\n\n    var triggerActionList = triggerActionGroupData.list || [];\n    console.log("[buildTriggerActionGroup] 构建TriggerActions", "数量:", triggerActionList.length);\n\n    for(var i = 0; i < triggerActionList.length; i++){\n        var triggerActionData = triggerActionList[i];\n        var triggerActionThat = buildTriggerAction(triggerActionData, triggerActionGroup);\n        triggerActionGroup.children.push(triggerActionThat);\n    }\n\n    if(triggerActionGroupData.checks){\n        console.log("[buildTriggerActionGroup] 设置checks");\n        triggerActionGroup.completeConditions = triggerActionGroupData.checks;\n    }\n\n    return triggerActionGroup;\n}\n\nfunction buildProject(projectData){\n    console.log("[buildProject] ========== 开始构建Project ==========", projectData.id);\n\n    var project = createProject({}, projectData.name, projectData.type);\n\n    project.data = projectData;\n\n    console.log("[buildProject] 构建TriggerActionGroup");\n    var triggerActionGroupThat = buildTriggerActionGroup(projectData.triggerActionGroup, project);\n\n    project.children = [triggerActionGroupThat];\n\n    console.log("[buildProject] Project构建完成");\n    return project;\n}\n\n// ==================== projectBuilder ====================\n\nfunction projectBuilder(initData){\n    try{\n        console.log("[projectBuilder] ========== 开始 ==========");\n\n        // 修复: 兼容两种传入方式\n        projectInitData = initData.projectInitData || initData;\n        console.log("[projectBuilder] projectInitData:", projectInitData.id, projectInitData.name);\n\n        var project = buildProject(projectInitData);\n\n        function onScriptCallExit(){\n            console.log("[projectBuilder] 脚本退出回调");\n            if(project.isTerminated || project.isExited || project.isSuccess || project.isFailed){\n                console.log("[projectBuilder] Project已结束,跳过");\n                return;\n            }\n            project.isTerminated = true;\n            project.exit();\n            project.dispatchComplete();\n        }\n\n        addScriptExitListener(onScriptCallExit);\n\n        // ==================== keepAlive 控制逻辑 ====================\n        const keepAlive = projectInitData.keepAlive;\n        console.log("[projectBuilder] keepAlive:", String(keepAlive));\n        console.log("[projectBuilder] keepAlive type:", typeof keepAlive);\n\n        const shouldKeepAlive = keepAlive === true;\n        console.log("[projectBuilder] shouldKeepAlive:", shouldKeepAlive);\n        // ==================== keepAlive 控制逻辑结束 ====================\n\n        // 只有在非 keepAlive 模式下才监听 Complete/Failed 事件自动退出\n        if (!shouldKeepAlive) {\n            console.log("[projectBuilder] 非 keepAlive 模式,监听 Complete/Failed 事件");\n\n            project.dispatcher.listenData(eventTypeComplete, function(event){\n                console.log("[projectBuilder] ========== Project完成 ==========");\n                console.log("[projectBuilder] keepAlive:", shouldKeepAlive, "调用 project.exit()");\n                project.exit();\n            });\n\n            project.dispatcher.listenData(eventTypeFailed, function(event){\n                console.log("[projectBuilder] ========== Project失败 ==========");\n                console.log("[projectBuilder] keepAlive:", shouldKeepAlive, "调用 project.exit()");\n                project.exit();\n            });\n        } else {\n            console.log("[projectBuilder] keepAlive 模式,不监听 Complete/Failed 事件");\n            console.log("[projectBuilder] Project 将持续运行,直到手动终止或脚本退出");\n        }\n\n        // Exit 事件监听器始终存在,用于清理资源\n        project.dispatcher.listenData(eventTypeExit, function(event){\n            console.log("[projectBuilder] ========== Project退出 ==========");\n            console.log("[projectBuilder] 调用 jsCallComplete()");\n            jsCallComplete();\n        });\n\n        console.log("[projectBuilder] 运行Project");\n        project.run();\n\n    }catch(e){\n        console.log("[projectBuilder] 错误", e.message, e.stack);\n    }\n}\n\n// ==================== 导出 ====================';

;// ../../libs/app/static/src/project/javaLibDataMap.ts
var javaLib = {
    "fanfanlo/javajs/v1/a11y/a11yUtils": {
        "content": "\n    (()=>{\n    try{\n        // @ts-ignore\n        with({\n            get Types(){\n                return javaLib[\"fanfanlo/javajs/v1/a11y/node/ICondition\"].Types;\n            }\n            ,\n            get Action(){\n                return javaLib[\"fanfanlo/javajs/v1/a11y/node/ICondition\"].Action;\n            }\n            ,\n            get Wait(){\n                return javaLib[\"fanfanlo/javajs/v1/a11y/node/ICondition\"].Wait;\n            }\n            }){\n            \r\n\r\nfunction checkIsPackageActivities(pn, activities){\r\n    let packageName = a11yModel.lastFullScreenPackage;\r\n    let activityName = a11yModel.lastFullScreenActivity;\r\n    let pnMatched = pn == packageName;\r\n    let anMatched = activities.some(an=>an==activityName);\r\n    console.log(\"aaaaaaaaaaaaaapppppppppp\", pnMatched, anMatched)\r\n    return pnMatched && anMatched;\r\n}\r\n\r\nfunction checkNodesOnShow(pn, conditions, checkList, callback){\r\n    function cb(nodes){\r\n        if(!isScriptRunnable)return;\r\n        if(!nodes){\r\n            callback(undefined, false, undefined, undefined)\r\n            return;\r\n        }\r\n        if(!checkList){\r\n            callback(nodes, true, undefined, undefined)\r\n            return;\r\n        }\r\n        for (let i = 0; i < checkList.length; i++) {\r\n            let list = checkList[i];\r\n            let isOk = list.every((data)=>nodes[data.index] != null);\r\n            if(isOk){\r\n                callback(nodes, isOk, undefined, list);\r\n                return;\r\n            }\r\n        }\r\n        callback(nodes, false, undefined, undefined)\r\n    }\r\n    function onError(err){\r\n        callback(undefined, false, err, undefined)\r\n    }\r\n    let proxy = new com.fanfanlo.droidlib.auto.service.accessibility.krosxx.SfProxy();\r\n    let job = proxy.find(a11yModel, pn, conditions, cb, onError);\r\n    return job;\r\n}\r\nfunction conditionJsonToData(data){\r\n    let s = JSON.stringify(data);\r\n    // return com.fanfanlo.droidlib.auto.command.objectmapper.projectObjectMapper.stringToSfRoot(s)\r\n    return com.fanfanlo.droidlib.auto.command.objectmapper.projectObjectMapper.stringToSfCond(s)\r\n}\r\nfunction createCheckNodesOnShow(data, callback, logger){\r\n    if(logger) logger = logger.createSub(`checkNodesOnShowFn-${data.name}`)\r\n    let nodeConditions = JSON.parse(JSON.stringify(data.nodeConditions))\r\n    let conditions = nodeConditions.map(cond=>{\r\n        let root = cond;\r\n        while(cond){\r\n            cond.type = Types[cond.type];\r\n            if(cond.action){\r\n                cond.action.type = Action[cond.action.type]\r\n            }\r\n            if(cond.wait){\r\n                cond.wait.type = Wait[cond.wait.type]\r\n            }\r\n            cond = cond.next;\r\n        }\r\n        return conditionJsonToData(root)\r\n    })\r\n    data.conditions = conditions;\r\n    let lastCheckNodesIntervalTime = 0;\r\n    let lastJob = undefined;\r\n    function check(){\r\n        let now = Date.now();\r\n        if(lastJob){\r\n            let checkNodesCancelPrevJobMaxIntervalTime = data.checkNodesCancelPrevJobMaxIntervalTime || 1000 * 1;\r\n            let diff = now - lastCheckNodesIntervalTime;\r\n            if(diff < checkNodesCancelPrevJobMaxIntervalTime){\r\n                lastJob.cancel();\r\n            }\r\n        }\r\n        function cb(nodes, isOk, err, matchedCheckList){\r\n            logger.log(\"1on1 cb\", isOk, err)\r\n            if(!isOk){\r\n                logger.log(`1on1 cb not ok`, conditions)\r\n            }\r\n            lastCheckNodesIntervalTime = now;\r\n            callback(nodes, isOk, err, matchedCheckList);\r\n        }\r\n        lastJob = checkNodesOnShow(data.packageName, conditions, data.nodeCheckList, cb)\r\n        return lastJob;\r\n    }\r\n    return {check}\r\n}\r\n\r\nfunction keyboardIsOpen(){\r\n    return com.fanfanlo.droidlib.auto.service.accessibility.a11yUtils.checkKeyboardIsOpened(a11yModel.service);\r\n}\r\nlet prevGlobalBackKeyTime = 0;\r\nlet globalBackKeyInterval = 100 * 25;\r\n// 如果ime已经打开则会尝试关闭ime并返回true\r\n// 否则返回false\r\nfunction hideIme(){\r\n    // if(!checkCanGlobalActionBack())return false;\r\n    let isIme = com.fanfanlo.droidlib.auto.service.accessibility.a11yUtils.checkKeyboardIsOpened(a11yModel.service);\r\n    console.log(\"iiiiiiiiiiiis ime\", isIme);\r\n    if(isIme){\r\n        let bl = com.fanfanlo.lib.utils.KeyboardUtils.hideKeyboard();\r\n        console.log(\"hide ime222\", bl);\r\n        return bl\r\n    }\r\n    return false;\r\n}\r\n\r\nfunction globalActionBack(globalBackActionIntervalTime){\r\n    console.log(\"globalActionBack1\")\r\n    if(!checkCanGlobalActionBack(globalBackActionIntervalTime))return false;\r\n    let bl = a11yModel.globalActionBack();\r\n    if(bl){\r\n        prevGlobalBackKeyTime = Date.now();\r\n    }\r\n    console.log(\"globalActionBack2\", bl)\r\n    return bl;\r\n}\r\nfunction checkCanGlobalActionBack(globalBackActionIntervalTime){\r\n    let now = Date.now();\r\n    let diff = now - prevGlobalBackKeyTime;\r\n    let time = globalBackActionIntervalTime == undefined || globalBackActionIntervalTime <= 0 ? globalBackKeyInterval : globalBackActionIntervalTime\r\n    let bl =  diff > time;\r\n    console.log(\"1checkCanGlobalActionBack1 back\", bl, diff, now, prevGlobalBackKeyTime);\r\n    return bl;\r\n}\r\n// 如果package已经打开并且ime也是open，则会尝试关闭ime，返回true\r\n// 否则返回false\r\nfunction hideImeIfPackageOpened(pn){\r\n    let win = com.fanfanlo.droidlib.auto.service.accessibility.a11yUtils.getWindowByPackageName(a11yModel.service, pn, false, -1);\r\n    console.log(\"hideImeIfPackageOpened1 win!=null\", win != null, pn)\r\n    if(!win)return false;\r\n    return hideIme();\r\n}\r\n\r\nfunction createNodeAction(actionConf){\r\n    let type = actionConf.type;\r\n    let nodeAction;\r\n    switch (type){\r\n        case \"Click\":\r\n            nodeAction = new com.fanfanlo.droidlib.auto.service.accessibility.krosxx.Click();\r\n            break;\r\n        case \"LongClick\":\r\n            nodeAction = new com.fanfanlo.droidlib.auto.service.accessibility.krosxx.LongClick();\r\n            break;\r\n        case \"TryClick\":\r\n            nodeAction = new com.fanfanlo.droidlib.auto.service.accessibility.krosxx.TryClick();\r\n            break;\r\n        case \"TryLongClick\":\r\n            nodeAction = new com.fanfanlo.droidlib.auto.service.accessibility.krosxx.TryLongClick();\r\n            break;\r\n        case \"SetText\":\r\n            nodeAction = new com.fanfanlo.droidlib.auto.service.accessibility.krosxx.SetText(actionConf.value);\r\n            break;\r\n        default:\r\n            let msg = `no action matched, ${type}`\r\n            console.log(`createNodeAction1`, actionConf)\r\n            throw new Error(msg)\r\n    }\r\n    return nodeAction\r\n}\r\nreturn {checkIsPackageActivities, checkNodesOnShow, createCheckNodesOnShow, hideIme, hideImeIfPackageOpened, checkCanGlobalActionBack, globalActionBack, keyboardIsOpen, createNodeAction}\n        }\n    }catch(e){\n        console.log(\"init error key is fanfanlo/javajs/v1/a11y/a11yUtils.java.js\", e);\n    }\n    })()\n    ",
        "dependencies": [
            {
                "path": "fanfanlo/javajs/v1/a11y/node/ICondition",
                "properties": [
                    "Types",
                    " Action",
                    " Wait"
                ]
            }
        ]
    },
    "fanfanlo/javajs/v1/event/createEventDispatcher": {
        "content": "\n    (()=>{\n    try{\n        // @ts-ignore\n        with({}){\n            \r\nfunction createEventDispatcher(){\r\n    return new com.fanfanlo.lib.event.EventDispatcher()\r\n}\r\n\r\nreturn {createEventDispatcher}\n        }\n    }catch(e){\n        console.log(\"init error key is fanfanlo/javajs/v1/event/createEventDispatcher.java.js\", e);\n    }\n    })()\n    ",
        "dependencies": []
    },
    "fanfanlo/javajs/v1/project/store": {
        "content": "\n    (()=>{\n    try{\n        // @ts-ignore\n        with({}){\n            let projectMap = {};\r\nlet taskMap = {};\r\nlet actionMap = {\r\n    \"fanfanlo/javajs/v1/project/components/action/app/openApp\":{\r\n        type:\"fanfanlo/javajs/v1/project/components/action/app/openApp\",\r\n        attach:undefined\r\n    }\r\n};\r\nlet triggerMap = {\r\n    \"fanfanlo/javajs/v1/project/components/trigger/time/later\":{\r\n        type:\"fanfanlo/javajs/v1/project/components/trigger/time/later\",\r\n        attach:undefined\r\n    }\r\n};\r\nfunction getFromMap(map, type, mapName){\r\n    if(map[type] == undefined){\r\n        throw new Error(mapName + \" no type registered \" + type )\r\n    }\r\n    return map[type];\r\n}\r\n\r\nfunction getProject(type){\r\n    return getFromMap(projectMap, type, \"project\")\r\n}\r\nfunction getTask(type){\r\n    return getFromMap(taskMap, type, \"task\")\r\n}\r\nfunction getAction(type){\r\n    return getFromMap(actionMap, type, \"action\")\r\n}\r\nfunction getTrigger(type){\r\n    return getFromMap(triggerMap, type, \"trigger\")\r\n}\r\nfunction regProject(type, attach){\r\n    regToMap(projectMap, type, attach, \"project\")\r\n}\r\nfunction regTask(type, attach){\r\n    regToMap(taskMap, type, attach, \"task\")\r\n}\r\nfunction regAction(type, attach){\r\n    regToMap(actionMap, type, attach, \"action\")\r\n}\r\nfunction regTrigger(type, attach){\r\n    regToMap(triggerMap, type, attach, \"trigger\")\r\n}\r\nfunction regToMap(map, type, attach, mapName){\r\n    // if(map[type] != undefined){\r\n    //     throw new Error(mapName + ` type already registerd, type is ` + type)\r\n    // }\r\n    // if(!type || type.length == 0){\r\n    //     throw new Error(mapName + ` type is undefined or empty ` + type);\r\n    // }\r\n    map[type] = {\r\n        type, attach\r\n    }\r\n    projectStoreLogger.log(`store register ${type}`)\r\n}\r\nreturn {projectMap, taskMap, actionMap, triggerMap,\r\n    regProject, regTask,  regAction, regTrigger,\r\n    getProject, getTask, getAction, getTrigger\r\n}\n        }\n    }catch(e){\n        console.log(\"init error key is fanfanlo/javajs/v1/project/store.java.js\", e);\n    }\n    })()\n    ",
        "dependencies": []
    },
    "fanfanlo/javajs/v1/utils/createGetterSetter": {
        "content": "\n    (()=>{\n    try{\n        // @ts-ignore\n        with({}){\n            \r\nfunction createGetterSetter(that, key, value, conf, dispatcher, setFn, getFn){\r\n    Object.defineProperty(that, key, {\r\n        get(){\r\n            let v = getFn ? getFn(value, that, key) : value;\r\n            if(conf && conf.setter){\r\n                let s = conf.setter;\r\n                if(s.logger){\r\n                    s.logger(that, key).log(v);\r\n                }\r\n                if(s.stack){\r\n                    try {\r\n                        throw new Error(key);\r\n                    }catch (e) {\r\n                        console.log(v, e.stack)\r\n                    }\r\n                }\r\n            }\r\n            return v;\r\n        },\r\n        set(v){\r\n            if(conf.readonly){\r\n                return;\r\n            }\r\n            let old = value;\r\n            value = setFn ? setFn(v, that, key) : v;\r\n            if(conf && conf.getter){\r\n                let s = conf.getter;\r\n                if(s.logger){\r\n                    s.logger(that, key).log(v)\r\n                }\r\n                if(s.stack){\r\n                    try {\r\n                        throw new Error(key);\r\n                    }catch (e) {\r\n                        let log = s.logger ? s.logger(that, key).log : console.log;\r\n                        log(key, \"setter old value is\", old);\r\n                        log(key, \"setter now value is\", value)\r\n                        log(key, \"setter\", e.stack)\r\n                    }\r\n                }\r\n            }\r\n\r\n            if(dispatcher){\r\n                dispatcher.dispatchData(`${key}Changed`,{old, now:value})\r\n            }\r\n        }\r\n    })\r\n}\r\n\r\nreturn {createGetterSetter}\n        }\n    }catch(e){\n        console.log(\"init error key is fanfanlo/javajs/v1/utils/createGetterSetter.java.js\", e);\n    }\n    })()\n    ",
        "dependencies": []
    },
    "fanfanlo/javajs/v1/utils/ExitHandler": {
        "content": "\n    (()=>{\n    try{\n        // @ts-ignore\n        with({\n            get eventTypeComplete(){\n                return javaLib[\"fanfanlo/javajs/v1/project/base/projectEventTypes\"].eventTypeComplete;\n            }\n            ,\n            get eventTypeExit(){\n                return javaLib[\"fanfanlo/javajs/v1/project/base/projectEventTypes\"].eventTypeExit;\n            }\n            }){\n            \r\n\r\nfunction createExitHandler(exitOrCompleteDispatcher, dispatchers, logger){\r\n    if(logger)logger = logger.createSub(\"exitHandler\");\r\n    let eventDispatchers = dispatchers || [];\r\n    let cleanList = [];\r\n    let domain = {};\r\n    function onScriptCallExit(){\r\n        if(logger) logger.log(\"onScriptCallExit1\");\r\n        onExit();\r\n    }\r\n    addScriptExitListener(onScriptCallExit);\r\n    exitOrCompleteDispatcher.listenData(eventTypeExit, onExit);\r\n    exitOrCompleteDispatcher.listenData(eventTypeComplete, onExit);\r\n    function onExit(e){\r\n        if(logger) logger.log(\"onExit1\");\r\n        clean();\r\n    }\r\n    function clean(){\r\n        if(logger) logger.log(\"clean1\");\r\n        eventDispatchers.forEach(dispatcher=>{\r\n            if(!dispatcher)return;\r\n            dispatcher.removeDomain(domain);\r\n        })\r\n        cleanList.forEach(fn=>fn())\r\n        removeScriptExitListener(onScriptCallExit);\r\n    }\r\n    function addExitFn(fn){\r\n        let index = cleanList.indexOf(fn);\r\n        if(index > -1)return;\r\n        cleanList.push(fn);\r\n    }\r\n    function removeExitFn(fn){\r\n        let index = cleanList.indexOf(fn);\r\n        if(index == -1)return;\r\n        cleanList.splice(index, 1);\r\n    }\r\n    function addEventDispatcher(dispatcher){\r\n        eventDispatchers.push(dispatcher);\r\n    }\r\n\r\n    return {domain, addEventDispatcher, addExitFn, removeExitFn, logger}\r\n}\r\n\r\nreturn {createExitHandler}\n        }\n    }catch(e){\n        console.log(\"init error key is fanfanlo/javajs/v1/utils/ExitHandler.java.js\", e);\n    }\n    })()\n    ",
        "dependencies": [
            {
                "path": "fanfanlo/javajs/v1/project/base/projectEventTypes",
                "properties": [
                    "eventTypeComplete",
                    " eventTypeExit"
                ]
            }
        ]
    },
    "fanfanlo/javajs/v1/utils/IntervalCheck": {
        "content": "\n    (()=>{\n    try{\n        // @ts-ignore\n        with({\n            get setTimeout(){\n                return javaLib[\"fanfanlo/javajs/v1/utils/setTimeout\"].setTimeout;\n            }\n            ,\n            get clearTimeout(){\n                return javaLib[\"fanfanlo/javajs/v1/utils/setTimeout\"].clearTimeout;\n            }\n            }){\n            \r\n\r\nfunction createIntervalChecker(interval, fn, logger){\r\n    if(logger)logger = logger.createSub(\"intervalChecker\")\r\n    let last = 0;\r\n    let timeoutId = undefined;\r\n    let exited = false;\r\n    let paused = false;\r\n    function checkCanRun(){\r\n        let now = Date.now();\r\n        let diff = now - last;\r\n        let canRun = diff > interval;\r\n        return canRun;\r\n    }\r\n    function exit(){\r\n        exited = true;\r\n        clearTimeoutId();\r\n    }\r\n    function pause(){\r\n        if(logger)logger.log(\"pause IntervalChecker\");\r\n        paused = true;\r\n        clearTimeoutId();\r\n    }\r\n    function resume(){\r\n        if(logger)logger.log(\"resume IntervalChecker\");\r\n        paused = false;\r\n        // 恢复时重新检查\r\n        checkRun();\r\n    }\r\n    function callLater(){\r\n        if(timeoutId != undefined)return;\r\n        timeoutId = setTimeout(laterRun, interval);\r\n        return timeoutId;\r\n    }\r\n    function clearTimeoutId(){\r\n        let id = timeoutId;\r\n        if(!id)return;\r\n        timeoutId = undefined;\r\n        clearTimeout(id);\r\n    }\r\n    function checkRun(){\r\n        if(exited || paused)return;\r\n        let canRun = checkCanRun();\r\n        if(!canRun){\r\n            callLater();\r\n            return false;\r\n        }\r\n        run();\r\n        return true;\r\n    }\r\n    function setNow(){\r\n        last = Date.now();\r\n    }\r\n    function laterRun(){\r\n        timeoutId = undefined;\r\n        run();\r\n    }\r\n    function run(){\r\n        if(exited || paused)return;\r\n        setNow();\r\n        if(fn != undefined)fn();\r\n    }\r\n    return {checkRun, exit, check: checkCanRun, setNow, clearTimeoutId, pause, resume};\r\n}\r\n\r\nreturn {createIntervalChecker}\n        }\n    }catch(e){\n        console.log(\"init error key is fanfanlo/javajs/v1/utils/IntervalCheck.java.js\", e);\n    }\n    })()\n    ",
        "dependencies": [
            {
                "path": "fanfanlo/javajs/v1/utils/setTimeout",
                "properties": [
                    "setTimeout",
                    " clearTimeout"
                ]
            }
        ]
    },
    "fanfanlo/javajs/v1/utils/setTimeout": {
        "content": "\n    (()=>{\n    try{\n        // @ts-ignore\n        with({}){\n            \r\n\r\nfunction setTimeout(fn, delay){\r\n    var conf = com.fanfanlo.lib.utils.coroutine.CoroutineUtils.Companion.later(delay, fn);\r\n    return conf;\r\n}\r\n\r\nfunction clearTimeout(conf){\r\n    // console.log(\"clearTimeout1\", 1)\r\n    if(!conf)return;\r\n    // console.log(\"clearTimeout1\", 2)\r\n    var job = conf.job || conf.deferred\r\n    // console.log(\"clearTimeout1\", 3)\r\n    if(!job)return;\r\n    // console.log(\"clearTimeout1\", 4)\r\n    if(job.isCancelled || job.isCompleted)return;\r\n    // console.log(\"clearTimeout1\", 5)\r\n    job.cancel();\r\n    console.log(\"clearTimeout1\", 6)\r\n}\r\n\r\nfunction setInterval(fn, delay, times){\r\n    if(!times){\r\n        times = 1000000000000\r\n    }\r\n    var conf = com.fanfanlo.lib.utils.coroutine.CoroutineUtils.Companion.repeat(times, delay, fn);\r\n    return conf;\r\n}\r\n\r\nfunction clearInterval(conf){\r\n    clearTimeout(conf)\r\n}\r\nreturn {setTimeout, clearTimeout, setInterval, clearInterval}\r\n;\n        }\n    }catch(e){\n        console.log(\"init error key is fanfanlo/javajs/v1/utils/setTimeout.java.js\", e);\n    }\n    })()\n    ",
        "dependencies": []
    },
    "fanfanlo/javajs/v1/a11y/node/ICondition": {
        "content": "\n    (()=>{\n    try{\n        // @ts-ignore\n        with({}){\n            \r\nlet path = \"com.fanfanlo.droidlib.auto.service.accessibility.krosxx.\"\r\nlet Types = {\r\n    get Id(){\r\n        return `${path}Id`;\r\n    },\r\n    get Text(){\r\n        return `${path}Text`;\r\n    },\r\n    get MatchText(){\r\n        return `${path}MatchText`;\r\n    },\r\n    get Desc(){\r\n        return `${path}Desc`;\r\n    },\r\n    get Clickable(){\r\n        return `${path}Clickable`;\r\n    },\r\n    get Type(){\r\n        return `${path}Type`;\r\n    },\r\n    get Ids(){\r\n        return `${path}Ids`;\r\n    },\r\n    get Descs(){\r\n        return `${path}Descs`;\r\n    },\r\n    get Texts(){\r\n        return `${path}Texts`;\r\n    },\r\n    get Root(){\r\n        return `${path}SFRoot`;\r\n    },\r\n\r\n}\r\n\r\nlet Action = {\r\n    get Focus(){\r\n        return `${path}Focus`;\r\n    },\r\n    get ClearFocus(){\r\n        return `${path}ClearFocus`;\r\n    },\r\n    get Click(){\r\n        return `${path}Click`;\r\n    },\r\n    get TryClick(){\r\n        return `${path}TryClick`;\r\n    },\r\n    get LongClick(){\r\n        return `${path}LongClick`;\r\n    },\r\n    get GlobalClick(){\r\n        return `${path}GlobalClick`;\r\n    },\r\n    get SetText(){\r\n        return `${path}SetText`;\r\n    },\r\n}\r\n\r\nlet Wait = {\r\n    get Wait(){\r\n        return `${path}SFWait`;\r\n    },\r\n}\r\n\r\nlet Data = {\r\n    get Data(){\r\n        return `${path}SFData`;\r\n    },\r\n}\r\n\r\nreturn {Types, Action, Wait, Data}\n        }\n    }catch(e){\n        console.log(\"init error key is fanfanlo/javajs/v1/a11y/node/ICondition.java.js\", e);\n    }\n    })()\n    ",
        "dependencies": []
    },
    "fanfanlo/javajs/v1/project/base/projectEventTypes": {
        "content": "\n    (()=>{\n    try{\n        // @ts-ignore\n        with({}){\n            console.log(\"[projectEventTypes] 定义项目事件类型常量\");\n\nlet eventTypeComplete = \"eventTypeComplete\";\nconsole.log(\"[projectEventTypes] eventTypeComplete:\", eventTypeComplete);\n\nlet eventTypeFailed = \"eventTypeFailed\";\nconsole.log(\"[projectEventTypes] eventTypeFailed:\", eventTypeFailed);\n\nlet eventTypeSuccess = \"eventTypeSuccess\";\nconsole.log(\"[projectEventTypes] eventTypeSuccess:\", eventTypeSuccess);\n\nlet eventTypeError = \"eventTypeError\";\nconsole.log(\"[projectEventTypes] eventTypeError:\", eventTypeError);\n\nlet eventTypeExit = \"eventTypeExit\";\nconsole.log(\"[projectEventTypes] eventTypeExit:\", eventTypeExit);\n\nlet eventTypeTriggerCondistionsOn = \"eventTypeTriggerCondistionsOn\";\nconsole.log(\"[projectEventTypes] eventTypeTriggerCondistionsOn:\", eventTypeTriggerCondistionsOn);\n\nlet eventTypeTriggerCondistionsOff = \"eventTypeTriggerCondistionsOff\";\nconsole.log(\"[projectEventTypes] eventTypeTriggerCondistionsOff:\", eventTypeTriggerCondistionsOff);\n\nconsole.log(\"[projectEventTypes] 导出所有事件类型\");\nreturn {\n    eventTypeComplete,\n    eventTypeFailed,\n    eventTypeSuccess,\n    eventTypeError,\n    eventTypeExit,\n    eventTypeTriggerCondistionsOn,\n    eventTypeTriggerCondistionsOff\n}\n\n        }\n    }catch(e){\n        console.log(\"init error key is fanfanlo/javajs/v1/project/base/projectEventTypes.java.js\", e);\n    }\n    })()\n    ",
        "dependencies": []
    },
    "fanfanlo/javajs/v1/project/components/actions/a11y/A11yOperator": {
        "content": "\n    (()=>{\n    try{\n        // @ts-ignore\n        with({\n            get runNodeOperator(){\n                return javaLib[\"fanfanlo/javajs/v1/project/components/action/a11y/NodeOperator\"].runNodeOperator;\n            }\n            }){\n            \r\n\r\n/**\r\n *\r\n * @param operateConf\r\n * @param logger\r\n * @param that that is project's action, has properties and methods [dispatchSuccess, isRunnable] will be used.\r\n * @returns {{createOperator: createOperator, runOperator: runOperator}}\r\n */\r\nfunction createA11yOperator(operateConf, l, that){\r\n    let logger = l.subLogger(`createA11yOperatorFn`);\r\n    logger.log(\"hiiiiiiiiiiiiiii\")\r\n    let nodesChecker;\r\n\r\n    function createA11yOperator(operateConf){\r\n        // nodesChecker = createNodeChecker(operateConf, logger, that)\r\n        nodesChecker = runNodeOperator(operateConf, logger, that)\r\n    }\r\n    function createNodeOperator(operateConf){\r\n        // nodesChecker =  createNodeChecker(operateConf, logger, that);\r\n        nodesChecker =  runNodeOperator(operateConf, logger, that);\r\n    }\r\n    function createOperator(operateConf){\r\n        switch (operateConf.type){\r\n            case \"node\":\r\n                createNodeOperator(operateConf);\r\n                break;\r\n            case \"a11y\":\r\n                createA11yOperator(operateConf);\r\n                break;\r\n            default:\r\n                throw new Error(\"no operate conf\")\r\n        }\r\n    }\r\n    function runOperator(){\r\n        createOperator(operateConf);\r\n        try {\r\n            nodesChecker.doAction();\r\n        }catch (e) {\r\n            logger.log(`runOperatoreeeeeeeeror`, e.message, e.stack)\r\n        }\r\n    }\r\n    return {createOperator, runOperator}\r\n}\r\n\r\nreturn {createA11yOperator}\n        }\n    }catch(e){\n        console.log(\"init error key is fanfanlo/javajs/v1/project/components/actions/a11y/A11yOperator.java.js\", e);\n    }\n    })()\n    ",
        "dependencies": [
            {
                "path": "fanfanlo/javajs/v1/project/components/action/a11y/NodeOperator",
                "properties": [
                    "runNodeOperator"
                ]
            }
        ]
    },
    "fanfanlo/javajs/v1/project/components/actions/a11y/node-action": {
        "content": "\n    (()=>{\n    try{\n        // @ts-ignore\n        with({\n            get regAction(){\n                return javaLib[\"fanfanlo/javajs/v1/project/store\"].regAction;\n            }\n            ,\n            get eventTypeComplete(){\n                return javaLib[\"fanfanlo/javajs/v1/project/base/projectEventTypes\"].eventTypeComplete;\n            }\n            ,\n            get eventTypeExit(){\n                return javaLib[\"fanfanlo/javajs/v1/project/base/projectEventTypes\"].eventTypeExit;\n            }\n            ,\n            get setTimeout(){\n                return javaLib[\"fanfanlo/javajs/v1/utils/setTimeout\"].setTimeout;\n            }\n            ,\n            get clearTimeout(){\n                return javaLib[\"fanfanlo/javajs/v1/utils/setTimeout\"].clearTimeout;\n            }\n            }){\n            \n\nlet type = \"fanfanlo/javajs/v1/project/components/actions/a11y/node-action\";\nonLibReady(()=>{\n    regAction(type, attach)\n}, `src/droid/java_js/fanfanlo/javajs/v1/project/components/actions/a11y/node-action.java.js`)\n\nfunction attach(that){\n    let superDoAction = that.doAction;\n    let logger = that.logger;\n    let domain = {};\n    let actionConfig = that.data;\n\n    let continuousClickTimerId = null;\n    let isContinuousClicking = false;\n\n    logger.log('NodeAction.attach called, actionConfig:', actionConfig)\n\n    function onScriptCallExit(){\n        logger.log(\"NodeAction.onScriptCallExit\", that.baseMsg)\n        onExit();\n    }\n\n    addScriptExitListener(onScriptCallExit);\n    that.dispatcher.listenData(eventTypeExit, onExit);\n    that.dispatcher.listenData(eventTypeComplete, onExit);\n\n    function onExit(e){\n        logger.log(\"NodeAction.onExit\")\n        stopContinuousClick();\n        clean();\n    }\n\n    function clean(){\n        logger.log('NodeAction.clean')\n        a11yModel.removeDomain(domain);\n        removeScriptExitListener(onScriptCallExit);\n    }\n\n    that.doAction = doAction.bind(that);\n    function doAction() {\n        superDoAction();\n        logger.log('NodeAction.doAction called, actionType:', actionConfig.actionType)\n        executeAction();\n    }\n\n    function executeAction(){\n        let actionType = actionConfig.actionType;\n        logger.log('NodeAction.executeAction, actionType:', actionType)\n\n        if(!actionType){\n            logger.error('NodeAction.executeAction - actionType missing')\n            that.dispatchFailed({reason: 'actionType is missing'});\n            return;\n        }\n\n        switch(actionType){\n            case 'click':\n                performClick();\n                break;\n            case 'longClick':\n                performLongClick();\n                break;\n            case 'scroll':\n                performScroll();\n                break;\n            case 'setText':\n                performSetText();\n                break;\n            case 'focus':\n                performFocus();\n                break;\n            default:\n                logger.error('NodeAction.executeAction - unknown actionType:', actionType)\n                that.dispatchFailed({reason: 'unknown actionType: ' + actionType});\n                break;\n        }\n    }\n\n    function performClick(){\n        logger.log('NodeAction.performClick called')\n\n        let clickConfig = actionConfig.clickConfig || {useGlobalClick: false};\n        let continuousConfig = clickConfig.continuousClickConfig;\n\n        if(continuousConfig && continuousConfig.enableContinuousClick){\n            logger.log('NodeAction.performClick - continuous mode')\n            performContinuousClick();\n            return;\n        }\n\n        logger.log('NodeAction.performClick - single mode')\n        performSingleClick();\n    }\n\n    function performSingleClick(){\n        logger.log('NodeAction.performSingleClick called')\n\n        let clickConfig = actionConfig.clickConfig || {useGlobalClick: false};\n        let useGlobalClick = clickConfig.useGlobalClick || false;\n        logger.log('useGlobalClick:', useGlobalClick)\n\n        let node = findTargetNode();\n        if(!node){\n            logger.log('NodeAction.performSingleClick - node not found')\n            that.dispatchFailed({reason: 'target node not found'});\n            return;\n        }\n\n        try{\n            if(useGlobalClick){\n                logger.log('NodeAction.performSingleClick - using clickByItemRect')\n\n                let service = a11yModel.service\n                if(!service){\n                    logger.error('NodeAction.performSingleClick - service not available')\n                    that.dispatchFailed({reason: 'a11yModel.service not available'});\n                    return;\n                }\n\n                let nodeInfo = node.unwrap()\n                if(!nodeInfo){\n                    logger.error('NodeAction.performSingleClick - node.unwrap() null')\n                    that.dispatchFailed({reason: 'node.unwrap() returned null'});\n                    return;\n                }\n\n                let randomDistance = 5.0\n                let success = com.fanfanlo.droidlib.auto.service.accessibility.a11yUtils.clickByItemRect(nodeInfo, service, randomDistance)\n                logger.log('NodeAction.performSingleClick - clickByItemRect result:', success)\n\n                if(!success){\n                    that.dispatchFailed({reason: 'clickByItemRect failed'});\n                    return;\n                }\n            }else{\n                logger.log('NodeAction.performSingleClick - using node.click()')\n                let actionObj = createClickAction();\n                let success = a11yModel.doAction(node, actionObj);\n                logger.log('NodeAction.performSingleClick - click result:', success)\n\n                if(!success){\n                    that.dispatchFailed({reason: 'node click failed'});\n                    return;\n                }\n            }\n\n            recycleFoundNode(node);\n\n            setTimeout(()=>{\n                logger.log('NodeAction.performSingleClick - success')\n                that.dispatchSuccess();\n            }, 200);\n\n        }catch(e){\n            logger.error('NodeAction.performSingleClick - error:', e)\n            that.dispatchFailed({reason: 'click error: ' + e.toString()});\n        }\n    }\n\n    function performContinuousClick(){\n        logger.log('NodeAction.performContinuousClick called')\n        isContinuousClicking = true;\n        executeContinuousClickCycle();\n    }\n\n    function executeContinuousClickCycle(){\n        logger.log('NodeAction.executeContinuousClickCycle called')\n\n        if(!isContinuousClicking){\n            logger.log('NodeAction.executeContinuousClickCycle - stopped by flag')\n            return;\n        }\n\n        if(!that.isRunnable){\n            logger.log('NodeAction.executeContinuousClickCycle - not runnable')\n            stopContinuousClick();\n            return;\n        }\n\n        let node = findTargetNode();\n        if(!isNodeValid(node)){\n            logger.log('NodeAction.executeContinuousClickCycle - node invalid')\n            stopContinuousClick();\n            return;\n        }\n\n        try{\n            let clickConfig = actionConfig.clickConfig;\n            let useGlobalClick = clickConfig.useGlobalClick || false;\n            logger.log('useGlobalClick:', useGlobalClick)\n\n            if(useGlobalClick){\n                logger.log('NodeAction.executeContinuousClickCycle - global click')\n                let service = a11yModel.service;\n                if(!service){\n                    logger.error('NodeAction.executeContinuousClickCycle - service not available')\n                    stopContinuousClick();\n                    return;\n                }\n\n                let nodeInfo = node.unwrap();\n                if(!nodeInfo){\n                    logger.error('NodeAction.executeContinuousClickCycle - nodeInfo null')\n                    stopContinuousClick();\n                    return;\n                }\n\n                let randomDistance = 5.0;\n                let success = com.fanfanlo.droidlib.auto.service.accessibility.a11yUtils.clickByItemRect(nodeInfo, service, randomDistance);\n                logger.log('NodeAction.executeContinuousClickCycle - click result:', success)\n\n                if(!success){\n                    logger.log('NodeAction.executeContinuousClickCycle - click failed')\n                    stopContinuousClick();\n                    return;\n                }\n            }else{\n                logger.log('NodeAction.executeContinuousClickCycle - node click')\n                let actionObj = createClickAction();\n                let success = a11yModel.doAction(node, actionObj);\n                logger.log('NodeAction.executeContinuousClickCycle - click result:', success)\n\n                if(!success){\n                    logger.log('NodeAction.executeContinuousClickCycle - click failed')\n                    stopContinuousClick();\n                    return;\n                }\n            }\n\n            let continuousConfig = actionConfig.clickConfig.continuousClickConfig;\n            let baseInterval = continuousConfig.baseInterval;\n            let intervalVariation = continuousConfig.intervalVariation;\n\n            let randomOffset = Math.random() * (intervalVariation * 2) - intervalVariation;\n            let nextInterval = baseInterval + randomOffset;\n            logger.log('nextInterval:', nextInterval)\n\n            continuousClickTimerId = setTimeout(() => {\n                logger.log('NodeAction - timer fired')\n                executeContinuousClickCycle();\n            }, nextInterval);\n\n        }catch(e){\n            logger.error('NodeAction.executeContinuousClickCycle - error:', e)\n            stopContinuousClick();\n        }\n    }\n\n    function stopContinuousClick(){\n        logger.log('NodeAction.stopContinuousClick called')\n        isContinuousClicking = false;\n\n        if(continuousClickTimerId){\n            logger.log('NodeAction.stopContinuousClick - clearing timer')\n            clearTimeout(continuousClickTimerId);\n            continuousClickTimerId = null;\n        }\n    }\n\n    function isNodeValid(node){\n        if(!node){\n            logger.log('NodeAction.isNodeValid - node null')\n            return false;\n        }\n\n        try{\n            let nodeInfo = node.unwrap();\n            if(!nodeInfo){\n                logger.log('NodeAction.isNodeValid - nodeInfo null')\n                return false;\n            }\n            logger.log('NodeAction.isNodeValid - valid')\n            return true;\n        }catch(e){\n            logger.error('NodeAction.isNodeValid - error:', e)\n            return false;\n        }\n    }\n\n    function performLongClick(){\n        logger.log('NodeAction.performLongClick')\n\n        let node = findTargetNode();\n        if(!node){\n            logger.log('NodeAction.performLongClick - target node not found')\n            that.dispatchFailed({reason: 'target node not found'});\n            return;\n        }\n\n        try{\n            logger.log('NodeAction.performLongClick - executing long click on node')\n            let actionObj = createLongClickAction();\n            let success = a11yModel.doAction(node, actionObj);\n            logger.log('NodeAction.performLongClick - result:', success)\n\n            if(!success){\n                that.dispatchFailed({reason: 'long click failed'});\n                return;\n            }\n\n            // ==================== recycle foundNode ====================\n            recycleFoundNode(node);\n            // ==================== recycle 完成 ====================\n\n            // 延迟后发送成功\n            setTimeout(()=>{\n                logger.log('NodeAction.performLongClick - dispatching success')\n                that.dispatchSuccess();\n            }, 200);\n\n        }catch(e){\n            logger.error('NodeAction.performLongClick - error:', e)\n            that.dispatchFailed({reason: 'long click error: ' + e.toString()});\n        }\n    }\n\n    function performScroll(){\n        let scrollConfig = actionConfig.scrollConfig || {direction: 'forward'};\n        let direction = scrollConfig.direction || 'forward';\n        logger.log('NodeAction.performScroll, direction:', direction)\n\n        let node = findTargetNode();\n        if(!node){\n            logger.log('NodeAction.performScroll - target node not found')\n            that.dispatchFailed({reason: 'target node not found'});\n            return;\n        }\n\n        try{\n            logger.log('NodeAction.performScroll - executing scroll on node')\n\n            let actionObj;\n            if(direction === 'forward'){\n                actionObj = createScrollForwardAction();\n            }else if(direction === 'backward'){\n                actionObj = createScrollBackwardAction();\n            }else{\n                logger.error('NodeAction.performScroll - unknown direction:', direction)\n                that.dispatchFailed({reason: 'unknown scroll direction: ' + direction});\n                return;\n            }\n\n            let success = a11yModel.doAction(node, actionObj);\n            logger.log('NodeAction.performScroll - result:', success)\n\n            if(!success){\n                that.dispatchFailed({reason: 'scroll failed'});\n                return;\n            }\n\n            // ==================== recycle foundNode ====================\n            recycleFoundNode(node);\n            // ==================== recycle 完成 ====================\n\n            // 延迟后发送成功\n            setTimeout(()=>{\n                logger.log('NodeAction.performScroll - dispatching success')\n                that.dispatchSuccess();\n            }, 200);\n\n        }catch(e){\n            logger.error('NodeAction.performScroll - error:', e)\n            that.dispatchFailed({reason: 'scroll error: ' + e.toString()});\n        }\n    }\n\n    function performSetText(){\n        let textConfig = actionConfig.textConfig || {text: ''};\n        let text = textConfig.text || '';\n        logger.log('NodeAction.performSetText, text:', text)\n\n        let node = findTargetNode();\n        if(!node){\n            logger.log('NodeAction.performSetText - target node not found')\n            that.dispatchFailed({reason: 'target node not found'});\n            return;\n        }\n\n        try{\n            logger.log('NodeAction.performSetText - executing setText on node')\n\n            // 先聚焦,然后设置文本\n            let focusAction = createFocusAction();\n            a11yModel.doAction(node, focusAction);\n            logger.log('NodeAction.performSetText - focus executed')\n\n            // 延迟后设置文本\n            setTimeout(()=>{\n                let textAction = createSetTextAction(text);\n                let success = a11yModel.doAction(node, textAction);\n                logger.log('NodeAction.performSetText - setText result:', success)\n\n                if(!success){\n                    that.dispatchFailed({reason: 'setText failed'});\n                    return;\n                }\n\n                // ==================== recycle foundNode ====================\n                recycleFoundNode(node);\n                // ==================== recycle 完成 ====================\n\n                // 再延迟后发送成功\n                setTimeout(()=>{\n                    logger.log('NodeAction.performSetText - dispatching success')\n                    that.dispatchSuccess();\n                }, 100);\n\n            }, 100);\n\n        }catch(e){\n            logger.error('NodeAction.performSetText - error:', e)\n            that.dispatchFailed({reason: 'setText error: ' + e.toString()});\n        }\n    }\n\n    function performFocus(){\n        logger.log('NodeAction.performFocus')\n\n        let node = findTargetNode();\n        if(!node){\n            logger.log('NodeAction.performFocus - target node not found')\n            that.dispatchFailed({reason: 'target node not found'});\n            return;\n        }\n\n        try{\n            logger.log('NodeAction.performFocus - executing focus on node')\n            let actionObj = createFocusAction();\n            let success = a11yModel.doAction(node, actionObj);\n            logger.log('NodeAction.performFocus - result:', success)\n\n            if(!success){\n                that.dispatchFailed({reason: 'focus failed'});\n                return;\n            }\n\n            // ==================== recycle foundNode ====================\n            recycleFoundNode(node);\n            // ==================== recycle 完成 ====================\n\n            // 延迟后发送成功\n            setTimeout(()=>{\n                logger.log('NodeAction.performFocus - dispatching success')\n                that.dispatchSuccess();\n            }, 100);\n\n        }catch(e){\n            logger.error('NodeAction.performFocus - error:', e)\n            that.dispatchFailed({reason: 'focus error: ' + e.toString()});\n        }\n    }\n\n    function findTargetNode(){\n        logger.log('NodeAction.findTargetNode called')\n\n        if(that.triggerActionContext && that.triggerActionContext.foundNode){\n            logger.log('NodeAction.findTargetNode - found in context')\n            return that.triggerActionContext.foundNode\n        }\n\n        logger.error('NodeAction.findTargetNode - no node available')\n        return null\n    }\n\n    function recycleFoundNode(node){\n        logger.log('NodeAction.recycleFoundNode called')\n\n        if(!node){\n            return\n        }\n\n        if(that.triggerActionContext && that.triggerActionContext.foundNode === node){\n            logger.log('NodeAction.recycleFoundNode - recycling')\n            that.triggerActionContext.foundNode = undefined\n        }\n    }\n\n    function createClickAction(){\n        return new com.fanfanlo.droidlib.auto.service.accessibility.krosxx.Click();\n    }\n\n    function createLongClickAction(){\n        return new com.fanfanlo.droidlib.auto.service.accessibility.krosxx.LongClick();\n    }\n\n    function createScrollForwardAction(){\n        return new com.fanfanlo.droidlib.auto.service.accessibility.krosxx.ScrollForward();\n    }\n\n    function createScrollBackwardAction(){\n        return new com.fanfanlo.droidlib.auto.service.accessibility.krosxx.ScrollBackward();\n    }\n\n    function createSetTextAction(text){\n        return new com.fanfanlo.droidlib.auto.service.accessibility.krosxx.SetText(text);\n    }\n\n    function createFocusAction(){\n        return new com.fanfanlo.droidlib.auto.service.accessibility.krosxx.Focus();\n    }\n}\n\nreturn {type}\n\n        }\n    }catch(e){\n        console.log(\"init error key is fanfanlo/javajs/v1/project/components/actions/a11y/node-action.java.js\", e);\n    }\n    })()\n    ",
        "dependencies": [
            {
                "path": "fanfanlo/javajs/v1/project/store",
                "properties": [
                    "regAction"
                ]
            },
            {
                "path": "fanfanlo/javajs/v1/project/base/projectEventTypes",
                "properties": [
                    "eventTypeComplete",
                    " eventTypeExit"
                ]
            },
            {
                "path": "fanfanlo/javajs/v1/utils/setTimeout",
                "properties": [
                    "setTimeout",
                    " clearTimeout"
                ]
            }
        ]
    },
    "fanfanlo/javajs/v1/project/components/actions/a11y/NodeOperator": {
        "content": "\n    (()=>{\n    try{\n        // @ts-ignore\n        with({\n            get createExitHandler(){\n                return javaLib[\"fanfanlo/javajs/v1/utils/ExitHandler\"].createExitHandler;\n            }\n            ,\n            get createCheckNodesOnShow(){\n                return javaLib[\"fanfanlo/javajs/v1/a11y/a11yUtils\"].createCheckNodesOnShow;\n            }\n            ,\n            get createNodeAction(){\n                return javaLib[\"fanfanlo/javajs/v1/a11y/a11yUtils\"].createNodeAction;\n            }\n            ,\n            get globalActionBack(){\n                return javaLib[\"fanfanlo/javajs/v1/a11y/a11yUtils\"].globalActionBack;\n            }\n            ,\n            get hideIme(){\n                return javaLib[\"fanfanlo/javajs/v1/a11y/a11yUtils\"].hideIme;\n            }\n            ,\n            get keyboardIsOpen(){\n                return javaLib[\"fanfanlo/javajs/v1/a11y/a11yUtils\"].keyboardIsOpen;\n            }\n            ,\n            get setTimeout(){\n                return javaLib[\"fanfanlo/javajs/v1/utils/setTimeout\"].setTimeout;\n            }\n            ,\n            get clearTimeout(){\n                return javaLib[\"fanfanlo/javajs/v1/utils/setTimeout\"].clearTimeout;\n            }\n            ,\n            get createIntervalChecker(){\n                return javaLib[\"fanfanlo/javajs/v1/utils/IntervalCheck\"].createIntervalChecker;\n            }\n            ,\n            get createA11yOperator(){\n                return javaLib[\"fanfanlo/javajs/v1/project/components/action/a11y/A11yOperator\"].createA11yOperator;\n            }\n            }){\n            \r\n\r\n\r\nlet runningConf = undefined;\r\nfunction runNodeOperator(operateConf, logger, that){\r\n    runningConf = operateConf;\r\n    let shortMsg = `operateConf short info ${operateConf.name ? operateConf.name : JSON.stringify(operateConf)}`\r\n    let backToPnAn = !!operateConf.backToPackageActivity\r\n    logger.log(\"iiiiiiiiiimmmmmmmmmmmmmm logger\")\r\n    let l  = logger.subLogger(`runNodeOperatorFn22`);\r\n    l.log(\"iiiiiiiiiiimmmmmmmmmmm l\")\r\n    logger = l\r\n    logger.log(`operateConfIs1`, shortMsg, operateConf);\r\n    let exitHandler = createExitHandler(that.dispatcher, [a11yModel], logger);\r\n    exitHandler.addExitFn(onExit);\r\n    let domain = exitHandler.domain;\r\n    let isComplete = false;\r\n    function setComplete(){\r\n        if(isComplete)return;\r\n        let l = logger.subLogger(`setCompleteFn-${operateConf.name}`);\r\n        l.log(`complete11 operate conf`, operateConf);\r\n        isComplete = true;\r\n        onExit();\r\n    }\r\n    function onExit() {\r\n        let l = logger.subLogger(`onExitFn-${operateConf.name}`);\r\n        l.log(`onExit1245`, operateConf);\r\n        removeListener();\r\n    }\r\n    function removeListener(){\r\n        tryRemoveContentChangeListener();\r\n        tryRemovePackageActivityChangeListener()\r\n        tryClearLastCheckNodesChanceTimer();\r\n    }\r\n    let contentChangeListenData = undefined;\r\n    function tryRemoveContentChangeListener() {\r\n        let data = contentChangeListenData;\r\n        contentChangeListenData = undefined;\r\n        if (data == undefined) return;\r\n        a11yModel.removeListener(data);\r\n    }\r\n    let packageActivityChangeData = undefined;\r\n    function tryRemovePackageActivityChangeListener(){\r\n        let data = packageActivityChangeData;\r\n        packageActivityChangeData = undefined;\r\n        if(data == undefined)return;\r\n        a11yModel.removeListener(data);\r\n    }\r\n\r\n    let nodesCheckCompleted = false;\r\n    function canRun(){\r\n        return !isComplete && !nodesCheckCompleted && runningConf == operateConf;\r\n    }\r\n    function listenPnAn(){\r\n        let l = logger.subLogger(`listenPnAnFn-${operateConf.name}`);\r\n        if (!that.isRunnable || !canRun()) return;\r\n        if (packageActivityChangeData == undefined) {\r\n            packageActivityChangeData = a11yModel.listenDomainData(com.fanfanlo.droidlib.auto.service.accessibility.A11yModel.Companion.eventLastFullScreenPackageActivityChanged, domain, onPackageOrActivityChange);\r\n        }\r\n    }\r\n    function onPackageOrActivityChange(e){\r\n        checkPnAnLater();\r\n    }\r\n    let intervalCheckPnAn = undefined;\r\n    function checkPnAnLater(){\r\n        if(intervalCheckPnAn == undefined){\r\n            intervalCheckPnAn = createIntervalChecker(operateConf.globalBackActionConf.interval, checkPnAn, logger);\r\n        }\r\n        intervalCheckPnAn.checkRun();\r\n    }\r\n    let laterCheckNodesCheckTimeOver;\r\n    let prevActivity = undefined\r\n    function listenPnAnAndCheckLater(){\r\n        listenPnAn();\r\n        checkPnAnLater();\r\n    }\r\n    function checkPnAn(){\r\n        let l = logger.subLogger(`checkPnAnFn-${operateConf.name}`);\r\n        if (!that.isRunnable || !canRun()) return;\r\n\r\n        let pn = a11yModel.lastFullScreenPackage;\r\n        if (pn != operateConf.packageName) {\r\n            l.log(`error error a11yModel.lastFullScreenPackage != operateConf.packageName, a11yModel.lastFullScreenPackage: ${a11yModel.lastFullScreenPackage}, operateConf.packageName:${operateConf.packageName}`);\r\n            // 如果package不同就停止侦听node更新\r\n            tryRemoveContentChangeListener();\r\n            dispatchFailed({reason:`package not match`, keyboardIsOpen:keyboardIsOpen()})\r\n            return;\r\n        }\r\n        let nowActivity = a11yModel.lastFullScreenActivity;\r\n        let isActivityMatch = operateConf.activities.some(an => an == nowActivity);\r\n        l.log(\"isMathActivity22\", isActivityMatch, nowActivity, keyboardIsOpen())\r\n\r\n        if(!isActivityMatch){\r\n            tryRemoveContentChangeListener();\r\n            if(!operateConf.globalBackActionConf){\r\n                dispatchFailed({nowActivity,activities:operateConf.activities, reason:\"activity not match\"});\r\n                return;\r\n            }\r\n            let interval = operateConf.globalBackActionConf.interval;\r\n            if(keyboardIsOpen()){\r\n                interval = 10;\r\n            }else if(prevActivity != nowActivity){\r\n                interval = 10;\r\n            }\r\n            prevActivity = nowActivity\r\n            let bl = globalActionBack(interval);\r\n            l.log(`global2 action back ${bl}`);\r\n            listenPnAnAndCheckLater();\r\n            return;\r\n        }\r\n        if(operateConf.nodeConditions){\r\n            tryRemovePackageActivityChangeListener();\r\n            checkNodesLater();\r\n        }else{\r\n            dispatchSuccess({from:\"checkPnAn\"});\r\n        }\r\n    }\r\n    function runLaterCheckNodesCheckTimeOver(){\r\n        if(laterCheckNodesCheckTimeOver != undefined)return;\r\n        laterCheckNodesCheckTimeOver = setTimeout(onLaterCheckNodesCheckTimeOver, operateConf.nodesLastCheckTime)\r\n    }\r\n    function tryClearLastCheckNodesChanceTimer(){\r\n        let id = laterCheckNodesCheckTimeOver;\r\n        laterCheckNodesCheckTimeOver = undefined;\r\n        clearTimeout(id);\r\n    }\r\n    function onLaterCheckNodesCheckTimeOver(){\r\n        dispatchFailed({reason:`nodesLastCheckTime time over ${operateConf.nodesLastCheckTime}`})\r\n    }\r\n    let intervalCheckLaterCheckNodes = undefined;\r\n    function checkNodesLater(){\r\n        let l = logger.subLogger(`checkNodesLaterFn-${operateConf.name}`);\r\n        if (!that.isRunnable || !canRun()) return;\r\n        // runLaterCheckNodes();\r\n        if(intervalCheckLaterCheckNodes == undefined){\r\n            intervalCheckLaterCheckNodes = createIntervalChecker(operateConf.nodesCheckInterval, checkNodes, l);\r\n        }\r\n        l.log(`run2 intervalCheckLaterCheckNodes.checkRun`);\r\n        intervalCheckLaterCheckNodes.checkRun();\r\n    }\r\n    let nodesChecker = undefined;\r\n    function checkNodes(){\r\n        let l = logger.subLogger(`checkNodesFn-${operateConf.name}`);\r\n        if (!that.isRunnable || !canRun()) return;\r\n        runLaterCheckNodesCheckTimeOver();\r\n        if(nodesChecker == undefined){\r\n            nodesChecker = createCheckNodesOnShow(operateConf, onCheckNodesBack, l)\r\n        }\r\n        l.log(`nodesChecker.check22`);\r\n        nodesChecker.check();\r\n    }\r\n    function onCheckNodesBack(nodes, isOk, err, matchedCheckList){\r\n        let l = logger.subLogger(`onCheckNodesBack2-${operateConf.name}`);\r\n        l.log(`1onCheckNodesBack isRunnable=${that.isRunnable}, canrun=${canRun()}`)\r\n        if (!that.isRunnable || !canRun()) return;\r\n        if(isOk){\r\n            setComplete();\r\n        }\r\n        l.log(\"1params\", nodes ? nodes.size() : \"no nodes result\", isOk, err)\r\n        l.log('1matchedCheckList', matchedCheckList)\r\n        l.log('1conditions', operateConf.conditions)\r\n        l.log('1Nodeconditions', operateConf.nodeConditions)\r\n        if (isOk) {\r\n            nodesCheckCompleted = true;\r\n            removeListener();\r\n            checkNodesAction(nodes, matchedCheckList);\r\n        }else{\r\n            l.log(`bbbbbbbbbbbbbbbackonCheckNodesBack isRunnable ${that.isRunnable}, canrun ${canRun()}`)\r\n            onNodesNotMatch();\r\n        }\r\n    }\r\n\r\n    function onNodesNotMatch(){\r\n        if(isInPnAn()){\r\n            listenContentChange();\r\n        }else if(keyboardIsOpen()){\r\n            // hideIme();\r\n            globalActionBack(operateConf.globalBackActionConf.interval)\r\n            // 这里预期是在pn an时打开了ime，关闭ime后必然是pn an，所以下一步是执行checkNodesLater，但是这里似乎做一个很小的延时就好了.\r\n            setTimeout(checkNodesLater, 100 * 10);\r\n        }else{\r\n            checkPnAn();\r\n        }\r\n    }\r\n    function isInPnAn(){\r\n        let pn = a11yModel.lastFullScreenPackage;\r\n        if(pn != operateConf.packageName)return false;\r\n        let activity = a11yModel.lastFullScreenActivity;\r\n        let bl = operateConf.activities.some(an => an == activity);\r\n        return bl;\r\n    }\r\n    function listenContentChange() {\r\n        if (!that.isRunnable || !canRun()) return;\r\n        if(contentChangeListenData != undefined)return;\r\n        tryRemoveContentChangeListener();\r\n        let typeId = android.view.accessibility.AccessibilityEvent.TYPE_WINDOW_CONTENT_CHANGED\r\n        let type = com.fanfanlo.droidlib.auto.service.accessibility.A11yModel.Companion.getAccessibilityEventType(typeId);\r\n        contentChangeListenData = a11yModel.listenDomainData(type, domain, onContentChange)\r\n        checkNodes();\r\n    }\r\n\r\n    function onContentChange(e) {\r\n        if (!that.isRunnable || !canRun()) return;\r\n        checkNodes();\r\n    }\r\n\r\n    function checkNodesAction(nodes, matchedCheckList){\r\n        if (!that.isRunnable) return;\r\n        let l = logger.subLogger(`checkNodesAction-${operateConf.name}`);\r\n        l.log(`2node size ${nodes.size()}`)\r\n        l.log(`2matchedCheckList ${matchedCheckList}`)\r\n        if((!nodes || nodes.size() == 0) && (!matchedCheckList || matchedCheckList.length == 0)){\r\n            dispatchFailed({reason:`no nodes=${(!nodes || nodes.size() == 0)}, no matchedCheckList=${(!matchedCheckList || matchedCheckList.length == 0)}`})\r\n            return;\r\n        }\r\n        let nodeConditions = operateConf.nodeConditions;\r\n        for (let i = 0; i < matchedCheckList.length; i++) {\r\n            let matchConf = matchedCheckList[i];\r\n            l.log(\"doaction1\", matchConf)\r\n            if(!matchConf.doAction)continue;\r\n            let nodeConf = nodeConditions[matchedCheckList[i].index];\r\n            l.log(`1nodeConf is`, nodeConf);\r\n            let node = nodes[matchedCheckList[i].index];\r\n            let actionConf = nodeConf.action;\r\n            l.log(`1actionConf1`, actionConf)\r\n            let nodeAction = createNodeAction(actionConf);\r\n            let beforeActionDelay = 1;\r\n            let afterActionDelay = 1;\r\n            if(nodeAction.type == \"SetText\"){\r\n                beforeActionDelay = actionConf.beforeSetTextDelay || 100 * 1;\r\n                afterActionDelay = actionConf.afterSetTextDelay || 100 * 2;\r\n                l.log(\"beforeSetTextDelay333\", beforeActionDelay, afterActionDelay)\r\n            }\r\n            setTimeout(()=>{\r\n                l.log(`nodeAction1`, nodeAction.type)\r\n                l.log(`nodeAction2`, nodeAction)\r\n                let bl = a11yModel.doAction(node, nodeAction);\r\n                l.log(\"1bbbbbbbbbbbbbbbbbbbbbb2234\", bl, nodeAction.type, \"bltypeis\",typeof bl);\r\n                if(bl){\r\n                    setTimeout(()=>{\r\n                        l.log(\"bbbbbbbbbbbllllllll\")\r\n                        checkNodesActionNext(actionConf)\r\n                    }, afterActionDelay)\r\n                    return;\r\n                }else{\r\n                    // 去掉当前这match的node和checklist的index数据后再次调用该方法\r\n                }\r\n            }, beforeActionDelay)\r\n            return\r\n        }\r\n        l.log(\"dddddddddddddispach success\")\r\n        // success without actionConf.doAction\r\n        dispatchSuccess({checkNodesAction:\"no action need to do\"});\r\n    }\r\n    function checkNodesActionNext(actionConf){\r\n        if (!that.isRunnable) return;\r\n        let l = logger.subLogger(`checkNodesActionNext-${operateConf.name}`);\r\n        l.log('actionConf1is', actionConf)\r\n        if(!actionConf.nextOperateConf){\r\n            l.log('dispatchSuccess23')\r\n            dispatchSuccess({checkNodesActionNext:\"all operator complete\"});\r\n        }else{\r\n            l.log('5createa11yoperator5')\r\n            createA11yOperator(actionConf.nextOperateConf, l, that).runOperator();\r\n        }\r\n    }\r\n    function dispatchSuccess(data){\r\n        let l = logger.subLogger(`dispatchSuccessFn-${operateConf.name}`);\r\n        if(!canRun())return;\r\n        setComplete();\r\n        l.log(`success2 data`, data);\r\n        if(operateConf.dispatchSuccess){\r\n            l.log('nodeOperator.dispatchSuccess2')\r\n            that.dispatchSuccess();\r\n        }\r\n    }\r\n    function dispatchFailed(data){\r\n        let l = logger.subLogger(`dispatchFailedFn-${operateConf.name}`);\r\n        if(!canRun())return;\r\n        setComplete();\r\n        l.log(`failed reason`, data);\r\n        if(operateConf.dispatchFailed){\r\n            l.log('nodeOperator.dispatchFailed2')\r\n            that.dispatchFailed(data);\r\n        }\r\n    }\r\n    function checkOvertime() {\r\n        let l = logger.subLogger(`checkOvertime-${operateConf.name}`);\r\n        let overtime = operateConf.overtime;\r\n        l.log(`1overtime1 is ${overtime}`);\r\n        if (overtime == undefined || overtime <= 0) return;\r\n        setTimeout(() => {\r\n            l.log(`isRunnable is ${that.isRunnable}, canrun is ${canRun()}`);\r\n            if (that.isRunnable && !isComplete) {\r\n                l.log(`call project terminate msg=${operateConf.terminateMsg}`, operateConf);\r\n                that.project.terminate();\r\n            }\r\n        }, overtime)\r\n    }\r\n    function doAction(){\r\n        checkOvertime();\r\n        checkPnAn();\r\n    }\r\n    return {doAction}\r\n}\r\n\r\nreturn {runNodeOperator}\n        }\n    }catch(e){\n        console.log(\"init error key is fanfanlo/javajs/v1/project/components/actions/a11y/NodeOperator.java.js\", e);\n    }\n    })()\n    ",
        "dependencies": [
            {
                "path": "fanfanlo/javajs/v1/utils/ExitHandler",
                "properties": [
                    "createExitHandler"
                ]
            },
            {
                "path": "fanfanlo/javajs/v1/a11y/a11yUtils",
                "properties": [
                    "createCheckNodesOnShow",
                    "\r\n    createNodeAction",
                    "\r\n    globalActionBack",
                    " hideIme",
                    " keyboardIsOpen"
                ]
            },
            {
                "path": "fanfanlo/javajs/v1/utils/setTimeout",
                "properties": [
                    "setTimeout",
                    " clearTimeout"
                ]
            },
            {
                "path": "fanfanlo/javajs/v1/utils/IntervalCheck",
                "properties": [
                    "createIntervalChecker"
                ]
            },
            {
                "path": "fanfanlo/javajs/v1/project/components/action/a11y/A11yOperator",
                "properties": [
                    "createA11yOperator"
                ]
            }
        ]
    },
    "fanfanlo/javajs/v1/project/components/actions/a11y/NodesChecker": {
        "content": "\n    (()=>{\n    try{\n        // @ts-ignore\n        with({\n            get createCheckNodesOnShow(){\n                return javaLib[\"fanfanlo/javajs/v1/a11y/a11yUtils\"].createCheckNodesOnShow;\n            }\n            ,\n            get createNodeAction(){\n                return javaLib[\"fanfanlo/javajs/v1/a11y/a11yUtils\"].createNodeAction;\n            }\n            ,\n            get globalActionBack(){\n                return javaLib[\"fanfanlo/javajs/v1/a11y/a11yUtils\"].globalActionBack;\n            }\n            ,\n            get hideImeIfPackageOpened(){\n                return javaLib[\"fanfanlo/javajs/v1/a11y/a11yUtils\"].hideImeIfPackageOpened;\n            }\n            ,\n            get keyboardIsOpen(){\n                return javaLib[\"fanfanlo/javajs/v1/a11y/a11yUtils\"].keyboardIsOpen;\n            }\n            ,\n            get createIntervalChecker(){\n                return javaLib[\"fanfanlo/javajs/v1/utils/IntervalCheck\"].createIntervalChecker;\n            }\n            ,\n            get createExitHandler(){\n                return javaLib[\"fanfanlo/javajs/v1/utils/ExitHandler\"].createExitHandler;\n            }\n            ,\n            get setTimeout(){\n                return javaLib[\"fanfanlo/javajs/v1/utils/setTimeout\"].setTimeout;\n            }\n            ,\n            get clearTimeout(){\n                return javaLib[\"fanfanlo/javajs/v1/utils/setTimeout\"].clearTimeout;\n            }\n            ,\n            get createA11yOperator(){\n                return javaLib[\"fanfanlo/javajs/v1/project/components/action/a11y/A11yOperator\"].createA11yOperator;\n            }\n            }){\n            \r\n\r\nlet runningOerateConf = undefined;\r\n//@permission android.permission.BIND_ACCESSIBILITY_SERVICE\r\nfunction createNodeChecker(operateConf, logger, that) {\r\n    runningOerateConf = operateConf;\r\n    logger = logger.createSub(\"createNodeChecker\");\r\n    logger.log('createNodeCheckeroperateConf', operateConf)\r\n    let exitHandler = createExitHandler(that.dispatcher, [a11yModel], logger);\r\n    exitHandler.addExitFn(onExit);\r\n    let domain = exitHandler.domain;\r\n    let isComplete = false;\r\n    function setComplete(){\r\n        isComplete = true;\r\n        onExit();\r\n    }\r\n    let nodeDelayChecker = createIntervalChecker(operateConf.nodesCheckInterval, nodesCheckerCheck, logger)\r\n    let checkFnChecker = createIntervalChecker(operateConf.nodesCheckInterval, check, logger);\r\n\r\n    let isCheckNodesLastChance = false;\r\n    let checkNodesLastSetTimeoutID = undefined;\r\n\r\n    function resetCheckNodesLastChance(){\r\n        isCheckNodesLastChance = false;\r\n        clearCheckNodesLastSetTimeout();\r\n    }\r\n    function clearCheckNodesLastSetTimeout(){\r\n        let id = checkNodesLastSetTimeoutID;\r\n        checkNodesLastSetTimeoutID = undefined;\r\n        if(!id)return;\r\n        clearTimeout(id)\r\n    }\r\n    function runCheckNodesLastSetTimeout(){\r\n        if(checkNodesLastSetTimeoutID != undefined)return;\r\n        let delay = operateConf.nodesLastCheckTime == undefined || operateConf.nodesLastCheckTime <=0 ? 100 * 15 : operateConf.nodesLastCheckTime\r\n        checkNodesLastSetTimeoutID = setTimeout(runNodesLastCheck, delay)\r\n    }\r\n    function runNodesLastCheck(){\r\n        let l = logger.subLogger(`runNodesLastCheck`);\r\n        l.log(\"1lastNodesCheck\")\r\n        clearCheckNodesLastSetTimeout();\r\n        isCheckNodesLastChance = true;\r\n        nodesCheckerCheck();\r\n\r\n    }\r\n    let checkDoActionCount = 0;\r\n    let nodesCheckCompleted = false;\r\n    function canRun(){\r\n        return !nodesCheckCompleted &&  !isComplete && operateConf == runningOerateConf && that.isActionable;\r\n    }\r\n    function onExit() {\r\n        let l = logger.subLogger(`onExit`);\r\n        l.log('eeeeeeeeeeeeexit NodesChecker', operateConf);\r\n        checkFnChecker.exit();\r\n        nodeDelayChecker.exit();\r\n        removeListener();\r\n    }\r\n    function removeListener(){\r\n        tryRemoveContentChangeListener();\r\n        tryRemovePackageActivityChangeListener()\r\n    }\r\n    function checkDoAction() {\r\n        let l = logger.subLogger(`checkDoAction`);\r\n        if (keyboardIsOpen()) {\r\n            l.log(`keyboard is open`);\r\n            // 收起ime会调用返回键\r\n            // 所以需要配置了可以使用全局快捷键才会执行\r\n            if(!operateConf.globalBackActionConf){\r\n                l.log(`globalbackactionconf not set`, operateConf)\r\n                that.dispatchFailed({msg:\"ime is open, globalBackActionConf not set\"});\r\n                return;\r\n            }\r\n            if (++checkDoActionCount > 5) {\r\n                l.log(`checkDoActionCount more then 5`)\r\n                that.dispatchFailed({msg:\"checkDoActionCount more then 5\"});\r\n                return;\r\n            }\r\n            let bl = hideImeIfPackageOpened(operateConf.packageName);\r\n            l.log(`hideImeIfPackageOpened return bl = ${bl}`);\r\n            if (bl) {\r\n                listenPackageActivity();\r\n            }\r\n\r\n            l.log(`hideImeIfPackageOpened wait settimeout`);\r\n            setTimeout(() => {\r\n                l.log(`hideImeIfPackageOpened settimeout checkDoAction`);\r\n                checkDoAction();\r\n            }, 100 * 15)\r\n        } else {\r\n            act();\r\n        }\r\n    }\r\n\r\n    function doAction() {\r\n        logger.log(\"doaction\")\r\n        checkOvertime();\r\n        // that.exitTriggers();\r\n        checkDoAction();\r\n\r\n    }\r\n\r\n\r\n    that.doAction = doAction.bind(that);\r\n\r\n    let contentChangeListenData = undefined;\r\n\r\n    function tryRemoveContentChangeListener() {\r\n        let data = contentChangeListenData;\r\n        contentChangeListenData = undefined;\r\n        if (data == undefined) return;\r\n        a11yModel.removeListener(data);\r\n    }\r\n\r\n    function act() {\r\n        logger.log(`act1`);\r\n        listenPackageActivity();\r\n        checkFnChecker.checkRun();\r\n    }\r\n\r\n    let packageActivityChangeData = undefined;\r\n\r\n    function tryRemovePackageActivityChangeListener(){\r\n        let data = packageActivityChangeData;\r\n        packageActivityChangeData = undefined;\r\n        if(data == undefined)return;\r\n        a11yModel.removeListener(data);\r\n    }\r\n    function listenPackageActivity() {\r\n        let l = logger.subLogger(`listenPackageActivity`);\r\n        // l.log(\"listenpackageactivity1\")\r\n        if (!that.isRunnable || !canRun()) return;\r\n        if (packageActivityChangeData == undefined) {\r\n            l.log(\"listenpackageactivity1 create\")\r\n            packageActivityChangeData = a11yModel.listenDomainData(com.fanfanlo.droidlib.auto.service.accessibility.A11yModel.Companion.eventLastFullScreenPackageActivityChanged, domain, onPackageOrActivityChange);\r\n        }\r\n        listenContentChange();\r\n    }\r\n\r\n    function onPackageOrActivityChange(e) {\r\n        if (!that.isRunnable || !canRun()) return;\r\n        resetCheckNodesLastChance();\r\n        checkFnChecker.checkRun();\r\n    }\r\n\r\n    function check() {\r\n        if (!that.isRunnable || !canRun()) return;\r\n        let l = logger.subLogger(`1check`);\r\n        if (a11yModel.lastFullScreenPackage != operateConf.packageName) {\r\n            l.log(`error error a11yModel.lastFullScreenPackage != operateConf.packageName, a11yModel.lastFullScreenPackage: ${a11yModel.lastFullScreenPackage}, operateConf.packageName:${operateConf.packageName}`);\r\n            tryRemoveContentChangeListener();\r\n            //这种情况可能需要人工干预了，不行的话可能得放弃任务\r\n            return;\r\n        }\r\n        let nowActivity = a11yModel.lastFullScreenActivity;\r\n        let isMathActivity = operateConf.activities.some(an => an == nowActivity);\r\n        l.log(\"isMathActivity\", isMathActivity, nowActivity)\r\n        if (!isMathActivity && operateConf.globalBackActionConf) {\r\n            l.log(`isMatchActivity=false`);\r\n            let bl = globalActionBack(operateConf.globalBackActionConf.interval);\r\n            checkFnChecker.checkRun();\r\n        } else if (operateConf.nodeConditions) {\r\n            l.log(`has nodeConditions1`);\r\n            checkNodes();\r\n        } else {\r\n            l.log(`dispatchSuccess2`);\r\n            that.dispatchSuccess();\r\n        }\r\n    }\r\n\r\n    function listenContentChange() {\r\n        if (!that.isRunnable || !canRun()) return;\r\n        tryRemoveContentChangeListener();\r\n        let typeId = android.view.accessibility.AccessibilityEvent.TYPE_WINDOW_CONTENT_CHANGED\r\n        let type = com.fanfanlo.droidlib.auto.service.accessibility.A11yModel.Companion.getAccessibilityEventType(typeId);\r\n        contentChangeListenData = a11yModel.listenDomainData(type, domain, onContentChange)\r\n    }\r\n\r\n    function onContentChange(e) {\r\n        let l = logger.subLogger(`onContentChange`);\r\n        // l.log(`ccccccccccontentchange isRunnable ${that.isRunnable}, canrun is  ${canRun()}`)\r\n        if (!that.isRunnable || !canRun()) return;\r\n        runCheckNodesLastSetTimeout()\r\n        checkFnChecker.checkRun();\r\n    }\r\n\r\n    let nodesChecker = undefined;\r\n\r\n    function checkNodes() {\r\n        let l = logger.subLogger(`checkNodes`);\r\n        // l.log(\"tttttt isRunnable, canRun\", that.isRunnable, canRun());\r\n        if (!that.isRunnable || !canRun()) return;\r\n        nodeDelayChecker.checkRun();\r\n    }\r\n\r\n    function nodesCheckerCheck() {\r\n        if (!that.isRunnable || !canRun()) return;\r\n        let l = logger.subLogger(`1nodesCheckerCheck`);\r\n        // l.log(`nnnnnnnnodesCheckerCheck isRunnable=${that.isRunnable}, canrun=${canRun()}`)\r\n        if (!nodesChecker) {\r\n            l.log('create nodesChecker')\r\n            nodesChecker = createCheckNodesOnShow(operateConf, onCheckNodesBack, logger)\r\n        }\r\n        // l.log(`run nodesChecker.check223 ${that.isRunnable}, ${canRun()}`)\r\n        nodesChecker.check();\r\n    }\r\n\r\n    function onCheckNodesBack(nodes, isOk, err, matchedCheckList) {\r\n        let l = logger.subLogger(`onCheckNodesBack`);\r\n        l.log(`ccccccccconCheckNodesBack isRunnable=${that.isRunnable}, canrun=${canRun()}`)\r\n        if (!that.isRunnable || !canRun()) return;\r\n        if(isOk){\r\n            setComplete();\r\n        }\r\n        l.log(\"1params\", nodes ? nodes.size() : \"no nodes result\", isOk, err)\r\n        l.log('1matchedCheckList is', matchedCheckList)\r\n        l.log('1conditions are', operateConf.conditions)\r\n        l.log('1Nodeconditions are', operateConf.nodeConditions)\r\n        if (isOk) {\r\n            resetCheckNodesLastChance();\r\n            nodesCheckCompleted = true;\r\n            removeListener();\r\n            checkNodesAction(nodes, matchedCheckList);\r\n        } else if(!isComplete && isCheckNodesLastChance && !nodesCheckCompleted && operateConf.globalBackActionConf) {\r\n            l.log(`1isCheckNodesLastChance=${isCheckNodesLastChance}, 1nodesCheckCompleted=${nodesCheckCompleted}`)\r\n            resetCheckNodesLastChance();\r\n            let bl = globalActionBack(operateConf.globalBackActionConf.interval);\r\n            l.log(`12globalActionback2 bl=${bl}`, operateConf);\r\n        }else{\r\n            l.log(`bbbbbbbbbbbbbbbackonCheckNodesBack isRunnable ${that.isRunnable}, canrun ${canRun()}`)\r\n            nodesCheckerCheck();\r\n        }\r\n    }\r\n\r\n    function checkNodesAction(nodes, matchedCheckList){\r\n        if (!that.isRunnable) return;\r\n        let l = logger.subLogger(`checkNodesAction`);\r\n        l.log(`2node size ${nodes.size()}`)\r\n        l.log(`2matchedCheckList ${matchedCheckList}`)\r\n        if((!nodes || nodes.size() == 0) && (!matchedCheckList || matchedCheckList.length == 0))return;\r\n        let nodeConditions = operateConf.nodeConditions;\r\n        for (let i = 0; i < matchedCheckList.length; i++) {\r\n            let matchConf = matchedCheckList[i];\r\n            l.log(\"doaction1\", matchConf.doAction)\r\n            if(!matchConf.doAction)continue;\r\n            let nodeConf = nodeConditions[matchedCheckList[i].index];\r\n            l.log(`1nodeConf is`, nodeConf);\r\n            let node = nodes[matchedCheckList[i].index];\r\n            let actionConf = nodeConf.action;\r\n            l.log(`1actionConf1`, actionConf)\r\n            let nodeAction = createNodeAction(actionConf);\r\n            l.log(`nodeAction1`, nodeAction.type)\r\n            l.log(`nodeAction2`, nodeAction)\r\n            let bl = a11yModel.doAction(node, nodeAction);\r\n            l.log(\"1bbbbbbbbbbbbbbbbbbbbbb2234\", bl, nodeAction.type, \"bltypeis\",typeof bl);\r\n            if(bl){\r\n                l.log(\"bbbbbbbbbbbllllllll\")\r\n                checkNodesActionNext(actionConf)\r\n                return;\r\n            }\r\n        }\r\n        l.log(\"dddddddddddddispach success\")\r\n        // success without actionConf.doAction\r\n        that.dispatchSuccess();\r\n    }\r\n    function checkNodesActionNext(actionConf){\r\n        if (!that.isRunnable) return;\r\n        let l = logger.subLogger(`checkNodesActionNext`);\r\n        l.log('actionConf1is', actionConf)\r\n        if(!actionConf.nextOperateConf){\r\n            l.log('dispatchSuccess23')\r\n            that.dispatchSuccess();\r\n        }else{\r\n            l.log('5createa11yoperator5')\r\n            createA11yOperator(actionConf.nextOperateConf, logger, that).runOperator();\r\n        }\r\n    }\r\n    function checkOvertime() {\r\n        let l = logger.subLogger(`checkOvertime`);\r\n        let overtime = operateConf.overtime;\r\n        l.log(`1overtime1 is ${overtime}`);\r\n        if (overtime == undefined || overtime <= 0) return;\r\n        setTimeout(() => {\r\n            l.log(`isRunnable is ${that.isRunnable}, canrun is ${canRun()}`);\r\n            if (that.isRunnable && !isComplete) {\r\n                l.log(`call project terminate msg=${operateConf.terminateMsg}`, operateConf);\r\n                that.project.terminate();\r\n            }\r\n        }, overtime)\r\n    }\r\n\r\n    // 实现 onActionPause：暂停所有检查器和监听器\r\n    that.onActionPause = function(){\r\n        let l = logger.subLogger(`onActionPause`);\r\n        l.log(\"NodesChecker 暂停\");\r\n        // 停止监听器\r\n        removeListener();\r\n        // 暂停检查器\r\n        if(checkFnChecker){\r\n            checkFnChecker.pause();\r\n        }\r\n        if(nodeDelayChecker){\r\n            nodeDelayChecker.pause();\r\n        }\r\n    }\r\n\r\n    // 实现 onActionResume：恢复所有检查器和监听器\r\n    that.onActionResume = function(){\r\n        let l = logger.subLogger(`onActionResume`);\r\n        l.log(\"NodesChecker 恢复\");\r\n        // 重新启动监听和检查\r\n        listenPackageActivity();\r\n        // 恢复检查器\r\n        if(checkFnChecker){\r\n            checkFnChecker.resume();\r\n        }\r\n        if(nodeDelayChecker){\r\n            nodeDelayChecker.resume();\r\n        }\r\n    }\r\n\r\n    return {doAction}\r\n}\r\n\r\n\r\n\r\nreturn {createNodeChecker}\n        }\n    }catch(e){\n        console.log(\"init error key is fanfanlo/javajs/v1/project/components/actions/a11y/NodesChecker.java.js\", e);\n    }\n    })()\n    ",
        "dependencies": [
            {
                "path": "fanfanlo/javajs/v1/a11y/a11yUtils",
                "properties": [
                    "createCheckNodesOnShow",
                    " createNodeAction",
                    "\r\n    globalActionBack",
                    " hideImeIfPackageOpened",
                    "\r\n    keyboardIsOpen"
                ]
            },
            {
                "path": "fanfanlo/javajs/v1/utils/IntervalCheck",
                "properties": [
                    "createIntervalChecker"
                ]
            },
            {
                "path": "fanfanlo/javajs/v1/utils/ExitHandler",
                "properties": [
                    "createExitHandler"
                ]
            },
            {
                "path": "fanfanlo/javajs/v1/utils/setTimeout",
                "properties": [
                    "setTimeout",
                    " clearTimeout"
                ]
            },
            {
                "path": "fanfanlo/javajs/v1/project/components/action/a11y/A11yOperator",
                "properties": [
                    "createA11yOperator"
                ]
            }
        ]
    },
    "fanfanlo/javajs/v1/project/components/actions/a11y/TryBackToMain": {
        "content": "\n    (()=>{\n    try{\n        // @ts-ignore\n        with({\n            get regAction(){\n                return javaLib[\"fanfanlo/javajs/v1/project/store\"].regAction;\n            }\n            ,\n            get createCheckNodesOnShow(){\n                return javaLib[\"fanfanlo/javajs/v1/a11y/a11yUtils\"].createCheckNodesOnShow;\n            }\n            ,\n            get globalActionBack(){\n                return javaLib[\"fanfanlo/javajs/v1/a11y/a11yUtils\"].globalActionBack;\n            }\n            ,\n            get hideImeIfPackageOpened(){\n                return javaLib[\"fanfanlo/javajs/v1/a11y/a11yUtils\"].hideImeIfPackageOpened;\n            }\n            ,\n            get keyboardIsOpen(){\n                return javaLib[\"fanfanlo/javajs/v1/a11y/a11yUtils\"].keyboardIsOpen;\n            }\n            ,\n            get eventTypeComplete(){\n                return javaLib[\"fanfanlo/javajs/v1/project/base/projectEventTypes\"].eventTypeComplete;\n            }\n            ,\n            get eventTypeExit(){\n                return javaLib[\"fanfanlo/javajs/v1/project/base/projectEventTypes\"].eventTypeExit;\n            }\n            ,\n            get setTimeout(){\n                return javaLib[\"fanfanlo/javajs/v1/utils/setTimeout\"].setTimeout;\n            }\n            ,\n            get createIntervalChecker(){\n                return javaLib[\"fanfanlo/javajs/v1/utils/IntervalCheck\"].createIntervalChecker;\n            }\n            ,\n            get createExitHandler(){\n                return javaLib[\"fanfanlo/javajs/v1/utils/ExitHandler\"].createExitHandler;\n            }\n            ,\n            get createA11yOperator(){\n                return javaLib[\"fanfanlo/javajs/v1/project/components/action/a11y/A11yOperator\"].createA11yOperator;\n            }\n            }){\n            \r\n\r\nlet type = \"fanfanlo/javajs/v1/project/components/actions/a11y/TryBackToMain\"\r\n\r\nonLibReady(()=>{\r\n    regAction(type, attach)\r\n}, `src/droid/java_js/fanfanlo/javajs/v1/project/components/action/a11y/TryBackToMain.java.js`);\r\n\r\nfunction attach(that){\r\n    let superDoAction = that.doAction;\r\n    let logger = that.logger.createSub(\"TryBackToMainClazz\");\r\n    console.log(\"tyr back to main running\")\r\n    function doAction(){\r\n        superDoAction();\r\n        that.exitTriggers();\r\n        createA11yOperator(that.data, logger, that).runOperator();\r\n        checkOvertime();\r\n    }\r\n    function checkOvertime(){\r\n        let l = logger.subLogger(`TryBackToMainClazz.checkOvertimeFn`);\r\n        let overtime = that.data.overtime;\r\n        l.log(`try back to main overtime is ${overtime}`);\r\n        if(overtime == undefined || overtime <=0)return;\r\n        setTimeout(()=>{\r\n            l.log(`isRunnable is ${that.isRunnable}`);\r\n            if(that.isRunnable){\r\n                l.log(`call project terminate`);\r\n                that.project.terminate();\r\n            }\r\n        }, overtime)\r\n    }\r\n    that.doAction = doAction.bind(that);\r\n}\r\n\r\nreturn {type}\n        }\n    }catch(e){\n        console.log(\"init error key is fanfanlo/javajs/v1/project/components/actions/a11y/TryBackToMain.java.js\", e);\n    }\n    })()\n    ",
        "dependencies": [
            {
                "path": "fanfanlo/javajs/v1/project/store",
                "properties": [
                    "regAction"
                ]
            },
            {
                "path": "fanfanlo/javajs/v1/a11y/a11yUtils",
                "properties": [
                    "createCheckNodesOnShow",
                    "\r\n    globalActionBack",
                    " hideImeIfPackageOpened",
                    "\r\n    keyboardIsOpen"
                ]
            },
            {
                "path": "fanfanlo/javajs/v1/project/base/projectEventTypes",
                "properties": [
                    "eventTypeComplete",
                    " eventTypeExit"
                ]
            },
            {
                "path": "fanfanlo/javajs/v1/utils/setTimeout",
                "properties": [
                    "setTimeout"
                ]
            },
            {
                "path": "fanfanlo/javajs/v1/utils/IntervalCheck",
                "properties": [
                    "createIntervalChecker"
                ]
            },
            {
                "path": "fanfanlo/javajs/v1/utils/ExitHandler",
                "properties": [
                    "createExitHandler"
                ]
            },
            {
                "path": "fanfanlo/javajs/v1/project/components/action/a11y/A11yOperator",
                "properties": [
                    "createA11yOperator"
                ]
            }
        ]
    },
    "fanfanlo/javajs/v1/project/components/actions/app/openApp": {
        "content": "\n    (()=>{\n    try{\n        // @ts-ignore\n        with({\n            get regAction(){\n                return javaLib[\"fanfanlo/javajs/v1/project/store\"].regAction;\n            }\n            ,\n            get eventTypeComplete(){\n                return javaLib[\"fanfanlo/javajs/v1/project/base/projectEventTypes\"].eventTypeComplete;\n            }\n            ,\n            get eventTypeExit(){\n                return javaLib[\"fanfanlo/javajs/v1/project/base/projectEventTypes\"].eventTypeExit;\n            }\n            }){\n            \r\n\r\nlet type = \"fanfanlo/javajs/v1/project/components/actions/app/openApp\";\r\n\r\nonLibReady(()=>{\r\n    regAction(type, attach)\r\n}, `src.droid.java_js.fanfanlo.javajs.v1.project.components.action.app.openApp.java.js`)\r\nfunction attach(that){\r\n    let superDoAction = that.doAction;\r\n    let logger = that.logger;\r\n    let domain = {};\r\n\r\n    function onScriptCallExit(){\r\n        logger.log(\"onScriptCallExit\", that.baseMsg)\r\n        onExit();\r\n    }\r\n    addScriptExitListener(onScriptCallExit);\r\n    that.dispatcher.listenData(eventTypeExit, onExit);\r\n    that.dispatcher.listenData(eventTypeComplete, onExit);\r\n    function onExit(e){\r\n        logger.log(\"OpenAppOnExit\")\r\n        clean();\r\n    }\r\n    function clean(){\r\n        a11yModel.removeDomain(domain)\r\n        removeScriptExitListener(onScriptCallExit);\r\n    }\r\n\r\n    that.doAction = doAction.bind(that);\r\n    function doAction() {\r\n        superDoAction();\r\n        check();\r\n    }\r\n\r\n    function check(){\r\n        if(trySuccess()) return;\r\n        a11yModel.listenDomainData(com.fanfanlo.droidlib.auto.service.accessibility.A11yModel.Companion.eventLastPackageChanged, domain, onPackageChange);\r\n        com.fanfanlo.lib.intent.Funcs.openAppWithSelfFirst(that.data.packageName);\r\n    }\r\n    function onPackageChange(e){\r\n        trySuccess();\r\n    }\r\n    function trySuccess(){\r\n        if(a11yModel.lastFullScreenPackage != that.data.packageName){\r\n            return false;\r\n        }\r\n        that.dispatchSuccess();\r\n        return true;\r\n    }\r\n}\r\n\r\nreturn {type}\r\n\n        }\n    }catch(e){\n        console.log(\"init error key is fanfanlo/javajs/v1/project/components/actions/app/openApp.java.js\", e);\n    }\n    })()\n    ",
        "dependencies": [
            {
                "path": "fanfanlo/javajs/v1/project/store",
                "properties": [
                    "regAction"
                ]
            },
            {
                "path": "fanfanlo/javajs/v1/project/base/projectEventTypes",
                "properties": [
                    "eventTypeComplete",
                    " eventTypeExit"
                ]
            }
        ]
    },
    "fanfanlo/javajs/v1/project/components/actions/floatwindow/showFloatWindow": {
        "content": "\n    (()=>{\n    try{\n        // @ts-ignore\n        with({\n            get regAction(){\n                return javaLib[\"fanfanlo/javajs/v1/project/store\"].regAction;\n            }\n            ,\n            get eventTypeComplete(){\n                return javaLib[\"fanfanlo/javajs/v1/project/base/projectEventTypes\"].eventTypeComplete;\n            }\n            ,\n            get eventTypeExit(){\n                return javaLib[\"fanfanlo/javajs/v1/project/base/projectEventTypes\"].eventTypeExit;\n            }\n            }){\n            \r\n\r\nlet type = \"fanfanlo/javajs/v1/project/components/actions/floatwindow/showFloatWindow\";\r\n\r\nonLibReady(()=>{\r\n    console.log('[showFloatWindow] onLibReady called, registering action type:', type);\r\n    regAction(type, attach)\r\n}, `src.droid.java_js.fanfanlo.javajs.v1.project.components.actions.floatwindow.showFloatWindow.java.js`)\r\n\r\nfunction attach(that){\r\n    console.log('[showFloatWindow.attach] called, that:', that);\r\n    let superDoAction = that.doAction;\r\n    let logger = that.logger;\r\n    logger.log('[showFloatWindow.attach] initializing action');\r\n\r\n    // 监听器引用\r\n    let exitListener = null;\r\n    let completeListener = null;\r\n    let dismissListener = null;\r\n\r\n    // 响应全局退出\r\n    function onScriptCallExit(){\r\n        logger.log(\"[showFloatWindow.onScriptCallExit]\", that.baseMsg);\r\n        onExit();\r\n    }\r\n    addScriptExitListener(onScriptCallExit);\r\n\r\n    // 监听退出事件\r\n    exitListener = that.dispatcher.listenData(eventTypeExit, onExit);\r\n    completeListener = that.dispatcher.listenData(eventTypeComplete, onExit);\r\n\r\n    function onExit(e){\r\n        logger.log(\"[showFloatWindow.onExit] called\");\r\n        clean();\r\n    }\r\n\r\n    function clean(){\r\n        logger.log('[showFloatWindow.clean] cleaning up resources');\r\n\r\n        if (exitListener) {\r\n            logger.log('[showFloatWindow.clean] removing exit listener');\r\n            exitListener.removeListener();\r\n            exitListener = null;\r\n        }\r\n\r\n        if (completeListener) {\r\n            logger.log('[showFloatWindow.clean] removing complete listener');\r\n            completeListener.removeListener();\r\n            completeListener = null;\r\n        }\r\n\r\n        if (dismissListener) {\r\n            logger.log('[showFloatWindow.clean] removing dismiss listener');\r\n            dismissListener.removeListener();\r\n            dismissListener = null;\r\n        }\r\n        com.fanfanlo.lib.components.floatview.floatwindow.Window.exitById(that.data.windowConf.windowId)\r\n        removeScriptExitListener(onScriptCallExit);\r\n    }\r\n\r\n    that.doAction = doAction.bind(that);\r\n\r\n    function doAction() {\r\n        logger.log('[showFloatWindow.doAction] called');\r\n        superDoAction();\r\n\r\n        const windowConf = that.data.windowConf;\r\n        logger.log('[showFloatWindow.doAction] windowConf:', windowConf);\r\n\r\n        if (!windowConf) {\r\n            logger.log('[showFloatWindow.doAction] ERROR: windowConf is undefined');\r\n            return;\r\n        }\r\n\r\n        const windowId = windowConf.windowId;\r\n        logger.log('[showFloatWindow.doAction] windowId:', windowId);\r\n\r\n        if (!windowId) {\r\n            logger.log('[showFloatWindow.doAction] ERROR: windowId is undefined');\r\n            return;\r\n        }\r\n\r\n        // 打开悬浮窗\r\n        openFloatWindow(windowConf);\r\n    }\r\n\r\n    function openFloatWindow(windowConf) {\r\n        logger.log('[showFloatWindow.openFloatWindow] opening float window, windowId:', windowConf.windowId);\r\n\r\n        const windowId = windowConf.windowId;\r\n\r\n        // 获取 dismiss 事件类型\r\n        const dismissEventType = com.fanfanlo.lib.components.floatview.floatwindow.Window.getDismissEventType(windowId);\r\n        logger.log('[showFloatWindow.openFloatWindow] dismissEventType:', dismissEventType);\r\n\r\n        // 监听窗口关闭事件\r\n        function onDismiss() {\r\n            logger.log('[showFloatWindow.onDismiss] float window dismissed, windowId:', windowId);\r\n            clean();\r\n            // 调用全局函数退出\r\n            logger.log('[showFloatWindow.onDismiss] calling jsCallComplete()');\r\n            jsCallComplete();\r\n        }\r\n\r\n        logger.log('[showFloatWindow.openFloatWindow] adding dismiss event listener');\r\n        dismissListener = com.fanfanlo.lib.jvmstatic.JvmStaticObject.dispatcher.listenData(dismissEventType, onDismiss);\r\n\r\n        // 打开悬浮窗\r\n        const confString = JSON.stringify(windowConf);\r\n        logger.log('[showFloatWindow.openFloatWindow] creating window with conf:', confString);\r\n\r\n        try {\r\n            logger.log('[showFloatWindow.openFloatWindow] calling WindowBuilder.build()');\r\n            com.fanfanlo.lib.components.floatview.floatwindow.WindowBuilder.build(confString);\r\n            logger.log('[showFloatWindow.openFloatWindow] window created successfully');\r\n        } catch (error) {\r\n            logger.log('[showFloatWindow.openFloatWindow] ERROR:', error.message, error.stack);\r\n        }\r\n    }\r\n}\r\n\r\nreturn {type}\r\n\n        }\n    }catch(e){\n        console.log(\"init error key is fanfanlo/javajs/v1/project/components/actions/floatwindow/showFloatWindow.java.js\", e);\n    }\n    })()\n    ",
        "dependencies": [
            {
                "path": "fanfanlo/javajs/v1/project/store",
                "properties": [
                    "regAction"
                ]
            },
            {
                "path": "fanfanlo/javajs/v1/project/base/projectEventTypes",
                "properties": [
                    "eventTypeComplete",
                    " eventTypeExit"
                ]
            }
        ]
    },
    "fanfanlo/javajs/v1/project/components/triggers/a11y/ActivityInOut": {
        "content": "\n    (()=>{\n    try{\n        // @ts-ignore\n        with({\n            get regTrigger(){\n                return javaLib[\"fanfanlo/javajs/v1/project/store\"].regTrigger;\n            }\n            ,\n            get hideImeIfPackageOpened(){\n                return javaLib[\"fanfanlo/javajs/v1/a11y/a11yUtils\"].hideImeIfPackageOpened;\n            }\n            ,\n            get eventTypeComplete(){\n                return javaLib[\"fanfanlo/javajs/v1/project/base/projectEventTypes\"].eventTypeComplete;\n            }\n            ,\n            get eventTypeExit(){\n                return javaLib[\"fanfanlo/javajs/v1/project/base/projectEventTypes\"].eventTypeExit;\n            }\n            }){\n            \r\n\r\nlet type = \"fanfanlo/javajs/v1/project/components/triggers/a11y/activityInOut\";\r\n\r\nlet data = {\r\n    packageName:\"packageA\", // *\r\n    activities:[\"activityA\", \"activityB\"], // *\r\n    hideIme:true,\r\n}\r\nonLibReady(()=>{\r\n    regTrigger(type, attach)\r\n}, `src/droid/java_js/fanfanlo/javajs/v1/project/components/trigger/a11y/activityInOut.js`)\r\n\r\n\r\nfunction attach(that){\r\n    let domain = {};\r\n    function clean(){\r\n        a11yModel.removeDomain(that);\r\n        that.removeDomain(domain)\r\n    }\r\n    function onExitComplete(e){\r\n        clean();\r\n    }\r\n    let superOnRun = that.onRun;\r\n    that.onRun = onRun.bind(that);\r\n    function onRun() {\r\n        superOnRun();\r\n        addListener();\r\n    }\r\n    function addListener(){\r\n        that.dispatcher.listenDomain(eventTypeExit, domain, onExitComplete);\r\n        that.dispatcher.listenDomain(eventTypeComplete, domain, onExitComplete);\r\n        a11yModel.listenDomainData(com.fanfanlo.droidlib.auto.service.accessibility.A11yModel.Companion.eventLastPackageChanged, this, onPackageOrActivityChange);\r\n        a11yModel.listenDomainData(com.fanfanlo.droidlib.auto.service.accessibility.A11yModel.Companion.eventLastActivityInfoChanged, this, onPackageOrActivityChange);\r\n    }\r\n    let isOn = false;\r\n    function onPackageOrActivityChange(event){\r\n        check();\r\n    }\r\n    function check(){\r\n        if(!that.isRunnable){\r\n            clean();\r\n            return;\r\n        }\r\n        let pn = that.data.packageName;\r\n        if(that.data.hideIme && hideImeIfPackageOpened(pn)){\r\n            return;\r\n        }\r\n        let packageName = a11yModel.lastFullScreenPackage;\r\n        let activityName = a11yModel.lastFullScreenActivity;\r\n        let data = {packageName, activityName}\r\n        let activities = that.data.activities;\r\n        if(activities.indexOf(activityName) == -1){\r\n            return triggerOff(data);\r\n        }\r\n        triggerOn(data);\r\n    }\r\n    function triggerOff(data){\r\n        if(!isOn)return;\r\n        isOn = false;\r\n        that.dispatchConditionsOff({data})\r\n    }\r\n    function triggerOn(data){\r\n        if(isOn)return;\r\n        isOn = true;\r\n        that.dispatchConditionsOn({data})\r\n    }\r\n    let superOnExit = that.onExit;\r\n\r\n    function onExit(){\r\n        superOnExit();\r\n        a11yModel.removeDomain(this);\r\n    }\r\n    that.onExit = onExit.bind(that);\r\n\r\n}\r\n\r\nreturn {type}\n        }\n    }catch(e){\n        console.log(\"init error key is fanfanlo/javajs/v1/project/components/triggers/a11y/ActivityInOut.java.js\", e);\n    }\n    })()\n    ",
        "dependencies": [
            {
                "path": "fanfanlo/javajs/v1/project/store",
                "properties": [
                    "regTrigger"
                ]
            },
            {
                "path": "fanfanlo/javajs/v1/a11y/a11yUtils",
                "properties": [
                    "hideImeIfPackageOpened"
                ]
            },
            {
                "path": "fanfanlo/javajs/v1/project/base/projectEventTypes",
                "properties": [
                    "eventTypeComplete",
                    " eventTypeExit"
                ]
            }
        ]
    },
    "fanfanlo/javajs/v1/project/components/triggers/a11y/node-trigger": {
        "content": "\n    (()=>{\n    try{\n        // @ts-ignore\n        with({\n            get regTrigger(){\n                return javaLib[\"fanfanlo/javajs/v1/project/store\"].regTrigger;\n            }\n            ,\n            get eventTypeComplete(){\n                return javaLib[\"fanfanlo/javajs/v1/project/base/projectEventTypes\"].eventTypeComplete;\n            }\n            ,\n            get eventTypeExit(){\n                return javaLib[\"fanfanlo/javajs/v1/project/base/projectEventTypes\"].eventTypeExit;\n            }\n            }){\n            \n\nlet type = `fanfanlo/javajs/v1/project/components/triggers/a11y/node-trigger`;\n\nonLibReady(()=>{\n    regTrigger(type, attach)\n}, `src/droid/java_js/fanfanlo/javajs/v1/project/components/triggers/a11y/node-trigger.java.js`)\n\nfunction attach(that){\n    let domain = {};\n    let logger = that.logger;\n\n    logger.log('NodeTrigger.attach called');\n    // logger.puased = true;\n\n    // 节点变化监听数据\n    let contentChangeListenData = undefined;\n\n    addScriptExitListener(onScriptCallExit);\n\n    function onScriptCallExit(){\n        logger.log(\"script call NodeTrigger exit\", that.baseMsg)\n        onExit();\n    }\n\n    function onExit(e){\n        clean();\n    }\n\n    function clean(){\n        removeListener();\n        removeContentChangeListener();\n        removeScriptExitListener(onScriptCallExit);\n    }\n\n    function onExitOrComplete(e){\n        clean();\n    }\n\n    let superOnRun = that.onRun;\n    that.onRun = onRun.bind(that);\n\n    function onRun() {\n        superOnRun();\n        logger.log('NodeTrigger.onRun called');\n        addListener();\n        check();\n    }\n\n    function addListener(){\n        logger.log('NodeTrigger.addListener - listening for pn/an changes')\n\n        that.dispatcher.listenDomain(eventTypeExit, domain, onExitOrComplete);\n        that.dispatcher.listenDomain(eventTypeComplete, domain, onExitOrComplete);\n\n        // 监听 pn+an 变化\n        a11yModel.listenDomainData(\n            com.fanfanlo.droidlib.auto.service.accessibility.A11yModel.Companion.eventLastFullScreenPackageActivityChanged,\n            domain,\n            onPackageActivityChanged\n        );\n    }\n\n    function removeListener(){\n        logger.log('NodeTrigger.removeListener')\n        a11yModel.removeDomain(domain);\n        that.dispatcher.removeDomain(domain)\n    }\n\n    function removeContentChangeListener(){\n        logger.log('NodeTrigger.removeContentChangeListener')\n        let data = contentChangeListenData;\n        contentChangeListenData = undefined;\n        if(data == undefined)return;\n        a11yModel.removeListener(data);\n    }\n\n    function addContentChangeListener(){\n        logger.log('NodeTrigger.addContentChangeListener - adding listener for node changes')\n        if(contentChangeListenData != undefined){\n            logger.log('NodeTrigger.addContentChangeListener - already listening')\n            return;\n        }\n        let typeId = android.view.accessibility.AccessibilityEvent.TYPE_WINDOW_CONTENT_CHANGED;\n        let type = com.fanfanlo.droidlib.auto.service.accessibility.A11yModel.Companion.getAccessibilityEventType(typeId);\n        contentChangeListenData = a11yModel.listenDomainData(type, domain, onContentChange);\n        logger.log('NodeTrigger.addContentChangeListener - listener added')\n    }\n\n    function onContentChange(event){\n        logger.log('NodeTrigger.onContentChange - content changed, rechecking nodes')\n        if(!that.isRunnable){\n            logger.log('NodeTrigger.onContentChange - not runnable, removing listener')\n            removeContentChangeListener();\n            return;\n        }\n        checkNodes();\n    }\n\n    function onPackageActivityChanged(event){\n        logger.log('NodeTrigger.onPackageActivityChanged - rechecking')\n        check();\n    }\n\n    function check(){\n        if(!that.isRunnable){\n            logger.log('NodeTrigger.check - not runnable, cleaning up')\n            clean();\n            return;\n        }\n\n        let currentPn = a11yModel.lastFullScreenPackage;\n        let currentAn = a11yModel.lastFullScreenActivity;\n\n        logger.log('NodeTrigger.check - current:', String(currentPn), '/', String(currentAn), ', expected:', String(that.data.pn), '/', String(that.data.an), '/', String(that.data.cn));\n\n        // 检查 pn+an 是否匹配\n        let isPnMatch = currentPn == that.data.pn;\n        let isAnMatch = currentAn == that.data.an;\n\n        logger.log('NodeTrigger.check - isPnMatch:', isPnMatch, ', isAnMatch:', isAnMatch);\n\n        if(!isPnMatch || !isAnMatch){\n            logger.log('NodeTrigger.check - not match, removing listener')\n            // pn/an 不匹配时，移除节点变化监听器\n            removeContentChangeListener();\n            // 派发 conditions off 事件\n            that.dispatchConditionsOff({target:that})\n            return;\n        }\n\n        // pn+an 匹配,开始检查节点\n        logger.log('NodeTrigger.check - matched, checking nodes')\n        checkNodes();\n    }\n\n    function checkNodes(){\n        logger.log('NodeTrigger.checkNodes called')\n\n        if(!that.isRunnable){\n            logger.log('NodeTrigger.checkNodes - not runnable')\n            return;\n        }\n\n        let selectorChain = that.data.selectorChain;\n        logger.log('NodeTrigger.checkNodes - selectorChain:', JSON.stringify(selectorChain))\n\n        if(!selectorChain || !selectorChain.operations || selectorChain.operations.length == 0){\n            logger.log('NodeTrigger.checkNodes - no operations, conditions on')\n            that.dispatchConditionsOn({target:that})\n            removeContentChangeListener();\n            return;\n        }\n\n        try{\n            let foundNode = findNodeBySelectorChain(selectorChain);\n            logger.log('NodeTrigger.checkNodes - foundNode:', foundNode ? 'found' : 'not found')\n\n            if(foundNode){\n                // ==================== 保存 foundNode 到 triggerActionContext ====================\n                if(that.triggerActionContext){\n                    logger.log('NodeTrigger.checkNodes - saving foundNode')\n                    that.triggerActionContext.foundNode = foundNode\n                }else{\n                    logger.warn('NodeTrigger.checkNodes - triggerActionContext not available')\n                }\n                // ==================== foundNode 保存完成 ====================\n\n                that.dispatchConditionsOn({target:that})\n                removeContentChangeListener();\n            }else{\n                logger.log('NodeTrigger.checkNodes - waiting for node')\n                addContentChangeListener();\n                that.dispatchConditionsOff({target:that})\n            }\n        }catch(e){\n            logger.error('NodeTrigger.checkNodes - error:', e, String(e.message))\n            logger.error('NodeTrigger.checkNodes - stack:', String(e.stack))\n            addContentChangeListener();\n            that.dispatchConditionsOff({target:that})\n        }\n    }\n\n    /**\n     * 使用DroidSelector查找节点\n     * @param {object} selectorChain - 包含operations数组的配置对象\n     * @returns {object|null} - 找到的DroidNode或null\n     */\n    function findNodeBySelectorChain(selectorChain){\n        logger.log('NodeTrigger.findNodeBySelectorChain called, operations:', selectorChain.operations ? selectorChain.operations.length : 0)\n\n        if (!selectorChain.operations) {\n            logger.log('NodeTrigger.findNodeBySelectorChain - no operations')\n            return null\n        }\n\n        try{\n            let selector = new com.fanfanlo.droidlib.auto.selector.DroidSelector(a11yModel);\n            logger.log('NodeTrigger.findNodeBySelectorChain - DroidSelector created')\n\n            let operations = selectorChain.operations;\n            for(let i = 0; i < operations.length; i++){\n                let operation = operations[i];\n                let method = operation.method;\n                let value = operation.value;\n\n                logger.log('NodeTrigger.findNodeBySelectorChain - operation[' + i + ']:', method, '=', value)\n\n                // 调用selector的对应方法\n                if(method == 'text'){\n                    selector = selector.text(value);\n                }else if(method == 'textContains'){\n                    selector = selector.textContains(value);\n                }else if(method == 'textStartsWith'){\n                    selector = selector.textStartsWith(value);\n                }else if(method == 'textEndsWith'){\n                    selector = selector.textEndsWith(value);\n                }else if(method == 'textMatches'){\n                    selector = selector.textMatches(value);\n                }else if(method == 'id'){\n                    selector = selector.id(value);\n                }else if(method == 'idContains'){\n                    selector = selector.idContains(value);\n                }else if(method == 'idStartsWith'){\n                    selector = selector.idStartsWith(value);\n                }else if(method == 'idEndsWith'){\n                    selector = selector.idEndsWith(value);\n                }else if(method == 'idMatches'){\n                    selector = selector.idMatches(value);\n                }else if(method == 'className'){\n                    selector = selector.className(value);\n                }else if(method == 'classNameContains'){\n                    selector = selector.classNameContains(value);\n                }else if(method == 'classNameStartsWith'){\n                    selector = selector.classNameStartsWith(value);\n                }else if(method == 'classNameEndsWith'){\n                    selector = selector.classNameEndsWith(value);\n                }else if(method == 'classNameMatches'){\n                    selector = selector.classNameMatches(value);\n                }else if(method == 'desc'){\n                    selector = selector.desc(value);\n                }else if(method == 'descContains'){\n                    selector = selector.descContains(value);\n                }else if(method == 'descStartsWith'){\n                    selector = selector.descStartsWith(value);\n                }else if(method == 'descEndsWith'){\n                    selector = selector.descEndsWith(value);\n                }else if(method == 'descMatches'){\n                    selector = selector.descMatches(value);\n                }else if(method == 'packageName'){\n                    selector = selector.packageName(value);\n                }else if(method == 'packageNameContains'){\n                    selector = selector.packageNameContains(value);\n                }else if(method == 'packageNameStartsWith'){\n                    selector = selector.packageNameStartsWith(value);\n                }else if(method == 'packageNameEndsWith'){\n                    selector = selector.packageNameEndsWith(value);\n                }else if(method == 'packageNameMatches'){\n                    selector = selector.packageNameMatches(value);\n                }else if(method == 'clickable'){\n                    selector = selector.clickable(value);\n                }else if(method == 'longClickable'){\n                    selector = selector.longClickable(value);\n                }else if(method == 'scrollable'){\n                    selector = selector.scrollable(value);\n                }else if(method == 'enabled'){\n                    selector = selector.enabled(value);\n                }else if(method == 'checkable'){\n                    selector = selector.checkable(value);\n                }else if(method == 'checked'){\n                    selector = selector.checked(value);\n                }else if(method == 'focusable'){\n                    selector = selector.focusable(value);\n                }else if(method == 'focused'){\n                    selector = selector.focused(value);\n                }else if(method == 'visibleToUser'){\n                    selector = selector.visibleToUser(value);\n                }else if(method == 'selected'){\n                    selector = selector.selected(value);\n                }else if(method == 'password'){\n                    selector = selector.password(value);\n                }else if(method == 'depth'){\n                    selector = selector.depth(value);\n                }else if(method == 'indexInParent'){\n                    selector = selector.indexInParent(value);\n                }else if(method == 'childCount'){\n                    selector = selector.childCount(value);\n                }else if(method == 'bounds'){\n                    selector = selector.bounds(value.left, value.top, value.right, value.bottom);\n                }else if(method == 'boundsInside'){\n                    selector = selector.boundsInside(value.left, value.top, value.right, value.bottom);\n                }else if(method == 'boundsContains'){\n                    selector = selector.boundsContains(value.left, value.top, value.right, value.bottom);\n                }else if(method == 'algorithm'){\n                    selector = selector.algorithm(value);\n                }else{\n                    logger.warn('NodeTrigger.findNodeBySelectorChain - unknown method:', method)\n                }\n            }\n\n            logger.log('NodeTrigger.findNodeBySelectorChain - calling findOne()')\n            let result = selector.findOne();\n            logger.log('NodeTrigger.findNodeBySelectorChain - result:', result ? 'found' : 'null')\n\n            return result;\n        }catch(e){\n            logger.error('NodeTrigger.findNodeBySelectorChain - error:', e, e.stack)\n            return null;\n        }\n    }\n}\n\nreturn {type}\n\n        }\n    }catch(e){\n        console.log(\"init error key is fanfanlo/javajs/v1/project/components/triggers/a11y/node-trigger.java.js\", e);\n    }\n    })()\n    ",
        "dependencies": [
            {
                "path": "fanfanlo/javajs/v1/project/store",
                "properties": [
                    "regTrigger"
                ]
            },
            {
                "path": "fanfanlo/javajs/v1/project/base/projectEventTypes",
                "properties": [
                    "eventTypeComplete",
                    " eventTypeExit"
                ]
            }
        ]
    },
    "fanfanlo/javajs/v1/project/components/triggers/a11y/NodesInOut": {
        "content": "\n    (()=>{\n    try{\n        // @ts-ignore\n        with({\n            get regTrigger(){\n                return javaLib[\"fanfanlo/javajs/v1/project/store\"].regTrigger;\n            }\n            ,\n            get Types(){\n                return javaLib[\"fanfanlo/javajs/v1/a11y/node/ICondition\"].Types;\n            }\n            ,\n            get eventTypeExit(){\n                return javaLib[\"fanfanlo/javajs/v1/project/base/projectEventTypes\"].eventTypeExit;\n            }\n            }){\n            \r\nlet type = \"fanfanlo/javajs/v1/project/components/triggers/a11y/NodesInOut\";\r\nonLibReady(()=>{\r\n    regTrigger(type, attach)\r\n}, `src/droid/java_js/fanfanlo/javajs/v1/project/components/trigger/a11y/NodesInOut.java.js`)\r\nfunction attach(that){\r\n    let logger = console.subLogger(`${Date.now()}`)\r\n    function onScriptCallExit(){\r\n        onExit();\r\n    }\r\n    addScriptExitListener(onScriptCallExit);\r\n    that.dispatcher.listenData(eventTypeExit, onExit);\r\n    function onExit(e){\r\n        tryRemoveContentChangeListener();\r\n        a11yModeRemoveThis()\r\n        removeScriptExitListener(onScriptCallExit);\r\n    }\r\n\r\n    function a11yModeRemoveThis(){\r\n        a11yModel.removeDomain(that);\r\n    }\r\n\r\n    var pnAnMatched = false;\r\n    var lastJob = undefined;\r\n    var contentChangeListener = undefined;\r\n    let superOnRun = that.onRun;\r\n    that.onRun = onRun.bind(that);\r\n    function onRun() {\r\n        prepareConditions()\r\n        superOnRun();\r\n        a11yModel.listenDomainData(com.fanfanlo.droidlib.auto.service.accessibility.A11yModel.Companion.eventLastPackageChanged, this, onPackageOrActivityChange);\r\n        a11yModel.listenDomainData(com.fanfanlo.droidlib.auto.service.accessibility.A11yModel.Companion.eventLastActivityInfoChanged, this, onPackageOrActivityChange);\r\n        check();\r\n    }\r\n    function prepareConditions(){\r\n        // nodeCondition是SFRoot，不是SFData\r\n        that.data.conditions = that.data.nodeConditions.map((cond)=>{\r\n            let root = {\r\n                type:\"Root\",\r\n                next:cond\r\n            }\r\n            cond = root;\r\n            while(cond){\r\n                cond.type = Types[cond.type];\r\n                cond = cond.next;\r\n            }\r\n            let data = conditionJsonToData(root);\r\n            return data.next;\r\n        })\r\n    }\r\n    function conditionJsonToData(data){\r\n        let s = JSON.stringify(data);\r\n        return com.fanfanlo.droidlib.auto.command.objectmapper.projectObjectMapper.stringToSfRoot(s)\r\n    }\r\n    let isOn = false;\r\n    function onPackageOrActivityChange(event){\r\n        if(!isScriptRunnable){\r\n            return a11yModeRemoveThis();\r\n        }\r\n        check();\r\n    }\r\n    function check(){\r\n        var checkDomain = {}\r\n        let packageName = a11yModel.lastFullScreenPackage;\r\n        let activityName = a11yModel.lastFullScreenActivity;\r\n        let data = {packageName, activityName, nodes:undefined}\r\n        if(!checkIsPackageActivity()){\r\n            tryRemoveContentChangeListener()\r\n            return triggerOff(data)\r\n        }\r\n        if(!pnAnMatched){\r\n            pnAnMatched = true;\r\n            listenContentChange();\r\n        }\r\n        checkNodes();\r\n        function checkIsPackageActivity(){\r\n            return packageName == that.data.packageName && that.data.activities.some(name=>name==activityName);\r\n          return packageName == that.data.packageName && that.data.activities.indexOf(activityName) > -1\r\n        }\r\n\r\n        function listenContentChange(){\r\n            tryRemoveContentChangeListener();\r\n            let typeId = android.view.accessibility.AccessibilityEvent.TYPE_WINDOW_CONTENT_CHANGED\r\n            let type = com.fanfanlo.droidlib.auto.service.accessibility.A11yModel.Companion.getAccessibilityEventType(typeId);\r\n            contentChangeListener = a11yModel.listenData(type, onContentChange)\r\n        }\r\n        function onContentChange(e){\r\n            if(isScriptExited())return;\r\n            if(!pnAnMatched){\r\n                tryRemoveContentChangeListener();\r\n                return;\r\n            }\r\n            checkNodes()\r\n        }\r\n        var job = undefined;\r\n        function checkNodes(){\r\n            if(lastJob && (!job || job == lastJob)){\r\n                tryCancelJob(lastJob);\r\n                lastJob = undefined;\r\n            }\r\n            let proxy = new com.fanfanlo.droidlib.auto.service.accessibility.krosxx.SfProxy();\r\n           job = lastJob = proxy.find(a11yModel, packageName, that.data.conditions, callback, onError);\r\n        }\r\n        function callback(nodes){\r\n            if(isScriptExited())return;\r\n            if(job != lastJob)return;\r\n            if(!nodes){\r\n                // java里model.getRootByPackageName(pn)返回的是null，这个得观察一下怎么回事\r\n                // console.log(\"cccccccccno nodes is null\")\r\n                return;\r\n            }\r\n            for (let i = 0; i < that.data.nodeCheckList.length; i++) {\r\n                let list = that.data.nodeCheckList[i];\r\n                let isOk = list.every((index)=>nodes[index] != null);\r\n                if(isOk){\r\n                    data.nodes = nodes\r\n                    triggerOn(data)\r\n                    return;\r\n                }\r\n            }\r\n        }\r\n        function onError(err){\r\n            console.log(\"cccccccccno on error\", err)\r\n            if(isScriptExited())return;\r\n            if(job != lastJob)return;\r\n        }\r\n        function triggerOff(data){\r\n            if(pnAnMatched){\r\n                pnAnMatched = false;\r\n            }\r\n            if(!isOn)return;\r\n            isOn = false;\r\n            that.dispatchConditionsOff({data})\r\n        }\r\n        function triggerOn(data){\r\n            if(isOn)return;\r\n            isOn = true;\r\n            console.log(\"triggerOntriggerOn\", data);\r\n            that.dispatchConditionsOn(data)\r\n        }\r\n        function tryCancelJob(job){\r\n            if(job && !job.isCompleted && !job.isCancelled){\r\n                job.cancel();\r\n            }\r\n        }\r\n        function checkComplete(){\r\n            a11yModel.removeDomain(checkDomain);\r\n            tryCancelJob(job);\r\n        }\r\n\r\n        function isScriptExited(){\r\n            if(isScriptRunnable)return false;\r\n            tryRemoveContentChangeListener();\r\n            a11yModeRemoveThis();\r\n            return true;\r\n        }\r\n    }\r\n\r\n    function tryRemoveContentChangeListener(){\r\n        if(!contentChangeListener)return;\r\n        a11yModel.removeListener(contentChangeListener);\r\n        contentChangeListener = undefined;\r\n    }\r\n    let superOnExit = that.onExit;\r\n\r\n    function onExit(){\r\n        superOnExit();\r\n        a11yModel.removeDomain(this);\r\n    }\r\n    that.onExit = onExit.bind(that);\r\n\r\n}\r\n\r\nreturn {type}\n        }\n    }catch(e){\n        console.log(\"init error key is fanfanlo/javajs/v1/project/components/triggers/a11y/NodesInOut.java.js\", e);\n    }\n    })()\n    ",
        "dependencies": [
            {
                "path": "fanfanlo/javajs/v1/project/store",
                "properties": [
                    "regTrigger"
                ]
            },
            {
                "path": "fanfanlo/javajs/v1/a11y/node/ICondition",
                "properties": [
                    "Types"
                ]
            },
            {
                "path": "fanfanlo/javajs/v1/project/base/projectEventTypes",
                "properties": [
                    "eventTypeExit"
                ]
            }
        ]
    },
    "fanfanlo/javajs/v1/project/components/triggers/a11y/PackageIn": {
        "content": "\n    (()=>{\n    try{\n        // @ts-ignore\n        with({\n            get regTrigger(){\n                return javaLib[\"fanfanlo/javajs/v1/project/store\"].regTrigger;\n            }\n            ,\n            get eventTypeComplete(){\n                return javaLib[\"fanfanlo/javajs/v1/project/base/projectEventTypes\"].eventTypeComplete;\n            }\n            ,\n            get eventTypeExit(){\n                return javaLib[\"fanfanlo/javajs/v1/project/base/projectEventTypes\"].eventTypeExit;\n            }\n            ,\n            get hideImeIfPackageOpened(){\n                return javaLib[\"fanfanlo/javajs/v1/a11y/a11yUtils\"].hideImeIfPackageOpened;\n            }\n            }){\n            \r\n\r\nlet type = `fanfanlo/javajs/v1/project/components/triggers/a11y/PackageIn`;\r\nonLibReady(()=>{\r\n    regTrigger(type, attach)\r\n}, `src/droid/java_js/fanfanlo/javajs/v1/project/components/trigger/a11y/PackageIn.java.js`)\r\n\r\nfunction attach(that){\r\n    let domain = {};\r\n    let logger = that.logger;\r\n    addScriptExitListener(onScriptCallExit);\r\n    function onScriptCallExit(){\r\n        logger.log(\"script call PackageIn exit\", that.baseMsg)\r\n        onExit();\r\n    }\r\n    function onExit(e){\r\n        clean();\r\n    }\r\n    function clean(){\r\n        removeListener();\r\n        removeScriptExitListener(onScriptCallExit);\r\n    }\r\n    function onExitOrComplete(e){\r\n        clean();\r\n    }\r\n\r\n    let superOnRun = that.onRun;\r\n    that.onRun = onRun.bind(that);\r\n    function onRun() {\r\n        superOnRun();\r\n        addListener();\r\n        check();\r\n    }\r\n    function addListener(){\r\n        that.dispatcher.listenDomain(eventTypeExit, domain, onExitOrComplete);\r\n        that.dispatcher.listenDomain(eventTypeComplete, domain, onExitOrComplete);\r\n        a11yModel.listenDomainData(com.fanfanlo.droidlib.auto.service.accessibility.A11yModel.Companion.eventLastPackageChanged, domain, onChange);\r\n    }\r\n    function removeListener(){\r\n        a11yModel.removeDomain(domain);\r\n        that.dispatcher.removeDomain(domain)\r\n    }\r\n    function onChange(event){\r\n        check();\r\n    }\r\n\r\n\r\n    function check(){\r\n        if(!that.isRunnable){\r\n            clean();\r\n            return;\r\n        }\r\n        let isOk = a11yModel.lastFullScreenPackage == that.data.packageName\r\n        logger.log(`equals lastpackage ${isOk}, lastFullScreenPackage=${a11yModel.lastFullScreenPackage}, packageName=${that.data.packageName}`);\r\n        if(isOk){\r\n            logger.log(`check isok dispatch conditions on`);\r\n            that.dispatchConditionsOn({target:that})\r\n        }else if(that.data.hideIme){\r\n            logger.log(`check isnotok hide ime`);\r\n            hideImeIfPackageOpened(that.data.packageName);\r\n        }\r\n    }\r\n}\r\n\r\nreturn {type}\n        }\n    }catch(e){\n        console.log(\"init error key is fanfanlo/javajs/v1/project/components/triggers/a11y/PackageIn.java.js\", e);\n    }\n    })()\n    ",
        "dependencies": [
            {
                "path": "fanfanlo/javajs/v1/project/store",
                "properties": [
                    "regTrigger"
                ]
            },
            {
                "path": "fanfanlo/javajs/v1/project/base/projectEventTypes",
                "properties": [
                    "eventTypeComplete",
                    " eventTypeExit"
                ]
            },
            {
                "path": "fanfanlo/javajs/v1/a11y/a11yUtils",
                "properties": [
                    "hideImeIfPackageOpened"
                ]
            }
        ]
    },
    "fanfanlo/javajs/v1/project/components/triggers/a11y/PackageInOut": {
        "content": "\n    (()=>{\n    try{\n        // @ts-ignore\n        with({\n            get regTrigger(){\n                return javaLib[\"fanfanlo/javajs/v1/project/store\"].regTrigger;\n            }\n            ,\n            get eventTypeComplete(){\n                return javaLib[\"fanfanlo/javajs/v1/project/base/projectEventTypes\"].eventTypeComplete;\n            }\n            ,\n            get eventTypeExit(){\n                return javaLib[\"fanfanlo/javajs/v1/project/base/projectEventTypes\"].eventTypeExit;\n            }\n            ,\n            get hideImeIfPackageOpened(){\n                return javaLib[\"fanfanlo/javajs/v1/a11y/a11yUtils\"].hideImeIfPackageOpened;\n            }\n            }){\n            \r\nlet type = \"fanfanlo/javajs/v1/project/components/triggers/a11y/PackageInOut\";\r\nonLibReady(()=>{\r\n    regTrigger(type, attach)\r\n}, `src/droid/java_js/fanfanlo/javajs/v1/project/components/trigger/a11y/packageInOut.js`)\r\nfunction attach(that){\r\n    let domain = {};\r\n    let logger = that.logger.subLogger('PackageInOut_f')\r\n    function clean(){\r\n        a11yModel.removeDomain(that);\r\n        that.removeDomain(domain)\r\n    }\r\n    function onExitOrComplete(e){\r\n        clean();\r\n    }\r\n\r\n    let superOnRun = that.onRun;\r\n    that.onRun = onRun.bind(that);\r\n    function onRun() {\r\n        superOnRun();\r\n        addListener();\r\n        check();\r\n    }\r\n    function addListener(){\r\n        that.dispatcher.listenDomain(eventTypeExit, domain, onExitOrComplete);\r\n        that.dispatcher.listenDomain(eventTypeComplete, domain, onExitOrComplete);\r\n        a11yModel.listenDomainData(com.fanfanlo.droidlib.auto.service.accessibility.A11yModel.Companion.eventLastPackageChanged, this, onPackageChange);\r\n    }\r\n    function onPackageChange(event){\r\n        check();\r\n    }\r\n\r\n    function check(){\r\n        logger.log(\"check_fn\", that.isRunnable)\r\n        if(!that.isRunnable){\r\n            clean();\r\n            return;\r\n        }\r\n        let pn = that.data.packageName;\r\n        if(that.data.hideIme && hideImeIfPackageOpened(pn)){\r\n            return;\r\n        }\r\n        if(a11yModel.lastFullScreenPackage == that.data.packageName){\r\n            that.dispatchConditionsOn({packageName:a11yModel.lastFullScreenPackage})\r\n        }else{\r\n            that.dispatchConditionsOff({packageName:a11yModel.lastFullScreenPackage})\r\n        }\r\n    }\r\n}\r\n\r\nreturn {type}\n        }\n    }catch(e){\n        console.log(\"init error key is fanfanlo/javajs/v1/project/components/triggers/a11y/PackageInOut.java.js\", e);\n    }\n    })()\n    ",
        "dependencies": [
            {
                "path": "fanfanlo/javajs/v1/project/store",
                "properties": [
                    "regTrigger"
                ]
            },
            {
                "path": "fanfanlo/javajs/v1/project/base/projectEventTypes",
                "properties": [
                    "eventTypeComplete",
                    " eventTypeExit"
                ]
            },
            {
                "path": "fanfanlo/javajs/v1/a11y/a11yUtils",
                "properties": [
                    "hideImeIfPackageOpened"
                ]
            }
        ]
    },
    "fanfanlo/javajs/v1/project/components/triggers/time/timeout": {
        "content": "\n    (()=>{\n    try{\n        // @ts-ignore\n        with({\n            get setTimeout(){\n                return javaLib[\"fanfanlo/javajs/v1/utils/setTimeout\"].setTimeout;\n            }\n            ,\n            get regTrigger(){\n                return javaLib[\"fanfanlo/javajs/v1/project/store\"].regTrigger;\n            }\n            }){\n            \r\n\r\n\r\nlet type = \"fanfanlo/javajs/v1/project/components/triggers/time/timeout\";\r\n\r\nonLibReady(()=>{\r\n    regTrigger(type, attach)\r\n}, `src/droid/java_js/fanfanlo/javajs/v1/project/components/trigger/time/timeout.java.js`)\r\nfunction attach(that){\r\n    let thatOnRun = that.onRun;\r\n    that.onRun = onRun.bind(that);    \r\n\r\n    function onRun() {\r\n        //判断全局变量，是否可继续运行。\r\n        if(!isScriptRunnable)return;\r\n        setTimeout(()=>{\r\n            //判断全局变量，是否可继续运行。\r\n            if(!isScriptRunnable)return;\r\n            thatOnRun();\r\n            that.dispatchConditionsOn({data:that.data});\r\n        }, that.data.time)\r\n    }\r\n}\r\n\r\nreturn {type}\n        }\n    }catch(e){\n        console.log(\"init error key is fanfanlo/javajs/v1/project/components/triggers/time/timeout.java.js\", e);\n    }\n    })()\n    ",
        "dependencies": [
            {
                "path": "fanfanlo/javajs/v1/utils/setTimeout",
                "properties": [
                    "setTimeout"
                ]
            },
            {
                "path": "fanfanlo/javajs/v1/project/store",
                "properties": [
                    "regTrigger"
                ]
            }
        ]
    }
};

;// ../../libs/app/static/src/project/extractDependencies.ts

/**
 * 从 IProjectData 中提取所有使用的 Trigger 和 Action 的 type
 *
 * @param projectData - Project 数据对象
 * @returns 使用的类型集合
 *
 * @example
 * const types = extractUsedTypes(projectData)
 * // types: Set { "fanfanlo/triggers/time/timeout", "fanfanlo/actions/app/openApp" }
 */ function extractUsedTypes(projectData) {
    console.log('[extractUsedTypes] 开始提取类型');
    const types = new Set();
    // 遍历所有 TriggerAction
    console.log('[extractUsedTypes] triggerActionGroup.list 长度:', projectData.triggerActionGroup.list.length);
    for(let i = 0; i < projectData.triggerActionGroup.list.length; i++){
        const triggerAction = projectData.triggerActionGroup.list[i];
        console.log('[extractUsedTypes] 处理 TriggerAction', i, triggerAction.id);
        // 提取 Triggers
        console.log('[extractUsedTypes] triggerGroup.list 长度:', triggerAction.triggerGroup.list.length);
        for(let j = 0; j < triggerAction.triggerGroup.list.length; j++){
            const trigger = triggerAction.triggerGroup.list[j];
            console.log('[extractUsedTypes] 处理 Trigger', j, 'type:', trigger.type);
            if (trigger.type) {
                types.add(trigger.type);
                console.log('[extractUsedTypes] 添加 Trigger type:', trigger.type);
            } else {
                console.log('[extractUsedTypes] Trigger type 为空', j);
            }
        }
        // 提取 Actions
        console.log('[extractUsedTypes] actionGroup.list 长度:', triggerAction.actionGroup.list.length);
        for(let j = 0; j < triggerAction.actionGroup.list.length; j++){
            const action = triggerAction.actionGroup.list[j];
            console.log('[extractUsedTypes] 处理 Action', j, 'type:', action.type);
            if (action.type) {
                types.add(action.type);
                console.log('[extractUsedTypes] 添加 Action type:', action.type);
            } else {
                console.log('[extractUsedTypes] Action type 为空', j);
            }
        }
    }
    console.log('[extractUsedTypes] 提取完成, 总类型数:', types.size);
    console.log('[extractUsedTypes] 类型列表:', Array.from(types));
    return types;
}
/**
 * 递归收集依赖
 *
 * @param dependencies - 依赖列表
 * @param impSet - 已导入的依赖集合（避免重复）
 * @param impList - 导入代码列表
 * @returns 导入代码列表
 */ function prepareDependencies(dependencies) {
    let impSet = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : new Set(), impList = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : [];
    console.log('[prepareDependencies] 处理依赖数量:', dependencies.length);
    for(let i = 0; i < dependencies.length; i++){
        const path = dependencies[i];
        console.log('[prepareDependencies] 处理依赖', i, 'path:', path);
        if (impSet.has(path)) {
            console.log('[prepareDependencies] 依赖已存在,跳过:', path);
            continue;
        }
        const file = javaLib[path];
        if (!file) {
            console.log('[prepareDependencies] 错误: 找不到依赖:', path);
            console.log('[prepareDependencies] 可用的 javaLib keys:', Object.keys(javaLib));
            throw new Error("no path in javaLib, path is ".concat(path));
        }
        console.log('[prepareDependencies] 添加依赖:', path);
        impSet.add(path);
        impList.push('"'.concat(path, '":').concat(file.content));
        if (file.dependencies && file.dependencies.length > 0) {
            console.log('[prepareDependencies] 依赖有子依赖,数量:', file.dependencies.length);
            const list = file.dependencies.map((d)=>d.path);
            prepareDependencies(list, impSet, impList);
        } else {
            console.log('[prepareDependencies] 依赖无子依赖');
        }
    }
    console.log('[prepareDependencies] 完成, 总依赖数:', impList.length);
    return impList;
}
/**
 * 创建 javaLib 对象代码
 *
 * @param dependencies - 依赖列表
 * @returns javaLib 对象的 JavaScript 代码
 *
 * @example
 * const script = createLibScript(['fanfanlo/triggers/time/timeout'])
 * // script: "let javaLib = { ... }"
 */ function createLibScript(dependencies) {
    console.log('[createLibScript] 开始创建 javaLib 脚本');
    console.log('[createLibScript] 输入依赖数量:', dependencies.length);
    // 强制包含的核心依赖
    const storePath = 'fanfanlo/javajs/v1/project/store';
    const createEventDispatcherPath = 'fanfanlo/javajs/v1/event/createEventDispatcher';
    const createGetterSetterPath = 'fanfanlo/javajs/v1/utils/createGetterSetter';
    console.log('[createLibScript] 添加强制依赖 - store:', storePath);
    console.log('[createLibScript] 添加强制依赖 - createEventDispatcher:', createEventDispatcherPath);
    console.log('[createLibScript] 添加强制依赖 - createGetterSetter:', createGetterSetterPath);
    // 合并所有依赖（强制依赖 + 项目依赖）
    const allDeps = [
        storePath,
        createEventDispatcherPath,
        createGetterSetterPath,
        ...dependencies
    ];
    console.log('[createLibScript] 总依赖数量(含强制依赖):', allDeps.length);
    console.log('[createLibScript] 强制依赖数量: 3 (store, createEventDispatcher, createGetterSetter)');
    console.log('[createLibScript] 项目依赖数量:', dependencies.length);
    const list = prepareDependencies(allDeps);
    console.log('[createLibScript] 收集到的代码片段数量:', list.length);
    const content = "let javaLib = {\n        ".concat(list.join(","), "\n    }");
    console.log('[createLibScript] javaLib 脚本创建完成');
    console.log('[createLibScript] 脚本长度:', content.length);
    return content;
}

;// ../../libs/app/static/src/project/assembleProjectScript.ts


/**
 * Logger 初始化代码
 */ const libLoggerCode = '\nconsole.paused = false;\nlet javaLibInitLogger = console.subLogger("lib9");\nlet projectStoreLogger = javaLibInitLogger.subLogger("store9");\nlet projectEventLogger = console.subLogger("event9");\nlet projectFailedLogger = console.subLogger("failed9");\nlet projectFlowLogger = console.subLogger("flow9");\nprojectFlowLogger.paused = false;\nprojectStoreLogger.paused = false;\n';
/**
 * onLibReady 机制代码
 */ const libHeaderCode = "\nconst onLibReadyInitFuncs = [];\nfunction onLibReady(f, info){\n    console.log('reg onLiReady', info);\n    onLibReadyInitFuncs.push({f, info});\n}\n";
/**
 * 执行所有 onLibReady 回调
 */ const libFooterCode = '\nfor(let i = 0; i < onLibReadyInitFuncs.length; i++){\n    let data = onLibReadyInitFuncs[i];\n    try{\n        data.f();\n    }catch(e){\n        console.log("on lib ready init fun error", data.info, e);\n    }\n}\n';
/**
 * 组装 Project 执行脚本
 *
 * 将 projectRunner2.js 引擎、javaLib 依赖和 IProjectData 数据组合成完整的可执行脚本
 *
 * @param projectData - Project 数据对象
 * @returns 完整的可执行 JavaScript 脚本
 *
 * @example
 * const script = assembleProjectScript(myProject)
 * // script 可以直接在 Rhino 环境中执行
 */ function assembleProjectScript(projectData) {
    console.log('[assembleProjectScript] ========== 开始组装脚本 ==========');
    console.log('[assembleProjectScript] projectData.id:', projectData.id);
    console.log('[assembleProjectScript] projectData.name:', projectData.name);
    // 1. 提取使用的 Trigger 和 Action types
    console.log('[assembleProjectScript] 步骤 1: 提取依赖类型');
    const usedTypes = extractUsedTypes(projectData);
    console.log('[assembleProjectScript] 使用的类型数量:', usedTypes.size);
    console.log('[assembleProjectScript] 类型列表:', Array.from(usedTypes));
    if (usedTypes.size === 0) {
        console.log('[assembleProjectScript] 警告: 没有找到任何 Trigger 或 Action 类型');
    }
    // 2. 创建 javaLib 对象（包含所有依赖）
    console.log('[assembleProjectScript] 步骤 2: 创建 javaLib 对象');
    const javaLibScript = createLibScript(Array.from(usedTypes));
    console.log('[assembleProjectScript] javaLib 脚本长度:', javaLibScript.length);
    // 3. 组装完整脚本
    console.log('[assembleProjectScript] 步骤 3: 组装完整脚本');
    const script = "\n".concat(libLoggerCode, "\n;\n").concat(libHeaderCode, "\n;\n").concat(scriptExitMechanismCode, "\n;\n").concat(javaLibScript, "\n;\n").concat(libFooterCode, "\n;\n").concat(projectRunner2Text, "\n;\n// ========================================\n// 执行入口\n// ========================================\nvar initData = ").concat(JSON.stringify(projectData, null, 2), ";\nprojectBuilder(initData);\n");
    console.log('[assembleProjectScript] 脚本组装完成');
    console.log('[assembleProjectScript] 总脚本长度:', script.length);
    console.log('[assembleProjectScript] ========== 组装完成 ==========');
    return script;
}

// EXTERNAL MODULE: __barrel_optimize__?names=ulid!=!../../node_modules/.pnpm/ulid@2.4.0/node_modules/ulid/dist/index.esm.js + 1 modules
var index_esm = __webpack_require__(67131);
;// ../../libs/app/static/src/project/assembleRhinoRunner.ts


/**
 * 组装完整的 RhinoRunner 配置对象
 *
 * 此函数将 IProjectData 转换为完整的 RhinoRunner 配置,包括:
 * - 组装可执行脚本
 * - 设置权限列表
 * - 配置前台服务
 * - 设置其他运行时选项
 *
 * @param projectData - Project 数据对象
 * @param permissions - 执行所需的权限列表
 * @param options - 可选的配置选项
 * @returns 完整的 RhinoRunner 配置对象
 *
 * @example
 * const permissions = getProjectPermissionsData(projectData)
 * const conf = assembleRhinoRunner(projectData, permissions, {
 *     foregroundText: '正在执行自动化任务...',
 *     onlyRunSingle: true
 * })
 * await autoWebViewJs.runProject(conf)
 */ function assembleRhinoRunner(projectData, permissions, options) {
    // 组装脚本
    const script = assembleProjectScript(projectData);
    var _options_bridgeId, _options_scriptId, _ref, _options_onlyRunSingle, _options_stopPrevIfOnlyRunSingle, _options_forceStopTime, _options_foregroundText, _options_languageVersion, _options_optimizationLevel, _options_printScript;
    // 构建配置对象
    const conf = {
        // 基础配置
        bridgeId: (_options_bridgeId = options === null || options === void 0 ? void 0 : options.bridgeId) !== null && _options_bridgeId !== void 0 ? _options_bridgeId : (0,index_esm/* ulid */.Z0)(),
        scriptId: (_ref = (_options_scriptId = options === null || options === void 0 ? void 0 : options.scriptId) !== null && _options_scriptId !== void 0 ? _options_scriptId : projectData.id) !== null && _ref !== void 0 ? _ref : (0,index_esm/* ulid */.Z0)(),
        script,
        // 运行时配置
        onlyRunSingle: (_options_onlyRunSingle = options === null || options === void 0 ? void 0 : options.onlyRunSingle) !== null && _options_onlyRunSingle !== void 0 ? _options_onlyRunSingle : true,
        stopPrevIfOnlyRunSingle: (_options_stopPrevIfOnlyRunSingle = options === null || options === void 0 ? void 0 : options.stopPrevIfOnlyRunSingle) !== null && _options_stopPrevIfOnlyRunSingle !== void 0 ? _options_stopPrevIfOnlyRunSingle : true,
        forceStopTime: (_options_forceStopTime = options === null || options === void 0 ? void 0 : options.forceStopTime) !== null && _options_forceStopTime !== void 0 ? _options_forceStopTime : 0,
        // 前台服务配置
        foregroundText: (_options_foregroundText = options === null || options === void 0 ? void 0 : options.foregroundText) !== null && _options_foregroundText !== void 0 ? _options_foregroundText : "正在执行: ".concat(projectData.name),
        // 权限配置
        permissions,
        // 其他配置
        injects: options === null || options === void 0 ? void 0 : options.injects,
        params: options === null || options === void 0 ? void 0 : options.params,
        languageVersion: (_options_languageVersion = options === null || options === void 0 ? void 0 : options.languageVersion) !== null && _options_languageVersion !== void 0 ? _options_languageVersion : 200,
        optimizationLevel: (_options_optimizationLevel = options === null || options === void 0 ? void 0 : options.optimizationLevel) !== null && _options_optimizationLevel !== void 0 ? _options_optimizationLevel : -1,
        printScript: (_options_printScript = options === null || options === void 0 ? void 0 : options.printScript) !== null && _options_printScript !== void 0 ? _options_printScript : false
    };
    return conf;
}

;// ../../libs/droid/project/src/project/utils/runProject.ts




const runProject_fileLog = new Log/* Log */.tG(false, 'runProject_f');
/**
 * 运行项目
 * @param projectData 项目数据
 * @returns 执行结果
 */ async function runProject(projectData) {
    const fnLog = runProject_fileLog.sub(false, 'runProject_fn');
    fnLog.log('[runProject] 开始运行项目');
    fnLog.log('[runProject] projectData:', JSON.stringify(projectData, null, 2));
    // ==================== 清理空的 TriggerAction ====================
    fnLog.log('[runProject] 清理空的 TriggerAction');
    const removedCount = projectUtils.cleanEmptyTriggerActions(projectData);
    fnLog.log('[runProject] 清理了', removedCount, '个空 TriggerAction');
    if (removedCount > 0) {
        fnLog.log('[runProject] 清理后的 projectData:', JSON.stringify(projectData, null, 2));
    } else {
        fnLog.log('[runProject] 没有空的 TriggerAction 需要清理');
    }
    // ==================== 清理逻辑结束 ====================
    try {
        // 1. 获取项目所需的权限列表
        fnLog.log('[runProject] 获取权限列表');
        const permissions = await projectUtils.getProjectPermissionsData(projectData);
        fnLog.log('[runProject] 权限数量:', permissions.length);
        // 2. 获取项目所需的注入配置
        fnLog.log('[runProject] 获取注入配置', JSON.stringify(projectData));
        const projectInjects = projectUtils.getProjectInjects(projectData);
        fnLog.log('[runProject] 项目injects数量:', projectInjects.length);
        fnLog.log('[runProject] 项目injects内容:', projectInjects);
        // 3. 合并硬编码的 console 和项目中的 injects
        fnLog.log('[runProject] 合并注入配置');
        const finalInjects = [
            [
                RhinoInjectKeys/* WebViewJsInjectKeys */.Ik.console,
                'console'
            ]
        ];
        fnLog.log('[runProject] 添加硬编码console inject');
        fnLog.log('[runProject] 遍历项目injects');
        for(let i = 0; i < projectInjects.length; i++){
            const inject = projectInjects[i];
            fnLog.log('[runProject] 处理inject[', i, ']:', inject);
            finalInjects.push(inject);
        }
        fnLog.log('[runProject] 最终injects数量:', finalInjects.length);
        fnLog.log('[runProject] 最终injects内容:', finalInjects);
        // 4. 组装 RhinoRunner 配置
        fnLog.log('[runProject] 组装RhinoRunner配置');
        const conf = assembleRhinoRunner(projectData, permissions, {
            foregroundText: "正在执行: ".concat(projectData.name),
            onlyRunSingle: true,
            stopPrevIfOnlyRunSingle: true,
            forceStopTime: 0,
            injects: finalInjects
        });
        fnLog.log('[runProject] RhinoRunner配置组装完成');
        fnLog.log('[runProject] 脚本长度:', conf.script.length);
        // 5. 调用 Android 端执行
        fnLog.log('[runProject] 调用autoWebViewJs.runProject', JSON.stringify(conf, null, 2));
        const result = await AutoWebViewJs/* autoWebViewJs */.yx.runProject(conf);
        fnLog.log('[runProject] 执行结果:', result);
        const hasJavaResultString = result.javaResultString ? true : false;
        fnLog.log('[runProject] 是否有javaResultString:', hasJavaResultString);
        if (result.javaResultString) {
            fnLog.log('[runProject] 解析javaResultString');
            const parsedResult = JSON.parse(result.javaResultString);
            fnLog.log('[runProject] 解析后的结果:', parsedResult);
            const isSuccess = parsedResult.success ? true : false;
            fnLog.log('[runProject] 是否成功:', isSuccess);
            if (isSuccess) {
                fnLog.log('[runProject] 项目执行成功');
            } else {
                fnLog.log('[runProject] 项目执行失败');
                fnLog.log('[runProject] 失败消息:', parsedResult.message);
            }
            return parsedResult;
        } else {
            fnLog.log('[runProject] 没有返回数据');
            return null;
        }
    } catch (error) {
        fnLog.log('[runProject] 执行异常:', error);
        throw error;
    }
}


/***/ })

}]);
//# sourceMappingURL=7572-c70be991835e534d.js.map