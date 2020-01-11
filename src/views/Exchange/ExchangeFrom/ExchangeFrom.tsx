import React from 'react';
import { BaseExchange } from '../BaseExchange';
import { IApplicationState } from '../../../store';
import { connect } from 'react-redux';

const mapStateToProps = (state: IApplicationState) => ({
  account: state.exchange.fromAccount,
});

type TStateProps = ReturnType<typeof mapStateToProps>;

type TProps = TStateProps;

const ExchangeFrom: React.FC<TProps> = ({ account }) =>
  account ? <BaseExchange account={account}>lol</BaseExchange> : null;

const ConnectedExchangeFrom = connect(mapStateToProps)(ExchangeFrom);

export default ConnectedExchangeFrom;
