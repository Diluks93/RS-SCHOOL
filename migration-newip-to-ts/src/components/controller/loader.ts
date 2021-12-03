import { DrawNews, DrawSources } from '../view/appView';

export type Options = {
  apiKey?: string | undefined;
  sources?: string;
};

export type GetResp = {
  endpoint: string;
  options?: Record<string, never>;
};

export type Callback<T> = (data: T) => void;

interface ClassLoader {
  getResp(firstArgument: GetResp, callback: Callback<DrawSources | DrawNews>): void;
  errorHandler(res: Response): Response;
  makeUrl(options: Options, endpoint: GetResp['endpoint']): string;
  load(method: string, endpoint: GetResp['endpoint'], callback: Callback<DrawSources | DrawNews>): void;
}
class Loader implements ClassLoader {
  constructor(private baseLink: string, protected options: Options) {
    this.baseLink = baseLink;
    this.options = options;
  }

  getResp(
    { endpoint, options = {} }: GetResp,
    callback: Callback<DrawSources | DrawNews> = () => {
      console.error('No callback for GET response');
    }
  ): void {
    this.load('GET', endpoint, callback, options);
  }

  errorHandler(res: Response): Response {
    if (!res.ok) {
      if (res.status === 401 || res.status === 404)
        console.log(`Sorry, but there is ${res.status} error: ${res.statusText}`);
      throw Error(res.statusText);
    }

    return res;
  }

  makeUrl(options: Options, endpoint: string): string {
    const urlOptions: Options = { ...this.options, ...options };
    let url = `${this.baseLink}${endpoint}?`;

    Object.keys(urlOptions).forEach((key: string): void => {
      url += `${key}=${urlOptions[key as keyof typeof urlOptions]}&`;
    });

    return url.slice(0, -1);
  }

  load(method: string, endpoint: string, callback: Callback<DrawSources | DrawNews>, options = {}): void {
    fetch(this.makeUrl(options, endpoint), { method })
      .then(this.errorHandler)
      .then((res) => res.json())
      .then((data: DrawSources | DrawNews) => callback(data))
      .catch((err: Error) => console.error(err));
  }
}

export default Loader;
