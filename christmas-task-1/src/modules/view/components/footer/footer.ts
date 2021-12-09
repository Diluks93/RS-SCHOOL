import Block from '../abstract/block';

const Buttons: {
  text: string;
  url?: string;
}[] = [
  {
    text: 'Developer: Diluks93',
    url: 'https://github.com/Diluks93'
  },
  {
    text: '2021',
  },
  {
    text: `<img src="https://raw.githubusercontent.com/Diluks93/stage1-tasks/christmas-task/assets/svg/rss.svg" alt="logo course">`,
    url: 'https://rs.school/js/'
  }
]

export default class FooterComponent extends Block {
  constructor(tagName:string, className: string) {
    super(tagName, className)
  }

  renderPageButtons() {
    const pageButtons = document.createElement('ul');
    pageButtons.className = 'items';
    Buttons.forEach((button, ind) => {
      let buttonHTML: HTMLAnchorElement | HTMLTimeElement;
      if(ind === 0 || ind === 2) {
        buttonHTML = document.createElement('a');
        buttonHTML.href = `${button.url}`;
        buttonHTML.setAttribute('target', 'blank');
        (ind === 0)
        ? buttonHTML.innerText = `${button.text}` 
        : buttonHTML.innerHTML = `${button.text}`;
      } else {
        buttonHTML = document.createElement('time');
        buttonHTML.dateTime = buttonHTML.innerText = `${button.text}`;
      } 
      buttonHTML.className = 'item';
      pageButtons.append(buttonHTML);
    })
    this.container.append(pageButtons)
  }
}