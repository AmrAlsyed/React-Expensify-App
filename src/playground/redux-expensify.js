import { configureStore, combineReducers, createSlice } from "@reduxjs/toolkit";
import { v4 as uuid } from 'uuid';



// Add expense Action Generator
const addExpense = ({description = '', note = '', amount = 0, createdAt = 0} = {}) => ({
    type: 'ADD_EXPENSE',
    expense: {
        id: uuid(),
        description,
        note,
        amount,
        createdAt
    }
})

const removeExpense = ({id}) => ({
    type: 'REMOVE_EXPENSE',
    id
})

const editExpense= (id, updates) => ({
    type: 'EDIT_EXPENSE',
    id,
    updates
});

const setTextFilter = (text = '') => ({
    type: 'SET_TEXT_FILTER',
    text
})

const sortByAmount = () => ({
    type: 'SORT_BY_AMOUNT'
})
const sortByDate = () => ({
    type: 'SORT_BY_DATE'
})

const setStartDate = (startDate = undefined) => ({
    type: 'SET_START_DATE',
    startDate
})

const setEndDate = (endDate = undefined) => ({
    type: 'SET_END_DATE',
    endDate
})
//Expenses Reducer

const expensesReducerDefaultState = []

const expensesReducer = (state = expensesReducerDefaultState, action) => {
switch(action.type) {
    case 'ADD_EXPENSE':
       return [
        ...state,
        action.expense
       ]
    case 'REMOVE_EXPENSE' :
        return state.filter(({id}) => id !== action.id)
    case 'EDIT_EXPENSE' :
        return state.map((expense) => {
            if (expense.id === action.id) {
                return {
                    ...expense,
                    ...action.updates
                }
            } else {
                return expense
            }
        })
    default:
        return state
}
};


//Filter Reducer
const filtersReducerDefaultState = {
    text: '',
    sortBy: 'date',
    startDate: undefined,
    endDate: undefined
}

const filtersReducer = (state = filtersReducerDefaultState, action) => {
    switch(action.type) {
        case 'SET_TEXT_FILTER':
        return {
            ...state,
            text: action.text
        }
        case 'SORT_BY_AMOUNT':
            return {
                ...state,
                sortBy: 'amount'
            }
        case 'SORT_BY_DATE':
            return {
                ...state,
                sortBy: 'date'
            }
        case 'SET_START_DATE':
            return {
                ...state,
                startDate: action.startDate
            }
            case 'SET_END_DATE':
                return {
                    ...state,
                    endDate: action.endDate
                }
        default:
            return state
    }
}


const store = configureStore({
    reducer: combineReducers({
    expenses: expensesReducer,
    filters: filtersReducer
})}
)

const getVisibleExpenses = (expenses, {text, sortBy, startDate, endDate}) => {
    return expenses.filter((expense) => {
        const startDateMatch = typeof startDate !== 'number' || expense.createdAt >= startDate;
        const endDateMatch = typeof endDate !== 'number' || expense.createdAt <= endDate;
        const textMatch = typeof text !== 'string' || expense.description.toLowerCase().includes(text.toLowerCase());

        return startDateMatch && endDateMatch && textMatch
    }).sort((a,b) => {
        if(sortBy === 'date') {
            return a.createdAt < b.createdAt ? 1 : -1
        } else if(sortBy === 'amount') {
            return a.amount < b.amount ? 1 : -1
        }
    })
}

store.subscribe(() => {
    const state = store.getState();
    const visibleExpenses = getVisibleExpenses(state.expenses, state.filters)
    console.log(visibleExpenses)
})

const expenseOne = store.dispatch(addExpense({description: 'Rent', amount: 100, createdAt: -21000}));
const expenseTwo = store.dispatch(addExpense({description: 'Coffee', amount: 300, createdAt: -1000}));


// store.dispatch(removeExpense({id: expenseOne.expense.id}))
// store.dispatch(editExpense(expenseTwo.expense.id, {amount: 500}))

// store.dispatch(setTextFilter('rent'))
// store.dispatch(setTextFilter())

store.dispatch(sortByAmount())
// store.dispatch(sortByDate()) 

// store.dispatch(setStartDate())
// store.dispatch(setStartDate())
// store.dispatch(setEndDate())
// store.dispatch(setTextFilter('Coffee'))

// const demoState = {
//     expenses: [{
//         id: 'adasddsads',
//         description: 'January Rent',
//         note: 'This was the final payment',
//         amount: 34555,
//         createdAt: 0
//     }],
//     filters: {
//         text: 'rent',
//         sortBy: 'amount',
//         startDate: undefined,
//         endDate: undefined
//     }
// }




// const expenseSlice = createSlice({
//     name:'expenses',
//     initialState: expensesReducerDefaultState,
//     reducers: {
//         expenses: (state) => {
//             state
//         }
//     }
// })
// const filtersSlice = createSlice({
//     name:'filters',
//     initialState: filtersReducerDefaultState,
//     reducers: {
       
//     }
// })

// Store creation
// const store = configureStore({
//     reducer: {
//         expenses: expenseSlice.reducer,
//         filters: filtersSlice.reducer
//     }
// })