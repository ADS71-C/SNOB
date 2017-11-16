import request from 'superagent-es6-promise';

const DATASET_FETCHING = 'DATASET_FETCHING';
const DATASET_FETCHED = 'DATASET_FETCHED';

function fetchDataset(analysisId) {
  return (dispatch) => {
    dispatch({ type: DATASET_FETCHING, analysisId });

    request.get('https://api.rickrongen.nl/snob/smug_messages')
      .auth('ds_snobby_snob', 'queenelizabeth')
      .set('accept', 'application/json')
      .query({
        max_results: 100,
        page: Math.floor(Math.random() * (1000 - 1) + 1),
      })
      .then(result => dispatch({ type: DATASET_FETCHED, data: result.body._items }))
      .catch(err => console.log(err));
  };
}

export {
  DATASET_FETCHED,
  DATASET_FETCHING,
  fetchDataset,
};
