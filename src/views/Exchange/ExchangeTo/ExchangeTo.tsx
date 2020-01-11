import React from 'react';
import { BaseExchange } from '../BaseExchange';
import { BaseExchangeMode } from '../BaseExchange/BaseExchange';
import { IApplicationState } from '../../../store';
import { connect } from 'react-redux';

const mapStateToProps = (state: IApplicationState) => ({
  account: state.exchange.toAccount,
});

type TStateProps = ReturnType<typeof mapStateToProps>;

type TProps = TStateProps;

const ExchangeTo: React.FC<TProps> = ({ account }) =>
  account ? <BaseExchange mode={BaseExchangeMode.TO} account={account} /> : null;

const ConnectedExchangeTo = connect(mapStateToProps)(ExchangeTo);

export default ConnectedExchangeTo;
