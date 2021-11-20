import { createCards, CARDS } from './createCards';

export const 
  HOME_PAGE_BTNS = document.querySelectorAll('a[href="#"]'),
  CATEGORIES_BTNS = document.querySelectorAll('a[href="#categories"]'),
  SETTINGS_BTNS = document.querySelectorAll('a[href="#settings"]'),
  HOME_PAGE = document.querySelector('.home-page'),
  CATEGORIES = document.querySelector('.categories'),
  SETTINGS = document.querySelector('.settings');

export let isPicture = false;

export function removeActive () {
  const SECTIONS = document.querySelectorAll('section');

  SECTIONS.forEach (section => {
    section.classList.remove('active');
  })
};

export function addActive (array, selector) {
  array.forEach(element => {
    element.addEventListener('click', () => {
      removeActive();
      selector.classList.add('active');
    })
  })
};

addActive(HOME_PAGE_BTNS, HOME_PAGE);
addActive(CATEGORIES_BTNS, CATEGORIES);
addActive(SETTINGS_BTNS, SETTINGS);

CATEGORIES_BTNS.forEach((elem, index) => {
  elem.onclick = () => {
    index === 0 ? (isPicture = false) : (isPicture = true);
    createCards();
  }
})

HOME_PAGE_BTNS.forEach(elem => {
  elem.onclick = () => {
    CARDS.innerHTML = '';
  }
})