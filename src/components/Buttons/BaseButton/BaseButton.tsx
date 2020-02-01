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
  dataTestId?: string;
}

export const RegularButton: React.FC<IBaseButtonProps> = ({
  children,
  isDisabled = false,
  onClick,
  look = BaseButtonLook.DEFAULT,
  showBorder = false,
  dataTestId,
}) => (
  <StyledButton isDisabled={isDisabled} onClick={onClick} look={look} showBorder={showBorder} data-test-id={dataTestId}>
    {children}
  </StyledButton>
);

export default RegularButton;
