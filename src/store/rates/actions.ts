import { action, createAsyncAction } from 'typesafe-actions';
import { IRates, RatesActionTypes } from './types';

export const fetchRatesAsync = createAsyncAction(
  RatesActionTypes.GET_RATES_REQUEST,
  RatesActionTypes.GET_RATES_SUCCESS,
  RatesActionTypes.GET_RATES_ERROR,
)<undefined, IRates, undefined>();

export const getRates = () => action(RatesActionTypes.GET_RATES);
