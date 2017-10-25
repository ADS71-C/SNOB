import React from 'react'
import {AppBar} from 'material-ui'

import './overview.css'
export const Overview = props => (
  <div>
    <AppBar title="S.N.O.B."/>

    <div className="overview-content">
      <div className="overview-content-inner">
        <h1>Hello World</h1>
      </div>
    </div>
  </div>
)