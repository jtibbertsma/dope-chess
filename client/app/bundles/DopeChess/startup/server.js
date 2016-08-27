import React from 'react'
import ReactOnRails from 'react-on-rails'
import { Provider } from 'react-redux'
import { match, RouterContext } from 'react-router'

import routes from '../routes/routes'
import dopeChessStore from '../store/dopeChessStore'

const DopeChessApp = (props, railsContext) => {
  const store = ReactOnRails.getStore('dopeChessStore')

  let error
  let redirectLocation
  let routeProps
  const { location } = railsContext

  match({ routes, location }, (_error, _redirectLocation, _routeProps) => {
    error = _error
    redirectLocation = _redirectLocation
    routeProps = _routeProps
  })

  if (error || redirectLocation) {
    return { error, redirectLocation }
  }

  return (
    <Provider store={store}>
      <RouterContext {...routeProps} />
    </Provider>
  )
}

ReactOnRails.register({ DopeChessApp })
ReactOnRails.registerStore({ dopeChessStore })
