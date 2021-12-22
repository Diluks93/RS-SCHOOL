import { isPicture } from './createCards';
import { getLinkToJSON } from './getImages';
import { CARDS, HOME_PAGE_BTNS, QUIZ } from './variables';

export async function templateQuiz(number = 1, counter = 1) {

  const arrayChunksDataImages = await getLinkToJSON();
  const START_FIRST_HALF_IMAGES_DATA = 1;
  const START_SECOND_HALF_IMAGES_DATA = 11;
  let questionQuiz, templateImages;

  if(isPicture) {
    questionQuiz = 'Who is the author of this picture';
    number -= START_FIRST_HALF_IMAGES_DATA;
    templateImages = `
      <picture>
        <source srcset="https://raw.githubusercontent.com/Diluks93/image-data/master/full/${arrayChunksDataImages[number][counter].imageNum}full.webp">
        <img class="img img__question" src="https://raw.githubusercontent.com/Diluks93/image-data/master/full/${arrayChunksDataImages[number][counter].imageNum}full.jpg">
      </picture>
      <div class="wrapper wrapper__btns">
        ${getFourString(`<a>${arrayChunksDataImages[number][counter].author}</a>`)}
      </div>
      `
  } else {
    questionQuiz = `Which is ${arrayChunksDataImages[number][counter].author} picture`;
    number += START_SECOND_HALF_IMAGES_DATA;
    templateImages = `${
      getFourString(`
        <a>
          <picture class="pictures">
            <source srcset="https://raw.githubusercontent.com/Diluks93/image-data/master/full/${arrayChunksDataImages[number][counter].imageNum}full.webp">
            <img class="img img__btn" src="https://raw.githubusercontent.com/Diluks93/image-data/master/full/${arrayChunksDataImages[number][counter].imageNum}full.jpg">
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
      <p class="question">${questionQuiz}?</p>
      ${templateImages}
    </div>
  `;
}

function getFourString(string){
  const QUANTITY_REPEATS = 4;
  return string.repeat(QUANTITY_REPEATS);
};

// here I used delegation
CARDS.addEventListener('click', (event) => {
  const tegA = event.target.closest('a').getAttribute('href');
  const numberChunk = +tegA.slice(tegA.indexOf('d') + 1);

  templateQuiz(numberChunk)
});

HOME_PAGE_BTNS.forEach(btn => {
  btn.addEventListener('click', () => {
    QUIZ.innerHTML = ''
  })
})