import Loader from '../../../loader/loader';
import { SortName } from '../../../models/enums';
import { DataToys } from '../../../models/interfaces';
import Modal from '../modal-window/modal';
import './cards.scss';

export class Card {
  protected container: HTMLElement;
  private static url = 'https://raw.githubusercontent.com/Diluks93/stage1-tasks/christmas-task/data.json';
  private loader: Loader;
  private textTitle = 'Choose toys';
  private MAX_LENGTH_UNIQUE = 21;
  private MIN_LENGTH_UNIQUE = 0;
  private MAX_CHILD_DESCR = 6;
  private modal: Modal;

  constructor(id: string, className: string) {
    this.container = document.createElement('main');
    this.loader = new Loader(Card.url);
    this.container.id = id;
    this.container.className = className;
    this.modal = new Modal('modal', 'modal');
  }

  async render() {
    const title = this.createTitle('h2', 'title title__card', this.textTitle);
    const element = await this.createElements(await this.loader.load());
    this.container.append(title);
    this.container.append(element);

    this.showUnique();
    this.addUniqueElement();
    return this.container;
  }

  sortCards(value: string) {
    const parentCards: Element = this.container.querySelector('.cards') as Element;

    switch(value){
      case(SortName.noSorted): this.bubbleSort(parentCards?.children as HTMLCollection, parentCards);
        break;
      case(SortName.nameMax): this.bubbleSortName(parentCards);
        break;
      case(SortName.nameMin): this.bubbleSortName(parentCards, false);
        break;
      case(SortName.yearMax): this.bubbleSortYear(parentCards?.children as HTMLCollection, parentCards);
        break;
      case(SortName.yearMin): this.bubbleSortYear(parentCards?.children as HTMLCollection, parentCards, false);
        break;
    }
  }

  private bubbleSortYear(cards: HTMLCollection, parent: Element, ascending = true) {
    for(let i = 0; i < cards.length; i++) {
      for (let j = i; j < cards.length; j++) {
        const card: string = (cards[i] as HTMLElement)?.dataset.year as string,
          rightSiblingCard: string = (cards[j] as HTMLElement)?.dataset.year as string;
        if(ascending) {
          if(+card > +rightSiblingCard) {
            const replacedNode = parent.replaceChild(cards[j], cards[i]);
            this.insertAfter(replacedNode, cards[i]);
          }
        } else {
          if(+card < +rightSiblingCard) {
            const replacedNode = parent.replaceChild(cards[j], cards[i]);
            this.insertAfter(replacedNode, cards[i]);
          }
        }
      }
    }
  }

  private bubbleSortName(parent: Element, ascending = true) {
    const cards = parent.children;
    for(let i = 0; i < cards.length; i++) {
      for (let j = i; j < cards.length; j++) {
        const card = (cards[i].firstChild as HTMLElement).innerText.toLowerCase(),
          rightSiblingCard = (cards[j].firstChild as HTMLElement).innerText.toLowerCase();
        if(ascending) {
          if(card > rightSiblingCard) {
            const replacedNode = parent.replaceChild(cards[j], cards[i]);
            this.insertAfter(replacedNode, cards[i])
          }
        } else {
          if(card < rightSiblingCard) {
            const replacedNode = parent.replaceChild(cards[j], cards[i]);
            this.insertAfter(replacedNode, cards[i])
          }
        }
      }
    }
  }

  private bubbleSort(cards: HTMLCollection, parent: Element, ascending = true) {
    for(let i = 0; i < cards.length; i++) {
      for (let j = i; j < cards.length; j++) {
        const card: string = (cards[i] as HTMLElement)?.dataset.id as string,
          rightSiblingCard: string = (cards[j] as HTMLElement)?.dataset.id as string;
        if(ascending) {
          if(+card > +rightSiblingCard) {
            const replacedNode = parent.replaceChild(cards[j], cards[i]);
            this.insertAfter(replacedNode, cards[i]);
          }
        }
      }
    }
  }

  private insertAfter(element: Element, refElement: HTMLCollection[number]) {
    return refElement.parentNode?.insertBefore(element, refElement.nextSibling);
  }

  filterRange(value: Array<number>, isCount: boolean, data: string): void {
    const cards = this.container.querySelector('.cards');    

    for(let i = 0; i < (cards?.childElementCount as number); i++) {
      const checkDataset: Element = isCount ? cards?.children[i].lastChild?.firstChild as Element : cards?.children[i] as Element,
        card = cards?.children[i] as Element,
        year: string = checkDataset.getAttribute(data) as string;

      card.classList.remove('hide');
      if(value[0] > +year) {
        this.transitionEnd(card);
      }
      if(value[1] < +year) {
        this.transitionEnd(card);
      }
    }
  }

  private transitionEnd(card: Element) {
    card.classList.add('hide');
    card.addEventListener('transitionend', () => {
      card.classList.add('none');
    })
  }

