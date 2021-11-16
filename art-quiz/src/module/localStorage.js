import { CHECKBOX, checkCheckbox } from "./checkBox";

export const 
  RANGE = document.querySelector('input[type="range"]'),
  INPT_NUMBER = document.querySelector('input[type="number"]');

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

RANGE.addEventListener('click', setLocalStorage);
INPT_NUMBER.addEventListener('change', setLocalStorage);