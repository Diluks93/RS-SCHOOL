import { DrawNews, DrawSources, PickDrawNews } from '../view/appView';
import AppLoader from './appLoader';
import { Callback } from './loader';

interface ClassAppController {
  getSources(callback: Callback<DrawSources | DrawNews>): void;
  getNews(e: Event, callback: Callback<DrawSources | DrawNews>): void;
}

enum EnumSource {
  item = 'source__item',
  sourceId = 'data-source-id',
  source = 'data-source',
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

  getNews(e: Event, callback: Callback<DrawSources | PickDrawNews>): void {
    let target: HTMLElement = e.target as HTMLElement;
    const newsContainer = e.currentTarget as HTMLElement;

    while (target !== newsContainer) {
      if (target.classList.contains(EnumSource.item)) {
        const sourceId = target.getAttribute(EnumSource.sourceId) as never;
        if (newsContainer.getAttribute(EnumSource.source) !== sourceId) {
          newsContainer.setAttribute(EnumSource.source, sourceId);
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
