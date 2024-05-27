import React from "react";
import { useStore } from "react-redux";
import ExpenseListItem from "./ExpenseListItem";
import selectExpenses from '../selectors/expenses'

const ExpenseList = () => {
  const state =  useStore().getState()
  const filteredExpenses = selectExpenses(state.expenses, state.filters)
    return (
        <div>
        <h1>Expense List</h1>
        {filteredExpenses.length > 0 ? (filteredExpenses.map((expense) => {
            return <ExpenseListItem key={expense.id} {...expense}/>
        })) : (<p>no expenses</p>)}
        </div>
    )
}

export default ExpenseList