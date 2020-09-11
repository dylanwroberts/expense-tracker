import React from 'react';
import ExpenseForm from '../components/ExpenseForm';
import { connect } from 'react-redux';
import { addExpense } from '../actions/expense';

const AddExpense = props => (
    <div>
        <ExpenseForm buttonText="add" onSubmit={expense => {
            props.dispatch(addExpense(expense));
        }} />
    </div>
);

export default connect()(AddExpense);