"use strict";
(self["webpackChunk_N_E"] = self["webpackChunk_N_E"] || []).push([[2709],{

/***/ 32709:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   initProjectSystem: () => (/* binding */ initProjectSystem)
/* harmony export */ });
/* harmony import */ var _fanfanlo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(89597);

// 项目管理相关的导入
let appPackagesStoreV2;
let projectStoreV2;
let projectEventUtilsV2;
let initProjectSystemV2;
const fileLog = new _fanfanlo__WEBPACK_IMPORTED_MODULE_0__/* .Log */ .tG(false, 'AppControllerProjectExt_f');
fileLog.pause = true;
fileLog.childrenPaused = true;
/**
 * 项目管理功能初始化（只有需要项目管理功能的应用调用）
 * 包括：项目包管理、项目存储、项目事件等
 */ async function initProjectSystem() {
    fileLog.log('[initProjectSystem] 开始初始化项目管理功能');
    // 动态导入项目管理相关的模块
    if (!appPackagesStoreV2) {
        const appStaticModule = await __webpack_require__.e(/* import() */ 7688).then(__webpack_require__.bind(__webpack_require__, 37688));
        appPackagesStoreV2 = appStaticModule.appPackagesStoreV2;
    }
    if (!projectStoreV2 || !projectEventUtilsV2) {
        const projectV2InterfaceModule = await Promise.all(/* import() */[__webpack_require__.e(6940), __webpack_require__.e(1490), __webpack_require__.e(8143), __webpack_require__.e(9050), __webpack_require__.e(4550), __webpack_require__.e(1469), __webpack_require__.e(4456), __webpack_require__.e(2202)]).then(__webpack_require__.bind(__webpack_require__, 34456));
        projectStoreV2 = projectV2InterfaceModule.projectStore;
        projectEventUtilsV2 = projectV2InterfaceModule.projectEventUtils;
    }
    if (!initProjectSystemV2) {
        const projectV2ExtModule = await Promise.all(/* import() */[__webpack_require__.e(7772), __webpack_require__.e(5241), __webpack_require__.e(6940), __webpack_require__.e(1490), __webpack_require__.e(1322), __webpack_require__.e(5409), __webpack_require__.e(2314), __webpack_require__.e(8143), __webpack_require__.e(9050), __webpack_require__.e(4550), __webpack_require__.e(5475), __webpack_require__.e(1469), __webpack_require__.e(4456), __webpack_require__.e(4100), __webpack_require__.e(4205), __webpack_require__.e(7961)]).then(__webpack_require__.bind(__webpack_require__, 64205));
        initProjectSystemV2 = projectV2ExtModule.initProjectSystem;
    }
    await appPackagesStoreV2.init();
    fileLog.log('[initProjectSystem] appPackagesStoreV2.init() 调用完成');
    projectEventUtilsV2.init();
    projectStoreV2.init();
    initProjectSystemV2();
    // 不阻塞的项目管理器初始化
    initDependOnRemoteProject();
    fileLog.log('[initProjectSystem] 项目管理功能初始化完成');
}
/**
 * 项目管理功能的远程依赖初始化
 */ async function initDependOnRemoteProject() {
    // 使用动态导入避免循环依赖
    try {
        const { projectManager } = await Promise.all(/* import() */[__webpack_require__.e(7772), __webpack_require__.e(5241), __webpack_require__.e(6940), __webpack_require__.e(1490), __webpack_require__.e(1322), __webpack_require__.e(5409), __webpack_require__.e(2314), __webpack_require__.e(8143), __webpack_require__.e(9050), __webpack_require__.e(4550), __webpack_require__.e(5475), __webpack_require__.e(342), __webpack_require__.e(1469), __webpack_require__.e(4456), __webpack_require__.e(4100), __webpack_require__.e(4205), __webpack_require__.e(9538)]).then(__webpack_require__.bind(__webpack_require__, 39538));
        await projectManager.init();
    } catch (error) {
        fileLog.log('[initDependOnRemoteProject] 动态导入 projectManager 失败:', error);
    }
}


/***/ })

}]);
//# sourceMappingURL=2709.c243e17785e64a29.js.map