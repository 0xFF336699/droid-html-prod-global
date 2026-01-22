"use strict";
(self["webpackChunk_N_E"] = self["webpackChunk_N_E"] || []).push([[1469],{

/***/ 5616:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   w: () => (/* binding */ validateUrl)
/* harmony export */ });
/* harmony import */ var _fanfanlo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(89597);

const fileLog = new _fanfanlo__WEBPACK_IMPORTED_MODULE_0__/* .Log */ .tG(false, 'description_utils_validateUrl');
fileLog.pause = true;
fileLog.childrenPaused = true;
/**
 * 验证URL是否有效且安全
 * @param url 待验证的URL
 * @returns 是否有效
 */ function validateUrl(url) {
    const fnLog = fileLog.sub(false, 'validateUrl_fn');
    fnLog.pause = true;
    fnLog.log('开始验证URL:', url);
    if (!url) {
        fnLog.log('URL为空');
        return false;
    }
    if (typeof url !== 'string') {
        fnLog.log('URL类型不是string:', typeof url);
        return false;
    }
    const trimmedUrl = url.trim();
    fnLog.log('去除空格后的URL:', trimmedUrl);
    if (trimmedUrl.length === 0) {
        fnLog.log('去除空格后URL为空');
        return false;
    }
    // 检查协议（仅允许http和https）
    const hasHttpProtocol = trimmedUrl.startsWith('http://');
    const hasHttpsProtocol = trimmedUrl.startsWith('https://');
    fnLog.log('是否http协议:', hasHttpProtocol, '是否https协议:', hasHttpsProtocol);
    if (!hasHttpProtocol && !hasHttpsProtocol) {
        fnLog.log('URL协议不是http或https');
        return false;
    }
    // 尝试使用URL API验证
    let urlObj = null;
    try {
        urlObj = new URL(trimmedUrl);
        fnLog.log('URL解析成功:', urlObj.href);
    } catch (e) {
        fnLog.error('URL解析失败:', e);
        return false;
    }
    if (urlObj === null) {
        fnLog.log('URL对象为null');
        return false;
    }
    // 再次确认协议
    const protocol = urlObj.protocol;
    fnLog.log('URL协议:', protocol);
    const isValid = protocol === 'http:' || protocol === 'https:';
    fnLog.log('URL是否有效:', isValid);
    return isValid;
}


/***/ }),

/***/ 7728:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   i: () => (/* binding */ createTriggerActionUtils)
/* harmony export */ });
/* harmony import */ var _mergeToDefaultData__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(40705);
/**
 * TriggerAction 工具函数
 */ 
function createTriggerActionUtils(type, createDefaultData) {
    return {
        type,
        createDefaultData,
        mergeDataToDefaultData: (0,_mergeToDefaultData__WEBPACK_IMPORTED_MODULE_0__/* .createMergeToDefaultData */ .dV)(createDefaultData)
    };
}


/***/ }),

/***/ 10679:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   q: () => (/* binding */ DescriptionContentType)
/* harmony export */ });
/* harmony import */ var _fanfanlo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(89597);

const fileLog = new _fanfanlo__WEBPACK_IMPORTED_MODULE_0__/* .Log */ .tG(false, 'IEntityDescription_f');
fileLog.pause = true;
fileLog.childrenPaused = true;
/**
 * 描述内容类型枚举
 */ var DescriptionContentType = /*#__PURE__*/ function(DescriptionContentType) {
    DescriptionContentType["TEXT"] = "text";
    DescriptionContentType["URL"] = "url";
    DescriptionContentType["HTML"] = "html";
    return DescriptionContentType;
}({});


/***/ }),

/***/ 11067:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   QP: () => (/* binding */ triggerActionGroupType),
/* harmony export */   Sk: () => (/* binding */ mergeTriggerActionGroupToDefaultData),
/* harmony export */   zA: () => (/* binding */ createDefaultTriggerActionGroup)
/* harmony export */ });
/* harmony import */ var _ITriggerAction__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(29024);
/* harmony import */ var _utils_mergeToDefaultData__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(40705);
/* harmony import */ var _barrel_optimize_names_ulid_ulid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(43899);



// === 类型常量 ===
const triggerActionGroupType = 'triggerActionGroup';
// === 创建默认 TriggerActionGroup ===
function createDefaultTriggerActionGroup() {
    const triggerAction = _ITriggerAction__WEBPACK_IMPORTED_MODULE_0__/* .triggerActionUtils */ .q1.createDefaultData();
    const triggerActionGroupUlid = (0,_barrel_optimize_names_ulid_ulid__WEBPACK_IMPORTED_MODULE_2__/* .ulid */ .Z0)();
    return {
        ulid: triggerActionGroupUlid,
        uuid: '',
        list: [
            triggerAction.ulid
        ],
        // 初始化children（web端主要使用）
        children: [
            triggerAction
        ],
        checks: [
            [
                true
            ]
        ],
        isSequential: false,
        createdAt: Date.now(),
        updatedAt: Date.now()
    };
}
function mergeTriggerActionGroupToDefaultData(data) {
    const result = (0,_utils_mergeToDefaultData__WEBPACK_IMPORTED_MODULE_1__/* .mergeToDefaultData */ .rM)(createDefaultTriggerActionGroup, data);
    return result;
}


/***/ }),

/***/ 14283:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Du: () => (/* binding */ createDefaultProject),
/* harmony export */   ZX: () => (/* binding */ createProjectByCategory),
/* harmony export */   _H: () => (/* binding */ projectType),
/* harmony export */   wg: () => (/* binding */ ProjectVisibility),
/* harmony export */   x3: () => (/* binding */ projectUtils)
/* harmony export */ });
/* harmony import */ var _barrel_optimize_names_ulid_ulid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(43899);
/* harmony import */ var _utils_mergeToDefaultData__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(40705);
/* harmony import */ var _ITriggerActionGroup__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(11067);



// === 类型常量 ===
const projectType = 'project';
/**
 * 项目可见性枚举
 */ var ProjectVisibility = /*#__PURE__*/ function(ProjectVisibility) {
    ProjectVisibility["Private"] = "private";
    ProjectVisibility["Public"] = "public";
    return ProjectVisibility;
}({});
// === Project Utils ===
/**
 * 创建默认的Project对象
 * 自动创建默认的 TriggerActionGroup
 *
 * 注意: 前端创建时只有 ulid,uuid 由后端生成
 * list 存储子 trigger_action_group 的 ulid
 */ function createDefaultProject() {
    const triggerActionGroup = (0,_ITriggerActionGroup__WEBPACK_IMPORTED_MODULE_2__/* .createDefaultTriggerActionGroup */ .zA)();
    return {
        ulid: (0,_barrel_optimize_names_ulid_ulid__WEBPACK_IMPORTED_MODULE_0__/* .ulid */ .Z0)(),
        uuid: '',
        ownerUuid: '',
        currentVersion: 1,
        type: projectType,
        category: '',
        list: [],
        children: [
            triggerActionGroup
        ],
        createdAt: Date.now(),
        updatedAt: Date.now(),
        authorUuid: '',
        visibility: "private",
        childrenVersion: 1
    };
}
/**
 * 根据 ProjectCategory 创建 Project 默认数据
 * @param category 项目类别
 */ function createProjectByCategory(category) {
    const project = createDefaultProject();
    project.category = category;
    return project;
}
const projectUtils = {
    type: projectType,
    createDefaultData: createDefaultProject,
    mergeDataToDefaultData: (0,_utils_mergeToDefaultData__WEBPACK_IMPORTED_MODULE_1__/* .createMergeToDefaultData */ .dV)(createDefaultProject)
};


/***/ }),

/***/ 23420:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   M: () => (/* binding */ findEntityAcrossProjects)
/* harmony export */ });
/* harmony import */ var _fanfanlo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(89597);

