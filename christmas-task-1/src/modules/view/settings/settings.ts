import { ClassNameWrap, TemplateArticle } from '../../utils/enums';
import Page from '../components/abstract/page';
import { Card } from '../components/card/card';
import './settings.scss';

export default class SettingsPage extends Page {
  private card: Card;
  
  static textObject = {
    titleContent: 'Toys'
  }

  constructor(id: string) {
    super(id);
    this.card = new Card('main', 'main');
  }

  protected createElement(nameElement: string): HTMLElement {
    const element = document.createElement(nameElement);
    element.className = nameElement;

    return element;
  }

  protected createRoundCornerElement(): HTMLElement {
    const div = document.createElement('div');
    div.className = 'round-corner';

    return div;
  }

  protected createComponent(className: string, template: TemplateArticle): HTMLElement {
    const component = document.createElement('div');
    component.className = className;
    component.innerHTML = template;

    return component;
  }

  protected createArticle(): HTMLElement {
    const article = this.createElement('article');
    const [roundCorner, componentSearch, componentSort, componentCategories, componentType, componentRange, componentColors, componentSize, componentFavorite, componentButtons] = [this.createRoundCornerElement(), this.createComponent(ClassNameWrap.classSearch, TemplateArticle.componentSearch), this.createComponent(ClassNameWrap.classSort, TemplateArticle.componentSort), this.createComponent(ClassNameWrap.classCategories, TemplateArticle.componentCategories), this.createComponent(ClassNameWrap.classType, TemplateArticle.componentType), this.createComponent(ClassNameWrap.classRange, TemplateArticle.componentRange), this.createComponent(ClassNameWrap.classColors, TemplateArticle.componentColors), this.createComponent(ClassNameWrap.classSize, TemplateArticle.componentSize), this.createComponent(ClassNameWrap.classFavorite, TemplateArticle.componentFavorite), this.createComponent(ClassNameWrap.classButtons, TemplateArticle.componentButtons)];

    const arrayElementsArticle: HTMLElement[] = [roundCorner, componentSearch, componentSort, componentCategories, componentType, componentRange, componentColors, componentSize, componentFavorite, componentButtons];

    for (const item of arrayElementsArticle) {
      article.append(item);
    }
    this.container.append(article);

    return this.container;
  }
  
  async render() {
    this.createArticle();
    this.container.append(await this.card.render());

    return this.container;
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