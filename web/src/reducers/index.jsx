import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
// Reducers below
import { analyses } from './analyses';

export default combineReducers({
  analyses,
  routing: routerReducer,
});

