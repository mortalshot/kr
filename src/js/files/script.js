// Подключение функционала 
import { isMobile } from "./functions.js";
// Подключение списка активных модулей
import { flsModules } from "./modules.js";

// Прилипание шапки при скролле
const headerWrapper = document.querySelector('.header__wrapper');
const navOffset = headerWrapper.offsetTop;
const wrapper = document.querySelector('.wrapper');
const mainPage = document.querySelector('main.page');

window.addEventListener('scroll', function () {
    const scrollTop = window.scrollY;

    if (scrollTop > navOffset) {
        wrapper.classList.add('header-fixed');
        const headerHeight = headerWrapper.clientHeight;
        mainPage.style.paddingTop = headerHeight + 'px';
    } else if (scrollTop < navOffset) {
        wrapper.classList.remove('header-fixed');
        mainPage.style.paddingTop = 0;
    }
})
