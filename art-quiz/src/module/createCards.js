export const CARDS = document.querySelector('.cards');

export function createCards(){
  for(let i = 1; i <= 12; i++) {
    let li = document.createElement('li'),
      h4 = document.createElement('h4'),
      span = document.createElement('span'),
      figure = document.createElement('figure'),
      picture = document.createElement('picture'),
      figcaption = document.createElement('figcaption');

      li.innerHTML = `${(h4.innerHTML = i)} ${(span.innerHTML =
        '0/10')} ${(figure.innerHTML = `${picture.innerHTML = '<source><img>'} ${(figcaption.textContent =
        'Play again')}`)}`;

      CARDS.appendChild(li)
  }
}

createCards()

async function getLinkToImage() {
  const url = 'https://github.com/Diluks93/image-data/img';
  const res = await fetch(url);
  const data = await res.json();
  console.log(data);
}

getLinkToImage();