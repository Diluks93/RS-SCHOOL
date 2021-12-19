import Loader from '../../../loader/loader';
import { SortName } from '../../../models/enums';
import { DataToys } from '../../../models/interfaces';
import './cards.scss';

export class Card {
  protected container: HTMLElement;
  private static url = 'https://raw.githubusercontent.com/Diluks93/stage1-tasks/christmas-task/data.json';
  private loader: Loader;
  private textTitle = 'Choose toys';
  private MAX_LENGTH_UNIQUE = 21;
  private MIN_LENGTH_UNIQUE = 0;
  private isNotSorted = true; 

  constructor(id: string, className: string) {
    this.container = document.createElement('main');
    this.loader = new Loader(Card.url);
    this.container.id = id;
    this.container.className = className;
  }

  async render(sort = this.sortData()) {
    const title = this.createTitle('h2', 'title title__card', this.textTitle);
    const element = await this.createElements(await sort);
    if(this.isNotSorted) {
      this.container.append(title);
      this.container.append(element);
      this.isNotSorted = false;
    } else {
      this.container.innerHTML = '';
      this.container.append(title);
      this.container.append(element);
    }

    this.showUnique();
    this.addUniqueElement();
    return this.container;
  }

  async sortData(value = ''): Promise<DataToys[]> {
    const srcData: Awaited<DataToys>[] = await this.loader.load();
    let data: DataToys[] = srcData.map(item => item);

    switch(value) {
      case(''): data;
        break;
      case(SortName.nameMax): {data = srcData.sort((a, b) => {
        const x = a.name.toLowerCase(),
          y = b.name.toLowerCase();
          if(x < y) {return -1;}
          if(x > y) {return 1;}
          return 0;
      })}
        break;
      case(SortName.nameMin): {data = srcData.sort((a, b) => {
        const x = a.name.toLowerCase(),
          y = b.name.toLowerCase();
          if(x < y) {return 1;}
          if(x > y) {return -1;}
          return 0;
      })}
        break;
      case(SortName.yearMax): {data = srcData.sort((a, b) => a.year - b.year)}
        break;
      case(SortName.yearMin): {data = srcData.sort((a, b) => b.year - a.year)}
        break;
    }

    return data;
  }

  async filterRangeData(value: Array<number>, isCount: boolean): Promise<DataToys[]> {
    const  data: DataToys[] = await this.sortData();

    return isCount 
    ? data.filter(item => item.count >= value[0] && item.count <= value[1]) 
    : data.filter(item => item.year >= value[0] && item.year <= value[1])
  }

  async filterTypeData(nameElement: string) {
    let  data: DataToys[] = await this.sortData();

    switch(nameElement) {
      case('select-all'): data;
        break;
      case('bell'): data = data.filter(item => item.shape === 'bell');
        break;
      case('ball'): data = data.filter(item => item.shape === 'ball');
        break;
      case('pine'): data = data.filter(item => item.shape === 'cone');
        break;
      case('snowflake'): data = data.filter(item => item.shape === 'snowflake');
        break;
      case('figure'): data = data.filter(item => item.shape === 'figure');
        break;
      case('big'): data = data.filter(item => item.size === 'big');
        break;
      case('medium'): data = data.filter(item => item.size === 'medium');
        break;
      case('small'): data = data.filter(item => item.size === 'small');
        break;
      case('favorite'): data = data.filter(item => item.favorite);
        break;
      case('yellow'): data = data.filter(item => item.color === 'yellow');
        break;
      case('blue'): data = data.filter(item => item.color === 'blue');
        break;
      case('red'): data = data.filter(item => item.color === 'red');
        break;
      case('white'): data = data.filter(item => item.color === 'white');
        break;
      case('green'): data = data.filter(item => item.color === 'green');
        break;
    }

    return data;
  }

  getCards() {
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
        favorite: HTMLSpanElement = card.favorite ? this.createTextElement('Favorite:', 'yes') : this.createTextElement('Favorite:', 'no');

      descr.className = 'descr';
      div.className = card.unique ? 'card active' : 'card'
      div.dataset.id = index + '';

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
    const cards = this.getCards();
    let counter = this.MIN_LENGTH_UNIQUE;
    const srcData: Awaited<DataToys>[] = await this.loader.load();

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

      //todo написать модалку;
          alert('You have chosen the maximum of your favorite toys');
          counter--;
          srcData[+index].unique = false;
          this.showUnique(counter);
          card.classList.remove('active');
        }
      })
    })
  }
}