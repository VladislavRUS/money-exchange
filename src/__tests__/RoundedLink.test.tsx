import React from 'react';
import { shallow } from 'enzyme';
import { RoundedLink } from '../components/RoundedLink';

describe('<RoundedLink />', () => {
  it('renders content', () => {
    const wrapper = shallow(
      <RoundedLink to={'/'}>
        <div className={'content'}>content</div>
      </RoundedLink>,
    );

    expect(wrapper.find('.content').exists()).toBe(true);
  });
});
