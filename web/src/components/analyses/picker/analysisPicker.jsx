import React from 'react';
import PropTypes from 'prop-types';
import { MenuItem, RaisedButton, SelectField } from 'material-ui';

class AnalysisPicker extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      analysisId: undefined,
    };

    this.pickItem = (event, index, value) => this.setState({ analysisId: value });
    this.confirm = () => {
      this.props.pickAnalysis(this.props.analyses.find(item => item.id === this.state.analysisId));
      this.props.push(`/analysis/${this.state.analysisId}`);
    };
  }

  render() {
    return (
      <div>
        <SelectField
          value={this.state.analysisId}
          onChange={this.pickItem}
        >
          {this.props.analyses.map(item => <MenuItem key={item.id} value={item.id} primaryText={item.name} />)}
        </SelectField>
        <RaisedButton label="Submit" primary onClick={this.confirm} />
      </div>
    );
  }
}

AnalysisPicker.propTypes = {
  analyses: PropTypes.array,
  pickAnalysis: PropTypes.func,
  push: PropTypes.func
};

export default AnalysisPicker;
