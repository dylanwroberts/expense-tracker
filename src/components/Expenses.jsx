import React from 'react';
import Expense from './Expense';
import { connect } from 'react-redux';
import getFilteredExpenses from '../selectors/getFilteredExpenses';

//named export
export const Expenses = props => (
    <>
        {
            props.expenses.length === 0 ? (
                <p>No expenses</p>
            ) : (
                props.expenses.map(expense => <Expense key={expense.description} expense={expense} />)
            )
        }
        <div>
        </div>
    </>
);

const mapStateToProps = state => ({
    expenses: getFilteredExpenses(state.expenses, state.filters)
});

export default connect(mapStateToProps)(Expenses);