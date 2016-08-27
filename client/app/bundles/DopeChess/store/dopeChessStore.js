import { createStore, combineReducers, applyMiddleware } from 'redux'
import { browserHistory } from 'react-router'
import { routerReducer, routerMiddleware } from 'react-router-redux'

const reducer = combineReducers({
  routing: routerReducer
})

const middleware = applyMiddleware(
  routerMiddleware(browserHistory)
)

export default (props, railsContext) => {
  return createStore(reducer, props, middleware)
}
