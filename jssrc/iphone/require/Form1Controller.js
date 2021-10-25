define("userForm1Controller", {
    preShow: function() {
        alert("Entro al preShow");
        this.listado = [
            ["1", kony.i18n.getLocalizedString("kony.ejemplo.1")],
            ["2", kony.i18n.getLocalizedString("kony.ejemplo.2")],
            ["3", kony.i18n.getLocalizedString("kony.ejemplo.3")],
        ];
        this.view.listBoxPrueba.onSelection = this.onSelectionListSSN;
        this.view.listBoxPrueba.masterData = this.listado;
        this.view.listBoxPrueba.popupTitle = kony.i18n.getLocalizedString("kony.listbox.Select");
        this.view.btnNavegar.text = kony.i18n.getLocalizedString("btn_navegar");
    },
    onSelectionListSSN: function() {
        let arregloValores = this.view.listBoxPrueba.selectedKeyValue;
        let seleccion = arregloValores[0];
        switch (seleccion) {
            case this.listado[0][0]:
                kony.print(`AP Seleccione 1`);
                break;
            case this.listado[1][0]:
                kony.print(`AP Seleccione 2`);
                break;
            case this.listado[2][0]:
                kony.print(`AP Seleccione 3`);
                break;
            default:
                kony.print(`NO HUBO COINCIDENCIAS ${seleccion}`);
        }
    },
});
define("Form1ControllerActions", {
    /*
        This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    AS_Button_eb04bb168e8b4972b27112650df314a4: function AS_Button_eb04bb168e8b4972b27112650df314a4(eventobject) {
        var self = this;
        var ntf = new kony.mvc.Navigation("frmHome");
        ntf.navigate();
    },
    AS_Form_b29f0141a8be4c5c97286751af059616: function AS_Form_b29f0141a8be4c5c97286751af059616(eventobject) {
        var self = this;
        return self.preShow.call(this);
    }
});
define("Form1Controller", ["userForm1Controller", "Form1ControllerActions"], function() {
    var controller = require("userForm1Controller");
    var controllerActions = ["Form1ControllerActions"];
    return kony.visualizer.mixinControllerActions(controller, controllerActions);
});
