import { IApplicationState } from '../index';
import { countAccountsInOneCurrency } from '../../utils/countAccountsInOneCurrency';

export const getTotalBalance = (state: IApplicationState) => {
  const { rates } = state.rates;

  if (!rates) {
    return 0;
  }

  return countAccountsInOneCurrency(rates, state.accounts.list, state.accounts.baseCurrency);
};
