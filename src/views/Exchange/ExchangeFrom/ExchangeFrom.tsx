import React from 'react';
import { BaseExchange } from '../BaseExchange';
import { IApplicationState } from '../../../store';
import { changeFromAccount, changeFromValue, setBaseAccount } from '../../../store/echange/actions';
import { connect } from 'react-redux';
import { Dispatch, bindActionCreators } from 'redux';

const mapStateToProps = (state: IApplicationState) => ({
  fromAccount: state.exchange.fromAccount,
  fromValue: state.exchange.fromValue,
});

type TStateProps = ReturnType<typeof mapStateToProps>;

const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators(
    {
      changeFromValue,
      changeFromAccount,
      setBaseAccount,
    },
    dispatch,
  );

type TDispatchProps = ReturnType<typeof mapDispatchToProps>;

type TProps = TStateProps & TDispatchProps;

const ExchangeFrom: React.FC<TProps> = ({
  fromAccount,
  fromValue,
  changeFromValue,
  changeFromAccount,
  setBaseAccount,
}) =>
  fromAccount && (
    <BaseExchange
      account={fromAccount}
      value={fromValue}
      onChangeValue={changeFromValue}
      onSelectAccount={changeFromAccount}
      onSetBaseAccount={setBaseAccount}
    />
  );

const ConnectedExchangeFrom = connect(mapStateToProps, mapDispatchToProps)(ExchangeFrom);

export default ConnectedExchangeFrom;
