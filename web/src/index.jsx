import React from 'react';
import ReactDOM from 'react-dom';
import logger from 'redux-logger';
import persistState from 'redux-localstorage';
import { MuiThemeProvider } from 'material-ui';
import { Provider } from 'react-redux';
import { applyMiddleware, compose, createStore } from 'redux';
import createHistory from 'history/createBrowserHistory';
import { routerMiddleware } from 'react-router-redux';
// Custom components below
import Router from './router';
import reducers from './reducers/index';
import './main.css';

const history = createHistory();

const localstore = compose(
  persistState(),
);

const store = createStore(
  reducers,
  applyMiddleware(routerMiddleware(history)),
  applyMiddleware(logger),
  localstore,
);

document.write('<div id="app"/>');
ReactDOM.render(
  <Provider store={store}>
    <MuiThemeProvider>
      <Router history={history} />
    </MuiThemeProvider>
  </Provider>,
  document.getElementById('app'),
);
