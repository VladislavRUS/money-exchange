import React from 'react';
import { BaseExchange } from '../BaseExchange';
import { IApplicationState } from '../../../store';
import { changeFromAccount, changeFromValue, setBaseAccount } from '../../../store/echange/actions';
import { connect } from 'react-redux';
import { Dispatch, bindActionCreators } from 'redux';
import { getFormattedFromValue } from '../../../store/echange/selectors';
import { BaseExchangeMode } from '../BaseExchange/BaseExchange';

const mapStateToProps = (state: IApplicationState) => ({
  fromAccount: state.exchange.fromAccount,
  fromValue: getFormattedFromValue(state),
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
      mode={BaseExchangeMode.FROM}
    />
  );

const ConnectedExchangeFrom = connect(mapStateToProps, mapDispatchToProps)(ExchangeFrom);

export default ConnectedExchangeFrom;
