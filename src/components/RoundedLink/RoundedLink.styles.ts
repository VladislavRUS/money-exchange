import styled, { css } from 'styled-components';
import { NavLink } from 'react-router-dom';
import { RoundedLinkLook } from './RoundedLink';

export const StyledLink = styled(NavLink)`
  text-transform: none;
`;

export const LinkContent = styled.div<{ look: RoundedLinkLook }>`
  height: 56px;
  width: 56px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background-color: #fff;
  box-shadow: 0 5px 15px -2px rgba(0, 0, 0, 0.15);

  ${props =>
    props.look === RoundedLinkLook.SUCCESS &&
    css`
      background-color: rgb(235, 0, 141);
    `};
`;
