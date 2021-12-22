import { isPicture } from './createCards';
import { getLinkToJSON } from './getImages';
import { CARDS } from './variables';

export async function createCards() {
  const arrayChunksDataImages = await getLinkToJSON();
  const MAX_VALUE_ROUNDS = 12;
  let previewElement = isPicture ? -1 : 11;

  for (let i = 1; i <= MAX_VALUE_ROUNDS; i++) {
    const li = document.createElement('li');
    li.classList.add('cart', 'category__cart');

    li.innerHTML = `
      <a href="#round${i}" data-action="templateQuiz()">
        <h4 class="title__cart">Round ${i} <span class="result">0/10</span></h4>
        <figure>
          <picture>
              <source srcset="https://raw.githubusercontent.com/Diluks93/image-data/master/img/${
                arrayChunksDataImages[previewElement + i][0].imageNum + '.webp'
              }">
              <img class="img img-category" src="https://raw.githubusercontent.com/Diluks93/image-data/master/img/${
                arrayChunksDataImages[previewElement + i][0].imageNum + '.jpg'
              }" alt="preview category">
          </picture>
          <figcaption class="category__descr">Play again</figcaption>
        </figure>
      </a>
    `;

    CARDS.append(li);
  };
};