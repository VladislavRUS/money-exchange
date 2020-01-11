import React from 'react';
import { Wrapper, LinkContent, StyledNavLink } from './Links.styles';
import { Routes } from '../../../../constants/Routes';
import { RouteComponentProps, withRouter } from 'react-router-dom';

const links = [
  {
    to: Routes.ACCOUNTS,
    name: 'Accounts',
  },
  {
    to: Routes.CARDS,
    name: 'Cards',
  },
];

const Links: React.FC<RouteComponentProps> = ({ location }) => (
  <Wrapper>
    {links.map(link => (
      <StyledNavLink to={link.to} key={link.to}>
        <LinkContent isActive={location.pathname === link.to}>{link.name}</LinkContent>
      </StyledNavLink>
    ))}
  </Wrapper>
);

export default withRouter(Links);
