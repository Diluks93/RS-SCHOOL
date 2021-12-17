import { DrawNews } from './interfaces';

export type Options = {
  apiKey?: string | undefined;
  sources?: string;
};

export type GetResp = {
  endpoint: string;
  options?: Record<string, string>;
};

export type Callback<T> = (data: T) => void;

export type PickDrawNews = Pick<DrawNews, 'status'>;
