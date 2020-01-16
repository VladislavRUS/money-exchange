import React from 'react';
import { BaseButton } from '../BaseButton';
import { Wrapper } from './RegularButton.styles';

type TBaseButtonProps = React.ComponentProps<typeof BaseButton>;

const RegularButton: React.FC<TBaseButtonProps> = ({ children, ...props }) => (
  <BaseButton {...props}>
    <Wrapper>{children}</Wrapper>
  </BaseButton>
);

export default RegularButton;
