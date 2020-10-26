import React from 'react';
import { shallow } from 'enzyme';
import Dashboard from '../../pages/Dashboard';

test('should render the dashboard', () => {
    const wrapper = shallow(<Dashboard />);
    expect(wrapper).toMatchSnapshot();
});