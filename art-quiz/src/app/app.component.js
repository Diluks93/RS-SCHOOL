import { WFMComponent } from '../framework/index'

class AppComponent extends WFMComponent {
  constructor(config) {
    super(config)
  }
}

export const appComponent = new AppComponent({
  selector: 'main',
  template: `
    <h1 class="title">
      <a href="#">
        <img class="img-title logo" src="./assets/svg/logo.svg" alt="logo">
      </a>
    </h1>
    <section class="home-page">
      <div class="wrapper">
        <figure class="cart home__cart" id="artists">
          <picture>
            <source srcset="../assets/img/artists-quiz.webp">
            <img class="img home__img" src="../assets/img/artist-quiz.jpg" alt="artists">
          </picture>
          <figcaption class="description home__descr">Artist <span>Quiz</span></figcaption>
        </figure>
        <figure class="cart home__cart" id="pictures">
          <picture>
            <source srcset="../assets/img/pictures-quiz.webp">
            <img class="img home__img" src="../assets/img/pictures-quiz.jpg" alt="pictures">
          </picture>
          <figcaption class="description home__descr">Pictures <span>Quiz</span></figcaption>
        </figure>
      </div>
    </section>
  `,
});