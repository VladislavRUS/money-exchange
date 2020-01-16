export interface ITransactionsState {
  list: ITransaction[];
  isLoading: boolean;
  lastTransaction: ITransaction | null;
}

export interface ITransaction {
  id: string;
  fromAccountId: string;
  fromAccountValue: number;
  toAccountId: string;
  toAccountValue: number;
  valueInDollars: number;
  dateTime: number;
}

export enum TransactionsActionTypes {
  ADD_TRANSACTION = '@@transactions/ADD_TRANSACTION',
  CREATE_TRANSACTION = '@@transactions/CREATE_TRANSACTION',
  CREATE_TRANSACTION_REQUEST = '@@transactions/CREATE_TRANSACTION_REQUEST',
  CREATE_TRANSACTION_SUCCESS = '@@transactions/CREATE_TRANSACTION_SUCCESS',
  CREATE_TRANSACTION_ERROR = '@@transactions/CREATE_TRANSACTION_ERROR',
}
