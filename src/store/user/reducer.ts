import { IUserState } from './types';
import { createReducer } from 'typesafe-actions';
import user from '../../mocks/user.json';
import userImage from '../../assets/images/user.jpeg';

export const initialState: IUserState = {
  current: {
    ...user,
    avatarUrl: userImage,
  },
  isDemo: true,
};

export const userReducer = createReducer(initialState);
