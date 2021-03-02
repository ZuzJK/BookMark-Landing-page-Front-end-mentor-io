const button = document.querySelector("#button--newsletter");
const input = document.querySelector(".input");
const buttonMenu = document.querySelector(".button--menu");
const socialIcons = document.querySelector(".social--links");
const navBar = document.querySelector(".header__logo");
import mobileMenu from "./mobileMenu/mobileMenu.js";
import sliderBar from "./sliderBar/sliderBar.js";
import FAQ from "./FAQ/FAQ.js";
const validation = e => {
    e.preventDefault();
    const label = input.parentElement;
    console.log("jey");

    const setValidityMessages = () => {
        if (input.validity.valueMissing) {
            input.setCustomValidity('is empty');
        } else if (input.validity.typeMismatch) {
            input.setCustomValidity('Woops, is not email');
        } else {
            input.setCustomValidity('');
        }
        /* else if (input.validity.tooShort) {
                                input.setCustomValidity('Too short');
                            }*/
        console.log(input.validationMessage);


    }
    const createErrorMsg = () => {

        const warning = document.createElement("span");
        warning.textContent = input.validationMessage;
        console.log("createEror " + input.validationMessage);
        warning.classList.add("error");
        label.appendChild(warning);

    };


    setValidityMessages();
    if (input.checkValidity()) {
        console.log("no problem");
        input.nextElementSibling ? input.nextElementSibling.remove() : "";
        input.classList.remove("input__error");

    } else {
        console.log("problem");
        input.classList.add("input__error");

        if (!input.nextElementSibling) {
            createErrorMsg();
        } else {
            input.nextElementSibling != input.validationMessage ? input.nextElementSibling.textContent = input.validationMessage : "";
        }

    }

};

button.addEventListener("click", validation);
input.addEventListener("change", validation);





const displayMenu = () => {
    
    const mobileMenu = document.createElement("nav");
    const mobileExit = document.createElement("img");
    const menuList = document.querySelector(".menu-main");
    const copiedNavBar = navBar.cloneNode(true);
const wrapper = document.createElement("div");
    wrapper.appendChild(copiedNavBar);
    wrapper.appendChild(mobileExit);
const copiedMenuList = menuList.cloneNode(true);
    
    mobileMenu.appendChild(wrapper);
    wrapper.classList.add("mobileMenu__wrapper");
    document.body.appendChild(mobileMenu);
    console.log(buttonMenu.nextElementSibling);
    mobileMenu.classList.add("mobileMenu");
    mobileExit.src = "images/icon-close.svg";
   
    const copiedIcons = socialIcons.cloneNode(true);
    const copiedMenu = buttonMenu.nextElementSibling.cloneNode(true);



    console.log("watch");
    console.log(menuList);
    console.log(buttonMenu.nextElementSibling.nextElementSibling);
copiedMenuList.classList.add("mobileMenu__list");
    mobileMenu.appendChild(copiedMenuList);
    mobileMenu.appendChild(copiedIcons);


    mobileExit.addEventListener("click", function () {
        mobileMenu.remove()
    })

};

buttonMenu.addEventListener("click", displayMenu);



const a = new mobileMenu(buttonMenu);
a.display();

const FAQ2 = FAQ;
FAQ2();









