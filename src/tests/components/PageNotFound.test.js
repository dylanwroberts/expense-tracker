import React from 'react';
import { shallow } from 'enzyme';
import PageNotFound from '../../pages/PageNotFound';

test('should render the 404 page', () => {
    const wrapper = shallow(<PageNotFound />);
    expect(wrapper).toMatchSnapshot();
});