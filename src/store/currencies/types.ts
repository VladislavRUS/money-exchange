export interface ICurrenciesState {
  data: ICurrenciesData;
}

export interface ICurrenciesData {
  [key: string]: ICurrency;
}

export interface ICurrency {
  symbol: string;
  name: string;
  symbol_native: string;
  decimal_digits: number;
  rounding: number;
  code: string;
  name_plural: string;
  flag: string;
}
