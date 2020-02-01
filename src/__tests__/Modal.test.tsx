import React from 'react';
import sinon from 'sinon';
import { mount } from 'enzyme';
import { Modal } from '../components/Modal';
import { CloseIconWrapper } from '../components/Modal/Modal.styles';

describe('<Modal />', () => {
  it('hides content when closed', () => {
    const wrapper = mount(
      <Modal isOpened={false}>
        <div className={'content'}>content</div>
      </Modal>,
    );

    expect(wrapper.find('.content').exists()).toBe(false);
  });

  it('shows content when opened', () => {
    const wrapper = mount(
      <Modal isOpened={true}>
        <div className={'content'}>content</div>
      </Modal>,
    );

    expect(wrapper.find('.content').exists()).toBe(true);
  });

  it('calls onRequestClose', () => {
    const onRequestClose = sinon.spy();

    const wrapper = mount(
      <Modal isOpened={true} onRequestClose={onRequestClose}>
        <div className={'content'}>content</div>
      </Modal>,
    );

    wrapper.find(CloseIconWrapper).simulate('click');
    expect(onRequestClose).toHaveProperty('callCount', 1);
  });

  it('renders external content', () => {
    const wrapper = mount(
      <Modal isOpened={true} externalContent={() => <div className={'external'}>external content</div>}>
        <div className={'content'}>content</div>
      </Modal>,
    );

    expect(wrapper.find('.external').exists()).toBe(true);
  });
});