const fileLog = new _fanfanlo__WEBPACK_IMPORTED_MODULE_0__/* .Log */ .tG(false, 'description_entityFinder');
fileLog.pause = true;
fileLog.childrenPaused = true;
/**
 * 在TriggerActionGroup中查找TriggerAction
 */ function findInTriggerActionGroup(group, ulid) {
    const fnLog = fileLog.sub(false, 'findInTriggerActionGroup_fn');
    fnLog.pause = true;
    fnLog.log('开始查找TriggerAction, group:', group, 'ulid:', ulid);
    if (!group) {
        fnLog.log('group为null');
        return null;
    }
    if (!group.children) {
        fnLog.log('group.children为null');
        return null;
    }
    if (!Array.isArray(group.children)) {
        fnLog.log('group.children不是数组');
        return null;
    }
    const result = group.children.find((ta)=>ta.ulid === ulid) || null;
    fnLog.log('查找结果:', result);
    return result;
}
/**
 * 在ActionGroup中查找Action
 */ function findInActionGroup(group, ulid) {
    const fnLog = fileLog.sub(false, 'findInActionGroup_fn');
    fnLog.pause = true;
    fnLog.log('开始查找Action, group:', group, 'ulid:', ulid);
    if (!group) {
        fnLog.log('group为null');
        return null;
    }
    if (!group.list) {
        fnLog.log('group.list为null');
        return null;
    }
    if (!Array.isArray(group.list)) {
        fnLog.log('group.list不是数组');
        return null;
    }
    const result = group.list.find((a)=>a.ulid === ulid) || null;
    fnLog.log('查找结果:', result);
    return result;
}
/**
 * 在TriggerGroup中查找Trigger
 */ function findInTriggerGroup(group, ulid) {
    const fnLog = fileLog.sub(false, 'findInTriggerGroup_fn');
    fnLog.pause = true;
    fnLog.log('开始查找Trigger, group:', group, 'ulid:', ulid);
    if (!group) {
        fnLog.log('group为null');
        return null;
    }
    if (!group.list) {
        fnLog.log('group.list为null');
        return null;
    }
    if (!Array.isArray(group.list)) {
        fnLog.log('group.list不是数组');
        return null;
    }
    const result = group.list.find((t)=>t.ulid === ulid) || null;
    fnLog.log('查找结果:', result);
    return result;
}
/**
 * 在单个project中查找实体
 */ function findEntityInProject(project, params) {
    const fnLog = fileLog.sub(false, 'findEntityInProject_fn');
    fnLog.pause = true;
    fnLog.log('开始在project中查找实体, project:', project, 'params:', params);
    const { triggerActionGroupUlid, triggerActionUlid, actionGroupUlid, actionUlid, triggerGroupUlid, triggerUlid } = params;
    if (!project) {
        fnLog.log('project为null');
        return null;
    }
    if (triggerActionGroupUlid) {
        fnLog.log('查找triggerActionGroup, ulid:', triggerActionGroupUlid);
        if (!project.children || project.children.length === 0) {
            fnLog.log('project.children为空');
            return null;
        }
        const triggerActionGroup = project.children.find((child)=>child.ulid === triggerActionGroupUlid);
        if (triggerActionGroup) {
            fnLog.log('找到triggerActionGroup');
            return {
                entity: triggerActionGroup,
                type: 'triggerActionGroup'
            };
        } else {
            fnLog.log('未找到triggerActionGroup');
        }
    }
    if (triggerActionUlid) {
        fnLog.log('查找triggerAction, ulid:', triggerActionUlid);
        if (!project.children || project.children.length === 0) {
            fnLog.log('project.children为空');
            return null;
        }
        for (const triggerActionGroup of project.children){
            const triggerAction = findInTriggerActionGroup(triggerActionGroup, triggerActionUlid);
            if (triggerAction) {
                fnLog.log('找到triggerAction');
                if (actionGroupUlid || actionUlid) {
                    const actionGroup = triggerAction.actionGroup;
                    fnLog.log('查找actionGroup或action');
                    if (actionGroupUlid && actionGroup && actionGroup.ulid === actionGroupUlid) {
                        fnLog.log('找到actionGroup');
                        return {
                            entity: actionGroup,
                            type: 'actionGroup'
                        };
                    }
                    if (actionUlid && actionGroup) {
                        const action = findInActionGroup(actionGroup, actionUlid);
                        if (action) {
                            fnLog.log('找到action');
                            return {
                                entity: action,
                                type: 'action'
                            };
                        } else {
                            fnLog.log('未找到action');
                        }
                    }
                }
                if (triggerGroupUlid || triggerUlid) {
                    const triggerGroup = triggerAction.triggerGroup;
                    fnLog.log('查找triggerGroup或trigger');
                    if (triggerGroupUlid && triggerGroup && triggerGroup.ulid === triggerGroupUlid) {
                        fnLog.log('找到triggerGroup');
                        return {
                            entity: triggerGroup,
                            type: 'triggerGroup'
                        };
                    }
                    if (triggerUlid && triggerGroup) {
                        const trigger = findInTriggerGroup(triggerGroup, triggerUlid);
                        if (trigger) {
                            fnLog.log('找到trigger');
                            return {
                                entity: trigger,
                                type: 'trigger'
                            };
                        } else {
                            fnLog.log('未找到trigger');
                        }
                    }
                }
                fnLog.log('返回triggerAction');
                return {
                    entity: triggerAction,
                    type: 'triggerAction'
                };
            }
        }
        fnLog.log('未找到triggerAction');
    }
    fnLog.log('返回project');
    return {
        entity: project,
        type: 'project'
    };
}
/**
 * 在所有projects中查找实体
 */ function findEntityAcrossProjects(allProjects, params) {
    const fnLog = fileLog.sub(false, 'findEntityAcrossProjects_fn');
    fnLog.pause = true;
    fnLog.log('开始在所有projects中查找实体, projects数量:', allProjects.length, 'params:', params);
    if (!allProjects) {
        fnLog.log('allProjects为null');
        return null;
    }
    if (!Array.isArray(allProjects)) {
        fnLog.log('allProjects不是数组');
        return null;
    }
    const { projectClientId } = params;
    if (projectClientId) {
        fnLog.log('查找project, clientId:', projectClientId);
        const project = allProjects.find((p)=>p.clientId === projectClientId);
        if (!project) {
            fnLog.log('未找到project');
            return null;
        }
        fnLog.log('找到project, 开始在project中查找实体');
        const result = findEntityInProject(project, params);
        return result;
    }
    fnLog.log('未提供projectClientId, 遍历所有projects查找');
    for(let i = 0; i < allProjects.length; i++){
        const project = allProjects[i];
        fnLog.log('检查project, index:', i, 'clientId:', project.clientId);
        const result = findEntityInProject(project, params);
        if (result) {
            fnLog.log('找到实体, type:', result.type);
            return result;
        }
    }
    fnLog.log('未找到任何实体');
    return null;
}


/***/ }),

/***/ 29024:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GY: () => (/* binding */ createDefaultTriggerAction),
/* harmony export */   jt: () => (/* binding */ triggerActionType),
/* harmony export */   q1: () => (/* binding */ triggerActionUtils)
/* harmony export */ });
/* harmony import */ var _ITriggerGroup__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85513);
/* harmony import */ var _IActionGroup__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(80827);
/* harmony import */ var _barrel_optimize_names_ulid_ulid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(43899);
/* harmony import */ var _utils_triggerActionUtils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7728);




// === 类型常量 ===
const triggerActionType = 'triggerAction';
// === 创建默认 TriggerAction ===
function createDefaultTriggerAction() {
    const triggerGroup = _ITriggerGroup__WEBPACK_IMPORTED_MODULE_0__/* .triggerGroupUtils */ .zI.createDefaultData();
    const actionGroup = _IActionGroup__WEBPACK_IMPORTED_MODULE_1__/* .actionGroupUtils */ .hB.createDefaultData();
    const triggerActionUlid = (0,_barrel_optimize_names_ulid_ulid__WEBPACK_IMPORTED_MODULE_2__/* .ulid */ .Z0)();
    return {
        ulid: triggerActionUlid,
        uuid: '',
        triggerGroupUuid: triggerGroup.uuid,
        triggerGroupUlid: triggerGroup.ulid,
        actionGroupUuid: actionGroup.uuid,
        actionGroupUlid: actionGroup.ulid,
        triggerGroup,
        actionGroup,
        createdAt: Date.now(),
        updatedAt: Date.now()
    };
}
// === TriggerAction Utils ===
const triggerActionUtils = (0,_utils_triggerActionUtils__WEBPACK_IMPORTED_MODULE_3__/* .createTriggerActionUtils */ .i)(triggerActionType, createDefaultTriggerAction);


/***/ }),

/***/ 40705:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   dV: () => (/* binding */ createMergeToDefaultData),
/* harmony export */   rM: () => (/* binding */ mergeToDefaultData),
/* harmony export */   zI: () => (/* binding */ mergeDataWith)
/* harmony export */ });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(80507);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/**
 * 数据合并工具函数
 */ 
function mergeToDefaultData(createDefaultData, data) {
    return mergeDataWith(createDefaultData(), data);
}
function mergeDataWith(dist, src) {
    return lodash__WEBPACK_IMPORTED_MODULE_0___default().mergeWith(dist, src, (a, b)=>{
        if (lodash__WEBPACK_IMPORTED_MODULE_0___default().isArray(a) && lodash__WEBPACK_IMPORTED_MODULE_0___default().isArray(b)) {
            // 关于返回什么数据的讨论 https://gemini.google.com/app/8bb39bcc58ded134
            return b;
        }
    });
}
function createMergeToDefaultData(createDefaultData) {
    return (data)=>mergeToDefaultData(createDefaultData, data);
}


/***/ }),

/***/ 41445:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   d: () => (/* binding */ DescriptionContentRenderer)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(94513);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(94285);
/* harmony import */ var _barrel_optimize_names_Box_Typography_mui_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(92061);
/* harmony import */ var _barrel_optimize_names_Box_Typography_mui_material__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(26512);
/* harmony import */ var _fanfanlo__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(89597);
/* harmony import */ var _fanfanlo__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(56137);
/* harmony import */ var _fanfanlo_translation__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(46922);
/* harmony import */ var _common_IEntityDescription__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(10679);
/* harmony import */ var _utils_descriptionUtils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5616);







