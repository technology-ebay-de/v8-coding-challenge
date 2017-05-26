import React from 'react'
import ReactDOM from 'react-dom'

import App from './components/App'
import registerServiceWorker from './registerServiceWorker'

import './index.css'

ReactDOM.render(
  <App />,
  // eslint-disable-next-line no-undef
  document.getElementById('root'),
)
registerServiceWorker()
