const itemFAQ = document.querySelectorAll(".list__item");

const FAQ = () => {
    
    
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

}



export default FAQ;