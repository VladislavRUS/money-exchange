import React from 'react';
import {
  Wrapper,
  From,
  To,
  Total,
  Title,
  Value,
  Information,
  Header,
  FromValue,
  ToValue,
  Subtitle,
  CommentInputWrapper,
  CornerIconWrapper,
  ExchangeButtonWrapper,
  TotalWrapper,
  Amount,
  Rate,
  ReverseButtonWrapper,
} from './ExchangeModal.styles';
import { connect } from 'react-redux';
import { Modal } from '../../../components/Modal';
import { withTranslation, WithTranslation } from 'react-i18next';
import { IApplicationState } from '../../../store';
import { IAccount } from '../../../store/accounts/types';
import { RegularInput } from '../../../components/RegularInput';
import { Dispatch, bindActionCreators } from 'redux';
import { setComment, exchange, reverse } from '../../../store/echange/actions';
import { FiCornerDownRight } from 'react-icons/fi';
import { RegularTextButton } from '../../../components/Buttons/RegularTextButton';
import { BaseButtonLook } from '../../../components/Buttons/BaseButton';
import { convertBetweenCurrencies } from '../../../utils/covertBetweenCurrencies';
import { AnimatedRoundedButton } from '../../../components/Buttons/AnimatedRoundedButton';
import { FiRefreshCw } from 'react-icons/fi';
import { getAccountSymbol } from '../../../utils/getAccountSymbol';
import { formatValueInLocale } from '../../../utils/formatMoneyInLocale';
import { i18n } from '../../../i18n';

const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators(
    {
      setComment,
      exchange,
      reverse,
    },
    dispatch,
  );

type TDispatchProps = ReturnType<typeof mapDispatchToProps>;

const mapStateToProps = (state: IApplicationState) => ({
  fromAccount: state.exchange.fromAccount,
  toAccount: state.exchange.toAccount,
  fromValue: state.exchange.fromValue,
  toValue: state.exchange.toValue,
  currencies: state.currencies.data,
  comment: state.exchange.comment,
  rates: state.rates.rates,
  isLoading: state.transactions.isLoading,
});

type TStateProps = ReturnType<typeof mapStateToProps>;

type TExchangeModalProps = React.ComponentProps<typeof Modal>;

type TProps = TStateProps & TDispatchProps & TExchangeModalProps & WithTranslation;

class ExchangeModal extends React.Component<TProps> {
  getAccountTitle(account: IAccount) {
    return `${account.currency} · ${account.title}`;
  }

  renderExchangeButton = () => {
    const { exchange, isLoading, t } = this.props;

    return (
      <ExchangeButtonWrapper>
        <RegularTextButton
          text={t(isLoading ? 'app.loading' : 'exchange.exchangeModal.exchange')}
          onClick={exchange}
          look={BaseButtonLook.SUCCESS}
          isDisabled={isLoading}
          dataTestId={'exchange'}
        />
      </ExchangeButtonWrapper>
    );
  };

  render() {
    const {
      isOpened,
      onRequestClose,
      fromAccount,
      toAccount,
      fromValue,
      toValue,
      currencies,
      comment,
      setComment,
      reverse,
      rates,
      t,
    } = this.props;

    if (!fromAccount || !toAccount || !rates) {
      return null;
    }

    const fromAccountTitle = this.getAccountTitle(fromAccount);
    const toAccountTitle = this.getAccountTitle(toAccount);

    const fromAccountCurrencySymbol = getAccountSymbol(fromAccount, currencies);
    const toAccountCurrencySymbol = getAccountSymbol(toAccount, currencies);

    const formattedFromValue = formatValueInLocale(i18n.language, fromValue);
    const formattedToValue = formatValueInLocale(i18n.language, toValue);

    const rate = convertBetweenCurrencies(fromAccount.currency, 1, toAccount.currency, rates);

    return (
      <Modal isOpened={isOpened} onRequestClose={onRequestClose} externalContent={this.renderExchangeButton}>
        <Wrapper>
          <Header>
            <ReverseButtonWrapper>
              <AnimatedRoundedButton onClick={reverse}>
                <FiRefreshCw size={24} color={'#8B959E'} />
              </AnimatedRoundedButton>
            </ReverseButtonWrapper>
            <FromValue>
              {fromAccountCurrencySymbol}
              {formattedFromValue}
            </FromValue>
            <ToValue>
              <CornerIconWrapper>
                <FiCornerDownRight size={32} />
              </CornerIconWrapper>
              {toAccountCurrencySymbol}
              {formattedToValue}
            </ToValue>
            <Subtitle>
              {t('exchange.exchangeModal.from')} {fromAccountTitle} {t('exchange.exchangeModal.to')} {toAccountTitle}
            </Subtitle>
            <CommentInputWrapper>
              <RegularInput
                value={comment}
                onChangeText={setComment}
                placeholder={t('exchange.exchangeModal.comment')}
                dataTestId={'comment'}
              />
            </CommentInputWrapper>
            <TotalWrapper>
              <Amount>
                {t('exchange.exchangeModal.amountTitle')}: {toAccountCurrencySymbol} {formattedToValue}
              </Amount>
              <Rate>
                {t('exchange.exchangeModal.rate')}: {fromAccountCurrencySymbol}1 = {toAccountCurrencySymbol}
                {formatValueInLocale(i18n.language, rate)}
              </Rate>
            </TotalWrapper>
          </Header>
          <Information>
            <From>
              <Title>{t('exchange.exchangeModal.from')}</Title>
              <Value>{fromAccountTitle}</Value>
            </From>
            <To>
              <Title>{t('exchange.exchangeModal.to')}</Title>
              <Value>{toAccountTitle}</Value>
            </To>
            <Total>
              <Title>{t('exchange.exchangeModal.total')}</Title>
              <Value>
                {toAccountCurrencySymbol}
                {formattedToValue}
              </Value>
            </Total>
          </Information>
        </Wrapper>
      </Modal>
    );
  }
}

const translated = withTranslation();
const ConnectedExchangeModal = connect(mapStateToProps, mapDispatchToProps)(ExchangeModal);

export default translated(ConnectedExchangeModal);
