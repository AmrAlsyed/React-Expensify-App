import { configureStore, combineReducers, applyMiddleware, compose} from "@reduxjs/toolkit";
import {thunk} from 'redux-thunk'
import expensesReducer from '../reducers/expenses'
import filtersReducer from '../reducers/filters'
import authReducer from '../reducers/auth'


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default () => {
    const store = configureStore({
    reducer: combineReducers({
    expenses: expensesReducer,
    filters: filtersReducer,
    auth: authReducer
})}, 
composeEnhancers(applyMiddleware(thunk))
)
    return store;
}

//store creation

