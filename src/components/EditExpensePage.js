import React from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch} from "react-redux";
import { editExpense , startRemoveExpense} from "../actions/expenses";
import { useNavigate } from "react-router-dom";
import ExpenseForm from "./ExpenseForm";

const EditExpensePage = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const expenses = useSelector((state) => state.expenses)
    const expenseToEdit = expenses.find((expense) => expense.id === useParams().id)
    return (
        <div>
            <ExpenseForm
                expense={expenseToEdit}
                onSubmit={(expense) => {
                    dispatch(editExpense(expenseToEdit.id, expense))
                    navigate('/')
                }}
             />
             <button onClick={() => {
                dispatch(startRemoveExpense({id: expenseToEdit.id}))
                navigate('/')
             }}>Remove</button>
        </div>
    );
}

export default EditExpensePage