import Loader from '../../loader/loader';
import { DataToys } from '../../models/interfaces';
import Page from '../components/abstract/page';
import { Snowflake } from '../components/snowflake/snowflake';
import './game.scss'

export default class GamePage extends Page {
  private static url = 'https://raw.githubusercontent.com/Diluks93/stage1-tasks/christmas-task/data.json';
  private loader: Loader;
  private isSnowMove = true;
  static textObject = {
    titlePage: '❄️ New Year is Coming! ❄️',
    titleComponentChooseTree: 'Choose Christmas tree',
    titleComponentChooseBackground: 'Choose background',
    titleComponentChooseGarland: 'Choose garland\'s lighting',
    titleComponentToys: 'Toys',
    titleComponentDecorate: 'You decorated'
  }
  QUANTITY_TREES = 6;
  QUANTITY_BACKGROUNDS = 10;
  QUANTITY_TEMPLATES = 5;
  QUANTITY_LIGHTS = 60;
  MAX_QUANTITY_TOYS = 20;
  isPlay = false;
  audio = new Audio('https://raw.githubusercontent.com/Diluks93/stage1-tasks/christmas-task/assets/audio/audio.mp3')

  constructor(id: string) {
    super(id);
    this.loader = new Loader(GamePage.url);
  }

  render() {
    const title = this.createHeaderTitle(GamePage.textObject.titlePage);
    const main = this.createMainComponent();
    const timer = this.createTimer()
    this.container.append(title);
    this.container.append(main);
    main.append(timer);
    this.showBeforeNewYear(main);

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
    this.showGarland(main);
    this.changeColorGarland(main);
    this.buildSectionResult(main);
    
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
    img.useMap = '#tree';
    mainTree.innerHTML = `
    <map name = 'tree'>
      <area coords = '251,0,211,55,193,82,157,132,107,220,73,353,19,439,44,488,3,550,38,607,70,636,119,685,197,705,267,691,314,700,354,689,432,665,459,623,468,592,490,551,452,451,426,351,395,223,355,140,307,66' shape = 'poly'>
    </map>
    `
    mainTree.prepend(img);
  }

  async buildSectionResult(element: HTMLElement) {
    const resultComponent = element.querySelector('.result') as HTMLElement;
    const toys = await this.createComponentToys();
    const buttonSafeTree = this.createButtonSafeTree();
    const componentYouDecorate = this.createComponentYouDecorate();

    resultComponent.append(toys);
    resultComponent.append(componentYouDecorate);
    resultComponent.append(buttonSafeTree);

    this.getPage(resultComponent);
    this.setPage(resultComponent)
    //this.dragAndDropToys(toys);
    
    return resultComponent;
  }

  showGarland(element: HTMLElement) {
    const checkboxGarland: HTMLInputElement = element.querySelector('.checkbox') as HTMLInputElement;
    const mainTree = element.querySelector('.main-tree') as HTMLElement;
    const ul = this.createGarland();
    checkboxGarland.addEventListener('click', () => {
      if(checkboxGarland.checked) mainTree.append(ul);
      else ul.remove()
    })

  }

