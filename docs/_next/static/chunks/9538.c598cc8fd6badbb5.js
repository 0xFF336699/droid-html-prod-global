"use strict";
(self["webpackChunk_N_E"] = self["webpackChunk_N_E"] || []).push([[9538],{

/***/ 31232:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Q: () => (/* binding */ EventDispatcher)
/* harmony export */ });
class EventDispatcher {
    addDomainEventListener(domain, type, cb, index) {
        let _domain = this.listenDomainMap.get(domain);
        if (!_domain) {
            _domain = new Map();
            this.listenDomainMap.set(domain, _domain);
        }
        let listeners = _domain.get(type);
        if (!listeners) {
            listeners = [];
            _domain.set(type, listeners);
        }
        if (listeners.indexOf(cb) == -1) listeners.push(cb);
        this.addEventListener(type, cb, index);
    }
    addDomainOnceListener(domain, type, cb, index) {
        this.addOnceListener(type, cb, index, domain);
    }
    addEventListener(type, cb, index) {
        if (type === '') {
            try {
                throw new Error('addDomainEventListener error no type');
            } catch (e) {
                console.log('EventDispatcher2', 'addDomainEventListener', 'err', type, e);
            }
        }
        if (typeof cb != 'function') {
            try {
                throw new Error('addDomainEventListener error no cb');
            } catch (e) {
                console.log('EventDispatcher2', 'addDomainEventListener', 'err', cb, e);
            }
        }
        let listeners = this.listenMap.get(type);
        if (!listeners) {
            listeners = [];
            this.listenMap.set(type, listeners);
        }
        const _index = listeners.indexOf(cb);
        if (_index > -1) listeners.splice(_index, 1);
        if (index == undefined || index < 0) index = listeners.length;
        index = Math.max(0, Math.min(index, listeners.length));
        listeners.splice(index, 0, cb);
    }
    addEventListenerOnce(type, cb, index) {
        return this.addOnceListener(type, cb, index, undefined);
    }
    onceListenerCb(type, onEvent, domain) {
        // eslint-disable-next-line @typescript-eslint/no-this-alias
        const that = this;
        return (function() {
            for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++){
                args[_key] = arguments[_key];
            }
            // onEvent(event);
            if (typeof onEvent === 'function') {
                onEvent(...args);
            } else {
                console.error(onEvent);
                console.log(...args);
                throw new Error('onEvent not a function');
            }
            // eslint-disable-next-line prefer-spread,@typescript-eslint/ban-types
            // (onEvent as Function).apply(null, args)
            // const listeners = that.onceListeners[type];
            const listeners = that.onceListeners.get(type);
            if (!listeners) return;
            if (domain) that.removeDomainEventListener(domain, type, listeners.get(onEvent));
            else that.removeEventListener(type, listeners.get(onEvent));
        }).bind(this);
    }
    addOnceListener(type, onEvent, index, domain) {
        // let listeners = this.onceListeners[type];
        let listeners = this.onceListeners.get(type);
        if (!listeners) {
            listeners = new Map();
            this.onceListeners.set(type, listeners);
        }
        const fn = this.onceListenerCb(type, onEvent, domain);
        listeners.set(onEvent, fn);
        domain ? this.addDomainEventListener(domain, type, fn, index) : this.addEventListener(type, fn, index);
        return fn;
    }
    dispatchArgs(type) {
        for(var _len = arguments.length, rest = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++){
            rest[_key - 1] = arguments[_key];
        }
        const listeners = this.listenMap.get(type);
        if (!listeners) return false;
        for(let i = 0, len = listeners.length; i < len; i++){
            listeners[i].apply(null, rest);
        }
        return true;
    }
    dispatchEvent(event) {
        if (!event || !event.type) return true;
        const listeners = this.listenMap.get(event.type);
        if (!listeners) {
            return false;
        }
        event[event._target] = this;
        for(let i = 0, len = listeners.length; i < len; i++){
            if (event.canceled) return false;
            try {
                listeners[i](event);
            } catch (e) {
                console.log('EventDispatcher2', 'dispatchEvent', 'err', e);
                console.log('event is', event);
            }
        }
        return true;
    }
    removeDomain(domain) {
        const domainMap = this.listenDomainMap.get(domain);
        if (!domainMap) return false;
        for(const type in domainMap){
            var _domainMap_get;
            (_domainMap_get = domainMap.get(type)) === null || _domainMap_get === void 0 ? void 0 : _domainMap_get.forEach((cb)=>{
                try {
                    this.removeEventListener(type, cb);
                } catch (e) {
                    console.log('eventdispatcher2', 'removedomain', 'err', e);
                }
            }, this);
        }
        this.listenDomainMap.delete(domain);
        return true;
    }
    removeDomainEventListener(domain, type, cb) {
        const domainMap = this.listenDomainMap.get(domain);
        if (!domainMap) return false;
        const listeners = domainMap.get(type);
        if (!listeners) return false;
        const index = listeners.indexOf(cb);
        if (index == -1) return false;
        listeners.splice(index, 1);
        return this.removeEventListener(type, cb);
    }
    removeEventListener(type, cb) {
        const listeners = this.listenMap.get(type);
        if (!listeners) return false;
        const index = listeners.indexOf(cb);
        if (index == -1) {
            return false;
        } else {
            listeners.splice(index, 1);
            return true;
        }
    }
    willTrigger(type) {
        const l = this.listenMap.get(type);
        return !l || l.length == 0 ? false : true;
    // return this.listenMap.get(type) !== undefined && this.listenMap.get(type)?.length > 0;
    }
    constructor(){
        this.listenDomainMap = new Map();
        this.listenMap = new Map();
        this.onceListeners = new Map();
    }
}


