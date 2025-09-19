(self["webpackChunk_N_E"] = self["webpackChunk_N_E"] || []).push([[3380],{

/***/ 2995:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony import */ var _IEventDispatcher__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(29229);
/* harmony import */ var _IEventDispatcher__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_IEventDispatcher__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (checked) */ if(__webpack_require__.o(_IEventDispatcher__WEBPACK_IMPORTED_MODULE_0__, "storeUtils")) __webpack_require__.d(__webpack_exports__, { storeUtils: function() { return _IEventDispatcher__WEBPACK_IMPORTED_MODULE_0__.storeUtils; } });






 //# sourceMappingURL=index.js.map


/***/ }),

/***/ 5351:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   R: () => (/* binding */ marketsDevScriptLib)
/* harmony export */ });
/* harmony import */ var _droid_android__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5123);
/* harmony import */ var _fanfanlo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(88518);
/* harmony import */ var _fanfanlo__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4887);
/* harmony import */ var _market_lib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(15899);
/* harmony import */ var _market_dev_socket__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(79696);




// 注意marketDevLibData的操作是由devLibInfo来做的
// 一定保持它俩操作的对象是同一个。
const marketDevLibData = (0,_fanfanlo__WEBPACK_IMPORTED_MODULE_1__/* .toProxy */ .I$)({});
let devLibInfo;
// = storeUtils.getNamespaceStoreWithData('devLibInfo', {defData:{}, forceReset:false});
function getMarketScriptDataNsPrefix() {
    return 'market-script-data';
}
function createMarketScriptDataNsPath(ns) {
    return "".concat(getMarketScriptDataNsPrefix(), "/").concat(ns);
}
async function writeNsAllFiles(ns, files) {
    const nsPath = createMarketScriptDataNsPath(ns);
    const oldFiles = _droid_android__WEBPACK_IMPORTED_MODULE_2__/* .autoJsStoreUtils */ .b.read(nsPath) || [];
    for (const name of Object.keys(files)){
        const index = oldFiles.indexOf(name);
        if (index > -1) {
            oldFiles.splice(index, 1);
        }
        const content = files[name];
        _droid_android__WEBPACK_IMPORTED_MODULE_2__/* .autoJsStoreUtils */ .b.write("".concat(nsPath, "/").concat(name), content);
    }
    for (const name of oldFiles){
        removeFile("".concat(nsPath, "/").concat(name));
    }
}
function writeFile(name, content) {}
function readNsAllFiles(ns) {}
function readFile(name) {}
function removeFile(name) {}
function getAllMarkets() {}
function listenDev() {
    _market_dev_socket__WEBPACK_IMPORTED_MODULE_0__/* .marketsDevSocket */ .O.dispatcher.addListener(_market_lib__WEBPACK_IMPORTED_MODULE_3__/* .IMarketDevConnectEventType */ .Dl.getAllScripts, onGetAllScript);
    _market_dev_socket__WEBPACK_IMPORTED_MODULE_0__/* .marketsDevSocket */ .O.dispatcher.addListener(_market_lib__WEBPACK_IMPORTED_MODULE_3__/* .IMarketDevServerEventType */ .GC.update, onFileUpdate);
}
function onGetAllScript(data) {
    // console.log('onGetAllScript=2', data)
    // console.log('devLibInfo.data=', devLibInfo.data)
    devLibInfo.data.allMarketLibData = data;
    // 转为已经代理过的对象
    marketDevLibData.allMarketLibData = devLibInfo.data.allMarketLibData;
// console.log('from onGetAllScript look look id', objectCountUtils.getObjectCount(devLibInfo.data.allMarketLibData.resources))
}
function onFileUpdate(data) {
    if (data.client.resourceType == _market_lib__WEBPACK_IMPORTED_MODULE_3__/* .WatchResourceType */ .um.Html) {
        if (!devLibInfo.data.allMarketLibData) return;
        for (const html of devLibInfo.data.allMarketLibData.htmls){
            if (html.client.path == data.client.path) {
                html.content = data.content;
                return;
            }
        }
    } else if (data.client.resourceType == _market_lib__WEBPACK_IMPORTED_MODULE_3__/* .WatchResourceType */ .um.Js) {
        if (!devLibInfo.data.allMarketLibData) return;
        for(let index = 0; index < devLibInfo.data.allMarketLibData.resources.length; index++){
            const script = devLibInfo.data.allMarketLibData.resources[index];
            if (script.client.path == data.client.path) {
                devLibInfo.data.allMarketLibData.resources[index] = data;
                console.log('market script dev scripts update script', data);
                // devLibInfo.data.allMarketLibData.resources = [...devLibInfo.data.allMarketLibData.resources];
                // console.log('update data', data);
                // console.log('look look id', objectCountUtils.getObjectCount(devLibInfo.data.allMarketLibData.resources), devLibInfo.data.allMarketLibData.resources)
                return;
            }
        }
    } else {
    // unknown resource type
    }
}
let isInitialized = false;
async function init() {
    if (isInitialized) {
        return;
    }
    isInitialized = true;
    listenDev();
    devLibInfo = await _fanfanlo__WEBPACK_IMPORTED_MODULE_4__/* .storeUtils */ .P.getNamespaceStoreWithData('devLibInfo', {
        defData: {},
        forceReset: false
    });
    marketDevLibData.allMarketLibData = devLibInfo.data.allMarketLibData;
}
const marketsDevScriptLib = {
    writeFile,
    readFile,
    writeNsAllFiles,
    readNsAllFiles,
    getAllMarkets,
    init,
    marketDevLibData
};


/***/ }),

/***/ 9825:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Bd: () => (/* reexport safe */ C_work_android_droid_html_website_2024_12_node_modules_pnpm_react_i18next_15_6_0_i18next_24_2_3_typescript_5_7_3_react_dom_19_1_0_react_19_1_0_react_19_1_0_typescript_5_7_3_node_modules_react_i18next_dist_es_index_js__WEBPACK_IMPORTED_MODULE_0__.Bd)
/* harmony export */ });
/* harmony import */ var C_work_android_droid_html_website_2024_12_node_modules_pnpm_react_i18next_15_6_0_i18next_24_2_3_typescript_5_7_3_react_dom_19_1_0_react_19_1_0_react_19_1_0_typescript_5_7_3_node_modules_react_i18next_dist_es_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(50279);



/***/ }),

/***/ 14069:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HQ: () => (/* binding */ getSocketConnectStatusEnumI18n),
/* harmony export */   NC: () => (/* binding */ isValidWebSocketURL),
/* harmony export */   du: () => (/* binding */ SocketConnectStatusEnum)
/* harmony export */ });
/* harmony import */ var validator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(40018);
/* harmony import */ var validator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(validator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(27950);


function isValidWebSocketURL(url) {
    if (!url) return false;
    return validator__WEBPACK_IMPORTED_MODULE_0___default().isURL(url, {
        protocols: [
            'ws',
            'wss'
        ],
        require_protocol: true
    });
}
var SocketConnectStatusEnum = /*#__PURE__*/ function(SocketConnectStatusEnum) {
    SocketConnectStatusEnum["connecting"] = "connecting";
    SocketConnectStatusEnum["connected"] = "connected";
    SocketConnectStatusEnum["disconnecting"] = "disconnecting";
    SocketConnectStatusEnum["disconnected"] = "disconnected";
    SocketConnectStatusEnum["waitRetry"] = "waitRetry";
    return SocketConnectStatusEnum;
}({});
async function getSocketConnectStatusEnumI18n(status) {
    return await (0,_i18n__WEBPACK_IMPORTED_MODULE_1__/* .loadI18nValue */ .y)('fanfanlo/utils/socket/content', "status.".concat(status));
}


/***/ }),

/***/ 15899:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Dl: () => (/* binding */ IMarketDevConnectEventType),
/* harmony export */   GC: () => (/* binding */ IMarketDevServerEventType),
/* harmony export */   um: () => (/* binding */ WatchResourceType)
/* harmony export */ });
/* unused harmony exports ScriptType, IMarketDevClientEmitEventType */
var ScriptType = /*#__PURE__*/ function(ScriptType) {
    // 只有一个脚本执行文件，它只在脚本列表里显示。
    // 如果要修改或者配置参数，它可以嵌入到自己的代码里
    // 或者提供新的页面路径，用router的方式打开
    // 例如router.go({url:'/script-setting', script:'function(){//code is here}', pagePath:'/all-script-setting/#your-namespace/script/script001'})
    // all-script-setting所有第三方统一页面
    // your-namespace 第三方自己的命名空间
    // url 第三方自己的js文件url，它和script二选一，优先script。
    // script 第三方自己纯代码的脚本
    // url可以设置为实时更新版本，script可以作为stable版本使用。
    // script001 第三方自己的脚本名称
    // pagePath可以挂载到你指定的路径下
    ScriptType["Script"] = "script";
    ScriptType["Market"] = "market";
    return ScriptType;
}({});
var WatchResourceType = /*#__PURE__*/ function(WatchResourceType) {
    // 这是一个js文件，加载后直接套在iframe里用即可
    WatchResourceType["Js"] = "js";
    // 这是一个html文件，直接当html加载到iframe里即可.
    WatchResourceType["Html"] = "html";
    return WatchResourceType;
}({});
var IMarketDevConnectEventType = /*#__PURE__*/ function(IMarketDevConnectEventType) {
    IMarketDevConnectEventType["getAllScripts"] = "getAllScripts";
    return IMarketDevConnectEventType;
}({});
// client用socket向server发送的消息，也就是安卓端或者是安卓端的网页向server发送的消息
var IMarketDevClientEmitEventType = /*#__PURE__*/ function(IMarketDevClientEmitEventType) {
    IMarketDevClientEmitEventType["init"] = "init";
    return IMarketDevClientEmitEventType;
}({});
// server用socket向安卓端发送的消息（本地调试也可以认为是向安卓的网页发送消息）
var IMarketDevServerEventType = /*#__PURE__*/ function(IMarketDevServerEventType) {
    IMarketDevServerEventType["update"] = "update";
    return IMarketDevServerEventType;
}({});


/***/ }),

/***/ 17819:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony import */ var _global_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(88664);
/* harmony import */ var _global_index__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_global_index__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (checked) */ if(__webpack_require__.o(_global_index__WEBPACK_IMPORTED_MODULE_0__, "storeUtils")) __webpack_require__.d(__webpack_exports__, { storeUtils: function() { return _global_index__WEBPACK_IMPORTED_MODULE_0__.storeUtils; } });




 //# sourceMappingURL=index.js.map


/***/ }),

/***/ 20623:
/***/ (() => {

"use strict";
 //# sourceMappingURL=index.js.map


/***/ }),

/***/ 23380:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Home)
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/react@19.1.0/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(94513);
// EXTERNAL MODULE: ../../libs/app/ui/src/components/app/AppShell.tsx + 2 modules
var AppShell = __webpack_require__(20939);
// EXTERNAL MODULE: ../../libs/app/ui/src/components/tabbar/Tabbar.tsx
var Tabbar = __webpack_require__(93589);
// EXTERNAL MODULE: ../../libs/droid/project-interface/src/storage/storage.ts
var storage = __webpack_require__(31232);
// EXTERNAL MODULE: ../../libs/fanfanlo/src/watcher/watchUpdates.ts
var watchUpdates = __webpack_require__(4738);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/List/List.js + 1 modules
var List = __webpack_require__(90535);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/ListItem/ListItem.js + 4 modules
var ListItem = __webpack_require__(48853);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/Box/Box.js + 2 modules
var Box_Box = __webpack_require__(6445);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react@19.1.0/node_modules/react/index.js
var react = __webpack_require__(94285);
// EXTERNAL MODULE: __barrel_optimize__?names=useTranslation!=!../../node_modules/.pnpm/react-i18next@15.6.0_i18next@24.2.3_typescript@5.7.3__react-dom@19.1.0_react@19.1.0__react@19.1.0_typescript@5.7.3/node_modules/react-i18next/dist/es/index.js
var es = __webpack_require__(9825);
// EXTERNAL MODULE: ../../libs/droid/project-interface/src/project/IProject.data.ts
var IProject_data = __webpack_require__(73675);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/Button/Button.js + 3 modules
var Button = __webpack_require__(28669);
// EXTERNAL MODULE: ../../node_modules/.pnpm/next@15.3.5_@babel+core@7.28.0_babel-plugin-macros@3.1.0_react-dom@19.1.0_react@19.1.0__react@19.1.0_sass@1.89.2/node_modules/next/router.js
var next_router = __webpack_require__(75640);
;// ../../libs/droid/project/src/project/ui/components/CreateProjectButton.tsx





const CreateProjectButton = ()=>{
    const { t } = (0,es/* useTranslation */.Bd)("droid-project/project/ui/components/content");
    const router = (0,next_router.useRouter)();
    async function onCreateProjectClick() {
        const project = (0,IProject_data/* createProjectDefultData */.k)();
        storage/* projectStore */.D.addDraft(project);
        const path = "/project-editor?id=".concat(project.id);
        await router.prefetch(path);
        router.push(path);
    }
    return /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Button/* default */.A, {
            "data-id": "create-project-button.b79975b3-cc10-4e3e-bc05-478a98c925b5",
            "data-typeof-create-project-id": "create-project-btn-from-ui-components-create-project-button",
            id: "typeof-create-project-id-create-project-btn-from-ui-components-create-project-button",
            onClick: onCreateProjectClick,
            children: t('content.create')
        })
    });
};

// EXTERNAL MODULE: ../../libs/droid/project-interface/src/utils/IChildToProject.intf.ts
var IChildToProject_intf = __webpack_require__(14209);
// EXTERNAL MODULE: ../../libs/droid/project-interface/src/common/project-contexts.tsx
var project_contexts = __webpack_require__(55081);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/Grid2/Grid2.js + 4 modules
var Grid2 = __webpack_require__(95771);
;// ../../libs/droid/project/src/project/utils/projectUtils.ts
const projectUtils = {
    getProjectName: (project)=>{
        return (project === null || project === void 0 ? void 0 : project.localName) || (project === null || project === void 0 ? void 0 : project.name) || (project === null || project === void 0 ? void 0 : project.id.slice((project === null || project === void 0 ? void 0 : project.id.length) - 8)) || '';
    }
};

// EXTERNAL MODULE: ../../libs/fanfanlo/src/mui/dialog/ButtonConfirm.tsx
var ButtonConfirm = __webpack_require__(56257);
;// ../../libs/droid/project/src/project/ui/components/DeleteProjectButton.tsx






function DeleteProjectButton() {
    const { t } = (0,es/* useTranslation */.Bd)("droid-project/project/ui/components/content");
    const project = (0,react.useContext)(project_contexts/* ProjectContext */.vz);
    const projectId = project.id;
    const handleDelete = ()=>{
        storage/* projectStore */.D.deleteProject(projectId);
    };
    const content = /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box_Box/* default */.A, {
        style: {
            textAlign: 'center'
        },
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                style: {
                    color: "#FF0000"
                },
                children: project.name
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)("br", {}),
            /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                children: t('content.confirmDelete')
            })
        ]
    });
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(jsx_runtime.Fragment, {
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(ButtonConfirm/* ButtonConfirm */.b, {
            title: t('content.title'),
            content: content,
            onConfirm: handleDelete,
            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Button/* default */.A, {
                id: "project-simple-title-list-del-btn",
                "data-id": "project-simple-title-list-del-btn",
                children: t('content.delete')
            })
        })
    });
}

;// ../../libs/droid/project/src/project/ui/project/ProjectUI.tsx







function ProjectName(param) {
    let { project } = param;
    const router = (0,next_router.useRouter)();
    const { t } = (0,es/* useTranslation */.Bd)('droid-project/project/ui/project/content');
    function edit() {
        const path = "/project-editor?id=".concat(project.id);
        router.push(path, undefined, {
            shallow: true
        });
    }
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(Grid2/* default */.A, {
        container: true,
        spacing: 2,
        sx: {
            width: "100%"
        },
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Grid2/* default */.A, {
                size: "grow",
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                    children: projectUtils.getProjectName(project)
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)(Grid2/* default */.A, {
                container: true,
                spacing: 2,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Button/* default */.A, {
                        ...IChildToProject_intf/* childToProjectDataUtils */.mR.getProjectElementsId({
                            project
                        }, 'project-list-edit-btn'),
                        "data-listof-project-list-edit-btn-id": project.id,
                        id: "project-simple-title-list-edit-btn",
                        "data-id": "project-simple-title-list-edit-btn",
                        onClick: edit,
                        children: t('content.project.edit')
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(DeleteProjectButton, {})
                ]
            })
        ]
    });
}
function ProjectUI(param) {
    let { project } = param;
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(project_contexts/* ProjectContext */.vz.Provider, {
        value: project,
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Box_Box/* default */.A, {
            sx: {
                width: "100%",
                backgroundColor: "#f0f0f0",
                padding: 1
            },
            "data-id": project.id,
            ...IChildToProject_intf/* childToProjectDataUtils */.mR.getProjectElementsId({
                project
            }),
            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(ProjectName, {
                project: project
            })
        })
    });
}

