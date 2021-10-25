define({ 
/*By using this function, you set a locale based on your input that you select from the 
  list box widget.*/
 setlocaleListbox: function(){
   if(this.view.lstbx.selectedKey=="lb1")
     {
       kony.i18n.setCurrentLocaleAsync("en_GB",this.onsuccesscallback, this.onfailurecallback);
     }
    else if(this.view.lstbx.selectedKey=="lb2")
     {
       kony.i18n.setCurrentLocaleAsync("es_AR", this.onsuccesscallback, this.onfailurecallback);
     }
    else if(this.view.lstbx.selectedKey=="lb3")
     {
       kony.i18n.setCurrentLocaleAsync("fr_FR", this.onsuccesscallback, this.onfailurecallback);
     }
    },

//To check whether the specified locale is supported by the device or not.  
  Checkthelocale: function()                 
  {
    var a = this.view.txtbx.text;
    if(kony.i18n.isLocaleSupportedByDevice("a")===true)
      {
        alert("This locale is supported");
      }
    else
      {
        alert("This Locale is not supported");
      }
  },
//To set a resource bundle for the key "Hello"
  setResourceBundle: function()
  {    
    kony.i18n.setResourceBundle({
      Hello: "Hallo Welt",
    }, "de_DE");
    kony.i18n.setCurrentLocaleAsync("de_DE",this.onsuccesscallback, this.onfailurecallback);  
  
  },

 onsuccesscallback: function(oldLocaleName, newLocaleName)
{
if(newLocaleName=="en_GB")
  {
    alert("You have changed your locale to English");
  }
  else if(newLocaleName=="es_AR")
  {
    alert("You have changed your locale to Spanish");
  }
  else if(newLocaleName=="fr_FR")
  {
    alert("You have changed your locale to French");
  }
  else if(newLocaleName=="de_DE")
    {
      alert("You have set the resource bundle to German");
      this.view.lstbx.masterData.push(["lb4","German"]);
        /*= [
        ["lb1", "English"],
        ["lb2", "Spanish"],
        ["lb3", "French"],
        ["lb4", "German"]
    ];*/
    }
 },
 
  isResourceBundlePresent: function()
  {
    try {
        var exists = kony.i18n.isResourceBundlePresent("en_GB");
        alert("English resource bundle is present " + exists);
    } catch (i18nError) {
        alert("Exception While getting isResourceBundlePresent : " + i18nError);
    }
  },
  
onsuccesscallback1: function(oldLocaleName, newLocaleName)
  {
    if(newLocaleName=="de_DE")
    {
      alert("You have updated the German resource bundle");
    }
  },

  
   onfailurecallback: function()
  {
    alert("Please enter correct locale");
  }
  
 });