import { WFMComponent } from '../../framework/index';

class AppHeader extends WFMComponent {
  constructor(config) {
    super(config)
  }
}

export const appHeader = new AppHeader({
  selector: 'header',
  template: `
    <a class="btn" href="#" id="setting">Settings</a>
  `,
});

