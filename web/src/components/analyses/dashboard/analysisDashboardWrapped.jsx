import React from 'react';
import PropTypes from 'prop-types';
import { Tabs, Tab, LinearProgress } from 'material-ui';
import { connect } from 'react-redux';
// custom
import { fetchDataset } from '../../../actions/dataset';
import DataDashboard from './data/dataDashboard';
import DataGraphs from './data/dataGraphs';

class AnalysisDashboardWrapped extends React.Component {
  constructor(props) {
    super(props);

    this.props.fetchDataset(this.props.params.id);
  }

  render() {
    return (
      <div>
        {this.props.isFetching ? <LinearProgress mode="indeterminate" /> :
        <Tabs>
          <Tab label="Dashboard">
            <DataGraphs data={this.props.data} />
          </Tab>
          <Tab label="Data">
            <DataDashboard data={this.props.data} />
          </Tab>
        </Tabs>
        }
      </div>
    );
  }
}

AnalysisDashboardWrapped.propTypes = {
  params: PropTypes.shape({
    id: PropTypes.string,
  }),
  isFetching: PropTypes.boolean,
  data: PropTypes.array,
  fetchDataset: PropTypes.func,
};

function mapStateToProps(state, ownProps) {
  return {
    params: ownProps.params,
    isFetching: state.dataset.isFetching,
    data: state.dataset.dataset,
  };
}


export default connect(mapStateToProps, {
  fetchDataset,
})(AnalysisDashboardWrapped);
