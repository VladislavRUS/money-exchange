import React from 'react';
import { StyledButton } from './BaseButton.styles';

export enum BaseButtonMode {
  SUCCESS,
  DEFAULT,
}

interface IBaseButtonProps {
  onClick: () => void;
  isDisabled?: boolean;
  isLoading?: boolean;
  mode?: BaseButtonMode;
}

export const RegularButton: React.FC<IBaseButtonProps> = ({
  children,
  isDisabled = false,
  onClick,
  mode = BaseButtonMode.DEFAULT,
}) => (
  <StyledButton isDisabled={isDisabled} onClick={onClick} mode={mode}>
    {children}
  </StyledButton>
);

export default RegularButton;
