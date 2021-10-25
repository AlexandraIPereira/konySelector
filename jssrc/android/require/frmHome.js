define("frmHome", function() {
    return function(controller) {
        function addWidgetsfrmHome() {
            this.setDefaultUnit(kony.flex.DP);
            var flxHome = new kony.ui.FlexScrollContainer({
                "allowHorizontalBounce": false,
                "allowVerticalBounce": true,
                "bounces": true,
                "clipBounds": true,
                "enableScrolling": true,
                "height": "93.78%",
                "horizontalScrollIndicator": true,
                "id": "flxHome",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "pagingEnabled": false,
                "scrollDirection": kony.flex.SCROLL_VERTICAL,
                "skin": "CopyslFSbox0j45b341f53b744",
                "top": "43dp",
                "verticalScrollIndicator": true,
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxHome.setDefaultUnit(kony.flex.DP);
            var lstbx = new kony.ui.ListBox({
                "centerX": "50%",
                "focusSkin": "defListBoxFocus",
                "height": "40dp",
                "id": "lstbx",
                "isVisible": true,
                "left": "37dp",
                "masterData": [
                    ["lb1", "English"],
                    ["lb2", "Spanish"],
                    ["lb3", "French"]
                ],
                "onSelection": controller.AS_ListBox_b105ee406d3a4381865c6a3c4c2f4f17,
                "skin": "CopydefListBoxNormal0df706e15e18f41",
                "top": "35dp",
                "width": "300dp",
                "zIndex": 1,
                "enableHapticFeedback": true
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [3, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "applySkinsToPopup": true,
                "dropDownImage": "listboxarw.png",
                "placeholder": "Language",
                "viewType": constants.LISTBOX_VIEW_TYPE_LISTVIEW
            });
            var btnGetLocale = new kony.ui.Button({
                "centerX": "50%",
                "centerY": "54.27%",
                "focusSkin": "defBtnFocus",
                "height": "50dp",
                "id": "btnGetLocale",
                "isVisible": true,
                "left": "40dp",
                "onClick": controller.AS_Button_i989badeaf8a4ca5b860d36c62ea7358,
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
            }, {});
            var lbl1 = new kony.ui.Label({
                "centerX": "50%",
                "height": "25.54%",
                "id": "lbl1",
                "isVisible": true,
                "left": "22dp",
                "skin": "CopydefLabel0be81bda9c5ec4f",
                "text": kony.i18n.getLocalizedString("Hello"),
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "105dp",
                "width": "87.47%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            flxHome.add(lstbx, btnGetLocale, lbl1);
            var flxHeader = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "43dp",
                "id": "flxHeader",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "CopyslFbox0i42319a41bad44",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxHeader.setDefaultUnit(kony.flex.DP);
            var lblHeader = new kony.ui.Label({
                "centerX": "50%",
                "id": "lblHeader",
                "isVisible": true,
                "left": "60dp",
                "skin": "CopydefLabel0b19cb0440fe944",
                "text": "Internationalization API",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "12dp",
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            flxHeader.add(lblHeader);
            this.add(flxHome, flxHeader);
        };
        return [{
            "addWidgets": addWidgetsfrmHome,
            "enabledForIdleTimeout": false,
            "id": "frmHome",
            "layoutType": kony.flex.FREE_FORM,
            "needAppMenu": false,
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