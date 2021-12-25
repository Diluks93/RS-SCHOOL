import Page from '../components/abstract/page';
import { Snowflake } from '../components/snowflake/snowflake';
import './game.scss'

export default class GamePage extends Page {
  private isSnowMove = true;
  static textObject = {
    titlePage: 'Happy New Year!!!',
    titleComponentChooseTree: 'Choose Christmas tree',
    titleComponentChooseBackground: 'Choose background',
    titleComponentChooseGarland: 'Choose garland\'s lighting',
    titleComponentToys: 'Toys',
    titleComponentDecorate: 'You decorated'
  }
  QUANTITY_TREES = 6;
  QUANTITY_BACKGROUNDS = 10;
  QUANTITY_TEMPLATES = 5;
  isPlay = false;
  audio = new Audio('https://raw.githubusercontent.com/Diluks93/stage1-tasks/christmas-task/assets/audio/audio.mp3')

  constructor(id: string) {
    super(id);
  }

  render() {
    const title = this.createHeaderTitle(GamePage.textObject.titlePage);
    const main = this.createMainComponent();
    this.container.append(title);
    this.container.append(main);   
    
    return this.container;
  }

  createMainComponent() {
    const main = document.createElement('main');
    const sections: HTMLElement[] = [
      this.createSection('settings'),
      this.createSection('main-tree'),
      this.createSection('result'),
    ]
    main.className = 'christmas-tree';
    sections.forEach((section, index) => {
      if(index === 0) {
        this.buildSettings(section);
      }
      main.append(section);
    })
    this.changeBackground(main);
    this.changeChristmasTree(main);
    this.showMoveSnowflake(main);
    this.addMusic(main);
    this.buildSectionMainTree(main);
    
    return main;
  }
  
  protected createHeaderTitle(text: string): HTMLElement {
    const headerTitle = document.createElement('h2');
    headerTitle.className = 'title title__game';
    headerTitle.innerText = text;

    return headerTitle;
  }

  protected createSection(className: string) {
    const section = document.createElement('section');
    section.className = className;

    return section;
  }

  protected buildSettings(section: HTMLElement): HTMLElement {
    const wrap = this.createComponentWrapper('wrap wrap__row');
    const componentChooseTree = this.createComponentChooseTree();
    const componentChooseBackground = this.createComponentChooseBackground();
    const componentChooseGarland = this.createComponentChooseGarland();
    wrap.innerHTML = `
      <a href="" class="comp__search_link" id="sound">
        <img class="img img__button" src="https://raw.githubusercontent.com/Diluks93/stage1-tasks/christmas-task/assets/svg/audio.svg" alt="mute button">
      </a>
      <a href="" class="comp__search_link" id="snowflake">
        <img class="img img__button" src="https://raw.githubusercontent.com/Diluks93/stage1-tasks/christmas-task/assets/svg/snow.svg" alt="show snow button">
      </a>
    `;
    section.append(wrap);
    section.append(componentChooseTree);
    section.append(componentChooseBackground);
    section.append(componentChooseGarland);

    return section;
  }

  private showMoveSnowflake(component: HTMLElement): void {
    component.querySelector('#snowflake')?.addEventListener('click', (e) => {
      e.preventDefault();
      const canvas = document.createElement('canvas');
      canvas.id = 'canvas';
      if(this.isSnowMove) {
        component.append(canvas);
        const snowflake: Snowflake = new Snowflake(component);
        snowflake.showSnowflake()
        this.isSnowMove = false;
      } else {
        component.lastChild?.remove();
        this.isSnowMove = true;
      }
    })
  }

  private playMusic() {
    this.isPlay = true;
    this.audio.play();
    if(this.isPlay) this.audio.play();
  }

  private pauseMusic() {
    this.isPlay = false;
    if(!this.isPlay) this.audio.pause();
  }

  protected addMusic(component: HTMLElement) {
    component.querySelector('#sound')?.addEventListener('click', (e) => {
      e.preventDefault();
      this.isPlay ? this.pauseMusic() : this.playMusic();
    })
  }

  createComponentChooseTree() {
    const componentChooseTree = this.createComponentWrapper('choose-tree');
    const titleChooseTree = this.createComponentTitle(GamePage.textObject.titleComponentChooseTree, 'title__settings');
    const wrap = this.createComponentWrapper('wrap wrap__row trees');
    const arrayAltName: Array<string> = ['green-tree', 'pine-tree', 'cone-tree', 'gold-tree', 'fir-tree', 'blue-tree'];
    
    for(let i = 1; i <= this.QUANTITY_TREES; i++){
      const picture = document.createElement('picture');
      const source = document.createElement('source');
      const img = document.createElement('img');
      source.srcset = `https://raw.githubusercontent.com/Diluks93/stage1-tasks/christmas-task/assets/tree/${i}.webp`;
      img.src = `https://raw.githubusercontent.com/Diluks93/stage1-tasks/christmas-task/assets/tree/${i}.webp`;
      if(i === 1) {
        img.className = 'img img__tree active';
      } else {
        img.className = 'img img__tree';
      }
      img.alt = arrayAltName[i - 1];
      picture.append(source);
      picture.append(img);
      wrap.append(picture);
    }

    componentChooseTree.append(titleChooseTree);
    componentChooseTree.append(wrap);

    return componentChooseTree;
  }

