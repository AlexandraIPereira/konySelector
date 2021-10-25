define("userForm2Controller", {
    //Type your controller code here 
});
define("Form2ControllerActions", {
    /*
        This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    AS_Form_d803c623fe21412fa83a065b0f0410e0: function AS_Form_d803c623fe21412fa83a065b0f0410e0(eventobject) {
        var self = this;
        kony.application.destroyForm("frmHome");
        var ntf = new kony.mvc.Navigation("frmHome");
        ntf.navigate();
    }
});
define("Form2Controller", ["userForm2Controller", "Form2ControllerActions"], function() {
    var controller = require("userForm2Controller");
    var controllerActions = ["Form2ControllerActions"];
    return kony.visualizer.mixinControllerActions(controller, controllerActions);
});