;// ../../libs/droid/project/src/project/ui/projects/ProjectsInfoItemUI.tsx








function ProjectsTitle() {
    const { t } = (0,es/* useTranslation */.Bd)('droid-project/project/ui/projects/content');
    // const v = use(loadI18nValue('droid-project/project/ui/projects/content', 'content.projects'))
    // console.log('ttttttttttttttttttttttt', v, 'tttt', t)
    return /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)("h4", {
            children: t('content.projects')
        })
    });
}
function ProjectList(param) {
    let { projects } = param;
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(List/* default */.A, {
        sx: {
            width: "100%"
        },
        children: projects.length > 0 && projects.map((project)=>/*#__PURE__*/ (0,jsx_runtime.jsx)(ListItem/* default */.Ay, {
                sx: {
                    width: "100%"
                },
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(ProjectUI, {
                    project: project
                }, project.id)
            }, project.id))
    });
}
function Projects() {
    const { t } = (0,es/* useTranslation */.Bd)('droid-project/project/ui/projects/content');
    const [projects, setProjects] = (0,react.useState)(storage/* projectStore */.D.getListCopy());
    (0,react.useEffect)(()=>{
        const unsub = (0,watchUpdates/* watchUpdates */.c)(storage/* projectStore */.D.list, ()=>{
            setProjects(storage/* projectStore */.D.getListCopy());
        });
        return ()=>{
            unsub();
        };
    }, []);
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box_Box/* default */.A, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(CreateProjectButton, {}),
            projects.length == 0 && /*#__PURE__*/ (0,jsx_runtime.jsx)(Box_Box/* default */.A, {
                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box_Box/* default */.A, {
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                            children: t('content.noProjects')
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                            children: t('content.orFindFromMarket')
                        })
                    ]
                })
            }),
            projects.length > 0 && /*#__PURE__*/ (0,jsx_runtime.jsx)(ProjectList, {
                projects: projects
            })
        ]
    });
}
function ProjectsUI() {
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box_Box/* default */.A, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(ProjectsTitle, {}),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Projects, {})
        ]
    });
}

// EXTERNAL MODULE: ../../libs/fanfanlo/src/i18n/i18n-init.ts + 2 modules
var i18n_init = __webpack_require__(21964);
// EXTERNAL MODULE: ../../libs/droid/android/src/android/AutoWebViewJs.ts + 1 modules
var AutoWebViewJs = __webpack_require__(45921);
// EXTERNAL MODULE: ../../libs/droid/android/src/htmls/accessibility-info-buttons/accessibility-info-buttons.ts
var accessibility_info_buttons = __webpack_require__(65541);
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

// EXTERNAL MODULE: ../../libs/droid/android/src/android/components/Manifest.ts
var Manifest = __webpack_require__(73703);
// EXTERNAL MODULE: ../../libs/fanfanlo/src/watcher/proxyWatch.ts
var proxyWatch = __webpack_require__(88518);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react-i18next@15.6.0_i18next@24.2.3_typescript@5.7.3__react-dom@19.1.0_react@19.1.0__react@19.1.0_typescript@5.7.3/node_modules/react-i18next/dist/es/index.js + 15 modules
var dist_es = __webpack_require__(50279);
// EXTERNAL MODULE: ../../libs/fanfanlo/src/watcher/useProxyWatch.ts
var useProxyWatch = __webpack_require__(45007);
// EXTERNAL MODULE: ../../libs/fanfanlo/src/utils/documentUtils.ts
var documentUtils = __webpack_require__(47684);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react-hot-toast@2.5.2_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/react-hot-toast/dist/index.mjs + 1 modules
var dist = __webpack_require__(22243);
// EXTERNAL MODULE: __barrel_optimize__?names=ulid!=!../../node_modules/.pnpm/ulid@2.4.0/node_modules/ulid/dist/index.esm.js + 1 modules
var index_esm = __webpack_require__(67131);
;// ./src/components/a11y/open-a11y-node-button.tsx







//interface 
const open_a11y_node_button_fileLog = new Log/* Log */.tG(false, 'open-a11y-node-button.tsx');
open_a11y_node_button_fileLog.isChildrenPaused = false;
open_a11y_node_button_fileLog.isPaused = false;
const data = (0,proxyWatch/* toProxy */.I$)({
    opened: false
});
async function onClick() {
    if (data.opened) return;
    const eventType = "a11yNodeSelectActionItem";
    const selectEventIndex = autoWebViewJs.shellListen(androidDispatchers.WebViewJsDispatcher.name, eventType, eventType, false, onSelectNode);
    function onSelectNode(s) {
        clear();
        autoWebViewJs.clipboardSetText(s);
    // const info: IA11yNodeInfo = JSON.parse(s)
    // console.log('fffffffffffffff', s)
    }
    function clear() {
        data.opened = false;
        autoWebViewJs.shellRemoveListen(androidDispatchers.WebViewJsDispatcher.name, selectEventIndex);
        autoWebViewJs.shellRemoveListen(androidDispatchers.Window.name, exitWindowIndex);
        if (exitWebviewJsIndex) {
            autoWebViewJs.removeListen(androidDispatchers.Window.name, parseInt(exitWebviewJsIndex));
        }
    }
    const windowId = ulid();
    openHtmlShowA11yNodeInfoButton(eventType, windowId);
    data.opened = true;
    const et = "window-".concat(windowId, "-dismiss");
    const { javaResultString: exitWebviewJsIndex, errMsg } = autoWebViewJs.listen(androidDispatchers.Window.name, et, et, true);
    if (errMsg) {
        throw new Error(errMsg);
    }
    const exitWindowIndex = autoWebViewJs.shellListen(androidDispatchers.Window.name, et, et, true, ()=>{
        clear();
    });
}
function open_a11y_node_button_askPermissions() {
    const script = '\n    com.fanfanlo.lib.permission.PermissionRequestManager.requestMultiplePermissions([\n        "Manifest.permission.CAMERA",\n        "android.permission.SYSTEM_ALERT_WINDOW",\n        "android.permission.BIND_ACCESSIBILITY_SERVICE"\n    ], "onxxComplete");\n    ';
    autoWebViewJs.callScript(script);
}
function OpenA11yNodeButton() {
    const uiLog = open_a11y_node_button_fileLog.sub(false, 'OpenA11yNodeButton_ui');
    const { t } = (0,dist_es/* useTranslation */.Bd)('homepage/components/a11y/content');
    const [isHidden] = (0,useProxyWatch/* useProxyWatch */.x)(documentUtils/* documentHiddenData */.uA, 'isHidden', documentUtils/* documentHiddenData */.uA.isHidden);
    const [isWaitingPermissions, setIsWaitingPermissions] = (0,react.useState)(false);
    function checkPermissions() {
        const script = '\n        com.fanfanlo.lib.permission.PermissionRequestManager.checkPermissions([\n            "Manifest.permission.CAMERA",\n            "android.permission.SYSTEM_ALERT_WINDOW",\n            "android.permission.BIND_ACCESSIBILITY_SERVICE"\n        ]);\n        ';
        const { javaResultData, javaResultString, errMsg } = AutoWebViewJs/* autoWebViewJs */.yx.callScript(script);
        uiLog.info('checkPermissions_fn javaResultString=', javaResultString, errMsg, javaResultData);
        uiLog.info('checkPermissions_fn javaResultData2 =', JSON.stringify(javaResultData));
        uiLog.info('checkPermissions_fn javaResultData3 =', javaResultData);
        uiLog.info('checkPermissions_fn javaResultData4 =', typeof javaResultData);
        uiLog.info('checkPermissions_fn javaResultData5 =', javaResultData === null || javaResultData === void 0 ? void 0 : javaResultData.grantResults[0], 'and typeof', typeof (javaResultData === null || javaResultData === void 0 ? void 0 : javaResultData.grantResults[0]));
        if (errMsg) {
            throw new Error(errMsg);
        }
    }
    (0,react.useEffect)(()=>{
        if (isHidden) {
            uiLog.info('use effect isHidden', isHidden);
            return;
        }
        if (!isWaitingPermissions) {
            uiLog.info('use effect isWaitingPermissions', isWaitingPermissions);
            return;
        }
    }, [
        isHidden,
        isWaitingPermissions
    ]);
    const [opened] = (0,useProxyWatch/* useProxyWatch */.x)(data, 'opened', data.opened);
    function onClick() {
        checkPermissions();
    }
    function onAskPermissionComplete(stoped, granted, result) {
        uiLog.info('onAskPermissionComplete_fn stoped=', stoped, 'granted=', granted, 'result=', JSON.stringify(result));
        if (!granted) {
            dist/* default */.Ay.error("有未授权的权限，所以无法运行。\n请再次点击按钮运行授权并同意赋权后才能继续执行操作。");
            return;
        }
        const eventType = (0,index_esm/* ulid */.Z0)(); // "a11yNodeSelectActionItem";
        const windowId = (0,index_esm/* ulid */.Z0)();
        uiLog.info('onAskPermissionComplete_fn eventType=', eventType, 'windowId=', windowId);
        (0,accessibility_info_buttons/* openHtmlShowA11yNodeInfoWindow */.Z)(eventType, windowId);
    }
    function askingPermissions() {
        const eventType = (0,index_esm/* ulid */.Z0)(); // "a11yNodeSelectActionItem";
        const windowId = (0,index_esm/* ulid */.Z0)();
        uiLog.info('askingPermissions_fn eventType=', eventType);
        const res = permissionUtils.askPermissions([
            Manifest/* Manifest */._.Permission.CAMERA,
            Manifest/* Manifest */._.Permission.SYSTEM_ALERT_WINDOW,
            Manifest/* Manifest */._.Permission.BIND_ACCESSIBILITY_SERVICE
        ], eventType, onAskPermissionComplete);
        uiLog.info('askingPermissions_fn res=', res);
        if (res.isGranted) {
            onAskPermissionComplete(false, true);
        }
    }
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(jsx_runtime.Fragment, {
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Button/* default */.A, {
            onClick: askingPermissions,
            disabled: false,
            children: t("open-a11y-node-button.btnName")
        })
    });
}

// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/Modal/Modal.js + 4 modules
var Modal = __webpack_require__(44729);
;// ./src/components/android-settings/AndroidSettingsInfo.tsx




function AndroidSettingsInfo() {
    const [permissions, setPermissions] = (0,react.useState)([]);
    const [open, setOpen] = (0,react.useState)(false);
    const onSettingClick = ()=>{
        const script = "\n        com.fanfanlo.lib.utils.PermissionUtils.openAppSettings();";
        AutoWebViewJs/* autoWebViewJs */.yx.callScript(script);
    };
    const handleClose = ()=>{
        setOpen(false);
    };
    (0,react.useEffect)(()=>{
        const script = "\n        var data = com.fanfanlo.lib.utils.PermissionUtils.getGrantedPermissions();\n        var res = com.fanfanlo.lib.utils.JsonUtil.gson2.toJson(data);\n        res;\n        ";
        const res = AutoWebViewJs/* autoWebViewJs */.yx.callScript(script);
        if (res.javaResultData) {
            setPermissions(res.javaResultData);
        }
    }, []);
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Box_Box/* default */.A, {
                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box_Box/* default */.A, {
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                            children: "授权"
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(Button/* default */.A, {
                            onClick: onSettingClick,
                            children: "打开设置页"
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(Button/* default */.A, {
                            onClick: ()=>setOpen(true),
                            children: "已授权"
                        })
                    ]
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Modal/* default */.A, {
                open: open,
                onClose: handleClose,
                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box_Box/* default */.A, {
                    sx: {
                        bgcolor: "background.paper",
                        p: 2
                    },
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box_Box/* default */.A, {
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                    children: "已授权的权限"
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)(Button/* default */.A, {
                                    onClick: handleClose,
                                    children: "关闭"
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)("ul", {
                            children: permissions.map((p, i)=>/*#__PURE__*/ (0,jsx_runtime.jsx)("li", {
                                    style: {
                                        wordBreak: "break-all",
                                        wordWrap: "break-word"
                                    },
                                    children: p.replace('android.permission', '')
                                }, i))
                        })
                    ]
                })
            })
        ]
    });
}

;// ../../libs/droid/android/src/android/scripts/app/app-kill-self.ts

let script = "com.fanfanlo.lib.sys.Sys.killMyApp()";
function appKillSelf() {
    AutoWebViewJs/* AutoWebViewJs */.w6.instance.callScript(script);
}

;// ./src/components/app/kill-self/KillSelf.tsx





function KillSelf() {
    const { t } = (0,dist_es/* useTranslation */.Bd)("homepage/components/app/kill-self/content");
    async function onClick() {
        dist/* default */.Ay.success(t("KillSelf.toast"));
        await new Promise((r)=>setTimeout(r, 1000 * 1));
        appKillSelf();
    }
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(jsx_runtime.Fragment, {
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Button/* default */.A, {
            onClick: onClick,
            children: t("KillSelf.name")
        })
    });
}

// EXTERNAL MODULE: ../../libs/fanfanlo/src/nextjs/loader/Preload.tsx
var Preload = __webpack_require__(39460);
;// ./src/components/markets/AddExternalMarketButton.tsx





function AddExternalMarketButton() {
    const router = (0,next_router.useRouter)();
    const { t } = (0,dist_es/* useTranslation */.Bd)('homepage/components/markets/content');
    (0,react.useEffect)(()=>{
        (0,Preload/* nextPreload */.h)(router, '/add-market');
    }, []);
    function onClick() {
        router.push("/add-market");
    }
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(Button/* default */.A, {
        onClick: onClick,
        children: t("AddExternalMarketButton.name")
    });
}

// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/Menu/Menu.js + 5 modules
var Menu = __webpack_require__(41862);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/MenuItem/MenuItem.js + 2 modules
var MenuItem = __webpack_require__(82797);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+icons-material@6.4.12_@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_re_5ewkm5t5g27pzq5tz62v6ktvti/node_modules/@mui/icons-material/esm/Add.js
var Add = __webpack_require__(56539);
;// ./src/components/markets/main-page-add-buttons/MainPageAddButtons.tsx






const MainPageAddButtons = ()=>{
    const router = (0,next_router.useRouter)();
    const [anchorEl, setAnchorEl] = (0,react.useState)(null);
    const open = Boolean(anchorEl);
    const handleClick = (event)=>{
        setAnchorEl(event.currentTarget);
    };
    const handleClose = ()=>{
        setAnchorEl(null);
    };
    const { t } = (0,dist_es/* useTranslation */.Bd)('homepage/components/markets/main-page-add-buttons/content');
    const menuItems = [
        {
            name: t("content.sub.addScriptByUrl"),
            url: "/listen-editing-market"
        },
        {
            name: t("content.sub.addScriptByText"),
            url: "/add-market-by-text"
        },
        {
            name: t("content.sub.addMarket"),
            url: "/add-market-by-url"
        },
        {
            name: t("content.sub.addMarketByText"),
            url: "/listen-editing-market"
        }
    ];
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Button/* default */.A, {
                variant: "contained",
                startIcon: /*#__PURE__*/ (0,jsx_runtime.jsx)(Add/* default */.A, {}),
                onClick: handleClick,
                children: t("content.add")
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Menu/* default */.A, {
                anchorEl: anchorEl,
                open: open,
                onClose: handleClose,
                children: menuItems.map((item, index)=>/*#__PURE__*/ (0,jsx_runtime.jsx)(MenuItem/* default */.A, {
                        onClick: ()=>{
                            handleClose();
                            router.push(item.url);
                        },
                        children: item.name
                    }, index))
            })
        ]
    });
};

;// ./src/components/page/markets-dev-settings/open-link-button/OpenLinkButton.tsx