const fileLog = new _fanfanlo__WEBPACK_IMPORTED_MODULE_4__/* .Log */ .tG(false, 'DescriptionContentRenderer_ui');
fileLog.pause = true;
fileLog.childrenPaused = true;
function DescriptionContentRenderer(props) {
    const uiLog = fileLog.sub(false, 'DescriptionContentRenderer_ui');
    uiLog.pause = true;
    const { t } = (0,_fanfanlo__WEBPACK_IMPORTED_MODULE_5__/* .useTranslation */ .Bd)('droid/project-v2-interface/components/description-renderer/content');
    const { data, sourceLang = 'auto', className } = props;
    uiLog.log('渲染DescriptionContentRenderer, data:', data, 'sourceLang:', sourceLang);
    if (!data) {
        uiLog.log('data为null, 不渲染');
        return null;
    }
    if (!data.content) {
        uiLog.log('data.content为空, 不渲染');
        return null;
    }
    const contentType = data.type;
    const content = data.content;
    uiLog.log('contentType:', contentType, 'content:', content);
    if (contentType === _common_IEntityDescription__WEBPACK_IMPORTED_MODULE_2__/* .DescriptionContentType */ .q.TEXT) {
        uiLog.log('渲染TEXT类型, 使用TranslationComponent');
        return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_barrel_optimize_names_Box_Typography_mui_material__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .A, {
            className: className,
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_fanfanlo_translation__WEBPACK_IMPORTED_MODULE_7__/* .TranslationComponent */ .j, {
                sourceLang: sourceLang,
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_barrel_optimize_names_Box_Typography_mui_material__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .A, {
                    children: content
                })
            })
        });
    }
    if (contentType === _common_IEntityDescription__WEBPACK_IMPORTED_MODULE_2__/* .DescriptionContentType */ .q.HTML) {
        uiLog.log('渲染HTML类型, 使用TranslationComponent isHtml');
        return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_barrel_optimize_names_Box_Typography_mui_material__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .A, {
            className: className,
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_fanfanlo_translation__WEBPACK_IMPORTED_MODULE_7__/* .TranslationComponent */ .j, {
                sourceLang: sourceLang,
                isHtml: true,
                children: content
            })
        });
    }
    if (contentType === _common_IEntityDescription__WEBPACK_IMPORTED_MODULE_2__/* .DescriptionContentType */ .q.URL) {
        uiLog.log('渲染URL类型');
        const isValid = (0,_utils_descriptionUtils__WEBPACK_IMPORTED_MODULE_3__/* .validateUrl */ .w)(content);
        uiLog.log('URL是否有效:', isValid);
        if (!isValid) {
            uiLog.error('URL无效:', content);
            return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_barrel_optimize_names_Box_Typography_mui_material__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .A, {
                className: className,
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_barrel_optimize_names_Box_Typography_mui_material__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .A, {
                    color: "error",
                    children: t('DescriptionContentRenderer.invalidUrl', {
                        url: content
                    })
                })
            });
        }
        return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_barrel_optimize_names_Box_Typography_mui_material__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .A, {
            className: className,
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("iframe", {
                sandbox: "allow-scripts",
                src: content,
                style: {
                    width: '100%',
                    minHeight: '400px',
                    border: '1px solid #e0e0e0',
                    borderRadius: '4px'
                },
                title: "URL Content"
            })
        });
    }
    uiLog.error('未知的contentType:', contentType);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_barrel_optimize_names_Box_Typography_mui_material__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .A, {
        className: className,
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_barrel_optimize_names_Box_Typography_mui_material__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .A, {
            color: "error",
            children: t('DescriptionContentRenderer.unknownType', {
                type: contentType
            })
        })
    });
}


/***/ }),

/***/ 46922:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  j: () => (/* binding */ TranslationComponent)
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/react@19.1.0/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(94513);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react@19.1.0/node_modules/react/index.js
var react = __webpack_require__(94285);
// EXTERNAL MODULE: ../../libs/fanfanlo/src/translation/TranslationGlobalData.ts
var TranslationGlobalData = __webpack_require__(69753);
// EXTERNAL MODULE: ../../node_modules/.pnpm/google-translate-api-x@10.7.2/node_modules/google-translate-api-x/index.cjs
var google_translate_api_x = __webpack_require__(58143);
var google_translate_api_x_default = /*#__PURE__*/__webpack_require__.n(google_translate_api_x);
// EXTERNAL MODULE: ../../libs/fanfanlo/src/storage/indexed-db-utils.ts
var indexed_db_utils = __webpack_require__(55507);
// EXTERNAL MODULE: ../../libs/fanfanlo/src/log/Log.ts + 1 modules
var Log = __webpack_require__(89597);
;// ../../libs/fanfanlo/src/translation/translationCache.ts


// 文件级别log
const fileLog = new Log/* Log */.tG(false, 'translationCache_file');
// fileLog.pause = true;
const CACHE_NAMESPACE = 'translation_cache';
let cacheStore = null;
/**
 * 初始化缓存
 */ async function initCache() {
    const fnLog = fileLog.sub(false, 'initCache_fn');
    fnLog.pause = true;
    if (cacheStore) {
        fnLog.log('cache already initialized');
        return cacheStore;
    }
    fnLog.log('initializing cache');
    cacheStore = await indexed_db_utils/* indexedDbUtils */.d.getIndexedDbStore(CACHE_NAMESPACE, {
        defData: {},
        mergeDefData: false
    });
    fnLog.log('cache initialized', cacheStore);
    return cacheStore;
}
/**
 * 生成缓存key
 */ function generateCacheKey(originalText, sourceLang, targetLang) {
    const fnLog = fileLog.sub(false, 'generateCacheKey_fn');
    fnLog.pause = true;
    // 简单hash函数
    const hash = Array.from(originalText).reduce((hash, char)=>{
        return (hash << 5) - hash + char.charCodeAt(0);
    }, 0);
    const key = "".concat(sourceLang, "_").concat(targetLang, "_").concat(hash);
    fnLog.log('generated cache key', {
        originalText,
        sourceLang,
        targetLang,
        key
    });
    return key;
}
/**
 * 从缓存获取翻译
 */ async function getFromCache(originalText, sourceLang, targetLang) {
    const fnLog = fileLog.sub(false, 'getFromCache_fn');
    fnLog.pause = true;
    fnLog.log('get from cache', {
        originalText,
        sourceLang,
        targetLang
    });
    const store = await initCache();
    const key = generateCacheKey(originalText, sourceLang, targetLang);
    const cached = store.store.read(key);
    if (cached) {
        fnLog.log('cache hit', cached);
        return cached;
    } else {
        fnLog.log('cache miss');
        return null;
    }
}
/**
 * 保存翻译到缓存
 */ async function saveToCache(originalText, translatedText, sourceLang, targetLang) {
    const fnLog = fileLog.sub(false, 'saveToCache_fn');
    fnLog.pause = true;
    fnLog.log('save to cache', {
        originalText,
        translatedText,
        sourceLang,
        targetLang
    });
    const store = await initCache();
    const key = generateCacheKey(originalText, sourceLang, targetLang);
    const cacheItem = {
        originalText,
        translatedText,
        sourceLang,
        targetLang,
        timestamp: Date.now()
    };
    store.store.write(key, cacheItem);
    fnLog.log('saved to cache', {
        key,
        cacheItem
    });
}
/**
 * 清空所有缓存
 */ async function clearCache() {
    const fnLog = fileLog.sub(false, 'clearCache_fn');
    fnLog.pause = true;
    fnLog.log('clearing all cache');
    const store = await initCache();
    store.store.clearAll();
    fnLog.log('cache cleared');
}
const translationCache = {
    getFromCache,
    saveToCache,
    clearCache
};

;// ../../libs/fanfanlo/src/translation/translationService.ts



// 文件级别log
const translationService_fileLog = new Log/* Log */.tG(false, 'translationService_file');
// fileLog.pause = true;
/**
 * 翻译文本
 */ async function translateText(text) {
    let sourceLang = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 'auto', targetLang = arguments.length > 2 ? arguments[2] : void 0, isHtml = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : false;
    const fnLog = translationService_fileLog.sub(false, 'translateText_fn');
    fnLog.pause = true;
    fnLog.log('translate text start', {
        text,
        sourceLang,
        targetLang,
        isHtml
    });
    // 检查缓存
    const cached = await translationCache.getFromCache(text, sourceLang, targetLang);
    if (cached) {
        fnLog.log('using cached translation', cached);
        return {
            text: cached.translatedText,
            from: cached.sourceLang,
            to: cached.targetLang
        };
    } else {
        fnLog.log('cache miss, calling translation API');
    }
    try {
        var _result_from_language, _result_from;
        // 调用翻译API
        const result = await google_translate_api_x_default()(text, {
            from: sourceLang,
            to: targetLang
        });
        fnLog.log('translation API result', result);
        const translatedText = result.text;
        const detectedSourceLang = ((_result_from = result.from) === null || _result_from === void 0 ? void 0 : (_result_from_language = _result_from.language) === null || _result_from_language === void 0 ? void 0 : _result_from_language.iso) || sourceLang;
        // 保存到缓存
        await translationCache.saveToCache(text, translatedText, detectedSourceLang, targetLang);
        fnLog.log('translation complete', {
            translatedText,
            detectedSourceLang,
            targetLang
        });
        return {
            text: translatedText,
            from: detectedSourceLang,
            to: targetLang
        };
    } catch (error) {
        fnLog.error('translation failed', error);
        throw error;
    }
}
const translationService = {
    translateText
};

// EXTERNAL MODULE: ../../libs/fanfanlo/src/i18n/fanfanloI18n.ts
var fanfanloI18n = __webpack_require__(17039);
// EXTERNAL MODULE: ../../libs/fanfanlo/src/watcher/useProxyWatch.ts
var useProxyWatch = __webpack_require__(80502);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react-i18next@15.6.0_i18next@24.2.3_typescript@5.7.3__react-dom@19.1.0_react@19.1.0__react@19.1.0_typescript@5.7.3/node_modules/react-i18next/dist/es/index.js + 15 modules
var es = __webpack_require__(56137);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/Box/Box.js + 2 modules
var Box = __webpack_require__(92061);
;// ../../libs/fanfanlo/src/translation/TranslationComponent.tsx









