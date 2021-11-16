import { setLocalStorage } from "./localStorage";

export const CHECKBOX = document.getElementById('checkbox'),
  NUMBER = document.querySelector('.number');

export function checkCheckbox() {
  if (CHECKBOX.checked) NUMBER.classList.add('active');
  else NUMBER.classList.remove('active');
}

CHECKBOX.addEventListener('click', () => {
  setLocalStorage();
  checkCheckbox();
});
