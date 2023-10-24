// поповер авторизации
const buttonLogin = document.querySelector('.login-item__link-entry');
const formLogin = document.querySelector('.login');
const buttonClose = document.querySelector('.login__close');


buttonLogin.addEventListener('click', function () {
    formLogin.classList.add('popover-active');
})

buttonClose.addEventListener('click', function () {
    formLogin.classList.remove('popover-active');
})

document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') {
        formLogin.classList.remove('popover-active');
    }
})

document.addEventListener('mouseup', (e) => {
    const block = e.composedPath().includes(formLogin);
    if (!block) {
        formLogin.classList.remove('popover-active');
    }
});

//слайдер
const prevButton = document.querySelector('.slider-prev');
const nextButton = document.querySelector('.slider-next');
const slides = Array.from(document.querySelectorAll('.slide'));
const pagination = Array.from(document.querySelectorAll('.slider-pagination__button'));
const slideCount = slides.length;
let slideIndex = 0;

console.log(slides);

function updateSlider() {
    slides.forEach((slide, index) => {
        if (index === slideIndex) {
            slide.classList.add('slide-active');
            for (let i = 0; i < pagination.length; i++) {
                if (i == slideIndex) {
                    pagination[i].classList.add('slider-pagination-current');
                } else {
                    pagination[i].classList.remove('slider-pagination-current');
                }
            }
        } else {
            slide.classList.remove('slide-active');
        }
    });
}

function showPreviousSlide() {
    slideIndex = (slideIndex - 1 + slideCount) % slideCount;
    updateSlider();
}

function showNextSlide() {
    slideIndex = (slideIndex + 1) % slideCount;
    updateSlider();
}

for (let pagBtn in pagination) {
    pagination[pagBtn].addEventListener('click', () => {
        for (let slide in slides) {
            if (pagBtn == slide) {
                slides[slide].classList.add('slide-active');
                pagination[slide].classList.add('slider-pagination-current');
            } else {
                slides[slide].classList.remove('slide-active');
                pagination[slide].classList.remove('slider-pagination-current');
            }
        }
    })
}

prevButton.addEventListener('click', showPreviousSlide);
nextButton.addEventListener('click', showNextSlide);


