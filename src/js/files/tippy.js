// Подключение функционала 
import { isMobile, FLS } from "./functions.js";
// Подключение списка активных модулей
import { flsModules } from "./modules.js";

// Подключение из node_modules
import tippy from 'tippy.js';

// Подключение cтилей из src/scss/libs
import "../../scss/libs/tippy.scss";
// Подключение cтилей из node_modules
//import 'tippy.js/dist/tippy.css';

// Запускаем и добавляем в объект модулей
let tippyMmd2 = window.matchMedia('(min-width: 991.98px)');
function tippyHandleMmd2Change(e) {
    if (e.matches) {
        // Запускаем и добавляем в объект модулей
        flsModules.tippy = tippy('[data-tippy-content]', {
        });
    }
}
tippyMmd2.addEventListener('change', tippyHandleMmd2Change);
tippyHandleMmd2Change(tippyMmd2);