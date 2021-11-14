import { WFMComponent } from '../../framework/index';

class AppFooter extends WFMComponent {
  constructor(config) {
    super(config);
  }
}

export const appFooter = new AppFooter({
  selector: 'footer',
  template: `
    <a class="link" href="https://rs.school/js/" target="_blank"><img class="img-school" src="./assets/svg/rs_school_js.svg" alt="school's logo"></a>
    <a class="link" href="https://github.com/Diluks93" target="_blank"><span>App developer: Diluks93 <time>| 2021</time></span></a>
  `,
});
