import React from 'react';
import { shallow } from 'enzyme';
import { InlineNavbar } from '../components/InlineNavbar';
import { StyledLink } from '../components/InlineNavbar/InlineNavbar.styles';

describe('<InlineNavbar />', () => {
  it('renders links', () => {
    const links = [
      { to: '/test1', title: 'test1' },
      { to: '/test2', title: 'test2' },
    ];

    const wrapper = shallow(<InlineNavbar links={links} />);

    expect(wrapper.find(StyledLink)).toHaveLength(links.length);
  });
});
