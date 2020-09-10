import {
    ADD_EXPENSE,
    REMOVE_EXPENSE,
    EDIT_EXPENSE
} from '../constants/actionTypes';

const defaultState = [];

const expenseReducer = (state = defaultState, action) => {
    switch(action.type) {
        case ADD_EXPENSE:
            return [...state, action.expense];
        case REMOVE_EXPENSE:
            return state.filter(({ id }) => id !== action.id);
        case EDIT_EXPENSE:
            return state.map(expense => {
                if(id === action.id) {
                    return { ...expense, ...action.updates };
                }
                return expense;
            });
        default:
            return state;
    }
};

export default expenseReducer;