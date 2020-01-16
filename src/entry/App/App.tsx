import React, { Suspense, lazy } from 'react';
import { Dispatch, bindActionCreators } from 'redux';
import { Switch, Route } from 'react-router-dom';
import { Routes } from '../../constants/Routes';
import { getRates } from '../../store/rates/actions';
import { connect } from 'react-redux';
import { SuspenseFallback } from '../../components/SuspenceFallback';

const Home = lazy(() => import('../../views/Home'));
const Exchange = lazy(() => import('../../views/Exchange'));

const UPDATE_INTERVAL_MS = 10000;

const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators(
    {
      getRates,
    },
    dispatch,
  );

type TDispatchProps = ReturnType<typeof mapDispatchToProps>;

type TProps = TDispatchProps;

class App extends React.Component<TProps> {
  ratesInterval: number | null = null;

  componentDidMount() {
    this.props.getRates();
    this.ratesInterval = window.setInterval(this.props.getRates, UPDATE_INTERVAL_MS);
  }

  componentWillUnmount() {
    this.ratesInterval && window.clearInterval(this.ratesInterval);
  }

  render() {
    return (
      <Suspense fallback={<SuspenseFallback />}>
        <Switch>
          <Switch>
            <Route path={Routes.EXCHANGE} component={Exchange} />
            <Route path={Routes.HOME} component={Home} />
          </Switch>
        </Switch>
      </Suspense>
    );
  }
}

const ConnectedApp = connect(null, mapDispatchToProps)(App);

export default ConnectedApp;
