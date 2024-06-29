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
         <div className="page-header">
            <div className="content-container">
                <h1 className="page-header__title">Edit Expense</h1>
            </div>
         </div>
        <div className="content-container">
        <ExpenseForm
                expense={expenseToEdit}
                onSubmit={(expense) => {
                    dispatch(startEditExpense(expenseToEdit.id, expense))
                    history.push('/dashboard')
                }}
             />
             <button className="button button--secondary" onClick={() => {
                dispatch(startRemoveExpense({id: expenseToEdit.id}))
                history.push('/dashboard')
             }}>Remove Expense</button>
        </div>
        </div>
    );
}

export default EditExpensePage