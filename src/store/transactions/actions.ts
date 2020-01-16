import { action, createAsyncAction } from 'typesafe-actions';
import { TransactionsActionTypes, ITransaction } from './types';
import { IAccount } from '../accounts/types';

export const createTransaction = (fromAccount: IAccount, toAccount: IAccount, transaction: ITransaction) =>
  action(TransactionsActionTypes.CREATE_TRANSACTION, { fromAccount, toAccount, transaction });

export const addTransaction = (transaction: ITransaction) =>
  action(TransactionsActionTypes.ADD_TRANSACTION, transaction);

export const createTransactionAsync = createAsyncAction(
  TransactionsActionTypes.CREATE_TRANSACTION_REQUEST,
  TransactionsActionTypes.CREATE_TRANSACTION_SUCCESS,
  TransactionsActionTypes.CREATE_TRANSACTION_ERROR,
)<undefined, ITransaction, undefined>();
