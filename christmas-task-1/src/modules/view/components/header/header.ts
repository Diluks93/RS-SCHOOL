import { Pages } from '../../../models/enums';
import Block from '../abstract/block';

const Buttons: { 
  id: Pages;
  text: string;
}[] = [
  {
    id: Pages.homePage,
    text: `<img src='https://raw.githubusercontent.com/Diluks93/stage1-tasks/christmas-task/assets/svg/tree.svg' alt='logo'>`
  },
  {
    id: Pages.homePage,
    text: 'Home',
  },
  {
    id: Pages.settingsPage,
    text: 'Choose toys',
  },
  {
    id: Pages.gamePage,
    text: 'Game',
  }
]

export default class HeaderComponent extends Block {
  constructor(tagName: string, className: string) {
    super(tagName, className);
  }

  renderPageButtons() {
    const pageButtons = document.createElement('nav');
    const div = document.createElement('div');
    div.className = 'unique'
    pageButtons.className = 'nav items';
    Buttons.forEach((button, ind) => {
      const buttonHTML = document.createElement('a');
      buttonHTML.href = `#${button.id}`;
      buttonHTML.className = 'item';
      ind === 0 ? buttonHTML.innerHTML = `${button.text}` : buttonHTML.innerText = `${button.text}`;
      pageButtons.append(buttonHTML);
    })
    this.container.append(pageButtons);
    this.container.append(div);
  }
}