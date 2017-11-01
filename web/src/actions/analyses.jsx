import { push, } from 'react-router-redux';
import { hashHistory } from 'react-router'

const ANALYSES_FETCHING = 'ANALYSES_FETCHING';
const ANALYSES_FETCHED = "'ANALYSES_FETCHED";
const ANALYSIS_SET = 'ANALYSIS_SET';

function fetchAnalyses() {
  return (dispatch) => {
    dispatch({ type: ANALYSES_FETCHING });

    setTimeout(() => {
      dispatch({
        type: ANALYSES_FETCHED,
        data: [
          {
            id: 'deadbeef',
            name: 'hello World',
          },
          {
            id: 'denkhetniet',
            name: 'Analysis 2',
          },
        ],
      });
    }, 500);
  };
}

function pickAnalysis(analysis) {
  return (dispatch) => {
    dispatch({ type: ANALYSIS_SET, analysis });
    hashHistory.push(`/analysis/${analysis.id}`);
  };
}

export {
  ANALYSES_FETCHED,
  ANALYSES_FETCHING,
  ANALYSIS_SET,
  fetchAnalyses,
  pickAnalysis,
};
