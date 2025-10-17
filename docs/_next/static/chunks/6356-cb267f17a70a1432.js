"use strict";
(self["webpackChunk_N_E"] = self["webpackChunk_N_E"] || []).push([[6356],{

/***/ 14209:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   h4: () => (/* binding */ projectDataToUniqueId),
/* harmony export */   mR: () => (/* binding */ childToProjectDataUtils),
/* harmony export */   q_: () => (/* binding */ getActionGroupElement)
/* harmony export */ });
/* unused harmony exports getTriggerListByProp, getTriggerListElementByProp, getTriggerByProp, getTriggerElementByProp, getActionGroupByProp, getActionGroupElementByProp, getActionListByProp */
/* harmony import */ var _fanfanlo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(10019);

function projectDataToUniqueId(data) {
    var _data_project, _data_triggerActionGroup, _data_triggerAction, _data_triggerGroup, _data_trigger, _data_trigger_javaData, _data_trigger1, _data_actionGroup, _data_action, _data_action_javaData, _data_action1;
    let s = "";
    function add(name, id) {
        if (id) s += "|".concat(name, ":").concat(id);
    }
    add('project', (_data_project = data.project) === null || _data_project === void 0 ? void 0 : _data_project.id);
    add('trigger-action-group', (_data_triggerActionGroup = data.triggerActionGroup) === null || _data_triggerActionGroup === void 0 ? void 0 : _data_triggerActionGroup.id);
    add('trigger-action', (_data_triggerAction = data.triggerAction) === null || _data_triggerAction === void 0 ? void 0 : _data_triggerAction.id);
    add('trigger-group', (_data_triggerGroup = data.triggerGroup) === null || _data_triggerGroup === void 0 ? void 0 : _data_triggerGroup.id);
    add('trigger', (_data_trigger = data.trigger) === null || _data_trigger === void 0 ? void 0 : _data_trigger.id);
    add('trigger-java-data', (_data_trigger1 = data.trigger) === null || _data_trigger1 === void 0 ? void 0 : (_data_trigger_javaData = _data_trigger1.javaData) === null || _data_trigger_javaData === void 0 ? void 0 : _data_trigger_javaData.id);
    add('action-group', (_data_actionGroup = data.actionGroup) === null || _data_actionGroup === void 0 ? void 0 : _data_actionGroup.id);
    add('action', (_data_action = data.action) === null || _data_action === void 0 ? void 0 : _data_action.id);
    add('action-java-data', (_data_action1 = data.action) === null || _data_action1 === void 0 ? void 0 : (_data_action_javaData = _data_action1.javaData) === null || _data_action_javaData === void 0 ? void 0 : _data_action_javaData.id);
    return s;
}
// project
function getProjectByProp(prop, projectData) {
    const data = prop ? (0,_fanfanlo__WEBPACK_IMPORTED_MODULE_0__/* .getParent */ .PA)(prop) : undefined;
    if (projectData) {
        projectData.project = data;
    }
    return data;
}
function getProjectElementByProp(prop) {
    let prefix = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : '', suffix = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : '', projectData = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {};
    getProjectByProp(prop, projectData);
    return getProjectElementsId(projectData, prefix, suffix);
}
// trigger action group
function getTriggerActionGroupByProp(prop, projectData) {
    const data = prop ? (0,_fanfanlo__WEBPACK_IMPORTED_MODULE_0__/* .getParent */ .PA)(prop) : undefined;
    if (projectData && data) {
        projectData.triggerActionGroup = data;
        getProjectByProp(data, projectData);
    }
    return data;
}
function getTriggerActionGroupElementByProp(prop) {
    let prefix = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : '', suffix = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : '', projectData = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {};
    getTriggerActionGroupByProp(prop, projectData);
    return getProjectElementsId(projectData, prefix, suffix);
}
function getTriggerActionGroupElement(triggerActionGroup) {
    let prefix = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : '', suffix = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : '', projectData = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {};
    projectData.triggerActionGroup = triggerActionGroup;
    getTriggerActionGroupByProp(triggerActionGroup.checks, projectData);
    return getProjectElementsId(projectData, prefix, suffix);
}
// trigger action list
function getTriggerActionListByProp(prop, projectData) {
    const data = prop ? (0,_fanfanlo__WEBPACK_IMPORTED_MODULE_0__/* .getParent */ .PA)(prop) : undefined;
    if (projectData && data) {
        projectData.triggerActionList = data;
        getTriggerActionGroupByProp(data, projectData);
    }
    return data;
}
function getTriggerActionListElementByProp(prop) {
    let prefix = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : '', suffix = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : '', projectData = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {};
    getTriggerActionListByProp(prop, projectData);
    return getProjectElementsId(projectData, prefix, suffix);
}
// trigger action
function getTriggerActionByProp(prop, projectData) {
    const data = prop ? (0,_fanfanlo__WEBPACK_IMPORTED_MODULE_0__/* .getParent */ .PA)(prop) : undefined;
    if (projectData && data) {
        projectData.triggerAction = data;
        getTriggerActionListByProp(data, projectData);
    }
    return data;
}
function getTriggerActionElementByProp(prop) {
    let prefix = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : '', suffix = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : '', projectData = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {};
    getTriggerActionByProp(prop, projectData);
    return getProjectElementsId(projectData, prefix, suffix);
}
// trigger group
function getTriggerGroupByProp(prop, projectData) {
    const data = prop ? (0,_fanfanlo__WEBPACK_IMPORTED_MODULE_0__/* .getParent */ .PA)(prop) : undefined;
    if (projectData && data) {
        projectData.triggerGroup = data;
        getTriggerActionByProp(data, projectData);
    }
    return data;
}
function getTriggerGroupElementByProp(prop) {
    let prefix = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : '', suffix = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : '', projectData = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {};
    getTriggerGroupByProp(prop, projectData);
    return getProjectElementsId(projectData, prefix, suffix);
}
function getTriggerGroupElement(triggerGroup) {
    let prefix = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : '', suffix = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : '', projectData = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {};
    projectData.triggerGroup = triggerGroup;
    getTriggerGroupByProp(triggerGroup.list, projectData);
    return getProjectElementsId(projectData, prefix, suffix);
}
// trigger list
function getTriggerListByProp(prop, projectData) {
    const data = prop ? (0,_fanfanlo__WEBPACK_IMPORTED_MODULE_0__/* .getParent */ .PA)(prop) : undefined;
    if (projectData && data) {
        projectData.triggerList = data;
        getTriggerGroupByProp(data, projectData);
    }
    return data;
}
function getTriggerListElementByProp(prop) {
    let prefix = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : '', suffix = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : '', projectData = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {};
    getTriggerListByProp(prop, projectData);
    return getProjectElementsId(projectData, prefix, suffix);
}
// trigger
function getTriggerByProp(prop, projectData) {
    const data = prop ? (0,_fanfanlo__WEBPACK_IMPORTED_MODULE_0__/* .getParent */ .PA)(prop) : undefined;
    if (projectData && data) {
        projectData.trigger = data;
        getTriggerListByProp(data, projectData);
    }
    return data;
}
function getTriggerElementByProp(prop) {
    let prefix = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : '', suffix = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : '', projectData = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {};
    getTriggerByProp(prop, projectData);
    return getProjectElementsId(projectData, prefix, suffix);
}
// 得想办法让它在数据不正确时报错才行
// getTriggerByProp({shellData:{}})
// getTriggerByProp({javaData:{}})
// getTriggerByProp(3)
// action group
function getActionGroupByProp(prop, projectData) {
    const data = prop ? (0,_fanfanlo__WEBPACK_IMPORTED_MODULE_0__/* .getParent */ .PA)(prop) : undefined;
    if (projectData && data) {
        projectData.actionGroup = data;
        getTriggerActionByProp(data, projectData);
    }
    return data;
}
function getActionGroupElementByProp(prop) {
    let prefix = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : '', suffix = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : '', projectData = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {};
    getActionGroupByProp(prop, projectData);
    return getProjectElementsId(projectData, prefix, suffix);
}
function getActionGroupElement(actionGroup) {
    let prefix = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : '', suffix = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : '', projectData = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {};
    projectData.actionGroup = actionGroup;
    getTriggerActionByProp(actionGroup, projectData);
    return getProjectElementsId(projectData, prefix, suffix);
}
// action list
function getActionListByProp(prop, projectData) {
    const data = prop ? (0,_fanfanlo__WEBPACK_IMPORTED_MODULE_0__/* .getParent */ .PA)(prop) : undefined;
    if (projectData && data) {
        projectData.actionList = data;
        getActionGroupByProp(data, projectData);
    }
    return data;
}
function getActionListElementByProp(prop) {
    let prefix = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : '', suffix = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : '', projectData = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {};
    getActionListByProp(prop, projectData);
    return getProjectElementsId(projectData, prefix, suffix);
}
// action
function getActionByProp(prop, projectData) {
    const data = prop ? (0,_fanfanlo__WEBPACK_IMPORTED_MODULE_0__/* .getParent */ .PA)(prop) : undefined;
    if (projectData && data) {
        projectData.action = data;
        getActionListByProp(data, projectData);
    }
    return data;
}
function getActionElementIdByProp(prop) {
    let prefix = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : '', suffix = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : '', projectData = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {};
    getActionByProp(prop, projectData);
    return getProjectElementsId(projectData, prefix, suffix);
}
function getProjectElementsId(childData) {
    let prefix = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : '', suffix = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : '';
    var _childData_project, _childData_project1, _childData_triggerActionGroup, _childData_triggerActionGroup1, _childData_triggerAction, _childData_triggerAction1, _childData_triggerGroup, _childData_triggerGroup1, _childData_trigger, _childData_trigger1, _childData_actionGroup, _childData_actionGroup1, _childData_action, _childData_action1;
    return {
        ["data-groupof".concat(prefix ? '-' + prefix : '', "-project-id").concat(suffix ? '-' + suffix : '')]: (_childData_project = childData.project) === null || _childData_project === void 0 ? void 0 : _childData_project.id,
        ["data-project-id"]: (_childData_project1 = childData.project) === null || _childData_project1 === void 0 ? void 0 : _childData_project1.id,
        ["data-groupof".concat(prefix ? '-' + prefix : '', "-trigger-action-group-id").concat(suffix ? '-' + suffix : '')]: (_childData_triggerActionGroup = childData.triggerActionGroup) === null || _childData_triggerActionGroup === void 0 ? void 0 : _childData_triggerActionGroup.id,
        ["data-trigger-action-group-id"]: (_childData_triggerActionGroup1 = childData.triggerActionGroup) === null || _childData_triggerActionGroup1 === void 0 ? void 0 : _childData_triggerActionGroup1.id,
        ["data-groupof".concat(prefix ? '-' + prefix : '', "-trigger-action-id").concat(suffix ? '-' + suffix : '')]: (_childData_triggerAction = childData.triggerAction) === null || _childData_triggerAction === void 0 ? void 0 : _childData_triggerAction.id,
        ["data-trigger-action-id"]: (_childData_triggerAction1 = childData.triggerAction) === null || _childData_triggerAction1 === void 0 ? void 0 : _childData_triggerAction1.id,
        ["data-groupof".concat(prefix ? '-' + prefix : '', "-trigger-group-id").concat(suffix ? '-' + suffix : '')]: (_childData_triggerGroup = childData.triggerGroup) === null || _childData_triggerGroup === void 0 ? void 0 : _childData_triggerGroup.id,
        ["data-trigger-group-id"]: (_childData_triggerGroup1 = childData.triggerGroup) === null || _childData_triggerGroup1 === void 0 ? void 0 : _childData_triggerGroup1.id,
        ["data-groupof".concat(prefix ? '-' + prefix : '', "-trigger-id").concat(suffix ? '-' + suffix : '')]: (_childData_trigger = childData.trigger) === null || _childData_trigger === void 0 ? void 0 : _childData_trigger.id,
        ["data-trigger-id"]: (_childData_trigger1 = childData.trigger) === null || _childData_trigger1 === void 0 ? void 0 : _childData_trigger1.id,
        ["data-groupof".concat(prefix ? '-' + prefix : '', "-action-group-id").concat(suffix ? '-' + suffix : '')]: (_childData_actionGroup = childData.actionGroup) === null || _childData_actionGroup === void 0 ? void 0 : _childData_actionGroup.id,
        ["data-action-group-id"]: (_childData_actionGroup1 = childData.actionGroup) === null || _childData_actionGroup1 === void 0 ? void 0 : _childData_actionGroup1.id,
        ["data-groupof".concat(prefix ? '-' + prefix : '', "-action-id").concat(suffix ? '-' + suffix : '')]: (_childData_action = childData.action) === null || _childData_action === void 0 ? void 0 : _childData_action.id,
        ["data-action-id"]: (_childData_action1 = childData.action) === null || _childData_action1 === void 0 ? void 0 : _childData_action1.id
    };
}
const childToProjectDataUtils = {
    project: {
        getProjectByProp,
        getProjectElementByProp
    },
    triggerActionGroup: {
        getTriggerActionGroupByProp,
        getTriggerActionGroupElementByProp,
        getTriggerActionGroupElement
    },
    triggerActionList: {
        getTriggerActionListByProp,
        getTriggerActionListElementByProp
    },
    triggerAction: {
        getTriggerActionByProp,
        getTriggerActionElementByProp
    },
    triggerGroup: {
        getTriggerGroupByProp,
        getTriggerGroupElementByProp,
        getTriggerGroupElement
    },
    trigger: {
        getTriggerByProp,
        getTriggerElementByProp
    },
    triggerList: {
        getTriggerListByProp,
        getTriggerListElementByProp
    },
    actionGroup: {
        getActionGroupByProp,
        getActionGroupElementByProp,
        getActionGroupElement
    },
    actionList: {
        getActionListByProp,
        getActionListElementByProp
    },
    action: {
        getActionByProp,
        getActionElementIdByProp
    },
    getProjectElementsId
};


/***/ }),

