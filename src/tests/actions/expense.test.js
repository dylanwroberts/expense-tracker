import {
    addExpense,
    removeExpense,
    editExpense
} from '../../actions/expense';

import {
    REMOVE_EXPENSE,
    EDIT_EXPENSE,
    ADD_EXPENSE
} from '../../constants/actionTypes';

test('should create an action to remove expenses', () => {
    const action = removeExpense('123abc');

    expect(action).toEqual({
        type: REMOVE_EXPENSE,
        id: '123abc'
    });
});

test('should create an action to edit an expense', () => {
    const action = editExpense('abc123', { note: 'new note!' });

    expect(action).toEqual({
        type: EDIT_EXPENSE,
        id: 'abc123',
        updates: { note: 'new note!' }
    });
});

test('should create an action to add an expense', () => {
    const expenseData = {
        description: 'Rent',
        amount: 109500,
        createdAt: 1000,
        note: 'This was rent for last month'
    };

    const action = addExpense(expenseData);

    expect(action).toEqual({
        type: ADD_EXPENSE,
        expense: {
            //expect.any means any string is valid
            id: expect.any(String),
            ...expenseData
        }
    });
});

test('should create an action to add an expense with defaults', () => {
    const expense = addExpense();
    expect(expense).toEqual({
        type: ADD_EXPENSE,
        expense: {
            id: expect.any(String),
            description: '',
            note: '',
            amount: 0,
            createdAt: 0
        }
    });
});