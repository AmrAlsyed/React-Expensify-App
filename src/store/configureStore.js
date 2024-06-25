import { configureStore, combineReducers, applyMiddleware, compose} from "@reduxjs/toolkit";
import expensesReducer from '../reducers/expenses'
import filtersReducer from '../reducers/filters'
import {thunk} from 'redux-thunk'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default () => {
    const store = configureStore({
    reducer: combineReducers({
    expenses: expensesReducer,
    filters: filtersReducer
})}, 
composeEnhancers(applyMiddleware(thunk))
)
    return store;
}

//store creation

