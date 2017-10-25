import React from 'react';
import ReactDOM from 'react-dom';

const title = 'My Minimal React Webpack Babel Setup';
document.write('<div id="app"/>');
ReactDOM.render(
  <div>{title}</div>,
  document.getElementById('app'),
);
