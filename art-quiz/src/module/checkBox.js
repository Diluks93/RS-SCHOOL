import { setLocalStorage } from './localStorage';
import { CHECKBOX, NUMBER } from './variables';

export function checkCheckbox() {
  if (CHECKBOX.checked) NUMBER.classList.add('active');
  else NUMBER.classList.remove('active');
}

CHECKBOX.addEventListener('click', () => {
  setLocalStorage();
  checkCheckbox();
});