function MarketsDevSettingsOpenLinkButton() {
    const router = (0,next_router.useRouter)();
    const { t } = (0,dist_es/* useTranslation */.Bd)('homepage/components/page/markets-dev-settings/open-link-button/content');
    async function onClick() {
        const bl = await router.push("/markets-dev-settings");
    }
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(jsx_runtime.Fragment, {
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Button/* default */.A, {
            onClick: onClick,
            children: t("content.name")
        })
    });
}
function MarketsDevSettingsLineOpenLinkButton() {
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(jsx_runtime.Fragment, {
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Box_Box/* default */.A, {
            sx: {
                mt: 2,
                mb: 2
            },
            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(MarketsDevSettingsOpenLinkButton, {})
        })
    });
}

// EXTERNAL MODULE: ../../libs/im/matrix/src/index.ts + 369 modules
var src = __webpack_require__(69905);
// EXTERNAL MODULE: ../../node_modules/.pnpm/livekit-client@2.15.2_@types+dom-mediacapture-record@1.0.22/node_modules/livekit-client/dist/livekit-client.esm.mjs
var livekit_client_esm = __webpack_require__(89596);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/IconButton/IconButton.js + 1 modules
var IconButton = __webpack_require__(65494);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/Typography/Typography.js
var Typography = __webpack_require__(67079);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/CircularProgress/CircularProgress.js + 1 modules
var CircularProgress = __webpack_require__(95746);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/Alert/Alert.js + 6 modules
var Alert = __webpack_require__(81482);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/Grid/Grid.js + 2 modules
var Grid = __webpack_require__(87924);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+icons-material@6.4.12_@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_re_5ewkm5t5g27pzq5tz62v6ktvti/node_modules/@mui/icons-material/esm/Mic.js
var Mic = __webpack_require__(21607);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+icons-material@6.4.12_@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_re_5ewkm5t5g27pzq5tz62v6ktvti/node_modules/@mui/icons-material/esm/MicOff.js
var MicOff = __webpack_require__(25420);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+icons-material@6.4.12_@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_re_5ewkm5t5g27pzq5tz62v6ktvti/node_modules/@mui/icons-material/esm/Videocam.js
var Videocam = __webpack_require__(88714);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+icons-material@6.4.12_@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_re_5ewkm5t5g27pzq5tz62v6ktvti/node_modules/@mui/icons-material/esm/VideocamOff.js
var VideocamOff = __webpack_require__(59511);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+icons-material@6.4.12_@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_re_5ewkm5t5g27pzq5tz62v6ktvti/node_modules/@mui/icons-material/esm/Refresh.js
var Refresh = __webpack_require__(18531);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+icons-material@6.4.12_@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_re_5ewkm5t5g27pzq5tz62v6ktvti/node_modules/@mui/icons-material/esm/CallEnd.js
var CallEnd = __webpack_require__(83501);
// EXTERNAL MODULE: ./src/libs/mc/main/MainModel.ts
var MainModel = __webpack_require__(28660);
;// ./src/livekit-meeting/MeetingRoom.new.tsx







