import { ICardsState } from './types';
import { createReducer } from 'typesafe-actions';
import cards from '../../mocks/cards.json';

const initialState: ICardsState = {
  list: cards,
};

const cardsReducer = createReducer(initialState);

export { cardsReducer };
