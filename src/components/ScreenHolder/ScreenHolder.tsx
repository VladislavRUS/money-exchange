import React from 'react';
import { Wrapper } from './ScreenHolder.styles';

interface IScreenHolderProps {
  isVisible: boolean;
}

const ScreenHolder: React.FC<IScreenHolderProps> = ({ isVisible, children }) =>
  isVisible ? <Wrapper>{children}</Wrapper> : null;

export default ScreenHolder;
