import { ErrorType } from '../../models/enums';
import Page from '../components/abstract/page';

export default class ErrorPage extends Page {
  static textObject = {
    titleContent: 'Error! This page was not found',
  };

  constructor(id: string, private errorType: ErrorType | string) {
    super(id);
  }

  render() {
    const title = this.createHeaderTitle(ErrorPage.textObject.titleContent);
    this.container.append(title);

    return this.container;
  }
}