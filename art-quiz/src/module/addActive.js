export const 
  HOME_PAGE_BTNS = document.querySelectorAll('a[href="#"]'),
  CATEGORIES_BTNS = document.querySelectorAll('a[href="#categories"]'),
  SETTINGS_BTNS = document.querySelectorAll('a[href="#settings"]'),
  SECTIONS = document.querySelectorAll('section'),
  HOME_PAGE = document.querySelector('.home-page'),
  CATEGORIES = document.querySelector('.categories'),
  SETTINGS = document.querySelector('.settings'),
  ERROR = document.querySelector('.error');

export function removeActive () {
  SECTIONS.forEach (section => {
    section.classList.remove('active');
  })
};

export function addActive (array, selector) {
  if(array) {
    array.forEach(element => {
      element.addEventListener('click', () => {
        removeActive();
        selector.classList.add('active');
      })
    })
  }
};

addActive(HOME_PAGE_BTNS, HOME_PAGE);
addActive(CATEGORIES_BTNS, CATEGORIES);
addActive(SETTINGS_BTNS, SETTINGS);