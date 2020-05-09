import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'
import {Router} from 'react-router-dom'
import history from './history'
import store from './store'
import App from './app'
import {ThemeProvider} from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline'
import './socket'
import {theme} from './theme'

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <Provider store={store}>
      <Router history={history}>
        <CssBaseline />
        <App />
      </Router>
    </Provider>
  </ThemeProvider>,
  document.getElementById('app')
)
