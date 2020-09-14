import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => (
    <div>
        <h1>Expense Tracker</h1>
        <NavLink activeClassName="nav-link-active" to="/">Home</NavLink>
        <NavLink activeClassName="nav-link-active" to="/add">Add</NavLink>
    </div>
);

export default Header;