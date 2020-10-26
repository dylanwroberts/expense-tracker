import filterReducer from '../../reducers/filter';
import moment from 'moment';
import {
    SORT_BY_AMOUNT,
    SORT_BY_DATE,
    SET_FILTER_TEXT,
    SET_START_DATE,
    SET_END_DATE
} from '../../constants/actionTypes';

test('should setup default filter values', () => {
    const state = filterReducer(undefined, { type: '@@INIT' });
    expect(state).toEqual({
        text: '',
        sortBy: 'date',
        startDate: moment().startOf('month'),
        endDate: moment().endOf('month')
    });
});

test('should set sortBy to amount', () => {
    const state = filterReducer(undefined, {
        type: SORT_BY_AMOUNT
    });

    expect(state.sortBy).toBe('amount');
});

test('should set sortBy to date', () => {
    const defaultState = { sortBy: 'amount' };

    const action = { type: SORT_BY_DATE };

    const state = filterReducer(defaultState, action);

    expect(state.sortBy).toBe('date');
});

test('should set text filter', () => {
    const state = filterReducer(undefined, {
        type: SET_FILTER_TEXT,
        text: 'not an empty string'
    });
    expect(state.text).not.toBe('');
});

test('should set startDate filter', () => {
    const testTime = moment(0)
    const state = filterReducer(undefined, {
        type: SET_START_DATE,
        startDate: testTime
    });
    expect(state.startDate.valueOf()).toBe(testTime.valueOf());
});

test('should set endDate filter', () => {
    const testTime = moment(0)
    const state = filterReducer(undefined, {
        type: SET_END_DATE,
        endDate: testTime
    });
    expect(state.endDate.valueOf()).toBe(testTime.valueOf())
});