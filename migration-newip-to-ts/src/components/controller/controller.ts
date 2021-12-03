import { DrawNews, DrawSources } from '../view/appView';
import AppLoader from './appLoader';
import { Callback } from './loader';

interface ClassAppController {
  getSources(callback: Callback<DrawSources | DrawNews>): void;
  getNews(e: Event, callback: Callback<DrawSources | DrawNews>): void;
}
class AppController extends AppLoader implements ClassAppController {
  getSources(callback: Callback<DrawSources | DrawNews>): void {
    super.getResp(
      {
        endpoint: 'sources',
      },
      callback
    );
  }

  getNews(e: Event, callback: Callback<DrawSources | DrawNews>): void {
    let target: HTMLElement = e.target as HTMLElement;
    const newsContainer = e.currentTarget as HTMLElement;

    while (target !== newsContainer) {
      if (target.classList.contains('source__item')) {
        const sourceId = target.getAttribute('data-source-id') as never;
        if (newsContainer.getAttribute('data-source') !== sourceId) {
          newsContainer.setAttribute('data-source', sourceId);
          super.getResp(
            {
              endpoint: 'everything',
              options: {
                sources: sourceId,
              },
            },
            callback
          );
        }
        return;
      }
      target = target.parentNode as HTMLElement;
    }
  }
}

export default AppController;
