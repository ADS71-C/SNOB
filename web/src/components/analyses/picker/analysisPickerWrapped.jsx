import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { CircularProgress } from 'material-ui';
import { push } from 'react-router-redux';
// Custom Imports
import { fetchAnalyses, pickAnalysis } from '../../../actions/analyses';
import AnalysisPicker from './analysisPicker';

class AnalysisPickerWrapped extends React.Component {
  componentDidMount() {
    this.props.fetchAnalyses();
  }

  render() {
    return (
      <div>
        {this.props.children}
        {this.props.isFetching ? <CircularProgress/> : <div>
          <AnalysisPicker
            analyses={this.props.analyses}
            pickAnalysis={this.props.pickAnalysis}
            push={this.props.push}
          />
        </div>}
      </div>
    );
  }
}

AnalysisPickerWrapped.propTypes = {
  analyses: PropTypes.array.isRequired,
  isFetching: PropTypes.bool.isRequired,
  fetchAnalyses: PropTypes.func.isRequired,
  pickAnalysis: PropTypes.func.isRequired,
  push: PropTypes.func.isRequired,
};

function mapStateToProps(state) {
  return {
    analyses: state.analyses.analyses,
    isFetching: state.analyses.isFetching,
  };
}

export default connect(mapStateToProps, {
  fetchAnalyses,
  pickAnalysis,
  push,
})(AnalysisPickerWrapped);
