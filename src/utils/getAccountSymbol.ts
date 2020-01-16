import { ICurrenciesData } from '../store/currencies/types';
import { IAccount } from '../store/accounts/types';

export const getAccountSymbol = (account: IAccount, currencies: ICurrenciesData) => {
  return currencies[account.currency].symbol;
};
