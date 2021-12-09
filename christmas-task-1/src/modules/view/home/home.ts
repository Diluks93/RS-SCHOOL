import { Pages } from '../../utils/enums';
import Page from '../components/abstract/page';

export default class HomePage extends Page {
  static textObject = {
    titleContent: 'Help your grandmother to decorate Christmas tree',
    buttonContent: 'Let\'s start'
  }

  constructor(id: string){
    super(id)
  }

  protected createHeaderTitle(text: string) {
    const headerTitle = document.createElement('h1');
    headerTitle.className = 'title title__main';
    headerTitle.innerText = text;
    return headerTitle;
  }

  protected createButtonStart(text: string) {
    const buttonStart = document.createElement('a');
    buttonStart.href = `#${Pages.settingsPage}`;
    buttonStart.className = 'btn btn__main';
    buttonStart.innerText = text;
    return buttonStart;
  }

  render() {
    const title = this.createHeaderTitle(HomePage.textObject.titleContent),
      button = this.createButtonStart(HomePage.textObject.buttonContent);
      this.container.append(title);
      this.container.append(button);
    return this.container;
  }
}