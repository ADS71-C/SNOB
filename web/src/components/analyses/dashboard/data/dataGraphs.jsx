import React from 'react';
import PropTypes from 'prop-types';
import { ScatterChart, Scatter, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ZAxis } from 'recharts'

class DataGraphs extends React.Component {
  render() {
    return (
      <ScatterChart
        title="Score over time"
        width={1800}
        height={600}
        margin={{
 top: 20, right: 20, bottom: 10, left: 10,
}}
      >
        <CartesianGrid />
        <XAxis dataKey="x" name="Time" />
        <YAxis dataKey="y" name="Score" />
        <Tooltip cursor={{ strokeDasharray: '3 3' }} />
        <Legend />

        <Scatter
          name="Plot 1"
          data={this.props.data.map(item => ({ x: item.metadata.date, y: item.report.score, z: item.message }))}
          line
        />
      </ScatterChart>
    );
  }
}

DataGraphs.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({
    message: PropTypes.string,
    author: PropTypes.string,
    reports: PropTypes.shape({
      score: PropTypes.number,
    }),
    metadata: PropTypes.shape({
      date: PropTypes.number,
    }),
  })).isRequired,
};

export default DataGraphs;
