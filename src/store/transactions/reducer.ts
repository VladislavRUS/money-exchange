import { createReducer, ActionType } from 'typesafe-actions';
import { ITransactionsState } from './types';
import transactions from '../../mocks/transactions.json';
import * as transactionsActions from './actions';

type TransactionsAction = ActionType<typeof transactionsActions>;

const initialState: ITransactionsState = {
  list: transactions,
};

export const transactionsReducer = createReducer<ITransactionsState, TransactionsAction>(initialState);
