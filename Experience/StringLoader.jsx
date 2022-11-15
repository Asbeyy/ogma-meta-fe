import { EventEmitter } from "events";
import $ from "jquery";
import Experience from "./Experience.js";

export default class StringLoader extends EventEmitter{ 
    constructor() {
        super()
        this.experience = new Experience();

        this.englishSwitch = document.getElementById("en_switcher");
        this.frenchSwitch = document.getElementById("fr_switcher");

        this.experience = new Experience();
        this.language = this.experience.LanguageSwitcher.language;
        

        this.assignHero();
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
    
    assignSectionOne(){

    }

    assignSectionTwo(

    ) {}

    assignSectionThree(

    ){}

    update(){
        this.assignHero();
        console.log("reload")
    }


}