// 日志记录器
const logger = new Log/* Log */.tG(false, 'livekit-meeting.MeetingRoom');
const uiLogger = logger.sub(false, 'MeetingRoom_ui');
// 视频预设
const VIDEO_PRESET = {
    width: 1280,
    height: 720,
    // @ts-ignore - frameRate is used by LiveKit internally
    frameRate: 24,
    maxBitrate: 3000 * 1000
};
// 类型定义已移至 meetint-room.intf.ts
function getTokenEndpoint() {
    var _mainModel_appConfig_livekit, _mainModel_appConfig;
    if (!((_mainModel_appConfig = MainModel/* mainModel */.N.appConfig) === null || _mainModel_appConfig === void 0 ? void 0 : (_mainModel_appConfig_livekit = _mainModel_appConfig.livekit) === null || _mainModel_appConfig_livekit === void 0 ? void 0 : _mainModel_appConfig_livekit.jwt)) {
        throw new Error('LiveKit JWT endpoint is not configured');
    }
    return "".concat(MainModel/* mainModel */.N.appConfig.livekit.jwt, "/token");
}
// 主组件实现
function MeetingRoomComponent(param, ref) {
    let { roomName, userName, onDisconnect, onError, className = '', style, sx } = param;
    // 全局音视频控制状态
    const [globalMediaState, setGlobalMediaState] = (0,react.useState)({
        isAudioEnabled: true,
        isVideoEnabled: true
    });
    // Refs
    const roomRef = (0,react.useRef)(null);
    const localTracksRef = (0,react.useRef)([]);
    const videoElements = (0,react.useRef)({});
    const audioElements = (0,react.useRef)({});
    const [participantStates, setParticipantStates] = (0,react.useState)({});
    const isUnmountedRef = (0,react.useRef)(false);
    // State
    const [isConnecting, setIsConnecting] = (0,react.useState)(false);
    const [hasConnected, setHasConnected] = (0,react.useState)(false);
    const [error, setError] = (0,react.useState)(null);
    const [isMuted, setIsMuted] = (0,react.useState)(false);
    const [isVideoEnabled, setIsVideoEnabled] = (0,react.useState)(true);
    const [participants, setParticipants] = (0,react.useState)([]);
    // 获取 token
    const fetchToken = (0,react.useCallback)(async (roomName, identity)=>{
        try {
            const response = await fetch(getTokenEndpoint(), {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    room_name: roomName,
                    identity
                })
            });
            if (!response.ok) {
                throw new Error('获取 token 失败');
            }
            const data = await response.json();
            return data.token;
        } catch (error) {
            uiLogger.error('获取 token 失败:', error);
            throw error;
        }
    }, []);
    // 连接到房间
    const connectToRoom = (0,react.useCallback)(async ()=>{
        if (isConnecting || hasConnected) return;
        setIsConnecting(true);
        setError(null);
        try {
            // 1. 获取 token
            const token = await fetchToken(roomName, userName);
            // 2. 创建本地轨道
            const { audioTrack, videoTrack } = await createLocalTracks();
            localTracksRef.current = [
                audioTrack,
                videoTrack
            ];
            // 3. 创建房间连接
            const room = new livekit_client_esm/* Room */.Wv({
                adaptiveStream: true,
                dynacast: true,
                videoCaptureDefaults: {
                    resolution: VIDEO_PRESET
                },
                // @ts-ignore - publishDefaults is a valid option
                publishDefaults: {
                    dtx: true,
                    red: true,
                    forceStereo: false,
                    simulcast: true
                }
            });
            // 4. 设置事件监听
            setupRoomListeners(room);
            // 5. 连接到房间
            await room.connect(MainModel/* mainModel */.N.appConfig.livekit.wsUrl, token, {
                autoSubscribe: true
            });
            // 6. 发布本地轨道
            try {
                await Promise.all([
                    room.localParticipant.publishTrack(audioTrack),
                    room.localParticipant.publishTrack(videoTrack)
                ]);
            } catch (publishError) {
                uiLogger.error('发布轨道失败:', publishError);
            // 即使发布失败也继续，因为可能已经有其他参与者发布了相同的轨道
            }
            // 7. 更新引用和状态
            roomRef.current = room;
            setHasConnected(true);
            // 8. 添加现有远程参与者到状态
            const remoteParticipants = Array.from(room.remoteParticipants.values());
            setParticipants(remoteParticipants);
            // 9. 更新本地参与者状态
            updateParticipantState(room.localParticipant.identity, {
                isAudioEnabled: true,
                isVideoEnabled: true,
                audioTrack,
                videoTrack
            });
            // 10. 为现有远程参与者设置轨道
            remoteParticipants.forEach((participant)=>{
                // 初始化远程参与者状态
                initParticipantState(participant);
                uiLogger.log('已初始化远程参与者状态:', participant.identity);
                // 使用 getTrackPublications 获取所有轨道发布
                participant.getTrackPublications().forEach((publication)=>{
                    if (publication.track && publication.track instanceof livekit_client_esm/* RemoteTrack */.O9) {
                        handleTrackSubscribed(publication.track, publication, participant);
                    }
                });
            });
            // 初始化本地参与者状态
            if (room.localParticipant) {
                initParticipantState(room.localParticipant);
                uiLogger.log('已初始化本地参与者状态:', room.localParticipant.identity);
            }
            uiLogger.log('成功加入会议');
        } catch (error) {
            uiLogger.error('连接房间失败:', error);
            setError('加入会议失败，请检查网络和权限设置');
            // 发生错误时清理资源
            cleanupTracks(localTracksRef.current);
            localTracksRef.current = [];
            if (roomRef.current) {
                try {
                    await roomRef.current.disconnect();
                } catch (e) {
                    uiLogger.error('断开连接时出错:', e);
                }
                roomRef.current = null;
            }
        } finally{
            setIsConnecting(false);
        }
    }, [
        roomName,
        userName,
        isConnecting,
        hasConnected,
        fetchToken
    ]);
    // 创建本地音视频轨道
    const createLocalTracks = (0,react.useCallback)(async ()=>{
        try {
            const [audioTrack, videoTrack] = await Promise.all([
                (0,livekit_client_esm/* createLocalAudioTrack */.rV)({
                    echoCancellation: true,
                    noiseSuppression: true,
                    autoGainControl: true
                }),
                (0,livekit_client_esm/* createLocalVideoTrack */.yn)({
                    resolution: {
                        width: 1280,
                        height: 720,
                        frameRate: 24
                    }
                })
            ]);
            return {
                audioTrack,
                videoTrack
            };
        } catch (error) {
            uiLogger.error('创建本地轨道失败:', error);
            throw error;
        }
    }, []);
    // 清理轨道
    const cleanupTracks = (0,react.useCallback)((tracks)=>{
        tracks.forEach((track)=>{
            track.stop();
            track.detach();
        });
    }, []);
    // 跟踪已处理的轨道元素
    const trackElementsRef = (0,react.useRef)({});
    const videoElementsRef = (0,react.useRef)({});
    const audioElementsRef = (0,react.useRef)({});
    // 更新参与者状态
    const updateParticipantState = (0,react.useCallback)((identity, state)=>{
        setParticipantStates((prev)=>({
                ...prev,
                [identity]: {
                    ...prev[identity] || {
                        isAudioEnabled: true,
                        isVideoEnabled: true,
                        isAudioEnabledGlobal: true,
                        isVideoEnabledGlobal: true
                    },
                    ...state
                }
            }));
    }, []);
    // 处理轨道订阅
    const handleTrackSubscribed = (0,react.useCallback)((track, publication, participant)=>{
        if (!track) return ()=>{};
        const { identity } = participant;
        const isVideoTrack = track.kind === livekit_client_esm/* Track */.CC.Kind.Video;
        uiLogger.log("处理 ".concat(track.kind, " 轨道订阅:"), identity, track);
        // 更新轨道状态的函数
        const updateTrackState = ()=>{
            const isMuted = track.isMuted;
            const stateUpdate = {};
            if (track.kind === livekit_client_esm/* Track */.CC.Kind.Audio) {
                stateUpdate.isAudioEnabled = !isMuted;
            } else if (track.kind === livekit_client_esm/* Track */.CC.Kind.Video) {
                stateUpdate.isVideoEnabled = !isMuted;
            }
            updateParticipantState(identity, stateUpdate);
            // 强制触发重新渲染以确保 ParticipantVideo 组件更新
            if (isVideoTrack) {
                setParticipants((prev)=>[
                        ...prev
                    ]);
            }
        };
        // 监听轨道静音/取消静音事件
        track.on('muted', updateTrackState);
        track.on('unmuted', updateTrackState);
        // 初始状态更新
        updateTrackState();
        // 强制更新参与者列表以触发重新渲染
        // 这确保了即使没有状态变化，组件也会检查新的轨道
        setParticipants((prev)=>{
            const participantExists = prev.some((p)=>p.identity === identity);
            if (!participantExists) {
                return [
                    ...prev,
                    participant
                ];
            }
            return [
                ...prev
            ];
        });
        // 清理函数
        return ()=>{
            track.off('muted', updateTrackState);
            track.off('unmuted', updateTrackState);
        };
    }, [
        updateParticipantState
    ]);
    // 设置房间事件监听
    const setupRoomListeners = (0,react.useCallback)((room)=>{
        const eventHandlers = {
            // 处理远程参与者连接
            participantConnected: (participant)=>{
                if (!(participant instanceof livekit_client_esm/* RemoteParticipant */.qI)) return;
                uiLogger.log('远程参与者已连接:', participant.identity);
                // 添加新参与者到状态（使用函数式更新确保不重复添加）
                setParticipants((prev)=>{
                    // 如果已经存在该参与者，则返回原数组
                    if (prev.some((p)=>p.identity === participant.identity)) {
                        return prev;
                    }
                    return [
                        ...prev,
                        participant
                    ];
                });
                // 监听参与者的轨道发布
                const handleTrackPublished = (publication)=>{
                    uiLogger.log('远程参与者发布轨道:', publication.kind, participant.identity);
                    if (publication.track) {
                        handleTrackSubscribed(publication.track, publication, participant);
                    } else {
                        publication.once('subscribed', (track)=>{
                            handleTrackSubscribed(track, publication, participant);
                        });
                    }
                };
                // 添加轨道发布监听
                participant.on('trackPublished', handleTrackPublished);
                // 处理已经发布的轨道
                participant.trackPublications.forEach((publication)=>{
                    if (publication.track) {
                        handleTrackSubscribed(publication.track, publication, participant);
                    }
                });
                // 返回清理函数
                return ()=>{
                    participant.off('trackPublished', handleTrackPublished);
                };
            },
            // 处理参与者断开连接
            participantDisconnected: (participant)=>{
                uiLogger.log('远程参与者已断开连接:', participant.identity);
                setParticipants((prev)=>{
                    const newParticipants = prev.filter((p)=>p.identity !== participant.identity);
                    uiLogger.log('更新后的参与者列表:', newParticipants.map((p)=>p.identity));
                    return newParticipants;
                });
            },
            // 处理轨道订阅
            trackSubscribed: (track, publication, participant)=>{
                if (!track) return;
                uiLogger.log('轨道订阅成功:', track.kind, participant.identity);
                // 处理远程轨道订阅
                handleTrackSubscribed(track, publication, participant);
            },
            disconnected: (reason)=>{
                var _reason_toString;
                const reasonStr = (reason === null || reason === void 0 ? void 0 : (_reason_toString = reason.toString) === null || _reason_toString === void 0 ? void 0 : _reason_toString.call(reason)) || '未知原因';
                uiLogger.log('已从房间断开连接，原因:', reasonStr);
                // 更新状态但不调用 handleDisconnect，因为可能是我们主动断开的
                setHasConnected(false);
                setParticipants([]);
                setError(null);
            },
            reconnecting: ()=>{
                uiLogger.log('正在重新连接到房间...');
                setError('正在重新连接...');
            },
            reconnected: ()=>{
                uiLogger.log('已重新连接到房间');
                setError(null);
            }
        };
        // 添加事件监听
        room.on(livekit_client_esm/* RoomEvent */.u9.Disconnected, eventHandlers.disconnected).on(livekit_client_esm/* RoomEvent */.u9.Reconnecting, eventHandlers.reconnecting).on(livekit_client_esm/* RoomEvent */.u9.Reconnected, eventHandlers.reconnected).on(livekit_client_esm/* RoomEvent */.u9.ParticipantConnected, eventHandlers.participantConnected).on(livekit_client_esm/* RoomEvent */.u9.ParticipantDisconnected, eventHandlers.participantDisconnected).on(livekit_client_esm/* RoomEvent */.u9.TrackSubscribed, eventHandlers.trackSubscribed);
        // 返回清理函数
        return ()=>{
            if (!room) return;
            room.off(livekit_client_esm/* RoomEvent */.u9.Disconnected, eventHandlers.disconnected).off(livekit_client_esm/* RoomEvent */.u9.Reconnecting, eventHandlers.reconnecting).off(livekit_client_esm/* RoomEvent */.u9.Reconnected, eventHandlers.reconnected).off(livekit_client_esm/* RoomEvent */.u9.ParticipantConnected, eventHandlers.participantConnected).off(livekit_client_esm/* RoomEvent */.u9.ParticipantDisconnected, eventHandlers.participantDisconnected).off(livekit_client_esm/* RoomEvent */.u9.TrackSubscribed, eventHandlers.trackSubscribed);
            // 确保返回 void
            return undefined;
        };
    }, [
        handleTrackSubscribed
    ]);
    // 离开会议
    const leaveMeeting = (0,react.useCallback)(async ()=>{
        uiLogger.log('正在离开会议...');
        try {
            // 停止所有本地轨道
            cleanupTracks(localTracksRef.current);
            // 断开房间连接
            if (roomRef.current) {
                await roomRef.current.disconnect();
                roomRef.current = null;
            }
            // 更新状态
            setHasConnected(false);
            setParticipants([]);
            setError(null);
            // 清除所有媒体元素
            Object.values(videoElements.current).forEach((el)=>el && el.remove());
            Object.values(audioElements.current).forEach((el)=>el && el.remove());
            videoElements.current = {};
            audioElements.current = {};
            // 调用断开连接回调
            if (onDisconnect) {
                onDisconnect();
            }
            uiLogger.log('已成功离开会议');
        } catch (error) {
            uiLogger.error('离开会议时出错:', error);
            setError('离开会议时出错，请重试');
        }
    }, [
        onDisconnect
    ]);
    // 清理函数
    const cleanup = (0,react.useCallback)(async function() {
        let isUnmounting = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : false;
        // 如果是组件卸载，设置卸载标志
        if (isUnmounting) {
            isUnmountedRef.current = true;
        }
        uiLogger.log('执行清理...');
        if (!roomRef.current) return;
        const localParticipant = roomRef.current.localParticipant;
        const audioTrack = localTracksRef.current.find((t)=>t.kind === livekit_client_esm/* Track */.CC.Kind.Audio);
        const videoTrack = localTracksRef.current.find((t)=>t.kind === livekit_client_esm/* Track */.CC.Kind.Video);
        try {
            if (audioTrack) {
                await audioTrack.stop();
            }
            if (videoTrack) {
                await videoTrack.stop();
            }
        } catch (error) {
            uiLogger.error('停止轨道失败:', error);
        }
        // 清理轨道
        cleanupTracks(localTracksRef.current);
        localTracksRef.current = [];
        // 清理房间
        if (roomRef.current) {
            roomRef.current.disconnect();
            roomRef.current = null;
        }
        // 清理状态
        setHasConnected(false);
        setParticipants([]);
        setParticipantStates({});
    }, []);
    // 更新全局媒体状态
    const updateGlobalMediaState = (0,react.useCallback)((audioEnabled, videoEnabled)=>{
        setGlobalMediaState((prev)=>({
                ...prev,
                isAudioEnabled: audioEnabled,
                isVideoEnabled: videoEnabled
            }));
    }, []);
    // 切换静音状态（全局控制）
    const toggleMute = (0,react.useCallback)(async ()=>{
        if (!roomRef.current) return;
        const localParticipant = roomRef.current.localParticipant;
        const audioTrack = localTracksRef.current.find((t)=>t.kind === livekit_client_esm/* Track */.CC.Kind.Audio);
        if (!audioTrack) return;
        try {
            // 全局按钮基于全局状态进行切换
            const newGlobalAudioState = !globalMediaState.isAudioEnabled;
            // 同步更新本地麦克风的物理状态
            if (newGlobalAudioState) {
                await audioTrack.unmute();
            } else {
                await audioTrack.mute();
            }
            // 更新本地UI状态
            setIsMuted(!newGlobalAudioState);
            updateParticipantState(localParticipant.identity, {
                isAudioEnabled: newGlobalAudioState
            });
            // 更新全局音频状态，这将影响所有参与者的有效状态
            updateGlobalMediaState(newGlobalAudioState, globalMediaState.isVideoEnabled);
        } catch (error) {
            uiLogger.error('切换静音状态失败:', error);
            setError('切换麦克风状态失败');
        }
    }, [
        globalMediaState,
        updateParticipantState,
        updateGlobalMediaState
    ]);
    // 切换视频状态（全局控制）
    const toggleVideo = (0,react.useCallback)(async ()=>{
        if (!roomRef.current) return;
        const localParticipant = roomRef.current.localParticipant;
        const videoTrack = localTracksRef.current.find((t)=>t.kind === livekit_client_esm/* Track */.CC.Kind.Video);
        if (!videoTrack) return;
        try {
            // 全局按钮基于全局状态进行切换
            const newGlobalVideoState = !globalMediaState.isVideoEnabled;
            // 同步更新本地摄像头的物理状态
            if (newGlobalVideoState) {
                await videoTrack.unmute();
            } else {
                await videoTrack.mute();
            }
            // 更新本地UI状态
            setIsVideoEnabled(newGlobalVideoState);
            updateParticipantState(localParticipant.identity, {
                isVideoEnabled: newGlobalVideoState
            });
            // 更新全局视频状态，这将影响所有参与者的有效状态
            updateGlobalMediaState(globalMediaState.isAudioEnabled, newGlobalVideoState);
        } catch (error) {
            uiLogger.error('切换视频状态失败:', error);
            setError('切换摄像头状态失败');
        }
    }, [
        globalMediaState,
        updateParticipantState,
        updateGlobalMediaState
    ]);
    // 切换本地静音状态（仅本地tile）
    const handleLocalMuteToggle = (0,react.useCallback)(async ()=>{
        if (!roomRef.current) return;
        const localParticipant = roomRef.current.localParticipant;
        const audioTrack = localTracksRef.current.find((t)=>t.kind === livekit_client_esm/* Track */.CC.Kind.Audio);
        if (!audioTrack) return;
        try {
            const newMutedState = !isMuted;
            if (newMutedState) {
                await audioTrack.mute();
            } else {
                await audioTrack.unmute();
            }
            setIsMuted(newMutedState);
            updateParticipantState(localParticipant.identity, {
                isAudioEnabled: !newMutedState
            });
        } catch (error) {
            uiLogger.error('切换本地静音状态失败:', error);
            setError('切换麦克风状态失败');
        }
    }, [
        isMuted,
        updateParticipantState
    ]);
    // 切换本地视频状态（仅本地tile）
    const handleLocalVideoToggle = (0,react.useCallback)(async ()=>{
        if (!roomRef.current) return;
        const localParticipant = roomRef.current.localParticipant;
        const videoTrack = localTracksRef.current.find((t)=>t.kind === livekit_client_esm/* Track */.CC.Kind.Video);
        if (!videoTrack) return;
        try {
            const newVideoState = !isVideoEnabled;
            if (newVideoState) {
                await videoTrack.unmute();
            } else {
                await videoTrack.mute();
            }
            setIsVideoEnabled(newVideoState);
            updateParticipantState(localParticipant.identity, {
                isVideoEnabled: newVideoState
            });
        } catch (error) {
            uiLogger.error('切换本地视频状态失败:', error);
            setError('切换摄像头状态失败');
        }
    }, [
        isVideoEnabled,
        updateParticipantState
    ]);
    // 组件卸载时清理资源
    (0,react.useEffect)(()=>{
        return ()=>{
            // 清理资源
            cleanup(true);
        };
    }, []);
    // 获取参与者状态
    const getParticipantState = (0,react.useCallback)((identity)=>{
        return participantStates[identity] || {
            isAudioEnabled: true,
            isVideoEnabled: true,
            isAudioEnabledGlobal: true,
            isVideoEnabledGlobal: true
        };
    }, [
        participantStates
    ]);
    // 初始化参与者状态
    const initParticipantState = (0,react.useCallback)((participant)=>{
        var _participant_getTrackPublications_find, _participant_getTrackPublications_find1;
        const state = getParticipantState(participant.identity);
        // 更新音频状态
        const audioTrack = (_participant_getTrackPublications_find = participant.getTrackPublications().find((pub)=>pub.kind === livekit_client_esm/* Track */.CC.Kind.Audio)) === null || _participant_getTrackPublications_find === void 0 ? void 0 : _participant_getTrackPublications_find.track;
        // 更新视频状态
        const videoTrack = (_participant_getTrackPublications_find1 = participant.getTrackPublications().find((pub)=>pub.kind === livekit_client_esm/* Track */.CC.Kind.Video)) === null || _participant_getTrackPublications_find1 === void 0 ? void 0 : _participant_getTrackPublications_find1.track;
        updateParticipantState(participant.identity, {
            ...state,
            isAudioEnabled: audioTrack ? !audioTrack.isMuted : false,
            isVideoEnabled: videoTrack ? !videoTrack.isMuted : false
        });
    }, [
        getParticipantState,
        updateParticipantState
    ]);
    // 切换参与者的音频状态
    const handleToggleAudio = (0,react.useCallback)((participant)=>{
        const currentState = participantStates[participant.identity] || {
            isAudioEnabled: true,
            isVideoEnabled: true,
            isAudioEnabledGlobal: true,
            isVideoEnabledGlobal: true
        };
        updateParticipantState(participant.identity, {
            ...currentState,
            isAudioEnabled: !currentState.isAudioEnabled
        });
    }, [
        participantStates,
        updateParticipantState
    ]);
    // 切换参与者的视频状态
    const handleToggleVideo = (0,react.useCallback)((participant)=>{
        const currentState = participantStates[participant.identity] || {
            isAudioEnabled: true,
            isVideoEnabled: true,
            isAudioEnabledGlobal: true,
            isVideoEnabledGlobal: true
        };
        updateParticipantState(participant.identity, {
            ...currentState,
            isVideoEnabled: !currentState.isVideoEnabled
        });
    }, [
        participantStates,
        updateParticipantState
    ]);
    // 获取参与者的实际媒体状态（考虑全局覆盖）
    const getEffectiveMediaState = (0,react.useCallback)((participantId)=>{
        const state = participantStates[participantId];
        if (!state) return {
            isAudioEnabled: true,
            isVideoEnabled: true
        };
        return {
            isAudioEnabled: globalMediaState.isAudioEnabled ? state.isAudioEnabled : false,
            isVideoEnabled: globalMediaState.isVideoEnabled ? state.isVideoEnabled : false
        };
    }, [
        globalMediaState,
        participantStates
    ]);
    // 参与者视频组件
    const ParticipantVideo = /*#__PURE__*/ react.memo((param)=>{
        let { participant, isLocal, isVideoEnabled } = param;
        const videoRef = (0,react.useRef)(null);
        const [videoTrack, setVideoTrack] = (0,react.useState)(null);
        // 处理视频轨道变化
        (0,react.useEffect)(()=>{
            if (!participant) return;
            // 查找现有的视频轨道发布
            const videoPublication = Array.from(participant.trackPublications.values()).find((pub)=>pub.kind === livekit_client_esm/* Track */.CC.Kind.Video);
            // 如果轨道已存在，则直接设置
            if (videoPublication && videoPublication.track) {
                setVideoTrack(videoPublication.track);
            }
            // 当订阅轨道时处理
            const handleTrackSubscribed = (track)=>{
                if (track.kind === livekit_client_esm/* Track */.CC.Kind.Video) {
                    setVideoTrack(track);
                }
            };
            // 当取消订阅轨道时处理
            const handleTrackUnsubscribed = (track)=>{
                if (track.kind === livekit_client_esm/* Track */.CC.Kind.Video) {
                    setVideoTrack(null);
                }
            };
            // 添加事件监听
            participant.on(livekit_client_esm/* RoomEvent */.u9.TrackSubscribed, handleTrackSubscribed);
            participant.on(livekit_client_esm/* RoomEvent */.u9.TrackUnsubscribed, handleTrackUnsubscribed);
            // 清理函数
            return ()=>{
                participant.off(livekit_client_esm/* RoomEvent */.u9.TrackSubscribed, handleTrackSubscribed);
                participant.off(livekit_client_esm/* RoomEvent */.u9.TrackUnsubscribed, handleTrackUnsubscribed);
            };
        }, [
            participant
        ]);
        // 处理视频元素附加/分离
        (0,react.useEffect)(()=>{
            const videoElement = videoRef.current;
            if (!videoElement || !videoTrack) return;
            // 清理现有视频源
            while(videoElement.firstChild){
                videoElement.removeChild(videoElement.firstChild);
            }
            // 附加视频轨道
            if (isVideoEnabled) {
                videoTrack.attach(videoElement);
            }
            return ()=>{
                if (videoTrack) {
                    videoTrack.detach(videoElement);
                }
            };
        }, [
            videoTrack,
            isVideoEnabled
        ]);
        return /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box_Box/* default */.A, {
            sx: {
                width: '100%',
                aspectRatio: '16/9',
                bgcolor: 'grey.800',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                position: 'relative'
            },
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsx)("video", {
                    ref: videoRef,
                    autoPlay: true,
                    playsInline: true,
                    muted: isLocal,
                    style: {
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        display: isVideoEnabled ? 'block' : 'none'
                    }
                }),
                !isVideoEnabled && /*#__PURE__*/ (0,jsx_runtime.jsx)(Box_Box/* default */.A, {
                    sx: {
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        bgcolor: 'grey.900'
                    },
                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Box_Box/* default */.A, {
                        sx: {
                            width: 80,
                            height: 80,
                            borderRadius: '50%',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            bgcolor: 'primary.main',
                            color: 'white',
                            fontSize: 32,
                            fontWeight: 'bold'
                        },
                        children: participant.identity.charAt(0).toUpperCase()
                    })
                })
            ]
        });
    });
    // 参与者音频组件
    const ParticipantAudio = /*#__PURE__*/ react.memo((param)=>{
        let { participant, isMuted } = param;
        const audioRef = (0,react.useRef)(null);
        const [audioTrack, setAudioTrack] = (0,react.useState)(null);
        (0,react.useEffect)(()=>{
            if (!participant) return;
            const handleTrackSubscribed = (track)=>{
                if (track.kind === livekit_client_esm/* Track */.CC.Kind.Audio) {
                    setAudioTrack(track);
                }
            };
            const handleTrackUnsubscribed = (track)=>{
                if (track.kind === livekit_client_esm/* Track */.CC.Kind.Audio) {
                    setAudioTrack(null);
                }
            };
            // 查找现有的音频轨道
            const audioPublication = Array.from(participant.trackPublications.values()).find((pub)=>pub.kind === livekit_client_esm/* Track */.CC.Kind.Audio);
            if (audioPublication && audioPublication.track) {
                setAudioTrack(audioPublication.track);
            }
            participant.on(livekit_client_esm/* RoomEvent */.u9.TrackSubscribed, handleTrackSubscribed);
            participant.on(livekit_client_esm/* RoomEvent */.u9.TrackUnsubscribed, handleTrackUnsubscribed);
            return ()=>{
                participant.off(livekit_client_esm/* RoomEvent */.u9.TrackSubscribed, handleTrackSubscribed);
                participant.off(livekit_client_esm/* RoomEvent */.u9.TrackUnsubscribed, handleTrackUnsubscribed);
            };
        }, [
            participant
        ]);
        (0,react.useEffect)(()=>{
            const audioElement = audioRef.current;
            if (audioElement && audioTrack) {
                audioTrack.attach(audioElement);
                // 远程音频默认静音，除非用户手动取消
                audioElement.muted = isMuted;
                return ()=>{
                    audioTrack.detach(audioElement);
                };
            }
        }, [
            audioTrack,
            isMuted
        ]);
        return /*#__PURE__*/ (0,jsx_runtime.jsx)("audio", {
            ref: audioRef,
            autoPlay: true,
            playsInline: true
        });
    });
    // 渲染参与者
    const renderParticipant = (0,react.useCallback)((participant, isLocal)=>{
        const effectiveState = getEffectiveMediaState(participant.identity);
        return /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box_Box/* default */.A, {
            sx: {
                position: 'relative',
                borderRadius: 2,
                overflow: 'hidden',
                bgcolor: 'background.paper',
                boxShadow: 1
            },
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsx)(ParticipantVideo, {
                    participant: participant,
                    isLocal: isLocal,
                    isVideoEnabled: effectiveState.isVideoEnabled
                }),
                !isLocal && /*#__PURE__*/ (0,jsx_runtime.jsx)(ParticipantAudio, {
                    participant: participant,
                    isMuted: !effectiveState.isAudioEnabled
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box_Box/* default */.A, {
                    sx: {
                        position: 'absolute',
                        bottom: 0,
                        left: 0,
                        right: 0,
                        p: 1,
                        bgcolor: 'rgba(0, 0, 0, 0.6)',
                        display: 'flex',
                        justifyContent: 'center',
                        gap: 1
                    },
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(IconButton/* default */.A, {
                            size: "small",
                            color: effectiveState.isAudioEnabled ? 'primary' : 'error',
                            onClick: ()=>handleToggleAudio(participant),
                            children: effectiveState.isAudioEnabled ? /*#__PURE__*/ (0,jsx_runtime.jsx)(Mic/* default */.A, {}) : /*#__PURE__*/ (0,jsx_runtime.jsx)(MicOff/* default */.A, {})
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(IconButton/* default */.A, {
                            size: "small",
                            color: effectiveState.isVideoEnabled ? 'primary' : 'error',
                            onClick: ()=>handleToggleVideo(participant),
                            children: effectiveState.isVideoEnabled ? /*#__PURE__*/ (0,jsx_runtime.jsx)(Videocam/* default */.A, {}) : /*#__PURE__*/ (0,jsx_runtime.jsx)(VideocamOff/* default */.A, {})
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsxs)(Typography/* default */.A, {
                            variant: "caption",
                            color: "white",
                            children: [
                                participant.identity,
                                " ",
                                isLocal && '(你)'
                            ]
                        }),
                        ")",
                        isLocal && /*#__PURE__*/ (0,jsx_runtime.jsx)(IconButton/* default */.A, {
                            size: "small",
                            onClick: handleLocalMuteToggle,
                            color: isMuted ? 'error' : 'primary',
                            sx: {
                                color: 'white'
                            },
                            title: isMuted ? '取消静音' : '静音',
                            children: isMuted ? /*#__PURE__*/ (0,jsx_runtime.jsx)(MicOff/* default */.A, {}) : /*#__PURE__*/ (0,jsx_runtime.jsx)(Mic/* default */.A, {})
                        }),
                        isLocal && /*#__PURE__*/ (0,jsx_runtime.jsx)(IconButton/* default */.A, {
                            size: "small",
                            onClick: handleLocalVideoToggle,
                            color: isVideoEnabled ? 'primary' : 'error',
                            sx: {
                                color: 'white'
                            },
                            title: isVideoEnabled ? '关闭摄像头' : '开启摄像头',
                            children: isVideoEnabled ? /*#__PURE__*/ (0,jsx_runtime.jsx)(Videocam/* default */.A, {}) : /*#__PURE__*/ (0,jsx_runtime.jsx)(VideocamOff/* default */.A, {})
                        })
                    ]
                })
            ]
        }, participant.identity);
    }, [
        isMuted,
        isVideoEnabled,
        getEffectiveMediaState,
        handleToggleAudio,
        handleToggleVideo,
        handleLocalMuteToggle,
        handleLocalVideoToggle
    ]);
    // 渲染加载状态
    if (isConnecting) {
        return /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box_Box/* default */.A, {
            sx: {
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                height: '100%',
                p: 3
            },
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsx)(CircularProgress/* default */.A, {}),
                /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.A, {
                    variant: "body1",
                    sx: {
                        mt: 2
                    },
                    children: "正在连接会议..."
                })
            ]
        });
    }
    // 渲染错误状态
    if (error) {
        return /*#__PURE__*/ (0,jsx_runtime.jsxs)(Alert/* default */.A, {
            severity: "error",
            sx: {
                m: 2
            },
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.A, {
                    variant: "body1",
                    children: error
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)(Button/* default */.A, {
                    variant: "contained",
                    color: "primary",
                    onClick: connectToRoom,
                    startIcon: /*#__PURE__*/ (0,jsx_runtime.jsx)(Refresh/* default */.A, {}),
                    sx: {
                        mt: 1
                    },
                    children: "重试连接"
                })
            ]
        });
    }
    // 渲染主界面
    function renderMainContent() {
        // 如果已经连接，显示会议界面
        if (hasConnected && roomRef.current) {
            return /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box_Box/* default */.A, {
                className: className,
                sx: {
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column'
                },
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Box_Box/* default */.A, {
                        sx: {
                            flex: 1,
                            overflow: 'auto',
                            p: 2
                        },
                        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(Grid/* default */.Ay, {
                            container: true,
                            spacing: 2,
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime.jsx)(Grid/* default */.Ay, {
                                    item: true,
                                    xs: 12,
                                    md: participants.length === 0 ? 12 : 6,
                                    children: renderParticipant(roomRef.current.localParticipant, true)
                                }),
                                participants.map(function(participant) {
                                    return /*#__PURE__*/ (0,jsx_runtime.jsx)(Grid/* default */.Ay, {
                                        item: true,
                                        xs: 12,
                                        md: 6,
                                        children: renderParticipant(participant, false)
                                    }, participant.identity);
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box_Box/* default */.A, {
                        sx: {
                            p: 2,
                            borderTop: '1px solid',
                            borderColor: 'divider',
                            display: 'flex',
                            justifyContent: 'center',
                            gap: 2
                        },
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(Button/* default */.A, {
                                variant: "contained",
                                color: !globalMediaState.isAudioEnabled ? 'error' : 'primary',
                                onClick: toggleMute,
                                startIcon: !globalMediaState.isAudioEnabled ? /*#__PURE__*/ (0,jsx_runtime.jsx)(MicOff/* default */.A, {}) : /*#__PURE__*/ (0,jsx_runtime.jsx)(Mic/* default */.A, {}),
                                children: !globalMediaState.isAudioEnabled ? '取消静音' : '静音'
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(Button/* default */.A, {
                                variant: "contained",
                                color: !globalMediaState.isVideoEnabled ? 'error' : 'primary',
                                onClick: toggleVideo,
                                startIcon: globalMediaState.isVideoEnabled ? /*#__PURE__*/ (0,jsx_runtime.jsx)(Videocam/* default */.A, {}) : /*#__PURE__*/ (0,jsx_runtime.jsx)(VideocamOff/* default */.A, {}),
                                children: globalMediaState.isVideoEnabled ? '关闭摄像头' : '开启摄像头'
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(Button/* default */.A, {
                                variant: "contained",
                                color: "error",
                                onClick: leaveMeeting,
                                startIcon: /*#__PURE__*/ (0,jsx_runtime.jsx)(CallEnd/* default */.A, {}),
                                children: "离开会议"
                            })
                        ]
                    })
                ]
            });
        }
        // 未连接时显示连接界面
        return /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box_Box/* default */.A, {
            className: className,
            sx: {
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                p: 3
            },
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.A, {
                    variant: "h6",
                    gutterBottom: true,
                    children: "准备加入会议"
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsxs)(Button/* default */.A, {
                    variant: "contained",
                    color: "primary",
                    onClick: connectToRoom,
                    disabled: isConnecting,
                    startIcon: /*#__PURE__*/ (0,jsx_runtime.jsx)(Videocam/* default */.A, {}),
                    sx: {
                        mt: 2
                    },
                    children: [
                        "加入会议",
                        isConnecting && /*#__PURE__*/ (0,jsx_runtime.jsx)(CircularProgress/* default */.A, {
                            size: 16,
                            sx: {
                                color: 'inherit',
                                ml: 1
                            }
                        })
                    ]
                })
            ]
        });
    }
    // 渲染组件
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(Box_Box/* default */.A, {
        ref: ref,
        sx: sx,
        style: style,
        children: error ? /*#__PURE__*/ (0,jsx_runtime.jsx)(Alert/* default */.A, {
            severity: "error",
            action: /*#__PURE__*/ (0,jsx_runtime.jsx)(Button/* default */.A, {
                color: "inherit",
                size: "small",
                onClick: connectToRoom,
                children: "重试"
            }),
            children: error
        }) : renderMainContent()
    });
}
// 使用 forwardRef 导出组件
const MeetingRoom_new_MeetingRoom = /*#__PURE__*/ (0,react.forwardRef)(MeetingRoomComponent);
MeetingRoom_new_MeetingRoom.displayName = 'MeetingRoom';


// EXTERNAL MODULE: ./src/markets/market-html-utils.ts
var market_html_utils = __webpack_require__(40682);
// EXTERNAL MODULE: ./src/markets/markets-script-dev-lib.ts
var markets_script_dev_lib = __webpack_require__(5351);
// EXTERNAL MODULE: ../../libs/fanfanlo/dist/src/index.js
var dist_src = __webpack_require__(28995);
// EXTERNAL MODULE: ../../libs/fanfanlo/dist/src/watcher/proxyWatch.js + 2 modules
var watcher_proxyWatch = __webpack_require__(86125);
;// ./src/markets/markets-script-lib.ts

const libIndexInfo = dist_src.storeUtils.createLocalStore('markets-script-index-info', {
    defData: {
        list: []
    },
    forceReset: false
});
const lib = (0,watcher_proxyWatch/* toProxy */.I$)({});
let isInitialized = false;
function init() {
    if (isInitialized) {
        return;
    }
    isInitialized = true;
}
const marketsScriptLib = {
    lib,
    libIndexInfo,
    init
};

;// ./src/markets/markets-script-manager.ts



let markets_script_manager_isInitialized = false;
function markets_script_manager_init() {
    if (markets_script_manager_isInitialized) {
        return;
    }
    markets_script_manager_isInitialized = true;
    markets_script_dev_lib/* marketsDevScriptLib */.R.init();
    marketsScriptLib.init();
    (0,watchUpdates/* watchUpdates */.c)(markets_script_dev_lib/* marketsDevScriptLib */.R.marketDevLibData, (data)=>{
        console.log('marketsDevScriptLib.devLibInfo=', data);
        const allMarktLibData = markets_script_dev_lib/* marketsDevScriptLib */.R.marketDevLibData.allMarketLibData;
        if (!allMarktLibData) return;
        for (const html of allMarktLibData.htmls){
            marketsScriptLib.lib[html.client.ns] = html;
        }
        for (const script of allMarktLibData.resources){
            marketsScriptLib.lib[script.client.ns] = script;
        }
    });
}
const marketsScriptManager = {
    init: markets_script_manager_init
};

// EXTERNAL MODULE: ../../libs/droid/android/src/android/is-in-android.ts
var is_in_android = __webpack_require__(63149);
;// ../../libs/droid/android/src/android/scripts/a11y/a11y-info.ts


function getA11yServiceLiveInfo() {
    const script = "var info =com.fanfanlo.droidlib.auto.components.webview.AutoWebViewJs.a11yModel.serviceLiveInfo;\n var s = com.fanfanlo.lib.utils.JsonUtil.gson2.toJson(info);\n s;";
    const info = AutoWebViewJs/* autoWebViewJs */.yx.callScript(script);
    return info;
}
function hasPermission() {
    if (!(0,is_in_android/* isInAndroid */.bj)()) return false;
    const res = AutoWebViewJs/* autoWebViewJs */.yx.onCallGetA11yPermission();
    // console.log('hasPermission', res)
    return res.javaResultData;
// return getA11yServiceLiveInfo().javaResultData?.hasPermission;
}
function openPermission() {
    AutoWebViewJs/* autoWebViewJs */.yx.onCallOpenA11yPermission();
// return autoWebViewJs.callScriptRunner(`com.fanfanlo.lib.permissions.FloatPermission.openPermission();`);
}
const hasPermissionScript = "var bl = com.fanfanlo.droidlib.auto.service.accessibility.a11yUtils.hasServicePermission(com.fanfanlo.lib.mc.LibMainModel.Companion.instance.application, com.fanfanlo.droidlib.auto.components.webview.AutoWebViewJs.a11yModel.serviceKClass.class);\nbl;";
function checkPermission() {
    //com.fanfanlo.lib.utils.ClassUtils.kclassToClass
    // let s = `val bl = com.fanfanlo.droidlib.auto.service.accessibility.a11yUtils.hasServicePermission(com.fanfanlo.lib.mc.LibMainModel.libMainModel.application, com.fanfanlo.droidlib.auto.components.webview.AutoWebViewJs.a11yModel.serviceKClass.java);\nbl;`
    // let s = `var bl = com.fanfanlo.droidlib.auto.service.accessibility.a11yUtils.hasPermission(com.fanfanlo.droidlib.auto.components.webview.AutoWebViewJs.a11yModel.getServiceJavaClass());\nbl;`
    // let s = `var bl = com.fanfanlo.droidlib.auto.service.accessibility.a11yUtils.hasPermission(com.fanfanlo.droidlib.auto.components.webview.AutoWebViewJs.a11yModel.serviceKClass);\nbl;`
    // let s = `var bl = com.fanfanlo.droidlib.auto.service.accessibility.a11yUtils.hasServicePermission(com.fanfanlo.lib.mc.libMainModel.application, com.fanfanlo.droidlib.auto.components.webview.AutoWebViewJs.a11yModel.serviceKClass.class);\nbl;`
    // let s = `var bl = com.fanfanlo.droidlib.auto.service.accessibility.a11yUtils.hasServicePermission(com.fanfanlo.lib.mc.LibMainModel.Companion.instance.application, com.fanfanlo.droidlib.auto.components.webview.AutoWebViewJs.a11yModel.serviceKClass.class);\nbl;`
    // let s = `var bl = com.fanfanlo.droidlib.auto.service.accessibility.a11yUtils.hasServicePermission(com.fanfanlo.droidlib.auto.components.webview.AutoWebViewJs.a11yModel.serviceKClass.class);\nbl;`
    // s = `var x = com.fanfanlo.droidlib.auto.components.webview.AutoWebViewJs.a11yModel.serviceKClass;\nx`
    // let s = `var c = com.fanfanlo.lib.utils.ClassUtils.Companion.kclassToClass(com.fanfanlo.droidlib.auto.components.webview.AutoWebViewJs.a11yModel.serviceKClass);
    // var bl = com.fanfanlo.droidlib.auto.service.accessibility.a11yUtils.hasServicePermission(com.fanfanlo.lib.mc.libMainModel.application, c);
    // bl;`
    const res = AutoWebViewJs/* autoWebViewJs */.yx.callScript(hasPermissionScript);
    // console.log('checkPermission2222', res)
    return res;
}
const a11yScript = {
    getA11yServiceLiveInfo,
    hasPermission,
    openPermission,
    checkPermission,
    hasPermissionScript
};

;// ../../libs/app/model/src/mc/android-permission/androidPermission.data.ts

var AndroidPermissionStatus = /*#__PURE__*/ function(AndroidPermissionStatus) {
    AndroidPermissionStatus["granted"] = "granted";
    AndroidPermissionStatus["denied"] = "denied";
    AndroidPermissionStatus["shouldAskAgain"] = "shouldAskAgain";
    return AndroidPermissionStatus;
}({});
const androidPermissions = {
    a11y: {
        name: "android.permission.ACCESS_NOTIFICATION_POLICY",
        status: "shouldAskAgain"
    }
};
function usePermissionStatus(status) {
    // console.log('usePermissionStatus_fn22', status, useTranslation)
    const { t } = (0,dist_es/* useTranslation */.Bd)('app-model/mc/android-permission/content');
    return t("androidPermission.".concat(status));
}

// EXTERNAL MODULE: ../../libs/fanfanlo/src/utils/browser/tab-activity.ts
var tab_activity = __webpack_require__(73592);
;// ../../libs/fanfanlo/src/utils/browser/use-tab-activity.tsx



function useTabActivity() {
    const [isActive, setIsActive] = (0,react.useState)(tab_activity/* tabActivity */.T.isActive);
    (0,react.useEffect)(()=>{
        tab_activity/* tabActivity */.T.listen((bl)=>{
            setIsActive(bl);
        });
    }, []);
    return isActive;
}

// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+icons-material@6.4.12_@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_re_5ewkm5t5g27pzq5tz62v6ktvti/node_modules/@mui/icons-material/esm/QuestionMark.js
var QuestionMark = __webpack_require__(66365);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/ClickAwayListener/ClickAwayListener.js
var ClickAwayListener = __webpack_require__(74035);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/Tooltip/Tooltip.js + 4 modules
var Tooltip = __webpack_require__(77779);
;// ./src/components/permissions/accessibility/AccessibilityInfo.tsx
/* __next_internal_client_entry_do_not_use__ AccessibilityInfo auto */ 






// import { useTranslation } from 'react-i18next';s


function AccessibilityInfo() {
    const { t } = (0,dist_es/* useTranslation */.Bd)('homepage/components/permissions/accessibility/content');
    const [hasPermission, setHasPermission] = (0,react.useState)(a11yScript.hasPermission());
    const status = usePermissionStatus(hasPermission ? AndroidPermissionStatus.granted : AndroidPermissionStatus.shouldAskAgain);
    const [openTooltip, setOpenTooltip] = (0,react.useState)(false);
    const isActive = useTabActivity();
    const router = (0,next_router.useRouter)();
    function onSettingClick() {
        // if(!isInAndroid())return;
        AutoWebViewJs/* autoWebViewJs */.yx.onCallOpenA11yPermission();
    }
    (0,react.useEffect)(()=>{
        if (!isActive) return;
        setHasPermission(a11yScript.hasPermission());
    }, [
        isActive
    ]);
    (0,react.useEffect)(()=>{
        if (!(0,is_in_android/* isInAndroid */.bj)()) {
            console.log('check a11y permission in webview,but not in android');
            return;
        }
        let script = "var info =com.fanfanlo.droidlib.auto.components.webview.AutoWebViewJs.a11yModel.serviceLiveInfo;\n var s = com.fanfanlo.lib.utils.companion.gson2.toJson(info);\n s;";
        script = "var info =com.fanfanlo.droidlib.auto.components.webview.AutoWebViewJs.a11yModel.serviceLiveInfo;\n var s = com.fanfanlo.lib.utils.JsonUtil.gson2.toJson(info);\n s;";
        const info = AutoWebViewJs/* autoWebViewJs */.yx.callScript(script);
        const bl = a11yScript.checkPermission();
    }, []);
    function onDangerPageButtonClick() {
        router.push('/a11y-danger');
    }
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(Box_Box/* default */.A, {
        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box_Box/* default */.A, {
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                    children: t('AccessibilityInfo.name')
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                    children: ":"
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)("button", {
                    onClick: onSettingClick,
                    role: "button",
                    style: {
                        marginLeft: "0.5rem",
                        marginRight: "0.5rem"
                    },
                    children: t('AccessibilityInfo.setting')
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                    children: status
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                    children: hasPermission ? 'ok' : 'no'
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                    style: {
                        paddingLeft: '1rem'
                    }
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)(ClickAwayListener/* ClickAwayListener */.x, {
                    onClickAway: ()=>setOpenTooltip(false),
                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Tooltip/* default */.A, {
                        disableFocusListener: true,
                        disableHoverListener: true,
                        disableTouchListener: true,
                        title: t("AccessibilityInfo.dangerDesc"),
                        slotProps: {
                            popper: {
                                disablePortal: true
                            }
                        },
                        open: openTooltip,
                        onOpen: ()=>setOpenTooltip(true),
                        onClose: ()=>setOpenTooltip(false),
                        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("span", {
                            onMouseDown: ()=>setOpenTooltip(true),
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                    children: t('AccessibilityInfo.danger')
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {}),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(QuestionMark/* default */.A, {
                                        fontSize: "small",
                                        sx: {
                                            verticalAlign: 'sub'
                                        }
                                    })
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                    style: {
                                        color: "red"
                                    },
                                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Button/* default */.A, {
                                        onClick: onDangerPageButtonClick,
                                        children: "警告"
                                    })
                                })
                            ]
                        })
                    })
                })
            ]
        })
    });
}

