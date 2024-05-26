import { configureStore, combineReducers} from "@reduxjs/toolkit";
import expensesReducer from '../reducers/expenses'
import filtersReducer from '../reducers/filters'

export default () => {
    const store = configureStore({
    reducer: combineReducers({
    expenses: expensesReducer,
    filters: filtersReducer
})}, 
window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)
    return store;
}

//store creation

