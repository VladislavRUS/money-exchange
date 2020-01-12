import React from 'react';
import { Text, StyledButton } from './TextButton.styles';

interface ITextButtonProps {
  text: string;
  onClick: () => void;
  color?: string;
}

const TextButton = React.forwardRef((props: ITextButtonProps, ref?: any) => (
  <StyledButton onClick={props.onClick} ref={ref}>
    <Text color={props.color}>{props.text}</Text>
  </StyledButton>
));

export default TextButton;