// EXTERNAL MODULE: ./src/components/permissions/components/components.module.scss
var components_module = __webpack_require__(62039);
var components_module_default = /*#__PURE__*/__webpack_require__.n(components_module);
;// ./src/components/permissions/components/Components.tsx







function PermissionCommonSetting() {
    const { t } = (0,dist_es/* useTranslation */.Bd)('homepage/components/permissions/components/content');
    return /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
        className: (components_module_default()).permissionComponentsSpanPadding,
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)("button", {
            children: /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                children: t('Components.setting')
            })
        })
    });
}
function PermissionCommonNotPass() {
    const { t } = (0,dist_es/* useTranslation */.Bd)('homepage/components/permissions/components/content');
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(jsx_runtime.Fragment, {
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
            className: (components_module_default()).permissionComponentsSpanPadding,
            children: t('Components.notPass')
        })
    });
}
function PermissionCommonPass() {
    const { t } = (0,dist_es/* useTranslation */.Bd)('homepage/components/permissions/components/content');
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(jsx_runtime.Fragment, {
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
            className: (components_module_default()).permissionComponentsSpanPadding,
            children: t('Components.pass')
        })
    });
}
function PermissionCommonDanger(param) {
    let { desc } = param;
    const { t } = (0,dist_es/* useTranslation */.Bd)('homepage/components/permissions/components/content');
    const [openTooltip, setOpenTooltip] = (0,react.useState)(false);
    return /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
        className: (components_module_default()).danger,
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(ClickAwayListener/* ClickAwayListener */.x, {
            onClickAway: ()=>setOpenTooltip(false),
            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Tooltip/* default */.A, {
                disableFocusListener: true,
                disableHoverListener: true,
                disableTouchListener: true,
                title: desc,
                slotProps: {
                    popper: {
                        disablePortal: true
                    }
                },
                open: openTooltip,
                onOpen: ()=>setOpenTooltip(true),
                onClose: ()=>setOpenTooltip(false),
                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("span", {
                    onMouseDown: ()=>setOpenTooltip(true),
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                            children: t('Components.danger')
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {}),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(QuestionMark/* default */.A, {
                                fontSize: "small",
                                sx: {
                                    verticalAlign: 'sub'
                                }
                            })
                        })
                    ]
                })
            })
        })
    });
}
function PermissionCommonName(param) {
    let { children } = param;
    return /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
        children: children
    });
}
function PermissionCommonDesc(param) {
    let { children } = param;
    return /*#__PURE__*/ _jsx("span", {
        children: children
    });
}

