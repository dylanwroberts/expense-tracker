import expensesReducer from '../../reducers/expense';
import {
    ADD_EXPENSE,
    REMOVE_EXPENSE,
    EDIT_EXPENSE
} from '../../constants/actionTypes';
import expenses from '../fixtures/expenses';

test('should set defaultState', () => {
    const state = expensesReducer(undefined, { type: '@@INIT' });
    expect(state).toEqual([]);
});

test('should add an expense', () => {
    const newExpense = {
        id: '4',
        amount: 123,
        description: 'test expense',
        createdAt: 0
    };

    const action = {
        type: ADD_EXPENSE,
        expense: newExpense
    };
    const state = expensesReducer(expenses, action);
    expect(state).toEqual([...expenses, newExpense]);
});

test('should remove an expense by ID', () => {
    const action = {
        type: REMOVE_EXPENSE,
        id: '2'
    };
    const state = expensesReducer(expenses, action);
    expect(state).toEqual([expenses[0], expenses[2]]);
});

test('should not remove an expense if ID not found', () => {
    const action = {
        type: REMOVE_EXPENSE,
        id: '-123'
    };
    const state = expensesReducer(expenses, action);
    expect(state).toEqual(expenses);
});

test('should edit an expense', () => {
    const action = {
        type: EDIT_EXPENSE,
        id: '1',
        updates: {
            description: 'A new description'
        }
    };

    const state = expensesReducer(expenses, action);
    expect(state[0].description).toBe('A new description');
});

test('should NOT edit an expense if it does not exist', () => {
    const action = {
        type: EDIT_EXPENSE,
        id: '-123',
        updates: {
            description: 'A new description'
        }
    };

    const state = expensesReducer(expenses, action);
    expect(state[0].description).toBe('Food');
});