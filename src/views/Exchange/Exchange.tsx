import React from 'react';
import { bindActionCreators, Dispatch } from 'redux';
import { CloseWrapper, ContinueButtonWrapper, ReverseButtonWrapper, Overlay, Title, Wrapper } from './Exchange.styles';
import { withTranslation, WithTranslation } from 'react-i18next';
import { AnimatedRoundedButton } from '../../components/Buttons/AnimatedRoundedButton';
import { FiRefreshCw, FiX } from 'react-icons/fi';
import {
  reverse,
  setBaseAccount,
  setFromAccount,
  setToAccount,
  setExchangeModalVisibility,
} from '../../store/echange/actions';
import { connect } from 'react-redux';
import { RoundedLink } from '../../components/RoundedLink';
import { Routes } from '../../constants/Routes';
import { IApplicationState } from '../../store';
import { ExchangeFrom } from './ExchangeFrom';
import { ExchangeTo } from './ExchangeTo';
import { RegularTextButton } from '../../components/Buttons/RegularTextButton';
import { BaseButtonLook } from '../../components/Buttons/BaseButton';
import { ExchangeModal } from './ExchangeModal';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import { ExchangedScreenHolder } from './ExchangedScreenHolder';

const mapStateToProps = (state: IApplicationState) => ({
  accounts: state.accounts.list,
  isContinueAvailable:
    state.exchange.fromValue !== 0 &&
    state.exchange.fromAccount &&
    state.exchange.fromValue < state.exchange.fromAccount.value,
  isExchangeModalVisible: state.exchange.isExchangeModalVisible,
});

type TStateProps = ReturnType<typeof mapStateToProps>;

const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators(
    {
      reverse,
      setBaseAccount,
      setFromAccount,
      setToAccount,
      setExchangeModalVisibility,
    },
    dispatch,
  );

type TDispatchProps = ReturnType<typeof mapDispatchToProps>;

type TProps = TStateProps & TDispatchProps & WithTranslation & RouteComponentProps;

class Exchange extends React.Component<TProps> {
  componentDidMount() {
    const { accounts } = this.props;

    if (accounts.length > 1) {
      const [first, second] = accounts;

      this.props.setBaseAccount(first);
      this.props.setFromAccount(first);
      this.props.setToAccount(second);
    }
  }

  onModalOpen = () => {
    this.props.setExchangeModalVisibility(true);
  };

  onModalClose = () => {
    this.props.setExchangeModalVisibility(false);
  };

  render() {
    const { isContinueAvailable, reverse, isExchangeModalVisible, t } = this.props;

    return (
      <Wrapper>
        <Overlay />
        <Title>{t('exchange.title')}</Title>
        <ReverseButtonWrapper>
          <AnimatedRoundedButton onClick={reverse} dataTestId={'reverse'}>
            <FiRefreshCw color={'#0075eb'} size={24} />
          </AnimatedRoundedButton>
        </ReverseButtonWrapper>
        <CloseWrapper>
          <RoundedLink to={Routes.HOME}>
            <FiX color={'#0075eb'} size={24} />
          </RoundedLink>
        </CloseWrapper>

        <ExchangeFrom />
        <ExchangeTo />

        {!isExchangeModalVisible && (
          <ContinueButtonWrapper>
            <RegularTextButton
              text={t('exchange.continue')}
              onClick={this.onModalOpen}
              look={BaseButtonLook.SUCCESS}
              isDisabled={!isContinueAvailable}
              dataTestId={'continue'}
            />
          </ContinueButtonWrapper>
        )}

        <ExchangeModal isOpened={isExchangeModalVisible} onRequestClose={this.onModalClose} />
        <ExchangedScreenHolder />
      </Wrapper>
    );
  }
}

const translated = withTranslation();

const ConnectedExchange = connect(mapStateToProps, mapDispatchToProps)(Exchange);

export default translated(withRouter(ConnectedExchange));
