import { isPicture } from './addActive';
import { getLinkToJSON } from './getImages';
export const CARDS = document.querySelector('.cards');

export async function createCards() {
  let previewElement;
  isPicture ? (previewElement = -1) : (previewElement = 12);

  for (let i = 1; i <= 12; i++) {
  let li = document.createElement('li');
    li.classList.add('cart', 'category__cart');
    const data = await getLinkToJSON();
    li.innerHTML = `
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
    `;

    CARDS.append(li);
  }
}