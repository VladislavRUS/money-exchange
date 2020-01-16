import { action } from 'typesafe-actions';
import { AccountsActionsTypes } from './types';

export const setGridViewMode = () => action(AccountsActionsTypes.SET_GRID_VIEW_MODE);
export const setTableViewMode = () => action(AccountsActionsTypes.SET_TABLE_VIEW_MODE);
export const setBaseCurrency = (baseCurrency: string) => action(AccountsActionsTypes.SET_BASE_CURRENCY, baseCurrency);
export const setAccountValue = (accountId: string, value: number) =>
  action(AccountsActionsTypes.SET_ACCOUNT_VALUE, { accountId, value });
