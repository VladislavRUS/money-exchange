import React from 'react';
import { Text } from './TextButton.styles';
import { RegularButton } from '../RegularButton';

type TPaddedButtonProps = React.ComponentProps<typeof RegularButton>;

interface ITextButtonProps {
  text: string;
}

type TProps = ITextButtonProps & TPaddedButtonProps;

const TextButton: React.FC<TProps> = ({ text, ...props }) => (
  <RegularButton {...props}>
    <Text look={props.look}>{text}</Text>
  </RegularButton>
);

export default TextButton;
