import { DATASET_FETCHING, DATASET_FETCHED } from '../actions/dataset';

export function dataset(state = {
  isFetching: false,
  dataset: [],
  analysis: undefined,
}, action) {
  switch (action.type) {
    case DATASET_FETCHING:
      return Object.assign({}, state, {
        isFetching: true,
        dataset: [],
        analysis: action.analysisId,
      });
    case DATASET_FETCHED:
      return Object.assign({}, state, {
        isFetching: false,
        dataset: action.data,
      });
    default:
      return state;
  }
}
