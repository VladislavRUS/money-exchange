import React from 'react';
import { Dispatch, bindActionCreators } from 'redux';
import { Wrapper, Title, ExchangeButtonWrapper, CloseWrapper, Overlay } from './Exchange.styles';
import { withTranslation, WithTranslation } from 'react-i18next';
import { RoundedButton } from '../../components/Buttons/RoundedButton';
import { FiMaximize2, FiX } from 'react-icons/fi';
import { changeFromValue, changeToValue, reverse, setFromAccount, setToAccount } from '../../store/echange/actions';
import { connect } from 'react-redux';
import { RoundedLink } from '../../components/RoundedLink';
import { Routes } from '../../constants/Routes';
import { IApplicationState } from '../../store';
import { BaseExchange } from './BaseExchange';

const mapStateToProps = (state: IApplicationState) => ({
  fromAccount: state.exchange.fromAccount,
  toAccount: state.exchange.toAccount,
  fromValue: state.exchange.fromValue,
  toValue: state.exchange.toValue,
  accounts: state.accounts.list,
});

type TStateProps = ReturnType<typeof mapStateToProps>;

const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators(
    {
      reverse,
      setFromAccount,
      setToAccount,
      changeFromValue,
      changeToValue,
    },
    dispatch,
  );

type TDispatchProps = ReturnType<typeof mapDispatchToProps>;

type TProps = TStateProps & TDispatchProps & WithTranslation;

class Exchange extends React.Component<TProps> {
  componentDidMount() {
    const { accounts } = this.props;

    if (accounts.length > 1) {
      const [first, second] = accounts;

      this.props.setFromAccount(first);
      this.props.setToAccount(second);
    }
  }

  render() {
    const {
      fromAccount,
      toAccount,
      fromValue,
      toValue,
      changeFromValue,
      changeToValue,
      setFromAccount,
      setToAccount,
      reverse,
      t,
    } = this.props;

    return (
      <Wrapper>
        <Overlay />
        <Title>{t('exchange.title')}</Title>
        <ExchangeButtonWrapper>
          <RoundedButton onClick={reverse}>
            <FiMaximize2 color={'#0075eb'} size={24} />
          </RoundedButton>
        </ExchangeButtonWrapper>
        <CloseWrapper>
          <RoundedLink to={Routes.HOME}>
            <FiX color={'#0075eb'} size={24} />
          </RoundedLink>
        </CloseWrapper>
        {fromAccount && (
          <BaseExchange
            account={fromAccount}
            value={fromValue}
            onChangeValue={changeFromValue}
            onSelectAccount={setFromAccount}
          />
        )}
        {toAccount && (
          <BaseExchange
            account={toAccount}
            value={toValue}
            onChangeValue={changeToValue}
            onSelectAccount={setToAccount}
          />
        )}
      </Wrapper>
    );
  }
}

const translated = withTranslation();

const ConnectedExchange = connect(mapStateToProps, mapDispatchToProps)(Exchange);

export default translated(ConnectedExchange);
