import React from 'react';
import { BaseButton } from '../BaseButton';
import { Text } from './TextButton.styles';

type TBaseButtonProps = React.ComponentProps<typeof BaseButton>;

interface ITextButtonProps {
  text: string;
}

type TProps = ITextButtonProps & TBaseButtonProps;

const TextButton: React.FC<TProps> = ({ text, ...props }) => (
  <BaseButton {...props}>
    <Text mode={props.mode}>{text}</Text>
  </BaseButton>
);

export default TextButton;
