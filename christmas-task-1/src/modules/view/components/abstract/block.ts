import './block.scss'

export default abstract class Block {
  protected container: HTMLElement;

  constructor(tagName: string, className: string) {
    this.container = document.createElement(tagName);
    this.container.className = className;
  }

  protected renderPageButtons(): void {}

  render(): HTMLElement {
    this.renderPageButtons()
    return this.container;
  }
}