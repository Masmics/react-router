import React from 'react';
import { shallow } from 'enzyme';
import Blue from './Blue';

describe('Blue component', () => {
  it('renders the blue', () => {
    const wrapper = shallow(<Blue />);
    expect(wrapper).toMatchSnapshot();
  });
});
