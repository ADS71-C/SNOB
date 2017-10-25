import React from 'react'
import {BrowserRouter, Route, Link} from 'react-router-dom'
import { Overview } from './components/overview'

export const Router = () => (
<BrowserRouter>
  <div>
    <Route path="/" component={Overview}>
    </Route>
  </div>
</BrowserRouter>
)