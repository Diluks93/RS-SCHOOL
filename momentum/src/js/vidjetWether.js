//todo 1. асинхронная функция переписать используя try catch
//todo 2. всё еще есть проблема с дефолтным значением города, при обновлении страницы значение обновляется, но данные остаются старыми

const WEATHERICON = document.querySelector('.weather-icon'),
  TEMPERATURE = document.querySelector('.temperature'),
  WETHERDESCRIPTION = document.querySelector('.weather-description'),
  CITY = document.querySelector('.city'),
  WIND = document.querySelector('.wind'),
  HUMIDITY = document.querySelector('.humidity'),
  CITYERROR = document.querySelector('.weather-error');

// async function getWeather() {
//   try {
//     const url = `https://api.openweathermap.org/data/2.5/weather?q=${CITY.value}&lang=en&appid=109b895d7239555afc9a38a8442bfab6&units=metric`;
//     const res = await fetch(url);
//     const data = await res.json();

//     CITYERROR.textContent = '';
//     WEATHERICON.className = 'weather-icon owf';
//     WEATHERICON.classList.add(`owf-${data.weather[0].id}`);
//     TEMPERATURE.textContent = `${data.main.temp.toFixed(0)}°C`;
//     WETHERDESCRIPTION.textContent = data.weather[0].description;
//     HUMIDITY.textContent = `Humidity: ${data.main.humidity}%`;
//     WIND.textContent = `Wind speed: ${data.wind.speed.toFixed(0)} m/s`;
//   } catch (error) {
//     CITYERROR.textContent = `Error! ${data.message} for "${CITY.value}"`;
//   }
// }

async function getWeather() {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${CITY.value}&lang=en&appid=109b895d7239555afc9a38a8442bfab6&units=metric`;
  const res = await fetch(url);
  const data = await res.json();

  if(data.cod > 399 && data.cod < 601){
    CITYERROR.textContent = `Error! ${data.message} for "${CITY.value}"`;
    WEATHERICON.className = 'weather-icon owf';
    TEMPERATURE.textContent = '';
    WETHERDESCRIPTION.textContent = '';
    HUMIDITY.textContent = '';
    WIND.textContent = '';
  } else {
    CITYERROR.textContent = '';
    WEATHERICON.className = 'weather-icon owf';
    WEATHERICON.classList.add(`owf-${data.weather[0].id}`);
    TEMPERATURE.textContent = `${data.main.temp.toFixed(0)}°C`;
    WETHERDESCRIPTION.textContent = data.weather[0].description;
    HUMIDITY.textContent = `Humidity: ${data.main.humidity}%`
    WIND.textContent = `Wind speed: ${data.wind.speed.toFixed(0)} m/s`;
  }
}

CITY.addEventListener('change', (event) => {
  CITY.setAttribute('value', event.target.value);
  getWeather();
});

export { getWeather, CITY };
