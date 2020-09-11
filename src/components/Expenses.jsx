import React from 'react';
import Expense from './Expense';
import { connect } from 'react-redux';
import getFilteredExpenses from '../selectors/getFilteredExpenses';

const Expenses = props => (
    <div>
        {props.expenses.map(expense => <Expense key={expense.description} expense={expense} />)}
    </div>
);

const mapStateToProps = state => ({
    expenses: getFilteredExpenses(state.expenses, state.filters)
});

export default connect(mapStateToProps)(Expenses);