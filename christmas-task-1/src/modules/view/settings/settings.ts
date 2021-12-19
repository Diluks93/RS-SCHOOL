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

  protected createArticle(): HTMLElement {
    const article = this.createElement('article');
    const [roundCorner, componentSearch, componentSort, componentCategories, componentType, componentRange, componentColors, componentSize, componentFavorite, componentButtons] = [this.createRoundCornerElement(), this.createComponent(ClassNameWrap.classSearch, TemplateArticle.componentSearch), this.createComponent(ClassNameWrap.classSort, TemplateArticle.componentSort), this.createComponent(ClassNameWrap.classCategories, TemplateArticle.componentCategories), this.createComponent(ClassNameWrap.classType, TemplateArticle.componentType), this.createComponent(ClassNameWrap.classRange, TemplateArticle.componentRange), this.createComponent(ClassNameWrap.classColors, TemplateArticle.componentColors), this.createComponent(ClassNameWrap.classSize, TemplateArticle.componentSize), this.createComponent(ClassNameWrap.classFavorite, TemplateArticle.componentFavorite), this.createComponent(ClassNameWrap.classButtons, TemplateArticle.componentButtons)];

    const arrayElementsArticle: HTMLElement[] = [roundCorner, componentSearch, componentSort, componentCategories, componentType, componentRange, componentColors, componentSize, componentFavorite, componentButtons];

    for (const item of arrayElementsArticle) {
      article.append(item);
    }

    this.useLibraryCount(
      article,
      SettingsPage.paramNoUiSliderCount.selector,
      SettingsPage.paramNoUiSliderCount.startValue,
      SettingsPage.paramNoUiSliderCount.endValue,
      SettingsPage.paramNoUiSliderCount.step,
      SettingsPage.paramNoUiSliderCount.minValue,
      SettingsPage.paramNoUiSliderCount.maxValue,
      );
    this.useLibraryYear(
      article,
      SettingsPage.paramNoUiSliderYear.selector,
      SettingsPage.paramNoUiSliderYear.startValue,
      SettingsPage.paramNoUiSliderYear.endValue,
      SettingsPage.paramNoUiSliderYear.step,
      SettingsPage.paramNoUiSliderYear.minValue,
      SettingsPage.paramNoUiSliderYear.maxValue,
      );
    this.container.append(article);
    this.sortedCards(article)
    this.showMoveSnowflake(componentSearch);

    // const figureParentElement: HTMLElement = componentType.querySelector('.type') as HTMLElement;
    // figureParentElement.addEventListener('click', (e: Event) => {
    //   const figure = (e.target as HTMLElement).parentElement;
    //   figure?.lastElementChild?.classList.toggle('active')
    //   const filterTypeData = this.card.filterTypeData(figure?.dataset.filter as string);
    //   this.card.render(filterTypeData);
    //   this.removeSelectCheckbox(componentCategories);
    // });

    // const articleElements: NodeListOf<HTMLInputElement> = article.querySelectorAll('input') as NodeListOf<HTMLInputElement>;
    // articleElements.forEach(elem => {
    //   elem.addEventListener('click', (e: Event) => {
    //     const elementInput: HTMLInputElement = e.target as HTMLInputElement;
    //     if(elementInput.checked) {
    //       const filterData = this.card.filterTypeData(elementInput.dataset.filter as string);
    //       this.card.render(filterData);
    //       this.removeSelectCheckbox;
    //     }
    //   })
    // })

    this.liveSearch(article);

    return this.container;
  }

  private liveSearch(article: HTMLElement) {
    const stringSearch: HTMLInputElement = article.querySelector('#search') as HTMLInputElement,
      btnSearch: HTMLButtonElement = article.querySelector('.button') as HTMLButtonElement;

      stringSearch.oninput = () => {
        const value = stringSearch.value.trim().toLocaleLowerCase(),
          cardItems = this.card.getCards();

        btnSearch.onclick = (e: Event) => {
          e.preventDefault();
          stringSearch.value = '';

          //todo настройки должны сохраняться
          this.card.render();
          btnSearch.classList.remove('close');
        }
        
        if (value != '') {
        btnSearch.classList.add('close');
        cardItems.forEach(elem => {
          const titleCard = (elem.firstElementChild as HTMLElement).innerText.toLocaleLowerCase();

          if(titleCard.search(value) == -1) {
            elem.classList.add('hide');
            this.returnTitleCard(elem);
            elem.addEventListener('transitionend', () => {
              elem.classList.add('none');
            })
          } else {
            elem.classList.contains('none hide') ?
              elem.classList.remove('none') :
              elem.classList.remove('hide');
            (elem.firstElementChild as HTMLElement).innerHTML = this.markFindString(this.returnTitleCard(elem), titleCard.search(value), value.length);
          }
        })
      } else {
        btnSearch.classList.remove('close');
        cardItems.forEach(elem => {
          elem.classList.remove('hide');
          this.returnTitleCard(elem);
        })
      }
      const arrayCardItems = Array.from(cardItems)
      arrayCardItems.forEach(elem => {

//todo написать модалку

        // elem.matches('div.card.none.hide') ?
        //   article.style.transform = 'scale(0)' :
        //   article.style.transform = 'scale(1)';
      })
    }
  }

  private markFindString(string: string, position: number, length: number): string {
    const startString = string.slice(0, position),
      markString = string.slice(position, position + length),
      endString = string.slice(position + length);
    return `${startString}<mark>${markString}</mark>${endString}`
  }

  private returnTitleCard(elem: Element): string {
    const str = (elem.firstElementChild as HTMLElement).innerText;
    return (elem.firstElementChild as HTMLElement).innerHTML = str;
  }

  private removeSelectCheckbox(component: HTMLElement): boolean {
    const inputSelect: HTMLInputElement = component.querySelector('#select-all') as HTMLInputElement

    return inputSelect.checked = false;
  }

  private createElement(nameElement: string): HTMLElement {
    const element = document.createElement(nameElement);
    element.className = nameElement;

    return element;
  }

  private createRoundCornerElement(): HTMLElement {
    const div = document.createElement('div');
    div.className = 'round-corner';

    return div;
  }

  private createComponent(className: string, template: TemplateArticle): HTMLElement {
    const component = document.createElement('div');
    component.className = className;
    component.innerHTML = template;

    return component;
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
      // const filterRangeData = this.card.filterRangeData(slider.noUiSlider.get(), true);
      secondSlider.noUiSlider.set([SettingsPage.paramNoUiSliderYear.startValue, SettingsPage.paramNoUiSliderYear.endValue]);
      this.removeSelectCheckbox(component);
      // this.card.render(filterRangeData);
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
      // const filterRangeData = this.card.filterRangeData(slider.noUiSlider.get(), false);
      secondSlider.noUiSlider.set([SettingsPage.paramNoUiSliderCount.startValue, SettingsPage.paramNoUiSliderCount.endValue]);
      this.removeSelectCheckbox(component);
      // this.card.render(filterRangeData);
    });
  }

  private sortedCards(article: HTMLElement) {
    const sort: HTMLInputElement = article.querySelector('#sort') as HTMLInputElement;
    sort?.addEventListener('change', () => {
      this.card.sortCards(sort.value);
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
