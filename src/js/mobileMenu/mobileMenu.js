


class mobileMenu{
 
    constructor(button){
        this.button = button;
        this.wrapper = document.createElement("div");
        this.mobileExit = document.createElement("img");
    }
    
 /*   createHeader(){
            const mobileMenu = document.createElement("nav");
    
    const menuList = document.querySelector(".menu-main");
    const copiedNavBar = navBar.cloneNode(true);
const wrapper = document.createElement("div");
    wrapper.appendChild(copiedNavBar);
    wrapper.appendChild(mobileExit);

    
    mobileMenu.appendChild(wrapper);
    wrapper.classList.add("mobileMenu__wrapper");
    document.body.appendChild(mobileMenu);
    console.log(buttonMenu.nextElementSibling);
    mobileMenu.classList.add("mobileMenu");
    mobileExit.src = "images/icon-close.svg";

    const copiedIcons = socialIcons.cloneNode(true);
    const copiedMenu = buttonMenu.nextElementSibling.cloneNode(true);
        
    }*/
    display(){
        console.log(this.button);
  
    }
}


export default mobileMenu;