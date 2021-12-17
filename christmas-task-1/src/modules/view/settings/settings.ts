import { ClassNameWrap, TemplateArticle } from '../../models/enums';
import Page from '../components/abstract/page';
import { Card } from '../components/card/card';
import '../../../../node_modules/nouislider/dist/nouislider.css'
import './settings.scss';
import noUiSlider from '../../../../node_modules/nouislider/dist/nouislider.mjs';
import { ParamNoUiSlider } from '../../models/interfaces';
import { Snowflake } from '../components/snowflake/snowflake';

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
  private snowflake: Snowflake;
  private isSnowMove = true;
  
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
    this.snowflake = new Snowflake();
  }

  async render() {
    this.createArticle();
    this.container.append(await this.card.render());

    return this.container;
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

    this.sortedData(componentSort);
    this.showMoveSnowflake(componentSearch);

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

  private showMoveSnowflake(component: HTMLElement): void {
    component.querySelector('#snowflake')?.addEventListener('click', (e) => {
      e.preventDefault();
      const canvas = document.createElement('canvas');
      canvas.id = 'canvas';

      if(this.isSnowMove) {
        component.parentElement?.parentElement?.append(canvas);
        this.snowflake.showSnowflake();
        this.isSnowMove = false;
      } else {
        component.parentElement?.parentElement?.lastChild?.remove();
        this.isSnowMove = true;
      }
    })
  }
  
  
}
