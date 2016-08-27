import React from 'react'
import Route from 'react-router/lib/Route'
import IndexRoute from 'react-router/lib/IndexRoute'

import Layout from '../components/Layout'
import Splash from '../components/Splash'
import NotFound from '../components/NotFound'

export default (
  <Route path="/" component={Layout}>
    <IndexRoute component={Splash} />
    <Route path="/404" component={NotFound} />
  </Route>
)
