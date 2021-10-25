//startup.js
var globalhttpheaders = {};
var appConfig = {
    appId: "I18n",
    appName: "I18n",
    appVersion: "1.0.0",
    isturlbase: "https://infinity2021.sybven.com:8443/services",
    isDebug: true,
    isMFApp: true,
    appKey: "203d1676978264058cef0f63436ae673",
    appSecret: "d7a6bbc4b3b23d3e0761053dc9f0ef13",
    serviceUrl: "https://infinity2021.sybven.com:8443/authService/100000002/appconfig",
    svcDoc: {
        "identity_meta": {
            "FacebookSample": {
                "success_url": "allow_any"
            }
        },
        "app_version": "1.0",
        "baseId": "86c35b93-95de-44a5-a014-6049c51fa7d8",
        "app_default_version": "1.0",
        "login": [{
            "provider_type": "oauth2",
            "alias": "FacebookSample",
            "type": "oauth2",
            "prov": "FacebookSample",
            "url": "https://infinity2021.sybven.com:8443/authService/100000002"
        }],
        "services_meta": {},
        "selflink": "https://infinity2021.sybven.com:8443/authService/100000002/appconfig",
        "integsvc": {
            "_internal_logout": "https://infinity2021.sybven.com:8443/services/IST"
        },
        "service_doc_etag": "0000017CB951DB50",
        "appId": "f440c841-e7c5-41f6-87a5-7150363fddb5",
        "identity_features": {
            "reporting_params_header_allowed": true
        },
        "name": "App 4",
        "reportingsvc": {
            "session": "https://infinity2021.sybven.com:8443/services/IST",
            "custom": "https://infinity2021.sybven.com:8443/services/CMS"
        }
    },
    runtimeAppVersion: "1.0",
    eventTypes: ["FormEntry", "Error", "Crash"],
};
sessionID = "";

function setAppBehaviors() {
    kony.application.setApplicationBehaviors({
        applyMarginPaddingInBCGMode: false,
        adherePercentageStrictly: true,
        retainSpaceOnHide: true,
        marginsIncludedInWidgetContainerWeight: true,
        isMVC: true,
        APILevel: 8400
    })
};

function themeCallBack() {
    initializeGlobalVariables();
    applicationController = require("applicationController");
    callAppMenu();
    kony.application.setApplicationInitializationEvents({
        init: applicationController.appInit,
        postappinit: function(eventObj) {
            applicationController.postAppInitCallBack(eventObj);
        },
        showstartupform: function() {
            new kony.mvc.Navigation("frmHome").navigate();
        }
    });
};

function onSuccess(oldlocalname, newlocalename, info) {
    loadResources();
};

function onFailure(errorcode, errormsg, info) {
    loadResources();
};

function loadResources() {
    globalhttpheaders = {};
    kony.os.loadLibrary({
        "javaclassname": "com.konylabs.ffi.N_KonyLogger"
    });
    kony.os.loadLibrary({
        "javaclassname": "com.konylabs.ffi.N_binarydata"
    });
    sdkInitConfig = {
        "appConfig": appConfig,
        "isMFApp": appConfig.isMFApp,
        "appKey": appConfig.appKey,
        "appSecret": appConfig.appSecret,
        "eventTypes": appConfig.eventTypes,
        "serviceUrl": appConfig.serviceUrl
    }
    kony.setupsdks(sdkInitConfig, onSuccessSDKCallBack, onSuccessSDKCallBack);
};

function onSuccessSDKCallBack() {
    kony.theme.setCurrentTheme("default", themeCallBack, themeCallBack);
}
kony.application.setApplicationMode(constants.APPLICATION_MODE_NATIVE);
//This is the entry point for the application.When Locale comes,Local API call will be the entry point.
kony.i18n.setDefaultLocaleAsync("en_GB", onSuccess, onFailure, null);
debugger;