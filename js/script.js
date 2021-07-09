require('es6-promise').polyfill();
import 'nodelist-foreach-polyfill';



import calculator from './modules/calculator';
import cards from './modules/cards';
import forms from './modules/forms';
import modal, { openModal } from './modules/modal';
import slider from './modules/slider';
import tabs from './modules/tabs';
import timer from './modules/timer';

document.addEventListener('DOMContentLoaded', () => {

	const modalTimerId = setTimeout(() => openModal('.modal', modalTimerId), 30000);

    calculator();
    cards();
    forms('form', modalTimerId);
    modal('[data-modal]', '.modal', modalTimerId);
    tabs('.tabheader__item', '.tabcontent', '.tabheader__items', 'tabheader__item_active');
    timer('.timer', '2021-08-11');
    slider({
        container: '.offer__slider',
        nextArrow: '.offer__slider-next',
        prevArrow: '.offer__slider-prev',
        slide: '.offer__slide',
        totalCounter: '#total',
        currentCounter: '#current',
        wrapper: '.offer__slider-wrapper',
        field: '.offer__slider-inner'


    });

});