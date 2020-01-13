import { IApplicationState } from '../index';

export const getFromAccount = (state: IApplicationState) => state.exchange.fromAccount;
export const getFromValue = (state: IApplicationState) => state.exchange.fromValue;
export const getToAccount = (state: IApplicationState) => state.exchange.toAccount;
export const getToValue = (state: IApplicationState) => state.exchange.toValue;
export const getBaseAccount = (state: IApplicationState) => state.exchange.baseAccount;
