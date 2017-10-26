import React from 'react';
import PropTypes from 'prop-types';
import { Router as ConnectedRouter, Route } from 'react-router-dom';
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
