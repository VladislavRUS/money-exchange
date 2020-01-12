import React, { Suspense, lazy } from 'react';
import { Dispatch, bindActionCreators } from 'redux';
import { Switch, Route } from 'react-router-dom';
import { Routes } from '../../constants/Routes';
import { getRates } from '../../store/rates/actions';
import { connect } from 'react-redux';

const Home = lazy(() => import('../../views/Home'));
const Exchange = lazy(() => import('../../views/Exchange'));

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
  componentDidMount() {
    //this.props.getRates();
  }

  render() {
    return (
      <Suspense fallback={null}>
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
