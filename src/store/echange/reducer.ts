import { createReducer } from 'typesafe-actions';
import { ExchangeActionTypes, IExchangeState } from './types';

const initialState: IExchangeState = {
  fromAccount: null,
  toAccount: null,
};

export const exchangeReducer = createReducer(initialState, {
  [ExchangeActionTypes.REVERSE]: state => ({ ...state, fromAccount: state.toAccount, toAccount: state.fromAccount }),
});
