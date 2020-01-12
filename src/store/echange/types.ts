import { IAccount } from '../accounts/types';

export interface IExchangeState {
  fromAccount: IAccount | null;
  fromValue: number;
  toAccount: IAccount | null;
  toValue: number;
}

export enum ExchangeActionTypes {
  REVERSE = '@@exchange/REVERSE',
  SET_FROM_ACCOUNT = '@@exchange/SET_FROM_ACCOUNT',
  SET_TO_ACCOUNT = '@@exchange/SET_TO_ACCOUNT',
  CHANGE_FROM_VALUE = '@@exchange/CHANGE_FROM_VALUE',
  CHANGE_TO_VALUE = '@@exchange/CHANGE_TO_VALUE',
  SET_FROM_VALUE = '@@exchange/SET_FROM_VALUE',
  SET_TO_VALUE = '@@exchange/SET_TO_VALUE',
}
