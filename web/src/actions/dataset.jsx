import request from 'superagent-es6-promise';
import jsonp from 'superagent-jsonp';

const DATASET_FETCHING = 'DATASET_FETCHING';
const DATASET_FETCHED = 'DATASET_FETCHED';

const data = [
  {
    _id: '59f9aa4320fd9b6d5918334f',
    metadata: {
      date: 1,
      url: 815331700297396228,
      type: 'post',
      message_words: [
        'geweldige',
        'conference',
        'diepe',
        'buiging',
        'fan',
        'erbij',
        'sinds',
        'vanavond',
      ],
    },
    message: '@claudiadebreij \ngeweldige conference\ndiepe buiging\nfan erbij sinds vanavond',
    author: 'Monsalut',
    reports:
      {
        id: '59f9aa2620fd9b6d5918332c',
        score: 0.27744827711886255,
        scored_words: [
          'geweldige',
          'conference',
          'diepe',
          'buiging',
          'fan',
          'erbij',
          'sinds',
          'vanavond',
        ],
      },
  }, {
    _id: '59f9aa4320fd9b6d5918334f',
    metadata: {
      date: 2,
      url: 815331700297396228,
      type: 'post',
      message_words: [
        'geweldige',
        'conference',
        'diepe',
        'buiging',
        'fan',
        'erbij',
        'sinds',
        'vanavond',
      ],
    },
    message: '@claudiadebreij \ngeweldige conference\ndiepe buiging\nfan erbij sinds vanavond',
    author: 'Monsalut',
    reports:
      {
        id: '59f9aa2620fd9b6d5918332c',
        score: 0.71744827711886255,
        scored_words: [
          'geweldige',
          'conference',
          'diepe',
          'buiging',
          'fan',
          'erbij',
          'sinds',
          'vanavond',
        ],
      },
  },
  {
    _id: '59f9aa4320fd9b6d59183351',
    metadata: {
      date: 3,
      url: 815331700330926080,
      type: 'post',
      message_words: [
        'happy',
        '2017',
        '200k',
        'in',
        '2017',
        'hoop',
        't',
        'voor',
        'je',
      ],
    },
    message: '@hetisrotjoch @hetisrotjoch @hetisrotjoch happy 2017!! 200k in 2017? hoop t voor je!',
    author: 'R4z3r #TeamRotkind',
    reports:
      {
        id: '59f9aa2620fd9b6d5918332c',
        score: 0.13891384809231808,
        scored_words: [
          'happy',
          'in',
          'hoop',
          'voor',
          'je',
        ],
      },
  },
];

function fetchDataset(analysisId) {
  return (dispatch) => {
    dispatch({ type: DATASET_FETCHING, analysisId });

    request.get('https://api.rickrongen.nl/snob/smug_messages')
      .auth('ds_snobby_snob', 'queenelizabeth')
      .set('accept', 'application/json')
      .then(result => dispatch({ type: DATASET_FETCHED, data: result.body._items }))
      .catch(err => console.log(err));
  };
}

export {
  DATASET_FETCHED,
  DATASET_FETCHING,
  fetchDataset,
};
