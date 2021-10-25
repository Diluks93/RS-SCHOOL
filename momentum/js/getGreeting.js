import {CITY} from './vidjetWether.js';
import { LANG, changeColor } from './setting.js';
import {
  showQuotes,
  showClock,
  hideDate,
  showGreeting,
  showTodo,
  showAudioplayer,
  showWeather,
  changeBackground,
  changeLanguage,
} from './setting.js';
import { getLinkToImage } from './createSlider.js';

const greetingTranslation = {
  en: [
    'en',
    'Good ',
    'night',
    'morning',
    'afternoon',
    'evening',
    '[Enter your Name]',
    'en-US',
    'Audioplayer',
    'Minsk',
    'Color settings',
    'Select main color',
    'Select background color',
    'Select text color',
    'Language',
    'Background-image',
    'Time',
    'Date',
    'Greeting',
    'Quotes',
    'Weather',
    'Start',
    'Short break',
    'Long break',
    'Add your first todo',
    'What do you want to get done today?',
    'E.g. Build a web app',
  ],
  ru: [
    'ru',
    'Добр',
    'ой ночи',
    'ое утро',
    'ый день',
    'ый вечер',
    '[Введите Ваше имя]',
    'ru-RU',
    'Аудиоплеер',
    'Минск',
    'Настройки цвета',
    'Выбор основного цвета',
    'Выбор цвета фона',
    'Выбор цвета текста',
    'Язык',
    'Фоновое изображение',
    'Время',
    'Дата',
    'Приветствие',
    'Цитаты',
    'Погода',
    'Старт',
    'Короткий перерыв',
    'Длительный перерыв',
    'Добавьте свое первое задание',
    'Что вы хотите сделать сегодня?',
    'Например, Создать веб-приложение',
  ],
  by: [
    'by',
    'Дабр',
    'анач',
    'ай раніцы',
    'ы дзень',
    'ы вечар',
    '[Калі ласка, увядзіце ваша імя]',
    'be-Be',
    'Аўдыяплэер',
    'Мінск',
    'Налады колеру',
    'Выберыце асноўны колер',
    'Вылучыце колер фону',
    'Вылучыце колер тэксту',
    'Мова',
    'Фонавы малюнак',
    'Час',
    'Дата',
    'Прывітанне',
    'Цытата',
    "Надвор'е",
    'Пачаць',
    'Кароткі перапынак',
    'Працяглы перапынак',
    'Дадайце сваё першае заданне',
    'Што вы хочаце зрабіць сёння?',
    'Напрыклад, Стварыць вэб-дадатак',
  ],
};

const GREETING = document.querySelector('.greeting'),
  NAME = document.querySelector('.name');

function getHours(){
  const date = new Date(),
    hours = date.getHours();

  return hours;
};

function getTimeOfDay(){
  const hours = getHours();
  let timeOfDay =
    hours >= 0 && hours <= 5
      ? greetingTranslation[LANG][2]
      : hours >= 6 && hours <= 11
      ? greetingTranslation[LANG][3]
      : hours >= 12 && hours <= 17
      ? greetingTranslation[LANG][4]
      : hours >= 18 && hours <= 23
      ? greetingTranslation[LANG][5]
      : null;
  GREETING.textContent = `${greetingTranslation[LANG][1] + timeOfDay}`;

  return timeOfDay;
};

function setLocalStorage() {
  if (!localStorage.getItem('name'))
    localStorage.setItem('name', greetingTranslation[LANG][6]);
  else localStorage.setItem('name', NAME.value);

  if (!localStorage.getItem('city')) 
    localStorage.setItem('city', greetingTranslation[LANG][9]);
  else localStorage.setItem('city', CITY.value);

  let list = document.querySelectorAll(
    `[type*="checkbox"]`
  );
  list.forEach((el) => {
    localStorage.setItem(el.id, el.checked);
  });

  let listColors = document.querySelectorAll(`[type*="color"]`);
  listColors.forEach((el) => {
    localStorage.setItem(el.id, el.value);
  });

};

function getLocalStorage() {
  if (localStorage.getItem('name') === greetingTranslation[LANG][6])
    NAME.placeholder = localStorage.getItem('name');
  else
    NAME.value = localStorage.getItem('name');
  
  if (localStorage.getItem('city'))
    CITY.value = localStorage.getItem('city');

  let list = document.querySelectorAll(`[type*="checkbox"]`);
  list.forEach((el) => {
    let checked = JSON.parse(localStorage.getItem(el.id));
    document.getElementById(el.id).checked = checked;
      showQuotes();
      showClock();
      hideDate();
      showGreeting();
      showTodo();
      showAudioplayer();
      showWeather();
      changeBackground();
      changeLanguage();
      getLinkToImage();
  });

  let listColors = document.querySelectorAll(`[type*="color"]`);
  listColors.forEach((el) => {
    let valueColors = localStorage.getItem(el.id);
    document.getElementById(el.id).value = valueColors;
    changeColor();
  });
};

export {
  getHours,
  getTimeOfDay,
  setLocalStorage,
  getLocalStorage,
  greetingTranslation,
  NAME,
};