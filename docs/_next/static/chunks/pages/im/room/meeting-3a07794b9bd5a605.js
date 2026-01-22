(self["webpackChunk_N_E"] = self["webpackChunk_N_E"] || []).push([[5558],{

/***/ 8513:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {


    (window.__NEXT_P = window.__NEXT_P || []).push([
      "/im/room/meeting",
      function () {
        return __webpack_require__(91317);
      }
    ]);
    if(false) {}
  

/***/ }),

/***/ 91317:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ BasicSettingsPage)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(94513);
/* harmony import */ var _app_ui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(26719);
/* harmony import */ var _app_ui__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(40018);
/* harmony import */ var _fanfanlo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(56137);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1674);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(94285);





function BasicSettingsPage() {
    const { t } = (0,_fanfanlo__WEBPACK_IMPORTED_MODULE_3__/* .useTranslation */ .Bd)("homepage/pages/im/room/meeting/content");
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();
    const { roomId, callId } = router.query;
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{
        // 如果没有 roomId，重定向到聊天列表
        if (!roomId && router.isReady) {
            router.push('/im');
        }
    }, [
        roomId,
        router
    ]);
    // 可选：调试参数
    // console.log('title=', t("content.title"), 'roomId=', roomId, 'callId=', callId);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_app_ui__WEBPACK_IMPORTED_MODULE_4__/* .AppShell */ .G, {
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_app_ui__WEBPACK_IMPORTED_MODULE_5__/* .AppbarContainer */ .W, {
            appbarProps: {
                title: t("content.title"),
                back: true
            }
        })
    });
}


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, [7772,472,402,1508,636,6593,8792], () => (__webpack_exec__(8513)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ _N_E = __webpack_exports__;
/******/ }
]);
//# sourceMappingURL=meeting-3a07794b9bd5a605.js.map