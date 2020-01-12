import { ActionType, createReducer } from 'typesafe-actions';
import { ExchangeActionTypes, IExchangeState } from './types';

import * as exchangeActions from './actions';
type ExchangeAction = ActionType<typeof exchangeActions>;

const initialState: IExchangeState = {
  fromAccount: null,
  toAccount: null,
  fromValue: 0,
  toValue: 0,
};

export const exchangeReducer = createReducer<IExchangeState, ExchangeAction>(initialState, {
  [ExchangeActionTypes.REVERSE]: state => ({ ...state, fromAccount: state.toAccount, toAccount: state.fromAccount }),
  [ExchangeActionTypes.SET_FROM_ACCOUNT]: (state, action) => ({ ...state, fromAccount: action.payload }),
  [ExchangeActionTypes.SET_TO_ACCOUNT]: (state, action) => ({ ...state, toAccount: action.payload }),
  [ExchangeActionTypes.SET_FROM_VALUE]: (state, action) => ({ ...state, fromValue: action.payload }),
  [ExchangeActionTypes.SET_TO_VALUE]: (state, action) => ({ ...state, toValue: action.payload }),
});
