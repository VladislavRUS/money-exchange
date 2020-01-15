import React from 'react';
import { bindActionCreators, Dispatch } from 'redux';
import { CloseWrapper, ContinueButtonWrapper, ExchangeButtonWrapper, Overlay, Title, Wrapper } from './Exchange.styles';
import { withTranslation, WithTranslation } from 'react-i18next';
import { AnimatedRoundedButton } from '../../components/Buttons/AnimatedRoundedButton';
import { FiMaximize2, FiX } from 'react-icons/fi';
import { reverse, setBaseAccount, setFromAccount, setToAccount } from '../../store/echange/actions';
import { connect } from 'react-redux';
import { RoundedLink } from '../../components/RoundedLink';
import { Routes } from '../../constants/Routes';
import { IApplicationState } from '../../store';
import { ExchangeFrom } from './ExchangeFrom';
import { ExchangeTo } from './ExchangeTo';
import { RegularTextButton } from '../../components/Buttons/RegularTextButton';
import { Modal } from '../../components/Modal';
import { BaseButtonLook } from '../../components/Buttons/BaseButton';

const mapStateToProps = (state: IApplicationState) => ({
  accounts: state.accounts.list,
  isContinueAvailable: state.exchange.fromValue !== 0,
});

type TStateProps = ReturnType<typeof mapStateToProps>;

const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators(
    {
      reverse,
      setBaseAccount,
      setFromAccount,
      setToAccount,
    },
    dispatch,
  );

type TDispatchProps = ReturnType<typeof mapDispatchToProps>;

type TProps = TStateProps & TDispatchProps & WithTranslation;

type TState = {
  isModalOpened: boolean;
};

class Exchange extends React.Component<TProps, TState> {
  constructor(props: TProps) {
    super(props);

    this.state = {
      isModalOpened: false,
    };
  }

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
    this.setState({ isModalOpened: true });
  };

  onModalClose = () => {
    this.setState({ isModalOpened: false });
  };

  render() {
    const { isContinueAvailable, reverse, t } = this.props;

    return (
      <Wrapper>
        <Overlay />
        <Title>{t('exchange.title')}</Title>
        <ExchangeButtonWrapper>
          <AnimatedRoundedButton onClick={reverse}>
            <FiMaximize2 color={'#0075eb'} size={24} />
          </AnimatedRoundedButton>
        </ExchangeButtonWrapper>
        <CloseWrapper>
          <RoundedLink to={Routes.HOME}>
            <FiX color={'#0075eb'} size={24} />
          </RoundedLink>
        </CloseWrapper>

        <ExchangeFrom />
        <ExchangeTo />

        <ContinueButtonWrapper>
          <RegularTextButton
            text={t('exchange.continue')}
            onClick={this.onModalOpen}
            look={BaseButtonLook.SUCCESS}
            isDisabled={!isContinueAvailable}
          />
        </ContinueButtonWrapper>

        <Modal isOpened={this.state.isModalOpened} onRequestClose={this.onModalClose} />
      </Wrapper>
    );
  }
}

const translated = withTranslation();

const ConnectedExchange = connect(mapStateToProps, mapDispatchToProps)(Exchange);

export default translated(ConnectedExchange);
