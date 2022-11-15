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
     



    async returnLanguage() {
      localStorage.getItem('language') == null ? setLanguage('en') : false;
      await fetch('/Experience/Language/' +  localStorage.getItem('language') + '.json')
      .then(response => {
        if(!response.ok){
            throw new Error("HTTP error " + response.status);
       }
       return response.json();
   })
   .then(json => {
       this.language = json;
       console.log(this.language);
   })
   .catch(function () {
       this.dataError = true;
   })
        }
     
    
    setLanguage(lang) {
        localStorage.setItem('language', lang);
        }

}
