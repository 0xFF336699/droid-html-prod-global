"use strict";
(self["webpackChunk_N_E"] = self["webpackChunk_N_E"] || []).push([[8136],{

/***/ 8136:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  t: () => (/* binding */ runProject)
});

// EXTERNAL MODULE: ../../libs/droid/android/src/android/AutoWebViewJs.ts + 1 modules
var AutoWebViewJs = __webpack_require__(68709);
// EXTERNAL MODULE: ../../libs/fanfanlo/src/log/Log.ts + 1 modules
var Log = __webpack_require__(89597);
// EXTERNAL MODULE: ../../libs/droid/project-interface/src/action/IAction.intf.ts
var IAction_intf = __webpack_require__(61527);
// EXTERNAL MODULE: ../../libs/droid/project-interface/src/trigger/ITrigger.intf.tsx
var ITrigger_intf = __webpack_require__(77191);
;// ../../libs/droid/project-interface/src/project/project-utils.ts



const fileLog = new Log/* Log */.tG(false, 'project-utils_f');
fileLog.pause = true;
fileLog.childrenPaused = true;
/**
 * 获取Project权限列表
 * 保留原有函数以兼容
 */ function getProjectPermissions(project) {
    const fnLog = fileLog.sub(false, 'getProjectPermissions_fn');
    fnLog.pause = true;
    fnLog.log('[getProjectPermissions] 开始获取权限, projectClientId:', project.client_id);
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
    fnLog.log('[getProjectPermissionsData] 开始获取权限详细信息, projectClientId:', project.client_id);
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
    fnLog.log('[getProjectPermissionsData] 权限详细信息获取完成, 总数:', result.length, JSON.stringify(result));
    return result;
}
/**
 * 获取Project注入配置列表
 * 收集所有 action 和 trigger 中声明的 injects
 * 返回混合格式数组,支持 InjectKeyType 和 [InjectKeyType, string]
 */ function getProjectInjects(project) {
    const fnLog = fileLog.sub(false, 'getProjectInjects_fn');
    // fnLog.pause = true;
    fnLog.log('[getProjectInjects] 开始获取注入配置, projectClientId:', project.client_id);
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
//     fnLog.log('[runProject] 废弃函数被调用, projectClientId:', project.client_id);
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
var RhinoInjectKeys = __webpack_require__(92289);
// EXTERNAL MODULE: ../../libs/app/static/src/project/assembleRhinoRunner.ts + 4 modules
var assembleRhinoRunner = __webpack_require__(52198);
// EXTERNAL MODULE: ../../libs/app/model/src/user/User.ts + 5 modules
var User = __webpack_require__(80530);
;// ../../libs/droid/project/src/project/utils/runProject.ts





const runProject_fileLog = new Log/* Log */.tG(false, 'runProject_f');
runProject_fileLog.pause = true;
runProject_fileLog.childrenPaused = true;
/**
 * 运行项目
 * @param projectData 项目数据
 * @returns 执行结果
 */ async function runProject(projectData) {
    const fnLog = runProject_fileLog.sub(false, 'runProject_fn');
    fnLog.pause = true;
    fnLog.childrenPaused = true;
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
        const conf = (0,assembleRhinoRunner/* assembleRhinoRunner */.n)(projectData, permissions, {
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
        const userId = User/* user */.k.data.storeData.user_token || '';
        fnLog.log('[runProject] userId:', userId);
        const projectName = projectData.name || 'unnamed_project';
        const projectClientId = projectData.client_id;
        fnLog.log('[runProject] projectName:', projectName);
        fnLog.log('[runProject] projectClientId:', projectClientId);
        const result = await AutoWebViewJs/* autoWebViewJs */.yx.runProject(conf, userId, projectName, projectClientId);
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
//# sourceMappingURL=8136-0ff257920bd5ba5a.js.map