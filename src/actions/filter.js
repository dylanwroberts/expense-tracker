import {
    SET_FILTER_TEXT,
    SET_START_DATE,
    SET_END_DATE,
    SORT_BY_DATE,
    SORT_BY_AMOUNT
} from '../constants/actionTypes';

export const setFilterText = (text = '') => ({
    type: SET_FILTER_TEXT,
    text
});

export const setStartDate = startDate => ({
    type: SET_START_DATE,
    startDate
});

export const setEndDate = endDate => ({
    type: SET_END_DATE,
    endDate
});

export const sortByDate = () => ({ type: SORT_BY_DATE });

export const sortByAmount = () => ({ type: SORT_BY_AMOUNT });