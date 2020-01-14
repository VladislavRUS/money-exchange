import { IRates } from '../store/rates/types';
import { IAccount } from '../store/accounts/types';

export const countAccountsInOneCurrency = (rates: IRates, accounts: IAccount[], baseCurrency: string) => {
  let sumInDollars = 0;

  accounts.forEach(account => {
    sumInDollars += account.value * rates[account.currency];
  });

  return sumInDollars * rates[baseCurrency];
};
