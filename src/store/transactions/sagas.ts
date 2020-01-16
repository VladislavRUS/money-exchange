import { setExchangeModalVisibility, setHasExchanged } from '../echange/actions';
import { createTransaction, createTransactionAsync, addTransaction } from './actions';
import { TransactionsActionTypes } from './types';
import { all, fork, takeEvery, delay, put } from 'redux-saga/effects';

function* handleCreateTransaction(action: ReturnType<typeof createTransaction>) {
  yield put(createTransactionAsync.request());

  yield delay(500);

  yield put(addTransaction(action.payload));

  yield put(createTransactionAsync.success(action.payload));

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
