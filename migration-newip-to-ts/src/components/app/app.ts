import AppController from '../controller/controller';
import { AppView, DrawSources, PickDrawNews } from '../view/appView';

interface ClassApp {
  controller: Partial<AppController>;
  view: Partial<AppView>;
  start(): void;
}
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
