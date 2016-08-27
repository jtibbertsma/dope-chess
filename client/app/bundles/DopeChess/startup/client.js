import React from 'react'
import ReactOnRails from 'react-on-rails'
import { Provider } from 'react-redux'
import Router from 'react-router/lib/Router'
import browserHistory from 'react-router/lib/browserHistory'
import { syncHistoryWithStore } from 'react-router-redux'

import routes from '../routes/routes'
import dopeChessStore from '../store/dopeChessStore'

const DopeChessApp = (props, railsContext) => {
  const store = ReactOnRails.getStore('dopeChessStore')
  const history = syncHistoryWithStore(browserHistory, store)

  return (
    <Provider store={store}>
      <Router history={history} children={routes} />
    </Provider>
  )
}

ReactOnRails.register({ DopeChessApp })
ReactOnRails.registerStore({ dopeChessStore })