;// ../../libs/droid/android/src/android/scripts/floating/floating-info.ts

function floating_info_hasPermission() {
    let script = "var bl = com.fanfanlo.lib.permissions.FloatPermission.hasPermission();\n bl;";
    let res = AutoWebViewJs/* autoWebViewJs */.yx.callScript(script);
    return res.javaResultData;
}
function floating_info_openPermission() {
    let script = "var bl = com.fanfanlo.lib.permissions.FloatPermission.openPermission();\n bl;";
    let res = AutoWebViewJs/* autoWebViewJs */.yx.callScript(script);
    return res.javaResultData;
}
const floatingInfo = {
    hasPermission: floating_info_hasPermission,
    openPermission: floating_info_openPermission
};

;// ./src/components/permissions/floating/FloatingInfo.tsx






function FloatingInfo() {
    const { t } = (0,dist_es/* useTranslation */.Bd)('homepage/components/permissions/floating/content');
    const [hasPermission, setHasPermission] = (0,react.useState)(floatingInfo.hasPermission());
    (0,react.useEffect)(()=>{
        const unlisten = tab_activity/* tabActivity */.T.listen((activity)=>{
            setHasPermission(floatingInfo.hasPermission());
        });
        return ()=>{
            unlisten();
        };
    }, []);
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(PermissionCommonName, {
                children: t('FloatingInfo.name')
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                onClick: ()=>{
                    floatingInfo.openPermission();
                },
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(PermissionCommonSetting, {})
            }),
            hasPermission ? /*#__PURE__*/ (0,jsx_runtime.jsx)(PermissionCommonPass, {}) : /*#__PURE__*/ (0,jsx_runtime.jsx)(PermissionCommonNotPass, {}),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(PermissionCommonDanger, {
                desc: t('FloatingInfo.dangerDesc')
            })
        ]
    });
}

;// ./src/components/permissions/home-page-permissions/HomePagePermissions.tsx




function HomePagePermissions() {
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box_Box/* default */.A, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(AccessibilityInfo, {}),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(FloatingInfo, {})
        ]
    });
}

// EXTERNAL MODULE: ./src/pages/home/test-script.tsx
var test_script = __webpack_require__(33035);
// EXTERNAL MODULE: ./src/components/navbar/NavBar.tsx
var NavBar = __webpack_require__(32534);
;// ./src/pages/home/index.tsx



















(0,i18n_init/* i18nInit */.tV)();
function Home() {
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(AppShell/* AppShell */.G, {
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Tabbar/* TabbarContainer */.y, {
            titleConf: {
                ns: "homepage/pages/home/content",
                key: "home.title"
            },
            navBar: /*#__PURE__*/ (0,jsx_runtime.jsx)(NavBar/* NavBar */.j, {}),
            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Content, {})
        })
    });
}
function EmergencyCallContent() {
    return /*#__PURE__*/ _jsxs(Box, {
        children: [
            /*#__PURE__*/ _jsx(MeetingRoom, {
                roomName: "test-room",
                userName: "user-".concat(Math.random().toString(36).substring(2, 8))
            }),
            /*#__PURE__*/ _jsx(IMOpenPageLink, {}),
            /*#__PURE__*/ _jsx(IFrameReactContainer, {
                url: "/scripts/fanfanlo/scripts/emergency-alarm/index.js",
                urlAsContent: true,
                htmlBuilder: marketHtmlUtils.createHtml
            })
        ]
    });
}
function test() {
    const s = 'var script1=function(n){"use strict";return function(){function v(){return new Date().getTime()}var u={exports:{}},e={};/**\n * @license React\n * react-jsx-runtime.production.js\n *\n * Copyright (c) Meta Platforms, Inc. and affiliates.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE file in the root directory of this source tree.\n */var c=Symbol.for("react.transitional.element"),d=Symbol.for("react.fragment");function s(T,t,r){var i=null;if(r!==void 0&&(i=""+r),t.key!==void 0&&(i=""+t.key),"key"in t){r={};for(var o in t)o!=="key"&&(r[o]=t[o])}else r=t;return t=r.ref,{$$typeof:c,type:T,key:i,ref:t!==void 0?t:null,props:r}}e.Fragment=d,e.jsx=s,e.jsxs=s,u.exports=e;var l=u.exports;function a(){return l.jsx("div",{children:l.jsx("button",{children:"html生成的按钮"})})}const x={UI:a};function E(){return v()}n.components=x,n.printA=E,Object.defineProperty(n,Symbol.toStringTag,{value:"Module"})}(),n}({}); return script1;';
    const o = new Function(s)();
    o.printA();
    // console.log('cccccccccccccccomponents=', o.components)
    return o;
}
function Content() {
    const [ui, setUI] = (0,react.useState)(null);
    (0,react.useEffect)(()=>{
        if (true) {
            // console.log('has window', document.domain);
            // document.domain = window.location.hostname;
            // console.log('domain is', document.domain);
            ;
            window.sayHello = function(msg) {
                alert('child' + msg);
            };
            console.log('window say=', window.sayHello);
        }
        setTimeout(()=>{
            setUI(test().components.UI());
        }, 1000 * 5);
    }, []);
    (0,react.useEffect)(()=>{
        marketsScriptManager.init();
    }, []);
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box_Box/* default */.A, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(AndroidSettingsInfo, {}),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(AddExternalMarketButton, {}),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(HomePagePermissions, {}),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Box_Box/* default */.A, {
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(OpenA11yNodeButton, {})
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(test_script.TestScript, {}),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Box_Box/* default */.A, {
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(KillSelf, {})
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(MarketsDevSettingsLineOpenLinkButton, {}),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(MainPageAddButtons, {}),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(ProjectsUI, {}),
            /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {})
        ]
    });
}


/***/ }),

/***/ 28995:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   storeUtils: () => (/* reexport safe */ _storage_index__WEBPACK_IMPORTED_MODULE_5__.storeUtils)
/* harmony export */ });
/* harmony import */ var _events__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2995);
/* harmony reexport (checked) */ if(__webpack_require__.o(_events__WEBPACK_IMPORTED_MODULE_0__, "storeUtils")) __webpack_require__.d(__webpack_exports__, { storeUtils: function() { return _events__WEBPACK_IMPORTED_MODULE_0__.storeUtils; } });
/* harmony import */ var _react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(17819);
/* harmony reexport (checked) */ if(__webpack_require__.o(_react__WEBPACK_IMPORTED_MODULE_1__, "storeUtils")) __webpack_require__.d(__webpack_exports__, { storeUtils: function() { return _react__WEBPACK_IMPORTED_MODULE_1__.storeUtils; } });
/* harmony import */ var _ts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(20623);
/* harmony import */ var _ts__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_ts__WEBPACK_IMPORTED_MODULE_2__);
/* harmony reexport (checked) */ if(__webpack_require__.o(_ts__WEBPACK_IMPORTED_MODULE_2__, "storeUtils")) __webpack_require__.d(__webpack_exports__, { storeUtils: function() { return _ts__WEBPACK_IMPORTED_MODULE_2__.storeUtils; } });
/* harmony import */ var _ts_global_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(69276);
/* harmony import */ var _ts_global_index__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_ts_global_index__WEBPACK_IMPORTED_MODULE_3__);
/* harmony reexport (checked) */ if(__webpack_require__.o(_ts_global_index__WEBPACK_IMPORTED_MODULE_3__, "storeUtils")) __webpack_require__.d(__webpack_exports__, { storeUtils: function() { return _ts_global_index__WEBPACK_IMPORTED_MODULE_3__.storeUtils; } });
/* harmony import */ var _i18n_index__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(31114);
/* harmony reexport (checked) */ if(__webpack_require__.o(_i18n_index__WEBPACK_IMPORTED_MODULE_4__, "storeUtils")) __webpack_require__.d(__webpack_exports__, { storeUtils: function() { return _i18n_index__WEBPACK_IMPORTED_MODULE_4__.storeUtils; } });
/* harmony import */ var _storage_index__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(44690);



















 //# sourceMappingURL=index.js.map


/***/ }),

/***/ 29229:
/***/ (() => {

"use strict";
 //# sourceMappingURL=IEventDispatcher.js.map


/***/ }),

/***/ 29272:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   D: () => (/* binding */ getMarketDevSocketSettingData)
/* harmony export */ });
/* harmony import */ var _fanfanlo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4887);

async function createDefSocketSettingData() {
    const data = {
        keepConnect: false,
        url: ""
    };
    const res = await _fanfanlo__WEBPACK_IMPORTED_MODULE_0__/* .storeUtils */ .P.getNamespaceStoreWithData('market-dev-socket-setting', {
        defData: data
    });
    return res.data;
}
async function getMarketDevSocketSettingData() {
    return await createDefSocketSettingData();
}


/***/ }),

/***/ 31114:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* unused harmony export fanfanloI18n */
/* harmony import */ var i18next__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(94912);
/* harmony import */ var _II18nValueConf__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(87332);
/* harmony import */ var _II18nValueConf__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_II18nValueConf__WEBPACK_IMPORTED_MODULE_1__);
/* harmony reexport (checked) */ if(__webpack_require__.o(_II18nValueConf__WEBPACK_IMPORTED_MODULE_1__, "storeUtils")) __webpack_require__.d(__webpack_exports__, { storeUtils: function() { return _II18nValueConf__WEBPACK_IMPORTED_MODULE_1__.storeUtils; } });



const fanfanloI18n = (/* unused pure expression or super */ null && (i18n));



 //# sourceMappingURL=index.js.map


/***/ }),

/***/ 32534:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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

/***/ 33035:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TestScript: () => (/* binding */ TestScript),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(94513);
/* harmony import */ var _barrel_optimize_names_Button_mui_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(28669);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(49595);


// import { buildScript, printScript1 } from "@scripts/script1";

function parseUsedLib(s) {
    let res = [];
    let reg = /javaLib\[\"(.*)\"\]/g;
    let r = s.matchAll(reg);
    for (let a of r){
        res.push(a[1]);
    }
    return res;
}
let beforeJavaLibCreateScript = "\nlet isScriptRunnable = true;\nlet scriptExitListeners = [];\nfunction addScriptExitListener(f){\n    removeScriptExitListener(f);\n    scriptExitListeners.push(f);\n}\nfunction removeScriptExitListener(f){\n    let index = scriptExitListeners.indexOf(f);\n    if(index == -1)return;\n    scriptExitListeners.splice(index, 1);\n}\nfunction onJavaCallTerminate(){\n    callScriptExit();\n    return true;\n}\nfunction callJavaExit(){\n\n}\nfunction jsCallComplete(){\n    callScriptExit();\n    callJavaExit();\n}\n\nfunction jsCallFailed(){\n    callScriptExit();\n    callJavaExit();\n}\nfunction callScriptExit(){\n    isScriptRunnable = false;\n    let res = \"\"\n    console.log('before call exit', scriptExitListeners.length);\n    scriptExitListeners.forEach((f)=>{f()});\n    console.log('after call exit');\n    return res;\n}\n    ";
function TestScript() {
    async function onClick() {
        // printScript1('hello script1')
        runProjectScriptDemo();
    }
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_barrel_optimize_names_Button_mui_material__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A, {
            onClick: onClick,
            children: "script"
        })
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TestScript);
async function runProjectScriptDemo() {
    const res = await axios__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A.get('/scripts/projectScript07.js');
    const scriptString = res.data;
    let dependencies = parseUsedLib(scriptString).concat(parseUsedLib(beforeJavaLibCreateScript));
// const conf = buildScript({
//     script: scriptString, injects: ["console", "a11yModel"],
//     optimizationLevel: -1, printScript: false,
//     scriptId: "demo.project"
// }, dependencies, beforeJavaLibCreateScript)
// const s = AutoWebViewJs.confToScript(conf);
// console.log('ssssssssssss', s)
// AutoWebViewJs.instance.callScriptRunner(s);
// console.log('code', code)
}


