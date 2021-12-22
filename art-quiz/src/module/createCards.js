import { CARDS, CATEGORIES_BTNS, HOME_PAGE_BTNS } from './variables';
import { createCards } from './createPageCards';

export let isPicture = false;

CATEGORIES_BTNS.forEach((btn, index) => {
  btn.onclick = () => {
    index === 0 ? (isPicture = false) : (isPicture = true);
    createCards();
  };
});

HOME_PAGE_BTNS.forEach((btn) => {
  btn.onclick = () => {
    CARDS.innerHTML = '';
  };
});