/***/ 22369:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   XR: () => (/* binding */ mergeTriggerActionGroupToDefultData),
/* harmony export */   eT: () => (/* binding */ createDefultTriggerActionGroup)
/* harmony export */ });
/* unused harmony export triggerActionGroupType */
/* harmony import */ var _barrel_optimize_names_ulid_ulid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67131);
/* harmony import */ var _trigger_action_ITriggerAction_intf__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(73849);
/* harmony import */ var _utils_mergeToDefaultData__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(82713);



const triggerActionGroupType = 'triggerActionGroup';
function createDefultTriggerActionGroup() {
    return {
        type: triggerActionGroupType,
        id: (0,_barrel_optimize_names_ulid_ulid__WEBPACK_IMPORTED_MODULE_0__/* .ulid */ .Z0)(),
        name: '',
        list: [
            (0,_trigger_action_ITriggerAction_intf__WEBPACK_IMPORTED_MODULE_1__/* .createDefultTriggerAction */ .n)()
        ],
        checks: [
            [
                true
            ]
        ],
        isSequential: true
    };
}
function mergeTriggerActionGroupToDefultData(data) {
    return (0,_utils_mergeToDefaultData__WEBPACK_IMPORTED_MODULE_2__/* .mergeToDefaultData */ .rM)(createDefultTriggerActionGroup, data);
}


