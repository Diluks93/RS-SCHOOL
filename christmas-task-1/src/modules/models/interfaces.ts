export interface DataToys {
  num: number;
  name: string;
  count: number;
  year: number;
  shape: string;
  color: string;
  size: string;
  favorite: boolean;
}

export interface TextObject {
  titleContent: string;
  buttonContent?: string;
}

export interface ParamNoUiSlider {
  selector: string;
  startValue: number;
  endValue: number;
  step: number;
  minValue: number;
  maxValue: number;
}

export interface Flakes {
  x: number;
  y: number;
  r: number;
  d: number;
}