// 文件级别log
const TranslationComponent_fileLog = new Log/* Log */.tG(false, 'TranslationComponent_file');
TranslationComponent_fileLog.pause = true;
/**
 * 翻译组件
 * - 根据translationGlobalConfig.auto决定是否自动翻译
 * - 点击可切换原文/译文
 * - 支持HTML内容翻译
 */ function TranslationComponent(props) {
    const uiLog = TranslationComponent_fileLog.sub(false, 'TranslationComponent_ui');
    uiLog.pause = true;
    const { children, sourceLang = 'auto', isHtml = false, className = '' } = props;
    // 监听全局auto配置
    const [auto] = (0,useProxyWatch/* useProxyWatch */.x)(TranslationGlobalData/* translationGlobalConfig */.$, 'auto', TranslationGlobalData/* translationGlobalConfig */.$.auto);
    // 使用i18n
    const { t } = (0,es/* useTranslation */.Bd)('fanfanlo/translation/content');
    // 组件内部状态
    const [originalText, setOriginalText] = (0,react.useState)('');
    const [translatedText, setTranslatedText] = (0,react.useState)('');
    const [showTranslation, setShowTranslation] = (0,react.useState)(false);
    const [isTranslating, setIsTranslating] = (0,react.useState)(false);
    const [error, setError] = (0,react.useState)(null);
    // 提取文本内容
    (0,react.useEffect)(()=>{
        const effectLog = uiLog.sub(false, 'effect_extractText_fn');
        effectLog.pause = true;
        let textContent = '';
        if (typeof children === 'string') {
            textContent = children;
            effectLog.log('extracted text from string', textContent);
        } else if (/*#__PURE__*/ react.isValidElement(children)) {
            if (isHtml) {
                // 当 isHtml=true 时,将React元素转换为HTML字符串
                textContent = reactElementToHtml(children);
                effectLog.log('converted react element to html', textContent);
            } else {
                // 提取纯文本
                textContent = extractTextFromReactNode(children);
                effectLog.log('extracted text from react element', textContent);
            }
        } else if (Array.isArray(children)) {
            if (isHtml) {
                // 处理数组形式的React元素
                textContent = children.map((child)=>{
                    if (/*#__PURE__*/ react.isValidElement(child)) {
                        return reactElementToHtml(child);
                    } else {
                        return String(child);
                    }
                }).join('');
                effectLog.log('converted react element array to html', textContent);
            } else {
                textContent = children.map((child)=>{
                    if (/*#__PURE__*/ react.isValidElement(child)) {
                        return extractTextFromReactNode(child);
                    } else {
                        return String(child);
                    }
                }).join('');
                effectLog.log('extracted text from array', textContent);
            }
        } else {
            textContent = String(children);
            effectLog.log('converted to string', textContent);
        }
        effectLog.log('final extracted text', textContent);
        setOriginalText(textContent);
    }, [
        children,
        isHtml
    ]);
    // 自动翻译逻辑
    (0,react.useEffect)(()=>{
        const effectLog = uiLog.sub(false, 'effect_autoTranslate_fn');
        effectLog.pause = true;
        effectLog.log('auto translate check', {
            auto,
            originalText
        });
        if (!auto) {
            effectLog.log('auto is false, reset translation state');
            // 重置翻译状态,恢复显示原文
            setShowTranslation(false);
            setIsTranslating(false);
            setError(null);
            return;
        }
        if (!originalText) {
            effectLog.log('no original text, skip translation');
            return;
        }
        const targetLang = fanfanloI18n/* fanfanloI18n */._.language;
        effectLog.log('target language', targetLang);
        // 如果源语言和目标语言相同,不翻译
        if (sourceLang !== 'auto' && sourceLang === targetLang) {
            effectLog.log('source and target language are the same, skip translation');
            return;
        }
        // 执行翻译
        performTranslation();
        async function performTranslation() {
            const fnLog = effectLog.sub(false, 'performTranslation_fn');
            fnLog.pause = true;
            fnLog.log('start translation', {
                originalText,
                sourceLang,
                targetLang
            });
            setIsTranslating(true);
            setError(null);
            try {
                const result = await translationService.translateText(originalText, sourceLang, targetLang, isHtml);
                fnLog.log('translation result', result);
                // 如果检测到的源语言和目标语言相同,不显示翻译
                if (result.from === result.to) {
                    fnLog.log('detected source language equals target language, skip translation');
                    setShowTranslation(false);
                } else {
                    setTranslatedText(result.text);
                    setShowTranslation(true);
                }
            } catch (err) {
                fnLog.error('translation error', err);
                setError(err instanceof Error ? err.message : 'Translation failed');
            } finally{
                setIsTranslating(false);
            }
        }
    }, [
        auto,
        originalText,
        sourceLang,
        isHtml
    ]);
    // 点击切换原文/译文
    const handleClick = ()=>{
        const fnLog = uiLog.sub(false, 'handleClick_fn');
        fnLog.pause = true;
        if (!translatedText) {
            fnLog.log('no translated text, skip toggle');
            return;
        }
        const newShowTranslation = !showTranslation;
        fnLog.log('toggle show translation', {
            from: showTranslation,
            to: newShowTranslation
        });
        setShowTranslation(newShowTranslation);
    };
    // 渲染内容
    const displayText = showTranslation ? translatedText : originalText;
    uiLog.log('render', {
        displayText,
        showTranslation,
        isTranslating,
        error
    });
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.A, {
        "data-testid": "TranslationComponent__clickBox__01JFXYZAQ6Q7R8S9T0U1V2W3",
        className: className,
        onClick: handleClick,
        sx: {
            cursor: translatedText ? 'pointer' : 'default',
            position: 'relative'
        },
        children: [
            isHtml ? /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                dangerouslySetInnerHTML: {
                    __html: displayText
                }
            }) : /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                children: displayText
            }),
            isTranslating && /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                style: {
                    marginLeft: '8px',
                    fontSize: '0.8em',
                    color: '#999'
                },
                children: t('TranslationComponent.translating')
            }),
            error && /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                style: {
                    marginLeft: '8px',
                    fontSize: '0.8em',
                    color: 'red'
                },
                children: t('TranslationComponent.translationFailed')
            })
        ]
    });
}
/**
 * 从React节点提取文本内容
 */ function extractTextFromReactNode(node) {
    const fnLog = TranslationComponent_fileLog.sub(false, 'extractTextFromReactNode_fn');
    fnLog.pause = true;
    if (typeof node === 'string') {
        return node;
    }
    if (typeof node === 'number') {
        return String(node);
    }
    if (/*#__PURE__*/ react.isValidElement(node)) {
        if (node.props.children) {
            if (Array.isArray(node.props.children)) {
                return node.props.children.map(extractTextFromReactNode).join('');
            } else {
                return extractTextFromReactNode(node.props.children);
            }
        }
    }
    if (Array.isArray(node)) {
        return node.map(extractTextFromReactNode).join('');
    }
    fnLog.log('unknown node type', node);
    return '';
}
/**
 * 将React元素转换为HTML字符串
 */ function reactElementToHtml(element) {
    const fnLog = TranslationComponent_fileLog.sub(false, 'reactElementToHtml_fn');
    fnLog.pause = true;
    if (!/*#__PURE__*/ react.isValidElement(element)) {
        fnLog.log('not a valid react element');
        return String(element);
    }
    const type = element.type;
    const props = element.props;
    const children = props.children;
    fnLog.log('converting element', {
        type,
        props
    });
    // 处理字符串类型的标签 (如 'div', 'h1', 'p' 等)
    if (typeof type === 'string') {
        const tagName = type;
        const attributes = [];
        // 构建属性
        for (const [key, value] of Object.entries(props)){
            if (key === 'children') {
                continue;
            }
            if (key === 'className') {
                attributes.push('class="'.concat(value, '"'));
            } else if (key === 'htmlFor') {
                attributes.push('for="'.concat(value, '"'));
            } else if (typeof value === 'string') {
                attributes.push("".concat(key, '="').concat(value, '"'));
            } else if (typeof value === 'number') {
                attributes.push("".concat(key, '="').concat(value, '"'));
            } else if (typeof value === 'boolean' && value) {
                attributes.push(key);
            }
        }
        const attrsString = attributes.length > 0 ? ' ' + attributes.join(' ') : '';
        // 自闭合标签
        const selfClosingTags = [
            'img',
            'br',
            'hr',
            'input',
            'meta',
            'link'
        ];
        if (selfClosingTags.includes(tagName)) {
            return "<".concat(tagName).concat(attrsString, " />");
        }
        // 处理子元素
        let childrenHtml = '';
        if (children !== undefined && children !== null) {
            if (Array.isArray(children)) {
                childrenHtml = children.map((child)=>{
                    if (/*#__PURE__*/ react.isValidElement(child)) {
                        return reactElementToHtml(child);
                    } else if (typeof child === 'string') {
                        return child;
                    } else if (typeof child === 'number') {
                        return String(child);
                    } else {
                        return '';
                    }
                }).join('');
            } else if (/*#__PURE__*/ react.isValidElement(children)) {
                childrenHtml = reactElementToHtml(children);
            } else if (typeof children === 'string') {
                childrenHtml = children;
            } else if (typeof children === 'number') {
                childrenHtml = String(children);
            }
        }
        const html = "<".concat(tagName).concat(attrsString, ">").concat(childrenHtml, "</").concat(tagName, ">");
        fnLog.log('generated html', html);
        return html;
    } else {
        // 处理组件类型 (函数组件或类组件)
        fnLog.log('component type, extracting children');
        if (children) {
            if (Array.isArray(children)) {
                return children.map((child)=>{
                    if (/*#__PURE__*/ react.isValidElement(child)) {
                        return reactElementToHtml(child);
                    } else {
                        return String(child);
                    }
                }).join('');
            } else if (/*#__PURE__*/ react.isValidElement(children)) {
                return reactElementToHtml(children);
            } else {
                return String(children);
            }
        }
        return '';
    }
}


