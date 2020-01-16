import { createReducer, ActionType } from 'typesafe-actions';
import { ITransactionsState, TransactionsActionTypes } from './types';
import transactions from '../../mocks/transactions.json';
import * as transactionsActions from './actions';

type TransactionsAction = ActionType<typeof transactionsActions>;

const initialState: ITransactionsState = {
  list: transactions,
  isLoading: false,
  lastTransaction: null,
};

export const transactionsReducer = createReducer<ITransactionsState, TransactionsAction>(initialState, {
  [TransactionsActionTypes.CREATE_TRANSACTION_REQUEST]: state => ({ ...state, isLoading: true }),
  [TransactionsActionTypes.CREATE_TRANSACTION_SUCCESS]: (state, action) => ({
    ...state,
    isLoading: false,
    lastTransaction: action.payload,
  }),
  [TransactionsActionTypes.CREATE_TRANSACTION_ERROR]: state => ({ ...state, isLoading: false }),
  [TransactionsActionTypes.ADD_TRANSACTION]: (state, action) => ({ ...state, list: [...state.list, action.payload] }),
});
