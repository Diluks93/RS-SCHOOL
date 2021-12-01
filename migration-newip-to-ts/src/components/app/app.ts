import AppController from '../controller/controller';
import { AppView } from '../view/appView';

export interface News {
  articles: string[];
  status: string;
  totalResults: number;
}

export interface Controller {
  sources: string[];
  status: string;
}

class App {
  controller: AppController;
  view: AppView;

  constructor() {
    this.controller = new AppController();
    this.view = new AppView();
  }

  start(): void {
    (document
      .querySelector('.sources') as HTMLElement)
      .addEventListener('click', (e) => this.controller.getNews(e, (data: News) => this.view.drawNews(data)));
    this.controller.getSources((data: Controller) => this.view.drawSources(data));
  }
}

export default App;