/***/ }),

/***/ 55418:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   g: () => (/* binding */ createDefaultProjectSettings),
/* harmony export */   y: () => (/* binding */ RemoteSyncStatus)
/* harmony export */ });
// 远程同步状态枚举
var RemoteSyncStatus = /*#__PURE__*/ function(RemoteSyncStatus) {
    RemoteSyncStatus["Synced"] = "synced";
    RemoteSyncStatus["Pending"] = "pending";
    RemoteSyncStatus["Failed"] = "failed";
    return RemoteSyncStatus;
}({});
function createDefaultProjectSettings() {
    return {
        syncToServer: false
    };
}


/***/ }),

/***/ 59814:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  D: () => (/* binding */ projectStore),
  s: () => (/* binding */ s)
});

// EXTERNAL MODULE: ../../libs/fanfanlo/src/storage/store-utils.ts
var store_utils = __webpack_require__(29498);
// EXTERNAL MODULE: ../../libs/fanfanlo/src/log/Log.ts + 1 modules
var Log = __webpack_require__(89597);
// EXTERNAL MODULE: ../../libs/fanfanlo/src/watcher/proxyWatch.ts
var proxyWatch = __webpack_require__(57641);
// EXTERNAL MODULE: ../../libs/fanfanlo/src/watcher/parentWatchProxy.ts
var parentWatchProxy = __webpack_require__(50159);
// EXTERNAL MODULE: ../../libs/fanfanlo/src/utils/debug/object-count-utils.ts
var object_count_utils = __webpack_require__(79132);
// EXTERNAL MODULE: ../../libs/fanfanlo/src/watcher/watchUpdates.ts
var watchUpdates = __webpack_require__(31365);
// EXTERNAL MODULE: ../../libs/fanfanlo/src/watcher/proxyUtils.ts
var proxyUtils = __webpack_require__(15979);
// EXTERNAL MODULE: ../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/lodash.js
var lodash = __webpack_require__(80507);
var lodash_default = /*#__PURE__*/__webpack_require__.n(lodash);
// EXTERNAL MODULE: __barrel_optimize__?names=ulid!=!../../node_modules/.pnpm/ulid@2.4.0/node_modules/ulid/dist/index.esm.js + 1 modules
var index_esm = __webpack_require__(43899);
// EXTERNAL MODULE: ../../libs/droid/project-v2-interface/src/entities/IProject.ts
var IProject = __webpack_require__(14283);
// EXTERNAL MODULE: ../../libs/droid/project-v2-interface/src/entities/ITriggerActionGroup.ts
var ITriggerActionGroup = __webpack_require__(11067);
// EXTERNAL MODULE: ../../libs/droid/project-v2-interface/src/types/IProjectSettings.ts
var IProjectSettings = __webpack_require__(55418);
;// ../../libs/droid/project-v2-interface/src/utils/projectMerge.ts
/* provided dependency */ var process = __webpack_require__(87877);

const fileLog = new Log/* Log */.tG(false, 'projectMerge');
fileLog.pause = true;
/**
 * 合并策略配置
 */ var MergeStrategy = /*#__PURE__*/ function(MergeStrategy) {
    /** 方案1：直接替换 */ MergeStrategy["REPLACE"] = "replace";
    /** 方案2：智能合并（推荐） */ MergeStrategy["MERGE"] = "merge";
    return MergeStrategy;
}({});
/**
 * 获取当前使用的合并策略
 * 可通过环境变量或配置切换
 */ function getMergeStrategy() {
    const fnLog = fileLog.sub(false, 'getMergeStrategy_fn');
    fnLog.pause = true;
    // 从环境变量或全局配置获取策略，默认使用 MERGE
    const strategy =  true && window.__PROJECT_MERGE_STRATEGY__ || process.env.NEXT_PUBLIC_PROJECT_MERGE_STRATEGY || "merge";
    fnLog.log("[getMergeStrategy] 当前策略: ".concat(strategy));
    return strategy;
}
/**
 * 方案1：直接替换
 * 后端返回的 project 直接替换本地 project
 */ function replaceProject(localProject, backendProject) {
    const fnLog = fileLog.sub(false, 'replaceProject_fn');
    fnLog.pause = true;
    fnLog.log("[replaceProject] 开始替换 project, ulid=".concat(localProject.ulid));
    fnLog.log("[replaceProject] 后端 project uuid=".concat(backendProject.uuid));
    // 直接替换所有字段
    Object.assign(localProject, backendProject);
    fnLog.log("[replaceProject] 替换完成, 新 uuid=".concat(localProject.uuid));
}
/**
 * 方案2：智能合并（推荐）
 * 保留本地修改，同步后端新增字段
 */ function mergeProject(localProject, backendProject) {
    const fnLog = fileLog.sub(false, 'mergeProject_fn');
    fnLog.pause = true;
    fnLog.log("[mergeProject] 开始合并 project");
    fnLog.log("[mergeProject] 本地 ulid=".concat(localProject.ulid, ", 后端 ulid=").concat(backendProject.ulid));
    fnLog.log("[mergeProject] 本地 uuid=".concat(localProject.uuid, ", 后端 uuid=").concat(backendProject.uuid));
    // 1. 合并后端字段（这些字段以后端为准）
    mergeBackendFields(localProject, backendProject, fnLog);
    // 2. 合并业务字段（全量替换）
    mergeBusinessFields(localProject, backendProject, fnLog);
    // 3. 递归合并 children
    mergeChildren(localProject, backendProject, fnLog);
    fnLog.log("[mergeProject] 合并完成");
}
/**
 * 合并后端字段
 * 这些字段以后端为准，直接覆盖
 */ function mergeBackendFields(localProject, backendProject, parentLog) {
    const fnLog = parentLog.sub(false, 'mergeBackendFields_fn');
    fnLog.pause = true;
    fnLog.log("[mergeBackendFields] 开始合并后端字段");
    // 后端字段列表
    const backendFields = [
        'uuid',
        'list',
        'createdAt',
        'updatedAt',
        'deletedAt',
        'ownerUuid',
        'authorUuid',
        'currentVersion',
        'childrenVersion'
    ];
    backendFields.forEach((field)=>{
        const oldValue = localProject[field];
        const newValue = backendProject[field];
        if (oldValue !== newValue) {
            fnLog.log("[mergeBackendFields] 更新字段 ".concat(field, ": ").concat(JSON.stringify(oldValue), " -> ").concat(JSON.stringify(newValue)));
            localProject[field] = newValue;
        }
    });
    fnLog.log("[mergeBackendFields] 后端字段合并完成");
}
/**
 * 合并业务字段
 * 全量替换
 */ function mergeBusinessFields(localProject, backendProject, parentLog) {
    const fnLog = parentLog.sub(false, 'mergeBusinessFields_fn');
    fnLog.pause = true;
    fnLog.log("[mergeBusinessFields] 开始合并业务字段");
    // 业务字段列表
    const businessFields = [
        'title',
        'subtitle',
        'name',
        'type',
        'category',
        'keepAlive',
        'tags',
        'categories',
        'r2Path',
        'r2Account',
        'usageCount',
        'forkCount',
        'visibility',
        'originUuid',
        'forkFromVersion',
        'isSequential',
        'checks',
        'javaData',
        'webConfig',
        'sourceLang',
        'summaryPath',
        'descriptionPath',
        'briefDescriptionPath',
        'thumbnailPath'
    ];
    businessFields.forEach((field)=>{
        const oldValue = localProject[field];
        const newValue = backendProject[field];
        if (oldValue !== newValue) {
            fnLog.log("[mergeBusinessFields] 更新字段 ".concat(field, ": ").concat(JSON.stringify(oldValue), " -> ").concat(JSON.stringify(newValue)));
            localProject[field] = newValue;
        }
    });
    fnLog.log("[mergeBusinessFields] 业务字段合并完成");
}
/**
 * 递归合并 children
 * 根据 ulid 比较判断是否同一对象
 * 如果 ulid 相同且在同一索引位置，则递归合并
 * 否则直接替换
 */ function mergeChildren(localProject, backendProject, parentLog) {
    var _localProject_children, _backendProject_children;
    const fnLog = parentLog.sub(false, 'mergeChildren_fn');
    fnLog.pause = true;
    fnLog.log("[mergeChildren] 开始合并 children");
    fnLog.log("[mergeChildren] 本地 children 数量=".concat(((_localProject_children = localProject.children) === null || _localProject_children === void 0 ? void 0 : _localProject_children.length) || 0));
    fnLog.log("[mergeChildren] 后端 children 数量=".concat(((_backendProject_children = backendProject.children) === null || _backendProject_children === void 0 ? void 0 : _backendProject_children.length) || 0));
    // 如果后端没有 children，清空本地 children
    if (!backendProject.children || backendProject.children.length === 0) {
        fnLog.log("[mergeChildren] 后端没有 children，清空本地 children");
        localProject.children = [];
        return;
    }
    // 初始化本地 children 数组
    if (!localProject.children) {
        localProject.children = [];
    }
    // 遍历后端 children
    for(let i = 0; i < backendProject.children.length; i++){
        const backendChild = backendProject.children[i];
        const localChild = localProject.children[i];
        fnLog.log("[mergeChildren] 处理 child[".concat(i, "], 后端 ulid=").concat(backendChild.ulid));
        // 检查是否是同一个对象（通过 ulid 比较）
        if (localChild && localChild.ulid === backendChild.ulid) {
            fnLog.log("[mergeChildren] child[".concat(i, "] ulid 相同，执行递归合并"));
            mergeChild(localChild, backendChild, fnLog);
        } else {
            fnLog.log("[mergeChildren] child[".concat(i, "] ulid 不同或本地不存在，直接替换"));
            if (localChild) {
                fnLog.log("[mergeChildren] 本地 ulid=".concat(localChild.ulid, ", 后端 ulid=").concat(backendChild.ulid));
            }
            localProject.children[i] = backendChild;
        }
    }
    // 如果本地 children 更多，删除多余的
    if (localProject.children.length > backendProject.children.length) {
        fnLog.log("[mergeChildren] 本地 children 更多，删除多余的 (".concat(localProject.children.length, " -> ").concat(backendProject.children.length, ")"));
        localProject.children.length = backendProject.children.length;
    }
    fnLog.log("[mergeChildren] children 合并完成");
}
/**
 * 递归合并单个 child（TriggerActionGroup）
 */ function mergeChild(localChild, backendChild, parentLog) {
    const fnLog = parentLog.sub(false, 'mergeChild_fn');
    fnLog.pause = true;
    fnLog.log("[mergeChild] 开始合并 child, ulid=".concat(localChild.ulid));
    // 1. 合并后端字段
    const backendFields = [
        'uuid',
        'list',
        'createdAt',
        'updatedAt',
        'deletedAt',
        'ownerUuid',
        'authorUuid',
        'currentVersion',
        'childrenVersion'
    ];
    backendFields.forEach((field)=>{
        const oldValue = localChild[field];
        const newValue = backendChild[field];
        if (oldValue !== newValue) {
            fnLog.log("[mergeChild] 更新字段 ".concat(field, ": ").concat(JSON.stringify(oldValue), " -> ").concat(JSON.stringify(newValue)));
            localChild[field] = newValue;
        }
    });
    // 2. 合并业务字段
    const businessFields = [
        'name',
        'isSequential',
        'checks',
        'javaData',
        'webConfig',
        'sourceLang',
        'summaryPath',
        'descriptionPath',
        'briefDescriptionPath',
        'visibility',
        'originUuid',
        'forkFromVersion'
    ];
    businessFields.forEach((field)=>{
        const oldValue = localChild[field];
        const newValue = backendChild[field];
        if (oldValue !== newValue) {
            fnLog.log("[mergeChild] 更新字段 ".concat(field, ": ").concat(JSON.stringify(oldValue), " -> ").concat(JSON.stringify(newValue)));
            localChild[field] = newValue;
        }
    });
    // 3. 递归合并 children
    if (!backendChild.children || backendChild.children.length === 0) {
        fnLog.log("[mergeChild] 后端没有 children，清空本地 children");
        localChild.children = [];
    } else {
        if (!localChild.children) {
            localChild.children = [];
        }
        for(let i = 0; i < backendChild.children.length; i++){
            const backendGrandChild = backendChild.children[i];
            const localGrandChild = localChild.children[i];
            fnLog.log("[mergeChild] 处理 grandChild[".concat(i, "], 后端 ulid=").concat(backendGrandChild.ulid));
            if (localGrandChild && localGrandChild.ulid === backendGrandChild.ulid) {
                fnLog.log("[mergeChild] grandChild[".concat(i, "] ulid 相同，执行递归合并"));
                mergeTriggerAction(localGrandChild, backendGrandChild, fnLog);
            } else {
                fnLog.log("[mergeChild] grandChild[".concat(i, "] ulid 不同或本地不存在，直接替换"));
                localChild.children[i] = backendGrandChild;
            }
        }
        if (localChild.children.length > backendChild.children.length) {
            fnLog.log("[mergeChild] 本地 children 更多，删除多余的");
            localChild.children.length = backendChild.children.length;
        }
    }
    fnLog.log("[mergeChild] child 合并完成");
}
/**
 * 合并 TriggerAction
 * 将后端的 TriggerAction 数据合并到本地 TriggerAction
 */ function mergeTriggerAction(localTriggerAction, backendTriggerAction, parentLog) {
    const fnLog = parentLog.sub(false, 'mergeTriggerAction_fn');
    fnLog.pause = true;
    fnLog.log("[mergeTriggerAction] 开始合并 triggerAction, ulid=".concat(localTriggerAction.ulid));
    // 合并后端字段
    const backendFields = [
        'uuid',
        'triggerGroupUuid',
        'triggerGroupUlid',
        'actionGroupUuid',
        'actionGroupUlid',
        'createdAt',
        'updatedAt',
        'deletedAt',
        'ownerUuid',
        'authorUuid',
        'currentVersion'
    ];
    backendFields.forEach((field)=>{
        const oldValue = localTriggerAction[field];
        const newValue = backendTriggerAction[field];
        if (oldValue !== newValue) {
            fnLog.log("[mergeTriggerAction] 更新字段 ".concat(field, ": ").concat(JSON.stringify(oldValue), " -> ").concat(JSON.stringify(newValue)));
            localTriggerAction[field] = newValue;
        }
    });
    fnLog.log("[mergeTriggerAction] triggerAction 合并完成");
}
/**
 * 根据策略合并或替换 project
 */ function syncProject(localProject, backendProject) {
    const fnLog = fileLog.sub(false, 'syncProject_fn');
    fnLog.pause = true;
    const strategy = getMergeStrategy();
    fnLog.log("[syncProject] 使用策略: ".concat(strategy));
    fnLog.log("[syncProject] 本地 ulid=".concat(localProject.ulid, ", 后端 ulid=").concat(backendProject.ulid));
    if (strategy === "replace") {
        fnLog.log("[syncProject] 执行直接替换");
        replaceProject(localProject, backendProject);
    } else {
        fnLog.log("[syncProject] 执行智能合并");
        mergeProject(localProject, backendProject);
    }
    fnLog.log("[syncProject] 同步完成");
}

