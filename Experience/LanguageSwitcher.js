import { EventEmitter } from "events";
import Experience  from "./Experience";
import $ from "jquery";

export default class LanguageSwitcher   {
     static instance;
    
    constructor() {
        if(this.instance) return this;
        LanguageSwitcher.instance= this;
        this.language = this.getLanguage();
    }

    

    getLanguage() {
        var dataStore;
        localStorage.getItem('language') == null ? setLanguage('en') : false;
         $.ajax({ 
             url:  '/Experience/Language/' +  localStorage.getItem('language') + '.json', 
             dataType: 'json', async: false ,
             success: function (data) { 
                 dataStore= data;
             }
      });
      return dataStore;
     }

}