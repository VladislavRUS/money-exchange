import { IRates } from '../store/rates/types';

export const convertBetweenCurrencies = (
  fromCurrency: string,
  fromValue: number,
  toCurrency: string,
  rates: IRates,
) => {
  const baseValueInDollars = fromValue / rates[fromCurrency];
  return baseValueInDollars * rates[toCurrency];
};
