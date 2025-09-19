"use strict";
(self["webpackChunk_N_E"] = self["webpackChunk_N_E"] || []).push([[3053],{

/***/ 2454:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   q: () => (/* binding */ windowUtils)
/* harmony export */ });
/* harmony import */ var _AutoWebViewJs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(45921);

async function exitWindowById(id) {
    const script = 'var bl = com.fanfanlo.lib.components.floatview.floatwindow.WindowUtils.exitById("'.concat(id, '", "");\n bl;');
    console.log('exitWindowById_fn called', id, script);
    return _AutoWebViewJs__WEBPACK_IMPORTED_MODULE_0__/* .autoWebViewJs */ .yx.callScript(script);
}
const windowUtils = {
    exitWindowById
};


/***/ }),

/***/ 29192:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   g0: () => (/* binding */ createRandomEnglishCharacters)
/* harmony export */ });
/* unused harmony exports wordFirstToUpperCase, createRandomEnglishCharacter, randomLetters */
function wordFirstToUpperCase(s) {
    return s.replace(/( |^)[a-z]/, (L)=>L.toUpperCase());
}
function createRandomEnglishCharacter() {
    let s = String.fromCharCode(65 + Math.ceil(Math.random() * 25));
    if (Math.random() * 2 > 1) {
        s = s.toLocaleLowerCase();
    }
    return s;
}
function createRandomEnglishCharacters(length) {
    var result = [];
    for(var i = 0; i < length; i++){
        result.push(createRandomEnglishCharacter());
    }
    return result.join('');
}
function randomLetters(len) {
    var str = "", arr = [
        '0',
        '1',
        '2',
        '3',
        '4',
        '5',
        '6',
        '7',
        '8',
        '9',
        'a',
        'b',
        'c',
        'd',
        'e',
        'f',
        'g',
        'h',
        'i',
        'j',
        'k',
        'l',
        'm',
        'n',
        'o',
        'p',
        'q',
        'r',
        's',
        't',
        'u',
        'v',
        'w',
        'x',
        'y',
        'z',
        'A',
        'B',
        'C',
        'D',
        'E',
        'F',
        'G',
        'H',
        'I',
        'J',
        'K',
        'L',
        'M',
        'N',
        'O',
        'P',
        'Q',
        'R',
        'S',
        'T',
        'U',
        'V',
        'W',
        'X',
        'Y',
        'Z'
    ];
    for(var i = 0; i < len; i++){
        const pos = Math.round(Math.random() * (arr.length - 1));
        str += arr[pos];
    }
    return str;
}


/***/ }),

/***/ 63053:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  j: () => (/* binding */ actionListGroups),
  v: () => (/* binding */ initActionListGroups)
});

// EXTERNAL MODULE: ../../libs/app/static/src/utils/router-utils.ts
var router_utils = __webpack_require__(62632);
// EXTERNAL MODULE: ../../libs/droid/android/src/android/is-in-android.ts
var is_in_android = __webpack_require__(63149);
// EXTERNAL MODULE: ../../libs/droid/android/src/android/AutoWebViewJs.ts + 1 modules
var AutoWebViewJs = __webpack_require__(45921);
// EXTERNAL MODULE: ../../libs/droid/android/src/android/androidDispatchers.ts
var androidDispatchers = __webpack_require__(64558);
// EXTERNAL MODULE: ../../libs/droid/android/src/android/scripts/window/windowUtils.ts
var windowUtils = __webpack_require__(2454);
// EXTERNAL MODULE: ../../libs/droid/android/src/htmls/accessibility-info-buttons/accessibility-info-buttons.ts
var accessibility_info_buttons = __webpack_require__(65541);
;// ../../libs/droid/project-interface/src/a11y/sfdata.ts
class SFCond {
}
class SFCondId extends SFCond {
    constructor(...args){
        super(...args), this.type = "com.fanfanlo.droidlib.auto.service.accessibility.krosxx.Id";
    }
}
class SFCondText extends SFCond {
    constructor(...args){
        super(...args), this.type = "com.fanfanlo.droidlib.auto.service.accessibility.krosxx.Text";
    }
}
class SFCondMatchText extends SFCond {
    constructor(...args){
        super(...args), this.type = "com.fanfanlo.droidlib.auto.service.accessibility.krosxx.MatchText";
    }
}
class SFCondDesc extends SFCond {
    constructor(...args){
        super(...args), this.type = "com.fanfanlo.droidlib.auto.service.accessibility.krosxx.Desc";
    }
}
class SFCondClickable extends SFCond {
    constructor(...args){
        super(...args), this.type = "com.fanfanlo.droidlib.auto.service.accessibility.krosxx.Clickable";
    }
}
class ISFCondfType extends SFCond {
    constructor(...args){
        super(...args), this.type = "com.fanfanlo.droidlib.auto.service.accessibility.krosxx.Type";
    }
}
class SFCondIds extends SFCond {
    constructor(...args){
        super(...args), this.type = "com.fanfanlo.droidlib.auto.service.accessibility.krosxx.Ids";
    }
}
class SFCondDescs extends SFCond {
    constructor(...args){
        super(...args), this.type = "com.fanfanlo.droidlib.auto.service.accessibility.krosxx.Descs";
    }
}
class SFCondTexts extends SFCond {
    constructor(...args){
        super(...args), this.type = "com.fanfanlo.droidlib.auto.service.accessibility.krosxx.Texts";
    }
}
class SFCondRoot extends SFCond {
    getData() {
        return JSON.parse(JSON.stringify(this));
    }
    getCondRoot() {
        return {
            type: "com.fanfanlo.droidlib.auto.service.accessibility.krosxx.SFRootCond",
            pn: this.pn,
            an: this.an,
            cn: this.cn
        };
    }
    constructor(...args){
        super(...args), this.type = "com.fanfanlo.droidlib.auto.service.accessibility.krosxx.SFRoot", // 此变量在设置了an时有效。当pn匹配而an不匹配时尝试点击返回键直至返回到首页为止。捎带的副作用就是必然会从首页开始执行下一步。
        // 在trigger中使用时可以先匹配pn，当pn匹配，an不匹配时判断这个变量，如果这个变量为true则执行后退，执行后等待下一个event，在event里再次判断执行。
        // true为尝试点击
        this.back = false;
    }
}
class SFCondTypes extends SFCond {
    constructor(...args){
        super(...args), this.type = "com.fanfanlo.droidlib.auto.service.accessibility.krosxx.SFTypes";
    }
}
class SFAction {
    get data() {
        return {
            type: this.type
        };
    }
}
class SFActionFocus extends SFAction {
    constructor(...args){
        super(...args), this.type = "com.fanfanlo.droidlib.auto.service.accessibility.krosxx.Focus";
    }
}
class SFActionLearFocus extends SFAction {
    constructor(...args){
        super(...args), this.type = "com.fanfanlo.droidlib.auto.service.accessibility.krosxx.ClearFocus";
    }
}
class SFActionClick extends SFAction {
    constructor(...args){
        super(...args), this.type = "com.fanfanlo.droidlib.auto.service.accessibility.krosxx.Click";
    }
}
class SFActionTryClick extends SFAction {
    constructor(...args){
        super(...args), this.type = "com.fanfanlo.droidlib.auto.service.accessibility.krosxx.TryClick";
    }
}
class SFActionLongClick extends SFAction {
    constructor(...args){
        super(...args), this.type = "com.fanfanlo.droidlib.auto.service.accessibility.krosxx.LongClick";
    }
}
class SFActionGlobalClick extends SFAction {
    constructor(...args){
        super(...args), this.type = "com.fanfanlo.droidlib.auto.service.accessibility.krosxx.GlobalClick";
    }
}
class SFActionSetText extends SFAction {
    get data() {
        console.log("ssssfffffffffff set text");
        return {
            type: this.type,
            value: this.value
        };
    }
    constructor(...args){
        super(...args), this.type = "com.fanfanlo.droidlib.auto.service.accessibility.krosxx.SetText";
    }
}
class SFWait {
    constructor(){
        this.type = "com.fanfanlo.droidlib.auto.service.accessibility.krosxx.SFWait";
        this.time = 0;
        this.interval = 0;
        this.invisible = false;
    }
}
class SFData {
    get data() {
        return JSON.parse(JSON.stringify(this));
    }
    constructor(){
        this.type = "com.fanfanlo.droidlib.auto.service.accessibility.krosxx.SFData";
    }
}

