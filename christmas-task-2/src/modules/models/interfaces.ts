export interface DataToys {
  readonly num: number;
  readonly name: string;
  readonly count: number;
  readonly year: number;
  readonly shape: string;
  readonly color: string;
  readonly size: string;
  readonly favorite: boolean;
  unique?: boolean;
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