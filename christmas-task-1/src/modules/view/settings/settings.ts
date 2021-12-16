import { ClassNameWrap, TemplateArticle } from '../../utils/enums';
import Page from '../components/abstract/page';
import { Card } from '../components/card/card';
import '../../../../node_modules/nouislider/dist/nouislider.css'
import './settings.scss';
import noUiSlider from '../../../../node_modules/nouislider/dist/nouislider.mjs';
import { ParamNoUiSlider } from '../../utils/interfaces';

declare namespace noUiSlider {
    interface noUiSlider {
      on: (firstArgument: string, secondArgument: (values: string[], handle: number) => void) => void;
      get: () => Array<number>;
      set: (firstArgument: Array<number>) => void;
    }

    interface Instance extends HTMLElement {
        noUiSlider: noUiSlider
    }
}

export default class SettingsPage extends Page {
  private card: Card;
  
  static textObject = {
    titleContent: 'Toys'
  }
  static paramNoUiSliderCount: ParamNoUiSlider = {
    selector: '#count',
    startValue: 1,
    endValue: 12,
    step: 1,
    minValue: 1,
    maxValue: 12
  }
  static paramNoUiSliderYear: ParamNoUiSlider = {
    selector: '#year',
    startValue: 1940,
    endValue: 2020,
    step: 10,
    minValue: 1940,
    maxValue: 2020
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

    this.useLibraryCount(
      componentRange,
      SettingsPage.paramNoUiSliderCount.selector,
      SettingsPage.paramNoUiSliderCount.startValue,
      SettingsPage.paramNoUiSliderCount.endValue,
      SettingsPage.paramNoUiSliderCount.step,
      SettingsPage.paramNoUiSliderCount.minValue,
      SettingsPage.paramNoUiSliderCount.maxValue
      );
    this.useLibraryYear(
      componentRange,
      SettingsPage.paramNoUiSliderYear.selector,
      SettingsPage.paramNoUiSliderYear.startValue,
      SettingsPage.paramNoUiSliderYear.endValue,
      SettingsPage.paramNoUiSliderYear.step,
      SettingsPage.paramNoUiSliderYear.minValue,
      SettingsPage.paramNoUiSliderYear.maxValue
      );
    this.container.append(article);

    this.sortedData(componentSort)

    return this.container;
  }

  private useLibraryCount(component: HTMLElement, selector: string, start: number, finish: number, step: number, minValue: number, maxValue: number): void {
    const slider: noUiSlider.Instance = component.querySelector(selector) as noUiSlider.Instance,
      secondSlider: noUiSlider.Instance = slider.parentNode?.nextSibling?.nextSibling?.childNodes[2].nextSibling as noUiSlider.Instance;
    noUiSlider.create(slider, {
      start: [start, finish],
      step: step,
      connect: true,
      range: {
        'min': minValue,
        'max': maxValue
      },
      tooltips: [true, true],
      format: {
        to: (value: string) => Math.round(+value),
        from: (value: string) => Number(value)
      }
    });

    const snapValues: HTMLElement[] = [
      component.querySelector('#slider-range-value-count-lower') as HTMLElement,
      component.querySelector('#slider-range-value-count-upper') as HTMLElement
    ];

    slider.noUiSlider.on('update', (values: string[], handle: number) => {
      snapValues[handle].innerHTML = values[handle];
    });

    slider.addEventListener('mouseup', () => {
      const filterData = this.card.filterData(slider.noUiSlider.get(), true);
      secondSlider.noUiSlider.set([SettingsPage.paramNoUiSliderYear.startValue, SettingsPage.paramNoUiSliderYear.endValue])
      this.card.render(filterData);
    });
  }

  private useLibraryYear(component: HTMLElement, selector: string, start: number, finish: number, step: number, minValue: number, maxValue: number) {
    const slider: noUiSlider.Instance = component.querySelector(selector) as noUiSlider.Instance,
      secondSlider: noUiSlider.Instance = slider.parentNode?.previousSibling?.previousSibling?.childNodes[2].nextSibling as noUiSlider.Instance;

    noUiSlider.create(slider, {
      start: [start, finish],
      tooltips: [true, true],
      step: step,
      connect: true,
      range: {
        'min': minValue,
        'max': maxValue
      },
      format: {
        to: (value: string) => Math.round(+value),
        from: (value: string) => Number(value)
      }
    });

    const snapValues: HTMLElement[] = [
      component.querySelector('#slider-range-value-year-lower') as HTMLElement,
      component.querySelector('#slider-range-value-year-upper') as HTMLElement
    ];

    slider.noUiSlider.on('update', (values: string[], handle: number) => {
      snapValues[handle].innerHTML = values[handle];
    });

    slider.addEventListener('mouseup', () => {
      const filterData = this.card.filterData(slider.noUiSlider.get(), false);
      secondSlider.noUiSlider.set([SettingsPage.paramNoUiSliderCount.startValue, SettingsPage.paramNoUiSliderCount.endValue])
      this.card.render(filterData);
    });
  }

  private sortedData(component: HTMLElement) {
    const sort: HTMLInputElement = component.querySelector('#sort') as HTMLInputElement;

    sort?.addEventListener('change', () => {
      const sortData = this.card.sortData(sort.value);
      this.card.render(sortData);
      sort.value = '';
    })
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