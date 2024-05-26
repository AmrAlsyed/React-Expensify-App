import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import ExpenseForm from "./ExpenseForm";
import { addExpense } from "../actions/expenses";


const AddExpensePage = (props) => {
    const navigate = useNavigate();
    const dispatch = useDispatch()
    return (
        <div>
        <h1>Add Expense</h1>
        <ExpenseForm
        onSubmit={(expense) => {
            dispatch(addExpense(expense));
            navigate('/')

        }}
         />
    </div>
    )
};

export default AddExpensePage