  createGarland(){
    const ul = document.createElement('ul');
    ul.className = 'lights';

    for(let i = 0; i < this.QUANTITY_LIGHTS; i++) {
      const li = document.createElement('li');
      let top, left = 0
      switch(i) {
        case(0): top = 3; left = 55;
          break;

        case(1): top = 10; left = 42;
          break;
        case(2): top = 12; left = 48.5;
          break;
        case(3): top = 10; left = 55;
          break;

        case(4): top = 18; left = 38;
          break;
        case(5): top = 20; left = 45;
          break;
        case(6): top = 20; left = 52;
          break;
        case(7): top = 18; left = 58;
          break;

        case(8): top = 26; left = 34;
          break;
        case(9): top = 28; left = 41;
          break;
        case(10): top = 30; left = 49;
          break;
        case(11): top = 28; left = 57;
          break;
        case(12): top = 26; left = 63;
          break;

        case(13): top = 32; left = 33;
          break;
        case(14): top = 36; left = 40;
          break;
        case(15): top = 38; left = 47;
          break;
        case(16): top = 38; left = 54;
          break;
        case(17): top = 36; left = 60;
          break;
        case(18): top = 32; left = 67;
          break;

        case(19): top = 40; left = 29;
          break;
        case(20): top = 44; left = 37;
          break;
        case(21): top = 47; left = 45;
          break;
        case(22): top = 47; left = 55;
          break;
        case(23): top = 44; left = 63;
          break;
        case(24): top = 40; left = 71;
          break;

        case(25): top = 47; left = 23;
          break;
        case(26): top = 51; left = 32;
          break;
        case(27): top = 55; left = 41;
          break;
        case(28): top = 57; left = 50;
          break;
        case(29): top = 55; left = 59;
          break;
        case(30): top = 51; left = 68;
          break;
        case(31): top = 47; left = 77;
          break;

        case(32): top = 55; left = 19;
          break; 
        case(33): top = 59; left = 28;
          break; 
        case(34): top = 63; left = 37;
          break; 
        case(35): top = 65; left = 46;
          break; 
        case(36): top = 65; left = 55;
          break; 
        case(37): top = 63; left = 64;
          break; 
        case(38): top = 59; left = 73;
          break; 
        case(39): top = 55; left = 82;
          break; 

        case(40): top = 63; left = 10;
          break; 
        case(41): top = 67; left = 19;
          break; 
        case(42): top = 71; left = 28;
          break; 
        case(43): top = 73; left = 37;
          break; 
        case(44): top = 75; left = 46;
          break; 
        case(45): top = 75; left = 55;
          break; 
        case(46): top = 73; left = 64;
          break; 
        case(47): top = 71; left = 73;
          break; 
        case(48): top = 67; left = 82;
          break; 
        case(49): top = 63; left = 91;
          break;

        case(50): top = 75; left = 9;
          break; 
        case(51): top = 79; left = 18;
          break; 
        case(52): top = 83; left = 27;
          break; 
        case(53): top = 87; left = 36;
          break; 
        case(54): top = 89; left = 45;
          break; 
        case(55): top = 89; left = 54;
          break; 
        case(56): top = 87; left = 65;
          break; 
        case(57): top = 83; left = 74;
          break; 
        case(58): top = 79; left = 83;
          break; 
        case(59): top = 75; left = 91;
          break;         
      }
      li.style.top = `${top}%`;
      li.style.left = `${left}%`;
      ul.append(li);
    }

    return ul;
  }

