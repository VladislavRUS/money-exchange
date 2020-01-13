import React from 'react';
import { Dispatch, bindActionCreators } from 'redux';
import { Wrapper, Title, ExchangeButtonWrapper, CloseWrapper, Overlay } from './Exchange.styles';
import { withTranslation, WithTranslation } from 'react-i18next';
import { RoundedButton } from '../../components/Buttons/RoundedButton';
import { FiMaximize2, FiX } from 'react-icons/fi';
import { reverse, setBaseAccount, setFromAccount, setToAccount } from '../../store/echange/actions';
import { connect } from 'react-redux';
import { RoundedLink } from '../../components/RoundedLink';
import { Routes } from '../../constants/Routes';
import { IApplicationState } from '../../store';
import { ExchangeFrom } from './ExchangeFrom';
import { ExchangeTo } from './ExchangeTo';

const mapStateToProps = (state: IApplicationState) => ({
  accounts: state.accounts.list,
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

  render() {
    const { reverse, t } = this.props;

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

        <ExchangeFrom />
        <ExchangeTo />
      </Wrapper>
    );
  }
}

const translated = withTranslation();

const ConnectedExchange = connect(mapStateToProps, mapDispatchToProps)(Exchange);

export default translated(ConnectedExchange);
