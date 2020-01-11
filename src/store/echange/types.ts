import { IAccount } from '../accounts/types';

export interface IExchangeState {
  fromAccount: IAccount | null;
  toAccount: IAccount | null;
}

export enum ExchangeActionTypes {
  REVERSE = '@@exchange/reverse',
}