/***/ }),

/***/ 40682:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   P: () => (/* binding */ marketHtmlUtils)
/* harmony export */ });
function createHtml(script, opts) {
    return '<html>\n    <head>\n    <script type="importmap">\n  {\n    "imports": {\n      "react": "https://esm.sh/react@19",\n      "react-dom/client": "https://esm.sh/react-dom@19/client"\n    }\n  }\n</script>\n        <script>\n                const IFRAME_ID = \''.concat(opts === null || opts === void 0 ? void 0 : opts.iframeId, "';\n                window.IFRAME_ID = '").concat(opts === null || opts === void 0 ? void 0 : opts.iframeId, '\';\n                \n            var autoWebViewJs = window.autoWebViewJs = window.parent.window.autoWebViewJs;\n            autoWebViewJs = window.parent.window.autoWebViewJs;\n            var callScript = window.callScript = autoWebViewJs.callScript;\n            var callScriptByConf = window.callScriptByConf = autoWebViewJs.callScriptByConf;\n            var isRealInAndroid = window.isRealInAndroid;\n            // var storeUtilsConf = window.storeUtilsConf = window.parent.window.storeUtilsConf;\n            var storeUtilsConf = window.storeUtilsConf = {\n                ns:{},\n                read:window.parent.window.storeUtilsConf.read,\n                write:window.parent.window.storeUtilsConf.write   \n            }\n        </script>\n        <title>droid lego</title>\n        <style>html, body{margin-left:-0px;padding:0;\n        background-color: white;}</style>\n    </head>\n    <body>\n        <div id="app"></div>\n        <script>').concat(script, "</script>\n        <script>\n                // const IFRAME_ID = '").concat(opts === null || opts === void 0 ? void 0 : opts.iframeId, "';\n                function notifyResize() {\n                    const body = document.body;\n                    const html = document.documentElement;\n                    \n                    // 获取实际内容高度（取最大值）\n                    const height = Math.max(\n                        body.scrollHeight,\n                        body.offsetHeight,\n                        html.scrollHeight,\n                        html.offsetHeight\n                    );\n                    \n                    // 获取实际内容宽度\n                    const width = Math.max(\n                        body.scrollWidth,\n                        body.offsetWidth,\n                        html.scrollWidth,\n                        html.offsetWidth\n                    );\n                    \n                    // 发送消息给父窗口\n                    window.parent.postMessage({\n                        type: 'resize',\n                        iframeId: IFRAME_ID,\n                        height,\n                        width\n                    }, '*');\n                }\n                \n                // 监听窗口大小变化\n                window.addEventListener('resize', notifyResize);\n                \n                // 监听DOMContentLoaded，确保DOM加载完毕后调整大小\n                document.addEventListener('DOMContentLoaded', notifyResize);\n                \n                // 监听load事件，确保所有资源加载完毕后调整大小\n                window.addEventListener('load', notifyResize);\n                \n                // 创建MutationObserver监听DOM变化\n                const observer = new MutationObserver(notifyResize);\n                observer.observe(document.documentElement, {\n                    childList: true,\n                    subtree: true,\n                    attributes: true,\n                    characterData: true\n                });\n                \n                // 监听来自父窗口的消息，处理请求重新调整大小的消息\n                window.addEventListener('message', function(event) {\n                    if (event.data && event.data.type === 'requestResize') {\n                        // 主动触发一次尺寸计算和发送\n                        notifyResize();\n                    }\n                });\n                \n                // 初始化大小\n                notifyResize();\n        </script>\n    </body>\n</html>");
}
function mergeHtml(html, opts) {
    let h = html;
    if (!h.includes('<body')) {
        h = "<body>".concat(h, "</body>");
    }
    if (!h.includes('<html')) {
        h = "<html>".concat(h, "</html>");
    }
    if (!h.includes('<head')) {
        h = h.replace('<html>', '<html><head></head>');
    }
    h = h.replace('<head>', "<head><script>\n                const IFRAME_ID = '".concat(opts === null || opts === void 0 ? void 0 : opts.iframeId, "';\n                window.IFRAME_ID = '").concat(opts === null || opts === void 0 ? void 0 : opts.iframeId, "';\n                \n            var autoWebViewJs = window.autoWebViewJs = window.parent.window.autoWebViewJs;\n            autoWebViewJs = window.parent.window.autoWebViewJs;\n            var callScript = window.callScript = autoWebViewJs.callScript;\n            var callScriptByConf = window.callScriptByConf = autoWebViewJs.callScriptByConf;\n            var isRealInAndroid = window.isRealInAndroid;\n            // var storeUtilsConf = window.storeUtilsConf = window.parent.window.storeUtilsConf;\n            var storeUtilsConf = window.storeUtilsConf = {\n                ns:{},\n                read:window.parent.window.storeUtilsConf.read,\n                write:window.parent.window.storeUtilsConf.write   \n            }\n        </script>\n        \n        <style>html, body{margin-left:-0px;padding:0;\n        background-color: white;}</style>"));
    h = h.replace("</body>", "\n        \n        <script>\n                function notifyResize() {\n                    const body = document.body;\n                    const html = document.documentElement;\n                    \n                    // 获取实际内容高度（取最大值）\n                    const height = Math.max(\n                        body.scrollHeight,\n                        body.offsetHeight,\n                        html.scrollHeight,\n                        html.offsetHeight\n                    );\n                    \n                    // 获取实际内容宽度\n                    const width = Math.max(\n                        body.scrollWidth,\n                        body.offsetWidth,\n                        html.scrollWidth,\n                        html.offsetWidth\n                    );\n                    \n                    // 发送消息给父窗口\n                    window.parent.postMessage({\n                        type: 'resize',\n                        iframeId: IFRAME_ID,\n                        height,\n                        width\n                    }, '*');\n                }\n                \n                // 监听窗口大小变化\n                window.addEventListener('resize', notifyResize);\n                \n                // 监听DOMContentLoaded，确保DOM加载完毕后调整大小\n                document.addEventListener('DOMContentLoaded', notifyResize);\n                \n                // 监听load事件，确保所有资源加载完毕后调整大小\n                window.addEventListener('load', notifyResize);\n                \n                // 创建MutationObserver监听DOM变化\n                const observer = new MutationObserver(notifyResize);\n                observer.observe(document.documentElement, {\n                    childList: true,\n                    subtree: true,\n                    attributes: true,\n                    characterData: true\n                });\n                \n                // 监听来自父窗口的消息，处理请求重新调整大小的消息\n                window.addEventListener('message', function(event) {\n                    if (event.data && event.data.type === 'requestResize') {\n                        // 主动触发一次尺寸计算和发送\n                        notifyResize();\n                    }\n                });\n                \n                // 初始化大小\n                notifyResize();\n        </script>\n        </body>");
    console.log('hhhhhhhhhhhhh=', h);
    return h;
}
async function createHtmlByUrl(url, opts) {
    const res = await fetch(url);
    const content = await res.text();
    return createHtml(content, opts);
}
const marketHtmlUtils = {
    createHtml,
    createHtmlByUrl,
    mergeHtml
};


/***/ }),

/***/ 44690:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  storeUtils: () => (/* reexport */ storeUtils)
});

// UNUSED EXPORTS: StorePageContext, StorePageDynamicContext, indexedDbUtils, storage

// EXTERNAL MODULE: ../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/lodash.js
var lodash = __webpack_require__(63624);
var lodash_default = /*#__PURE__*/__webpack_require__.n(lodash);
// EXTERNAL MODULE: ../../node_modules/.pnpm/store2@2.14.4/node_modules/store2/dist/store2.js
var store2 = __webpack_require__(45049);
var store2_default = /*#__PURE__*/__webpack_require__.n(store2);
// EXTERNAL MODULE: ../../libs/fanfanlo/dist/src/watcher/proxyWatch.js + 2 modules
var proxyWatch = __webpack_require__(86125);
// EXTERNAL MODULE: ../../libs/fanfanlo/dist/src/dispatcher/throttle.js
var throttle = __webpack_require__(54529);
;// ../../libs/fanfanlo/dist/src/watcher/watchUpdates.js




function watchUpdates(target, onUpdate, conf, watchChain) {
    var _a;
    watchChain = watchChain || [];
    const unsubMap = /* @__PURE__ */ new Map();
    const { dispatcher } = (0,proxyWatch/* getProxyObject */.Ye)(target);
    const unsub = dispatcher.addListener(throttle/* listenAnyWildcard */._l, createOnUpdateFn(target, onUpdate, unsubMap, [
        ...watchChain
    ], conf));
    unsubMap.set(target, unsub);
    for(const key in target){
        const value = target[key];
        if (!lodash_default().isObject(value) || !checkIsInWatch(key, target, conf)) continue;
        const subConf = lodash_default().isArray(target) ? conf : (_a = conf == null ? void 0 : conf.properties) == null ? void 0 : _a[key];
        listenSubKey(target, key, unsubMap, onUpdate, [
            ...watchChain,
            key
        ], subConf);
    }
    return ()=>{
        unsubMap.forEach((unsub2, target2)=>unsub2());
    };
}
function createOnUpdateFn(target, onUpdate, unsubMap, watchChain, conf) {
    return (prop, now, old)=>{
        var _a, _b;
        if (!checkIsInWatch(prop, target, conf)) return;
        if (lodash_default().isObject(old)) {
            (_a = unsubMap.get(old)) == null ? void 0 : _a();
            unsubMap.delete(old);
        }
        onUpdate({
            target,
            key: prop,
            oldValue: old,
            newValue: now,
            watchChain: [
                ...watchChain,
                prop
            ]
        });
        const subConf = lodash_default().isArray(target) ? conf : (_b = conf == null ? void 0 : conf.properties) == null ? void 0 : _b[prop];
        listenSubKey(target, prop, unsubMap, onUpdate, [
            prop,
            ...watchChain
        ], subConf);
    };
}
function checkIsInWatch(prop, target, conf) {
    return !conf || conf.keys === throttle/* listenAnyWildcard */._l || lodash_default().isArray(conf.keys) && conf.keys.includes(prop) || conf.properties && prop in conf.properties || lodash_default().isArray(target);
}
function listenSubKey(target, key, unsubMap, onUpdate, watchChain, property) {
    const u = target[key];
    if (!u) return;
    if (!lodash_default().isObject(u)) return;
    const unsub = watchUpdates(u, onUpdate, property, [
        ...watchChain
    ]);
    unsubMap.set(u, unsub);
} //# sourceMappingURL=watchUpdates.js.map

// EXTERNAL MODULE: ../../node_modules/.pnpm/idb-keyval@6.2.2/node_modules/idb-keyval/dist/index.js
var dist = __webpack_require__(47067);
// EXTERNAL MODULE: ../../libs/fanfanlo/dist/src/watcher/proxyUtils.js
var watcher_proxyUtils = __webpack_require__(87041);
// EXTERNAL MODULE: ../../libs/fanfanlo/dist/src/utils/debug/object-count-utils.js
var object_count_utils = __webpack_require__(5994);
;// ../../libs/fanfanlo/dist/src/watcher/parentProxy.js






const objectMap = /* @__PURE__ */ new WeakMap();
function getParentProxyObject(parent, options) {
    watcher_proxyUtils/* proxyUtils */.o.pauseProxy();
    const target = (0,proxyWatch/* getProxyWatchRealTarget */.xA)(parent);
    let proxyObject = objectMap.get(target);
    if (!proxyObject) {
        const watchProxy = (0,proxyWatch/* getProxyObject */.Ye)(parent);
        proxyObject = {
            target,
            watchProxy
        };
        const unsub = watchProxy.dispatcher.addListener(throttle/* listenAnyWildcard */._l, (prop, value, old, target2)=>{
            var _a;
            if (lodash_default().isObject(old)) {
                const oldProxyObject = objectMap.get(old);
                if (oldProxyObject) {
                    oldProxyObject.parent = void 0;
                    (_a = oldProxyObject.unwatch) == null ? void 0 : _a.call(oldProxyObject);
                    oldProxyObject.unwatch = void 0;
                }
            }
            if (lodash_default().isObject(value)) {
                const newProxyObject = getParentProxyObject(value, options);
                newProxyObject.parent = target2;
            }
        });
        proxyObject.unwatch = unsub;
        if (object_count_utils/* objectCountUtils */._.getObjectCount(target) == object_count_utils/* objectCountUtils */._.getObjectCount(proxyObject.watchProxy.proxy)) {
            throw new Error("proxy object count is same");
        }
        objectMap.set(target, proxyObject);
    }
    loopChildren(target, options);
    watcher_proxyUtils/* proxyUtils */.o.resumeProxy();
    return proxyObject;
}
function loopChildren(parent, options) {
    for(const key in parent){
        const child = parent[key];
        if (!lodash_default().isObject(child)) continue;
        const info = getParentProxyObject(child, options);
        info.parent = parent;
    }
}
function destroyParentProxy(parent) {
    if (!_.isObject(parent)) throw new Error("target must be an object");
    const info = getParentProxyObject(parent);
    info.parent = void 0;
    objectMap.delete(parent);
    for(const key in parent){
        const child = parent[key];
        if (!_.isObject(child)) continue;
        destroyParentProxy(child);
    }
}
function isParent(parent) {
    return objectMap.get(parent);
}
function parentProxy_toParent(target) {
    return getParentProxyObject(target).watchProxy.proxy;
}
function getParentProxyInfo(target) {
    return getParentProxyObject(target);
}
function getParentProxyTarget(target) {
    return getParentProxyObject(target).target;
}
function getParent(target) {
    return getParentProxyObject(target).parent;
}
function getParentWatchProxy(target) {
    const parent = getParentProxyObject(target).parent;
    if (!parent) throw new Error("parent is undefined");
    return toProxy(parent);
} //# sourceMappingURL=parentProxy.js.map

;// ../../libs/fanfanlo/dist/src/watcher/parentWatchProxy.js




function toParentWatchProxy(target) {
    return toParent(toProxy(target));
}
function getProxyTarget(target) {
    let parentObject = isParent(target) ? getParentProxyTarget(target) : target;
    const proxyObject = (0,proxyWatch/* getProxyObject */.Ye)(parentObject).target;
    parentObject = isParent(proxyObject) ? getParentProxyTarget(proxyObject) : proxyObject;
    return parentObject;
}
function getTarget(target) {
    var _a;
    proxyUtils.pauseProxy();
    let t = target;
    let c = 0;
    while(t && isProxy(t)){
        c++;
        if (c > 5) break;
        if (isProxy(t)) t = (_a = isProxy(t)) == null ? void 0 : _a.target;
    }
    proxyUtils.resumeProxy();
    return t;
} //# sourceMappingURL=parentWatchProxy.js.map

// EXTERNAL MODULE: ../../libs/fanfanlo/dist/src/log/Log.js + 1 modules
var Log = __webpack_require__(53133);
;// ../../libs/fanfanlo/dist/src/storage/indexed-db-utils.js

var __async = (__this, __arguments, generator)=>{
    return new Promise((resolve, reject)=>{
        var fulfilled = (value)=>{
            try {
                step(generator.next(value));
            } catch (e) {
                reject(e);
            }
        };
        var rejected = (value)=>{
            try {
                step(generator.throw(value));
            } catch (e) {
                reject(e);
            }
        };
        var step = (x)=>x.done ? resolve(x.value) : Promise.resolve(x.value).then(fulfilled, rejected);
        step((generator = generator.apply(__this, __arguments)).next());
    });
};




