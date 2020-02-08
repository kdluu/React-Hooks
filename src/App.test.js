import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

describe('<App />', () => {
  it('renders hello world', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.text()).toContain('Hello World');
  });
});
