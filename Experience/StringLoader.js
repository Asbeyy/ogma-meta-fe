import { EventEmitter } from "events";
import Experience from "./Experience.js";

export default class StringLoader extends EventEmitter {
    constructor() {
        super()
        this.experience = new Experience();

        this.englishSwitch = document.getElementById("en_switcher");
        this.frenchSwitch = document.getElementById("fr_switcher");
        this.language = this.experience.LanguageSwitcher.language;
        this.setEventsListener();


        this.assignHero();
        this.assignSectionOne();
        this.assignSectionTwo();
        this.assignSectionThree();
        


    }

    setEventsListener() {
        this.englishSwitch.addEventListener("click", () => {
            this.emit("language_switch", "en");
        });
        this.frenchSwitch.addEventListener("click", () => {
            this.emit("language_switch", "fr");
        });
    }

    assignHero() {
        document.querySelector("#heroOwnTheYacht").textContent = (this.language.heroOwnTheYacht);
        document.querySelector("#heroLiveFreedom").textContent = (this.language.heroLiveFreedom);
        document.querySelector("#heroMainLogo").textContent = (this.language.logo);
        document.querySelector("#yachtClub").textContent = (this.language.yachtClub);
    }



    assignSectionOne() {
        document.querySelector("#sectionOneTitle").textContent = (this.language.sectionOneTitle);
        document.querySelector("#sectionOnePresentationLinkText").textContent = (this.language.sectionOnePresentationLinkText);
        
        document.querySelector("#sectionOneH1Text_one").textContent = (this.language.sectionOneH1Text_one);

        document.querySelector("#sectionOneH1Text_listItem1").textContent = (this.language.sectionOneH1Text_listItem1);
        document.querySelector("#sectionOneH1Text_listItem2").textContent = (this.language.sectionOneH1Text_listItem2);
        document.querySelector("#sectionOneH1Text_listItem3").textContent = (this.language.sectionOneH1Text_listItem3);
        document.querySelector("#sectionOneH1Text_listItem4").textContent = (this.language.sectionOneH1Text_listItem4);

        document.querySelector("#sectionOneH1Text_two").textContent = (this.language.sectionOneH1Text_two);
        document.querySelector("#sectionOneH1Text_three").textContent = (this.language.sectionOneH1Text_three);
        document.querySelector("#sectionOneH1Text_four").textContent = (this.language.sectionOneH1Text_four);

        document.querySelector("#sectionOneH1Text_ownsupercar").textContent = (this.language.sectionOneH1Text_ownsupercar);

        document.querySelector("#sectionOneH1Text_five").textContent = (this.language.sectionOneH1Text_five);

        document.querySelector("#sectionOneH1Q_AdvantagesCoOwn").textContent = (this.language.sectionOneH1Q_AdvantagesCoOwn);
        document.querySelector("#sectionOneH1_answerCo1").textContent = (this.language.sectionOneH1_answerCo1);
        document.querySelector("#sectionOneH1_answerCo2").textContent = (this.language.sectionOneH1_answerCo2);
        document.querySelector("#sectionOneH1_answerCo3").textContent = (this.language.sectionOneH1_answerCo3);
        document.querySelector("#sectionOneH1_answerCo4").textContent = (this.language.sectionOneH1_answerCo4);

        document.querySelector("#sectionOneH1Q_AdvantagesBlock").textContent = (this.language.sectionOneH1Q_AdvantagesBlock);
        document.querySelector("#sectionOneH1_answer1Block").textContent = (this.language.sectionOneH1_answer1Block);
        document.querySelector("#sectionOneH1_answer2Block").textContent = (this.language.sectionOneH1_answer2Block);
        document.querySelector("#sectionOneH1_answer3Block").textContent = (this.language.sectionOneH1_answer3Block);
        document.querySelector("#sectionOneH1_answer4Block").textContent = (this.language.sectionOneH1_answer4Block);

        document.querySelector("#sectionOneH2").textContent = (this.language.sectionOneH2);
        document.querySelector("#sectionOneH2Text_1").textContent = (this.language.sectionOneH2Text_1);
        document.querySelector("#sectionOneH2Subheader1").textContent = (this.language.sectionOneH2Subheader1);
        document.querySelector("#sectionOneH2Text_2").textContent = (this.language.sectionOneH2Text_2);

        document.querySelector("#sectionOneH2CostAndData").textContent = (this.language.sectionOneH2CostAndData);
        document.querySelector("#sectionOneH2data1").textContent = (this.language.sectionOneH2data1);
        document.querySelector("#sectionOneH2data2").textContent = (this.language.sectionOneH2data2);
        document.querySelector("#sectionOneH2data3").textContent = (this.language.sectionOneH2data3);
        document.querySelector("#sectionOneH2data4").textContent = (this.language.sectionOneH2data4);
        document.querySelector("#sectionOneH2data5").textContent = (this.language.sectionOneH2data5);
        document.querySelector("#sectionOneH2data6").textContent = (this.language.sectionOneH2data6);
        document.querySelector("#sectionOneH2data7").textContent = (this.language.sectionOneH2data7);

        document.querySelector("#sectionOneH2Text2").textContent = (this.language.sectionOneH2Text2);
        document.querySelector("#sectionOneH2Text3").textContent = (this.language.sectionOneH2Text3);
        document.querySelector("#sectionOneCompleteInfo").textContent = (this.language.sectionOneCompleteInfo);
        document.querySelector("#sectionOneButtonClickText").textContent = (this.language.sectionOneButtonClickText);
    }

