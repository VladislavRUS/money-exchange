import React from 'react';
import { Wrapper } from './PhysicalCards.styles';
import { IApplicationState } from '../../../store';
import { CardItem } from '../CardItem';
import { connect } from 'react-redux';

const mapStateToProps = (state: IApplicationState) => ({
  cards: state.cards.list,
});

type TStateProps = ReturnType<typeof mapStateToProps>;

const PhysicalCards: React.FC<TStateProps> = ({ cards }) => (
  <Wrapper>
    {cards.map(card => (
      <CardItem key={card.id} card={card} />
    ))}
  </Wrapper>
);

const ConnectedPhysicalCards = connect(mapStateToProps)(PhysicalCards);

export default ConnectedPhysicalCards;
