import React from 'react';
import { shallow } from 'enzyme';
import Counter from './Counter';

describe('<Counter />', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Counter />);
  });

  it('should render', () => {
    expect(wrapper.debug()).toBeDefined();
    expect(wrapper.find('h2').text()).toEqual('0');
  });

  it('should be able to add to the count', () => {
    wrapper.find('[data-test="add-button"]').simulate('click');
    expect(wrapper.find('h2').text()).toEqual('1');
  });

  it('should be able to subtract from the count', () => {
    wrapper.find('[data-test="subtract-button"]').simulate('click');
    expect(wrapper.find('h2').text()).toEqual('-1');
  });
});
