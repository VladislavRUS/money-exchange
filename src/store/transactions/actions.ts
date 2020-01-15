import { action } from 'typesafe-actions';
import { TransactionsActionTypes, ITransaction } from './types';

export const createTransaction = (transaction: ITransaction) =>
  action(TransactionsActionTypes.CREATE_TRANSACTION, transaction);