;// ../../libs/droid/project-interface/src/a11y/A11yNode.ts

var a11yNodeProperyEnum = /*#__PURE__*/ function(a11yNodeProperyEnum) {
    a11yNodeProperyEnum["viewIdResourceName"] = "viewIdResourceName";
    a11yNodeProperyEnum["contentDescription"] = "contentDescription";
    a11yNodeProperyEnum["hintText"] = "hintText";
    a11yNodeProperyEnum["text"] = "text";
    a11yNodeProperyEnum["className"] = "className";
    a11yNodeProperyEnum["availableExtraData"] = "availableExtraData";
    a11yNodeProperyEnum["boundsInScreen"] = "boundsInScreen";
    a11yNodeProperyEnum["children"] = "children";
    a11yNodeProperyEnum["isAccessibilityDataSensitive"] = "isAccessibilityDataSensitive";
    a11yNodeProperyEnum["isAccessibilityFocused"] = "isAccessibilityFocused";
    a11yNodeProperyEnum["isCheckable"] = "isCheckable";
    a11yNodeProperyEnum["isChecked"] = "isChecked";
    a11yNodeProperyEnum["isClickable"] = "isClickable";
    a11yNodeProperyEnum["isContentInvalid"] = "isContentInvalid";
    a11yNodeProperyEnum["isContextClickable"] = "isContextClickable";
    a11yNodeProperyEnum["isDismissable"] = "isDismissable";
    a11yNodeProperyEnum["isEditable"] = "isEditable";
    a11yNodeProperyEnum["isEnabled"] = "isEnabled";
    a11yNodeProperyEnum["isFocusable"] = "isFocusable";
    a11yNodeProperyEnum["isFocused"] = "isFocused";
    a11yNodeProperyEnum["isHeading"] = "isHeading";
    a11yNodeProperyEnum["isImportantForAccessibility"] = "isImportantForAccessibility";
    a11yNodeProperyEnum["isLongClickable"] = "isLongClickable";
    a11yNodeProperyEnum["isMultiLine"] = "isMultiLine";
    a11yNodeProperyEnum["isPassword"] = "isPassword";
    a11yNodeProperyEnum["isScreenReaderFocusable"] = "isScreenReaderFocusable";
    a11yNodeProperyEnum["isScrollable"] = "isScrollable";
    a11yNodeProperyEnum["isSelected"] = "isSelected";
    a11yNodeProperyEnum["isShowingHintText"] = "isShowingHintText";
    a11yNodeProperyEnum["isTextEntryKey"] = "isTextEntryKey";
    a11yNodeProperyEnum["isTextSelectable"] = "isTextSelectable";
    a11yNodeProperyEnum["isVisibleToUser"] = "isVisibleToUser";
    a11yNodeProperyEnum["index"] = "index";
    a11yNodeProperyEnum["listIndex"] = "listIndex";
    return a11yNodeProperyEnum;
}({});
// 需要转码的contentDescription、hintText、text 这三个字段进出都需要转码
class A11yNode {
    constructor(){
        this.isAccessibilityDataSensitive = false;
        this.isAccessibilityFocused = false;
        this.isCheckable = false;
        this.isChecked = false;
        this.isClickable = false;
        this.isContentInvalid = false;
        this.isContextClickable = false;
        this.isDismissable = false;
        this.isEditable = false;
        this.isEnabled = true;
        this.isFocusable = false;
        this.isFocused = false;
        this.isHeading = false;
        this.isImportantForAccessibility = false;
        this.isLongClickable = false;
        this.isMultiLine = false;
        this.isPassword = false;
        this.isScreenReaderFocusable = false;
        this.isScrollable = false;
        this.isSelected = false;
        this.isShowingHintText = false;
        this.isTextEntryKey = false;
        this.isTextSelectable = false;
        this.isVisibleToUser = true;
    }
}
var A11yNodePropertyType = /*#__PURE__*/ function(A11yNodePropertyType) {
    A11yNodePropertyType["bl"] = "bl";
    A11yNodePropertyType["text"] = "text";
    A11yNodePropertyType["num"] = "num";
    A11yNodePropertyType["arr"] = "arr";
    A11yNodePropertyType["rect"] = "rect";
    return A11yNodePropertyType;
}({});
class A11yNodePropertyInfo {
    constructor(name, type){
        this.name = name;
        this.type = type;
    }
}
const a11yNodeProperties = {
    viewIdResourceName: new A11yNodePropertyInfo("viewIdResourceName", "text"),
    text: new A11yNodePropertyInfo("text", "text"),
    contentDescription: new A11yNodePropertyInfo("contentDescription", "text"),
    isClickable: new A11yNodePropertyInfo("isClickable", "bl"),
    index: new A11yNodePropertyInfo("index", "num"),
    isAccessibilityDataSensitive: new A11yNodePropertyInfo("isAccessibilityDataSensitive", "bl"),
    isAccessibilityFocused: new A11yNodePropertyInfo("isAccessibilityFocused", "bl"),
    isCheckable: new A11yNodePropertyInfo("isCheckable", "bl"),
    isChecked: new A11yNodePropertyInfo("isChecked", "bl"),
    isContentInvalid: new A11yNodePropertyInfo("isContentInvalid", "bl"),
    isContextClickable: new A11yNodePropertyInfo("isContextClickable", "bl"),
    isDismissable: new A11yNodePropertyInfo("isDismissable", "bl"),
    isEditable: new A11yNodePropertyInfo("isEditable", "bl"),
    isEnabled: new A11yNodePropertyInfo("isEnabled", "bl"),
    isFocusable: new A11yNodePropertyInfo("isFocusable", "bl"),
    isFocused: new A11yNodePropertyInfo("isFocused", "bl"),
    isHeading: new A11yNodePropertyInfo("isHeading", "bl"),
    isImportantForAccessibility: new A11yNodePropertyInfo("isImportantForAccessibility", "bl"),
    isLongClickable: new A11yNodePropertyInfo("isLongClickable", "bl"),
    isMultiLine: new A11yNodePropertyInfo("isMultiLine", "bl"),
    isPassword: new A11yNodePropertyInfo("isPassword", "bl"),
    isScreenReaderFocusable: new A11yNodePropertyInfo("isScreenReaderFocusable", "bl"),
    isScrollable: new A11yNodePropertyInfo("isScrollable", "bl"),
    isSelected: new A11yNodePropertyInfo("isSelected", "bl"),
    isShowingHintText: new A11yNodePropertyInfo("isShowingHintText", "bl"),
    isTextEntryKey: new A11yNodePropertyInfo("isTextEntryKey", "bl"),
    isTextSelectable: new A11yNodePropertyInfo("isTextSelectable", "bl"),
    isVisibleToUser: new A11yNodePropertyInfo("isVisibleToUser", "bl"),
    listIndex: new A11yNodePropertyInfo("listIndex", "num"),
    className: new A11yNodePropertyInfo("className", "text"),
    hintText: new A11yNodePropertyInfo("hintText", "text"),
    children: new A11yNodePropertyInfo("children", "arr"),
    boundsInScreen: new A11yNodePropertyInfo("boundsInScreen", "rect"),
    availableExtraData: new A11yNodePropertyInfo("availableExtraData", "arr")
};
const a11yNodeRealizedKeys = [
    "viewIdResourceName",
    "text",
    "contentDescription",
    "isClickable"
];
var NodeActionKeys = /*#__PURE__*/ function(NodeActionKeys) {
    NodeActionKeys["click"] = "click";
    NodeActionKeys["longClick"] = "longClick";
    NodeActionKeys["setText"] = "setText";
    NodeActionKeys["tryClick"] = "tryClick";
    NodeActionKeys["globalClick"] = "globalClick";
    return NodeActionKeys;
}({});
const nodeActions = {
    ["click"]: {
        clazz: SFActionClick,
        name: "click",
        value: "click",
        hasInput: false
    },
    ["longClick"]: {
        clazz: SFActionLongClick,
        name: "longClick",
        value: "longClick",
        hasInput: false
    },
    ["setText"]: {
        clazz: SFActionSetText,
        name: "setText",
        value: "setText",
        hasInput: true
    },
    ["tryClick"]: {
        clazz: SFActionTryClick,
        name: "tryClick",
        value: "tryClick",
        hasInput: false
    },
    ["globalClick"]: {
        clazz: SFActionGlobalClick,
        name: "globalClick",
        value: "globalClick",
        hasInput: false
    }
};

