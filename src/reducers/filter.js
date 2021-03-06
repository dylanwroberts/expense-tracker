import moment from 'moment';
import {
    SET_FILTER_TEXT,
    SET_START_DATE,
    SET_END_DATE,
    SORT_BY_DATE,
    SORT_BY_AMOUNT
} from '../constants/actionTypes';

//by default, show only expenses this month
const defaultState = {
    text: '',
    startDate: moment().startOf('month'),
    endDate: moment().endOf('month'),
    sortBy: 'date'
};

const filterReducer = (state = defaultState, action) => {
    switch(action.type) {
        case SET_FILTER_TEXT:
            return { ...state, text: action.text };
        case SET_START_DATE:
            return { ...state, startDate: action.startDate };
        case SET_END_DATE:
            return { ...state, endDate: action.endDate };
        case SORT_BY_DATE:
            return { ...state, sortBy: 'date' };
        case SORT_BY_AMOUNT:
            return { ...state, sortBy: 'amount' };
        default:
            return state;
    }
};

export default filterReducer;