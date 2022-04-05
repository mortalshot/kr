// Подключение функционала 
import { isMobile, bodyLock, bodyUnlock } from "./functions.js";
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


const sidebar = document.querySelector('.catalog__sidebar');
document.addEventListener("click", documentActions);
function documentActions(e) {
    const targetElement = e.target;

    // Фильтр
    if (targetElement.classList.contains('catalog__filter-btn') || targetElement.closest('.catalog__filter-btn')) {
        e.preventDefault();
        sidebar.classList.add('_active');
        bodyLock();
    }
    if (targetElement.classList.contains('filter__close') || targetElement.closest('.filter__close')) {
        e.preventDefault();
        sidebar.classList.remove('_active');
        bodyUnlock();
    }
}