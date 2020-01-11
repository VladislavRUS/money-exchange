import styled, { css } from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Wrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding-top: 100px;
`;

export const StyledNavLink = styled(NavLink)`
  text-decoration: none;
`;

export const LinkContent = styled.div<{ isActive: boolean }>`
  height: 56px;
  line-height: 56px;
  padding-left: 32px;
  text-decoration: none;
  font-size: 16px;
  color: #8b959e;
  border-left: 2px solid transparent;

  ${props =>
    props.isActive &&
    css`
      border-left: 2px solid #eb008d;
      color: #191c1e;
      font-weight: 500;
    `}
`;
