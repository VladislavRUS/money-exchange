import styled, { css } from 'styled-components';
import { BaseButtonLook } from './BaseButton';

export const StyledButton = styled.button<{ isDisabled: boolean; look: BaseButtonLook; showBorder: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0;
  height: 56px;
  width: 100%;
  border-radius: 32px;
  cursor: pointer;
  border: ${props => (props.showBorder ? '1px solid rgb(206, 213, 219)' : 'none')};
  transition: background-color .2s ease;
  
  ${props =>
    props.look === BaseButtonLook.DEFAULT &&
    css`
      background-color: #fff;

      &:active {
        background-color: #d8d8d8;
      }
    `}
    
  ${props =>
    props.look === BaseButtonLook.SUCCESS &&
    css`
      background-color: rgb(235, 0, 141);
      box-shadow: 0 5px 10px -2px rgb(235, 0, 141);

      &:active {
        background-color: rgb(198, 0, 115);
      }
    `}

  ${props =>
    props.isDisabled &&
    css`
      pointer-events: none;
      opacity: 0.5;
    `}
`;