/***/ }),

/***/ 31232:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   D: () => (/* binding */ projectStore)
/* harmony export */ });
/* unused harmony export s */
/* harmony import */ var _fanfanlo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4887);
/* harmony import */ var _fanfanlo__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(76648);
/* harmony import */ var _fanfanlo__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(4738);
/* harmony import */ var _fanfanlo__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(30452);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(63624);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(73675);
/* harmony import */ var _trigger_action___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(22369);




const s = _fanfanlo__WEBPACK_IMPORTED_MODULE_1__/* .storeUtils */ .P.namespace('project');
const listName = 'list';
const draftName = 'draft';
function loadProjectList() {
    let list = s.read(listName);
    if (!lodash__WEBPACK_IMPORTED_MODULE_0___default().isArray(list) || !list) list = [];
    const res = prepareProjectList(list);
    return res;
}
function loadDraft() {
    let list = s.read(draftName);
    if (!lodash__WEBPACK_IMPORTED_MODULE_0___default().isArray(list) || !list) list = [];
    const res = prepareProjectList(list);
    return res;
}
function prepareProjectList(list) {
    return list.map((p)=>{
        if (!p.triggerActionGroup) p.triggerActionGroup = (0,_trigger_action___WEBPACK_IMPORTED_MODULE_2__/* .createDefultTriggerActionGroup */ .eT)();
        return lodash__WEBPACK_IMPORTED_MODULE_0___default().merge((0,_project__WEBPACK_IMPORTED_MODULE_3__/* .createProjectDefultData */ .k)(), p);
    });
}
const list = (0,_fanfanlo__WEBPACK_IMPORTED_MODULE_4__/* .toParentWatchProxy */ .Lr)(loadProjectList());
const draft = (0,_fanfanlo__WEBPACK_IMPORTED_MODULE_4__/* .toParentWatchProxy */ .Lr)(loadDraft());
function printList() {
    console.log('storage initialize list=', objectCountUtils.getObjectCount(list), list);
    list.forEach((p, index)=>{
        console.log('storage initialize list item=', objectCountUtils.getObjectCount(p), 'index=', index, 'p=', p, 'isproxy=', isProxy(p));
    });
}
// printList()
function printDraft() {
    console.log('storage initialize draft=', objectCountUtils.getObjectCount(draft), draft);
    draft.forEach((p, index)=>{
        console.log('storage initialize draft item=', objectCountUtils.getObjectCount(p), 'index=', index, 'p=', p, 'isproxy=', isProxy(p));
    });
}
// printDraft()
function init() {
    (0,_fanfanlo__WEBPACK_IMPORTED_MODULE_5__/* .watchUpdates */ .c)(list, ()=>{
        s.write(listName, list, true);
    // console.log('list changed', list)
    // printList()
    });
    (0,_fanfanlo__WEBPACK_IMPORTED_MODULE_5__/* .watchUpdates */ .c)(draft, ()=>{
        _fanfanlo__WEBPACK_IMPORTED_MODULE_6__/* .proxyUtils */ .o.runPauseProxyFn(()=>{
            s.write(draftName, draft, true);
        // console.log('draft changed', draft)
        });
    // printDraft()
    });
}
function saveProject(project) {
    const copy = lodash__WEBPACK_IMPORTED_MODULE_0___default().cloneDeep(project);
    let index = list.findIndex((p)=>p.id === copy.id);
    if (index === -1) index = list.length;
    list[index] = copy;
// let draftIndex = draft.findIndex(p=>p.id === copy.id)
// if(draftIndex > -1){
//     draft.splice(draftIndex, 1)
// }
}
function findSavedProject(id) {
    return list.find((p)=>p.id == id);
}
function findProject(id) {
    return list.find((p)=>p.id == id) || draft.find((p)=>p.id == id);
}
function findDraftOrSavedProject(id) {
    return draft.find((p)=>p.id == id) || list.find((p)=>p.id == id);
}
function deleteProject(id) {
    let index = list.findIndex((p)=>p.id === id);
    if (index !== -1) list.splice(index, 1);
    s.write(listName, list, true);
    deleteDraft(id);
}
function addDraft(project) {
    const p = _fanfanlo__WEBPACK_IMPORTED_MODULE_6__/* .proxyUtils */ .o.runPauseProxyFn(()=>{
        return lodash__WEBPACK_IMPORTED_MODULE_0___default().cloneDeep(project);
    });
    let index = draft.findIndex((p)=>p.id === project.id);
    if (index == -1) index = draft.length;
    draft[index] = p;
    return draft[index];
}
function deleteDraft(id) {
    let index = draft.findIndex((p)=>p.id === id);
    if (index !== -1) draft.splice(index, 1);
    s.write(draftName, draft, true);
}
function getListCopy() {
    const res = [
        ...list
    ];
    return res;
}
function getDraftCopy() {
    return [
        ...draft
    ];
}
const projectStore = {
    list,
    init,
    saveProject,
    findProject,
    deleteProject,
    addDraft,
    deleteDraft,
    draft,
    getListCopy,
    getDraftCopy,
    findDraftOrSavedProject,
    findSavedProject
};
if (true) {
    window.getProjectStore = function() {
        return projectStore;
    };
    window.showA = function(s) {
        alert(s || 'hello');
    };
}


