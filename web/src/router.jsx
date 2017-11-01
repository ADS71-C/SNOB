import React from 'react';
import PropTypes from 'prop-types';
import { Route } from 'react-router-dom';
import { ConnectedRouter } from 'react-router-redux';
import { Overview } from './components/overview';

export const Router = props => (
  <ConnectedRouter history={props.history}>
    <div>
      <Route path="/" component={Overview} />
    </div>
  </ConnectedRouter>
);

Router.propTypes = {
  history: PropTypes.shape({}),
};

export default Router;
