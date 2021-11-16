import { CHECKBOX } from './addActive';

export function save() {
  localStorage.setItem('box', CHECKBOX.checked);
}

export function load() {
  var checked = JSON.parse(localStorage.getItem('box'));
  CHECKBOX.checked = checked;
}

save();
load();
