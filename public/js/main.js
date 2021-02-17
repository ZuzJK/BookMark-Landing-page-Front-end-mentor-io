const itemFAQ = document.querySelectorAll(".list__item");
const button = document.querySelector("#button--newsletter");
const input = document.querySelector(".input");
const buttonMenu = document.querySelector(".button--menu");
const socialIcons = document.querySelector(".social--links");
const navBar = document.querySelector(".header__logo");
const sliderButton = document.querySelectorAll(".slider__item");
import mobileMenu from "./mobileMenu/mobileMenu.js";
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
itemFAQ.forEach(item => {
    item.addEventListener('click', event => {


        if (item.nextElementSibling.style.visibility == "visible") {
            item.style.borderBottom = "1px #ddd solid";
            item.nextElementSibling.style.borderBottom = "0";
            item.nextElementSibling.style.visibility = "hidden";
            item.nextElementSibling.style.height = "0";
            item.nextElementSibling.style.padding = "0";
            item.lastElementChild.classList.remove("list__arrow--down");
        } else {
            item.style.borderBottom = "none";

            item.nextElementSibling.style.borderBottom = "1px #ddd solid";

            item.nextElementSibling.style.visibility = "visible";
            item.nextElementSibling.style.height = "auto";
            item.nextElementSibling.style.padding = "20px";
            item.lastElementChild.classList.add("list__arrow--down");

        }



    })
});


sliderButton.forEach(

    item => {
        item.addEventListener("click", event => {
            const parent = item.parentElement;

            for (const sliderItem of parent.children) {
                if (sliderItem.classList.contains("slider__item--active")) {

                    sliderItem.classList.remove("slider__item--active");
                }
            }
            item.classList.add("slider__item--active");

        })
    }
);


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










