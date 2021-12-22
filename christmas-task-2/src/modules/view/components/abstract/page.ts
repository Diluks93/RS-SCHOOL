export default abstract class Page {
  protected container: HTMLElement;

  constructor(id: string) {
    this.container = document.createElement('div');
    this.container.id = id;
  }

  render(): HTMLHeadElement | Promise<HTMLElement> {

    return this.container;
  }
  
  protected createHeaderTitle(text: string): string | HTMLHeadElement {

    return text;
  }

}