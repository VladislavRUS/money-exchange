import { ITransaction } from './../transactions/types';
import { createTransaction } from './../transactions/actions';
import { all, fork, put, select, takeEvery } from 'redux-saga/effects';
import { ExchangeActionTypes } from './types';
import {
  changeFromAccount,
  changeFromValue,
  changeToAccount,
  changeToValue,
  reverse,
  setBaseAccount,
  setFromAccount,
  setFromValue,
  setToAccount,
  setToValue,
  updateValues,
} from './actions';
import { getRates } from '../rates/selectors';
import { getBaseAccount, getFromAccount, getFromValue, getToAccount, getToValue } from './selectors';
import { convertBetweenCurrencies } from '../../utils/covertBetweenCurrencies';

function* handleChangeFromValue(action: ReturnType<typeof changeFromValue>) {
  yield put(setFromValue(action.payload));
  yield put(updateValues());
}

function* handleChangeToValue(action: ReturnType<typeof changeToValue>) {
  yield put(setToValue(action.payload));
  yield put(updateValues());
}

function* handleUpdateValues() {
  const rates: ReturnType<typeof getRates> = yield select(getRates);
  const baseAccount: ReturnType<typeof getBaseAccount> = yield select(getBaseAccount);
  const fromAccount: ReturnType<typeof getFromAccount> = yield select(getFromAccount);
  const toAccount: ReturnType<typeof getToAccount> = yield select(getToAccount);

  if (!rates || !fromAccount || !toAccount || !baseAccount) {
    return;
  }

  const currentFromValue: ReturnType<typeof getFromValue> = yield select(getFromValue);
  const currentToValue: ReturnType<typeof getToValue> = yield select(getToValue);

  if (fromAccount === baseAccount) {
    const toValue = convertBetweenCurrencies(fromAccount.currency, currentFromValue, toAccount.currency, rates);
    yield put(setToValue(toValue));
  } else {
    const fromValue = convertBetweenCurrencies(toAccount.currency, currentToValue, fromAccount.currency, rates);
    yield put(setFromValue(fromValue));
  }
}

function* handleReverse() {
  const fromAccount: ReturnType<typeof getFromAccount> = yield select(getFromAccount);
  const toAccount: ReturnType<typeof getToAccount> = yield select(getToAccount);
  const baseAccount: ReturnType<typeof getBaseAccount> = yield select(getBaseAccount);

  if (!fromAccount || !toAccount || !baseAccount) {
    return;
  }

  yield put(setFromAccount(toAccount));
  yield put(setToAccount(fromAccount));

  if (fromAccount === baseAccount) {
    yield put(setBaseAccount(toAccount));
  } else {
    yield put(setBaseAccount(fromAccount));
  }

  yield put(updateValues());
}

function* handleChangeFromAccount(action: ReturnType<typeof changeFromAccount>) {
  const toAccount: ReturnType<typeof getToAccount> = yield select(getToAccount);

  if (action.payload === toAccount) {
    yield put(reverse());
  } else {
    yield put(setFromAccount(action.payload));
    yield put(updateValues());
  }
}

function* handleChangeToAccount(action: ReturnType<typeof changeToAccount>) {
  const fromAccount: ReturnType<typeof getFromAccount> = yield select(getFromAccount);

  if (action.payload === fromAccount) {
    yield put(reverse());
  } else {
    yield put(setToAccount(action.payload));
    yield put(updateValues());
  }
}

function* handleExchange() {
  const fromAccount: ReturnType<typeof getFromAccount> = yield select(getFromAccount);
  const toAccount: ReturnType<typeof getToAccount> = yield select(getToAccount);
  const rates: ReturnType<typeof getRates> = yield select(getRates);

  if (!fromAccount || !toAccount || !rates) {
    return;
  }

  const fromValue: ReturnType<typeof getFromValue> = yield select(getFromValue);
  const toValue: ReturnType<typeof getToValue> = yield select(getToValue);

  const valueInDollars = convertBetweenCurrencies(toAccount.currency, fromValue, fromAccount.currency, rates);

  const transaction: ITransaction = {
    fromAccountId: fromAccount.id,
    fromAccountValue: fromValue,
    toAccountId: toAccount.id,
    toAccountValue: toValue,
    valueInDollars,
    dateTime: new Date().toISOString(),
  };

  yield put(createTransaction(transaction));
}

// WATCHERS
function* watchChangeFromValue() {
  yield takeEvery(ExchangeActionTypes.CHANGE_FROM_VALUE, handleChangeFromValue);
}

function* watchChangeToValue() {
  yield takeEvery(ExchangeActionTypes.CHANGE_TO_VALUE, handleChangeToValue);
}

function* watchUpdatesValue() {
  yield takeEvery([ExchangeActionTypes.UPDATE_VALUES], handleUpdateValues);
}

function* watchReverse() {
  yield takeEvery(ExchangeActionTypes.REVERSE, handleReverse);
}

function* watchChangeFromAccount() {
  yield takeEvery(ExchangeActionTypes.CHANGE_FROM_ACCOUNT, handleChangeFromAccount);
}

function* watchChangeToAccount() {
  yield takeEvery(ExchangeActionTypes.CHANGE_TO_ACCOUNT, handleChangeToAccount);
}

function* watchExchange() {
  yield takeEvery(ExchangeActionTypes.EXCHANGE, handleExchange);
}

function* exchangeSaga() {
  yield all([
    fork(watchChangeFromValue),
    fork(watchChangeToValue),
    fork(watchUpdatesValue),
    fork(watchReverse),
    fork(watchChangeFromAccount),
    fork(watchChangeToAccount),
    fork(watchExchange),
  ]);
}

export { exchangeSaga };
