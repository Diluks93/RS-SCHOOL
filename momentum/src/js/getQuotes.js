import { getRandomNum } from './createSlider.js'

const QUOTE = document.querySelector('.quote'),
  AUTHOR = document.querySelector('.author'),
  BUTTON = document.querySelector('.change-quote');

async function getQuotes() {
  const quotes = './assets/data.json',
    res = await fetch(quotes),
    data = await res.json();
  let num = getRandomNum(1, 102);

  QUOTE.textContent = `"${data[num].quote}"`;
  AUTHOR.textContent = data[num].author;
}
BUTTON.addEventListener('click', getQuotes);

export {getQuotes}
