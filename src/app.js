import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import AppRouter from './routers/AppRouter'
import configurestore from './store/configurestore'
import { addExpense } from './actions/expenses'
import { setTextFilter } from './actions/filters'
import getVisibleExpenses from './selectors/expenses'
import 'normalize.css/normalize.css'
import './styles/styles.scss'

const store = configurestore()
store.dispatch(addExpense({description: 'Water Bill', amount: 4500}))
store.dispatch(addExpense({description: 'Gas Bill', createdAt: 0}))
store.dispatch(addExpense({description: 'Rent', amount: 109500}))

const state = store.getState()
const visibleExpenses = getVisibleExpenses(state.expenses, state.filters)
console.log(visibleExpenses)

const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
)
ReactDOM.createRoot(document.getElementById('app')).render(jsx)