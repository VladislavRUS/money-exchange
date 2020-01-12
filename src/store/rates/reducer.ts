import * as ratesActions from './actions';
import { ActionType, createReducer } from 'typesafe-actions';
import { IRatesState, RatesActionTypes } from './types';
import rates from '../../mocks/rates.json';

type RatesAction = ActionType<typeof ratesActions>;

const initialState: IRatesState = {
  isLoading: false,
  rates,
};

const ratesReducer = createReducer<IRatesState, RatesAction>(initialState, {
  [RatesActionTypes.GET_RATES_REQUEST]: state => ({ ...state, isLoading: true }),
  [RatesActionTypes.GET_RATES_SUCCESS]: (state, action) => ({ ...state, rates: action.payload, isLoading: false }),
  [RatesActionTypes.GET_RATES_ERROR]: state => ({ ...state, isLoading: false }),
});

export { ratesReducer };
