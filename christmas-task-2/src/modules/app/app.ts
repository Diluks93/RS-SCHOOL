import { ErrorType, Pages } from '../models/enums';
import SettingsPage from '../view/settings/settings';
import GamePage from '../view/game/game';
import HomePage from '../view/home/home';
import Page from '../view/components/abstract/page';
import HeaderComponent from '../view/components/header/header';
import ErrorPage from '../view/error/error';
import FooterComponent from '../view/components/footer/footer';

export default class App {
  private static container = document.getElementById('root') as HTMLElement;
  private static defaultPageId: Pages = Pages.currentPage;
  private initialPage: HomePage;
  private header: HeaderComponent;
  private footer: FooterComponent;

  static async renderNewPage(idPage: string): Promise<void> {
    const currentPageHTML = document.getElementById(`${App.defaultPageId}`);
    if(currentPageHTML) {
      currentPageHTML.remove();
    }
    let page: Page | null = null;

    switch(idPage) {
      case(Pages.homePage): page = new HomePage(idPage);
      break;
      case(Pages.settingsPage): page = new SettingsPage(idPage);
      break;
      case(Pages.gamePage): page = new GamePage(idPage);
      break;
      default: page = new ErrorPage(idPage, ErrorType.error);
    }

    if(page) {
      const pageHTML: Awaited<HTMLElement> = await page.render();
      pageHTML.id = App.defaultPageId;
      App.container.append(pageHTML);
    }
  }

  constructor() {
    this.initialPage = new HomePage(Pages.homePage);
    this.header = new HeaderComponent('header', 'header');
    this.footer = new FooterComponent('footer', 'footer');
  }

  start() {
    App.container.append(this.header.render());
    App.renderNewPage(/* Pages.homePage */ Pages.gamePage);
    App.container.append(this.footer.render());
    this.enableRouteChange();
  }
  
  private enableRouteChange(): void {
    window.addEventListener('hashchange', () => {
      const hash = window.location.hash.slice(1);
      App.renderNewPage(hash);
    })
  }

}
