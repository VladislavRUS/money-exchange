import React from 'react';
import { Wrapper, Header, Spent, Avatar, Owner, CardInformation, Symbol, Number } from './CardItem.styles';
import { ICard } from '../../../store/cards/types';

interface ICardItemProps {
  card: ICard;
}

const CardItem: React.FC<ICardItemProps> = ({ card }) => (
  <Wrapper>
    <Header>
      <Spent>${card.spent}</Spent>
      <Avatar imageUrl={card.avatarUrl} />
    </Header>
    <Owner>{card.owner}</Owner>
    <CardInformation>
      <Symbol />
      <Number>* * {card.lastDigits}</Number>
    </CardInformation>
  </Wrapper>
);

export default CardItem;
