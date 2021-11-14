import { WFMComponent } from '../framework/index'

class AppComponent extends WFMComponent {
  constructor(config) {
    super(config)
  }
}

export const appComponent = new AppComponent({
  selector: 'body',
  template: `
    <header id="header" class="header"></header>
    <main></main>
    <footer class="footer"></footer>
  `,
});