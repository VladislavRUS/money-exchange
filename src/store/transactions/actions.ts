import { action, createAsyncAction } from 'typesafe-actions';
import { TransactionsActionTypes, ITransaction } from './types';

export const createTransaction = (transaction: ITransaction) =>
  action(TransactionsActionTypes.CREATE_TRANSACTION, transaction);

export const addTransaction = (transaction: ITransaction) =>
  action(TransactionsActionTypes.ADD_TRANSACTION, transaction);

export const createTransactionAsync = createAsyncAction(
  TransactionsActionTypes.CREATE_TRANSACTION_REQUEST,
  TransactionsActionTypes.CREATE_TRANSACTION_SUCCESS,
  TransactionsActionTypes.CREATE_TRANSACTION_ERROR,
)<undefined, ITransaction, undefined>();
