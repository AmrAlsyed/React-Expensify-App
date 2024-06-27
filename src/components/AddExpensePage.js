import React from "react";
import { useDispatch } from "react-redux";
import ExpenseForm from "./ExpenseForm";
import { startAddExpense } from "../actions/expenses";
import { history } from "../routers/AppRouter";


const AddExpensePage = (props) => {
    const dispatch = useDispatch()
    return (
        <div>
        <h1>Add Expense</h1>
        <ExpenseForm
        onSubmit={(expense) => {
            dispatch(startAddExpense(expense));
            history.push('/dashboard')

        }}
         />
    </div>
    )
};

export default AddExpensePage