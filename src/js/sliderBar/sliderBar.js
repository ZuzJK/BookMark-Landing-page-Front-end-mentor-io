const sliderButton = document.querySelectorAll(".slider__item");

const sliderBar = () => {
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

}
export default sliderBar;