import React from 'react';
import ReactDOM from 'react-dom';
import logger from 'redux-logger';
import persistState from 'redux-localstorage';
import { MuiThemeProvider } from 'material-ui';
import { Provider } from 'react-redux';
import { applyMiddleware, compose, createStore } from 'redux';
import createHistory from 'history/createHashHistory';
import { routerMiddleware } from 'react-router-redux';
import thunk from 'redux-thunk';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
// Custom components below
import Router from './router';
import reducers from './reducers/index';
import './main.css';

const history = createHistory();

const persist = compose(persistState());

const store = createStore(
  reducers,
  applyMiddleware(logger),
  applyMiddleware(thunk),
  applyMiddleware(routerMiddleware(history)),
  persist,
);

document.write('<div id="app"/>');
ReactDOM.render(
  <Provider store={store}>
    <MuiThemeProvider muiTheme={getMuiTheme()}>
      <Router history={history} />
    </MuiThemeProvider>
  </Provider>,
  document.getElementById('app'),
);