/***/ }),

/***/ 73675:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   D: () => (/* binding */ mergeProjectDataToDefultData),
/* harmony export */   k: () => (/* binding */ createProjectDefultData)
/* harmony export */ });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(63624);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _barrel_optimize_names_ulid_ulid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(67131);
/* harmony import */ var _trigger_action_ITriggerActionGroup__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(22369);



// interface IP{
//     name?:string
//     triggerActionGroup:ITriggerActionGroup  
// }
// type A = ExtractedObjectTypeValues<IP>
// let a:A = 'a'
function createProjectDefultData() {
    // console.trace('ppppppppproject createProjectDefultData')
    return {
        type: 'project',
        id: (0,_barrel_optimize_names_ulid_ulid__WEBPACK_IMPORTED_MODULE_1__/* .ulid */ .Z0)(),
        triggerActionGroup: (0,_trigger_action_ITriggerActionGroup__WEBPACK_IMPORTED_MODULE_2__/* .createDefultTriggerActionGroup */ .eT)()
    };
}
function mergeProjectDataToDefultData(data) {
    const result = lodash__WEBPACK_IMPORTED_MODULE_0___default().merge(createProjectDefultData(), data);
    result.triggerActionGroup = (0,_trigger_action_ITriggerActionGroup__WEBPACK_IMPORTED_MODULE_2__/* .mergeTriggerActionGroupToDefultData */ .XR)(result.triggerActionGroup);
    return result;
}