// EXTERNAL MODULE: ../../libs/droid/project-interface/src/action/IAction.intf.ts
var IAction_intf = __webpack_require__(30624);
// EXTERNAL MODULE: ../../libs/droid/project-interface/src/actions/actions-namespace.ts
var actions_namespace = __webpack_require__(56054);
;// ../../libs/droid/project-interface/src/actions/a11y/a11y-namespace.ts

const a11yNamespace = "".concat(actions_namespace/* actionsNamespace */.j, "a11y/");

// EXTERNAL MODULE: __barrel_optimize__?names=ulid!=!../../node_modules/.pnpm/ulid@2.4.0/node_modules/ulid/dist/index.esm.js + 1 modules
var index_esm = __webpack_require__(67131);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react@19.1.0/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(94513);
// EXTERNAL MODULE: ../../libs/app/static/src/pages/trigger-list-action-list-common/common.ts
var common = __webpack_require__(24899);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react-i18next@15.6.0_i18next@24.2.3_typescript@5.7.3__react-dom@19.1.0_react@19.1.0__react@19.1.0_typescript@5.7.3/node_modules/react-i18next/dist/es/index.js + 15 modules
var es = __webpack_require__(50279);
// EXTERNAL MODULE: ../../libs/fanfanlo/src/watcher/useProxyWatch.ts
var useProxyWatch = __webpack_require__(45007);
// EXTERNAL MODULE: ../../libs/fanfanlo/src/watcher/proxyWatch.ts
var proxyWatch = __webpack_require__(88518);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/Box/Box.js + 2 modules
var Box = __webpack_require__(6445);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/FormControlLabel/FormControlLabel.js + 1 modules
var FormControlLabel = __webpack_require__(30281);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/Switch/Switch.js + 1 modules
var Switch = __webpack_require__(85156);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/Checkbox/Checkbox.js + 4 modules
var Checkbox = __webpack_require__(93916);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/Stack/Stack.js + 1 modules
var Stack = __webpack_require__(9220);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/TextField/TextField.js + 1 modules
var TextField = __webpack_require__(38771);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/Accordion/Accordion.js + 1 modules
var Accordion = __webpack_require__(20350);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/AccordionSummary/AccordionSummary.js + 1 modules
var AccordionSummary = __webpack_require__(56420);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/AccordionDetails/AccordionDetails.js + 1 modules
var AccordionDetails = __webpack_require__(29708);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/Grid2/Grid2.js + 4 modules
var Grid2 = __webpack_require__(95771);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/Button/Button.js + 3 modules
var Button = __webpack_require__(28669);
// EXTERNAL MODULE: ../../node_modules/.pnpm/next@15.3.5_@babel+core@7.28.0_babel-plugin-macros@3.1.0_react-dom@19.1.0_react@19.1.0__react@19.1.0_sass@1.89.2/node_modules/next/router.js
var next_router = __webpack_require__(75640);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react@19.1.0/node_modules/react/index.js
var react = __webpack_require__(94285);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/FormControl/FormControl.js + 1 modules
var FormControl = __webpack_require__(37780);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/FormLabel/FormLabel.js
var FormLabel = __webpack_require__(4507);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/RadioGroup/RadioGroup.js + 1 modules
var RadioGroup = __webpack_require__(15356);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/Radio/Radio.js + 6 modules
var Radio = __webpack_require__(5447);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/Input/Input.js + 1 modules
var Input = __webpack_require__(93375);
;// ../../libs/droid/project-interface/src/a11y/NodeActionUI.tsx




