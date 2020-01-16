export interface IUserState {
  current: IUser;
  isDemo: boolean;
}

export interface IUser {
  firstName: string;
  lastName: string;
  company: string;
  avatarUrl: string;
}
