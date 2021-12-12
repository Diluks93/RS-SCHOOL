import { TextObject } from '../../../utils/interfaces';

export default abstract class Page {
  protected container: HTMLElement;
  static textObject: TextObject = {
    titleContent: '',
    buttonContent: ''
  };

  constructor(id: string) {
    this.container = document.createElement('div');
    this.container.id = id;
  }

  protected createHeaderTitle(text: string): string | HTMLHeadElement {
    return text;
  }

  render(): HTMLHeadElement {
    return this.container;
  }
}