;// ../../libs/droid/project-v2-interface/src/storage/storage.ts
// 严禁ai修改这个文件







const s = store_utils/* storeUtils */.P.namespace('project-v2');
const listName = 'list';
const draftName = 'draft';
const projectSettingsMapName = "projectSettings";
const storage_fileLog = new Log/* Log */.tG(false, 'project-v2-interface-storage');
// fileLog.pause = true;
// fileLog.childrenPaused = true;
function loadProjectList() {
    const fnLog = storage_fileLog.sub(false, 'loadProjectList_fn');
    fnLog.pause = true;
    let list = s.read(listName);
    fnLog.log('list=', list);
    if (!lodash_default().isArray(list) || !list) list = [];
    const res = prepareProjectList(list);
    return res;
}
function loadDraft() {
    const fnLog = storage_fileLog.sub(false, 'loadDraft_fn');
    fnLog.pause = true;
    let list = s.read(draftName);
    fnLog.log('list=', list);
    if (!lodash_default().isArray(list) || !list) list = [];
    const res = prepareProjectList(list);
    return res;
}
function loadProjectSettingsMap() {
    const fnLog = storage_fileLog.sub(false, 'loadProjectSettingsMap_fn');
    // fnLog.pause = true;
    let map = s.read(projectSettingsMapName);
    fnLog.log('map=', map);
    fnLog.log('map json =', JSON.stringify(map), 'ismap bool=', lodash_default().isMap(map));
    if (!map || !lodash_default().isObject(map)) map = {};
    return (0,proxyWatch/* toProxy */.I$)(map);
}
function prepareProjectList(list) {
    const fnLog = storage_fileLog.sub(false, 'prepareProjectList_fn');
    fnLog.pause = true;
    return list.map((p)=>{
        fnLog.log("[prepareProjectList] 处理项目, ulid=".concat(p.ulid));
        // 确保 children 数组存在
        if (!p.children) {
            p.children = [];
            fnLog.log("[prepareProjectList] 初始化 children 数组");
        }
        // 确保 children[0] 存在
        if (!p.children[0]) {
            // 创建默认值
            const triggerActionGroup = (0,ITriggerActionGroup/* createDefaultTriggerActionGroup */.zA)();
            p.children[0] = triggerActionGroup;
        }
        const merged = lodash_default().merge((0,IProject/* createDefaultProject */.Du)(), p);
        if (!merged.ulid) {
            merged.ulid = (0,index_esm/* ulid */.Z0)();
            fnLog.log("[数据迁移] 为项目生成 ulid: ".concat(merged.ulid));
        }
        return merged;
    });
}
const list = (0,parentWatchProxy/* toParentWatchProxy */.Lr)(loadProjectList());
const draft = (0,parentWatchProxy/* toParentWatchProxy */.Lr)(loadDraft());
// const projectSettingsMap:Record<string, IProjectSettings> = toParentWatchProxy(loadProjectSettingsMap());
const _projectSettingsMap = loadProjectSettingsMap();
console.log('_projectSettingsMap file init', _projectSettingsMap);
const projectSettingsMap = (0,proxyWatch/* toProxy */.I$)(_projectSettingsMap);
(0,parentWatchProxy/* toParentWatchProxy */.Lr)(projectSettingsMap);
console.log('projectSettingsMap file init', projectSettingsMap, 'ssssssss', JSON.stringify(projectSettingsMap));
function printList() {
    const fnLog = storage_fileLog.sub(false, 'printList_fn');
    fnLog.pause = true;
    fnLog.log('storage initialize list=', object_count_utils/* objectCountUtils */._.getObjectCount(list), list);
    list.forEach((p, index)=>{
        fnLog.log('storage initialize list item=', object_count_utils/* objectCountUtils */._.getObjectCount(p), 'index=', index, 'p=', p, 'isproxy=', (0,proxyWatch/* isProxy */.ju)(p));
    });
}
function printDraft() {
    const fnLog = storage_fileLog.sub(false, 'printDraft_fn');
    fnLog.pause = true;
    fnLog.log('storage initialize draft=', object_count_utils/* objectCountUtils */._.getObjectCount(draft), draft);
    draft.forEach((p, index)=>{
        fnLog.log('storage initialize draft item=', object_count_utils/* objectCountUtils */._.getObjectCount(p), 'index=', index, 'p=', p, 'isproxy=', (0,proxyWatch/* isProxy */.ju)(p));
    });
}
function init() {
    const fnLog = storage_fileLog.sub(false, 'storage_init_fn');
    fnLog.pause = true;
    (0,watchUpdates/* watchUpdates */.c)(list, ()=>{
        s.write(listName, list, true);
        fnLog.log('list changed', list);
        printList();
    });
    (0,watchUpdates/* watchUpdates */.c)(draft, ()=>{
        proxyUtils/* proxyUtils */.o.runPauseProxyFn(()=>{
            s.write(draftName, draft, true);
            fnLog.log('draft changed', draft);
        });
        printDraft();
    });
    // 重新启用 projectSettingsMap 的 watchUpdates，确保数据被持久化
    fnLog.log('projectSettingsMap init fn data', projectSettingsMap, JSON.stringify(projectSettingsMap));
    (0,watchUpdates/* watchUpdates */.c)(projectSettingsMap, function() {
        fnLog.log('projectSettingsMap updates', projectSettingsMap);
        fnLog.log('projectSettingsMap updates2', ...arguments);
        s.write(projectSettingsMapName, projectSettingsMap, true);
    });
    fnLog.log('project-v2 store init', list);
    fnLog.log('project-v2 store init', draft);
}
function saveProject(project) {
    const fnLog = storage_fileLog.sub(false, 'saveProject_fn');
    // fnLog.pause = true;
    const copy = lodash_default().cloneDeep(project);
    let index = list.findIndex((p)=>p.ulid === copy.ulid);
    fnLog.log('[saveProject] 开始保存 project, ulid=', copy.ulid);
    fnLog.log('[saveProject] 查找结果 index=', index);
    if (index === -1) {
        // 新增 project
        fnLog.log('[saveProject] 新增 project, ulid=', copy.ulid);
        index = list.length;
    } else {
        // 更新现有 project
        const existingProject = list[index];
        fnLog.log('[saveProject] 更新现有 project, ulid=', copy.ulid);
        fnLog.log('[saveProject] 现有 project uuid=', existingProject.uuid);
        fnLog.log('[saveProject] 新 project uuid=', copy.uuid);
        // 只要后端返回了 uuid，就执行合并
        if (copy.uuid) {
            var _existingProject_children, _copy_children, _existingProject_children1;
            fnLog.log('[saveProject] 检测到后端数据（有 uuid），执行合并');
            fnLog.log('[saveProject] 合并前 existingProject:', JSON.stringify({
                ulid: existingProject.ulid,
                uuid: existingProject.uuid,
                title: existingProject.title,
                childrenLength: (_existingProject_children = existingProject.children) === null || _existingProject_children === void 0 ? void 0 : _existingProject_children.length
            }));
            fnLog.log('[saveProject] 合并前 copy:', JSON.stringify({
                ulid: copy.ulid,
                uuid: copy.uuid,
                title: copy.title,
                childrenLength: (_copy_children = copy.children) === null || _copy_children === void 0 ? void 0 : _copy_children.length
            }));
            syncProject(existingProject, copy);
            fnLog.log('[saveProject] 合并后 existingProject:', JSON.stringify({
                ulid: existingProject.ulid,
                uuid: existingProject.uuid,
                title: existingProject.title,
                childrenLength: (_existingProject_children1 = existingProject.children) === null || _existingProject_children1 === void 0 ? void 0 : _existingProject_children1.length
            }));
            fnLog.log('[saveProject] 合并完成');
            return;
        }
    }
    list[index] = copy;
    fnLog.log('[saveProject] 直接替换完成, list.length=', list.length);
}
function findSavedProject(ulid) {
    return list.find((p)=>p.ulid === ulid);
}
function findProject(ulid) {
    return list.find((p)=>p.ulid === ulid) || draft.find((p)=>p.ulid === ulid);
}
function findDraftOrSavedProject(ulid) {
    return draft.find((p)=>p.ulid === ulid) || list.find((p)=>p.ulid === ulid);
}
/**
 * 通过uuid查找项目（用于判断是否已拥有某个项目）
 * 查找逻辑：检查 project.uuid === uuid 或 project.originUuid === uuid
 * @param uuid 项目的uuid或originUuid
 * @returns 找到的项目，或undefined
 */ function findProjectByUuid(uuid) {
    const fnLog = storage_fileLog.sub(false, 'findProjectByUuid_fn');
    fnLog.log('[findProjectByUuid] 开始查找, uuid=', uuid);
    // 先在list中查找
    let found = list.find((p)=>p.uuid === uuid || p.originUuid === uuid);
    if (found) {
        fnLog.log('[findProjectByUuid] 在list中找到, ulid=', found.ulid);
        return found;
    }
    // 再在draft中查找
    found = draft.find((p)=>p.uuid === uuid || p.originUuid === uuid);
    if (found) {
        fnLog.log('[findProjectByUuid] 在draft中找到, ulid=', found.ulid);
        return found;
    }
    fnLog.log('[findProjectByUuid] 未找到');
    return undefined;
}
function removeProject(ulid) {
    const fnLog = storage_fileLog.sub(false, 'removeProject_fn');
    fnLog.pause = true;
    let index = list.findIndex((p)=>p.ulid === ulid);
    if (index !== -1) {
        list.splice(index, 1);
        removeProjectSettings(ulid);
        s.write(listName, list, true);
        fnLog.log('project removed', ulid, list);
    }
    removeDraft(ulid);
}
function addDraft(project) {
    const fnLog = storage_fileLog.sub(false, 'addDraft_fn');
    fnLog.pause = true;
    const p = proxyUtils/* proxyUtils */.o.runPauseProxyFn(()=>{
        return lodash_default().cloneDeep(project);
    });
    let index = draft.findIndex((p)=>p.ulid === project.ulid);
    if (index === -1) index = draft.length;
    draft[index] = p;
    addProjectSettings(project.ulid);
    fnLog.log('draft added', project, draft);
    return draft[index];
}
function getDraft(ulid) {
    return draft.find((p)=>p.ulid === ulid);
}
function removeDraft(ulid) {
    const fnLog = storage_fileLog.sub(false, 'deleteDraft_fn');
    fnLog.pause = true;
    let index = draft.findIndex((p)=>p.ulid === ulid);
    if (index !== -1) {
        draft.splice(index, 1);
        s.write(draftName, draft, true);
        removeProjectSettings(ulid);
        fnLog.log('draft deleted', ulid, draft);
    }
}
function getListCopy() {
    return [
        ...list
    ];
}
function getDraftCopy() {
    return [
        ...draft
    ];
}
function getProjectSettings(ulid) {
    const fnLog = storage_fileLog.sub(false, "getProjectSettings_fn");
    // fnLog.pause = true;
    let settings = projectSettingsMap[ulid];
    fnLog.log('settings=', ulid, settings);
    if (!settings) {
        fnLog.log('!settings', projectSettingsMap, JSON.stringify(projectSettingsMap));
        // 兼容一下之前的代码，没有创建setting的话就补充上一个。
        if (getDraft(ulid)) {
            addProjectSettings(ulid);
        }
    }
    return settings;
}
function addProjectSettings(ulid) {
    const fnLog = storage_fileLog.sub(false, 'addProjectSettings_fn');
    // fnLog.pause = true;
    const old = projectSettingsMap[ulid];
    fnLog.log('old key=', ulid, 'value = ', JSON.stringify(old), old, "".concat(!old ? 'projectSettingMap= ' + JSON.stringify(projectSettingsMap) : ''));
    if (old) return old;
    const newSettings = (0,IProjectSettings/* createDefaultProjectSettings */.g)();
    // 直接更新 projectSettingsMap 代理对象
    projectSettingsMap[ulid] = newSettings;
    return newSettings;
}
function removeProjectSettings(ulid) {
    const fnLog = storage_fileLog.sub(false, 'removeProjectSettings_fn');
    fnLog.pause = true;
    if (!(ulid in projectSettingsMap)) {
        fnLog.log('[removeProjectSettings] ulid 不存在于 projectSettingsMap，无需删除:', ulid);
        return true;
    }
    fnLog.log('[removeProjectSettings] 开始删除 projectSettings, ulid:', ulid);
    const result = delete projectSettingsMap[ulid];
    fnLog.log('[removeProjectSettings] 删除结果:', result);
    return result;
}
// 危险操作，仅限于用户退出登陆时使用.
function cleanStorage() {
    list.length = 0;
    draft.length = 0;
}
const projectStore = {
    list,
    draft,
    init,
    saveProject,
    findSavedProject,
    findProject,
    findDraftOrSavedProject,
    findProjectByUuid,
    removeProject,
    addDraft,
    getDraft,
    deleteDraft: removeDraft,
    getListCopy,
    getDraftCopy,
    getProjectSettings,
    cleanStorage
};
if (true) {
    window.getProjectStore = function() {
        storage_fileLog.log('[DEBUG] getProjectStore() called');
        return projectStore;
    };
    init();
    storage_fileLog.log('[DEBUG] projectStore initialized');
}


