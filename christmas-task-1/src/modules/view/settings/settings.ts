import Page from '../components/abstract/page';
import './settings.scss';

export default class SettingsPage extends Page {
  static textObject = {
    titleContent: 'Toys'
  }

  constructor(id: string) {
    super(id)
  }

  // protected createHeaderTitle(text: string) {
  //   const headerTitle = document.createElement('h2');
  //   headerTitle.className = 'title title__card'
  //   headerTitle.innerText = text;
  //   return headerTitle;
  // }

  protected createTemplate(): void {
    const xhr: XMLHttpRequest = new XMLHttpRequest();
    xhr.open('GET', 'settings.html');
    xhr.onload = (): void => {
      this.container.innerHTML = xhr.response;
    }
    xhr.send();
  }

  render() {
    // const title = this.createHeaderTitle(SettingsPage.textObject.titleContent);
    // this.container.append(title);
    this.createTemplate()
    return this.container
  }
}

/* class Sources implements ClassSources {
  draw(data: Array<ObjectSources>): void {
    const fragment: DocumentFragment = document.createDocumentFragment();
    const sourceItemTemp: HTMLTemplateElement = document.querySelector('#sourceItemTemp') as HTMLTemplateElement;

    data.forEach((item: ObjectSources): void => {
      const sourceClone: HTMLTemplateElement = sourceItemTemp.content.cloneNode(true) as HTMLTemplateElement;

      (sourceClone.querySelector('.source__item-name') as HTMLTemplateElement).textContent = item.name;
      (sourceClone.querySelector('.source__item') as HTMLTemplateElement).setAttribute(EnumSource.sourceId, item.id);

      fragment.append(sourceClone);
    });

    (document.querySelector('.sources') as HTMLTemplateElement).append(fragment);
  }
}

export default Sources;
 */

/* class News implements ClassNews {
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
 */