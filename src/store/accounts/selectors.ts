import { IApplicationState } from '../index';

export const getTotalBalance = (state: IApplicationState) => {
  const { rates } = state.rates;

  if (!rates) {
    return 0;
  }

  let sumInDollars = 0;

  state.accounts.list.forEach(account => {
    sumInDollars += account.value * rates[account.currency];
  });

  const { baseCurrency } = state.accounts;

  return sumInDollars * rates[baseCurrency];
};
