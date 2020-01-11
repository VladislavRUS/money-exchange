import React, { Suspense, lazy } from 'react';
import { Switch, Route } from 'react-router-dom';
import { Routes } from '../../constants/Routes';

const Home = lazy(() => import('../../views/Home'));
const Exchange = lazy(() => import('../../views/Exchange'));

const App = () => (
  <Suspense fallback={null}>
    <Switch>
      <Switch>
        <Route path={Routes.EXCHANGE} component={Exchange} />
        <Route path={Routes.HOME} component={Home} />
      </Switch>
    </Switch>
  </Suspense>
);

export default App;
