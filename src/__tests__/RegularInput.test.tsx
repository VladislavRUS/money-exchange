import React from 'react';
import { mount } from 'enzyme';
import { RegularInput } from '../components/RegularInput/';
import { StyledInput } from '../components/RegularInput/RegularInput.styles';
import sinon from 'sinon';

describe('<RegularInput />', () => {
  it('calls onChangeText', () => {
    const onChangeText = sinon.spy();
    const wrapper = mount(<RegularInput value={'test'} onChangeText={onChangeText} />);

    wrapper.find(StyledInput).simulate('change');

    expect(onChangeText).toHaveProperty('callCount', 1);
    expect(onChangeText.calledWith('test')).toBe(true);
  });

  it('calls onFocus', () => {
    const onChangeText = sinon.spy();
    const onFocus = sinon.spy();
    const wrapper = mount(<RegularInput value={''} onChangeText={onChangeText} onFocus={onFocus} />);

    wrapper.find(StyledInput).simulate('focus');

    expect(onFocus).toHaveProperty('callCount', 1);
  });

  it('renders value', () => {
    const onChangeText = sinon.spy();
    const onFocus = sinon.spy();
    const wrapper = mount(<RegularInput value={'test'} onChangeText={onChangeText} onFocus={onFocus} />);

    expect(wrapper.find(StyledInput).props().value).toBe('test');
  });

  it('toggles isFocused', () => {
    const onChangeText = sinon.spy();
    const onFocus = sinon.spy();
    const wrapper = mount(<RegularInput value={''} onChangeText={onChangeText} onFocus={onFocus} />);

    wrapper.find(StyledInput).simulate('focus');

    expect(wrapper.find('RegularInput').state('isFocused')).toBe(true);

    wrapper.find(StyledInput).simulate('blur');

    expect(wrapper.find('RegularInput').state('isFocused')).toBe(false);
  });
});
