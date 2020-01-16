import React from 'react';
import { StyledLink, LinkContent } from './RoundedLink.styles';

export enum RoundedLinkLook {
  SUCCESS,
  DEFAULT,
}

interface IRoundedLinkProps {
  to: string;
  look?: RoundedLinkLook;
}

const RoundedLink: React.FC<IRoundedLinkProps> = ({ to, look = RoundedLinkLook.DEFAULT, children }) => (
  <StyledLink to={to}>
    <LinkContent look={look}>{children}</LinkContent>
  </StyledLink>
);

export default RoundedLink;
