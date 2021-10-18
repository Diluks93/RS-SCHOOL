const GREETING = document.querySelector('.greeting'),
  NAME = document.querySelector('.name');

function getHours(){
  const date = new Date(),
    hours = date.getHours();

  return hours;
}

function getTimeOfDay(){
  let timeOfDay = '';
  const hours = getHours();
  switch (true) {
    case hours >= 0 && hours <= 5:
      timeOfDay = 'night';
      break;
    case hours >= 6 && hours <= 11:
      timeOfDay = 'morning';
      break;
    case hours >= 12 && hours <= 17:
      timeOfDay = 'afternoon';
      break;
    case hours >= 18 && hours <= 23:
      timeOfDay = 'evening';
      break;
  }

  GREETING.textContent = `Good ${timeOfDay}`;

  return timeOfDay;
}

function setLocalStorage() {
  localStorage.setItem('name', NAME.value);
}

function getLocalStorage() {
  if (localStorage.getItem('name')) {
    NAME.value = localStorage.getItem('name');
  }
}

export { getHours, getTimeOfDay, setLocalStorage, getLocalStorage };