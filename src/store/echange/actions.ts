import { action } from 'typesafe-actions';
import { ExchangeActionTypes } from './types';
import { IAccount } from '../accounts/types';

export const reverse = () => action(ExchangeActionTypes.REVERSE);
export const setBaseAccount = (account: IAccount) => action(ExchangeActionTypes.SET_BASE_ACCOUNT, account);

// Set values and update them
export const changeFromAccount = (account: IAccount) => action(ExchangeActionTypes.CHANGE_FROM_ACCOUNT, account);
export const changeToAccount = (account: IAccount) => action(ExchangeActionTypes.CHANGE_TO_ACCOUNT, account);

export const setFromAccount = (account: IAccount) => action(ExchangeActionTypes.SET_FROM_ACCOUNT, account);
export const setToAccount = (account: IAccount) => action(ExchangeActionTypes.SET_TO_ACCOUNT, account);

// Set values and update them
export const changeFromValue = (value: number) => action(ExchangeActionTypes.CHANGE_FROM_VALUE, value);
export const changeToValue = (value: number) => action(ExchangeActionTypes.CHANGE_TO_VALUE, value);

// Set values
export const setFromValue = (value: number) => action(ExchangeActionTypes.SET_FROM_VALUE, value);
export const setToValue = (value: number) => action(ExchangeActionTypes.SET_TO_VALUE, value);

// Update another account according to base
export const updateValues = () => action(ExchangeActionTypes.UPDATE_VALUES);
