import React from 'react';
import { Wrapper, LinkContent, StyledNavLink } from './Links.styles';
import { Routes } from '../../../../constants/Routes';

import { withTranslation, WithTranslation } from 'react-i18next';

const links = [
  {
    to: Routes.ACCOUNTS,
    nameTranslationKey: 'app.links.accounts',
  },
  {
    to: Routes.CARDS,
    nameTranslationKey: 'app.links.cards',
  },
];

const Links: React.FC<WithTranslation> = ({ t }) => (
  <Wrapper>
    {links.map(link => (
      <StyledNavLink to={link.to} key={link.to}>
        <LinkContent>{t(link.nameTranslationKey)}</LinkContent>
      </StyledNavLink>
    ))}
  </Wrapper>
);

const translated = withTranslation();

export default translated(Links);
