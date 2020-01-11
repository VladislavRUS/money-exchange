import React, { Suspense, lazy } from 'react';
import { Wrapper, NavbarWrapper } from './Accounts.styles';
import { Header } from './Header';
import { Switch, Route } from 'react-router-dom';
import { Routes } from '../../constants/Routes';
import { InlineNavbar } from '../../components/InlineNavbar';
import { INavbarLink } from '../../components/InlineNavbar/InlineNavbar';

const AccountsList = lazy(() => import('./AccountsList'));
const Transactions = lazy(() => import('./Transactions'));

const links: INavbarLink[] = [
  {
    to: Routes.ACCOUNTS,
    title: 'Accounts',
    exact: true,
  },
  {
    to: Routes.TRANSACTIONS,
    title: 'Transactions',
  },
];

const Accounts = () => (
  <Wrapper>
    <Header />
    <NavbarWrapper>
      <InlineNavbar links={links} />
    </NavbarWrapper>
    <Suspense fallback={null}>
      <Switch>
        <Route path={Routes.TRANSACTIONS} component={Transactions} />
        <Route path={Routes.ACCOUNTS} component={AccountsList} />
      </Switch>
    </Suspense>
  </Wrapper>
);

export default Accounts;
