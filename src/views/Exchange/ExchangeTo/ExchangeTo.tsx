import React from 'react';
import { BaseExchange } from '../BaseExchange';
import { IApplicationState } from '../../../store';
import { changeToAccount, changeToValue, setBaseAccount } from '../../../store/echange/actions';
import { connect } from 'react-redux';
import { Dispatch, bindActionCreators } from 'redux';
import { getFormattedToValue } from '../../../store/echange/selectors';

const mapStateToProps = (state: IApplicationState) => ({
  toAccount: state.exchange.toAccount,
  toValue: getFormattedToValue(state),
});

type TStateProps = ReturnType<typeof mapStateToProps>;

const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators(
    {
      changeToValue,
      changeToAccount,
      setBaseAccount,
    },
    dispatch,
  );

type TDispatchProps = ReturnType<typeof mapDispatchToProps>;

type TProps = TStateProps & TDispatchProps;

const ExchangeTo: React.FC<TProps> = ({ toAccount, toValue, changeToValue, changeToAccount, setBaseAccount }) =>
  toAccount && (
    <BaseExchange
      account={toAccount}
      value={toValue}
      onChangeValue={changeToValue}
      onSelectAccount={changeToAccount}
      onSetBaseAccount={setBaseAccount}
    />
  );

const ConnectedExchangeTo = connect(mapStateToProps, mapDispatchToProps)(ExchangeTo);

export default ConnectedExchangeTo;
