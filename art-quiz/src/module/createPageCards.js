import { isPicture } from './createCards';
import { getLinkToJSON } from './getImages';
import { CARDS } from './variables';

export async function createCards() {
  const data = await getLinkToJSON();
  let previewElement;
  isPicture ? (previewElement = -1) : (previewElement = +11);

  for (let i = 1; i <= 12; i++) {
    let li = document.createElement('li');
    li.classList.add('cart', 'category__cart');

    li.innerHTML = `
      <a href="#round${i}" data-action="templateQuiz()">
        <h4 class="title__cart">Round ${i} <span class="result">0/10</span></h4>
        <figure>
          <picture>
              <source srcset="https://raw.githubusercontent.com/Diluks93/image-data/master/img/${
                data[previewElement + i][0].imageNum + '.webp'
              }">
              <img class="img img-category" src="https://raw.githubusercontent.com/Diluks93/image-data/master/img/${
                data[previewElement + i][0].imageNum + '.jpg'
              }" alt="preview category">
          </picture>
          <figcaption class="category__descr">Play again</figcaption>
        </figure>
      </a>
    `;

    CARDS.append(li);
  };
};