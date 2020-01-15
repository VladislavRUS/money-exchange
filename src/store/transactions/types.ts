export interface ITransactionsState {
  list: ITransaction[];
}

export interface ITransaction {
  fromAccountId: string;
  fromAccountValue: number;
  toAccountId: string;
  toAccountValue: number;
  valueInDollars: number;
  dateTime: string;
}

export enum TransactionsActionTypes {
  CREATE_TRANSACTION = '@@transactions/CREATE_TRANSACTION',
}
