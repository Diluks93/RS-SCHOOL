import { checkCheckbox } from './checkBox';
import { CHECKBOX, DEFAULT, INPT_NUMBER, RANGE, SAVE } from './variables';

export function setLocalStorage() {
  localStorage.setItem('box', CHECKBOX.checked);

  localStorage.setItem('range', RANGE.value);
  localStorage.setItem('number', INPT_NUMBER.getAttribute('value'));
};

export function getLocalStorage() {
  let checked = JSON.parse(localStorage.getItem('box'));
  CHECKBOX.checked = checked;
  checkCheckbox()

  let valueRange = JSON.parse(localStorage.getItem('range'));
  RANGE.value = valueRange;

  let valueNumber = JSON.parse(localStorage.getItem('number'));
  INPT_NUMBER.value = valueNumber;
};

getLocalStorage();

SAVE.addEventListener('click', setLocalStorage);
DEFAULT.addEventListener('click', () => {
  CHECKBOX.checked = false;
  checkCheckbox();
  RANGE.value = '20';
  setLocalStorage();
});