/***/ }),

/***/ 39538:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  projectManager: () => (/* reexport */ projectManager)
});

// UNUSED EXPORTS: A11yNode, A11yNodePropertyInfo, A11yNodePropertyType, ActionContext, ActionGroupContext, ActionListContext, ActionListFromEnum, ActionUtilsMap, CreateProjectButton, DescriptionContentRenderer, DescriptionContentType, EditProjectBuilder, GroupCheckList1Context, GroupCheckList2Context, ISFCondfType, NodeActionKeys, NodeActionUI, PROJECT_CATEGORY_CONFIGS, ProjectCategory, ProjectContext, ProjectMemberType, ProjectUI, ProjectVisibility, ProjectsUI, RemoteSyncStatus, SFAction, SFActionClick, SFActionFocus, SFActionGlobalClick, SFActionLearFocus, SFActionLongClick, SFActionSetText, SFActionTryClick, SFCond, SFCondClickable, SFCondDesc, SFCondDescs, SFCondId, SFCondIds, SFCondMatchText, SFCondRoot, SFCondText, SFCondTexts, SFCondTypes, SFData, SFWait, TriggerActionContext, TriggerActionGroupContext, TriggerContext, TriggerGroupContext, TriggerListContext, TriggerOrActionListTypeEnum, TriggerUtilsMap, a11yNodeProperties, a11yNodeProperyEnum, a11yNodeRealizedKeys, actionBaseUtils, actionGroupType, actionGroupUtils, actionType, addProjectHistory, childToProjectDataUtils, createActionHandler, createActionUtils, createDefaultProject, createDefaultProjectSettings, createDefaultTriggerAction, createDefaultTriggerActionGroup, createMergeToDefaultData, createProjectByCategory, createProjectEditInfo, createTriggerActionUtils, createTriggerHandler, createTriggerUtils, editProjectInfoUtils, findEntityAcrossProjects, getActionGroupByProp, getActionGroupElement, getActionGroupElementByProp, getActionListByProp, getActionUtils, getProjectCategoryConfig, getProjectHistory, getProjectLastHistory, getTriggerByProp, getTriggerElementByProp, getTriggerListByProp, getTriggerListElementByProp, getTriggerOrActionListPageParams, getTriggerUtils, isSameProjectHistoryId, mergeDataWith, mergeToDefaultData, mergeTriggerActionGroupToDefaultData, nodeActions, projectDataToUniqueId, projectEventUtils, projectHistoryIsChanged, projectNamespace, projectStore, projectType, projectUtils, projectsHistoryMap, registerActionUtils, registerTriggerUtils, removeProjectHistory, s, saveToServer, syncToServer, takeProjectSnapshoot, triggerActionGroupType, triggerBaseUtils, triggerGroupType, triggerGroupUtils, triggerType, updateToServer, validateUrl

