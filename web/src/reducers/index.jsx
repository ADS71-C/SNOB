import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
// Reducers below
import { test } from './test';

export default combineReducers({
  test,
  routing: routerReducer,
});

