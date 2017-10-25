import React from 'react'
import ReactDOM from 'react-dom'
import logger from 'redux-logger'
import persistState from 'redux-localstorage'
import { Provider } from 'react-redux'
import { applyMiddleware, createStore } from 'redux'
// Custom components below
import { Router } from './router'
import reducers from './reducers/index'

let store = createStore(
  reducers,
  applyMiddleware(logger),
  applyMiddleware(persistState)
)

document.write('<div id="app"/>')
ReactDOM.render(
  <Provider store={store}>
    <Router/>
  </Provider>,
  document.getElementById('app'),
)
