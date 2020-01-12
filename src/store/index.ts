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
import { exchangeSaga } from './echange/sagas';
import { all, fork } from 'redux-saga/effects';
import { ratesSaga } from './rates/sagas';
import { IRatesState } from './rates/types';
import { ratesReducer } from './rates/reducer';

export interface IApplicationState {
  user: IUserState;
  accounts: IAccountsState;
  currencies: ICurrenciesState;
  exchange: IExchangeState;
  rates: IRatesState;
}

export const createRootReducer = (history: History) =>
  combineReducers({
    user: userReducer,
    accounts: accountsReducer,
    currencies: currenciesReducer,
    exchange: exchangeReducer,
    rates: ratesReducer,
    router: connectRouter(history),
  });

export function* rootSaga() {
  yield all([fork(exchangeSaga), fork(ratesSaga)]);
}
