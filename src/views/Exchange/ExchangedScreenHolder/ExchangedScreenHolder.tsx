import React from 'react';
import { ScreenHolder } from '../../../components/ScreenHolder';
import { IApplicationState } from '../../../store';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import { clearExchange, setHasExchanged } from '../../../store/echange/actions';
import { GotButtonWrapper, Wrapper, Summary, Top, Bottom, CheckIconWrapper } from './ExchangedScreenHolder.styles';
import { RegularTextButton } from '../../../components/Buttons/RegularTextButton';
import { withTranslation, WithTranslation } from 'react-i18next';
import { BaseButtonLook } from '../../../components/Buttons/BaseButton';
import { getAccountSymbol } from '../../../utils/getAccountSymbol';
import { formatValueInLocale } from '../../../utils/formatMoneyInLocale';
import { i18n } from '../../../i18n';
import { FiCheckCircle } from 'react-icons/fi';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import { Routes } from '../../../constants/Routes';

const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators(
    {
      setHasExchanged,
      clearExchange,
    },
    dispatch,
  );

type TDispatchProps = ReturnType<typeof mapDispatchToProps>;

const mapStateToProps = (state: IApplicationState) => ({
  hasExchanged: state.exchange.hasExchanged,
  transaction: state.transactions.lastTransaction,
  accounts: state.accounts.list,
  currencies: state.currencies.data,
});

type TStateProps = ReturnType<typeof mapStateToProps>;

type TProps = TStateProps & TDispatchProps & WithTranslation & RouteComponentProps;

class ExchangedScreenHolder extends React.Component<TProps> {
  get fromAccount() {
    const { transaction } = this.props;

    if (!transaction) {
      return null;
    }

    return this.props.accounts.find(account => account.id === transaction.fromAccountId);
  }

  get toAccount() {
    const { transaction } = this.props;

    if (!transaction) {
      return null;
    }

    return this.props.accounts.find(account => account.id === transaction.toAccountId);
  }

  onGot = () => {
    this.props.clearExchange();
    this.props.history.replace(Routes.ACCOUNTS);
  };

  render() {
    const { transaction, currencies, hasExchanged, t } = this.props;

    console.log(hasExchanged);

    if (!transaction || !this.fromAccount || !this.toAccount || !currencies) {
      return null;
    }

    const fromAccountSymbol = getAccountSymbol(this.fromAccount, currencies);
    const toAccountSymbol = getAccountSymbol(this.toAccount, currencies);

    const formattedFromValue = formatValueInLocale(i18n.language, transaction.fromAccountValue);
    const formattedToValue = formatValueInLocale(i18n.language, transaction.toAccountValue);

    return (
      <ScreenHolder isVisible={hasExchanged}>
        <Wrapper>
          <Summary>
            <CheckIconWrapper>
              <FiCheckCircle color={'rgb(139, 149, 158)'} size={80} />
            </CheckIconWrapper>

            <Top>{t('exchange.youExchanged')}</Top>
            <Bottom>
              {fromAccountSymbol}
              {formattedFromValue} {t('exchange.to')} {toAccountSymbol}
              {formattedToValue}
            </Bottom>
          </Summary>
          <GotButtonWrapper>
            <RegularTextButton text={t('exchange.gotIt')} onClick={this.onGot} look={BaseButtonLook.SUCCESS} />
          </GotButtonWrapper>
        </Wrapper>
      </ScreenHolder>
    );
  }
}

const translated = withTranslation();
const ConnectedScreenProps = connect(mapStateToProps, mapDispatchToProps)(ExchangedScreenHolder);

export default translated(withRouter(ConnectedScreenProps));
