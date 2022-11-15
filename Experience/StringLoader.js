import { EventEmitter } from "events";
import Experience from "./Experience.js";

export default class StringLoader extends EventEmitter{ 
    constructor() {
        super()
        this.experience = new Experience();

        this.englishSwitch = document.getElementById("en_switcher");
        this.frenchSwitch = document.getElementById("fr_switcher");
        this.language = this.experience.LanguageSwitcher.language;
        

        this.assignHero();
        this.setNavBarLanguageText();
       this.setEventsListener();

        

    }

    setEventsListener(){
        this.englishSwitch.addEventListener("click", () => {
            this.emit("language_switch", "en");
        });
        this.frenchSwitch.addEventListener("click", () => {
            this.emit("language_switch", "fr");
        });
    }

    assignHero(){
        document.querySelector("#heroMainTitle").textContent = (this.language.heroOwnTheYacht);
        document.querySelector("#heroMainDescription").textContent = (this.language.heroLiveFreedom);
        document.querySelector("#heroMainLogoText").textContent = (this.language.logo);
        document.querySelector("#heroDescriptorClub").textContent = (this.language.yachtClub);
    }

    assignNavBar(){
        document.getElementById("navBarTitle").innerText = this.experience.LanguageSwitcher.language.navBarTitle;
        document.getElementById("navBarHome").innerText = this.experience.LanguageSwitcher.language.navBarHome;
        document.getElementById("navBarTwo").innerText = this.experience.LanguageSwitcher.language.navBarTwo;
        document.getElementById("navBarThree").innerText = this.experience.LanguageSwitcher.language.navBarThree;
    }
    
    assignSectionOne(){
    }

    assignSectionTwo(

    ) {}

    assignSectionThree(

    ){}

    updateLanguage(){
        this.language = this.experience.LanguageSwitcher.language;
    }

    update(){
        this.updateLanguage();
        this.assignHero();
        this.setNavBarLanguageText();
    }


}