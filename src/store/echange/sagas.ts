import { all, fork, takeEvery, put } from 'redux-saga/effects';
import { ExchangeActionTypes } from './types';
import { changeFromValue, changeToValue, setFromValue, setToValue } from './actions';

function* handleChangeFromValue(action: ReturnType<typeof changeFromValue>) {
  yield put(setFromValue(action.payload));
}

function* handleChangeToValue(action: ReturnType<typeof changeToValue>) {
  yield put(setToValue(action.payload));
}

// WATCHERS
function* watchChangeFromValue() {
  yield takeEvery(ExchangeActionTypes.CHANGE_FROM_VALUE, handleChangeFromValue);
}

function* watchChangeToValue() {
  yield takeEvery(ExchangeActionTypes.CHANGE_TO_VALUE, handleChangeToValue);
}

function* exchangeSaga() {
  yield all([fork(watchChangeFromValue), fork(watchChangeToValue)]);
}

export { exchangeSaga };
