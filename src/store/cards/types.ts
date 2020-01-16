export interface ICardsState {
  list: ICard[];
}

export interface ICard {
  id: string;
  lastDigits: string;
  spent: number;
  owner: string;
  avatarUrl: string;
}
