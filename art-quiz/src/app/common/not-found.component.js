import { WFMComponent } from '../../framework/index';

class NotFound extends WFMComponent {
  constructor(config) {
    super(config);
  }
}

export const notFound = new NotFound({
  selector: 'not-found',
  template: `
    <div class="error">
      <h2>This pages not found!</h2>
      <a href="#">Back home page!</a>
    </div>
  `,
});
