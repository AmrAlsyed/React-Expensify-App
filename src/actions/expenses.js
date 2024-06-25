import { v4 as uuid } from 'uuid';
import { database, push, ref, get } from '../firebase/firebase';
// Add expense Action Generator
export const addExpense = (expense) => ({
    type: 'ADD_EXPENSE',
    expense
})

export const startAddExpense = (expenseData = {}) => {
    return (dispatch) => {
        const {
            description = '',
            note = '',
            amount = 0,
            createdAt = 0
        } = expenseData

        const expense = {description, note, amount, createdAt}

        push(ref(database, 'expenses'), expense).then((ref) => {
            dispatch(addExpense({
                id: ref.key,
                ...expense
            }))
        })
    }
}

export const removeExpense = ({id}) => ({
    type: 'REMOVE_EXPENSE',
    id
})

export const editExpense= (id, updates) => ({
    type: 'EDIT_EXPENSE',
    id,
    updates
});

// SET_EXPENSES

export const setExpenses = (expenses) => ({
    type: 'SET_EXPENSES',
    expenses
})

export const startSetExpenses = () => {
    return async (dispatch) => {
      const snapshot =  await get(ref(database, 'expenses'))
      const expenses = [];
      snapshot.forEach((childSnapShot) => {
          expenses.push({
              id: childSnapShot.key,
              ...childSnapShot.val()
          })
      })
      dispatch(setExpenses(expenses))
      
        
    }
}