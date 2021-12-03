import News from './news/news';
import Sources from './sources/sources';

export interface DrawNews {
  status: string;
  totalResults?: number;
  articles?: Array<ObjectArticles>;
}
export interface ObjectArticles {
  author: string;
  content: string;
  description: string;
  publishedAt: string;
  source: ObjectSource;
  title: string;
  url: string;
  urlToImage: string;
}
export interface ObjectSource {
  id: string;
  name: string;
}
export interface DrawSources {
  sources?: Array<ObjectSources>;
  status: string;
}
export interface ObjectSources extends ObjectSource {
  category: string;
  country: string;
  description: string;
  language: string;
  url: string;
}
interface ClassAppView {
  news: News;
  sources: Sources;
  drawNews(data: DrawNews): void;
  drawSources(data: DrawSources): void;
}
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
