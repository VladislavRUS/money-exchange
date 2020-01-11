import React from 'react';
import { BaseButton } from '../BaseButton';
import { Wrapper } from './RoundedButton.styles';

type TBaseButtonProps = React.ComponentProps<typeof BaseButton>;

const RoundedButton: React.FC<TBaseButtonProps> = ({ children, ...props }) => (
  <Wrapper>
    <BaseButton {...props}>{children}</BaseButton>
  </Wrapper>
);

export default RoundedButton;
