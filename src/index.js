import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'

import AppRouter from './router'
import store from './store'
import { hydrateAuthState } from './feature/auth/authActions'

store.dispatch(hydrateAuthState())

ReactDOM.render(
    <Provider store={store}>
        <AppRouter />
    </Provider>,
    document.getElementById('root')
)