const libs = {};
function getNamespaceStoreWithData(ns, opts) {
    return __async(this, null, function*() {
        const log = new Log/* Log */.tG(false, "indexedDb utils getNamespaceStoreWithData_".concat(ns));
        log.pause = true;
        let ss = libs[ns];
        log.log("init indexed db", ns);
        if (ss) {
            return ss;
        }
        const s = (0,dist/* createStore */.y$)(ns, ns);
        if ((opts == null ? void 0 : opts.forceReset) === true && opts.defData) {
            console.log("clean s", ns);
            yield (0,dist/* clear */.IU)(s);
            const keys = Object.keys(opts.defData);
            for (const key of keys){
                console.log("clear insert", key, opts.defData[key]);
                yield (0,dist/* set */.hZ)(key, opts.defData[key], s);
            }
            console.log("clean complete", ns);
        }
        const raw = yield (0,dist/* entries */.jO)(s);
        let o;
        if (raw && raw.length > 0) {
            o = Object.fromEntries(raw);
        }
        if (!o) {
            if ((opts == null ? void 0 : opts.defData) && opts.mergeDefData) {
                o = opts.defData;
            } else {
                o = {};
            }
        }
        yield mergeDefault();
        function mergeDefault() {
            return __async(this, null, function*() {
                log.log("mergeDefaultdata check opts", ns);
                if (!opts) return;
                log.log("mergeDefaultdata check mergeDefdata must is true", opts.mergeDefData);
                if (opts.mergeDefData !== true) return;
                log.log("start mergeDefaultdata", ns);
                if (!raw || raw.length == 0) return;
                log.log("mergeDefaultdata check defdata");
                if (!opts.defData) return;
                log.log("mergeDefaultdata check mergedefdata");
                if (opts.forceReset) return;
                log.log("mergeDefaultdata check o");
                if (!o) return;
                const defData = opts.defData;
                log.log("real start mergeDefData", defData);
                let keys = Object.keys(defData);
                for(let i = 0; i < keys.length; i++){
                    let key = keys[i];
                    if (key in o) continue;
                    log.log("add key", key, defData[key]);
                    yield (0,dist/* set */.hZ)(key, defData[key], s);
                    o[key] = defData[key];
                }
                keys = Object.keys(o);
                for(let i = 0; i < keys.length; i++){
                    let key = keys[i];
                    if (key in defData) continue;
                    log.log("del key", key);
                    yield (0,dist/* del */.yH)(key, s);
                    delete o[key];
                }
                log.log("after merge o=", o);
            });
        }
        const data = (0,proxyWatch/* toProxy */.I$)(o);
        watchUpdates(data, (info)=>__async(this, null, function*() {
                log.log(" watchUpdates_fn ns=".concat(ns, " data="), data);
                log.log(" watchUpdates_fn info=", info);
                if (info.watchChain.length == 0) {
                    console.error(" watchUpdates_fn no key found", info);
                    console.error(" watchUpdates_fn no key found info=", info);
                    console.error(" watchUpdates_fn data =", data);
                    return;
                }
                const key = info.watchChain[0];
                if (!(key in data)) {
                    console.error(" watchUpdates_fn key not found in data", "key=".concat(key), "ns=".concat(ns));
                    console.error(" watchUpdates_fn data =", data);
                    return;
                }
                log.log("watchUpdates_fn write", "key=".concat(key), "v=", data[key]);
                log.log("json value=", JSON.stringify(data[key]));
                try {
                    let v = data[key];
                    if (lodash_default().isObject(v)) {
                        v = getProxyTarget(v);
                    }
                    yield (0,dist/* set */.hZ)(key, v, s);
                    log.log("getNamespaceStoreWithData_fn watchUpdates", info);
                } catch (e) {
                    console.trace("path");
                    console.error("getNamespaceStoreWithData_fn watchUpdates set error", e);
                }
            }));
        function clean() {
            return __async(this, null, function*() {
                const keys = Object.keys(data);
                for (const key of keys){
                    delete data[key];
                }
                yield (0,dist/* clear */.IU)(s);
            });
        }
        const res = {
            data,
            store: {
                getData: ()=>data,
                read (key, defaultValue) {
                    var _a;
                    return (_a = data[key]) != null ? _a : defaultValue;
                },
                write (key, value, override) {
                    data[key] = value;
                    (0,dist/* set */.hZ)(key, value, s);
                },
                clearAll () {
                    clean();
                },
                setAll (d) {
                    clean();
                    Object.assign(data, d);
                    const keys = Object.keys(d);
                    for (const key of keys){
                        (0,dist/* set */.hZ)(key, d[key], s);
                    }
                },
                remove (key) {
                    delete data[key];
                    (0,dist/* del */.yH)(key, s);
                }
            }
        };
        libs[ns] = res;
        return res;
    });
}
function init() {
    return __async(this, null, function*() {});
}
const indexedDbUtils = {
    init,
    getIndexedDbStore: getNamespaceStoreWithData
}; //# sourceMappingURL=indexed-db-utils.js.map

;// ../../libs/fanfanlo/dist/src/storage/store-utils.js

var store_utils_async = (__this, __arguments, generator)=>{
    return new Promise((resolve, reject)=>{
        var fulfilled = (value)=>{
            try {
                step(generator.next(value));
            } catch (e) {
                reject(e);
            }
        };
        var rejected = (value)=>{
            try {
                step(generator.throw(value));
            } catch (e) {
                reject(e);
            }
        };
        var step = (x)=>x.done ? resolve(x.value) : Promise.resolve(x.value).then(fulfilled, rejected);
        step((generator = generator.apply(__this, __arguments)).next());
    });
};





const localStoreMap = {};
function createLocalStore(ns, opts) {
    let unsub;
    let ss = localStoreMap[ns];
    if (ss) {
        return ss;
    }
    const s = store2_default().namespace(ns);
    if ((opts == null ? void 0 : opts.forceReset) && (opts == null ? void 0 : opts.defData)) {
        s.setAll(opts == null ? void 0 : opts.defData);
    }
    if (lodash_default().isObject(opts == null ? void 0 : opts.defData) && Object.keys(s.getAll()).length == 0) {
        s.setAll(opts == null ? void 0 : opts.defData);
    }
    let data = createData();
    function createData() {
        unsub == null ? void 0 : unsub();
        unsub = void 0;
        try {
            const d = s.getAll();
            const data2 = (0,proxyWatch/* toProxy */.I$)(d && Object.keys(d).length > 0 ? d : {});
            watchData(data2);
            return data2;
        } catch (e) {
            console.error(e);
            s.setAll({});
            return (0,proxyWatch/* toProxy */.I$)({});
        }
    }
    let requestAnimationFrameId = -1;
    function watchData(data2) {
        unsub = watchUpdates(data2, ()=>{
            if (requestAnimationFrameId > -1) return;
            requestAnimationFrameId = window.requestAnimationFrame(()=>{
                requestAnimationFrameId = -1;
                try {
                    store2_default().namespace(ns).setAll(data2);
                } catch (e) {
                    alert(e);
                    console.error(e);
                }
            });
        });
    }
    const res = {
        data,
        store: {
            getData: ()=>data,
            read (key, defaultValue) {
                return s.get(key, defaultValue);
            },
            write (key, value, override) {
                data[key] = value;
            },
            clearAll () {
                store2_default().namespace(ns).clearAll();
                const keys = Object.keys(data);
                for (const key of keys){
                    delete data[key];
                }
            },
            setAll (d) {
                store2_default().namespace(ns).setAll(d);
                res.store.clearAll();
                const keys = Object.keys(d);
                for (const key of keys){
                    data[key] = d[key];
                }
            },
            remove (key) {
                store2_default().namespace(ns).remove(key);
                delete data[key];
            }
        }
    };
    localStoreMap[ns] = res;
    return res;
}
function createJavaStore(ns, opts) {
    const log = new Log/* Log */.tG(false, "createJavaStore_fn ns= " + ns);
    log.pause = true;
    let unsub;
    let data = createData();
    function createData() {
        unsub == null ? void 0 : unsub();
        unsub = void 0;
        const raw = getStoresNamespace(ns, opts) || {};
        const o = raw || {};
        mergeDefault();
        function mergeDefault() {
            return store_utils_async(this, null, function*() {
                if (!opts) return;
                if (opts.mergeDefData !== true) return;
                if (!raw || lodash_default().isArray(raw) || !lodash_default().isObject(raw)) return;
                if (!opts.defData) return;
                if (opts.forceReset) return;
                if (!o) return;
                const defData = opts.defData;
                let keys = Object.keys(defData);
                let updated = false;
                for(let i = 0; i < keys.length; i++){
                    let key = keys[i];
                    if (key in o) continue;
                    o[key] = defData[key];
                    updated = true;
                }
                keys = Object.keys(o);
                for(let i = 0; i < keys.length; i++){
                    let key = keys[i];
                    if (key in defData) continue;
                    delete o[key];
                    updated = true;
                }
                if (updated) {
                    is == null ? void 0 : is.write(ns, o);
                }
            });
        }
        const data2 = (0,proxyWatch/* toProxy */.I$)(o);
        watchData(data2);
        return data2;
    }
    let isClearAll = false;
    let callingNextFrame = false;
    function callNextFrame() {
        if (callingNextFrame) return;
        callingNextFrame = true;
        window.requestAnimationFrame(()=>{
            callingNextFrame = false;
            log.log("java store callNextFrame", ns, data);
            is == null ? void 0 : is.write(ns, data);
        });
    }
    function watchData(data2) {
        unsub = watchUpdates(data2, ()=>{
            if (isClearAll) return;
            log.log("java watch data", "ns=", ns, "data=", data2);
            callNextFrame();
        });
    }
    const res = {
        data,
        store: {
            getData: ()=>data,
            read (key, defaultValue) {
                var _a;
                log.log("java store read", ns, key, defaultValue);
                return (_a = data[key]) != null ? _a : defaultValue;
            },
            write (key, value, override) {
                log.log("java store write", ns, key, value, override);
                data[key] = value;
            },
            clearAll () {
                is == null ? void 0 : is.write(ns, "");
                const keys = Object.keys(data);
                isClearAll = true;
                for (const key of keys){
                    delete data[key];
                }
                isClearAll = false;
            },
            setAll (d) {
                is == null ? void 0 : is.write(ns, d);
                res.store.clearAll();
                const keys = Object.keys(d);
                isClearAll = true;
                for (const key of keys){
                    data[key] = d[key];
                }
                isClearAll = false;
            },
            remove (key) {
                delete data[key];
            }
        }
    };
    return res;
}
let is = void 0;
function setStoresProxy(s) {
    s.ns = (0,proxyWatch/* toProxy */.I$)(s.ns);
    is = s;
}
function getStoresNamespace(ns, opts) {
    const log = new Log/* Log */.tG(false, "getStoresNamespace_fn ns= " + ns);
    log.pause = true;
    log.log("is=", is);
    if (!is) return void 0;
    let s = is.ns[ns];
    log.log("s=", s);
    if (!s) {
        s = is.read(ns);
        log.log("s2=", s);
        if (s) {} else {
            s = is.ns[ns] = (opts == null ? void 0 : opts.defData) || {};
        }
    }
    if ((opts == null ? void 0 : opts.forceReset) && opts.defData) {
        let keys = Object.keys(s);
        for (const key of keys){
            delete s[key];
        }
        keys = Object.keys(opts.defData);
        for (const key of keys){
            s[key] = opts.defData[key];
        }
        log.log("getStoresNamespace_fn force reset", ns);
        is.write(ns, opts.defData);
    }
    is.ns[ns] = (0,proxyWatch/* toProxy */.I$)(s);
    return is.ns[ns];
}
function namespace(ns) {
    const res = is ? createJavaStore(ns) : createLocalStore(ns);
    return res.store;
}
function store_utils_getNamespaceStoreWithData(ns, opts) {
    return store_utils_async(this, null, function*() {
        const res = is ? createJavaStore(ns, opts) : indexedDbUtils.getIndexedDbStore(ns, opts);
        return res;
    });
}
const storeUtils = {
    //获取一个命名空间下的数据对象，本地会从localstorage里读取，
    //安卓环境会从安卓里读取
    namespace,
    getNamespaceStoreWithData: store_utils_getNamespaceStoreWithData,
    setStoresProxy,
    // 这个可以用来侦听子级字段变更以便写入localStorage
    // 不然store2普通的set是无法在子级对象变更时进行写入的。
    createLocalStore,
    //特殊需求的store还是从store2来,譬如大数据变更的情况，还是直接操作方便。
    createStore2: (ns)=>store2_default().namespace(ns)
}; //# sourceMappingURL=store-utils.js.map

;// ../../libs/fanfanlo/dist/src/storage/index.js





 //# sourceMappingURL=index.js.map


/***/ }),

/***/ 56257:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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

/***/ 62039:
/***/ ((module) => {

// extracted by mini-css-extract-plugin
module.exports = {"permissionComponentsSpanPadding":"components_permissionComponentsSpanPadding___8iUl","danger":"components_danger__at2U4","pass":"components_pass__QEjyt"};

/***/ }),

/***/ 69276:
/***/ (() => {

"use strict";
 //# sourceMappingURL=global.index.js.map


/***/ }),

/***/ 79696:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   O: () => (/* binding */ marketsDevSocket)
/* harmony export */ });
/* unused harmony export socketConnectInfo */
/* harmony import */ var _fanfanlo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(82727);
/* harmony import */ var _fanfanlo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(88518);
/* harmony import */ var _fanfanlo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(14069);
/* harmony import */ var _market_lib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(15899);
/* harmony import */ var _market_dev_socket_setting_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(29272);



const dispatcher = new _fanfanlo__WEBPACK_IMPORTED_MODULE_0__/* .Dispatcher */ .m();
const socketConnectInfo = (0,_fanfanlo__WEBPACK_IMPORTED_MODULE_1__/* .toProxy */ .I$)({
    status: _fanfanlo__WEBPACK_IMPORTED_MODULE_2__/* .SocketConnectStatusEnum */ .du.disconnected,
    retryCount: 0
});
let ws;
async function connect() {
    const url = (await (0,_market_dev_socket_setting_data__WEBPACK_IMPORTED_MODULE_3__/* .getMarketDevSocketSettingData */ .D)()).url;
    if (!(0,_fanfanlo__WEBPACK_IMPORTED_MODULE_2__/* .isValidWebSocketURL */ .NC)(url)) {
        return;
    }
    socketConnectInfo.status = _fanfanlo__WEBPACK_IMPORTED_MODULE_2__/* .SocketConnectStatusEnum */ .du.connecting;
    const w = ws = new WebSocket(url);
    w.onopen = ()=>{
        socketConnectInfo.status = _fanfanlo__WEBPACK_IMPORTED_MODULE_2__/* .SocketConnectStatusEnum */ .du.connected;
        toGetAllScripts();
    };
    w.onclose = ()=>{
        console.log('oscket on close', arguments);
        socketConnectInfo.status = _fanfanlo__WEBPACK_IMPORTED_MODULE_2__/* .SocketConnectStatusEnum */ .du.disconnected;
        checkNeedRetry();
    };
    w.onerror = ()=>{
        console.log('socket onerror', arguments);
        socketConnectInfo.status = _fanfanlo__WEBPACK_IMPORTED_MODULE_2__/* .SocketConnectStatusEnum */ .du.disconnected;
        close();
        checkNeedRetry();
    };
    w.onmessage = (e)=>{
        try {
            const event = JSON.parse(e.data);
            console.log('market dev socket onmessage', event.type);
            dispatcher.dispatch(event.type, event.data);
        } catch (e) {
            console.error(e);
        }
    };
    async function toGetAllScripts() {
        const event = {
            type: _market_lib__WEBPACK_IMPORTED_MODULE_4__/* .IMarketDevConnectEventType */ .Dl.getAllScripts
        };
        w.send(JSON.stringify(event));
    }
}
function close() {
    if (!ws) return;
    ws.close();
    ws = undefined;
}
async function checkNeedRetry() {
    const settingData = await (0,_market_dev_socket_setting_data__WEBPACK_IMPORTED_MODULE_3__/* .getMarketDevSocketSettingData */ .D)();
    if (!settingData.keepConnect) {
        return;
    }
    socketConnectInfo.retryCount++;
    setTimeout(()=>{
        connect();
    }, 1000 * 5);
}
function disconnect() {
    if (ws) {
        ws.close();
        ws = undefined;
    }
    socketConnectInfo.status = _fanfanlo__WEBPACK_IMPORTED_MODULE_2__/* .SocketConnectStatusEnum */ .du.disconnected;
}
const marketsDevSocket = {
    connect,
    disconnect,
    socketConnectInfo,
    dispatcher
};


/***/ }),

/***/ 87332:
/***/ (() => {

"use strict";
 //# sourceMappingURL=II18nValueConf.js.map


/***/ }),

/***/ 88664:
/***/ (() => {

"use strict";
 //# sourceMappingURL=global.index.js.map


/***/ }),

/***/ 93589:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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
//# sourceMappingURL=3380-548067b0bb8de015.js.map