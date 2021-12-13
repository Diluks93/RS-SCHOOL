import Loader from '../../../controller/loader';
import { DataToys } from '../../../utils/interfaces';
import './cards.scss';

export class Card {
  protected container: HTMLElement;
  private static url = "https://raw.githubusercontent.com/Diluks93/stage1-tasks/christmas-task/data.json";
  private loader: Loader;
  private textTitle = 'Choose toys';

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

  private async showFavorites(): Promise<HTMLElement> {
    const data: Awaited<DataToys>[] = await this.loader.load(),
      arrayFavorites: DataToys[] = data.filter(favorite => favorite.favorite),
      header: HTMLElement = document.querySelector('header') as HTMLElement,
      count: string = arrayFavorites.length + '';

    const span = this.createTextElement('Favorites:', count, 'favorites'),
      arrayChildren: Element[] = Array.from(header.children);

    if(arrayChildren.length === 1) {
      header.append(span);
    }

    return header;
  }

  protected async createElements(): Promise<HTMLDivElement> {
    const data: Awaited<DataToys>[] = await this.loader.load();
    const cards: HTMLDivElement = document.createElement('div');
    cards.className = 'cards';

    // cards.addEventListener('click', e => { 
    //     let target = e.currentTarget;
    //     //target.classList.add('active')
    //     console.log(target);
    //   })

    data.forEach((card: DataToys) => {
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
    const element = await this.createElements();
    this.container.append(title);
    this.container.append(element);
    this.showFavorites();

    return this.container;
  }
}