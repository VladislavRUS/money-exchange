import React from 'react';
import sinon from 'sinon';
import { shallow } from 'enzyme';
import { BaseButton } from '../components/Buttons/BaseButton';
import { StyledButton } from '../components/Buttons/BaseButton/BaseButton.styles';
import '../setupTests';

describe('<BaseButton />', () => {
  it('simulates click events', () => {
    const onButtonClick = sinon.spy();
    const wrapper = shallow(<BaseButton onClick={onButtonClick} />);

    wrapper.find(StyledButton).simulate('click');
    expect(onButtonClick).toHaveProperty('callCount', 1);
  });
});
