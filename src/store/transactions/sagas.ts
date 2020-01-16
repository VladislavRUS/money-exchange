import { setExchangeModalVisibility, setHasExchanged } from '../echange/actions';
import { createTransaction, createTransactionAsync, addTransaction } from './actions';
import { TransactionsActionTypes } from './types';
import { all, fork, takeEvery, delay, put } from 'redux-saga/effects';
import { setAccountValue } from '../accounts/actions';

function* handleCreateTransaction(action: ReturnType<typeof createTransaction>) {
  yield put(createTransactionAsync.request());

  // Just to imitate network
  yield delay(300);

  const fromAccountValue = action.payload.fromAccount.value - action.payload.transaction.fromAccountValue;
  const toAccountValue = action.payload.toAccount.value + action.payload.transaction.toAccountValue;

  yield put(setAccountValue(action.payload.fromAccount.id, fromAccountValue));
  yield put(setAccountValue(action.payload.toAccount.id, toAccountValue));
  yield put(addTransaction(action.payload.transaction));

  yield put(createTransactionAsync.success(action.payload.transaction));

  yield put(setExchangeModalVisibility(false));
  yield put(setHasExchanged(true));
}

function* watchCreateTransaction() {
  yield takeEvery(TransactionsActionTypes.CREATE_TRANSACTION, handleCreateTransaction);
}

function* transactionsSaga() {
  yield all([fork(watchCreateTransaction)]);
}

export { transactionsSaga };
