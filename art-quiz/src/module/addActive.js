export const 
  HOME_PAGE_BTNS = document.querySelectorAll('a[href="#"]'),
  CATEGORIES_BTNS = document.querySelectorAll('a[href="#categories"]'),
  SETTINGS_BTNS = document.querySelectorAll('a[href="#settings"]'),
  HOME_PAGE = document.querySelector('.home-page'),
  CATEGORIES = document.querySelector('.categories'),
  SETTINGS = document.querySelector('.settings'),
  CHECKBOX = document.getElementById('checkbox'),
  NUMBER = document.querySelector('.number');

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

export function checkCheckbox(){
  if(CHECKBOX.checked)
    NUMBER.classList.add('active');
  else
    NUMBER.classList.remove('active');
}

CHECKBOX.addEventListener('click', checkCheckbox)

addActive(HOME_PAGE_BTNS, HOME_PAGE);
addActive(CATEGORIES_BTNS, CATEGORIES);
addActive(SETTINGS_BTNS, SETTINGS);

checkCheckbox();