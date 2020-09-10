import {
    ADD_EXPENSE,
    REMOVE_EXPENSE,
    EDIT_EXPENSE
} from '../constants/actionTypes';

export const addExpense = expenseObject => ({
    type: ADD_EXPENSE,
    expense: expenseObject
});

export const removeExpense = id => ({
    type: REMOVE_EXPENSE,
    id
});

export const editExpense = (id, updatesObject) => ({
    type: EDIT_EXPENSE,
    id,
    updates: updatesObject
});