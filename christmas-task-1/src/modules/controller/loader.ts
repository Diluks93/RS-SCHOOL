export default class Loader {
  constructor(readonly baseLink: string) {
    this.baseLink = baseLink;
  }

  async load() {
    const response: Response = await fetch(this.baseLink);
    const data = await response.json();

    return data;
  }
}

/* 
class Loader {
  protected constructor(readonly baseLink: string, protected options: Options) {
    this.baseLink = baseLink;
    this.options = options;
  }

  protected getResp(
    { endpoint, options = {} }: GetResp,
    callback: Callback<DrawSources | DrawNews> = () => {
      console.error('No callback for GET response');
    }
  ): void {
    this.load('GET', endpoint, callback, options);
  }

  private errorHandler(res: Response): Response {
    if (!res.ok) {
      if (res.status === 401 || res.status === 404)
        console.log(`Sorry, but there is ${res.status} error: ${res.statusText}`);
      throw Error(res.statusText);
    }

    return res;
  }

  private makeUrl(options: Options, endpoint: string): string {
    const urlOptions: Options = { ...this.options, ...options };
    let url = `${this.baseLink}${endpoint}?`;

    Object.keys(urlOptions).forEach((key: string): void => {
      url += `${key}=${urlOptions[key as keyof typeof urlOptions]}&`;
    });

    return url.slice(0, -1);
  }

  private load(method: string, endpoint: string, callback: Callback<DrawSources | DrawNews>, options = {}): void {
    fetch(this.makeUrl(options, endpoint), { method })
      .then(this.errorHandler)
      .then((res) => res.json())
      .then((data: DrawSources | DrawNews) => callback(data))
      .catch((err: Error) => console.error(err));
  }
}

*/