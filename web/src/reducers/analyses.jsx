import * as actions from '../actions/analyses';

export function analyses(state = {
  isFetching: false,
  analyses: [],
  activeAnalysis: {},
}, action) {
  switch (action.type) {
    case actions.ANALYSES_FETCHING:
      return Object.assign({}, state, {
        isFetching: true,
        analyses: [],
      });
    case actions.ANALYSES_FETCHED:
      return Object.assign({}, state, {
        isFetching: false,
        analyses: action.data,
      });
    case actions.ANALYSIS_SET:
      return Object.assign({}, state, {
        activeAnalysis: action.analysis
      });
    default:
      return state;
  }
}
