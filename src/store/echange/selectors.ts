import { IApplicationState } from '../index';

export const getFromAccount = (state: IApplicationState) => state.exchange.fromAccount;
export const getFromValue = (state: IApplicationState) => state.exchange.fromValue;
export const getToAccount = (state: IApplicationState) => state.exchange.toAccount;
export const getToValue = (state: IApplicationState) => state.exchange.toValue;
export const getBaseAccount = (state: IApplicationState) => state.exchange.baseAccount;

const formatValue = (value: number) =>
  new Intl.NumberFormat('en', {
    useGrouping: true,
    minimumFractionDigits: 0,
    maximumFractionDigits: 2,
  }).format(value);

export const getFormattedFromValue = (state: IApplicationState) => {
  const fromValue = getFromValue(state);
  return formatValue(fromValue);
};

export const getFormattedToValue = (state: IApplicationState) => {
  const toValue = getToValue(state);
  return formatValue(toValue);
};
