import React from 'react'
import ReactDOM from 'react-dom'

import {Router} from './router';

document.write('<div id="app"/>')
ReactDOM.render(
  <Router />,
  document.getElementById('app'),
)