function NodeActionUI(param) {
    let { nodeAction, setNodeAction, text, setText } = param;
    const { t } = (0,es/* useTranslation */.Bd)("droid-project-interface/a11y/content");
    const handleChange = (event)=>{
        setNodeAction(nodeActions[event.target.value]);
    };
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(jsx_runtime.Fragment, {
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.A, {
            sx: {
                width: "100%"
            },
            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(FormControl/* default */.A, {
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(FormLabel/* default */.A, {
                        id: "demo-radio-buttons-group-label",
                        children: t("NodeActionUI.title")
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)(RadioGroup/* default */.A, {
                        "aria-labelledby": "demo-radio-buttons-group-label",
                        value: nodeAction.value,
                        name: "radio-buttons-group",
                        onChange: handleChange,
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(FormControlLabel/* default */.A, {
                                value: NodeActionKeys.click,
                                control: /*#__PURE__*/ (0,jsx_runtime.jsx)(Radio/* default */.A, {}),
                                label: t("NodeActionUI.click")
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(FormControlLabel/* default */.A, {
                                value: NodeActionKeys.longClick,
                                control: /*#__PURE__*/ (0,jsx_runtime.jsx)(Radio/* default */.A, {}),
                                label: t("NodeActionUI.longClick")
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)(Grid2/* default */.A, {
                                direction: "row",
                                spacing: 2,
                                container: true,
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Grid2/* default */.A, {
                                        size: "auto",
                                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(FormControlLabel/* default */.A, {
                                            value: NodeActionKeys.setText,
                                            control: /*#__PURE__*/ (0,jsx_runtime.jsx)(Radio/* default */.A, {}),
                                            label: t("NodeActionUI.setText")
                                        })
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Grid2/* default */.A, {
                                        size: "grow",
                                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Input/* default */.A, {
                                            value: text,
                                            onChange: (e)=>setText(e.target.value)
                                        })
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(FormControlLabel/* default */.A, {
                                value: NodeActionKeys.tryClick,
                                control: /*#__PURE__*/ (0,jsx_runtime.jsx)(Radio/* default */.A, {}),
                                label: t("NodeActionUI.tryClick")
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(FormControlLabel/* default */.A, {
                                value: NodeActionKeys.globalClick,
                                control: /*#__PURE__*/ (0,jsx_runtime.jsx)(Radio/* default */.A, {}),
                                label: t("NodeActionUI.globalClick")
                            })
                        ]
                    })
                ]
            })
        })
    });
}

// EXTERNAL MODULE: ../../libs/droid/project-interface/src/utils/IChildToProject.intf.ts
var IChildToProject_intf = __webpack_require__(14209);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+icons-material@6.4.12_@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_re_5ewkm5t5g27pzq5tz62v6ktvti/node_modules/@mui/icons-material/esm/ExpandMore.js
var ExpandMore = __webpack_require__(21985);
// EXTERNAL MODULE: ../../libs/droid/project-interface/src/common/project-contexts.tsx
var project_contexts = __webpack_require__(55081);
// EXTERNAL MODULE: ../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/lodash.js
var lodash = __webpack_require__(63624);
;// __barrel_optimize__?names=parseInt!=!../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/lodash.js


;// ../../libs/droid/project-interface/src/actions/a11y/node-execute/UI.tsx













function SelectConditions(param) {
    let { data } = param;
    var _data_javaData_info;
    const node = (_data_javaData_info = data.javaData.info) === null || _data_javaData_info === void 0 ? void 0 : _data_javaData_info.node;
    if (!node) {
        return /*#__PURE__*/ (0,jsx_runtime.jsx)(jsx_runtime.Fragment, {});
    }
    const { t } = (0,es/* useTranslation */.Bd)("droid-project-interface/actions/a11y/node-execute/content");
    const [showAll, setShowAll] = (0,project_contexts/* useProjectUniqueKeyValue */.UA)((projectInfo)=>{
        IChildToProject_intf/* childToProjectDataUtils */.mR.actionList.getActionListByProp(data, projectInfo);
        projectInfo.action = data;
    }, 'show-all-properties', false);
    const [keys, setKeys] = (0,react.useState)(showAll ? Object.keys(a11yNodeProperties) : a11yNodeRealizedKeys);
    (0,react.useEffect)(()=>{
        setKeys(showAll ? Object.keys(a11yNodeProperties) : a11yNodeRealizedKeys);
    }, [
        showAll
    ]);
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(jsx_runtime.Fragment, {
        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.A, {
            sx: {
                width: "100%"
            },
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.A, {
                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(FormControlLabel/* default */.A, {
                        control: /*#__PURE__*/ (0,jsx_runtime.jsx)(Switch/* default */.A, {
                            checked: Boolean(showAll),
                            onChange: (e)=>setShowAll(Boolean(e.target.checked))
                        }),
                        label: t("content.showNodeAllProperties")
                    })
                }),
                keys.map((key)=>{
                    return /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.A, {
                        sx: {
                            width: "100%",
                            wordBreak: "break-all"
                        },
                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(FormControlLabel/* default */.A, {
                            control: /*#__PURE__*/ (0,jsx_runtime.jsx)(Checkbox/* default */.A, {
                                checked: data.javaData.selectedProperties.includes(key),
                                onChange: (e)=>{
                                    if (e.target.checked) {
                                        data.javaData.selectedProperties.push(key);
                                    } else {
                                        data.javaData.selectedProperties = data.javaData.selectedProperties.filter((k)=>k !== key);
                                    }
                                }
                            }),
                            label: "".concat(key, "::").concat(JSON.stringify(node[key]))
                        })
                    }, key);
                })
            ]
        })
    });
}
function WaitUI(param) {
    let { data } = param;
    if (!data.javaData.wait) {
        data.javaData.wait = {
            time: 1000,
            interval: 20,
            invisible: false
        };
    }
    const { t } = (0,es/* useTranslation */.Bd)("droid-project-interface/actions/a11y/node-execute/content");
    const [time] = (0,useProxyWatch/* useProxyWatch */.x)(data, 'javaData.wait.time', data.javaData.wait.time || 1000);
    const [interval] = (0,useProxyWatch/* useProxyWatch */.x)(data, 'javaData.wait.interval', data.javaData.wait.interval);
    const [invisible] = (0,useProxyWatch/* useProxyWatch */.x)(data, "javaData.wait.invisible", data.javaData.wait.invisible);
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(jsx_runtime.Fragment, {
        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(Stack/* default */.A, {
            direction: "column",
            sx: {
                width: "100%"
            },
            spacing: 2,
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsx)(TextField/* default */.A, {
                    type: "number",
                    value: (0,lodash.parseInt)(time.toString()),
                    onChange: (e)=>data.javaData.wait.time = (0,lodash.parseInt)(e.target.value),
                    label: t("content.wait.time")
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)(TextField/* default */.A, {
                    type: "number",
                    value: (0,lodash.parseInt)(interval.toString()),
                    onChange: (e)=>data.javaData.wait.interval = (0,lodash.parseInt)(e.target.value),
                    label: t("content.wait.interval")
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)(FormControlLabel/* default */.A, {
                    control: /*#__PURE__*/ (0,jsx_runtime.jsx)(Checkbox/* default */.A, {
                        checked: invisible,
                        onChange: (e)=>data.javaData.wait.invisible = e.target.checked
                    }),
                    label: t("content.wait.invisible")
                })
            ]
        })
    });
}
function UI(data) {
    const onInfoSelectedEventType = 'onInfoSelected';
    const { t } = (0,es/* useTranslation */.Bd)("droid-project-interface/actions/a11y/node-execute/content");
    const router = (0,next_router.useRouter)();
    const backPath = router.pathname;
    const [nodeAction, _setNodeAction] = (0,react.useState)(data.javaData.action);
    function setNodeAction(nodeAction) {
        _setNodeAction(nodeAction);
        data.javaData.action = nodeAction;
    }
    const [text, _setText] = (0,react.useState)(data.javaData.setText);
    function setText(text) {
        _setText(text);
        data.javaData.setText = text;
    }
    const [open, setOpen] = (0,project_contexts/* useProjectUniqueKeyValue */.UA)((projectInfo)=>{
        IChildToProject_intf/* childToProjectDataUtils */.mR.actionList.getActionListByProp(data, projectInfo);
        projectInfo.action = data;
    }, 'open-accordion', false);
    function onChangeClick() {
        var _projectInfo_project, _projectInfo_triggerActionGroup, _projectInfo_triggerAction, _projectInfo_actionGroup, _projectInfo_project1, _projectInfo_triggerActionGroup1, _projectInfo_triggerAction1, _projectInfo_actionGroup1, _actionA11yNodeExecuteUtils_onClickChange;
        const projectInfo = {};
        IChildToProject_intf/* childToProjectDataUtils */.mR.actionList.getActionListByProp(data, projectInfo);
        if (!((_projectInfo_project = projectInfo.project) === null || _projectInfo_project === void 0 ? void 0 : _projectInfo_project.id) || !((_projectInfo_triggerActionGroup = projectInfo.triggerActionGroup) === null || _projectInfo_triggerActionGroup === void 0 ? void 0 : _projectInfo_triggerActionGroup.id) || !((_projectInfo_triggerAction = projectInfo.triggerAction) === null || _projectInfo_triggerAction === void 0 ? void 0 : _projectInfo_triggerAction.id) || !((_projectInfo_actionGroup = projectInfo.actionGroup) === null || _projectInfo_actionGroup === void 0 ? void 0 : _projectInfo_actionGroup.id)) {
            console.error('UpdateAppLink projectInfo is undefined', projectInfo);
            return;
        }
        const query = {
            backPath,
            projectId: (_projectInfo_project1 = projectInfo.project) === null || _projectInfo_project1 === void 0 ? void 0 : _projectInfo_project1.id,
            triggerActionGroupId: (_projectInfo_triggerActionGroup1 = projectInfo.triggerActionGroup) === null || _projectInfo_triggerActionGroup1 === void 0 ? void 0 : _projectInfo_triggerActionGroup1.id,
            triggerActionId: (_projectInfo_triggerAction1 = projectInfo.triggerAction) === null || _projectInfo_triggerAction1 === void 0 ? void 0 : _projectInfo_triggerAction1.id,
            actionGroupId: (_projectInfo_actionGroup1 = projectInfo.actionGroup) === null || _projectInfo_actionGroup1 === void 0 ? void 0 : _projectInfo_actionGroup1.id,
            type: common/* ActionOrTriggerListTypeEnum */.Q.updateAction,
            actionId: data.id,
            actionType: actionA11yNodeExecuteUtils.type
        };
        (_actionA11yNodeExecuteUtils_onClickChange = actionA11yNodeExecuteUtils.onClickChange) === null || _actionA11yNodeExecuteUtils_onClickChange === void 0 ? void 0 : _actionA11yNodeExecuteUtils_onClickChange.call(actionA11yNodeExecuteUtils, {
            query,
            onDataSelectedEventType: onInfoSelectedEventType
        });
    }
    (0,react.useEffect)(()=>{
        return (0,proxyWatch/* getProxyDispatcher */.Ax)(data).addListener(onInfoSelectedEventType, (info)=>{
            data.javaData.info = info;
        });
    });
    if (!nodeAction) {
        return /*#__PURE__*/ (0,jsx_runtime.jsx)(jsx_runtime.Fragment, {
            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.A, {
                children: "no node action!!!"
            })
        });
    }
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(jsx_runtime.Fragment, {
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.A, {
            sx: {
                width: "100%"
            },
            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(Accordion/* default */.A, {
                expanded: Boolean(open),
                onChange: (e, expanded)=>setOpen(Boolean(expanded)),
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(AccordionSummary/* default */.A, {
                        expandIcon: /*#__PURE__*/ (0,jsx_runtime.jsx)(ExpandMore/* default */.A, {}),
                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                            children: t("content.title")
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(AccordionDetails/* default */.A, {
                        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(Grid2/* default */.A, {
                            container: true,
                            sx: {
                                width: "100%"
                            },
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime.jsx)(Grid2/* default */.A, {
                                    size: "grow",
                                    container: true,
                                    children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(Stack/* default */.A, {
                                        direction: "column",
                                        spacing: 2,
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime.jsx)(NodeActionUI, {
                                                nodeAction: nodeAction,
                                                setNodeAction: setNodeAction,
                                                text: text || "",
                                                setText: setText
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime.jsx)(WaitUI, {
                                                data: data
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime.jsx)(SelectConditions, {
                                                data: data
                                            })
                                        ]
                                    })
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)(Grid2/* default */.A, {
                                    size: "auto",
                                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Button/* default */.A, {
                                        onClick: onChangeClick,
                                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                            children: t("content.changeBtnLabel")
                                        })
                                    })
                                })
                            ]
                        })
                    })
                ]
            })
        })
    });
}

