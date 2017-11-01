const DATASET_FETCHING = 'DATASET_FETCHING';
const DATASET_FETCHED = 'DATASET_FETCHED';

function fetchDataset(analysisId){
  return dispatch => {
    dispatch({type: DATASET_FETCHING});

    setTimeout(() => {
      dispatch({type: 'DATASET_FETCHED', data: []});
    })
  }
}