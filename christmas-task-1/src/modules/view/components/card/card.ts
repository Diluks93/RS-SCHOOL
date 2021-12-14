import Loader from '../../../controller/loader';
import { DataToys } from '../../../utils/interfaces';
import './cards.scss';

export class Card {
  protected container: HTMLElement;
  private static url = "https://raw.githubusercontent.com/Diluks93/stage1-tasks/christmas-task/data.json";
  private loader: Loader;
  private textTitle = 'Choose toys';
  private maxLengthFavorites = 20;

  constructor(id: string, className: string) {
    this.container = document.createElement('main');
    this.loader = new Loader(Card.url);
    this.container.id = id;
    this.container.className = className;
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

  private async sortData(): Promise<DataToys[]> {
    const srcData: Awaited<DataToys>[] = await this.loader.load(),
      data: DataToys[] = srcData.map(item => item)

    return data;
  }

  private async showFavorites(data: DataToys[]): Promise<HTMLElement> {
    const div: HTMLDivElement = document.querySelector('.favorite') as HTMLDivElement;
    const  arrayFavorites: DataToys[] = data.filter(favorite => favorite.favorite),
      header: HTMLElement = document.querySelector('header') as HTMLElement,
      count: string = arrayFavorites.length + '';

    const span = this.createTextElement('Favorites:', count, 'favorites');

    div.innerHTML = '';
    div.append(span);
    header.append(div);

    return header;
  }

  private addFavoriteElement(data: DataToys[], element: HTMLDivElement) {  
    element.addEventListener('click', async (e: Event) => {
      const  arrayFavorites: DataToys[] = data.filter(favorite => favorite.favorite);
      const target: HTMLElement = e.target as HTMLElement;
      let index = 0;
      if(target.dataset.id) {
        index = +target.dataset.id;
      }
      if(target.matches('.card') && arrayFavorites.length < this.maxLengthFavorites) {
        
        if(data[index].favorite) {
          data[index].favorite = false;
        } else {
          data[index].favorite = true;
        }
        
        const element = await this.createElements(data);
        this.container.innerHTML = '';
        this.container.append(element);
        this.showFavorites(data);
      } else if (arrayFavorites.length === this.maxLengthFavorites) {
        //todo написать модалку;
        alert('You have chosen the maximum of your favorite toys');
      }
    })
  }

  protected async createElements(data: DataToys[]) {
    const cards: HTMLDivElement = document.createElement('div');
    cards.className = 'cards';

    this.addFavoriteElement(data, cards)

    data.forEach((card: DataToys, index: number) => {
      const div: HTMLDivElement = document.createElement('div'),
        descr: HTMLDivElement = document.createElement('div'),
        title: HTMLElement = this.createTitle('h3', 'title title__cards', card.name),
        picture: HTMLPictureElement = this.createImgElement(card.num),
        count: HTMLSpanElement = this.createTextElement('Amount toys:', card.count),
        year: HTMLSpanElement = this.createTextElement('Year of purchase:', card.year),
        type: HTMLSpanElement = this.createTextElement('Type toys:', card.shape),
        color: HTMLSpanElement = this.createTextElement('Color:', card.color),
        size: HTMLSpanElement = this.createTextElement('Size:', card.size);
      let favorite: HTMLSpanElement;

      descr.className = 'descr';
      if(card.favorite) {
        favorite = this.createTextElement('Favorite:', 'yes');
        div.className = 'card active';
      } else {
        favorite = this.createTextElement('Favorite:', 'no');
        div.className = 'card';
      }

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

  async render() {
    const title = this.createTitle('h2', 'title title__card', this.textTitle);
    const element = await this.createElements(await this.sortData());
    this.container.append(title);
    this.container.append(element);
    this.showFavorites(await this.sortData())

    return this.container;
  }
}