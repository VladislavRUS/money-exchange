import React from 'react';
import { Dropdown } from '../Dropdown';
import { Wrapper } from './Select.styles';
import { TextItem } from './TextItem';

type TDropdownProps = React.ComponentProps<typeof Dropdown>;

interface ISelectProps {
  content: () => React.ReactNode;
  width?: number;
}

type TProps = ISelectProps & TDropdownProps;

class Select extends React.Component<TProps> {
  static TextItem = TextItem;

  renderContent = (ref: any) => {
    const { content, width = 100 } = this.props;

    return (
      <Wrapper ref={ref} width={width}>
        {content()}
      </Wrapper>
    );
  };

  render() {
    const { isOpened, children, onClickOutside } = this.props;

    return (
      <Dropdown isOpened={isOpened} content={this.renderContent} onClickOutside={onClickOutside}>
        {ref => children(ref)}
      </Dropdown>
    );
  }
}

export default Select;
