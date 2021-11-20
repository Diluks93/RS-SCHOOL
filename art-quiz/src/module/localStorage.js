import { CHECKBOX, checkCheckbox } from './checkBox';

export const RANGE = document.querySelector('input[type="range"]'),
  INPT_NUMBER = document.querySelector('input[type="number"]'),
  DEFAULT = document.querySelector('.btn__default'),
  SAVE = document.querySelector('.btn__save');

export function setLocalStorage() {
  localStorage.setItem('box', CHECKBOX.checked);

  localStorage.setItem('range', RANGE.value);
  localStorage.setItem('number', INPT_NUMBER.value);
};

export function getLocalStorage() {
  let checked = JSON.parse(localStorage.getItem('box'));
  CHECKBOX.checked = checked;
  checkCheckbox()

  let valueRange = JSON.parse(localStorage.getItem('range'));
  RANGE.value = valueRange;

  let valueNumber = JSON.parse(localStorage.getItem('number'));
  INPT_NUMBER.value = valueNumber;
}

getLocalStorage();

SAVE.addEventListener('click', setLocalStorage);
DEFAULT.addEventListener('click', () => {
  CHECKBOX.checked = false;
  checkCheckbox();
  RANGE.value = '20';
  INPT_NUMBER.value = '5';
  setLocalStorage();
})