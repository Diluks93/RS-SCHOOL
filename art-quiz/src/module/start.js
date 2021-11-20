import { HOME_PAGE } from './addActive';
import { createCards } from './createCards';

window.addEventListener('hashchange', () => {
  localStorage.setItem('hash', window.location.hash.slice(1));
});

export function start() { setTimeout(() => {
  const PRELOADER = document.getElementById('preloader'),
    HEADER = document.getElementById('header'),
    H1 = document.querySelector('h1'),
    FOOTER = document.querySelector('.footer');
  let array = [H1, HEADER, FOOTER],
    ELEMENT;

    if (localStorage.getItem('hash')) {
      ELEMENT =
        document.querySelector(`.${localStorage.getItem('hash')}`);
    };

    if (localStorage.getItem('hash') === 'categories') createCards();
  
    PRELOADER.classList.remove('active');

    ELEMENT === undefined ? array.push(HOME_PAGE) : array.push(ELEMENT);

    array.forEach((elem) => {
      elem.classList.add('active');
    });
}, 1000) };

start();