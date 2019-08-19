import React from 'react'

import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Main from './pages/main'
import Peoples from './pages/peoples'

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Main} />
      <Route path="/peoples/:id" component={Peoples} />
    </Switch>
  </BrowserRouter> 
)

export default Routes
