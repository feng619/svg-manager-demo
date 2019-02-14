import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import promiseMiddleware from 'redux-promise-middleware'

import App from './App'
import reducers from './redux'
import * as serviceWorker from './serviceWorker'

import './index.scss'

const middlewares = [
  promiseMiddleware // 'PENDING', 'FULFILLED', 'REJECTED'
]

const store = createStore(reducers, applyMiddleware(...middlewares))

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)

serviceWorker.unregister()
