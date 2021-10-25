define({ 

preShow: function(){
   
   alert("Entro al preShow");
   
   this.listado = [
     ["1", kony.i18n.getLocalizedString("kony.ejemplo.1")], 
     ["2",kony.i18n.getLocalizedString("kony.ejemplo.2")],
     ["3",kony.i18n.getLocalizedString("kony.ejemplo.3")],
    ];
  this.view.listBoxPrueba.onSelection= this.onSelectionListSSN;
  this.view.listBoxPrueba.masterData   = this.listado;
  this.view.listBoxPrueba.popupTitle = kony.i18n.getLocalizedString("kony.listbox.Select");
  this.view.btnNavegar.text = kony.i18n.getLocalizedString("btn_navegar");
   
 },
  
  onSelectionListSSN: function(){
    let arregloValores = this.view.listBoxPrueba.selectedKeyValue;
    let seleccion      = arregloValores[0];
    
    switch(seleccion){

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