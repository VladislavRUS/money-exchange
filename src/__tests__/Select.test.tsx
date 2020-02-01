import React from 'react';
import { mount } from 'enzyme';
import { Select } from '../components/Select';
import { Wrapper } from '../components/Select/Select.styles';

describe('<BaseButton />', () => {
  it('shows content when opened', () => {
    const wrapper = mount(
      <Select isOpened={true} content={() => <div className={'content'}>content</div>}>
        {ref => <div ref={ref}>children</div>}
      </Select>,
    );

    expect(wrapper.find('.content').exists()).toBe(true);
  });

  it('hides content when close', () => {
    const wrapper = mount(
      <Select isOpened={false} content={() => <div className={'content'}>content</div>}>
        {ref => <div ref={ref}>children</div>}
      </Select>,
    );

    expect(wrapper.find('.content').exists()).toBe(false);
  });

  it('correctly sets width', () => {
    const wrapperWidth = 300;

    const wrapper = mount(
      <Select isOpened={true} content={() => <div className={'content'}>content</div>} width={wrapperWidth}>
        {ref => <div ref={ref}>children</div>}
      </Select>,
    );

    expect(getComputedStyle(wrapper.find(Wrapper).getDOMNode())).toHaveProperty('width', `${wrapperWidth}px`);
  });
});
