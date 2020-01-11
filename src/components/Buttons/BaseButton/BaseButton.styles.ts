import styled, { css } from 'styled-components';
import { BaseButtonMode } from './BaseButton';

export const StyledButton = styled.button<{ isDisabled: boolean; mode: BaseButtonMode }>`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0;
  padding: 0 32px;
  height: 56px;
  width: 100%;
  border-radius: 32px;
  cursor: pointer;
  border: none;
  transition: opacity .2s ease;
  
  &:active {
    opacity: 0.8;
  }

  ${props =>
    props.mode === BaseButtonMode.DEFAULT &&
    css`
      background-color: #fff;
      border: 1px solid rgb(206, 213, 219);
    `}
    
  ${props =>
    props.mode === BaseButtonMode.SUCCESS &&
    css`
      background-color: rgb(235, 0, 141);
    `}

  ${props =>
    props.isDisabled &&
    css`
      pointer-events: none;
      opacity: 0.5;
    `}
`;
