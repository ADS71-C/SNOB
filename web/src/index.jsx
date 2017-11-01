import React from 'react';
import ReactDOM from 'react-dom';
import logger from 'redux-logger';
import persistState from 'redux-localstorage';
import { MuiThemeProvider } from 'material-ui';
import { Provider } from 'react-redux';
import { applyMiddleware, compose, createStore } from 'redux';
import thunk from 'redux-thunk';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import { syncHistoryWithStore, routerMiddleware } from 'react-router-redux';
import { hashHistory } from 'react-router';
// Custom components below
import Routes from './router';
import reducers from './reducers/index';
import './main.css';

const persist = compose(persistState());

const store = createStore(
  reducers,
  applyMiddleware(logger),
  applyMiddleware(thunk),
  applyMiddleware(routerMiddleware(hashHistory)),
  persist,
);

const history = syncHistoryWithStore(hashHistory, store);

document.write('<div id="app"/>');
ReactDOM.render(
  <Provider store={store}>
    <MuiThemeProvider muiTheme={getMuiTheme()}>
      <Routes history={history} />
    </MuiThemeProvider>
  </Provider>,
  document.getElementById('app'),
);
