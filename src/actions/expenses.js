import { v4 as uuid } from 'uuid';
import { database, push, ref, get, remove, update} from '../firebase/firebase';
// Add expense Action Generator
export const addExpense = (expense) => ({
    type: 'ADD_EXPENSE',
    expense
})

export const startAddExpense = (expenseData = {}) => {
    return (dispatch, getState) => {
        const uid = getState().auth.uid
        const {
            description = '',
            note = '',
            amount = 0,
            createdAt = 0
        } = expenseData

        const expense = {description, note, amount, createdAt}

        push(ref(database, `users/${uid}/expenses`), expense).then((ref) => {
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

export const startRemoveExpense = ({id}) => {
return async (dispatch, getState) => {
    const uid = getState().auth.uid
    await remove(ref(database, `users/${uid}/expenses/${id}`))

    dispatch(removeExpense({id}))
}
}

export const editExpense= (id, updates) => ({
    type: 'EDIT_EXPENSE',
    id,
    updates
});

export const startEditExpense = (id, updates) => {
    return  async (dispatch, getState) => {
        const uid = getState().auth.uid
        await update(ref(database, `users/${uid}/expenses/${id}`), updates)
        dispatch(editExpense(id, updates))
    }

}

// SET_EXPENSES

export const setExpenses = (expenses) => ({
    type: 'SET_EXPENSES',
    expenses
})

export const startSetExpenses = () => {
    return async (dispatch, getState) => {
      const uid = getState().auth.uid
      const snapshot =  await get(ref(database, `users/${uid}/expenses`))
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