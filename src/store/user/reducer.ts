import { IUserState } from './types';
import { createReducer } from 'typesafe-actions';
import userImage from '../../assets/images/user.jpeg';

export const initialState: IUserState = {
  current: {
    firstName: 'John',
    lastName: 'Doe',
    company: 'Acme Corporation',
    avatarUrl: userImage,
  },
  isDemo: true,
};

export const userReducer = createReducer(initialState);