;// ../../libs/droid/project-interface/src/actions/a11y/node-execute/node-execute.ts





const type = "".concat(a11yNamespace, "node-execute");
function createDefaultData() {
    return {
        id: (0,index_esm/* ulid */.Z0)(),
        type,
        javaData: {
            selectedProperties: [],
            regexProperties: {},
            wait: {
                time: 0,
                interval: 0,
                invisible: false
            },
            action: nodeActions[NodeActionKeys.click]
        }
    };
}
function init() {}
const actionA11yNodeExecuteUtils = (0,IAction_intf/* createActionUtils */.A5)(type, init, createDefaultData, UI);

// EXTERNAL MODULE: ../../libs/droid/project-interface/src/common/trigger-list-action-list-intf.ts
var trigger_list_action_list_intf = __webpack_require__(37416);
// EXTERNAL MODULE: ../../libs/droid/project-interface/src/events/projectEventUtils.ts
var projectEventUtils = __webpack_require__(6659);
// EXTERNAL MODULE: ../../libs/droid/project-interface/src/core/project-member-type.ts
var project_member_type = __webpack_require__(27880);
// EXTERNAL MODULE: ./src/components/trigger-list-action-list-common/ITriggerList-IActionList-common.intf.tsx
var ITriggerList_IActionList_common_intf = __webpack_require__(93579);
;// ./src/components/page/action-list/groups/a11y/node-select/mockA11yNodeInfo.ts
const mockA11yNodeInfo1 = {
    "activeActivity": "com.fanfanlo.droid.MainActivity",
    "pn": "com.fanfanlo.droid.debug",
    "cn": "android.widget.FrameLayout",
    "node": {
        "availableExtraData": [
            "android.view.accessibility.extra.DATA_TEXT_CHARACTER_LOCATION_KEY"
        ],
        "boundsInScreen": {
            "bottom": 733,
            "left": 57,
            "right": 264,
            "top": 631
        },
        "children": [],
        "className": "android.widget.Button",
        "isAccessibilityDataSensitive": false,
        "isAccessibilityFocused": false,
        "isCheckable": false,
        "isChecked": false,
        "isClickable": true,
        "isContentInvalid": false,
        "isContextClickable": false,
        "isDismissable": false,
        "isEditable": false,
        "isEnabled": true,
        "isFocusable": true,
        "isFocused": true,
        "isHeading": false,
        "isImportantForAccessibility": false,
        "isLongClickable": false,
        "isMultiLine": false,
        "isPassword": false,
        "isScreenReaderFocusable": false,
        "isScrollable": false,
        "isSelected": false,
        "isShowingHintText": false,
        "isTextEntryKey": false,
        "isTextSelectable": false,
        "isVisibleToUser": true,
        "text": "选择节点",
        "viewIdResourceName": "a11y-node-select-action-item-df1c",
        "index": 0,
        "listIndex": 24
    }
};
const mockA11yNodeInfo2 = {
    "activeActivity": "com.fanfanlo.droid.MainActivity",
    "pn": "com.fanfanlo.droid.debug",
    "cn": "android.widget.FrameLayout",
    "node": {
        "availableExtraData": [
            "android.view.accessibility.extra.DATA_TEXT_CHARACTER_LOCATION_KEY"
        ],
        "boundsInScreen": {
            "bottom": 1258,
            "left": 60,
            "right": 467,
            "top": 1186
        },
        "children": [],
        "className": "android.widget.TextView",
        "isAccessibilityDataSensitive": false,
        "isAccessibilityFocused": false,
        "isCheckable": false,
        "isChecked": false,
        "isClickable": false,
        "isContentInvalid": false,
        "isContextClickable": false,
        "isDismissable": false,
        "isEditable": false,
        "isEnabled": true,
        "isFocusable": false,
        "isFocused": false,
        "isHeading": false,
        "isImportantForAccessibility": false,
        "isLongClickable": false,
        "isMultiLine": false,
        "isPassword": false,
        "isScreenReaderFocusable": false,
        "isScrollable": false,
        "isSelected": false,
        "isShowingHintText": false,
        "isTextEntryKey": false,
        "isTextSelectable": false,
        "isVisibleToUser": true,
        "text": "动作组",
        "index": 15,
        "listIndex": 40
    }
};
const mockA11yNodeInfoList = [
    mockA11yNodeInfo1,
    mockA11yNodeInfo2
];
function getRandomMockA11yNodeInfo() {
    return mockA11yNodeInfoList[parseInt((Math.random() * mockA11yNodeInfoList.length).toString())];
}

