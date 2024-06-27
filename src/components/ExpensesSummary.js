import React from "react"
import { useSelector } from "react-redux"
import filteredExpenses from '../selectors/expenses'
import expensesTotal from "../selectors/expenses-total"
import numeral from "numeral";

const ExpenseSummary = () => {
const expenses = useSelector((state) => state.expenses)
const filters = useSelector((state) => state.filters)
const expenseCount = filteredExpenses(expenses, filters)
const total = expensesTotal(expenseCount)
const formattedTotal = numeral(total / 100).format('$0,0.00')
// const countFun = () => {
//     if(expenseCount.length === 1) {

//     }
// }
return (
    <div>
      {expenseCount.length > 0 && (
        expenseCount.length === 1 ? <p>Viewing {expenseCount.length} expense totalling {formattedTotal}</p> : <p>Viewing {expenseCount.length} expenses totalling {formattedTotal}</p>
      )}
    </div>
)
}

export default ExpenseSummary