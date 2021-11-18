export const CARDS = document.querySelector('.cards');
let num = getRandomNum(0, 240);

export function createCards(){
  async function getLinkToJSON() {
    const url =
      `https://raw.githubusercontent.com/Diluks93/image-data/master/img/${num}.webp`;
    const res = await fetch(url);
    //const data = await res.json();
    console.log(res);
    for(let i = 1; i <= 12; i++) {
      let li = document.createElement('li');
        // h4 = document.createElement('h4'),
        // span = document.createElement('span'),
        // figure = document.createElement('figure'),
        // picture = document.createElement('picture'),
        // figcaption = document.createElement('figcaption');

        
        li.innerHTML = `
    <h1 class="title">
      <a href="#">
        <img class="img-title logo" src="./assets/svg/logo.svg" alt="logo">
      </a>
    </h1>
    <section class="home-page">
      <div class="wrapper">
        <a href="#categories">
          <figure class="cart home__cart" id="artists">
            <picture>
              <source srcset="../assets/img/artists-quiz.webp">
              <img class="img home__img" src="../assets/img/artist-quiz.jpg" alt="artists">
            </picture>
            <figcaption class="description home__descr">Artist <span>Quiz</span></figcaption>
          </figure>
        </a>
        <a href="#categories">
          <figure class="cart home__cart" id="pictures">
            <picture>
              <source srcset="../assets/img/pictures-quiz.webp">
              <img class="img home__img" src="../assets/img/pictures-quiz.jpg" alt="pictures">
            </picture>
            <figcaption class="description home__descr">Pictures <span>Quiz</span></figcaption>
          </figure>
        </a>
      </div>
    </section>
  `
  
        CARDS.appendChild(li)
    }
  }
  getLinkToJSON();
}

createCards()

function getRandomNum(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);

  return Math.floor(Math.random() * (max - min + 1)) + min;
};