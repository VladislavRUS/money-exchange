import { action } from 'typesafe-actions';
import { ExchangeActionTypes } from './types';

export const reverse = () => action(ExchangeActionTypes.REVERSE);
