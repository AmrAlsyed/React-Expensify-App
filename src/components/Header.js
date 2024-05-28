import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => (
    <header>
        <h1>Expensify</h1>
        <NavLink to={'/'} >Home</NavLink>
        <NavLink to={'/create'}>Create</NavLink>
    </header>
)

export default Header