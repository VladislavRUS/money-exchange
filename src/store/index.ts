import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import { History } from 'history';
import { IUserState } from './user/types';
import { userReducer } from './user/reducer';
import { accountsReducer } from './accounts/reducer';
import { IAccountsState } from './accounts/types';
import { currenciesReducer } from './currencies/reducer';
import { ICurrenciesState } from './currencies/types';

export interface IApplicationState {
  user: IUserState;
  accounts: IAccountsState;
  currencies: ICurrenciesState;
}

export const createRootReducer = (history: History) =>
  combineReducers({
    user: userReducer,
    accounts: accountsReducer,
    currencies: currenciesReducer,
    router: connectRouter(history),
  });

// eslint-disable-next-line @typescript-eslint/no-empty-function
export function* rootSaga() {}
