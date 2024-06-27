import React from 'react';
import { connect } from 'react-redux';
import ExpenseListItem from './ExpenseListItem';
import selectExpenses from '../selectors/expenses';
import { useSelector } from 'react-redux';

export const ExpenseList = () => {
    const expenses = useSelector((state) => state.expenses)
    const filters = useSelector((state) => state.filters)
    const selectedExpenses = selectExpenses(expenses, filters)
  return (
    <div>
    {
      selectedExpenses.length === 0 ? (
        <p>No expenses</p>
      ) : (
        selectedExpenses.map((expense) => {
            return <ExpenseListItem key={expense.id} {...expense} />;
          })
        )
    }
  </div>
  )
}

export default ExpenseList;
