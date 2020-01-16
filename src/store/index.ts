import { ITransactionsState } from './transactions/types';
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
import { transactionsReducer } from './transactions/reducer';
import { transactionsSaga } from './transactions/sagas';

export interface IApplicationState {
  user: IUserState;
  accounts: IAccountsState;
  currencies: ICurrenciesState;
  exchange: IExchangeState;
  rates: IRatesState;
  transactions: ITransactionsState;
}

export const createRootReducer = (history: History) =>
  combineReducers({
    user: userReducer,
    accounts: accountsReducer,
    currencies: currenciesReducer,
    exchange: exchangeReducer,
    rates: ratesReducer,
    transactions: transactionsReducer,
    router: connectRouter(history),
  });

export function* rootSaga() {
  yield all([fork(exchangeSaga), fork(ratesSaga), fork(transactionsSaga)]);
}
