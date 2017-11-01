import React from 'react';
import PropTypes from 'prop-types';
import { Router, Route, IndexRoute } from 'react-router';
import { Overview } from './components/overview';
import AnalysisMaster from './components/analyses/analysisMaster'

const Routes = props => (
  <Router history={props.history}>
    <Route path="/" component={Overview}>
      <IndexRoute component={AnalysisMaster} />
    </Route>
  </Router>
);

Routes.propTypes = {
  history: PropTypes.shape({}),
};

export default Routes;
