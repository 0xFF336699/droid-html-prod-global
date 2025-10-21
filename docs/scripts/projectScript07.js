(()=>{

    let packageName = "com.eg.android.AlipayGphone";
    let activities = [
        "com.eg.android.AlipayGphone.AlipayLogin"
    ];
    let searchActivity = ["com.alipay.android.phone.businesscommon.globalsearch.ui.MainSearchActivity"]
    let nodesLastCheckTime = 100 * 10 * 25;
    let nodesCheckInterval = 100 * 3;
    let overtime = 1000 * 50;
    let dispatchSuccess = true;
    let dispatchFailed = true;
    let globalBackActionConf = {
        interval:100 * 25
    }
    function createAction(type, value, nextOperateConf){
        return {type, value, nextOperateConf}
    }
    function createNodeCondtion(type, value, action){
        return {type, value, action}
    }
    function createOperateConf(name, type, activities, nodeConditions, nodeCheckList, globalBackActionConf){
        return {name, type, packageName, activities, nodesLastCheckTime, nodesCheckInterval, overtime, nodeConditions, nodeCheckList, globalBackActionConf, dispatchSuccess, dispatchFailed}
    }
    function createMainOperateConf(name, type, nodeConditions, nodeCheckList){
        return createOperateConf(name, type, activities, nodeConditions, nodeCheckList, globalBackActionConf);
    }
    // 搜索“842806133”，立即领红包
    let actionReceiveEnvelopeClick = createAction("TryClick", undefined);
    let nodeConditionReceiveEnvelope = createNodeCondtion("Text", "搜索“842806133”，立即领红包", actionReceiveEnvelopeClick);
    let nodeConditionsReceiveEnvelope = [nodeConditionReceiveEnvelope];
    let operateConfReceiveEnvelope = createOperateConf("点击领红包-带数字的","node", searchActivity, nodeConditionsReceiveEnvelope, [[{index:0, doAction:true}]]);
    // operateConfReceiveEnvelope.nodesLastCheckTime = 100 * 10 * 25;
    // operateConfReceiveEnvelope.overtime = 100 * 10 * 50;

    let actionSearchConfirmClick = createAction("Click", undefined, operateConfReceiveEnvelope);
    let nodeConditionSearchConfirmClick = createNodeCondtion("Id", "com.alipay.mobile.antui:id/search_confirm", actionSearchConfirmClick);
    let nodeConditionsSearchConfirmClick = [nodeConditionSearchConfirmClick];
    let operateConfSearchConfirmClick = createOperateConf("点击搜索按钮","node", searchActivity, nodeConditionsSearchConfirmClick, [[{index:0, doAction:true}]], globalBackActionConf);
    // operateConfSearchConfirmClick.nodesLastCheckTime = 100 * 10 * 25;
    // operateConfSearchConfirmClick.overtime = 100 * 10 * 50;

    let actionSetTextEnvelope = createAction("SetText", "复制 842806133 扌 丁開✔吱怤.b`a`o✔去搜索，实惠的 hong 笣，就有美好生活", operateConfSearchConfirmClick);
    actionSetTextEnvelope.beforeSetTextDelay = 100 * 50;
    actionSetTextEnvelope.afterSetTextDelay = 100 * 20;
    let nodeConditionEnvelope = createNodeCondtion("Id","com.alipay.mobile.antui:id/search_input_box", actionSetTextEnvelope);
    let nodeConditionsEnvelope = [nodeConditionEnvelope];
    let nodeCheckListEnvelope = [[{index:0, doAction:true}]];
    let operateConfEnvelope = createOperateConf("设置input文本","node", activities.concat(["com.alipay.android.phone.businesscommon.globalsearch.ui.MainSearchActivity"]), nodeConditionsEnvelope, nodeCheckListEnvelope);
    // operateConfEnvelope.nodesLastCheckTime = 100 * 10 * 25;
    // operateConfEnvelope.overtime = 100 * 10 * 50;
    let actionTryClickHomeTitleSEarchHint = createAction("TryClick", undefined, operateConfEnvelope);

    let nodeConditionHomeTitleSearchHint = createNodeCondtion("Id", "com.alipay.android.phone.openplatform:id/home_title_search_hint", actionTryClickHomeTitleSEarchHint);

    let operateConfHomeTitleSearchHint = createOperateConf("点击首页文本框", "node", activities, [nodeConditionHomeTitleSearchHint], [[{index:0, doAction:true}]]);


    let initData = {
        projectInitData: {
            name: "mainProject",
            children: [
                {
                    name: "mainTask",
                    children: [
                        {
                            name: "openAlipay",
                            type: javaLib["fanfanlo/javajs/v1/project/components/action/app/openApp"].type,
                            data: {
                                packageName: "com.eg.android.AlipayGphone"
                            }
                        },
                        {
                            name: "backToMainAction",
                            type: javaLib["fanfanlo/javajs/v1/project/components/action/a11y/TryBackToMain"].type,
                            data: {
                                type:"a11y",
                                name:"等待首页文本框",
                                packageName: "com.eg.android.AlipayGphone",
                                activities: [
                                    "com.eg.android.AlipayGphone.AlipayLogin"
                                ],
                                nodesLastCheckTime:100 * 15 * 20,
                                nodesCheckInterval:100 * 10,
                                overtime:1000 * 125,
                                globalBackActionConf:{
                                    interval:100 * 25
                                },
                                nodeConditions:[
                                    nodeConditionHomeTitleSearchHint,
                                    {
                                        name:"点击左下角首页",
                                        type:"Id",
                                        value:"com.alipay.android.tablauncher:id/tab_description",
                                        next:{
                                            type:"Text",
                                            value:"首页"
                                        },
                                        action:{
                                            type:"TryClick",
                                            nextOperateConf:operateConfHomeTitleSearchHint
                                        }
                                    }
                                ],
                                nodeCheckList:[
                                    [{index:0,doAction:true}],
                                    [{index:1, doAction:true}]
                                ]
                            }
                        }
                    ]
                }
            ]
        }
    }


    try{
        let data = initData;
        console.log('project data initialized');
        javaLib["fanfanlo/javajs/v1/project/base/projectMembers"].projectBuilder(data)
    }catch(e){
        console.log("in java, project init error",e.message, e.stack)
    }
})();