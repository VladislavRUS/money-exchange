import React from 'react';
import { Wrapper } from './BaseItem.styles';

interface IBaseItemProps<T> {
  item: T;
  renderContent: (item: T) => React.ReactNode;
  onClick: (item: T) => void;
}

class BaseItem<T> extends React.PureComponent<IBaseItemProps<T>> {
  onClick = () => {
    this.props.onClick(this.props.item);
  };

  render() {
    const { item, renderContent } = this.props;

    return <Wrapper onClick={this.onClick}>{renderContent(item)}</Wrapper>;
  }
}

export default BaseItem;
