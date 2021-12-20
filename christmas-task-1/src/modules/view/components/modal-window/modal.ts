import './modal.scss'

export default class Modal {
  protected container;
  static textObject = {
    buttonContent: 'OK'
  }

  constructor(id: string, className: string) {
    this.container = document.createElement('div');
    this.container.id = id;
    this.container.className = className;
  }

  render(text: string): HTMLElement {
    const title = this.createHeaderTitle(text),
      button = this.createButtonStart();
    this.container.append(title);
    this.container.append(button);
    this.removeModal();

    return this.container;
  }

  removeModal(){
    const el = this.container.querySelector('.btn__modal');
    el?.addEventListener('click', (e) => {
      e.preventDefault();
      this.container.remove();
      this.container.lastChild?.remove();
      this.container.lastChild?.remove();
    })    
  }

  private createHeaderTitle(text: string) {
    const headerTitle = document.createElement('h3');
    headerTitle.className = 'title title__modal';
    headerTitle.innerText = text;

    return headerTitle;
  }

  private createButtonStart(text = Modal.textObject.buttonContent): HTMLAnchorElement {
    const buttonStart = document.createElement('a');
    buttonStart.className = 'btn btn__modal';
    buttonStart.innerText = text;

    return buttonStart;
  }

}