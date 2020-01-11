import { IApplicationState } from '../index';

export const getTotalBalance = (state: IApplicationState) => {
  let sum = 0;

  state.accounts.list.forEach(account => {
    sum += account.value;
  });

  return sum;
};