/***/ }),

/***/ 73849:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  n: () => (/* binding */ createDefultTriggerAction)
});

// UNUSED EXPORTS: createTriggerActionUtils

// EXTERNAL MODULE: __barrel_optimize__?names=ulid!=!../../node_modules/.pnpm/ulid@2.4.0/node_modules/ulid/dist/index.esm.js + 1 modules
var index_esm = __webpack_require__(67131);
// EXTERNAL MODULE: ../../libs/droid/project-interface/src/utils/mergeToDefaultData.ts
var mergeToDefaultData = __webpack_require__(82713);
;// ../../libs/droid/project-interface/src/action/IActionGroup.intf.ts


const actionGroupType = 'actionGroup';
function createDefultData() {
    return {
        type: actionGroupType,
        id: (0,index_esm/* ulid */.Z0)(),
        list: [],
        checks: [],
        isSequential: true
    };
}
const actionGroupUtils = {
    type: actionGroupType,
    createDefultData,
    mergeDataToDefultData: (0,mergeToDefaultData/* createMergeToDefaultData */.dV)(createDefultData)
};

;// ../../libs/droid/project-interface/src/trigger/ITriggerGroup.intf.ts


const triggerGroupType = 'triggerGroup';
function ITriggerGroup_intf_createDefultData() {
    return {
        type: triggerGroupType,
        id: (0,index_esm/* ulid */.Z0)(),
        list: [],
        checks: [],
        isSequential: true
    };
}
const triggerGroupUtils = {
    type: triggerGroupType,
    createDefultData: ITriggerGroup_intf_createDefultData,
    mergeDataToDefultData: (0,mergeToDefaultData/* createMergeToDefaultData */.dV)(ITriggerGroup_intf_createDefultData)
};

