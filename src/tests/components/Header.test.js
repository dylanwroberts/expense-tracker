import React from 'react';
import { shallow } from 'enzyme';
import Header from '../../components/Header';

test('should correctly render header', () => {
    const wrapper= shallow(<Header />);

    expect(wrapper).toMatchSnapshot();

    //expect the <Header/>'s h1's text to be 'Expense Tracker'
    expect(wrapper.find('h1').text()).toBe('Expense Tracker');

    // .find() acts similarly to how JQuery works - it allows you to
    // grab an item by its class, ID, tag type, etc...

    // .text() will return the string content from inside of an element
});