import React, { Suspense, lazy } from 'react';
import { NavigationSidebar } from './NavigationSidebar';
import { Page, PageWrapper, Wrapper } from './Home.styles';
import { Redirect, Switch, Route } from 'react-router-dom';
import { Routes } from '../../constants/Routes';
import { SuspenseFallback } from '../../components/SuspenceFallback';

const Accounts = lazy(() => import('../../views/Accounts'));
const Cards = lazy(() => import('../../views/Cards'));
const Exchange = lazy(() => import('../../views/Exchange'));

const Home = () => (
  <Wrapper>
    <NavigationSidebar />
    <PageWrapper>
      <Page>
        <Suspense fallback={<SuspenseFallback />}>
          <Switch>
            <Route path={Routes.CARDS} component={Cards} />
            <Route path={Routes.EXCHANGE} component={Exchange} />
            <Route path={Routes.ACCOUNTS} component={Accounts} />
            <Redirect to={Routes.ACCOUNTS} />
          </Switch>
        </Suspense>
      </Page>
    </PageWrapper>
  </Wrapper>
);

export default Home;
