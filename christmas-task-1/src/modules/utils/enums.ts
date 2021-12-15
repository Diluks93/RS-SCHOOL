export const enum Pages {
  homePage = 'home-page',
  settingsPage = 'settings-page',
  gamePage = 'game-page',
  currentPage = 'current-page',
}

export const enum ErrorType {
  error = 404,
}

export const enum ClassNameWrap {
  classSearch = 'wrap wrap__row comp__search',
  classSort = 'wrap comp__sort',
  classCategories = 'wrap comp__categories',
  classType = 'wrap comp__type',
  classRange = 'wrap comp__range',
  classColors = 'wrap comp__colors',
  classSize = 'wrap wrap__row comp__size',
  classFavorite = 'wrap comp__favorite',
  classButtons = 'wrap wrap__row comp__buttons',
}

export const enum TemplateArticle {
  componentSearch = `
    <a href="" class="comp__search_link">
      <img class="img img__button" src="https://raw.githubusercontent.com/Diluks93/stage1-tasks/christmas-task/assets/svg/audio.svg" alt="mute button">
    </a>
    <a href="" class="comp__search_link">
      <img class="img img__button" src="https://raw.githubusercontent.com/Diluks93/stage1-tasks/christmas-task/assets/svg/snow.svg" alt="show snow button">
    </a>
    <div class="search">
      <form>
        <input type="search" placeholder="Search..." autocomplete="off" autofocus>
        <button type="submit"></button>
      </form>
    </div>
    `,
  componentSort = `
    <label class="title title__label" for="sort">Sort by:</label>
      <input list="sortBy" id="sort" name="sort" class="sort" autocomplete="off" placeholder="Sort by">
      <datalist id="sortBy" role="listbox">
          <option value="of A - Z">
          <option value="of Z - A">
          <option value="of years in ascending order">
          <option value="of years in descending  order">
      </datalist> 
  `,
  componentCategories = `
    <h3 class="title title__article">Categories</h3>
    <input type="checkbox" name="select-all" class="custom-checkbox" id="select-all" checked>
    <label class="descr" for="select-all">Select all</label>
  `,
  componentType = `
    <h3 class="title title__article">Types</h3>
    <div class="wrap wrap__row">
      <figure class="wrapper wrap__col">
        <img src="https://raw.githubusercontent.com/Diluks93/stage1-tasks/christmas-task/assets/svg/bell.svg" alt="bell" class="img img__type">
        <figcaption class="img__descr">Bell</figcaption>
      </figure>
      <figure class="wrapper wrap__col">
        <img src="https://raw.githubusercontent.com/Diluks93/stage1-tasks/christmas-task/assets/svg/ball.svg" alt="ball" class="img img__type">
        <figcaption class="img__descr">Ball</figcaption>
      </figure>
      <figure class="wrapper wrap__col">
        <img src="https://raw.githubusercontent.com/Diluks93/stage1-tasks/christmas-task/assets/svg/pine.svg" alt="pine" class="img img__type">
        <figcaption class="img__descr">Pine</figcaption>
      </figure>
      <figure class="wrapper wrap__col">
        <img src="https://raw.githubusercontent.com/Diluks93/stage1-tasks/christmas-task/assets/svg/snowflake.svg" alt="snowflake" class="img img__type">
        <figcaption class="img__descr">Snowflake</figcaption>
      </figure>
      <figure class="wrapper wrap__col">
        <img src="https://raw.githubusercontent.com/Diluks93/stage1-tasks/christmas-task/assets/svg/toy.svg" alt="figure" class="img img__type">
        <figcaption class="img__descr">Figure</figcaption>
      </figure>
    </div>
  `,
  componentRange = `
    <div class="count">
      <label class="title title__label" for="count">Number of instances</label>
      <div id="count"></div>
      <div class="wrap wrap__row">
        <span id="slider-range-value-count-lower"></span>
        <span id="slider-range-value-count-upper"></span>
      </div>
    </div>
    <div class="year">
      <label class="title title__label" for="year">Years</label>
      <div id="year"></div>
      <div class="wrap wrap__row">
        <span id="slider-range-value-year-lower"></span>
        <span id="slider-range-value-year-upper"></span>
      </div>
    </div>
  `,
  componentColors = `
    <label class="title title__label" for="color">Colors</label>
    <div class="wrap wrap__row">
      <input type="color" name="yellow" id="color-y" class="color" value="#ffff00">
      <input type="color" name="white" id="color-w" class="color" value="#000000">
      <input type="color" name="red" id="color-r" class="color" value="#ff0000">
      <input type="color" name="blue" id="color-b" class="color" value="#0000ff">
      <input type="color" name="green" id="color-g" class="color" value="#00ff00">
  `,
  componentSize = `
    <label class="title title__label">Size</label>
    <div>
      <input type="checkbox" name="size-b" id="size-b" class="custom-checkbox">
      <label class="descr" for="size-b">Big</label>
    </div>
    <div>
      <input type="checkbox" name="size-m" id="size-m" class="custom-checkbox">
      <label class="descr" for="size-m">Medium</label>
    </div>
    <div>
      <input type="checkbox" name="size-s" id="size-s" class="custom-checkbox">
      <label class="descr" for="size-s">Small</label>
    </div>
  `,
  componentFavorite = `
    <input type="checkbox" name="favorite" id="favorite" class="custom-checkbox">
    <label class="descr" for="favorite">Only favorite</label>
  `,
  componentButtons = `
    <button class="btn btn__articles">Submit</button>
    <button class="btn btn__articles">Reset</button>
  `
}