import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import { History } from 'history';
import { IUserState } from './user/types';
import { userReducer } from './user/reducer';

export interface IApplicationState {
  user: IUserState;
}

export const createRootReducer = (history: History) =>
  combineReducers({
    user: userReducer,
    router: connectRouter(history),
  });

// eslint-disable-next-line @typescript-eslint/no-empty-function
export function* rootSaga() {}
