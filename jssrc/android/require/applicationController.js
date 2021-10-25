define({
    appInit: function(params) {
        skinsInit();
        kony.mvc.registry.add("flxSampleRowTemplate", "flxSampleRowTemplate", "flxSampleRowTemplateController");
        kony.mvc.registry.add("flxSectionHeaderTemplate", "flxSectionHeaderTemplate", "flxSectionHeaderTemplateController");
        kony.mvc.registry.add("Form1", "Form1", "Form1Controller");
        kony.mvc.registry.add("Form2", "Form2", "Form2Controller");
        kony.mvc.registry.add("frmHome", "frmHome", "frmHomeController");
        setAppBehaviors();
    },
    postAppInitCallBack: function(eventObj) {},
    appmenuseq: function() {
        new kony.mvc.Navigation("frmHome").navigate();
    }
});