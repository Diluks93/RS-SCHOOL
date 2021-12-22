import { setLocalStorage } from './localStorage';
import { TIME_CHECKBOX, NUMBER } from './variables';

export function showInputTime() {
  if (TIME_CHECKBOX.checked) NUMBER.classList.add('active');
  else NUMBER.classList.remove('active');
}

TIME_CHECKBOX.addEventListener('click', () => {
  setLocalStorage();
  showInputTime();
});
