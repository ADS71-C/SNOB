import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
// Reducers below
import { analyses } from './analyses';
import {dataset} from './dataset'

export default combineReducers({
  analyses,
  dataset,
  routing: routerReducer,
});

