import { getRandomNum } from './createSlider.js'
// import { LANG } from './script.js';
import { LANG } from './setting.js';

const QUOTE = document.querySelector('.quote'),
  AUTHOR = document.querySelector('.author'),
  BUTTON = document.querySelector('.change-quote');

async function getQuotes() {
  const quotes = `./assets/json/data_${LANG}.json`,
    res = await fetch(quotes),
    data = await res.json();
  let num = getRandomNum(1, 100);

  QUOTE.textContent = `"${data[num].quote}"`;
  AUTHOR.textContent = data[num].author;
}
BUTTON.addEventListener('click', getQuotes);

export {getQuotes}
