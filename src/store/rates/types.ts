export interface IRatesState {
  rates: IRates | null;
  isLoading: boolean;
}

export interface IRates {
  [key: string]: number;
}

export enum RatesActionTypes {
  GET_RATES = '@@rates/GET_RATES',
  GET_RATES_REQUEST = '@@rates/GET_RATES_REQUEST',
  GET_RATES_SUCCESS = '@@rates/GET_RATES_SUCCESS',
  GET_RATES_ERROR = '@@rates/GET_RATES_ERROR',
}
