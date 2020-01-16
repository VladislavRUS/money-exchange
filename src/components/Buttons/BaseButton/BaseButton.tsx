import React from 'react';
import { StyledButton } from './BaseButton.styles';

export enum BaseButtonLook {
  SUCCESS,
  DEFAULT,
}

interface IBaseButtonProps {
  onClick: () => void;
  isDisabled?: boolean;
  look?: BaseButtonLook;
  showBorder?: boolean;
}

export const RegularButton: React.FC<IBaseButtonProps> = ({
  children,
  isDisabled = false,
  onClick,
  look = BaseButtonLook.DEFAULT,
  showBorder = false,
}) => (
  <StyledButton isDisabled={isDisabled} onClick={onClick} look={look} showBorder={showBorder}>
    {children}
  </StyledButton>
);

export default RegularButton;