// EXTERNAL MODULE: ../../libs/fanfanlo/dist/src/watcher/proxyWatch.js + 2 modules
var watcher_proxyWatch = __webpack_require__(86125);
;// ./src/components/page/action-list/groups/a11y/node-select/node-execute-select.tsx







const a11yNodeSelectActionItem = {
    id: "a11y-node-select-action-item-df1c",
    i18nNs: "homepage/components/page/action-list/groups/a11y/node-select/content",
    nameKey: "content.name",
    group: "a11yNodeSelectActionItem.group",
    descriptionKey: "content.description",
    type: "action",
    LinkRender: (0,ITriggerList_IActionList_common_intf/* createActionOrTriggerButtonRender */.cI)(onAddSelect)
};
actionA11yNodeExecuteUtils.onClickChange = onChangeSelect;
async function onSelect() {
    return new Promise((resolve)=>{
        if (!is_in_android/* isRealInAndroid */.nd) {
            return resolve(getRandomMockA11yNodeInfo());
        }
        const eventType = "a11yNodeSelectActionItem";
        const listenIndex = AutoWebViewJs/* autoWebViewJs */.yx.shellListen(androidDispatchers/* androidDispatchers */.m.WebViewJsDispatcher.name, eventType, eventType, false, onSelectNode);
        function onSelectNode(s) {
            const info = JSON.parse(s);
            console.log('fffffffffffffff', s);
            windowUtils/* windowUtils */.q.exitWindowById(windowId);
            AutoWebViewJs/* autoWebViewJs */.yx.shellRemoveListen(androidDispatchers/* androidDispatchers */.m.WebViewJsDispatcher.name, listenIndex);
            resolve(info);
        }
        const windowId = (0,index_esm/* ulid */.Z0)();
        (0,accessibility_info_buttons/* openHtmlShowA11yNodeInfoButton */.d)(eventType, windowId);
    });
}
async function onAddSelect(param) {
    let { query, router } = param;
    const nowPath = router.pathname;
    const info = await onSelect();
    const action = actionA11yNodeExecuteUtils.mergeDataToDefultData({});
    action.javaData.info = info;
    const res = (0,trigger_list_action_list_intf/* getTriggerOrActionListPageParams */.JT)(query);
    projectEventUtils/* projectEventUtils */.T.dispatchEditEvent(projectEventUtils/* projectEventUtils */.T.EditType.add, {
        data: action,
        projectMemberType: project_member_type/* ProjectMemberType */.K.actionGroup,
        projectInfo: res.data
    });
    router_utils/* routerUtils */.V.checkToPath(router, nowPath, query.backPath || "", 1);
    AutoWebViewJs/* autoWebViewJs */.yx.openSelfByPackage();
}
async function onChangeSelect(param) {
    let { query, onDataSelectedEventType } = param;
    console.log('lllllllllllllllllllllllllll2223333');
    const info = await onSelect();
    // onJavaDataChangeDataSelect?.(info)
    const res = (0,trigger_list_action_list_intf/* getTriggerOrActionListPageParams */.JT)(query);
    if (onDataSelectedEventType && res.data.action) {
        console.log('fffffffffffrom event type ');
        (0,watcher_proxyWatch/* getProxyDispatcher */.Ax)(res.data.action).dispatch(onDataSelectedEventType, info);
        return;
    }
    projectEventUtils/* projectEventUtils */.T.dispatchEditEvent(projectEventUtils/* projectEventUtils */.T.EditType.updateJavaData, {
        data: {
            info
        },
        projectMemberType: project_member_type/* ProjectMemberType */.K.action,
        projectInfo: res.data
    });
    AutoWebViewJs/* autoWebViewJs */.yx.openSelfByPackage();
}

;// ./src/components/page/action-list/groups/a11y/a11y-group.ts

const a11yGroup = {
    i18nNs: "homepage/components/page/action-list/groups/a11y/content",
    nameKey: "content.name",
    descriptionKey: "content.description",
    items: [
        a11yNodeSelectActionItem
    ]
};

// EXTERNAL MODULE: ../../libs/droid/project-interface/src/actions/app/action-open-app/IActionOpenApp.inft.tsx + 2 modules
var IActionOpenApp_inft = __webpack_require__(54778);
;// ./src/components/page/action-list/groups/app/app-select/app-select.tsx


// http://192.168.177.180:3000/locales/homepage/components/page/action-list/groups/app/zh-CN/app-select.json?v=1.0.1
// apps\homepage\public\locales\homepage\components\page\action-list\groups\app\app-select\zh-CN\content.json
// 明天早上在这里注入actionType，继续设计，似乎openApp可以放到一个map里处理，将来更新字段多了，也可以有个分流
// 在选择app的页面里应该是通过actionType找到一个函数，给这个函数注入被选择的app就行，这样的话以后安卓手机接收消息转发等也可以用选择app的页面了
// 这个名字似乎叫openApp更合适
// id注入设计的不合理
const selectAppActionItem = {
    id: "selectAppActionItem-7537eb25-586d-4178-9d9b-b817706a4c6b",
    i18nNs: "homepage/components/page/action-list/groups/app/app-select/content",
    nameKey: "content.name",
    group: "selectAppActionItem.group",
    descriptionKey: "content.description",
    type: "page",
    LinkRender: (0,ITriggerList_IActionList_common_intf/* createActionOrTriggerListLinkRender */.IS)("/app-selector", "selectAppActionItem-7537eb25-586d-4178-9d9b-b817706a4c6b", {
        actionType: IActionOpenApp_inft/* actionOpenAppUtils */.F.type
    })
};

// EXTERNAL MODULE: ../../libs/droid/android/src/htmls/PnAnInfoWindow.ts + 1 modules
var PnAnInfoWindow = __webpack_require__(76105);
;// ../../libs/droid/project-interface/src/actions/app/to-app-main-page/UI.tsx







