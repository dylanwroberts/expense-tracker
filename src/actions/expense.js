import {
    ADD_EXPENSE,
    REMOVE_EXPENSE,
    EDIT_EXPENSE
} from '../constants/actionTypes';

import { v4 as createID } from 'uuid';

export const addExpense = ({
    description = '',
    note = '',
    amount = 0,
    createdAt = 0
} = {}) => ({
    type: ADD_EXPENSE,
    expense: {
        id: createID(),
        description,
        note,
        amount,
        createdAt
    }
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