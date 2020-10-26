import React from 'react';
import { shallow } from 'enzyme';
import Expense from '../../components/Expense';
import expenses from '../fixtures/expenses';

test('should render an expense from test data', () => {
    const wrapper = shallow(<Expense expense={expenses[0]} />);

    expect(wrapper).toMatchSnapshot();
});