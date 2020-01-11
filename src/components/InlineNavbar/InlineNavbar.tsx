import React from 'react';
import { Wrapper, StyledLink, LinkContent } from './InlineNavbar.styles';

export interface INavbarLink {
  to: string;
  title: string;
  exact?: boolean;
}

interface IInlineNavbarProps {
  links: INavbarLink[];
}

const InlineNavbar: React.FC<IInlineNavbarProps> = ({ links }) => (
  <Wrapper>
    {links.map(link => (
      <StyledLink to={link.to} key={link.to} exact={link.exact}>
        <LinkContent>{link.title}</LinkContent>
      </StyledLink>
    ))}
  </Wrapper>
);

export default InlineNavbar;
