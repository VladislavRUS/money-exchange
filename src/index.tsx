import React from 'react';
import ReactDOM from 'react-dom';
import 'normalize.css';
import './index.css';
import { App } from './entry/App';
import { createBrowserHistory } from 'history';
import configureStore from './configureStore';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import './i18n';

export const history = createBrowserHistory();
// @ts-ignore
const initialState = window.initialReduxState;
const store = configureStore(history, initialState);

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <App />
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root'),
);

// For keyboard navigation
document.body.addEventListener('mousedown', () => {
  document.body.classList.add('using-mouse');
});

document.body.addEventListener('keydown', (event: KeyboardEvent) => {
  if (event.key === 'Tab') {
    document.body.classList.remove('using-mouse');
  }
});
