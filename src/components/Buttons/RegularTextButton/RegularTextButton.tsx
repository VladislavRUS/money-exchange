import React from 'react';

import { Text } from './RegularTextButton.styles';
import { RegularButton } from '../RegularButton';

type TRegularButtonProps = React.ComponentProps<typeof RegularButton>;

interface IRegularTextButton {
  text: string;
}

type TProps = IRegularTextButton & TRegularButtonProps;

const RegularTextButton: React.FC<TProps> = ({ text, look, ...props }) => (
  <RegularButton look={look} {...props}>
    <Text look={look}>{text}</Text>
  </RegularButton>
);

export default RegularTextButton;
