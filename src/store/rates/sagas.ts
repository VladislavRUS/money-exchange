import { all, fork, takeEvery, put, call } from 'redux-saga/effects';
import { RatesActionTypes } from './types';
import { fetchRatesAsync } from './actions';
import { RATES_API } from '../../api';

function* handleGetRates() {
  yield put(fetchRatesAsync.request());

  try {
    const { data } = yield call(RATES_API.get, '/api/latest.json');
    const { rates } = data;

    yield put(fetchRatesAsync.success(rates));
  } catch (e) {
    yield put(fetchRatesAsync.failure());
  }
}

// WATCHERS

function* watchGetRates() {
  yield takeEvery(RatesActionTypes.GET_RATES, handleGetRates);
}

function* ratesSaga() {
  yield all([fork(watchGetRates)]);
}

export { ratesSaga };
