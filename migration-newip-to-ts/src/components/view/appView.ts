import { ClassAppView, DrawNews, DrawSources } from '../utils/interfaces';
import News from './news/news';
import Sources from './sources/sources';

export class AppView implements ClassAppView {
  news: News;

  sources: Sources;

  constructor() {
    this.news = new News();
    this.sources = new Sources();
  }

  drawNews(data: DrawNews): void {
    const values = data?.articles ? data?.articles : [];
    this.news.draw(values);
  }

  drawSources(data: DrawSources): void {
    const values = data?.sources ? data?.sources : [];
    this.sources.draw(values);
  }
}

export default AppView;
