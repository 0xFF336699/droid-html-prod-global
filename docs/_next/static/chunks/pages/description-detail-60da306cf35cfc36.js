(self["webpackChunk_N_E"] = self["webpackChunk_N_E"] || []).push([[716],{

/***/ 39474:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ DescriptionDetailPage)
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/react@19.1.0/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(94513);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react@19.1.0/node_modules/react/index.js
var react = __webpack_require__(94285);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/Box/Box.js + 2 modules
var Box = __webpack_require__(92061);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/IconButton/IconButton.js + 1 modules
var IconButton = __webpack_require__(10184);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/Typography/Typography.js
var Typography = __webpack_require__(26512);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/CircularProgress/CircularProgress.js + 1 modules
var CircularProgress = __webpack_require__(95657);
// EXTERNAL MODULE: ../../node_modules/.pnpm/next@15.3.5_@babel+core@7.28.0_@playwright+test@1.57.0_babel-plugin-macros@3.1.0_react-dom@19_gjfccjsd7b6xv5ktyj7vxamu6q/node_modules/next/router.js
var next_router = __webpack_require__(1674);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+icons-material@6.4.12_@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_re_5ewkm5t5g27pzq5tz62v6ktvti/node_modules/@mui/icons-material/esm/ArrowBack.js
var ArrowBack = __webpack_require__(60941);
// EXTERNAL MODULE: ../../libs/fanfanlo/src/log/Log.ts + 1 modules
var Log = __webpack_require__(89597);
// EXTERNAL MODULE: ../../libs/app/ui/src/components/app/AppShell.tsx + 2 modules
var AppShell = __webpack_require__(65505);
// EXTERNAL MODULE: ../../libs/app/ui/src/components/appbar/AppBar.tsx + 3 modules
var AppBar = __webpack_require__(82524);
// EXTERNAL MODULE: ../../libs/droid/project-interface/src/storage/storage.ts
var storage = __webpack_require__(55863);
;// ../../libs/droid/project-interface/src/utils/entityFinder.ts

const fileLog = new Log/* Log */.tG(false, 'description_entityFinder');
/**
 * 在TriggerActionGroup中查找TriggerAction
 */ function findInTriggerActionGroup(group, id) {
    const fnLog = fileLog.sub(false, 'findInTriggerActionGroup_fn');
    // fnLog.pause = true;
    fnLog.log('开始查找TriggerAction, group:', group, 'id:', id);
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
    const result = group.list.find((ta)=>ta.id === id) || null;
    fnLog.log('查找结果:', result);
    return result;
}
/**
 * 在ActionGroup中查找Action
 */ function findInActionGroup(group, id) {
    const fnLog = fileLog.sub(false, 'findInActionGroup_fn');
    // fnLog.pause = true;
    fnLog.log('开始查找Action, group:', group, 'id:', id);
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
    const result = group.list.find((a)=>a.id === id) || null;
    fnLog.log('查找结果:', result);
    return result;
}
/**
 * 在TriggerGroup中查找Trigger
 */ function findInTriggerGroup(group, id) {
    const fnLog = fileLog.sub(false, 'findInTriggerGroup_fn');
    // fnLog.pause = true;
    fnLog.log('开始查找Trigger, group:', group, 'id:', id);
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
    const result = group.list.find((t)=>t.id === id) || null;
    fnLog.log('查找结果:', result);
    return result;
}
/**
 * 在单个project中查找实体
 */ function findEntityInProject(project, params) {
    const fnLog = fileLog.sub(false, 'findEntityInProject_fn');
    // fnLog.pause = true;
    fnLog.log('开始在project中查找实体, project:', project, 'params:', params);
    const { triggerActionGroupId, triggerActionId, actionGroupId, actionId, triggerGroupId, triggerId } = params;
    if (!project) {
        fnLog.log('project为null');
        return null;
    }
    // 如果提供了triggerActionGroupId
    if (triggerActionGroupId) {
        const triggerActionGroup = project.triggerActionGroup;
        fnLog.log('查找triggerActionGroup, id:', triggerActionGroupId);
        if (triggerActionGroup && triggerActionGroup.id === triggerActionGroupId) {
            fnLog.log('找到triggerActionGroup');
            return {
                entity: triggerActionGroup,
                type: 'triggerActionGroup'
            };
        } else {
            fnLog.log('未找到triggerActionGroup');
        }
    }
    // 如果提供了triggerActionId
    if (triggerActionId) {
        const triggerActionGroup = project.triggerActionGroup;
        fnLog.log('查找triggerAction, id:', triggerActionId);
        if (!triggerActionGroup) {
            fnLog.log('project.triggerActionGroup为null');
        } else {
            const triggerAction = findInTriggerActionGroup(triggerActionGroup, triggerActionId);
            if (triggerAction) {
                fnLog.log('找到triggerAction');
                // 如果还需要查找更深层的action或trigger
                if (actionGroupId || actionId) {
                    const actionGroup = triggerAction.actionGroup;
                    fnLog.log('查找actionGroup或action');
                    if (actionGroupId && actionGroup && actionGroup.id === actionGroupId) {
                        fnLog.log('找到actionGroup');
                        return {
                            entity: actionGroup,
                            type: 'actionGroup'
                        };
                    }
                    if (actionId && actionGroup) {
                        const action = findInActionGroup(actionGroup, actionId);
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
                if (triggerGroupId || triggerId) {
                    const triggerGroup = triggerAction.triggerGroup;
                    fnLog.log('查找triggerGroup或trigger');
                    if (triggerGroupId && triggerGroup && triggerGroup.id === triggerGroupId) {
                        fnLog.log('找到triggerGroup');
                        return {
                            entity: triggerGroup,
                            type: 'triggerGroup'
                        };
                    }
                    if (triggerId && triggerGroup) {
                        const trigger = findInTriggerGroup(triggerGroup, triggerId);
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
                // 如果没有更深层的查找，返回triggerAction
                fnLog.log('返回triggerAction');
                return {
                    entity: triggerAction,
                    type: 'triggerAction'
                };
            } else {
                fnLog.log('未找到triggerAction');
            }
        }
    }
    // 如果只提供了projectId，返回project
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
    // fnLog.pause = true;
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
    // 如果提供了projectClientId，先找到对应的project
    if (projectClientId) {
        fnLog.log('查找project, client_id:', projectClientId);
        const project = allProjects.find((p)=>p.client_id === projectClientId);
        if (!project) {
            fnLog.log('未找到project');
            return null;
        }
        fnLog.log('找到project, 开始在project中查找实体');
        const result = findEntityInProject(project, params);
        return result;
    }
    // 如果没有提供projectClientId，遍历所有project查找
    fnLog.log('未提供projectClientId, 遍历所有projects查找');
    for(let i = 0; i < allProjects.length; i++){
        const project = allProjects[i];
        fnLog.log('检查project, index:', i, 'client_id:', project.client_id);
        const result = findEntityInProject(project, params);
        if (result) {
            fnLog.log('找到实体, type:', result.type);
            return result;
        }
    }
    fnLog.log('未找到任何实体');
    return null;
}

// EXTERNAL MODULE: ../../node_modules/.pnpm/react-i18next@15.6.0_i18next@24.2.3_typescript@5.7.3__react-dom@19.1.0_react@19.1.0__react@19.1.0_typescript@5.7.3/node_modules/react-i18next/dist/es/index.js + 15 modules
var es = __webpack_require__(56137);
// EXTERNAL MODULE: ../../libs/fanfanlo/src/translation/TranslationGlobalData.ts
var TranslationGlobalData = __webpack_require__(69753);
// EXTERNAL MODULE: ../../node_modules/.pnpm/google-translate-api-x@10.7.2/node_modules/google-translate-api-x/index.cjs
var google_translate_api_x = __webpack_require__(58143);
var google_translate_api_x_default = /*#__PURE__*/__webpack_require__.n(google_translate_api_x);
// EXTERNAL MODULE: ../../libs/fanfanlo/src/storage/indexed-db-utils.ts
var indexed_db_utils = __webpack_require__(55507);
;// ../../libs/fanfanlo/src/translation/translationCache.ts


// 文件级别log
const translationCache_fileLog = new Log/* Log */.tG(false, 'translationCache_file');
// fileLog.pause = true;
const CACHE_NAMESPACE = 'translation_cache';
let cacheStore = null;
/**
 * 初始化缓存
 */ async function initCache() {
    const fnLog = translationCache_fileLog.sub(false, 'initCache_fn');
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
    const fnLog = translationCache_fileLog.sub(false, 'generateCacheKey_fn');
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
    const fnLog = translationCache_fileLog.sub(false, 'getFromCache_fn');
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
    const fnLog = translationCache_fileLog.sub(false, 'saveToCache_fn');
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
    const fnLog = translationCache_fileLog.sub(false, 'clearCache_fn');
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

;// ../../libs/droid/project-interface/src/common/IEntityDescription.ts
/**
 * 描述内容类型枚举
 */ var DescriptionContentType = /*#__PURE__*/ function(DescriptionContentType) {
    DescriptionContentType["TEXT"] = "text";
    DescriptionContentType["URL"] = "url";
    DescriptionContentType["HTML"] = "html";
    return DescriptionContentType;
}({});

;// ../../libs/droid/project-interface/src/utils/descriptionUtils.ts

const descriptionUtils_fileLog = new Log/* Log */.tG(false, 'description_utils_validateUrl');
// fileLog.pause = true;
// fileLog.childrenPaused = true;
/**
 * 验证URL是否有效且安全
 * @param url 待验证的URL
 * @returns 是否有效
 */ function validateUrl(url) {
    const fnLog = descriptionUtils_fileLog.sub(false, 'validateUrl_fn');
    // fnLog.pause = true;
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

;// ../../libs/droid/project-interface/src/components/description-renderer/DescriptionContentRenderer.tsx








const DescriptionContentRenderer_fileLog = new Log/* Log */.tG(false, 'DescriptionContentRenderer_ui');
/**
 * 描述内容渲染器
 * 根据内容类型渲染不同的展示方式
 */ function DescriptionContentRenderer(props) {
    const uiLog = DescriptionContentRenderer_fileLog.sub(false, 'DescriptionContentRenderer_ui');
    // uiLog.pause = true;
    const { t } = (0,es/* useTranslation */.Bd)('droid/project-interface/components/description-renderer/content');
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
    // 文本类型 - 使用TranslationComponent
    if (contentType === DescriptionContentType.TEXT) {
        uiLog.log('渲染TEXT类型, 使用TranslationComponent');
        return /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.A, {
            className: className,
            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(TranslationComponent, {
                sourceLang: sourceLang,
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.A, {
                    children: content
                })
            })
        });
    }
    // HTML类型 - 使用TranslationComponent + isHtml
    if (contentType === DescriptionContentType.HTML) {
        uiLog.log('渲染HTML类型, 使用TranslationComponent isHtml');
        return /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.A, {
            className: className,
            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(TranslationComponent, {
                sourceLang: sourceLang,
                isHtml: true,
                children: content
            })
        });
    }
    // URL类型 - 使用iframe渲染
    if (contentType === DescriptionContentType.URL) {
        uiLog.log('渲染URL类型');
        const isValid = validateUrl(content);
        uiLog.log('URL是否有效:', isValid);
        if (!isValid) {
            uiLog.error('URL无效:', content);
            return /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.A, {
                className: className,
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.A, {
                    color: "error",
                    children: t('DescriptionContentRenderer.invalidUrl', {
                        url: content
                    })
                })
            });
        }
        return /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.A, {
            className: className,
            children: /*#__PURE__*/ (0,jsx_runtime.jsx)("iframe", {
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
    // 未知类型
    uiLog.error('未知的contentType:', contentType);
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.A, {
        className: className,
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.A, {
            color: "error",
            children: t('DescriptionContentRenderer.unknownType', {
                type: contentType
            })
        })
    });
}

;// ./src/pages/description-detail/index.tsx












const description_detail_fileLog = new Log/* Log */.tG(false, 'DescriptionDetailPage_ui');
// fileLog.pause = true;
// fileLog.childrenPaused = true;
function DescriptionDetailPage() {
    const uiLog = description_detail_fileLog.sub(false, 'DescriptionDetailPage_ui');
    // uiLog.pause = true;
    const { t } = (0,es/* useTranslation */.Bd)('homepage/pages/description-detail/content');
    const router = (0,next_router.useRouter)();
    const [loading, setLoading] = (0,react.useState)(true);
    const [error, setError] = (0,react.useState)(null);
    const [entityResult, setEntityResult] = (0,react.useState)(null);
    const [descriptionContent, setDescriptionContent] = (0,react.useState)(null);
    const [entityName, setEntityName] = (0,react.useState)('');
    (0,react.useEffect)(()=>{
        const fnLog = uiLog.sub(false, 'effect_loadEntity_fn');
        // fnLog.pause = true;
        if (!router.isReady) {
            fnLog.log('router未准备好');
            return;
        }
        fnLog.log('开始加载实体, query:', router.query);
        const query = router.query;
        const field = query.field;
        if (!field) {
            fnLog.error('缺少field参数');
            setError(t('DescriptionDetailPage.missingField'));
            setLoading(false);
            return;
        }
        fnLog.log('field:', field);
        const params = {
            projectClientId: query.projectClientId,
            triggerActionGroupId: query.triggerActionGroupId,
            triggerActionId: query.triggerActionId,
            actionGroupId: query.actionGroupId,
            actionId: query.actionId,
            triggerGroupId: query.triggerGroupId,
            triggerId: query.triggerId
        };
        fnLog.log('查找参数:', params);
        const allProjects = [
            ...storage/* projectStore */.D.list,
            ...storage/* projectStore */.D.draft
        ];
        fnLog.log('所有projects数量:', allProjects.length);
        const result = findEntityAcrossProjects(allProjects, params);
        if (!result) {
            fnLog.error('未找到实体');
            setError(t('DescriptionDetailPage.entityNotFound'));
            setLoading(false);
            return;
        }
        fnLog.log('找到实体, type:', result.type, 'entity:', result.entity);
        setEntityResult(result);
        const entity = result.entity;
        if (!entity) {
            fnLog.error('entity为null');
            setError(t('DescriptionDetailPage.entityEmpty'));
            setLoading(false);
            return;
        }
        // 获取实体名字
        const name = entity.name || t('DescriptionDetailPage.unnamed');
        fnLog.log('实体名字:', name);
        setEntityName(name);
        // 获取描述内容
        let content = null;
        if (field === 'summary') {
            content = entity.summary || null;
        } else if (field === 'fullIntroduction') {
            content = entity.fullIntroduction || null;
        } else {
            fnLog.error('未知的field:', field);
            setError(t('DescriptionDetailPage.unknownField', {
                field
            }));
            setLoading(false);
            return;
        }
        fnLog.log('描述内容:', content);
        if (!content) {
            fnLog.log('描述内容为空');
            const fieldName = field === 'summary' ? t('DescriptionDetailPage.summaryName') : t('DescriptionDetailPage.fullIntroductionName');
            setError(t('DescriptionDetailPage.noContent', {
                fieldName
            }));
            setLoading(false);
            return;
        }
        setDescriptionContent(content);
        setLoading(false);
    }, [
        router.isReady,
        router.query,
        t
    ]);
    const handleBack = ()=>{
        const fnLog = uiLog.sub(false, 'handleBack_fn');
        // fnLog.pause = true;
        fnLog.log('返回上一页');
        router.back();
    };
    const appBarProps = {
        title: /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.A, {
            sx: {
                display: 'flex',
                alignItems: 'center'
            },
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsx)(IconButton/* default */.A, {
                    onClick: handleBack,
                    sx: {
                        mr: 1
                    },
                    "data-testid": "DescriptionDetailPage__backButton__01JG2B0090",
                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(ArrowBack/* default */.A, {})
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsxs)(Typography/* default */.A, {
                    variant: "h6",
                    children: [
                        entityName,
                        " - ",
                        t('DescriptionDetailPage.detail')
                    ]
                })
            ]
        }),
        back: false
    };
    uiLog.log('渲染页面, loading:', loading, 'error:', error);
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(AppShell/* AppShell */.G, {
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(AppBar/* AppbarContainer */.W, {
            appbarProps: appBarProps,
            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.A, {
                sx: {
                    p: 3
                },
                children: [
                    loading && /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.A, {
                        sx: {
                            display: 'flex',
                            justifyContent: 'center',
                            mt: 4
                        },
                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(CircularProgress/* default */.A, {})
                    }),
                    error && /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.A, {
                        color: "error",
                        children: error
                    }),
                    !loading && !error && descriptionContent && /*#__PURE__*/ (0,jsx_runtime.jsx)(TranslationComponent, {
                        sourceLang: "auto",
                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(DescriptionContentRenderer, {
                            data: descriptionContent
                        })
                    })
                ]
            })
        })
    });
}


/***/ }),

/***/ 42163:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {


    (window.__NEXT_P = window.__NEXT_P || []).push([
      "/description-detail",
      function () {
        return __webpack_require__(39474);
      }
    ]);
    if(false) {}
  

/***/ }),

/***/ 69753:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, [472,1172,5483,7468,636,6593,8792], () => (__webpack_exec__(42163)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ _N_E = __webpack_exports__;
/******/ }
]);
//# sourceMappingURL=description-detail-60da306cf35cfc36.js.map