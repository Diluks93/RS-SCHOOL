import { WFMComponent } from '../../framework/index';

class SettingPageComponent extends WFMComponent {
  constructor(config) {
    super(config);
  }
}

export const settingPageComponent = new SettingPageComponent({
  selector: 'app-setting-page',
  template: `
    <h1 class="title">
      <a href="#">
        <img class="img-title logo" src="./assets/svg/logo.svg" alt="logo">
      </a>
    </h1>
    <h2 class="subtitle">Settings</h2>
    <section class="home-page">
      <div class="wrapper">
        <div class="cart setting__img" id="artists">
          <img class="img" src="../assets/svg/volume-on.svg" alt="artists">
          <input value="20" type="range" min="0" max="100" step="1">
          <div class="description setting__descr">Volume</div>
        </div>
        <div class="cart setting__img" id="pictures">
          <img class="img" src="../assets/svg/timer-picture.svg" alt="pictures">
          <div>
            <input type="checkbox" id="checkbox">
            <label for="checkbox">On/Off</label>
            <div class="number">
              <button class="number-minus" type="button" onclick="this.nextElementSibling.stepDown();">-</button>
              <input type="number" min="0" max="30" step="5" value="20" readonly>
              <button class="number-plus" type="button" onclick="this.previousElementSibling.stepUp();">+</button>
            </div>
          </div>
          <div class="description setting__descr">Time game</div>
        </div>
      </div>
    </section>
  `,
});