;// ../../libs/droid/project-interface/src/trigger-action/ITriggerAction.intf.ts




function createDefultTriggerAction() {
    return {
        type: 'triggerAction',
        id: (0,index_esm/* ulid */.Z0)(),
        name: '',
        triggerGroup: triggerGroupUtils.createDefultData(),
        actionGroup: actionGroupUtils.createDefultData()
    };
}
function createTriggerActionUtils(type, createDefultData) {
    return {
        type,
        createDefultData,
        mergeDataToDefultData: createMergeToDefaultData(createDefultData)
    };
}


/***/ }),

/***/ 82713:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   dV: () => (/* binding */ createMergeToDefaultData),
/* harmony export */   rM: () => (/* binding */ mergeToDefaultData),
/* harmony export */   zI: () => (/* binding */ mergeDataWith)
/* harmony export */ });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(63624);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);

function mergeToDefaultData(createDefaultData, data) {
    // const res = _.mergeWith(createDefaultData(),data, (a,b)=>{
    //     if(_.isArray(a) && _.isArray(b)){
    //         return b
    //     }
    // })
    // return res
    return mergeDataWith(createDefaultData(), data);
}
function mergeDataWith(dist, src) {
    return lodash__WEBPACK_IMPORTED_MODULE_0___default().mergeWith(dist, src, (a, b)=>{
        if (lodash__WEBPACK_IMPORTED_MODULE_0___default().isArray(a) && lodash__WEBPACK_IMPORTED_MODULE_0___default().isArray(b)) {
            return b;
        }
    });
}
function createMergeToDefaultData(createDefaultData) {
    return (data)=>mergeToDefaultData(createDefaultData, data);
}


/***/ })

}]);
//# sourceMappingURL=6356-cb267f17a70a1432.js.map