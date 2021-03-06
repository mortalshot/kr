/*
Документация по работе в шаблоне: 
Документация слайдера: https://swiperjs.com/
Сниппет(HTML): swiper
*/

// Подключаем слайдер Swiper из node_modules
// При необходимости подключаем дополнительные модули слайдера, указывая их в {} через запятую
// Пример: { Navigation, Autoplay }
import Swiper, { Navigation, Lazy, Thumbs } from 'swiper';
/*
Основниые модули слайдера:
Navigation, Pagination, Autoplay, 
EffectFade, Lazy, Manipulation
Подробнее смотри https://swiperjs.com/
*/

// Стили Swiper
// Базовые стили
import "../../scss/base/swiper.scss";
// Полный набор стилей из scss/libs/swiper.scss
// import "../../scss/libs/swiper.scss";
// Полный набор стилей из node_modules
// import 'swiper/css';

// Инициализация слайдеров
function initSliders() {
	// Перечень слайдеров
	// Проверяем, есть ли слайдер на стронице
	if (document.querySelector('.showcase__slider')) { // Указываем скласс нужного слайдера
		// Создаем слайдер
		new Swiper('.showcase__slider', { // Указываем скласс нужного слайдера
			// Подключаем модули слайдера
			// для конкретного случая
			modules: [Navigation, Lazy],
			slidesPerView: 2,
			spaceBetween: 20,
			autoHeight: false,
			watchOverflow: true,
			speed: 800,

			// Ленивая загрузка
			preloadImages: true,
			lazy: {
				loanOnTransitionStart: true,
				loadPrevNext: true,
			},


			// Кнопки "влево/вправо"
			navigation: {
				prevEl: '.showcase__slider .swiper__button-prev',
				nextEl: '.showcase__slider .swiper__button-next',
			},

			// Брейкпоинты

			breakpoints: {
				768: {
					slidesPerView: 3,
				},
				992: {
					slidesPerView: 4,
				},
			},

			// События
			on: {

			}
		});
	}
	if (document.querySelector('.showcase_4 .showcase__slider')) { // Указываем скласс нужного слайдера
		// Создаем слайдер
		new Swiper('.showcase_4 .showcase__slider', { // Указываем скласс нужного слайдера
			// Подключаем модули слайдера
			// для конкретного случая
			modules: [Navigation, Lazy],
			slidesPerView: 2,
			spaceBetween: 20,
			autoHeight: false,
			watchOverflow: true,
			speed: 800,

			// Ленивая загрузка
			preloadImages: true,
			lazy: {
				loanOnTransitionStart: true,
				loadPrevNext: true,
			},


			// Кнопки "влево/вправо"
			navigation: {
				prevEl: '.showcase_4 .showcase__slider .swiper__button-prev',
				nextEl: '.showcase_4 .showcase__slider .swiper__button-next',
			},

			// Брейкпоинты

			breakpoints: {
				768: {
					slidesPerView: 3,
				},
			},

			// События
			on: {

			}
		});
	}
	if (document.querySelector('.gallery-product')) { // Указываем скласс нужного слайдера

		let galleryProductMd2 = window.matchMedia('(max-width: 991.98px)');
		function galleryProductHandleMd2Change(e) {
			if (e.matches) {
				const productThumbsSlider = new Swiper('.gallery-product__thumbs', { // Указываем скласс нужного слайдера
					// Подключаем модули слайдера
					// для конкретного случая
					modules: [Thumbs],
					observer: true,
					observeParents: true,
					slidesPerView: 4,
					spaceBetween: 10,
					autoHeight: false,
					watchOverflow: true,
					speed: 800,

					/* // Ленивая загрузка
					preloadImages: true,
					lazy: {
						loanOnTransitionStart: true,
						loadPrevNext: true,
					},
 */
					// События
					on: {

					}
				});
				const productSlider = new Swiper('.gallery-product__slider', { // Указываем скласс нужного слайдера
					// Подключаем модули слайдера
					// для конкретного случая
					modules: [Thumbs],
					observer: true,
					observeParents: true,
					slidesPerView: 1,
					spaceBetween: 20,
					autoHeight: false,
					watchOverflow: true,
					speed: 800,

					// Ленивая загрузка
					preloadImages: true,
					lazy: {
						loanOnTransitionStart: true,
						loadPrevNext: true,
					},

					thumbs: {
						swiper: productThumbsSlider
					},

					// События
					on: {

					}
				});
			}
		}
		galleryProductMd2.addEventListener('change', galleryProductHandleMd2Change);
		galleryProductHandleMd2Change(galleryProductMd2);
	}
	if (document.querySelector('.product-color__slider')) { // Указываем скласс нужного слайдера
		// Создаем слайдер
		new Swiper('.product-color__slider', { // Указываем скласс нужного слайдера
			// Подключаем модули слайдера
			// для конкретного случая
			modules: [Navigation, Lazy],
			slidesPerView: 5,
			spaceBetween: 8,
			autoHeight: false,
			watchOverflow: true,
			speed: 800,

			// Ленивая загрузка
			preloadImages: true,
			lazy: {
				loanOnTransitionStart: true,
				loadPrevNext: true,
			},


			// Кнопки "влево/вправо"
			navigation: {
				prevEl: '.product-color .swiper__button-prev',
				nextEl: '.product-color .swiper__button-next',
			},

			// События
			on: {

			}
		});
	}
}
// Скролл на базе слайдера (по классу swiper_scroll для оболочки слайдера)
function initSlidersScroll() {
	let sliderScrollItems = document.querySelectorAll('.swiper_scroll');
	if (sliderScrollItems.length > 0) {
		for (let index = 0; index < sliderScrollItems.length; index++) {
			const sliderScrollItem = sliderScrollItems[index];
			const sliderScrollBar = sliderScrollItem.querySelector('.swiper-scrollbar');
			const sliderScroll = new Swiper(sliderScrollItem, {
				observer: true,
				observeParents: true,
				direction: 'vertical',
				slidesPerView: 'auto',
				freeMode: {
					enabled: true,
				},
				scrollbar: {
					el: sliderScrollBar,
					draggable: true,
					snapOnRelease: false
				},
				mousewheel: {
					releaseOnEdges: true,
				},
			});
			sliderScroll.scrollbar.updateSize();
		}
	}
}

window.addEventListener("load", function (e) {
	// Запуск инициализации слайдеров
	initSliders();
	// Запуск инициализации скролла на базе слайдера (по классу swiper_scroll)
	//initSlidersScroll();
});