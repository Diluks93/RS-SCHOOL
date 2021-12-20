export const enum Pages {
  homePage = 'home-page',
  settingsPage = 'settings-page',
  gamePage = 'game-page',
  currentPage = 'current-page',
}

export const enum ErrorType {
  error = 404,
}

export const enum SortName {
  noSorted = 'not-sorted',
  nameMax = 'sort-name-max',
  nameMin = 'sort-name-min',
  yearMax = 'sort-year-max',
  yearMin = 'sort-year-min'
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
    <a href="" class="comp__search_link" id="sound">
      <img class="img img__button" src="https://raw.githubusercontent.com/Diluks93/stage1-tasks/christmas-task/assets/svg/audio.svg" alt="mute button">
    </a>
    <a href="" class="comp__search_link" id="snowflake">
      <img class="img img__button" src="https://raw.githubusercontent.com/Diluks93/stage1-tasks/christmas-task/assets/svg/snow.svg" alt="show snow button">
    </a>
    <div class="search">
      <form>
        <input type="search" placeholder="Search by toy name..." autocomplete="off" id="search" autofocus>
        <button type="submit" class="button"></button>
      </form>
    </div>
  `,
  componentSort = `
    <label class="title title__label" for="sort">Sort by:</label>
    <select id="sort" class="sort">
        <option value="not-sorted">No sorted</option>
        <option value="sort-name-max">Name in ascending order</option>
        <option value="sort-name-min">Name in descending order</option>
        <option value="sort-year-max">Year in ascending order</option>
        <option value="sort-year-min">Year in descending order</option>
    </select>
  `,
  componentCategories = `
    <h3 class="title title__article">Categories</h3>
    <input type="checkbox" name="select-all" class="custom-checkbox" id="select-all" data-filter="select-all">
    <label class="descr" for="select-all">Show all</label>
  `,
  componentType = `
    <h3 class="title title__article">Types</h3>
    <div class="wrap wrap__row type">
      <figure class="wrapper wrap__col" data-filter="bell">
        <img src="https://raw.githubusercontent.com/Diluks93/stage1-tasks/christmas-task/assets/svg/bell.svg" alt="bell" class="img img__type">
        <figcaption class="img__descr">Bell</figcaption>
      </figure>
      <figure class="wrapper wrap__col" data-filter="ball">
        <img src="https://raw.githubusercontent.com/Diluks93/stage1-tasks/christmas-task/assets/svg/ball.svg" alt="ball" class="img img__type">
        <figcaption class="img__descr">Ball</figcaption>
      </figure>
      <figure class="wrapper wrap__col" data-filter="cone">
        <img src="https://raw.githubusercontent.com/Diluks93/stage1-tasks/christmas-task/assets/svg/pine.svg" alt="cone" class="img img__type">
        <figcaption class="img__descr">Pine</figcaption>
      </figure>
      <figure class="wrapper wrap__col" data-filter="snowflake">
        <img src="https://raw.githubusercontent.com/Diluks93/stage1-tasks/christmas-task/assets/svg/snowflake.svg" alt="snowflake" class="img img__type">
        <figcaption class="img__descr">Snowflake</figcaption>
      </figure>
      <figure class="wrapper wrap__col" data-filter="figure">
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
      <div>
        <input type="checkbox" name="color-yellow" id="color-yellow" class="custom-checkbox yellow" data-filter="yellow">
        <label for="color-yellow"></label>
      </div>
      <div>
        <input type="checkbox" name="color-white" id="color-white" class="custom-checkbox white" data-filter="white">
        <label for="color-white"></label>
      </div>
      <div>
        <input type="checkbox" name="color-red" id="color-red" class="custom-checkbox red" data-filter="red">
        <label for="color-red"></label>
      </div>
      <div>
        <input type="checkbox" name="color-blue" id="color-blue" class="custom-checkbox blue" data-filter="blue">
        <label for="color-blue"></label>
      </div>
      <div>
        <input type="checkbox" name="color-green" id="color-green" class="custom-checkbox green" data-filter="green">
        <label for="color-green"></label>
      </div>
    </div>
  `,
  componentSize = `
    <label class="title title__label">Size</label>
    <div class="wrap wrap__row size">
      <div class="size size__item">
        <input type="checkbox" name="size-big" id="size-big" class="custom-checkbox" data-filter="big">
        <label class="descr" for="size-big">Big</label>
      </div>
      <div class="size size__item">
        <input type="checkbox" name="size-medium" id="size-medium" class="custom-checkbox" data-filter="medium">
        <label class="descr" for="size-medium">Medium</label>
      </div>
      <div class="size size__item">
        <input type="checkbox" name="size-small" id="size-small" class="custom-checkbox" data-filter="small">
        <label class="descr" for="size-small">Small</label>
      </div>
    </div>
  `,
  componentFavorite = `
    <input type="checkbox" name="favorite" id="favorite" class="custom-checkbox favorite" data-filter="favorite">
    <label class="descr" for="favorite">Only favorite</label>
  `,
  componentButtons = `
    <button class="btn btn__articles" id="safe">Safe</button>
    <button class="btn btn__articles" id="reset">Reset</button>
  `
}