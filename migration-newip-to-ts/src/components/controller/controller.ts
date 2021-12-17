import { EnumSource } from '../utils/enums';
import { ClassAppController, DrawNews, DrawSources } from '../utils/interfaces';
import { Callback, PickDrawNews } from '../utils/types';
import AppLoader from './appLoader';

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
    let buttonNews: HTMLElement = e.target as HTMLElement;
    const newsContainer = e.currentTarget as HTMLElement;

    while (buttonNews !== newsContainer) {
      if (buttonNews.classList.contains(EnumSource.item)) {
        const sourceId = buttonNews.getAttribute(EnumSource.sourceId) as string;
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
      buttonNews = buttonNews.parentNode as HTMLElement;
    }
  }
}

export default AppController;
