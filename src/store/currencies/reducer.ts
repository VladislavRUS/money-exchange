import { ICurrenciesState } from './types';
import { createReducer } from 'typesafe-actions';
import currencies from '../../mocks/currencies.json';

export const initialState: ICurrenciesState = {
  data: currencies,
};

export const currenciesReducer = createReducer(initialState);
