import React from 'react';
import { shallow } from 'enzyme';
import { Expenses } from '../../components/Expenses';
import expenses from '../fixtures/expenses';

test('should render the Expenses component with expenses fixture', () => {
    const wrapper = shallow(<Expenses expenses={expenses} />);

    expect(wrapper).toMatchSnapshot();
});

test('should render Expenses component with no expenses', () => {
    const wrapper = shallow(<Expenses expenses={[]} />);
    
    expect(wrapper).toMatchSnapshot();
});