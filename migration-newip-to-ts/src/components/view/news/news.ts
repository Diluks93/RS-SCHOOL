import { ObjectArticles } from '../appView';
import './news.css';

interface ClassNews {
  draw(data: Array<ObjectArticles>): void;
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
        (newsClone.querySelector('.news__item') as HTMLTemplateElement).classList.add('alt');
      }

      (newsClone.querySelector('.news__meta-photo') as HTMLTemplateElement).style.backgroundImage = `url(${
        item.urlToImage || 'img/news_placeholder.jpg'
      })`;
      (newsClone.querySelector('.news__meta-author') as HTMLTemplateElement).textContent =
        item.author || item.source.name;
      (newsClone.querySelector('.news__meta-date') as HTMLTemplateElement).textContent = item.publishedAt
        .slice(0, 10)
        .split('-')
        .reverse()
        .join('-');
      //TODO enum
      (newsClone.querySelector('.news__description-title') as HTMLTemplateElement).textContent = item.title;
      (newsClone.querySelector('.news__description-source') as HTMLTemplateElement).textContent = item.source.name;
      (newsClone.querySelector('.news__description-content') as HTMLTemplateElement).textContent = item.description;
      (newsClone.querySelector('.news__read-more a') as HTMLTemplateElement).setAttribute('href', item.url);

      fragment.append(newsClone);
    });

    (document.querySelector('.news') as HTMLTemplateElement).innerHTML = '';
    (document.querySelector('.news') as HTMLTemplateElement).appendChild(fragment);
  }
}

export default News;
