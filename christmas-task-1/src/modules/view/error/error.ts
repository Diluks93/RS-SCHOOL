import { ErrorType } from '../../utils/enums';
import Page from '../components/abstract/page';
import './error.scss'

export default class ErrorPage extends Page {
  private errorType: ErrorType | string;

  static textObject = {
    titleContent: 'Error! This page was not found',
  };

  constructor(id: string, errorType: ErrorType | string) {
    super(id);
    this.errorType = errorType;
  }

  render() {
    const title = this.createHeaderTitle(ErrorPage.textObject.titleContent);
    this.container.append(title)
    return this.container;
  }
}