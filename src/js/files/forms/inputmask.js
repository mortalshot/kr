/* Маски для полей (в работе) */

// Подключение функционала 
// Подключение списка активных модулей
import { flsModules } from "../modules.js";

// Подключение модуля
import "inputmask/dist/inputmask.min.js";

const phoneMask = document.querySelectorAll('.form__input_phone');
if (phoneMask.length) {
	flsModules.inputmask = Inputmask('+7 999 999 99 99').mask(phoneMask);
}