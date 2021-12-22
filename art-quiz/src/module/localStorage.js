import { showInputTime } from './checkBox';
import { TIME_CHECKBOX, DEFAULT, INPUT_NUMBER as INPUT_NUMBER, RANGE, SAVE } from './variables';

export function setLocalStorage() {
  localStorage.setItem('box', TIME_CHECKBOX.checked);

  localStorage.setItem('range', RANGE.value);
  localStorage.setItem('number', INPUT_NUMBER.getAttribute('value'));
};

export function getLocalStorage() {
  const isCheckboxTimeActive = JSON.parse(localStorage.getItem('box'));
  TIME_CHECKBOX.checked = isCheckboxTimeActive;
  showInputTime()

  const valueRange = JSON.parse(localStorage.getItem('range'));
  RANGE.value = valueRange;

  const valueNumber = JSON.parse(localStorage.getItem('number'));
  INPUT_NUMBER.value = valueNumber;
};

getLocalStorage();

SAVE.addEventListener('click', setLocalStorage);
DEFAULT.addEventListener('click', () => {
  const DEFAULT_VALUE_VOLUME = '20';
  TIME_CHECKBOX.checked = false;
  showInputTime();
  RANGE.value = DEFAULT_VALUE_VOLUME;
  setLocalStorage();
});