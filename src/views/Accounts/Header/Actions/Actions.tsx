import React from 'react';

import { Wrapper, Action, Hint } from './Actions.styles';
import { FiArrowRight, FiPlus, FiRefreshCcw } from 'react-icons/fi';
import { withTranslation, WithTranslation } from 'react-i18next';
import { RoundedLink, RoundedLinkLook } from '../../../../components/RoundedLink';
import { Routes } from '../../../../constants/Routes';

const Actions: React.FC<WithTranslation> = ({ t }) => (
  <Wrapper>
    <Action>
      <RoundedLink to={Routes.TOP_UP}>
        <FiPlus size={24} color={'#000'} />
      </RoundedLink>
      <Hint>{t('accounts.hints.topUp')}</Hint>
    </Action>

    <Action>
      <RoundedLink to={Routes.EXCHANGE}>
        <FiRefreshCcw size={24} color={'#000'} />
      </RoundedLink>
      <Hint>{t('accounts.hints.exchange')}</Hint>
    </Action>
    <Action>
      <RoundedLink to={Routes.SEND} look={RoundedLinkLook.SUCCESS}>
        <FiArrowRight size={24} color={'#fff'} />
      </RoundedLink>
      <Hint>{t('accounts.hints.send')}</Hint>
    </Action>
  </Wrapper>
);

const translated = withTranslation();

export default translated(Actions);
