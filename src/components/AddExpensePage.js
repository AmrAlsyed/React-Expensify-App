import React from "react";
import { useDispatch } from "react-redux";
import ExpenseForm from "./ExpenseForm";
import { startAddExpense } from "../actions/expenses";
import { history } from "../routers/AppRouter";


const AddExpensePage = (props) => {
    const dispatch = useDispatch()
    return (
        <div>
        <div className="page-header">
            <div className="content-container">
        <h1 className="page-header__title">Add Expense</h1>
            </div>
        </div>
       <div className="content-container">
       <ExpenseForm
        onSubmit={(expense) => {
            dispatch(startAddExpense(expense));
            history.push('/dashboard')

        }}
         />
       </div>
    </div>
    )
};

export default AddExpensePage