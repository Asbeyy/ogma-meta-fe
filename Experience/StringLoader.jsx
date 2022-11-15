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
        

        this.preloaderBoardingYacht = document.getElementById("club");
        this.preloaderBoardingYacht.innerHTML = (this.language.preloaderBoardingYacht);

        

    }

    assignHero(){}
    
    assignSectionOne(){}

    assignSectionTwo() {}

    assignSectionThree(){}


}