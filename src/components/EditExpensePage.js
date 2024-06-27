import React from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch} from "react-redux";
import { startEditExpense , startRemoveExpense, setExpenses} from "../actions/expenses";
import ExpenseForm from "./ExpenseForm";
import { history } from "../routers/AppRouter";

const EditExpensePage = () => {
    const { id } = useParams();
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
                    history.push('/')
                }}
             />
             <button onClick={() => {
                dispatch(startRemoveExpense({id: expenseToEdit.id}))
                history.push('/')
             }}>Remove</button>
        </div>
    );
}

export default EditExpensePage