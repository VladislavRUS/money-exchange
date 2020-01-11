import React from 'react';
import { Dispatch, bindActionCreators } from 'redux';
import { Wrapper, Title, ExchangeButtonWrapper, CloseWrapper, Overlay } from './Exchange.styles';
import { ExchangeFrom } from './ExchangeFrom';
import { ExchangeTo } from './ExchangeTo';
import { withTranslation, WithTranslation } from 'react-i18next';
import { RoundedButton } from '../../components/Buttons/RoundedButton';
import { FiMaximize2, FiX } from 'react-icons/fi';
import { reverse } from '../../store/echange/actions';
import { connect } from 'react-redux';
import { RoundedLink } from '../../components/RoundedLink';
import { Routes } from '../../constants/Routes';

const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators(
    {
      reverse,
    },
    dispatch,
  );

type TDispatchProps = ReturnType<typeof mapDispatchToProps>;

type TProps = TDispatchProps & WithTranslation;

const Exchange: React.FC<TProps> = ({ t, reverse }) => (
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

const translated = withTranslation();

const ConnectedExchange = connect(null, mapDispatchToProps)(Exchange);

export default translated(ConnectedExchange);
