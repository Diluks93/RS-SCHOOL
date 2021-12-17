import './block.scss';

export default abstract class Block {
  protected container: HTMLElement;

  constructor(tagName: string, className: string) {
    this.container = document.createElement(tagName);
    this.container.className = className;
  }
  
  render(): HTMLElement {
    this.renderPageButtons();

    return this.container;
  }
  
  protected renderPageButtons(): void {
    console.log('Component working!');
  }

}