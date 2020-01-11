export interface IAccountsState {
  list: IAccount[];
  baseCurrency: string;
  viewMode: 'grid' | 'table';
}

export interface IAccount {
  id: string;
  title: string;
  currency: string;
  value: number;
}

export enum AccountsActionsTypes {
  SET_GRID_VIEW_MODE = '@@accounts/SET_GRID_VIEW_MODE',
  SET_TABLE_VIEW_MODE = '@@accounts/SET_TABLE_VIEW_MODE',
}
