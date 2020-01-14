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
import { IAccount } from '../accounts/types';
import { IRates } from '../rates/types';

function* handleChangeFromValue(action: ReturnType<typeof changeFromValue>) {
  yield put(setFromValue(action.payload));
  yield put(updateValues());
}

function* handleChangeToValue(action: ReturnType<typeof changeToValue>) {
  yield put(setToValue(action.payload));
  yield put(updateValues());
}

function* handleUpdateValues() {
  const rates: IRates = yield select(getRates);
  const baseAccount: IAccount = yield select(getBaseAccount);
  const fromAccount: IAccount = yield select(getFromAccount);
  const toAccount: IAccount = yield select(getToAccount);

  if (!rates || !fromAccount || !toAccount || !baseAccount) {
    return;
  }

  const currentFromValue: number = yield select(getFromValue);
  const currentToValue: number = yield select(getToValue);

  if (fromAccount === baseAccount) {
    const baseValueInDollars = currentFromValue / rates[fromAccount.currency];
    const toValue = baseValueInDollars * rates[toAccount.currency];
    yield put(setToValue(toValue));
  } else {
    const baseValueInDollars = currentToValue / rates[toAccount.currency];
    const fromValue = baseValueInDollars * rates[fromAccount.currency];
    yield put(setFromValue(fromValue));
  }
}

function* handleReverse() {
  const fromAccount: IAccount = yield select(getFromAccount);
  const toAccount: IAccount = yield select(getToAccount);
  const baseAccount: IAccount = yield select(getBaseAccount);

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
  const toAccount: IAccount = yield select(getToAccount);

  if (action.payload === toAccount) {
    yield put(reverse());
  } else {
    yield put(setFromAccount(action.payload));
    yield put(updateValues());
  }
}

function* handleChangeToAccount(action: ReturnType<typeof changeToAccount>) {
  const fromAccount: IAccount = yield select(getFromAccount);

  if (action.payload === fromAccount) {
    yield put(reverse());
  } else {
    yield put(setToAccount(action.payload));
    yield put(updateValues());
  }
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

function* exchangeSaga() {
  yield all([
    fork(watchChangeFromValue),
    fork(watchChangeToValue),
    fork(watchUpdatesValue),
    fork(watchReverse),
    fork(watchChangeFromAccount),
    fork(watchChangeToAccount),
  ]);
}

export { exchangeSaga };