  createComponentChooseBackground() {
    const componentChooseBackground = this.createComponentWrapper('choose-background');
    const titleChooseBackground = this.createComponentTitle(GamePage.textObject.titleComponentChooseBackground, 'title__settings');
    const wrap = this.createComponentWrapper('wrap wrap__row backgrounds');
    const arrayAltName: Array<string> = ['snow', 'blue', 'snow-tree', 'miracle', 'snow-city', 'moon', 'bullfinches', 'snow-town', 'snow-house', 'night-city'];
    for(let i = 1; i <= this.QUANTITY_BACKGROUNDS; i++){
      const picture = document.createElement('picture');
      const source = document.createElement('source');
      const img = document.createElement('img');
      source.srcset = `https://raw.githubusercontent.com/Diluks93/stage1-tasks/christmas-task/assets/bg/${i}.webp`;
      img.src = `https://raw.githubusercontent.com/Diluks93/stage1-tasks/christmas-task/assets/bg/${i}.webp`;
      if(i === 1) {
        img.className = 'img img__background active';
      } else {
        img.className = 'img img__background';
      }
      img.alt = arrayAltName[i - 1];
      picture.append(source);
      picture.append(img);
      wrap.append(picture);
    }

    componentChooseBackground.append(titleChooseBackground);
    componentChooseBackground.append(wrap);

    return componentChooseBackground;
  }

  changeBackground(element: HTMLElement) {
    const backgrounds = element.querySelector('.backgrounds') as HTMLElement;
    const mainTree = element.querySelector('.main-tree') as HTMLElement;
    backgrounds.addEventListener('click', (e: Event) => {
      backgrounds.querySelectorAll('.img__background').forEach(child => {
        child.classList.remove('active');
      });
      (e.target as HTMLElement).classList.add('active');
      const chooseBackground = this.getImg(e.target as HTMLImageElement);
      mainTree.style.backgroundImage = `url(${chooseBackground})`
    })
  }

  buildSectionMainTree(element: HTMLElement) {
    const mainTree = element.querySelector('.main-tree') as HTMLElement;
    const img = document.createElement('img');
    img.className = 'img img__main-tree';
    img.alt = 'christmas-tree';
    img.src = 'https://raw.githubusercontent.com/Diluks93/stage1-tasks/christmas-task/assets/tree/1.webp';
    mainTree.append(img);
  }

  changeChristmasTree(element: HTMLElement) {
    const christmasTrees = element.querySelector('.trees') as HTMLElement;
    christmasTrees.addEventListener('click', (e: Event) => {
      const mainTree = element.querySelector('.main-tree') as HTMLElement;
      christmasTrees.querySelectorAll('.img__tree').forEach(child => {
        child.classList.remove('active');
      });
      (e.target as HTMLElement).classList.add('active');
      const chooseImg = this.getImg(e.target as HTMLImageElement);
      const img = document.createElement('img');
      img.className = 'img img__main-tree';
      img.alt = 'christmas-tree';
      img.src = chooseImg;
      if (mainTree.childElementCount === 0) {
        mainTree.append(img);
      } else {
        mainTree.lastChild?.remove();
        mainTree.append(img);
      }
    })
  }

  getImg(element: HTMLImageElement) {
    return element.src;
  }

  createComponentChooseGarland() {
    const componentChooseGarland = this.createComponentWrapper('choose-garland');
    const titleChooseGarland = this.createComponentTitle(GamePage.textObject.titleComponentChooseGarland, 'title__settings');
    const wrap = this.createComponentWrapper('wrap wrap__row garland');
    const arrayNameColor: Array<string> = ['much', 'yellow', 'blue', 'red', 'green'];
    const divCheckbox = document.createElement('div');
    for(let i = 1; i <= this.QUANTITY_TEMPLATES; i++){
      const divRadio = document.createElement('div');
      divRadio.className = 'radio';
      divRadio.innerHTML = `
        <label class="custom-radio">
          <input type="radio" name="color" id="color-${arrayNameColor[i - 1]}">
          <span class="radio-${arrayNameColor[i - 1]}"></span>
        </label>
      `;
      wrap.append(divRadio);
    }
    divCheckbox.className = 'toggle-button-cover';
    divCheckbox.innerHTML = `
      <div class="button-cover">
        <div class="button r" id="button">
          <input type="checkbox" class="checkbox" />
          <div class="knobs"></div>
          <div class="layer"></div>
        </div>
      </div>
    `;
    wrap.append(divCheckbox);

    componentChooseGarland.append(titleChooseGarland);
    componentChooseGarland.append(wrap);

    return componentChooseGarland;

  }

  protected createComponentWrapper(className: string) {
    const div = document.createElement('div');
    div.className = className;

    return div;
  }

  protected createComponentTitle(text: string, className: string): HTMLHeadingElement {
    const componentTitle: HTMLHeadingElement = document.createElement('h3');
    componentTitle.className = `title ${className}`;
    componentTitle.innerText = text;

    return componentTitle;
  }
}