  changeColorGarland(element: HTMLElement) {
    const radioColors: NodeListOf<HTMLInputElement> = element.querySelectorAll('.radio') as NodeListOf<HTMLInputElement>;
    const style = document.createElement('style');
    radioColors.forEach(radio => {
      radio.addEventListener('click', () => {
        switch(radio.dataset.color){
          case('much'): style.innerText = `*{
            --green: rgba(0,247,165,1);
            --dark-green: rgba(0,247,165,0.2);
            --light-green: rgba(0,247,165,0.4);
            --blue: rgba(0,255,255,1);
            --dark-blue: rgba(0,255,255,0.5);
            --light-blue: rgba(0,255,255,0.4);
            --red: rgba(247,0,148,1);
            --dark-red: rgba(247,0,148,0.2);
            --light-red: rgba(247,0,148,0.4);
          }`;
          break;
          case('yellow'): style.innerText = `*{
            --green: rgba(202,247,0,1);
            --dark-green: rgba(202,247,0,0.2);
            --light-green: rgba(202,247,0,0.4);
            --blue: rgba(202,247,0,1);
            --dark-blue: rgba(202,247,0,0.2);
            --light-blue: rgba(202,247,0,0.4);
            --red: rgba(202,247,0,1);
            --dark-red: rgba(202,247,0,0.2);
            --light-red: rgba(202,247,0,0.4);
          }`;
          break;
          case('blue'): style.innerText = `*{
            --green: rgba(0,255,255,1);
            --dark-green: rgba(0,255,255,0.5);
            --light-green: rgba(0,255,255,0.4);
            --blue: rgba(0,255,255,1);
            --dark-blue: rgba(0,255,255,0.5);
            --light-blue: rgba(0,255,255,0.4);
            --red: rgba(0,255,255,1);
            --dark-red: rgba(0,255,255,0.5);
            --light-red: rgba(0,255,255,0.4);
          }`;
          break;
          case('red'): style.innerText = `*{
            --green: rgba(247,0,148,1);
            --dark-green: rgba(247,0,148,0.2);
            --light-green: rgba(247,0,148,0.4);
            --blue: rgba(247,0,148,1);
            --dark-blue: rgba(247,0,148,0.2);
            --light-blue: rgba(247,0,148,0.4);
            --red: rgba(247,0,148,1);
            --dark-red: rgba(247,0,148,0.2);
            --light-red: rgba(247,0,148,0.4);
          }`;
          break;
          case('green'): style.innerText = `*{
            --green: rgba(0,247,165,1);
            --dark-green: rgba(0,247,165,0.2);
            --light-green: rgba(0,247,165,0.4);
            --blue: rgba(0,247,165,1);
            --dark-blue: rgba(0,247,165,0.2);
            --light-blue: rgba(0,247,165,0.4);
            --red: rgba(0,247,165,1);
            --dark-red: rgba(0,247,165,0.2);
            --light-red: rgba(0,247,165,0.4);
          }`;
          break;
        }
        document.head.append(style);
      })
    })
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
      img.useMap = '#tree';
      if (mainTree.childElementCount === 0) {
        mainTree.prepend(img);
      } else {
        mainTree.firstChild?.remove();
        mainTree.prepend(img);
      }
    })
  }

  getImg(element: HTMLImageElement) {
    return element.src;
  }

  getDataImage(){
    const dataImages: DataToys[] = JSON.parse(localStorage.getItem('dataImage') as string);
    return dataImages || [];
  }

  async createComponentToys(){
    const toys = this.createComponentWrapper('toys__component');
    const tittleComponentToys = this.createComponentTitle(GamePage.textObject.titleComponentToys, 'title__settings');
    const wrap = this.createComponentWrapper('wrap wrap__row toys');
    const dataImages: DataToys[] = this.getDataImage();
    if(dataImages.length != 0) {
      for(let i = 0; i < dataImages.length; i++){
        const toy = this.createComponentWrapper('toy');
        const quantityToy = this.createComponentWrapper('quantity');
        quantityToy.innerText = `${dataImages[i].count}`;
        for(let j = 0;  j <= dataImages[i].count; j++){
          const imgToy: HTMLImageElement = document.createElement('img');
          imgToy.src = `https://raw.githubusercontent.com/Diluks93/stage1-tasks/christmas-task/assets/toys/${i + 1}.webp`;
          imgToy.className = 'img img__toy';
          imgToy.alt = 'toy';
          imgToy.draggable = true;
          if(dataImages[i].unique){
            toy.append(imgToy);
          }
        }
        if(dataImages[i].unique){
          toy.append(quantityToy);
          wrap.append(toy);
        } 
      }
    } else {
      const srcData: Awaited<DataToys>[] = await this.loader.load();
      for(let i = 0; i < this.MAX_QUANTITY_TOYS; i++){
        const toy = this.createComponentWrapper('toy');
        const quantityToy = this.createComponentWrapper('quantity');
        quantityToy.innerText = `${srcData[i].count}`;
        for(let j = 1; j <= srcData[i].count; j++){
          const imgToy: HTMLImageElement = document.createElement('img');
          imgToy.src = `https://raw.githubusercontent.com/Diluks93/stage1-tasks/christmas-task/assets/toys/${i + 1}.webp`;
          imgToy.className = 'img img__toy';
          imgToy.alt = 'toy';
          imgToy.draggable = true;
          toy.append(imgToy);
        }
        toy.append(quantityToy);
        wrap.append(toy);
      }
    }

    toys.append(tittleComponentToys);
    toys.append(wrap);

    this.dragAndDropToys(toys);

    return toys;
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
      divRadio.dataset.color = `${arrayNameColor[i - 1]}`
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

  dragAndDropToys(element: HTMLElement) {
    const toys: HTMLElement = element.querySelector('.toys') as HTMLElement;
    const drop: HTMLElement = document.body.querySelector('map') as HTMLElement;
    let dragging = false;
    let startX = 0;
    let startY = 0;
    let currentQuantity = 0;

    toys?.addEventListener('dragstart', (e) =>  {
      dragging = true;
      const style = window.getComputedStyle(e.target as HTMLElement);
      const translateX = parseInt(style.getPropertyValue('--x'));
      const translateY = parseInt(style.getPropertyValue('--y'));
      startX = (e as MouseEvent).pageX - translateX;
      startY = (e as MouseEvent).pageY - translateY;
      currentQuantity = +((e.target as HTMLElement)?.parentElement?.lastChild as HTMLElement)?.innerText;
    })
    
    drop.addEventListener('dragover', (e) => {
      e.preventDefault();
    })
    
    drop.addEventListener('drop', (e)=> {
      e.preventDefault()
      toys.addEventListener('dragend', (e) => {
        dragging = false;
        (e.target as HTMLElement).style.setProperty('--x', `${(e as MouseEvent).pageX - startX}px`);
        (e.target as HTMLElement).style.setProperty('--y', `${(e as MouseEvent).pageY - startY}px`);
        const changeQuantity = currentQuantity ? currentQuantity - 1 : 0;
        ((e.target as HTMLElement).parentElement?.lastChild as HTMLElement).innerText = `${changeQuantity}`;
      })
    })
  }

  protected createComponentTitle(text: string, className: string): HTMLHeadingElement {
    const componentTitle: HTMLHeadingElement = document.createElement('h3');
    componentTitle.className = `title ${className}`;
    componentTitle.innerText = text;

    return componentTitle;
  }

  createButtonSafeTree(){
    const buttonSafeTree = document.createElement('a');
    buttonSafeTree.className = 'btn btn__articles';
    buttonSafeTree.innerText = 'Safe Tree';

    return buttonSafeTree;
  }

  createComponentYouDecorate(){
    const componentYouDecorate = this.createComponentWrapper('decorate');
    const titleYouDecorate = this.createComponentTitle(GamePage.textObject.titleComponentDecorate, 'title__settings');
    const wrap = this.createComponentWrapper('wrap wrap__row decorate-trees');
    componentYouDecorate.append(titleYouDecorate);
    componentYouDecorate.append(wrap);

    return componentYouDecorate;
  }

  getPage(element: HTMLElement) {
    const buttonSafeTree = element.querySelector('.btn__articles');
    const componentYouDecorate = element.querySelector('.decorate-trees')
    let counter = 0;
    buttonSafeTree?.addEventListener('click', (e) => {
      e.preventDefault();
      counter++;
      const previewTree = document.body.querySelector('.img__main-tree') as HTMLImageElement;
      const backgroundTree = document.body.querySelector('.main-tree') as HTMLImageElement;
      const sourceBackground = window.getComputedStyle(backgroundTree).getPropertyValue('background-image');
      const buttonDecorateTree = this.createComponentWrapper('decorate-tree');
      buttonDecorateTree.dataset.id = `${counter}`;
      const previewImg = document.createElement('img');
      const srcTree = previewTree.src;
      previewImg.className = 'img img__decorate'
      buttonDecorateTree.append(previewImg);
      buttonDecorateTree.style.backgroundImage = sourceBackground;
      previewImg.src = srcTree;
      localStorage.setItem(`html${counter}`, JSON.stringify(document.body.innerHTML));
      componentYouDecorate?.append(buttonDecorateTree);
    })
  }

  setPage(element: HTMLElement){
    const parentPages = element.querySelector('.decorate-trees');
    parentPages?.addEventListener('click', (e) => {
      const index = (e.target as HTMLImageElement).parentElement?.dataset.id;
      document.body.innerHTML = `${JSON.parse(localStorage.getItem(`html${index}`) as string)}`
    })
  }

  createTimer(){
    const timerComponent = this.createComponentWrapper('countdown-container');
    timerComponent.innerHTML = `
      <div class="time">
        <h4 id="days">00</h1>
        <small>days</small>
      </div>
      <div class="time">
        <h4 id="hours">00</h1>
        <small>hours</small>
      </div>
      <div class="time">
        <h4 id="minutes">00</h1>
        <small>minutes</small>
      </div>
      <div class="time">
        <h4 id="seconds">00</h1>
        <small>seconds</small>
      </div>
    `

    return timerComponent;
  }

  showBeforeNewYear(element: HTMLElement){
    const endTime = new Date('December 31 2021 23:59:59');
    const daysEl = element.querySelector('#days') as HTMLElement;
    const hoursEl = element.querySelector('#hours') as HTMLElement;
    const minutesEl = element.querySelector('#minutes') as HTMLElement;
    const secondsEl = element.querySelector('#seconds') as HTMLElement;

    const updateCountdown = () => {
      const startTime = new Date();
      const diff = +endTime - +startTime;
      const days = Math.floor(diff / 1000 / 60 / 60 / 24);
      const hours = Math.floor(diff / 1000 / 60 / 60) % 24;
      const minutes = Math.floor(diff / 1000 / 60) % 60;
      const seconds = Math.floor(diff / 1000) % 60;
      daysEl.innerText = `${days}`;
      hoursEl.innerText = `${hours}`;
      minutesEl.innerText = `${minutes}`;
      secondsEl.innerText = `${seconds}`;
    }

    setInterval(updateCountdown, 1000);
  }
}