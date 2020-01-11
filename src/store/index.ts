import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import { History } from 'history';
import { IUserState } from './user/types';
import { userReducer } from './user/reducer';
import { accountsReducer } from './accounts/reducer';
import { IAccountsState } from './accounts/types';
import { currenciesReducer } from './currencies/reducer';
import { ICurrenciesState } from './currencies/types';
import { exchangeReducer } from './echange/reducer';
import { IExchangeState } from './echange/types';

export interface IApplicationState {
  user: IUserState;
  accounts: IAccountsState;
  currencies: ICurrenciesState;
  exchange: IExchangeState;
}

export const createRootReducer = (history: History) =>
  combineReducers({
    user: userReducer,
    accounts: accountsReducer,
    currencies: currenciesReducer,
    exchange: exchangeReducer,
    router: connectRouter(history),
  });

// eslint-disable-next-line @typescript-eslint/no-empty-function
export function* rootSaga() {}
