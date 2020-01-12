import React from 'react';
import { BaseItem } from '../BaseItem';
import { Text } from './TextItem.styles';

interface ITextItemProps {
  text: string;
  onClick: (text: string) => void;
}

const TextItem: React.FC<ITextItemProps> = ({ text, onClick }) => (
  <BaseItem item={text} onClick={onClick} renderContent={item => <Text>{item}</Text>} />
);

export default TextItem;