  typeData(nameElement: string) {
    switch(nameElement) {
      case('select-all'): this.filterType(nameElement, 'all');
        break;
      case('bell'): this.filterType(nameElement, 'data-type');
        break;
      case('ball'): this.filterType(nameElement, 'data-type');
        break;
      case('cone'): this.filterType(nameElement, 'data-type');
        break;
      case('snowflake'): this.filterType(nameElement, 'data-type');
        break;
      case('figure'): this.filterType(nameElement, 'data-type');
        break;
      case('big'): this.filterType(nameElement, 'data-size');
        break;
      case('medium'): this.filterType(nameElement, 'data-size');
        break;
      case('small'): this.filterType(nameElement, 'data-size');
        break;
      case('favorite'): this.filterType(nameElement, 'data-favorite');
        break;
      case('yellow'): this.filterType(nameElement, 'data-color');
        break;
      case('blue'): this.filterType(nameElement, 'data-color');
        break;
      case('red'): this.filterType(nameElement, 'data-color');
        break;
      case('white'): this.filterType(nameElement, 'data-color');
        break;
      case('green'): this.filterType(nameElement, 'data-color');
        break;
    }
  }

  filterType(dataNameSetting: string, dataNameCard: string){
    const cards = this.getCards();

    cards.forEach(elem => {
      elem.classList.remove('hide');
    })

    for(let i = 0; i < cards.length; i++) {
      for(let j = 0; j < this.MAX_CHILD_DESCR; j++) {
        const dataSize = cards[i].children[2].children[j].getAttribute(dataNameCard);
        if(dataSize !== dataNameSetting && dataSize) {
          this.transitionEnd(cards[i]);
        }
      }
    }
  }

  getCards(): NodeListOf<Element> {
    const cards = this.container.querySelectorAll('.card');

    return cards;
  }

  protected async createElements(data: DataToys[]) {
    const cards: HTMLDivElement = document.createElement('div');
    cards.className = 'cards';

    data.forEach((card: DataToys, index: number) => {
      const div: HTMLDivElement = document.createElement('div'),
        descr: HTMLDivElement = document.createElement('div'),
        title: HTMLElement = this.createTitle('h3', 'title title__cards', card.name),
        picture: HTMLPictureElement = this.createImgElement(card.num),
        count: HTMLSpanElement = this.createTextElement('Amount toys:', card.count),
        year: HTMLSpanElement = this.createTextElement('Year of purchase:', card.year),
        type: HTMLSpanElement = this.createTextElement('Type toys:', card.shape),
        color: HTMLSpanElement = this.createTextElement('Color:', card.color),
        size: HTMLSpanElement = this.createTextElement('Size:', card.size),  
        favorite: HTMLSpanElement = card.favorite ? 
          this.createTextElement('Favorite:', 'yes') : 
          this.createTextElement('Favorite:', 'no');

      descr.className = 'descr';
      div.className = card.unique ? 'card active' : 'card';
      div.dataset.id = `${index}`;
      color.dataset.color = `${card.color}`;
      type.dataset.type = `${card.shape}`;
      size.dataset.size = `${card.size}`;
      favorite.dataset.favorite = `${card.favorite ? 'favorite' : 'no-favorite'}`
      div.dataset.year = `${card.year}`;
      count.dataset.count = `${card.count}`;
      div.append(title);
      div.append(picture);

      descr.append(count);
      descr.append(year);
      descr.append(type);
      descr.append(color);
      descr.append(size);
      descr.append(favorite);

      div.append(descr);
      cards.append(div);
    });

    return cards;
  }

  private createTitle(tagName: string, className: string, text: string): HTMLElement {
    const title: HTMLElement = document.createElement(tagName);
    title.className = className;
    title.innerHTML = text;

    return title;
  }
  
  private createTextElement(template: string, text: number | string, className = 'card__descr'): HTMLSpanElement {
    const span: HTMLSpanElement = document.createElement('span');
    span.className = className;
    span.innerHTML = `${template} ${text}`;

    return span;
  }

  private createImgElement(num: number): HTMLPictureElement {
    const picture: HTMLPictureElement = document.createElement('picture'),
      img: HTMLImageElement = document.createElement('img'),
      source: HTMLSourceElement  = document.createElement('source');

    source.srcset = `https://raw.githubusercontent.com/Diluks93/stage1-tasks/christmas-task/assets/toys/${num}.webp`;
    img.alt = 'toy';
    img.src = `https://raw.githubusercontent.com/Diluks93/stage1-tasks/christmas-task/assets/toys/${num}.png`;
    img.className = 'img img__card';
    picture.append(source);
    picture.append(img);

    return picture;
  }

  private showUnique(counter: number = this.MIN_LENGTH_UNIQUE): HTMLElement {
    const div: HTMLDivElement = document.querySelector('.unique') as HTMLDivElement,
      header: HTMLElement = document.querySelector('header') as HTMLElement,
      span: HTMLSpanElement = this.createTextElement('Your choose:', counter, 'unique__item');

    div.innerHTML = '';
    div.append(span);
    header.append(div);

    return header;
  }

  private async addUniqueElement() {  
    const cards = this.getCards(),
      srcData: Awaited<DataToys>[] = await this.loader.load();
    let counter = this.MIN_LENGTH_UNIQUE;

    cards.forEach((card) => {
      card.addEventListener('click', () => {
        const index: string = (card as HTMLElement).dataset.id as string
        
        if(card.matches('div.card.active')) {
          card.classList.remove('active');
          counter--;
          srcData[+index].unique = false;
          this.showUnique(counter);
        } else {
          card.classList.add('active');
          counter++;
          this.showUnique(counter);
          srcData[+index].unique = true;
        }
        if(counter === this.MAX_LENGTH_UNIQUE) {
          this.container.append(this.modal.render('You have chosen the maximum of your favorite toys'));
          counter--;
          srcData[+index].unique = false;
          this.showUnique(counter);
          card.classList.remove('active');
        }
      })
    })
  }
}