/***/ }),

/***/ 69753:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   $: () => (/* binding */ translationGlobalConfig)
/* harmony export */ });
/* harmony import */ var _watcher__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(57641);
/* harmony import */ var _log__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(89597);


// 文件级别log
const fileLog = new _log__WEBPACK_IMPORTED_MODULE_0__/* .Log */ .tG(false, 'TranslationGlobalData_file');
fileLog.pause = true;
/**
 * 全局翻译配置
 * 使用toProxy创建响应式对象
 */ const translationGlobalConfig = (0,_watcher__WEBPACK_IMPORTED_MODULE_1__/* .toProxy */ .I$)({
    auto: true
});
// 初始化log
const initLog = fileLog.sub(false, 'init_fn');
initLog.pause = true;
initLog.log('translationGlobalConfig created', translationGlobalConfig);


/***/ }),

/***/ 80827:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A5: () => (/* binding */ createActionUtils),
/* harmony export */   Gh: () => (/* binding */ ActionUtilsMap),
/* harmony export */   MI: () => (/* binding */ actionGroupType),
/* harmony export */   e9: () => (/* binding */ getActionUtils),
/* harmony export */   hB: () => (/* binding */ actionGroupUtils),
/* harmony export */   pX: () => (/* binding */ registerActionUtils)
/* harmony export */ });
/* harmony import */ var _utils_mergeToDefaultData__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(40705);
/* harmony import */ var _barrel_optimize_names_ulid_ulid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(43899);
/* harmony import */ var _fanfanlo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(89597);