    assignSectionTwo() {

        document.querySelector("#sectionTwoTitle").textContent = (this.language.sectionTwoTitle);
        document.querySelector("#sectionTwoHeader_one").textContent = (this.language.sectionTwoHeader_one);
        document.querySelector("#sectionTwoH1Text_one").textContent = (this.language.sectionTwoH1Text_one);
        document.querySelector("#sectionTwoH1ListItem1").textContent = (this.language.sectionTwoH1ListItem1);
        document.querySelector("#sectionTwoH1ListItem2").textContent = (this.language.sectionTwoH1ListItem2);
        document.querySelector("#sectionTwoH1Text_two").textContent = (this.language.sectionTwoH1Text_two);
        document.querySelector("#sectionTwoHeader_two").textContent = (this.language.sectionTwoHeader_two);
        document.querySelector("#sectionTwoH2Text_one").textContent = (this.language.sectionTwoH2Text_one);
        document.querySelector("#sectionTwoHeader_three").textContent = (this.language.sectionTwoHeader_three);
        document.querySelector("#sectionTwoH3_underImageText1").textContent = (this.language.sectionTwoH3_underImageText1);

        document.querySelector("#sectionTwoH3_ethQuestionOne").textContent = (this.language.sectionTwoH3_ethQuestionOne);
        document.querySelector("#sectionOneH3_ethAnswerOne").textContent = (this.language.sectionOneH3_ethAnswerOne);
        document.querySelector("#sectionTwoH3_ethQuestionTwo").textContent = (this.language.sectionTwoH3_ethQuestionTwo);
        document.querySelector("#sectionTwoH3_ethAnswerTwo").textContent = (this.language.sectionTwoH3_ethAnswerTwo);
        document.querySelector("#sectionTwoH3Text_two").textContent = (this.language.sectionTwoH3Text_two);
        document.querySelector("#sectionTwoH3_q1").textContent = (this.language.sectionTwoH3_q1);
        document.querySelector("#sectionTwoH3_q2").textContent = (this.language.sectionTwoH3_q2);
        document.querySelector("#sectionTwoH3_q3").textContent = (this.language.sectionTwoH3_q3);
        document.querySelector("#sectionTwoH3_a1").textContent = (this.language.sectionTwoH3_a1);
        document.querySelector("#sectionTwoH3_a2").textContent = (this.language.sectionTwoH3_a2);

        document.querySelector("#sectionTwoH3_a3").textContent = (this.language.sectionTwoH3_a3);
        document.querySelector("#sectionTwoH3Text_three").textContent = (this.language.sectionTwoH3Text_three);
        document.querySelector("#sectionTwoH3Text_four").textContent = (this.language.sectionTwoH3Text_four);

     }



    assignSectionThree() { 
        document.querySelector("#sectionThreeTitle").textContent = (this.language.sectionThreeTitle);
        document.querySelector("#sectionThreeH1").textContent = (this.language.sectionThreeH1);
        document.querySelector("#sectionThreeH1Text1").textContent = (this.language.sectionThreeH1Text1);
        document.querySelector("#sectionThreeH2").textContent = (this.language.sectionThreeH2);
        document.querySelector("#sectionThreeH2Text1").textContent = (this.language.sectionThreeH2Text1);
        document.querySelector("#sectionThreeH2Text2").textContent = (this.language.sectionThreeH2Text2);
    }

    assignNavBar() {
        document.getElementById("navBarTitle").textContent = this.experience.LanguageSwitcher.language.navBarTitle;
        document.getElementById("navBarOne").textContent = this.experience.LanguageSwitcher.language.navBarOne;
        document.getElementById("navBarTwo").textContent = this.experience.LanguageSwitcher.language.navBarTwo;
        document.getElementById("navBarThree").textContent = this.experience.LanguageSwitcher.language.navBarThree;
    }


    updateLanguage() {
        
        this.language = this.experience.LanguageSwitcher.language;
    }

    update() {
        this.updateLanguage();
        this.assignHero();
        this.assignNavBar();
        this.assignSectionOne();
        this.assignSectionTwo();
        this.assignSectionThree();
    }


}