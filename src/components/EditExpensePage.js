import React from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch} from "react-redux";
import { startEditExpense , startRemoveExpense, setExpenses} from "../actions/expenses";
import { useNavigate } from "react-router-dom";
import ExpenseForm from "./ExpenseForm";

const EditExpensePage = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const expenseToEdit = useSelector((state) => 
        state.expenses.find((expense) => expense.id === id)
    );
    return (
        <div>
            <ExpenseForm
                expense={expenseToEdit}
                onSubmit={(expense) => {
                    dispatch(startEditExpense(expenseToEdit.id, expense))
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