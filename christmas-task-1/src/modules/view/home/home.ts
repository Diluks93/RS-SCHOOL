import { Pages } from '../../models/enums';
import Page from '../components/abstract/page';

export default class HomePage extends Page {
  static textObject = {
    titleContent: 'Help your grandmother to decorate Christmas tree',
    buttonContent: 'Let\'s start'
  }

  constructor(id: string){
    super(id);
  }
  
  render() {
    const wrapper = this.createWrapper();
    this.container.append(wrapper);

    return this.container;
  }
  
  protected createHeaderTitle(text: string) {
    const headerTitle = document.createElement('h1');
    headerTitle.className = 'title title__main';
    headerTitle.innerText = text;

    return headerTitle;
  }

  protected createButtonStart(text: string): HTMLAnchorElement {
    const buttonStart = document.createElement('a');
    buttonStart.href = `#${Pages.settingsPage}`;
    buttonStart.className = 'btn btn__main';
    buttonStart.innerText = text;

    return buttonStart;
  }

  protected createWrapper(): HTMLElement {
    const div = document.createElement('div'),
      title = this.createHeaderTitle(HomePage.textObject.titleContent),
      button = this.createButtonStart(HomePage.textObject.buttonContent);
    div.append(title);
    div.append(button);

    return div;
  }

}