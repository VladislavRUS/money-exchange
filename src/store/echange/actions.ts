import { action } from 'typesafe-actions';
import { ExchangeActionTypes } from './types';
import { IAccount } from '../accounts/types';

export const reverse = () => action(ExchangeActionTypes.REVERSE);
export const setFromAccount = (account: IAccount) => action(ExchangeActionTypes.SET_FROM_ACCOUNT, account);
export const setToAccount = (account: IAccount) => action(ExchangeActionTypes.SET_TO_ACCOUNT, account);
export const changeFromValue = (value: number) => action(ExchangeActionTypes.CHANGE_FROM_VALUE, value);
export const changeToValue = (value: number) => action(ExchangeActionTypes.CHANGE_TO_VALUE, value);
export const setFromValue = (value: number) => action(ExchangeActionTypes.SET_FROM_VALUE, value);
export const setToValue = (value: number) => action(ExchangeActionTypes.SET_TO_VALUE, value);
