import React from 'react';
import { shallow } from 'enzyme';
import { ScreenHolder } from '../components/ScreenHolder';

describe('<ScreenHolder />', () => {
  it('shows content when visible', () => {
    const wrapper = shallow(
      <ScreenHolder isVisible={true}>
        <div className={'content'}>content</div>
      </ScreenHolder>,
    );

    expect(wrapper.find('.content').exists()).toBe(true);
  });

  it('hides content when not visible', () => {
    const wrapper = shallow(
      <ScreenHolder isVisible={false}>
        <div className={'content'}>content</div>
      </ScreenHolder>,
    );

    expect(wrapper.find('.content').exists()).toBe(false);
  });
});
