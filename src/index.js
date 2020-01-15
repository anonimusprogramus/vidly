import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import logger from './http-app/services/logService'
// import App from './App'
// import AppRoute from './AppRoute'
import AppHttp from './AppHttp'

import * as serviceWorker from './serviceWorker'
import './index.css'
import 'bootstrap/dist/css/bootstrap.css'
import 'font-awesome/css/font-awesome.css'

logger.init()

ReactDOM.render(
  <BrowserRouter>
    <AppHttp />
  </BrowserRouter>,
  document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