// EXTERNAL MODULE: ../../libs/app/model/src/user/User.ts + 5 modules
var User = __webpack_require__(80530);
// EXTERNAL MODULE: ../../libs/droid/project-v2-interface/src/index.ts + 23 modules
var src = __webpack_require__(91415);
// EXTERNAL MODULE: ../../libs/fanfanlo/src/log/Log.ts + 1 modules
var Log = __webpack_require__(89597);
// EXTERNAL MODULE: ../../libs/fanfanlo/src/watcher/proxyWatch.ts
var proxyWatch = __webpack_require__(57641);
// EXTERNAL MODULE: ../../libs/fanfanlo/src/events/EventDispatcher.ts
var EventDispatcher = __webpack_require__(31232);
// EXTERNAL MODULE: ../../libs/fanfanlo/src/remote/request.ts
var request = __webpack_require__(73603);
// EXTERNAL MODULE: ../../libs/app/model/src/remote/tms.ts
var tms = __webpack_require__(20928);
;// ../../libs/app/model/src/remote/project/listUserProjects.ts


/**
 * 查询个人项目列表（游标分页）
 *
 * 功能说明：
 * - 使用游标分页查询当前用户的项目列表
 * - 公开项目返回 CDN URL
 * - 私有项目返回预签名 URL（1小时有效期）
 * - 已删除的项目不会被返回
 *
 * @param opts 请求选项
 * @returns 查询结果，包含 URL 列表、游标、分页标志
 *
 * @example
 * // 查询第一页
 * const result = await listUserProjects({
 *   params: {
 *     data: {
 *       pageSize: 10
 *     }
 *   },
 *   gateway: 'https://api.example.com'
 * });
 *
 * // 查询下一页
 * if (result.data?.hasMore) {
 *   const nextResult = await listUserProjects({
 *     params: {
 *       data: {
 *         latestSyncedProject: {
 *           uuid: result.data.lastProjectUuid,
 *           updatedAt: lastSyncedProject.updatedAt,
 *           version: lastSyncedProject.version,
 *           childrenVersion: lastSyncedProject.childrenVersion
 *         },
 *         pageSize: 10
 *       }
 *     },
 *     gateway: 'https://api.example.com'
 *   });
 * }
 */ async function listUserProjects(opts) {
    console.log('[listUserProjects] 开始查询个人项目列表, params:', JSON.stringify(opts.params));
    const res = await (0,request/* request */.Em)(tms/* tms */.X.TProject, tms/* tms */.X.MProjectListUserProjects, opts.params, opts.gateway, opts.handler);
    if (res.shellIsOk) {
        console.log('[listUserProjects] 请求成功, shellIsOk:', res.shellIsOk);
    } else {
        console.log('[listUserProjects] 请求失败, shellIsOk:', res.shellIsOk, 'err:', res.err);
    }
    if (res.dataIsOk) {
        console.log('[listUserProjects] 数据正常, dataIsOk:', res.dataIsOk);
    } else {
        var _res_data, _res_data1;
        console.log('[listUserProjects] 数据异常, dataIsOk:', res.dataIsOk, 'errMsg:', (_res_data = res.data) === null || _res_data === void 0 ? void 0 : _res_data.errMsg, 'errCode:', (_res_data1 = res.data) === null || _res_data1 === void 0 ? void 0 : _res_data1.errCode);
    }
    if (res.data) {
        console.log('[listUserProjects] 完整响应数据:', JSON.stringify(res.data));
        if (res.data.is_ok) {
            var _res_data_urls;
            console.log('[listUserProjects] 查询成功, urls数量:', (_res_data_urls = res.data.urls) === null || _res_data_urls === void 0 ? void 0 : _res_data_urls.length, 'hasMore:', res.data.hasMore, 'isLast:', res.data.isLast);
        } else {
            console.log('[listUserProjects] 查询失败, msg:', res.data.msg);
        }
    } else {
        console.log('[listUserProjects] 无返回数据');
    }
    return res;
}
/* harmony default export */ const project_listUserProjects = ((/* unused pure expression or super */ null && (listUserProjects)));

;// ../../libs/droid/project-v2-ui/src/projects/sync/events.ts
/**
 * 用户个人projects同步 - 事件常量
 */ /**
 * 同步开始事件
 */ const SYNC_START = 'project:sync:start';
