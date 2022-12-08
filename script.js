let offset = 0; //Moving from left
const sliderItems = document.querySelector('.slider__items');

document.querySelector('.slider__button_next').addEventListener('click', function() {
    offset += 849;
    if (offset > 1698) {
        offset = 0;
    }
    sliderItems.style.left = -offset + 'px';
})

document.querySelector('.slider__button_prev').addEventListener('click', function() {
    offset -= 849;
    if (offset < 0) {
        offset = 1698;
    }
    sliderItems.style.left = -offset + 'px';
})