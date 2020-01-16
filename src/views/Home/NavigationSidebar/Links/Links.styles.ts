import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Wrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding-top: 100px;
`;

export const LinkContent = styled.div`
  height: 56px;
  line-height: 56px;
  padding-left: 32px;
  text-decoration: none;
  font-size: 16px;
  color: #8b959e;
  border-left: 2px solid transparent;
`;

export const StyledNavLink = styled(NavLink)`
  text-decoration: none;

  &.active {
    ${LinkContent} {
      border-left: 2px solid #eb008d;
      color: #191c1e;
      font-weight: 500;
    }
  }
`;