/**
 * 单个项目同步成功事件
 */ const SYNC_SUCCESS = 'project:sync:success';
/**
 * 同步进度更新事件
 */ const SYNC_PROGRESS = 'project:sync:progress';
/**
 * 所有项目同步完成事件
 */ const SYNC_COMPLETE = 'project:sync:complete';
/**
 * 同步失败事件
 */ const SYNC_FAILED = 'project:sync:failed';
/**
 * 所有事件常量
 */ const SYNC_EVENTS = {
    SYNC_START,
    SYNC_SUCCESS,
    SYNC_PROGRESS,
    SYNC_COMPLETE,
    SYNC_FAILED
};

;// ../../libs/droid/project-v2-ui/src/projects/sync/ProjectListSyncManager.ts
/**
 * 用户个人projects同步管理器
 */ 




const fileLog = new Log/* Log */.tG(false, 'ProjectListSyncManager');
fileLog.pause = true;
class ProjectListSyncManager extends EventDispatcher/* EventDispatcher */.Q {
    // async init(): Promise<void> {
    //   const fnLog = fileLog.sub(false, 'init_fn');
    //   fnLog.pause = true;
    //   fnLog.log('[init] 开始初始化 ProjectListSyncManager');
    //   try {
    //     await this.sync();
    //     fnLog.log('[init] ProjectListSyncManager 初始化完成');
    //   } catch (error) {
    //     fnLog.log('[init] ProjectListSyncManager 初始化失败:', error);
    //   }
    // }
    async sync() {
        const fnLog = fileLog.sub(false, 'sync_fn');
        // fnLog.pause = true;
        fnLog.log('[sync] 开始同步');
        if (this.isSyncing) {
            fnLog.log('[sync] 已有同步在进行中，跳过');
            return;
        }
        this.isSyncing = true;
        try {
            const projects = this.getProjectsFromStorage();
            fnLog.log('[sync] 从 storage 读取 projects，数量:', projects.length);
            let totalSynced1 = 0;
            while(true){
                fnLog.log('[sync] 开始获取下一页，latestSyncedProject:', JSON.stringify(this.latestSyncedProject));
                const syncResult = await this.callBackendAPI(this.latestSyncedProject);
                fnLog.log('[sync] 后端 API 返回，urls 数量:', syncResult.urls.length, 'isLast:', syncResult.isLast, 'hasMore:', syncResult.hasMore);
                if (syncResult.urls.length === 0) {
                    fnLog.log('[sync] 警告：后端返回的 urls 为空');
                    break;
                }
                for(let i = 0; i < syncResult.urls.length; i++){
                    const url = syncResult.urls[i];
                    fnLog.log('[sync] 处理 URL[' + i + ']:', url);
                    // 不await，让其平行执行
                    this.processUrl(url, i, syncResult.urls.length);
                }
                // 从后端返回的数据更新 latestSyncedProject
                this.latestSyncedProject = syncResult.lastProjectInfo;
                if (syncResult.isLast) {
                    fnLog.log('[sync] 同步完成，isLast: true');
                    break;
                }
                if (!syncResult.hasMore) {
                    fnLog.log('[sync] 没有更多数据，hasMore: false');
                    break;
                }
                if (!this.latestSyncedProject) {
                    fnLog.error("没有到最新一页，但是没有latestSyncedProject");
                    return;
                }
                fnLog.log('[sync] 继续下一页，hasMore: true，latestSyncedProject:', JSON.stringify(this.latestSyncedProject));
            }
            fnLog.log('[sync] 派发 SYNC_COMPLETE 事件，totalSynced:', totalSynced1);
        } catch (error) {
            fnLog.log('[sync] 同步过程中出错:', error);
        } finally{
            this.isSyncing = false;
            fnLog.log('[sync] 同步结束');
        }
    }
    getProjectsFromStorage() {
        const fnLog = fileLog.sub(false, 'getProjectsFromStorage_fn');
        fnLog.pause = true;
        fnLog.log('[getProjectsFromStorage] 开始读取 storage');
        try {
            const projects = src/* projectStore */.DO.getListCopy();
            fnLog.log('[getProjectsFromStorage] 读取成功，数量:', projects.length);
            // 如果latestSyncedProject已经初始化过，则不重新初始化
            if (this.latestSyncedProject) {
                fnLog.log('[getProjectsFromStorage] latestSyncedProject已初始化，无需重新初始化:', JSON.stringify(this.latestSyncedProject));
                return projects;
            }
            // 第一次调用，从storage中的项目找最新的来初始化
            fnLog.log('[getProjectsFromStorage] 第一次调用，从项目中初始化latestSyncedProject');
            let latestProject;
            for (const project of projects){
                if (!latestProject) {
                    latestProject = project;
                } else if (project.updatedAt && latestProject.updatedAt && project.updatedAt > latestProject.updatedAt) {
                    latestProject = project;
                } else if (project.updatedAt && !latestProject.updatedAt) {
                    latestProject = project;
                }
            }
            // 如果找到了最新的项目，初始化latestSyncedProject
            if (latestProject && latestProject.uuid && latestProject.updatedAt) {
                this.latestSyncedProject = {
                    uuid: latestProject.uuid,
                    updatedAt: latestProject.updatedAt,
                    version: latestProject.version || 0,
                    childrenVersion: latestProject.childrenVersion || 0
                };
                fnLog.log('[getProjectsFromStorage] 初始化 latestSyncedProject:', JSON.stringify(this.latestSyncedProject));
            } else {
                fnLog.log('[getProjectsFromStorage] 未找到有效的最新项目，latestSyncedProject 保持 undefined');
                this.latestSyncedProject = undefined;
            }
            return projects;
        } catch (error) {
            fnLog.log('[getProjectsFromStorage] 读取失败:', error);
            return [];
        }
    }
    async callBackendAPI(latestSyncedProject) {
        const fnLog = fileLog.sub(false, 'callBackendAPI_fn');
        fnLog.pause = true;
        fnLog.log('[callBackendAPI] 开始调用后端 API，latestSyncedProject:', JSON.stringify(latestSyncedProject));
        try {
            var _res_data_urls;
            const requestData = {
                pageSize: this.pageSize
            };
            if (latestSyncedProject) {
                fnLog.log('[callBackendAPI] 添加 latestSyncedProject:', JSON.stringify(latestSyncedProject));
                requestData.latestSyncedProject = latestSyncedProject;
            } else {
                fnLog.log('[callBackendAPI] 首次查询，无 latestSyncedProject');
            }
            const requestParams = {
                data: requestData
            };
            fnLog.log('[callBackendAPI] 请求参数:', JSON.stringify(requestParams));
            // 使用 listUserProjects 函数调用后端 API，不需要硬编码 gateway
            const res = await listUserProjects({
                params: requestParams
            });
            fnLog.log('[callBackendAPI] 响应状态 - shellIsOk:', res.shellIsOk, 'dataIsOk:', res.dataIsOk);
            if (!res.shellIsOk) {
                throw new Error('API 请求失败，shellIsOk: ' + res.shellIsOk);
            }
            if (!res.dataIsOk) {
                throw new Error('API 数据异常，dataIsOk: ' + res.dataIsOk);
            }
            if (!res.data) {
                throw new Error('API 返回数据为空');
            }
            if (!res.data.is_ok) {
                throw new Error('API 返回错误: ' + res.data.msg);
            }
            fnLog.log('[callBackendAPI] 响应数据:', JSON.stringify(res.data));
            fnLog.log('[callBackendAPI] 返回数据 - is_ok:', res.data.is_ok, 'urls:', (_res_data_urls = res.data.urls) === null || _res_data_urls === void 0 ? void 0 : _res_data_urls.length, 'lastProjectUuid:', res.data.lastProjectUuid, 'isLast:', res.data.isLast);
            return res.data;
        } catch (error) {
            fnLog.log('[callBackendAPI] 调用失败:', error);
            throw error;
        }
    }
    async fetchProjectJson(url) {
        const fnLog = fileLog.sub(false, 'fetchProjectJson_fn');
        fnLog.pause = true;
        fnLog.log('[fetchProjectJson] 开始获取 JSON，URL:', url);
        try {
            const response = await fetch(url);
            fnLog.log('[fetchProjectJson] 响应状态:', response.status);
            if (!response.ok) {
                throw new Error('获取 JSON 失败，状态码: ' + response.status);
            }
            const json = await response.json();
            fnLog.log('[fetchProjectJson] 获取成功');
            return json;
        } catch (error) {
            fnLog.log('[fetchProjectJson] 获取失败:', error);
            throw error;
        }
    }
    async convertJsonToProject(json) {
        const fnLog = fileLog.sub(false, 'convertJsonToProject_fn');
        fnLog.pause = true;
        fnLog.log('[convertJsonToProject] 开始转换，json:', JSON.stringify(json));
        try {
            if (!json || typeof json !== 'object') {
                fnLog.log('[convertJsonToProject] JSON 数据无效');
                throw new Error('无效的 JSON 数据');
            }
            let ulid = '';
            if (json.ulid !== undefined && json.ulid !== null && json.ulid !== '') {
                ulid = json.ulid;
                fnLog.log('[convertJsonToProject] 使用 json.ulid:', ulid);
            } else {
                fnLog.log('[convertJsonToProject] json.ulid 为空，使用默认值: ""');
            }
            const project = {
                ...json,
                ulid,
                uuid: json.uuid,
                version: json.version,
                childrenVersion: json.childrenVersion,
                children: json.children
            };
            fnLog.log('[convertJsonToProject] 转换成功，ulid:', project.ulid, 'uuid:', project.uuid);
            return project;
        } catch (error) {
            fnLog.log('[convertJsonToProject] 转换失败:', error);
            throw error;
        }
    }
    async saveProjectToStorage(project) {
        const fnLog = fileLog.sub(false, 'saveProjectToStorage_fn');
        fnLog.pause = true;
        fnLog.log('[saveProjectToStorage] 开始保存，ulid:', project.ulid);
        try {
            src/* projectStore */.DO.saveProject(project);
            fnLog.log('[saveProjectToStorage] 保存成功，ulid:', project.ulid);
        } catch (error) {
            fnLog.log('[saveProjectToStorage] 保存失败:', error);
            throw error;
        }
    }
    async processUrl(url, index, total) {
        const fnLog = fileLog.sub(false, 'processUrl_fn');
        fnLog.pause = true;
        try {
            const json = await this.fetchProjectJson(url);
            fnLog.log('[sync] 获取 JSON 成功，URL:', url);
            const project = await this.convertJsonToProject(json);
            fnLog.log('[sync] 转换为 project 对象，ulid:', project.ulid);
            await this.saveProjectToStorage(project);
            fnLog.log('[sync] 保存到 storage 成功，ulid:', project.ulid);
            this.dispatchArgs(SYNC_SUCCESS, {
                project,
                index,
                total
            });
            fnLog.log('[sync] 派发 SYNC_SUCCESS 事件，index:', index);
            totalSynced++;
        } catch (error) {
            fnLog.log('[sync] 处理 URL 失败，URL:', url, 'error:', error);
            this.dispatchArgs(SYNC_FAILED, {
                error: String(error),
                failedUrl: url,
                retryable: true
            });
        }
    }
    constructor(){
        super(), this.isSyncing = false, this.pageSize = 30;
        fileLog.log('[ProjectListSyncManager] 构造函数调用');
    }
}
const projectListSyncManager = new ProjectListSyncManager();

;// ../../libs/droid/project-v2-ui/src/projects/projectManager.ts




const projectManager_fileLog = new Log/* Log */.tG(false, 'projectManager_f');
projectManager_fileLog.pause = true;
function init() {
    projectManager_fileLog.log('projectMangerInit');
    User/* user */.k.addListener(User/* User */.K.SignOutEvent, onUserSignout);
    checkSyncProjects();
    (0,proxyWatch/* proxyWatch */.kE)(User/* user */.k, 'data.storeData.user_token', onUserChanged);
}
function onUserChanged() {
    checkSyncProjects();
}
function onUserSignout() {
    projectManager_fileLog.log('onUserSignout');
    src/* projectStore */.DO.cleanStorage();
    projectManager_fileLog.log('onUserSignout2');
}
function checkSyncProjects() {
    projectManager_fileLog.log('checkSyncProjects');
    if (!User/* user */.k.data.storeData.user_token) return;
    projectManager_fileLog.log('sync manager');
    projectListSyncManager.sync();
}
const projectManager = {
    init
};

;// ../../libs/droid/project-v2-ui/src/index.ts








// export * from './projects/sync'



/***/ })

}]);
//# sourceMappingURL=9538.c598cc8fd6badbb5.js.map