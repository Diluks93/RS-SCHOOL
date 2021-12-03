import AppController from '../controller/controller';
import AppView from '../view/appView';
import News from '../view/news/news';
import Sources from '../view/sources/sources';
import { Callback } from './types';

export interface ClassAppController {
  getSources(callback: Callback<DrawSources | DrawNews>): void;
  getNews(e: Event, callback: Callback<DrawSources | DrawNews>): void;
}

export interface ClassApp {
  controller: Partial<AppController>;
  view: Partial<AppView>;
  start(): void;
}

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
export interface ClassAppView {
  news: Partial<News>;
  sources: Partial<Sources>;
  drawNews(data: DrawNews): void;
  drawSources(data: DrawSources): void;
}

export interface ClassSources {
  draw(data: Array<ObjectSources>): void;
}

export interface ClassNews {
  draw(data: Array<ObjectArticles>): void;
}
