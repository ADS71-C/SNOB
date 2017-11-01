import React from 'react';
import PropTypes from 'prop-types';
import { Tabs, Tab } from 'material-ui';
import DataDashboard from './data/dataDashboard'
import DataGraphs from './data/dataGraphs'

class AnalysisDashboardWrapped extends React.Component {
  render() {
    console.log(this.props.params);
    return (
      <div>
        <Tabs>
          <Tab label="Data">
            <DataDashboard />
          </Tab>
          <Tab label="Dashboard">
            <DataGraphs/>
          </Tab>
        </Tabs>
      </div>
    );
  }
}

AnalysisDashboardWrapped.propTypes = {
  params: PropTypes.shape({
    id: PropTypes.string,
  }),
};

export default AnalysisDashboardWrapped;
