// Подключение функционала 
import { isMobile, bodyLock, bodyUnlock } from "./functions.js";
// Подключение списка активных модулей
import { flsModules } from "./modules.js";

// Прилипание шапки при скролле
const headerWrapper = document.querySelector('.header__wrapper');
const navOffset = headerWrapper.offsetTop;
const wrapper = document.querySelector('.wrapper');
const mainPage = document.querySelector('main.page');

// Фиксирование шапки к верху страницы
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
    if (!targetElement.closest('.header__language') && document.querySelector('.select')) {
        document.querySelector('.select').classList.remove('_active');
        document.querySelector('.language__link').classList.toggle('_spoller-active');
    }
}

const attributeItems = document.querySelectorAll('.cart-item__number');
if (attributeItems.length > 0) {
    document.addEventListener("selectCallback", function (e) {
        // Селект
        const currentSelect = e.detail.select;

        if (currentSelect.getAttribute('name') === 'number') {
            console.log(currentSelect.value);

            if (currentSelect.value == "10+") {
                currentSelect.closest('.cart-item__input').querySelector('.form__input').style.display = "block";
                currentSelect.closest('.select').style.display = "none";
            }
        }
    });
}

const filterItems = document.querySelector('.filter__items')
if (filterItems) {
    let filterMmd3 = window.matchMedia('(min-width: 767.98px)');
    function filterHandleMmd3Change(e) {
        if (e.matches) {
            const header = document.querySelector('.header');
            filterItems.style.maxHeight = window.innerHeight - header.clientHeight - 100 + 'px';
        }
    }
    filterMmd3.addEventListener('change', filterHandleMmd3Change);
    filterHandleMmd3Change(filterMmd3);
}

// Уведомление о действии
function notification(id) {
    id.style.opacity = 1;
    id.style.top = 60 + "px";

    setTimeout(() => {
        id.style.opacity = 0;
        id.style.top = -100 + "%";
    }, 3000);
}

const toFavorites = document.querySelector('#to-favorites');

// Выбор языка сайта
// Открываем поиск языка
const languageLink = document.querySelector('.language__link');
if (languageLink) {
    languageLink.addEventListener('click', function (e) {
        e.preventDefault();

        const select = document.querySelector('.header__language .select');

        select.classList.toggle('_active');
        languageLink.classList.toggle('_spoller-active');

        const selectInput = select.querySelector('.select__input');
        selectInput.focus();
        selectInput.click();
    })
}