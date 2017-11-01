import React from 'react';
import PropTypes from 'prop-types';
import { Router, Route, IndexRoute } from 'react-router';
import { Overview } from './components/overview';
import AnalysisPickerWrapped from './components/analyses/picker/analysisPickerWrapped';
import AnalysisDashboardWrapped from './components/analyses/dashboard/analysisDashboardWrapped';

const Routes = props => (
  <Router history={props.history}>
    <Route path="/" component={Overview}>
      <IndexRoute component={AnalysisPickerWrapped} />
      <Route path="analysis" component={AnalysisPickerWrapped}>
        <Route path=":id" component={AnalysisDashboardWrapped} />
      </Route>
    </Route>
  </Router>
);

Routes.propTypes = {
  history: PropTypes.shape({}),
};

export default Routes;
