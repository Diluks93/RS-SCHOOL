import { ObjectArticles } from '../appView';
import './news.css';

interface ClassNews {
  draw(data: Array<ObjectArticles>): void;
}

enum EnumNews {
  item = '.news__item',
  photo = '.news__meta-photo',
  author = '.news__meta-author',
  date = '.news__meta-date',
  title = '.news__description-title',
  source = '.news__description-source',
  content = '.news__description-content',
  more = '.news__read-more a',
  news = '.news',
}
class News implements ClassNews {
  draw(data: Array<ObjectArticles>): void {
    const news: Array<ObjectArticles> =
      data.length >= 10 ? data.filter((_item: ObjectArticles, idx: number) => idx < 10) : data;

    const fragment: DocumentFragment = document.createDocumentFragment();
    const newsItemTemp: HTMLTemplateElement = document.querySelector('#newsItemTemp') as HTMLTemplateElement;

    news.forEach((item: ObjectArticles, idx: number): void => {
      const newsClone: HTMLTemplateElement = newsItemTemp.content.cloneNode(true) as HTMLTemplateElement;

      if (idx % 2) {
        (newsClone.querySelector(EnumNews.item) as HTMLTemplateElement).classList.add('alt');
      }

      (newsClone.querySelector(EnumNews.photo) as HTMLTemplateElement).style.backgroundImage = `url(${
        item.urlToImage || 'img/news_placeholder.jpg'
      })`;
      (newsClone.querySelector(EnumNews.author) as HTMLTemplateElement).textContent = item.author || item.source.name;
      (newsClone.querySelector(EnumNews.date) as HTMLTemplateElement).textContent = item.publishedAt
        .slice(0, 10)
        .split('-')
        .reverse()
        .join('-');

      (newsClone.querySelector(EnumNews.title) as HTMLTemplateElement).textContent = item.title;
      (newsClone.querySelector(EnumNews.source) as HTMLTemplateElement).textContent = item.source.name;
      (newsClone.querySelector(EnumNews.content) as HTMLTemplateElement).textContent = item.description;
      (newsClone.querySelector(EnumNews.more) as HTMLTemplateElement).setAttribute('href', item.url);

      fragment.append(newsClone);
    });

    (document.querySelector(EnumNews.news) as HTMLTemplateElement).innerHTML = '';
    (document.querySelector(EnumNews.news) as HTMLTemplateElement).appendChild(fragment);
  }
}

export default News;
