import { getLocalStorage } from './getGreeting.js'
import { LANG } from './script.js';

const WEATHER_ICON = document.querySelector('.weather-icon'),
  TEMPERATURE = document.querySelector('.temperature'),
  WETHER_DESCRIPTION = document.querySelector('.weather-description'),
  CITY = document.querySelector('.city'),
  WIND = document.querySelector('.wind'),
  HUMIDITY = document.querySelector('.humidity'),
  CITY_ERROR = document.querySelector('.weather-error');

if (!CITY.value) {
  CITY.value = localStorage.getItem('city');
  if(CITY.value === 'Мінск') CITY.value = 'Минск';
}

async function getWeather() {
  try {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${CITY.value}&lang=${LANG}&appid=109b895d7239555afc9a38a8442bfab6&units=metric`;
    const res = await fetch(url);
    const data = await res.json();
    if (!res.ok) {
      throw new Error(`${data.message}`);
    }
    CITY_ERROR.textContent = '';
    WEATHER_ICON.className = 'weather-icon owf';
    WEATHER_ICON.classList.add(`owf-${data.weather[0].id}`);
    TEMPERATURE.textContent = `${data.main.temp.toFixed(0)}°C`;
    WETHER_DESCRIPTION.textContent = data.weather[0].description;
    switch(LANG){
      case 'en':
        HUMIDITY.textContent = `Humidity: ${data.main.humidity}%`;
        WIND.textContent = `Wind speed: ${data.wind.speed.toFixed(0)} m/s`;
        break;
      case 'ru':
        HUMIDITY.textContent = `Влажность: ${data.main.humidity}%`;
        WIND.textContent = `Скорость ветра: ${data.wind.speed.toFixed(0)} м/с`;
        break;
      case 'by':
        HUMIDITY.textContent = `Вільготнасць: ${data.main.humidity}%`;
        WIND.textContent = `Хуткасць ветру: ${data.wind.speed.toFixed(0)} м/с`;
        WETHER_DESCRIPTION.textContent = `надвор'е нармальная`;
        break;
    }
  } catch (error) {
    switch(LANG){
      case 'en':
        CITY_ERROR.textContent = `Error! ${error.message} for "${CITY.value}"`;
        break;
      case 'ru':
        CITY_ERROR.textContent = `Ошибка! ${error.message}, а именно "${CITY.value}"`;
        break;
      case 'by':
        CITY_ERROR.textContent = `Памылка! ${error.message}, а менавіта "${CITY.value}"`;
        break;
    }
    WEATHER_ICON.className = 'weather-icon owf';
    TEMPERATURE.textContent = '';
    WETHER_DESCRIPTION.textContent = '';
    HUMIDITY.textContent = '';
    WIND.textContent = '';
  }
}

CITY.addEventListener('change', (event) => {
  localStorage.setItem('city', event.target.value);
  getWeather();
});

export { getWeather, CITY };
