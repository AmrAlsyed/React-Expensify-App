import React from "react"
import { useSelector } from "react-redux"
import { Link } from "react-router-dom"
import numeral from "numeral";
import filteredExpenses from '../selectors/expenses'
import expensesTotal from "../selectors/expenses-total"

const ExpenseSummary = () => {
const expenses = useSelector((state) => state.expenses)
const filters = useSelector((state) => state.filters)
const expenseCount = filteredExpenses(expenses, filters)
const total = expensesTotal(expenseCount)
const formattedTotal = numeral(total / 100).format('$0,0.00')
const expenseWord = expenseCount.length === 1 ? 'expense' : 'expenses';

// const countFun = () => {
//     if(expenseCount.length === 1) {

//     }
// }
return (
    <div className="page-header">
     <div className="content-container">
     {<h1 className="page-header__title">Viewing <span>{expenseCount.length}</span> {expenseWord} totalling <span>{formattedTotal}</span></h1>}
     <div className="page-header__actions">
      <Link className="button" to={'/create'}>Add Expense</Link>
     </div>
     </div>
    </div>
)
}

export default ExpenseSummary