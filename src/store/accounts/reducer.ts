import { IAccountsState, AccountsActionsTypes } from './types';
import { ActionType, createReducer } from 'typesafe-actions';
import accounts from '../../mocks/accounts.json';
import * as accountsActions from './actions';

type AccountsAction = ActionType<typeof accountsActions>;

export const initialState: IAccountsState = {
  list: accounts,
  baseCurrency: 'GBP',
  viewMode: 'grid',
};

export const accountsReducer = createReducer<IAccountsState, AccountsAction>(initialState, {
  [AccountsActionsTypes.SET_GRID_VIEW_MODE]: state => ({ ...state, viewMode: 'grid' }),
  [AccountsActionsTypes.SET_TABLE_VIEW_MODE]: state => ({ ...state, viewMode: 'table' }),
  [AccountsActionsTypes.SET_BASE_CURRENCY]: (state, action) => ({ ...state, baseCurrency: action.payload }),
});
