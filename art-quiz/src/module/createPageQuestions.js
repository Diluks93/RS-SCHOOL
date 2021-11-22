import { isPicture } from './createCards';
import { getLinkToJSON } from './getImages';
import { CARDS, HOME_PAGE_BTNS, QUIZ } from './variables';

export async function templateQuiz(number=1, counter=1) {
  if(!number || !counter) return

  const data = await getLinkToJSON();
  let question, block;

  if(isPicture) {
    question = 'Who is the author of this picture';
    number -= 1;
    block = `
      <picture>
        <source srcset="https://raw.githubusercontent.com/Diluks93/image-data/master/full/${data[number][counter].imageNum}full.webp">
        <img class="img img__question" src="https://raw.githubusercontent.com/Diluks93/image-data/master/full/${data[number][counter].imageNum}full.jpg">
      </picture>
      <div class="wrapper wrapper__btns">
        ${repeatString(`<a>${data[number][counter].author}</a>`)}
      </div>
      `
  } else {
    question = `Which is ${data[number][counter].author} picture`;
    number += 11;
    block = `${
      repeatString(`
        <a>
          <picture class="pictures">
            <source srcset="https://raw.githubusercontent.com/Diluks93/image-data/master/full/${data[number][counter].imageNum}full.webp">
            <img class="img img__btn" src="https://raw.githubusercontent.com/Diluks93/image-data/master/full/${data[number][counter].imageNum}full.jpg">
          </picture>
        </a>
        `
    )}`;
  }
  QUIZ.innerHTML = `
  <div class="wrapper wrapper__quiz">
    <div class="wrapper">
      <input type="range">
      <span class="time">0:20</span>
    </div>
    <p class="question">${question}?</p>
    ${block}
  </div>
  `;
}

function repeatString(string, n = 4){
  return string.repeat(n);
};

CARDS.addEventListener('click', (event) => {
  let tegA = event.target.closest('a').getAttribute('href'),
    numberChunk = +tegA.slice(tegA.indexOf('d') + 1);

  templateQuiz(numberChunk)
});

HOME_PAGE_BTNS.forEach(elem => {
  elem.addEventListener('click', () => {
    QUIZ.innerHTML = ''
  })
})