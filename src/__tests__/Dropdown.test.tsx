import React from 'react';
import { mount } from 'enzyme';
import { Dropdown } from '../components/Dropdown';

describe('<Dropdown />', () => {
  it('hides content when closed', () => {
    const wrapper = mount(
      <Dropdown
        isOpened={false}
        content={ref => (
          <div ref={ref} className={'content'}>
            content
          </div>
        )}
      >
        {ref => <div ref={ref}>children</div>}
      </Dropdown>,
    );

    expect(wrapper.find('.content').exists()).toBe(false);
  });

  it('shows content when opened', () => {
    const wrapper = mount(
      <Dropdown
        isOpened={true}
        content={ref => (
          <div ref={ref} className={'content'}>
            content
          </div>
        )}
      >
        {ref => <div ref={ref}>children</div>}
      </Dropdown>,
    );

    expect(wrapper.find('.content').exists()).toBe(true);
  });
});
