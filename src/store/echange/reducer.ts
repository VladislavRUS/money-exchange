import { ActionType, createReducer } from 'typesafe-actions';
import { ExchangeActionTypes, IExchangeState } from './types';

import * as exchangeActions from './actions';
type ExchangeAction = ActionType<typeof exchangeActions>;

const initialState: IExchangeState = {
  fromAccount: null,
  toAccount: null,
  fromValue: 0,
  toValue: 0,
  baseAccount: null,
  comment: '',
  isExchangeModalVisible: false,
  hasExchanged: false,
};

export const exchangeReducer = createReducer<IExchangeState, ExchangeAction>(initialState, {
  [ExchangeActionTypes.SET_BASE_ACCOUNT]: (state, action) => ({ ...state, baseAccount: action.payload }),
  [ExchangeActionTypes.SET_FROM_ACCOUNT]: (state, action) => ({
    ...state,
    fromAccount: action.payload,
  }),
  [ExchangeActionTypes.SET_TO_ACCOUNT]: (state, action) => ({
    ...state,
    toAccount: action.payload,
  }),
  [ExchangeActionTypes.SET_FROM_VALUE]: (state, action) => ({ ...state, fromValue: action.payload }),
  [ExchangeActionTypes.SET_TO_VALUE]: (state, action) => ({ ...state, toValue: action.payload }),
  [ExchangeActionTypes.SET_COMMENT]: (state, action) => ({ ...state, comment: action.payload }),
  [ExchangeActionTypes.SET_EXCHANGE_MODAL_VISIBILITY]: (state, action) => ({
    ...state,
    isExchangeModalVisible: action.payload,
  }),
  [ExchangeActionTypes.SET_HAS_EXCHANGED]: (state, action) => ({
    ...state,
    hasExchanged: action.payload,
  }),
  [ExchangeActionTypes.CLEAR_EXCHANGE]: () => initialState,
});
