import React from 'react';
import PropTypes from 'prop-types';
import { RaisedButton, Table, TableHeader, TableBody, TableRow, TableHeaderColumn, TableRowColumn } from 'material-ui';


class AnalysisPicker extends React.Component {
  constructor(props) {
    super(props);

    this.selectItem = (analysis) => {
      this.props.pickAnalysis(analysis);
    };
  }

  render() {
    return (
      <div>
        <h2>Select a running report</h2>
        <Table
          selectable={false}
          showCheckboxes={false}
        >
          <TableHeader>
            <TableRow>
              <TableHeaderColumn>Name</TableHeaderColumn>
              <TableHeaderColumn>ID</TableHeaderColumn>
              <TableHeaderColumn>Actions</TableHeaderColumn>
            </TableRow>
          </TableHeader>
          <TableBody>
            {this.props.analyses.map(analysis => (
              <TableRow>
                <TableRowColumn>{analysis.name}</TableRowColumn>
                <TableRowColumn>{analysis.id}</TableRowColumn>
                <TableRowColumn><RaisedButton primary label="Select" onClick={() => this.selectItem(analysis)} /></TableRowColumn>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    );
  }
}

AnalysisPicker.propTypes = {
  analyses: PropTypes.array,
  pickAnalysis: PropTypes.func,
  push: PropTypes.func,
};

export default AnalysisPicker;
