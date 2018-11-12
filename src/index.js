import React, {Suspense, lazy} from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { ConnectedRouter } from 'connected-react-router'
import store, { history } from './store'
import routes from './routes';
import 'sanitize.css/sanitize.css'
import './index.css'
//import Raven from 'raven-js'
//import {sentry_url} from './data/config'

//Raven.config(sentry_url).install()

const target = document.querySelector('#root')

render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <Suspense fallback={<div>Loading...</div>}>
        {routes}
        </Suspense>
    </ConnectedRouter>
  </Provider>,
  target
)
