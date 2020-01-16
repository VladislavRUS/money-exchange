import { IApplicationState } from '../index';

export const getCurrencyData = (state: IApplicationState, currency: string) => {
  return state.currencies.data[currency];
};
