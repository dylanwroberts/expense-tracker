import { TestScheduler } from 'jest';
import {
    setFilterText,
    setStartDate,
    setEndDate, sortByAmount, sortByDate
} from '../../actions/filter';

import {
    SET_FILTER_TEXT,
    SET_START_DATE,
    SET_END_DATE, SORT_BY_AMOUNT, SORT_BY_DATE
} from '../../constants/actionTypes';

import moment from 'moment';

test('should create an action to set the start date', () => {
    const action = setStartDate(moment(0));

    expect(action).toEqual({
        type: SET_START_DATE,
        startDate: moment(0)
    });
});

test('should create an action to set the end date', () => {
    const action = setEndDate(moment(0));

    expect(action).toEqual({
        type: SET_END_DATE,
        endDate: moment(0)
    });
});

test('should create an action to set the filter text', () => {
    const action = setFilterText('hello');

    expect(action).toEqual({
        type: SET_FILTER_TEXT,
        text: 'hello'
    });
});

test('should create action to set filter using default value', () => {
    const action = setFilterText();

    expect(action).toEqual({
        type: SET_FILTER_TEXT,
        text: ''
    });
});

test('should create an action for sorting by amount', () => {
    const action = sortByAmount();

    expect(action).toEqual({ type: SORT_BY_AMOUNT });
});

test('should create an action for sorting by date', () => {
    const action = sortByDate();

    expect(action).toEqual({ type: SORT_BY_DATE });
});