import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  border-bottom: 1px solid rgb(206, 213, 219);
`;

export const LinkContent = styled.div`
  font-weight: 400;
  color: rgb(139, 149, 158);
`;

export const StyledLink = styled(NavLink)`
  position: relative;
  display: flex;
  align-items: center;
  text-decoration: none;
  height: 58px;

  &::after {
    content: '';
    position: absolute;
    bottom: -1px;
    left: 0;
    right: 0;
    height: 2px;
    background-color: rgb(235, 0, 141);
    opacity: 0;
    transition: opacity 0.2s ease;
  }

  & + & {
    margin-left: 32px;
  }

  &:hover::after {
    opacity: 1;
  }

  &.active {
    &::after {
      opacity: 1;
    }

    ${LinkContent} {
      font-weight: 500;

      color: rgb(25, 28, 31);
    }
  }
`;
