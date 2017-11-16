import React from 'react';
import PropTypes from 'prop-types';
import { Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn } from 'material-ui';

const DataDashboard = props => (
  <Table>
    <TableHeader>
      <TableRow>
        <TableHeaderColumn>Tweet</TableHeaderColumn>
        <TableHeaderColumn>Author</TableHeaderColumn>
        <TableHeaderColumn>Score</TableHeaderColumn>
        <TableHeaderColumn>Date</TableHeaderColumn>
      </TableRow>
    </TableHeader>
    <TableBody>
      {props.data.map(item => (
        <TableRow key={item._id}>
          <TableRowColumn>{item.message}</TableRowColumn>
          <TableRowColumn>{item.author}</TableRowColumn>
          <TableRowColumn>{item.report.score}</TableRowColumn>
          <TableRowColumn>{item.metadata.date}</TableRowColumn>
        </TableRow>
      ))}
    </TableBody>
  </Table>
);

DataDashboard.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({
    message: PropTypes.string,
    author: PropTypes.string,
    reports: PropTypes.shape({
      score: PropTypes.number,
    }),
    metadata: PropTypes.shape({
      date: PropTypes.number,
    }),
  })),
};

export default DataDashboard;
