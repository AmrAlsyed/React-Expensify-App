import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import AppRouter from './routers/AppRouter'
import configurestore from './store/configurestore'
import 'normalize.css/normalize.css'
import './styles/styles.scss'

const store = configurestore()

const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
)
ReactDOM.createRoot(document.getElementById('app')).render(jsx)