define("Form2", function() {
    return function(controller) {
        function addWidgetsForm2() {
            this.setDefaultUnit(kony.flex.DP);
            this.add();
        };
        return [{
            "addWidgets": addWidgetsForm2,
            "enabledForIdleTimeout": false,
            "id": "Form2",
            "layoutType": kony.flex.FREE_FORM,
            "needAppMenu": false,
            "postShow": controller.AS_Form_d803c623fe21412fa83a065b0f0410e0,
            "skin": "slForm"
        }, {
            "displayOrientation": constants.FORM_DISPLAY_ORIENTATION_PORTRAIT,
            "layoutType": kony.flex.FREE_FORM,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "footerOverlap": false,
            "headerOverlap": false,
            "menuPosition": constants.FORM_MENU_POSITION_AFTER_APPMENU,
            "retainScrollPosition": false,
            "titleBar": true,
            "titleBarSkin": "slTitleBar",
            "windowSoftInputMode": constants.FORM_ADJUST_PAN
        }]
    }
});