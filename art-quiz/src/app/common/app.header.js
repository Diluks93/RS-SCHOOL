import { WFMComponent } from '../../framework/index';

class AppHeader extends WFMComponent {
  constructor(config) {
    super(config)
  }

  /* events(){
    return {
      'click #setting': 'onShowSetting'
    }
  }

  onShowSetting(){
    const SETTING = document.querySelector('.setting');

    SETTING.classList.add('visible')
  } */
}

export const appHeader = new AppHeader({
  selector: 'header',
  template: `
    <a class="btn btn__header" href="#setting" id="setting">Settings</a>
  `,
});

