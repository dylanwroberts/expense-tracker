import { createStore, combineReducers } from 'redux';
import expenseReducer from '../reducers/expense';
import filterReducer from '../reducers/filter';

const rootReducer = combineReducers({
    expenses: expenseReducer,
    filters: filterReducer
});

export default createStore(rootReducer);