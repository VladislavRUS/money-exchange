import React from 'react';
import { NavigationSidebar } from './NavigationSidebar';
import { PageWrapper, Wrapper } from './App.styles';
import { Switch, Route, Redirect } from 'react-router-dom';
import { Accounts } from '../Accounts';
import { Routes } from '../../constants/Routes';

const App = () => (
  <Wrapper>
    <NavigationSidebar />
    <PageWrapper>
      <Switch>
        <Route path={Routes.ACCOUNTS} component={Accounts} />
        <Redirect to={Routes.ACCOUNTS} />
      </Switch>
    </PageWrapper>
  </Wrapper>
);

export default App;
