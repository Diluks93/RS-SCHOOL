import Page from '../components/abstract/page';

export default class GamePage extends Page {
  static textObject = {
    titleContent: 'Happy New Year!!!',
  }

  constructor(id: string) {
    super(id)
  }

  protected createHeaderTitle(text: string) {
    const headerTitle = document.createElement('h2');
    headerTitle.className = 'title title__game'
    headerTitle.innerText = text;
    return headerTitle;
  }

  render() {
    const title = this.createHeaderTitle(GamePage.textObject.titleContent);
    this.container.append(title);
    return this.container
  }
}