const fileLog = new _fanfanlo__WEBPACK_IMPORTED_MODULE_2__/* .Log */ .tG(false, 'IActionGroup_f');
fileLog.pause = true;
fileLog.childrenPaused = true;
// === 类型常量 ===
const actionGroupType = 'actionGroup';
// === ActionGroup Utils ===
function createDefaultActionGroup() {
    return {
        ulid: (0,_barrel_optimize_names_ulid_ulid__WEBPACK_IMPORTED_MODULE_1__/* .ulid */ .Z0)(),
        uuid: '',
        list: [],
        children: [],
        checks: [],
        isSequential: true,
        createdAt: Date.now(),
        updatedAt: Date.now()
    };
}
const actionGroupUtils = {
    type: actionGroupType,
    createDefaultData: createDefaultActionGroup,
    mergeDataToDefaultData: (0,_utils_mergeToDefaultData__WEBPACK_IMPORTED_MODULE_0__/* .createMergeToDefaultData */ .dV)(createDefaultActionGroup)
};
const ActionUtilsMap = {};
function registerActionUtils(key, utils) {
    fileLog.log('[registerActionUtils] key:', key);
    if (key in ActionUtilsMap) {
        throw new Error("ActionUtilsMap already has key: ".concat(key));
    }
    ActionUtilsMap[key] = utils;
    fileLog.log('[registerActionUtils] 注册成功, 当前所有keys:', Object.keys(ActionUtilsMap));
}
function getActionUtils(key) {
    fileLog.log('[getActionUtils] key:', key);
    const utils = ActionUtilsMap[key];
    if (!utils) {
        fileLog.log('[getActionUtils] 未找到, 可用的keys:', Object.keys(ActionUtilsMap));
    } else {
        fileLog.log('[getActionUtils] 找到');
    }
    return utils;
}
function createActionUtils(type, init, createDefaultData, UI) {
    fileLog.log('[createActionUtils] type:', type);
    const res = {
        type,
        mergeDataToDefaultData: (0,_utils_mergeToDefaultData__WEBPACK_IMPORTED_MODULE_0__/* .createMergeToDefaultData */ .dV)(createDefaultData),
        createDefaultData,
        create: (actionGroup, data)=>{
            fileLog.log('[createActionUtils.create] actionGroup.ulid:', actionGroup.ulid);
            const action = createDefaultData();
            fileLog.log('[createActionUtils.create] action.ulid:', action.ulid);
            if (data) {
                fileLog.log('[createActionUtils.create] merging data');
                Object.assign(action, data);
            }
            // 修改：只维护children（web端主要使用），list由后端维护
            if (!actionGroup.children) {
                fileLog.log('[createActionUtils.create] children未初始化，初始化为[]');
                actionGroup.children = [];
            }
            actionGroup.children.push(action);
            fileLog.log('[createActionUtils.create] pushed to children, length:', actionGroup.children.length);
        },
        update: (action, data)=>{
            fileLog.log('[createActionUtils.update] action.ulid:', action.ulid);
            (0,_utils_mergeToDefaultData__WEBPACK_IMPORTED_MODULE_0__/* .mergeDataWith */ .zI)(action, data);
        },
        UI,
        init
    };
    registerActionUtils(type, res);
    fileLog.log('[createActionUtils] 注册完成 type:', type);
    return res;
}


/***/ }),

/***/ 85513:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Cq: () => (/* binding */ createTriggerUtils),
/* harmony export */   gq: () => (/* binding */ getTriggerUtils),
/* harmony export */   q5: () => (/* binding */ TriggerUtilsMap),
/* harmony export */   rV: () => (/* binding */ registerTriggerUtils),
/* harmony export */   wS: () => (/* binding */ triggerGroupType),
/* harmony export */   zI: () => (/* binding */ triggerGroupUtils)
/* harmony export */ });
/* harmony import */ var _utils_mergeToDefaultData__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(40705);
/* harmony import */ var _barrel_optimize_names_ulid_ulid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(43899);
/* harmony import */ var _fanfanlo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(89597);



const fileLog = new _fanfanlo__WEBPACK_IMPORTED_MODULE_2__/* .Log */ .tG(false, 'ITriggerGroup_f');
fileLog.pause = true;
fileLog.childrenPaused = true;
// === 类型常量 ===
const triggerGroupType = 'triggerGroup';
// === TriggerGroup Utils ===
function createDefaultTriggerGroup() {
    return {
        ulid: (0,_barrel_optimize_names_ulid_ulid__WEBPACK_IMPORTED_MODULE_1__/* .ulid */ .Z0)(),
        uuid: '',
        list: [],
        children: [],
        checks: [],
        isSequential: true,
        createdAt: Date.now(),
        updatedAt: Date.now()
    };
}
const triggerGroupUtils = {
    type: triggerGroupType,
    createDefaultData: createDefaultTriggerGroup,
    mergeDataToDefaultData: (0,_utils_mergeToDefaultData__WEBPACK_IMPORTED_MODULE_0__/* .createMergeToDefaultData */ .dV)(createDefaultTriggerGroup)
};
const TriggerUtilsMap = {};
function registerTriggerUtils(key, utils) {
    fileLog.log('[registerTriggerUtils] key:', key);
    if (key in TriggerUtilsMap) {
        throw new Error("TriggerUtilsMap already has key: ".concat(key));
    }
    TriggerUtilsMap[key] = utils;
    fileLog.log('[registerTriggerUtils] 注册成功, 当前所有keys:', Object.keys(TriggerUtilsMap));
}
function getTriggerUtils(key) {
    fileLog.log('[getTriggerUtils] key:', key);
    const utils = TriggerUtilsMap[key];
    if (!utils) {
        fileLog.log('[getTriggerUtils] 未找到, 可用的keys:', Object.keys(TriggerUtilsMap));
    } else {
        fileLog.log('[getTriggerUtils] 找到');
    }
    return utils;
}
function createTriggerUtils(type, init, createDefaultData, UI) {
    fileLog.log('[createTriggerUtils] type:', type);
    const res = {
        type,
        mergeDataToDefaultData: (0,_utils_mergeToDefaultData__WEBPACK_IMPORTED_MODULE_0__/* .createMergeToDefaultData */ .dV)(createDefaultData),
        createDefaultData,
        create: (triggerGroup, data)=>{
            fileLog.log('[createTriggerUtils.create] triggerGroup.ulid:', triggerGroup.ulid);
            const trigger = createDefaultData();
            fileLog.log('[createTriggerUtils.create] trigger.ulid:', trigger.ulid);
            if (data) {
                fileLog.log('[createTriggerUtils.create] merging data');
                Object.assign(trigger, data);
            }
            // 修改：只维护children（web端主要使用），list由后端维护
            if (!triggerGroup.children) {
                fileLog.log('[createTriggerUtils.create] children未初始化，初始化为[]');
                triggerGroup.children = [];
            }
            triggerGroup.children.push(trigger);
            fileLog.log('[createTriggerUtils.create] pushed to children, length:', triggerGroup.children.length);
        },
        update: (trigger, data)=>{
            fileLog.log('[createTriggerUtils.update] trigger.ulid:', trigger.ulid);
            (0,_utils_mergeToDefaultData__WEBPACK_IMPORTED_MODULE_0__/* .mergeDataWith */ .zI)(trigger, data);
        },
        UI,
        init
    };
    registerTriggerUtils(type, res);
    fileLog.log('[createTriggerUtils] 注册完成 type:', type);
    return res;
}


/***/ })

}]);
//# sourceMappingURL=1469-cd0248063f365b20.js.map