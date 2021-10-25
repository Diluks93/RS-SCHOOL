import { getTimeOfDay } from './getGreeting.js';
import { LANG } from './setting.js';
import { greetingTranslation } from './getGreeting.js';

const TIME = document.querySelector('.time'),
  DATE = document.querySelector('.date');

const weekDayArray = [
    'нядзеля',
    'панядзелак',
    'аўторак',
    'асяроддзе',
    'чацвер',
    'пятніца',
    'субота',
  ],
  monthArray = [
    'студзня',
    'лютага',
    'сакавікака',
    'красавіка',
    'траўня',
    'чэрвеня',
    'ліпеня',
    'жніўня',
    'верасня',
    'кастрычніка',
    'лістапада',
    'снежня',
  ];

function showTime(){
  const date = new Date(),
    currentTime = date.toLocaleTimeString();

  TIME.textContent = `${currentTime}`;
  showDate();
  getTimeOfDay();
  setTimeout(showTime, 1000);
};

function showDate(){
  const date = new Date(),
    options = {
      weekday: 'long',
      month: 'long',
      day: 'numeric',
    };
    let currentDate = date.toLocaleDateString(
      `${greetingTranslation[LANG][7]}`,
      options
    );
  if(LANG === 'by') {
    let day = date.getDay(),
      numDate = date.getDate(),
      numMonth = date.getMonth();

    currentDate = `${weekDayArray[day]}, ${numDate} ${monthArray[numMonth]}`;
  }
  DATE.textContent = `${currentDate}`;
};

export { showTime, showDate };