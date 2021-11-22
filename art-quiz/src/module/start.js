import { createCards } from './createPageCards';
import { FOOTER, H1, HEADER, HOME_PAGE, PRELOADER } from './variables';

window.addEventListener('hashchange', () => {
  localStorage.setItem('hash', window.location.hash.slice(1));
});

export function start() { setTimeout(() => {
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