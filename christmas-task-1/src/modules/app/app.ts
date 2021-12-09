import { ErrorType, Pages } from '../utils/enums';
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

  static renderNewPage(idPage: string) {
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
      const pageHTML = page.render();
      pageHTML.id = App.defaultPageId;
      App.container.append(pageHTML);
    }
  }

  constructor() {
    this.initialPage = new HomePage('home-page');
    this.header = new HeaderComponent('header', 'header');
    this.footer = new FooterComponent('footer', 'footer')
  }

  private enableRouteChange(): void {
    window.addEventListener('hashchange', () => {
      const hash = window.location.hash.slice(1);
      App.renderNewPage(hash)
    })
  }

  start(): void {
    App.container.append(this.header.render());
    App.renderNewPage('home-page');
    App.container.append(this.footer.render())
    this.enableRouteChange();
  }
}

/* 
class App implements ClassApp {
  controller: AppController;

  view: AppView;

  constructor() {
    this.controller = new AppController();
    this.view = new AppView();
  }

  start(): void {
    (document.querySelector('.sources') as HTMLTemplateElement).addEventListener('click', (e: MouseEvent) =>
      this.controller.getNews(e, (data: DrawSources | PickDrawNews) => this.view.drawNews(data))
    );

    this.controller.getSources((data: DrawSources | PickDrawNews) => this.view.drawSources(data));
  }
}

export default App;
*/