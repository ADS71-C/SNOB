const DATASET_FETCHING = 'DATASET_FETCHING';
const DATASET_FETCHED = 'DATASET_FETCHED';

const data = [
  {
    tweet: 'Hello World',
    author: 'GOD',
    score: 0.79,
    location: 'EHV',
  },
  {
    tweet: 'What is this',
    author: 'GOD',
    score: 0.5,
    location: 'EHV',
  }, {
    tweet: 'I dont know',
    author: 'GOD',
    score: 0.01,
    location: 'EHV',
  },
];

function fetchDataset(analysisId) {
  return (dispatch) => {
    dispatch({ type: DATASET_FETCHING, analysisId });

    setTimeout(() => {
      dispatch({ type: DATASET_FETCHED, data });
    }, 2000);
  };
}

export {
  DATASET_FETCHED,
  DATASET_FETCHING,
  fetchDataset,
};
