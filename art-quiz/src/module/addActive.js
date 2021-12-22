import { CATEGORIES, CATEGORIES_BTNS, HOME_PAGE, HOME_PAGE_BTNS, SECTIONS, SETTINGS, SETTINGS_BTNS } from './variables';

export function removeActive () {
  SECTIONS.forEach (section => {
    section.classList.remove('active');
  })
};

export function addActive (arrayBTNS, selector) {
  if(arrayBTNS) {
    arrayBTNS.forEach(btn => {
      btn.addEventListener('click', () => {
        removeActive();
        selector.classList.add('active');
      })
    })
  }
};

addActive(HOME_PAGE_BTNS, HOME_PAGE);
addActive(CATEGORIES_BTNS, CATEGORIES);
addActive(SETTINGS_BTNS, SETTINGS);