function UI_UI(data) {
    const { t } = (0,es/* useTranslation */.Bd)("droid-project-interface/actions/app/to-app-main-page/content");
    const router = (0,next_router.useRouter)();
    const backPath = router.pathname;
    const [pn] = (0,useProxyWatch/* useProxyWatch */.x)(data, "javaData.pn", data.javaData.pn);
    const [an] = (0,useProxyWatch/* useProxyWatch */.x)(data, "javaData.an", data.javaData.an);
    function onChangeClick() {
        var _projectInfo_project, _projectInfo_triggerActionGroup, _projectInfo_triggerAction, _projectInfo_actionGroup, _projectInfo_project1, _projectInfo_triggerActionGroup1, _projectInfo_triggerAction1, _projectInfo_actionGroup1, _actionToAppMainPageUtils_onClickChange;
        const projectInfo = {};
        IChildToProject_intf/* childToProjectDataUtils */.mR.actionList.getActionListByProp(data, projectInfo);
        if (!((_projectInfo_project = projectInfo.project) === null || _projectInfo_project === void 0 ? void 0 : _projectInfo_project.id) || !((_projectInfo_triggerActionGroup = projectInfo.triggerActionGroup) === null || _projectInfo_triggerActionGroup === void 0 ? void 0 : _projectInfo_triggerActionGroup.id) || !((_projectInfo_triggerAction = projectInfo.triggerAction) === null || _projectInfo_triggerAction === void 0 ? void 0 : _projectInfo_triggerAction.id) || !((_projectInfo_actionGroup = projectInfo.actionGroup) === null || _projectInfo_actionGroup === void 0 ? void 0 : _projectInfo_actionGroup.id)) {
            console.error('UpdateAppLink projectInfo is undefined', projectInfo);
            return;
        }
        const query = {
            backPath,
            projectId: (_projectInfo_project1 = projectInfo.project) === null || _projectInfo_project1 === void 0 ? void 0 : _projectInfo_project1.id,
            triggerActionGroupId: (_projectInfo_triggerActionGroup1 = projectInfo.triggerActionGroup) === null || _projectInfo_triggerActionGroup1 === void 0 ? void 0 : _projectInfo_triggerActionGroup1.id,
            triggerActionId: (_projectInfo_triggerAction1 = projectInfo.triggerAction) === null || _projectInfo_triggerAction1 === void 0 ? void 0 : _projectInfo_triggerAction1.id,
            actionGroupId: (_projectInfo_actionGroup1 = projectInfo.actionGroup) === null || _projectInfo_actionGroup1 === void 0 ? void 0 : _projectInfo_actionGroup1.id,
            type: common/* ActionOrTriggerListTypeEnum */.Q.updateAction,
            actionId: data.id,
            actionType: actionToAppMainPageUtils.type
        };
        (_actionToAppMainPageUtils_onClickChange = actionToAppMainPageUtils.onClickChange) === null || _actionToAppMainPageUtils_onClickChange === void 0 ? void 0 : _actionToAppMainPageUtils_onClickChange.call(actionToAppMainPageUtils, {
            query
        });
    }
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(jsx_runtime.Fragment, {
        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.A, {
            sx: {
                width: "100%"
            },
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.A, {
                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)("b", {
                        children: t("content.title")
                    })
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsxs)(Grid2/* default */.A, {
                    container: true,
                    sx: {
                        width: "100%"
                    },
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(Grid2/* default */.A, {
                            size: "grow",
                            container: true,
                            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(Stack/* default */.A, {
                                direction: "column",
                                spacing: 2,
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.A, {
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                                children: t("content.pnName")
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                                children: pn
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.A, {
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                                children: t("content.anName")
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                                children: an
                                            })
                                        ]
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(Grid2/* default */.A, {
                            size: "auto",
                            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Button/* default */.A, {
                                onClick: onChangeClick,
                                children: /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                    children: t("content.changeBtnLabel")
                                })
                            })
                        })
                    ]
                })
            ]
        })
    });
}

// EXTERNAL MODULE: ../../libs/droid/project-interface/src/actions/app/app-namespace.ts
var app_namespace = __webpack_require__(23402);
;// ../../libs/droid/project-interface/src/actions/app/to-app-main-page/IToAppMainPage.intf.ts




const IToAppMainPage_intf_type = "".concat(app_namespace/* appNamespace */.X, "toAppMainPage");
function IToAppMainPage_intf_createDefaultData() {
    return {
        id: (0,index_esm/* ulid */.Z0)(),
        type: IToAppMainPage_intf_type,
        javaData: {
            pn: '',
            an: ''
        }
    };
}
function IToAppMainPage_intf_init() {}
const actionToAppMainPageUtils = (0,IAction_intf/* createActionUtils */.A5)(IToAppMainPage_intf_type, IToAppMainPage_intf_init, IToAppMainPage_intf_createDefaultData, UI_UI);

// EXTERNAL MODULE: ../../libs/fanfanlo/src/utils/stringUtils.ts
var stringUtils = __webpack_require__(29192);
;// ./src/components/page/action-list/groups/app/to-app-main-page/to-app-main-page.tsx




const toAppMainPageActionItem = {
    id: "to-app-main-page-action-item-df1c",
    i18nNs: "homepage/components/page/action-list/groups/app/to-app-main-page/content",
    nameKey: "content.name",
    group: "toAppMainPageActionItem.group",
    descriptionKey: "content.description",
    type: "action",
    LinkRender: (0,ITriggerList_IActionList_common_intf/* createActionOrTriggerButtonRender */.cI)(to_app_main_page_onAddSelect)
};
actionToAppMainPageUtils.onClickChange = to_app_main_page_onChangeSelect;
async function to_app_main_page_onSelect() {
    let info;
    if (is_in_android/* isRealInAndroid */.nd) {
        info = await (0,PnAnInfoWindow/* openPnAnInfoWindow */.U)(true);
    } else {
        info = {
            pn: "".concat((0,stringUtils/* createRandomEnglishCharacters */.g0)(Math.floor(Math.random() * 5) + 5), ".").concat((0,stringUtils/* createRandomEnglishCharacters */.g0)(Math.floor(Math.random() * 5) + 5), ".").concat((0,stringUtils/* createRandomEnglishCharacters */.g0)(Math.floor(Math.random() * 5) + 5)),
            an: (0,stringUtils/* createRandomEnglishCharacters */.g0)(Math.floor(Math.random() * 5) + 5)
        };
    }
    // console.log('info1=', info)
    return info;
}
async function to_app_main_page_onAddSelect(param) {
    let { query } = param;
    const info = await to_app_main_page_onSelect();
    const res = (0,trigger_list_action_list_intf/* getTriggerOrActionListPageParams */.JT)(query);
    const action = actionToAppMainPageUtils.mergeDataToDefultData({
        javaData: {
            pn: info.pn,
            an: info.an
        }
    });
    projectEventUtils/* projectEventUtils */.T.dispatchEditEvent(projectEventUtils/* projectEventUtils */.T.EditType.add, {
        data: action,
        projectMemberType: project_member_type/* ProjectMemberType */.K.actionGroup,
        projectInfo: res.data
    });
    window.history.back();
    AutoWebViewJs/* autoWebViewJs */.yx.openSelfByPackage();
}
async function to_app_main_page_onChangeSelect(param) {
    let { query } = param;
    const info = await to_app_main_page_onSelect();
    const res = (0,trigger_list_action_list_intf/* getTriggerOrActionListPageParams */.JT)(query);
    projectEventUtils/* projectEventUtils */.T.dispatchEditEvent(projectEventUtils/* projectEventUtils */.T.EditType.updateJavaData, {
        data: info,
        projectMemberType: project_member_type/* ProjectMemberType */.K.action,
        projectInfo: res.data
    });
    AutoWebViewJs/* autoWebViewJs */.yx.openSelfByPackage();
}

;// ./src/components/page/action-list/groups/app/app-group.ts


const appGroup = {
    i18nNs: "homepage/components/page/action-list/groups/app/content",
    nameKey: "content.name",
    descriptionKey: "content.description",
    items: [
        selectAppActionItem,
        toAppMainPageActionItem
    ]
};

;// ./src/components/page/action-list/action.data.ts


const actionListGroups = [
    appGroup,
    a11yGroup
];
async function initActionListGroups() {
    actionListGroups;
}


/***/ }),

/***/ 76105:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  U: () => (/* binding */ openPnAnInfoWindow)
});

