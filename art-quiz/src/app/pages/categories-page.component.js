import { WFMComponent } from '../../framework/index';

class CategoriesPageComponent extends WFMComponent {
  constructor(config) {
    super(config);
  }
}

export const categoriesPageComponent = new CategoriesPageComponent({
  selector: 'app-categories-page',
  template: `
    <h1 class="title">
      <a href="#">
        <img class="img-title logo" src="./assets/svg/logo.svg" alt="logo">
      </a>
    </h1>
    <div class="wrapper">
      <a href="#" class="btn">Home</a>
      <h2>Categories</h2>
      <a href="#" class="btn">Score</a>
    </div>
  `,
});
