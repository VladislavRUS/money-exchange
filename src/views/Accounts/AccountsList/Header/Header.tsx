import React from 'react';
import { Wrapper, Title } from './Header.styles';
import { withTranslation, WithTranslation } from 'react-i18next';

const Header: React.FC<WithTranslation> = ({ t }) => (
  <Wrapper>
    <Title>{t('accounts.allAccounts')}</Title>
  </Wrapper>
);

const translated = withTranslation();

export default translated(Header);
