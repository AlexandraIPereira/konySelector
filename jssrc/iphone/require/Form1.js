define("Form1", function() {
    return function(controller) {
        function addWidgetsForm1() {
            this.setDefaultUnit(kony.flex.DP);
            var flxBtn = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "8%",
                "id": "flxBtn",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "50%",
                "width": "100%"
            }, {}, {});
            flxBtn.setDefaultUnit(kony.flex.DP);
            var btnNavegar = new kony.ui.Button({
                "centerX": "50%",
                "centerY": "54.27%",
                "focusSkin": "defBtnFocus",
                "height": "50dp",
                "id": "btnNavegar",
                "isVisible": true,
                "left": "40dp",
                "onClick": controller.AS_Button_eb04bb168e8b4972b27112650df314a4,
                "skin": "CopydefBtnNormal0a4012180ed8b46",
                "text": kony.i18n.getLocalizedString("btn_navegar"),
                "top": "200dp",
                "width": "300dp",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": true,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "showProgressIndicator": true
            });
            flxBtn.add(btnNavegar);
            var flxListbox = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "8%",
                "id": "flxListbox",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": 0,
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "40%",
                "width": "100%"
            }, {}, {});
            flxListbox.setDefaultUnit(kony.flex.DP);
            var listBoxPrueba = new kony.ui.ListBox({
                "focusSkin": "defListBoxFocus",
                "height": "100%",
                "id": "listBoxPrueba",
                "isVisible": true,
                "left": "10%",
                "masterData": [
                    ["lb1", "Placeholder One"],
                    ["lb2", "Placeholder Two"],
                    ["lb3", "Placeholder Three"]
                ],
                "skin": "defListBoxNormal",
                "top": "0dp",
                "width": "80%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [3, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "dropDownImage": "listboxarw.png",
                "groupCells": false,
                "placeholder": "Seleccione un elemento",
                "viewConfig": {
                    "toggleViewConfig": {
                        "viewStyle": constants.LISTBOX_TOGGLE_VIEW_STYLE_PLAIN
                    }
                },
                "viewType": constants.LISTBOX_VIEW_TYPE_LISTVIEW,
                "inputAccessoryViewType": constants.LISTBOX_INPUTACCESSORYVIEW_CANCEL
            });
            flxListbox.add(listBoxPrueba);
            this.add(flxBtn, flxListbox);
        };
        return [{
            "addWidgets": addWidgetsForm1,
            "enabledForIdleTimeout": false,
            "id": "Form1",
            "layoutType": kony.flex.FREE_FORM,
            "needAppMenu": false,
            "preShow": function(eventobject) {
                controller.AS_Form_b29f0141a8be4c5c97286751af059616(eventobject);
            },
            "skin": "slForm"
        }, {
            "displayOrientation": constants.FORM_DISPLAY_ORIENTATION_PORTRAIT,
            "layoutType": kony.flex.FREE_FORM,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "configureExtendBottom": false,
            "configureExtendTop": false,
            "configureStatusBarStyle": false,
            "footerOverlap": false,
            "formTransparencyDuringPostShow": "100",
            "headerOverlap": false,
            "inputAccessoryViewType": constants.FORM_INPUTACCESSORYVIEW_CANCEL,
            "needsIndicatorDuringPostShow": false,
            "retainScrollPosition": false,
            "titleBar": false,
            "titleBarSkin": "slTitleBar"
        }]
    }
});