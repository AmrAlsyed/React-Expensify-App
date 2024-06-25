import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import AppRouter from './routers/AppRouter'
import configurestore from './store/configureStore'
import { startSetExpenses } from './actions/expenses'
import 'normalize.css/normalize.css'
import './styles/styles.scss'
import './firebase/firebase'

const store = configurestore()

const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
)
ReactDOM.createRoot(document.getElementById('app')).render(<p>Loading...</p>)

store.dispatch(startSetExpenses()).then(() => {
ReactDOM.createRoot(document.getElementById('app')).render(jsx)

})
