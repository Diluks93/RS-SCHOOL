import Page from '../components/abstract/page';
import './game.scss'

export default class GamePage extends Page {
  static textObject = {
    titleContent: 'Happy New Year!!!',
  }

  constructor(id: string) {
    super(id);
  }

  render() {
    const title = this.createHeaderTitle(GamePage.textObject.titleContent);
    this.container.append(title);
    this.createTemplate();
    
    return this.container;
  }

  protected createTemplate() {
    const xhr: XMLHttpRequest = new XMLHttpRequest();
    const main = document.createElement('main');
    xhr.open('GET', 'game.html');
    xhr.onload = (): void => {
      main.innerHTML = xhr.response;
      main.className = 'christmas-tree';
      this.container.append(main);
    }
    xhr.send();
  }
  
  protected createHeaderTitle(text: string) {
    const headerTitle = document.createElement('h2');
    headerTitle.className = 'title title__game';
    headerTitle.innerText = text;

    return headerTitle;
  }

}