// EXTERNAL MODULE: ../../libs/droid/android/src/confs/env.ts
var env = __webpack_require__(38952);
// EXTERNAL MODULE: __barrel_optimize__?names=ulid!=!../../node_modules/.pnpm/ulid@2.4.0/node_modules/ulid/dist/index.esm.js + 1 modules
var index_esm = __webpack_require__(67131);
// EXTERNAL MODULE: ../../libs/droid/android/src/android/win/WindowConf.ts
var WindowConf = __webpack_require__(39800);
// EXTERNAL MODULE: ../../libs/droid/android/src/android/components/permissionGroupCreator.ts + 4 modules
var permissionGroupCreator = __webpack_require__(40164);
// EXTERNAL MODULE: ../../libs/droid/android/src/android/components/PermissionGroup.ts
var PermissionGroup = __webpack_require__(70168);
// EXTERNAL MODULE: ../../libs/fanfanlo/src/events/EventDispatcher.ts
var EventDispatcher = __webpack_require__(59647);
// EXTERNAL MODULE: ../../libs/fanfanlo/src/log/Log.ts + 1 modules
var Log = __webpack_require__(48891);
// EXTERNAL MODULE: ../../libs/fanfanlo/src/events/DataEvent.ts + 1 modules
var DataEvent = __webpack_require__(67816);
// EXTERNAL MODULE: ../../libs/droid/android/src/android/WebViewJs.ts + 3 modules
var WebViewJs = __webpack_require__(96113);
// EXTERNAL MODULE: ../../libs/droid/android/src/android/androidDispatchers.ts
var androidDispatchers = __webpack_require__(64558);
;// ../../libs/droid/android/src/android/win/Window.ts



class Window extends EventDispatcher/* EventDispatcher */.Q {
    static getDismissEventType(ulid) {
        return "window-".concat(ulid, "-dismiss");
    }
    static create(conf) {
        let w = new Window(conf);
        return w;
    }
    constructor(conf){
        super(), this.logger = new Log/* Log */.tG(false, this.constructor.name), this.dismissListenIndex = "", this.init = ()=>{
            let { print, error, warn, logger } = this.logger.sub(false, "fn_init");
            let type = Window.getDismissEventType(this.conf.windowId);
            print("type is", type);
            this.dismissListenIndex = WebViewJs/* WebViewJs */.L.instance.shellListen(androidDispatchers/* androidDispatchers */.m.Window.name, type, type, true, this.onDismiss);
            print("dismissListenIndex is", this.dismissListenIndex);
            return this;
        }, this.open = ()=>{
            if (!this.conf) {
                throw Error("no window conf");
            }
            const res = WebViewJs/* WebViewJs */.L.instance.createWindow(JSON.stringify(this.conf));
            console.log('crate window res=', res);
            return this;
        }, this.onDismiss = ()=>{
            let { print, error, warn, logger } = this.logger.sub(false, "fn_onDismiss");
            print("dismiss", Window.getDismissEventType(this.conf.windowId));
            this.dispatchEvent(new DataEvent/* DataEvent */.P(Window.eventTypeDismiss));
        };
        this.conf = conf;
    }
}
Window.eventTypeDismiss = "dismiss";

// EXTERNAL MODULE: ../../libs/fanfanlo/src/i18n/i18n-value-loader.ts + 1 modules
var i18n_value_loader = __webpack_require__(27950);
// EXTERNAL MODULE: ../../libs/droid/android/src/android/scripts/window/windowUtils.ts
var windowUtils = __webpack_require__(2454);
;// ../../libs/droid/android/src/htmls/PnAnInfoWindow.ts










const { htmlOrigin } = env/* env */._;
function getHtmlPnAnInfoWindowConf(windowId, selectEventType) {
    let conf = {
        htmlConf: {
            url: "".concat(htmlOrigin, "pages/accessibility-pn-an-info/"),
            webViewJsParams: {
                javaToJsDataString: JSON.stringify({
                    eventType: selectEventType
                })
            }
        },
        floatWindowConf: {
            floatConf: {
                positionSaveName: "a11y-pn-a-an-info-panel"
            }
        },
        windowId: windowId
    };
    return (0,WindowConf/* createWindowConfCopy */.Sb)(conf);
// return _.merge({}, windowConf, conf)
}
async function openPnAnInfoWindow(autoCloseWhenSelected) {
    console.log('openPnAnInfoWindow_fn');
    let opened = false;
    const t = await (0,i18n_value_loader/* getI18nT */.r)('droid-android/htmls/content');
    return new Promise(function(resolve, reject) {
        let isSuccess = false;
        let group = (0,permissionGroupCreator/* createFloatA11yPermissionGroup */.ps)();
        group.addEventListener(PermissionGroup/* PermissionGroup */.v.eventComplete, ()=>{
            console.log('group.isSuccess=', group.isSuccess, 'opened', opened);
            if (opened) return;
            if (group.isSuccess) {
                openWindow();
            } else {
                reject(t("PnAnInfoWindow.noPermission"));
            }
        });
        group.run();
        function openWindow() {
            opened = true;
            let windowId = (0,index_esm/* ulid */.Z0)();
            let eventType = "openAppBackToMainActivitySelected-".concat(windowId);
            const eventBackType = "".concat(eventType, "back");
            let listenIndex = WebViewJs/* WebViewJs */.L.instance.shellListen(androidDispatchers/* androidDispatchers */.m.WebViewJsDispatcher.name, eventType, eventBackType, true, onSelectApp);
            console.log('openWindow_fn eventType=', eventType, eventBackType);
            let conf = getHtmlPnAnInfoWindowConf(windowId, eventType);
            let win = Window.create(conf);
            win.init().open().addEventListener(Window.eventTypeDismiss, onDismiss);
            function onSelectApp(s) {
                console.log('openWindow_fn onSelectApp', s);
                let o = JSON.parse(s);
                isSuccess = true;
                resolve(o);
                if (autoCloseWhenSelected) {
                    opened = false;
                    WebViewJs/* WebViewJs */.L.instance.shellRemoveListen(androidDispatchers/* androidDispatchers */.m.WebViewJsDispatcher.name, listenIndex);
                    windowUtils/* windowUtils */.q.exitWindowById(windowId);
                }
            }
            function onDismiss() {
                opened = false;
                WebViewJs/* WebViewJs */.L.instance.shellRemoveListen(androidDispatchers/* androidDispatchers */.m.WebViewJsDispatcher.name, listenIndex);
                console.log('openWindow_fnonDismiss_fn', androidDispatchers/* androidDispatchers */.m.WebViewJsDispatcher.name, listenIndex);
                if (!isSuccess) {
                    reject(t("PnAnInfoWindow.noPnSelected"));
                }
            }
        }
    });
}


/***/ }),

/***/ 93579:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   IS: () => (/* binding */ createActionOrTriggerListLinkRender),
/* harmony export */   cI: () => (/* binding */ createActionOrTriggerButtonRender)
/* harmony export */ });
/* unused harmony export ActionOrTriggerListLinkRender */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(94513);
/* harmony import */ var _barrel_optimize_names_Button_mui_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(28669);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(97097);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(75640);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);




function ActionOrTriggerListLinkRender(param) {
    let { query, children, pathname, id } = param;
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
        href: {
            pathname,
            query
        },
        "data-id": id,
        children: children
    });
}
function createActionOrTriggerListLinkRender(subPath, id, extraQuery) {
    return (param)=>{
        let { query, children, item } = param;
        const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();
        const pathname = "".concat(router.pathname).concat(subPath);
        return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(ActionOrTriggerListLinkRender, {
            query: {
                ...query,
                ...extraQuery
            },
            pathname: pathname,
            id: id,
            children: children
        });
    };
}
function createActionOrTriggerButtonRender(onSelect) {
    return (param)=>{
        let { query, children, item } = param;
        const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();
        function onClick() {
            onSelect({
                query,
                item,
                router
            });
        }
        return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_barrel_optimize_names_Button_mui_material__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A, {
            id: item.id,
            "data-id": item.id,
            onClick: onClick,
            children: children
        });
    };
}


/***/ })

}]);
//# sourceMappingURL=3053-29c06130e746ca29.js.map