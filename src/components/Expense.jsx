import React from 'react';

export const Expense = props => (
    <div>
        <p>{props.expense.description}</p>
        <p>{props.expense.amount}</p>
    </div>
);

export default Expense;