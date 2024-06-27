import React from "react";
import { NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import { startLogout } from "../actions/auth";

const Header = () => {
    const dispatch = useDispatch()
    return (
        <header>
            <h1>Expensify</h1>
            <NavLink to={'/dashboard'} >Dashboard</NavLink>
            <NavLink to={'/create'}>Create Expense</NavLink>
            <button onClick={() => {
                dispatch(startLogout())
            }}>Logout</button>
        </header>
    )
}

export default Header