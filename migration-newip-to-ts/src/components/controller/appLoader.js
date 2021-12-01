import Loader from './loader';

class AppLoader extends Loader {
  constructor() {
    super('https://newsapi.org/v2/', {
      apiKey: '9725a13c526f4f038a1dc65703a65bac',
    });
  }
}

export default AppLoader;
