import React, { Suspense, lazy } from 'react';
import { Wrapper, NavbarWrapper } from './Accounts.styles';
import { Header } from './Header';
import { Switch, Route } from 'react-router-dom';
import { Routes } from '../../constants/Routes';
import { InlineNavbar } from '../../components/InlineNavbar';
import { withTranslation, WithTranslation } from 'react-i18next';

const AccountsList = lazy(() => import('./AccountsList'));
const Transactions = lazy(() => import('./Transactions'));

const links = [
  {
    to: Routes.ACCOUNTS,
    titleTranslationKey: 'app.links.accounts',
    exact: true,
  },
  {
    to: Routes.TRANSACTIONS,
    titleTranslationKey: 'app.links.transactions',
  },
];

const Accounts: React.FC<WithTranslation> = ({ t }) => (
  <Wrapper>
    <Header />
    <NavbarWrapper>
      <InlineNavbar links={links.map(link => ({ ...link, title: t(link.titleTranslationKey) }))} />
    </NavbarWrapper>
    <Suspense fallback={null}>
      <Switch>
        <Route path={Routes.TRANSACTIONS} component={Transactions} />
        <Route path={Routes.ACCOUNTS} component={AccountsList} />
      </Switch>
    </Suspense>
  </Wrapper>
);

const translated = withTranslation();

export default translated(Accounts);
